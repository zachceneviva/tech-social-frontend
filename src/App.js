import './App.scss';
import Home from './pages/Home';
import Navigation from './components/Navbar';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile/>
    </div>
  );
}

export default App;
