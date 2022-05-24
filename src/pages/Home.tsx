export default function Home() {
  return (
    <div>
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
            <a href="#0">home</a>
            <ul className="cd-secondary-dropdown icon_menu is-hidden">
              <li className="go-back">
                <a href="#0">Menu</a>
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
                  <a href="#0" className="gc_main_navigation active_class">
                    home
                  </a>
                  <ul className="navi_2_dropdown">
                    <li className="parent">
                      <a href="index.html">
                        <i className="fas fa-square" />
                        home I{" "}
                      </a>
                    </li>
                    <li className="parent">
                      <a href="index_II.html">
                        <i className="fas fa-square" />
                        home II
                      </a>
                    </li>
                    <li className="parent">
                      <a href="index_III.html">
                        <i className="fas fa-square" /> home III
                      </a>
                    </li>
                  </ul>
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
      {/* navi wrapper End */}
      {/* job banner wrapper start*/}
      <div className="jb_banner_wrapper jb_cover">
        <div className="jb_banner_left">
          <h1>The Easy Way To Get Your New Job</h1>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor . sollicitudin, lorem quis bibendum auctor, sem nibh id
            elit.{" "}
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
            <select>
              <option>select location</option>
              <option>california</option>
              <option>los velas</option>
              <option>noida</option>
              <option>chicago</option>
            </select>
          </div>
          <div className="select_box select_box_2">
            <i className="flaticon-squares-gallery-grid-layout-interface-symbol" />
            <select>
              <option>category</option>
              <option>real estate</option>
              <option>electronics</option>
              <option>marketing</option>
              <option>education</option>
            </select>
          </div>
          <div className="select_box">
            <i className="flaticon-statistics" />
            <select>
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
      {/* grow next Wrapper Start */}
      <div className="grow_next_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12 col-sm-12">
              <div className="jb_heading_wraper left_jb_jeading">
                <h3>Grow next level business</h3>
                <p>#1 MOST trusted digital marketplace company</p>
              </div>
              <div className="grow_next_text jb_cover">
                <p>
                  What do all consultants need? In short, trust. This is
                  achieved with professional presentation and the ability to
                  communicate clearly with and potential clients. Whether you
                  are an accountant.
                  <br />
                  <br /> Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit, sed do eiusd tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <div className="header_btn search_btn jb_cover">
                  <a href="#0">discover more</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12 col-sm-12">
              <div className="grow_next_img jb_cover">
                <img
                  src="images/gnxt.jpg"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* grow next Wrapper end */}
      {/* latest job wrapper start*/}
      <div className="latest_job_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="job_main_overflow jb_cover">
              <div className="latest_job_overlow jb_cover">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="latest_job_toper jb_cover">
                    <h1>latest jobs</h1>
                    <div className="latest_job_tabs">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link active"
                            data-toggle="tab"
                            href="#home"
                          >
                            {" "}
                            all
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link "
                            data-toggle="tab"
                            href="#menu1"
                          >
                            featured
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu2"
                          >
                            {" "}
                            remotely
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu3"
                          >
                            {" "}
                            part time
                          </a>
                        </li>
                        <li className="nav-item">
                          {" "}
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#menu4"
                          >
                            {" "}
                            full time
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="tab-content">
                    <div id="home" className="tab-pane active">
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal"
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
                                            id="input-file-now-custom-1"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal1"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal1"
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
                                            id="input-file-now-custom-2"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt3.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal2"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal2"
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
                                            id="input-file-now-custom-3"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt4.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal3"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal3"
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
                                            id="input-file-now-custom-4"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal4"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal4"
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
                                            id="input-file-now-custom-5"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal5"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal5"
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
                                            id="input-file-now-custom-6"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <p className="showing">Showing 1-5 of 23 Latest Jobs</p>
                      <span className="se_all_job">
                        <a href="#0">
                          See All Jobs{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </span>
                    </div>
                    <div id="menu1" className="tab-pane fade">
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt4.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModa7"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal7"
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
                                            id="input-file-now-custom-7"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt3.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal8"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal8"
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
                                            id="input-file-now-custom-8"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal9"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal9"
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
                                            id="input-file-now-custom-9"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal0"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal0"
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
                                            id="input-file-now-custom-0"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal11"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal11"
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
                                            id="input-file-now-custom-12"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt3.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal15"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal15"
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
                                            id="input-file-now-custom-22"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <p className="showing">Showing 1-5 of 23 Latest Jobs</p>
                      <span className="se_all_job">
                        <a href="#0">
                          See All Jobs{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </span>
                    </div>
                    <div id="menu2" className="tab-pane fade">
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal01"
                            >
                              apply
                            </a>
                          </div>
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
                                            id="input-file-now-custom-23"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal02"
                            >
                              apply
                            </a>
                          </div>
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
                                            id="input-file-now-custom-24"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt3.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal21"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal21"
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
                                            id="input-file-now-custom-25"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt4.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal31"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal31"
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
                                            id="input-file-now-custom-26"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal41"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal41"
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
                                            id="input-file-now-custom-27"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal51"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal51"
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
                                            id="input-file-now-custom-28"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <p className="showing">Showing 1-5 of 23 Latest Jobs</p>
                      <span className="se_all_job">
                        <a href="#0">
                          See All Jobs{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </span>
                    </div>
                    <div id="menu3" className="tab-pane fade">
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal00"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal00"
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
                                            id="input-file-now-custom-29"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt3.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal1500"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal500"
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
                                            id="input-file-now-custom-20"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt4.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal201"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal201"
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
                                            id="input-file-now-custom-211"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal302"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal302"
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
                                            id="input-file-now-custom-222"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal401"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal401"
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
                                            id="input-file-now-custom-233"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModal501"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModal501"
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
                                            id="input-file-now-custom-255"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <p className="showing">Showing 1-5 of 23 Latest Jobs</p>
                      <span className="se_all_job">
                        <a href="#0">
                          See All Jobs{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </span>
                    </div>
                    <div id="menu4" className="tab-pane fade">
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModalt"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModalt"
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
                                            id="input-file-now-custom-266"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModalt1"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModalt1"
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
                                            id="input-file-now-custom-277"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt3.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModalt2"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModalt2"
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
                                            id="input-file-now-custom-288"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt4.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModalt3"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModalt3"
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
                                            id="input-file-now-custom-299"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt1.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModalt4"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModalt4"
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
                                            id="input-file-now-custom-200"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <div className="latest_job_box jb_cover">
                        <div className="job_list">
                          <a href="#0">
                            <img src="images/lt2.png" alt="img" />
                            <h6>Trainee Web Designer, (Fresher)</h6>
                          </a>
                        </div>
                        <div className="job_list_next">
                          <p>google</p>
                        </div>
                        <div className="job_list_next">
                          <p>Remotely</p>
                        </div>
                        <div className="job_list_next">
                          <p>new york</p>
                        </div>
                        <div className="job_list_next">
                          <p>$9,000</p>
                        </div>
                        <div className="job_list_next">
                          <div className="header_btn search_btn apply_btn jb_cover">
                            <a
                              href="#0"
                              data-toggle="modal"
                              data-target="#myModalt5"
                            >
                              apply
                            </a>
                          </div>
                        </div>
                        <div
                          className="modal fade apply_job_popup"
                          id="myModalt5"
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
                                            id="input-file-now-custom-082"
                                            className="dropify"
                                            data-height={90}
                                          />
                                          <span className="post_photo">
                                            upload resume
                                          </span>
                                        </div>
                                        <p className="word_file">
                                          {" "}
                                          microsoft word or pdf file only (5mb)
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
                      <p className="showing">Showing 1-5 of 23 Latest Jobs</p>
                      <span className="se_all_job">
                        <a href="#0">
                          See All Jobs{" "}
                          <i className="fas fa-long-arrow-alt-right" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* latest job wrapper end*/}
      {/* counter wrapper start*/}
      <div className="counter_wrapper jb_cover">
        <div className="counter_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="counter_mockup_design jb_cover">
                <div className="animation-circle-inverse">
                  <i />
                  <i />
                  <i />
                </div>
                <img
                  src="images/mockup2.png"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="counter_right_wrapper jb_cover">
                <h1>Some Statistical Facts</h1>
                <div className="counter_width">
                  <div className="counter_cntnt_box">
                    <div className="count-description">
                      <span className="timer">2500</span>
                      <p className="con2">happy customers </p>
                    </div>
                  </div>
                </div>
                <div className="counter_width">
                  <div className="counter_cntnt_box">
                    <div className="count-description">
                      {" "}
                      <span className="timer">9425</span>
                      <p className="con2">ticket solved</p>
                    </div>
                  </div>
                </div>
                <div className="counter_width">
                  <div className="counter_cntnt_box">
                    <div className="count-description">
                      {" "}
                      <span className="timer">9</span>
                      <span>+</span>
                      <p className="con2">average rating</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter wrapper end*/}
      {/* company Wrapper start */}
      <div className="top_company_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="top_hiring_cpmpany_heading jb_cover">
                <div className="jb_heading_wraper left_jb_jeading">
                  <h3>Top Hiring Companies</h3>
                </div>
                <p>
                  What do all consultants need? In short, trust. This is
                  achieved with professional presentation and the ability to
                  communicate. Clearly with existing and potential clients.ll
                  consultants need? In short, trust. This is achieved with
                  Whether you Whether you are an accountant.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="top_company_slider_wrapper jb_cover">
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="company_main_wrapper">
                          <div className="company_img_wrapper">
                            <img src="images/cmp1.png" alt="team_img1" />
                            <div className="btc_team_social_wrapper">
                              <h1>(usa)</h1>
                            </div>
                          </div>
                          <div className="opening_job">
                            <h1>
                              <a href="#0">04 job open</a>
                            </h1>
                          </div>
                          <div className="company_img_cont_wrapper">
                            <h4>Akshay INC.</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="company_main_wrapper">
                          <div className="company_img_wrapper">
                            <img src="images/cmp2.png" alt="team_img1" />
                            <div className="btc_team_social_wrapper">
                              <h1>(usa)</h1>
                            </div>
                          </div>
                          <div className="opening_job">
                            <h1>
                              <a href="#0">25 job open</a>
                            </h1>
                          </div>
                          <div className="company_img_cont_wrapper">
                            <h4>burger patty</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="company_main_wrapper">
                          <div className="company_img_wrapper">
                            <img src="images/cmp3.png" alt="team_img1" />
                            <div className="btc_team_social_wrapper">
                              <h1>(usa)</h1>
                            </div>
                          </div>
                          <div className="opening_job">
                            <h1>
                              <a href="#0">04 job open</a>
                            </h1>
                          </div>
                          <div className="company_img_cont_wrapper">
                            <h4>Akshay INC.</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="company_main_wrapper">
                          <div className="company_img_wrapper">
                            <img src="images/cmp4.png" alt="team_img1" />
                            <div className="btc_team_social_wrapper">
                              <h1>(usa)</h1>
                            </div>
                          </div>
                          <div className="opening_job">
                            <h1>
                              <a href="#0">25 job open</a>
                            </h1>
                          </div>
                          <div className="company_img_cont_wrapper">
                            <h4>burger patty</h4>
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
      {/* top company Wrapper End */}
      {/* pricing plan wrapper start*/}
      <div className="pricing_plan_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
              <div className="jb_heading_wraper">
                <h3>choose pricing plan</h3>
                <p>Your next level Product developemnt company assets</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="pricing_box_wrapper jb_cover">
                <h1>basic plan</h1>
                <div className="main_pdet jb_cover">
                  <h2>
                    <span className="dollarr"> $ </span> 29{" "}
                  </h2>{" "}
                  <span className="monthly"> / per month</span>
                </div>
                <ul className="pricing_list22">
                  <li>5 Jobs Posting</li>
                  <li>2 Featured jobs</li>
                  <li>1 Renew Jobs</li>
                  <li>10 Days Duration</li>
                  <li>Email Alert</li>
                </ul>
                <a href="#0" className="price_btn">
                  select plan
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="pricing_box_wrapper jb_cover">
                <h1>premium plan</h1>
                <div className="main_pdet jb_cover">
                  <h2>
                    <span className="dollarr"> $ </span> 49{" "}
                  </h2>
                  <span className="monthly"> / per month</span>
                </div>
                <ul className="pricing_list22">
                  <li>5 Jobs Posting</li>
                  <li>2 Featured jobs</li>
                  <li>1 Renew Jobs</li>
                  <li>10 Days Duration</li>
                  <li>Email Alert</li>
                </ul>
                <a href="#0" className="price_btn">
                  select plan
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="pricing_box_wrapper jb_cover">
                <h1>advanced plan</h1>
                <div className="main_pdet jb_cover">
                  <h2>
                    <span className="dollarr"> $ </span> 69{" "}
                  </h2>{" "}
                  <span className="monthly"> / per month</span>
                </div>
                <ul className="pricing_list22">
                  <li>5 Jobs Posting</li>
                  <li>2 Featured jobs</li>
                  <li>1 Renew Jobs</li>
                  <li>10 Days Duration</li>
                  <li>Email Alert</li>
                </ul>
                <a href="#0" className="price_btn">
                  select plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing plan wrapper end*/}
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
      {/* download app wrapper start*/}
      <div className="download_wrapper jb_cover">
        <div className="counter_overlay" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="download_mockup_design jb_cover">
                <div className="animation-circle-inverse2">
                  <i />
                  <i />
                  <i />
                </div>
                <img
                  src="images/mockup5.png"
                  className="img-responsive"
                  alt="img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="download_app_store jb_cover">
                <h1>Download</h1>
                <h2>Job Portal App Now!</h2>
                <p>
                  All it takes is 30 seconds to Download. Your Mobile App for
                  Job
                  <br /> Fast, Simple &amp; Delightful.
                </p>
                <div className="app_btn jb_cover">
                  <a href="#0" className="ss_playstore">
                    <span>
                      <i className="flaticon-android-logo" />
                    </span>{" "}
                    Play Store
                  </a>
                  <a href="#0" className="ss_appstore">
                    <span>
                      <i className="flaticon-apple" />
                    </span>{" "}
                    App Store
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* download app wrapper end*/}
      {/* blog wrapper start*/}
      <div className="blog_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
              <div className="jb_heading_wraper">
                <h3>from our blog</h3>
                <p>Your next level Product developemnt company assets</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="blog_newsleeter jb_cover">
                <h1>Request Call Back</h1>
                <p>
                  What do all consultants need? In short trust This is achieved
                  with professional and the ability to communicate. and the
                  ability to communicate.
                </p>
                <div className="contect_form3 blog_letter">
                  <input
                    type="text"
                    name="name"
                    placeholder="how can we help ?"
                  />
                </div>
                <div className="contect_form3 blog_letter">
                  <input type="text" name="name" placeholder="your name" />
                </div>
                <div className="contect_form3 blog_letter">
                  <input type="email" name="name" placeholder="your email" />
                </div>
                <div className="header_btn search_btn submit_btn jb_cover">
                  <a href="#0">submit</a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="our_blog_content jb_cover">
                    <div className="jb_cover">
                      <img
                        src="images/blog1.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </div>
                    <div className="blog_content jb_cover">
                      <p>FEb 19, 2019</p>
                      <h4>
                        {" "}
                        <a href="#0">
                          Want to Be an Ace Designer? Try Travelling the World
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="our_blog_content jb_cover">
                    <div className="jb_cover">
                      <img
                        src="images/blog2.jpg"
                        className="img-responsive"
                        alt="img"
                      />
                    </div>
                    <div className="blog_content jb_cover">
                      <p>jan 19, 2019</p>
                      <h4>
                        {" "}
                        <a href="#0">
                          Hey Seeker, It’s Time to Try Travelling the World
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div id="accordion" role="tablist">
                    <h1>Frequently Asked Question?</h1>
                    <div className="card">
                      <div className="card_pagee" role="tab" id="heading1">
                        <h5 className="h5-md">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Is there any auto-renew subscription?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="heading1"
                        data-parent="#accordion"
                        style={{}}
                      >
                        <div className="card-body">
                          <div className="card_cntnt">
                            <p>
                              This is Photoshop's version of LoremProin gravida
                              nibh vel velit auctor Ipsum. Proin gravida nibh
                              vel velit auctor aliquet....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card_pagee" role="tab" id="heading2">
                        <h5 className="h5-md">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapsethree"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapsethree"
                          >
                            How many sites can I use my themes on?
                          </a>
                        </h5>
                      </div>
                      <div
                        id="collapsethree"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="heading2"
                        data-parent="#accordion"
                        style={{}}
                      >
                        <div className="card-body">
                          <div className="card_cntnt">
                            <p>
                              This is Photoshop's version of LoremProin gravida
                              nibh vel velit auctor Ipsum. Proin gravida nibh
                              vel velit auctor aliquet....
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
