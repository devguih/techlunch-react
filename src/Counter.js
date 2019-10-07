import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import axios from "axios";

function Counter() {
  // const [loading, setLoading] = useState(true);
  // const [items, setItems] = useState([]);
  const counter = useSelector(state => {
    return state.counter;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then(({ data }) => {
    //   setItems(data);
    //   setLoading(false);
    // });
  }, []);

  return (
    <div>
      {/* {loading && <h1>Carregando</h1>}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_COUNTER"
          })
        }
      >
        -
      </button>
      <h4>{counter}</h4>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_COUNTER",
            value: counter + 1
          })
        }
      >
        +
      </button>
    </div>
  );
}

export default Counter;
