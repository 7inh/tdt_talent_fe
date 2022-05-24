import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav> */}

      {/* preloader Start */}
      <div className="jb_preloader">
        <div className="spinner_wrap">
          <div className="spinner" />
        </div>
      </div>
      <div className="cursor" />
      {/* Top Scroll Start */}
      <a href="#0" id="return-to-top">
        <i className="fas fa-angle-double-up" />
      </a>
      {/* Top Scroll End */}
      {/* cp navi wrapper Start */}
      <nav className="cd-dropdown  d-block d-sm-block d-md-block d-lg-none d-xl-none">
        <h2>
          <a href="index.html">
            {" "}
            <span>
              <img src="images/logo.png" alt="img" />
            </span>
          </a>
        </h2>
        <a href="#0" className="cd-close">
          Close
        </a>
        <ul className="cd-dropdown-content">
          <li>
            <form className="cd-search">
              <input type="search" placeholder="Search..." />
            </form>
          </li>
          <li className="has-children">
            <a href="/">home</a>
            <ul className="cd-secondary-dropdown icon_menu is-hidden">
              <li className="go-back">
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="index.html">home I</a>
              </li>
              <li>
                <a href="index_II.html">home II</a>
              </li>
              <li>
                <a href="index_III.html">home III</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#0">jobs</a>
            <ul className="cd-secondary-dropdown icon_menu is-hidden">
              <li className="go-back">
                <a href="#0">Menu</a>
              </li>
              <li>
                <a href="job_listing_grid_left_filter.html">
                  job listing grid{" "}
                </a>
              </li>
              <li>
                <a href="job_listing_list_left_filter.html">job listing list</a>
              </li>
              <li>
                <a href="job_single.html">job single</a>
              </li>
            </ul>
          </li>
          {/* .has-children */}
          <li className="has-children">
            <a href="#0">pages</a>
            <ul className="cd-secondary-dropdown icon_menu is-hidden">
              <li className="go-back">
                <a href="#0">Menu</a>
              </li>
              <li>
                <a href="about_us.html">about us</a>
              </li>
              <li>
                <a href="companies.html">companies</a>
              </li>
              <li>
                <a href="company_single.html">company single</a>
              </li>
              <li>
                <a href="error_page.html">error page</a>
              </li>
              <li>
                <a href="login.html">login</a>
              </li>
              <li>
                <a href="pricing_table.html">pricing table</a>
              </li>
              <li>
                <a href="sign_up.html">sign up</a>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <a href="#0">dashboard</a>
            <ul className="cd-secondary-dropdown is-hidden">
              <li className="go-back">
                <a href="#0">Menu</a>
              </li>
              <li className="has-children">
                {" "}
                <a href="#0">candidate</a>
                <ul className="cd-secondary-dropdown is-hidden">
                  <li className="go-back">
                    <a href="#0">Menu</a>
                  </li>
                  <li>
                    <a href="../dashboard/candidate_applied_job.html">
                      applied job{" "}
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/candidate_dashboard.html">
                      dashboard
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/candidate_edit_profile.html">
                      {" "}
                      edit profile
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/candidate_favourite_job.html">
                      favourite job
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/candidate_resume.html"> resume</a>
                  </li>
                  <li>
                    <a href="../dashboard/message.html"> message</a>
                  </li>
                  <li>
                    <a href="../dashboard/pricing_plans.html">pricing plans</a>
                  </li>
                </ul>
                {/* .cd-secondary-dropdown */}
              </li>
              {/* .has-children */}
              <li className="has-children">
                {" "}
                <a href="#0">company</a>
                <ul className="cd-secondary-dropdown is-hidden">
                  <li className="go-back">
                    <a href="#0">Menu</a>
                  </li>
                  <li>
                    <a href="../dashboard/comp_applications.html">
                      {" "}
                      applications{" "}
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/comp_company_page.html">
                      company page
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/comp_employer_dashboard.html">
                      {" "}
                      dashboard
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/comp_employer_edit_profile.html">
                      edit profile
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/comp_employer_manage_jobs.html">
                      {" "}
                      manage jobs
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/comp_post_new_job.html">
                      {" "}
                      post new job
                    </a>
                  </li>
                  <li>
                    <a href="../dashboard/message.html">message</a>
                  </li>
                  <li>
                    <a href="../dashboard/pricing_plans.html">pricing plans</a>
                  </li>
                </ul>
                {/* .cd-secondary-dropdown */}
              </li>
            </ul>
            {/* .cd-secondary-dropdown */}
          </li>
          <li className="has-children">
            <a href="#0">blog</a>
            <ul className="cd-secondary-dropdown icon_menu is-hidden">
              <li className="go-back">
                <a href="#0">Menu</a>
              </li>
              <li>
                <a href="blog_single.html">blog single</a>
              </li>
              <li>
                <a href="blog_category_right_sidebar.html">blog category</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="contact_us.html">contact us </a>
          </li>
          <li>
            <a href="login.html">login</a>
          </li>
        </ul>
        {/* .cd-dropdown-content */}
      </nav>
      <div className="cp_navi_main_wrapper jb_cover">
        <div className="container-fluid">
          <div className="cp_logo_wrapper">
            <a href="index.html">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          {/* mobile menu area start */}
          <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="cd-dropdown-wrapper">
                    <a className="house_toggle" href="#0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 31.177 31.177"
                        xmlSpace="preserve"
                        width="25px"
                        height="25px"
                      >
                        <g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                              fill="#004165"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                              fill="#004165"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                              fill="#004165"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                              fill="#004165"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                              fill="#004165"
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                    {/* .cd-dropdown */}
                  </div>
                </div>
              </div>
            </div>
            {/* .cd-dropdown-wrapper */}
          </header>
          <div className="menu_btn_box header_btn jb_cover">
            <ul>
              <li>
                <a href="sign_up.html">
                  <i className="flaticon-man-user" /> sign up
                </a>
              </li>
              <li>
                <a href="login.html">
                  {" "}
                  <i className="flaticon-login" /> login
                </a>
              </li>
            </ul>
          </div>
          <div className="jb_navigation_wrapper">
            <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
              <ul className="main_nav_ul">
                <li className="has-mega gc_main_navigation">
                  <a href="/" className="gc_main_navigation active_class">
                    home
                  </a>
                </li>
                <li className="has-mega gc_main_navigation">
                  <a href="#0" className="gc_main_navigation">
                    jobs
                  </a>
                  <ul className="navi_2_dropdown">
                    <li className="parent">
                      <a href="job_listing_grid_left_filter.html">
                        {" "}
                        <i className="fas fa-square" />
                        job listing grid{" "}
                      </a>
                    </li>
                    <li className="parent">
                      <a href="job_listing_list_left_filter.html">
                        {" "}
                        <i className="fas fa-square" />
                        job listing list{" "}
                      </a>
                    </li>
                    <li className="parent">
                      <a href="job_single.html">
                        {" "}
                        <i className="fas fa-square" />
                        job single
                      </a>
                    </li>
                    <li className="parent">
                      <a href="#0">
                        <i className="fas fa-square" />
                        jobs
                        <span>
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                      <ul className="dropdown-menu-right">
                        <li>
                          <a href="job_listing_grid_left_filter.html">
                            {" "}
                            <i className="fas fa-square" />
                            job listing grid{" "}
                          </a>
                        </li>
                        <li>
                          <a href="job_listing_list_left_filter.html">
                            {" "}
                            <i className="fas fa-square" />
                            job listing list{" "}
                          </a>
                        </li>
                        <li>
                          <a href="job_single.html">
                            {" "}
                            <i className="fas fa-square" />
                            job single
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-mega gc_main_navigation kv_sub_menu">
                  <a href="#0" className="gc_main_navigation">
                    {" "}
                    candidates
                  </a>
                  {/* mega menu start */}
                  <ul className="kv_mega_menu">
                    <li className="kv_mega_menu_width">
                      <div className="container">
                        <div className="jn_menu_partion_div">
                          <div className="candidate_width">
                            <div className="jen_tabs_conent_list jb_cover">
                              <h1>job skills</h1>
                              <ul>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    HTML5 &amp; CSS3
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    wordpress
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    javascript
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    photoshop
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    designer
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    construction
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="candidate_width">
                            <div className="jen_tabs_conent_list jb_cover">
                              <h1>categories</h1>
                              <ul>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    graphic design
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    engineering jobs
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    mainframe jobs
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    PSU jobs
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    goverment jobs
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    IT company
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="candidate_width">
                            <div className="jen_tabs_conent_list   jb_cover">
                              <h1>job location</h1>
                              <ul>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    india
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    united state
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    japan
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    dubai
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    south africa
                                  </a>
                                </li>
                                <li>
                                  <a href="#0">
                                    <i className="fas fa-square" />
                                    china
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="candidate_width">
                            <div className="jen_tabs_conent_list   jb_cover">
                              <h1>open jobs</h1>
                              <div className="open_jobs_wrapper">
                                <div className="open_jobs_wrapper_1 jb_cover">
                                  <img src="images/job1.jpg" alt="img" />
                                  <div className="open_job_text">
                                    <h3>
                                      <a href="#0">
                                        Some designers inelevated the..
                                      </a>
                                    </h3>
                                    <p>5 hour ago</p>
                                  </div>
                                </div>
                                <div className="open_jobs_wrapper_1 jb_cover">
                                  <img src="images/job1.jpg" alt="img" />
                                  <div className="open_job_text">
                                    <h3>
                                      <a href="#0">
                                        Some designers inelevated the..
                                      </a>
                                    </h3>
                                    <p>12 hour ago</p>
                                  </div>
                                </div>
                                <div className="view_all_job jb_cover">
                                  <a href="#0">view all jobs</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="has-mega gc_main_navigation">
                  <a href="#0" className="gc_main_navigation">
                    pages
                  </a>
                  <ul className="navi_2_dropdown">
                    <li className="parent">
                      <a href="about_us.html">
                        {" "}
                        <i className="fas fa-square" />
                        about us
                      </a>
                    </li>
                    <li className="parent">
                      <a href="companies.html">
                        {" "}
                        <i className="fas fa-square" />
                        companies
                      </a>
                    </li>
                    <li className="parent">
                      <a href="company_single.html">
                        {" "}
                        <i className="fas fa-square" />
                        company single
                      </a>
                    </li>
                    <li className="parent">
                      <a href="error_page.html">
                        <i className="fas fa-square" />
                        error page
                      </a>
                    </li>
                    <li className="parent">
                      <a href="login.html">
                        <i className="fas fa-square" />
                        login
                      </a>
                    </li>
                    <li className="parent">
                      <a href="pricing_table.html">
                        <i className="fas fa-square" />
                        pricing table
                      </a>
                    </li>
                    <li className="parent">
                      <a href="sign_up.html">
                        <i className="fas fa-square" />
                        sign_up
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-mega gc_main_navigation">
                  <a href="#0" className="gc_main_navigation">
                    dashboard
                  </a>
                  <ul className="navi_2_dropdown">
                    <li className="parent">
                      <a href="#0">
                        <i className="fas fa-square" />
                        candidate
                        <span>
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                      <ul className="dropdown-menu-right">
                        <li>
                          <a href="../dashboard/candidate_applied_job.html">
                            {" "}
                            <i className="fas fa-square" />
                            applied job{" "}
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/candidate_dashboard.html">
                            {" "}
                            <i className="fas fa-square" /> dashboard
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/candidate_edit_profile.html">
                            {" "}
                            <i className="fas fa-square" />
                            edit profile
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/candidate_favourite_job.html">
                            {" "}
                            <i className="fas fa-square" />
                            favourite job
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/candidate_resume.html">
                            {" "}
                            <i className="fas fa-square" />
                            resume
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/message.html">
                            {" "}
                            <i className="fas fa-square" />
                            message
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/pricing_plans.html">
                            {" "}
                            <i className="fas fa-square" />
                            pricing plans
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="parent">
                      <a href="#0">
                        <i className="fas fa-square" />
                        company
                        <span>
                          <i className="fas fa-chevron-right" />
                        </span>
                      </a>
                      <ul className="dropdown-menu-right">
                        <li>
                          <a href="../dashboard/comp_applications.html">
                            {" "}
                            <i className="fas fa-square" />
                            applications{" "}
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/comp_company_page.html">
                            {" "}
                            <i className="fas fa-square" /> company page
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/comp_employer_dashboard.html">
                            {" "}
                            <i className="fas fa-square" />
                            dashboard
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/comp_employer_edit_profile.html">
                            {" "}
                            <i className="fas fa-square" />
                            edit profile
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/comp_employer_manage_jobs.html">
                            {" "}
                            <i className="fas fa-square" />
                            manage jobs
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/comp_post_new_job.html">
                            {" "}
                            <i className="fas fa-square" />
                            post new job
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/message.html">
                            {" "}
                            <i className="fas fa-square" />
                            message
                          </a>
                        </li>
                        <li>
                          <a href="../dashboard/pricing_plans.html">
                            {" "}
                            <i className="fas fa-square" />
                            pricing plans
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="has-mega gc_main_navigation">
                  <a href="#0" className="gc_main_navigation">
                    blog
                  </a>
                  <ul className="navi_2_dropdown">
                    <li className="parent">
                      <a href="blog_single.html">
                        {" "}
                        <i className="fas fa-square" />
                        blog single
                      </a>
                    </li>
                    <li className="parent">
                      <a href="blog_category_right_sidebar.html">
                        {" "}
                        <i className="fas fa-square" />
                        blog category
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact_us.html" className="gc_main_navigation">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* mainmenu end */}
            <div className="jb_search_btn_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
              {/* extra nav */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <button
                    id="quik-search-btn"
                    type="button"
                    className="site-button radius-xl"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
              {/* Quik search */}
              <div className="dez-quik-search bg-primary-dark">
                <form action="#">
                  <input
                    name="search"
                    defaultValue=""
                    type="text"
                    className="form-control"
                    placeholder="Type to search..."
                  />
                  <span id="quik-search-remove">
                    <i className="fas fa-times" />
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Outlet />


      {/* blog wrapper end*/}
      {/* footer Wrapper Start */}
      <div className="footer jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover">
                <a href="#0">
                  <img src="images/logo2.png" alt="img" />
                </a>
                <ul className="footer_first_contact">
                  <li>
                    <i className="flaticon-location-pointer" />
                    <p>
                      123 City Avenue, Floor 10,
                      <br /> malbourne, Australia.
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-telephone" />
                    <p>
                      1 -234 -456 -7890
                      <br /> 1 -234 -456 -7890
                    </p>
                  </li>
                  <li>
                    <i className="flaticon-envelope" />
                    <a href="#0">info@Jbdesks.com </a>
                    <br />
                    <a href="#0">support@Jbdesks.com</a>
                  </li>
                </ul>
                <ul className="icon_list_news jb_cover">
                  <li>
                    <a href="#0">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover footer_border_displ">
                <h5>features</h5>
                <ul className="nav-widget">
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" />
                      Job Management &amp; Billing
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" />
                      Time &amp; Materials Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" />
                      Standards Compliance
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" />
                      Real Time GPS Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" />
                      Client Portal
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" /> Powerful Workflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover footer_border_displ">
                <h5>browse</h5>
                <ul className="nav-widget">
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" />
                      Freelancers by Category
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" /> Freelancers in USA{" "}
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" /> Freelancers in UK
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" /> Freelancers in Canada
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" /> Freelancers in india
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa fa-square" /> find jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footerNav jb_cover footer_border_displ">
                <h5>app &amp; integration</h5>
                <ul className="nav-widget">
                  <li>
                    <a href="#0">
                      <img src="images/ft1.png" alt="img" />
                      Xero
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="images/ft2.png" alt="img" />
                      Reckon
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="images/ft3.png" alt="img" />
                      Flexidocs
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="images/ft4.png" alt="img" />
                      Microsoft Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="images/ft5.png" alt="img" /> Mailchimp
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <img src="images/ft6.png" alt="img" /> MYOB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright_left">
              <i className="fa fa-copyright" /> 2019 <a href="#0"> JB desks.</a>{" "}
              All Rights Reserved.
            </div>
            <div className="clearfix" />
          </div>
          {/*/.row*/}
        </div>
        {/*/.container*/}
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop gradient-color">
            <div className="wave waveTop" />
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div className="wave waveMiddle" />
          </div>
          <div className="waveWrapperInner bgBottom">
            <div className="wave waveBottom" />
          </div>
        </div>
      </div>
      {/* footer Wrapper End */}
      {/* chat box Wrapper start */}
      <div id="chat-circle" className="btn btn-raised">
        <i className="fas fa-comment-alt" />
      </div>
      <div className="chat-box">
        <div className="chat-box-header">
          ChatBot
          <span className="chat-box-toggle">
            <i className="fas fa-times" />
          </span>
        </div>
        <div className="chat-box-body">
          <div className="chat-box-overlay"></div>
          <div className="chat-logs"></div>
          {/*chat-log */}
        </div>
        <div className="chat-input">
          <form>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
            />
            <button type="submit" className="chat-submit" id="chat-submit">
              <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>
      </div>

    </div>
  );
}
