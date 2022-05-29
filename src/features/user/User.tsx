import { MdDashboard } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeLogin } from "../login/loginSlice";

export default function User({ user }: any) {
  const dispatch = useDispatch();

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
            <img src={user.picture} alt="img" />
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
