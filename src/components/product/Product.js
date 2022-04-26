import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
        <section className="photo-gallery">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">EatNow Products</h2>
            </div>
            <div className="product-photos">
              <div className="item2">
                Jollof Rice
              </div>
              <div className="item2">
                Moi Moi
              </div>
              <div className="item2">
                Chicken
              </div>
              <div className="item2">
                Soup
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Product;
