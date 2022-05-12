import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SearchResultsList() {
    const dispatch = useDispatch();

    const [gif, setGif] = useState([]);

    const handleSubmit = () => {
        dispatch({
            type: 'FETCH_GIF'
        })
    }

  return (
    <div>
      <div>
        <input type='text' value={gif} onChange={(event) => setGif(event.target.value)} />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default SearchResultsList;
