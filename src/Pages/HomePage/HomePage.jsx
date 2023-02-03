import { useSelector } from 'react-redux';
import { getUser } from 'redux/users/usersSelector';

export const HomePage = () => {
  const users = useSelector(getUser);
  console.log(users);
  console.log(getUser);
  return (
    <>
      <ul>
        {users.map(user => (
          <li>
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.id}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
