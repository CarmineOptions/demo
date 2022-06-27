import { Link } from "react-router-dom";

const FourOFour = () => (
  <>
    <h4>Sorry, but this page does not exist</h4>
    <p>It would appear that the page you are trying to reach does not exist.</p>
    <p>Click this link to go to <Link to={"/"}>the homepage</Link>, which most likely exists, unlike this page.</p>
  </>
);

export default FourOFour;
