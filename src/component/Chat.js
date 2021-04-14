import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../sections/Footer'
import Header from '../sections/header'
import LeftNav from '../sections/LeftNav'

export default function Chat() {
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

                        <div class="col-xl-9 col-lg-8 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div class="row">
                                <div class="col-xl-3 col-lg-5 col-md-5 col-12">
                                    <div class="card border-0 rounded shadow">
                                        <div class="text-center p-4 border-bottom">
                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-md rounded-pill shadow" alt="" />
                                            <h5 class="mt-3 mb-1">Dr. Calvin Carlo</h5>
                                            <p class="text-muted mb-0">Orthopedic</p>
                                        </div>

                                        <div class="p-2 chat chat-list simplebar-content" data-simplebar>
                                            <Link to="#" class="d-flex chat-list active p-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/09.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Christopher</h6>
                                                        <small class="text-muted">10 Min</small>
                                                    </div>
                                                    <div class="text-muted text-truncate">Hello</div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Dr. Cristino</h6>
                                                        <small class="text-muted">20 Min</small>
                                                    </div>

                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-dark h6 mb-0 text-truncate">Hi, How are you?</div>
                                                        <span class="badge badge-pill badge-soft-danger">2</span>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/03.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Faye</h6>
                                                        <small class="text-muted">30 Min</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Heyy</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/04.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Ronald</h6>
                                                        <small class="text-muted">2 Hours</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Hey, How are you sir?</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/05.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Melissa</h6>
                                                        <small class="text-muted">3 Hours</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Good Afternoon</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/doctors/06.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Dr. Elsie</h6>
                                                        <small class="text-muted">10 Hours</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Good Morning sir, how can i help you?</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/07.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Jerry</h6>
                                                        <small class="text-muted">16 Hours</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Please give me appointment</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/doctors/08.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Dr. Louis</h6>
                                                        <small class="text-muted">1 Days</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Hii</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/06.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Randall</h6>
                                                        <small class="text-muted">2 Days</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Hello Sir</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/10.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-danger on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Mary</h6>
                                                        <small class="text-muted">3 Days</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">How are you sir?</div>
                                                    </div>
                                                </div>
                                            </Link>

                                            <Link to="#" class="d-flex chat-list p-2 mt-2 rounded position-relative">
                                                <div class="position-relative">
                                                    <img src="images/client/08.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                    <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                </div>
                                                <div class="overflow-hidden flex-1 ms-2">
                                                    <div class="d-flex justify-content-between">
                                                        <h6 class="text-dark mb-0 d-block">Lester</h6>
                                                        <small class="text-muted">4 Days</small>
                                                    </div>
                                                    <div class="d-flex justify-content-between">
                                                        <div class="text-muted text-truncate">Hello please give me answer.</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-9 col-lg-7 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                    <div class="card chat chat-person border-0 shadow rounded ">
                                        <div class="d-flex justify-content-between border-bottom p-4 simplebar-content">
                                            <div class="d-flex">
                                                <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                <div class="overflow-hidden ms-3">
                                                    <Link to="#" class="text-dark mb-0 h6 d-block text-truncate">Cristino Murphy</Link>
                                                    <small class="text-muted"><i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i> Online</small>
                                                </div>
                                            </div>

                                            <ul class="list-unstyled mb-0">
                                                <li class="dropdown dropdown-primary list-inline-item">
                                                    <button type="button" class="btn btn-icon btn-pills btn-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="mdi mdi-magnify icons"></i></button>
                                                    <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-0" >
                                                        <form>
                                                            <input type="text" id="text1" name="name" class="form-control border bg-white" placeholder="Search..." />
                                                        </form>
                                                    </div>
                                                </li>
                                                <li class="dropdown dropdown-primary list-inline-item">
                                                    <button type="button" class="btn btn-icon btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="uil uil-ellipsis-h icons"></i></button>
                                                    <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3">
                                                        <Link to="#" class="dropdown-item text-dark" ><span class="mb-0 d-inline-block me-1"><i class="uil uil-user align-middle h6"></i></span> Profile</Link>
                                                        <Link to="#" class="dropdown-item text-dark" ><span class="mb-0 d-inline-block me-1"><i class="uil uil-setting align-middle h6"></i></span> Profile Settings</Link>
                                                        <Link to="#" class="dropdown-item text-dark" ><span class="mb-0 d-inline-block me-1"><i class="uil uil-trash align-middle h6"></i></span> Delete</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <ul class="p-4 list-unstyled mb-0 chat" data-simplebar >
                                            <li>
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative">
                                                            <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hey Calvin</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>59 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="chat-right">
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative chat-user-image">
                                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hello Cristino</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>45 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="chat-right">
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative chat-user-image">
                                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">How can i help you?</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>44 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative">
                                                            <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Nice to meet you</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>42 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative">
                                                            <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Hope you are doing fine?</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>40 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="chat-right">
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative chat-user-image">
                                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">I'm good thanks for asking</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>45 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative">
                                                            <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg">
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">I am intrested to know more about your prices and services you offer</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>35 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="chat-right">
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative chat-user-image">
                                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Sure please check below link to find more useful information <Link to="https://1.envato.market/4n73n" target="_blank" class="text-primary">http://shreethemes.in/landrick/</Link></p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>25 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative">
                                                            <img src="images/doctors/02.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Thank you 😊</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>20 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="chat-right">
                                                <div class="d-inline-block">
                                                    <div class="d-flex chat-type mb-3">
                                                        <div class="position-relative chat-user-image">
                                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                                            <i class="mdi mdi-checkbox-blank-circle text-success on-off align-text-bottom"></i>
                                                        </div>

                                                        <div class="chat-msg" >
                                                            <p class="text-muted small msg px-3 py-2 bg-light rounded mb-1">Welcome</p>
                                                            <small class="text-muted msg-time"><i class="uil uil-clock-nine me-1"></i>18 min ago</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>

                                        <div class="p-2 rounded-bottom shadow">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text" class="form-control border" placeholder="Enter Message..." />
                                                </div>
                                                <div class="col-auto">
                                                    <Link to="#" class="btn btn-icon btn-primary"><i class="uil uil-message icons"></i></Link>
                                                    <Link to="#" class="btn btn-icon btn-primary"><i class="uil uil-smile icons"></i></Link>
                                                    <Link to="#" class="btn btn-icon btn-primary"><i class="uil uil-paperclip icons"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-xl-3 col-md-6 mt-4">
                                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                                        <div class="icon text-center rounded-lg mx-auto">
                                            <i class="uil uil-message align-middle h3 mb-0"></i>
                                        </div>
                                        <div class="card-body p-0 mt-3">
                                            <Link to="#" class="title text-dark h5">New Messages</Link>
                                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                                            <Link to="#" class="link">Read more <i class="ri-arrow-right-line align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 mt-4">
                                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                                        <div class="icon text-center rounded-lg mx-auto">
                                            <i class="uil uil-envelope-star align-middle h3 mb-0"></i>
                                        </div>
                                        <div class="card-body p-0 mt-3">
                                            <Link to="#" class="title text-dark h5">Latest Proposals</Link>
                                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                                            <Link to="#" class="link">View more <i class="ri-arrow-right-line align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 mt-4">
                                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                                        <div class="icon text-center rounded-lg mx-auto">
                                            <i class="uil uil-hourglass align-middle h3 mb-0"></i>
                                        </div>
                                        <div class="card-body p-0 mt-3">
                                            <Link to="#" class="title text-dark h5">Package Expiry</Link>
                                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                                            <Link to="#" class="link">Check here <i class="ri-arrow-right-line align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-md-6 mt-4">
                                    <div class="card features feature-primary text-center border-0 p-4 rounded shadow">
                                        <div class="icon text-center rounded-lg mx-auto">
                                            <i class="uil uil-heart align-middle h3 mb-0"></i>
                                        </div>
                                        <div class="card-body p-0 mt-3">
                                            <Link to="#" class="title text-dark h5">Saved Items</Link>
                                            <p class="text-muted my-2">Due to its wide spread use as filler text</p>
                                            <Link to="#" class="link">View items <i class="ri-arrow-right-line align-middle"></i></Link>
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
