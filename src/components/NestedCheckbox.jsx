// import React,{ useEffect,useMemo,useState } from 'react';
// import { Checkbox,FormControlLabel } from '@mui/material';

// const NestedCheckbox = ( { data } ) => {
//     const [ checked,setChecked ] = useState( Array( data.variants.length ).fill( false ) );
//     const isIndeterminate = useMemo( () => ( checked.some( ( item ) => item ) && !checked.every( ( item ) => item ) ),[ checked ] )

//     const handleParentChange = ( event ) => {
//         setChecked( Array( data.variants.length ).fill( event.target.checked ) );
//     };

//     const handleChildChange = ( event,index ) => {
//         const updatedChecked = [ ...checked ];
//         updatedChecked[ index ] = event.target.checked;
//         setChecked( updatedChecked );
//     };

//     return (
//         <div>
//             <div className="border-b border-b-border px-5">
//                 <FormControlLabel
//                     label={
//                         <div className="flex items-center gap-2 py-2">
//                             <img className='size-9 rounded' src={ data.image.src } alt="product-image" />
//                             <span>{ data.title }</span>
//                         </div>
//                     }
//                     control={
//                         <Checkbox
//                             indeterminate={ isIndeterminate }
//                             checked={ checked.every( ( item ) => item ) }
//                             onChange={ handleParentChange }
//                         />
//                     }
//                 />
//             </div>
//             <div className="flex flex-col">
//                 { data?.variants?.map( ( item,index ) => (
//                     <div className="border-b border-b-border ps-14" key={ item.id }>
//                         <FormControlLabel
//                             className='w-full flex items-center gap-2 [&_span:last-child]:!flex-1'
//                             label={
//                                 <div className="flex w-full gap-5 py-2 pe-3">
//                                     <div className='flex-1'>{ item.title }</div>
//                                     <div className=''>99 available</div>
//                                     <div className=''>${ Number( item.price ) + 0.00 }</div>
//                                 </div>
//                             }
//                             control={
//                                 <Checkbox
//                                     checked={ checked[ index ] }
//                                     onChange={ ( event ) => handleChildChange( event,index ) }
//                                 />
//                             }
//                         />
//                     </div>
//                 ) ) }
//             </div>
//         </div>
//     );
// };

// export default NestedCheckbox;

import React,{ useState,useEffect } from 'react';
import { Checkbox,FormControlLabel } from '@mui/material';

const NestedCheckbox = ( { data,onSelect } ) => {
  const [ checked,setChecked ] = useState( Array( data.variants.length ).fill( false ) );

  // Update selected variants whenever the state changes
  useEffect( () => {
    const selectedVariants = data.variants.filter( ( _,index ) => checked[ index ] );
    onSelect( selectedVariants );
  },[ checked,data.variants ] );

  // Handle parent checkbox change
  const handleParentChange = ( event ) => {
    setChecked( Array( data.variants.length ).fill( event.target.checked ) );
  };

  // Handle individual variant checkbox change
  const handleChildChange = ( event,index ) => {
    const updatedChecked = [ ...checked ];
    updatedChecked[ index ] = event.target.checked;
    setChecked( updatedChecked );
  };

  const isIndeterminate = checked.some( ( item ) => item ) && !checked.every( ( item ) => item );

  return (
    <div>
      <div className="border-b border-b-border px-5">
        <FormControlLabel
          label={
            <div className="flex items-center gap-2 py-2">
              <img className='size-9 rounded' src={ data.image.src } alt="product-image" />
              <span>{ data.title }</span>
            </div>
          }
          control={
            <Checkbox
              color='success'
              indeterminate={ isIndeterminate }
              checked={ checked.every( ( item ) => item ) }
              onChange={ handleParentChange }
            />
          }
        />
      </div>
      <div className="flex flex-col">
        { data.variants.map( ( item,index ) => (
          <div className="border-b border-b-border ps-12" key={ item.id }>
            <FormControlLabel
              className='w-full !m-0 flex items-center gap-2 [&_span:last-child]:!flex-1'
              label={
                <div className="flex w-full gap-5 py-2 pe-3">
                  <div className='flex-1'>{ item.title }</div>
                  <div className=''>99 available</div>
                  <div className=''>${ Number( item.price ) + 0.00 }</div>
                </div>
              }
              control={
                <Checkbox
                  color='success'
                  checked={ checked[ index ] }
                  onChange={ ( event ) => handleChildChange( event,index ) }
                />
              }
            />
          </div>
        ) ) }
      </div>
    </div>
  );
};

export default NestedCheckbox;
