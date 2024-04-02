import React from "react";

export const AddChatIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath !== "/help-and-support" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V8.52C21 5.06 18.93 3 15.48 3Z"
            fill="#FFD400"
          />
          <path
            d="M21.02 2.98003C19.23 1.18003 17.48 1.14003 15.64 2.98003L14.51 4.10003C14.41 4.20003 14.38 4.34003 14.42 4.47003C15.12 6.92003 17.08 8.88003 19.53 9.58003C19.56 9.59003 19.61 9.59003 19.64 9.59003C19.74 9.59003 19.84 9.55003 19.91 9.48003L21.02 8.36003C21.93 7.45003 22.38 6.58003 22.38 5.69003C22.38 4.79003 21.93 3.90003 21.02 2.98003Z"
            fill="black"
          />
          <path
            d="M17.86 10.4201C17.59 10.2901 17.33 10.1601 17.09 10.0101C16.89 9.89009 16.69 9.76009 16.5 9.62009C16.34 9.52009 16.16 9.37009 15.98 9.22009C15.96 9.21009 15.9 9.16009 15.82 9.08009C15.51 8.83009 15.18 8.49009 14.87 8.12009C14.85 8.10009 14.79 8.04009 14.74 7.95009C14.64 7.84009 14.49 7.65009 14.36 7.44009C14.25 7.30009 14.12 7.10009 14 6.89009C13.85 6.64009 13.72 6.39009 13.6 6.13009C13.47 5.85009 13.37 5.59009 13.28 5.34009L7.89998 10.7201C7.54998 11.0701 7.20998 11.7301 7.13998 12.2201L6.70998 15.2001C6.61998 15.8301 6.78998 16.4201 7.17998 16.8101C7.50998 17.1401 7.95998 17.3101 8.45998 17.3101C8.56998 17.3101 8.67998 17.3001 8.78998 17.2901L11.76 16.8701C12.25 16.8001 12.91 16.4701 13.26 16.1101L18.64 10.7301C18.39 10.6501 18.14 10.5401 17.86 10.4201Z"
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
            d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.04 3.02001L8.16 10.9C7.86 11.2 7.56 11.79 7.5 12.22L7.07 15.23C6.91 16.32 7.68 17.08 8.77 16.93L11.78 16.5C12.2 16.44 12.79 16.14 13.1 15.84L20.98 7.96001C22.34 6.60001 22.98 5.02001 20.98 3.02001C18.98 1.02001 17.4 1.66001 16.04 3.02001Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.91 4.1499C15.58 6.5399 17.45 8.4099 19.85 9.0899"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
