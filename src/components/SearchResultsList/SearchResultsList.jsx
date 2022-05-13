import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SearchResultsList() {
    const dispatch = useDispatch();

    const gifList = useSelector((store) => store.gifList);

    const [gif, setGif] = useState([]);

    const handleSubmit = () => {
        dispatch({
            type: 'FETCH_GIF'
        })
    }

  return (
    <div>
     <ul>
         {gifList.map((gif) => {
             return <
         })}
     </ul>
    </div>
  );
}

export default SearchResultsList;
