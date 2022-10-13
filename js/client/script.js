async function display() {
  let httpResponse = await fetch("http://localhost:3000/films");

  let jsonTxt = await httpResponse.json();

  document.getElementById("display-view").innerHTML = jsonTxt;
}

window.onload = () => {
  display();
};
