---
sidebar_position: 3
sidebar_custom_props:
  cardImage: 'arcadion/light-heavyweight/M3S_Arena.png'
title: M3S - Brute Bomber
slug: /m3s
pagination_next: null
pagination_prev: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M3S - Brute Bomber
![M3S_Arena](/arcadion/light-heavyweight/M3S_Arena.png)

## Party Finder Summary

***

### Party Finder TL;DR

```
Hector | No KBI | Supp CCW | MMRR
```

***

### Party Finder Terms

<Tabs>
  <TabItem value="Hector" label="Hector" default>
    Fusedown Positions: H1R1 static North | H2R2 static South | MTM1 and OTM2 are east/west respectively using True North
  </TabItem>
  <TabItem value="no KBI" label="no KBI">
    Ride the knockback towers. Melee N/W Ranged S/E (Get knocked back boss relative group 1 left, group 2 right)
  </TabItem>
  <TabItem value=" Supp CCW" label=" Supp CCW">
    Supports rotate CCW for partner quads/stacks.
  </TabItem>
  <TabItem value="MMRR" label="MMRR">
    Fusefield: CW from North M1M2R1R2
  </TabItem>
</Tabs>

***

### Raidplans

[Fullfight raidplan](https://raidplan.io/plan/RA356IAfPAKoPqJL)

***

### Arena Markers

```json
 {"Name":"NASEbin - M3S","MapID":990,"A":{"X":100.078,"Y":0.0,"Z":93.111,"ID":0,"Active":true},"B":{"X":106.818,"Y":0.0,"Z":99.948,"ID":1,"Active":true},"C":{"X":100.06,"Y":0.0,"Z":106.72,"ID":2,"Active":true},"D":{"X":93.196,"Y":0.0,"Z":99.736,"ID":3,"Active":true},"One":{"X":91.665,"Y":0.0,"Z":91.519,"ID":4,"Active":true},"Two":{"X":108.531,"Y":0.0,"Z":91.493,"ID":5,"Active":true},"Three":{"X":108.496,"Y":0.0,"Z":108.282,"ID":6,"Active":true},"Four":{"X":91.613,"Y":0.0,"Z":108.359,"ID":7,"Active":true}}
```

***

## Detailed Fight Overview

***

### Repeat Mechanics

<Tabs>
  <TabItem value="Lariat" label="Lariat" default>
    Glowing hands -> donut; non-glowing hands -> out.
    
    The Quadroboom cones are very narrow, around 15 degrees. The Octoboom cones are about 45 degrees.
    
    Spreads should be to clock spot directions. For pairs, supports rotate counterclockwise (CCW) onto the DPS with the same color waymark.
    
    Lariats are always resolved using True North clock spots, even if the boss was not facing north after a prior mechanic.
  </TabItem>
  <TabItem value="Dive" label="Dive">
    Glowing hands -> knockback (KB); non-glowing hands -> flare/away. Knockback immunity (KBI) is recommended for maintaining melee uptime.
  </TabItem>
  <TabItem value="Brutal Impact" label="Brutal Impact">
    Starts with 4 hits. Adds 2 additional hits for every stack of Doping Draught, in addition to the 10% damage increase from Doping Draught.
  </TabItem>
  <TabItem value="Knuckle Sandwich" label="Knuckle Sandwich">
    Starts with 4 hits. Adds 2 additional hits for every stack of Doping Draught, in addition to the 10% damage increase from Doping Draught.
    
    After the second Draught, tanks use invulnerability skills (invulns) for the tank busters (TBs), with the main tank (MT) going first, followed by the off-tank (OT). Regular mitigations are used for auto-attacks throughout the rest of the fight. 
    Hits are spread over 8 seconds, so precise timing on invulns is necessary.
  </TabItem>
</Tabs>

:::tip
- The first Lariat and Dive, before the first Draught, always follow the non-glowing hands pattern.
- The second Lariat and Dive, after the first Draught, always follow the glowing hands pattern.
- From the third time onward, any pattern can occur.
- "Octoboom" refers to spreads, while "Quadroboom" refers to pairs.
:::

***

### Barrage

First towers spawn at opposite cardinals. Melee players take the North or West tower, and ranged players take the South or East tower. 
Group 1 rides the knockback to the left while facing the center, and Group 2 rides it to the right while facing the center.

Do not attempt to use knockback immunity unless the entire party plans to do so; otherwise, it's a "barse"-only strategy.

***

### Chain Deathmatch 1

Players will be chained to one clone and will only see their own chain. 
Players must get hit by their clone's first attack but avoid the second one.

Clones always invert their cleave direction when bouncing off the ropes, so the corner that is hit by both cleaves the first time will be safe for the second cleaves.
This is immediately followed by a Lariat.

***

### Final Fusedown

Eight bombs spawn around the room; four have a short fuse and four have a long fuse. 
NE and SW fuses are always long; NW and SE fuses are always short. 
N+E fuses always match in duration (long or short), as do S+W.

All players receive a fuse, with one role getting a short fuse and the other role getting a long fuse. 
Short fuses spread first while long fuses stack near the center of the room, slightly toward the two cardinal bombs with long fuses. 
Both bomb and player short fuses detonate simultaneously, and the roles swap stack/spread positions.

* Group 1 R/H spreads to NE then NW; Group 2 R/H spreads to SW then SE.
* Group 1 M/T spreads to N or W; Group 2 M/T spreads to E or S.

Immediately followed by a Dive to a random cardinal.

***

### Fusefield

Players receive a 26s (short) or 44s (long) Bombarium debuff; all DPS will have the same debuff duration, as will all Supports. 
If not cleansed with a fuse, the player will die. Cleansing by stepping on a fuse removes both the fuse and the debuff and causes heavy raidwide damage with a 4-second magic vulnerability, preventing rapid detonation.

Starting at North, M1 searches clockwise for the first short fuse (if the player's debuff is also short) and prepositions onto it. 
M2 finds the second short fuse, R1 finds the third, and R2 finds the fourth. 
There is no damage during this mechanic except from player fuse explosions, so M1 should step on their fuse as soon as possible.

Stepping on a fuse without a Bombarium debuff is lethal but will detonate the fuse and potentially prevent a wipe in unusual situations, such as a recovery after a resurrection. Bombarium debuffs will expire well before the fuses reach the boss at the center, so players (e.g., long R2) cannot wait for the burning fuse to reach them passively. Fuse hit detection is also notoriously unreliable, so plan to move around on your burning fuse to ensure detonation.

:::tip
This is one of the only sources of magic damage in the entire fight and by far the most important. Player fuses are another source, as well as certain avoidable attacks.
:::

***

### Bombarian Special

The "Octoboom" or "Quadroboom" during the initial cast bar indicates whether the ending will involve pairs or spreads.

Total damage from this sequence is significantly higher than the Big Impact under 2x Doping Draught.

***

### Chain Deathmatch 2

Players will be chained to one clone and the boss and will only see their own chains. Players must get hit by their clone's first cleave and the boss's cast of Murderous Mist (at a random cardinal).

Clones always invert their cleave direction when bouncing off the ropes, so the corner that is hit by both cleaves the first time will be safe for the second cleaves.

***

### Fuse or Foe

At the beginning of the mechanic, everyone will be targeted again with short or long fuses. 
These fuses can be ignored throughout the mechanic.
The boss will also telegraph a rotating, conal AoE, and two ground AoEs will appear on two intercards across from each other. 
Note: When these AoEs go off, they will expand into a donut AoE.

For the initial dodge, wait for the ground AoEs to appear, and follow the boss's spin normally while moving into the expanding AoEs. When the boss has rotated 180 degrees, dodge into the middle of the arena behind the boss as the donuts will expand again.
The fuses will ignite towards the end of the boss's rotation, and another set of donuts will appear. 
Spread to your clock positions while dodging the AoEs.

:::note
To keep uptime, melee and healers swap clock positions for this mechanic.
:::

The bombs will explode one after another. 
After each explosion, donut AoEs will continue to appear. 
Stay near your waymark and dodge into the safe spot. 
After the bombs conclude on both role groups, resolve protean or pairs with in or out mechanics.

***

### Barrage 2

Follow the strategy from Barrage 1, but instead of Murderous Mist, the boss will run to a random cardinal and perform a 3/4 room cleave, similar to the Chain Deathmatch clones.
