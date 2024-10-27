import React, { useState } from "react";

function Task() {
  const [input, setInput] = useState({
    name: "",
    pass: "",
    email: "",
  });

  const [data, setData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted successfully");

    setData({
      name: input.name,
      pass: input.pass,
      email: input.email,
    });
  }


  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <center>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter password"
            name="pass"
            
            onChange={(e) =>
              setInput((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </center>
      </form>
      <h1>{data.name}</h1>
      <h1>{data.pass}</h1>
      <h1>{data.email}</h1>
    </div>
  );
}

export default Task;
