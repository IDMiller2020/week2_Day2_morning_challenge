const vendingMachine = {
  contents: [
      {name: 'nacho chips', inventory: 10, id: 31},
      {name: 'chocolate chip cookies', inventory: 5, id: 32}, 
      {name: 'peanut butter cookies', inventory: 12, id: 33},
      {name: 'potato chip', inventory: 20, id: 21},
      {name: 'red vines', inventory: 2, id: 22},
      {name: 'oreo cookies', inventory: 5, id: 23},
      {name: 'milk duds', inventory: 16, id: 11},
      {name: 'beef jerky', inventory: 28, id: 12},
      {name: 'veggie straws', inventory: 30, id: 13}
  ],
  serviceNeeded: false,
  machineCapacity: 270
}

console.log(`To get a bag of ${vendingMachine.contents[0].name} enter ${vendingMachine.contents[0].id} on the keypad.`)

function timeToRestock() {
  let machineInventory = 0
  for (let i = 0; i < vendingMachine.contents.length; i++) {
    let item = vendingMachine.contents[i];
    machineInventory += item.inventory
    if (item.inventory < 10) {
      console.log(`There are less than 10 ${item.name} remaining in the vending machine.`)
    }
  }
  if (machineInventory < vendingMachine.machineCapacity * .5) {
    console.log('The vending machine is down to less than half capacity.')
  } else {
    console.log('The vending machine is more than half full.')
  }
}

timeToRestock()