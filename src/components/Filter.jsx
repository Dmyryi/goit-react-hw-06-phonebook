import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../redux/myContacts/myContacts';

export default function Filter(props) {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.myContacts.filter); // Provide a default value if filter is falsy
  const changeFilterHandler = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };
  return (
    <div>
      <label>
        Search
        <input type="text" value={filter} onChange={changeFilterHandler} />
      </label>
    </div>
  );
}
