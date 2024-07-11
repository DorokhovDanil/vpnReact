
import './App.css';
import { TonConnectUIProvider,TonConnectUI, THEME } from '@tonconnect/ui-react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Profile from './components/Profile';
import Buy from './components/Buy';
import Control from './components/Control';
import { API_URL } from './config/api';

const address=`${API_URL}/tonconnect-manifest.json`
function App() {
  return (
    //добавить ссылку на само приложение вместо "local"
    
    
    <TonConnectUIProvider manifestUrl={address}  >
    <BrowserRouter>

      <Header/>
      <div>
        <Routes>
          <Route
            path="/"
            element={(
              <Main/>
            )}
          />
          <Route
            path="/userProfile"
            element={(
              <Profile/>
            )}
          />
          <Route
            path="/buy"
            element={(
              <Buy/>
            )}
          />

          <Route
            path="/maglink"
            element={(
              <Control/>
            )}
          />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    </TonConnectUIProvider>
  );
}

export default App;
