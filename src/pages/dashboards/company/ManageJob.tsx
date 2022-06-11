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
                  <a href="#0">{job.title}</a>
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
                <ul>
                  <li>
                    <a href="#0">
                      <i className="fas fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="#0" data-toggle="modal" data-target="#myModal1">
                      <i className="fas fa-edit" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </>
    );
  }, [jobs]);

  return (
    <>
      <div
        className="modal fade delete_popup company_popup"
        id="myModal1"
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
                          <p>company name</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="delete_jb_form">
                          <input type="text" name="name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category_wrapper jb_cover">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="category_lavel jb_cover">
                          <p>location</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="delete_jb_form">
                          <input type="text" name="name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category_wrapper jb_cover">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="category_lavel jb_cover">
                          <p>phone</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="delete_jb_form">
                          <input type="text" name="name" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category_wrapper jb_cover">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="category_lavel jb_cover">
                          <p>email</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="delete_jb_form">
                          <input type="email" name="email" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="category_wrapper jb_cover">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                        <div className="category_lavel jb_cover">
                          <p>Country</p>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                        <div className="delete_jb_form">
                          <input type="text" name="name" />
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
                          <input type="text" name="name" />
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
