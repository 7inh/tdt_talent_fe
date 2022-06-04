export default function Footer() {
  return (
    <div className="footer jb_cover" style={{ marginTop: 50 }}>
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
  );
}
