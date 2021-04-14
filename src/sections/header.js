import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header id="topnav" class="defaultscroll sticky">
                <div class="container-fluid">
                    <div>
                        <Link to="/dashboard" class="logo">
                            <img src="images/logo-dark.png" height="72" alt="" />
                            <span>TAKE A DATE</span>
                        </Link>
                    </div>
                    <ul class="dropdowns list-inline mb-0">
                        <li class="list-inline-item mb-0">
                            <div class="search-bar p-0 d-none d-lg-block ms-2">
                                <div id="search" class="menu-search mb-0">
                                    <form role="search" method="get" id="searchform" class="searchform">
                                        <div>
                                            <input type="text" class="border rounded-pill" name="s" id="s" placeholder="Search Case code..." />
                                            <input type="submit" id="searchsubmit" value="Search" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li class="list-inline-item mb-0 ms-1">
                            <div class="dropdown dropdown-primary">
                                <button type="button" class="btn btn-pills btn-soft-primary dropdown-toggle p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/doctors/01.jpg" class="avatar avatar-ex-small rounded-circle" alt="" /></button>
                                <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 py-3">
                                    <Link to="doctor-profile.html" class="dropdown-item d-flex align-items-center text-dark" >
                                        <img src="images/doctors/01.jpg" class="avatar avatar-md-sm rounded-circle border shadow" alt="" />
                                        <div class="flex-1 ms-2">
                                            <span class="d-block mb-1">Mark James</span>
                                        </div>
                                    </Link>
                                    <div class="dropdown-divider border-top"></div>
                                    <Link to="/" class="dropdown-item text-dark" ><span class="mb-0 d-inline-block me-1"><i class="uil uil-sign-out-alt align-middle h6"></i></span> Logout</Link>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div class="menu-extras">
                        <div class="menu-item">
                            <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}
