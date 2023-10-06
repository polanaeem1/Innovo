import React, { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import Sidebar from "../Sidebar/Sidebar";

const Form = () => {
  const [ProjectName, setProjectName] = useState("");
  const [Description, setDescription] = useState("");
  const [Tags, setTags] = useState([]);
  const [photo, setPhoto] = useState("");
  var mainArray = [];
  var finalArray = [];
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const handleNext = () => {
    !isLastStep && setActiveStep((cur) => cur + 1);
    for (let i = 0; i < 3; i++) {
      let counter = 0;
      const element = mainArray[i];
      for (let index = 0; index < mainArray.length; index++) {
        if (mainArray[index] === element) {
          counter++;
        }
      }
      if (counter % 2 != 0) {
        finalArray.push(element);
        console.log(element);
      }
    }
    Tags.push(...finalArray);
    console.log(Tags);
    console.log(ProjectName);
  };
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
  var show = (
    <FirstPage
      Tags={Tags}
      projectName={ProjectName}
      name={setProjectName}
      mainArray={mainArray}
    />
  );
  if (activeStep == 1) {
    show = <SecondPage setDescription={setDescription} description={Description}/>;
  } else if (activeStep == 2) {
    show = <ThirdPage name={ProjectName} description={Description} />;
  }
  return (
    <div className="flex flex-row flex-1">
      <Sidebar />
      <div className=" ml-10 mr-10 flex-3 w-full h-screen py-4 px-8 flex flex-col justify-between items-center">
        <Stepper
          className="mt-6"
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>1</Step>
          <Step onClick={() => setActiveStep(1)}>2</Step>
          <Step onClick={() => setActiveStep(2)}>3</Step>
        </Stepper>
        {show}
        <div
          className={
            isLastStep
              ? "flex justify-around w-full"
              : "mb-6 flex justify-between w-full"
          }
        >
          <Button onClick={handlePrev}>Prev</Button>
          <Button onClick={handleNext} color={isLastStep ? "green" : " "}>
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
