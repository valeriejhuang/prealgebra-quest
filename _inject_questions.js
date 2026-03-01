#!/usr/bin/env node
// Script to inject 3 new questions per topic into extra-q-ch1-3.js
const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, 'extra-q-ch1-3.js');
let src = fs.readFileSync(FILE, 'utf8');
const lines = src.split('\n');

// Closing-bracket line numbers (1-indexed) for each topic array
const closingLines = [
  // World 0 (12 topics, T0-T11)
  47, 86, 125, 164, 203, 242, 281, 320, 359, 398, 437, 476,
  // World 1 (11 topics, T0-T10)
  522, 561, 600, 639, 678, 717, 756, 795, 834, 873, 912,
  // World 2 (10 topics, T0-T9)
  958, 997, 1036, 1075, 1114, 1153, 1192, 1231, 1270, 1309
];

// Build new questions for each topic
// Format: array of 3 question strings per topic
const newQuestions = [];

// ======== WORLD 0 ========

// W0-T0: Addition & Subtraction (diff 1-2)
newQuestions.push([
  `    { type: 'numeric', difficulty: 1, question: 'What is <span class="math">89 + 47</span>?', answer: '136', hints: ['Add the ones: 9 + 7 = 16, carry 1.', 'Add the tens: 8 + 4 + 1 = 13.', 'So 89 + 47 = 136.'], explanation: ['9 + 7 = 16, write 6 carry 1.', '8 + 4 + 1 = 13.', '89 + 47 = 136.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'What is <span class="math">903 - 567</span>?', choices: ['326', '336', '346', '356'], answer: '336', hints: ['Borrow for the ones: 13 − 7 = 6.', 'Tens: 9 − 6 = 3 (after borrow).', 'Hundreds: 8 − 5 = 3. Answer: 336.'], explanation: ['903 − 567: borrow step by step.', '13 − 7 = 6, 9 − 6 = 3, 8 − 5 = 3.', '903 − 567 = 336.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">578 + 347</span>?', answer: '925', hints: ['Add ones: 8 + 7 = 15, carry 1.', 'Add tens: 7 + 4 + 1 = 12, carry 1.', 'Add hundreds: 5 + 3 + 1 = 9.'], explanation: ['8 + 7 = 15, write 5 carry 1.', '7 + 4 + 1 = 12, write 2 carry 1.', '5 + 3 + 1 = 9. Answer: 925.'] },`
]);

// W0-T1: Multiplication & Division (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'What is <span class="math">9 \\\\times 7</span>?', choices: ['54', '56', '63', '72'], answer: '63', hints: ['Think of 9 groups of 7.', 'Or 10 × 7 = 70, minus one 7.', '70 − 7 = 63.'], explanation: ['9 × 7 = 63.', 'This is a basic multiplication fact.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">264 \\\\div 12</span>?', answer: '22', hints: ['12 × 20 = 240, so more than 20.', '264 − 240 = 24. Now 24 ÷ 12 = 2.', '20 + 2 = 22.'], explanation: ['12 × 22 = 12 × 20 + 12 × 2.', '= 240 + 24 = 264.', 'So 264 ÷ 12 = 22.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">22 \\\\times 9</span>?', answer: '198', hints: ['Break 22 into 20 + 2.', '20 × 9 = 180 and 2 × 9 = 18.', '180 + 18 = 198.'], explanation: ['22 × 9 = (20 + 2) × 9.', '= 180 + 18 = 198.'] },`
]);

// W0-T2: Commutative & Associative (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'Which property says <span class="math">16 + 5 = 5 + 16</span>?', choices: ['Commutative Property of Addition', 'Associative Property of Addition', 'Distributive Property', 'Identity Property'], answer: 'Commutative Property of Addition', hints: ['The order of the numbers changed.', 'Commutative means you can swap the order.', 'The grouping did not change—just the order.'], explanation: ['The numbers switched places: 16 + 5 became 5 + 16.', 'Swapping order is the Commutative Property.', 'So the answer is the Commutative Property of Addition.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'Use the associative property: <span class="math">(72 + 28) + 65</span> = ?', answer: '165', hints: ['First add inside the parentheses: 72 + 28 = 100.', 'Then 100 + 65 = 165.', 'The associative property lets you regroup for easier addition.'], explanation: ['(72 + 28) + 65 = 100 + 65 = 165.', 'Regrouping made the addition simpler.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'Which property is shown by <span class="math">17 \\\\times 3 = 3 \\\\times 17</span>?', choices: ['Commutative Property of Multiplication', 'Associative Property of Multiplication', 'Distributive Property', 'Identity Property'], answer: 'Commutative Property of Multiplication', hints: ['The two factors swapped positions.', 'That is the commutative property.', 'The order changed, not the grouping.'], explanation: ['17 × 3 = 3 × 17 — the factors swapped.', 'This is the Commutative Property of Multiplication.'] },`
]);

