import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
function ListGroup(props: Props) {
  let items = ["New York", "Tehran", "Tonekabon", "Ramsar", "Vancouver"];
  let selectedItem = 0;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> list</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
