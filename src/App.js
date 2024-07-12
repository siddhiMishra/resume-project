import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChecklistContainer from './ChecklistContainer';
import SavePage from './SavePage';
import './App.css'; // Import your custom CSS file

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ChecklistContainer />} />
                    <Route path="/saved" element={<SavePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
