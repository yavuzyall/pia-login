import React from "react";

const IconHome = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.08.222a.6.6 0 01.84 0l6.75 6.64a.6.6 0 01-.84.856L13 6.902V12.5a.5.5 0 01-.5.5h-10a.5.5 0 01-.5-.5V6.902l-.83.816a.6.6 0 11-.84-.856L7.08.222zm.42 1.27L12 5.918V12h-2V8.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V12H3V5.918l4.5-4.426zM7 12h2V9H7v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default React.memo(IconHome);