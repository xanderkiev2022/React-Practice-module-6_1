import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addAction } from 'redux/users/usersActions';

export const AddUserPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'age') {
      setAge(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: name,
      age: age,
      id: nanoid(),
    };
    dispatch(addAction(user));
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" onChange={handleChange} value={name} />
      </label>
      <label>
        Age
        <input type="number" name="age" onChange={handleChange} value={age} />
      </label>
      <button>Save</button>
    </form>
  );
};
