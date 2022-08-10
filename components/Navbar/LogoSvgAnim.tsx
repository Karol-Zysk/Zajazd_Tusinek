import { AnimationProps, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import styles from "./Navbar.module.css";

const pathColor = "green";
const shapeColor = "green";

const mainPathVariant: AnimationProps = {
  transition: {
    duration: 3,
    ease: "linear",
  },
  variants: {
    visible: {
      pathLength: 1,
      fillOpacity: [0,0,0,1],
      fill: "green"
    },
    hidden: {
      pathLength: 0,
      fillOpacity: 0,

    },
  },
};
const secondPathVariant: AnimationProps = {
  transition: {
    delay:2,
    duration: 3,
    ease: "linear",
  },
  variants: {
    visible: {
      pathLength: 1,
      fillOpacity: [0,0,0,1],
      fill: "green"
    },
    hidden: {
      pathLength: 0,
      fillOpacity: 0,

    },
  },
};

const shapeVariations: AnimationProps = {
  transition: {
    delay: 0,
    duration: 1,
    ease: "easeIn",
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
      transition: {
        delay: 2,
        duration: 3,
      },
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
      
    },
  },
};

const LogoSvgAnim = () => {
  return (
    <div className={styles.svg_logo_anim}>
      <svg
        style={{ border: "2px solid black" }}
        className={styles.svg_logo}
        version="1.0"
        width="500px"
        height="500px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3428.000000 1048.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          id="Group_1"
          data-name="Group 1"
          transform="translate(0.000000,1048.000000) scale(0.100000,-0.100000)"
        >
          <motion.path
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            
            fill={shapeColor}
            stroke={pathColor}
            strokeWidth="70"
            d="M8985 9616 c-60 -20 -128 -51 -176 -81 l-42 -27 39 -24 c21 -14 47
-23 57 -20 9 2 15 0 12 -4 -3 -5 5 -14 17 -21 38 -20 83 -74 111 -133 15 -31
27 -59 27 -62 0 -3 6 -20 14 -37 8 -18 24 -88 36 -157 47 -277 103 -498 165
-655 30 -75 161 -333 203 -399 37 -59 138 -162 209 -212 74 -54 229 -128 249
-120 8 3 12 2 9 -3 -3 -5 20 -15 50 -22 l55 -12 0 -102 c0 -104 -5 -125 -24
-101 -22 28 -247 137 -270 131 -14 -4 -17 -3 -8 3 10 7 -3 18 -48 41 -34 17
-66 31 -71 31 -10 0 -12 -70 -3 -94 3 -9 10 -16 14 -16 5 0 39 -17 77 -39 37
-21 79 -42 93 -46 13 -4 30 -14 38 -21 7 -8 19 -14 26 -14 16 0 103 -47 129
-68 13 -12 17 -12 17 -2 0 7 2 11 5 8 12 -11 -8 -39 -23 -33 -9 3 -13 3 -9 -1
4 -4 2 -13 -4 -21 -9 -10 -8 -13 5 -13 10 0 14 -4 11 -10 -4 -6 -13 -5 -25 2
-16 10 -22 10 -32 -1 -10 -11 -10 -12 0 -7 6 4 12 3 12 -1 0 -5 -16 -9 -35 -9
l-35 0 30 19 c44 28 36 32 -11 5 l-41 -23 27 -11 c22 -9 24 -12 11 -17 -9 -4
-16 -3 -16 2 0 14 -42 21 -59 11 -10 -6 -11 -10 -3 -10 6 0 12 -7 12 -16 0
-10 -6 -14 -15 -10 -10 4 -14 -1 -12 -16 1 -11 -5 -23 -13 -26 -12 -4 -13 -3
-2 10 10 13 10 17 -3 22 -9 3 -13 10 -10 16 4 6 -1 7 -11 3 -11 -4 -13 -8 -6
-11 24 -8 11 -22 -15 -17 l-28 6 30 -16 30 -15 -27 5 c-16 3 -28 1 -28 -5 0
-5 6 -10 13 -10 8 0 7 -4 -3 -10 -8 -5 -19 -10 -25 -10 -5 0 -3 5 5 10 13 8
12 10 -4 10 -16 0 -17 2 -5 18 13 15 12 16 -3 4 -9 -8 -14 -20 -11 -29 5 -13
1 -15 -23 -10 -16 3 -23 4 -17 1 10 -4 10 -9 -1 -20 -8 -8 -19 -14 -25 -14 -6
0 -11 -16 -11 -36 0 -45 -6 -47 229 73 102 51 190 92 195 90 8 -3 9 -64 6
-188 l-5 -184 -25 -2 c-14 0 -46 -1 -72 -2 l-48 -1 0 -737 1 -738 115 119 115
118 97 -99 c53 -54 106 -106 118 -115 l20 -18 0 735 -1 735 -70 0 c-38 0 -77
5 -85 10 -12 8 -15 39 -14 185 1 97 5 179 9 183 3 4 30 -6 58 -22 120 -65 328
-167 336 -164 10 4 -7 68 -18 68 -5 0 -11 -7 -14 -14 -4 -10 -1 -13 7 -10 7 3
13 -2 13 -10 0 -11 -5 -12 -23 -4 -30 14 -26 30 11 46 l30 13 -23 17 c-12 9
-47 30 -77 46 -52 27 -57 28 -68 12 -12 -16 -13 -16 -13 3 0 11 5 17 11 14 5
-3 5 0 -2 7 -7 7 -26 13 -43 13 -18 0 -26 3 -19 8 12 7 -22 26 -103 58 -16 6
-28 16 -28 24 0 7 64 44 141 82 78 39 161 82 185 97 39 25 44 32 44 65 0 29
-3 34 -12 25 -7 -7 -19 -12 -28 -12 -8 0 0 8 18 16 61 31 32 33 -35 3 -81 -36
-87 -41 -42 -34 32 5 32 5 6 -4 -16 -5 -36 -19 -46 -30 -10 -11 -21 -18 -24
-15 -3 4 1 13 9 21 27 27 7 26 -38 -2 -24 -15 -34 -24 -24 -21 15 5 17 4 7 -8
-6 -8 -20 -12 -30 -9 -18 5 -110 -37 -143 -64 -13 -11 -18 -12 -24 -2 -7 12
-7 179 0 186 1 2 38 12 81 23 157 40 323 140 410 246 142 175 321 648 415
1093 16 79 32 152 35 163 4 10 2 18 -3 18 -16 0 -252 -90 -319 -121 -100 -47
-111 -59 -225 -239 -55 -87 -112 -138 -200 -181 -26 -12 -45 -25 -43 -28 2 -3
-34 -5 -80 -5 -56 1 -95 8 -121 20 -55 25 -182 157 -224 232 -205 367 -322
538 -433 632 -23 19 -50 42 -60 52 -31 27 -136 80 -191 94 -64 17 -178 17
-231 0z m2082 -618 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1 -19z
m-1375 -1428 c11 0 10 -2 -1 -9 -11 -7 -9 -10 9 -16 21 -7 21 -8 6 -24 -15
-14 -18 -14 -26 -1 -7 10 -10 11 -10 3 0 -7 -7 -13 -15 -13 -20 0 -36 41 -23
57 6 7 5 14 -2 18 -5 3 -10 11 -10 16 0 6 13 1 29 -10 16 -12 35 -21 43 -21z
m85 -38 c7 -4 9 -13 4 -21 -5 -7 -14 -10 -20 -7 -6 4 -8 13 -4 19 4 7 -1 5
-12 -3 -17 -14 -17 -15 0 -19 15 -2 15 -5 4 -13 -12 -8 -12 -9 0 -6 13 4 50
-18 157 -90 11 -7 0 -3 -23 8 -23 11 -44 24 -48 30 -3 5 -15 10 -25 10 -10 0
-20 5 -22 11 -2 6 -19 14 -38 18 -20 4 -34 13 -32 20 2 8 -4 10 -17 6 -11 -3
-22 -1 -26 4 -3 6 0 8 8 5 7 -2 25 4 38 15 26 22 38 25 56 13z m78 -42 c3 -5
1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z m60 -40 c-3
-5 -11 -10 -16 -10 -6 0 -7 5 -4 10 3 6 11 10 16 10 6 0 7 -4 4 -10z m328
-163 c20 -7 37 -15 37 -19 0 -5 6 -8 14 -8 8 0 18 -4 21 -10 10 -16 -22 -12
-39 5 -19 20 -32 19 -16 0 19 -23 5 -30 -22 -11 -25 18 -48 21 -48 6 0 -5 7
-10 15 -10 20 0 99 -50 91 -57 -3 -4 -14 0 -23 8 -20 17 -57 35 -91 44 l-24 7
24 25 c12 13 17 23 9 21 -7 -2 -16 3 -19 11 -3 10 0 12 14 7 11 -4 36 -13 57
-19z m-408 -67 c3 -6 -1 -7 -9 -4 -18 7 -21 14 -7 14 6 0 13 -4 16 -10z m472
4 c-3 -3 -12 -4 -19 -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z m38 -14 c-27 -12 -43
-12 -25 0 8 5 22 9 30 9 10 0 8 -3 -5 -9z m-500 -20 c-3 -5 -12 -10 -18 -10
-7 0 -6 4 3 10 19 12 23 12 15 0z m515 -10 c13 -8 13 -10 -2 -10 -9 0 -20 5
-23 10 -8 13 5 13 25 0z m90 -10 c0 -5 -7 -7 -15 -4 -8 4 -15 8 -15 10 0 2 7
4 15 4 8 0 15 -4 15 -10z m74 -39 c4 -5 -5 -4 -19 2 -14 7 -25 16 -25 20 0 9
36 -9 44 -22z"
          />
          <motion.path
            id="Path_2"
            data-name="Path 2"
            stroke={pathColor}
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            transform="translate(-107.792 -61.921)"
            d="M2950 6842 c-7 -3 -10 -820 -10 -2453 l0 -2449 250 0 250 0 0 2450
c0 1953 -3 2450 -12 2451 -37 3 -469 3 -478 1z"
          />
          <motion.path
            id="Path_3"
            data-name="Path 3"
            transform="translate(-164.554 -62.851)"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M3713 6843 c-7 -3 -7 -4892 0 -4899 1 -1 109 -4 240 -6 l237 -3 0
2458 0 2457 -235 -2 c-129 -2 -238 -4 -242 -5z"
          />
          <motion.path
            id="Path_4"
            data-name="Path 4"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M4488 6839 c-7 -4 -9 -820 -7 -2453 l4 -2446 236 0 236 0 -1 2453 -1
2452 -228 0 c-126 0 -233 -3 -239 -6z"
          />
          <motion.path
            id="Path_5"
            data-name="Path 5"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M5254 6841 c-2 -3 -4 -1106 -4 -2453 l0 -2448 240 0 240 0 0 2454 0
2454 -236 -1 c-130 -1 -238 -4 -240 -6z"
          />
          <motion.path
            id="Path_6"
            data-name="Path 6"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M6025 6842 c-7 -8 -6 -4800 1 -4856 l7 -46 236 0 236 0 0 2453 0
2452 -237 1 c-131 1 -240 -1 -243 -4z"
          />
          <motion.path
            id="Path_7"
            data-name="Path 7"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M6797 6843 c-4 -3 -7 -1053 -7 -2332 l0 -2326 163 165 c89 91 197
202 240 247 l77 82 0 2085 0 2086 -233 0 c-129 0 -237 -3 -240 -7z"
          />
          <motion.path
            id="Path_8"
            data-name="Path 8"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M7550 4906 l0 -1939 21 19 c15 13 424 424 467 469 5 5 2 3378 -3
3384 -3 2 -113 5 -245 5 l-240 1 0 -1939z"
          />
          <motion.path
            id="Path_9"
            data-name="Path 9"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M8332 6842 c-10 -7 -12 -321 -10 -1541 l3 -1533 192 194 c105 106
212 218 237 249 l46 56 0 1287 0 1286 -214 0 c-118 0 -220 2 -228 5 -7 3 -19
1 -26 -3z"
          />
          <motion.path
            id="Path_10"
            data-name="Path 10"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M10634 6841 c-2 -2 -4 -404 -4 -893 l0 -889 23 -22 c12 -12 61 -67
109 -122 48 -55 147 -160 221 -234 103 -102 134 -128 132 -110 -1 13 -3 529
-4 1146 l-1 1122 -236 3 c-130 2 -238 1 -240 -1z"
          />
          <motion.path
            id="Path_11"
            data-name="Path 11"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M12160 5153 l0 -1691 228 -229 c125 -126 236 -236 247 -245 20 -17
20 -16 17 1914 -1 1063 -5 1934 -8 1937 -3 3 -113 6 -245 6 l-239 0 0 -1692z"
          />
          <motion.path
            id="Path_12"
            data-name="Path 12"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M12934 6841 c-2 -2 -4 -940 -4 -2084 l0 -2079 233 -238 c127 -130
234 -238 237 -239 3 0 4 1044 3 2322 l-3 2322 -231 0 c-127 0 -233 -2 -235 -4z"
          />
          <motion.path
            id="Path_13"
            data-name="Path 13"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M13707 6843 c-4 -3 -7 -1108 -7 -2455 l0 -2448 238 0 237 0 0 2447
c0 1621 -3 2450 -10 2455 -12 10 -449 10 -458 1z"
          />
          <motion.path
            id="Path_14"
            data-name="Path 14"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M14480 6795 c0 -27 -1 -180 -3 -340 -1 -159 -1 -1240 1 -2402 l2
-2112 226 -3 c124 -2 230 0 235 3 5 3 8 1004 7 2454 l-3 2449 -232 1 -233 0 0
-50z"
          />
          <motion.path
            id="Path_15"
            data-name="Path 15"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M15250 4393 l0 -2453 234 0 234 0 -2 2453 -1 2452 -232 0 -233 0 0
-2452z"
          />
          <motion.path
            id="Path_16"
            data-name="Path 16"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M16020 4393 l0 -2453 238 0 237 0 -3 2442 c-1 1344 -3 2446 -5 2450
-1 3 -107 8 -235 10 l-232 3 0 -2452z"
          />
          <motion.path
            id="Path_17"
            data-name="Path 17"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M16788 6843 c-17 -4 -18 -130 -18 -2454 l0 -2449 228 -1 c125 0 234
-2 242 -4 14 -2 16 264 18 2451 l2 2454 -207 0 c-115 0 -217 2 -228 4 -11 2
-28 2 -37 -1z"
          />
          <motion.path
            id="Path_18"
            data-name="Path 18"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M9090 5700 c0 -1083 1 -1140 18 -1131 24 13 214 211 350 364 l112
128 0 889 0 890 -240 0 -240 0 0 -1140z"
          />
          <motion.path
            id="Path_19"
            data-name="Path 19"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M11410 5539 l0 -1300 236 -235 c130 -129 237 -233 238 -232 1 2 0
693 -2 1536 l-2 1532 -235 0 -235 0 0 -1301z"
          />
          <motion.path
            id="Path_20"
            data-name="Path 20"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...secondPathVariant}
            animate="visible"
            initial="hidden"
            d="M32301 679 c-91 -29 -161 -100 -190 -193 -42 -136 -105 -563 -135
-926 -14 -155 -26 -431 -40 -860 -6 -197 -7 -198 -189 -455 -151 -212 -310
-401 -371 -443 -76 -51 -142 -66 -283 -65 -148 1 -185 15 -278 107 -75 73
-135 188 -135 256 0 41 4 47 99 139 54 53 120 128 147 166 27 39 77 106 113
150 79 100 150 203 186 274 35 71 75 229 75 300 0 119 -48 231 -132 306 -60
55 -100 69 -193 68 -102 -1 -186 -23 -302 -79 -102 -49 -206 -136 -249 -209
-32 -56 -110 -418 -159 -744 -24 -161 -51 -274 -79 -329 -34 -66 -160 -233
-230 -305 -70 -71 -94 -78 -141 -43 -44 34 -54 53 -78 146 -15 63 -20 134 -27
435 -8 363 -29 657 -56 773 -30 132 -92 209 -193 239 -88 25 -321 14 -428 -21
-155 -50 -315 -180 -474 -386 -51 -66 -96 -120 -100 -120 -14 0 -19 51 -19
235 -1 307 -20 325 -267 243 -163 -54 -178 -75 -328 -453 -24 -60 -64 -159
-90 -220 -26 -60 -85 -213 -132 -340 -113 -307 -175 -452 -240 -557 -63 -103
-92 -128 -144 -128 -77 0 -135 85 -175 257 -37 158 -41 307 -15 518 12 94 24
262 28 375 5 179 4 209 -11 237 -20 40 -43 53 -95 53 -49 0 -84 -14 -138 -58
-55 -44 -91 -101 -151 -242 -84 -193 -113 -252 -157 -320 -53 -82 -177 -216
-192 -207 -6 4 -16 30 -22 58 -6 28 -38 115 -70 193 -32 77 -77 194 -100 259
-60 170 -106 289 -132 339 -41 82 -111 178 -139 193 -60 31 -154 10 -251 -56
-105 -71 -161 -156 -330 -499 -107 -218 -244 -464 -388 -700 -29 -47 -76 -130
-104 -184 -62 -119 -128 -191 -212 -231 -103 -49 -168 -34 -210 51 -18 37 -19
66 -22 664 -2 621 -5 718 -24 768 -13 35 -26 42 -77 42 -56 0 -110 -29 -159
-84 -72 -82 -73 -88 -73 -625 0 -262 -4 -502 -10 -534 -17 -105 -68 -147 -181
-147 -97 0 -160 21 -198 66 -56 69 -56 61 -57 669 0 308 -4 576 -8 596 -4 21
-20 49 -41 69 -66 64 -186 51 -310 -31 -83 -56 -127 -106 -205 -229 -139 -220
-419 -559 -452 -548 -7 3 -16 22 -20 44 -12 65 -9 1554 3 1597 7 28 18 41 42
51 42 17 139 34 272 46 128 13 129 12 194 -96 52 -87 89 -114 159 -114 69 0
128 42 168 120 26 51 23 177 -5 251 -73 193 -222 238 -624 193 -175 -20 -480
-14 -887 17 -290 21 -355 20 -445 -11 -129 -44 -200 -101 -251 -202 -32 -63
-43 -169 -24 -237 16 -62 67 -111 114 -111 52 0 122 37 159 83 62 78 85 95
145 108 66 13 292 7 334 -9 53 -22 55 -31 75 -417 14 -290 18 -514 17 -1154
l0 -794 -32 -28 c-39 -35 -44 -35 -134 -8 -62 19 -76 20 -124 10 -57 -13 -143
-72 -165 -113 -22 -40 -16 -110 14 -160 80 -137 263 -204 469 -173 164 24 272
98 394 268 90 127 124 252 124 465 0 73 0 74 38 105 81 69 183 180 333 366 79
98 119 135 130 124 7 -7 3 -68 -10 -189 -42 -376 -48 -582 -19 -719 32 -157
152 -307 302 -381 76 -37 84 -39 175 -39 126 1 192 26 445 169 54 31 105 56
112 56 7 0 16 -16 19 -38 18 -107 55 -145 167 -177 106 -30 231 1 391 96 122
73 373 347 487 534 36 58 79 126 95 150 17 25 48 72 70 105 22 33 72 104 110
158 39 53 101 142 137 197 37 55 81 113 98 130 26 25 32 27 44 15 8 -8 21 -37
29 -65 8 -27 36 -106 61 -175 26 -69 53 -151 62 -183 8 -32 41 -109 72 -170
56 -110 57 -113 57 -197 0 -89 -25 -173 -64 -221 -23 -29 -41 -24 -165 47
-117 67 -164 76 -247 49 -69 -23 -159 -110 -177 -171 -35 -118 11 -218 130
-288 76 -44 156 -59 303 -54 121 3 135 6 196 35 77 36 203 118 262 172 108 97
185 254 194 396 2 44 9 92 14 106 11 27 114 122 182 167 50 33 57 23 57 -83 1
-347 119 -643 292 -735 57 -31 71 -34 143 -34 86 1 206 29 278 66 23 11 71 51
107 87 55 55 90 109 217 331 83 146 163 290 178 320 39 77 175 311 193 332 11
14 18 15 29 7 9 -9 13 -44 13 -138 0 -69 5 -180 10 -246 6 -66 15 -221 20
-345 9 -237 21 -303 62 -355 45 -57 122 -69 203 -31 61 29 97 66 127 131 21
45 23 65 23 205 0 85 -6 230 -14 323 -18 206 -12 232 85 366 97 136 245 366
293 455 51 96 94 152 132 171 65 34 115 6 150 -83 22 -55 23 -72 30 -512 5
-374 10 -468 24 -530 21 -95 59 -185 120 -288 116 -194 256 -272 411 -227 80
23 137 61 277 184 89 78 132 124 175 189 31 47 62 88 69 90 7 2 25 -25 42 -63
49 -108 117 -201 190 -259 136 -109 240 -150 386 -150 151 1 283 52 504 197
126 83 178 130 360 325 84 89 156 160 161 157 8 -5 8 -15 -11 -320 -10 -152
-9 -202 1 -244 18 -74 49 -107 114 -121 48 -10 58 -9 107 13 101 45 172 151
222 332 14 50 29 107 32 128 9 49 26 47 53 -8 39 -80 147 -238 199 -292 94
-97 222 -163 313 -163 56 0 136 27 235 79 183 97 276 178 322 278 31 66 25
112 -18 156 -38 37 -62 33 -196 -30 -114 -54 -172 -64 -229 -37 -53 24 -207
182 -273 279 -30 44 -83 110 -119 147 l-64 68 42 50 c24 28 88 92 144 143 168
153 286 270 307 304 24 38 19 60 -21 102 -53 58 -86 44 -274 -118 -158 -136
-340 -280 -353 -281 -10 0 -13 40 -13 168 0 258 36 677 95 1117 32 242 67 913
49 960 -19 48 -158 60 -273 24z m-1432 -1608 c28 -28 44 -97 36 -155 -7 -59
-54 -154 -129 -262 -95 -139 -111 -137 -109 13 2 154 57 324 128 396 33 32 48
34 74 8z"
          />
          <motion.path
            id="Path_21"
            data-name="Path 21"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M2601 6058 c-29 -62 -112 -241 -183 -398 -71 -157 -155 -339 -186
-405 l-57 -120 -3 -1597 -2 -1598 242 0 243 0 1 2115 c0 1163 0 2115 0 2115
-1 0 -25 -51 -55 -112z"
          />
          <motion.path
            id="Path_22"
            data-name="Path 22"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M17544 6105 c3 -38 6 -991 6 -2117 l0 -2048 235 0 235 0 -2 1613 -3
1612 -41 90 c-23 50 -60 128 -82 175 -40 83 -133 290 -253 560 -33 75 -70 147
-81 160 l-20 25 6 -70z"
          />
          <motion.path
            id="Path_23"
            data-name="Path 23"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M26935 5895 c-107 -28 -172 -145 -163 -290 8 -125 64 -191 171 -202
113 -12 225 59 261 164 20 60 20 166 0 226 -34 99 -135 138 -269 102z"
          />
          <motion.path
            id="Path_24"
            data-name="Path 24"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M1870 4418 c-20 -32 -189 -385 -250 -523 -10 -22 -35 -76 -55 -120
-21 -44 -60 -136 -89 -205 l-51 -125 -3 -752 -2 -753 235 0 235 0 0 1250 c0
688 -1 1250 -3 1250 -1 0 -9 -10 -17 -22z"
          />
          <motion.path
            id="Path_25"
            data-name="Path 25"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M18310 3191 l0 -1251 235 0 235 0 0 728 c0 453 -4 744 -11 771 -5 24
-18 62 -28 85 -11 22 -40 94 -66 160 -88 223 -324 725 -352 748 -11 8 -13
-232 -13 -1241z"
          />
          <motion.path
            id="Path_26"
            data-name="Path 26"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M19070 2444 c0 -193 3 -385 6 -427 l7 -77 183 0 c101 0 184 3 184 6
0 3 -16 40 -36 82 -20 42 -49 113 -64 158 -30 88 -102 255 -186 433 -30 62
-54 116 -54 120 0 3 -9 17 -20 31 -20 25 -20 24 -20 -326z"
          />
          <motion.path
            id="Path_2"
            data-name="Path 2"
            stroke={pathColor}
            stroke-miterlimit="10"
            strokeWidth="70"
            fill={shapeColor}
            {...mainPathVariant}
            animate="visible"
            initial="hidden"
            d="M1078 2692 c-33 -70 -178 -381 -215 -461 -8 -18 -34 -83 -58 -145
-23 -61 -46 -119 -50 -128 -7 -17 6 -18 179 -18 l186 0 2 411 c2 226 0 412 -3
414 -3 2 -21 -31 -41 -73z"
          />
        </g>
      </svg>
    </div>
  );
};

export default LogoSvgAnim;
