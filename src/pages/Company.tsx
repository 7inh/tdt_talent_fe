import CompanyList from "../components/CompanyList";

export default function Company(){
    return(
        <>
<>
  {/* top header wrapper start */}
  <div className="page_title_section">
    <div className="page_header">
      <div className="container">
        <div className="row">
          {/* section_heading start */}
          <div className="col-lg-9 col-md-9 col-12 col-sm-8">
            <h1>companies</h1>
          </div>
          <div className="col-lg-3 col-md-3 col-12 col-sm-4">
            <div className="sub_title_section">
              <ul className="sub_title">
                <li>
                  {" "}
                  <a href="#0"> Home </a>&nbsp; / &nbsp;{" "}
                </li>
                <li>companies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* top header wrapper end */}
</>

  {/*companies wrapper start */}
   <div className="companies_wrapper jb_cover">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="filter-area jb_cover">
            <select>
              <option>short by</option>
              <option>most recent </option>
              <option>most popular</option>
              <option>top rated</option>
            </select>
            <div className="showpro">
              <p>You're Watching 01 to 20</p>
            </div>
          </div>
        </div>


        <CompanyList />


      </div>
    </div>
  </div>
  {/* companies wrapper end */}
  {/* news app wrapper start*/}
  <div className="news_letter_wrapper jb_cover">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="job_newsletter_wrapper jb_cover">
            <div className="jb_newslwtteter_left">
              <h2> Looking For A Job</h2>
              <p>
                Your next level Product developemnt company assetsYour next
                level Product{" "}
              </p>
            </div>
            <div className="jb_newslwtteter_button">
              <div className="header_btn search_btn news_btn jb_cover">
                <a href="#0">submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* news app wrapper end*/}
</>

    )
}