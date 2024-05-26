import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Collection from './pages/Collection/Collection';
import Page404 from './pages/Page404';

import './App.css';
import ProfilInfo from './pages/Profil-info';
import ProfilEdit from './pages/Profil-edit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie-collection" element={<Collection />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profil-info" element={<ProfilInfo />} />
        <Route path="/profil-edit" element={<ProfilEdit />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
