import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(firstName.length) {
      const formData= {firstName: firstName, lastName: lastName}
      const dataArr = [...submittedData, formData]
      setSubmittedData(dataArr)
      setFirstName("")
      setLastName("")
      setErrors([])
    } else {
      setErrors(["First name is required!"])
    }
  }

  const listofSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {errors.length ? errors.map((error, index) => (
        <p key={index} style={{color: "red"}}>
          {error}
        </p>)) : null}
      <h3>Submissions</h3>
      {listofSubmissions}
    </div>
  );
}

export default Form;
