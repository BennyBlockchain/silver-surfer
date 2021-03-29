import React from "react";
import Departments from "../components/Departments/departments.jsx"; //import component

export default {
    title: "Departments Card",
    component: Departments,
  };
  
  // template for passing props to storybook components
  const DepartmentStory = (props) => <Departments {...props} />;
  
  // CS major:
  export const CSmajor = DepartmentStory.bind({});
  CSmajor.args = {
    name: "Computer Science",
    type: "major",
    courses: "courses",
    about: "about",
  };
  
