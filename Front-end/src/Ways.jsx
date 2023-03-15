import App from './Views/App'
import CreateAccount from './Views/CreateAcount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<App />} />
          <Route path='/CreateAccount' element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
