import React from "react";
import LoginForm from "../components/LoginForm"; //import component

// template for .storybook
export default {
    Title: "test",
    component: LoginForm,
};

// template for passing props to storybook components
const LoginFormStory = (props) => <LoginForm {...props} />;

// example of passing props to storybook component
export const LoginForm1 = LoginFormStory.bind({});
LoginForm1.args = {
  Title: "test1",
};

// example of passing props to storybook component
export const LoginForm1 = LoginFormStory.bind({});
LoginForm2.args = {
    Title: "test2",
};