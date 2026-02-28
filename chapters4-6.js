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
      }
    ]
  }
};
