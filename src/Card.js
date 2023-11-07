import React from 'react'

function Card(props) {
  return (
    <div className="row" style={{ margin:"2%"}}>
      {props.data.map((product) => {
        return (
          <div className="col-sm-3">
        <div className="card" style={{ width: "18rem", margin :"2%" }}>
          <img src={product.img} className="card-img-top" alt="..." style={{height:"100px"}} />
          <div className="card-body">
            <h5 className="card-title">{product.names}</h5>
            <p className="card-text">{product.details}</p>
            <p className="card-text">{product.price}</p>
            <button className="btn btn-primary" onClick={() => props.handleCartData(product)}>Add to Cart</button>
          </div>
        </div>
        </div>
        )
      })}

    </div>
  )
}

export default Card
