import React,{ useState } from 'react';
import { sampleData } from '../constants/sampleData';
import Modal from './Modal';
import Text from './Text';
import Input from './Input';
import { InputAdornment } from '@mui/material';
import NestedCheckbox from './NestedCheckbox';
import Button from './Button';
import { CrossIcon,SearchIcon } from '../assets';

const SelectProductModal = ( { open,onClose,onSubmit } ) => {
    const [ filterData,setFilterData ] = useState( sampleData );
    const [ selectedData,setSelectedData ] = useState( [] );

    // Filter products based on search input
    const onFilter = ( e ) => {
        const value = e.target.value;
        setFilterData(
            sampleData.filter( ( item ) => item.title.toLowerCase().includes( value.toLowerCase() ) )
        );
    };

    // Handle selection of parent or child items
    const onSelect = ( parentId,selectedVariants ) => {
        setSelectedData( ( prev ) => {
            const updatedData = [ ...prev ];
            const parentIndex = updatedData.findIndex( ( item ) => item.id === parentId );

            if ( selectedVariants.length === 0 ) {
                // Remove the parent if no variants are selected
                return updatedData.filter( ( item ) => item.id !== parentId );
            }

            if ( parentIndex > -1 ) {
                // Update the existing parent with new variants
                updatedData[ parentIndex ].variants = selectedVariants;
            } else {
                // Add a new parent with selected variants
                const parent = sampleData.find( ( item ) => item.id === parentId );
                updatedData.push( { ...parent,variants: selectedVariants } );
            }

            return updatedData;
        } );
    };

    return (
        <Modal open={ open } onClose={ onClose }>
            <div className="w-screen flex flex-col max-w-xl max-h-[calc(100vh-64px)]">
                {/* Header */ }
                <div className="flex items-center justify-between px-5 py-2 border-b border-b-border">
                    <Text className="font-semibold text-lg">Select Products</Text>
                    <button className="p-2" onClick={ onClose }>
                        <img className="size-4" src={ CrossIcon } alt="" />
                    </button>
                </div>

                {/* Search Input */ }
                <div className="px-5 py-2 border-b border-b-border">
                    <Input
                        className="w-full"
                        size="small"
                        placeholder="Search product"
                        variant="outlined"
                        onChange={ onFilter }
                        slotProps={ {
                            input: {
                                className: '!text-sm',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={ SearchIcon } alt="" />
                                    </InputAdornment>
                                ),
                            },
                        } }
                    />
                </div>

                <div className='overflow-auto flex-1'>
                    {/* Product List */ }
                    { filterData.map( ( item ) => (
                        <NestedCheckbox
                            key={ item.id }
                            data={ item }
                            onSelect={ ( selectedVariants ) => onSelect( item.id,selectedVariants ) }
                        />
                    ) ) }
                </div>

                {/* Footer */ }
                <div className="flex items-center px-5 py-3 border-t border-t-border">
                    <Text>{ selectedData.length } product(s) selected</Text>
                    <div className="ml-auto flex gap-2">
                        <Button size='small' onClick={ onClose } variant="outlined" color="success">
                            Cancel
                        </Button>
                        <Button size='small' onClick={ () => onSubmit( selectedData ) } variant="contained" color="success">
                            Add
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SelectProductModal;