// W0-T3: Distributive Property (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'Which expression equals <span class="math">6 \\\\times (3 + 8)</span>?', choices: ['6 × 3 + 6 × 8', '6 × 3 + 8', '6 + 3 × 8', '6 × 3 × 8'], answer: '6 × 3 + 6 × 8', hints: ['Distribute the 6 to each term inside the parentheses.', '6 × 3 and 6 × 8.', 'Then add the two products.'], explanation: ['6 × (3 + 8) = 6 × 3 + 6 × 8.', '= 18 + 48 = 66.', 'Verify: 6 × 11 = 66. ✓'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'Use the distributive property to compute <span class="math">7 \\\\times (60 + 4)</span>.', answer: '448', hints: ['Distribute: 7 × 60 + 7 × 4.', '7 × 60 = 420.', '7 × 4 = 28, so 420 + 28 = 448.'], explanation: ['7 × (60 + 4) = 7 × 60 + 7 × 4.', '= 420 + 28 = 448.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'Use the distributive property: <span class="math">8 \\\\times (50 - 6)</span> = ?', answer: '352', hints: ['Distribute: 8 × 50 − 8 × 6.', '8 × 50 = 400.', '8 × 6 = 48, so 400 − 48 = 352.'], explanation: ['8 × (50 − 6) = 8 × 50 − 8 × 6.', '= 400 − 48 = 352.'] },`
]);

// W0-T4: Identity & Zero Properties (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'What is <span class="math">0 \\\\times 8765</span>?', choices: ['8765', '0', '1', '876'], answer: '0', hints: ['Any number times zero is zero.', 'This is the zero property of multiplication.', 'a × 0 = 0.'], explanation: ['0 × 8765 = 0.', 'The zero property says any number times 0 equals 0.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'If <span class="math">m + 0 = 54</span> and <span class="math">m \\\\times 1 = r</span>, what is <span class="math">r</span>?', answer: '54', hints: ['From m + 0 = 54, we know m = 54.', 'Then m × 1 = 54 × 1 = 54.', 'So r = 54.'], explanation: ['m + 0 = 54 means m = 54 (identity property of addition).', 'm × 1 = 54 × 1 = 54 (identity property of multiplication).', 'r = 54.'] },`,
  `    { type: 'mc', difficulty: 1, question: 'What is <span class="math">1 \\\\times 723</span>?', choices: ['0', '1', '723', '724'], answer: '723', hints: ['Multiplying any number by 1 gives the same number.', 'This is the identity property of multiplication.', 'a × 1 = a.'], explanation: ['1 × 723 = 723.', 'One is the multiplicative identity.'] },`
]);

// W0-T5: Mental Addition Strategies (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'Compute mentally: <span class="math">699 + 235</span>.', answer: '934', hints: ['Round 699 up to 700: 700 + 235 = 935.', 'You added 1 extra, so subtract 1.', '935 − 1 = 934.'], explanation: ['699 + 235 = (700 + 235) − 1 = 935 − 1 = 934.', 'Rounding to a nearby hundred makes it easier.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'What is <span class="math">594 + 278</span> using mental math?', choices: ['862', '872', '882', '852'], answer: '872', hints: ['Round 594 up to 600: add 6.', '600 + 278 = 878.', 'Subtract the 6: 878 − 6 = 872.'], explanation: ['594 + 278 = (600 − 6) + 278.', '= 878 − 6 = 872.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'Compute mentally: <span class="math">995 + 468</span>.', answer: '1463', hints: ['995 is close to 1000.', '1000 + 468 = 1468.', 'Subtract 5: 1468 − 5 = 1463.'], explanation: ['995 + 468 = (1000 − 5) + 468.', '= 1468 − 5 = 1463.'] },`
]);

// W0-T6: Associative Regrouping (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'Use regrouping: <span class="math">5 \\\\times 46</span>. (Hint: 46 = 2 × 23)', answer: '230', hints: ['Rewrite 46 as 2 × 23.', '5 × 2 = 10.', '10 × 23 = 230.'], explanation: ['5 × 46 = 5 × (2 × 23).', '= (5 × 2) × 23 = 10 × 23 = 230.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'What is <span class="math">25 \\\\times 56</span> using regrouping? (Hint: 56 = 4 × 14)', choices: ['1200', '1300', '1400', '1500'], answer: '1400', hints: ['Rewrite 56 as 4 × 14.', '25 × 4 = 100.', '100 × 14 = 1400.'], explanation: ['25 × 56 = 25 × (4 × 14).', '= (25 × 4) × 14 = 100 × 14 = 1400.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'Use regrouping: <span class="math">125 \\\\times 96</span>. (Hint: 96 = 8 × 12)', answer: '12000', hints: ['Rewrite 96 as 8 × 12.', '125 × 8 = 1000.', '1000 × 12 = 12000.'], explanation: ['125 × 96 = 125 × (8 × 12).', '= (125 × 8) × 12 = 1000 × 12 = 12000.'] },`
]);

// W0-T7: Distributive Expansion (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'Expand using the distributive property: <span class="math">8 \\\\times 43</span>.', answer: '344', hints: ['Write 43 as 40 + 3.', '8 × 40 = 320 and 8 × 3 = 24.', '320 + 24 = 344.'], explanation: ['8 × 43 = 8 × (40 + 3) = 320 + 24 = 344.', 'Breaking 43 into 40 + 3 makes it easier.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'What is <span class="math">13 \\\\times 99</span> using mental math?', choices: ['1277', '1287', '1297', '1307'], answer: '1287', hints: ['99 is close to 100.', '13 × 100 = 1300.', 'Subtract 13: 1300 − 13 = 1287.'], explanation: ['13 × 99 = 13 × (100 − 1).', '= 1300 − 13 = 1287.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'Compute <span class="math">27 \\\\times 15</span> using the distributive property. (Break 15 into 10 + 5)', answer: '405', hints: ['27 × 15 = 27 × (10 + 5).', '27 × 10 = 270.', '27 × 5 = 135. Add: 270 + 135 = 405.'], explanation: ['27 × 15 = 27 × 10 + 27 × 5.', '= 270 + 135 = 405.'] },`
]);

