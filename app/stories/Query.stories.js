import React from "react";
import Query from "../components/Query/Query"; //import component

// template for .storybook
export default {
  title: "Storybook Example",
  component: Query,
};

// template for passing props to storybook components
const QueryStory = (props) => <Query {...props} />;

// example of passing props to storybook component
export const Query1 = QueryStory.bind({});
Query1.args = {
  courseID: "CS492",
  professor: "Cindric",
  team: "Silver Foxes",
  project: "Silver Surfer",
};

// example of passing props to storybook component
export const Query2 = QueryStory.bind({});
Query2.args = {
  courseID: "CS492",
  professor: "Foo",
  team: "Bar",
  project: "Foo Bar",
};
