import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["New York", "Tehran", "Tonekabon", "Ramsar", "Vancouver"];
  let selectedItem = 0;
  useState;
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1> list</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              selectedIndex = index;
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
