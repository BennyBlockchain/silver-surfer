import React from "react";
import FacultyCard from "../components/FacultyCard/index.jsx"; //import component
//import images:
import cindric from "../professor_images/cindricbb.jpg"
import kirchmeyer from "../professor_images/kirchmjf.jpg"

export default {
    title: "Faculty Card",
    text: "card",
    component: FacultyCard,
  };
  
  // template for passing props to storybook components
  const FacultyCardStory = (props) => <FacultyCard {...props} />;
  
  // example of passing props to storybook component
  export const Cindric = FacultyCardStory.bind({});
  Cindric.args = {
    imageName: cindric,
    title: "Cindric",
    text: "body text",
  };
  
  // example of passing props to storybook component
  export const Kirchmeyer = FacultyCardStory.bind({});
  Kirchmeyer.args = {
    imageName: kirchmeyer,
    title: "Kirchmeyer",
    text: "body text",
  };