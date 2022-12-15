import React from "react";
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import downArrowPhoto from '../assets/downArrow5.jpg'

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    e.preventDefault();

    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select in image file (png or jpeg)");
    }
  };

  return (
    <form>
      <p className="titleBtn">Click me to add a photo</p>
      <img src={downArrowPhoto} alt='your_image' className="downArrowPhoto"/>
      <label>
        <input type="file" placeholder="+" onChange={changeHandler} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
