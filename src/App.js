// import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import './App.css';
import { Layout } from "./components/Layout/Layout";

function App(props) {
  // const [accessToken, setAccessToken] = useState();

  // const {isAuthenticated, isLoading, loginWithRedirect, user, logout, getAccessTokenSilently} = useAuth0();
  
  // useEffect(() => {
  //   if (isLoading) {
  //     return <h1 className="mt-5">Loading...</h1>
  //   }
  
  //   if (!isAuthenticated) {
  //     loginWithRedirect();
  //   };
  
  //   getAccessTokenSilently().then(token => setAccessToken(token));
  //   console.log(accessToken)
  // }, [isAuthenticated])

  // const userFirstName = user['given_name'];

  return (
    <div className="App">

      {/* <p className="mt-5 pt-3">Welcome, {userFirstName}! <button className="btn btn-sm btn-info" onClick={(event) => logout()}>Logout</button></p> */}
      {/* <Layout userFirstName={userFirstName} userPhoto={user['picture']} /> */}
      
      <Layout />



    </div>
  );
}

export default App;
