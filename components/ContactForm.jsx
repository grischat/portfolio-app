import "../scss/ContactForm.scss";
import { useForm, ValidationError } from "@formspree/react";
import Button from "./Button";
import "../scss/Button.scss";
import { Link } from "react-router-dom";
function ContactForm() {
  const [state, handleSubmit] = useForm("mrgwqljk");
  if (state.succeeded) {
    return (
      <div>
        <p className="sucess__msg">Your message has been successfully sent!</p>
        <Link id="link" to="/portfolio">
          <Button className="btn__goto"> GO TO PORTFOLIO</Button>
        </Link>
      </div>
    );
  }  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form__container">
        <div className="form__field">
          <label>Name</label>
          <input placeholder="Your name" id="name" type="text"></input>
        </div>
        <div className="form__field">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            id="email"
          ></input>
        </div>
        <div className="form__field">
          <label>Message</label>
          <textarea
            placeholder="Your message"
            id="message"
            name="message"
            type="text"
          ></textarea>
        </div>
      </div>
      <Button
        type="submit"
        disabled={state.submitting}
        className="btn__sendmsg"
      >
        SEND MESSAGE
      </Button>
    </form>
  );
}

export default ContactForm;
