let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/profilepicture.jpg") {
    myImage.setAttribute("src", "images/aboutme.jpg");
  } else {
    myImage.setAttribute("src", "images/profilepicture.jpg");
  }
};
