import React from "react";

export const SettingBoxIcon = ({ currentPath }) => {
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
            d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
            fill="#FFD400"
          />
          <path
            d="M15.5801 19.2501C15.1701 19.2501 14.8301 18.9101 14.8301 18.5001V14.6001C14.8301 14.1901 15.1701 13.8501 15.5801 13.8501C15.9901 13.8501 16.3301 14.1901 16.3301 14.6001V18.5001C16.3301 18.9101 15.9901 19.2501 15.5801 19.2501Z"
            fill="black"
          />
          <path
            d="M15.5801 8.2C15.1701 8.2 14.8301 7.86 14.8301 7.45V5.5C14.8301 5.09 15.1701 4.75 15.5801 4.75C15.9901 4.75 16.3301 5.09 16.3301 5.5V7.45C16.3301 7.86 15.9901 8.2 15.5801 8.2Z"
            fill="black"
          />
          <path
            d="M8.41992 19.25C8.00992 19.25 7.66992 18.91 7.66992 18.5V16.55C7.66992 16.14 8.00992 15.8 8.41992 15.8C8.82992 15.8 9.16992 16.14 9.16992 16.55V18.5C9.16992 18.91 8.83992 19.25 8.41992 19.25Z"
            fill="black"
          />
          <path
            d="M8.41992 10.15C8.00992 10.15 7.66992 9.81 7.66992 9.4V5.5C7.66992 5.09 8.00992 4.75 8.41992 4.75C8.82992 4.75 9.16992 5.09 9.16992 5.5V9.4C9.16992 9.81 8.83992 10.15 8.41992 10.15Z"
            fill="black"
          />
          <path
            d="M15.5801 7.33008C14.0801 7.33008 12.8501 8.55008 12.8501 10.0501C12.8501 11.5501 14.0701 12.7801 15.5801 12.7801C17.0801 12.7801 18.3001 11.5601 18.3001 10.0501C18.3001 8.54008 17.0801 7.33008 15.5801 7.33008Z"
            fill="black"
          />
          <path
            d="M8.41995 11.23C6.91995 11.23 5.69995 12.45 5.69995 13.96C5.69995 15.47 6.91995 16.68 8.41995 16.68C9.91995 16.68 11.15 15.46 11.15 13.96C11.15 12.46 9.92995 11.23 8.41995 11.23Z"
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
            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5701 18.5001V14.6001"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5701 7.45V5.5"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.57 12.65C17.0059 12.65 18.17 11.4859 18.17 10.05C18.17 8.61401 17.0059 7.44995 15.57 7.44995C14.134 7.44995 12.97 8.61401 12.97 10.05C12.97 11.4859 14.134 12.65 15.57 12.65Z"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.42993 18.5V16.55"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.42993 9.4V5.5"
            stroke="black"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.43008 16.5501C9.86602 16.5501 11.0301 15.386 11.0301 13.9501C11.0301 12.5142 9.86602 11.3501 8.43008 11.3501C6.99414 11.3501 5.83008 12.5142 5.83008 13.9501C5.83008 15.386 6.99414 16.5501 8.43008 16.5501Z"
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
