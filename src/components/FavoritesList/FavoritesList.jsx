import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

function FavoritesList() {
  const dispatch = useDispatch();

  const favoritesList = useSelector((store) => store.favoritesList);

  return (
    <>
      <ul>
        {favoritesList &&
          favoritesList.map((fav) => {
            return (
              <>
                <FavoriteItem key={fav.id} fav={fav} />
              </>
            );
          })}
      </ul>
    </>
  );
}

export default FavoritesList;
