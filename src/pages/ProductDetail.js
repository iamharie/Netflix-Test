import { Link, useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  return (
    <>
      <h1>Product details</h1>
      <h2>{params.id}</h2>
      <p>
        <Link to=".." relative="path">
          BACK
        </Link>
      </p>
    </>
  );
}
