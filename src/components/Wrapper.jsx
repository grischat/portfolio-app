import "../scss/Wrapper.scss";

function Wrapper({ children }) {
  return <div className="container">{children}</div>;
}

export default Wrapper;
