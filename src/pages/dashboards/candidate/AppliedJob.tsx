import { useCallback } from "react";
import useApplicationListByCandidate from "../../../hooks/useApplicationByCandidate";

export default function AppliedJob() {
  const applications = useApplicationListByCandidate();

  const displayApplicationList = useCallback(() => {
    return (
      <>
        {applications.map((application, key) => {
          return (
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-12"
              key={key}
              style={{ marginBottom: 20 }}
            >
              <div className="jb_listing_left_fullwidth mt-0 jb_cover">
                <div className="row">
                  <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                    <div className="jb_job_post_side_img">
                      <img src="/images/lt1.png" alt="post_img" />
                      <br /> <span>google</span>
                    </div>
                    <div className="jb_job_post_right_cont">
                      <h4>
                        <a href="#0">{application.job_title}</a>
                      </h4>
                      <div>
                        <div>
                          <i
                            className="flaticon-cash"
                            style={{ color: "#ff3366" }}
                          />
                          &nbsp; {application.salary} millions VND
                        </div>
                        <div>
                          <i
                            className="flaticon-location-pointer"
                            style={{ color: "#ff3366" }}
                          />
                          &nbsp; {application.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="jb_job_post_right_btn_wrapper">
                      <ul>
                        <li>
                          <div className="job_adds_right">
                            <a href="#0">
                              <i className="far fa-heart" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <a href="#0">{application.employment_type}</a>
                        </li>
                        <li>
                          {" "}
                          <a href="#0" className="applied_btn">
                            applied
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }, [applications]);

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="manage_jobs_wrapper jb_cover">
            <div className="mange_list applications_recent">
              <h6>04 applied jobs</h6>
            </div>
          </div>
        </div>

        {displayApplicationList()}
      </div>
    </div>
  );
}
