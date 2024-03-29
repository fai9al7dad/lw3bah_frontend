import React from "react";

interface common {
  className?: string;
}
export function ArchiveIcon({ className }: common) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
      <path
        fillRule="evenodd"
        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function AcademicCapIcon({ className }: common) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
    </svg>
  );
}

export function BeakerIcon({ className }: common) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const ImgPlaceholder = ({
  className,
  animateChild,
}: {
  className?: string;
  animateChild?: boolean;
}) => {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
      viewBox="0 0 181 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M129.072 28.1185L175.873 74.8777C177.764 76.7672 176.426 80 173.753 80H72.9028H19.1995C20.0292 80 20.8218 79.6564 21.389 79.0509L60.7292 37.0519C61.8877 35.815 63.8401 35.7827 65.039 36.9805L90.5 62.4186L124.831 28.1185C126.002 26.9482 127.9 26.9482 129.072 28.1185Z"
        fill="#FACC15"
      />

      <rect
        x="35"
        width="21"
        height="21"
        rx="10.5"
        fill="#FACC15"
        className={animateChild ? "animate-bounce" : ""}
      />
    </svg>
  );
};
