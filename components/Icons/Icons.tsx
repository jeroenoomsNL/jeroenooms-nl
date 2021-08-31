interface IconProps {
  style?: React.CSSProperties;
  className?: string;
}

export const Github = ({ style, className }: IconProps) => (
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    style={style || (!className && { height: "20px" })}
    className={className}
  >
    <path
      fill="currentColor"
      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
    ></path>
  </svg>
);

export const Linkedin = ({ style, className }: IconProps) => (
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    style={style || (!className && { height: "20px" })}
    className={className}
  >
    <path
      fill="currentColor"
      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
    ></path>
  </svg>
);

export const Twitter = ({ style, className }: IconProps) => (
  <svg
    aria-hidden="true"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    style={style || (!className && { height: "20px" })}
    className={className}
  >
    <path
      fill="currentColor"
      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
    ></path>
  </svg>
);

export const ArrowRight = ({ style, className }: IconProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    preserveAspectRatio=""
    style={style || (!className && { height: "20px" })}
    className={className}
  >
    <path
      fill="currentColor"
      d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
    ></path>
  </svg>
);

export const NetlifyLogo = ({ style, className }: IconProps) => (
  <svg
    viewBox="0 0 147 40"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Netlify"
    style={style || (!className && { height: "20px" })}
    className={className}
  >
    <radialGradient
      id="a"
      cy="0%"
      r="100.11%"
      gradientTransform="matrix(0 .9989 -1.152 0 .5 -.5)"
    >
      <stop offset="0" stopColor="#20c6b7" />
      <stop offset="1" stopColor="#4d9abf" />
    </radialGradient>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#0e1e25"
        d="m53.37 12.978.123 2.198c1.403-1.7 3.245-2.55 5.525-2.55 3.951 0 5.962 2.268 6.032 6.804v12.568h-4.26v-12.322c0-1.207-.26-2.1-.78-2.681-.52-.58-1.371-.87-2.552-.87-1.719 0-3 .78-3.84 2.338v13.535h-4.262v-19.02h4.016zm24.378 19.372c-2.7 0-4.89-.852-6.567-2.557-1.678-1.705-2.517-3.976-2.517-6.812v-.527c0-1.898.365-3.595 1.096-5.089.73-1.494 1.757-2.657 3.078-3.49 1.321-.831 2.794-1.247 4.42-1.247 2.583 0 4.58.826 5.988 2.478 1.41 1.653 2.114 3.99 2.114 7.014v1.723h-12.4c.13 1.57.652 2.812 1.57 3.726s2.073 1.371 3.464 1.371c1.952 0 3.542-.79 4.77-2.373l2.297 2.198c-.76 1.136-1.774 2.018-3.042 2.645-1.269.627-2.692.94-4.27.94zm-.508-16.294c-1.17 0-2.113.41-2.832 1.23-.72.82-1.178 1.963-1.377 3.428h8.12v-.317c-.094-1.43-.474-2.51-1.14-3.243-.667-.732-1.59-1.098-2.771-1.098zm16.765-7.7v4.623h3.35v3.164h-3.35v10.617c0 .726.144 1.25.43 1.573.286.322.798.483 1.535.483a6.55 6.55 0 0 0 1.49-.176v3.305c-.97.27-1.905.404-2.806.404-3.273 0-4.91-1.81-4.91-5.431v-10.776h-3.124v-3.164h3.122v-4.623h4.261zm11.137 23.643h-4.262v-27h4.262zm9.172 0h-4.262v-19.02h4.262zm-4.525-23.96c0-.655.207-1.2.622-1.634.416-.433 1.009-.65 1.78-.65.772 0 1.368.217 1.79.65.42.434.63.979.63 1.635 0 .644-.21 1.18-.63 1.608-.422.428-1.018.642-1.79.642-.771 0-1.364-.214-1.78-.642-.415-.427-.622-.964-.622-1.608zm10.663 23.96v-15.857h-2.894v-3.164h2.894v-1.74c0-2.11.584-3.738 1.753-4.887 1.17-1.148 2.806-1.722 4.91-1.722.749 0 1.544.105 2.386.316l-.105 3.34a8.375 8.375 0 0 0 -1.631-.14c-2.035 0-3.052 1.048-3.052 3.146v1.687h3.858v3.164h-3.858v15.856h-4.261zm17.87-6.117 3.858-12.903h4.542l-7.54 21.903c-1.158 3.199-3.122 4.799-5.893 4.799-.62 0-1.304-.106-2.052-.317v-3.305l.807.053c1.075 0 1.885-.196 2.429-.589.543-.392.973-1.051 1.289-1.977l.613-1.635-6.664-18.932h4.595z"
      />
      <path
        fill="url(#a)"
        fillRule="nonzero"
        d="m28.589 14.135-.014-.006c-.008-.003-.016-.006-.023-.013a.11.11 0 0 1 -.028-.093l.773-4.726 3.625 3.626-3.77 1.604a.083.083 0 0 1 -.033.006h-.015c-.005-.003-.01-.007-.02-.017a1.716 1.716 0 0 0 -.495-.381zm5.258-.288 3.876 3.876c.805.806 1.208 1.208 1.355 1.674.022.069.04.138.054.209l-9.263-3.923a.728.728 0 0 0 -.015-.006c-.037-.015-.08-.032-.08-.07s.044-.056.081-.071l.012-.005zm5.127 7.003c-.2.376-.59.766-1.25 1.427l-4.37 4.369-5.652-1.177-.03-.006c-.05-.008-.103-.017-.103-.062a1.706 1.706 0 0 0 -.655-1.193c-.023-.023-.017-.059-.01-.092 0-.005 0-.01.002-.014l1.063-6.526.004-.022c.006-.05.015-.108.06-.108a1.73 1.73 0 0 0 1.16-.665c.009-.01.015-.021.027-.027.032-.015.07 0 .103.014l9.65 4.082zm-6.625 6.801-7.186 7.186 1.23-7.56.002-.01c.001-.01.003-.02.006-.029.01-.024.036-.034.061-.044l.012-.005a1.85 1.85 0 0 0 .695-.517c.024-.028.053-.055.09-.06a.09.09 0 0 1 .029 0l5.06 1.04zm-8.707 8.707-.81.81-8.955-12.942a.424.424 0 0 0 -.01-.014c-.014-.019-.029-.038-.026-.06 0-.016.011-.03.022-.042l.01-.013c.027-.04.05-.08.075-.123l.02-.035.003-.003c.014-.024.027-.047.051-.06.021-.01.05-.006.073-.001l9.921 2.046a.164.164 0 0 1 .076.033c.013.013.016.027.019.043a1.757 1.757 0 0 0 1.028 1.175c.028.014.016.045.003.078a.238.238 0 0 0 -.015.045c-.125.76-1.197 7.298-1.485 9.063zm-1.692 1.691c-.597.591-.949.904-1.347 1.03a2 2 0 0 1 -1.206 0c-.466-.148-.869-.55-1.674-1.356l-8.993-8.993 2.349-3.643c.011-.018.022-.034.04-.047.025-.018.061-.01.091 0a2.434 2.434 0 0 0 1.638-.083c.027-.01.054-.017.075.002a.19.19 0 0 1 .028.032l8.999 13.059zm-14.087-10.186-2.063-2.063 4.074-1.738a.084.084 0 0 1 .033-.007c.034 0 .054.034.072.065a2.91 2.91 0 0 0 .13.184l.013.016c.012.017.004.034-.008.05l-2.25 3.493zm-2.976-2.976-2.61-2.61c-.444-.444-.766-.766-.99-1.043l7.936 1.646a.84.84 0 0 0 .03.005c.049.008.103.017.103.063 0 .05-.059.073-.109.092l-.023.01zm-4.056-4.995a2 2 0 0 1 .09-.495c.148-.466.55-.868 1.356-1.674l3.34-3.34a2175.525 2175.525 0 0 0 4.626 6.687c.027.036.057.076.026.106-.146.161-.292.337-.395.528a.16.16 0 0 1 -.05.062c-.013.008-.027.005-.042.002h-.002l-8.949-1.877zm5.68-6.403 4.489-4.491c.423.185 1.96.834 3.333 1.414 1.04.44 1.988.84 2.286.97.03.012.057.024.07.054.008.018.004.041 0 .06a2.003 2.003 0 0 0 .523 1.828c.03.03 0 .073-.026.11l-.014.021-4.56 7.063c-.012.02-.023.037-.043.05-.024.015-.058.008-.086.001a2.274 2.274 0 0 0 -.543-.074c-.164 0-.342.03-.522.063h-.001c-.02.003-.038.007-.054-.005a.21.21 0 0 1 -.045-.051l-4.808-7.013zm5.398-5.398 5.814-5.814c.805-.805 1.208-1.208 1.674-1.355a2 2 0 0 1 1.206 0c.466.147.869.55 1.674 1.355l1.26 1.26-4.135 6.404a.155.155 0 0 1 -.041.048c-.025.017-.06.01-.09 0a2.097 2.097 0 0 0 -1.92.37c-.027.028-.067.012-.101-.003-.54-.235-4.74-2.01-5.341-2.265zm12.506-3.676 3.818 3.818-.92 5.698v.015a.135.135 0 0 1 -.008.038c-.01.02-.03.024-.05.03a1.83 1.83 0 0 0 -.548.273.154.154 0 0 0 -.02.017c-.011.012-.022.023-.04.025a.114.114 0 0 1 -.043-.007l-5.818-2.472-.011-.005c-.037-.015-.081-.033-.081-.071a2.198 2.198 0 0 0 -.31-.915c-.028-.046-.059-.094-.035-.141zm-3.932 8.606 5.454 2.31c.03.014.063.027.076.058a.106.106 0 0 1 0 .057c-.016.08-.03.171-.03.263v.153c0 .038-.039.054-.075.069l-.011.004c-.864.369-12.13 5.173-12.147 5.173s-.035 0-.052-.017c-.03-.03 0-.072.027-.11a.76.76 0 0 0 .014-.02l4.482-6.94.008-.012c.026-.042.056-.089.104-.089l.045.007c.102.014.192.027.283.027.68 0 1.31-.331 1.69-.897a.16.16 0 0 1 .034-.04c.027-.02.067-.01.098.004zm-6.246 9.185 12.28-5.237s.018 0 .035.017c.067.067.124.112.179.154l.027.017c.025.014.05.03.052.056 0 .01 0 .016-.002.025l-1.052 6.462-.004.026c-.007.05-.014.107-.061.107a1.729 1.729 0 0 0 -1.373.847l-.005.008c-.014.023-.027.045-.05.057-.021.01-.048.006-.07.001l-9.793-2.02c-.01-.002-.152-.519-.163-.52z"
        transform="translate(-.702)"
      />
    </g>
  </svg>
);

