import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useProfile from "../../../hooks/useProfile";

export default function CandidateDashBoard() {
  const profile = useProfile();
  const location = useLocation();

  return (
    <>
      <div className="page_title_section">
        <div className="page_header">
          <div className="container">
            <div className="row">
              {/* section_heading start */}
              <div className="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
                <h1>Candidates</h1>
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
                </div>
                <div className="emp_follow_link jb_cover">
                  <ul className="feedlist">
                    <li>
                      <Link
                        to="/dashboard"
                        className={
                          location.pathname.match(/\/dashboard$/g)
                            ? "link_active"
                            : ""
                        }
                      >
                        <i className="fas fa-file" />
                        resume
                      </Link>
                    </li>
                    <li>
                      <a href="candidate_favourite_job.html">
                        <i className="fas fa-heart" />
                        favourite
                      </a>
                    </li>
                    <li>
                      <Link
                        to="applied_job"
                        className={
                          location.pathname.match(/\/applied_job$/g)
                            ? "link_active"
                            : ""
                        }
                      >
                        <i className="fas fa-check-square" />
                        applied job
                      </Link>
                    </li>
                  </ul>
                  <ul className="feedlist logout_link jb_cover">
                    <li>
                      <a href="#0">
                        <i className="fas fa-power-off" /> log out{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="row">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
