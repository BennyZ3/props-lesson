import React from "react";
import Product from "./product";
import shoes from "./shoes";

class RecomendedProducts extends React.Component {
  render() {
    let { title } = this.props;
    let recommended = shoes.map((item) => {
      return <Product name={item.name} description={item.description} />;
    });
    // console.log(recommended);
    return (
      <div>
        <h1>{title}</h1>
        <ul>
          {/* <Product shoe={shoes[0]} />
          <Product shoe={shoes[1]} /> */}
          {/* <Product name={shoes[1].name} description={shoes[1].description} /> */}
          {recommended}
        </ul>
      </div>
    );
  }
}

export default RecomendedProducts;
