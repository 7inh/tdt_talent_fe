export default function SignUp() {
  return (
    <div style={{ height: "100vh" }}>
      {/* top header wrapper end */}
      {/* sign up wrapper start */}
      <div className="login_wrapper jb_cover">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="role-picker-container">
                <a href="#0">
                  <div className="role-picker-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={120}
                      height={120}
                      fill="currentColor"
                      className="bi bi-briefcase"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <div>Sign up as a company</div>
                  </div>
                </a>
                <div className="jb_register_red_or centroid">
                  <h1>OR</h1>
                </div>
                <a href="#0">
                  <div className="role-picker-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={120}
                      height={120}
                      fill="currentColor"
                      className="bi bi-briefcase"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <div>Sign up as a candidate</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
