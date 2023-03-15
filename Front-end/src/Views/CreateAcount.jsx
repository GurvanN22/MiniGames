import React from 'react';
import CreateAccountComponent from '../components/CreateAccount';
import TopBar from '../components/TopBar';


function CreateAccount() {
  function UseAPIToCreateAccount(Email , Password1 , Password2) {
    // Todo  
  }

  return (
    <div>
      <TopBar />
      <CreateAccountComponent UseAPIToCreateAccount={UseAPIToCreateAccount} />
    </div>
  );
}

export default CreateAccount