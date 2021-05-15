import React from "react";

export default function Spinner() {
    return (
        <div className="col-12 d-flex justify-content-center mb-5">
            <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}
