import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  CardHeader,
} from "@material-tailwind/react";
import Pola from "../../assets/image.jpg";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex gap-4 flex-wrap h-fit justify-center w-full mt-12">
        <Card className="mt-6 w-fit h-fit items-center	">
          <CardBody className="flex items-center flex-col w-fit">
            <div className="container mt-16 w-full">
              <div className="bg-white relative shadow rounded-lg  w-full">
                <div className="flex justify-center">
                  <img
                    src={Pola}
                    alt=""
                    className="rounded-full mx-auto absolute -top-20 w-28 h-28 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
                  />
                </div>

                <div className="mt-16">
                  <h1 className="font-bold text-center text-3xl text-gray-900">
                    Pola Naeem
                  </h1>
                  <p className="text-center text-sm text-gray-400 font-medium">
                    Front-End Developer
                  </p>

                  <div className="w-full">
                    <h3 className="font-medium text-gray-900 text-left px-6 mt-6">
                      Previous Projects
                    </h3>
                    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                      <a
                        href="#"
                        className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                      >
                        <img
                          src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                          alt=""
                          className="rounded-full w-fit h-6 shadow-md inline-block mr-2"
                        />
                        Updated his status
                        <span className="text-gray-500 text-xs">
                          24 min ago
                        </span>
                      </a>

                      <a
                        href="#"
                        className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
                      >
                        <img
                          src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                          alt=""
                          className="rounded-full h-6 w-fit shadow-md inline-block mr-2"
                        />
                        Added new profile picture
                        <span className="text-gray-500 text-xs">
                          42 min ago
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="mt-6 w-60 items-center flex flex-row flex-wrap h-[413px] w-[300px]">
          <h2 className="ml-6 text-2xl">Skills</h2>
          <div className="group m-8 w-1/2 inline-flex flex-wrap items-center gap-3 w-full">
            <Tooltip content="back-end">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                back-end
              </span>
            </Tooltip>
            <Tooltip content="back-end">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                back-end
              </span>
            </Tooltip>
            <Tooltip content="back-end">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                back-end
              </span>
            </Tooltip>
            <Tooltip content="back-end">
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
        </Card>

        <Card className="mt-6 w-fit items-center flex flex-row flex-wrap h-fit ">
          <h2 className="m-6 text-2xl">Fields of Study</h2>
          <div className="group m-8 w-1/2 inline-flex flex-wrap items-center gap-3 w-full">
            <Tooltip content="Agriculture">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                Agriculture
              </span>
            </Tooltip>
            <Tooltip content="Astronomy">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                Astronomy
              </span>
            </Tooltip>
            <Tooltip content="Biology">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                Biology
              </span>
            </Tooltip>
            <Tooltip content="Chemistry">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                Chemistry
              </span>
            </Tooltip>
            <Tooltip content="Computer Science">
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                Computer Science
              </span>
            </Tooltip>
            <Tooltip content={`Earth Science`}>
              <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                Earth Science
              </span>
            </Tooltip>
          </div>
        </Card>
        <Card className="mt-6 w-fit items-center flex flex-row flex-wrap h-fit ">
          <h2 className="m-6 text-2xl">Projects</h2>
          <div className="group m-8 w-1/2 inline-flex flex-wrap items-center justify-center gap-3 w-full">
            <Card className="w-full max-w-[22rem] shadow-lg">
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
            <Card className="w-full max-w-[22rem] shadow-lg">
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
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
