async function getCheckout() {
    const checkOut = document.getElementById("checkout");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");
    const url = "https://api.noroff.dev/api/v1/gamehub/" + id;
  
  
    try {
      const response = await fetch(url);
      const details = await response.json();
  
      if (details == undefined) {
        checkOut.innerHTML += `
          <div class="loader"></div>`;
      } else {
        checkOut.innerHTML += `
  
        <div>
          <p>Qty 1</p>
            <p>Total ${details.price}$</p>
            <p>${details.title}</p>
            <p>${details.released}</p>
          </div>
          <div>
            <figure id="forgelegend">
              <img class="gamehub_covers10" src="${details.image}" alt="${details.description}"/>
            </figure>
          </div>`;
  
        }
    } catch (error) {
      console.error(error);
    }
  }
  
  getCheckout();
