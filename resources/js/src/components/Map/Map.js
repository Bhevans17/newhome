import React, { useEffect } from "react";

export default function Map() {
    useEffect(() => {
        mapboxgl.accessToken =
            "pk.eyJ1IjoiYnJlbmRvaWsiLCJhIjoiY2ticXpod3JzMG9pdTJzbXBteWEyMWFrMyJ9.opn5aQIeDNyCWt-dNvfgSg";
        const map = new mapboxgl.Map({
            container: "map", // container ID
            style: "mapbox://styles/mapbox/streets-v11", // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
    });

    return <div id="map" className="vh-100 w-100"></div>;
}
