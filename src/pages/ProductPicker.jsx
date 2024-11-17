import SortableList from 'react-easy-sort'
import { Button,Layout } from '../components'
import ProductSortableItem from '../components/ProductSortableItem'
import { useProductContext } from '../contexts/ProductContext'
import { useCallback } from 'react'

const ProductPicker = () => {
  const { products,setProducts,createProduct } = useProductContext()

  // Memoized handler for reordering parent products
  const onSortProduct = useCallback( ( oldIndex,newIndex ) => {
    setProducts( ( prevProducts ) => {
      const updatedProducts = [ ...prevProducts ];
      const [ movedProduct ] = updatedProducts.splice( oldIndex,1 );
      updatedProducts.splice( newIndex,0,movedProduct );
      return updatedProducts;
    } );
  },[ setProducts ] );

  // Memoized handler for reordering child variants
  const onSortChild = useCallback(
    ( productId,oldIndex,newIndex ) => {
      setProducts( ( prevProducts ) =>
        prevProducts.map( ( product ) => {
          if ( product.id === productId ) {
            const updatedVariants = [ ...product.variants ];
            const [ movedVariant ] = updatedVariants.splice( oldIndex,1 );
            updatedVariants.splice( newIndex,0,movedVariant );
            return { ...product,variants: updatedVariants };
          }
          return product;
        } )
      );
    },
    [ setProducts ]
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

          <SortableList
            onSortEnd={ onSortProduct }
            draggedItemClassName="dragged"
          >
            <div className="flex flex-col gap-2">
              { products.map( ( product,index ) => (
                <ProductSortableItem key={ product.id } index={ index } product={ product } onSortChild={ onSortChild } />
              ) ) }
            </div>
          </SortableList>

          <div className='flex justify-end py-3'>
            <Button className='w-48' variant='outlined' onClick={ createProduct } color='success' size='large' >Add Product</Button>
          </div>
        </div>
      </div>

      {/* <code>
        <pre>
          { JSON.stringify( products,null,4 ) }
        </pre>
      </code> */}

    </Layout>
  )
}

export default ProductPicker
