import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header/Header';
import Collection from './pages/Collection';
import Page404 from './pages/Page404';

function LayoutWithHeader() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutWithHeader />}>
          <Route path="/" element={<Main />} />
          <Route path="/movie-collection" element={<Collection />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
