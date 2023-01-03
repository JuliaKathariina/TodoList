import React from 'react';
import useFormInput from "../hooks/useFormInput";

function Form (props) {

  const { value, handleChange, handleSubmit } = useFormInput(
    '',
    props.createTodo,
  );
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label>New todo</label>
      <input value={value} onChange={handleChange} type="text" placeholder="" />
      <button>Add</button>
    </form>
  );
}
export default Form;