export const ContentfulLogo = ({ style, className }: IconProps) => (
  <svg
    viewBox="0 0 601 124"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Contentful"
    style={style}
    className={className}
  >
    <g transform="translate(.3 .8)" fillRule="nonzero" fill="none">
      <path
        d="M37.2 85.3c-6.5-6.1-10.4-14.5-10.4-24.1 0-9.6 3.8-18 10-24.1 5.4-5.4 5.4-13.8 0-19.2-5.4-5.4-13.8-5.4-19.2 0C6.9 29 0 44.3 0 61.2s6.9 32.2 18 43.3c5.4 5.4 13.8 5.4 19.2 0 4.9-5.4 4.9-13.8 0-19.2z"
        fill="#FFD85F"
      />
      <path
        d="M37.2 37.1c6.1-6.5 14.6-10.3 24.1-10.3 9.5 0 18 3.8 24.1 10 5.4 5.4 13.8 5.4 19.2 0 5.4-5.4 5.4-13.8 0-19.2C93.5 6.9 78.2 0 61.3 0S29.1 6.9 18 18c-5.4 5.4-5.4 13.8 0 19.2 5.4 4.8 13.8 4.8 19.2-.1z"
        fill="#3BB4E7"
      />
      <path
        d="M85.4 85.3c-6.1 6.5-14.6 10.3-24.1 10.3-9.5 0-18-3.8-24.1-10-5.4-5.4-13.8-5.4-19.2 0-5.4 5.4-5.4 13.8 0 19.2 11.1 10.7 26.4 17.6 43.3 17.6s32.2-6.9 43.3-18c5.4-5.4 5.4-13.8 0-19.2-5.4-4.8-13.8-4.8-19.2.1z"
        fill="#ED5C68"
      />
      <circle fill="#308BC5" cx="27.6" cy="27.5" r="13.4" />
      <circle fill="#D5465F" cx="27.6" cy="94.9" r="13.4" />
      <path
        d="M164.8 73.8c3.8-3.1 4.6-1.1 7.7 1.9 1.5 1.5 6.1 4.6 3.1 6.9-6.1 5-11.5 7.3-19.5 7.3-17.6 0-30.3-13.4-29.5-30.7.4-8 3.4-15.3 9.6-20.3 5.7-4.6 12.6-6.9 19.9-6.5 3.8 0 6.9.8 10.3 1.9 2.3.8 4.6 1.9 6.5 3.4 3.8 3.1 1.9 4.6-.8 7.7-.8.8-1.1 1.5-1.9 1.9-1.5 1.5-2.7 2.7-4.6 1.1-3.8-2.7-9.2-4.2-13.8-3.1-15.3 3.8-14.6 31 4.2 31 3 .6 6.5-.5 8.8-2.5zm425.6 15c-2.7 0-4.6-1.9-4.6-4.6V24c0-2.7 1.9-4.6 4.6-4.6h5c2.7 0 4.6 1.9 4.6 4.6v60.2c0 2.7-1.9 4.6-4.6 4.6h-5zM564 81.9c-5.4 5-10.7 7.7-18.4 7.7-15.7 0-23-13-23-27.2V37.9c0-2.7 1.9-4.6 4.6-4.6h5c2.7 0 4.6 1.9 4.6 4.6v24.5c0 8 4.2 14.2 13 14.2 8.4 0 13.8-7.3 13.8-14.9V37.9c0-2.7 1.9-4.6 4.6-4.6h5c2.7 0 4.6 1.9 4.6 4.6v46.3c0 2.7-1.9 4.6-4.6 4.6H569c-2.7 0-4.2-2.3-4.6-4.6l-.4-2.3zm-59.8-48.3h9.6c2.7 0 4.6 2.3 4.6 4.6v3.1c0 2.7-1.9 4.6-4.6 4.6h-9.6v38.3c0 2.7-1.9 4.6-4.6 4.6h-5c-2.7 0-4.6-1.9-4.6-4.6V31.7c0-11.5 6.5-20.7 18.4-21.8h7.3c2.7 0 4.6 2.3 4.6 4.6v3.1c0 2.7-1.9 4.6-4.6 4.6h-3.8c-5.7 0-8 4.2-8 9.6v1.9h.3v-.1zm-34.9 0H480c2.7 0 4.6 1.9 4.6 4.6v3.1c0 2.7-1.9 4.6-4.6 4.6h-10.7v23.3c0 4.6 2.3 6.9 6.9 6.9h2.3c2.7 0 4.6 1.9 4.6 4.6v3.4c0 2.7-1.9 4.6-4.6 4.6H472c-11.5-.8-16.5-8-16.5-19.5V24c0-2.7 1.9-4.6 4.6-4.6h5c2.7 0 4.6 1.9 4.6 4.6v9.6h-.4zm-153.6 0h10.7c2.7 0 4.6 1.9 4.6 4.6v3.1c0 2.7-1.9 4.6-4.6 4.6h-10.7v23.3c0 4.6 2.3 7.3 6.9 7.3h2.3c2.7 0 4.6 1.9 4.6 4.6v3.1c0 2.7-1.9 4.6-4.6 4.6h-3.1c-12.6 0-19.9-5.4-19.9-19.5V24.1c0-2.7 1.9-4.6 4.6-4.6h5c2.7 0 4.6 1.9 4.6 4.6v9.6c0-.1-.4-.1-.4-.1zm-62.4 6.5c5-5 10.7-7.7 17.6-7.7 15.7 0 23.8 12.6 23.8 27.2v24.6c0 2.7-1.9 4.6-4.6 4.6h-5c-2.7 0-4.6-1.9-4.6-4.6V59.7c0-8-4.2-14.2-13-14.2-8.4 0-13.8 6.9-13.8 14.9v23.8c0 2.7-1.9 4.6-4.6 4.6h-5c-2.7 0-4.6-1.9-4.6-4.6V37.8c0-2.7 1.9-4.6 4.6-4.6h4.2c2.7 0 4.2 2.3 4.6 4.6l.4 2.3zm154 0c5-5 10.7-7.7 17.6-7.7 15.7 0 23.8 12.6 23.8 27.2v24.6c0 2.7-1.9 4.6-4.6 4.6h-5c-2.7 0-4.6-1.9-4.6-4.6V59.7c0-8-4.2-14.2-13-14.2-8.4 0-13.8 6.9-13.8 14.9v23.8c0 2.7-1.9 4.6-4.6 4.6h-5c-2.7 0-4.6-1.9-4.6-4.6V37.8c0-2.7 1.9-4.6 4.6-4.6h4.2c2.7 0 4.2 2.3 4.6 4.6l.4 2.3zm-201.2-8c-16.9 0-28.7 12.3-28.7 29.1s11.9 29.1 28.7 29.1c17.2 0 29.1-11.9 29.1-29.1 0-16.9-12.2-29.1-29.1-29.1zm140.3 34.1c1.1 7.7 8.8 11.1 16.1 11.1 3.4 0 7.3-.8 10.3-2.3.4-.4 1.1-.4 1.5-.8 1.9-1.1 3.4-1.5 5 0l2.7 2.7 2.3 2.3c2.3 3.1.8 3.8-1.9 5.4-5.7 3.8-13 5.7-19.9 5.7-18.4 0-30.7-11.1-30.7-29.5 0-17.6 12.3-29.1 29.5-29.1 18 0 28 10.3 28.4 28.4 0 5 .4 6.5-4.6 6.5h-38.7v-.4zM206.1 45.1c8.8 0 14.6 7.7 14.6 16.1 0 8.8-5.4 15.7-14.6 15.7s-14.6-6.9-14.6-15.7c0-8.8 5.8-16.1 14.6-16.1zm140.6 9.2h28.7c-1.1-7.3-6.9-10-13.8-10-7.2 0-12.9 3.5-14.9 10z"
        fill="#2A3039"
      />
    </g>
  </svg>
);

