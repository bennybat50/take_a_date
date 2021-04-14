import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/header'
import LeftNav from '../sections/LeftNav'

export default function SearchCase() {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Header */}

            {/* Content */}
            <section class="bg-dashboard">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-5 col-12">
                            <LeftNav />
                        </div>

                        <div class="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                            <h5 class="mb-0">Find Your Case</h5>
                            <div class="row">
                                <div class="col-12 mt-4 pt-2">
                                    <div class="card border-0 shadow rounded">
                                        <section class="bg-half-140 pb-0 d-table w-100">
                                            <div class="container">
                                                <div class="row mt-1 mt-sm-0 align-items-center">
                                                    <div class="col-md-6">
                                                        <div class="heading-title">
                                                            <h4 class="heading mb-3">Find Your Case</h4>
                                                            <p class="para-desc text-muted mb-0">Provide Case code for your case to view details.</p>
                                                        </div>
                                                        <div class="subcribe-form mt-4">
                                                            <form class="ms-0" >
                                                                <div class="mb-2">
                                                                    <input type="text" id="name" name="name" class="border bg-white rounded-pill" required="" placeholder="Enter Case Code e.g( case 201xxxx )" />
                                                                    <button type="submit" class="btn btn-pills btn-success"><i class="ri-search-line align-middle me-1"></i> Search</button>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6 mt-4 mt-5 mt-sm-0 pt-sm-0">
                                                        <img src="images/casefile.png" class="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Content */}

            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
    )
}
