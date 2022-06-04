import { useEffect, useState } from "react";
import QuillBox from "../../../components/QuillBox";

export default function PostNewJob() {
  const [description, setDescription] = useState("")

  useEffect(() => {
    console.log("description", description)
  }, [description])


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
                <div className="dashboard_select_box">
                  <label>job category</label>
                  <select>
                    <option>AI-Engine</option>
                    <option>Backend developer</option>
                    <option>Frontend developer</option>
                    <option>Game developer</option>
                    <option>Mobiles developer</option>
                    <option>Testing developer</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>job title</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Need Graphic Designer"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dashboard_select_box">
                  <label>state</label>
                  <select>
                    <option>pending</option>
                    <option>active</option>
                    <option>expired</option>
                    <option>rejected</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>attach JD</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Attach Job Description"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_select_box">
                  <label>job type</label>
                  <select>
                    <option>full time</option>
                    <option>part time</option>
                    <option>freelance</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>salary</label>
                  <input type="text" name="name" placeholder="Input salary" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>experience</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="3 years experience"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>location</label>
                  <input type="text" name="name" placeholder="Location Name" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="dashboard_contect_form3">
                  <label>candidate limit</label>
                  <input type="text" name="name" placeholder="30 candidates" />
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
    </>
  );
}
