const alchemicalSymbols = {
    "Silver": "☽",
    "Mercury": "☿",
    "Copper": "♀",
    "Gold": "☉",
    "Iron": "♂",
    "Tin": "♃",
    "Lead": "♄",
    "Sulfur": "🜍",
    "Air": "🜁",
    "Heat": "🜂",
    "Fire": "🜂",
    "Water": "🜄",
    "Salt": "🜔",
    "Earth": "🜃"
};

const firstChallengeCode = "☉☿☽♂☉";
const secondChallengeCode = "Still flows the Icy Lethe, Veiling all ’neath Eldritch Rime.";
const thirdChallengeCode = 
    `\n' +
    '\n' +
    '\n' +
    '17 20   20 9 17 24 4 34   24 127 127 1 8 8   17 20   17 10 1   34 1 46 17   48 24 45 12 17 ,   
    4 34 9 45 17   17 10 1   2 20 23 38 45 12 24   2 20 23   17 10 1   17 10 1   2 20 45 23 17 10   1 12 1 38 1 34 17 ;   
    127 20 38 29 4 34 1   38 1 23 127 45 23 108 ,   127 20 9 9 1 23   24 34 131   8 45 12 2 45 23   20 48 1 23   10 1 24 17 ,   
    24 131 131   8 24 12 17   24 34 131   270 24 17 1 23 ,   4 34 2 45 8 1   5 20 12 131   17 10 23 20 45 5 10   24 4 23 '`;
const fourthChallengePartOne = 'through Hidden experiments, the Observing Philosophers \n' +
    'carefully recorded their findings in secret tomes. \n' +
    'rarely did alchemists Seek answers in mundane texts, \n' +
    'for the Universal substance eluded ordinary understanding.\n' +
    '\n' +
    'beyond the limits of ordinary Methods, the most Dedicated scholars \n' +
    'turned to alchemical science, where hidden truths awaited discovery. \n' +
    'Truly, the masters of old knew that one must strive tirelessly, \n' +
    'purifying Lead into something greater, refining both mind and matter. \n' +
    'until mastery was achieved, Knowledge alone was insufficient, \n' +
    'and only those who understood the deeper mysteries Would glimpse Immortality.\n' +
    '\n' +
    'secrets, carefully veiled Behind Cryptic inscriptions, \n' +
    'teach those with patience to decode their deeper meaning. \n' +
    'hermetic ideals demand perseverance, a willingness to question, \n' +
    'and an acceptance that the path to wisdom is rarely direct. \n' +
    'long nights spent in study and contemplation lead to illumination, \n' +
    'and oaths taken by true seekers bind them to their Noble quest. \n' +
    'Yet the philosopher’s stone remains Elusive, \n' +
    'and only through great sacrifice is the truth Revealed.\n' +
    '\n' +
    'elixirs, said to restore itality and even grant eternal youth, \n' +
    'were concocted by those who dared to challenge nature’s limits. \n' +
    'distillations, performed under the guidance of celestial alignments, \n' +
    'promised insight beyond mortal comprehension. \n' +
    'Gold, though treasured by the common man, held greater meaning \n' +
    'to those who understood the principle of transmutation. \n' +
    'Joining knowledge of the material and the divine, \n' +
    'true alchemists saw wealth not in metal, but in enlightenment.\n' +
    '\n' +
    'notable are those who pursued the Quintessence, \n' +
    'a substance believed to bind together the four classical elements. \n' +
    'wielders of this hidden force were said to shape reality itself, \n' +
    'while Xenon and other elusive Vapors symbolized the mysteries of the aether. \n' +
    'yields of failed experiments were many, \n' +
    'but each failure brought the dedicated scholar closer to true wisdom. \n' +
    'Zeal alone was not enough—patience, discipline, and intellect \n' +
    'were the true keys to unlocking the universe’s greatest secret.\n' +
    '\n' +
    'through the Forgotten knowledge of Ancient scholars, \n' +
    'keepers of wisdom have safeguarded the elusive \n' +
    'keys to transformation. only those who \n' +
    'fully commit to the pursuit of enlightenment \n' +
    'can grasp the final mysteries.\n';

const fourthChallengePartTwo = 
    'DNIS PNYYUR DNIS DNIS GLIXUR \n' +
    'UHRJT BURPQRF PNYYUR MLRU HLR \n' +
    'MLRU UHRJT IUHS UHRJT GLIXUR\n' +
    'LRNC DNIS GLIXUR VHJUR DNIS\n' +
    'PNYYUR MLRU DNIS LRNC IUHS\n' +
    'UHRJT PNYYUR PNYYUR JLC BURPQRF\n';

