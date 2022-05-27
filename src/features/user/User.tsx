import { useDispatch, useSelector } from "react-redux";
import { removeLogin, selectLogin } from "../login/loginSlice";
import { MdDashboard } from "react-icons/md";

export default function User() {
  const { user } = useSelector(selectLogin);
  const dispatch = useDispatch();

  console.log(`User`, user);

  const logout = () => {
    dispatch(removeLogin());
  };

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
              <div style={{ fontSize: 16 }}>{user.name}</div>
              <a href="#0">{user.email}</a>
            </div>
          </span>
          <ul className="list">
            <li>
              <a href="#0">
                <i className="fas">
                  <MdDashboard />
                </i>
                dashboard
              </a>
            </li>
            <li onClick={logout}>
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
