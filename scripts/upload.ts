import Uppy from "@uppy/core";
import DragDrop from "@uppy/drag-drop";
import ProgressBar from "@uppy/progress-bar";
import Tus from "@uppy/tus";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

// Function for displaying uploaded files
const onUploadSuccess = (elForUploadedFiles) => (file, response) => {
  const url = response.uploadURL;
  const fileName = file.name;

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.appendChild(document.createTextNode(fileName));
  li.appendChild(a);

  document.querySelector(elForUploadedFiles).appendChild(li);
};

const uppyOne = new Uppy({ debug: true, autoProceed: true });
uppyOne
  .use(DragDrop, { target: ".example-one .for-DragDrop" })
  .use(Tus, { endpoint: "https://tusd.tusdemo.net/files/" }) // TODO
  .use(ProgressBar, {
    target: ".example-one .for-ProgressBar",
    hideAfterFinish: false,
  })
  .on("upload-success", onUploadSuccess(".example-one .uploaded-files ol"));
