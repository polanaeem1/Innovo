import React, { useState } from "react";
import {
  Typography,
  Card,
  Checkbox,
  Input,
  ListItemPrefix,
  ListItem,
  List,
  Alert,
} from "@material-tailwind/react";

function IconOutlined() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}
const FirstPage = (props) => {
  var arr = [];
  var element="React.js"
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Create Your Project
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter Project details.
      </Typography>
      <div className="mb-4 flex flex-col gap-6">
        <Input
          size="lg"
          value={props.projectName}
          label="Name"
          onChange={(e) => {
            props.name(e.target.value);
          }}
        />
        <Card className="overflow-y-auto h-36">
          <List>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-react"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.mainArray.push("React.js");
                      } else {
                        props.mainArray.push("React.js");
                      }
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  React.js
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-vue"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-vue"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    // checked={props.Tags.find("Vue.js")?true:false}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.mainArray.push("Vue.js");
                      } else {
                        props.mainArray.push("Vue.js");
                      }
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Vue.js
                </Typography>
              </label>
            </ListItem>
            <ListItem className="p-0">
              <label
                htmlFor="vertical-list-svelte"
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix className="mr-3">
                  <Checkbox
                    id="vertical-list-svelte"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-0",
                    }}
                    // checked={props.Tags.find("Svelte.js")?true:false}
                    onChange={(e) => {
                      if (e.target.checked) {
                        props.mainArray.push("Svelte.js");
                      } else {
                        props.mainArray.push("Svelte.js");
                      }
                    }}
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  Svelte.js
                </Typography>
              </label>
            </ListItem>
          </List>
        </Card>
      </div>
      <Alert icon={<IconOutlined />}>
        <Typography className="font-medium">
          Ensure that these requirements are met:
        </Typography>
        <ul className="mt-2 ml-2 list-inside list-disc">
          <li>At least 10 characters (and up to 100 characters)</li>
          <li>At least one lowercase character</li>
          <li>At least 3 Categorys</li>
        </ul>
      </Alert>
    </Card>
  );
};

export default FirstPage;
