import move from "./actions/move.ts";
import rest from "./actions/rest.ts";
import fight from "./actions/fight.ts";
import gather from "./actions/gather.ts";
import unequip from "./actions/unequip.ts";
import craft from "./actions/craft.ts";
import equip from "./actions/equip.ts";
import loopGather from "./actions/loopGather.ts";
import getMaps from "./actions/getMaps.ts";
import chainMethods from "./utils/chainMethods.ts";
import getCharacter from "./actions/getCharacter.ts";


export { move, rest, fight, gather, unequip, craft, equip, loopGather, getMaps};

await chainMethods([
    { description: "Gathering", method: () => loopGather(20) },
    { description: "Moving to forge", method: () => move(1, 5) },
    { description: "Crafting copper", method: () => craft("copper", 2) },
    { description: "Move to Copper Rocks", method: () => move(2, 0) },
])