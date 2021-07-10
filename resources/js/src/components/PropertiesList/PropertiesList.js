import React from "react";

export default function PropertiesList({ properties }) {
    return (
        <div className="col-6">
            {properties.map((p) => (
                <div key={p}>{p}</div>
            ))}
        </div>
    );
}
