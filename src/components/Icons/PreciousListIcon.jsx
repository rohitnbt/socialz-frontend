import React from "react";

export const PreciousListIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/preciousList" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
            fill="#FFD400"
          />
          <path
            d="M7 14.3499C6.59 14.3499 6.25 14.0099 6.25 13.5999V10.3999C6.25 9.9899 6.59 9.6499 7 9.6499C7.41 9.6499 7.75 9.9899 7.75 10.3999V13.6099C7.75 14.0199 7.41 14.3499 7 14.3499Z"
            fill="black"
          />
          <path
            d="M12 16.0899C11.59 16.0899 11.25 15.7499 11.25 15.3399V8.65991C11.25 8.24991 11.59 7.90991 12 7.90991C12.41 7.90991 12.75 8.24991 12.75 8.65991V15.3399C12.75 15.7499 12.41 16.0899 12 16.0899Z"
            fill="black"
          />
          <path
            d="M17 14.3499C16.59 14.3499 16.25 14.0099 16.25 13.5999V10.3999C16.25 9.9899 16.59 9.6499 17 9.6499C17.41 9.6499 17.75 9.9899 17.75 10.3999V13.6099C17.75 14.0199 17.41 14.3499 17 14.3499Z"
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
            d="M7 10.74V13.94"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 9V15.68"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 10.74V13.94"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
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
