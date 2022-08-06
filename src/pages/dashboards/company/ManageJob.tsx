import { useCallback } from "react";
import useJobListByCompany from "../../../hooks/useJobListByCompany";

export default function ManageJob() {
  const jobs = useJobListByCompany();

  const displayJobList = useCallback(() => {
    return (
      <>
        {jobs.map((job, key) => {
          return (
            <div className="dashboard_latest_job_box jb_cover" key={key}>
              <div className="dashboard_job_list">
                <h6>
                  <a href={`/job/${job.id}`}>{job.title}</a>
                </h6>
                <p>
                  {" "}
                  <i className="far fa-calendar" />{" "}
                  {new Date(job.created_at).toDateString()}
                </p>
              </div>
              <div className="dashboard_job_list_next">
                <p>
                  <a href="#0">{job.total ? job.total : "0"} applications</a>
                </p>
              </div>
              <div className="dashboard_job_list_next">
                <p className="gn">{job.state}</p>
              </div>
              <div className="dashboard_job_list_next">
                <div className="jb_job_post_right_btn_wrapper">
                  <ul>
                    <li />
                    <li>
                      <a href="#0" className="applied_btn">
                        Delete
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="applied_btn">
                        Publish
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
                  <div className="dashboard_job_list mange_list">
                    <h6>job title</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>applications</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>status</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>action</h6>
                  </div>
                </div>

                {displayJobList()}

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
