import ConditionalRendering from "./components/ConditionalRendering";
import EventHandling from "./components/EventHandling";
import FormHandling from "./components/FormHandling";
import ListRendering from "./components/ListRendering";
import UseState from "./components/UseState";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <UseState />
      <ConditionalRendering isLoggedIn={true} />
      <ListRendering />
      <EventHandling />
      <FormHandling />
    </>
  );
}

export default App;
