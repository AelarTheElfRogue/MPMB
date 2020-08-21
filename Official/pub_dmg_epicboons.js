var iFileName = "epicboons.js";
RequiredSheetVersion(13);
FeatsList["epic boon"] = {
	name: "Epic Boon",
	source: [["D", 232]],
	descriptionFull : "",
	description : "",
    choices : ["Boon of Combat Prowess","Boon of Dimensional Travel","Boon of Fate","Boon of Fortitude","Boon of High Magic","Boon of Immortality","Boon of Invincibility","Boon of Irresistible Offense","Boon of Luck","Boon of Magic Resistance","Boon of Peerless Aim","Boon of Perfect Health","Boon of Planar Travel","Boon of Quick Casting","Boon of Recovery","Boon of Resilience","Boon of Skill Proficiency","Boon of Speed","Boon of Spell Mastery","Boon of Spell Recall","Boon of the Fire Soul","Boon of the Night Spirit","Boon of the Stormborn","Boon of the Unfettered","Boon of Truesight","Boon of Undetectibility"],
    "boon of combat prowess": {
        description: "When I miss with a melee weapon attack, I can choose to hit instead. Once I use this boon, I can't use it again until I finish a short rest.",
        limfeaname : "Combat Prowess",
        usages : 1,
        recovery : "short rest"
    },
    "boon of dimensional travel": {
        description: "As an action, I can cast the misty step spell, without using a spell slot or any components. Once I do so, I can't use this boon again until I finish a short rest.",
        limfeaname : "Misty Step",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Dimensional Travel",
            spells : ["misty step"],
            selection : ["misty step"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "misty step" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of Dimensional Travel, I can cast Misty Step without a components."
            }
        }
    },
    "boon of fate": {
        description: "When another creature that I can see within 60 feet of me makes an ability check, an attack roll, or a saving throw, I can roll a d10 and apply the result as a bonus or penalty to the roll. Once I use this boon, I can't use it again until I finish a short rest.",
        limfeaname : "Boon of Fate",
        usages : 1,
        recovery : "short rest",
        action : [["action",""]]
    },
    "boon of fortitude": {
        description: "My hit point maximum increases by 40.",
        calcChanges : {
            hp : function (totalHD) { return [40]; },
        },
    },
    "boon of high magic": {
        description: "I gain one 9th-level spell slot, provided I already have one.",
        addMod : { type : "", field : "P6.SSfront.SpellSlots.CheckboxesSet.lvl9", mod : 1, text: "I gain 1 additional 9th level spell slot" },
    },
    "boon of immortality": {
        description: "I stop aging. I am immune to any effect that would age me, and I can't die from old age.",
        savetxt : {
            immune : ["magical aging effects"],
        },
    },
    "boon of invincibility": {
        description: "When I take damage from any source, I can reduce that damage to 0. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"

    },
    "boon of irresistible offense": {
        description: "I can bypass the damage resistances of any creature.",
    },
    "boon of luck": {
        description: "I can add a dlO roll to any ability check, attack roll, or saving throw I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"
    },
    "boon of magic resistance": { 
        description: "I have advantage on saving throws against spells and other magical effects.",
        savetxt : {
            adv_vs : ["magic"]
        },
    },
    "boon of peerless aim": {
        description: "I can give myself a +20 bonus to a ranged attack roll I make. Once I use this boon, I can't use it again until I finish a short rest.",
        usages : 1,
        recovery : "short rest"
    },
    "boon of perfect health": {
        description: "I am immune to all diseases and poisons, and I have advantage on Constitution saving throws.",
        savetxt : { 
            immune : ["disease","poison"] 
        },
        eval : function () {
            SetProf("advantage", true, ["Constitution", true], "Boon of Perfect Health");
        },
        removeeval : function () {
            SetProf("advantage", false, ["Constitution", true], "Boon of Perfect Health");
        }
    },
    "boon of planar travel": {
        description: "Once per short rest, as an action I can cast the plane shift spell (no spell slot or components required), targeting my only, and travel to or from a single plane of existance chosen when I receive this boon.",
        limfeaname : "Plane Shift",
        usages : 1,
        recovery : "short rest",
        spellcastingBonus : {
            name : "Boon of Planar Travel",
            spells : ["plane shift"],
            selection : ["plane shift"],
            firstCol : 'oncesr'
        },
        spellChanges : {
            "plane shift" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of Planar Travel, I can cast PLane Shift without a components."
            }
        }
    },
    "boon of quick casting": {
        description: "I choose one of my spells of 1st through 3rd level that has a casting time of 1 action. That spell's casting time is now 1 bonus action for me.",
    },
    "boon of recovery": {
        description: "I can use a bonus action to regain a number of hit points equal to half my hit point maximum. Once I use this boon, I can't use it again until I finish a long rest.",
        usages : 1,
        recovery : "long rest",
        action : [["bonus action"," (recover half HP)"]]
    },
    "boon of resilience": {
        description: "I have resistance to bludgeoning/piercing/slashing damage from nonmagical weapons",
        dmgres : [["Bludgeoning", "Bludg. (nonmagical)"], ["Piercing", "Pierc. (nonmagical)"], ["Slashing", "Slash. (nonmagical)"]]
    },
    "boon of skill proficiency": {
        description: "",
        addMod : { type : "skill", field : "All", mod : "Prof", text : "I gain proficiency in all skills." },
    },
    "boon of speed": {
        description: "My walking speed increases by 30 feet. In addition, I can use a bonus action to take the Dash or Disengage action. Once I do so, I can't do so again until I finish a short rest.",
        speed : { walk : {spd : "+30", enc : "+30" } },
        action : [["bonus action", " (dash/disengage)"]],
        usages : 1,
        recovery : "short rest"
    },
    "boon of spell mastery": {
        description: "I choose one 1st-level sorcerer, warlock, or wizard spell that I can cast. I can now cast that spell at its lowest level without expending a spell slot.",
    },
    "boon of spell recall": {
        description: "I can cast any spell I know or have prepared without expending a spell slot. Once I do so, I can't use this boon again until I finish a long rest.",
        usages : 1,
        recovery : "long rest",
    },
    "boon of the fire soul": {
        description: "I have immunity to fire damage. I can also cast burning hands (save DC 15) at will, without using a spell slot or any components.",
        savetxt : {
            immune : ["fire"],
        },
        spellcastingBonus : {
            name : "Boon of the Fire Soul",
            spells : ["burning hands"],
            selection : ["burning hands"],
            firstCol : 'atwill'
        },
        spellChanges : {
            "burning hands" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of the Fire Soul, I can cast Burning Hands without a components."
            }
        }
    },
    "boon of the night spirit": {
        description: "While completely in an area of dim light or darkness, I can become invisible as an action. I remain invisible until I take an action or a reaction.",
        action : [["action"," (become invisible)"]]
    },
    "boon of the stormborn": {
        description: "I have immunity to lightning and thunder damage. I can also cast thunderwave (save DC 15) at will, without using a spell slot or any components.",
        savetxt : {
            immune : ["thunder","lightning"],
        },
        spellcastingBonus : {
            name : "Boon of the Stormborn",
            spells : ["thunderwave"],
            selection : ["thunderwave"],
            firstCol : 'atwill'
        },
        spellChanges : {
            "thunderwave" : {
                components : "",
                compMaterial : "",
                changes : "With the Boon of the Stormborn, I can cast Thunderwave without a components."
            }
        }
    },
    "boon of the unfettered": {
        description: "I have advantage on ability checks made to resist being grappled. In addition, I can use an action to automatically escape a grapple or free myself of restraints of any kind.",
        savetxt : {
            adv_vs : ["resisting grapple"]
        },
        action : [["action"," (escape grapple)"]]
    },
    "boon of truesight": { 
        description: "I have truesight out to a range of 60 feet.",
        vision : [["Truesight", 60]],
    },
    "boon of undetectibility": {
        description: "I gain a +10 bonus to Dexterity (Stealth) checks, and I can't be detected or targeted by divination magic, including scrying sensors .",
        addMod : { type : "skill", field : "Stealth", mod : "10", text : "I gain a +10 bonus to Stealth checks" },
    },
}