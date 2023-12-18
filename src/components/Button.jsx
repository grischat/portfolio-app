import "../scss/Button.scss";
import downArrowsIcon from "../media/images/icons/down-arrows-default.svg";
function Button({ showIcon, className, children }) {
  const scrollToTarget = () => {
    //Scroll to the About Me section
    const targetElement = document.getElementById("aboutme");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="btn__container">
      {showIcon && (
        <div className="triangle__icon" onClick={scrollToTarget}>
          <img
            className="icon__image"
            src={downArrowsIcon}
            alt="Triangle Icon"
          />
        </div>
      )}

      <button className={className} onClick={scrollToTarget}>
        {children}
      </button>
    </div>
  );
}

export default Button;
