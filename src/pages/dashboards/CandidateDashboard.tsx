import { useSelector } from "react-redux";
import { selectLogin } from "../../features/login/loginSlice";

export default function CandidateDashBoard() {
  const { user } = useSelector(selectLogin);

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
                      <a href="#"> Home </a>&nbsp; / &nbsp;
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
                  src={user.picture}
                  className="img-responsive"
                  alt="post_img"
                />
                <div className="emp_web_profile candidate_web_profile jb_cover">
                  <h4>luca wallace</h4>
                  <p>@username</p>
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
                      <a href="#">
                        <i className="fas fa-power-off" /> log out{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#" data-toggle="modal" data-target="#myModal">
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
                            <a href="#">save updates</a>
                          </div>
                          <div className="cancel_wrapper">
                            <a href="#" className="" data-dismiss="modal">
                              cancel
                            </a>
                          </div>
                          <div className="login_remember_box jb_cover">
                            <label className="control control--checkbox">
                              You accepts our
                              <a href="#">Terms and Conditions </a> and
                              <a href="#">Privacy Policy</a>
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
                            href="#"
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
                            ×
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
                                  <a href="#">save updates</a>
                                </div>
                                <div className="cancel_wrapper">
                                  <a href="#" data-dismiss="modal">
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
                                <li>job description:</li>
                                <li>Graphic Designer</li>
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
                                <li>Los Angeles Califonia PO</li>
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
                                <li>0145636941</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-envelope" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>email:</li>
                                <li>
                                  <a href="#">digital@example.com</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper dcv jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-globe-asia" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>website:</li>
                                <li>
                                  <a href="#">www.digital.com</a>
                                </li>
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
                            href="#"
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
                                    <a href="#">save updates</a>
                                  </div>
                                  <div className="cancel_wrapper">
                                    <a href="#" data-dismiss="modal">
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
                  <div className="job_filter_category_sidebar company_wrapper jb_cover">
                    <div className="job_filter_sidebar_heading jb_cover">
                      <h1>
                        education background
                        <span>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal4"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                    </div>
                    <div
                      className="modal fade delete_popup company_popup"
                      id="myModal4"
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
                                  education
                                </h1>
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>education 01 :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Title"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Institude"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Period"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <textarea
                                          name="message"
                                          rows={2}
                                          placeholder="Description"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category_wrapper gallery_browse jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>education 02 :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Title"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Institude"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Period"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <textarea
                                          name="message"
                                          rows={2}
                                          placeholder="Description"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="header_btn search_btn applt_pop_btn">
                                  <a href="#">save updates</a>
                                </div>
                                <div className="cancel_wrapper">
                                  <a href="#" data-dismiss="modal">
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
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="jp_listing_overview_list_main_wrapper education_board jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-graduation-cap" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>2018 - Present</li>
                                <li>
                                  Masters in Software Engineering
                                  <a href="#"> at CDGI</a>
                                </li>
                              </ul>
                              <p>
                                Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum
                                passage
                              </p>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper education_board jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-graduation-cap" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>2014 - 2018</li>
                                <li>
                                  Bachelor of Arts
                                  <a href="#">at RK university</a>
                                </li>
                              </ul>
                              <p>
                                Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum
                                passage
                              </p>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper education_board jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-graduation-cap" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>2014 - 2014</li>
                                <li>
                                  metric education
                                  <a href="#">at st.thomas school</a>
                                </li>
                              </ul>
                              <p>
                                Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure
                                Latin words, consectetur, from a Lorem Ipsum
                                passage
                              </p>
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
                        work experience
                        <span>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal6"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                    </div>
                    <div
                      className="modal fade delete_popup company_popup"
                      id="myModal6"
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
                                  experience
                                </h1>
                                <div className="category_wrapper jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>experience 1 :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Title"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Company"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Period"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <textarea
                                          name="message"
                                          rows={2}
                                          placeholder="Description"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="category_wrapper gallery_browse jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>experience 2 :</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Title"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Company"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="Period"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <textarea
                                          name="message"
                                          rows={2}
                                          placeholder="Description"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="header_btn search_btn applt_pop_btn">
                                  <a href="#">save updates</a>
                                </div>
                                <div className="cancel_wrapper">
                                  <a href="#" data-dismiss="modal">
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
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="jp_listing_overview_list_main_wrapper education_board jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-suitcase" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>2018 - Present</li>
                                <li>
                                  Lead UI/UX, Web Design, Interaction Design
                                  <a href="#"> at webstrot</a>
                                </li>
                              </ul>
                              <p>
                                As a UI/UX Designer, i have a strong background
                                of work closely with Developers and associate
                                with Design Research to enhance design
                                suggestions. Manage design wireframes, mockups
                                and navigation maps. My job was to make sure
                                that my Designs are unique.Develop clean well
                                executed design concepts. Coordinate with team
                                on design and prototype of new interfaces.
                              </p>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper education_board jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-suitcase" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>2014 - 2018</li>
                                <li>
                                  Computer Operator/Programmer
                                  <a href="#">at digiworld</a>
                                </li>
                              </ul>
                              <p>
                                We can develop and design anything beyond your
                                imagination. About our work, we don’t say
                                anything because our work speaks. For more, you
                                can ask our clients and they will tell you how
                                much satisfied they are with our services. So,
                                what are you waiting for?We can develop and
                                design anything beyond your imagination. About
                                our work, we don’t say anything because our work
                                speaks. For more, you can ask our clients and
                                they will tell you how much satisfied they are
                                with our services. So, what are you waiting for?
                              </p>
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
                        special qualification
                        <span>
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#myModal7"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                    </div>
                    <div
                      className="modal fade delete_popup company_popup"
                      id="myModal7"
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
                                  qualification
                                </h1>
                                <div className="category_wrapper gallery_browse jb_cover">
                                  <div className="row">
                                    <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                      <div className="category_lavel jb_cover">
                                        <p>type here:</p>
                                      </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="number"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="number"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="number"
                                        />
                                      </div>
                                      <div className="delete_jb_form gallery_link">
                                        <input
                                          type="text"
                                          name="name"
                                          placeholder="number"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="header_btn search_btn applt_pop_btn">
                                  <a href="#">save updates</a>
                                </div>
                                <div className="cancel_wrapper">
                                  <a href="#" data-dismiss="modal">
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
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <ul className="speical_qualification_wrapper">
                            <li>
                              <i className="fas fa-check-square" />5 years+
                              experience designing and building products.
                            </li>
                            <li>
                              <i className="fas fa-check-square" />
                              Skilled at any Kind Design Tools.
                            </li>
                            <li>
                              <i className="fas fa-check-square" />
                              Passion for people-centered design, solid
                              intuition.
                            </li>
                            <li>
                              <i className="fas fa-check-square" />
                              Hard Worker &amp; Quick Lerner.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="header_btn search_btn jb_cover">
                    <a href="#">save changes</a>
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
                    <a href="#">submit</a>
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
