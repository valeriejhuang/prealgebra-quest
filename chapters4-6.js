// ===== Chapters 4-6: Fractions, Equations, Decimals =====
// Loaded after questions.js — patches WORLDS[3..5]

// ============================================================
// WORLD 3 — Fraction Falls
// Chapter: Fractions
// ============================================================
WORLDS[3] = {
  id: 3, name: "Fraction Falls", icon: "💧",
  chapter: "Fractions", color: "#3498db",
  bossName: "Fractix, the Split Specter",
  bossDesc: "A ghost that divides and multiplies itself endlessly",
  pool: {
    // ── Tutorial (15 problems, difficulty 1-2) ──
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'Simplify <span class="math">6/8</span>.',
        choices: ["2/3", "3/4", "4/6", "6/8"],
        answer: "3/4",
        hints: [
          "Find the greatest common divisor (GCD) of 6 and 8.",
          "GCD(6, 8) = 2.",
          "Divide both top and bottom by 2: 6÷2 = 3, 8÷2 = 4."
        ],
        explanation: [
          "GCD(6, 8) = 2",
          "6/8 = (6÷2)/(8÷2) = <strong>3/4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Simplify <span class="math">10/15</span>. What is the numerator of the simplified fraction?',
        answer: "2",
        hints: [
          "Find the GCD of 10 and 15.",
          "GCD(10, 15) = 5.",
          "10÷5 = 2, 15÷5 = 3. So 10/15 = 2/3."
        ],
        explanation: [
          "GCD(10, 15) = 5",
          "10/15 = (10÷5)/(15÷5) = 2/3",
          "The numerator is <strong>2</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Simplify <span class="math">12/18</span>.',
        choices: ["2/3", "3/4", "4/6", "6/9"],
        answer: "2/3",
        hints: [
          "Find the GCD of 12 and 18.",
          "GCD(12, 18) = 6.",
          "12÷6 = 2, 18÷6 = 3."
        ],
        explanation: [
          "GCD(12, 18) = 6",
          "12/18 = (12÷6)/(18÷6) = <strong>2/3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">1/4 + 1/4</span>?',
        choices: ["1/2", "2/8", "1/8", "1/4"],
        answer: "1/2",
        hints: [
          "The denominators are already the same!",
          "Add the numerators: 1 + 1 = 2.",
          "2/4 simplifies to 1/2."
        ],
        explanation: [
          "1/4 + 1/4 = 2/4",
          "2/4 = <strong>1/2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">2/5 + 1/5</span>? Give the numerator.',
        answer: "3",
        hints: [
          "Same denominator, so just add numerators.",
          "2 + 1 = 3.",
          "The answer is 3/5. Numerator = 3."
        ],
        explanation: [
          "2/5 + 1/5 = (2+1)/5 = 3/5",
          "The numerator is <strong>3</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">1/2 + 1/3</span>?',
        choices: ["2/5", "5/6", "1/5", "2/6"],
        answer: "5/6",
        hints: [
          "Find a common denominator for 2 and 3.",
          "LCD = 6. So 1/2 = 3/6 and 1/3 = 2/6.",
          "3/6 + 2/6 = 5/6."
        ],
        explanation: [
          "1/2 + 1/3 = 3/6 + 2/6",
          "= <strong>5/6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which fraction is equivalent to <span class="math">2/5</span>?',
        choices: ["4/10", "3/6", "4/8", "2/10"],
        answer: "4/10",
        hints: [
          "Multiply numerator and denominator by the same number.",
          "2×2 = 4, 5×2 = 10.",
          "2/5 = 4/10."
        ],
        explanation: [
          "2/5 = (2×2)/(5×2) = <strong>4/10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Which number goes in the blank? <span class="math">3/4 = ?/12</span>',
        answer: "9",
        hints: [
          "What do you multiply 4 by to get 12?",
          "4 × 3 = 12, so multiply the numerator by 3 too.",
          "3 × 3 = 9."
        ],
        explanation: [
          "4 × 3 = 12",
          "3 × 3 = 9",
          "3/4 = <strong>9</strong>/12"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which fraction is equivalent to <span class="math">1/3</span>?',
        choices: ["2/6", "2/5", "3/6", "1/6"],
        answer: "2/6",
        hints: [
          "Multiply top and bottom by the same number.",
          "1×2 = 2, 3×2 = 6.",
          "1/3 = 2/6."
        ],
        explanation: [
          "1/3 = (1×2)/(3×2) = <strong>2/6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert the mixed number <span class="math">2 1/3</span> to an improper fraction. What is the numerator?',
        answer: "7",
        hints: [
          "Multiply the whole number by the denominator: 2 × 3 = 6.",
          "Add the numerator: 6 + 1 = 7.",
          "So 2 1/3 = 7/3."
        ],
        explanation: [
          "2 1/3 = (2×3 + 1)/3 = 7/3",
          "The numerator is <strong>7</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Convert <span class="math">3 2/5</span> to an improper fraction.',
        choices: ["17/5", "15/5", "32/5", "11/5"],
        answer: "17/5",
        hints: [
          "Multiply whole number by denominator: 3 × 5 = 15.",
          "Add the numerator: 15 + 2 = 17.",
          "3 2/5 = 17/5."
        ],
        explanation: [
          "3 × 5 = 15",
          "15 + 2 = 17",
          "3 2/5 = <strong>17/5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert the improper fraction <span class="math">11/4</span> to a mixed number. What is the whole-number part?',
        answer: "2",
        hints: [
          "Divide 11 by 4.",
          "11 ÷ 4 = 2 remainder 3.",
          "So 11/4 = 2 3/4. The whole-number part is 2."
        ],
        explanation: [
          "11 ÷ 4 = 2 remainder 3",
          "11/4 = 2 3/4",
          "Whole-number part = <strong>2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">3/4 × 8</span>? (Give a whole number.)',
        answer: "6",
        hints: [
          "Multiply the numerator by 8: 3 × 8 = 24.",
          "Divide by the denominator: 24 ÷ 4 = 6.",
          "3/4 × 8 = 6."
        ],
        explanation: [
          "3/4 × 8 = (3 × 8)/4 = 24/4",
          "= <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">1/3 + 1/4</span>?',
        choices: ["2/7", "7/12", "4/12", "1/7"],
        answer: "7/12",
        hints: [
          "Find the LCD of 3 and 4. LCD = 12.",
          "1/3 = 4/12 and 1/4 = 3/12.",
          "4/12 + 3/12 = 7/12."
        ],
        explanation: [
          "LCD(3, 4) = 12",
          "1/3 + 1/4 = 4/12 + 3/12",
          "= <strong>7/12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">1/2 + 1/6</span>? Give the numerator when the answer is written over 6.',
        answer: "4",
        hints: [
          "Convert 1/2 to sixths: 1/2 = 3/6.",
          "Now add: 3/6 + 1/6 = 4/6.",
          "Numerator = 4. (The simplified answer is 2/3.)"
        ],
        explanation: [
          "1/2 = 3/6",
          "3/6 + 1/6 = 4/6 = 2/3",
          "Numerator over 6 is <strong>4</strong>."
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──
    challenge: [
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">3/4 − 1/6</span>?',
        choices: ["7/12", "2/10", "1/2", "11/12"],
        answer: "7/12",
        hints: [
          "LCD of 4 and 6 is 12.",
          "3/4 = 9/12 and 1/6 = 2/12.",
          "9/12 − 2/12 = 7/12."
        ],
        explanation: [
          "3/4 − 1/6 = 9/12 − 2/12",
          "= <strong>7/12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">5/6 − 1/4</span>? Give the numerator when written over the LCD.',
        answer: "7",
        hints: [
          "LCD of 6 and 4 is 12.",
          "5/6 = 10/12 and 1/4 = 3/12.",
          "10/12 − 3/12 = 7/12. Numerator = 7."
        ],
        explanation: [
          "LCD(6, 4) = 12",
          "5/6 − 1/4 = 10/12 − 3/12 = 7/12",
          "The numerator is <strong>7</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">2/3 × 3/5</span> in simplest form?',
        choices: ["2/5", "6/15", "1/3", "6/8"],
        answer: "2/5",
        hints: [
          "Multiply numerators: 2 × 3 = 6. Multiply denominators: 3 × 5 = 15.",
          "6/15 — simplify by dividing both by GCD(6,15) = 3.",
          "6÷3 = 2, 15÷3 = 5. Answer: 2/5."
        ],
        explanation: [
          "2/3 × 3/5 = 6/15",
          "GCD(6, 15) = 3",
          "6/15 = <strong>2/5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">4/7 × 7/8</span>? Give the answer as a simplified fraction — what is the denominator?',
        answer: "2",
        hints: [
          "Multiply: (4 × 7)/(7 × 8) = 28/56.",
          "Notice you can cancel the 7s first: 4/8 = 1/2.",
          "Denominator = 2."
        ],
        explanation: [
          "4/7 × 7/8 — the 7s cancel",
          "= 4/8 = 1/2",
          "Denominator is <strong>2</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">3/4 ÷ 1/2</span>?',
        choices: ["3/8", "3/2", "6/4", "1/2"],
        answer: "3/2",
        hints: [
          "Dividing by a fraction means multiplying by its reciprocal.",
          "3/4 ÷ 1/2 = 3/4 × 2/1.",
          "= 6/4 = 3/2."
        ],
        explanation: [
          "3/4 ÷ 1/2 = 3/4 × 2/1",
          "= 6/4 = <strong>3/2</strong> (or 1 1/2)"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">5/6 ÷ 5/3</span>? Give the answer as a simplified fraction — what is the denominator?',
        answer: "2",
        hints: [
          "Flip the second fraction and multiply: 5/6 × 3/5.",
          "The 5s cancel: 1/6 × 3/1 = 3/6.",
          "3/6 = 1/2. Denominator = 2."
        ],
        explanation: [
          "5/6 ÷ 5/3 = 5/6 × 3/5",
          "= 15/30 = 1/2",
          "Denominator is <strong>2</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">2/3 ÷ 4/9</span>?',
        choices: ["3/2", "8/27", "6/4", "1/6"],
        answer: "3/2",
        hints: [
          "Flip the second fraction: 2/3 × 9/4.",
          "Multiply: 18/12.",
          "Simplify: 18/12 = 3/2."
        ],
        explanation: [
          "2/3 ÷ 4/9 = 2/3 × 9/4",
          "= 18/12 = <strong>3/2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Compute <span class="math">1/2 + 2/3 + 1/4</span>. Give the numerator when written over 12.',
        answer: "17",
        hints: [
          "LCD = 12. Convert each: 1/2 = 6/12, 2/3 = 8/12, 1/4 = 3/12.",
          "Add the numerators: 6 + 8 + 3 = 17.",
          "Sum = 17/12."
        ],
        explanation: [
          "1/2 + 2/3 + 1/4 = 6/12 + 8/12 + 3/12",
          "= 17/12 (or 1 5/12)",
          "Numerator is <strong>17</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which is larger: <span class="math">3/7</span> or <span class="math">2/5</span>?',
        choices: ["3/7", "2/5", "They are equal"],
        answer: "3/7",
        hints: [
          "Cross-multiply to compare: 3 × 5 vs 2 × 7.",
          "15 vs 14.",
          "15 > 14, so 3/7 > 2/5."
        ],
        explanation: [
          "Cross-multiply: 3 × 5 = 15, 2 × 7 = 14",
          "15 > 14, so <strong>3/7</strong> is larger."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Put in order from smallest to largest: <span class="math">1/2, 1/3, 2/5</span>.',
        choices: ["1/3, 2/5, 1/2", "2/5, 1/3, 1/2", "1/2, 2/5, 1/3", "1/3, 1/2, 2/5"],
        answer: "1/3, 2/5, 1/2",
        hints: [
          "Convert to a common denominator. LCD(2,3,5) = 30.",
          "1/2 = 15/30, 1/3 = 10/30, 2/5 = 12/30.",
          "Order: 10/30 < 12/30 < 15/30, so 1/3 < 2/5 < 1/2."
        ],
        explanation: [
          "LCD = 30: 1/2 = 15/30, 1/3 = 10/30, 2/5 = 12/30",
          "Smallest to largest: 10, 12, 15",
          "<strong>1/3, 2/5, 1/2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A pizza is cut into 8 slices. You eat <span class="math">3/8</span> and your friend eats <span class="math">2/8</span>. What fraction of the pizza is left? Give the numerator.',
        answer: "3",
        hints: [
          "Total eaten: 3/8 + 2/8 = 5/8.",
          "Left: 8/8 − 5/8 = 3/8.",
          "Numerator = 3."
        ],
        explanation: [
          "Eaten: 3/8 + 2/8 = 5/8",
          "Left: 1 − 5/8 = 3/8",
          "Numerator is <strong>3</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A bag has 24 marbles. If <span class="math">3/8</span> are red, how many red marbles are there?',
        choices: ["6", "8", "9", "12"],
        answer: "9",
        hints: [
          "Multiply 24 by 3/8.",
          "24 × 3/8 = 72/8.",
          "72 ÷ 8 = 9."
        ],
        explanation: [
          "3/8 of 24 = 24 × 3/8",
          "= 72/8 = <strong>9</strong> red marbles"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A ribbon is <span class="math">3/4</span> of a meter long. If you cut off <span class="math">1/3</span> of a meter, how many twelfths of a meter remain?',
        answer: "5",
        hints: [
          "3/4 − 1/3. LCD = 12.",
          "3/4 = 9/12 and 1/3 = 4/12.",
          "9/12 − 4/12 = 5/12."
        ],
        explanation: [
          "3/4 − 1/3 = 9/12 − 4/12",
          "= 5/12 of a meter",
          "That is <strong>5</strong> twelfths."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Sam ran <span class="math">2 1/2</span> miles on Monday and <span class="math">1 3/4</span> miles on Tuesday. How far did he run in total?',
        choices: ["3 1/4", "4 1/4", "3 3/4", "4 3/4"],
        answer: "4 1/4",
        hints: [
          "Add whole parts: 2 + 1 = 3.",
          "Add fraction parts: 1/2 + 3/4 = 2/4 + 3/4 = 5/4 = 1 1/4.",
          "Total: 3 + 1 1/4 = 4 1/4."
        ],
        explanation: [
          "Whole parts: 2 + 1 = 3",
          "Fractions: 1/2 + 3/4 = 2/4 + 3/4 = 5/4 = 1 1/4",
          "Total: 3 + 1 1/4 = <strong>4 1/4</strong> miles"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A recipe needs <span class="math">2/3</span> cup of sugar. If you want to make half the recipe, how many cups of sugar do you need? Give the numerator of the simplified fraction.',
        answer: "1",
        hints: [
          "Half of 2/3 means 1/2 × 2/3.",
          "Multiply: (1 × 2)/(2 × 3) = 2/6.",
          "Simplify: 2/6 = 1/3. Numerator = 1."
        ],
        explanation: [
          "1/2 × 2/3 = 2/6 = 1/3",
          "Numerator is <strong>1</strong>."
        ]
      }
    ],

    // ── Boss (10 problems, difficulty 3-4) ──
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">5/6 − 3/8</span>? Give the numerator when written in lowest terms.',
        answer: "11",
        hints: [
          "LCD of 6 and 8 is 24.",
          "5/6 = 20/24, 3/8 = 9/24.",
          "20/24 − 9/24 = 11/24. Already in lowest terms."
        ],
        explanation: [
          "LCD = 24",
          "5/6 − 3/8 = 20/24 − 9/24 = 11/24",
          "Numerator = <strong>11</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">4/5 ÷ 2/3</span>?',
        choices: ["6/5", "8/15", "2/5", "12/10"],
        answer: "6/5",
        hints: [
          "Flip the second fraction and multiply.",
          "4/5 × 3/2 = 12/10.",
          "Simplify: 12/10 = 6/5."
        ],
        explanation: [
          "4/5 ÷ 2/3 = 4/5 × 3/2",
          "= 12/10 = <strong>6/5</strong> (or 1 1/5)"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'If <span class="math">x/3 + x/4 = 7</span>, what is x?',
        answer: "12",
        hints: [
          "Find LCD of 3 and 4: LCD = 12.",
          "x/3 = 4x/12 and x/4 = 3x/12, so 4x/12 + 3x/12 = 7.",
          "7x/12 = 7, so 7x = 84, x = 12."
        ],
        explanation: [
          "LCD = 12: 4x/12 + 3x/12 = 7",
          "7x/12 = 7",
          "7x = 84",
          "x = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What fraction of 60 is 45?',
        choices: ["3/4", "2/3", "4/5", "5/6"],
        answer: "3/4",
        hints: [
          "Write as a fraction: 45/60.",
          "Simplify: GCD(45, 60) = 15.",
          "45÷15 = 3, 60÷15 = 4. So 45/60 = 3/4."
        ],
        explanation: [
          "45/60 = (45÷15)/(60÷15)",
          "= <strong>3/4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Compute <span class="math">(2/3)²</span>. What is the denominator of the result?',
        answer: "9",
        hints: [
          "Square both the numerator and denominator.",
          "2² = 4, 3² = 9.",
          "(2/3)² = 4/9. Denominator = 9."
        ],
        explanation: [
          "(2/3)² = 2²/3² = 4/9",
          "Denominator = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">1/2</span> of <span class="math">3/4</span> of 40?',
        choices: ["10", "15", "20", "30"],
        answer: "15",
        hints: [
          "Work from right to left: 3/4 of 40 = 30.",
          "Then 1/2 of 30 = 15.",
          "Or compute: 1/2 × 3/4 × 40 = 3/8 × 40 = 120/8 = 15."
        ],
        explanation: [
          "3/4 of 40 = 30",
          "1/2 of 30 = <strong>15</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A tank is <span class="math">2/5</span> full. After adding 12 liters, it is <span class="math">4/5</span> full. How many liters does the full tank hold?',
        answer: "30",
        hints: [
          "The 12 liters filled 4/5 − 2/5 = 2/5 of the tank.",
          "So 2/5 of the tank = 12 liters.",
          "Full tank = 12 ÷ (2/5) = 12 × 5/2 = 30."
        ],
        explanation: [
          "4/5 − 2/5 = 2/5 of the tank = 12 liters",
          "1/5 of tank = 6 liters",
          "Full tank = 5 × 6 = <strong>30</strong> liters"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'If <span class="math">3/4</span> of a number is 18, what is <span class="math">2/3</span> of that number?',
        choices: ["12", "16", "18", "24"],
        answer: "16",
        hints: [
          "First find the number: 3/4 × n = 18, so n = 18 × 4/3 = 24.",
          "Now find 2/3 of 24.",
          "2/3 × 24 = 48/3 = 16."
        ],
        explanation: [
          "3/4 × n = 18 → n = 18 × 4/3 = 24",
          "2/3 × 24 = 48/3 = <strong>16</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Tom read <span class="math">1/3</span> of a book on Monday and <span class="math">1/4</span> on Tuesday. What fraction is left? Give the numerator when written over 12.',
        answer: "5",
        hints: [
          "Total read: 1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
          "Left: 12/12 − 7/12 = 5/12.",
          "Numerator = 5."
        ],
        explanation: [
          "Read: 1/3 + 1/4 = 4/12 + 3/12 = 7/12",
          "Left: 1 − 7/12 = 5/12",
          "Numerator is <strong>5</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Compute <span class="math">3/5 + 1/4 − 1/2</span>. Give the numerator when written over 20.',
        answer: "7",
        hints: [
          "LCD = 20. Convert: 3/5 = 12/20, 1/4 = 5/20, 1/2 = 10/20.",
          "12/20 + 5/20 − 10/20 = 7/20.",
          "Numerator = 7."
        ],
        explanation: [
          "LCD = 20",
          "3/5 + 1/4 − 1/2 = 12/20 + 5/20 − 10/20",
          "= 7/20",
          "Numerator is <strong>7</strong>."
        ]
      },
      // ── 20 additional boss questions ──
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">7/8 − 2/5</span>? Give the numerator when written over the LCD.',
        answer: "19",
        hints: [
          "LCD of 8 and 5 is 40.",
          "7/8 = 35/40 and 2/5 = 16/40.",
          "35/40 − 16/40 = 19/40."
        ],
        explanation: [
          "LCD = 40",
          "7/8 − 2/5 = 35/40 − 16/40 = 19/40",
          "Numerator is <strong>19</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">3/7 \\times 14/9</span> in simplest form?',
        choices: ["2/3", "6/7", "42/63", "14/21"],
        answer: "2/3",
        hints: [
          "Multiply: (3 × 14)/(7 × 9) = 42/63.",
          "Cancel before multiplying: 3 and 9 share factor 3; 14 and 7 share factor 7.",
          "= (1 × 2)/(1 × 3) = 2/3."
        ],
        explanation: [
          "3/7 × 14/9 — cancel: 3/9 = 1/3, 14/7 = 2",
          "= 1/3 × 2/1 = 2/3",
          "= <strong>2/3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">3\\frac{2}{3} + 2\\frac{3}{4}</span>? Give the numerator of the fractional part when over 12.',
        answer: "5",
        hints: [
          "Add whole parts: 3 + 2 = 5.",
          "Add fractions: 2/3 + 3/4. LCD = 12: 8/12 + 9/12 = 17/12 = 1 5/12.",
          "Total = 5 + 1 5/12 = 6 5/12. Fractional numerator = 5."
        ],
        explanation: [
          "Whole parts: 3 + 2 = 5",
          "Fractions: 2/3 + 3/4 = 8/12 + 9/12 = 17/12 = 1 5/12",
          "Total = 6 5/12. Fractional numerator is <strong>5</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">5/9 \\div 10/27</span> in simplest form?',
        choices: ["3/2", "2/3", "50/243", "27/18"],
        answer: "3/2",
        hints: [
          "Flip and multiply: 5/9 × 27/10.",
          "Cancel: 5 and 10 share 5 → 1/9 × 27/2.",
          "9 and 27 share 9 → 1/1 × 3/2 = 3/2."
        ],
        explanation: [
          "5/9 ÷ 10/27 = 5/9 × 27/10",
          "Cancel common factors: 5→1, 10→2, 27→3, 9→1",
          "= <strong>3/2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'If <span class="math">\\frac{x}{5} − \\frac{x}{8} = 3</span>, what is x?',
        answer: "40",
        hints: [
          "LCD of 5 and 8 is 40.",
          "8x/40 − 5x/40 = 3 → 3x/40 = 3.",
          "3x = 120, so x = 40."
        ],
        explanation: [
          "LCD = 40: 8x/40 − 5x/40 = 3",
          "3x/40 = 3 → 3x = 120",
          "x = <strong>40</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">\\frac{2}{3}</span> of <span class="math">\\frac{5}{7}</span> of 42?',
        choices: ["15", "20", "24", "28"],
        answer: "20",
        hints: [
          "Work from right: 5/7 of 42 = 5 × 42/7 = 210/7 = 30.",
          "Then 2/3 of 30 = 2 × 30/3 = 60/3 = 20.",
          "Or multiply all: 2/3 × 5/7 × 42 = 420/21 = 20."
        ],
        explanation: [
          "5/7 of 42 = 30",
          "2/3 of 30 = 20",
          "Answer: <strong>20</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">1\\frac{1}{2} \\times 2\\frac{2}{3}</span>? Give a whole number.',
        answer: "4",
        hints: [
          "Convert to improper fractions: 1 1/2 = 3/2 and 2 2/3 = 8/3.",
          "Multiply: 3/2 × 8/3 = 24/6.",
          "Simplify: 24/6 = 4."
        ],
        explanation: [
          "1 1/2 = 3/2, 2 2/3 = 8/3",
          "3/2 × 8/3 = 24/6",
          "= <strong>4</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A pool is <span class="math">3/7</span> full. After draining 6 liters, it is <span class="math">1/7</span> full. What is the pool\'s capacity in liters?',
        choices: ["14", "18", "21", "28"],
        answer: "21",
        hints: [
          "The 6 liters drained = 3/7 − 1/7 = 2/7 of the pool.",
          "So 2/7 of the capacity = 6 liters.",
          "Capacity = 6 × 7/2 = 21 liters."
        ],
        explanation: [
          "3/7 − 1/7 = 2/7 of pool = 6 liters",
          "1/7 = 3 liters",
          "Full pool = 7 × 3 = <strong>21</strong> liters"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Compute <span class="math">(3/4)² + (1/2)²</span>. Give the numerator when written over 16.',
        answer: "13",
        hints: [
          "(3/4)² = 9/16 and (1/2)² = 1/4 = 4/16.",
          "Add: 9/16 + 4/16 = 13/16.",
          "Numerator = 13."
        ],
        explanation: [
          "(3/4)² = 9/16, (1/2)² = 1/4 = 4/16",
          "9/16 + 4/16 = 13/16",
          "Numerator is <strong>13</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">7/12 + 5/8</span> as a mixed number?',
        choices: ["1 5/24", "1 1/4", "1 7/24", "29/24"],
        answer: "1 5/24",
        hints: [
          "LCD of 12 and 8 is 24.",
          "7/12 = 14/24 and 5/8 = 15/24.",
          "14/24 + 15/24 = 29/24 = 1 5/24."
        ],
        explanation: [
          "LCD = 24: 7/12 = 14/24, 5/8 = 15/24",
          "14/24 + 15/24 = 29/24",
          "= <strong>1 5/24</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'If <span class="math">\\frac{2}{5}</span> of a number equals <span class="math">\\frac{3}{4}</span> of 24, what is the number?',
        answer: "45",
        hints: [
          "First: 3/4 of 24 = 18.",
          "So 2/5 × n = 18.",
          "n = 18 × 5/2 = 90/2 = 45."
        ],
        explanation: [
          "3/4 × 24 = 18",
          "2/5 × n = 18 → n = 18 × 5/2",
          "n = <strong>45</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">5\\frac{1}{3} − 2\\frac{3}{4}</span>?',
        choices: ["2 7/12", "3 1/12", "2 5/12", "3 7/12"],
        answer: "2 7/12",
        hints: [
          "Convert: 5 1/3 = 16/3 and 2 3/4 = 11/4.",
          "LCD = 12: 16/3 = 64/12 and 11/4 = 33/12.",
          "64/12 − 33/12 = 31/12 = 2 7/12."
        ],
        explanation: [
          "16/3 − 11/4 = 64/12 − 33/12",
          "= 31/12",
          "= <strong>2 7/12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'What is <span class="math">1 \\div (\\frac{3}{4} + \\frac{1}{6})</span>? Give the denominator of the simplified fraction.',
        answer: "11",
        hints: [
          "First add: 3/4 + 1/6. LCD = 12: 9/12 + 2/12 = 11/12.",
          "Now divide: 1 ÷ 11/12 = 1 × 12/11 = 12/11.",
          "Denominator = 11."
        ],
        explanation: [
          "3/4 + 1/6 = 9/12 + 2/12 = 11/12",
          "1 ÷ 11/12 = 12/11",
          "Denominator is <strong>11</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Which is larger: <span class="math">5/7</span> or <span class="math">7/10</span>?',
        choices: ["5/7", "7/10", "They are equal"],
        answer: "5/7",
        hints: [
          "Cross-multiply to compare: 5 × 10 = 50 and 7 × 7 = 49.",
          "50 > 49.",
          "So 5/7 > 7/10."
        ],
        explanation: [
          "Cross-multiply: 5 × 10 = 50, 7 × 7 = 49",
          "50 > 49, so 5/7 > 7/10",
          "<strong>5/7</strong> is larger."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A jar is <span class="math">5/8</span> full of marbles. After removing 15 marbles, it is <span class="math">1/4</span> full. How many marbles does the full jar hold?',
        answer: "40",
        hints: [
          "The 15 marbles removed = 5/8 − 1/4 = 5/8 − 2/8 = 3/8 of the jar.",
          "So 3/8 of the total = 15.",
          "Total = 15 × 8/3 = 40."
        ],
        explanation: [
          "5/8 − 1/4 = 5/8 − 2/8 = 3/8 of the jar = 15 marbles",
          "1/8 of jar = 5 marbles",
          "Full jar = 8 × 5 = <strong>40</strong> marbles"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">2\\frac{1}{4} \\div \\frac{3}{8}</span>?',
        choices: ["4", "5", "6", "8"],
        answer: "6",
        hints: [
          "Convert: 2 1/4 = 9/4.",
          "Flip and multiply: 9/4 × 8/3 = 72/12.",
          "Simplify: 72/12 = 6."
        ],
        explanation: [
          "2 1/4 = 9/4",
          "9/4 ÷ 3/8 = 9/4 × 8/3 = 72/12",
          "= <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Three friends share a pizza. Alex eats <span class="math">1/3</span>, Ben eats <span class="math">1/4</span>, Chris eats <span class="math">1/5</span>. What numerator represents the fraction left (over 60)?',
        answer: "13",
        hints: [
          "LCD = 60. Total eaten: 1/3 + 1/4 + 1/5 = 20/60 + 15/60 + 12/60 = 47/60.",
          "Left: 60/60 − 47/60 = 13/60.",
          "Numerator = 13."
        ],
        explanation: [
          "Eaten: 1/3+1/4+1/5 = 20/60+15/60+12/60 = 47/60",
          "Left: 60/60 − 47/60 = 13/60",
          "Numerator is <strong>13</strong>."
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">(\\frac{3}{5})^2 \\times \\frac{5}{3}</span> in simplest form?',
        choices: ["3/5", "9/15", "1/3", "5/3"],
        answer: "3/5",
        hints: [
          "(3/5)² = 9/25.",
          "9/25 × 5/3 = 45/75.",
          "Simplify: GCD(45,75) = 15. 45/75 = 3/5."
        ],
        explanation: [
          "(3/5)² = 9/25",
          "9/25 × 5/3 = 45/75",
          "GCD(45,75)=15 → 45/75 = <strong>3/5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">48/72</span> to lowest terms. What is the numerator?',
        answer: "2",
        hints: [
          "Find GCD(48, 72). Both divisible by 24.",
          "48 ÷ 24 = 2, 72 ÷ 24 = 3.",
          "48/72 = 2/3. Numerator = 2."
        ],
        explanation: [
          "GCD(48, 72) = 24",
          "48/72 = (48÷24)/(72÷24) = 2/3",
          "Numerator is <strong>2</strong>."
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Emma spent <span class="math">1/4</span> of her money on books and <span class="math">2/5</span> on clothes. She saved the remaining $21. How much money did she start with?',
        choices: ["$40", "$48", "$56", "$60"],
        answer: "$60",
        hints: [
          "Fraction spent: 1/4 + 2/5 = 5/20 + 8/20 = 13/20.",
          "Fraction saved: 1 − 13/20 = 7/20.",
          "7/20 × total = $21 → total = 21 × 20/7 = $60."
        ],
        explanation: [
          "Spent: 1/4 + 2/5 = 5/20 + 8/20 = 13/20",
          "Saved: 7/20 of total = $21",
          "Total = 21 × 20/7 = <strong>$60</strong>"
        ]
      }
    ]
  }
};

// ============================================================
// WORLD 4 — Equation Castle
// Chapter: Equations & Inequalities
// ============================================================
WORLDS[4] = {
  id: 4, name: "Equation Castle", icon: "🏰",
  chapter: "Equations & Inequalities", color: "#9b59b6",
  bossName: "Equalis, the Balance Titan",
  bossDesc: "A giant scale creature demanding perfect balance",
  pool: {
    // ── Tutorial (15 problems, difficulty 1-2) ──
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'Solve for x: <span class="math">x + 5 = 12</span>',
        answer: "7",
        hints: [
          "To get x alone, subtract 5 from both sides.",
          "x = 12 − 5.",
          "x = 7."
        ],
        explanation: [
          "x + 5 = 12",
          "x = 12 − 5 = <strong>7</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Solve for x: <span class="math">x − 8 = 15</span>',
        answer: "23",
        hints: [
          "Add 8 to both sides.",
          "x = 15 + 8.",
          "x = 23."
        ],
        explanation: [
          "x − 8 = 15",
          "x = 15 + 8 = <strong>23</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Solve for x: <span class="math">3x = 18</span>',
        answer: "6",
        hints: [
          "Divide both sides by 3.",
          "x = 18 ÷ 3.",
          "x = 6."
        ],
        explanation: [
          "3x = 18",
          "x = 18/3 = <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Solve for x: <span class="math">x / 4 = 9</span>',
        answer: "36",
        hints: [
          "Multiply both sides by 4.",
          "x = 9 × 4.",
          "x = 36."
        ],
        explanation: [
          "x/4 = 9",
          "x = 9 × 4 = <strong>36</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which value of x satisfies <span class="math">x + 9 = 20</span>?',
        choices: ["9", "11", "20", "29"],
        answer: "11",
        hints: [
          "Subtract 9 from both sides.",
          "x = 20 − 9.",
          "x = 11."
        ],
        explanation: [
          "x + 9 = 20",
          "x = 20 − 9 = <strong>11</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Simplify the expression: <span class="math">3a + 5a</span>',
        choices: ["8a", "15a", "8a²", "35a"],
        answer: "8a",
        hints: [
          "These are like terms — same variable.",
          "Add the coefficients: 3 + 5 = 8.",
          "3a + 5a = 8a."
        ],
        explanation: [
          "3a + 5a = (3+5)a = <strong>8a</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Simplify: <span class="math">7y − 2y + 3y</span>',
        choices: ["8y", "12y", "2y", "6y"],
        answer: "8y",
        hints: [
          "Combine like terms: 7 − 2 + 3 = ?",
          "7 − 2 = 5, then 5 + 3 = 8.",
          "= 8y."
        ],
        explanation: [
          "7y − 2y + 3y = (7 − 2 + 3)y",
          "= <strong>8y</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Solve for x: <span class="math">5x = 35</span>',
        answer: "7",
        hints: [
          "Divide both sides by 5.",
          "x = 35 ÷ 5.",
          "x = 7."
        ],
        explanation: [
          "5x = 35",
          "x = 35/5 = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Solve for n: <span class="math">n/6 = 7</span>',
        choices: ["42", "36", "13", "1"],
        answer: "42",
        hints: [
          "Multiply both sides by 6.",
          "n = 7 × 6.",
          "n = 42."
        ],
        explanation: [
          "n/6 = 7",
          "n = 7 × 6 = <strong>42</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Solve for x: <span class="math">x − 14 = 23</span>',
        answer: "37",
        hints: [
          "Add 14 to both sides.",
          "x = 23 + 14.",
          "x = 37."
        ],
        explanation: [
          "x − 14 = 23",
          "x = 23 + 14 = <strong>37</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Simplify: <span class="math">4(x + 3)</span>',
        choices: ["4x + 3", "4x + 12", "4x + 7", "x + 12"],
        answer: "4x + 12",
        hints: [
          "Use the distributive property: multiply 4 by each term inside.",
          "4 × x = 4x and 4 × 3 = 12.",
          "4(x + 3) = 4x + 12."
        ],
        explanation: [
          "4(x + 3) = 4·x + 4·3",
          "= <strong>4x + 12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Simplify: <span class="math">2(3x + 5) − 4x</span>. What is the coefficient of x?',
        answer: "2",
        hints: [
          "Distribute first: 2(3x + 5) = 6x + 10.",
          "Then subtract 4x: 6x + 10 − 4x = 2x + 10.",
          "The coefficient of x is 2."
        ],
        explanation: [
          "2(3x + 5) = 6x + 10",
          "6x + 10 − 4x = 2x + 10",
          "Coefficient of x is <strong>2</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which expression equals <span class="math">3(2a − 4)</span>?',
        choices: ["6a − 12", "6a − 4", "5a − 7", "6a + 12"],
        answer: "6a − 12",
        hints: [
          "Distribute the 3 to both terms.",
          "3 × 2a = 6a and 3 × (−4) = −12.",
          "= 6a − 12."
        ],
        explanation: [
          "3(2a − 4) = 3·2a + 3·(−4)",
          "= <strong>6a − 12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Solve for x: <span class="math">x + x + x = 27</span>',
        answer: "9",
        hints: [
          "Combine: x + x + x = 3x.",
          "3x = 27.",
          "x = 27 ÷ 3 = 9."
        ],
        explanation: [
          "x + x + x = 3x",
          "3x = 27",
          "x = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is the value of <span class="math">2x + 3</span> when <span class="math">x = 4</span>?',
        choices: ["8", "10", "11", "14"],
        answer: "11",
        hints: [
          "Substitute x = 4 into the expression.",
          "2(4) + 3 = 8 + 3.",
          "= 11."
        ],
        explanation: [
          "2x + 3 = 2(4) + 3",
          "= 8 + 3 = <strong>11</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'Solve: <span class="math">2x + 7 = 19</span>',
        answer: "6",
        hints: [
          "Subtract 7 from both sides: 2x = 12.",
          "Divide by 2: x = 6.",
          "Check: 2(6) + 7 = 19 ✓"
        ],
        explanation: [
          "2x + 7 = 19",
          "2x = 12",
          "x = <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Solve: <span class="math">3x − 4 = 17</span>',
        answer: "7",
        hints: [
          "Add 4 to both sides: 3x = 21.",
          "Divide by 3: x = 7.",
          "Check: 3(7) − 4 = 17 ✓"
        ],
        explanation: [
          "3x − 4 = 17",
          "3x = 21",
          "x = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Solve: <span class="math">4x + 1 = 25</span>',
        choices: ["4", "5", "6", "7"],
        answer: "6",
        hints: [
          "Subtract 1: 4x = 24.",
          "Divide by 4: x = 6.",
          "Check: 4(6) + 1 = 25 ✓"
        ],
        explanation: [
          "4x + 1 = 25",
          "4x = 24",
          "x = <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">3(x + 2) = 21</span>',
        answer: "5",
        hints: [
          "Distribute: 3x + 6 = 21.",
          "Subtract 6: 3x = 15.",
          "Divide by 3: x = 5."
        ],
        explanation: [
          "3(x + 2) = 21",
          "3x + 6 = 21",
          "3x = 15",
          "x = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve: <span class="math">2(x − 5) = 14</span>',
        choices: ["7", "10", "12", "14"],
        answer: "12",
        hints: [
          "Distribute: 2x − 10 = 14.",
          "Add 10: 2x = 24.",
          "Divide by 2: x = 12."
        ],
        explanation: [
          "2(x − 5) = 14",
          "2x − 10 = 14",
          "2x = 24",
          "x = <strong>12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">5x − 3 = 2x + 9</span>',
        answer: "4",
        hints: [
          "Move x terms to one side: 5x − 2x = 9 + 3.",
          "3x = 12.",
          "x = 4."
        ],
        explanation: [
          "5x − 3 = 2x + 9",
          "3x = 12",
          "x = <strong>4</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve: <span class="math">7x + 2 = 4x + 14</span>',
        choices: ["2", "3", "4", "6"],
        answer: "4",
        hints: [
          "Subtract 4x from both sides: 3x + 2 = 14.",
          "Subtract 2: 3x = 12.",
          "x = 4."
        ],
        explanation: [
          "7x + 2 = 4x + 14",
          "3x + 2 = 14",
          "3x = 12",
          "x = <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">6x − 10 = 3x + 5</span>',
        answer: "5",
        hints: [
          "Subtract 3x: 3x − 10 = 5.",
          "Add 10: 3x = 15.",
          "x = 5."
        ],
        explanation: [
          "6x − 10 = 3x + 5",
          "3x = 15",
          "x = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which inequality is true when <span class="math">x = 5</span>?',
        choices: ["2x > 11", "3x < 14", "x + 7 > 10", "4x < 15"],
        answer: "x + 7 > 10",
        hints: [
          "Plug in x = 5 to each choice.",
          "2(5) = 10. Is 10 > 11? No. 3(5) = 15. Is 15 < 14? No.",
          "5 + 7 = 12. Is 12 > 10? Yes!"
        ],
        explanation: [
          "2(5) = 10, not > 11 ✗",
          "3(5) = 15, not < 14 ✗",
          "5 + 7 = 12 > 10 ✓",
          "<strong>x + 7 > 10</strong> is true when x = 5."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'I think of a number. I double it and add 5. The result is 23. What is my number?',
        answer: "9",
        hints: [
          "Write as an equation: 2x + 5 = 23.",
          "2x = 18.",
          "x = 9."
        ],
        explanation: [
          "2x + 5 = 23",
          "2x = 18",
          "x = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'I think of a number, multiply by 3, and subtract 7. The answer is 20. What is my number?',
        choices: ["7", "8", "9", "10"],
        answer: "9",
        hints: [
          "Equation: 3x − 7 = 20.",
          "3x = 27.",
          "x = 9."
        ],
        explanation: [
          "3x − 7 = 20",
          "3x = 27",
          "x = <strong>9</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Five more than twice a number equals 31. What is the number?',
        answer: "13",
        hints: [
          "Write as equation: 2x + 5 = 31.",
          "2x = 26.",
          "x = 13."
        ],
        explanation: [
          "2x + 5 = 31",
          "2x = 26",
          "x = <strong>13</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve: <span class="math">5(x + 1) − 2x = 20</span>',
        choices: ["3", "4", "5", "6"],
        answer: "5",
        hints: [
          "Distribute: 5x + 5 − 2x = 20.",
          "Combine: 3x + 5 = 20.",
          "3x = 15, x = 5."
        ],
        explanation: [
          "5(x + 1) − 2x = 20",
          "5x + 5 − 2x = 20",
          "3x + 5 = 20 → 3x = 15",
          "x = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A number is tripled, then 10 is subtracted. The result is the same as adding 8 to the number. What is the number?',
        answer: "9",
        hints: [
          "Equation: 3x − 10 = x + 8.",
          "2x = 18.",
          "x = 9."
        ],
        explanation: [
          "3x − 10 = x + 8",
          "2x = 18",
          "x = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the smallest whole number x such that <span class="math">3x + 1 > 10</span>?',
        choices: ["2", "3", "4", "5"],
        answer: "4",
        hints: [
          "Solve the inequality: 3x > 9.",
          "x > 3.",
          "The smallest whole number greater than 3 is 4."
        ],
        explanation: [
          "3x + 1 > 10",
          "3x > 9",
          "x > 3",
          "Smallest whole number: <strong>4</strong>"
        ]
      }
    ],

    // ── Boss (10 problems, difficulty 3-4) ──
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">4(x − 3) + 2 = 22</span>',
        answer: "8",
        hints: [
          "Distribute: 4x − 12 + 2 = 22.",
          "Combine: 4x − 10 = 22.",
          "4x = 32, x = 8."
        ],
        explanation: [
          "4x − 12 + 2 = 22",
          "4x − 10 = 22",
          "4x = 32",
          "x = <strong>8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'The sum of three consecutive integers is 72. What is the smallest?',
        answer: "23",
        hints: [
          "Let them be n, n+1, n+2.",
          "n + (n+1) + (n+2) = 72 → 3n + 3 = 72.",
          "3n = 69, n = 23."
        ],
        explanation: [
          "Let the integers be n, n+1, n+2",
          "3n + 3 = 72",
          "3n = 69",
          "n = <strong>23</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'If <span class="math">2x + 3y = 17</span> and <span class="math">y = 3</span>, what is x?',
        choices: ["4", "5", "3", "7"],
        answer: "4",
        hints: [
          "Substitute y = 3: 2x + 3(3) = 17.",
          "2x + 9 = 17.",
          "2x = 8, x = 4."
        ],
        explanation: [
          "2x + 3(3) = 17",
          "2x + 9 = 17",
          "2x = 8",
          "x = <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rectangle\'s length is 3 more than twice its width. The perimeter is 36. What is the width?',
        answer: "5",
        hints: [
          "Let width = w. Then length = 2w + 3.",
          "Perimeter: 2w + 2(2w + 3) = 36 → 2w + 4w + 6 = 36.",
          "6w + 6 = 36, 6w = 30, w = 5."
        ],
        explanation: [
          "Let width = w, length = 2w + 3",
          "2w + 2(2w+3) = 36",
          "6w + 6 = 36 → 6w = 30",
          "w = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Solve: <span class="math">x/2 + x/3 = 10</span>',
        answer: "12",
        hints: [
          "LCD = 6: x/2 = 3x/6 and x/3 = 2x/6.",
          "3x/6 + 2x/6 = 10 → 5x/6 = 10.",
          "5x = 60, x = 12."
        ],
        explanation: [
          "LCD = 6: 3x/6 + 2x/6 = 10",
          "5x/6 = 10",
          "5x = 60",
          "x = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'The sum of two consecutive even integers is 46. What is the larger one?',
        choices: ["22", "23", "24", "26"],
        answer: "24",
        hints: [
          "Let them be n and n + 2 (consecutive evens).",
          "n + (n + 2) = 46 → 2n + 2 = 46.",
          "2n = 44, n = 22. Larger = 24."
        ],
        explanation: [
          "n + (n+2) = 46",
          "2n = 44, n = 22",
          "Larger integer = 22 + 2 = <strong>24</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A triangle has angles measuring <span class="math">x°</span>, <span class="math">2x°</span>, and <span class="math">3x°</span>. What is x?',
        answer: "30",
        hints: [
          "The angles of a triangle add to 180°.",
          "x + 2x + 3x = 180.",
          "6x = 180, x = 30."
        ],
        explanation: [
          "x + 2x + 3x = 180",
          "6x = 180",
          "x = <strong>30</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Lisa has twice as many stickers as Mia. Together they have 36. How many does Lisa have?',
        choices: ["12", "18", "24", "30"],
        answer: "24",
        hints: [
          "Let Mia = m. Then Lisa = 2m.",
          "m + 2m = 36 → 3m = 36.",
          "m = 12, Lisa = 2(12) = 24."
        ],
        explanation: [
          "Mia = m, Lisa = 2m",
          "m + 2m = 36 → 3m = 36 → m = 12",
          "Lisa = 2 × 12 = <strong>24</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Solve: <span class="math">2(3x − 1) = 4(x + 3)</span>',
        answer: "7",
        hints: [
          "Distribute both sides: 6x − 2 = 4x + 12.",
          "Subtract 4x: 2x − 2 = 12.",
          "2x = 14, x = 7."
        ],
        explanation: [
          "6x − 2 = 4x + 12",
          "2x − 2 = 12",
          "2x = 14",
          "x = <strong>7</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A fence around a square garden uses 52 meters of fencing. What is the side length (in meters)?',
        answer: "13",
        hints: [
          "A square has 4 equal sides.",
          "Perimeter = 4s = 52.",
          "s = 52 ÷ 4 = 13."
        ],
        explanation: [
          "Perimeter of square = 4s",
          "4s = 52",
          "s = <strong>13</strong> meters"
        ]
      },
      // ── 20 additional boss questions ──
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">5(2x + 1) − 3(x − 4) = 38</span>',
        answer: "3",
        hints: [
          "Distribute: 10x + 5 − 3x + 12 = 38.",
          "Combine: 7x + 17 = 38.",
          "7x = 21, x = 3."
        ],
        explanation: [
          "10x + 5 − 3x + 12 = 38",
          "7x + 17 = 38 → 7x = 21",
          "x = <strong>3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'The sum of 4 consecutive odd integers is 64. What is the largest?',
        choices: ["15", "17", "19", "21"],
        answer: "19",
        hints: [
          "Let them be n, n+2, n+4, n+6.",
          "4n + 12 = 64 → 4n = 52 → n = 13.",
          "Largest = 13 + 6 = 19."
        ],
        explanation: [
          "n + (n+2) + (n+4) + (n+6) = 64",
          "4n + 12 = 64 → n = 13",
          "Largest = 13 + 6 = <strong>19</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">3(x + 2) − 2(x − 1) = 20</span>',
        answer: "12",
        hints: [
          "Distribute: 3x + 6 − 2x + 2 = 20.",
          "Combine: x + 8 = 20.",
          "x = 12."
        ],
        explanation: [
          "3x + 6 − 2x + 2 = 20",
          "x + 8 = 20",
          "x = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve: <span class="math">2x − 7 &lt; 11</span>. What is the largest whole number x can be?',
        choices: ["7", "8", "9", "10"],
        answer: "8",
        hints: [
          "Add 7: 2x < 18.",
          "Divide by 2: x < 9.",
          "Largest whole number less than 9 is 8."
        ],
        explanation: [
          "2x − 7 < 11",
          "2x < 18 → x < 9",
          "Largest whole number: <strong>8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Tom is 5 years older than Sam. In 3 years, the sum of their ages will be 41. How old is Sam now?',
        answer: "15",
        hints: [
          "Let Sam = s, Tom = s + 5.",
          "In 3 years: (s+3) + (s+8) = 41.",
          "2s + 11 = 41 → 2s = 30 → s = 15."
        ],
        explanation: [
          "Sam now = s, Tom now = s + 5",
          "In 3 years: (s+3) + (s+5+3) = 41",
          "2s + 11 = 41 → s = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'If <span class="math">3x + 4y = 26</span> and <span class="math">x = 2</span>, what is y?',
        choices: ["3", "4", "5", "6"],
        answer: "5",
        hints: [
          "Substitute x = 2: 3(2) + 4y = 26.",
          "6 + 4y = 26 → 4y = 20.",
          "y = 5."
        ],
        explanation: [
          "3(2) + 4y = 26",
          "6 + 4y = 26 → 4y = 20",
          "y = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">7x − (3x + 8) = 20</span>',
        answer: "7",
        hints: [
          "Distribute the negative: 7x − 3x − 8 = 20.",
          "Combine: 4x − 8 = 20.",
          "4x = 28, x = 7."
        ],
        explanation: [
          "7x − 3x − 8 = 20",
          "4x − 8 = 20 → 4x = 28",
          "x = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A taxi charges $3 base fare plus $2.50 per mile. You have $18. What is the maximum number of whole miles you can travel?',
        choices: ["4", "5", "6", "7"],
        answer: "6",
        hints: [
          "Set up: 3 + 2.50m ≤ 18.",
          "2.50m ≤ 15.",
          "m ≤ 6. Maximum whole miles = 6."
        ],
        explanation: [
          "3 + 2.50m ≤ 18",
          "2.50m ≤ 15 → m ≤ 6",
          "Maximum whole miles = <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Solve: <span class="math">\\frac{x+2}{3} + \\frac{x+1}{4} = 5</span>',
        answer: "7",
        hints: [
          "LCD = 12. Multiply through: 4(x+2) + 3(x+1) = 60.",
          "4x + 8 + 3x + 3 = 60.",
          "7x + 11 = 60 → 7x = 49 → x = 7."
        ],
        explanation: [
          "LCD = 12: 4(x+2) + 3(x+1) = 60",
          "7x + 11 = 60 → 7x = 49",
          "x = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve: <span class="math">3x + 5 \\geq 20</span>. What is the smallest whole number x can be?',
        choices: ["4", "5", "6", "7"],
        answer: "5",
        hints: [
          "Subtract 5: 3x ≥ 15.",
          "Divide by 3: x ≥ 5.",
          "Smallest whole number = 5."
        ],
        explanation: [
          "3x + 5 ≥ 20",
          "3x ≥ 15 → x ≥ 5",
          "Smallest whole number: <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: '3 pens and 2 notebooks cost $13. Each notebook costs $2. How much does each pen cost (in dollars)?',
        answer: "3",
        hints: [
          "Let pen = p. Equation: 3p + 2(2) = 13.",
          "3p + 4 = 13.",
          "3p = 9, p = 3."
        ],
        explanation: [
          "3p + 2(2) = 13",
          "3p + 4 = 13 → 3p = 9",
          "p = <strong>$3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'The sum of two numbers is 50 and their difference is 14. What is the larger number?',
        choices: ["28", "30", "32", "36"],
        answer: "32",
        hints: [
          "Let the numbers be x and y: x + y = 50 and x − y = 14.",
          "Add the equations: 2x = 64.",
          "x = 32."
        ],
        explanation: [
          "x + y = 50, x − y = 14",
          "Add: 2x = 64 → x = 32",
          "Larger number = <strong>32</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">2(x + 3) = 3(x − 2)</span>',
        answer: "12",
        hints: [
          "Distribute: 2x + 6 = 3x − 6.",
          "Subtract 2x: 6 = x − 6.",
          "Add 6: x = 12."
        ],
        explanation: [
          "2x + 6 = 3x − 6",
          "6 + 6 = 3x − 2x",
          "x = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Temperature converts by <span class="math">F = \\frac{9C}{5} + 32</span>. If <span class="math">F = 77</span>, what is C?',
        choices: ["20", "25", "30", "35"],
        answer: "25",
        hints: [
          "77 = 9C/5 + 32.",
          "Subtract 32: 45 = 9C/5.",
          "Multiply by 5/9: C = 45 × 5/9 = 25."
        ],
        explanation: [
          "77 − 32 = 45 = 9C/5",
          "45 × 5/9 = 225/9 = 25",
          "C = <strong>25</strong>°"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rectangle\'s length is 4 less than 3 times its width. The perimeter is 40. What is the width?',
        answer: "6",
        hints: [
          "Let width = w. Length = 3w − 4.",
          "Perimeter: 2(3w − 4) + 2w = 40 → 6w − 8 + 2w = 40.",
          "8w = 48, w = 6."
        ],
        explanation: [
          "width = w, length = 3w − 4",
          "2(3w−4) + 2w = 40 → 8w − 8 = 40",
          "8w = 48 → w = <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the smallest integer satisfying <span class="math">2x + 1 > 7</span>?',
        choices: ["2", "3", "4", "5"],
        answer: "4",
        hints: [
          "Subtract 1: 2x > 6.",
          "Divide by 2: x > 3.",
          "Smallest integer greater than 3 is 4."
        ],
        explanation: [
          "2x + 1 > 7",
          "2x > 6 → x > 3",
          "Smallest integer: <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A number is increased by 20% and the result is 42. What was the original number?',
        answer: "35",
        hints: [
          "Increasing by 20% means multiplying by 1.2.",
          "1.2 × n = 42.",
          "n = 42 ÷ 1.2 = 35."
        ],
        explanation: [
          "1.2n = 42",
          "n = 42/1.2 = 42 × 10/12",
          "n = <strong>35</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Ana\'s age doubled plus 5 equals 33. How old is Ana?',
        choices: ["12", "13", "14", "15"],
        answer: "14",
        hints: [
          "Equation: 2a + 5 = 33.",
          "2a = 28.",
          "a = 14."
        ],
        explanation: [
          "2a + 5 = 33",
          "2a = 28",
          "a = <strong>14</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">8x − 3(2x + 4) = 6</span>',
        answer: "9",
        hints: [
          "Distribute: 8x − 6x − 12 = 6.",
          "Combine: 2x − 12 = 6.",
          "2x = 18, x = 9."
        ],
        explanation: [
          "8x − 6x − 12 = 6",
          "2x − 12 = 6 → 2x = 18",
          "x = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A farmer has chickens and cows totaling 20 heads and 56 legs. How many cows are there?',
        choices: ["6", "8", "10", "12"],
        answer: "8",
        hints: [
          "Let cows = c, chickens = k. Then c + k = 20 and 4c + 2k = 56.",
          "Substitute k = 20 − c: 4c + 2(20 − c) = 56.",
          "4c + 40 − 2c = 56 → 2c = 16 → c = 8."
        ],
        explanation: [
          "c + k = 20, 4c + 2k = 56",
          "4c + 2(20−c) = 56 → 2c + 40 = 56",
          "2c = 16 → c = <strong>8</strong> cows"
        ]
      }
    ]
  }
};

// ============================================================
// WORLD 5 — Decimal Desert
// Chapter: Decimals
// ============================================================
WORLDS[5] = {
  id: 5, name: "Decimal Desert", icon: "🏜️",
  chapter: "Decimals", color: "#f39c12",
  bossName: "Decimus, the Point Phantom",
  bossDesc: "A shifting phantom made of floating decimal points",
  pool: {
    // ── Tutorial (15 problems, difficulty 1-2) ──
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">3.7 + 2.5</span>?',
        answer: "6.2",
        hints: [
          "Line up the decimal points.",
          "7 + 5 = 12. Write 2, carry the 1.",
          "3 + 2 + 1 = 6. Answer: 6.2."
        ],
        explanation: [
          "  3.7",
          "+ 2.5",
          "= <strong>6.2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">8.3 − 2.1</span>?',
        answer: "6.2",
        hints: [
          "Line up the decimals.",
          "3 − 1 = 2.",
          "8 − 2 = 6. Answer: 6.2."
        ],
        explanation: [
          "8.3 − 2.1 = <strong>6.2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">5.25 + 3.75</span>?',
        answer: "9",
        hints: [
          "Add hundredths: 5 + 5 = 10. Write 0, carry 1.",
          "Add tenths: 2 + 7 + 1 = 10. Write 0, carry 1.",
          "Add ones: 5 + 3 + 1 = 9. Answer: 9.00 = 9."
        ],
        explanation: [
          "5.25 + 3.75 = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which is larger: <span class="math">0.45</span> or <span class="math">0.405</span>?',
        choices: ["0.45", "0.405", "They are equal"],
        answer: "0.45",
        hints: [
          "Compare digit by digit from left.",
          "Both start 0.4. Next digit: 5 vs 0.",
          "5 > 0, so 0.45 > 0.405."
        ],
        explanation: [
          "0.45 = 0.450",
          "0.450 > 0.405",
          "<strong>0.45</strong> is larger."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which is smaller: <span class="math">0.7</span> or <span class="math">0.68</span>?',
        choices: ["0.7", "0.68", "They are equal"],
        answer: "0.68",
        hints: [
          "Write with the same decimal places: 0.70 vs 0.68.",
          "Compare: 70 hundredths vs 68 hundredths.",
          "68 < 70, so 0.68 is smaller."
        ],
        explanation: [
          "0.7 = 0.70",
          "0.68 < 0.70",
          "<strong>0.68</strong> is smaller."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Round <span class="math">3.467</span> to the nearest tenth.',
        answer: "3.5",
        hints: [
          "The tenths digit is 4.",
          "Look at the hundredths digit: 6 ≥ 5, so round up.",
          "3.467 rounds to 3.5."
        ],
        explanation: [
          "Tenths digit = 4, next digit = 6 ≥ 5",
          "Round up: <strong>3.5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Round <span class="math">7.843</span> to the nearest whole number.',
        choices: ["7", "8", "7.8", "7.9"],
        answer: "8",
        hints: [
          "Look at the tenths digit: 8.",
          "8 ≥ 5, so round up.",
          "7.843 rounds to 8."
        ],
        explanation: [
          "Tenths digit = 8 ≥ 5, so round up",
          "7.843 ≈ <strong>8</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Convert <span class="math">3/4</span> to a decimal.',
        choices: ["0.75", "0.34", "0.6", "0.8"],
        answer: "0.75",
        hints: [
          "Divide 3 by 4.",
          "3 ÷ 4 = 0.75.",
          "Or think: 3/4 = 75/100 = 0.75."
        ],
        explanation: [
          "3 ÷ 4 = <strong>0.75</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Convert <span class="math">1/2</span> to a decimal.',
        answer: "0.5",
        hints: [
          "Divide 1 by 2.",
          "1 ÷ 2 = 0.5.",
          "Half of 1 is 0.5."
        ],
        explanation: [
          "1 ÷ 2 = <strong>0.5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Convert <span class="math">1/5</span> to a decimal.',
        choices: ["0.15", "0.2", "0.5", "0.25"],
        answer: "0.2",
        hints: [
          "Divide 1 by 5.",
          "1 ÷ 5 = 0.2.",
          "Or: 1/5 = 2/10 = 0.2."
        ],
        explanation: [
          "1/5 = 2/10 = <strong>0.2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert <span class="math">0.6</span> to a fraction. Give the numerator in lowest terms.',
        answer: "3",
        hints: [
          "0.6 = 6/10.",
          "Simplify: GCD(6,10) = 2.",
          "6/10 = 3/5. Numerator = 3."
        ],
        explanation: [
          "0.6 = 6/10 = 3/5",
          "Numerator is <strong>3</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">0.6 × 5</span>?',
        answer: "3",
        hints: [
          "Think of it as 6 × 5 = 30.",
          "Place the decimal: one decimal place in 0.6.",
          "3.0 = 3."
        ],
        explanation: [
          "0.6 × 5 = <strong>3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Convert the fraction <span class="math">3/8</span> to a decimal.',
        choices: ["0.375", "0.38", "0.35", "0.325"],
        answer: "0.375",
        hints: [
          "Divide 3 by 8.",
          "3 ÷ 8: 8 into 30 is 3 (rem 6), 8 into 60 is 7 (rem 4), 8 into 40 is 5.",
          "3 ÷ 8 = 0.375."
        ],
        explanation: [
          "3 ÷ 8 = <strong>0.375</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which decimal is equal to <span class="math">7/20</span>?',
        choices: ["0.35", "0.72", "0.37", "0.7"],
        answer: "0.35",
        hints: [
          "Convert to hundredths: 7/20 = 35/100.",
          "35/100 = 0.35.",
          "Or divide: 7 ÷ 20 = 0.35."
        ],
        explanation: [
          "7/20 = 35/100 = <strong>0.35</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">10.5 − 3.75</span>?',
        answer: "6.75",
        hints: [
          "Write 10.5 as 10.50.",
          "10.50 − 3.75: start from the right.",
          "0 − 5: borrow → 10 − 5 = 5. 4 − 7: borrow → 14 − 7 = 7. 9 − 3 = 6. Answer: 6.75."
        ],
        explanation: [
          "10.50 − 3.75 = <strong>6.75</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">2.4 × 0.3</span>?',
        answer: "0.72",
        hints: [
          "Ignore decimals: 24 × 3 = 72.",
          "Count total decimal places: 1 + 1 = 2.",
          "Place decimal: 0.72."
        ],
        explanation: [
          "24 × 3 = 72",
          "Total decimal places = 2",
          "2.4 × 0.3 = <strong>0.72</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">1.5 × 0.4</span>?',
        choices: ["0.06", "0.6", "6", "0.54"],
        answer: "0.6",
        hints: [
          "15 × 4 = 60.",
          "Total decimal places: 1 + 1 = 2.",
          "Place decimal: 0.60 = 0.6."
        ],
        explanation: [
          "15 × 4 = 60",
          "Two decimal places → 0.60",
          "= <strong>0.6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">0.12 × 5</span>?',
        answer: "0.6",
        hints: [
          "12 × 5 = 60.",
          "There are 2 decimal places in 0.12.",
          "Place decimal: 0.60 = 0.6."
        ],
        explanation: [
          "0.12 × 5 = <strong>0.6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">1.2 ÷ 0.4</span>?',
        choices: ["0.3", "3", "0.48", "4.8"],
        answer: "3",
        hints: [
          "Multiply both by 10 to remove decimals: 12 ÷ 4.",
          "12 ÷ 4 = 3.",
          "Check: 3 × 0.4 = 1.2 ✓"
        ],
        explanation: [
          "1.2 ÷ 0.4 = 12 ÷ 4 = <strong>3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">3.6 ÷ 0.9</span>?',
        answer: "4",
        hints: [
          "Multiply both by 10: 36 ÷ 9.",
          "36 ÷ 9 = 4.",
          "Check: 4 × 0.9 = 3.6 ✓"
        ],
        explanation: [
          "3.6 ÷ 0.9 = 36 ÷ 9 = <strong>4</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">4.5 ÷ 1.5</span>?',
        choices: ["2", "3", "0.3", "6.75"],
        answer: "3",
        hints: [
          "Multiply both by 10: 45 ÷ 15.",
          "45 ÷ 15 = 3.",
          "Check: 3 × 1.5 = 4.5 ✓"
        ],
        explanation: [
          "4.5 ÷ 1.5 = 45 ÷ 15 = <strong>3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert <span class="math">7/8</span> to a decimal.',
        answer: "0.875",
        hints: [
          "Divide 7 by 8.",
          "8 into 70 = 8 (rem 6), 8 into 60 = 7 (rem 4), 8 into 40 = 5.",
          "7/8 = 0.875."
        ],
        explanation: [
          "7 ÷ 8 = <strong>0.875</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">0.1̄</span> (0.111...) as a fraction?',
        choices: ["1/9", "1/10", "1/11", "1/8"],
        answer: "1/9",
        hints: [
          "Let x = 0.111...",
          "Then 10x = 1.111...",
          "10x − x = 1 → 9x = 1 → x = 1/9."
        ],
        explanation: [
          "Let x = 0.111...",
          "10x = 1.111..., so 9x = 1",
          "x = <strong>1/9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">0.3̄</span> (0.333...) as a fraction?',
        choices: ["1/3", "3/10", "1/4", "33/100"],
        answer: "1/3",
        hints: [
          "Let x = 0.333...",
          "10x = 3.333...",
          "9x = 3, x = 1/3."
        ],
        explanation: [
          "Let x = 0.333...",
          "10x = 3.333..., so 9x = 3",
          "x = <strong>1/3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What fraction equals <span class="math">0.2̄</span> (0.222...)? Give the denominator.',
        answer: "9",
        hints: [
          "Let x = 0.222...",
          "10x = 2.222..., so 9x = 2.",
          "x = 2/9. Denominator = 9."
        ],
        explanation: [
          "Let x = 0.222...",
          "10x − x = 2 → 9x = 2",
          "x = 2/9. Denominator is <strong>9</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A shirt costs $24.99 and tax is $2.01. You pay with $30. How much change? (In dollars)',
        answer: "3",
        hints: [
          "Total cost: $24.99 + $2.01 = $27.00.",
          "Change = $30.00 − $27.00.",
          "= $3.00."
        ],
        explanation: [
          "Total = $24.99 + $2.01 = $27.00",
          "Change = $30.00 − $27.00 = <strong>$3.00</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A book costs $12.50 and a pen costs $3.75. How much for 2 books and 1 pen?',
        choices: ["$28.75", "$25.00", "$16.25", "$28.25"],
        answer: "$28.75",
        hints: [
          "2 books: 2 × $12.50 = $25.00.",
          "Add 1 pen: $25.00 + $3.75 = $28.75.",
          "Total = $28.75."
        ],
        explanation: [
          "2 × $12.50 = $25.00",
          "$25.00 + $3.75 = <strong>$28.75</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'You buy 3 items costing $4.25, $6.50, and $2.25. What is the total?',
        answer: "13",
        hints: [
          "Add: $4.25 + $6.50 = $10.75.",
          "$10.75 + $2.25 = $13.00.",
          "= $13."
        ],
        explanation: [
          "$4.25 + $6.50 = $10.75",
          "$10.75 + $2.25 = <strong>$13.00</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'If you split $15.60 equally among 4 people, how much does each person get?',
        choices: ["$3.90", "$3.60", "$4.00", "$3.80"],
        answer: "$3.90",
        hints: [
          "Divide: $15.60 ÷ 4.",
          "1560 ÷ 4 = 390.",
          "Each person gets $3.90."
        ],
        explanation: [
          "$15.60 ÷ 4 = <strong>$3.90</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Express <span class="math">0.36</span> as a fraction in lowest terms. What is the denominator?',
        answer: "25",
        hints: [
          "0.36 = 36/100.",
          "GCD(36, 100) = 4.",
          "36/100 = 9/25. Denominator = 25."
        ],
        explanation: [
          "0.36 = 36/100",
          "GCD(36, 100) = 4",
          "36/100 = 9/25. Denominator is <strong>25</strong>."
        ]
      }
    ],

    // ── Extra Challenge: Decimal Place Value ──
    extraChallenge: [
      {
        type: "mc", difficulty: 1,
        question: 'In the number 3.572, what digit is in the hundredths place?',
        choices: ["5", "7", "2", "3"],
        answer: "7",
        hints: [
          "After the decimal point: tenths, hundredths, thousandths.",
          "3.572 → 5 is tenths, 7 is hundredths",
          "The hundredths digit is 7."
        ],
        explanation: [
          "Decimal places: 3 . 5(tenths) 7(hundredths) 2(thousandths)",
          "The hundredths digit is <strong>7</strong>.",
          "Place value: 7 × 1/100 = 0.07"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">0.04</span> written as a fraction?',
        choices: ["4/10", "4/100", "4/1000", "40/100"],
        answer: "4/100",
        hints: [
          "0.04 has the 4 in the hundredths place.",
          "Hundredths means over 100.",
          "0.04 = 4/100"
        ],
        explanation: [
          "The digit 4 is in the hundredths place.",
          "So 0.04 = 4/100 = <strong>4/100</strong> (or 1/25 simplified).",
          "Each decimal place represents a power of 10."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'How many thousandths are in <span class="math">0.250</span>?',
        answer: "250",
        hints: [
          "Thousandths means the number × 1000.",
          "0.250 × 1000 = ?",
          "= 250"
        ],
        explanation: [
          "0.250 = 250/1000 = 250 thousandths.",
          "To convert: 0.250 × 1000 = <strong>250</strong>",
          "Understanding place value helps convert between decimals and fractions."
        ]
      },
    ],

    // ── Boss (10 problems, difficulty 3-4) ──
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">3.14 × 100</span>?',
        answer: "314",
        hints: [
          "Multiplying by 100 moves the decimal 2 places right.",
          "3.14 → 31.4 → 314.",
          "Answer: 314."
        ],
        explanation: [
          "Move decimal 2 places right:",
          "3.14 × 100 = <strong>314</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">0.125 + 0.375</span>?',
        answer: "0.5",
        hints: [
          "Line up: 0.125 + 0.375.",
          "5 + 5 = 10, carry 1. 2 + 7 + 1 = 10, carry 1. 1 + 3 + 1 = 5.",
          "= 0.500 = 0.5."
        ],
        explanation: [
          "0.125 + 0.375 = <strong>0.5</strong>",
          "(Note: 1/8 + 3/8 = 4/8 = 1/2)"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">0.6̄</span> (0.666...) as a fraction?',
        choices: ["2/3", "3/5", "6/10", "6/9"],
        answer: "2/3",
        hints: [
          "Let x = 0.666...",
          "10x = 6.666..., so 9x = 6.",
          "x = 6/9 = 2/3."
        ],
        explanation: [
          "Let x = 0.666...",
          "10x = 6.666..., 9x = 6",
          "x = 6/9 = <strong>2/3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Compute <span class="math">0.2 × 0.3 × 0.5</span>.',
        answer: "0.03",
        hints: [
          "First: 0.2 × 0.3 = 0.06.",
          "Then: 0.06 × 0.5 = 0.03.",
          "Total decimal places: 1+1+1 = 3. 2×3×5 = 30 → 0.030 = 0.03."
        ],
        explanation: [
          "0.2 × 0.3 = 0.06",
          "0.06 × 0.5 = <strong>0.03</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">0.12̄</span> (0.1222...) as a fraction?',
        choices: ["11/90", "12/99", "2/15", "12/100"],
        answer: "11/90",
        hints: [
          "Let x = 0.1222... Multiply by 10: 10x = 1.222...",
          "Multiply by 100: 100x = 12.222...",
          "100x − 10x = 12.222... − 1.222... = 11. So 90x = 11, x = 11/90."
        ],
        explanation: [
          "Let x = 0.1222...",
          "100x = 12.222..., 10x = 1.222...",
          "90x = 11",
          "x = <strong>11/90</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'An item costs $8.50. You buy 4. How much total? (No $ sign)',
        answer: "34",
        hints: [
          "8.50 × 4.",
          "8 × 4 = 32, 0.50 × 4 = 2.00.",
          "32 + 2 = 34."
        ],
        explanation: [
          "$8.50 × 4 = <strong>$34.00</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Which is the correct order from smallest to largest?',
        choices: ["0.305, 0.35, 0.503", "0.35, 0.305, 0.503", "0.503, 0.35, 0.305", "0.305, 0.503, 0.35"],
        answer: "0.305, 0.35, 0.503",
        hints: [
          "Write with 3 decimal places: 0.305, 0.350, 0.503.",
          "Compare: 305 < 350 < 503.",
          "Order: 0.305, 0.35, 0.503."
        ],
        explanation: [
          "0.305 = 305 thousandths",
          "0.35 = 350 thousandths",
          "0.503 = 503 thousandths",
          "Order: <strong>0.305, 0.35, 0.503</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Convert <span class="math">5/6</span> to a decimal, rounded to the nearest hundredth.',
        answer: "0.83",
        hints: [
          "5 ÷ 6 = 0.8333...",
          "The repeating digit is 3.",
          "Rounded to nearest hundredth: 0.83 (since the next digit, 3, is < 5)."
        ],
        explanation: [
          "5 ÷ 6 = 0.8333...",
          "Rounded to nearest hundredth: <strong>0.83</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'You earn $7.50 per hour and work 6.5 hours. How much do you earn? (No $ sign)',
        answer: "48.75",
        hints: [
          "7.50 × 6.5.",
          "7.50 × 6 = 45.00 and 7.50 × 0.5 = 3.75.",
          "45.00 + 3.75 = 48.75."
        ],
        explanation: [
          "$7.50 × 6 = $45.00",
          "$7.50 × 0.5 = $3.75",
          "Total = <strong>$48.75</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">0.45̄</span> (0.4555...) as a fraction?',
        choices: ["41/90", "45/99", "9/20", "45/100"],
        answer: "41/90",
        hints: [
          "Let x = 0.4555... Multiply by 10: 10x = 4.555...",
          "Multiply by 100: 100x = 45.555...",
          "100x − 10x = 45.555... − 4.555... = 41. So 90x = 41, x = 41/90."
        ],
        explanation: [
          "Let x = 0.4555...",
          "100x = 45.555..., 10x = 4.555...",
          "90x = 41",
          "x = <strong>41/90</strong>"
        ]
      },
      // ── 20 additional boss questions ──
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">4.56 \\div 0.12</span>?',
        answer: "38",
        hints: [
          "Multiply both by 100 to remove decimals: 456 ÷ 12.",
          "456 ÷ 12 = 38.",
          "Check: 38 × 0.12 = 4.56 ✓"
        ],
        explanation: [
          "4.56 ÷ 0.12 = 456 ÷ 12",
          "= <strong>38</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">0.75 \\times 2.4</span>?',
        choices: ["1.5", "1.8", "1.75", "2.0"],
        answer: "1.8",
        hints: [
          "Ignore decimals: 75 × 24 = 1800.",
          "Total decimal places: 2 + 1 = 3.",
          "Place decimal: 1.800 = 1.8."
        ],
        explanation: [
          "75 × 24 = 1800",
          "3 decimal places → 1.800",
          "= <strong>1.8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'What is <span class="math">0.36̄</span> (0.3666...) as a fraction? Give the numerator in lowest terms.',
        answer: "11",
        hints: [
          "Let x = 0.3666... Then 10x = 3.666... and 100x = 36.666...",
          "100x − 10x = 36.666... − 3.666... = 33.",
          "90x = 33 → x = 33/90 = 11/30. Numerator = 11."
        ],
        explanation: [
          "Let x = 0.3666...",
          "100x − 10x = 33 → 90x = 33",
          "x = 33/90 = <strong>11</strong>/30"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A store marks down a $45 item by 15%. What is the sale price?',
        choices: ["$36.25", "$38.25", "$39.75", "$40.50"],
        answer: "$38.25",
        hints: [
          "Discount = 45 × 0.15 = $6.75.",
          "Sale price = $45 − $6.75 = $38.25.",
          "Or: 45 × 0.85 = $38.25."
        ],
        explanation: [
          "15% of $45 = $6.75",
          "$45 − $6.75 = <strong>$38.25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">6.4 \\div 0.08</span>?',
        answer: "80",
        hints: [
          "Multiply both by 100: 640 ÷ 8.",
          "640 ÷ 8 = 80.",
          "Check: 80 × 0.08 = 6.4 ✓"
        ],
        explanation: [
          "6.4 ÷ 0.08 = 640 ÷ 8",
          "= <strong>80</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Round <span class="math">12.3456</span> to the nearest hundredth.',
        choices: ["12.34", "12.35", "12.345", "12.30"],
        answer: "12.35",
        hints: [
          "The hundredths digit is 4.",
          "Look at the thousandths digit: 5.",
          "5 ≥ 5, so round up: 12.35."
        ],
        explanation: [
          "Hundredths digit = 4, next digit = 5 ≥ 5",
          "Round up: 4 → 5",
          "12.3456 ≈ <strong>12.35</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'What is <span class="math">0.\\overline{3} + 0.\\overline{6}</span>? (0.333... + 0.666...)',
        answer: "1",
        hints: [
          "0.333... = 1/3 and 0.666... = 2/3.",
          "1/3 + 2/3 = 3/3 = 1.",
          "Or observe: 0.333... + 0.666... = 0.999... = 1."
        ],
        explanation: [
          "0.333... = 1/3, 0.666... = 2/3",
          "1/3 + 2/3 = 1",
          "= <strong>1</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Which fraction equals 0.625?',
        choices: ["5/8", "3/5", "5/6", "7/10"],
        answer: "5/8",
        hints: [
          "0.625 = 625/1000.",
          "Simplify: GCD(625, 1000) = 125.",
          "625/1000 = 5/8."
        ],
        explanation: [
          "0.625 = 625/1000",
          "GCD(625, 1000) = 125",
          "625/1000 = <strong>5/8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'You pay with a $25 bill for items costing $4.35, $7.89, and $3.26. How much change do you get? (No $ sign)',
        answer: "9.5",
        hints: [
          "Total spent: $4.35 + $7.89 + $3.26.",
          "$4.35 + $7.89 = $12.24. Then $12.24 + $3.26 = $15.50.",
          "Change = $25.00 − $15.50 = $9.50."
        ],
        explanation: [
          "Total = $4.35 + $7.89 + $3.26 = $15.50",
          "Change = $25.00 − $15.50",
          "= <strong>$9.50</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">0.27̄</span> (0.2777...) as a fraction in lowest terms?',
        choices: ["5/18", "27/99", "7/25", "27/100"],
        answer: "5/18",
        hints: [
          "Let x = 0.2777... Then 10x = 2.777... and 100x = 27.777...",
          "100x − 10x = 25 → 90x = 25.",
          "x = 25/90 = 5/18."
        ],
        explanation: [
          "Let x = 0.2777...",
          "100x − 10x = 27.777... − 2.777... = 25",
          "90x = 25 → x = 25/90 = <strong>5/18</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Convert <span class="math">7/11</span> to a decimal. Round to the nearest hundredth.',
        answer: "0.64",
        hints: [
          "7 ÷ 11 = 0.636363...",
          "The repeating block is 63.",
          "Rounded to nearest hundredth: 0.64 (since the next digit, 6, ≥ 5)."
        ],
        explanation: [
          "7 ÷ 11 = 0.6363...",
          "Hundredths digit = 3, next digit = 6 ≥ 5 → round up",
          "≈ <strong>0.64</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">2.5^2</span>?',
        choices: ["5.0", "5.25", "6.25", "6.5"],
        answer: "6.25",
        hints: [
          "2.5 × 2.5.",
          "25 × 25 = 625. Total decimal places = 2.",
          "Place decimal: 6.25."
        ],
        explanation: [
          "2.5 × 2.5 = 6.25",
          "Or: (5/2)² = 25/4 = 6.25",
          "= <strong>6.25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Gas costs $3.45 per gallon. You buy 10.4 gallons. What is the total to the nearest cent? (No $ sign)',
        answer: "35.88",
        hints: [
          "3.45 × 10.4.",
          "3.45 × 10 = 34.50 and 3.45 × 0.4 = 1.38.",
          "34.50 + 1.38 = 35.88."
        ],
        explanation: [
          "$3.45 × 10 = $34.50",
          "$3.45 × 0.4 = $1.38",
          "Total = <strong>$35.88</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">0.08 \\times 0.05</span>?',
        choices: ["0.4", "0.04", "0.004", "0.0004"],
        answer: "0.004",
        hints: [
          "Ignore decimals: 8 × 5 = 40.",
          "Total decimal places: 2 + 2 = 4.",
          "Place decimal: 0.0040 = 0.004."
        ],
        explanation: [
          "8 × 5 = 40",
          "4 decimal places → 0.0040",
          "= <strong>0.004</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Convert <span class="math">5/12</span> to a decimal. Round to the nearest thousandth.',
        answer: "0.417",
        hints: [
          "5 ÷ 12 = 0.41666...",
          "The digit after thousandths is 6 ≥ 5, so round up.",
          "0.41666... ≈ 0.417."
        ],
        explanation: [
          "5 ÷ 12 = 0.41666...",
          "Thousandths digit = 6, next digit = 6 ≥ 5",
          "Round up: <strong>0.417</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">1.2 \\times 0.5 + 0.8 \\times 0.25</span>?',
        choices: ["0.7", "0.8", "0.9", "1.0"],
        answer: "0.8",
        hints: [
          "First: 1.2 × 0.5 = 0.6.",
          "Then: 0.8 × 0.25 = 0.2.",
          "Add: 0.6 + 0.2 = 0.8."
        ],
        explanation: [
          "1.2 × 0.5 = 0.6",
          "0.8 × 0.25 = 0.2",
          "0.6 + 0.2 = <strong>0.8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Convert <span class="math">0.84</span> to a fraction in lowest terms. What is the denominator?',
        answer: "25",
        hints: [
          "0.84 = 84/100.",
          "GCD(84, 100) = 4.",
          "84/100 = 21/25. Denominator = 25."
        ],
        explanation: [
          "0.84 = 84/100",
          "GCD(84, 100) = 4 → 84/100 = 21/25",
          "Denominator is <strong>25</strong>."
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'You buy 3 items at $6.50 each and receive 10% off the total. What do you pay?',
        choices: ["$16.50", "$17.55", "$18.50", "$19.50"],
        answer: "$17.55",
        hints: [
          "Subtotal: 3 × $6.50 = $19.50.",
          "Discount: 10% of $19.50 = $1.95.",
          "You pay: $19.50 − $1.95 = $17.55."
        ],
        explanation: [
          "3 × $6.50 = $19.50",
          "10% off: $19.50 × 0.10 = $1.95",
          "Total = $19.50 − $1.95 = <strong>$17.55</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">0.4 + 0.36 + 0.125</span>?',
        answer: "0.885",
        hints: [
          "Write with same decimal places: 0.400 + 0.360 + 0.125.",
          "Add: 400 + 360 + 125 = 885 thousandths.",
          "= 0.885."
        ],
        explanation: [
          "0.400 + 0.360 + 0.125",
          "= 0.885",
          "= <strong>0.885</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Which is the largest: <span class="math">0.\\overline{7}</span> (0.777...), <span class="math">0.78</span>, or <span class="math">0.785</span>?',
        choices: ["0.777...", "0.78", "0.785", "They are all equal"],
        answer: "0.785",
        hints: [
          "0.777... = 0.7777...",
          "Compare: 0.7777... vs 0.7800 vs 0.7850.",
          "0.7850 > 0.7800 > 0.7777..., so 0.785 is largest."
        ],
        explanation: [
          "0.777... ≈ 0.778, 0.78 = 0.780, 0.785 = 0.785",
          "0.785 > 0.780 > 0.778",
          "<strong>0.785</strong> is the largest."
        ]
      }
    ]
  }
};
