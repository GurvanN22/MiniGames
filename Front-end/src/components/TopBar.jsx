import Logo from '../assets/img/react.svg'
import account from '../assets/img/account.svg'
import Cookies from 'js-cookie'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
function TopBar() {
  const navigate = useNavigate()
  const [AccountOption, SetAccountOption] = useState(false);
  const Cookie = Cookies.get()
  const RedirectToCreateAccount = () => {
    navigate('/CreateAccount')
  }
    return (
      <div className="TopBar">
      <img src={Logo} alt="Logo de ... " className='TopBar-logo'/>
        {AccountOption ? (
          <div className='TopBar-AccountInformation'>
            <img src= {account} alt = "image pour les joueurs non connecter à leur compte" className='TopBar-User' onClick={() => SetAccountOption(!AccountOption)}/>
            <p>Connection</p>
            <p onClick={() => RedirectToCreateAccount()}>Créer un compte</p>
          </div>

        ) : (
          <div className='TopBar-AccountInformationClose'>
            <img src= {account} alt = "image pour les joueurs non connecter à leur compte" className='TopBar-User' onClick={() => SetAccountOption(!AccountOption)}/>
          </div>
          )
        }
      </div>
    )
}
  
  export default TopBar
  