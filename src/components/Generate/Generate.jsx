import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Generate = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col w-full items-center mr-4 ml-4">
        <Card className="flex flex-row items-center mt-28 w-3/4 h-16 justify-between ">
          <h3 className="ml-4 text-lg font-bold	">Create Your Project</h3>{" "}
          <Link to="/form">
            <Button color="green" className="mr-4">
              Create
            </Button>
          </Link>
        </Card>
        <Card className="flex flex-col items-start mt-16 w-full h-fit p-8 justify-between ">
          <h3 className=" mb-6 text-lg font-bold	"> My Projects</h3>{" "}
          <div className="flex flex-row gap-4 flex-wrap">
            <Card className="w-full max-w-[22rem]  flex justify-between shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://static01.nyt.com/images/2023/09/21/multimedia/21sp-cli-space-01-wvmf/21sp-cli-space-01-wvmf-jumbo.jpg?quality=75&auto=webp"
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Disk Detective
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5.0
                  </Typography>
                </div>
                <Typography color="gray">
                  NASA astrophysicists need your help finding new planetary
                  systems. At Disk Detective, view 10-second videos of images
                  from NASA telescopes and help us decide if they might be stars
                  with dusty disks where planets form and dwell.
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                  <Tooltip content="Astronomy ">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      Astronomy
                    </span>
                  </Tooltip>
                  <Tooltip content="space">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      space
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true} color="red">
                  Delete
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-[22rem]  flex justify-between shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://static01.nyt.com/images/2023/09/21/multimedia/21sp-cli-space-01-wvmf/21sp-cli-space-01-wvmf-jumbo.jpg?quality=75&auto=webp"
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Did You Feel It?
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5.0
                  </Typography>
                </div>
                <Typography color="gray">
                  Did You Feel It?(DYFI) project is designed to gather
                  information available about earthquakes from the people who
                  experience them.
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                  <Tooltip content="Geology ">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      Geology
                    </span>
                  </Tooltip>
                  <Tooltip content="earth science">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      earth science
                    </span>
                  </Tooltip>
                  <Tooltip content={`Disaster response`}>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      Disaster response
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true} color="red">
                  Delete
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-[22rem]  flex justify-between shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://static01.nyt.com/images/2023/09/21/multimedia/21sp-cli-space-01-wvmf/21sp-cli-space-01-wvmf-jumbo.jpg?quality=75&auto=webp"
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Florida Keys Water Watch
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5.0
                  </Typography>
                </div>
                <Typography color="gray">
                  The University of Florida IFAS Monroe County Extension
                  developed Florida Keys Water Watch, a community-based
                  volunteer water quality monitoring program to promote
                  awareness of the importance of water quality.
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                  <Tooltip content="water">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    water
                    </span>
                  </Tooltip>
                  <Tooltip content="quality">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    quality
                    </span>
                  </Tooltip>
                  <Tooltip content={`pH`}>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    pH
                    </span>
                  </Tooltip>
                  <Tooltip content="salinity">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                    salinity
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true} color="red">
                  Delete
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full max-w-[22rem] flex justify-between shadow-lg">
              <CardHeader floated={false} color="blue-gray">
                <img
                  src="https://static01.nyt.com/images/2023/09/21/multimedia/21sp-cli-space-01-wvmf/21sp-cli-space-01-wvmf-jumbo.jpg?quality=75&auto=webp"
                  alt="ui/ux review check"
                />
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
              </CardHeader>
              <CardBody>
                <div className="mb-3 flex items-center justify-between">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-medium"
                  >
                    Galactic Emperors
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5.0
                  </Typography>
                </div>
                <Typography color="gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  voluptatibus repudiandae quos.
                </Typography>
                <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                  <Tooltip content="$129 per night">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      back-end
                    </span>
                  </Tooltip>
                  <Tooltip content="Front-end">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      Front-end
                    </span>
                  </Tooltip>
                  <Tooltip content={`UX`}>
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      UX
                    </span>
                  </Tooltip>
                  <Tooltip content="Software">
                    <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                      Software
                    </span>
                  </Tooltip>
                </div>
              </CardBody>
              <CardFooter className="pt-3">
                <Button size="lg" fullWidth={true} color="red">
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Generate;
