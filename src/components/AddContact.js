import React from 'react'

function AddContact() {
  return (
    <div className='py-5'>
        <h3>Add Contact</h3>
        <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" />
        </div>
        
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Contact</button>
      </form>

    </div>
  )
}

export default AddContact