import React, { useState, useId } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const id = useId();
  const usernameId = `${id}-username`;
  const passwordId = `${id}-password`;

  return (
    <>
      <form>
        <div>
          <label> Username: 
          <input
            type="text"
            value={username}
            aria-describedby={usernameId}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          </label>
          <p id={usernameId} >
            The Username contain atleast 8-Characters.
          </p>
        </div>
        <div>
          <label> Password: <input
            type="password"
            value={password}
            aria-describedby={passwordId}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
           </label>
           <p id={passwordId} aria-hidden="true">
             The Password should contain atleast one Capital, one Small Alphabets, one Special char, one Number
           </p>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
