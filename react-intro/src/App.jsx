import React, { useState } from "react";
import Products from './products'

function App() {
  var [a, b] = useState(10);
  return (
    <div className="w-full h-screen bg-zinc-900 text-white p-5">
      <Products age="21" data={{age: 20, name:"WHYBRO"}}/>
      {/* <h1>{a}</h1>
      <button onClick={()=>b(a+10)} className="px-3 py-1 bg-green-900 rounded-md text-xl">Click no</button> */}
    </div>
  );
}

export default App;

// import React from "react";
// import Products from './products'

// function App() {
//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-700 p-4">
//         <div className="w-44 h-32 rounded-xl bg-red-600 text-white">HElloo</div>
//         <Products/>
//       </div>
//     </>
//   );
// }

// export default App;
