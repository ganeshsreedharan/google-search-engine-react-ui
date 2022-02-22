import { useState } from 'react';
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar';
import { SearchRoutes } from './components/SearchRoutes';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen" >
       <Navbar setDarkTheme={setDarkMode} darkTheme={darkMode}/>
       <SearchRoutes/>
       <Footer/>
      </div>
    </div>

  );
}

export default App;
