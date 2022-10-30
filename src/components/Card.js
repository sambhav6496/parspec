import "./Card.css";
export default function Card({ dataObj }) {
  return (
    <>
      <ul>
        <li>{dataObj.id}</li>
        <li>{dataObj.name}</li>
        <li>{dataObj.address}</li>
        <li>{dataObj.pincode}</li>
      </ul>
    </>
  );
}
