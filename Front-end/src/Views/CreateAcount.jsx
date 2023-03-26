import React from 'react';
import CreateAccountComponent from '../components/CreateAccount';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";


function CreateAccount() {
  const navigate = useNavigate()
  function UseAPIToCreateAccount(Email , Password1 , Password2) {
    // Todo, Create the account on the API
    navigate('/CreateAccountInformations' , {state : {Protection : "rookie"}})
  }

  return (
    <div>
      <TopBar />
      <CreateAccountComponent UseAPIToCreateAccount={UseAPIToCreateAccount} />
      <Footer />
    </div>
  );
}

export default CreateAccount