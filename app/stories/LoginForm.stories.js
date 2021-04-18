import React from "react";
import LoginForm from "../components/LoginForm"; //import component

// template for .storybook
export default {
  title: "Login Form",
  component: LoginForm,
};

// template for passing props to storybook components
const LoginFormStory = (props) => <LoginForm {...props} />;

// example of passing props to storybook component
export const LF1 = LoginFormStory.bind({});
LF1.args = {
  title: "Admin Login",
};
