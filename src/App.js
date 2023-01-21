import FooterComponent from './components/FooterComponent';
import NavbarComponent from './components/NavbarComponent';
import './styles/App.css';
import ProfilePage from './views/ProfilePage';

function App() {
  return (
    <div className="app">
      <NavbarComponent />
      <ProfilePage />
      <FooterComponent />
    </div>
  );
}

export default App;
