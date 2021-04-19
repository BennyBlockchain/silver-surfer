import React from "react";
import CourseInfo from "../components/CourseInfo/index.jsx"; //import component
//import images:
import test1 from "../assignment_images/test1.jpeg";
import test2 from "../assignment_images/test2.jpeg";

export default {
  title: "Course Info Card",
  component: CourseInfo,
};

// template for passing props to storybook components
const CourseInfoStory = (props) => <CourseInfo {...props} />;

// Test 1:
export const Test1 = CourseInfoStory.bind({});
Test1.args = {
  title: "Comp Prog & Solving",
  course_id: "220",
  about: "This is a description.",
};

// Test 2:
// export const Test2 = CourseInfoStory.bind({});
// Test2.args = {
//   imageName: test2,
//   title: "Test 2",
//   dueMonth: "March",
//   dueDate: "31st",
//   dueTime: "3:40",
//   dayOrNight: "PM",
//   desc: "Link to library page.",
//   link: "https://www.mountunion.edu/current-students",
//   linkTitle: "UMU Library",
// };
