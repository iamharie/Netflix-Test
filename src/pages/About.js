import { Link, useNavigate } from "react-router-dom";
export default function About() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }
  return (
    <>
      <h1>we are the best watch dealers</h1>
      <p>
        Go to <Link to="/Products">Products</Link>
      </p>
      <button onClick={handleNavigate}>Home</button>
    </>
  );
}
