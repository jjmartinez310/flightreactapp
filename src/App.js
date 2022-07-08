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
            {/* Everything in here is going to managed by react-router-dom so that it can toggle between pages */}
            <BrowserRouter>
                <AppNav/>
                <Routes>
                    {/* When the URL in the browser becomes /, toggle on the Landing page */}
                    <Route path="/" element={<Landing />} />
                    <Route path="/flights" element={<FlightForm />} />
                    <Route path="/edit" element={<FlightManagement />} />
                    <Route path="/change" element={<EditForm />} />

                    {/*<Route path="*" element={<Error />} />*/}
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    ); 
  }


export const a = 'A'; // This is a regular export. Also sometimes a "named export" since you have to refer to it by variable name

export default App; // Only one default per file
// Default exports can renamed in the other file