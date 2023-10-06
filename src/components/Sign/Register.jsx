import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Alert,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { NavbarSimple } from "../Navbar/NavbarSimple";

const Register = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const submit = async () => {
    await axios
      .post("https://innovo.onrender.com/api/user/register", {
        name: Name,
        email: Email,
        userName: UserName,
        password: Password,
        role: Role,
      })
      .then((Response) => {
        console.log(Response);
        navigate("/dash");
      })
      .catch((err) => {
        setMsg(err.response.data);
        console.log(err.response.data);
      });
  };

  return (
    <div className="w-full h-screen bg-n flex flex-col gap-4 items-center justify-center">
      <NavbarSimple />
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-b">
          Sign up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="w-full">
              <Select label="Select Version">
                <Option
                  onClick={() => {
                    setRole("creator");
                  }}
                >
                  Creator
                </Option>
                <Option
                  onClick={() => {
                    setRole("researcher");
                  }}
                >
                  Researcher
                </Option>
              </Select>
            </div>
            <Input
              size="lg"
              label="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              size="lg"
              label="User name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Input
              size="lg"
              label="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Input
              type="password"
              size="lg"
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Input type="password" size="lg" label="Confirm password" />
          </div>
          {msg.length == 0 ? " " : <Alert color="red">{msg}</Alert>}
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900 text-b"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          <Button className="mt-4 p-4  bg-[#0B469E]" onClick={submit} fullWidth>
            Register
          </Button>

          <Typography color="gray" className="mt-2 text-center font-normal">
            Already have an account?
            <Link to="/signIn" className="font-medium  text-b">
              Sign in
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
