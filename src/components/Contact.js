import { useEffect, useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [form, setForm] = useState({ email: "", name: "", title: "", msg: "" });
  const [active, setActive] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { email, name, title, msg } = form;
  const onSubmit = (e) => {
    e.preventDefault();
    if (email && name && title && msg) {
      setSuccess(true);
      setTimeout(() => {
        setForm({ email: "", name: "", title: "", msg: "" });
        setSuccess(false);
      }, 2000);
      emailjs.sendForm('service_10nx6tb', 'template_mbj6dk6', e.target, 'mhYYFQEGtzOYj3Oyw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };
  useEffect(() => {
    console.log('form data sent', form)
  }, [])
  return (
    <section id="contact">
      <div className="container">
        <div className="roww resumo_fn_contact">
          {/* Main Title */}
          <div className="resumo_fn_main_title">
            <h3 className="subtitle">Contact</h3>
            <h3 className="title">Get In Touch</h3>
            <p className="desc">
              If you have any suggestion, project or even you want to say
              “hello”, please fill out the form below and I will reply you
              shortly.
            </p>
          </div>
          {/* /Main Title */}
          {/* Contact Form */}
          <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
            <div
              className="success"
              data-success="Your message has been received, I will be in touch soon."
              style={{ display: success ? "block" : "none" }}
            >
              <span className="contact_success">
                Your message has been received, I will be in touch soon.
              </span>
            </div>
            <div
              className="empty_notice"
              style={{ display: error ? "block" : "none" }}
            >
              <span>Please Fill Required Fields!</span>
            </div>
            {/* */}
            <div className="items_wrap">
              <div className="items">
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "name" || name ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("name")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={name}
                      name="name"
                      id="name"
                      type="text"
                    />
                    <span className="moving_placeholder">Name *</span>
                  </div>
                </div>
                <div className="item half">
                  <div
                    className={`input_wrapper ${
                      active === "email" || email ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("email")}
                      onBlur={() => setActive(null)}
                      onChange={(e) => onChange(e)}
                      value={email}
                      name="email"
                      id="email"
                      type="email"
                    />
                    <span className="moving_placeholder">Email *</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "title" || title ? "active" : ""
                    }`}
                  >
                    <input
                      onFocus={() => setActive("title")}
                      onBlur={() => setActive(null)}
                      id="title"
                      onChange={(e) => onChange(e)}
                      value={title}
                      name="title"
                      type="text"
                    />
                    <span className="moving_placeholder">Title</span>
                  </div>
                </div>
                <div className="item">
                  <div
                    className={`input_wrapper ${
                      active === "message" || msg ? "active" : ""
                    }`}
                  >
                    <textarea
                      onFocus={() => setActive("message")}
                      onBlur={() => setActive(null)}
                      name="msg"
                      onChange={(e) => onChange(e)}
                      value={msg}
                      id="message"
                    />
                    <span className="moving_placeholder">Message</span>
                  </div>
                </div>
                <div className="item">
                  {/* <a id="send_message" href="#">
                    Send Message
                  </a> */}
                  <input
                    className="a"
                    type="submit"
                    id="send_message"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
          </form>
          {/* /Contact Form */}
          {/* Contact Info */}
          <div className="resumo_fn_contact_info">
            <p>Home</p>
            <h3>Manchester</h3>
            <p>Current Location</p>
            <h3>Europe</h3>
            <p>Email </p>
            <h3>
              <a className="fn__link" href="mailto:garman000@gmail.com">
                garman000@gmail.com
              </a>
            </h3>
            <p>Lets Work Together</p>
            <h3>
              I'm always looking for new opportunities to collaborate with
              others on exciting projects. If you're interested in working
              together, please don't hesitate to get in touch.
            </h3>
          </div>
          {/* /Contact Info */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
