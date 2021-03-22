import React from 'react'

const Stock = ({ onClick, stock }) => (
  <div>

    <div className="card" onClick={onClick}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            stock.name 
          }</h5>
        <p className="card-text">{
            //ticker: stock price
            stock.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
