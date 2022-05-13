import React, { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React?",
    description: "React is javascript framework which split code to components",
  },
  {
    title: "Is React popular?",
    description: "React is very popular, a lot of web developers use it",
  },
  {
    title: "What is the main feature of React?",
    description: "split blocks of code to components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade Of Blue",
    value: "blue",
  },
];

export default () => {
  return (
    <div className="ui container">
      <Translate />
    </div>
  );
};
