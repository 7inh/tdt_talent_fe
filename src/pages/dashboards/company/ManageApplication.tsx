export default function ManageApplication() {
  return (
    <>
      <div className="col-lg-9 col-md-12 col-sm-12 col-12">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="job_main_overflow jb_cover">
              <div className="dashboard_latest_job_overlow">

                <div className="manage_jobs_wrapper jb_cover">
                  <div className="dashboard_job_list mange_list" style={{width: "470px"}}>
                    <h6>Candidate</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>Resume</h6>
                  </div>
                  <div className="dashboard_job_list_next mange_list">
                    <h6>action</h6>
                  </div>
                </div>
                


                
                <div className="dashboard_latest_job_box jb_cover">
                  <div className="dashboard_job_list" style={{width: "470px"}}>
                    <div style={{ display: "flex" }}>
                      <div>
                        <img src="/images/rs1.jpg" alt="post_img" />
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
                          luca wallace
                        </a>

                        <div style={{ color: "#ff3366" }}>
                          <i className="flaticon-location-pointer" />
                          &nbsp; Los Angeles
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




              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
