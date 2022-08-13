import JobList from "../components/JobList";

export default function Job() {
  return (
    <>
      {/* navi wrapper End */}
      {/* top header wrapper start */}
      <div className="page_title_section">
        <div className="page_header">
          <div className="container">
            <div className="row">
              {/* section_heading start */}
              <div className="col-lg-9 col-md-9 col-12 col-sm-8">
                <h1>job listing</h1>
              </div>
              <div className="col-lg-3 col-md-3 col-12 col-sm-4">
                <div className="sub_title_section">
                  <ul className="sub_title">
                    <li>
                      {" "}
                      <a href="#0"> Home </a>&nbsp; / &nbsp;{" "}
                    </li>
                    <li>job listing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top header wrapper end */}
      {/*job listing filter  wrapper start*/}
      <JobList/>
    </>
  );
}
