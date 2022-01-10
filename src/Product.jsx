export default function Product(props) {
  let { name, price, image, setDetailId, id } = props;

  return (
    <div className="wrapper">
      <div className="products" onClick={() => setDetailId(id)}>
        <img src={image}></img>
        <h1>{name}</h1>
        <h4>${price}</h4>
      </div>
    </div>
  );
}
