import axios from "axios";
import { useEffect } from "react";
import { MdMargin } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { selectLogin, setUser } from "../features/login/loginSlice";

declare global {
  interface Window {
    refreshSelect(): void;
    buildSlider(): void;
  }
}

export default function Layout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { user, token } = useSelector(selectLogin);
  const setRole = async (role: string) => {
    var config = {
      method: "post",
      url: "http://localhost:7000/api/account/update/" + role,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {},
    };

    const response = await axios(config);
    dispatch(setUser({ user: response.data }));
    window.location.reload();
  };

  useEffect(() => {
    window.refreshSelect();
    window.buildSlider();
  }, [location]);

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}

      {/* preloader Start */}
      <div className="jb_preloader">
        <div className="spinner_wrap">
          <div className="spinner" />
        </div>
      </div>
      {/* <div className="cursor" /> */}
      {/* Top Scroll Start */}
      <a href="#0" id="return-to-top">
        <i className="fas fa-angle-double-up" />
      </a>
      {/* Top Scroll End */}
      {/* cp navi wrapper Start */}

      {user.role === "user" ? (
        <div style={{ height: "100vh" }}>
          <div
            style={{
              fontSize: "36px",
              textAlign: "center",
              margin: "100px",
              color: "#ff3366",
            }}
          >
            Pick role
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              height: "30vh",
              alignItems: "center",
              padding: "100px",
              margin: "100px",
            }}
          >
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setRole("candidate")}
            >
              Candidate
            </div>
            <div
              style={{ borderLeft: "1px solid #ff3366", height: "inherit" }}
            ></div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setRole("company")}
            >
              Company
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navigation />

          <Outlet />

          <Footer />
        </>
      )}
    </div>
  );
}
