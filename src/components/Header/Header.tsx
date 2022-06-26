import { Link } from "react-router-dom";

const Header = () => (
  <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
    <div className="row">
      <Link
        to="/"
        className="d-flex align-items-center text-dark text-decoration-none"
      >
        <img
          src="/android-chrome-192x192.png"
          width="32"
          height="32"
          className="me-2"
          alt="Carmine Options logo"
        />
        <span className="fs-4">Carmine Options | Demo</span>
      </Link>
      <div className="col-12 col-md-4">
        <Link className="m-3 nav-link link-dark" to="/limit-risk">
          Invest with limited risk
        </Link>
      </div>
      <div className="col-12 col-md-4">
        <Link className="m-3 nav-link link-dark" to="/hedge">
          Hedge your investment
        </Link>
      </div>
      <div className="col-12 col-md-4">
        <Link className="m-3 nav-link link-dark" to="/staked-capital">
          Hedge staked capital
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
