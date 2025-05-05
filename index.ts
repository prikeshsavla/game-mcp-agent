import move from "./actions/move.ts";
import rest from "./actions/rest.ts";
import fight from "./actions/fight.ts";
import gather from "./actions/gather.ts";
import unequip from "./actions/unequip.ts";
import craft from "./actions/craft.ts";
import equip from "./actions/equip.ts";
import loopGather from "./actions/loopGather.ts";
import getMaps from "./actions/async/getMaps.ts";
import chainMethods from "./utils/chainMethods.ts";
import getCharacter from "./actions/async/getCharacter.ts";
import useItem from "./actions/useItem.ts";


export { move, rest, fight, gather, unequip, craft, equip, loopGather, getMaps};

await chainMethods([
//     { description: "Rest", method: () => rest() },
    // { description: "Fight", method: () => loopGather(2,'fight') },
    // { description: "Rest", method: () => rest() },
    // { description: "Fight", method: () => loopGather(5,'fight') },
    // { description: "Rest", method: () => rest() },
    // { description: "Fight", method: () => loopGather(5,'fight') },
    // { description: "Rest", method: () => rest() },
    // { description: "Move to Ash Tree", method: () => move(-1, 0) },
    { description: "Gather", method: () => loopGather(50) },
    { description: "Moving to forge", method: () => move(1, 5) },
    { description: "Crafting copper", method: () => craft("copper", 2) },
    // { description: "Move to Copper Rocks", method: () => move(2, 0) },
])

// console.log(await craft("cooked_chicken", 5));