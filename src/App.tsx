
import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login/index'
import { Home } from './pages/Home/index'
import { InfoSeller } from './pages/InfoSeller/index'

import Layout from './components/layout/layout';
import RequiredAuth from './features/require-auth/requireAuth';


function App() {


  return (

    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public routes */}
        <Route index path='/login' element={<Login />} />
        {/* Private routes */}
        <Route element={<RequiredAuth />}>
          
          <Route path='/home' element={<Home />} />
          <Route path='/infoSeller' element={<InfoSeller />} />

        </Route>
      </Route>

    </Routes>
  )


}

export default App
