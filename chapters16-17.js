// ===== Chapters 16-17: Functions & Linear Equations, 3D Geometry =====
// Pool format: tutorial (15), challenge (15), extraChallenge (varies), boss (30) per world

// ============================================================
// WORLD 15 — Function Fortress
// Chapter: Functions & Linear Equations
// ============================================================
WORLDS[15] = {
  id: 15, name: "Function Fortress", icon: "📈",
  chapter: "Functions & Linear Equations", color: "#00897b",
  bossName: "Linearix, the Slope Phantom",
  bossDesc: "A spectral figure that bends the coordinate plane to its will",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────

    // T0: Function Basics (tutorial 0-2, difficulty 1)
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'A pizza shop has a rule: you tell them how many toppings you want, and they tell you the price. Every input (number of toppings) gives exactly one output (price). What is this kind of rule called?',
        choices: ["A function", "A guess", "A pattern", "A variable"],
        answer: "A function",
        hints: [
          "A rule where each input gives exactly one output has a special name.",
          "Think of a machine: you put something in, you get one thing out.",
          "That kind of rule is called a function."
        ],
        explanation: [
          "A function is a rule that assigns exactly one output to each input.",
          "The pizza shop gives one price for each number of toppings — that is <strong>a function</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'A function machine doubles the input and adds 1. If the input is <span class="math">4</span>, what is the output?',
        answer: "9",
        hints: [
          "First, double the input: 2 × 4 = 8.",
          "Then add 1 to the result.",
          "8 + 1 = 9."
        ],
        explanation: [
          "Double 4: 2 × 4 = 8",
          "Add 1: 8 + 1 = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which table shows a function? (Each input should give exactly one output.)<br><br>Table A: Input 1→3, 2→5, 3→7<br>Table B: Input 1→3, 1→5, 2→7',
        choices: [
          "Table A only",
          "Table B only",
          "Both tables",
          "Neither table"
        ],
        answer: "Table A only",
        hints: [
          "In a function, each input can only give ONE output.",
          "In Table B, the input 1 gives two different outputs (3 and 5).",
          "Table A has each input giving exactly one output."
        ],
        explanation: [
          "Table B is NOT a function because input 1 maps to both 3 and 5.",
          "Table A IS a function — each input has exactly one output.",
          "Answer: <strong>Table A only</strong>"
        ]
      },

      // T1: Evaluating Functions (tutorial 3-5, difficulty 1)
      {
        type: "numeric", difficulty: 1,
        question: 'If <span class="math">f(x) = 2x + 3</span>, what is <span class="math">f(5)</span>?',
        answer: "13",
        hints: [
          "Replace every x with 5.",
          "f(5) = 2(5) + 3 = 10 + 3.",
          "= 13."
        ],
        explanation: [
          "f(5) = 2(5) + 3 = 10 + 3",
          "f(5) = <strong>13</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'If <span class="math">f(x) = 3x - 1</span>, what is <span class="math">f(4)</span>?',
        answer: "11",
        hints: [
          "Plug in x = 4 into the function.",
          "f(4) = 3(4) - 1 = 12 - 1.",
          "= 11."
        ],
        explanation: [
          "f(4) = 3(4) - 1 = 12 - 1",
          "f(4) = <strong>11</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'If <span class="math">f(x) = x + 7</span>, what is <span class="math">f(10)</span>?',
        choices: ["3", "10", "17", "70"],
        answer: "17",
        hints: [
          "Replace x with 10 in the formula.",
          "f(10) = 10 + 7.",
          "= 17."
        ],
        explanation: [
          "f(10) = 10 + 7",
          "f(10) = <strong>17</strong>"
        ]
      },

      // T2: Sequences (tutorial 6-8, difficulty 1-2)
      {
        type: "numeric", difficulty: 1,
        question: 'Find the next number in the arithmetic sequence: <span class="math">3, 7, 11, 15, ___</span>',
        answer: "19",
        hints: [
          "Find the pattern: how much is added each time?",
          "7 - 3 = 4, 11 - 7 = 4, 15 - 11 = 4. The common difference is 4.",
          "15 + 4 = 19."
        ],
        explanation: [
          "Common difference = 4 (each term increases by 4).",
          "Next term = 15 + 4 = <strong>19</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is the rule for the sequence <span class="math">5, 10, 15, 20, 25, ...</span>?',
        choices: ["Add 3", "Add 5", "Multiply by 2", "Add 10"],
        answer: "Add 5",
        hints: [
          "Look at the difference between consecutive terms.",
          "10 - 5 = 5, 15 - 10 = 5, 20 - 15 = 5.",
          "Each term goes up by 5."
        ],
        explanation: [
          "Each term increases by 5: 5, 10, 15, 20, 25, ...",
          "The rule is <strong>add 5</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'In the sequence <span class="math">2, 5, 8, 11, ...</span>, what is the 10th term?',
        answer: "29",
        hints: [
          "The common difference is 3 (each term goes up by 3).",
          "The nth term of an arithmetic sequence is: first term + (n - 1) × difference.",
          "10th term = 2 + (10 - 1) × 3 = 2 + 27 = 29."
        ],
        explanation: [
          "Common difference = 3. First term = 2.",
          "10th term = 2 + (10 - 1) × 3 = 2 + 27",
          "10th term = <strong>29</strong>"
        ]
      },

      // T3: Function Tables (tutorial 9-11, difficulty 2)
      {
        type: "numeric", difficulty: 2,
        question: 'Complete the function table for <span class="math">y = 3x - 1</span>. When <span class="math">x = 5</span>, what is <span class="math">y</span>?',
        answer: "14",
        hints: [
          "Substitute x = 5 into y = 3x - 1.",
          "y = 3(5) - 1 = 15 - 1.",
          "y = 14."
        ],
        explanation: [
          "y = 3(5) - 1 = 15 - 1",
          "y = <strong>14</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A function table shows: x = 1 → y = 5, x = 2 → y = 8, x = 3 → y = 11, x = 4 → y = 14. Which equation matches this table?',
        choices: ["y = 3x + 2", "y = 2x + 3", "y = 5x", "y = x + 4"],
        answer: "y = 3x + 2",
        hints: [
          "Try each equation with x = 1. The answer should be y = 5.",
          "y = 3(1) + 2 = 5 ✓. Now check x = 2: y = 3(2) + 2 = 8 ✓.",
          "y = 3x + 2 works for all values."
        ],
        explanation: [
          "Test y = 3x + 2: x=1 → 5 ✓, x=2 → 8 ✓, x=3 → 11 ✓, x=4 → 14 ✓",
          "The equation is <strong>y = 3x + 2</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'For the function <span class="math">y = 2x + 4</span>, what is <span class="math">y</span> when <span class="math">x = 7</span>?',
        answer: "18",
        hints: [
          "Plug in x = 7.",
          "y = 2(7) + 4 = 14 + 4.",
          "y = 18."
        ],
        explanation: [
          "y = 2(7) + 4 = 14 + 4",
          "y = <strong>18</strong>"
        ]
      },

      // T4: Plotting Points (tutorial 12-14, difficulty 2)
      {
        type: "mc", difficulty: 2,
        question: 'The point <span class="math">(3, -2)</span> is in which quadrant of the coordinate plane?',
        choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        answer: "Quadrant IV",
        hints: [
          "The x-coordinate is positive (3) and the y-coordinate is negative (-2).",
          "Quadrant I: (+, +). Quadrant II: (-, +). Quadrant III: (-, -). Quadrant IV: (+, -).",
          "Positive x and negative y means Quadrant IV."
        ],
        explanation: [
          "(3, -2) has positive x and negative y.",
          "That places it in <strong>Quadrant IV</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which quadrant contains the point <span class="math">(-4, 5)</span>?',
        choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        answer: "Quadrant II",
        hints: [
          "x is negative (-4) and y is positive (5).",
          "Quadrant II has negative x and positive y.",
          "(-4, 5) is in Quadrant II."
        ],
        explanation: [
          "(-4, 5): x is negative, y is positive.",
          "That is <strong>Quadrant II</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A soccer ball is kicked from position <span class="math">(0, 0)</span> to position <span class="math">(6, 0)</span> on a coordinate grid. The ball moved only along which axis?',
        choices: ["The x-axis", "The y-axis", "Neither axis", "Both axes"],
        answer: "The x-axis",
        hints: [
          "Look at the coordinates: both points have y = 0.",
          "The y-value did not change — only x changed from 0 to 6.",
          "Movement along y = 0 means along the x-axis."
        ],
        explanation: [
          "From (0, 0) to (6, 0): y stays at 0, x changes from 0 to 6.",
          "The ball moved along the <strong>x-axis</strong>."
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────

    // T5: Rate of Change (challenge 0-2, difficulty 2)
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'A plant was 3 cm tall on Day 1 and 12 cm tall on Day 4. What is the rate of change in height per day?',
        answer: "3",
        hints: [
          "Rate of change = (change in height) ÷ (change in days).",
          "Change in height = 12 - 3 = 9. Change in days = 4 - 1 = 3.",
          "Rate = 9 ÷ 3 = 3 cm per day."
        ],
        explanation: [
          "Rate of change = (12 - 3) ÷ (4 - 1) = 9 ÷ 3",
          "Rate = <strong>3</strong> cm per day"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Between the points <span class="math">(2, 8)</span> and <span class="math">(5, 20)</span>, what is the rate of change?',
        choices: ["3", "4", "6", "12"],
        answer: "4",
        hints: [
          "Rate of change = (change in y) ÷ (change in x).",
          "Change in y = 20 - 8 = 12. Change in x = 5 - 2 = 3.",
          "12 ÷ 3 = 4."
        ],
        explanation: [
          "Rate of change = (20 - 8) ÷ (5 - 2) = 12 ÷ 3",
          "Rate of change = <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A game character earns 5 coins at level 0 and 11 coins at level 3. What is the rate of change in coins per level?',
        answer: "2",
        hints: [
          "Rate of change = (change in coins) ÷ (change in level).",
          "Change in coins = 11 - 5 = 6. Change in levels = 3 - 0 = 3.",
          "6 ÷ 3 = 2."
        ],
        explanation: [
          "Rate = (11 - 5) ÷ (3 - 0) = 6 ÷ 3",
          "Rate = <strong>2</strong> coins per level"
        ]
      },

      // T6: Direct Variation (challenge 3-5, difficulty 2-3)
      {
        type: "numeric", difficulty: 2,
        question: 'The variable <span class="math">y</span> varies directly with <span class="math">x</span>. When <span class="math">x = 3</span>, <span class="math">y = 12</span>. What is the constant of variation <span class="math">k</span>?',
        answer: "4",
        hints: [
          "Direct variation means y = kx.",
          "Plug in: 12 = k × 3.",
          "k = 12 ÷ 3 = 4."
        ],
        explanation: [
          "y = kx → 12 = k(3)",
          "k = 12 ÷ 3 = <strong>4</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'If <span class="math">y = 6x</span> (direct variation), what is <span class="math">y</span> when <span class="math">x = 7</span>?',
        choices: ["13", "36", "42", "67"],
        answer: "42",
        hints: [
          "In direct variation y = kx, k = 6.",
          "Substitute x = 7: y = 6 × 7.",
          "y = 42."
        ],
        explanation: [
          "y = 6(7) = 42",
          "When x = 7, y = <strong>42</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A recipe uses a direct variation: <span class="math">y = 5x</span>, where <span class="math">x</span> is cups of flour and <span class="math">y</span> is number of cookies. How many cookies do you get from 9 cups of flour?',
        answer: "45",
        hints: [
          "Use y = 5x with x = 9.",
          "y = 5 × 9.",
          "y = 45."
        ],
        explanation: [
          "y = 5(9) = 45",
          "9 cups of flour makes <strong>45</strong> cookies."
        ]
      },

      // T7: Slope (challenge 6-8, difficulty 2-3)
      {
        type: "numeric", difficulty: 2,
        question: 'What is the slope of the line through <span class="math">(1, 2)</span> and <span class="math">(4, 8)</span>?',
        answer: "2",
        hints: [
          "Slope = rise ÷ run = (y₂ - y₁) ÷ (x₂ - x₁).",
          "(8 - 2) ÷ (4 - 1) = 6 ÷ 3.",
          "Slope = 2."
        ],
        explanation: [
          "Slope = (8 - 2) ÷ (4 - 1) = 6 ÷ 3",
          "Slope = <strong>2</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A horizontal line (like a flat road) has what type of slope?',
        choices: ["Positive slope", "Negative slope", "Zero slope", "Undefined slope"],
        answer: "Zero slope",
        hints: [
          "A horizontal line does not go up or down — it stays flat.",
          "Rise = 0 for a horizontal line.",
          "Slope = rise / run = 0 / (any number) = 0."
        ],
        explanation: [
          "A horizontal line has zero rise.",
          "Slope = 0 / run = <strong>zero slope</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Find the slope of the line through <span class="math">(2, 5)</span> and <span class="math">(6, 1)</span>.',
        answer: "-1",
        hints: [
          "Slope = (y₂ - y₁) ÷ (x₂ - x₁).",
          "(1 - 5) ÷ (6 - 2) = -4 ÷ 4.",
          "Slope = -1."
        ],
        explanation: [
          "Slope = (1 - 5) ÷ (6 - 2) = -4 ÷ 4",
          "Slope = <strong>-1</strong>"
        ]
      },

      // T8: Slope-Intercept Form (challenge 9-11, difficulty 3)
      {
        type: "mc", difficulty: 3,
        question: 'In the equation <span class="math">y = 3x + 5</span>, what is the slope?',
        choices: ["5", "3", "8", "15"],
        answer: "3",
        hints: [
          "Slope-intercept form is y = mx + b.",
          "m is the slope and b is the y-intercept.",
          "In y = 3x + 5, m = 3."
        ],
        explanation: [
          "y = mx + b → y = 3x + 5",
          "The slope m = <strong>3</strong> and the y-intercept b = 5."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the y-intercept of the line <span class="math">y = -2x + 7</span>?',
        choices: ["-2", "2", "7", "-7"],
        answer: "7",
        hints: [
          "In y = mx + b, the y-intercept is b.",
          "In y = -2x + 7, b = 7.",
          "The y-intercept is the value of y when x = 0."
        ],
        explanation: [
          "y = mx + b form: y = -2x + 7",
          "The y-intercept b = <strong>7</strong> (the line crosses the y-axis at 7)."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'For the line <span class="math">y = 4x - 3</span>, what is the value of <span class="math">y</span> when <span class="math">x = 0</span>?',
        answer: "-3",
        hints: [
          "Substitute x = 0 into y = 4x - 3.",
          "y = 4(0) - 3 = 0 - 3.",
          "y = -3. This is the y-intercept!"
        ],
        explanation: [
          "y = 4(0) - 3 = -3",
          "When x = 0, y = <strong>-3</strong> (this is the y-intercept)."
        ]
      },

      // T9: Writing Linear Equations (challenge 12-14, difficulty 3)
      {
        type: "mc", difficulty: 3,
        question: 'A line has a slope of 2 and a y-intercept of 5. What is the equation of the line?',
        choices: ["y = 5x + 2", "y = 2x + 5", "y = 2x - 5", "y = 5x - 2"],
        answer: "y = 2x + 5",
        hints: [
          "Use slope-intercept form: y = mx + b.",
          "m = slope = 2 and b = y-intercept = 5.",
          "y = 2x + 5."
        ],
        explanation: [
          "Slope m = 2, y-intercept b = 5.",
          "Equation: y = mx + b = <strong>y = 2x + 5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A line passes through <span class="math">(0, 3)</span> with a slope of 4. What is its equation?',
        choices: ["y = 3x + 4", "y = 4x + 3", "y = 4x - 3", "y = 3x - 4"],
        answer: "y = 4x + 3",
        hints: [
          "The point (0, 3) tells us the y-intercept is 3.",
          "Slope = 4, so m = 4 and b = 3.",
          "y = 4x + 3."
        ],
        explanation: [
          "y-intercept = 3 (from the point (0, 3)). Slope = 4.",
          "y = mx + b = <strong>y = 4x + 3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A line passes through <span class="math">(0, -1)</span> and <span class="math">(2, 5)</span>. What is the equation of the line?',
        choices: ["y = 3x - 1", "y = 2x - 1", "y = 3x + 1", "y = -x + 5"],
        answer: "y = 3x - 1",
        hints: [
          "First find the slope: (5 - (-1)) ÷ (2 - 0) = 6 ÷ 2 = 3.",
          "The y-intercept is -1 (from the point (0, -1)).",
          "y = 3x + (-1) = 3x - 1."
        ],
        explanation: [
          "Slope = (5 - (-1)) ÷ (2 - 0) = 6 ÷ 2 = 3",
          "y-intercept = -1. Equation: <strong>y = 3x - 1</strong>"
        ]
      }
    ],

    // ── Extra Challenge: Systems of Equations (T10, difficulty 3-4) ──
    extraChallenge: [
      {
        type: "numeric", difficulty: 3,
        question: 'Solve the system: <span class="math">y = x + 1</span> and <span class="math">y = 2x - 3</span>. What is the value of <span class="math">x</span>?',
        answer: "4",
        hints: [
          "Both equations equal y, so set them equal: x + 1 = 2x - 3.",
          "Subtract x from both sides: 1 = x - 3.",
          "Add 3 to both sides: x = 4."
        ],
        explanation: [
          "Set equal: x + 1 = 2x - 3",
          "1 + 3 = 2x - x → 4 = x",
          "x = <strong>4</strong> (and y = 4 + 1 = 5)"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve the system: <span class="math">x + y = 12</span> and <span class="math">y = 2x</span>. What is the value of <span class="math">y</span>?',
        choices: ["4", "6", "8", "10"],
        answer: "8",
        hints: [
          "Substitute y = 2x into the first equation: x + 2x = 12.",
          "3x = 12, so x = 4.",
          "Then y = 2(4) = 8."
        ],
        explanation: [
          "Substitute: x + 2x = 12 → 3x = 12 → x = 4",
          "y = 2(4) = <strong>8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Solve the system: <span class="math">y = x + 2</span> and <span class="math">y = 3x - 4</span>. What is the value of <span class="math">y</span> at the solution?',
        answer: "5",
        hints: [
          "Set equal: x + 2 = 3x - 4.",
          "2 + 4 = 3x - x → 6 = 2x → x = 3.",
          "y = 3 + 2 = 5."
        ],
        explanation: [
          "x + 2 = 3x - 4 → 6 = 2x → x = 3",
          "y = 3 + 2 = <strong>5</strong>"
        ]
      }
    ],

    // ── Boss (30 problems, difficulty 3-4) ──────────────
    boss: [
      // Boss Q1 — Evaluating Functions
      {
        type: "numeric", difficulty: 3,
        question: 'A dragon\u2019s fire power is modeled by <span class="math">f(x) = 5x - 7</span>. What is <span class="math">f(6)</span>?',
        answer: "23",
        hints: [
          "Replace x with 6.",
          "f(6) = 5(6) - 7 = 30 - 7.",
          "= 23."
        ],
        explanation: [
          "f(6) = 5(6) - 7 = 30 - 7",
          "f(6) = <strong>23</strong>"
        ]
      },
      // Boss Q2 — Slope
      {
        type: "mc", difficulty: 3,
        question: 'What is the slope of the line through <span class="math">(3, 1)</span> and <span class="math">(7, 9)</span>?',
        choices: ["2", "4", "8", "10"],
        answer: "2",
        hints: [
          "Slope = (y₂ - y₁) ÷ (x₂ - x₁).",
          "(9 - 1) ÷ (7 - 3) = 8 ÷ 4.",
          "Slope = 2."
        ],
        explanation: [
          "Slope = (9 - 1) ÷ (7 - 3) = 8 ÷ 4",
          "Slope = <strong>2</strong>"
        ]
      },
      // Boss Q3 — Sequences
      {
        type: "numeric", difficulty: 3,
        question: 'In the arithmetic sequence <span class="math">4, 9, 14, 19, ...</span>, what is the 8th term?',
        answer: "39",
        hints: [
          "Common difference = 9 - 4 = 5.",
          "nth term = first term + (n - 1) × difference.",
          "8th term = 4 + (8 - 1) × 5 = 4 + 35 = 39."
        ],
        explanation: [
          "Common difference = 5. First term = 4.",
          "8th term = 4 + 7(5) = 4 + 35",
          "8th term = <strong>39</strong>"
        ]
      },
      // Boss Q4 — Slope-Intercept Form
      {
        type: "mc", difficulty: 3,
        question: 'In the equation <span class="math">y = -3x + 10</span>, what is the slope?',
        choices: ["-3", "3", "10", "-10"],
        answer: "-3",
        hints: [
          "Slope-intercept form: y = mx + b.",
          "The slope is m, which is the number in front of x.",
          "m = -3."
        ],
        explanation: [
          "y = mx + b → y = -3x + 10",
          "Slope m = <strong>-3</strong>"
        ]
      },
      // Boss Q5 — Rate of Change
      {
        type: "numeric", difficulty: 3,
        question: 'A rocket is at 5 km altitude at time 1 minute and 21 km at time 5 minutes. What is the rate of change in km per minute?',
        answer: "4",
        hints: [
          "Rate = (change in altitude) ÷ (change in time).",
          "(21 - 5) ÷ (5 - 1) = 16 ÷ 4.",
          "= 4 km per minute."
        ],
        explanation: [
          "Rate = (21 - 5) ÷ (5 - 1) = 16 ÷ 4",
          "Rate = <strong>4</strong> km per minute"
        ]
      },
      // Boss Q6 — Writing Equations
      {
        type: "mc", difficulty: 3,
        question: 'Which equation has a slope of 5 and a y-intercept of -2?',
        choices: ["y = -2x + 5", "y = 5x - 2", "y = 5x + 2", "y = 2x - 5"],
        answer: "y = 5x - 2",
        hints: [
          "Use y = mx + b with m = 5 and b = -2.",
          "y = 5x + (-2) = 5x - 2.",
          "Look for y = 5x - 2 in the choices."
        ],
        explanation: [
          "Slope = 5, y-intercept = -2.",
          "y = mx + b = <strong>y = 5x - 2</strong>"
        ]
      },
      // Boss Q7 — Evaluating Functions
      {
        type: "numeric", difficulty: 3,
        question: 'If <span class="math">f(x) = 4x + 1</span>, what is <span class="math">f(7)</span>?',
        answer: "29",
        hints: [
          "Plug in x = 7.",
          "f(7) = 4(7) + 1 = 28 + 1.",
          "= 29."
        ],
        explanation: [
          "f(7) = 4(7) + 1 = 28 + 1",
          "f(7) = <strong>29</strong>"
        ]
      },
      // Boss Q8 — Coordinate Plane
      {
        type: "mc", difficulty: 3,
        question: 'In which quadrant is the point <span class="math">(-3, -5)</span>?',
        choices: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
        answer: "Quadrant III",
        hints: [
          "Both coordinates are negative.",
          "Quadrant III has (-, -).",
          "(-3, -5) is in Quadrant III."
        ],
        explanation: [
          "x = -3 (negative), y = -5 (negative).",
          "Both negative means <strong>Quadrant III</strong>."
        ]
      },
      // Boss Q9 — Direct Variation
      {
        type: "numeric", difficulty: 3,
        question: 'The number of stickers <span class="math">y</span> varies directly with the number of packs <span class="math">x</span>. If 6 packs contain 18 stickers, how many stickers are in 10 packs?',
        answer: "30",
        hints: [
          "Find k: y = kx → 18 = k(6) → k = 3.",
          "Now use k = 3 for x = 10.",
          "y = 3(10) = 30."
        ],
        explanation: [
          "k = 18 ÷ 6 = 3 stickers per pack.",
          "y = 3(10) = <strong>30</strong> stickers"
        ]
      },
      // Boss Q10 — Slope
      {
        type: "mc", difficulty: 3,
        question: 'What is the slope of a horizontal line?',
        choices: ["1", "Undefined", "0", "-1"],
        answer: "0",
        hints: [
          "A horizontal line is perfectly flat — it has no rise.",
          "Slope = rise ÷ run = 0 ÷ run.",
          "Any number divided into 0 is 0."
        ],
        explanation: [
          "A horizontal line has zero rise.",
          "Slope = 0 ÷ run = <strong>0</strong>"
        ]
      },
      // Boss Q11 — Function Tables
      {
        type: "numeric", difficulty: 3,
        question: 'For <span class="math">y = 2x + 3</span>, complete the table: when <span class="math">x = 8</span>, what is <span class="math">y</span>?',
        answer: "19",
        hints: [
          "Substitute x = 8.",
          "y = 2(8) + 3 = 16 + 3.",
          "y = 19."
        ],
        explanation: [
          "y = 2(8) + 3 = 16 + 3",
          "y = <strong>19</strong>"
        ]
      },
      // Boss Q12 — Sequences
      {
        type: "mc", difficulty: 3,
        question: 'What is the next term in the sequence <span class="math">7, 12, 17, 22, ...</span>?',
        choices: ["25", "26", "27", "29"],
        answer: "27",
        hints: [
          "Find the common difference: 12 - 7 = 5.",
          "Each term increases by 5.",
          "22 + 5 = 27."
        ],
        explanation: [
          "Common difference = 5.",
          "Next term = 22 + 5 = <strong>27</strong>"
        ]
      },
      // Boss Q13 — Slope
      {
        type: "numeric", difficulty: 3,
        question: 'Find the slope of the line through <span class="math">(-1, 4)</span> and <span class="math">(3, -4)</span>.',
        answer: "-2",
        hints: [
          "Slope = (y₂ - y₁) ÷ (x₂ - x₁).",
          "(-4 - 4) ÷ (3 - (-1)) = -8 ÷ 4.",
          "Slope = -2."
        ],
        explanation: [
          "Slope = (-4 - 4) ÷ (3 - (-1)) = -8 ÷ 4",
          "Slope = <strong>-2</strong>"
        ]
      },
      // Boss Q14 — Evaluating Functions
      {
        type: "mc", difficulty: 3,
        question: 'If <span class="math">f(x) = x - 5</span>, what is <span class="math">f(12)</span>?',
        choices: ["5", "7", "12", "17"],
        answer: "7",
        hints: [
          "Replace x with 12.",
          "f(12) = 12 - 5.",
          "= 7."
        ],
        explanation: [
          "f(12) = 12 - 5",
          "f(12) = <strong>7</strong>"
        ]
      },
      // Boss Q15 — Slope-Intercept Form
      {
        type: "numeric", difficulty: 3,
        question: 'What is the y-intercept of the line <span class="math">y = -x + 9</span>? (Enter the number.)',
        answer: "9",
        hints: [
          "In y = mx + b, the y-intercept is b.",
          "y = -1x + 9 → b = 9.",
          "The line crosses the y-axis at 9."
        ],
        explanation: [
          "y = -x + 9 is in slope-intercept form.",
          "y-intercept b = <strong>9</strong>"
        ]
      },
      // Boss Q16 — Systems
      {
        type: "mc", difficulty: 4,
        question: 'Solve the system: <span class="math">y = x + 3</span> and <span class="math">y = 2x + 1</span>. What is <span class="math">x</span>?',
        choices: ["1", "2", "3", "4"],
        answer: "2",
        hints: [
          "Set the equations equal: x + 3 = 2x + 1.",
          "3 - 1 = 2x - x → 2 = x.",
          "x = 2."
        ],
        explanation: [
          "x + 3 = 2x + 1 → 3 - 1 = 2x - x → 2 = x",
          "x = <strong>2</strong> (and y = 2 + 3 = 5)"
        ]
      },
      // Boss Q17 — Rate of Change
      {
        type: "numeric", difficulty: 3,
        question: 'A hiker starts at 2 km from camp at hour 0 and reaches 20 km from camp at hour 6. What is the rate of change in km per hour?',
        answer: "3",
        hints: [
          "Rate = (change in distance) ÷ (change in time).",
          "(20 - 2) ÷ (6 - 0) = 18 ÷ 6.",
          "= 3 km per hour."
        ],
        explanation: [
          "Rate = (20 - 2) ÷ (6 - 0) = 18 ÷ 6",
          "Rate = <strong>3</strong> km per hour"
        ]
      },
      // Boss Q18 — Function Tables
      {
        type: "mc", difficulty: 3,
        question: 'Which table matches the equation <span class="math">y = 2x + 1</span>?<br>Table A: (0,1), (1,3), (2,5)<br>Table B: (0,2), (1,4), (2,6)<br>Table C: (0,1), (1,2), (2,3)<br>Table D: (0,3), (1,5), (2,7)',
        choices: ["Table A", "Table B", "Table C", "Table D"],
        answer: "Table A",
        hints: [
          "Test x = 0: y = 2(0) + 1 = 1. Which table has (0, 1)?",
          "Tables A and C have (0, 1). Now check x = 1: y = 2(1) + 1 = 3.",
          "Table A has (1, 3) ✓. Table C has (1, 2) ✗."
        ],
        explanation: [
          "y = 2(0) + 1 = 1 ✓, y = 2(1) + 1 = 3 ✓, y = 2(2) + 1 = 5 ✓",
          "<strong>Table A</strong> matches y = 2x + 1."
        ]
      },
      // Boss Q19 — Direct Variation
      {
        type: "numeric", difficulty: 3,
        question: 'In a video game, coins earned vary directly with levels completed. If <span class="math">k = 7</span>, how many coins do you earn after <span class="math">8</span> levels?',
        answer: "56",
        hints: [
          "Direct variation: y = kx.",
          "y = 7 × 8.",
          "y = 56."
        ],
        explanation: [
          "y = kx = 7(8)",
          "y = <strong>56</strong> coins"
        ]
      },
      // Boss Q20 — Slope
      {
        type: "mc", difficulty: 3,
        question: 'A line passes through <span class="math">(0, 4)</span> and <span class="math">(2, 4)</span>. What is its slope?',
        choices: ["2", "4", "0", "Undefined"],
        answer: "0",
        hints: [
          "Slope = (y₂ - y₁) ÷ (x₂ - x₁).",
          "(4 - 4) ÷ (2 - 0) = 0 ÷ 2.",
          "Slope = 0 — the line is horizontal."
        ],
        explanation: [
          "Slope = (4 - 4) ÷ (2 - 0) = 0 ÷ 2 = 0",
          "The line is horizontal: slope = <strong>0</strong>"
        ]
      },
      // Boss Q21 — Evaluating Functions (reverse)
      {
        type: "numeric", difficulty: 4,
        question: 'If <span class="math">f(x) = 3x - 2</span> and <span class="math">f(x) = 13</span>, what is <span class="math">x</span>?',
        answer: "5",
        hints: [
          "Set 3x - 2 = 13.",
          "Add 2 to both sides: 3x = 15.",
          "Divide by 3: x = 5."
        ],
        explanation: [
          "3x - 2 = 13 → 3x = 15",
          "x = 15 ÷ 3 = <strong>5</strong>"
        ]
      },
      // Boss Q22 — Slope-Intercept Form
      {
        type: "mc", difficulty: 3,
        question: 'For the line <span class="math">y = 4x - 6</span>, what is <span class="math">y</span> when <span class="math">x = 3</span>?',
        choices: ["2", "6", "12", "18"],
        answer: "6",
        hints: [
          "Substitute x = 3: y = 4(3) - 6.",
          "y = 12 - 6.",
          "y = 6."
        ],
        explanation: [
          "y = 4(3) - 6 = 12 - 6",
          "y = <strong>6</strong>"
        ]
      },
      // Boss Q23 — Sequences
      {
        type: "numeric", difficulty: 3,
        question: 'An arithmetic sequence has a first term of 10 and a common difference of 3. What is the 12th term?',
        answer: "43",
        hints: [
          "nth term = first term + (n - 1) × difference.",
          "12th term = 10 + (12 - 1) × 3.",
          "= 10 + 33 = 43."
        ],
        explanation: [
          "12th term = 10 + 11(3) = 10 + 33",
          "12th term = <strong>43</strong>"
        ]
      },
      // Boss Q24 — Writing Equations
      {
        type: "mc", difficulty: 3,
        question: 'A line passes through <span class="math">(0, 5)</span> and has a slope of <span class="math">-2</span>. What is its equation?',
        choices: ["y = -2x + 5", "y = 5x - 2", "y = 2x + 5", "y = -2x - 5"],
        answer: "y = -2x + 5",
        hints: [
          "(0, 5) tells us the y-intercept is 5.",
          "Slope = -2, y-intercept = 5.",
          "y = -2x + 5."
        ],
        explanation: [
          "Slope m = -2, y-intercept b = 5.",
          "y = mx + b = <strong>y = -2x + 5</strong>"
        ]
      },
      // Boss Q25 — Slope
      {
        type: "numeric", difficulty: 3,
        question: 'What is the slope of the line through <span class="math">(2, 3)</span> and <span class="math">(5, 12)</span>?',
        answer: "3",
        hints: [
          "Slope = (y₂ - y₁) ÷ (x₂ - x₁).",
          "(12 - 3) ÷ (5 - 2) = 9 ÷ 3.",
          "Slope = 3."
        ],
        explanation: [
          "Slope = (12 - 3) ÷ (5 - 2) = 9 ÷ 3",
          "Slope = <strong>3</strong>"
        ]
      },
      // Boss Q26 — Checking Points on a Line
      {
        type: "mc", difficulty: 3,
        question: 'Which point lies on the line <span class="math">y = 3x - 1</span>?',
        choices: ["(1, 2)", "(2, 4)", "(3, 10)", "(0, 1)"],
        answer: "(1, 2)",
        hints: [
          "Test each point by plugging x into y = 3x - 1.",
          "x = 1: y = 3(1) - 1 = 2. Does (1, 2) match? Yes!",
          "Check: x = 2 gives y = 5 (not 4), x = 3 gives y = 8 (not 10)."
        ],
        explanation: [
          "Test (1, 2): y = 3(1) - 1 = 2 ✓",
          "<strong>(1, 2)</strong> lies on the line y = 3x - 1."
        ]
      },
      // Boss Q27 — Systems
      {
        type: "numeric", difficulty: 4,
        question: 'Solve the system: <span class="math">x + y = 15</span> and <span class="math">y = 4x</span>. What is <span class="math">x</span>?',
        answer: "3",
        hints: [
          "Substitute y = 4x into x + y = 15.",
          "x + 4x = 15 → 5x = 15.",
          "x = 3."
        ],
        explanation: [
          "Substitute: x + 4x = 15 → 5x = 15",
          "x = <strong>3</strong> (and y = 12)"
        ]
      },
      // Boss Q28 — Function Basics
      {
        type: "mc", difficulty: 3,
        question: 'If <span class="math">f(x) = 2x + 6</span>, what is <span class="math">f(0)</span>?',
        choices: ["0", "2", "6", "8"],
        answer: "6",
        hints: [
          "Replace x with 0.",
          "f(0) = 2(0) + 6 = 0 + 6.",
          "= 6."
        ],
        explanation: [
          "f(0) = 2(0) + 6 = 0 + 6",
          "f(0) = <strong>6</strong>"
        ]
      },
      // Boss Q29 — Rate of Change
      {
        type: "numeric", difficulty: 3,
        question: 'A balloon rises from 10 feet at minute 3 to 26 feet at minute 7. What is the rate of change in feet per minute?',
        answer: "4",
        hints: [
          "Rate = (change in height) ÷ (change in time).",
          "(26 - 10) ÷ (7 - 3) = 16 ÷ 4.",
          "= 4 feet per minute."
        ],
        explanation: [
          "Rate = (26 - 10) ÷ (7 - 3) = 16 ÷ 4",
          "Rate = <strong>4</strong> feet per minute"
        ]
      },
      // Boss Q30 — Sequences
      {
        type: "mc", difficulty: 3,
        question: 'The sequence <span class="math">100, 93, 86, 79, ...</span> follows which rule?',
        choices: ["Subtract 7", "Subtract 6", "Add 7", "Divide by 7"],
        answer: "Subtract 7",
        hints: [
          "Find the difference: 93 - 100 = -7.",
          "86 - 93 = -7. The pattern is going down by 7 each time.",
          "The rule is subtract 7."
        ],
        explanation: [
          "100 - 7 = 93, 93 - 7 = 86, 86 - 7 = 79.",
          "The rule is <strong>subtract 7</strong>."
        ]
      }
    ]

  }
};

// ============================================================
// WORLD 16 — Solid Summit
// Chapter: 3D Geometry — Volume & Surface Area
// ============================================================
WORLDS[16] = {
  id: 16, name: "Solid Summit", icon: "🧊",
  chapter: "3D Geometry", color: "#5c6bc0",
  bossName: "Voluminax, the Shape Shifter",
  bossDesc: "A towering golem that morphs between prisms, cylinders, and pyramids",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────

    // T0: 3D Figure Names (tutorial 0-2, difficulty 1)
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'A soup can has two flat circular ends and a curved surface in between. What 3D shape is it?',
        choices: ["Cylinder", "Cone", "Sphere", "Prism"],
        answer: "Cylinder",
        hints: [
          "Think about the shape of the top and bottom — they are circles.",
          "The sides wrap around smoothly (no flat rectangular faces).",
          "Two circular bases connected by a curved surface = a cylinder."
        ],
        explanation: [
          "A cylinder has two parallel circular bases and a curved lateral surface.",
          "A soup can is shaped like a <strong>cylinder</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A basketball is a perfectly round 3D shape with no flat faces, no edges, and no vertices. What shape is it?',
        choices: ["Cone", "Cylinder", "Sphere", "Cube"],
        answer: "Sphere",
        hints: [
          "It has no flat surfaces at all — it is curved everywhere.",
          "Every point on its surface is the same distance from the center.",
          "That perfectly round shape is called a sphere."
        ],
        explanation: [
          "A sphere is a 3D shape where every point on the surface is the same distance from the center.",
          "A basketball is a <strong>sphere</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'An Egyptian monument has a square bottom and four triangular faces that meet at a point on top. What 3D shape is it?',
        choices: ["Triangular prism", "Rectangular prism", "Pyramid", "Cone"],
        answer: "Pyramid",
        hints: [
          "The base is a square (a flat polygon).",
          "The sides are triangles that come together at a single point (the apex).",
          "A shape with a polygon base and triangular sides meeting at a point is a pyramid."
        ],
        explanation: [
          "A pyramid has a polygon base and triangular lateral faces meeting at one apex.",
          "The Egyptian monument is a <strong>pyramid</strong>."
        ]
      },

      // T1: Volume of Rectangular Prisms (tutorial 3-5, difficulty 1)
      {
        type: "numeric", difficulty: 1,
        question: 'A toy box is <span class="math">5</span> feet long, <span class="math">3</span> feet wide, and <span class="math">4</span> feet tall. What is its volume? (Use <span class="math">V = l \\times w \\times h</span>)',
        answer: "60",
        hints: [
          "Volume of a rectangular prism = length × width × height.",
          "V = 5 × 3 × 4.",
          "5 × 3 = 15, then 15 × 4 = 60."
        ],
        explanation: [
          "V = l × w × h = 5 × 3 × 4 = 60",
          "The volume is <strong>60</strong> cubic feet."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A fish tank is <span class="math">8</span> inches long, <span class="math">2</span> inches wide, and <span class="math">6</span> inches tall. What is its volume?',
        choices: ["48 cubic inches", "64 cubic inches", "96 cubic inches", "112 cubic inches"],
        answer: "96 cubic inches",
        hints: [
          "Volume = length × width × height.",
          "V = 8 × 2 × 6.",
          "8 × 2 = 16, then 16 × 6 = 96."
        ],
        explanation: [
          "V = 8 × 2 × 6 = 96",
          "The volume is <strong>96 cubic inches</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'A gift box has a length of <span class="math">10</span> cm, a width of <span class="math">5</span> cm, and a height of <span class="math">3</span> cm. What is the volume in cubic centimeters?',
        answer: "150",
        hints: [
          "Volume = length × width × height.",
          "V = 10 × 5 × 3.",
          "10 × 5 = 50, then 50 × 3 = 150."
        ],
        explanation: [
          "V = 10 × 5 × 3 = 150",
          "The volume is <strong>150</strong> cubic centimeters."
        ]
      },

      // T2: Volume of Triangular Prisms (tutorial 6-8, difficulty 1-2)
      {
        type: "numeric", difficulty: 1,
        question: 'A triangular prism has a triangle base with base <span class="math">6</span> cm and height <span class="math">4</span> cm. The prism is <span class="math">10</span> cm long. What is the volume? (Use <span class="math">V = \\frac{1}{2} \\times b \\times h_{tri} \\times h_{prism}</span>)',
        answer: "120",
        hints: [
          "First find the area of the triangular base: (1/2) × 6 × 4 = 12 cm².",
          "Then multiply by the length of the prism: 12 × 10.",
          "V = 120 cubic centimeters."
        ],
        explanation: [
          "Base area = (1/2) × 6 × 4 = 12 cm²",
          "V = 12 × 10 = <strong>120</strong> cubic centimeters"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A tent shaped like a triangular prism has a triangular face with base <span class="math">8</span> ft and height <span class="math">3</span> ft. The tent is <span class="math">5</span> ft long. What is the volume?',
        choices: ["40 ft³", "60 ft³", "80 ft³", "120 ft³"],
        answer: "60 ft³",
        hints: [
          "Base area = (1/2) × 8 × 3 = 12 ft².",
          "Volume = base area × length of prism.",
          "V = 12 × 5 = 60 ft³."
        ],
        explanation: [
          "Base area = (1/2) × 8 × 3 = 12 ft²",
          "V = 12 × 5 = <strong>60 ft³</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A triangular prism has a base triangle with base <span class="math">10</span> m and height <span class="math">6</span> m. The prism is <span class="math">7</span> m long. What is the volume in cubic meters?',
        answer: "210",
        hints: [
          "Base area = (1/2) × 10 × 6 = 30 m².",
          "Volume = base area × length.",
          "V = 30 × 7 = 210 m³."
        ],
        explanation: [
          "Base area = (1/2) × 10 × 6 = 30 m²",
          "V = 30 × 7 = <strong>210</strong> cubic meters"
        ]
      },

      // T3: Volume of Cylinders (tutorial 9-11, difficulty 2)
      {
        type: "numeric", difficulty: 2,
        question: 'A water bottle shaped like a cylinder has a radius of <span class="math">3</span> cm and a height of <span class="math">10</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>)',
        answer: "282.6",
        hints: [
          "Volume of a cylinder = π × r² × h.",
          "V = 3.14 × 3² × 10 = 3.14 × 9 × 10.",
          "V = 3.14 × 90 = 282.6."
        ],
        explanation: [
          "V = π × r² × h = 3.14 × 9 × 10 = 3.14 × 90",
          "V = <strong>282.6</strong> cubic centimeters"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A cylindrical jar has radius <span class="math">5</span> cm and height <span class="math">4</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>)',
        choices: ["157 cm³", "200 cm³", "251.2 cm³", "314 cm³"],
        answer: "314 cm³",
        hints: [
          "V = π × r² × h.",
          "V = 3.14 × 25 × 4.",
          "V = 3.14 × 100 = 314."
        ],
        explanation: [
          "V = π × r² × h = 3.14 × 25 × 4 = 3.14 × 100",
          "V = <strong>314 cm³</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A candle is a cylinder with radius <span class="math">2</span> inches and height <span class="math">7</span> inches. Find its volume. (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "87.9",
        hints: [
          "V = π × r² × h.",
          "V = 3.14 × 4 × 7.",
          "V = 3.14 × 28 = 87.92 → 87.9."
        ],
        explanation: [
          "V = π × r² × h = 3.14 × 4 × 7 = 87.92",
          "Rounded to the nearest tenth: V = <strong>87.9</strong> cubic inches"
        ]
      },

      // T4: Volume of Pyramids (tutorial 12-14, difficulty 2)
      {
        type: "numeric", difficulty: 2,
        question: 'A pyramid has a square base with side length <span class="math">6</span> cm and a height of <span class="math">9</span> cm. What is the volume? (Use <span class="math">V = \\frac{1}{3} \\times B \\times h</span>)',
        answer: "108",
        hints: [
          "First find the base area: B = 6 × 6 = 36 cm².",
          "V = (1/3) × 36 × 9.",
          "(1/3) × 324 = 108."
        ],
        explanation: [
          "Base area B = 6 × 6 = 36 cm². V = (1/3) × 36 × 9 = 324/3",
          "V = <strong>108</strong> cubic centimeters"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A pyramid has a square base with side <span class="math">10</span> m and a height of <span class="math">12</span> m. What is its volume?',
        choices: ["120 m³", "200 m³", "400 m³", "1200 m³"],
        answer: "400 m³",
        hints: [
          "Base area = 10 × 10 = 100 m².",
          "V = (1/3) × 100 × 12 = (1/3) × 1200.",
          "V = 400 m³."
        ],
        explanation: [
          "B = 10 × 10 = 100 m². V = (1/3) × 100 × 12 = 1200/3",
          "V = <strong>400 m³</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A pyramid has a rectangular base that is <span class="math">8</span> ft by <span class="math">6</span> ft and a height of <span class="math">5</span> ft. What is its volume?',
        answer: "80",
        hints: [
          "Base area = 8 × 6 = 48 ft².",
          "V = (1/3) × 48 × 5 = (1/3) × 240.",
          "V = 80 ft³."
        ],
        explanation: [
          "B = 8 × 6 = 48 ft². V = (1/3) × 48 × 5 = 240/3",
          "V = <strong>80</strong> cubic feet"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-4) ──────────────

    // T5: Volume of Cones & Spheres (challenge 0-2, difficulty 2-3)
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'An ice cream cone has radius <span class="math">3</span> cm and height <span class="math">7</span> cm. What is the volume of the cone? (Use <span class="math">V = \\frac{1}{3} \\pi r^2 h</span> and <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "65.9",
        hints: [
          "V = (1/3) × π × r² × h.",
          "V = (1/3) × 3.14 × 9 × 7 = (1/3) × 197.82.",
          "V = 65.94 → 65.9."
        ],
        explanation: [
          "V = (1/3) × 3.14 × 9 × 7 = (1/3) × 197.82 = 65.94",
          "Rounded to the nearest tenth: V ≈ <strong>65.9</strong> cm³"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A soccer ball is a sphere with radius <span class="math">3</span> inches. What is its volume? (Use <span class="math">V = \\frac{4}{3} \\pi r^3</span> and <span class="math">\\pi \\approx 3.14</span>. Round to the nearest hundredth.)',
        choices: ["84.78 in³", "100.48 in³", "113.04 in³", "150.72 in³"],
        answer: "113.04 in³",
        hints: [
          "V = (4/3) × π × r³.",
          "r³ = 3³ = 27. So V = (4/3) × 3.14 × 27.",
          "(4/3) × 84.78 = 4 × 28.26 = 113.04."
        ],
        explanation: [
          "V = (4/3) × 3.14 × 27 = (4/3) × 84.78",
          "V = <strong>113.04 in³</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A cone-shaped party hat has a radius of <span class="math">5</span> cm and a height of <span class="math">12</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>)',
        answer: "314",
        hints: [
          "V = (1/3) × π × r² × h.",
          "V = (1/3) × 3.14 × 25 × 12.",
          "(1/3) × 942 = 314."
        ],
        explanation: [
          "V = (1/3) × 3.14 × 25 × 12 = (1/3) × 942",
          "V = <strong>314</strong> cm³"
        ]
      },

      // T6: Surface Area of Prisms (challenge 3-5, difficulty 2-3)
      {
        type: "numeric", difficulty: 2,
        question: 'A rectangular box is <span class="math">5</span> cm long, <span class="math">3</span> cm wide, and <span class="math">4</span> cm tall. What is its surface area? (Use <span class="math">SA = 2(lw + lh + wh)</span>)',
        answer: "94",
        hints: [
          "Find each pair of faces: lw = 5×3 = 15, lh = 5×4 = 20, wh = 3×4 = 12.",
          "Add them: 15 + 20 + 12 = 47.",
          "Multiply by 2: SA = 2 × 47 = 94."
        ],
        explanation: [
          "SA = 2(lw + lh + wh) = 2(15 + 20 + 12) = 2(47)",
          "SA = <strong>94</strong> cm²"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the surface area of a cube with side length <span class="math">6</span> inches?',
        choices: ["36 in²", "72 in²", "144 in²", "216 in²"],
        answer: "216 in²",
        hints: [
          "A cube has 6 identical square faces.",
          "Area of one face = 6 × 6 = 36 in².",
          "SA = 6 × 36 = 216 in²."
        ],
        explanation: [
          "Each face has area 6² = 36 in². A cube has 6 faces.",
          "SA = 6 × 36 = <strong>216 in²</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A triangular prism has a triangular base with base <span class="math">8</span> cm, triangle height <span class="math">3</span> cm, and triangle sides <span class="math">8</span>, <span class="math">5</span>, and <span class="math">5</span> cm. The prism is <span class="math">10</span> cm long. What is the surface area?',
        answer: "204",
        hints: [
          "Two triangular bases: 2 × (1/2 × 8 × 3) = 2 × 12 = 24 cm².",
          "Three rectangular faces: perimeter × length = (8 + 5 + 5) × 10 = 180 cm².",
          "SA = 24 + 180 = 204 cm²."
        ],
        explanation: [
          "Two bases = 2 × (1/2 × 8 × 3) = 24 cm². Lateral area = (8+5+5) × 10 = 180 cm².",
          "SA = 24 + 180 = <strong>204</strong> cm²"
        ]
      },

      // T7: Surface Area of Cylinders (challenge 6-8, difficulty 3)
      {
        type: "numeric", difficulty: 3,
        question: 'Find the surface area of a cylinder with radius <span class="math">3</span> cm and height <span class="math">5</span> cm. (Use <span class="math">SA = 2\\pi r^2 + 2\\pi r h</span> and <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "150.7",
        hints: [
          "Two circular bases: 2 × 3.14 × 9 = 56.52.",
          "Lateral surface: 2 × 3.14 × 3 × 5 = 94.2.",
          "SA = 56.52 + 94.2 = 150.72 → 150.7."
        ],
        explanation: [
          "Bases = 2πr² = 2(3.14)(9) = 56.52. Lateral = 2πrh = 2(3.14)(3)(5) = 94.2.",
          "SA = 56.52 + 94.2 = 150.72 ≈ <strong>150.7</strong> cm²"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A paint can is a cylinder with radius <span class="math">4</span> cm and height <span class="math">10</span> cm. What is its surface area? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["251.2 cm²", "301.4 cm²", "351.7 cm²", "401.9 cm²"],
        answer: "351.7 cm²",
        hints: [
          "Two bases: 2 × 3.14 × 16 = 100.48.",
          "Lateral: 2 × 3.14 × 4 × 10 = 251.2.",
          "SA = 100.48 + 251.2 = 351.68 → 351.7."
        ],
        explanation: [
          "Bases = 2(3.14)(16) = 100.48. Lateral = 2(3.14)(4)(10) = 251.2.",
          "SA = 100.48 + 251.2 = 351.68 ≈ <strong>351.7 cm²</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A cylinder has radius <span class="math">5</span> cm and height <span class="math">2</span> cm. What is its surface area? (Use <span class="math">\\pi \\approx 3.14</span>)',
        answer: "219.8",
        hints: [
          "Two bases: 2 × 3.14 × 25 = 157.",
          "Lateral: 2 × 3.14 × 5 × 2 = 62.8.",
          "SA = 157 + 62.8 = 219.8."
        ],
        explanation: [
          "Bases = 2(3.14)(25) = 157. Lateral = 2(3.14)(5)(2) = 62.8.",
          "SA = 157 + 62.8 = <strong>219.8</strong> cm²"
        ]
      },

      // T8: Surface Area of Pyramids & Cones (challenge 9-11, difficulty 3)
      {
        type: "numeric", difficulty: 3,
        question: 'A pyramid has a square base with side <span class="math">8</span> cm and a slant height of <span class="math">10</span> cm. What is its surface area? (Use <span class="math">SA = B + \\frac{1}{2} P l</span>)',
        answer: "224",
        hints: [
          "Base area B = 8 × 8 = 64 cm². Perimeter P = 4 × 8 = 32 cm.",
          "Lateral area = (1/2) × 32 × 10 = 160 cm².",
          "SA = 64 + 160 = 224 cm²."
        ],
        explanation: [
          "B = 64, P = 32. Lateral = (1/2)(32)(10) = 160.",
          "SA = 64 + 160 = <strong>224</strong> cm²"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A cone has radius <span class="math">3</span> cm and slant height <span class="math">5</span> cm. What is its surface area? (Use <span class="math">SA = \\pi r^2 + \\pi r l</span> and <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["47.1 cm²", "56.5 cm²", "65.9 cm²", "75.4 cm²"],
        answer: "75.4 cm²",
        hints: [
          "Base: π × r² = 3.14 × 9 = 28.26.",
          "Lateral: π × r × l = 3.14 × 3 × 5 = 47.1.",
          "SA = 28.26 + 47.1 = 75.36 → 75.4."
        ],
        explanation: [
          "Base = πr² = 3.14(9) = 28.26. Lateral = πrl = 3.14(3)(5) = 47.1.",
          "SA = 28.26 + 47.1 = 75.36 ≈ <strong>75.4 cm²</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A pyramid has a square base with side <span class="math">6</span> m and a slant height of <span class="math">7</span> m. What is its surface area?',
        answer: "120",
        hints: [
          "Base area = 6 × 6 = 36 m². Perimeter = 4 × 6 = 24 m.",
          "Lateral area = (1/2) × 24 × 7 = 84 m².",
          "SA = 36 + 84 = 120 m²."
        ],
        explanation: [
          "B = 36, P = 24. Lateral = (1/2)(24)(7) = 84.",
          "SA = 36 + 84 = <strong>120</strong> m²"
        ]
      },

      // T9: Composite 3D Shapes (challenge 12-14, difficulty 3-4)
      {
        type: "mc", difficulty: 3,
        question: 'A building is made of a rectangular prism (<span class="math">10 \\times 4 \\times 3</span> m) with a half-cylinder roof (radius <span class="math">2</span> m, length <span class="math">10</span> m). What is the total volume? (Use <span class="math">\\pi \\approx 3.14</span>)',
        choices: ["142.8 m³", "162.8 m³", "182.8 m³", "202.8 m³"],
        answer: "182.8 m³",
        hints: [
          "Rectangular prism volume: 10 × 4 × 3 = 120 m³.",
          "Half-cylinder volume: (1/2) × π × r² × length = (1/2) × 3.14 × 4 × 10 = 62.8 m³.",
          "Total = 120 + 62.8 = 182.8 m³."
        ],
        explanation: [
          "Prism = 10 × 4 × 3 = 120. Half-cylinder = (1/2)(3.14)(4)(10) = 62.8.",
          "Total volume = 120 + 62.8 = <strong>182.8 m³</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A toy rocket is a cylinder (radius <span class="math">3</span> cm, height <span class="math">8</span> cm) with a cone on top (radius <span class="math">3</span> cm, height <span class="math">4</span> cm). What is the total volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "263.8",
        hints: [
          "Cylinder volume: 3.14 × 9 × 8 = 226.08.",
          "Cone volume: (1/3) × 3.14 × 9 × 4 = (1/3) × 113.04 = 37.68.",
          "Total = 226.08 + 37.68 = 263.76 → 263.8."
        ],
        explanation: [
          "Cylinder V = π(9)(8) = 226.08. Cone V = (1/3)π(9)(4) = 37.68.",
          "Total = 226.08 + 37.68 = 263.76 ≈ <strong>263.8</strong> cm³"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A stage is made of two rectangular prisms stacked: the bottom is <span class="math">10 \\times 8 \\times 2</span> ft and the top is <span class="math">6 \\times 4 \\times 3</span> ft. What is the total volume?',
        answer: "232",
        hints: [
          "Bottom prism: 10 × 8 × 2 = 160 ft³.",
          "Top prism: 6 × 4 × 3 = 72 ft³.",
          "Total = 160 + 72 = 232 ft³."
        ],
        explanation: [
          "Bottom = 10 × 8 × 2 = 160. Top = 6 × 4 × 3 = 72.",
          "Total volume = 160 + 72 = <strong>232</strong> ft³"
        ]
      }
    ],

    // ── Extra Challenge: Similar Solids (T10, difficulty 3-4) ──
    extraChallenge: [
      {
        type: "mc", difficulty: 3,
        question: 'Two similar boxes have a scale factor of <span class="math">2</span>. If the smaller box has a volume of <span class="math">10</span> cm³, what is the volume of the larger box? (Volumes scale by <span class="math">k^3</span>.)',
        choices: ["20 cm³", "40 cm³", "60 cm³", "80 cm³"],
        answer: "80 cm³",
        hints: [
          "For similar solids, if the scale factor is k, volumes scale by k³.",
          "k = 2, so k³ = 2³ = 8.",
          "Larger volume = 10 × 8 = 80 cm³."
        ],
        explanation: [
          "Scale factor k = 2. Volumes scale by k³ = 8.",
          "Larger volume = 10 × 8 = <strong>80 cm³</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Two similar cylinders have a scale factor of <span class="math">3</span>. If the smaller cylinder has a surface area of <span class="math">20</span> cm², what is the surface area of the larger cylinder? (Surface areas scale by <span class="math">k^2</span>.)',
        answer: "180",
        hints: [
          "For similar solids, surface areas scale by k².",
          "k = 3, so k² = 9.",
          "Larger SA = 20 × 9 = 180 cm²."
        ],
        explanation: [
          "Scale factor k = 3. Surface areas scale by k² = 9.",
          "Larger SA = 20 × 9 = <strong>180</strong> cm²"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A model pyramid has a volume of <span class="math">30</span> cm³. A similar pyramid is built with all dimensions doubled (scale factor <span class="math">2</span>). What is the volume of the larger pyramid?',
        choices: ["60 cm³", "120 cm³", "180 cm³", "240 cm³"],
        answer: "240 cm³",
        hints: [
          "Doubling all dimensions means the scale factor k = 2.",
          "Volume scales by k³ = 2³ = 8.",
          "New volume = 30 × 8 = 240 cm³."
        ],
        explanation: [
          "Scale factor k = 2, so volume scales by k³ = 8.",
          "Larger volume = 30 × 8 = <strong>240 cm³</strong>"
        ]
      }
    ],

    // ── Boss (30 problems, difficulty 3-4) ──────────────
    boss: [
      // Boss Q1 — 3D Figure Names
      {
        type: "mc", difficulty: 3,
        question: 'Voluminax morphs into a shape with one circular base and a curved surface that narrows to a point. What shape is this?',
        choices: ["Cylinder", "Cone", "Pyramid", "Sphere"],
        answer: "Cone",
        hints: [
          "One circular base (not two) eliminates cylinder.",
          "It narrows to a point (apex) — not flat on top.",
          "A circular base tapering to a point is a cone."
        ],
        explanation: [
          "A cone has one circular base and tapers to an apex.",
          "Voluminax morphed into a <strong>cone</strong>."
        ]
      },
      // Boss Q2 — Volume of Rectangular Prism
      {
        type: "numeric", difficulty: 3,
        question: 'A treasure chest is <span class="math">7</span> ft long, <span class="math">4</span> ft wide, and <span class="math">5</span> ft tall. What is its volume?',
        answer: "140",
        hints: [
          "V = length × width × height.",
          "V = 7 × 4 × 5.",
          "7 × 4 = 28, then 28 × 5 = 140."
        ],
        explanation: [
          "V = 7 × 4 × 5 = 140",
          "Volume = <strong>140</strong> cubic feet"
        ]
      },
      // Boss Q3 — Volume of Triangular Prism
      {
        type: "mc", difficulty: 3,
        question: 'A ramp shaped like a triangular prism has a triangle base <span class="math">10</span> m, triangle height <span class="math">8</span> m, and the prism is <span class="math">6</span> m long. What is its volume?',
        choices: ["120 m³", "180 m³", "240 m³", "480 m³"],
        answer: "240 m³",
        hints: [
          "Base area = (1/2) × 10 × 8 = 40 m².",
          "Volume = 40 × 6.",
          "V = 240 m³."
        ],
        explanation: [
          "Base area = (1/2)(10)(8) = 40 m². V = 40 × 6 = 240.",
          "Volume = <strong>240 m³</strong>"
        ]
      },
      // Boss Q4 — Volume of Cylinder
      {
        type: "numeric", difficulty: 3,
        question: 'A giant pillar is a cylinder with radius <span class="math">4</span> cm and height <span class="math">6</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "301.4",
        hints: [
          "V = π × r² × h = 3.14 × 16 × 6.",
          "3.14 × 16 = 50.24.",
          "50.24 × 6 = 301.44 → 301.4."
        ],
        explanation: [
          "V = 3.14 × 16 × 6 = 301.44",
          "V ≈ <strong>301.4</strong> cm³"
        ]
      },
      // Boss Q5 — Volume of Pyramid
      {
        type: "mc", difficulty: 3,
        question: 'A pyramid has a square base with side <span class="math">9</span> m and height <span class="math">12</span> m. What is its volume?',
        choices: ["108 m³", "216 m³", "324 m³", "972 m³"],
        answer: "324 m³",
        hints: [
          "Base area = 9 × 9 = 81 m².",
          "V = (1/3) × 81 × 12 = (1/3) × 972.",
          "V = 324 m³."
        ],
        explanation: [
          "B = 81. V = (1/3)(81)(12) = 972/3",
          "V = <strong>324 m³</strong>"
        ]
      },
      // Boss Q6 — Volume of Cone
      {
        type: "numeric", difficulty: 3,
        question: 'A volcano model is a cone with radius <span class="math">4</span> cm and height <span class="math">9</span> cm. What is the volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "150.7",
        hints: [
          "V = (1/3) × π × r² × h.",
          "V = (1/3) × 3.14 × 16 × 9 = (1/3) × 452.16.",
          "V = 150.72 → 150.7."
        ],
        explanation: [
          "V = (1/3)(3.14)(16)(9) = (1/3)(452.16) = 150.72",
          "V ≈ <strong>150.7</strong> cm³"
        ]
      },
      // Boss Q7 — Volume of Sphere
      {
        type: "mc", difficulty: 3,
        question: 'A crystal ball (sphere) has radius <span class="math">6</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["452.2 cm³", "678.2 cm³", "904.3 cm³", "1130.4 cm³"],
        answer: "904.3 cm³",
        hints: [
          "V = (4/3) × π × r³ = (4/3) × 3.14 × 216.",
          "3.14 × 216 = 678.24.",
          "(4/3) × 678.24 = 904.32 → 904.3."
        ],
        explanation: [
          "V = (4/3)(3.14)(216) = (4/3)(678.24) = 904.32",
          "V ≈ <strong>904.3 cm³</strong>"
        ]
      },
      // Boss Q8 — SA of Rectangular Prism
      {
        type: "numeric", difficulty: 3,
        question: 'What is the surface area of a box that is <span class="math">6</span> cm long, <span class="math">4</span> cm wide, and <span class="math">3</span> cm tall?',
        answer: "108",
        hints: [
          "SA = 2(lw + lh + wh).",
          "lw = 24, lh = 18, wh = 12. Sum = 54.",
          "SA = 2 × 54 = 108."
        ],
        explanation: [
          "SA = 2(6×4 + 6×3 + 4×3) = 2(24 + 18 + 12) = 2(54)",
          "SA = <strong>108</strong> cm²"
        ]
      },
      // Boss Q9 — SA of Cylinder
      {
        type: "mc", difficulty: 3,
        question: 'A can has radius <span class="math">2</span> cm and height <span class="math">8</span> cm. What is its surface area? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["100.5 cm²", "112.8 cm²", "125.6 cm²", "138.2 cm²"],
        answer: "125.6 cm²",
        hints: [
          "Two bases: 2 × 3.14 × 4 = 25.12.",
          "Lateral: 2 × 3.14 × 2 × 8 = 100.48.",
          "SA = 25.12 + 100.48 = 125.6."
        ],
        explanation: [
          "Bases = 2πr² = 25.12. Lateral = 2πrh = 100.48.",
          "SA = 25.12 + 100.48 = <strong>125.6 cm²</strong>"
        ]
      },
      // Boss Q10 — SA of Pyramid
      {
        type: "numeric", difficulty: 3,
        question: 'A pyramid has a square base with side <span class="math">10</span> cm and slant height <span class="math">13</span> cm. What is its surface area?',
        answer: "360",
        hints: [
          "Base area = 10 × 10 = 100. Perimeter = 4 × 10 = 40.",
          "Lateral = (1/2) × 40 × 13 = 260.",
          "SA = 100 + 260 = 360."
        ],
        explanation: [
          "B = 100, P = 40. Lateral = (1/2)(40)(13) = 260.",
          "SA = 100 + 260 = <strong>360</strong> cm²"
        ]
      },
      // Boss Q11 — SA of Cone
      {
        type: "mc", difficulty: 3,
        question: 'A cone has radius <span class="math">6</span> cm and slant height <span class="math">10</span> cm. What is its surface area? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["188.4 cm²", "245.6 cm²", "301.4 cm²", "376.8 cm²"],
        answer: "301.4 cm²",
        hints: [
          "Base = πr² = 3.14 × 36 = 113.04.",
          "Lateral = πrl = 3.14 × 6 × 10 = 188.4.",
          "SA = 113.04 + 188.4 = 301.44 → 301.4."
        ],
        explanation: [
          "Base = π(36) = 113.04. Lateral = π(6)(10) = 188.4.",
          "SA = 113.04 + 188.4 = 301.44 ≈ <strong>301.4 cm²</strong>"
        ]
      },
      // Boss Q12 — Composite Shape
      {
        type: "numeric", difficulty: 4,
        question: 'A silo is a cylinder (radius <span class="math">3</span> m, height <span class="math">5</span> m) with a hemisphere on top (radius <span class="math">3</span> m). What is the total volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "197.8",
        hints: [
          "Cylinder V = 3.14 × 9 × 5 = 141.3.",
          "Hemisphere V = (1/2) × (4/3) × 3.14 × 27 = (1/2) × 113.04 = 56.52.",
          "Total = 141.3 + 56.52 = 197.82 → 197.8."
        ],
        explanation: [
          "Cylinder = π(9)(5) = 141.3. Hemisphere = (1/2)(4/3)π(27) = 56.52.",
          "Total = 141.3 + 56.52 = 197.82 ≈ <strong>197.8</strong> m³"
        ]
      },
      // Boss Q13 — Similar Solids
      {
        type: "mc", difficulty: 3,
        question: 'Two similar cones have a scale factor of <span class="math">3</span>. If the small cone has volume <span class="math">5</span> cm³, what is the volume of the large cone?',
        choices: ["15 cm³", "45 cm³", "90 cm³", "135 cm³"],
        answer: "135 cm³",
        hints: [
          "Volumes of similar solids scale by k³.",
          "k = 3, so k³ = 27.",
          "Large volume = 5 × 27 = 135 cm³."
        ],
        explanation: [
          "k = 3, k³ = 27. Volume scales by 27.",
          "Large volume = 5 × 27 = <strong>135 cm³</strong>"
        ]
      },
      // Boss Q14 — Volume of Rectangular Prism
      {
        type: "mc", difficulty: 3,
        question: 'A swimming pool is <span class="math">12</span> m long, <span class="math">5</span> m wide, and <span class="math">2</span> m deep. How many cubic meters of water does it hold?',
        choices: ["60 m³", "100 m³", "120 m³", "240 m³"],
        answer: "120 m³",
        hints: [
          "V = length × width × depth.",
          "V = 12 × 5 × 2.",
          "V = 120 m³."
        ],
        explanation: [
          "V = 12 × 5 × 2 = 120",
          "The pool holds <strong>120 m³</strong> of water."
        ]
      },
      // Boss Q15 — Volume of Triangular Prism
      {
        type: "numeric", difficulty: 3,
        question: 'A cheese wedge is a triangular prism with base triangle <span class="math">4</span> cm, triangle height <span class="math">3</span> cm, and length <span class="math">9</span> cm. What is its volume?',
        answer: "54",
        hints: [
          "Base area = (1/2) × 4 × 3 = 6 cm².",
          "V = 6 × 9.",
          "V = 54 cm³."
        ],
        explanation: [
          "Base area = (1/2)(4)(3) = 6. V = 6 × 9.",
          "V = <strong>54</strong> cm³"
        ]
      },
      // Boss Q16 — Volume of Cylinder
      {
        type: "mc", difficulty: 3,
        question: 'A drum is a cylinder with radius <span class="math">7</span> cm and height <span class="math">3</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["131.9 cm³", "307.7 cm³", "461.6 cm³", "615.4 cm³"],
        answer: "461.6 cm³",
        hints: [
          "V = π × r² × h = 3.14 × 49 × 3.",
          "3.14 × 49 = 153.86.",
          "153.86 × 3 = 461.58 → 461.6."
        ],
        explanation: [
          "V = 3.14 × 49 × 3 = 461.58",
          "V ≈ <strong>461.6 cm³</strong>"
        ]
      },
      // Boss Q17 — Volume of Pyramid
      {
        type: "numeric", difficulty: 3,
        question: 'A glass pyramid paperweight has a square base with side <span class="math">5</span> cm and height <span class="math">6</span> cm. What is its volume?',
        answer: "50",
        hints: [
          "B = 5 × 5 = 25 cm².",
          "V = (1/3) × 25 × 6 = (1/3) × 150.",
          "V = 50 cm³."
        ],
        explanation: [
          "B = 25. V = (1/3)(25)(6) = 150/3",
          "V = <strong>50</strong> cm³"
        ]
      },
      // Boss Q18 — Volume of Sphere
      {
        type: "numeric", difficulty: 3,
        question: 'A marble (sphere) has a radius of <span class="math">2</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "33.5",
        hints: [
          "V = (4/3) × π × r³ = (4/3) × 3.14 × 8.",
          "3.14 × 8 = 25.12.",
          "(4/3) × 25.12 = 33.49... → 33.5."
        ],
        explanation: [
          "V = (4/3)(3.14)(8) = (4)(25.12)/3 = 100.48/3 = 33.49...",
          "V ≈ <strong>33.5</strong> cm³"
        ]
      },
      // Boss Q19 — SA of Prism (cube)
      {
        type: "mc", difficulty: 3,
        question: 'A Rubik\u2019s cube has side length <span class="math">5</span> cm. What is its surface area?',
        choices: ["25 cm²", "100 cm²", "125 cm²", "150 cm²"],
        answer: "150 cm²",
        hints: [
          "A cube has 6 identical square faces.",
          "One face = 5 × 5 = 25 cm².",
          "SA = 6 × 25 = 150 cm²."
        ],
        explanation: [
          "One face = 25 cm². Six faces total.",
          "SA = 6 × 25 = <strong>150 cm²</strong>"
        ]
      },
      // Boss Q20 — SA of Cylinder
      {
        type: "numeric", difficulty: 3,
        question: 'A thermos is a cylinder with radius <span class="math">3</span> cm and height <span class="math">10</span> cm. What is its surface area? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "245.0",
        hints: [
          "Bases = 2 × 3.14 × 9 = 56.52.",
          "Lateral = 2 × 3.14 × 3 × 10 = 188.4.",
          "SA = 56.52 + 188.4 = 244.92 → 245.0."
        ],
        explanation: [
          "Bases = 2πr² = 56.52. Lateral = 2πrh = 188.4.",
          "SA = 56.52 + 188.4 = 244.92 ≈ <strong>245.0</strong> cm²"
        ]
      },
      // Boss Q21 — 3D Figure Names
      {
        type: "mc", difficulty: 3,
        question: 'Voluminax transforms into a shape with two identical triangular faces and three rectangular faces. What is this shape?',
        choices: ["Rectangular prism", "Triangular prism", "Pyramid", "Cylinder"],
        answer: "Triangular prism",
        hints: [
          "Two triangular faces means the bases are triangles.",
          "Three rectangular faces connect the triangles.",
          "That is a triangular prism."
        ],
        explanation: [
          "Two triangular bases + three rectangular lateral faces = triangular prism.",
          "Voluminax became a <strong>triangular prism</strong>."
        ]
      },
      // Boss Q22 — Volume of Cone
      {
        type: "numeric", difficulty: 3,
        question: 'A funnel is shaped like a cone with radius <span class="math">6</span> cm and height <span class="math">10</span> cm. What is its volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "376.8",
        hints: [
          "V = (1/3) × π × r² × h.",
          "V = (1/3) × 3.14 × 36 × 10 = (1/3) × 1130.4.",
          "V = 376.8."
        ],
        explanation: [
          "V = (1/3)(3.14)(36)(10) = (1/3)(1130.4)",
          "V = <strong>376.8</strong> cm³"
        ]
      },
      // Boss Q23 — SA of Pyramid
      {
        type: "mc", difficulty: 3,
        question: 'A tent shaped like a pyramid has a square base with side <span class="math">12</span> ft and slant height <span class="math">8</span> ft. What is the surface area?',
        choices: ["192 ft²", "240 ft²", "288 ft²", "336 ft²"],
        answer: "336 ft²",
        hints: [
          "Base = 12 × 12 = 144. Perimeter = 48.",
          "Lateral = (1/2) × 48 × 8 = 192.",
          "SA = 144 + 192 = 336."
        ],
        explanation: [
          "B = 144, P = 48. Lateral = (1/2)(48)(8) = 192.",
          "SA = 144 + 192 = <strong>336 ft²</strong>"
        ]
      },
      // Boss Q24 — SA of Cone
      {
        type: "numeric", difficulty: 3,
        question: 'A wizard\u2019s hat is a cone with radius <span class="math">4</span> cm and slant height <span class="math">9</span> cm. What is the surface area? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        answer: "163.3",
        hints: [
          "Base = πr² = 3.14 × 16 = 50.24.",
          "Lateral = πrl = 3.14 × 4 × 9 = 113.04.",
          "SA = 50.24 + 113.04 = 163.28 → 163.3."
        ],
        explanation: [
          "Base = π(16) = 50.24. Lateral = π(4)(9) = 113.04.",
          "SA = 50.24 + 113.04 = 163.28 ≈ <strong>163.3</strong> cm²"
        ]
      },
      // Boss Q25 — Composite Shape
      {
        type: "mc", difficulty: 4,
        question: 'A pencil model is a cylinder (radius <span class="math">1</span> cm, height <span class="math">15</span> cm) with a cone tip (radius <span class="math">1</span> cm, height <span class="math">2</span> cm). What is the total volume? (Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest tenth.)',
        choices: ["45.0 cm³", "47.1 cm³", "49.2 cm³", "51.3 cm³"],
        answer: "49.2 cm³",
        hints: [
          "Cylinder V = 3.14 × 1 × 15 = 47.1.",
          "Cone V = (1/3) × 3.14 × 1 × 2 = (1/3) × 6.28 = 2.09...",
          "Total = 47.1 + 2.09 = 49.19 → 49.2."
        ],
        explanation: [
          "Cylinder = π(1)(15) = 47.1. Cone = (1/3)π(1)(2) = 2.09.",
          "Total ≈ 47.1 + 2.09 = 49.19 ≈ <strong>49.2 cm³</strong>"
        ]
      },
      // Boss Q26 — Similar Solids (surface area)
      {
        type: "numeric", difficulty: 4,
        question: 'Two similar rectangular prisms have a scale factor of <span class="math">2</span>. The smaller one has surface area <span class="math">50</span> cm². What is the surface area of the larger one?',
        answer: "200",
        hints: [
          "Surface areas of similar solids scale by k².",
          "k = 2, so k² = 4.",
          "Larger SA = 50 × 4 = 200 cm²."
        ],
        explanation: [
          "k = 2, k² = 4. Surface areas scale by 4.",
          "Larger SA = 50 × 4 = <strong>200</strong> cm²"
        ]
      },
      // Boss Q27 — Volume of Rectangular Prism
      {
        type: "numeric", difficulty: 3,
        question: 'Voluminax creates a rectangular prism room that is <span class="math">9</span> m long, <span class="math">6</span> m wide, and <span class="math">3</span> m tall. What is the volume of the room?',
        answer: "162",
        hints: [
          "V = length × width × height.",
          "V = 9 × 6 × 3.",
          "9 × 6 = 54, then 54 × 3 = 162."
        ],
        explanation: [
          "V = 9 × 6 × 3 = 162",
          "Volume = <strong>162</strong> m³"
        ]
      },
      // Boss Q28 — SA of Rectangular Prism
      {
        type: "mc", difficulty: 3,
        question: 'A present is wrapped in a box that is <span class="math">8</span> in long, <span class="math">5</span> in wide, and <span class="math">2</span> in tall. How much wrapping paper covers the box exactly (surface area)?',
        choices: ["80 in²", "116 in²", "132 in²", "160 in²"],
        answer: "132 in²",
        hints: [
          "SA = 2(lw + lh + wh) = 2(8×5 + 8×2 + 5×2).",
          "= 2(40 + 16 + 10) = 2(66).",
          "SA = 132 in²."
        ],
        explanation: [
          "SA = 2(40 + 16 + 10) = 2(66)",
          "SA = <strong>132 in²</strong>"
        ]
      },
      // Boss Q29 — Volume of Cylinder (reverse)
      {
        type: "mc", difficulty: 4,
        question: 'A cylinder has a volume of <span class="math">314</span> cm³ and a height of <span class="math">4</span> cm. What is its radius? (Use <span class="math">\\pi \\approx 3.14</span>)',
        choices: ["3 cm", "4 cm", "5 cm", "6 cm"],
        answer: "5 cm",
        hints: [
          "V = πr²h → 314 = 3.14 × r² × 4.",
          "Divide both sides by 4: 78.5 = 3.14 × r².",
          "r² = 78.5 ÷ 3.14 = 25. So r = 5 cm."
        ],
        explanation: [
          "314 = 3.14 × r² × 4 → 78.5 = 3.14 × r² → r² = 25",
          "r = √25 = <strong>5 cm</strong>"
        ]
      },
      // Boss Q30 — Volume of Pyramid (word problem)
      {
        type: "numeric", difficulty: 4,
        question: 'A sandcastle pyramid has a rectangular base <span class="math">12</span> cm by <span class="math">9</span> cm and a height of <span class="math">10</span> cm. What is its volume?',
        answer: "360",
        hints: [
          "Base area = 12 × 9 = 108 cm².",
          "V = (1/3) × 108 × 10 = (1/3) × 1080.",
          "V = 360 cm³."
        ],
        explanation: [
          "B = 12 × 9 = 108. V = (1/3)(108)(10) = 1080/3",
          "V = <strong>360</strong> cm³"
        ]
      }
    ]

  }
};