export const NextjsLogo = ({ style, className }: IconProps) => (
  <svg
    viewBox="0 0 207 124"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    preserveAspectRatio=""
    aria-label="Next.js"
    style={style}
    className={className}
  >
    <g fill="#000" fillRule="nonzero">
      <path d="M48.942 32.632h38.96v3.082H52.512v23.193h33.278v3.082H52.513v25.464h35.794v3.081H48.942V32.632zm42.45 0h4.139l18.343 25.464 18.749-25.464L158.124.287l-41.896 60.485 21.59 29.762h-4.302l-19.642-27.086L94.15 90.534h-4.22l21.751-29.762-20.29-28.14zm47.967 3.082v-3.082h44.397v3.082h-20.453v54.82h-3.571v-54.82h-20.373zM.203 32.632h4.464l61.557 91.671-25.439-33.769L3.936 37.011l-.162 53.523H.203zM183.397 86.523c.738 0 1.276-.563 1.276-1.29 0-.727-.538-1.29-1.276-1.29-.73 0-1.277.563-1.277 1.29 0 .727.547 1.29 1.277 1.29zm3.509-3.393c0 2.146 1.555 3.549 3.822 3.549 2.414 0 3.874-1.446 3.874-3.956v-8.837h-1.946v8.828c0 1.394-.704 2.138-1.946 2.138-1.112 0-1.867-.692-1.893-1.722h-1.911zm10.24-.113c.14 2.233 2.007 3.662 4.787 3.662 2.97 0 4.83-1.498 4.83-3.887 0-1.878-1.06-2.917-3.632-3.514l-1.38-.338c-1.634-.38-2.294-.891-2.294-1.783 0-1.125 1.025-1.86 2.563-1.86 1.459 0 2.466.718 2.649 1.869h1.893c-.113-2.103-1.971-3.583-4.516-3.583-2.737 0-4.56 1.48-4.56 3.704 0 1.835 1.033 2.926 3.3 3.454l1.616.39c1.659.389 2.388.96 2.388 1.912 0 1.108-1.146 1.913-2.71 1.913-1.676 0-2.84-.753-3.005-1.939h-1.928z" />
    </g>
  </svg>
);

