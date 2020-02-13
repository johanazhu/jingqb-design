import * as React from 'react';

const ResultEmpty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="100%"
    width="100%"
    fill="#ccc"
    viewBox="0 0 1024 1024"
  >
    <path d="M421.65,572.49a55.9,55.9,0,1,0,55.9-55.9A55.93,55.93,0,0,0,421.65,572.49Zm86.1,0a30.1,30.1,0,1,1-30.1-30.1h0A30.07,30.07,0,0,1,507.75,572.49Z" />
    <path d="M658.35,327.19a81.75,81.75,0,1,0,81.7,81.8h0A81.94,81.94,0,0,0,658.35,327.19Zm0,137.7a55.9,55.9,0,1,1,55.9-55.9h0a56,56,0,0,1-55.9,55.9Z" />
    <path d="M266.75,211c0,2.2.1,4.4.3,6.5l.1,2h0A142,142,0,0,0,408.75,353c78.3,0,142-63.7,142-142a142.16,142.16,0,0,0-142-142C330.45,69.09,266.75,132.79,266.75,211Zm142-116.1a115.86,115.86,0,0,1,102.8,62.2,113.78,113.78,0,0,1,13.3,53.9,116.09,116.09,0,0,1-232,7h0l-.1-2.2c-.1-1.6-.2-3.2-.2-4.8a116.28,116.28,0,0,1,116.2-116.1Z" />
    <path d="M368.55,464.89a12.91,12.91,0,1,0,.8-25.8h-24.6a12.91,12.91,0,0,0-.8,25.8h24.6Z" />
    <path d="M262.45,439.09a12.91,12.91,0,0,0,0,25.8h23.9a12.91,12.91,0,0,0,0-25.8Z" />
    <path d="M315.55,517.89a12.93,12.93,0,0,0,12.9-12.9h0v-23.9a12.9,12.9,0,1,0-25.8,0V505a12.8,12.8,0,0,0,12.9,12.9Z" />
    <path d="M315.55,435.79a12.93,12.93,0,0,0,12.9-12.9V399a12.9,12.9,0,1,0-25.8,0h0v23.9A12.87,12.87,0,0,0,315.55,435.79Z" />
    <path d="M813.25,550.89a12.91,12.91,0,0,0,0-25.8h-33.5a12.91,12.91,0,0,0,0,25.8Z" />
    <path d="M692.75,525.09a12.91,12.91,0,0,0-.8,25.8h34.2a12.91,12.91,0,1,0,.8-25.8h-34.2Z" />
    <path d="M753,551.89a12.93,12.93,0,0,0-12.9,12.9h0v33.5a12.9,12.9,0,1,0,25.8,0v-33.5A12.93,12.93,0,0,0,753,551.89Z" />
    <path d="M765.85,477.79a12.9,12.9,0,1,0-25.8,0v33.4a12.9,12.9,0,1,0,25.8,0Z" />
    <path d="M287.75,91.09a12.94,12.94,0,0,0,18.3-18.3l-51.6-51.6a12.94,12.94,0,0,0-18.3,18.3Z" />
    <path d="M331.35,77.69a12.93,12.93,0,0,0,12.9-12.9V13.09a12.91,12.91,0,1,0-25.8-.8v52.3A12.91,12.91,0,0,0,331.35,77.69Z" />
    <path d="M228.05,129.29h51.6a12.9,12.9,0,1,0,0-25.8h-51.6a12.9,12.9,0,0,0,0,25.8Z" />
    <path d="M946.55,668.19h0a447.61,447.61,0,0,0,8.6-87.2c0-219.7-163.9-408.3-381.1-438.8a12.93,12.93,0,0,0-3.6,25.6c204.6,28.7,358.9,206.4,358.9,413.3a411.64,411.64,0,0,1-7.2,76.7c-19.4,11.9-40.8,22.3-66,22.3-39.5,0-58.9-11.7-79.4-24-21.6-13-46.1-27.7-92.7-27.7s-71,14.7-92.7,27.7c-20.5,12.3-40,24-79.4,24s-58.9-11.7-79.4-24c-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.7c-20.6,12.3-39.9,24-79.4,24-25.2,0-46.6-10.3-66-22.3a429.31,429.31,0,0,1-7.2-76.7c0-125.4,55.8-243,153-322.7a12.93,12.93,0,1,0-16.4-20c-103.1,84.6-162.3,209.5-162.3,342.7a447.61,447.61,0,0,0,8.6,87.2l.1.3h0a440.37,440.37,0,0,0,60.4,150h0l.3.4h0a442.65,442.65,0,0,0,95,106.5l.2.1h.1a442.81,442.81,0,0,0,557.2,0l.2-.1.1-.1h0A443.67,443.67,0,0,0,886,819h0l.3-.4a440.37,440.37,0,0,0,60.4-150h0Zm-686.1,10c20.5-12.3,40-24,79.4-24s58.9,11.7,79.4,24c21.6,13,46.1,27.7,92.7,27.7s71.1-14.7,92.7-27.7c20.6-12.3,40-24,79.4-24s58.9,11.7,79.4,24c21.6,13,46.1,27.7,92.7,27.7,21.9,0,41.2-6.1,58.2-14.4a411.76,411.76,0,0,1-47.1,108.2,82.87,82.87,0,0,1-11.1.8c-39.4,0-58.9-11.7-79.4-24-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.6c-20.5,12.3-40,24-79.4,24s-58.9-11.7-79.4-24c-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.7c-20.6,12.3-39.9,24-79.4,24a82.87,82.87,0,0,1-11.1-.8,411.76,411.76,0,0,1-47.1-108.2c17.1,8.2,36.4,14.3,58.2,14.3C214.45,705.79,238.85,691.09,260.45,678.19Zm3.9,238.7c19.2-11.5,38.6-21.7,75.6-21.7,39.4,0,58.9,11.7,79.4,24,21.6,13,46.1,27.7,92.7,27.7s71.1-14.7,92.7-27.7c20.6-12.3,40-24,79.4-24,37,0,56.4,10.3,75.6,21.7a417.06,417.06,0,0,1-495.4,0Zm517-17.2c-1.5-.9-3.1-1.8-4.6-2.7-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.6c-20.5,12.3-40,24-79.4,24s-58.9-11.7-79.4-24c-21.6-13-46.1-27.7-92.7-27.7s-71.1,14.7-92.7,27.7l-4.5,2.7a419.89,419.89,0,0,1-68.2-73.4c42.3-1.3,65.5-15.2,86-27.5s40-24,79.4-24,58.9,11.7,79.4,24c21.6,13,46.1,27.7,92.7,27.7s71.1-14.7,92.7-27.7c20.6-12.3,40-24,79.4-24s58.9,11.7,79.4,24,43.8,26.2,86.1,27.5a420.5,420.5,0,0,1-68.2,73.5Z" />
    <path d="M301.55,217.49a12.85,12.85,0,0,0,12.9,12.1h.8a12.87,12.87,0,0,0,12.1-13.6h0l-.1-1.7c-.1-1.1-.2-2.1-.2-3.2a81.81,81.81,0,0,1,81.8-81.7,12.9,12.9,0,0,0,0-25.8,107.74,107.74,0,0,0-107.6,107.5c0,1.7.1,3.3.2,5Z" />
  </svg>
);

export default ResultEmpty;