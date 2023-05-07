const BASE_URL = "https://api.noroff.dev/api/v1";
const ALL_PRODUCTS_URL = `${BASE_URL}/gamehub`;

async function fetchData() {
  const element = document.getElementById("test");

  element.innerHTML = "";

  try {
    const payload = await fetch(ALL_PRODUCTS_URL);
    const data = await payload.json();

    if (data == undefined) {
      element.innerHTML += `
        <div class="container"></div>`;
    } else {
      data.forEach((game, index) => {
        if (index <= 4) {
          element.innerHTML += `
        <div class="product">
        <a href="gameinfo.html?id=${game.id}"><p>${game.title}</p>
      <img src = "${game.image}" class="product" alt="${game.description}"/></a>
      </div>`;
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();