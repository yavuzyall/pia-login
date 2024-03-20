import React from "react";

const IconTodoList = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M4 5 H8 A1 1 0 0 1 9 6 V10 A1 1 0 0 1 8 11 H4 A1 1 0 0 1 3 10 V6 A1 1 0 0 1 4 5 z" />
      <path d="M3 17l2 2 4-4M13 6h8M13 12h8M13 18h8" />
    </svg>
  );
};

export default React.memo(IconTodoList);