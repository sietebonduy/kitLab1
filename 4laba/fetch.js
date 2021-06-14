// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "Идет загрузка...";
// document.body.prepend(div);
// function createNode(element) {
//   return document.createElement(element);
// }

// function append(parent, el) {
//   return parent.appendChild(el);
// }

async function getResponse() {

  let response;
  if (response !== true) {
    alert("loading")
  }

  response = await fetch("https://randomuser.me/api/", {});
  let text = await response.json();
  console.log(text);

  if (text) {
    alert("loading end")
  }

  document.getElementById("Gender").innerHTML =
    "Пол: " + text["results"][0]["gender"];
  document.getElementById("Name").innerHTML =
    "Фамилия и имя: " +
    text["results"][0]["name"]["last"] +
    " " +
    text["results"][0]["name"]["first"];
  document.getElementById("EmailAddress").innerHTML =
    "Email: " + text["results"][0]["email"];
  document.getElementById("PhoneNumber").innerHTML =
    "Телефон: " + text["results"][0]["phone"];
  document.getElementById("Address").innerHTML =
    "Город: " + text["results"][0]["location"]["city"];
  let image = document.createElement("img");
  image.className = "";
  image.src = text["results"][0]["picture"]["large"];
  image.style =
    "position: absolute; top: 100px; left: 730px; height: 90px; width: 90px;";
  document.body.append(image);
}

getResponse();
