import { useCallback } from "react";
import { useSelector } from "react-redux";
import setJobState from "../../../features/job/setJobState";
import { selectLogin } from "../../../features/login/loginSlice";
import useJobListV2 from "../../../hooks/useJobListV2";

function JobItem(job: any) {
  return (
    <div className="dashboard_latest_job_box jb_cover">
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
              href={`/job/${job.id}`}
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
              <a
                href="#0"
                className="applied_btn"
                onClick={() => job.handleSetJobState(job.id, "rejected")}
              >
                Reject
              </a>
            </li>
            <li>
              <a
                href="#0"
                className="applied_btn"
                onClick={() => job.handleSetJobState(job.id, "approved")}
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

export default function AdminManageJob() {
  const { token, user } = useSelector(selectLogin);
  const { jobs, reload } = useJobListV2();

  const displayJobList = useCallback(() => {
    const handleSetJobState = async (id: string, state: string) => {
      const payload = {
        job: {
          approver: user.id,
          state: state,
          id: id,
        },
      };

      try {
        await setJobState(token, payload);
        alert(state);
        reload();
      } catch (e) {
        alert(e);
      }
    };

    return (
      <>
        {jobs.map((job, key) => {
          return (
            <div key={key}>
              {job.state === "pending" && (
                <JobItem
                  id={job.id}
                  created_at={job.created_at}
                  title={job.title}
                  company_name={job.company_name}
                  position={job.position}
                  handleSetJobState={handleSetJobState}
                />
              )}
            </div>
          );
        })}
      </>
    );
  }, [jobs, reload, token]);

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
