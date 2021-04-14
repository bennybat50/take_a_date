import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../sections/Footer';
import Header from '../sections/header';
import LeftNav from '../sections/LeftNav';

export default function DashBoard() {
    return (
        <div>

            {/* Header */}
            <Header />
            {/* Header */}

            {/* Content */}
            <section class="bg-dashboard">
                <div class="container-fluid">

                    <div class="row">

                        {/* LeftNav */}
                        <div class="col-xl-3 col-lg-4 col-md-5 col-12">
                            <LeftNav />
                        </div>
                        {/* LeftNav */}

                        <div class="col-xl-9 col-lg-8 col-md-7 mt-4 mt-sm-0">
                            <h5 class="mb-0">Dashboard</h5>
                            <div class="row">
                                <div class="col-xl-3 col-lg-6 mt-4">
                                    <div class="card shadow border-0 p-4">
                                        <div class="mb-3">
                                            <h6 class="align-items-center mb-0 text-muted d-flex">Appointment <span class="badge badge-pill badge-soft-primary ms-1">+15%</span></h6>
                                            <h4 class="mb-0 pt-3">220+ Week</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-6 mt-4">
                                    <div class="card shadow border-0 p-4">
                                        <div class="mb-3">
                                            <h6 class="align-items-center mb-0 text-muted d-flex">Cases <span class="badge badge-pill badge-soft-primary ms-1">+20%</span></h6>
                                            <h4 class="mb-0 pt-3">220+ Week</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-6 mt-4">
                                    <div class="card shadow border-0 p-4">
                                        <div class="mb-3">
                                            <h6 class="align-items-center mb-0 text-muted d-flex">Urgent <span class="badge badge-pill badge-soft-primary ms-1">+5%</span></h6>
                                            <h4 class="mb-0 pt-3">220+ Week</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-6 mt-4">
                                    <div class="card shadow border-0 p-4">
                                        <div class="mb-3">
                                            <h6 class="align-items-center mb-0 text-muted d-flex">Cancelled <span class="badge badge-pill badge-soft-danger ms-1">-5%</span></h6>
                                            <h4 class="mb-0 pt-3">220+ Week</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-4 col-lg-6 mt-4">
                                    <div class="card border-0 shadow rounded">
                                        <div class="d-flex justify-content-between p-4 border-bottom">
                                            <h6 class="mb-0"><i class="uil uil-calender text-primary me-1 h5"></i> Latest Cases</h6>
                                            <h6 class="text-muted mb-0">55 Cases</h6>
                                        </div>

                                        <ul class="list-unstyled mb-0 p-4">
                                            <li>
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Calvin Carlo VS The State</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Joya Khan VS Luke ladi</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/03.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Amelia Muli VS Mali Kdabo</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/04.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Nik Ronaldo VS Jame Calo</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/05.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Crista Joseph VS Nik James</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-lg-6 mt-4">
                                    <div class="card border-0 shadow rounded">
                                        <div class="d-flex justify-content-between p-4 border-bottom">
                                            <h6 class="mb-0"><i class="uil uil-calendar-alt text-primary me-1 h5"></i> Upcoming Cases</h6>
                                            <h6 class="text-muted mb-0">55 Cases</h6>
                                        </div>

                                        <ul class="list-unstyled mb-0 p-4">
                                            <li>
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/06.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Cristino Murphy VS Crista Joseph</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/07.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Nick Jons VS Mark Luke</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/08.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Alex Dirio VS The State</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/09.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Vrunda Koli VS Malo Jadii</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>

                                            <li class="mt-4">
                                                <Link to="javascript:void(0)">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <div class="d-inline-flex">
                                                            <img src="images/client/10.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <div class="ms-3">
                                                                <h6 class="text-dark mb-0 d-block">Aisha Low VS Dadda Ikre</h6>
                                                                <small class="text-muted">Proceeding on 27th Nov, 2020</small>
                                                            </div>
                                                        </div>
                                                        <i class="uil uil-arrow-right h4 text-dark"></i>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-xl-4 col-lg-12 mt-4">

                                    <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                        <div class="d-flex justify-content-between p-4 border-bottom">
                                            <h6 class="mb-0"><i class="uil uil-calendar-alt text-primary me-1 h5"></i> Current Case</h6>

                                        </div>
                                        <div class="card-body p-4">
                                            <ul class="list-unstyled mb-2">
                                                <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                <li class="list-inline-item text-muted small">899912AS2</li>
                                            </ul>
                                            <Link to="blog-detail.html" class="text-dark title h5">The State VS John Mike</Link>
                                            <hr></hr>
                                            <div class="text-success small">Complainant</div>
                                            <div class="text-dark"> Federal Government Of Nigeria</div>
                                            <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                            <br></br>
                                            <div class="text-success small">Defendant</div>
                                            <div class="text-dark">James Kolin</div>
                                            <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>

                                            <div class="text-success small">Preciding Judge</div>
                                            <div class="text-dark">Justice Chris Sen</div>

                                        </div>
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
