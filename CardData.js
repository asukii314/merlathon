
const CARD_DATA = {
  "A Thousand Cuts": {
    "NAME": "A Thousand Cuts",
    "DESCRIPTION": "Whenever you play a card, deal !M! damage to ALL enemies."
  },
  "Accuracy": {
    "NAME": "Accuracy",
    "DESCRIPTION": "*Shivs deal !M! additional damage."
  },
  "Acrobatics": {
    "NAME": "Acrobatics",
    "DESCRIPTION": "Draw !M! cards.\nDiscard 1 card."
  },
  "Adrenaline": {
    "NAME": "Adrenaline",
    "DESCRIPTION": "Gain [G].\nDraw 2 cards.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Gain [G] [G].\nDraw 2 cards.\nExhaust."
  },
  "After Image": {
    "NAME": "After Image",
    "DESCRIPTION": "Whenever you play a card, gain 1 Block.",
    "UPGRADE_DESCRIPTION": "Innate.\nWhenever you play a card, gain 1 Block."
  },
  "Aggregate": {
    "NAME": "Aggregate",
    "DESCRIPTION": "Gain [B] for every !M! cards in your draw pile."
  },
  "All For One": {
    "NAME": "All for One",
    "DESCRIPTION": "Deal !D! damage.\nPut all cost 0 cards from your discard pile into your hand."
  },
  "All Out Attack": {
    "NAME": "All-Out Attack",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nDiscard 1 card at random."
  },
  "Allocate": {
    "NAME": "Allocate",
    "DESCRIPTION": "Gain !M! Focus.\nLose 1 Strength.\nLose 1 Dexterity."
  },
  "Amplify": {
    "NAME": "Amplify",
    "DESCRIPTION": "This turn, your next Power card is played twice.",
    "UPGRADE_DESCRIPTION": "This turn, your next !M! Power cards are played twice."
  },
  "Anger": {
    "NAME": "Anger",
    "DESCRIPTION": "Deal !D! damage.\nAdd a copy of this card into your discard pile."
  },
  "Apotheosis": {
    "NAME": "Apotheosis",
    "DESCRIPTION": "Upgrade ALL your cards for the rest of combat.\nExhaust."
  },
  "Armaments": {
    "NAME": "Armaments",
    "DESCRIPTION": "Gain !B! Block.\nUpgrade a card in your hand for the rest of combat.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nUpgrade all cards in your hand for the rest of combat."
  },
  "AscendersBane": {
    "NAME": "Ascender's Bane",
    "DESCRIPTION": "Unplayable.\nEthereal.\nCannot be removed from your deck."
  },
  "Auto Shields": {
    "NAME": "Auto-Shields",
    "DESCRIPTION": "If you have no Block, gain !B! Block."
  },
  "Axe Kick": {
    "NAME": "Axe Kick",
    "DESCRIPTION": "Deal !D! damage.\nEvoke your next Orb."
  },
  "Backflip": {
    "NAME": "Backflip",
    "DESCRIPTION": "Gain !B! Block.\nDraw 2 cards."
  },
  "Backstab": {
    "NAME": "Backstab",
    "DESCRIPTION": "Innate.\nDeal !D! damage.\nExhaust."
  },
  "Ball Lightning": {
    "NAME": "Ball Lightning",
    "DESCRIPTION": "Deal !D! damage. Channel !M! Lightning."
  },
  "Bandage Up": {
    "NAME": "Bandage Up",
    "DESCRIPTION": "Heal !M! HP.\nExhaust."
  },
  "Bane": {
    "NAME": "Bane",
    "DESCRIPTION": "Deal !D! damage.\nIf the enemy has Poison, deal !D! damage again."
  },
  "Barrage": {
    "NAME": "Barrage",
    "DESCRIPTION": "Deal !D! damage for each Channeled Orb."
  },
  "Barricade": {
    "NAME": "Barricade",
    "DESCRIPTION": "Block is not removed at the start of your turn."
  },
  "Bash": {
    "NAME": "Bash",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Vulnerable."
  },
  "Battle Trance": {
    "NAME": "Battle Trance",
    "DESCRIPTION": "Draw !M! cards.\nYou cannot draw additional cards this turn."
  },
  "Beam Cell": {
    "NAME": "Beam Cell",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Vulnerable."
  },
  "Berserk": {
    "NAME": "Berserk",
    "DESCRIPTION": "Gain !M! Vulnerable.\nAt the start of your turn, gain [R]."
  },
  "Biased Cognition": {
    "NAME": "Biased Cognition",
    "DESCRIPTION": "Gain !M! Focus.\nAt the start of your turn, lose 1 Focus."
  },
  "Bite": {
    "NAME": "Bite",
    "DESCRIPTION": "Deal !D! damage.\nHeal !M! HP."
  },
  "Blade Dance": {
    "NAME": "Blade Dance",
    "DESCRIPTION": "Add !M! *Shivs into your hand."
  },
  "Blaster": {
    "NAME": "Blaster",
    "DESCRIPTION": "deprecated"
  },
  "Blind": {
    "NAME": "Blind",
    "DESCRIPTION": "Apply !M! Weak.",
    "UPGRADE_DESCRIPTION": "Apply !M! Weak to ALL enemies."
  },
  "Blizzard": {
    "NAME": "Blizzard",
    "DESCRIPTION": "Deal damage equal to !M! times the number of Frost Channeled this combat to ALL enemies.",
    "UPGRADE_DESCRIPTION": "",
    "EXTENDED_DESCRIPTION": [
      "\n(Deals !D! damage.)",
      ""
    ]
  },
  "Blood for Blood": {
    "NAME": "Blood for Blood",
    "DESCRIPTION": "Costs 1 less [R]\nfor each time you lose HP this combat.\nDeal !D! damage."
  },
  "Bloodletting": {
    "NAME": "Bloodletting",
    "DESCRIPTION": "Lose 3 HP.\nGain [R] [R].",
    "UPGRADE_DESCRIPTION": "Lose 3 HP.\nGain [R] [R] [R]."
  },
  "Bludgeon": {
    "NAME": "Bludgeon",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Blur": {
    "NAME": "Blur",
    "DESCRIPTION": "Gain !B! Block.\nBlock is not removed at the start of your next turn."
  },
  "Body Slam": {
    "NAME": "Body Slam",
    "DESCRIPTION": "Deal damage equal to your Block.",
    "UPGRADE_DESCRIPTION": "\n(Deals !D! damage.)"
  },
  "BootSequence": {
    "NAME": "Boot Sequence",
    "DESCRIPTION": "Innate.\nGain !B! Block.\nExhaust."
  },
  "Bouncing Flask": {
    "NAME": "Bouncing Flask",
    "DESCRIPTION": "Apply 3 Poison to a random enemy !M! times."
  },
  "Brutality": {
    "NAME": "Brutality",
    "DESCRIPTION": "At the start of your turn, lose 1 HP and draw 1 card.",
    "UPGRADE_DESCRIPTION": "Innate.\nAt the start of your turn, lose 1 HP and draw 1 card."
  },
  "Buffer": {
    "NAME": "Buffer",
    "DESCRIPTION": "Prevent the next time you would lose HP.",
    "UPGRADE_DESCRIPTION": "Prevent the next !M! times you would lose HP."
  },
  "Bullet Time": {
    "NAME": "Bullet Time",
    "DESCRIPTION": "You cannot draw additional cards this turn. Reduce the cost of all cards in your hand to 0 this turn."
  },
  "Burn": {
    "NAME": "Burn",
    "DESCRIPTION": "Unplayable.\nAt the end of your turn, take 2 damage.",
    "UPGRADE_DESCRIPTION": "Unplayable.\nAt the end of your turn, take 4 damage."
  },
  "Burning Pact": {
    "NAME": "Burning Pact",
    "DESCRIPTION": "Exhaust 1 card.\nDraw !M! cards."
  },
  "Burst": {
    "NAME": "Burst",
    "DESCRIPTION": "This turn, your next Skill is played twice.",
    "UPGRADE_DESCRIPTION": "This turn, your next !M! Skills are played twice."
  },
  "Calculated Gamble": {
    "NAME": "Calculated Gamble",
    "DESCRIPTION": "Discard your hand,\nthen draw that many cards.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Discard your hand,\nthen draw that many cards."
  },
  "Caltrops": {
    "NAME": "Caltrops",
    "DESCRIPTION": "Whenever you are attacked, deal !M! damage back."
  },
  "Capacitor": {
    "NAME": "Capacitor",
    "DESCRIPTION": "Gain !M! Orb slots.",
    "UPGRADE_DESCRIPTION": "Gain !M! Orb slots."
  },
  "Carnage": {
    "NAME": "Carnage",
    "DESCRIPTION": "Ethereal.\nDeal !D! damage."
  },
  "Catalyst": {
    "NAME": "Catalyst",
    "DESCRIPTION": "Double the enemy's Poison.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Triple the enemy's Poison.\nExhaust."
  },
  "Chaos": {
    "NAME": "Chaos",
    "DESCRIPTION": "Channel !M! random Orb.",
    "UPGRADE_DESCRIPTION": "Channel !M! random Orbs."
  },
  "Chill": {
    "NAME": "Chill",
    "DESCRIPTION": "Channel !M! Frost for each enemy in combat.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Innate.\nChannel !M! Frost for each enemy in combat.\nExhaust."
  },
  "Choke": {
    "NAME": "Choke",
    "DESCRIPTION": "Deal !D! damage.\nWhenever you play a card this turn, the enemy loses !M! HP."
  },
  "Chrysalis": {
    "NAME": "Chrysalis",
    "DESCRIPTION": "Shuffle !M! random Skills into your draw pile. They cost 0 this combat.\nExhaust."
  },
  "Clash": {
    "NAME": "Clash",
    "DESCRIPTION": "Can only be played if every card in your hand is an Attack.\nDeal !D! damage.",
    "EXTENDED_DESCRIPTION": [
      "I have non-Attack cards in my hand."
    ]
  },
  "Cleave": {
    "NAME": "Cleave",
    "DESCRIPTION": "Deal !D! damage to ALL enemies."
  },
  "Cloak And Dagger": {
    "NAME": "Cloak and Dagger",
    "DESCRIPTION": "Gain !B! Block.\nAdd !M! *Shiv into your hand.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nAdd !M! *Shivs into your hand."
  },
  "Clothesline": {
    "NAME": "Clothesline",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Weak."
  },
  "Clumsy": {
    "NAME": "Clumsy",
    "DESCRIPTION": "Unplayable.\nEthereal."
  },
  "Cold Snap": {
    "NAME": "Cold Snap",
    "DESCRIPTION": "Deal !D! damage. Channel !M! Frost."
  },
  "Combust": {
    "NAME": "Combust",
    "DESCRIPTION": "At the end of your turn, lose 1 HP and deal !M! damage to ALL enemies."
  },
  "Concentrate": {
    "NAME": "Concentrate",
    "DESCRIPTION": "Discard !M! cards.\nGain [G] [G]."
  },
  "Conserve Battery": {
    "NAME": "Charge Battery",
    "DESCRIPTION": "Gain !B! Block.\nNext turn, gain [B]."
  },
  "Consume": {
    "NAME": "Consume",
    "DESCRIPTION": "Gain !M! Focus.\nLose 1 Orb slot."
  },
  "Coolheaded": {
    "NAME": "Coolheaded",
    "DESCRIPTION": "Channel 1 Frost.\nDraw !M! card.",
    "UPGRADE_DESCRIPTION": "Channel 1 Frost.\nDraw !M! cards."
  },
  "Corpse Explosion": {
    "NAME": "Corpse Explosion",
    "DESCRIPTION": "Apply !M! Poison.\nWhen the enemy dies, deal damage equal to its Max HP to ALL enemies.",
    "UPGRADE_DESCRIPTION": "deprecated",
    "EXTENDED_DESCRIPTION": [
      "deprecated"
    ]
  },
  "Corruption": {
    "NAME": "Corruption",
    "DESCRIPTION": "Skills cost 0.\nWhenever you play a Skill, Exhaust it."
  },
  "Creative AI": {
    "NAME": "Creative AI",
    "DESCRIPTION": "At the start of your turn, add a random Power card into your hand."
  },
  "Crippling Poison": {
    "NAME": "Crippling Cloud",
    "DESCRIPTION": "Apply !M! Poison and 2 Weak to ALL enemies.\nExhaust."
  },
  "Dagger Spray": {
    "NAME": "Dagger Spray",
    "DESCRIPTION": "Deal !D! damage to ALL enemies twice."
  },
  "Dagger Throw": {
    "NAME": "Dagger Throw",
    "DESCRIPTION": "Deal !D! damage.\nDraw 1 card.\nDiscard 1 card."
  },
  "Dark Embrace": {
    "NAME": "Dark Embrace",
    "DESCRIPTION": "Whenever a card is Exhausted,\ndraw 1 card."
  },
  "Dark Shackles": {
    "NAME": "Dark Shackles",
    "DESCRIPTION": "Enemy loses !M! Strength this turn.\nExhaust."
  },
  "Darkness": {
    "NAME": "Darkness",
    "DESCRIPTION": "Channel !M! Dark.",
    "UPGRADE_DESCRIPTION": "Channel !M! Dark.\nTrigger the passive ability of all Dark orbs."
  },
  "Dash": {
    "NAME": "Dash",
    "DESCRIPTION": "Gain !B! Block.\nDeal !D! damage."
  },
  "Dazed": {
    "NAME": "Dazed",
    "DESCRIPTION": "Unplayable.\nEthereal."
  },
  "Deadly Poison": {
    "NAME": "Deadly Poison",
    "DESCRIPTION": "Apply !M! Poison."
  },
  "Decay": {
    "NAME": "Decay",
    "DESCRIPTION": "Unplayable.\nAt the end of your turn, take 2 damage."
  },
  "Deep Breath": {
    "NAME": "Deep Breath",
    "DESCRIPTION": "Shuffle your discard pile into your draw pile.\nDraw !M! card.",
    "UPGRADE_DESCRIPTION": "Shuffle your discard pile into your draw pile.\nDraw !M! cards."
  },
  "Defend_B": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Defend_G": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Defend_R": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Defend_P": {
    "NAME": "Defend",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Deflect": {
    "NAME": "Deflect",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Defragment": {
    "NAME": "Defragment",
    "DESCRIPTION": "Gain !M! Focus."
  },
  "Demon Form": {
    "NAME": "Demon Form",
    "DESCRIPTION": "At the start of your turn, gain !M! Strength."
  },
  "Die Die Die": {
    "NAME": "Die Die Die",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nExhaust."
  },
  "Disarm": {
    "NAME": "Disarm",
    "DESCRIPTION": "Enemy loses !M! Strength.\nExhaust."
  },
  "Distraction": {
    "NAME": "Distraction",
    "DESCRIPTION": "Add a random Skill into your hand.\nIt costs 0 this turn.\nExhaust."
  },
  "Dodge and Roll": {
    "NAME": "Dodge and Roll",
    "DESCRIPTION": "Gain !B! Block.\nNext turn, gain !B! Block."
  },
  "Doom and Gloom": {
    "NAME": "Doom and Gloom",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nChannel !M! Dark."
  },
  "Doppelganger": {
    "NAME": "Doppelganger",
    "DESCRIPTION": "Next turn, draw X cards and gain X [G].\nExhaust.",
    "UPGRADE_DESCRIPTION": "Next turn, draw X+1 cards and gain X+1 [G].\nExhaust."
  },
  "Double Energy": {
    "NAME": "Double Energy",
    "DESCRIPTION": "Double your Energy.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Double your Energy."
  },
  "Double Tap": {
    "NAME": "Double Tap",
    "DESCRIPTION": "This turn, your next Attack is played twice.",
    "UPGRADE_DESCRIPTION": "This turn, your next !M! Attacks are played twice."
  },
  "Doubt": {
    "NAME": "Doubt",
    "DESCRIPTION": "Unplayable.\nAt the end of your turn, gain 1 Weak."
  },
  "Dramatic Entrance": {
    "NAME": "Dramatic Entrance",
    "DESCRIPTION": "Innate.\nDeal !D! damage to ALL enemies.\nExhaust."
  },
  "Dropkick": {
    "NAME": "Dropkick",
    "DESCRIPTION": "Deal !D! damage.\nIf the enemy has Vulnerable,\ngain [R] and\ndraw 1 card."
  },
  "Dual Wield": {
    "NAME": "Dual Wield",
    "DESCRIPTION": "Choose an Attack or Power card. Add a copy of that card into your hand.",
    "UPGRADE_DESCRIPTION": "Choose an Attack or Power card. Add 2 copies of that card into your hand."
  },
  "Dualcast": {
    "NAME": "Dualcast",
    "DESCRIPTION": "Evoke your next Orb twice."
  },
  "Echo Form": {
    "NAME": "Echo Form",
    "DESCRIPTION": "Ethereal.\nThe first card you play each turn is played twice.",
    "UPGRADE_DESCRIPTION": "The first card you play each turn is played twice."
  },
  "Electrodynamics": {
    "NAME": "Electrodynamics",
    "DESCRIPTION": "Lightning now hits ALL enemies.\nChannel !M! Lightning.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Endless Agony": {
    "NAME": "Endless Agony",
    "DESCRIPTION": "Deal !D! damage.\nWhenever you draw this card, add a copy of it into your hand.\nExhaust."
  },
  "Energy Pulse": {
    "NAME": "Energy Pulse",
    "DESCRIPTION": "Gain Block equal to your Energy.",
    "UPGRADE_DESCRIPTION": "Gain Block equal to twice your Energy."
  },
  "Enlightenment": {
    "NAME": "Enlightenment",
    "DESCRIPTION": "Reduce the cost of all cards in your hand to 1 this turn.",
    "UPGRADE_DESCRIPTION": "Reduce the cost of all cards in your hand to 1 this combat."
  },
  "Entrench": {
    "NAME": "Entrench",
    "DESCRIPTION": "Double your Block.",
    "UPGRADE_DESCRIPTION": "Double your Block."
  },
  "Envenom": {
    "NAME": "Envenom",
    "DESCRIPTION": "Whenever an Attack deals unblocked damage, apply 1 Poison."
  },
  "Escape Plan": {
    "NAME": "Escape Plan",
    "DESCRIPTION": "Draw 1 card.\nIf you draw a Skill, gain !B! Block."
  },
  "Eviscerate": {
    "NAME": "Eviscerate",
    "DESCRIPTION": "Costs 1 less [G]\nfor each card discarded this turn.\nDeal !D! damage 3 times."
  },
  "Evolve": {
    "NAME": "Evolve",
    "DESCRIPTION": "Whenever you draw a Status card, draw !M! card.",
    "UPGRADE_DESCRIPTION": "Whenever you draw a Status card, draw !M! cards."
  },
  "Exhume": {
    "NAME": "Exhume",
    "DESCRIPTION": "Put a card from your exhaust pile into your hand.\nExhaust."
  },
  "Expertise": {
    "NAME": "Expertise",
    "DESCRIPTION": "Draw cards until you have !M! in your hand."
  },
  "FTL": {
    "NAME": "FTL",
    "DESCRIPTION": "Deal !D! damage. If you have played less than !M! cards this turn, draw 1 card.",
    "EXTENDED_DESCRIPTION": [
      "\n(",
      " card played.)",
      " cards played.)"
    ]
  },
  "Feed": {
    "NAME": "Feed",
    "DESCRIPTION": "Deal !D! damage.\nIf Fatal, raise your Max HP by !M!. Exhaust."
  },
  "Feel No Pain": {
    "NAME": "Feel No Pain",
    "DESCRIPTION": "Whenever a card is Exhausted,\ngain !M! Block."
  },
  "Fiend Fire": {
    "NAME": "Fiend Fire",
    "DESCRIPTION": "Exhaust your hand.\nDeal !D! damage for each card Exhausted.\nExhaust."
  },
  "Finesse": {
    "NAME": "Finesse",
    "DESCRIPTION": "Gain !B! Block.\nDraw 1 card."
  },
  "Finisher": {
    "NAME": "Finisher",
    "DESCRIPTION": "Deal !D! damage for each Attack played this turn.",
    "EXTENDED_DESCRIPTION": [
      "\n(",
      " Attack played.)",
      " Attacks played.)"
    ]
  },
  "Fire Breathing": {
    "NAME": "Fire Breathing",
    "DESCRIPTION": "Whenever you draw a Status or Curse card, deal !M! damage to ALL enemies."
  },
  "Fission": {
    "NAME": "Fission",
    "DESCRIPTION": "Remove all your Orbs. Gain [B] and draw !M! card for each Orb removed.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Evoke all your Orbs. Gain [B] and draw !M! card for each Orb Evoked.\nExhaust."
  },
  "Flame Barrier": {
    "NAME": "Flame Barrier",
    "DESCRIPTION": "Gain !B! Block.\nWhenever you are attacked this turn, deal !M! damage back."
  },
  "Flash of Steel": {
    "NAME": "Flash of Steel",
    "DESCRIPTION": "Deal !D! damage.\nDraw 1 card."
  },
  "Flechettes": {
    "NAME": "Flechettes",
    "DESCRIPTION": "Deal !D! damage for each Skill in your hand.",
    "EXTENDED_DESCRIPTION": [
      "\n(You have ",
      " Skill).",
      " Skills)."
    ]
  },
  "Flex": {
    "NAME": "Flex",
    "DESCRIPTION": "Gain !M! Strength.\nAt the end of this turn, lose !M! Strength."
  },
  "Flux Capacitor": {
    "NAME": "Flux Capacitor",
    "DESCRIPTION": "Replace all Channeled Orbs with Plasma.\nExhaust."
  },
  "Flying Knee": {
    "NAME": "Flying Knee",
    "DESCRIPTION": "Deal !D! damage.\nNext turn, gain [G]."
  },
  "Footwork": {
    "NAME": "Footwork",
    "DESCRIPTION": "Gain !M! Dexterity."
  },
  "Force Field": {
    "NAME": "Force Field",
    "DESCRIPTION": "Costs 1 less [B] for each Power card played this combat.\nGain !B! Block."
  },
  "Fusion": {
    "NAME": "Fusion",
    "DESCRIPTION": "Channel !M! Plasma."
  },
  "Gash": {
    "NAME": "Claw",
    "DESCRIPTION": "Deal !D! damage.\nIncrease the damage of ALL Claw cards by !M! this combat."
  },
  "Genetic Algorithm": {
    "NAME": "Genetic Algorithm",
    "DESCRIPTION": "Gain !B! Block. Permanently increase this card's Block by !M!.\nExhaust."
  },
  "Ghostly": {
    "NAME": "Apparition",
    "DESCRIPTION": "Ethereal.\nGain 1 Intangible.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Gain 1 Intangible.\nExhaust."
  },
  "Ghostly Armor": {
    "NAME": "Ghostly Armor",
    "DESCRIPTION": "Ethereal.\nGain !B! Block."
  },
  "Glacier": {
    "NAME": "Glacier",
    "DESCRIPTION": "Gain !B! Block.\nChannel !M! Frost.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nChannel !M! Frost."
  },
  "Glass Knife": {
    "NAME": "Glass Knife",
    "DESCRIPTION": "Deal !D! damage twice. Decrease the damage of this card by 2 this combat."
  },
  "Go for the Eyes": {
    "NAME": "Go for the Eyes",
    "DESCRIPTION": "Deal !D! damage.\nIf the enemy intends to attack, apply !M! Weak."
  },
  "Good Instincts": {
    "NAME": "Good Instincts",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Grand Finale": {
    "NAME": "Grand Finale",
    "DESCRIPTION": "Can only be played if there are no cards in your draw pile.\nDeal !D! damage to ALL enemies.",
    "UPGRADE_DESCRIPTION": "My draw pile\nmust be #rEmpty."
  },
  "Havoc": {
    "NAME": "Havoc",
    "DESCRIPTION": "Play the top card of your draw pile and Exhaust it."
  },
  "Headbutt": {
    "NAME": "Headbutt",
    "DESCRIPTION": "Deal !D! damage.\nPut a card from your discard pile on top of your draw pile."
  },
  "Heatsinks": {
    "NAME": "Heatsinks",
    "DESCRIPTION": "Whenever you play a Power card, draw !M! card.",
    "UPGRADE_DESCRIPTION": "Whenever you play a Power card, draw !M! cards."
  },
  "Heavy Blade": {
    "NAME": "Heavy Blade",
    "DESCRIPTION": "Deal !D! damage.\nStrength affects this card !M! times.",
    "UPGRADE_DESCRIPTION": "Deal !D! damage.\nStrength affects this card !M! times."
  },
  "Heel Hook": {
    "NAME": "Heel Hook",
    "DESCRIPTION": "Deal !D! damage.\nIf the enemy has Weak,\ngain [G] and\ndraw 1 card."
  },
  "Hello World": {
    "NAME": "Hello World",
    "DESCRIPTION": "At the start of your turn, add a random Common card into your hand.",
    "UPGRADE_DESCRIPTION": "Innate.\nAt the start of your turn, add a random Common card into your hand."
  },
  "Hemokinesis": {
    "NAME": "Hemokinesis",
    "DESCRIPTION": "Lose !M! HP.\nDeal !D! damage."
  },
  "Hide": {
    "NAME": "Hide",
    "DESCRIPTION": "You cannot lose HP until the start of your next turn.\nExhaust."
  },
  "Hologram": {
    "NAME": "Hologram",
    "DESCRIPTION": "Gain !B! Block.\nPut a card from your discard pile into your hand.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nPut a card from your discard pile into your hand."
  },
  "Hyperbeam": {
    "NAME": "Hyperbeam",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nLose !M! Focus."
  },
  "Immolate": {
    "NAME": "Immolate",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nAdd a *Burn into your discard pile."
  },
  "Impervious": {
    "NAME": "Impervious",
    "DESCRIPTION": "Gain !B! Block.\nExhaust."
  },
  "Infernal Blade": {
    "NAME": "Infernal Blade",
    "DESCRIPTION": "Add a random Attack into your hand.\nIt costs 0 this turn.\nExhaust."
  },
  "Infinite Blades": {
    "NAME": "Infinite Blades",
    "DESCRIPTION": "At the start of your turn, add a *Shiv into your hand.",
    "UPGRADE_DESCRIPTION": "Innate.\nAt the start of your turn, add a *Shiv into your hand."
  },
  "Inflame": {
    "NAME": "Inflame",
    "DESCRIPTION": "Gain !M! Strength."
  },
  "Injury": {
    "NAME": "Injury",
    "DESCRIPTION": "Unplayable."
  },
  "Intimidate": {
    "NAME": "Intimidate",
    "DESCRIPTION": "Apply !M! Weak to ALL enemies.\nExhaust."
  },
  "Iron Wave": {
    "NAME": "Iron Wave",
    "DESCRIPTION": "Gain !B! Block.\nDeal !D! damage."
  },
  "J.A.X.": {
    "NAME": "J.A.X.",
    "DESCRIPTION": "Lose 3 HP.\nGain !M! Strength."
  },
  "Jack Of All Trades": {
    "NAME": "Jack of All Trades",
    "DESCRIPTION": "Add !M! random Colorless card into your hand.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Add !M! random Colorless cards into your hand.\nExhaust."
  },
  "Juggernaut": {
    "NAME": "Juggernaut",
    "DESCRIPTION": "Whenever you gain Block, deal !M! damage to a random enemy."
  },
  "Leap": {
    "NAME": "Leap",
    "DESCRIPTION": "Gain !B! Block."
  },
  "Leg Sweep": {
    "NAME": "Leg Sweep",
    "DESCRIPTION": "Apply !M! Weak.\nGain !B! Block."
  },
  "Limit Break": {
    "NAME": "Limit Break",
    "DESCRIPTION": "Double your Strength.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Double your Strength."
  },
  "Lockon": {
    "NAME": "Bullseye",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Lock-On."
  },
  "Loop": {
    "NAME": "Loop",
    "DESCRIPTION": "At the start of your turn, trigger the passive ability of your next Orb.",
    "UPGRADE_DESCRIPTION": "At the start of your turn, trigger the passive ability of your next Orb !M! times."
  },
  "Machine Learning": {
    "NAME": "Machine Learning",
    "DESCRIPTION": "At the start of your turn, draw !M! additional card.",
    "UPGRADE_DESCRIPTION": "Innate.\nAt the start of your turn, draw !M! additional card."
  },
  "Study": {
    "NAME": "Study",
    "DESCRIPTION": "At the end of your turn, shuffle an *Insight into your draw pile."
  },
  "Madness": {
    "NAME": "Madness",
    "DESCRIPTION": "Reduce the cost of a random card in your hand to 0 this combat.\nExhaust."
  },
  "Magnetism": {
    "NAME": "Magnetism",
    "DESCRIPTION": "At the start of your turn, add a random Colorless card into your hand."
  },
  "Malaise": {
    "NAME": "Malaise",
    "DESCRIPTION": "Enemy loses X Strength. Apply X Weak.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Enemy loses X+1 Strength. Apply X+1 Weak.\nExhaust."
  },
  "Master of Strategy": {
    "NAME": "Master of Strategy",
    "DESCRIPTION": "Draw !M! cards.\nExhaust."
  },
  "Masterful Stab": {
    "NAME": "Masterful Stab",
    "DESCRIPTION": "Costs 1 additional [G]\nfor each time you lose HP this combat.\nDeal !D! damage.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Mayhem": {
    "NAME": "Mayhem",
    "DESCRIPTION": "At the start of your turn, play the top card of your draw pile."
  },
  "Melter": {
    "NAME": "Melter",
    "DESCRIPTION": "Remove all Block from the enemy.\nDeal !D! damage."
  },
  "Metallicize": {
    "NAME": "Metallicize",
    "DESCRIPTION": "At the end of your turn, gain !M! Block."
  },
  "Metamorphosis": {
    "NAME": "Metamorphosis",
    "DESCRIPTION": "Shuffle !M! random Attacks into your draw pile. They cost 0 this combat.\nExhaust."
  },
  "Meteor Strike": {
    "NAME": "Meteor Strike",
    "DESCRIPTION": "Deal !D! damage.\nChannel !M! Plasma."
  },
  "Mind Blast": {
    "NAME": "Mind Blast",
    "DESCRIPTION": "Innate.\nDeal damage equal to the number of cards in your draw pile.",
    "UPGRADE_DESCRIPTION": "",
    "EXTENDED_DESCRIPTION": [
      "\n(Deals !D! damage.)"
    ]
  },
  "Multi-Cast": {
    "NAME": "Multi-Cast",
    "DESCRIPTION": "Evoke your next Orb X times.",
    "UPGRADE_DESCRIPTION": "Evoke your next Orb X+1 times."
  },
  "Necronomicurse": {
    "NAME": "Necronomicurse",
    "DESCRIPTION": "Unplayable.\nThere is no escape from this Curse."
  },
  "Neutralize": {
    "NAME": "Neutralize",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Weak."
  },
  "Night Terror": {
    "NAME": "Nightmare",
    "DESCRIPTION": "Choose a card.\nNext turn, add !M! copies of that card into your hand. Exhaust.",
    "EXTENDED_DESCRIPTION": [
      "I can only use\n",
      "\nonce per turn."
    ]
  },
  "Normality": {
    "NAME": "Normality",
    "DESCRIPTION": "Unplayable.\nWhile in hand, you cannot play more than 3 cards this turn.",
    "EXTENDED_DESCRIPTION": [
      "I can only play up to\n#r3 cards this turn.",
      "Unplayable.\nYou cannot play more than ",
      " cards per turn.",
      " cards per turn.\nYou have played ",
      " card this turn.",
	  " cards this turn."
    ]
  },
  "Noxious Fumes": {
    "NAME": "Noxious Fumes",
    "DESCRIPTION": "At the start of your turn, apply !M! Poison to ALL enemies."
  },
  "Offering": {
    "NAME": "Offering",
    "DESCRIPTION": "Lose 6 HP.\nGain [R] [R].\nDraw !M! cards.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Lose 6 HP.\nGain [R] [R].\nDraw !M! cards.\nExhaust."
  },
  "Outmaneuver": {
    "NAME": "Outmaneuver",
    "DESCRIPTION": "Next turn,\ngain [G] [G].",
    "UPGRADE_DESCRIPTION": "Next turn,\ngain [G] [G] [G]."
  },
  "Pain": {
    "NAME": "Pain",
    "DESCRIPTION": "Unplayable.\nWhile in hand,\nlose 1 HP whenever you play another card."
  },
  "Panacea": {
    "NAME": "Panacea",
    "DESCRIPTION": "Gain !M! Artifact.\nExhaust."
  },
  "Panache": {
    "NAME": "Panache",
    "DESCRIPTION": "Every time you play 5 cards in a single turn, deal !M! damage to ALL enemies."
  },
  "Parasite": {
    "NAME": "Parasite",
    "DESCRIPTION": "Unplayable.\nIf transformed or removed from your deck, lose 3 Max HP."
  },
  "Perfected Strike": {
    "NAME": "Perfected Strike",
    "DESCRIPTION": "Deal !D! damage.\nDeals !M! additional damage for ALL your cards containing \"Strike\".",
    "UPGRADE_DESCRIPTION": "Deal !D! damage.\nDeals !M! additional damage for ALL your cards containing \"Strike\"."
  },
  "Phantasmal Killer": {
    "NAME": "Phantasmal Killer",
    "DESCRIPTION": "Next turn, your Attacks deal double damage."
  },
  "PiercingWail": {
    "NAME": "Piercing Wail",
    "DESCRIPTION": "ALL enemies lose !M! Strength this turn.\nExhaust."
  },
  "Poisoned Stab": {
    "NAME": "Poisoned Stab",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Poison."
  },
  "Pommel Strike": {
    "NAME": "Pommel Strike",
    "DESCRIPTION": "Deal !D! damage.\nDraw !M! card.",
    "UPGRADE_DESCRIPTION": "Deal !D! damage.\nDraw !M! cards."
  },
  "Power Through": {
    "NAME": "Power Through",
    "DESCRIPTION": "Add 2 *Wounds into your hand.\nGain !B! Block."
  },
  "Predator": {
    "NAME": "Predator",
    "DESCRIPTION": "Deal !D! damage.\nNext turn, draw 2 additional cards."
  },
  "Prepared": {
    "NAME": "Prepared",
    "DESCRIPTION": "Draw !M! card.\nDiscard !M! card.",
    "UPGRADE_DESCRIPTION": "Draw !M! cards.\nDiscard !M! cards."
  },
  "Pummel": {
    "NAME": "Pummel",
    "DESCRIPTION": "Deal !D! damage !M! times.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Deal !D! damage !M! times.\nExhaust."
  },
  "Purity": {
    "NAME": "Purity",
    "DESCRIPTION": "Exhaust up to !M! cards in your hand.\nExhaust."
  },
  "Quick Slash": {
    "NAME": "Quick Slash",
    "DESCRIPTION": "Deal !D! damage.\nDraw 1 card."
  },
  "Rage": {
    "NAME": "Rage",
    "DESCRIPTION": "Whenever you play an Attack this turn, gain !M! Block."
  },
  "Rainbow": {
    "NAME": "Rainbow",
    "DESCRIPTION": "Channel 1 Lightning.\nChannel 1 Frost.\nChannel 1 Dark.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Channel 1 Lightning.\nChannel 1 Frost.\nChannel 1 Dark."
  },
  "Rampage": {
    "NAME": "Rampage",
    "DESCRIPTION": "Deal !D! damage.\nIncrease this card's damage by !M! this combat."
  },
  "Reaper": {
    "NAME": "Reaper",
    "DESCRIPTION": "Deal !D! damage to ALL enemies. Heal HP equal to unblocked damage.\nExhaust."
  },
  "Reboot": {
    "NAME": "Reboot",
    "DESCRIPTION": "Shuffle ALL your cards into your draw pile.\nDraw !M! cards.\nExhaust."
  },
  "Rebound": {
    "NAME": "Rebound",
    "DESCRIPTION": "Deal !D! damage.\nPut the next card you play this turn on top of your draw pile."
  },
  "Reckless Charge": {
    "NAME": "Reckless Charge",
    "DESCRIPTION": "Deal !D! damage.\nShuffle a *Dazed into your draw pile."
  },
  "Recycle": {
    "NAME": "Recycle",
    "DESCRIPTION": "Exhaust a card.\nGain [B] equal to its cost."
  },
  "Redo": {
    "NAME": "Recursion",
    "DESCRIPTION": "Evoke your next Orb.\nChannel the Orb that was just Evoked."
  },
  "Reflex": {
    "NAME": "Reflex",
    "DESCRIPTION": "Unplayable.\nIf this card is discarded from your hand, draw !M! cards.",
    "UPGRADE_DESCRIPTION": "Unplayable.\nIf this card is discarded from your hand, draw !M! cards.",
    "EXTENDED_DESCRIPTION": [
      "I can't play this card."
    ]
  },
  "Regret": {
    "NAME": "Regret",
    "DESCRIPTION": "Unplayable.\nAt the end of your turn, lose HP equal to the number of cards in your hand."
  },
  "Reinforced Body": {
    "NAME": "Reinforced Body",
    "DESCRIPTION": "Gain !B! Block X times."
  },
  "Reprogram": {
    "NAME": "Reprogram",
    "DESCRIPTION": "Lose !M! Focus.\nGain !M! Strength.\nGain !M! Dexterity.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Riddle With Holes": {
    "NAME": "Riddle with Holes",
    "DESCRIPTION": "Deal !D! damage 5 times."
  },
  "Rip and Tear": {
    "NAME": "Rip and Tear",
    "DESCRIPTION": "Deal !D! damage to a random enemy twice."
  },
  "Rupture": {
    "NAME": "Rupture",
    "DESCRIPTION": "Whenever you lose HP from a card,\ngain !M! Strength."
  },
  "Sadistic Nature": {
    "NAME": "Sadistic Nature",
    "DESCRIPTION": "Whenever you apply a debuff to an enemy, they take !M! damage."
  },
  "Scrape": {
    "NAME": "Scrape",
    "DESCRIPTION": "Deal !D! damage.\nDraw !M! cards.\nDiscard all cards drawn this way that do not cost 0."
  },
  "Searing Blow": {
    "NAME": "Searing Blow",
    "DESCRIPTION": "Deal !D! damage.\nCan be Upgraded any number of times."
  },
  "Second Wind": {
    "NAME": "Second Wind",
    "DESCRIPTION": "Exhaust all non-Attack cards in your hand. Gain !B! Block for each card Exhausted."
  },
  "Secret Technique": {
    "NAME": "Secret Technique",
    "DESCRIPTION": "Put a Skill from your draw pile into your hand.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Put a Skill from your draw pile into your hand.",
    "EXTENDED_DESCRIPTION": [
      "There are no Skills\nin my draw pile."
    ]
  },
  "Secret Weapon": {
    "NAME": "Secret Weapon",
    "DESCRIPTION": "Put an Attack from your draw pile into your hand.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Put an Attack from your draw pile into your hand.",
    "EXTENDED_DESCRIPTION": [
      "There are no Attacks\nin my draw pile."
    ]
  },
  "Seeing Red": {
    "NAME": "Seeing Red",
    "DESCRIPTION": "Gain [R] [R].\nExhaust."
  },
  "Seek": {
    "NAME": "Seek",
    "DESCRIPTION": "Put !M! card from your draw pile into your hand.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Put !M! cards from your draw pile into your hand.\nExhaust."
  },
  "Self Repair": {
    "NAME": "Self Repair",
    "DESCRIPTION": "At the end of combat, heal !M! HP."
  },
  "Sentinel": {
    "NAME": "Sentinel",
    "DESCRIPTION": "Gain !B! Block.\nIf this card is Exhausted,\ngain [R] [R].",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nIf this card is Exhausted,\ngain [R] [R] [R]."
  },
  "Setup": {
    "NAME": "Setup",
    "DESCRIPTION": "Put a card from your hand on top of your draw pile.\nIt costs 0 until played."
  },
  "Sever Soul": {
    "NAME": "Sever Soul",
    "DESCRIPTION": "Exhaust all non-Attack cards in your hand.\nDeal !D! damage."
  },
  "Shame": {
    "NAME": "Shame",
    "DESCRIPTION": "Unplayable.\nAt the end of your turn, gain 1 Frail."
  },
  "Shiv": {
    "NAME": "Shiv",
    "DESCRIPTION": "Deal !D! damage.\nExhaust."
  },
  "Shockwave": {
    "NAME": "Shockwave",
    "DESCRIPTION": "Apply !M! Weak and Vulnerable to ALL enemies.\nExhaust."
  },
  "Shrug It Off": {
    "NAME": "Shrug It Off",
    "DESCRIPTION": "Gain !B! Block.\nDraw 1 card."
  },
  "Skewer": {
    "NAME": "Skewer",
    "DESCRIPTION": "Deal !D! damage X times."
  },
  "Skim": {
    "NAME": "Skim",
    "DESCRIPTION": "Draw !M! cards."
  },
  "Slice": {
    "NAME": "Slice",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Slimed": {
    "NAME": "Slimed",
    "DESCRIPTION": "Exhaust."
  },
  "Spot Weakness": {
    "NAME": "Spot Weakness",
    "DESCRIPTION": "If the enemy intends to attack, gain !M! Strength."
  },
  "Stack": {
    "NAME": "Stack",
    "DESCRIPTION": "Gain Block equal to the number of cards in your discard pile.",
    "UPGRADE_DESCRIPTION": "Gain Block equal to the number of cards in your discard pile +3.",
    "EXTENDED_DESCRIPTION": [
      "\n(Gains !B! Block.)"
    ]
  },
  "Static Discharge": {
    "NAME": "Static Discharge",
    "DESCRIPTION": "Whenever you receive unblocked attack damage, Channel !M! Lightning.",
    "UPGRADE_DESCRIPTION": "Whenever you receive unblocked attack damage, Channel !M! Lightning."
  },
  "Steam": {
    "NAME": "Steam Barrier",
    "DESCRIPTION": "Gain !B! Block. Decrease this card's Block by 1 this combat."
  },
  "Steam Power": {
    "NAME": "Overclock",
    "DESCRIPTION": "Draw !M! cards.\nAdd a *Burn into your discard pile."
  },
  "Storm": {
    "NAME": "Storm",
    "DESCRIPTION": "Whenever you play a Power card, Channel 1 Lightning.",
    "UPGRADE_DESCRIPTION": "Innate.\nWhenever you play a Power card, Channel 1 Lightning."
  },
  "Storm of Steel": {
    "NAME": "Storm of Steel",
    "DESCRIPTION": "Discard your hand.\nAdd 1 *Shiv into your hand for each card discarded.",
    "UPGRADE_DESCRIPTION": "Discard your hand.\nAdd 1 *Shiv+ into your hand for each card discarded."
  },
  "Streamline": {
    "NAME": "Streamline",
    "DESCRIPTION": "Deal !D! damage.\nReduce this card's cost by !M! this combat."
  },
  "Strike_B": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Strike_G": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Strike_R": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Strike_P": {
    "NAME": "Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Sucker Punch": {
    "NAME": "Sucker Punch",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Weak."
  },
  "Sunder": {
    "NAME": "Sunder",
    "DESCRIPTION": "Deal !D! damage.\nIf this kills an enemy, gain [B] [B] [B]."
  },
  "Survivor": {
    "NAME": "Survivor",
    "DESCRIPTION": "Gain !B! Block.\nDiscard 1 card."
  },
  "Sweeping Beam": {
    "NAME": "Sweeping Beam",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nDraw !M! card."
  },
  "Swift Strike": {
    "NAME": "Swift Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Sword Boomerang": {
    "NAME": "Sword Boomerang",
    "DESCRIPTION": "Deal !D! damage to a random enemy !M! times."
  },
  "Tactician": {
    "NAME": "Tactician",
    "DESCRIPTION": "Unplayable.\nIf this card is discarded from your hand, gain [G].",
    "UPGRADE_DESCRIPTION": "Unplayable.\nIf this card is discarded from your hand, gain [G] [G].",
    "EXTENDED_DESCRIPTION": [
      "I can't play this card."
    ]
  },
  "Tempest": {
    "NAME": "Tempest",
    "DESCRIPTION": "Channel X Lightning.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Channel X+1 Lightning.\nExhaust."
  },
  "Terror": {
    "NAME": "Terror",
    "DESCRIPTION": "Apply 99 Vulnerable.\nExhaust."
  },
  "The Bomb": {
    "NAME": "The Bomb",
    "DESCRIPTION": "At the end of 3 turns, deal !M! damage to ALL enemies."
  },
  "Thinking Ahead": {
    "NAME": "Thinking Ahead",
    "DESCRIPTION": "Draw 2 cards.\nPut a card from your hand on top of your draw pile.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Draw 2 cards.\nPut a card from your hand on top of your draw pile."
  },
  "Thunder Strike": {
    "NAME": "Thunder Strike",
    "DESCRIPTION": "Deal !D! damage to a random enemy for each Lightning Channeled this combat.",
    "EXTENDED_DESCRIPTION": [
      " (Channeled !M! Lightning.)"
    ]
  },
  "Thunderclap": {
    "NAME": "Thunderclap",
    "DESCRIPTION": "Deal !D! damage and apply 1 Vulnerable to ALL enemies."
  },
  "Tools of the Trade": {
    "NAME": "Tools of the Trade",
    "DESCRIPTION": "At the start of your turn, draw 1 card and discard 1 card."
  },
  "Transmutation": {
    "NAME": "Transmutation",
    "DESCRIPTION": "Add X random Colorless cards into your hand. They cost 0 this turn.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Add X random Upgraded Colorless cards into your hand. They cost 0 this turn.\nExhaust."
  },
  "Trip": {
    "NAME": "Trip",
    "DESCRIPTION": "Apply !M! Vulnerable.",
    "UPGRADE_DESCRIPTION": "Apply !M! Vulnerable to ALL enemies."
  },
  "True Grit": {
    "NAME": "True Grit",
    "DESCRIPTION": "Gain !B! Block.\nExhaust 1 card at random.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nExhaust 1 card."
  },
  "Turbo": {
    "NAME": "TURBO",
    "DESCRIPTION": "Gain [B] [B].\nAdd a *Void into your discard pile.",
    "UPGRADE_DESCRIPTION": "Gain [B] [B] [B].\nAdd a *Void into your discard pile."
  },
  "Twin Strike": {
    "NAME": "Twin Strike",
    "DESCRIPTION": "Deal !D! damage twice."
  },
  "Underhanded Strike": {
    "NAME": "Sneaky Strike",
    "DESCRIPTION": "Deal !D! damage.\nIf you have discarded a card this turn,\ngain [G] [G].",
    "EXTENDED_DESCRIPTION": [
      "I can't play this card."
    ]
  },
  "Undo": {
    "NAME": "Equilibrium",
    "DESCRIPTION": "Gain !B! Block.\nRetain your hand this turn."
  },
  "Unload": {
    "NAME": "Unload",
    "DESCRIPTION": "Deal !D! damage.\nDiscard all non-Attack cards in your hand."
  },
  "Uppercut": {
    "NAME": "Uppercut",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Weak.\nApply !M! Vulnerable."
  },
  "Venomology": {
    "NAME": "Alchemize",
    "DESCRIPTION": "Obtain a random potion.\nExhaust."
  },
  "Void": {
    "NAME": "Void",
    "DESCRIPTION": "Unplayable.\nEthereal.\nWhenever this card is drawn, lose 1 Energy."
  },
  "Warcry": {
    "NAME": "Warcry",
    "DESCRIPTION": "Draw !M! card.\nPut a card from your hand onto the top of your draw pile.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Draw !M! cards.\nPut a card from your hand onto the top of your draw pile.\nExhaust."
  },
  "Well Laid Plans": {
    "NAME": "Well-Laid Plans",
    "DESCRIPTION": "At the end of your turn, Retain up to !M! card.",
    "UPGRADE_DESCRIPTION": "At the end of your turn, Retain up to !M! cards."
  },
  "Whirlwind": {
    "NAME": "Whirlwind",
    "DESCRIPTION": "Deal !D! damage to ALL enemies X times."
  },
  "White Noise": {
    "NAME": "White Noise",
    "DESCRIPTION": "Add a random Power card into your hand.\nIt costs 0 this turn.\nExhaust."
  },
  "Wild Strike": {
    "NAME": "Wild Strike",
    "DESCRIPTION": "Deal !D! damage.\nShuffle a *Wound into your draw pile."
  },
  "Wound": {
    "NAME": "Wound",
    "DESCRIPTION": "Unplayable."
  },
  "Wraith Form v2": {
    "NAME": "Wraith Form",
    "DESCRIPTION": "Gain !M! Intangible.\nAt the end of your turn, lose 1 Dexterity."
  },
  "Writhe": {
    "NAME": "Writhe",
    "DESCRIPTION": "Unplayable.\nInnate."
  },
  "Zap": {
    "NAME": "Zap",
    "DESCRIPTION": "Channel !M! Lightning."
  },
  "Core Surge": {
    "NAME": "Core Surge",
    "DESCRIPTION": "Deal !D! damage.\nGain !M! Artifact.\nExhaust."
  },
  "Compile Driver": {
    "NAME": "Compile Driver",
    "DESCRIPTION": "Deal !D! damage.\nDraw !M! card for each unique Orb you have."
  },
  "RitualDagger": {
    "NAME": "Ritual Dagger",
    "DESCRIPTION": "Deal !D! damage.\nIf Fatal, permanently increase this card's damage by !M!.\nExhaust."
  },
  "Pride": {
    "NAME": "Pride",
    "DESCRIPTION": "Innate.\nAt the end of your turn, put a copy of this card on top of your draw pile. Exhaust."
  },
  "PanicButton": {
    "NAME": "Panic Button",
    "DESCRIPTION": "Gain !B! Block. You cannot gain Block from cards for !M! turns.\nExhaust."
  },
  "HandOfGreed": {
    "NAME": "Hand of Greed",
    "DESCRIPTION": "Deal !D! damage.\nIf Fatal, gain !M! Gold."
  },
  "Violence": {
    "NAME": "Violence",
    "DESCRIPTION": "Put !M! random Attacks from your draw pile into your hand.\nExhaust."
  },
  "Impatience": {
    "NAME": "Impatience",
    "DESCRIPTION": "If you have no Attacks in your hand, draw !M! cards."
  },
  "Forethought": {
    "NAME": "Forethought",
    "DESCRIPTION": "Put a card from your hand to the bottom of your draw pile. It costs 0 until played.",
    "UPGRADE_DESCRIPTION": "Put any number of cards from your hand to the bottom of your draw pile. They cost 0 until played."
  },
  "Discovery": {
    "NAME": "Discovery",
    "DESCRIPTION": "Choose 1 of 3 random cards to add into your hand. It costs 0 this turn.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Choose 1 of 3 random cards to add into your hand. It costs 0 this turn."
  },
  "Nirvana": {
    "NAME": "Nirvana",
    "DESCRIPTION": "Whenever you Scry, gain !M! Block.",
    "UPGRADE_DESCRIPTION": ""
  },
  "EmptyFist": {
    "NAME": "Empty Fist",
    "DESCRIPTION": "Deal !D! damage.\nExit your Stance."
  },
  "EmptyBody": {
    "NAME": "Empty Body",
    "DESCRIPTION": "Gain !B! Block.\nExit your Stance."
  },
  "WreathOfFlame": {
    "NAME": "Wreath of Flame",
    "DESCRIPTION": "Your next Attack deals !M! additional damage."
  },
  "FearNoEvil": {
    "NAME": "Fear No Evil",
    "DESCRIPTION": "Deal !D! damage.\nIf the enemy intends to Attack, enter Calm."
  },
  "MentalFortress": {
    "NAME": "Mental Fortress",
    "DESCRIPTION": "Whenever you change Stances, gain !M! Block."
  },
  "Mastery": {
    "NAME": "Mastery",
    "DESCRIPTION": "Whenever you attempt to switch Stances to your current Stance, gain [B]."
  },
  "Collect": {
    "NAME": "Collect",
    "DESCRIPTION": "Put a *Miracle+ into your hand at the start of your next X turns.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Put a *Miracle+ into your hand at the start of your next X+1 turns.\nExhaust."
  },
  "ForeignInfluence": {
    "NAME": "Foreign Influence",
    "DESCRIPTION": "Choose 1 of 3 Attacks of any color to add into your hand.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Choose 1 of 3 Attacks of any color to add into your hand.\nIt costs 0 this turn.\nExhaust."
  },
  "FlowState": {
    "NAME": "DEPRECATED Flow State",
    "DESCRIPTION": "Wrath: Enter Calm.\nCalm: Enter Wrath.\nExhaust.",
  	"UPGRADE_DESCRIPTION": "Wrath: Enter Calm.\nCalm: Enter Wrath."
  },
  "FlurryOfBlows": {
    "NAME": "Flurry of Blows",
    "DESCRIPTION": "Deal !D! damage.\nWhenever you change Stances, return this from the discard pile to your hand."
  },
  "PalmThatRestrains": {
    "NAME": "DEPRECATED Restraining Palm",
    "DESCRIPTION": "Deal !D! damage.\nApply !M! Weak."
  },
  "Wrath": {
    "NAME": "Wrath",
    "DESCRIPTION": "Deal and receive double attack damage."
  },
  "Calm": {
    "NAME": "Calm",
    "DESCRIPTION": "Upon exiting Calm, gain [W] [W]."
  },
  "Polymath": {
    "NAME": "DEPRECATED Polymath",
    "DESCRIPTION": "Enter Calm or Wrath.\nExhaust."
  },
  "Consecrate": {
    "NAME": "Consecrate",
    "DESCRIPTION": "Deal !D! damage to ALL enemies."
  },
  "Flicker": {
    "NAME": "DEPRECATED Flicker",
    "DESCRIPTION": "Deal !D! damage. If this kills the enemy, return this card to your hand."
  },
  "Blasphemy": {
    "NAME": "Blasphemy",
    "DESCRIPTION": "Enter Divinity.\nDie next turn.\nExhaust.",
	"UPGRADE_DESCRIPTION": "Retain.\nEnter Divinity.\nDie next turn.\nExhaust."
  },
  "Ragnarok": {
    "NAME": "Ragnarok",
    "DESCRIPTION": "Deal !D! damage to a random enemy !M! times."
  },
  "FlameMastery": {
    "NAME": "DEPRECATED Flame Mastery",
    "DESCRIPTION": "Gain !M! Strength."
  },
  "StepAndStrike": {
    "NAME": "DEPRECATED Step and Strike",
    "DESCRIPTION": "Costs 1 less per switched Stance this turn.\nGain !B! Block.\nDeal !D! damage."
  },
  "Survey": {
    "NAME": "DEPRECATED Survey",
    "DESCRIPTION": "Gain !B! Block.\nGain !M! Vigor."
  },
  "Swipe": {
    "NAME": "DEPRECATED Swipe",
    "DESCRIPTION": "Deal !D! damage. Deal half this damage to all other enemies."
  },
  "Blessed": {
    "NAME": "DEPRECATED Blessed",
    "DESCRIPTION": "Shuffle !M! *Miracles into your draw pile.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Shuffle !M! *Miracles+ into your draw pile.\nExhaust."
  },
  "LetFateDecide": {
    "NAME": "DEPRECATED Let Fate Decide",
    "DESCRIPTION": "Play the top X cards of your draw pile. If X is 3 or more, Retain X cards."
  },
  "RetreatingHand": {
    "NAME": "DEPRECATED Retreating Hand",
    "DESCRIPTION": "Ethereal.\nGain !B! Block. If the previous card played was an Attack, return this card to your hand.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block. If the previous card played was an Attack, return this card to your hand."
  },
  "Flare": {
    "NAME": "DEPRECATED Flare",
    "DESCRIPTION": "DEPRECATED."
  },
  "PerfectedForm": {
    "NAME": "DEPRECATED Perfected Form",
    "DESCRIPTION": "If you have entered all basic Stances this turn, enter Divinity.\nExhaust.",
    "UPGRADE_DESCRIPTION": "If you have entered all basic Stances this turn, enter Divinity."
  },
  "AwakenedStrike": {
    "NAME": "DEPRECATED Awakened Strike",
    "DESCRIPTION": "Deal !D! damage."
  },
  "EmptyMind": {
    "NAME": "Empty Mind",
    "DESCRIPTION": "Draw !M! cards.\nExit your Stance.",
    "UPGRADE_DESCRIPTION": "Draw !M! cards.\nExit your Stance."
  },
  "Experienced": {
    "NAME": "DEPRECATED Experienced",
    "DESCRIPTION": "Gain !B! Block for each Upgraded card in your hand."
  },
  "Judgement": {
    "NAME": "Judgment",
    "DESCRIPTION": "If the enemy has !M! or less HP, set their\nHP to 0.",
    "EXTENDED_DESCRIPTION": [
      "JUDGED"
    ]
  },
  "Pray": {
    "NAME": "Pray",
    "DESCRIPTION": "Gain !M! Mantra.\nShuffle an *Insight into your draw pile.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Conclude": {
    "NAME": "Conclude",
    "DESCRIPTION": "Deal !D! damage to ALL enemies.\nEnd your turn."
  },
  "LessonLearned": {
    "NAME": "Lesson Learned",
    "DESCRIPTION": "Deal !D! damage.\nIf Fatal, Upgrade a random card in your deck.\nExhaust."
  },
  "CutThroughFate": {
    "NAME": "Cut Through Fate",
    "DESCRIPTION": "Deal !D! damage.\nScry !M!.\nDraw 1 card."
  },
  "ThirdEye": {
    "NAME": "Third Eye",
    "DESCRIPTION": "Gain !B! Block.\nScry !M!."
  },
  "SublimeSlice": {
    "NAME": "DEPRECATED Sublime Slice",
    "DESCRIPTION": "Deal !D! damage.\nEnter a random Stance."
  },
  "SignatureMove": {
    "NAME": "Signature Move",
    "DESCRIPTION": "Can only be played if this is the only Attack in your hand.\nDeal !D! damage." 
  },
  "Prediction": {
    "NAME": "DEPRECATED Prediction",
    "DESCRIPTION": "Gain !B! Block at the start of your next turn."
  },
  "Worship": {
    "NAME": "Worship",
    "DESCRIPTION": "Gain !M! Mantra.",
    "UPGRADE_DESCRIPTION": "Retain.\nGain !M! Mantra."
  },
  "Fasting": {
    "NAME": "DEPRECATED",
    "DESCRIPTION": "DEPRECATED"
  },
  "Fasting2": {
    "NAME": "Fasting",
    "DESCRIPTION": "Gain !M! Strength.\nGain !M! Dexterity.\nGain 1 less [W] at the start of each turn."
  },
  "DevaForm": {
    "NAME": "Deva Form",
    "DESCRIPTION": "Ethereal.\nAt the start of your turn, gain [W]\nand increase this gain by !M!.",
    "UPGRADE_DESCRIPTION": "At the start of your turn, gain [W]\nand increase this gain by !M!."
  },
  "Wireheading": {
    "NAME": "Foresight",
    "DESCRIPTION": "At the start of your turn, Scry !M!.",
    "UPGRADE_DESCRIPTION": ""
  },
  "ReachHeaven": {
    "NAME": "Reach Heaven",
    "DESCRIPTION": "Deal !D! damage.\nShuffle a\n*Through *Violence into your draw pile.",
	"UPGRADE_DESCRIPTION": ""
  },
  "ThroughViolence": {
    "NAME": "Through Violence",
    "DESCRIPTION": "Retain.\nDeal !D! damage.\nExhaust."
  },
  "Clarity": {
    "NAME": "Clarity",
    "DESCRIPTION": "Look at the top !M! cards of your draw pile. Add 1 to your hand.\nExhaust the other.",
    "UPGRADE_DESCRIPTION": "Look at the top !M! cards of your draw pile. Add 1 to your hand.\nExhaust the rest."
  },
  "Thwack": {
    "NAME": "DEPRECATED Thwack",
    "DESCRIPTION": "Deal !D! damage."
  },
  "Meditate": {
    "NAME": "Meditate",
    "DESCRIPTION": "Put a card from your discard pile into your hand and Retain it.\nEnter Calm.\nEnd your turn.",
    "UPGRADE_DESCRIPTION": "Put 2 cards from your discard pile into your hand and Retain them.\nEnter Calm.\nEnd your turn."
  },
  "Miracle": {
    "NAME": "Miracle",
    "DESCRIPTION": "Retain.\nGain [W].\nExhaust.",
    "UPGRADE_DESCRIPTION": "Retain.\nGain [W] [W].\nExhaust."
  },
  "Vault": {
    "NAME": "Vault",
    "DESCRIPTION": "Take an extra turn after this one.\nEnd your turn.\nExhaust."
  },
  "Flow": {
    "NAME": "DEPRECATED Flow",
    "DESCRIPTION": "When you play an Attack, gain 1 temporary Dexterity. When you play a Skill, gain 1 temporary Strength."
  },
  "CarveReality": {
    "NAME": "Carve Reality",
    "DESCRIPTION": "Deal !D! damage.\nAdd a *Smite into your hand.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Smite": {
    "NAME": "Smite",
    "DESCRIPTION": "Retain.\nDeal !D! damage.\nExhaust."
  },
  "Truth": {
    "NAME": "Truth",
    "DESCRIPTION": "Retain.\nDeal !D! damage.\nDraw !M! card.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Retain.\nDeal !D! damage.\nDraw !M! cards.\nExhaust."
  },
  "Insight": {
    "NAME": "Insight",
    "DESCRIPTION": "Retain.\nDraw !M! cards.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Retain.\nDraw !M! cards.\nExhaust."
  },
  "DeceiveReality": {
    "NAME": "Deceive Reality",
    "DESCRIPTION": "Gain !B! Block.\nAdd a *Safety into\nyour hand.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Safety": {
    "NAME": "Safety",
    "DESCRIPTION": "Retain.\nGain !B! Block.\nExhaust."
  },
  "Wisdom": {
    "NAME": "Wisdom",
    "DESCRIPTION": "Retain.\nDraw !M! cards.\nExhaust."
  },
  "Peace": {
    "NAME": "Peace",
    "DESCRIPTION": "Retain.\nALL enemies lose !M! Strength this turn.\nExhaust."
  },
  "WindmillStrike": {
    "NAME": "Windmill Strike",
    "DESCRIPTION": "Retain.\nDeal !D! damage.\nWhen Retained, increase its damage by !M! this combat."
  },
  "Establishment": {
    "NAME": "Establishment",
    "DESCRIPTION": "Whenever a card is Retained, reduce its cost by !M! this combat.",
	  "UPGRADE_DESCRIPTION": "Innate.\nWhenever a card is Retained, reduce its cost by !M! this combat."
  },
  "WardAura": {
    "NAME": "DEPRECATED Ward Aura",
    "DESCRIPTION": "Retain.\nGain !B! Block.\nAt the start of your turn, gain !M! Block."
  },
  "Metaphysics": {
    "NAME": "DEPRECATED",
    "DESCRIPTION": "DEPRECATED",
	"UPGRADE_DESCRIPTION": "DEPRECATED"
  },
  "Evaluate": {
    "NAME": "Evaluate",
    "DESCRIPTION": "Gain !B! Block.\nShuffle an *Insight into your draw pile.",
    "UPGRADE_DESCRIPTION": "Gain !B! Block.\nShuffle an *Insight+ into your draw pile."
  },
  "Devotion": {
    "NAME": "Devotion",
    "DESCRIPTION": "At the start of your turn, gain !M! Mantra."
  },
  "SoothingAura": {
    "NAME": "DEPRECATED Soothing Aura",
    "DESCRIPTION": "Retain.\nApply !M! Weak.\nAt the start of your turn, apply 1 Weak to a random enemy."
  },
  "BrillianceAura": {
    "NAME": "DEPRECATED Brilliance Aura",
    "DESCRIPTION": "DEPRECATED"
  },
  "FuryAura": {
    "NAME": "DEPRECATED Fury Aura",
    "DESCRIPTION": "Retain.\nGain !M! temporary Strength.\nAt the start of your turn, gain 1 temporary Strength."
  },
  "DeusExMachina": {
    "NAME": "Deus Ex Machina",
    "DESCRIPTION": "Unplayable.\nWhen you draw this card, add !M! *Miracles to your hand and Exhaust."
  },
  "CleanseEvil": {
    "NAME": "Cleanse Evil",
    "DESCRIPTION": "Add X *Smite into your hand.",
    "UPGRADE_DESCRIPTION": "Add X *Smite+ into your hand."
  },
  "Torrent": {
    "NAME": "DEPRECATED Torrent",
    "DESCRIPTION": "Deal !D! damage to ALL enemies !M! times.\nExhaust."
  },
  "Windup": {
    "NAME": "DEPRECATED Windup",
    "DESCRIPTION": "Deal !D! damage.\nGain !M! Vigor."
  },
  "Shield": {
    "NAME": "DEPRECATED Shield",
    "DESCRIPTION": "Retain.\nGain !B! Block.\nExhaust."
  },
  "CrescentKick": {
    "NAME": "DEPRECATED Crescent Kick",
    "DESCRIPTION": "Deal !D! damage.\nIf you have Vigor,\ngain [W] and\ndraw 1 card."
  },
  "TalkToTheHand": {
    "NAME": "Talk to the Hand",
    "DESCRIPTION": "Deal !D! damage.\nWhenever you attack this enemy, gain !M! Block.\nExhaust."
  },
  "BattleHymn": {
    "NAME": "Battle Hymn",
    "DESCRIPTION": "At the start of each turn, add a *Smite into your hand.",
	"UPGRADE_DESCRIPTION": "Innate.\nAt the start of each turn, add a *Smite into your hand."
  },
  "Prostrate": {
    "NAME": "Prostrate",
    "DESCRIPTION": "Gain !M! Mantra.\nGain !B! Block.",
    "UPGRADE_DESCRIPTION": "DEPRECATED"
  },
  "Punishment": {
    "NAME": "DEPRECATED Punishment",
    "DESCRIPTION": "Enter Punishment Stance."
  },
  "Eruption": {
    "NAME": "Eruption",
    "DESCRIPTION": "Deal !D! damage.\nEnter Wrath."
  },
  "ClearTheMind": {
    "NAME": "Tranquility",
    "DESCRIPTION": "Retain.\nEnter Calm.\nExhaust."
  },
  "WaveOfTheHand": {
    "NAME": "Wave of the Hand",
    "DESCRIPTION": "Whenever you gain Block this turn, apply !M! Weak to ALL enemies."
  },
  "SpiritShield": {
    "NAME": "Spirit Shield",
    "DESCRIPTION": "Gain !M! Block for each card in your hand.",
    "EXTENDED_DESCRIPTION": [
      "\n(Gain !B! Block.)"
    ]
  },
  "Vigilance": {
    "NAME": "Vigilance",
    "DESCRIPTION": "Gain !B! Block.\nEnter Calm.",
    "UPGRADE_DESCRIPTION": "Deprecated."
  },
  "Serenity": {
    "NAME": "DEPRECATED Serenity",
    "DESCRIPTION": "While you are in Calm, HP loss is reduced by !M!."
  },
  "Crescendo": {
    "NAME": "Crescendo",
    "DESCRIPTION": "Retain.\nEnter Wrath.\nExhaust."
  },
  "Transcendence": {
    "NAME": "Transcendence",
    "DESCRIPTION": "Upgrade all cards that Retain in your hand."
  },
  "FollowUp": {
    "NAME": "Follow-Up",
    "DESCRIPTION": "Deal !D! damage.\nIf the last card played this combat was an Attack, gain [W]."
  },
  "Perseverance": {
    "NAME": "Perseverance",
    "DESCRIPTION": "Retain.\nGain !B! Block.\nWhen Retained, increase its Block by !M! this combat."
  },
  "CrushJoints": {
    "NAME": "Crush Joints",
    "DESCRIPTION": "Deal !D! damage.\nIf the last card played this combat was a Skill, apply !M! Vulnerable."
  },
  "SashWhip": {
    "NAME": "Sash Whip",
    "DESCRIPTION": "Deal !D! damage.\nIf the last card played this combat was an Attack, apply !M! Weak."
  },
  "Sanctity": {
    "NAME": "Sanctity",
    "DESCRIPTION": "Gain !B! Block.\nIf the last card played this combat was a Skill, draw !M! cards."
  },
  "Omniscience": {
    "NAME": "Omniscience",
    "DESCRIPTION": "Choose a card in your draw pile.\nPlay the chosen card twice and exhaust it.\nExhaust.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Scrawl": {
    "NAME": "Scrawl",
    "DESCRIPTION": "Draw cards until your hand is full.\nExhaust.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Swivel": {
    "NAME": "Swivel",
    "DESCRIPTION": "Gain !B! Block.\nThe next Attack you play costs 0."
  },
  "Protect": {
    "NAME": "Protect",
    "DESCRIPTION": "Retain.\nGain !B! Block."
  },
  "FlyingSleeves": {
    "NAME": "Flying Sleeves",
    "DESCRIPTION": "Retain.\nDeal !D! damage twice."
  },
  "MasterReality": {
    "NAME": "Master Reality",
    "DESCRIPTION": "Whenever a card is created during combat, Upgrade it."
  },
  "BowlingBash": {
    "NAME": "Bowling Bash",
    "DESCRIPTION": "Deal !D! damage for each enemy in combat."
  },
  "Unraveling": {
    "NAME": "Unraveling",
    "DESCRIPTION": "Play all of your cards from left to right. Targets are chosen randomly.\nExhaust."
  },
  "BigBrain": {
    "NAME": "DEPRECATED Big Brain",
    "DESCRIPTION": "Retain.\nDraw 1 card.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Retain.\nDraw 1 card."
  },
  "SandsOfTime": {
    "NAME": "Sands of Time",
    "DESCRIPTION": "Retain.\nDeal !D! damage.\nWhen Retained, lower its cost by 1 this combat."
  },
  "Brilliance": {
    "NAME": "Brilliance",
    "DESCRIPTION": "Deal !D! damage.\nDeals additional damage equal to Mantra gained this combat.",
    "EXTENDED_DESCRIPTION": [
      "",
      ""
    ]
  },
  "Retribution": {
    "NAME": "DEPRECATED Retribution",
    "DESCRIPTION": "Whenever you lose HP, gain !M! Vigor."
  },
  "JustLucky": {
    "NAME": "Just Lucky",
    "DESCRIPTION": "Scry !M!.\nGain !B! Block.\nDeal !D! damage."
  },
  "Weave": {
    "NAME": "Weave",
    "DESCRIPTION": "Deal !D! damage.\nWhenever you Scry, return this from the discard pile to your Hand."
  },
  "Adaptation": {
    "NAME": "Rushdown",
    "DESCRIPTION": "Whenever you enter Wrath, draw !M! cards.",
    "UPGRADE_DESCRIPTION": "DEPRECATED"
  },
  "Causality": {
    "NAME": "Causality",
    "DESCRIPTION": "Draw cards until your hand is full.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Retain.\nDraw cards until your hand is full.\nExhaust."
  },
  "Wish": {
    "NAME": "Wish",
    "DESCRIPTION": "Choose one:\nGain !B! Plated Armor, !D! Strength, or !M! Gold.\nExhaust.",
    "UPGRADE_DESCRIPTION": ""
  },
  "CurseOfTheBell": {
    "NAME": "Curse of the Bell",
    "DESCRIPTION": "Unplayable.\nCannot be removed from your deck."
  },
  "InnerPeace": {
    "NAME": "Inner Peace",
    "DESCRIPTION": "If you are in Calm, draw !M! cards, otherwise enter Calm."
  },
  "Tantrum": {
    "NAME": "Tantrum",
    "DESCRIPTION": "Deal !D! damage\n!M! times.\nEnter Wrath.\nShuffle this card into your draw pile."
  },
  "Alpha": {
    "NAME": "Alpha",
    "DESCRIPTION": "Shuffle a *Beta into your draw pile.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Innate.\nShuffle a *Beta into your draw pile.\nExhaust."
  },
  "Beta": {
    "NAME": "Beta",
    "DESCRIPTION": "Shuffle an *Omega into your draw pile.\nExhaust.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Omega": {
    "NAME": "Omega",
    "DESCRIPTION": "At the end of your turn, deal !M! damage to ALL enemies."
  },
  "Vengeance": {
    "NAME": "Simmering Fury",
    "DESCRIPTION": "At the start of your next turn, enter Wrath and draw !M! cards."
  },
  "PathToVictory": {
    "NAME": "Pressure Points",
    "DESCRIPTION": "Apply !M! *Mark.\nALL enemies lose HP equal to their *Mark.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Wallop": {
    "NAME": "Wallop",
    "DESCRIPTION": "Deal !D! damage.\nGain Block equal to unblocked damage dealt."
  },
  "Halt": {
    "NAME": "Halt",
    "DESCRIPTION": "Gain !B! Block.\nIf you are in Wrath, gain !M! additional Block."
  },
  "WheelKick": {
    "NAME": "Wheel Kick",
    "DESCRIPTION": "Deal !D! damage.\nDraw !M! cards.",
    "UPGRADE_DESCRIPTION": ""
  },
  "Indignation": {
    "NAME": "Indignation",
    "DESCRIPTION": "If you are in Wrath, apply !M! Vulnerable to ALL enemies, otherwise enter Wrath."
  },
  "BecomeAlmighty": {
    "NAME": "Become Almighty",
    "DESCRIPTION": "Gain !M! Strength."
  },
  "LiveForever": {
    "NAME": "Live Forever",
    "DESCRIPTION": "Gain !M! *Plated *Armor."
  },
  "FameAndFortune": {
    "NAME": "Fame and Fortune",
    "DESCRIPTION": "Gain !M! Gold."
  },
  "ConjureBlade": {
    "NAME": "Conjure Blade",
    "DESCRIPTION": "Shuffle an *Expunger into your draw pile.\nExhaust.",
    "UPGRADE_DESCRIPTION": "Shuffle an *Expunger with X+1 into your draw pile.\nExhaust."
  },
  "Expunger": {
    "NAME": "Expunger",
    "DESCRIPTION": "Deal !D! damage X times.",
    "UPGRADE_DESCRIPTION": "",
    "EXTENDED_DESCRIPTION": [
      "Deal !D! damage !M! times.",
      "Deal !D! damage !M! time."
    ]
  },
  "WaveOfTheHand2": {
    "NAME": "DEPRECATED",
    "DESCRIPTION": "DEPRECATED"
  },
  "Discipline": {
    "NAME": "DEPRECATED Discipline",
    "DESCRIPTION": "If you end your turn with unused [W] , draw that many additional cards next turn."
  },
  "Flick": {
    "NAME": "DEPRECATED Flick",
    "DESCRIPTION": "Deal !D! damage.\nIf an enemy is *Flicked 3 times, they take !M! damage."
  },
  "LikeWater": {
    "NAME": "Like Water",
    "DESCRIPTION": "At the end of your turn, if you are in Calm, gain !M! Block."
  }
};