import React from "react";

export default function HoverToolTip({
  children,
  content = "Tooltip 💡",
  showToolTip = true,
}: {
  children: React.ReactNode;
  content: React.ReactNode;
  showToolTip?: boolean;
}) {
  return (
    <div className="tooltip group">
      {children}
      <span
        className={`tooltip-content  ${
          showToolTip ? "group-hover:scale-100" : ""
        }`}
      >
        {content}
      </span>
    </div>
  );
}
