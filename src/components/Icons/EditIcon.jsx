import React from "react";

export const EditIcon = ({ currentPath }) => {
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
            d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
            fill="#FFD400"
          />
          <path
            d="M16.5499 7.45995C15.2899 6.19995 14.0699 6.16995 12.7799 7.45995L11.9899 8.24995C11.9199 8.31995 11.9 8.41995 11.92 8.50995C12.41 10.2299 13.7799 11.5999 15.4999 12.0899C15.5199 12.0999 15.5499 12.0999 15.5799 12.0999C15.6499 12.0999 15.7199 12.0699 15.7699 12.0199L16.5499 11.2399C17.1899 10.5999 17.4999 9.98994 17.4999 9.36995C17.4999 8.71994 17.1899 8.09995 16.5499 7.45995Z"
            fill="black"
          />
          <path
            d="M14.3399 12.6699C14.1499 12.5799 13.9699 12.4899 13.7999 12.3799C13.6599 12.2999 13.52 12.2099 13.39 12.1099C13.28 12.0399 13.1499 11.9399 13.0199 11.8299C12.9999 11.8199 12.9599 11.7899 12.9099 11.7299C12.6999 11.5499 12.4599 11.3099 12.2399 11.0599C12.2199 11.0499 12.1899 10.9999 12.1499 10.9399C12.0799 10.8599 11.9799 10.7299 11.8799 10.5899C11.7999 10.4899 11.7099 10.3499 11.6299 10.2099C11.5299 10.0399 11.4299 9.85987 11.3499 9.67987C11.2599 9.47987 11.1899 9.29987 11.1199 9.11987L7.34995 12.8899C7.09995 13.1399 6.86995 13.5999 6.81995 13.9399L6.52994 16.0199C6.45994 16.4599 6.58993 16.8699 6.85993 17.1499C7.08993 17.3799 7.40995 17.4999 7.75995 17.4999C7.83995 17.4999 7.90993 17.4899 7.98993 17.4799L10.07 17.1899C10.41 17.1399 10.8699 16.9099 11.1199 16.6599L14.89 12.8899C14.71 12.8199 14.5299 12.7499 14.3399 12.6699Z"
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
            d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
            stroke="black"
            strokeidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.91 7.83991L7.72004 13.0299C7.52004 13.2299 7.33004 13.6199 7.29004 13.8999L7.01004 15.8799C6.91004 16.5999 7.41004 17.0999 8.13004 16.9999L10.11 16.7199C10.39 16.6799 10.78 16.4899 10.98 16.2899L16.17 11.0999C17.06 10.2099 17.49 9.16991 16.17 7.84991C14.85 6.51991 13.81 6.93991 12.91 7.83991Z"
            stroke="black"
            strokeWidth="1.5"
            strokeiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1699 8.57983C12.6099 10.1498 13.8399 11.3898 15.4199 11.8298"
            stroke="black"
            strokeWidth="1.5"
            strokeiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};