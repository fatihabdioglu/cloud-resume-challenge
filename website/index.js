const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://fbgkf6pgsr4fxc5dr3nw5c2jmu0pnrln.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `Total visitors: ${data}`;
}

updateCounter();