import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import Closet from './pages/Closet';
import Contents from './pages/Contents';
import Store from './pages/Store';
import AboutTWI from './pages/AboutTWI';
import LogPage from './pages/LogPage';
import HomeA from './pages/HomeA';
import AddToStore from './pages/AddToStore';
import AlterQuizzes from './pages/AlterQuizzes';
import Analytics from './pages/Analytics';
import RankingA from './pages/RankingA';
import ViewDocuments from './pages/ViewDocuments';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<LogPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/homea' element={<HomeA />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/game' element={<Game />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/rankinga' element={<RankingA />} />
        <Route path='/closet' element={<Closet />} />
        <Route path='/contents' element={<Contents />} />
        <Route path='/viewdocuments' element={<ViewDocuments />} />
        <Route path='/store' element={<Store />} />
        <Route path='/addtostore' element={<AddToStore />} />
        <Route path='/alterquizzes' element={<AlterQuizzes />} />
        <Route path='/aboutTWI' element={<AboutTWI />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
