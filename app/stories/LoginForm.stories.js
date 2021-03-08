import React from "react";
import LoginForm from "../components/LoginForm"; //import component

// template for .storybook
export default {
    Row: "test",
    component: LoginForm,
};

// template for passing props to storybook components
const LoginFormStory = (props) => <LoginForm {...props} />;

// example of passing props to storybook component
export const LoginForm1 = LoginFormStory.bind({});
LoginForm1.args = {
  Row: "test1",
  //list: ["temp", "fake"],
};

// example of passing props to storybook component
export const LoginForm1 = LoginFormStory.bind({});
LoginForm2.args = {
    Row: "test2",
  //list: ["trial", "error", "testing"],
};