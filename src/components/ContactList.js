import React from "react";
import avatar from "../images/avatar.png"

function ContactList(props) {
  const contacts = props.contacts;
  return (
    <div>
      <table class="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Photo</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <th className="align-middle" scope="row">{contact.id}</th>
              <td className="align-middle">{contact.name}</td>
              <td className="align-middle"><img src={avatar} style={{ width: "50px" }} alt="avatar" ></img></td>
              <td className="align-middle">{contact.email}</td>
              <td className="align-middle">{contact.phone}</td>
              <td className="align-middle">
                <button className="btn btn-primary">edit</button>
                <button className="btn btn-danger ms-2">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
