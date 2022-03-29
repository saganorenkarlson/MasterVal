import React from "react";
import SearchHeader from "../components/SearchHeader";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import DisplayCourse from "../components/DisplayCourse";
import "./Browse.css";

const Browse = ({
  courses,
  searchHandler,
  semesterHandler,
  selectedCourses,
  setSelectedCourses,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  return (
    <>
      <SearchHeader
        searchHandler={searchHandler}
        semesterHandler={semesterHandler}
      />
      <div className="wrapper">
        <div className="left-section">
          <FilterMenu
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>
        <div className="right-section">
          {courses.map((course) => (
            <DisplayCourse
              courseinfo={course}
              homePage={true}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Browse;
