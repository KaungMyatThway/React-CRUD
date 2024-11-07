import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AddContact />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
