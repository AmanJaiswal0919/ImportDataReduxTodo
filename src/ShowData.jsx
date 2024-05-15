import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/userSlice';
function ShowData() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.data);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  return (
    <>
      <div className='addUser'>
        <input
          type='text'
          placeholder='Name...'
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Username...'
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id:
                  userList.length > 0
                    ? userList[userList.length - 1].id + 1
                   
                    : 1,
                    
                name,
                username,
                
              })
             
            );
          
          }}
        >
          {' '}
          Add User

        </button>

      </div>

      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.name}</h1>
              <h1> {user.id}</h1>
              <h1> {user.username}</h1>
              <input
                type='text'
                placeholder='New Username...'
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
                onClick={() => {
                  dispatch(
                    updateUsername({ id: user.id, username: newUsername })
                  );

                }}
              >
                {' '}
                Update Username

              </button>
              <button
                onClick={() => {
                  dispatch(deleteUser({ id: user.id }));
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ShowData;
