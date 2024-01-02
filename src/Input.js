import React, { useState } from "react";
import "./c.css";
import Display from "./display";

const Input = () => {
  const [weight, setWeight] = useState({
    kg: 0,
    g: 0,
  });

  const [inpItem, setInpItem] = useState();

  const [item, setItems] = useState([
    { name: "Apple", price: 130 },
    { name: "Orange", price: 100 },
    { name: "Mango", price: 90 },
    { name: "Grapes", price: 160 },
    { name: "PineApple", price: 90 },
    { name: "Dragon", price: 300 },
    { name: "Kiwi", price: 330 },
    { name: "Banana", price: 120 },
  ]);

  const handleInput = ({ target: { name, value } }) => {
    setWeight({ ...weight, [name]: value });
  };

  const handleSelect = ({ target: { value } }) => {
    setInpItem(item[value]);
  };

  const [displayItem, setDisplayItems] = useState([]);

  const sendDate = (e) => {
    e.preventDefault();
    setDisplayItems([...displayItem, { ...weight, ...inpItem }]);
    setWeight({
      kg:0 ,
      g: 0,
    });
  };

  return (
    <div className="main-container">
      <div className="row_1">
        <form onSubmit={sendDate}>
          <div className="mb-3">
            <label htmlFor="item" className="form-label">
              Item
            </label>
            <select className="form-select" name="item" onChange={handleSelect}>
              {item.map((ele, i) => {
                return (
                  <option key={i} value={i}>
                    {ele.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="kg" className="form-label">
              Kg (kilogram)
            </label>
            <input
              type="number"
              name="kg"
              className="form-control"
              value={weight.kg}
              onChange={handleInput}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="g" className="form-label">
              g (gram)
            </label>
            <input
              type="text"
              name="g"
              className="form-control"
              value={weight.g}
              onChange={handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="row_2">
        <Display displayItem={displayItem} />
      </div>
    </div>
  );
};

export default Input;
