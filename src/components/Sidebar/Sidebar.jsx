import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Avatar } from "@material-tailwind/react";
import Pola from "../../assets/image.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Sidebar() {
  const [navbar, setNavbar] = useState(" ");
  const toggle = () => {
    if (navbar === " ") {
      setNavbar("hidden");
      console.log(navbar);
    } else {
      setNavbar(" ");
      console.log(navbar);
    }
  };
  return (
    <>
      {" "}
      <div className="cursor-pointer fixed top-4 left-3 z-10" onClick={toggle}>
        <ListItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </ListItem>
      </div>
      <Card
        className={`h-screen	w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 sticky top-0 ${navbar}`}
      >
        <div className="flex-col flex items-center	w-max gap-4 mx-auto mt-12">
          <Avatar
            size="xxl"
            alt="avatar"
            src={Pola}
            className="border border-tahiti shadow-xl shadow-green-900/20 ring-4 ring-tahiti"
          />
          <h2 className="mt-6">
            <span className=" text-tahiti">Hello!</span> Pola
          </h2>
        </div>
        <List className="mt-12">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/dash">Dashboard</Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/Generate">Generate</Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/ChatSection"> Chat Section</Link>
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/">Log Out</Link>
          </ListItem>
        </List>
      </Card>
    </>
  );
}
