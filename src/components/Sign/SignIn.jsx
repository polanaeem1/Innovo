import React, { useState } from "react";
import Alert from "@material-tailwind/react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavbarSimple } from "../Navbar/NavbarSimple";
const SignIn = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const [msg, setMsg] = useState("");
  
  const submit= async()=>{
    
    await axios.post("http://localhost:8080/api/user/login",{
      email:Email,
      password:Password,
      
    }).then(Response=>{
      navigate("/dash");
    }).catch(err=>{
  setMsg(err.response.data);
})

  };
  return (
    <div className="w-full h-screen bg-n flex flex-col  items-center justify-center">
      <div className="absolute w-full top-6">
        <NavbarSimple />
      </div>
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" className="text-b">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Sign In.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
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
          </div>
          {(msg.length==0)?" ":<Alert color="red">{msg}</Alert>}
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
          <Button className="mt-6 p-4 bg-[#0B469E]" onClick={submit} fullWidth>
            Log In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default SignIn;
