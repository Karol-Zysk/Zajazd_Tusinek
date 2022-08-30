import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import React from "react";
import styles from "./Navbar.module.css";

const shapeColor = "black";

const mainPathVariant: AnimationProps = {
  transition: {
    delay: 0,
    duration: 3.6,
    ease: "linear",
  },
  variants: {
    visible: {
      pathLength: 1,
      fillOpacity: [0, 0, 1],
      fill: "green",
    },
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
    },
  },
};
const cookPathVariant: AnimationProps = {
  transition: {
    delay: 0,
    duration: 4.2,
    ease: "linear",
  },
  variants: {
    visible: {
      pathLength: [0, 1, 1],
      fillOpacity: [0, 1],
      fill: "green",
      rotateY: ["0", "0", "720deg"],
    },
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
    },
  },
};
const secondPathVariant: AnimationProps = {
  transition: {
    duration: 3.2,
    ease: "linear",
  },
  variants: {
    visible: {
      pathLength: 1,
      fillOpacity: [0, 0, 1],
      fill: "#4b4b4b",
    },
    hidden: {
      pathLength: 0,
      fillOpacity: 0,
    },
  },
};

type SvgAnimType = {
  animation?: boolean;
};

const LogoSvgAnim2: React.FC<SvgAnimType> = ({ animation }) => {
  return (
    <AnimatePresence>
      {animation && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className={styles.svg_logo_anim}
        >
          <svg
            className={styles.svg_logo}
            viewBox="0 0 806 603"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              {...cookPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M313.721 3.75666C309.002 4.94359 303.654 6.78333 299.878 8.56373L296.575 10.1661L299.642 11.5904C301.294 12.4212 303.339 12.9554 304.126 12.7773C304.833 12.6586 305.305 12.7773 305.069 13.0147C304.833 13.3114 305.463 13.8456 306.407 14.261C309.395 15.4479 312.935 18.6526 315.137 22.1541C316.317 23.9938 317.261 25.6555 317.261 25.8336C317.261 26.0116 317.732 27.0205 318.362 28.0294C318.991 29.0976 320.249 33.2519 321.193 37.3468C324.89 53.7858 329.294 66.9013 334.171 76.2187C336.53 80.6697 346.834 95.9811 350.137 99.898C353.047 103.399 360.991 109.512 366.576 112.479C372.396 115.684 384.587 120.076 386.16 119.601C386.789 119.423 387.104 119.482 386.868 119.779C386.632 120.076 388.441 120.669 390.801 121.085L395.127 121.797V127.85C395.127 134.022 394.733 135.269 393.239 133.844C391.509 132.182 373.812 125.714 372.003 126.07C370.902 126.307 370.666 126.248 371.374 125.892C372.16 125.476 371.138 124.824 367.598 123.459C364.924 122.45 362.407 121.619 362.014 121.619C361.227 121.619 361.07 125.773 361.778 127.197C362.014 127.732 362.564 128.147 362.879 128.147C363.272 128.147 365.946 129.156 368.935 130.461C371.845 131.708 375.149 132.954 376.25 133.191C377.272 133.429 378.61 134.022 379.239 134.438C379.789 134.912 380.733 135.269 381.284 135.269C382.542 135.269 389.385 138.058 391.43 139.304C392.452 140.016 392.767 140.016 392.767 139.423C392.767 139.007 392.924 138.77 393.16 138.948C394.104 139.601 392.531 141.263 391.351 140.906C390.643 140.728 390.329 140.728 390.643 140.966C390.958 141.203 390.801 141.737 390.329 142.212C389.621 142.806 389.7 142.984 390.722 142.984C391.509 142.984 391.823 143.221 391.587 143.577C391.273 143.933 390.565 143.874 389.621 143.458C388.362 142.865 387.891 142.865 387.104 143.518C386.317 144.17 386.317 144.23 387.104 143.933C387.576 143.696 388.048 143.755 388.048 143.992C388.048 144.289 386.789 144.527 385.295 144.527H382.542L384.902 143.399C388.362 141.737 387.733 141.5 384.037 143.102L380.812 144.467L382.935 145.12C384.666 145.654 384.823 145.832 383.801 146.129C383.093 146.366 382.542 146.307 382.542 146.01C382.542 145.179 379.239 144.764 377.902 145.357C377.115 145.713 377.036 145.951 377.666 145.951C378.138 145.951 378.61 146.366 378.61 146.9C378.61 147.494 378.138 147.731 377.43 147.494C376.643 147.256 376.329 147.553 376.486 148.443C376.565 149.096 376.093 149.808 375.463 149.986C374.52 150.224 374.441 150.164 375.306 149.393C376.093 148.621 376.093 148.384 375.07 148.087C374.362 147.909 374.048 147.494 374.284 147.138C374.598 146.782 374.205 146.722 373.418 146.96C372.553 147.197 372.396 147.435 372.947 147.613C374.834 148.087 373.812 148.918 371.767 148.621L369.564 148.265L371.924 149.215L374.284 150.105L372.16 149.808C370.902 149.63 369.958 149.749 369.958 150.105C369.958 150.402 370.43 150.699 370.98 150.699C371.609 150.699 371.531 150.936 370.744 151.292C370.115 151.589 369.25 151.886 368.778 151.886C368.385 151.886 368.542 151.589 369.171 151.292C370.194 150.817 370.115 150.699 368.857 150.699C367.598 150.699 367.52 150.58 368.463 149.63C369.486 148.74 369.407 148.681 368.227 149.393C367.52 149.868 367.126 150.58 367.362 151.114C367.755 151.886 367.441 152.004 365.553 151.707C364.295 151.529 363.744 151.47 364.216 151.648C365.003 151.886 365.003 152.182 364.137 152.835C363.508 153.31 362.643 153.666 362.171 153.666C361.699 153.666 361.306 154.615 361.306 155.802C361.306 158.473 360.834 158.592 379.317 151.47C387.34 148.443 394.261 146.01 394.655 146.129C395.284 146.307 395.363 149.927 395.127 157.286L394.733 168.206L392.767 168.325C391.666 168.325 389.149 168.384 387.104 168.443L383.329 168.503V212.241L383.407 256.039L392.452 248.976L401.497 241.974L409.127 247.849C413.295 251.054 417.464 254.14 418.408 254.674L419.981 255.742V212.122L419.902 168.503H414.396C411.408 168.503 408.34 168.206 407.711 167.909C406.767 167.434 406.531 165.595 406.61 156.93C406.688 151.173 407.003 146.307 407.318 146.07C407.554 145.832 409.677 146.426 411.88 147.375C421.318 151.233 437.678 157.286 438.307 157.108C439.093 156.871 437.756 153.072 436.891 153.072C436.498 153.072 436.026 153.488 435.79 153.903C435.475 154.497 435.711 154.675 436.34 154.497C436.891 154.319 437.363 154.615 437.363 155.09C437.363 155.743 436.97 155.802 435.554 155.328C433.194 154.497 433.509 153.547 436.419 152.598L438.779 151.826L436.97 150.817C436.026 150.283 433.273 149.037 430.913 148.087C426.824 146.485 426.43 146.426 425.565 147.375C424.621 148.325 424.543 148.325 424.543 147.197C424.543 146.544 424.936 146.188 425.408 146.366C425.801 146.544 425.801 146.366 425.25 145.951C424.7 145.535 423.206 145.179 421.868 145.179C420.453 145.179 419.823 145.001 420.374 144.705C421.318 144.289 418.644 143.162 412.273 141.263C411.014 140.906 410.071 140.313 410.071 139.838C410.071 139.423 415.104 137.227 421.161 134.972C427.295 132.657 433.824 130.105 435.711 129.215C438.779 127.732 439.172 127.316 439.172 125.358C439.172 123.637 438.936 123.34 438.228 123.874C437.678 124.289 436.734 124.586 436.026 124.586C435.397 124.586 436.026 124.111 437.442 123.637C442.239 121.797 439.959 121.678 434.689 123.459C428.318 125.595 427.846 125.892 431.385 125.476C433.902 125.18 433.902 125.18 431.857 125.714C430.599 126.01 429.026 126.841 428.239 127.494C427.453 128.147 426.588 128.562 426.352 128.384C426.116 128.147 426.43 127.613 427.059 127.138C429.183 125.536 427.61 125.595 424.071 127.257C422.183 128.147 421.397 128.681 422.183 128.503C423.363 128.206 423.52 128.266 422.734 128.978C422.262 129.453 421.161 129.69 420.374 129.512C418.958 129.215 411.722 131.708 409.127 133.31C408.104 133.963 407.711 134.022 407.239 133.429C406.688 132.717 406.688 122.806 407.239 122.39C407.318 122.272 410.228 121.678 413.61 121.025C425.958 118.651 439.015 112.717 445.857 106.426C457.026 96.0405 471.105 67.9696 478.498 41.5604C479.757 36.872 481.015 32.5397 481.251 31.8869C481.566 31.2934 481.408 30.8187 481.015 30.8187C479.757 30.8187 461.195 36.1598 455.925 37.9996C448.06 40.7889 447.195 41.501 438.228 52.1834C433.902 57.3466 429.419 60.3732 422.498 62.9251C420.453 63.6373 418.958 64.4088 419.116 64.5868C419.273 64.7649 416.441 64.8836 412.823 64.8836C408.419 64.8242 405.351 64.4088 403.306 63.6966C398.981 62.213 388.992 54.3792 385.688 49.9282C369.564 28.1481 360.362 17.9998 351.632 12.4212C349.823 11.2937 347.699 9.9287 346.913 9.33523C344.474 7.73288 336.216 4.58751 331.89 3.75666C326.856 2.74777 317.89 2.74777 313.721 3.75666ZM477.476 40.4328C477.24 40.9076 477.004 40.7295 477.004 40.0767C476.925 39.4239 477.161 39.0678 477.397 39.3052C477.633 39.4833 477.712 40.0174 477.476 40.4328ZM369.329 125.18C370.194 125.18 370.115 125.298 369.25 125.714C368.385 126.129 368.542 126.307 369.958 126.663C371.609 127.079 371.609 127.138 370.43 128.088C369.25 128.918 369.014 128.918 368.385 128.147C367.834 127.553 367.598 127.494 367.598 127.969C367.598 128.384 367.048 128.74 366.418 128.74C364.845 128.74 363.587 126.307 364.609 125.358C365.081 124.942 365.003 124.527 364.452 124.289C364.059 124.111 363.666 123.637 363.666 123.34C363.666 122.984 364.688 123.281 365.946 123.933C367.205 124.645 368.699 125.18 369.329 125.18ZM376.014 127.435C376.565 127.672 376.722 128.206 376.329 128.681C375.935 129.096 375.227 129.275 374.756 129.096C374.284 128.859 374.126 128.325 374.441 127.969C374.756 127.553 374.362 127.672 373.497 128.147C372.16 128.978 372.16 129.037 373.497 129.275C374.677 129.393 374.677 129.571 373.812 130.046C372.868 130.521 372.868 130.58 373.812 130.402C374.834 130.165 377.744 131.47 386.16 135.743C387.025 136.159 386.16 135.921 384.351 135.269C382.542 134.616 380.89 133.844 380.576 133.488C380.34 133.191 379.396 132.895 378.61 132.895C377.823 132.895 377.036 132.598 376.879 132.242C376.722 131.886 375.385 131.411 373.89 131.174C372.317 130.936 371.216 130.402 371.374 129.987C371.531 129.512 371.059 129.393 370.036 129.631C369.171 129.809 368.306 129.69 367.991 129.393C367.755 129.037 367.991 128.918 368.621 129.096C369.171 129.215 370.587 128.859 371.609 128.206C373.654 126.901 374.598 126.723 376.014 127.435ZM382.149 129.927C382.385 130.224 382.228 130.521 381.834 130.521C381.362 130.521 380.969 130.224 380.969 129.927C380.969 129.571 381.126 129.334 381.284 129.334C381.52 129.334 381.913 129.571 382.149 129.927ZM386.868 132.301C386.632 132.598 386.003 132.895 385.61 132.895C385.138 132.895 385.059 132.598 385.295 132.301C385.531 131.945 386.16 131.708 386.553 131.708C387.025 131.708 387.104 131.945 386.868 132.301ZM412.666 141.975C414.239 142.39 415.576 142.865 415.576 143.102C415.576 143.399 416.048 143.577 416.677 143.577C417.307 143.577 418.093 143.814 418.329 144.17C419.116 145.12 416.599 144.883 415.262 143.874C413.767 142.687 412.745 142.746 414.003 143.874C415.498 145.239 414.396 145.654 412.273 144.527C410.307 143.458 408.497 143.28 408.497 144.17C408.497 144.467 409.048 144.764 409.677 144.764C411.25 144.764 417.464 147.731 416.835 148.147C416.599 148.384 415.734 148.147 415.026 147.672C413.453 146.663 410.542 145.595 407.868 145.061L405.981 144.645L407.868 143.162C408.812 142.39 409.205 141.797 408.576 141.915C408.026 142.034 407.318 141.737 407.082 141.263C406.846 140.669 407.082 140.55 408.183 140.847C409.048 141.084 411.014 141.619 412.666 141.975ZM380.576 145.951C380.812 146.307 380.497 146.366 379.868 146.188C378.452 145.773 378.216 145.357 379.317 145.357C379.789 145.357 380.34 145.595 380.576 145.951ZM417.7 145.713C417.464 145.892 416.756 145.951 416.205 145.773C415.576 145.595 415.812 145.417 416.677 145.417C417.543 145.357 418.014 145.535 417.7 145.713ZM420.689 146.544C418.565 147.256 417.307 147.256 418.722 146.544C419.352 146.248 420.453 146.01 421.082 146.01C421.868 146.01 421.711 146.188 420.689 146.544ZM381.362 147.731C381.126 148.028 380.419 148.325 379.947 148.325C379.396 148.325 379.475 148.087 380.183 147.731C381.677 147.019 381.992 147.019 381.362 147.731ZM421.868 148.325C422.891 148.8 422.891 148.918 421.711 148.918C421.003 148.918 420.138 148.621 419.902 148.325C419.273 147.553 420.295 147.553 421.868 148.325ZM428.947 148.918C428.947 149.215 428.397 149.334 427.767 149.156C427.138 148.918 426.588 148.681 426.588 148.562C426.588 148.443 427.138 148.325 427.767 148.325C428.397 148.325 428.947 148.562 428.947 148.918ZM434.767 151.233C435.082 151.529 434.374 151.47 433.273 151.114C432.172 150.699 431.307 150.164 431.307 149.927C431.307 149.393 434.138 150.461 434.767 151.233Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M170.731 168.663C170.265 168.795 170.065 204.874 170.065 276.988V385.137H186.705H203.344V276.944C203.344 190.699 203.144 168.751 202.545 168.707C200.083 168.574 171.33 168.574 170.731 168.663Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M126.934 168.663C126.468 168.795 126.268 204.874 126.268 276.988V385.137H142.908H159.547V276.944C159.547 190.699 159.347 168.751 158.748 168.707C156.285 168.574 127.533 168.574 126.934 168.663Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M214.674 168.596C214.404 168.735 214.203 217.563 214.203 277.041V385.208L225.168 377.535C231.155 373.303 238.42 368.141 241.313 366.048L246.493 362.235V265.276V168.27H230.819C222.141 168.27 214.875 168.41 214.674 168.596Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M256.377 262V355.399L257.788 354.484C258.795 353.858 286.266 334.061 289.154 331.893C289.489 331.652 289.288 169.179 288.952 168.89C288.751 168.794 281.363 168.649 272.497 168.649L256.377 168.601V262Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M299.932 168.5C299.258 168.862 299.123 185.112 299.258 248.246L299.46 327.578L312.411 317.539C319.494 312.053 326.712 306.258 328.398 304.653L331.501 301.755V235.154V168.604H317.066C309.106 168.604 302.226 168.5 301.686 168.345C301.214 168.19 300.405 168.293 299.932 168.5Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M427.986 168.707C427.849 168.808 427.712 189.154 427.712 213.902V258.895L429.29 260.008C430.113 260.616 433.474 263.399 436.767 266.183C440.06 268.966 446.852 274.28 451.928 278.026C458.994 283.188 461.121 284.504 460.984 283.593C460.915 282.935 460.778 256.82 460.71 225.593L460.641 168.808L444.451 168.656C435.532 168.555 428.123 168.606 427.986 168.707Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M512.72 250.488V332.325L528.249 343.408C536.763 349.506 544.323 354.83 545.072 355.265C546.434 356.088 546.434 356.04 546.23 262.635C546.162 211.19 545.889 169.037 545.685 168.892C545.481 168.746 537.988 168.601 528.998 168.601H512.72V250.488Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M555.829 168.788C555.691 168.881 555.554 212.564 555.554 265.841V362.662L571.609 373.746C580.361 379.8 587.734 384.83 587.94 384.876C588.147 384.876 588.216 336.256 588.147 276.739L587.94 168.601H572.023C563.271 168.601 555.967 168.694 555.829 168.788Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M599.06 276.569V384.894H615.404H631.679L631.473 277.054C631.405 217.703 631.267 169.038 631.13 168.862C631.061 168.729 623.782 168.508 614.992 168.42L599.06 168.287V276.569Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M642.004 168.376C640.838 168.552 640.769 174.117 640.769 276.745V384.894L656.407 384.938C664.981 384.938 672.457 385.026 673.006 385.115C673.966 385.203 674.103 373.456 674.24 276.878L674.377 168.508H660.18C652.292 168.508 645.296 168.42 644.542 168.332C643.787 168.243 642.621 168.243 642.004 168.376Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M342.044 231.759C342.044 291.758 342.112 294.916 343.255 294.417C344.87 293.697 357.651 282.728 366.8 274.251L374.334 267.16V217.908V168.601H358.189H342.044V231.759Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M471.204 230.398V292.148L487.432 303.31C496.371 309.437 503.728 314.377 503.797 314.33C503.866 314.235 503.797 281.413 503.659 241.371L503.522 168.601H487.363H471.204V230.398Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M110.676 187.234C108.729 190.214 103.159 198.82 98.3932 206.368C93.6278 213.916 87.9899 222.665 85.9093 225.838L82.0835 231.607L81.8822 308.383L81.7479 385.208H97.9905H114.3L114.367 283.528C114.367 227.617 114.367 181.849 114.367 181.849C114.3 181.849 112.689 184.301 110.676 187.234Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M685.828 185.205C686.055 187.027 686.283 232.714 686.283 286.695V384.876H704.114H721.946L721.794 307.549L721.566 230.269L718.455 225.954C716.71 223.557 713.903 219.818 712.233 217.565C709.198 213.586 702.141 203.662 693.036 190.718C690.532 187.123 687.725 183.671 686.89 183.048L685.372 181.849L685.828 185.205Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M70.1878 247.983C68.8418 249.755 57.4681 269.303 53.3628 276.945C52.6898 278.164 51.0073 281.154 49.6613 283.591C48.248 286.027 45.6233 291.122 43.6716 294.943L40.2393 301.865L40.0374 343.509L39.9028 385.208H55.7183H71.5338V315.986C71.5338 277.887 71.4665 246.765 71.3319 246.765C71.2646 246.765 70.7262 247.319 70.1878 247.983Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M732.489 315.549V384.876H748.634H764.779V344.532C764.779 319.428 764.504 303.302 764.023 301.805C763.68 300.475 762.787 298.369 762.1 297.095C761.344 295.876 759.352 291.886 757.565 288.228C751.52 275.87 735.306 248.05 733.382 246.776C732.627 246.332 732.489 259.633 732.489 315.549Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M775.652 342.514C775.652 358.736 775.868 374.874 776.084 378.404L776.588 384.876H789.758C797.027 384.876 803 384.624 803 384.372C803 384.12 801.848 381.01 800.409 377.48C798.97 373.95 796.883 367.982 795.803 364.2C793.644 356.803 788.463 342.767 782.417 327.805C780.258 322.594 778.531 318.055 778.531 317.719C778.531 317.467 777.883 316.29 777.092 315.114C775.652 313.012 775.652 313.096 775.652 342.514Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...mainPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M25.8709 320.609C23.5445 326.622 13.3221 353.338 10.7136 360.21C10.1496 361.756 8.31667 367.34 6.62469 372.666C5.00321 377.906 3.38174 382.888 3.09974 383.661C2.60625 385.122 3.52273 385.208 15.7191 385.208H28.8319L28.9729 349.902C29.1139 330.487 28.9729 314.51 28.7614 314.338C28.5499 314.166 27.2809 317.001 25.8709 320.609Z"
              stroke="black"
              strokeWidth="5"
            />
            <motion.path
              {...secondPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M386.664 477.669L386.664 477.669L386.651 477.672C383.234 478.566 380.618 482.51 380.98 488.351C381.14 490.848 381.764 492.471 382.635 493.5C383.473 494.489 384.737 495.16 386.701 495.362L386.701 495.362L386.707 495.363C390.758 495.793 394.791 493.216 396.068 489.506C396.413 488.466 396.621 486.882 396.621 485.182C396.621 483.483 396.413 481.899 396.068 480.859C395.51 479.241 394.454 478.181 392.989 477.622C391.462 477.041 389.333 476.951 386.664 477.669Z"
              stroke="black"
              strokeWidth="4"
            />
            <motion.path
              {...secondPathVariant}
              animate="visible"
              initial="hidden"
              fill={shapeColor}
              d="M621.668 448.576C617.67 449.85 614.595 452.969 613.321 457.055C611.476 463.03 608.708 481.789 607.39 497.736C606.775 504.545 606.248 516.671 605.633 535.517C605.369 544.172 605.325 544.216 597.33 555.506C590.696 564.82 583.711 573.123 581.031 574.968C577.692 577.209 574.793 577.868 568.598 577.824C562.096 577.78 560.471 577.165 556.385 573.123C553.09 569.916 550.454 564.864 550.454 561.877C550.454 560.075 550.63 559.812 554.803 555.77C557.176 553.442 560.075 550.147 561.261 548.477C562.448 546.764 564.644 543.821 566.226 541.888C569.696 537.494 572.816 532.969 574.397 529.85C575.935 526.731 577.692 519.79 577.692 516.671C577.692 511.443 575.583 506.522 571.893 503.228C569.257 500.811 567.5 500.196 563.414 500.24C558.933 500.284 555.243 501.251 550.147 503.711C545.666 505.863 541.097 509.686 539.208 512.893C537.802 515.353 534.375 531.256 532.222 545.578C531.168 552.651 529.982 557.615 528.752 560.031C527.258 562.931 521.723 570.268 518.648 573.431C515.572 576.55 514.518 576.857 512.453 575.32C510.52 573.826 510.081 572.991 509.026 568.906C508.367 566.138 508.148 563.019 507.84 549.795C507.489 533.848 506.566 520.932 505.38 515.836C504.062 510.037 501.338 506.654 496.901 505.336C493.035 504.238 482.799 504.721 478.098 506.259C471.289 508.455 464.26 514.167 457.275 523.217C455.034 526.116 453.057 528.488 452.881 528.488C452.266 528.488 452.047 526.248 452.047 518.164C452.003 504.677 451.168 503.887 440.317 507.489C433.156 509.861 432.497 510.784 425.907 527.39C424.853 530.026 423.096 534.375 421.953 537.055C420.811 539.691 418.219 546.413 416.154 551.992C411.19 565.479 408.466 571.849 405.611 576.462C402.843 580.987 401.569 582.085 399.285 582.085C395.902 582.085 393.354 578.351 391.596 570.795C389.971 563.854 389.795 557.308 390.938 548.038C391.465 543.908 391.992 536.528 392.168 531.564C392.387 523.7 392.343 522.382 391.684 521.152C390.806 519.394 389.795 518.823 387.511 518.823C385.358 518.823 383.821 519.438 381.448 521.371C379.032 523.304 377.45 525.809 374.814 532.003C371.124 540.482 369.85 543.074 367.917 546.061C365.589 549.664 360.141 555.55 359.482 555.155C359.219 554.979 358.779 553.837 358.516 552.607C358.252 551.377 356.846 547.555 355.441 544.128C354.035 540.745 352.058 535.605 351.047 532.75C348.411 525.281 346.391 520.053 345.248 517.857C343.447 514.254 340.372 510.037 339.142 509.378C336.506 508.016 332.376 508.939 328.115 511.838C323.502 514.957 321.042 518.692 313.617 533.76C308.917 543.337 302.898 554.145 296.572 564.513C295.298 566.577 293.233 570.224 292.003 572.596C289.279 577.824 286.38 580.987 282.689 582.744C278.164 584.897 275.309 584.238 273.464 580.504C272.673 578.878 272.629 577.604 272.497 551.333C272.409 524.051 272.277 519.79 271.443 517.593C270.872 516.056 270.3 515.748 268.06 515.748C265.6 515.748 263.227 517.022 261.075 519.438C257.912 523.041 257.868 523.304 257.868 546.896C257.868 558.406 257.692 568.95 257.428 570.355C256.682 574.968 254.441 576.813 249.477 576.813C245.215 576.813 242.448 575.891 240.778 573.914C238.318 570.883 238.318 571.234 238.274 544.524C238.274 530.992 238.098 519.219 237.923 518.34C237.747 517.418 237.044 516.187 236.121 515.309C233.222 512.497 227.95 513.068 222.503 516.671C218.856 519.131 216.923 521.327 213.497 526.731C207.39 536.396 195.089 551.289 193.639 550.806C193.332 550.674 192.936 549.839 192.761 548.873C192.233 546.017 192.365 480.603 192.892 478.714C193.2 477.483 193.683 476.912 194.738 476.473C196.583 475.726 200.844 474.979 206.687 474.452C212.31 473.881 212.354 473.925 215.21 478.67C217.494 482.492 219.12 483.678 222.195 483.678C225.226 483.678 227.818 481.833 229.576 478.406C230.718 476.165 230.586 470.63 229.356 467.379C226.149 458.9 219.603 456.923 201.942 458.9C194.254 459.779 180.855 459.515 162.975 458.153C150.235 457.231 147.379 457.275 143.425 458.637C137.758 460.57 134.639 463.074 132.398 467.511C130.992 470.279 130.509 474.935 131.344 477.923C132.047 480.647 134.287 482.799 136.352 482.799C138.637 482.799 141.712 481.174 143.337 479.153C146.061 475.726 147.071 474.979 149.707 474.408C152.607 473.837 162.536 474.101 164.381 474.804C166.709 475.77 166.797 476.165 167.676 493.123C168.291 505.863 168.466 515.704 168.422 543.821V578.703L167.017 579.933C165.303 581.47 165.084 581.47 161.13 580.284C158.406 579.449 157.791 579.405 155.682 579.845C153.178 580.416 149.4 583.008 148.433 584.809C147.467 586.566 147.73 589.642 149.048 591.838C152.563 597.857 160.603 600.8 169.652 599.438C176.857 598.384 181.602 595.133 186.962 587.665C190.916 582.085 192.409 576.594 192.409 567.236C192.409 564.029 192.409 563.985 194.079 562.623C197.637 559.592 202.118 554.716 208.708 546.544C212.179 542.239 213.936 540.614 214.419 541.097C214.727 541.404 214.551 544.084 213.98 549.4C212.135 565.918 211.871 574.968 213.145 580.987C214.551 587.884 219.823 594.474 226.413 597.725C229.751 599.351 230.103 599.438 234.101 599.438C239.636 599.394 242.536 598.296 253.65 592.014C256.023 590.652 258.263 589.554 258.571 589.554C258.878 589.554 259.274 590.257 259.405 591.223C260.196 595.924 261.822 597.593 266.742 598.999C271.399 600.317 276.89 598.955 283.919 594.782C289.279 591.575 300.306 579.537 305.314 571.322C306.896 568.774 308.785 565.787 309.488 564.732C310.235 563.634 311.596 561.569 312.563 560.119C313.529 558.67 315.726 555.55 317.395 553.178C319.109 550.85 321.833 546.94 323.414 544.524C325.04 542.107 326.973 539.559 327.719 538.812C328.862 537.714 329.125 537.626 329.652 538.153C330.004 538.505 330.575 539.779 330.927 541.009C331.278 542.195 332.508 545.666 333.606 548.697C334.749 551.728 335.935 555.331 336.33 556.737C336.682 558.142 338.131 561.525 339.493 564.205C341.953 569.038 341.997 569.169 341.997 572.86C341.997 576.77 340.899 580.46 339.186 582.569C338.175 583.843 337.385 583.623 331.937 580.504C326.797 577.56 324.732 577.165 321.086 578.351C318.054 579.362 314.101 583.184 313.31 585.863C311.772 591.047 313.793 595.441 319.021 598.516C322.36 600.449 325.874 601.108 332.332 600.888C337.648 600.756 338.263 600.625 340.943 599.351C344.326 597.769 349.861 594.167 352.453 591.794C357.198 587.533 360.581 580.636 360.976 574.397C361.064 572.464 361.371 570.355 361.591 569.74C362.074 568.554 366.599 564.381 369.587 562.404C371.783 560.954 372.091 561.393 372.091 566.05C372.135 581.295 377.319 594.298 384.919 598.34C387.423 599.702 388.038 599.834 391.201 599.834C394.979 599.79 400.251 598.56 403.414 596.934C404.425 596.451 406.533 594.694 408.115 593.112C410.531 590.696 412.069 588.324 417.648 578.571C421.294 572.157 424.809 565.83 425.468 564.513C427.181 561.13 433.156 550.85 433.947 549.927C434.43 549.312 434.738 549.268 435.221 549.62C435.616 550.015 435.792 551.553 435.792 555.682C435.792 558.714 436.012 563.59 436.231 566.489C436.495 569.389 436.89 576.198 437.11 581.646C437.505 592.058 438.033 594.957 439.834 597.242C441.811 599.746 445.193 600.273 448.752 598.604C451.432 597.33 453.013 595.704 454.331 592.849C455.254 590.872 455.342 589.993 455.342 583.843C455.342 580.108 455.078 573.738 454.727 569.653C453.936 560.603 454.199 559.46 458.461 553.573C462.722 547.599 469.224 537.494 471.333 533.584C473.573 529.367 475.462 526.907 477.132 526.072C479.987 524.578 482.184 525.809 483.722 529.718C484.688 532.135 484.732 532.882 485.04 552.212C485.259 568.642 485.479 572.772 486.094 575.496C487.017 579.669 488.686 583.623 491.366 588.148C496.462 596.671 502.612 600.097 509.422 598.12C512.936 597.11 515.441 595.441 521.591 590.037C525.501 586.61 527.39 584.589 529.279 581.734C530.641 579.669 532.003 577.868 532.31 577.78C532.618 577.692 533.409 578.878 534.155 580.548C536.308 585.292 539.296 589.378 542.503 591.926C548.477 596.715 553.046 598.516 559.46 598.516C566.094 598.472 571.893 596.231 581.602 589.861C587.137 586.215 589.422 584.15 597.417 575.583C601.108 571.673 604.271 568.554 604.49 568.686C604.842 568.906 604.842 569.345 604.007 582.744C603.568 589.422 603.612 591.619 604.051 593.464C604.842 596.715 606.204 598.164 609.059 598.779C611.168 599.219 611.607 599.175 613.76 598.208C618.197 596.231 621.316 591.575 623.513 583.623C624.128 581.426 624.787 578.922 624.919 578C625.314 575.847 626.061 575.935 627.247 578.351C628.961 581.866 633.705 588.807 635.99 591.179C640.119 595.441 645.743 598.34 649.74 598.34C652.201 598.34 655.715 597.154 660.064 594.869C668.104 590.608 672.19 587.05 674.21 582.656C675.572 579.757 675.309 577.736 673.42 575.803C671.75 574.178 670.696 574.353 664.809 577.121C659.801 579.493 657.253 579.933 654.749 578.746C652.42 577.692 645.655 570.751 642.755 566.489C641.437 564.556 639.109 561.657 637.527 560.031L634.716 557.044L636.561 554.848C637.615 553.617 640.427 550.806 642.887 548.565C650.268 541.844 655.451 536.704 656.374 535.21C657.428 533.541 657.209 532.574 655.451 530.729C653.123 528.181 651.673 528.796 643.414 535.913C636.473 541.888 628.477 548.214 627.906 548.258C627.467 548.258 627.335 546.5 627.335 540.877C627.335 529.543 628.917 511.135 631.509 491.805C632.914 481.174 634.452 451.695 633.661 449.631C632.827 447.522 626.72 446.995 621.668 448.576ZM558.757 519.219C559.987 520.449 560.69 523.48 560.339 526.028C560.031 528.62 557.967 532.794 554.672 537.538C550.498 543.645 549.795 543.557 549.883 536.967C549.971 530.202 552.387 522.733 555.506 519.57C556.956 518.164 557.615 518.077 558.757 519.219Z"
              stroke="black"
              strokeWidth="4"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoSvgAnim2;
