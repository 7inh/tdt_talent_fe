import { useCallback } from "react";
import useJobList from "../../../hooks/useJobList";

export default function AdminManageJob() {
  const jobs = useJobList();

  const displayAccountList = useCallback(() => {
    return (
      <>
        {jobs.map((job, key) => {
          return (
            <div className="dashboard_latest_job_box jb_cover" key={key}>
              <div className="dashboard_job_list" style={{ width: "470px" }}>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={job.company_avatar || "/images/rs1.jpg"}
                      alt="post_img"
                      style={{ width: "80px", height: "80px" }}
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
                      {job.title}
                    </a>

                    <div style={{ color: "#ff3366" }}>
                      <i className="flaticon-location-pointer" />
                      &nbsp; {job.company_name}
                    </div>
                    <div style={{ color: "#ff3366" }}>
                      <i className="fas fa-suitcase" />
                      &nbsp; {job.position}
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard_job_list_next">
                {new Date(job.created_at).toDateString()}
              </div>
              <div className="dashboard_job_list_next">
                <div className="jb_job_post_right_btn_wrapper">
                  <ul>
                    <li />
                    <li>
                      {" "}
                      <a href="#0" className="applied_btn">
                        Reject
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="applied_btn">
                        Approve
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }, [jobs]);

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
                    <h6>Company</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>Created at</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>action</h6>
                  </div>
                </div>

                {displayAccountList()}

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
