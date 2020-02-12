import React from "react";
// @ts-ignore
import file from "./t-long.json";

const Import = () => {
  let fileReader;

  const arrayKey = [];
  const arrayValue = [];

  const translatingObject = object => {
    const array = [];
    // console.log(Object.keys(object));

    Object.keys(object).forEach(key => {
      console.log(`~${key}`);
      if (typeof object[key] === "object") {
        // console.log("TRUE");
        translatingObject(object[key]);
      } else {
        // console.log("FALSE");
        console.log(`   -${object[key]}`);
      }
    });

    // console.log(array);
    // return Object.keys(object);
  };

  const handleFileRead = e => {
    const content = fileReader.result;
    // let JSONcontent;
    let pass;

    try {
      JSON.parse(content);
      pass = true;
    } catch (e) {
      pass = false;
    }

    if (pass === true) {
      // JSONcontent = JSON.parse(t);
      // translatingObject(t);
    } else {
      console.log("Your JSON file is not valid. Please check its validity");
    }

    // console.log(JSONcontent);
  };

  const handleFileChosen = file => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  translatingObject(file);

  // console.log(arrayKey);
  // console.log(arrayValue);

  return (
    <div>
      <input
        type="file"
        accept=".json"
        onChange={e => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
};

export default Import;
