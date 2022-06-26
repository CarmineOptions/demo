import { Link } from "react-router-dom";

const Home = () => (
  <>
    <h4>Investment forecast demo</h4>
    <p>This demo shows several use-cases that Carmine finance provides.</p>
    <p>At this time only <Link to={"/limit-risk"}>invest with limited risk</Link> is available.</p>
  </>
);

export default Home;
