import React from 'react'
import { Link } from 'react-router-dom'

export default function CreateCase() {
    return (
        <div>
            <div id="preloader">
                <div id="status">
                    <div class="spinner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
            </div>



            <header id="topnav" class="defaultscroll sticky">
                <div class="container">

                    <div>
                        <Link to="" class="logo" href="index.html">
                            <img src="images/logo.png" height="80" alt="" />
                        </Link>
                    </div>

                    <ul class="dropdowns list-inline mb-0">
                        <li class="list-inline-item mb-0">
                            <div class="dropdown dropdown-primary d-grid">
                                <button type="button" class="btn btn-icon btn-pills dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-magnify icons"></i></button>
                                <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0" >
                                    <form>
                                        <input type="text" id="text" name="name" class="form-control border bg-white" placeholder="Search..." />
                                    </form>
                                </div>
                            </div>
                        </li>

                        <li class="list-inline-item mb-0 ms-1">
                            <div class="dropdown dropdown-primary">
                                <button type="button" class="btn btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/doctors/01.jpg" class="avatar avatar-ex-small rounded-circle" alt="" /></button>
                                <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3" >
                                    <Link to="" class="dropdown-item d-flex align-items-center text-dark" href="doctor-profile.html">
                                        <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                        <div class="flex-1 ms-2">
                                            <span class="d-block mb-1">Calvin Carlo</span>
                                            <small class="text-muted">Orthopedic</small>
                                        </div>
                                    </Link>
                                    <Link to="" class="dropdown-item text-dark" href="doctor-dashboard.html"><span class="mb-0 d-inline-block me-1"><i class="uil uil-dashboard align-middle h6"></i></span> Dashboard</Link>
                                    <Link to="" class="dropdown-item text-dark" href="doctor-profile-setting.html"><span class="mb-0 d-inline-block me-1"><i class="uil uil-setting align-middle h6"></i></span> Profile Settings</Link>
                                    <div class="dropdown-divider border-top"></div>
                                    <Link to="" class="dropdown-item text-dark" href="login.html"><span class="mb-0 d-inline-block me-1"><i class="uil uil-sign-out-alt align-middle h6"></i></span> Logout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div class="menu-extras">
                        <div class="menu-item">

                            <Link to="" class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>

                        </div>
                    </div>

                </div>
            </header>

            <section class="section">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="card border-0 shadow rounded overflow-hidden">
                                <ul class="nav nav-pills nav-justified flex-column flex-sm-row rounded-0 shadow overflow-hidden bg-light mb-0" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link links"  role="tab" aria-controls="" aria-selected="false">
                                            <div class="text-center pt-1 pb-1 links">
                                                <h4 class="title fw-normal mb-0 links">Input case details</h4>
                                            </div>
                                        </a>
                                    </li>
                                </ul>

                                <div class="tab-content p-4" id="pills-tabContent">
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
                                                        <button type="submit" class="btn ">Book An Appointment</button>
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


            <footer class="bg-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-5 col-lg-4 mb-0 mb-md-4 pb-0 pb-md-2">
                            <Link to="#" class="logo-footer">
                                <img src="images/logo.png" height="60" alt="" />
                            </Link>
                            <p class="mt-4 me-xl-5">Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
                        </div>

                        <div class="col-xl-7 col-lg-8 col-md-12">
                            <div class="row">
                                <div class="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 class="text-light footer-head">Company</h5>
                                    <ul class="list-unstyled footer-list mt-4">
                                        <li><Link to="aboutus.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> About us</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Services</Link></li>
                                        <li><Link to="doctor-team-two.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Team</Link></li>
                                        <li><Link to="blog-detail.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Project</Link></li>
                                        <li><Link to="blogs.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Blog</Link></li>
                                        <li><Link to="login.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Login</Link></li>
                                    </ul>
                                </div>

                                <div class="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 class="text-light footer-head">Departments</h5>
                                    <ul class="list-unstyled footer-list mt-4">
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Eye Care</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Psychotherapy</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Dental Care</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Orthopedic</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Cardiology</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Gynecology</Link></li>
                                        <li><Link to="departments.html" class="text-foot"><i class="mdi mdi-chevron-right me-1"></i> Neurology</Link></li>
                                    </ul>
                                </div>

                                <div class="col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 class="text-light footer-head">Contact us</h5>
                                    <ul class="list-unstyled footer-list mt-4">
                                        <li class="d-flex align-items-center">
                                            <i data-feather="mail" class="fea icon-sm text-foot align-middle"></i>
                                            <Link to="mailto:contact@example.com" class="text-foot ms-2">contact@example.com</Link>
                                        </li>

                                        <li class="d-flex align-items-center">
                                            <i data-feather="phone" class="fea icon-sm text-foot align-middle"></i>
                                            <Link to="tel:+152534-468-854" class="text-foot ms-2">+152 534-468-854</Link>
                                        </li>

                                        <li class="d-flex align-items-center">
                                            <i data-feather="map-pin" class="fea icon-sm text-foot align-middle"></i>
                                            <Link to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" class="video-play-icon text-foot ms-2">View on Google map</Link>
                                        </li>
                                    </ul>

                                    <ul class="list-unstyled social-icon footer-social mb-0 mt-4">
                                        <li class="list-inline-item"><Link to="#" class="rounded-pill"><i data-feather="facebook" class="fea icon-sm fea-social"></i></Link></li>
                                        <li class="list-inline-item"><Link to="#" class="rounded-pill"><i data-feather="instagram" class="fea icon-sm fea-social"></i></Link></li>
                                        <li class="list-inline-item"><Link to="#" class="rounded-pill"><i data-feather="twitter" class="fea icon-sm fea-social"></i></Link></li>
                                        <li class="list-inline-item"><Link to="#" class="rounded-pill"><i data-feather="linkedin" class="fea icon-sm fea-social"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container mt-5">
                    <div class="pt-4 footer-bar">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <div class="text-sm-start text-center">
                                    <p class="mb-0"><script>document.write(new Date().getFullYear())</script> © Doctris. Design with <i class="mdi mdi-heart text-danger"></i> by <Link to="http://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>

                            <div class="col-sm-6 mt-4 mt-sm-0">
                                <ul class="list-unstyled footer-list text-sm-end text-center mb-0">
                                    <li class="list-inline-item"><Link to="terms.html" class="text-foot me-2">Terms</Link></li>
                                    <li class="list-inline-item"><Link to="privacy.html" class="text-foot me-2">Privacy</Link></li>
                                    <li class="list-inline-item"><Link to="aboutus.html" class="text-foot me-2">About</Link></li>
                                    <li class="list-inline-item"><Link to="contact.html" class="text-foot me-2">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <Link to="#" onclick="topFunction()" id="back-to-top" class="btn btn-icon btn-pills btn-primary back-to-top"><i data-feather="arrow-up" class="icons"></i></Link>
        </div>
    )
}
