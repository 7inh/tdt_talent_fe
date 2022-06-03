import useProfile from "../../hooks/useProfile";

export default function CandidateDashBoard() {
  const profile = useProfile();
  console.log("profile", profile);

  return (
    <>
      <div className="page_title_section">
        <div className="page_header">
          <div className="container">
            <div className="row">
              {/* section_heading start */}
              <div className="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
                <h1>Candidates resume</h1>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
                <div className="sub_title_section">
                  <ul className="sub_title">
                    <li>
                      <a href="#0"> Home </a>&nbsp; / &nbsp;
                    </li>
                    <li>Resume</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top header wrapper end */}
      {/*employee dashboard wrapper start*/}
      <div className="candidate_dashboard_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="emp_dashboard_sidebar jb_cover">
                <img
                  src={profile.avatar_url}
                  className="img-responsive"
                  alt="post_img"
                />
                <div className="emp_web_profile candidate_web_profile jb_cover">
                  <h4>{profile.full_name}</h4>
                  <p>{profile.role}</p>
                  <div className="skills jb_cover">
                    <div className="skill-item jb_cover">
                      <h6>
                        profile<span>70%</span>
                      </h6>
                      <div className="skills-progress">
                        <span data-value="70%" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="emp_follow_link jb_cover">
                  <ul className="feedlist">
                    <li>
                      <a href="candidate_dashboard.html">
                        <i className="fas fa-tachometer-alt" /> dashboard
                      </a>
                    </li>
                    <li>
                      <a href="candidate_edit_profile.html">
                        <i className="fas fa-edit" />
                        edit profile
                      </a>
                    </li>
                    <li>
                      <a href="candidate_resume.html" className="link_active">
                        <i className="fas fa-file" />
                        resume
                      </a>
                    </li>
                    <li>
                      <a href="candidate_favourite_job.html">
                        <i className="fas fa-heart" />
                        favourite
                      </a>
                    </li>
                    <li>
                      <a href="candidate_applied_job.html">
                        <i className="fas fa-check-square" />
                        applied job
                      </a>
                    </li>
                    <li>
                      <a href="message.html">
                        <i className="fas fa-envelope" />
                        message
                      </a>
                    </li>
                    <li>
                      <a href="pricing_plans.html">
                        <i className="fas fa-tag" />
                        pricing plans
                      </a>
                    </li>
                  </ul>
                  <ul className="feedlist logout_link jb_cover">
                    <li>
                      <a href="#0">
                        <i className="fas fa-power-off" /> log out{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#0" data-toggle="modal" data-target="#myModal">
                        <i className="fas fa-trash-alt" />
                        delete profile
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="modal fade delete_popup"
                id="myModal"
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
                        <div className="delett_cntn jb_cover">
                          <h1>
                            <i className="fas fa-trash-alt" /> delete account
                          </h1>
                          <p>
                            Are you sure! You want to delete your profile. This
                            <br />
                            can't be undone!
                          </p>
                          <div className="delete_jb_form">
                            <input
                              type="password"
                              name="password"
                              placeholder="Enter Password"
                            />
                          </div>
                          <div className="header_btn search_btn applt_pop_btn">
                            <a href="#0">save updates</a>
                          </div>
                          <div className="cancel_wrapper">
                            <a href="#0" className="" data-dismiss="modal">
                              cancel
                            </a>
                          </div>
                          <div className="login_remember_box jb_cover">
                            <label className="control control--checkbox">
                              You accepts our
                              <a href="#0">Terms and Conditions </a> and
                              <a href="#0">Privacy Policy</a>
                              <input type="checkbox" />
                              <span className="control__indicator" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="job_filter_category_sidebar company_wrapper jb_cover">
                    <div className="job_filter_sidebar_heading jb_cover">
                      <h1>
                        basic information
                        <span>
                          <a
                            href="#0"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                    </div>
                    <div
                      className="modal fade delete_popup company_popup"
                      id="myModal1"
                      role="dialog"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                          >
                        
                          </button>
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="delett_cntn jb_cover">
                                <h1>
                                  <i className="fas fa-edit" />
                                  basic information
                                </h1>
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>job :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Graphic Designer"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>location :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="loss angles"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>phone :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="+91 983622711"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>email :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form">
                                        <input
                                          type="email"
                                          name="email"
                                          placeholder="digital@example.com"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>website</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="www.digital.com"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="padder_top jb_cover" />
                                <div className="header_btn search_btn applt_pop_btn">
                                  <a href="#0">save updates</a>
                                </div>
                                <div className="cancel_wrapper">
                                  <a href="#0" data-dismiss="modal">
                                    cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="job_overview_header jb_cover">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-calendar" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>full name:</li>
                                <li>{profile.full_name}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-envelope" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>email:</li>
                                <li>{profile.contact_mail}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fa fa-info-circle" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>phone :</li>
                                <li>{profile.phone_number}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>Location:</li>
                                <li>{profile.address}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-calendar" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>contry:</li>
                                <li>{profile.address}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-calendar" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>city:</li>
                                <li>{profile.city}</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-globe-asia" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>website:</li>
                                <li>
                                  <a href="#0">{profile.website}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-calendar" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>attach resume</li>
                                <li>{profile.attach_resume}</li>
                              </ul>
                            </div>
                          </div>
                   
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="job_filter_category_sidebar company_wrapper jb_cover">
                    <div className="job_filter_sidebar_heading jb_cover">
                      <h1>
                        about us
                        <span>
                          <a
                            href="#0"
                            data-toggle="modal"
                            data-target="#myModal2"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                      <div
                        className="modal fade delete_popup company_popup"
                        id="myModal2"
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
                                <div className="delett_cntn jb_cover">
                                  <h1>
                                    <i className="fas fa-edit" />
                                    about us
                                  </h1>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>write yourself:</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <textarea
                                            className="require"
                                            name="message"
                                            rows={5}
                                            placeholder="Write Yourself"
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="padder_top jb_cover" />
                                  <div className="header_btn search_btn applt_pop_btn">
                                    <a href="#0">save updates</a>
                                  </div>
                                  <div className="cancel_wrapper">
                                    <a href="#0" data-dismiss="modal">
                                      cancel
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="job_overview_header pdd jb_cover">
                      <p>
                        Google is and always will be an engineering company. We
                        hire people with a broad set of icalskills who are ready
                        to tackle some of technology's greatest challenges and
                        make an impact on milions, if not billions, of users. At
                        Google, engineers not only revolutionize search, they
                        routinely work on massive scalability and storage
                        solutions,
                        <br />
                        <br />
                        large-scale applications and rely new platforms for
                        developers around the world. From AdWords to rome,
                        Android to Ye, Social to Local, Google engineers are
                        changing the world. From AdWords to Chrome, Aoid to Ye,
                        Social to.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="header_btn search_btn jb_cover">
                    <a href="#0">save changes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*employee dashboard wrapper end*/}
      {/* newsletter wrapper start */}
      <div className="jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="job_newsletter_wrapper jb_cover">
                <div className="jb_newslwtteter_left">
                  <h2>Looking For A Job</h2>
                  <p>
                    Your next level Product developemnt company assetsYour next
                    level Product
                  </p>
                </div>
                <div className="jb_newslwtteter_button">
                  <div className="header_btn search_btn news_btn jb_cover">
                    <a href="#0">submit</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
