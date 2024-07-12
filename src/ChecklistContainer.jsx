import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChecklistContainer.css'; // Import your custom CSS file

function ChecklistContainer() {
    const [allPages, setAllPages] = useState(false);
    const [pages, setPages] = useState({
        page1: false,
        page2: false,
        page3: false,
        page4: false,
    });

    const navigate = useNavigate();

    const handleAllPagesChange = () => {
        const newState = !allPages;
        setAllPages(newState);
        setPages({
            page1: newState,
            page2: newState,
            page3: newState,
            page4: newState,
        });
    };

    const handlePageChange = (page) => {
        const newState = !pages[page];
        setPages((prev) => ({ ...prev, [page]: newState }));
        if (newState === false) {
            setAllPages(false);
        }
    };

    const handleSubmit = () => {
        const selectedPages = Object.keys(pages).filter(page => pages[page]);
        navigate('/saved', { state: { selectedPages } });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="custom-container">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <label htmlFor="all-pages">All pages</label>
                        <input
                            type="checkbox"
                            id="all-pages"
                            checked={allPages}
                            onChange={handleAllPagesChange}
                            className="custom-checkbox"
                        />
                    </div>
                    <hr className="my-2  my-hr" />
                    <div className="flex justify-between items-center">
                        <label htmlFor="page1">Page 1</label>
                        <input
                            type="checkbox"
                            id="page1"
                            checked={pages.page1}
                            onChange={() => handlePageChange('page1')}
                            className="custom-checkbox"
                        />
                    </div>
                
                    <div className="flex justify-between items-center">
                        <label htmlFor="page2">Page 2</label>
                        <input
                            type="checkbox"
                            id="page2"
                            checked={pages.page2}
                            onChange={() => handlePageChange('page2')}
                            className="custom-checkbox"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="page3">Page 3</label>
                        <input
                            type="checkbox"
                            id="page3"
                            checked={pages.page3}
                            onChange={() => handlePageChange('page3')}
                            className="custom-checkbox"
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <label htmlFor="page4">Page 4</label>
                        <input
                            type="checkbox"
                            id="page4"
                            checked={pages.page4}
                            onChange={() => handlePageChange('page4')}
                            className="custom-checkbox"
                        />
                    </div>
                    <hr className="my-2 my-hr" />
                </div>
                <button 
                    className="custom-button"
                    onClick={handleSubmit}
                >
                    Done
                </button>
            </div>
        </div>
    );
}

export default ChecklistContainer;
