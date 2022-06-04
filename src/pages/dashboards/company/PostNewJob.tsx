export default function PostNewJob() {
  return (
    <>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar pd0 jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1> post new job</h1>
          </div>
          <div className="job_overview_header jb_cover">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="select_box">
                  <label>job category</label>
                  <select>
                    <option>UI/UX designer</option>
                    <option>accountant</option>
                    <option>graphic designer</option>
                    <option>teacher</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="contect_form3">
                  <label>job title</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Need Graphic Designer"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="select_box">
                  <label>job type</label>
                  <select>
                    <option>full time</option>
                    <option>part time</option>
                    <option> temperory</option>
                    <option>freelance</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="contect_form3">
                  <label>working hours</label>
                  <input type="text" name="name" placeholder="40/h Week" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="select_box">
                  <label>salary</label>
                  <select>
                    <option>$12K - 15k P.A.</option>
                    <option>$12K - 20k P.A.</option>
                    <option> $12K - 35k P.A.</option>
                    <option>$12K - 45k P.A.</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="select_box">
                  <label>experience</label>
                  <select>
                    <option>1 year experience</option>
                    <option>2 year experience</option>
                    <option> 3 year experience</option>
                    <option>4 year experience</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1> about this job</h1>
          </div>
        </div>
      </div>
    </>
  );
}
