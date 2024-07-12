import React from 'react';
import { useLocation } from 'react-router-dom';
import './SavePage.css'; // Import your custom CSS file

function SavePage() {
    const location = useLocation();
    const { selectedPages } = location.state || { selectedPages: [] };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="custom-container h-96">
                <h2 className="custom-heading">Saved Pages</h2>
                <ul className="custom-list">
                    {selectedPages.length > 0 ? (
                        selectedPages.map((page, index) => (
                            <li key={index} className="custom-list-item">{page}</li>
                        ))
                    ) : (
                        <li className="custom-list-item">No pages selected</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default SavePage;
