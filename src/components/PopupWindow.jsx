import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PopupWindow = ({
  showSuccessMessagePopup,
  setShowSuccessMessagePop,
  showErrorMessagePopup,
  setShowErrorMessagePop,
  heading,
  body,
  color,
  containerRef,
}) => {
  const handlePopup = (color) => {
    if (color === "black") {
      setShowSuccessMessagePop(false);
    }
    if (color === "red") {
      setShowErrorMessagePop(false);
      containerRef.current.className =
        "container contactPage flex flex-col items-center justify-center gap-16 lg:block";
    }
  };
  return (
    <div
      className={`${
        color === "black"
          ? showSuccessMessagePopup
            ? "block"
            : "hidden"
          : color === "red"
          ? showErrorMessagePopup
            ? "block"
            : "hidden"
          : ""
      } ${
        color === "red" ? "text-red-700" : ""
      } fixed top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] sm:w-[400px] px-8 py-8 bg-secondary shadow-md`}
    >
      <FontAwesomeIcon
        // icon="fa-thin fa-circle-xmark"
        icon={faCircleXmark}
        size="3x"
        className="fill-current absolute top-2 right-4 cursor-pointer"
        onClick={() => handlePopup(color)}
      />
      <h1 className="text-3xl font-semibold pb-1">{heading}</h1>
      <h2 className="text-2xl font-medium">{body}</h2>
    </div>
  );
};

export default PopupWindow;
