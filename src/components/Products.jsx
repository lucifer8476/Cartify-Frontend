import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (componentMounted) {
        const products = await response.clone().json();
        setData(products.slice(0, 49)); // Limit to first 49 products
        setFilter(products.slice(0, 49)); // Also limit the filter
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={index}>
            <Skeleton height={592} />
          </div>
        ))}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category.name === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Tshirt")}>Clothes</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Shoes")}>Shoes</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Furniture")}>Furniture</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Electronics")}>Electronics</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("Miscellaneous")}>Miscellaneous</button>
        </div>

        {filter.map((product) => {
          // Determine image source
          const imageUrl = Array.isArray(product.images) ? product.images[0].replace(/[\[\]"]/g, '') : product.images;

          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100">
                <img
                  className="card-img-top p-3"
                  src={imageUrl || "https://via.placeholder.com/300"} // Fallback to a placeholder image if no image is found
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title.substring(0, 25)}...</h5>
                  <p className="card-text">{product.description.substring(0, 90)}...</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">Buy Now</Link>
                  <button className="btn btn-dark m-1" onClick={() => { toast.success("Added to cart"); addProduct(product); }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
