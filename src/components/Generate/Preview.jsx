import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
const Preview = (props) => {
  var del = `<CardFooter className="pt-3">
    <Button size="lg" fullWidth={true} color="red">
      Delete
    </Button>
  </CardFooter>`;
  if (props.delete === "none") {
    del = ` `;
  }
  return (
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
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {props.name}
          </Typography>
        </div>
        <Typography color="gray">
          {props.description}
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
      {del}
    </Card>
  );
};

export default Preview;
