export default function Footer() {
  return (
    <div className="footer jb_cover" style={{ marginTop: 50 }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="footerNav jb_cover">
              <a href="#0">
                <img width={200} src="images/tdt_talent_logo.jpeg" alt="img" />
              </a>
              <ul className="footer_first_contact">
                <li>
                  <i className="flaticon-location-pointer" />
                  <p>
                   19 Nguyen Huu Tho
                    <br /> Ho Chi Minh, Viet Nam
                  </p>
                </li>
                <li>
                  <i className="flaticon-telephone" />
                  <p>
                  (028) 37755046
                    <br /> (028) 37755046
                  </p>
                </li>
                <li>
                  <i className="flaticon-envelope" />
                  <a href="#0">Room C004 </a> 
                  <br />
                  <a href="#0">Room C004</a>
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
                    Job Management
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-square" />
                    Company Management
                  </a>
                </li>
                <li>
                  <a href="#0">
                    <i className="fa fa-square" />
                    Account Management
                  </a>
                </li>
          
              </ul>
            </div>
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
