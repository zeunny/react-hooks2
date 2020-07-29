import React, { useState } from "react";

const content = [
  {
    tab: "section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const UseTabs = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button key={index} onClick={() => changeItem(index)}>
          {section.tab}
        </button>
      ))}
      <br />
      {currentItem.content}
    </div>
  );
};

export default UseTabs;
