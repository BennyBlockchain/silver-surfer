import React from "react";
import SilverCard from "../components/SilverCard";

export default {
  title: "Silver Card",
  component: SilverCard,
};

const Story = (props) => <SilverCard {...props} />;

export const NameCard = Story.bind({});
NameCard.args = {
  title: "Ben",
};
