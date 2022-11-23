import ItemCount from '../ItemCount';
import React from 'react';
import Title from '../Title';

export const ItemListContainer = ({texto}) => {

    const onAdd = (cantidad) => {
        console.log(`Has añadido ${cantidad} unidades`);
    }

    return ( 
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </>
     );
}

export default ItemListContainer;