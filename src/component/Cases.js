import React, { useState } from 'react';
import Header from '../sections/header';
import LeftNav from '../sections/LeftNav';
import { Modal, Button } from 'react-bootstrap';

import CreateCaseModal from '../sections/CreateCaseModal';
import Footer from '../sections/Footer';

export default function Cases() {
    const [lgShow, setLgShow] = useState(false);
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
                            <div class="row">
                                <div class="col-xl-8 col-lg-6">
                                    <h5 class="mb-0">Scheduled Cases</h5>
                                </div>

                                <div class="col-xl-4 col-lg-6 mt-4 mt-lg-0">
                                    <div class="justify-content-md-end">
                                        <form>
                                            <div class="row justify-content-between align-items-center">
                                                <div class="col-sm-12 col-md">
                                                    <div class="mb-0 position-relative">
                                                        <select class="form-control time-during select2input">
                                                            <option value="EY">Today</option>
                                                            <option value="GY">Tomorrow</option>
                                                            <option value="PS">Yesterday</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-sm-12 col-md-auto mt-4 mt-sm-0">
                                                    <div class="d-grid">
                                                        <div>
                                                            <Button onClick={() => setLgShow(true)}>+Create a Case</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            {/* End of Row */}

                            <section class="section pt-5">
                                <div class="container">
                                    <div class="row">

                                        <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                                            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                                <div class="card-body p-4">
                                                    <ul class="list-unstyled mb-2">
                                                        <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                        <li class="list-inline-item text-muted small">899912AS2</li>
                                                    </ul>
                                                    <a href="blog-detail.html" class="text-dark title h5">The State VS John Mike</a>
                                                    <hr></hr>
                                                    <div class="text-success small">Complainant</div>
                                                    <div class="text-dark"> Federal Government Of Nigeria</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                                    <br></br>
                                                    <div class="text-success small">Defendant</div>
                                                    <div class="text-dark">James Kolin</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>
                                                    <br></br>
                                                    <div class="text-success small">Preciding Judge</div>
                                                    <div class="text-dark">Justice Chris Sen</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                                            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                                <div class="card-body p-4">
                                                    <ul class="list-unstyled mb-2">
                                                        <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                        <li class="list-inline-item text-muted small">899912AS2</li>
                                                    </ul>
                                                    <a href="blog-detail.html" class="text-dark title h5">The State VS John Mike</a>
                                                    <hr></hr>
                                                    <div class="text-success small">Complainant</div>
                                                    <div class="text-dark"> Federal Government Of Nigeria</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                                    <br></br>
                                                    <div class="text-success small">Defendant</div>
                                                    <div class="text-dark">James Kolin</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>
                                                    <br></br>
                                                    <div class="text-success small">Preciding Judge</div>
                                                    <div class="text-dark">Justice Chris Sen</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                                            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                                <div class="card-body p-4">
                                                    <ul class="list-unstyled mb-2">
                                                        <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                        <li class="list-inline-item text-muted small">899912AS2</li>
                                                    </ul>
                                                    <a href="blog-detail.html" class="text-dark title h5">The State VS John Mike</a>
                                                    <hr></hr>
                                                    <div class="text-success small">Complainant</div>
                                                    <div class="text-dark"> Federal Government Of Nigeria</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                                    <br></br>
                                                    <div class="text-success small">Defendant</div>
                                                    <div class="text-dark">James Kolin</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>
                                                    <br></br>
                                                    <div class="text-success small">Preciding Judge</div>
                                                    <div class="text-dark">Justice Chris Sen</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                                            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                                <div class="card-body p-4">
                                                    <ul class="list-unstyled mb-2">
                                                        <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                        <li class="list-inline-item text-muted small">899912AS2</li>
                                                    </ul>
                                                    <a href="blog-detail.html" class="text-dark title h5">The State VS John Mike</a>
                                                    <hr></hr>
                                                    <div class="text-success small">Complainant</div>
                                                    <div class="text-dark"> Federal Government Of Nigeria</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                                    <br></br>
                                                    <div class="text-success small">Defendant</div>
                                                    <div class="text-dark">James Kolin</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>
                                                    <br></br>
                                                    <div class="text-success small">Preciding Judge</div>
                                                    <div class="text-dark">Justice Chris Sen</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                                            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                                <div class="card-body p-4">
                                                    <ul class="list-unstyled mb-2">
                                                        <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                        <li class="list-inline-item text-muted small">899912AS2</li>
                                                    </ul>
                                                    <a href="blog-detail.html" class="text-dark title h5">The State VS John Mike</a>
                                                    <hr></hr>
                                                    <div class="text-success small">Complainant</div>
                                                    <div class="text-dark"> Federal Government Of Nigeria</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                                    <br></br>
                                                    <div class="text-success small">Defendant</div>
                                                    <div class="text-dark">James Kolin</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>
                                                    <br></br>
                                                    <div class="text-success small">Preciding Judge</div>
                                                    <div class="text-dark">Justice Chris Sen</div>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-6 col-12 mb-4 pb-2">
                                            <div class="card blog blog-primary border-0 shadow rounded overflow-hidden">
                                                <div class="card-body p-4">
                                                    <ul class="list-unstyled mb-2">
                                                        <li class="list-inline-item text-muted small me-3"><i class="ri-calendar-line text-dark h6 "></i> 20th Nov,2020</li>
                                                        <li class="list-inline-item text-muted small">899912AS2</li>
                                                    </ul>
                                                    <a href="blog-detail.html" class="text-dark title h5">The State VS John Mike</a>
                                                    <hr></hr>
                                                    <div class="text-success small">Complainant</div>
                                                    <div class="text-dark"> Federal Government Of Nigeria</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Mary Joe </div>
                                                    <br></br>
                                                    <div class="text-success small">Defendant</div>
                                                    <div class="text-dark">James Kolin</div>
                                                    <div class="text-dark"><i class="text-muted small">Lawyer: </i> Prince Luke </div>
                                                    <br></br>
                                                    <div class="text-success small">Preciding Judge</div>
                                                    <div class="text-dark">Justice Chris Sen</div>

                                                </div>
                                            </div>
                                        </div>


                                    </div>

                                    <div class="row text-center">
                                        <div class="col-12">
                                            <ul class="pagination justify-content-center mb-0 list-unstyled">
                                                <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border"> Prev</a></li>
                                                <li class="active"><a href="#" class="pe-3 ps-3 pt-2 pb-2 border  bg-success">1</a></li>
                                                <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border">2</a></li>
                                                <li><a href="#" class="pe-3 ps-3 pt-2 pb-2 border">Next </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* End of Section */}

                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                {/* <Modal.Header close>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        <div className="">
                            <h3><i className=""></i> Book An Appointment</h3>
                        </div>
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>

                    <section class="section">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-12">
                                    <div class="card border-0 shadow rounded overflow-hidden">
                                        <ul class="bg-success text-white text-center">
                                            <h4 class="title fw-normal mb-0 links">Input case details</h4>
                                        </ul>

                                        <div class="tab-content">
                                            <div class="tab-pane fade show active" id="pills-clinic" role="tabpanel" aria-labelledby="clinic-booking">
                                                <form class="text-secondary">
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Complainant's Name <span class="text-danger">*</span></label>
                                                                <input name="complainantName" id="complainantName" type="text" class="form-control" placeholder="Complainant's Name " />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Complainant's Phone Number <span class="text-danger">*</span></label>
                                                                <input name="complainantPhoneNumber" id="complainantPhoneNumber" type="number" class="form-control" placeholder="Complainant's Phone Number " />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Lawyer's Name <span class="text-danger">*</span></label>
                                                                <input name="lawyerName" id="lawyerName" type="text" class="form-control" placeholder="Complainant's Name " />
                                                            </div>
                                                        </div>


                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Lawyer's Phone Number <span class="text-danger">*</span></label>
                                                                <input name="lawyerPhoneNumber" id="lawyerPhoneNumber" type="number" class="form-control" placeholder="Complainant's Phone Number " />
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-12">
                                                            <div class="mb-3">
                                                                <label class="form-label">Court <span class="text-danger">*</span></label>
                                                                <input name="court" id="court" type="text" class="form-control" placeholder="Court" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Defendant's Name <span class="text-danger">*</span></label>
                                                                <input name="defendantName" id="defendantName" type="text" class="form-control" placeholder="Defendant's Name " />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Lawyer <span class="text-danger">*</span></label>
                                                                <input name="lawyer" id="lawyer" type="text" class="form-control" placeholder="Lawyer" />
                                                            </div>
                                                        </div>

                                                        <div class="col-md-6">
                                                            <div class="mb-3">
                                                                <label class="form-label">Case type</label>
                                                                <select class="form-control department-name select2input">
                                                                    <option value="EY">Eye Care</option>
                                                                    <option value="GY">Gynecologist</option>
                                                                    <option value="PS">Psychotherapist</option>
                                                                    <option value="OR">Orthopedic</option>
                                                                    <option value="DE">Dentist</option>
                                                                    <option value="GA">Gastrologist</option>
                                                                    <option value="UR">Urologist</option>
                                                                    <option value="NE">Neurologist</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div class="col-lg-12">
                                                            <div class="d-grid">
                                                                <button type="submit" class="btn btn-success ">Book An Appointment</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </Modal.Body>
            </Modal>

            {/* Footer */}
            <Footer />
            {/* Footer */}
        </div>
    )
}
