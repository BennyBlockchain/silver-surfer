import React from "react";
import StoryExample from "./StoryExample";

export default {
  title: "Storybook Example",
  component: StoryExample,
};

const Story = (props) => <StoryExample {...props} />;

export const NameCard = Story.bind({});
NameCard.args = {
  courseID: "CS492",
  professor: "Cindric",
  team: "Silver Foxes",
  project: "Silver Surfer",
};
