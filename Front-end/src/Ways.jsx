import MainPageViews from './Views/MainPage'
import CreateAccount from './Views/CreateAcount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<MainPageViews />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
