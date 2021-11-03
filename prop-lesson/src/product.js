function Product({ name, description }) {
  //   console.log(props.name, "here");
  //   let { name, description } = props.shoe;
  //   console.log(name, description);
  return (
    <div className="product">
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Product;
