import "../scss/Button.scss";

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
              src="../media/images/icons/down-arrows-default.svg"
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