// W0-T8: Distributive Factoring (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'Compute <span class="math">88 \\\\times 6 + 12 \\\\times 6</span> using the distributive property.', answer: '600', hints: ['Both terms have a factor of 6.', 'Factor: (88 + 12) × 6.', '88 + 12 = 100, so 100 × 6 = 600.'], explanation: ['88 × 6 + 12 × 6 = (88 + 12) × 6.', '= 100 × 6 = 600.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'Which factored form equals <span class="math">57 \\\\times 9 + 43 \\\\times 9</span>?', choices: ['(57 + 43) × 9', '57 × (9 + 43)', '9 × 57 × 43', '(57 × 43) + 9'], answer: '(57 + 43) × 9', hints: ['Both terms share a common factor of 9.', 'Factor it out: (57 + 43) × 9.', '57 + 43 = 100, so the answer is 900.'], explanation: ['57 × 9 + 43 × 9 = (57 + 43) × 9.', '= 100 × 9 = 900.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'Factor and compute: <span class="math">8 \\\\times 19 + 8 \\\\times 6</span>.', answer: '200', hints: ['Both terms share the factor 8.', 'Factor out: 8 × (19 + 6) = 8 × 25.', '8 × 25 = 200.'], explanation: ['8 × 19 + 8 × 6 = 8 × (19 + 6) = 8 × 25 = 200.', 'Factoring makes the computation much simpler.'] },`
]);

// W0-T9: Arithmetic Word Problems (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'A class has 28 students. Each student needs 4 pencils. If pencils come in packs of 8, how many packs are needed?', choices: ['12', '14', '16', '18'], answer: '14', hints: ['Total pencils: 28 × 4 = 112.', 'Packs needed: 112 ÷ 8.', '112 ÷ 8 = 14.'], explanation: ['Total pencils: 28 × 4 = 112.', 'Packs: 112 ÷ 8 = 14 packs.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'A farmer has 15 rows with 18 plants each. He removes 27 damaged plants. How many healthy plants remain?', answer: '243', hints: ['Total plants: 15 × 18 = 270.', 'After removing damaged: 270 − 27.', '270 − 27 = 243.'], explanation: ['Total: 15 × 18 = 270 plants.', 'Remaining: 270 − 27 = 243 healthy plants.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'A theater has 18 rows with 22 seats each. If tickets cost $9, how much revenue when all seats are sold?', answer: '3564', hints: ['Total seats: 18 × 22 = 396.', 'Revenue: 396 × $9.', '396 × 9 = 3564.'], explanation: ['Seats: 18 × 22 = 396.', 'Revenue: 396 × 9 = $3,564.'] },`
]);

// W0-T10: PEMDAS (diff 3-4)
newQuestions.push([
  `    { type: 'numeric', difficulty: 3, question: 'Evaluate: <span class="math">11 - 3 \\\\times 2 + 7</span>.', answer: '12', hints: ['Multiply first: 3 × 2 = 6.', 'Then left to right: 11 − 6 + 7.', '= 5 + 7 = 12.'], explanation: ['3 × 2 = 6.', '11 − 6 = 5.', '5 + 7 = 12.'] },`,
  `    { type: 'mc', difficulty: 4, question: 'Evaluate: <span class="math">3^2 + 4 \\\\times (5 - 2)</span>.', choices: ['21', '19', '27', '33'], answer: '21', hints: ['Parentheses: 5 − 2 = 3.', 'Exponents: 3² = 9.', 'Multiply then add: 9 + 4 × 3 = 9 + 12 = 21.'], explanation: ['(5 − 2) = 3.', '3² = 9, 4 × 3 = 12.', '9 + 12 = 21.'] },`,
  `    { type: 'numeric', difficulty: 4, question: 'Evaluate: <span class="math">64 \\\\div (2 + 6) + 3^2</span>.', answer: '17', hints: ['Parentheses: 2 + 6 = 8.', 'Division: 64 ÷ 8 = 8. Exponents: 3² = 9.', 'Addition: 8 + 9 = 17.'], explanation: ['(2 + 6) = 8.', '64 ÷ 8 = 8 and 3² = 9.', '8 + 9 = 17.'] },`
]);

// W0-T11: Negative Numbers & Absolute Value (diff 3-4)
newQuestions.push([
  `    { type: 'mc', difficulty: 3, question: 'What is <span class="math">(-7) + 15</span>?', choices: ['8', '-8', '22', '-22'], answer: '8', hints: ['Start at −7 on the number line.', 'Move 15 to the right.', '−7 + 15 = 8.'], explanation: ['−7 + 15 = 15 − 7 = 8.', 'The positive number is larger, so the result is positive.'] },`,
  `    { type: 'numeric', difficulty: 4, question: 'Compute: <span class="math">(-6) \\\\times (-9)</span>.', answer: '54', hints: ['A negative times a negative is positive.', '6 × 9 = 54.', 'So (−6) × (−9) = 54.'], explanation: ['Negative × negative = positive.', '(−6) × (−9) = 54.'] },`,
  `    { type: 'numeric', difficulty: 4, question: 'Compute: <span class="math">|-19| - |7|</span>.', answer: '12', hints: ['|−19| = 19.', '|7| = 7.', '19 − 7 = 12.'], explanation: ['|−19| = 19 and |7| = 7.', '19 − 7 = 12.'] },`
]);

