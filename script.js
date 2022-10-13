async function displayFantasy() {
  let libriFantasy = await fetch("http://localhost:3000/fantasy");
  let text = await libriFantasy.text();
  document.querySelector("body").innerHTML = text;
}

window.onload = () => {
  displayFantasy();
};
