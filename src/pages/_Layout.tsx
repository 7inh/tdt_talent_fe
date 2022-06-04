import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function Layout() {
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
      <div className="cursor" />
      {/* Top Scroll Start */}
      <a href="#0" id="return-to-top">
        <i className="fas fa-angle-double-up" />
      </a>
      {/* Top Scroll End */}
      {/* cp navi wrapper Start */}

      <Navigation />

      <Outlet />

      <Footer />

    </div>
  );
}
