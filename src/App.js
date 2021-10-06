import UserList from './UserList';
import { useState, useEffect } from 'react';


const App = () => {
  const { response, loading, error } = UserList({
      method: 'post',
      url: '/posts',
      headers: JSON.stringify({ accept: '*/*' }),
      body: JSON.stringify({
          userId: 1,
          id: 19392,
          title: 'title',
          body: 'Sample text',
      }),
  });
  const [data, setData] = useState([]);

  useEffect(() => {
      if (response !== null) {
          setData(response);
      }
  }, [response]);

  return (

    <div className='App'>
     
    <h1>Users list</h1>

   
</div>
  );
};

export default App;


/**
 * 
 * Create a project using create-react-app.
Create UserList.js file in src folder
Install axios.
You gone to use jsonplaceholder API to get list of user 
Use axios to Get data from Link inside useEffect hooks
Use UseState hooks to save data into listOfUSer state 
Map listOfUser to display list of user into screen 
Style your App as you wish
 */
