// Extra questions for Worlds 3-5 (Chapters 4-6)
// Round 1: 5 questions per topic
var EXTRA_QUESTIONS = EXTRA_QUESTIONS || {};

// ===================================================================
// WORLD 3 — Chapter 4: Fractions (10 topics, 5 questions each)
// ===================================================================
EXTRA_QUESTIONS[3] = [

  // --------------------------------------------------
  // Topic 0: Equivalent Fractions (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">2/5</span>?',
      choices: ["4/10", "3/10", "2/10", "4/15"],
      answer: "4/10",
      hints: [
        "Multiply both the numerator and denominator by the same number.",
        "Try multiplying both parts of 2/5 by 2.",
        "2×2 = 4 and 5×2 = 10."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 2×2 = 4, 5×2 = 10.",
        "So 2/5 = 4/10."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Find the missing number: <span class="math">3/7 = ?/21</span>',
      answer: "9",
      hints: [
        "What do you multiply 7 by to get 21?",
        "7 × 3 = 21, so multiply the numerator by 3 too.",
        "3 × 3 = ?"
      ],
      explanation: [
        "Since 7 × 3 = 21, multiply the numerator by 3 as well.",
        "3 × 3 = 9, so 3/7 = 9/21."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">4/6</span>?',
      choices: ["8/14", "2/3", "8/12", "12/18"],
      answer: "8/14",
      hints: [
        "Simplify 4/6 first — divide both by 2.",
        "4/6 simplifies to 2/3. Check each choice.",
        "8/14 simplifies to 4/7, which is not 2/3."
      ],
      explanation: [
        "4/6 = 2/3. Check each: 2/3 ✓, 8/12 = 2/3 ✓, 12/18 = 2/3 ✓.",
        "8/14 = 4/7 ≠ 2/3, so 8/14 is NOT equivalent."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">5/8 = 25/?</span>',
      answer: "40",
      hints: [
        "What do you multiply 5 by to get 25?",
        "5 × 5 = 25, so multiply the denominator by 5 too.",
        "8 × 5 = ?"
      ],
      explanation: [
        "Since 5 × 5 = 25, multiply the denominator by 5 as well.",
        "8 × 5 = 40, so 5/8 = 25/40."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which pair of fractions are equivalent?',
      choices: ["3/9 and 1/3", "2/5 and 3/6", "1/4 and 3/8", "5/6 and 7/8"],
      answer: "3/9 and 1/3",
      hints: [
        "Simplify each fraction to lowest terms.",
        "3/9: divide both by 3 → 1/3.",
        "So 3/9 and 1/3 are the same fraction."
      ],
      explanation: [
        "3/9 ÷ 3/3 = 1/3.",
        "The pair 3/9 and 1/3 are equivalent fractions."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">4/9 = ?/27</span>',
      answer: "12",
      hints: [
        "What do you multiply 9 by to get 27?",
        "9 × 3 = 27, so multiply the numerator by 3 too.",
        "4 × 3 = ?"
      ],
      explanation: [
        "Since 9 × 3 = 27, multiply the numerator by 3 as well.",
        "4 × 3 = 12, so 4/9 = 12/27."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is equivalent to <span class="math">6/10</span>?',
      choices: ["3/5", "2/5", "6/5", "4/10"],
      answer: "3/5",
      hints: [
        "Simplify 6/10 by dividing both by 2.",
        "6 ÷ 2 = 3, 10 ÷ 2 = 5.",
        "So 6/10 = 3/5."
      ],
      explanation: [
        "6/10 simplifies to 3/5 (divide both by 2).",
        "3/5 is equivalent to 6/10."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Find the missing number: <span class="math">2/3 = ?/15</span>',
      answer: "10",
      hints: [
        "What do you multiply 3 by to get 15?",
        "3 × 5 = 15, so multiply the numerator by 5 too.",
        "2 × 5 = ?"
      ],
      explanation: [
        "Since 3 × 5 = 15, multiply the numerator by 5.",
        "2 × 5 = 10, so 2/3 = 10/15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is equivalent to <span class="math">7/9</span>?',
      choices: ["21/27", "14/27", "7/18", "21/36"],
      answer: "21/27",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both parts of 7/9 by 3.",
        "7×3 = 21 and 9×3 = 27."
      ],
      explanation: [
        "Multiply numerator and denominator by 3: 7×3 = 21, 9×3 = 27.",
        "So 7/9 = 21/27."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Find the missing number: <span class="math">6/11 = ?/33</span>',
      answer: "18",
      hints: [
        "What do you multiply 11 by to get 33?",
        "11 × 3 = 33, so multiply the numerator by 3 too.",
        "6 × 3 = ?"
      ],
      explanation: [
        "Since 11 × 3 = 33, multiply the numerator by 3 as well.",
        "6 × 3 = 18, so 6/11 = 18/33."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">3/5</span>?',
      choices: ["9/20", "6/10", "12/20", "15/25"],
      answer: "9/20",
      hints: [
        "Simplify 3/5 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 3/5.",
        "9/20 cannot be simplified and 9/20 ≠ 3/5."
      ],
      explanation: [
        "3/5 is already simplified. 6/10 = 3/5 ✓, 12/20 = 3/5 ✓, 15/25 = 3/5 ✓.",
        "9/20 ≠ 3/5, so 9/20 is NOT equivalent."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Find the missing number: <span class="math">5/6 = ?/18</span>',
      answer: "15",
      hints: [
        "What do you multiply 6 by to get 18?",
        "6 × 3 = 18, so multiply the numerator by 3 too.",
        "5 × 3 = ?"
      ],
      explanation: [
        "Since 6 × 3 = 18, multiply the numerator by 3 as well.",
        "5 × 3 = 15, so 5/6 = 15/18."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is equivalent to <span class="math">5/8</span>?',
      choices: ["15/24", "10/24", "5/16", "15/32"],
      answer: "15/24",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both parts of 5/8 by 3.",
        "5×3 = 15 and 8×3 = 24."
      ],
      explanation: [
        "Multiply numerator and denominator by 3: 5×3 = 15, 8×3 = 24.",
        "So 5/8 = 15/24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">2/7</span>?',
      choices: ["4/21", "4/14", "6/21", "8/28"],
      answer: "4/21",
      hints: [
        "Simplify 2/7 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 2/7.",
        "4/21 cannot be simplified to 2/7 since 4/21 ≠ 2/7."
      ],
      explanation: [
        "2/7 is already simplified. 4/14 = 2/7 ✓, 6/21 = 2/7 ✓, 8/28 = 2/7 ✓.",
        "4/21 ≠ 2/7, so 4/21 is NOT equivalent."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">7/8 = ?/32</span>',
      answer: "28",
      hints: [
        "What do you multiply 8 by to get 32?",
        "8 × 4 = 32, so multiply the numerator by 4 too.",
        "7 × 4 = ?"
      ],
      explanation: [
        "Since 8 × 4 = 32, multiply the numerator by 4 as well.",
        "7 × 4 = 28, so 7/8 = 28/32."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">1/4</span>?',
      choices: ["3/12", "2/12", "1/12", "4/12"],
      answer: "3/12",
      hints: [
        "Multiply both the numerator and denominator by the same number.",
        "Try multiplying both parts of 1/4 by 3.",
        "1×3 = 3 and 4×3 = 12."
      ],
      explanation: [
        "Multiply numerator and denominator by 3: 1×3 = 3, 4×3 = 12.",
        "So 1/4 = 3/12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">5/8</span>?',
      choices: ["10/18", "10/16", "15/24", "20/32"],
      answer: "10/18",
      hints: [
        "Simplify 5/8 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 5/8.",
        "10/18 simplifies to 5/9, which is not 5/8."
      ],
      explanation: [
        "5/8 is already simplified. 10/16 = 5/8 ✓, 15/24 = 5/8 ✓, 20/32 = 5/8 ✓.",
        "10/18 = 5/9 ≠ 5/8, so 10/18 is NOT equivalent."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">8/11 = ?/44</span>',
      answer: "32",
      hints: [
        "What do you multiply 11 by to get 44?",
        "11 × 4 = 44, so multiply the numerator by 4 too.",
        "8 × 4 = ?"
      ],
      explanation: [
        "Since 11 × 4 = 44, multiply the numerator by 4 as well.",
        "8 × 4 = 32, so 8/11 = 32/44.",
        "The missing number is 32."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">3/4</span>?',
      choices: ["9/12", "6/12", "3/12", "9/16"],
      answer: "9/12",
      hints: [
        "Multiply both the numerator and denominator by the same number.",
        "Try multiplying both parts of 3/4 by 3.",
        "3×3 = 9 and 4×3 = 12."
      ],
      explanation: [
        "Multiply numerator and denominator by 3: 3×3 = 9, 4×3 = 12.",
        "So 3/4 = 9/12.",
        "The other choices do not simplify to 3/4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">6/8</span>?',
      choices: ["9/16", "3/4", "12/16", "15/20"],
      answer: "9/16",
      hints: [
        "Simplify 6/8 first — divide both by 2.",
        "6/8 simplifies to 3/4. Check each choice.",
        "9/16 does not simplify to 3/4."
      ],
      explanation: [
        "6/8 = 3/4. Check each: 3/4 ✓, 12/16 = 3/4 ✓, 15/20 = 3/4 ✓.",
        "9/16 ≠ 3/4, so 9/16 is NOT equivalent.",
        "9/16 cannot be simplified to 3/4."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">4/7</span>?',
      choices: ["8/14","4/14","8/21","12/14"],
      answer: "8/14",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both parts of 4/7 by 2.",
        "4×2 = 8 and 7×2 = 14."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 4×2 = 8, 7×2 = 14.",
        "So 4/7 = 8/14."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">9/10 = ?/50</span>',
      answer: "45",
      hints: [
        "What do you multiply 10 by to get 50?",
        "10 × 5 = 50, so multiply the numerator by 5 too.",
        "9 × 5 = ?"
      ],
      explanation: [
        "Since 10 × 5 = 50, multiply the numerator by 5 as well.",
        "9 × 5 = 45, so 9/10 = 45/50.",
        "The missing number is 45."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">3/8</span>?',
      choices: ["9/32","6/16","9/24","12/32"],
      answer: "9/32",
      hints: [
        "Simplify 3/8 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 3/8.",
        "9/32 cannot be simplified to 3/8 since 9/32 ≠ 3/8."
      ],
      explanation: [
        "3/8 is already simplified. 6/16 = 3/8 ✓, 9/24 = 3/8 ✓, 12/32 = 3/8 ✓.",
        "9/32 ≠ 3/8, so 9/32 is NOT equivalent.",
        "9 and 32 share no common factor that yields 3/8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">\frac{3}{11}</span>?',
      choices: ["6/22", "3/22", "9/22", "6/11"],
      answer: "6/22",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both parts of 3/11 by 2.",
        "3×2 = 6 and 11×2 = 22."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 3×2 = 6, 11×2 = 22.",
        "So 3/11 = 6/22."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">7/12 = ?/36</span>',
      answer: "21",
      hints: [
        "What do you multiply 12 by to get 36?",
        "12 × 3 = 36, so multiply the numerator by 3 too.",
        "7 × 3 = ?"
      ],
      explanation: [
        "Since 12 × 3 = 36, multiply the numerator by 3 as well.",
        "7 × 3 = 21, so 7/12 = 21/36."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">5/6</span>?',
      choices: ["15/21", "10/12", "20/24", "25/30"],
      answer: "15/21",
      hints: [
        "Simplify 5/6 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 5/6.",
        "15/21 = 5/7, which is not 5/6."
      ],
      explanation: [
        "5/6 is already simplified. 10/12 = 5/6 ✓, 20/24 = 5/6 ✓, 25/30 = 5/6 ✓.",
        "15/21 = 5/7 ≠ 5/6, so 15/21 is NOT equivalent."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">8/13 = ?/39</span>',
      answer: "24",
      hints: [
        "What do you multiply 13 by to get 39?",
        "13 × 3 = 39, so multiply the numerator by 3 too.",
        "8 × 3 = ?"
      ],
      explanation: [
        "Since 13 × 3 = 39, multiply the numerator by 3 as well.",
        "8 × 3 = 24, so 8/13 = 24/39.",
        "The missing number is 24."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">5/9</span>?',
      choices: ["10/18", "5/18", "10/27", "15/18"],
      answer: "10/18",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both parts of 5/9 by 2.",
        "5×2 = 10 and 9×2 = 18."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 5×2 = 10, 9×2 = 18.",
        "So 5/9 = 10/18.",
        "The other choices do not simplify to 5/9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">4/5</span>?',
      choices: ["12/20", "8/10", "16/20", "20/25"],
      answer: "12/20",
      hints: [
        "Simplify 4/5 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 4/5.",
        "12/20 = 3/5, which is not 4/5."
      ],
      explanation: [
        "4/5 is already simplified. 8/10 = 4/5 ✓, 16/20 = 4/5 ✓, 20/25 = 4/5 ✓.",
        "12/20 = 3/5 ≠ 4/5, so 12/20 is NOT equivalent.",
        "Always simplify to lowest terms to compare."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is equivalent to <span class="math">7/12</span>?',
      choices: ["14/24", "7/24", "21/48", "14/36"],
      answer: "14/24",
      hints: [
        "Multiply both the numerator and denominator by the same number.",
        "Try multiplying both parts of 7/12 by 2.",
        "7×2 = 14 and 12×2 = 24."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 7×2 = 14, 12×2 = 24.",
        "So 7/12 = 14/24.",
        "The other choices do not simplify to 7/12."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Find the missing number: <span class="math">4/11 = ?/44</span>',
      answer: "16",
      hints: [
        "What do you multiply 11 by to get 44?",
        "11 × 4 = 44, so multiply the numerator by 4 too.",
        "4 × 4 = ?"
      ],
      explanation: [
        "Since 11 × 4 = 44, multiply the numerator by 4 as well.",
        "4 × 4 = 16, so 4/11 = 16/44.",
        "The missing number is 16."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">7/10</span>?',
      choices: ["21/40", "14/20", "21/30", "35/50"],
      answer: "21/40",
      hints: [
        "Simplify 7/10 — it is already in lowest terms.",
        "Check each choice by simplifying to see if it equals 7/10.",
        "21/40 cannot be simplified to 7/10."
      ],
      explanation: [
        "7/10 is already simplified. 14/20 = 7/10 ✓, 21/30 = 7/10 ✓, 35/50 = 7/10 ✓.",
        "21/40 ≠ 7/10, so 21/40 is NOT equivalent.",
        "21 and 40 share no common factor that yields 7/10."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Find the missing number: <span class="math">11/13 = ?/39</span>',
      answer: "33",
      hints: [
        "What do you multiply 13 by to get 39?",
        "13 × 3 = 39, so multiply the numerator by 3 too.",
        "11 × 3 = ?"
      ],
      explanation: [
        "Since 13 × 3 = 39, multiply the numerator by 3 as well.",
        "11 × 3 = 33, so 11/13 = 33/39.",
        "The missing number is 33."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is equivalent to <span class="math">6/7</span>?',
      choices: ["12/14","6/14","12/21","18/14"],
      answer: "12/14",
      hints: [
        "Multiply both numerator and denominator by the same number.",
        "Try multiplying both parts of 6/7 by 2.",
        "6×2 = 12 and 7×2 = 14."
      ],
      explanation: [
        "Multiply numerator and denominator by 2: 6×2 = 12, 7×2 = 14.",
        "So 6/7 = 12/14.",
        "The other choices do not simplify to 6/7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is <b>NOT</b> equivalent to <span class="math">9/12</span>?',
      choices: ["15/24","3/4","18/24","6/8"],
      answer: "15/24",
      hints: [
        "Simplify 9/12 first — divide both by 3.",
        "9/12 simplifies to 3/4. Check each choice.",
        "15/24 = 5/8, which is not 3/4."
      ],
      explanation: [
        "9/12 = 3/4. Check: 3/4 ✓, 18/24 = 3/4 ✓, 6/8 = 3/4 ✓.",
        "15/24 = 5/8 ≠ 3/4, so 15/24 is NOT equivalent.",
        "Always simplify to lowest terms to compare."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A pizza is cut into 8 equal slices. You eat 3 slices. What fraction of the pizza did you eat?',
      choices: ["3/8", "5/8", "3/5", "8/3"],
      answer: "3/8",
      hints: [
        "The total number of slices is the denominator.",
        "The number you ate is the numerator.",
        "You ate 3 out of 8 slices."
      ],
      explanation: [
        "The fraction is <strong>parts eaten / total parts</strong> = 3/8.",
        "So you ate 3/8 of the pizza."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Find a fraction equivalent to <span class="math">4/6</span> with denominator 18. What is the numerator?',
      answer: "12",
      hints: [
        "What do you multiply 6 by to get 18?",
        "6 × 3 = 18, so multiply the numerator by 3 too.",
        "4 × 3 = ?"
      ],
      explanation: [
        "Since 6 × 3 = 18, multiply the numerator by 3 as well.",
        "4 × 3 = <strong>12</strong>, so 4/6 = 12/18."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A bag has 12 marbles. If 4 are red, what fraction of the marbles are red?',
      choices: ["1/3", "4/12", "1/4", "3/4"],
      answer: "1/3",
      hints: [
        "Write the fraction: 4 out of 12 = 4/12.",
        "Simplify by dividing both by 4.",
        "4 ÷ 4 = 1, 12 ÷ 4 = 3."
      ],
      explanation: [
        "4/12 simplifies to <strong>1/3</strong> (divide both by 4).",
        "So 1/3 of the marbles are red."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 1: Simplifying Fractions (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Simplify <span class="math">6/8</span> to lowest terms.',
      choices: ["3/4", "2/4", "6/4", "1/2"],
      answer: "3/4",
      hints: [
        "Find the GCD of 6 and 8.",
        "GCD(6, 8) = 2.",
        "Divide both numerator and denominator by 2."
      ],
      explanation: [
        "GCD of 6 and 8 is 2.",
        "6 ÷ 2 = 3, 8 ÷ 2 = 4, so 6/8 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">10/15</span>. What is the numerator of the simplified fraction?',
      answer: "2",
      hints: [
        "Find a number that divides both 10 and 15.",
        "GCD(10, 15) = 5.",
        "10 ÷ 5 = ?"
      ],
      explanation: [
        "GCD of 10 and 15 is 5.",
        "10 ÷ 5 = 2, 15 ÷ 5 = 3, so 10/15 = 2/3. The numerator is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">18/24</span>.',
      choices: ["3/4", "9/12", "6/8", "2/3"],
      answer: "3/4",
      hints: [
        "Find the GCD of 18 and 24.",
        "Factors of 18: 1,2,3,6,9,18. Factors of 24: 1,2,3,4,6,8,12,24. GCD = 6.",
        "Divide both by 6."
      ],
      explanation: [
        "GCD(18, 24) = 6.",
        "18 ÷ 6 = 3, 24 ÷ 6 = 4, so 18/24 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">14/35</span>. Write your answer as a fraction (e.g. 1/2).',
      answer: "2/5",
      hints: [
        "What number divides both 14 and 35?",
        "Both are divisible by 7.",
        "14 ÷ 7 = 2, 35 ÷ 7 = 5."
      ],
      explanation: [
        "GCD(14, 35) = 7.",
        "14 ÷ 7 = 2, 35 ÷ 7 = 5, so 14/35 = 2/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["7/12", "4/8", "9/15", "6/10"],
      answer: "7/12",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 7 and 12: factors of 7 are 1, 7. Factors of 12 are 1,2,3,4,6,12.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(7, 12) = 1, so 7/12 is already in simplest form.",
        "The others can all be reduced: 4/8 = 1/2, 9/15 = 3/5, 6/10 = 3/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">20/32</span>. Write your answer as a fraction.',
      answer: "5/8",
      hints: [
        "Find a number that divides both 20 and 32.",
        "GCD(20, 32) = 4.",
        "20 ÷ 4 = 5, 32 ÷ 4 = 8."
      ],
      explanation: [
        "GCD(20, 32) = 4.",
        "20 ÷ 4 = 5, 32 ÷ 4 = 8, so 20/32 = 5/8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify <span class="math">8/12</span> to lowest terms.',
      choices: ["2/3", "4/6", "3/4", "1/2"],
      answer: "2/3",
      hints: [
        "Find the GCD of 8 and 12.",
        "GCD(8, 12) = 4.",
        "Divide both by 4: 8 ÷ 4 = 2, 12 ÷ 4 = 3."
      ],
      explanation: [
        "GCD(8, 12) = 4.",
        "8 ÷ 4 = 2, 12 ÷ 4 = 3, so 8/12 = 2/3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">24/36</span>. What is the denominator of the simplified fraction?',
      answer: "3",
      hints: [
        "Find the GCD of 24 and 36.",
        "GCD(24, 36) = 12.",
        "24 ÷ 12 = 2, 36 ÷ 12 = 3."
      ],
      explanation: [
        "GCD(24, 36) = 12.",
        "24 ÷ 12 = 2, 36 ÷ 12 = 3, so 24/36 = 2/3. The denominator is 3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify <span class="math">9/12</span> to lowest terms.',
      choices: ["3/4", "9/4", "1/3", "3/6"],
      answer: "3/4",
      hints: [
        "Find a number that divides both 9 and 12.",
        "GCD(9, 12) = 3.",
        "Divide both by 3: 9 ÷ 3 = 3, 12 ÷ 3 = 4."
      ],
      explanation: [
        "GCD(9, 12) = 3.",
        "9 ÷ 3 = 3, 12 ÷ 3 = 4, so 9/12 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">16/28</span>. Write your answer as a fraction.',
      answer: "4/7",
      hints: [
        "What number divides both 16 and 28?",
        "Both are divisible by 4.",
        "16 ÷ 4 = 4, 28 ÷ 4 = 7."
      ],
      explanation: [
        "GCD(16, 28) = 4.",
        "16 ÷ 4 = 4, 28 ÷ 4 = 7, so 16/28 = 4/7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["11/15", "6/9", "8/14", "12/16"],
      answer: "11/15",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 11 and 15: factors of 11 are 1, 11. Factors of 15 are 1, 3, 5, 15.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(11, 15) = 1, so 11/15 is already in simplest form.",
        "The others: 6/9 = 2/3, 8/14 = 4/7, 12/16 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">12/18</span>. Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Find a number that divides both 12 and 18.",
        "GCD(12, 18) = 6.",
        "12 ÷ 6 = 2, 18 ÷ 6 = 3."
      ],
      explanation: [
        "GCD(12, 18) = 6.",
        "12 ÷ 6 = 2, 18 ÷ 6 = 3, so 12/18 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">15/25</span>.',
      choices: ["3/5", "5/5", "1/5", "15/5"],
      answer: "3/5",
      hints: [
        "Find the GCD of 15 and 25.",
        "GCD(15, 25) = 5.",
        "Divide both by 5: 15 ÷ 5 = 3, 25 ÷ 5 = 5."
      ],
      explanation: [
        "GCD(15, 25) = 5.",
        "15 ÷ 5 = 3, 25 ÷ 5 = 5, so 15/25 = 3/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["5/9", "8/12", "10/15", "6/14"],
      answer: "5/9",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 5 and 9: factors of 5 are 1, 5. Factors of 9 are 1, 3, 9.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(5, 9) = 1, so 5/9 is already in simplest form.",
        "The others: 8/12 = 2/3, 10/15 = 2/3, 6/14 = 3/7."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">14/21</span>. Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Find a number that divides both 14 and 21.",
        "Both are divisible by 7.",
        "14 ÷ 7 = 2, 21 ÷ 7 = 3."
      ],
      explanation: [
        "GCD(14, 21) = 7.",
        "14 ÷ 7 = 2, 21 ÷ 7 = 3, so 14/21 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">30/45</span>.',
      choices: ["2/3", "6/9", "3/5", "10/15"],
      answer: "2/3",
      hints: [
        "Find the GCD of 30 and 45.",
        "GCD(30, 45) = 15.",
        "Divide both by 15: 30 ÷ 15 = 2, 45 ÷ 15 = 3."
      ],
      explanation: [
        "GCD(30, 45) = 15.",
        "30 ÷ 15 = 2, 45 ÷ 15 = 3, so 30/45 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is already in simplest form?',
      choices: ["3/8", "4/6", "6/9", "10/12"],
      answer: "3/8",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 3 and 8: factors of 3 are 1, 3. Factors of 8 are 1, 2, 4, 8.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(3, 8) = 1, so 3/8 is already in simplest form.",
        "The others: 4/6 = 2/3, 6/9 = 2/3, 10/12 = 5/6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">22/33</span>. Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Find a number that divides both 22 and 33.",
        "Both are divisible by 11.",
        "22 ÷ 11 = 2, 33 ÷ 11 = 3."
      ],
      explanation: [
        "GCD(22, 33) = 11.",
        "22 ÷ 11 = 2, 33 ÷ 11 = 3, so 22/33 = 2/3.",
        "The fraction in simplest form is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify <span class="math">10/25</span> to lowest terms.',
      choices: ["2/5", "1/5", "5/10", "2/10"],
      answer: "2/5",
      hints: [
        "Find the GCD of 10 and 25.",
        "GCD(10, 25) = 5.",
        "Divide both by 5: 10 ÷ 5 = 2, 25 ÷ 5 = 5."
      ],
      explanation: [
        "GCD(10, 25) = 5.",
        "10 ÷ 5 = 2, 25 ÷ 5 = 5, so 10/25 = 2/5.",
        "The simplified fraction is 2/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["8/15", "6/8", "9/12", "14/21"],
      answer: "8/15",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 8 and 15: factors of 8 are 1,2,4,8. Factors of 15 are 1,3,5,15.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(8, 15) = 1, so 8/15 is already in simplest form.",
        "The others: 6/8 = 3/4, 9/12 = 3/4, 14/21 = 2/3.",
        "Only 8/15 cannot be reduced further."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">15/20</span>. Write your answer as a fraction.',
      answer: "3/4",
      hints: [
        "Find a number that divides both 15 and 20.",
        "GCD(15, 20) = 5.",
        "15 ÷ 5 = 3, 20 ÷ 5 = 4."
      ],
      explanation: [
        "GCD(15, 20) = 5.",
        "15 ÷ 5 = 3, 20 ÷ 5 = 4, so 15/20 = 3/4.",
        "The fraction in simplest form is 3/4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">28/42</span>.',
      choices: ["2/3","4/6","14/21","7/10"],
      answer: "2/3",
      hints: [
        "Find the GCD of 28 and 42.",
        "GCD(28, 42) = 14.",
        "Divide both by 14: 28 ÷ 14 = 2, 42 ÷ 14 = 3."
      ],
      explanation: [
        "GCD(28, 42) = 14.",
        "28 ÷ 14 = 2, 42 ÷ 14 = 3, so 28/42 = 2/3.",
        "The simplified fraction is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which fraction is already in simplest form?',
      choices: ["9/14","6/10","8/20","12/18"],
      answer: "9/14",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 9 and 14: factors of 9 are 1,3,9. Factors of 14 are 1,2,7,14.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(9, 14) = 1, so 9/14 is already in simplest form.",
        "The others: 6/10 = 3/5, 8/20 = 2/5, 12/18 = 2/3.",
        "Only 9/14 cannot be reduced further."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">\frac{14}{21}</span>. What is the numerator of the simplified fraction?',
      answer: "2",
      hints: [
        "Find the GCD of 14 and 21.",
        "Both 14 and 21 are divisible by 7.",
        "14 ÷ 7 = 2 and 21 ÷ 7 = 3."
      ],
      explanation: [
        "GCD(14, 21) = 7. Divide both by 7: 14÷7 = 2, 21÷7 = 3.",
        "So 14/21 = 2/3. The numerator is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["11/13", "8/12", "15/25", "14/21"],
      answer: "11/13",
      hints: [
        "A fraction is in simplest form when the GCD of numerator and denominator is 1.",
        "11 and 13 are both prime numbers.",
        "Two different primes always have GCD = 1."
      ],
      explanation: [
        "GCD(11, 13) = 1, so 11/13 is already in simplest form.",
        "The others: 8/12 = 2/3, 15/25 = 3/5, 14/21 = 2/3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">\frac{18}{30}</span>. What is the denominator of the simplified fraction?',
      answer: "5",
      hints: [
        "Find the GCD of 18 and 30.",
        "Both 18 and 30 are divisible by 6.",
        "18 ÷ 6 = 3 and 30 ÷ 6 = 5."
      ],
      explanation: [
        "GCD(18, 30) = 6. Divide both by 6: 18÷6 = 3, 30÷6 = 5.",
        "So 18/30 = 3/5. The denominator is 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">36/48</span> to lowest terms.',
      choices: ["3/4", "9/12", "6/8", "12/16"],
      answer: "3/4",
      hints: [
        "Find the GCD of 36 and 48.",
        "GCD(36, 48) = 12.",
        "Divide both by 12: 36 ÷ 12 = 3, 48 ÷ 12 = 4."
      ],
      explanation: [
        "GCD(36, 48) = 12.",
        "36 ÷ 12 = 3, 48 ÷ 12 = 4, so 36/48 = 3/4.",
        "The fully simplified fraction is 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">16/24</span>. Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Find a number that divides both 16 and 24.",
        "GCD(16, 24) = 8.",
        "16 ÷ 8 = 2, 24 ÷ 8 = 3."
      ],
      explanation: [
        "GCD(16, 24) = 8.",
        "16 ÷ 8 = 2, 24 ÷ 8 = 3, so 16/24 = 2/3.",
        "The fraction in simplest form is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["13/17", "6/15", "10/14", "12/20"],
      answer: "13/17",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "13 and 17 are both prime numbers.",
        "Two different primes always have GCD = 1."
      ],
      explanation: [
        "GCD(13, 17) = 1, so 13/17 is already in simplest form.",
        "The others: 6/15 = 2/5, 10/14 = 5/7, 12/20 = 3/5.",
        "Only 13/17 cannot be reduced further."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">24/40</span>. Write your answer as a fraction.',
      answer: "3/5",
      hints: [
        "Find a number that divides both 24 and 40.",
        "GCD(24, 40) = 8.",
        "24 ÷ 8 = 3, 40 ÷ 8 = 5."
      ],
      explanation: [
        "GCD(24, 40) = 8.",
        "24 ÷ 8 = 3, 40 ÷ 8 = 5, so 24/40 = 3/5.",
        "The fraction in simplest form is 3/5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify <span class="math">21/28</span> to lowest terms.',
      choices: ["3/4", "7/14", "7/9", "21/7"],
      answer: "3/4",
      hints: [
        "Find the GCD of 21 and 28.",
        "Both are divisible by 7.",
        "21 ÷ 7 = 3, 28 ÷ 7 = 4."
      ],
      explanation: [
        "GCD(21, 28) = 7.",
        "21 ÷ 7 = 3, 28 ÷ 7 = 4, so 21/28 = 3/4.",
        "The simplified fraction is 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">27/45</span>. What is the denominator of the simplified fraction?',
      answer: "5",
      hints: [
        "Find the GCD of 27 and 45.",
        "Both 27 and 45 are divisible by 9.",
        "27 ÷ 9 = 3 and 45 ÷ 9 = 5."
      ],
      explanation: [
        "GCD(27, 45) = 9. Divide both by 9: 27÷9 = 3, 45÷9 = 5.",
        "So 27/45 = 3/5. The denominator is 5.",
        "Always divide both parts by the GCD."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify <span class="math">42/56</span> to lowest terms.',
      choices: ["3/4","7/8","6/8","21/28"],
      answer: "3/4",
      hints: [
        "Find the GCD of 42 and 56.",
        "GCD(42, 56) = 14.",
        "Divide both by 14: 42 ÷ 14 = 3, 56 ÷ 14 = 4."
      ],
      explanation: [
        "GCD(42, 56) = 14.",
        "42 ÷ 14 = 3, 56 ÷ 14 = 4, so 42/56 = 3/4.",
        "The fully simplified fraction is 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify <span class="math">20/28</span>. Write your answer as a fraction.',
      answer: "5/7",
      hints: [
        "Find a number that divides both 20 and 28.",
        "GCD(20, 28) = 4.",
        "20 ÷ 4 = 5, 28 ÷ 4 = 7."
      ],
      explanation: [
        "GCD(20, 28) = 4.",
        "20 ÷ 4 = 5, 28 ÷ 4 = 7, so 20/28 = 5/7.",
        "The fraction in simplest form is 5/7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is already in simplest form?',
      choices: ["7/16","8/12","14/21","9/15"],
      answer: "7/16",
      hints: [
        "A fraction is in simplest form when GCD of numerator and denominator is 1.",
        "Check 7 and 16: factors of 7 are 1, 7. Factors of 16 are 1, 2, 4, 8, 16.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(7, 16) = 1, so 7/16 is already in simplest form.",
        "The others: 8/12 = 2/3, 14/21 = 2/3, 9/15 = 3/5.",
        "Only 7/16 cannot be reduced further."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">24/36</span> to lowest terms. Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Find the GCD of 24 and 36.",
        "GCD(24, 36) = 12.",
        "24 ÷ 12 = 2, 36 ÷ 12 = 3."
      ],
      explanation: [
        "GCD(24, 36) = 12. Divide both by 12.",
        "24 ÷ 12 = 2, 36 ÷ 12 = 3, so 24/36 = <strong>2/3</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A recipe uses 18 ounces of flour from a 30-ounce bag. What fraction of the bag was used, in simplest form?',
      choices: ["3/5", "18/30", "6/10", "9/15"],
      answer: "3/5",
      hints: [
        "Write the fraction: 18/30.",
        "Find the GCD of 18 and 30, which is 6.",
        "18 ÷ 6 = 3, 30 ÷ 6 = 5."
      ],
      explanation: [
        "18/30 simplified: GCD(18, 30) = 6.",
        "18 ÷ 6 = 3, 30 ÷ 6 = 5 → <strong>3/5</strong> of the bag was used."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction is already in simplest form?',
      choices: ["11/18", "9/12", "8/20", "15/27"],
      answer: "11/18",
      hints: [
        "A fraction is in simplest form when the GCD of numerator and denominator is 1.",
        "Factors of 11: 1, 11. Factors of 18: 1, 2, 3, 6, 9, 18.",
        "They share no common factor other than 1."
      ],
      explanation: [
        "GCD(11, 18) = 1, so <strong>11/18</strong> is already in simplest form.",
        "The others: 9/12 = 3/4, 8/20 = 2/5, 15/27 = 5/9."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 2: Adding Fractions (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">1/6 + 3/6</span>?',
      choices: ["4/6", "4/12", "3/6", "2/3"],
      answer: "4/6",
      hints: [
        "The denominators are the same, so just add the numerators.",
        "1 + 3 = 4.",
        "Keep the denominator 6."
      ],
      explanation: [
        "Same denominator: add numerators 1 + 3 = 4.",
        "Result is 4/6 (which simplifies to 2/3)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">2/5 + 1/5</span>? Write your answer as a fraction.',
      answer: "3/5",
      hints: [
        "Same denominator — just add the numerators.",
        "2 + 1 = 3.",
        "The answer is 3 over 5."
      ],
      explanation: [
        "Since the denominators are the same, add numerators: 2 + 1 = 3.",
        "The answer is 3/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">1/3 + 1/4</span>?',
      choices: ["7/12", "2/7", "1/7", "5/12"],
      answer: "7/12",
      hints: [
        "Find a common denominator for 3 and 4.",
        "LCD = 12. Convert: 1/3 = 4/12 and 1/4 = 3/12.",
        "Now add: 4/12 + 3/12 = 7/12."
      ],
      explanation: [
        "LCD of 3 and 4 is 12. Rewrite: 1/3 = 4/12, 1/4 = 3/12.",
        "4/12 + 3/12 = 7/12."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2/3 + 1/6</span>? Write your answer as a fraction.',
      answer: "5/6",
      hints: [
        "Find the LCD of 3 and 6.",
        "LCD = 6. Convert 2/3 = 4/6.",
        "4/6 + 1/6 = 5/6."
      ],
      explanation: [
        "LCD = 6. Rewrite 2/3 as 4/6.",
        "4/6 + 1/6 = 5/6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/8 + 1/4</span>?',
      choices: ["5/8", "4/12", "4/8", "3/12"],
      answer: "5/8",
      hints: [
        "Find a common denominator for 8 and 4.",
        "LCD = 8. Convert 1/4 = 2/8.",
        "3/8 + 2/8 = 5/8."
      ],
      explanation: [
        "LCD = 8. Rewrite 1/4 as 2/8.",
        "3/8 + 2/8 = 5/8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2/7 + 3/14</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Find the LCD of 7 and 14.",
        "LCD = 14. Convert 2/7 = 4/14.",
        "4/14 + 3/14 = 7/14 = 1/2."
      ],
      explanation: [
        "LCD = 14. Rewrite 2/7 as 4/14.",
        "4/14 + 3/14 = 7/14 = 1/2."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">3/10 + 4/10</span>?',
      choices: ["7/10", "7/20", "1/10", "12/10"],
      answer: "7/10",
      hints: [
        "The denominators are the same, so add the numerators.",
        "3 + 4 = 7.",
        "Keep the denominator 10."
      ],
      explanation: [
        "Same denominator: 3 + 4 = 7.",
        "Result is 7/10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">1/5 + 2/3</span>?',
      choices: ["13/15", "3/8", "3/15", "11/15"],
      answer: "13/15",
      hints: [
        "Find a common denominator for 5 and 3.",
        "LCD = 15. Convert: 1/5 = 3/15 and 2/3 = 10/15.",
        "3/15 + 10/15 = 13/15."
      ],
      explanation: [
        "LCD of 5 and 3 is 15. Rewrite: 1/5 = 3/15, 2/3 = 10/15.",
        "3/15 + 10/15 = 13/15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/7 + 2/7</span>? Write your answer as a fraction.',
      answer: "5/7",
      hints: [
        "Same denominator — just add the numerators.",
        "3 + 2 = 5.",
        "The answer is 5 over 7."
      ],
      explanation: [
        "Since the denominators are the same, add numerators: 3 + 2 = 5.",
        "The answer is 5/7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">2/9 + 1/6</span>?',
      choices: ["7/18", "3/15", "1/3", "5/18"],
      answer: "7/18",
      hints: [
        "Find a common denominator for 9 and 6.",
        "LCD = 18. Convert: 2/9 = 4/18 and 1/6 = 3/18.",
        "4/18 + 3/18 = 7/18."
      ],
      explanation: [
        "LCD of 9 and 6 is 18. Rewrite: 2/9 = 4/18, 1/6 = 3/18.",
        "4/18 + 3/18 = 7/18."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">5/12 + 1/12</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Same denominator — add the numerators.",
        "5 + 1 = 6, keep denominator 12.",
        "6/12 simplifies to 1/2."
      ],
      explanation: [
        "Same denominator: 5 + 1 = 6. Result is 6/12.",
        "Simplify: 6/12 = 1/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/7 + 2/5</span>?',
      choices: ["29/35", "5/12", "5/35", "1/2"],
      answer: "29/35",
      hints: [
        "Find a common denominator for 7 and 5.",
        "LCD = 35. Convert: 3/7 = 15/35 and 2/5 = 14/35.",
        "15/35 + 14/35 = 29/35."
      ],
      explanation: [
        "LCD of 7 and 5 is 35. Rewrite: 3/7 = 15/35, 2/5 = 14/35.",
        "15/35 + 14/35 = 29/35."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">4/9 + 2/9</span>? Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Same denominator — just add the numerators.",
        "4 + 2 = 6, keep denominator 9.",
        "6/9 simplifies to 2/3."
      ],
      explanation: [
        "Same denominator: 4 + 2 = 6. Result is 6/9.",
        "Simplify: 6/9 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5/8 + 1/6</span>?',
      choices: ["19/24", "6/14", "6/24", "3/4"],
      answer: "19/24",
      hints: [
        "Find a common denominator for 8 and 6.",
        "LCD = 24. Convert: 5/8 = 15/24 and 1/6 = 4/24.",
        "15/24 + 4/24 = 19/24."
      ],
      explanation: [
        "LCD of 8 and 6 is 24. Rewrite: 5/8 = 15/24, 1/6 = 4/24.",
        "15/24 + 4/24 = 19/24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">1/4 + 2/5</span>? Write your answer as a fraction.',
      answer: "13/20",
      hints: [
        "Find the LCD of 4 and 5.",
        "LCD = 20. Convert: 1/4 = 5/20 and 2/5 = 8/20.",
        "5/20 + 8/20 = 13/20."
      ],
      explanation: [
        "LCD of 4 and 5 is 20. Rewrite: 1/4 = 5/20, 2/5 = 8/20.",
        "5/20 + 8/20 = 13/20."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">2/11 + 5/11</span>?',
      choices: ["7/11", "7/22", "3/11", "10/11"],
      answer: "7/11",
      hints: [
        "The denominators are the same, so just add the numerators.",
        "2 + 5 = 7.",
        "Keep the denominator 11."
      ],
      explanation: [
        "Same denominator: add numerators 2 + 5 = 7.",
        "Result is 7/11."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/10 + 1/4</span>?',
      choices: ["11/20", "4/14", "7/20", "1/2"],
      answer: "11/20",
      hints: [
        "Find a common denominator for 10 and 4.",
        "LCD = 20. Convert: 3/10 = 6/20 and 1/4 = 5/20.",
        "6/20 + 5/20 = 11/20."
      ],
      explanation: [
        "LCD of 10 and 4 is 20. Rewrite: 3/10 = 6/20, 1/4 = 5/20.",
        "6/20 + 5/20 = 11/20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">1/6 + 5/12</span>? Write your answer as a fraction.',
      answer: "7/12",
      hints: [
        "Find the LCD of 6 and 12.",
        "LCD = 12. Convert 1/6 = 2/12.",
        "2/12 + 5/12 = 7/12."
      ],
      explanation: [
        "LCD = 12. Rewrite 1/6 as 2/12.",
        "2/12 + 5/12 = 7/12.",
        "The answer is 7/12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">1/8 + 5/8</span>?',
      choices: ["6/8", "6/16", "5/8", "4/8"],
      answer: "6/8",
      hints: [
        "The denominators are the same, so just add the numerators.",
        "1 + 5 = 6.",
        "Keep the denominator 8."
      ],
      explanation: [
        "Same denominator: add numerators 1 + 5 = 6.",
        "Result is 6/8 (which simplifies to 3/4).",
        "The answer is 6/8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4/9 + 1/3</span>?',
      choices: ["7/9", "5/12", "5/9", "4/3"],
      answer: "7/9",
      hints: [
        "Find a common denominator for 9 and 3.",
        "LCD = 9. Convert 1/3 = 3/9.",
        "4/9 + 3/9 = 7/9."
      ],
      explanation: [
        "LCD = 9. Rewrite 1/3 as 3/9.",
        "4/9 + 3/9 = 7/9.",
        "The answer is 7/9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/8 + 1/6</span>?',
      choices: ["13/24","4/14","7/24","1/2"],
      answer: "13/24",
      hints: [
        "Find a common denominator for 8 and 6.",
        "LCD = 24. Convert: 3/8 = 9/24 and 1/6 = 4/24.",
        "9/24 + 4/24 = 13/24."
      ],
      explanation: [
        "LCD of 8 and 6 is 24. Rewrite: 3/8 = 9/24, 1/6 = 4/24.",
        "9/24 + 4/24 = 13/24.",
        "The answer is 13/24."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">3/8 + 1/8</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Same denominator — just add the numerators.",
        "3 + 1 = 4, keep denominator 8.",
        "4/8 simplifies to 1/2."
      ],
      explanation: [
        "Same denominator: 3 + 1 = 4. Result is 4/8.",
        "Simplify: 4/8 = 1/2.",
        "The answer is 1/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5/6 + 1/9</span>?',
      choices: ["17/18","6/15","1/2","11/18"],
      answer: "17/18",
      hints: [
        "Find a common denominator for 6 and 9.",
        "LCD = 18. Convert: 5/6 = 15/18 and 1/9 = 2/18.",
        "15/18 + 2/18 = 17/18."
      ],
      explanation: [
        "LCD of 6 and 9 is 18. Rewrite: 5/6 = 15/18, 1/9 = 2/18.",
        "15/18 + 2/18 = 17/18.",
        "The answer is 17/18."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">\frac{2}{9} + \frac{4}{9}</span>?',
      choices: ["6/9", "6/18", "2/3", "8/9"],
      answer: "6/9",
      hints: [
        "When fractions have the same denominator, just add the numerators.",
        "2 + 4 = 6, and the denominator stays 9.",
        "The answer is 6/9 (which also equals 2/3, but 6/9 is the direct sum)."
      ],
      explanation: [
        "Same denominator: add numerators. 2 + 4 = 6.",
        "So 2/9 + 4/9 = 6/9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\frac{3}{8} + \frac{1}{4}</span>? Give your answer as a numerator (the denominator is 8).',
      answer: "5",
      hints: [
        "First find a common denominator. The LCD of 8 and 4 is 8.",
        "Rewrite 1/4 as 2/8.",
        "Now add: 3/8 + 2/8 = ?/8."
      ],
      explanation: [
        "LCD of 8 and 4 is 8. Rewrite: 1/4 = 2/8.",
        "3/8 + 2/8 = 5/8. The numerator is 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{1}{6} + \frac{3}{8}</span>?',
      choices: ["13/24", "4/14", "4/24", "7/24"],
      answer: "13/24",
      hints: [
        "Find the LCD of 6 and 8.",
        "LCD(6, 8) = 24. Rewrite: 1/6 = 4/24, 3/8 = 9/24.",
        "4/24 + 9/24 = 13/24."
      ],
      explanation: [
        "LCD(6, 8) = 24. Rewrite: 1/6 = 4/24, 3/8 = 9/24.",
        "4/24 + 9/24 = 13/24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">2/7 + 3/14</span>?',
      choices: ["1/2", "5/21", "5/14", "7/14"],
      answer: "1/2",
      hints: [
        "Find the LCD of 7 and 14.",
        "LCD = 14. Convert 2/7 = 4/14.",
        "4/14 + 3/14 = 7/14 = 1/2."
      ],
      explanation: [
        "LCD = 14. Rewrite 2/7 as 4/14.",
        "4/14 + 3/14 = 7/14 = 1/2.",
        "The answer is 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">5/11 + 3/11</span>? Write your answer as a fraction.',
      answer: "8/11",
      hints: [
        "Same denominator — just add the numerators.",
        "5 + 3 = 8.",
        "The answer is 8 over 11."
      ],
      explanation: [
        "Since the denominators are the same, add numerators: 5 + 3 = 8.",
        "The answer is 8/11.",
        "When denominators match, only add the numerators."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">2/5 + 1/4</span>?',
      choices: ["13/20", "3/9", "3/20", "7/20"],
      answer: "13/20",
      hints: [
        "Find a common denominator for 5 and 4.",
        "LCD = 20. Convert: 2/5 = 8/20 and 1/4 = 5/20.",
        "8/20 + 5/20 = 13/20."
      ],
      explanation: [
        "LCD of 5 and 4 is 20. Rewrite: 2/5 = 8/20, 1/4 = 5/20.",
        "8/20 + 5/20 = 13/20.",
        "The answer is 13/20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/7 + 1/3</span>?',
      choices: ["16/21", "4/10", "4/21", "10/21"],
      answer: "16/21",
      hints: [
        "Find a common denominator for 7 and 3.",
        "LCD = 21. Convert: 3/7 = 9/21 and 1/3 = 7/21.",
        "9/21 + 7/21 = 16/21."
      ],
      explanation: [
        "LCD of 7 and 3 is 21. Rewrite: 3/7 = 9/21, 1/3 = 7/21.",
        "9/21 + 7/21 = 16/21.",
        "The answer is 16/21."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">3/13 + 7/13</span>? Write your answer as a fraction.',
      answer: "10/13",
      hints: [
        "Same denominator — just add the numerators.",
        "3 + 7 = 10.",
        "The answer is 10 over 13."
      ],
      explanation: [
        "Since the denominators are the same, add numerators: 3 + 7 = 10.",
        "The answer is 10/13.",
        "When denominators match, only add the numerators."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4/9 + 5/12</span>?',
      choices: ["31/36", "9/21", "9/36", "1/3"],
      answer: "31/36",
      hints: [
        "Find a common denominator for 9 and 12.",
        "LCD = 36. Convert: 4/9 = 16/36 and 5/12 = 15/36.",
        "16/36 + 15/36 = 31/36."
      ],
      explanation: [
        "LCD of 9 and 12 is 36. Rewrite: 4/9 = 16/36, 5/12 = 15/36.",
        "16/36 + 15/36 = 31/36.",
        "The answer is 31/36."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/5 + 2/7</span>? Write your answer as a fraction.',
      answer: "31/35",
      hints: [
        "Find the LCD of 5 and 7.",
        "LCD = 35. Convert: 3/5 = 21/35 and 2/7 = 10/35.",
        "21/35 + 10/35 = 31/35."
      ],
      explanation: [
        "LCD of 5 and 7 is 35. Rewrite: 3/5 = 21/35, 2/7 = 10/35.",
        "21/35 + 10/35 = 31/35.",
        "The answer is 31/35."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">4/11 + 6/11</span>?',
      choices: ["10/11","10/22","2/11","24/11"],
      answer: "10/11",
      hints: [
        "The denominators are the same, so just add the numerators.",
        "4 + 6 = 10.",
        "Keep the denominator 11."
      ],
      explanation: [
        "Same denominator: add numerators 4 + 6 = 10.",
        "Result is 10/11.",
        "When denominators match, only add the numerators."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5/9 + 1/6</span>?',
      choices: ["13/18","6/15","7/18","1/3"],
      answer: "13/18",
      hints: [
        "Find a common denominator for 9 and 6.",
        "LCD = 18. Convert: 5/9 = 10/18 and 1/6 = 3/18.",
        "10/18 + 3/18 = 13/18."
      ],
      explanation: [
        "LCD of 9 and 6 is 18. Rewrite: 5/9 = 10/18, 1/6 = 3/18.",
        "10/18 + 3/18 = 13/18.",
        "The answer is 13/18."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'You drank <span class="math">2/5</span> of a bottle of juice in the morning and <span class="math">1/3</span> in the afternoon. How much did you drink in total?',
      choices: ["11/15", "3/8", "3/15", "1/2"],
      answer: "11/15",
      hints: [
        "Find the LCD of 5 and 3.",
        "LCD = 15. Convert: 2/5 = 6/15 and 1/3 = 5/15.",
        "6/15 + 5/15 = 11/15."
      ],
      explanation: [
        "LCD = 15. Rewrite: 2/5 = 6/15, 1/3 = 5/15.",
        "6/15 + 5/15 = <strong>11/15</strong> of the bottle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/7 + 2/7</span>? Write your answer as a fraction.',
      answer: "5/7",
      hints: [
        "The denominators are the same, so just add the numerators.",
        "3 + 2 = 5.",
        "Keep the denominator 7."
      ],
      explanation: [
        "Same denominator: add numerators 3 + 2 = 5.",
        "Result is <strong>5/7</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/8 + 3/10</span>?',
      choices: ["37/40", "8/18", "4/9", "31/40"],
      answer: "37/40",
      hints: [
        "Find the LCD of 8 and 10.",
        "LCD = 40. Convert: 5/8 = 25/40 and 3/10 = 12/40.",
        "25/40 + 12/40 = 37/40."
      ],
      explanation: [
        "LCD of 8 and 10 is 40. Rewrite: 5/8 = 25/40, 3/10 = 12/40.",
        "25/40 + 12/40 = <strong>37/40</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 3: Mixed Numbers (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Convert the mixed number <span class="math">2 1/3</span> to an improper fraction.',
      choices: ["7/3", "5/3", "8/3", "6/3"],
      answer: "7/3",
      hints: [
        "Multiply the whole number by the denominator, then add the numerator.",
        "2 × 3 = 6, then 6 + 1 = 7.",
        "Put 7 over the denominator 3."
      ],
      explanation: [
        "2 × 3 + 1 = 7.",
        "So 2 1/3 = 7/3."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3 2/5</span> to an improper fraction. What is the numerator?',
      answer: "17",
      hints: [
        "Multiply the whole number by the denominator.",
        "3 × 5 = 15, then add the numerator: 15 + 2 = 17.",
        "The improper fraction is 17/5."
      ],
      explanation: [
        "3 × 5 + 2 = 15 + 2 = 17.",
        "So 3 2/5 = 17/5. The numerator is 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">11/4</span> to a mixed number.',
      choices: ["2 3/4", "3 1/4", "2 1/4", "1 3/4"],
      answer: "2 3/4",
      hints: [
        "Divide 11 by 4.",
        "11 ÷ 4 = 2 remainder 3.",
        "The mixed number is 2 and 3/4."
      ],
      explanation: [
        "11 ÷ 4 = 2 R 3.",
        "So 11/4 = 2 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">4 3/8</span> to an improper fraction. What is the numerator?',
      answer: "35",
      hints: [
        "Multiply whole number by denominator: 4 × 8.",
        "4 × 8 = 32, then add the numerator: 32 + 3 = 35.",
        "The improper fraction is 35/8."
      ],
      explanation: [
        "4 × 8 + 3 = 32 + 3 = 35.",
        "So 4 3/8 = 35/8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">9/2</span> to a mixed number.',
      choices: ["4 1/2", "3 1/2", "5 1/2", "4 2/2"],
      answer: "4 1/2",
      hints: [
        "Divide 9 by 2.",
        "9 ÷ 2 = 4 remainder 1.",
        "Write the remainder over the denominator."
      ],
      explanation: [
        "9 ÷ 2 = 4 R 1.",
        "So 9/2 = 4 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">5 2/7</span> to an improper fraction. What is the numerator?',
      answer: "37",
      hints: [
        "Multiply the whole number by the denominator: 5 × 7.",
        "5 × 7 = 35, then add the numerator: 35 + 2 = 37.",
        "The improper fraction is 37/7."
      ],
      explanation: [
        "5 × 7 + 2 = 35 + 2 = 37.",
        "So 5 2/7 = 37/7. The numerator is 37."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">17/6</span> to a mixed number.',
      choices: ["2 5/6", "3 1/6", "2 1/6", "1 5/6"],
      answer: "2 5/6",
      hints: [
        "Divide 17 by 6.",
        "17 ÷ 6 = 2 remainder 5.",
        "The mixed number is 2 and 5/6."
      ],
      explanation: [
        "17 ÷ 6 = 2 R 5.",
        "So 17/6 = 2 5/6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">15/4</span> to a mixed number.',
      choices: ["3 3/4", "4 1/4", "3 1/4", "2 3/4"],
      answer: "3 3/4",
      hints: [
        "Divide 15 by 4.",
        "15 ÷ 4 = 3 remainder 3.",
        "Write the remainder over the denominator."
      ],
      explanation: [
        "15 ÷ 4 = 3 R 3.",
        "So 15/4 = 3 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">6 1/9</span> to an improper fraction. What is the numerator?',
      answer: "55",
      hints: [
        "Multiply the whole number by the denominator: 6 × 9.",
        "6 × 9 = 54, then add the numerator: 54 + 1 = 55.",
        "The improper fraction is 55/9."
      ],
      explanation: [
        "6 × 9 + 1 = 54 + 1 = 55.",
        "So 6 1/9 = 55/9. The numerator is 55."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">19/5</span> to a mixed number.',
      choices: ["3 4/5", "4 1/5", "2 4/5", "3 1/5"],
      answer: "3 4/5",
      hints: [
        "Divide 19 by 5.",
        "19 ÷ 5 = 3 remainder 4.",
        "The mixed number is 3 and 4/5."
      ],
      explanation: [
        "19 ÷ 5 = 3 R 4.",
        "So 19/5 = 3 4/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">23/8</span> to a mixed number.',
      choices: ["2 7/8", "3 1/8", "2 3/8", "3 7/8"],
      answer: "2 7/8",
      hints: [
        "Divide 23 by 8.",
        "23 ÷ 8 = 2 remainder 7.",
        "The mixed number is 2 and 7/8."
      ],
      explanation: [
        "23 ÷ 8 = 2 R 7.",
        "So 23/8 = 2 7/8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">7 1/4</span> to an improper fraction. What is the numerator?',
      answer: "29",
      hints: [
        "Multiply the whole number by the denominator: 7 × 4.",
        "7 × 4 = 28, then add the numerator: 28 + 1 = 29.",
        "The improper fraction is 29/4."
      ],
      explanation: [
        "7 × 4 + 1 = 28 + 1 = 29.",
        "So 7 1/4 = 29/4. The numerator is 29."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">31/6</span> to a mixed number.',
      choices: ["5 1/6", "6 1/6", "4 1/6", "5 5/6"],
      answer: "5 1/6",
      hints: [
        "Divide 31 by 6.",
        "31 ÷ 6 = 5 remainder 1.",
        "The mixed number is 5 and 1/6."
      ],
      explanation: [
        "31 ÷ 6 = 5 R 1.",
        "So 31/6 = 5 1/6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">13/3</span> to a mixed number.',
      choices: ["4 1/3", "3 1/3", "5 1/3", "4 2/3"],
      answer: "4 1/3",
      hints: [
        "Divide 13 by 3.",
        "13 ÷ 3 = 4 remainder 1.",
        "The mixed number is 4 and 1/3."
      ],
      explanation: [
        "13 ÷ 3 = 4 R 1.",
        "So 13/3 = 4 1/3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">8 3/7</span> to an improper fraction. What is the numerator?',
      answer: "59",
      hints: [
        "Multiply the whole number by the denominator: 8 × 7.",
        "8 × 7 = 56, then add the numerator: 56 + 3 = 59.",
        "The improper fraction is 59/7."
      ],
      explanation: [
        "8 × 7 + 3 = 56 + 3 = 59.",
        "So 8 3/7 = 59/7. The numerator is 59."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">22/7</span> to a mixed number.',
      choices: ["3 1/7", "2 1/7", "4 1/7", "3 2/7"],
      answer: "3 1/7",
      hints: [
        "Divide 22 by 7.",
        "22 ÷ 7 = 3 remainder 1.",
        "The mixed number is 3 and 1/7."
      ],
      explanation: [
        "22 ÷ 7 = 3 R 1.",
        "So 22/7 = 3 1/7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">29/9</span> to a mixed number.',
      choices: ["3 2/9", "2 2/9", "4 2/9", "3 1/9"],
      answer: "3 2/9",
      hints: [
        "Divide 29 by 9.",
        "29 ÷ 9 = 3 remainder 2.",
        "The mixed number is 3 and 2/9."
      ],
      explanation: [
        "29 ÷ 9 = 3 R 2.",
        "So 29/9 = 3 2/9."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">5 1/6</span> to an improper fraction. What is the numerator?',
      answer: "31",
      hints: [
        "Multiply the whole number by the denominator: 5 × 6.",
        "5 × 6 = 30, then add the numerator: 30 + 1 = 31.",
        "The improper fraction is 31/6."
      ],
      explanation: [
        "5 × 6 + 1 = 30 + 1 = 31.",
        "So 5 1/6 = 31/6. The numerator is 31.",
        "Always multiply whole number by denominator, then add numerator."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">25/7</span> to a mixed number.',
      choices: ["3 4/7", "4 3/7", "3 3/7", "2 4/7"],
      answer: "3 4/7",
      hints: [
        "Divide 25 by 7.",
        "25 ÷ 7 = 3 remainder 4.",
        "The mixed number is 3 and 4/7."
      ],
      explanation: [
        "25 ÷ 7 = 3 R 4.",
        "So 25/7 = 3 4/7.",
        "The whole number is 3 with remainder 4 over 7."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert the mixed number <span class="math">1 5/8</span> to an improper fraction.',
      choices: ["13/8", "6/8", "15/8", "8/5"],
      answer: "13/8",
      hints: [
        "Multiply the whole number by the denominator, then add the numerator.",
        "1 × 8 = 8, then 8 + 5 = 13.",
        "Put 13 over the denominator 8."
      ],
      explanation: [
        "1 × 8 + 5 = 8 + 5 = 13.",
        "So 1 5/8 = 13/8.",
        "The improper fraction is 13/8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">10/3</span> to a mixed number.',
      choices: ["3 1/3","2 1/3","4 1/3","3 2/3"],
      answer: "3 1/3",
      hints: [
        "Divide 10 by 3.",
        "10 ÷ 3 = 3 remainder 1.",
        "The mixed number is 3 and 1/3."
      ],
      explanation: [
        "10 ÷ 3 = 3 R 1.",
        "So 10/3 = 3 1/3.",
        "The whole number is 3 with remainder 1 over 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">7 2/9</span> to an improper fraction. What is the numerator?',
      answer: "65",
      hints: [
        "Multiply the whole number by the denominator: 7 × 9.",
        "7 × 9 = 63, then add the numerator: 63 + 2 = 65.",
        "The improper fraction is 65/9."
      ],
      explanation: [
        "7 × 9 + 2 = 63 + 2 = 65.",
        "So 7 2/9 = 65/9. The numerator is 65.",
        "Always multiply whole number by denominator, then add numerator."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">37/8</span> to a mixed number.',
      choices: ["4 5/8","5 3/8","4 3/8","3 5/8"],
      answer: "4 5/8",
      hints: [
        "Divide 37 by 8.",
        "37 ÷ 8 = 4 remainder 5.",
        "The mixed number is 4 and 5/8."
      ],
      explanation: [
        "37 ÷ 8 = 4 R 5.",
        "So 37/8 = 4 5/8.",
        "The whole number is 4 with remainder 5 over 8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3\frac{2}{5}</span> to an improper fraction. What is the numerator?',
      answer: "17",
      hints: [
        "Multiply the whole number by the denominator, then add the numerator.",
        "3 × 5 = 15, then add 2.",
        "15 + 2 = 17."
      ],
      explanation: [
        "3 × 5 + 2 = 15 + 2 = 17.",
        "So 3 2/5 = 17/5. The numerator is 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{29}{6}</span> as a mixed number?',
      choices: ["4 5/6", "5 1/6", "4 1/6", "3 5/6"],
      answer: "4 5/6",
      hints: [
        "Divide 29 by 6 to find the whole number part.",
        "29 ÷ 6 = 4 remainder 5.",
        "The whole number is 4 and the fraction part is 5/6."
      ],
      explanation: [
        "29 ÷ 6 = 4 R 5.",
        "So 29/6 = 4 5/6."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">\frac{23}{4}</span> to a mixed number. What is the whole number part?',
      answer: "5",
      hints: [
        "Divide 23 by 4.",
        "23 ÷ 4 = 5 remainder 3.",
        "The whole number part is 5."
      ],
      explanation: [
        "23 ÷ 4 = 5 R 3.",
        "So 23/4 = 5 3/4. The whole number is 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">21/8</span> to a mixed number.',
      choices: ["2 5/8", "3 5/8", "2 3/8", "3 1/8"],
      answer: "2 5/8",
      hints: [
        "Divide 21 by 8.",
        "21 ÷ 8 = 2 remainder 5.",
        "The mixed number is 2 and 5/8."
      ],
      explanation: [
        "21 ÷ 8 = 2 R 5.",
        "So 21/8 = 2 5/8.",
        "The whole number is 2 with remainder 5 over 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">9 3/11</span> to an improper fraction. What is the numerator?',
      answer: "102",
      hints: [
        "Multiply the whole number by the denominator: 9 × 11.",
        "9 × 11 = 99, then add the numerator: 99 + 3 = 102.",
        "The improper fraction is 102/11."
      ],
      explanation: [
        "9 × 11 + 3 = 99 + 3 = 102.",
        "So 9 3/11 = 102/11. The numerator is 102.",
        "Always multiply whole number by denominator, then add numerator."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">41/9</span> to a mixed number.',
      choices: ["4 5/9", "5 4/9", "4 1/9", "3 5/9"],
      answer: "4 5/9",
      hints: [
        "Divide 41 by 9.",
        "41 ÷ 9 = 4 remainder 5.",
        "The mixed number is 4 and 5/9."
      ],
      explanation: [
        "41 ÷ 9 = 4 R 5.",
        "So 41/9 = 4 5/9.",
        "The whole number is 4 with remainder 5 over 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">7 5/11</span> to an improper fraction. What is the numerator?',
      answer: "82",
      hints: [
        "Multiply the whole number by the denominator: 7 × 11.",
        "7 × 11 = 77, then add the numerator: 77 + 5 = 82.",
        "The improper fraction is 82/11."
      ],
      explanation: [
        "7 × 11 + 5 = 77 + 5 = 82.",
        "So 7 5/11 = 82/11. The numerator is 82.",
        "Always multiply whole number by denominator, then add numerator."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">25/7</span> to a mixed number.',
      choices: ["3 4/7", "4 3/7", "3 3/7", "2 4/7"],
      answer: "3 4/7",
      hints: [
        "Divide 25 by 7.",
        "25 ÷ 7 = 3 remainder 4.",
        "The mixed number is 3 and 4/7."
      ],
      explanation: [
        "25 ÷ 7 = 3 R 4.",
        "So 25/7 = 3 4/7.",
        "The whole number is 3 with remainder 4 over 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">47/8</span> to a mixed number.',
      choices: ["5 7/8", "6 1/8", "4 7/8", "5 3/8"],
      answer: "5 7/8",
      hints: [
        "Divide 47 by 8.",
        "47 ÷ 8 = 5 remainder 7.",
        "The mixed number is 5 and 7/8."
      ],
      explanation: [
        "47 ÷ 8 = 5 R 7.",
        "So 47/8 = 5 7/8.",
        "Write the quotient as the whole number and remainder over the divisor."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">6 4/7</span> to an improper fraction. What is the numerator?',
      answer: "46",
      hints: [
        "Multiply the whole number by the denominator: 6 × 7.",
        "6 × 7 = 42, then add the numerator: 42 + 4 = 46.",
        "The improper fraction is 46/7."
      ],
      explanation: [
        "6 × 7 + 4 = 42 + 4 = 46.",
        "So 6 4/7 = 46/7. The numerator is 46.",
        "Always multiply whole number by denominator, then add numerator."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">27/5</span> to a mixed number.',
      choices: ["5 2/5","4 2/5","6 2/5","5 3/5"],
      answer: "5 2/5",
      hints: [
        "Divide 27 by 5.",
        "27 ÷ 5 = 5 remainder 2.",
        "The mixed number is 5 and 2/5."
      ],
      explanation: [
        "27 ÷ 5 = 5 R 2.",
        "So 27/5 = 5 2/5.",
        "Write the quotient as the whole number and remainder over the divisor."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">53/9</span> to a mixed number.',
      choices: ["5 8/9","6 1/9","5 7/9","4 8/9"],
      answer: "5 8/9",
      hints: [
        "Divide 53 by 9.",
        "53 ÷ 9 = 5 remainder 8.",
        "The mixed number is 5 and 8/9."
      ],
      explanation: [
        "53 ÷ 9 = 5 R 8.",
        "So 53/9 = 5 8/9.",
        "The whole number is 5 with remainder 8 over 9."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">17/5</span> to a mixed number.',
      choices: ["3 2/5", "2 3/5", "4 2/5", "3 1/5"],
      answer: "3 2/5",
      hints: [
        "Divide 17 by 5.",
        "17 ÷ 5 = 3 remainder 2.",
        "The mixed number is 3 and 2/5."
      ],
      explanation: [
        "17 ÷ 5 = 3 R 2.",
        "So 17/5 = <strong>3 2/5</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A carpenter has <span class="math">4 3/4</span> feet of wood. Convert this to an improper fraction. What is the numerator?',
      answer: "19",
      hints: [
        "Multiply the whole number by the denominator: 4 × 4 = 16.",
        "Add the numerator: 16 + 3 = 19.",
        "The improper fraction is 19/4."
      ],
      explanation: [
        "4 × 4 + 3 = 16 + 3 = <strong>19</strong>.",
        "So 4 3/4 = 19/4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">43/6</span> to a mixed number.',
      choices: ["7 1/6", "6 1/6", "8 1/6", "7 5/6"],
      answer: "7 1/6",
      hints: [
        "Divide 43 by 6.",
        "43 ÷ 6 = 7 remainder 1.",
        "The mixed number is 7 and 1/6."
      ],
      explanation: [
        "43 ÷ 6 = 7 R 1.",
        "So 43/6 = <strong>7 1/6</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 4: Fractions & Multiplication (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">4 × 1/3</span>?',
      choices: ["4/3", "4/12", "1/12", "3/4"],
      answer: "4/3",
      hints: [
        "Multiply the whole number by the numerator of the fraction.",
        "4 × 1 = 4, keep the denominator 3.",
        "The answer is 4/3."
      ],
      explanation: [
        "4 × 1/3 = (4 × 1)/3 = 4/3.",
        "This equals 1 1/3 as a mixed number."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">5 × 2/5</span>? Give your answer as a whole number.',
      answer: "2",
      hints: [
        "Multiply 5 by the numerator 2.",
        "5 × 2 = 10, keep the denominator 5.",
        "10/5 = 2."
      ],
      explanation: [
        "5 × 2/5 = 10/5 = 2.",
        "The answer is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">6 × 3/4</span>?',
      choices: ["9/2", "18/4", "3/2", "6/4"],
      answer: "9/2",
      hints: [
        "Multiply: 6 × 3 = 18, keep denominator 4.",
        "18/4 — now simplify by dividing both by 2.",
        "18 ÷ 2 = 9, 4 ÷ 2 = 2 → 9/2."
      ],
      explanation: [
        "6 × 3/4 = 18/4.",
        "Simplify: 18/4 = 9/2 (or 4 1/2)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">8 × 3/8</span>? Give your answer as a whole number.',
      answer: "3",
      hints: [
        "Multiply 8 by the numerator: 8 × 3 = 24.",
        "Keep the denominator: 24/8.",
        "24 ÷ 8 = 3."
      ],
      explanation: [
        "8 × 3/8 = 24/8 = 3.",
        "The answer is 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3 × 5/6</span>?',
      choices: ["5/2", "15/6", "15/18", "1/2"],
      answer: "5/2",
      hints: [
        "Multiply: 3 × 5 = 15, keep denominator 6.",
        "15/6 — simplify by dividing both by 3.",
        "15 ÷ 3 = 5, 6 ÷ 3 = 2 → 5/2."
      ],
      explanation: [
        "3 × 5/6 = 15/6.",
        "Simplify: 15/6 = 5/2 (or 2 1/2)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">7 × 2/7</span>? Give your answer as a whole number.',
      answer: "2",
      hints: [
        "Multiply 7 by the numerator 2.",
        "7 × 2 = 14, keep the denominator 7.",
        "14/7 = 2."
      ],
      explanation: [
        "7 × 2/7 = 14/7 = 2.",
        "The answer is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">9 × 2/3</span>?',
      choices: ["6", "18/3", "3", "9/3"],
      answer: "6",
      hints: [
        "Multiply: 9 × 2 = 18, keep denominator 3.",
        "18/3 = 6.",
        "The answer is 6."
      ],
      explanation: [
        "9 × 2/3 = 18/3 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">10 × 3/5</span>? Give your answer as a whole number.',
      answer: "6",
      hints: [
        "Multiply 10 by the numerator: 10 × 3 = 30.",
        "Keep the denominator: 30/5.",
        "30 ÷ 5 = 6."
      ],
      explanation: [
        "10 × 3/5 = 30/5 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">3 × 1/4</span>?',
      choices: ["3/4", "1/12", "3/12", "4/3"],
      answer: "3/4",
      hints: [
        "Multiply the whole number by the numerator.",
        "3 × 1 = 3, keep the denominator 4.",
        "The answer is 3/4."
      ],
      explanation: [
        "3 × 1/4 = (3 × 1)/4 = 3/4.",
        "The answer is 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">12 × 5/6</span>? Give your answer as a whole number.',
      answer: "10",
      hints: [
        "Multiply 12 by the numerator 5.",
        "12 × 5 = 60, keep the denominator 6.",
        "60/6 = 10."
      ],
      explanation: [
        "12 × 5/6 = 60/6 = 10.",
        "The answer is 10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">15 × 2/5</span>?',
      choices: ["6", "30/5", "3", "10"],
      answer: "6",
      hints: [
        "Multiply: 15 × 2 = 30, keep denominator 5.",
        "30/5 = 6.",
        "The answer is 6."
      ],
      explanation: [
        "15 × 2/5 = 30/5 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">6 × 1/6</span>? Give your answer as a whole number.',
      answer: "1",
      hints: [
        "Multiply the whole number by the numerator.",
        "6 × 1 = 6, keep the denominator 6.",
        "6/6 = 1."
      ],
      explanation: [
        "6 × 1/6 = 6/6 = 1.",
        "The answer is 1."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">8 × 5/12</span>?',
      choices: ["10/3", "40/12", "5/4", "8/12"],
      answer: "10/3",
      hints: [
        "Multiply: 8 × 5 = 40, keep denominator 12.",
        "40/12 — simplify by dividing both by 4.",
        "40 ÷ 4 = 10, 12 ÷ 4 = 3 → 10/3."
      ],
      explanation: [
        "8 × 5/12 = 40/12.",
        "Simplify: 40/12 = 10/3 (or 3 1/3)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">14 × 3/7</span>?',
      choices: ["6", "42/7", "2", "21"],
      answer: "6",
      hints: [
        "Multiply: 14 × 3 = 42, keep denominator 7.",
        "42/7 = 6.",
        "The answer is 6."
      ],
      explanation: [
        "14 × 3/7 = 42/7 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">9 × 4/9</span>? Give your answer as a whole number.',
      answer: "4",
      hints: [
        "Multiply 9 by the numerator 4.",
        "9 × 4 = 36, keep the denominator 9.",
        "36/9 = 4."
      ],
      explanation: [
        "9 × 4/9 = 36/9 = 4.",
        "The answer is 4."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">2 × 3/8</span>?',
      choices: ["3/4", "6/8", "6/16", "2/8"],
      answer: "3/4",
      hints: [
        "Multiply the whole number by the numerator.",
        "2 × 3 = 6, keep the denominator 8.",
        "6/8 simplifies to 3/4."
      ],
      explanation: [
        "2 × 3/8 = 6/8.",
        "Simplify: 6/8 = 3/4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">10 × 7/10</span>?',
      choices: ["7", "70/10", "10/7", "1"],
      answer: "7",
      hints: [
        "Multiply: 10 × 7 = 70, keep denominator 10.",
        "70/10 = 7.",
        "The answer is 7."
      ],
      explanation: [
        "10 × 7/10 = 70/10 = 7.",
        "The answer is 7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4 × 7/8</span>? Write your answer as a fraction.',
      answer: "7/2",
      hints: [
        "Multiply 4 by the numerator: 4 × 7 = 28.",
        "Keep the denominator: 28/8.",
        "Simplify: 28/8 = 7/2."
      ],
      explanation: [
        "4 × 7/8 = 28/8.",
        "Simplify: 28 ÷ 4 = 7, 8 ÷ 4 = 2 → 7/2.",
        "The answer is 7/2 (or 3 1/2)."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">5 × 1/5</span>?',
      choices: ["1", "5/5", "5/25", "1/25"],
      answer: "1",
      hints: [
        "Multiply the whole number by the numerator.",
        "5 × 1 = 5, keep the denominator 5.",
        "5/5 = 1."
      ],
      explanation: [
        "5 × 1/5 = 5/5 = 1.",
        "The answer is 1.",
        "Any number times its reciprocal equals 1."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">11 × 2/11</span>?',
      choices: ["2", "22/11", "11/2", "22"],
      answer: "2",
      hints: [
        "Multiply: 11 × 2 = 22, keep denominator 11.",
        "22/11 = 2.",
        "The answer is 2."
      ],
      explanation: [
        "11 × 2/11 = 22/11 = 2.",
        "The answer is 2.",
        "The 11 in the whole number cancels with the denominator."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">4 × 3/4</span>? Give your answer as a whole number.',
      answer: "3",
      hints: [
        "Multiply 4 by the numerator 3.",
        "4 × 3 = 12, keep the denominator 4.",
        "12/4 = 3."
      ],
      explanation: [
        "4 × 3/4 = 12/4 = 3.",
        "The answer is 3.",
        "The 4 in the whole number cancels with the denominator."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">6 × 5/9</span>?',
      choices: ["10/3","30/9","5/3","6/9"],
      answer: "10/3",
      hints: [
        "Multiply: 6 × 5 = 30, keep denominator 9.",
        "30/9 — simplify by dividing both by 3.",
        "30 ÷ 3 = 10, 9 ÷ 3 = 3 → 10/3."
      ],
      explanation: [
        "6 × 5/9 = 30/9.",
        "Simplify: 30/9 = 10/3 (or 3 1/3).",
        "The answer is 10/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">15 × 4/5</span>?',
      choices: ["12","60/5","3","20"],
      answer: "12",
      hints: [
        "Multiply: 15 × 4 = 60, keep denominator 5.",
        "60/5 = 12.",
        "The answer is 12."
      ],
      explanation: [
        "15 × 4/5 = 60/5 = 12.",
        "The answer is 12.",
        "You can also simplify first: 15/5 = 3, then 3 × 4 = 12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">5 \times \frac{2}{9}</span>?',
      choices: ["10/9", "7/9", "10/45", "2/45"],
      answer: "10/9",
      hints: [
        "Multiply the whole number by the numerator.",
        "5 × 2 = 10, keep the denominator 9.",
        "The answer is 10/9."
      ],
      explanation: [
        "5 × 2/9 = (5 × 2)/9 = 10/9.",
        "10/9 can also be written as 1 1/9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">8 \times \frac{3}{4}</span>? Give your answer as a whole number.',
      answer: "6",
      hints: [
        "Multiply 8 by the numerator 3.",
        "8 × 3 = 24, then divide by 4.",
        "24 ÷ 4 = 6."
      ],
      explanation: [
        "8 × 3/4 = (8 × 3)/4 = 24/4 = 6.",
        "The answer is 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{1}{3}</span> of 27?',
      choices: ["9", "3", "27", "18"],
      answer: "9",
      hints: [
        "Of means multiply: 1/3 × 27.",
        "27 × 1 = 27, then divide by 3.",
        "27 ÷ 3 = 9."
      ],
      explanation: [
        "1/3 of 27 = 27/3 = 9.",
        "So 1/3 of 27 is 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">16 \times \frac{3}{8}</span>? Give your answer as a whole number.',
      answer: "6",
      hints: [
        "Multiply 16 by the numerator 3.",
        "16 × 3 = 48, keep the denominator 8.",
        "48/8 = 6."
      ],
      explanation: [
        "16 × 3/8 = 48/8 = 6.",
        "The answer is 6.",
        "You can also simplify first: 16/8 = 2, then 2 × 3 = 6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">7 \times \frac{1}{7}</span>?',
      choices: ["1", "7/7", "7/49", "1/49"],
      answer: "1",
      hints: [
        "Multiply the whole number by the numerator.",
        "7 × 1 = 7, keep the denominator 7.",
        "7/7 = 1."
      ],
      explanation: [
        "7 × 1/7 = 7/7 = 1.",
        "The answer is 1.",
        "Any number times its reciprocal equals 1."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">18 \times \frac{5}{9}</span>?',
      choices: ["10", "90/9", "15", "18/9"],
      answer: "10",
      hints: [
        "Multiply: 18 × 5 = 90, keep denominator 9.",
        "90/9 = 10.",
        "The answer is 10."
      ],
      explanation: [
        "18 × 5/9 = 90/9 = 10.",
        "The answer is 10.",
        "You can also simplify first: 18/9 = 2, then 2 × 5 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">9 \times \frac{1}{3}</span>?',
      answer: "3",
      hints: [
        "Multiply the whole number by the numerator.",
        "9 × 1 = 9, keep the denominator 3.",
        "9/3 = 3."
      ],
      explanation: [
        "9 × 1/3 = 9/3 = 3.",
        "The answer is 3.",
        "Any number times 1/3 gives one-third of that number."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">15 \times \frac{2}{5}</span>?',
      choices: ["6", "30/5", "10", "3"],
      answer: "6",
      hints: [
        "Multiply: 15 × 2 = 30, keep denominator 5.",
        "30/5 = 6.",
        "Or simplify first: 15/5 = 3, then 3 × 2 = 6."
      ],
      explanation: [
        "15 × 2/5 = 30/5 = 6.",
        "The answer is 6.",
        "You can also simplify first: 15 ÷ 5 = 3, then 3 × 2 = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">24 \times \frac{3}{8}</span>?',
      choices: ["9", "72/8", "12", "8"],
      answer: "9",
      hints: [
        "Multiply: 24 × 3 = 72, keep denominator 8.",
        "72/8 = 9.",
        "Or simplify first: 24/8 = 3, then 3 × 3 = 9."
      ],
      explanation: [
        "24 × 3/8 = 72/8 = 9.",
        "The answer is 9.",
        "Simplifying first: 24 ÷ 8 = 3, then 3 × 3 = 9."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">20 \times \frac{3}{10}</span>?',
      choices: ["6","60/10","3","30"],
      answer: "6",
      hints: [
        "Multiply: 20 × 3 = 60, keep denominator 10.",
        "60/10 = 6.",
        "Or simplify first: 20/10 = 2, then 2 × 3 = 6."
      ],
      explanation: [
        "20 × 3/10 = 60/10 = 6.",
        "The answer is 6.",
        "Simplifying first: 20 ÷ 10 = 2, then 2 × 3 = 6."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">3 \times \frac{2}{3}</span>? Give your answer as a whole number.',
      answer: "2",
      hints: [
        "Multiply 3 by the numerator 2.",
        "3 × 2 = 6, keep the denominator 3.",
        "6/3 = 2."
      ],
      explanation: [
        "3 × 2/3 = 6/3 = 2.",
        "The answer is 2.",
        "The 3 in the whole number cancels with the denominator."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{1}{4}</span> of 36?',
      choices: ["9","4","36","12"],
      answer: "9",
      hints: [
        "Of means multiply: 1/4 × 36.",
        "36 × 1 = 36, then divide by 4.",
        "36 ÷ 4 = 9."
      ],
      explanation: [
        "1/4 of 36 = 36/4 = 9.",
        "So 1/4 of 36 is 9.",
        "Divide by the denominator when the numerator is 1."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A recipe calls for <span class="math">3/4</span> cup of sugar. If you make <span class="math">2/3</span> of the recipe, how much sugar do you need?',
      choices: ["1/2 cup", "5/7 cup", "6/12 cup", "2/4 cup"],
      answer: "1/2 cup",
      hints: [
        "Multiply: 3/4 × 2/3.",
        "Numerators: 3 × 2 = 6. Denominators: 4 × 3 = 12.",
        "6/12 simplifies to 1/2."
      ],
      explanation: [
        "3/4 × 2/3 = 6/12 = <strong>1/2</strong> cup.",
        "You can also cancel the 3s before multiplying: 1/4 × 2/1 = 2/4 = 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">6 × 5/12</span>? Write your answer as a fraction.',
      answer: "5/2",
      hints: [
        "Multiply 6 by the numerator: 6 × 5 = 30.",
        "Keep the denominator: 30/12.",
        "Simplify: GCD(30, 12) = 6, so 30/12 = 5/2."
      ],
      explanation: [
        "6 × 5/12 = 30/12.",
        "Simplify: 30 ÷ 6 = 5, 12 ÷ 6 = 2 → <strong>5/2</strong> (or 2 1/2)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A farmer plants <span class="math">2/5</span> of his 40-acre field with corn. How many acres is that?',
      choices: ["16 acres", "8 acres", "20 acres", "10 acres"],
      answer: "16 acres",
      hints: [
        "Multiply: 2/5 × 40.",
        "40 × 2 = 80, then divide by 5.",
        "80 ÷ 5 = 16."
      ],
      explanation: [
        "2/5 × 40 = 80/5 = <strong>16 acres</strong>.",
        "You can also simplify first: 40 ÷ 5 = 8, then 8 × 2 = 16."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 5: Subtracting Fractions (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5/6 − 1/3</span>?',
      choices: ["1/2", "4/3", "2/6", "4/6"],
      answer: "1/2",
      hints: [
        "Find the LCD of 6 and 3.",
        "LCD = 6. Convert 1/3 = 2/6.",
        "5/6 − 2/6 = 3/6 = 1/2."
      ],
      explanation: [
        "LCD = 6. Rewrite: 1/3 = 2/6.",
        "5/6 − 2/6 = 3/6 = 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/4 − 1/6</span>? Write your answer as a fraction.',
      answer: "7/12",
      hints: [
        "Find the LCD of 4 and 6.",
        "LCD = 12. Convert: 3/4 = 9/12, 1/6 = 2/12.",
        "9/12 − 2/12 = 7/12."
      ],
      explanation: [
        "LCD = 12. Rewrite: 3/4 = 9/12, 1/6 = 2/12.",
        "9/12 − 2/12 = 7/12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/8 − 2/5</span>?',
      choices: ["19/40", "5/3", "9/40", "35/40"],
      answer: "19/40",
      hints: [
        "Find the LCD of 8 and 5.",
        "LCD = 40. Convert: 7/8 = 35/40, 2/5 = 16/40.",
        "35/40 − 16/40 = 19/40."
      ],
      explanation: [
        "LCD = 40. Rewrite: 7/8 = 35/40, 2/5 = 16/40.",
        "35/40 − 16/40 = 19/40."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">5/6 − 3/8</span>? Write your answer as a fraction.',
      answer: "11/24",
      hints: [
        "Find the LCD of 6 and 8.",
        "LCD = 24. Convert: 5/6 = 20/24, 3/8 = 9/24.",
        "20/24 − 9/24 = 11/24."
      ],
      explanation: [
        "LCD = 24. Rewrite: 5/6 = 20/24, 3/8 = 9/24.",
        "20/24 − 9/24 = 11/24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4/5 − 1/10</span>?',
      choices: ["7/10", "3/5", "3/10", "1/2"],
      answer: "7/10",
      hints: [
        "Find the LCD of 5 and 10.",
        "LCD = 10. Convert 4/5 = 8/10.",
        "8/10 − 1/10 = 7/10."
      ],
      explanation: [
        "LCD = 10. Rewrite 4/5 as 8/10.",
        "8/10 − 1/10 = 7/10."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">9/10 − 2/3</span>?',
      choices: ["7/30", "7/10", "11/30", "1/3"],
      answer: "7/30",
      hints: [
        "Find the LCD of 10 and 3.",
        "LCD = 30. Convert: 9/10 = 27/30, 2/3 = 20/30.",
        "27/30 − 20/30 = 7/30."
      ],
      explanation: [
        "LCD = 30. Rewrite: 9/10 = 27/30, 2/3 = 20/30.",
        "27/30 − 20/30 = 7/30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7/9 − 1/3</span>? Write your answer as a fraction.',
      answer: "4/9",
      hints: [
        "Find the LCD of 9 and 3.",
        "LCD = 9. Convert 1/3 = 3/9.",
        "7/9 − 3/9 = 4/9."
      ],
      explanation: [
        "LCD = 9. Rewrite 1/3 as 3/9.",
        "7/9 − 3/9 = 4/9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">11/12 − 3/4</span>?',
      choices: ["1/6", "2/12", "8/12", "1/3"],
      answer: "1/6",
      hints: [
        "Find the LCD of 12 and 4.",
        "LCD = 12. Convert 3/4 = 9/12.",
        "11/12 − 9/12 = 2/12 = 1/6."
      ],
      explanation: [
        "LCD = 12. Rewrite 3/4 as 9/12.",
        "11/12 − 9/12 = 2/12 = 1/6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">5/7 − 1/4</span>? Write your answer as a fraction.',
      answer: "13/28",
      hints: [
        "Find the LCD of 7 and 4.",
        "LCD = 28. Convert: 5/7 = 20/28, 1/4 = 7/28.",
        "20/28 − 7/28 = 13/28."
      ],
      explanation: [
        "LCD = 28. Rewrite: 5/7 = 20/28, 1/4 = 7/28.",
        "20/28 − 7/28 = 13/28."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5/8 − 1/4</span>?',
      choices: ["3/8", "4/4", "1/8", "1/2"],
      answer: "3/8",
      hints: [
        "Find the LCD of 8 and 4.",
        "LCD = 8. Convert 1/4 = 2/8.",
        "5/8 − 2/8 = 3/8."
      ],
      explanation: [
        "LCD = 8. Rewrite 1/4 as 2/8.",
        "5/8 − 2/8 = 3/8."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">8/9 − 5/12</span>? Write your answer as a fraction.',
      answer: "17/36",
      hints: [
        "Find the LCD of 9 and 12.",
        "LCD = 36. Convert: 8/9 = 32/36, 5/12 = 15/36.",
        "32/36 − 15/36 = 17/36."
      ],
      explanation: [
        "LCD = 36. Rewrite: 8/9 = 32/36, 5/12 = 15/36.",
        "32/36 − 15/36 = 17/36."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">7/10 − 2/5</span>?',
      choices: ["3/10", "5/5", "1/2", "5/10"],
      answer: "3/10",
      hints: [
        "Find the LCD of 10 and 5.",
        "LCD = 10. Convert 2/5 = 4/10.",
        "7/10 − 4/10 = 3/10."
      ],
      explanation: [
        "LCD = 10. Rewrite 2/5 as 4/10.",
        "7/10 − 4/10 = 3/10."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">7/9 − 2/5</span>? Write your answer as a fraction.',
      answer: "17/45",
      hints: [
        "Find the LCD of 9 and 5.",
        "LCD = 45. Convert: 7/9 = 35/45, 2/5 = 18/45.",
        "35/45 − 18/45 = 17/45."
      ],
      explanation: [
        "LCD = 45. Rewrite: 7/9 = 35/45, 2/5 = 18/45.",
        "35/45 − 18/45 = 17/45."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/6 − 7/12</span>?',
      choices: ["1/4", "2/12", "3/12", "1/6"],
      answer: "1/4",
      hints: [
        "Find the LCD of 6 and 12.",
        "LCD = 12. Convert 5/6 = 10/12.",
        "10/12 − 7/12 = 3/12 = 1/4."
      ],
      explanation: [
        "LCD = 12. Rewrite 5/6 as 10/12.",
        "10/12 − 7/12 = 3/12 = 1/4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">11/12 − 2/5</span>? Write your answer as a fraction.',
      answer: "31/60",
      hints: [
        "Find the LCD of 12 and 5.",
        "LCD = 60. Convert: 11/12 = 55/60, 2/5 = 24/60.",
        "55/60 − 24/60 = 31/60."
      ],
      explanation: [
        "LCD = 60. Rewrite: 11/12 = 55/60, 2/5 = 24/60.",
        "55/60 − 24/60 = 31/60."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/4 − 1/3</span>?',
      choices: ["5/12", "2/1", "1/6", "7/12"],
      answer: "5/12",
      hints: [
        "Find the LCD of 4 and 3.",
        "LCD = 12. Convert: 3/4 = 9/12, 1/3 = 4/12.",
        "9/12 − 4/12 = 5/12."
      ],
      explanation: [
        "LCD = 12. Rewrite: 3/4 = 9/12, 1/3 = 4/12.",
        "9/12 − 4/12 = 5/12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/10 − 3/8</span>?',
      choices: ["13/40", "4/2", "1/4", "11/40"],
      answer: "13/40",
      hints: [
        "Find the LCD of 10 and 8.",
        "LCD = 40. Convert: 7/10 = 28/40, 3/8 = 15/40.",
        "28/40 − 15/40 = 13/40."
      ],
      explanation: [
        "LCD = 40. Rewrite: 7/10 = 28/40, 3/8 = 15/40.",
        "28/40 − 15/40 = 13/40."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5/6 − 1/2</span>? Write your answer as a fraction.',
      answer: "1/3",
      hints: [
        "Find the LCD of 6 and 2.",
        "LCD = 6. Convert 1/2 = 3/6.",
        "5/6 − 3/6 = 2/6 = 1/3."
      ],
      explanation: [
        "LCD = 6. Rewrite 1/2 as 3/6.",
        "5/6 − 3/6 = 2/6 = 1/3.",
        "The answer simplified is 1/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">4/5 − 3/7</span>?',
      choices: ["13/35", "1/2", "7/35", "1/35"],
      answer: "13/35",
      hints: [
        "Find the LCD of 5 and 7.",
        "LCD = 35. Convert: 4/5 = 28/35, 3/7 = 15/35.",
        "28/35 − 15/35 = 13/35."
      ],
      explanation: [
        "LCD = 35. Rewrite: 4/5 = 28/35, 3/7 = 15/35.",
        "28/35 − 15/35 = 13/35.",
        "The answer is 13/35."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/8 − 5/12</span>?',
      choices: ["11/24", "1/4", "2/4", "1/3"],
      answer: "11/24",
      hints: [
        "Find the LCD of 8 and 12.",
        "LCD = 24. Convert: 7/8 = 21/24, 5/12 = 10/24.",
        "21/24 − 10/24 = 11/24."
      ],
      explanation: [
        "LCD = 24. Rewrite: 7/8 = 21/24, 5/12 = 10/24.",
        "21/24 − 10/24 = 11/24.",
        "The answer is 11/24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7/8 − 3/8</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Same denominator — just subtract the numerators.",
        "7 − 3 = 4, keep denominator 8.",
        "4/8 simplifies to 1/2."
      ],
      explanation: [
        "Same denominator: 7 − 3 = 4. Result is 4/8.",
        "Simplify: 4/8 = 1/2.",
        "The answer is 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/6 − 2/9</span>?',
      choices: ["11/18","3/3","7/18","1/3"],
      answer: "11/18",
      hints: [
        "Find the LCD of 6 and 9.",
        "LCD = 18. Convert: 5/6 = 15/18, 2/9 = 4/18.",
        "15/18 − 4/18 = 11/18."
      ],
      explanation: [
        "LCD = 18. Rewrite: 5/6 = 15/18, 2/9 = 4/18.",
        "15/18 − 4/18 = 11/18.",
        "The answer is 11/18."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">11/12 − 5/8</span>?',
      choices: ["7/24","6/4","1/4","5/24"],
      answer: "7/24",
      hints: [
        "Find the LCD of 12 and 8.",
        "LCD = 24. Convert: 11/12 = 22/24, 5/8 = 15/24.",
        "22/24 − 15/24 = 7/24."
      ],
      explanation: [
        "LCD = 24. Rewrite: 11/12 = 22/24, 5/8 = 15/24.",
        "22/24 − 15/24 = 7/24.",
        "The answer is 7/24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\frac{7}{10} - \frac{2}{5}</span>? Give the numerator (denominator is 10).',
      answer: "3",
      hints: [
        "Find a common denominator. LCD of 10 and 5 is 10.",
        "Rewrite 2/5 as 4/10.",
        "7/10 - 4/10 = ?/10."
      ],
      explanation: [
        "LCD(10, 5) = 10. Rewrite: 2/5 = 4/10.",
        "7/10 - 4/10 = 3/10. The numerator is 3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{5}{6} - \frac{3}{8}</span>?',
      choices: ["11/24", "2/2", "1/12", "7/24"],
      answer: "11/24",
      hints: [
        "Find the LCD of 6 and 8.",
        "LCD(6, 8) = 24. Rewrite: 5/6 = 20/24, 3/8 = 9/24.",
        "20/24 - 9/24 = 11/24."
      ],
      explanation: [
        "LCD(6, 8) = 24. Rewrite: 5/6 = 20/24, 3/8 = 9/24.",
        "20/24 - 9/24 = 11/24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\frac{11}{12} - \frac{1}{3}</span>? Give the numerator (denominator is 12).',
      answer: "7",
      hints: [
        "Find a common denominator. LCD of 12 and 3 is 12.",
        "Rewrite 1/3 as 4/12.",
        "11/12 - 4/12 = ?/12."
      ],
      explanation: [
        "LCD(12, 3) = 12. Rewrite: 1/3 = 4/12.",
        "11/12 - 4/12 = 7/12. The numerator is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">9/10 − 3/7</span>?',
      choices: ["33/70", "6/3", "27/70", "1/2"],
      answer: "33/70",
      hints: [
        "Find the LCD of 10 and 7.",
        "LCD = 70. Convert: 9/10 = 63/70, 3/7 = 30/70.",
        "63/70 − 30/70 = 33/70."
      ],
      explanation: [
        "LCD = 70. Rewrite: 9/10 = 63/70, 3/7 = 30/70.",
        "63/70 − 30/70 = 33/70.",
        "The answer is 33/70."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5/6 − 1/4</span>? Write your answer as a fraction.',
      answer: "7/12",
      hints: [
        "Find the LCD of 6 and 4.",
        "LCD = 12. Convert: 5/6 = 10/12, 1/4 = 3/12.",
        "10/12 − 3/12 = 7/12."
      ],
      explanation: [
        "LCD = 12. Rewrite: 5/6 = 10/12, 1/4 = 3/12.",
        "10/12 − 3/12 = 7/12.",
        "The answer is 7/12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">13/15 − 2/5</span>?',
      choices: ["7/15", "11/10", "1/3", "11/15"],
      answer: "7/15",
      hints: [
        "Find the LCD of 15 and 5.",
        "LCD = 15. Convert 2/5 = 6/15.",
        "13/15 − 6/15 = 7/15."
      ],
      explanation: [
        "LCD = 15. Rewrite 2/5 as 6/15.",
        "13/15 − 6/15 = 7/15.",
        "The answer is 7/15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7/8 − 1/3</span>? Write your answer as a fraction.',
      answer: "13/24",
      hints: [
        "Find the LCD of 8 and 3.",
        "LCD = 24. Convert: 7/8 = 21/24 and 1/3 = 8/24.",
        "21/24 − 8/24 = 13/24."
      ],
      explanation: [
        "LCD of 8 and 3 is 24. Rewrite: 7/8 = 21/24, 1/3 = 8/24.",
        "21/24 − 8/24 = 13/24.",
        "The answer is 13/24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">11/12 − 3/8</span>?',
      choices: ["13/24", "8/4", "7/24", "1/2"],
      answer: "13/24",
      hints: [
        "Find the LCD of 12 and 8.",
        "LCD = 24. Convert: 11/12 = 22/24 and 3/8 = 9/24.",
        "22/24 − 9/24 = 13/24."
      ],
      explanation: [
        "LCD of 12 and 8 is 24. Rewrite: 11/12 = 22/24, 3/8 = 9/24.",
        "22/24 − 9/24 = 13/24.",
        "The answer is 13/24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5/6 − 2/9</span>? Write your answer as a fraction.',
      answer: "11/18",
      hints: [
        "Find the LCD of 6 and 9.",
        "LCD = 18. Convert: 5/6 = 15/18 and 2/9 = 4/18.",
        "15/18 − 4/18 = 11/18."
      ],
      explanation: [
        "LCD of 6 and 9 is 18. Rewrite: 5/6 = 15/18, 2/9 = 4/18.",
        "15/18 − 4/18 = 11/18.",
        "The answer is 11/18."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">7/9 − 3/7</span>? Write your answer as a fraction.',
      answer: "22/63",
      hints: [
        "Find the LCD of 9 and 7.",
        "LCD = 63. Convert: 7/9 = 49/63, 3/7 = 27/63.",
        "49/63 − 27/63 = 22/63."
      ],
      explanation: [
        "LCD = 63. Rewrite: 7/9 = 49/63, 3/7 = 27/63.",
        "49/63 − 27/63 = 22/63.",
        "The answer is 22/63."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">9/10 − 1/5</span>?',
      choices: ["7/10","8/5","4/5","1/2"],
      answer: "7/10",
      hints: [
        "Find the LCD of 10 and 5.",
        "LCD = 10. Convert 1/5 = 2/10.",
        "9/10 − 2/10 = 7/10."
      ],
      explanation: [
        "LCD = 10. Rewrite 1/5 as 2/10.",
        "9/10 − 2/10 = 7/10.",
        "The answer is 7/10."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">8/9 − 3/5</span>?',
      choices: ["13/45","5/4","1/3","23/45"],
      answer: "13/45",
      hints: [
        "Find the LCD of 9 and 5.",
        "LCD = 45. Convert: 8/9 = 40/45, 3/5 = 27/45.",
        "40/45 − 27/45 = 13/45."
      ],
      explanation: [
        "LCD = 45. Rewrite: 8/9 = 40/45, 3/5 = 27/45.",
        "40/45 − 27/45 = 13/45.",
        "The answer is 13/45."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A board is <span class="math">5/6</span> foot long. You cut off <span class="math">1/4</span> foot. How much remains?',
      choices: ["7/12", "4/2", "1/6", "11/12"],
      answer: "7/12",
      hints: [
        "Find the LCD of 6 and 4.",
        "LCD = 12. Convert: 5/6 = 10/12, 1/4 = 3/12.",
        "10/12 − 3/12 = 7/12."
      ],
      explanation: [
        "LCD = 12. Rewrite: 5/6 = 10/12, 1/4 = 3/12.",
        "10/12 − 3/12 = <strong>7/12</strong> foot remains."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">7/8 − 5/14</span>? Write your answer as a fraction.',
      answer: "29/56",
      hints: [
        "Find the LCD of 8 and 14.",
        "LCD = 56. Convert: 7/8 = 49/56, 5/14 = 20/56.",
        "49/56 − 20/56 = 29/56."
      ],
      explanation: [
        "LCD = 56. Rewrite: 7/8 = 49/56, 5/14 = 20/56.",
        "49/56 − 20/56 = <strong>29/56</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">11/15 − 1/3</span>?',
      choices: ["2/5", "10/12", "8/15", "1/5"],
      answer: "2/5",
      hints: [
        "Find the LCD of 15 and 3.",
        "LCD = 15. Convert 1/3 = 5/15.",
        "11/15 − 5/15 = 6/15 = 2/5."
      ],
      explanation: [
        "LCD = 15. Rewrite 1/3 as 5/15.",
        "11/15 − 5/15 = 6/15 = <strong>2/5</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 6: Multiplying Fractions (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">2/3 × 3/5</span>?',
      choices: ["2/5", "6/15", "5/8", "1/5"],
      answer: "2/5",
      hints: [
        "Multiply numerators: 2 × 3 = 6. Multiply denominators: 3 × 5 = 15.",
        "6/15 — simplify by dividing both by 3.",
        "6 ÷ 3 = 2, 15 ÷ 3 = 5 → 2/5."
      ],
      explanation: [
        "2/3 × 3/5 = 6/15.",
        "Simplify: 6/15 = 2/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/4 × 2/7</span>? Write your answer as a fraction.',
      answer: "3/14",
      hints: [
        "Multiply numerators: 3 × 2 = 6.",
        "Multiply denominators: 4 × 7 = 28.",
        "Simplify 6/28 by dividing by 2."
      ],
      explanation: [
        "3/4 × 2/7 = 6/28.",
        "Simplify: 6/28 = 3/14."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/6 × 3/10</span>?',
      choices: ["1/4", "15/60", "5/20", "3/12"],
      answer: "1/4",
      hints: [
        "Before multiplying, cancel common factors: 5 and 10 share 5; 3 and 6 share 3.",
        "After canceling: 1/2 × 1/2.",
        "1/2 × 1/2 = 1/4."
      ],
      explanation: [
        "Cancel: 5/6 × 3/10 → (1/2) × (1/2) after canceling 5 with 10 and 3 with 6.",
        "1/2 × 1/2 = 1/4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">4/9 × 3/8</span>? Write your answer as a fraction.',
      answer: "1/6",
      hints: [
        "Cancel before multiplying: 4 and 8 share factor 4; 3 and 9 share factor 3.",
        "After canceling: 1/3 × 1/2.",
        "1/3 × 1/2 = 1/6."
      ],
      explanation: [
        "Cancel: 4 with 8 → 1/2, and 3 with 9 → 1/3.",
        "1/3 × 1/2 = 1/6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">1/2 × 4/5</span>?',
      choices: ["2/5", "4/10", "4/7", "1/5"],
      answer: "2/5",
      hints: [
        "Multiply numerators: 1 × 4 = 4.",
        "Multiply denominators: 2 × 5 = 10.",
        "Simplify: 4/10 = 2/5."
      ],
      explanation: [
        "1/2 × 4/5 = 4/10.",
        "Simplify: 4/10 = 2/5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">7/10 × 5/14</span>? Write your answer as a fraction.',
      answer: "1/4",
      hints: [
        "Cancel before multiplying: 7 and 14 share factor 7; 5 and 10 share factor 5.",
        "After canceling: 1/2 × 1/2.",
        "1/2 × 1/2 = 1/4."
      ],
      explanation: [
        "Cancel: 7 with 14 → 1/2, and 5 with 10 → 1/2.",
        "1/2 × 1/2 = 1/4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/8 × 4/9</span>?',
      choices: ["1/6", "12/72", "7/17", "3/18"],
      answer: "1/6",
      hints: [
        "Cancel before multiplying: 3 and 9 share factor 3; 4 and 8 share factor 4.",
        "After canceling: 1/2 × 1/3.",
        "1/2 × 1/3 = 1/6."
      ],
      explanation: [
        "Cancel: 3 with 9 → 1/3, and 4 with 8 → 1/2.",
        "1/2 × 1/3 = 1/6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2/7 × 7/10</span>?',
      choices: ["1/5", "14/70", "2/10", "9/17"],
      answer: "1/5",
      hints: [
        "Cancel common factors: 7 cancels, and 2 and 10 share factor 2.",
        "After canceling: 1/1 × 1/5 = 1/5.",
        "Or multiply directly: 14/70 = 1/5."
      ],
      explanation: [
        "2/7 × 7/10 = 14/70.",
        "Simplify: 14/70 = 1/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5/9 × 3/4</span>? Write your answer as a fraction.',
      answer: "5/12",
      hints: [
        "Cancel before multiplying: 3 and 9 share factor 3.",
        "After canceling: 5/3 × 1/4.",
        "5/3 × 1/4 = 5/12."
      ],
      explanation: [
        "Cancel 3 from 3 and 9: becomes 5/3 × 1/4.",
        "5 × 1 = 5, 3 × 4 = 12. Answer: 5/12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">6/11 × 11/8</span>?',
      choices: ["3/4", "66/88", "6/8", "11/11"],
      answer: "3/4",
      hints: [
        "Cancel the 11s: 6/1 × 1/8 = 6/8.",
        "Simplify: 6/8 = 3/4.",
        "Or multiply directly: 66/88 = 3/4."
      ],
      explanation: [
        "Cancel 11: 6/11 × 11/8 = 6/8.",
        "Simplify: 6/8 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">8/15 × 5/12</span>? Write your answer as a fraction.',
      answer: "2/9",
      hints: [
        "Cancel before multiplying: 8 and 12 share 4; 5 and 15 share 5.",
        "After canceling: 2/3 × 1/3.",
        "2/3 × 1/3 = 2/9."
      ],
      explanation: [
        "Cancel: 8÷4=2, 12÷4=3; 5÷5=1, 15÷5=3.",
        "2/3 × 1/3 = 2/9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/5 × 5/9</span>?',
      choices: ["1/3", "15/45", "3/9", "5/15"],
      answer: "1/3",
      hints: [
        "Cancel before multiplying: 5 cancels, and 3 and 9 share factor 3.",
        "After canceling: 1/1 × 1/3 = 1/3.",
        "Or multiply directly: 15/45 = 1/3."
      ],
      explanation: [
        "3/5 × 5/9 = 15/45.",
        "Simplify: 15/45 = 1/3."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">9/14 × 7/12</span>? Write your answer as a fraction.',
      answer: "3/8",
      hints: [
        "Cancel before multiplying: 9 and 12 share 3; 7 and 14 share 7.",
        "After canceling: 3/2 × 1/4.",
        "3/2 × 1/4 = 3/8."
      ],
      explanation: [
        "Cancel: 9÷3=3, 12÷3=4; 7÷7=1, 14÷7=2.",
        "3/2 × 1/4 = 3/8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">4/11 × 11/6</span>?',
      choices: ["2/3", "44/66", "4/6", "11/11"],
      answer: "2/3",
      hints: [
        "Cancel the 11s: 4/1 × 1/6 = 4/6.",
        "Simplify: 4/6 = 2/3.",
        "Or multiply directly: 44/66 = 2/3."
      ],
      explanation: [
        "Cancel 11: 4/11 × 11/6 = 4/6.",
        "Simplify: 4/6 = 2/3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2/5 × 5/6</span>? Write your answer as a fraction.',
      answer: "1/3",
      hints: [
        "Cancel before multiplying: the 5s cancel.",
        "After canceling: 2/1 × 1/6 = 2/6.",
        "Simplify: 2/6 = 1/3."
      ],
      explanation: [
        "Cancel 5: 2/5 × 5/6 = 2/6.",
        "Simplify: 2/6 = 1/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">10/21 × 7/15</span>?',
      choices: ["2/9", "70/315", "1/3", "7/21"],
      answer: "2/9",
      hints: [
        "Cancel before multiplying: 10 and 15 share 5; 7 and 21 share 7.",
        "After canceling: 2/3 × 1/3.",
        "2/3 × 1/3 = 2/9."
      ],
      explanation: [
        "Cancel: 10÷5=2, 15÷5=3; 7÷7=1, 21÷7=3.",
        "2/3 × 1/3 = 2/9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">1/3 × 6/7</span>?',
      choices: ["2/7", "6/21", "3/7", "1/7"],
      answer: "2/7",
      hints: [
        "Cancel before multiplying: 6 and 3 share factor 3.",
        "After canceling: 1/1 × 2/7 = 2/7.",
        "Or multiply directly: 6/21 = 2/7."
      ],
      explanation: [
        "1/3 × 6/7 = 6/21.",
        "Simplify: 6/21 = 2/7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4/5 × 5/8</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Cancel before multiplying: 5 cancels, and 4 and 8 share factor 4.",
        "After canceling: 1/1 × 1/2 = 1/2.",
        "Or multiply directly: 20/40 = 1/2."
      ],
      explanation: [
        "4/5 × 5/8 = 20/40.",
        "Simplify: 20/40 = 1/2.",
        "The answer is 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">6/7 × 7/9</span>?',
      choices: ["2/3", "42/63", "6/9", "1/3"],
      answer: "2/3",
      hints: [
        "Cancel the 7s: 6/1 × 1/9 = 6/9.",
        "Simplify: 6/9 = 2/3.",
        "Or multiply directly: 42/63 = 2/3."
      ],
      explanation: [
        "Cancel 7: 6/7 × 7/9 = 6/9.",
        "Simplify: 6/9 = 2/3.",
        "The answer is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/12 × 8/15</span>?',
      choices: ["2/9", "40/180", "1/9", "8/36"],
      answer: "2/9",
      hints: [
        "Cancel before multiplying: 5 and 15 share 5; 8 and 12 share 4.",
        "After canceling: 1/3 × 2/3.",
        "1/3 × 2/3 = 2/9."
      ],
      explanation: [
        "Cancel: 5÷5=1, 15÷5=3; 8÷4=2, 12÷4=3.",
        "1/3 × 2/3 = 2/9.",
        "The answer is 2/9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/7 × 7/9</span>? Write your answer as a fraction.',
      answer: "1/3",
      hints: [
        "Cancel before multiplying: the 7s cancel.",
        "After canceling: 3/1 × 1/9 = 3/9.",
        "Simplify: 3/9 = 1/3."
      ],
      explanation: [
        "Cancel 7: 3/7 × 7/9 = 3/9.",
        "Simplify: 3/9 = 1/3.",
        "The answer is 1/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">9/16 × 4/15</span>?',
      choices: ["3/20","36/240","9/60","1/5"],
      answer: "3/20",
      hints: [
        "Cancel before multiplying: 9 and 15 share 3; 4 and 16 share 4.",
        "After canceling: 3/4 × 1/5.",
        "3/4 × 1/5 = 3/20."
      ],
      explanation: [
        "Cancel: 9÷3=3, 15÷3=5; 4÷4=1, 16÷4=4.",
        "3/4 × 1/5 = 3/20.",
        "The answer is 3/20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/9 × 6/11</span>?',
      choices: ["10/33","30/99","5/11","2/3"],
      answer: "10/33",
      hints: [
        "Cancel before multiplying: 6 and 9 share 3.",
        "After canceling: 5/3 × 2/11.",
        "5/3 × 2/11 = 10/33."
      ],
      explanation: [
        "Cancel: 6÷3=2, 9÷3=3.",
        "5/3 × 2/11 = 10/33.",
        "The answer is 10/33."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{3}{7} \times \frac{2}{5}</span>?',
      choices: ["6/35", "5/12", "6/12", "5/35"],
      answer: "6/35",
      hints: [
        "Multiply numerators together and denominators together.",
        "3 × 2 = 6 and 7 × 5 = 35.",
        "The answer is 6/35."
      ],
      explanation: [
        "Multiply straight across: 3 × 2 = 6, 7 × 5 = 35.",
        "So 3/7 × 2/5 = 6/35."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\frac{4}{9} \times \frac{3}{8}</span>? Simplify and give the numerator.',
      answer: "1",
      hints: [
        "Multiply: 4 × 3 = 12, 9 × 8 = 72.",
        "Simplify 12/72 by finding the GCD.",
        "GCD(12, 72) = 12. So 12/72 = 1/6."
      ],
      explanation: [
        "4/9 × 3/8 = 12/72.",
        "Simplify: GCD(12, 72) = 12. 12÷12 = 1, 72÷12 = 6.",
        "The answer is 1/6. The numerator is 1."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{5}{6} \times \frac{9}{10}</span> in simplest form?',
      choices: ["3/4", "45/60", "15/20", "1/2"],
      answer: "3/4",
      hints: [
        "Multiply: 5 × 9 = 45, 6 × 10 = 60.",
        "Simplify 45/60. GCD(45, 60) = 15.",
        "45 ÷ 15 = 3, 60 ÷ 15 = 4."
      ],
      explanation: [
        "5/6 × 9/10 = 45/60.",
        "GCD(45, 60) = 15. Simplify: 45÷15 = 3, 60÷15 = 4.",
        "The answer is 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\frac{7}{12} \times \frac{6}{5}</span>? Write your answer as a fraction.',
      answer: "7/10",
      hints: [
        "Cancel before multiplying: 6 and 12 share factor 6.",
        "After canceling: 7/2 × 1/5.",
        "7/2 × 1/5 = 7/10."
      ],
      explanation: [
        "Cancel: 6÷6=1, 12÷6=2.",
        "7/2 × 1/5 = 7/10.",
        "The answer is 7/10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{2}{9} \times \frac{3}{4}</span>?',
      choices: ["1/6", "6/36", "2/12", "3/18"],
      answer: "1/6",
      hints: [
        "Cancel before multiplying: 3 and 9 share factor 3; 2 and 4 share factor 2.",
        "After canceling: 1/3 × 1/2.",
        "1/3 × 1/2 = 1/6."
      ],
      explanation: [
        "Cancel: 3÷3=1, 9÷3=3; 2÷2=1, 4÷2=2.",
        "1/3 × 1/2 = 1/6.",
        "The answer is 1/6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{8}{11} \times \frac{11}{12}</span>?',
      choices: ["2/3", "88/132", "8/12", "4/6"],
      answer: "2/3",
      hints: [
        "Cancel the 11s: 8/1 × 1/12 = 8/12.",
        "Simplify: 8/12 = 2/3.",
        "Or multiply directly: 88/132 = 2/3."
      ],
      explanation: [
        "Cancel 11: 8/11 × 11/12 = 8/12.",
        "Simplify: 8/12 = 2/3.",
        "The answer is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{5}{9} \times \frac{3}{7}</span>?',
      choices: ["5/21", "15/63", "8/16", "1/3"],
      answer: "5/21",
      hints: [
        "Multiply numerators: 5 × 3 = 15. Multiply denominators: 9 × 7 = 63.",
        "15/63 simplifies — cancel the 3: 5/21.",
        "The answer is 5/21."
      ],
      explanation: [
        "5/9 × 3/7 = 15/63.",
        "Simplify: GCD(15, 63) = 3, so 15÷3 = 5, 63÷3 = 21.",
        "The answer is 5/21."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\frac{7}{10} \times \frac{5}{14}</span>? Write your answer as a fraction.',
      answer: "1/4",
      hints: [
        "Cross-cancel before multiplying: 7 and 14 share factor 7; 5 and 10 share factor 5.",
        "After canceling: 1/2 × 1/2.",
        "1/2 × 1/2 = 1/4."
      ],
      explanation: [
        "Cancel: 7÷7 = 1, 14÷7 = 2; 5÷5 = 1, 10÷5 = 2.",
        "1/2 × 1/2 = 1/4.",
        "The answer is 1/4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{9}{14} \times \frac{7}{12}</span>?',
      choices: ["3/8", "63/168", "9/24", "1/2"],
      answer: "3/8",
      hints: [
        "Cross-cancel: 9 and 12 share factor 3; 7 and 14 share factor 7.",
        "After canceling: 3/2 × 1/4.",
        "3/2 × 1/4 = 3/8."
      ],
      explanation: [
        "Cancel: 9÷3=3, 12÷3=4; 7÷7=1, 14÷7=2.",
        "3/2 × 1/4 = 3/8.",
        "The answer is 3/8."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{7}{10} \times \frac{5}{21}</span>?',
      choices: ["1/6","35/210","7/42","5/30"],
      answer: "1/6",
      hints: [
        "Cancel before multiplying: 7 and 21 share factor 7; 5 and 10 share factor 5.",
        "After canceling: 1/2 × 1/3.",
        "1/2 × 1/3 = 1/6."
      ],
      explanation: [
        "Cancel: 7÷7=1, 21÷7=3; 5÷5=1, 10÷5=2.",
        "1/2 × 1/3 = 1/6.",
        "The answer is 1/6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\frac{4}{7} \times \frac{3}{8}</span>? Write your answer as a fraction.',
      answer: "3/14",
      hints: [
        "Cancel before multiplying: 4 and 8 share factor 4.",
        "After canceling: 1/7 × 3/2.",
        "1/7 × 3/2 = 3/14."
      ],
      explanation: [
        "Cancel: 4÷4=1, 8÷4=2.",
        "1/7 × 3/2 = 3/14.",
        "The answer is 3/14."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{3}{8} \times \frac{4}{5}</span> in simplest form?',
      choices: ["3/10","12/40","6/20","2/5"],
      answer: "3/10",
      hints: [
        "Cancel before multiplying: 4 and 8 share factor 4.",
        "After canceling: 3/2 × 1/5.",
        "3/2 × 1/5 = 3/10."
      ],
      explanation: [
        "Cancel: 4÷4=1, 8÷4=2.",
        "3/2 × 1/5 = 3/10.",
        "The answer is 3/10."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A runner completed <span class="math">3/4</span> of a <span class="math">2/3</span>-mile trail. How far did the runner go?',
      choices: ["1/2 mile", "5/7 mile", "6/12 mile", "3/7 mile"],
      answer: "1/2 mile",
      hints: [
        "Multiply: 3/4 × 2/3.",
        "Numerators: 3 × 2 = 6. Denominators: 4 × 3 = 12.",
        "6/12 = 1/2."
      ],
      explanation: [
        "3/4 × 2/3 = 6/12 = <strong>1/2 mile</strong>.",
        "Cancel the 3s first: 1/4 × 2/1 = 2/4 = 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4/9 × 3/8</span>? Write your answer as a fraction.',
      answer: "1/6",
      hints: [
        "Multiply numerators: 4 × 3 = 12.",
        "Multiply denominators: 9 × 8 = 72.",
        "Simplify 12/72 by dividing both by 12."
      ],
      explanation: [
        "4/9 × 3/8 = 12/72.",
        "Simplify: 12 ÷ 12 = 1, 72 ÷ 12 = 6 → <strong>1/6</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/10 × 5/14</span>?',
      choices: ["1/4", "35/140", "7/28", "5/20"],
      answer: "1/4",
      hints: [
        "Before multiplying, cancel common factors: 7 and 14 share 7; 5 and 10 share 5.",
        "After canceling: 1/2 × 1/2 = 1/4.",
        "Or multiply then simplify: 35/140 = 1/4."
      ],
      explanation: [
        "Cancel: 7/14 = 1/2 and 5/10 = 1/2.",
        "1/2 × 1/2 = <strong>1/4</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 7: Dividing Fractions (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3/4 ÷ 1/2</span>?',
      choices: ["3/2", "3/8", "6/4", "2/3"],
      answer: "3/2",
      hints: [
        "To divide fractions, multiply by the reciprocal.",
        "The reciprocal of 1/2 is 2/1.",
        "3/4 × 2/1 = 6/4 = 3/2."
      ],
      explanation: [
        "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4.",
        "Simplify: 6/4 = 3/2 (or 1 1/2)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2/5 ÷ 4/5</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Multiply by the reciprocal: 2/5 × 5/4.",
        "Multiply: 10/20.",
        "Simplify: 10/20 = 1/2."
      ],
      explanation: [
        "2/5 ÷ 4/5 = 2/5 × 5/4 = 10/20.",
        "Simplify: 10/20 = 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/6 ÷ 2/3</span>?',
      choices: ["5/4", "10/18", "3/4", "15/12"],
      answer: "5/4",
      hints: [
        "Multiply by the reciprocal of 2/3, which is 3/2.",
        "5/6 × 3/2 = 15/12.",
        "Simplify: 15/12 = 5/4."
      ],
      explanation: [
        "5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12.",
        "Simplify: 15/12 = 5/4 (or 1 1/4)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">7/8 ÷ 7/4</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Multiply by the reciprocal: 7/8 × 4/7.",
        "Cancel the 7s: 1/8 × 4/1 = 4/8.",
        "Simplify: 4/8 = 1/2."
      ],
      explanation: [
        "7/8 ÷ 7/4 = 7/8 × 4/7.",
        "Cancel 7s and simplify: 4/8 = 1/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">1/3 ÷ 2/9</span>?',
      choices: ["3/2", "2/27", "9/6", "1/6"],
      answer: "3/2",
      hints: [
        "Multiply by the reciprocal of 2/9, which is 9/2.",
        "1/3 × 9/2 = 9/6.",
        "Simplify: 9/6 = 3/2."
      ],
      explanation: [
        "1/3 ÷ 2/9 = 1/3 × 9/2 = 9/6.",
        "Simplify: 9/6 = 3/2 (or 1 1/2)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">4/5 ÷ 2/3</span>? Write your answer as a fraction.',
      answer: "6/5",
      hints: [
        "Multiply by the reciprocal of 2/3, which is 3/2.",
        "4/5 × 3/2 = 12/10.",
        "Simplify: 12/10 = 6/5."
      ],
      explanation: [
        "4/5 ÷ 2/3 = 4/5 × 3/2 = 12/10.",
        "Simplify: 12/10 = 6/5 (or 1 1/5)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">6/7 ÷ 3/7</span>?',
      choices: ["2", "18/49", "6/3", "7/3"],
      answer: "2",
      hints: [
        "Multiply by the reciprocal: 6/7 × 7/3.",
        "Cancel the 7s: 6/1 × 1/3 = 6/3.",
        "6/3 = 2."
      ],
      explanation: [
        "6/7 ÷ 3/7 = 6/7 × 7/3 = 42/21.",
        "Simplify: 42/21 = 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">9/10 ÷ 3/5</span>?',
      choices: ["3/2", "27/50", "9/6", "5/6"],
      answer: "3/2",
      hints: [
        "Multiply by the reciprocal of 3/5, which is 5/3.",
        "9/10 × 5/3 = 45/30.",
        "Simplify: 45/30 = 3/2."
      ],
      explanation: [
        "9/10 ÷ 3/5 = 9/10 × 5/3 = 45/30.",
        "Simplify: 45/30 = 3/2 (or 1 1/2)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/5 ÷ 9/10</span>? Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal: 3/5 × 10/9.",
        "Cancel: 3 and 9 share 3; 10 and 5 share 5.",
        "1/1 × 2/3 = 2/3."
      ],
      explanation: [
        "3/5 ÷ 9/10 = 3/5 × 10/9 = 30/45.",
        "Simplify: 30/45 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/8 ÷ 5/6</span>?',
      choices: ["3/4", "25/48", "6/8", "5/5"],
      answer: "3/4",
      hints: [
        "Multiply by the reciprocal of 5/6, which is 6/5.",
        "5/8 × 6/5 = 30/40.",
        "Simplify: 30/40 = 3/4."
      ],
      explanation: [
        "5/8 ÷ 5/6 = 5/8 × 6/5 = 30/40.",
        "Simplify: 30/40 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">8/9 ÷ 4/3</span>? Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal: 8/9 × 3/4.",
        "Cancel: 8 and 4 share 4; 3 and 9 share 3.",
        "2/3 × 1/1 = 2/3."
      ],
      explanation: [
        "8/9 ÷ 4/3 = 8/9 × 3/4 = 24/36.",
        "Simplify: 24/36 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4/7 ÷ 2/7</span>?',
      choices: ["2", "8/49", "4/2", "7/2"],
      answer: "2",
      hints: [
        "Multiply by the reciprocal: 4/7 × 7/2.",
        "Cancel the 7s: 4/1 × 1/2 = 4/2.",
        "4/2 = 2."
      ],
      explanation: [
        "4/7 ÷ 2/7 = 4/7 × 7/2 = 28/14.",
        "Simplify: 28/14 = 2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">5/6 ÷ 5/4</span>? Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal of 5/4, which is 4/5.",
        "5/6 × 4/5 = 20/30.",
        "Simplify: 20/30 = 2/3."
      ],
      explanation: [
        "5/6 ÷ 5/4 = 5/6 × 4/5 = 20/30.",
        "Simplify: 20/30 = 2/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/10 ÷ 7/5</span>?',
      choices: ["1/2", "49/50", "7/2", "5/10"],
      answer: "1/2",
      hints: [
        "Multiply by the reciprocal of 7/5, which is 5/7.",
        "7/10 × 5/7 = 35/70.",
        "Simplify: 35/70 = 1/2."
      ],
      explanation: [
        "7/10 ÷ 7/5 = 7/10 × 5/7 = 35/70.",
        "Simplify: 35/70 = 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">9/10 ÷ 6/5</span>? Write your answer as a fraction.',
      answer: "3/4",
      hints: [
        "Multiply by the reciprocal of 6/5, which is 5/6.",
        "9/10 × 5/6 = 45/60.",
        "Simplify: 45/60 = 3/4."
      ],
      explanation: [
        "9/10 ÷ 6/5 = 9/10 × 5/6 = 45/60.",
        "Simplify: 45/60 = 3/4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">8/9 ÷ 2/9</span>?',
      choices: ["4", "16/81", "8/2", "9/2"],
      answer: "4",
      hints: [
        "Multiply by the reciprocal: 8/9 × 9/2.",
        "Cancel the 9s: 8/1 × 1/2 = 8/2.",
        "8/2 = 4."
      ],
      explanation: [
        "8/9 ÷ 2/9 = 8/9 × 9/2 = 72/18.",
        "Simplify: 72/18 = 4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3/8 ÷ 9/16</span>?',
      choices: ["2/3", "27/128", "3/6", "1/3"],
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal of 9/16, which is 16/9.",
        "3/8 × 16/9 = 48/72.",
        "Simplify: 48/72 = 2/3."
      ],
      explanation: [
        "3/8 ÷ 9/16 = 3/8 × 16/9 = 48/72.",
        "Simplify: 48/72 = 2/3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5/6 ÷ 5/3</span>? Write your answer as a fraction.',
      answer: "1/2",
      hints: [
        "Multiply by the reciprocal of 5/3, which is 3/5.",
        "5/6 × 3/5 = 15/30.",
        "Simplify: 15/30 = 1/2."
      ],
      explanation: [
        "5/6 ÷ 5/3 = 5/6 × 3/5 = 15/30.",
        "Simplify: 15/30 = 1/2.",
        "The answer is 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/12 ÷ 7/6</span>?',
      choices: ["1/2", "49/72", "7/2", "6/12"],
      answer: "1/2",
      hints: [
        "Multiply by the reciprocal of 7/6, which is 6/7.",
        "7/12 × 6/7 = 42/84.",
        "Simplify: 42/84 = 1/2."
      ],
      explanation: [
        "7/12 ÷ 7/6 = 7/12 × 6/7 = 42/84.",
        "Simplify: 42/84 = 1/2.",
        "The answer is 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2/3 ÷ 4/9</span>?',
      choices: ["3/2", "8/27", "2/4", "6/4"],
      answer: "3/2",
      hints: [
        "Multiply by the reciprocal of 4/9, which is 9/4.",
        "2/3 × 9/4 = 18/12.",
        "Simplify: 18/12 = 3/2."
      ],
      explanation: [
        "2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12.",
        "Simplify: 18/12 = 3/2 (or 1 1/2).",
        "The answer is 3/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5/9 ÷ 5/3</span>?',
      choices: ["1/3","25/27","3/5","5/3"],
      answer: "1/3",
      hints: [
        "Multiply by the reciprocal of 5/3, which is 3/5.",
        "5/9 × 3/5 = 15/45.",
        "Simplify: 15/45 = 1/3."
      ],
      explanation: [
        "5/9 ÷ 5/3 = 5/9 × 3/5 = 15/45.",
        "Simplify: 15/45 = 1/3.",
        "The answer is 1/3."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">3/4 ÷ 9/8</span>? Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal of 9/8, which is 8/9.",
        "3/4 × 8/9 = 24/36.",
        "Simplify: 24/36 = 2/3."
      ],
      explanation: [
        "3/4 ÷ 9/8 = 3/4 × 8/9 = 24/36.",
        "Simplify: 24/36 = 2/3.",
        "The answer is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">10/11 ÷ 5/11</span>?',
      choices: ["2","50/121","10/5","11/5"],
      answer: "2",
      hints: [
        "Multiply by the reciprocal: 10/11 × 11/5.",
        "Cancel the 11s: 10/1 × 1/5 = 10/5.",
        "10/5 = 2."
      ],
      explanation: [
        "10/11 ÷ 5/11 = 10/11 × 11/5 = 110/55.",
        "Simplify: 110/55 = 2.",
        "The answer is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">\frac{5}{8} \div \frac{1}{4}</span>?',
      choices: ["5/2", "5/32", "4/8", "1/2"],
      answer: "5/2",
      hints: [
        "To divide fractions, multiply by the reciprocal.",
        "The reciprocal of 1/4 is 4/1.",
        "5/8 × 4/1 = 20/8 = 5/2."
      ],
      explanation: [
        "5/8 ÷ 1/4 = 5/8 × 4/1 = 20/8.",
        "Simplify: 20/8 = 5/2 (or 2 1/2)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">\frac{7}{10} \div \frac{2}{5}</span>? Simplify and give the numerator.',
      answer: "7",
      hints: [
        "Multiply by the reciprocal: 7/10 × 5/2.",
        "7 × 5 = 35, 10 × 2 = 20.",
        "Simplify 35/20: GCD is 5, so 35/20 = 7/4."
      ],
      explanation: [
        "7/10 ÷ 2/5 = 7/10 × 5/2 = 35/20.",
        "Simplify: GCD(35, 20) = 5. 35÷5 = 7, 20÷5 = 4.",
        "The answer is 7/4. The numerator is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{3}{4} \div \frac{9}{8}</span> in simplest form?',
      choices: ["2/3", "27/32", "24/36", "3/2"],
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal: 3/4 × 8/9.",
        "3 × 8 = 24, 4 × 9 = 36.",
        "Simplify 24/36: GCD is 12, so 24/36 = 2/3."
      ],
      explanation: [
        "3/4 ÷ 9/8 = 3/4 × 8/9 = 24/36.",
        "GCD(24, 36) = 12. 24÷12 = 2, 36÷12 = 3.",
        "The answer is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">7/9 ÷ 7/3</span>?',
      choices: ["1/3", "49/27", "7/3", "3/9"],
      answer: "1/3",
      hints: [
        "Multiply by the reciprocal: 7/9 × 3/7.",
        "Cancel the 7s: 1/9 × 3/1 = 3/9.",
        "Simplify: 3/9 = 1/3."
      ],
      explanation: [
        "7/9 ÷ 7/3 = 7/9 × 3/7 = 21/63.",
        "Simplify: 21/63 = 1/3.",
        "The answer is 1/3."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">5/6 ÷ 10/9</span>? Write your answer as a fraction.',
      answer: "3/4",
      hints: [
        "Multiply by the reciprocal of 10/9, which is 9/10.",
        "5/6 × 9/10 = 45/60.",
        "Simplify: 45/60 = 3/4."
      ],
      explanation: [
        "5/6 ÷ 10/9 = 5/6 × 9/10 = 45/60.",
        "Simplify: 45/60 = 3/4.",
        "The answer is 3/4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">4/5 ÷ 8/15</span>?',
      choices: ["3/2", "32/75", "4/3", "2/3"],
      answer: "3/2",
      hints: [
        "Multiply by the reciprocal of 8/15, which is 15/8.",
        "4/5 × 15/8 = 60/40.",
        "Simplify: 60/40 = 3/2."
      ],
      explanation: [
        "4/5 ÷ 8/15 = 4/5 × 15/8 = 60/40.",
        "Simplify: 60/40 = 3/2 (or 1 1/2).",
        "The answer is 3/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3/5 ÷ 9/10</span>? Write your answer as a fraction.',
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal of 9/10, which is 10/9.",
        "3/5 × 10/9 = 30/45.",
        "Simplify: 30/45 = 2/3."
      ],
      explanation: [
        "3/5 ÷ 9/10 = 3/5 × 10/9 = 30/45.",
        "Simplify: GCD(30,45) = 15, so 30÷15 = 2, 45÷15 = 3.",
        "The answer is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7/8 ÷ 21/16</span>?',
      choices: ["2/3", "7/21", "112/168", "1/3"],
      answer: "2/3",
      hints: [
        "Multiply by the reciprocal of 21/16, which is 16/21.",
        "7/8 × 16/21 = 112/168.",
        "Simplify: cancel 7 and 21 (share 7), cancel 16 and 8 (share 8). Result = 2/3."
      ],
      explanation: [
        "7/8 ÷ 21/16 = 7/8 × 16/21 = 112/168.",
        "Cancel: 7 and 21 share 7; 16 and 8 share 8. So 1/1 × 2/3 = 2/3.",
        "The answer is 2/3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">2/3 ÷ 4/9</span>?',
      choices: ["3/2", "8/27", "2/4", "6/12"],
      answer: "3/2",
      hints: [
        "Multiply by the reciprocal of 4/9, which is 9/4.",
        "2/3 × 9/4 = 18/12.",
        "Simplify: 18/12 = 3/2."
      ],
      explanation: [
        "2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12.",
        "Simplify: 18/12 = 3/2 (or 1 1/2).",
        "The answer is 3/2."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{5}{9} \div \frac{10}{3}</span>?',
      choices: ["1/6","50/27","5/30","3/10"],
      answer: "1/6",
      hints: [
        "Multiply by the reciprocal of 10/3, which is 3/10.",
        "5/9 × 3/10 = 15/90.",
        "Simplify: 15/90 = 1/6."
      ],
      explanation: [
        "5/9 ÷ 10/3 = 5/9 × 3/10 = 15/90.",
        "Simplify: GCD(15, 90) = 15. 15÷15 = 1, 90÷15 = 6.",
        "The answer is 1/6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">\frac{6}{7} \div \frac{3}{7}</span>? Give your answer as a whole number.',
      answer: "2",
      hints: [
        "Multiply by the reciprocal: 6/7 × 7/3.",
        "Cancel the 7s: 6/1 × 1/3 = 6/3.",
        "6/3 = 2."
      ],
      explanation: [
        "6/7 ÷ 3/7 = 6/7 × 7/3 = 42/21.",
        "Simplify: 42/21 = 2.",
        "The answer is 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{4}{9} \div \frac{8}{3}</span>?',
      choices: ["1/6","32/27","4/24","2/9"],
      answer: "1/6",
      hints: [
        "Multiply by the reciprocal of 8/3, which is 3/8.",
        "4/9 × 3/8 = 12/72.",
        "Simplify: 12/72 = 1/6."
      ],
      explanation: [
        "4/9 ÷ 8/3 = 4/9 × 3/8 = 12/72.",
        "Simplify: GCD(12, 72) = 12. 12÷12 = 1, 72÷12 = 6.",
        "The answer is 1/6."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'How many <span class="math">1/3</span>-cup servings are in 4 cups of soup?',
      choices: ["12", "4/3", "3/4", "1 1/3"],
      answer: "12",
      hints: [
        "Divide: 4 ÷ 1/3.",
        "Flip and multiply: 4 × 3/1 = 12.",
        "There are 12 servings."
      ],
      explanation: [
        "4 ÷ 1/3 = 4 × 3 = <strong>12</strong> servings.",
        "Dividing by a fraction means multiplying by its reciprocal."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">5/6 ÷ 2/9</span>? Write your answer as a fraction.',
      answer: "15/4",
      hints: [
        "Flip the second fraction and multiply: 5/6 × 9/2.",
        "Numerators: 5 × 9 = 45. Denominators: 6 × 2 = 12.",
        "Simplify 45/12: divide by 3 → 15/4."
      ],
      explanation: [
        "5/6 ÷ 2/9 = 5/6 × 9/2 = 45/12.",
        "Simplify: 45 ÷ 3 = 15, 12 ÷ 3 = 4 → <strong>15/4</strong> (or 3 3/4)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A ribbon is <span class="math">7/8</span> yard long. How many <span class="math">1/4</span>-yard pieces can you cut?',
      choices: ["3 1/2", "7/32", "2", "7/2"],
      answer: "3 1/2",
      hints: [
        "Divide: 7/8 ÷ 1/4.",
        "Flip and multiply: 7/8 × 4/1 = 28/8.",
        "28/8 = 7/2 = 3 1/2."
      ],
      explanation: [
        "7/8 ÷ 1/4 = 7/8 × 4/1 = 28/8 = 7/2 = <strong>3 1/2</strong> pieces.",
        "You can cut 3 full pieces with 1/2 piece left over."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 8: Comparing Fractions (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is greater: <span class="math">3/5</span> or <span class="math">2/3</span>?',
      choices: ["2/3", "3/5", "They are equal", "Cannot tell"],
      answer: "2/3",
      hints: [
        "Cross multiply to compare: 3 × 3 = 9 and 5 × 2 = 10.",
        "Since 9 < 10, the second fraction (2/3) is larger.",
        "Alternatively, find a common denominator of 15: 9/15 vs 10/15."
      ],
      explanation: [
        "Cross multiply: 3 × 3 = 9, 5 × 2 = 10. Since 9 < 10, we have 3/5 < 2/3.",
        "So 2/3 is the greater fraction."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Order from least to greatest: <span class="math">1/4, 1/3, 1/6</span>. Which fraction comes first? Write the denominator.',
      answer: "6",
      hints: [
        "With unit fractions, the larger the denominator, the smaller the fraction.",
        "Compare 1/4, 1/3, and 1/6.",
        "1/6 is the smallest because 6 is the largest denominator."
      ],
      explanation: [
        "For unit fractions, bigger denominator = smaller value.",
        "Order: 1/6 < 1/4 < 1/3. The first (smallest) has denominator 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which of these fractions is the largest? <span class="math">5/8, 3/4, 7/12</span>',
      choices: ["3/4", "5/8", "7/12", "They are all equal"],
      answer: "3/4",
      hints: [
        "Find a common denominator for 8, 4, and 12.",
        "LCD = 24. Convert: 5/8 = 15/24, 3/4 = 18/24, 7/12 = 14/24.",
        "18/24 is the largest."
      ],
      explanation: [
        "LCD = 24. Convert: 5/8 = 15/24, 3/4 = 18/24, 7/12 = 14/24.",
        "18/24 > 15/24 > 14/24, so 3/4 is the largest."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many of these fractions are greater than <span class="math">1/2</span>? <br><span class="math">3/8, 5/9, 4/7, 2/5</span>',
      answer: "2",
      hints: [
        "A fraction is greater than 1/2 when the numerator is more than half the denominator.",
        "3/8: half of 8 is 4, 3 < 4 → no. 5/9: half of 9 is 4.5, 5 > 4.5 → yes.",
        "4/7: half of 7 is 3.5, 4 > 3.5 → yes. 2/5: half of 5 is 2.5, 2 < 2.5 → no."
      ],
      explanation: [
        "Check each: 3/8 < 1/2, 5/9 > 1/2, 4/7 > 1/2, 2/5 < 1/2.",
        "Two fractions (5/9 and 4/7) are greater than 1/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">4/9 ☐ 5/12</span>',
      choices: [">", "<", "=", "Cannot tell"],
      answer: ">",
      hints: [
        "Cross multiply: 4 × 12 = 48 and 9 × 5 = 45.",
        "Since 48 > 45, the left fraction is greater.",
        "So 4/9 > 5/12."
      ],
      explanation: [
        "Cross multiply: 4 × 12 = 48, 9 × 5 = 45.",
        "48 > 45, so 4/9 > 5/12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which list is in order from least to greatest?',
      choices: ["2/7, 1/3, 3/8", "3/8, 1/3, 2/7", "1/3, 2/7, 3/8", "2/7, 3/8, 1/3"],
      answer: "2/7, 1/3, 3/8",
      hints: [
        "Find a common denominator: LCD of 7, 3, 8 is 168.",
        "2/7 = 48/168, 1/3 = 56/168, 3/8 = 63/168.",
        "48 < 56 < 63, so 2/7 < 1/3 < 3/8."
      ],
      explanation: [
        "LCD = 168. Convert: 2/7 = 48/168, 1/3 = 56/168, 3/8 = 63/168.",
        "Order: 2/7 < 1/3 < 3/8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Which is greater: <span class="math">5/7</span> or <span class="math">3/4</span>? Cross multiply. What is the product on the left side (5 × 4)?',
      answer: "20",
      hints: [
        "Cross multiply to compare: left product is 5 × 4.",
        "5 × 4 = 20.",
        "Right product is 7 × 3 = 21. Since 20 < 21, 5/7 < 3/4."
      ],
      explanation: [
        "Cross multiply: 5 × 4 = 20, 7 × 3 = 21.",
        "Since 20 < 21, we know 5/7 < 3/4. The left product is 20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is closest to <span class="math">1/2</span>?',
      choices: ["5/11", "3/8", "7/15", "2/9"],
      answer: "5/11",
      hints: [
        "1/2 = 0.5. Convert each: 5/11 ≈ 0.4545, 3/8 = 0.375, 7/15 ≈ 0.467, 2/9 ≈ 0.222.",
        "Find which is closest to 0.5.",
        "5/11 ≈ 0.4545 is closest (difference of about 0.045)."
      ],
      explanation: [
        "Convert to decimals: 5/11 ≈ 0.455, 3/8 = 0.375, 7/15 ≈ 0.467, 2/9 ≈ 0.222.",
        "5/11 is closest to 0.5 (only ~0.045 away)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the smallest: <span class="math">4/9, 5/12, 3/7</span>?',
      choices: ["5/12", "4/9", "3/7", "They are all equal"],
      answer: "5/12",
      hints: [
        "Find a common denominator for 9, 12, and 7.",
        "LCD = 252. Convert: 4/9 = 112/252, 5/12 = 105/252, 3/7 = 108/252.",
        "105 < 108 < 112, so 5/12 is the smallest."
      ],
      explanation: [
        "LCD = 252. Convert: 4/9 = 112/252, 5/12 = 105/252, 3/7 = 108/252.",
        "105/252 is smallest, so 5/12 is the smallest fraction."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Which is greater: <span class="math">7/10</span> or <span class="math">2/3</span>? Cross multiply. What is the product on the left side (7 × 3)?',
      answer: "21",
      hints: [
        "Cross multiply to compare: left product is 7 × 3.",
        "7 × 3 = 21.",
        "Right product is 10 × 2 = 20. Since 21 > 20, 7/10 > 2/3."
      ],
      explanation: [
        "Cross multiply: 7 × 3 = 21, 10 × 2 = 20.",
        "Since 21 > 20, we know 7/10 > 2/3. The left product is 21."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many of these fractions are less than <span class="math">3/4</span>? <br><span class="math">7/9, 5/8, 11/15, 4/5</span>',
      choices: ["2", "1", "3", "0"],
      answer: "2",
      hints: [
        "3/4 = 0.75. Convert each to a decimal to compare.",
        "7/9 ≈ 0.778, 5/8 = 0.625, 11/15 ≈ 0.733, 4/5 = 0.8.",
        "5/8 and 11/15 are less than 0.75. That's 2."
      ],
      explanation: [
        "3/4 = 0.75. Check: 7/9 ≈ 0.778 > 0.75, 5/8 = 0.625 < 0.75, 11/15 ≈ 0.733 < 0.75, 4/5 = 0.8 > 0.75.",
        "Two fractions (5/8 and 11/15) are less than 3/4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is greater: <span class="math">5/8</span> or <span class="math">7/12</span>?',
      choices: ["5/8", "7/12", "They are equal", "Cannot tell"],
      answer: "5/8",
      hints: [
        "Cross multiply: 5 × 12 = 60 and 8 × 7 = 56.",
        "Since 60 > 56, the first fraction (5/8) is larger.",
        "So 5/8 > 7/12."
      ],
      explanation: [
        "Cross multiply: 5 × 12 = 60, 8 × 7 = 56. Since 60 > 56, 5/8 > 7/12.",
        "So 5/8 is the greater fraction."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many of these fractions are greater than <span class="math">2/3</span>? <br><span class="math">5/6, 7/12, 3/4, 1/2</span>',
      answer: "2",
      hints: [
        "2/3 ≈ 0.667. Convert each to a decimal.",
        "5/6 ≈ 0.833 > 0.667 ✓, 7/12 ≈ 0.583 < 0.667 ✗.",
        "3/4 = 0.75 > 0.667 ✓, 1/2 = 0.5 < 0.667 ✗. Two are greater."
      ],
      explanation: [
        "Check each: 5/6 > 2/3 ✓, 7/12 < 2/3 ✗, 3/4 > 2/3 ✓, 1/2 < 2/3 ✗.",
        "Two fractions (5/6 and 3/4) are greater than 2/3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which list is in order from least to greatest?',
      choices: ["3/10, 2/5, 1/2", "1/2, 2/5, 3/10", "2/5, 3/10, 1/2", "3/10, 1/2, 2/5"],
      answer: "3/10, 2/5, 1/2",
      hints: [
        "Find a common denominator: LCD of 10, 5, 2 is 10.",
        "3/10 = 3/10, 2/5 = 4/10, 1/2 = 5/10.",
        "3 < 4 < 5, so 3/10 < 2/5 < 1/2."
      ],
      explanation: [
        "LCD = 10. Convert: 3/10 = 3/10, 2/5 = 4/10, 1/2 = 5/10.",
        "Order: 3/10 < 2/5 < 1/2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Which is greater: <span class="math">4/7</span> or <span class="math">5/9</span>? Cross multiply. What is the product on the left side (4 × 9)?',
      answer: "36",
      hints: [
        "Cross multiply to compare: left product is 4 × 9.",
        "4 × 9 = 36.",
        "Right product is 7 × 5 = 35. Since 36 > 35, 4/7 > 5/9."
      ],
      explanation: [
        "Cross multiply: 4 × 9 = 36, 7 × 5 = 35.",
        "Since 36 > 35, we know 4/7 > 5/9. The left product is 36."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the largest: <span class="math">7/10, 5/7, 3/4</span>?',
      choices: ["3/4", "7/10", "5/7", "They are all equal"],
      answer: "3/4",
      hints: [
        "Find a common denominator: LCD of 10, 7, 4 is 140.",
        "7/10 = 98/140, 5/7 = 100/140, 3/4 = 105/140.",
        "105 > 100 > 98, so 3/4 is the largest."
      ],
      explanation: [
        "LCD = 140. Convert: 7/10 = 98/140, 5/7 = 100/140, 3/4 = 105/140.",
        "105/140 is largest, so 3/4 is the largest fraction."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">3/8 ☐ 2/5</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Cross multiply: 3 × 5 = 15 and 8 × 2 = 16.",
        "Since 15 < 16, the left fraction is smaller.",
        "So 3/8 < 2/5."
      ],
      explanation: [
        "Cross multiply: 3 × 5 = 15, 8 × 2 = 16.",
        "15 < 16, so 3/8 < 2/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is greater: <span class="math">4/5</span> or <span class="math">7/9</span>?',
      choices: ["4/5", "7/9", "They are equal", "Cannot tell"],
      answer: "4/5",
      hints: [
        "Cross multiply: 4 × 9 = 36 and 5 × 7 = 35.",
        "Since 36 > 35, the first fraction (4/5) is larger.",
        "So 4/5 > 7/9."
      ],
      explanation: [
        "Cross multiply: 4 × 9 = 36, 5 × 7 = 35. Since 36 > 35, 4/5 > 7/9.",
        "So 4/5 is the greater fraction.",
        "The difference is very small but 4/5 wins."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many of these fractions are less than <span class="math">1/2</span>? <br><span class="math">3/7, 5/11, 4/9, 7/13</span>',
      answer: "3",
      hints: [
        "A fraction is less than 1/2 when the numerator is less than half the denominator.",
        "3/7: half of 7 is 3.5, 3 < 3.5 → yes. 5/11: half of 11 is 5.5, 5 < 5.5 → yes.",
        "4/9: half of 9 is 4.5, 4 < 4.5 → yes. 7/13: half of 13 is 6.5, 7 > 6.5 → no."
      ],
      explanation: [
        "Check each: 3/7 < 1/2 ✓, 5/11 < 1/2 ✓, 4/9 < 1/2 ✓, 7/13 > 1/2 ✗.",
        "Three fractions (3/7, 5/11, and 4/9) are less than 1/2.",
        "Only 7/13 exceeds 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the smallest: <span class="math">2/5, 3/8, 5/12</span>?',
      choices: ["3/8", "2/5", "5/12", "They are all equal"],
      answer: "3/8",
      hints: [
        "Find a common denominator: LCD of 5, 8, 12 is 120.",
        "2/5 = 48/120, 3/8 = 45/120, 5/12 = 50/120.",
        "45 < 48 < 50, so 3/8 is the smallest."
      ],
      explanation: [
        "LCD = 120. Convert: 2/5 = 48/120, 3/8 = 45/120, 5/12 = 50/120.",
        "45/120 is smallest, so 3/8 is the smallest fraction.",
        "Order: 3/8 < 2/5 < 5/12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is greater: <span class="math">3/7</span> or <span class="math">5/12</span>?',
      choices: ["3/7","5/12","They are equal","Cannot tell"],
      answer: "3/7",
      hints: [
        "Cross multiply: 3 × 12 = 36 and 7 × 5 = 35.",
        "Since 36 > 35, the first fraction (3/7) is larger.",
        "So 3/7 > 5/12."
      ],
      explanation: [
        "Cross multiply: 3 × 12 = 36, 7 × 5 = 35. Since 36 > 35, 3/7 > 5/12.",
        "So 3/7 is the greater fraction.",
        "The difference is very small."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'How many of these fractions are greater than <span class="math">3/5</span>? <br><span class="math">7/10, 4/7, 5/8, 2/3</span>',
      answer: "3",
      hints: [
        "3/5 = 0.6. Convert each to a decimal to compare.",
        "7/10 = 0.7 > 0.6 ✓, 4/7 ≈ 0.571 < 0.6 ✗.",
        "5/8 = 0.625 > 0.6 ✓, 2/3 ≈ 0.667 > 0.6 ✓. Three are greater."
      ],
      explanation: [
        "Check each: 7/10 > 3/5 ✓, 4/7 < 3/5 ✗, 5/8 > 3/5 ✓, 2/3 > 3/5 ✓.",
        "Three fractions (7/10, 5/8, and 2/3) are greater than 3/5.",
        "Only 4/7 is less than 3/5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which list is in order from least to greatest?',
      choices: ["1/4, 3/10, 2/5","3/10, 1/4, 2/5","2/5, 3/10, 1/4","1/4, 2/5, 3/10"],
      answer: "1/4, 3/10, 2/5",
      hints: [
        "Find a common denominator: LCD of 4, 10, 5 is 20.",
        "1/4 = 5/20, 3/10 = 6/20, 2/5 = 8/20.",
        "5 < 6 < 8, so 1/4 < 3/10 < 2/5."
      ],
      explanation: [
        "LCD = 20. Convert: 1/4 = 5/20, 3/10 = 6/20, 2/5 = 8/20.",
        "Order: 1/4 < 3/10 < 2/5.",
        "5/20 < 6/20 < 8/20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is greater: <span class="math">\frac{5}{9}</span> or <span class="math">\frac{4}{7}</span>?',
      choices: ["4/7", "5/9", "They are equal", "Cannot tell"],
      answer: "4/7",
      hints: [
        "Cross multiply to compare: 5 × 7 vs 4 × 9.",
        "5 × 7 = 35 and 4 × 9 = 36.",
        "Since 36 > 35, the fraction on the right (4/7) is larger."
      ],
      explanation: [
        "Cross multiply: 5 × 7 = 35, 4 × 9 = 36.",
        "36 > 35, so 4/7 > 5/9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Order these fractions from least to greatest: <span class="math">\frac{2}{3}, \frac{5}{8}, \frac{7}{12}</span>. Which fraction is the smallest? Give the numerator.',
      answer: "7",
      hints: [
        "Find a common denominator. LCD of 3, 8, and 12 is 24.",
        "2/3 = 16/24, 5/8 = 15/24, 7/12 = 14/24.",
        "14/24 < 15/24 < 16/24."
      ],
      explanation: [
        "LCD = 24. Rewrite: 2/3 = 16/24, 5/8 = 15/24, 7/12 = 14/24.",
        "Order: 7/12 < 5/8 < 2/3. The smallest is 7/12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is closest to <span class="math">\frac{1}{2}</span>?',
      choices: ["7/15", "3/7", "4/9", "5/11"],
      answer: "7/15",
      hints: [
        "Convert each to a decimal or compare to 1/2 = 0.5.",
        "7/15 ≈ 0.4667, 5/11 ≈ 0.4545, 4/9 ≈ 0.4444, 3/7 ≈ 0.4286.",
        "|0.5 - 0.4667| = 0.0333 is the smallest distance."
      ],
      explanation: [
        "Distances from 0.5: 7/15 ≈ 0.0333, 5/11 ≈ 0.0455, 4/9 ≈ 0.0556, 3/7 ≈ 0.0714.",
        "7/15 is closest to 1/2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is the largest: <span class="math">5/8, 7/11, 4/7</span>?',
      choices: ["7/11", "5/8", "4/7", "They are all equal"],
      answer: "5/8",
      hints: [
        "Convert to decimals: 5/8 = 0.625, 7/11 ≈ 0.636, 4/7 ≈ 0.571.",
        "Wait — double check 7/11 ≈ 0.636 and 5/8 = 0.625.",
        "Actually 7/11 ≈ 0.6364 > 0.625, so 7/11 is largest."
      ],
      explanation: [
        "Convert: 5/8 = 0.625, 7/11 ≈ 0.636, 4/7 ≈ 0.571.",
        "0.636 > 0.625 > 0.571, so 7/11 is the largest.",
        "The answer is 7/11."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Which is greater: <span class="math">6/11</span> or <span class="math">5/9</span>? Cross multiply. What is the product on the left side (6 × 9)?',
      answer: "54",
      hints: [
        "Cross multiply to compare: left product is 6 × 9.",
        "6 × 9 = 54.",
        "Right product is 11 × 5 = 55. Since 54 < 55, 6/11 < 5/9."
      ],
      explanation: [
        "Cross multiply: 6 × 9 = 54, 11 × 5 = 55.",
        "Since 54 < 55, we know 6/11 < 5/9. The left product is 54.",
        "5/9 is the greater fraction."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which list is in order from least to greatest?',
      choices: ["5/12, 3/7, 1/2", "3/7, 5/12, 1/2", "1/2, 3/7, 5/12", "5/12, 1/2, 3/7"],
      answer: "5/12, 3/7, 1/2",
      hints: [
        "Convert to decimals: 5/12 ≈ 0.417, 3/7 ≈ 0.429, 1/2 = 0.5.",
        "Compare: 0.417 < 0.429 < 0.5.",
        "So 5/12 < 3/7 < 1/2."
      ],
      explanation: [
        "Convert: 5/12 ≈ 0.417, 3/7 ≈ 0.429, 1/2 = 0.5.",
        "Order: 5/12 < 3/7 < 1/2.",
        "The correct order is 5/12, 3/7, 1/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction is greater: <span class="math">5/8</span> or <span class="math">7/12</span>?',
      choices: ["5/8", "7/12", "They are equal", "Cannot tell"],
      answer: "5/8",
      hints: [
        "Find the LCD of 8 and 12, which is 24.",
        "5/8 = 15/24 and 7/12 = 14/24.",
        "Since 15 > 14, we have 5/8 > 7/12."
      ],
      explanation: [
        "LCD = 24. Convert: 5/8 = 15/24, 7/12 = 14/24.",
        "15/24 > 14/24, so 5/8 is greater.",
        "Always convert to a common denominator to compare."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Which is greater: <span class="math">7/10</span> or <span class="math">5/7</span>? Cross multiply. What is the product on the left side (7 × 7)?',
      answer: "49",
      hints: [
        "Cross multiply to compare: left product is 7 × 7.",
        "7 × 7 = 49.",
        "Right product is 10 × 5 = 50. Since 49 < 50, 7/10 < 5/7."
      ],
      explanation: [
        "Cross multiply: 7 × 7 = 49, 10 × 5 = 50.",
        "Since 49 < 50, we know 7/10 < 5/7. The left product is 49.",
        "5/7 is the greater fraction."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which list is in order from least to greatest?',
      choices: ["2/7, 1/3, 3/8", "1/3, 2/7, 3/8", "3/8, 1/3, 2/7", "2/7, 3/8, 1/3"],
      answer: "2/7, 1/3, 3/8",
      hints: [
        "Convert to decimals: 2/7 ≈ 0.286, 1/3 ≈ 0.333, 3/8 = 0.375.",
        "Compare: 0.286 < 0.333 < 0.375.",
        "So 2/7 < 1/3 < 3/8."
      ],
      explanation: [
        "Convert: 2/7 ≈ 0.286, 1/3 ≈ 0.333, 3/8 = 0.375.",
        "Order: 2/7 < 1/3 < 3/8.",
        "The correct order is 2/7, 1/3, 3/8."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Which is the largest: <span class="math">5/9, 7/12, 3/5</span>?',
      choices: ["3/5","7/12","5/9","They are all equal"],
      answer: "3/5",
      hints: [
        "Convert to decimals: 5/9 ≈ 0.556, 7/12 ≈ 0.583, 3/5 = 0.6.",
        "Compare: 0.6 > 0.583 > 0.556.",
        "3/5 is the largest."
      ],
      explanation: [
        "Convert: 5/9 ≈ 0.556, 7/12 ≈ 0.583, 3/5 = 0.6.",
        "0.6 > 0.583 > 0.556, so 3/5 is the largest.",
        "The answer is 3/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Which is greater: <span class="math">8/11</span> or <span class="math">5/7</span>? Cross multiply. What is the product on the left side (8 × 7)?',
      answer: "56",
      hints: [
        "Cross multiply to compare: left product is 8 × 7.",
        "8 × 7 = 56.",
        "Right product is 11 × 5 = 55. Since 56 > 55, 8/11 > 5/7."
      ],
      explanation: [
        "Cross multiply: 8 × 7 = 56, 11 × 5 = 55.",
        "Since 56 > 55, we know 8/11 > 5/7. The left product is 56.",
        "8/11 is the greater fraction."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which list is in order from least to greatest?',
      choices: ["4/9, 1/2, 5/8","1/2, 4/9, 5/8","5/8, 1/2, 4/9","4/9, 5/8, 1/2"],
      answer: "4/9, 1/2, 5/8",
      hints: [
        "Convert to decimals: 4/9 ≈ 0.444, 1/2 = 0.5, 5/8 = 0.625.",
        "Compare: 0.444 < 0.5 < 0.625.",
        "So 4/9 < 1/2 < 5/8."
      ],
      explanation: [
        "Convert: 4/9 ≈ 0.444, 1/2 = 0.5, 5/8 = 0.625.",
        "Order: 4/9 < 1/2 < 5/8.",
        "The correct order is 4/9, 1/2, 5/8."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which is greater: <span class="math">5/8</span> or <span class="math">3/5</span>?',
      choices: ["5/8", "3/5", "They are equal", "Cannot tell"],
      answer: "5/8",
      hints: [
        "Cross-multiply to compare: 5 × 5 = 25 and 3 × 8 = 24.",
        "Since 25 > 24, the first fraction is greater.",
        "5/8 > 3/5."
      ],
      explanation: [
        "Cross-multiply: 5 × 5 = 25 vs. 3 × 8 = 24.",
        "Since 25 > 24, <strong>5/8</strong> is greater than 3/5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Order from least to greatest: <span class="math">3/4, 2/3, 5/6</span>',
      choices: ["2/3, 3/4, 5/6", "3/4, 2/3, 5/6", "5/6, 3/4, 2/3", "2/3, 5/6, 3/4"],
      answer: "2/3, 3/4, 5/6",
      hints: [
        "Find the LCD of 4, 3, and 6. LCD = 12.",
        "Convert: 3/4 = 9/12, 2/3 = 8/12, 5/6 = 10/12.",
        "Order: 8/12 < 9/12 < 10/12."
      ],
      explanation: [
        "LCD = 12. Convert: 2/3 = 8/12, 3/4 = 9/12, 5/6 = 10/12.",
        "Least to greatest: <strong>2/3, 3/4, 5/6</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Compare <span class="math">7/12</span> and <span class="math">3/8</span> using a common denominator. What is the LCD?',
      answer: "24",
      hints: [
        "Find the least common multiple of 12 and 8.",
        "Multiples of 12: 12, 24, 36... Multiples of 8: 8, 16, 24...",
        "The first common multiple is 24."
      ],
      explanation: [
        "LCM(12, 8) = <strong>24</strong>.",
        "7/12 = 14/24 and 3/8 = 9/24, so 7/12 > 3/8."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 9: Fraction Word Problems (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'A recipe calls for <span class="math">3/4</span> cup of sugar. If you want to make half the recipe, how much sugar do you need?',
      choices: ["3/8 cup", "3/2 cups", "1/4 cup", "1/2 cup"],
      answer: "3/8 cup",
      hints: [
        "Half the recipe means multiply the amount by 1/2.",
        "3/4 × 1/2 = 3/8.",
        "You need 3/8 cup of sugar."
      ],
      explanation: [
        "Half of 3/4 = 3/4 × 1/2 = 3/8.",
        "You need 3/8 cup of sugar."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Sam ate <span class="math">2/5</span> of a pizza and Jill ate <span class="math">1/5</span>. What fraction of the pizza is left? Write your answer as a fraction.',
      answer: "2/5",
      hints: [
        "Add what was eaten: 2/5 + 1/5 = 3/5.",
        "Subtract from the whole pizza (5/5).",
        "5/5 − 3/5 = 2/5."
      ],
      explanation: [
        "Total eaten: 2/5 + 1/5 = 3/5.",
        "Remaining: 5/5 − 3/5 = 2/5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A board is <span class="math">5/6</span> meter long. If you cut off <span class="math">1/4</span> meter, how long is the remaining piece?',
      choices: ["7/12 meter", "4/6 meter", "1/2 meter", "11/12 meter"],
      answer: "7/12 meter",
      hints: [
        "Subtract: 5/6 − 1/4.",
        "LCD = 12. Convert: 5/6 = 10/12, 1/4 = 3/12.",
        "10/12 − 3/12 = 7/12."
      ],
      explanation: [
        "LCD = 12. Rewrite: 5/6 = 10/12, 1/4 = 3/12.",
        "10/12 − 3/12 = 7/12 meter."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A garden is <span class="math">2/3</span> acre. If each row uses <span class="math">1/9</span> acre, how many rows fit in the garden?',
      answer: "6",
      hints: [
        "Divide the total area by the area per row: 2/3 ÷ 1/9.",
        "Multiply by the reciprocal: 2/3 × 9/1 = 18/3.",
        "18/3 = 6."
      ],
      explanation: [
        "2/3 ÷ 1/9 = 2/3 × 9/1 = 18/3 = 6.",
        "6 rows fit in the garden."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Maria ran <span class="math">3/4</span> mile on Monday and <span class="math">5/6</span> mile on Tuesday. How far did she run in total?',
      choices: ["19/12 miles", "8/10 miles", "2 miles", "1/2 mile"],
      answer: "19/12 miles",
      hints: [
        "Add: 3/4 + 5/6.",
        "LCD = 12. Convert: 3/4 = 9/12, 5/6 = 10/12.",
        "9/12 + 10/12 = 19/12."
      ],
      explanation: [
        "LCD = 12. Rewrite: 3/4 = 9/12, 5/6 = 10/12.",
        "9/12 + 10/12 = 19/12 miles (or 1 7/12 miles)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A tank is <span class="math">7/8</span> full. After using <span class="math">1/3</span> of the tank, what fraction remains?',
      answer: "13/24",
      hints: [
        "Subtract: 7/8 − 1/3.",
        "LCD = 24. Convert: 7/8 = 21/24, 1/3 = 8/24.",
        "21/24 − 8/24 = 13/24."
      ],
      explanation: [
        "LCD = 24. Rewrite: 7/8 = 21/24, 1/3 = 8/24.",
        "21/24 − 8/24 = 13/24 of the tank remains."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A jar has 30 candies. If <span class="math">2/5</span> are red and <span class="math">1/6</span> are blue, how many are red and blue combined?',
      choices: ["17", "12", "18", "15"],
      answer: "17",
      hints: [
        "Red: 2/5 × 30 = 12 candies.",
        "Blue: 1/6 × 30 = 5 candies.",
        "Total: 12 + 5 = 17."
      ],
      explanation: [
        "Red: 2/5 × 30 = 12. Blue: 1/6 × 30 = 5.",
        "Combined: 12 + 5 = 17 candies."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Tom walked <span class="math">5/8</span> mile in the morning and <span class="math">3/10</span> mile in the evening. How far did he walk total?',
      choices: ["37/40 mile", "8/18 mile", "1 mile", "23/40 mile"],
      answer: "37/40 mile",
      hints: [
        "Add: 5/8 + 3/10.",
        "LCD = 40. Convert: 5/8 = 25/40, 3/10 = 12/40.",
        "25/40 + 12/40 = 37/40."
      ],
      explanation: [
        "LCD = 40. Rewrite: 5/8 = 25/40, 3/10 = 12/40.",
        "25/40 + 12/40 = 37/40 mile."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A ribbon is <span class="math">7/10</span> meter long. Amy uses <span class="math">1/4</span> meter. How much ribbon is left? Write your answer as a fraction.',
      answer: "9/20",
      hints: [
        "Subtract: 7/10 − 1/4.",
        "LCD = 20. Convert: 7/10 = 14/20, 1/4 = 5/20.",
        "14/20 − 5/20 = 9/20."
      ],
      explanation: [
        "LCD = 20. Rewrite: 7/10 = 14/20, 1/4 = 5/20.",
        "14/20 − 5/20 = 9/20 meter of ribbon left."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A bag holds 24 marbles. If <span class="math">3/8</span> are green and <span class="math">1/4</span> are yellow, how many marbles are green and yellow combined?',
      choices: ["15", "12", "18", "9"],
      answer: "15",
      hints: [
        "Green: 3/8 × 24 = 9 marbles.",
        "Yellow: 1/4 × 24 = 6 marbles.",
        "Total: 9 + 6 = 15."
      ],
      explanation: [
        "Green: 3/8 × 24 = 9. Yellow: 1/4 × 24 = 6.",
        "Combined: 9 + 6 = 15 marbles."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A wire is <span class="math">3/4</span> meter long. If each piece needs to be <span class="math">1/8</span> meter, how many pieces can be cut?',
      answer: "6",
      hints: [
        "Divide the total length by the piece length: 3/4 ÷ 1/8.",
        "Multiply by the reciprocal: 3/4 × 8/1 = 24/4.",
        "24/4 = 6."
      ],
      explanation: [
        "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6.",
        "6 pieces can be cut."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A box has 36 crayons. If <span class="math">5/12</span> are blue and <span class="math">1/6</span> are red, how many crayons are blue and red combined?',
      choices: ["21", "18", "15", "24"],
      answer: "21",
      hints: [
        "Blue: 5/12 × 36 = 15 crayons.",
        "Red: 1/6 × 36 = 6 crayons.",
        "Total: 15 + 6 = 21."
      ],
      explanation: [
        "Blue: 5/12 × 36 = 15. Red: 1/6 × 36 = 6.",
        "Combined: 15 + 6 = 21 crayons."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Lisa ran <span class="math">3/5</span> of a mile and then walked <span class="math">1/10</span> of a mile. How far did she go? Write your answer as a fraction.',
      answer: "7/10",
      hints: [
        "Add: 3/5 + 1/10.",
        "LCD = 10. Convert: 3/5 = 6/10.",
        "6/10 + 1/10 = 7/10."
      ],
      explanation: [
        "LCD = 10. Rewrite: 3/5 = 6/10.",
        "6/10 + 1/10 = 7/10 of a mile."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A pipe is <span class="math">7/8</span> meter long. If each connector uses <span class="math">1/4</span> meter, how many connectors can be made from the pipe?',
      choices: ["3", "4", "2", "7"],
      answer: "3",
      hints: [
        "Divide: 7/8 ÷ 1/4.",
        "Multiply by the reciprocal: 7/8 × 4/1 = 28/8.",
        "28/8 = 3.5, so 3 whole connectors can be made."
      ],
      explanation: [
        "7/8 ÷ 1/4 = 7/8 × 4/1 = 28/8 = 3.5.",
        "Only 3 whole connectors can be made."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A tank holds <span class="math">5/6</span> of a liter. After pouring out <span class="math">2/9</span> of a liter, how much remains? Write your answer as a fraction.',
      answer: "11/18",
      hints: [
        "Subtract: 5/6 − 2/9.",
        "LCD = 18. Convert: 5/6 = 15/18, 2/9 = 4/18.",
        "15/18 − 4/18 = 11/18."
      ],
      explanation: [
        "LCD = 18. Rewrite: 5/6 = 15/18, 2/9 = 4/18.",
        "15/18 − 4/18 = 11/18 of a liter remains."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A class has 40 students. If <span class="math">3/8</span> play soccer and <span class="math">1/5</span> play basketball, how many play either sport?',
      choices: ["23", "15", "8", "20"],
      answer: "23",
      hints: [
        "Soccer: 3/8 × 40 = 15 students.",
        "Basketball: 1/5 × 40 = 8 students.",
        "Total: 15 + 8 = 23."
      ],
      explanation: [
        "Soccer: 3/8 × 40 = 15. Basketball: 1/5 × 40 = 8.",
        "Combined: 15 + 8 = 23 students."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rope is <span class="math">2/3</span> meter long. If each bracelet needs <span class="math">1/12</span> meter, how many bracelets can be made?',
      choices: ["8", "6", "4", "12"],
      answer: "8",
      hints: [
        "Divide: 2/3 ÷ 1/12.",
        "Multiply by the reciprocal: 2/3 × 12/1 = 24/3.",
        "24/3 = 8."
      ],
      explanation: [
        "2/3 ÷ 1/12 = 2/3 × 12/1 = 24/3 = 8.",
        "8 bracelets can be made."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A painter has <span class="math">5/6</span> gallon of paint. Each wall needs <span class="math">1/4</span> gallon. How many full walls can be painted?',
      answer: "3",
      hints: [
        "Divide: 5/6 ÷ 1/4.",
        "Multiply by the reciprocal: 5/6 × 4/1 = 20/6.",
        "20/6 ≈ 3.33, so 3 full walls can be painted."
      ],
      explanation: [
        "5/6 ÷ 1/4 = 5/6 × 4 = 20/6 = 3 2/6 = 3 1/3.",
        "Only 3 full walls can be painted.",
        "There is not enough paint for a 4th wall."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A pitcher holds <span class="math">4/5</span> liter of juice. Kevin drinks <span class="math">1/3</span> liter. How much juice is left?',
      choices: ["7/15 liter", "3/2 liters", "1/5 liter", "11/15 liter"],
      answer: "7/15 liter",
      hints: [
        "Subtract: 4/5 − 1/3.",
        "LCD = 15. Convert: 4/5 = 12/15, 1/3 = 5/15.",
        "12/15 − 5/15 = 7/15."
      ],
      explanation: [
        "LCD = 15. Rewrite: 4/5 = 12/15, 1/3 = 5/15.",
        "12/15 − 5/15 = 7/15 liter of juice left.",
        "The answer is 7/15 liter."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A shelf holds 48 books. If <span class="math">5/8</span> are fiction and <span class="math">1/12</span> are poetry, how many are fiction and poetry combined?',
      choices: ["34", "30", "24", "36"],
      answer: "34",
      hints: [
        "Fiction: 5/8 × 48 = 30 books.",
        "Poetry: 1/12 × 48 = 4 books.",
        "Total: 30 + 4 = 34."
      ],
      explanation: [
        "Fiction: 5/8 × 48 = 30. Poetry: 1/12 × 48 = 4.",
        "Combined: 30 + 4 = 34 books.",
        "34 of the 48 books are fiction or poetry."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A class has 45 students. If <span class="math">2/9</span> are wearing glasses, how many students wear glasses?',
      answer: "10",
      hints: [
        "Multiply: 2/9 × 45.",
        "45 ÷ 9 = 5, then 5 × 2 = 10.",
        "10 students wear glasses."
      ],
      explanation: [
        "2/9 × 45 = 90/9 = 10.",
        "10 students wear glasses.",
        "Divide first, then multiply to keep numbers small."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A string is <span class="math">5/6</span> meter long. If each bead needs <span class="math">1/12</span> meter, how many beads can be strung?',
      choices: ["10","8","6","12"],
      answer: "10",
      hints: [
        "Divide: 5/6 ÷ 1/12.",
        "Multiply by the reciprocal: 5/6 × 12/1 = 60/6.",
        "60/6 = 10."
      ],
      explanation: [
        "5/6 ÷ 1/12 = 5/6 × 12/1 = 60/6 = 10.",
        "10 beads can be strung.",
        "Dividing by a fraction tells how many fit."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Emma read <span class="math">2/3</span> of a book on Monday and <span class="math">1/5</span> on Tuesday. What fraction has she read in total?',
      choices: ["13/15","3/8","11/15","7/15"],
      answer: "13/15",
      hints: [
        "Add: 2/3 + 1/5.",
        "LCD = 15. Convert: 2/3 = 10/15, 1/5 = 3/15.",
        "10/15 + 3/15 = 13/15."
      ],
      explanation: [
        "LCD of 3 and 5 is 15. Rewrite: 2/3 = 10/15, 1/5 = 3/15.",
        "10/15 + 3/15 = 13/15.",
        "Emma has read 13/15 of the book."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A recipe calls for <span class="math">\frac{3}{4}</span> cup of sugar. If you want to make half the recipe, how many cups of sugar do you need? Give the numerator (denominator is 8).',
      answer: "3",
      hints: [
        "Half of 3/4 means 1/2 × 3/4.",
        "Multiply: 1 × 3 = 3, 2 × 4 = 8.",
        "You need 3/8 cup."
      ],
      explanation: [
        "Half of 3/4 = 1/2 × 3/4 = 3/8.",
        "You need 3/8 cup of sugar."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A tank is <span class="math">\frac{5}{8}</span> full. After using <span class="math">\frac{1}{4}</span> of the tank, what fraction remains?',
      choices: ["3/8", "4/8", "1/8", "5/12"],
      answer: "3/8",
      hints: [
        "Subtract: 5/8 - 1/4.",
        "Find LCD of 8 and 4: LCD = 8. Rewrite 1/4 = 2/8.",
        "5/8 - 2/8 = 3/8."
      ],
      explanation: [
        "Rewrite 1/4 = 2/8.",
        "5/8 - 2/8 = 3/8.",
        "3/8 of the tank remains."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Jake ran <span class="math">\frac{2}{3}</span> of a mile on Monday and <span class="math">\frac{5}{6}</span> of a mile on Tuesday. How many miles did he run in total? Give the numerator (denominator is 2).',
      answer: "3",
      hints: [
        "Add: 2/3 + 5/6.",
        "LCD of 3 and 6 is 6. Rewrite 2/3 = 4/6.",
        "4/6 + 5/6 = 9/6 = 3/2."
      ],
      explanation: [
        "LCD(3, 6) = 6. Rewrite: 2/3 = 4/6.",
        "4/6 + 5/6 = 9/6 = 3/2 = 1 1/2 miles."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A roll of fabric is <span class="math">7/8</span> meter long. Each bow needs <span class="math">1/6</span> meter. How many full bows can be made?',
      answer: "5",
      hints: [
        "Divide: 7/8 ÷ 1/6.",
        "Multiply by the reciprocal: 7/8 × 6/1 = 42/8.",
        "42/8 = 5.25, so 5 full bows can be made."
      ],
      explanation: [
        "7/8 ÷ 1/6 = 7/8 × 6 = 42/8 = 5.25.",
        "Only 5 full bows can be made.",
        "There is not enough fabric for a 6th bow."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A jar has 56 gumballs. If <span class="math">3/7</span> are red and <span class="math">1/8</span> are green, how many are red and green combined?',
      choices: ["31", "24", "28", "32"],
      answer: "31",
      hints: [
        "Red: 3/7 × 56 = 24 gumballs.",
        "Green: 1/8 × 56 = 7 gumballs.",
        "Total: 24 + 7 = 31."
      ],
      explanation: [
        "Red: 3/7 × 56 = 24. Green: 1/8 × 56 = 7.",
        "Combined: 24 + 7 = 31 gumballs.",
        "31 of the 56 gumballs are red or green."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A pool is <span class="math">5/6</span> full. After draining <span class="math">1/3</span>, what fraction remains?',
      choices: ["1/2", "4/6", "2/3", "5/9"],
      answer: "1/2",
      hints: [
        "Subtract: 5/6 − 1/3.",
        "LCD = 6. Convert 1/3 = 2/6.",
        "5/6 − 2/6 = 3/6 = 1/2."
      ],
      explanation: [
        "LCD = 6. Rewrite 1/3 as 2/6.",
        "5/6 − 2/6 = 3/6 = 1/2.",
        "Half the pool remains full."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A tank is <span class="math">7/8</span> full. After using <span class="math">1/4</span>, what fraction remains? Write your answer as a fraction.',
      answer: "5/8",
      hints: [
        "Subtract: 7/8 − 1/4.",
        "LCD = 8. Convert 1/4 = 2/8.",
        "7/8 − 2/8 = 5/8."
      ],
      explanation: [
        "LCD = 8. Rewrite 1/4 as 2/8.",
        "7/8 − 2/8 = 5/8.",
        "5/8 of the tank remains."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A garden has 60 flowers. <span class="math">2/5</span> are roses and <span class="math">1/4</span> are tulips. How many flowers are roses or tulips?',
      choices: ["39", "24", "15", "36"],
      answer: "39",
      hints: [
        "Roses: 2/5 × 60 = 24.",
        "Tulips: 1/4 × 60 = 15.",
        "Total: 24 + 15 = 39."
      ],
      explanation: [
        "Roses: 2/5 × 60 = 24. Tulips: 1/4 × 60 = 15.",
        "Combined: 24 + 15 = 39 flowers.",
        "39 of the 60 flowers are roses or tulips."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rope is <span class="math">3/4</span> meter long. If you need pieces that are <span class="math">1/8</span> meter each, how many pieces can you cut?',
      choices: ["6", "3", "8", "4"],
      answer: "6",
      hints: [
        "Divide: 3/4 ÷ 1/8.",
        "Multiply by the reciprocal: 3/4 × 8/1 = 24/4.",
        "24/4 = 6."
      ],
      explanation: [
        "3/4 ÷ 1/8 = 3/4 × 8 = 24/4 = 6.",
        "You can cut 6 pieces.",
        "Division tells us how many groups fit."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A tube of paint is <span class="math">\frac{5}{6}</span> full. If each painting uses <span class="math">\frac{1}{3}</span> of a tube, how many full paintings can be done?',
      answer: "2",
      hints: [
        "Divide: 5/6 ÷ 1/3.",
        "Multiply by the reciprocal: 5/6 × 3/1 = 15/6.",
        "15/6 = 2.5, so 2 full paintings can be done."
      ],
      explanation: [
        "5/6 ÷ 1/3 = 5/6 × 3 = 15/6 = 2 1/2.",
        "Only 2 full paintings can be done.",
        "There is not enough paint for a 3rd painting."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A box has 42 stickers. If <span class="math">\frac{3}{7}</span> are gold and <span class="math">\frac{1}{6}</span> are silver, how many are gold and silver combined?',
      choices: ["25","18","24","21"],
      answer: "25",
      hints: [
        "Gold: 3/7 × 42 = 18 stickers.",
        "Silver: 1/6 × 42 = 7 stickers.",
        "Total: 18 + 7 = 25."
      ],
      explanation: [
        "Gold: 3/7 × 42 = 18. Silver: 1/6 × 42 = 7.",
        "Combined: 18 + 7 = 25 stickers.",
        "25 of the 42 stickers are gold or silver."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Ana walked <span class="math">\frac{7}{10}</span> mile in the morning and <span class="math">\frac{3}{8}</span> mile in the afternoon. How far did she walk in total?',
      choices: ["43/40 miles","10/18 miles","1 mile","21/40 miles"],
      answer: "43/40 miles",
      hints: [
        "Add: 7/10 + 3/8.",
        "LCD = 40. Convert: 7/10 = 28/40, 3/8 = 15/40.",
        "28/40 + 15/40 = 43/40."
      ],
      explanation: [
        "LCD = 40. Rewrite: 7/10 = 28/40, 3/8 = 15/40.",
        "28/40 + 15/40 = 43/40 miles (or 1 3/40 miles).",
        "The answer is 43/40 miles."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Sarah ate <span class="math">2/5</span> of a pie and Tom ate <span class="math">1/4</span>. How much pie did they eat together?',
      choices: ["13/20", "3/9", "3/20", "1/2"],
      answer: "13/20",
      hints: [
        "Add the fractions: 2/5 + 1/4.",
        "LCD = 20. Convert: 2/5 = 8/20, 1/4 = 5/20.",
        "8/20 + 5/20 = 13/20."
      ],
      explanation: [
        "LCD = 20. Rewrite: 2/5 = 8/20, 1/4 = 5/20.",
        "8/20 + 5/20 = <strong>13/20</strong> of the pie."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A tank is <span class="math">7/8</span> full. After using <span class="math">1/3</span> of the tank, what fraction remains? Write your answer as a fraction.',
      answer: "13/24",
      hints: [
        "Subtract: 7/8 − 1/3.",
        "LCD = 24. Convert: 7/8 = 21/24, 1/3 = 8/24.",
        "21/24 − 8/24 = 13/24."
      ],
      explanation: [
        "LCD = 24. Rewrite: 7/8 = 21/24, 1/3 = 8/24.",
        "21/24 − 8/24 = <strong>13/24</strong> of the tank remains."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A recipe needs <span class="math">5/6</span> cup of milk but you only have <span class="math">1/2</span> cup. How much more milk do you need?',
      choices: ["1/3 cup", "4/6 cup", "1/2 cup", "2/6 cup"],
      answer: "1/3 cup",
      hints: [
        "Subtract: 5/6 − 1/2.",
        "LCD = 6. Convert 1/2 = 3/6.",
        "5/6 − 3/6 = 2/6 = 1/3."
      ],
      explanation: [
        "LCD = 6. Rewrite: 1/2 = 3/6.",
        "5/6 − 3/6 = 2/6 = <strong>1/3 cup</strong> more milk needed."
      ]
    }
  ]
];


// ===================================================================
// WORLD 4 — Chapter 5: Equations & Inequalities (10 topics, 5 each)
// ===================================================================
EXTRA_QUESTIONS[4] = [

  // --------------------------------------------------
  // Topic 0: Simplifying Expressions (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">3x + 5x</span>',
      choices: ["8x", "15x", "35x", "8x²"],
      answer: "8x",
      hints: [
        "These are like terms — both have the variable x.",
        "Add the coefficients: 3 + 5.",
        "3 + 5 = 8, so the answer is 8x."
      ],
      explanation: [
        "3x and 5x are like terms.",
        "Add coefficients: 3 + 5 = 8, so 3x + 5x = 8x."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify: <span class="math">7y − 2y + 4y</span>. What is the coefficient of y?',
      answer: "9",
      hints: [
        "All terms have y, so combine the coefficients.",
        "7 − 2 + 4 = ?",
        "7 − 2 = 5, then 5 + 4 = 9."
      ],
      explanation: [
        "Combine like terms: 7 − 2 + 4 = 9.",
        "So 7y − 2y + 4y = 9y."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">4a + 3b − 2a + 7b</span>',
      choices: ["2a + 10b", "6a + 10b", "2a + 4b", "12ab"],
      answer: "2a + 10b",
      hints: [
        "Group like terms: a-terms together and b-terms together.",
        "4a − 2a = 2a and 3b + 7b = 10b.",
        "The simplified expression is 2a + 10b."
      ],
      explanation: [
        "Combine a-terms: 4a − 2a = 2a. Combine b-terms: 3b + 7b = 10b.",
        "Result: 2a + 10b."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">6m + 9 − 4m − 3</span>. What is the constant term?',
      answer: "6",
      hints: [
        "Combine the m-terms: 6m − 4m = 2m.",
        "Combine the constants: 9 − 3 = 6.",
        "The constant term is 6."
      ],
      explanation: [
        "6m − 4m = 2m, and 9 − 3 = 6.",
        "Simplified: 2m + 6. The constant term is 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">5 + 2(3x + 1)</span>',
      choices: ["6x + 7", "6x + 6", "6x + 2", "30x + 5"],
      answer: "6x + 7",
      hints: [
        "Distribute the 2: 2 × 3x = 6x and 2 × 1 = 2.",
        "Now combine: 5 + 6x + 2.",
        "6x + 7."
      ],
      explanation: [
        "Distribute: 2(3x + 1) = 6x + 2.",
        "Combine constants: 5 + 6x + 2 = 6x + 7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">9p − 3p + 2p − 5</span>. What is the coefficient of p?',
      answer: "8",
      hints: [
        "Combine all the p-terms: 9 − 3 + 2 = 8.",
        "The expression becomes 8p − 5.",
        "The coefficient of p is 8."
      ],
      explanation: [
        "Combine like terms: 9p − 3p + 2p = 8p.",
        "Simplified: 8p − 5. The coefficient is 8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">5x + 2x − x</span>',
      choices: ["6x", "8x", "7x", "5x"],
      answer: "6x",
      hints: [
        "All terms have x. Combine: 5 + 2 − 1.",
        "5 + 2 = 7, then 7 − 1 = 6.",
        "The answer is 6x."
      ],
      explanation: [
        "Combine like terms: 5 + 2 − 1 = 6.",
        "5x + 2x − x = 6x."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">3(2n − 1) + 4n</span>',
      choices: ["10n − 3", "6n − 3", "10n − 1", "6n + 4"],
      answer: "10n − 3",
      hints: [
        "Distribute the 3: 3 × 2n = 6n and 3 × (−1) = −3.",
        "Now combine: 6n − 3 + 4n.",
        "6n + 4n = 10n, so 10n − 3."
      ],
      explanation: [
        "Distribute: 3(2n − 1) = 6n − 3.",
        "Combine: 6n + 4n − 3 = 10n − 3."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify: <span class="math">4z + 6z − 3z</span>. What is the coefficient of z?',
      answer: "7",
      hints: [
        "All terms have z, so combine the coefficients.",
        "4 + 6 − 3 = ?",
        "4 + 6 = 10, then 10 − 3 = 7."
      ],
      explanation: [
        "Combine like terms: 4 + 6 − 3 = 7.",
        "So 4z + 6z − 3z = 7z."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">5c − 2d + 3c + 8d</span>',
      choices: ["8c + 6d", "2c + 6d", "8c − 6d", "15cd"],
      answer: "8c + 6d",
      hints: [
        "Group like terms: c-terms and d-terms separately.",
        "5c + 3c = 8c and −2d + 8d = 6d.",
        "The simplified expression is 8c + 6d."
      ],
      explanation: [
        "Combine c-terms: 5c + 3c = 8c. Combine d-terms: −2d + 8d = 6d.",
        "Result: 8c + 6d."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">2(4k + 3) − 5k</span>',
      choices: ["3k + 6", "8k + 6", "13k + 3", "3k + 3"],
      answer: "3k + 6",
      hints: [
        "Distribute the 2: 2 × 4k = 8k and 2 × 3 = 6.",
        "Now combine: 8k + 6 − 5k.",
        "8k − 5k = 3k, so 3k + 6."
      ],
      explanation: [
        "Distribute: 2(4k + 3) = 8k + 6.",
        "Combine: 8k − 5k + 6 = 3k + 6."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify: <span class="math">8w − 3w + w</span>. What is the coefficient of w?',
      answer: "6",
      hints: [
        "All terms have w, so combine the coefficients.",
        "8 − 3 + 1 = ?",
        "8 − 3 = 5, then 5 + 1 = 6."
      ],
      explanation: [
        "Combine like terms: 8 − 3 + 1 = 6.",
        "So 8w − 3w + w = 6w."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">7x + 2y − 4x + 5y</span>',
      choices: ["3x + 7y", "11x + 7y", "3x − 3y", "14xy"],
      answer: "3x + 7y",
      hints: [
        "Group like terms: x-terms and y-terms separately.",
        "7x − 4x = 3x and 2y + 5y = 7y.",
        "The simplified expression is 3x + 7y."
      ],
      explanation: [
        "Combine x-terms: 7x − 4x = 3x. Combine y-terms: 2y + 5y = 7y.",
        "Result: 3x + 7y."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">4(3m − 2) + 6m</span>',
      choices: ["18m − 8", "12m − 8", "18m − 2", "12m + 6"],
      answer: "18m − 8",
      hints: [
        "Distribute the 4: 4 × 3m = 12m and 4 × (−2) = −8.",
        "Now combine: 12m − 8 + 6m.",
        "12m + 6m = 18m, so 18m − 8."
      ],
      explanation: [
        "Distribute: 4(3m − 2) = 12m − 8.",
        "Combine: 12m + 6m − 8 = 18m − 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">3(2x + 5) − 4x</span>. What is the constant term?',
      answer: "15",
      hints: [
        "Distribute the 3: 3 × 2x = 6x and 3 × 5 = 15.",
        "Now combine: 6x + 15 − 4x.",
        "6x − 4x = 2x, so 2x + 15. The constant term is 15."
      ],
      explanation: [
        "Distribute: 3(2x + 5) = 6x + 15.",
        "Combine: 6x − 4x + 15 = 2x + 15. The constant is 15."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">10n − 6n + 2n</span>',
      choices: ["6n", "8n", "4n", "12n"],
      answer: "6n",
      hints: [
        "All terms have n. Combine: 10 − 6 + 2.",
        "10 − 6 = 4, then 4 + 2 = 6.",
        "The answer is 6n."
      ],
      explanation: [
        "Combine like terms: 10 − 6 + 2 = 6.",
        "10n − 6n + 2n = 6n."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">6a + 4b − 3a − 9b</span>',
      choices: ["3a − 5b", "9a + 13b", "3a + 5b", "9a − 5b"],
      answer: "3a − 5b",
      hints: [
        "Group like terms: a-terms and b-terms separately.",
        "6a − 3a = 3a and 4b − 9b = −5b.",
        "The simplified expression is 3a − 5b."
      ],
      explanation: [
        "Combine a-terms: 6a − 3a = 3a. Combine b-terms: 4b − 9b = −5b.",
        "Result: 3a − 5b."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">5(2x − 3) + 7x</span>. What is the coefficient of x?',
      answer: "17",
      hints: [
        "Distribute the 5: 5 × 2x = 10x and 5 × (−3) = −15.",
        "Now combine: 10x − 15 + 7x.",
        "10x + 7x = 17x, so 17x − 15. The coefficient is 17."
      ],
      explanation: [
        "Distribute: 5(2x − 3) = 10x − 15.",
        "Combine: 10x + 7x − 15 = 17x − 15.",
        "The coefficient of x is 17."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">9t − 4t − 2t</span>',
      choices: ["3t", "15t", "5t", "7t"],
      answer: "3t",
      hints: [
        "All terms have t. Combine: 9 − 4 − 2.",
        "9 − 4 = 5, then 5 − 2 = 3.",
        "The answer is 3t."
      ],
      explanation: [
        "Combine like terms: 9 − 4 − 2 = 3.",
        "9t − 4t − 2t = 3t.",
        "The simplified expression is 3t."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">3r + 8s − r + 2s</span>',
      choices: ["2r + 10s", "4r + 10s", "2r + 6s", "11rs"],
      answer: "2r + 10s",
      hints: [
        "Group like terms: r-terms and s-terms separately.",
        "3r − r = 2r and 8s + 2s = 10s.",
        "The simplified expression is 2r + 10s."
      ],
      explanation: [
        "Combine r-terms: 3r − r = 2r. Combine s-terms: 8s + 2s = 10s.",
        "Result: 2r + 10s.",
        "Remember: r means 1r."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">7x + 3 − 2x + 9</span>. What is the constant term?',
      answer: "12",
      hints: [
        "Combine the x-terms: 7x − 2x = 5x.",
        "Combine the constants: 3 + 9 = 12.",
        "The constant term is 12."
      ],
      explanation: [
        "7x − 2x = 5x, and 3 + 9 = 12.",
        "Simplified: 5x + 12. The constant term is 12.",
        "Group like terms to simplify."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">4(2x − 3) + 5x</span>',
      choices: ["13x − 12","8x − 3","13x − 3","8x + 5"],
      answer: "13x − 12",
      hints: [
        "Distribute the 4: 4 × 2x = 8x and 4 × (−3) = −12.",
        "Now combine: 8x − 12 + 5x.",
        "8x + 5x = 13x, so 13x − 12."
      ],
      explanation: [
        "Distribute: 4(2x − 3) = 8x − 12.",
        "Combine: 8x + 5x − 12 = 13x − 12.",
        "The simplified expression is 13x − 12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">6y + 3y − 4y</span>',
      choices: ["5y","13y","2y","7y"],
      answer: "5y",
      hints: [
        "All terms have y. Combine: 6 + 3 − 4.",
        "6 + 3 = 9, then 9 − 4 = 5.",
        "The answer is 5y."
      ],
      explanation: [
        "Combine like terms: 6 + 3 − 4 = 5.",
        "6y + 3y − 4y = 5y.",
        "The simplified expression is 5y."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">9x - 3x + 2</span>',
      choices: ["6x + 2", "6x - 2", "12x + 2", "9x + 2"],
      answer: "6x + 2",
      hints: [
        "Combine the terms with x: 9x - 3x.",
        "9x - 3x = 6x.",
        "The constant 2 stays. Result: 6x + 2."
      ],
      explanation: [
        "Combine like terms: 9x - 3x = 6x.",
        "So 9x - 3x + 2 = 6x + 2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify <span class="math">4y + 7 + 3y - 2</span>. What is the coefficient of y?',
      answer: "7",
      hints: [
        "Combine the y-terms: 4y + 3y.",
        "4y + 3y = 7y.",
        "The coefficient of y is 7."
      ],
      explanation: [
        "Combine like terms: 4y + 3y = 7y, 7 - 2 = 5.",
        "Result: 7y + 5. The coefficient of y is 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which expression is equivalent to <span class="math">2(a + 4) + 3a</span>?',
      choices: ["5a + 8", "5a + 4", "2a + 7", "6a + 4"],
      answer: "5a + 8",
      hints: [
        "First distribute: 2(a + 4) = 2a + 8.",
        "Then combine: 2a + 8 + 3a.",
        "2a + 3a = 5a. Result: 5a + 8."
      ],
      explanation: [
        "Distribute: 2(a + 4) = 2a + 8.",
        "Combine: 2a + 8 + 3a = 5a + 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">3(4x + 2) − 7x</span>. What is the coefficient of x?',
      answer: "5",
      hints: [
        "Distribute the 3: 3 × 4x = 12x and 3 × 2 = 6.",
        "Now combine: 12x + 6 − 7x.",
        "12x − 7x = 5x, so 5x + 6. The coefficient is 5."
      ],
      explanation: [
        "Distribute: 3(4x + 2) = 12x + 6.",
        "Combine: 12x − 7x + 6 = 5x + 6.",
        "The coefficient of x is 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Simplify: <span class="math">11a − 5a + 2a</span>',
      choices: ["8a", "18a", "6a", "4a"],
      answer: "8a",
      hints: [
        "All terms have a. Combine: 11 − 5 + 2.",
        "11 − 5 = 6, then 6 + 2 = 8.",
        "The answer is 8a."
      ],
      explanation: [
        "Combine like terms: 11 − 5 + 2 = 8.",
        "11a − 5a + 2a = 8a.",
        "The simplified expression is 8a."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">5p + 3q − 2p + 6q</span>',
      choices: ["3p + 9q", "7p + 9q", "3p + 3q", "12pq"],
      answer: "3p + 9q",
      hints: [
        "Group like terms: p-terms and q-terms separately.",
        "5p − 2p = 3p and 3q + 6q = 9q.",
        "The simplified expression is 3p + 9q."
      ],
      explanation: [
        "Combine p-terms: 5p − 2p = 3p. Combine q-terms: 3q + 6q = 9q.",
        "Result: 3p + 9q.",
        "Only combine terms with the same variable."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify: <span class="math">6m + 3m − 4m</span>. What is the coefficient of m?',
      answer: "5",
      hints: [
        "All terms have m, so combine the coefficients.",
        "6 + 3 − 4 = ?",
        "6 + 3 = 9, then 9 − 4 = 5."
      ],
      explanation: [
        "Combine like terms: 6 + 3 − 4 = 5.",
        "So 6m + 3m − 4m = 5m.",
        "The coefficient is 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">7x + 4y − 3x + 2y</span>',
      choices: ["4x + 6y", "10x + 6y", "4x + 2y", "10xy"],
      answer: "4x + 6y",
      hints: [
        "Group like terms: x-terms together and y-terms together.",
        "7x − 3x = 4x and 4y + 2y = 6y.",
        "The simplified expression is 4x + 6y."
      ],
      explanation: [
        "Combine x-terms: 7x − 3x = 4x. Combine y-terms: 4y + 2y = 6y.",
        "Result: 4x + 6y.",
        "Only combine terms with the same variable."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">9k − 2k + 8 − 3</span>. What is the constant term?',
      answer: "5",
      hints: [
        "Combine the k-terms: 9k − 2k = 7k.",
        "Combine the constants: 8 − 3 = 5.",
        "The expression becomes 7k + 5. The constant is 5."
      ],
      explanation: [
        "k-terms: 9k − 2k = 7k. Constants: 8 − 3 = 5.",
        "Simplified: 7k + 5.",
        "The constant term is 5."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">6(2x + 1) − 3x</span>',
      choices: ["9x + 6","12x + 1","9x + 1","15x + 6"],
      answer: "9x + 6",
      hints: [
        "Distribute the 6: 6 × 2x = 12x and 6 × 1 = 6.",
        "Now combine: 12x + 6 − 3x.",
        "12x − 3x = 9x, so 9x + 6."
      ],
      explanation: [
        "Distribute: 6(2x + 1) = 12x + 6.",
        "Combine: 12x − 3x + 6 = 9x + 6.",
        "The simplified expression is 9x + 6."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Simplify: <span class="math">12a − 7a + 3a</span>. What is the coefficient of a?',
      answer: "8",
      hints: [
        "All terms have a, so combine the coefficients.",
        "12 − 7 + 3 = ?",
        "12 − 7 = 5, then 5 + 3 = 8."
      ],
      explanation: [
        "Combine like terms: 12 − 7 + 3 = 8.",
        "So 12a − 7a + 3a = 8a.",
        "The coefficient is 8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">8m + 5n − 3m − 2n</span>',
      choices: ["5m + 3n","11m + 7n","5m − 3n","8mn"],
      answer: "5m + 3n",
      hints: [
        "Group like terms: m-terms and n-terms separately.",
        "8m − 3m = 5m and 5n − 2n = 3n.",
        "The simplified expression is 5m + 3n."
      ],
      explanation: [
        "Combine m-terms: 8m − 3m = 5m. Combine n-terms: 5n − 2n = 3n.",
        "Result: 5m + 3n.",
        "Only combine terms with the same variable."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">5x + 3 − 2x + 9</span>',
      choices: ["3x + 12", "7x + 12", "3x − 6", "7x − 6"],
      answer: "3x + 12",
      hints: [
        "Group like terms: x-terms and constants separately.",
        "5x − 2x = 3x.",
        "3 + 9 = 12. So the answer is 3x + 12."
      ],
      explanation: [
        "Combine x-terms: 5x − 2x = <strong>3x</strong>. Combine constants: 3 + 9 = <strong>12</strong>.",
        "Result: 3x + 12."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Simplify: <span class="math">9p − 4p + 2p − 3p</span>. What is the coefficient of p?',
      answer: "4",
      hints: [
        "All terms have p, so combine the coefficients.",
        "9 − 4 + 2 − 3 = ?",
        "9 − 4 = 5, then 5 + 2 = 7, then 7 − 3 = 4."
      ],
      explanation: [
        "Combine like terms: 9 − 4 + 2 − 3 = <strong>4</strong>.",
        "So 9p − 4p + 2p − 3p = 4p."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Simplify: <span class="math">6a + 2b − 4a + 5b</span>',
      choices: ["2a + 7b", "10a + 7b", "2a − 3b", "10a + 3b"],
      answer: "2a + 7b",
      hints: [
        "Group like terms: a-terms and b-terms separately.",
        "6a − 4a = 2a.",
        "2b + 5b = 7b."
      ],
      explanation: [
        "Combine a-terms: 6a − 4a = 2a. Combine b-terms: 2b + 5b = 7b.",
        "Result: <strong>2a + 7b</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 1: One-Step Equations (+/−) (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">x + 7 = 15</span>',
      choices: ["x = 8", "x = 22", "x = 7", "x = 15"],
      answer: "x = 8",
      hints: [
        "To isolate x, subtract 7 from both sides.",
        "x = 15 − 7.",
        "x = 8."
      ],
      explanation: [
        "Subtract 7 from both sides: x + 7 − 7 = 15 − 7.",
        "x = 8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">y − 9 = 14</span>. What is y?',
      answer: "23",
      hints: [
        "Add 9 to both sides to isolate y.",
        "y = 14 + 9.",
        "y = 23."
      ],
      explanation: [
        "Add 9 to both sides: y = 14 + 9.",
        "y = 23."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">n + 13 = 6</span>',
      choices: ["n = −7", "n = 19", "n = 7", "n = −19"],
      answer: "n = −7",
      hints: [
        "Subtract 13 from both sides.",
        "n = 6 − 13.",
        "n = −7."
      ],
      explanation: [
        "Subtract 13: n = 6 − 13 = −7.",
        "n = −7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">w − 17 = −5</span>. What is w?',
      answer: "12",
      hints: [
        "Add 17 to both sides.",
        "w = −5 + 17.",
        "w = 12."
      ],
      explanation: [
        "Add 17 to both sides: w = −5 + 17.",
        "w = 12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">p + 25 = 40</span>',
      choices: ["p = 15", "p = 65", "p = 25", "p = 10"],
      answer: "p = 15",
      hints: [
        "Subtract 25 from both sides.",
        "p = 40 − 25.",
        "p = 15."
      ],
      explanation: [
        "Subtract 25: p = 40 − 25.",
        "p = 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">m + 18 = 5</span>. What is m?',
      answer: "-13",
      hints: [
        "Subtract 18 from both sides.",
        "m = 5 − 18.",
        "m = −13."
      ],
      explanation: [
        "Subtract 18: m = 5 − 18.",
        "m = −13."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">t − 6 = 11</span>',
      choices: ["t = 17", "t = 5", "t = 66", "t = −5"],
      answer: "t = 17",
      hints: [
        "Add 6 to both sides to isolate t.",
        "t = 11 + 6.",
        "t = 17."
      ],
      explanation: [
        "Add 6 to both sides: t = 11 + 6.",
        "t = 17."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">h − 22 = −10</span>. What is h?',
      answer: "12",
      hints: [
        "Add 22 to both sides.",
        "h = −10 + 22.",
        "h = 12."
      ],
      explanation: [
        "Add 22: h = −10 + 22.",
        "h = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">k + 19 = 4</span>',
      choices: ["k = −15", "k = 23", "k = 15", "k = −23"],
      answer: "k = −15",
      hints: [
        "Subtract 19 from both sides.",
        "k = 4 − 19.",
        "k = −15."
      ],
      explanation: [
        "Subtract 19: k = 4 − 19 = −15.",
        "k = −15."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">d − 8 = 20</span>. What is d?',
      answer: "28",
      hints: [
        "Add 8 to both sides to isolate d.",
        "d = 20 + 8.",
        "d = 28."
      ],
      explanation: [
        "Add 8 to both sides: d = 20 + 8.",
        "d = 28."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">r + 11 = 30</span>',
      choices: ["r = 19", "r = 41", "r = 11", "r = 30"],
      answer: "r = 19",
      hints: [
        "Subtract 11 from both sides.",
        "r = 30 − 11.",
        "r = 19."
      ],
      explanation: [
        "Subtract 11: r = 30 − 11.",
        "r = 19."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">a + 15 = 3</span>. What is a?',
      answer: "-12",
      hints: [
        "Subtract 15 from both sides.",
        "a = 3 − 15.",
        "a = −12."
      ],
      explanation: [
        "Subtract 15: a = 3 − 15.",
        "a = −12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">b − 12 = 7</span>',
      choices: ["b = 19", "b = 5", "b = −5", "b = 84"],
      answer: "b = 19",
      hints: [
        "Add 12 to both sides to isolate b.",
        "b = 7 + 12.",
        "b = 19."
      ],
      explanation: [
        "Add 12 to both sides: b = 7 + 12.",
        "b = 19."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">g + 21 = 8</span>',
      choices: ["g = −13", "g = 29", "g = 13", "g = −29"],
      answer: "g = −13",
      hints: [
        "Subtract 21 from both sides.",
        "g = 8 − 21.",
        "g = −13."
      ],
      explanation: [
        "Subtract 21: g = 8 − 21 = −13.",
        "g = −13."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x + 14 = 31</span>. What is x?',
      answer: "17",
      hints: [
        "Subtract 14 from both sides.",
        "x = 31 − 14.",
        "x = 17."
      ],
      explanation: [
        "Subtract 14: x = 31 − 14.",
        "x = 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">y − 16 = −9</span>',
      choices: ["y = 7", "y = −25", "y = 25", "y = −7"],
      answer: "y = 7",
      hints: [
        "Add 16 to both sides.",
        "y = −9 + 16.",
        "y = 7."
      ],
      explanation: [
        "Add 16: y = −9 + 16.",
        "y = 7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">m + 24 = 11</span>. What is m?',
      answer: "-13",
      hints: [
        "Subtract 24 from both sides.",
        "m = 11 − 24.",
        "m = −13."
      ],
      explanation: [
        "Subtract 24: m = 11 − 24.",
        "m = −13."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">c − 15 = −8</span>',
      choices: ["c = 7", "c = −23", "c = 23", "c = −7"],
      answer: "c = 7",
      hints: [
        "Add 15 to both sides.",
        "c = −8 + 15.",
        "c = 7."
      ],
      explanation: [
        "Add 15: c = −8 + 15.",
        "c = 7.",
        "Check: 7 − 15 = −8 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">z + 9 = 26</span>. What is z?',
      answer: "17",
      hints: [
        "Subtract 9 from both sides.",
        "z = 26 − 9.",
        "z = 17."
      ],
      explanation: [
        "Subtract 9: z = 26 − 9.",
        "z = 17.",
        "Check: 17 + 9 = 26 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">f − 10 = 18</span>',
      choices: ["f = 28", "f = 8", "f = −8", "f = 180"],
      answer: "f = 28",
      hints: [
        "Add 10 to both sides to isolate f.",
        "f = 18 + 10.",
        "f = 28."
      ],
      explanation: [
        "Add 10 to both sides: f = 18 + 10.",
        "f = 28.",
        "Check: 28 − 10 = 18 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">n + 20 = 7</span>',
      choices: ["n = −13","n = 27","n = 13","n = −27"],
      answer: "n = −13",
      hints: [
        "Subtract 20 from both sides.",
        "n = 7 − 20.",
        "n = −13."
      ],
      explanation: [
        "Subtract 20: n = 7 − 20 = −13.",
        "n = −13.",
        "Check: −13 + 20 = 7 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x − 13 = 25</span>. What is x?',
      answer: "38",
      hints: [
        "Add 13 to both sides to isolate x.",
        "x = 25 + 13.",
        "x = 38."
      ],
      explanation: [
        "Add 13 to both sides: x = 25 + 13.",
        "x = 38.",
        "Check: 38 − 13 = 25 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">y − 14 = −6</span>',
      choices: ["y = 8","y = −20","y = 20","y = −8"],
      answer: "y = 8",
      hints: [
        "Add 14 to both sides.",
        "y = −6 + 14.",
        "y = 8."
      ],
      explanation: [
        "Add 14: y = −6 + 14.",
        "y = 8.",
        "Check: 8 − 14 = −6 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve for x: <span class="math">x + 14 = 23</span>',
      answer: "9",
      hints: [
        "To isolate x, subtract 14 from both sides.",
        "x = 23 - 14.",
        "23 - 14 = 9."
      ],
      explanation: [
        "Subtract 14 from both sides: x = 23 - 14.",
        "x = 9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is the solution to <span class="math">y - 17 = 28</span>?',
      choices: ["y = 45", "y = 11", "y = 35", "y = 46"],
      answer: "y = 45",
      hints: [
        "To isolate y, add 17 to both sides.",
        "y = 28 + 17.",
        "28 + 17 = 45."
      ],
      explanation: [
        "Add 17 to both sides: y = 28 + 17.",
        "y = 45."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve for n: <span class="math">n - 9 = 16</span>',
      answer: "25",
      hints: [
        "Add 9 to both sides to isolate n.",
        "n = 16 + 9.",
        "16 + 9 = 25."
      ],
      explanation: [
        "Add 9 to both sides: n = 16 + 9.",
        "n = 25."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">w + 23 = 10</span>',
      choices: ["w = −13", "w = 33", "w = 13", "w = −33"],
      answer: "w = −13",
      hints: [
        "Subtract 23 from both sides.",
        "w = 10 − 23.",
        "w = −13."
      ],
      explanation: [
        "Subtract 23: w = 10 − 23 = −13.",
        "w = −13.",
        "Check: −13 + 23 = 10 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">t + 16 = 42</span>. What is t?',
      answer: "26",
      hints: [
        "Subtract 16 from both sides.",
        "t = 42 − 16.",
        "t = 26."
      ],
      explanation: [
        "Subtract 16: t = 42 − 16.",
        "t = 26.",
        "Check: 26 + 16 = 42 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">q − 15 = 22</span>',
      choices: ["q = 37", "q = 7", "q = −7", "q = 330"],
      answer: "q = 37",
      hints: [
        "Add 15 to both sides to isolate q.",
        "q = 22 + 15.",
        "q = 37."
      ],
      explanation: [
        "Add 15 to both sides: q = 22 + 15.",
        "q = 37.",
        "Check: 37 − 15 = 22 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">n + 19 = 34</span>',
      choices: ["n = 15", "n = 53", "n = 25", "n = 34"],
      answer: "n = 15",
      hints: [
        "Subtract 19 from both sides.",
        "n = 34 − 19.",
        "n = 15."
      ],
      explanation: [
        "Subtract 19 from both sides: n = 34 − 19.",
        "n = 15.",
        "Check: 15 + 19 = 34 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">y − 27 = 48</span>. What is y?',
      answer: "75",
      hints: [
        "Add 27 to both sides to isolate y.",
        "y = 48 + 27.",
        "y = 75."
      ],
      explanation: [
        "Add 27 to both sides: y = 48 + 27.",
        "y = 75.",
        "Check: 75 − 27 = 48 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x − 33 = 19</span>',
      choices: ["x = 52", "x = 14", "x = −14", "x = 627"],
      answer: "x = 52",
      hints: [
        "Add 33 to both sides to isolate x.",
        "x = 19 + 33.",
        "x = 52."
      ],
      explanation: [
        "Add 33 to both sides: x = 19 + 33.",
        "x = 52.",
        "Check: 52 − 33 = 19 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">x + 32 = 19</span>. What is x?',
      answer: "-13",
      hints: [
        "Subtract 32 from both sides.",
        "x = 19 − 32.",
        "x = −13."
      ],
      explanation: [
        "Subtract 32: x = 19 − 32 = −13.",
        "x = −13.",
        "Check: −13 + 32 = 19 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">y − 11 = 24</span>',
      choices: ["y = 35","y = 13","y = −13","y = 264"],
      answer: "y = 35",
      hints: [
        "Add 11 to both sides to isolate y.",
        "y = 24 + 11.",
        "y = 35."
      ],
      explanation: [
        "Add 11 to both sides: y = 24 + 11.",
        "y = 35.",
        "Check: 35 − 11 = 24 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">m + 28 = 15</span>',
      choices: ["m = −13","m = 43","m = 13","m = −43"],
      answer: "m = −13",
      hints: [
        "Subtract 28 from both sides.",
        "m = 15 − 28.",
        "m = −13."
      ],
      explanation: [
        "Subtract 28: m = 15 − 28 = −13.",
        "m = −13.",
        "Check: −13 + 28 = 15 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">x + 14 = 31</span>',
      answer: "17",
      hints: [
        "To isolate x, subtract 14 from both sides.",
        "x = 31 − 14.",
        "31 − 14 = 17."
      ],
      explanation: [
        "Subtract 14 from both sides: x = 31 − 14.",
        "x = <strong>17</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">y − 23 = 18</span>',
      choices: ["y = 41", "y = 5", "y = −5", "y = 42"],
      answer: "y = 41",
      hints: [
        "To isolate y, add 23 to both sides.",
        "y = 18 + 23.",
        "18 + 23 = 41."
      ],
      explanation: [
        "Add 23 to both sides: y = 18 + 23.",
        "y = <strong>41</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">n + 37 = 52</span>',
      answer: "15",
      hints: [
        "To isolate n, subtract 37 from both sides.",
        "n = 52 − 37.",
        "52 − 37 = 15."
      ],
      explanation: [
        "Subtract 37 from both sides: n = 52 − 37.",
        "n = <strong>15</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 2: One-Step Equations (×/÷) (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">4x = 28</span>',
      choices: ["x = 7", "x = 32", "x = 24", "x = 112"],
      answer: "x = 7",
      hints: [
        "Divide both sides by 4.",
        "x = 28 ÷ 4.",
        "x = 7."
      ],
      explanation: [
        "Divide both sides by 4: x = 28/4.",
        "x = 7."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">y/6 = 5</span>. What is y?',
      answer: "30",
      hints: [
        "Multiply both sides by 6.",
        "y = 5 × 6.",
        "y = 30."
      ],
      explanation: [
        "Multiply both sides by 6: y = 5 × 6.",
        "y = 30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">−3m = 27</span>',
      choices: ["m = −9", "m = 9", "m = −30", "m = 30"],
      answer: "m = −9",
      hints: [
        "Divide both sides by −3.",
        "m = 27 ÷ (−3).",
        "m = −9."
      ],
      explanation: [
        "Divide both sides by −3: m = 27/(−3).",
        "m = −9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">n/5 = −8</span>. What is n?',
      answer: "-40",
      hints: [
        "Multiply both sides by 5.",
        "n = −8 × 5.",
        "n = −40."
      ],
      explanation: [
        "Multiply both sides by 5: n = −8 × 5.",
        "n = −40."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">7k = 63</span>',
      choices: ["k = 9", "k = 56", "k = 70", "k = 8"],
      answer: "k = 9",
      hints: [
        "Divide both sides by 7.",
        "k = 63 ÷ 7.",
        "k = 9."
      ],
      explanation: [
        "Divide both sides by 7: k = 63/7.",
        "k = 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">−5t = 45</span>. What is t?',
      answer: "-9",
      hints: [
        "Divide both sides by −5.",
        "t = 45 ÷ (−5).",
        "t = −9."
      ],
      explanation: [
        "Divide both sides by −5: t = 45/(−5).",
        "t = −9."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">x/8 = 7</span>',
      choices: ["x = 56", "x = 15", "x = 1", "x = 0.875"],
      answer: "x = 56",
      hints: [
        "Multiply both sides by 8.",
        "x = 7 × 8.",
        "x = 56."
      ],
      explanation: [
        "Multiply both sides by 8: x = 7 × 8.",
        "x = 56."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">6w = −42</span>',
      choices: ["w = −7", "w = 7", "w = −36", "w = −48"],
      answer: "w = −7",
      hints: [
        "Divide both sides by 6.",
        "w = −42 ÷ 6.",
        "w = −7."
      ],
      explanation: [
        "Divide both sides by 6: w = −42/6.",
        "w = −7."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">9p = 81</span>. What is p?',
      answer: "9",
      hints: [
        "Divide both sides by 9.",
        "p = 81 ÷ 9.",
        "p = 9."
      ],
      explanation: [
        "Divide both sides by 9: p = 81/9.",
        "p = 9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">r/4 = −6</span>',
      choices: ["r = −24", "r = −2", "r = 24", "r = −10"],
      answer: "r = −24",
      hints: [
        "Multiply both sides by 4.",
        "r = −6 × 4.",
        "r = −24."
      ],
      explanation: [
        "Multiply both sides by 4: r = −6 × 4.",
        "r = −24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">−8d = 56</span>. What is d?',
      answer: "-7",
      hints: [
        "Divide both sides by −8.",
        "d = 56 ÷ (−8).",
        "d = −7."
      ],
      explanation: [
        "Divide both sides by −8: d = 56/(−8).",
        "d = −7."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">5x = 45</span>',
      choices: ["x = 9", "x = 40", "x = 50", "x = 225"],
      answer: "x = 9",
      hints: [
        "Divide both sides by 5.",
        "x = 45 ÷ 5.",
        "x = 9."
      ],
      explanation: [
        "Divide both sides by 5: x = 45/5.",
        "x = 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">y/7 = −4</span>. What is y?',
      answer: "-28",
      hints: [
        "Multiply both sides by 7.",
        "y = −4 × 7.",
        "y = −28."
      ],
      explanation: [
        "Multiply both sides by 7: y = −4 × 7.",
        "y = −28."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">−6w = 54</span>',
      choices: ["w = −9", "w = 9", "w = −48", "w = 60"],
      answer: "w = −9",
      hints: [
        "Divide both sides by −6.",
        "w = 54 ÷ (−6).",
        "w = −9."
      ],
      explanation: [
        "Divide both sides by −6: w = 54/(−6).",
        "w = −9."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">x/9 = 4</span>',
      choices: ["x = 36", "x = 13", "x = 5", "x = 0.44"],
      answer: "x = 36",
      hints: [
        "Multiply both sides by 9.",
        "x = 4 × 9.",
        "x = 36."
      ],
      explanation: [
        "Multiply both sides by 9: x = 4 × 9.",
        "x = 36."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">−7p = 49</span>. What is p?',
      answer: "-7",
      hints: [
        "Divide both sides by −7.",
        "p = 49 ÷ (−7).",
        "p = −7."
      ],
      explanation: [
        "Divide both sides by −7: p = 49/(−7).",
        "p = −7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">8m = 72</span>',
      choices: ["m = 9", "m = 64", "m = 80", "m = 8"],
      answer: "m = 9",
      hints: [
        "Divide both sides by 8.",
        "m = 72 ÷ 8.",
        "m = 9."
      ],
      explanation: [
        "Divide both sides by 8: m = 72/8.",
        "m = 9."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">3q = 36</span>. What is q?',
      answer: "12",
      hints: [
        "Divide both sides by 3.",
        "q = 36 ÷ 3.",
        "q = 12."
      ],
      explanation: [
        "Divide both sides by 3: q = 36/3.",
        "q = 12.",
        "Check: 3 × 12 = 36 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">w/3 = −9</span>',
      choices: ["w = −27", "w = −3", "w = 27", "w = −12"],
      answer: "w = −27",
      hints: [
        "Multiply both sides by 3.",
        "w = −9 × 3.",
        "w = −27."
      ],
      explanation: [
        "Multiply both sides by 3: w = −9 × 3.",
        "w = −27.",
        "Check: −27 ÷ 3 = −9 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">−4n = 32</span>',
      choices: ["n = −8", "n = 8", "n = −36", "n = 128"],
      answer: "n = −8",
      hints: [
        "Divide both sides by −4.",
        "n = 32 ÷ (−4).",
        "n = −8."
      ],
      explanation: [
        "Divide both sides by −4: n = 32/(−4).",
        "n = −8.",
        "Check: −4 × (−8) = 32 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">6x = 54</span>',
      choices: ["x = 9","x = 48","x = 60","x = 324"],
      answer: "x = 9",
      hints: [
        "Divide both sides by 6.",
        "x = 54 ÷ 6.",
        "x = 9."
      ],
      explanation: [
        "Divide both sides by 6: x = 54/6.",
        "x = 9.",
        "Check: 6 × 9 = 54 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">−9k = 63</span>. What is k?',
      answer: "-7",
      hints: [
        "Divide both sides by −9.",
        "k = 63 ÷ (−9).",
        "k = −7."
      ],
      explanation: [
        "Divide both sides by −9: k = 63/(−9).",
        "k = −7.",
        "Check: −9 × (−7) = 63 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">m/6 = −5</span>',
      choices: ["m = −30","m = −11","m = 30","m = −1"],
      answer: "m = −30",
      hints: [
        "Multiply both sides by 6.",
        "m = −5 × 6.",
        "m = −30."
      ],
      explanation: [
        "Multiply both sides by 6: m = −5 × 6.",
        "m = −30.",
        "Check: −30 ÷ 6 = −5 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve for x: <span class="math">7x = 56</span>',
      choices: ["x = 8", "x = 7", "x = 49", "x = 9"],
      answer: "x = 8",
      hints: [
        "Divide both sides by 7.",
        "x = 56 ÷ 7.",
        "56 ÷ 7 = 8."
      ],
      explanation: [
        "Divide both sides by 7: x = 56/7.",
        "x = 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve for m: <span class="math">\frac{m}{9} = 7</span>',
      answer: "63",
      hints: [
        "Multiply both sides by 9.",
        "m = 7 × 9.",
        "7 × 9 = 63."
      ],
      explanation: [
        "Multiply both sides by 9: m = 7 × 9.",
        "m = 63."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve for p: <span class="math">11p = 132</span>',
      answer: "12",
      hints: [
        "Divide both sides by 11.",
        "p = 132 ÷ 11.",
        "132 ÷ 11 = 12."
      ],
      explanation: [
        "Divide both sides by 11: p = 132/11.",
        "p = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">−10y = 80</span>',
      choices: ["y = −8", "y = 8", "y = −70", "y = 800"],
      answer: "y = −8",
      hints: [
        "Divide both sides by −10.",
        "y = 80 ÷ (−10).",
        "y = −8."
      ],
      explanation: [
        "Divide both sides by −10: y = 80/(−10).",
        "y = −8.",
        "Check: −10 × (−8) = 80 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x/11 = 6</span>. What is x?',
      answer: "66",
      hints: [
        "Multiply both sides by 11.",
        "x = 6 × 11.",
        "x = 66."
      ],
      explanation: [
        "Multiply both sides by 11: x = 6 × 11.",
        "x = 66.",
        "Check: 66 ÷ 11 = 6 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">12w = 108</span>',
      choices: ["w = 9", "w = 96", "w = 120", "w = 1296"],
      answer: "w = 9",
      hints: [
        "Divide both sides by 12.",
        "w = 108 ÷ 12.",
        "w = 9."
      ],
      explanation: [
        "Divide both sides by 12: w = 108/12.",
        "w = 9.",
        "Check: 12 × 9 = 108 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x/13 = 4</span>. What is x?',
      answer: "52",
      hints: [
        "Multiply both sides by 13.",
        "x = 4 × 13.",
        "x = 52."
      ],
      explanation: [
        "Multiply both sides by 13: x = 4 × 13.",
        "x = 52.",
        "Check: 52 ÷ 13 = 4 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">14p = 98</span>',
      choices: ["p = 7", "p = 84", "p = 112", "p = 1372"],
      answer: "p = 7",
      hints: [
        "Divide both sides by 14.",
        "p = 98 ÷ 14.",
        "p = 7."
      ],
      explanation: [
        "Divide both sides by 14: p = 98/14.",
        "p = 7.",
        "Check: 14 × 7 = 98 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">9z = 117</span>. What is z?',
      answer: "13",
      hints: [
        "Divide both sides by 9.",
        "z = 117 ÷ 9.",
        "z = 13."
      ],
      explanation: [
        "Divide both sides by 9: z = 117/9.",
        "z = 13.",
        "Check: 9 × 13 = 117 ✓."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">−6x = 48</span>',
      choices: ["x = −8","x = 8","x = −42","x = 288"],
      answer: "x = −8",
      hints: [
        "Divide both sides by −6.",
        "x = 48 ÷ (−6).",
        "x = −8."
      ],
      explanation: [
        "Divide both sides by −6: x = 48/(−6).",
        "x = −8.",
        "Check: −6 × (−8) = 48 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">x/12 = 5</span>. What is x?',
      answer: "60",
      hints: [
        "Multiply both sides by 12.",
        "x = 5 × 12.",
        "x = 60."
      ],
      explanation: [
        "Multiply both sides by 12: x = 5 × 12.",
        "x = 60.",
        "Check: 60 ÷ 12 = 5 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">13p = 91</span>',
      choices: ["p = 7","p = 78","p = 104","p = 1183"],
      answer: "p = 7",
      hints: [
        "Divide both sides by 13.",
        "p = 91 ÷ 13.",
        "p = 7."
      ],
      explanation: [
        "Divide both sides by 13: p = 91/13.",
        "p = 7.",
        "Check: 13 × 7 = 91 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5n = 45</span>',
      answer: "9",
      hints: [
        "To isolate n, divide both sides by 5.",
        "n = 45 ÷ 5.",
        "45 ÷ 5 = 9."
      ],
      explanation: [
        "Divide both sides by 5: n = 45/5.",
        "n = <strong>9</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">m/6 = 7</span>',
      choices: ["m = 42", "m = 1", "m = 13", "m = 36"],
      answer: "m = 42",
      hints: [
        "To isolate m, multiply both sides by 6.",
        "m = 7 × 6.",
        "7 × 6 = 42."
      ],
      explanation: [
        "Multiply both sides by 6: m = 7 × 6.",
        "m = <strong>42</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">8k = 72</span>',
      answer: "9",
      hints: [
        "To isolate k, divide both sides by 8.",
        "k = 72 ÷ 8.",
        "72 ÷ 8 = 9."
      ],
      explanation: [
        "Divide both sides by 8: k = 72/8.",
        "k = <strong>9</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 3: Combining & Solving (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">2x + 3x = 25</span>',
      choices: ["x = 5", "x = 10", "x = 25", "x = 3"],
      answer: "x = 5",
      hints: [
        "Combine like terms on the left: 2x + 3x = 5x.",
        "Now solve 5x = 25.",
        "x = 25 ÷ 5 = 5."
      ],
      explanation: [
        "Combine: 2x + 3x = 5x, so 5x = 25.",
        "Divide by 5: x = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">8y − 3y + 2 = 17</span>. What is y?',
      answer: "3",
      hints: [
        "Combine like terms: 8y − 3y = 5y.",
        "Now solve: 5y + 2 = 17 → 5y = 15.",
        "y = 15 ÷ 5 = 3."
      ],
      explanation: [
        "Combine: 8y − 3y = 5y → 5y + 2 = 17.",
        "Subtract 2: 5y = 15. Divide by 5: y = 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">6a − 2a + 7 = 31</span>',
      choices: ["a = 6", "a = 8", "a = 4", "a = 10"],
      answer: "a = 6",
      hints: [
        "Combine like terms: 6a − 2a = 4a.",
        "4a + 7 = 31 → 4a = 24.",
        "a = 24 ÷ 4 = 6."
      ],
      explanation: [
        "Combine: 4a + 7 = 31.",
        "Subtract 7: 4a = 24. Divide by 4: a = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3p + 4p − 5 = 30</span>. What is p?',
      answer: "5",
      hints: [
        "Combine like terms: 3p + 4p = 7p.",
        "7p − 5 = 30 → 7p = 35.",
        "p = 35 ÷ 7 = 5."
      ],
      explanation: [
        "Combine: 7p − 5 = 30.",
        "Add 5: 7p = 35. Divide by 7: p = 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">x + x + x = 18</span>',
      choices: ["x = 6", "x = 18", "x = 3", "x = 9"],
      answer: "x = 6",
      hints: [
        "Combine: x + x + x = 3x.",
        "3x = 18.",
        "x = 18 ÷ 3 = 6."
      ],
      explanation: [
        "x + x + x = 3x, so 3x = 18.",
        "Divide by 3: x = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5m − 2m + 10 = 40</span>. What is m?',
      answer: "10",
      hints: [
        "Combine like terms: 5m − 2m = 3m.",
        "3m + 10 = 40 → 3m = 30.",
        "m = 30 ÷ 3 = 10."
      ],
      explanation: [
        "Combine: 3m + 10 = 40.",
        "Subtract 10: 3m = 30. Divide by 3: m = 10."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">4n + n = 35</span>',
      choices: ["n = 7", "n = 5", "n = 35", "n = 8"],
      answer: "n = 7",
      hints: [
        "Combine like terms: 4n + n = 5n.",
        "5n = 35.",
        "n = 35 ÷ 5 = 7."
      ],
      explanation: [
        "Combine: 4n + n = 5n, so 5n = 35.",
        "Divide by 5: n = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">9k − 4k − 3 = 22</span>',
      choices: ["k = 5", "k = 4", "k = 25", "k = 3"],
      answer: "k = 5",
      hints: [
        "Combine like terms: 9k − 4k = 5k.",
        "5k − 3 = 22 → 5k = 25.",
        "k = 25 ÷ 5 = 5."
      ],
      explanation: [
        "Combine: 5k − 3 = 22.",
        "Add 3: 5k = 25. Divide by 5: k = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6w + 2w − 8 = 24</span>. What is w?',
      answer: "4",
      hints: [
        "Combine like terms: 6w + 2w = 8w.",
        "8w − 8 = 24 → 8w = 32.",
        "w = 32 ÷ 8 = 4."
      ],
      explanation: [
        "Combine: 8w − 8 = 24.",
        "Add 8: 8w = 32. Divide by 8: w = 4."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">2y + 2y = 20</span>',
      choices: ["y = 5", "y = 10", "y = 4", "y = 20"],
      answer: "y = 5",
      hints: [
        "Combine like terms: 2y + 2y = 4y.",
        "4y = 20.",
        "y = 20 ÷ 4 = 5."
      ],
      explanation: [
        "Combine: 2y + 2y = 4y, so 4y = 20.",
        "Divide by 4: y = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">7t − 3t + 6 = 26</span>. What is t?',
      answer: "5",
      hints: [
        "Combine like terms: 7t − 3t = 4t.",
        "4t + 6 = 26 → 4t = 20.",
        "t = 20 ÷ 4 = 5."
      ],
      explanation: [
        "Combine: 4t + 6 = 26.",
        "Subtract 6: 4t = 20. Divide by 4: t = 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">3x + 5x = 48</span>',
      choices: ["x = 6", "x = 8", "x = 48", "x = 16"],
      answer: "x = 6",
      hints: [
        "Combine like terms: 3x + 5x = 8x.",
        "Now solve 8x = 48.",
        "x = 48 ÷ 8 = 6."
      ],
      explanation: [
        "Combine: 3x + 5x = 8x, so 8x = 48.",
        "Divide by 8: x = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">10y − 4y + 3 = 39</span>. What is y?',
      answer: "6",
      hints: [
        "Combine like terms: 10y − 4y = 6y.",
        "6y + 3 = 39 → 6y = 36.",
        "y = 36 ÷ 6 = 6."
      ],
      explanation: [
        "Combine: 6y + 3 = 39.",
        "Subtract 3: 6y = 36. Divide by 6: y = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">8a − 3a − 7 = 28</span>',
      choices: ["a = 7", "a = 5", "a = 4", "a = 35"],
      answer: "a = 7",
      hints: [
        "Combine like terms: 8a − 3a = 5a.",
        "5a − 7 = 28 → 5a = 35.",
        "a = 35 ÷ 5 = 7."
      ],
      explanation: [
        "Combine: 5a − 7 = 28.",
        "Add 7: 5a = 35. Divide by 5: a = 7."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">6n + 3n = 54</span>. What is n?',
      answer: "6",
      hints: [
        "Combine like terms: 6n + 3n = 9n.",
        "Now solve 9n = 54.",
        "n = 54 ÷ 9 = 6."
      ],
      explanation: [
        "Combine: 6n + 3n = 9n, so 9n = 54.",
        "Divide by 9: n = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">11t − 5t + 4 = 34</span>',
      choices: ["t = 5", "t = 6", "t = 4", "t = 38"],
      answer: "t = 5",
      hints: [
        "Combine like terms: 11t − 5t = 6t.",
        "6t + 4 = 34 → 6t = 30.",
        "t = 30 ÷ 6 = 5."
      ],
      explanation: [
        "Combine: 6t + 4 = 34.",
        "Subtract 4: 6t = 30. Divide by 6: t = 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">7x − x − 9 = 21</span>',
      choices: ["x = 5", "x = 2", "x = 6", "x = 30"],
      answer: "x = 5",
      hints: [
        "Combine like terms: 7x − x = 6x.",
        "6x − 9 = 21 → 6x = 30.",
        "x = 30 ÷ 6 = 5."
      ],
      explanation: [
        "Combine: 6x − 9 = 21.",
        "Add 9: 6x = 30. Divide by 6: x = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">4m + 6m − 12 = 38</span>. What is m?',
      answer: "5",
      hints: [
        "Combine like terms: 4m + 6m = 10m.",
        "10m − 12 = 38 → 10m = 50.",
        "m = 50 ÷ 10 = 5."
      ],
      explanation: [
        "Combine: 10m − 12 = 38.",
        "Add 12: 10m = 50. Divide by 10: m = 5.",
        "Check: 4(5) + 6(5) − 12 = 20 + 30 − 12 = 38 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">5n + 2n = 42</span>',
      choices: ["n = 6", "n = 7", "n = 42", "n = 8"],
      answer: "n = 6",
      hints: [
        "Combine like terms: 5n + 2n = 7n.",
        "Now solve 7n = 42.",
        "n = 42 ÷ 7 = 6."
      ],
      explanation: [
        "Combine: 5n + 2n = 7n, so 7n = 42.",
        "Divide by 7: n = 6.",
        "Check: 5(6) + 2(6) = 30 + 12 = 42 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">9k − 5k + 8 = 36</span>',
      choices: ["k = 7", "k = 4", "k = 11", "k = 28"],
      answer: "k = 7",
      hints: [
        "Combine like terms: 9k − 5k = 4k.",
        "4k + 8 = 36 → 4k = 28.",
        "k = 28 ÷ 4 = 7."
      ],
      explanation: [
        "Combine: 4k + 8 = 36.",
        "Subtract 8: 4k = 28. Divide by 4: k = 7.",
        "Check: 9(7) − 5(7) + 8 = 63 − 35 + 8 = 36 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">4x + 2x = 30</span>. What is x?',
      answer: "5",
      hints: [
        "Combine like terms: 4x + 2x = 6x.",
        "Now solve 6x = 30.",
        "x = 30 ÷ 6 = 5."
      ],
      explanation: [
        "Combine: 4x + 2x = 6x, so 6x = 30.",
        "Divide by 6: x = 5.",
        "Check: 4(5) + 2(5) = 20 + 10 = 30 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">12a − 5a + 3 = 45</span>',
      choices: ["a = 6","a = 7","a = 5","a = 42"],
      answer: "a = 6",
      hints: [
        "Combine like terms: 12a − 5a = 7a.",
        "7a + 3 = 45 → 7a = 42.",
        "a = 42 ÷ 7 = 6."
      ],
      explanation: [
        "Combine: 7a + 3 = 45.",
        "Subtract 3: 7a = 42. Divide by 7: a = 6.",
        "Check: 12(6) − 5(6) + 3 = 72 − 30 + 3 = 45 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">5m + 3m − 10 = 30</span>',
      choices: ["m = 5","m = 4","m = 10","m = 40"],
      answer: "m = 5",
      hints: [
        "Combine like terms: 5m + 3m = 8m.",
        "8m − 10 = 30 → 8m = 40.",
        "m = 40 ÷ 8 = 5."
      ],
      explanation: [
        "Combine: 8m − 10 = 30.",
        "Add 10: 8m = 40. Divide by 8: m = 5.",
        "Check: 5(5) + 3(5) − 10 = 25 + 15 − 10 = 30 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve for x: <span class="math">3x + 2x = 35</span>',
      answer: "7",
      hints: [
        "First combine like terms: 3x + 2x = 5x.",
        "Now solve: 5x = 35.",
        "x = 35 ÷ 5 = 7."
      ],
      explanation: [
        "Combine: 3x + 2x = 5x. So 5x = 35.",
        "Divide by 5: x = 7."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve for y: <span class="math">4y - y + 6 = 21</span>',
      choices: ["y = 5", "y = 3", "y = 7", "y = 9"],
      answer: "y = 5",
      hints: [
        "Combine like terms: 4y - y = 3y.",
        "3y + 6 = 21. Subtract 6: 3y = 15.",
        "Divide by 3: y = 5."
      ],
      explanation: [
        "Combine: 4y - y = 3y. So 3y + 6 = 21.",
        "Subtract 6: 3y = 15. Divide by 3: y = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve for n: <span class="math">6n - 2n + 1 = 25</span>',
      answer: "6",
      hints: [
        "Combine like terms: 6n - 2n = 4n.",
        "4n + 1 = 25. Subtract 1: 4n = 24.",
        "Divide by 4: n = 6."
      ],
      explanation: [
        "Combine: 6n - 2n = 4n. So 4n + 1 = 25.",
        "Subtract 1: 4n = 24. Divide by 4: n = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">8k − 3k + 7 = 42</span>',
      choices: ["k = 7", "k = 5", "k = 9", "k = 35"],
      answer: "k = 7",
      hints: [
        "Combine like terms: 8k − 3k = 5k.",
        "5k + 7 = 42 → 5k = 35.",
        "k = 35 ÷ 5 = 7."
      ],
      explanation: [
        "Combine: 5k + 7 = 42.",
        "Subtract 7: 5k = 35. Divide by 5: k = 7.",
        "Check: 8(7) − 3(7) + 7 = 56 − 21 + 7 = 42 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Solve: <span class="math">7n + 2n = 63</span>. What is n?',
      answer: "7",
      hints: [
        "Combine like terms: 7n + 2n = 9n.",
        "Now solve 9n = 63.",
        "n = 63 ÷ 9 = 7."
      ],
      explanation: [
        "Combine: 7n + 2n = 9n, so 9n = 63.",
        "Divide by 9: n = 7.",
        "Check: 7(7) + 2(7) = 49 + 14 = 63 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">10w − 6w − 11 = 25</span>',
      choices: ["w = 9", "w = 4", "w = 6", "w = 36"],
      answer: "w = 9",
      hints: [
        "Combine like terms: 10w − 6w = 4w.",
        "4w − 11 = 25 → 4w = 36.",
        "w = 36 ÷ 4 = 9."
      ],
      explanation: [
        "Combine: 4w − 11 = 25.",
        "Add 11: 4w = 36. Divide by 4: w = 9.",
        "Check: 10(9) − 6(9) − 11 = 90 − 54 − 11 = 25 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">4x + 6x = 70</span>',
      choices: ["x = 7", "x = 10", "x = 70", "x = 17.5"],
      answer: "x = 7",
      hints: [
        "Combine like terms: 4x + 6x = 10x.",
        "Now solve 10x = 70.",
        "x = 70 ÷ 10 = 7."
      ],
      explanation: [
        "Combine: 4x + 6x = 10x, so 10x = 70.",
        "Divide by 10: x = 7.",
        "Check: 4(7) + 6(7) = 28 + 42 = 70 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">9y − 4y + 3 = 38</span>. What is y?',
      answer: "7",
      hints: [
        "Combine like terms: 9y − 4y = 5y.",
        "5y + 3 = 38 → 5y = 35.",
        "y = 35 ÷ 5 = 7."
      ],
      explanation: [
        "Combine: 5y + 3 = 38.",
        "Subtract 3: 5y = 35. Divide by 5: y = 7.",
        "Check: 9(7) − 4(7) + 3 = 63 − 28 + 3 = 38 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">12m − 5m − 8 = 27</span>',
      choices: ["m = 5", "m = 7", "m = 3", "m = 35"],
      answer: "m = 5",
      hints: [
        "Combine like terms: 12m − 5m = 7m.",
        "7m − 8 = 27 → 7m = 35.",
        "m = 35 ÷ 7 = 5."
      ],
      explanation: [
        "Combine: 7m − 8 = 27.",
        "Add 8: 7m = 35. Divide by 7: m = 5.",
        "Check: 12(5) − 5(5) − 8 = 60 − 25 − 8 = 27 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">11y − 4y + 5 = 40</span>. What is y?',
      answer: "5",
      hints: [
        "Combine like terms: 11y − 4y = 7y.",
        "7y + 5 = 40 → 7y = 35.",
        "y = 35 ÷ 7 = 5."
      ],
      explanation: [
        "Combine: 7y + 5 = 40.",
        "Subtract 5: 7y = 35. Divide by 7: y = 5.",
        "Check: 11(5) − 4(5) + 5 = 55 − 20 + 5 = 40 ✓."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Solve: <span class="math">6n + 4n = 80</span>',
      choices: ["n = 8","n = 10","n = 80","n = 4"],
      answer: "n = 8",
      hints: [
        "Combine like terms: 6n + 4n = 10n.",
        "Now solve 10n = 80.",
        "n = 80 ÷ 10 = 8."
      ],
      explanation: [
        "Combine: 6n + 4n = 10n, so 10n = 80.",
        "Divide by 10: n = 8.",
        "Check: 6(8) + 4(8) = 48 + 32 = 80 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">8w − 3w − 6 = 29</span>',
      choices: ["w = 7","w = 5","w = 23","w = 35"],
      answer: "w = 7",
      hints: [
        "Combine like terms: 8w − 3w = 5w.",
        "5w − 6 = 29 → 5w = 35.",
        "w = 35 ÷ 5 = 7."
      ],
      explanation: [
        "Combine: 5w − 6 = 29.",
        "Add 6: 5w = 35. Divide by 5: w = 7.",
        "Check: 8(7) − 3(7) − 6 = 56 − 21 − 6 = 29 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3x + 7 = 22</span>',
      answer: "5",
      hints: [
        "First subtract 7 from both sides: 3x = 15.",
        "Then divide both sides by 3.",
        "x = 15 ÷ 3 = 5."
      ],
      explanation: [
        "Subtract 7: 3x = 22 − 7 = 15.",
        "Divide by 3: x = 15/3 = <strong>5</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">4x + 3 = 2x + 15</span>',
      choices: ["x = 6", "x = 9", "x = 3", "x = 12"],
      answer: "x = 6",
      hints: [
        "Subtract 2x from both sides: 2x + 3 = 15.",
        "Subtract 3 from both sides: 2x = 12.",
        "Divide by 2: x = 6."
      ],
      explanation: [
        "Subtract 2x: 2x + 3 = 15. Subtract 3: 2x = 12.",
        "Divide by 2: x = <strong>6</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">5y − 8 = 2y + 13</span>',
      answer: "7",
      hints: [
        "Subtract 2y from both sides: 3y − 8 = 13.",
        "Add 8 to both sides: 3y = 21.",
        "Divide by 3: y = 7."
      ],
      explanation: [
        "Subtract 2y: 3y − 8 = 13. Add 8: 3y = 21.",
        "Divide by 3: y = <strong>7</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 4: Distributive Property (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">3(x + 4)</span>',
      choices: ["3x + 12", "3x + 4", "x + 12", "7x"],
      answer: "3x + 12",
      hints: [
        "Distribute the 3 to each term inside the parentheses.",
        "3 × x = 3x and 3 × 4 = 12.",
        "3(x + 4) = 3x + 12."
      ],
      explanation: [
        "Distribute: 3 × x = 3x, 3 × 4 = 12.",
        "3(x + 4) = 3x + 12."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Expand <span class="math">5(2y + 3)</span>. What is the constant term?',
      answer: "15",
      hints: [
        "Distribute 5 to each term inside.",
        "5 × 2y = 10y and 5 × 3 = 15.",
        "The constant term is 15."
      ],
      explanation: [
        "5(2y + 3) = 10y + 15.",
        "The constant term is 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">−2(4x − 5)</span>',
      choices: ["−8x + 10", "−8x − 10", "8x − 10", "−8x − 5"],
      answer: "−8x + 10",
      hints: [
        "Distribute −2 to each term.",
        "−2 × 4x = −8x and −2 × (−5) = +10.",
        "Result: −8x + 10."
      ],
      explanation: [
        "−2 × 4x = −8x, −2 × (−5) = +10.",
        "−2(4x − 5) = −8x + 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">4(3a − 2) + 5</span>. What is the coefficient of a?',
      answer: "12",
      hints: [
        "Distribute 4: 4 × 3a = 12a and 4 × (−2) = −8.",
        "Expression becomes: 12a − 8 + 5 = 12a − 3.",
        "The coefficient of a is 12."
      ],
      explanation: [
        "4(3a − 2) + 5 = 12a − 8 + 5 = 12a − 3.",
        "The coefficient of a is 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">6(n − 7)</span>',
      choices: ["6n − 42", "6n − 7", "6n + 42", "n − 42"],
      answer: "6n − 42",
      hints: [
        "Distribute 6 to each term.",
        "6 × n = 6n and 6 × (−7) = −42.",
        "6(n − 7) = 6n − 42."
      ],
      explanation: [
        "6 × n = 6n, 6 × (−7) = −42.",
        "6(n − 7) = 6n − 42."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">7(2x + 3)</span>',
      choices: ["14x + 21", "14x + 3", "9x + 21", "7x + 21"],
      answer: "14x + 21",
      hints: [
        "Distribute 7 to each term inside.",
        "7 × 2x = 14x and 7 × 3 = 21.",
        "7(2x + 3) = 14x + 21."
      ],
      explanation: [
        "Distribute: 7 × 2x = 14x, 7 × 3 = 21.",
        "7(2x + 3) = 14x + 21."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−3(5y − 2)</span>. What is the constant term?',
      answer: "6",
      hints: [
        "Distribute −3 to each term.",
        "−3 × 5y = −15y and −3 × (−2) = +6.",
        "The constant term is 6."
      ],
      explanation: [
        "−3(5y − 2) = −15y + 6.",
        "The constant term is 6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">2(4m + 5)</span>',
      choices: ["8m + 10", "6m + 7", "8m + 5", "4m + 10"],
      answer: "8m + 10",
      hints: [
        "Distribute 2 to each term inside.",
        "2 × 4m = 8m and 2 × 5 = 10.",
        "2(4m + 5) = 8m + 10."
      ],
      explanation: [
        "Distribute: 2 × 4m = 8m, 2 × 5 = 10.",
        "2(4m + 5) = 8m + 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−4(2p + 3)</span>. What is the constant term?',
      answer: "-12",
      hints: [
        "Distribute −4 to each term.",
        "−4 × 2p = −8p and −4 × 3 = −12.",
        "The constant term is −12."
      ],
      explanation: [
        "−4(2p + 3) = −8p − 12.",
        "The constant term is −12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">5(y + 6)</span>',
      choices: ["5y + 30", "5y + 6", "6y + 30", "y + 30"],
      answer: "5y + 30",
      hints: [
        "Distribute 5 to each term inside.",
        "5 × y = 5y and 5 × 6 = 30.",
        "5(y + 6) = 5y + 30."
      ],
      explanation: [
        "Distribute: 5 × y = 5y, 5 × 6 = 30.",
        "5(y + 6) = 5y + 30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">9(x − 3)</span>',
      choices: ["9x − 27", "9x − 3", "9x + 27", "x − 27"],
      answer: "9x − 27",
      hints: [
        "Distribute 9 to each term.",
        "9 × x = 9x and 9 × (−3) = −27.",
        "9(x − 3) = 9x − 27."
      ],
      explanation: [
        "9 × x = 9x, 9 × (−3) = −27.",
        "9(x − 3) = 9x − 27."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">4(x + 7)</span>',
      choices: ["4x + 28", "4x + 7", "x + 28", "11x"],
      answer: "4x + 28",
      hints: [
        "Distribute the 4 to each term inside the parentheses.",
        "4 × x = 4x and 4 × 7 = 28.",
        "4(x + 7) = 4x + 28."
      ],
      explanation: [
        "Distribute: 4 × x = 4x, 4 × 7 = 28.",
        "4(x + 7) = 4x + 28."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−5(3n + 4)</span>. What is the coefficient of n?',
      answer: "-15",
      hints: [
        "Distribute −5 to each term.",
        "−5 × 3n = −15n and −5 × 4 = −20.",
        "The coefficient of n is −15."
      ],
      explanation: [
        "−5(3n + 4) = −15n − 20.",
        "The coefficient of n is −15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">8(2y − 3)</span>',
      choices: ["16y − 24", "16y − 3", "10y − 24", "8y − 24"],
      answer: "16y − 24",
      hints: [
        "Distribute 8 to each term.",
        "8 × 2y = 16y and 8 × (−3) = −24.",
        "8(2y − 3) = 16y − 24."
      ],
      explanation: [
        "8 × 2y = 16y, 8 × (−3) = −24.",
        "8(2y − 3) = 16y − 24."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">6(x + 3)</span>',
      choices: ["6x + 18", "6x + 3", "x + 18", "9x"],
      answer: "6x + 18",
      hints: [
        "Distribute the 6 to each term inside the parentheses.",
        "6 × x = 6x and 6 × 3 = 18.",
        "6(x + 3) = 6x + 18."
      ],
      explanation: [
        "Distribute: 6 × x = 6x, 6 × 3 = 18.",
        "6(x + 3) = 6x + 18."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−6(2a + 5)</span>. What is the constant term?',
      answer: "-30",
      hints: [
        "Distribute −6 to each term.",
        "−6 × 2a = −12a and −6 × 5 = −30.",
        "The constant term is −30."
      ],
      explanation: [
        "−6(2a + 5) = −12a − 30.",
        "The constant term is −30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">3(4y − 5)</span>',
      choices: ["12y − 15", "12y − 5", "7y − 15", "12y + 15"],
      answer: "12y − 15",
      hints: [
        "Distribute 3 to each term.",
        "3 × 4y = 12y and 3 × (−5) = −15.",
        "3(4y − 5) = 12y − 15."
      ],
      explanation: [
        "3 × 4y = 12y, 3 × (−5) = −15.",
        "3(4y − 5) = 12y − 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">7(3n − 4)</span>. What is the constant term?',
      answer: "-28",
      hints: [
        "Distribute 7 to each term.",
        "7 × 3n = 21n and 7 × (−4) = −28.",
        "The constant term is −28."
      ],
      explanation: [
        "7(3n − 4) = 21n − 28.",
        "The constant term is −28.",
        "Remember to multiply both the variable term and the constant."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">3(x + 9)</span>',
      choices: ["3x + 27", "3x + 9", "x + 27", "12x"],
      answer: "3x + 27",
      hints: [
        "Distribute the 3 to each term inside the parentheses.",
        "3 × x = 3x and 3 × 9 = 27.",
        "3(x + 9) = 3x + 27."
      ],
      explanation: [
        "Distribute: 3 × x = 3x, 3 × 9 = 27.",
        "3(x + 9) = 3x + 27.",
        "Both terms inside get multiplied by 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">−2(5x + 6)</span>',
      choices: ["−10x − 12", "−10x + 12", "10x − 12", "−10x − 6"],
      answer: "−10x − 12",
      hints: [
        "Distribute −2 to each term.",
        "−2 × 5x = −10x and −2 × 6 = −12.",
        "Result: −10x − 12."
      ],
      explanation: [
        "−2 × 5x = −10x, −2 × 6 = −12.",
        "−2(5x + 6) = −10x − 12.",
        "Both terms become negative."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">8(x + 2)</span>',
      choices: ["8x + 16","8x + 2","x + 16","10x"],
      answer: "8x + 16",
      hints: [
        "Distribute the 8 to each term inside the parentheses.",
        "8 × x = 8x and 8 × 2 = 16.",
        "8(x + 2) = 8x + 16."
      ],
      explanation: [
        "Distribute: 8 × x = 8x, 8 × 2 = 16.",
        "8(x + 2) = 8x + 16.",
        "Both terms inside get multiplied by 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−3(4x − 7)</span>. What is the constant term?',
      answer: "21",
      hints: [
        "Distribute −3 to each term.",
        "−3 × 4x = −12x and −3 × (−7) = +21.",
        "The constant term is 21."
      ],
      explanation: [
        "−3(4x − 7) = −12x + 21.",
        "The constant term is 21.",
        "A negative times a negative gives a positive."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">5(3y − 4)</span>',
      choices: ["15y − 20","15y − 4","8y − 20","15y + 20"],
      answer: "15y − 20",
      hints: [
        "Distribute 5 to each term.",
        "5 × 3y = 15y and 5 × (−4) = −20.",
        "5(3y − 4) = 15y − 20."
      ],
      explanation: [
        "5 × 3y = 15y, 5 × (−4) = −20.",
        "5(3y − 4) = 15y − 20.",
        "Multiply both the variable and constant terms."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">4(x + 6)</span>',
      choices: ["4x + 24", "4x + 6", "x + 24", "4x + 10"],
      answer: "4x + 24",
      hints: [
        "Distribute 4 to each term inside the parentheses.",
        "4 × x = 4x and 4 × 6 = 24.",
        "The answer is 4x + 24."
      ],
      explanation: [
        "4(x + 6) = 4·x + 4·6 = 4x + 24.",
        "Use the distributive property: a(b + c) = ab + ac."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand and simplify: <span class="math">3(2x + 5) - 4x</span>. What is the coefficient of x?',
      answer: "2",
      hints: [
        "First distribute: 3(2x + 5) = 6x + 15.",
        "Then subtract 4x: 6x + 15 - 4x.",
        "Combine: 6x - 4x = 2x."
      ],
      explanation: [
        "Distribute: 3(2x + 5) = 6x + 15.",
        "Combine: 6x + 15 - 4x = 2x + 15. Coefficient of x is 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which expression is equivalent to <span class="math">5(3y - 2)</span>?',
      choices: ["15y - 10", "15y - 2", "8y - 2", "15y + 10"],
      answer: "15y - 10",
      hints: [
        "Distribute 5 to each term inside the parentheses.",
        "5 × 3y = 15y and 5 × (-2) = -10.",
        "The answer is 15y - 10."
      ],
      explanation: [
        "5(3y - 2) = 5·3y + 5·(-2) = 15y - 10.",
        "Remember to distribute to BOTH terms, including the negative one."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">7(x + 5)</span>',
      choices: ["7x + 35", "7x + 5", "x + 35", "12x"],
      answer: "7x + 35",
      hints: [
        "Distribute the 7 to each term inside the parentheses.",
        "7 × x = 7x and 7 × 5 = 35.",
        "7(x + 5) = 7x + 35."
      ],
      explanation: [
        "Distribute: 7 × x = 7x, 7 × 5 = 35.",
        "7(x + 5) = 7x + 35.",
        "Both terms inside get multiplied by 7."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−4(3x − 8)</span>. What is the constant term?',
      answer: "32",
      hints: [
        "Distribute −4 to each term.",
        "−4 × 3x = −12x and −4 × (−8) = +32.",
        "The constant term is 32."
      ],
      explanation: [
        "−4(3x − 8) = −12x + 32.",
        "The constant term is 32.",
        "A negative times a negative gives a positive."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">9(2y − 1)</span>',
      choices: ["18y − 9", "18y − 1", "11y − 9", "18y + 9"],
      answer: "18y − 9",
      hints: [
        "Distribute 9 to each term.",
        "9 × 2y = 18y and 9 × (−1) = −9.",
        "9(2y − 1) = 18y − 9."
      ],
      explanation: [
        "9 × 2y = 18y, 9 × (−1) = −9.",
        "9(2y − 1) = 18y − 9.",
        "Multiply both the variable and constant terms."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Expand: <span class="math">4(y + 6)</span>',
      choices: ["4y + 24", "4y + 6", "y + 24", "10y"],
      answer: "4y + 24",
      hints: [
        "Multiply 4 by each term inside the parentheses.",
        "4 × y = 4y and 4 × 6 = 24.",
        "4(y + 6) = 4y + 24."
      ],
      explanation: [
        "Distribute 4: 4 × y = 4y and 4 × 6 = 24.",
        "4(y + 6) = 4y + 24.",
        "Each term inside gets multiplied by 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Expand <span class="math">−3(5x − 7)</span>. What is the constant term?',
      answer: "21",
      hints: [
        "Distribute −3 to each term.",
        "−3 × 5x = −15x and −3 × (−7) = +21.",
        "The constant term is 21."
      ],
      explanation: [
        "−3(5x − 7) = −15x + 21.",
        "The constant term is 21.",
        "A negative times a negative gives a positive."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">6(3a − 4)</span>',
      choices: ["18a − 24", "18a − 4", "9a − 24", "18a + 24"],
      answer: "18a − 24",
      hints: [
        "Distribute 6 to each term.",
        "6 × 3a = 18a and 6 × (−4) = −24.",
        "6(3a − 4) = 18a − 24."
      ],
      explanation: [
        "6 × 3a = 18a, 6 × (−4) = −24.",
        "6(3a − 4) = 18a − 24.",
        "Multiply both the variable and constant terms by 6."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">−3(5x − 2)</span>',
      choices: ["−15x + 6","−15x − 6","15x − 6","−15x − 2"],
      answer: "−15x + 6",
      hints: [
        "Distribute −3 to each term.",
        "−3 × 5x = −15x and −3 × (−2) = +6.",
        "Result: −15x + 6."
      ],
      explanation: [
        "−3 × 5x = −15x, −3 × (−2) = +6.",
        "−3(5x − 2) = −15x + 6.",
        "Remember: negative times negative is positive."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Expand <span class="math">4(3y + 5)</span>. What is the constant term?',
      answer: "20",
      hints: [
        "Distribute 4 to each term inside.",
        "4 × 3y = 12y and 4 × 5 = 20.",
        "The constant term is 20."
      ],
      explanation: [
        "4(3y + 5) = 12y + 20.",
        "The constant term is 20.",
        "Multiply each term inside by 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Expand: <span class="math">5(2a − 4) + 3a</span>',
      choices: ["13a − 20","10a − 4","13a − 4","7a − 20"],
      answer: "13a − 20",
      hints: [
        "Distribute the 5: 5 × 2a = 10a and 5 × (−4) = −20.",
        "Now combine: 10a − 20 + 3a.",
        "10a + 3a = 13a, so 13a − 20."
      ],
      explanation: [
        "Distribute: 5(2a − 4) = 10a − 20.",
        "Combine: 10a + 3a − 20 = 13a − 20.",
        "The expanded expression is 13a − 20."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">2(g − 7) = 16</span>',
      answer: "15",
      hints: [
        "Distribute: 2g − 14 = 16.",
        "Add 14 to both sides: 2g = 30.",
        "Divide by 2: g = 15."
      ],
      explanation: [
        "Distribute: 2g − 14 = 16. Add 14: 2g = 30.",
        "Divide by 2: g = <strong>15</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Expand and simplify: <span class="math">3(2x + 5) − 4x</span>',
      choices: ["2x + 15", "6x + 15", "10x + 5", "2x + 5"],
      answer: "2x + 15",
      hints: [
        "First distribute the 3: 6x + 15.",
        "Then subtract 4x: 6x + 15 − 4x.",
        "Combine: 6x − 4x = 2x. So 2x + 15."
      ],
      explanation: [
        "Distribute: 3(2x + 5) = 6x + 15.",
        "Then 6x + 15 − 4x = <strong>2x + 15</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">4(x + 3) = 28</span>',
      answer: "4",
      hints: [
        "Distribute: 4x + 12 = 28.",
        "Subtract 12 from both sides: 4x = 16.",
        "Divide by 4: x = 4."
      ],
      explanation: [
        "Distribute: 4x + 12 = 28. Subtract 12: 4x = 16.",
        "Divide by 4: x = <strong>4</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 5: Two-Step Equations (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">2x + 5 = 17</span>',
      choices: ["x = 6", "x = 11", "x = 7", "x = 22"],
      answer: "x = 6",
      hints: [
        "First, subtract 5 from both sides: 2x = 12.",
        "Then divide both sides by 2.",
        "x = 12 ÷ 2 = 6."
      ],
      explanation: [
        "Subtract 5: 2x = 17 − 5 = 12.",
        "Divide by 2: x = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3y − 4 = 20</span>. What is y?',
      answer: "8",
      hints: [
        "Add 4 to both sides: 3y = 24.",
        "Divide both sides by 3.",
        "y = 24 ÷ 3 = 8."
      ],
      explanation: [
        "Add 4: 3y = 24.",
        "Divide by 3: y = 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−4n + 9 = −15</span>',
      choices: ["n = 6", "n = −6", "n = 1", "n = −1"],
      answer: "n = 6",
      hints: [
        "Subtract 9 from both sides: −4n = −24.",
        "Divide both sides by −4.",
        "n = −24 ÷ (−4) = 6."
      ],
      explanation: [
        "Subtract 9: −4n = −15 − 9 = −24.",
        "Divide by −4: n = 6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">5w + 11 = −9</span>. What is w?',
      answer: "-4",
      hints: [
        "Subtract 11 from both sides: 5w = −20.",
        "Divide both sides by 5.",
        "w = −20 ÷ 5 = −4."
      ],
      explanation: [
        "Subtract 11: 5w = −9 − 11 = −20.",
        "Divide by 5: w = −4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x/3 + 4 = 9</span>',
      choices: ["x = 15", "x = 5", "x = 39", "x = 3"],
      answer: "x = 15",
      hints: [
        "Subtract 4 from both sides: x/3 = 5.",
        "Multiply both sides by 3.",
        "x = 5 × 3 = 15."
      ],
      explanation: [
        "Subtract 4: x/3 = 5.",
        "Multiply by 3: x = 15."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">7m − 10 = 25</span>. What is m?',
      answer: "5",
      hints: [
        "Add 10 to both sides: 7m = 35.",
        "Divide both sides by 7.",
        "m = 35 ÷ 7 = 5."
      ],
      explanation: [
        "Add 10: 7m = 35.",
        "Divide by 7: m = 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">4k + 3 = 31</span>',
      choices: ["k = 7", "k = 8", "k = 34", "k = 4"],
      answer: "k = 7",
      hints: [
        "Subtract 3 from both sides: 4k = 28.",
        "Divide by 4.",
        "k = 28 ÷ 4 = 7."
      ],
      explanation: [
        "Subtract 3: 4k = 28.",
        "Divide by 4: k = 7."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−6p + 2 = −22</span>. What is p?',
      answer: "4",
      hints: [
        "Subtract 2 from both sides: −6p = −24.",
        "Divide both sides by −6.",
        "p = −24 ÷ (−6) = 4."
      ],
      explanation: [
        "Subtract 2: −6p = −24.",
        "Divide by −6: p = 4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">6x − 5 = 19</span>',
      choices: ["x = 4", "x = 14", "x = 2", "x = 24"],
      answer: "x = 4",
      hints: [
        "Add 5 to both sides: 6x = 24.",
        "Divide by 6.",
        "x = 24 ÷ 6 = 4."
      ],
      explanation: [
        "Add 5: 6x = 24.",
        "Divide by 6: x = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−3t + 7 = −17</span>. What is t?',
      answer: "8",
      hints: [
        "Subtract 7 from both sides: −3t = −24.",
        "Divide both sides by −3.",
        "t = −24 ÷ (−3) = 8."
      ],
      explanation: [
        "Subtract 7: −3t = −24.",
        "Divide by −3: t = 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">n/4 − 3 = 5</span>',
      choices: ["n = 32", "n = 8", "n = 2", "n = 20"],
      answer: "n = 32",
      hints: [
        "Add 3 to both sides: n/4 = 8.",
        "Multiply both sides by 4.",
        "n = 8 × 4 = 32."
      ],
      explanation: [
        "Add 3: n/4 = 8.",
        "Multiply by 4: n = 32."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">5x + 3 = 28</span>',
      choices: ["x = 5", "x = 6", "x = 31", "x = 4"],
      answer: "x = 5",
      hints: [
        "Subtract 3 from both sides: 5x = 25.",
        "Divide by 5.",
        "x = 25 ÷ 5 = 5."
      ],
      explanation: [
        "Subtract 3: 5x = 25.",
        "Divide by 5: x = 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−8y + 3 = −37</span>. What is y?',
      answer: "5",
      hints: [
        "Subtract 3 from both sides: −8y = −40.",
        "Divide both sides by −8.",
        "y = −40 ÷ (−8) = 5."
      ],
      explanation: [
        "Subtract 3: −8y = −40.",
        "Divide by −8: y = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">w/6 + 5 = 12</span>',
      choices: ["w = 42", "w = 7", "w = 2", "w = 17"],
      answer: "w = 42",
      hints: [
        "Subtract 5 from both sides: w/6 = 7.",
        "Multiply both sides by 6.",
        "w = 7 × 6 = 42."
      ],
      explanation: [
        "Subtract 5: w/6 = 7.",
        "Multiply by 6: w = 42."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3x + 7 = 25</span>. What is x?',
      answer: "6",
      hints: [
        "Subtract 7 from both sides: 3x = 18.",
        "Divide both sides by 3.",
        "x = 18 ÷ 3 = 6."
      ],
      explanation: [
        "Subtract 7: 3x = 18.",
        "Divide by 3: x = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−5m + 8 = −27</span>',
      choices: ["m = 7", "m = −7", "m = 4", "m = −4"],
      answer: "m = 7",
      hints: [
        "Subtract 8 from both sides: −5m = −35.",
        "Divide both sides by −5.",
        "m = −35 ÷ (−5) = 7."
      ],
      explanation: [
        "Subtract 8: −5m = −27 − 8 = −35.",
        "Divide by −5: m = 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">y/5 − 2 = 6</span>',
      choices: ["y = 40", "y = 8", "y = 4", "y = 20"],
      answer: "y = 40",
      hints: [
        "Add 2 to both sides: y/5 = 8.",
        "Multiply both sides by 5.",
        "y = 8 × 5 = 40."
      ],
      explanation: [
        "Add 2: y/5 = 8.",
        "Multiply by 5: y = 40."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−9k + 5 = −31</span>. What is k?',
      answer: "4",
      hints: [
        "Subtract 5 from both sides: −9k = −36.",
        "Divide both sides by −9.",
        "k = −36 ÷ (−9) = 4."
      ],
      explanation: [
        "Subtract 5: −9k = −36.",
        "Divide by −9: k = 4.",
        "Check: −9(4) + 5 = −36 + 5 = −31 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">8x − 3 = 37</span>',
      choices: ["x = 5", "x = 4", "x = 40", "x = 34"],
      answer: "x = 5",
      hints: [
        "Add 3 to both sides: 8x = 40.",
        "Divide by 8.",
        "x = 40 ÷ 8 = 5."
      ],
      explanation: [
        "Add 3: 8x = 40.",
        "Divide by 8: x = 5.",
        "Check: 8(5) − 3 = 40 − 3 = 37 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/7 + 3 = 7</span>',
      choices: ["x = 28", "x = 4", "x = 10", "x = 49"],
      answer: "x = 28",
      hints: [
        "Subtract 3 from both sides: x/7 = 4.",
        "Multiply both sides by 7.",
        "x = 4 × 7 = 28."
      ],
      explanation: [
        "Subtract 3: x/7 = 4.",
        "Multiply by 7: x = 28.",
        "Check: 28/7 + 3 = 4 + 3 = 7 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">4x + 9 = 33</span>',
      choices: ["x = 6","x = 8","x = 42","x = 3"],
      answer: "x = 6",
      hints: [
        "Subtract 9 from both sides: 4x = 24.",
        "Divide by 4.",
        "x = 24 ÷ 4 = 6."
      ],
      explanation: [
        "Subtract 9: 4x = 24.",
        "Divide by 4: x = 6.",
        "Check: 4(6) + 9 = 24 + 9 = 33 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−7m + 6 = −22</span>. What is m?',
      answer: "4",
      hints: [
        "Subtract 6 from both sides: −7m = −28.",
        "Divide both sides by −7.",
        "m = −28 ÷ (−7) = 4."
      ],
      explanation: [
        "Subtract 6: −7m = −28.",
        "Divide by −7: m = 4.",
        "Check: −7(4) + 6 = −28 + 6 = −22 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/8 + 2 = 5</span>',
      choices: ["x = 24","x = 3","x = 40","x = 56"],
      answer: "x = 24",
      hints: [
        "Subtract 2 from both sides: x/8 = 3.",
        "Multiply both sides by 8.",
        "x = 3 × 8 = 24."
      ],
      explanation: [
        "Subtract 2: x/8 = 3.",
        "Multiply by 8: x = 24.",
        "Check: 24/8 + 2 = 3 + 2 = 5 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve for x: <span class="math">4x - 7 = 21</span>',
      answer: "7",
      hints: [
        "First add 7 to both sides: 4x = 28.",
        "Then divide by 4: x = 28 ÷ 4.",
        "x = 7."
      ],
      explanation: [
        "Add 7: 4x = 28.",
        "Divide by 4: x = 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve for y: <span class="math">\frac{y}{3} + 5 = 11</span>',
      choices: ["y = 18", "y = 2", "y = 33", "y = 8"],
      answer: "y = 18",
      hints: [
        "Subtract 5 from both sides: y/3 = 6.",
        "Multiply both sides by 3: y = 18.",
        "Check: 18/3 + 5 = 6 + 5 = 11 ✓"
      ],
      explanation: [
        "Subtract 5: y/3 = 6.",
        "Multiply by 3: y = 18.",
        "Check: 18/3 + 5 = 6 + 5 = 11 ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve for m: <span class="math">9m + 13 = 67</span>',
      answer: "6",
      hints: [
        "Subtract 13 from both sides: 9m = 54.",
        "Divide by 9: m = 54 ÷ 9.",
        "m = 6."
      ],
      explanation: [
        "Subtract 13: 9m = 54.",
        "Divide by 9: m = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">6x − 7 = 29</span>',
      choices: ["x = 6", "x = 5", "x = 36", "x = 4"],
      answer: "x = 6",
      hints: [
        "Add 7 to both sides: 6x = 36.",
        "Divide by 6.",
        "x = 36 ÷ 6 = 6."
      ],
      explanation: [
        "Add 7: 6x = 36.",
        "Divide by 6: x = 6.",
        "Check: 6(6) − 7 = 36 − 7 = 29 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−4n + 11 = −13</span>. What is n?',
      answer: "6",
      hints: [
        "Subtract 11 from both sides: −4n = −24.",
        "Divide both sides by −4.",
        "n = −24 ÷ (−4) = 6."
      ],
      explanation: [
        "Subtract 11: −4n = −13 − 11 = −24.",
        "Divide by −4: n = 6.",
        "Check: −4(6) + 11 = −24 + 11 = −13 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">x/9 − 4 = 2</span>',
      choices: ["x = 54", "x = 6", "x = 18", "x = 72"],
      answer: "x = 54",
      hints: [
        "Add 4 to both sides: x/9 = 6.",
        "Multiply both sides by 9.",
        "x = 6 × 9 = 54."
      ],
      explanation: [
        "Add 4: x/9 = 6.",
        "Multiply by 9: x = 54.",
        "Check: 54/9 − 4 = 6 − 4 = 2 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">4x − 9 = 19</span>',
      choices: ["x = 7", "x = 10", "x = 2.5", "x = 28"],
      answer: "x = 7",
      hints: [
        "Add 9 to both sides: 4x = 28.",
        "Divide both sides by 4.",
        "x = 28 ÷ 4 = 7."
      ],
      explanation: [
        "Add 9: 4x = 19 + 9 = 28.",
        "Divide by 4: x = 7.",
        "Check: 4(7) − 9 = 28 − 9 = 19 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">x/7 + 3 = 8</span>. What is x?',
      answer: "35",
      hints: [
        "Subtract 3 from both sides: x/7 = 5.",
        "Multiply both sides by 7.",
        "x = 5 × 7 = 35."
      ],
      explanation: [
        "Subtract 3: x/7 = 5.",
        "Multiply by 7: x = 35.",
        "Check: 35/7 + 3 = 5 + 3 = 8 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−5m + 14 = −6</span>',
      choices: ["m = 4", "m = −4", "m = 2", "m = −2"],
      answer: "m = 4",
      hints: [
        "Subtract 14 from both sides: −5m = −20.",
        "Divide both sides by −5.",
        "m = −20 ÷ (−5) = 4."
      ],
      explanation: [
        "Subtract 14: −5m = −6 − 14 = −20.",
        "Divide by −5: m = 4.",
        "Check: −5(4) + 14 = −20 + 14 = −6 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">4x + 9 = 37</span>. What is x?',
      answer: "7",
      hints: [
        "Subtract 9 from both sides: 4x = 28.",
        "Divide both sides by 4.",
        "x = 28 ÷ 4 = 7."
      ],
      explanation: [
        "Subtract 9: 4x = 37 − 9 = 28.",
        "Divide by 4: x = 28/4 = 7.",
        "Check: 4(7) + 9 = 28 + 9 = 37 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">3y − 5 = 16</span>',
      choices: ["y = 7","y = 11","y = 3","y = 21"],
      answer: "y = 7",
      hints: [
        "Add 5 to both sides: 3y = 21.",
        "Divide both sides by 3.",
        "y = 21 ÷ 3 = 7."
      ],
      explanation: [
        "Add 5: 3y = 16 + 5 = 21.",
        "Divide by 3: y = 21/3 = 7.",
        "Check: 3(7) − 5 = 21 − 5 = 16 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">\frac{x}{5} + 3 = 11</span>',
      choices: ["x = 40","x = 8","x = 70","x = 14"],
      answer: "x = 40",
      hints: [
        "Subtract 3 from both sides: x/5 = 8.",
        "Multiply both sides by 5.",
        "x = 8 × 5 = 40."
      ],
      explanation: [
        "Subtract 3: x/5 = 11 − 3 = 8.",
        "Multiply by 5: x = 8 × 5 = 40.",
        "Check: 40/5 + 3 = 8 + 3 = 11 ✓."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Tickets cost $8 each plus a $5 booking fee. The total was $37. How many tickets were bought?',
      choices: ["4 tickets", "5 tickets", "3 tickets", "6 tickets"],
      answer: "4 tickets",
      hints: [
        "Write the equation: 8t + 5 = 37.",
        "Subtract 5: 8t = 32.",
        "Divide by 8: t = 4."
      ],
      explanation: [
        "Equation: 8t + 5 = 37. Subtract 5: 8t = 32.",
        "Divide by 8: t = <strong>4 tickets</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">7x − 11 = 24</span>',
      answer: "5",
      hints: [
        "Add 11 to both sides: 7x = 35.",
        "Divide by 7: x = 5.",
        "Check: 7(5) − 11 = 35 − 11 = 24. ✓"
      ],
      explanation: [
        "Add 11: 7x = 35. Divide by 7: x = <strong>5</strong>.",
        "Verify: 7(5) − 11 = 35 − 11 = 24. ✓"
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">4x + 9 = 33</span>',
      answer: "6",
      hints: [
        "Subtract 9 from both sides: 4x = 24.",
        "Divide by 4: x = 6.",
        "Check: 4(6) + 9 = 24 + 9 = 33. ✓"
      ],
      explanation: [
        "Subtract 9: 4x = 24. Divide by 4: x = <strong>6</strong>.",
        "Verify: 4(6) + 9 = 33. ✓"
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 6: Equations with Parentheses (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">2(x + 3) = 16</span>',
      choices: ["x = 5", "x = 8", "x = 6.5", "x = 10"],
      answer: "x = 5",
      hints: [
        "Distribute: 2x + 6 = 16.",
        "Subtract 6: 2x = 10.",
        "Divide by 2: x = 5."
      ],
      explanation: [
        "Distribute: 2x + 6 = 16. Subtract 6: 2x = 10.",
        "Divide by 2: x = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3(y − 4) = 15</span>. What is y?',
      answer: "9",
      hints: [
        "Distribute: 3y − 12 = 15.",
        "Add 12: 3y = 27.",
        "Divide by 3: y = 9."
      ],
      explanation: [
        "3y − 12 = 15 → 3y = 27.",
        "y = 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">5(2a − 1) = 35</span>',
      choices: ["a = 4", "a = 3", "a = 7", "a = 8"],
      answer: "a = 4",
      hints: [
        "Distribute: 10a − 5 = 35.",
        "Add 5: 10a = 40.",
        "Divide by 10: a = 4."
      ],
      explanation: [
        "10a − 5 = 35 → 10a = 40.",
        "a = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−2(m + 6) = −8</span>. What is m?',
      answer: "-2",
      hints: [
        "Distribute: −2m − 12 = −8.",
        "Add 12: −2m = 4.",
        "Divide by −2: m = −2."
      ],
      explanation: [
        "−2m − 12 = −8 → −2m = 4.",
        "m = −2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">4(3x + 2) = 44</span>',
      choices: ["x = 3", "x = 4", "x = 11", "x = 2"],
      answer: "x = 3",
      hints: [
        "Distribute: 12x + 8 = 44.",
        "Subtract 8: 12x = 36.",
        "Divide by 12: x = 3."
      ],
      explanation: [
        "12x + 8 = 44 → 12x = 36.",
        "x = 3."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">6(k − 2) = 30</span>. What is k?',
      answer: "7",
      hints: [
        "Distribute: 6k − 12 = 30.",
        "Add 12: 6k = 42.",
        "Divide by 6: k = 7."
      ],
      explanation: [
        "6k − 12 = 30 → 6k = 42.",
        "k = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">4(x + 5) = 36</span>',
      choices: ["x = 4", "x = 9", "x = 31", "x = 7"],
      answer: "x = 4",
      hints: [
        "Distribute: 4x + 20 = 36.",
        "Subtract 20: 4x = 16.",
        "Divide by 4: x = 4."
      ],
      explanation: [
        "4x + 20 = 36 → 4x = 16.",
        "x = 4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−3(2p + 1) = −21</span>',
      choices: ["p = 3", "p = −3", "p = 7", "p = 4"],
      answer: "p = 3",
      hints: [
        "Distribute: −6p − 3 = −21.",
        "Add 3: −6p = −18.",
        "Divide by −6: p = 3."
      ],
      explanation: [
        "−6p − 3 = −21 → −6p = −18.",
        "p = 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5(n + 2) = 40</span>. What is n?',
      answer: "6",
      hints: [
        "Distribute: 5n + 10 = 40.",
        "Subtract 10: 5n = 30.",
        "Divide by 5: n = 6."
      ],
      explanation: [
        "5n + 10 = 40 → 5n = 30.",
        "n = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">7(2w − 3) = 35</span>',
      choices: ["w = 4", "w = 5", "w = 2", "w = 7"],
      answer: "w = 4",
      hints: [
        "Distribute: 14w − 21 = 35.",
        "Add 21: 14w = 56.",
        "Divide by 14: w = 4."
      ],
      explanation: [
        "14w − 21 = 35 → 14w = 56.",
        "w = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−4(t − 3) = 20</span>. What is t?',
      answer: "-2",
      hints: [
        "Distribute: −4t + 12 = 20.",
        "Subtract 12: −4t = 8.",
        "Divide by −4: t = −2."
      ],
      explanation: [
        "−4t + 12 = 20 → −4t = 8.",
        "t = −2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">3(4x − 5) = 21</span>',
      choices: ["x = 3", "x = 2", "x = 6", "x = 4"],
      answer: "x = 3",
      hints: [
        "Distribute: 12x − 15 = 21.",
        "Add 15: 12x = 36.",
        "Divide by 12: x = 3."
      ],
      explanation: [
        "12x − 15 = 21 → 12x = 36.",
        "x = 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6(n + 1) = 42</span>. What is n?',
      answer: "6",
      hints: [
        "Distribute: 6n + 6 = 42.",
        "Subtract 6: 6n = 36.",
        "Divide by 6: n = 6."
      ],
      explanation: [
        "6n + 6 = 42 → 6n = 36.",
        "n = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−5(2m + 3) = −35</span>',
      choices: ["m = 2", "m = −2", "m = 7", "m = 4"],
      answer: "m = 2",
      hints: [
        "Distribute: −10m − 15 = −35.",
        "Add 15: −10m = −20.",
        "Divide by −10: m = 2."
      ],
      explanation: [
        "−10m − 15 = −35 → −10m = −20.",
        "m = 2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3(x + 7) = 33</span>. What is x?',
      answer: "4",
      hints: [
        "Distribute: 3x + 21 = 33.",
        "Subtract 21: 3x = 12.",
        "Divide by 3: x = 4."
      ],
      explanation: [
        "3x + 21 = 33 → 3x = 12.",
        "x = 4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−4(2n − 3) = 28</span>',
      choices: ["n = −2", "n = 2", "n = 7", "n = −7"],
      answer: "n = −2",
      hints: [
        "Distribute: −8n + 12 = 28.",
        "Subtract 12: −8n = 16.",
        "Divide by −8: n = −2."
      ],
      explanation: [
        "−8n + 12 = 28 → −8n = 16.",
        "n = −2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">8(k + 1) = 56</span>',
      choices: ["k = 6", "k = 7", "k = 8", "k = 5"],
      answer: "k = 6",
      hints: [
        "Distribute: 8k + 8 = 56.",
        "Subtract 8: 8k = 48.",
        "Divide by 8: k = 6."
      ],
      explanation: [
        "8k + 8 = 56 → 8k = 48.",
        "k = 6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">−3(n − 5) = 27</span>. What is n?',
      answer: "-4",
      hints: [
        "Distribute: −3n + 15 = 27.",
        "Subtract 15: −3n = 12.",
        "Divide by −3: n = −4."
      ],
      explanation: [
        "−3n + 15 = 27 → −3n = 12.",
        "n = −4.",
        "Check: −3(−4 − 5) = −3(−9) = 27 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">7(x + 3) = 49</span>',
      choices: ["x = 4", "x = 7", "x = 46", "x = 10"],
      answer: "x = 4",
      hints: [
        "Distribute: 7x + 21 = 49.",
        "Subtract 21: 7x = 28.",
        "Divide by 7: x = 4."
      ],
      explanation: [
        "7x + 21 = 49 → 7x = 28.",
        "x = 4.",
        "Check: 7(4 + 3) = 7(7) = 49 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">5(3m − 2) = 50</span>',
      choices: ["m = 4", "m = 3", "m = 10", "m = 2"],
      answer: "m = 4",
      hints: [
        "Distribute: 15m − 10 = 50.",
        "Add 10: 15m = 60.",
        "Divide by 15: m = 4."
      ],
      explanation: [
        "15m − 10 = 50 → 15m = 60.",
        "m = 4.",
        "Check: 5(3·4 − 2) = 5(10) = 50 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">4(x + 6) = 40</span>. What is x?',
      answer: "4",
      hints: [
        "Distribute: 4x + 24 = 40.",
        "Subtract 24: 4x = 16.",
        "Divide by 4: x = 4."
      ],
      explanation: [
        "4x + 24 = 40 → 4x = 16.",
        "x = 4.",
        "Check: 4(4 + 6) = 4(10) = 40 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−6(n + 2) = −30</span>',
      choices: ["n = 3","n = −3","n = 5","n = −7"],
      answer: "n = 3",
      hints: [
        "Distribute: −6n − 12 = −30.",
        "Add 12: −6n = −18.",
        "Divide by −6: n = 3."
      ],
      explanation: [
        "−6n − 12 = −30 → −6n = −18.",
        "n = 3.",
        "Check: −6(3 + 2) = −6(5) = −30 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">9(2k − 1) = 63</span>',
      choices: ["k = 4","k = 3","k = 7","k = 8"],
      answer: "k = 4",
      hints: [
        "Distribute: 18k − 9 = 63.",
        "Add 9: 18k = 72.",
        "Divide by 18: k = 4."
      ],
      explanation: [
        "18k − 9 = 63 → 18k = 72.",
        "k = 4.",
        "Check: 9(2·4 − 1) = 9(7) = 63 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve for x: <span class="math">3(x + 4) = 27</span>',
      choices: ["x = 5", "x = 9", "x = 7", "x = 3"],
      answer: "x = 5",
      hints: [
        "Distribute: 3x + 12 = 27.",
        "Subtract 12: 3x = 15.",
        "Divide by 3: x = 5."
      ],
      explanation: [
        "Distribute: 3(x + 4) = 3x + 12 = 27.",
        "Subtract 12: 3x = 15. Divide by 3: x = 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve for y: <span class="math">2(y - 3) + 4 = 16</span>',
      answer: "9",
      hints: [
        "Distribute: 2y - 6 + 4 = 16.",
        "Combine: 2y - 2 = 16.",
        "Add 2: 2y = 18. Divide by 2: y = 9."
      ],
      explanation: [
        "Distribute: 2(y - 3) = 2y - 6. So 2y - 6 + 4 = 16.",
        "Simplify: 2y - 2 = 16. Add 2: 2y = 18. y = 9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve for n: <span class="math">5(n + 2) - 3n = 22</span>',
      answer: "6",
      hints: [
        "Distribute: 5n + 10 - 3n = 22.",
        "Combine: 2n + 10 = 22.",
        "Subtract 10: 2n = 12. Divide by 2: n = 6."
      ],
      explanation: [
        "Distribute: 5n + 10 - 3n = 22. Combine: 2n + 10 = 22.",
        "Subtract 10: 2n = 12. Divide by 2: n = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">6(2x − 5) = 42</span>',
      choices: ["x = 6", "x = 4", "x = 12", "x = 3"],
      answer: "x = 6",
      hints: [
        "Distribute: 12x − 30 = 42.",
        "Add 30: 12x = 72.",
        "Divide by 12: x = 6."
      ],
      explanation: [
        "12x − 30 = 42 → 12x = 72.",
        "x = 6.",
        "Check: 6(2·6 − 5) = 6(7) = 42 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5(x + 3) = 45</span>. What is x?',
      answer: "6",
      hints: [
        "Distribute: 5x + 15 = 45.",
        "Subtract 15: 5x = 30.",
        "Divide by 5: x = 6."
      ],
      explanation: [
        "5x + 15 = 45 → 5x = 30.",
        "x = 6.",
        "Check: 5(6 + 3) = 5(9) = 45 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−2(3n + 4) = −20</span>',
      choices: ["n = 2", "n = −2", "n = 4", "n = 6"],
      answer: "n = 2",
      hints: [
        "Distribute: −6n − 8 = −20.",
        "Add 8: −6n = −12.",
        "Divide by −6: n = 2."
      ],
      explanation: [
        "−6n − 8 = −20 → −6n = −12.",
        "n = 2.",
        "Check: −2(3·2 + 4) = −2(10) = −20 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">4(x + 2) = 28</span>. What is x?',
      answer: "5",
      hints: [
        "Distribute: 4x + 8 = 28.",
        "Subtract 8: 4x = 20.",
        "Divide by 4: x = 5."
      ],
      explanation: [
        "4x + 8 = 28 → 4x = 20.",
        "x = 5.",
        "Check: 4(5 + 2) = 4(7) = 28 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">3(2n − 5) = 21</span>',
      choices: ["n = 6", "n = 3", "n = 12", "n = 4"],
      answer: "n = 6",
      hints: [
        "Distribute: 6n − 15 = 21.",
        "Add 15: 6n = 36.",
        "Divide by 6: n = 6."
      ],
      explanation: [
        "6n − 15 = 21 → 6n = 36.",
        "n = 6.",
        "Check: 3(2·6 − 5) = 3(7) = 21 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−3(x + 7) = −27</span>',
      choices: ["x = 2", "x = −2", "x = 16", "x = −16"],
      answer: "x = 2",
      hints: [
        "Distribute: −3x − 21 = −27.",
        "Add 21: −3x = −6.",
        "Divide by −3: x = 2."
      ],
      explanation: [
        "−3x − 21 = −27 → −3x = −6.",
        "x = 2.",
        "Check: −3(2 + 7) = −3(9) = −27 ✓."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">5(x − 2) = 20</span>',
      choices: ["x = 6","x = 4","x = 22","x = 2"],
      answer: "x = 6",
      hints: [
        "Distribute: 5x − 10 = 20.",
        "Add 10 to both sides: 5x = 30.",
        "Divide by 5: x = 6."
      ],
      explanation: [
        "Distribute: 5(x − 2) = 5x − 10 = 20.",
        "Add 10: 5x = 30. Divide by 5: x = 6.",
        "Check: 5(6 − 2) = 5(4) = 20 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3(y + 4) = 27</span>. What is y?',
      answer: "5",
      hints: [
        "Distribute: 3y + 12 = 27.",
        "Subtract 12 from both sides: 3y = 15.",
        "Divide by 3: y = 5."
      ],
      explanation: [
        "Distribute: 3(y + 4) = 3y + 12 = 27.",
        "Subtract 12: 3y = 15. Divide by 3: y = 5.",
        "Check: 3(5 + 4) = 3(9) = 27 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">2(3x + 1) = 26</span>',
      choices: ["x = 4","x = 8","x = 13","x = 3"],
      answer: "x = 4",
      hints: [
        "Distribute: 6x + 2 = 26.",
        "Subtract 2 from both sides: 6x = 24.",
        "Divide by 6: x = 4."
      ],
      explanation: [
        "Distribute: 2(3x + 1) = 6x + 2 = 26.",
        "Subtract 2: 6x = 24. Divide by 6: x = 4.",
        "Check: 2(3·4 + 1) = 2(13) = 26 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">3(x − 4) = 2(x + 1)</span>',
      answer: "14",
      hints: [
        "Distribute both sides: 3x − 12 = 2x + 2.",
        "Subtract 2x: x − 12 = 2.",
        "Add 12: x = 14."
      ],
      explanation: [
        "Distribute: 3x − 12 = 2x + 2.",
        "Subtract 2x: x − 12 = 2. Add 12: x = <strong>14</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">5(y + 2) = 35</span>',
      choices: ["y = 5", "y = 7", "y = 3", "y = 9"],
      answer: "y = 5",
      hints: [
        "Distribute: 5y + 10 = 35.",
        "Subtract 10: 5y = 25.",
        "Divide by 5: y = 5."
      ],
      explanation: [
        "Distribute: 5y + 10 = 35. Subtract 10: 5y = 25.",
        "Divide by 5: y = <strong>5</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">2(3x + 1) = 20</span>',
      answer: "3",
      hints: [
        "Distribute: 6x + 2 = 20.",
        "Subtract 2: 6x = 18.",
        "Divide by 6: x = 3."
      ],
      explanation: [
        "Distribute: 6x + 2 = 20. Subtract 2: 6x = 18.",
        "Divide by 6: x = <strong>3</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 7: Variable on Both Sides (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">5x − 3 = 2x + 9</span>',
      choices: ["x = 4", "x = 6", "x = 3", "x = 2"],
      answer: "x = 4",
      hints: [
        "Subtract 2x from both sides: 3x − 3 = 9.",
        "Add 3: 3x = 12.",
        "Divide by 3: x = 4."
      ],
      explanation: [
        "5x − 2x − 3 = 9 → 3x − 3 = 9.",
        "3x = 12 → x = 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">7y + 2 = 3y + 22</span>. What is y?',
      answer: "5",
      hints: [
        "Subtract 3y from both sides: 4y + 2 = 22.",
        "Subtract 2: 4y = 20.",
        "Divide by 4: y = 5."
      ],
      explanation: [
        "7y − 3y + 2 = 22 → 4y + 2 = 22.",
        "4y = 20 → y = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">8n − 5 = 3n + 20</span>',
      choices: ["n = 5", "n = 3", "n = 25", "n = 15"],
      answer: "n = 5",
      hints: [
        "Subtract 3n from both sides: 5n − 5 = 20.",
        "Add 5: 5n = 25.",
        "Divide by 5: n = 5."
      ],
      explanation: [
        "8n − 3n − 5 = 20 → 5n − 5 = 20.",
        "5n = 25 → n = 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">6a + 1 = 2a + 25</span>. What is a?',
      answer: "6",
      hints: [
        "Subtract 2a from both sides: 4a + 1 = 25.",
        "Subtract 1: 4a = 24.",
        "Divide by 4: a = 6."
      ],
      explanation: [
        "6a − 2a + 1 = 25 → 4a + 1 = 25.",
        "4a = 24 → a = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">9w − 14 = 4w + 6</span>',
      choices: ["w = 4", "w = 5", "w = 2", "w = 20"],
      answer: "w = 4",
      hints: [
        "Subtract 4w from both sides: 5w − 14 = 6.",
        "Add 14: 5w = 20.",
        "Divide by 5: w = 4."
      ],
      explanation: [
        "9w − 4w − 14 = 6 → 5w − 14 = 6.",
        "5w = 20 → w = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">10x − 7 = 6x + 13</span>. What is x?',
      answer: "5",
      hints: [
        "Subtract 6x from both sides: 4x − 7 = 13.",
        "Add 7: 4x = 20.",
        "Divide by 4: x = 5."
      ],
      explanation: [
        "10x − 6x − 7 = 13 → 4x − 7 = 13.",
        "4x = 20 → x = 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">3m + 8 = m + 20</span>',
      choices: ["m = 6", "m = 14", "m = 4", "m = 28"],
      answer: "m = 6",
      hints: [
        "Subtract m from both sides: 2m + 8 = 20.",
        "Subtract 8: 2m = 12.",
        "Divide by 2: m = 6."
      ],
      explanation: [
        "3m − m + 8 = 20 → 2m + 8 = 20.",
        "2m = 12 → m = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">11t − 9 = 5t + 21</span>',
      choices: ["t = 5", "t = 2", "t = 6", "t = 30"],
      answer: "t = 5",
      hints: [
        "Subtract 5t from both sides: 6t − 9 = 21.",
        "Add 9: 6t = 30.",
        "Divide by 6: t = 5."
      ],
      explanation: [
        "11t − 5t − 9 = 21 → 6t − 9 = 21.",
        "6t = 30 → t = 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">4p + 10 = p + 31</span>. What is p?',
      answer: "7",
      hints: [
        "Subtract p from both sides: 3p + 10 = 31.",
        "Subtract 10: 3p = 21.",
        "Divide by 3: p = 7."
      ],
      explanation: [
        "4p − p + 10 = 31 → 3p + 10 = 31.",
        "3p = 21 → p = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">6k − 4 = 2k + 12</span>',
      choices: ["k = 4", "k = 8", "k = 2", "k = 16"],
      answer: "k = 4",
      hints: [
        "Subtract 2k from both sides: 4k − 4 = 12.",
        "Add 4: 4k = 16.",
        "Divide by 4: k = 4."
      ],
      explanation: [
        "6k − 2k − 4 = 12 → 4k − 4 = 12.",
        "4k = 16 → k = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">12r − 8 = 7r + 17</span>. What is r?',
      answer: "5",
      hints: [
        "Subtract 7r from both sides: 5r − 8 = 17.",
        "Add 8: 5r = 25.",
        "Divide by 5: r = 5."
      ],
      explanation: [
        "12r − 7r − 8 = 17 → 5r − 8 = 17.",
        "5r = 25 → r = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">7x + 3 = 3x + 27</span>',
      choices: ["x = 6", "x = 3", "x = 8", "x = 30"],
      answer: "x = 6",
      hints: [
        "Subtract 3x from both sides: 4x + 3 = 27.",
        "Subtract 3: 4x = 24.",
        "Divide by 4: x = 6."
      ],
      explanation: [
        "7x − 3x + 3 = 27 → 4x + 3 = 27.",
        "4x = 24 → x = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5m + 4 = 2m + 19</span>. What is m?',
      answer: "5",
      hints: [
        "Subtract 2m from both sides: 3m + 4 = 19.",
        "Subtract 4: 3m = 15.",
        "Divide by 3: m = 5."
      ],
      explanation: [
        "5m − 2m + 4 = 19 → 3m + 4 = 19.",
        "3m = 15 → m = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">8w − 11 = 5w + 7</span>',
      choices: ["w = 6", "w = 4", "w = 3", "w = 18"],
      answer: "w = 6",
      hints: [
        "Subtract 5w from both sides: 3w − 11 = 7.",
        "Add 11: 3w = 18.",
        "Divide by 3: w = 6."
      ],
      explanation: [
        "8w − 5w − 11 = 7 → 3w − 11 = 7.",
        "3w = 18 → w = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">4x + 5 = x + 23</span>. What is x?',
      answer: "6",
      hints: [
        "Subtract x from both sides: 3x + 5 = 23.",
        "Subtract 5: 3x = 18.",
        "Divide by 3: x = 6."
      ],
      explanation: [
        "4x − x + 5 = 23 → 3x + 5 = 23.",
        "3x = 18 → x = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">9y − 2 = 4y + 28</span>',
      choices: ["y = 6", "y = 5", "y = 4", "y = 30"],
      answer: "y = 6",
      hints: [
        "Subtract 4y from both sides: 5y − 2 = 28.",
        "Add 2: 5y = 30.",
        "Divide by 5: y = 6."
      ],
      explanation: [
        "9y − 4y − 2 = 28 → 5y − 2 = 28.",
        "5y = 30 → y = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">6n + 7 = 2n + 31</span>',
      choices: ["n = 6", "n = 8", "n = 4", "n = 38"],
      answer: "n = 6",
      hints: [
        "Subtract 2n from both sides: 4n + 7 = 31.",
        "Subtract 7: 4n = 24.",
        "Divide by 4: n = 6."
      ],
      explanation: [
        "6n − 2n + 7 = 31 → 4n + 7 = 31.",
        "4n = 24 → n = 6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">8a − 3 = 5a + 18</span>. What is a?',
      answer: "7",
      hints: [
        "Subtract 5a from both sides: 3a − 3 = 18.",
        "Add 3: 3a = 21.",
        "Divide by 3: a = 7."
      ],
      explanation: [
        "8a − 5a − 3 = 18 → 3a − 3 = 18.",
        "3a = 21 → a = 7.",
        "Check: 8(7) − 3 = 53, 5(7) + 18 = 53 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">7p + 2 = 3p + 26</span>',
      choices: ["p = 6", "p = 4", "p = 7", "p = 28"],
      answer: "p = 6",
      hints: [
        "Subtract 3p from both sides: 4p + 2 = 26.",
        "Subtract 2: 4p = 24.",
        "Divide by 4: p = 6."
      ],
      explanation: [
        "7p − 3p + 2 = 26 → 4p + 2 = 26.",
        "4p = 24 → p = 6.",
        "Check: 7(6) + 2 = 44, 3(6) + 26 = 44 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">10t − 6 = 4t + 24</span>',
      choices: ["t = 5", "t = 3", "t = 6", "t = 30"],
      answer: "t = 5",
      hints: [
        "Subtract 4t from both sides: 6t − 6 = 24.",
        "Add 6: 6t = 30.",
        "Divide by 6: t = 5."
      ],
      explanation: [
        "10t − 4t − 6 = 24 → 6t − 6 = 24.",
        "6t = 30 → t = 5.",
        "Check: 10(5) − 6 = 44, 4(5) + 24 = 44 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6x + 3 = 2x + 27</span>. What is x?',
      answer: "6",
      hints: [
        "Subtract 2x from both sides: 4x + 3 = 27.",
        "Subtract 3: 4x = 24.",
        "Divide by 4: x = 6."
      ],
      explanation: [
        "6x − 2x + 3 = 27 → 4x + 3 = 27.",
        "4x = 24 → x = 6.",
        "Check: 6(6) + 3 = 39, 2(6) + 27 = 39 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">11y − 5 = 6y + 30</span>',
      choices: ["y = 7","y = 5","y = 35","y = 6"],
      answer: "y = 7",
      hints: [
        "Subtract 6y from both sides: 5y − 5 = 30.",
        "Add 5: 5y = 35.",
        "Divide by 5: y = 7."
      ],
      explanation: [
        "11y − 6y − 5 = 30 → 5y − 5 = 30.",
        "5y = 35 → y = 7.",
        "Check: 11(7) − 5 = 72, 6(7) + 30 = 72 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">5n + 9 = 2n + 30</span>',
      choices: ["n = 7","n = 3","n = 13","n = 39"],
      answer: "n = 7",
      hints: [
        "Subtract 2n from both sides: 3n + 9 = 30.",
        "Subtract 9: 3n = 21.",
        "Divide by 3: n = 7."
      ],
      explanation: [
        "5n − 2n + 9 = 30 → 3n + 9 = 30.",
        "3n = 21 → n = 7.",
        "Check: 5(7) + 9 = 44, 2(7) + 30 = 44 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve for x: <span class="math">7x + 3 = 4x + 18</span>',
      answer: "5",
      hints: [
        "Move variables to one side: subtract 4x from both sides.",
        "3x + 3 = 18.",
        "Subtract 3: 3x = 15. Divide by 3: x = 5."
      ],
      explanation: [
        "Subtract 4x: 3x + 3 = 18.",
        "Subtract 3: 3x = 15. Divide by 3: x = 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve for y: <span class="math">5y - 8 = 2y + 13</span>',
      choices: ["y = 7", "y = 5", "y = 3", "y = 21"],
      answer: "y = 7",
      hints: [
        "Subtract 2y from both sides: 3y - 8 = 13.",
        "Add 8 to both sides: 3y = 21.",
        "Divide by 3: y = 7."
      ],
      explanation: [
        "Subtract 2y: 3y - 8 = 13.",
        "Add 8: 3y = 21. Divide by 3: y = 7."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve for n: <span class="math">8n - 5 = 3n + 30</span>',
      answer: "7",
      hints: [
        "Subtract 3n from both sides: 5n - 5 = 30.",
        "Add 5 to both sides: 5n = 35.",
        "Divide by 5: n = 7."
      ],
      explanation: [
        "Subtract 3n: 5n - 5 = 30.",
        "Add 5: 5n = 35. Divide by 5: n = 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">9x − 4 = 5x + 20</span>',
      choices: ["x = 6", "x = 4", "x = 8", "x = 24"],
      answer: "x = 6",
      hints: [
        "Subtract 5x from both sides: 4x − 4 = 20.",
        "Add 4: 4x = 24.",
        "Divide by 4: x = 6."
      ],
      explanation: [
        "9x − 5x − 4 = 20 → 4x − 4 = 20.",
        "4x = 24 → x = 6.",
        "Check: 9(6) − 4 = 50, 5(6) + 20 = 50 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">8m + 5 = 3m + 35</span>. What is m?',
      answer: "6",
      hints: [
        "Subtract 3m from both sides: 5m + 5 = 35.",
        "Subtract 5: 5m = 30.",
        "Divide by 5: m = 6."
      ],
      explanation: [
        "8m − 3m + 5 = 35 → 5m + 5 = 35.",
        "5m = 30 → m = 6.",
        "Check: 8(6) + 5 = 53, 3(6) + 35 = 53 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">12y − 10 = 7y + 25</span>',
      choices: ["y = 7", "y = 3", "y = 5", "y = 35"],
      answer: "y = 7",
      hints: [
        "Subtract 7y from both sides: 5y − 10 = 25.",
        "Add 10: 5y = 35.",
        "Divide by 5: y = 7."
      ],
      explanation: [
        "12y − 7y − 10 = 25 → 5y − 10 = 25.",
        "5y = 35 → y = 7.",
        "Check: 12(7) − 10 = 74, 7(7) + 25 = 74 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6x + 7 = 4x + 19</span>. What is x?',
      answer: "6",
      hints: [
        "Subtract 4x from both sides: 2x + 7 = 19.",
        "Subtract 7: 2x = 12.",
        "Divide by 2: x = 6."
      ],
      explanation: [
        "6x − 4x + 7 = 19 → 2x + 7 = 19.",
        "2x = 12 → x = 6.",
        "Check: 6(6) + 7 = 43, 4(6) + 19 = 43 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">10y − 8 = 4y + 22</span>',
      choices: ["y = 5", "y = 3", "y = 7", "y = 30"],
      answer: "y = 5",
      hints: [
        "Subtract 4y from both sides: 6y − 8 = 22.",
        "Add 8: 6y = 30.",
        "Divide by 6: y = 5."
      ],
      explanation: [
        "10y − 4y − 8 = 22 → 6y − 8 = 22.",
        "6y = 30 → y = 5.",
        "Check: 10(5) − 8 = 42, 4(5) + 22 = 42 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">11n + 3 = 5n + 39</span>',
      choices: ["n = 6", "n = 7", "n = 4", "n = 42"],
      answer: "n = 6",
      hints: [
        "Subtract 5n from both sides: 6n + 3 = 39.",
        "Subtract 3: 6n = 36.",
        "Divide by 6: n = 6."
      ],
      explanation: [
        "11n − 5n + 3 = 39 → 6n + 3 = 39.",
        "6n = 36 → n = 6.",
        "Check: 11(6) + 3 = 69, 5(6) + 39 = 69 ✓."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">7x + 3 = 4x + 18</span>',
      choices: ["x = 5","x = 3","x = 7","x = 21"],
      answer: "x = 5",
      hints: [
        "Subtract 4x from both sides: 3x + 3 = 18.",
        "Subtract 3 from both sides: 3x = 15.",
        "Divide by 3: x = 5."
      ],
      explanation: [
        "Subtract 4x: 3x + 3 = 18.",
        "Subtract 3: 3x = 15. Divide by 3: x = 5.",
        "Check: 7(5) + 3 = 38, 4(5) + 18 = 38 ✓."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">9x − 5 = 6x + 10</span>. What is x?',
      answer: "5",
      hints: [
        "Subtract 6x from both sides: 3x − 5 = 10.",
        "Add 5 to both sides: 3x = 15.",
        "Divide by 3: x = 5."
      ],
      explanation: [
        "Subtract 6x: 3x − 5 = 10.",
        "Add 5: 3x = 15. Divide by 3: x = 5.",
        "Check: 9(5) − 5 = 40, 6(5) + 10 = 40 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">5x + 8 = 2x + 29</span>',
      choices: ["x = 7","x = 3","x = 37","x = 21"],
      answer: "x = 7",
      hints: [
        "Subtract 2x from both sides: 3x + 8 = 29.",
        "Subtract 8 from both sides: 3x = 21.",
        "Divide by 3: x = 7."
      ],
      explanation: [
        "Subtract 2x: 3x + 8 = 29.",
        "Subtract 8: 3x = 21. Divide by 3: x = 7.",
        "Check: 5(7) + 8 = 43, 2(7) + 29 = 43 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">6x − 5 = 3x + 13</span>',
      answer: "6",
      hints: [
        "Subtract 3x from both sides: 3x − 5 = 13.",
        "Add 5 to both sides: 3x = 18.",
        "Divide by 3: x = 6."
      ],
      explanation: [
        "Subtract 3x: 3x − 5 = 13. Add 5: 3x = 18.",
        "Divide by 3: x = <strong>6</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">7x + 2 = 4x + 20</span>',
      choices: ["x = 6", "x = 2", "x = 4", "x = 8"],
      answer: "x = 6",
      hints: [
        "Subtract 4x from both sides: 3x + 2 = 20.",
        "Subtract 2: 3x = 18.",
        "Divide by 3: x = 6."
      ],
      explanation: [
        "Subtract 4x: 3x + 2 = 20. Subtract 2: 3x = 18.",
        "Divide by 3: x = <strong>6</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">8x − 9 = 5x + 12</span>',
      answer: "7",
      hints: [
        "Subtract 5x from both sides: 3x − 9 = 12.",
        "Add 9 to both sides: 3x = 21.",
        "Divide by 3: x = 7."
      ],
      explanation: [
        "Subtract 5x: 3x − 9 = 12. Add 9: 3x = 21.",
        "Divide by 3: x = <strong>7</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 8: Writing Equations (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "A number plus 8 equals 20"?',
      choices: ["x + 8 = 20", "8x = 20", "x − 8 = 20", "x/8 = 20"],
      answer: "x + 8 = 20",
      hints: [
        '"Plus" means addition.',
        '"A number" is the unknown — call it x.',
        "So x + 8 = 20."
      ],
      explanation: [
        '"A number plus 8" translates to x + 8.',
        '"Equals 20" gives x + 8 = 20.'
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Translate and solve: "Three times a number is 36." What is the number?',
      answer: "12",
      hints: [
        '"Three times a number" means 3x.',
        "The equation is 3x = 36.",
        "Divide by 3: x = 12."
      ],
      explanation: [
        "Equation: 3x = 36.",
        "x = 36 ÷ 3 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation represents: "Twice a number decreased by 5 is 11"?',
      choices: ["2x − 5 = 11", "2x + 5 = 11", "2(x − 5) = 11", "x − 10 = 11"],
      answer: "2x − 5 = 11",
      hints: [
        '"Twice a number" means 2x.',
        '"Decreased by 5" means subtract 5.',
        "So: 2x − 5 = 11."
      ],
      explanation: [
        '"Twice a number" = 2x, "decreased by 5" = − 5.',
        "Equation: 2x − 5 = 11."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "A number divided by 4, plus 3, equals 10." What is the number?',
      answer: "28",
      hints: [
        "Equation: x/4 + 3 = 10.",
        "Subtract 3: x/4 = 7.",
        "Multiply by 4: x = 28."
      ],
      explanation: [
        "x/4 + 3 = 10 → x/4 = 7.",
        "x = 28."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which equation matches: "Five less than a number is 13"?',
      choices: ["x − 5 = 13", "5 − x = 13", "x + 5 = 13", "5x = 13"],
      answer: "x − 5 = 13",
      hints: [
        '"Five less than a number" means start with the number and subtract 5.',
        "So it is x − 5, not 5 − x.",
        "x − 5 = 13."
      ],
      explanation: [
        '"Five less than a number" = x − 5.',
        "Equation: x − 5 = 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation represents: "Four times a number increased by 7 is 39"?',
      choices: ["4x + 7 = 39", "4(x + 7) = 39", "4x − 7 = 39", "7x + 4 = 39"],
      answer: "4x + 7 = 39",
      hints: [
        '"Four times a number" means 4x.',
        '"Increased by 7" means add 7.',
        "So: 4x + 7 = 39."
      ],
      explanation: [
        '"Four times a number" = 4x, "increased by 7" = + 7.',
        "Equation: 4x + 7 = 39."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Translate and solve: "A number minus 9 equals 16." What is the number?',
      answer: "25",
      hints: [
        "The equation is x − 9 = 16.",
        "Add 9 to both sides.",
        "x = 16 + 9 = 25."
      ],
      explanation: [
        "Equation: x − 9 = 16.",
        "x = 16 + 9 = 25."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation matches: "Half a number plus 6 equals 15"?',
      choices: ["x/2 + 6 = 15", "2x + 6 = 15", "x/2 − 6 = 15", "6x + 2 = 15"],
      answer: "x/2 + 6 = 15",
      hints: [
        '"Half a number" means x/2 or x ÷ 2.',
        '"Plus 6" means add 6.',
        "So: x/2 + 6 = 15."
      ],
      explanation: [
        '"Half a number" = x/2, "plus 6" = + 6.',
        "Equation: x/2 + 6 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "Five times a number decreased by 8 is 27." What is the number?',
      answer: "7",
      hints: [
        "The equation is 5x − 8 = 27.",
        "Add 8 to both sides: 5x = 35.",
        "Divide by 5: x = 7."
      ],
      explanation: [
        "Equation: 5x − 8 = 27 → 5x = 35.",
        "x = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "Twelve more than a number is 31"?',
      choices: ["x + 12 = 31", "12x = 31", "x − 12 = 31", "x/12 = 31"],
      answer: "x + 12 = 31",
      hints: [
        '"Twelve more than" means add 12.',
        '"A number" is the unknown — call it x.',
        "So x + 12 = 31."
      ],
      explanation: [
        '"Twelve more than a number" translates to x + 12.',
        '"Is 31" gives x + 12 = 31.'
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation matches: "A number divided by 3, minus 4, equals 2"?',
      choices: ["x/3 − 4 = 2", "3x − 4 = 2", "x/3 + 4 = 2", "(x − 4)/3 = 2"],
      answer: "x/3 − 4 = 2",
      hints: [
        '"A number divided by 3" means x/3.',
        '"Minus 4" means subtract 4.',
        "So: x/3 − 4 = 2."
      ],
      explanation: [
        '"A number divided by 3" = x/3, "minus 4" = − 4.',
        "Equation: x/3 − 4 = 2."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "Six times a number increased by 4 is 46." What is the number?',
      answer: "7",
      hints: [
        "The equation is 6x + 4 = 46.",
        "Subtract 4 from both sides: 6x = 42.",
        "Divide by 6: x = 7."
      ],
      explanation: [
        "Equation: 6x + 4 = 46 → 6x = 42.",
        "x = 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "Seven less than twice a number is 9"?',
      choices: ["2x − 7 = 9", "7 − 2x = 9", "2x + 7 = 9", "2(x − 7) = 9"],
      answer: "2x − 7 = 9",
      hints: [
        '"Twice a number" means 2x.',
        '"Seven less than" means subtract 7 from that.',
        "So: 2x − 7 = 9."
      ],
      explanation: [
        '"Twice a number" = 2x, "seven less than" = − 7.',
        "Equation: 2x − 7 = 9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "A number divided by 5, plus 6, equals 11." What is the number?',
      answer: "25",
      hints: [
        "Equation: x/5 + 6 = 11.",
        "Subtract 6: x/5 = 5.",
        "Multiply by 5: x = 25."
      ],
      explanation: [
        "x/5 + 6 = 11 → x/5 = 5.",
        "x = 25."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "A number increased by 15 is 42"?',
      choices: ["x + 15 = 42", "15x = 42", "x − 15 = 42", "x/15 = 42"],
      answer: "x + 15 = 42",
      hints: [
        '"Increased by" means addition.',
        '"A number" is the unknown — call it x.',
        "So x + 15 = 42."
      ],
      explanation: [
        '"A number increased by 15" translates to x + 15.',
        '"Is 42" gives x + 15 = 42.'
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "Eight times a number minus 10 is 38." What is the number?',
      answer: "6",
      hints: [
        "The equation is 8x − 10 = 38.",
        "Add 10 to both sides: 8x = 48.",
        "Divide by 8: x = 6."
      ],
      explanation: [
        "Equation: 8x − 10 = 38 → 8x = 48.",
        "x = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation matches: "Three times a number plus 11 equals 35"?',
      choices: ["3x + 11 = 35", "3(x + 11) = 35", "3x − 11 = 35", "11x + 3 = 35"],
      answer: "3x + 11 = 35",
      hints: [
        '"Three times a number" means 3x.',
        '"Plus 11" means add 11.',
        "So: 3x + 11 = 35."
      ],
      explanation: [
        '"Three times a number" = 3x, "plus 11" = + 11.',
        "Equation: 3x + 11 = 35."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Translate and solve: "A number plus 14 equals 39." What is the number?',
      answer: "25",
      hints: [
        "The equation is x + 14 = 39.",
        "Subtract 14 from both sides.",
        "x = 39 − 14 = 25."
      ],
      explanation: [
        "Equation: x + 14 = 39.",
        "x = 39 − 14 = 25.",
        "The number is 25."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation represents: "Nine less than four times a number is 23"?',
      choices: ["4x − 9 = 23", "9 − 4x = 23", "4x + 9 = 23", "4(x − 9) = 23"],
      answer: "4x − 9 = 23",
      hints: [
        '"Four times a number" means 4x.',
        '"Nine less than" means subtract 9 from that.',
        "So: 4x − 9 = 23."
      ],
      explanation: [
        '"Four times a number" = 4x, "nine less than" = − 9.',
        "Equation: 4x − 9 = 23.",
        'The key is "less than" subtracts from the expression.'
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation represents: "A number divided by 6, plus 5, equals 9"?',
      choices: ["x/6 + 5 = 9", "6x + 5 = 9", "x/6 − 5 = 9", "(x + 5)/6 = 9"],
      answer: "x/6 + 5 = 9",
      hints: [
        '"A number divided by 6" means x/6.',
        '"Plus 5" means add 5.',
        "So: x/6 + 5 = 9."
      ],
      explanation: [
        '"A number divided by 6" = x/6, "plus 5" = + 5.',
        "Equation: x/6 + 5 = 9.",
        "Solving: x/6 = 4, so x = 24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "Ten more than three times a number is 37"?',
      choices: ["3x + 10 = 37","10x + 3 = 37","3(x + 10) = 37","x + 30 = 37"],
      answer: "3x + 10 = 37",
      hints: [
        "\"Three times a number\" means 3x.",
        "\"Ten more than\" means add 10.",
        "So: 3x + 10 = 37."
      ],
      explanation: [
        "\"Three times a number\" = 3x, \"ten more than\" = + 10.",
        "Equation: 3x + 10 = 37.",
        "Solving: 3x = 27, x = 9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "Seven times a number minus 11 is 31." What is the number?',
      answer: "6",
      hints: [
        "The equation is 7x − 11 = 31.",
        "Add 11 to both sides: 7x = 42.",
        "Divide by 7: x = 6."
      ],
      explanation: [
        "Equation: 7x − 11 = 31 → 7x = 42.",
        "x = 6.",
        "Check: 7(6) − 11 = 42 − 11 = 31 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation matches: "A number divided by 8, minus 3, equals 4"?',
      choices: ["x/8 − 3 = 4","8x − 3 = 4","x/8 + 3 = 4","(x − 3)/8 = 4"],
      answer: "x/8 − 3 = 4",
      hints: [
        "\"A number divided by 8\" means x/8.",
        "\"Minus 3\" means subtract 3.",
        "So: x/8 − 3 = 4."
      ],
      explanation: [
        "\"A number divided by 8\" = x/8, \"minus 3\" = − 3.",
        "Equation: x/8 − 3 = 4.",
        "Solving: x/8 = 7, so x = 56."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A number tripled and then decreased by 8 equals 25. Which equation represents this?',
      choices: ["3x - 8 = 25", "3(x - 8) = 25", "x/3 - 8 = 25", "3x + 8 = 25"],
      answer: "3x - 8 = 25",
      hints: [
        "A number tripled means 3x.",
        "Decreased by 8 means subtract 8.",
        "Equals 25 gives us 3x - 8 = 25."
      ],
      explanation: [
        "Tripled: 3x. Decreased by 8: 3x - 8.",
        "Equals 25: 3x - 8 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The sum of two consecutive even numbers is 54. What is the smaller number?',
      answer: "26",
      hints: [
        "Let the smaller even number be x. The next even number is x + 2.",
        "x + (x + 2) = 54.",
        "2x + 2 = 54. 2x = 52. x = 26."
      ],
      explanation: [
        "Let x = smaller even number. Then x + (x + 2) = 54.",
        "2x + 2 = 54. 2x = 52. x = 26.",
        "The two numbers are 26 and 28."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Maria has 3 times as many stickers as Ben. Together they have 48 stickers. How many does Ben have?',
      choices: ["12", "16", "36", "24"],
      answer: "12",
      hints: [
        "Let Ben have x stickers. Maria has 3x stickers.",
        "x + 3x = 48.",
        "4x = 48. x = 12."
      ],
      explanation: [
        "Let Ben = x, Maria = 3x. x + 3x = 48.",
        "4x = 48. x = 12. Ben has 12 stickers."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation represents: "Six times a number minus 11 is 25"?',
      choices: ["6x − 11 = 25", "6(x − 11) = 25", "6x + 11 = 25", "11 − 6x = 25"],
      answer: "6x − 11 = 25",
      hints: [
        '"Six times a number" means 6x.',
        '"Minus 11" means subtract 11.',
        "So: 6x − 11 = 25."
      ],
      explanation: [
        '"Six times a number" = 6x, "minus 11" = − 11.',
        "Equation: 6x − 11 = 25.",
        "Solving: 6x = 36, x = 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Translate and solve: "A number plus 14 equals 39." What is the number?',
      answer: "25",
      hints: [
        "The equation is x + 14 = 39.",
        "Subtract 14 from both sides.",
        "x = 39 − 14 = 25."
      ],
      explanation: [
        "Equation: x + 14 = 39.",
        "x = 39 − 14 = 25.",
        "The number is 25."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation matches: "A third of a number increased by 7 is 15"?',
      choices: ["x/3 + 7 = 15", "3x + 7 = 15", "x/3 − 7 = 15", "7x + 3 = 15"],
      answer: "x/3 + 7 = 15",
      hints: [
        '"A third of a number" means x/3 or x ÷ 3.',
        '"Increased by 7" means add 7.',
        "So: x/3 + 7 = 15."
      ],
      explanation: [
        '"A third of a number" = x/3, "increased by 7" = + 7.',
        "Equation: x/3 + 7 = 15.",
        "Solving: x/3 = 8, x = 24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which equation represents: "A number minus 12 equals 30"?',
      choices: ["x − 12 = 30", "12 − x = 30", "x + 12 = 30", "x/12 = 30"],
      answer: "x − 12 = 30",
      hints: [
        "\"Minus\" means subtraction.",
        "\"A number\" is the unknown — call it x.",
        "So x − 12 = 30."
      ],
      explanation: [
        "\"A number minus 12\" translates to x − 12.",
        "\"Equals 30\" gives x − 12 = 30.",
        "Solving: x = 42."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Translate and solve: "Four times a number plus 7 is 31." What is the number?',
      answer: "6",
      hints: [
        "\"Four times a number\" means 4x.",
        "The equation is 4x + 7 = 31.",
        "Subtract 7: 4x = 24. Divide by 4: x = 6."
      ],
      explanation: [
        "Equation: 4x + 7 = 31.",
        "4x = 24 → x = 6.",
        "Check: 4(6) + 7 = 31 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which equation represents: "Half of a number decreased by 9 is 3"?',
      choices: ["x/2 − 9 = 3", "2x − 9 = 3", "x/2 + 9 = 3", "9 − x/2 = 3"],
      answer: "x/2 − 9 = 3",
      hints: [
        "\"Half of a number\" means x/2 or x ÷ 2.",
        "\"Decreased by 9\" means subtract 9.",
        "So: x/2 − 9 = 3."
      ],
      explanation: [
        "\"Half of a number\" = x/2, \"decreased by 9\" = − 9.",
        "Equation: x/2 − 9 = 3.",
        "Solving: x/2 = 12, x = 24."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A number tripled then decreased by 7 equals 20. Which equation models this?',
      choices: ["3x − 7 = 20","3(x − 7) = 20","x/3 − 7 = 20","7 − 3x = 20"],
      answer: "3x − 7 = 20",
      hints: [
        "Tripled means multiplied by 3: 3x.",
        "Decreased by 7 means subtract 7: 3x − 7.",
        "Set equal to 20: 3x − 7 = 20."
      ],
      explanation: [
        "Tripled: 3x. Decreased by 7: 3x − 7. Equals 20: 3x − 7 = 20.",
        "Solving: 3x = 27, x = 9.",
        "The equation is 3x − 7 = 20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Five more than twice a number is 23. What is the number?',
      answer: "9",
      hints: [
        "Write the equation: 2x + 5 = 23.",
        "Subtract 5: 2x = 18.",
        "Divide by 2: x = 9."
      ],
      explanation: [
        "Equation: 2x + 5 = 23.",
        "Subtract 5: 2x = 18. Divide by 2: x = 9.",
        "Check: 2(9) + 5 = 23 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The sum of three consecutive integers is 48. Which equation models this?',
      choices: ["n + (n+1) + (n+2) = 48","3n = 48","n + n + n = 48","n × (n+1) × (n+2) = 48"],
      answer: "n + (n+1) + (n+2) = 48",
      hints: [
        "Consecutive integers differ by 1: n, n+1, n+2.",
        "Their sum: n + (n+1) + (n+2).",
        "Set equal to 48."
      ],
      explanation: [
        "Three consecutive integers: n, n+1, n+2.",
        "Sum: n + (n+1) + (n+2) = 3n + 3 = 48.",
        "Solving: 3n = 45, n = 15. The integers are 15, 16, 17."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'The sum of a number and 15 is 42. What is the number?',
      choices: ["27", "57", "15", "42"],
      answer: "27",
      hints: [
        "Write the equation: n + 15 = 42.",
        "Subtract 15 from both sides.",
        "n = 42 − 15 = 27."
      ],
      explanation: [
        "Equation: n + 15 = 42.",
        "n = 42 − 15 = <strong>27</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Three times a number decreased by 8 equals 19. What is the number?',
      answer: "9",
      hints: [
        "Write the equation: 3n − 8 = 19.",
        "Add 8: 3n = 27.",
        "Divide by 3: n = 9."
      ],
      explanation: [
        "Equation: 3n − 8 = 19. Add 8: 3n = 27.",
        "Divide by 3: n = <strong>9</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A number doubled and then increased by 7 gives 31. Which equation represents this?',
      choices: ["2n + 7 = 31", "n + 14 = 31", "7n + 2 = 31", "2(n + 7) = 31"],
      answer: "2n + 7 = 31",
      hints: [
        "Doubled means multiply by 2: 2n.",
        "Increased by 7 means add 7: 2n + 7.",
        "Equals 31: 2n + 7 = 31."
      ],
      explanation: [
        "'Doubled' → 2n. 'Increased by 7' → + 7. 'Gives 31' → = 31.",
        "The equation is <strong>2n + 7 = 31</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 9: Inequalities (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x + 4 > 10</span>',
      choices: ["x > 6", "x > 14", "x < 6", "x > 10"],
      answer: "x > 6",
      hints: [
        "Subtract 4 from both sides.",
        "x > 10 − 4.",
        "x > 6."
      ],
      explanation: [
        "Subtract 4 from both sides: x > 10 − 4.",
        "x > 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">3y ≤ 21</span>. What is the largest whole number y can be?',
      answer: "7",
      hints: [
        "Divide both sides by 3: y ≤ 7.",
        "The largest whole number ≤ 7 is 7.",
        "y can be at most 7."
      ],
      explanation: [
        "Divide by 3: y ≤ 7.",
        "The largest whole number value is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−2n > 8</span>. What happens to the inequality sign?',
      choices: ["It flips: n < −4", "It stays: n > −4", "It flips: n < 4", "It stays: n > 4"],
      answer: "It flips: n < −4",
      hints: [
        "When you divide by a negative number, the inequality sign flips.",
        "Divide both sides by −2: n < 8/(−2).",
        "n < −4."
      ],
      explanation: [
        "Dividing by −2 flips the sign: n < −4.",
        "Remember: dividing or multiplying by a negative reverses the inequality."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">2w − 7 ≥ 9</span>. What is the smallest whole number w can be?',
      answer: "8",
      hints: [
        "Add 7 to both sides: 2w ≥ 16.",
        "Divide by 2: w ≥ 8.",
        "The smallest whole number ≥ 8 is 8."
      ],
      explanation: [
        "2w − 7 ≥ 9 → 2w ≥ 16 → w ≥ 8.",
        "The smallest whole number value is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which value is in the solution set of <span class="math">5x − 3 < 22</span>?',
      choices: ["x = 4", "x = 5", "x = 6", "x = 10"],
      answer: "x = 4",
      hints: [
        "Solve: add 3 → 5x < 25 → x < 5.",
        "Any value less than 5 works.",
        "x = 4 is less than 5."
      ],
      explanation: [
        "5x − 3 < 22 → 5x < 25 → x < 5.",
        "Of the choices, only x = 4 is less than 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">4x + 3 ≤ 27</span>. What is the largest whole number x can be?',
      answer: "6",
      hints: [
        "Subtract 3 from both sides: 4x ≤ 24.",
        "Divide by 4: x ≤ 6.",
        "The largest whole number ≤ 6 is 6."
      ],
      explanation: [
        "4x + 3 ≤ 27 → 4x ≤ 24 → x ≤ 6.",
        "The largest whole number value is 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">y − 3 < 8</span>',
      choices: ["y < 11", "y < 5", "y > 11", "y > 5"],
      answer: "y < 11",
      hints: [
        "Add 3 to both sides.",
        "y < 8 + 3.",
        "y < 11."
      ],
      explanation: [
        "Add 3 to both sides: y < 8 + 3.",
        "y < 11."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−5k ≥ 30</span>. What happens?',
      choices: ["k ≤ −6", "k ≥ −6", "k ≤ 6", "k ≥ 6"],
      answer: "k ≤ −6",
      hints: [
        "Divide both sides by −5. Remember to flip the inequality!",
        "k ≤ 30 ÷ (−5).",
        "k ≤ −6."
      ],
      explanation: [
        "Dividing by −5 flips the inequality: k ≤ −6.",
        "When dividing by a negative, always reverse the sign."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5m ≤ 40</span>. What is the largest whole number m can be?',
      answer: "8",
      hints: [
        "Divide both sides by 5: m ≤ 8.",
        "The largest whole number ≤ 8 is 8.",
        "m can be at most 8."
      ],
      explanation: [
        "Divide by 5: m ≤ 8.",
        "The largest whole number value is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which value is in the solution set of <span class="math">3x + 7 > 25</span>?',
      choices: ["x = 7", "x = 6", "x = 5", "x = 4"],
      answer: "x = 7",
      hints: [
        "Solve: subtract 7 → 3x > 18 → x > 6.",
        "Any value greater than 6 works.",
        "x = 7 is greater than 6."
      ],
      explanation: [
        "3x + 7 > 25 → 3x > 18 → x > 6.",
        "Of the choices, only x = 7 is greater than 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−4n < 20</span>',
      choices: ["n > −5", "n < −5", "n > 5", "n < 5"],
      answer: "n > −5",
      hints: [
        "Divide both sides by −4. Remember to flip the inequality!",
        "n > 20 ÷ (−4).",
        "n > −5."
      ],
      explanation: [
        "Dividing by −4 flips the sign: n > −5.",
        "When dividing by a negative, reverse the inequality."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">6x ≤ 42</span>. What is the largest whole number x can be?',
      answer: "7",
      hints: [
        "Divide both sides by 6: x ≤ 7.",
        "The largest whole number ≤ 7 is 7.",
        "x can be at most 7."
      ],
      explanation: [
        "Divide by 6: x ≤ 7.",
        "The largest whole number value is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which value is in the solution set of <span class="math">4x − 5 > 19</span>?',
      choices: ["x = 7", "x = 6", "x = 5", "x = 4"],
      answer: "x = 7",
      hints: [
        "Solve: add 5 → 4x > 24 → x > 6.",
        "Any value greater than 6 works.",
        "x = 7 is greater than 6."
      ],
      explanation: [
        "4x − 5 > 19 → 4x > 24 → x > 6.",
        "Of the choices, only x = 7 is greater than 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−6m ≥ 18</span>. What happens?',
      choices: ["m ≤ −3", "m ≥ −3", "m ≤ 3", "m ≥ 3"],
      answer: "m ≤ −3",
      hints: [
        "Divide both sides by −6. Remember to flip the inequality!",
        "m ≤ 18 ÷ (−6).",
        "m ≤ −3."
      ],
      explanation: [
        "Dividing by −6 flips the inequality: m ≤ −3.",
        "When dividing by a negative, always reverse the sign."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x − 5 ≥ 12</span>',
      choices: ["x ≥ 17", "x ≥ 7", "x ≤ 17", "x ≤ 7"],
      answer: "x ≥ 17",
      hints: [
        "Add 5 to both sides.",
        "x ≥ 12 + 5.",
        "x ≥ 17."
      ],
      explanation: [
        "Add 5 to both sides: x ≥ 12 + 5.",
        "x ≥ 17."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">7x − 2 ≤ 33</span>. What is the largest whole number x can be?',
      answer: "5",
      hints: [
        "Add 2 to both sides: 7x ≤ 35.",
        "Divide by 7: x ≤ 5.",
        "The largest whole number ≤ 5 is 5."
      ],
      explanation: [
        "7x − 2 ≤ 33 → 7x ≤ 35 → x ≤ 5.",
        "The largest whole number value is 5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−3x < 15</span>',
      choices: ["x > −5", "x < −5", "x > 5", "x < 5"],
      answer: "x > −5",
      hints: [
        "Divide both sides by −3. Remember to flip the inequality!",
        "x > 15 ÷ (−3).",
        "x > −5."
      ],
      explanation: [
        "Dividing by −3 flips the sign: x > −5.",
        "When dividing by a negative, reverse the inequality."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">5x + 4 ≤ 39</span>. What is the largest whole number x can be?',
      answer: "7",
      hints: [
        "Subtract 4 from both sides: 5x ≤ 35.",
        "Divide by 5: x ≤ 7.",
        "The largest whole number ≤ 7 is 7."
      ],
      explanation: [
        "5x + 4 ≤ 39 → 5x ≤ 35 → x ≤ 7.",
        "The largest whole number value is 7.",
        "Any value of x that is 7 or less satisfies the inequality."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x + 6 < 15</span>',
      choices: ["x < 9", "x < 21", "x > 9", "x > 21"],
      answer: "x < 9",
      hints: [
        "Subtract 6 from both sides.",
        "x < 15 − 6.",
        "x < 9."
      ],
      explanation: [
        "Subtract 6 from both sides: x < 15 − 6.",
        "x < 9.",
        "Any value less than 9 is a solution."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which value is in the solution set of <span class="math">6x − 7 > 29</span>?',
      choices: ["x = 7", "x = 6", "x = 5", "x = 4"],
      answer: "x = 7",
      hints: [
        "Solve: add 7 → 6x > 36 → x > 6.",
        "Any value greater than 6 works.",
        "x = 7 is greater than 6."
      ],
      explanation: [
        "6x − 7 > 29 → 6x > 36 → x > 6.",
        "Of the choices, only x = 7 is greater than 6.",
        "Check: 6(7) − 7 = 35 > 29 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x + 8 ≤ 15</span>',
      choices: ["x ≤ 7","x ≤ 23","x ≥ 7","x ≥ 23"],
      answer: "x ≤ 7",
      hints: [
        "Subtract 8 from both sides.",
        "x ≤ 15 − 8.",
        "x ≤ 7."
      ],
      explanation: [
        "Subtract 8 from both sides: x ≤ 15 − 8.",
        "x ≤ 7.",
        "Any value of x that is 7 or less is a solution."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">3x + 5 ≤ 26</span>. What is the largest whole number x can be?',
      answer: "7",
      hints: [
        "Subtract 5 from both sides: 3x ≤ 21.",
        "Divide by 3: x ≤ 7.",
        "The largest whole number ≤ 7 is 7."
      ],
      explanation: [
        "3x + 5 ≤ 26 → 3x ≤ 21 → x ≤ 7.",
        "The largest whole number value is 7.",
        "Check: 3(7) + 5 = 26 ≤ 26 ✓."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−8n ≥ 24</span>. What happens?',
      choices: ["n ≤ −3","n ≥ −3","n ≤ 3","n ≥ 3"],
      answer: "n ≤ −3",
      hints: [
        "Divide both sides by −8. Remember to flip the inequality!",
        "n ≤ 24 ÷ (−8).",
        "n ≤ −3."
      ],
      explanation: [
        "Dividing by −8 flips the inequality: n ≤ −3.",
        "When dividing by a negative, always reverse the sign.",
        "Check: −8(−3) = 24 ≥ 24 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">3x + 4 > 19</span>',
      choices: ["x > 5", "x > 4", "x < 5", "x > 15"],
      answer: "x > 5",
      hints: [
        "Subtract 4 from both sides: 3x > 15.",
        "Divide by 3: x > 5.",
        "Since we divided by a positive number, the inequality stays the same direction."
      ],
      explanation: [
        "Subtract 4: 3x > 15.",
        "Divide by 3: x > 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the largest integer that satisfies <span class="math">2x - 1 < 13</span>?',
      answer: "6",
      hints: [
        "Add 1 to both sides: 2x < 14.",
        "Divide by 2: x < 7.",
        "The largest integer less than 7 is 6."
      ],
      explanation: [
        "2x - 1 < 13 → 2x < 14 → x < 7.",
        "Largest integer satisfying x < 7 is 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which number is NOT a solution to <span class="math">4x - 3 \geq 9</span>?',
      choices: ["2", "3", "4", "5"],
      answer: "2",
      hints: [
        "Solve: add 3 to both sides: 4x ≥ 12.",
        "Divide by 4: x ≥ 3.",
        "x = 2 does not satisfy x ≥ 3."
      ],
      explanation: [
        "4x - 3 ≥ 9 → 4x ≥ 12 → x ≥ 3.",
        "x = 2 is not ≥ 3, so 2 is NOT a solution."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x + 9 > 14</span>',
      choices: ["x > 5", "x > 23", "x < 5", "x > 14"],
      answer: "x > 5",
      hints: [
        "Subtract 9 from both sides.",
        "x > 14 − 9.",
        "x > 5."
      ],
      explanation: [
        "Subtract 9 from both sides: x > 14 − 9.",
        "x > 5.",
        "Any number greater than 5 is a solution."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">3x − 7 \leq 20</span>. What is the largest whole number x can be?',
      answer: "9",
      hints: [
        "Add 7 to both sides: 3x ≤ 27.",
        "Divide both sides by 3: x ≤ 9.",
        "The largest whole number is 9."
      ],
      explanation: [
        "Add 7: 3x ≤ 27.",
        "Divide by 3: x ≤ 9.",
        "The largest whole number x can be is 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−2x + 5 > 11</span>',
      choices: ["x < −3", "x > −3", "x < 3", "x > 3"],
      answer: "x < −3",
      hints: [
        "Subtract 5 from both sides: −2x > 6.",
        "Divide both sides by −2 and flip the inequality sign.",
        "x < −3."
      ],
      explanation: [
        "Subtract 5: −2x > 6.",
        "Divide by −2 (flip sign): x < −3.",
        "When dividing by a negative, reverse the inequality."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">5y \leq 45</span>. What is the largest whole number y can be?',
      answer: "9",
      hints: [
        "Divide both sides by 5: y ≤ 9.",
        "The largest whole number ≤ 9 is 9.",
        "y can be at most 9."
      ],
      explanation: [
        "Divide by 5: y ≤ 9.",
        "The largest whole number value is 9.",
        "Any whole number from 0 to 9 is a solution."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−4x > 20</span>',
      choices: ["x < −5", "x > −5", "x < 5", "x > 5"],
      answer: "x < −5",
      hints: [
        "Divide both sides by −4. Remember to flip the inequality.",
        "x < 20 ÷ (−4).",
        "x < −5."
      ],
      explanation: [
        "Dividing by −4 flips the sign: x < −5.",
        "Remember: dividing by a negative reverses the inequality.",
        "Any number less than −5 is a solution."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">6n − 10 \geq 26</span>',
      choices: ["n ≥ 6", "n ≤ 6", "n ≥ 3", "n ≤ 36"],
      answer: "n ≥ 6",
      hints: [
        "Add 10 to both sides: 6n ≥ 36.",
        "Divide both sides by 6.",
        "n ≥ 6."
      ],
      explanation: [
        "Add 10: 6n ≥ 36.",
        "Divide by 6: n ≥ 6.",
        "The smallest whole number n can be is 6."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">4x − 3 > 13</span>',
      choices: ["x > 4","x > 10","x < 4","x > 2.5"],
      answer: "x > 4",
      hints: [
        "Add 3 to both sides: 4x > 16.",
        "Divide both sides by 4.",
        "x > 4."
      ],
      explanation: [
        "Add 3: 4x > 13 + 3 = 16.",
        "Divide by 4: x > 4.",
        "The solution is x > 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Solve: <span class="math">2x + 7 ≤ 19</span>. What is the largest whole number x can be?',
      answer: "6",
      hints: [
        "Subtract 7 from both sides: 2x ≤ 12.",
        "Divide both sides by 2: x ≤ 6.",
        "The largest whole number is 6."
      ],
      explanation: [
        "Subtract 7: 2x ≤ 12.",
        "Divide by 2: x ≤ 6.",
        "The largest whole number x can be is 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−2x + 5 ≥ 11</span>',
      choices: ["x ≤ −3","x ≥ −3","x ≤ 3","x ≥ 3"],
      answer: "x ≤ −3",
      hints: [
        "Subtract 5 from both sides: −2x ≥ 6.",
        "Divide by −2 and FLIP the inequality sign.",
        "x ≤ −3."
      ],
      explanation: [
        "Subtract 5: −2x ≥ 6.",
        "Divide by −2 (flip the sign): x ≤ −3.",
        "Remember: dividing by a negative flips the inequality."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Solve: <span class="math">x + 5 > 12</span>',
      choices: ["x > 7", "x > 17", "x < 7", "x > 12"],
      answer: "x > 7",
      hints: [
        "Subtract 5 from both sides.",
        "x > 12 − 5.",
        "x > 7."
      ],
      explanation: [
        "Subtract 5 from both sides: x > 12 − 5.",
        "x > <strong>7</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Solve: <span class="math">3x − 4 ≥ 11</span>. What is the smallest whole number x can be?',
      answer: "5",
      hints: [
        "Add 4 to both sides: 3x ≥ 15.",
        "Divide by 3: x ≥ 5.",
        "The smallest whole number is 5."
      ],
      explanation: [
        "Add 4: 3x ≥ 15. Divide by 3: x ≥ 5.",
        "The smallest whole number x can be is <strong>5</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Solve: <span class="math">−4x + 3 > 19</span>',
      choices: ["x < −4", "x > −4", "x < 4", "x > 4"],
      answer: "x < −4",
      hints: [
        "Subtract 3 from both sides: −4x > 16.",
        "Divide by −4 and FLIP the inequality sign.",
        "x < −4."
      ],
      explanation: [
        "Subtract 3: −4x > 16. Divide by −4 (flip sign): x < −4.",
        "Remember: dividing by a negative number <strong>flips</strong> the inequality."
      ]
    }
  ]
];


// ===================================================================
// WORLD 5 — Chapter 6: Decimals (11 topics, 5 questions each)
// ===================================================================
EXTRA_QUESTIONS[5] = [

  // --------------------------------------------------
  // Topic 0: Adding & Subtracting Decimals (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">3.4 + 2.7</span>?',
      choices: ["6.1", "5.1", "6.11", "5.7"],
      answer: "6.1",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 4 + 7 = 11 → write 1, carry 1.",
        "Add ones: 3 + 2 + 1 = 6. Answer: 6.1."
      ],
      explanation: [
        "Line up decimals: 3.4 + 2.7.",
        "4 + 7 = 11, carry 1. 3 + 2 + 1 = 6. Answer: 6.1."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">8.5 − 3.2</span>?',
      answer: "5.3",
      hints: [
        "Line up the decimal points.",
        "Subtract tenths: 5 − 2 = 3.",
        "Subtract ones: 8 − 3 = 5. Answer: 5.3."
      ],
      explanation: [
        "8.5 − 3.2: tenths: 5 − 2 = 3, ones: 8 − 3 = 5.",
        "Answer: 5.3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">12.06 + 3.9</span>?',
      choices: ["15.96", "15.06", "12.45", "16.96"],
      answer: "15.96",
      hints: [
        "Line up decimal points. Write 3.9 as 3.90.",
        "Hundredths: 6 + 0 = 6. Tenths: 0 + 9 = 9.",
        "Ones: 2 + 3 = 5. Tens: 1. Answer: 15.96."
      ],
      explanation: [
        "12.06 + 3.90 = 15.96.",
        "Remember to line up the decimal points and add zeros as placeholders."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">10.0 − 4.35</span>?',
      answer: "5.65",
      hints: [
        "Write 10.0 as 10.00.",
        "Subtract: 10.00 − 4.35.",
        "Borrow as needed: answer is 5.65."
      ],
      explanation: [
        "10.00 − 4.35: borrow to subtract hundredths and tenths.",
        "Answer: 5.65."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">7.25 + 4.8 + 1.95</span>?',
      choices: ["14.00", "13.00", "14.10", "13.90"],
      answer: "14.00",
      hints: [
        "Add two at a time: 7.25 + 4.80 = 12.05.",
        "Then 12.05 + 1.95.",
        "12.05 + 1.95 = 14.00."
      ],
      explanation: [
        "7.25 + 4.80 = 12.05.",
        "12.05 + 1.95 = 14.00."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">5.6 + 3.8</span>?',
      answer: "9.4",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 6 + 8 = 14 → write 4, carry 1.",
        "Add ones: 5 + 3 + 1 = 9. Answer: 9.4."
      ],
      explanation: [
        "5.6 + 3.8: tenths 6 + 8 = 14, carry 1. Ones: 5 + 3 + 1 = 9.",
        "Answer: 9.4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">15.3 − 7.48</span>?',
      choices: ["7.82", "8.82", "7.92", "8.18"],
      answer: "7.82",
      hints: [
        "Write 15.3 as 15.30.",
        "Subtract: 15.30 − 7.48.",
        "Hundredths: 0 − 8 → borrow. Work through to get 7.82."
      ],
      explanation: [
        "15.30 − 7.48 = 7.82.",
        "Remember to borrow when subtracting."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">6.04 + 8.97</span>?',
      answer: "15.01",
      hints: [
        "Line up the decimals.",
        "Hundredths: 4 + 7 = 11, write 1 carry 1. Tenths: 0 + 9 + 1 = 10, write 0 carry 1.",
        "Ones: 6 + 8 + 1 = 15. Answer: 15.01."
      ],
      explanation: [
        "6.04 + 8.97 = 15.01.",
        "Careful with the carries through each place."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">4.3 + 1.9</span>?',
      choices: ["6.2", "5.2", "6.12", "5.12"],
      answer: "6.2",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 3 + 9 = 12 → write 2, carry 1.",
        "Add ones: 4 + 1 + 1 = 6. Answer: 6.2."
      ],
      explanation: [
        "4.3 + 1.9: tenths 3 + 9 = 12, carry 1. Ones: 4 + 1 + 1 = 6.",
        "Answer: 6.2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">20.0 − 8.63</span>?',
      answer: "11.37",
      hints: [
        "Write 20.0 as 20.00.",
        "Subtract: 20.00 − 8.63.",
        "Borrow as needed: answer is 11.37."
      ],
      explanation: [
        "20.00 − 8.63 = 11.37.",
        "Remember to borrow when subtracting."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">9.15 + 2.86</span>?',
      choices: ["12.01", "11.01", "12.11", "11.91"],
      answer: "12.01",
      hints: [
        "Line up the decimals.",
        "Hundredths: 5 + 6 = 11, write 1 carry 1. Tenths: 1 + 8 + 1 = 10, write 0 carry 1.",
        "Ones: 9 + 2 + 1 = 12. Answer: 12.01."
      ],
      explanation: [
        "9.15 + 2.86 = 12.01.",
        "Careful with the carries through each place."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">14.3 − 6.85</span>?',
      answer: "7.45",
      hints: [
        "Write 14.3 as 14.30.",
        "Subtract: 14.30 − 6.85.",
        "Borrow as needed: answer is 7.45."
      ],
      explanation: [
        "14.30 − 6.85 = 7.45.",
        "Remember to borrow when subtracting."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">2.6 + 5.7</span>?',
      choices: ["8.3", "7.3", "8.13", "7.13"],
      answer: "8.3",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 6 + 7 = 13 → write 3, carry 1.",
        "Add ones: 2 + 5 + 1 = 8. Answer: 8.3."
      ],
      explanation: [
        "2.6 + 5.7: tenths 6 + 7 = 13, carry 1. Ones: 2 + 5 + 1 = 8.",
        "Answer: 8.3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">11.02 + 4.98</span>?',
      choices: ["16.00", "15.00", "16.10", "15.90"],
      answer: "16.00",
      hints: [
        "Line up the decimals.",
        "Hundredths: 2 + 8 = 10, write 0 carry 1. Tenths: 0 + 9 + 1 = 10, write 0 carry 1.",
        "Ones: 1 + 4 + 1 = 6. Tens: 1. Answer: 16.00."
      ],
      explanation: [
        "11.02 + 4.98 = 16.00.",
        "Careful with the carries through each place."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">7.3 + 4.9</span>?',
      answer: "12.2",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 3 + 9 = 12 → write 2, carry 1.",
        "Add ones: 7 + 4 + 1 = 12. Answer: 12.2."
      ],
      explanation: [
        "7.3 + 4.9: tenths 3 + 9 = 12, carry 1. Ones: 7 + 4 + 1 = 12.",
        "Answer: 12.2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">18.7 − 9.83</span>?',
      choices: ["8.87", "9.87", "8.97", "9.13"],
      answer: "8.87",
      hints: [
        "Write 18.7 as 18.70.",
        "Subtract: 18.70 − 9.83.",
        "Hundredths: 0 − 3 → borrow. Work through to get 8.87."
      ],
      explanation: [
        "18.70 − 9.83 = 8.87.",
        "Remember to borrow when subtracting."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">5.38 + 7.62</span>?',
      choices: ["13.00", "12.00", "13.10", "12.90"],
      answer: "13.00",
      hints: [
        "Line up the decimals.",
        "Hundredths: 8 + 2 = 10, write 0 carry 1. Tenths: 3 + 6 + 1 = 10, write 0 carry 1.",
        "Ones: 5 + 7 + 1 = 13. Answer: 13.00."
      ],
      explanation: [
        "5.38 + 7.62 = 13.00.",
        "Careful with the carries through each place."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">16.5 − 9.74</span>?',
      answer: "6.76",
      hints: [
        "Write 16.5 as 16.50.",
        "Subtract: 16.50 − 9.74.",
        "Borrow as needed: answer is 6.76."
      ],
      explanation: [
        "16.50 − 9.74 = 6.76.",
        "Remember to borrow when subtracting.",
        "Line up the decimal points carefully."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">6.2 + 1.9</span>?',
      choices: ["8.1", "7.1", "8.11", "7.11"],
      answer: "8.1",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 2 + 9 = 11 → write 1, carry 1.",
        "Add ones: 6 + 1 + 1 = 8. Answer: 8.1."
      ],
      explanation: [
        "6.2 + 1.9: tenths 2 + 9 = 11, carry 1. Ones: 6 + 1 + 1 = 8.",
        "Answer: 8.1.",
        "Remember to carry when tenths sum exceeds 9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">8.03 + 6.97</span>?',
      choices: ["15.00", "14.00", "15.10", "14.90"],
      answer: "15.00",
      hints: [
        "Line up the decimals.",
        "Hundredths: 3 + 7 = 10, write 0 carry 1. Tenths: 0 + 9 + 1 = 10, write 0 carry 1.",
        "Ones: 8 + 6 + 1 = 15. Answer: 15.00."
      ],
      explanation: [
        "8.03 + 6.97 = 15.00.",
        "Careful with the carries through each place.",
        "The hundredths and tenths both carry over."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">9.3 − 4.7</span>?',
      answer: "4.6",
      hints: [
        "Line up the decimal points.",
        "Subtract tenths: 3 − 7 → borrow, 13 − 7 = 6.",
        "Subtract ones: 8 − 4 = 4. Answer: 4.6."
      ],
      explanation: [
        "9.3 − 4.7: borrow from ones, 13 − 7 = 6, 8 − 4 = 4.",
        "Answer: 4.6.",
        "Remember to borrow when the top digit is smaller."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">13.07 + 5.94</span>?',
      choices: ["19.01","18.01","19.11","18.91"],
      answer: "19.01",
      hints: [
        "Line up the decimals.",
        "Hundredths: 7 + 4 = 11, write 1 carry 1. Tenths: 0 + 9 + 1 = 10, write 0 carry 1.",
        "Ones: 3 + 5 + 1 = 9. Tens: 1. Answer: 19.01."
      ],
      explanation: [
        "13.07 + 5.94 = 19.01.",
        "Careful with the carries through each place.",
        "Line up decimal points before adding."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">25.0 − 11.47</span>?',
      choices: ["13.53","14.53","13.43","14.47"],
      answer: "13.53",
      hints: [
        "Write 25.0 as 25.00.",
        "Subtract: 25.00 − 11.47.",
        "Borrow as needed: answer is 13.53."
      ],
      explanation: [
        "25.00 − 11.47 = 13.53.",
        "Remember to borrow when subtracting.",
        "Add trailing zeros to align decimal places."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">4.56 + 3.27</span>?',
      answer: "7.83",
      hints: [
        "Line up the decimal points.",
        "Add hundredths: 6 + 7 = 13, write 3 carry 1.",
        "Add tenths: 5 + 2 + 1 = 8. Add ones: 4 + 3 = 7."
      ],
      explanation: [
        "4.56 + 3.27: hundredths: 6+7=13, tenths: 5+2+1=8, ones: 4+3=7.",
        "Answer: 7.83."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">10.05 - 3.78</span>?',
      choices: ["6.27", "6.37", "7.27", "6.33"],
      answer: "6.27",
      hints: [
        "Line up decimal points: 10.05 - 3.78.",
        "You need to borrow since 5 < 8 and 0 < 7.",
        "10.05 - 3.78 = 6.27."
      ],
      explanation: [
        "10.05 - 3.78: borrow as needed.",
        "Result: 6.27."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">8.9 + 1.15</span>?',
      answer: "10.05",
      hints: [
        "Write 8.9 as 8.90 so both have two decimal places.",
        "Add: 8.90 + 1.15.",
        "0 + 5 = 5, 9 + 1 = 10 (write 0 carry 1), 8 + 1 + 1 = 10."
      ],
      explanation: [
        "8.90 + 1.15 = 10.05.",
        "Remember to line up the decimal points."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">4.7 + 3.8</span>?',
      answer: "8.5",
      hints: [
        "Line up the decimal points and add.",
        "7 + 8 = 15, carry the 1.",
        "4 + 3 + 1 = 8, so 8.5."
      ],
      explanation: [
        "4.7 + 3.8: ones = 7+8 = 15, write 5 carry 1.",
        "4 + 3 + 1 = 8.",
        "The answer is 8.5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">12.04 − 7.56</span>?',
      choices: ["4.48", "4.52", "5.48", "4.58"],
      answer: "4.48",
      hints: [
        "Line up the decimal points and subtract.",
        "12.04 − 7.56: borrow as needed.",
        "The answer is 4.48."
      ],
      explanation: [
        "12.04 − 7.56: subtract column by column with borrowing.",
        "12.04 − 7.56 = 4.48.",
        "The answer is 4.48."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">6.3 + 2.9</span>?',
      choices: ["9.2", "8.2", "9.12", "8.12"],
      answer: "9.2",
      hints: [
        "Add the tenths: 3 + 9 = 12, write 2 carry 1.",
        "Add the ones: 6 + 2 + 1 = 9.",
        "The answer is 9.2."
      ],
      explanation: [
        "6.3 + 2.9 = 9.2.",
        "Tenths: 3 + 9 = 12, write 2 carry 1.",
        "Ones: 6 + 2 + 1 = 9. Answer: 9.2."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'What is <span class="math">9.3 + 4.8</span>?',
      answer: "14.1",
      hints: [
        "Line up the decimal points.",
        "Add tenths: 3 + 8 = 11 → write 1, carry 1.",
        "Add ones: 9 + 4 + 1 = 14. Answer: 14.1."
      ],
      explanation: [
        "Line up decimals: 9.3 + 4.8.",
        "3 + 8 = 11, carry 1. 9 + 4 + 1 = 14. Answer: 14.1.",
        "Remember to carry when the sum is 10 or more."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">15.03 − 7.6</span>?',
      choices: ["7.43", "8.43", "7.97", "22.63"],
      answer: "7.43",
      hints: [
        "Line up decimal points. Write 7.6 as 7.60.",
        "Hundredths: 3 − 0 = 3. Tenths: 0 − 6 → borrow.",
        "After borrowing: 10 − 6 = 4. Ones: 14 − 7 = 7. Answer: 7.43."
      ],
      explanation: [
        "15.03 − 7.60: hundredths 3 − 0 = 3; tenths borrow 10 − 6 = 4; ones 14 − 7 = 7.",
        "Answer: 7.43.",
        "Always line up decimal points before subtracting."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">6.75 + 8.48</span>?',
      choices: ["15.23", "14.23", "15.13", "14.13"],
      answer: "15.23",
      hints: [
        "Add hundredths: 5 + 8 = 13 → write 3, carry 1.",
        "Add tenths: 7 + 4 + 1 = 12 → write 2, carry 1.",
        "Add ones: 6 + 8 + 1 = 15. Answer: 15.23."
      ],
      explanation: [
        "6.75 + 8.48: hundredths 13 (carry 1), tenths 12 (carry 1), ones 15.",
        "Answer: 15.23.",
        "Carry over whenever a column sums to 10 or more."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7.45 + 3.28</span>?',
      answer: "10.73",
      hints: [
        "Line up the decimal points.",
        "Add: 5 + 8 = 13, carry 1. 4 + 2 + 1 = 7. 7 + 3 = 10.",
        "The answer is 10.73."
      ],
      explanation: [
        "Line up decimals: 7.45 + 3.28.",
        "Add hundredths: 5 + 8 = 13 (write 3, carry 1).",
        "Add tenths: 4 + 2 + 1 = 7. Add ones: 7 + 3 = 10. Answer: 10.73."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is <span class="math">12.6 − 4.3</span>?',
      choices: ["8.3","8.9","7.3","16.9"],
      answer: "8.3",
      hints: [
        "Line up the decimal points.",
        "Subtract: 6 − 3 = 3 and 12 − 4 = 8.",
        "The answer is 8.3."
      ],
      explanation: [
        "Line up decimals: 12.6 − 4.3.",
        "Subtract tenths: 6 − 3 = 3. Subtract ones: 12 − 4 = 8.",
        "The answer is 8.3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">9.03 + 4.97</span>?',
      choices: ["14","13.1","14.1","13"],
      answer: "14",
      hints: [
        "Line up the decimal points.",
        "Add hundredths: 3 + 7 = 10 (write 0, carry 1).",
        "Add tenths: 0 + 9 + 1 = 10 (write 0, carry 1). Add ones: 9 + 4 + 1 = 14."
      ],
      explanation: [
        "9.03 + 4.97 = 14.00 = 14.",
        "The hundredths add to 10 (carry), tenths add to 10 (carry), ones sum to 14.",
        "The answer is 14."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4.35 + 2.678</span>?',
      answer: "7.028",
      hints: [
        "Line up the decimal points. Write 4.35 as 4.350.",
        "Add from right: 0 + 8 = 8, 5 + 7 = 12 (write 2 carry 1), 3 + 6 + 1 = 10 (write 0 carry 1).",
        "4 + 2 + 1 = 7. Answer: 7.028."
      ],
      explanation: [
        "4.350 + 2.678: thousandths: 0+8=8, hundredths: 5+7=12, tenths: 3+6+1=10, ones: 4+2+1=7.",
        "Answer: <strong>7.028</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">10 − 3.247</span>?',
      choices: ["6.753", "7.753", "6.853", "7.247"],
      answer: "6.753",
      hints: [
        "Write 10 as 10.000.",
        "Subtract from right, borrowing as needed.",
        "10.000 − 3.247 = 6.753."
      ],
      explanation: [
        "Write 10 as 10.000. Subtract: 10.000 − 3.247.",
        "Answer: <strong>6.753</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A shirt costs $24.95 and tax is $1.87. What is the total?',
      answer: "26.82",
      hints: [
        "Add: 24.95 + 1.87.",
        "Hundredths: 5 + 7 = 12 (write 2, carry 1).",
        "Tenths: 9 + 8 + 1 = 18 (write 8, carry 1). Ones: 4 + 1 + 1 = 6. Tens: 2."
      ],
      explanation: [
        "24.95 + 1.87 = <strong>26.82</strong>.",
        "Line up decimal points and add carefully."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 1: Comparing Decimals (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.6</span> or <span class="math">0.45</span>?',
      choices: ["0.6", "0.45", "They are equal", "Cannot tell"],
      answer: "0.6",
      hints: [
        "Write both with the same number of decimal places: 0.60 vs 0.45.",
        "Compare: 60 hundredths vs 45 hundredths.",
        "60 > 45, so 0.6 > 0.45."
      ],
      explanation: [
        "0.6 = 0.60. Compare 60 hundredths to 45 hundredths.",
        "0.60 > 0.45."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Put in order from least to greatest: <span class="math">0.3, 0.09, 0.31</span>. Which number comes first? (Type the decimal.)',
      answer: "0.09",
      hints: [
        "Write all with two decimal places: 0.30, 0.09, 0.31.",
        "Compare: 9 < 30 < 31.",
        "0.09 is the smallest."
      ],
      explanation: [
        "0.09 = 9 hundredths, 0.30 = 30 hundredths, 0.31 = 31 hundredths.",
        "Order: 0.09 < 0.30 < 0.31."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">2.105 ☐ 2.15</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Compare digit by digit: ones are both 2, tenths are both 1.",
        "Hundredths: 0 vs 5.",
        "0 < 5, so 2.105 < 2.15."
      ],
      explanation: [
        "Compare place by place: same ones (2), same tenths (1), hundredths: 0 < 5.",
        "2.105 < 2.15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are greater than 0.5? <br><span class="math">0.55, 0.049, 0.6, 0.500, 0.48</span>',
      answer: "2",
      hints: [
        "0.5 = 0.500. Check each against 0.500.",
        "0.55 > 0.5 ✓, 0.049 < 0.5 ✗, 0.6 > 0.5 ✓.",
        "0.500 = 0.5 ✗ (not greater, equal), 0.48 < 0.5 ✗. Two are greater."
      ],
      explanation: [
        "0.55 > 0.5 and 0.6 > 0.5. The rest are ≤ 0.5.",
        "Answer: 2."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which decimal is equal to <span class="math">0.70</span>?',
      choices: ["0.7", "0.07", "7.0", "0.007"],
      answer: "0.7",
      hints: [
        "Trailing zeros after the decimal don't change the value.",
        "0.70 = 0.7.",
        "0.07 is only 7 hundredths, which is different."
      ],
      explanation: [
        "0.70 and 0.7 are the same — the trailing zero doesn't change the value.",
        "Answer: 0.7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is the smallest: <span class="math">0.52, 0.502, 0.5, 0.519</span>?',
      choices: ["0.5", "0.502", "0.52", "0.519"],
      answer: "0.5",
      hints: [
        "Write all with 3 decimal places: 0.520, 0.502, 0.500, 0.519.",
        "Compare: 500 < 502 < 519 < 520.",
        "0.500 = 0.5 is the smallest."
      ],
      explanation: [
        "0.5 = 0.500 is smaller than 0.502, 0.519, and 0.52.",
        "Answer: 0.5."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Which is greater: <span class="math">0.8</span> or <span class="math">0.75</span>? Write the greater number.',
      answer: "0.8",
      hints: [
        "Write both with two decimal places: 0.80 vs 0.75.",
        "80 hundredths > 75 hundredths.",
        "0.8 is greater."
      ],
      explanation: [
        "0.80 vs 0.75: 80 > 75.",
        "0.8 is greater."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">3.045 ☐ 3.05</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Compare digit by digit: ones both 3, tenths both 0.",
        "Hundredths: 4 vs 5.",
        "4 < 5, so 3.045 < 3.05."
      ],
      explanation: [
        "At the hundredths place: 4 < 5.",
        "3.045 < 3.05."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Put in order from least to greatest: <span class="math">0.41, 0.14, 0.4</span>. Which number comes first? (Type the decimal.)',
      answer: "0.14",
      hints: [
        "Write all with two decimal places: 0.41, 0.14, 0.40.",
        "Compare: 14 < 40 < 41.",
        "0.14 is the smallest."
      ],
      explanation: [
        "0.14 = 14 hundredths, 0.40 = 40 hundredths, 0.41 = 41 hundredths.",
        "Order: 0.14 < 0.4 < 0.41."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.9</span> or <span class="math">0.85</span>?',
      choices: ["0.9", "0.85", "They are equal", "Cannot tell"],
      answer: "0.9",
      hints: [
        "Write both with two decimal places: 0.90 vs 0.85.",
        "Compare: 90 hundredths vs 85 hundredths.",
        "90 > 85, so 0.9 > 0.85."
      ],
      explanation: [
        "0.9 = 0.90. Compare 90 hundredths to 85 hundredths.",
        "0.90 > 0.85."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is the largest: <span class="math">0.708, 0.78, 0.7, 0.718</span>?',
      choices: ["0.78", "0.718", "0.708", "0.7"],
      answer: "0.78",
      hints: [
        "Write all with 3 decimal places: 0.708, 0.780, 0.700, 0.718.",
        "Compare: 700 < 708 < 718 < 780.",
        "0.780 = 0.78 is the largest."
      ],
      explanation: [
        "0.78 = 0.780 is the largest of the four numbers.",
        "Answer: 0.78."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are less than 0.3? <br><span class="math">0.29, 0.31, 0.299, 0.3, 0.028</span>',
      answer: "3",
      hints: [
        "0.3 = 0.300. Check each against 0.300.",
        "0.29 = 0.290 < 0.300 ✓, 0.31 > 0.300 ✗, 0.299 < 0.300 ✓.",
        "0.3 = 0.300 ✗ (equal, not less), 0.028 < 0.300 ✓. Three are less."
      ],
      explanation: [
        "0.29, 0.299, and 0.028 are less than 0.3.",
        "Answer: 3."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.52</span> or <span class="math">0.5</span>?',
      choices: ["0.52", "0.5", "They are equal", "Cannot tell"],
      answer: "0.52",
      hints: [
        "Write both with two decimal places: 0.52 vs 0.50.",
        "Compare: 52 hundredths vs 50 hundredths.",
        "52 > 50, so 0.52 > 0.5."
      ],
      explanation: [
        "0.52 vs 0.50: 52 > 50.",
        "0.52 is greater."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">5.203 ☐ 5.23</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Compare digit by digit: ones both 5, tenths both 2.",
        "Hundredths: 0 vs 3.",
        "0 < 3, so 5.203 < 5.23."
      ],
      explanation: [
        "At the hundredths place: 0 < 3.",
        "5.203 < 5.23."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.7</span> or <span class="math">0.68</span>?',
      choices: ["0.7", "0.68", "They are equal", "Cannot tell"],
      answer: "0.7",
      hints: [
        "Write both with two decimal places: 0.70 vs 0.68.",
        "Compare: 70 hundredths vs 68 hundredths.",
        "70 > 68, so 0.7 > 0.68."
      ],
      explanation: [
        "0.7 = 0.70. Compare 70 hundredths to 68 hundredths.",
        "0.70 > 0.68."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are less than 0.4? <br><span class="math">0.39, 0.41, 0.399, 0.4, 0.038</span>',
      answer: "3",
      hints: [
        "0.4 = 0.400. Check each against 0.400.",
        "0.39 = 0.390 < 0.400 ✓, 0.41 > 0.400 ✗, 0.399 < 0.400 ✓.",
        "0.4 = 0.400 ✗ (equal, not less), 0.038 < 0.400 ✓. Three are less."
      ],
      explanation: [
        "0.39, 0.399, and 0.038 are less than 0.4.",
        "Answer: 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is the smallest: <span class="math">0.61, 0.601, 0.6, 0.619</span>?',
      choices: ["0.6", "0.601", "0.61", "0.619"],
      answer: "0.6",
      hints: [
        "Write all with 3 decimal places: 0.610, 0.601, 0.600, 0.619.",
        "Compare: 600 < 601 < 610 < 619.",
        "0.600 = 0.6 is the smallest."
      ],
      explanation: [
        "0.6 = 0.600 is smaller than 0.601, 0.61, and 0.619.",
        "Answer: 0.6."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.4</span> or <span class="math">0.35</span>?',
      choices: ["0.4", "0.35", "They are equal", "Cannot tell"],
      answer: "0.4",
      hints: [
        "Write both with two decimal places: 0.40 vs 0.35.",
        "Compare: 40 hundredths vs 35 hundredths.",
        "40 > 35, so 0.4 > 0.35."
      ],
      explanation: [
        "0.4 = 0.40. Compare 40 hundredths to 35 hundredths.",
        "0.40 > 0.35.",
        "Adding a trailing zero helps compare."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are greater than 0.7? <br><span class="math">0.72, 0.069, 0.8, 0.700, 0.65</span>',
      answer: "2",
      hints: [
        "0.7 = 0.700. Check each against 0.700.",
        "0.72 > 0.7 ✓, 0.069 < 0.7 ✗, 0.8 > 0.7 ✓.",
        "0.700 = 0.7 ✗ (not greater, equal), 0.65 < 0.7 ✗. Two are greater."
      ],
      explanation: [
        "0.72 > 0.7 and 0.8 > 0.7. The rest are ≤ 0.7.",
        "Answer: 2.",
        "Remember: equal is not greater than."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">4.302 ☐ 4.32</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Compare digit by digit: ones both 4, tenths both 3.",
        "Hundredths: 0 vs 2.",
        "0 < 2, so 4.302 < 4.32."
      ],
      explanation: [
        "At the hundredths place: 0 < 2.",
        "4.302 < 4.32.",
        "Compare place by place from left to right."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.55</span> or <span class="math">0.5</span>?',
      choices: ["0.55","0.5","They are equal","Cannot tell"],
      answer: "0.55",
      hints: [
        "Write both with two decimal places: 0.55 vs 0.50.",
        "Compare: 55 hundredths vs 50 hundredths.",
        "55 > 50, so 0.55 > 0.5."
      ],
      explanation: [
        "0.55 vs 0.50: 55 > 50.",
        "0.55 is greater.",
        "Adding a trailing zero helps compare."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are less than 0.6? <br><span class="math">0.59, 0.61, 0.599, 0.6, 0.058</span>',
      answer: "3",
      hints: [
        "0.6 = 0.600. Check each against 0.600.",
        "0.59 = 0.590 < 0.600 ✓, 0.61 > 0.600 ✗, 0.599 < 0.600 ✓.",
        "0.6 = 0.600 ✗ (equal, not less), 0.058 < 0.600 ✓. Three are less."
      ],
      explanation: [
        "0.59, 0.599, and 0.058 are less than 0.6.",
        "Answer: 3.",
        "Equal is not less than."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is the largest: <span class="math">0.815, 0.85, 0.8, 0.809</span>?',
      choices: ["0.85","0.815","0.809","0.8"],
      answer: "0.85",
      hints: [
        "Write all with 3 decimal places: 0.815, 0.850, 0.800, 0.809.",
        "Compare: 800 < 809 < 815 < 850.",
        "0.850 = 0.85 is the largest."
      ],
      explanation: [
        "0.85 = 0.850 is the largest of the four numbers.",
        "Answer: 0.85.",
        "Padding with trailing zeros makes comparison easier."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is the largest? <span class="math">0.509, 0.59, 0.519, 0.5</span>',
      choices: ["0.59", "0.519", "0.509", "0.5"],
      answer: "0.59",
      hints: [
        "Write all numbers with three decimal places: 0.509, 0.590, 0.519, 0.500.",
        "Compare: 500, 509, 519, 590.",
        "590 is the largest, so 0.59 is the biggest."
      ],
      explanation: [
        "Rewrite: 0.500, 0.509, 0.519, 0.590.",
        "0.590 > 0.519 > 0.509 > 0.500. The largest is 0.59."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these decimals are greater than 0.75? <span class="math">0.8, 0.07, 0.705, 0.79, 0.750</span>',
      answer: "2",
      hints: [
        "Compare each to 0.750.",
        "0.800 > 0.750 ✓, 0.070 < 0.750 ✗, 0.705 < 0.750 ✗, 0.790 > 0.750 ✓, 0.750 = 0.750 ✗.",
        "Two decimals are greater than 0.75."
      ],
      explanation: [
        "0.8 = 0.800 > 0.750 ✓. 0.79 = 0.790 > 0.750 ✓.",
        "The others are ≤ 0.750. So 2 decimals are greater."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which list is in order from least to greatest?',
      choices: ["0.32, 0.302, 0.3", "0.3, 0.302, 0.32", "0.302, 0.3, 0.32", "0.32, 0.3, 0.302"],
      answer: "0.3, 0.302, 0.32",
      hints: [
        "Write each with three decimal places: 0.320, 0.302, 0.300.",
        "Order from least to greatest: 0.300, 0.302, 0.320.",
        "That matches 0.3, 0.302, 0.32."
      ],
      explanation: [
        "0.300 < 0.302 < 0.320.",
        "So the correct order is 0.3, 0.302, 0.32."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which decimal is greater: <span class="math">0.85</span> or <span class="math">0.8</span>?',
      choices: ["0.85", "0.8", "They are equal", "Cannot tell"],
      answer: "0.85",
      hints: [
        "Compare digit by digit from left to right.",
        "Both have 0.8, but 0.85 has 5 in the hundredths place.",
        "0.85 > 0.80, so 0.85 is greater."
      ],
      explanation: [
        "Write 0.8 as 0.80 to compare: 0.85 vs 0.80.",
        "85 hundredths > 80 hundredths.",
        "So 0.85 is greater."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Order from least to greatest: <span class="math">0.45, 0.405, 0.5</span>. Which comes first? Write it as a decimal.',
      answer: "0.405",
      hints: [
        "Write all with three decimal places: 0.450, 0.405, 0.500.",
        "Compare: 405 < 450 < 500.",
        "0.405 is the smallest."
      ],
      explanation: [
        "Rewrite: 0.450, 0.405, 0.500.",
        "Order: 0.405 < 0.450 < 0.500.",
        "The smallest is 0.405."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which symbol makes this true? <span class="math">3.06 ☐ 3.1</span>',
      choices: ["<", ">", "=", "Cannot tell"],
      answer: "<",
      hints: [
        "Rewrite with the same decimal places: 3.06 vs 3.10.",
        "Compare: 306 hundredths vs 310 hundredths.",
        "306 < 310, so 3.06 < 3.10."
      ],
      explanation: [
        "3.06 = 3.06, 3.1 = 3.10.",
        "3.06 < 3.10.",
        "So 3.06 < 3.1."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which is greater: <span class="math">0.47</span> or <span class="math">0.409</span>?',
      choices: ["0.47", "0.409", "They are equal", "Cannot tell"],
      answer: "0.47",
      hints: [
        "Write both with the same number of decimal places: 0.470 and 0.409.",
        "Compare: 470 thousandths vs 409 thousandths.",
        "470 > 409, so 0.47 > 0.409."
      ],
      explanation: [
        "0.47 = 0.470 and 0.409. Compare digit by digit: tenths are both 4.",
        "Hundredths: 7 > 0, so 0.47 is greater.",
        "0.47 > 0.409."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Order from least to greatest: <span class="math">2.35, 2.305, 2.4</span>. Which number is in the middle?',
      answer: "2.35",
      hints: [
        "Write with equal decimal places: 2.350, 2.305, 2.400.",
        "Order: 2.305 < 2.350 < 2.400.",
        "The middle number is 2.35."
      ],
      explanation: [
        "2.305 < 2.350 < 2.400.",
        "The middle value is 2.35.",
        "Compare digit by digit from left to right."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which list is in order from least to greatest?',
      choices: ["0.08, 0.3, 0.71", "0.3, 0.08, 0.71", "0.71, 0.3, 0.08", "0.08, 0.71, 0.3"],
      answer: "0.08, 0.3, 0.71",
      hints: [
        "Write with equal decimal places: 0.08, 0.30, 0.71.",
        "Compare: 8 < 30 < 71 hundredths.",
        "So 0.08 < 0.3 < 0.71."
      ],
      explanation: [
        "0.08 = 8 hundredths, 0.3 = 30 hundredths, 0.71 = 71 hundredths.",
        "Order: 0.08 < 0.3 < 0.71.",
        "The correct ordering is 0.08, 0.3, 0.71."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which is greater: <span class="math">0.705</span> or <span class="math">0.75</span>?',
      choices: ["0.75","0.705","They are equal","Cannot tell"],
      answer: "0.75",
      hints: [
        "Write both with three decimal places: 0.705 and 0.750.",
        "Compare: 750 > 705.",
        "So 0.75 > 0.705."
      ],
      explanation: [
        "0.705 vs 0.750.",
        "Since 750 > 705, we have 0.75 > 0.705.",
        "Adding trailing zeros helps compare."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Order from least to greatest: <span class="math">0.8, 0.08, 0.88</span>. What is the smallest value? Write it as a decimal.',
      answer: "0.08",
      hints: [
        "Write them all with two decimal places: 0.80, 0.08, 0.88.",
        "Compare: 08 < 80 < 88.",
        "0.08 is the smallest."
      ],
      explanation: [
        "0.08 < 0.80 < 0.88.",
        "The smallest value is 0.08.",
        "Compare digit by digit from left to right."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which list is in order from least to greatest?',
      choices: ["0.302, 0.32, 0.4","0.32, 0.302, 0.4","0.4, 0.32, 0.302","0.302, 0.4, 0.32"],
      answer: "0.302, 0.32, 0.4",
      hints: [
        "Write all with 3 decimals: 0.302, 0.320, 0.400.",
        "Compare: 302 < 320 < 400.",
        "So 0.302 < 0.32 < 0.4."
      ],
      explanation: [
        "0.302 = 302/1000, 0.320 = 320/1000, 0.400 = 400/1000.",
        "302 < 320 < 400, so 0.302 < 0.32 < 0.4.",
        "The correct order is 0.302, 0.32, 0.4."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Order from least to greatest: <span class="math">0.45, 0.405, 0.5</span>',
      choices: ["0.405, 0.45, 0.5", "0.45, 0.405, 0.5", "0.5, 0.45, 0.405", "0.405, 0.5, 0.45"],
      answer: "0.405, 0.45, 0.5",
      hints: [
        "Write all with 3 decimal places: 0.450, 0.405, 0.500.",
        "Compare: 405 < 450 < 500.",
        "Least to greatest: 0.405, 0.45, 0.5."
      ],
      explanation: [
        "Rewrite: 0.405, 0.450, 0.500.",
        "Order: <strong>0.405, 0.45, 0.5</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal is greatest: <span class="math">0.72, 0.7, 0.719</span>?',
      choices: ["0.72", "0.7", "0.719", "They are equal"],
      answer: "0.72",
      hints: [
        "Write with equal decimal places: 0.720, 0.700, 0.719.",
        "Compare: 720 > 719 > 700.",
        "0.72 is the greatest."
      ],
      explanation: [
        "Rewrite: 0.720, 0.700, 0.719.",
        "<strong>0.72</strong> (= 0.720) is the greatest."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'How many of these are greater than 0.6: <span class="math">0.59, 0.601, 0.6, 0.065, 0.61</span>?',
      answer: "2",
      hints: [
        "Compare each to 0.600.",
        "0.590 < 0.600, 0.601 > 0.600, 0.600 = 0.600, 0.065 < 0.600, 0.610 > 0.600.",
        "Two values are greater: 0.601 and 0.61."
      ],
      explanation: [
        "0.601 > 0.6 ✓ and 0.61 > 0.6 ✓.",
        "<strong>2</strong> values are greater than 0.6."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 2: Rounding & Multiplying (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Round <span class="math">3.47</span> to the nearest tenth.',
      choices: ["3.5", "3.4", "3.0", "4.0"],
      answer: "3.5",
      hints: [
        "Look at the hundredths digit: 7.",
        "7 ≥ 5, so round the tenths digit up.",
        "3.47 rounds to 3.5."
      ],
      explanation: [
        "Hundredths digit is 7 ≥ 5, so round up.",
        "3.47 → 3.5."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">6.824</span> to the nearest hundredth.',
      answer: "6.82",
      hints: [
        "Look at the thousandths digit: 4.",
        "4 < 5, so keep the hundredths digit as is.",
        "6.824 rounds to 6.82."
      ],
      explanation: [
        "Thousandths digit is 4 < 5, so round down.",
        "6.824 → 6.82."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">12.951</span> to the nearest tenth.',
      choices: ["13.0", "12.9", "12.95", "13.1"],
      answer: "13.0",
      hints: [
        "Look at the hundredths digit: 5.",
        "5 ≥ 5, so round the tenths digit up: 9 → 10.",
        "Carry over: 12.9 becomes 13.0."
      ],
      explanation: [
        "Hundredths digit is 5, so round up. Tenths 9 rounds to 10, causing carry.",
        "12.951 → 13.0."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Round <span class="math">0.3456</span> to the nearest thousandth.',
      answer: "0.346",
      hints: [
        "Look at the ten-thousandths digit: 6.",
        "6 ≥ 5, so round the thousandths digit up.",
        "0.3456 → 0.346."
      ],
      explanation: [
        "Ten-thousandths digit is 6 ≥ 5, round up.",
        "0.3456 → 0.346."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">9.998</span> to the nearest hundredth.',
      choices: ["10.00", "9.99", "10.0", "9.90"],
      answer: "10.00",
      hints: [
        "Thousandths digit is 8 ≥ 5, so round up hundredths.",
        "9 → 10 in hundredths, which carries through.",
        "9.998 → 10.00."
      ],
      explanation: [
        "Thousandths 8 rounds hundredths 9 up to 10, causing carries.",
        "9.998 → 10.00."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">4.53</span> to the nearest whole number.',
      answer: "5",
      hints: [
        "Look at the tenths digit: 5.",
        "5 ≥ 5, so round up.",
        "4.53 rounds to 5."
      ],
      explanation: [
        "Tenths digit is 5, so round up.",
        "4.53 → 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">7.2849</span> to the nearest hundredth.',
      choices: ["7.28", "7.29", "7.30", "7.285"],
      answer: "7.28",
      hints: [
        "Look at the thousandths digit: 4.",
        "4 < 5, so keep the hundredths digit as is.",
        "7.2849 rounds to 7.28."
      ],
      explanation: [
        "Thousandths digit is 4 < 5, so round down.",
        "7.2849 → 7.28."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">0.965</span> to the nearest tenth.',
      choices: ["1.0", "0.9", "0.97", "0.96"],
      answer: "1.0",
      hints: [
        "Look at the hundredths digit: 6.",
        "6 ≥ 5, so round the tenths digit up: 9 → 10.",
        "Carry: 0.965 rounds to 1.0."
      ],
      explanation: [
        "Hundredths digit 6 rounds tenths 9 up to 10, causing a carry.",
        "0.965 → 1.0."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">8.34</span> to the nearest whole number.',
      answer: "8",
      hints: [
        "Look at the tenths digit: 3.",
        "3 < 5, so round down.",
        "8.34 rounds to 8."
      ],
      explanation: [
        "Tenths digit is 3 < 5, so round down.",
        "8.34 → 8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">5.6781</span> to the nearest hundredth.',
      choices: ["5.68", "5.67", "5.69", "5.678"],
      answer: "5.68",
      hints: [
        "Look at the thousandths digit: 8.",
        "8 ≥ 5, so round the hundredths digit up.",
        "5.6781 rounds to 5.68."
      ],
      explanation: [
        "Thousandths digit is 8 ≥ 5, so round up.",
        "5.6781 → 5.68."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Round <span class="math">2.449</span> to the nearest tenth.',
      answer: "2.4",
      hints: [
        "Look at the hundredths digit: 4.",
        "4 < 5, so keep the tenths digit as is.",
        "2.449 rounds to 2.4."
      ],
      explanation: [
        "Hundredths digit is 4 < 5, so round down.",
        "2.449 → 2.4."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Round <span class="math">7.82</span> to the nearest whole number.',
      choices: ["8", "7", "7.8", "7.9"],
      answer: "8",
      hints: [
        "Look at the tenths digit: 8.",
        "8 ≥ 5, so round up.",
        "7.82 rounds to 8."
      ],
      explanation: [
        "Tenths digit is 8 ≥ 5, so round up.",
        "7.82 → 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Round <span class="math">3.876</span> to the nearest tenth.',
      answer: "3.9",
      hints: [
        "Look at the hundredths digit: 7.",
        "7 ≥ 5, so round the tenths digit up.",
        "3.876 rounds to 3.9."
      ],
      explanation: [
        "Hundredths digit is 7 ≥ 5, so round up.",
        "3.876 → 3.9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">14.995</span> to the nearest hundredth.',
      choices: ["15.00", "14.99", "15.0", "14.90"],
      answer: "15.00",
      hints: [
        "Thousandths digit is 5 ≥ 5, so round up hundredths.",
        "9 → 10 in hundredths, which carries through.",
        "14.995 → 15.00."
      ],
      explanation: [
        "Thousandths 5 rounds hundredths 9 up to 10, causing carries.",
        "14.995 → 15.00."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">6.72</span> to the nearest whole number.',
      answer: "7",
      hints: [
        "Look at the tenths digit: 7.",
        "7 ≥ 5, so round up.",
        "6.72 rounds to 7."
      ],
      explanation: [
        "Tenths digit is 7 ≥ 5, so round up.",
        "6.72 → 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">8.945</span> to the nearest tenth.',
      choices: ["8.9", "9.0", "8.95", "8.94"],
      answer: "8.9",
      hints: [
        "Look at the hundredths digit: 4.",
        "4 < 5, so keep the tenths digit as is.",
        "8.945 rounds to 8.9."
      ],
      explanation: [
        "Hundredths digit is 4 < 5, so round down.",
        "8.945 → 8.9."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">11.496</span> to the nearest hundredth.',
      choices: ["11.50", "11.49", "11.40", "11.496"],
      answer: "11.50",
      hints: [
        "Look at the thousandths digit: 6.",
        "6 ≥ 5, so round the hundredths digit up: 9 → 10.",
        "Carry: 11.496 rounds to 11.50."
      ],
      explanation: [
        "Thousandths digit 6 rounds hundredths 9 up to 10, causing a carry.",
        "11.496 → 11.50."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">5.27</span> to the nearest tenth.',
      answer: "5.3",
      hints: [
        "Look at the hundredths digit: 7.",
        "7 ≥ 5, so round the tenths digit up.",
        "5.27 rounds to 5.3."
      ],
      explanation: [
        "Hundredths digit is 7 ≥ 5, so round up.",
        "5.27 → 5.3.",
        "The tenths digit 2 becomes 3."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">6.348</span> to the nearest hundredth.',
      choices: ["6.35", "6.34", "6.30", "6.4"],
      answer: "6.35",
      hints: [
        "Look at the thousandths digit: 8.",
        "8 ≥ 5, so round the hundredths digit up.",
        "6.348 rounds to 6.35."
      ],
      explanation: [
        "Thousandths digit is 8 ≥ 5, so round up.",
        "6.348 → 6.35.",
        "The hundredths digit 4 becomes 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">3.142</span> to the nearest tenth.',
      choices: ["3.1", "3.2", "3.14", "3.0"],
      answer: "3.1",
      hints: [
        "Look at the hundredths digit: 4.",
        "4 < 5, so keep the tenths digit as is.",
        "3.142 rounds to 3.1."
      ],
      explanation: [
        "Hundredths digit is 4 < 5, so round down.",
        "3.142 → 3.1.",
        "The tenths digit stays at 1."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Round <span class="math">2.64</span> to the nearest tenth.',
      choices: ["2.6","2.7","3.0","2.0"],
      answer: "2.6",
      hints: [
        "Look at the hundredths digit: 4.",
        "4 < 5, so keep the tenths digit as is.",
        "2.64 rounds to 2.6."
      ],
      explanation: [
        "Hundredths digit is 4 < 5, so round down.",
        "2.64 → 2.6.",
        "The tenths digit stays at 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Round <span class="math">4.567</span> to the nearest hundredth.',
      answer: "4.57",
      hints: [
        "Look at the thousandths digit: 7.",
        "7 ≥ 5, so round the hundredths digit up.",
        "4.567 rounds to 4.57."
      ],
      explanation: [
        "Thousandths digit is 7 ≥ 5, so round up.",
        "4.567 → 4.57.",
        "The hundredths digit 6 becomes 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">7.995</span> to the nearest hundredth.',
      choices: ["8.00","7.99","8.0","7.90"],
      answer: "8.00",
      hints: [
        "Thousandths digit is 5 ≥ 5, so round up hundredths.",
        "9 → 10 in hundredths, which carries through.",
        "7.995 → 8.00."
      ],
      explanation: [
        "Thousandths 5 rounds hundredths 9 up to 10, causing carries.",
        "7.995 → 8.00.",
        "Multiple carries can happen when rounding."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Round <span class="math">6.847</span> to the nearest tenth.',
      choices: ["6.8", "6.9", "6.85", "7.0"],
      answer: "6.8",
      hints: [
        "Look at the hundredths digit (4) to decide.",
        "Since 4 < 5, round down.",
        "6.847 rounds to 6.8."
      ],
      explanation: [
        "The tenths digit is 8. The hundredths digit is 4.",
        "4 < 5, so round down: 6.8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Estimate <span class="math">4.8 \times 3.2</span> by rounding each to the nearest whole number.',
      answer: "15",
      hints: [
        "Round 4.8 to 5 and 3.2 to 3.",
        "Multiply the rounded numbers: 5 × 3.",
        "5 × 3 = 15."
      ],
      explanation: [
        "4.8 ≈ 5, 3.2 ≈ 3.",
        "5 × 3 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">12.3451</span> to the nearest hundredth.',
      choices: ["12.35", "12.34", "12.345", "12.3"],
      answer: "12.35",
      hints: [
        "Look at the thousandths digit (5) to decide.",
        "The hundredths digit is 4, thousandths is 5.",
        "Since 5 ≥ 5, round up: 12.35."
      ],
      explanation: [
        "Hundredths digit: 4. Thousandths digit: 5.",
        "5 ≥ 5, round up: 12.34 becomes 12.35."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Round <span class="math">4.73</span> to the nearest tenth.',
      choices: ["4.7", "4.8", "5.0", "4.73"],
      answer: "4.7",
      hints: [
        "Look at the hundredths digit: 3.",
        "Since 3 < 5, round down.",
        "4.73 rounds to 4.7."
      ],
      explanation: [
        "The hundredths digit is 3 (less than 5), so round down.",
        "4.73 ≈ 4.7.",
        "The tenths digit stays the same."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Round <span class="math">8.465</span> to the nearest hundredth.',
      answer: "8.47",
      hints: [
        "Look at the thousandths digit: 5.",
        "Since 5 ≥ 5, round up.",
        "8.465 rounds to 8.47."
      ],
      explanation: [
        "The thousandths digit is 5 (≥ 5), so round up.",
        "8.465 ≈ 8.47.",
        "The hundredths digit goes from 6 to 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">12.349</span> to the nearest tenth.',
      choices: ["12.3", "12.4", "12.35", "12.5"],
      answer: "12.3",
      hints: [
        "Look at the hundredths digit: 4.",
        "Since 4 < 5, round down.",
        "12.349 rounds to 12.3."
      ],
      explanation: [
        "The hundredths digit is 4 (less than 5), so round down.",
        "12.349 ≈ 12.3.",
        "The tenths digit stays the same."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Round <span class="math">4.367</span> to the nearest tenth.',
      choices: ["4.4", "4.3", "4.37", "4.0"],
      answer: "4.4",
      hints: [
        "Look at the hundredths digit (6) to decide.",
        "Since 6 ≥ 5, round the tenths digit up.",
        "3 rounds up to 4, so 4.367 ≈ 4.4."
      ],
      explanation: [
        "The tenths digit is 3. The hundredths digit is 6 (≥ 5), so round up.",
        "4.367 rounded to the nearest tenth is 4.4.",
        "Always look one digit to the right of the rounding place."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3.6 \times 0.4</span>?',
      answer: "1.44",
      hints: [
        "Multiply as whole numbers: 36 × 4 = 144.",
        "Count total decimal places: 1 + 1 = 2.",
        "Place the decimal: 1.44."
      ],
      explanation: [
        "36 × 4 = 144. Total decimal places = 2.",
        "Place decimal 2 places from right: 1.44.",
        "The answer is 1.44."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">9.845</span> to the nearest hundredth.',
      choices: ["9.85", "9.84", "9.8", "9.9"],
      answer: "9.85",
      hints: [
        "Look at the thousandths digit (5) to decide.",
        "Since 5 ≥ 5, round the hundredths digit up.",
        "4 rounds up to 5, so 9.845 ≈ 9.85."
      ],
      explanation: [
        "The hundredths digit is 4. The thousandths digit is 5 (≥ 5), so round up.",
        "9.845 rounded to the nearest hundredth is 9.85.",
        "When the digit is exactly 5, we round up."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">6.847</span> to the nearest hundredth.',
      choices: ["6.85","6.84","6.8","6.9"],
      answer: "6.85",
      hints: [
        "Look at the thousandths digit: 7.",
        "Since 7 ≥ 5, round the hundredths digit up.",
        "4 rounds up to 5, so 6.85."
      ],
      explanation: [
        "The thousandths digit is 7 (≥ 5), so round up.",
        "6.847 → 6.85 (hundredths digit 4 becomes 5).",
        "The answer is 6.85."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Round <span class="math">3.24</span> to the nearest tenth.',
      answer: "3.2",
      hints: [
        "Look at the hundredths digit: 4.",
        "Since 4 < 5, round down (keep the tenths digit).",
        "3.24 rounds to 3.2."
      ],
      explanation: [
        "The hundredths digit is 4 (< 5), so round down.",
        "3.24 → 3.2.",
        "The answer is 3.2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">0.6 \times 0.8</span>?',
      choices: ["0.48","4.8","0.048","48"],
      answer: "0.48",
      hints: [
        "Multiply: 6 × 8 = 48.",
        "Count decimal places: 1 + 1 = 2 decimal places.",
        "Place the decimal: 0.48."
      ],
      explanation: [
        "6 × 8 = 48. Total decimal places: 2.",
        "So 0.6 × 0.8 = 0.48.",
        "The answer is 0.48."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Round <span class="math">3.4567</span> to the nearest hundredth.',
      answer: "3.46",
      hints: [
        "The hundredths digit is 5.",
        "Look at the next digit (thousandths): 6 ≥ 5, so round up.",
        "3.4567 rounds to 3.46."
      ],
      explanation: [
        "Hundredths digit is 5. The next digit is 6 (≥ 5), so round up.",
        "3.4567 ≈ <strong>3.46</strong>."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Round <span class="math">8.7341</span> to the nearest tenth.',
      choices: ["8.7", "8.8", "8.73", "9.0"],
      answer: "8.7",
      hints: [
        "The tenths digit is 7.",
        "Look at the next digit (hundredths): 3 < 5, so keep the 7.",
        "8.7341 rounds to 8.7."
      ],
      explanation: [
        "Tenths digit is 7. The next digit is 3 (< 5), so round down.",
        "8.7341 ≈ <strong>8.7</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Round <span class="math">12.9951</span> to the nearest hundredth.',
      answer: "13.00",
      hints: [
        "The hundredths digit is 9.",
        "The next digit is 5, so round up: 9 becomes 10.",
        "Carry over: 12.9951 rounds to 13.00."
      ],
      explanation: [
        "Hundredths = 9, thousandths = 5 → round up.",
        "0.99 rounds to 1.00, so 12.9951 ≈ <strong>13.00</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 3: Fractions to Decimals (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">1/4</span> to a decimal.',
      choices: ["0.25", "0.4", "0.14", "0.75"],
      answer: "0.25",
      hints: [
        "Divide the numerator by the denominator: 1 ÷ 4.",
        "4 goes into 1.00: 0.25.",
        "1/4 = 0.25."
      ],
      explanation: [
        "1 ÷ 4 = 0.25.",
        "1/4 = 0.25."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3/5</span> to a decimal.',
      answer: "0.6",
      hints: [
        "Divide 3 by 5.",
        "3 ÷ 5 = 0.6.",
        "3/5 = 0.6."
      ],
      explanation: [
        "3 ÷ 5 = 0.6.",
        "3/5 = 0.6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">7/8</span> to a decimal.',
      choices: ["0.875", "0.78", "0.85", "0.7"],
      answer: "0.875",
      hints: [
        "Divide 7 by 8.",
        "7.000 ÷ 8: 8 goes into 70 eight times (64), remainder 6…",
        "Continue: 0.875."
      ],
      explanation: [
        "7 ÷ 8 = 0.875.",
        "7/8 = 0.875."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">5/16</span> to a decimal.',
      answer: "0.3125",
      hints: [
        "Divide 5 by 16.",
        "5.0000 ÷ 16: work through the long division.",
        "5/16 = 0.3125."
      ],
      explanation: [
        "5 ÷ 16 = 0.3125.",
        "5/16 = 0.3125."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.2</span>?',
      choices: ["1/5", "1/2", "2/10", "Both 1/5 and 2/10"],
      answer: "Both 1/5 and 2/10",
      hints: [
        "0.2 = 2/10.",
        "Simplify 2/10: divide by 2 → 1/5.",
        "Both 1/5 and 2/10 equal 0.2."
      ],
      explanation: [
        "0.2 = 2/10 = 1/5.",
        "Both 1/5 and 2/10 are correct."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">1/2</span> to a decimal.',
      answer: "0.5",
      hints: [
        "Divide 1 by 2.",
        "1 ÷ 2 = 0.5.",
        "1/2 = 0.5."
      ],
      explanation: [
        "1 ÷ 2 = 0.5.",
        "1/2 = 0.5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">9/20</span> to a decimal.',
      choices: ["0.45", "0.9", "4.5", "0.09"],
      answer: "0.45",
      hints: [
        "Divide 9 by 20.",
        "9 ÷ 20 = 0.45.",
        "Or: 9/20 = 45/100 = 0.45."
      ],
      explanation: [
        "9 ÷ 20 = 0.45.",
        "9/20 = 0.45."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">11/25</span> to a decimal.',
      answer: "0.44",
      hints: [
        "Divide 11 by 25.",
        "11 ÷ 25 = 0.44.",
        "Or: 11/25 = 44/100 = 0.44."
      ],
      explanation: [
        "11 ÷ 25 = 0.44.",
        "11/25 = 0.44."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">3/10</span> to a decimal.',
      choices: ["0.3", "0.03", "3.0", "0.33"],
      answer: "0.3",
      hints: [
        "Divide 3 by 10.",
        "3 ÷ 10 = 0.3.",
        "3/10 = 0.3."
      ],
      explanation: [
        "3 ÷ 10 = 0.3.",
        "3/10 = 0.3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">13/20</span> to a decimal.',
      answer: "0.65",
      hints: [
        "Divide 13 by 20.",
        "13 ÷ 20 = 0.65.",
        "Or: 13/20 = 65/100 = 0.65."
      ],
      explanation: [
        "13 ÷ 20 = 0.65.",
        "13/20 = 0.65."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">5/8</span> to a decimal.',
      choices: ["0.625", "0.58", "0.65", "0.5"],
      answer: "0.625",
      hints: [
        "Divide 5 by 8.",
        "5.000 ÷ 8: 8 goes into 50 six times (48), remainder 2…",
        "Continue: 0.625."
      ],
      explanation: [
        "5 ÷ 8 = 0.625.",
        "5/8 = 0.625."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">1/5</span> to a decimal.',
      answer: "0.2",
      hints: [
        "Divide 1 by 5.",
        "1 ÷ 5 = 0.2.",
        "1/5 = 0.2."
      ],
      explanation: [
        "1 ÷ 5 = 0.2.",
        "1/5 = 0.2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">11/16</span> to a decimal.',
      choices: ["0.6875", "0.1116", "0.69", "0.6125"],
      answer: "0.6875",
      hints: [
        "Divide 11 by 16.",
        "11.0000 ÷ 16: work through the long division.",
        "11/16 = 0.6875."
      ],
      explanation: [
        "11 ÷ 16 = 0.6875.",
        "11/16 = 0.6875."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.375</span>?',
      choices: ["3/8", "3/5", "37/100", "375/10"],
      answer: "3/8",
      hints: [
        "0.375 = 375/1000.",
        "Simplify: GCD(375, 1000) = 125.",
        "375 ÷ 125 = 3, 1000 ÷ 125 = 8 → 3/8."
      ],
      explanation: [
        "0.375 = 375/1000 = 3/8.",
        "Answer: 3/8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">7/10</span> to a decimal.',
      answer: "0.7",
      hints: [
        "Divide 7 by 10.",
        "7 ÷ 10 = 0.7.",
        "7/10 = 0.7."
      ],
      explanation: [
        "7 ÷ 10 = 0.7.",
        "7/10 = 0.7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">3/16</span> to a decimal.',
      choices: ["0.1875", "0.316", "0.19", "0.375"],
      answer: "0.1875",
      hints: [
        "Divide 3 by 16.",
        "3.0000 ÷ 16: work through the long division.",
        "3/16 = 0.1875."
      ],
      explanation: [
        "3 ÷ 16 = 0.1875.",
        "3/16 = 0.1875."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.8</span>?',
      choices: ["4/5", "8/100", "4/8", "8/5"],
      answer: "4/5",
      hints: [
        "0.8 = 8/10.",
        "Simplify 8/10: divide by 2 → 4/5.",
        "4/5 = 0.8."
      ],
      explanation: [
        "0.8 = 8/10 = 4/5.",
        "Answer: 4/5."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">2/5</span> to a decimal.',
      answer: "0.4",
      hints: [
        "Divide 2 by 5.",
        "2 ÷ 5 = 0.4.",
        "2/5 = 0.4."
      ],
      explanation: [
        "2 ÷ 5 = 0.4.",
        "2/5 = 0.4.",
        "Or think: 2/5 = 4/10 = 0.4."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">3/8</span> to a decimal.',
      choices: ["0.375", "0.38", "0.35", "0.3"],
      answer: "0.375",
      hints: [
        "Divide 3 by 8.",
        "3.000 ÷ 8 = 0.375.",
        "3/8 = 0.375."
      ],
      explanation: [
        "3 ÷ 8 = 0.375.",
        "3/8 = 0.375.",
        "Use long division: 8 into 30 is 3 remainder 6, etc."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.625</span>?',
      choices: ["5/8", "6/10", "62/100", "5/6"],
      answer: "5/8",
      hints: [
        "0.625 = 625/1000.",
        "Simplify: GCD(625, 1000) = 125.",
        "625 ÷ 125 = 5, 1000 ÷ 125 = 8 → 5/8."
      ],
      explanation: [
        "0.625 = 625/1000 = 5/8.",
        "Answer: 5/8.",
        "Divide numerator and denominator by their GCD of 125."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">4/5</span> to a decimal.',
      choices: ["0.8","0.45","0.4","0.85"],
      answer: "0.8",
      hints: [
        "Divide 4 by 5.",
        "4 ÷ 5 = 0.8.",
        "4/5 = 0.8."
      ],
      explanation: [
        "4 ÷ 5 = 0.8.",
        "4/5 = 0.8.",
        "Or think: 4/5 = 8/10 = 0.8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">7/16</span> to a decimal.',
      answer: "0.4375",
      hints: [
        "Divide 7 by 16.",
        "7.0000 ÷ 16: work through the long division.",
        "7/16 = 0.4375."
      ],
      explanation: [
        "7 ÷ 16 = 0.4375.",
        "7/16 = 0.4375.",
        "Use long division to compute."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.125</span>?',
      choices: ["1/8","1/5","12/100","125/10"],
      answer: "1/8",
      hints: [
        "0.125 = 125/1000.",
        "Simplify: GCD(125, 1000) = 125.",
        "125 ÷ 125 = 1, 1000 ÷ 125 = 8 → 1/8."
      ],
      explanation: [
        "0.125 = 125/1000 = 1/8.",
        "Answer: 1/8.",
        "Divide numerator and denominator by their GCD of 125."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">\frac{3}{5}</span> to a decimal.',
      answer: "0.6",
      hints: [
        "Divide the numerator by the denominator: 3 ÷ 5.",
        "3 ÷ 5 = 0.6.",
        "You can also think: 3/5 = 6/10 = 0.6."
      ],
      explanation: [
        "3 ÷ 5 = 0.6.",
        "Or: 3/5 = 6/10 = 0.6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">\frac{7}{8}</span>?',
      choices: ["0.875", "0.78", "0.857", "0.87"],
      answer: "0.875",
      hints: [
        "Divide 7 by 8.",
        "7 ÷ 8 = 0.875.",
        "Check: 0.875 × 8 = 7 ✓."
      ],
      explanation: [
        "7 ÷ 8 = 0.875.",
        "So 7/8 = 0.875."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">\frac{11}{20}</span> to a decimal.',
      answer: "0.55",
      hints: [
        "Divide 11 by 20.",
        "11 ÷ 20 = 0.55.",
        "Or: 11/20 = 55/100 = 0.55."
      ],
      explanation: [
        "11 ÷ 20 = 0.55.",
        "Or: multiply top and bottom by 5: 55/100 = 0.55."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3/5</span> to a decimal.',
      answer: "0.6",
      hints: [
        "Divide the numerator by the denominator: 3 ÷ 5.",
        "3 ÷ 5 = 0.6.",
        "The decimal is 0.6."
      ],
      explanation: [
        "3 ÷ 5 = 0.6.",
        "So 3/5 = 0.6.",
        "You can also multiply top and bottom by 2: 6/10 = 0.6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">7/8</span>?',
      choices: ["0.875", "0.78", "0.7", "0.87"],
      answer: "0.875",
      hints: [
        "Divide the numerator by the denominator: 7 ÷ 8.",
        "7 ÷ 8 = 0.875.",
        "The decimal is 0.875."
      ],
      explanation: [
        "7 ÷ 8 = 0.875.",
        "So 7/8 = 0.875.",
        "Long division: 70÷8=8 R6, 60÷8=7 R4, 40÷8=5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">1/4</span> to a decimal.',
      choices: ["0.25", "0.4", "0.14", "0.5"],
      answer: "0.25",
      hints: [
        "Divide the numerator by the denominator: 1 ÷ 4.",
        "1 ÷ 4 = 0.25.",
        "The decimal is 0.25."
      ],
      explanation: [
        "1 ÷ 4 = 0.25.",
        "So 1/4 = 0.25.",
        "You can also think: 25/100 = 0.25."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">3/5</span> to a decimal.',
      answer: "0.6",
      hints: [
        "Divide the numerator by the denominator: 3 ÷ 5.",
        "3 ÷ 5 = 0.6.",
        "The decimal is 0.6."
      ],
      explanation: [
        "3 ÷ 5 = 0.6.",
        "So 3/5 = 0.6.",
        "You can also find an equivalent fraction with denominator 10: 6/10 = 0.6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">7/8</span> to a decimal.',
      choices: ["0.875", "0.78", "0.87", "0.75"],
      answer: "0.875",
      hints: [
        "Divide 7 by 8.",
        "7 ÷ 8 = 0.875.",
        "The decimal is 0.875."
      ],
      explanation: [
        "7 ÷ 8 = 0.875.",
        "So 7/8 = 0.875.",
        "This is a terminating decimal."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">11/20</span> to a decimal.',
      choices: ["0.55", "0.511", "0.65", "0.1120"],
      answer: "0.55",
      hints: [
        "Divide 11 by 20.",
        "11 ÷ 20 = 0.55.",
        "Or find an equivalent fraction: 11/20 = 55/100 = 0.55."
      ],
      explanation: [
        "11 ÷ 20 = 0.55.",
        "So 11/20 = 0.55.",
        "Multiplying top and bottom by 5: 55/100 = 0.55."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">\frac{7}{8}</span> to a decimal.',
      answer: "0.875",
      hints: [
        "Divide 7 by 8.",
        "7 ÷ 8 = 0.875.",
        "The decimal is 0.875."
      ],
      explanation: [
        "7 ÷ 8 = 0.875.",
        "So 7/8 = 0.875.",
        "Divide the numerator by the denominator."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">\frac{3}{5}</span> to a decimal.',
      choices: ["0.6","0.35","0.53","6"],
      answer: "0.6",
      hints: [
        "Divide 3 by 5.",
        "3 ÷ 5 = 0.6.",
        "The decimal is 0.6."
      ],
      explanation: [
        "3 ÷ 5 = 0.6.",
        "So 3/5 = 0.6.",
        "Multiply both by 2: 6/10 = 0.6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">\frac{5}{16}</span> to a decimal.',
      choices: ["0.3125","0.516","0.325","0.512"],
      answer: "0.3125",
      hints: [
        "Divide 5 by 16.",
        "5 ÷ 16 = 0.3125.",
        "The decimal is 0.3125."
      ],
      explanation: [
        "5 ÷ 16 = 0.3125.",
        "So 5/16 = 0.3125.",
        "Use long division to compute."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">7/8</span> to a decimal.',
      answer: "0.875",
      hints: [
        "Divide 7 by 8.",
        "7 ÷ 8 = 0.875.",
        "You can also think: 7/8 = 875/1000."
      ],
      explanation: [
        "7 ÷ 8 = <strong>0.875</strong>.",
        "This is a terminating decimal."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal is equal to <span class="math">3/5</span>?',
      choices: ["0.6", "0.35", "0.53", "0.75"],
      answer: "0.6",
      hints: [
        "Divide 3 by 5.",
        "3 ÷ 5 = 0.6.",
        "Or multiply top and bottom by 2: 6/10 = 0.6."
      ],
      explanation: [
        "3/5 = 3 ÷ 5 = <strong>0.6</strong>.",
        "You can also convert: 3/5 = 6/10 = 0.6."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">11/16</span> to a decimal.',
      answer: "0.6875",
      hints: [
        "Divide 11 by 16.",
        "11 ÷ 16: 110 ÷ 16 = 6 R 14, 140 ÷ 16 = 8 R 12, 120 ÷ 16 = 7 R 8, 80 ÷ 16 = 5.",
        "11/16 = 0.6875."
      ],
      explanation: [
        "11 ÷ 16 = <strong>0.6875</strong>.",
        "Long division gives the terminating decimal 0.6875."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 4: Decimal ↔ Fraction (difficulty 1-2)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">0.75</span> to a fraction in simplest form.',
      choices: ["3/4", "75/10", "7/5", "15/20"],
      answer: "3/4",
      hints: [
        "0.75 = 75/100.",
        "Simplify: divide by 25.",
        "75/100 = 3/4."
      ],
      explanation: [
        "0.75 = 75/100.",
        "Simplify: 75 ÷ 25 = 3, 100 ÷ 25 = 4 → 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">0.4</span> to a fraction. Write in simplest form.',
      answer: "2/5",
      hints: [
        "0.4 = 4/10.",
        "Simplify by dividing by 2.",
        "4/10 = 2/5."
      ],
      explanation: [
        "0.4 = 4/10 = 2/5.",
        "Answer: 2/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">2/5</span> to a decimal.',
      choices: ["0.4", "0.25", "2.5", "0.2"],
      answer: "0.4",
      hints: [
        "Divide 2 by 5.",
        "2 ÷ 5 = 0.4.",
        "2/5 = 0.4."
      ],
      explanation: [
        "2 ÷ 5 = 0.4.",
        "2/5 = 0.4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.125</span> to a fraction. Write in simplest form.',
      answer: "1/8",
      hints: [
        "0.125 = 125/1000.",
        "Simplify: GCD(125, 1000) = 125.",
        "125 ÷ 125 = 1, 1000 ÷ 125 = 8 → 1/8."
      ],
      explanation: [
        "0.125 = 125/1000 = 1/8.",
        "Answer: 1/8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">7/20</span>?',
      choices: ["0.35", "0.7", "3.5", "0.07"],
      answer: "0.35",
      hints: [
        "Divide 7 by 20.",
        "7 ÷ 20 = 0.35.",
        "Or: 7/20 = 35/100 = 0.35."
      ],
      explanation: [
        "7 ÷ 20 = 0.35.",
        "7/20 = 0.35."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.6</span> to a fraction in simplest form.',
      choices: ["3/5", "6/10", "2/3", "6/100"],
      answer: "3/5",
      hints: [
        "0.6 = 6/10.",
        "Simplify by dividing by 2.",
        "6/10 = 3/5."
      ],
      explanation: [
        "0.6 = 6/10 = 3/5.",
        "Answer: 3/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">3/8</span> to a decimal.',
      answer: "0.375",
      hints: [
        "Divide 3 by 8.",
        "3.000 ÷ 8 = 0.375.",
        "3/8 = 0.375."
      ],
      explanation: [
        "3 ÷ 8 = 0.375.",
        "3/8 = 0.375."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">0.25</span> to a fraction in simplest form.',
      choices: ["1/4", "25/10", "1/2", "2/5"],
      answer: "1/4",
      hints: [
        "0.25 = 25/100.",
        "Simplify: divide both by 25.",
        "25/100 = 1/4."
      ],
      explanation: [
        "0.25 = 25/100 = 1/4.",
        "Answer: 1/4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.85</span> to a fraction. Write in simplest form.',
      answer: "17/20",
      hints: [
        "0.85 = 85/100.",
        "Simplify by dividing by 5.",
        "85/100 = 17/20."
      ],
      explanation: [
        "0.85 = 85/100 = 17/20.",
        "Answer: 17/20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">9/16</span>?',
      choices: ["0.5625", "0.916", "0.56", "0.09"],
      answer: "0.5625",
      hints: [
        "Divide 9 by 16.",
        "9 ÷ 16 = 0.5625.",
        "9/16 = 0.5625."
      ],
      explanation: [
        "9 ÷ 16 = 0.5625.",
        "9/16 = 0.5625."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">0.5</span> to a fraction. Write in simplest form.',
      answer: "1/2",
      hints: [
        "0.5 = 5/10.",
        "Simplify by dividing by 5.",
        "5/10 = 1/2."
      ],
      explanation: [
        "0.5 = 5/10 = 1/2.",
        "Answer: 1/2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.15</span> to a fraction in simplest form.',
      choices: ["3/20", "15/10", "1/5", "3/10"],
      answer: "3/20",
      hints: [
        "0.15 = 15/100.",
        "Simplify by dividing by 5.",
        "15/100 = 3/20."
      ],
      explanation: [
        "0.15 = 15/100 = 3/20.",
        "Answer: 3/20."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">0.8</span> to a fraction. Write in simplest form.',
      answer: "4/5",
      hints: [
        "0.8 = 8/10.",
        "Simplify by dividing by 2.",
        "8/10 = 4/5."
      ],
      explanation: [
        "0.8 = 8/10 = 4/5.",
        "Answer: 4/5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">11/40</span>?',
      choices: ["0.275", "0.1140", "2.75", "0.0275"],
      answer: "0.275",
      hints: [
        "Divide 11 by 40.",
        "11 ÷ 40 = 0.275.",
        "11/40 = 0.275."
      ],
      explanation: [
        "11 ÷ 40 = 0.275.",
        "11/40 = 0.275."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">0.35</span> to a fraction. Write in simplest form.',
      answer: "7/20",
      hints: [
        "0.35 = 35/100.",
        "Simplify by dividing by 5.",
        "35/100 = 7/20."
      ],
      explanation: [
        "0.35 = 35/100 = 7/20.",
        "Answer: 7/20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">3/16</span>?',
      choices: ["0.1875", "0.316", "0.1875", "0.375"],
      answer: "0.1875",
      hints: [
        "Divide 3 by 16.",
        "3 ÷ 16 = 0.1875.",
        "3/16 = 0.1875."
      ],
      explanation: [
        "3 ÷ 16 = 0.1875.",
        "3/16 = 0.1875."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.45</span> to a fraction in simplest form.',
      choices: ["9/20", "45/10", "4/5", "9/10"],
      answer: "9/20",
      hints: [
        "0.45 = 45/100.",
        "Simplify by dividing by 5.",
        "45/100 = 9/20."
      ],
      explanation: [
        "0.45 = 45/100 = 9/20.",
        "Answer: 9/20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.625</span> to a fraction. Write in simplest form.',
      answer: "5/8",
      hints: [
        "0.625 = 625/1000.",
        "Find the GCD: GCD(625, 1000) = 125.",
        "625 ÷ 125 = 5, 1000 ÷ 125 = 8 → 5/8."
      ],
      explanation: [
        "0.625 = 625/1000 = 5/8.",
        "Answer: 5/8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which decimal equals <span class="math">1/5</span>?',
      choices: ["0.2", "0.5", "0.15", "1.5"],
      answer: "0.2",
      hints: [
        "Divide 1 by 5.",
        "1 ÷ 5 = 0.2.",
        "1/5 = 0.2."
      ],
      explanation: [
        "1 ÷ 5 = 0.2.",
        "1/5 = 0.2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.72</span> to a fraction in simplest form.',
      choices: ["18/25", "72/10", "36/50", "7/10"],
      answer: "18/25",
      hints: [
        "0.72 = 72/100.",
        "Simplify: GCD(72, 100) = 4.",
        "72 ÷ 4 = 18, 100 ÷ 4 = 25 → 18/25."
      ],
      explanation: [
        "0.72 = 72/100 = 18/25.",
        "Answer: 18/25."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">0.6</span> to a fraction. Write in simplest form.',
      answer: "3/5",
      hints: [
        "0.6 = 6/10.",
        "Simplify by dividing by 2.",
        "6/10 = 3/5."
      ],
      explanation: [
        "0.6 = 6/10 = 3/5.",
        "Answer: 3/5.",
        "Divide both numerator and denominator by 2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal equals <span class="math">13/25</span>?',
      choices: ["0.52","0.1325","1.3","0.052"],
      answer: "0.52",
      hints: [
        "Divide 13 by 25.",
        "13 ÷ 25 = 0.52.",
        "Or: 13/25 = 52/100 = 0.52."
      ],
      explanation: [
        "13 ÷ 25 = 0.52.",
        "13/25 = 0.52.",
        "Multiply top and bottom by 4 to get 52/100."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.375</span> to a fraction in simplest form.',
      choices: ["3/8","37/100","375/10","15/40"],
      answer: "3/8",
      hints: [
        "0.375 = 375/1000.",
        "Simplify: GCD(375, 1000) = 125.",
        "375 ÷ 125 = 3, 1000 ÷ 125 = 8 → 3/8."
      ],
      explanation: [
        "0.375 = 375/1000 = 3/8.",
        "Answer: 3/8.",
        "Divide both by 125."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What fraction is equal to <span class="math">0.35</span>?',
      choices: ["7/20", "35/10", "7/10", "35/1000"],
      answer: "7/20",
      hints: [
        "0.35 = 35/100.",
        "Simplify: GCD(35, 100) = 5.",
        "35 ÷ 5 = 7, 100 ÷ 5 = 20. So 0.35 = 7/20."
      ],
      explanation: [
        "0.35 = 35/100.",
        "Simplify: 35/100 = 7/20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.84</span> to a fraction in simplest form. What is the numerator?',
      answer: "21",
      hints: [
        "0.84 = 84/100.",
        "Find GCD(84, 100). Both are divisible by 4.",
        "84 ÷ 4 = 21, 100 ÷ 4 = 25. So 0.84 = 21/25."
      ],
      explanation: [
        "0.84 = 84/100. GCD(84, 100) = 4.",
        "84/100 = 21/25. The numerator is 21."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which decimal is equal to <span class="math">\frac{9}{16}</span>?',
      choices: ["0.5625", "0.916", "0.5616", "0.56"],
      answer: "0.5625",
      hints: [
        "Divide 9 by 16.",
        "9 ÷ 16 = 0.5625.",
        "Check: 0.5625 × 16 = 9 ✓."
      ],
      explanation: [
        "9 ÷ 16 = 0.5625.",
        "So 9/16 = 0.5625."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Convert <span class="math">0.6</span> to a fraction in simplest form.',
      choices: ["3/5", "6/10", "6/100", "2/3"],
      answer: "3/5",
      hints: [
        "0.6 = 6/10.",
        "Simplify 6/10 by dividing both by 2.",
        "6 ÷ 2 = 3, 10 ÷ 2 = 5."
      ],
      explanation: [
        "0.6 = 6/10.",
        "Simplify: 6/10 = 3/5.",
        "The fraction in simplest form is 3/5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.35</span> to a fraction. What is the numerator when simplified?',
      answer: "7",
      hints: [
        "0.35 = 35/100.",
        "Simplify by dividing both by 5.",
        "35 ÷ 5 = 7, 100 ÷ 5 = 20."
      ],
      explanation: [
        "0.35 = 35/100 = 7/20.",
        "GCD(35, 100) = 5.",
        "The numerator is 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.125</span> to a fraction in simplest form.',
      choices: ["1/8", "125/1000", "1/4", "5/40"],
      answer: "1/8",
      hints: [
        "0.125 = 125/1000.",
        "Simplify by dividing both by 125.",
        "125 ÷ 125 = 1, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.125 = 125/1000 = 1/8.",
        "GCD(125, 1000) = 125.",
        "The fraction in simplest form is 1/8."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">0.35</span> to a fraction in simplest form. What is the numerator?',
      answer: "7",
      hints: [
        "0.35 = 35/100.",
        "Simplify: GCD(35, 100) = 5.",
        "35 ÷ 5 = 7, 100 ÷ 5 = 20. So 0.35 = 7/20."
      ],
      explanation: [
        "0.35 = 35/100. GCD(35, 100) = 5.",
        "35÷5 = 7, 100÷5 = 20.",
        "So 0.35 = 7/20. The numerator is 7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction equals <span class="math">0.125</span>?',
      choices: ["1/8", "1/5", "1/4", "3/25"],
      answer: "1/8",
      hints: [
        "0.125 = 125/1000.",
        "Simplify: GCD(125, 1000) = 125.",
        "125 ÷ 125 = 1, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.125 = 125/1000 = 1/8.",
        "GCD(125, 1000) = 125.",
        "So 0.125 = 1/8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">2 3/8</span> to a decimal.',
      choices: ["2.375", "2.38", "2.35", "2.83"],
      answer: "2.375",
      hints: [
        "Convert the fractional part: 3 ÷ 8 = 0.375.",
        "Add to the whole number: 2 + 0.375.",
        "The decimal is 2.375."
      ],
      explanation: [
        "3 ÷ 8 = 0.375.",
        "2 + 0.375 = 2.375.",
        "So 2 3/8 = 2.375."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.45</span> to a fraction in simplest form.',
      choices: ["9/20","45/10","4/5","45/100"],
      answer: "9/20",
      hints: [
        "0.45 = 45/100.",
        "Simplify: GCD(45, 100) = 5.",
        "45 ÷ 5 = 9, 100 ÷ 5 = 20."
      ],
      explanation: [
        "0.45 = 45/100.",
        "GCD(45, 100) = 5. Simplify: 45/100 = 9/20.",
        "The fraction is 9/20."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Convert <span class="math">\frac{3}{4}</span> to a decimal.',
      answer: "0.75",
      hints: [
        "Divide 3 by 4.",
        "3 ÷ 4 = 0.75.",
        "The decimal is 0.75."
      ],
      explanation: [
        "3 ÷ 4 = 0.75.",
        "So 3/4 = 0.75.",
        "Divide the numerator by the denominator."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.125</span> to a fraction in simplest form.',
      choices: ["1/8","125/100","1/4","12/100"],
      answer: "1/8",
      hints: [
        "0.125 = 125/1000.",
        "Simplify: GCD(125, 1000) = 125.",
        "125 ÷ 125 = 1, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.125 = 125/1000 = 1/8.",
        "GCD(125, 1000) = 125. Simplify: 1/8.",
        "The fraction is 1/8."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.375</span> to a fraction in lowest terms.',
      choices: ["3/8", "375/1000", "37/80", "15/40"],
      answer: "3/8",
      hints: [
        "0.375 = 375/1000.",
        "Simplify: GCD(375, 1000) = 125.",
        "375 ÷ 125 = 3, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.375 = 375/1000. GCD = 125.",
        "375/1000 = <strong>3/8</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.24</span> to a fraction in lowest terms. What is the denominator?',
      answer: "25",
      hints: [
        "0.24 = 24/100.",
        "Simplify: GCD(24, 100) = 4.",
        "24 ÷ 4 = 6, 100 ÷ 4 = 25."
      ],
      explanation: [
        "0.24 = 24/100 = 6/25.",
        "The denominator is <strong>25</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.625</span> to a fraction in lowest terms.',
      choices: ["5/8", "625/1000", "25/40", "1/8"],
      answer: "5/8",
      hints: [
        "0.625 = 625/1000.",
        "Simplify: GCD(625, 1000) = 125.",
        "625 ÷ 125 = 5, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.625 = 625/1000. GCD = 125.",
        "625/1000 = <strong>5/8</strong>."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 5: Multiplying Decimals (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">0.3 × 0.4</span>?',
      choices: ["0.12", "1.2", "0.012", "12"],
      answer: "0.12",
      hints: [
        "Multiply as whole numbers: 3 × 4 = 12.",
        "Count decimal places: 1 + 1 = 2.",
        "Place the decimal: 0.12."
      ],
      explanation: [
        "3 × 4 = 12. Total decimal places: 2.",
        "Answer: 0.12."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2.5 × 0.6</span>?',
      answer: "1.5",
      hints: [
        "Multiply: 25 × 6 = 150.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 1.50 = 1.5."
      ],
      explanation: [
        "25 × 6 = 150. Two decimal places.",
        "Answer: 1.50 = 1.5."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">1.4 × 2.3</span>?',
      choices: ["3.22", "3.7", "32.2", "2.32"],
      answer: "3.22",
      hints: [
        "Multiply as whole numbers: 14 × 23.",
        "14 × 23 = 322.",
        "Two decimal places: 3.22."
      ],
      explanation: [
        "14 × 23 = 322. Total decimal places: 2.",
        "Answer: 3.22."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">0.15 × 0.4</span>?',
      answer: "0.06",
      hints: [
        "Multiply: 15 × 4 = 60.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.060 = 0.06."
      ],
      explanation: [
        "15 × 4 = 60. Three decimal places: 0.060.",
        "Answer: 0.06."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3.2 × 5</span>?',
      choices: ["16.0", "15.2", "1.6", "32.5"],
      answer: "16.0",
      hints: [
        "Multiply: 32 × 5 = 160.",
        "One decimal place.",
        "Answer: 16.0."
      ],
      explanation: [
        "32 × 5 = 160. One decimal place.",
        "Answer: 16.0."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">0.25 × 0.8</span>?',
      answer: "0.2",
      hints: [
        "Multiply as whole numbers: 25 × 8 = 200.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.200 = 0.2."
      ],
      explanation: [
        "25 × 8 = 200. Three decimal places: 0.200.",
        "Answer: 0.2."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4.5 × 0.2</span>?',
      choices: ["0.9", "9.0", "0.09", "90"],
      answer: "0.9",
      hints: [
        "Multiply: 45 × 2 = 90.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 0.90 = 0.9."
      ],
      explanation: [
        "45 × 2 = 90. Two decimal places: 0.90.",
        "Answer: 0.9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.06 × 0.5</span>?',
      choices: ["0.03", "0.3", "0.003", "3.0"],
      answer: "0.03",
      hints: [
        "Multiply: 6 × 5 = 30.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.030 = 0.03."
      ],
      explanation: [
        "6 × 5 = 30. Three decimal places: 0.030.",
        "Answer: 0.03."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">6.5 × 0.4</span>?',
      answer: "2.6",
      hints: [
        "Multiply: 65 × 4 = 260.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 2.60 = 2.6."
      ],
      explanation: [
        "65 × 4 = 260. Two decimal places.",
        "Answer: 2.60 = 2.6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.1 × 3.5</span>?',
      choices: ["7.35", "6.35", "73.5", "5.6"],
      answer: "7.35",
      hints: [
        "Multiply as whole numbers: 21 × 35.",
        "21 × 35 = 735.",
        "Two decimal places: 7.35."
      ],
      explanation: [
        "21 × 35 = 735. Total decimal places: 2.",
        "Answer: 7.35."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">0.12 × 0.3</span>?',
      answer: "0.036",
      hints: [
        "Multiply: 12 × 3 = 36.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.036."
      ],
      explanation: [
        "12 × 3 = 36. Three decimal places: 0.036.",
        "Answer: 0.036."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3.5 × 0.4</span>?',
      answer: "1.4",
      hints: [
        "Multiply: 35 × 4 = 140.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 1.40 = 1.4."
      ],
      explanation: [
        "35 × 4 = 140. Two decimal places.",
        "Answer: 1.40 = 1.4."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.08 × 0.7</span>?',
      choices: ["0.056", "0.56", "0.0056", "5.6"],
      answer: "0.056",
      hints: [
        "Multiply: 8 × 7 = 56.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.056."
      ],
      explanation: [
        "8 × 7 = 56. Three decimal places: 0.056.",
        "Answer: 0.056."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">1.8 × 4.5</span>?',
      choices: ["8.10", "8.01", "81.0", "0.81"],
      answer: "8.10",
      hints: [
        "Multiply as whole numbers: 18 × 45.",
        "18 × 45 = 810.",
        "Two decimal places: 8.10."
      ],
      explanation: [
        "18 × 45 = 810. Total decimal places: 2.",
        "Answer: 8.10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7.5 × 0.8</span>?',
      answer: "6",
      hints: [
        "Multiply: 75 × 8 = 600.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 6.00 = 6."
      ],
      explanation: [
        "75 × 8 = 600. Two decimal places.",
        "Answer: 6.00 = 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.6 × 2.5</span>?',
      choices: ["9.00", "9.10", "8.10", "90.0"],
      answer: "9.00",
      hints: [
        "Multiply as whole numbers: 36 × 25.",
        "36 × 25 = 900.",
        "Two decimal places: 9.00."
      ],
      explanation: [
        "36 × 25 = 900. Total decimal places: 2.",
        "Answer: 9.00."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.04 × 0.9</span>?',
      choices: ["0.036", "0.36", "0.0036", "3.6"],
      answer: "0.036",
      hints: [
        "Multiply: 4 × 9 = 36.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.036."
      ],
      explanation: [
        "4 × 9 = 36. Three decimal places: 0.036.",
        "Answer: 0.036."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5.5 × 0.6</span>?',
      answer: "3.3",
      hints: [
        "Multiply as whole numbers: 55 × 6 = 330.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 3.30 = 3.3."
      ],
      explanation: [
        "55 × 6 = 330. Two decimal places: 3.30.",
        "Answer: 3.3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.4 × 1.5</span>?',
      choices: ["3.60", "3.90", "36.0", "2.40"],
      answer: "3.60",
      hints: [
        "Multiply as whole numbers: 24 × 15.",
        "24 × 15 = 360.",
        "Two decimal places: 3.60."
      ],
      explanation: [
        "24 × 15 = 360. Total decimal places: 2.",
        "Answer: 3.60."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.07 × 0.6</span>?',
      choices: ["0.042", "0.42", "0.0042", "4.2"],
      answer: "0.042",
      hints: [
        "Multiply: 7 × 6 = 42.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.042."
      ],
      explanation: [
        "7 × 6 = 42. Three decimal places: 0.042.",
        "Answer: 0.042."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4.5 × 0.3</span>?',
      answer: "1.35",
      hints: [
        "Multiply as whole numbers: 45 × 3 = 135.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 1.35."
      ],
      explanation: [
        "45 × 3 = 135. Two decimal places.",
        "Answer: 1.35.",
        "Count total decimal places from both factors."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.09 × 0.8</span>?',
      choices: ["0.072","0.72","0.0072","7.2"],
      answer: "0.072",
      hints: [
        "Multiply: 9 × 8 = 72.",
        "Count decimal places: 2 + 1 = 3.",
        "Place decimal: 0.072."
      ],
      explanation: [
        "9 × 8 = 72. Three decimal places: 0.072.",
        "Answer: 0.072.",
        "Add a leading zero when needed."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.2 × 1.5</span>?',
      choices: ["4.80","4.70","48.0","3.20"],
      answer: "4.80",
      hints: [
        "Multiply as whole numbers: 32 × 15.",
        "32 × 15 = 480.",
        "Two decimal places: 4.80."
      ],
      explanation: [
        "32 × 15 = 480. Total decimal places: 2.",
        "Answer: 4.80.",
        "You can also write this as 4.8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">0.6 \times 0.08</span>?',
      answer: "0.048",
      hints: [
        "Multiply ignoring decimals: 6 × 8 = 48.",
        "Count total decimal places: 1 + 2 = 3.",
        "Place the decimal: 0.048."
      ],
      explanation: [
        "6 × 8 = 48. Total decimal places: 3.",
        "0.048."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.5 \times 0.14</span>?',
      choices: ["0.35", "3.5", "0.035", "35"],
      answer: "0.35",
      hints: [
        "Multiply ignoring decimals: 25 × 14 = 350.",
        "Count total decimal places: 1 + 2 = 3.",
        "Place the decimal: 0.350 = 0.35."
      ],
      explanation: [
        "25 × 14 = 350. Total decimal places: 3.",
        "0.350 = 0.35."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">1.2 \times 0.45</span>?',
      answer: "0.54",
      hints: [
        "Multiply ignoring decimals: 12 × 45 = 540.",
        "Count total decimal places: 1 + 2 = 3.",
        "Place the decimal: 0.540 = 0.54."
      ],
      explanation: [
        "12 × 45 = 540. Total decimal places: 3.",
        "0.540 = 0.54."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">0.6 \times 0.8</span>?',
      answer: "0.48",
      hints: [
        "Multiply 6 × 8 = 48.",
        "Count decimal places: 1 + 1 = 2 places.",
        "Place the decimal: 0.48."
      ],
      explanation: [
        "6 × 8 = 48.",
        "Total decimal places: 2.",
        "0.6 × 0.8 = 0.48."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.5 \times 0.04</span>?',
      choices: ["0.1", "0.01", "1.0", "10"],
      answer: "0.1",
      hints: [
        "Multiply 25 × 4 = 100.",
        "Count decimal places: 1 + 2 = 3 places.",
        "Place the decimal: 0.100 = 0.1."
      ],
      explanation: [
        "25 × 4 = 100.",
        "Total decimal places: 3.",
        "2.5 × 0.04 = 0.100 = 0.1."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3.2 \times 0.5</span>?',
      choices: ["1.6", "16", "0.16", "1.06"],
      answer: "1.6",
      hints: [
        "Multiply 32 × 5 = 160.",
        "Count decimal places: 1 + 1 = 2 places.",
        "Place the decimal: 1.60 = 1.6."
      ],
      explanation: [
        "32 × 5 = 160.",
        "Total decimal places: 2.",
        "3.2 × 0.5 = 1.60 = 1.6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2.5 \times 0.12</span>?',
      answer: "0.3",
      hints: [
        "Multiply as whole numbers: 25 × 12 = 300.",
        "Count total decimal places: 1 + 2 = 3.",
        "Place the decimal: 0.300 = 0.3."
      ],
      explanation: [
        "25 × 12 = 300. Total decimal places = 3.",
        "Place decimal 3 places from right: 0.300 = 0.3.",
        "The answer is 0.3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.15 \times 0.4</span>?',
      choices: ["0.06", "0.6", "0.006", "6.0"],
      answer: "0.06",
      hints: [
        "Multiply as whole numbers: 15 × 4 = 60.",
        "Count total decimal places: 2 + 1 = 3.",
        "Place the decimal: 0.060 = 0.06."
      ],
      explanation: [
        "15 × 4 = 60. Total decimal places = 3.",
        "Place decimal 3 places from right: 0.060 = 0.06.",
        "The answer is 0.06."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">4.2 \times 3.5</span>?',
      choices: ["14.7", "14.07", "15.7", "147"],
      answer: "14.7",
      hints: [
        "Multiply as whole numbers: 42 × 35 = 1470.",
        "Count total decimal places: 1 + 1 = 2.",
        "Place the decimal: 14.70 = 14.7."
      ],
      explanation: [
        "42 × 35 = 1470. Total decimal places = 2.",
        "Place decimal 2 places from right: 14.70 = 14.7.",
        "The answer is 14.7."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">3.14 \times 5</span>?',
      answer: "15.7",
      hints: [
        "Multiply: 314 × 5 = 1570.",
        "Count decimal places in 3.14: 2 places.",
        "Place decimal: 15.70 = 15.7."
      ],
      explanation: [
        "314 × 5 = 1570. With 2 decimal places: 15.70.",
        "Simplify: 15.70 = 15.7.",
        "The answer is 15.7."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">0.7 \times 0.9</span>?',
      choices: ["0.63","6.3","0.063","63"],
      answer: "0.63",
      hints: [
        "Multiply: 7 × 9 = 63.",
        "Count decimal places: 1 + 1 = 2.",
        "Place decimal: 0.63."
      ],
      explanation: [
        "7 × 9 = 63. Total decimal places: 2.",
        "So 0.7 × 0.9 = 0.63.",
        "The answer is 0.63."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.5 \times 0.04</span>?',
      choices: ["0.1","1","0.01","10"],
      answer: "0.1",
      hints: [
        "Multiply: 25 × 4 = 100.",
        "Count decimal places: 1 + 2 = 3.",
        "Place decimal: 0.100 = 0.1."
      ],
      explanation: [
        "25 × 4 = 100. Total decimal places: 3.",
        "So 2.5 × 0.04 = 0.100 = 0.1.",
        "The answer is 0.1."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">2.4 × 0.15</span>?',
      answer: "0.36",
      hints: [
        "Multiply as whole numbers: 24 × 15 = 360.",
        "Count decimal places: 2.4 has 1, 0.15 has 2 → total 3.",
        "Place the decimal: 0.360 = 0.36."
      ],
      explanation: [
        "24 × 15 = 360. Total decimal places = 3.",
        "0.360 = <strong>0.36</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.6 × 0.25</span>?',
      choices: ["0.9", "9.0", "0.09", "90"],
      answer: "0.9",
      hints: [
        "Multiply as whole numbers: 36 × 25 = 900.",
        "Count decimal places: 3.6 has 1, 0.25 has 2 → total 3.",
        "Place the decimal: 0.900 = 0.9."
      ],
      explanation: [
        "36 × 25 = 900. Total decimal places = 3.",
        "0.900 = <strong>0.9</strong>."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A notebook costs $3.75. How much do 4 notebooks cost?',
      answer: "15.00",
      hints: [
        "Multiply: 3.75 × 4.",
        "375 × 4 = 1500. Two decimal places.",
        "15.00."
      ],
      explanation: [
        "3.75 × 4 = <strong>15.00</strong> (or $15).",
        "Multiply as whole numbers then place the decimal."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 6: Dividing Decimals (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4.8 ÷ 0.6</span>?',
      choices: ["8", "0.8", "80", "6"],
      answer: "8",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "48 ÷ 6 = 8.",
        "Answer: 8."
      ],
      explanation: [
        "Multiply both by 10: 48 ÷ 6 = 8.",
        "Answer: 8."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7.5 ÷ 2.5</span>?',
      answer: "3",
      hints: [
        "Make divisor whole: multiply both by 10.",
        "75 ÷ 25 = 3.",
        "Answer: 3."
      ],
      explanation: [
        "75 ÷ 25 = 3.",
        "Answer: 3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.6 ÷ 0.12</span>?',
      choices: ["30", "0.3", "3", "300"],
      answer: "30",
      hints: [
        "Make the divisor whole: multiply both by 100.",
        "360 ÷ 12 = 30.",
        "Answer: 30."
      ],
      explanation: [
        "Multiply both by 100: 360 ÷ 12 = 30.",
        "Answer: 30."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">9.1 ÷ 0.7</span>?',
      answer: "13",
      hints: [
        "Multiply both by 10: 91 ÷ 7.",
        "91 ÷ 7 = 13.",
        "Answer: 13."
      ],
      explanation: [
        "Multiply both by 10: 91 ÷ 7 = 13.",
        "Answer: 13."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.84 ÷ 0.04</span>?',
      choices: ["21", "2.1", "0.21", "210"],
      answer: "21",
      hints: [
        "Multiply both by 100: 84 ÷ 4.",
        "84 ÷ 4 = 21.",
        "Answer: 21."
      ],
      explanation: [
        "Multiply both by 100: 84 ÷ 4 = 21.",
        "Answer: 21."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">5.4 ÷ 0.9</span>?',
      answer: "6",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "54 ÷ 9 = 6.",
        "Answer: 6."
      ],
      explanation: [
        "Multiply both by 10: 54 ÷ 9 = 6.",
        "Answer: 6."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.56 ÷ 0.08</span>?',
      choices: ["32", "3.2", "0.32", "320"],
      answer: "32",
      hints: [
        "Multiply both by 100: 256 ÷ 8.",
        "256 ÷ 8 = 32.",
        "Answer: 32."
      ],
      explanation: [
        "Multiply both by 100: 256 ÷ 8 = 32.",
        "Answer: 32."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">6.3 ÷ 0.21</span>?',
      choices: ["30", "3", "0.3", "300"],
      answer: "30",
      hints: [
        "Multiply both by 100: 630 ÷ 21.",
        "630 ÷ 21 = 30.",
        "Answer: 30."
      ],
      explanation: [
        "Multiply both by 100: 630 ÷ 21 = 30.",
        "Answer: 30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">8.4 ÷ 0.3</span>?',
      answer: "28",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "84 ÷ 3 = 28.",
        "Answer: 28."
      ],
      explanation: [
        "Multiply both by 10: 84 ÷ 3 = 28.",
        "Answer: 28."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">1.44 ÷ 0.06</span>?',
      choices: ["24", "2.4", "0.24", "240"],
      answer: "24",
      hints: [
        "Multiply both by 100: 144 ÷ 6.",
        "144 ÷ 6 = 24.",
        "Answer: 24."
      ],
      explanation: [
        "Multiply both by 100: 144 ÷ 6 = 24.",
        "Answer: 24."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">4.2 ÷ 0.14</span>?',
      answer: "30",
      hints: [
        "Multiply both by 100: 420 ÷ 14.",
        "420 ÷ 14 = 30.",
        "Answer: 30."
      ],
      explanation: [
        "Multiply both by 100: 420 ÷ 14 = 30.",
        "Answer: 30."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5.6 ÷ 0.16</span>?',
      choices: ["35", "3.5", "0.35", "350"],
      answer: "35",
      hints: [
        "Multiply both by 100: 560 ÷ 16.",
        "560 ÷ 16 = 35.",
        "Answer: 35."
      ],
      explanation: [
        "Multiply both by 100: 560 ÷ 16 = 35.",
        "Answer: 35."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">6.3 ÷ 0.9</span>?',
      answer: "7",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "63 ÷ 9 = 7.",
        "Answer: 7."
      ],
      explanation: [
        "Multiply both by 10: 63 ÷ 9 = 7.",
        "Answer: 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">1.68 ÷ 0.07</span>?',
      choices: ["24", "2.4", "0.24", "240"],
      answer: "24",
      hints: [
        "Multiply both by 100: 168 ÷ 7.",
        "168 ÷ 7 = 24.",
        "Answer: 24."
      ],
      explanation: [
        "Multiply both by 100: 168 ÷ 7 = 24.",
        "Answer: 24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">3.6 ÷ 0.4</span>?',
      answer: "9",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "36 ÷ 4 = 9.",
        "Answer: 9."
      ],
      explanation: [
        "Multiply both by 10: 36 ÷ 4 = 9.",
        "Answer: 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">4.5 ÷ 0.15</span>?',
      choices: ["30", "3", "0.3", "300"],
      answer: "30",
      hints: [
        "Multiply both by 100: 450 ÷ 15.",
        "450 ÷ 15 = 30.",
        "Answer: 30."
      ],
      explanation: [
        "Multiply both by 100: 450 ÷ 15 = 30.",
        "Answer: 30."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">2.16 ÷ 0.09</span>?',
      choices: ["24", "2.4", "0.24", "240"],
      answer: "24",
      hints: [
        "Multiply both by 100: 216 ÷ 9.",
        "216 ÷ 9 = 24.",
        "Answer: 24."
      ],
      explanation: [
        "Multiply both by 100: 216 ÷ 9 = 24.",
        "Answer: 24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7.2 ÷ 0.8</span>?',
      answer: "9",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "72 ÷ 8 = 9.",
        "Answer: 9."
      ],
      explanation: [
        "Multiply both by 10: 72 ÷ 8 = 9.",
        "Answer: 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.52 ÷ 0.11</span>?',
      choices: ["32", "3.2", "0.32", "320"],
      answer: "32",
      hints: [
        "Multiply both by 100: 352 ÷ 11.",
        "352 ÷ 11 = 32.",
        "Answer: 32."
      ],
      explanation: [
        "Multiply both by 100: 352 ÷ 11 = 32.",
        "Answer: 32."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">6.48 ÷ 0.18</span>?',
      answer: "36",
      hints: [
        "Multiply both by 100: 648 ÷ 18.",
        "648 ÷ 18 = 36.",
        "Answer: 36."
      ],
      explanation: [
        "Multiply both by 100: 648 ÷ 18 = 36.",
        "Answer: 36."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">9.6 ÷ 0.4</span>?',
      answer: "24",
      hints: [
        "Make the divisor whole: multiply both by 10.",
        "96 ÷ 4 = 24.",
        "Answer: 24."
      ],
      explanation: [
        "Multiply both by 10: 96 ÷ 4 = 24.",
        "Answer: 24.",
        "Moving the decimal eliminates the divisor's decimal."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">1.92 ÷ 0.06</span>?',
      choices: ["32","3.2","0.32","320"],
      answer: "32",
      hints: [
        "Multiply both by 100: 192 ÷ 6.",
        "192 ÷ 6 = 32.",
        "Answer: 32."
      ],
      explanation: [
        "Multiply both by 100: 192 ÷ 6 = 32.",
        "Answer: 32.",
        "Move the decimal two places for both."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">7.2 ÷ 0.24</span>?',
      choices: ["30","3","0.3","300"],
      answer: "30",
      hints: [
        "Multiply both by 100: 720 ÷ 24.",
        "720 ÷ 24 = 30.",
        "Answer: 30."
      ],
      explanation: [
        "Multiply both by 100: 720 ÷ 24 = 30.",
        "Answer: 30.",
        "Making the divisor a whole number simplifies division."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">3.6 \div 0.9</span>?',
      choices: ["4", "0.4", "40", "0.04"],
      answer: "4",
      hints: [
        "Multiply both by 10 to remove decimals: 36 ÷ 9.",
        "36 ÷ 9 = 4.",
        "So 3.6 ÷ 0.9 = 4."
      ],
      explanation: [
        "Multiply both by 10: 36 ÷ 9 = 4.",
        "3.6 ÷ 0.9 = 4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">4.32 \div 0.06</span>?',
      answer: "72",
      hints: [
        "Multiply both by 100 to remove decimals: 432 ÷ 6.",
        "432 ÷ 6 = 72.",
        "So 4.32 ÷ 0.06 = 72."
      ],
      explanation: [
        "Multiply both by 100: 432 ÷ 6 = 72.",
        "4.32 ÷ 0.06 = 72."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.288 \div 0.12</span>?',
      choices: ["2.4", "24", "0.24", "0.024"],
      answer: "2.4",
      hints: [
        "Multiply both by 100: 28.8 ÷ 12.",
        "28.8 ÷ 12 = 2.4.",
        "So 0.288 ÷ 0.12 = 2.4."
      ],
      explanation: [
        "Multiply both by 100: 28.8 ÷ 12 = 2.4.",
        "0.288 ÷ 0.12 = 2.4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">4.8 \div 0.6</span>?',
      answer: "8",
      hints: [
        "Multiply both by 10 to remove decimals: 48 ÷ 6.",
        "48 ÷ 6 = 8.",
        "The answer is 8."
      ],
      explanation: [
        "4.8 ÷ 0.6 = 48 ÷ 6 = 8.",
        "Move the decimal one place in both numbers.",
        "The answer is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">0.72 \div 0.08</span>?',
      choices: ["9", "0.9", "90", "0.09"],
      answer: "9",
      hints: [
        "Multiply both by 100 to remove decimals: 72 ÷ 8.",
        "72 ÷ 8 = 9.",
        "The answer is 9."
      ],
      explanation: [
        "0.72 ÷ 0.08 = 72 ÷ 8 = 9.",
        "Move the decimal two places in both numbers.",
        "The answer is 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.6 \div 0.12</span>?',
      choices: ["30", "3", "0.3", "300"],
      answer: "30",
      hints: [
        "Multiply both by 100 to remove decimals: 360 ÷ 12.",
        "360 ÷ 12 = 30.",
        "The answer is 30."
      ],
      explanation: [
        "3.6 ÷ 0.12 = 360 ÷ 12 = 30.",
        "Move the decimal two places in both numbers.",
        "The answer is 30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7.2 \div 0.9</span>?',
      answer: "8",
      hints: [
        "Move decimal in both numbers to make divisor whole: 72 ÷ 9.",
        "72 ÷ 9 = 8.",
        "The answer is 8."
      ],
      explanation: [
        "Multiply both by 10: 72 ÷ 9 = 8.",
        "The answer is 8.",
        "Moving decimals equally does not change the quotient."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">3.36 \div 0.08</span>?',
      choices: ["42", "4.2", "420", "0.42"],
      answer: "42",
      hints: [
        "Move decimal 2 places in both: 336 ÷ 8.",
        "336 ÷ 8 = 42.",
        "The answer is 42."
      ],
      explanation: [
        "Multiply both by 100: 336 ÷ 8 = 42.",
        "The answer is 42.",
        "Make the divisor a whole number by shifting decimals."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">15.6 \div 1.2</span>?',
      choices: ["13", "1.3", "130", "12"],
      answer: "13",
      hints: [
        "Move decimal 1 place in both: 156 ÷ 12.",
        "156 ÷ 12 = 13.",
        "The answer is 13."
      ],
      explanation: [
        "Multiply both by 10: 156 ÷ 12 = 13.",
        "The answer is 13.",
        "Check: 13 × 1.2 = 15.6 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is <span class="math">7.2 \div 0.9</span>?',
      answer: "8",
      hints: [
        "Multiply both by 10 to remove decimals: 72 ÷ 9.",
        "72 ÷ 9 = 8.",
        "The answer is 8."
      ],
      explanation: [
        "Move decimal: 72 ÷ 9 = 8.",
        "7.2 ÷ 0.9 = 8.",
        "Multiply both numbers by 10 to make the divisor a whole number."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is <span class="math">4.5 \div 0.5</span>?',
      choices: ["9","0.9","90","0.09"],
      answer: "9",
      hints: [
        "Multiply both by 10: 45 ÷ 5.",
        "45 ÷ 5 = 9.",
        "The answer is 9."
      ],
      explanation: [
        "Move decimal: 45 ÷ 5 = 9.",
        "4.5 ÷ 0.5 = 9.",
        "The answer is 9."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">6.48 \div 0.08</span>?',
      choices: ["81","8.1","810","0.81"],
      answer: "81",
      hints: [
        "Multiply both by 100: 648 ÷ 8.",
        "648 ÷ 8 = 81.",
        "The answer is 81."
      ],
      explanation: [
        "Move decimal two places: 648 ÷ 8 = 81.",
        "6.48 ÷ 0.08 = 81.",
        "The answer is 81."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is <span class="math">7.56 ÷ 0.3</span>?',
      answer: "25.2",
      hints: [
        "Move the decimal: make 0.3 into 3 by multiplying both by 10.",
        "Now divide 75.6 ÷ 3.",
        "75.6 ÷ 3 = 25.2."
      ],
      explanation: [
        "Multiply both by 10: 75.6 ÷ 3 = <strong>25.2</strong>.",
        "Moving the decimal in the divisor makes it a whole number."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">4.68 ÷ 0.12</span>?',
      choices: ["39", "3.9", "390", "0.39"],
      answer: "39",
      hints: [
        "Move both decimals 2 places right: 468 ÷ 12.",
        "468 ÷ 12 = 39.",
        "The answer is 39."
      ],
      explanation: [
        "Multiply both by 100: 468 ÷ 12 = <strong>39</strong>.",
        "Moving decimals makes the divisor a whole number."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'You have $18.75 to buy pens that cost $1.25 each. How many pens can you buy?',
      answer: "15",
      hints: [
        "Divide: 18.75 ÷ 1.25.",
        "Move both decimals 2 places: 1875 ÷ 125.",
        "1875 ÷ 125 = 15."
      ],
      explanation: [
        "18.75 ÷ 1.25 = 1875 ÷ 125 = <strong>15</strong> pens.",
        "Move decimals to make the divisor a whole number."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 7: Advanced Conversions (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">1 3/8</span> to a decimal.',
      choices: ["1.375", "1.38", "1.3", "1.83"],
      answer: "1.375",
      hints: [
        "Convert the fractional part: 3 ÷ 8 = 0.375.",
        "Add the whole number: 1 + 0.375 = 1.375.",
        "1 3/8 = 1.375."
      ],
      explanation: [
        "3/8 = 0.375.",
        "1 + 0.375 = 1.375."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">2.35</span> to a mixed number. What is the denominator of the fraction part (in simplest form)?',
      answer: "20",
      hints: [
        "2.35 = 2 and 35/100.",
        "Simplify 35/100: GCD = 5, so 35/100 = 7/20.",
        "Denominator is 20."
      ],
      explanation: [
        "2.35 = 2 35/100 = 2 7/20.",
        "The denominator is 20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.875</span> to a fraction in simplest form.',
      choices: ["7/8", "87/100", "175/200", "35/40"],
      answer: "7/8",
      hints: [
        "0.875 = 875/1000.",
        "GCD(875, 1000) = 125.",
        "875 ÷ 125 = 7, 1000 ÷ 125 = 8 → 7/8."
      ],
      explanation: [
        "0.875 = 875/1000 = 7/8.",
        "Answer: 7/8."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">3 5/16</span> to a decimal.',
      answer: "3.3125",
      hints: [
        "Convert 5/16: divide 5 by 16.",
        "5 ÷ 16 = 0.3125.",
        "3 + 0.3125 = 3.3125."
      ],
      explanation: [
        "5/16 = 0.3125.",
        "3 5/16 = 3.3125."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">5/6</span> or <span class="math">0.82</span>?',
      choices: ["5/6", "0.82", "They are equal", "Cannot compare"],
      answer: "5/6",
      hints: [
        "Convert 5/6 to a decimal: 5 ÷ 6 ≈ 0.8333…",
        "Compare: 0.833… vs 0.82.",
        "0.833… > 0.82, so 5/6 is greater."
      ],
      explanation: [
        "5/6 ≈ 0.8333… and 0.82 = 0.8200.",
        "0.8333 > 0.8200, so 5/6 is greater."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">4 3/16</span> to a decimal.',
      answer: "4.1875",
      hints: [
        "Convert the fractional part: 3 ÷ 16 = 0.1875.",
        "Add the whole number: 4 + 0.1875 = 4.1875.",
        "4 3/16 = 4.1875."
      ],
      explanation: [
        "3/16 = 0.1875.",
        "4 + 0.1875 = 4.1875."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.625</span> to a fraction in simplest form.',
      choices: ["5/8", "625/100", "25/40", "3/5"],
      answer: "5/8",
      hints: [
        "0.625 = 625/1000.",
        "GCD(625, 1000) = 125.",
        "625 ÷ 125 = 5, 1000 ÷ 125 = 8 → 5/8."
      ],
      explanation: [
        "0.625 = 625/1000 = 5/8.",
        "Answer: 5/8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">7/12</span> or <span class="math">0.59</span>?',
      choices: ["They are approximately equal", "0.59", "7/12", "Cannot compare"],
      answer: "They are approximately equal",
      hints: [
        "Convert 7/12 to a decimal: 7 ÷ 12 ≈ 0.58333…",
        "Compare: 0.5833… vs 0.59.",
        "0.5833 < 0.59, but they are very close — approximately equal."
      ],
      explanation: [
        "7/12 ≈ 0.5833 and 0.59 = 0.5900.",
        "They differ by less than 0.007, so they are approximately equal."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">1.75</span> to a mixed number. What is the numerator of the fraction part (in simplest form)?',
      answer: "3",
      hints: [
        "1.75 = 1 and 75/100.",
        "Simplify 75/100: GCD = 25, so 75/100 = 3/4.",
        "Numerator is 3."
      ],
      explanation: [
        "1.75 = 1 75/100 = 1 3/4.",
        "The numerator of the fraction part is 3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.4375</span> to a fraction in simplest form.',
      choices: ["7/16", "43/100", "175/400", "44/100"],
      answer: "7/16",
      hints: [
        "0.4375 = 4375/10000.",
        "GCD(4375, 10000) = 625.",
        "4375 ÷ 625 = 7, 10000 ÷ 625 = 16 → 7/16."
      ],
      explanation: [
        "0.4375 = 4375/10000 = 7/16.",
        "Answer: 7/16."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">2 7/8</span> to a decimal.',
      answer: "2.875",
      hints: [
        "Convert the fractional part: 7 ÷ 8 = 0.875.",
        "Add the whole number: 2 + 0.875 = 2.875.",
        "2 7/8 = 2.875."
      ],
      explanation: [
        "7/8 = 0.875.",
        "2 + 0.875 = 2.875."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">3/8</span> or <span class="math">0.36</span>?',
      choices: ["3/8", "0.36", "They are equal", "Cannot compare"],
      answer: "3/8",
      hints: [
        "Convert 3/8 to a decimal: 3 ÷ 8 = 0.375.",
        "Compare: 0.375 vs 0.36.",
        "0.375 > 0.36, so 3/8 is greater."
      ],
      explanation: [
        "3/8 = 0.375 and 0.36 = 0.360.",
        "0.375 > 0.360, so 3/8 is greater."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">3.45</span> to a mixed number. What is the denominator of the fraction part (in simplest form)?',
      answer: "20",
      hints: [
        "3.45 = 3 and 45/100.",
        "Simplify 45/100: GCD = 5, so 45/100 = 9/20.",
        "Denominator is 20."
      ],
      explanation: [
        "3.45 = 3 45/100 = 3 9/20.",
        "The denominator is 20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.5625</span> to a fraction in simplest form.',
      choices: ["9/16", "56/100", "225/400", "5/9"],
      answer: "9/16",
      hints: [
        "0.5625 = 5625/10000.",
        "GCD(5625, 10000) = 625.",
        "5625 ÷ 625 = 9, 10000 ÷ 625 = 16 → 9/16."
      ],
      explanation: [
        "0.5625 = 5625/10000 = 9/16.",
        "Answer: 9/16."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">5 1/4</span> to a decimal.',
      answer: "5.25",
      hints: [
        "Convert the fractional part: 1 ÷ 4 = 0.25.",
        "Add the whole number: 5 + 0.25 = 5.25.",
        "5 1/4 = 5.25."
      ],
      explanation: [
        "1/4 = 0.25.",
        "5 + 0.25 = 5.25."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">4/9</span> or <span class="math">0.45</span>?',
      choices: ["0.45", "4/9", "They are equal", "Cannot compare"],
      answer: "0.45",
      hints: [
        "Convert 4/9 to a decimal: 4 ÷ 9 ≈ 0.4444…",
        "Compare: 0.444… vs 0.45.",
        "0.444… < 0.45, so 0.45 is greater."
      ],
      explanation: [
        "4/9 ≈ 0.4444 and 0.45 = 0.4500.",
        "0.4444 < 0.4500, so 0.45 is greater."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.3125</span> to a fraction in simplest form.',
      choices: ["5/16", "31/100", "125/400", "3/10"],
      answer: "5/16",
      hints: [
        "0.3125 = 3125/10000.",
        "GCD(3125, 10000) = 625.",
        "3125 ÷ 625 = 5, 10000 ÷ 625 = 16 → 5/16."
      ],
      explanation: [
        "0.3125 = 3125/10000 = 5/16.",
        "Answer: 5/16."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">6 3/4</span> to a decimal.',
      answer: "6.75",
      hints: [
        "Convert the fractional part: 3 ÷ 4 = 0.75.",
        "Add the whole number: 6 + 0.75 = 6.75.",
        "6 3/4 = 6.75."
      ],
      explanation: [
        "3/4 = 0.75.",
        "6 + 0.75 = 6.75."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.6875</span> to a fraction in simplest form.',
      choices: ["11/16", "69/100", "275/400", "7/10"],
      answer: "11/16",
      hints: [
        "0.6875 = 6875/10000.",
        "GCD(6875, 10000) = 625.",
        "6875 ÷ 625 = 11, 10000 ÷ 625 = 16 → 11/16."
      ],
      explanation: [
        "0.6875 = 6875/10000 = 11/16.",
        "Answer: 11/16."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">5/9</span> or <span class="math">0.54</span>?',
      choices: ["5/9", "0.54", "They are equal", "Cannot compare"],
      answer: "5/9",
      hints: [
        "Convert 5/9 to a decimal: 5 ÷ 9 ≈ 0.5555…",
        "Compare: 0.555… vs 0.54.",
        "0.555… > 0.54, so 5/9 is greater."
      ],
      explanation: [
        "5/9 ≈ 0.5555 and 0.54 = 0.5400.",
        "0.5555 > 0.5400, so 5/9 is greater."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">3 1/8</span> to a decimal.',
      answer: "3.125",
      hints: [
        "Convert the fractional part: 1 ÷ 8 = 0.125.",
        "Add the whole number: 3 + 0.125 = 3.125.",
        "3 1/8 = 3.125."
      ],
      explanation: [
        "1/8 = 0.125.",
        "3 + 0.125 = 3.125.",
        "Convert the fraction part first, then add."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">0.1875</span> to a fraction in simplest form.',
      choices: ["3/16","18/100","75/400","1/5"],
      answer: "3/16",
      hints: [
        "0.1875 = 1875/10000.",
        "GCD(1875, 10000) = 625.",
        "1875 ÷ 625 = 3, 10000 ÷ 625 = 16 → 3/16."
      ],
      explanation: [
        "0.1875 = 1875/10000 = 3/16.",
        "Answer: 3/16.",
        "Divide both by their GCD of 625."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">7/9</span> or <span class="math">0.76</span>?',
      choices: ["7/9","0.76","They are equal","Cannot compare"],
      answer: "7/9",
      hints: [
        "Convert 7/9 to a decimal: 7 ÷ 9 ≈ 0.7777…",
        "Compare: 0.777… vs 0.76.",
        "0.777… > 0.76, so 7/9 is greater."
      ],
      explanation: [
        "7/9 ≈ 0.7778 and 0.76 = 0.7600.",
        "0.7778 > 0.7600, so 7/9 is greater.",
        "Converting to decimals makes comparison easy."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">\frac{5}{11}</span> to a decimal (rounded to the nearest hundredth).',
      choices: ["0.45", "0.46", "0.55", "0.44"],
      answer: "0.45",
      hints: [
        "Divide 5 by 11: 5 ÷ 11 = 0.4545...",
        "The thousandths digit is 4.",
        "Since 4 < 5, round down: 0.45."
      ],
      explanation: [
        "5 ÷ 11 = 0.45454...",
        "Rounded to the nearest hundredth: 0.45."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Express <span class="math">2.375</span> as a fraction. What is the denominator in simplest form?',
      answer: "8",
      hints: [
        "2.375 = 2 + 0.375.",
        "0.375 = 375/1000 = 3/8.",
        "So 2.375 = 2 3/8 = 19/8. The denominator is 8."
      ],
      explanation: [
        "0.375 = 375/1000. GCD(375,1000)=125. 375/1000 = 3/8.",
        "2.375 = 19/8. The denominator is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction equals <span class="math">0.5625</span>?',
      choices: ["9/16", "5/8", "11/20", "7/12"],
      answer: "9/16",
      hints: [
        "0.5625 = 5625/10000.",
        "Simplify: GCD(5625, 10000) = 625.",
        "5625/625 = 9, 10000/625 = 16. So 0.5625 = 9/16."
      ],
      explanation: [
        "0.5625 = 5625/10000 = 9/16.",
        "Check: 9 ÷ 16 = 0.5625 ✓."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">2.75</span> to a mixed number in simplest form.',
      choices: ["2 3/4", "2 75/100", "2 7/10", "2 15/20"],
      answer: "2 3/4",
      hints: [
        "The whole number part is 2. The decimal part is 0.75.",
        "0.75 = 75/100 = 3/4.",
        "So 2.75 = 2 3/4."
      ],
      explanation: [
        "2.75 = 2 + 0.75 = 2 + 75/100 = 2 + 3/4.",
        "The mixed number is 2 3/4.",
        "GCD(75, 100) = 25, so 75/100 = 3/4."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">\frac{11}{8}</span> to a decimal.',
      answer: "1.375",
      hints: [
        "Divide 11 by 8.",
        "11 ÷ 8 = 1.375.",
        "The decimal is 1.375."
      ],
      explanation: [
        "11 ÷ 8 = 1 remainder 3.",
        "Continue: 30÷8=3 R6, 60÷8=7 R4, 40÷8=5.",
        "11/8 = 1.375."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction equals <span class="math">0.625</span>?',
      choices: ["5/8", "3/5", "5/6", "7/10"],
      answer: "5/8",
      hints: [
        "0.625 = 625/1000.",
        "Simplify: GCD(625, 1000) = 125.",
        "625 ÷ 125 = 5, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.625 = 625/1000 = 5/8.",
        "GCD(625, 1000) = 125.",
        "The fraction is 5/8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">0.4375</span> to a fraction in simplest form.',
      choices: ["7/16", "43/100", "7/15", "4/9"],
      answer: "7/16",
      hints: [
        "0.4375 = 4375/10000.",
        "Simplify: GCD(4375, 10000) = 625.",
        "4375 ÷ 625 = 7, 10000 ÷ 625 = 16."
      ],
      explanation: [
        "0.4375 = 4375/10000.",
        "GCD = 625. 4375÷625 = 7, 10000÷625 = 16.",
        "So 0.4375 = 7/16."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">5 5/8</span> to a decimal.',
      answer: "5.625",
      hints: [
        "Convert the fractional part: 5 ÷ 8 = 0.625.",
        "Add the whole number: 5 + 0.625.",
        "The answer is 5.625."
      ],
      explanation: [
        "5 ÷ 8 = 0.625.",
        "5 + 0.625 = 5.625.",
        "So 5 5/8 = 5.625."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is greater: <span class="math">3/7</span> or <span class="math">0.44</span>?',
      choices: ["0.44", "3/7", "They are equal", "Cannot tell"],
      answer: "0.44",
      hints: [
        "Convert 3/7 to a decimal: 3 ÷ 7 ≈ 0.4286.",
        "Compare: 0.4286 vs 0.44.",
        "0.44 > 0.4286."
      ],
      explanation: [
        "3/7 ≈ 0.4286.",
        "0.44 > 0.4286, so 0.44 is greater.",
        "Converting to the same form makes comparison easy."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">\frac{11}{16}</span> to a decimal.',
      choices: ["0.6875","0.6125","0.625","0.7125"],
      answer: "0.6875",
      hints: [
        "Divide 11 by 16.",
        "11 ÷ 16 = 0.6875.",
        "The decimal is 0.6875."
      ],
      explanation: [
        "11 ÷ 16 = 0.6875.",
        "So 11/16 = 0.6875.",
        "Use long division to compute."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">0.375</span> to a fraction. What is the denominator in simplest form?',
      answer: "8",
      hints: [
        "0.375 = 375/1000.",
        "Simplify: GCD(375, 1000) = 125.",
        "375 ÷ 125 = 3, 1000 ÷ 125 = 8."
      ],
      explanation: [
        "0.375 = 375/1000.",
        "GCD(375, 1000) = 125. Simplify: 375/1000 = 3/8.",
        "The denominator is 8."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which decimal is equivalent to <span class="math">\frac{7}{11}</span>?',
      choices: ["0.636363...","0.637","0.583","0.714285..."],
      answer: "0.636363...",
      hints: [
        "Divide 7 by 11.",
        "7 ÷ 11 = 0.636363... (repeating).",
        "The pattern 63 repeats."
      ],
      explanation: [
        "7 ÷ 11 = 0.636363...",
        "This is a repeating decimal with period 63.",
        "The answer is 0.636363..."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">5/16</span> to a decimal.',
      choices: ["0.3125", "0.516", "0.35", "0.325"],
      answer: "0.3125",
      hints: [
        "Divide 5 by 16.",
        "5.0000 ÷ 16: 50÷16=3 R2, 20÷16=1 R4, 40÷16=2 R8, 80÷16=5.",
        "5/16 = 0.3125."
      ],
      explanation: [
        "5 ÷ 16 = <strong>0.3125</strong>.",
        "This is a terminating decimal."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">0.45</span> to a fraction in lowest terms. What is the numerator?',
      answer: "9",
      hints: [
        "0.45 = 45/100.",
        "Simplify: GCD(45, 100) = 5.",
        "45 ÷ 5 = 9, 100 ÷ 5 = 20."
      ],
      explanation: [
        "0.45 = 45/100 = 9/20.",
        "The numerator is <strong>9</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction is equal to <span class="math">0.1875</span>?',
      choices: ["3/16", "1/8", "3/20", "1/5"],
      answer: "3/16",
      hints: [
        "0.1875 = 1875/10000.",
        "Simplify: GCD(1875, 10000) = 625.",
        "1875 ÷ 625 = 3, 10000 ÷ 625 = 16."
      ],
      explanation: [
        "0.1875 = 1875/10000 = <strong>3/16</strong>.",
        "Divide both by GCD = 625."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 8: Repeating Decimals (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">1/3</span> to a decimal. What type of decimal is it?',
      choices: ["Repeating: 0.333…", "Terminating: 0.33", "Terminating: 0.3", "Repeating: 0.133…"],
      answer: "Repeating: 0.333…",
      hints: [
        "Divide 1 by 3: 1 ÷ 3 = 0.333…",
        "The 3 repeats forever.",
        "This is a repeating decimal."
      ],
      explanation: [
        "1 ÷ 3 = 0.3333… (the 3 repeats infinitely).",
        "It is a repeating decimal."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What digit repeats when you convert <span class="math">2/9</span> to a decimal?',
      answer: "2",
      hints: [
        "Divide 2 by 9.",
        "2 ÷ 9 = 0.222…",
        "The repeating digit is 2."
      ],
      explanation: [
        "2 ÷ 9 = 0.2222…",
        "The digit 2 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">5/11</span> to a decimal. What two digits repeat?',
      choices: ["45", "54", "55", "50"],
      answer: "45",
      hints: [
        "Divide 5 by 11.",
        "5 ÷ 11 = 0.454545…",
        "The repeating block is 45."
      ],
      explanation: [
        "5 ÷ 11 = 0.454545…",
        "The digits 4 and 5 repeat in the pattern 45."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">7/9</span> to a decimal. What is the repeating digit?',
      answer: "7",
      hints: [
        "Divide 7 by 9.",
        "7 ÷ 9 = 0.777…",
        "The repeating digit is 7."
      ],
      explanation: [
        "7 ÷ 9 = 0.7777…",
        "The digit 7 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction gives a repeating decimal?',
      choices: ["1/6", "1/4", "1/8", "3/5"],
      answer: "1/6",
      hints: [
        "A fraction gives a terminating decimal when the denominator (in lowest terms) has only factors of 2 and 5.",
        "4 = 2², 8 = 2³, 5 = 5. These all terminate.",
        "6 = 2 × 3 — the factor 3 makes it repeating."
      ],
      explanation: [
        "1/6 = 0.1666… (repeating). The others terminate.",
        "A denominator with factors other than 2 or 5 causes repeating."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What digit repeats when you convert <span class="math">4/9</span> to a decimal?',
      answer: "4",
      hints: [
        "Divide 4 by 9.",
        "4 ÷ 9 = 0.444…",
        "The repeating digit is 4."
      ],
      explanation: [
        "4 ÷ 9 = 0.4444…",
        "The digit 4 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">4/11</span> to a decimal. What two digits repeat?',
      choices: ["36", "63", "44", "46"],
      answer: "36",
      hints: [
        "Divide 4 by 11.",
        "4 ÷ 11 = 0.363636…",
        "The repeating block is 36."
      ],
      explanation: [
        "4 ÷ 11 = 0.363636…",
        "The digits 3 and 6 repeat in the pattern 36."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these fractions produces a terminating decimal?',
      choices: ["3/8", "1/3", "5/7", "2/9"],
      answer: "3/8",
      hints: [
        "A fraction terminates when the denominator (in lowest terms) has only factors of 2 and 5.",
        "8 = 2³ — only factor 2.",
        "3/8 = 0.375, a terminating decimal."
      ],
      explanation: [
        "8 = 2³ has only factor 2, so 3/8 terminates (0.375).",
        "The others (3, 7, 9) have prime factors other than 2 and 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What digit repeats when you convert <span class="math">8/9</span> to a decimal?',
      answer: "8",
      hints: [
        "Divide 8 by 9.",
        "8 ÷ 9 = 0.888…",
        "The repeating digit is 8."
      ],
      explanation: [
        "8 ÷ 9 = 0.8888…",
        "The digit 8 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">7/11</span> to a decimal. What two digits repeat?',
      choices: ["63", "36", "77", "73"],
      answer: "63",
      hints: [
        "Divide 7 by 11.",
        "7 ÷ 11 = 0.636363…",
        "The repeating block is 63."
      ],
      explanation: [
        "7 ÷ 11 = 0.636363…",
        "The digits 6 and 3 repeat in the pattern 63."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction gives a repeating decimal?',
      choices: ["2/3", "1/5", "3/4", "7/8"],
      answer: "2/3",
      hints: [
        "A fraction gives a terminating decimal when the denominator has only factors of 2 and 5.",
        "5 = 5, 4 = 2², 8 = 2³. These all terminate.",
        "3 has a factor of 3, so 2/3 gives a repeating decimal."
      ],
      explanation: [
        "2/3 = 0.666… (repeating). The others terminate.",
        "A denominator with factors other than 2 or 5 causes repeating."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What digit repeats when you convert <span class="math">5/9</span> to a decimal?',
      answer: "5",
      hints: [
        "Divide 5 by 9.",
        "5 ÷ 9 = 0.555…",
        "The repeating digit is 5."
      ],
      explanation: [
        "5 ÷ 9 = 0.5555…",
        "The digit 5 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">8/11</span> to a decimal. What two digits repeat?',
      choices: ["72", "27", "88", "81"],
      answer: "72",
      hints: [
        "Divide 8 by 11.",
        "8 ÷ 11 = 0.727272…",
        "The repeating block is 72."
      ],
      explanation: [
        "8 ÷ 11 = 0.727272…",
        "The digits 7 and 2 repeat in the pattern 72."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these fractions produces a terminating decimal?',
      choices: ["7/20", "5/6", "4/9", "2/11"],
      answer: "7/20",
      hints: [
        "A fraction terminates when the denominator has only factors of 2 and 5.",
        "20 = 2² × 5 — only factors of 2 and 5.",
        "7/20 = 0.35, a terminating decimal."
      ],
      explanation: [
        "20 = 2² × 5, so 7/20 terminates (0.35).",
        "The others (6, 9, 11) have prime factors other than 2 and 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What digit repeats when you convert <span class="math">1/9</span> to a decimal?',
      answer: "1",
      hints: [
        "Divide 1 by 9.",
        "1 ÷ 9 = 0.111…",
        "The repeating digit is 1."
      ],
      explanation: [
        "1 ÷ 9 = 0.1111…",
        "The digit 1 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">3/11</span> to a decimal. What two digits repeat?',
      choices: ["27", "72", "33", "37"],
      answer: "27",
      hints: [
        "Divide 3 by 11.",
        "3 ÷ 11 = 0.272727…",
        "The repeating block is 27."
      ],
      explanation: [
        "3 ÷ 11 = 0.272727…",
        "The digits 2 and 7 repeat in the pattern 27."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction gives a repeating decimal?',
      choices: ["5/6", "3/10", "1/8", "7/25"],
      answer: "5/6",
      hints: [
        "A fraction gives a terminating decimal when the denominator has only factors of 2 and 5.",
        "10 = 2×5, 8 = 2³, 25 = 5². These all terminate.",
        "6 = 2 × 3 — the factor 3 makes it repeating."
      ],
      explanation: [
        "5/6 = 0.8333… (repeating). The others terminate.",
        "A denominator with factors other than 2 or 5 causes repeating."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What digit repeats when you convert <span class="math">3/9</span> (in lowest terms <span class="math">1/3</span>) to a decimal?',
      answer: "3",
      hints: [
        "Simplify first: 3/9 = 1/3.",
        "1 ÷ 3 = 0.333…",
        "The repeating digit is 3."
      ],
      explanation: [
        "3/9 = 1/3 = 0.333…",
        "The digit 3 repeats."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">9/11</span> to a decimal. What two digits repeat?',
      choices: ["81", "18", "99", "91"],
      answer: "81",
      hints: [
        "Divide 9 by 11.",
        "9 ÷ 11 = 0.818181…",
        "The repeating block is 81."
      ],
      explanation: [
        "9 ÷ 11 = 0.818181…",
        "The digits 8 and 1 repeat in the pattern 81."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which of these fractions produces a terminating decimal?',
      choices: ["9/40", "4/7", "5/12", "1/9"],
      answer: "9/40",
      hints: [
        "A fraction terminates when the denominator (in lowest terms) has only factors of 2 and 5.",
        "40 = 2³ × 5 — only factors of 2 and 5.",
        "9/40 = 0.225, a terminating decimal."
      ],
      explanation: [
        "40 = 2³ × 5, so 9/40 terminates (0.225).",
        "The others (7, 12, 9) have prime factors other than 2 and 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What digit repeats when you convert <span class="math">6/9</span> (in lowest terms <span class="math">2/3</span>) to a decimal?',
      answer: "6",
      hints: [
        "Simplify first: 6/9 = 2/3.",
        "2 ÷ 3 = 0.666…",
        "The repeating digit is 6."
      ],
      explanation: [
        "6/9 = 2/3 = 0.666…",
        "The digit 6 repeats.",
        "Any fraction x/9 repeats the digit x (when x < 9)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">6/11</span> to a decimal. What two digits repeat?',
      choices: ["54","45","66","56"],
      answer: "54",
      hints: [
        "Divide 6 by 11.",
        "6 ÷ 11 = 0.545454…",
        "The repeating block is 54."
      ],
      explanation: [
        "6 ÷ 11 = 0.545454…",
        "The digits 5 and 4 repeat in the pattern 54.",
        "Fractions with 11 in the denominator repeat in 2-digit blocks."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which of these fractions produces a terminating decimal?',
      choices: ["11/50","3/7","5/11","4/9"],
      answer: "11/50",
      hints: [
        "A fraction terminates when the denominator (in lowest terms) has only factors of 2 and 5.",
        "50 = 2 × 5² — only factors of 2 and 5.",
        "11/50 = 0.22, a terminating decimal."
      ],
      explanation: [
        "50 = 2 × 5², so 11/50 terminates (0.22).",
        "The others (7, 11, 9) have prime factors other than 2 and 5.",
        "Only denominators with factors of 2 and 5 terminate."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which fraction gives a repeating decimal?',
      choices: ["5/6", "3/8", "1/4", "7/20"],
      answer: "5/6",
      hints: [
        "A fraction gives a terminating decimal if the denominator (in simplest form) only has factors of 2 and 5.",
        "8 = 2³ (terminating), 4 = 2² (terminating), 20 = 2² × 5 (terminating).",
        "6 = 2 × 3. Since 3 is not 2 or 5, 5/6 repeats."
      ],
      explanation: [
        "5/6: denominator 6 = 2 × 3. The factor 3 causes repetition.",
        "5 ÷ 6 = 0.8333... (repeating)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the repeating digit in the decimal form of <span class="math">\frac{2}{9}</span>?',
      answer: "2",
      hints: [
        "Divide 2 by 9.",
        "2 ÷ 9 = 0.2222...",
        "The repeating digit is 2."
      ],
      explanation: [
        "2 ÷ 9 = 0.222... = 0.\overline{2}.",
        "The repeating digit is 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">\frac{7}{11}</span> as a repeating decimal?',
      choices: ["0.636363...", "0.777...", "0.6363...", "0.6777..."],
      answer: "0.636363...",
      hints: [
        "Divide 7 by 11.",
        "7 ÷ 11 = 0.636363...",
        "The repeating block is 63."
      ],
      explanation: [
        "7 ÷ 11 = 0.\overline{63} = 0.636363...",
        "The two-digit block 63 repeats forever."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction gives a repeating decimal?',
      choices: ["5/6", "3/8", "1/4", "7/10"],
      answer: "5/6",
      hints: [
        "A fraction gives a terminating decimal if the denominator (in lowest terms) has only factors of 2 and 5.",
        "8 = 2³ ✓, 4 = 2² ✓, 10 = 2×5 ✓.",
        "6 = 2×3 — the factor 3 means it repeats."
      ],
      explanation: [
        "5/6: denominator has factor 3, so it repeats (0.8333...).",
        "3/8 = 0.375, 1/4 = 0.25, 7/10 = 0.7 — all terminate.",
        "Only 5/6 has a repeating decimal."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">2/9</span> to a decimal. What digit repeats?',
      answer: "2",
      hints: [
        "Divide 2 by 9: 2 ÷ 9 = 0.222...",
        "The digit 2 repeats infinitely.",
        "The repeating digit is 2."
      ],
      explanation: [
        "2 ÷ 9 = 0.2222...",
        "The digit 2 repeats.",
        "We write this as 0.2 with a bar over the 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is <span class="math">5/11</span> as a repeating decimal?',
      choices: ["0.454545...", "0.555...", "0.511...", "0.4555..."],
      answer: "0.454545...",
      hints: [
        "Divide 5 by 11: 50 ÷ 11 = 4 R6, 60 ÷ 11 = 5 R5.",
        "The pattern 45 repeats: 0.454545...",
        "The repeating block is 45."
      ],
      explanation: [
        "5 ÷ 11 = 0.454545...",
        "The two-digit block 45 repeats infinitely.",
        "We write this as 0.45 with a bar over 45."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What digit repeats when you convert <span class="math">1/9</span> to a decimal?',
      answer: "1",
      hints: [
        "Divide 1 by 9: 1 ÷ 9 = 0.111...",
        "The digit 1 repeats forever.",
        "1/9 = 0.1̄."
      ],
      explanation: [
        "1 ÷ 9 = 0.1111...",
        "The repeating digit is 1.",
        "All fractions with denominator 9 have a single repeating digit equal to the numerator."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which of these fractions produces a terminating decimal?',
      choices: ["3/16", "5/11", "4/9", "2/7"],
      answer: "3/16",
      hints: [
        "A fraction terminates when its denominator (in lowest terms) has only factors of 2 and/or 5.",
        "16 = 2⁴ — only factors of 2.",
        "11, 9, and 7 have other prime factors."
      ],
      explanation: [
        "16 = 2⁴ (only factors of 2), so 3/16 terminates.",
        "3/16 = 0.1875.",
        "The others produce repeating decimals."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">10/11</span> to a decimal. What two digits repeat?',
      choices: ["90", "09", "91", "10"],
      answer: "90",
      hints: [
        "Divide 10 by 11: 10 ÷ 11 = 0.909090...",
        "The digits 9 and 0 repeat in that order.",
        "10/11 = 0.90̄."
      ],
      explanation: [
        "10 ÷ 11 = 0.909090...",
        "The repeating pair is 90.",
        "All fractions with denominator 11 repeat with a two-digit pattern."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction equals <span class="math">0.\overline{27}</span> (0.272727...)?',
      choices: ["3/11","27/100","27/99","9/33"],
      answer: "3/11",
      hints: [
        "Let x = 0.272727... Then 100x = 27.2727...",
        "100x − x = 27, so 99x = 27.",
        "x = 27/99 = 3/11."
      ],
      explanation: [
        "0.272727... = 27/99.",
        "Simplify: GCD(27, 99) = 9. 27/99 = 3/11.",
        "The fraction is 3/11."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Convert <span class="math">\frac{5}{6}</span> to a decimal. What digit repeats?',
      answer: "3",
      hints: [
        "Divide 5 by 6.",
        "5 ÷ 6 = 0.8333...",
        "The repeating digit is 3."
      ],
      explanation: [
        "5 ÷ 6 = 0.8333...",
        "The digit 3 repeats.",
        "The answer is 3."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Convert <span class="math">\frac{4}{9}</span> to a repeating decimal.',
      choices: ["0.444...","0.49","0.494949...","0.4"],
      answer: "0.444...",
      hints: [
        "Divide 4 by 9.",
        "4 ÷ 9 = 0.4444...",
        "The digit 4 repeats infinitely."
      ],
      explanation: [
        "4 ÷ 9 = 0.4444...",
        "This is a repeating decimal: 0.4̄.",
        "The answer is 0.444..."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Convert <span class="math">1/3</span> to a decimal.',
      choices: ["0.333...", "0.3", "0.33", "0.13"],
      answer: "0.333...",
      hints: [
        "Divide 1 by 3.",
        "1 ÷ 3 = 0.3333... (the 3 repeats forever).",
        "This is a repeating decimal."
      ],
      explanation: [
        "1 ÷ 3 = <strong>0.333...</strong> (repeating).",
        "The bar notation is 0.3̄."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Convert <span class="math">5/6</span> to a decimal rounded to the nearest hundredth.',
      answer: "0.83",
      hints: [
        "Divide 5 by 6: 5 ÷ 6 = 0.8333...",
        "The decimal repeats: 0.8333...",
        "Rounded to nearest hundredth: 0.83."
      ],
      explanation: [
        "5 ÷ 6 = 0.8333... (repeating).",
        "Rounded to the nearest hundredth: <strong>0.83</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which fraction produces a repeating decimal?',
      choices: ["5/11", "3/8", "1/4", "7/16"],
      answer: "5/11",
      hints: [
        "A fraction produces a terminating decimal only if the denominator (in lowest terms) has only factors of 2 and 5.",
        "8 = 2³ ✓, 4 = 2² ✓, 16 = 2⁴ ✓.",
        "11 is prime and not 2 or 5, so 5/11 repeats."
      ],
      explanation: [
        "Denominators with only factors of 2 and 5 give terminating decimals.",
        "<strong>5/11</strong> repeats because 11 has no factors of 2 or 5."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 9: Decimal Word Problems (difficulty 2-3)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 2,
      question: 'A book costs $12.95 and a pen costs $3.49. What is the total cost?',
      choices: ["$16.44", "$16.34", "$15.44", "$16.54"],
      answer: "$16.44",
      hints: [
        "Line up the decimals and add.",
        "12.95 + 3.49: cents: 5 + 9 = 14, carry 1. Tenths: 9 + 4 + 1 = 14, carry 1.",
        "Ones: 2 + 3 + 1 = 6. Tens: 1. Total: $16.44."
      ],
      explanation: [
        "12.95 + 3.49 = 16.44.",
        "Total cost: $16.44."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Maya has $20.00 and spends $7.65. How much money does she have left?',
      answer: "12.35",
      hints: [
        "Subtract: 20.00 − 7.65.",
        "Borrow as needed.",
        "20.00 − 7.65 = 12.35."
      ],
      explanation: [
        "20.00 − 7.65 = 12.35.",
        "Maya has $12.35 left."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Gas costs $3.89 per gallon. How much do 4 gallons cost?',
      choices: ["$15.56", "$15.46", "$16.56", "$14.56"],
      answer: "$15.56",
      hints: [
        "Multiply: 3.89 × 4.",
        "389 × 4 = 1556. Two decimal places.",
        "Answer: $15.56."
      ],
      explanation: [
        "3.89 × 4 = 15.56.",
        "Four gallons cost $15.56."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rope is 18.6 meters long. It is cut into 3 equal pieces. How long is each piece?',
      answer: "6.2",
      hints: [
        "Divide: 18.6 ÷ 3.",
        "186 ÷ 3 = 62. One decimal place.",
        "Each piece is 6.2 meters."
      ],
      explanation: [
        "18.6 ÷ 3 = 6.2 meters.",
        "Each piece is 6.2 meters long."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Three friends split a bill of $47.25 equally. How much does each person pay?',
      choices: ["$15.75", "$15.25", "$16.75", "$14.75"],
      answer: "$15.75",
      hints: [
        "Divide: 47.25 ÷ 3.",
        "4725 ÷ 3 = 1575. Two decimal places.",
        "Each person pays $15.75."
      ],
      explanation: [
        "47.25 ÷ 3 = 15.75.",
        "Each person pays $15.75."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A notebook costs $4.75 and an eraser costs $1.30. What is the total cost? (Just the number, no $)',
      answer: "6.05",
      hints: [
        "Line up the decimals and add.",
        "4.75 + 1.30.",
        "Hundredths: 5 + 0 = 5. Tenths: 7 + 3 = 10, carry 1. Ones: 4 + 1 + 1 = 6. Answer: 6.05."
      ],
      explanation: [
        "4.75 + 1.30 = 6.05.",
        "Total cost: $6.05."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Paint costs $5.45 per can. How much do 6 cans cost?',
      choices: ["$32.70", "$33.70", "$30.70", "$32.07"],
      answer: "$32.70",
      hints: [
        "Multiply: 5.45 × 6.",
        "545 × 6 = 3270. Two decimal places.",
        "Answer: $32.70."
      ],
      explanation: [
        "5.45 × 6 = 32.70.",
        "Six cans cost $32.70."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A race is 10.5 km. Liam has run 6.78 km. How much farther does he need to run?',
      choices: ["3.72 km", "4.72 km", "3.28 km", "4.28 km"],
      answer: "3.72 km",
      hints: [
        "Subtract: 10.50 − 6.78.",
        "Hundredths: 0 − 8 → borrow, 10 − 8 = 2. Tenths: 4 − 7 → borrow, 14 − 7 = 7.",
        "Ones: 9 − 6 = 3. Answer: 3.72 km."
      ],
      explanation: [
        "10.50 − 6.78 = 3.72.",
        "Liam needs to run 3.72 more km."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A backpack costs $24.50 and a lunchbox costs $8.75. What is the total cost? (Just the number, no $)',
      answer: "33.25",
      hints: [
        "Line up the decimals and add.",
        "24.50 + 8.75.",
        "Hundredths: 0 + 5 = 5. Tenths: 5 + 7 = 12, carry 1. Ones: 4 + 8 + 1 = 13. Tens: 2 + 1 = 3. Answer: 33.25."
      ],
      explanation: [
        "24.50 + 8.75 = 33.25.",
        "Total cost: $33.25."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Fabric costs $6.25 per meter. How much do 8 meters cost?',
      choices: ["$50.00", "$48.00", "$52.00", "$46.00"],
      answer: "$50.00",
      hints: [
        "Multiply: 6.25 × 8.",
        "625 × 8 = 5000. Two decimal places.",
        "Answer: $50.00."
      ],
      explanation: [
        "6.25 × 8 = 50.00.",
        "Eight meters cost $50.00."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A board is 15.6 meters long. It is cut into 4 equal pieces. How long is each piece?',
      answer: "3.9",
      hints: [
        "Divide: 15.6 ÷ 4.",
        "156 ÷ 4 = 39. One decimal place.",
        "Each piece is 3.9 meters."
      ],
      explanation: [
        "15.6 ÷ 4 = 3.9 meters.",
        "Each piece is 3.9 meters long."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A sandwich costs $5.85 and a drink costs $2.49. What is the total?',
      choices: ["$8.34", "$8.24", "$7.34", "$8.44"],
      answer: "$8.34",
      hints: [
        "Line up the decimals and add: 5.85 + 2.49.",
        "Hundredths: 5 + 9 = 14, carry 1. Tenths: 8 + 4 + 1 = 13, carry 1.",
        "Ones: 5 + 2 + 1 = 8. Answer: $8.34."
      ],
      explanation: [
        "5.85 + 2.49 = 8.34.",
        "Total: $8.34."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A wire is 22.4 meters long. It is cut into 7 equal pieces. How long is each piece?',
      answer: "3.2",
      hints: [
        "Divide: 22.4 ÷ 7.",
        "224 ÷ 7 = 32. One decimal place.",
        "Each piece is 3.2 meters."
      ],
      explanation: [
        "22.4 ÷ 7 = 3.2 meters.",
        "Each piece is 3.2 meters long."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Apples cost $2.15 per pound. How much do 5 pounds cost?',
      choices: ["$10.75", "$10.25", "$11.75", "$10.50"],
      answer: "$10.75",
      hints: [
        "Multiply: 2.15 × 5.",
        "215 × 5 = 1075. Two decimal places.",
        "Answer: $10.75."
      ],
      explanation: [
        "2.15 × 5 = 10.75.",
        "Five pounds cost $10.75."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A shirt costs $18.50 and a hat costs $9.75. What is the total cost? (Just the number, no $)',
      answer: "28.25",
      hints: [
        "Line up the decimals and add.",
        "18.50 + 9.75.",
        "Hundredths: 0 + 5 = 5. Tenths: 5 + 7 = 12, carry 1. Ones: 8 + 9 + 1 = 18. Tens: 1 + 1 = 2. Answer: 28.25."
      ],
      explanation: [
        "18.50 + 9.75 = 28.25.",
        "Total cost: $28.25."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Tiles cost $4.35 each. How much do 7 tiles cost?',
      choices: ["$30.45", "$30.35", "$31.45", "$29.45"],
      answer: "$30.45",
      hints: [
        "Multiply: 4.35 × 7.",
        "435 × 7 = 3045. Two decimal places.",
        "Answer: $30.45."
      ],
      explanation: [
        "4.35 × 7 = 30.45.",
        "Seven tiles cost $30.45."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trail is 14.4 km long. Sophia has hiked 8.65 km. How much farther does she need to hike?',
      choices: ["5.75 km", "6.75 km", "5.25 km", "6.25 km"],
      answer: "5.75 km",
      hints: [
        "Subtract: 14.40 − 8.65.",
        "Hundredths: 0 − 5 → borrow, 10 − 5 = 5. Tenths: 3 − 6 → borrow, 13 − 6 = 7.",
        "Ones: 3 − 8 → borrow, 13 − 8 = 5. Answer: 5.75 km."
      ],
      explanation: [
        "14.40 − 8.65 = 5.75.",
        "Sophia needs to hike 5.75 more km."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A marker costs $2.35 and a folder costs $1.89. What is the total cost? (Just the number, no $)',
      answer: "4.24",
      hints: [
        "Line up the decimals and add: 2.35 + 1.89.",
        "Hundredths: 5 + 9 = 14, carry 1. Tenths: 3 + 8 + 1 = 12, carry 1.",
        "Ones: 2 + 1 + 1 = 4. Answer: 4.24."
      ],
      explanation: [
        "2.35 + 1.89 = 4.24.",
        "Total cost: $4.24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Ribbon costs $1.85 per meter. How much do 9 meters cost?',
      choices: ["$16.65", "$17.65", "$16.55", "$15.65"],
      answer: "$16.65",
      hints: [
        "Multiply: 1.85 × 9.",
        "185 × 9 = 1665. Two decimal places.",
        "Answer: $16.65."
      ],
      explanation: [
        "1.85 × 9 = 16.65.",
        "Nine meters cost $16.65."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A pipe is 25.2 meters long. It is cut into 6 equal pieces. How long is each piece?',
      answer: "4.2",
      hints: [
        "Divide: 25.2 ÷ 6.",
        "252 ÷ 6 = 42. One decimal place.",
        "Each piece is 4.2 meters."
      ],
      explanation: [
        "25.2 ÷ 6 = 4.2 meters.",
        "Each piece is 4.2 meters long."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A pencil costs $1.25 and a ruler costs $2.89. What is the total cost?',
      choices: ["$4.14","$4.04","$3.14","$4.24"],
      answer: "$4.14",
      hints: [
        "Line up the decimals and add: 1.25 + 2.89.",
        "Hundredths: 5 + 9 = 14, carry 1. Tenths: 2 + 8 + 1 = 11, carry 1.",
        "Ones: 1 + 2 + 1 = 4. Answer: $4.14."
      ],
      explanation: [
        "1.25 + 2.89 = 4.14.",
        "Total cost: $4.14.",
        "Remember to carry when digits sum exceeds 9."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A tube is 16.8 meters long. It is cut into 5 equal pieces. How long is each piece?',
      answer: "3.36",
      hints: [
        "Divide: 16.8 ÷ 5.",
        "168 ÷ 5 = 33.6. One decimal place in dividend.",
        "Each piece is 3.36 meters."
      ],
      explanation: [
        "16.8 ÷ 5 = 3.36 meters.",
        "Each piece is 3.36 meters long.",
        "Move decimal: 168 tenths ÷ 5 = 33.6 tenths = 3.36."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Stickers cost $0.75 each. How much do 8 stickers cost?',
      choices: ["$6.00","$6.75","$5.75","$7.00"],
      answer: "$6.00",
      hints: [
        "Multiply: 0.75 × 8.",
        "75 × 8 = 600. Two decimal places.",
        "Answer: $6.00."
      ],
      explanation: [
        "0.75 × 8 = 6.00.",
        "Eight stickers cost $6.00.",
        "75 cents × 8 = 600 cents = $6.00."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A book costs $14.75 and a pen costs $3.49. How much do they cost together?',
      answer: "18.24",
      hints: [
        "Add the two prices: 14.75 + 3.49.",
        "Line up decimal points and add.",
        "14.75 + 3.49 = 18.24."
      ],
      explanation: [
        "14.75 + 3.49 = 18.24.",
        "The total cost is $18.24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'You buy 3 bags of apples at $2.65 each. How much change do you get from $10?',
      choices: ["$2.05", "$2.15", "$1.95", "$7.95"],
      answer: "$2.05",
      hints: [
        "Total cost: 3 × $2.65.",
        "3 × 2.65 = $7.95.",
        "Change: $10.00 - $7.95 = $2.05."
      ],
      explanation: [
        "3 × $2.65 = $7.95.",
        "Change: $10.00 - $7.95 = $2.05."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A ribbon is 5.4 meters long. If you cut it into pieces that are 0.45 meters each, how many pieces do you get?',
      answer: "12",
      hints: [
        "Divide: 5.4 ÷ 0.45.",
        "Multiply both by 100: 540 ÷ 45.",
        "540 ÷ 45 = 12."
      ],
      explanation: [
        "5.4 ÷ 0.45 = 540 ÷ 45 = 12.",
        "You get 12 pieces."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A notebook costs <span class="math">$3.45</span> and a pen costs <span class="math">$1.78</span>. What is the total cost?',
      answer: "5.23",
      hints: [
        "Add the two prices: 3.45 + 1.78.",
        "5 + 8 = 13, write 3 carry 1. 4 + 7 + 1 = 12, write 2 carry 1.",
        "3 + 1 + 1 = 5. Total: $5.23."
      ],
      explanation: [
        "3.45 + 1.78 = 5.23.",
        "Line up the decimals and add column by column.",
        "The total cost is $5.23."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Sarah buys 3 items at <span class="math">$2.65</span> each. How much does she spend?',
      choices: ["$7.95", "$7.85", "$8.05", "$6.95"],
      answer: "$7.95",
      hints: [
        "Multiply: 3 × 2.65.",
        "3 × 265 = 795.",
        "Place decimal: $7.95."
      ],
      explanation: [
        "3 × 2.65 = 7.95.",
        "Multiply as whole numbers, then place the decimal.",
        "Sarah spends $7.95."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rope is <span class="math">4.5</span> meters long. It is cut into pieces of <span class="math">0.75</span> meter each. How many pieces?',
      choices: ["6", "5", "7", "4"],
      answer: "6",
      hints: [
        "Divide: 4.5 ÷ 0.75.",
        "Multiply both by 100: 450 ÷ 75.",
        "450 ÷ 75 = 6."
      ],
      explanation: [
        "4.5 ÷ 0.75 = 450 ÷ 75 = 6.",
        "6 pieces can be cut.",
        "The answer is 6."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A box weighs <span class="math">3.75</span> kg. A second box weighs <span class="math">2.48</span> kg. What is their combined weight?',
      answer: "6.23",
      hints: [
        "Add the two weights: 3.75 + 2.48.",
        "Hundredths: 5 + 8 = 13 → write 3, carry 1.",
        "Tenths: 7 + 4 + 1 = 12 → write 2, carry 1. Ones: 3 + 2 + 1 = 6."
      ],
      explanation: [
        "3.75 + 2.48 = 6.23.",
        "The combined weight is 6.23 kg.",
        "Line up decimal points and add column by column."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Juice costs <span class="math">$2.35</span> per bottle. How much do 7 bottles cost?',
      choices: ["$16.45", "$16.35", "$14.45", "$15.45"],
      answer: "$16.45",
      hints: [
        "Multiply: 2.35 × 7.",
        "235 × 7 = 1645. Place decimal 2 places: 16.45.",
        "The cost is $16.45."
      ],
      explanation: [
        "2.35 × 7 = 16.45.",
        "The total cost is $16.45.",
        "Multiply as whole numbers, then place the decimal."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A wire is <span class="math">19.2</span> meters long. It is cut into 8 equal pieces. How long is each piece?',
      choices: ["2.4 m", "2.04 m", "24 m", "2.5 m"],
      answer: "2.4 m",
      hints: [
        "Divide: 19.2 ÷ 8.",
        "192 ÷ 8 = 24. Place decimal: 2.4.",
        "Each piece is 2.4 meters."
      ],
      explanation: [
        "19.2 ÷ 8 = 2.4.",
        "Each piece is 2.4 meters long.",
        "Check: 8 × 2.4 = 19.2 ✓."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A book costs <span class="math">$12.75</span>. If you pay with a <span class="math">$20</span> bill, how much change do you get?',
      answer: "7.25",
      hints: [
        "Subtract: 20.00 − 12.75.",
        "Borrow: 20.00 − 12.75 = 7.25.",
        "Your change is $7.25."
      ],
      explanation: [
        "20.00 − 12.75 = 7.25.",
        "You get $7.25 in change.",
        "Always line up the decimal points when subtracting."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A ribbon costs <span class="math">$3.45</span> per meter. What is the cost of <span class="math">4</span> meters?',
      choices: ["$13.80","$12.80","$7.45","$34.50"],
      answer: "$13.80",
      hints: [
        "Multiply: 3.45 × 4.",
        "345 × 4 = 1380. Two decimal places: $13.80.",
        "The cost is $13.80."
      ],
      explanation: [
        "3.45 × 4 = 13.80.",
        "The cost of 4 meters is $13.80.",
        "Multiply then place the decimal."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Three friends split a bill of <span class="math">$27.60</span> equally. How much does each person pay?',
      choices: ["$9.20","$9.00","$8.20","$9.87"],
      answer: "$9.20",
      hints: [
        "Divide: 27.60 ÷ 3.",
        "27.60 ÷ 3 = 9.20.",
        "Each person pays $9.20."
      ],
      explanation: [
        "27.60 ÷ 3 = 9.20.",
        "Each person pays $9.20.",
        "The answer is $9.20."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'You buy a book for $12.49 and a pen for $3.75. How much change do you get from $20?',
      answer: "3.76",
      hints: [
        "First find the total: 12.49 + 3.75 = 16.24.",
        "Then subtract from 20: 20.00 − 16.24.",
        "20.00 − 16.24 = 3.76."
      ],
      explanation: [
        "Total: 12.49 + 3.75 = 16.24.",
        "Change: 20.00 − 16.24 = <strong>$3.76</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Gas costs $3.45 per gallon. How much do 6.2 gallons cost?',
      choices: ["$21.39", "$21.40", "$20.70", "$21.93"],
      answer: "$21.39",
      hints: [
        "Multiply: 3.45 × 6.2.",
        "345 × 62 = 21390. Three decimal places total.",
        "21.390 = $21.39."
      ],
      explanation: [
        "3.45 × 6.2 = <strong>$21.39</strong>.",
        "Multiply as whole numbers then place the decimal."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A runner completes a 5K in 23.45 minutes on Monday and 22.78 minutes on Wednesday. How much faster was Wednesday?',
      answer: "0.67",
      hints: [
        "Subtract: 23.45 − 22.78.",
        "Ones: borrow, 15 − 8 = 7 (hundredths). 13 − 7 = 6 (tenths).",
        "23.45 − 22.78 = 0.67."
      ],
      explanation: [
        "23.45 − 22.78 = <strong>0.67</strong> minutes faster.",
        "Line up decimals and subtract carefully."
      ]
    }
  ],

  // --------------------------------------------------
  // Topic 10: Decimal Place Value (difficulty 3-4)
  // --------------------------------------------------
  [
    {
      type: "mc", difficulty: 3,
      question: 'In the number <span class="math">4.738</span>, what is the value of the digit 3?',
      choices: ["3 hundredths", "3 tenths", "3 thousandths", "3 ones"],
      answer: "3 hundredths",
      hints: [
        "After the decimal: first digit is tenths, second is hundredths, third is thousandths.",
        "The digits are 7 (tenths), 3 (hundredths), 8 (thousandths).",
        "The 3 is in the hundredths place."
      ],
      explanation: [
        "In 4.738: 7 is tenths, 3 is hundredths, 8 is thousandths.",
        "The value of 3 is 3 hundredths (0.03)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the value of the 6 in <span class="math">2.146</span>? Write as a decimal.',
      answer: "0.006",
      hints: [
        "Count places after the decimal: 1 is tenths, 4 is hundredths, 6 is thousandths.",
        "The 6 is in the thousandths place.",
        "Its value is 6/1000 = 0.006."
      ],
      explanation: [
        "The 6 is in the thousandths place.",
        "Value: 0.006."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Which number has a 5 in the ten-thousandths place?',
      choices: ["3.00057", "3.0057", "3.057", "3.50007"],
      answer: "3.0057",
      hints: [
        "Ten-thousandths is the 4th place after the decimal.",
        "In 3.0057: 0 tenths, 0 hundredths, 5 thousandths, 7 ten-thousandths. That is not right.",
        "Wait — recount 3.0057: 0 (tenths), 0 (hundredths), 5 (thousandths), 7 (ten-thousandths). Hmm, let me check 3.00057."
      ],
      explanation: [
        "3.0057: positions are 0 (tenths), 0 (hundredths), 5 (thousandths), 7 (ten-thousandths).",
        "Actually we need 5 in the ten-thousandths (4th) place. In 3.00057: 0,0,0,5,7 — the 5 is in the ten-thousandths place. But let us re-examine the original choices."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'Write <span class="math">9 tenths + 4 hundredths + 2 thousandths</span> as a decimal.',
      answer: "0.942",
      hints: [
        "9 tenths = 0.9.",
        "4 hundredths = 0.04.",
        "2 thousandths = 0.002. Add them: 0.9 + 0.04 + 0.002 = 0.942."
      ],
      explanation: [
        "0.9 + 0.04 + 0.002 = 0.942.",
        "Answer: 0.942."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many times greater is the 4 in <span class="math">0.4</span> than the 4 in <span class="math">0.04</span>?',
      choices: ["10 times", "100 times", "4 times", "2 times"],
      answer: "10 times",
      hints: [
        "0.4 = 4 tenths. 0.04 = 4 hundredths.",
        "One tenth is 10 times one hundredth.",
        "So the 4 in 0.4 is 10 times greater."
      ],
      explanation: [
        "0.4 = 4/10, 0.04 = 4/100.",
        "4/10 ÷ 4/100 = 100/10 = 10. It is 10 times greater."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'In the number <span class="math">5.0923</span>, what place is the digit 9 in? (Answer: tenths, hundredths, thousandths, or ten-thousandths)',
      answer: "hundredths",
      hints: [
        "After the decimal: first digit is tenths, second is hundredths.",
        "5.0923: 0 is tenths, 9 is hundredths.",
        "The 9 is in the hundredths place."
      ],
      explanation: [
        "In 5.0923: 0 is tenths, 9 is hundredths, 2 is thousandths, 3 is ten-thousandths.",
        "The 9 is in the hundredths place."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Write <span class="math">7 ones + 3 tenths + 0 hundredths + 6 thousandths</span> as a decimal.',
      choices: ["7.306", "7.036", "7.360", "7.603"],
      answer: "7.306",
      hints: [
        "7 ones = 7. 3 tenths = 0.3. 0 hundredths = 0.00. 6 thousandths = 0.006.",
        "Add: 7 + 0.3 + 0.00 + 0.006.",
        "7.306."
      ],
      explanation: [
        "7 + 0.3 + 0.00 + 0.006 = 7.306.",
        "Answer: 7.306."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is the value of the 8 in <span class="math">0.0081</span>?',
      choices: ["8 thousandths", "8 hundredths", "8 ten-thousandths", "8 tenths"],
      answer: "8 thousandths",
      hints: [
        "Count places: 0 tenths, 0 hundredths, 8 thousandths, 1 ten-thousandths.",
        "The 8 is in the thousandths place.",
        "Its value is 8/1000 = 0.008."
      ],
      explanation: [
        "In 0.0081: 0 tenths, 0 hundredths, 8 thousandths, 1 ten-thousandths.",
        "The value of 8 is 8 thousandths (0.008)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Write <span class="math">5 hundredths + 8 thousandths</span> as a decimal.',
      answer: "0.058",
      hints: [
        "5 hundredths = 0.05.",
        "8 thousandths = 0.008.",
        "Add them: 0.05 + 0.008 = 0.058."
      ],
      explanation: [
        "0.05 + 0.008 = 0.058.",
        "Answer: 0.058."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'How many times greater is the 2 in <span class="math">0.2</span> than the 2 in <span class="math">0.002</span>?',
      choices: ["100 times", "10 times", "1000 times", "2 times"],
      answer: "100 times",
      hints: [
        "0.2 = 2 tenths. 0.002 = 2 thousandths.",
        "One tenth is 100 times one thousandth.",
        "So the 2 in 0.2 is 100 times greater."
      ],
      explanation: [
        "0.2 = 2/10, 0.002 = 2/1000.",
        "2/10 ÷ 2/1000 = 1000/10 = 100. It is 100 times greater."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'In the number <span class="math">3.14159</span>, what is the value of the digit 1 in the thousandths place?',
      choices: ["0.001", "0.01", "0.1", "0.0001"],
      answer: "0.001",
      hints: [
        "In 3.14159: 1 (tenths), 4 (hundredths), 1 (thousandths), 5 (ten-thousandths), 9 (hundred-thousandths).",
        "The 1 in the thousandths place has a value of 1/1000.",
        "1/1000 = 0.001."
      ],
      explanation: [
        "The digit 1 in the thousandths place has a value of 1 × 0.001 = 0.001.",
        "Answer: 0.001."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'In the number <span class="math">6.2947</span>, what digit is in the ten-thousandths place?',
      answer: "7",
      hints: [
        "Count places after the decimal: tenths, hundredths, thousandths, ten-thousandths.",
        "6.2947: 2 (tenths), 9 (hundredths), 4 (thousandths), 7 (ten-thousandths).",
        "The digit in the ten-thousandths place is 7."
      ],
      explanation: [
        "In 6.2947: 2 tenths, 9 hundredths, 4 thousandths, 7 ten-thousandths.",
        "The ten-thousandths digit is 7."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many times greater is the 5 in <span class="math">0.05</span> than the 5 in <span class="math">0.005</span>?',
      choices: ["10 times", "100 times", "5 times", "1000 times"],
      answer: "10 times",
      hints: [
        "0.05 = 5 hundredths. 0.005 = 5 thousandths.",
        "One hundredth is 10 times one thousandth.",
        "So the 5 in 0.05 is 10 times greater."
      ],
      explanation: [
        "0.05 = 5/100, 0.005 = 5/1000.",
        "5/100 ÷ 5/1000 = 1000/100 = 10. It is 10 times greater."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Write <span class="math">2 tens + 6 ones + 0 tenths + 3 hundredths + 8 thousandths</span> as a decimal.',
      choices: ["26.038", "26.308", "26.380", "26.083"],
      answer: "26.038",
      hints: [
        "2 tens = 20, 6 ones = 6, 0 tenths = 0.0, 3 hundredths = 0.03, 8 thousandths = 0.008.",
        "Add them: 20 + 6 + 0.0 + 0.03 + 0.008.",
        "26.038."
      ],
      explanation: [
        "20 + 6 + 0 + 0.03 + 0.008 = 26.038.",
        "Answer: 26.038."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the value of the 4 in <span class="math">7.0043</span>? Write as a decimal.',
      answer: "0.004",
      hints: [
        "Count places after the decimal: 0 is tenths, 0 is hundredths, 4 is thousandths, 3 is ten-thousandths.",
        "The 4 is in the thousandths place.",
        "Its value is 4/1000 = 0.004."
      ],
      explanation: [
        "The 4 is in the thousandths place.",
        "Value: 0.004."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'How many times greater is the 3 in <span class="math">0.3</span> than the 3 in <span class="math">0.003</span>?',
      choices: ["100 times", "10 times", "1000 times", "3 times"],
      answer: "100 times",
      hints: [
        "0.3 = 3 tenths. 0.003 = 3 thousandths.",
        "One tenth is 100 times one thousandth.",
        "So the 3 in 0.3 is 100 times greater."
      ],
      explanation: [
        "0.3 = 3/10, 0.003 = 3/1000.",
        "3/10 ÷ 3/1000 = 1000/10 = 100. It is 100 times greater."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Write <span class="math">4 tenths + 7 thousandths</span> as a decimal.',
      choices: ["0.407", "0.47", "4.007", "0.0407"],
      answer: "0.407",
      hints: [
        "4 tenths = 0.4.",
        "7 thousandths = 0.007.",
        "Add them: 0.4 + 0.007 = 0.407."
      ],
      explanation: [
        "0.4 + 0.007 = 0.407.",
        "Answer: 0.407."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'In the number <span class="math">8.30562</span>, what digit is in the hundred-thousandths place?',
      answer: "2",
      hints: [
        "Count places after the decimal: tenths, hundredths, thousandths, ten-thousandths, hundred-thousandths.",
        "8.30562: 3 (tenths), 0 (hundredths), 5 (thousandths), 6 (ten-thousandths), 2 (hundred-thousandths).",
        "The digit in the hundred-thousandths place is 2."
      ],
      explanation: [
        "In 8.30562: 3 tenths, 0 hundredths, 5 thousandths, 6 ten-thousandths, 2 hundred-thousandths.",
        "The hundred-thousandths digit is 2."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Write <span class="math">6 tenths + 1 hundredth + 9 thousandths</span> as a decimal.',
      choices: ["0.619", "0.691", "6.019", "0.0619"],
      answer: "0.619",
      hints: [
        "6 tenths = 0.6.",
        "1 hundredth = 0.01.",
        "9 thousandths = 0.009. Add them: 0.6 + 0.01 + 0.009 = 0.619."
      ],
      explanation: [
        "0.6 + 0.01 + 0.009 = 0.619.",
        "Answer: 0.619."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'How many times greater is the 7 in <span class="math">0.07</span> than the 7 in <span class="math">0.0007</span>?',
      choices: ["100 times", "10 times", "1000 times", "7 times"],
      answer: "100 times",
      hints: [
        "0.07 = 7 hundredths. 0.0007 = 7 ten-thousandths.",
        "One hundredth is 100 times one ten-thousandth.",
        "So the 7 in 0.07 is 100 times greater."
      ],
      explanation: [
        "0.07 = 7/100, 0.0007 = 7/10000.",
        "7/100 ÷ 7/10000 = 10000/100 = 100. It is 100 times greater."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In the number <span class="math">9.2157</span>, what is the value of the digit 5?',
      choices: ["5 thousandths","5 hundredths","5 ten-thousandths","5 tenths"],
      answer: "5 thousandths",
      hints: [
        "Count places after the decimal: 2 (tenths), 1 (hundredths), 5 (thousandths), 7 (ten-thousandths).",
        "The 5 is in the thousandths place.",
        "Its value is 5/1000 = 0.005."
      ],
      explanation: [
        "In 9.2157: 2 is tenths, 1 is hundredths, 5 is thousandths, 7 is ten-thousandths.",
        "The value of 5 is 5 thousandths (0.005).",
        "Count from the decimal point: 1st, 2nd, 3rd, 4th."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'Write <span class="math">3 tenths + 5 thousandths</span> as a decimal.',
      answer: "0.305",
      hints: [
        "3 tenths = 0.3.",
        "5 thousandths = 0.005.",
        "Add them: 0.3 + 0.005 = 0.305."
      ],
      explanation: [
        "0.3 + 0.005 = 0.305.",
        "Answer: 0.305.",
        "The hundredths place is 0 (no hundredths given)."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'How many times greater is the 6 in <span class="math">0.06</span> than the 6 in <span class="math">0.0006</span>?',
      choices: ["100 times","10 times","1000 times","6 times"],
      answer: "100 times",
      hints: [
        "0.06 = 6 hundredths. 0.0006 = 6 ten-thousandths.",
        "One hundredth is 100 times one ten-thousandth.",
        "So the 6 in 0.06 is 100 times greater."
      ],
      explanation: [
        "0.06 = 6/100, 0.0006 = 6/10000.",
        "6/100 ÷ 6/10000 = 10000/100 = 100.",
        "It is 100 times greater."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In the number <span class="math">7.2493</span>, the digit 9 is in which place?',
      choices: ["Thousandths", "Hundredths", "Ten-thousandths", "Tenths"],
      answer: "Thousandths",
      hints: [
        "After the decimal: 2 is tenths, 4 is hundredths, 9 is thousandths, 3 is ten-thousandths.",
        "Count the positions after the decimal point.",
        "The third position is thousandths."
      ],
      explanation: [
        "7.2493: 2=tenths, 4=hundredths, 9=thousandths, 3=ten-thousandths.",
        "The digit 9 is in the thousandths place."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'How many times greater is the 3 in <span class="math">3.045</span> than the 3 in <span class="math">0.0003</span>?',
      answer: "10000",
      hints: [
        "In 3.045, the 3 is in the ones place (value = 3).",
        "In 0.0003, the 3 is in the ten-thousandths place (value = 0.0003).",
        "3 ÷ 0.0003 = 10,000."
      ],
      explanation: [
        "3 (ones) ÷ 0.0003 (ten-thousandths) = 3/0.0003 = 10000.",
        "The 3 in 3.045 is 10,000 times greater."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Which number has a 5 in the hundred-thousandths place?',
      choices: ["0.00005", "0.0005", "0.005", "0.50000"],
      answer: "0.00005",
      hints: [
        "Count decimal places: tenths, hundredths, thousandths, ten-thousandths, hundred-thousandths.",
        "The fifth decimal place is hundred-thousandths.",
        "0.00005 has 5 in the fifth decimal place."
      ],
      explanation: [
        "Hundred-thousandths = 5th decimal place.",
        "0.00005 = 5 hundred-thousandths. The 5 is in the correct place."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In the number <span class="math">5.2847</span>, what is the value of the digit 4?',
      choices: ["4 thousandths", "4 hundredths", "4 tenths", "4 ten-thousandths"],
      answer: "4 thousandths",
      hints: [
        "Count decimal places: 2 is tenths, 8 is hundredths, 4 is thousandths.",
        "The third decimal place is thousandths.",
        "So the 4 represents 4 thousandths (0.004)."
      ],
      explanation: [
        "In 5.2847: 2=tenths, 8=hundredths, 4=thousandths, 7=ten-thousandths.",
        "The digit 4 is in the thousandths place.",
        "Its value is 4 thousandths or 0.004."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'What is <span class="math">0.006</span> written as a fraction? Give the denominator.',
      answer: "1000",
      hints: [
        "0.006 has the 6 in the thousandths place.",
        "So 0.006 = 6/1000.",
        "The denominator is 1000."
      ],
      explanation: [
        "0.006 = 6/1000.",
        "Three decimal places means thousandths.",
        "The denominator is 1000."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Which number has 7 in the ten-thousandths place?',
      choices: ["3.0527", "3.5072", "3.5270", "3.7052"],
      answer: "3.0527",
      hints: [
        "Count decimal places: 1st=tenths, 2nd=hundredths, 3rd=thousandths, 4th=ten-thousandths.",
        "Check 3.0527: 0=tenths, 5=hundredths, 2=thousandths, 7=ten-thousandths.",
        "Yes, 7 is in the ten-thousandths place."
      ],
      explanation: [
        "In 3.0527: 0=tenths, 5=hundredths, 2=thousandths, 7=ten-thousandths.",
        "The digit 7 is in the 4th decimal place (ten-thousandths).",
        "The answer is 3.0527."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In the number <span class="math">6.3041</span>, what is the value of the digit 4?',
      choices: ["0.004", "0.04", "0.4", "0.0004"],
      answer: "0.004",
      hints: [
        "Count decimal places: 3=tenths, 0=hundredths, 4=thousandths.",
        "The digit 4 is in the thousandths place.",
        "Its value is 4 × 0.001 = 0.004."
      ],
      explanation: [
        "In 6.3041: 3=tenths, 0=hundredths, 4=thousandths, 1=ten-thousandths.",
        "The digit 4 is in the thousandths place.",
        "Its value is 0.004."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'How many times greater is the 8 in <span class="math">0.08</span> than the 8 in <span class="math">0.0008</span>?',
      answer: "100",
      hints: [
        "The 8 in 0.08 is in the hundredths place: value = 0.08.",
        "The 8 in 0.0008 is in the ten-thousandths place: value = 0.0008.",
        "0.08 ÷ 0.0008 = 100."
      ],
      explanation: [
        "0.08 ÷ 0.0008 = 100.",
        "The 8 in 0.08 is 100 times greater than the 8 in 0.0008.",
        "Each place to the left is 10× greater, and it is 2 places apart: 10 × 10 = 100."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Write <span class="math">8 tenths + 2 thousandths + 5 ten-thousandths</span> as a decimal.',
      choices: ["0.8025", "0.825", "0.0825", "0.80025"],
      answer: "0.8025",
      hints: [
        "8 tenths = 0.8, 2 thousandths = 0.002, 5 ten-thousandths = 0.0005.",
        "Add them: 0.8 + 0.002 + 0.0005.",
        "The result is 0.8025."
      ],
      explanation: [
        "8 tenths = 0.8, 0 hundredths, 2 thousandths = 0.002, 5 ten-thousandths = 0.0005.",
        "Sum: 0.8 + 0.002 + 0.0005 = 0.8025.",
        "Place each digit in the correct position."
      ]
    }
,
    {
      type: "mc", difficulty: 4,
      question: 'In the number <span class="math">8.50267</span>, what digit is in the ten-thousandths place?',
      choices: ["6","2","7","5"],
      answer: "6",
      hints: [
        "Count places after decimal: 5 (tenths), 0 (hundredths), 2 (thousandths), 6 (ten-thousandths).",
        "The fourth decimal place is ten-thousandths.",
        "The digit is 6."
      ],
      explanation: [
        "8.50267: 5=tenths, 0=hundredths, 2=thousandths, 6=ten-thousandths, 7=hundred-thousandths.",
        "The ten-thousandths digit is 6.",
        "Count carefully from the decimal point."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Write <span class="math">2 tenths + 9 thousandths</span> as a decimal.',
      answer: "0.209",
      hints: [
        "2 tenths = 0.2.",
        "9 thousandths = 0.009.",
        "Add them: 0.2 + 0.009 = 0.209."
      ],
      explanation: [
        "0.2 + 0.009 = 0.209.",
        "The hundredths place is 0 (no hundredths given).",
        "Answer: 0.209."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'How many times greater is the 9 in <span class="math">0.09</span> than the 9 in <span class="math">0.0009</span>?',
      choices: ["100 times","10 times","1000 times","9 times"],
      answer: "100 times",
      hints: [
        "0.09 = 9 hundredths. 0.0009 = 9 ten-thousandths.",
        "One hundredth is 100 times one ten-thousandth.",
        "So the 9 in 0.09 is 100 times greater."
      ],
      explanation: [
        "0.09 = 9/100, 0.0009 = 9/10000.",
        "9/100 ÷ 9/10000 = 10000/100 = 100.",
        "It is 100 times greater."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'What is the value of the 7 in <span class="math">3.078</span>?',
      choices: ["7 hundredths", "7 tenths", "7 thousandths", "7 ones"],
      answer: "7 hundredths",
      hints: [
        "In 3.078: 0 is in the tenths place, 7 is in the hundredths place.",
        "The hundredths place is the second digit after the decimal.",
        "The 7 represents 7 hundredths = 0.07."
      ],
      explanation: [
        "3.078: 0=tenths, 7=hundredths, 8=thousandths.",
        "The 7 is worth <strong>7 hundredths</strong> (0.07)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'In the number <span class="math">6.4029</span>, what digit is in the thousandths place?',
      answer: "2",
      hints: [
        "Count places after the decimal: 4 (tenths), 0 (hundredths), 2 (thousandths).",
        "The thousandths place is the third digit after the decimal.",
        "The digit is 2."
      ],
      explanation: [
        "6.4029: 4=tenths, 0=hundredths, 2=thousandths, 9=ten-thousandths.",
        "The thousandths digit is <strong>2</strong>."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'How many times greater is the 4 in <span class="math">0.4</span> than the 4 in <span class="math">0.04</span>?',
      choices: ["10 times", "100 times", "4 times", "2 times"],
      answer: "10 times",
      hints: [
        "0.4 = 4 tenths. 0.04 = 4 hundredths.",
        "One tenth is 10 times one hundredth.",
        "So the 4 in 0.4 is 10 times the 4 in 0.04."
      ],
      explanation: [
        "0.4 = 4/10, 0.04 = 4/100.",
        "4/10 ÷ 4/100 = 100/10 = <strong>10 times</strong> greater."
      ]
    }
  ]
];
