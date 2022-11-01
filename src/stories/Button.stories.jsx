import React from "react";

import { Button } from "./Button";

export default {
  title: "Busbud/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Sellable = Template.bind({});

Sellable.args = {
  variant: "sellable",
  text: "$45",
};

export const Summary = Template.bind({});
Summary.args = {
  variant: "summary",
  text: "Itinerary",
};

export const TopPanel = Template.bind({});
TopPanel.args = {
  variant: "topPanel",
  text: "$45",
};
