import move from "./move.ts";
import rest from "./rest.ts";
import fight from "./fight.ts";
import gather from "./gather.ts";
import unequip from "./unequip.ts";
import craft from "./craft.ts";
import equip from "./equip.ts";
import loopGather from "./loopGather.ts";
import getMaps from "./getMaps.ts";


export { move, rest, fight, gather, unequip, craft, equip, loopGather};

    
await getMaps({content_type: 'resource', content_code: 'copper_rock'});