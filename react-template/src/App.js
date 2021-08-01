  import './App.css';
import Header from './components/Header';
import User from './components/User';
import {useState} from 'react';

function App() {
   const [friends , setFriends] = useState(["asdasdsa","asdasd234"]);


  return (
    <div>
    <User name = "orçun" islog = {false}/>
      <Header/>
      <Header/>

    <h2>asdasdsa </h2>
      {friends.map((friend, index) => (
        <div key ={index}>{friend}</div>
      ))} 
   
      <button onClick={() => setFriends([...friends ,"asdasd"])}> add new </button>
    </div>
  );
}

export default App
