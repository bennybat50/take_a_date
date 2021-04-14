import React from 'react'
import Footer from '../sections/Footer'
import Header from '../sections/header'
import LeftNav from '../sections/LeftNav'

export default function Schedule() {
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

                        <div class="col-xl-9 col-lg-8 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <h5 class="mb-0">Schedule Timing</h5>

                            <div class="row">
                                <div class="col-xl-2 col-lg-4 col-12 mt-4">
                                    <div id="external-events">
                                        <div class="card border-0 p-4 shadow rounded">
                                            <span class="h6">All Events</span>

                                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                <div class="fc-event-main">Metting</div>
                                            </div>
                                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                <div class="fc-event-main">Operations</div>
                                            </div>
                                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                <div class="fc-event-main">Lunch</div>
                                            </div>
                                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                <div class="fc-event-main">Conference</div>
                                            </div>
                                            <div class="fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event">
                                                <div class="fc-event-main">Business Metting</div>
                                            </div>

                                            <div class="mt-2">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="drop-remove" />
                                                    <label class="form-check-label" for="drop-remove">Remove after drop</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-10 col-lg-8 col-12 mt-4">
                                    <div id="calendar-container" class="card rounded border-0 shadow p-4">
                                        <div id="calendar"></div>
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
