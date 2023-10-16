import React, { useEffect, useState } from "react";
import "./Products.scss";
import ProductsList from "../products_list/ProductsList.jsx";
import { motion } from "framer-motion";

const textVariants = {
  offscreen: {
    x: -50,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

function Products() {
  const [products, setProducts] = useState([]);
  const [isLast, setIsLast] = useState(false);
  const [page, setPage] = useState(0);
  const [loadingState, setLoadingState] = useState();

  const fetchProducts = (page) => {
    setLoadingState("loading");
    fetch(`http://localhost:3000/products?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoadingState("success");
        setIsLast(data.last);
      })
      .catch((error) => {
        setLoadingState("error");
      });
  };

  useEffect(() => {
    fetchProducts(page);
  }, [page]);

  function loadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  if (loadingState === "error")
    return (
      <p className="products__error">
        It was not possible to load the products
      </p>
    );

  return (
    <section className="products" id="products">
      <div className="products__container">
        <motion.h2
          variants={textVariants}
          initial="offscreen"
          whileInView="onscreen"
          className="products__title"
        >
          Our products
        </motion.h2>
        <ProductsList products={products} />
        {!isLast && (
          <button className="products__load-more" onClick={() => loadMore()}>
            {loadingState === "loading" ? "loading..." : "Load more"}
          </button>
        )}
      </div>
    </section>
  );
}

export default Products;
