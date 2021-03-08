import React from "react";
import DropdownMenu from "../components/LoginForm"; //import component

// template for .storybook
export default {
  title: "Login Form Example",
  component: LoginForm,
};

// template for passing props to storybook components
const LoginForm = (props) => <LoginForm {...props} />;

// example of passing props to storybook component
export const LF1 = LoginForm.bind({});
LF1.args = {
  title: "Admin Login",
};
