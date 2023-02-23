import React, { useState } from "react";

export default function Test() {
  const [name, setName] = useState(Date());

  return (
    <div>
      <form>      
        <input type="date"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      
      <p>
        {name}
      </p>
    </div>
  );
}
