import React from "react";
import FacultyCard from "../components/FacultyCard/index.jsx"; //import component

export default {
    title: "Faculty Card Example",
    component: FacultyCard,
  };
  
  // template for passing props to storybook components
  const FacultyCardStory = (props) => <FacultyCard {...props} />;
  
  // example of passing props to storybook component
  export const FacultyCard1 = FacultyCardStory.bind({});
  FacultyCard1.args = {
    title: "Cindric",
    text: "body text",
  };
  
  // example of passing props to storybook component
  export const FacultyCard2 = FacultyCardStory.bind({});
  FacultyCard2.args = {
    title: "Kirchmeyer",
    text: "body text",
  };