// ======== WORLD 1 ========

// W1-T0: Evaluating Powers (diff 1-2)
newQuestions.push([
  `    { type: 'numeric', difficulty: 1, question: 'What is <span class="math">12^2</span>?', answer: '144', hints: ['12² means 12 × 12.', '12 × 10 = 120, 12 × 2 = 24.', '120 + 24 = 144.'], explanation: ['12² = 12 × 12 = 144.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'What is <span class="math">7^3</span>?', choices: ['243', '343', '512', '49'], answer: '343', hints: ['7³ = 7 × 7 × 7.', '7 × 7 = 49.', '49 × 7 = 343.'], explanation: ['7³ = 7 × 7 × 7 = 343.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">2^{11}</span>?', answer: '2048', hints: ['2^{11} = 2^{10} × 2.', '2^{10} = 1024.', '1024 × 2 = 2048.'], explanation: ['2^{11} = 2^{10} × 2 = 1024 × 2 = 2048.'] },`
]);

// W1-T1: Perfect Squares (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'Which of these is a perfect square?', choices: ['150', '169', '175', '180'], answer: '169', hints: ['A perfect square is n² for some whole number.', '13 × 13 = 169.', '169 is a perfect square.'], explanation: ['169 = 13².', 'It is the only perfect square among the choices.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What whole number squared equals 529?', answer: '23', hints: ['Try 22² = 484. Too small.', 'Try 23² = 529. That is it!', 'The answer is 23.'], explanation: ['23² = 23 × 23 = 529.', 'So the whole number is 23.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">21^2</span>?', answer: '441', hints: ['21 × 21.', '21 × 20 = 420, 21 × 1 = 21.', '420 + 21 = 441.'], explanation: ['21² = 21 × 21 = 441.'] },`
]);

// W1-T2: Powers of 10 (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'What is <span class="math">10^4</span>?', choices: ['1000', '10000', '100000', '40'], answer: '10000', hints: ['10^4 = 10 × 10 × 10 × 10.', 'Write a 1 followed by 4 zeros.', '10,000.'], explanation: ['10^4 = 10,000.', 'The exponent tells you how many zeros after the 1.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">4 \\\\times 10^4</span>?', answer: '40000', hints: ['10^4 = 10,000.', '4 × 10,000 = 40,000.', 'Put the 4 in front of four zeros.'], explanation: ['10^4 = 10,000.', '4 × 10,000 = 40,000.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">10^4 - 10^3</span>?', answer: '9000', hints: ['10^4 = 10,000.', '10^3 = 1,000.', '10,000 − 1,000 = 9,000.'], explanation: ['10^4 = 10,000 and 10^3 = 1,000.', '10,000 − 1,000 = 9,000.'] },`
]);

// W1-T3: Zero & First Power (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'What is <span class="math">83^0</span>?', choices: ['83', '0', '1', '830'], answer: '1', hints: ['Any non-zero number to the 0 power is 1.', 'It doesn\\\\' + 't matter what the base is.', '83^0 = 1.'], explanation: ['a^0 = 1 for any non-zero a.', '83^0 = 1.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'Evaluate: <span class="math">14^0 + 14^1</span>.', answer: '15', hints: ['14^0 = 1 (zero exponent rule).', '14^1 = 14 (first power rule).', '1 + 14 = 15.'], explanation: ['14^0 = 1 and 14^1 = 14.', '1 + 14 = 15.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'What is <span class="math">1^{750}</span>?', choices: ['750', '0', '1', '75'], answer: '1', hints: ['1 raised to any power is 1.', '1 × 1 × 1 × ... = 1.', '1^{750} = 1.'], explanation: ['1^n = 1 for any n.', '1^{750} = 1.'] },`
]);

// W1-T4: Exponent Terminology (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'In <span class="math">16^5</span>, what is the base?', choices: ['5', '16', '80', '1048576'], answer: '16', hints: ['The base is the big number being multiplied.', 'In a^n, the base is a.', 'In 16^5, the base is 16.'], explanation: ['In 16^5, the base is 16 and the exponent is 5.', 'The base is the number that gets multiplied repeatedly.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'In the expression <span class="math">7^6</span>, how many times is 7 used as a factor?', answer: '6', hints: ['The exponent tells the count.', '7^6 = 7 × 7 × 7 × 7 × 7 × 7.', '7 appears 6 times as a factor.'], explanation: ['The exponent 6 means 7 is used as a factor 6 times.', '7^6 = 7 × 7 × 7 × 7 × 7 × 7.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'What does "to the seventh power" mean?', choices: ['Multiplied by 7', 'Used as a factor 7 times', 'Added 7 times', 'Divided by 7'], answer: 'Used as a factor 7 times', hints: ['"To the seventh power" means the exponent is 7.', 'For example, n^7 = n × n × n × n × n × n × n.', 'The base appears 7 times as a factor.'], explanation: ['"To the seventh power" means the base is used as a factor 7 times.', 'For example, 2^7 = 2 × 2 × 2 × 2 × 2 × 2 × 2 = 128.'] },`
]);

