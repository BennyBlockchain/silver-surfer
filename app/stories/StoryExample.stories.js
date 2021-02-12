import React from "react";
import Query from "../components/Query/Query";

export default {
  title: "Storybook Example",
  component: Query,
};

const Story = (props) => <Query {...props} />;

export const NameCard = Story.bind({});
NameCard.args = {
  courseID: "CS492",
  professor: "Cindric",
  team: "Silver Foxes",
  project: "Silver Surfer",
};
