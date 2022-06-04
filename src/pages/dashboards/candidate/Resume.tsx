import useProfile from "../../../hooks/useProfile";

export default function Resume() {
  const profile = useProfile();
  console.log("profile2", profile);
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar company_wrapper jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1>
              General information
              <span>
                <a href="#0" data-toggle="modal" data-target="#myModal1">
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
                ></button>
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
                              <p>full name :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                type="text"
                                name="name"
                                placeholder={profile.full_name || ""}
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
                                type="text"
                                name="name"
                                placeholder={profile.contact_mail || "example@gmail.com"}
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
                                placeholder={profile.phone_number|| "09........"}
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
                                placeholder={profile.address || "Ho Chi Minh City" }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>contry :</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                type="email"
                                name="email"
                                placeholder={profile.country || "Vietnam"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>city</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                type="text"
                                name="name"
                                placeholder={profile.city || "Ho Chi Minh City"}
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
                                placeholder={profile.website || "example.com"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="category_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="category_lavel jb_cover">
                              <p>attach resume</p>
                            </div>
                          </div>
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="delete_jb_form">
                              <input
                                type="text"
                                name="name"
                                placeholder={profile.attach_resume || "none"}
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
              about
              <span>
                <a href="#0" data-toggle="modal" data-target="#myModal2">
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
                  <button type="button" className="close" data-dismiss="modal">
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
              Google is and always will be an engineering company. We hire
              people with a broad set of icalskills who are ready to tackle some
              of technology's greatest challenges and make an impact on milions,
              if not billions, of users. At Google, engineers not only
              revolutionize search, they routinely work on massive scalability
              and storage solutions,
              <br />
              <br />
              large-scale applications and rely new platforms for developers
              around the world. From AdWords to rome, Android to Ye, Social to
              Local, Google engineers are changing the world. From AdWords to
              Chrome, Aoid to Ye, Social to.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