// W1-T5: Product Rule (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'Simplify: <span class="math">4^3 \\\\times 4^5</span>.', choices: ['4^8', '4^{15}', '16^8', '4^2'], answer: '4^8', hints: ['When multiplying same bases, add the exponents.', 'a^m × a^n = a^{m+n}.', '4^3 × 4^5 = 4^{3+5} = 4^8.'], explanation: ['Product rule: a^m × a^n = a^{m+n}.', '4^3 × 4^5 = 4^{3+5} = 4^8.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'If <span class="math">6^a \\\\times 6^4 = 6^{11}</span>, what is <span class="math">a</span>?', answer: '7', hints: ['a + 4 = 11.', 'Subtract 4 from both sides.', 'a = 7.'], explanation: ['By the product rule: 6^a × 6^4 = 6^{a+4}.', 'a + 4 = 11, so a = 7.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'If <span class="math">3^2 \\\\times 3^4 = 3^n</span>, what is <span class="math">n</span>?', answer: '6', hints: ['Add the exponents: 2 + 4.', '3^2 × 3^4 = 3^{2+4}.', 'n = 6.'], explanation: ['Product rule: 3^2 × 3^4 = 3^{2+4} = 3^6.', 'So n = 6.'] },`
]);

// W1-T6: Quotient Rule (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'Simplify: <span class="math">\\\\frac{5^9}{5^4}</span>.', choices: ['5^5', '5^{36}', '5^{13}', '1^5'], answer: '5^5', hints: ['When dividing same bases, subtract exponents.', 'a^m ÷ a^n = a^{m−n}.', '5^9 ÷ 5^4 = 5^{9−4} = 5^5.'], explanation: ['Quotient rule: a^m ÷ a^n = a^{m−n}.', '5^9 ÷ 5^4 = 5^5.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'If <span class="math">\\\\frac{8^{10}}{8^a} = 8^3</span>, what is <span class="math">a</span>?', answer: '7', hints: ['10 − a = 3.', 'Subtract: a = 10 − 3.', 'a = 7.'], explanation: ['By the quotient rule: 8^{10} ÷ 8^a = 8^{10−a}.', '10 − a = 3, so a = 7.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'If <span class="math">\\\\frac{7^8}{7^5} = 7^n</span>, what is <span class="math">n</span>?', answer: '3', hints: ['Subtract the exponents: 8 − 5.', '7^8 ÷ 7^5 = 7^{8−5}.', 'n = 3.'], explanation: ['Quotient rule: 7^8 ÷ 7^5 = 7^{8−5} = 7^3.', 'So n = 3.'] },`
]);

// W1-T7: Power of a Power (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'Simplify: <span class="math">(4^3)^2</span>.', choices: ['4^5', '4^6', '4^9', '4^{32}'], answer: '4^6', hints: ['Power of a power: multiply exponents.', '(a^m)^n = a^{m×n}.', '(4^3)^2 = 4^{3×2} = 4^6.'], explanation: ['Power of a power rule: (a^m)^n = a^{m×n}.', '(4^3)^2 = 4^{3×2} = 4^6.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'If <span class="math">(5^a)^3 = 5^{12}</span>, what is <span class="math">a</span>?', answer: '4', hints: ['a × 3 = 12.', 'Divide both sides by 3.', 'a = 4.'], explanation: ['By the power of a power rule: (5^a)^3 = 5^{3a}.', '3a = 12, so a = 4.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'If <span class="math">(2^4)^3 = 2^n</span>, what is <span class="math">n</span>?', answer: '12', hints: ['Power of a power: multiply exponents.', '(2^4)^3 = 2^{4×3}.', 'n = 12.'], explanation: ['(2^4)^3 = 2^{4×3} = 2^{12}.', 'So n = 12.'] },`
]);

// W1-T8: Evaluating & Comparing (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'Which is greater: <span class="math">3^4</span> or <span class="math">4^3</span>?', choices: ['3^4', '4^3', 'They are equal'], answer: '3^4', hints: ['3^4 = 81.', '4^3 = 64.', '81 > 64, so 3^4 is greater.'], explanation: ['3^4 = 81 and 4^3 = 64.', '81 > 64, so 3^4 is greater.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'What is <span class="math">2^5 + 3^3</span>?', answer: '59', hints: ['2^5 = 32.', '3^3 = 27.', '32 + 27 = 59.'], explanation: ['2^5 = 32 and 3^3 = 27.', '32 + 27 = 59.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'What is <span class="math">5^3 - 4^3</span>?', answer: '61', hints: ['5^3 = 125.', '4^3 = 64.', '125 − 64 = 61.'], explanation: ['5^3 = 125 and 4^3 = 64.', '125 − 64 = 61.'] },`
]);

