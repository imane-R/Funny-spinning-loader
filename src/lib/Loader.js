import "./Loader.css";

function Loader({ onLoad }) {
  return (
    <div>
      <div className="loader">
        <div className="box"></div>
        <div className="hillUp"></div>
        <div className="hillDown"></div>
      </div>
    </div>
  );
}

export default Loader;
