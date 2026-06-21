import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const pages = [
    { name: "Venues", path: "/venue" },
    { name: "Photographers", path: "/photography" },
    { name: "Decorators", path: "/decor" },
    { name: "Catering", path: "/catering" },
    { name: "Makeup Artists", path: "/makeup" },
    { name: "Car Rentals", path: "/car-rental" },
];

const SearchModal = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filteredPages = pages.filter((page) =>
        page.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className="modal fade"
            id="searchModal"
            tabIndex="-1"
            aria-labelledby="searchModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
            
                <div className="modal-content" style={{border:'2px solid #b98400'}}>

                    <div className="modal-header">
                        <h5 className="modal-title fst-italic" style={{color:'#6d0606'}} id="searchModalLabel">
                            Search
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-search"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            /> </div>

                        <div className="list-group mt-3">
                            <p className="small" style={{color:'#b98400'}}>Suggestion</p>
                            {filteredPages.length > 0 ? (
                                filteredPages.map((page) => (
                                    <button
                                        key={page.path}
                                        className="list-group-item list-group-item-action"
                                        data-bs-dismiss="modal"
                                        onClick={() => navigate(page.path)}
                                    >
                                        {page.name}
                                    </button>
                                ))
                            ) : (
                                <p className="text-muted text-center mb-0">
                                    No pages found
                                </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchModal;