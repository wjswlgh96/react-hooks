import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I`m the content of the Section1",
  },
  {
    tab: "Section 2",
    content: "I`m the content of the Section2",
  },
];

const useTabs = (initTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      {content.map((section, idx) => (
        <button key={idx} onClick={() => changeItem(idx)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
