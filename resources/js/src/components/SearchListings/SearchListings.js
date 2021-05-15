import React from "react";
import { useFormik } from "formik";

const SearchListings = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            searchQuery: "",
            // sold - rent
            searchCategory: ["sold", "rent"],
            // min - max
            minPrice: 0,
            maxPrice: 0,
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="container-fluid">
                <div className="row py-2">
                    <div className="col-12 col-md-4 p-0">
                        <div className="input-group">
                            <label htmlFor="searchQuery">Search</label>
                            <input
                                id="searchQuery"
                                name="searchQuery"
                                type="text"
                                placeholder="Search by address, city or ZIP code"
                                onChange={formik.handleChange}
                                value={formik.values.searchQuery}
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-primary btn-block text-white m-0 btn-lg"
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-md-6 p-0">
                                    <label htmlFor="minPrice">Min Price</label>
                                    <input
                                        id="minPrice"
                                        name="minPrice"
                                        type="number"
                                        value="1000"
                                        onChange={formik.handleChange}
                                        value={formik.values.minPrice}
                                    />
                                </div>
                                <div className="col-12 col-md-6 p-0">
                                    <label htmlFor="maxPrice">Max Price</label>
                                    <input
                                        id="maxPrice"
                                        name="maxPrice"
                                        type="number"
                                        onChange={formik.handleChange}
                                        value={formik.values.maxPrice}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-2 p-0">
                        <label htmlFor="bedrooms">Bedrooms</label>
                        <input
                            id="bedrooms"
                            name="bedrooms"
                            type="number"
                            placeholder="0"
                            onChange={formik.handleChange}
                            value={formik.values.bedrooms}
                        />
                    </div>

                    <div className="col-12 col-md-2 p-0">
                        <label htmlFor="bathrooms">Bathrooms</label>
                        <input
                            id="bathrooms"
                            name="bathrooms"
                            placeholder="0"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.bathrooms}
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};
export default SearchListings;
