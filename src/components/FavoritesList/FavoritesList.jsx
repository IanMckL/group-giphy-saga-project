import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function FavoritesList(){

    const dispatch = useDispatch();

    const favoritesList = useSelector(store => store.favoritesList);

    return(
        <ul>
            {favoritesList.map(fav) }
        </ul>
    )
}

export default FavoritesList