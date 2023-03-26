import Logo from '../assets/img/react.svg'
import account from '../assets/img/account.svg'
import Cookies from 'js-cookie'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
function TopBar() {
  const navigate = useNavigate()
  const [ShowAccountOption, SetShowAccountOption] = useState(false);
  const Cookie = Cookies.get()
  if (Cookie.Pseudo === undefined) {
    navigate('/Login')
  }
    return (
      <div className="TopBar">
        <img src={Logo} alt="Logo de ... " className='TopBar-logo'/>
        <img src= {account} alt = "image pour les joueurs non connecter à leur compte" className='TopBar-User'/>
      </div>
    )
}
  
  export default TopBar
  