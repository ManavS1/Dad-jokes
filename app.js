const joke = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const punch = document.querySelector("#punch");

async function displayData() {
  try {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    joke.textContent = data.setup;
    punch.textContent = data.punchline;
  } catch (err) {
    console.log(err);
  }
}

btn.addEventListener("click", displayData);
displayData();
