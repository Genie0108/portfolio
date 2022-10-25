import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./contact.css";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../../components/AnimatedLetters/AnimatedLetters";
import PopupWindow from "../../components/PopupWindow";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("textAnimate");
  const [showSuccessMessagePopup, setShowSuccessMessagePop] = useState(false);
  const [showErrorMessagePopup, setShowErrorMessagePop] = useState(false);
  const form = useRef();
  const containerRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("textAnimateHover");
    }, 3000);
  }, []);
  // making form functional using emailjs
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
          setShowSuccessMessagePop(true);

          // clear all form values on submit
          e.target.reset();
        },
        () => {
          setShowErrorMessagePop(true);

          // lowering brightness and making blur background to stand out popup message
          containerRef.current.className =
            "brightness-50 blur-sm container contactPage flex flex-col items-center justify-center gap-16 lg:block";
          setShowErrorMessagePop(true);
        }
      );
  };
  // latitude and longitude of Chabahil
  const position = [27.7166, 85.345];
  return (
    <>
      <div
        className="container contactPage flex flex-col items-center justify-center gap-16 lg:block"
        ref={containerRef}
      >
        <div className="lg:absolute left-[10%] top-[17%] -translate[50%] w-[80%] lg:w-[35%]  table-cell align-middle max-h-[80%]">
          <h1 className="text-7xl leading-7 font-coolvetica text-secondary font-normal mt-0 relative mb-20 left-3">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              index={15}
            />
          </h1>
          <p>
            I am available for hire and open to any ideas of cooperation. Fill
            up the awesome form below or shoot me an email at
            sushant07.dhimal@gmail.com and ~let's talk.
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
                    className="w-full border-0 min-h-[90px] md:min-h-[150px] h-12 text-white p-5 box-border "
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

        {/* map container */}
        <div className="mapContainer relative w-[80%] lg:w-[53%]">
          <div className="hidden md:block infoMap absolute bottom-1 left-2 lg:top-36 lg:right-5 h-max">
            Sushant Dhimal,
            <br />
            Chabahil <br />
            Kathmandu, Nepal <br />
            <br />
            <h6>
              <span>@:</span> sushant07.dhimal@gmail.com
            </h6>
          </div>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                Sushant lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      {/* popup generated after form submit */}
      <PopupWindow
        showSuccessMessagePopup={showSuccessMessagePopup}
        setShowSuccessMessagePop={setShowSuccessMessagePop}
        heading="Message Delivered!"
        body="Your message has been successfully sent."
        color="black"
      />
      <PopupWindow
        showErrorMessagePopup={showErrorMessagePopup}
        setShowErrorMessagePop={setShowErrorMessagePop}
        heading="Message not Delivered!"
        body="Failed to send the message, please try again later."
        color="red"
        containerRef={containerRef}
      />
    </>
  );
};

export default Contact;