export const TypescriptLogo = ({ style, className }: IconProps) => (
  <svg
    viewBox="0 0 306 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Typescript"
    style={style}
    className={className}
  >
    <g fill="#007ACC" fillRule="nonzero">
      <path d="M0 32.002v32h64.002V0H0v32.002zm51.577-2.55c1.625.406 2.865 1.128 4.003 2.306.59.63 1.463 1.778 1.534 2.052.02.08-2.763 1.95-4.45 2.997-.06.04-.305-.223-.58-.63-.823-1.2-1.686-1.717-3.007-1.808-1.94-.132-3.2.884-3.18 2.58 0 .498.07.792.274 1.2.427.884 1.22 1.412 3.708 2.49 4.582 1.97 6.542 3.27 7.76 5.12 1.36 2.062 1.666 5.354.742 7.802-1.016 2.662-3.535 4.47-7.08 5.07-1.097.193-3.698.163-4.876-.05-2.57-.457-5.008-1.727-6.512-3.393-.59-.65-1.737-2.347-1.666-2.47.03-.04.295-.203.59-.376l2.377-1.37 1.84-1.067.386.57c.538.823 1.717 1.95 2.428 2.326 2.042 1.077 4.846.924 6.227-.315.59-.538.833-1.097.833-1.92 0-.742-.09-1.067-.477-1.625-.498-.71-1.514-1.31-4.4-2.56-3.302-1.422-4.724-2.306-6.024-3.708-.752-.813-1.463-2.113-1.758-3.2-.244-.904-.305-3.17-.112-4.084.68-3.2 3.088-5.415 6.563-6.075 1.128-.213 3.75-.132 4.856.142l.001-.004zm-15.025 2.67l.02 2.62h-8.33v23.67H22.35v-23.67h-8.33v-2.57l.07-2.64c.03-.04 5.1-.06 11.246-.05l11.185.03.031 2.61zM109.68 14.97H98.164v35.636h-4.697V14.97H82v-4.23h27.68v4.23zm18.17 7.171L114.744 55.16C112.411 61.05 109.13 64 104.892 64c-1.184 0-2.177-.118-2.975-.363v-4.089c.98.333 1.883.498 2.695.498 2.304 0 4.03-1.367 5.175-4.111l2.278-5.393-11.128-28.4H106l7.708 21.902c.096.277.286 1.004.586 2.167h.164l.55-2.112 8.095-21.958h4.746zm7.46 24.353h-.11V63.7h-4.565V22.14h4.566v5.004h.11c2.246-3.778 5.523-5.672 9.852-5.672 3.671 0 6.534 1.273 8.597 3.82 2.062 2.546 3.083 5.961 3.083 10.246 0 4.76-1.156 8.58-3.471 11.442-2.316 2.862-5.493 4.293-9.512 4.293-3.675-.008-6.544-1.598-8.545-4.785l-.004.006zm-.11-11.482v3.978c0 2.357.768 4.346 2.296 5.995 1.527 1.648 3.47 2.458 5.831 2.458 2.761 0 4.93-1.06 6.498-3.17 1.568-2.11 2.348-5.052 2.348-8.808 0-3.171-.735-5.652-2.2-7.447-1.463-1.796-3.47-2.694-5.95-2.694-2.65 0-4.788.925-6.4 2.767-1.614 1.842-2.422 4.14-2.422 6.92zm49.323 2.499H164.41c.072 3.17.925 5.61 2.557 7.337 1.631 1.726 3.88 2.585 6.734 2.585 3.206 0 6.157-1.061 8.848-3.17v4.278c-2.502 1.816-5.816 2.728-9.932 2.728-4.029 0-7.188-1.29-9.489-3.877-2.301-2.587-3.471-6.223-3.471-10.911 0-4.428 1.258-8.04 3.767-10.824 2.51-2.785 5.636-4.183 9.362-4.183 3.727 0 6.608 1.204 8.65 3.612 2.042 2.407 3.063 5.753 3.063 10.034v2.387l.024.004zm-4.696-3.866c-.016-2.653-.658-4.68-1.907-6.142-1.25-1.46-2.992-2.197-5.215-2.197-2.153 0-3.982.767-5.485 2.31-1.503 1.542-2.45 3.55-2.785 6.033l15.392-.004zm8.666 15.347v-5.503a9.804 9.804 0 002.072 1.502c.807.44 1.634.822 2.549 1.122.915.3 1.789.545 2.683.714.894.17 1.736.253 2.491.253 2.628 0 4.598-.53 5.895-1.598 1.297-1.067 1.946-2.601 1.946-4.6 0-1.076-.214-2.008-.65-2.808a7.734 7.734 0 00-1.796-2.183 17.758 17.758 0 00-2.716-1.89l-3.37-1.905-3.56-2.142a15.414 15.414 0 01-2.873-2.387 9.973 9.973 0 01-1.924-2.959c-.467-1.102-.694-2.395-.694-3.876 0-1.816.363-3.393 1.092-4.734.73-1.34 1.685-2.448 2.88-3.321 1.194-.874 2.54-1.518 4.059-1.945a17.104 17.104 0 014.645-.64c3.6 0 6.22.475 7.866 1.416v5.25c-2.152-1.629-4.9-2.443-8.3-2.443-.934 0-1.869.11-2.802.316a7.306 7.306 0 00-2.491 1.045 5.792 5.792 0 00-1.78 1.867c-.46.765-.689 1.683-.689 2.783 0 1.02.174 1.897.523 2.64.349.742.861 1.416 1.543 2.032.682.616 1.503 1.204 2.485 1.779l3.37 1.89 3.716 2.223a16.86 16.86 0 013.08 2.585c.88.949 1.582 1.994 2.096 3.142.515 1.149.776 2.47.776 3.946 0 1.959-.355 3.632-1.051 4.989a9.224 9.224 0 01-2.849 3.321c-1.194.857-2.573 1.47-4.139 1.85a20.757 20.757 0 01-4.937.572c-.578 0-1.29-.047-2.136-.15l-2.593-.444a20.59 20.59 0 01-2.508-.72c-.796-.306-1.425-.612-1.907-.98l-.002-.01zm46.413.306c-2.191 1.312-4.788 1.979-7.786 1.979-4.06 0-7.343-1.32-9.836-3.962-2.493-2.643-3.743-6.064-3.743-10.271 0-4.689 1.348-8.453 4.035-11.3 2.687-2.846 6.275-4.27 10.77-4.27 2.5 0 4.708.47 6.623 1.392v4.692c-2.113-1.489-4.376-2.223-6.79-2.223-2.91 0-5.3 1.044-7.16 3.131-1.86 2.088-2.794 4.824-2.794 8.215 0 3.335.879 5.97 2.628 7.891 1.75 1.922 4.105 2.894 7.051 2.894 2.485 0 4.82-.823 7.012-2.475v4.325l-.01-.018zm17.655-22.55c-.797-.608-1.946-.918-3.472-.918-1.946 0-3.577.918-4.88 2.755-1.303 1.836-1.96 4.333-1.96 7.504v14.506h-4.566V22.133h4.566v5.868h.11c.65-2 1.638-3.566 2.975-4.68 1.338-1.114 2.824-1.683 4.478-1.683 1.184 0 2.097.126 2.73.408l.019 4.702zm5.237-11.833a2.91 2.91 0 01-2.089-.83c-.578-.554-.861-1.257-.861-2.112 0-.855.285-1.557.861-2.126.576-.57 1.274-.847 2.09-.847.83 0 1.543.286 2.127.847.58.553.899 1.325.878 2.126a2.82 2.82 0 01-.878 2.087 2.984 2.984 0 01-2.128.857v-.002zm2.226 35.69h-4.566V22.145h4.566v28.462zm7.359-4.11h-.11V63.7h-4.566V22.14h4.566v5.004h.11c2.246-3.778 5.523-5.672 9.852-5.672 3.672 0 6.534 1.273 8.597 3.82 2.062 2.546 3.083 5.961 3.083 10.246 0 4.76-1.156 8.58-3.471 11.442-2.316 2.862-5.513 4.293-9.511 4.293-3.676-.008-6.545-1.598-8.546-4.785l-.004.006zm-.11-11.481v3.978c0 2.357.767 4.346 2.295 5.995 1.527 1.648 3.471 2.458 5.832 2.458 2.76 0 4.929-1.06 6.497-3.17 1.568-2.11 2.348-5.052 2.348-8.808 0-3.171-.735-5.652-2.199-7.447-1.464-1.796-3.471-2.694-5.95-2.694-2.65 0-4.788.925-6.402 2.767-1.613 1.842-2.421 4.142-2.421 6.927v-.006zM306 50.33c-1.076.592-2.491.886-4.257.886-4.983 0-7.486-2.783-7.486-8.341v-16.84h-4.9v-3.891h4.9v-6.95l4.566-1.469v8.42H306v3.891h-7.177v16.037c0 1.906.326 3.273.974 4.089.647.816 1.725 1.224 3.226 1.224 1.147 0 2.144-.316 2.975-.949L306 50.33z" />
    </g>
  </svg>
);

