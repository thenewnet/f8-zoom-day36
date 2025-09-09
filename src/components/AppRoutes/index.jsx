import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultLayout from '../../layouts/DefaultLayout';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Post from '../../pages/Post';
import PostDetail from '../../pages/PostDetail';
import Contact from '../../pages/Contact';
import Privacy from '../../pages/Privacy';

import AuthLayout from '../../layouts/AuthLayout';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

import AdminLayout from '../../layouts/AdminLayout';
import Dashboard from '../../pages/Dashboard';
import User from '../../pages/User';
import Settings from '../../pages/Settings';

import Notfound from '../../pages/Notfound';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Default layout pages */}
        <Route element={<DefaultLayout />} >
          <Route index path='/' element={ <Home />} />
          <Route path='/about' element={ <About />} />
          <Route path='/posts' element={ <Post />} />
          <Route path='/posts/:id' element={ <PostDetail />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/privacy' element={ <Privacy />} />
        </Route>

        {/* AuthLayout layout pages */}
        <Route element={<AuthLayout />} >
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register />} />
        </Route>

        {/* AdminLayout layout pages */}
        <Route element={<AdminLayout />}>
          <Route path='/admin' element={ <Dashboard />} />
          <Route path='/admin/users' element={ <User />} />
          <Route path='/admin/settings' element={ <Settings />} />
        </Route>

        {/* Not found page */}
        <Route path='*' element={ <Notfound />} />

      </Routes>
    </Router>
  )
}

export default AppRoutes;
