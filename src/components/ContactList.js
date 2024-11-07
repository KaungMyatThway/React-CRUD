import React from "react";

function ContactList() {
  return (
    <div>
      <table class="table">
        <thead className="table-primary">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
             
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><button>click</button></td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
