function ListGroup() {
  const items = ["New York", "Tehran", "Tonekabon", "Ramsar", "Vancouver"];
  return (
    <>
      <h1> list</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
