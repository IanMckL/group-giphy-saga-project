import React from 'react';
import { useDispatch, useSelector } from 'react-redux';




function SearchItem(gif) {

    const dispatch = useDispatch();

    const likeItem= ()=> {
        dispatch({
            type:'LIKE_GIF'
            
        })

    }

    return (
        <li>
            {gif}
            <button onClick={likeItem}>❤️</button>
        </li>
    )
}

export default SearchItem;