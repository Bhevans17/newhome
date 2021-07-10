import React, { useState, useEffect } from "react";
import SearchListings from "../components/SearchListings/SearchListings";
import Map from "../components/Map/Map";
import PropertiesList from "../components/PropertiesList/PropertiesList";
import Pagination from "../components/Pagination/Pagination";
import Spinner from "../components/Spinner/Spinner";
import axios from "axios";

export default function Buy() {
    // list of properties state
    const [properties, setProperties] = useState([]);
    // current page url state
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://realty-mole-property-api.p.rapidapi.com/saleListings?city=Austin&state=TX"
    );
    // next page url state
    const [nextPageUrl, setNextPageUrl] = useState();
    // prev page url state
    const [prevPageUrl, setPrevPageUrl] = useState();
    // loading state
    const [loading, setLoading] = useState(true);

    // The useEffect hook is used here to
    // 1. Show a loading icon when getting data
    // 2. Fetching external data
    // 3. canceling extra api request when unecessary
    useEffect(() => {
        setLoading(true);
        let cancel;

        const options = {
            method: "GET",
            url: "https://realty-mole-property-api.p.rapidapi.com/saleListings",
            params: { city: "Austin", state: "TX" },
            headers: {
                "x-rapidapi-key":
                    "0a321bd7ddmsh8616d6f6cbaf6d1p19a915jsne1b6fc6bda80",
                "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                /*
                setLoading(false);
                setNextPageUrl(res.data.next);
                setPrevPageUrl(res.data.previous);
                setProperties(res.data.results.map((p) => p.name));
                */
            })
            .catch(function (error) {
                console.error(error);
            });

        // useEffect() clean up callback function
        return () => {
            cancel();
        };
    }, [currentPageUrl]);

    function goToNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function goToPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    return (
        <div class="px-3">
            <div className="container-fluid p-0 ">
                <div className="row">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                    >
                        Launch demo modal
                    </button>

                    <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5
                                        class="modal-title"
                                        id="exampleModalLabel"
                                    >
                                        Modal title
                                    </h5>
                                    <button
                                        type="button"
                                        class="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div
                                        id="carouselExampleControls"
                                        class="carousel slide"
                                        data-ride="carousel"
                                    >
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img
                                                    src="..."
                                                    class="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                            <div class="carousel-item">
                                                <img
                                                    src="..."
                                                    class="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                            <div class="carousel-item">
                                                <img
                                                    src="..."
                                                    class="d-block w-100"
                                                    alt="..."
                                                />
                                            </div>
                                        </div>
                                        <a
                                            class="carousel-control-prev"
                                            href="#carouselExampleControls"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <span
                                                class="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="sr-only">
                                                Previous
                                            </span>
                                        </a>
                                        <a
                                            class="carousel-control-next"
                                            href="#carouselExampleControls"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <span
                                                class="carousel-control-next-icon"
                                                aria-hidden="true"
                                            ></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button
                                        type="button"
                                        class="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 mb-2">
                        <SearchListings />
                    </div>
                    <div className="col-12 col-md-8">
                        <Map />
                    </div>
                    <div className="col-12 col-md-4 bg-dark p-0 pt-5">
                        <div className="container-fluid m-0">
                            <div className="row p-0 m-0 justify-content-center">
                                {loading ? (
                                    <Spinner />
                                ) : (
                                    <PropertiesList
                                        properties={properties}
                                    ></PropertiesList>
                                )}
                                <div className="col-12 my-2">
                                    <div className="media bg-white p-2">
                                        <img
                                            src="/images/house-2.jpeg"
                                            className="mr-3 img-fluid w-50 h-50"
                                            alt="..."
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                Media heading
                                            </h5>
                                            <p>
                                                Will you do the same for me?
                                                It's time to face the music I'm
                                                no longer your muse. Heard it's
                                                beautiful
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 my-2">
                                    <div className="media bg-white p-2">
                                        <img
                                            src="/images/house-2.jpeg"
                                            className="mr-3 img-fluid w-50 h-50"
                                            alt="..."
                                        />
                                        <div className="media-body">
                                            <h5 className="mt-0">
                                                Media heading
                                            </h5>
                                            <p>
                                                Will you do the same for me?
                                                It's time to face the music I'm
                                                no longer your muse. Heard it's
                                                beautiful
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <Pagination
                                        goToNextPage={
                                            nextPageUrl ? goToNextPage : null
                                        }
                                        goToPrevPage={
                                            prevPageUrl ? goToPrevPage : null
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
