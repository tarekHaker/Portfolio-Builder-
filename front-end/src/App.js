
import './App.css';
import SignIn from "./component/SignInSide";
import SignUp from "./component/singnUpSide";
import ButtonAppBar from "./component/navBar"
import { useState } from 'react';
import Nav from "./component/nav"


function App() {
  const [views, setViews] =  useState("")
  return (
    <div className="App">
    {/* {views==="" && <ButtonAppBar setViews={setViews}  />} */}
    <Nav />
   {views=== "signIn" && <SignIn setViews={setViews} /> } 
   {views=== "signUp" && <SignUp /> } 
     
    </div>
  );
}

export default App;
