import { useTabs } from "./utils";

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
