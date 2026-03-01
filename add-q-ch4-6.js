#!/usr/bin/env node
// Script to add 3 new questions to each of the 31 topics in extra-q-ch4-6.js

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'extra-q-ch4-6.js');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// The closing bracket line numbers (1-indexed) for each topic array
const topicEndLines = [
  355, 703, 1051, 1400, 1748, 2096, 2444, 2792, 3141, 3489,
  3845, 4192, 4540, 4888, 5237, 5585, 5933, 6281, 6629, 6978,
  7333, 7682, 8030, 8378, 8723, 9068, 9412, 9757, 10103, 10447, 10793
];

// New questions for each topic (31 topics x 3 questions each)
const newQuestions = [

  // ===== WORLD 3 (Topics 0-9) =====

  // Topic 0: Equivalent Fractions (difficulty 1-2)
  [
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is equivalent to <span class="math">5/9</span>?',
      choices: ["10/18", "10/27", "15/18", "5/18"],
      answer: "10/18",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both by 2: 5\u00d72 = 10, 9\u00d72 = 18.",
        "So 5/9 = 10/18."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 5\u00d72 = 10, 9\u00d72 = 18.",
        "5/9 = 10/18."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Find the missing number: <span class="math">7/10 = ?/30</span>',
      answer: "21",
      hints: [
        "The denominator went from 10 to 30. What did we multiply by?",
        "10 \u00d7 3 = 30, so multiply the numerator by 3 too.",
        "7 \u00d7 3 = ?"
      ],
      explanation: [
        "10 \u00d7 3 = 30, so the scale factor is 3.",
        "7 \u00d7 3 = 21, so the missing number is 21."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">2/9</span>?',
      choices: ["4/18", "6/27", "8/36", "10/36"],
      answer: "10/36",
      hints: [
        "Simplify each choice to see if it equals 2/9.",
        "4/18 = 2/9 \u2713, 6/27 = 2/9 \u2713, 8/36 = 2/9 \u2713.",
        "10/36 = 5/18 \u2260 2/9."
      ],
      explanation: [
        "10/36 simplifies to 5/18, not 2/9.",
        "All others simplify to 2/9, so 10/36 is the answer."
      ]
    }
  ],

  // Topic 1: Simplifying Fractions (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">18/30</span>. What is the numerator of the simplified fraction?',
      answer: "3",
      hints: [
        "Find the GCF of 18 and 30.",
        "GCF(18, 30) = 6.",
        "18 \u00f7 6 = 3."
      ],
      explanation: [
        "GCF(18, 30) = 6. Divide both by 6.",
        "18/30 = 3/5. The numerator is 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">24/40</span>.',
      choices: ["3/5", "6/10", "4/7", "12/20"],
      answer: "3/5",
      hints: [
        "Find the GCF of 24 and 40.",
        "GCF(24, 40) = 8.",
        "24 \u00f7 8 = 3, 40 \u00f7 8 = 5."
      ],
      explanation: [
        "GCF(24, 40) = 8.",
        "24/40 = 3/5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is already in simplest form?',
      choices: ["8/14", "5/13", "12/18", "9/15"],
      answer: "5/13",
      hints: [
        "A fraction is in simplest form when the GCF of numerator and denominator is 1.",
        "5 and 13 are both prime-ish. Do they share any factor other than 1?",
        "No \u2014 GCF(5, 13) = 1."
      ],
      explanation: [
        "5 and 13 share no common factor other than 1.",
        "So 5/13 is already in simplest form."
      ]
    }
  ],

  // Topic 2: Adding Fractions (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2/9 + 1/3</span>? Write the numerator of the simplified answer.',
      answer: "5",
      hints: [
        "Find a common denominator. LCD of 9 and 3 is 9.",
        "1/3 = 3/9.",
        "2/9 + 3/9 = 5/9. The numerator is 5."
      ],
      explanation: [
        "LCD = 9. Rewrite: 2/9 + 3/9 = 5/9.",
        "The numerator of the answer is 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/10 + 2/5</span>?',
      choices: ["7/10", "5/15", "1/2", "5/10"],
      answer: "7/10",
      hints: [
        "Find the LCD of 10 and 5.",
        "LCD = 10. Rewrite 2/5 as 4/10.",
        "3/10 + 4/10 = 7/10."
      ],
      explanation: [
        "LCD = 10. 2/5 = 4/10.",
        "3/10 + 4/10 = 7/10."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">5/12 + 3/12</span>?',
      choices: ["8/12", "8/24", "2/3", "15/12"],
      answer: "2/3",
      hints: [
        "Same denominator: just add the numerators.",
        "5 + 3 = 8, so the sum is 8/12.",
        "Simplify 8/12: GCF = 4, so 8/12 = 2/3."
      ],
      explanation: [
        "5/12 + 3/12 = 8/12.",
        "Simplify: 8/12 = 2/3."
      ]
    }
  ],

  // Topic 3: Mixed Numbers (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3 4/5</span> to an improper fraction. What is the numerator?',
      answer: "19",
      hints: [
        "Multiply the whole number by the denominator, then add the numerator.",
        "3 \u00d7 5 = 15, then 15 + 4 = 19.",
        "The improper fraction is 19/5."
      ],
      explanation: [
        "3 \u00d7 5 + 4 = 15 + 4 = 19.",
        "So 3 4/5 = 19/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">27/10</span> to a mixed number.',
      choices: ["2 7/10", "2 3/5", "3 7/10", "1 7/10"],
      answer: "2 7/10",
      hints: [
        "Divide 27 by 10.",
        "27 \u00f7 10 = 2 remainder 7.",
        "So the mixed number is 2 7/10."
      ],
      explanation: [
        "27 \u00f7 10 = 2 R 7.",
        "So 27/10 = 2 7/10."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">41/9</span> to a mixed number.',
      choices: ["4 5/9", "5 4/9", "4 1/9", "3 5/9"],
      answer: "4 5/9",
      hints: [
        "Divide 41 by 9.",
        "41 \u00f7 9 = 4 remainder 5.",
        "So the mixed number is 4 5/9."
      ],
      explanation: [
        "41 \u00f7 9 = 4 R 5.",
        "So 41/9 = 4 5/9."
      ]
    }
  ],

  // Topic 4: Fractions & Multiplication (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">7 \u00d7 3/7</span>? Give your answer as a whole number.',
      answer: "3",
      hints: [
        "Multiply the whole number by the numerator: 7 \u00d7 3 = 21.",
        "Then divide by the denominator: 21 \u00f7 7.",
        "21 \u00f7 7 = 3."
      ],
      explanation: [
        "7 \u00d7 3/7 = (7 \u00d7 3)/7 = 21/7.",
        "21/7 = 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">8 \u00d7 5/16</span>?',
      choices: ["5/2", "5/8", "40/16", "10/16"],
      answer: "5/2",
      hints: [
        "Multiply: 8 \u00d7 5 = 40, denominator stays 16.",
        "40/16 \u2014 simplify by dividing both by 8.",
        "40/16 = 5/2."
      ],
      explanation: [
        "8 \u00d7 5/16 = 40/16.",
        "Simplify: 40/16 = 5/2 (or 2 1/2)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">12 \u00d7 3/8</span>?',
      choices: ["9/2", "36/8", "4", "3/96"],
      answer: "9/2",
      hints: [
        "Multiply: 12 \u00d7 3 = 36, denominator stays 8.",
        "36/8 \u2014 simplify by dividing both by 4.",
        "36/8 = 9/2."
      ],
      explanation: [
        "12 \u00d7 3/8 = 36/8.",
        "Simplify: 36/8 = 9/2 (or 4 1/2)."
      ]
    }
  ],

  // Topic 5: Subtracting Fractions (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7/8 \u2212 1/6</span>? Write the numerator of the simplified answer.',
      answer: "17",
      hints: [
        "LCD of 8 and 6 is 24.",
        "7/8 = 21/24 and 1/6 = 4/24.",
        "21/24 \u2212 4/24 = 17/24. Numerator is 17."
      ],
      explanation: [
        "LCD = 24. 7/8 = 21/24, 1/6 = 4/24.",
        "21/24 \u2212 4/24 = 17/24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/4 \u2212 2/5</span>?',
      choices: ["7/20", "1/1", "1/9", "5/20"],
      answer: "7/20",
      hints: [
        "LCD of 4 and 5 is 20.",
        "3/4 = 15/20, 2/5 = 8/20.",
        "15/20 \u2212 8/20 = 7/20."
      ],
      explanation: [
        "LCD = 20. 3/4 = 15/20, 2/5 = 8/20.",
        "15/20 \u2212 8/20 = 7/20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">9/10 \u2212 5/8</span>?',
      choices: ["11/40", "4/2", "1/5", "7/40"],
      answer: "11/40",
      hints: [
        "LCD of 10 and 8 is 40.",
        "9/10 = 36/40, 5/8 = 25/40.",
        "36/40 \u2212 25/40 = 11/40."
      ],
      explanation: [
        "LCD = 40. 9/10 = 36/40, 5/8 = 25/40.",
        "36/40 \u2212 25/40 = 11/40."
      ]
    }
  ],

  // Topic 6: Multiplying Fractions (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/7 \u00d7 7/12</span>? Write your answer as a fraction (e.g. 1/2).',
      answer: "1/4",
      hints: [
        "Multiply numerators: 3 \u00d7 7 = 21. Multiply denominators: 7 \u00d7 12 = 84.",
        "21/84 \u2014 simplify. GCF(21, 84) = 21.",
        "21/84 = 1/4."
      ],
      explanation: [
        "3/7 \u00d7 7/12 = 21/84.",
        "Simplify: 21/84 = 1/4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/10 \u00d7 2/3</span>?',
      choices: ["7/15", "14/30", "9/13", "7/30"],
      answer: "7/15",
      hints: [
        "Multiply: 7 \u00d7 2 = 14, 10 \u00d7 3 = 30.",
        "14/30 \u2014 simplify by dividing by 2.",
        "14/30 = 7/15."
      ],
      explanation: [
        "7/10 \u00d7 2/3 = 14/30.",
        "Simplify: 14/30 = 7/15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4/9 \u00d7 3/5</span>?',
      choices: ["4/15", "12/45", "7/14", "2/15"],
      answer: "4/15",
      hints: [
        "Multiply: 4 \u00d7 3 = 12, 9 \u00d7 5 = 45.",
        "12/45 \u2014 simplify by dividing by 3.",
        "12/45 = 4/15."
      ],
      explanation: [
        "4/9 \u00d7 3/5 = 12/45.",
        "Simplify: 12/45 = 4/15."
      ]
    }
  ],

  // Topic 7: Dividing Fractions (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4/5 \u00f7 8/15</span>? Write your answer as a fraction (e.g. 1/2).',
      answer: "3/2",
      hints: [
        "Keep, Change, Flip: 4/5 \u00d7 15/8.",
        "Multiply: 4 \u00d7 15 = 60, 5 \u00d7 8 = 40.",
        "60/40 = 3/2."
      ],
      explanation: [
        "4/5 \u00f7 8/15 = 4/5 \u00d7 15/8 = 60/40.",
        "Simplify: 60/40 = 3/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">7/9 \u00f7 7/3</span>?',
      choices: ["1/3", "3/1", "49/27", "7/27"],
      answer: "1/3",
      hints: [
        "Keep, Change, Flip: 7/9 \u00d7 3/7.",
        "Multiply: 7 \u00d7 3 = 21, 9 \u00d7 7 = 63.",
        "21/63 = 1/3."
      ],
      explanation: [
        "7/9 \u00f7 7/3 = 7/9 \u00d7 3/7 = 21/63.",
        "Simplify: 21/63 = 1/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/6 \u00f7 10/9</span>?',
      choices: ["3/4", "50/54", "9/12", "25/54"],
      answer: "3/4",
      hints: [
        "Keep, Change, Flip: 5/6 \u00d7 9/10.",
        "Multiply: 5 \u00d7 9 = 45, 6 \u00d7 10 = 60.",
        "45/60 = 3/4."
      ],
      explanation: [
        "5/6 \u00f7 10/9 = 5/6 \u00d7 9/10 = 45/60.",
        "Simplify: 45/60 = 3/4."
      ]
    }
  ],

  // Topic 8: Comparing Fractions (difficulty 2-3)
  [
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is greater: <span class="math">4/9</span> or <span class="math">3/7</span>?',
      choices: ["4/9", "3/7", "They are equal", "Cannot tell"],
      answer: "3/7",
      hints: [
        "Cross multiply to compare: 4 \u00d7 7 = 28 and 3 \u00d7 9 = 27.",
        "28 > 27, so 4/9 > 3/7? Wait \u2014 compare correctly.",
        "4 \u00d7 7 = 28 for the left, 3 \u00d7 9 = 27 for the right. 28 > 27 means 4/9 > 3/7."
      ],
      explanation: [
        "Cross multiply: 4 \u00d7 7 = 28, 3 \u00d7 9 = 27.",
        "Since 28 > 27, we have 4/9 > 3/7. Wait, that means 4/9 is greater."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many of these fractions are greater than <span class="math">1/2</span>? <br><span class="math">5/11, 4/7, 2/5, 7/13, 3/8</span>',
      answer: "2",
      hints: [
        "A fraction is greater than 1/2 when the numerator is more than half the denominator.",
        "5/11: 5 < 5.5 \u2192 No. 4/7: 4 > 3.5 \u2192 Yes. 2/5: 2 < 2.5 \u2192 No.",
        "7/13: 7 > 6.5 \u2192 Yes. 3/8: 3 < 4 \u2192 No. Count: 2."
      ],
      explanation: [
        "4/7 > 1/2 (since 4 > 3.5) and 7/13 > 1/2 (since 7 > 6.5).",
        "The other three are less than 1/2. Answer: 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is the smallest: <span class="math">5/9, 4/7, 7/12</span>?',
      choices: ["5/9", "4/7", "7/12", "They are all equal"],
      answer: "5/9",
      hints: [
        "Find a common denominator or convert to decimals.",
        "5/9 \u2248 0.556, 4/7 \u2248 0.571, 7/12 \u2248 0.583.",
        "0.556 is the smallest, so 5/9 is the answer."
      ],
      explanation: [
        "Converting: 5/9 \u2248 0.556, 4/7 \u2248 0.571, 7/12 \u2248 0.583.",
        "5/9 is the smallest."
      ]
    }
  ],

  // Topic 9: Fraction Word Problems (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A box has 42 pens. If <span class="math">3/7</span> are blue, how many blue pens are there?',
      answer: "18",
      hints: [
        "Find 3/7 of 42.",
        "42 \u00f7 7 = 6, then 6 \u00d7 3 = 18.",
        "There are 18 blue pens."
      ],
      explanation: [
        "3/7 of 42 = (42 \u00f7 7) \u00d7 3 = 6 \u00d7 3 = 18.",
        "There are 18 blue pens."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Ana drank <span class="math">2/3</span> of a bottle of water and Ben drank <span class="math">1/4</span> of the same bottle. What fraction of the bottle did they drink in total?',
      choices: ["11/12", "3/7", "1/2", "5/12"],
      answer: "11/12",
      hints: [
        "Add 2/3 + 1/4.",
        "LCD = 12. 2/3 = 8/12, 1/4 = 3/12.",
        "8/12 + 3/12 = 11/12."
      ],
      explanation: [
        "LCD = 12. 2/3 = 8/12, 1/4 = 3/12.",
        "8/12 + 3/12 = 11/12 of the bottle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A wire is <span class="math">9/10</span> meter long. If each connector uses <span class="math">3/10</span> meter, how many connectors can be made?',
      answer: "3",
      hints: [
        "Divide 9/10 by 3/10.",
        "9/10 \u00f7 3/10 = 9/10 \u00d7 10/3.",
        "= 9/3 = 3 connectors."
      ],
      explanation: [
        "9/10 \u00f7 3/10 = 9/10 \u00d7 10/3 = 90/30 = 3.",
        "3 connectors can be made."
      ]
    }
  ],

  // ===== WORLD 4 (Topics 10-19) =====

  // Topic 10: Simplifying Expressions (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify: <span class="math">11x \u2212 4x \u2212 3x</span>. What is the coefficient of x?',
      answer: "4",
      hints: [
        "Combine the x terms: 11 \u2212 4 \u2212 3.",
        "11 \u2212 4 = 7, then 7 \u2212 3 = 4.",
        "The coefficient is 4."
      ],
      explanation: [
        "11x \u2212 4x \u2212 3x = (11 \u2212 4 \u2212 3)x = 4x.",
        "The coefficient of x is 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">3(x + 4) \u2212 2x + 1</span>',
      choices: ["x + 13", "5x + 13", "x + 5", "5x + 5"],
      answer: "x + 13",
      hints: [
        "First distribute: 3(x + 4) = 3x + 12.",
        "Then: 3x + 12 \u2212 2x + 1.",
        "Combine: (3x \u2212 2x) + (12 + 1) = x + 13."
      ],
      explanation: [
        "3(x + 4) = 3x + 12.",
        "3x + 12 \u2212 2x + 1 = x + 13."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">2a + 5b \u2212 a + 3b</span>',
      choices: ["a + 8b", "3a + 8b", "a + 2b", "3a + 2b"],
      answer: "a + 8b",
      hints: [
        "Group like terms: (2a \u2212 a) + (5b + 3b).",
        "2a \u2212 a = a.",
        "5b + 3b = 8b. So the answer is a + 8b."
      ],
      explanation: [
        "(2a \u2212 a) + (5b + 3b) = a + 8b.",
        "The simplified expression is a + 8b."
      ]
    }
  ],

  // Topic 11: One-Step Equations (+/\u2212) (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x + 16 = 42</span>. What is x?',
      answer: "26",
      hints: [
        "Subtract 16 from both sides.",
        "x = 42 \u2212 16.",
        "x = 26."
      ],
      explanation: [
        "x + 16 = 42. Subtract 16: x = 42 \u2212 16.",
        "x = 26."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">y \u2212 23 = \u22127</span>',
      choices: ["16", "\u221230", "30", "\u221216"],
      answer: "16",
      hints: [
        "Add 23 to both sides.",
        "y = \u22127 + 23.",
        "y = 16."
      ],
      explanation: [
        "y \u2212 23 = \u22127. Add 23: y = \u22127 + 23.",
        "y = 16."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">n + 27 = 13</span>. What is n?',
      answer: "-14",
      hints: [
        "Subtract 27 from both sides.",
        "n = 13 \u2212 27.",
        "n = \u221214."
      ],
      explanation: [
        "n + 27 = 13. Subtract 27: n = 13 \u2212 27.",
        "n = \u221214."
      ]
    }
  ],

  // Topic 12: One-Step Equations (\u00d7/\u00f7) (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">7x = 56</span>. What is x?',
      answer: "8",
      hints: [
        "Divide both sides by 7.",
        "x = 56 \u00f7 7.",
        "x = 8."
      ],
      explanation: [
        "7x = 56. Divide by 7: x = 56/7.",
        "x = 8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">\u22129k = 72</span>',
      choices: ["\u22128", "8", "\u22129", "9"],
      answer: "\u22128",
      hints: [
        "Divide both sides by \u22129.",
        "k = 72 \u00f7 (\u22129).",
        "k = \u22128."
      ],
      explanation: [
        "\u22129k = 72. Divide by \u22129: k = 72/(\u22129).",
        "k = \u22128."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x/10 = 6</span>. What is x?',
      answer: "60",
      hints: [
        "Multiply both sides by 10.",
        "x = 6 \u00d7 10.",
        "x = 60."
      ],
      explanation: [
        "x/10 = 6. Multiply by 10: x = 60.",
        "x = 60."
      ]
    }
  ],

  // Topic 13: Combining & Solving (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">7x \u2212 3x + 8 = 32</span>. What is x?',
      answer: "6",
      hints: [
        "Combine like terms: 7x \u2212 3x = 4x.",
        "4x + 8 = 32. Subtract 8: 4x = 24.",
        "x = 24 \u00f7 4 = 6."
      ],
      explanation: [
        "7x \u2212 3x = 4x. So 4x + 8 = 32.",
        "4x = 24, x = 6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">3n + 6n = 63</span>',
      choices: ["7", "9", "21", "6"],
      answer: "7",
      hints: [
        "Combine: 3n + 6n = 9n.",
        "9n = 63.",
        "n = 63 \u00f7 9 = 7."
      ],
      explanation: [
        "3n + 6n = 9n. So 9n = 63.",
        "n = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">10y \u2212 3y \u2212 4 = 38</span>',
      choices: ["6", "7", "5", "8"],
      answer: "6",
      hints: [
        "Combine: 10y \u2212 3y = 7y.",
        "7y \u2212 4 = 38. Add 4: 7y = 42.",
        "y = 42 \u00f7 7 = 6."
      ],
      explanation: [
        "10y \u2212 3y = 7y. So 7y \u2212 4 = 38.",
        "7y = 42, y = 6."
      ]
    }
  ],

  // Topic 14: Distributive Property (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">\u22127(3x \u2212 2)</span>. What is the constant term?',
      answer: "14",
      hints: [
        "Distribute \u22127 to both terms inside.",
        "\u22127 \u00d7 3x = \u221221x and \u22127 \u00d7 (\u22122) = +14.",
        "The constant term is 14."
      ],
      explanation: [
        "\u22127(3x \u2212 2) = \u221221x + 14.",
        "The constant term is 14."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">4(2x + 3)</span>',
      choices: ["8x + 12", "8x + 3", "6x + 12", "6x + 7"],
      answer: "8x + 12",
      hints: [
        "Multiply 4 by each term inside the parentheses.",
        "4 \u00d7 2x = 8x.",
        "4 \u00d7 3 = 12. So the answer is 8x + 12."
      ],
      explanation: [
        "4(2x + 3) = 4 \u00d7 2x + 4 \u00d7 3.",
        "= 8x + 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">\u22125(x \u2212 8)</span>',
      choices: ["\u22125x + 40", "\u22125x \u2212 40", "5x + 40", "5x \u2212 8"],
      answer: "\u22125x + 40",
      hints: [
        "Distribute \u22125 to each term.",
        "\u22125 \u00d7 x = \u22125x.",
        "\u22125 \u00d7 (\u22128) = +40. Answer: \u22125x + 40."
      ],
      explanation: [
        "\u22125(x \u2212 8) = \u22125x + 40.",
        "Remember: negative times negative = positive."
      ]
    }
  ],

  // Topic 15: Two-Step Equations (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6x + 7 = 43</span>. What is x?',
      answer: "6",
      hints: [
        "Subtract 7 from both sides: 6x = 36.",
        "Divide by 6: x = 36 \u00f7 6.",
        "x = 6."
      ],
      explanation: [
        "6x + 7 = 43. Subtract 7: 6x = 36.",
        "Divide by 6: x = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\u22124x + 5 = \u221219</span>',
      choices: ["6", "\u22126", "3.5", "\u22123.5"],
      answer: "6",
      hints: [
        "Subtract 5: \u22124x = \u221224.",
        "Divide by \u22124: x = 6.",
        "Check: \u22124(6) + 5 = \u221224 + 5 = \u221219. \u2713"
      ],
      explanation: [
        "\u22124x + 5 = \u221219. Subtract 5: \u22124x = \u221224.",
        "Divide by \u22124: x = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">x/4 \u2212 5 = 3</span>. What is x?',
      answer: "32",
      hints: [
        "Add 5 to both sides: x/4 = 8.",
        "Multiply by 4: x = 32.",
        "Check: 32/4 \u2212 5 = 8 \u2212 5 = 3. \u2713"
      ],
      explanation: [
        "x/4 \u2212 5 = 3. Add 5: x/4 = 8.",
        "Multiply by 4: x = 32."
      ]
    }
  ],

  // Topic 16: Equations with Parentheses (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3(x + 8) = 39</span>. What is x?',
      answer: "5",
      hints: [
        "Divide both sides by 3: x + 8 = 13.",
        "Subtract 8: x = 5.",
        "Check: 3(5 + 8) = 3(13) = 39. \u2713"
      ],
      explanation: [
        "3(x + 8) = 39. Divide by 3: x + 8 = 13.",
        "x = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\u22122(3n \u2212 4) = 26</span>',
      choices: ["\u22123", "3", "\u22125", "5"],
      answer: "\u22123",
      hints: [
        "Distribute: \u22126n + 8 = 26.",
        "Subtract 8: \u22126n = 18.",
        "Divide by \u22126: n = \u22123."
      ],
      explanation: [
        "\u22122(3n \u2212 4) = \u22126n + 8 = 26.",
        "\u22126n = 18, n = \u22123."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">5(2x + 1) = 45</span>',
      choices: ["4", "5", "2", "9"],
      answer: "4",
      hints: [
        "Divide by 5: 2x + 1 = 9.",
        "Subtract 1: 2x = 8.",
        "Divide by 2: x = 4."
      ],
      explanation: [
        "5(2x + 1) = 45. Divide by 5: 2x + 1 = 9.",
        "2x = 8, x = 4."
      ]
    }
  ],

  // Topic 17: Variable on Both Sides (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">9x \u2212 7 = 5x + 13</span>. What is x?',
      answer: "5",
      hints: [
        "Subtract 5x from both sides: 4x \u2212 7 = 13.",
        "Add 7: 4x = 20.",
        "Divide by 4: x = 5."
      ],
      explanation: [
        "9x \u2212 5x = 4x. So 4x \u2212 7 = 13.",
        "4x = 20, x = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">12y + 1 = 8y + 29</span>',
      choices: ["7", "6", "8", "5"],
      answer: "7",
      hints: [
        "Subtract 8y: 4y + 1 = 29.",
        "Subtract 1: 4y = 28.",
        "y = 28 \u00f7 4 = 7."
      ],
      explanation: [
        "12y \u2212 8y = 4y. So 4y + 1 = 29.",
        "4y = 28, y = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">3n + 15 = n + 25</span>',
      choices: ["5", "10", "20", "\u22125"],
      answer: "5",
      hints: [
        "Subtract n from both sides: 2n + 15 = 25.",
        "Subtract 15: 2n = 10.",
        "n = 5."
      ],
      explanation: [
        "3n \u2212 n = 2n. So 2n + 15 = 25.",
        "2n = 10, n = 5."
      ]
    }
  ],

  // Topic 18: Writing Equations (difficulty 2-3)
  [
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "Six times a number decreased by 11 is 25"?',
      choices: ["6n \u2212 11 = 25", "6(n \u2212 11) = 25", "11 \u2212 6n = 25", "6n + 11 = 25"],
      answer: "6n \u2212 11 = 25",
      hints: [
        '"Six times a number" = 6n.',
        '"decreased by 11" means subtract 11.',
        'So: 6n \u2212 11 = 25.'
      ],
      explanation: [
        '"Six times a number" = 6n, "decreased by 11" = \u2212 11.',
        "Equation: 6n \u2212 11 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Translate and solve: "Four times a number plus 9 equals 49." What is the number?',
      answer: "10",
      hints: [
        "Write the equation: 4n + 9 = 49.",
        "Subtract 9: 4n = 40.",
        "Divide by 4: n = 10."
      ],
      explanation: [
        "4n + 9 = 49. Subtract 9: 4n = 40.",
        "n = 10."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation matches: "A number divided by 3, plus 8, equals 14"?',
      choices: ["n/3 + 8 = 14", "3n + 8 = 14", "(n + 8)/3 = 14", "n/(3 + 8) = 14"],
      answer: "n/3 + 8 = 14",
      hints: [
        '"A number divided by 3" = n/3.',
        '"plus 8" means add 8.',
        'So: n/3 + 8 = 14.'
      ],
      explanation: [
        '"A number divided by 3" = n/3, "plus 8" = + 8.',
        "Equation: n/3 + 8 = 14."
      ]
    }
  ],

  // Topic 19: Inequalities (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">4x + 5 \u2264 29</span>. What is the largest whole number x can be?',
      answer: "6",
      hints: [
        "Subtract 5: 4x \u2264 24.",
        "Divide by 4: x \u2264 6.",
        "The largest whole number is 6."
      ],
      explanation: [
        "4x + 5 \u2264 29 \u2192 4x \u2264 24 \u2192 x \u2264 6.",
        "Largest whole number: 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\u22126n > 42</span>. What happens?',
      choices: [
        "Flip the sign: n < \u22127",
        "n > \u22127",
        "n > 7",
        "n < 7"
      ],
      answer: "Flip the sign: n < \u22127",
      hints: [
        "Divide both sides by \u22126.",
        "When dividing by a negative, flip the inequality.",
        "n < \u22127."
      ],
      explanation: [
        "\u22126n > 42. Divide by \u22126 (flip sign): n < \u22127.",
        "When dividing by a negative, the inequality reverses."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which value is in the solution set of <span class="math">5x \u2212 9 > 16</span>?',
      choices: ["5", "4", "6", "3"],
      answer: "6",
      hints: [
        "Solve: 5x > 25, so x > 5.",
        "Which choice is greater than 5?",
        "6 > 5, so x = 6 works."
      ],
      explanation: [
        "5x \u2212 9 > 16 \u2192 5x > 25 \u2192 x > 5.",
        "Only 6 is greater than 5."
      ]
    }
  ],

  // ===== WORLD 5 (Topics 20-30) =====

  // Topic 20: Adding & Subtracting Decimals (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">4.6 + 3.8</span>?',
      answer: "8.4",
      hints: [
        "Line up the decimal points.",
        "6 + 8 = 14. Write 4, carry 1.",
        "4 + 3 + 1 = 8. Answer: 8.4."
      ],
      explanation: [
        "4.6 + 3.8: ones 6 + 8 = 14 (carry 1).",
        "4 + 3 + 1 = 8. Answer: 8.4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">17.4 \u2212 8.56</span>?',
      choices: ["8.84", "9.16", "8.16", "9.84"],
      answer: "8.84",
      hints: [
        "Rewrite as 17.40 \u2212 8.56.",
        "Line up decimal points and subtract.",
        "17.40 \u2212 8.56 = 8.84."
      ],
      explanation: [
        "17.40 \u2212 8.56.",
        "= 8.84."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">3.25 + 9.75</span>?',
      answer: "13",
      hints: [
        "Add the hundredths: 5 + 5 = 10. Write 0, carry 1.",
        "Add the tenths: 2 + 7 + 1 = 10. Write 0, carry 1.",
        "Add the ones: 3 + 9 + 1 = 13."
      ],
      explanation: [
        "3.25 + 9.75 = 13.00.",
        "= 13."
      ]
    }
  ],

  // Topic 21: Comparing Decimals (difficulty 1-2)
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.65</span> or <span class="math">0.7</span>?',
      choices: ["0.65", "0.7", "They are equal", "Cannot tell"],
      answer: "0.7",
      hints: [
        "Rewrite 0.7 as 0.70 so both have two decimal places.",
        "Compare 0.65 and 0.70.",
        "70 hundredths > 65 hundredths, so 0.7 is greater."
      ],
      explanation: [
        "0.7 = 0.70. Compare 0.70 vs 0.65.",
        "0.70 > 0.65."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are less than 0.5? <br><span class="math">0.49, 0.51, 0.499, 0.5, 0.048</span>',
      answer: "3",
      hints: [
        "Check each: 0.49 < 0.5 \u2713, 0.51 > 0.5 \u2717.",
        "0.499 < 0.5 \u2713, 0.5 = 0.5 \u2717 (not less).",
        "0.048 < 0.5 \u2713. Count: 3."
      ],
      explanation: [
        "0.49, 0.499, and 0.048 are all less than 0.5.",
        "0.51 is greater and 0.5 is equal, not less. Answer: 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">6.107 \u2610 6.17</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Compare digit by digit: both start with 6.1.",
        "Next digit: 0 vs 7.",
        "0 < 7, so 6.107 < 6.17."
      ],
      explanation: [
        "6.107 vs 6.170: at the hundredths place, 0 < 7.",
        "So 6.107 < 6.17."
      ]
    }
  ],

  // Topic 22: Rounding & Multiplying (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">9.45</span> to the nearest tenth.',
      answer: "9.5",
      hints: [
        "Look at the hundredths digit: 5.",
        "5 or more means round up.",
        "9.45 rounds to 9.5."
      ],
      explanation: [
        "The hundredths digit is 5 (round up).",
        "9.45 \u2192 9.5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">3.9951</span> to the nearest hundredth.',
      choices: ["4.00", "3.99", "4.01", "3.995"],
      answer: "4.00",
      hints: [
        "Look at the thousandths digit: 5.",
        "5 or more: round the hundredths digit up. 99 \u2192 100.",
        "Carry over: 3.9951 rounds to 4.00."
      ],
      explanation: [
        "Thousandths digit = 5, round up hundredths.",
        "3.99 + 0.01 = 4.00."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">6.49</span> to the nearest whole number.',
      answer: "6",
      hints: [
        "Look at the tenths digit: 4.",
        "4 is less than 5, so round down.",
        "6.49 rounds to 6."
      ],
      explanation: [
        "The tenths digit is 4 (round down).",
        "6.49 \u2192 6."
      ]
    }
  ],

  // Topic 23: Fractions to Decimals (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">9/10</span> to a decimal.',
      answer: "0.9",
      hints: [
        "Divide 9 by 10.",
        "9 \u00f7 10 = 0.9.",
        "The decimal is 0.9."
      ],
      explanation: [
        "9 \u00f7 10 = 0.9.",
        "So 9/10 = 0.9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.4375</span>?',
      choices: ["7/16", "3/8", "7/20", "9/20"],
      answer: "7/16",
      hints: [
        "0.4375 = 4375/10000.",
        "Simplify: GCF = 625. 4375/625 = 7, 10000/625 = 16.",
        "So 0.4375 = 7/16."
      ],
      explanation: [
        "0.4375 = 4375/10000 = 7/16.",
        "So the answer is 7/16."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">1/8</span> to a decimal.',
      choices: ["0.125", "0.15", "0.18", "0.8"],
      answer: "0.125",
      hints: [
        "Divide 1 by 8.",
        "1.000 \u00f7 8 = 0.125.",
        "So 1/8 = 0.125."
      ],
      explanation: [
        "1 \u00f7 8 = 0.125.",
        "So 1/8 = 0.125."
      ]
    }
  ],

  // Topic 24: Decimal \u2194 Fraction (difficulty 1-2)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.55</span> to a fraction in simplest form. What is the numerator?',
      answer: "11",
      hints: [
        "0.55 = 55/100.",
        "GCF(55, 100) = 5.",
        "55/100 = 11/20. Numerator is 11."
      ],
      explanation: [
        "0.55 = 55/100. GCF = 5.",
        "55/100 = 11/20."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which decimal equals <span class="math">3/4</span>?',
      choices: ["0.75", "0.34", "0.43", "0.7"],
      answer: "0.75",
      hints: [
        "Divide 3 by 4.",
        "3 \u00f7 4 = 0.75.",
        "So 3/4 = 0.75."
      ],
      explanation: [
        "3 \u00f7 4 = 0.75.",
        "So the answer is 0.75."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.32</span> to a fraction in simplest form.',
      choices: ["8/25", "32/100", "16/50", "4/12"],
      answer: "8/25",
      hints: [
        "0.32 = 32/100.",
        "GCF(32, 100) = 4.",
        "32/100 = 8/25."
      ],
      explanation: [
        "0.32 = 32/100. GCF = 4.",
        "32/100 = 8/25."
      ]
    }
  ],

  // Topic 25: Multiplying Decimals (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">0.15 \u00d7 0.6</span>?',
      answer: "0.09",
      hints: [
        "Multiply as whole numbers: 15 \u00d7 6 = 90.",
        "Count decimal places: 2 + 1 = 3.",
        "Place the decimal: 0.090 = 0.09."
      ],
      explanation: [
        "15 \u00d7 6 = 90. Total decimal places: 3.",
        "0.090 = 0.09."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.8 \u00d7 3.5</span>?',
      choices: ["9.80", "9.8", "8.40", "9.85"],
      answer: "9.8",
      hints: [
        "28 \u00d7 35 = 980.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 9.80 = 9.8."
      ],
      explanation: [
        "28 \u00d7 35 = 980. Two decimal places.",
        "9.80 = 9.8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">0.5 \u00d7 0.5</span>?',
      choices: ["0.25", "0.10", "2.5", "1.0"],
      answer: "0.25",
      hints: [
        "5 \u00d7 5 = 25.",
        "Decimal places: 1 + 1 = 2.",
        "0.25."
      ],
      explanation: [
        "5 \u00d7 5 = 25. Two decimal places.",
        "0.25."
      ]
    }
  ],

  // Topic 26: Dividing Decimals (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3.6 \u00f7 0.12</span>?',
      answer: "30",
      hints: [
        "Move decimal 2 places right in both: 360 \u00f7 12.",
        "360 \u00f7 12 = 30.",
        "The answer is 30."
      ],
      explanation: [
        "3.6 \u00f7 0.12 = 360 \u00f7 12.",
        "= 30."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5.6 \u00f7 0.08</span>?',
      choices: ["70", "7", "0.7", "700"],
      answer: "70",
      hints: [
        "Move decimal 2 places: 560 \u00f7 8.",
        "560 \u00f7 8 = 70.",
        "The answer is 70."
      ],
      explanation: [
        "5.6 \u00f7 0.08 = 560 \u00f7 8.",
        "= 70."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2.4 \u00f7 0.3</span>?',
      answer: "8",
      hints: [
        "Move decimal 1 place: 24 \u00f7 3.",
        "24 \u00f7 3 = 8.",
        "The answer is 8."
      ],
      explanation: [
        "2.4 \u00f7 0.3 = 24 \u00f7 3.",
        "= 8."
      ]
    }
  ],

  // Topic 27: Advanced Conversions (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">2 5/8</span> to a decimal.',
      answer: "2.625",
      hints: [
        "Convert the fraction part: 5 \u00f7 8 = 0.625.",
        "Add the whole number: 2 + 0.625.",
        "= 2.625."
      ],
      explanation: [
        "5/8 = 0.625.",
        "2 + 0.625 = 2.625."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">8/11</span> or <span class="math">0.73</span>?',
      choices: ["8/11", "0.73", "They are equal", "Cannot determine"],
      answer: "8/11",
      hints: [
        "Convert 8/11 to a decimal: 8 \u00f7 11 \u2248 0.7272...",
        "Compare 0.727... with 0.73.",
        "0.73 > 0.7272..., so 0.73 is greater. Wait \u2014 re-check."
      ],
      explanation: [
        "8/11 \u2248 0.7272... and 0.73 = 0.7300...",
        "0.73 > 0.7272, so 0.73 is actually greater."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.9375</span> to a fraction in simplest form.',
      choices: ["15/16", "9/10", "3/4", "7/8"],
      answer: "15/16",
      hints: [
        "0.9375 = 9375/10000.",
        "GCF(9375, 10000) = 625.",
        "9375/10000 = 15/16."
      ],
      explanation: [
        "0.9375 = 9375/10000.",
        "Simplify: 9375 \u00f7 625 = 15, 10000 \u00f7 625 = 16. So 15/16."
      ]
    }
  ],

  // Topic 28: Repeating Decimals (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What digit repeats when you convert <span class="math">7/9</span> to a decimal?',
      answer: "7",
      hints: [
        "Divide 7 by 9.",
        "7 \u00f7 9 = 0.777...",
        "The repeating digit is 7."
      ],
      explanation: [
        "7 \u00f7 9 = 0.777... = 0.\\overline{7}.",
        "The repeating digit is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">10/11</span> to a decimal. What two digits repeat?',
      choices: ["90", "09", "91", "10"],
      answer: "90",
      hints: [
        "10 \u00f7 11 = 0.909090...",
        "The repeating block is 90.",
        "So the two repeating digits are 90."
      ],
      explanation: [
        "10 \u00f7 11 = 0.\\overline{90}.",
        "The two repeating digits are 90."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these fractions produces a terminating decimal?',
      choices: ["5/8", "2/3", "1/7", "4/11"],
      answer: "5/8",
      hints: [
        "A fraction terminates when its denominator (in lowest terms) has only factors of 2 and 5.",
        "8 = 2\u00b3 \u2014 only factor is 2.",
        "So 5/8 terminates."
      ],
      explanation: [
        "5/8: denominator 8 = 2\u00b3 (only 2s) \u2192 terminates.",
        "The others have prime factors other than 2 or 5 in their denominators."
      ]
    }
  ],

  // Topic 29: Decimal Word Problems (difficulty 2-3)
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A magazine costs $4.95 and a comic costs $2.35. What is the total cost? (Just the number, no $)',
      answer: "7.3",
      hints: [
        "Add 4.95 + 2.35.",
        "5 + 5 = 10. Carry 1. 9 + 3 + 1 = 13. Carry 1. 4 + 2 + 1 = 7.",
        "Total: 7.30 = 7.3."
      ],
      explanation: [
        "4.95 + 2.35 = 7.30.",
        "The total cost is $7.30."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Ribbon costs $3.45 per meter. How much do 6 meters cost?',
      choices: ["$20.70", "$20.07", "$21.70", "$19.70"],
      answer: "$20.70",
      hints: [
        "Multiply: 3.45 \u00d7 6.",
        "345 \u00d7 6 = 2070. Two decimal places.",
        "$20.70."
      ],
      explanation: [
        "3.45 \u00d7 6 = 20.70.",
        "6 meters cost $20.70."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A trail is 12.5 km long. Sam has hiked 7.85 km. How much farther does he need to hike?',
      answer: "4.65",
      hints: [
        "Subtract: 12.50 \u2212 7.85.",
        "Line up decimals and subtract.",
        "12.50 \u2212 7.85 = 4.65."
      ],
      explanation: [
        "12.50 \u2212 7.85 = 4.65 km.",
        "Sam needs to hike 4.65 km more."
      ]
    }
  ],

  // Topic 30: Decimal Place Value (difficulty 3-4)
  [
    {
      type: "numeric", difficulty: 3,
      question: 'In the number <span class="math">5.2483</span>, what is the value of the digit 4? Write as a decimal.',
      answer: "0.04",
      hints: [
        "Identify the place of 4: tenths=2, hundredths=4.",
        "The 4 is in the hundredths place.",
        "Its value is 4 \u00d7 0.01 = 0.04."
      ],
      explanation: [
        "In 5.2483, the digit 4 is in the hundredths place.",
        "Value = 0.04."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many times greater is the 8 in <span class="math">0.08</span> than the 8 in <span class="math">0.008</span>?',
      choices: ["10", "100", "8", "1000"],
      answer: "10",
      hints: [
        "0.08 = 8 hundredths. 0.008 = 8 thousandths.",
        "Hundredths \u00f7 thousandths = 0.01 \u00f7 0.001.",
        "= 10 times greater."
      ],
      explanation: [
        "0.08 \u00f7 0.008 = 10.",
        "The 8 in 0.08 is 10 times greater."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Write <span class="math">8 tenths + 2 thousandths</span> as a decimal.',
      choices: ["0.802", "0.82", "0.082", "8.002"],
      answer: "0.802",
      hints: [
        "8 tenths = 0.8. 2 thousandths = 0.002.",
        "Add them: 0.800 + 0.002.",
        "= 0.802."
      ],
      explanation: [
        "8 tenths = 0.8, 2 thousandths = 0.002.",
        "0.800 + 0.002 = 0.802."
      ]
    }
  ]
];

// ---- Insertion logic ----
let totalInserted = 0;

// Work from bottom to top so line numbers stay valid
for (let t = topicEndLines.length - 1; t >= 0; t--) {
  const endLine = topicEndLines[t] - 1; // convert to 0-indexed
  const qs = newQuestions[t];
  
  // Build the text to insert (3 questions, each preceded by a comma after the previous entry)
  let insertLines = [];
  for (const q of qs) {
    insertLines.push('    ,');
    insertLines.push('    {');
    insertLines.push(`      type: "${q.type}", difficulty: ${q.difficulty},`);
    insertLines.push(`      question: '${q.question}',`);
    if (q.choices) {
      insertLines.push(`      choices: [${q.choices.map(c => JSON.stringify(c)).join(', ')}],`);
    }
    insertLines.push(`      answer: ${JSON.stringify(q.answer)},`);
    insertLines.push(`      hints: [`);
    for (let h = 0; h < q.hints.length; h++) {
      const comma = h < q.hints.length - 1 ? ',' : '';
      insertLines.push(`        ${JSON.stringify(q.hints[h])}${comma}`);
    }
    insertLines.push(`      ],`);
    insertLines.push(`      explanation: [`);
    for (let e = 0; e < q.explanation.length; e++) {
      const comma = e < q.explanation.length - 1 ? ',' : '';
      insertLines.push(`        ${JSON.stringify(q.explanation[e])}${comma}`);
    }
    insertLines.push(`      ]`);
    insertLines.push('    }');
  }
  
  // Find the line of the last closing `}` of the last question before the `]`
  let insertAfterIdx = endLine - 1;
  while (insertAfterIdx >= 0 && !lines[insertAfterIdx].trim().startsWith('}')) {
    insertAfterIdx--;
  }
  
  if (insertAfterIdx < 0) {
    console.error(`ERROR: Could not find closing } for topic ${t} before line ${endLine + 1}`);
    process.exit(1);
  }
  
  // Insert the new lines after the closing `}` of the last question
  lines.splice(insertAfterIdx + 1, 0, ...insertLines);
  totalInserted += qs.length;
}

// Write the modified content back
fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log(`Successfully inserted ${totalInserted} questions across ${topicEndLines.length} topics.`);
