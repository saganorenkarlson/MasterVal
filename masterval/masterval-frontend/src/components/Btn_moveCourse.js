import "../styles/DisplayCourse.css";
import "../Pages/Browse.css";
import React, { useState } from "react";
import Backdrop from "./Backdrop/Backdrop.js";
import "./Backdrop/Backdrop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";

const Btn_moveCourse = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
  setSelectedProfileCourses,
  selectedProfileCourses,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  let newTerm;

  if (courseinfo.semester == 7) {
    newTerm = 9;
  } else {
    newTerm = 7;
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleConfirm = () => {
    const isLocalStorage =
      JSON.stringify(selectedCourses) == JSON.stringify(selectedProfileCourses);

    if (isLocalStorage) {
      setSelectedCourses(
        selectedCourses.map((item) =>
          item.coursecode === courseinfo.coursecode
            ? { ...item, semester: newTerm }
            : item
        )
      );

      setSelectedProfileCourses(selectedCourses);
    } else {
      setSelectedProfileCourses(
        selectedProfileCourses.map((item) =>
          item.coursecode === courseinfo.coursecode
            ? { ...item, semester: newTerm }
            : item
        )
      );
    }
  };

  return (
    <>
      <button
        className={
          courseinfo.semester == 8 ? "btn-movecoursehidden" : "btn-movecourse"
        }
        onClick={togglePopup}
      >
        {" "}
        <FontAwesomeIcon icon={faSquareCaretRight} />{" "}
      </button>
    </>
  );
};

//<button className="btn-movecourse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 	&rarr; </button>

export default Btn_moveCourse;
