import { useParams } from "react-router";
import useCompanyDetail from "../hooks/useCompanyDetail";

export default function CompanyDetail() {
  let { id: companyId } = useParams();

  if (!companyId) throw new Error("page not found");

  const company = useCompanyDetail(parseInt(companyId));

  return (
    <>
      <div className="page_title_section">
        <div className="page_header">
          <div className="container">
            <div className="row">
              {/* section_heading start */}
              <div className="col-lg-9 col-md-8 col-12 col-sm-7">
                <h1>company single</h1>
              </div>
              <div className="col-lg-3 col-md-4 col-12 col-sm-5">
                <div className="sub_title_section">
                  <ul className="sub_title">
                    <li>
                      {" "}
                      <a href="#0"> Home </a>&nbsp; / &nbsp;{" "}
                    </li>
                    <li>company single</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="webstrot_tech_detail jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="job_listing_left_fullwidth jb_cover">
                <div className="row">
                  <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="jp_job_post_side_img">
                      <img src={company?.avatar_url || "images/web.png"} alt="post_img" />
                    </div>
                    <div className="jp_job_post_right_cont web_text">
                      <h4>{company?.full_name || "--"}</h4>
                      <ul>
                        <li>
                          <i className="flaticon-location-pointer" />
                          &nbsp; {company?.country}
                        </li>
                        <li>
                            {company?.address}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="jb_listing_single_overview jb_cover">
                <div className="jp_job_des jb_cover">
                  <h2 className="job_description_heading">About</h2>
                  <p>
                    {company?.description || "--"}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1>overview information</h1>
                </div>
                <div className="job_overview_header jb_cover">
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                      <i className="fa fa-info-circle" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Phone:</li>
                        <li>{company?.phone_number}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>email:</li>
                        <li>
                        {company?.contact_mail}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                      <i className="fas fa-globe-asia" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>website:</li>
                        <li>
                          <a href="#0">{company?.website}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="header_btn search_btn news_btn overview_btn jb_cover">
                    <a href="#0">contact us</a>
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
