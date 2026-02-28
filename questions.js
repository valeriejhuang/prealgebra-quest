// ===== MATH QUEST: TEARS OF KNOWLEDGE — Question Bank =====
// Pool-based system: 15 tutorial + 15 challenge + 10 boss per world
// Engine picks 5 random from each tier per session

const WORLDS = [
  // ============================================================
  // WORLD 0 — Arithmetic Archipelago
  // Chapter: Properties of Arithmetic
  // ============================================================
  {
    id: 0, name: "Arithmetic Archipelago", icon: "🏝️",
    chapter: "Properties of Arithmetic", color: "#20b2aa",
    bossName: "Arithmos, the Chaos Calculator",
    bossDesc: "A giant stone abacus golem animated by dark equations",
    pool: {
      // ── Tutorial (15 problems, difficulty 1-2) ──
      tutorial: [
        {
          type: "mc", difficulty: 1,
          question: 'What is <span class="math">17 + 28</span>?',
          choices: ["43", "45", "55", "35"],
          answer: "45",
          hints: [
            "Break it into easier parts: 17 + 28 = 17 + 3 + 25",
            "Think: 17 + 3 = 20, then 20 + 25 = ?",
            "20 + 25 = 45"
          ],
          explanation: [
            "We can regroup: 17 + 28",
            "= 17 + 3 + 25 (split 28 into 3 + 25)",
            "= 20 + 25 = <strong>45</strong>"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'Which property says <span class="math">a + b = b + a</span>?',
          choices: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
          answer: "Commutative property",
          hints: [
            "This property is about the ORDER of numbers.",
            "'Commute' means to move — think of swapping positions.",
            "The commutative property lets you swap the order."
          ],
          explanation: [
            "The <strong>commutative property of addition</strong> states that changing the order doesn't change the sum.",
            "a + b = b + a",
            "Example: 3 + 5 = 5 + 3 = 8"
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'Compute <span class="math">8 × 7</span>.',
          answer: "56",
          hints: [
            "Think of it as 8 groups of 7.",
            "8 × 7 = 8 × 5 + 8 × 2 = 40 + 16",
            "40 + 16 = 56"
          ],
          explanation: [
            "8 × 7 = 56",
            "One way: 8 × 7 = (8 × 5) + (8 × 2) = 40 + 16 = <strong>56</strong>",
            "This uses the distributive property!"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What is <span class="math">144 ÷ 12</span>?',
          choices: ["11", "12", "13", "14"],
          answer: "12",
          hints: [
            "Ask: 12 times what number equals 144?",
            "12 × 10 = 120, 12 × 12 = ?",
            "12 × 12 = 144"
          ],
          explanation: [
            "144 ÷ 12 = <strong>12</strong>",
            "Because 12 × 12 = 144.",
            "Fun fact: 144 is called a 'perfect square' (12²)."
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'Use the distributive property to compute:<br><span class="math">6 × 13</span>',
          answer: "78",
          hints: [
            "Break 13 into 10 + 3.",
            "6 × 13 = 6 × (10 + 3) = 6×10 + 6×3",
            "= 60 + 18 = 78"
          ],
          explanation: [
            "6 × 13 = 6 × (10 + 3)",
            "= 6 × 10 + 6 × 3 (distributive property)",
            "= 60 + 18 = <strong>78</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'What is <span class="math">100 − 37</span>?',
          answer: "63",
          hints: [
            "Think: what do you add to 37 to get 100?",
            "37 + 3 = 40, and 40 + 60 = 100",
            "So 3 + 60 = 63"
          ],
          explanation: [
            "100 − 37 = <strong>63</strong>",
            "Mental trick: 37 + 63 = 100",
            "You can check: 63 + 37 = 100 ✓"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'Which property says <span class="math">(a + b) + c = a + (b + c)</span>?',
          choices: ["Distributive property", "Commutative property", "Associative property", "Identity property"],
          answer: "Associative property",
          hints: [
            "This property is about how you GROUP numbers, not the order.",
            "'Associate' means to group together.",
            "The associative property says you can regroup without changing the result."
          ],
          explanation: [
            "The <strong>associative property</strong> says that regrouping doesn't change the result.",
            "(a + b) + c = a + (b + c)",
            "Example: (2 + 3) + 4 = 5 + 4 = 9, and 2 + (3 + 4) = 2 + 7 = 9"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'Compute <span class="math">9 × 8</span> using the trick <span class="math">9 × 8 = 10 × 8 − 8</span>.',
          answer: "72",
          hints: [
            "Replace 9 with (10 − 1).",
            "9 × 8 = (10 − 1) × 8 = 80 − 8",
            "80 − 8 = 72"
          ],
          explanation: [
            "9 × 8 = (10 − 1) × 8",
            "= 10 × 8 − 1 × 8 = 80 − 8",
            "= <strong>72</strong>"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What is <span class="math">0 × 5432</span>?',
          choices: ["5432", "0", "1", "5430"],
          answer: "0",
          hints: [
            "Anything times zero is...",
            "Zero groups of 5432 means nothing at all.",
            "a × 0 = 0 for any number a."
          ],
          explanation: [
            "0 × 5432 = <strong>0</strong>",
            "This is the <strong>zero property of multiplication</strong>.",
            "Any number multiplied by 0 equals 0."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'Compute <span class="math">15 × 4</span>.',
          answer: "60",
          hints: [
            "Think: 15 × 4 = 15 × 2 × 2",
            "15 × 2 = 30",
            "30 × 2 = 60"
          ],
          explanation: [
            "15 × 4 = 15 × 2 × 2",
            "= 30 × 2 = <strong>60</strong>",
            "Or: 15 × 4 = (10 + 5) × 4 = 40 + 20 = 60"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Which property is used here?<br><span class="math">3 × (4 + 5) = 3 × 4 + 3 × 5</span>',
          choices: ["Commutative property", "Associative property", "Distributive property", "Identity property"],
          answer: "Distributive property",
          hints: [
            "Notice that multiplication is being 'distributed' over addition.",
            "a × (b + c) = a × b + a × c",
            "This is the distributive property."
          ],
          explanation: [
            "The <strong>distributive property</strong> says a × (b + c) = a × b + a × c.",
            "Here: 3 × (4 + 5) = 3 × 4 + 3 × 5",
            "= 12 + 15 = 27, and 3 × 9 = 27 ✓"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">250 + 175 + 50</span>? Try grouping!',
          answer: "475",
          hints: [
            "Look for numbers that add to a nice round number.",
            "250 + 50 = 300",
            "300 + 175 = 475"
          ],
          explanation: [
            "Group the friendly pair: 250 + 50 = 300",
            "Then: 300 + 175 = <strong>475</strong>",
            "We used the commutative and associative properties to reorder and regroup."
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What is <span class="math">1 × 847</span>?',
          choices: ["0", "1", "847", "848"],
          answer: "847",
          hints: [
            "Multiplying by 1 doesn't change a number.",
            "This is called the identity property of multiplication.",
            "1 × a = a for any number a."
          ],
          explanation: [
            "1 × 847 = <strong>847</strong>",
            "This is the <strong>identity property of multiplication</strong>.",
            "The number 1 is the multiplicative identity."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">56 ÷ 8</span>?',
          answer: "7",
          hints: [
            "Ask: 8 times what equals 56?",
            "8 × 5 = 40, 8 × 6 = 48, 8 × 7 = ?",
            "8 × 7 = 56"
          ],
          explanation: [
            "56 ÷ 8 = <strong>7</strong>",
            "Because 8 × 7 = 56.",
            "Division is the inverse of multiplication."
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is <span class="math">48 + 35</span>?',
          choices: ["73", "83", "93", "63"],
          answer: "83",
          hints: [
            "Break it up: 48 + 35 = 48 + 2 + 33",
            "48 + 2 = 50",
            "50 + 33 = 83"
          ],
          explanation: [
            "48 + 35 = 48 + 2 + 33",
            "= 50 + 33",
            "= <strong>83</strong>"
          ]
        }
      ],

      // ── Challenge (15 problems, difficulty 2-3) ──
      challenge: [
        {
          type: "numeric", difficulty: 2,
          question: 'Compute <span class="math">25 × 16</span> without a calculator. (Hint: think about how to break this up!)',
          answer: "400",
          hints: [
            "Try: 25 × 16 = 25 × 4 × 4",
            "25 × 4 = 100, so 100 × 4 = ?",
            "100 × 4 = 400"
          ],
          explanation: [
            "25 × 16 = 25 × (4 × 4)",
            "= (25 × 4) × 4 (associative property)",
            "= 100 × 4 = <strong>400</strong>"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is <span class="math">(37 + 45) + 63</span>?<br>Try to make the addition easier!',
          choices: ["135", "145", "155", "125"],
          answer: "145",
          hints: [
            "Can you pair numbers that add to a round number?",
            "37 + 63 = 100 (notice how these are friendly pairs)",
            "100 + 45 = 145"
          ],
          explanation: [
            "Rearrange using commutative + associative properties:",
            "(37 + 45) + 63 = (37 + 63) + 45",
            "= 100 + 45 = <strong>145</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'A store sells pencils for 7 cents each. How many cents do 99 pencils cost?',
          answer: "693",
          hints: [
            "We need 7 × 99. Can you use a clever trick?",
            "99 = 100 − 1, so 7 × 99 = 7 × 100 − 7 × 1",
            "= 700 − 7 = 693"
          ],
          explanation: [
            "7 × 99 = 7 × (100 − 1)",
            "= 7 × 100 − 7 × 1 (distributive property)",
            "= 700 − 7 = <strong>693</strong> cents"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Which of these equals <span class="math">8 × 97 + 8 × 3</span>?',
          choices: ["8 × 100 = 800", "8 × 94 = 752", "8 × 291 = 2328", "8 × 300 = 2400"],
          answer: "8 × 100 = 800",
          hints: [
            "Factor out the common factor of 8.",
            "8 × 97 + 8 × 3 = 8 × (97 + 3)",
            "97 + 3 = 100, so it's 8 × 100"
          ],
          explanation: [
            "8 × 97 + 8 × 3",
            "= 8 × (97 + 3) (distributive property, factoring)",
            "= 8 × 100 = <strong>800</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">123 × 45 + 123 × 55</span>.',
          answer: "12300",
          hints: [
            "Both terms share a common factor. What is it?",
            "Factor: 123 × (45 + 55) = 123 × 100",
            "= 12300"
          ],
          explanation: [
            "123 × 45 + 123 × 55",
            "= 123 × (45 + 55) (distributive property)",
            "= 123 × 100 = <strong>12,300</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'Compute <span class="math">12 × 15</span> mentally.',
          answer: "180",
          hints: [
            "Break 15 into 10 + 5.",
            "12 × 10 = 120 and 12 × 5 = 60",
            "120 + 60 = 180"
          ],
          explanation: [
            "12 × 15 = 12 × (10 + 5)",
            "= 120 + 60",
            "= <strong>180</strong>"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is <span class="math">5 × 18 × 2</span>? Group cleverly!',
          choices: ["180", "160", "200", "150"],
          answer: "180",
          hints: [
            "Look for a pair that multiplies to a round number.",
            "5 × 2 = 10",
            "10 × 18 = 180"
          ],
          explanation: [
            "Regroup: (5 × 2) × 18 = 10 × 18",
            "= <strong>180</strong>",
            "We used the commutative and associative properties of multiplication."
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">47 × 8 + 53 × 8</span>.',
          answer: "800",
          hints: [
            "Both terms have a common factor of 8.",
            "Factor: (47 + 53) × 8",
            "= 100 × 8 = 800"
          ],
          explanation: [
            "47 × 8 + 53 × 8 = (47 + 53) × 8",
            "= 100 × 8",
            "= <strong>800</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'A baker makes 24 muffins per batch. She makes 4 batches in the morning and 6 batches in the afternoon. How many muffins total?',
          choices: ["220", "240", "260", "280"],
          answer: "240",
          hints: [
            "Total batches = 4 + 6 = 10",
            "24 × 10 = 240",
            "Or: 24 × 4 + 24 × 6 = 96 + 144 = 240"
          ],
          explanation: [
            "Total muffins = 24 × 4 + 24 × 6",
            "= 24 × (4 + 6) = 24 × 10",
            "= <strong>240</strong> muffins"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">999 + 47</span>?',
          answer: "1046",
          hints: [
            "999 is close to 1000. Use that!",
            "999 + 47 = 1000 + 47 − 1",
            "= 1047 − 1 = 1046"
          ],
          explanation: [
            "999 + 47 = (1000 − 1) + 47",
            "= 1000 + 47 − 1",
            "= <strong>1046</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'What is <span class="math">36 × 25</span>?',
          choices: ["800", "850", "900", "950"],
          answer: "900",
          hints: [
            "36 × 25 = 9 × 4 × 25",
            "4 × 25 = 100",
            "9 × 100 = 900"
          ],
          explanation: [
            "36 × 25 = (9 × 4) × 25",
            "= 9 × (4 × 25) = 9 × 100",
            "= <strong>900</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'There are 8 rows of seats. Each row has 13 seats. How many seats total? Use the distributive property.',
          answer: "104",
          hints: [
            "We need 8 × 13.",
            "8 × 13 = 8 × (10 + 3) = 80 + 24",
            "= 104"
          ],
          explanation: [
            "8 × 13 = 8 × (10 + 3)",
            "= 8 × 10 + 8 × 3 = 80 + 24",
            "= <strong>104</strong> seats"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Does <span class="math">15 − 8</span> equal <span class="math">8 − 15</span>?',
          choices: ["Yes, subtraction is commutative", "No, subtraction is NOT commutative", "Only when the numbers are equal", "Only for positive numbers"],
          answer: "No, subtraction is NOT commutative",
          hints: [
            "Compute both: 15 − 8 = 7, and 8 − 15 = −7.",
            "7 ≠ −7, so the results are different.",
            "Subtraction does NOT have the commutative property."
          ],
          explanation: [
            "15 − 8 = 7, but 8 − 15 = −7",
            "Since 7 ≠ −7, subtraction is <strong>NOT commutative</strong>.",
            "Only addition and multiplication are commutative."
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">4 × 7 × 25</span>.',
          answer: "700",
          hints: [
            "Look for a pair that makes a round number.",
            "4 × 25 = 100",
            "100 × 7 = 700"
          ],
          explanation: [
            "Regroup: (4 × 25) × 7 = 100 × 7",
            "= <strong>700</strong>",
            "The associative and commutative properties let us reorder and regroup."
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'A movie ticket costs $12. How much do 15 tickets cost?',
          choices: ["$150", "$160", "$170", "$180"],
          answer: "$180",
          hints: [
            "Compute 12 × 15.",
            "12 × 15 = 12 × 10 + 12 × 5 = 120 + 60",
            "= 180"
          ],
          explanation: [
            "12 × 15 = 12 × (10 + 5)",
            "= 120 + 60",
            "= <strong>$180</strong>"
          ]
        }
      ],

      // ── Boss (10 problems, difficulty 3-4) ──
      boss: [
        {
          type: "mc", difficulty: 3,
          question: 'What is <span class="math">4 × (25 × 37)</span>?',
          choices: ["3700", "3600", "3800", "4000"],
          answer: "3700",
          hints: [
            "Regroup: (4 × 25) × 37",
            "4 × 25 = 100",
            "100 × 37 = 3700"
          ],
          explanation: [
            "4 × (25 × 37) = (4 × 25) × 37 (associative property)",
            "= 100 × 37",
            "= <strong>3700</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">999 × 5</span> mentally.',
          answer: "4995",
          hints: [
            "999 is just 1000 − 1.",
            "999 × 5 = (1000 − 1) × 5 = 5000 − 5",
            "= 4995"
          ],
          explanation: [
            "999 × 5 = (1000 − 1) × 5",
            "= 5000 − 5",
            "= <strong>4995</strong>"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'Which is larger: <span class="math">38 × 42</span> or <span class="math">37 × 43</span>?',
          choices: ["38 × 42", "37 × 43", "They are equal", "Cannot determine"],
          answer: "38 × 42",
          hints: [
            "Both pairs center around 40. Use the difference of squares idea.",
            "38 × 42 = (40 − 2)(40 + 2) = 1600 − 4 = 1596",
            "37 × 43 = (40 − 3)(40 + 3) = 1600 − 9 = 1591"
          ],
          explanation: [
            "38 × 42 = (40 − 2)(40 + 2) = 40² − 2² = 1600 − 4 = 1596",
            "37 × 43 = (40 − 3)(40 + 3) = 40² − 3² = 1600 − 9 = 1591",
            "<strong>38 × 42 = 1596</strong> is larger than 37 × 43 = 1591"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'If <span class="math">a ★ b = a × b + a + b</span>, what is <span class="math">3 ★ 7</span>?',
          answer: "31",
          hints: [
            "Plug in a = 3 and b = 7 into the formula.",
            "3 ★ 7 = 3 × 7 + 3 + 7",
            "= 21 + 3 + 7 = 31"
          ],
          explanation: [
            "a ★ b = a × b + a + b",
            "3 ★ 7 = 3 × 7 + 3 + 7",
            "= 21 + 3 + 7 = <strong>31</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'Compute <span class="math">1 + 2 + 3 + ... + 20</span>.',
          answer: "210",
          hints: [
            "Pair numbers from the outside: 1 + 20 = 21, 2 + 19 = 21, ...",
            "How many such pairs are there? 10 pairs.",
            "10 × 21 = 210"
          ],
          explanation: [
            "Pair numbers: 1+20 = 21, 2+19 = 21, 3+18 = 21, ..., 10+11 = 21",
            "There are 10 such pairs.",
            "10 × 21 = <strong>210</strong> (Gauss's formula: n(n+1)/2 = 20×21/2 = 210)"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">50 × 48</span> mentally.',
          answer: "2400",
          hints: [
            "50 × 48 = 50 × 48. Think of 50 as half of 100.",
            "50 × 48 = (100 ÷ 2) × 48 = 100 × 48 ÷ 2",
            "= 4800 ÷ 2 = 2400"
          ],
          explanation: [
            "50 × 48 = (100 × 48) ÷ 2",
            "= 4800 ÷ 2",
            "= <strong>2400</strong>"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'Compute <span class="math">17 × 6 + 17 × 3 + 17</span>.',
          choices: ["170", "160", "150", "180"],
          answer: "170",
          hints: [
            "Notice every term has a factor of 17.",
            "17 × 6 + 17 × 3 + 17 × 1 = 17 × (6 + 3 + 1)",
            "= 17 × 10 = 170"
          ],
          explanation: [
            "17 × 6 + 17 × 3 + 17 = 17 × 6 + 17 × 3 + 17 × 1",
            "= 17 × (6 + 3 + 1) (factor out 17)",
            "= 17 × 10 = <strong>170</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'Compute <span class="math">1 + 2 + 3 + ... + 50</span>.',
          answer: "1275",
          hints: [
            "Use Gauss's pairing trick: 1 + 50 = 51, 2 + 49 = 51, ...",
            "There are 25 pairs, each summing to 51.",
            "25 × 51 = 1275"
          ],
          explanation: [
            "Pair: 1+50 = 51, 2+49 = 51, ..., 25+26 = 51",
            "25 pairs × 51 = 1275",
            "Or: n(n+1)/2 = 50 × 51/2 = <strong>1275</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Which expression equals <span class="math">98 × 7</span>?',
          choices: ["700 − 14", "700 − 7", "700 + 14", "690 + 6"],
          answer: "700 − 14",
          hints: [
            "98 = 100 − 2",
            "98 × 7 = (100 − 2) × 7 = 700 − 14",
            "= 686"
          ],
          explanation: [
            "98 × 7 = (100 − 2) × 7",
            "= 100 × 7 − 2 × 7 = 700 − 14",
            "= <strong>686</strong>, and the matching expression is 700 − 14"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'If <span class="math">a + b = 10</span> and <span class="math">a × b = 21</span>, what is <span class="math">a² + b²</span>?',
          answer: "58",
          hints: [
            "Remember: (a + b)² = a² + 2ab + b²",
            "So a² + b² = (a + b)² − 2ab",
            "= 10² − 2 × 21 = 100 − 42 = 58"
          ],
          explanation: [
            "Use the identity: (a + b)² = a² + 2ab + b²",
            "So a² + b² = (a + b)² − 2ab",
            "= 100 − 42 = <strong>58</strong>"
          ]
        }
      ]
    }
  },

  // ============================================================
  // WORLD 1 — Exponent Peaks
  // Chapter: Exponents
  // ============================================================
  {
    id: 1, name: "Exponent Peaks", icon: "🌋",
    chapter: "Exponents", color: "#ff6b35",
    bossName: "Expona, the Power Beast",
    bossDesc: "A multi-headed dragon whose heads multiply with each power",
    pool: {
      // ── Tutorial (15 problems, difficulty 1-2) ──
      tutorial: [
        {
          type: "numeric", difficulty: 1,
          question: 'What is <span class="math">2³</span>? (2 to the power of 3)',
          answer: "8",
          hints: [
            "2³ means 2 multiplied by itself 3 times.",
            "2³ = 2 × 2 × 2",
            "= 4 × 2 = 8"
          ],
          explanation: [
            "2³ = 2 × 2 × 2",
            "= 4 × 2 = <strong>8</strong>",
            "The base is 2 and the exponent is 3."
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What is <span class="math">5²</span>?',
          choices: ["10", "25", "32", "52"],
          answer: "25",
          hints: [
            "5² means 5 times itself.",
            "5 × 5 = ?",
            "= 25"
          ],
          explanation: [
            "5² = 5 × 5 = <strong>25</strong>",
            "We say '5 squared' because a square with side 5 has area 25.",
            "The base is 5 and the exponent is 2."
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'Compute <span class="math">10⁴</span>.',
          answer: "10000",
          hints: [
            "10⁴ = 10 × 10 × 10 × 10",
            "Each multiplication by 10 adds a zero.",
            "10⁴ = 1 followed by 4 zeros"
          ],
          explanation: [
            "10⁴ = 10 × 10 × 10 × 10",
            "= <strong>10000</strong>",
            "Powers of 10 are easy: 10ⁿ = 1 followed by n zeros."
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What does <span class="math">a⁰</span> equal (for any nonzero a)?',
          choices: ["0", "1", "a", "undefined"],
          answer: "1",
          hints: [
            "Think about the pattern: a³, a², a¹, a⁰ ...",
            "Each time the exponent decreases by 1, we divide by a.",
            "a¹ = a, so a⁰ = a ÷ a = 1"
          ],
          explanation: [
            "By the pattern: a³ ÷ a = a², a² ÷ a = a¹, a¹ ÷ a = a⁰",
            "So a⁰ = a¹ ÷ a = a/a = <strong>1</strong>",
            "This works for any nonzero number a."
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'What is <span class="math">3⁴</span>?',
          answer: "81",
          hints: [
            "3⁴ = 3 × 3 × 3 × 3",
            "3 × 3 = 9, so 3⁴ = 9 × 9",
            "9 × 9 = 81"
          ],
          explanation: [
            "3⁴ = 3 × 3 × 3 × 3",
            "= 9 × 9 = <strong>81</strong>",
            "We can also write 3⁴ = (3²)² = 9² = 81."
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'In the expression <span class="math">7⁵</span>, what is the base and what is the exponent?',
          choices: ["Base = 5, Exponent = 7", "Base = 7, Exponent = 5", "Base = 35, Exponent = 1", "Base = 7, Exponent = 35"],
          answer: "Base = 7, Exponent = 5",
          hints: [
            "In aⁿ, the bottom number is the base.",
            "The top (small) number is the exponent.",
            "Here a = 7 and n = 5."
          ],
          explanation: [
            "In <strong>7⁵</strong>, the base is 7 and the exponent is 5.",
            "It means 7 × 7 × 7 × 7 × 7.",
            "The base tells WHAT is multiplied; the exponent tells HOW MANY times."
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'What is <span class="math">10²</span>?',
          answer: "100",
          hints: [
            "10² means 10 × 10.",
            "10 × 10 = ?",
            "= 100"
          ],
          explanation: [
            "10² = 10 × 10 = <strong>100</strong>",
            "10² is the same as 'ten squared.'",
            "Powers of 10: 10¹ = 10, 10² = 100, 10³ = 1000, ..."
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is <span class="math">1¹⁰⁰</span>?',
          choices: ["100", "1", "0", "1000"],
          answer: "1",
          hints: [
            "1 multiplied by itself any number of times is still 1.",
            "1 × 1 × 1 × ... × 1 = 1",
            "1 raised to ANY power equals 1."
          ],
          explanation: [
            "1¹⁰⁰ = 1 × 1 × 1 × ... × 1 (100 times)",
            "= <strong>1</strong>",
            "Any power of 1 always equals 1."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">2⁵</span>?',
          answer: "32",
          hints: [
            "2⁵ = 2 × 2 × 2 × 2 × 2",
            "2 × 2 = 4, 4 × 2 = 8, 8 × 2 = 16, 16 × 2 = ?",
            "16 × 2 = 32"
          ],
          explanation: [
            "2⁵ = 2 × 2 × 2 × 2 × 2",
            "= 4 × 8 = <strong>32</strong>",
            "Powers of 2: 2, 4, 8, 16, 32, 64, 128, ..."
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Which is greater: <span class="math">2⁴</span> or <span class="math">4²</span>?',
          choices: ["2⁴ is greater", "4² is greater", "They are equal", "Cannot tell"],
          answer: "They are equal",
          hints: [
            "Compute each one.",
            "2⁴ = 2 × 2 × 2 × 2 = 16",
            "4² = 4 × 4 = 16"
          ],
          explanation: [
            "2⁴ = 16 and 4² = 16",
            "They are <strong>equal</strong>!",
            "This makes sense: 4² = (2²)² = 2⁴."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'Compute <span class="math">6²</span>.',
          answer: "36",
          hints: [
            "6² means 6 × 6.",
            "6 × 6 = ?",
            "= 36"
          ],
          explanation: [
            "6² = 6 × 6 = <strong>36</strong>",
            "This is read as '6 squared.'",
            "36 is a perfect square."
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'How many zeros does <span class="math">10⁵</span> have?',
          choices: ["4", "5", "6", "10"],
          answer: "5",
          hints: [
            "10⁵ = 100,000",
            "Count the zeros: 1-0-0-0-0-0",
            "That's 5 zeros."
          ],
          explanation: [
            "10⁵ = 100,000",
            "The number has <strong>5</strong> zeros.",
            "Rule: 10ⁿ always has exactly n zeros."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">4²</span>?',
          answer: "16",
          hints: [
            "4² = 4 × 4",
            "4 × 4 = ?",
            "= 16"
          ],
          explanation: [
            "4² = 4 × 4 = <strong>16</strong>",
            "16 is a perfect square.",
            "It is also 2⁴ since 4 = 2² and (2²)² = 2⁴ = 16."
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What is <span class="math">2¹</span>?',
          choices: ["1", "2", "0", "12"],
          answer: "2",
          hints: [
            "Any number to the power of 1 is just that number.",
            "a¹ = a",
            "2¹ = 2"
          ],
          explanation: [
            "2¹ = <strong>2</strong>",
            "Any number raised to the first power equals itself.",
            "a¹ = a for all numbers a."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">7²</span>?',
          answer: "49",
          hints: [
            "7² = 7 × 7",
            "7 × 7 = ?",
            "= 49"
          ],
          explanation: [
            "7² = 7 × 7 = <strong>49</strong>",
            "49 is a perfect square.",
            "Knowing perfect squares helps with many math problems!"
          ]
        }
      ],

      // ── Challenge (15 problems, difficulty 2-3) ──
      challenge: [
        {
          type: "mc", difficulty: 2,
          question: 'Simplify <span class="math">2³ × 2⁴</span>.',
          choices: ["2⁷ = 128", "2¹² = 4096", "4⁷", "4¹²"],
          answer: "2⁷ = 128",
          hints: [
            "When multiplying same bases, what happens to exponents?",
            "aᵐ × aⁿ = aᵐ⁺ⁿ",
            "2³ × 2⁴ = 2³⁺⁴ = 2⁷"
          ],
          explanation: [
            "When multiplying powers with the same base, ADD the exponents:",
            "2³ × 2⁴ = 2³⁺⁴ = 2⁷",
            "2⁷ = <strong>128</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">(2³)²</span>?',
          answer: "64",
          hints: [
            "A power raised to a power: multiply the exponents.",
            "(2³)² = 2³ˣ² = 2⁶",
            "2⁶ = 64"
          ],
          explanation: [
            "(aᵐ)ⁿ = aᵐˣⁿ (power rule)",
            "(2³)² = 2³ˣ² = 2⁶",
            "2⁶ = <strong>64</strong>"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is <span class="math">2⁵ ÷ 2²</span>?',
          choices: ["2³ = 8", "2⁷ = 128", "1³ = 1", "2¹⁰ = 1024"],
          answer: "2³ = 8",
          hints: [
            "When dividing same bases, subtract exponents.",
            "aᵐ ÷ aⁿ = aᵐ⁻ⁿ",
            "2⁵ ÷ 2² = 2⁵⁻² = 2³ = 8"
          ],
          explanation: [
            "aᵐ ÷ aⁿ = aᵐ⁻ⁿ (quotient rule)",
            "2⁵ ÷ 2² = 2³",
            "2³ = <strong>8</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">4³</span>.',
          answer: "64",
          hints: [
            "4³ = 4 × 4 × 4",
            "4 × 4 = 16, then 16 × 4 = ?",
            "16 × 4 = 64"
          ],
          explanation: [
            "4³ = 4 × 4 × 4",
            "= 16 × 4 = <strong>64</strong>",
            "Notice: 4³ = (2²)³ = 2⁶ = 64 ✓"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'If <span class="math">2ⁿ = 64</span>, what is n?',
          answer: "6",
          hints: [
            "Keep doubling: 2, 4, 8, 16, 32, 64...",
            "Count: 2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = ?",
            "2⁶ = 64, so n = 6"
          ],
          explanation: [
            "2¹ = 2, 2² = 4, 2³ = 8, 2⁴ = 16, 2⁵ = 32, 2⁶ = 64",
            "So n = <strong>6</strong>",
            "Knowing the powers of 2 by heart is very useful!"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is <span class="math">5⁰ + 3⁰ + 7⁰</span>?',
          choices: ["0", "1", "3", "15"],
          answer: "3",
          hints: [
            "Remember: any nonzero number to the power 0 equals 1.",
            "5⁰ = 1, 3⁰ = 1, 7⁰ = 1",
            "1 + 1 + 1 = 3"
          ],
          explanation: [
            "a⁰ = 1 for any nonzero a.",
            "5⁰ + 3⁰ + 7⁰ = 1 + 1 + 1",
            "= <strong>3</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Simplify <span class="math">3⁵ ÷ 3²</span>. Give the numerical answer.',
          answer: "27",
          hints: [
            "When dividing same bases, subtract exponents.",
            "3⁵ ÷ 3² = 3⁵⁻² = 3³",
            "3³ = 27"
          ],
          explanation: [
            "3⁵ ÷ 3² = 3⁵⁻² = 3³",
            "3³ = 3 × 3 × 3 = <strong>27</strong>",
            "This is the quotient rule for exponents."
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'What is <span class="math">(5²)³</span>?',
          choices: ["5⁵ = 3125", "5⁶ = 15625", "5⁸ = 390625", "5⁹"],
          answer: "5⁶ = 15625",
          hints: [
            "Power rule: (aᵐ)ⁿ = aᵐˣⁿ",
            "(5²)³ = 5²ˣ³ = 5⁶",
            "5⁶ = 15625"
          ],
          explanation: [
            "(5²)³ = 5²ˣ³ = 5⁶",
            "5⁶ = 5 × 5 × 5 × 5 × 5 × 5 = <strong>15625</strong>",
            "Or: 5² = 25, and 25³ = 25 × 25 × 25 = 15625 ✓"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">10³ × 10²</span>?',
          answer: "100000",
          hints: [
            "Product rule: add exponents when bases are the same.",
            "10³ × 10² = 10³⁺² = 10⁵",
            "10⁵ = 100000"
          ],
          explanation: [
            "10³ × 10² = 10³⁺² = 10⁵",
            "10⁵ = <strong>100000</strong>",
            "With powers of 10: just count the total zeros!"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Which is larger: <span class="math">3⁴</span> or <span class="math">4³</span>?',
          choices: ["3⁴", "4³", "They are equal", "Cannot tell"],
          answer: "3⁴",
          hints: [
            "Compute each: 3⁴ = 81",
            "4³ = 64",
            "81 > 64"
          ],
          explanation: [
            "3⁴ = 3 × 3 × 3 × 3 = 81",
            "4³ = 4 × 4 × 4 = 64",
            "<strong>3⁴ = 81</strong> is larger than 4³ = 64"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'If <span class="math">3ⁿ = 81</span>, what is n?',
          answer: "4",
          hints: [
            "List powers of 3: 3¹ = 3, 3² = 9, 3³ = 27, 3⁴ = ?",
            "3⁴ = 81",
            "So n = 4"
          ],
          explanation: [
            "3¹ = 3, 3² = 9, 3³ = 27, 3⁴ = 81",
            "So n = <strong>4</strong>",
            "Knowing small powers of 3 is very helpful!"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">2⁴ × 5⁴</span>.',
          answer: "10000",
          hints: [
            "When bases are different but exponents are the same: (a × b)ⁿ = aⁿ × bⁿ.",
            "2⁴ × 5⁴ = (2 × 5)⁴ = 10⁴",
            "10⁴ = 10000"
          ],
          explanation: [
            "2⁴ × 5⁴ = (2 × 5)⁴ = 10⁴",
            "10⁴ = <strong>10000</strong>",
            "This is the 'power of a product' rule in reverse."
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Simplify <span class="math">6⁴ ÷ 6⁴</span>.',
          choices: ["0", "1", "6", "6⁸"],
          answer: "1",
          hints: [
            "Any number divided by itself equals 1.",
            "Using exponent rules: 6⁴ ÷ 6⁴ = 6⁴⁻⁴ = 6⁰",
            "6⁰ = 1"
          ],
          explanation: [
            "6⁴ ÷ 6⁴ = 6⁴⁻⁴ = 6⁰ = <strong>1</strong>",
            "This is one way to see WHY a⁰ = 1.",
            "aⁿ ÷ aⁿ = 1, and aⁿ ÷ aⁿ = a⁰, so a⁰ = 1."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">9²</span>?',
          answer: "81",
          hints: [
            "9² = 9 × 9",
            "9 × 9 = ?",
            "= 81"
          ],
          explanation: [
            "9² = 9 × 9 = <strong>81</strong>",
            "Also: 9² = (3²)² = 3⁴ = 81 ✓",
            "81 is a perfect square."
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Simplify <span class="math">2² × 2³ × 2</span>.',
          choices: ["2⁵ = 32", "2⁶ = 64", "2⁷ = 128", "8⁶"],
          answer: "2⁶ = 64",
          hints: [
            "Remember: 2 = 2¹",
            "Add all exponents: 2 + 3 + 1 = 6",
            "2² × 2³ × 2¹ = 2⁶ = 64"
          ],
          explanation: [
            "2² × 2³ × 2¹ = 2²⁺³⁺¹ = 2⁶",
            "2⁶ = <strong>64</strong>",
            "When multiplying same bases, add ALL the exponents."
          ]
        }
      ],

      // ── Boss (10 problems, difficulty 3-4) ──
      boss: [
        {
          type: "numeric", difficulty: 3,
          question: 'What is <span class="math">2⁸</span>?',
          answer: "256",
          hints: [
            "Build up: 2⁴ = 16",
            "2⁸ = 2⁴ × 2⁴ = 16 × 16",
            "16 × 16 = 256"
          ],
          explanation: [
            "2⁸ = 2⁴ × 2⁴ = 16 × 16",
            "= <strong>256</strong>",
            "Powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Simplify: <span class="math">3² × 3³ ÷ 3⁴</span>',
          choices: ["3¹ = 3", "3⁵ = 243", "3⁹ = 19683", "3⁰ = 1"],
          answer: "3¹ = 3",
          hints: [
            "First multiply: 3² × 3³ = 3⁵",
            "Then divide: 3⁵ ÷ 3⁴ = 3¹",
            "3¹ = 3"
          ],
          explanation: [
            "3² × 3³ ÷ 3⁴ = 3²⁺³⁻⁴ = 3¹",
            "= <strong>3</strong>",
            "Add exponents for multiplication, subtract for division."
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'How many zeros does <span class="math">10⁶</span> have?',
          answer: "6",
          hints: [
            "10⁶ = 1,000,000",
            "Count the zeros after the 1.",
            "There are 6 zeros."
          ],
          explanation: [
            "10⁶ = 1,000,000",
            "The number has <strong>6</strong> zeros.",
            "Rule: 10ⁿ is a 1 followed by exactly n zeros."
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'What is the ones (units) digit of <span class="math">7³</span>?',
          answer: "3",
          hints: [
            "Compute 7³ = 7 × 7 × 7.",
            "7 × 7 = 49 (ones digit 9), 49 × 7 = 343",
            "The ones digit is 3."
          ],
          explanation: [
            "7³ = 7 × 7 × 7 = 343",
            "The ones digit is <strong>3</strong>.",
            "Shortcut: track only the ones digit: 7 → 9 → 3"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'If <span class="math">9 = 3²</span> and <span class="math">27 = 3³</span>, then <span class="math">27 × 9 = 3ⁿ</span>. What is n?',
          answer: "5",
          hints: [
            "Write each as a power of 3.",
            "27 × 9 = 3³ × 3²",
            "= 3³⁺² = 3⁵, so n = 5"
          ],
          explanation: [
            "9 = 3², 27 = 3³",
            "27 × 9 = 3³ × 3² = 3⁵",
            "So n = <strong>5</strong> (and 3⁵ = 243)"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'What is the ones digit of <span class="math">3²⁰</span>?',
          choices: ["1", "3", "7", "9"],
          answer: "1",
          hints: [
            "The ones digits of powers of 3 repeat in a cycle.",
            "3¹ = 3, 3² = 9, 3³ = 27, 3⁴ = 81, 3⁵ = 243 → cycle: 3, 9, 7, 1",
            "The cycle length is 4. Since 20 ÷ 4 = 5 with remainder 0, the ones digit matches 3⁴ = ...1"
          ],
          explanation: [
            "Ones digits of 3ⁿ cycle: 3, 9, 7, 1, 3, 9, 7, 1, ...",
            "Cycle length = 4. Since 20 ÷ 4 = 5 remainder 0, we use the 4th digit in the cycle.",
            "The ones digit is <strong>1</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Compute <span class="math">(10²)³</span>.',
          answer: "1000000",
          hints: [
            "Power rule: (aᵐ)ⁿ = aᵐˣⁿ",
            "(10²)³ = 10²ˣ³ = 10⁶",
            "10⁶ = 1,000,000"
          ],
          explanation: [
            "(10²)³ = 10⁶",
            "= <strong>1000000</strong>",
            "That's one million!"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'What is <span class="math">2¹⁰</span>?',
          choices: ["512", "1024", "2048", "4096"],
          answer: "1024",
          hints: [
            "2¹⁰ = 2⁵ × 2⁵ = 32 × 32",
            "32 × 32 = 1024",
            "This number is important in computing (1 KB = 1024 bytes)."
          ],
          explanation: [
            "2¹⁰ = 2⁵ × 2⁵ = 32 × 32",
            "= <strong>1024</strong>",
            "1024 is very important in computer science!"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'If <span class="math">4ⁿ = 2⁸</span>, what is n?',
          answer: "4",
          hints: [
            "Write 4 as a power of 2: 4 = 2²",
            "So 4ⁿ = (2²)ⁿ = 2²ⁿ",
            "2²ⁿ = 2⁸ means 2n = 8, so n = 4"
          ],
          explanation: [
            "4 = 2², so 4ⁿ = (2²)ⁿ = 2²ⁿ",
            "We need 2²ⁿ = 2⁸, so 2n = 8",
            "n = <strong>4</strong>"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'Which is larger: <span class="math">2⁷</span> or <span class="math">5³</span>?',
          choices: ["2⁷", "5³", "They are equal", "Cannot tell"],
          answer: "2⁷",
          hints: [
            "Compute 2⁷ = 128",
            "Compute 5³ = 125",
            "128 > 125"
          ],
          explanation: [
            "2⁷ = 128",
            "5³ = 125",
            "<strong>2⁷ = 128</strong> is larger (just barely!)"
          ]
        }
      ]
    }
  },

  // ============================================================
  // WORLD 2 — Prime Forest
  // Chapter: Number Theory
  // ============================================================
  {
    id: 2, name: "Prime Forest", icon: "🌲",
    chapter: "Number Theory", color: "#2ecc71",
    bossName: "Primordus, the Factor Worm",
    bossDesc: "A segmented worm whose body is built from prime factors",
    pool: {
      // ── Tutorial (15 problems, difficulty 1-2) ──
      tutorial: [
        {
          type: "mc", difficulty: 1,
          question: 'Which of these is a prime number?',
          choices: ["15", "21", "17", "9"],
          answer: "17",
          hints: [
            "A prime number has exactly 2 factors: 1 and itself.",
            "Check each: 15 = 3×5, 21 = 3×7, 9 = 3×3...",
            "17 has no divisors other than 1 and 17."
          ],
          explanation: [
            "15 = 3 × 5 (not prime), 21 = 3 × 7 (not prime), 9 = 3 × 3 (not prime)",
            "<strong>17</strong> is prime — only divisible by 1 and 17.",
            "To check, test divisors up to √17 ≈ 4.1: not divisible by 2 or 3. ✓"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'Is 1 a prime number?',
          choices: ["Yes", "No"],
          answer: "No",
          hints: [
            "A prime must have exactly TWO distinct factors.",
            "How many factors does 1 have?",
            "1 has only one factor (itself), so it is NOT prime."
          ],
          explanation: [
            "<strong>1 is NOT prime.</strong>",
            "By definition, a prime has exactly 2 factors: 1 and itself.",
            "The number 1 has only 1 factor, so it doesn't qualify."
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'How many prime numbers are between 1 and 10?',
          answer: "4",
          hints: [
            "List all numbers 2-10 and check each.",
            "Primes: 2, 3, 5, 7. That's it!",
            "4, 6, 8, 9, 10 are all composite."
          ],
          explanation: [
            "Primes between 1 and 10: <strong>2, 3, 5, 7</strong>",
            "That's <strong>4</strong> prime numbers.",
            "Note: 2 is the only even prime number!"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'What is the prime factorization of <span class="math">12</span>?',
          choices: ["2 × 6", "2² × 3", "3 × 4", "2 × 2 × 4"],
          answer: "2² × 3",
          hints: [
            "Keep breaking numbers into smaller factors until all are prime.",
            "12 = 2 × 6 = 2 × 2 × 3",
            "Using exponents: 2² × 3"
          ],
          explanation: [
            "12 = 2 × 6 = 2 × 2 × 3",
            "= <strong>2² × 3</strong>",
            "All factors (2 and 3) are prime. ✓"
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'Is <span class="math">42</span> divisible by 3?',
          choices: ["Yes", "No"],
          answer: "Yes",
          hints: [
            "The divisibility rule for 3: add the digits.",
            "4 + 2 = 6. Is 6 divisible by 3?",
            "Yes! 6 ÷ 3 = 2, so 42 is divisible by 3."
          ],
          explanation: [
            "Divisibility rule for 3: a number is divisible by 3 if the digit sum is divisible by 3.",
            "4 + 2 = 6, and 6 ÷ 3 = 2 ✓",
            "<strong>Yes</strong>, 42 is divisible by 3 (42 = 3 × 14)."
          ]
        },
        {
          type: "numeric", difficulty: 1,
          question: 'What is the smallest prime number?',
          answer: "2",
          hints: [
            "Is 1 prime? No — it only has one factor.",
            "Is 2 prime? It has exactly two factors: 1 and 2.",
            "Yes! 2 is the smallest prime."
          ],
          explanation: [
            "The smallest prime number is <strong>2</strong>.",
            "It is also the only even prime number.",
            "Every other even number is divisible by 2, so not prime."
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Which of these numbers is composite (NOT prime)?',
          choices: ["11", "13", "15", "19"],
          answer: "15",
          hints: [
            "A composite number has more than 2 factors.",
            "Check: 15 = 3 × 5",
            "15 is composite since it can be factored."
          ],
          explanation: [
            "11 is prime, 13 is prime, 19 is prime.",
            "<strong>15 = 3 × 5</strong> is composite.",
            "A composite number can be written as a product of smaller factors."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'Is <span class="math">51</span> divisible by 3? If yes, what is <span class="math">51 ÷ 3</span>?',
          answer: "17",
          hints: [
            "Digit sum: 5 + 1 = 6, and 6 is divisible by 3.",
            "So yes, 51 is divisible by 3.",
            "51 ÷ 3 = 17"
          ],
          explanation: [
            "Digit sum of 51: 5 + 1 = 6. Since 6 ÷ 3 = 2, yes it's divisible by 3.",
            "51 ÷ 3 = <strong>17</strong>",
            "So 51 = 3 × 17 (and both 3 and 17 are prime!)."
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Which divisibility rule tests for divisibility by 9?',
          choices: ["The number is even", "The digit sum is divisible by 9", "The last two digits form a multiple of 9", "The number ends in 0 or 9"],
          answer: "The digit sum is divisible by 9",
          hints: [
            "The rule for 9 is similar to the rule for 3.",
            "Add up all the digits.",
            "If the digit sum is divisible by 9, the number is divisible by 9."
          ],
          explanation: [
            "A number is divisible by 9 if its <strong>digit sum is divisible by 9</strong>.",
            "Example: 738 → 7 + 3 + 8 = 18, and 18 ÷ 9 = 2. So 738 is divisible by 9.",
            "738 ÷ 9 = 82 ✓"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is the prime factorization of <span class="math">18</span>? Give the number of prime factors (counting repeats).',
          answer: "3",
          hints: [
            "18 = 2 × 9 = 2 × 3 × 3",
            "So 18 = 2 × 3²",
            "Counting with repeats: 2, 3, 3 — that's 3 prime factors."
          ],
          explanation: [
            "18 = 2 × 3 × 3 = 2 × 3²",
            "Counting with repeats: one 2 and two 3s = <strong>3</strong> prime factors.",
            "The distinct primes are 2 and 3."
          ]
        },
        {
          type: "mc", difficulty: 1,
          question: 'Is <span class="math">2</span> a prime number?',
          choices: ["Yes", "No"],
          answer: "Yes",
          hints: [
            "2 has exactly two factors: 1 and 2.",
            "That matches the definition of prime.",
            "2 is the smallest and only even prime."
          ],
          explanation: [
            "<strong>Yes</strong>, 2 is prime.",
            "Its only factors are 1 and 2.",
            "2 is the only even prime — every other even number is divisible by 2."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'List the factors of <span class="math">10</span>. How many factors does it have?',
          answer: "4",
          hints: [
            "A factor of 10 divides 10 evenly.",
            "Factors: 1, 2, 5, 10",
            "That's 4 factors."
          ],
          explanation: [
            "Factors of 10: 1, 2, 5, 10",
            "That's <strong>4</strong> factors.",
            "10 = 2 × 5, so number of factors = (1+1)(1+1) = 4 ✓"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Is <span class="math">91</span> prime?',
          choices: ["Yes", "No — it equals 7 × 13", "No — it equals 9 × 11", "No — it equals 3 × 31"],
          answer: "No — it equals 7 × 13",
          hints: [
            "91 looks prime but check carefully!",
            "91 ÷ 7 = 13. Is that exact? 7 × 13 = 91. Yes!",
            "So 91 = 7 × 13, which means it's NOT prime."
          ],
          explanation: [
            "91 = 7 × 13",
            "<strong>No</strong>, 91 is NOT prime.",
            "91 is a famous 'prime impostor' — it looks prime but isn't!"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is <span class="math">72 ÷ 9</span>? (Use the divisibility rule for 9.)',
          answer: "8",
          hints: [
            "Digit sum of 72: 7 + 2 = 9. Since 9 ÷ 9 = 1, yes it's divisible.",
            "72 ÷ 9 = ?",
            "72 ÷ 9 = 8"
          ],
          explanation: [
            "Digit sum: 7 + 2 = 9 ✓ (divisible by 9)",
            "72 ÷ 9 = <strong>8</strong>",
            "9 × 8 = 72 ✓"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'What is the prime factorization of <span class="math">30</span>?',
          choices: ["2 × 15", "2 × 3 × 5", "5 × 6", "3 × 10"],
          answer: "2 × 3 × 5",
          hints: [
            "Break 30 into prime factors step by step.",
            "30 = 2 × 15 = 2 × 3 × 5",
            "All of 2, 3, and 5 are prime."
          ],
          explanation: [
            "30 = 2 × 15 = 2 × 3 × 5",
            "The prime factorization is <strong>2 × 3 × 5</strong>.",
            "All three factors are prime. ✓"
          ]
        }
      ],

      // ── Challenge (15 problems, difficulty 2-3) ──
      challenge: [
        {
          type: "numeric", difficulty: 2,
          question: 'What is the GCD (greatest common divisor) of <span class="math">24</span> and <span class="math">36</span>?',
          answer: "12",
          hints: [
            "Find the prime factorization of each number.",
            "24 = 2³ × 3 and 36 = 2² × 3²",
            "GCD = take the minimum power of each common prime: 2² × 3 = 12"
          ],
          explanation: [
            "24 = 2³ × 3",
            "36 = 2² × 3²",
            "GCD = 2^min(3,2) × 3^min(1,2) = 2² × 3 = 4 × 3 = <strong>12</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is the LCM (least common multiple) of <span class="math">6</span> and <span class="math">8</span>?',
          answer: "24",
          hints: [
            "Find prime factorizations: 6 = 2 × 3, 8 = 2³",
            "LCM = take the maximum power of each prime.",
            "LCM = 2³ × 3 = 8 × 3 = 24"
          ],
          explanation: [
            "6 = 2 × 3",
            "8 = 2³",
            "LCM = 2^max(1,3) × 3^max(1,0) = 2³ × 3 = <strong>24</strong>"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'How many factors does <span class="math">12</span> have?',
          choices: ["4", "5", "6", "7"],
          answer: "6",
          hints: [
            "List all numbers that divide 12 evenly.",
            "1, 2, 3, 4, 6, 12",
            "Count them up!"
          ],
          explanation: [
            "Factors of 12: <strong>1, 2, 3, 4, 6, 12</strong>",
            "That's <strong>6</strong> factors.",
            "Shortcut: 12 = 2² × 3¹, so factor count = (2+1)(1+1) = 3 × 2 = 6"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'How many distinct prime factors does <span class="math">60</span> have?',
          answer: "3",
          hints: [
            "Start dividing: 60 ÷ 2 = 30, 30 ÷ 2 = 15, 15 ÷ 3 = 5",
            "60 = 2² × 3 × 5",
            "The distinct primes are 2, 3, and 5 — that's 3."
          ],
          explanation: [
            "60 = 2² × 3 × 5",
            "The distinct prime factors are: 2, 3, 5",
            "That's <strong>3</strong> distinct prime factors."
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'Which number is NOT divisible by 6?',
          choices: ["48", "54", "64", "72"],
          answer: "64",
          hints: [
            "Divisible by 6 means divisible by BOTH 2 and 3.",
            "Check digit sums for 3: 6 + 4 = 10 (not divisible by 3).",
            "64 is even but NOT divisible by 3, so NOT divisible by 6."
          ],
          explanation: [
            "For divisibility by 6, a number must be divisible by both 2 and 3.",
            "64: even ✓, but 6 + 4 = 10 (not divisible by 3) ✗",
            "<strong>64</strong> is not divisible by 6."
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is the GCD of <span class="math">15</span> and <span class="math">25</span>?',
          answer: "5",
          hints: [
            "15 = 3 × 5 and 25 = 5²",
            "The only common prime is 5.",
            "GCD = 5"
          ],
          explanation: [
            "15 = 3 × 5",
            "25 = 5²",
            "GCD = 5^min(1,2) = <strong>5</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'How many factors does <span class="math">24</span> have?',
          choices: ["6", "7", "8", "9"],
          answer: "8",
          hints: [
            "24 = 2³ × 3¹",
            "Factor count formula: (3+1)(1+1) = 4 × 2",
            "= 8 factors"
          ],
          explanation: [
            "24 = 2³ × 3",
            "Number of factors = (3+1)(1+1) = 4 × 2 = <strong>8</strong>",
            "They are: 1, 2, 3, 4, 6, 8, 12, 24"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'What is the LCM of <span class="math">12</span> and <span class="math">15</span>?',
          answer: "60",
          hints: [
            "12 = 2² × 3 and 15 = 3 × 5",
            "LCM = take the max power of each prime: 2² × 3 × 5",
            "= 4 × 3 × 5 = 60"
          ],
          explanation: [
            "12 = 2² × 3, 15 = 3 × 5",
            "LCM = 2² × 3 × 5 = 4 × 15",
            "= <strong>60</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'What is the prime factorization of <span class="math">72</span>?',
          choices: ["2² × 3³", "2³ × 3²", "2⁴ × 3", "2 × 3⁴"],
          answer: "2³ × 3²",
          hints: [
            "72 = 8 × 9",
            "8 = 2³ and 9 = 3²",
            "So 72 = 2³ × 3²"
          ],
          explanation: [
            "72 = 8 × 9 = 2³ × 3²",
            "The prime factorization is <strong>2³ × 3²</strong>.",
            "Check: 8 × 9 = 72 ✓"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'What is the GCD of <span class="math">28</span> and <span class="math">42</span>?',
          answer: "14",
          hints: [
            "28 = 2² × 7 and 42 = 2 × 3 × 7",
            "Common primes: 2 and 7",
            "GCD = 2^min(2,1) × 7^min(1,1) = 2 × 7 = 14"
          ],
          explanation: [
            "28 = 2² × 7",
            "42 = 2 × 3 × 7",
            "GCD = 2 × 7 = <strong>14</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 2,
          question: 'What is the LCM of <span class="math">4</span> and <span class="math">6</span>?',
          answer: "12",
          hints: [
            "4 = 2² and 6 = 2 × 3",
            "LCM = 2² × 3 = 4 × 3",
            "= 12"
          ],
          explanation: [
            "4 = 2², 6 = 2 × 3",
            "LCM = 2^max(2,1) × 3^max(0,1) = 2² × 3",
            "= <strong>12</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'How many factors does <span class="math">36</span> have?',
          choices: ["6", "7", "8", "9"],
          answer: "9",
          hints: [
            "36 = 2² × 3²",
            "Factor count = (2+1)(2+1) = 3 × 3",
            "= 9 factors"
          ],
          explanation: [
            "36 = 2² × 3²",
            "Number of factors = (2+1)(2+1) = 3 × 3 = <strong>9</strong>",
            "They are: 1, 2, 3, 4, 6, 9, 12, 18, 36"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'Two buses leave a station at the same time. Bus A returns every <span class="math">10</span> minutes and Bus B returns every <span class="math">12</span> minutes. In how many minutes will they both be at the station again?',
          answer: "60",
          hints: [
            "We need the least common multiple of 10 and 12.",
            "10 = 2 × 5 and 12 = 2² × 3",
            "LCM = 2² × 3 × 5 = 60"
          ],
          explanation: [
            "We need LCM(10, 12).",
            "10 = 2 × 5, 12 = 2² × 3",
            "LCM = 2² × 3 × 5 = <strong>60</strong> minutes"
          ]
        },
        {
          type: "mc", difficulty: 2,
          question: 'Is <span class="math">123</span> divisible by 3?',
          choices: ["Yes", "No"],
          answer: "Yes",
          hints: [
            "Use the divisibility rule for 3: add the digits.",
            "1 + 2 + 3 = 6",
            "6 ÷ 3 = 2, so yes!"
          ],
          explanation: [
            "Digit sum: 1 + 2 + 3 = 6",
            "6 is divisible by 3 ✓",
            "<strong>Yes</strong>, 123 is divisible by 3 (123 = 3 × 41)."
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'What is the prime factorization of <span class="math">100</span>? Give the number of total prime factors (with repeats).',
          answer: "4",
          hints: [
            "100 = 4 × 25 = 2² × 5²",
            "With repeats: 2, 2, 5, 5",
            "That's 4 prime factors total."
          ],
          explanation: [
            "100 = 2² × 5²",
            "Counting with repeats: 2, 2, 5, 5 = <strong>4</strong> prime factors",
            "The distinct primes are just 2 and 5."
          ]
        }
      ],

      // ── Boss (10 problems, difficulty 3-4) ──
      boss: [
        {
          type: "numeric", difficulty: 3,
          question: 'What is the GCD of <span class="math">48</span> and <span class="math">180</span>?',
          answer: "12",
          hints: [
            "48 = 2⁴ × 3 and 180 = 2² × 3² × 5",
            "Take the minimum power of each common prime.",
            "GCD = 2² × 3 = 4 × 3 = 12"
          ],
          explanation: [
            "48 = 2⁴ × 3",
            "180 = 2² × 3² × 5",
            "GCD = 2^min(4,2) × 3^min(1,2) = 2² × 3 = <strong>12</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 3,
          question: 'How many factors does <span class="math">36</span> have?',
          answer: "9",
          hints: [
            "36 = 2² × 3²",
            "Number of factors = (2+1)(2+1) = 3 × 3",
            "= 9"
          ],
          explanation: [
            "36 = 2² × 3²",
            "Number of factors = (2+1)(2+1) = 3 × 3 = <strong>9</strong>",
            "They are: 1, 2, 3, 4, 6, 9, 12, 18, 36"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'What is the smallest number divisible by both <span class="math">12</span> and <span class="math">18</span>?',
          choices: ["24", "36", "72", "216"],
          answer: "36",
          hints: [
            "This asks for LCM(12, 18).",
            "12 = 2² × 3, 18 = 2 × 3²",
            "LCM = 2² × 3² = 4 × 9 = 36"
          ],
          explanation: [
            "We need LCM(12, 18).",
            "12 = 2² × 3, 18 = 2 × 3²",
            "LCM = 2² × 3² = 4 × 9 = <strong>36</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'The prime factorization of a number is <span class="math">2³ × 5²</span>. What is the number?',
          answer: "200",
          hints: [
            "Compute: 2³ = 8 and 5² = 25",
            "8 × 25 = 200",
            "The number is 200."
          ],
          explanation: [
            "2³ × 5² = 8 × 25",
            "= <strong>200</strong>",
            "Check: 200 = 8 × 25 = 2³ × 5² ✓"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'Two numbers have GCD = 6 and LCM = 60. If one number is 12, what is the other?',
          choices: ["20", "30", "15", "10"],
          answer: "30",
          hints: [
            "Key fact: GCD(a,b) × LCM(a,b) = a × b",
            "6 × 60 = 12 × b",
            "360 = 12b, so b = 30"
          ],
          explanation: [
            "GCD(a,b) × LCM(a,b) = a × b",
            "6 × 60 = 12 × b → 360 = 12b",
            "b = <strong>30</strong>"
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'How many factors does <span class="math">60</span> have?',
          answer: "12",
          hints: [
            "60 = 2² × 3 × 5",
            "Factor count = (2+1)(1+1)(1+1)",
            "= 3 × 2 × 2 = 12"
          ],
          explanation: [
            "60 = 2² × 3¹ × 5¹",
            "Number of factors = (2+1)(1+1)(1+1) = 3 × 2 × 2",
            "= <strong>12</strong>"
          ]
        },
        {
          type: "mc", difficulty: 3,
          question: 'What is the GCD of two consecutive integers, like <span class="math">14</span> and <span class="math">15</span>?',
          choices: ["1", "2", "7", "It depends"],
          answer: "1",
          hints: [
            "Consecutive integers differ by 1.",
            "Any common divisor of 14 and 15 must also divide 15 − 14 = 1.",
            "The only positive divisor of 1 is 1 itself."
          ],
          explanation: [
            "If d divides both n and n+1, then d divides (n+1) − n = 1.",
            "So d = 1.",
            "GCD of any two consecutive integers is always <strong>1</strong>."
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'What is the LCM of <span class="math">8</span>, <span class="math">12</span>, and <span class="math">15</span>?',
          answer: "120",
          hints: [
            "8 = 2³, 12 = 2² × 3, 15 = 3 × 5",
            "LCM = max power of each prime: 2³ × 3 × 5",
            "= 8 × 3 × 5 = 120"
          ],
          explanation: [
            "8 = 2³, 12 = 2² × 3, 15 = 3 × 5",
            "LCM = 2³ × 3 × 5 = 8 × 15",
            "= <strong>120</strong>"
          ]
        },
        {
          type: "mc", difficulty: 4,
          question: 'How many prime numbers are there between 20 and 30?',
          choices: ["1", "2", "3", "4"],
          answer: "2",
          hints: [
            "Check each: 21 = 3×7, 22 = 2×11, 23 = ?, 24 = 2³×3, 25 = 5², 26 = 2×13, 27 = 3³, 28 = 2²×7, 29 = ?",
            "23 is prime (not divisible by 2 or 3, and √23 < 5).",
            "29 is prime (not divisible by 2, 3, or 5, and √29 < 6)."
          ],
          explanation: [
            "Numbers 21-29: 21 = 3×7, 22 = 2×11, 24 = 2³×3, 25 = 5², 26 = 2×13, 27 = 3³, 28 = 2²×7",
            "Primes: 23 and 29",
            "That's <strong>2</strong> primes between 20 and 30."
          ]
        },
        {
          type: "numeric", difficulty: 4,
          question: 'If <span class="math">GCD(a, b) = 1</span>, what is <span class="math">LCM(a, b)</span> when <span class="math">a = 8</span> and <span class="math">b = 9</span>?',
          answer: "72",
          hints: [
            "When GCD(a, b) = 1, the numbers are coprime (share no common factors).",
            "For coprime numbers: LCM(a, b) = a × b",
            "LCM(8, 9) = 8 × 9 = 72"
          ],
          explanation: [
            "GCD(8, 9) = 1 since 8 = 2³ and 9 = 3² share no prime factors.",
            "When GCD = 1: LCM = a × b = 8 × 9",
            "= <strong>72</strong>"
          ]
        }
      ]
    }
  },

  // ============================================================
  // WORLDS 3-14 — Placeholder stubs (future chapters)
  // ============================================================
  { id: 3, name: "Fraction Falls", icon: "💧", chapter: "Fractions", color: "#3498db", bossName: "Fractix", bossDesc: "A water elemental that splits into ever-smaller pieces", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 4, name: "Equation Castle", icon: "🏰", chapter: "Equations & Inequalities", color: "#9b59b6", bossName: "Equalis", bossDesc: "A balance golem that keeps tipping to one side", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 5, name: "Decimal Desert", icon: "🏜️", chapter: "Decimals", color: "#f39c12", bossName: "Decimus", bossDesc: "A sand serpent made of shifting decimal points", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 6, name: "Ratio Rapids", icon: "🌊", chapter: "Ratios & Rates", color: "#00bcd4", bossName: "Ratiox", bossDesc: "Twin river spirits that must stay in perfect proportion", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 7, name: "Percent Palace", icon: "🏛️", chapter: "Percents", color: "#e91e63", bossName: "Percenta", bossDesc: "A crystalline queen who drains exactly her percentage", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 8, name: "Root Caverns", icon: "⛏️", chapter: "Square Roots", color: "#8d6e63", bossName: "Radikus", bossDesc: "A burrowing mole that digs perfect square tunnels", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 9, name: "Angle Academy", icon: "📐", chapter: "Angles", color: "#e74c3c", bossName: "Angulor", bossDesc: "A protractor phantom that fires rays at every angle", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 10, name: "Perimeter Plains", icon: "🌾", chapter: "Perimeter & Area", color: "#8bc34a", bossName: "Perimetus", bossDesc: "A shape-shifting fence that encloses the battlefield", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 11, name: "Triangle Towers", icon: "🔺", chapter: "Right Triangles & Quads", color: "#3f51b5", bossName: "Pythagos", bossDesc: "A three-headed guardian who attacks in right angles", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 12, name: "Data Dungeon", icon: "📊", chapter: "Data & Statistics", color: "#607d8b", bossName: "Datavox", bossDesc: "A histogram horror that reshapes with each data point", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 13, name: "Counting Cosmos", icon: "🌌", chapter: "Counting & Probability", color: "#7c4dff", bossName: "Combinus", bossDesc: "A cosmic entity that exists in all permutations at once", pool: { tutorial: [], challenge: [], boss: [] } },
  { id: 14, name: "Strategy Summit", icon: "⛰️", chapter: "Problem-Solving", color: "#ffd700", bossName: "The Void Lord", bossDesc: "The final boss who combines all mathematical knowledge", pool: { tutorial: [], challenge: [], boss: [] } }
];

// Player level titles
const LEVEL_TITLES = [
  { level: 1, xp: 0, title: "Math Apprentice" },
  { level: 2, xp: 200, title: "Number Novice" },
  { level: 3, xp: 500, title: "Equation Student" },
  { level: 4, xp: 1000, title: "Problem Solver" },
  { level: 5, xp: 1800, title: "Shrine Seeker" },
  { level: 6, xp: 2800, title: "Math Warrior" },
  { level: 7, xp: 4000, title: "Knowledge Knight" },
  { level: 8, xp: 5500, title: "Rune Master" },
  { level: 9, xp: 7500, title: "Number Sage" },
  { level: 10, xp: 10000, title: "Crystal Guardian" }
];
