import React, { useEffect, useState } from "react";
import { navLinks } from "../../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="8rem"
                viewBox="0 0 1247.000000 445.000000"
                preserveAspectRatio="xMidYMid meet"
                className="fill-[#0B469E]"
              >
                <g
                  transform="translate(0.000000,445.000000) scale(0.100000,-0.100000)"
                  fill="#0B469E"
                  stroke="none"
                >
                  <path
                    d="M1077 3474 c-4 -4 -7 -452 -7 -996 l0 -988 -134 0 c-113 0 -135 -2
-140 -16 -3 -9 -6 -96 -6 -194 0 -138 3 -180 14 -189 9 -8 149 -10 502 -9
l489 3 0 200 0 200 -130 5 -130 5 -5 990 -5 990 -221 3 c-121 1 -223 -1 -227
-4z"
                  />
                  <path
                    d="M1790 3461 c-7 -14 -9 -309 -8 -913 l3 -893 230 0 230 0 5 494 5 494
68 -99 c77 -112 189 -270 259 -365 41 -55 208 -294 409 -584 31 -44 124 -178
208 -298 l152 -217 222 2 222 3 3 1189 c2 945 0 1191 -10 1198 -22 13 -412 10
-426 -4 -9 -9 -12 -196 -12 -780 0 -422 -4 -768 -8 -768 -4 0 -43 51 -87 113
-43 61 -108 153 -145 202 -81 109 -170 235 -550 780 -161 231 -302 430 -313
443 -20 21 -25 22 -233 22 -201 0 -214 -1 -224 -19z"
                  />
                  <path
                    d="M3841 3466 c-8 -10 -10 -256 -9 -912 l3 -899 230 0 230 0 2 480 c1
264 3 486 3 494 0 16 39 -35 145 -190 39 -57 104 -148 145 -204 41 -56 165
-230 275 -388 110 -158 275 -394 366 -524 l166 -238 224 0 224 0 3 1189 c2
945 0 1191 -10 1198 -15 9 -399 11 -422 2 -14 -6 -16 -84 -16 -780 0 -431 -4
-774 -9 -774 -4 0 -55 66 -111 148 -56 81 -108 152 -114 157 -6 6 -74 100
-151 210 -77 110 -187 268 -245 350 -58 83 -184 263 -280 400 -95 138 -182
260 -193 273 -20 21 -25 22 -233 22 -166 0 -214 -3 -223 -14z"
                  />
                  <path
                    d="M8013 3463 c-4 -9 0 -35 9 -57 65 -175 400 -1043 497 -1291 62 -156
133 -342 283 -735 107 -278 115 -295 140 -298 29 -3 13 -41 223 508 155 405
217 564 251 645 19 44 77 193 129 330 53 138 114 296 136 352 21 56 39 104 39
107 0 10 -458 7 -465 -3 -5 -9 -67 -176 -85 -231 -5 -14 -29 -83 -55 -155 -26
-71 -68 -191 -95 -266 -26 -74 -54 -148 -62 -164 l-15 -29 -22 48 c-11 27 -21
51 -21 54 0 3 -14 44 -31 91 -17 47 -42 118 -56 156 -13 39 -33 93 -43 120
-10 28 -44 122 -75 210 -31 88 -65 183 -75 210 -10 28 -44 122 -75 210 -31 88
-63 170 -71 183 -14 22 -17 22 -235 22 -197 0 -220 -2 -226 -17z"
                  />
                  <path
                    d="M10725 3469 c-170 -21 -353 -87 -486 -174 -96 -64 -234 -201 -294
-293 -72 -112 -132 -247 -167 -378 -32 -116 -32 -124 -33 -334 0 -230 8 -286
62 -450 33 -100 111 -250 173 -332 135 -179 351 -327 560 -384 168 -45 403
-57 572 -28 97 16 244 62 313 97 146 73 302 209 393 340 238 344 295 792 153
1197 -95 274 -295 507 -536 627 -204 102 -463 142 -710 112z m325 -433 c281
-70 465 -277 530 -596 16 -81 14 -274 -5 -354 -68 -294 -247 -494 -505 -562
-88 -23 -262 -23 -355 1 -283 71 -482 322 -515 652 -41 409 172 764 512 853
88 23 257 26 338 6z"
                  />
                  <path
                    d="M10816 2484 c-59 -21 -98 -56 -125 -108 -19 -39 -23 -59 -19 -115 4
-84 36 -137 105 -178 86 -51 214 -33 279 39 66 71 78 180 31 261 -57 96 -170
138 -271 101z"
                  />
                  <path
                    d="M6860 3225 c-242 -41 -451 -147 -619 -316 -156 -155 -260 -348 -306
-569 -20 -95 -20 -344 0 -439 94 -449 435 -785 888 -877 112 -23 381 -15 488
15 198 54 372 154 512 295 139 139 242 319 293 511 24 89 27 119 28 270 1 190
-10 254 -68 404 -87 224 -232 404 -432 537 -223 148 -523 213 -784 169z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
