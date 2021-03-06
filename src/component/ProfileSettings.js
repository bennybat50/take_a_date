import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/header'
import LeftNav from '../sections/LeftNav'

export default function ProfileSettings() {
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

                        <div class="col-xl-8 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <h5 class="mb-0 pb-2">Profile settings</h5>
                            <div class="rounded shadow mt-4">
                                <div class="p-4 border-bottom">
                                    <h5 class="mb-0">Personal Information :</h5>
                                </div>

                                <div class="p-4 border-bottom">
                                    <div class="row align-items-center">
                                        <div class="col-lg-2 col-md-4">
                                            <img src="images/doctors/01.jpg" class="avatar avatar-md-md rounded-pill shadow mx-auto d-block" alt="" />
                                        </div>

                                        <div class="col-lg-5 col-md-8 text-center text-md-start mt-4 mt-sm-0">
                                            <h5 class="">Upload your picture</h5>
                                            <p class="text-muted mb-0">For best results, use an image at least 256px by 256px in either .jpg or .png format</p>
                                        </div>

                                        <div class="col-lg-5 col-md-12 text-lg-end text-center mt-4 mt-lg-0">
                                            <a href="#" class="btn btn-success">Upload</a>
                                            <a href="#" class="btn btn-soft-success ms-2">Remove</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="p-4">
                                    <form>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">First Name</label>
                                                    <input name="name" id="name" type="text" class="form-control" placeholder="First Name :" />
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Last Name</label>
                                                    <input name="name" id="name2" type="text" class="form-control" placeholder="Last Name :" />
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Email</label>
                                                    <input name="email" id="email" type="email" class="form-control" placeholder="Your email :" />
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label class="form-label">Phone no.</label>
                                                    <input name="number" id="number" type="text" class="form-control" placeholder="Phone no. :" />
                                                </div>
                                            </div>

                                            <div class="col-md-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Your Bio Here</label>
                                                    <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Bio :"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-sm-12">
                                                <input type="submit" id="submit" name="send" class="btn btn-success" value="Save changes" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="rounded shadow mt-4">
                                <div class="p-4 border-bottom">
                                    <h5 class="mb-0">Change Password :</h5>
                                </div>

                                <div class="p-4">
                                    <form>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Old password :</label>
                                                    <input type="password" class="form-control" placeholder="Old password" required="" />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">New password :</label>
                                                    <input type="password" class="form-control" placeholder="New password" required="" />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="mb-3">
                                                    <label class="form-label">Re-type New password :</label>
                                                    <input type="password" class="form-control" placeholder="Re-type New password" required="" />
                                                </div>
                                            </div>

                                            <div class="col-lg-12 mt-2 mb-0">
                                                <button class="btn btn-success">Save password</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div class="rounded shadow mt-4">
                                <div class="p-4 border-bottom">
                                    <h5 class="mb-0">Account Notifications :</h5>
                                </div>

                                <div class="p-4">
                                    <div class="d-flex justify-content-between pb-4">
                                        <h6 class="mb-0 fw-normal">When someone mentions me</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" value="" id="customSwitch1" />
                                            <label class="form-check-label" for="customSwitch1"></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-4 border-top">
                                        <h6 class="mb-0 fw-normal">When someone follows me</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch2" checked />
                                            <label class="form-check-label" for="customSwitch2"></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-4 border-top">
                                        <h6 class="mb-0 fw-normal">When shares my activity</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch3" />
                                            <label class="form-check-label" for="customSwitch3"></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-4 border-top">
                                        <h6 class="mb-0 fw-normal">When someone messages me</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch4" checked />
                                            <label class="form-check-label" for="customSwitch4"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="rounded shadow mt-4">
                                <div class="p-4 border-bottom">
                                    <h5 class="mb-0">Marketing Notifications :</h5>
                                </div>

                                <div class="p-4">
                                    <div class="d-flex justify-content-between pb-4">
                                        <h6 class="mb-0 fw-normal">There is a sale or promotion</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch5" checked />
                                            <label class="form-check-label" for="customSwitch5"></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-4 border-top">
                                        <h6 class="mb-0 fw-normal">Company news</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch6" />
                                            <label class="form-check-label" for="customSwitch6"></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-4 border-top">
                                        <h6 class="mb-0 fw-normal">Weekly jobs</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch7" />
                                            <label class="form-check-label" for="customSwitch7"></label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between py-4 border-top">
                                        <h6 class="mb-0 fw-normal">Unsubscribe News</h6>
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="customSwitch8" checked />
                                            <label class="form-check-label" for="customSwitch8"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="rounded shadow mt-4">
                                <div class="p-4 border-bottom">
                                    <h5 class="mb-0 text-danger">Delete Account :</h5>
                                </div>

                                <div class="p-4">
                                    <h6 class="mb-0 fw-normal">Do you want to delete the account? Please press below "Delete" button</h6>
                                    <div class="mt-4">
                                        <button class="btn btn-danger">Delete Account</button>
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
