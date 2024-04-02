import React from "react";

export const SupportIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/Support" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17 18.4299H13L8.54999 21.39C7.88999 21.83 7 21.3599 7 20.5599V18.4299C4 18.4299 2 16.4299 2 13.4299V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.4299C22 16.4299 20 18.4299 17 18.4299Z"
            fill="#FFD400"
          />
          <path
            d="M12.0001 12.1099C11.5901 12.1099 11.2501 11.7699 11.2501 11.3599V11.1499C11.2501 9.9899 12.1 9.41989 12.42 9.19989C12.79 8.94989 12.91 8.7799 12.91 8.5199C12.91 8.0199 12.5001 7.60986 12.0001 7.60986C11.5001 7.60986 11.0901 8.0199 11.0901 8.5199C11.0901 8.9299 10.7501 9.2699 10.3401 9.2699C9.93009 9.2699 9.59009 8.9299 9.59009 8.5199C9.59009 7.1899 10.6701 6.10986 12.0001 6.10986C13.3301 6.10986 14.41 7.1899 14.41 8.5199C14.41 9.6599 13.5701 10.2299 13.2601 10.4399C12.8701 10.6999 12.7501 10.8699 12.7501 11.1499V11.3599C12.7501 11.7799 12.4101 12.1099 12.0001 12.1099Z"
            fill="black"
          />
          <path
            d="M12 14.6001C11.58 14.6001 11.25 14.2601 11.25 13.8501C11.25 13.4401 11.59 13.1001 12 13.1001C12.41 13.1001 12.75 13.4401 12.75 13.8501C12.75 14.2601 12.42 14.6001 12 14.6001Z"
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
            d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0001 11.3599V11.1499C12.0001 10.4699 12.4201 10.1099 12.8401 9.81989C13.2501 9.53989 13.66 9.1799 13.66 8.5199C13.66 7.5999 12.9201 6.85986 12.0001 6.85986C11.0801 6.85986 10.3401 7.5999 10.3401 8.5199"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9955 13.75H12.0045"
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
