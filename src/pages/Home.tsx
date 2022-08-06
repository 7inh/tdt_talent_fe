export default function Home() {
  return (
    <div>
      {/* navi wrapper End */}
      {/* job banner wrapper start*/}
      <div className="jb_banner_wrapper jb_cover">
        <div className="jb_banner_left">
          <h1>The Easy Way To Get Your New Job</h1>
          <p>
          A platform for businesses and students of the Faculty of Information Technology to exchange and cooperate
          </p>
          <div className="contect_form3">
            <input
              type="text"
              name="name"
              placeholder="Keyword e.g. (Job Title, Description, Tags)"
            />
          </div>
          <div className="select_box">
            <i className="flaticon-map" />
            <select className="react-select">
              <option>select location</option>
              <option>california</option>
              <option>los velas</option>
              <option>noida</option>
              <option>chicago</option>
            </select>
          </div>
          <div className="select_box select_box_2">
            <i className="flaticon-squares-gallery-grid-layout-interface-symbol" />
            <select className="react-select">
              <option>category</option>
              <option>real estate</option>
              <option>electronics</option>
              <option>marketing</option>
              <option>education</option>
            </select>
          </div>
          <div className="select_box">
            <i className="flaticon-statistics" />
            <select className="react-select">
              <option>experience</option>
              <option>5 years</option>
              <option>3 years</option>
              <option>2 years</option>
              <option>fresher</option>
            </select>
          </div>
          <div className="header_btn search_btn jb_cover">
            <a href="#0">
              <i className="fas fa-search" /> search
            </a>
          </div>
          <div className="jb_btm_keyword jb_cover">
            <ul>
              <li>
                <i className="flaticon-tag" /> Trending Keywords :
              </li>
              <li>
                <a href="#0">ui designer,</a>
              </li>
              <li>
                <a href="#0">developer,</a>
              </li>
              <li>
                <a href="#0">senior</a>
              </li>
              <li>
                <a href="#0">it company,</a>
              </li>
              <li>
                <a href="#0">design,</a>
              </li>
              <li>
                <a href="#0">call center</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="jb_banner_right d-none d-sm-none d-md-none d-lg-none d-xl-block"></div>
      </div>
      {/* job banner wrapper end*/}
      {/* job list wrapper start*/}
      <div className="jb_banner_list jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12">
              <div className="jb_top_jobs_category jb_cover">
                <h3>
                  <a href="#0">laravel</a>
                </h3>
                <img src="images/jb1.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12">
              <div className="jb_top_jobs_category jb_cover">
                <h3>
                  <a href="#0">Wordpress</a>
                </h3>
                <img src="images/jb2.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12">
              <div className="jb_top_jobs_category jb_cover">
                <h3>
                  <a href="#0">AngularJS</a>
                </h3>
                <img src="images/jb3.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12">
              <div className="jb_top_jobs_category jb_cover">
                <h3>
                  <a href="#0">node js</a>
                </h3>
                <img src="images/jb4.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12">
              <div className="jb_top_jobs_category jb_cover">
                <h3>
                  <a href="#0">1onic</a>
                </h3>
                <img src="images/jb5.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12">
              <div className="jb_top_jobs_category">
                <h3>
                  <a href="#0">node js</a>
                </h3>
                <img src="images/jb4.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job list wrapper end*/}
      {/* job category wrapper start*/}
      <div className="jb_category_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
              <div className="jb_heading_wraper">
                <h3>Browse Jobs By Category</h3>
                <p>Your next level Product developemnt company assets</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="jb_browse_category jb_cover">
                <a href="job_listing_list_left_filter.html">
                  <div className="hover-block" />
                  <i className="flaticon-code" />
                  <h3>developer</h3>
                  <p>(1450 jobs)</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="jb_browse_category jb_cover">
                <a href="job_listing_list_left_filter.html">
                  <div className="hover-block" />
                  <i className="flaticon-laptop" />
                  <h3>technology</h3>
                  <p>(4525 jobs)</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="jb_browse_category jb_cover">
                <a href="job_listing_list_left_filter.html">
                  <div className="hover-block" />
                  <i className="flaticon-bar-chart" />
                  <h3>accounting</h3>
                  <p>(214 jobs)</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="jb_browse_category jb_cover">
                <a href="job_listing_list_left_filter.html">
                  <div className="hover-block" />
                  <i className="flaticon-doctor" />
                  <h3>medical</h3>
                  <p>(4572 jobs)</p>
                </a>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 pd5">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="jb_browse_category jb_cover">
                    <a href="job_listing_list_left_filter.html">
                      <div className="hover-block" />
                      <i className="flaticon-city-hall" />
                      <h3>goverment</h3>
                      <p>(2414 jobs)</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="jb_browse_category jb_cover">
                    <a href="job_listing_list_left_filter.html">
                      <div className="hover-block" />
                      <i className="flaticon-newspaper" />
                      <h3>media &amp; news</h3>
                      <p>(2142 jobs)</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="jb_browse_category jb_cover">
                    <a href="job_listing_list_left_filter.html">
                      <div className="hover-block" />
                      <i className="flaticon-lunch" />
                      <h3>restaurents</h3>
                      <p>(2342 jobs)</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="header_btn search_btn load_btn jb_cover">
              <a href="#0">load more</a>
            </div>
          </div>
        </div>
      </div>
      {/* job category wrapper end*/}

      {/* job rivew wrapper start*/}
      <div className="job_rivew_wrapper jb_cover">
        <div className="job_rivew_img">
          <img src="images/mockup3.png" alt="img" />
        </div>
        <div className="job_rivew_testimonial">
          <div className="jb_heading_wraper left_rivew_heading">
            <h3>our job rivew</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt{" "}
            </p>
          </div>
          <div className="rivew_testimonial_slider jb_cover">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="jb_saying_content_wrapper jb_cover">
                  <div className="saying_img">
                    <img src="images/testi.png" alt="img" />
                  </div>
                  <div className="rating_star">
                    <i className="flaticon-star-1" />
                    <i className="flaticon-star-1" />
                    <i className="flaticon-star-1" />
                    <i className="flaticon-star" />
                    <i className="flaticon-star" />
                  </div>
                  <p>
                    “ I don't always clap, but when I do, it'sbecause of Sella.
                    We can't understandhow we've been Sella. ”
                  </p>
                  <div className="jb_saying_img_name">
                    <h1>
                      <a href="#0">Marita Irene</a>
                    </h1>
                    <p>Support Manager @ Echo</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="jb_saying_content_wrapper jb_cover">
                  <div className="saying_img">
                    <img src="images/testi1.png" alt="img" />
                  </div>
                  <div className="rating_star">
                    <i className="flaticon-star-1" />
                    <i className="flaticon-star-1" />
                    <i className="flaticon-star-1" />
                    <i className="flaticon-star" />
                    <i className="flaticon-star" />
                  </div>
                  <p>
                    “ I don't always clap, but when I do, it'sbecause of Sella.
                    We can't understandhow we've been Sella. ”
                  </p>
                  <div className="jb_saying_img_name">
                    <h1>
                      <a href="#0">Marita Irene</a>
                    </h1>
                    <p>Support Manager @ Echo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* job rivew wrapper end*/}

    </div>
  );
}
