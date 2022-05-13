import React, { useState } from "react";

import Header from "./components/Header";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

import Route from "./components/Route";

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
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <div className="ui container">
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a Color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};
