import React from "react";

import { Label } from "./Label";

export default {
  title: "Busbud/Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  travelType: "Train",
  duration: "10h 6m",
};

export const WithPassangers = Template.bind({});

WithPassangers.args = {
  variant: "summary",
  travelType: "Bus",
  duration: "10h 6m",
  numberOfPassengers: 4,
};
