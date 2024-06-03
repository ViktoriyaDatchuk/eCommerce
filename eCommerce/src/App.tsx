import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import Main from './pages/main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Collection from './pages/Collection/Collection';
import Page404 from './pages/Page404';
import ProfilInfo from './pages/Profil/Profil-info';
import Movie from './pages/Movie';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movie-collection" element={<Collection />} />
          <Route path="/movie-collection/:id" element={<Movie />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profil-info" element={<ProfilInfo />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
