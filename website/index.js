const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch(
        "https://qmnsdehd7srfmes4to2apadiyi0vwxfz.lambda-url.us-east-1.on.aws/"
    );
    let data = await response.json();
    counter.innerHTML = `👀 Total visitors: ${data}`;
}

updateCounter();