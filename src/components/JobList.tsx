import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import applyJob from "../features/application/applyJob";
import { selectLogin } from "../features/login/loginSlice";
import useJobList from "../hooks/useJobList";
import useJobTotal from "../hooks/useJobTotal";
import JobFilter from "./JobFilter";

export function JobItem({
  id,
  title,
  employment_type,
  company_name,
  salary,
  state,
  location,
  company_id,
  handleApplyJob,
  company_avatar,
}: any) {
  if (state === "pending") return null;

  return (
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="job_listing_left_fullwidth jb_cover">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="jp_job_post_side_img">
              <img width={70} src={company_avatar || "images/lt4.png"} alt="post_img" />
              <br /> <a href={`company/${company_id}`}>{company_name}</a>
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

function calculatePadding(
  maxPage: number,
  currentPage: number,
  numberNav: number
) {
  const padding = [];

  if (currentPage - numberNav > 1) padding.push("...");

  for (
    let i = Math.max(2, currentPage - numberNav);
    i <= Math.min(maxPage - 1, currentPage + numberNav);
    i++
  ) {
    padding.push(i);
  }

  if (currentPage + numberNav < maxPage) padding.push("...");

  return padding;
}

const numberNav = 2;
const jobPerPage = 3;

export default function JobList() {
  const { token } = useSelector(selectLogin);

  const [currentPage, setCurrentPage] = useState(1);
  const total = useJobTotal();
  const jobs = useJobList(currentPage);

  const maxPage = Math.ceil(total["count"] / jobPerPage);
  const listPageNav = [
    1,
    ...calculatePadding(maxPage, currentPage, numberNav),
    maxPage,
  ];

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
              company_avatar={job.company_avatar}
              state={job.state}
              salary={job.salary}
              location={job.location}
              company_id={job.company_id}
              company_name={job.company_name}
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
                  <p>You're Watching {((currentPage - 1) * 3) + 1} to {currentPage * 3}</p>
                </div>
              </div>
              <div className="tab-content btc_shop_index_content_tabs_main jb_cover">
                <div id="grid" className="tab-pane fade">
                  <div className="row">
                    {jobs.map(
                      ({
                        id,
                        title,
                        salary,
                        location,
                        company_id,
                        company_name,
                        company_avatar
                      }) => (
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="jp_job_post_side_img">
                                  <img width={70} src={company_avatar || "images/lt1.png"} alt="post_img" />
                                  <br />{" "}
                                  <span>
                                    <a href={`company/${company_id}`}>
                                      {company_name}
                                    </a>
                                  </span>
                                </div>
                                <div className="jp_job_post_right_cont">
                                  <h4>
                                    <Link to={"/job/" + id}>{title}</Link>
                                  </h4>
                                  <ul>
                                    <li>
                                      <i className="flaticon-cash" />
                                      &nbsp; {salary} millions VND
                                    </li>
                                    <li>
                                      <i className="flaticon-location-pointer" />
                                      &nbsp; {location}
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
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div id="list" className="tab-pane active">
                  <div className="row">{displayJobs()}</div>
                </div>

                <div className="blog_pagination_section jb_cover">
                  <ul>
                    <li
                      onClick={() =>
                        setCurrentPage(Math.max(currentPage - 1, 1))
                      }
                    >
                      <a href="#0" className="prev">
                        <i className="flaticon-left-arrow" />{" "}
                      </a>
                    </li>
                    {listPageNav.map((pageNav) => {
                      return (
                        <li
                          onClick={() =>
                            typeof pageNav === "number" &&
                            setCurrentPage(pageNav)
                          }
                          className={
                            pageNav === currentPage ? "third_pagger" : ""
                          }
                        >
                          <a href="#0">{pageNav}</a>
                        </li>
                      );
                    })}
                    <li
                      onClick={() =>
                        setCurrentPage(Math.min(currentPage + 1, maxPage))
                      }
                    >
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
