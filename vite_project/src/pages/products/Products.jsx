// import React from "react";

// const Products = () => {
//   return (
//     <div> "Welcome to the Products Page!" </div>
//   );
// }           

// export default Products;
import { useEffect, useReducer, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);//const ->var ,arr destructuring,
  const [data, setData] = useState(0);
  // useReducer is a hook that is used for managing more complex state logic in React. It is similar to useState, but it allows you to manage state transitions based on actions and reducers. In this code snippet, useReducer is not used, but it could be used if the state management for products becomes more complex in the future.
  // usestate is the hook that allows you to add state to functional components in React. It returns an array with two elements: the current state value and a function to update that state.
  // usestate is used to store the products fetched from the API. Initially, it is set to an empty array.
  // useeffect is a hook that allows you to perform side effects in functional components. It takes a function as an argument and runs it after the component renders. In this case, it is used to fetch the products from the API when the component mounts.
  // useReducer is a hook that is used for managing more complex state logic in React. It is similar to useState, but it allows you to manage state transitions based on actions and reducers. In this code snippet, useReducer is not used, but it could be used if the state management for products becomes more complex in the future.
  // usecallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is not used in this code snippet, but it could be used to optimize performance if there are expensive calculations or functions that depend on certain values.
  // usecontest is a hook that allows you to access the context value in functional components. It is not used in this code snippet, but it could be used if there is a need to share state or data across multiple components without passing props down manually.

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    //calling api to get the products data from the server. The fetch function is used to make an HTTP request to the specified URL. It returns a promise that resolves to the response of the request.
    //open source api is a free api that provides fake data for testing and prototyping. It is used in this code snippet to fetch the products data from the server. react library is open source library that is used to build user interfaces. It is used in this code snippet to create the Products component and manage its state and side effects.
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
const handleClick = () => {
  setData((prev) => {
    console.log("prev", prev);
  
  });
};
  return (
    <div>
      <h1>Products Page</h1>
      <button onClick={handleClick}>Click Me</button>
      {data}
      <p>Data: {data}</p>
      {products.map((product) => (
        <div
          key={product.id}
          //key is a special prop that is used to identify each element in a list. It helps React to efficiently update and render the list when there are changes. In this code snippet, the key is set to product.id, which is a unique identifier for each product in the products array.
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.title}
            width="100"
          />

          <h3>{product.title}</h3>

          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;