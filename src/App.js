import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppNav } from './features';
import { FlightManagement, Landing } from './pages';
import { FlightForm } from './components/FlightForm';
import { EditForm } from './components/EditForm';
import ThemeContext, { themes } from './contexts/ThemeContext';
import './App.css';


// React function based component

const App = () => {
    
  const [currTheme, setCurrTheme] = useState(themes.dark);

    return (
        // This wraps all of its children in the context, all children can read from it
        <ThemeContext.Provider value={currTheme}>
            {/* Everything in here is managed by react-router-dom to toggle between pages */}
            <BrowserRouter>
                <AppNav/>
                <Routes>
                    {/* When the URL in the browser becomes /xxx, toggle on the corresponding page */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/flights" element={<FlightForm />} />
                    <Route path="/edit" element={<FlightManagement />} />
                    <Route path="/change" element={<EditForm />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    ); 
  }


export const a = 'A';

export default App;