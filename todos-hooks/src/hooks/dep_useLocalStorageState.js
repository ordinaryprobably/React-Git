// import { useEffect, useState } from "react";

// export default (keyStr, initialValue) => {
//   const [state, setState] = useState(() => {
//     let value;
    
//     try{
//       value = JSON.parse(window.localStorage.getItem(keyStr) || String(initialValue));
//     }
//     catch(error) {
//       value = initialValue;
//     }

//     return value;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(keyStr, JSON.stringify(state));
//   }, [state]);

//   return [state, setState];
// }