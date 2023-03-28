import ListGroup from "./components/ListGroup";

let items = ["New York", "Tehran", "Tonekabon", "Ramsar", "Vancouver"];

function App() {
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
