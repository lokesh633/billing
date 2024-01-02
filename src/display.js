import React from "react";

const Display = ({ displayItem }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr class="table-danger">
            <th scope="col">item Name</th>
            <th scope="col">kilogram</th>
            <th scope="col">price</th>
            <th scope="col">total price</th>
          </tr>
        </thead>
        <tbody>
            {displayItem.map((item, index) => {
              return <tr class="table-danger">
                <th class="table-danger" scope="row">{item.name}</th>
                <td class="table-danger">{item.kg === 0 ? item.g : item.g===0 ? item.kg : parseFloat(item.kg+item.g)} {item.kg === 0 ? "g":item.g===0 ?"kg":"g"}</td>
                <td class="table-danger">{item.price}/kg</td>
                <td class="table-danger">₹{" "}{item.kg === 0 ? (item.price*item.g)/1000:item.g===0 ?item.price*item.kg : (item.kg+item.g)*item.price/1000}</td>
              </tr>
            })}
            <tr>
                <th scope="row" class="table-warning"></th>
                <td class="table-warning"></td>
                <td class="table-warning">Total Price</td>
                <td class="table-warning">₹{" "}{displayItem.length===0 ? 0:displayItem.map((item)=>{
                  if(item.kg === 0){
                       return (item.g*item.price)/1000
                  }else if(item.g===0){
                       return   (item.kg*item.price)
                  }else{
                       return item.price*(item.kg+item.g )/1000;
                  }
                }).reduce((a,b)=>a+b)}/-
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Display;
