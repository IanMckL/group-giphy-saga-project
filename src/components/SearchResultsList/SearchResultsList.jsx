import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

function SearchResultsList() {

   
    const dispatch = useDispatch();

    const [gif, setGif] = useState([]);
    const gifList = useSelector((store)=>store.gifList)
    const handleSubmit = () => {
        dispatch({
            type: 'FETCH_GIF'
        })
    }

    
   
  return (
    <>
        { gifList.data &&


          gifList.data.map((gif)=>{

            return(
              <>
                <img src={gif.images.fixed_height.url}></img>
              </>
            )
          })
        
        
        }
      </>
        
      
   
  )
}

export default SearchResultsList;
