import React from "react";
import { Button } from "../../@/components/ui/button";

// const Button = ({ children }) => {
//   return (
//     <button
//       className={
//         "text-black-300 hover:bg-yellow-500 hover:rounded-lg p-2   text-4xl font-bold hover:text-white"
//       }
//     >
//       {children}
//     </button>
//   );
// };

export function ButtonGhost({ children }) {
  return (
    <Button variant="ghost" asChild>
      {children}
    </Button>
  );
}
