import { useParams } from "react-router-dom";
import useJobDetail from "../hooks/useJobDetail";

export default function JobDetail() {
  let { id: jobId } = useParams();

  if (!jobId) throw new Error("page not found");

  const job = useJobDetail(parseInt(jobId));

  if (!job) throw new Error("page not found");
  
  return (
    <div className="job_single_wrapper jb_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="job_filter_category_sidebar jb_cover">
              <div className="job_filter_sidebar_heading jb_cover">
                <h1>jobs overview</h1>
              </div>
              <div className="job_overview_header jb_cover">
                <div className="jb_job_overview_img">
                  <img src="/images/overview.png" alt="post_img" />
                  <h4>{job.title}</h4>
                  <p>{job.company_name}</p>
                  <ul className="job_single_lists">
                    <li>
                      <div className="job_adds_right">
                        <a href="#0">
                          <i className="far fa-heart" />
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="header_btn search_btn part_time_btn jb_cover">
                        <a href="#0">{job.employment_type}</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="far fa-calendar" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Date Posted:</li>
                      <li>{new Date(job.created_at).toDateString()}</li>
                    </ul>
                  </div>
                </div>
                {job.expire_date && (
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                      <i className="far fa-calendar" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Expire date:</li>
                        <li>{new Date(job.expire_date).toDateString()}</li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Location:</li>
                      <li>{job.location}</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="far fa-money-bill-alt" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Salary:</li>
                      <li>{job.salary} millions VND</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fa fa-th-large" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Category:</li>
                      <li>{job.position}</li>
                    </ul>
                  </div>
                </div>
                <div className="jp_listing_overview_list_main_wrapper jb_cover">
                  <div className="jp_listing_list_icon">
                    <i className="fa fa-star" />
                  </div>
                  <div className="jp_listing_list_icon_cont_wrapper">
                    <ul>
                      <li>Experience:</li>
                      <li>{job.experience_requirement}+ years experience</li>
                    </ul>
                  </div>
                </div>
                <div className="header_btn search_btn news_btn overview_btn  jb_cover">
                  <a href="#0" data-toggle="modal" data-target="#myModal41">
                    apply now !
                  </a>
                </div>
                <div
                  className="modal fade apply_job_popup"
                  id="myModal41"
                  role="dialog"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                      >
                        ×
                      </button>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="apply_job jb_cover">
                            <h1>apply for this job :</h1>
                            <div className="search_alert_box jb_cover">
                              <div className="apply_job_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="full name"
                                />
                              </div>
                              <div className="apply_job_form">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="header_btn search_btn applt_pop_btn jb_cover">
                              <a href="#0">apply now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="jb_listing_single_overview jb_cover">
              <h2
                className="job_filter_sidebar_heading jb_cover"
                style={{ color: "#fafafa" }}
              >
                Job Description
              </h2>

              <div className="jp_job_des jb_cover">
                {
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job.description,
                    }}
                  />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
