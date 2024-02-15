// document.addEventListener("DOMContentLoaded", () => {
  const logo = document.createElement("img");
  logo.id = "logo";
  logo.src =
    "https://see.fontimg.com/api/renderfont4/8MOa2/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGhlIENvZGVzbWl0aCBUaW1lcw/chomsky.png";
  logo.style.display = "block";
  logo.style.marginLeft = "auto";
  logo.style.marginRight = "auto";
  logo.position = "absolute";
  // document.querySelector('.NYTAppHideMasthead').replaceWith(logo);

  let allPs = document.querySelectorAll("p");
  for (let index = 0; index < allPs.length; index++) {
    const eachP = allPs[index];
    let par = document.createElement("p");
    par.innerText = "Clinks has infiltrated the New York Times mainframe";
    eachP.replaceWith(par);
  }

  const pictures = document.querySelectorAll("picture");
  const images = document.querySelectorAll("img");
  for (let index = 1; index < pictures.length; index++) {
    const picture = pictures[index];
    pic = document.createElement("img");
    pic.style.marginLeft = "auto";
    pic.style.margin = "auto";
    pic.style.display = "block";
    pic.src =
      "https://media.licdn.com/dms/image/C5603AQExrFcQWSoOpQ/profile-displayphoto-shrink_200_200/0/1661536428004?e=2147483647&v=beta&t=IAuIWgF5T8RvsxahP-x3wLrcD0HgDkFt0LYCEIQU9g8";
    picture.replaceWith(pic);
  }
  for (let index = 1; index < images.length; index++) {
    const image = images[index];
    let img = document.createElement("img");
    img.style.marginLeft = "auto";
    img.style.margin = "auto";
    img.style.display = "block";
    img.src =
      "https://media.licdn.com/dms/image/C5603AQExrFcQWSoOpQ/profile-displayphoto-shrink_200_200/0/1661536428004?e=2147483647&v=beta&t=IAuIWgF5T8RvsxahP-x3wLrcD0HgDkFt0LYCEIQU9g8";
    image.replaceWith(img);
  }
// });