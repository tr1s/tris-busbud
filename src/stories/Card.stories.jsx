import React from "react";

import { Card } from "./Card";

export default {
  title: "Busbud/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Sellable = Template.bind({});

Sellable.args = {
  variant: "sellable",
};

export const Summary = Template.bind({});
Summary.args = {
  variant: "summary",
};

export const TopPanel = Template.bind({});
TopPanel.args = {
  variant: "topPanel",
};

export const BottomPanel = Template.bind({});
BottomPanel.args = {
  variant: "bottomPanel",
};
