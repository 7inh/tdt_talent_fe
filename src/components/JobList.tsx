import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import applyJob from "../features/application/applyJob";
import { selectLogin } from "../features/login/loginSlice";
import useJobList from "../hooks/useJobList";
import JobFilter from "./JobFilter";

export function JobItem({
  id,
  title,
  employment_type,
  salary,
  location,
  company_id,
  handleApplyJob,
}: any) {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="job_listing_left_fullwidth jb_cover">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="jp_job_post_side_img">
              <img src="images/lt4.png" alt="post_img" />
              <br /> <span>google</span>
            </div>
            <div className="jp_job_post_right_cont">
              <h4>
                <Link to={"/job/" + id}>{title}</Link>
              </h4>
              <ul>
                <li></li>
                <li>
                  <i className="flaticon-cash" />
                  &nbsp; {salary} millions VND
                </li>
                <li className="centroid">
                  <i className="flaticon-location-pointer" />
                  &nbsp; {location}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="g_jp_job_post_right_btn_wrapper">
              <ul>
                <li>
                  <div className="job_adds_right">
                    <a href="#!">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </li>
                <li>
                  <a href="job_single.html">{employment_type}</a>
                </li>
                <li>
                  {" "}
                  <a
                    href="#0"
                    data-toggle="modal"
                    data-target="#myModal2"
                    onClick={() => handleApplyJob(id, company_id)}
                  >
                    apply
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function JobList() {
  const { token } = useSelector(selectLogin);

  const jobs = useJobList();
  const [jobId, setJobId] = useState("");
  const [companyId, setCompanyId] = useState("");
  const closeModelRef = useRef<HTMLButtonElement>(null);

  const handleApplyJob = (job_id: string, company_id: string) => {
    setJobId(job_id);
    setCompanyId(company_id);
  };

  const submitApplication = async () => {
    const payload = {
      application: {
        job_id: jobId,
        company_id: companyId,
      },
    };

    closeModelRef.current?.click();

    try {
      await applyJob(token, payload);
      alert("success apply");
    } catch (e) {
      alert(e);
    }
  };

  const displayJobs = useCallback(() => {
    return (
      <>
        {jobs.map((job: any, i: number) => {
          return (
            <JobItem
              key={i}
              id={job.id}
              title={job.title}
              employment_type={job.employment_type}
              salary={job.salary}
              location={job.location}
              company_id={job.company_id}
              handleApplyJob={handleApplyJob}
            />
          );
        })}
      </>
    );
  }, [jobs]);

  return (
    <div className="job_filter_listing_wrapper jb_cover">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block d-xl-block">
            <JobFilter />
          </div>
          <div className="col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="job_listing_left_side jb_cover">
              <div className="filter-area jb_cover">
                <select className="react-select">
                  <option>short by</option>
                  <option>most recent </option>
                  <option>most popular</option>
                  <option>top rated</option>
                </select>
                <div className="list-grid">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#grid">
                        {" "}
                        <i className="flaticon-four-grid-layout-design-interface-symbol" />
                      </a>
                    </li>
                    <li className="nav-item">
                      {" "}
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#list"
                      >
                        <i className="flaticon-list" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="showpro">
                  <p>You're Watching 01 to 20</p>
                </div>
              </div>
              <div className="tab-content btc_shop_index_content_tabs_main jb_cover">
                <div id="grid" className="tab-pane fade">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt1.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal01"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal01"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-01"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt2.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">
                                  Power Systems Experience Designer{" "}
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal02"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal02"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-02"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt5.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">
                                  Power Systems Experience Designer{" "}
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal09"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal09"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-09"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt3.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal03"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal03"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-03"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt4.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal05"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal05"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-05"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt4.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">
                                  Power Systems Experience Designer{" "}
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal04"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal04"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-04"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt5.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal051"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal051"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-051"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt1.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">
                                  Power Systems Experience Designer{" "}
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal06"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal06"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-06"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt2.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal07"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal07"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-07"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt4.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">
                                  Power Systems Experience Designer{" "}
                                </a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal061"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal061"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-061"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt1.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal011"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal011"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-011"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="jp_job_post_side_img">
                              <img src="images/lt3.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jp_job_post_right_cont">
                              <h4>
                                <a href="#0">Trainee Web Designer, (Fresher)</a>
                              </h4>
                              <ul>
                                <li>
                                  <i className="flaticon-cash" />
                                  &nbsp; $12K - 15k P.A.
                                </li>
                                <li>
                                  <i className="flaticon-location-pointer" />
                                  &nbsp; Los Angeles, Califonia PO, 455001
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="g_jp_job_post_right_btn_wrapper jb_cover">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#!">
                                      <i className="far fa-heart" />
                                    </a>
                                  </div>
                                </li>
                                <li>
                                  <a href="job_single.html">Part Time</a>
                                </li>
                                <li>
                                  {" "}
                                  <a
                                    href="#0"
                                    data-toggle="modal"
                                    data-target="#myModal08"
                                  >
                                    apply
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div
                              className="modal fade apply_job_popup"
                              id="myModal08"
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
                                            <input
                                              type="text"
                                              name="Email"
                                              placeholder="Enter Your Email"
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
                                          <div className="resume_optional jb_cover">
                                            <p>resume (optional)</p>
                                            <div className="width_50">
                                              <input
                                                type="file"
                                                id="input-file-now-custom-08"
                                                className="dropify"
                                                data-height={90}
                                              />
                                              <span className="post_photo">
                                                upload resume
                                              </span>
                                            </div>
                                            <p className="word_file">
                                              {" "}
                                              microsoft word or pdf file only
                                              (5mb)
                                            </p>
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
                    </div>
                  </div>
                </div>
                <div id="list" className="tab-pane active">
                  <div className="row">{displayJobs()}</div>
                </div>
                <div className="blog_pagination_section jb_cover">
                  <ul>
                    <li>
                      <a href="#0" className="prev">
                        {" "}
                        <i className="flaticon-left-arrow" />{" "}
                      </a>
                    </li>
                    <li className="third_pagger">
                      <a href="#0">1</a>
                    </li>
                    <li>
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

      <div className="modal fade apply_job_popup" id="myModal2" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              ref={closeModelRef}
            >
              ×
            </button>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="apply_job jb_cover">
                  <h1>apply for this job :</h1>
                  <div className="search_alert_box jb_cover">
                    <p style={{ marginBottom: "10px" }}>
                      Cover letter (optional)
                    </p>
                    <div className="apply_job_form">
                      <textarea
                        className="form-control"
                        name="cover_letter"
                        placeholder="..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="resume_optional jb_cover">
                      <p>resume (optional)</p>
                      <div className="width_50">
                        <input
                          type="file"
                          id="input-file-now-custom-2"
                          className=""
                          data-height={90}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="header_btn search_btn applt_pop_btn jb_cover">
                    <a href="#0" onClick={submitApplication}>
                      apply now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
