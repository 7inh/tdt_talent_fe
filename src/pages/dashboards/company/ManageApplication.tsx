import { useCallback } from "react";
import { useSelector } from "react-redux";
import setApplicationState from "../../../features/application/setApplicationState";
import { selectLogin } from "../../../features/login/loginSlice";
import useApplicationListByCompanyV2 from "../../../hooks/useApplicationListByCompanyV2";

function ApplicationItem(application: any) {
  return (
    <div className="dashboard_latest_job_box jb_cover">
      <div className="dashboard_job_list" style={{ width: "470px" }}>
        <div style={{ display: "flex" }}>
          <div>
            <img
              src={application.candidate_avatar || "/images/rs1.jpg"}
              alt="post_img"
            />
          </div>
          <div style={{ margin: "0 10px 0 10px" }}>
            <a
              href="#0"
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: "#222222",
              }}
            >
              {application.candidate_name}
            </a>

            <div style={{ color: "#ff3366" }}>
              <i className="flaticon-location-pointer" />
              &nbsp; {application.candidate_address}
            </div>
            <div style={{ color: "#ff3366" }}>
              <i className="fas fa-suitcase" />
              &nbsp; Senior UX asd asda sda sd
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_job_list_next">
        <div className="header_btn download_btn_wrapper jb_cover">
          <ul>
            <li>
              <a
                href="#0"
                style={{
                  width: " fit-content",
                  padding: "0 10px 0 10px",
                }}
              >
                <i className="fas fa-file-download" />
                download
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard_job_list_next">
        <div className="jb_job_post_right_btn_wrapper">
          <ul>
            <li />
            <li>
              {" "}
              <a
                href="#0"
                className="applied_btn"
                onClick={() =>
                  application.handleSetApplicationState(
                    application.id,
                    "rejected"
                  )
                }
              >
                Reject
              </a>
            </li>
            <li>
              <a
                href="#0"
                className="applied_btn"
                onClick={() =>
                  application.handleSetApplicationState(
                    application.id,
                    "approved"
                  )
                }
              >
                Approve
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ManageApplication() {
  const { applications, reload } = useApplicationListByCompanyV2();
  const { token } = useSelector(selectLogin);

  const displayApplicationList = useCallback(() => {
    const handleSetApplicationState = async (id: string, state: string) => {
      const payload = {
        application: {
          state: state,
          id: id,
        },
      };

      try {
        await setApplicationState(token, payload);
        alert(state);
        reload();
      } catch (e) {
        alert(e);
      }
    };
    return (
      <>
        {applications.map((application, key) => {
          return (
            <div key={key}>
              {application.state === "pending" && (
                <ApplicationItem
                  id={application.id}
                  handleSetApplicationState={handleSetApplicationState}
                  candidate_avatar={application.candidate_avatar}
                  candidate_address={application.candidate_address}
                  candidate_name={application.candidate_name}
                />
              )}
            </div>
          );
        })}
      </>
    );
  }, [applications, reload, token]);

  return (
    <>
      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="job_main_overflow jb_cover">
              <div className="dashboard_latest_job_overlow">
                <div className="manage_jobs_wrapper jb_cover">
                  <div
                    className="dashboard_job_list mange_list"
                    style={{ width: "470px" }}
                  >
                    <h6>Candidate</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>Resume</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>action</h6>
                  </div>
                </div>

                {displayApplicationList()}

                <div className="blog_pagination_section jb_cover">
                  <ul>
                    <li>
                      <a href="#0" className="prev">
                        {" "}
                        <i className="flaticon-left-arrow" />{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#0">1</a>
                    </li>
                    <li className="third_pagger">
                      <a href="#0">2</a>
                    </li>
                    <li className="d-block d-sm-block d-md-block d-lg-block">
                      <a href="#0">3</a>
                    </li>
                    <li className="d-none d-sm-block d-md-block d-lg-block">
                      <a href="#0">...</a>
                    </li>
                    <li className="d-none d-sm-block d-md-block d-lg-block">
                      <a href="#0">6</a>
                    </li>
                    <li>
                      <a href="#0" className="next">
                        {" "}
                        <i className="flaticon-right-arrow" />{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
