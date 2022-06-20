import './App.css';
import { useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/usersList").then((res) => {
      setListOfUsers(res.data);
    });
  }, [])
  return (
    <div className="App">
      <div className="usersDisplay">
      {
        listOfUsers.map((user) => 
        {
          return (<div>
            <li>Name: {user.fullName}</li>
            <li>Username: {user.username}</li>
            <li>Email: {user.email}</li>
          </div> )
        })
      }
      </div>
    </div>
  );
}

export default App;
