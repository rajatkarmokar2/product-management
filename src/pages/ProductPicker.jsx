import { useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import SortableList from "react-easy-sort";
import { Button, Layout } from "../components";
import ProductSortableItem from "../components/ProductSortableItem";
import { useProductContext } from "../contexts/ProductContext";

const ITEMS_PER_LOAD = 10; // Number of items to load per scroll

const ProductPicker = () => {
  const { products, setProducts, createProduct } = useProductContext();
  const [visibleProducts, setVisibleProducts] = useState(products.slice(0, ITEMS_PER_LOAD));
  const [currentPage, setCurrentPage] = useState(1);

  // Callback to load more products
  const loadMoreProducts = useCallback(() => {
    const nextPage = currentPage + 1;
    const start = visibleProducts.length;
    const end = start + ITEMS_PER_LOAD;

    setVisibleProducts((prev) => [...prev, ...products.slice(start, end)]);
    setCurrentPage(nextPage);
  }, [currentPage, visibleProducts, products]);

  // Intersection Observer to detect when "Load More" trigger comes into view
  const { ref, inView } = useInView({
    threshold: 1.0, // Trigger when the element is fully in view
    triggerOnce: false, // Keep observing after the first trigger
  });

  // Load more products when inView becomes true
  if (inView && visibleProducts.length < products.length) {
    loadMoreProducts();
  }

  // Memoized handler for reordering parent products
  const onSortProduct = useCallback(
    (oldIndex, newIndex) => {
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        const [movedProduct] = updatedProducts.splice(oldIndex, 1);
        updatedProducts.splice(newIndex, 0, movedProduct);
        return updatedProducts;
      });
    },
    [setProducts]
  );

  // Memoized handler for reordering child variants
  const onSortChild = useCallback(
    (productId, oldIndex, newIndex) => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (product.id === productId) {
            const updatedVariants = [...product.variants];
            const [movedVariant] = updatedVariants.splice(oldIndex, 1);
            updatedVariants.splice(newIndex, 0, movedVariant);
            return { ...product, variants: updatedVariants };
          }
          return product;
        })
      );
    },
    [setProducts]
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto mt-10 px-5">
        <div className="max-w-max">
          <div className="font-medium text-lg ms-8">Add Products</div>
          <div className="flex gap-3 items-center font-medium">
            <div className="w-80 p-2 ms-14">Product</div>
            <div className="w-40 p-2">Discount</div>
          </div>

          <SortableList onSortEnd={onSortProduct} draggedItemClassName="dragged">
            <div className="flex flex-col gap-2">
              {visibleProducts.map((product, index) => (
                <ProductSortableItem
                  key={product.id}
                  index={index}
                  product={product}
                  onSortChild={onSortChild}
                />
              ))}
            </div>
          </SortableList>

          {/* Load More Trigger */}
          <div ref={ref} className="py-5 text-center text-gray-500">
            {visibleProducts.length < products.length ? "Loading more products..." : "All products loaded"}
          </div>

          <div className={`flex justify-end py-3 sticky bottom-0 bg-white ${!inView && "shadow-[0_-30px_30px_-30px_rgba(0,0,0,0.5)]"}`}>
            <Button className="w-48" variant="outlined" onClick={createProduct} color="success" size="large">
              Add Product
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPicker;
