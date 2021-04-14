import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';

export default function Login() {
    return (
        <div>

            
            <section class="bg-home d-flex bg-light align-items-center" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div className="bg-light">
                            <Link to="/dashboard" class="logo d-flex justify-content-center">
                                <img src="images/logo-dark.png" height="72" alt="" />
                                <span className="text-dark">TAKE A DATE</span>
                            </Link>
                        </div>

                        <div class="col-lg-5 col-md-8">
                            <img src="images/logo.png" height="60" class="mx-auto d-block" alt="" />
                            <div class="card login-page bg-white shadow mt-4 rounded border-0">
                                <div class="card-body">
                                    <h4 class="text-center">Sign In</h4>
                                    <form action="http://shreethemes.in/doctris/html/doctor-dashboard.html" class="login-form mt-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Email <span class="text-danger">*</span></label>
                                                    <input type="email" class="form-control" placeholder="Email" name="email" required="" />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Password <span class="text-danger">*</span></label>
                                                    <input type="password" class="form-control" placeholder="Password" required="" />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="d-flex justify-content-between">
                                                    <div class="mb-3">
                                                        <div class="form-check">
                                                            <input class="form-check-input align-middle" type="checkbox" value="" id="remember-check" />
                                                            <label class="form-check-label" for="remember-check">Remember me</label>
                                                        </div>
                                                    </div>
                                                    <Link to="forgot-password.html" class="text-dark h6 mb-0">Forgot password ?</Link>
                                                </div>
                                            </div>
                                            <div class="col-lg-12 mb-0">
                                                <Link to="/dashboard">
                                                    <div class="col-lg-12 mb-0">
                                                        <div class="d-grid">
                                                            <button class="btn btn-success">Sign In</button>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>

                                            <div class="col-lg-12 mt-3 text-center">
                                                <h6 class="text-muted">Or</h6>
                                            </div>

                                            <div class="col-6 mt-3">
                                                <div class="d-grid">
                                                    <Link to="#" class="btn btn-soft-primary"><i class="uil uil-facebook"></i> Facebook</Link>
                                                </div>
                                            </div>

                                            <div class="col-6 mt-3">
                                                <div class="d-grid">
                                                    <Link to="#" class="btn btn-soft-primary"><i class="uil uil-google"></i> Google</Link>
                                                </div>
                                            </div>

                                            <div class="col-12 text-center">
                                                <p class="mb-0 mt-3"><small class="text-dark me-2">Don't have an account ?</small> <Link to="/signup" class="text-dark fw-bold">Sign Up</Link></p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
        // </div>
    )
}
