import React from 'react';
export const Form = ({ onSubmit }) => {
return (
<form onSubmit={onSubmit}>
  <div className="form-group">
      <label htmlFor="name">Room Name: </label>
    <input className="form-control" id="name" />
  </div> 
  
  <div className="form-group">
    <label htmlFor="email">Description: </label>
    <textarea rows="4" cols="50" className="form-control" id="email"
     
    />
</div>
  <div>
    <button className="communityActionBtn" type="submit">
      Submit
    </button>
</div>
</form>
);
};
export default Form;