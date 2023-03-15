import App from './Views/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function Ways() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
