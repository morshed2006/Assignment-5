//hisotry data
const historyData = [];

//Heart Icons funtion
let counter = 0;
const hearts = document.querySelectorAll(".heart");
for (const heart of hearts) {
	heart.addEventListener("click", function handler() {
		if (heart.style.color === "red") return;

		heart.style.color = "red";

		counter++;
		const setHeartNumber = document.getElementById("heart-number");
		setHeartNumber.innerText = counter;
	});
}