// W1-T9: Finding Exponents (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'What exponent makes <span class="math">3^n = 243</span>?', choices: ['3', '4', '5', '6'], answer: '5', hints: ['Try powers of 3: 3^4 = 81, 3^5 = 243.', '3 × 3 × 3 × 3 × 3 = 243.', 'n = 5.'], explanation: ['3^5 = 243.', 'So n = 5.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'What exponent makes <span class="math">4^n = 256</span>?', answer: '4', hints: ['Try powers of 4: 4^3 = 64, 4^4 = 256.', '4 × 4 × 4 × 4 = 256.', 'n = 4.'], explanation: ['4^4 = 256.', 'So n = 4.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What exponent makes <span class="math">2^n = 64</span>?', answer: '6', hints: ['Try powers of 2: 2^5 = 32, 2^6 = 64.', '2 × 2 × 2 × 2 × 2 × 2 = 64.', 'n = 6.'], explanation: ['2^6 = 64.', 'So n = 6.'] },`
]);

// W1-T10: Perfect Cubes (diff 3-4)
newQuestions.push([
  `    { type: 'mc', difficulty: 3, question: 'Which of these is a perfect cube?', choices: ['100', '125', '150', '175'], answer: '125', hints: ['A perfect cube is n³ for some whole number.', '5 × 5 × 5 = 125.', '125 is a perfect cube.'], explanation: ['125 = 5³.', 'None of the other choices are perfect cubes.'] },`,
  `    { type: 'numeric', difficulty: 4, question: 'What whole number cubed equals 3375?', answer: '15', hints: ['Try cubing: 14³ = 2744, 15³ = 3375.', '15 × 15 = 225, 225 × 15 = 3375.', 'The answer is 15.'], explanation: ['15³ = 15 × 15 × 15 = 3375.', 'So the number is 15.'] },`,
  `    { type: 'numeric', difficulty: 4, question: 'What is the difference between <span class="math">9^3</span> and <span class="math">7^3</span>?', answer: '386', hints: ['9³ = 729.', '7³ = 343.', '729 − 343 = 386.'], explanation: ['9³ = 729 and 7³ = 343.', '729 − 343 = 386.'] },`
]);

// ======== WORLD 2 ========

// W2-T0: Prime Numbers (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'Which of these is prime?', choices: ['51', '53', '55', '57'], answer: '53', hints: ['51 = 3×17, 55 = 5×11, 57 = 3×19.', 'Check 53: not divisible by 2, 3, 5, or 7.', '53 is prime.'], explanation: ['53 is only divisible by 1 and 53.', '51, 55, and 57 are all composite.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is the smallest prime number greater than 80?', answer: '83', hints: ['Check 81: 81 = 9 × 9, not prime.', 'Check 82: even, not prime.', 'Check 83: not divisible by 2, 3, 5, or 7. 83 is prime.'], explanation: ['81 and 82 are not prime.', '83 is only divisible by 1 and 83.', '83 is the smallest prime greater than 80.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'Is 107 a prime number?', choices: ['Yes', 'No'], answer: 'Yes', hints: ['Check: √107 < 11, so test primes 2, 3, 5, 7.', '107 is odd, not divisible by 3 (1+0+7=8), not by 5 or 7.', '107 is prime.'], explanation: ['107 is not divisible by 2, 3, 5, or 7.', 'Since √107 < 11, we only need to check primes up to 10.', '107 is prime.'] },`
]);

// W2-T1: Identifying Composites (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'Is 36 composite?', choices: ['Yes', 'No'], answer: 'Yes', hints: ['A composite number has more than 2 factors.', '36 = 6 × 6 = 2 × 2 × 3 × 3.', 'It has factors 1, 2, 3, 4, 6, 9, 12, 18, 36 — composite.'], explanation: ['36 = 2² × 3².', 'Since it has more than 2 factors, 36 is composite.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is the smallest composite number greater than 60?', answer: '62', hints: ['Check 61: 61 is prime.', 'Check 62: 62 = 2 × 31.', 'So 62 is the first composite after 60.'], explanation: ['61 is prime.', '62 = 2 × 31 has more than 2 factors.', '62 is the smallest composite number greater than 60.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'Which of these is composite?', choices: ['83', '85', '89', '97'], answer: '85', hints: ['Check 85: it ends in 5, so divisible by 5.', '85 = 5 × 17.', '85 is composite.'], explanation: ['85 = 5 × 17.', '83, 89, and 97 are all prime.', '85 is the composite number.'] },`
]);

// W2-T2: Divisibility Rules (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'Is 738 divisible by 2?', choices: ['Yes', 'No'], answer: 'Yes', hints: ['A number is divisible by 2 if it ends in an even digit.', '738 ends in 8, which is even.', 'So yes, 738 is divisible by 2.'], explanation: ['738 ends in 8 (even).', 'So 738 is divisible by 2.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'Is 783 divisible by 9? Enter 1 for Yes or 0 for No.', answer: '1', hints: ['Add the digits: 7 + 8 + 3 = 18.', 'Is 18 divisible by 9? Yes (18 ÷ 9 = 2).', 'So 783 is divisible by 9.'], explanation: ['Digit sum: 7 + 8 + 3 = 18.', '18 ÷ 9 = 2, so 783 is divisible by 9. Answer: 1 (Yes).'] },`,
  `    { type: 'mc', difficulty: 2, question: 'Which number is divisible by both 3 and 4?', choices: ['30', '32', '36', '38'], answer: '36', hints: ['Divisible by 4: last two digits ÷ 4. 36 ÷ 4 = 9 ✓.', 'Divisible by 3: 3+6=9, divisible by 3 ✓.', '36 is divisible by both.'], explanation: ['36 ÷ 4 = 9 ✓, and 3+6=9 divisible by 3 ✓.', '36 is divisible by both 3 and 4.'] },`
]);

