import React from "react";

export const MuteAndBlockIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/mute-and-block" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.25 7.40997V16.59C19.25 18.31 18.63 19.6 17.52 20.22C17.07 20.47 16.57 20.59 16.05 20.59C15.25 20.59 14.39 20.32 13.51 19.77L10.59 17.94C10.39 17.82 10.16 17.75 9.93 17.75H9V6.24997H9.93C10.16 6.24997 10.39 6.17997 10.59 6.05997L13.51 4.22997C14.97 3.31997 16.4 3.15997 17.52 3.77997C18.63 4.39997 19.25 5.68997 19.25 7.40997Z"
            fill="#FFD400"
          />
          <path
            d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5.5 10V14C5.5 16 6.5 17 8.5 17H9.93C10.3 17 10.67 17.11 10.99 17.3L13.91 19.13C16.43 20.71 18.5 19.56 18.5 16.59V7.41003C18.5 4.43003 16.43 3.29003 13.91 4.87003L10.99 6.70003C10.67 6.89003 10.3 7.00003 9.93 7.00003H8.5C6.5 7.00003 5.5 8.00003 5.5 10Z"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </>
  );
};
