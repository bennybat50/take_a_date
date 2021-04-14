import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer class="bg-footer py-4">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <div class="text-sm-start text-center">
                                <p class="mb-0"><script>document.write(new Date().getFullYear())</script> © Court App. Design with <i class="mdi mdi-heart text-danger"></i>.</p>
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
            </footer>
        </div>
    )
}
