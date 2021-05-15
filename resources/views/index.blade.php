@extends('layouts.app')

@section('content')
<div id="index-jumbotron" class="jumbotron text-center py-5">
    <div class="container py-5">
        <h1 class="text-white">Search listings</h1>
        <div class="container">
            @error('search-query')
            <div class="alert alert-danger text-left" role="alert">
                Error
            </div>
            @enderror
            <form action="/" method='POST'>
                @csrf
                <div class="input-group">
                    <input name="search-query" id="search-query" type="text"
                        class="form-control @error('search-query') text-danger border-danger @enderror"
                        placeholder="Search by address, city or ZIP code" />
                    <div class="input-group-append">
                        <button class="btn btn-primary text-white" type="submit">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="container">
    <div class="row py-5">
        <div class="col-4 col-md-4">
            <div class="card text-center">
                <img src="images/house-2.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Save Listings</h5>
                    <p class="card-text">
                        Save listings that you love to your own
                        profile to plan your new home.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-4 col-md-4">
            <div class="card text-center">
                <img src="images/house-3.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Buy or Rent</h5>
                    <p class="card-text">
                        Search listings within an area and choose
                        wheter you want to buy or rent.
                    </p>
                </div>
            </div>
        </div>
        <div class="col-4 col-md-4">
            <div class="card text-center">
                <img src="images/house-4.jpeg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">
                        Mortgage Calculator
                    </h5>
                    <p class="card-text">
                        Get an estimage of what your mortgage will
                        be.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid bg-primary text-white">
    <div class="container">
        <div class="row py-5">
            <div class="col-12 col-md-6 d-flex justify-content-start align-items-center">
                <div>
                    <h4><i class="fas fa-home text-white"></i> NewHome</h4>
                    <ul>
                        <li>
                            <a class="text-white" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a class="text-white" href="#">
                                Buy
                            </a>
                        </li>
                        <li>
                            <a class="text-white" href="#">
                                Rent
                            </a>
                        </li>
                        <li>
                            <a class="text-white" href="#">
                                Mortgage Calculator
                            </a>
                        </li>
                        <li>
                            <a class="text-white" href="#">
                                Login
                            </a>
                        </li>

                        <li>
                            <a class="text-white" href="#">
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection