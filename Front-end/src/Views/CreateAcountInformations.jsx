import React from 'react';
import CreateAccountInformations from '../components/CreateAccountInformations';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function CreateAccount() {
  const {state} = useLocation()
  const navigate = useNavigate()
  function AccountFinalCreation(Pseudo) {
    // Todo, final creation of the account
    navigate('/')
  }
  function ReturnToCreateAccount () {
    navigate('/CreateAccount')
  }

  if (state === null) {
    ReturnToCreateAccount()
  } else {
    return (
    <div>
      <TopBar />
      <CreateAccountInformations AccountFinalCreation={AccountFinalCreation} />
      <Footer />
    </div>
  );
  }
}

export default CreateAccount