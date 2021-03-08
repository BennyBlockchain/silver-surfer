import React from "react";
import Form from "../components/DropdownMenu"; //import component

// template for .storybook
export default {
  component: LoginForm,
};

// template for passing props to storybook components
const LoginFormStory = (props) => <LoginForm {...props} />;

// example of passing props to storybook component
export const LoginForm1 = LoginFormStory.bind({});
LoginForm1.args = {
  //title: "Majors",
  //list: ["temp", "fake"],
};

// example of passing props to storybook component
export const LoginForm1 = LoginFormStory.bind({});
LoginForm2.args = {
  //title: "Minors",
  //list: ["trial", "error", "testing"],
};