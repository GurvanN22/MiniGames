import Cookies from 'js-cookie'


function MainPage() {
  var IsConnected = false
  Cookies.set('Pseudo',"Le Rouge", { expires: 1 })
  const Cookie = Cookies.get() // `domain` won't have any effect

  if (Cookie.Pseudo !== undefined) {
    IsConnected = true
  }
  console.log("Cookie : " + Cookie.pseudo , "IsConnected : " , IsConnected)
  return (
    <>
    <div className="MainPage-MainContainer">
    <div className='Main-Page-Cokkies'>
      <p></p>
    </div>
    </div>
    </>
    
  )
}

export default MainPage
