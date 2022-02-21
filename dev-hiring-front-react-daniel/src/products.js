import React, { useState, useEffect } from "react";

export const Products = () => {
  // [] Realizar um post para cadastrar um novo produto (POST /products)
  // [] O produto deve ter o seguinte Payload: name (string), value (número) e imageUrl (string)
  // [] O usuário também poderá editar um produto (PUT)
  // [] Editar o produto pelo seu id, caso nao exista usar outra prop

  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productValue, setProductValue] = useState(0);
  const [productImageUrl, setImageUrl] = useState('');

  const getProducts = () => {
    fetch("https://minutrade-react-test.glitch.me/")
      .then((res) => res.json())
      .then(
        (products) => {
          setProducts(products);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const postProduct = () => {
    fetch("https://minutrade-react-test.glitch.me/products")
      .then((res) => res.json())
      .then(
        (res) => {
          console.log("res", res);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div
        style={{
          width: "800px",
          border: "3px solid #00f9ff",
          backgroundColor: "fucsia",
        }}
      >
        <h1>Products</h1>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              <div style={{ width: "260px", float: "left" }}>
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "25px",
                  fontFamily: "Sans-serif",
                }}
              >
                <b>${product.name}</b>
              </div>
              <div
                style={{
                  textDecoration: "none",
                  color: "#000000",
                  fontSize: "8px",
                  clear: "both",
                }}
              >
                <i>${product.value}</i>
              </div>
            </li>
          ))}
        </ul>
        <form>
          <input
            value={productName}
            onChange={(event) => setProductName(event)}
            type="text"
            name="name"
            id="name"
          />
          <input
            value={productValue}
            onChange={(event) => setProductValue(event)}
            type="number"
            name="value"
            id="value"
          />
          <input
            value={productImageUrl}
            onChange={(event) => setImageUrl(event)}
            type="text"
            name="imageUrl"
            id="imageUrl"
          />
          <button onClick={postProduct}>Add Product</button>
        </form>
      </div>
    </>
  );
};

export default Products;
