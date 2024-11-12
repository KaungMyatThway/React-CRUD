import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <AddContact onAddContact={handleAddContact} />
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default App;
