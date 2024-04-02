import React from "react";

export const AudioIcon = ({ currentPath }) => {
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
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="#FFD400"
          />
          <path
            d="M6 14.8901C5.59 14.8901 5.25 14.5501 5.25 14.1401V9.8501C5.25 9.4401 5.59 9.1001 6 9.1001C6.41 9.1001 6.75 9.4401 6.75 9.8501V14.1401C6.75 14.5601 6.41 14.8901 6 14.8901Z"
            fill="black"
          />
          <path
            d="M9 16.3199C8.59 16.3199 8.25 15.9799 8.25 15.5699V8.42993C8.25 8.01993 8.59 7.67993 9 7.67993C9.41 7.67993 9.75 8.01993 9.75 8.42993V15.5699C9.75 15.9899 9.41 16.3199 9 16.3199Z"
            fill="black"
          />
          <path
            d="M12 17.75C11.59 17.75 11.25 17.41 11.25 17V7C11.25 6.59 11.59 6.25 12 6.25C12.41 6.25 12.75 6.59 12.75 7V17C12.75 17.41 12.41 17.75 12 17.75Z"
            fill="black"
          />
          <path
            d="M15 16.3199C14.59 16.3199 14.25 15.9799 14.25 15.5699V8.42993C14.25 8.01993 14.59 7.67993 15 7.67993C15.41 7.67993 15.75 8.01993 15.75 8.42993V15.5699C15.75 15.9899 15.41 16.3199 15 16.3199Z"
            fill="black"
          />
          <path
            d="M18 14.8901C17.59 14.8901 17.25 14.5501 17.25 14.1401V9.8501C17.25 9.4401 17.59 9.1001 18 9.1001C18.41 9.1001 18.75 9.4401 18.75 9.8501V14.1401C18.75 14.5601 18.41 14.8901 18 14.8901Z"
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
            d="M6 9.85986V14.1499"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 8.42993V15.5699"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 7V17"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 8.42993V15.5699"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 9.85986V14.1499"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </>
  );
};
