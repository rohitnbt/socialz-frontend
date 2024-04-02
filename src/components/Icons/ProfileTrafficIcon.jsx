import React from "react";

export const ProfileTrafficIcon = ({ currentPath }) => {
  return (
    <>
      {currentPath === "/profileTraffic" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20.04 6.81994L14.28 2.78994C12.71 1.68994 10.3 1.74994 8.78999 2.91994L3.77999 6.82994C2.77999 7.60994 1.98999 9.20994 1.98999 10.4699V17.3699C1.98999 19.9199 4.05999 21.9999 6.60999 21.9999H17.39C19.94 21.9999 22.01 19.9299 22.01 17.3799V10.5999C22.01 9.24994 21.14 7.58994 20.04 6.81994Z"
            fill="#FFD400"
          />
          <path
            d="M16.8299 11.2698C16.7599 11.0998 16.6199 10.9598 16.4499 10.8898C16.3599 10.8498 16.2699 10.8398 16.1799 10.8398H14.3199C13.9299 10.8398 13.6199 11.1498 13.6199 11.5398C13.6199 11.9298 13.9299 12.2398 14.3199 12.2398H14.4999L12.3899 14.3498L11.3699 12.8298C11.2499 12.6598 11.0699 12.5398 10.8599 12.5198C10.6399 12.4998 10.4499 12.5698 10.2999 12.7198L7.31993 15.6998C7.04993 15.9698 7.04993 16.4098 7.31993 16.6898C7.45993 16.8298 7.62993 16.8898 7.80993 16.8898C7.98993 16.8898 8.16993 16.8198 8.29993 16.6898L10.6799 14.3098L11.6999 15.8298C11.8199 15.9998 11.9999 16.1198 12.2099 16.1398C12.4299 16.1598 12.6199 16.0898 12.7699 15.9398L15.4899 13.2198V13.3998C15.4899 13.7898 15.7999 14.0998 16.1899 14.0998C16.5799 14.0998 16.8899 13.7898 16.8899 13.3998V11.5398C16.8799 11.4398 16.8699 11.3498 16.8299 11.2698Z"
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
            d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 11.5L12.3 15.7L10.7 13.3L7.5 16.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 11.5H16.5V13.5"
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