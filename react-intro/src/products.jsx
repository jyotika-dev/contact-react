import React, { useState } from "react";

function products({ age, data }) {
  const [a, b] = useState(false);
  return (
    <div className="text-white w-full h-60 bg-zinc-800">
      <h4 className={`${a===false?"text-red-400":"text-blue-400" }`}>{a === false ? "hello" : "heyya"}</h4>
      <button onClick={()=>b(!a)}>Change</button>

      {/* <h1>{age}</h1>    
<h1>{data.age}</h1>
<h1>{data.name}</h1> */}
    </div>
  );
}

export default products;
