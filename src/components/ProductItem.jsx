import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  return (
    <div>
      <p>{data.title}</p>
      <img width={100} src={data.images[0]} />
      <br />
      <Link to=".." relative="path">
        Back
      </Link>
    </div>
  );
};

export default ProductItem;
