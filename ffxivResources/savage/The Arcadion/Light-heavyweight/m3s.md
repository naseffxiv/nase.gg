---
sidebar_position: 3
sidebar_custom_props:
  cardImage: 'arcadion/light-heavyweight/Brute_Bomber_from_FFXIV.webp'
title: M3S - Brute Bomber
slug: /aac/lhw/m3s
pagination_next: null
pagination_prev: null
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# M3S - Brute Bomber
![M3S_Arena](/arcadion/light-heavyweight/M3S_Arena.png)

***

## Party Finder Summary

### Party Finder TL;DR {tldr}

```
Hector | No KBI | Supp CCW | MMRR
```

### Party Finder Terms

<Tabs>
  <TabItem value="Hector" label="Hector" default>
    Fusedown Positions: H1R1 static North | H2R2 static South | MTM1 and OTM2 are east/west respectively using True North
  </TabItem>
  <TabItem value="no KBI" label="no KBI">
    Ride the knockback towers.
  </TabItem>
  <TabItem value=" Supp CCW" label=" Supp CCW">
    Supports rotate CCW for partner quads/stacks.
  </TabItem>
  <TabItem value="MMRR" label="MMRR">
    Fusefield: CW from North M1M2R1R2
  </TabItem>
</Tabs>

Less common variations
<Tabs>
  <TabItem value="Snakes prio" label="snakes">
    Group 1 searches NW clockwise, group 2 searches N counterclockwise, both in RM order. This is equivalent to R2M2M1R1 from north clockwise, and sometimes abbreviated RMMR.
  </TabItem>
</Tabs>

***

## Arena Markers

```json
 {"Name":"NASEbin - M3S","MapID":990,"A":{"X":100.078,"Y":0.0,"Z":93.111,"ID":0,"Active":true},"B":{"X":106.818,"Y":0.0,"Z":99.948,"ID":1,"Active":true},"C":{"X":100.06,"Y":0.0,"Z":106.72,"ID":2,"Active":true},"D":{"X":93.196,"Y":0.0,"Z":99.736,"ID":3,"Active":true},"One":{"X":91.665,"Y":0.0,"Z":91.519,"ID":4,"Active":true},"Two":{"X":108.531,"Y":0.0,"Z":91.493,"ID":5,"Active":true},"Three":{"X":108.496,"Y":0.0,"Z":108.282,"ID":6,"Active":true},"Four":{"X":91.613,"Y":0.0,"Z":108.359,"ID":7,"Active":true}}
```

***

## Video Guides and PoVs

No guide follows NA Party Finder 1-1. When one is made we will include it.

***

## Detailed Fight Overview

Work in progress...

### Repeat Mechanics

The first lariat and dive, before the first draught, always follow the non-glowing hands pattern.
The second lariat and dive, after the first draught, always follow the glowing hands pattern.
3rd and beyond can be any pattern.

"Octoboom" is spreads, "Quadroboom" is pairs.

#### Lariat

Glowing hands -> donut; non-glowing hands -> out.
The quadroboom cones are very narrow, around 15 degrees. The octoboom cones are about 45 degrees.
Spreads should be to clockspot directions. For pairs, support rotate CCW onto the DPS with the same color waymark. Lariats are always resolved using true north clockspots even if the boss was not facing north coming out of a prior mechanic.

#### Dive

Glowing hands -> KB; non-glowing hands -> flare/away.
KBI is recommended for melee uptime.

#### Brutal Impact

Starts with 4 hits. Adds 2 additional hits for every stack of Doping Draught, in addition to the 10% damage increase from Doping Draught.

#### Knuckle Sandwich

Starts with 4 hits. Adds 2 additional hits for every stack of Doping Draught, in addition to the 10% damage increase from Doping Draught.
After the second Draught, tanks use invulns for the TB (MT first, OT second) and regular mits for autoattacks throughout the rest of the fight. Hits are spread over 8s so precise timing on invuln is necessary.

### Barrage

First towers spawn at opposite cardinals; Melee takes the North or West tower, ranged takes the South or East tower. Group 1 rides KB left facing center, group 2 rides KB right facing center. Do not attempt to KBI unless the entire party also plans to do so -- doing so is a "barse"-only strat. 

### Chain Deathmatch 1

Players will be chained to one clone and will only see their own chain. Players must get hit by that clone's first attack but not the second one.
Clones always invert their cleave direction when bouncing off the ropes, so the corner that is hit by both cleaves the first time will be safe for the second cleaves.
Followed immediately by a Lariat.

### Final Fusedown

Eight Bombs spawn around the room; four have a short fuse and four have a long fuse. NE and SW fuses are always long; NW and SE fuses are always short. N+E fuses always match (long or short), as do S+W.
All players get a Fuse, with one role getting a short fuse and the other role getting a long fuse. Short fuses spread first while long fuses stack near the center of the room, leaned slightly toward whichever two cardinal Bombs have a long fuse. Both Bomb and player short fuses detonate at the same time and the roles swap stack/spread positions.
G1 R/H spreads to NE then NW; G2 R/H spreads to SW then SE.
G1 M/T spreads to N or W; G2 M/T spreads to E or S.
Followed immeditaely by a Dive to a random cardinal.

### Fusefield

Players receive a 26s (short) or 44s (long) Bombariuim debuff; all DPS will have the same debuff duration, as will all Support. If not cleansed with a fuse, the player will die. Cleansing by stepping on a fuse removes both the fuse and debuff and applies heavy raidwide damage with 4s magic vulnerability, preventing rapid detonation.
MMRR solution: Starting at North, M1 search clockwise for the first fuse that is short (if the player's debuff is also short) and prepositions onto it. M2 finds the second short fuse, R1 finds the third, and R2 finds the fourth. There is no damage during this mechanic except player fuse explosions, so M1 should step on their fuse ASAP.

Snakes prio: R1 and M1, in that order, search from North clockwise; R2 and M2 in that order search from Northwest counterclockwise. Equivalently: R2, M2, M1, R1 search in that order from North going clockwise.

Stepping on a fuse without a Bombarium debuff is lethal but will detonate the fuse and potentially prevent a wipe in strange circumstances such as rez recovery. Bombarium debuffs will expire well before the fuses reach the boss at the center, so players (e.g. long R2) cannot wait for the burning fuse to reach them passively. Fuse hit detection is also notoriously unreliable, so plan to wiggle on your burning fuse to detonate it.

Note for GNB and DRK: This is one of the only sources of magic damage in the entire fight and by far the most important. Player fuses are the other source, as well as certain avoidable attacks.

### Bombarian Special

The "Octoboom" or "Quadroboom" during the initial castbar denotes whether the ending will be pairs or spreads.
Total damage from the sequence is significantly higher than the Big Impact under 2x Doping Draught.

### Chain Deathmatch 2

Players will be chained to one clone and the boss and will only see their own chains. Players must get hit by that clone's first cleave and the boss cast of Murderous Mist (at a random cardinal).
Clones always invert their cleave direction when bouncing off the ropes, so the corner that is hit by both cleaves the first time will be safe for the second cleaves.

### Infernal Spin



### Barrage 2

Follow the solution from Barrage 1, but instead of Murderous Mist, the boss will run to a random cardinal and perform a 3/4 room cleave as per the Chain Deathmatch clones.

