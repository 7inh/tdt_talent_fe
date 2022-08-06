import { useState } from "react";
import { useSelector } from "react-redux";
import CompanyProfileForm from "../../../components/CompanyProfileForm";
import { selectLogin } from "../../../features/login/loginSlice";
import updateProfile from "../../../features/profile/updateProfile";
import useProfile from "../../../hooks/useProfile";

export default function Information() {
  const profile = useProfile();
  const { token } = useSelector(selectLogin);
  const [btnEnable, setBtnState] = useState(true);

  const handleUpdateProfile = async (profileUpdate: any) => {
    setBtnState(false);
    const payload = {
      profile: {
        ...profileUpdate,
      },
    };
    try {
      await updateProfile(token, payload);
      alert("success");
      window.location.reload();
    } catch (e) {
      alert(e);
      return;
    }
    setBtnState(true);
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar company_wrapper jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1>
              {" "}
              Contact Information{" "}
              <span>
                <a href="#0" data-toggle="modal" data-target="#myModal1">
                  <i className="fas fa-edit" />
                </a>
              </span>
            </h1>

            <CompanyProfileForm
              profile={profile}
              btnEnable={btnEnable}
              handleUpdateProfile={handleUpdateProfile}
            />
          </div>
          <div className="dashboard_job_overview_header jb_cover">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="far fa-calendar" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Company Name</li>
                      <li>{profile.full_name}</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Address</li>
                      <li>{profile.address}</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fa fa-info-circle" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Hotline</li>
                      <li>{profile.phone_number}</li>
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
                      <li>email</li>
                      <li>
                        <a href="#0">{profile.contact_mail}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="flaticon-man-user" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Country</li>
                      <li>{profile.country}</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper dcv jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fas fa-globe-asia" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>website</li>
                      <li>
                        <a href="#0">{profile.website}</a>
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
                                <p>about us</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <textarea
                                  className="require"
                                  name="message"
                                  rows={5}
                                  placeholder={profile.description || "..."}
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="padder_top jb_cover" />
                        <div className="header_btn search_btn dashboard_applt_pop_btn">
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
          <div className="dashboard_job_overview_header pdd jb_cover">
            <p>{profile.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
