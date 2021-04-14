import React from 'react';
import { Link } from 'react-router-dom';

export default function LeftNav() {
    return (
        <div>
            
                <div class="rounded shadow overflow-hidden sticky-bar">
                    <div class="card border-0">
                        <img src="images/doctors/profile-bg.jpg" class="img-fluid" alt="" />
                    </div>

                    <div class="text-center avatar-profile margin-nagative mt-n5 position-relative pb-4 border-bottom">
                        <img src="images/doctors/01.jpg" class="rounded-circle shadow-md avatar avatar-md-md" alt="" />
                        <h5 class="mt-3 mb-1">Mark James</h5>
                        <p class="text-muted mb-0">Attorney at Law</p>
                    </div>

                    <ul class="list-unstyled sidebar-nav mb-0">
                        <li class="navbar-item"><Link to="/dashboard" class="navbar-link"><i class="ri-airplay-line align-middle navbar-icon"></i> Dashboard</Link></li>
                        <li class="navbar-item"><Link to="/appointment" class="navbar-link"><i class="ri-calendar-check-line align-middle navbar-icon"></i> Cases</Link></li>
                        <li class="navbar-item"><Link to="/notifications" class="navbar-link"><i class="ri-notification-line align-middle navbar-icon"></i> Notifications <span class="badge badge-pill badge-soft-success ms-1">20</span> </Link></li>
                        <li class="navbar-item"><Link to="/searchcase" class="navbar-link"><i class="ri-search-line align-middle navbar-icon"></i> Search Case  </Link></li>
                    <li class="navbar-item"><Link to="/schedule" class="navbar-link"><i class="ri-timer-line align-middle navbar-icon"></i> Schedule Timing</Link></li>
                        <li class="navbar-item"><Link to="/chat" class="navbar-link"><i class="ri-chat-voice-line align-middle navbar-icon"></i> Chat</Link></li>
                        <li class="navbar-item"><Link to="/profilesetting" class="navbar-link"><i class="ri-user-settings-line align-middle navbar-icon"></i> Account Settings</Link></li>
                    </ul>
                </div>
            </div>
        
    )
}
