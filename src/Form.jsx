import React from "react";

function Form({input,setInput,haldalesubmit,  }) {
  return (
    <div>
      <form action="" onSubmit={haldalesubmit}>
        <center>
          <input
            type="text"
            placeholder="Enter name "
            Name="hello"
            onChange={(e) =>
              setInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <br />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter pass "
            onChange={(e) =>
              setInput((prev) => ({ ...prev, pass: e.target.value }))
            }
          />
          <br />
          <br />
          <br />

          <input
            type="email"
            placeholder="Enter email "
            onChange={(e) =>
              setInput((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <br />
          <br />

          <button>submit</button>
          <button type="reset">clear</button>
        </center>
      </form>
      <h1>{input.name}</h1>
      <h1>{input.pass}</h1>
      <h1>{input.email}</h1>
    </div>
  );
}

export default Form;
