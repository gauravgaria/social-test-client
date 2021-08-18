import axios from "axios";
const Requests = () => {
  //getData

  const getData = async () => {
    axios.getData("/");
  };
  return (
    <div>
      <span className="textTitle">Api requests</span>
      <button style={style} onClick={getData}>
        Get
      </button>
    </div>
  );
};

const style = {
  backgroundColor: "black",
  color: "white",
  padding: "4px 8px",
  border: "none",
  borderRadius: "4px",
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
};

export default Requests;
