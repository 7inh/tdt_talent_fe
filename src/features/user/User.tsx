export default function User() {
  return (
    <div className="menu_btn_box jb_cover">
      <div className="jb_profile_box user-controller img">
        <div className="nice-select" tabIndex={0}>
          <span
            className="current"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="images/pf.png" alt="img" />
            <div
              className="luca_profile_wrapper"
              style={{ lineHeight: "25px" }}
            >
              <div style={{ fontSize: 16 }}>Luca Wallace</div>
              <a href="#0">luca@example.com</a>
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
  );
}
