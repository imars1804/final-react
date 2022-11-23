import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useEffect, useState} from 'react';
import Title from '../Title';

const films = [
    { id: 1, image: 'https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=es-es&w=1280', title: "Interestellar"},
    { id: 2, image: 'https://i.blogs.es/f68c0f/stintoddvdkeyart-head/840_560.jpg', title: "Star Trek"},
    { id: 3, image: 'https://i0.wp.com/cinefiloz.com/wp-content/uploads/2018/04/ronin.jpg?fit=678%2C381&ssl=1', title: "Ronin"},
];

export const ItemListContainer = ({texto}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => console.log(res));

    }, [])

    const onAdd = (cantidad) => {
        console.log(`Has añadido ${cantidad} unidades`);
    }

    return ( 
        <>
            <Title greeting={texto} />
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            <ItemList data={data} />
        </>
     );
}

export default ItemListContainer;