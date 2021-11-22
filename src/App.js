import './App.scss';
import Navigation from './components/Navbar';
import AppRoutes from './routes/routes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
