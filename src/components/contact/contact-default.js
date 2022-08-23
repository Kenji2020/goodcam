import React, { useState, useEffect } from 'react'
import MagicCursor from '../../layout/magic-cursor';
import { customCursor } from '../../plugin/plugin';
import emailjs from '@emailjs/browser';

export default function ContactDefault({ ActiveIndex }) {
    const [trigger, setTrigger] = useState(false);
    useEffect(() => {
        // dataImage();
        customCursor();
    });

    const [form, setForm] = useState({ email: "", name: "", message: "" });
    const [active, setActive] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const { email, name, message } = form;
    const onSubmit = (e) => {
        e.preventDefault();
        if (name.length === 0 || email.length === 0 || message.length === 0) {
          setError(true);
          clearError();
        } else {
          // https://www.emailjs.com/
          setSuccess(true);
          setTimeout(() => {
            emailjs
            .send(
              "service_d8pmvg8", // service id
              "template_bdnhp66", // template id
              form,
              "41kFLTaeUJne4klBY" // public api
            )
              setForm({ email: "", name: "", message: "" });
              setSuccess(false);
          }, 2000);
        }
      };
    return (
        <>
            {/* <!-- CONTACT --> */}
            <div className={ActiveIndex === 4 ? "cavani_tm_section active animated fadeInUp" : "cavani_tm_section hidden animated"} id="contact_">
                <div className="section_inner">
                    <div className="cavani_tm_contact">
                        <div className="cavani_tm_title">
                            <span>Contáctanos</span>
                        </div>
                        <div className="short_info">
                            <ul>
                              
                                <li>
                                    <div className="list_inner">
                                        <i className="icon-mail-3"></i>
                                        <span><a href="#">goodlinecontacto@gmail.com</a></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="list_inner">
                                        <i className="icon-mobile"></i>
                                        <span>+569 57005236</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form">
                            <div className="left">
                                <div className="fields">
                                    {/* Contact Form */}
                                    <form className="contact_form" onSubmit={(e) => onSubmit(e)}>
                                        <div
                                            className="returnmessage"
                                            data-success="Su mensaje fue recibido, nos pondremos en contacto a la brevedad."
                                            style={{ display: success ? "block" : "none" }}
                                        >
                                            <span className="contact_success">
                                                Su mensaje fue recibido, nos pondremos en contacto a la brevedad.
                                            </span>
                                        </div>
                                        <div
                                            className="empty_notice"
                                            style={{ display: error ? "block" : "none" }}
                                        >
                                            <span>Por favor rellene todos los campos!</span>
                                        </div>
                                        {/* */}

                                        <div className="fields">
                                            <ul>
                                                <li
                                                    className={`input_wrapper ${active === "name" || name ? "active" : ""
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
                                                        placeholder="Nombre"
                                                    />
                                                </li>
                                                <li
                                                    className={`input_wrapper ${active === "email" || email ? "active" : ""
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
                                                        placeholder="Correo electrónico"
                                                    />
                                                </li>
                                                <li
                                                    className={`last ${active === "message" || message ? "active" : ""
                                                        }`}
                                                >
                                                    <textarea
                                                        onFocus={() => setActive("message")}
                                                        onBlur={() => setActive(null)}
                                                        name="message"
                                                        onChange={(e) => onChange(e)}
                                                        value={message}
                                                        id="message"
                                                        placeholder="Mensaje"
                                                    />
                                                </li>
                                            </ul>
                                            <div className="cavani_tm_button">
                                                <input
                                                    className='a'
                                                    type="submit"
                                                    id="send_message"
                                                    value="Enviar mensaje"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                    {/* /Contact Form */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- CONTACT --> */}
        </>
    )
}