export const VSCodeLogo = ({ style, className }: IconProps) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Visual Studio Code"
    style={style}
    className={className}
  >
    <mask
      id="a"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="100"
      height="100"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.912 99.317a6.223 6.223 0 004.96-.19l20.589-9.907A6.25 6.25 0 00100 83.587V16.413a6.25 6.25 0 00-3.54-5.632L75.874.874a6.226 6.226 0 00-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 00-5.318.236l-5.506 5.009a4.168 4.168 0 00-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 00.004 6.162l5.506 5.01a4.162 4.162 0 005.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 002.143 1.4zM75.015 27.3L45.11 50l29.906 22.701V27.3z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        d="M96.461 10.796L75.857.876a6.23 6.23 0 00-7.107 1.207l-67.451 61.5a4.167 4.167 0 00.004 6.162l5.51 5.009a4.167 4.167 0 005.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 00-3.539-5.63z"
        fill="#0065A9"
      />
      <g filter="url(#filter0_d)">
        <path
          d="M96.461 89.204l-20.604 9.92a6.229 6.229 0 01-7.107-1.207l-67.451-61.5a4.167 4.167 0 01.004-6.162l5.51-5.009a4.167 4.167 0 015.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 01-3.539 5.63z"
          fill="#007ACC"
        />
      </g>
      <g filter="url(#filter1_d)">
        <path
          d="M75.858 99.126a6.232 6.232 0 01-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 017.108-1.21l20.6 9.908A6.25 6.25 0 01100 16.413v67.174a6.25 6.25 0 01-3.541 5.633l-20.601 9.906z"
          fill="#1F9CF0"
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M70.851 99.317a6.224 6.224 0 004.96-.19L96.4 89.22a6.25 6.25 0 003.54-5.633V16.413a6.25 6.25 0 00-3.54-5.632L75.812.874a6.226 6.226 0 00-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 00-5.317.236l-5.507 5.009a4.168 4.168 0 00-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 00.004 6.162l5.507 5.009a4.162 4.162 0 005.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 002.143 1.4zM74.954 27.3L45.048 50l29.906 22.701V27.3z"
        fill="url(#paint0_linear)"
        opacity=".25"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-8.394"
        y="15.829"
        width="116.727"
        height="92.246"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.167" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          mode="overlay"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <filter
        id="filter1_d"
        x="60.417"
        y="-8.076"
        width="47.917"
        height="116.151"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4.167" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend
          mode="overlay"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="49.939"
        y1=".258"
        x2="49.939"
        y2="99.742"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const GraphQLLogo = ({ style, className }: IconProps) => (
  <svg
    viewBox="0 0 1390 392"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="GraphQL"
    style={style}
    className={className}
  >
    <g fill="#E434AA" fillRule="nonzero">
      <path d="M32.239 298.66l-14.376-8.3 160.15-277.38 14.376 8.3z" />
      <path d="M14.571 268.2h320.3v16.6h-320.3z" />
      <path d="M181.119 370.026l-160.21-92.5 8.3-14.376 160.21 92.5zM320.293 128.947l-160.21-92.5 8.301-14.376 160.21 92.5z" />
      <path d="M29.253 128.883l-8.3-14.375 160.21-92.5 8.301 14.375z" />
      <path d="M317.339 298.663l-160.15-277.38 14.376-8.3 160.15 277.38zM27.271 103.5h16.6v185h-16.6z" />
      <path d="M305.671 103.5h16.6v185h-16.6z" />
      <path d="M178.293 362.999l-7.25-12.557 139.339-80.45 7.25 12.557z" />
      <path d="M344.272 293.9c-9.6 16.7-31 22.4-47.7 12.8-16.701-9.6-22.4-31-12.8-47.7 9.599-16.7 31-22.4 47.699-12.8 16.801 9.7 22.5 31 12.801 47.7M65.671 133c-9.6 16.7-31 22.4-47.7 12.8-16.7-9.6-22.4-31-12.8-47.7 9.6-16.7 31-22.4 47.7-12.8 16.7 9.7 22.4 31 12.8 47.7M5.271 293.9c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.8 9.6-38.1 3.9-47.7-12.8M283.871 133c-9.6-16.7-3.9-38 12.8-47.7 16.7-9.6 38-3.9 47.7 12.8 9.6 16.7 3.9 38-12.8 47.7-16.7 9.6-38.1 3.9-47.7-12.8M174.771 391.8c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.301 0 34.9 15.6 34.9 34.9 0 19.2-15.599 34.9-34.9 34.9M174.771 70c-19.3 0-34.9-15.6-34.9-34.9 0-19.3 15.6-34.9 34.9-34.9 19.301 0 34.9 15.6 34.9 34.9 0 19.3-15.599 34.9-34.9 34.9" />
      <g>
        <path d="M1290.102 278.35c-1.62 0-2.916-.486-3.888-1.458s-1.458-2.268-1.458-3.888V113.596c0-1.62.486-2.916 1.458-3.888s2.268-1.458 3.888-1.458h4.617c1.62 0 2.916.486 3.888 1.458s1.458 2.268 1.458 3.888V263.77h83.835c1.782 0 3.159.486 4.131 1.458.972.972 1.458 2.349 1.458 4.131v3.645c0 1.62-.486 2.916-1.458 3.888s-2.349 1.458-4.131 1.458h-93.798zM1233.969 294.145c-1.782 0-3.321-.689-4.618-2.066-1.296-1.377-2.349-2.551-3.158-3.523l-10.693-14.823c-9.72 4.698-21.06 7.047-34.02 7.047-13.445 0-24.866-2.39-34.262-7.169s-16.605-12.15-21.628-22.113c-5.022-9.963-7.776-22.558-8.262-37.786a922.293 922.293 0 01-.243-20.412c0-6.318.081-13.122.243-20.412.486-15.066 3.402-27.58 8.749-37.544 5.345-9.963 12.757-17.374 22.234-22.234 9.477-4.86 20.533-7.29 33.169-7.29 12.636 0 23.693 2.43 33.17 7.29 9.477 4.86 16.929 12.271 22.356 22.234 5.427 9.963 8.302 22.478 8.626 37.544.325 7.29.487 14.094.487 20.412s-.162 13.122-.487 20.412c-.81 23.166-6.723 40.176-17.739 51.03l15.552 21.87c.162.162.324.445.487.85.161.405.242 1.013.242 1.823 0 1.296-.486 2.43-1.458 3.402-.971.972-2.105 1.458-3.402 1.458h-5.345zM1181.48 266.2c13.933 0 25.394-4.212 34.385-12.636 8.99-8.424 13.81-22.113 14.458-41.067.324-7.29.486-13.689.486-19.197 0-5.508-.162-11.907-.486-19.197-.323-12.636-2.632-22.923-6.925-30.861-4.293-7.938-10.044-13.73-17.253-17.375-7.209-3.645-15.43-5.467-24.665-5.467-9.072 0-17.212 1.822-24.421 5.467-7.21 3.645-12.96 9.437-17.253 17.375-4.293 7.938-6.683 18.225-7.169 30.861-.161 7.29-.242 13.689-.242 19.197 0 5.508.08 11.907.242 19.197.648 18.954 5.508 32.643 14.581 41.067 9.071 8.424 20.492 12.636 34.262 12.636zM982.707 278.35c-1.62 0-2.916-.486-3.888-1.458s-1.458-2.268-1.458-3.888V111.166c0-1.62.486-2.916 1.458-3.888s2.268-1.458 3.888-1.458h4.131c1.62 0 2.916.486 3.888 1.458s1.458 2.268 1.458 3.888v57.591c4.374-5.67 9.68-10.287 15.916-13.851 6.237-3.564 14.54-5.346 24.908-5.346 11.016 0 20.21 2.39 27.58 7.168 7.371 4.78 12.88 11.26 16.524 19.44 3.645 8.181 5.468 17.456 5.468 27.824v69.012c0 1.62-.486 2.916-1.458 3.888s-2.268 1.458-3.888 1.458h-4.131c-1.62 0-2.916-.486-3.888-1.458s-1.458-2.268-1.458-3.888v-67.797c0-12.96-3.159-23.126-9.477-30.497-6.318-7.37-15.552-11.056-27.702-11.056-11.502 0-20.777 3.685-27.824 11.056-7.047 7.371-10.57 17.537-10.57 30.497v67.797c0 1.62-.486 2.916-1.458 3.888s-2.268 1.458-3.888 1.458h-4.131zM841.524 324.52c-1.62 0-2.916-.486-3.888-1.458s-1.458-2.268-1.458-3.888V157.336c0-1.62.486-2.916 1.458-3.888s2.268-1.458 3.888-1.458h4.131c1.62 0 2.916.486 3.888 1.458s1.458 2.268 1.458 3.888v11.421c4.05-5.508 9.355-10.085 15.916-13.73 6.561-3.645 14.864-5.467 24.908-5.467 9.558 0 17.577 1.66 24.057 4.981 6.48 3.321 11.745 7.736 15.795 13.244 4.05 5.508 7.047 11.664 8.991 18.468a82.587 82.587 0 013.159 20.898c.162 2.43.243 5.103.243 8.019 0 2.916-.081 5.589-.243 8.019a82.587 82.587 0 01-3.159 20.898c-1.944 6.804-4.941 12.96-8.991 18.468-4.05 5.508-9.315 9.922-15.795 13.243-6.48 3.321-14.499 4.982-24.057 4.982-10.044 0-18.347-1.863-24.908-5.589-6.56-3.726-11.866-8.262-15.916-13.608v57.591c0 1.62-.486 2.916-1.458 3.888s-2.268 1.458-3.888 1.458h-4.131zm48.843-57.834c9.558 0 17.091-2.106 22.599-6.318 5.508-4.212 9.477-9.72 11.907-16.524 2.43-6.804 3.807-14.094 4.131-21.87.162-4.536.162-9.072 0-13.608-.324-7.776-1.701-15.066-4.131-21.87s-6.399-12.312-11.907-16.524c-5.508-4.212-13.041-6.318-22.599-6.318-9.234 0-16.686 2.187-22.356 6.561-5.67 4.374-9.842 9.841-12.515 16.402-2.673 6.561-4.171 13.163-4.495 19.805-.162 2.43-.243 5.589-.243 9.477s.081 7.047.243 9.477c.162 6.48 1.66 12.879 4.495 19.197s7.128 11.583 12.879 15.795c5.751 4.212 13.082 6.318 21.992 6.318zM739.707 280.78c-7.776 0-14.945-1.62-21.506-4.86-6.56-3.24-11.866-7.574-15.916-13.001-4.05-5.427-6.075-11.542-6.075-18.346 0-11.016 4.455-19.845 13.365-26.487 8.91-6.642 20.493-10.935 34.749-12.879l38.394-5.346v-8.505c0-8.586-2.633-15.35-7.898-20.291-5.265-4.94-13.648-7.411-25.15-7.411-8.424 0-15.228 1.66-20.412 4.981-5.184 3.321-8.748 7.655-10.692 13.001-.81 2.43-2.349 3.645-4.617 3.645h-3.888c-1.944 0-3.321-.527-4.131-1.58s-1.215-2.308-1.215-3.766c0-2.268.85-5.103 2.551-8.505 1.701-3.402 4.334-6.764 7.898-10.085 3.564-3.32 8.181-6.115 13.851-8.383 5.67-2.268 12.555-3.402 20.655-3.402 9.558 0 17.455 1.296 23.692 3.888 6.237 2.592 11.097 5.953 14.58 10.084 3.483 4.131 5.954 8.708 7.412 13.73 1.458 5.022 2.187 9.963 2.187 14.823v80.919c0 1.62-.486 2.916-1.458 3.888s-2.268 1.458-3.888 1.458h-4.131c-1.62 0-2.916-.486-3.888-1.458s-1.458-2.268-1.458-3.888v-11.421c-1.944 2.916-4.698 5.832-8.262 8.748-3.564 2.916-8.14 5.386-13.73 7.411-5.589 2.025-12.595 3.038-21.019 3.038zm2.43-14.094c7.452 0 14.256-1.62 20.412-4.86 6.156-3.24 11.056-8.221 14.701-14.944 3.645-6.723 5.468-15.188 5.468-25.394v-8.262l-31.347 4.374c-13.284 1.782-23.328 4.86-30.132 9.234-6.804 4.374-10.206 9.882-10.206 16.524 0 5.346 1.539 9.72 4.617 13.122 3.078 3.402 7.006 5.953 11.785 7.654a43.53 43.53 0 0014.702 2.552zM628.413 278.35c-1.62 0-2.916-.486-3.888-1.458s-1.458-2.268-1.458-3.888V157.579c0-1.62.486-2.957 1.458-4.01s2.268-1.579 3.888-1.579h3.888c1.62 0 2.956.526 4.009 1.579 1.053 1.053 1.58 2.39 1.58 4.01v11.178c2.916-5.67 7.128-9.882 12.636-12.636 5.508-2.754 12.312-4.131 20.412-4.131h8.991c1.62 0 2.916.486 3.888 1.458s1.458 2.268 1.458 3.888v3.402c0 1.62-.486 2.916-1.458 3.888s-2.268 1.458-3.888 1.458H669.48c-9.72 0-17.415 2.835-23.085 8.505-5.67 5.67-8.505 13.365-8.505 23.085v75.33c0 1.62-.527 2.916-1.58 3.888s-2.389 1.458-4.009 1.458h-3.888zM523.194 280.78c-13.932 0-25.637-2.714-35.114-8.141-9.477-5.427-16.686-13-21.627-22.72-4.94-9.72-7.654-20.898-8.141-33.534-.161-7.29-.242-14.985-.242-23.085 0-8.1.08-15.795.242-23.085.487-12.798 3.2-24.017 8.141-33.656s12.191-17.172 21.749-22.599c9.558-5.427 21.222-8.14 34.992-8.14 11.178 0 20.736 1.66 28.673 4.981 7.939 3.321 14.419 7.452 19.44 12.393 5.023 4.941 8.749 9.923 11.179 14.945 2.43 5.022 3.725 9.234 3.888 12.636.162 1.458-.243 2.632-1.215 3.523-.972.891-2.268 1.337-3.888 1.337h-5.347c-1.458 0-2.51-.365-3.158-1.094-.648-.729-1.296-1.984-1.944-3.766-1.62-5.022-4.334-9.842-8.141-14.459-3.807-4.617-8.91-8.424-15.309-11.421-6.4-2.997-14.459-4.495-24.178-4.495-14.418 0-26.123 3.928-35.114 11.785-8.99 7.857-13.81 20.939-14.458 39.245a656.282 656.282 0 000 43.74c.648 18.144 5.467 31.185 14.458 39.123 8.991 7.938 20.696 11.907 35.114 11.907 9.558 0 18.144-1.823 25.758-5.468 7.613-3.645 13.607-9.234 17.982-16.767 4.374-7.533 6.561-17.131 6.561-28.795v-12.393h-42.282c-1.62 0-2.916-.527-3.888-1.58s-1.458-2.389-1.458-4.009v-3.402c0-1.782.486-3.159 1.458-4.131.972-.972 2.268-1.458 3.888-1.458h52.002c1.782 0 3.159.486 4.131 1.458.972.972 1.458 2.349 1.458 4.131v21.384c0 12.96-2.552 24.381-7.655 34.263-5.103 9.882-12.555 17.577-22.356 23.085-9.801 5.508-21.668 8.262-35.599 8.262z" />
      </g>
    </g>
  </svg>
);
