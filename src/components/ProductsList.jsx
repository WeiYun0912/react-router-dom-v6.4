import { Link } from "react-router-dom";

const ProductsList = ({ data }) => {
  return (
    <div>
      <h1>Products List</h1>
      {data.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
          <Link to={"/products/" + product.id}>
            <img width={100} src={product.images[0]} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
