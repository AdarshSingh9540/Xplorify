import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import Auth from './components/Auth';
function App() {
  return (
    <KindeProvider
    clientId="628c70d7f2bb4ac3a7c0cc99e9cc2dc5"
    domain="https://xplorify.kinde.com"
    redirectUri="http://localhost:3000"
    logoutUri="http://localhost:3000"
    >
      <>
      <Auth/>
        <Navbar />
        <Card />
      </>
    </KindeProvider>
  );
}

export default App