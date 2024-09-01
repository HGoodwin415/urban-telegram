import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Matches from './components/Matches';
import Chat from './components/Chat';
import johnLewis from './assets/john-lewis.jpg';
import janeSmith from './assets/jane-smith.jpg';
import bobGreen from './assets/bob-green.jpg';

const profiles = [
  { name: 'John', imgUrl: {johnLewis}},
  { name: 'Jane', imgUrl: {janeSmith} },
  { name: 'Doe', imgUrl: {bobGreen} },
];
const matches = [
  { name: 'John', imgUrl: {johnLewis} },
];

function App() {
  

  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home profiles={profiles} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<Matches matches={matches} />} />
        <Route path="/chat/:id" element={<Chat match={matches[0]} />} />
    </Routes>
</Router>
);
};

export default App
