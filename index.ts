import move from "./actions/move.ts";
import rest from "./actions/rest.ts";
import fight from "./actions/fight.ts";
import gather from "./actions/gather.ts";
import unequip from "./actions/unequip.ts";
import craft from "./actions/craft.ts";
import equip from "./actions/equip.ts";
import loopAction from "./actions/loopAction.ts";
import getMaps from "./actions/info/getMaps.ts";
import chainMethods from "./utils/chainMethods.ts";
import getCharacter from "./actions/info/getCharacter.ts";
import useItem from "./actions/useItem.ts";
import bankDeposit from "./actions/bankDeposit.ts";
import bankDepositGold from "./actions/bankDepositGold.ts";
import bankWithdraw from "./actions/bankWithdraw.ts";
import bankWithdrawGold from "./actions/bankWithdrawGold.ts";
import getBankDetails from "./actions/info/getBankDetails.ts";
import getBankItems from "./actions/info/getBankItems.ts";
import getCharacterLogs from "./actions/info/getCharacterLogs.ts";
import getMyCharacters from "./actions/info/getMyCharacters.ts";
import getInventoryItem from "./actions/info/getInventoryItem.ts";

export {
  bankDeposit,
  bankDepositGold,
  bankWithdraw,
  bankWithdrawGold,
  chainMethods,
  craft,
  equip,
  fight,
  gather,
  getBankDetails,
  getBankItems,
  getCharacter,
  getCharacterLogs,
  getMaps,
  getMyCharacters,
  loopAction,
  move,
  rest,
  unequip,
  useItem,
  getInventoryItem
};

// for (let i = 0; i < 30; i++) {
//   await chainMethods([
//       { description: "Fight", method: () => fight() },
//       { description: "Rest", method: () => rest() },
//   ]);
// }
// await chainMethods([
//   { description: "Move to bank", method: () => move(4, 1) },
//     {
//       description: "Deposit", method: async () => {
//         const item = "blue_slimeball";
//         return bankDeposit(item, ((await getInventoryItem(item)).quantity))
//       }
//     },
// ])


// await chainMethods(array);
for (let i = 0; i < 1; i++) {
  await chainMethods([
    { description: "Move to ash forest", method: () => move(-1, 0) },
    { description: "Gather", method: () => loopAction(80) },
    { description: "Move to woodshop", method: () => move(-2, -3) },
    { description: "Craft", method: async () => craft("ash_plank", Math.floor(((await getInventoryItem("ash_wood")).quantity) / 10)) },
    { description: "Move to bank", method: () => move(4, 1) },
    depositFromInventory('ash_plank'),
    depositFromInventory('sap'),
  ]);
}
function depositFromInventory(item) {
  return {
    description: "Deposit", method: async () => {
      const quantity = ((await getInventoryItem(item)).quantity)
      if (quantity) {
        return bankDeposit(item, quantity)
      }
      return { message: `No items for ${item}` }
    }
  }
}

async function fightMonster(monster, product, weapon) {
  const monster_location = (await getMaps({ content_type: 'monster', content_code: monster }))[0]
  const actions = [
    { description: "Rest", method: () => rest() },
    { description: "Fight", method: () => fight() },
    { description: "Fight", method: () => fight() },
  ]
  let array: any[] = []
  for (let i = 0; i < 30; i++) {
    array = [...array, ...actions];
  }

  await chainMethods([
    { description: "Unequp weapn", method: () => unequip('weapon') },
    { description: "Unequp weapn", method: () => equip(weapon, 'weapon') },
    { description: "Move to fight", method: () => move(monster_location.x, monster_location.y) },
    ...array,
    // { description: "Fight", method: () => fight() },
    { description: "Move to bank", method: () => move(4, 1) },
    depositFromInventory(product),
    depositFromInventory('apple')
  ])

}

await fightMonster('red_slime', 'red_slimeball', 'water_bow')
await fightMonster('green_slime', 'green_slimeball', 'sticky_dagger')
await fightMonster('blue_slime', 'blue_slimeball', 'sticky_sword')
await fightMonster('yellow_slime', 'yellow_slimeball', 'fire_staff')
// await move(0, 1)
// for (let i = 0; i < 16; i++) {
// await chainMethods([
//     { description: "Fight", method:
//  () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },

//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },


//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },

//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
//     { description: "Fight", method: () => loopAction(6, "fight") },
//     { description: "Rest", method: () => rest() },
// ]);
// }
// await chainMethods([
//     { description: "", method: () => move(-2. - 3) },
//     { description: "", method: () => craft("ash_plank", 7) }
// ])


// for (let i = 0; i < 3; i++) {
//   await chainMethods([
//     { description: "Mobr", method: () => move(2, 0) },
//     { description: "Gather", method: () => loopAction(80) },
//     { description: "Move to bank", method: () => move(4, 1) },
//     {
//       description: "Deposit", method: async () => {
//         const item = "copper_ore";
//         return bankDeposit(item, (await getInventoryItem(item)).quantity)
//       }
//     },
//   ]);
// }




// for (let i = 0; i < 5; i++) {
//   await chainMethods([
//     { description: "Mobr", method: () => move(2, 0) },
//     { description: "Gather", method: () => loopAction(80) },
//     { description: "Move to forge", method: () => move(1, 5) },
//     { description: "Craft", method: async () => craft("copper", Math.floor(((await getInventoryItem("copper_ore")).quantity) / 10)) },
//     { description: "Move to bank", method: () => move(4, 1) },
//     {
//       description: "Deposit", method: async () => {
//         const item = "copper";
//         return bankDeposit(item, ((await getInventoryItem(item)).quantity))
//       }
//     },
//   ]);
// }


// console.log(await craft("cooked_chicken", 5));
// { description: "Rest", method: () => useItem("cooked_chicken", 2) },
// { description: "Fight", method: () => loopAction(5, 'fight') },

// { description: "Rest", method: () => rest() },
// { description: "Fight", method: () => loopAction(5,'fight') },
// { description: "Rest", method: () => rest() },
// { description: "Fight", method: () => loopAction(5,'fight') },
// { description: "Rest", method: () => rest() },
// { description: "Move to Ash Tree", method: () => move(-1, 0) },
// { description: "Gather", method: () => loopAction(50) },
// { description: "Moving to forge", method: () => move(1, 5) },
// { description: "Crafting copper", method: () => craft("copper", 2) },
// { description: "Move to Copper Rocks", method: () => move(2, 0) },

