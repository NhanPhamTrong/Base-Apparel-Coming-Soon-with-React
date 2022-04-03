import React from "react";

function ClickBrand(e) {
    e.preventDefault();
    window.location.href = "#";
}

function Brand() {
    return (
        <div className="brand">
            <div className="container">
                <button type="button" onClick={ClickBrand} aria-label="Brand"></button>
            </div>
        </div>
    );
}

export default Brand;