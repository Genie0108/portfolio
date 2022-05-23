import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./contact.css";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000);
  }, []);
  // making form functional using emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1hjt1hb",
        "template_i0igg7h",
        form.current,
        "y6lX7l8pdLAkPqMy_"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };
  // latitude and longitude of Chabahil
  const position = [27.7166, 85.345];
  return (
    <div className="container contactPage">
      <div className="absolute left-[10%] top-[17%] -translate[50%] w-[35%]  table-cell align-middle max-h-[90%]">
        <h1 className="text-7xl leading-7 font-coolvetica text-secondary font-normal mt-0 relative mb-20 left-3">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            index={15}
          />
        </h1>
        <p>
          I am available for hire and open to any ideas of cooperation. Fill up
          the awesome form below or send an email to sushant07.dhimal@gmail.com
          and ~let's talk.
        </p>
        {/* form section */}
        <div className="contactForm">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input
                  placeholder="Name"
                  type="text"
                  name="user_name"
                  required
                />
              </li>
              <li className="half">
                <input
                  placeholder="Email"
                  type="email"
                  name="user_email"
                  required
                />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flatButton" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      {/* map section */}
      <div className="infoMap">
        Sushant Dhimal,
        <br />
        Chabahil <br />
        Kathmandu, Nepal <br />
        <br />
        <h6>
          <span>@:</span> sushant07.dhimal@gmail.com
        </h6>
      </div>
      {/* map container */}
      <div className="mapContainer">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Sushant lives here, come over for a cup of coffee :)</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Contact;
