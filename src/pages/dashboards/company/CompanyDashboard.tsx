import useProfile from "../../../hooks/useProfile";

export default function CompanyDashboard() {
  const profile = useProfile();
  console.log("profile", profile);

  return (
    <>
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
                <a href="../main_pages/index.html">home I</a>
              </li>
              <li>
                <a href="../main_pages/index_II.html">home II</a>
              </li>
              <li>
                <a href="../main_pages/index_III.html">home III</a>
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
                <a href="../main_pages/job_listing_grid_left_filter.html">
                  job listing grid{" "}
                </a>
              </li>
              <li>
                <a href="../main_pages/job_listing_list_left_filter.html">
                  job listing list
                </a>
              </li>
              <li>
                <a href="../main_pages/job_single.html">job single</a>
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
                <a href="../main_pages/about_us.html">about us</a>
              </li>
              <li>
                <a href="../main_pages/companies.html">companies</a>
              </li>
              <li>
                <a href="../main_pages/company_single.html">company single</a>
              </li>
              <li>
                <a href="../main_pages/error_page.html">error page</a>
              </li>
              <li>
                <a href="../main_pages/login.html">login</a>
              </li>
        
              <li>
                <a href="../main_pages/sign_up.html">sign up</a>
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
                    <a href="candidate_applied_job.html">applied job </a>
                  </li>
          
                  <li>
                    <a href="candidate_favourite_job.html">favourite job</a>
                  </li>
                  <li>
                    <a href="candidate_resume.html"> resume</a>
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
                    <a href="comp_applications.html"> applications </a>
                  </li>
                  <li>
                    <a href="comp_company_page.html">company page</a>
                  </li>
 
                  <li>
                    <a href="comp_employer_manage_jobs.html"> manage jobs</a>
                  </li>
                  <li>
                    <a href="comp_post_new_job.html"> post new job</a>
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
                <a href="../main_pages/blog_single.html">blog single</a>
              </li>
              <li>
                <a href="../main_pages/blog_category_right_sidebar.html">
                  blog category
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="../main_pages/contact_us.html">contact us </a>
          </li>
          <li>
            <a href="../main_pages/login.html">login</a>
          </li>
        </ul>
        {/* .cd-dropdown-content */}
      </nav>
      <div className="cp_navi_main_wrapper jb_cover">
        <div className="container-fluid">
          <div className="cp_logo_wrapper">
            <a href="../main_pages/index.html">
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
          <div className="menu_btn_box jb_cover">
            <div className="jb_profile_box">
              <div className="nice-select" tabIndex={0}>
                {" "}
                <span className="current">
                  <img src="images/pf.png" alt="img" />
                  <div className="luca_profile_wrapper">
                    <h1>
                      <a href="#0">Luca Wallace</a>
                    </h1>
                    <p>
                      <a href="#0">luca@example.com</a>
                    </p>
                  </div>
                </span>
                <ul className="list">
                  <li>
                    <a href="#0">
                      <i className="fas fa-user-edit" />
                      account
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fas fa-cog" />
                      Setting
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fas fa-sign-in-alt" />
                      logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="jb_navigation_wrapper">
            <div className="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
              <ul className="main_nav_ul">
                <li className="has-mega gc_main_navigation">
                  <a href="#0" className="gc_main_navigation">
                    home
                  </a>
                  <ul className="navi_2_dropdown">
                    <li className="parent">
                      <a href="../main_pages/index.html">
                        <i className="fas fa-square" />
                        home I{" "}
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/index_II.html">
                        <i className="fas fa-square" />
                        home II
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/index_III.html">
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
                      <a href="../main_pages/job_listing_grid_left_filter.html">
                        {" "}
                        <i className="fas fa-square" />
                        job listing grid{" "}
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/job_listing_list_left_filter.html">
                        {" "}
                        <i className="fas fa-square" />
                        job listing list{" "}
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/job_single.html">
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
                          <a href="../main_pages/job_listing_grid_left_filter.html">
                            {" "}
                            <i className="fas fa-square" />
                            job listing grid{" "}
                          </a>
                        </li>
                        <li>
                          <a href="../main_pages/job_listing_list_left_filter.html">
                            {" "}
                            <i className="fas fa-square" />
                            job listing list{" "}
                          </a>
                        </li>
                        <li>
                          <a href="../main_pages/job_single.html">
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
                      <a href="../main_pages/about_us.html">
                        {" "}
                        <i className="fas fa-square" />
                        about us
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/companies.html">
                        {" "}
                        <i className="fas fa-square" />
                        companies
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/company_single.html">
                        {" "}
                        <i className="fas fa-square" />
                        company single
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/error_page.html">
                        <i className="fas fa-square" />
                        error page
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/login.html">
                        <i className="fas fa-square" />
                        login
                      </a>
                    </li>
                    
                    <li className="parent">
                      <a href="../main_pages/sign_up.html">
                        <i className="fas fa-square" />
                        sign_up
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-mega gc_main_navigation">
                 
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
                          <a href="candidate_applied_job.html">
                            {" "}
                            <i className="fas fa-square" />
                            applied job{" "}
                          </a>
                        </li>
                       
                        <li>
                          <a href="candidate_favourite_job.html">
                            {" "}
                            <i className="fas fa-square" />
                            favourite job
                          </a>
                        </li>
                        <li>
                          <a href="candidate_resume.html">
                            {" "}
                            <i className="fas fa-square" />
                            resume
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
                          <a href="comp_applications.html">
                            {" "}
                            <i className="fas fa-square" />
                            applications{" "}
                          </a>
                        </li>
                        <li>
                          <a href="comp_company_page.html">
                            {" "}
                            <i className="fas fa-square" /> company page
                          </a>
                        </li>
                        
                        <li>
                          <a href="comp_employer_manage_jobs.html">
                            {" "}
                            <i className="fas fa-square" />
                            manage jobs
                          </a>
                        </li>
                        <li>
                          <a href="comp_post_new_job.html">
                            {" "}
                            <i className="fas fa-square" />
                            post new job
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
                      <a href="../main_pages/blog_single.html">
                        {" "}
                        <i className="fas fa-square" />
                        blog single
                      </a>
                    </li>
                    <li className="parent">
                      <a href="../main_pages/blog_category_right_sidebar.html">
                        {" "}
                        <i className="fas fa-square" />
                        blog category
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="../main_pages/contact_us.html"
                    className="gc_main_navigation"
                  >
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
      {/* top header wrapper start */}
      <div className="page_title_section">
        <div className="page_header">
          <div className="container">
            <div className="row">
              {/* section_heading start */}
              <div className="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
                <h1>Company Page</h1>
              </div>
              <div className="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
                <div className="sub_title_section">
                  <ul className="sub_title">
                    <li>
                      {" "}
                      <a href="#0"> Home </a>&nbsp; / &nbsp;{" "}
                    </li>
                    <li>Company Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top header wrapper end */}
      {/*employee dashboard wrapper start*/}
      <div className="employe_dashboard_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="emp_dashboard_sidebar jb_cover">
                <div className="emp_web_profile jb_cover">
                  <img src="images/web.png" alt="post_img" />
                  <h4>{profile.full_name}</h4>
                  <div className="skills jb_cover">
                    <div className="skill-item jb_cover">
                      <h6>
                        profile<span>70%</span>
                      </h6>
                      <div className="skills-progress">
                        <span data-value="70%" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="emp_follow_link jb_cover">
                  <ul className="feedlist">
                    <li>
                      <a href="comp_company_page.html" className="link_active">
                        <i className="fas fa-file" />
                        company page{" "}
                      </a>
                    </li>
                    <li>
                      <a href="comp_employer_manage_jobs.html">
                        <i className="fas fa-suitcase" />
                        manage jobs
                      </a>
                    </li>
                    <li>
                      <a href="comp_applications.html">
                        <i className="fas fa-mobile" />
                        applications
                      </a>
                    </li>
                    <li>
                      <a href="comp_post_new_job.html">
                        <i className="fas fa-user-plus" />
                        post new job
                      </a>
                    </li>
                   
  
                  </ul>
                  <ul className="feedlist logout_link jb_cover">
                    <li>
                      <a href="#0">
                        <i className="fas fa-power-off" /> log out
                      </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
              <div
                className="modal fade delete_popup"
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
                        <div className="delett_cntn jb_cover">
                          <h1>
                            <i className="fas fa-trash-alt" /> delete account
                          </h1>
                          <p>
                            Are you sure! You want to delete your profile. This
                            <br /> can't be undone!
                          </p>
                          <div className="delete_jb_form">
                            <input
                              type="password"
                              name="password"
                              placeholder="Enter Password"
                            />
                          </div>
                          <div className="header_btn search_btn applt_pop_btn">
                            <a href="#0">save updates</a>
                          </div>
                          <div className="cancel_wrapper">
                            <a href="#0" data-dismiss="modal">
                              cancel
                            </a>
                          </div>
                          <div className="login_remember_box jb_cover">
                            <label className="control control--checkbox">
                              You accepts our{" "}
                              <a href="#0">Terms and Conditions </a> and{" "}
                              <a href="#0">Privacy Policy</a>
                              <input type="checkbox" />
                              <span className="control__indicator" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="job_filter_category_sidebar company_wrapper jb_cover">
                    <div className="job_filter_sidebar_heading jb_cover">
                      <h1>
                        {" "}
                        Contact Information{" "}
                        <span>
                          <a
                            href="#0"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                      <div
                        className="modal fade delete_popup company_popup"
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
                                <div className="delett_cntn jb_cover">
                                  <h1>
                                    <i className="fas fa-edit" />
                                    about us
                                  </h1>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>company name :</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <input
                                            type="text"
                                            name="name"
                                            value={profile.full_name}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>location :</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <input
                                            type="text"
                                            name="name"
                                            value={profile.address}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>phone :</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <input
                                            type="text"
                                            name="name"
                                            value={profile.phone_number}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>email :</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <input
                                            type="email"
                                            name="email"
                                            value={profile.contact_mail}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>Country :</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <input
                                            type="text"
                                            name="name"
                                            value={profile.country}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>website :</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <input
                                            type="text"
                                            name="name"
                                            value={profile.website}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="padder_top jb_cover" />
                                  <div className="header_btn search_btn applt_pop_btn">
                                    <a href="#0">save updates</a>
                                  </div>
                                  <div className="cancel_wrapper">
                                    <a href="#0" data-dismiss="modal">
                                      cancel
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="job_overview_header jb_cover">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-calendar" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>Company Name</li>
                                <li>{profile.full_name}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>Location:</li>
                                <li>{profile.address}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fa fa-info-circle" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>Hotline::</li>
                                <li>{profile.phone_number}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-envelope" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>email:</li>
                                <li>
                                  <a href="#0">{profile.contact_mail}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="flaticon-man-user" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>Country</li>
                                <li>{profile.country}</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper dcv jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-globe-asia" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>website:</li>
                                <li>
                                  <a href="#0">{profile.website}</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="job_filter_category_sidebar company_wrapper jb_cover">
                    <div className="job_filter_sidebar_heading jb_cover">
                      <h1>
                        about us{" "}
                        <span>
                          <a
                            href="#0"
                            data-toggle="modal"
                            data-target="#myModal2"
                          >
                            <i className="fas fa-edit" />
                          </a>
                        </span>
                      </h1>
                      <div
                        className="modal fade delete_popup company_popup"
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
                                <div className="delett_cntn jb_cover">
                                  <h1>
                                    <i className="fas fa-edit" />
                                    about us
                                  </h1>
                                  <div className="category_wrapper jb_cover">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                        <div className="category_lavel jb_cover">
                                          <p>write yourself:</p>
                                        </div>
                                      </div>
                                      <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                                        <div className="delete_jb_form">
                                          <textarea
                                            className="require"
                                            name="message"
                                            rows={5}
                                            value={profile.description}
                                            defaultValue={""}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="padder_top jb_cover" />
                                  <div className="header_btn search_btn applt_pop_btn">
                                    <a href="#0">save updates</a>
                                  </div>
                                  <div className="cancel_wrapper">
                                    <a href="#0" data-dismiss="modal">
                                      cancel
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="job_overview_header pdd jb_cover">
                      <p>{profile.description}</p>
                    </div>
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