// W2-T3: Prime Factorization (diff 1-2)
newQuestions.push([
  `    { type: 'mc', difficulty: 1, question: 'What is the prime factorization of 40?', choices: ['2 × 2 × 2 × 5', '4 × 10', '5 × 8', '2 × 20'], answer: '2 × 2 × 2 × 5', hints: ['Break 40 down: 40 = 2 × 20.', '20 = 2 × 10 = 2 × 2 × 5.', 'So 40 = 2³ × 5.'], explanation: ['40 = 2 × 2 × 2 × 5.', '= 2³ × 5. All factors are prime.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is the largest prime factor of 126?', answer: '7', hints: ['126 = 2 × 63.', '63 = 9 × 7 = 3 × 3 × 7.', 'So 126 = 2 × 3² × 7. The largest is 7.'], explanation: ['126 = 2 × 3² × 7.', 'The largest prime factor is 7.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'What is the prime factorization of 66?', choices: ['2 × 3 × 11', '2 × 33', '6 × 11', '3 × 22'], answer: '2 × 3 × 11', hints: ['66 = 2 × 33.', '33 = 3 × 11.', 'So 66 = 2 × 3 × 11.'], explanation: ['66 = 2 × 33 = 2 × 3 × 11.', 'All factors (2, 3, 11) are prime.'] },`
]);

// W2-T4: Factors & Multiples (diff 1-2)
newQuestions.push([
  `    { type: 'numeric', difficulty: 1, question: 'How many factors does 14 have?', answer: '4', hints: ['List all divisors of 14.', '1, 2, 7, 14.', 'That is 4 factors.'], explanation: ['Factors of 14: 1, 2, 7, 14.', 'There are 4 factors.'] },`,
  `    { type: 'mc', difficulty: 2, question: 'Which is NOT a factor of 42?', choices: ['6', '7', '8', '14'], answer: '8', hints: ['Check each: 42÷6=7 ✓, 42÷7=6 ✓, 42÷14=3 ✓.', '42÷8 = 5.25, not a whole number.', '8 is not a factor of 42.'], explanation: ['42 ÷ 8 = 5.25, which is not a whole number.', 'So 8 is not a factor of 42.'] },`,
  `    { type: 'numeric', difficulty: 2, question: 'What is the 11th multiple of 6?', answer: '66', hints: ['Multiples of 6: 6, 12, 18, ...', 'The 11th one is 6 × 11.', '6 × 11 = 66.'], explanation: ['The nth multiple of 6 is 6n.', '11th multiple: 6 × 11 = 66.'] },`
]);

// W2-T5: Greatest Common Divisor (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">\\\\gcd(30, 42)</span>?', answer: '6', hints: ['30 = 2 × 3 × 5 and 42 = 2 × 3 × 7.', 'Common primes: 2 and 3.', 'GCD = 2 × 3 = 6.'], explanation: ['30 = 2 × 3 × 5 and 42 = 2 × 3 × 7.', 'GCD = 2 × 3 = 6.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'What is <span class="math">\\\\gcd(48, 72)</span>?', choices: ['8', '12', '24', '36'], answer: '24', hints: ['48 = 2⁴ × 3 and 72 = 2³ × 3².', 'GCD uses minimum exponents.', 'GCD = 2³ × 3 = 8 × 3 = 24.'], explanation: ['48 = 2⁴ × 3 and 72 = 2³ × 3².', 'GCD = 2^{min(4,3)} × 3^{min(1,2)} = 8 × 3 = 24.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'What is <span class="math">\\\\gcd(60, 90)</span>?', answer: '30', hints: ['60 = 2² × 3 × 5 and 90 = 2 × 3² × 5.', 'Common primes: 2, 3, and 5.', 'GCD = 2 × 3 × 5 = 30.'], explanation: ['60 = 2² × 3 × 5 and 90 = 2 × 3² × 5.', 'GCD = 2¹ × 3¹ × 5¹ = 30.'] },`
]);

// W2-T6: Least Common Multiple (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'What is <span class="math">\\\\text{lcm}(5, 12)</span>?', answer: '60', hints: ['5 and 12 share no common factors other than 1.', 'When GCD=1, LCM = product.', '5 × 12 = 60.'], explanation: ['Since GCD(5,12) = 1, LCM = 5 × 12 = 60.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'What is <span class="math">\\\\text{lcm}(12, 15)</span>?', choices: ['30', '60', '120', '180'], answer: '60', hints: ['12 = 2² × 3 and 15 = 3 × 5.', 'LCM uses maximum exponents.', 'LCM = 2² × 3 × 5 = 60.'], explanation: ['12 = 2² × 3 and 15 = 3 × 5.', 'LCM = 2² × 3 × 5 = 60.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'What is <span class="math">\\\\text{lcm}(14, 20)</span>?', answer: '140', hints: ['14 = 2 × 7 and 20 = 2² × 5.', 'LCM uses maximum exponents.', 'LCM = 2² × 5 × 7 = 4 × 35 = 140.'], explanation: ['14 = 2 × 7 and 20 = 2² × 5.', 'LCM = 2² × 5 × 7 = 140.'] },`
]);

