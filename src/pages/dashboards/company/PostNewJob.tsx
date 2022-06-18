import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import PositionList from "../../../components/PositionList";
import QuillBox from "../../../components/QuillBox";
import upsertJobAPI from "../../../features/job/upsertJob";
import { selectLogin } from "../../../features/login/loginSlice";

export default function PostNewJob() {
  const { token } = useSelector(selectLogin);

  const [btnEnable, setBtnState] = useState(true);
  const [description, setDescription] = useState("");
  const positionInput = useRef<HTMLSelectElement>(null);
  const employmentTypeInput = useRef<HTMLSelectElement>(null);
  const titleInput = useRef<HTMLInputElement>(null);
  const locationInput = useRef<HTMLInputElement>(null);
  const salaryInput = useRef<HTMLInputElement>(null);
  const experienceInput = useRef<HTMLInputElement>(null);
  const candidateLimitInput = useRef<HTMLInputElement>(null);
  const expireTimeInput = useRef<HTMLInputElement>(null);

  const handleCreateJob = async () => {
    setBtnState(false);
    const payload = {
      job: {
        title: titleInput.current?.value,
        position_id: positionInput.current?.value,
        description: description,
        salary: salaryInput.current?.value,
        location: locationInput.current?.value,
        experience_requirement: experienceInput.current?.value,
        employment_type: employmentTypeInput.current?.value,
        candidate_limit: candidateLimitInput.current?.value,
        expire_date: expireTimeInput.current?.value,
      },
    };
    try {
      await upsertJobAPI(token, payload);
    } catch (e) {
      alert(e);
    }
    setBtnState(true);
  };

  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar pd0 jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1> post new job</h1>
          </div>
          <div className="dashboard_job_overview_header jb_cover">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>job title</label>
                  <input
                    ref={titleInput}
                    type="text"
                    name="name"
                    placeholder="Need Graphic Designer"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>location</label>
                  <input
                    ref={locationInput}
                    type="text"
                    name="name"
                    placeholder="Street, District, City"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_select_box">
                  <PositionList refValue={positionInput} />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_select_box">
                  <label>job type</label>
                  <select className="react-select" ref={employmentTypeInput}>
                    <option value="full-time">full-time</option>
                    <option value="part-time">part-time</option>
                    <option value="internship">internship</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>salary</label>
                  <input
                    ref={salaryInput}
                    type="number"
                    name="name"
                    step="0.1"
                    placeholder="23 millions VND"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>experience</label>
                  <input
                    ref={experienceInput}
                    type="number"
                    step="0.5"
                    name="name"
                    placeholder="1,5 years experience"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>candidate limit</label>
                  <input
                    ref={candidateLimitInput}
                    type="number"
                    name="name"
                    placeholder="5 candidates"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>expire time</label>
                  <input
                    style={{ paddingRight: 12 }}
                    ref={expireTimeInput}
                    type="date"
                    name="name"
                    placeholder="5 candidates"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className=" jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1> about this job</h1>
          </div>
          <div className="jb_cover">
            <QuillBox setValue={setDescription} />
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <br />
        <div className="jb_cover">
          <div
            className={
              "header_btn search_btn jb_cover " +
              (!btnEnable ? "disabled_btn" : "")
            }
            onClick={() => {
              btnEnable && handleCreateJob();
            }}
          >
            <a href="#0">Submit</a>
          </div>
        </div>
      </div>
    </>
  );
}
