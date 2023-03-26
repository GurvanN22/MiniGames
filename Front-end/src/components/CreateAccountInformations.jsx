import { useState } from 'react'
import Cookies from 'js-cookie'

function CreateAccountInformations(props) {
  const [Pseudo, SetPseudo] = useState("");
  const Creation = () => {
    Cookies.set('Pseudo',Pseudo)
    props.AccountFinalCreation(Pseudo)
  }
    return (
      <div className="CreateAccount">
        <div className="CreateAccount-Center">
          <h1>Rejoinez la comu mini-games !</h1>
          <h2>Enter votre Pseudo </h2>
          <div className="CreateAccount-Form-Pseudo"> 
            <input type="text" className='CreateAccount-Form-Input' onChange={ (e) => {SetPseudo(e.target.value)}}/>
          </div>
          <button onClick={() => Creation()} className ="CreateAccount-Bnt"> Crée le compte </button>
        </div>
      </div>
      )
}

export default CreateAccountInformations
