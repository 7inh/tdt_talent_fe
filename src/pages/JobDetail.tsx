export default function JobDetail () {
  return (
    <div className="job_single_wrapper jb_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="job_filter_category_sidebar jb_cover">
              <div className="job_filter_sidebar_heading jb_cover">
                <h1>jobs overview</h1>
              </div>
              <div className="job_overview_header jb_cover">
                <div className="jb_job_overview_img">
                  <img src="images/overview.png" alt="post_img" />
                  <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                  <p>Webstrot Technology Pvt. Ltd.</p>
                  <ul className="job_single_lists">
                    <li>
                      <div className="job_adds_right">
                        <a href="#0">
                          <i className="far fa-heart" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="header_btn search_btn part_time_btn jb_cover">
                        <a href="#">part time</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="far fa-calendar" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Date Posted:</li>
                      <li>Octomber 02, 2019</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="far fa-calendar" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Expire date:</li>
                      <li>Octomber 02, 2019</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Location:</li>
                      <li>Los Angeles Califonia PO, 455001</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="far fa-money-bill-alt" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Salary:</li>
                      <li>$12K - 15k P.A.</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fa fa-th-large" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Category:</li>
                      <li>Developer</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fa fa-star" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Experience:</li>
                      <li>1+ Years Experience</li>
                    </ul>
                  </div>
                </div>
                <div className="header_btn search_btn news_btn overview_btn  jb_cover">
                  <a href="#" data-toggle="modal" data-target="#myModal41">
                    apply now !
                  </a>
                </div>
                <div
                  className="modal fade apply_job_popup"
                  id="myModal41"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="apply_job jb_cover">
                            <h1>apply for this job :</h1>
                            <div className="search_alert_box jb_cover">
                              <div className="apply_job_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="full name"
                                />
                              </div>
                              <div className="apply_job_form">
                                <input
                                  type="text"
                                  name="Email"
                                  placeholder="Enter Your Email"
                                />
                              </div>
                              <div className="apply_job_form">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="resume_optional jb_cover">
                                <p>resume (optional)</p>
                                <div className="width_50">
                                  <input
                                    type="file"
                                    id="input-file-now-custom-27"
                                    className="dropify"
                                    data-height={90}
                                  />
                                  <span className="post_photo">
                                    upload resume
                                  </span>
                                </div>
                                <p className="word_file">
                                  {" "}
                                  microsoft word or pdf file only (5mb)
                                </p>
                              </div>
                            </div>
                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                              <a href="#">apply now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="jb_listing_single_overview jb_cover">
              <div className="jp_job_des jb_cover">
                <h2 className="job_description_heading">Job Description</h2>
                <p>
                  Google is and always will be an engineering company. We hire
                  people with a broad set of ical skills who are ready to tackle
                  some of technology's greatest challenges and make an impact on
                  millions, if not billions, of users. At Google, engineers not
                  only revolutionize search, they routinely work on massive
                  scalability and storage solutions, large-scale applications
                  and rely new platforms for developers around the world. From
                  AdWords to Chrome, Android to Ye, Social to Local, Google
                  engineers are changing the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