const fourthChallengePartThree = 
    '☉ ♀ ☉ ☉ ☽ 🜃 ☿ ♀ 🜂 🜁 🜂 🜃 ♄ 🜃 ☽ ♂ ☉ ☽ 🜄 ☉ ♀ 🜂 ☉ ♂ ♄ 🜃 ♀ ♀ ♃ ☿\n' +
    '🜄 🜂 ♄ 🜂 🜁 🜂 🜄 ☿ 🜁 ☽ ♂ ☽ ♄ ♃ 🜄 ♄ ♀ ♂ ☉ 🜄 ♂ ☽ ♀ ♂ ♀ ♃ ♄ 🜄 ♃\n' +
    '🜂 ☿ 🜄 ♂ ♀ ♃ ♃ 🜄 ☉ ♂ ♃ 🜂 ♀ 🜂 🜃 🜁 ☉ 🜂 ♀ ♃ ♄ ☽ 🜂 ♂ ♄ ♂ ☉ 🜄 ☉\n' +
    '🜁 🜄 🜂 ☉ ♃ 🜂 🜂 ☿ 🜁 ☿ ♂ ♀ ♂ ♂ ♃ ☽ ☉ 🜂 ☉ ☽ ☿ ♀ 🜂 🜁 ♄ ♂ 🜃 ☉ ♂\n' +
    '☉ 🜂 🜁 ♃ 🜂 ☽ 🜄 ♀ 🜄 🜁 ♃ 🜂 🜂 ♂ 🜂 ♃ ☽ ☽ 🜂 ☉ 🜄 ☉ 🜁 ♀ 🜄 ♃ 🜄 ♂ ☉\n' +
    '☽ ♄ 🜃 ♀ 🜄 ♃ 🜁 ♃ 🜃 🜂 🜂 🜂 🜂 ♄ 🜂 🜄 🜃 ♀ 🜁 🜁 🜂 🜃 ☽ 🜁 ☿ 🜂 🜂 ♂ ☽\n' +
    '☉ ♄ 🜁 ♄ ☿ ♄ ☉ ☉ ☽ ♄ ♀ ☉ 🜄 ♄ 🜁 ♂ ☿ ☿ 🜄 ♃ ♀ ☿ 🜃 ♂ ☿ ♀ ☽ ♀ 🜃\n' +
    '☉ ☿ 🜁 🜂 ♂ ♀ 🜁 🜂 🜁 ☽ 🜂 ♀ ☉ 🜃 ♄ ♃ ♀ ☽ ☽ 🜄 ☉ ♃ 🜂 🜂 🜃 🜄 ♀ ☽ 🜄\n' +
    '🜃 🜂 ♀ ♀ ☽ 🜃 ☿ ♃ 🜄 🜃 🜃 ☉ ♃ 🜁 ♄ 🜁 🜂 🜁 🜄 🜁 ☽ ♃ 🜂 ♀ 🜃 ☿ ☿ 🜁 🜃\n' +
    '☿ ♀ ♀ ☉ ♄ 🜄 ♂ ☽ ☉ ♀ ☿ 🜃 ☿ ♄ ♄ 🜂 🜁 🜃 ☽ ♃ ☿ ♃ ♃ ♂ ♄ ☉ 🜂 ☉ 🜁\n' +
    '🜄 🜃 ☽ 🜄 ☿ ♀ ☿ 🜃 ☿ ☿ ♀ ☿ 🜁 ♀ ♄ ♄ 🜂 ♄ 🜃 ☽ ♂ ♀ ☿ ☽ ♃ ♂ ♄ ♄ 🜄\n' +
    '🜃 🜂 🜁 ♄ ♂ ☽ ♀ 🜃 🜁 🜂 ♄ ☿ ☽ ☽ 🜄 🜁 🜃 ☉ ☉ ♄ ♂ ☽ ♃ 🜄 ♃ 🜃 ☿ ♃ ☿\n' +
    '🜄 ♂ ♀ ♂ ♀ ♂ 🜄 ♀ ♂ 🜂 🜁 🜂 ♄ ☿ ☿ ☽ ♄ ♀ 🜄 ☽ ♂ 🜁 ♃ ☉ 🜄 🜁 🜂 ☉ ♃\n' +
    '♄ ♀ ♄ ♀ 🜃 ♂ ♄ 🜂 ♃ 🜄 ♄ ♀ ☽ ♀ ☽ 🜂 🜃 ♂ ♃ 🜂 ♄ 🜂 ♂ ♃ 🜃 ♂ ♄ ☽ ♀\n' +
    '🜄 ♄ ☽ ☉ 🜃 ☽ ☽ 🜂 ☽ ♀ 🜄 ☉ ♃ ♂ ♄ ♄ ☽ ♄ ☽ ♀ ♀ ♀ 🜄 ♃ 🜃 ♃ ♀ ♀ ♃\n' +
    '♂ ☽ 🜃 🜄 ☉ ♀ 🜄 🜄 🜄 ☽ ♂ 🜂 ♃ ☽ 🜃 ♂ ♂ ♀ ☉ ☿ ♂ ♂ ☉ ☽ ☿ ☉ 🜃 🜁 ♀\n' +
    '🜃 ♄ ♂ 🜂 ☽ ☿ 🜂 🜃 ☉ 🜂 ♄ 🜂 ☿ ♄ 🜃 🜃 ☉ 🜂 ♃ ☽ ☽ ♄ 🜂 ♄ 🜄 ☽ 🜂 ♂ ☿\n' +
    '♃ 🜃 ♀ 🜃 🜁 ☽ ☉ ♃ 🜁 ☽ ♄ 🜄 🜄 ☽ 🜃 ♃ ☽ ☉ 🜂 ♃ ☉ 🜁 ☿ 🜃 ☉ 🜃 ☉ 🜄 ☉\n' +
    '🜁 ♃ 🜁 ☉ ☽ ♄ 🜂 ♀ 🜂 ♃ ☽ ☽ ♃ ☽ ☽ 🜄 🜄 ♀ ☉ ♂ 🜃 ♂ ☉ 🜁 ☿ 🜂 🜃 ♀ ☉\n' +
    '♂ 🜁 ☽ 🜄 ☿ ♃ 🜁 ☉ 🜂 ☽ ♂ 🜄 ♂ ♃ ♄ ♄ ☉ ♀ 🜂 ♄ ☿ ♄ ♀ 🜄 ☿ ♄ ☉ 🜄 🜄\n' +
    '🜂 🜃 ☽ ☉ ☿ 🜂 ♂ ♃ ☿ ☉ ☿ ♄ ☉ ☿ 🜂 🜃 ♀ ☿ ♂ ♃ ♃ ♂ ☉ ♂ ☽ 🜃 🜃 ♂ ♄\n' +
    '☽ 🜁 ☽ 🜁 ☉ ☿ ♄ ♂ ☉ ♂ ☉ ♂ 🜄 ♂ 🜄 ☽ 🜂 ♀ ♂ ☉ ♂ 🜃 ♀ ♃ ☉ ♀ ♃ 🜁 ☿\n' +
    '🜄 ☉ 🜁 ♃ 🜁 ☽ ☿ ☉ ♂ 🜃 🜁 ☽ ☉ 🜃 ♀ ♃ ☉ ♄ ♀ ☿ ♀ 🜁 ♂ ♀ ♄ 🜁 ☽ ☉ ♃\n' +
    '♄ ☿ ☽ 🜄 ☿ ☿ ♄ ♃ ♀ ☿ ♄ 🜂 🜄 ☿ ☿ ♃ ♂ 🜁 ♀ ☽ ☉ ☽ 🜁 🜄 🜃 🜄 ☿ ♀ ☿\n' +
    '☉ ♂ ☽ ♄ 🜄 ♂ ♂ ☉ 🜂 ♃ ☽ ☉ ♄ ♀ 🜁 🜃 ♄ ♃ ☽ ♀ 🜂 ♂ ♃ ♃ 🜃 ☿ ☽ 🜃 ☉\n' +
    '🜄 ♃ ☿ 🜁 ♃ ☿ ☿ ☿ 🜃 ♄ ♃ 🜁 🜄 ♂ ♂ ♃ 🜃 ♄ 🜁 ♀ 🜄 ♃ ☽ ♄ ♂ ♂ 🜂 ☽ ☉\n' +
    '🜁 ♂ 🜂 🜂 🜂 🜁 🜃 🜂 ☿ ♀ 🜃 ♀ 🜃 ♀ ☽ ♃ ♀ ☿ ♄ ☉ 🜄 🜂 🜂 ♀ ☽ 🜂 🜂 ♃ 🜂\n' +
    '🜄 ♃ ☉ 🜁 ♀ 🜃 ☿ ☿ ♀ ♄ 🜃 ♂ 🜂 ☿ ♃ ☉ ♀ ☉ 🜄 ☽ 🜃 ♀ ♀ ♄ ♃ ♀ 🜂 ☉ ☉\n' +
    '☉ ☉ 🜂 ♂ 🜁 🜁 ♄ ☿ ♂ ☿ ☿ ☉ ☽ 🜃 ♀ ♄ ♃ ♀ ♀ 🜃 ♀ ♂ 🜁 ♂ 🜂 ♄ ☿ ☿ ♀\n' +
    '☿ 🜄 ♄ ♃ ♄ ☽ ♃ ♀ ♃ 🜃 🜂 🜄 🜂 ☽ ☿ ☉ ☿ 🜂 ☽ 🜂 ♃ ♂ 🜄 🜃 ☿ ♄ ♄ ☽ 🜂'

export { firstChallengeCode, secondChallengeCode, thirdChallengeCode, fourthChallengePartOne, fourthChallengePartTwo, fourthChallengePartThree, alchemicalSymbols}