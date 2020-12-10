//to do applikációt készítünk, alapértelmezésben 10 üres mező áll rendelkezésre, 
//de hozzá tudunk adni újakat és minden mezőben van egy checkbox, 
//van egy text input mező, ami a feladat leírását beleírjuk és 
//van egy törlési lehetőség
function pageLoaded() {

	//változó létrehozása, amibe írom a root-ot

	let root = document.getElementById("root");

	// változóba el kell tárolnunk, hogy mi lesz a html struktúrája
	//hozzáadni root-hoz sorok számát (10)
	//mező, checkbox, törlés gomb

	let maxNumber = 10;

	let row = `
		<div class="row">
			<input type="checkbox">
			<input type="text">
			<button type="button" class="delete">Delete</button>
		</div>
	`;
		//console.log(row);

	//for ciklus a sorok számára (10)

	for (let i = 0; i < maxNumber; i++) {

		root.insertAdjacentHTML("beforeend", row);
	}

	//root elemen kívülre gomb a végére (insertAdjacentHTML afterend),
	//amivel kattintásra új elemet tudunk létrehozni

	root.insertAdjacentHTML("afterend", `
		<button id="add">Új sor hozzáadása</button>
		`
	);


	//click esemény hozzáadása a gombhoz (addEventListener)

	function newItem() {
		root.insertAdjacentHTML("beforeend",
		row);

		//TODO: rá kellene tenni az eseményfigyelőt az újonnan létrehozott sorokra is (66.sor)
	}

	document.getElementById("add").addEventListener("click", newItem);

	//kijelölöm class név alapján az összes törlés gombot és elmentem egy változóba

	let removeBtns = root.querySelectorAll(".delete"); 
	//console.log(removeBtns);

	//for ciklus, click eseményt rá tudok adni mindegyik törlés gombra

	function removeItem(e) {
		console.log(e.target);
		e.target.parentElement.remove();
	}

	for (let i = 0; i < removeBtns.length; i++) {
		removeBtns[i].addEventListener("click", removeItem);
	}

	//hogyan tudom megjelölni, hogy mit szeretnék kitörölni






}

window.addEventListener("load", pageLoaded);