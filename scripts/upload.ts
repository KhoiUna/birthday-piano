import ImageKit from "imagekit-javascript";
import { red } from "./global";

// Variable to store user input
const userInput = {
  "from-user": "",
  "to-user": "",
  "date-of-birth": "",
  email: "",
  wish: "",
  "image-url": "",
};

// Declare elements
const file = document.querySelector<HTMLInputElement>("#upload-image");
const form = document.querySelector("form");
const submitResponse =
  document.querySelector<HTMLParagraphElement>("#submit-response");

// Function to upload image to ImageKit
const upload = async (e: Event) => {
  e.preventDefault();

  const imagekit = new ImageKit({
    publicKey: import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT,
    authenticationEndpoint: `${window.location.origin}/api/upload/auth`,
  });

  // Disable file upload
  file.remove();

  const statusEl = document.getElementById("status");
  statusEl.innerHTML = "Uploading...";

  imagekit.upload(
    {
      file: file.files[0],
      fileName: file.files[0].name,
      tags: ["birthday.khoiuna.info"],
      folder: "birthday_khoiuna_info",
    },
    (err, result) => {
      if (err) {
        statusEl.innerHTML = "Error uploading image" + err.message;
        console.error("Error uploading image");
      } else {
        statusEl.innerHTML = "File uploaded";
        const imageUrl = result.url;
        userInput["image-url"] = imageUrl;

        const imageUploaded =
          document.querySelector<HTMLImageElement>("#image-uploaded");
        imageUploaded.setAttribute("src", imageUrl);
        imageUploaded.style.display = "";
      }
    }
  );
};

// Add event listener to elements
file.addEventListener("change", upload);

form.addEventListener("submit", async (e: Event) => {
  e.preventDefault();

  // Get form values and store in userInput
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    userInput[key] = value;
  });

  // Validate user input
  const isValid = Object.values(userInput).every((value) => value !== "");
  if (!isValid) {
    alert("Please fill out all fields");
    return;
  }

  // Captcha
  // @ts-ignore
  grecaptcha.ready(() => {
    // @ts-ignore
    grecaptcha
      .execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "submit" })
      .then(async (token: string) => {
        // Send token to server to validate captcha
        const response = await (
          await fetch("/api/upload/captcha", {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({ token }),
          })
        ).json();

        // If captcha is lower than 0.5, show error message
        if (response.error || response.success.score < 0.5) {
          console.error("Error validating captcha");
          submitResponse.innerText = "Error validating captcha";
          submitResponse.style.color = red;
          return;
        }
      });
  });

  // Send user input to server
  // TODO: submit-response "Successfully submitted"
  const response = await (
    await fetch("/api/upload", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(userInput),
    })
  ).json();

  if (response.error) {
    submitResponse.innerText = response.error;
    submitResponse.style.color = red;
    return;
  }

  const linkToShare = `${window.location.origin}/?id=${response.success.id}&from_user=${response.success.from_user}&to_user=${response.success.to_user}`;
  submitResponse.innerHTML = `Successfully submitted. Here is your link to share: <a href="${linkToShare}">${linkToShare}</a>`;
  submitResponse.style.color = "green";
  form.reset();
});
