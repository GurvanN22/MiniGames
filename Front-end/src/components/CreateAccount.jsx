import EmailImage from '../assets/img/email.svg'
import PassWordImage from '../assets/img/password.svg'
import eyeCloseImage from '../assets/img/eye-closed.svg'
import eyeOpenImage from '../assets/img/eye-open.svg'
import { useState } from 'react'


function CreateAccount() {
  const [firstPassWordShow, SetPassFirstWordshow] = useState(false);
  const [secondPassWordShow, SetPassSecondWordshow] = useState(false);
  const [firstPassword, SetPassfirstWord] = useState("");
  const [Email, SetEmail] = useState("");
  const [equalPassWord, SetEqualPassWord] = useState(true);

  function checkInformation(e) {  
    if (firstPassword === e) {
      SetEqualPassWord(true)
    } else {
      SetEqualPassWord(false)
    }
  }

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-Center">
        <h1>Rejoinez la comu mini-games !</h1>
        <h2>Enter votre adresse mail </h2>
        <div className="CreateAccount-Form"> 
          <img src= {EmailImage} className ="CreateAccount-Form-Image CreateAccount-Form-Image-left" alt="Enveloppe image" />
          <input type="email" className='CreateAccount-Form-Input' onChange={ (e) => {SetEmail(e.target.value)}}/>
        </div>
        <h2> Renter votre mot de passe </h2>
        <div className="CreateAccount-Form CreateAccount-30width"> 
          <img src= {PassWordImage} className ="CreateAccount-Form-Image CreateAccount-Form-Image-left" alt="Enveloppe image" />
          <input type={firstPassWordShow ? "text" : 'password'} className='CreateAccount-Form-Input' onChange={ (e) => {SetPassfirstWord(e.target.value)}}/>
          <img src= {firstPassWordShow ? eyeOpenImage : eyeCloseImage} className ="CreateAccount-Form-Image" alt="Enveloppe image" onClick={() => SetPassFirstWordshow(!firstPassWordShow)}/>
        </div>
        <h2> Confirmer votre mot de passe </h2>
        <div className="CreateAccount-Form CreateAccount-30width"> 
          <img src= {PassWordImage} className ="CreateAccount-Form-Image CreateAccount-Form-Image-left" alt="Enveloppe image" />
          <input type={secondPassWordShow ? "text" : 'password'} className='CreateAccount-Form-Input' onChange={ (e) => {checkInformation(e.target.value)}}/>
          <img src= {secondPassWordShow ? eyeOpenImage : eyeCloseImage} className ="CreateAccount-Form-Image" alt="Enveloppe image" onClick={() => SetPassSecondWordshow(!secondPassWordShow)}/>
        </div>
        {equalPassWord ? null : <p className="CreateAccount-Error"> Les mots de passe ne sont pas identiques </p>}
        <button onClick = { () => checkInformation()} className = "CreateAccount-Bnt"> Crée le compte </button>
      </div>
    </div>
  )
}

export default CreateAccount
