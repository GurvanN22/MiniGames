import MainPageViews from './Views/MainPage'
import CreateAccount from './Views/CreateAcount'
import Memory from './Views/Memory'
import CreateAcountInformations from './Views/CreateAcountInformations'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<MainPageViews />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
          <Route path='/Memory' element={<Memory />} />
          <Route path='/CreateAccountInformations' element={<CreateAcountInformations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
