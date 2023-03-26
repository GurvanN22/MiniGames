import Cookies from 'js-cookie'
import { useState } from 'react'

var IsConnected = false

function MainPage() {
  //Cookies.set('Pseudo',"Le Rouge", { expires: 1 })
  const Cookie = Cookies.get() // `domain` won't have any effect
  const [IsCookie, SetIsCokkie] = useState(false);
  const CookieOn = () => {
    Cookies.set('Cookie',true)
    SetIsCokkie(true)
  }
  const CookieOff = () => {
    Cookies.set('Cookie',false)
    SetIsCokkie(true)
  }
  if (Cookie.Pseudo !== undefined) {
    IsConnected = true
  }
  if(Cookie.Cookie === "true" && IsCookie === false){
    SetIsCokkie(true)
  }
  console.log(Cookie , IsConnected , IsCookie)
  return (
    <>
    <div className="MainPage-MainContainer">
      {IsConnected ? <div className='MainPage-Welcome-div'> <p className='MainPage-Welcome-Texte'>Bon retour   </p><p className='MainPage-Welcome-Pseudo'>{Cookie.Pseudo}</p></div> : <p className='MainPage-Welcome-Texte'>Bienvenue sur MiniGames !!!</p>}
      {IsCookie ? "":<div className='Main-Page-Cokkies'><p>Accepter les cookies : </p><button className='MainPage-Cookies-Yes' onClick={() => CookieOn()}>oui</button><button className='MainPage-Cookies-NO' onClick={() => CookieOff()}>non</button></div>}
    </div>
    </>
    
  )
}

export default MainPage
