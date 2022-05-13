import { useDispatch } from 'react-redux';
import { useState } from 'react';

function FavoriteItem(prop) {
  const dispatch = useDispatch();

  // useState to change the value of category and give that value to a reducer. Then, give reducer value to PUT route.
  const [category, setCategory] = useState([]);

  const changeCategory = () => {
    dispatch({
      type: 'CHANGE_CATEGORY',
      payload: { id: prop.fav.id, categoryId: category },
    });
  };

  return (
    <>
      <li>
        <img src={prop.fav.url}></img>
        <select name='categories'>
          <option value='1' onChange={(event) => setCategory(event.target.value)}>
            Funny
          </option>
          <option value='2' onChange={(event) => setCategory(event.target.value)}>
            Cohort
          </option>
          <option value='3' onChange={(event) => setCategory(event.target.value)}>
            Cartoon
          </option>
          <option value='4' onChange={(event) => setCategory(event.target.value)}>
            NSFW
          </option>
          <option value='5' onChange={(event) => setCategory(event.target.value)}>
            Meme
          </option>
        </select>
        <button onClick={changeCategory}>Submit</button>
      </li>
    </>
  );
}

export default FavoriteItem;
