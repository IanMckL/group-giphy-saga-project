import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './FavoritesList.css'



function FavoritesList() {

    const dispatch = useDispatch();

    const favoritesList = useSelector(store => store.favoritesList);

    return (
        <div className= "favoritesList">
            {favoritesList &&
                favoritesList.map((fav) => {
                    return (
                        <>
                            <img src={fav.url}></img>
                        </>
                    )
                })
            }
        </div>



    )
}

export default FavoritesList