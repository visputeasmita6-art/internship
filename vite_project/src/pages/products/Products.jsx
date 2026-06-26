// import React from "react";

// const Products = () => {
//   return (
//     <div> "Welcome to the Products Page!" </div>
//   );
// }           

// export default Products;

//#Without count code
// import { useEffect, useReducer, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);//const ->var ,arr destructuring,
//   const [data, setData] = useState(0);
//   // useReducer is a hook that is used for managing more complex state logic in React. It is similar to useState, but it allows you to manage state transitions based on actions and reducers. In this code snippet, useReducer is not used, but it could be used if the state management for products becomes more complex in the future.
//   // usestate is the hook that allows you to add state to functional components in React. It returns an array with two elements: the current state value and a function to update that state.
//   // usestate is used to store the products fetched from the API. Initially, it is set to an empty array.
//   // useeffect is a hook that allows you to perform side effects in functional components. It takes a function as an argument and runs it after the component renders. In this case, it is used to fetch the products from the API when the component mounts.
//   // useReducer is a hook that is used for managing more complex state logic in React. It is similar to useState, but it allows you to manage state transitions based on actions and reducers. In this code snippet, useReducer is not used, but it could be used if the state management for products becomes more complex in the future.
//   // usecallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed. It is not used in this code snippet, but it could be used to optimize performance if there are expensive calculations or functions that depend on certain values.
//   // usecontest is a hook that allows you to access the context value in functional components. It is not used in this code snippet, but it could be used if there is a need to share state or data across multiple components without passing props down manually.

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//     //calling api to get the products data from the server. The fetch function is used to make an HTTP request to the specified URL. It returns a promise that resolves to the response of the request.
//     //open source api is a free api that provides fake data for testing and prototyping. It is used in this code snippet to fetch the products data from the server. react library is open source library that is used to build user interfaces. It is used in this code snippet to create the Products component and manage its state and side effects.
//       .then((res) => res.json())
//       .then((data) => setProducts(data))
//       .catch((err) => console.log(err));
//   }, []);
// const handleClick = () => {
//   setData((prev) => {
//     console.log("prev", prev);
  
//   });
// };
//   return (
//     <div>
//       <h1>Products Page</h1>
//       <button onClick={handleClick}>Click Me</button>
//       {data}
//       <p>Data: {data}</p>
//       {products.map((product) => (
//         <div
//           key={product.id}
//           //key is a special prop that is used to identify each element in a list. It helps React to efficiently update and render the list when there are changes. In this code snippet, the key is set to product.id, which is a unique identifier for each product in the products array.
//           style={{
//             border: "1px solid gray",
//             margin: "10px",
//             padding: "10px",
//           }}
//         >
//           <img
//             src={product.image}
//             alt={product.title}
//             width="100"
//           />

//           <h3>{product.title}</h3>

//           <p>₹ {product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Products;
//with count code
// import { useEffect, useState } from "react";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [datavar, setDatavar] = useState(0);

//   console.log("datavar:", datavar);

//   // Runs only when datavar changes
//   useEffect(() => {
//     console.log("inside useEffect:", datavar);
//   }, [datavar]);

//   // Fetch products on component mount
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Products fetched:", data);
//         setProducts(data);
//       })
//       .catch((err) => console.log("Error:", err));
//   }, []);

//   const handleUpdateData = () => {
//     setDatavar((prevData) => {
//       console.log("prevData:", prevData);
//       return prevData + 1;
//     });
//   };

//   return (
//     <div>
//       <h1>Products Page</h1>

//       <button onClick={handleUpdateData}>Update Data</button>

//       <h2>Count: {datavar}</h2>

//       {products.length === 0 ? (
//         <p>Loading products...</p>
//       ) : (
//         products.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid gray",
//               margin: "10px",
//               padding: "10px",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               width="100"
//             />

//             <h3>{product.title}</h3>

//             <p>₹ {product.price}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Products;

//with filter code 
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cart, setCart] = useState([]);

  // Fetch Products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Filter Products
  useEffect(() => {
    let result = products;

    // Search Filter
    if (search) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    setFilteredProducts(result);
  }, [search, category, products]);

  // Add To Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(
      (item, index) => index !== id
    );
    setCart(updatedCart);
  };

  // Categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Cart Total
  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛍 Products Store</h1>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search Product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
          }}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "8px" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* Cart Section */}
      <div
        style={{
          border: "2px solid black",
          padding: "15px",
          marginBottom: "20px",
        }}
      >
        <h2>🛒 Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <p>No Items Added</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <span>{item.title}</span>

                <div>
                  ₹ {item.price}

                  <button
                    onClick={() => removeFromCart(index)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <h3>Total: ₹ {total.toFixed(2)}</h3>
          </>
        )}
      </div>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <h2>Loading Products...</h2>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              <h3>{product.title}</h3>

              <p>
                <strong>Category:</strong>{" "}
                {product.category}
              </p>

              <p>
                <strong>₹ {product.price}</strong>
              </p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  border: "none",
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;