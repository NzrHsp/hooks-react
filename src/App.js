import React from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

export default () => {
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
};
