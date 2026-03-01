// Extra questions for Worlds 6-8 (Chapters 7-9)
// Round 1: 5 questions per topic
var EXTRA_QUESTIONS = EXTRA_QUESTIONS || {};

// ============================================================
// WORLD 6 — Chapter 7: Ratios & Rates
// ============================================================
EXTRA_QUESTIONS[6] = [

  // ----------------------------------------------------------
  // Topic 0: Writing Ratios (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'A bag has 5 red marbles and 8 blue marbles. What is the ratio of red to blue?',
      choices: ["5 : 8", "8 : 5", "5 : 13", "8 : 13"],
      answer: "5 : 8",
      hints: [
        "A ratio compares two quantities in order.",
        "Red is mentioned first, blue second.",
        "Write the number of red marbles, then blue marbles."
      ],
      explanation: [
        "Red marbles = 5, blue marbles = 8.",
        "The ratio of red to blue is 5 : 8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'There are 9 cats and 4 dogs. Write the ratio of dogs to cats in the form <span class="math">a</span>. Enter just the first number <span class="math">a</span> of the ratio <span class="math">a : 9</span>.',
      answer: "4",
      hints: [
        "Dogs come first in this ratio.",
        "Count the dogs: there are 4.",
        "The ratio is 4 : 9, so the first number is 4."
      ],
      explanation: [
        "Dogs = 4, cats = 9.",
        "Ratio of dogs to cats = 4 : 9, so the first number is 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A recipe uses 3 cups of flour and 2 cups of sugar. What is the ratio of sugar to the total cups of ingredients?',
      choices: ["2 : 5", "3 : 5", "2 : 3", "3 : 2"],
      answer: "2 : 5",
      hints: [
        "Total cups = flour + sugar.",
        "Total = 3 + 2 = 5.",
        "Sugar to total = 2 : 5."
      ],
      explanation: [
        "Total ingredients = 3 + 2 = 5 cups.",
        "Ratio of sugar to total = 2 : 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'In a class of 30 students, 18 are girls. What is the ratio of boys to girls written as <span class="math">a : b</span>? Enter <span class="math">a</span> (the number for boys, after simplifying).',
      answer: "2",
      hints: [
        "Boys = 30 − 18 = 12.",
        "Ratio of boys to girls = 12 : 18.",
        "Simplify by dividing both by 6: 2 : 3."
      ],
      explanation: [
        "Boys = 30 − 18 = 12.",
        "12 : 18 simplifies to 2 : 3 (divide by GCD = 6).",
        "So a = 2."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A parking lot has 7 trucks and 13 cars. What is the ratio of trucks to cars?',
      choices: ["7 : 13", "13 : 7", "7 : 20", "13 : 20"],
      answer: "7 : 13",
      hints: [
        "Trucks are mentioned first.",
        "There are 7 trucks and 13 cars.",
        "Write trucks first, then cars."
      ],
      explanation: [
        "Trucks = 7, cars = 13.",
        "Ratio of trucks to cars = 7 : 13."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A fruit bowl has 6 apples, 4 bananas, and 10 grapes. What is the ratio of bananas to total fruit?',
      choices: ["1 : 5", "2 : 5", "4 : 20", "4 : 6"],
      answer: "1 : 5",
      hints: [
        "Total fruit = 6 + 4 + 10 = 20.",
        "Bananas to total = 4 : 20.",
        "Simplify by dividing both by 4: 1 : 5."
      ],
      explanation: [
        "Total = 6 + 4 + 10 = 20.",
        "4 : 20 simplifies to 1 : 5."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A shelf has 11 fiction books and 9 non-fiction books. What is the first number in the ratio of fiction to non-fiction?',
      answer: "11",
      hints: [
        "Fiction comes first in the ratio.",
        "There are 11 fiction books.",
        "The ratio is 11 : 9."
      ],
      explanation: [
        "Fiction = 11, non-fiction = 9.",
        "Ratio = 11 : 9, so the first number is 11."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A necklace uses 8 white beads for every 5 gold beads. Which ratio represents gold to white?',
      choices: ["5 : 8", "8 : 5", "5 : 13", "8 : 13"],
      answer: "5 : 8",
      hints: [
        "The question asks for gold to white.",
        "Gold = 5, white = 8.",
        "Ratio of gold to white = 5 : 8."
      ],
      explanation: [
        "Gold beads = 5, white beads = 8.",
        "Gold to white = 5 : 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A zoo has 14 monkeys and 6 elephants. Write the ratio of elephants to monkeys in simplest form as <span class="math">a : b</span>. Enter <span class="math">a</span>.',
      answer: "3",
      hints: [
        "Elephants = 6, monkeys = 14.",
        "Ratio = 6 : 14. Find the GCD.",
        "GCD(6, 14) = 2 → 3 : 7."
      ],
      explanation: [
        "6 : 14 simplifies to 3 : 7 (divide by 2).",
        "So a = 3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A garden has 10 roses and 3 tulips. What is the ratio of roses to tulips?',
      choices: ["10 : 3", "3 : 10", "10 : 13", "3 : 13"],
      answer: "10 : 3",
      hints: [
        "Roses are mentioned first.",
        "There are 10 roses and 3 tulips.",
        "Write roses first, then tulips."
      ],
      explanation: [
        "Roses = 10, tulips = 3.",
        "Ratio of roses to tulips = 10 : 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A box has 15 green crayons, 9 yellow crayons, and 6 purple crayons. What is the ratio of yellow to total crayons in simplest form?',
      choices: ["3 : 10", "9 : 30", "1 : 3", "3 : 15"],
      answer: "3 : 10",
      hints: [
        "Total crayons = 15 + 9 + 6 = 30.",
        "Yellow to total = 9 : 30.",
        "Simplify by dividing both by 3: 3 : 10."
      ],
      explanation: [
        "Total = 15 + 9 + 6 = 30.",
        "9 : 30 simplifies to 3 : 10."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A basket has 8 oranges and 12 apples. What is the first number in the ratio of oranges to apples?',
      answer: "8",
      hints: [
        "Oranges are mentioned first.",
        "There are 8 oranges.",
        "The ratio is 8 : 12."
      ],
      explanation: [
        "Oranges = 8, apples = 12.",
        "Ratio of oranges to apples = 8 : 12, so the first number is 8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A classroom has 14 boys and 16 girls. What is the ratio of boys to total students in simplest form?',
      choices: ["7 : 15", "14 : 30", "7 : 8", "1 : 2"],
      answer: "7 : 15",
      hints: [
        "Total students = 14 + 16 = 30.",
        "Boys to total = 14 : 30.",
        "Simplify by dividing both by 2: 7 : 15."
      ],
      explanation: [
        "Total = 14 + 16 = 30.",
        "14 : 30 simplifies to 7 : 15."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A tank has 6 goldfish and 5 guppies. What is the ratio of guppies to goldfish?',
      choices: ["5 : 6", "6 : 5", "5 : 11", "6 : 11"],
      answer: "5 : 6",
      hints: [
        "Guppies are mentioned first.",
        "There are 5 guppies and 6 goldfish.",
        "Write guppies first, then goldfish."
      ],
      explanation: [
        "Guppies = 5, goldfish = 6.",
        "Ratio of guppies to goldfish = 5 : 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A trail mix has 10 almonds, 6 cashews, and 4 raisins. What is the first number in the ratio of cashews to total pieces in simplest form (<span class="math">a : b</span>)?',
      answer: "3",
      hints: [
        "Total = 10 + 6 + 4 = 20.",
        "Cashews to total = 6 : 20.",
        "Simplify by dividing both by 2: 3 : 10."
      ],
      explanation: [
        "Total = 10 + 6 + 4 = 20.",
        "6 : 20 simplifies to 3 : 10 (divide by 2).",
        "So the first number is 3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A pencil case has 9 pens and 4 erasers. What is the ratio of pens to erasers?',
      choices: ["9 : 4", "4 : 9", "9 : 13", "4 : 13"],
      answer: "9 : 4",
      hints: [
        "Pens are mentioned first.",
        "There are 9 pens and 4 erasers.",
        "Write pens first, then erasers."
      ],
      explanation: [
        "Pens = 9, erasers = 4.",
        "Ratio of pens to erasers = 9 : 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A team has 12 players wearing white and 8 wearing blue. What is the ratio of blue to total players in simplest form?',
      choices: ["2 : 5", "8 : 20", "4 : 10", "8 : 12"],
      answer: "2 : 5",
      hints: [
        "Total players = 12 + 8 = 20.",
        "Blue to total = 8 : 20.",
        "Simplify by dividing both by 4: 2 : 5."
      ],
      explanation: [
        "Total = 12 + 8 = 20.",
        "8 : 20 simplifies to 2 : 5."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'A toy box has 11 action figures and 7 dolls. What is the ratio of dolls to action figures?',
      choices: ["7 : 11", "11 : 7", "7 : 18", "11 : 18"],
      answer: "7 : 11",
      hints: [
        "Dolls are mentioned first.",
        "There are 7 dolls and 11 action figures.",
        "Write dolls first, then action figures."
      ],
      explanation: [
        "Dolls = 7, action figures = 11.",
        "Ratio of dolls to action figures = 7 : 11."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A jar has 20 red jelly beans, 15 green jelly beans, and 5 yellow jelly beans. Write the ratio of green to total jelly beans in simplest form as <span class="math">a : b</span>. Enter <span class="math">b</span>.',
      answer: "8",
      hints: [
        "Total = 20 + 15 + 5 = 40.",
        "Green to total = 15 : 40.",
        "Simplify by dividing both by 5: 3 : 8."
      ],
      explanation: [
        "Total = 20 + 15 + 5 = 40.",
        "15 : 40 simplifies to 3 : 8 (divide by 5).",
        "So b = 8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A bracelet has 16 silver beads and 12 gold beads. What is the ratio of gold to silver in simplest form?',
      choices: ["3 : 4", "4 : 3", "12 : 16", "16 : 12"],
      answer: "3 : 4",
      hints: [
        "Gold = 12, silver = 16.",
        "Ratio = 12 : 16.",
        "Simplify by dividing both by 4: 3 : 4."
      ],
      explanation: [
        "Gold to silver = 12 : 16.",
        "GCD(12, 16) = 4 → 3 : 4."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'A classroom has 22 desks and 15 chairs. Write the ratio of chairs to desks in simplest form as <span class="math">a : b</span>. Enter <span class="math">b</span>.',
      answer: "22",
      hints: [
        "Chairs = 15, desks = 22.",
        "Ratio = 15 : 22.",
        "GCD(15, 22) = 1, so it is already in simplest form. b = 22."
      ],
      explanation: [
        "Chairs = 15, desks = 22.",
        "Ratio = 15 : 22 (already simplest form).",
        "So b = 22."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A farm has 14 cows and 6 horses. What is the ratio of horses to cows?',
      choices: ["6 : 14", "14 : 6", "6 : 20", "14 : 20"],
      answer: "6 : 14",
      hints: [
        "Horses are mentioned first.",
        "There are 6 horses and 14 cows.",
        "Write horses first, then cows."
      ],
      explanation: [
        "Horses = 6, cows = 14.",
        "Ratio of horses to cows = 6 : 14."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A jar has 18 red candies, 12 blue candies, and 6 green candies. What is the ratio of green to total candies in simplest form?',
      choices: ["1 : 6", "6 : 36", "1 : 5", "6 : 30"],
      answer: "1 : 6",
      hints: [
        "Total candies = 18 + 12 + 6 = 36.",
        "Green to total = 6 : 36.",
        "Simplify by dividing both by 6: 1 : 6."
      ],
      explanation: [
        "Total = 18 + 12 + 6 = 36.",
        "6 : 36 simplifies to 1 : 6."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'A jar has 4 red buttons and 15 blue buttons. What is the ratio of red to blue?',
      choices: ["4 : 15", "15 : 4", "4 : 19", "15 : 19"],
      answer: "4 : 15",
      hints: [
        'A ratio compares two quantities in order.',
        'Red is mentioned first, blue second.',
        'There are 4 red and 15 blue buttons.'
      ],
      explanation: [
        'Red buttons = 4, blue buttons = 15.',
        'Ratio of red to blue = 4 : 15.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A bag has 24 green marbles and 16 yellow marbles. Write the ratio of yellow to green in simplest form as <span class="math">a : b</span>. Enter <span class="math">a</span>.',
      answer: "2",
      hints: [
        'Yellow = 16, green = 24.',
        'Ratio = 16 : 24. Find the GCD.',
        'GCD(16, 24) = 8 \u2192 2 : 3.'
      ],
      explanation: [
        '16 : 24 simplifies to 2 : 3 (divide by 8).',
        'So a = 2.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A bowl has 12 strawberries, 8 blueberries, and 20 grapes. What is the ratio of blueberries to total fruit in simplest form?',
      choices: ["1 : 5", "2 : 5", "8 : 40", "8 : 12"],
      answer: "1 : 5",
      hints: [
        'Total fruit = 12 + 8 + 20 = 40.',
        'Blueberries to total = 8 : 40.',
        'Simplify by dividing both by 8: 1 : 5.'
      ],
      explanation: [
        'Total = 12 + 8 + 20 = 40.',
        '8 : 40 simplifies to 1 : 5.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A parking lot has 9 trucks and 15 cars. What is the first number in the ratio of trucks to cars in simplest form?',
      answer: "3",
      hints: [
        'Trucks to cars = 9 : 15.',
        'Find the GCD of 9 and 15.',
        'GCD = 3. Divide both by 3: 3 : 5. The first number is 3.'
      ],
      explanation: [
        '9 : 15 simplified by GCD 3 gives 3 : 5.',
        'The first number is 3.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A recipe uses 4 cups of flour, 2 cups of sugar, and 6 cups of milk. What is the ratio of sugar to the total ingredients?',
      choices: ["1 : 6", "2 : 12", "1 : 4", "2 : 6"],
      answer: "1 : 6",
      hints: [
        'Total = 4 + 2 + 6 = 12.',
        'Sugar to total = 2 : 12.',
        'Simplify by dividing both by 2: 1 : 6.'
      ],
      explanation: [
        'Total cups = 4 + 2 + 6 = 12.',
        '2 : 12 simplifies to 1 : 6.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'In a garden there are 7 roses and 11 tulips. What is the ratio of tulips to roses?',
      choices: ["11 : 7", "7 : 11", "11 : 18", "7 : 18"],
      answer: "11 : 7",
      hints: [
        'The question asks tulips to roses, not roses to tulips.',
        'Count tulips first, then roses.',
        'Tulips : roses = 11 : 7.'
      ],
      explanation: [
        'Tulips = 11, roses = 7.',
        'Ratio of tulips to roses = 11 : 7.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A drawer has 13 forks and 17 spoons. What is the first number in the ratio of forks to spoons?',
      answer: "13",
      hints: [
        "Forks are mentioned first.",
        "There are 13 forks.",
        "The ratio is 13 : 17."
      ],
      explanation: [
        "Forks = 13, spoons = 17.",
        "Ratio of forks to spoons = 13 : 17, so the first number is 13."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A bag has 10 green, 14 blue, and 6 yellow marbles. What is the ratio of yellow to total marbles in simplest form?',
      choices: ["1 : 5", "6 : 30", "3 : 15", "2 : 10"],
      answer: "1 : 5",
      hints: [
        "Total marbles = 10 + 14 + 6 = 30.",
        "Yellow to total = 6 : 30.",
        "Simplify by dividing both by 6: 1 : 5."
      ],
      explanation: [
        "Total = 10 + 14 + 6 = 30.",
        "6 : 30 simplifies to 1 : 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A fish tank has 8 guppies and 5 tetras. What is the ratio of tetras to guppies?',
      choices: ["5 : 8", "8 : 5", "5 : 13", "8 : 13"],
      answer: "5 : 8",
      hints: [
        "Tetras are mentioned first.",
        "There are 5 tetras and 8 guppies.",
        "Write tetras first, then guppies."
      ],
      explanation: [
        "Tetras = 5, guppies = 8.",
        "Ratio of tetras to guppies = 5 : 8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A desk has 6 pencils and 11 crayons. What is the ratio of pencils to crayons?',
      choices: ["6 : 11", "11 : 6", "6 : 17", "11 : 17"],
      answer: "6 : 11",
      hints: [
        "Pencils are mentioned first.",
        "There are 6 pencils and 11 crayons.",
        "Write pencils first, then crayons."
      ],
      explanation: [
        "Pencils = 6, crayons = 11.",
        "Ratio of pencils to crayons = 6 : 11."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A box has 21 red buttons, 9 blue buttons, and 12 green buttons. Write the ratio of blue to total buttons in simplest form as <span class="math">a : b</span>. Enter <span class="math">b</span>.',
      answer: "14",
      hints: [
        "Total = 21 + 9 + 12 = 42.",
        "Blue to total = 9 : 42.",
        "Simplify by dividing both by 3: 3 : 14."
      ],
      explanation: [
        "Total = 21 + 9 + 12 = 42.",
        "9 : 42 simplifies to 3 : 14 (divide by 3).",
        "So b = 14."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A kitchen drawer has 18 forks and 12 knives. What is the ratio of knives to forks in simplest form?',
      choices: ["2 : 3", "3 : 2", "12 : 18", "4 : 6"],
      answer: "2 : 3",
      hints: [
        "Knives = 12, forks = 18.",
        "Ratio = 12 : 18. Find the GCD.",
        "GCD(12, 18) = 6 → 2 : 3."
      ],
      explanation: [
        "Knives to forks = 12 : 18.",
        "GCD(12, 18) = 6 → simplified 2 : 3."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A classroom has 14 boys and 16 girls. What is the ratio of boys to total students in simplest form?',
      choices: ["7 : 15", "14 : 30", "7 : 8", "14 : 16"],
      answer: "7 : 15",
      hints: [
        "Total students = 14 + 16 = 30.",
        "Boys to total = 14 : 30.",
        "Divide both by 2 to simplify: 7 : 15."
      ],
      explanation: [
        "Total students = 14 + 16 = <strong>30</strong>.",
        "14 : 30 simplifies to <strong>7 : 15</strong> (GCD = 2)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A sports team has 11 players on the field and 5 on the bench. Write the ratio of bench players to total players in simplest form as <span class="math">a : b</span>. Enter <span class="math">b</span>.',
      answer: "16",
      hints: [
        "Total players = 11 + 5 = 16.",
        "Bench to total = 5 : 16.",
        "GCD(5, 16) = 1, so it is already in simplest form."
      ],
      explanation: [
        "Total players = 11 + 5 = <strong>16</strong>.",
        "5 : 16 is already in simplest form, so b = <strong>16</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A nature trail has 9 oak trees and 21 pine trees. What is the ratio of oak trees to pine trees in simplest form?',
      choices: ["3 : 7", "9 : 21", "1 : 3", "7 : 3"],
      answer: "3 : 7",
      hints: [
        "Oak to pine = 9 : 21.",
        "Find the GCD of 9 and 21.",
        "GCD(9, 21) = 3, so 9 ÷ 3 = 3 and 21 ÷ 3 = 7."
      ],
      explanation: [
        "Oak to pine = 9 : 21.",
        "GCD(9, 21) = 3 → simplified to <strong>3 : 7</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 1: Simplifying Ratios (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio <span class="math">12 : 8</span>.',
      choices: ["3 : 2", "6 : 4", "4 : 3", "2 : 3"],
      answer: "3 : 2",
      hints: [
        "Find the GCD of 12 and 8.",
        "GCD(12, 8) = 4.",
        "Divide both by 4."
      ],
      explanation: [
        "GCD of 12 and 8 is 4.",
        "12 ÷ 4 = 3 and 8 ÷ 4 = 2.",
        "Simplified ratio = 3 : 2."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">20 : 15</span>. What is the first number in the simplified ratio?',
      answer: "4",
      hints: [
        "Find the GCD of 20 and 15.",
        "GCD(20, 15) = 5.",
        "Divide both by 5: 4 : 3."
      ],
      explanation: [
        "GCD of 20 and 15 is 5.",
        "20 ÷ 5 = 4 and 15 ÷ 5 = 3.",
        "The first number is 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">36 : 48</span>.',
      choices: ["3 : 4", "4 : 3", "9 : 12", "6 : 8"],
      answer: "3 : 4",
      hints: [
        "Find the GCD of 36 and 48.",
        "GCD(36, 48) = 12.",
        "Divide both by 12."
      ],
      explanation: [
        "GCD of 36 and 48 is 12.",
        "36 ÷ 12 = 3 and 48 ÷ 12 = 4.",
        "Simplified ratio = 3 : 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">45 : 30</span>. What is the second number in the simplified ratio?',
      answer: "2",
      hints: [
        "Find the GCD of 45 and 30.",
        "GCD(45, 30) = 15.",
        "Divide both by 15: 3 : 2."
      ],
      explanation: [
        "GCD of 45 and 30 is 15.",
        "45 ÷ 15 = 3 and 30 ÷ 15 = 2.",
        "The second number is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">56 : 42</span>.',
      choices: ["4 : 3", "8 : 6", "3 : 4", "28 : 21"],
      answer: "4 : 3",
      hints: [
        "Find the GCD of 56 and 42.",
        "GCD(56, 42) = 14.",
        "56 ÷ 14 = 4, 42 ÷ 14 = 3."
      ],
      explanation: [
        "GCD of 56 and 42 is 14.",
        "56 ÷ 14 = 4 and 42 ÷ 14 = 3.",
        "Simplified ratio = 4 : 3."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">18 : 27</span>. What is the second number in the simplified ratio?',
      answer: "3",
      hints: [
        "Find the GCD of 18 and 27.",
        "GCD(18, 27) = 9.",
        "Divide both by 9: 2 : 3."
      ],
      explanation: [
        "GCD of 18 and 27 is 9.",
        "18 ÷ 9 = 2 and 27 ÷ 9 = 3.",
        "The second number is 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">72 : 54</span>.',
      choices: ["4 : 3", "8 : 6", "3 : 4", "12 : 9"],
      answer: "4 : 3",
      hints: [
        "Find the GCD of 72 and 54.",
        "GCD(72, 54) = 18.",
        "72 ÷ 18 = 4, 54 ÷ 18 = 3."
      ],
      explanation: [
        "GCD of 72 and 54 is 18.",
        "72 ÷ 18 = 4 and 54 ÷ 18 = 3.",
        "Simplified ratio = 4 : 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">90 : 60</span>. What is the first number in the simplified ratio?',
      answer: "3",
      hints: [
        "Find the GCD of 90 and 60.",
        "GCD(90, 60) = 30.",
        "Divide both by 30: 3 : 2."
      ],
      explanation: [
        "GCD of 90 and 60 is 30.",
        "90 ÷ 30 = 3 and 60 ÷ 30 = 2.",
        "The first number is 3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio <span class="math">16 : 24</span>.',
      choices: ["2 : 3", "3 : 2", "4 : 6", "8 : 12"],
      answer: "2 : 3",
      hints: [
        "Find the GCD of 16 and 24.",
        "GCD(16, 24) = 8.",
        "Divide both by 8."
      ],
      explanation: [
        "GCD of 16 and 24 is 8.",
        "16 ÷ 8 = 2 and 24 ÷ 8 = 3.",
        "Simplified ratio = 2 : 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">42 : 28</span>. What is the second number in the simplified ratio?',
      answer: "2",
      hints: [
        "Find the GCD of 42 and 28.",
        "GCD(42, 28) = 14.",
        "Divide both by 14: 3 : 2."
      ],
      explanation: [
        "GCD of 42 and 28 is 14.",
        "42 ÷ 14 = 3 and 28 ÷ 14 = 2.",
        "The second number is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">63 : 84</span>.',
      choices: ["3 : 4", "7 : 12", "9 : 12", "4 : 3"],
      answer: "3 : 4",
      hints: [
        "Find the GCD of 63 and 84.",
        "GCD(63, 84) = 21.",
        "63 ÷ 21 = 3, 84 ÷ 21 = 4."
      ],
      explanation: [
        "GCD of 63 and 84 is 21.",
        "63 ÷ 21 = 3 and 84 ÷ 21 = 4.",
        "Simplified ratio = 3 : 4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">10 : 25</span>. What is the first number in the simplified ratio?',
      answer: "2",
      hints: [
        "Find the GCD of 10 and 25.",
        "GCD(10, 25) = 5.",
        "Divide both by 5: 2 : 5."
      ],
      explanation: [
        "GCD of 10 and 25 is 5.",
        "10 ÷ 5 = 2 and 25 ÷ 5 = 5.",
        "The first number is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">54 : 36</span>.',
      choices: ["3 : 2", "9 : 6", "2 : 3", "6 : 4"],
      answer: "3 : 2",
      hints: [
        "Find the GCD of 54 and 36.",
        "GCD(54, 36) = 18.",
        "54 ÷ 18 = 3, 36 ÷ 18 = 2."
      ],
      explanation: [
        "GCD of 54 and 36 is 18.",
        "54 ÷ 18 = 3 and 36 ÷ 18 = 2.",
        "Simplified ratio = 3 : 2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">48 : 64</span>. What is the second number in the simplified ratio?',
      answer: "4",
      hints: [
        "Find the GCD of 48 and 64.",
        "GCD(48, 64) = 16.",
        "Divide both by 16: 3 : 4."
      ],
      explanation: [
        "GCD of 48 and 64 is 16.",
        "48 ÷ 16 = 3 and 64 ÷ 16 = 4.",
        "The second number is 4."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio <span class="math">14 : 21</span>.',
      choices: ["2 : 3", "7 : 3", "3 : 2", "14 : 21"],
      answer: "2 : 3",
      hints: [
        "Find the GCD of 14 and 21.",
        "GCD(14, 21) = 7.",
        "Divide both by 7."
      ],
      explanation: [
        "GCD of 14 and 21 is 7.",
        "14 ÷ 7 = 2 and 21 ÷ 7 = 3.",
        "Simplified ratio = 2 : 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">60 : 84</span>. What is the first number in the simplified ratio?',
      answer: "5",
      hints: [
        "Find the GCD of 60 and 84.",
        "GCD(60, 84) = 12.",
        "Divide both by 12: 5 : 7."
      ],
      explanation: [
        "GCD of 60 and 84 is 12.",
        "60 ÷ 12 = 5 and 84 ÷ 12 = 7.",
        "The first number is 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">80 : 48</span>.',
      choices: ["5 : 3", "10 : 6", "3 : 5", "16 : 12"],
      answer: "5 : 3",
      hints: [
        "Find the GCD of 80 and 48.",
        "GCD(80, 48) = 16.",
        "80 ÷ 16 = 5, 48 ÷ 16 = 3."
      ],
      explanation: [
        "GCD of 80 and 48 is 16.",
        "80 ÷ 16 = 5 and 48 ÷ 16 = 3.",
        "Simplified ratio = 5 : 3."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">24 : 18</span>. What is the first number in the simplified ratio?',
      answer: "4",
      hints: [
        "Find the GCD of 24 and 18.",
        "GCD(24, 18) = 6.",
        "Divide both by 6: 4 : 3."
      ],
      explanation: [
        "GCD of 24 and 18 is 6.",
        "24 ÷ 6 = 4 and 18 ÷ 6 = 3.",
        "The first number is 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">96 : 72</span>.',
      choices: ["4 : 3", "8 : 6", "3 : 4", "12 : 9"],
      answer: "4 : 3",
      hints: [
        "Find the GCD of 96 and 72.",
        "GCD(96, 72) = 24.",
        "96 ÷ 24 = 4, 72 ÷ 24 = 3."
      ],
      explanation: [
        "GCD of 96 and 72 is 24.",
        "96 ÷ 24 = 4 and 72 ÷ 24 = 3.",
        "Simplified ratio = 4 : 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">70 : 42</span>. What is the second number in the simplified ratio?',
      answer: "3",
      hints: [
        "Find the GCD of 70 and 42.",
        "GCD(70, 42) = 14.",
        "Divide both by 14: 5 : 3."
      ],
      explanation: [
        "GCD of 70 and 42 is 14.",
        "70 ÷ 14 = 5 and 42 ÷ 14 = 3.",
        "The second number is 3."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio <span class="math">30 : 18</span>.',
      choices: ["5 : 3", "10 : 6", "3 : 5", "15 : 9"],
      answer: "5 : 3",
      hints: [
        "Find the GCD of 30 and 18.",
        "GCD(30, 18) = 6.",
        "Divide both by 6."
      ],
      explanation: [
        "GCD of 30 and 18 is 6.",
        "30 ÷ 6 = 5 and 18 ÷ 6 = 3.",
        "Simplified ratio = 5 : 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">84 : 56</span>. What is the first number in the simplified ratio?',
      answer: "3",
      hints: [
        "Find the GCD of 84 and 56.",
        "GCD(84, 56) = 28.",
        "Divide both by 28: 3 : 2."
      ],
      explanation: [
        "GCD of 84 and 56 is 28.",
        "84 ÷ 28 = 3 and 56 ÷ 28 = 2.",
        "The first number is 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">66 : 44</span>.',
      choices: ["3 : 2", "6 : 4", "2 : 3", "11 : 8"],
      answer: "3 : 2",
      hints: [
        "Find the GCD of 66 and 44.",
        "GCD(66, 44) = 22.",
        "66 ÷ 22 = 3, 44 ÷ 22 = 2."
      ],
      explanation: [
        "GCD of 66 and 44 is 22.",
        "66 ÷ 22 = 3 and 44 ÷ 22 = 2.",
        "Simplified ratio = 3 : 2."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio <span class="math">40 : 24</span>.',
      choices: ["5 : 3", "8 : 6", "3 : 5", "20 : 12"],
      answer: "5 : 3",
      hints: [
        'Find the GCD of 40 and 24.',
        'GCD(40, 24) = 8.',
        'Divide both by 8.'
      ],
      explanation: [
        'GCD of 40 and 24 is 8.',
        '40 \u00f7 8 = 5 and 24 \u00f7 8 = 3.',
        'Simplified ratio = 5 : 3.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">78 : 52</span>. What is the first number in the simplified ratio?',
      answer: "3",
      hints: [
        'Find the GCD of 78 and 52.',
        'GCD(78, 52) = 26.',
        'Divide both by 26: 3 : 2.'
      ],
      explanation: [
        'GCD of 78 and 52 is 26.',
        '78 \u00f7 26 = 3 and 52 \u00f7 26 = 2.',
        'The first number is 3.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">75 : 45</span>.',
      choices: ["5 : 3", "15 : 9", "3 : 5", "25 : 15"],
      answer: "5 : 3",
      hints: [
        'Find the GCD of 75 and 45.',
        'GCD(75, 45) = 15.',
        '75 \u00f7 15 = 5, 45 \u00f7 15 = 3.'
      ],
      explanation: [
        'GCD of 75 and 45 is 15.',
        '75 \u00f7 15 = 5 and 45 \u00f7 15 = 3.',
        'Simplified ratio = 5 : 3.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio 42 : 56.',
      choices: ["3 : 4", "6 : 8", "7 : 8", "42 : 56"],
      answer: "3 : 4",
      hints: [
        'Find the GCD of 42 and 56.',
        'GCD(42, 56) = 14.',
        '42 \u00f7 14 = 3, 56 \u00f7 14 = 4.'
      ],
      explanation: [
        'GCD of 42 and 56 is 14.',
        '42 \u00f7 14 = 3 and 56 \u00f7 14 = 4.',
        'Simplified ratio = 3 : 4.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify the ratio 84 : 60. What is the first number in the simplified ratio?',
      answer: "7",
      hints: [
        'Find the GCD of 84 and 60.',
        'GCD(84, 60) = 12.',
        '84 \u00f7 12 = 7, 60 \u00f7 12 = 5. The first number is 7.'
      ],
      explanation: [
        'GCD of 84 and 60 is 12.',
        '84 \u00f7 12 = 7 and 60 \u00f7 12 = 5.',
        'Simplified ratio = 7 : 5.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio 90 : 126.',
      choices: ["5 : 7", "10 : 14", "15 : 21", "9 : 14"],
      answer: "5 : 7",
      hints: [
        'Find the GCD of 90 and 126.',
        'GCD(90, 126) = 18.',
        '90 \u00f7 18 = 5, 126 \u00f7 18 = 7.'
      ],
      explanation: [
        'GCD of 90 and 126 is 18.',
        '90 \u00f7 18 = 5 and 126 \u00f7 18 = 7.',
        'Simplified ratio = 5 : 7.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">52 : 39</span>. What is the first number in the simplified ratio?',
      answer: "4",
      hints: [
        "Find the GCD of 52 and 39.",
        "GCD(52, 39) = 13.",
        "Divide both by 13: 4 : 3."
      ],
      explanation: [
        "GCD of 52 and 39 is 13.",
        "52 ÷ 13 = 4 and 39 ÷ 13 = 3.",
        "The first number is 4."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify the ratio <span class="math">28 : 42</span>.',
      choices: ["2 : 3", "4 : 6", "14 : 21", "7 : 6"],
      answer: "2 : 3",
      hints: [
        "Find the GCD of 28 and 42.",
        "GCD(28, 42) = 14.",
        "Divide both by 14."
      ],
      explanation: [
        "GCD of 28 and 42 is 14.",
        "28 ÷ 14 = 2 and 42 ÷ 14 = 3.",
        "Simplified ratio = 2 : 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">108 : 72</span>.',
      choices: ["3 : 2", "9 : 6", "6 : 4", "2 : 3"],
      answer: "3 : 2",
      hints: [
        "Find the GCD of 108 and 72.",
        "GCD(108, 72) = 36.",
        "108 ÷ 36 = 3, 72 ÷ 36 = 2."
      ],
      explanation: [
        "GCD of 108 and 72 is 36.",
        "108 ÷ 36 = 3 and 72 ÷ 36 = 2.",
        "Simplified ratio = 3 : 2."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">32 : 24</span>. What is the first number in the simplified ratio?',
      answer: "4",
      hints: [
        "Find the GCD of 32 and 24.",
        "GCD(32, 24) = 8.",
        "Divide both by 8: 4 : 3."
      ],
      explanation: [
        "GCD of 32 and 24 is 8.",
        "32 ÷ 8 = 4 and 24 ÷ 8 = 3.",
        "The first number is 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify the ratio <span class="math">120 : 84</span>.',
      choices: ["10 : 7", "20 : 14", "60 : 42", "6 : 7"],
      answer: "10 : 7",
      hints: [
        "Find the GCD of 120 and 84.",
        "GCD(120, 84) = 12.",
        "120 ÷ 12 = 10, 84 ÷ 12 = 7."
      ],
      explanation: [
        "GCD of 120 and 84 is 12.",
        "120 ÷ 12 = 10 and 84 ÷ 12 = 7.",
        "Simplified ratio = 10 : 7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">91 : 65</span>. What is the second number in the simplified ratio?',
      answer: "5",
      hints: [
        "Find the GCD of 91 and 65.",
        "GCD(91, 65) = 13.",
        "Divide both by 13: 7 : 5."
      ],
      explanation: [
        "GCD of 91 and 65 is 13.",
        "91 ÷ 13 = 7 and 65 ÷ 13 = 5.",
        "The second number is 5."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'If <span class="math">3 : 5 = x : 20</span>, find <span class="math">x</span>.',
      answer: "12",
      hints: [
        "Set up the proportion: 3/5 = x/20.",
        "Multiply both sides by 20: x = 3 × 20 ÷ 5.",
        "x = 60 ÷ 5 = 12."
      ],
      explanation: [
        "Since 5 × 4 = 20, multiply the first term by 4 as well.",
        "3 × 4 = <strong>12</strong>, so x = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which ratio is equivalent to <span class="math">7 : 4</span>?',
      choices: ["21 : 12", "14 : 10", "28 : 20", "7 : 8"],
      answer: "21 : 12",
      hints: [
        "Multiply both parts of 7 : 4 by the same number.",
        "7 × 3 = 21, 4 × 3 = 12.",
        "Check: 21 : 12 simplifies back to 7 : 4."
      ],
      explanation: [
        "7 × 3 = 21, 4 × 3 = 12.",
        "<strong>21 : 12</strong> is equivalent to 7 : 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Complete the equivalent ratio: <span class="math">6 : 11 = 18 : ?</span>. Enter the missing number.',
      answer: "33",
      hints: [
        "6 was multiplied by something to get 18.",
        "18 ÷ 6 = 3, so the multiplier is 3.",
        "11 × 3 = 33."
      ],
      explanation: [
        "The multiplier is 18 ÷ 6 = <strong>3</strong>.",
        "11 × 3 = <strong>33</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 2: Unit Rates (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'A car travels 180 miles in 3 hours. What is the unit rate?',
      choices: ["60 miles per hour", "90 miles per hour", "45 miles per hour", "180 miles per hour"],
      answer: "60 miles per hour",
      hints: [
        "Unit rate means per one hour.",
        "Divide miles by hours.",
        "180 ÷ 3 = 60."
      ],
      explanation: [
        "Unit rate = 180 ÷ 3 = 60.",
        "The car travels 60 miles per hour."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'You earn $56 for 8 hours of work. What is your hourly rate in dollars?',
      answer: "7",
      hints: [
        "Divide total pay by hours.",
        "56 ÷ 8 = ?",
        "That gives you the dollars per hour."
      ],
      explanation: [
        "Hourly rate = $56 ÷ 8 hours = $7 per hour.",
        "You earn $7 each hour."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A printer prints 150 pages in 5 minutes. What is the unit rate?',
      choices: ["30 pages per minute", "25 pages per minute", "50 pages per minute", "15 pages per minute"],
      answer: "30 pages per minute",
      hints: [
        "Unit rate = total pages ÷ minutes.",
        "150 ÷ 5 = ?",
        "That gives pages per one minute."
      ],
      explanation: [
        "Unit rate = 150 ÷ 5 = 30.",
        "The printer prints 30 pages per minute."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A runner covers 26 miles in 4 hours. What is the unit rate in miles per hour? Give your answer as a decimal.',
      answer: "6.5",
      hints: [
        "Divide 26 by 4.",
        "26 ÷ 4 = 6.5.",
        "The unit rate is 6.5 miles per hour."
      ],
      explanation: [
        "Unit rate = 26 ÷ 4 = 6.5.",
        "The runner averages 6.5 miles per hour."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A store sells 6 apples for $3. What is the cost per apple?',
      choices: ["$0.50", "$2.00", "$0.75", "$1.00"],
      answer: "$0.50",
      hints: [
        "Divide total cost by number of apples.",
        "$3 ÷ 6 = ?",
        "That gives the price for one apple."
      ],
      explanation: [
        "Cost per apple = $3 ÷ 6 = $0.50.",
        "Each apple costs 50 cents."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A factory produces 350 widgets in 7 hours. How many widgets are produced per hour?',
      answer: "50",
      hints: [
        "Divide total widgets by hours.",
        "350 ÷ 7 = ?",
        "350 ÷ 7 = 50."
      ],
      explanation: [
        "Unit rate = 350 ÷ 7 = 50.",
        "The factory produces 50 widgets per hour."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A student reads 200 pages in 8 days. What is the reading rate per day?',
      choices: ["25 pages per day", "20 pages per day", "30 pages per day", "40 pages per day"],
      answer: "25 pages per day",
      hints: [
        "Divide total pages by total days.",
        "200 ÷ 8 = ?",
        "200 ÷ 8 = 25."
      ],
      explanation: [
        "Unit rate = 200 ÷ 8 = 25.",
        "The student reads 25 pages per day."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A hose fills 45 gallons in 9 minutes. How many gallons per minute does it fill?',
      answer: "5",
      hints: [
        "Divide gallons by minutes.",
        "45 ÷ 9 = ?",
        "45 ÷ 9 = 5."
      ],
      explanation: [
        "Unit rate = 45 ÷ 9 = 5.",
        "The hose fills 5 gallons per minute."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A bakery makes 84 muffins in 7 batches. How many muffins per batch?',
      choices: ["12 muffins per batch", "14 muffins per batch", "10 muffins per batch", "11 muffins per batch"],
      answer: "12 muffins per batch",
      hints: [
        "Unit rate = total muffins ÷ batches.",
        "84 ÷ 7 = ?",
        "84 ÷ 7 = 12."
      ],
      explanation: [
        "Unit rate = 84 ÷ 7 = 12.",
        "The bakery makes 12 muffins per batch."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A truck delivers 270 packages in 6 trips. How many packages per trip?',
      answer: "45",
      hints: [
        "Divide total packages by trips.",
        "270 ÷ 6 = ?",
        "270 ÷ 6 = 45."
      ],
      explanation: [
        "Unit rate = 270 ÷ 6 = 45.",
        "The truck delivers 45 packages per trip."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A machine fills 108 bottles in 9 minutes. What is the fill rate per minute?',
      choices: ["12 bottles per minute", "9 bottles per minute", "15 bottles per minute", "10 bottles per minute"],
      answer: "12 bottles per minute",
      hints: [
        "Divide total bottles by minutes.",
        "108 ÷ 9 = ?",
        "108 ÷ 9 = 12."
      ],
      explanation: [
        "Unit rate = 108 ÷ 9 = 12.",
        "The machine fills 12 bottles per minute."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A cyclist rides 78 miles in 6 hours. What is the speed in miles per hour?',
      answer: "13",
      hints: [
        "Divide total miles by hours.",
        "78 ÷ 6 = ?",
        "78 ÷ 6 = 13."
      ],
      explanation: [
        "Unit rate = 78 ÷ 6 = 13.",
        "The cyclist rides 13 miles per hour."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A store sells 8 muffins for $4. What is the cost per muffin?',
      choices: ["$0.50", "$1.00", "$0.75", "$2.00"],
      answer: "$0.50",
      hints: [
        "Divide total cost by number of muffins.",
        "$4 ÷ 8 = ?",
        "$4 ÷ 8 = $0.50."
      ],
      explanation: [
        "Cost per muffin = $4 ÷ 8 = $0.50.",
        "Each muffin costs 50 cents."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A train covers 420 miles in 7 hours. How many miles does it travel per hour?',
      answer: "60",
      hints: [
        "Divide total miles by hours.",
        "420 ÷ 7 = ?",
        "420 ÷ 7 = 60."
      ],
      explanation: [
        "Unit rate = 420 ÷ 7 = 60.",
        "The train travels 60 miles per hour."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A farmer collects 132 eggs in 11 days. What is the rate per day?',
      choices: ["12 eggs per day", "11 eggs per day", "13 eggs per day", "10 eggs per day"],
      answer: "12 eggs per day",
      hints: [
        "Divide total eggs by days.",
        "132 ÷ 11 = ?",
        "132 ÷ 11 = 12."
      ],
      explanation: [
        "Unit rate = 132 ÷ 11 = 12.",
        "The farmer collects 12 eggs per day."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A pool fills with 96 gallons of water in 8 minutes. How many gallons per minute is that?',
      answer: "12",
      hints: [
        "Divide total gallons by minutes.",
        "96 ÷ 8 = ?",
        "96 ÷ 8 = 12."
      ],
      explanation: [
        "Unit rate = 96 ÷ 8 = 12.",
        "The pool fills at 12 gallons per minute."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A car uses 14 gallons of gas to travel 350 miles. What is the rate in miles per gallon?',
      choices: ["25 miles per gallon", "20 miles per gallon", "30 miles per gallon", "24 miles per gallon"],
      answer: "25 miles per gallon",
      hints: [
        "Divide total miles by gallons.",
        "350 ÷ 14 = ?",
        "350 ÷ 14 = 25."
      ],
      explanation: [
        "Unit rate = 350 ÷ 14 = 25.",
        "The car gets 25 miles per gallon."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A factory produces 336 boxes in 8 hours. How many boxes are produced per hour?',
      choices: ["42 boxes per hour", "40 boxes per hour", "48 boxes per hour", "36 boxes per hour"],
      answer: "42 boxes per hour",
      hints: [
        "Unit rate = total boxes ÷ hours.",
        "336 ÷ 8 = ?",
        "336 ÷ 8 = 42."
      ],
      explanation: [
        "Unit rate = 336 ÷ 8 = 42.",
        "The factory produces 42 boxes per hour."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A gardener plants 54 seeds in 6 rows. How many seeds per row?',
      answer: "9",
      hints: [
        "Divide total seeds by rows.",
        "54 ÷ 6 = ?",
        "54 ÷ 6 = 9."
      ],
      explanation: [
        "Unit rate = 54 ÷ 6 = 9.",
        "The gardener plants 9 seeds per row."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A car uses 15 gallons of gas to travel 375 miles. What is the rate in miles per gallon?',
      choices: ["25 miles per gallon", "20 miles per gallon", "30 miles per gallon", "15 miles per gallon"],
      answer: "25 miles per gallon",
      hints: [
        "Divide total miles by gallons.",
        "375 ÷ 15 = ?",
        "375 ÷ 15 = 25."
      ],
      explanation: [
        "Unit rate = 375 ÷ 15 = 25.",
        "The car gets 25 miles per gallon."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'A baker makes 168 cookies in 7 batches. How many cookies per batch?',
      answer: "24",
      hints: [
        "Divide total cookies by batches.",
        "168 ÷ 7 = ?",
        "168 ÷ 7 = 24."
      ],
      explanation: [
        "Unit rate = 168 ÷ 7 = 24.",
        "The baker makes 24 cookies per batch."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A driver travels 280 miles in 4 hours. What is the speed in miles per hour?',
      choices: ["70 miles per hour", "60 miles per hour", "80 miles per hour", "65 miles per hour"],
      answer: "70 miles per hour",
      hints: [
        "Divide total miles by hours.",
        "280 ÷ 4 = ?",
        "280 ÷ 4 = 70."
      ],
      explanation: [
        "Unit rate = 280 ÷ 4 = 70.",
        "The driver travels 70 miles per hour."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A factory uses 144 bolts to assemble 12 machines. How many bolts per machine?',
      answer: "12",
      hints: [
        "Divide total bolts by machines.",
        "144 ÷ 12 = ?",
        "144 ÷ 12 = 12."
      ],
      explanation: [
        "Unit rate = 144 ÷ 12 = 12.",
        "Each machine uses 12 bolts."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'A painter paints 72 square feet in 6 hours. What is the rate per hour?',
      choices: ["12 sq ft per hour", "10 sq ft per hour", "8 sq ft per hour", "14 sq ft per hour"],
      answer: "12 sq ft per hour",
      hints: [
        'Divide total area by hours.',
        '72 \u00f7 6 = ?',
        '72 \u00f7 6 = 12.'
      ],
      explanation: [
        'Unit rate = 72 \u00f7 6 = 12.',
        'The painter covers 12 square feet per hour.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A typist types 315 words in 9 minutes. How many words per minute is that?',
      answer: "35",
      hints: [
        'Divide total words by minutes.',
        '315 \u00f7 9 = ?',
        '315 \u00f7 9 = 35.'
      ],
      explanation: [
        'Unit rate = 315 \u00f7 9 = 35.',
        'The typist types 35 words per minute.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A store sells 12 bananas for $3.60. What is the cost per banana?',
      choices: ["$0.30", "$0.50", "$0.25", "$0.40"],
      answer: "$0.30",
      hints: [
        'Divide total cost by number of bananas.',
        '$3.60 \u00f7 12 = ?',
        '$3.60 \u00f7 12 = $0.30.'
      ],
      explanation: [
        'Cost per banana = $3.60 \u00f7 12 = $0.30.',
        'Each banana costs 30 cents.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A car travels 270 miles on 9 gallons of gas. How many miles per gallon does it get?',
      answer: "30",
      hints: [
        'Unit rate = total miles \u00f7 total gallons.',
        '270 \u00f7 9 = ?',
        '270 \u00f7 9 = 30.'
      ],
      explanation: [
        'Miles per gallon = 270 \u00f7 9 = 30.',
        'The car gets 30 miles per gallon.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A factory produces 560 widgets in 8 hours. What is the unit rate in widgets per hour?',
      choices: ["70 widgets/hr", "80 widgets/hr", "56 widgets/hr", "65 widgets/hr"],
      answer: "70 widgets/hr",
      hints: [
        'Unit rate = total widgets \u00f7 hours.',
        '560 \u00f7 8 = ?',
        '560 \u00f7 8 = 70.'
      ],
      explanation: [
        '560 widgets \u00f7 8 hours = 70 widgets per hour.',
        'The factory makes 70 widgets each hour.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'A 5-pack of notebooks costs $8.75. What is the cost per notebook?',
      choices: ["$1.75", "$1.50", "$2.00", "$1.85"],
      answer: "$1.75",
      hints: [
        'Cost per notebook = total cost \u00f7 number of notebooks.',
        '$8.75 \u00f7 5 = ?',
        '$8.75 \u00f7 5 = $1.75.'
      ],
      explanation: [
        'Cost per notebook = $8.75 \u00f7 5 = $1.75.',
        'Each notebook costs $1.75.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A warehouse ships 462 boxes in 6 days. How many boxes per day?',
      choices: ["77 boxes per day", "72 boxes per day", "80 boxes per day", "66 boxes per day"],
      answer: "77 boxes per day",
      hints: [
        "Unit rate = total boxes ÷ days.",
        "462 ÷ 6 = ?",
        "462 ÷ 6 = 77."
      ],
      explanation: [
        "Unit rate = 462 ÷ 6 = 77.",
        "The warehouse ships 77 boxes per day."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A machine fills 117 bottles in 9 minutes. How many bottles per minute?',
      answer: "13",
      hints: [
        "Divide total bottles by minutes.",
        "117 ÷ 9 = ?",
        "117 ÷ 9 = 13."
      ],
      explanation: [
        "Unit rate = 117 ÷ 9 = 13.",
        "The machine fills 13 bottles per minute."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A student types 176 words in 8 minutes. What is the typing rate per minute?',
      choices: ["22 words per minute", "20 words per minute", "24 words per minute", "18 words per minute"],
      answer: "22 words per minute",
      hints: [
        "Divide total words by minutes.",
        "176 ÷ 8 = ?",
        "176 ÷ 8 = 22."
      ],
      explanation: [
        "Unit rate = 176 ÷ 8 = 22.",
        "The student types 22 words per minute."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A machine makes 192 parts in 8 hours. What is the unit rate?',
      choices: ["24 parts per hour", "20 parts per hour", "28 parts per hour", "16 parts per hour"],
      answer: "24 parts per hour",
      hints: [
        "Unit rate = total parts ÷ hours.",
        "192 ÷ 8 = ?",
        "192 ÷ 8 = 24."
      ],
      explanation: [
        "Unit rate = 192 ÷ 8 = 24.",
        "The machine makes 24 parts per hour."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A store sells 10 bagels for $7.50. What is the cost per bagel in cents?',
      answer: "75",
      hints: [
        "Divide total cost by number of bagels.",
        "$7.50 ÷ 10 = ?",
        "$7.50 ÷ 10 = $0.75 = 75 cents."
      ],
      explanation: [
        "Cost per bagel = $7.50 ÷ 10 = $0.75.",
        "Each bagel costs 75 cents."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A biker rides 126 miles in 7 hours. What is the speed?',
      choices: ["18 miles per hour", "16 miles per hour", "20 miles per hour", "14 miles per hour"],
      answer: "18 miles per hour",
      hints: [
        "Speed = total miles ÷ hours.",
        "126 ÷ 7 = ?",
        "126 ÷ 7 = 18."
      ],
      explanation: [
        "Unit rate = 126 ÷ 7 = 18.",
        "The biker rides 18 miles per hour."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A car travels 364 miles in 7 hours. What is the speed in miles per hour?',
      answer: "52",
      hints: [
        "Unit rate = total miles ÷ hours.",
        "364 ÷ 7 = ?",
        "364 ÷ 7 = 52."
      ],
      explanation: [
        "Speed = 364 ÷ 7 = <strong>52</strong> miles per hour.",
        "The car travels 52 mph."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A baker uses 13.5 cups of flour to make 9 loaves of bread. How many cups of flour per loaf?',
      choices: ["1.5 cups per loaf", "1.25 cups per loaf", "2 cups per loaf", "1.75 cups per loaf"],
      answer: "1.5 cups per loaf",
      hints: [
        "Divide total cups by number of loaves.",
        "13.5 ÷ 9 = ?",
        "13.5 ÷ 9 = 1.5."
      ],
      explanation: [
        "Unit rate = 13.5 ÷ 9 = <strong>1.5</strong> cups per loaf.",
        "Each loaf needs 1.5 cups of flour."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A swimmer completes 44 laps in 8 sessions at the pool. How many laps per session? Enter as a decimal.',
      answer: "5.5",
      hints: [
        "Divide total laps by sessions.",
        "44 ÷ 8 = ?",
        "44 ÷ 8 = 5.5."
      ],
      explanation: [
        "Unit rate = 44 ÷ 8 = <strong>5.5</strong> laps per session.",
        "The swimmer averages 5.5 laps per session."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 3: Unit Conversions (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 1,
      question: 'How many inches are in 4 feet? <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "48",
      hints: [
        "1 foot = 12 inches.",
        "Multiply feet by 12.",
        "4 × 12 = 48."
      ],
      explanation: [
        "4 feet × 12 inches/foot = 48 inches.",
        "There are 48 inches in 4 feet."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many minutes are in 3 hours?',
      choices: ["180", "120", "90", "240"],
      answer: "180",
      hints: [
        "1 hour = 60 minutes.",
        "Multiply hours by 60.",
        "3 × 60 = 180."
      ],
      explanation: [
        "3 hours × 60 minutes/hour = 180 minutes.",
        "There are 180 minutes in 3 hours."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 7 feet to inches. <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "84",
      hints: [
        "Multiply feet by 12.",
        "7 × 12 = ?",
        "7 × 12 = 84."
      ],
      explanation: [
        "7 feet × 12 inches/foot = 84 inches.",
        "7 feet equals 84 inches."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many hours are in 300 minutes?',
      choices: ["5 hours", "4 hours", "6 hours", "3 hours"],
      answer: "5 hours",
      hints: [
        "Divide minutes by 60.",
        "300 ÷ 60 = ?",
        "300 ÷ 60 = 5."
      ],
      explanation: [
        "300 minutes ÷ 60 minutes/hour = 5 hours.",
        "300 minutes equals 5 hours."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 36 inches to feet. <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "3",
      hints: [
        "Divide inches by 12.",
        "36 ÷ 12 = ?",
        "36 ÷ 12 = 3."
      ],
      explanation: [
        "36 inches ÷ 12 inches/foot = 3 feet.",
        "36 inches equals 3 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many centimeters are in 9 meters? <span class="math">(1 \\text{ m} = 100 \\text{ cm})</span>',
      choices: ["900", "90", "9000", "9"],
      answer: "900",
      hints: [
        "1 meter = 100 centimeters.",
        "Multiply meters by 100.",
        "9 × 100 = 900."
      ],
      explanation: [
        "9 meters × 100 cm/m = 900 cm.",
        "9 meters equals 900 centimeters."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 2 yards to feet. <span class="math">(1 \\text{ yd} = 3 \\text{ ft})</span>',
      answer: "6",
      hints: [
        "1 yard = 3 feet.",
        "Multiply yards by 3.",
        "2 × 3 = 6."
      ],
      explanation: [
        "2 yards × 3 feet/yard = 6 feet.",
        "2 yards equals 6 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many feet are in 60 inches? <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      choices: ["5 feet", "6 feet", "4 feet", "7 feet"],
      answer: "5 feet",
      hints: [
        "Divide inches by 12.",
        "60 ÷ 12 = ?",
        "60 ÷ 12 = 5."
      ],
      explanation: [
        "60 inches ÷ 12 inches/foot = 5 feet.",
        "60 inches equals 5 feet."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 5 feet to inches. <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "60",
      hints: [
        "Multiply feet by 12.",
        "5 × 12 = ?",
        "5 × 12 = 60."
      ],
      explanation: [
        "5 feet × 12 inches/foot = 60 inches.",
        "5 feet equals 60 inches."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many meters are in 450 centimeters? <span class="math">(1 \\text{ m} = 100 \\text{ cm})</span>',
      choices: ["4.5 meters", "45 meters", "0.45 meters", "450 meters"],
      answer: "4.5 meters",
      hints: [
        "Divide centimeters by 100.",
        "450 ÷ 100 = ?",
        "450 ÷ 100 = 4.5."
      ],
      explanation: [
        "450 cm ÷ 100 cm/m = 4.5 m.",
        "450 centimeters equals 4.5 meters."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 6 yards to feet. <span class="math">(1 \\text{ yd} = 3 \\text{ ft})</span>',
      answer: "18",
      hints: [
        "1 yard = 3 feet.",
        "Multiply yards by 3.",
        "6 × 3 = 18."
      ],
      explanation: [
        "6 yards × 3 feet/yard = 18 feet.",
        "6 yards equals 18 feet."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many inches are in 3 feet? <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      choices: ["36", "24", "48", "30"],
      answer: "36",
      hints: [
        "1 foot = 12 inches.",
        "Multiply feet by 12.",
        "3 × 12 = 36."
      ],
      explanation: [
        "3 feet × 12 inches/foot = 36 inches.",
        "There are 36 inches in 3 feet."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 8 meters to centimeters. <span class="math">(1 \\text{ m} = 100 \\text{ cm})</span>',
      answer: "800",
      hints: [
        "1 meter = 100 centimeters.",
        "Multiply meters by 100.",
        "8 × 100 = 800."
      ],
      explanation: [
        "8 meters × 100 cm/m = 800 cm.",
        "8 meters equals 800 centimeters."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many feet are in 4 yards? <span class="math">(1 \\text{ yd} = 3 \\text{ ft})</span>',
      choices: ["12 feet", "9 feet", "15 feet", "6 feet"],
      answer: "12 feet",
      hints: [
        "1 yard = 3 feet.",
        "Multiply yards by 3.",
        "4 × 3 = 12."
      ],
      explanation: [
        "4 yards × 3 feet/yard = 12 feet.",
        "4 yards equals 12 feet."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 72 inches to feet. <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "6",
      hints: [
        "Divide inches by 12.",
        "72 ÷ 12 = ?",
        "72 ÷ 12 = 6."
      ],
      explanation: [
        "72 inches ÷ 12 inches/foot = 6 feet.",
        "72 inches equals 6 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many centimeters are in 3.5 meters? <span class="math">(1 \\text{ m} = 100 \\text{ cm})</span>',
      choices: ["350", "35", "3500", "305"],
      answer: "350",
      hints: [
        "1 meter = 100 centimeters.",
        "Multiply meters by 100.",
        "3.5 × 100 = 350."
      ],
      explanation: [
        "3.5 meters × 100 cm/m = 350 cm.",
        "3.5 meters equals 350 centimeters."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 10 feet to inches. <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "120",
      hints: [
        "Multiply feet by 12.",
        "10 × 12 = ?",
        "10 × 12 = 120."
      ],
      explanation: [
        "10 feet × 12 inches/foot = 120 inches.",
        "10 feet equals 120 inches."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 11 feet to inches. <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "132",
      hints: [
        "Multiply feet by 12.",
        "11 × 12 = ?",
        "11 × 12 = 132."
      ],
      explanation: [
        "11 feet × 12 inches/foot = 132 inches.",
        "11 feet equals 132 inches."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many feet are in 2 yards? <span class="math">(1 \\text{ yd} = 3 \\text{ ft})</span>',
      choices: ["6 feet", "5 feet", "8 feet", "9 feet"],
      answer: "6 feet",
      hints: [
        "1 yard = 3 feet.",
        "Multiply yards by 3.",
        "2 × 3 = 6."
      ],
      explanation: [
        "2 yards × 3 feet/yard = 6 feet.",
        "2 yards equals 6 feet."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 15 meters to centimeters. <span class="math">(1 \\text{ m} = 100 \\text{ cm})</span>',
      answer: "1500",
      hints: [
        "1 meter = 100 centimeters.",
        "Multiply meters by 100.",
        "15 × 100 = 1500."
      ],
      explanation: [
        "15 meters × 100 cm/m = 1500 cm.",
        "15 meters equals 1500 centimeters."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'How many inches are in 6 feet? <span class="math">(1 \text{ ft} = 12 \text{ in})</span>',
      choices: ["72", "60", "66", "84"],
      answer: "72",
      hints: [
        "1 foot = 12 inches.",
        "Multiply feet by 12.",
        "6 × 12 = 72."
      ],
      explanation: [
        "6 feet × 12 inches/foot = 72 inches.",
        "There are 72 inches in 6 feet."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 96 inches to feet. <span class="math">(1 \text{ ft} = 12 \text{ in})</span>',
      answer: "8",
      hints: [
        "Divide inches by 12.",
        "96 ÷ 12 = ?",
        "96 ÷ 12 = 8."
      ],
      explanation: [
        "96 inches ÷ 12 inches/foot = 8 feet.",
        "96 inches equals 8 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many centimeters are in 12 meters? <span class="math">(1 \text{ m} = 100 \text{ cm})</span>',
      choices: ["1200", "120", "12000", "1020"],
      answer: "1200",
      hints: [
        "1 meter = 100 centimeters.",
        "Multiply meters by 100.",
        "12 × 100 = 1200."
      ],
      explanation: [
        "12 meters × 100 cm/m = 1200 cm.",
        "12 meters equals 1200 centimeters."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 1,
      question: 'How many minutes are in 5 hours?',
      answer: "300",
      hints: [
        '1 hour = 60 minutes.',
        'Multiply hours by 60.',
        '5 \u00d7 60 = 300.'
      ],
      explanation: [
        '5 hours \u00d7 60 minutes/hour = 300 minutes.',
        'There are 300 minutes in 5 hours.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'How many inches are in 9 feet? <span class="math">(1 \\text{ ft} = 12 \\text{ in})</span>',
      choices: ["108", "96", "84", "120"],
      answer: "108",
      hints: [
        '1 foot = 12 inches.',
        'Multiply feet by 12.',
        '9 \u00d7 12 = 108.'
      ],
      explanation: [
        '9 feet \u00d7 12 inches/foot = 108 inches.',
        'There are 108 inches in 9 feet.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 7 meters to centimeters. <span class="math">(1 \\text{ m} = 100 \\text{ cm})</span>',
      answer: "700",
      hints: [
        '1 meter = 100 centimeters.',
        'Multiply meters by 100.',
        '7 \u00d7 100 = 700.'
      ],
      explanation: [
        '7 meters \u00d7 100 cm/m = 700 cm.',
        '7 meters equals 700 centimeters.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 4 feet to inches. (1 foot = 12 inches)',
      answer: "48",
      hints: [
        'Multiply feet by 12 to get inches.',
        '4 \u00d7 12 = ?',
        '4 \u00d7 12 = 48.'
      ],
      explanation: [
        '4 feet \u00d7 12 inches/foot = 48 inches.',
        '4 feet equals 48 inches.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'How many minutes are in 6.5 hours?',
      choices: ["390 minutes", "360 minutes", "380 minutes", "400 minutes"],
      answer: "390 minutes",
      hints: [
        '1 hour = 60 minutes.',
        '6.5 \u00d7 60 = ?',
        '6.5 \u00d7 60 = 390.'
      ],
      explanation: [
        '6.5 hours \u00d7 60 minutes/hour = 390 minutes.',
        '6.5 hours equals 390 minutes.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Convert 5 kilometers to meters. (1 km = 1,000 m)',
      choices: ["5,000 m", "500 m", "50,000 m", "50 m"],
      answer: "5,000 m",
      hints: [
        'Multiply kilometers by 1,000.',
        '5 \u00d7 1,000 = ?',
        '5 \u00d7 1,000 = 5,000.'
      ],
      explanation: [
        '5 km \u00d7 1,000 m/km = 5,000 m.',
        '5 kilometers equals 5,000 meters.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 13 feet to inches. <span class="math">(1 \text{ ft} = 12 \text{ in})</span>',
      answer: "156",
      hints: [
        "Multiply feet by 12.",
        "13 × 12 = ?",
        "13 × 12 = 156."
      ],
      explanation: [
        "13 feet × 12 inches/foot = 156 inches.",
        "13 feet equals 156 inches."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many minutes are in 7 hours?',
      choices: ["420", "360", "480", "350"],
      answer: "420",
      hints: [
        "1 hour = 60 minutes.",
        "Multiply hours by 60.",
        "7 × 60 = 420."
      ],
      explanation: [
        "7 hours × 60 minutes/hour = 420 minutes.",
        "There are 420 minutes in 7 hours."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many centimeters are in 14 meters? <span class="math">(1 \text{ m} = 100 \text{ cm})</span>',
      choices: ["1,400", "140", "14,000", "1,040"],
      answer: "1,400",
      hints: [
        "1 meter = 100 centimeters.",
        "Multiply meters by 100.",
        "14 × 100 = 1,400."
      ],
      explanation: [
        "14 meters × 100 cm/m = 1,400 cm.",
        "14 meters equals 1,400 centimeters."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 8 feet to inches. <span class="math">(1 \text{ ft} = 12 \text{ in})</span>',
      answer: "96",
      hints: [
        "Multiply feet by 12.",
        "8 × 12 = ?",
        "8 × 12 = 96."
      ],
      explanation: [
        "8 feet × 12 inches/foot = 96 inches.",
        "8 feet equals 96 inches."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many feet are in 7 yards? <span class="math">(1 \text{ yd} = 3 \text{ ft})</span>',
      choices: ["21 feet", "24 feet", "18 feet", "14 feet"],
      answer: "21 feet",
      hints: [
        "1 yard = 3 feet.",
        "Multiply yards by 3.",
        "7 × 3 = 21."
      ],
      explanation: [
        "7 yards × 3 feet/yard = 21 feet.",
        "7 yards equals 21 feet."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 240 minutes to hours.',
      answer: "4",
      hints: [
        "Divide minutes by 60.",
        "240 ÷ 60 = ?",
        "240 ÷ 60 = 4."
      ],
      explanation: [
        "240 minutes ÷ 60 minutes/hour = 4 hours.",
        "240 minutes equals 4 hours."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Brand A sells 12 oz of cereal for $3.60. Brand B sells 8 oz for $2.00. Which is the better buy?',
      choices: ["Brand B", "Brand A", "They cost the same", "Cannot be determined"],
      answer: "Brand B",
      hints: [
        "Find the unit price for each brand.",
        "Brand A: $3.60 ÷ 12 = $0.30 per oz. Brand B: $2.00 ÷ 8 = $0.25 per oz.",
        "The lower unit price is the better buy."
      ],
      explanation: [
        "Brand A: $3.60 ÷ 12 = <strong>$0.30/oz</strong>. Brand B: $2.00 ÷ 8 = <strong>$0.25/oz</strong>.",
        "Brand B is cheaper per ounce, so <strong>Brand B</strong> is the better buy."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A 15-oz bottle of shampoo costs $4.50 and a 20-oz bottle costs $5.60. What is the unit price of the cheaper option in cents per ounce?',
      answer: "28",
      hints: [
        "Find unit price for each: $4.50 ÷ 15 and $5.60 ÷ 20.",
        "15-oz: $0.30/oz = 30 cents. 20-oz: $0.28/oz = 28 cents.",
        "The 20-oz bottle is cheaper per ounce."
      ],
      explanation: [
        "15-oz: $4.50 ÷ 15 = $0.30/oz. 20-oz: $5.60 ÷ 20 = <strong>$0.28/oz</strong>.",
        "The cheaper unit price is <strong>28</strong> cents per ounce."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Store A sells 6 notebooks for $7.50. Store B sells 4 notebooks for $4.60. Which store has the better deal?',
      choices: ["Store B", "Store A", "Same price per notebook", "Cannot tell"],
      answer: "Store B",
      hints: [
        "Find the unit price at each store.",
        "Store A: $7.50 ÷ 6 = $1.25. Store B: $4.60 ÷ 4 = $1.15.",
        "Compare: $1.15 < $1.25."
      ],
      explanation: [
        "Store A: $7.50 ÷ 6 = $1.25 each. Store B: $4.60 ÷ 4 = <strong>$1.15</strong> each.",
        "<strong>Store B</strong> has the better deal."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 4: Comparing Rates (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Store A sells 5 oranges for $4. Store B sells 8 oranges for $6. Which store has the better price per orange?',
      choices: ["Store B", "Store A", "Same price", "Cannot tell"],
      answer: "Store B",
      hints: [
        "Find the unit price at each store.",
        "Store A: $4 ÷ 5 = $0.80. Store B: $6 ÷ 8 = $0.75.",
        "Compare the two unit prices."
      ],
      explanation: [
        "Store A: $4 ÷ 5 = $0.80 per orange.",
        "Store B: $6 ÷ 8 = $0.75 per orange.",
        "Store B is cheaper at $0.75 per orange."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Runner A covers 12 miles in 2 hours. Runner B covers 20 miles in 3 hours. Who is faster?',
      choices: ["Runner B", "Runner A", "Same speed", "Cannot tell"],
      answer: "Runner B",
      hints: [
        "Find each runner's unit rate (miles per hour).",
        "Runner A: 12 ÷ 2 = 6 mph. Runner B: 20 ÷ 3 ≈ 6.67 mph.",
        "Compare the two speeds."
      ],
      explanation: [
        "Runner A: 12 ÷ 2 = 6 mph.",
        "Runner B: 20 ÷ 3 ≈ 6.67 mph.",
        "Runner B is faster."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Brand X: 10 pencils for $3. Brand Y: 15 pencils for $5. What is the cost per pencil for Brand Y in cents?',
      answer: "33",
      hints: [
        "Divide the price by the number of pencils for Brand Y.",
        "$5 ÷ 15 ≈ $0.333...",
        "Round to the nearest cent: 33 cents."
      ],
      explanation: [
        "Brand Y: $5 ÷ 15 = $0.333...",
        "Rounded to the nearest cent, that is about 33 cents per pencil."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Painter A paints 3 walls in 6 hours. Painter B paints 4 walls in 10 hours. Who paints faster per hour?',
      choices: ["Painter A", "Painter B", "Same rate", "Cannot tell"],
      answer: "Painter A",
      hints: [
        "Find each painter's rate: walls per hour.",
        "A: 3 ÷ 6 = 0.5 walls/hr. B: 4 ÷ 10 = 0.4 walls/hr.",
        "0.5 > 0.4, so Painter A is faster."
      ],
      explanation: [
        "Painter A: 3 ÷ 6 = 0.5 walls per hour.",
        "Painter B: 4 ÷ 10 = 0.4 walls per hour.",
        "Painter A paints faster."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Pack A has 4 juice boxes for $3.20. Pack B has 6 juice boxes for $5.10. What is the price per juice box for Pack A in cents?',
      answer: "80",
      hints: [
        "Divide the price of Pack A by the number of boxes.",
        "$3.20 ÷ 4 = ?",
        "$3.20 ÷ 4 = $0.80 = 80 cents."
      ],
      explanation: [
        "Pack A: $3.20 ÷ 4 = $0.80 per box.",
        "That is 80 cents per juice box."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Farm A harvests 24 bushels in 4 days. Farm B harvests 35 bushels in 5 days. Which farm is more productive per day?',
      choices: ["Farm B", "Farm A", "Same rate", "Cannot tell"],
      answer: "Farm B",
      hints: [
        "Find each farm's daily rate.",
        "Farm A: 24 ÷ 4 = 6. Farm B: 35 ÷ 5 = 7.",
        "7 > 6, so Farm B is more productive."
      ],
      explanation: [
        "Farm A: 24 ÷ 4 = 6 bushels/day.",
        "Farm B: 35 ÷ 5 = 7 bushels/day.",
        "Farm B is more productive."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Shop X sells 3 notebooks for $6. Shop Y sells 5 notebooks for $9. What is the cost per notebook at Shop X in dollars?',
      answer: "2",
      hints: [
        "Divide the price by the number of notebooks.",
        "$6 ÷ 3 = ?",
        "$6 ÷ 3 = $2."
      ],
      explanation: [
        "Shop X: $6 ÷ 3 = $2 per notebook.",
        "Each notebook at Shop X costs $2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Typist A types 180 words in 4 minutes. Typist B types 250 words in 5 minutes. Who types faster?',
      choices: ["Typist B", "Typist A", "Same speed", "Cannot tell"],
      answer: "Typist B",
      hints: [
        "Find words per minute for each typist.",
        "A: 180 ÷ 4 = 45 wpm. B: 250 ÷ 5 = 50 wpm.",
        "50 > 45, so Typist B is faster."
      ],
      explanation: [
        "Typist A: 180 ÷ 4 = 45 words/min.",
        "Typist B: 250 ÷ 5 = 50 words/min.",
        "Typist B types faster."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Brand A sells 10 batteries for $8. Brand B sells 15 batteries for $12. Which brand costs less per battery?',
      choices: ["Same price per battery", "Brand A", "Brand B", "Cannot tell"],
      answer: "Same price per battery",
      hints: [
        "Find the unit price for each brand.",
        "Brand A: $8 ÷ 10 = $0.80. Brand B: $12 ÷ 15 = $0.80.",
        "They have the same unit price."
      ],
      explanation: [
        "Brand A: $8 ÷ 10 = $0.80 per battery.",
        "Brand B: $12 ÷ 15 = $0.80 per battery.",
        "Both brands cost the same per battery."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Truck A hauls 18 tons in 3 trips. Truck B hauls 28 tons in 4 trips. What is Truck B\'s rate in tons per trip?',
      answer: "7",
      hints: [
        "Divide total tons by trips for Truck B.",
        "28 ÷ 4 = ?",
        "28 ÷ 4 = 7."
      ],
      explanation: [
        "Truck B: 28 ÷ 4 = 7 tons per trip.",
        "Truck B hauls 7 tons per trip."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Swimmer A swims 16 laps in 8 minutes. Swimmer B swims 21 laps in 7 minutes. Who swims more laps per minute?',
      choices: ["Swimmer B", "Swimmer A", "Same rate", "Cannot tell"],
      answer: "Swimmer B",
      hints: [
        "Find each swimmer's rate.",
        "A: 16 ÷ 8 = 2 laps/min. B: 21 ÷ 7 = 3 laps/min.",
        "3 > 2, so Swimmer B is faster."
      ],
      explanation: [
        "Swimmer A: 16 ÷ 8 = 2 laps/min.",
        "Swimmer B: 21 ÷ 7 = 3 laps/min.",
        "Swimmer B swims more laps per minute."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Store A sells 4 pens for $6. Store B sells 7 pens for $10.50. Which store has the better price per pen?',
      choices: ["Same price per pen", "Store A", "Store B", "Cannot tell"],
      answer: "Same price per pen",
      hints: [
        "Find the unit price at each store.",
        "Store A: $6 ÷ 4 = $1.50. Store B: $10.50 ÷ 7 = $1.50.",
        "They have the same unit price."
      ],
      explanation: [
        "Store A: $6 ÷ 4 = $1.50 per pen.",
        "Store B: $10.50 ÷ 7 = $1.50 per pen.",
        "Both stores charge the same price per pen."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Baker A makes 36 cookies in 3 batches. Baker B makes 55 cookies in 5 batches. What is Baker A\'s rate in cookies per batch?',
      answer: "12",
      hints: [
        "Divide total cookies by batches for Baker A.",
        "36 ÷ 3 = ?",
        "36 ÷ 3 = 12."
      ],
      explanation: [
        "Baker A: 36 ÷ 3 = 12 cookies per batch.",
        "Baker A makes 12 cookies per batch."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Machine A produces 48 parts in 6 hours. Machine B produces 70 parts in 10 hours. Which machine is faster?',
      choices: ["Machine A", "Machine B", "Same rate", "Cannot tell"],
      answer: "Machine A",
      hints: [
        "Find each machine's rate.",
        "A: 48 ÷ 6 = 8 parts/hr. B: 70 ÷ 10 = 7 parts/hr.",
        "8 > 7, so Machine A is faster."
      ],
      explanation: [
        "Machine A: 48 ÷ 6 = 8 parts/hr.",
        "Machine B: 70 ÷ 10 = 7 parts/hr.",
        "Machine A produces more parts per hour."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Store X sells 6 erasers for $3. Store Y sells 9 erasers for $4.50. What is the cost per eraser at Store Y in cents?',
      answer: "50",
      hints: [
        "Divide the price by the number of erasers for Store Y.",
        "$4.50 ÷ 9 = ?",
        "$4.50 ÷ 9 = $0.50 = 50 cents."
      ],
      explanation: [
        "Store Y: $4.50 ÷ 9 = $0.50 per eraser.",
        "That is 50 cents per eraser."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Printer A prints 90 pages in 6 minutes. Printer B prints 100 pages in 8 minutes. Which printer is faster?',
      choices: ["Printer A", "Printer B", "Same rate", "Cannot tell"],
      answer: "Printer A",
      hints: [
        "Find each printer's rate.",
        "A: 90 ÷ 6 = 15 pages/min. B: 100 ÷ 8 = 12.5 pages/min.",
        "15 > 12.5, so Printer A is faster."
      ],
      explanation: [
        "Printer A: 90 ÷ 6 = 15 pages/min.",
        "Printer B: 100 ÷ 8 = 12.5 pages/min.",
        "Printer A prints faster."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Hiker A walks 9 miles in 3 hours. Hiker B walks 14 miles in 4 hours. Who hikes faster?',
      choices: ["Hiker B", "Hiker A", "Same speed", "Cannot tell"],
      answer: "Hiker B",
      hints: [
        "Find each hiker's rate.",
        "A: 9 ÷ 3 = 3 mph. B: 14 ÷ 4 = 3.5 mph.",
        "3.5 > 3, so Hiker B is faster."
      ],
      explanation: [
        "Hiker A: 9 ÷ 3 = 3 mph.",
        "Hiker B: 14 ÷ 4 = 3.5 mph.",
        "Hiker B hikes faster."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Cyclist A covers 36 miles in 3 hours. Cyclist B covers 44 miles in 4 hours. Who is faster?',
      choices: ["Cyclist A", "Cyclist B", "Same speed", "Cannot tell"],
      answer: "Cyclist A",
      hints: [
        "Find each cyclist's rate.",
        "A: 36 ÷ 3 = 12 mph. B: 44 ÷ 4 = 11 mph.",
        "12 > 11, so Cyclist A is faster."
      ],
      explanation: [
        "Cyclist A: 36 ÷ 3 = 12 mph.",
        "Cyclist B: 44 ÷ 4 = 11 mph.",
        "Cyclist A is faster."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Brand P sells 4 markers for $6. Brand Q sells 5 markers for $7.50. What is the cost per marker at Brand Q in cents?',
      answer: "150",
      hints: [
        "Divide the price by the number of markers for Brand Q.",
        "$7.50 ÷ 5 = ?",
        "$7.50 ÷ 5 = $1.50 = 150 cents."
      ],
      explanation: [
        "Brand Q: $7.50 ÷ 5 = $1.50 per marker.",
        "That is 150 cents per marker."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Worker A assembles 30 toys in 5 hours. Worker B assembles 42 toys in 6 hours. Who assembles more toys per hour?',
      choices: ["Worker B", "Worker A", "Same rate", "Cannot tell"],
      answer: "Worker B",
      hints: [
        "Find each worker's rate.",
        "A: 30 ÷ 5 = 6 toys/hr. B: 42 ÷ 6 = 7 toys/hr.",
        "7 > 6, so Worker B is faster."
      ],
      explanation: [
        "Worker A: 30 ÷ 5 = 6 toys/hr.",
        "Worker B: 42 ÷ 6 = 7 toys/hr.",
        "Worker B assembles more toys per hour."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Runner A runs 15 miles in 3 hours. Runner B runs 22 miles in 4 hours. Who is faster?',
      choices: ["Runner B", "Runner A", "Same speed", "Cannot tell"],
      answer: "Runner B",
      hints: [
        "Find each runner's rate.",
        "A: 15 ÷ 3 = 5 mph. B: 22 ÷ 4 = 5.5 mph.",
        "5.5 > 5, so Runner B is faster."
      ],
      explanation: [
        "Runner A: 15 ÷ 3 = 5 mph.",
        "Runner B: 22 ÷ 4 = 5.5 mph.",
        "Runner B is faster."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Store M sells 6 apples for $4.20. Store N sells 8 apples for $5.60. What is the cost per apple at Store M in cents?',
      answer: "70",
      hints: [
        "Divide the price by the number of apples for Store M.",
        "$4.20 ÷ 6 = ?",
        "$4.20 ÷ 6 = $0.70 = 70 cents."
      ],
      explanation: [
        "Store M: $4.20 ÷ 6 = $0.70 per apple.",
        "That is 70 cents per apple."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Machine P makes 54 parts in 9 hours. Machine Q makes 48 parts in 6 hours. Which machine is faster?',
      choices: ["Machine Q", "Machine P", "Same rate", "Cannot tell"],
      answer: "Machine Q",
      hints: [
        "Find each machine's rate.",
        "P: 54 ÷ 9 = 6 parts/hr. Q: 48 ÷ 6 = 8 parts/hr.",
        "8 > 6, so Machine Q is faster."
      ],
      explanation: [
        "Machine P: 54 ÷ 9 = 6 parts/hr.",
        "Machine Q: 48 ÷ 6 = 8 parts/hr.",
        "Machine Q is faster."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Baker A bakes 48 cookies in 4 hours. Baker B bakes 63 cookies in 7 hours. Who bakes faster per hour?',
      choices: ["Baker A", "Baker B", "Same rate", "Cannot tell"],
      answer: "Baker A",
      hints: [
        'Find each baker\u0027s rate.',
        'A: 48 \u00f7 4 = 12 cookies/hr. B: 63 \u00f7 7 = 9 cookies/hr.',
        '12 > 9, so Baker A is faster.'
      ],
      explanation: [
        'Baker A: 48 \u00f7 4 = 12 cookies/hr.',
        'Baker B: 63 \u00f7 7 = 9 cookies/hr.',
        'Baker A bakes more cookies per hour.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Pack A has 5 granola bars for $4. Pack B has 8 granola bars for $6. What is the cost per bar for Pack A in cents?',
      answer: "80",
      hints: [
        'Divide the price by the number of bars for Pack A.',
        '$4 \u00f7 5 = ?',
        '$4 \u00f7 5 = $0.80 = 80 cents.'
      ],
      explanation: [
        'Pack A: $4 \u00f7 5 = $0.80 per bar.',
        'That is 80 cents per granola bar.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Car A travels 240 miles on 8 gallons. Car B travels 315 miles on 9 gallons. Which car gets better mileage?',
      choices: ["Car B", "Car A", "Same mileage", "Cannot tell"],
      answer: "Car B",
      hints: [
        'Find each car\u0027s miles per gallon.',
        'A: 240 \u00f7 8 = 30 mpg. B: 315 \u00f7 9 = 35 mpg.',
        '35 > 30, so Car B is more efficient.'
      ],
      explanation: [
        'Car A: 240 \u00f7 8 = 30 mpg.',
        'Car B: 315 \u00f7 9 = 35 mpg.',
        'Car B gets better mileage.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Store A sells 6 apples for $4.20. Store B sells 8 apples for $5.20. Which store has the cheaper price per apple?',
      choices: ["Store B", "Store A", "They are equal", "Cannot tell"],
      answer: "Store B",
      hints: [
        'Find the unit price at each store.',
        'Store A: $4.20 \u00f7 6 = $0.70. Store B: $5.20 \u00f7 8 = $0.65.',
        '$0.65 < $0.70, so Store B is cheaper.'
      ],
      explanation: [
        'Store A: $4.20 \u00f7 6 = $0.70 per apple.',
        'Store B: $5.20 \u00f7 8 = $0.65 per apple.',
        'Store B is cheaper.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Runner A covers 18 km in 2 hours. Runner B covers 28 km in 3.5 hours. What is Runner B\u2019s speed in km/hr?',
      answer: "8",
      hints: [
        'Speed = distance \u00f7 time.',
        'Runner B: 28 \u00f7 3.5 = ?',
        '28 \u00f7 3.5 = 8 km/hr.'
      ],
      explanation: [
        'Runner A: 18 \u00f7 2 = 9 km/hr. Runner B: 28 \u00f7 3.5 = 8 km/hr.',
        'Runner B\u2019s speed is 8 km/hr.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Printer X prints 120 pages in 4 minutes. Printer Y prints 200 pages in 5 minutes. Which printer is faster?',
      choices: ["Printer Y", "Printer X", "They are equal", "Cannot tell"],
      answer: "Printer Y",
      hints: [
        'Find pages per minute for each.',
        'X: 120 \u00f7 4 = 30. Y: 200 \u00f7 5 = 40.',
        '40 > 30, so Printer Y is faster.'
      ],
      explanation: [
        'Printer X: 120 \u00f7 4 = 30 pages/min.',
        'Printer Y: 200 \u00f7 5 = 40 pages/min.',
        'Printer Y is faster.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Bakery A sells 6 cupcakes for $9. Bakery B sells 10 cupcakes for $14. What is the cost per cupcake at Bakery A in cents?',
      answer: "150",
      hints: [
        "Divide the price by the number of cupcakes for Bakery A.",
        "$9 ÷ 6 = ?",
        "$9 ÷ 6 = $1.50 = 150 cents."
      ],
      explanation: [
        "Bakery A: $9 ÷ 6 = $1.50 per cupcake.",
        "That is 150 cents per cupcake."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Typist A types 240 words in 8 minutes. Typist B types 195 words in 5 minutes. Who types faster?',
      choices: ["Typist B", "Typist A", "Same speed", "Cannot tell"],
      answer: "Typist B",
      hints: [
        "Find each typist's rate in words per minute.",
        "A: 240 ÷ 8 = 30 wpm. B: 195 ÷ 5 = 39 wpm.",
        "39 > 30, so Typist B is faster."
      ],
      explanation: [
        "Typist A: 240 ÷ 8 = 30 words/min.",
        "Typist B: 195 ÷ 5 = 39 words/min.",
        "Typist B types faster."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Farm A produces 56 eggs in 7 days. Farm B produces 72 eggs in 8 days. Which farm produces more eggs per day?',
      choices: ["Farm B", "Farm A", "Same rate", "Cannot tell"],
      answer: "Farm B",
      hints: [
        "Find each farm's daily rate.",
        "A: 56 ÷ 7 = 8 eggs/day. B: 72 ÷ 8 = 9 eggs/day.",
        "9 > 8, so Farm B is more productive."
      ],
      explanation: [
        "Farm A: 56 ÷ 7 = 8 eggs/day.",
        "Farm B: 72 ÷ 8 = 9 eggs/day.",
        "Farm B produces more eggs per day."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Plumber A fixes 8 pipes in 4 hours. Plumber B fixes 15 pipes in 5 hours. Who is faster?',
      choices: ["Plumber B", "Plumber A", "Same rate", "Cannot tell"],
      answer: "Plumber B",
      hints: [
        "Find each plumber's rate.",
        "A: 8 ÷ 4 = 2 pipes/hr. B: 15 ÷ 5 = 3 pipes/hr.",
        "3 > 2, so Plumber B is faster."
      ],
      explanation: [
        "Plumber A: 8 ÷ 4 = 2 pipes/hr.",
        "Plumber B: 15 ÷ 5 = 3 pipes/hr.",
        "Plumber B fixes pipes faster."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Store C sells 9 muffins for $6.30. Store D sells 12 muffins for $9.60. What is the cost per muffin at Store C in cents?',
      answer: "70",
      hints: [
        "Divide the price by the number of muffins for Store C.",
        "$6.30 ÷ 9 = ?",
        "$6.30 ÷ 9 = $0.70 = 70 cents."
      ],
      explanation: [
        "Store C: $6.30 ÷ 9 = $0.70 per muffin.",
        "That is 70 cents per muffin."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Car A travels 200 miles on 10 gallons. Car B travels 270 miles on 9 gallons. Which car is more fuel efficient?',
      choices: ["Car B", "Car A", "Same efficiency", "Cannot tell"],
      answer: "Car B",
      hints: [
        "Find miles per gallon for each car.",
        "A: 200 ÷ 10 = 20 mpg. B: 270 ÷ 9 = 30 mpg.",
        "30 > 20, so Car B is more efficient."
      ],
      explanation: [
        "Car A: 200 ÷ 10 = 20 mpg.",
        "Car B: 270 ÷ 9 = 30 mpg.",
        "Car B gets better fuel economy."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve the proportion: <span class="math">4/7 = x/35</span>. What is <span class="math">x</span>?',
      answer: "20",
      hints: [
        "Think: 7 × ? = 35.",
        "7 × 5 = 35, so multiply the numerator by 5 too.",
        "4 × 5 = 20."
      ],
      explanation: [
        "Since 7 × 5 = 35, multiply the numerator: 4 × 5 = <strong>20</strong>.",
        "x = <strong>20</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">9/12 = n/28</span>. What is <span class="math">n</span>?',
      choices: ["21", "24", "18", "27"],
      answer: "21",
      hints: [
        "Cross multiply: 9 × 28 = 12 × n.",
        "252 = 12n.",
        "n = 252 ÷ 12 = 21."
      ],
      explanation: [
        "Cross multiply: 9 × 28 = 252 and 12 × n.",
        "n = 252 ÷ 12 = <strong>21</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve the proportion: <span class="math">5/8 = 30/x</span>. What is <span class="math">x</span>?',
      answer: "48",
      hints: [
        "Cross multiply: 5 × x = 8 × 30.",
        "5x = 240.",
        "x = 240 ÷ 5 = 48."
      ],
      explanation: [
        "Cross multiply: 5x = 8 × 30 = 240.",
        "x = 240 ÷ 5 = <strong>48</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 5: Solving Proportions (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3/5 = x/20</span>. What is <span class="math">x</span>?',
      answer: "12",
      hints: [
        "Cross-multiply: 3 × 20 = 5 × x.",
        "60 = 5x.",
        "x = 60 ÷ 5 = 12."
      ],
      explanation: [
        "Cross-multiply: 3 × 20 = 5 × x → 60 = 5x.",
        "Divide: x = 60 ÷ 5 = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">4/7 = 16/x</span>. What is <span class="math">x</span>?',
      choices: ["28", "24", "32", "21"],
      answer: "28",
      hints: [
        "Cross-multiply: 4 × x = 7 × 16.",
        "4x = 112.",
        "x = 112 ÷ 4."
      ],
      explanation: [
        "Cross-multiply: 4x = 7 × 16 = 112.",
        "x = 112 ÷ 4 = 28."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">9/x = 3/8</span>. What is <span class="math">x</span>?',
      answer: "24",
      hints: [
        "Cross-multiply: 9 × 8 = 3 × x.",
        "72 = 3x.",
        "x = 72 ÷ 3 = 24."
      ],
      explanation: [
        "Cross-multiply: 9 × 8 = 3x → 72 = 3x.",
        "x = 72 ÷ 3 = 24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/12 = 5/6</span>. What is <span class="math">x</span>?',
      choices: ["10", "8", "15", "12"],
      answer: "10",
      hints: [
        "Cross-multiply: 6 × x = 12 × 5.",
        "6x = 60.",
        "x = 60 ÷ 6 = 10."
      ],
      explanation: [
        "Cross-multiply: 6x = 12 × 5 = 60.",
        "x = 60 ÷ 6 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">7/10 = 21/x</span>. What is <span class="math">x</span>?',
      answer: "30",
      hints: [
        "Cross-multiply: 7 × x = 10 × 21.",
        "7x = 210.",
        "x = 210 ÷ 7 = 30."
      ],
      explanation: [
        "Cross-multiply: 7x = 10 × 21 = 210.",
        "x = 210 ÷ 7 = 30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">5/9 = 15/x</span>. What is <span class="math">x</span>?',
      choices: ["27", "25", "30", "18"],
      answer: "27",
      hints: [
        "Cross-multiply: 5 × x = 9 × 15.",
        "5x = 135.",
        "x = 135 ÷ 5 = 27."
      ],
      explanation: [
        "Cross-multiply: 5x = 9 × 15 = 135.",
        "x = 135 ÷ 5 = 27."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">x/14 = 6/7</span>. What is <span class="math">x</span>?',
      answer: "12",
      hints: [
        "Cross-multiply: 7 × x = 14 × 6.",
        "7x = 84.",
        "x = 84 ÷ 7 = 12."
      ],
      explanation: [
        "Cross-multiply: 7x = 14 × 6 = 84.",
        "x = 84 ÷ 7 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">8/x = 2/9</span>. What is <span class="math">x</span>?',
      choices: ["36", "32", "24", "18"],
      answer: "36",
      hints: [
        "Cross-multiply: 8 × 9 = 2 × x.",
        "72 = 2x.",
        "x = 72 ÷ 2 = 36."
      ],
      explanation: [
        "Cross-multiply: 8 × 9 = 2x → 72 = 2x.",
        "x = 72 ÷ 2 = 36."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6/11 = x/33</span>. What is <span class="math">x</span>?',
      answer: "18",
      hints: [
        "Cross-multiply: 6 × 33 = 11 × x.",
        "198 = 11x.",
        "x = 198 ÷ 11 = 18."
      ],
      explanation: [
        "Cross-multiply: 6 × 33 = 11x → 198 = 11x.",
        "x = 198 ÷ 11 = 18."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/15 = 4/5</span>. What is <span class="math">x</span>?',
      choices: ["12", "10", "15", "8"],
      answer: "12",
      hints: [
        "Cross-multiply: 5 × x = 15 × 4.",
        "5x = 60.",
        "x = 60 ÷ 5 = 12."
      ],
      explanation: [
        "Cross-multiply: 5x = 15 × 4 = 60.",
        "x = 60 ÷ 5 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">10/x = 5/8</span>. What is <span class="math">x</span>?',
      answer: "16",
      hints: [
        "Cross-multiply: 10 × 8 = 5 × x.",
        "80 = 5x.",
        "x = 80 ÷ 5 = 16."
      ],
      explanation: [
        "Cross-multiply: 10 × 8 = 5x → 80 = 5x.",
        "x = 80 ÷ 5 = 16."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">6/x = 3/7</span>. What is <span class="math">x</span>?',
      choices: ["14", "12", "21", "9"],
      answer: "14",
      hints: [
        "Cross-multiply: 6 × 7 = 3 × x.",
        "42 = 3x.",
        "x = 42 ÷ 3 = 14."
      ],
      explanation: [
        "Cross-multiply: 6 × 7 = 3x → 42 = 3x.",
        "x = 42 ÷ 3 = 14."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">x/18 = 7/9</span>. What is <span class="math">x</span>?',
      answer: "14",
      hints: [
        "Cross-multiply: 9 × x = 18 × 7.",
        "9x = 126.",
        "x = 126 ÷ 9 = 14."
      ],
      explanation: [
        "Cross-multiply: 9x = 18 × 7 = 126.",
        "x = 126 ÷ 9 = 14."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">12/x = 4/11</span>. What is <span class="math">x</span>?',
      choices: ["33", "36", "24", "44"],
      answer: "33",
      hints: [
        "Cross-multiply: 12 × 11 = 4 × x.",
        "132 = 4x.",
        "x = 132 ÷ 4 = 33."
      ],
      explanation: [
        "Cross-multiply: 12 × 11 = 4x → 132 = 4x.",
        "x = 132 ÷ 4 = 33."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">8/x = 4/9</span>. What is <span class="math">x</span>?',
      answer: "18",
      hints: [
        "Cross-multiply: 8 × 9 = 4 × x.",
        "72 = 4x.",
        "x = 72 ÷ 4 = 18."
      ],
      explanation: [
        "Cross-multiply: 8 × 9 = 4x → 72 = 4x.",
        "x = 72 ÷ 4 = 18."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/16 = 3/8</span>. What is <span class="math">x</span>?',
      choices: ["6", "8", "4", "12"],
      answer: "6",
      hints: [
        "Cross-multiply: 8 × x = 16 × 3.",
        "8x = 48.",
        "x = 48 ÷ 8 = 6."
      ],
      explanation: [
        "Cross-multiply: 8x = 16 × 3 = 48.",
        "x = 48 ÷ 8 = 6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">15/x = 5/7</span>. What is <span class="math">x</span>?',
      answer: "21",
      hints: [
        "Cross-multiply: 15 × 7 = 5 × x.",
        "105 = 5x.",
        "x = 105 ÷ 5 = 21."
      ],
      explanation: [
        "Cross-multiply: 15 × 7 = 5x → 105 = 5x.",
        "x = 105 ÷ 5 = 21."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5/8 = x/24</span>. What is <span class="math">x</span>?',
      answer: "15",
      hints: [
        "Cross-multiply: 5 × 24 = 8 × x.",
        "120 = 8x.",
        "x = 120 ÷ 8 = 15."
      ],
      explanation: [
        "Cross-multiply: 5 × 24 = 8x → 120 = 8x.",
        "x = 120 ÷ 8 = 15."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/22 = 6/11</span>. What is <span class="math">x</span>?',
      choices: ["12", "11", "6", "18"],
      answer: "12",
      hints: [
        "Cross-multiply: 11 × x = 22 × 6.",
        "11x = 132.",
        "x = 132 ÷ 11 = 12."
      ],
      explanation: [
        "Cross-multiply: 11x = 22 × 6 = 132.",
        "x = 132 ÷ 11 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">14/x = 7/6</span>. What is <span class="math">x</span>?',
      answer: "12",
      hints: [
        "Cross-multiply: 14 × 6 = 7 × x.",
        "84 = 7x.",
        "x = 84 ÷ 7 = 12."
      ],
      explanation: [
        "Cross-multiply: 14 × 6 = 7x → 84 = 7x.",
        "x = 84 ÷ 7 = 12."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">9/12 = x/16</span>. What is <span class="math">x</span>?',
      answer: "12",
      hints: [
        "Cross-multiply: 9 × 16 = 12 × x.",
        "144 = 12x.",
        "x = 144 ÷ 12 = 12."
      ],
      explanation: [
        "Cross-multiply: 9 × 16 = 12x → 144 = 12x.",
        "x = 144 ÷ 12 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/24 = 5/8</span>. What is <span class="math">x</span>?',
      choices: ["15", "12", "10", "20"],
      answer: "15",
      hints: [
        "Cross-multiply: 8 × x = 24 × 5.",
        "8x = 120.",
        "x = 120 ÷ 8 = 15."
      ],
      explanation: [
        "Cross-multiply: 8x = 24 × 5 = 120.",
        "x = 120 ÷ 8 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">11/x = 33/27</span>. What is <span class="math">x</span>?',
      answer: "9",
      hints: [
        "Cross-multiply: 11 × 27 = 33 × x.",
        "297 = 33x.",
        "x = 297 ÷ 33 = 9."
      ],
      explanation: [
        "Cross-multiply: 11 × 27 = 33x → 297 = 33x.",
        "x = 297 ÷ 33 = 9."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">7/9 = x/36</span>. What is <span class="math">x</span>?',
      answer: "28",
      hints: [
        'Cross-multiply: 7 \u00d7 36 = 9 \u00d7 x.',
        '252 = 9x.',
        'x = 252 \u00f7 9 = 28.'
      ],
      explanation: [
        'Cross-multiply: 7 \u00d7 36 = 9x \u2192 252 = 9x.',
        'x = 252 \u00f7 9 = 28.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/20 = 9/12</span>. What is <span class="math">x</span>?',
      choices: ["15", "12", "18", "10"],
      answer: "15",
      hints: [
        'Cross-multiply: 12 \u00d7 x = 20 \u00d7 9.',
        '12x = 180.',
        'x = 180 \u00f7 12 = 15.'
      ],
      explanation: [
        'Cross-multiply: 12x = 20 \u00d7 9 = 180.',
        'x = 180 \u00f7 12 = 15.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">18/x = 6/11</span>. What is <span class="math">x</span>?',
      answer: "33",
      hints: [
        'Cross-multiply: 18 \u00d7 11 = 6 \u00d7 x.',
        '198 = 6x.',
        'x = 198 \u00f7 6 = 33.'
      ],
      explanation: [
        'Cross-multiply: 18 \u00d7 11 = 6x \u2192 198 = 6x.',
        'x = 198 \u00f7 6 = 33.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve the proportion: <span class="math">\\frac{7}{x} = \\frac{21}{27}</span>. What is x?',
      answer: "9",
      hints: [
        'Cross-multiply: 7 \u00d7 27 = 21 \u00d7 x.',
        '189 = 21x.',
        'x = 189 \u00f7 21 = 9.'
      ],
      explanation: [
        'Cross-multiply: 7 \u00d7 27 = 21x \u2192 189 = 21x.',
        'x = 189 \u00f7 21 = 9.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\\frac{15}{x} = \\frac{45}{63}</span>.',
      choices: ["21", "27", "18", "24"],
      answer: "21",
      hints: [
        'Cross-multiply: 15 \u00d7 63 = 45 \u00d7 x.',
        '945 = 45x.',
        'x = 945 \u00f7 45 = 21.'
      ],
      explanation: [
        'Cross-multiply: 15 \u00d7 63 = 45x \u2192 945 = 45x.',
        'x = 945 \u00f7 45 = 21.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">\\frac{x}{14} = \\frac{36}{56}</span>. What is x?',
      answer: "9",
      hints: [
        'Cross-multiply: 56x = 14 \u00d7 36.',
        '56x = 504.',
        'x = 504 \u00f7 56 = 9.'
      ],
      explanation: [
        'Cross-multiply: 56x = 14 \u00d7 36 = 504.',
        'x = 504 \u00f7 56 = 9.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\frac{x}{18} = \frac{8}{12}</span>. What is <span class="math">x</span>?',
      choices: ["12", "8", "15", "10"],
      answer: "12",
      hints: [
        "Cross-multiply: 12 × x = 18 × 8.",
        "12x = 144.",
        "x = 144 ÷ 12 = 12."
      ],
      explanation: [
        "Cross-multiply: 12x = 18 × 8 = 144.",
        "x = 144 ÷ 12 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">\frac{4}{7} = \frac{x}{42}</span>. What is <span class="math">x</span>?',
      answer: "24",
      hints: [
        "Cross-multiply: 4 × 42 = 7 × x.",
        "168 = 7x.",
        "x = 168 ÷ 7 = 24."
      ],
      explanation: [
        "Cross-multiply: 4 × 42 = 7x → 168 = 7x.",
        "x = 168 ÷ 7 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">\frac{20}{x} = \frac{8}{6}</span>. What is <span class="math">x</span>?',
      answer: "15",
      hints: [
        "Cross-multiply: 20 × 6 = 8 × x.",
        "120 = 8x.",
        "x = 120 ÷ 8 = 15."
      ],
      explanation: [
        "Cross-multiply: 20 × 6 = 8x → 120 = 8x.",
        "x = 120 ÷ 8 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">\frac{6}{7} = \frac{x}{35}</span>. What is <span class="math">x</span>?',
      answer: "30",
      hints: [
        "Cross-multiply: 6 × 35 = 7 × x.",
        "210 = 7x.",
        "x = 210 ÷ 7 = 30."
      ],
      explanation: [
        "Cross-multiply: 6 × 35 = 7x → 210 = 7x.",
        "x = 210 ÷ 7 = 30."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\frac{x}{27} = \frac{8}{9}</span>. What is <span class="math">x</span>?',
      choices: ["24", "18", "27", "21"],
      answer: "24",
      hints: [
        "Cross-multiply: 9 × x = 27 × 8.",
        "9x = 216.",
        "x = 216 ÷ 9 = 24."
      ],
      explanation: [
        "Cross-multiply: 9x = 27 × 8 = 216.",
        "x = 216 ÷ 9 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">\frac{16}{x} = \frac{4}{7}</span>. What is <span class="math">x</span>?',
      answer: "28",
      hints: [
        "Cross-multiply: 16 × 7 = 4 × x.",
        "112 = 4x.",
        "x = 112 ÷ 4 = 28."
      ],
      explanation: [
        "Cross-multiply: 16 × 7 = 4x → 112 = 4x.",
        "x = 112 ÷ 4 = 28."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Use cross multiplication to solve: <span class="math">3/8 = 12/n</span>. What is <span class="math">n</span>?',
      answer: "32",
      hints: [
        "Cross multiply: 3 × n = 8 × 12.",
        "3n = 96.",
        "n = 96 ÷ 3 = 32."
      ],
      explanation: [
        "Cross multiply: 3 × n = 8 × 12 = 96.",
        "n = 96 ÷ 3 = <strong>32</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Use cross multiplication to solve: <span class="math">7/x = 21/27</span>. What is <span class="math">x</span>?',
      choices: ["9", "7", "12", "11"],
      answer: "9",
      hints: [
        "Cross multiply: 7 × 27 = x × 21.",
        "189 = 21x.",
        "x = 189 ÷ 21 = 9."
      ],
      explanation: [
        "Cross multiply: 7 × 27 = 189 = 21x.",
        "x = 189 ÷ 21 = <strong>9</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Cross multiply to solve: <span class="math">11/5 = 44/n</span>. What is <span class="math">n</span>?',
      answer: "20",
      hints: [
        "Cross multiply: 11 × n = 5 × 44.",
        "11n = 220.",
        "n = 220 ÷ 11 = 20."
      ],
      explanation: [
        "Cross multiply: 11n = 5 × 44 = 220.",
        "n = 220 ÷ 11 = <strong>20</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 6: Ratio Word Problems (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'The ratio of boys to girls in a club is 3 : 5. If there are 15 boys, how many girls are there?',
      choices: ["25", "20", "30", "18"],
      answer: "25",
      hints: [
        "Set up the proportion: 3/5 = 15/x.",
        "Cross-multiply: 3x = 75.",
        "x = 25."
      ],
      explanation: [
        "3/5 = 15/x → 3x = 5 × 15 = 75.",
        "x = 75 ÷ 3 = 25 girls."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A trail mix recipe uses nuts and raisins in a 4 : 3 ratio. If you use 12 cups of nuts, how many cups of raisins do you need?',
      answer: "9",
      hints: [
        "Set up the proportion: 4/3 = 12/x.",
        "Cross-multiply: 4x = 36.",
        "x = 9."
      ],
      explanation: [
        "4/3 = 12/x → 4x = 3 × 12 = 36.",
        "x = 36 ÷ 4 = 9 cups of raisins."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Red and blue candies are in a 2 : 7 ratio. If there are 63 total candies, how many are red?',
      choices: ["14", "9", "18", "21"],
      answer: "14",
      hints: [
        "Total parts = 2 + 7 = 9.",
        "Each part = 63 ÷ 9 = 7 candies.",
        "Red = 2 × 7 = 14."
      ],
      explanation: [
        "Total parts = 2 + 7 = 9.",
        "Each part = 63 ÷ 9 = 7.",
        "Red candies = 2 × 7 = 14."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The ratio of cats to dogs at a shelter is 5 : 3. If there are 40 animals total, how many are dogs?',
      answer: "15",
      hints: [
        "Total parts = 5 + 3 = 8.",
        "Each part = 40 ÷ 8 = 5.",
        "Dogs = 3 × 5 = 15."
      ],
      explanation: [
        "Total parts = 5 + 3 = 8. Each part = 40 ÷ 8 = 5.",
        "Dogs = 3 × 5 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A garden has flowers and vegetables in a 3 : 2 ratio. If there are 18 flowers, how many vegetables are there?',
      choices: ["12", "10", "15", "9"],
      answer: "12",
      hints: [
        "Set up: 3/2 = 18/x.",
        "Cross-multiply: 3x = 36.",
        "x = 12."
      ],
      explanation: [
        "3/2 = 18/x → 3x = 2 × 18 = 36.",
        "x = 36 ÷ 3 = 12 vegetables."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Apples and oranges are in a 5 : 4 ratio. If there are 36 total pieces of fruit, how many are apples?',
      answer: "20",
      hints: [
        "Total parts = 5 + 4 = 9.",
        "Each part = 36 ÷ 9 = 4 pieces.",
        "Apples = 5 × 4 = 20."
      ],
      explanation: [
        "Total parts = 5 + 4 = 9. Each part = 36 ÷ 9 = 4.",
        "Apples = 5 × 4 = 20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Pencils and pens are in a 7 : 3 ratio. If there are 21 pencils, how many pens are there?',
      choices: ["9", "7", "12", "6"],
      answer: "9",
      hints: [
        "Set up: 7/3 = 21/x.",
        "Cross-multiply: 7x = 63.",
        "x = 9."
      ],
      explanation: [
        "7/3 = 21/x → 7x = 3 × 21 = 63.",
        "x = 63 ÷ 7 = 9 pens."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A bag has coins in the ratio 1 : 3 : 6 (gold : silver : bronze). If there are 80 total coins, how many are silver?',
      choices: ["24", "8", "48", "30"],
      answer: "24",
      hints: [
        "Total parts = 1 + 3 + 6 = 10.",
        "Each part = 80 ÷ 10 = 8 coins.",
        "Silver = 3 × 8 = 24."
      ],
      explanation: [
        "Total parts = 1 + 3 + 6 = 10. Each part = 80 ÷ 10 = 8.",
        "Silver coins = 3 × 8 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Markers and crayons are in a 5 : 2 ratio. If there are 35 markers, how many crayons are there?',
      answer: "14",
      hints: [
        "Set up the proportion: 5/2 = 35/x.",
        "Cross-multiply: 5x = 70.",
        "x = 14."
      ],
      explanation: [
        "5/2 = 35/x → 5x = 2 × 35 = 70.",
        "x = 70 ÷ 5 = 14 crayons."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Black and white tiles are in a 3 : 8 ratio. If there are 99 total tiles, how many are white?',
      choices: ["72", "27", "66", "33"],
      answer: "72",
      hints: [
        "Total parts = 3 + 8 = 11.",
        "Each part = 99 ÷ 11 = 9 tiles.",
        "White = 8 × 9 = 72."
      ],
      explanation: [
        "Total parts = 3 + 8 = 11. Each part = 99 ÷ 11 = 9.",
        "White tiles = 8 × 9 = 72."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A ribbon is cut into pieces in a 2 : 5 ratio. If the shorter piece is 16 cm, how long is the longer piece?',
      choices: ["40 cm", "32 cm", "50 cm", "25 cm"],
      answer: "40 cm",
      hints: [
        "Set up: 2/5 = 16/x.",
        "Cross-multiply: 2x = 80.",
        "x = 40."
      ],
      explanation: [
        "2/5 = 16/x → 2x = 5 × 16 = 80.",
        "x = 80 ÷ 2 = 40 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Pens and erasers are in a 3 : 4 ratio. If there are 24 pens, how many erasers are there?',
      answer: "32",
      hints: [
        "Set up the proportion: 3/4 = 24/x.",
        "Cross-multiply: 3x = 96.",
        "x = 32."
      ],
      explanation: [
        "3/4 = 24/x → 3x = 4 × 24 = 96.",
        "x = 96 ÷ 3 = 32 erasers."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Strawberries and blueberries are in a 3 : 7 ratio. If there are 50 total berries, how many are strawberries?',
      choices: ["15", "35", "20", "10"],
      answer: "15",
      hints: [
        "Total parts = 3 + 7 = 10.",
        "Each part = 50 ÷ 10 = 5 berries.",
        "Strawberries = 3 × 5 = 15."
      ],
      explanation: [
        "Total parts = 3 + 7 = 10. Each part = 50 ÷ 10 = 5.",
        "Strawberries = 3 × 5 = 15."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A mixture uses sand and cement in a 4 : 1 ratio. If there are 35 kg total, how many kg of sand are needed?',
      choices: ["28 kg", "7 kg", "30 kg", "20 kg"],
      answer: "28 kg",
      hints: [
        "Total parts = 4 + 1 = 5.",
        "Each part = 35 ÷ 5 = 7 kg.",
        "Sand = 4 × 7 = 28 kg."
      ],
      explanation: [
        "Total parts = 4 + 1 = 5. Each part = 35 ÷ 5 = 7.",
        "Sand = 4 × 7 = 28 kg."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Fiction and non-fiction books are in a 6 : 5 ratio. If there are 30 fiction books, how many non-fiction books are there?',
      answer: "25",
      hints: [
        "Set up the proportion: 6/5 = 30/x.",
        "Cross-multiply: 6x = 150.",
        "x = 25."
      ],
      explanation: [
        "6/5 = 30/x → 6x = 5 × 30 = 150.",
        "x = 150 ÷ 6 = 25 non-fiction books."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Peanuts, cashews, and walnuts are in a 2 : 3 : 5 ratio. If there are 60 total nuts, how many are cashews?',
      choices: ["18", "12", "30", "24"],
      answer: "18",
      hints: [
        "Total parts = 2 + 3 + 5 = 10.",
        "Each part = 60 ÷ 10 = 6 nuts.",
        "Cashews = 3 × 6 = 18."
      ],
      explanation: [
        "Total parts = 2 + 3 + 5 = 10. Each part = 60 ÷ 10 = 6.",
        "Cashews = 3 × 6 = 18."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rope is cut into two pieces in a 3 : 7 ratio. If the shorter piece is 21 cm, how long is the longer piece?',
      choices: ["49 cm", "42 cm", "56 cm", "35 cm"],
      answer: "49 cm",
      hints: [
        "Set up: 3/7 = 21/x.",
        "Cross-multiply: 3x = 147.",
        "x = 49."
      ],
      explanation: [
        "3/7 = 21/x → 3x = 7 × 21 = 147.",
        "x = 147 ÷ 3 = 49 cm."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Trucks and cars are in a 2 : 9 ratio. If there are 18 trucks, how many cars are there?',
      choices: ["81", "72", "54", "63"],
      answer: "81",
      hints: [
        "Set up: 2/9 = 18/x.",
        "Cross-multiply: 2x = 162.",
        "x = 81."
      ],
      explanation: [
        "2/9 = 18/x → 2x = 9 × 18 = 162.",
        "x = 162 ÷ 2 = 81 cars."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Red, green, and blue marbles are in a 3 : 4 : 5 ratio. If there are 84 total marbles, how many are green?',
      answer: "28",
      hints: [
        "Total parts = 3 + 4 + 5 = 12.",
        "Each part = 84 ÷ 12 = 7 marbles.",
        "Green = 4 × 7 = 28."
      ],
      explanation: [
        "Total parts = 3 + 4 + 5 = 12. Each part = 84 ÷ 12 = 7.",
        "Green marbles = 4 × 7 = 28."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A wire is cut into two pieces in a 5 : 3 ratio. If the longer piece is 45 cm, how long is the shorter piece?',
      choices: ["27 cm", "30 cm", "24 cm", "18 cm"],
      answer: "27 cm",
      hints: [
        "Set up: 5/3 = 45/x.",
        "Cross-multiply: 5x = 135.",
        "x = 27."
      ],
      explanation: [
        "5/3 = 45/x → 5x = 3 × 45 = 135.",
        "x = 135 ÷ 5 = 27 cm."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Dogs and cats are in a 5 : 8 ratio. If there are 40 dogs, how many cats are there?',
      choices: ["64", "48", "56", "72"],
      answer: "64",
      hints: [
        "Set up: 5/8 = 40/x.",
        "Cross-multiply: 5x = 320.",
        "x = 64."
      ],
      explanation: [
        "5/8 = 40/x → 5x = 8 × 40 = 320.",
        "x = 320 ÷ 5 = 64 cats."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Red, blue, and yellow beads are in a 4 : 5 : 1 ratio. If there are 90 total beads, how many are blue?',
      answer: "45",
      hints: [
        "Total parts = 4 + 5 + 1 = 10.",
        "Each part = 90 ÷ 10 = 9 beads.",
        "Blue = 5 × 9 = 45."
      ],
      explanation: [
        "Total parts = 4 + 5 + 1 = 10. Each part = 90 ÷ 10 = 9.",
        "Blue beads = 5 × 9 = 45."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A wire is cut into two pieces in a 7 : 4 ratio. If the shorter piece is 24 cm, how long is the longer piece?',
      choices: ["42 cm", "36 cm", "48 cm", "28 cm"],
      answer: "42 cm",
      hints: [
        "Set up: 7/4 = x/24.",
        "Cross-multiply: 4x = 168.",
        "x = 42."
      ],
      explanation: [
        "7/4 = x/24 → 4x = 7 × 24 = 168.",
        "x = 168 ÷ 4 = 42 cm."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'The ratio of adults to children at a park is 4 : 7. If there are 28 adults, how many children are there?',
      choices: ["49", "42", "35", "56"],
      answer: "49",
      hints: [
        'Set up: 4/7 = 28/x.',
        'Cross-multiply: 4x = 196.',
        'x = 49.'
      ],
      explanation: [
        '4/7 = 28/x \u2192 4x = 7 \u00d7 28 = 196.',
        'x = 196 \u00f7 4 = 49 children.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Lions, tigers, and bears are in a 2 : 3 : 7 ratio at a zoo. If there are 72 animals total, how many are tigers?',
      answer: "18",
      hints: [
        'Total parts = 2 + 3 + 7 = 12.',
        'Each part = 72 \u00f7 12 = 6 animals.',
        'Tigers = 3 \u00d7 6 = 18.'
      ],
      explanation: [
        'Total parts = 2 + 3 + 7 = 12. Each part = 72 \u00f7 12 = 6.',
        'Tigers = 3 \u00d7 6 = 18.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A ribbon is cut into two pieces in a 6 : 5 ratio. If the longer piece is 42 cm, how long is the shorter piece?',
      choices: ["35 cm", "30 cm", "40 cm", "25 cm"],
      answer: "35 cm",
      hints: [
        'Set up: 6/5 = 42/x.',
        'Cross-multiply: 6x = 210.',
        'x = 35.'
      ],
      explanation: [
        '6/5 = 42/x \u2192 6x = 5 \u00d7 42 = 210.',
        'x = 210 \u00f7 6 = 35 cm.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A recipe for 4 servings uses 10 cups of flour. How many cups are needed for 14 servings?',
      choices: ["35", "28", "40", "32"],
      answer: "35",
      hints: [
        'Set up a proportion: 10/4 = x/14.',
        'Cross-multiply: 10 \u00d7 14 = 4x.',
        '140 = 4x \u2192 x = 35.'
      ],
      explanation: [
        '10/4 = x/14. Cross-multiply: 140 = 4x.',
        'x = 140 \u00f7 4 = 35 cups.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'If 8 workers can paint a fence in 6 hours, how many hours would it take 12 workers at the same rate? (Assume the total work is the same.)',
      answer: "4",
      hints: [
        'Total worker-hours = 8 \u00d7 6 = 48.',
        '12 workers \u00d7 h hours = 48.',
        'h = 48 \u00f7 12 = 4.'
      ],
      explanation: [
        'Total work = 8 \u00d7 6 = 48 worker-hours.',
        '12 \u00d7 h = 48 \u2192 h = 4 hours.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'The ratio of boys to girls in a club is 5 : 3. If there are 45 boys, how many girls are there?',
      choices: ["27", "30", "24", "15"],
      answer: "27",
      hints: [
        'Set up: 5/3 = 45/x.',
        'Cross-multiply: 5x = 3 \u00d7 45.',
        '5x = 135 \u2192 x = 27.'
      ],
      explanation: [
        '5/3 = 45/x. Cross-multiply: 5x = 135.',
        'x = 135 \u00f7 5 = 27 girls.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Apples, bananas, and cherries are in a 3 : 2 : 5 ratio. If there are 70 total pieces of fruit, how many are bananas?',
      choices: ["14", "21", "35", "10"],
      answer: "14",
      hints: [
        "Total parts = 3 + 2 + 5 = 10.",
        "Each part = 70 ÷ 10 = 7 pieces.",
        "Bananas = 2 × 7 = 14."
      ],
      explanation: [
        "Total parts = 3 + 2 + 5 = 10. Each part = 70 ÷ 10 = 7.",
        "Bananas = 2 × 7 = 14."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Markers and pencils are in a 3 : 8 ratio. If there are 24 markers, how many pencils are there?',
      answer: "64",
      hints: [
        "Set up: 3/8 = 24/x.",
        "Cross-multiply: 3x = 192.",
        "x = 64."
      ],
      explanation: [
        "3/8 = 24/x → 3x = 8 × 24 = 192.",
        "x = 192 ÷ 3 = 64 pencils."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rope is cut into two pieces in a 4 : 9 ratio. If the shorter piece is 32 cm, how long is the longer piece?',
      choices: ["72 cm", "64 cm", "54 cm", "81 cm"],
      answer: "72 cm",
      hints: [
        "Set up: 4/9 = 32/x.",
        "Cross-multiply: 4x = 288.",
        "x = 72."
      ],
      explanation: [
        "4/9 = 32/x → 4x = 9 × 32 = 288.",
        "x = 288 ÷ 4 = 72 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Roses and lilies are in a 5 : 3 ratio. If there are 40 roses, how many lilies are there?',
      choices: ["24", "15", "30", "20"],
      answer: "24",
      hints: [
        "Set up: 5/3 = 40/x.",
        "Cross-multiply: 5x = 120.",
        "x = 24."
      ],
      explanation: [
        "5/3 = 40/x → 5x = 3 × 40 = 120.",
        "x = 120 ÷ 5 = 24 lilies."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Cookies, brownies, and cupcakes are in a 3 : 2 : 7 ratio. If there are 96 total treats, how many are brownies?',
      answer: "16",
      hints: [
        "Total parts = 3 + 2 + 7 = 12.",
        "Each part = 96 ÷ 12 = 8 treats.",
        "Brownies = 2 × 8 = 16."
      ],
      explanation: [
        "Total parts = 3 + 2 + 7 = 12. Each part = 96 ÷ 12 = 8.",
        "Brownies = 2 × 8 = 16."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A wire is cut into two pieces in an 8 : 3 ratio. If the total wire is 77 cm, how long is the shorter piece?',
      choices: ["21 cm", "24 cm", "33 cm", "28 cm"],
      answer: "21 cm",
      hints: [
        "Total parts = 8 + 3 = 11.",
        "Each part = 77 ÷ 11 = 7 cm.",
        "Shorter piece = 3 × 7 = 21 cm."
      ],
      explanation: [
        "Total parts = 8 + 3 = 11. Each part = 77 ÷ 11 = 7.",
        "Shorter piece = 3 × 7 = 21 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'On a map, the scale is 1 inch = 50 miles. Two cities are 3.5 inches apart on the map. What is the actual distance in miles?',
      answer: "175",
      hints: [
        "Multiply the map distance by the scale factor.",
        "3.5 × 50 = ?",
        "3.5 × 50 = 175."
      ],
      explanation: [
        "Actual distance = 3.5 × 50 = <strong>175 miles</strong>.",
        "The cities are 175 miles apart."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 4 feet. A room measures 6.5 cm on the blueprint. What is the actual length of the room?',
      choices: ["26 feet", "24 feet", "28 feet", "30 feet"],
      answer: "26 feet",
      hints: [
        "Multiply the blueprint measurement by the scale factor.",
        "6.5 × 4 = ?",
        "6.5 × 4 = 26."
      ],
      explanation: [
        "Actual length = 6.5 × 4 = <strong>26 feet</strong>.",
        "The room is 26 feet long."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A park map uses a scale of 1 inch = 200 feet. The lake on the map is 4.25 inches long. What is the actual length of the lake?',
      choices: ["850 feet", "800 feet", "900 feet", "825 feet"],
      answer: "850 feet",
      hints: [
        "Multiply the map distance by the scale.",
        "4.25 × 200 = ?",
        "4.25 × 200 = 850."
      ],
      explanation: [
        "Actual length = 4.25 × 200 = <strong>850 feet</strong>.",
        "The lake is 850 feet long."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 7: Rate Problems — d = r × t (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A cyclist rides at 15 miles per hour for 4 hours. How many miles does the cyclist travel?',
      answer: "60",
      hints: [
        "Use the formula: distance = rate × time.",
        "d = 15 × 4.",
        "d = 60 miles."
      ],
      explanation: [
        "d = r × t = 15 × 4 = 60.",
        "The cyclist travels 60 miles."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A train travels 240 miles in 4 hours. What is its speed?',
      choices: ["60 mph", "80 mph", "50 mph", "70 mph"],
      answer: "60 mph",
      hints: [
        "Speed = distance ÷ time.",
        "240 ÷ 4 = ?",
        "240 ÷ 4 = 60."
      ],
      explanation: [
        "r = d ÷ t = 240 ÷ 4 = 60.",
        "The train travels at 60 mph."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A boat travels at 18 mph. How many hours does it take to travel 135 miles?',
      answer: "7.5",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 135 ÷ 18.",
        "t = 7.5 hours."
      ],
      explanation: [
        "t = d ÷ r = 135 ÷ 18 = 7.5.",
        "It takes 7.5 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A plane flies 2,400 miles in 5 hours. How far does it fly in 3 hours at the same speed?',
      choices: ["1,440 miles", "1,200 miles", "1,600 miles", "800 miles"],
      answer: "1,440 miles",
      hints: [
        "First find the speed: 2400 ÷ 5 = 480 mph.",
        "Then d = 480 × 3.",
        "d = 1440 miles."
      ],
      explanation: [
        "Speed = 2400 ÷ 5 = 480 mph.",
        "Distance in 3 hours = 480 × 3 = 1,440 miles."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'You walk at 3 miles per hour for 2.5 hours. How many miles do you walk? Enter as a decimal.',
      answer: "7.5",
      hints: [
        "d = r × t.",
        "d = 3 × 2.5.",
        "d = 7.5 miles."
      ],
      explanation: [
        "d = 3 × 2.5 = 7.5.",
        "You walk 7.5 miles."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two runners start at the same point. Runner A goes north at 6 mph and Runner B goes south at 4 mph. How far apart are they after 3 hours?',
      choices: ["30 miles", "18 miles", "24 miles", "12 miles"],
      answer: "30 miles",
      hints: [
        "Runner A: d = 6 × 3 = 18 miles.",
        "Runner B: d = 4 × 3 = 12 miles.",
        "They move in opposite directions: 18 + 12 = 30."
      ],
      explanation: [
        "Runner A: 6 × 3 = 18 miles north.",
        "Runner B: 4 × 3 = 12 miles south.",
        "Total apart = 18 + 12 = 30 miles."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A bus travels at 45 mph for 3 hours, then 55 mph for 2 hours. What is the total distance in miles?',
      answer: "245",
      hints: [
        "First segment: d = 45 × 3 = 135 miles.",
        "Second segment: d = 55 × 2 = 110 miles.",
        "Total = 135 + 110 = 245."
      ],
      explanation: [
        "Segment 1: 45 × 3 = 135 miles.",
        "Segment 2: 55 × 2 = 110 miles.",
        "Total distance = 135 + 110 = 245 miles."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A delivery truck travels 210 miles at 60 mph. How many hours does the trip take? Enter as a decimal.',
      answer: "3.5",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 210 ÷ 60.",
        "t = 3.5 hours."
      ],
      explanation: [
        "t = d ÷ r = 210 ÷ 60 = 3.5.",
        "The trip takes 3.5 hours."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A jogger runs at 5 mph for 3 hours. How far does the jogger run?',
      choices: ["15 miles", "10 miles", "20 miles", "8 miles"],
      answer: "15 miles",
      hints: [
        "Use: distance = rate × time.",
        "d = 5 × 3.",
        "d = 15 miles."
      ],
      explanation: [
        "d = r × t = 5 × 3 = 15.",
        "The jogger runs 15 miles."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A helicopter flies 360 miles at 90 mph. How many hours does the trip take?',
      answer: "4",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 360 ÷ 90.",
        "t = 4 hours."
      ],
      explanation: [
        "t = d ÷ r = 360 ÷ 90 = 4.",
        "The trip takes 4 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A car drives 50 mph for 2 hours, then 40 mph for 3 hours. What is the total distance?',
      choices: ["220 miles", "200 miles", "250 miles", "180 miles"],
      answer: "220 miles",
      hints: [
        "First segment: d = 50 × 2 = 100 miles.",
        "Second segment: d = 40 × 3 = 120 miles.",
        "Total = 100 + 120 = 220."
      ],
      explanation: [
        "Segment 1: 50 × 2 = 100 miles.",
        "Segment 2: 40 × 3 = 120 miles.",
        "Total distance = 100 + 120 = 220 miles."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A scooter travels at 25 miles per hour for 3 hours. How many miles does it cover?',
      answer: "75",
      hints: [
        "Use the formula: distance = rate × time.",
        "d = 25 × 3.",
        "d = 75 miles."
      ],
      explanation: [
        "d = r × t = 25 × 3 = 75.",
        "The scooter covers 75 miles."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A ship sails 280 miles at 40 mph. How long does the trip take?',
      choices: ["7 hours", "6 hours", "8 hours", "5 hours"],
      answer: "7 hours",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 280 ÷ 40.",
        "t = 7 hours."
      ],
      explanation: [
        "t = d ÷ r = 280 ÷ 40 = 7.",
        "The trip takes 7 hours."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A car travels 65 mph for 2 hours, then 55 mph for 3 hours. What is the total distance in miles?',
      answer: "295",
      hints: [
        "First segment: d = 65 × 2 = 130 miles.",
        "Second segment: d = 55 × 3 = 165 miles.",
        "Total = 130 + 165 = 295."
      ],
      explanation: [
        "Segment 1: 65 × 2 = 130 miles.",
        "Segment 2: 55 × 3 = 165 miles.",
        "Total distance = 130 + 165 = 295 miles."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A train travels at 80 mph for 3 hours. How far does the train go?',
      choices: ["240 miles", "200 miles", "160 miles", "280 miles"],
      answer: "240 miles",
      hints: [
        "Use: distance = rate × time.",
        "d = 80 × 3.",
        "d = 240 miles."
      ],
      explanation: [
        "d = r × t = 80 × 3 = 240.",
        "The train travels 240 miles."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A plane flies 1,800 miles at 450 mph. How many hours does the flight take?',
      answer: "4",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 1800 ÷ 450.",
        "t = 4 hours."
      ],
      explanation: [
        "t = d ÷ r = 1800 ÷ 450 = 4.",
        "The flight takes 4 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two cyclists start from the same point. One rides east at 12 mph and the other rides west at 8 mph. How far apart are they after 2 hours?',
      choices: ["40 miles", "24 miles", "32 miles", "16 miles"],
      answer: "40 miles",
      hints: [
        "Cyclist 1: d = 12 × 2 = 24 miles.",
        "Cyclist 2: d = 8 × 2 = 16 miles.",
        "They move in opposite directions: 24 + 16 = 40."
      ],
      explanation: [
        "Cyclist 1: 12 × 2 = 24 miles east.",
        "Cyclist 2: 8 × 2 = 16 miles west.",
        "Total apart = 24 + 16 = 40 miles."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A biker rides at 20 miles per hour for 3.5 hours. How many miles does the biker travel?',
      answer: "70",
      hints: [
        "Use the formula: distance = rate × time.",
        "d = 20 × 3.5.",
        "d = 70 miles."
      ],
      explanation: [
        "d = r × t = 20 × 3.5 = 70.",
        "The biker travels 70 miles."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A ferry travels 168 miles at 24 mph. How long does the trip take?',
      choices: ["7 hours", "6 hours", "8 hours", "5 hours"],
      answer: "7 hours",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 168 ÷ 24.",
        "t = 7 hours."
      ],
      explanation: [
        "t = d ÷ r = 168 ÷ 24 = 7.",
        "The trip takes 7 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A van drives 35 mph for 4 hours, then 50 mph for 2 hours. What is the total distance?',
      choices: ["240 miles", "220 miles", "260 miles", "200 miles"],
      answer: "240 miles",
      hints: [
        "First segment: d = 35 × 4 = 140 miles.",
        "Second segment: d = 50 × 2 = 100 miles.",
        "Total = 140 + 100 = 240."
      ],
      explanation: [
        "Segment 1: 35 × 4 = 140 miles.",
        "Segment 2: 50 × 2 = 100 miles.",
        "Total distance = 140 + 100 = 240 miles."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'A car drives at 55 mph for 4 hours. How far does it travel?',
      choices: ["220 miles", "200 miles", "240 miles", "180 miles"],
      answer: "220 miles",
      hints: [
        "Use: distance = rate × time.",
        "d = 55 × 4.",
        "d = 220 miles."
      ],
      explanation: [
        "d = r × t = 55 × 4 = 220.",
        "The car travels 220 miles."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A sailboat covers 117 miles at 18 mph. How many hours does the trip take? Enter as a decimal.',
      answer: "6.5",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 117 ÷ 18.",
        "t = 6.5 hours."
      ],
      explanation: [
        "t = d ÷ r = 117 ÷ 18 = 6.5.",
        "The trip takes 6.5 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A truck drives 45 mph for 3 hours, then 60 mph for 2 hours. What is the total distance?',
      choices: ["255 miles", "240 miles", "270 miles", "225 miles"],
      answer: "255 miles",
      hints: [
        "First segment: d = 45 × 3 = 135 miles.",
        "Second segment: d = 60 × 2 = 120 miles.",
        "Total = 135 + 120 = 255."
      ],
      explanation: [
        "Segment 1: 45 × 3 = 135 miles.",
        "Segment 2: 60 × 2 = 120 miles.",
        "Total distance = 135 + 120 = 255 miles."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'A kayaker paddles at 8 miles per hour for 3.5 hours. How many miles does the kayaker travel?',
      answer: "28",
      hints: [
        'Use the formula: distance = rate \u00d7 time.',
        'd = 8 \u00d7 3.5.',
        'd = 28 miles.'
      ],
      explanation: [
        'd = r \u00d7 t = 8 \u00d7 3.5 = 28.',
        'The kayaker travels 28 miles.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A bus travels 195 miles at 30 mph. How long does the trip take?',
      choices: ["6.5 hours", "6 hours", "7 hours", "5.5 hours"],
      answer: "6.5 hours",
      hints: [
        'Use: time = distance \u00f7 rate.',
        't = 195 \u00f7 30.',
        't = 6.5 hours.'
      ],
      explanation: [
        't = d \u00f7 r = 195 \u00f7 30 = 6.5.',
        'The trip takes 6.5 hours.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A car drives 70 mph for 2 hours, then 50 mph for 4 hours. What is the total distance?',
      choices: ["340 miles", "320 miles", "360 miles", "300 miles"],
      answer: "340 miles",
      hints: [
        'First segment: d = 70 \u00d7 2 = 140 miles.',
        'Second segment: d = 50 \u00d7 4 = 200 miles.',
        'Total = 140 + 200 = 340.'
      ],
      explanation: [
        'Segment 1: 70 \u00d7 2 = 140 miles.',
        'Segment 2: 50 \u00d7 4 = 200 miles.',
        'Total distance = 140 + 200 = 340 miles.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A bus travels at 45 mph for 4 hours. How many miles does it cover?',
      answer: "180",
      hints: [
        'Use d = r \u00d7 t.',
        'd = 45 \u00d7 4.',
        'd = 180 miles.'
      ],
      explanation: [
        'Distance = 45 \u00d7 4 = 180 miles.',
        'The bus covers 180 miles.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A cyclist rides 84 miles in 3.5 hours. What is the average speed?',
      choices: ["24 mph", "28 mph", "22 mph", "30 mph"],
      answer: "24 mph",
      hints: [
        'Speed = distance \u00f7 time.',
        '84 \u00f7 3.5 = ?',
        '84 \u00f7 3.5 = 24 mph.'
      ],
      explanation: [
        'Speed = 84 \u00f7 3.5 = 24 mph.',
        'The cyclist\u2019s average speed is 24 mph.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A train travels at 90 km/hr. How many hours does it take to travel 405 km?',
      answer: "4.5",
      hints: [
        'Use t = d \u00f7 r.',
        't = 405 \u00f7 90.',
        '405 \u00f7 90 = 4.5 hours.'
      ],
      explanation: [
        'Time = 405 \u00f7 90 = 4.5 hours.',
        'The train takes 4.5 hours.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A jogger runs at 6 miles per hour for 2.5 hours. How many miles does the jogger run?',
      answer: "15",
      hints: [
        "Use d = r × t.",
        "d = 6 × 2.5.",
        "d = 15 miles."
      ],
      explanation: [
        "d = r × t = 6 × 2.5 = 15.",
        "The jogger runs 15 miles."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A boat travels 252 miles at 36 mph. How long does the trip take?',
      choices: ["7 hours", "6 hours", "8 hours", "9 hours"],
      answer: "7 hours",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 252 ÷ 36.",
        "t = 7 hours."
      ],
      explanation: [
        "t = d ÷ r = 252 ÷ 36 = 7.",
        "The trip takes 7 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A truck drives 40 mph for 3 hours, then 65 mph for 2 hours. What is the total distance?',
      choices: ["250 miles", "240 miles", "260 miles", "230 miles"],
      answer: "250 miles",
      hints: [
        "First segment: d = 40 × 3 = 120 miles.",
        "Second segment: d = 65 × 2 = 130 miles.",
        "Total = 120 + 130 = 250."
      ],
      explanation: [
        "Segment 1: 40 × 3 = 120 miles.",
        "Segment 2: 65 × 2 = 130 miles.",
        "Total distance = 120 + 130 = 250 miles."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A runner jogs at 8 miles per hour for 3 hours. How many miles does the runner cover?',
      answer: "24",
      hints: [
        "Use d = r × t.",
        "d = 8 × 3.",
        "d = 24 miles."
      ],
      explanation: [
        "d = r × t = 8 × 3 = 24.",
        "The runner covers 24 miles."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A plane flies 2,100 miles at 350 mph. How long does the flight take?',
      choices: ["6 hours", "5 hours", "7 hours", "8 hours"],
      answer: "6 hours",
      hints: [
        "Use: time = distance ÷ rate.",
        "t = 2100 ÷ 350.",
        "t = 6 hours."
      ],
      explanation: [
        "t = d ÷ r = 2100 ÷ 350 = 6.",
        "The flight takes 6 hours."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A van drives 55 mph for 3 hours, then 40 mph for 2 hours. What is the total distance?',
      choices: ["245 miles", "260 miles", "230 miles", "250 miles"],
      answer: "245 miles",
      hints: [
        "First segment: d = 55 × 3 = 165 miles.",
        "Second segment: d = 40 × 2 = 80 miles.",
        "Total = 165 + 80 = 245."
      ],
      explanation: [
        "Segment 1: 55 × 3 = 165 miles.",
        "Segment 2: 40 × 2 = 80 miles.",
        "Total distance = 165 + 80 = 245 miles."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Two similar triangles have corresponding sides in the ratio 6 : 9. If one side of the smaller triangle is 8 cm, what is the corresponding side of the larger triangle?',
      answer: "12",
      hints: [
        "Set up the proportion: 6/9 = 8/x.",
        "Cross multiply: 6x = 9 × 8 = 72.",
        "x = 72 ÷ 6 = 12."
      ],
      explanation: [
        "The ratio is 6 : 9, which simplifies to 2 : 3.",
        "8 × (3/2) = <strong>12 cm</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two similar rectangles have widths of 5 in and 15 in. If the length of the smaller rectangle is 7 in, what is the length of the larger?',
      choices: ["21 in", "17 in", "25 in", "35 in"],
      answer: "21 in",
      hints: [
        "Find the scale factor: 15 ÷ 5 = 3.",
        "Multiply the smaller length by the scale factor.",
        "7 × 3 = 21."
      ],
      explanation: [
        "Scale factor = 15 ÷ 5 = <strong>3</strong>.",
        "Larger length = 7 × 3 = <strong>21 in</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A flagpole casts a 24-foot shadow. At the same time, a 5-foot person casts a 4-foot shadow. How tall is the flagpole in feet?',
      answer: "30",
      hints: [
        "Set up a proportion: height/shadow = height/shadow.",
        "5/4 = x/24.",
        "x = 5 × 24 ÷ 4 = 30."
      ],
      explanation: [
        "Proportion: 5/4 = x/24. Cross multiply: 4x = 120.",
        "x = 120 ÷ 4 = <strong>30 feet</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 8: Scale Factors — maps, models (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'On a map, 1 inch represents 5 miles. If two cities are 8 inches apart on the map, what is the actual distance?',
      choices: ["40 miles", "35 miles", "45 miles", "50 miles"],
      answer: "40 miles",
      hints: [
        "Multiply the map distance by the scale.",
        "8 × 5 = ?",
        "8 × 5 = 40 miles."
      ],
      explanation: [
        "Actual distance = 8 inches × 5 miles/inch = 40 miles.",
        "The cities are 40 miles apart."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A model car has a scale of 1 : 24. If the real car is 12 feet long, how many inches long is the model? (12 feet = 144 inches)',
      answer: "6",
      hints: [
        "Convert: 12 feet = 144 inches.",
        "Divide by the scale factor: 144 ÷ 24.",
        "144 ÷ 24 = 6 inches."
      ],
      explanation: [
        "Real car = 144 inches.",
        "Model = 144 ÷ 24 = 6 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 4 meters. A room is 3.5 cm on the blueprint. What is the actual length?',
      choices: ["14 meters", "12 meters", "16 meters", "10 meters"],
      answer: "14 meters",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "3.5 × 4 = ?",
        "3.5 × 4 = 14 meters."
      ],
      explanation: [
        "Actual length = 3.5 cm × 4 m/cm = 14 meters.",
        "The room is 14 meters long."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'On a map, 2 inches represent 30 miles. How many miles does 7 inches represent?',
      answer: "105",
      hints: [
        "Find miles per inch: 30 ÷ 2 = 15 miles per inch.",
        "Multiply: 7 × 15 = ?",
        "7 × 15 = 105."
      ],
      explanation: [
        "Scale: 30 ÷ 2 = 15 miles per inch.",
        "7 inches × 15 miles/inch = 105 miles."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A doll house is built at a 1 : 12 scale. If a real door is 84 inches tall, how tall is the doll house door?',
      choices: ["7 inches", "6 inches", "8 inches", "12 inches"],
      answer: "7 inches",
      hints: [
        "Divide the real size by the scale factor.",
        "84 ÷ 12 = ?",
        "84 ÷ 12 = 7 inches."
      ],
      explanation: [
        "Doll house door = 84 ÷ 12 = 7 inches.",
        "The miniature door is 7 inches tall."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'On a map, 3 cm represents 75 km. How many km does 5 cm represent?',
      answer: "125",
      hints: [
        "Find km per cm: 75 ÷ 3 = 25 km per cm.",
        "Multiply: 5 × 25 = ?",
        "5 × 25 = 125."
      ],
      explanation: [
        "Scale: 75 ÷ 3 = 25 km per cm.",
        "5 cm × 25 km/cm = 125 km."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A model airplane has a scale of 1 : 48. If the real wingspan is 96 feet, what is the model wingspan in feet?',
      choices: ["2 feet", "4 feet", "3 feet", "1.5 feet"],
      answer: "2 feet",
      hints: [
        "Divide the real size by the scale factor.",
        "96 ÷ 48 = ?",
        "96 ÷ 48 = 2 feet."
      ],
      explanation: [
        "Model wingspan = 96 ÷ 48 = 2 feet.",
        "The model airplane has a 2-foot wingspan."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A blueprint uses a scale where 1 inch = 8 feet. A hallway is 4.5 inches on the blueprint. What is the actual length in feet?',
      answer: "36",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "4.5 × 8 = ?",
        "4.5 × 8 = 36 feet."
      ],
      explanation: [
        "Actual length = 4.5 inches × 8 feet/inch = 36 feet.",
        "The hallway is 36 feet long."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'On a map, 4 inches represents 50 miles. How many miles does 6 inches represent?',
      answer: "75",
      hints: [
        "Find miles per inch: 50 ÷ 4 = 12.5 miles per inch.",
        "Multiply: 6 × 12.5 = ?",
        "6 × 12.5 = 75."
      ],
      explanation: [
        "Scale: 50 ÷ 4 = 12.5 miles per inch.",
        "6 inches × 12.5 miles/inch = 75 miles."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A model train has a scale of 1 : 64. If the real train is 64 feet long, how long is the model?',
      choices: ["1 foot", "2 feet", "4 feet", "0.5 feet"],
      answer: "1 foot",
      hints: [
        "Divide the real size by the scale factor.",
        "64 ÷ 64 = ?",
        "64 ÷ 64 = 1 foot."
      ],
      explanation: [
        "Model length = 64 ÷ 64 = 1 foot.",
        "The model train is 1 foot long."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 6 meters. A wall is 2.5 cm on the blueprint. What is the actual length?',
      choices: ["15 meters", "12 meters", "18 meters", "10 meters"],
      answer: "15 meters",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "2.5 × 6 = ?",
        "2.5 × 6 = 15 meters."
      ],
      explanation: [
        "Actual length = 2.5 cm × 6 m/cm = 15 meters.",
        "The wall is 15 meters long."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'On a map, 1 inch represents 10 miles. If two towns are 6 inches apart on the map, what is the actual distance in miles?',
      answer: "60",
      hints: [
        "Multiply the map distance by the scale.",
        "6 × 10 = ?",
        "6 × 10 = 60 miles."
      ],
      explanation: [
        "Actual distance = 6 inches × 10 miles/inch = 60 miles.",
        "The towns are 60 miles apart."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A model building has a scale of 1 : 50. If the real building is 150 feet tall, how tall is the model?',
      choices: ["3 feet", "5 feet", "2 feet", "30 feet"],
      answer: "3 feet",
      hints: [
        "Divide the real size by the scale factor.",
        "150 ÷ 50 = ?",
        "150 ÷ 50 = 3 feet."
      ],
      explanation: [
        "Model height = 150 ÷ 50 = 3 feet.",
        "The model building is 3 feet tall."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'On a map, 5 cm represents 80 km. How many km does 3 cm represent?',
      answer: "48",
      hints: [
        "Find km per cm: 80 ÷ 5 = 16 km per cm.",
        "Multiply: 3 × 16 = ?",
        "3 × 16 = 48."
      ],
      explanation: [
        "Scale: 80 ÷ 5 = 16 km per cm.",
        "3 cm × 16 km/cm = 48 km."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A model ship has a scale of 1 : 100. If the real ship is 200 feet long, how long is the model?',
      choices: ["2 feet", "20 feet", "0.5 feet", "5 feet"],
      answer: "2 feet",
      hints: [
        "Divide the real size by the scale factor.",
        "200 ÷ 100 = ?",
        "200 ÷ 100 = 2 feet."
      ],
      explanation: [
        "Model length = 200 ÷ 100 = 2 feet.",
        "The model ship is 2 feet long."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'On a map, 3 inches represent 45 miles. How many miles does 8 inches represent?',
      answer: "120",
      hints: [
        "Find miles per inch: 45 ÷ 3 = 15 miles per inch.",
        "Multiply: 8 × 15 = ?",
        "8 × 15 = 120."
      ],
      explanation: [
        "Scale: 45 ÷ 3 = 15 miles per inch.",
        "8 inches × 15 miles/inch = 120 miles."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 5 meters. A building is 4.5 cm on the blueprint. What is the actual length?',
      choices: ["22.5 meters", "20 meters", "25 meters", "9 meters"],
      answer: "22.5 meters",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "4.5 × 5 = ?",
        "4.5 × 5 = 22.5 meters."
      ],
      explanation: [
        "Actual length = 4.5 cm × 5 m/cm = 22.5 meters.",
        "The building is 22.5 meters long."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'On a map, 1 inch represents 15 miles. If two towns are 7 inches apart, what is the actual distance?',
      choices: ["105 miles", "95 miles", "110 miles", "120 miles"],
      answer: "105 miles",
      hints: [
        "Multiply the map distance by the scale.",
        "7 × 15 = ?",
        "7 × 15 = 105 miles."
      ],
      explanation: [
        "Actual distance = 7 inches × 15 miles/inch = 105 miles.",
        "The towns are 105 miles apart."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'On a map, 6 cm represents 90 km. How many km does 4 cm represent?',
      answer: "60",
      hints: [
        "Find km per cm: 90 ÷ 6 = 15 km per cm.",
        "Multiply: 4 × 15 = ?",
        "4 × 15 = 60."
      ],
      explanation: [
        "Scale: 90 ÷ 6 = 15 km per cm.",
        "4 cm × 15 km/cm = 60 km."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A model house has a scale of 1 : 36. If a real room is 18 feet long, how many inches is it on the model? (18 ft = 216 in)',
      choices: ["6 inches", "5 inches", "8 inches", "4 inches"],
      answer: "6 inches",
      hints: [
        "Convert: 18 feet = 216 inches.",
        "Divide by the scale factor: 216 ÷ 36.",
        "216 ÷ 36 = 6 inches."
      ],
      explanation: [
        "Real room = 216 inches.",
        "Model = 216 ÷ 36 = 6 inches."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'On a map, 1 inch represents 20 miles. If two cities are 9 inches apart on the map, what is the actual distance in miles?',
      answer: "180",
      hints: [
        "Multiply the map distance by the scale.",
        "9 × 20 = ?",
        "9 × 20 = 180 miles."
      ],
      explanation: [
        "Actual distance = 9 inches × 20 miles/inch = 180 miles.",
        "The cities are 180 miles apart."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 3 meters. A pool is 8.5 cm on the blueprint. What is the actual length?',
      choices: ["25.5 meters", "24 meters", "27 meters", "11.5 meters"],
      answer: "25.5 meters",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "8.5 × 3 = ?",
        "8.5 × 3 = 25.5 meters."
      ],
      explanation: [
        "Actual length = 8.5 cm × 3 m/cm = 25.5 meters.",
        "The pool is 25.5 meters long."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A model statue has a scale of 1 : 40. If the real statue is 200 feet tall, how tall is the model?',
      choices: ["5 feet", "4 feet", "8 feet", "10 feet"],
      answer: "5 feet",
      hints: [
        "Divide the real size by the scale factor.",
        "200 ÷ 40 = ?",
        "200 ÷ 40 = 5 feet."
      ],
      explanation: [
        "Model height = 200 ÷ 40 = 5 feet.",
        "The model statue is 5 feet tall."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'On a map, 1 inch represents 25 miles. If two cities are 5 inches apart on the map, what is the actual distance in miles?',
      answer: "125",
      hints: [
        'Multiply the map distance by the scale.',
        '5 \u00d7 25 = ?',
        '5 \u00d7 25 = 125 miles.'
      ],
      explanation: [
        'Actual distance = 5 inches \u00d7 25 miles/inch = 125 miles.',
        'The cities are 125 miles apart.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A model rocket has a scale of 1 : 30. If the real rocket is 90 feet tall, how tall is the model?',
      choices: ["3 feet", "2 feet", "4 feet", "6 feet"],
      answer: "3 feet",
      hints: [
        'Divide the real size by the scale factor.',
        '90 \u00f7 30 = ?',
        '90 \u00f7 30 = 3 feet.'
      ],
      explanation: [
        'Model height = 90 \u00f7 30 = 3 feet.',
        'The model rocket is 3 feet tall.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 7 meters. A garage is 3.5 cm on the blueprint. What is the actual length?',
      choices: ["24.5 meters", "21 meters", "28 meters", "10.5 meters"],
      answer: "24.5 meters",
      hints: [
        'Multiply the blueprint measurement by the scale.',
        '3.5 \u00d7 7 = ?',
        '3.5 \u00d7 7 = 24.5 meters.'
      ],
      explanation: [
        'Actual length = 3.5 cm \u00d7 7 m/cm = 24.5 meters.',
        'The garage is 24.5 meters long.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'On a map, 1 cm represents 50 km. Two cities are 4.5 cm apart on the map. What is the actual distance?',
      choices: ["225 km", "200 km", "250 km", "180 km"],
      answer: "225 km",
      hints: [
        'Actual distance = map distance \u00d7 scale factor.',
        '4.5 \u00d7 50 = ?',
        '4.5 \u00d7 50 = 225 km.'
      ],
      explanation: [
        'Actual distance = 4.5 cm \u00d7 50 km/cm = 225 km.',
        'The two cities are 225 km apart.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A model car is built at a scale of 1 : 24. If the model is 7.5 inches long, how long is the real car in inches?',
      answer: "180",
      hints: [
        'Real length = model length \u00d7 scale factor.',
        '7.5 \u00d7 24 = ?',
        '7.5 \u00d7 24 = 180 inches.'
      ],
      explanation: [
        'Real car length = 7.5 \u00d7 24 = 180 inches.',
        'The real car is 180 inches long.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 inch = 8 feet. A room is 2.25 inches wide on the blueprint. What is the actual width?',
      choices: ["18 feet", "16 feet", "20 feet", "14 feet"],
      answer: "18 feet",
      hints: [
        'Actual width = blueprint width \u00d7 8.',
        '2.25 \u00d7 8 = ?',
        '2.25 \u00d7 8 = 18 feet.'
      ],
      explanation: [
        'Actual width = 2.25 inches \u00d7 8 feet/inch = 18 feet.',
        'The room is 18 feet wide.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'On a map, 1 inch represents 30 miles. If two cities are 6 inches apart, what is the actual distance in miles?',
      answer: "180",
      hints: [
        "Multiply the map distance by the scale.",
        "6 × 30 = ?",
        "6 × 30 = 180 miles."
      ],
      explanation: [
        "Actual distance = 6 inches × 30 miles/inch = 180 miles.",
        "The cities are 180 miles apart."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A model bridge has a scale of 1 : 60. If the real bridge is 300 feet long, how long is the model?',
      choices: ["5 feet", "6 feet", "4 feet", "10 feet"],
      answer: "5 feet",
      hints: [
        "Divide the real size by the scale factor.",
        "300 ÷ 60 = ?",
        "300 ÷ 60 = 5 feet."
      ],
      explanation: [
        "Model length = 300 ÷ 60 = 5 feet.",
        "The model bridge is 5 feet long."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 9 meters. A hallway is 4 cm on the blueprint. What is the actual length?',
      choices: ["36 meters", "32 meters", "45 meters", "27 meters"],
      answer: "36 meters",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "4 × 9 = ?",
        "4 × 9 = 36 meters."
      ],
      explanation: [
        "Actual length = 4 cm × 9 m/cm = 36 meters.",
        "The hallway is 36 meters long."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'On a map, 1 inch represents 12 miles. If two cities are 11 inches apart on the map, what is the actual distance in miles?',
      answer: "132",
      hints: [
        "Multiply the map distance by the scale.",
        "11 × 12 = ?",
        "11 × 12 = 132 miles."
      ],
      explanation: [
        "Actual distance = 11 inches × 12 miles/inch = 132 miles.",
        "The cities are 132 miles apart."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A model tower has a scale of 1 : 75. If the real tower is 225 feet tall, how tall is the model?',
      choices: ["3 feet", "4 feet", "5 feet", "2 feet"],
      answer: "3 feet",
      hints: [
        "Divide the real size by the scale factor.",
        "225 ÷ 75 = ?",
        "225 ÷ 75 = 3 feet."
      ],
      explanation: [
        "Model height = 225 ÷ 75 = 3 feet.",
        "The model tower is 3 feet tall."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A blueprint uses a scale of 1 cm = 11 meters. A fence is 5.5 cm on the blueprint. What is the actual length?',
      choices: ["60.5 meters", "55 meters", "66 meters", "44 meters"],
      answer: "60.5 meters",
      hints: [
        "Multiply the blueprint measurement by the scale.",
        "5.5 × 11 = ?",
        "5.5 × 11 = 60.5 meters."
      ],
      explanation: [
        "Actual length = 5.5 cm × 11 m/cm = 60.5 meters.",
        "The fence is 60.5 meters long."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'If 5 notebooks cost $8.75, how much do 12 notebooks cost? Enter the dollar amount (no $ sign).',
      answer: "21",
      hints: [
        "Find the cost of one notebook first: $8.75 ÷ 5.",
        "$8.75 ÷ 5 = $1.75 per notebook.",
        "$1.75 × 12 = $21.00."
      ],
      explanation: [
        "Unit price = $8.75 ÷ 5 = <strong>$1.75</strong>.",
        "12 notebooks cost $1.75 × 12 = <strong>$21</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A recipe calls for 3 cups of rice to serve 8 people. How many cups are needed to serve 20 people?',
      choices: ["7.5 cups", "6 cups", "8 cups", "9 cups"],
      answer: "7.5 cups",
      hints: [
        "Set up a proportion: 3/8 = x/20.",
        "Cross multiply: 8x = 60.",
        "x = 60 ÷ 8 = 7.5."
      ],
      explanation: [
        "Proportion: 3/8 = x/20. Cross multiply: 8x = 60.",
        "x = 60 ÷ 8 = <strong>7.5 cups</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A machine produces 45 parts in 15 minutes. At this rate, how many parts will it produce in 40 minutes?',
      choices: ["120 parts", "135 parts", "100 parts", "90 parts"],
      answer: "120 parts",
      hints: [
        "Find the unit rate: 45 ÷ 15 = 3 parts per minute.",
        "Multiply by the new time: 3 × 40.",
        "3 × 40 = 120."
      ],
      explanation: [
        "Rate = 45 ÷ 15 = <strong>3 parts/min</strong>.",
        "In 40 minutes: 3 × 40 = <strong>120 parts</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 9: Multi-step Conversions (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 2 miles to feet. <span class="math">(1 \\text{ mile} = 5{,}280 \\text{ ft})</span>',
      answer: "10560",
      hints: [
        "Multiply miles by 5,280.",
        "2 × 5,280 = ?",
        "2 × 5,280 = 10,560."
      ],
      explanation: [
        "2 miles × 5,280 feet/mile = 10,560 feet.",
        "2 miles equals 10,560 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many seconds are in 3 hours?',
      choices: ["10,800", "3,600", "7,200", "1,800"],
      answer: "10,800",
      hints: [
        "First convert hours to minutes: 3 × 60 = 180 minutes.",
        "Then convert minutes to seconds: 180 × 60.",
        "180 × 60 = 10,800."
      ],
      explanation: [
        "3 hours × 60 min/hr = 180 minutes.",
        "180 minutes × 60 sec/min = 10,800 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert 5 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "180",
      hints: [
        "First convert yards to feet: 5 × 3 = 15 feet.",
        "Then convert feet to inches: 15 × 12.",
        "15 × 12 = 180 inches."
      ],
      explanation: [
        "5 yards × 3 ft/yd = 15 feet.",
        "15 feet × 12 in/ft = 180 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many minutes are in 2 days?',
      choices: ["2,880", "1,440", "4,320", "720"],
      answer: "2,880",
      hints: [
        "Days → hours: 2 × 24 = 48 hours.",
        "Hours → minutes: 48 × 60.",
        "48 × 60 = 2,880."
      ],
      explanation: [
        "2 days × 24 hr/day = 48 hours.",
        "48 hours × 60 min/hr = 2,880 minutes."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert 3 miles to inches. <span class="math">(1 \\text{ mile} = 5{,}280 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "190080",
      hints: [
        "Miles → feet: 3 × 5,280 = 15,840 feet.",
        "Feet → inches: 15,840 × 12.",
        "15,840 × 12 = 190,080."
      ],
      explanation: [
        "3 miles × 5,280 ft/mile = 15,840 feet.",
        "15,840 feet × 12 in/ft = 190,080 inches."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 4 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "144",
      hints: [
        "First convert yards to feet: 4 × 3 = 12 feet.",
        "Then convert feet to inches: 12 × 12.",
        "12 × 12 = 144 inches."
      ],
      explanation: [
        "4 yards × 3 ft/yd = 12 feet.",
        "12 feet × 12 in/ft = 144 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 5 hours?',
      choices: ["18,000", "3,000", "30,000", "1,800"],
      answer: "18,000",
      hints: [
        "Hours → minutes: 5 × 60 = 300 minutes.",
        "Minutes → seconds: 300 × 60.",
        "300 × 60 = 18,000."
      ],
      explanation: [
        "5 hours × 60 min/hr = 300 minutes.",
        "300 minutes × 60 sec/min = 18,000 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many minutes are in half a week? <span class="math">(1 \\text{ week} = 7 \\text{ days})</span>',
      answer: "5040",
      hints: [
        "Half a week = 3.5 days.",
        "3.5 days × 24 hr/day = 84 hours.",
        "84 hours × 60 min/hr = 5,040 minutes."
      ],
      explanation: [
        "3.5 days × 24 = 84 hours.",
        "84 hours × 60 = 5,040 minutes."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many seconds are in 2 hours?',
      choices: ["7,200", "3,600", "1,200", "14,400"],
      answer: "7,200",
      hints: [
        "Hours → minutes: 2 × 60 = 120 minutes.",
        "Minutes → seconds: 120 × 60.",
        "120 × 60 = 7,200."
      ],
      explanation: [
        "2 hours × 60 min/hr = 120 minutes.",
        "120 minutes × 60 sec/min = 7,200 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert 7 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "252",
      hints: [
        "First convert yards to feet: 7 × 3 = 21 feet.",
        "Then convert feet to inches: 21 × 12.",
        "21 × 12 = 252 inches."
      ],
      explanation: [
        "7 yards × 3 ft/yd = 21 feet.",
        "21 feet × 12 in/ft = 252 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many minutes are in 3 days?',
      choices: ["4,320", "2,880", "1,440", "5,760"],
      answer: "4,320",
      hints: [
        "Days → hours: 3 × 24 = 72 hours.",
        "Hours → minutes: 72 × 60.",
        "72 × 60 = 4,320."
      ],
      explanation: [
        "3 days × 24 hr/day = 72 hours.",
        "72 hours × 60 min/hr = 4,320 minutes."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 3 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "108",
      hints: [
        "First convert yards to feet: 3 × 3 = 9 feet.",
        "Then convert feet to inches: 9 × 12.",
        "9 × 12 = 108 inches."
      ],
      explanation: [
        "3 yards × 3 ft/yd = 9 feet.",
        "9 feet × 12 in/ft = 108 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 4 hours?',
      choices: ["14,400", "7,200", "24,000", "3,600"],
      answer: "14,400",
      hints: [
        "Hours → minutes: 4 × 60 = 240 minutes.",
        "Minutes → seconds: 240 × 60.",
        "240 × 60 = 14,400."
      ],
      explanation: [
        "4 hours × 60 min/hr = 240 minutes.",
        "240 minutes × 60 sec/min = 14,400 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many minutes are in 5 days?',
      answer: "7200",
      hints: [
        "Days → hours: 5 × 24 = 120 hours.",
        "Hours → minutes: 120 × 60.",
        "120 × 60 = 7,200."
      ],
      explanation: [
        "5 days × 24 hr/day = 120 hours.",
        "120 hours × 60 min/hr = 7,200 minutes."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 1.5 hours?',
      choices: ["5,400", "3,600", "9,000", "5,000"],
      answer: "5,400",
      hints: [
        "Hours → minutes: 1.5 × 60 = 90 minutes.",
        "Minutes → seconds: 90 × 60.",
        "90 × 60 = 5,400."
      ],
      explanation: [
        "1.5 hours × 60 min/hr = 90 minutes.",
        "90 minutes × 60 sec/min = 5,400 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 6 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "216",
      hints: [
        "First convert yards to feet: 6 × 3 = 18 feet.",
        "Then convert feet to inches: 18 × 12.",
        "18 × 12 = 216 inches."
      ],
      explanation: [
        "6 yards × 3 ft/yd = 18 feet.",
        "18 feet × 12 in/ft = 216 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many minutes are in 4 days?',
      choices: ["5,760", "2,880", "4,320", "3,600"],
      answer: "5,760",
      hints: [
        "Days → hours: 4 × 24 = 96 hours.",
        "Hours → minutes: 96 × 60.",
        "96 × 60 = 5,760."
      ],
      explanation: [
        "4 days × 24 hr/day = 96 hours.",
        "96 hours × 60 min/hr = 5,760 minutes."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 8 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "288",
      hints: [
        "First convert yards to feet: 8 × 3 = 24 feet.",
        "Then convert feet to inches: 24 × 12.",
        "24 × 12 = 288 inches."
      ],
      explanation: [
        "8 yards × 3 ft/yd = 24 feet.",
        "24 feet × 12 in/ft = 288 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 6 hours?',
      choices: ["21,600", "36,000", "3,600", "7,200"],
      answer: "21,600",
      hints: [
        "Hours → minutes: 6 × 60 = 360 minutes.",
        "Minutes → seconds: 360 × 60.",
        "360 × 60 = 21,600."
      ],
      explanation: [
        "6 hours × 60 min/hr = 360 minutes.",
        "360 minutes × 60 sec/min = 21,600 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many minutes are in 6 days?',
      answer: "8640",
      hints: [
        "Days → hours: 6 × 24 = 144 hours.",
        "Hours → minutes: 144 × 60.",
        "144 × 60 = 8,640."
      ],
      explanation: [
        "6 days × 24 hr/day = 144 hours.",
        "144 hours × 60 min/hr = 8,640 minutes."
      ]
    }
  ,
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 8 hours?',
      choices: ["28,800", "48,000", "4,800", "14,400"],
      answer: "28,800",
      hints: [
        "Hours → minutes: 8 × 60 = 480 minutes.",
        "Minutes → seconds: 480 × 60.",
        "480 × 60 = 28,800."
      ],
      explanation: [
        "8 hours × 60 min/hr = 480 minutes.",
        "480 minutes × 60 sec/min = 28,800 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 10 yards to inches. <span class="math">(1 \text{ yd} = 3 \text{ ft}, \; 1 \text{ ft} = 12 \text{ in})</span>',
      answer: "360",
      hints: [
        "First convert yards to feet: 10 × 3 = 30 feet.",
        "Then convert feet to inches: 30 × 12.",
        "30 × 12 = 360 inches."
      ],
      explanation: [
        "10 yards × 3 ft/yd = 30 feet.",
        "30 feet × 12 in/ft = 360 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many minutes are in 1 week?',
      choices: ["10,080", "7,200", "14,400", "5,040"],
      answer: "10,080",
      hints: [
        "Days → hours: 7 × 24 = 168 hours.",
        "Hours → minutes: 168 × 60.",
        "168 × 60 = 10,080."
      ],
      explanation: [
        "7 days × 24 hr/day = 168 hours.",
        "168 hours × 60 min/hr = 10,080 minutes."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 9 yards to inches. <span class="math">(1 \\text{ yd} = 3 \\text{ ft}, \\; 1 \\text{ ft} = 12 \\text{ in})</span>',
      answer: "324",
      hints: [
        'First convert yards to feet: 9 \u00d7 3 = 27 feet.',
        'Then convert feet to inches: 27 \u00d7 12.',
        '27 \u00d7 12 = 324 inches.'
      ],
      explanation: [
        '9 yards \u00d7 3 ft/yd = 27 feet.',
        '27 feet \u00d7 12 in/ft = 324 inches.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 10 hours?',
      choices: ["36,000", "6,000", "60,000", "3,600"],
      answer: "36,000",
      hints: [
        'Hours \u2192 minutes: 10 \u00d7 60 = 600 minutes.',
        'Minutes \u2192 seconds: 600 \u00d7 60.',
        '600 \u00d7 60 = 36,000.'
      ],
      explanation: [
        '10 hours \u00d7 60 min/hr = 600 minutes.',
        '600 minutes \u00d7 60 sec/min = 36,000 seconds.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'How many minutes are in 10 days?',
      answer: "14400",
      hints: [
        'Days \u2192 hours: 10 \u00d7 24 = 240 hours.',
        'Hours \u2192 minutes: 240 \u00d7 60.',
        '240 \u00d7 60 = 14,400.'
      ],
      explanation: [
        '10 days \u00d7 24 hr/day = 240 hours.',
        '240 hours \u00d7 60 min/hr = 14,400 minutes.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 3 miles to feet. (1 mile = 5,280 feet)',
      answer: "15840",
      hints: [
        'Multiply miles by 5,280.',
        '3 \u00d7 5,280 = ?',
        '3 \u00d7 5,280 = 15,840.'
      ],
      explanation: [
        '3 miles \u00d7 5,280 feet/mile = 15,840 feet.',
        '3 miles equals 15,840 feet.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Convert 2.5 hours to seconds.',
      choices: ["9,000", "7,500", "10,000", "8,500"],
      answer: "9,000",
      hints: [
        'First convert hours to minutes: 2.5 \u00d7 60 = 150 minutes.',
        'Then convert minutes to seconds: 150 \u00d7 60.',
        '150 \u00d7 60 = 9,000 seconds.'
      ],
      explanation: [
        '2.5 hours \u00d7 60 min/hr = 150 minutes.',
        '150 minutes \u00d7 60 sec/min = 9,000 seconds.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A tank holds 7 gallons of water. How many cups is that? (1 gallon = 16 cups)',
      choices: ["112 cups", "96 cups", "128 cups", "104 cups"],
      answer: "112 cups",
      hints: [
        'Multiply gallons by 16.',
        '7 \u00d7 16 = ?',
        '7 \u00d7 16 = 112.'
      ],
      explanation: [
        '7 gallons \u00d7 16 cups/gallon = 112 cups.',
        'The tank holds 112 cups of water.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Convert 11 yards to inches. <span class="math">(1 \text{ yd} = 3 \text{ ft}, \; 1 \text{ ft} = 12 \text{ in})</span>',
      answer: "396",
      hints: [
        "First convert yards to feet: 11 × 3 = 33 feet.",
        "Then convert feet to inches: 33 × 12.",
        "33 × 12 = 396 inches."
      ],
      explanation: [
        "11 yards × 3 ft/yd = 33 feet.",
        "33 feet × 12 in/ft = 396 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 7 hours?',
      choices: ["25,200", "42,000", "4,200", "7,200"],
      answer: "25,200",
      hints: [
        "Hours → minutes: 7 × 60 = 420 minutes.",
        "Minutes → seconds: 420 × 60.",
        "420 × 60 = 25,200."
      ],
      explanation: [
        "7 hours × 60 min/hr = 420 minutes.",
        "420 minutes × 60 sec/min = 25,200 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 4 miles to feet. <span class="math">(1 \text{ mile} = 5{,}280 \text{ ft})</span>',
      answer: "21120",
      hints: [
        "Multiply miles by 5,280.",
        "4 × 5,280 = ?",
        "4 × 5,280 = 21,120."
      ],
      explanation: [
        "4 miles × 5,280 feet/mile = 21,120 feet.",
        "4 miles equals 21,120 feet."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many seconds are in 9 hours?',
      choices: ["32,400", "54,000", "5,400", "16,200"],
      answer: "32,400",
      hints: [
        "Hours → minutes: 9 × 60 = 540 minutes.",
        "Minutes → seconds: 540 × 60.",
        "540 × 60 = 32,400."
      ],
      explanation: [
        "9 hours × 60 min/hr = 540 minutes.",
        "540 minutes × 60 sec/min = 32,400 seconds."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 12 yards to inches. <span class="math">(1 \text{ yd} = 3 \text{ ft}, \; 1 \text{ ft} = 12 \text{ in})</span>',
      answer: "432",
      hints: [
        "First convert yards to feet: 12 × 3 = 36 feet.",
        "Then convert feet to inches: 36 × 12.",
        "36 × 12 = 432 inches."
      ],
      explanation: [
        "12 yards × 3 ft/yd = 36 feet.",
        "36 feet × 12 in/ft = 432 inches."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many minutes are in 8 days?',
      choices: ["11,520", "10,080", "12,960", "8,640"],
      answer: "11,520",
      hints: [
        "Days → hours: 8 × 24 = 192 hours.",
        "Hours → minutes: 192 × 60.",
        "192 × 60 = 11,520."
      ],
      explanation: [
        "8 days × 24 hr/day = 192 hours.",
        "192 hours × 60 min/hr = 11,520 minutes."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A model car is built at a 1 : 24 scale. If the real car is 192 inches long, how many inches long is the model?',
      answer: "8",
      hints: [
        "A 1 : 24 scale means the model is 1/24 of the real size.",
        "Divide the real length by 24.",
        "192 ÷ 24 = 8."
      ],
      explanation: [
        "Model length = 192 ÷ 24 = <strong>8 inches</strong>.",
        "The model car is 8 inches long."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A map uses a scale of 1 inch = 75 miles. If two cities are 375 miles apart, how far apart are they on the map?',
      choices: ["5 inches", "4 inches", "6 inches", "3.75 inches"],
      answer: "5 inches",
      hints: [
        "Divide actual distance by the scale.",
        "375 ÷ 75 = ?",
        "375 ÷ 75 = 5."
      ],
      explanation: [
        "Map distance = 375 ÷ 75 = <strong>5 inches</strong>.",
        "The cities are 5 inches apart on the map."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A model airplane is built at a 1 : 48 scale. The real airplane wingspan is 96 feet. What is the model wingspan in feet?',
      answer: "2",
      hints: [
        "Scale 1 : 48 means the model is 1/48 of real size.",
        "96 ÷ 48 = ?",
        "96 ÷ 48 = 2."
      ],
      explanation: [
        "Model wingspan = 96 ÷ 48 = <strong>2 feet</strong>.",
        "The model wingspan is 2 feet."
      ]
    }
  ]
];

// ============================================================
// WORLD 7 — Chapter 8: Percents
// ============================================================
EXTRA_QUESTIONS[7] = [

  // ----------------------------------------------------------
  // Topic 0: Percent Meaning — per hundred (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'What does 45% mean?',
      choices: ["45 out of 100", "45 out of 10", "45 out of 1,000", "4.5 out of 100"],
      answer: "45 out of 100",
      hints: [
        "Percent means per hundred.",
        "45% = 45 per 100.",
        "It means 45 out of every 100."
      ],
      explanation: [
        "The word percent comes from per centum (per hundred).",
        "45% means 45 out of 100."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If 72 out of 100 students passed a test, what percent passed?',
      answer: "72",
      hints: [
        "Percent means out of 100.",
        "72 out of 100 = 72%.",
        "The answer is 72."
      ],
      explanation: [
        "72 out of 100 = 72/100 = 72%.",
        "72% of students passed."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A grid has 100 squares. 38 are shaded. What percent is shaded?',
      choices: ["38%", "62%", "3.8%", "380%"],
      answer: "38%",
      hints: [
        "Count the shaded squares out of 100.",
        "38 out of 100 = 38%.",
        "Percent is the number per hundred."
      ],
      explanation: [
        "38 shaded out of 100 total = 38/100.",
        "That equals 38%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If 100% represents the whole, what number does 100% of 50 equal?',
      answer: "50",
      hints: [
        "100% means the entire amount.",
        "100% of any number is the number itself.",
        "100% of 50 = 50."
      ],
      explanation: [
        "100% means all of it.",
        "100% of 50 = 50."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which statement is true about 0%?',
      choices: ["It means none out of 100", "It means 1 out of 100", "It means half of 100", "It means all of 100"],
      answer: "It means none out of 100",
      hints: [
        "0% means zero per hundred.",
        "That means nothing out of the whole.",
        "0 out of 100 = 0%."
      ],
      explanation: [
        "0% = 0/100 = 0 out of 100.",
        "It means none of the total."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'If 55 out of 100 lightbulbs work, what percent work?',
      choices: ["55%", "45%", "5.5%", "550%"],
      answer: "55%",
      hints: [
        "Percent means per hundred.",
        "55 out of 100 = 55%.",
        "Just read the number over 100."
      ],
      explanation: [
        "55 out of 100 = 55/100 = 55%.",
        "55% of the lightbulbs work."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A grid has 100 squares. 20 are colored blue. What percent of the grid is blue?',
      answer: "20",
      hints: [
        "Count colored squares out of 100.",
        "20 out of 100 = 20%.",
        "Percent means per hundred."
      ],
      explanation: [
        "20 out of 100 = 20/100 = 20%.",
        "20% of the grid is blue."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What does 150% mean?',
      choices: ["150 out of 100, or 1.5 times the whole", "150 out of 1000", "15 out of 100", "Half of 100"],
      answer: "150 out of 100, or 1.5 times the whole",
      hints: [
        "Percent means per hundred.",
        "150% = 150/100 = 1.5.",
        "It means one and a half times the whole amount."
      ],
      explanation: [
        "150% = 150/100 = 1.5.",
        "It means 1.5 times (or 150 out of every 100)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If 85 out of 100 seats are filled, what percent of the seats are filled?',
      answer: "85",
      hints: [
        "Percent means per hundred.",
        "85 out of 100 = 85%.",
        "The answer is 85."
      ],
      explanation: [
        "85 out of 100 = 85/100 = 85%.",
        "85% of the seats are filled."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A grid has 100 squares. 67 are shaded. What percent is NOT shaded?',
      choices: ["33%", "67%", "37%", "63%"],
      answer: "33%",
      hints: [
        "Total squares = 100, shaded = 67.",
        "Not shaded = 100 − 67 = 33.",
        "33 out of 100 = 33%."
      ],
      explanation: [
        "Not shaded = 100 − 67 = 33.",
        "33 out of 100 = 33%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What does 50% mean?',
      choices: ["50 out of 100, or half", "50 out of 50", "5 out of 100", "50 out of 1,000"],
      answer: "50 out of 100, or half",
      hints: [
        "Percent means per hundred.",
        "50% = 50/100 = 1/2.",
        "It means half of the whole."
      ],
      explanation: [
        "50% = 50/100 = 0.5 = 1/2.",
        "It means half, or 50 out of every 100."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A grid has 100 squares. 47 are shaded. What percent is NOT shaded?',
      answer: "53",
      hints: [
        "Total squares = 100, shaded = 47.",
        "Not shaded = 100 − 47 = 53.",
        "53 out of 100 = 53%."
      ],
      explanation: [
        "Not shaded = 100 − 47 = 53.",
        "53 out of 100 = 53%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What does 25% mean?',
      choices: ["25 out of 100, or one quarter", "25 out of 25", "2.5 out of 100", "25 out of 1,000"],
      answer: "25 out of 100, or one quarter",
      hints: [
        "Percent means per hundred.",
        "25% = 25/100 = 1/4.",
        "It means one quarter of the whole."
      ],
      explanation: [
        "25% = 25/100 = 0.25 = 1/4.",
        "It means one quarter, or 25 out of every 100."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If 93 out of 100 apples are ripe, what percent of the apples are ripe?',
      answer: "93",
      hints: [
        "Percent means out of 100.",
        "93 out of 100 = 93%.",
        "The answer is 93."
      ],
      explanation: [
        "93 out of 100 = 93/100 = 93%.",
        "93% of the apples are ripe."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A grid has 100 squares. 74 are shaded. What percent is NOT shaded?',
      choices: ["26%", "74%", "24%", "76%"],
      answer: "26%",
      hints: [
        "Total squares = 100, shaded = 74.",
        "Not shaded = 100 − 74 = 26.",
        "26 out of 100 = 26%."
      ],
      explanation: [
        "Not shaded = 100 − 74 = 26.",
        "26 out of 100 = 26%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If 61 out of 100 students ride the bus, what percent ride the bus?',
      answer: "61",
      hints: [
        "Percent means out of 100.",
        "61 out of 100 = 61%.",
        "The answer is 61."
      ],
      explanation: [
        "61 out of 100 = 61/100 = 61%.",
        "61% of students ride the bus."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What does 75% mean?',
      choices: ["75 out of 100, or three quarters", "75 out of 75", "7.5 out of 100", "75 out of 1,000"],
      answer: "75 out of 100, or three quarters",
      hints: [
        "Percent means per hundred.",
        "75% = 75/100 = 3/4.",
        "It means three quarters of the whole."
      ],
      explanation: [
        "75% = 75/100 = 0.75 = 3/4.",
        "It means three quarters, or 75 out of every 100."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A grid has 100 squares. 58 are shaded. What percent is NOT shaded?',
      answer: "42",
      hints: [
        "Total squares = 100, shaded = 58.",
        "Not shaded = 100 − 58 = 42.",
        "42 out of 100 = 42%."
      ],
      explanation: [
        "Not shaded = 100 − 58 = 42.",
        "42 out of 100 = 42%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What does 10% mean?',
      choices: ["10 out of 100, or one tenth", "10 out of 10", "1 out of 100", "10 out of 1,000"],
      answer: "10 out of 100, or one tenth",
      hints: [
        "Percent means per hundred.",
        "10% = 10/100 = 1/10.",
        "It means one tenth of the whole."
      ],
      explanation: [
        "10% = 10/100 = 0.10 = 1/10.",
        "It means one tenth, or 10 out of every 100."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If 37 out of 100 cookies are chocolate chip, what percent are chocolate chip?',
      answer: "37",
      hints: [
        "Percent means out of 100.",
        "37 out of 100 = 37%.",
        "The answer is 37."
      ],
      explanation: [
        "37 out of 100 = 37/100 = 37%.",
        "37% are chocolate chip."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What does 90% mean?',
      choices: ["90 out of 100", "9 out of 100", "90 out of 1,000", "9 out of 10"],
      answer: "90 out of 100",
      hints: [
        "Percent means per hundred.",
        "90% = 90 per 100.",
        "It means 90 out of every 100."
      ],
      explanation: [
        "The word percent comes from per centum (per hundred).",
        "90% means 90 out of 100."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A grid has 100 squares. 83 are shaded. What percent is NOT shaded?',
      answer: "17",
      hints: [
        "Total squares = 100, shaded = 83.",
        "Not shaded = 100 − 83 = 17.",
        "17 out of 100 = 17%."
      ],
      explanation: [
        "Not shaded = 100 − 83 = 17.",
        "17 out of 100 = 17%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What does 200% mean?',
      choices: ["200 out of 100, or twice the whole", "200 out of 1,000", "20 out of 100", "2 out of 100"],
      answer: "200 out of 100, or twice the whole",
      hints: [
        "Percent means per hundred.",
        "200% = 200/100 = 2.",
        "It means two times the whole amount."
      ],
      explanation: [
        "200% = 200/100 = 2.",
        "It means 2 times (or 200 out of every 100)."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What does 5% mean?',
      choices: ["5 out of 100", "5 out of 10", "50 out of 100", "5 out of 1,000"],
      answer: "5 out of 100",
      hints: [
        'Percent means per hundred.',
        '5% = 5 per 100.',
        'It means 5 out of every 100.'
      ],
      explanation: [
        'The word percent comes from per centum (per hundred).',
        '5% means 5 out of 100.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A grid has 100 squares. 29 are shaded. What percent is NOT shaded?',
      answer: "71",
      hints: [
        'Total squares = 100, shaded = 29.',
        'Not shaded = 100 \u2212 29 = 71.',
        '71 out of 100 = 71%.'
      ],
      explanation: [
        'Not shaded = 100 \u2212 29 = 71.',
        '71 out of 100 = 71%.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'If 44 out of 100 birds are sparrows, what percent are sparrows?',
      choices: ["44%", "56%", "4.4%", "440%"],
      answer: "44%",
      hints: [
        'Percent means per hundred.',
        '44 out of 100 = 44%.',
        'Just read the number over 100.'
      ],
      explanation: [
        '44 out of 100 = 44/100 = 44%.',
        '44% of the birds are sparrows.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'In a class of 100 students, 37 chose pizza as their favorite food. What percent chose pizza?',
      answer: "37",
      hints: [
        'Percent means parts per 100.',
        '37 out of 100 = 37/100.',
        '37/100 = 37%.'
      ],
      explanation: [
        '37 out of 100 = 37/100 = 37%.',
        '37% of students chose pizza.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'A survey of 100 people found that 62 prefer summer. What percent prefer summer?',
      choices: ["62%", "38%", "6.2%", "620%"],
      answer: "62%",
      hints: [
        'The total is already 100.',
        '62 out of 100 = 62%.',
        'When the total is 100, the number is the percent.'
      ],
      explanation: [
        '62 out of 100 = 62/100 = 62%.',
        '62% prefer summer.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A jar has 100 marbles. 19 are green and 81 are yellow. What percent are green?',
      choices: ["19%", "81%", "1.9%", "9%"],
      answer: "19%",
      hints: [
        'Green marbles = 19 out of 100.',
        '19/100 as a percent is 19%.',
        'With 100 total, the count equals the percent.'
      ],
      explanation: [
        '19 out of 100 = 19%.',
        '19% of the marbles are green.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A jar has 100 jelly beans. 46 are red and the rest are blue. What percent are blue?',
      choices: ["54%", "46%", "64%", "36%"],
      answer: "54%",
      hints: [
        "Blue = 100 − 46 = 54.",
        "54 out of 100 = 54%.",
        "Percent means per hundred."
      ],
      explanation: [
        "Blue jelly beans = 100 − 46 = 54.",
        "54 out of 100 = 54%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If 78 out of 100 tickets were sold, what percent were sold?',
      answer: "78",
      hints: [
        "Percent means out of 100.",
        "78 out of 100 = 78%.",
        "The answer is 78."
      ],
      explanation: [
        "78 out of 100 = 78/100 = 78%.",
        "78% of tickets were sold."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What does 1% mean?',
      choices: ["1 out of 100", "1 out of 10", "10 out of 100", "1 out of 1,000"],
      answer: "1 out of 100",
      hints: [
        "Percent means per hundred.",
        "1% = 1 per 100.",
        "It means 1 out of every 100."
      ],
      explanation: [
        "The word percent comes from per centum (per hundred).",
        "1% means 1 out of 100."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What does 83% mean?',
      choices: ["83 out of 100", "83 out of 10", "8.3 out of 100", "83 out of 1,000"],
      answer: "83 out of 100",
      hints: [
        "Percent means per hundred.",
        "83% = 83 per 100.",
        "It means 83 out of every 100."
      ],
      explanation: [
        "The prefix per-cent means per hundred.",
        "83% means 83 out of 100."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'In a school, 37 out of 100 students ride the bus. What percent of students ride the bus?',
      answer: "37",
      hints: [
        "Percent means out of 100.",
        "37 out of 100 = 37%.",
        "The answer is 37."
      ],
      explanation: [
        "37 out of 100 already tells us the percent directly.",
        "37 out of 100 = 37%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A grid has 100 squares, and 64 are shaded. What percent is shaded?',
      choices: ["64%", "36%", "6.4%", "46%"],
      answer: "64%",
      hints: [
        "Shaded squares out of 100 total squares.",
        "64 out of 100 = 64%.",
        "Percent means per hundred."
      ],
      explanation: [
        "64 shaded out of 100 total squares.",
        "64 out of 100 = 64%."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Write 0.45 as a percent.',
      choices: ["45%", "4.5%", "0.45%", "450%"],
      answer: "45%",
      hints: [
        "To convert a decimal to a percent, multiply by 100.",
        "0.45 × 100 = ?",
        "0.45 × 100 = 45."
      ],
      explanation: [
        "Multiply the decimal by 100: 0.45 × 100 = <strong>45</strong>.",
        "So 0.45 = <strong>45%</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Write 0.08 as a percent. Enter just the number.',
      answer: "8",
      hints: [
        "Multiply the decimal by 100.",
        "0.08 × 100 = ?",
        "0.08 × 100 = 8."
      ],
      explanation: [
        "0.08 × 100 = <strong>8</strong>.",
        "So 0.08 = <strong>8%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Write 1.35 as a percent.',
      choices: ["135%", "13.5%", "1.35%", "1350%"],
      answer: "135%",
      hints: [
        "Multiply the decimal by 100.",
        "1.35 × 100 = ?",
        "Numbers greater than 1 become more than 100%."
      ],
      explanation: [
        "1.35 × 100 = <strong>135</strong>.",
        "So 1.35 = <strong>135%</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 1: Percent ↔ Fraction (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Convert 25% to a fraction in simplest form.',
      choices: ["1/4", "1/5", "2/5", "1/25"],
      answer: "1/4",
      hints: [
        "Write 25% as 25/100.",
        "Simplify by dividing by 25.",
        "25/100 = 1/4."
      ],
      explanation: [
        "25% = 25/100.",
        "Simplify: 25 ÷ 25 = 1, 100 ÷ 25 = 4 → 1/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3/5</span> to a percent. Enter just the number.',
      answer: "60",
      hints: [
        "Divide 3 by 5 to get a decimal.",
        "3 ÷ 5 = 0.6.",
        "Multiply by 100: 0.6 × 100 = 60%."
      ],
      explanation: [
        "3/5 = 0.6.",
        "0.6 × 100 = 60%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 12.5% to a fraction in simplest form.',
      choices: ["1/8", "1/10", "1/5", "1/12"],
      answer: "1/8",
      hints: [
        "12.5% = 12.5/100.",
        "Multiply top and bottom by 2: 25/200.",
        "Simplify: 25/200 = 1/8."
      ],
      explanation: [
        "12.5% = 12.5/100 = 25/200.",
        "GCD of 25 and 200 is 25: 25/200 = 1/8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">7/20</span> to a percent. Enter just the number.',
      answer: "35",
      hints: [
        "Divide 7 by 20.",
        "7 ÷ 20 = 0.35.",
        "Multiply by 100: 35%."
      ],
      explanation: [
        "7/20 = 0.35.",
        "0.35 × 100 = 35%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 40% to a fraction in simplest form.',
      choices: ["2/5", "4/10", "4/5", "1/4"],
      answer: "2/5",
      hints: [
        "40% = 40/100.",
        "Divide both by 20.",
        "40/100 = 2/5."
      ],
      explanation: [
        "40% = 40/100.",
        "GCD(40, 100) = 20 → 40/100 = 2/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">5/8</span> to a percent. Enter just the number.',
      answer: "62.5",
      hints: [
        "Divide 5 by 8.",
        "5 ÷ 8 = 0.625.",
        "Multiply by 100: 62.5%."
      ],
      explanation: [
        "5/8 = 0.625.",
        "0.625 × 100 = 62.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 75% to a fraction in simplest form.',
      choices: ["3/4", "7/5", "75/10", "15/20"],
      answer: "3/4",
      hints: [
        "75% = 75/100.",
        "Divide both by 25.",
        "75/100 = 3/4."
      ],
      explanation: [
        "75% = 75/100.",
        "GCD(75, 100) = 25 → 75/100 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">9/25</span> to a percent. Enter just the number.',
      answer: "36",
      hints: [
        "Divide 9 by 25.",
        "9 ÷ 25 = 0.36.",
        "Multiply by 100: 36%."
      ],
      explanation: [
        "9/25 = 0.36.",
        "0.36 × 100 = 36%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 50% to a fraction in simplest form.',
      choices: ["1/2", "5/10", "50/100", "1/5"],
      answer: "1/2",
      hints: [
        "50% = 50/100.",
        "Divide both by 50.",
        "50/100 = 1/2."
      ],
      explanation: [
        "50% = 50/100.",
        "GCD(50, 100) = 50 → 50/100 = 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">11/20</span> to a percent. Enter just the number.',
      answer: "55",
      hints: [
        "Divide 11 by 20.",
        "11 ÷ 20 = 0.55.",
        "Multiply by 100: 55%."
      ],
      explanation: [
        "11/20 = 0.55.",
        "0.55 × 100 = 55%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 80% to a fraction in simplest form.',
      choices: ["4/5", "8/10", "80/100", "3/5"],
      answer: "4/5",
      hints: [
        "80% = 80/100.",
        "Divide both by 20.",
        "80/100 = 4/5."
      ],
      explanation: [
        "80% = 80/100.",
        "GCD(80, 100) = 20 → 80/100 = 4/5."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">1/4</span> to a percent. Enter just the number.',
      answer: "25",
      hints: [
        "Divide 1 by 4 to get a decimal.",
        "1 ÷ 4 = 0.25.",
        "Multiply by 100: 0.25 × 100 = 25%."
      ],
      explanation: [
        "1/4 = 0.25.",
        "0.25 × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 60% to a fraction in simplest form.',
      choices: ["3/5", "6/10", "60/100", "2/5"],
      answer: "3/5",
      hints: [
        "60% = 60/100.",
        "Divide both by 20.",
        "60/100 = 3/5."
      ],
      explanation: [
        "60% = 60/100.",
        "GCD(60, 100) = 20 → 60/100 = 3/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">3/8</span> to a percent. Enter just the number.',
      answer: "37.5",
      hints: [
        "Divide 3 by 8.",
        "3 ÷ 8 = 0.375.",
        "Multiply by 100: 37.5%."
      ],
      explanation: [
        "3/8 = 0.375.",
        "0.375 × 100 = 37.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 20% to a fraction in simplest form.',
      choices: ["1/5", "2/10", "20/100", "1/20"],
      answer: "1/5",
      hints: [
        "20% = 20/100.",
        "Divide both by 20.",
        "20/100 = 1/5."
      ],
      explanation: [
        "20% = 20/100.",
        "GCD(20, 100) = 20 → 20/100 = 1/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">13/20</span> to a percent. Enter just the number.',
      answer: "65",
      hints: [
        "Divide 13 by 20.",
        "13 ÷ 20 = 0.65.",
        "Multiply by 100: 65%."
      ],
      explanation: [
        "13/20 = 0.65.",
        "0.65 × 100 = 65%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 35% to a fraction in simplest form.',
      choices: ["7/20", "35/100", "7/10", "1/3"],
      answer: "7/20",
      hints: [
        "35% = 35/100.",
        "Divide both by 5.",
        "35/100 = 7/20."
      ],
      explanation: [
        "35% = 35/100.",
        "GCD(35, 100) = 5 → 35/100 = 7/20."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert 45% to a fraction in simplest form.',
      choices: ["9/20", "45/100", "4/5", "1/4"],
      answer: "9/20",
      hints: [
        "45% = 45/100.",
        "Divide both by 5.",
        "45/100 = 9/20."
      ],
      explanation: [
        "45% = 45/100.",
        "GCD(45, 100) = 5 → 45/100 = 9/20."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">1/2</span> to a percent. Enter just the number.',
      answer: "50",
      hints: [
        "Divide 1 by 2 to get a decimal.",
        "1 ÷ 2 = 0.5.",
        "Multiply by 100: 0.5 × 100 = 50%."
      ],
      explanation: [
        "1/2 = 0.5.",
        "0.5 × 100 = 50%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 15% to a fraction in simplest form.',
      choices: ["3/20", "15/100", "1/5", "3/10"],
      answer: "3/20",
      hints: [
        "15% = 15/100.",
        "Divide both by 5.",
        "15/100 = 3/20."
      ],
      explanation: [
        "15% = 15/100.",
        "GCD(15, 100) = 5 → 15/100 = 3/20."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Convert 10% to a fraction in simplest form.',
      choices: ["1/10", "10/100", "1/5", "1/100"],
      answer: "1/10",
      hints: [
        "10% = 10/100.",
        "Divide both by 10.",
        "10/100 = 1/10."
      ],
      explanation: [
        "10% = 10/100.",
        "GCD(10, 100) = 10 → 10/100 = 1/10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">4/5</span> to a percent. Enter just the number.',
      answer: "80",
      hints: [
        "Divide 4 by 5.",
        "4 ÷ 5 = 0.8.",
        "Multiply by 100: 0.8 × 100 = 80%."
      ],
      explanation: [
        "4/5 = 0.8.",
        "0.8 × 100 = 80%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 55% to a fraction in simplest form.',
      choices: ["11/20", "55/100", "5/10", "1/2"],
      answer: "11/20",
      hints: [
        "55% = 55/100.",
        "Divide both by 5.",
        "55/100 = 11/20."
      ],
      explanation: [
        "55% = 55/100.",
        "GCD(55, 100) = 5 → 55/100 = 11/20."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Convert 65% to a fraction in simplest form.',
      choices: ["13/20", "65/100", "6/10", "3/5"],
      answer: "13/20",
      hints: [
        '65% = 65/100.',
        'Divide both by 5.',
        '65/100 = 13/20.'
      ],
      explanation: [
        '65% = 65/100.',
        'GCD(65, 100) = 5 \u2192 65/100 = 13/20.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3/10</span> to a percent. Enter just the number.',
      answer: "30",
      hints: [
        'Divide 3 by 10 to get a decimal.',
        '3 \u00f7 10 = 0.3.',
        'Multiply by 100: 0.3 \u00d7 100 = 30%.'
      ],
      explanation: [
        '3/10 = 0.3.',
        '0.3 \u00d7 100 = 30%.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert 90% to a fraction in simplest form.',
      choices: ["9/10", "90/100", "4/5", "18/20"],
      answer: "9/10",
      hints: [
        '90% = 90/100.',
        'Divide both by 10.',
        '90/100 = 9/10.'
      ],
      explanation: [
        '90% = 90/100.',
        'GCD(90, 100) = 10 \u2192 90/100 = 9/10.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Convert 45% to a fraction in simplest form.',
      choices: ["9/20", "45/100", "9/10", "4/5"],
      answer: "9/20",
      hints: [
        '45% = 45/100.',
        'Find the GCD of 45 and 100.',
        'GCD = 5. So 45/100 = 9/20.'
      ],
      explanation: [
        '45% = 45/100.',
        'GCD(45, 100) = 5 \u2192 45/100 = 9/20.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">\\frac{7}{25}</span> to a percent. Enter just the number.',
      answer: "28",
      hints: [
        'To convert a fraction to a percent, divide then multiply by 100.',
        '7 \u00f7 25 = 0.28.',
        '0.28 \u00d7 100 = 28%.'
      ],
      explanation: [
        '7 \u00f7 25 = 0.28.',
        '0.28 \u00d7 100 = 28%.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert 160% to a fraction in simplest form.',
      choices: ["8/5", "16/10", "160/100", "4/5"],
      answer: "8/5",
      hints: [
        '160% = 160/100.',
        'Find the GCD of 160 and 100.',
        'GCD = 20. So 160/100 = 8/5.'
      ],
      explanation: [
        '160% = 160/100.',
        'GCD(160, 100) = 20 \u2192 160/100 = 8/5.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">\frac{9}{40}</span> to a percent. Enter just the number.',
      answer: "22.5",
      hints: [
        "Divide 9 by 40.",
        "9 ÷ 40 = 0.225.",
        "Multiply by 100: 0.225 × 100 = 22.5%."
      ],
      explanation: [
        "9/40 = 0.225.",
        "0.225 × 100 = 22.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 5% to a fraction in simplest form.',
      choices: ["1/20", "5/100", "1/5", "1/10"],
      answer: "1/20",
      hints: [
        "5% = 5/100.",
        "Divide both by 5.",
        "5/100 = 1/20."
      ],
      explanation: [
        "5% = 5/100.",
        "GCD(5, 100) = 5 → 5/100 = 1/20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 125% to a fraction in simplest form.',
      choices: ["5/4", "125/100", "25/20", "6/5"],
      answer: "5/4",
      hints: [
        "125% = 125/100.",
        "Find the GCD of 125 and 100.",
        "GCD = 25. So 125/100 = 5/4."
      ],
      explanation: [
        "125% = 125/100.",
        "GCD(125, 100) = 25 → 125/100 = 5/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">\frac{7}{10}</span> to a percent. Enter just the number.',
      answer: "70",
      hints: [
        "Divide 7 by 10 to get a decimal.",
        "7 ÷ 10 = 0.7.",
        "Multiply by 100: 0.7 × 100 = 70%."
      ],
      explanation: [
        "7 ÷ 10 = 0.7.",
        "0.7 × 100 = 70%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 85% to a fraction in simplest form.',
      choices: ["17/20", "85/100", "4/5", "8/10"],
      answer: "17/20",
      hints: [
        "Write 85% as 85/100.",
        "Find the GCD of 85 and 100.",
        "GCD = 5 → 85/100 = 17/20."
      ],
      explanation: [
        "85% = 85/100.",
        "Simplify: 85 ÷ 5 = 17, 100 ÷ 5 = 20 → 17/20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">\frac{9}{20}</span> to a percent. Enter just the number.',
      answer: "45",
      hints: [
        "Divide 9 by 20.",
        "9 ÷ 20 = 0.45.",
        "Multiply by 100: 0.45 × 100 = 45%."
      ],
      explanation: [
        "9 ÷ 20 = 0.45.",
        "0.45 × 100 = 45%."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Write <span class="math">3/8</span> as a percent. Enter your answer as a decimal percent (like 37.5).',
      answer: "37.5",
      hints: [
        "Divide the numerator by the denominator: 3 ÷ 8.",
        "3 ÷ 8 = 0.375.",
        "Multiply by 100: 0.375 × 100 = 37.5."
      ],
      explanation: [
        "3 ÷ 8 = 0.375.",
        "0.375 × 100 = <strong>37.5%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Write <span class="math">5/6</span> as a percent (rounded to the nearest tenth).',
      choices: ["83.3%", "80%", "85%", "83.5%"],
      answer: "83.3%",
      hints: [
        "Divide 5 by 6: 5 ÷ 6 ≈ 0.8333…",
        "Multiply by 100: 83.33…%",
        "Round to the nearest tenth: 83.3%."
      ],
      explanation: [
        "5 ÷ 6 ≈ 0.8333…",
        "0.8333… × 100 ≈ <strong>83.3%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Write <span class="math">7/20</span> as a percent.',
      choices: ["35%", "30%", "40%", "70%"],
      answer: "35%",
      hints: [
        "Divide 7 by 20: 7 ÷ 20 = 0.35.",
        "Multiply by 100.",
        "0.35 × 100 = 35."
      ],
      explanation: [
        "7 ÷ 20 = 0.35.",
        "0.35 × 100 = <strong>35%</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 2: Percent ↔ Decimal (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Convert 75% to a decimal.',
      choices: ["0.75", "7.5", "0.075", "75.0"],
      answer: "0.75",
      hints: [
        "To convert percent to decimal, divide by 100.",
        "Move the decimal point 2 places left.",
        "75% = 0.75."
      ],
      explanation: [
        "75% ÷ 100 = 0.75.",
        "75% as a decimal is 0.75."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 0.4 to a percent. Enter just the number.',
      answer: "40",
      hints: [
        "Multiply the decimal by 100.",
        "0.4 × 100 = ?",
        "0.4 × 100 = 40."
      ],
      explanation: [
        "0.4 × 100 = 40.",
        "0.4 as a percent is 40%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 6.5% to a decimal.',
      choices: ["0.065", "0.65", "6.5", "0.0065"],
      answer: "0.065",
      hints: [
        "Divide 6.5 by 100.",
        "Move the decimal 2 places left.",
        "6.5% = 0.065."
      ],
      explanation: [
        "6.5% ÷ 100 = 0.065.",
        "6.5% as a decimal is 0.065."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.035 to a percent. Enter just the number.',
      answer: "3.5",
      hints: [
        "Multiply by 100.",
        "0.035 × 100 = ?",
        "0.035 × 100 = 3.5."
      ],
      explanation: [
        "0.035 × 100 = 3.5.",
        "0.035 as a percent is 3.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 150% to a decimal.',
      choices: ["1.5", "0.15", "15.0", "0.015"],
      answer: "1.5",
      hints: [
        "Divide 150 by 100.",
        "150 ÷ 100 = 1.5.",
        "Percents over 100 give decimals greater than 1."
      ],
      explanation: [
        "150% ÷ 100 = 1.5.",
        "150% as a decimal is 1.5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.125 to a percent. Enter just the number.',
      answer: "12.5",
      hints: [
        "Multiply by 100.",
        "0.125 × 100 = ?",
        "0.125 × 100 = 12.5."
      ],
      explanation: [
        "0.125 × 100 = 12.5.",
        "0.125 as a percent is 12.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 20% to a decimal.',
      choices: ["0.2", "2.0", "0.02", "20.0"],
      answer: "0.2",
      hints: [
        "Divide 20 by 100.",
        "Move the decimal point 2 places left.",
        "20% = 0.2."
      ],
      explanation: [
        "20% ÷ 100 = 0.2.",
        "20% as a decimal is 0.2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 0.005 to a percent.',
      choices: ["0.5%", "5%", "50%", "0.05%"],
      answer: "0.5%",
      hints: [
        "Multiply by 100.",
        "0.005 × 100 = ?",
        "0.005 × 100 = 0.5."
      ],
      explanation: [
        "0.005 × 100 = 0.5.",
        "0.005 as a percent is 0.5%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 0.9 to a percent. Enter just the number.',
      answer: "90",
      hints: [
        "Multiply by 100.",
        "0.9 × 100 = ?",
        "0.9 × 100 = 90."
      ],
      explanation: [
        "0.9 × 100 = 90.",
        "0.9 as a percent is 90%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 250% to a decimal.',
      choices: ["2.5", "0.25", "25.0", "0.025"],
      answer: "2.5",
      hints: [
        "Divide 250 by 100.",
        "250 ÷ 100 = 2.5.",
        "Percents over 100 give decimals greater than 1."
      ],
      explanation: [
        "250% ÷ 100 = 2.5.",
        "250% as a decimal is 2.5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 45% to a decimal.',
      choices: ["0.45", "4.5", "0.045", "45.0"],
      answer: "0.45",
      hints: [
        "Divide 45 by 100.",
        "Move the decimal point 2 places left.",
        "45% = 0.45."
      ],
      explanation: [
        "45% ÷ 100 = 0.45.",
        "45% as a decimal is 0.45."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 0.7 to a percent. Enter just the number.',
      answer: "70",
      hints: [
        "Multiply the decimal by 100.",
        "0.7 × 100 = ?",
        "0.7 × 100 = 70."
      ],
      explanation: [
        "0.7 × 100 = 70.",
        "0.7 as a percent is 70%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 8.5% to a decimal.',
      choices: ["0.085", "0.85", "8.5", "0.0085"],
      answer: "0.085",
      hints: [
        "Divide 8.5 by 100.",
        "Move the decimal 2 places left.",
        "8.5% = 0.085."
      ],
      explanation: [
        "8.5% ÷ 100 = 0.085.",
        "8.5% as a decimal is 0.085."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.275 to a percent. Enter just the number.',
      answer: "27.5",
      hints: [
        "Multiply by 100.",
        "0.275 × 100 = ?",
        "0.275 × 100 = 27.5."
      ],
      explanation: [
        "0.275 × 100 = 27.5.",
        "0.275 as a percent is 27.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 30% to a decimal.',
      choices: ["0.3", "3.0", "0.03", "30.0"],
      answer: "0.3",
      hints: [
        "Divide 30 by 100.",
        "Move the decimal point 2 places left.",
        "30% = 0.3."
      ],
      explanation: [
        "30% ÷ 100 = 0.3.",
        "30% as a decimal is 0.3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.08 to a percent. Enter just the number.',
      answer: "8",
      hints: [
        "Multiply by 100.",
        "0.08 × 100 = ?",
        "0.08 × 100 = 8."
      ],
      explanation: [
        "0.08 × 100 = 8.",
        "0.08 as a percent is 8%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 175% to a decimal.',
      choices: ["1.75", "0.175", "17.5", "0.0175"],
      answer: "1.75",
      hints: [
        "Divide 175 by 100.",
        "175 ÷ 100 = 1.75.",
        "Percents over 100 give decimals greater than 1."
      ],
      explanation: [
        "175% ÷ 100 = 1.75.",
        "175% as a decimal is 1.75."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Convert 55% to a decimal.',
      choices: ["0.55", "5.5", "0.055", "55.0"],
      answer: "0.55",
      hints: [
        "Divide 55 by 100.",
        "Move the decimal point 2 places left.",
        "55% = 0.55."
      ],
      explanation: [
        "55% ÷ 100 = 0.55.",
        "55% as a decimal is 0.55."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.62 to a percent. Enter just the number.',
      answer: "62",
      hints: [
        "Multiply the decimal by 100.",
        "0.62 × 100 = ?",
        "0.62 × 100 = 62."
      ],
      explanation: [
        "0.62 × 100 = 62.",
        "0.62 as a percent is 62%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 0.003 to a percent.',
      choices: ["0.3%", "3%", "30%", "0.03%"],
      answer: "0.3%",
      hints: [
        "Multiply by 100.",
        "0.003 × 100 = ?",
        "0.003 × 100 = 0.3."
      ],
      explanation: [
        "0.003 × 100 = 0.3.",
        "0.003 as a percent is 0.3%."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Convert 85% to a decimal.',
      choices: ["0.85", "8.5", "0.085", "85.0"],
      answer: "0.85",
      hints: [
        "Divide 85 by 100.",
        "Move the decimal point 2 places left.",
        "85% = 0.85."
      ],
      explanation: [
        "85% ÷ 100 = 0.85.",
        "85% as a decimal is 0.85."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.48 to a percent. Enter just the number.',
      answer: "48",
      hints: [
        "Multiply the decimal by 100.",
        "0.48 × 100 = ?",
        "0.48 × 100 = 48."
      ],
      explanation: [
        "0.48 × 100 = 48.",
        "0.48 as a percent is 48%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 225% to a decimal.',
      choices: ["2.25", "0.225", "22.5", "0.0225"],
      answer: "2.25",
      hints: [
        "Divide 225 by 100.",
        "225 ÷ 100 = 2.25.",
        "Percents over 100 give decimals greater than 1."
      ],
      explanation: [
        "225% ÷ 100 = 2.25.",
        "225% as a decimal is 2.25."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Convert 65% to a decimal.',
      choices: ["0.65", "6.5", "0.065", "65.0"],
      answer: "0.65",
      hints: [
        'Divide 65 by 100.',
        'Move the decimal point 2 places left.',
        '65% = 0.65.'
      ],
      explanation: [
        '65% \u00f7 100 = 0.65.',
        '65% as a decimal is 0.65.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.56 to a percent. Enter just the number.',
      answer: "56",
      hints: [
        'Multiply the decimal by 100.',
        '0.56 \u00d7 100 = ?',
        '0.56 \u00d7 100 = 56.'
      ],
      explanation: [
        '0.56 \u00d7 100 = 56.',
        '0.56 as a percent is 56%.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert 300% to a decimal.',
      choices: ["3.0", "0.3", "30.0", "0.03"],
      answer: "3.0",
      hints: [
        'Divide 300 by 100.',
        '300 \u00f7 100 = 3.0.',
        'Percents over 100 give decimals greater than 1.'
      ],
      explanation: [
        '300% \u00f7 100 = 3.0.',
        '300% as a decimal is 3.0.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 0.72 to a percent. Enter just the number.',
      answer: "72",
      hints: [
        'Multiply the decimal by 100 to get a percent.',
        '0.72 \u00d7 100 = ?',
        '0.72 \u00d7 100 = 72.'
      ],
      explanation: [
        '0.72 \u00d7 100 = 72%.',
        '0.72 as a percent is 72%.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'What is 56% as a decimal?',
      choices: ["0.56", "5.6", "0.056", "56.0"],
      answer: "0.56",
      hints: [
        'Divide the percent by 100.',
        '56 \u00f7 100 = ?',
        '56 \u00f7 100 = 0.56.'
      ],
      explanation: [
        '56% \u00f7 100 = 0.56.',
        '56% as a decimal is 0.56.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is 0.035 as a percent?',
      choices: ["3.5%", "0.35%", "35%", "0.035%"],
      answer: "3.5%",
      hints: [
        'Multiply by 100 to convert to percent.',
        '0.035 \u00d7 100 = ?',
        '0.035 \u00d7 100 = 3.5.'
      ],
      explanation: [
        '0.035 \u00d7 100 = 3.5%.',
        '0.035 as a percent is 3.5%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Convert 0.15 to a percent. Enter just the number.',
      answer: "15",
      hints: [
        "Multiply the decimal by 100.",
        "0.15 × 100 = ?",
        "0.15 × 100 = 15."
      ],
      explanation: [
        "0.15 × 100 = 15.",
        "0.15 as a percent is 15%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert 0.006 to a percent.',
      choices: ["0.6%", "6%", "60%", "0.06%"],
      answer: "0.6%",
      hints: [
        "Multiply by 100.",
        "0.006 × 100 = ?",
        "0.006 × 100 = 0.6."
      ],
      explanation: [
        "0.006 × 100 = 0.6.",
        "0.006 as a percent is 0.6%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 92% to a decimal.',
      choices: ["0.92", "9.2", "0.092", "92.0"],
      answer: "0.92",
      hints: [
        "Divide 92 by 100.",
        "Move the decimal point 2 places left.",
        "92% = 0.92."
      ],
      explanation: [
        "92% ÷ 100 = 0.92.",
        "92% as a decimal is 0.92."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 32% to a decimal.',
      choices: ["0.32", "3.2", "0.032", "32.0"],
      answer: "0.32",
      hints: [
        "To convert percent to decimal, divide by 100.",
        "Move the decimal point 2 places left.",
        "32% = 0.32."
      ],
      explanation: [
        "32% ÷ 100 = 0.32.",
        "32% as a decimal is 0.32."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert 0.185 to a percent. Enter just the number (e.g. for 18.5% enter 18.5).',
      answer: "18.5",
      hints: [
        "Multiply the decimal by 100.",
        "0.185 × 100 = ?",
        "0.185 × 100 = 18.5."
      ],
      explanation: [
        "0.185 × 100 = 18.5.",
        "0.185 as a percent is 18.5%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert 0.09 to a percent.',
      choices: ["9%", "0.9%", "90%", "0.09%"],
      answer: "9%",
      hints: [
        "Multiply the decimal by 100.",
        "0.09 × 100 = ?",
        "0.09 × 100 = 9."
      ],
      explanation: [
        "0.09 × 100 = 9.",
        "0.09 as a percent is 9%."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is 35% of 80?',
      answer: "28",
      hints: [
        "Convert 35% to a decimal: 0.35.",
        "Multiply: 0.35 × 80.",
        "0.35 × 80 = 28."
      ],
      explanation: [
        "35% = 0.35.",
        "0.35 × 80 = <strong>28</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A school has 450 students. If 62% brought lunch from home today, how many students brought lunch?',
      choices: ["279", "270", "290", "280"],
      answer: "279",
      hints: [
        "Convert 62% to a decimal: 0.62.",
        "Multiply: 0.62 × 450.",
        "0.62 × 450 = 279."
      ],
      explanation: [
        "62% = 0.62.",
        "0.62 × 450 = <strong>279 students</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 15% of 240?',
      choices: ["36", "24", "48", "30"],
      answer: "36",
      hints: [
        "Convert 15% to a decimal: 0.15.",
        "Multiply: 0.15 × 240.",
        "0.15 × 240 = 36."
      ],
      explanation: [
        "15% = 0.15.",
        "0.15 × 240 = <strong>36</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 3: Finding Percent of a Number (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 1,
      question: 'What is 25% of 80?',
      answer: "20",
      hints: [
        "Convert 25% to a decimal: 0.25.",
        "Multiply: 0.25 × 80.",
        "0.25 × 80 = 20."
      ],
      explanation: [
        "25% = 0.25.",
        "0.25 × 80 = 20."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is 10% of 250?',
      choices: ["25", "2.5", "250", "50"],
      answer: "25",
      hints: [
        "10% means divide by 10.",
        "250 ÷ 10 = 25.",
        "Or: 0.10 × 250 = 25."
      ],
      explanation: [
        "10% = 0.10.",
        "0.10 × 250 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 15% of 60?',
      answer: "9",
      hints: [
        "Convert 15% to 0.15.",
        "Multiply: 0.15 × 60.",
        "0.15 × 60 = 9."
      ],
      explanation: [
        "15% = 0.15.",
        "0.15 × 60 = 9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 40% of 90?',
      choices: ["36", "40", "32", "45"],
      answer: "36",
      hints: [
        "40% = 0.40.",
        "0.40 × 90 = ?",
        "0.40 × 90 = 36."
      ],
      explanation: [
        "40% = 0.40.",
        "0.40 × 90 = 36."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 5% of 300?',
      answer: "15",
      hints: [
        "5% = 0.05.",
        "0.05 × 300 = ?",
        "0.05 × 300 = 15."
      ],
      explanation: [
        "5% = 0.05.",
        "0.05 × 300 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 30% of 150?',
      choices: ["45", "50", "30", "40"],
      answer: "45",
      hints: [
        "30% = 0.30.",
        "0.30 × 150 = ?",
        "0.30 × 150 = 45."
      ],
      explanation: [
        "30% = 0.30.",
        "0.30 × 150 = 45."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is 50% of 120?',
      answer: "60",
      hints: [
        "50% means half.",
        "120 ÷ 2 = ?",
        "120 ÷ 2 = 60."
      ],
      explanation: [
        "50% = 0.50.",
        "0.50 × 120 = 60."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 75% of 200?',
      answer: "150",
      hints: [
        "75% = 0.75.",
        "0.75 × 200 = ?",
        "0.75 × 200 = 150."
      ],
      explanation: [
        "75% = 0.75.",
        "0.75 × 200 = 150."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is 20% of 45?',
      choices: ["9", "8", "10", "12"],
      answer: "9",
      hints: [
        "Convert 20% to 0.20.",
        "Multiply: 0.20 × 45.",
        "0.20 × 45 = 9."
      ],
      explanation: [
        "20% = 0.20.",
        "0.20 × 45 = 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 12% of 350?',
      answer: "42",
      hints: [
        "Convert 12% to 0.12.",
        "Multiply: 0.12 × 350.",
        "0.12 × 350 = 42."
      ],
      explanation: [
        "12% = 0.12.",
        "0.12 × 350 = 42."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 60% of 85?',
      answer: "51",
      hints: [
        "Convert 60% to 0.60.",
        "Multiply: 0.60 × 85.",
        "0.60 × 85 = 51."
      ],
      explanation: [
        "60% = 0.60.",
        "0.60 × 85 = 51."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is 10% of 180?',
      choices: ["18", "1.8", "180", "36"],
      answer: "18",
      hints: [
        "10% means divide by 10.",
        "180 ÷ 10 = 18.",
        "Or: 0.10 × 180 = 18."
      ],
      explanation: [
        "10% = 0.10.",
        "0.10 × 180 = 18."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 35% of 80?',
      answer: "28",
      hints: [
        "Convert 35% to 0.35.",
        "Multiply: 0.35 × 80.",
        "0.35 × 80 = 28."
      ],
      explanation: [
        "35% = 0.35.",
        "0.35 × 80 = 28."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 45% of 60?',
      choices: ["27", "30", "24", "18"],
      answer: "27",
      hints: [
        "45% = 0.45.",
        "0.45 × 60 = ?",
        "0.45 × 60 = 27."
      ],
      explanation: [
        "45% = 0.45.",
        "0.45 × 60 = 27."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is 50% of 84?',
      answer: "42",
      hints: [
        "50% means half.",
        "84 ÷ 2 = ?",
        "84 ÷ 2 = 42."
      ],
      explanation: [
        "50% = 0.50.",
        "0.50 × 84 = 42."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 80% of 55?',
      choices: ["44", "40", "48", "55"],
      answer: "44",
      hints: [
        "80% = 0.80.",
        "0.80 × 55 = ?",
        "0.80 × 55 = 44."
      ],
      explanation: [
        "80% = 0.80.",
        "0.80 × 55 = 44."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 15% of 240?',
      answer: "36",
      hints: [
        "Convert 15% to 0.15.",
        "Multiply: 0.15 × 240.",
        "0.15 × 240 = 36."
      ],
      explanation: [
        "15% = 0.15.",
        "0.15 × 240 = 36."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is 65% of 140?',
      answer: "91",
      hints: [
        "Convert 65% to 0.65.",
        "Multiply: 0.65 × 140.",
        "0.65 × 140 = 91."
      ],
      explanation: [
        "65% = 0.65.",
        "0.65 × 140 = 91."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is 25% of 160?',
      choices: ["40", "32", "48", "80"],
      answer: "40",
      hints: [
        "25% means one quarter.",
        "160 ÷ 4 = ?",
        "160 ÷ 4 = 40."
      ],
      explanation: [
        "25% = 0.25.",
        "0.25 × 160 = 40."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 90% of 70?',
      answer: "63",
      hints: [
        "Convert 90% to 0.90.",
        "Multiply: 0.90 × 70.",
        "0.90 × 70 = 63."
      ],
      explanation: [
        "90% = 0.90.",
        "0.90 × 70 = 63."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 1,
      question: 'What is 50% of 96?',
      answer: "48",
      hints: [
        "50% means half.",
        "96 ÷ 2 = ?",
        "96 ÷ 2 = 48."
      ],
      explanation: [
        "50% = 0.50.",
        "0.50 × 96 = 48."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 35% of 120?',
      choices: ["42", "36", "48", "30"],
      answer: "42",
      hints: [
        "35% = 0.35.",
        "0.35 × 120 = ?",
        "0.35 × 120 = 42."
      ],
      explanation: [
        "35% = 0.35.",
        "0.35 × 120 = 42."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 18% of 250?',
      answer: "45",
      hints: [
        "Convert 18% to 0.18.",
        "Multiply: 0.18 × 250.",
        "0.18 × 250 = 45."
      ],
      explanation: [
        "18% = 0.18.",
        "0.18 × 250 = 45."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 1,
      question: 'What is 25% of 48?',
      answer: "12",
      hints: [
        '25% means one quarter.',
        '48 \u00f7 4 = ?',
        '48 \u00f7 4 = 12.'
      ],
      explanation: [
        '25% = 0.25.',
        '0.25 \u00d7 48 = 12.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is 70% of 110?',
      choices: ["77", "70", "84", "66"],
      answer: "77",
      hints: [
        '70% = 0.70.',
        '0.70 \u00d7 110 = ?',
        '0.70 \u00d7 110 = 77.'
      ],
      explanation: [
        '70% = 0.70.',
        '0.70 \u00d7 110 = 77.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is 22% of 150?',
      answer: "33",
      hints: [
        'Convert 22% to 0.22.',
        'Multiply: 0.22 \u00d7 150.',
        '0.22 \u00d7 150 = 33.'
      ],
      explanation: [
        '22% = 0.22.',
        '0.22 \u00d7 150 = 33.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is 15% of 80?',
      answer: "12",
      hints: [
        'Convert 15% to a decimal: 0.15.',
        'Multiply: 0.15 \u00d7 80.',
        '0.15 \u00d7 80 = 12.'
      ],
      explanation: [
        '15% = 0.15.',
        '0.15 \u00d7 80 = 12.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is 35% of 260?',
      choices: ["91", "78", "104", "85"],
      answer: "91",
      hints: [
        'Convert 35% to a decimal: 0.35.',
        'Multiply: 0.35 \u00d7 260.',
        '0.35 \u00d7 260 = 91.'
      ],
      explanation: [
        '35% = 0.35.',
        '0.35 \u00d7 260 = 91.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'What is 50% of 124?',
      choices: ["62", "64", "50", "72"],
      answer: "62",
      hints: [
        '50% means half.',
        '124 \u00f7 2 = ?',
        '124 \u00f7 2 = 62.'
      ],
      explanation: [
        '50% of 124 = 124 \u00f7 2 = 62.',
        'The answer is 62.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is 15% of 240?',
      answer: "36",
      hints: [
        "Convert 15% to a decimal: 0.15.",
        "Multiply: 0.15 × 240.",
        "0.15 × 240 = 36."
      ],
      explanation: [
        "15% = 0.15.",
        "0.15 × 240 = 36."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is 50% of 160?',
      choices: ["80", "60", "100", "32"],
      answer: "80",
      hints: [
        "50% means half.",
        "160 ÷ 2 = ?",
        "160 ÷ 2 = 80."
      ],
      explanation: [
        "50% of 160 = 160 ÷ 2 = 80.",
        "The answer is 80."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 40% of 175?',
      answer: "70",
      hints: [
        "Convert 40% to a decimal: 0.40.",
        "Multiply: 0.40 × 175.",
        "0.40 × 175 = 70."
      ],
      explanation: [
        "40% = 0.40.",
        "0.40 × 175 = 70."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is 20% of 150?',
      answer: "30",
      hints: [
        "Convert 20% to a decimal: 0.20.",
        "Multiply: 0.20 × 150.",
        "0.20 × 150 = 30."
      ],
      explanation: [
        "20% = 0.20.",
        "0.20 × 150 = 30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is 35% of 200?',
      choices: ["70", "60", "80", "35"],
      answer: "70",
      hints: [
        "Convert 35% to a decimal: 0.35.",
        "Multiply: 0.35 × 200.",
        "0.35 × 200 = 70."
      ],
      explanation: [
        "35% = 0.35.",
        "0.35 × 200 = 70."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is 15% of 360?',
      answer: "54",
      hints: [
        "Convert 15% to a decimal: 0.15.",
        "Multiply: 0.15 × 360.",
        "0.15 × 360 = 54."
      ],
      explanation: [
        "15% = 0.15.",
        "0.15 × 360 = 54."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: '18 out of 72 is what percent?',
      answer: "25",
      hints: [
        "Divide the part by the whole: 18 ÷ 72.",
        "18 ÷ 72 = 0.25.",
        "Multiply by 100: 0.25 × 100 = 25."
      ],
      explanation: [
        "18 ÷ 72 = 0.25.",
        "0.25 × 100 = <strong>25%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A basketball player made 27 out of 36 free throws. What percent did she make?',
      choices: ["75%", "80%", "70%", "65%"],
      answer: "75%",
      hints: [
        "Divide makes by attempts: 27 ÷ 36.",
        "27 ÷ 36 = 0.75.",
        "0.75 × 100 = 75%."
      ],
      explanation: [
        "27 ÷ 36 = 0.75.",
        "0.75 × 100 = <strong>75%</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A student scored 42 out of 60 on a test. What percent is that?',
      answer: "70",
      hints: [
        "Divide the score by the total: 42 ÷ 60.",
        "42 ÷ 60 = 0.70.",
        "Multiply by 100: 0.70 × 100 = 70."
      ],
      explanation: [
        "42 ÷ 60 = 0.70.",
        "0.70 × 100 = <strong>70%</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 4: Finding the Percent (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'What percent of 50 is 15?',
      choices: ["30%", "25%", "35%", "20%"],
      answer: "30%",
      hints: [
        "Divide the part by the whole.",
        "15 ÷ 50 = 0.30.",
        "Multiply by 100: 30%."
      ],
      explanation: [
        "15 ÷ 50 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What percent of 40 is 10?',
      answer: "25",
      hints: [
        "Divide 10 by 40.",
        "10 ÷ 40 = 0.25.",
        "Multiply by 100: 25%."
      ],
      explanation: [
        "10 ÷ 40 = 0.25.",
        "0.25 × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 80 is 12?',
      choices: ["15%", "12%", "20%", "10%"],
      answer: "15%",
      hints: [
        "Divide 12 by 80.",
        "12 ÷ 80 = 0.15.",
        "0.15 × 100 = 15%."
      ],
      explanation: [
        "12 ÷ 80 = 0.15.",
        "0.15 × 100 = 15%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 200 is 70?',
      answer: "35",
      hints: [
        "Divide 70 by 200.",
        "70 ÷ 200 = 0.35.",
        "0.35 × 100 = 35%."
      ],
      explanation: [
        "70 ÷ 200 = 0.35.",
        "0.35 × 100 = 35%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 25 is 5?',
      choices: ["20%", "25%", "15%", "10%"],
      answer: "20%",
      hints: [
        "Divide 5 by 25.",
        "5 ÷ 25 = 0.20.",
        "0.20 × 100 = 20%."
      ],
      explanation: [
        "5 ÷ 25 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 60 is 9?',
      answer: "15",
      hints: [
        "Divide 9 by 60.",
        "9 ÷ 60 = 0.15.",
        "0.15 × 100 = 15%."
      ],
      explanation: [
        "9 ÷ 60 = 0.15.",
        "0.15 × 100 = 15%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What percent of 20 is 4?',
      choices: ["20%", "25%", "15%", "10%"],
      answer: "20%",
      hints: [
        "Divide 4 by 20.",
        "4 ÷ 20 = 0.20.",
        "0.20 × 100 = 20%."
      ],
      explanation: [
        "4 ÷ 20 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 150 is 45?',
      answer: "30",
      hints: [
        "Divide 45 by 150.",
        "45 ÷ 150 = 0.30.",
        "0.30 × 100 = 30%."
      ],
      explanation: [
        "45 ÷ 150 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 75 is 15?',
      choices: ["20%", "15%", "25%", "10%"],
      answer: "20%",
      hints: [
        "Divide 15 by 75.",
        "15 ÷ 75 = 0.20.",
        "0.20 × 100 = 20%."
      ],
      explanation: [
        "15 ÷ 75 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What percent of 10 is 3?',
      answer: "30",
      hints: [
        "Divide 3 by 10.",
        "3 ÷ 10 = 0.30.",
        "0.30 × 100 = 30%."
      ],
      explanation: [
        "3 ÷ 10 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 125 is 25?',
      answer: "20",
      hints: [
        "Divide 25 by 125.",
        "25 ÷ 125 = 0.20.",
        "0.20 × 100 = 20%."
      ],
      explanation: [
        "25 ÷ 125 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What percent of 50 is 10?',
      choices: ["20%", "10%", "25%", "15%"],
      answer: "20%",
      hints: [
        "Divide the part by the whole.",
        "10 ÷ 50 = 0.20.",
        "Multiply by 100: 20%."
      ],
      explanation: [
        "10 ÷ 50 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 90 is 27?',
      answer: "30",
      hints: [
        "Divide 27 by 90.",
        "27 ÷ 90 = 0.30.",
        "0.30 × 100 = 30%."
      ],
      explanation: [
        "27 ÷ 90 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 160 is 40?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Divide 40 by 160.",
        "40 ÷ 160 = 0.25.",
        "0.25 × 100 = 25%."
      ],
      explanation: [
        "40 ÷ 160 = 0.25.",
        "0.25 × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What percent of 25 is 5?',
      answer: "20",
      hints: [
        "Divide 5 by 25.",
        "5 ÷ 25 = 0.20.",
        "0.20 × 100 = 20%."
      ],
      explanation: [
        "5 ÷ 25 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 120 is 30?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Divide 30 by 120.",
        "30 ÷ 120 = 0.25.",
        "0.25 × 100 = 25%."
      ],
      explanation: [
        "30 ÷ 120 = 0.25.",
        "0.25 × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 250 is 50?',
      answer: "20",
      hints: [
        "Divide 50 by 250.",
        "50 ÷ 250 = 0.20.",
        "0.20 × 100 = 20%."
      ],
      explanation: [
        "50 ÷ 250 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 80 is 20?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Divide 20 by 80.",
        "20 ÷ 80 = 0.25.",
        "0.25 × 100 = 25%."
      ],
      explanation: [
        "20 ÷ 80 = 0.25.",
        "0.25 × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What percent of 20 is 8?',
      answer: "40",
      hints: [
        "Divide 8 by 20.",
        "8 ÷ 20 = 0.40.",
        "0.40 × 100 = 40%."
      ],
      explanation: [
        "8 ÷ 20 = 0.40.",
        "0.40 × 100 = 40%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 300 is 75?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Divide 75 by 300.",
        "75 ÷ 300 = 0.25.",
        "0.25 × 100 = 25%."
      ],
      explanation: [
        "75 ÷ 300 = 0.25.",
        "0.25 × 100 = 25%."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What percent of 50 is 20?',
      choices: ["40%", "20%", "25%", "50%"],
      answer: "40%",
      hints: [
        "Divide the part by the whole.",
        "20 ÷ 50 = 0.40.",
        "Multiply by 100: 40%."
      ],
      explanation: [
        "20 ÷ 50 = 0.40.",
        "0.40 × 100 = 40%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 200 is 90?',
      answer: "45",
      hints: [
        "Divide 90 by 200.",
        "90 ÷ 200 = 0.45.",
        "0.45 × 100 = 45%."
      ],
      explanation: [
        "90 ÷ 200 = 0.45.",
        "0.45 × 100 = 45%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 60 is 24?',
      choices: ["40%", "24%", "30%", "48%"],
      answer: "40%",
      hints: [
        "Divide 24 by 60.",
        "24 ÷ 60 = 0.40.",
        "0.40 × 100 = 40%."
      ],
      explanation: [
        "24 ÷ 60 = 0.40.",
        "0.40 × 100 = 40%."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What percent of 40 is 16?',
      choices: ["40%", "16%", "25%", "30%"],
      answer: "40%",
      hints: [
        'Divide the part by the whole.',
        '16 \u00f7 40 = 0.40.',
        'Multiply by 100: 40%.'
      ],
      explanation: [
        '16 \u00f7 40 = 0.40.',
        '0.40 \u00d7 100 = 40%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 250 is 75?',
      answer: "30",
      hints: [
        'Divide 75 by 250.',
        '75 \u00f7 250 = 0.30.',
        '0.30 \u00d7 100 = 30%.'
      ],
      explanation: [
        '75 \u00f7 250 = 0.30.',
        '0.30 \u00d7 100 = 30%.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 125 is 50?',
      choices: ["40%", "50%", "25%", "35%"],
      answer: "40%",
      hints: [
        'Divide 50 by 125.',
        '50 \u00f7 125 = 0.40.',
        '0.40 \u00d7 100 = 40%.'
      ],
      explanation: [
        '50 \u00f7 125 = 0.40.',
        '0.40 \u00d7 100 = 40%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What percent is 18 out of 72?',
      answer: "25",
      hints: [
        'Divide the part by the whole.',
        '18 \u00f7 72 = 0.25.',
        '0.25 \u00d7 100 = 25%.'
      ],
      explanation: [
        '18 \u00f7 72 = 0.25.',
        '0.25 \u00d7 100 = 25%.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What percent is 63 out of 210?',
      choices: ["30%", "25%", "35%", "33%"],
      answer: "30%",
      hints: [
        'Divide the part by the whole.',
        '63 \u00f7 210 = 0.30.',
        '0.30 \u00d7 100 = 30%.'
      ],
      explanation: [
        '63 \u00f7 210 = 0.30.',
        '0.30 \u00d7 100 = 30%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What percent is 42 out of 168?',
      answer: "25",
      hints: [
        'Divide the part by the whole.',
        '42 \u00f7 168 = 0.25.',
        '0.25 \u00d7 100 = 25%.'
      ],
      explanation: [
        '42 \u00f7 168 = 0.25.',
        '0.25 \u00d7 100 = 25%.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 60 is 9?',
      choices: ["15%", "12%", "18%", "9%"],
      answer: "15%",
      hints: [
        "Divide the part by the whole.",
        "9 ÷ 60 = 0.15.",
        "Multiply by 100: 15%."
      ],
      explanation: [
        "9 ÷ 60 = 0.15.",
        "0.15 × 100 = 15%."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What percent of 25 is 5?',
      answer: "20",
      hints: [
        "Divide 5 by 25.",
        "5 ÷ 25 = 0.20.",
        "Multiply by 100: 20%."
      ],
      explanation: [
        "5 ÷ 25 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 150 is 45?',
      choices: ["30%", "25%", "35%", "20%"],
      answer: "30%",
      hints: [
        "Divide the part by the whole.",
        "45 ÷ 150 = 0.30.",
        "Multiply by 100: 30%."
      ],
      explanation: [
        "45 ÷ 150 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What percent of 80 is 24?',
      choices: ["30%", "25%", "35%", "20%"],
      answer: "30%",
      hints: [
        "Divide the part by the whole.",
        "24 ÷ 80 = 0.30.",
        "Multiply by 100: 30%."
      ],
      explanation: [
        "24 ÷ 80 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What percent of 125 is 25?',
      answer: "20",
      hints: [
        "Divide 25 by 125.",
        "25 ÷ 125 = 0.20.",
        "Multiply by 100: 20%."
      ],
      explanation: [
        "25 ÷ 125 = 0.20.",
        "0.20 × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What percent of 90 is 27?',
      choices: ["30%", "25%", "33%", "27%"],
      answer: "30%",
      hints: [
        "Divide the part by the whole.",
        "27 ÷ 90 = 0.30.",
        "Multiply by 100: 30%."
      ],
      explanation: [
        "27 ÷ 90 = 0.30.",
        "0.30 × 100 = 30%."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: '40% of what number is 26?',
      answer: "65",
      hints: [
        "Set up: 0.40 × n = 26.",
        "Divide both sides by 0.40.",
        "n = 26 ÷ 0.40 = 65."
      ],
      explanation: [
        "0.40 × n = 26.",
        "n = 26 ÷ 0.40 = <strong>65</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '15% of what number is 27?',
      choices: ["180", "200", "150", "160"],
      answer: "180",
      hints: [
        "Set up: 0.15 × n = 27.",
        "Divide both sides by 0.15.",
        "n = 27 ÷ 0.15 = 180."
      ],
      explanation: [
        "0.15 × n = 27.",
        "n = 27 ÷ 0.15 = <strong>180</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '75% of what number is 54?',
      answer: "72",
      hints: [
        "Set up: 0.75 × n = 54.",
        "Divide both sides by 0.75.",
        "n = 54 ÷ 0.75 = 72."
      ],
      explanation: [
        "0.75 × n = 54.",
        "n = 54 ÷ 0.75 = <strong>72</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 5: Discount & Markup (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'A shirt costs $40 and is 25% off. What is the sale price?',
      choices: ["$30", "$35", "$25", "$20"],
      answer: "$30",
      hints: [
        "Find the discount: 25% of $40.",
        "0.25 × 40 = $10 discount.",
        "Sale price = $40 − $10 = $30."
      ],
      explanation: [
        "Discount = 0.25 × $40 = $10.",
        "Sale price = $40 − $10 = $30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A book originally costs $24. It is marked up 50%. What is the new price in dollars?',
      answer: "36",
      hints: [
        "Markup = 50% of $24.",
        "0.50 × 24 = $12.",
        "New price = $24 + $12 = $36."
      ],
      explanation: [
        "Markup = 0.50 × $24 = $12.",
        "New price = $24 + $12 = $36."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A pair of shoes costs $80 and is 30% off. What is the sale price?',
      choices: ["$56", "$50", "$60", "$64"],
      answer: "$56",
      hints: [
        "Discount = 30% of $80.",
        "0.30 × 80 = $24.",
        "Sale price = $80 − $24 = $56."
      ],
      explanation: [
        "Discount = 0.30 × $80 = $24.",
        "Sale price = $80 − $24 = $56."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A store buys a lamp for $25 and marks it up by 60%. What is the selling price in dollars?',
      answer: "40",
      hints: [
        "Markup = 60% of $25.",
        "0.60 × 25 = $15.",
        "Selling price = $25 + $15 = $40."
      ],
      explanation: [
        "Markup = 0.60 × $25 = $15.",
        "Selling price = $25 + $15 = $40."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A jacket costs $50 after a 20% discount. What was the original price?',
      choices: ["$62.50", "$60", "$55", "$70"],
      answer: "$62.50",
      hints: [
        "After 20% off, you pay 80% of the original.",
        "So 0.80 × original = $50.",
        "Original = $50 ÷ 0.80 = $62.50."
      ],
      explanation: [
        "80% of original = $50.",
        "Original = $50 ÷ 0.80 = $62.50."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A tablet costs $200 and is marked down 35%. What is the sale price in dollars?',
      answer: "130",
      hints: [
        "Discount = 35% of $200.",
        "0.35 × 200 = $70.",
        "Sale price = $200 − $70 = $130."
      ],
      explanation: [
        "Discount = 0.35 × $200 = $70.",
        "Sale price = $200 − $70 = $130."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A skateboard costs $45 and is marked up 40%. What is the new price?',
      choices: ["$63", "$58", "$67", "$54"],
      answer: "$63",
      hints: [
        "Markup = 40% of $45.",
        "0.40 × 45 = $18.",
        "New price = $45 + $18 = $63."
      ],
      explanation: [
        "Markup = 0.40 × $45 = $18.",
        "New price = $45 + $18 = $63."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A coat costs $72 after a 10% discount. What was the original price?',
      choices: ["$80", "$75", "$82", "$79.20"],
      answer: "$80",
      hints: [
        "After 10% off, you pay 90% of the original.",
        "0.90 × original = $72.",
        "Original = $72 ÷ 0.90 = $80."
      ],
      explanation: [
        "90% of original = $72.",
        "Original = $72 ÷ 0.90 = $80."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A backpack costs $35 and is 20% off. What is the sale price in dollars?',
      answer: "28",
      hints: [
        "Discount = 20% of $35.",
        "0.20 × 35 = $7.",
        "Sale price = $35 − $7 = $28."
      ],
      explanation: [
        "Discount = 0.20 × $35 = $7.",
        "Sale price = $35 − $7 = $28."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A store buys a watch for $60 and marks it up by 75%. What is the selling price?',
      choices: ["$105", "$95", "$120", "$90"],
      answer: "$105",
      hints: [
        "Markup = 75% of $60.",
        "0.75 × 60 = $45.",
        "Selling price = $60 + $45 = $105."
      ],
      explanation: [
        "Markup = 0.75 × $60 = $45.",
        "Selling price = $60 + $45 = $105."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A bike costs $90 after a 40% discount. What was the original price in dollars?',
      answer: "150",
      hints: [
        "After 40% off, you pay 60% of the original.",
        "0.60 × original = $90.",
        "Original = $90 ÷ 0.60 = $150."
      ],
      explanation: [
        "60% of original = $90.",
        "Original = $90 ÷ 0.60 = $150."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A sweater costs $55 and is 20% off. What is the sale price?',
      choices: ["$44", "$45", "$40", "$35"],
      answer: "$44",
      hints: [
        "Find the discount: 20% of $55.",
        "0.20 × 55 = $11 discount.",
        "Sale price = $55 − $11 = $44."
      ],
      explanation: [
        "Discount = 0.20 × $55 = $11.",
        "Sale price = $55 − $11 = $44."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A store buys a chair for $80 and marks it up by 45%. What is the selling price in dollars?',
      answer: "116",
      hints: [
        "Markup = 45% of $80.",
        "0.45 × 80 = $36.",
        "Selling price = $80 + $36 = $116."
      ],
      explanation: [
        "Markup = 0.45 × $80 = $36.",
        "Selling price = $80 + $36 = $116."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A phone case costs $18 after a 25% discount. What was the original price?',
      choices: ["$24", "$22.50", "$20", "$25"],
      answer: "$24",
      hints: [
        "After 25% off, you pay 75% of the original.",
        "0.75 × original = $18.",
        "Original = $18 ÷ 0.75 = $24."
      ],
      explanation: [
        "75% of original = $18.",
        "Original = $18 ÷ 0.75 = $24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A hat costs $30 and is 15% off. What is the sale price in dollars? Enter as a decimal.',
      answer: "25.5",
      hints: [
        "Discount = 15% of $30.",
        "0.15 × 30 = $4.50.",
        "Sale price = $30 − $4.50 = $25.50."
      ],
      explanation: [
        "Discount = 0.15 × $30 = $4.50.",
        "Sale price = $30 − $4.50 = $25.50."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A store buys headphones for $50 and marks them up by 80%. What is the selling price?',
      choices: ["$90", "$80", "$100", "$130"],
      answer: "$90",
      hints: [
        "Markup = 80% of $50.",
        "0.80 × 50 = $40.",
        "Selling price = $50 + $40 = $90."
      ],
      explanation: [
        "Markup = 0.80 × $50 = $40.",
        "Selling price = $50 + $40 = $90."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A printer costs $96 after a 20% discount. What was the original price?',
      choices: ["$120", "$115.20", "$110", "$100"],
      answer: "$120",
      hints: [
        "After 20% off, you pay 80% of the original.",
        "0.80 × original = $96.",
        "Original = $96 ÷ 0.80 = $120."
      ],
      explanation: [
        "80% of original = $96.",
        "Original = $96 ÷ 0.80 = $120."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A bike helmet costs $60 and is 15% off. What is the sale price?',
      choices: ["$51", "$54", "$45", "$48"],
      answer: "$51",
      hints: [
        "Find the discount: 15% of $60.",
        "0.15 × 60 = $9 discount.",
        "Sale price = $60 − $9 = $51."
      ],
      explanation: [
        "Discount = 0.15 × $60 = $9.",
        "Sale price = $60 − $9 = $51."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A store buys a vase for $40 and marks it up by 55%. What is the selling price in dollars?',
      answer: "62",
      hints: [
        "Markup = 55% of $40.",
        "0.55 × 40 = $22.",
        "Selling price = $40 + $22 = $62."
      ],
      explanation: [
        "Markup = 0.55 × $40 = $22.",
        "Selling price = $40 + $22 = $62."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A pair of jeans costs $48 after a 40% discount. What was the original price?',
      choices: ["$80", "$72", "$68", "$96"],
      answer: "$80",
      hints: [
        "After 40% off, you pay 60% of the original.",
        "0.60 × original = $48.",
        "Original = $48 ÷ 0.60 = $80."
      ],
      explanation: [
        "60% of original = $48.",
        "Original = $48 ÷ 0.60 = $80."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'A lamp costs $70 and is 30% off. What is the sale price?',
      choices: ["$49", "$56", "$42", "$63"],
      answer: "$49",
      hints: [
        "Find the discount: 30% of $70.",
        "0.30 × 70 = $21 discount.",
        "Sale price = $70 − $21 = $49."
      ],
      explanation: [
        "Discount = 0.30 × $70 = $21.",
        "Sale price = $70 − $21 = $49."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A store buys a rug for $90 and marks it up by 35%. What is the selling price in dollars? Enter as a decimal.',
      answer: "121.5",
      hints: [
        "Markup = 35% of $90.",
        "0.35 × 90 = $31.50.",
        "Selling price = $90 + $31.50 = $121.50."
      ],
      explanation: [
        "Markup = 0.35 × $90 = $31.50.",
        "Selling price = $90 + $31.50 = $121.50."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A skateboard costs $63 after a 30% discount. What was the original price?',
      choices: ["$90", "$81", "$84", "$100"],
      answer: "$90",
      hints: [
        "After 30% off, you pay 70% of the original.",
        "0.70 × original = $63.",
        "Original = $63 ÷ 0.70 = $90."
      ],
      explanation: [
        "70% of original = $63.",
        "Original = $63 ÷ 0.70 = $90."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'A pair of sneakers costs $75 and is 20% off. What is the sale price?',
      choices: ["$60", "$55", "$65", "$70"],
      answer: "$60",
      hints: [
        'Find the discount: 20% of $75.',
        '0.20 \u00d7 75 = $15 discount.',
        'Sale price = $75 \u2212 $15 = $60.'
      ],
      explanation: [
        'Discount = 0.20 \u00d7 $75 = $15.',
        'Sale price = $75 \u2212 $15 = $60.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A store buys a painting for $120 and marks it up by 65%. What is the selling price in dollars?',
      answer: "198",
      hints: [
        'Markup = 65% of $120.',
        '0.65 \u00d7 120 = $78.',
        'Selling price = $120 + $78 = $198.'
      ],
      explanation: [
        'Markup = 0.65 \u00d7 $120 = $78.',
        'Selling price = $120 + $78 = $198.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A camera costs $135 after a 10% discount. What was the original price?',
      choices: ["$150", "$148.50", "$145", "$140"],
      answer: "$150",
      hints: [
        'After 10% off, you pay 90% of the original.',
        '0.90 \u00d7 original = $135.',
        'Original = $135 \u00f7 0.90 = $150.'
      ],
      explanation: [
        '90% of original = $135.',
        'Original = $135 \u00f7 0.90 = $150.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A jacket costs $85. It is on sale for 30% off. What is the sale price?',
      choices: ["$59.50", "$55.00", "$60.50", "$65.00"],
      answer: "$59.50",
      hints: [
        'Discount = 30% of $85 = 0.30 \u00d7 85.',
        '0.30 \u00d7 85 = $25.50.',
        'Sale price = $85 \u2212 $25.50 = $59.50.'
      ],
      explanation: [
        'Discount = 0.30 \u00d7 $85 = $25.50.',
        'Sale price = $85 \u2212 $25.50 = $59.50.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A store marks up a $42 item by 60%. What is the selling price?',
      answer: "67.2",
      hints: [
        'Markup amount = 60% of $42 = 0.60 \u00d7 42.',
        '0.60 \u00d7 42 = $25.20.',
        'Selling price = $42 + $25.20 = $67.20.'
      ],
      explanation: [
        'Markup = 0.60 \u00d7 $42 = $25.20.',
        'Selling price = $42 + $25.20 = $67.20.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'After a 15% discount, a TV costs $510. What was the original price?',
      choices: ["$600", "$585", "$550", "$620"],
      answer: "$600",
      hints: [
        'After 15% off, you pay 85% of the original.',
        '0.85 \u00d7 original = $510.',
        'Original = $510 \u00f7 0.85 = $600.'
      ],
      explanation: [
        '85% of original = $510.',
        'Original = $510 \u00f7 0.85 = $600.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A jacket originally costs $85. It is on sale for 20% off. What is the sale price in dollars?',
      answer: "68",
      hints: [
        "Discount = 20% of $85 = 0.20 × 85 = $17.",
        "Sale price = $85 − $17.",
        "Sale price = $68."
      ],
      explanation: [
        "Discount = 0.20 × $85 = $17.",
        "Sale price = $85 − $17 = $68."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A store marks up a $40 item by 35%. What is the selling price?',
      choices: ["$54", "$52", "$56", "$48"],
      answer: "$54",
      hints: [
        "Markup = 35% of $40 = 0.35 × 40 = $14.",
        "Selling price = $40 + $14.",
        "Selling price = $54."
      ],
      explanation: [
        "Markup = 0.35 × $40 = $14.",
        "Selling price = $40 + $14 = $54."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A $120 backpack is discounted 25%. What is the sale price?',
      choices: ["$90", "$95", "$85", "$80"],
      answer: "$90",
      hints: [
        "Discount = 25% of $120 = 0.25 × 120 = $30.",
        "Sale price = $120 − $30.",
        "Sale price = $90."
      ],
      explanation: [
        "Discount = 0.25 × $120 = $30.",
        "Sale price = $120 − $30 = $90."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A jacket costs $80 and is 30% off. What is the sale price?',
      choices: ["$56", "$50", "$60", "$64"],
      answer: "$56",
      hints: [
        "Find the discount: 30% of $80.",
        "0.30 × 80 = $24 discount.",
        "Sale price = $80 − $24 = $56."
      ],
      explanation: [
        "Discount = 0.30 × $80 = $24.",
        "Sale price = $80 − $24 = $56."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A store buys a table for $120 and marks it up 75%. What is the selling price in dollars?',
      answer: "210",
      hints: [
        "Markup = 75% of $120.",
        "0.75 × 120 = $90.",
        "Selling price = $120 + $90 = $210."
      ],
      explanation: [
        "Markup = 0.75 × $120 = $90.",
        "Selling price = $120 + $90 = $210."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A laptop originally costs $600 and is on sale for 15% off. What is the sale price?',
      choices: ["$510", "$540", "$500", "$480"],
      answer: "$510",
      hints: [
        "Find the discount: 15% of $600.",
        "0.15 × 600 = $90.",
        "Sale price = $600 − $90 = $510."
      ],
      explanation: [
        "Discount = 0.15 × $600 = $90.",
        "Sale price = $600 − $90 = $510."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'The price of a jacket went from $50 to $62. What is the percent increase?',
      answer: "24",
      hints: [
        "Find the amount of change: $62 − $50 = $12.",
        "Divide by the original: 12 ÷ 50 = 0.24.",
        "Multiply by 100: 0.24 × 100 = 24."
      ],
      explanation: [
        "Change = $62 − $50 = $12.",
        "Percent increase = (12 ÷ 50) × 100 = <strong>24%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A town\'s population grew from 1,200 to 1,500. What is the percent increase?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Change = 1500 − 1200 = 300.",
        "Divide by original: 300 ÷ 1200.",
        "300 ÷ 1200 = 0.25 = 25%."
      ],
      explanation: [
        "Change = 1500 − 1200 = 300.",
        "Percent increase = (300 ÷ 1200) × 100 = <strong>25%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A plant grew from 8 inches to 11 inches. What is the percent increase?',
      choices: ["37.5%", "30%", "27.5%", "40%"],
      answer: "37.5%",
      hints: [
        "Change = 11 − 8 = 3 inches.",
        "Divide by original: 3 ÷ 8 = 0.375.",
        "0.375 × 100 = 37.5%."
      ],
      explanation: [
        "Change = 11 − 8 = 3.",
        "Percent increase = (3 ÷ 8) × 100 = <strong>37.5%</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 6: Percent Increase & Decrease (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'A town\'s population grew from 200 to 250. What is the percent increase?',
      choices: ["25%", "20%", "50%", "30%"],
      answer: "25%",
      hints: [
        "Change = 250 − 200 = 50.",
        "Percent change = (change ÷ original) × 100.",
        "(50 ÷ 200) × 100 = 25%."
      ],
      explanation: [
        "Change = 250 − 200 = 50.",
        "Percent increase = (50 ÷ 200) × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The price of a toy went from $30 to $24. What is the percent decrease?',
      answer: "20",
      hints: [
        "Change = 30 − 24 = 6.",
        "Percent change = (6 ÷ 30) × 100.",
        "(6 ÷ 30) × 100 = 20%."
      ],
      explanation: [
        "Change = $30 − $24 = $6.",
        "Percent decrease = (6 ÷ 30) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A stock price went from $80 to $100. What is the percent increase?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Change = 100 − 80 = 20.",
        "Percent increase = (20 ÷ 80) × 100.",
        "(20 ÷ 80) × 100 = 25%."
      ],
      explanation: [
        "Change = $100 − $80 = $20.",
        "Percent increase = (20 ÷ 80) × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Enrollment dropped from 500 to 400 students. What is the percent decrease?',
      answer: "20",
      hints: [
        "Change = 500 − 400 = 100.",
        "Percent decrease = (100 ÷ 500) × 100.",
        "(100 ÷ 500) × 100 = 20%."
      ],
      explanation: [
        "Change = 500 − 400 = 100.",
        "Percent decrease = (100 ÷ 500) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A shirt was $60 and is now $75. What is the percent increase?',
      choices: ["25%", "15%", "20%", "30%"],
      answer: "25%",
      hints: [
        "Change = 75 − 60 = 15.",
        "Percent increase = (15 ÷ 60) × 100.",
        "(15 ÷ 60) × 100 = 25%."
      ],
      explanation: [
        "Change = $75 − $60 = $15.",
        "Percent increase = (15 ÷ 60) × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A bike was priced at $150 and is now $180. What is the percent increase?',
      answer: "20",
      hints: [
        "Change = 180 − 150 = 30.",
        "Percent change = (30 ÷ 150) × 100.",
        "(30 ÷ 150) × 100 = 20%."
      ],
      explanation: [
        "Change = $180 − $150 = $30.",
        "Percent increase = (30 ÷ 150) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A temperature dropped from 40°F to 32°F. What is the percent decrease?',
      choices: ["20%", "8%", "25%", "32%"],
      answer: "20%",
      hints: [
        "Change = 40 − 32 = 8.",
        "Percent decrease = (8 ÷ 40) × 100.",
        "(8 ÷ 40) × 100 = 20%."
      ],
      explanation: [
        "Change = 40 − 32 = 8.",
        "Percent decrease = (8 ÷ 40) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A company\'s revenue went from $250,000 to $300,000. What is the percent increase?',
      choices: ["20%", "25%", "15%", "50%"],
      answer: "20%",
      hints: [
        "Change = 300,000 − 250,000 = 50,000.",
        "Percent increase = (50,000 ÷ 250,000) × 100.",
        "(50,000 ÷ 250,000) × 100 = 20%."
      ],
      explanation: [
        "Change = $300,000 − $250,000 = $50,000.",
        "Percent increase = (50,000 ÷ 250,000) × 100 = 20%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A plant grew from 16 inches to 20 inches. What is the percent increase?',
      answer: "25",
      hints: [
        "Change = 20 − 16 = 4.",
        "Percent change = (4 ÷ 16) × 100.",
        "(4 ÷ 16) × 100 = 25%."
      ],
      explanation: [
        "Change = 20 − 16 = 4.",
        "Percent increase = (4 ÷ 16) × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A test score went from 70 to 84. What is the percent increase?',
      choices: ["20%", "14%", "25%", "16%"],
      answer: "20%",
      hints: [
        "Change = 84 − 70 = 14.",
        "Percent increase = (14 ÷ 70) × 100.",
        "(14 ÷ 70) × 100 = 20%."
      ],
      explanation: [
        "Change = 84 − 70 = 14.",
        "Percent increase = (14 ÷ 70) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A store\'s inventory dropped from 120 items to 90 items. What is the percent decrease?',
      choices: ["25%", "30%", "20%", "15%"],
      answer: "25%",
      hints: [
        "Change = 120 − 90 = 30.",
        "Percent decrease = (30 ÷ 120) × 100.",
        "(30 ÷ 120) × 100 = 25%."
      ],
      explanation: [
        "Change = 120 − 90 = 30.",
        "Percent decrease = (30 ÷ 120) × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A book\'s price went from $25 to $30. What is the percent increase?',
      answer: "20",
      hints: [
        "Change = 30 − 25 = 5.",
        "Percent change = (5 ÷ 25) × 100.",
        "(5 ÷ 25) × 100 = 20%."
      ],
      explanation: [
        "Change = $30 − $25 = $5.",
        "Percent increase = (5 ÷ 25) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A jar had 60 marbles but now has 45. What is the percent decrease?',
      choices: ["25%", "15%", "20%", "30%"],
      answer: "25%",
      hints: [
        "Change = 60 − 45 = 15.",
        "Percent decrease = (15 ÷ 60) × 100.",
        "(15 ÷ 60) × 100 = 25%."
      ],
      explanation: [
        "Change = 60 − 45 = 15.",
        "Percent decrease = (15 ÷ 60) × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A salary went from $3,000 to $3,600 per month. What is the percent increase?',
      answer: "20",
      hints: [
        "Change = 3600 − 3000 = 600.",
        "Percent change = (600 ÷ 3000) × 100.",
        "(600 ÷ 3000) × 100 = 20%."
      ],
      explanation: [
        "Change = $3,600 − $3,000 = $600.",
        "Percent increase = (600 ÷ 3000) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A car\'s value dropped from $20,000 to $16,000. What is the percent decrease?',
      choices: ["20%", "25%", "16%", "10%"],
      answer: "20%",
      hints: [
        "Change = 20,000 − 16,000 = 4,000.",
        "Percent decrease = (4,000 ÷ 20,000) × 100.",
        "(4,000 ÷ 20,000) × 100 = 20%."
      ],
      explanation: [
        "Change = $20,000 − $16,000 = $4,000.",
        "Percent decrease = (4,000 ÷ 20,000) × 100 = 20%."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A school\'s enrollment grew from 400 to 500 students. What is the percent increase?',
      answer: "25",
      hints: [
        "Change = 500 − 400 = 100.",
        "Percent change = (100 ÷ 400) × 100.",
        "(100 ÷ 400) × 100 = 25%."
      ],
      explanation: [
        "Change = 500 − 400 = 100.",
        "Percent increase = (100 ÷ 400) × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A laptop price went from $800 to $640. What is the percent decrease?',
      choices: ["20%", "25%", "15%", "16%"],
      answer: "20%",
      hints: [
        "Change = 800 − 640 = 160.",
        "Percent decrease = (160 ÷ 800) × 100.",
        "(160 ÷ 800) × 100 = 20%."
      ],
      explanation: [
        "Change = $800 − $640 = $160.",
        "Percent decrease = (160 ÷ 800) × 100 = 20%."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A tree grew from 8 feet to 10 feet. What is the percent increase?',
      answer: "25",
      hints: [
        "Change = 10 − 8 = 2.",
        "Percent change = (2 ÷ 8) × 100.",
        "(2 ÷ 8) × 100 = 25%."
      ],
      explanation: [
        "Change = 10 − 8 = 2.",
        "Percent increase = (2 ÷ 8) × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A magazine subscription went from $48 to $36. What is the percent decrease?',
      choices: ["25%", "20%", "30%", "12%"],
      answer: "25%",
      hints: [
        "Change = 48 − 36 = 12.",
        "Percent decrease = (12 ÷ 48) × 100.",
        "(12 ÷ 48) × 100 = 25%."
      ],
      explanation: [
        "Change = $48 − $36 = $12.",
        "Percent decrease = (12 ÷ 48) × 100 = 25%."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A website had 600 visitors last month and 750 this month. What is the percent increase?',
      answer: "25",
      hints: [
        "Change = 750 − 600 = 150.",
        "Percent change = (150 ÷ 600) × 100.",
        "(150 ÷ 600) × 100 = 25%."
      ],
      explanation: [
        "Change = 750 − 600 = 150.",
        "Percent increase = (150 ÷ 600) × 100 = 25%."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'A shirt price went from $40 to $50. What is the percent increase?',
      answer: "25",
      hints: [
        "Change = 50 − 40 = 10.",
        "Percent change = (10 ÷ 40) × 100.",
        "(10 ÷ 40) × 100 = 25%."
      ],
      explanation: [
        "Change = $50 − $40 = $10.",
        "Percent increase = (10 ÷ 40) × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A pool had 320 gallons but now has 240 gallons. What is the percent decrease?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Change = 320 − 240 = 80.",
        "Percent decrease = (80 ÷ 320) × 100.",
        "(80 ÷ 320) × 100 = 25%."
      ],
      explanation: [
        "Change = 320 − 240 = 80.",
        "Percent decrease = (80 ÷ 320) × 100 = 25%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A store had 180 items and now has 225 items. What is the percent increase?',
      choices: ["25%", "20%", "30%", "45%"],
      answer: "25%",
      hints: [
        "Change = 225 − 180 = 45.",
        "Percent increase = (45 ÷ 180) × 100.",
        "(45 ÷ 180) × 100 = 25%."
      ],
      explanation: [
        "Change = 225 − 180 = 45.",
        "Percent increase = (45 ÷ 180) × 100 = 25%."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'A stock price rose from $40 to $52. What is the percent increase?',
      choices: ["30%", "20%", "25%", "12%"],
      answer: "30%",
      hints: [
        'Change = 52 \u2212 40 = 12.',
        'Percent change = (change \u00f7 original) \u00d7 100.',
        '(12 \u00f7 40) \u00d7 100 = 30%.'
      ],
      explanation: [
        'Change = $52 \u2212 $40 = $12.',
        'Percent increase = (12 \u00f7 40) \u00d7 100 = 30%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A town\u0027s population dropped from 800 to 600. What is the percent decrease?',
      answer: "25",
      hints: [
        'Change = 800 \u2212 600 = 200.',
        'Percent change = (200 \u00f7 800) \u00d7 100.',
        '(200 \u00f7 800) \u00d7 100 = 25%.'
      ],
      explanation: [
        'Change = 800 \u2212 600 = 200.',
        'Percent decrease = (200 \u00f7 800) \u00d7 100 = 25%.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A test score went from 72 to 90. What is the percent increase?',
      choices: ["25%", "18%", "20%", "30%"],
      answer: "25%",
      hints: [
        'Change = 90 \u2212 72 = 18.',
        'Percent increase = (18 \u00f7 72) \u00d7 100.',
        '(18 \u00f7 72) \u00d7 100 = 25%.'
      ],
      explanation: [
        'Change = 90 \u2212 72 = 18.',
        'Percent increase = (18 \u00f7 72) \u00d7 100 = 25%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A population grew from 400 to 500. What is the percent increase?',
      answer: "25",
      hints: [
        'Change = 500 \u2212 400 = 100.',
        'Percent increase = (100 \u00f7 400) \u00d7 100.',
        '(100 \u00f7 400) \u00d7 100 = 25%.'
      ],
      explanation: [
        'Change = 500 \u2212 400 = 100.',
        'Percent increase = (100 \u00f7 400) \u00d7 100 = 25%.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'The price of a stock fell from $250 to $200. What is the percent decrease?',
      choices: ["20%", "25%", "50%", "10%"],
      answer: "20%",
      hints: [
        'Change = $250 \u2212 $200 = $50.',
        'Percent decrease = (50 \u00f7 250) \u00d7 100.',
        '(50 \u00f7 250) \u00d7 100 = 20%.'
      ],
      explanation: [
        'Change = $250 \u2212 $200 = $50.',
        'Percent decrease = (50 \u00f7 250) \u00d7 100 = 20%.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A town\u2019s population decreased from 12,000 to 9,600. What is the percent decrease?',
      choices: ["20%", "25%", "15%", "30%"],
      answer: "20%",
      hints: [
        'Change = 12,000 \u2212 9,600 = 2,400.',
        'Percent decrease = (2,400 \u00f7 12,000) \u00d7 100.',
        '(2,400 \u00f7 12,000) \u00d7 100 = 20%.'
      ],
      explanation: [
        'Change = 12,000 \u2212 9,600 = 2,400.',
        'Percent decrease = (2,400 \u00f7 12,000) \u00d7 100 = 20%.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A shirt was priced at $40 and is now $52. What is the percent increase?',
      answer: "30",
      hints: [
        "Change = 52 − 40 = 12.",
        "Percent change = (12 ÷ 40) × 100.",
        "(12 ÷ 40) × 100 = 30%."
      ],
      explanation: [
        "Change = $52 − $40 = $12.",
        "Percent increase = (12 ÷ 40) × 100 = 30%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A population dropped from 400 to 340. What is the percent decrease?',
      choices: ["15%", "20%", "10%", "25%"],
      answer: "15%",
      hints: [
        "Change = 400 − 340 = 60.",
        "Percent change = (60 ÷ 400) × 100.",
        "(60 ÷ 400) × 100 = 15%."
      ],
      explanation: [
        "Change = 400 − 340 = 60.",
        "Percent decrease = (60 ÷ 400) × 100 = 15%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Rent increased from $800 to $920. What is the percent increase?',
      choices: ["15%", "12%", "20%", "10%"],
      answer: "15%",
      hints: [
        "Change = 920 − 800 = 120.",
        "Percent change = (120 ÷ 800) × 100.",
        "(120 ÷ 800) × 100 = 15%."
      ],
      explanation: [
        "Change = $920 − $800 = $120.",
        "Percent increase = (120 ÷ 800) × 100 = 15%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A bicycle\'s price went from $150 to $180. What is the percent increase?',
      answer: "20",
      hints: [
        "Change = 180 − 150 = 30.",
        "Percent change = (30 ÷ 150) × 100.",
        "(30 ÷ 150) × 100 = 20%."
      ],
      explanation: [
        "Change = 180 − 150 = 30.",
        "Percent increase = (30 ÷ 150) × 100 = 20%."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A company\'s sales dropped from $500 to $350. What is the percent decrease?',
      choices: ["30%", "25%", "35%", "40%"],
      answer: "30%",
      hints: [
        "Change = 500 − 350 = 150.",
        "Percent change = (150 ÷ 500) × 100.",
        "(150 ÷ 500) × 100 = 30%."
      ],
      explanation: [
        "Change = 500 − 350 = 150.",
        "Percent decrease = (150 ÷ 500) × 100 = 30%."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A population grew from 800 to 1,000. What is the percent increase?',
      choices: ["25%", "20%", "30%", "15%"],
      answer: "25%",
      hints: [
        "Change = 1000 − 800 = 200.",
        "Percent change = (200 ÷ 800) × 100.",
        "(200 ÷ 800) × 100 = 25%."
      ],
      explanation: [
        "Change = 1000 − 800 = 200.",
        "Percent increase = (200 ÷ 800) × 100 = 25%."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A town\'s population dropped from 800 to 600. What is the percent decrease?',
      answer: "25",
      hints: [
        "Find the change: 800 − 600 = 200.",
        "Divide by the original: 200 ÷ 800 = 0.25.",
        "Multiply by 100: 0.25 × 100 = 25."
      ],
      explanation: [
        "Change = 800 − 600 = 200.",
        "Percent decrease = (200 ÷ 800) × 100 = <strong>25%</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A store\'s monthly revenue fell from $12,000 to $9,000. What is the percent decrease?',
      choices: ["25%", "30%", "20%", "33%"],
      answer: "25%",
      hints: [
        "Change = $12,000 − $9,000 = $3,000.",
        "Divide by original: 3000 ÷ 12000 = 0.25.",
        "0.25 × 100 = 25%."
      ],
      explanation: [
        "Change = $12,000 − $9,000 = $3,000.",
        "Percent decrease = (3000 ÷ 12000) × 100 = <strong>25%</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The temperature dropped from 90°F to 72°F. What is the percent decrease?',
      answer: "20",
      hints: [
        "Change = 90 − 72 = 18.",
        "Divide by original: 18 ÷ 90 = 0.20.",
        "0.20 × 100 = 20."
      ],
      explanation: [
        "Change = 90 − 72 = 18.",
        "Percent decrease = (18 ÷ 90) × 100 = <strong>20%</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 7: Tax, Tip & Commission (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A meal costs $45. You leave a 20% tip. How much is the tip in dollars?',
      answer: "9",
      hints: [
        "Tip = 20% of $45.",
        "0.20 × 45 = ?",
        "0.20 × 45 = 9."
      ],
      explanation: [
        "Tip = 0.20 × $45 = $9.",
        "The tip is $9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A TV costs $300 with 8% sales tax. What is the total cost?',
      choices: ["$324", "$308", "$330", "$316"],
      answer: "$324",
      hints: [
        "Tax = 8% of $300 = 0.08 × 300.",
        "Tax = $24.",
        "Total = $300 + $24 = $324."
      ],
      explanation: [
        "Tax = 0.08 × $300 = $24.",
        "Total = $300 + $24 = $324."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A salesperson earns 6% commission on $4,500 in sales. How much commission do they earn in dollars?',
      answer: "270",
      hints: [
        "Commission = 6% of $4,500.",
        "0.06 × 4500 = ?",
        "0.06 × 4500 = 270."
      ],
      explanation: [
        "Commission = 0.06 × $4,500 = $270.",
        "The salesperson earns $270."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Dinner costs $65. You add 15% tip and 7% tax. Which is closest to the total?',
      choices: ["$79.30", "$75.00", "$82.00", "$71.50"],
      answer: "$79.30",
      hints: [
        "Tip = 0.15 × 65 = $9.75. Tax = 0.07 × 65 = $4.55.",
        "Total = 65 + 9.75 + 4.55.",
        "Total = $79.30."
      ],
      explanation: [
        "Tip = 0.15 × $65 = $9.75.",
        "Tax = 0.07 × $65 = $4.55.",
        "Total = $65 + $9.75 + $4.55 = $79.30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A purchase costs $120. Sales tax is 5%. What is the total amount you pay in dollars?',
      answer: "126",
      hints: [
        "Tax = 5% of $120 = 0.05 × 120.",
        "Tax = $6.",
        "Total = $120 + $6 = $126."
      ],
      explanation: [
        "Tax = 0.05 × $120 = $6.",
        "Total = $120 + $6 = $126."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A waiter earns $85 in tips on $500 in total food sales. What percent tip did the customers leave on average?',
      choices: ["17%", "15%", "20%", "12%"],
      answer: "17%",
      hints: [
        "Percent = (tip ÷ sales) × 100.",
        "85 ÷ 500 = 0.17.",
        "0.17 × 100 = 17%."
      ],
      explanation: [
        "Percent = ($85 ÷ $500) × 100 = 17%.",
        "The average tip was 17%."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A laptop costs $750 with 6% sales tax. What is the tax amount in dollars?',
      answer: "45",
      hints: [
        "Tax = 6% of $750.",
        "0.06 × 750 = ?",
        "0.06 × 750 = 45."
      ],
      explanation: [
        "Tax = 0.06 × $750 = $45.",
        "The sales tax is $45."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A meal costs $35. You leave a 15% tip. What is the total you pay?',
      choices: ["$40.25", "$38.50", "$42.00", "$37.25"],
      answer: "$40.25",
      hints: [
        "Tip = 15% of $35 = 0.15 × 35.",
        "Tip = $5.25.",
        "Total = $35 + $5.25 = $40.25."
      ],
      explanation: [
        "Tip = 0.15 × $35 = $5.25.",
        "Total = $35 + $5.25 = $40.25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A dinner costs $60. You leave an 18% tip. How much is the tip in dollars? Enter as a decimal.',
      answer: "10.8",
      hints: [
        "Tip = 18% of $60.",
        "0.18 × 60 = ?",
        "0.18 × 60 = 10.80."
      ],
      explanation: [
        "Tip = 0.18 × $60 = $10.80.",
        "The tip is $10.80."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A phone costs $450 with 9% sales tax. What is the total cost?',
      choices: ["$490.50", "$459", "$495", "$481.50"],
      answer: "$490.50",
      hints: [
        "Tax = 9% of $450 = 0.09 × 450.",
        "Tax = $40.50.",
        "Total = $450 + $40.50 = $490.50."
      ],
      explanation: [
        "Tax = 0.09 × $450 = $40.50.",
        "Total = $450 + $40.50 = $490.50."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A salesperson earns 8% commission on $3,750 in sales. How much commission do they earn in dollars?',
      answer: "300",
      hints: [
        "Commission = 8% of $3,750.",
        "0.08 × 3750 = ?",
        "0.08 × 3750 = 300."
      ],
      explanation: [
        "Commission = 0.08 × $3,750 = $300.",
        "The salesperson earns $300."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A meal costs $55. You leave a 20% tip. What is the total you pay?',
      choices: ["$66", "$60", "$68", "$63"],
      answer: "$66",
      hints: [
        "Tip = 20% of $55 = 0.20 × 55.",
        "Tip = $11.",
        "Total = $55 + $11 = $66."
      ],
      explanation: [
        "Tip = 0.20 × $55 = $11.",
        "Total = $55 + $11 = $66."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A camera costs $350 with 7% sales tax. What is the total cost in dollars? Enter as a decimal.',
      answer: "374.5",
      hints: [
        "Tax = 7% of $350 = 0.07 × 350.",
        "Tax = $24.50.",
        "Total = $350 + $24.50 = $374.50."
      ],
      explanation: [
        "Tax = 0.07 × $350 = $24.50.",
        "Total = $350 + $24.50 = $374.50."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A salesperson earns 5% commission on $6,000 in sales. How much commission do they earn?',
      choices: ["$300", "$250", "$350", "$600"],
      answer: "$300",
      hints: [
        "Commission = 5% of $6,000.",
        "0.05 × 6000 = ?",
        "0.05 × 6000 = 300."
      ],
      explanation: [
        "Commission = 0.05 × $6,000 = $300.",
        "The salesperson earns $300."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A haircut costs $40. You leave a 15% tip. How much is the tip in dollars?',
      answer: "6",
      hints: [
        "Tip = 15% of $40.",
        "0.15 × 40 = ?",
        "0.15 × 40 = 6."
      ],
      explanation: [
        "Tip = 0.15 × $40 = $6.",
        "The tip is $6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A bicycle costs $250 with 8% sales tax. What is the total cost?',
      choices: ["$270", "$258", "$275", "$260"],
      answer: "$270",
      hints: [
        "Tax = 8% of $250 = 0.08 × 250.",
        "Tax = $20.",
        "Total = $250 + $20 = $270."
      ],
      explanation: [
        "Tax = 0.08 × $250 = $20.",
        "Total = $250 + $20 = $270."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A salesperson earns 7% commission on $5,000 in sales. How much commission do they earn in dollars?',
      answer: "350",
      hints: [
        "Commission = 7% of $5,000.",
        "0.07 × 5000 = ?",
        "0.07 × 5000 = 350."
      ],
      explanation: [
        "Commission = 0.07 × $5,000 = $350.",
        "The salesperson earns $350."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A lunch costs $25. You leave a 20% tip. What is the total you pay?',
      choices: ["$30", "$28", "$32", "$27"],
      answer: "$30",
      hints: [
        "Tip = 20% of $25 = 0.20 × 25.",
        "Tip = $5.",
        "Total = $25 + $5 = $30."
      ],
      explanation: [
        "Tip = 0.20 × $25 = $5.",
        "Total = $25 + $5 = $30."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A salesperson earns 9% commission on $4,000 in sales. How much commission do they earn in dollars?',
      answer: "360",
      hints: [
        "Commission = 9% of $4,000.",
        "0.09 × 4000 = ?",
        "0.09 × 4000 = 360."
      ],
      explanation: [
        "Commission = 0.09 × $4,000 = $360.",
        "The salesperson earns $360."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A tablet costs $320 with 7.5% sales tax. What is the total cost?',
      choices: ["$344", "$340", "$348", "$336"],
      answer: "$344",
      hints: [
        "Tax = 7.5% of $320 = 0.075 × 320.",
        "Tax = $24.",
        "Total = $320 + $24 = $344."
      ],
      explanation: [
        "Tax = 0.075 × $320 = $24.",
        "Total = $320 + $24 = $344."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'A bill is $80. You leave a 15% tip. How much is the tip in dollars?',
      answer: "12",
      hints: [
        "Tip = 15% of $80.",
        "0.15 × 80 = ?",
        "0.15 × 80 = 12."
      ],
      explanation: [
        "Tip = 0.15 × $80 = $12.",
        "The tip is $12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A sofa costs $600 with 7% sales tax. What is the total cost?',
      choices: ["$642", "$607", "$660", "$630"],
      answer: "$642",
      hints: [
        "Tax = 7% of $600 = 0.07 × 600.",
        "Tax = $42.",
        "Total = $600 + $42 = $642."
      ],
      explanation: [
        "Tax = 0.07 × $600 = $42.",
        "Total = $600 + $42 = $642."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A salesperson earns 4% commission on $8,500 in sales. How much commission do they earn in dollars?',
      answer: "340",
      hints: [
        "Commission = 4% of $8,500.",
        "0.04 × 8500 = ?",
        "0.04 × 8500 = 340."
      ],
      explanation: [
        "Commission = 0.04 × $8,500 = $340.",
        "The salesperson earns $340."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 2,
      question: 'A meal costs $55. You leave a 15% tip. How much is the tip in dollars? Enter as a decimal.',
      answer: "8.25",
      hints: [
        'Tip = 15% of $55.',
        '0.15 \u00d7 55 = ?',
        '0.15 \u00d7 55 = 8.25.'
      ],
      explanation: [
        'Tip = 0.15 \u00d7 $55 = $8.25.',
        'The tip is $8.25.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A laptop costs $600 with 9% sales tax. What is the total cost?',
      choices: ["$654", "$609", "$660", "$645"],
      answer: "$654",
      hints: [
        'Tax = 9% of $600 = 0.09 \u00d7 600.',
        'Tax = $54.',
        'Total = $600 + $54 = $654.'
      ],
      explanation: [
        'Tax = 0.09 \u00d7 $600 = $54.',
        'Total = $600 + $54 = $654.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A salesperson earns 8% commission on $3,500 in sales. How much commission do they earn in dollars?',
      answer: "280",
      hints: [
        'Commission = 8% of $3,500.',
        '0.08 \u00d7 3500 = ?',
        '0.08 \u00d7 3500 = 280.'
      ],
      explanation: [
        'Commission = 0.08 \u00d7 $3,500 = $280.',
        'The salesperson earns $280.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A meal costs $45. You leave a 20% tip. How much is the tip?',
      answer: "9",
      hints: [
        'Tip = 20% of $45.',
        '0.20 \u00d7 45 = ?',
        '0.20 \u00d7 45 = $9.'
      ],
      explanation: [
        'Tip = 0.20 \u00d7 $45 = $9.',
        'The tip is $9.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A laptop costs $680. Sales tax is 7.5%. What is the total cost including tax?',
      choices: ["$731", "$714", "$748", "$700"],
      answer: "$731",
      hints: [
        'Tax = 7.5% of $680 = 0.075 \u00d7 680.',
        '0.075 \u00d7 680 = $51.',
        'Total = $680 + $51 = $731.'
      ],
      explanation: [
        'Tax = 0.075 \u00d7 $680 = $51.',
        'Total = $680 + $51 = $731.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A real estate agent earns 6% commission. If a house sells for $275,000, how much commission does the agent earn?',
      choices: ["$16,500", "$15,500", "$17,500", "$14,500"],
      answer: "$16,500",
      hints: [
        'Commission = 6% of $275,000.',
        '0.06 \u00d7 275,000 = ?',
        '0.06 \u00d7 275,000 = $16,500.'
      ],
      explanation: [
        'Commission = 0.06 \u00d7 $275,000 = $16,500.',
        'The agent earns $16,500.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A meal costs $45. You leave a 20% tip. How much is the tip in dollars?',
      answer: "9",
      hints: [
        "Tip = 20% of $45.",
        "0.20 × 45 = ?",
        "0.20 × 45 = $9."
      ],
      explanation: [
        "Tip = 0.20 × $45 = $9.",
        "The tip is $9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A $250 item has 8% sales tax. What is the total cost including tax?',
      choices: ["$270", "$258", "$278", "$268"],
      answer: "$270",
      hints: [
        "Tax = 8% of $250 = 0.08 × 250 = $20.",
        "Total = $250 + $20.",
        "Total = $270."
      ],
      explanation: [
        "Tax = 0.08 × $250 = $20.",
        "Total cost = $250 + $20 = $270."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A salesperson earns a 6% commission. If they sell $3,500 worth of goods, how much commission do they earn?',
      choices: ["$210", "$180", "$250", "$350"],
      answer: "$210",
      hints: [
        "Commission = 6% of $3,500.",
        "0.06 × 3,500 = ?",
        "0.06 × 3,500 = $210."
      ],
      explanation: [
        "Commission = 0.06 × $3,500 = $210.",
        "The salesperson earns $210."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A meal costs $65. You leave an 18% tip. How much is the tip in dollars (round to nearest cent)?',
      answer: "11.70",
      hints: [
        "Tip = 18% of $65.",
        "0.18 × 65 = ?",
        "0.18 × 65 = 11.70."
      ],
      explanation: [
        "Tip = 0.18 × $65 = $11.70.",
        "The tip is $11.70."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A salesperson earns 12% commission on a $750 sale. How much commission is earned?',
      choices: ["$90", "$75", "$100", "$85"],
      answer: "$90",
      hints: [
        "Commission = 12% of $750.",
        "0.12 × 750 = ?",
        "0.12 × 750 = $90."
      ],
      explanation: [
        "Commission = 0.12 × $750 = $90.",
        "The salesperson earns $90."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A pair of shoes costs $85 with 6% sales tax. What is the total cost?',
      choices: ["$90.10", "$91.00", "$89.10", "$88.10"],
      answer: "$90.10",
      hints: [
        "Tax = 6% of $85 = 0.06 × 85.",
        "Tax = $5.10.",
        "Total = $85 + $5.10 = $90.10."
      ],
      explanation: [
        "Tax = 0.06 × $85 = $5.10.",
        "Total = $85 + $5.10 = $90.10."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A $45 shirt is on sale for 20% off. What is the sale price?',
      choices: ["$36", "$40", "$38", "$35"],
      answer: "$36",
      hints: [
        "Find the discount: 20% of $45 = 0.20 × 45 = $9.",
        "Subtract from original: $45 − $9.",
        "$45 − $9 = $36."
      ],
      explanation: [
        "Discount = 0.20 × $45 = <strong>$9</strong>.",
        "Sale price = $45 − $9 = <strong>$36</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A $120 pair of shoes is 35% off. What is the sale price in dollars?',
      answer: "78",
      hints: [
        "Find the discount: 35% of $120 = 0.35 × 120 = $42.",
        "Subtract the discount from the price.",
        "$120 − $42 = $78."
      ],
      explanation: [
        "Discount = 0.35 × $120 = <strong>$42</strong>.",
        "Sale price = $120 − $42 = <strong>$78</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A backpack that costs $60 is on sale for 15% off. What is the sale price?',
      choices: ["$51", "$50", "$54", "$48"],
      answer: "$51",
      hints: [
        "Find the discount: 15% of $60 = 0.15 × 60 = $9.",
        "Subtract from original price.",
        "$60 − $9 = $51."
      ],
      explanation: [
        "Discount = 0.15 × $60 = <strong>$9</strong>.",
        "Sale price = $60 − $9 = <strong>$51</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 8: Finding the Whole (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: '40% of a number is 28. What is the number?',
      choices: ["70", "56", "60", "80"],
      answer: "70",
      hints: [
        "Set up: 0.40 × x = 28.",
        "Divide both sides by 0.40.",
        "x = 28 ÷ 0.40 = 70."
      ],
      explanation: [
        "0.40 × x = 28.",
        "x = 28 ÷ 0.40 = 70."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '25% of what number is 15?',
      answer: "60",
      hints: [
        "0.25 × x = 15.",
        "Divide: x = 15 ÷ 0.25.",
        "x = 60."
      ],
      explanation: [
        "0.25 × x = 15.",
        "x = 15 ÷ 0.25 = 60."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '15% of a number is 27. What is the number?',
      choices: ["180", "150", "200", "135"],
      answer: "180",
      hints: [
        "0.15 × x = 27.",
        "x = 27 ÷ 0.15.",
        "x = 180."
      ],
      explanation: [
        "0.15 × x = 27.",
        "x = 27 ÷ 0.15 = 180."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '60% of what number is 48?',
      answer: "80",
      hints: [
        "0.60 × x = 48.",
        "x = 48 ÷ 0.60.",
        "x = 80."
      ],
      explanation: [
        "0.60 × x = 48.",
        "x = 48 ÷ 0.60 = 80."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: '50% of a number is 35. What is the number?',
      choices: ["70", "75", "65", "80"],
      answer: "70",
      hints: [
        "50% means half.",
        "If half is 35, the whole is 35 × 2.",
        "35 × 2 = 70."
      ],
      explanation: [
        "0.50 × x = 35.",
        "x = 35 ÷ 0.50 = 70."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '30% of what number is 45?',
      answer: "150",
      hints: [
        "0.30 × x = 45.",
        "x = 45 ÷ 0.30.",
        "x = 150."
      ],
      explanation: [
        "0.30 × x = 45.",
        "x = 45 ÷ 0.30 = 150."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: '20% of a number is 18. What is the number?',
      choices: ["90", "80", "72", "100"],
      answer: "90",
      hints: [
        "0.20 × x = 18.",
        "Divide: x = 18 ÷ 0.20.",
        "x = 90."
      ],
      explanation: [
        "0.20 × x = 18.",
        "x = 18 ÷ 0.20 = 90."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '75% of what number is 90?',
      answer: "120",
      hints: [
        "0.75 × x = 90.",
        "x = 90 ÷ 0.75.",
        "x = 120."
      ],
      explanation: [
        "0.75 × x = 90.",
        "x = 90 ÷ 0.75 = 120."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: '10% of a number is 7. What is the number?',
      choices: ["70", "17", "35", "140"],
      answer: "70",
      hints: [
        "0.10 × x = 7.",
        "Divide both sides by 0.10.",
        "x = 7 ÷ 0.10 = 70."
      ],
      explanation: [
        "0.10 × x = 7.",
        "x = 7 ÷ 0.10 = 70."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '45% of what number is 36?',
      answer: "80",
      hints: [
        "0.45 × x = 36.",
        "x = 36 ÷ 0.45.",
        "x = 80."
      ],
      explanation: [
        "0.45 × x = 36.",
        "x = 36 ÷ 0.45 = 80."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '35% of a number is 56. What is the number?',
      choices: ["160", "140", "180", "120"],
      answer: "160",
      hints: [
        "0.35 × x = 56.",
        "x = 56 ÷ 0.35.",
        "x = 160."
      ],
      explanation: [
        "0.35 × x = 56.",
        "x = 56 ÷ 0.35 = 160."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '20% of what number is 24?',
      answer: "120",
      hints: [
        "0.20 × x = 24.",
        "Divide: x = 24 ÷ 0.20.",
        "x = 120."
      ],
      explanation: [
        "0.20 × x = 24.",
        "x = 24 ÷ 0.20 = 120."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '12% of a number is 36. What is the number?',
      choices: ["300", "250", "360", "200"],
      answer: "300",
      hints: [
        "0.12 × x = 36.",
        "x = 36 ÷ 0.12.",
        "x = 300."
      ],
      explanation: [
        "0.12 × x = 36.",
        "x = 36 ÷ 0.12 = 300."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '80% of what number is 64?',
      answer: "80",
      hints: [
        "0.80 × x = 64.",
        "x = 64 ÷ 0.80.",
        "x = 80."
      ],
      explanation: [
        "0.80 × x = 64.",
        "x = 64 ÷ 0.80 = 80."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: '30% of a number is 21. What is the number?',
      choices: ["70", "63", "60", "90"],
      answer: "70",
      hints: [
        "0.30 × x = 21.",
        "Divide both sides by 0.30.",
        "x = 21 ÷ 0.30 = 70."
      ],
      explanation: [
        "0.30 × x = 21.",
        "x = 21 ÷ 0.30 = 70."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '15% of what number is 18?',
      answer: "120",
      hints: [
        "0.15 × x = 18.",
        "x = 18 ÷ 0.15.",
        "x = 120."
      ],
      explanation: [
        "0.15 × x = 18.",
        "x = 18 ÷ 0.15 = 120."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '25% of a number is 45. What is the number?',
      choices: ["180", "150", "200", "135"],
      answer: "180",
      hints: [
        "0.25 × x = 45.",
        "x = 45 ÷ 0.25.",
        "x = 180."
      ],
      explanation: [
        "0.25 × x = 45.",
        "x = 45 ÷ 0.25 = 180."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: '40% of what number is 32?',
      answer: "80",
      hints: [
        "0.40 × x = 32.",
        "Divide: x = 32 ÷ 0.40.",
        "x = 80."
      ],
      explanation: [
        "0.40 × x = 32.",
        "x = 32 ÷ 0.40 = 80."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '16% of a number is 48. What is the number?',
      choices: ["300", "250", "320", "200"],
      answer: "300",
      hints: [
        "0.16 × x = 48.",
        "x = 48 ÷ 0.16.",
        "x = 300."
      ],
      explanation: [
        "0.16 × x = 48.",
        "x = 48 ÷ 0.16 = 300."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '60% of what number is 42?',
      answer: "70",
      hints: [
        "0.60 × x = 42.",
        "x = 42 ÷ 0.60.",
        "x = 70."
      ],
      explanation: [
        "0.60 × x = 42.",
        "x = 42 ÷ 0.60 = 70."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: '25% of a number is 20. What is the number?',
      choices: ["80", "60", "100", "50"],
      answer: "80",
      hints: [
        "0.25 × x = 20.",
        "Divide both sides by 0.25.",
        "x = 20 ÷ 0.25 = 80."
      ],
      explanation: [
        "0.25 × x = 20.",
        "x = 20 ÷ 0.25 = 80."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '55% of what number is 66?',
      answer: "120",
      hints: [
        "0.55 × x = 66.",
        "x = 66 ÷ 0.55.",
        "x = 120."
      ],
      explanation: [
        "0.55 × x = 66.",
        "x = 66 ÷ 0.55 = 120."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '18% of a number is 54. What is the number?',
      choices: ["300", "270", "360", "250"],
      answer: "300",
      hints: [
        "0.18 × x = 54.",
        "x = 54 ÷ 0.18.",
        "x = 300."
      ],
      explanation: [
        "0.18 × x = 54.",
        "x = 54 ÷ 0.18 = 300."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: '30% of a number is 21. What is the number?',
      choices: ["70", "63", "60", "80"],
      answer: "70",
      hints: [
        'Set up: 0.30 \u00d7 x = 21.',
        'Divide both sides by 0.30.',
        'x = 21 \u00f7 0.30 = 70.'
      ],
      explanation: [
        '0.30 \u00d7 x = 21.',
        'x = 21 \u00f7 0.30 = 70.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: '12% of what number is 42?',
      answer: "350",
      hints: [
        '0.12 \u00d7 x = 42.',
        'Divide: x = 42 \u00f7 0.12.',
        'x = 350.'
      ],
      explanation: [
        '0.12 \u00d7 x = 42.',
        'x = 42 \u00f7 0.12 = 350.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: '45% of a number is 108. What is the number?',
      choices: ["240", "200", "250", "216"],
      answer: "240",
      hints: [
        '0.45 \u00d7 x = 108.',
        'x = 108 \u00f7 0.45.',
        'x = 240.'
      ],
      explanation: [
        '0.45 \u00d7 x = 108.',
        'x = 108 \u00f7 0.45 = 240.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: '30% of a number is 54. What is the number?',
      answer: "180",
      hints: [
        '0.30 \u00d7 x = 54.',
        'x = 54 \u00f7 0.30.',
        'x = 180.'
      ],
      explanation: [
        '0.30 \u00d7 x = 54.',
        'x = 54 \u00f7 0.30 = 180.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: '12% of what number is 36?',
      choices: ["300", "288", "360", "240"],
      answer: "300",
      hints: [
        '0.12 \u00d7 x = 36.',
        'x = 36 \u00f7 0.12.',
        'x = 300.'
      ],
      explanation: [
        '0.12 \u00d7 x = 36.',
        'x = 36 \u00f7 0.12 = 300.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: '85% of a number is 340. What is the number?',
      answer: "400",
      hints: [
        '0.85 \u00d7 x = 340.',
        'x = 340 \u00f7 0.85.',
        'x = 400.'
      ],
      explanation: [
        '0.85 \u00d7 x = 340.',
        'x = 340 \u00f7 0.85 = 400.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: '30% of a number is 54. What is the number?',
      answer: "180",
      hints: [
        "Set up: 0.30 × n = 54.",
        "n = 54 ÷ 0.30.",
        "n = 180."
      ],
      explanation: [
        "0.30 × n = 54.",
        "n = 54 ÷ 0.30 = 180."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '15% of what number is 27?',
      choices: ["180", "162", "200", "135"],
      answer: "180",
      hints: [
        "Set up: 0.15 × n = 27.",
        "n = 27 ÷ 0.15.",
        "n = 180."
      ],
      explanation: [
        "0.15 × n = 27.",
        "n = 27 ÷ 0.15 = 180."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '45% of a number is 99. What is the number?',
      answer: "220",
      hints: [
        "Set up: 0.45 × n = 99.",
        "n = 99 ÷ 0.45.",
        "n = 220."
      ],
      explanation: [
        "0.45 × n = 99.",
        "n = 99 ÷ 0.45 = 220."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: '30% of a number is 45. What is the number?',
      choices: ["150", "135", "120", "180"],
      answer: "150",
      hints: [
        "Set up: 0.30 × x = 45.",
        "Divide both sides by 0.30.",
        "x = 45 ÷ 0.30 = 150."
      ],
      explanation: [
        "0.30 × x = 45.",
        "x = 45 ÷ 0.30 = 150."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '12% of what number is 36?',
      answer: "300",
      hints: [
        "0.12 × x = 36.",
        "Divide: x = 36 ÷ 0.12.",
        "x = 300."
      ],
      explanation: [
        "0.12 × x = 36.",
        "x = 36 ÷ 0.12 = 300."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: '15% of a number is 27. What is the number?',
      choices: ["180", "150", "200", "162"],
      answer: "180",
      hints: [
        "Set up: 0.15 × x = 27.",
        "Divide both sides by 0.15.",
        "x = 27 ÷ 0.15 = 180."
      ],
      explanation: [
        "0.15 × x = 27.",
        "x = 27 ÷ 0.15 = 180."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A dinner bill is $35. The tax rate is 8% and you leave a 15% tip on the pre-tax amount. What is the total? Enter as a decimal (like 43.05).',
      answer: "43.05",
      hints: [
        "Tax = 8% of $35 = 0.08 × 35 = $2.80.",
        "Tip = 15% of $35 = 0.15 × 35 = $5.25.",
        "Total = $35 + $2.80 + $5.25 = $43.05."
      ],
      explanation: [
        "Tax = $2.80, Tip = $5.25.",
        "Total = $35 + $2.80 + $5.25 = <strong>$43.05</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'You buy a $24 book and the sales tax is 6.5%. What is the total cost?',
      choices: ["$25.56", "$25.50", "$26.00", "$25.44"],
      answer: "$25.56",
      hints: [
        "Tax = 6.5% of $24 = 0.065 × 24.",
        "0.065 × 24 = $1.56.",
        "Total = $24 + $1.56 = $25.56."
      ],
      explanation: [
        "Tax = 0.065 × $24 = <strong>$1.56</strong>.",
        "Total = $24 + $1.56 = <strong>$25.56</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A haircut costs $40. You want to leave a 20% tip. What is the total you pay?',
      choices: ["$48", "$50", "$44", "$46"],
      answer: "$48",
      hints: [
        "Tip = 20% of $40 = 0.20 × 40 = $8.",
        "Add tip to the original cost.",
        "$40 + $8 = $48."
      ],
      explanation: [
        "Tip = 0.20 × $40 = <strong>$8</strong>.",
        "Total = $40 + $8 = <strong>$48</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 9: Successive Percent Changes (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'A $100 item increases by 10%, then decreases by 10%. What is the final price?',
      choices: ["$99", "$100", "$90", "$110"],
      answer: "$99",
      hints: [
        "After 10% increase: $100 × 1.10 = $110.",
        "After 10% decrease: $110 × 0.90 = $99.",
        "The final price is not $100!"
      ],
      explanation: [
        "After increase: $100 × 1.10 = $110.",
        "After decrease: $110 × 0.90 = $99.",
        "The final price is $99."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A population of 200 increases by 50%, then decreases by 20%. What is the final population?',
      answer: "240",
      hints: [
        "After 50% increase: 200 × 1.50 = 300.",
        "After 20% decrease: 300 × 0.80 = ?",
        "300 × 0.80 = 240."
      ],
      explanation: [
        "After increase: 200 × 1.50 = 300.",
        "After decrease: 300 × 0.80 = 240."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A $50 stock goes up 20% one year, then up 25% the next. What is it worth now?',
      choices: ["$75", "$72.50", "$70", "$80"],
      answer: "$75",
      hints: [
        "After 20% increase: $50 × 1.20 = $60.",
        "After 25% increase: $60 × 1.25 = ?",
        "$60 × 1.25 = $75."
      ],
      explanation: [
        "After year 1: $50 × 1.20 = $60.",
        "After year 2: $60 × 1.25 = $75."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A $80 jacket is discounted 25%, then an additional 10% off the sale price. What is the final price in dollars?',
      answer: "54",
      hints: [
        "After 25% off: $80 × 0.75 = $60.",
        "After additional 10% off: $60 × 0.90 = ?",
        "$60 × 0.90 = $54."
      ],
      explanation: [
        "After first discount: $80 × 0.75 = $60.",
        "After second discount: $60 × 0.90 = $54."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A price of $200 drops by 15%, then rises by 15%. What is the final price?',
      choices: ["$195.50", "$200", "$197", "$190"],
      answer: "$195.50",
      hints: [
        "After 15% decrease: $200 × 0.85 = $170.",
        "After 15% increase: $170 × 1.15 = ?",
        "$170 × 1.15 = $195.50."
      ],
      explanation: [
        "After decrease: $200 × 0.85 = $170.",
        "After increase: $170 × 1.15 = $195.50.",
        "Successive opposite percent changes do not cancel out."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A painting worth $400 gains 25% in value, then loses 20%. What is it worth now in dollars?',
      answer: "400",
      hints: [
        "After 25% gain: $400 × 1.25 = $500.",
        "After 20% loss: $500 × 0.80 = ?",
        "$500 × 0.80 = $400."
      ],
      explanation: [
        "After gain: $400 × 1.25 = $500.",
        "After loss: $500 × 0.80 = $400.",
        "Interestingly, it returns to the original value here."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A $60 game goes on sale for 10% off, then you have a coupon for an additional 5% off the sale price. What do you pay?',
      choices: ["$51.30", "$51.00", "$54.00", "$50.00"],
      answer: "$51.30",
      hints: [
        "After 10% off: $60 × 0.90 = $54.",
        "After additional 5% off: $54 × 0.95 = ?",
        "$54 × 0.95 = $51.30."
      ],
      explanation: [
        "After first discount: $60 × 0.90 = $54.",
        "After second discount: $54 × 0.95 = $51.30."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A town of 1,000 people grows by 10% one year, then by 20% the next. What is the population after two years?',
      answer: "1320",
      hints: [
        "After year 1: 1000 × 1.10 = 1,100.",
        "After year 2: 1,100 × 1.20 = ?",
        "1,100 × 1.20 = 1,320."
      ],
      explanation: [
        "After year 1: 1,000 × 1.10 = 1,100.",
        "After year 2: 1,100 × 1.20 = 1,320."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A $150 item increases by 20%, then decreases by 20%. What is the final price?',
      choices: ["$144", "$150", "$120", "$180"],
      answer: "$144",
      hints: [
        "After 20% increase: $150 × 1.20 = $180.",
        "After 20% decrease: $180 × 0.80 = ?",
        "$180 × 0.80 = $144."
      ],
      explanation: [
        "After increase: $150 × 1.20 = $180.",
        "After decrease: $180 × 0.80 = $144.",
        "Successive opposite percent changes do not cancel out."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A $120 jacket is discounted 15%, then an additional 20% off the sale price. What is the final price in dollars?',
      answer: "81.6",
      hints: [
        "After 15% off: $120 × 0.85 = $102.",
        "After additional 20% off: $102 × 0.80 = ?",
        "$102 × 0.80 = $81.60."
      ],
      explanation: [
        "After first discount: $120 × 0.85 = $102.",
        "After second discount: $102 × 0.80 = $81.60."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A savings account of $500 earns 10% interest one year, then 5% the next year. What is the balance after two years?',
      choices: ["$577.50", "$575", "$580", "$550"],
      answer: "$577.50",
      hints: [
        "After year 1: $500 × 1.10 = $550.",
        "After year 2: $550 × 1.05 = ?",
        "$550 × 1.05 = $577.50."
      ],
      explanation: [
        "After year 1: $500 × 1.10 = $550.",
        "After year 2: $550 × 1.05 = $577.50."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A $250 item increases by 20%, then decreases by 20%. What is the final price in dollars?',
      answer: "240",
      hints: [
        "After 20% increase: $250 × 1.20 = $300.",
        "After 20% decrease: $300 × 0.80 = ?",
        "$300 × 0.80 = $240."
      ],
      explanation: [
        "After increase: $250 × 1.20 = $300.",
        "After decrease: $300 × 0.80 = $240.",
        "Successive opposite percent changes do not cancel out."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A $40 shirt is discounted 20%, then an additional 25% off the sale price. What do you pay?',
      choices: ["$24", "$22", "$20", "$28"],
      answer: "$24",
      hints: [
        "After 20% off: $40 × 0.80 = $32.",
        "After additional 25% off: $32 × 0.75 = ?",
        "$32 × 0.75 = $24."
      ],
      explanation: [
        "After first discount: $40 × 0.80 = $32.",
        "After second discount: $32 × 0.75 = $24."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A town of 2,000 people grows by 15% one year, then by 10% the next. What is the population after two years?',
      answer: "2530",
      hints: [
        "After year 1: 2000 × 1.15 = 2,300.",
        "After year 2: 2,300 × 1.10 = ?",
        "2,300 × 1.10 = 2,530."
      ],
      explanation: [
        "After year 1: 2,000 × 1.15 = 2,300.",
        "After year 2: 2,300 × 1.10 = 2,530."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A $200 item increases by 25%, then decreases by 25%. What is the final price?',
      choices: ["$187.50", "$200", "$175", "$190"],
      answer: "$187.50",
      hints: [
        "After 25% increase: $200 × 1.25 = $250.",
        "After 25% decrease: $250 × 0.75 = ?",
        "$250 × 0.75 = $187.50."
      ],
      explanation: [
        "After increase: $200 × 1.25 = $250.",
        "After decrease: $250 × 0.75 = $187.50.",
        "Successive opposite percent changes do not cancel out."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A $90 item is discounted 10%, then an additional 30% off the sale price. What is the final price in dollars? Enter as a decimal.',
      answer: "56.7",
      hints: [
        "After 10% off: $90 × 0.90 = $81.",
        "After additional 30% off: $81 × 0.70 = ?",
        "$81 × 0.70 = $56.70."
      ],
      explanation: [
        "After first discount: $90 × 0.90 = $81.",
        "After second discount: $81 × 0.70 = $56.70."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A savings account of $800 earns 5% interest one year, then 10% the next year. What is the balance after two years?',
      choices: ["$924", "$920", "$930", "$880"],
      answer: "$924",
      hints: [
        "After year 1: $800 × 1.05 = $840.",
        "After year 2: $840 × 1.10 = ?",
        "$840 × 1.10 = $924."
      ],
      explanation: [
        "After year 1: $800 × 1.05 = $840.",
        "After year 2: $840 × 1.10 = $924."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A $300 item increases by 10%, then decreases by 10%. What is the final price?',
      choices: ["$297", "$300", "$270", "$330"],
      answer: "$297",
      hints: [
        "After 10% increase: $300 × 1.10 = $330.",
        "After 10% decrease: $330 × 0.90 = $297.",
        "The final price is not $300!"
      ],
      explanation: [
        "After increase: $300 × 1.10 = $330.",
        "After decrease: $330 × 0.90 = $297.",
        "The final price is $297."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A $60 item is discounted 20%, then an additional 10% off the sale price. What is the final price in dollars?',
      answer: "43.2",
      hints: [
        "After 20% off: $60 × 0.80 = $48.",
        "After additional 10% off: $48 × 0.90 = ?",
        "$48 × 0.90 = $43.20."
      ],
      explanation: [
        "After first discount: $60 × 0.80 = $48.",
        "After second discount: $48 × 0.90 = $43.20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A savings account of $1,000 earns 8% interest one year, then 5% the next year. What is the balance after two years?',
      choices: ["$1,134", "$1,130", "$1,140", "$1,080"],
      answer: "$1,134",
      hints: [
        "After year 1: $1,000 × 1.08 = $1,080.",
        "After year 2: $1,080 × 1.05 = ?",
        "$1,080 × 1.05 = $1,134."
      ],
      explanation: [
        "After year 1: $1,000 × 1.08 = $1,080.",
        "After year 2: $1,080 × 1.05 = $1,134."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'A $400 item increases by 10%, then decreases by 10%. What is the final price?',
      choices: ["$396", "$400", "$360", "$440"],
      answer: "$396",
      hints: [
        "After 10% increase: $400 × 1.10 = $440.",
        "After 10% decrease: $440 × 0.90 = $396.",
        "The final price is not $400!"
      ],
      explanation: [
        "After increase: $400 × 1.10 = $440.",
        "After decrease: $440 × 0.90 = $396.",
        "The final price is $396."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A $75 jacket is discounted 20%, then an additional 15% off the sale price. What is the final price in dollars?',
      answer: "51",
      hints: [
        "After 20% off: $75 × 0.80 = $60.",
        "After additional 15% off: $60 × 0.85 = ?",
        "$60 × 0.85 = $51."
      ],
      explanation: [
        "After first discount: $75 × 0.80 = $60.",
        "After second discount: $60 × 0.85 = $51."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A savings account of $600 earns 15% interest one year, then 10% the next year. What is the balance after two years?',
      choices: ["$759", "$750", "$780", "$690"],
      answer: "$759",
      hints: [
        "After year 1: $600 × 1.15 = $690.",
        "After year 2: $690 × 1.10 = ?",
        "$690 × 1.10 = $759."
      ],
      explanation: [
        "After year 1: $600 × 1.15 = $690.",
        "After year 2: $690 × 1.10 = $759."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'A $200 item increases by 25%, then decreases by 20%. What is the final price?',
      choices: ["$200", "$210", "$190", "$225"],
      answer: "$200",
      hints: [
        'After 25% increase: $200 \u00d7 1.25 = $250.',
        'After 20% decrease: $250 \u00d7 0.80 = $200.',
        'The final price happens to be $200.'
      ],
      explanation: [
        'After increase: $200 \u00d7 1.25 = $250.',
        'After decrease: $250 \u00d7 0.80 = $200.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A population of 500 increases by 20%, then increases by 10%. What is the final population?',
      answer: "660",
      hints: [
        'After 20% increase: 500 \u00d7 1.20 = 600.',
        'After 10% increase: 600 \u00d7 1.10 = ?',
        '600 \u00d7 1.10 = 660.'
      ],
      explanation: [
        'After first increase: 500 \u00d7 1.20 = 600.',
        'After second increase: 600 \u00d7 1.10 = 660.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A $120 coat is discounted 25%, then an additional 20% off the sale price. What is the final price?',
      choices: ["$72", "$66", "$54", "$78"],
      answer: "$72",
      hints: [
        'After 25% off: $120 \u00d7 0.75 = $90.',
        'After additional 20% off: $90 \u00d7 0.80 = ?',
        '$90 \u00d7 0.80 = $72.'
      ],
      explanation: [
        'After first discount: $120 \u00d7 0.75 = $90.',
        'After second discount: $90 \u00d7 0.80 = $72.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A shirt is marked up 40% and then discounted 40%. Is the final price equal to the original?',
      choices: ["No, it is less", "Yes, they are equal", "No, it is more", "Cannot tell"],
      answer: "No, it is less",
      hints: [
        'Start with $100. After 40% markup: $100 \u00d7 1.40 = $140.',
        'After 40% discount: $140 \u00d7 0.60 = $84.',
        '$84 < $100, so the final price is less.'
      ],
      explanation: [
        '$100 \u00d7 1.40 = $140. Then $140 \u00d7 0.60 = $84.',
        'The final price ($84) is less than the original ($100).'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A $200 item is increased by 10% and then decreased by 10%. What is the final price?',
      answer: "198",
      hints: [
        'After 10% increase: $200 \u00d7 1.10 = $220.',
        'After 10% decrease: $220 \u00d7 0.90 = ?',
        '$220 \u00d7 0.90 = $198.'
      ],
      explanation: [
        '$200 \u00d7 1.10 = $220.',
        '$220 \u00d7 0.90 = $198.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A stock increases 50% one year and decreases 30% the next. If it started at $400, what is it worth now?',
      choices: ["$420", "$480", "$380", "$400"],
      answer: "$420",
      hints: [
        'After 50% increase: $400 \u00d7 1.50 = $600.',
        'After 30% decrease: $600 \u00d7 0.70 = ?',
        '$600 \u00d7 0.70 = $420.'
      ],
      explanation: [
        '$400 \u00d7 1.50 = $600.',
        '$600 \u00d7 0.70 = $420.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A $200 item is marked up 40%, then discounted 25%. What is the final price?',
      choices: ["$210", "$200", "$220", "$230"],
      answer: "$210",
      hints: [
        "After 40% markup: $200 × 1.40 = $280.",
        "After 25% discount: $280 × 0.75.",
        "$280 × 0.75 = $210."
      ],
      explanation: [
        "$200 × 1.40 = $280.",
        "$280 × 0.75 = $210."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A stock goes up 20% then down 10%. If it started at $500, what is the final value in dollars?',
      answer: "540",
      hints: [
        "After 20% increase: $500 × 1.20 = $600.",
        "After 10% decrease: $600 × 0.90.",
        "$600 × 0.90 = $540."
      ],
      explanation: [
        "$500 × 1.20 = $600.",
        "$600 × 0.90 = $540."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A $300 item is discounted 10%, then another 20% off the new price. What is the final price?',
      choices: ["$216", "$210", "$220", "$200"],
      answer: "$216",
      hints: [
        "After 10% off: $300 × 0.90 = $270.",
        "After 20% off the new price: $270 × 0.80.",
        "$270 × 0.80 = $216."
      ],
      explanation: [
        "$300 × 0.90 = $270.",
        "$270 × 0.80 = $216."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A $200 item increases by 20%, then decreases by 25%. What is the final price?',
      choices: ["$180", "$200", "$190", "$175"],
      answer: "$180",
      hints: [
        "After 20% increase: $200 × 1.20 = $240.",
        "After 25% decrease: $240 × 0.75 = $180.",
        "The final price is $180."
      ],
      explanation: [
        "After increase: $200 × 1.20 = $240.",
        "After decrease: $240 × 0.75 = $180.",
        "The final price is $180."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A stock worth $400 drops by 25%, then rises by 40%. What is the final value in dollars?',
      answer: "420",
      hints: [
        "After 25% drop: $400 × 0.75 = $300.",
        "After 40% rise: $300 × 1.40 = ?",
        "$300 × 1.40 = $420."
      ],
      explanation: [
        "After drop: $400 × 0.75 = $300.",
        "After rise: $300 × 1.40 = $420."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A price of $500 is increased by 10% twice in a row. What is the final price?',
      choices: ["$605", "$600", "$610", "$550"],
      answer: "$605",
      hints: [
        "First increase: $500 × 1.10 = $550.",
        "Second increase: $550 × 1.10 = $605.",
        "The final price is $605."
      ],
      explanation: [
        "After first 10%: $500 × 1.10 = $550.",
        "After second 10%: $550 × 1.10 = $605.",
        "The final price is $605."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'You deposit $500 in a savings account that earns 4% simple interest per year. How much interest do you earn after 3 years?',
      answer: "60",
      hints: [
        "Use the formula: I = P × r × t.",
        "I = 500 × 0.04 × 3.",
        "I = 60."
      ],
      explanation: [
        "I = P × r × t = 500 × 0.04 × 3.",
        "I = <strong>$60</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Maria invests $1,200 at 5% simple interest for 2 years. What is the total amount she has after 2 years?',
      choices: ["$1,320", "$1,200", "$1,260", "$1,440"],
      answer: "$1,320",
      hints: [
        "Interest = P × r × t = 1200 × 0.05 × 2.",
        "Interest = $120.",
        "Total = $1,200 + $120 = $1,320."
      ],
      explanation: [
        "I = 1200 × 0.05 × 2 = <strong>$120</strong>.",
        "Total = $1,200 + $120 = <strong>$1,320</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Jake borrows $800 at 6% simple interest for 4 years. How much interest will he owe?',
      answer: "192",
      hints: [
        "I = P × r × t.",
        "I = 800 × 0.06 × 4.",
        "I = 192."
      ],
      explanation: [
        "I = 800 × 0.06 × 4 = <strong>$192</strong>.",
        "Jake will owe $192 in interest."
      ]
    }
  ]
];

// ============================================================
// WORLD 8 — Chapter 9: Square Roots
// ============================================================
EXTRA_QUESTIONS[8] = [

  // ----------------------------------------------------------
  // Topic 0: Perfect Squares (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["49", "50", "48", "45"],
      answer: "49",
      hints: [
        "A perfect square is a number times itself.",
        "Try: 7 × 7 = 49.",
        "49 is a perfect square."
      ],
      explanation: [
        "7 × 7 = 49.",
        "49 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">8^2</span>?',
      answer: "64",
      hints: [
        "8 squared means 8 × 8.",
        "8 × 8 = ?",
        "8 × 8 = 64."
      ],
      explanation: [
        "8² = 8 × 8 = 64.",
        "64 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["30", "25", "36", "81"],
      answer: "30",
      hints: [
        "Check each: 25 = 5², 36 = 6², 81 = 9².",
        "What about 30?",
        "No integer times itself gives 30."
      ],
      explanation: [
        "25 = 5², 36 = 6², 81 = 9².",
        "30 is not a perfect square (5² = 25, 6² = 36)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">13^2</span>?',
      answer: "169",
      hints: [
        "13 squared means 13 × 13.",
        "13 × 13 = ?",
        "13 × 13 = 169."
      ],
      explanation: [
        "13² = 13 × 13 = 169.",
        "169 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">11^2</span>?',
      choices: ["121", "111", "132", "110"],
      answer: "121",
      hints: [
        "11 squared means 11 × 11.",
        "11 × 11 = ?",
        "11 × 11 = 121."
      ],
      explanation: [
        "11² = 11 × 11 = 121.",
        "121 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">15^2</span>?',
      answer: "225",
      hints: [
        "15 squared means 15 × 15.",
        "15 × 15 = ?",
        "15 × 15 = 225."
      ],
      explanation: [
        "15² = 15 × 15 = 225.",
        "225 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["36", "35", "38", "42"],
      answer: "36",
      hints: [
        "A perfect square is an integer times itself.",
        "6 × 6 = 36.",
        "36 is a perfect square."
      ],
      explanation: [
        "6 × 6 = 36.",
        "36 is a perfect square; the others are not."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">9^2</span>?',
      answer: "81",
      hints: [
        "9 squared means 9 × 9.",
        "9 × 9 = ?",
        "9 × 9 = 81."
      ],
      explanation: [
        "9² = 9 × 9 = 81.",
        "81 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["16", "18", "20", "22"],
      answer: "16",
      hints: [
        "A perfect square is a number times itself.",
        "Try: 4 × 4 = 16.",
        "16 is a perfect square."
      ],
      explanation: [
        "4 × 4 = 16.",
        "16 is a perfect square; 18, 20, and 22 are not."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">12^2</span>?',
      answer: "144",
      hints: [
        "12 squared means 12 × 12.",
        "12 × 12 = ?",
        "12 × 12 = 144."
      ],
      explanation: [
        "12² = 12 × 12 = 144.",
        "144 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["50", "64", "100", "144"],
      answer: "50",
      hints: [
        "Check each: 64 = 8², 100 = 10², 144 = 12².",
        "What about 50?",
        "No integer times itself gives 50."
      ],
      explanation: [
        "64 = 8², 100 = 10², 144 = 12².",
        "50 is not a perfect square (7² = 49, 8² = 64)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">7^2</span>?',
      answer: "49",
      hints: [
        "7 squared means 7 × 7.",
        "7 × 7 = ?",
        "7 × 7 = 49."
      ],
      explanation: [
        "7² = 7 × 7 = 49.",
        "49 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is a perfect square?',
      choices: ["121", "120", "125", "130"],
      answer: "121",
      hints: [
        "A perfect square is a number times itself.",
        "Try: 11 × 11 = 121.",
        "121 is a perfect square."
      ],
      explanation: [
        "11 × 11 = 121.",
        "121 is a perfect square; the others are not."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">14^2</span>?',
      answer: "196",
      hints: [
        "14 squared means 14 × 14.",
        "14 × 14 = ?",
        "14 × 14 = 196."
      ],
      explanation: [
        "14² = 14 × 14 = 196.",
        "196 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["25", "26", "27", "28"],
      answer: "25",
      hints: [
        "A perfect square is an integer times itself.",
        "5 × 5 = 25.",
        "25 is a perfect square."
      ],
      explanation: [
        "5 × 5 = 25.",
        "25 is a perfect square; the others are not."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">16^2</span>?',
      answer: "256",
      hints: [
        "16 squared means 16 × 16.",
        "16 × 16 = ?",
        "16 × 16 = 256."
      ],
      explanation: [
        "16² = 16 × 16 = 256.",
        "256 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["42", "9", "16", "64"],
      answer: "42",
      hints: [
        "Check each: 9 = 3², 16 = 4², 64 = 8².",
        "What about 42?",
        "No integer times itself gives 42."
      ],
      explanation: [
        "9 = 3², 16 = 4², 64 = 8².",
        "42 is not a perfect square (6² = 36, 7² = 49)."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">6^2</span>?',
      answer: "36",
      hints: [
        "6 squared means 6 × 6.",
        "6 × 6 = ?",
        "6 × 6 = 36."
      ],
      explanation: [
        "6² = 6 × 6 = 36.",
        "36 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["72", "49", "81", "100"],
      answer: "72",
      hints: [
        "Check each: 49 = 7², 81 = 9², 100 = 10².",
        "What about 72?",
        "No integer times itself gives 72."
      ],
      explanation: [
        "49 = 7², 81 = 9², 100 = 10².",
        "72 is not a perfect square (8² = 64, 9² = 81)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">17^2</span>?',
      answer: "289",
      hints: [
        "17 squared means 17 × 17.",
        "17 × 17 = ?",
        "17 × 17 = 289."
      ],
      explanation: [
        "17² = 17 × 17 = 289.",
        "289 is a perfect square."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["81", "80", "82", "85"],
      answer: "81",
      hints: [
        "A perfect square is a number times itself.",
        "Try: 9 × 9 = 81.",
        "81 is a perfect square."
      ],
      explanation: [
        "9 × 9 = 81.",
        "81 is a perfect square; the others are not."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">18^2</span>?',
      answer: "324",
      hints: [
        "18 squared means 18 × 18.",
        "18 × 18 = ?",
        "18 × 18 = 324."
      ],
      explanation: [
        "18² = 18 × 18 = 324.",
        "324 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["58", "36", "49", "64"],
      answer: "58",
      hints: [
        "Check each: 36 = 6², 49 = 7², 64 = 8².",
        "What about 58?",
        "No integer times itself gives 58."
      ],
      explanation: [
        "36 = 6², 49 = 7², 64 = 8².",
        "58 is not a perfect square (7² = 49, 8² = 64)."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">14^2</span>?',
      choices: ["196", "184", "168", "204"],
      answer: "196",
      hints: [
        '14 squared means 14 \u00d7 14.',
        '14 \u00d7 14 = ?',
        '14 \u00d7 14 = 196.'
      ],
      explanation: [
        '14\u00b2 = 14 \u00d7 14 = 196.',
        '196 is a perfect square.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">17^2</span>?',
      answer: "289",
      hints: [
        '17 squared means 17 \u00d7 17.',
        '17 \u00d7 17 = ?',
        '17 \u00d7 17 = 289.'
      ],
      explanation: [
        '17\u00b2 = 17 \u00d7 17 = 289.',
        '289 is a perfect square.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is NOT a perfect square?',
      choices: ["72", "64", "81", "100"],
      answer: "72",
      hints: [
        'Check each: 64 = 8\u00b2, 81 = 9\u00b2, 100 = 10\u00b2.',
        'What about 72?',
        '8\u00b2 = 64, 9\u00b2 = 81 \u2014 no integer squared gives 72.'
      ],
      explanation: [
        '64 = 8\u00b2, 81 = 9\u00b2, 100 = 10\u00b2.',
        '72 is not a perfect square (it falls between 8\u00b2 and 9\u00b2).'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["144", "130", "150", "140"],
      answer: "144",
      hints: [
        'A perfect square is a number that equals some integer times itself.',
        'Check: 12 \u00d7 12 = 144.',
        '144 is a perfect square.'
      ],
      explanation: [
        '12\u00b2 = 144.',
        '144 is the only perfect square among the choices.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is 13 squared?',
      answer: "169",
      hints: [
        '13 squared means 13 \u00d7 13.',
        '13 \u00d7 13 = ?',
        '13 \u00d7 13 = 169.'
      ],
      explanation: [
        '13\u00b2 = 13 \u00d7 13 = 169.',
        '169 is a perfect square.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Is 120 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        '10\u00b2 = 100 and 11\u00b2 = 121.',
        '120 falls between 100 and 121.',
        'No integer squared gives 120, so it is not a perfect square.'
      ],
      explanation: [
        '10\u00b2 = 100, 11\u00b2 = 121.',
        '120 is between them and is not a perfect square.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">17^2</span>?',
      answer: "289",
      hints: [
        "17 squared means 17 × 17.",
        "17 × 17 = ?",
        "17 × 17 = 289."
      ],
      explanation: [
        "17² = 17 × 17 = 289.",
        "289 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["100", "90", "110", "95"],
      answer: "100",
      hints: [
        "A perfect square is a number times itself.",
        "10 × 10 = 100.",
        "100 is a perfect square."
      ],
      explanation: [
        "10 × 10 = 100.",
        "100 is a perfect square; 90, 110, 95 are not."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["72", "64", "81", "196"],
      answer: "72",
      hints: [
        "Check each: 64 = 8², 81 = 9², 196 = 14².",
        "What about 72?",
        "No integer times itself gives 72."
      ],
      explanation: [
        "64 = 8², 81 = 9², 196 = 14².",
        "72 is not a perfect square (8² = 64, 9² = 81)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">17^2</span>?',
      answer: "289",
      hints: [
        "17² means 17 × 17.",
        "17 × 17 = ?",
        "17 × 17 = 289."
      ],
      explanation: [
        "17 × 17 = 289.",
        "17² = 289."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">19^2</span>?',
      choices: ["361", "341", "381", "329"],
      answer: "361",
      hints: [
        "19² means 19 × 19.",
        "Compute: 20² = 400, subtract 20 + 19 = 39.",
        "400 − 39 = 361."
      ],
      explanation: [
        "19 × 19 = 361.",
        "Or: 20² − (20 + 19) = 400 − 39 = 361."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">14^2</span>?',
      answer: "196",
      hints: [
        "14² means 14 × 14.",
        "14 × 14 = ?",
        "14 × 14 = 196."
      ],
      explanation: [
        "14 × 14 = 196.",
        "14² = 196."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">&radic;144</span>?',
      answer: "12",
      hints: [
        "Ask: what number times itself equals 144?",
        "Try 12: 12 × 12 = 144.",
        "So the square root of 144 is 12."
      ],
      explanation: [
        "12 × 12 = 144.",
        "&radic;144 = <strong>12</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">&radic;196</span>?',
      choices: ["14", "13", "15", "16"],
      answer: "14",
      hints: [
        "Ask: what number squared equals 196?",
        "Try 14: 14 × 14 = 196.",
        "So the square root is 14."
      ],
      explanation: [
        "14 × 14 = 196.",
        "&radic;196 = <strong>14</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">&radic;289</span>?',
      answer: "17",
      hints: [
        "Think of perfect squares near 289.",
        "16² = 256 and 17² = 289.",
        "So &radic;289 = 17."
      ],
      explanation: [
        "17 × 17 = 289.",
        "&radic;289 = <strong>17</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 1: Basic Square Roots (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√49</span>?',
      answer: "7",
      hints: [
        "What number times itself equals 49?",
        "Try 7: 7 × 7 = 49.",
        "√49 = 7."
      ],
      explanation: [
        "7 × 7 = 49.",
        "Therefore √49 = 7."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√81</span>?',
      choices: ["9", "8", "10", "7"],
      answer: "9",
      hints: [
        "What number squared equals 81?",
        "9 × 9 = 81.",
        "√81 = 9."
      ],
      explanation: [
        "9 × 9 = 81.",
        "√81 = 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√100</span>?',
      answer: "10",
      hints: [
        "What number times itself gives 100?",
        "10 × 10 = 100.",
        "√100 = 10."
      ],
      explanation: [
        "10 × 10 = 100.",
        "√100 = 10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√16</span>?',
      choices: ["4", "8", "2", "6"],
      answer: "4",
      hints: [
        "What number squared is 16?",
        "4 × 4 = 16.",
        "√16 = 4."
      ],
      explanation: [
        "4 × 4 = 16.",
        "√16 = 4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√25</span>?',
      answer: "5",
      hints: [
        "What number times itself gives 25?",
        "5 × 5 = 25.",
        "√25 = 5."
      ],
      explanation: [
        "5 × 5 = 25.",
        "√25 = 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√36</span>?',
      choices: ["6", "7", "5", "8"],
      answer: "6",
      hints: [
        "What number squared is 36?",
        "6 × 6 = 36.",
        "√36 = 6."
      ],
      explanation: [
        "6 × 6 = 36.",
        "√36 = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√64</span>?',
      answer: "8",
      hints: [
        "What number times itself equals 64?",
        "8 × 8 = 64.",
        "√64 = 8."
      ],
      explanation: [
        "8 × 8 = 64.",
        "√64 = 8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√9</span>?',
      answer: "3",
      hints: [
        "What number times itself gives 9?",
        "3 × 3 = 9.",
        "√9 = 3."
      ],
      explanation: [
        "3 × 3 = 9.",
        "√9 = 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√144</span>?',
      choices: ["12", "14", "11", "13"],
      answer: "12",
      hints: [
        "What number squared equals 144?",
        "12 × 12 = 144.",
        "√144 = 12."
      ],
      explanation: [
        "12 × 12 = 144.",
        "√144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√4</span>?',
      answer: "2",
      hints: [
        "What number times itself gives 4?",
        "2 × 2 = 4.",
        "√4 = 2."
      ],
      explanation: [
        "2 × 2 = 4.",
        "√4 = 2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√121</span>?',
      answer: "11",
      hints: [
        "What number times itself gives 121?",
        "11 × 11 = 121.",
        "√121 = 11."
      ],
      explanation: [
        "11 × 11 = 121.",
        "√121 = 11."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√1</span>?',
      choices: ["1", "0", "2", "10"],
      answer: "1",
      hints: [
        "What number squared equals 1?",
        "1 × 1 = 1.",
        "√1 = 1."
      ],
      explanation: [
        "1 × 1 = 1.",
        "√1 = 1."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√169</span>?',
      answer: "13",
      hints: [
        "What number times itself gives 169?",
        "13 × 13 = 169.",
        "√169 = 13."
      ],
      explanation: [
        "13 × 13 = 169.",
        "√169 = 13."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√16</span>?',
      choices: ["4", "8", "2", "16"],
      answer: "4",
      hints: [
        "What number squared equals 16?",
        "4 × 4 = 16.",
        "√16 = 4."
      ],
      explanation: [
        "4 × 4 = 16.",
        "√16 = 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√196</span>?',
      answer: "14",
      hints: [
        "What number times itself equals 196?",
        "14 × 14 = 196.",
        "√196 = 14."
      ],
      explanation: [
        "14 × 14 = 196.",
        "Therefore √196 = 14."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√64</span>?',
      choices: ["8", "6", "10", "4"],
      answer: "8",
      hints: [
        "What number squared equals 64?",
        "8 × 8 = 64.",
        "√64 = 8."
      ],
      explanation: [
        "8 × 8 = 64.",
        "√64 = 8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√100</span>?',
      answer: "10",
      hints: [
        "What number times itself gives 100?",
        "10 × 10 = 100.",
        "√100 = 10."
      ],
      explanation: [
        "10 × 10 = 100.",
        "√100 = 10."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√49</span>?',
      choices: ["7", "8", "6", "9"],
      answer: "7",
      hints: [
        "What number squared equals 49?",
        "7 × 7 = 49.",
        "√49 = 7."
      ],
      explanation: [
        "7 × 7 = 49.",
        "√49 = 7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√225</span>?',
      answer: "15",
      hints: [
        "What number times itself gives 225?",
        "15 × 15 = 225.",
        "√225 = 15."
      ],
      explanation: [
        "15 × 15 = 225.",
        "√225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√256</span>?',
      choices: ["16", "15", "17", "14"],
      answer: "16",
      hints: [
        "What number squared equals 256?",
        "16 × 16 = 256.",
        "√256 = 16."
      ],
      explanation: [
        "16 × 16 = 256.",
        "√256 = 16."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√16</span>?',
      answer: "4",
      hints: [
        "What number times itself gives 16?",
        "4 × 4 = 16.",
        "√16 = 4."
      ],
      explanation: [
        "4 × 4 = 16.",
        "Therefore √16 = 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√289</span>?',
      choices: ["17", "16", "18", "19"],
      answer: "17",
      hints: [
        "What number squared equals 289?",
        "17 × 17 = 289.",
        "√289 = 17."
      ],
      explanation: [
        "17 × 17 = 289.",
        "√289 = 17."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√324</span>?',
      answer: "18",
      hints: [
        "What number times itself gives 324?",
        "18 × 18 = 324.",
        "√324 = 18."
      ],
      explanation: [
        "18 × 18 = 324.",
        "√324 = 18."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{144}</span>?',
      answer: "12",
      hints: [
        'Find a number that multiplied by itself gives 144.',
        'Try 12: 12 \u00d7 12 = 144.',
        '\u221a144 = 12.'
      ],
      explanation: [
        '12 \u00d7 12 = 144.',
        '\u221a144 = 12.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{196}</span>?',
      choices: ["14", "13", "15", "16"],
      answer: "14",
      hints: [
        'Find a number that multiplied by itself gives 196.',
        'Try 14: 14 \u00d7 14 = 196.',
        '\u221a196 = 14.'
      ],
      explanation: [
        '14 \u00d7 14 = 196.',
        '\u221a196 = 14.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{225}</span>?',
      answer: "15",
      hints: [
        'Find a number that multiplied by itself gives 225.',
        'Try 15: 15 \u00d7 15 = 225.',
        '\u221a225 = 15.'
      ],
      explanation: [
        '15 \u00d7 15 = 225.',
        '\u221a225 = 15.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{196}</span>?',
      answer: "14",
      hints: [
        'Find a number that when multiplied by itself gives 196.',
        'Try 14: 14 \u00d7 14 = 196.',
        '\u221a196 = 14.'
      ],
      explanation: [
        '14 \u00d7 14 = 196.',
        '\u221a196 = 14.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{169}</span>?',
      choices: ["13", "12", "14", "11"],
      answer: "13",
      hints: [
        'Find a number that times itself equals 169.',
        'Try 13: 13 \u00d7 13 = 169.',
        '\u221a169 = 13.'
      ],
      explanation: [
        '13 \u00d7 13 = 169.',
        '\u221a169 = 13.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{64}</span>?',
      choices: ["8", "6", "7", "9"],
      answer: "8",
      hints: [
        'Think: what number times itself gives 64?',
        '8 \u00d7 8 = 64.',
        '\u221a64 = 8.'
      ],
      explanation: [
        '8 \u00d7 8 = 64.',
        '\u221a64 = 8.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\sqrt{144}</span>?',
      answer: "12",
      hints: [
        "Find the number that times itself gives 144.",
        "12 × 12 = 144.",
        "√144 = 12."
      ],
      explanation: [
        "12 × 12 = 144.",
        "√144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\sqrt{196}</span>?',
      choices: ["14", "13", "15", "16"],
      answer: "14",
      hints: [
        "Find the number that times itself gives 196.",
        "14 × 14 = 196.",
        "√196 = 14."
      ],
      explanation: [
        "14 × 14 = 196.",
        "√196 = 14."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\sqrt{225}</span>?',
      answer: "15",
      hints: [
        "Find the number that times itself gives 225.",
        "15 × 15 = 225.",
        "√225 = 15."
      ],
      explanation: [
        "15 × 15 = 225.",
        "√225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">\sqrt{100}</span>?',
      choices: ["10", "11", "9", "12"],
      answer: "10",
      hints: [
        "What number times itself equals 100?",
        "10 × 10 = 100.",
        "√100 = 10."
      ],
      explanation: [
        "10 × 10 = 100.",
        "Therefore √100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\sqrt{144}</span>?',
      answer: "12",
      hints: [
        "What number squared equals 144?",
        "Try 12: 12 × 12 = 144.",
        "√144 = 12."
      ],
      explanation: [
        "12 × 12 = 144.",
        "Therefore √144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">\sqrt{36}</span>?',
      choices: ["6", "7", "5", "8"],
      answer: "6",
      hints: [
        "What number times itself equals 36?",
        "6 × 6 = 36.",
        "√36 = 6."
      ],
      explanation: [
        "6 × 6 = 36.",
        "Therefore √36 = 6."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Between which two consecutive whole numbers is <span class="math">&radic;50</span>?',
      choices: ["7 and 8", "6 and 7", "8 and 9", "5 and 6"],
      answer: "7 and 8",
      hints: [
        "Find perfect squares near 50.",
        "7² = 49 and 8² = 64.",
        "Since 49 < 50 < 64, &radic;50 is between 7 and 8."
      ],
      explanation: [
        "7² = 49 and 8² = 64.",
        "49 < 50 < 64, so &radic;50 is between <strong>7 and 8</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Between which two consecutive whole numbers is <span class="math">&radic;90</span>?',
      choices: ["9 and 10", "8 and 9", "10 and 11", "7 and 8"],
      answer: "9 and 10",
      hints: [
        "Find perfect squares near 90.",
        "9² = 81 and 10² = 100.",
        "Since 81 < 90 < 100, &radic;90 is between 9 and 10."
      ],
      explanation: [
        "9² = 81 and 10² = 100.",
        "81 < 90 < 100, so &radic;90 is between <strong>9 and 10</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '<span class="math">&radic;30</span> is between two consecutive whole numbers. What is the smaller of those two numbers?',
      answer: "5",
      hints: [
        "Find perfect squares near 30.",
        "5² = 25 and 6² = 36.",
        "25 < 30 < 36, so &radic;30 is between 5 and 6."
      ],
      explanation: [
        "5² = 25 and 6² = 36.",
        "Since 25 < 30 < 36, the smaller whole number is <strong>5</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 2: Recognizing Perfect Squares (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Is 64 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 64?",
        "Try 8: 8 × 8 = 64.",
        "Yes, 64 is a perfect square."
      ],
      explanation: [
        "8 × 8 = 64.",
        "Since 8 is a whole number, 64 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Is 50 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "7² = 49 and 8² = 64.",
        "50 is between these, so it is not a perfect square.",
        "No whole number squared equals 50."
      ],
      explanation: [
        "7² = 49 and 8² = 64.",
        "50 falls between them, so it is not a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many perfect squares are there from 1 to 100 (inclusive)?',
      answer: "10",
      hints: [
        "List them: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.",
        "These are 1² through 10².",
        "Count them: 10 perfect squares."
      ],
      explanation: [
        "The perfect squares from 1 to 100 are: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.",
        "There are 10 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these is a perfect square?',
      choices: ["144", "140", "150", "130"],
      answer: "144",
      hints: [
        "12 × 12 = 144.",
        "Check: 140, 150, and 130 are not perfect squares.",
        "144 = 12²."
      ],
      explanation: [
        "12 × 12 = 144.",
        "144 is a perfect square; the others are not."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 200 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "14² = 196 and 15² = 225.",
        "200 falls between them.",
        "So 200 is not a perfect square."
      ],
      explanation: [
        "14² = 196 and 15² = 225.",
        "200 is between them, so it is not a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'How many perfect squares are there from 1 to 50 (inclusive)?',
      answer: "7",
      hints: [
        "List them: 1, 4, 9, 16, 25, 36, 49.",
        "These are 1² through 7².",
        "Count them: 7 perfect squares."
      ],
      explanation: [
        "The perfect squares from 1 to 50 are: 1, 4, 9, 16, 25, 36, 49.",
        "There are 7 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these is a perfect square?',
      choices: ["225", "220", "230", "210"],
      answer: "225",
      hints: [
        "15 × 15 = 225.",
        "Check: 220, 230, and 210 are not perfect squares.",
        "225 = 15²."
      ],
      explanation: [
        "15 × 15 = 225.",
        "225 is a perfect square; the others are not."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 90 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "9² = 81 and 10² = 100.",
        "90 falls between them.",
        "So 90 is not a perfect square."
      ],
      explanation: [
        "9² = 81 and 10² = 100.",
        "90 is between them, so it is not a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Is 25 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 25?",
        "Try 5: 5 × 5 = 25.",
        "Yes, 25 is a perfect square."
      ],
      explanation: [
        "5 × 5 = 25.",
        "Since 5 is a whole number, 25 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many perfect squares are there from 1 to 200 (inclusive)?',
      answer: "14",
      hints: [
        "14² = 196 and 15² = 225.",
        "196 ≤ 200 but 225 > 200.",
        "So there are 14 perfect squares: 1² through 14²."
      ],
      explanation: [
        "The perfect squares from 1 to 200 are 1² through 14² (since 14² = 196 ≤ 200).",
        "There are 14 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these is a perfect square?',
      choices: ["196", "190", "200", "210"],
      answer: "196",
      hints: [
        "14 × 14 = 196.",
        "Check: 190, 200, and 210 are not perfect squares.",
        "196 = 14²."
      ],
      explanation: [
        "14 × 14 = 196.",
        "196 is a perfect square; the others are not."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Is 81 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 81?",
        "Try 9: 9 × 9 = 81.",
        "Yes, 81 is a perfect square."
      ],
      explanation: [
        "9 × 9 = 81.",
        "Since 9 is a whole number, 81 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many perfect squares are there from 1 to 150 (inclusive)?',
      answer: "12",
      hints: [
        "12² = 144 and 13² = 169.",
        "144 ≤ 150 but 169 > 150.",
        "So there are 12 perfect squares: 1² through 12²."
      ],
      explanation: [
        "The perfect squares from 1 to 150 are 1² through 12² (since 12² = 144 ≤ 150).",
        "There are 12 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 110 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "10² = 100 and 11² = 121.",
        "110 falls between them.",
        "So 110 is not a perfect square."
      ],
      explanation: [
        "10² = 100 and 11² = 121.",
        "110 is between them, so it is not a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Is 36 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 36?",
        "Try 6: 6 × 6 = 36.",
        "Yes, 36 is a perfect square."
      ],
      explanation: [
        "6 × 6 = 36.",
        "Since 6 is a whole number, 36 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many perfect squares are there from 1 to 80 (inclusive)?',
      answer: "8",
      hints: [
        "List them: 1, 4, 9, 16, 25, 36, 49, 64.",
        "8² = 64 ≤ 80 but 9² = 81 > 80.",
        "Count them: 8 perfect squares."
      ],
      explanation: [
        "The perfect squares from 1 to 80 are: 1, 4, 9, 16, 25, 36, 49, 64.",
        "There are 8 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 75 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "8² = 64 and 9² = 81.",
        "75 falls between them.",
        "So 75 is not a perfect square."
      ],
      explanation: [
        "8² = 64 and 9² = 81.",
        "75 is between them, so it is not a perfect square."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Is 100 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 100?",
        "Try 10: 10 × 10 = 100.",
        "Yes, 100 is a perfect square."
      ],
      explanation: [
        "10 × 10 = 100.",
        "Since 10 is a whole number, 100 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many perfect squares are there from 1 to 250 (inclusive)?',
      answer: "15",
      hints: [
        "15² = 225 and 16² = 256.",
        "225 ≤ 250 but 256 > 250.",
        "So there are 15 perfect squares: 1² through 15²."
      ],
      explanation: [
        "The perfect squares from 1 to 250 are 1² through 15² (since 15² = 225 ≤ 250).",
        "There are 15 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 160 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "12² = 144 and 13² = 169.",
        "160 falls between them.",
        "So 160 is not a perfect square."
      ],
      explanation: [
        "12² = 144 and 13² = 169.",
        "160 is between them, so it is not a perfect square."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Is 49 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 49?",
        "Try 7: 7 × 7 = 49.",
        "Yes, 49 is a perfect square."
      ],
      explanation: [
        "7 × 7 = 49.",
        "Since 7 is a whole number, 49 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many perfect squares are there from 1 to 300 (inclusive)?',
      answer: "17",
      hints: [
        "17² = 289 and 18² = 324.",
        "289 ≤ 300 but 324 > 300.",
        "So there are 17 perfect squares: 1² through 17²."
      ],
      explanation: [
        "The perfect squares from 1 to 300 are 1² through 17² (since 17² = 289 ≤ 300).",
        "There are 17 perfect squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 125 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "11² = 121 and 12² = 144.",
        "125 falls between them.",
        "So 125 is not a perfect square."
      ],
      explanation: [
        "11² = 121 and 12² = 144.",
        "125 is between them, so it is not a perfect square."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'Is 144 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        'Can you find an integer whose square is 144?',
        'Try 12: 12 \u00d7 12 = 144.',
        'Yes, 144 is a perfect square.'
      ],
      explanation: [
        '12 \u00d7 12 = 144.',
        'Since 12 is a whole number, 144 is a perfect square.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Is 90 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        '9\u00b2 = 81 and 10\u00b2 = 100.',
        '90 is between these, so it is not a perfect square.',
        'No whole number squared equals 90.'
      ],
      explanation: [
        '9\u00b2 = 81 < 90 < 100 = 10\u00b2.',
        'No integer squared equals 90, so it is not a perfect square.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is the smallest perfect square greater than 200?',
      answer: "225",
      hints: [
        '14\u00b2 = 196 and 15\u00b2 = 225.',
        '200 is between 196 and 225.',
        'The next perfect square after 200 is 225.'
      ],
      explanation: [
        '14\u00b2 = 196 < 200 < 225 = 15\u00b2.',
        'The smallest perfect square greater than 200 is 225.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Which of these is NOT a perfect square: 49, 56, 81, 121?',
      choices: ["56", "49", "81", "121"],
      answer: "56",
      hints: [
        '7\u00b2 = 49, 9\u00b2 = 81, 11\u00b2 = 121.',
        'Check 56: 7\u00b2 = 49, 8\u00b2 = 64.',
        '56 is between 49 and 64 and is not a perfect square.'
      ],
      explanation: [
        '49 = 7\u00b2, 81 = 9\u00b2, 121 = 11\u00b2. All are perfect squares.',
        '56 is not a perfect square (it falls between 7\u00b2 and 8\u00b2).'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is the largest perfect square less than 150?',
      answer: "144",
      hints: [
        'Find perfect squares near 150.',
        '12\u00b2 = 144 and 13\u00b2 = 169.',
        '144 < 150 < 169, so 144 is the answer.'
      ],
      explanation: [
        '12\u00b2 = 144 and 13\u00b2 = 169.',
        'The largest perfect square less than 150 is 144.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Between which two consecutive perfect squares does 110 fall?',
      choices: ["100 and 121", "81 and 100", "121 and 144", "64 and 81"],
      answer: "100 and 121",
      hints: [
        '10\u00b2 = 100 and 11\u00b2 = 121.',
        'Is 100 < 110 < 121?',
        'Yes, 110 falls between 100 and 121.'
      ],
      explanation: [
        '10\u00b2 = 100 and 11\u00b2 = 121.',
        '100 < 110 < 121.'
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Is 256 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "A perfect square is a number times itself.",
        "16 × 16 = 256.",
        "256 is a perfect square."
      ],
      explanation: [
        "16 × 16 = 256.",
        "Yes, 256 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the square root of 289?',
      answer: "17",
      hints: [
        "Find the number that times itself gives 289.",
        "17 × 17 = 289.",
        "√289 = 17."
      ],
      explanation: [
        "17 × 17 = 289.",
        "√289 = 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is a perfect square?',
      choices: ["324", "320", "330", "340"],
      answer: "324",
      hints: [
        "A perfect square is an integer times itself.",
        "18 × 18 = 324.",
        "324 is a perfect square."
      ],
      explanation: [
        "18 × 18 = 324.",
        "324 is a perfect square; the others are not."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Is 225 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Can you find an integer whose square is 225?",
        "Try 15: 15 × 15 = 225.",
        "Yes, 225 is a perfect square."
      ],
      explanation: [
        "15 × 15 = 225.",
        "Since 15 is a whole number, 225 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the smallest perfect square greater than 200?',
      answer: "225",
      hints: [
        "14² = 196 and 15² = 225.",
        "196 < 200 < 225.",
        "The smallest perfect square greater than 200 is 225."
      ],
      explanation: [
        "14² = 196 (too small), 15² = 225.",
        "225 is the smallest perfect square above 200."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is 130 a perfect square?',
      choices: ["No", "Yes"],
      answer: "No",
      hints: [
        "11² = 121 and 12² = 144.",
        "130 is between these, so it is not a perfect square.",
        "No whole number squared equals 130."
      ],
      explanation: [
        "11² = 121 < 130 < 144 = 12².",
        "Since 130 falls between two consecutive perfect squares, it is not a perfect square."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Is 225 a perfect square?',
      choices: ["Yes", "No", "Only if divided by 5", "Cannot be determined"],
      answer: "Yes",
      hints: [
        "Try to find a whole number whose square is 225.",
        "15 × 15 = 225.",
        "Since 15² = 225, it is a perfect square."
      ],
      explanation: [
        "15 × 15 = 225.",
        "225 is a <strong>perfect square</strong> because 15² = 225."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which of the following is NOT a perfect square?',
      choices: ["200", "169", "256", "324"],
      answer: "200",
      hints: [
        "Check each: 13² = 169, 16² = 256, 18² = 324.",
        "Is there a whole number whose square is 200?",
        "14² = 196 and 15² = 225, so 200 is not a perfect square."
      ],
      explanation: [
        "169 = 13², 256 = 16², 324 = 18².",
        "<strong>200</strong> is not a perfect square (between 14² = 196 and 15² = 225)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the smallest perfect square greater than 150?',
      answer: "169",
      hints: [
        "12² = 144, which is less than 150.",
        "13² = 169.",
        "169 > 150, so it is the first perfect square above 150."
      ],
      explanation: [
        "12² = 144 (too small). 13² = 169.",
        "The smallest perfect square greater than 150 is <strong>169</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 3: Larger Square Roots (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√121</span>?',
      answer: "11",
      hints: [
        "What number times itself equals 121?",
        "11 × 11 = 121.",
        "√121 = 11."
      ],
      explanation: [
        "11 × 11 = 121.",
        "√121 = 11."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√144</span>?',
      choices: ["12", "11", "13", "14"],
      answer: "12",
      hints: [
        "What number squared gives 144?",
        "12 × 12 = 144.",
        "√144 = 12."
      ],
      explanation: [
        "12 × 12 = 144.",
        "√144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√196</span>?',
      answer: "14",
      hints: [
        "Try 14: 14 × 14 = ?",
        "14 × 14 = 196.",
        "√196 = 14."
      ],
      explanation: [
        "14 × 14 = 196.",
        "√196 = 14."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√169</span>?',
      choices: ["13", "12", "14", "11"],
      answer: "13",
      hints: [
        "Try 13: 13 × 13 = ?",
        "13 × 13 = 169.",
        "√169 = 13."
      ],
      explanation: [
        "13 × 13 = 169.",
        "√169 = 13."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√225</span>?',
      answer: "15",
      hints: [
        "What number times itself equals 225?",
        "15 × 15 = 225.",
        "√225 = 15."
      ],
      explanation: [
        "15 × 15 = 225.",
        "√225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√256</span>?',
      choices: ["16", "15", "17", "14"],
      answer: "16",
      hints: [
        "Try 16: 16 × 16 = ?",
        "16 × 16 = 256.",
        "√256 = 16."
      ],
      explanation: [
        "16 × 16 = 256.",
        "√256 = 16."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√400</span>?',
      answer: "20",
      hints: [
        "What number times itself equals 400?",
        "20 × 20 = 400.",
        "√400 = 20."
      ],
      explanation: [
        "20 × 20 = 400.",
        "√400 = 20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√289</span>?',
      answer: "17",
      hints: [
        "Try 17: 17 × 17 = ?",
        "17 × 17 = 289.",
        "√289 = 17."
      ],
      explanation: [
        "17 × 17 = 289.",
        "√289 = 17."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√324</span>?',
      choices: ["18", "16", "19", "17"],
      answer: "18",
      hints: [
        "What number squared gives 324?",
        "18 × 18 = 324.",
        "√324 = 18."
      ],
      explanation: [
        "18 × 18 = 324.",
        "√324 = 18."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√361</span>?',
      answer: "19",
      hints: [
        "Try 19: 19 × 19 = ?",
        "19 × 19 = 361.",
        "√361 = 19."
      ],
      explanation: [
        "19 × 19 = 361.",
        "√361 = 19."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√625</span>?',
      choices: ["25", "20", "30", "24"],
      answer: "25",
      hints: [
        "Try 25: 25 × 25 = ?",
        "25 × 25 = 625.",
        "√625 = 25."
      ],
      explanation: [
        "25 × 25 = 625.",
        "√625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">√900</span>?',
      answer: "30",
      hints: [
        "What number times itself equals 900?",
        "30 × 30 = 900.",
        "√900 = 30."
      ],
      explanation: [
        "30 × 30 = 900.",
        "√900 = 30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√576</span>?',
      choices: ["24", "22", "26", "23"],
      answer: "24",
      hints: [
        "Try 24: 24 × 24 = ?",
        "24 × 24 = 576.",
        "√576 = 24."
      ],
      explanation: [
        "24 × 24 = 576.",
        "√576 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√484</span>?',
      answer: "22",
      hints: [
        "Try 22: 22 × 22 = ?",
        "22 × 22 = 484.",
        "√484 = 22."
      ],
      explanation: [
        "22 × 22 = 484.",
        "√484 = 22."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√225</span>?',
      choices: ["15", "14", "16", "13"],
      answer: "15",
      hints: [
        "What number squared gives 225?",
        "15 × 15 = 225.",
        "√225 = 15."
      ],
      explanation: [
        "15 × 15 = 225.",
        "√225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√529</span>?',
      answer: "23",
      hints: [
        "Try 23: 23 × 23 = ?",
        "23 × 23 = 529.",
        "√529 = 23."
      ],
      explanation: [
        "23 × 23 = 529.",
        "√529 = 23."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√441</span>?',
      choices: ["21", "20", "22", "19"],
      answer: "21",
      hints: [
        "Try 21: 21 × 21 = ?",
        "21 × 21 = 441.",
        "√441 = 21."
      ],
      explanation: [
        "21 × 21 = 441.",
        "√441 = 21."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√676</span>?',
      answer: "26",
      hints: [
        "Try 26: 26 × 26 = ?",
        "26 × 26 = 676.",
        "√676 = 26."
      ],
      explanation: [
        "26 × 26 = 676.",
        "√676 = 26."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√100</span>?',
      choices: ["10", "11", "9", "12"],
      answer: "10",
      hints: [
        "What number squared gives 100?",
        "10 × 10 = 100.",
        "√100 = 10."
      ],
      explanation: [
        "10 × 10 = 100.",
        "√100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√729</span>?',
      answer: "27",
      hints: [
        "Try 27: 27 × 27 = ?",
        "27 × 27 = 729.",
        "√729 = 27."
      ],
      explanation: [
        "27 × 27 = 729.",
        "√729 = 27."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">√196</span>?',
      choices: ["14", "13", "15", "12"],
      answer: "14",
      hints: [
        "What number squared gives 196?",
        "14 × 14 = 196.",
        "√196 = 14."
      ],
      explanation: [
        "14 × 14 = 196.",
        "√196 = 14."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√784</span>?',
      answer: "28",
      hints: [
        "Try 28: 28 × 28 = ?",
        "28 × 28 = 784.",
        "√784 = 28."
      ],
      explanation: [
        "28 × 28 = 784.",
        "√784 = 28."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√841</span>?',
      choices: ["29", "28", "30", "27"],
      answer: "29",
      hints: [
        "Try 29: 29 × 29 = ?",
        "29 × 29 = 841.",
        "√841 = 29."
      ],
      explanation: [
        "29 × 29 = 841.",
        "√841 = 29."
      ]
    }
  ,
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{400}</span>?',
      choices: ["20", "40", "200", "25"],
      answer: "20",
      hints: [
        'Find a number that multiplied by itself gives 400.',
        'Try 20: 20 \u00d7 20 = 400.',
        '\u221a400 = 20.'
      ],
      explanation: [
        '20 \u00d7 20 = 400.',
        '\u221a400 = 20.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{625}</span>?',
      answer: "25",
      hints: [
        'Find a number that multiplied by itself gives 625.',
        'Try 25: 25 \u00d7 25 = 625.',
        '\u221a625 = 25.'
      ],
      explanation: [
        '25 \u00d7 25 = 625.',
        '\u221a625 = 25.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{576}</span>?',
      choices: ["24", "22", "26", "28"],
      answer: "24",
      hints: [
        'Find a number that multiplied by itself gives 576.',
        'Try 24: 24 \u00d7 24 = 576.',
        '\u221a576 = 24.'
      ],
      explanation: [
        '24 \u00d7 24 = 576.',
        '\u221a576 = 24.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{625}</span>?',
      answer: "25",
      hints: [
        'Find a number that times itself gives 625.',
        'Try 25: 25 \u00d7 25 = 625.',
        '\u221a625 = 25.'
      ],
      explanation: [
        '25 \u00d7 25 = 625.',
        '\u221a625 = 25.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{729}</span>?',
      choices: ["27", "26", "28", "29"],
      answer: "27",
      hints: [
        'Try numbers in the upper 20s.',
        '27 \u00d7 27 = 729.',
        '\u221a729 = 27.'
      ],
      explanation: [
        '27 \u00d7 27 = 729.',
        '\u221a729 = 27.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{484}</span>?',
      choices: ["22", "21", "23", "24"],
      answer: "22",
      hints: [
        'Try numbers in the low 20s.',
        '22 \u00d7 22 = 484.',
        '\u221a484 = 22.'
      ],
      explanation: [
        '22 \u00d7 22 = 484.',
        '\u221a484 = 22.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\sqrt{400}</span>?',
      answer: "20",
      hints: [
        "Find the number that times itself gives 400.",
        "20 × 20 = 400.",
        "√400 = 20."
      ],
      explanation: [
        "20 × 20 = 400.",
        "√400 = 20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\sqrt{529}</span>?',
      choices: ["23", "22", "24", "21"],
      answer: "23",
      hints: [
        "Find the number that times itself gives 529.",
        "23 × 23 = 529.",
        "√529 = 23."
      ],
      explanation: [
        "23 × 23 = 529.",
        "√529 = 23."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\sqrt{169}</span>?',
      answer: "13",
      hints: [
        "Find the number that times itself gives 169.",
        "13 × 13 = 169.",
        "√169 = 13."
      ],
      explanation: [
        "13 × 13 = 169.",
        "√169 = 13."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\sqrt{225}</span>?',
      answer: "15",
      hints: [
        "What number times itself equals 225?",
        "15 × 15 = 225.",
        "√225 = 15."
      ],
      explanation: [
        "15 × 15 = 225.",
        "√225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\sqrt{324}</span>?',
      choices: ["18", "16", "17", "19"],
      answer: "18",
      hints: [
        "What number squared gives 324?",
        "18 × 18 = 324.",
        "√324 = 18."
      ],
      explanation: [
        "18 × 18 = 324.",
        "√324 = 18."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\sqrt{400}</span>?',
      answer: "20",
      hints: [
        "What number times itself equals 400?",
        "20 × 20 = 400.",
        "√400 = 20."
      ],
      explanation: [
        "20 × 20 = 400.",
        "√400 = 20."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">&radic;72</span>.',
      choices: ["6&radic;2", "3&radic;8", "2&radic;18", "8&radic;3"],
      answer: "6&radic;2",
      hints: [
        "Find the largest perfect square factor of 72.",
        "72 = 36 × 2, and 36 is a perfect square.",
        "&radic;72 = &radic;36 × &radic;2 = 6&radic;2."
      ],
      explanation: [
        "72 = 36 × 2.",
        "&radic;72 = &radic;36 · &radic;2 = <strong>6&radic;2</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">&radic;128</span>.',
      choices: ["8&radic;2", "4&radic;8", "2&radic;32", "16&radic;2"],
      answer: "8&radic;2",
      hints: [
        "Find the largest perfect square factor of 128.",
        "128 = 64 × 2.",
        "&radic;128 = &radic;64 × &radic;2 = 8&radic;2."
      ],
      explanation: [
        "128 = 64 × 2.",
        "&radic;128 = &radic;64 · &radic;2 = <strong>8&radic;2</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">&radic;45</span>.',
      choices: ["3&radic;5", "5&radic;3", "9&radic;5", "5&radic;9"],
      answer: "3&radic;5",
      hints: [
        "Find the largest perfect square factor of 45.",
        "45 = 9 × 5.",
        "&radic;45 = &radic;9 × &radic;5 = 3&radic;5."
      ],
      explanation: [
        "45 = 9 × 5.",
        "&radic;45 = &radic;9 · &radic;5 = <strong>3&radic;5</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 4: Advanced Recognition (difficulty 1-2)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which is the square root of 144?',
      choices: ["12", "14", "11", "13"],
      answer: "12",
      hints: [
        "12 × 12 = 144.",
        "So √144 = 12.",
        "12 is the answer."
      ],
      explanation: [
        "12 × 12 = 144.",
        "√144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What perfect square comes right after 100?',
      answer: "121",
      hints: [
        "√100 = 10, so the next integer is 11.",
        "11² = ?",
        "11² = 121."
      ],
      explanation: [
        "10² = 100, so the next perfect square is 11² = 121.",
        "The answer is 121."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is both a perfect square and a multiple of 9?',
      choices: ["81", "45", "54", "72"],
      answer: "81",
      hints: [
        "81 = 9 × 9, so it is a perfect square.",
        "81 ÷ 9 = 9, so it is a multiple of 9.",
        "The others are not perfect squares."
      ],
      explanation: [
        "81 = 9² and 81 = 9 × 9.",
        "81 is both a perfect square and a multiple of 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the smallest perfect square greater than 150?',
      answer: "169",
      hints: [
        "12² = 144 (too small) and 13² = ?",
        "13² = 169.",
        "169 > 150 and is a perfect square."
      ],
      explanation: [
        "12² = 144 < 150.",
        "13² = 169 > 150.",
        "The smallest perfect square greater than 150 is 169."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: '<span class="math">√225</span> equals which value?',
      choices: ["15", "14", "16", "13"],
      answer: "15",
      hints: [
        "15 × 15 = 225.",
        "So √225 = 15.",
        "Check: 14² = 196, 16² = 256."
      ],
      explanation: [
        "15 × 15 = 225.",
        "√225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which number is both a perfect square and an even number less than 20?',
      choices: ["16", "12", "18", "14"],
      answer: "16",
      hints: [
        "List even perfect squares: 4, 16, ...",
        "16 is even and 4² = 16.",
        "16 is less than 20."
      ],
      explanation: [
        "4² = 16, which is even and less than 20.",
        "16 is the answer."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the largest perfect square less than 200?',
      answer: "196",
      hints: [
        "14² = 196 and 15² = 225.",
        "225 > 200, so 196 is the largest.",
        "196 < 200."
      ],
      explanation: [
        "14² = 196 < 200.",
        "15² = 225 > 200.",
        "The largest perfect square less than 200 is 196."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many perfect squares are between 50 and 100 (not including 100)?',
      choices: ["2", "3", "1", "4"],
      answer: "2",
      hints: [
        "8² = 64 and 9² = 81.",
        "Both are between 50 and 100.",
        "7² = 49 (too small) and 10² = 100 (excluded)."
      ],
      explanation: [
        "64 (8²) and 81 (9²) are between 50 and 100.",
        "There are 2 perfect squares."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What perfect square comes right after 225?',
      answer: "256",
      hints: [
        "√225 = 15, so the next integer is 16.",
        "16² = ?",
        "16² = 256."
      ],
      explanation: [
        "15² = 225, so the next perfect square is 16² = 256.",
        "The answer is 256."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which number is both a perfect square and an odd number less than 30?',
      choices: ["25", "15", "21", "27"],
      answer: "25",
      hints: [
        "List odd perfect squares: 1, 9, 25, ...",
        "25 is odd and 5² = 25.",
        "25 is less than 30."
      ],
      explanation: [
        "5² = 25, which is odd and less than 30.",
        "25 is the answer."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many perfect squares are between 100 and 200 (not including 100)?',
      choices: ["4", "3", "5", "2"],
      answer: "4",
      hints: [
        "11² = 121, 12² = 144, 13² = 169, 14² = 196.",
        "All four are between 100 and 200.",
        "15² = 225 > 200, so we stop at 14²."
      ],
      explanation: [
        "11² = 121, 12² = 144, 13² = 169, 14² = 196.",
        "There are 4 perfect squares between 100 and 200."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What perfect square comes right after 64?',
      answer: "81",
      hints: [
        "√64 = 8, so the next integer is 9.",
        "9² = ?",
        "9² = 81."
      ],
      explanation: [
        "8² = 64, so the next perfect square is 9² = 81.",
        "The answer is 81."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is both a perfect square and a multiple of 4 between 30 and 50?',
      choices: ["36", "32", "40", "48"],
      answer: "36",
      hints: [
        "36 = 6 × 6, so it is a perfect square.",
        "36 ÷ 4 = 9, so it is a multiple of 4.",
        "The others are not perfect squares."
      ],
      explanation: [
        "36 = 6² and 36 = 4 × 9.",
        "36 is both a perfect square and a multiple of 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the smallest perfect square greater than 250?',
      answer: "256",
      hints: [
        "15² = 225 (too small) and 16² = ?",
        "16² = 256.",
        "256 > 250 and is a perfect square."
      ],
      explanation: [
        "15² = 225 < 250.",
        "16² = 256 > 250.",
        "The smallest perfect square greater than 250 is 256."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What perfect square comes right after 49?',
      choices: ["64", "56", "50", "81"],
      answer: "64",
      hints: [
        "√49 = 7, so the next integer is 8.",
        "8² = ?",
        "8² = 64."
      ],
      explanation: [
        "7² = 49, so the next perfect square is 8² = 64.",
        "The answer is 64."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the largest perfect square less than 300?',
      answer: "289",
      hints: [
        "17² = 289 and 18² = 324.",
        "324 > 300, so 289 is the largest.",
        "289 < 300."
      ],
      explanation: [
        "17² = 289 < 300.",
        "18² = 324 > 300.",
        "The largest perfect square less than 300 is 289."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many perfect squares are between 20 and 70 (not including endpoints)?',
      choices: ["4", "3", "5", "2"],
      answer: "4",
      hints: [
        "5² = 25, 6² = 36, 7² = 49, 8² = 64.",
        "All four are between 20 and 70.",
        "4² = 16 (too small) and 9² = 81 (too big)."
      ],
      explanation: [
        "25 (5²), 36 (6²), 49 (7²), and 64 (8²) are between 20 and 70.",
        "There are 4 perfect squares."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'How many perfect squares are between 200 and 400 (not including endpoints)?',
      choices: ["5", "4", "6", "3"],
      answer: "5",
      hints: [
        "15² = 225, 16² = 256, 17² = 289, 18² = 324, 19² = 361.",
        "All five are between 200 and 400.",
        "14² = 196 (too small) and 20² = 400 (excluded)."
      ],
      explanation: [
        "225 (15²), 256 (16²), 289 (17²), 324 (18²), and 361 (19²) are between 200 and 400.",
        "There are 5 perfect squares."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What perfect square comes right after 36?',
      answer: "49",
      hints: [
        "√36 = 6, so the next integer is 7.",
        "7² = ?",
        "7² = 49."
      ],
      explanation: [
        "6² = 36, so the next perfect square is 7² = 49.",
        "The answer is 49."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is the largest perfect square less than 500?',
      choices: ["484", "441", "529", "400"],
      answer: "484",
      hints: [
        "22² = 484 and 23² = 529.",
        "529 > 500, so 484 is the largest.",
        "484 < 500."
      ],
      explanation: [
        "22² = 484 < 500.",
        "23² = 529 > 500.",
        "The largest perfect square less than 500 is 484."
      ]
    }
  ,
    {
      type: "numeric", difficulty: 1,
      question: 'What perfect square comes right after 81?',
      answer: "100",
      hints: [
        "√81 = 9, so the next integer is 10.",
        "10² = ?",
        "10² = 100."
      ],
      explanation: [
        "9² = 81, so the next perfect square is 10² = 100.",
        "The answer is 100."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is the smallest perfect square greater than 350?',
      choices: ["361", "400", "324", "375"],
      answer: "361",
      hints: [
        "18² = 324 (too small) and 19² = ?",
        "19² = 361.",
        "361 > 350 and is a perfect square."
      ],
      explanation: [
        "18² = 324 < 350.",
        "19² = 361 > 350.",
        "The smallest perfect square greater than 350 is 361."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many perfect squares are between 150 and 350 (not including endpoints)?',
      choices: ["6", "5", "7", "4"],
      answer: "6",
      hints: [
        "13² = 169, 14² = 196, 15² = 225, 16² = 256, 17² = 289, 18² = 324.",
        "All six are between 150 and 350.",
        "12² = 144 (too small) and 19² = 361 (too big)."
      ],
      explanation: [
        "169 (13²), 196 (14²), 225 (15²), 256 (16²), 289 (17²), 324 (18²) are between 150 and 350.",
        "There are 6 perfect squares."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is a perfect square?',
      choices: ["529", "530", "520", "540"],
      answer: "529",
      hints: [
        'Try some values: 22\u00b2 = 484, 23\u00b2 = 529.',
        '529 = 23 \u00d7 23.',
        '529 is a perfect square.'
      ],
      explanation: [
        '23 \u00d7 23 = 529.',
        '529 is a perfect square.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{289}</span>?',
      answer: "17",
      hints: [
        'Find a number that multiplied by itself gives 289.',
        'Try 17: 17 \u00d7 17 = 289.',
        '\u221a289 = 17.'
      ],
      explanation: [
        '17 \u00d7 17 = 289.',
        '\u221a289 = 17.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{441}</span>?',
      choices: ["21", "19", "22", "20"],
      answer: "21",
      hints: [
        'Find a number that multiplied by itself gives 441.',
        'Try 21: 21 \u00d7 21 = 441.',
        '\u221a441 = 21.'
      ],
      explanation: [
        '21 \u00d7 21 = 441.',
        '\u221a441 = 21.'
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">\\sqrt{324}</span>?',
      answer: "18",
      hints: [
        'Think of a number near 18.',
        '18 \u00d7 18 = 324.',
        '\u221a324 = 18.'
      ],
      explanation: [
        '18 \u00d7 18 = 324.',
        '\u221a324 = 18.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{784}</span>?',
      choices: ["28", "27", "29", "26"],
      answer: "28",
      hints: [
        'Try numbers near 28.',
        '28 \u00d7 28 = 784.',
        '\u221a784 = 28.'
      ],
      explanation: [
        '28 \u00d7 28 = 784.',
        '\u221a784 = 28.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following equals <span class="math">\\sqrt{529}</span>?',
      choices: ["23", "22", "24", "21"],
      answer: "23",
      hints: [
        'Try 23: 23 \u00d7 23 = ?',
        '23 \u00d7 23 = 529.',
        '\u221a529 = 23.'
      ],
      explanation: [
        '23 \u00d7 23 = 529.',
        '\u221a529 = 23.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which of these is a perfect square?',
      choices: ["625", "620", "630", "615"],
      answer: "625",
      hints: [
        "25 × 25 = 625.",
        "625 is a perfect square.",
        "The others are not perfect squares."
      ],
      explanation: [
        "25 × 25 = 625.",
        "625 is a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What number squared gives 576?',
      answer: "24",
      hints: [
        "Find the number n where n × n = 576.",
        "24 × 24 = 576.",
        "The answer is 24."
      ],
      explanation: [
        "24 × 24 = 576.",
        "√576 = 24."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Is 441 a perfect square?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "A perfect square is an integer times itself.",
        "21 × 21 = 441.",
        "441 is a perfect square."
      ],
      explanation: [
        "21 × 21 = 441.",
        "Yes, 441 is a perfect square."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which number is NOT a perfect square?',
      choices: ["200", "196", "225", "169"],
      answer: "200",
      hints: [
        "Check each: 14² = 196, 15² = 225, 13² = 169.",
        "200 is between 196 and 225.",
        "200 is not a perfect square."
      ],
      explanation: [
        "196 = 14², 225 = 15², 169 = 13².",
        "200 has no integer square root, so it is not a perfect square."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What perfect square comes right after 225?',
      answer: "256",
      hints: [
        "√225 = 15, so the next integer is 16.",
        "16² = ?",
        "16² = 256."
      ],
      explanation: [
        "15² = 225, so the next perfect square is 16².",
        "16² = 256."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'How many perfect squares are between 50 and 150 (inclusive)?',
      choices: ["5", "4", "6", "3"],
      answer: "5",
      hints: [
        "List perfect squares: 64, 81, 100, 121, 144.",
        "That is 8², 9², 10², 11², 12².",
        "There are 5 perfect squares."
      ],
      explanation: [
        "8² = 64, 9² = 81, 10² = 100, 11² = 121, 12² = 144.",
        "All are between 50 and 150. Count = 5."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">3&radic;5 + 7&radic;5</span>.',
      choices: ["10&radic;5", "10&radic;10", "21&radic;5", "4&radic;10"],
      answer: "10&radic;5",
      hints: [
        "These are like radicals (both have &radic;5).",
        "Add the coefficients: 3 + 7 = 10.",
        "Keep the radical: 10&radic;5."
      ],
      explanation: [
        "3&radic;5 + 7&radic;5 = (3 + 7)&radic;5.",
        "= <strong>10&radic;5</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify: <span class="math">9&radic;3 − 4&radic;3</span>. The answer is <span class="math">a&radic;3</span>. Enter <span class="math">a</span>.',
      answer: "5",
      hints: [
        "Both terms have &radic;3.",
        "Subtract the coefficients: 9 − 4 = 5.",
        "The result is 5&radic;3."
      ],
      explanation: [
        "9&radic;3 − 4&radic;3 = (9 − 4)&radic;3.",
        "= <strong>5</strong>&radic;3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">6&radic;7 + 2&radic;7 − 3&radic;7</span>.',
      choices: ["5&radic;7", "11&radic;7", "5&radic;21", "1&radic;7"],
      answer: "5&radic;7",
      hints: [
        "All terms have &radic;7.",
        "Combine coefficients: 6 + 2 − 3 = 5.",
        "Result is 5&radic;7."
      ],
      explanation: [
        "6 + 2 − 3 = 5.",
        "6&radic;7 + 2&radic;7 − 3&radic;7 = <strong>5&radic;7</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 5: Estimating Square Roots (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">√30</span> lie?',
      choices: ["5 and 6", "4 and 5", "6 and 7", "3 and 4"],
      answer: "5 and 6",
      hints: [
        "5² = 25 and 6² = 36.",
        "30 is between 25 and 36.",
        "So √30 is between 5 and 6."
      ],
      explanation: [
        "5² = 25 < 30 < 36 = 6².",
        "Therefore √30 is between 5 and 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '<span class="math">√50</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "7",
      hints: [
        "7² = 49 and 8² = 64.",
        "50 is between 49 and 64.",
        "So √50 is between 7 and 8."
      ],
      explanation: [
        "7² = 49 < 50 < 64 = 8².",
        "The smaller integer is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√85</span>?',
      choices: ["9.2", "8.5", "9.8", "10.1"],
      answer: "9.2",
      hints: [
        "9² = 81 and 10² = 100.",
        "85 is close to 81, so √85 is a bit more than 9.",
        "9.2² = 84.64 ≈ 85."
      ],
      explanation: [
        "9² = 81 and 10² = 100.",
        "85 is closer to 81 than to 100.",
        "√85 ≈ 9.2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">√110</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "10",
      hints: [
        "10² = 100 and 11² = 121.",
        "110 is between 100 and 121.",
        "So √110 is between 10 and 11."
      ],
      explanation: [
        "10² = 100 < 110 < 121 = 11².",
        "The smaller integer is 10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">√20</span> lie?',
      choices: ["4 and 5", "3 and 4", "5 and 6", "2 and 3"],
      answer: "4 and 5",
      hints: [
        "4² = 16 and 5² = 25.",
        "20 is between 16 and 25.",
        "So √20 is between 4 and 5."
      ],
      explanation: [
        "4² = 16 < 20 < 25 = 5².",
        "√20 is between 4 and 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">√60</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "7",
      hints: [
        "7² = 49 and 8² = 64.",
        "60 is between 49 and 64.",
        "So √60 is between 7 and 8."
      ],
      explanation: [
        "7² = 49 < 60 < 64 = 8².",
        "The smaller integer is 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">√45</span> lie?',
      choices: ["6 and 7", "5 and 6", "7 and 8", "4 and 5"],
      answer: "6 and 7",
      hints: [
        "6² = 36 and 7² = 49.",
        "45 is between 36 and 49.",
        "So √45 is between 6 and 7."
      ],
      explanation: [
        "6² = 36 < 45 < 49 = 7².",
        "√45 is between 6 and 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√150</span>?',
      choices: ["12.2", "11.5", "13.0", "12.8"],
      answer: "12.2",
      hints: [
        "12² = 144 and 13² = 169.",
        "150 is closer to 144 than to 169.",
        "12.2² = 148.84 ≈ 150."
      ],
      explanation: [
        "12² = 144 and 13² = 169.",
        "150 is closer to 144, so √150 ≈ 12.2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '<span class="math">√40</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "6",
      hints: [
        "6² = 36 and 7² = 49.",
        "40 is between 36 and 49.",
        "So √40 is between 6 and 7."
      ],
      explanation: [
        "6² = 36 < 40 < 49 = 7².",
        "The smaller integer is 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√70</span>?',
      choices: ["8.4", "7.5", "9.0", "8.0"],
      answer: "8.4",
      hints: [
        "8² = 64 and 9² = 81.",
        "70 is between 64 and 81, closer to 64.",
        "8.4² = 70.56 ≈ 70."
      ],
      explanation: [
        "8² = 64 and 9² = 81.",
        "70 is closer to 64, so √70 ≈ 8.4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Between which two integers does <span class="math">√95</span> lie?',
      choices: ["9 and 10", "8 and 9", "10 and 11", "7 and 8"],
      answer: "9 and 10",
      hints: [
        "9² = 81 and 10² = 100.",
        "95 is between 81 and 100.",
        "So √95 is between 9 and 10."
      ],
      explanation: [
        "9² = 81 < 95 < 100 = 10².",
        "√95 is between 9 and 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: '<span class="math">√75</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "8",
      hints: [
        "8² = 64 and 9² = 81.",
        "75 is between 64 and 81.",
        "So √75 is between 8 and 9."
      ],
      explanation: [
        "8² = 64 < 75 < 81 = 9².",
        "The smaller integer is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√52</span>?',
      choices: ["7.2", "6.5", "8.0", "7.8"],
      answer: "7.2",
      hints: [
        "7² = 49 and 8² = 64.",
        "52 is close to 49, so √52 is a bit more than 7.",
        "7.2² = 51.84 ≈ 52."
      ],
      explanation: [
        "7² = 49 and 8² = 64.",
        "52 is closer to 49 than to 64.",
        "√52 ≈ 7.2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">√130</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "11",
      hints: [
        "11² = 121 and 12² = 144.",
        "130 is between 121 and 144.",
        "So √130 is between 11 and 12."
      ],
      explanation: [
        "11² = 121 < 130 < 144 = 12².",
        "The smaller integer is 11."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">√10</span> lie?',
      choices: ["3 and 4", "2 and 3", "4 and 5", "1 and 2"],
      answer: "3 and 4",
      hints: [
        "3² = 9 and 4² = 16.",
        "10 is between 9 and 16.",
        "So √10 is between 3 and 4."
      ],
      explanation: [
        "3² = 9 < 10 < 16 = 4².",
        "√10 is between 3 and 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">√200</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "14",
      hints: [
        "14² = 196 and 15² = 225.",
        "200 is between 196 and 225.",
        "So √200 is between 14 and 15."
      ],
      explanation: [
        "14² = 196 < 200 < 225 = 15².",
        "The smaller integer is 14."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√38</span>?',
      choices: ["6.2", "5.8", "7.0", "6.8"],
      answer: "6.2",
      hints: [
        "6² = 36 and 7² = 49.",
        "38 is close to 36, so √38 is a bit more than 6.",
        "6.2² = 38.44 ≈ 38."
      ],
      explanation: [
        "6² = 36 and 7² = 49.",
        "38 is closer to 36 than to 49.",
        "√38 ≈ 6.2."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">√55</span> lie?',
      choices: ["7 and 8", "6 and 7", "8 and 9", "5 and 6"],
      answer: "7 and 8",
      hints: [
        "7² = 49 and 8² = 64.",
        "55 is between 49 and 64.",
        "So √55 is between 7 and 8."
      ],
      explanation: [
        "7² = 49 < 55 < 64 = 8².",
        "Therefore √55 is between 7 and 8."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">√170</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "13",
      hints: [
        "13² = 169 and 14² = 196.",
        "170 is between 169 and 196.",
        "So √170 is between 13 and 14."
      ],
      explanation: [
        "13² = 169 < 170 < 196 = 14².",
        "The smaller integer is 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√26</span>?',
      choices: ["5.1", "4.8", "5.5", "6.0"],
      answer: "5.1",
      hints: [
        "5² = 25 and 6² = 36.",
        "26 is very close to 25, so √26 is just above 5.",
        "5.1² = 26.01 ≈ 26."
      ],
      explanation: [
        "5² = 25 and 6² = 36.",
        "26 is very close to 25.",
        "√26 ≈ 5.1."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">√65</span> lie?',
      choices: ["8 and 9", "7 and 8", "9 and 10", "6 and 7"],
      answer: "8 and 9",
      hints: [
        "8² = 64 and 9² = 81.",
        "65 is between 64 and 81.",
        "So √65 is between 8 and 9."
      ],
      explanation: [
        "8² = 64 < 65 < 81 = 9².",
        "Therefore √65 is between 8 and 9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">√180</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "13",
      hints: [
        "13² = 169 and 14² = 196.",
        "180 is between 169 and 196.",
        "So √180 is between 13 and 14."
      ],
      explanation: [
        "13² = 169 < 180 < 196 = 14².",
        "The smaller integer is 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">√115</span>?',
      choices: ["10.7", "10.2", "11.5", "9.8"],
      answer: "10.7",
      hints: [
        "10² = 100 and 11² = 121.",
        "115 is between 100 and 121, closer to 121.",
        "10.7² = 114.49 ≈ 115."
      ],
      explanation: [
        "10² = 100 and 11² = 121.",
        "115 is closer to 121 than to 100.",
        "√115 ≈ 10.7."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">\\sqrt{60}</span> lie?',
      choices: ["7 and 8", "6 and 7", "8 and 9", "5 and 6"],
      answer: "7 and 8",
      hints: [
        '7\u00b2 = 49 and 8\u00b2 = 64.',
        '60 is between 49 and 64.',
        'So \u221a60 is between 7 and 8.'
      ],
      explanation: [
        '7\u00b2 = 49 < 60 < 64 = 8\u00b2.',
        'Therefore \u221a60 is between 7 and 8.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">\\sqrt{110}</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "10",
      hints: [
        '10\u00b2 = 100 and 11\u00b2 = 121.',
        '110 is between 100 and 121.',
        'So \u221a110 is between 10 and 11.'
      ],
      explanation: [
        '10\u00b2 = 100 < 110 < 121 = 11\u00b2.',
        'The smaller integer is 10.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Which is the best estimate for <span class="math">\\sqrt{40}</span>?',
      choices: ["6.3", "5.8", "6.8", "7.1"],
      answer: "6.3",
      hints: [
        '6\u00b2 = 36 and 7\u00b2 = 49.',
        '40 is closer to 36 than to 49.',
        'Try 6.3: 6.3 \u00d7 6.3 = 39.69 \u2248 40.'
      ],
      explanation: [
        '6\u00b2 = 36, 7\u00b2 = 49. 40 is between them.',
        '6.3\u00b2 = 39.69 \u2248 40, so \u221a40 \u2248 6.3.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Estimate <span class="math">\\sqrt{55}</span> to one decimal place.',
      choices: ["7.4", "7.0", "8.0", "6.8"],
      answer: "7.4",
      hints: [
        '7\u00b2 = 49 and 8\u00b2 = 64. So \u221a55 is between 7 and 8.',
        '55 is closer to 49 than to 64.',
        'Try 7.4: 7.4 \u00d7 7.4 = 54.76 \u2248 55.'
      ],
      explanation: [
        '7\u00b2 = 49, 8\u00b2 = 64. 55 is between them.',
        '7.4\u00b2 = 54.76 \u2248 55, so \u221a55 \u2248 7.4.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Estimate <span class="math">\\sqrt{90}</span> to one decimal place.',
      answer: "9.5",
      hints: [
        '9\u00b2 = 81 and 10\u00b2 = 100. So \u221a90 is between 9 and 10.',
        '90 is about halfway between 81 and 100.',
        'Try 9.5: 9.5 \u00d7 9.5 = 90.25 \u2248 90.'
      ],
      explanation: [
        '9\u00b2 = 81, 10\u00b2 = 100. 90 is between them.',
        '9.5\u00b2 = 90.25 \u2248 90, so \u221a90 \u2248 9.5.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Between which two consecutive integers does <span class="math">\\sqrt{150}</span> fall?',
      choices: ["12 and 13", "11 and 12", "13 and 14", "10 and 11"],
      answer: "12 and 13",
      hints: [
        '12\u00b2 = 144 and 13\u00b2 = 169.',
        'Is 144 < 150 < 169?',
        'Yes, so \u221a150 is between 12 and 13.'
      ],
      explanation: [
        '12\u00b2 = 144 and 13\u00b2 = 169.',
        '144 < 150 < 169, so \u221a150 is between 12 and 13.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Between which two consecutive whole numbers does <span class="math">\sqrt{85}</span> fall?',
      choices: ["9 and 10", "8 and 9", "10 and 11", "7 and 8"],
      answer: "9 and 10",
      hints: [
        "9² = 81 and 10² = 100.",
        "Is 81 < 85 < 100?",
        "Yes, so √85 is between 9 and 10."
      ],
      explanation: [
        "9² = 81 and 10² = 100.",
        "81 < 85 < 100, so √85 is between 9 and 10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">\sqrt{200}</span> falls between which two consecutive integers? Enter the smaller one.',
      answer: "14",
      hints: [
        "14² = 196 and 15² = 225.",
        "Is 196 < 200 < 225?",
        "Yes, so √200 is between 14 and 15. The smaller is 14."
      ],
      explanation: [
        "14² = 196 and 15² = 225.",
        "196 < 200 < 225, so √200 is between 14 and 15."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Between which two consecutive whole numbers does <span class="math">\sqrt{175}</span> fall?',
      choices: ["13 and 14", "12 and 13", "14 and 15", "11 and 12"],
      answer: "13 and 14",
      hints: [
        "13² = 169 and 14² = 196.",
        "Is 169 < 175 < 196?",
        "Yes, so √175 is between 13 and 14."
      ],
      explanation: [
        "13² = 169 and 14² = 196.",
        "169 < 175 < 196, so √175 is between 13 and 14."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Between which two integers does <span class="math">\sqrt{85}</span> lie?',
      choices: ["9 and 10", "8 and 9", "10 and 11", "7 and 8"],
      answer: "9 and 10",
      hints: [
        "9² = 81 and 10² = 100.",
        "85 is between 81 and 100.",
        "So √85 is between 9 and 10."
      ],
      explanation: [
        "9² = 81 < 85 < 100 = 10².",
        "Therefore √85 is between 9 and 10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: '<span class="math">\sqrt{200}</span> is between which two consecutive integers? Enter the smaller integer.',
      answer: "14",
      hints: [
        "14² = 196 and 15² = 225.",
        "200 is between 196 and 225.",
        "So √200 is between 14 and 15."
      ],
      explanation: [
        "14² = 196 < 200 < 225 = 15².",
        "The smaller integer is 14."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which integer is closest to <span class="math">\sqrt{63}</span>?',
      choices: ["8", "7", "9", "6"],
      answer: "8",
      hints: [
        "7² = 49 and 8² = 64.",
        "63 is very close to 64.",
        "So √63 ≈ 8."
      ],
      explanation: [
        "7² = 49, 8² = 64. Since 63 is only 1 less than 64,",
        "√63 is very close to 8."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">&radic;[3]{64}</span> (the cube root of 64)?',
      answer: "4",
      hints: [
        "Ask: what number cubed equals 64?",
        "Try 4: 4 × 4 × 4 = 64.",
        "So the cube root of 64 is 4."
      ],
      explanation: [
        "4 × 4 × 4 = 4³ = 64.",
        "The cube root of 64 is <strong>4</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">&radic;[3]{216}</span> (the cube root of 216)?',
      choices: ["6", "7", "5", "8"],
      answer: "6",
      hints: [
        "What number cubed gives 216?",
        "Try 6: 6 × 6 = 36, then 36 × 6 = 216.",
        "So the cube root of 216 is 6."
      ],
      explanation: [
        "6 × 6 × 6 = 216.",
        "The cube root of 216 is <strong>6</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">&radic;[3]{125}</span> (the cube root of 125)?',
      answer: "5",
      hints: [
        "What number cubed gives 125?",
        "Try 5: 5 × 5 × 5 = 125.",
        "So the cube root of 125 is 5."
      ],
      explanation: [
        "5 × 5 × 5 = 125.",
        "The cube root of 125 is <strong>5</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 6: Simplifying Square Roots (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√50</span>.',
      choices: ["5√2", "2√5", "25√2", "10√5"],
      answer: "5√2",
      hints: [
        "Find the largest perfect square factor of 50.",
        "50 = 25 × 2, and 25 is a perfect square.",
        "√50 = √25 × √2 = 5√2."
      ],
      explanation: [
        "50 = 25 × 2.",
        "√50 = √(25 × 2) = √25 × √2 = 5√2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√18</span>.',
      choices: ["3√2", "2√3", "9√2", "6√3"],
      answer: "3√2",
      hints: [
        "18 = 9 × 2.",
        "√9 = 3.",
        "√18 = 3√2."
      ],
      explanation: [
        "18 = 9 × 2.",
        "√18 = √(9 × 2) = 3√2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√72</span>.',
      choices: ["6√2", "3√8", "2√18", "4√3"],
      answer: "6√2",
      hints: [
        "72 = 36 × 2.",
        "√36 = 6.",
        "√72 = 6√2."
      ],
      explanation: [
        "72 = 36 × 2.",
        "√72 = √(36 × 2) = 6√2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">√32</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "4",
      hints: [
        "32 = 16 × 2.",
        "√16 = 4.",
        "√32 = 4√2, so a = 4."
      ],
      explanation: [
        "32 = 16 × 2.",
        "√32 = √(16 × 2) = 4√2.",
        "a = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√98</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "7",
      hints: [
        "98 = 49 × 2.",
        "√49 = 7.",
        "√98 = 7√2, so a = 7."
      ],
      explanation: [
        "98 = 49 × 2.",
        "√98 = √(49 × 2) = 7√2.",
        "a = 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√108</span>.',
      choices: ["6√3", "3√12", "4√3", "12√3"],
      answer: "6√3",
      hints: [
        "108 = 36 × 3.",
        "√36 = 6.",
        "√108 = 6√3."
      ],
      explanation: [
        "108 = 36 × 3.",
        "√108 = √(36 × 3) = 6√3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">√20</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "2",
      hints: [
        "20 = 4 × 5.",
        "√4 = 2.",
        "√20 = 2√5, so a = 2."
      ],
      explanation: [
        "20 = 4 × 5.",
        "√20 = √(4 × 5) = 2√5.",
        "a = 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√28</span>.',
      choices: ["2√7", "4√7", "7√2", "14"],
      answer: "2√7",
      hints: [
        "28 = 4 × 7.",
        "√4 = 2.",
        "√28 = 2√7."
      ],
      explanation: [
        "28 = 4 × 7.",
        "√28 = √(4 × 7) = 2√7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√45</span>.',
      choices: ["3√5", "5√3", "9√5", "15"],
      answer: "3√5",
      hints: [
        "45 = 9 × 5.",
        "√9 = 3.",
        "√45 = 3√5."
      ],
      explanation: [
        "45 = 9 × 5.",
        "√45 = √(9 × 5) = 3√5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">√12</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "2",
      hints: [
        "12 = 4 × 3.",
        "√4 = 2.",
        "√12 = 2√3, so a = 2."
      ],
      explanation: [
        "12 = 4 × 3.",
        "√12 = √(4 × 3) = 2√3.",
        "a = 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√63</span>.',
      choices: ["3√7", "7√3", "9√7", "21"],
      answer: "3√7",
      hints: [
        "63 = 9 × 7.",
        "√9 = 3.",
        "√63 = 3√7."
      ],
      explanation: [
        "63 = 9 × 7.",
        "√63 = √(9 × 7) = 3√7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">√44</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "2",
      hints: [
        "44 = 4 × 11.",
        "√4 = 2.",
        "√44 = 2√11, so a = 2."
      ],
      explanation: [
        "44 = 4 × 11.",
        "√44 = √(4 × 11) = 2√11.",
        "a = 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√147</span>.',
      choices: ["7√3", "3√7", "49√3", "21"],
      answer: "7√3",
      hints: [
        "147 = 49 × 3.",
        "√49 = 7.",
        "√147 = 7√3."
      ],
      explanation: [
        "147 = 49 × 3.",
        "√147 = √(49 × 3) = 7√3."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√125</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "5",
      hints: [
        "125 = 25 × 5.",
        "√25 = 5.",
        "√125 = 5√5, so a = 5."
      ],
      explanation: [
        "125 = 25 × 5.",
        "√125 = √(25 × 5) = 5√5.",
        "a = 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√24</span>.',
      choices: ["2√6", "4√6", "6√2", "12"],
      answer: "2√6",
      hints: [
        "24 = 4 × 6.",
        "√4 = 2.",
        "√24 = 2√6."
      ],
      explanation: [
        "24 = 4 × 6.",
        "√24 = √(4 × 6) = 2√6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√80</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "4",
      hints: [
        "80 = 16 × 5.",
        "√16 = 4.",
        "√80 = 4√5, so a = 4."
      ],
      explanation: [
        "80 = 16 × 5.",
        "√80 = √(16 × 5) = 4√5.",
        "a = 4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√175</span>.',
      choices: ["5√7", "7√5", "25√7", "35"],
      answer: "5√7",
      hints: [
        "175 = 25 × 7.",
        "√25 = 5.",
        "√175 = 5√7."
      ],
      explanation: [
        "175 = 25 × 7.",
        "√175 = √(25 × 7) = 5√7."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√40</span>.',
      choices: ["2√10", "4√10", "10√2", "20"],
      answer: "2√10",
      hints: [
        "40 = 4 × 10.",
        "√4 = 2.",
        "√40 = 2√10."
      ],
      explanation: [
        "40 = 4 × 10.",
        "√40 = √(4 × 10) = 2√10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√112</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "4",
      hints: [
        "112 = 16 × 7.",
        "√16 = 4.",
        "√112 = 4√7, so a = 4."
      ],
      explanation: [
        "112 = 16 × 7.",
        "√112 = √(16 × 7) = 4√7.",
        "a = 4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√99</span>.',
      choices: ["3√11", "11√3", "9√11", "33"],
      answer: "3√11",
      hints: [
        "99 = 9 × 11.",
        "√9 = 3.",
        "√99 = 3√11."
      ],
      explanation: [
        "99 = 9 × 11.",
        "√99 = √(9 × 11) = 3√11."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√54</span>.',
      choices: ["3√6", "6√3", "9√6", "27"],
      answer: "3√6",
      hints: [
        "54 = 9 × 6.",
        "√9 = 3.",
        "√54 = 3√6."
      ],
      explanation: [
        "54 = 9 × 6.",
        "√54 = √(9 × 6) = 3√6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√162</span>. If the answer is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "9",
      hints: [
        "162 = 81 × 2.",
        "√81 = 9.",
        "√162 = 9√2, so a = 9."
      ],
      explanation: [
        "162 = 81 × 2.",
        "√162 = √(81 × 2) = 9√2.",
        "a = 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√245</span>.',
      choices: ["7√5", "5√7", "49√5", "35"],
      answer: "7√5",
      hints: [
        "245 = 49 × 5.",
        "√49 = 7.",
        "√245 = 7√5."
      ],
      explanation: [
        "245 = 49 × 5.",
        "√245 = √(49 × 5) = 7√5."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">\\sqrt{32}</span>.',
      choices: ["4\u221a2", "2\u221a8", "8\u221a2", "16"],
      answer: "4\u221a2",
      hints: [
        'Find the largest perfect square factor of 32.',
        '32 = 16 \u00d7 2, and 16 is a perfect square.',
        '\u221a32 = \u221a16 \u00d7 \u221a2 = 4\u221a2.'
      ],
      explanation: [
        '32 = 16 \u00d7 2.',
        '\u221a32 = \u221a(16 \u00d7 2) = \u221a16 \u00d7 \u221a2 = 4\u221a2.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{180}</span>. If the result is <span class="math">a\\sqrt{b}</span>, what is <span class="math">a</span>?',
      answer: "6",
      hints: [
        '180 = 36 \u00d7 5.',
        '\u221a36 = 6.',
        '\u221a180 = 6\u221a5, so a = 6.'
      ],
      explanation: [
        '180 = 36 \u00d7 5.',
        '\u221a180 = \u221a(36 \u00d7 5) = 6\u221a5.',
        'a = 6.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{147}</span>.',
      choices: ["7\u221a3", "3\u221a7", "49\u221a3", "21"],
      answer: "7\u221a3",
      hints: [
        '147 = 49 \u00d7 3.',
        '\u221a49 = 7.',
        '\u221a147 = 7\u221a3.'
      ],
      explanation: [
        '147 = 49 \u00d7 3.',
        '\u221a147 = \u221a(49 \u00d7 3) = 7\u221a3.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">\\sqrt{80}</span>.',
      choices: ["4\u221a5", "8\u221a5", "2\u221a20", "5\u221a4"],
      answer: "4\u221a5",
      hints: [
        'Find the largest perfect square factor of 80.',
        '80 = 16 \u00d7 5.',
        '\u221a80 = \u221a(16 \u00d7 5) = 4\u221a5.'
      ],
      explanation: [
        '80 = 16 \u00d7 5.',
        '\u221a80 = \u221a(16 \u00d7 5) = 4\u221a5.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{288}</span>. If the answer is a\u221ab, what is a?',
      answer: "12",
      hints: [
        'Find the largest perfect square factor of 288.',
        '288 = 144 \u00d7 2.',
        '\u221a288 = \u221a(144 \u00d7 2) = 12\u221a2. So a = 12.'
      ],
      explanation: [
        '288 = 144 \u00d7 2.',
        '\u221a288 = 12\u221a2. The value of a is 12.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{180}</span>.',
      choices: ["6\u221a5", "3\u221a20", "9\u221a5", "5\u221a6"],
      answer: "6\u221a5",
      hints: [
        'Find the largest perfect square factor of 180.',
        '180 = 36 \u00d7 5.',
        '\u221a180 = \u221a(36 \u00d7 5) = 6\u221a5.'
      ],
      explanation: [
        '180 = 36 \u00d7 5.',
        '\u221a180 = \u221a(36 \u00d7 5) = 6\u221a5.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{200}</span>.',
      choices: ["10√2", "5√8", "2√50", "4√5"],
      answer: "10√2",
      hints: [
        "200 = 100 × 2.",
        "√100 = 10.",
        "√200 = 10√2."
      ],
      explanation: [
        "200 = 100 × 2.",
        "√200 = √(100 × 2) = 10√2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">\sqrt{75}</span>. If the answer is <span class="math">a\sqrt{b}</span>, what is <span class="math">a</span>?',
      answer: "5",
      hints: [
        "75 = 25 × 3.",
        "√25 = 5.",
        "√75 = 5√3, so a = 5."
      ],
      explanation: [
        "75 = 25 × 3.",
        "√75 = √(25 × 3) = 5√3.",
        "a = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{147}</span>.',
      choices: ["7√3", "3√7", "49√3", "21√7"],
      answer: "7√3",
      hints: [
        "147 = 49 × 3.",
        "√49 = 7.",
        "√147 = 7√3."
      ],
      explanation: [
        "147 = 49 × 3.",
        "√147 = √(49 × 3) = 7√3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">\sqrt{98}</span>.',
      choices: ["7√2", "2√7", "49√2", "14"],
      answer: "7√2",
      hints: [
        "Find the largest perfect square factor of 98.",
        "98 = 49 × 2, and 49 is a perfect square.",
        "√98 = √49 × √2 = 7√2."
      ],
      explanation: [
        "98 = 49 × 2.",
        "√98 = √(49 × 2) = √49 × √2 = 7√2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{200}</span>. If the result is <span class="math">a\sqrt{b}</span>, what is <span class="math">a</span>?',
      answer: "10",
      hints: [
        "200 = 100 × 2.",
        "√100 = 10.",
        "√200 = 10√2, so a = 10."
      ],
      explanation: [
        "200 = 100 × 2.",
        "√200 = √(100 × 2) = 10√2.",
        "a = 10."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{180}</span>.',
      choices: ["6√5", "5√6", "3√20", "36√5"],
      answer: "6√5",
      hints: [
        "180 = 36 × 5.",
        "√36 = 6.",
        "√180 = 6√5."
      ],
      explanation: [
        "180 = 36 × 5.",
        "√180 = √(36 × 5) = √36 × √5 = 6√5."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Is <span class="math">&radic;49</span> rational or irrational?',
      choices: ["Rational", "Irrational", "Neither", "Both"],
      answer: "Rational",
      hints: [
        "&radic;49 = 7, which is a whole number.",
        "All whole numbers are rational.",
        "Since &radic;49 simplifies to 7, it is rational."
      ],
      explanation: [
        "&radic;49 = 7.",
        "7 is a whole number (and can be written as 7/1), so it is <strong>rational</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which of the following numbers is irrational?',
      choices: ["&radic;13", "&radic;25", "0.75", "3/4"],
      answer: "&radic;13",
      hints: [
        "A number is irrational if it cannot be written as a fraction.",
        "&radic;25 = 5 (rational). 0.75 and 3/4 are rational.",
        "13 is not a perfect square, so &radic;13 is irrational."
      ],
      explanation: [
        "&radic;25 = 5 (rational), 0.75 = 3/4 (rational).",
        "13 is not a perfect square, so <strong>&radic;13</strong> is irrational."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is <span class="math">&radic;80</span> rational or irrational?',
      choices: ["Irrational", "Rational", "Cannot be determined", "Neither"],
      answer: "Irrational",
      hints: [
        "Check if 80 is a perfect square.",
        "8² = 64 and 9² = 81. 80 is not a perfect square.",
        "Since 80 is not a perfect square, &radic;80 is irrational."
      ],
      explanation: [
        "80 is not a perfect square (between 64 and 81).",
        "Therefore &radic;80 is <strong>irrational</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 7: Square Root Properties — √a × √b = √(ab) (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√3 × √12</span>?',
      choices: ["6", "√15", "36", "√36"],
      answer: "6",
      hints: [
        "Use the property: √a × √b = √(ab).",
        "√3 × √12 = √(3 × 12) = √36.",
        "√36 = 6."
      ],
      explanation: [
        "√3 × √12 = √(3 × 12) = √36.",
        "√36 = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√5 × √5</span>?',
      answer: "5",
      hints: [
        "√a × √a = a.",
        "√5 × √5 = 5.",
        "This is the definition of square root."
      ],
      explanation: [
        "√5 × √5 = (√5)² = 5.",
        "Any square root times itself equals the number under the radical."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√8 × √2</span>.',
      choices: ["4", "√10", "2√2", "8"],
      answer: "4",
      hints: [
        "√8 × √2 = √(8 × 2) = √16.",
        "√16 = 4.",
        "The answer is 4."
      ],
      explanation: [
        "√8 × √2 = √(8 × 2) = √16.",
        "√16 = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√7 × √7</span>?',
      answer: "7",
      hints: [
        "√a × √a = a.",
        "√7 × √7 = 7.",
        "A square root squared gives the original number."
      ],
      explanation: [
        "√7 × √7 = (√7)² = 7.",
        "The answer is 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√2 × √18</span>?',
      choices: ["6", "√20", "36", "3√2"],
      answer: "6",
      hints: [
        "√2 × √18 = √(2 × 18) = √36.",
        "√36 = 6.",
        "Use the product property of square roots."
      ],
      explanation: [
        "√2 × √18 = √(2 × 18) = √36.",
        "√36 = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√6 × √6</span>?',
      answer: "6",
      hints: [
        "√a × √a = a.",
        "√6 × √6 = 6.",
        "A square root times itself equals the radicand."
      ],
      explanation: [
        "√6 × √6 = (√6)² = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√5 × √20</span>?',
      choices: ["10", "√25", "5√4", "√100"],
      answer: "10",
      hints: [
        "√5 × √20 = √(5 × 20) = √100.",
        "√100 = 10.",
        "The answer is 10."
      ],
      explanation: [
        "√5 × √20 = √(5 × 20) = √100.",
        "√100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√3 × √27</span>. What is the result?',
      answer: "9",
      hints: [
        "√3 × √27 = √(3 × 27) = √81.",
        "√81 = 9.",
        "The answer is 9."
      ],
      explanation: [
        "√3 × √27 = √(3 × 27) = √81.",
        "√81 = 9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√4 × √9</span>?',
      choices: ["6", "√13", "36", "13"],
      answer: "6",
      hints: [
        "√4 × √9 = √(4 × 9) = √36.",
        "√36 = 6.",
        "Or simply: 2 × 3 = 6."
      ],
      explanation: [
        "√4 × √9 = 2 × 3 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√2 × √32</span>?',
      answer: "8",
      hints: [
        "√2 × √32 = √(2 × 32) = √64.",
        "√64 = 8.",
        "The answer is 8."
      ],
      explanation: [
        "√2 × √32 = √(2 × 32) = √64.",
        "√64 = 8."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√11 × √11</span>?',
      answer: "11",
      hints: [
        "√a × √a = a.",
        "√11 × √11 = 11.",
        "A square root times itself equals the radicand."
      ],
      explanation: [
        "√11 × √11 = (√11)² = 11.",
        "The answer is 11."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√6 × √24</span>?',
      choices: ["12", "√30", "6√4", "√144"],
      answer: "12",
      hints: [
        "√6 × √24 = √(6 × 24) = √144.",
        "√144 = 12.",
        "The answer is 12."
      ],
      explanation: [
        "√6 × √24 = √(6 × 24) = √144.",
        "√144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√13 × √13</span>?',
      answer: "13",
      hints: [
        "√a × √a = a.",
        "√13 × √13 = 13.",
        "A square root times itself equals the radicand."
      ],
      explanation: [
        "√13 × √13 = (√13)² = 13.",
        "The answer is 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√10 × √10</span>?',
      choices: ["10", "√20", "100", "√100"],
      answer: "10",
      hints: [
        "√a × √a = a.",
        "√10 × √10 = 10.",
        "This is the definition of square root."
      ],
      explanation: [
        "√10 × √10 = (√10)² = 10.",
        "The answer is 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√9 × √16</span>?',
      answer: "12",
      hints: [
        "√9 = 3 and √16 = 4.",
        "3 × 4 = ?",
        "3 × 4 = 12."
      ],
      explanation: [
        "√9 × √16 = 3 × 4 = 12.",
        "The answer is 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√7 × √28</span>?',
      choices: ["14", "√35", "7√4", "√196"],
      answer: "14",
      hints: [
        "√7 × √28 = √(7 × 28) = √196.",
        "√196 = 14.",
        "The answer is 14."
      ],
      explanation: [
        "√7 × √28 = √(7 × 28) = √196.",
        "√196 = 14."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√5 × √45</span>?',
      answer: "15",
      hints: [
        "√5 × √45 = √(5 × 45) = √225.",
        "√225 = 15.",
        "The answer is 15."
      ],
      explanation: [
        "√5 × √45 = √(5 × 45) = √225.",
        "√225 = 15."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√25 × √4</span>?',
      choices: ["10", "√29", "20", "√100"],
      answer: "10",
      hints: [
        "√25 = 5 and √4 = 2.",
        "5 × 2 = 10.",
        "Or: √(25 × 4) = √100 = 10."
      ],
      explanation: [
        "√25 × √4 = 5 × 2 = 10.",
        "The answer is 10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√8 × √18</span>?',
      answer: "12",
      hints: [
        "√8 × √18 = √(8 × 18) = √144.",
        "√144 = 12.",
        "The answer is 12."
      ],
      explanation: [
        "√8 × √18 = √(8 × 18) = √144.",
        "√144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√3 × √48</span>?',
      choices: ["12", "√51", "6√2", "√144"],
      answer: "12",
      hints: [
        "√3 × √48 = √(3 × 48) = √144.",
        "√144 = 12.",
        "The answer is 12."
      ],
      explanation: [
        "√3 × √48 = √(3 × 48) = √144.",
        "√144 = 12."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√36 × √9</span>?',
      choices: ["18", "√45", "27", "√324"],
      answer: "18",
      hints: [
        "√36 = 6 and √9 = 3.",
        "6 × 3 = 18.",
        "Or: √(36 × 9) = √324 = 18."
      ],
      explanation: [
        "√36 × √9 = 6 × 3 = 18.",
        "The answer is 18."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√6 × √54</span>?',
      answer: "18",
      hints: [
        "√6 × √54 = √(6 × 54) = √324.",
        "√324 = 18.",
        "The answer is 18."
      ],
      explanation: [
        "√6 × √54 = √(6 × 54) = √324.",
        "√324 = 18."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√4 × √81</span>?',
      choices: ["18", "√85", "36", "√324"],
      answer: "18",
      hints: [
        "√4 = 2 and √81 = 9.",
        "2 × 9 = 18.",
        "Or: √(4 × 81) = √324 = 18."
      ],
      explanation: [
        "√4 × √81 = 2 × 9 = 18.",
        "The answer is 18."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{2} \\times \\sqrt{18}</span>?',
      choices: ["6", "\u221a20", "36", "\u221a36"],
      answer: "6",
      hints: [
        'Use the property: \u221aa \u00d7 \u221ab = \u221a(ab).',
        '\u221a2 \u00d7 \u221a18 = \u221a(2 \u00d7 18) = \u221a36.',
        '\u221a36 = 6.'
      ],
      explanation: [
        '\u221a2 \u00d7 \u221a18 = \u221a(2 \u00d7 18) = \u221a36.',
        '\u221a36 = 6.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\\sqrt{11} \\times \\sqrt{11}</span>?',
      answer: "11",
      hints: [
        '\u221aa \u00d7 \u221aa = a.',
        '\u221a11 \u00d7 \u221a11 = 11.',
        'This is the definition of square root.'
      ],
      explanation: [
        '\u221a11 \u00d7 \u221a11 = (\u221a11)\u00b2 = 11.',
        'Any square root times itself equals the number under the radical.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{6} \\times \\sqrt{24}</span>.',
      choices: ["12", "\u221a30", "6\u221a4", "144"],
      answer: "12",
      hints: [
        '\u221a6 \u00d7 \u221a24 = \u221a(6 \u00d7 24) = \u221a144.',
        '\u221a144 = 12.',
        'The answer is 12.'
      ],
      explanation: [
        '\u221a6 \u00d7 \u221a24 = \u221a(6 \u00d7 24) = \u221a144.',
        '\u221a144 = 12.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{5} \\times \\sqrt{20}</span>?',
      answer: "10",
      hints: [
        'Use the property: \u221aa \u00d7 \u221ab = \u221a(a \u00d7 b).',
        '\u221a5 \u00d7 \u221a20 = \u221a(5 \u00d7 20) = \u221a100.',
        '\u221a100 = 10.'
      ],
      explanation: [
        '\u221a5 \u00d7 \u221a20 = \u221a(5 \u00d7 20) = \u221a100.',
        '\u221a100 = 10.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\\sqrt{8} \\times \\sqrt{18}</span>?',
      choices: ["12", "10", "14", "16"],
      answer: "12",
      hints: [
        '\u221a8 \u00d7 \u221a18 = \u221a(8 \u00d7 18).',
        '8 \u00d7 18 = 144.',
        '\u221a144 = 12.'
      ],
      explanation: [
        '\u221a8 \u00d7 \u221a18 = \u221a(8 \u00d7 18) = \u221a144.',
        '\u221a144 = 12.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{7} \\times \\sqrt{28}</span>.',
      choices: ["14", "7\u221a4", "28", "7\u221a2"],
      answer: "14",
      hints: [
        '\u221a7 \u00d7 \u221a28 = \u221a(7 \u00d7 28).',
        '7 \u00d7 28 = 196.',
        '\u221a196 = 14.'
      ],
      explanation: [
        '\u221a7 \u00d7 \u221a28 = \u221a(7 \u00d7 28) = \u221a196.',
        '\u221a196 = 14.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\sqrt{5} \times \sqrt{20}</span>?',
      choices: ["10", "25", "√100", "5√4"],
      answer: "10",
      hints: [
        "√5 × √20 = √(5 × 20) = √100.",
        "√100 = 10.",
        "The answer is 10."
      ],
      explanation: [
        "√5 × √20 = √(5 × 20) = √100.",
        "√100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\sqrt{8} \times \sqrt{18}</span>?',
      answer: "12",
      hints: [
        "√8 × √18 = √(8 × 18) = √144.",
        "√144 = 12.",
        "The answer is 12."
      ],
      explanation: [
        "√8 × √18 = √(8 × 18) = √144.",
        "√144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\sqrt{12} \times \sqrt{3}</span>?',
      choices: ["6", "9", "√36", "3√4"],
      answer: "6",
      hints: [
        "√12 × √3 = √(12 × 3) = √36.",
        "√36 = 6.",
        "The answer is 6."
      ],
      explanation: [
        "√12 × √3 = √(12 × 3) = √36.",
        "√36 = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\sqrt{6} \times \sqrt{6}</span>?',
      answer: "6",
      hints: [
        "√a × √a = a.",
        "√6 × √6 = 6.",
        "This is the definition of square root."
      ],
      explanation: [
        "By definition, √6 × √6 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\sqrt{8} \times \sqrt{2}</span>?',
      choices: ["4", "√16", "2√4", "√10"],
      answer: "4",
      hints: [
        "Use the property: √a × √b = √(ab).",
        "√8 × √2 = √(8 × 2) = √16.",
        "√16 = 4."
      ],
      explanation: [
        "√8 × √2 = √(8 × 2) = √16.",
        "√16 = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\sqrt{7} \times \sqrt{28}</span>?',
      answer: "14",
      hints: [
        "Use the property: √a × √b = √(ab).",
        "√7 × √28 = √(7 × 28) = √196.",
        "√196 = 14."
      ],
      explanation: [
        "√7 × √28 = √(7 × 28) = √196.",
        "√196 = 14."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Order from least to greatest: <span class="math">&radic;10</span>, 3.2, <span class="math">&pi;</span>.',
      choices: ["&radic;10, &pi;, 3.2", "3.2, &radic;10, &pi;", "&pi;, &radic;10, 3.2", "&radic;10, 3.2, &pi;"],
      answer: "&pi;, &radic;10, 3.2",
      hints: [
        "Estimate each: &radic;10 ≈ 3.162, &pi; ≈ 3.14159.",
        "Compare: &pi; ≈ 3.142, &radic;10 ≈ 3.162, 3.2 = 3.200.",
        "&pi; ≈ 3.142 < &radic;10 ≈ 3.162 < 3.2."
      ],
      explanation: [
        "&radic;10 ≈ 3.162, &pi; ≈ 3.142, 3.2 = 3.200.",
        "Least to greatest: <strong>&pi;, &radic;10, 3.2</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">&radic;20</span> or 4.5?',
      choices: ["4.5", "&radic;20", "They are equal", "Cannot be determined"],
      answer: "4.5",
      hints: [
        "Estimate &radic;20: 4² = 16, 5² = 25.",
        "&radic;20 ≈ 4.47.",
        "Compare: 4.47 < 4.5."
      ],
      explanation: [
        "&radic;20 ≈ 4.472.",
        "Since 4.472 < 4.5, <strong>4.5</strong> is greater."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Order from least to greatest: <span class="math">2.8, &radic;8, &radic;9</span>.',
      choices: ["2.8, &radic;8, &radic;9", "&radic;8, 2.8, &radic;9", "&radic;9, &radic;8, 2.8", "2.8, &radic;9, &radic;8"],
      answer: "2.8, &radic;8, &radic;9",
      hints: [
        "Estimate: &radic;8 ≈ 2.828, &radic;9 = 3.",
        "Compare: 2.8, 2.828, 3.",
        "Order: 2.8 < &radic;8 < &radic;9."
      ],
      explanation: [
        "&radic;8 ≈ 2.828, &radic;9 = 3.",
        "Least to greatest: <strong>2.8, &radic;8, &radic;9</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 8: Advanced Simplification (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√75</span>.',
      choices: ["5√3", "3√5", "25√3", "15"],
      answer: "5√3",
      hints: [
        "75 = 25 × 3.",
        "√25 = 5.",
        "√75 = 5√3."
      ],
      explanation: [
        "75 = 25 × 3.",
        "√75 = √(25 × 3) = 5√3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">√48</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "4",
      hints: [
        "48 = 16 × 3.",
        "√16 = 4.",
        "√48 = 4√3, so a = 4."
      ],
      explanation: [
        "48 = 16 × 3.",
        "√48 = √(16 × 3) = 4√3.",
        "a = 4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√200</span>.',
      choices: ["10√2", "5√8", "2√50", "20√5"],
      answer: "10√2",
      hints: [
        "200 = 100 × 2.",
        "√100 = 10.",
        "√200 = 10√2."
      ],
      explanation: [
        "200 = 100 × 2.",
        "√200 = √(100 × 2) = 10√2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√128</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "8",
      hints: [
        "128 = 64 × 2.",
        "√64 = 8.",
        "√128 = 8√2, so a = 8."
      ],
      explanation: [
        "128 = 64 × 2.",
        "√128 = √(64 × 2) = 8√2.",
        "a = 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√150</span>.',
      choices: ["5√6", "6√5", "10√15", "15√10"],
      answer: "5√6",
      hints: [
        "150 = 25 × 6.",
        "√25 = 5.",
        "√150 = 5√6."
      ],
      explanation: [
        "150 = 25 × 6.",
        "√150 = √(25 × 6) = 5√6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√242</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "11",
      hints: [
        "242 = 121 × 2.",
        "√121 = 11.",
        "√242 = 11√2, so a = 11."
      ],
      explanation: [
        "242 = 121 × 2.",
        "√242 = √(121 × 2) = 11√2.",
        "a = 11."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√80</span>.',
      choices: ["4√5", "5√4", "8√5", "2√20"],
      answer: "4√5",
      hints: [
        "80 = 16 × 5.",
        "√16 = 4.",
        "√80 = 4√5."
      ],
      explanation: [
        "80 = 16 × 5.",
        "√80 = √(16 × 5) = 4√5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√180</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "6",
      hints: [
        "180 = 36 × 5.",
        "√36 = 6.",
        "√180 = 6√5, so a = 6."
      ],
      explanation: [
        "180 = 36 × 5.",
        "√180 = √(36 × 5) = 6√5.",
        "a = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√45</span>.',
      choices: ["3√5", "5√3", "9√5", "15"],
      answer: "3√5",
      hints: [
        "45 = 9 × 5.",
        "√9 = 3.",
        "√45 = 3√5."
      ],
      explanation: [
        "45 = 9 × 5.",
        "√45 = √(9 × 5) = 3√5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√288</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "12",
      hints: [
        "288 = 144 × 2.",
        "√144 = 12.",
        "√288 = 12√2, so a = 12."
      ],
      explanation: [
        "288 = 144 × 2.",
        "√288 = √(144 × 2) = 12√2.",
        "a = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√252</span>.',
      choices: ["6√7", "7√6", "4√7", "12√7"],
      answer: "6√7",
      hints: [
        "252 = 36 × 7.",
        "√36 = 6.",
        "√252 = 6√7."
      ],
      explanation: [
        "252 = 36 × 7.",
        "√252 = √(36 × 7) = 6√7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">√54</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "3",
      hints: [
        "54 = 9 × 6.",
        "√9 = 3.",
        "√54 = 3√6, so a = 3."
      ],
      explanation: [
        "54 = 9 × 6.",
        "√54 = √(9 × 6) = 3√6.",
        "a = 3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√162</span>.',
      choices: ["9√2", "2√81", "6√3", "3√18"],
      answer: "9√2",
      hints: [
        "162 = 81 × 2.",
        "√81 = 9.",
        "√162 = 9√2."
      ],
      explanation: [
        "162 = 81 × 2.",
        "√162 = √(81 × 2) = 9√2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√245</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "7",
      hints: [
        "245 = 49 × 5.",
        "√49 = 7.",
        "√245 = 7√5, so a = 7."
      ],
      explanation: [
        "245 = 49 × 5.",
        "√245 = √(49 × 5) = 7√5.",
        "a = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√52</span>.',
      choices: ["2√13", "4√13", "13√2", "26"],
      answer: "2√13",
      hints: [
        "52 = 4 × 13.",
        "√4 = 2.",
        "√52 = 2√13."
      ],
      explanation: [
        "52 = 4 × 13.",
        "√52 = √(4 × 13) = 2√13."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√192</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "8",
      hints: [
        "192 = 64 × 3.",
        "√64 = 8.",
        "√192 = 8√3, so a = 8."
      ],
      explanation: [
        "192 = 64 × 3.",
        "√192 = √(64 × 3) = 8√3.",
        "a = 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√300</span>.',
      choices: ["10√3", "3√10", "5√12", "6√50"],
      answer: "10√3",
      hints: [
        "300 = 100 × 3.",
        "√100 = 10.",
        "√300 = 10√3."
      ],
      explanation: [
        "300 = 100 × 3.",
        "√300 = √(100 × 3) = 10√3."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√63</span>.',
      choices: ["3√7", "7√3", "9√7", "21"],
      answer: "3√7",
      hints: [
        "63 = 9 × 7.",
        "√9 = 3.",
        "√63 = 3√7."
      ],
      explanation: [
        "63 = 9 × 7.",
        "√63 = √(9 × 7) = 3√7."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√320</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "8",
      hints: [
        "320 = 64 × 5.",
        "√64 = 8.",
        "√320 = 8√5, so a = 8."
      ],
      explanation: [
        "320 = 64 × 5.",
        "√320 = √(64 × 5) = 8√5.",
        "a = 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√338</span>.',
      choices: ["13√2", "2√13", "169√2", "26"],
      answer: "13√2",
      hints: [
        "338 = 169 × 2.",
        "√169 = 13.",
        "√338 = 13√2."
      ],
      explanation: [
        "338 = 169 × 2.",
        "√338 = √(169 × 2) = 13√2."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">√28</span>.',
      choices: ["2√7", "4√7", "7√2", "14"],
      answer: "2√7",
      hints: [
        "28 = 4 × 7.",
        "√4 = 2.",
        "√28 = 2√7."
      ],
      explanation: [
        "28 = 4 × 7.",
        "√28 = √(4 × 7) = 2√7."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">√363</span>. If the result is <span class="math">a√b</span>, what is <span class="math">a</span>?',
      answer: "11",
      hints: [
        "363 = 121 × 3.",
        "√121 = 11.",
        "√363 = 11√3, so a = 11."
      ],
      explanation: [
        "363 = 121 × 3.",
        "√363 = √(121 × 3) = 11√3.",
        "a = 11."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√275</span>.',
      choices: ["5√11", "11√5", "25√11", "55"],
      answer: "5√11",
      hints: [
        "275 = 25 × 11.",
        "√25 = 5.",
        "√275 = 5√11."
      ],
      explanation: [
        "275 = 25 × 11.",
        "√275 = √(25 × 11) = 5√11."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">\\sqrt{44}</span>.',
      choices: ["2\u221a11", "4\u221a11", "11\u221a2", "22"],
      answer: "2\u221a11",
      hints: [
        '44 = 4 \u00d7 11.',
        '\u221a4 = 2.',
        '\u221a44 = 2\u221a11.'
      ],
      explanation: [
        '44 = 4 \u00d7 11.',
        '\u221a44 = \u221a(4 \u00d7 11) = 2\u221a11.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{507}</span>. If the result is <span class="math">a\\sqrt{b}</span>, what is <span class="math">a</span>?',
      answer: "13",
      hints: [
        '507 = 169 \u00d7 3.',
        '\u221a169 = 13.',
        '\u221a507 = 13\u221a3, so a = 13.'
      ],
      explanation: [
        '507 = 169 \u00d7 3.',
        '\u221a507 = \u221a(169 \u00d7 3) = 13\u221a3.',
        'a = 13.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{245}</span>.',
      choices: ["7\u221a5", "5\u221a7", "49\u221a5", "35"],
      answer: "7\u221a5",
      hints: [
        '245 = 49 \u00d7 5.',
        '\u221a49 = 7.',
        '\u221a245 = 7\u221a5.'
      ],
      explanation: [
        '245 = 49 \u00d7 5.',
        '\u221a245 = \u221a(49 \u00d7 5) = 7\u221a5.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">\\sqrt{128}</span>.',
      choices: ["8\u221a2", "4\u221a8", "16\u221a2", "2\u221a32"],
      answer: "8\u221a2",
      hints: [
        'Find the largest perfect square factor of 128.',
        '128 = 64 \u00d7 2.',
        '\u221a128 = \u221a(64 \u00d7 2) = 8\u221a2.'
      ],
      explanation: [
        '128 = 64 \u00d7 2.',
        '\u221a128 = \u221a(64 \u00d7 2) = 8\u221a2.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{500}</span>. If the answer is a\u221ab, what is a?',
      answer: "10",
      hints: [
        'Find the largest perfect square factor of 500.',
        '500 = 100 \u00d7 5.',
        '\u221a500 = \u221a(100 \u00d7 5) = 10\u221a5. So a = 10.'
      ],
      explanation: [
        '500 = 100 \u00d7 5.',
        '\u221a500 = 10\u221a5. The value of a is 10.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\\sqrt{363}</span>.',
      choices: ["11\u221a3", "3\u221a11", "33\u221a3", "3\u221a33"],
      answer: "11\u221a3",
      hints: [
        'Find the largest perfect square factor of 363.',
        '363 = 121 \u00d7 3.',
        '\u221a363 = \u221a(121 \u00d7 3) = 11\u221a3.'
      ],
      explanation: [
        '363 = 121 \u00d7 3.',
        '\u221a363 = \u221a(121 \u00d7 3) = 11\u221a3.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{245}</span>.',
      choices: ["7√5", "5√7", "49√5", "35√7"],
      answer: "7√5",
      hints: [
        "245 = 49 × 5.",
        "√49 = 7.",
        "√245 = 7√5."
      ],
      explanation: [
        "245 = 49 × 5.",
        "√245 = √(49 × 5) = 7√5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{338}</span>. If the answer is <span class="math">a\sqrt{b}</span>, what is <span class="math">a</span>?',
      answer: "13",
      hints: [
        "338 = 169 × 2.",
        "√169 = 13.",
        "√338 = 13√2, so a = 13."
      ],
      explanation: [
        "338 = 169 × 2.",
        "√338 = √(169 × 2) = 13√2.",
        "a = 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{432}</span>.',
      choices: ["12√3", "6√12", "4√27", "3√48"],
      answer: "12√3",
      hints: [
        "432 = 144 × 3.",
        "√144 = 12.",
        "√432 = 12√3."
      ],
      explanation: [
        "432 = 144 × 3.",
        "√432 = √(144 × 3) = 12√3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">\sqrt{128}</span>.',
      choices: ["8√2", "4√8", "2√32", "16√2"],
      answer: "8√2",
      hints: [
        "128 = 64 × 2.",
        "√64 = 8.",
        "√128 = 8√2."
      ],
      explanation: [
        "128 = 64 × 2.",
        "√128 = √(64 × 2) = 8√2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{245}</span>. If the result is <span class="math">a\sqrt{b}</span>, what is <span class="math">b</span>?',
      answer: "5",
      hints: [
        "245 = 49 × 5.",
        "√49 = 7.",
        "√245 = 7√5, so b = 5."
      ],
      explanation: [
        "245 = 49 × 5.",
        "√245 = √(49 × 5) = 7√5.",
        "b = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{300}</span>.',
      choices: ["10√3", "5√12", "3√100", "6√50"],
      answer: "10√3",
      hints: [
        "300 = 100 × 3.",
        "√100 = 10.",
        "√300 = 10√3."
      ],
      explanation: [
        "300 = 100 × 3.",
        "√300 = √(100 × 3) = 10√3."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which whole number is closest to <span class="math">&radic;20</span>?',
      choices: ["4", "5", "3", "6"],
      answer: "4",
      hints: [
        "4² = 16 and 5² = 25.",
        "&radic;20 is between 4 and 5.",
        "20 is closer to 16 than to 25, so &radic;20 is closer to 4."
      ],
      explanation: [
        "&radic;20 ≈ 4.47.",
        "4.47 is closer to <strong>4</strong> than to 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Which whole number is closest to <span class="math">&radic;67</span>?',
      answer: "8",
      hints: [
        "8² = 64 and 9² = 81.",
        "&radic;67 is between 8 and 9.",
        "67 is closer to 64 than to 81."
      ],
      explanation: [
        "&radic;67 ≈ 8.19.",
        "8.19 is closest to <strong>8</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'On a number line, <span class="math">&radic;38</span> is between which two consecutive whole numbers?',
      choices: ["6 and 7", "5 and 6", "7 and 8", "4 and 5"],
      answer: "6 and 7",
      hints: [
        "6² = 36 and 7² = 49.",
        "Since 36 < 38 < 49, &radic;38 is between 6 and 7.",
        "&radic;38 ≈ 6.16."
      ],
      explanation: [
        "6² = 36, 7² = 49. Since 36 < 38 < 49,",
        "&radic;38 is between <strong>6 and 7</strong>."
      ]
    }
  ],

  // ----------------------------------------------------------
  // Topic 9: Roots of Fractions & Products (difficulty 2-3)
  // ----------------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√(9/16)</span>?',
      choices: ["3/4", "9/16", "4/3", "3/16"],
      answer: "3/4",
      hints: [
        "√(a/b) = √a / √b.",
        "√9 = 3 and √16 = 4.",
        "√(9/16) = 3/4."
      ],
      explanation: [
        "√(9/16) = √9 / √16 = 3/4.",
        "The answer is 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√(25/49)</span>? Enter the numerator of the simplified fraction.',
      answer: "5",
      hints: [
        "√(25/49) = √25 / √49.",
        "√25 = 5 and √49 = 7.",
        "The numerator is 5."
      ],
      explanation: [
        "√(25/49) = √25 / √49 = 5/7.",
        "The numerator is 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(4/25)</span>.',
      choices: ["2/5", "4/5", "1/5", "4/25"],
      answer: "2/5",
      hints: [
        "√(4/25) = √4 / √25.",
        "√4 = 2 and √25 = 5.",
        "The answer is 2/5."
      ],
      explanation: [
        "√(4/25) = √4 / √25 = 2/5.",
        "The answer is 2/5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√(36 × 4)</span>?',
      answer: "12",
      hints: [
        "√(36 × 4) = √36 × √4.",
        "√36 = 6 and √4 = 2.",
        "6 × 2 = 12."
      ],
      explanation: [
        "√(36 × 4) = √36 × √4 = 6 × 2 = 12.",
        "The answer is 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(1/64)</span>.',
      choices: ["1/8", "1/32", "8", "1/4"],
      answer: "1/8",
      hints: [
        "√(1/64) = √1 / √64.",
        "√1 = 1 and √64 = 8.",
        "The answer is 1/8."
      ],
      explanation: [
        "√(1/64) = √1 / √64 = 1/8.",
        "The answer is 1/8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√(49/81)</span>? Enter the numerator of the simplified fraction.',
      answer: "7",
      hints: [
        "√(49/81) = √49 / √81.",
        "√49 = 7 and √81 = 9.",
        "The numerator is 7."
      ],
      explanation: [
        "√(49/81) = √49 / √81 = 7/9.",
        "The numerator is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√(9 × 25)</span>?',
      choices: ["15", "45", "75", "225"],
      answer: "15",
      hints: [
        "√(9 × 25) = √9 × √25.",
        "√9 = 3 and √25 = 5.",
        "3 × 5 = 15."
      ],
      explanation: [
        "√(9 × 25) = √9 × √25 = 3 × 5 = 15.",
        "The answer is 15."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(16/49)</span>.',
      choices: ["4/7", "16/49", "2/7", "8/7"],
      answer: "4/7",
      hints: [
        "√(16/49) = √16 / √49.",
        "√16 = 4 and √49 = 7.",
        "The answer is 4/7."
      ],
      explanation: [
        "√(16/49) = √16 / √49 = 4/7.",
        "The answer is 4/7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√(36/121)</span>? Enter the numerator of the simplified fraction.',
      answer: "6",
      hints: [
        "√(36/121) = √36 / √121.",
        "√36 = 6 and √121 = 11.",
        "The numerator is 6."
      ],
      explanation: [
        "√(36/121) = √36 / √121 = 6/11.",
        "The numerator is 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√(16 × 9)</span>?',
      choices: ["12", "25", "144", "√25"],
      answer: "12",
      hints: [
        "√(16 × 9) = √16 × √9.",
        "√16 = 4 and √9 = 3.",
        "4 × 3 = 12."
      ],
      explanation: [
        "√(16 × 9) = √16 × √9 = 4 × 3 = 12.",
        "The answer is 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(81/100)</span>.',
      choices: ["9/10", "81/100", "3/10", "9/100"],
      answer: "9/10",
      hints: [
        "√(81/100) = √81 / √100.",
        "√81 = 9 and √100 = 10.",
        "The answer is 9/10."
      ],
      explanation: [
        "√(81/100) = √81 / √100 = 9/10.",
        "The answer is 9/10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√(4/9)</span>? Enter the numerator of the simplified fraction.',
      answer: "2",
      hints: [
        "√(4/9) = √4 / √9.",
        "√4 = 2 and √9 = 3.",
        "The numerator is 2."
      ],
      explanation: [
        "√(4/9) = √4 / √9 = 2/3.",
        "The numerator is 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√(25 × 16)</span>?',
      choices: ["20", "41", "400", "√41"],
      answer: "20",
      hints: [
        "√(25 × 16) = √25 × √16.",
        "√25 = 5 and √16 = 4.",
        "5 × 4 = 20."
      ],
      explanation: [
        "√(25 × 16) = √25 × √16 = 5 × 4 = 20.",
        "The answer is 20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(100/121)</span>.',
      choices: ["10/11", "100/121", "5/11", "10/121"],
      answer: "10/11",
      hints: [
        "√(100/121) = √100 / √121.",
        "√100 = 10 and √121 = 11.",
        "The answer is 10/11."
      ],
      explanation: [
        "√(100/121) = √100 / √121 = 10/11.",
        "The answer is 10/11."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">√(64/25)</span>? Enter the numerator of the simplified fraction.',
      answer: "8",
      hints: [
        "√(64/25) = √64 / √25.",
        "√64 = 8 and √25 = 5.",
        "The numerator is 8."
      ],
      explanation: [
        "√(64/25) = √64 / √25 = 8/5.",
        "The numerator is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">√(4 × 49)</span>?',
      choices: ["14", "53", "196", "√53"],
      answer: "14",
      hints: [
        "√(4 × 49) = √4 × √49.",
        "√4 = 2 and √49 = 7.",
        "2 × 7 = 14."
      ],
      explanation: [
        "√(4 × 49) = √4 × √49 = 2 × 7 = 14.",
        "The answer is 14."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(49/144)</span>.',
      choices: ["7/12", "49/144", "7/144", "12/7"],
      answer: "7/12",
      hints: [
        "√(49/144) = √49 / √144.",
        "√49 = 7 and √144 = 12.",
        "The answer is 7/12."
      ],
      explanation: [
        "√(49/144) = √49 / √144 = 7/12.",
        "The answer is 7/12."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√(16/81)</span>?',
      choices: ["4/9", "16/81", "2/9", "8/9"],
      answer: "4/9",
      hints: [
        "√(a/b) = √a / √b.",
        "√16 = 4 and √81 = 9.",
        "√(16/81) = 4/9."
      ],
      explanation: [
        "√(16/81) = √16 / √81 = 4/9.",
        "The answer is 4/9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√(9 × 64)</span>?',
      answer: "24",
      hints: [
        "√(9 × 64) = √9 × √64.",
        "√9 = 3 and √64 = 8.",
        "3 × 8 = 24."
      ],
      explanation: [
        "√(9 × 64) = √9 × √64 = 3 × 8 = 24.",
        "The answer is 24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(25/169)</span>.',
      choices: ["5/13", "25/169", "5/169", "13/5"],
      answer: "5/13",
      hints: [
        "√(25/169) = √25 / √169.",
        "√25 = 5 and √169 = 13.",
        "The answer is 5/13."
      ],
      explanation: [
        "√(25/169) = √25 / √169 = 5/13.",
        "The answer is 5/13."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">√(36/49)</span>?',
      choices: ["6/7", "36/49", "7/6", "3/7"],
      answer: "6/7",
      hints: [
        "√(a/b) = √a / √b.",
        "√36 = 6 and √49 = 7.",
        "√(36/49) = 6/7."
      ],
      explanation: [
        "√(36/49) = √36 / √49 = 6/7.",
        "The answer is 6/7."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">√(49 × 16)</span>?',
      answer: "28",
      hints: [
        "√(49 × 16) = √49 × √16.",
        "√49 = 7 and √16 = 4.",
        "7 × 4 = 28."
      ],
      explanation: [
        "√(49 × 16) = √49 × √16 = 7 × 4 = 28.",
        "The answer is 28."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">√(64/225)</span>.',
      choices: ["8/15", "64/225", "4/15", "8/225"],
      answer: "8/15",
      hints: [
        "√(64/225) = √64 / √225.",
        "√64 = 8 and √225 = 15.",
        "The answer is 8/15."
      ],
      explanation: [
        "√(64/225) = √64 / √225 = 8/15.",
        "The answer is 8/15."
      ]
    }
  ,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{36/121}</span>?',
      choices: ["6/11", "36/121", "11/6", "6/121"],
      answer: "6/11",
      hints: [
        '\u221a(a/b) = \u221aa / \u221ab.',
        '\u221a36 = 6 and \u221a121 = 11.',
        '\u221a(36/121) = 6/11.'
      ],
      explanation: [
        '\u221a(36/121) = \u221a36 / \u221a121 = 6/11.',
        'The answer is 6/11.'
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\\sqrt{81/196}</span>? Enter the numerator of the simplified fraction.',
      answer: "9",
      hints: [
        '\u221a(a/b) = \u221aa / \u221ab.',
        '\u221a81 = 9 and \u221a196 = 14.',
        '\u221a(81/196) = 9/14. The numerator is 9.'
      ],
      explanation: [
        '\u221a(81/196) = \u221a81 / \u221a196 = 9/14.',
        'The numerator is 9.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\\sqrt{100/289}</span>?',
      choices: ["10/17", "100/289", "17/10", "10/289"],
      answer: "10/17",
      hints: [
        '\u221a(a/b) = \u221aa / \u221ab.',
        '\u221a100 = 10 and \u221a289 = 17.',
        '\u221a(100/289) = 10/17.'
      ],
      explanation: [
        '\u221a(100/289) = \u221a100 / \u221a289 = 10/17.',
        'The answer is 10/17.'
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\\sqrt{\\frac{49}{144}}</span>? Enter the numerator of the simplified fraction.',
      answer: "7",
      hints: [
        '\u221a(a/b) = \u221aa / \u221ab.',
        '\u221a49 = 7 and \u221a144 = 12.',
        '\u221a(49/144) = 7/12. The numerator is 7.'
      ],
      explanation: [
        '\u221a(49/144) = \u221a49 / \u221a144 = 7/12.',
        'The numerator is 7.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\\sqrt{\\frac{225}{400}}</span>?',
      choices: ["3/4", "15/20", "5/4", "15/400"],
      answer: "3/4",
      hints: [
        '\u221a(a/b) = \u221aa / \u221ab.',
        '\u221a225 = 15 and \u221a400 = 20.',
        '15/20 = 3/4 in simplest form.'
      ],
      explanation: [
        '\u221a(225/400) = \u221a225 / \u221a400 = 15/20.',
        '15/20 simplifies to 3/4.'
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\\sqrt{9 \\times 64}</span>?',
      choices: ["24", "18", "36", "72"],
      answer: "24",
      hints: [
        '\u221a(a \u00d7 b) = \u221aa \u00d7 \u221ab.',
        '\u221a9 = 3 and \u221a64 = 8.',
        '3 \u00d7 8 = 24.'
      ],
      explanation: [
        '\u221a(9 \u00d7 64) = \u221a9 \u00d7 \u221a64 = 3 \u00d7 8.',
        '3 \u00d7 8 = 24.'
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\sqrt{\frac{4}{49}}</span>?',
      choices: ["2/7", "4/49", "7/2", "4/7"],
      answer: "2/7",
      hints: [
        "√(a/b) = √a / √b.",
        "√4 = 2 and √49 = 7.",
        "√(4/49) = 2/7."
      ],
      explanation: [
        "√(4/49) = √4 / √49 = 2/7.",
        "The answer is 2/7."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\sqrt{25 \times 36}</span>?',
      answer: "30",
      hints: [
        "√(25 × 36) = √25 × √36.",
        "√25 = 5 and √36 = 6.",
        "5 × 6 = 30."
      ],
      explanation: [
        "√(25 × 36) = √25 × √36 = 5 × 6.",
        "5 × 6 = 30."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Simplify <span class="math">\sqrt{\frac{121}{196}}</span>.',
      choices: ["11/14", "121/196", "14/11", "11/196"],
      answer: "11/14",
      hints: [
        "√(121/196) = √121 / √196.",
        "√121 = 11 and √196 = 14.",
        "The answer is 11/14."
      ],
      explanation: [
        "√(121/196) = √121 / √196 = 11/14.",
        "The answer is 11/14."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\sqrt{\frac{49}{64}}</span>?',
      choices: ["7/8", "49/64", "8/7", "7/64"],
      answer: "7/8",
      hints: [
        "√(a/b) = √a / √b.",
        "√49 = 7 and √64 = 8.",
        "√(49/64) = 7/8."
      ],
      explanation: [
        "√(49/64) = √49 / √64 = 7/8.",
        "The answer is 7/8."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\sqrt{\frac{144}{169}}</span>? Enter the denominator of the simplified fraction.',
      answer: "13",
      hints: [
        "√(144/169) = √144 / √169.",
        "√144 = 12 and √169 = 13.",
        "The denominator is 13."
      ],
      explanation: [
        "√(144/169) = √144 / √169 = 12/13.",
        "The denominator is 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\sqrt{\frac{81}{225}}</span> in simplest form?',
      choices: ["3/5", "9/15", "9/25", "81/225"],
      answer: "3/5",
      hints: [
        "√(81/225) = √81 / √225.",
        "√81 = 9 and √225 = 15.",
        "Simplify 9/15: divide by 3 → 3/5."
      ],
      explanation: [
        "√(81/225) = √81 / √225 = 9/15.",
        "Simplify: 9/15 = 3/5.",
        "The answer is 3/5."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A square garden has an area of 196 ft². What is the side length of the garden in feet?',
      answer: "14",
      hints: [
        "For a square, area = side × side.",
        "side = &radic;area = &radic;196.",
        "14 × 14 = 196, so the side is 14 ft."
      ],
      explanation: [
        "Side = &radic;196 = <strong>14 feet</strong>.",
        "The garden is 14 feet on each side."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A square tile has an area of 81 cm². What is the perimeter of the tile?',
      choices: ["36 cm", "18 cm", "81 cm", "27 cm"],
      answer: "36 cm",
      hints: [
        "First find the side: side = &radic;81 = 9 cm.",
        "Perimeter of a square = 4 × side.",
        "4 × 9 = 36."
      ],
      explanation: [
        "Side = &radic;81 = 9 cm.",
        "Perimeter = 4 × 9 = <strong>36 cm</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square painting has an area of 256 in². What is the length of one side in inches?',
      answer: "16",
      hints: [
        "Side = &radic;area.",
        "&radic;256 = ?",
        "16 × 16 = 256."
      ],
      explanation: [
        "Side = &radic;256 = <strong>16 inches</strong>.",
        "Each side of the painting is 16 inches."
      ]
    }
  ]
];
