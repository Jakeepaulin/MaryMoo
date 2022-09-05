let cheese = 0;

const clickUpgrades = [
  {
    name: "knife",
    price: 5,
    quantity: 0,
    multiplier: 1,
  },
  {
    name: "drill",
    price: 10,
    quantity: 0,
    multiplier: 3,
  },
];

const automaticUpgrades = [
  { name: "mousetronaut", price: 10, quantity: 0, multiplier: 3 },
  {
    name: "space-station",
    price: 20,
    quantity: 0,
    multiplier: 5,
  },
];

function mineCheese() {
  cheese++;
  console.log(`You have mined cheese! You know have`, { cheese });
  drillMining();
  knifeMining();
  drawCheese();
}

function drawCheese() {
  // @ts-ignore
  document.getElementById("cheese-count").innerText = cheese;
  console.log("You got cheese");
}

// function update() {
//   // @ts-ignore
//   document.getElementById(`mousetronaut`).innerText =
//     automaticUpgrades[0].quantity;
//   // @ts-ignore
//   document.getElementById(`spacestation`).innerText =
//     automaticUpgrades[1].quantity;
//   // // @ts-ignore
//   // drill.innerText = clickUpgrades[1].quantity;
// }

function drawNewPriceKnife() {
  console.log("Price has been updated");
  if (clickUpgrades[0].quantity >= 0) {
    clickUpgrades[0].price *= 2;
  }
  // @ts-ignore
  document.getElementById("knife-price").innerText = clickUpgrades[0].price;
  console.log(`The Price of the Knife is now ${clickUpgrades[0].price}`);
}

function drawNewPriceDrill() {
  console.log("Price has been updated");
  if (clickUpgrades[1].quantity >= 0) {
    clickUpgrades[1].price *= 2;
  }
  // @ts-ignore
  document.getElementById("drill-price").innerText = clickUpgrades[1].price;
  console.log(`The Price of the Drill is now ${clickUpgrades[1].price}`);
}

function buyKnife() {
  console.log("Buying Knife");
  if (cheese >= clickUpgrades[0].price) {
    clickUpgrades[0].quantity++;
    cheese -= clickUpgrades[0].price;
    drawNewPriceKnife();
  }
  drawCheese();
  console.log("You have bought a knife!");
  // @ts-ignore
  document.getElementById("buy-knife").innerText = clickUpgrades[0].quantity;
  console.log(
    `knife quantity is now increased to ${clickUpgrades[0].quantity}`
  );
  drawPointerPower();
}

function buyDrill() {
  console.log("Buying Drill");
  if (cheese >= clickUpgrades[1].price) {
    clickUpgrades[1].quantity++;
    cheese -= clickUpgrades[1].price;
    drawNewPriceDrill();
  }
  console.log(`drill quantity is now ${clickUpgrades[1].quantity}`);
  drawCheese();
  // @ts-ignore
  document.getElementById("buy-drill").innerText = clickUpgrades[1].quantity;
  drawPointerPower();
}

function knifeMining() {
  const knife = clickUpgrades.find((u) => (u.name = "knife"));
  // @ts-ignore
  if (knife.quantity > 0) {
    // @ts-ignore
    cheese += knife.quantity * knife.multiplier;
    console.log("You've mined with a knife");
  }
}

function drillMining() {
  const drill = clickUpgrades[1];
  console.log("this is my drill", drill);
  // @ts-ignore
  if (drill.quantity > 0) {
    cheese += drill.quantity * drill.multiplier;
    console.log("you have mined with the drill");
  }
  console.log("drilling");
}

function drawPointerPower() {
  // @ts-ignore
  document.getElementById("click-power").innerText =
    1 +
    clickUpgrades[0].multiplier * clickUpgrades[0].quantity +
    clickUpgrades[1].multiplier * clickUpgrades[1].quantity;
}

function drawPassiveCheese() {
  // @ts-ignore
  document.getElementById("passive-cheese").innerText =
    automaticUpgrades[0].multiplier * automaticUpgrades[0].quantity +
    automaticUpgrades[1].multiplier * automaticUpgrades[1].quantity;
}

function drawMousetronautPrice() {
  if (automaticUpgrades[0].quantity > 0) {
    automaticUpgrades[0].price *= 2;
  }
  // @ts-ignore
  document.getElementById("mousetronaut-price").innerText =
    automaticUpgrades[0].price;
}

function drawSpaceStationPrice() {
  if (automaticUpgrades[1].quantity > 0) {
    automaticUpgrades[1].price *= 2;
  }
  // @ts-ignore
  document.getElementById("space-station-price").innerText =
    automaticUpgrades[1].price;
}

// function buyAutomaticUpgrade(upgradeName) {
//   const boughtUpgrade = automaticUpgrades.find((u) => u.name == upgradeName);
//   console.log(boughtUpgrade);
//   // @ts-ignore
//   if (cheese >= boughtUpgrade.price) {
//     // @ts-ignore
//     cheese -= boughtUpgrade.price;
//     // @ts-ignore
//     boughtUpgrade.quantity++;
//   }
//   console.log("You bought an Automatic Upgrade!");
//   update();
//   drawPassiveCheese();
//   // @ts-ignore;
// }

function buyMousetronaut() {
  console.log("Buying Mousetronaut");
  if (cheese >= automaticUpgrades[0].price) {
    automaticUpgrades[0].quantity++;
    cheese -= automaticUpgrades[0].price;
    drawMousetronautPrice();
    applyMousetronaut();
  }
  console.log("You have bought a Mousetronaut!");
  // @ts-ignore
  document.getElementById("buy-mousetronaut").innerText =
    automaticUpgrades[0].quantity;
  drawPassiveCheese();
}

function buySpaceStation() {
  console.log("Buying Space-station");
  if (cheese >= automaticUpgrades[1].price) {
    automaticUpgrades[1].quantity++;
    cheese -= automaticUpgrades[1].price;
    drawSpaceStationPrice();
    applySpaceStation();
  }
  console.log("You have bought a Space-station!");
  // @ts-ignore
  document.getElementById("buy-space-station").innerText =
    automaticUpgrades[1].quantity;
  drawPassiveCheese();
}

function applyMousetronaut() {
  const mousetronaut = automaticUpgrades.find((u) => u.name == "mousetronaut");
  // @ts-ignore
  if (mousetronaut.quantity > 0) {
    drawCheese();
    // @ts-ignore
    cheese += mousetronaut.quantity * mousetronaut.multiplier;
  }
}

function applySpaceStation() {
  const spacestation = automaticUpgrades.find((u) => u.name == "space-station");

  // @ts-ignore
  if (spacestation.quantity > 0) {
    drawCheese();
    // @ts-ignore
    cheese += spacestation.quantity * spacestation.multiplier;
  }
}

drawPointerPower();
drawPassiveCheese();
setInterval(applyMousetronaut, 3000);
setInterval(applySpaceStation, 3000);
