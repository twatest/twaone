const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "https://sparshinnovators.com/pwatest/images/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "https://sparshinnovators.com/pwatest/images/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "https://sparshinnovators.com/pwatest/images/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "https://sparshinnovators.com/pwatest/images/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "https://sparshinnovators.com/pwatest/images/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "https://sparshinnovators.com/pwatest/images/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "https://sparshinnovators.com/pwatest/images/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "https://sparshinnovators.com/pwatest/images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "https://sparshinnovators.com/pwatest/images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("https://sparshinnovators.com/pwatest/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
