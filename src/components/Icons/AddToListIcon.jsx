import React from "react";

export const AddToListIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/help-and-support" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.97 16H18.03C16.76 16 16 16.76 16 18.03V20.97C16 22.24 16.76 23 18.03 23H20.97C22.24 23 23 22.24 23 20.97V18.03C23 16.76 22.24 16 20.97 16ZM21.63 18.45L19.26 21.22C19.17 21.33 19.03 21.4 18.89 21.4C18.88 21.4 18.88 21.4 18.87 21.4C18.73 21.4 18.6 21.35 18.5 21.25L17.41 20.17C17.21 19.97 17.21 19.64 17.41 19.44C17.61 19.24 17.94 19.23 18.14 19.44L18.84 20.13L20.84 17.79C21.03 17.57 21.35 17.55 21.57 17.73C21.79 17.91 21.81 18.24 21.63 18.45Z"
            fill="black"
          />
          <path
            d="M16 20.97V18.03C16 16.76 16.76 16 18.03 16H20.97C21.37 16 21.71 16.08 22 16.22C22 16.21 22 16.2 22 16.18V7.81C22 4.17 19.83 2 16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C16.19 22 16.2 22 16.22 22C16.08 21.71 16 21.37 16 20.97Z"
            fill="#FFD400"
          />
          <path
            d="M7 14.25C6.59 14.25 6.25 13.91 6.25 13.5V10.5C6.25 10.09 6.59 9.75 7 9.75C7.41 9.75 7.75 10.09 7.75 10.5V13.5C7.75 13.91 7.41 14.25 7 14.25Z"
            fill="black"
          />
          <path
            d="M12 14.25C11.59 14.25 11.25 13.91 11.25 13.5V10.5C11.25 10.09 11.59 9.75 12 9.75C12.41 9.75 12.75 10.09 12.75 10.5V13.5C12.75 13.91 12.41 14.25 12 14.25Z"
            fill="black"
          />
          <path
            d="M17 14.25C16.59 14.25 16.25 13.91 16.25 13.5V10.5C16.25 10.09 16.59 9.75 17 9.75C17.41 9.75 17.75 10.09 17.75 10.5V13.5C17.75 13.91 17.41 14.25 17 14.25Z"
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
            d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H13"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 19.43L17.58 21L21 17"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 10.5V13.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5V13.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 10.5V13.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};
