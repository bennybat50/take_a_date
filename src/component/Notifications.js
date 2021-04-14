import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/header'
import LeftNav from '../sections/LeftNav'

export default function Notifications() {
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
                            <LeftNav/>
                        </div>

                        <div class="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                            <h5 class="mb-0">Notifications</h5>
                            <div class="row">
                                <div class="col-12 mt-4 pt-2">
                                    <div class="card border-0 shadow rounded">
                                        <div class="d-flex justify-content-between p-4 border-bottom">
                                            <div class="search-bar p-0 d-none d-lg-block ms-2">
                                                <div id="search" class="menu-search mb-0">
                                                    <form role="search" method="get" id="searchform" class="searchform">
                                                        <div>
                                                            <input type="text" class="border rounded-pill" name="s" id="s" placeholder="Filter Notifications" />
                                                            <input type="submit" id="searchsubmit" value="Search" />
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>

                                        <ul class="list-unstyled mb-0 p-4">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <p class="text-dark">27th Nov, 2020</p>
                                                            <div class="ms-5">
                                                                <h6 class="text-dark mb-0 d-block">Change of case date by Judge Barik</h6>
                                                                <small class="text-muted">Date changes by Judge B on case 201XXXX</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <hr></hr>
                                            <li class="mt-4">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <p class="text-dark">22th Dec, 2020</p>
                                                            <div class="ms-5">
                                                                <h6 class="text-dark mb-0 d-block">Change of case date by Judge Mark</h6>
                                                                <small class="text-muted">Date changes by Judge C on case 401XXXX</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <hr></hr>
                                            <li class="mt-4">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <p class="text-dark">22th Dec, 2020</p>
                                                            <div class="ms-5">
                                                                <h6 class="text-dark mb-0 d-block">Change of case date by Judge Mark</h6>
                                                                <small class="text-muted">Date changes by Judge C on case 401XXXX</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <hr></hr>
                                            <li class="mt-4">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <p class="text-dark">22th Dec, 2020</p>
                                                            <div class="ms-5">
                                                                <h6 class="text-dark mb-0 d-block">Change of case date by Judge Mark</h6>
                                                                <small class="text-muted">Date changes by Judge C on case 401XXXX</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </a>
                                            </li>
                                            <hr></hr>
                                            <li class="mt-4">
                                                <a href="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <p class="text-dark">22th Dec, 2020</p>
                                                            <div class="ms-5">
                                                                <h6 class="text-dark mb-0 d-block">Change of case date by Judge Mark</h6>
                                                                <small class="text-muted">Date changes by Judge C on case 401XXXX</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
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
