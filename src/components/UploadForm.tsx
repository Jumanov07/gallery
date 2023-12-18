import { ChangeEvent, useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState<null | File>(null);
  const [error, setError] = useState<string>("");

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const target = e.target as HTMLInputElement;

    if (target.files) {
      let selected = target.files[0];

      if (selected && types.includes(selected.type)) {
        setFile(selected);
        setError("");
      } else {
        setFile(null);
        setError("Please select an image file (png or jpeg)");
      }
    } else {
      setFile(null);
      setError("Please select a file");
    }
  };

  return (
    <form>
      <p className="titleBtn">Click me to add a photo</p>
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
