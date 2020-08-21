var iFileName = "Compendium of Forgotten Secrets - Awakening.js";
SourceList.CoFSA={
	name : "Compendium of Forgotten Secrets - Awakening",
	abbreviation : "CoFSA",
	group : "Homebrew",
	url : "https://www.genfantasypress.com/",
	date : "2019/03/07"
};
//The Accursed Archive - Warlock
AddSubClass("warlock", "the accursed archive", {
	regExpSearch : /^(?=.*accursed)(?=.*archive)(?=.*warlock).*$/i,
	subname : "The Accursed Archive",
	source : ["CoFSA", 8],
	spellcastingExtra : ["detect evil and good", "inflict wounds", "accursed wish", "dark secret", "blackened heart", "blasphemy", "black tentacles", "forbidden obelisk", "dispel evil and good", "legend lore"],
	features : {
		"subclassfeature1" : {
			name : "Tainted Knowledge",
			source : ["CoFSA", 10],
			minlevel : 1,
			description : desc ([
                "As an action, I and up to 10 willing creatures can enter the Accursed Archive. Time does",
                "not pass and resting, recovering hit points, and maintaining concentration is impossible.",
			]),
			recovery : "long rest",
			usages : 1,
            action : ["action", ""],
			additional : "Enter Archive",
			skillstxt : "\n\n" + toUni("Accursed Archive Patron") + ": Choose two from Arcana, History, Nature, and Religion. You also gain expertise with these skills. Additionally, choose any one skill.",
		},
		"subclassfeature6" : {
			name : "Written in Blood",
			source : ["CoFSA", 10],
			minlevel : 6,
			description : desc ([
				"I can touch a creature and force them to make a Charisma saving throw. On a failure, I",
				"am able to read up to 6 different sentences from the book within their paralyzed body. I",
				"have advantage on Cha and Int checks relating to them and they have disadvantage on",
				"Cha and Wis checks."
            ]),
			action : ["action", ""],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Vile Heresies",
			source : ["CoFSA", 11],
			minlevel : 10,
			description :desc ([
                "I can prepare any non-cantrip spell of 4th level or lower, and cast it once using",
				"a Warlock spell slot. When I cast this spell, I gain immunity to fear until I complete a", 
				"rest. I can change out this spell when in the Accursed Archive, but cannot use it until",
				"I complete a long rest."
            ]),
            recovery : "long rest",
		},
		"subclassfeature14" : {
			name : "Unspeakable Truths",
			source : ["CoFSA", 11],
			minlevel : 14,
			description : desc ([
                "All creatures within 60ft make a Cha saving throw or are affected by the confusion spell",
				"for 1 min, repeating the save any time they take damage. I can choose up to 4 creatures",
				"under this effect and have them cast a damaging spell of level 2 or lower that I know ",
				"using their reaction."
            ]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddWarlockInvocation("The Archivist's Journal (prereq: the Accursed Archive patron, Pact of the Tome)", {
	name : "The Archivist's Journal",
	source : ["CoFSA", 11],
	description : desc([
		"I gain advantage on saving throws while in the Archive. Whenever I cast a 1st level spell or",
		"higher that deals damage. I can use a bonus action to give random vulnerability to one",
		"damage type until damage is taken from that damage type. Roll 1d4 to determine the",
		"damage type from the following: 1-Fire, 2-Cold, 3-Poison, 4-Necrotic.",
	]),
	usages : 1,
  	recovery : "short rest",
	action: ["bonus action", "(index roll)"],
  	prereqeval : "(/archive/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
});
AddWarlockInvocation("Butcher's Quill (prereq: the Accursed Archive patron, Pact of the Blade)", {
	name : "Butcher's Quill",
	source : ["CoFSA", 11],
	description : desc([
		"Using the Pact of the Blade, I can summon a whip made of raven feathers and the hide of",
		"abominations that always bleeds black ink. Once per short rest, When it hits a creature, I",
		"can cast a 1st level spell with a casting time of 1 bonus aciton I know without expending",
		"a spell slot.",
	]),  
	usages : 1,
  	recovery : "short rest",
	action: ["bonus action"],
	prereqeval : "(/archive/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
});
AddWarlockInvocation("Curse of Carasphyx (prereq: the Accursed Archive patron, level 7 warlock)", {
	name : "Curse of Carasphyx",
	source : ["CoFSA", 11],
	description : desc([
		"My flesh grows aged in appearance but is imbued with terrible might. While I am not",
		"wearing armor, I can chose to have my AC equal 10 + Cha mod + Str mod. Note: This is",
		"manual for now, sheet does not support 2 non-Dex modifiers for armors."
	]),
	action: ["bonus action"],
	prereqeval : "(/archive/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 7",
});
AddWarlockInvocation("Scribe's Adjunct (prereq: the Accursed Archive patron, Pact of the Chain)", {
	name : "Scribe's Adjunct",
	source : ["CoFSA", 11],
	description : desc([
		"While I have a record-hunter as my familiar, it gains additional maximum hit points equal",
		"to my warlock level, and I gain the ability to cast the mending cantrip.",
	]),
	prereqeval : "(/archive/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1",
});
AddWarlockInvocation("Tenebrous Blast (prereq: the Accursed Archive patron, level 7 warlock)", {
	name : "Tenebrous Blast",
	source : ["CoFSA", 11],
	description : desc([
		"When I deal damage with a cantrip or weapon attack, I can use a bonus action to give one", 
		"target of the attack disadvantage on attack rolls against lightly obscured targets until the",
		"end of their turn."
	]),
	action: ["bonus action"],
	prereqeval : "(/archive/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 7",
});
//The Accursed Archive - Barbarian
AddSubClass("barbarian", "path of the accursed", {
	regExpSearch : /^(?=.*path)(?=.*accursed)(?=.*barbarian).*$/i,
	subname : "Path of the Accursed",
	source : ["CoFSA", 13],
	features : {
		"subclassfeature1" : {
			name : "The Lurking Fear",
			source : ["CoFSA", 13],
			minlevel : 1,
			description : desc ([
				"I gain resistance to damage inflicted by Frightened creatures while raging",
				"I can use Charisma in place of Intelligence for Ability Checks and Saving Throws",
				"While raging, creatures within 10 feet of me must make a Wisdom saving throw or",
				"become Frightened of me until the end of my next turn (DC=8+Prof Bonus+Cha mod)",
				"Once a creature fails, it can't be by frightened by this feature for 1 minute."
			]),
		},
		"subclassfeature6" : {
			name : "From Beyond",
			source : ["CoFSA", 13],
			minlevel : 6,
			description : desc ([
				"I can cast Dark Secret once using Charisma, and recover it when I enter a Rage"
			]),
			spellcastingAbility : 6,
			spellcastingBonus : {
				name : "From Beyond",
				spells : ["dark secret"],
				prepared : true,
			},
		},
		"subclassfeature10" : {
			name : "The Thing on the Doorstep",
			source : ["CoFSA", 13],
			minlevel : 10,
			description :desc ([
                "When I enter my Rage, I can pull up to a number of creatures equal to my Charisma",
				"modifier within 30ft to an open spot adjacent to me or to the next closest spot. Until", 
				"the end of my turn, I cannot suffer disadvantage to grapple on of these targets.",
            ]),
		},
		"subclassfeature14" : {
			name : "What the Moon Brings",
			source : ["CoFSA", 13],
			minlevel : 14,
			description : desc ([
                "When I reduce a creature to 0 HP, I can choose another creature within 30 ft to pull.",
				"They must make a Athletics or Acrobatics check vs my Athletics. On a failure, the ",
				"creature is pulled to the closest open space next to me, and suffers 1 level of",
				"exhaustion. A creature cannot be affected by this feature more than once per turn."
            ]),
		}
	}
});
//The Accursed Archive - Magic Items
MagicItemsList["the bloodstained quill"] = {
	name : "The Bloodstained Quill",
	source : ["CoFSA", 15],
	type : "wonderous item",
	rarity : "legendary",
	allowDuplicates : false,
	description : "I can dip this quill in the blood of a creature and write on its skin as an action. Those words become true and the target acts as though affected by the geas spell. The target can be written upon multiple times. If the creature is targeted with a remove curse spell, only one of the writings is removed each time.",
	descriptionFull: "Whenever this quill is dipped in the blood of a living creature, it can be used to write one or more words upon that creature’s skin as an action. Those words become true and the target acts as though affected by the geas spell. The target can be written upon multiple times, creating a series of soul-binding instructions that each act as a unique instance of the geas spell. If the creature is targeted with a remove curse spell, only one of the writings is removed each time.",
}
MagicItemsList["celestial's spiteful armor"] = {
	name : "Celestial's Spiteful Armor",
	source : ["CoFSA", 15],
	type : "armor (any)",
    rarity : "very rare",
	attunement : true,
    allowDuplicates : false,
	description : "While I am wearing and attuned to this dark and corrupted armor, I gain resistance to magical damage from spells and have advantage on saving throws against spells cast by non-evil creatures. A non-evil creature wearing this armor cannot cast spells.",
	descriptionFull: "While a creature is wearing and attuned to this dark and corrupted armor, they gain resistance to magical damage from spells and have advantage on saving throws against spells cast by non-evil creatures. A non-evil creature wearing this armor cannot cast spells.",
	chooseGear : {
		type : "armor",
		prefixOrSuffix : "brackets",
		descriptionChange : ["prefix", "armor"]
	},
	dmgres : ["Spells"],
	savetxt : { adv_vs : ["Spells cast by non-evil creatures"] }
}
MagicItemsList["ink razor"] = {
	name : "Ink Razor",
	source : ["CoFSA", 15],
	type : "weapon (dagger)",
    rarity : "very rare",
	attunement : true,
    allowDuplicates : false,
	description : "This magical dagger appears to be an inkwell, but when opened, it transforms into a blade of hardened black liquid. Whenever I hit a creature with this weapon, it suffers disadvantage on saving throws against spells until the start of my next turn.",
	descriptionFull: "This magical dagger appears to be an inkwell, but when opened, it transforms into a blade of hardened black liquid. Whenever you hit a creature with this weapon, it suffers disadvantage on saving throws against spells until the start of your next turn.",
	weaponsAdd : ["Ink Razor"],
	weaponOptions : {
		baseWeapon : "dagger",
		regExpSearch : /^(?=.*ink)(?=.*razor).*$/i,
		name : "Ink Razor",
		source : ["CoFSA", 15],
		description : "Finesse, light, thrown; creatures hit disadv. against spells until SONT",
	}
}
//The Ashen Wolf - Warlock
AddSubClass("warlock", "the ashen wolf", {
	regExpSearch : /^(?=.*ashen)(?=.*wolf)(?=.*warlock).*$/i,
	subname : "The Ashen Wolf",
	source : ["CoFSA", 17],
	spellcastingExtra : ["hunter's pace", "inflict wounds", "flame blade", "pass without trace", "funeral pyre", "haste", "ashen pack", "wall of fire", "cloudkill", "hungering hate"],
	features : {
		"subclassfeature1" : {
			name : "Breath of Smoke",
			source : ["CoFSA", 17],
			minlevel : 1,
			description : desc ([
                "I can exhale blistering embers in a 15-foot cone. Each creature in that area must make a",
				"Con saving throw against my warlock spell save DC or take fire damage equal to my",
				"warlock level + my Cha modifier and are blinded until the end of their next turn. If I use",
				"this feature again before finishing a short or long rest, I gain one level of exhaustion.",
				"Additionally, I can breathe and see normally in smoke or ash-filled air."
			]),
			recovery : "short rest",
			usages : 1,
            action : ["action", ""],
		},
		"subclassfeature6" : {
			name : "Feast for the Fire",
			source : ["CoFSA", 17],
			minlevel : 6,
			description : desc ([
				"I can choose a creature within 60ft of me and curse them. While cursed. The target loses",
				"any resistance to fire damage, and opportunity attacks against them have advantage.",
				"At 10th level, targets lose immunity to fire damage if they have it.",
            ]),
			action : ["bonus action", ""],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Endless Pursuit",
			source : ["CoFSA", 17],
			minlevel : 10,
			description :desc ([
                "I gain resistance to fire damage. When I short rest, I can reduce my exhaustion by one",
			]),
			recovery : "long rest",
			additional : "Reduce Exhaustion",
			dmgres : ["Fire"],
		},
		"subclassfeature14" : {
			name : "Beast of the Burning End",
			source : ["CoFSA", 17],
			minlevel : 14,
			description : desc ([
                "I can call on the power of the Ashen Wolf, transforming into a massive flaming wolf",
				"for 1 min, or until I end the form as a bonus action. I gain the following benefits:",
				"My size becomes Medium or Large (my choice)",
				"I ignore all levels of exhaustion",
				"My speed increases by 20 feet",
				"I have advantage on melee attack rolls against a creature if a least one of my allies is within 5 feat and the ally isn't incapacitated.",
				"I am immune to fire damage.",
				"I summon two hell hounds next to me who obey my commands, or defend me and",
				"themselves if no action given. They act on my initiative, and twice the normal number of",
				"hit points, and are considered elementals. When I exit this form, the hounds turn to ash",
				"and are reabsorbed into me. If I can't absorb the ash or one has died, I take a level of ",
				"exhaustion per missing hound."
            ]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
//The Ashen Wolf - Sorcerer
WeaponsList["ember claws"] = { 
	regExpSearch : /^(?=.*ember)(?=.*claws).*$/i,
	name : "Ember Claws",
	source : ["CoFSA", 19], 
	list : "melee",
	ability : 6,
	type : "Natural",
	damage : [1, 8, "fire"],
	range : "Melee",
	description : "Active while below max HP",
	abilitytodamage : true, 
};
AddSubClass("sorcerer", "ashen lineage", {
	regExpSearch : /^(?=.*ashen)(?=.*lineage)(?=.*sorcerer).*$/i,
	subname : "Ashen Lineage",
	source : ["CoFSA", 19],
	features : {
		"subclassfeature1" : {
			name : "Born of Ember",
			source : ["CoFSA", 19],
			minlevel : 1,
			description : desc ([
                "When I am below my HP max, I gain firey claws. I can use my bonus action to make a",
				"melee spell attack that deals 1d8 + my Cha mod fire damage. At 11th level, the damage", 
				"increases to 2d8 + my Cha mod. The first time after a long rest when I am below half", 
				"my HP max, I gain fire resistance until I finish a long rest. At 14th level, you gain",
				"immunity instead of resistance.",
			]),
			eval : "AddWeapon('Ember Claws');",
			removeeval : "RemoveWeapon('Ember Claws');",
			additional : levels.map(function (n) {
				return (n < 11 ? 1 : 2) + "d8 fire damage";
			}),
			calcChanges : {
				atkAdd : ["var lineageDie = function(n) {return n < 11 ? 1 : 2;}; if ((/Ember Claws/i).test(theWea.name)) {var alineageDie = lineageDie(Number(What('Character Level'))); try {var curDie = eval(fields.Damage_Die.replace('*', 'd'));} catch (e) {var curDie = 'x';}; if (isNaN(curDie) || curDie < alineageDie) {fields.Damage_Die = alineageDie + 'd8';};}; ", "Ember Claws Scales"]
			},
			spellcastingBonus : {
				name : "Born of Ember (level 1)",
				spells : ["produce flame"],
				selection : ["produce flame"],
				atwill : true
			},
			languageProfs : ["Primordial"]
		},
		"subclassfeature1.1" : {
			name : "Origin Spells",
			source : ["CoFSA", 19],
			minlevel : 1,
			description : desc ([
				"I gain prepared spells at certain levels that do not count against my known spells"
			]),
			spellcastingBonus : [{
				name : "Origin Spells (level 1)",
				spells : ["burning hands"],
				selection : ["burning hands"],
				level : [1, 1],
				markedbox : true
			}, {
				name : "Origin Spells (level 3)",
				spells : ["heat metal"],
				selection : ["heat metal"],
				level : [2, 2],
				markedbox : true
			}, {
				name : "Origin Spells (level 5)",
				spells : ["fireball"],
				selection : ["fireball"],
				level : [3, 3],
				markedbox : true
			}, {
				name : "Origin Spells (level 7)",
				spells : ["locate creature"],
				selection : ["locate creature"],
				level : [4, 4],
				markedbox : true
			}, {
				name : "Origin Spells (level 9)",
				spells : ["commune with nature"],
				selection : ["commune with nature"],
				level : [5, 5],
				markedbox : true
			}, {
				name : "Origin Spells (level 11)",
				spells : ["circle of death"],
				selection : ["circle of death"],
				level : [6, 6],
				markedbox : true
			}],
		},
		"subclassfeature6" : {
			name : "Burning Fury",
			source : ["CoFSA", 19],
			minlevel : 6,
			description : desc ([
				"When I reduce a creature to 0 HP with my Born of Ember class feature, I gain temp HP",
				"equal to twice my Cha mod.",
				"I can spend 1 sorcery point during my turn when I am below half my HP max to",
				"make my AC 17 until the start of my next turn. This has no effect if my AC is equal",
				"to or greater than 17.",
            ]),
		},
		"subclassfeature14" : {
			name : "Cinderwraith",
			source : ["CoFSA", 19],
			minlevel : 10,
			description :desc ([
                "If I would inflict fire damage, I can inflict necrotic damage instead, and vice versa.",
				"I ignore difficult terrain, and I can move through any space at least 6 inches wide",
				"without squeezing.",
			]),
		},
		"subclassfeature18" : {
			name : "The Wolf's Bargain",
			source : ["CoFSA", 19],
			minlevel : 14,
			description : desc ([
                "I can spend 5 sorcery points to move to a point within 60ft and attack a target within",
				"5 ft.. The target must make a Wisdom saving throw, taking 6d10 fire damage on",
				"a failed save, or half as much damage on a successful one.",
				"If the target is slain by this attack, it burns to ash and becomes a hell hound with the",
				"elemental creature type. It obeys my orders and acts on my turn. I can only have 2 hell",
				"hounds, with the oldest being destroyed if I make a 3rd one. Each hell hound lasts until",
				"slain or until the third dawn after it was summoned, when it disintegrates into ash."
            ]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
			additional : ["5 Sorcery Points"]
		}
	}
});
//The Blackthorn Grove - Warlock
AddSubClass("warlock", "the blackthorn grove", {
	regExpSearch : /^(?=.*blackthorn)(?=.*grove)(?=.*warlock).*$/i,
	subname : "the Blackthorn Grove",
	source : ["CoFSA", 23],
	spellcastingExtra : ["entangle", "hunter's pace", "heartripper", "replenish", "plant growth", "skewering vines", "bloodthorn", "cage of briars", "overwhelming emotion", "tree stride"],
	features : {
		"subclassfeature1" : {
			name : "Blackthorn Heart",
			source : ["CoFSA", 23],
			minlevel : 1,
			description : desc ([
                "I ignore nonmagical difficult terrain. Whenever I fail a death saving throw, I make a",
                "melee spell attack against an enemy within 15 feet of me. On a hit, the creature takes",
                "magical piercing damage equal to my warlock level, and I regain hit points equal to the", 
                "damage dealt.",
			]),
			recovery : "short rest",
			usages : 1,
		},
		"subclassfeature6" : {
			name : "Apathy is Death",
			source : ["CoFSA", 23],
			minlevel : 6,
			description : desc ([
				"I can use my reaction to gain advantage on an Intelligence, Wisdom, or Charsima saving",
                "throw, and then I can move up to half my speed and make a single weapon attack",
                "before the result of the roll is revealed."
            ]),
			action : ["reaction", ""],
			recovery : "short rest",
			usages : 1
		},
		"subclassfeature10" : {
			name : "Arboreal Guardian",
			source : ["CoFSA", 23],
			minlevel : 10,
			description :desc ([
                "Whenever a creature within 5 feet of me would take damage, I can choose to redirect", 
                "half of the damage to me by shielding them with vines from my Blackthorn heart.",
                "Only the original target suffers any additional effects of the damage. If this damage", 
                "reduces me to 0 hit points, you gain advantage on the first attack made by your", 
                "Blackthorn Heart feature."
            ]),
		},
		"subclassfeature14" : {
			name : "Seeds of Destruction",
			source : ["CoFSA", 23],
			minlevel : 14,
			description : desc ([
                "As an action, or whenever you fail to recover hit points using your Blackthorn Heart",
                "feature, I can make the area within a 30-foot radius of me difficult terrain. A creature",
                "within the radius at the start of its turn must make a Constitution saving throw against", 
                "my warlock spell save DC. A target takes 4d6 magical slashing damage on a failed save,", 
                "or half that on a success. Allies make this saving throw with advantage. If summoned as", 
                "an action, it lasts until the start of my next turn. If summoned when I am at 0 hit",
                "points, it lasts until I recover 1 hit point, or becomes permanent if I die.I can summon it",
                "once per long rest as an action, and once per long rest when I fall to 0 hit points."
            ]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""]
		}
	}
});
AddWarlockInvocation("Awakened Blade (prereq: the Blackthorn Grove patron, Pact of the Blade)", {
	name : "Awakened Blade",
	source : ["CoFSA", 23],
	description : desc([
		"I can create a weapon of polished black wood and wicked spines as my pact blade. While",
		"maintaining concentration on a spell cast using a Warlock spell slot while wielding",
        "this weapon, my AC is a 17 unless it would normally be higher.",
    ]),
  	prereqeval : "(/blackthorn/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
});
AddWarlockInvocation("Book of the Blackthorn (prereq: the Blackthorn Grove patron, Pact of the Tome)", {
	name : "Book of the Blackthorn",
	source : ["CoFSA", 23],
	description : desc([
		"During a short or long rest, I can create an effigy, and spend 1 minute placing it into",
		"a dead creature, causing it to become a zombie with 1 HP. It will travel to a destination",
        "of my choosing, ignoring all creatures and will not stop unless destroyed. When it reaches",
        "the destination, it crumbles and a sapling sprouts from the corpse. Creating a new effigy",
        "will cause the previous one to cease to function, and the zombie turns back into a corpse."
	]),  
	usages : 1,
  	recovery : "short rest",
	prereqeval : "(/blackthorn/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
});
AddWarlockInvocation("Nightshade's Embrace (prereq: the Blackthorn Grove patron, level 7 warlock)", {
	name : "Nightshade's Embrace",
	source : ["CoFSA", 23],
	description : desc([
		"When I deal damage with a cantrip or weapon attack, I can use a bonus action to try to ",
		"poison the target. The next time the target takes piercing, slashing, or bludgeoning damage",
        "It must succeed on a Con save against my warlock spell DC or be poisoned and blinded until",
        "the end of my next turn."
	]),
	action: ["bonus action"],
	prereqeval : "(/blackthorn/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 7",
});
AddWarlockInvocation("United Survival (prereq: the Blackthorn Grove patron, Pact of the Chain)", {
	name : "United Survival",
	source : ["CoFSA", 23],
	description : desc([
		"While I have a bloodless wanderer as my familiar, it gains additional maximum hit points",
        "equal to my warlock level. I can transfer a number of my own hit points up to my warlock",
        "level to another creature by touching the target as an action."
    ]),
    action : ["action", ""],
	prereqeval : "(/blackthorn/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1",
});
//The Currency Consipricy - Paladin
AddSubClass( "paladin", "oath of avarice", {
	regExpSearch : /^(?=.*avarice)(?=.*paladin).*$/i,
	subname : "Oath of Avarice",
	source : ["CoFSA", 30],
	spellcastingExtra : ["alarm", "charm person", "knock", "sinister threat", "blackened heart", "detect interference", "invitation", "unspoken agreement", "overwhelming emotion", "nemesis"],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Golden Suit",
			source : ["CoFSA", 30],
			minlevel : 3,
			description : desc([
				"As an action, I coat myself in shining gold. I gain temp HP equal to twice my paladin",
				"level that last for one hour, and if a creature damages me with a melee weapon attack",
				"while I have this temp HP, they have disadvantage on their next attack before the start", 
				"of their next turn.",
			]),
			action : ["action", ""],
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Hired Help",
			source : ["CoFSA", 30],
			minlevel : 3,
			description : desc([
				"As an action, I can summon a simple magical construct for one hour. This construct has", 
				"the statistics of a commoner (except it is a construct instead of a humanoid) and it",
				"cannot attack, cast spells, or activate magical items. If it dies or the duration expires, it",
				"fades into mist.",
			]),
			action : ["action", ""],
		},
		"subclassfeature7" : {
			name : "Aura of Investment",
			source : ["CoFSA", 30],
			minlevel : 7,
			description : desc([
				"I am surrounded by a 10-foot aura of mutual benefit. Whenever I or a friendly creature",
				"gain temp HP while within the aura, all other friendly creatures within the aura",
				"(including me) gain an the same temp HP which lasts for the same duration. A creature",
				"cannot gain more than twice my Charisma modifier in temp HP at once.",
			]),
			additional : ["", "", "", "", "", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "10-foot aura", "30-foot aura", "30-foot aura", "30-foot aura"],
		},
		"subclassfeature15" : {
			name : "Rate of Exchange",
			source : ["CoFSA", 30],
			minlevel : 15,
			description : desc([
				"Once per turn when I hit a creature with an unarmed strike, I can choose to attempt to",
				"steal an object or weapon from the target. The creature must make a Strength saving",
				"throw. If they fail, I take the object from them. If I lack a free hand, the attempt fails.",
			]),
		},
		"subclassfeature20" : {
			name : "Hidden Agenda",
			source : ["CoFSA", 30],
			minlevel : 20,
			description : desc([
				"As an action, I collect debts owed to me, drawing life force for 1 min:",
				"  I gain 20 temporary hit points at the start of each of my turns",
				"  If I steal a weapon with Rate of Exchange, I can make a weapon atk as a free action",
				"  If I hit a creature with a melee weapon attack, I can choose to unleash a blast of",
				"  golden light. The target must make a Wisdom saving throw. If they fail, they are",
				"  blinded until the end of my next turn.",
			]),
			recovery : "long rest",
			usages : 1,
			action : ["action", ""],
		}
	}
});
//The Gelatinous Convocation - Warlock
AddSubClass("warlock", "the gelatinous convocation", {
    regExpSearch : /^(?=.*\bgelatinous\b)(?=.*\bconvocation\b).*$/i,
    subname : "the Gelatinous Convocation",
    source : ["CoFSA", 1],
    spellcastingExtra : ["grease", "tasha's hideous laughter", "melf's acid arrow", "enlarge/reduce", "meld into stone", "water walk", "stone shape", "slime sphere", "summon slime", "wall of ooze"],
    features : {
        "subclassfeature1" : {
            name : "Recovered Memories",
            source : ["CoFSA", 54],
            minlevel : 1,
            description : desc([
                "As an action, I can produce acid which can consume an adjacent corpse over 1 minnute",
                "By reabsorbing the acid, I gain the creature's memories of the last 48 hours",
                "I also gain the most important memories from its  final year of life"
            ]),
            usages : 1,
            recovery : "short rest",
            action : ["action", " (takes 1 minute)"]
        },
        "subclassfeature1.1" : {
            name : "Cheerful Friend",
            source : ["CoFSA", 54],
            minlevel : 1,
            description : desc([
                "I can communicate simple concepts to Oozes, even if they can't speak a language",
                "I am immune to acid damage caused by non-hostile oozes touching me",
                "I have resistance to acid damage"
            ]),
            savetxt : { text : ["Immune to acid damage from friendly oozes"], immune : ["acid"] },
            dmgres : ["acid"],
            languageProfs : ["Ooze"]
        },
        "subclassfeature6" : {
            name : "Side Splitting",
            source : ["CoFSA", 54],
            minlevel : 6,
            description : desc([
                "As a reaction when I take damage, I can divide myself into a Medium swarm of Tiny oozes",
                "My total HP remains the same, and I function as a single swarm that occupies one space",
                "While in this form, I cannot take any action other than the Dash action, and my movement speed is halved",
                "I have resistance to bludgeoning, percing, and slashing damage",
                "I have immunity to acid and poison damage",
                "I don't provoke opportunity attacks",
                "I can move through any space as narrow as 1 inch without squeezing",
                "I can return to my normal form at will without an action, provided there is room to do so"
            ]),
            usages : 1,
            recovery : "short rest",
            action : ["reaction", " (taking damage)"]
        },
        "subclassfeature10" : {
            name : "Acidic Body",
            source : ["CoFSA", 54],
            minlevel : 10,
            description : desc([
                "I have immunity to acid damage",
                "When grappled, I can deal 2d8 acid damage on my enemy's turn"
            ]),
            immune : ["acid"]
        },
        "subclassfeature14" : {
            name : "Consuming Joy",
            source : ["CoFSA", 54],
            minlevel : 14,
            description : desc([
                "I can't be charmed",
                "I can cast Polymorph once per long rest, without expending a spell slot",
                "When I cast it this way, the target can only become an Ooze"
            ]),
            usages : 1,
            recovery : "long rest",
            spellcastingBonus : {
                name : "Once per long rest",
                spells : ["polymorph"],
                selection : ["polymorph"],
                oncelr: true
            }
        }
    }
});
AddWarlockInvocation("Catalogue of Experiences (prereq: the Gelatinous Convocation patron, Pact of the Tome)", {
    name : "Catalogue of Experiences",
    description : desc([
        "When I use Recovered Memories, I can store the creature in the Book of Shadows",
        "It comes to life on the pages in the book",
        "As an action, I can touch a creature to copy and transfer one memory to them"
    ]),
    source : ["CoFSA", 54],
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
    action : ["action", ""]
});
AddWarlockInvocation("Caustic Blast (prereq: level 7 warlock, the Gelatinous Convocation patron)", {
    name : "Caustic Blast",
    description : desc([
        "I can use a bonus action to change the damage type of a cantrip or weapon attack",
        "The attack deals acid damage instead of its normal type",
        "The attack deals double damage to unattended objects and structures",
        "If the target creature is wielding a nonmagical shield, they must make a Dex saving throw",
        "On a failure, their shield is destroyed"
    ]),
    source : ["CoFSA", 54],
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 7",
    action : ["bonus action", ""]
});
AddWarlockInvocation("Jiggly Defense (prereq: level 11 warlock, the Gelatinous Convocation patron, Pact of the Blade)", {
    name : "Jiggly Defense",
    description : desc([
        "As a reaction when I would take damage, I can take on Ooze-like resistances",
        "I have resistance to bludgeoning, piercing, and slashing damage",
        "This resistance lasts until the end of the current turn"
    ]),
    dmgres : [["Bludgeoning", "Bludgeon. (Jiggly)"], ["Piercing", "Piercing (Jiggly)"], ["Slashing", "Slashing (Jiggly)"]],
    source : ["CoFSA", 54],
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 11 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
    action : ["reaction", " (taking damage)"]
});
AddWarlockInvocation("Slick Hands (prereq: level 7 warlock, the Gelatinous Convocation patron)", {
    name : "Slick Hands",
    description : desc([
        "On my turn, my reach for melee attacks is 5 feet greater than normal",
        "Also, I have advantage on Sleight of Hand checks and checks to maintain a grapple"
    ]),
    source : ["CoFSA", 54],
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 7",
});
AddWarlockInvocation("Slime Slayer (prereq: the Gelatinous Convocation patron, Pact of the Blade)", {
    name : "Slime Slayer",
    description : desc([
        "I can create a pact weapon made of colorful ooze",
        "I can choose to deal acid damage with this weapon",
        "When I hit an enemy with this weapon, I may grapple them as a bonus action",
        "When I do so, my Athletics checks use Charisma instead of Strength"
    ]),
    source : ["CoFSA", 54],
    savetxt : { adv_vs : ["Charisma (Athletics) grapple checks with Slime Slayer"] },
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 3 && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
    action : ["bonus action", " (with attack)"]
});
AddWarlockInvocation("Unusual Form (prereq: level 13 warlock, the Gelatinous Convocation patron)", {
    name : "Unusual Form",
    description : desc([
        "When I would be subjected to a critical hit, I can roll a d6",
        "On a result of 5 or 6, the attack is not a critical hit",
        "Also, I have resistance to poison damage"
    ]),
    source : ["CoFSA", 54],
    dmgres : ["Poison"],
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 13",
});
//The Perfect Chord - Warlock
AddSubClass("warlock", "the perfect chord", {
    regExpSearch : /^(?=.*perfect)(?=.*chord).*$/i,
    subname : "The Perfect Chord",
    source : ["CoFSA", 72],
    spellcastingExtra : ["shrill whistle", "thunderwave", "knock", "silence", "beacon of hope", "resonance", "compulsion", "shattersong", "animate objects", "awaken"],
    features : {
        "subclassfeature1" : {
            name : "Seeker of the Sound",
            source : ["CoFSA", 72],
            minlevel : 1,
            description : desc([
                "I gain proficiency in the Performance skill and with all musical instruments. I can use a",
				"musical instrument as a spellcasting focus for my warlock spells, and can play it in place",
				"of using a verbal spellcasting component. I can choose to cast spells with only verbal and", 
				"somatic components as though they only had a verbal component. When I cast", 
				"non-cantrip spells with only a verbal component, including those modified by this", 
				"feature, I gain temporary hit points equal to my Cha modifier that last for 1 minute."
			]),
			skills : ["Performance"],
			skillstxt : "\n\n" + toUni("The Perfect Chord Patron") + ": Performance",
			toolProfs : "All Musical Instruments",
        },
        "subclassfeature6" : {
            name : "Instrument of the Chord",
            source : ["CoFSA", 72],
            minlevel : 6,
            description : desc([
                "I can curse or harmonize with one creature within 60 feet of me each time I cast a spell",
				"using a warlock spell slot. If the creature is friendly, its movement speed is doubled until", 
				"the end of its next turn. If it is hostile, it must make a Con saving throw against my", 
				"warlock spell save DC. If it fails, it is knocked prone. This curse lasts for 1 minute or until", 
				"the creature enters an area of magical silence."
			]),
			usages : 1, 
			recovery : "short rest",
			action : ["bonus action", ""]
        },
        "subclassfeature10" : {
            name : "Voice of the Maestro",
            source : ["CoFSA", 72],
            minlevel : 10,
            description : desc([
                "I gain resistance to thunder damage. Whenever I cast a spell that makes noise or the",
				"illusion of noise, I can cause it to produce any sound you wish. Additionally, I can", 
				"perfectly mimic the speech and other vocalizations of creatures I have heard. Creatures", 
				"must succeed an Insight check against my warlock spell save DC to determine the sound", 
				"is a mimicry, and they make this check with disadvantage."
			]),
			dmgres : ["Thunder"],
        },
        "subclassfeature14" : {
            name : "The Grand Finale",
            source : ["CoFSA", 72],
            minlevel : 14,
            description : desc([
				"I can call upon a single note of the Perfect Chord, choosing one of the following options:",
				"Celebration, Defiance, Discord, Exaltation, or Unity. See the \"Notes\" page for descriptions."
			]),
			action : ["action", ""],
			usages : 1, 
			recovery : "long rest",
			grandfinaleoptions : "The Grand Finale Options (The Perfect Chord 14, COFSA 72)" + desc([
				"\u25C6 Celebration: Each friendly creature within 1 mile of me gains advantage on Charisma",
				"checks for 8 hours. During this time, these creatures can use their actions to magically", 
				"conjure an instrument of their choosing, and they gain proficiency with that instrument", 
				"for the duration. They can also use their action to summon delicious food or beverages", 
				"sufficient to satisfy their needs for one day. They can only use each action once.", 
				"Finally, they can cast any cantrips that I know that are from the schools of illusion or", 
				"enchantment. After 8 hours, all of the conjured objects vanish and all ongoing effects", 
				"created or enabled by this feature end.",
				"\u25C6 Defiance: I unleash a painful sound. Creatures of my choosing within 120 feet of me can", 
				"choose to use their reaction to drop what they are holding and cover their ears. If they", 
				"don't do so, they take 8d10 thunder damage and are deafened for one hour. If they do,", 
				"they take half as much damage and are not deafened.",
				"\u25C6 Discord: Each hostile creature within 60 feet of me that can hear me must make a",
				"Charisma saving throw against my warlock spell save DC. If they fail, they are frightened", 
				"of me and of all creatures friendly to me for one minute. A creature can repeat their",
				"saving throw at the end of each of its turns, ending the effect on a success.",
				"\u25C6 Exaltation: Each creature within 60 feet of me that can hear me can use their reaction",
				"to cheer. I immediately gain temporary hit points equal to ten times the number of",
				"creatures that cheer. These temporary hit points last for 10 minutes.",
				"\u25C6 Unity: Each friendly creature within 60 feet of me that can hear me can use their",
				"reaction to immediately move up to 30 feet and make one weapon attack."
			]),
			eval : "try {AddToNotes(ClassSubList['warlock-the perfect chord'].features.subclassfeature14.grandfinaleoptions, \"The Perfect Chord Warlock's Grand Finale Options\");} catch (er) {};",
			removeeval : "try {AddToNotes('', '', ClassSubList['warlock-the perfect chord'].features.subclassfeature14.grandfinaleoptions);} catch (er) {};"
        }
    }
});
AddWarlockInvocation("Allegro Vivace (prereq: level 9 warlock, the Perfect Chord patron)", {
	name : "Allegro Vivace",
	description : desc([
		"Once per long rest, I can cast Greater Restoration without using a spell slot"
	]),
	source : ["CoFSA", 72],
	spellcastingBonus : {
		name : "Allegro Vivace",
		spells : ["greater restoration"],
		selection : ["greater restoration"],
		oncelr : true
	},
	prereqeval : "(/perfect chord/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 9",
});
AddWarlockInvocation("Cheerful Duet (prereq: the Perfect Chord patron, Pact of the Chain)", {
	name : "Cheerful Duet",
	source : ["CoFSA", 72],
	description : desc([
		"While I have a symphonic songbird as my familiar, it gains additional maximum hit points",
        "equal to my warlock level. I can choose to case spells that only require a verbal",
        "component as though I were in my familiar's space."
    ]),
    action : ["action", ""],
	prereqeval : "(/perfect chord/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the chain') !== -1",
});
AddWarlockInvocation("Composistions of the Masters (prereq: the Perfect Chord patron, Pact of the Tome)", {
    name : "Compositions of the Masters",
    description : desc([
        "I ignore the effects of the silence spell and other forms of magical silence",
        "Allowing me to cast spells normally. I am immune to the deafened condition.",
    ]),
    source : ["CoFSA", 72],
    prereqeval : "(/perfect chord/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the tome') !== -1",
    savetxt : {
		immune : ["being deafened"],
	},
});
AddWarlockInvocation("Singing Slayer (prereq: the Perfect Chord patron, Pact of the Blade)", {
    name : "Singing Slayer",
    description : desc([
        "I can create a pact weapon made of swirling light, which counts a musical instrument.",
        "When I cast a cantrip with a verbal component as an action, an ally within 30ft can use its", 
		"reaction to give each of us advantage on our next attack roll during our next turn."
    ]),
    source : ["CoFSA", 72],
    prereqeval : "(/perfect chord/).test(classes.known.warlock.subclass) && What('Class Features Remember').indexOf('warlock,pact boon,pact of the blade') !== -1",
	usages : 1, 
	recovery : "long rest"
});
AddWarlockInvocation("Wicked Waltz (prereq: level 18 warlock, the Perfect Chord patron)", {
	name : "Wicked Waltz",
	description : desc([
		"Once per long rest, I can cast Irresistible Dance without using a spell slot"
	]),
	source : ["CoFSA", 72],
	spellcastingBonus : {
		name : "Wicked Waltz",
		spells : ["irresistible dance"],
		selection : ["irresistible dance"],
		oncelr : true
	},
	prereqeval : "(/perfect chord/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 18",
});
//FAMILARS
CreatureList["record hunter"] = {
	name : "Record-Hunter",
	source : ["CoFSA", 49],
	size : 5,
	type : "Construct",
	subtype : "",
	companion : "familiar",
	alignment : "Neutral",
	ac : 16,
	hp : 21,
	hd : [6, 4],
	speed : "30 ft",
	scores : [10, 16, 13, 16, 12, 11],
	saves : ["", "", "", "", "", ""],
	skills : {
		"stealth" : 8,
    	"perception" : 3,
	},
	damage_resistances : "psychic; poison; necrotic; attacks from nonmagical sources", 
	condition_immunities : "charmed, frightened, poisoned, exhausted, deafened, blinded",
	senses : "blindsight 10 ft",
	languages : "understands Common and the languages known by its master",
	challengeRating : "1", 
	proficiencyBonus : 3,
	attacksAction : 1,
	attacks : [{
		name : "Silent Secret",
		ability : 4,
		damage : [2, 8, "psychic"],
		range : "Range (30 ft)",
		description : "DC 10 Wis save or muted and spell locked. ",
		modifiers : ["5", "", false],
		tooltip : "Silent Secretn\n\nRanged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 8 (1d10 +3) psychic damage and the target must make a DC 15 Wisdom saving throw or become unable to speak or cast spells that require verbal components until the start of the record-hunter's next turn."
		}
	],
	traits : [{
		name : "Folding Figure",
		description : "The record-hunter can fold itself into an origami figure of any shape or creature. Its statistics remain the same in any form, but if the shape has wings, its walking speed is halved and it gains a flying speed equal to twice its new walking speed. While the record-hunter remains motionless, it is indistinguishable from an ordinary origami figurine or pile of papers."
		}, {
		name : "Magic Resistance",
		description : "The record-hunter has advantage on saving throws against spells and other magical effects."
		}, {
    	name: "Seek Knowledge",
    	description: "The record-hunter intuitively knows the layout of any library it enters, and the location of all written works within"
    }],
	features : [{
		name : "Scribes Adjunct",
		description : "My record hunter gains HP equal to my warlock level if i have the Scribe's Adjunct Invocation."
		},
	]
};
CreatureList["bloodless wanderer"] = {
	name : "Bloodless Wanderer",
	source : ["CoFSA", 142],
	size : 4,
	type : "Plant",
	subtype : "",
	companion : "familiar",
	alignment : "Neutral",
	ac : 16,
	hp : 31,
	hd : [6, 6],
	speed : "30 ft, climb 30 ft",
	scores : [16, 12, 14, 10, 12, 10],
	saves : ["", "", "4", "", "", ""],
	damage_resistances : "cold; poison; radiant; bludgeoning, piercing, and slashing from nonmagical attacks", 
	condition_immunities : "frightened, exhausted",
	senses : "Blindsight 10 ft, Darkvision 60 ft",
	languages : "understands languages known by its master, but can't speak or write",
	passiveperception: 11,
	challengeRating : "1", 
	proficiencyBonus : 2,
	attacksAction : 1,
	attacks : [{
		name : "Vine Lash",
		ability : 1,
		damage : [1, 10, "slashing"],
		range : "Reach (15 ft)",
		description : "Target also takes an additional 1d4 piercing dmg.",
		modifiers : ["", "", ""],
		tooltip : "Vine Lash.\n\nMelee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 8 (1d10 + 3) slashing damage plus 5 (1d4 +3) piercing damage."
		}
	],
	traits : [{
		name : "Bloodsucking Vines",
		description : "Whenever the bloodless wanderer deals slashing or piercing damage, it recovers hit points equal to the damage dealt. This does not apply if the target is a construct."
		}, {
		name : "Corpse Thief",
		description : "When the wanderer is touching the corpse of a beast or humanoid with a CR of 2 or less, it can use an action to enter and animate the body like a puppet. While inside, it gains temporary hit points equal to half the maximum hit points of the dead creature. When these temporary hit points are reduced to zero, the corpse is destroyed and the wanderer is ejected. The wanderer can choose to leave as a bonus action."
		}, {
    	name: "Grim Mask",
    	description: "Melee attacks targeting the bloodless wanderer are made with disadvantage. When a creature makes a melee attack targeting it and misses, it takes 1d6 slashing damage."
		},
		{
		name: "Magic Resistance",
		description : "The bloodless wanderer has advantage on saving throws against spells and other magical effects."
		}, {
		name : "Natural Visage",
		description : "The bloodless wanderer has advantage on saving throws against spells and other magical effects. Natural Visage. When the bloodless wanderer is still, it is indistinguishable from an ordinary plant. The wanderer is unimpeded by difficult terrain caused by plants, and can take the Hide action as a bonus action. It can hide while only lightly obscured."
		}
	],
	features : [{
		name : "United Survival",
		description : "My bloodless wanderer gains HP equal to my warlock level if i have the United Survival Invocation."
		},
	]
};
//SPELLS
SpellsList["accursed wish"] = {
	name : "Accursed Wish",
	regExpSearch : /^(?=.*accursed)(?=.*wish).*$/i,
	classes : ["sorcerer", "wizard"],
	source : ["CoFSA", 160],
	ritual : false,
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "Self",
	components : "V",
	duration : "Instantaneous",
	description : "Replicate a spell of 1st level or lower. Roll 1d20, on 1 drop to 0 HP and 2 death saves. See description",
	descriptionFull : "You speak aloud, demanding a boon from one of the darkest planes. You instantly replicate the effects of any spell of 1st level with a casting time of 1 action or bonus action that deals damage, or any cantrip from any spell list. Each time you cast this spell, roll a d20. If the result is 1, you are struck by an unholy force, reducing you to 0 hit points and causing you to fail your first and second death saving throws immediately after the spell is cast. If you are struck down a second time due to this spell before you finish a long rest, you die and cannot be resurrected by a spell cast using a spell slot lower than 8th level." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level, you can replicate a spell of 2nd level or lower, and the threshold for being struck down increases to a result of 2 or lower. When you cast this spell using a spell slot of 4th level, you can replicate a spell of 3nd level or lower, and the threshold for being struck down increases to a result of 3 or lower. This pattern continues until the spell is cast using a slot of 7th or higher level, where no additional effect is gained and the threshold is not increased.",
};
SpellsList["almighty assault"] = {
	name : "Almighty Assault",
	regExpSearch : /^(?=.*almighty)(?=.*assault).*$/i,
	classes : ["paladin"],
	source : ["CoFSA", 160],
	ritual : false,
	level : 3,
	school : "Evoc",
	time : "1 a",
	range : "5 feet",
	components : "V, M",
	compMaterial : "Any weapon",
	duration : "Instantaneous",
	description : "Replicate a spell of 1st level or lower. Roll 1d20, on 1 drop to 0 HP and 2 death saves. See description",
	descriptionFull : "You speak aloud, demanding a boon from one of the darkest planes. You instantly replicate the effects of any spell of 1st level with a casting time of 1 action or bonus action that deals damage, or any cantrip from any spell list. Each time you cast this spell, roll a d20. If the result is 1, you are struck by an unholy force, reducing you to 0 hit points and causing you to fail your first and second death saving throws immediately after the spell is cast. If you are struck down a second time due to this spell before you finish a long rest, you die and cannot be resurrected by a spell cast using a spell slot lower than 8th level." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level, you can replicate a spell of 2nd level or lower, and the threshold for being struck down increases to a result of 2 or lower. When you cast this spell using a spell slot of 4th level, you can replicate a spell of 3nd level or lower, and the threshold for being struck down increases to a result of 3 or lower. This pattern continues until the spell is cast using a slot of 7th or higher level, where no additional effect is gained and the threshold is not increased.",
};
SpellsList["blackened heart"] = {
	name : "Blackened Heart",
	regExpSearch : /^(?=.*blackened)(?=.*heart).*$/i,
	classes : ["druid", "sorcerer", "wizard"],
	source : ["CoFSA", 162],
	level : 3,
	school : "Necro",
	time : "Inst",
	range : "60ft",
	components : "V, S",
	duration : "Instantaneous",
	save : "Con",
	description : "At start of next turn, 1 crea takes 10d6+2d6/SL poison dmg. If reduced to 0 HP before, crea explodes",
	descriptionFull : "You reach out towards a living creature that you can see. The target must make a Constitution saving throw. If it fails, its body is filled with vile poison, and it takes 10d6 poison damage at the start of its next turn. If the target is reduced to 0 hit points before the start of its next turn, the poison explodes outward from it in a shower of disgusting bile. Creatures within a 10-foot radius of the target must make a Dexterity saving throw. If they fail, they take 10d6 poison damage, or half as much on a successful save." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage of each phase of the spell increases by 2d6 per spell slot level above 3rd.",
};
SpellsList["blasphemy"] = {
	name : "Blasphemy",
	regExpSearch : /^(?=.*blasphemy).*$/i,
	classes : ["sorcerer", "wizard"],
	source : ["CoFSA", 162],
	ritual : false,
	level : 3,
	school : "Abjur",
	time : "Inst",
	range : "Self (60ft)",
	components : "V",
	duration : "1 min/Dispel",
	save : "Cha",
	description : "Any crea in range make save when healing from a spell; on fail, no healing, and takes 1d6 psychic dmg",
	descriptionFull : "You curse, and will away the healing magics of nature and the gods. Each time a creature within a 60-foot radius of you would recover hit points from a spell, it must make a Charisma saving throw. If it fails, it does not recover hit points	and instead takes 1d6 psychic damage. You can end this spell as an action.",
};
SpellsList["break"] = {
	name : "Break",
	regExpSearch : /^(?=.*break).*$/i,
	classes : ["cleric", "sorcerer", "warlock", "wizard"],
	source : ["CoFSA", 162],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "30ft",
	components : "V, S",
	duration : "Instantaneous",
	save : "Dex",
	description : "Deal 10 thunder dmg to obj, crea w/n 5 ft save or take 1d4 piercing dmg. +10/+1d4 at 5, 11, 17",
	descriptionFull : "You snap your fingers, generating a thunderclap of sound that can be heard up to 100 feet away. You inflict 10 thunder damage to an unattended object that you can see within range. Even if the object remains intact, it flings small shards of shrapnel at creatures within 5 feet of it. Each creature must make a Dexterity saving throw. If they fail, they take 1d4 piercing damage./n  This spell’s piercing damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4), and the spell’s thunder damage also increases by 10 at each of these levels.",
};
SpellsList["bloodthorn"] = {
	name : "Bloodthorn",
	regExpSearch : /^(?=.*bloodthorn).*$/i,
	classes : ["druid", "ranger"],
	source : ["CoFSA", 162],
	ritual : false,
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "60 ft",
    components : "V,S,M",
    compMaterial : "A thorn",
	duration : "Instantaneous",
	description : "On hit, 5d10+1d10/SL piercing, and make new attack w/n range, up to 3 times or miss. No repeats",
	descriptionFull : "You imbue a single thorn with a deadly enchantment, hurling it out towards a creature that you can see within range. Make a ranged spell attack roll. If you hit, the target takes 5d10 piercing damage. If you hit, you can choose an additional target for the bloodthorn to seek, repeating the attack against a different target within 60 feet of the previous one and using the thorn’s new position to determine if a target would gain the benefits of cover. You can repeat this process up to three times or until the attack misses. A creature cannot be targeted more than once." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the piercing damage increases by 1d10 per spell slot level above 4th.",
};
SpellsList["cage of briars"] = {
	name : "Cage of Briars",
	regExpSearch : /^(?=.*cage)(?=.*briars).*$/i,
	classes : ["druid", "ranger"],
	source : ["CoFSA", 163],
	ritual : false,
	level : 4,
	school : "Conj",
	time : "1 min",
	range : "30 ft",
    components : "V,S,M",
    compMaterial : "A small woven basket",
	duration : "8 h",
	description : "Create 10x10x10ft cube, AC 10, 200+20/SL HP, vuln. fire.",
	descriptionFull : "You imbue a single thorn with a deadly enchantment, hurling it out towards a creature that you can see within range. Make a ranged spell attack roll. If you hit, the target takes 5d10 piercing damage. If you hit, you can choose an additional target for the bloodthorn to seek, repeating the attack against a different target within 60 feet of the previous one and using the thorn’s new position to determine if a target would gain the benefits of cover. You can repeat this process up to three times or until the attack misses. A creature cannot be targeted more than once." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the piercing damage increases by 1d10 per spell slot level above 4th.",
};
SpellsList["dark secret"] = {
	name : "Dark Secret",
	regExpSearch : /^(?=.*dark)(?=.*secret).*$/i,
	classes : ["bard", "paladin", "sorcerer", "wizard"],
	source : ["CoFSA", 165],
	ritual : false,
	level : 2,
	school : "Div",
	time : "1 a",
	range : "60ft",
	components : "V",
	duration : "Instantaneous",
	description : "Gain adv. on all rolls against 1 + 1/SL creatures, they have disadv. on all rolls against me",
	descriptionFull : "You whisper a phrase into the mind of the target, unknown to you but clear and terrifying to them. Until the end of your next turn, you have advantage on all ability checks, attack rolls, and saving throws involving your target or actions it has taken. During this time, the target has disadvantage on all ability checks and attack rolls involving you or actions you have taken. Targets that are immune to being frightened are immune to this effect." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can choose one additional target per spell slot level above 2nd.",
};
SpellsList["deadly doorway"] = {
	name : "Deadly Doorway",
	regExpSearch : /^(?=.*deadly)(?=.*doorway).*$/i,
	classes : ["warlock"],
	source : ["CoFSA", 165],
	ritual : false,
	level : 4,
	school : "Necro",
	time : "1 a",
	range : "Touch",
    components : "V, S, M",
    compMaterial : "A small broken key",
    duration : "1 h",
    save : "Cha",
	description : "Make trapped opening. Must know passaction; on fail, save 5d10+2d10/SL necrotic and paralyzed.",
	descriptionFull : "When you cast this spell, you touch a doorway, gate, window, or other construction that serves as an opening between two locations. You can speak a word, phrase, or describe an action or activity that must be performed to secure safe passage through the door. The first creature that does not perform this safeguard while passing through the doorway must succeed a Charisma saving throw or take 5d10 necrotic damage and be paralyzed until the start of their next turn. A creature slain by this damage instantly withers into dust, leaving all of their clothing and possessions behind." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the necrotic damage increases by 2d10 per spell slot level above 4th.",
};
SpellsList["forbidden obelisk"] = {
	name : "Forbidden Obelisk",
	regExpSearch : /^(?=.*forbidden)(?=.*obelisk).*$/i,
	classes : ["druid"],
	source : ["CoFSA", 167],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "30ft",
	components : "V, S",
	duration : "Conc, 1 h",
	save : "Wis",
	description : "Summon 10ft tall pillar. Crea w/n 10ft read it. Save, adv. on Wis checks and throws, fail, blind 1 min",
	descriptionFull : "You summon forth 10-foot-tall pillar 5 feet across covered in runic inscriptions from the depths of the earth. Any creature that can see and moves into a space within 10 feet of the obelisk cannot help but read from it. The reader must make a Wisdom saving throw. If they succeed, they gain advantage on Wisdom ability checks and saving throws for one minute. If they fail, they are struck blind for one minute. Once a creature has read from a forbidden obelisk, they cannot do so again until at least one hour has passed." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the duration of the blindness or advantage increases to 10 minutes.",
};
SpellsList["forget"] = {
	name : "Forget",
	regExpSearch : /^(?=.*forget).*$/i,
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["CoFSA", 168],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "Self",
	components : "V, S",
	duration : "8 h",
	save : "Wis",
	description : "Suppress a memory (period of time, person, group, plan, skill). Crea must succeed save to access memory",
	descriptionFull : "You snap your fingers, generating a thunderclap of sound that can be heard up to 100 feet away. You inflict 10 thunder damage to an unattended object that you can see within range. Even if the object remains intact, it flings small shards of shrapnel at creatures within 5 feet of it. Each creature must make a Dexterity saving throw. If they fail, they take 1d4 piercing damage./n  This spell’s piercing damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4), and the spell’s thunder damage also increases by 10 at each of these levels.",
};
SpellsList["heartripper"] = {
	name : "Heartripper",
	regExpSearch : /^(?=.*heartripper).*$/i,
	classes : ["druid", "ranger", "sorcerer"],
	source : ["CoFSA", 169],
	ritual : false,
	level : 2,
	school : "Necro",
	time : "1 a",
	range : "Touch",
	components : "S",
	duration : "Instantaneous",
	description : "Spell atk 1d10 piercing dmg. target Con save or take 3d10+1d0/SL piercing dmg and stunned",
	descriptionFull : "When you cast this spell, barbed thorns sprout from your fingertips. Make a melee spell attack roll against a creature within range. If you hit, the target takes 1d10 piercing damage and must make a Constitution saving throw. If they fail, you grasp a vital part of their anatomy and squeeze, inflicting an additional 3d10 piercing damage and stunning the target until the start of their next turn. If the spell attack roll resulted in a critical hit, the target has disadvantage on their saving throw." + AtHigherLevels + "When you cast this spell using a slot of 3rd level or higher, the piercing damage of the second phase of the spell increases 1d10 per slot above 2nd.",
};
SpellsList["hunter's pace"] = {
	name : "Hunter's Pace",
	regExpSearch : /^(?=.*hunter's)(?=.*pace).*$/i,
	classes : ["druid", "ranger"],
	source : ["CoFSA", 170],
	ritual : false,
	level : 1,
	school : "Trans",
	time : "1 bns",
	range : "Self",
    components : "V",
	duration : "Conc, 1 h",
	description : "Adv. on Str. checks to jump, climb, swim, move, saving throws for exhaustion, dif. ter. 0+5ft/SL spd",
	descriptionFull : "You let out a hunting cry, empowering your body with speed and tirelessness. While you maintain concentration on this spell, you gain advantage on Athletics checks to jump, climb, swim, or move. You also gain advantage on saving throws against exhaustion and on checks to mitigate the effects of difficult terrain." + AtHigherLevels + "When you cast this spell using a slot of 2nd level or higher, your movement speed also increases by 5 feet per slot level above 1st.",
};
SpellsList["overwhelming emotion"] = {
	name : "Overwhelming Emotion",
	regExpSearch : /^(?=.*overwhelming)(?=.*emotion).*$/i,
	classes : ["bard", "sorcerer", "wizard"],
	source : ["CoFSA", 172],
	ritual : false,
	level : 5,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M\u0192",
	compMaterial : "a gemstone worth at least 50 gp",
	duration : "Conc, 1 min",
	description : "Up to 3 crea save or consumed with emotion (Wrath, Sorrow, Joy) for duration, see book",
	descriptionFull : "You beguile the mind of up to three creatures that you can see, assailing them with an all-consuming emotion. Each creature must make a Wisdom saving throw. Choose one of the effects below when you cast the spell. A creature that fails their saving throw is subject to the effects for the duration. A creature that is immune to the charmed condition is immune to the effects of this spell." + "\n   " + toUni("Wrath") + ": The target must attempt to move closer to a hostile creature and try to damage them during their turn. If there are no hostile creatures present, the target will choose an ally instead." + "\n   " + toUni("Sorrow") + ": The target suffers disadvantage on Charisma and Wisdom saving throws." + "\n   " + toUni("Joy") + ": The target cries tears of joy, becoming incapable of speaking coherently or casting spells with verbal components.",
};
SpellsList["replenish"] = {
	name : "Replenish",
	regExpSearch : /^(?=.*replenish).*$/i,
	classes : ["bard", "druid", "ranger", "sorcerer"],
	source : ["CoFSA", 173],
	ritual : false,
	level : 2,
	school : "Evoc",
	time : "1 a",
	range : "Touch",
    components : "V,S",
	duration : "Instantaneous",
	description : "Target regains 2d6+1d6/SL temp HP, cured of poisoned condition. Temp. HP lost on short or long rest",
	descriptionFull : "When you cast this spell, you touch an allied creature that you can see. The target surges with vital force, gaining 2d6 temporary hit points. These temporary hit points are lost whenever the target finishes a short or long rest. The target is also cured of the poisoned condition." + AtHigherLevels + "When you cast this spell using a slot of 3rd level or higher, the temporary hit points gained increases by 1d6 per slot level above 2nd.",
};
SpellsList["resonance"] = {
	name : "Resonance",
	regExpSearch : /^(?=.*resonance).*$/i,
	classes : ["bard", "druid",],
	source : ["CoFSA", 173],
	ritual : false,
	level : 3,
	school : "Ench",
	time : "1 a",
	range : "30 ft",
	components : "V",
	duration : "Conc, 1 min",
	save : "Dex",
	description : "Creatures in 10ft cube make Dex save. On fail, sink into ground and restrained. Str save to escape",
	descriptionFull : "You sing to the inherent order within the ground around you. While you maintain concentration on this spell, you can use an action to disrupt that order. Choose a 10-foot cube within range. Creatures and objects within that square must make a Dexterity saving throw. If they fail, they sink into the ground as it softens and re-hardens, becoming restrained for as long as you maintain concentration. Each round, the target can make a Strength saving throw, ending the effect on a success. Until the spell ends you can repeat this process, choosing a different 10-foot cube each time.",
};
SpellsList["shattersong"] = {
	name : "Shattersong",
	regExpSearch : /^(?=.*shattersong).*$/i,
	classes : ["bard"],
	source : ["CoFSA", 175],
	ritual : false,
	level : 4,
	school : "Evoc",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Str",
	description : "Crea. and obj. in 10ft rd take 2d6 thnd dmg, Str save or prone. Increase to 30ft and 6d6 over 3 rnds. ",
	descriptionFull : "You sing a discordant song infused with magical power. When you cast this spell, the vibrations you cause begin to distort reality in a 10-foot radius centered on you. Creatures you choose and unattended objects within that area take 2d6 thunder damage, and damaged creatures must make a Strength saving throw. If they fail, they are knocked prone. As an action on each of your turns while maintaining concentration on this spell, you can strengthen your song, repeating the effect while increasing the affected radius by 10 feet and the thunder damage by 2d6 each time, and causing affected creatures you choose to make the Strength saving throw to avoid being knocked prone. The affected distance and damage cannot exceed an 30-foot radius or 6d6 thunder damage.",
};
SpellsList["shrill whistle"] = {
	name : "Shrill Whistle",
	regExpSearch : /^(?=.*shrill)(?=.*whistle).*$/i,
	classes : ["bard", "druid", "ranger"],
	source : ["CoFSA", 176],
	ritual : false,
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Con",
	description : "All creatures I choose make Con save. On fail, 1d8+1d8/SL thunder dmg and deafened until EONT.",
	descriptionFull : "You place your hand to your lips, blowing through them in a terrible note. All creatures of your choosing within range must make a Constitution saving throw. If they fail, they take 1d8 thunder damage and are deafened until the end of their next turn. This whistle is audible up to 500 feet away, even in adverse conditions." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the thunder damage increases by 1d8 per slot level above 1st.",
};
SpellsList["skewering vines"] = {
	name : "Skewering Vines",
	regExpSearch : /^(?=.*skewering)(?=.*vines).*$/i,
	classes : ["druid"],
	source : ["CoFSA", 176],
	ritual : false,
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "Self",
    components : "V,S",
	duration : "Conc, 1 min",
	description : "3d10+1d10/SL piercing dmg, ignore 3/4 cover, and target lifted 5ft into the air",
	descriptionFull : "When you cast this spell, a mass of vines coils forth from the ground around you. When you cast this spell, and as an action on each of your turns while it remains, you can make a ranged spell attack against a target you can see within 30 feet of you. This attack ignores half and three-quarters cover. If you hit, the target takes 3d10 piercing damage and is lifted 5 feet into the air until the end of their next turn. They can use half their movement during their turn to free themselves of the skewering vines, returning to the ground." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the piercing damage increases by 1d10 per slot level above 3rd.",
};
SpellsList["skystrike"] = {
	name : "Skystrike",
	regExpSearch : /^(?=.*skystrike).*$/i,
	classes : ["cleric, druid, paladin, ranger, sorcerer, wizard"],
	source : ["CoFSA", 176],
	ritual : false,
	level : 2,
	school : "Evoc",
	time : "1 rea",
	range : "15 ft",
    components : "V,S",
	duration : "Instantaneous",
	description : "When falling, point to location. Crea. takes fall dmg. as lightning dmg. I amstunned. Higher SL no stun",
	descriptionFull : "When you cast this spell, choose a point within range. You teleport to that location and instantly crash to the ground directly beneath that point, accompanied by a flash of lightning. You take no falling damage, but if you land on a creature or a space within 5 feet of a creature, it takes lightning damage equal to the amount of falling damage you would have taken. If you landed on a creature, you immediately move to the nearest open space. If you fell 30 feet or more, you are stunned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you are not stunned when falling.",
};
SpellsList["slime sphere"] = {
	name : "Slime Sphere",
	regExpSearch : /^(?=.*slime)(?=.*sphere).*$/i,
    classes : ["sorcerer, wizard"],
    source : ["CoFSA", 177],
    level : 4,
    school : "Conj",
    time : "1 a",
    range : "60 ft",
    components : "V,S",
    duration : "Conc, 1 min",
    save : "Dex",
    description : "10-ft rad all crea save or restrained; Str save each rnd; on fail 2d8+1d8/SL Acid; save halves; see book",
    descriptionFull : "You conjure up a sphere of adhesive slime with a 10-foot radius at a point you can see within range. The sphere remains for the spell's duration." + "\n   " + "Any creature in the sphere's space must make a Dexterity saving throw. On a successful save, a creature is ejected from that space to the nearest unoccupied space of the creature's choice outside the sphere." + "\n   " + "At the start of each of their turns, a restrained creature can use a bonus action make a Strength saving throw. If they fail, they remain restrained within the sphere and take 2d8 acid damage. If they succeed, they exit the sphere at the nearest unoccupied location and take half as much damage. Any creature that is forcibly pushed into the sphere, or enters it voluntarily, automatically becomes restrained." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the acid damage increases by 1d8 per slot level above 4th."
};
SpellsList["storm's eye"] = {
	name : "Storm's Eye",
	regExpSearch : /^(?=.*storm's)(?=.*eye).*$/i,
	classes : ["cleric, druid, paladin, ranger"],
	source : ["CoFSA", 176],
	ritual : false,
	level : 5,
	school : "Div",
	time : "1 a",
	range : "300 ft",
    components : "V,S",
	duration : "Conc, 1 min",
	description : "When falling, point to location. Crea. takes fall dmg. as lightning dmg. I amstunned. Higher SL no stun",
	descriptionFull : "When you cast this spell, choose a point within range. You teleport to that location and instantly crash to the ground directly beneath that point, accompanied by a flash of lightning. You take no falling damage, but if you land on a creature or a space within 5 feet of a creature, it takes lightning damage equal to the amount of falling damage you would have taken. If you landed on a creature, you immediately move to the nearest open space. If you fell 30 feet or more, you are stunned until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you are not stunned when falling.",
};
SpellsList["summon slime"] = {
    name : "Summon Slime",
    classes : ["warlock"],
    source : ["CoFSA", 178],
    ritual : false,
    level : 5,
    school : "Conj",
    time : "1 a",
    range : "30 ft",
    components : "V,S,M",
    compMaterial : "A vial of acid",
    duration : "Conc, 1 h",
    description : "Summon 4CR of oozes that obey your verbal commands",
    descriptionFull : "You summon ooze creatures that appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears." + "\n " + "\u2022 One ooze of challenge rating 4 or lower" + "\n " + "\u2022 Two oozes of challenge rating 2 or lower" + "\n " + "\u2022 Four oozes of challenge rating 1 or lower" + "\n  " + "The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which have their own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures' statistics."
};
SpellsList["wall of ooze"] = {
    name : "Wall of Ooze",
    classes : ["warlock"],
    source : ["CoFSA", 180],
    level : 5,
    school : "Conj",
    time : "1 a",
    range : "120 ft",
    components : "V,S",
    duration : "Conc, 1 h",
    save : "Dex",
    description : "60\u00D75\u00D715ft (l\u00D7w\u00D7h) or 15-ft cube all 4d8+1d8/SL Acid dmg; save halves; 1/2 move; see book",
    descriptionFull : "You summon a wall of colorful ooze at an unoccupied space within range. The wall appears on a solid surface within range and lasts for the duration. You can choose to make the wall up to 60 feet long, 15 feet high, and 5 feet thick, or have it appear and enclose a 15-foot cube while being up to 5 feet thick. The wall heavily obscures vision through it, but is slightly transparent." + "\n   " + "The wall of ooze has AC 5, immunity to poison and acid damage, and has 120 hit points." + "\n   " + "When the wall appears, each creature within the area must make a Strength saving throw to break free from the thick slime, exiting into the nearest unoccupied space if they succeed. Creatures that fail, or creatures that end their turn within the wall, take 4d8 acid damage. Whenever a creature strikes the wall with a melee attack or passes through the wall for the first time during a turn, the creature takes 2d8 acid damage." + "\n   " + "Creatures and objects can pass through the wall, but if they do, their movement speed is halved until the start of their next turn. Ranged attacks that would pass through the wall automatically miss and damage the wall instead." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the acid damage of each phase increases by 1d8 and the wall gains 20 additional maximum hit points per slot level above 5th."
};
SpellsList["windblade"] = {
    name : "Windblade",
    classes : ["druid, ranger, sorcerer, wizard"],
    source : ["CoFSA", 180],
    level : 4,
    school : "Conj",
    time : "1 a",
    range : "30 ft",
    components : "V,S",
    duration : "Instantaneous",
    save : "Dex",
    description : "30 ft cone. Dex save. On fail, 8d8+1d8/SL slashing. Ignores resistance of unattended objects",
    descriptionFull : "With a sweeping gesture you unleash an invisible scythe of wind in a 30-foot cone. Creatures within the area must make a Dexterity saving throw. If they fail, they take 8d8 slashing damage. This damage ignores the resistances of unattended objects, cutting cleanly through trees and walls." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the slashing damage increases by 1d8 per slot level above 5th."
};
//FEATS
FeatsList["mark of the gelatinous ones"] = {
    name : "Mark of the Gelatinous Ones",
    source : ["CoFSA", 128],
    prerequisite : "Being a Gelatinous Convocation warlock",
    prereqeval : "(/gelatinous convocation/).test(classes.known.warlock.subclass) && classes.known.warlock.level >= 1",
    description : "As an action, I can coat an object in slime that can glue the object to the next object it touches. The glue can be broken by a Str check; the DC is equal to my Cha score. Also, I can cast enlarge/reduce once per short rest",
    spellcastingBonus : {
                name : "Mark of the Gelatinous Ones",
                spells : ["enlarge/reduce"],
                selection : ["enlarge/reduce"],
                oncesr : true
            },
    action : ["action", " (glue)"],
    usages : 1,
    recovery : "short rest"
};