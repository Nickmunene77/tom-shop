import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.scss";
import { useContext } from "react";
import CartContext from "../../CartContext";
import useFetch from "../../hooks/useFetch";

function ProductPage() {
  const { increaseProductItems } = useContext(CartContext);

  const { productId } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:3000/products/${productId}`
  );

  if (error) {
    return (
      <p className="product-page__error">
        Something went wrong while loading the product
      </p>
    );
  }

  return (
    <div className="product-page">
      <div className="product-page__container">
        {loading ? (
          <p className="product-page__loading">Loading...</p>
        ) : (
          <>
            <div className="product-page__left">
              <img src={data?.product.image} alt="chair" />
            </div>
            <div className="product-page__right">
              <h2 className="product-page__title">Features</h2>
              <div className="product-page__table">
                <div className="product-page__characteristics product-page__column">
                  {data?.product?.characteristics?.map((item, i) => {
                    return (
                      <div key={i} className="column-item">
                        {item.characteristic}
                      </div>
                    );
                  })}
                </div>
                <div className="product-page__values product-page__column">
                  {data?.product?.characteristics?.map((item, i) => {
                    return (
                      <div key={i} className="column-item">
                        {item.value}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="product-page__price">{data?.product.price} Ksh</p>
              <button
                className="add-to-cart"
                onClick={() => {
                  increaseProductItems(
                    data?.product._id,
                    data?.product.image,
                    data?.product.name,
                    data?.product.price
                  );
                }}
              >
                Add to cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductPage;
