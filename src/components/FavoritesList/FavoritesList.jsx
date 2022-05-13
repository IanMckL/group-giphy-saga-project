import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



function FavoritesList() {

    const dispatch = useDispatch();

    const favoritesList = useSelector(store => store.favoritesList);

    return (
        <>
            {favoritesList &&
                favoritesList.map((fav) => {
                    return (
                        <>
                            <img src={fav}></img>
                        </>
                    )
                })
            }
        </>



    )
}

export default FavoritesList