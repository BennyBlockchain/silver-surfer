import React from "react";
import Form from "../components/DropdownMenu"; //import component

// template for .storybook
export default {
  title: "Dropdown Menu Example",
  component: DropdownMenu,
};

// template for passing props to storybook components
const DropdownStory = (props) => <DropdownMenu {...props} />;

// example of passing props to storybook component
export const DDM1 = DropdownStory.bind({});
DDM1.args = {
  title: "Majors",
  //list: ["temp", "fake"],
};

// example of passing props to storybook component
export const DDM2 = DropdownStory.bind({});
DDM2.args = {
  title: "Minors",
  //list: ["trial", "error", "testing"],
};