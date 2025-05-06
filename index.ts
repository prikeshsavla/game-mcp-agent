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
};

    
// await chainMethods([
//         { description: "Fight", method: () => loopAction(5, "fight") },
//         { description: "Rest", method: () => useItem("fried_eggs", 1) },

//         { description: "Fight", method: () => loopAction(5, "fight") },
//         { description: "Rest", method: () => useItem("fried_eggs", 1) },
//         { description: "Fight", method: () => loopAction(5, "fight") },
//         { description: "Rest", method: () => useItem("fried_eggs", 1) },
//     ]);
// await move(0, 1)
// for (let i = 0; i < 16; i++) {
    // await chainMethods([
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
    //     { description: "Fight", method: () => loopAction(6, "fight") },
    //     { description: "Rest", method: () => rest() },
    // ]);
// }
// await chainMethods([
//     { description: "", method: () => move(-2. - 3) },
//     { description: "", method: () => craft("ash_plank", 7) }
// ])
    

// for (let i = 0; i < 3; i++) {
//     await chainMethods([
//         { description: "Mobr", method: () => move(2,0) },
//         { description: "Gather", method: () => loopAction(70) },
//         { description: "Move to bank", method: () => move(4,1) },
//         {
//             description: "Deposit", method: async () => {
//                 const charc = await getCharacter();
//                 const item = "copper_ore";
//             return bankDeposit(item,(charc.inventory.find(b => b.code == item)).quantity )
//         } },
//     ]);
// }


// for (let i = 0; i < 2; i++) {
    // await chainMethods([
    // { description: "Move to bank", method: () => move(4,1) },
    //     {
    //         description: "Deposit", method: async () => {
    //             const charc = await getCharacter();
    //             const item = "copper";
    //         return bankDeposit(item,(charc.inventory.find(b => b.code == item)).quantity )
    //         }
    //     },
    //     { description: "Withdraw", method: () => bankWithdraw('copper_ore',81) },
    //     { description: "Move to forge", method: () => move(1,5) },
    //     { description: "Craft", method: () => craft("copper", 9) },

    //     { description: "Move to bank", method: () => move(4,1) },
    //     {
    //         description: "Deposit", method: async () => {
    //             const charc = await getCharacter();
    //             const item = "copper";
    //         return bankDeposit(item,(charc.inventory.find(b => b.code == item)).quantity )
    //         }
    //     },
    // ]);
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