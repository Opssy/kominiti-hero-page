import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navigation">
      <div className="navigation__wrapper">
        <div className="navigation__wrapper--logo">
         <a href="/">
           <img src={Logo} alt="logo" />
         </a>
        </div>
        <div></div>
        <div>
          <a href="">
            Marketplc
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9142 1.10286C20.884 0.830494 20.669 0.615344 20.3964 0.585132C15.7596 0.0701475 11.807 1.92501 8.58278 5.24395C7.66008 6.19381 6.85975 7.19921 6.17662 8.16952C5.02046 8.12252 3.73857 8.64559 2.82975 9.55441L1.17234 11.2118C0.98481 11.3994 0.946663 11.6896 1.07926 11.9192C1.21186 12.1489 1.48209 12.2607 1.73844 12.1922C2.12296 12.0889 2.74781 11.9688 3.34809 11.9409C3.56751 11.9307 3.74986 11.9339 3.90138 11.9455C3.53562 12.6489 3.25532 13.2382 3.16239 13.3857C3.01682 13.6174 3.05055 13.9187 3.24403 14.1122L4.20304 15.0712C2.80732 16.9748 2.78428 17.9496 2.78916 18.0877C2.79939 18.3803 3.02751 18.6543 3.40531 18.6543C3.73246 18.6543 4.67073 18.5154 6.3788 17.247L7.38756 18.2557C7.58241 18.4506 7.88682 18.4832 8.11876 18.3343C8.27653 18.2329 8.83119 17.9643 9.49632 17.6167C9.50731 18.1125 9.44002 18.8405 9.29399 19.8272C9.21098 20.3869 9.89137 20.7239 10.2879 20.3274L11.9454 18.67C12.8 17.8154 13.2956 16.546 13.259 15.3552C14.2812 14.6409 15.3446 13.7983 16.3375 12.8247C19.6248 9.60095 21.4226 5.67822 20.9142 1.10286ZM19.7933 1.70589C19.8868 2.96932 19.787 4.19399 19.4963 5.37914C18.7744 5.15179 18.0687 4.70516 17.4314 4.06795C16.7917 3.42815 16.3442 2.71953 16.1177 1.99505C17.3024 1.70864 18.5279 1.61159 19.7933 1.70589ZM3.27165 10.7699L3.6583 10.3831C4.12599 9.91558 4.7342 9.57882 5.33906 9.42746C5.02305 9.92901 4.74137 10.408 4.49296 10.85C4.1092 10.7653 3.68257 10.7496 3.27165 10.7699ZM4.3805 13.5914C4.5073 13.3412 4.66066 13.0275 4.94218 12.4955L5.71351 13.267C5.42649 13.575 5.1674 13.8675 4.93394 14.1447L4.3805 13.5914ZM7.24595 13.3673C7.6729 12.9405 8.08229 12.8625 8.59086 12.8515C8.57973 13.3471 8.50023 13.7704 8.07466 14.196C6.25551 16.0151 5.00856 16.8275 4.26286 17.1901C4.63075 16.43 5.44526 15.168 7.24595 13.3673ZM7.90498 17.1159L7.30073 16.5115C7.57661 16.2771 7.86821 16.0173 8.17583 15.7292L8.9969 16.5503C8.45705 16.8385 8.23183 16.947 7.90498 17.1159ZM11.1165 17.8413L10.6474 18.3105C10.6854 17.7421 10.6723 17.328 10.6186 17.0085C11.0495 16.7659 11.5175 16.4908 12.0079 16.183C11.8682 16.8025 11.554 17.404 11.1165 17.8413ZM10.0636 15.9597L9.01308 14.909C9.79051 14.0536 9.76152 13.2293 9.76152 12.2664C9.76152 11.9427 9.49922 11.6804 9.17558 11.6804C8.27592 11.6804 7.41014 11.6322 6.53291 12.429L5.52964 11.4257C8.26921 6.62182 11.4359 3.58043 14.9938 2.32799C15.2754 3.2394 15.8237 4.11754 16.6028 4.89666C17.3783 5.67226 18.2523 6.21914 19.1597 6.50189C17.9 10.0402 14.8593 13.2049 10.0636 15.9597Z"
                fill="#181818"
              />
              <path
                d="M15.7741 5.72521C14.6317 4.58294 12.7729 4.58294 11.6306 5.72521C10.4883 6.86764 10.4883 8.72646 11.6306 9.86874C12.7729 11.011 14.6317 11.0112 15.7741 9.86874C16.9164 8.72646 16.9164 6.86764 15.7741 5.72521ZM14.9454 9.04003C14.26 9.72546 13.1446 9.72546 12.4593 9.04003C11.7739 8.35461 11.7739 7.23934 12.4593 6.55392C13.1446 5.86864 14.2598 5.86849 14.9454 6.55392C15.6308 7.23934 15.6308 8.35461 14.9454 9.04003Z"
                fill="#181818"
              />
              <path
                d="M20.9142 1.10286C20.884 0.830494 20.669 0.615344 20.3964 0.585132C15.7596 0.0701475 11.807 1.92501 8.58278 5.24395C7.66008 6.19381 6.85975 7.19921 6.17662 8.16952C5.02046 8.12252 3.73857 8.64559 2.82975 9.55441L1.17234 11.2118C0.98481 11.3994 0.946663 11.6896 1.07926 11.9192C1.21186 12.1489 1.48209 12.2607 1.73844 12.1922C2.12296 12.0889 2.74781 11.9688 3.34809 11.9409C3.56751 11.9307 3.74986 11.9339 3.90138 11.9455C3.53562 12.6489 3.25532 13.2382 3.16239 13.3857C3.01682 13.6174 3.05055 13.9187 3.24403 14.1122L4.20304 15.0712C2.80732 16.9748 2.78428 17.9496 2.78916 18.0877C2.79939 18.3803 3.02751 18.6543 3.40531 18.6543C3.73246 18.6543 4.67073 18.5154 6.3788 17.247L7.38756 18.2557C7.58241 18.4506 7.88682 18.4832 8.11876 18.3343C8.27653 18.2329 8.83119 17.9643 9.49632 17.6167C9.50731 18.1125 9.44002 18.8405 9.29399 19.8272C9.21098 20.3869 9.89137 20.7239 10.2879 20.3274L11.9454 18.67C12.8 17.8154 13.2956 16.546 13.259 15.3552C14.2812 14.6409 15.3446 13.7983 16.3375 12.8247C19.6248 9.60095 21.4226 5.67822 20.9142 1.10286ZM19.7933 1.70589C19.8868 2.96932 19.787 4.19399 19.4963 5.37914C18.7744 5.15179 18.0687 4.70516 17.4314 4.06795C16.7917 3.42815 16.3442 2.71953 16.1177 1.99505C17.3024 1.70864 18.5279 1.61159 19.7933 1.70589ZM3.27165 10.7699L3.6583 10.3831C4.12599 9.91558 4.7342 9.57882 5.33906 9.42746C5.02305 9.92901 4.74137 10.408 4.49296 10.85C4.1092 10.7653 3.68257 10.7496 3.27165 10.7699ZM4.3805 13.5914C4.5073 13.3412 4.66066 13.0275 4.94218 12.4955L5.71351 13.267C5.42649 13.575 5.1674 13.8675 4.93394 14.1447L4.3805 13.5914ZM7.24595 13.3673C7.6729 12.9405 8.08229 12.8625 8.59086 12.8515C8.57973 13.3471 8.50023 13.7704 8.07466 14.196C6.25551 16.0151 5.00856 16.8275 4.26286 17.1901C4.63075 16.43 5.44526 15.168 7.24595 13.3673ZM7.90498 17.1159L7.30073 16.5115C7.57661 16.2771 7.86821 16.0173 8.17583 15.7292L8.9969 16.5503C8.45705 16.8385 8.23183 16.947 7.90498 17.1159ZM11.1165 17.8413L10.6474 18.3105C10.6854 17.7421 10.6723 17.328 10.6186 17.0085C11.0495 16.7659 11.5175 16.4908 12.0079 16.183C11.8682 16.8025 11.554 17.404 11.1165 17.8413ZM10.0636 15.9597L9.01308 14.909C9.79051 14.0536 9.76152 13.2293 9.76152 12.2664C9.76152 11.9427 9.49922 11.6804 9.17558 11.6804C8.27592 11.6804 7.41014 11.6322 6.53291 12.429L5.52964 11.4257C8.26921 6.62182 11.4359 3.58043 14.9938 2.32799C15.2754 3.2394 15.8237 4.11754 16.6028 4.89666C17.3783 5.67226 18.2523 6.21914 19.1597 6.50189C17.9 10.0402 14.8593 13.2049 10.0636 15.9597Z"
                stroke="#929292"
                stroke-width="0.5"
              />
              <path
                d="M15.7741 5.72521C14.6317 4.58294 12.7729 4.58294 11.6306 5.72521C10.4883 6.86764 10.4883 8.72646 11.6306 9.86874C12.7729 11.011 14.6317 11.0112 15.7741 9.86874C16.9164 8.72646 16.9164 6.86764 15.7741 5.72521ZM14.9454 9.04003C14.26 9.72546 13.1446 9.72546 12.4593 9.04003C11.7739 8.35461 11.7739 7.23934 12.4593 6.55392C13.1446 5.86864 14.2598 5.86849 14.9454 6.55392C15.6308 7.23934 15.6308 8.35461 14.9454 9.04003Z"
                stroke="#929292"
                stroke-width="0.5"
              />
            </svg>
          </a>
          <a href="/">
            Jobs
          </a>
          <a href='/'>
            Forum
          </a>
          <a href="/">
             Dashboard
          </a>
        </div>
        <div>
            <div>
               <a href="/">
                  Sign in
               </a>
            </div>
            <div>
               <a href="/">
                 Sign up 
               </a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;
