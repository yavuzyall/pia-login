import React from "react";

const IconPost = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
      <path d="M16 15H9v-2h7v2m3-4H9V9h10v2m0-4H9V5h10v2M3 5v16h16v2H3a2 2 0 01-2-2V5h2m18-4a2 2 0 012 2v14c0 1.11-.89 2-2 2H7a2 2 0 01-2-2V3c0-1.11.89-2 2-2h14M7 3v14h14V3H7z" />
    </svg>
  );
};

export default React.memo(IconPost);