// W2-T7: Counting Factors (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'How many factors does 54 have?', answer: '8', hints: ['54 = 2 × 3³.', 'Number of factors = (1+1)(3+1).', '= 2 × 4 = 8.'], explanation: ['54 = 2¹ × 3³.', 'Factors: (1+1)(3+1) = 8.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'How many factors does <span class="math">2^3 \\\\times 3 \\\\times 5^2</span> have?', choices: ['16', '20', '24', '30'], answer: '24', hints: ['Use the formula: (exponent+1) for each prime.', '(3+1)(1+1)(2+1) = 4 × 2 × 3.', '= 24 factors.'], explanation: ['For 2³ × 3¹ × 5², the number of factors is (3+1)(1+1)(2+1).', '= 4 × 2 × 3 = 24 factors.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'How many factors does 150 have?', answer: '12', hints: ['150 = 2 × 3 × 5².', 'Number of factors = (1+1)(1+1)(2+1).', '= 2 × 2 × 3 = 12.'], explanation: ['150 = 2 × 3 × 5².', 'Factors: (1+1)(1+1)(2+1) = 12.'] },`
]);

// W2-T8: Divisibility & Factorization (diff 2-3)
newQuestions.push([
  `    { type: 'mc', difficulty: 2, question: 'If <span class="math">n = 2^2 \\\\times 3^2 \\\\times 5</span>, is <span class="math">n</span> divisible by 12?', choices: ['Yes', 'No'], answer: 'Yes', hints: ['12 = 2² × 3.', 'n has 2² (enough 2s) and 3² (enough 3s).', 'So n is divisible by 12.'], explanation: ['12 = 2² × 3.', 'n = 2² × 3² × 5 has at least 2² and 3¹.', 'So n is divisible by 12.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'What is the largest power of 2 that divides 112?', answer: '16', hints: ['Factor 112: 112 = 2⁴ × 7.', 'The largest power of 2 is 2⁴.', '2⁴ = 16.'], explanation: ['112 = 2⁴ × 7.', 'Largest power of 2 dividing 112 is 2⁴ = 16.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'If a number is divisible by both 7 and 9, it must be divisible by:', choices: ['16', '63', '36', '56'], answer: '63', hints: ['7 and 9 share no common factors (GCD=1).', 'So if a number is divisible by both, it is divisible by 7×9.', '7 × 9 = 63.'], explanation: ['GCD(7,9) = 1, so LCM(7,9) = 63.', 'A number divisible by both 7 and 9 must be divisible by 63.'] },`
]);

// W2-T9: GCD-LCM Relationship (diff 2-3)
newQuestions.push([
  `    { type: 'numeric', difficulty: 2, question: 'If <span class="math">\\\\gcd(a,b) = 10</span> and <span class="math">a \\\\times b = 500</span>, what is <span class="math">\\\\text{lcm}(a,b)</span>?', answer: '50', hints: ['Use the formula: GCD × LCM = a × b.', '10 × LCM = 500.', 'LCM = 500 ÷ 10 = 50.'], explanation: ['GCD(a,b) × LCM(a,b) = a × b.', '10 × LCM = 500.', 'LCM = 50.'] },`,
  `    { type: 'mc', difficulty: 3, question: 'If <span class="math">\\\\gcd(15, n) = 5</span> and <span class="math">\\\\text{lcm}(15, n) = 60</span>, what is <span class="math">n</span>?', choices: ['10', '15', '20', '25'], answer: '20', hints: ['GCD × LCM = 15 × n.', '5 × 60 = 15 × n.', '300 = 15n, so n = 20.'], explanation: ['GCD × LCM = 15 × n.', '5 × 60 = 300 = 15n.', 'n = 20. Check: GCD(15,20)=5 ✓, LCM(15,20)=60 ✓.'] },`,
  `    { type: 'numeric', difficulty: 3, question: 'If <span class="math">\\\\gcd(a,b) = 12</span> and <span class="math">\\\\text{lcm}(a,b) = 84</span>, what is <span class="math">a \\\\times b</span>?', answer: '1008', hints: ['GCD × LCM = a × b.', '12 × 84 = 1008.', 'So a × b = 1008.'], explanation: ['GCD(a,b) × LCM(a,b) = a × b.', '12 × 84 = 1008.'] },`
]);

// Verify we have exactly 33 sets
if (newQuestions.length !== closingLines.length) {
  console.error(`ERROR: ${newQuestions.length} question sets but ${closingLines.length} topics`);
  process.exit(1);
}

// Process from bottom to top to keep line numbers stable
let totalAdded = 0;
for (let i = closingLines.length - 1; i >= 0; i--) {
  const lineIdx = closingLines[i] - 1; // 0-indexed
  const qs = newQuestions[i];
  // Insert the 3 questions before the closing bracket
  const insertLines = qs.join('\n');
  lines.splice(lineIdx, 0, insertLines);
  totalAdded += 3;
}

const output = lines.join('\n');
fs.writeFileSync(FILE, output, 'utf8');
console.log(`Done! Inserted ${totalAdded} questions across ${closingLines.length} topics.`);
