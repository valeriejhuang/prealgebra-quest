// ===== MATH QUEST: TEARS OF KNOWLEDGE — Topic Metadata & Question Reordering =====
// This file runs AFTER all chapter files and BEFORE game.js.
// It adds topic names + knowledge notes to each world, reorders
// tutorial/challenge arrays so questions are grouped by topic (3 per topic),
// and merges extraChallenge questions into challenge arrays for worlds with
// additional topics beyond the base 10. Supports variable shrine counts per world.

(function () {
  "use strict";

  // Reorder an array by an index map: newArr[i] = oldArr[map[i]]
  function reorder(arr, map) {
    return map.map(function (i) { return arr[i]; });
  }

  // ── Reorder maps for the base 15 tutorial + 15 challenge questions ──
  // After reordering: tutorial [0-2]=topic0, [3-5]=topic1, ..., [12-14]=topic4
  //                   challenge [0-2]=topic5, [3-5]=topic6, ..., [12-14]=topic9

  var R = {
    0:  { t: [0,5,14, 2,3,13, 1,6,11, 4,10,7, 8,12,9],       c: [9,1,12, 0,6,10, 2,5,13, 3,4,7, 8,11,14] },
    1:  { t: [0,4,8, 10,12,14, 2,6,11, 3,13,7, 5,1,9],        c: [0,8,14, 2,6,12, 1,7,11, 3,9,13, 5,4,10] },
    2:  { t: [5,10,1, 0,6,2, 4,8,7, 3,14,9, 11,12,13],        c: [0,5,9, 1,10,7, 2,6,11, 4,13,8, 3,14,12] },
    3:  { t: [6,7,8, 0,1,2, 3,4,5, 9,10,11, 13,14,12],        c: [0,1,7, 2,3,14, 4,5,6, 8,9,10, 11,12,13] },
    4:  { t: [5,6,14, 0,1,4, 2,3,7, 8,9,13, 10,11,12],        c: [0,1,2, 3,4,12, 5,6,7, 9,10,11, 8,13,14] },
    5:  { t: [0,1,2, 3,4,5, 6,11,14, 7,8,9, 10,12,13],        c: [0,1,2, 3,4,5, 6,7,14, 8,9,10, 11,12,13] },
    6:  { t: [0,4,10, 1,5,11, 2,6,13, 3,7,9, 8,12,14],        c: [0,6,12, 4,11,7, 2,10,13, 1,8,14, 3,9,5] },
    7:  { t: [6,0,8, 13,7,10, 2,4,12, 1,3,5, 9,14,11],        c: [0,6,8, 1,4,12, 2,3,13, 5,9,11, 7,10,14] },
    8:  { t: [1,5,14, 4,7,8, 0,3,2, 6,9,10, 11,12,13],        c: [9,0,4, 1,3,5, 2,8,6, 7,10,12, 13,11,14] },
    9:  { t: [0,1,2, 3,7,12, 4,5,6, 10,11,13, 8,9,14],        c: [0,1,12, 2,9,14, 3,4,5, 7,8,13, 6,10,11] },
    10: { t: [0,1,7, 2,3,6, 4,5,12, 8,9,10, 11,13,14],        c: [0,1,2, 3,4,10, 5,6,14, 7,12,13, 8,9,11] },
    11: { t: [3,0,14, 2,4,10, 1,8,12, 7,9,11, 5,6,13],        c: [0,2,11, 1,3,9, 4,5,12, 6,7,13, 8,10,14] },
    12: { t: [0,5,7, 1,6,9, 2,3,13, 4,10,8, 11,12,14],        c: [0,10,4, 1,5,6, 3,7,13, 2,8,11, 9,12,14] },
    13: { t: [0,6,13, 5,9,11, 1,2,7, 3,4,8, 12,14,10],        c: [0,6,10, 1,12,14, 2,4,8, 5,11,13, 3,9,7] },
    14: { t: [0,1,7, 2,10,14, 3,6,11, 4,8,12, 5,9,13],        c: [0,5,12, 3,7,13, 2,9,11, 6,14,10, 4,8,1] },
    // W15-W16: questions already written in topic order — identity maps
    15: { t: [0,1,2, 3,4,5, 6,7,8, 9,10,11, 12,13,14],      c: [0,1,2, 3,4,5, 6,7,8, 9,10,11, 12,13,14] },
    16: { t: [0,1,2, 3,4,5, 6,7,8, 9,10,11, 12,13,14],      c: [0,1,2, 3,4,5, 6,7,8, 9,10,11, 12,13,14] },
  };

  // ── Topic definitions ──
  // Base 10 topics (indices 0-4 = tutorial shrines, 5-9 = challenge shrines)
  // Additional topics (index 10+) use questions from extraChallenge arrays

  var T = {
    0: [
      { name: "Addition & Subtraction", note: "Addition combines two quantities into a sum. Subtraction finds the difference. Mental tricks like regrouping (e.g. 17&nbsp;+&nbsp;28 = 20&nbsp;+&nbsp;25) make these faster." },
      { name: "Multiplication & Division", note: 'Multiplication is repeated addition: <span class="math">8 &times; 7</span> means 8 groups of 7. Division is its inverse &mdash; <span class="math">56 &divide; 8</span> asks "how many 8s fit in 56?"' },
      { name: "Commutative & Associative", note: 'The <b>commutative property</b> says order doesn\'t matter: <span class="math">a + b = b + a</span>. The <b>associative property</b> says grouping doesn\'t matter: <span class="math">(a + b) + c = a + (b + c)</span>.' },
      { name: "Distributive Property", note: 'The distributive property: <span class="math">a &times; (b + c) = a &times; b + a &times; c</span>. Use it to expand or factor.' },
      { name: "Identity & Zero Properties", note: 'Additive identity is 0 (<span class="math">a + 0 = a</span>), multiplicative identity is 1 (<span class="math">a &times; 1 = a</span>). Any number times zero equals zero.' },
      { name: "Mental Addition Strategies", note: 'Use properties to add cleverly. Regroup near-round numbers: <span class="math">999 + 47 = 1000 + 46</span>.' },
      { name: "Associative Regrouping", note: 'Rearrange products to create friendly numbers: <span class="math">25 &times; 16 = 25 &times; 4 &times; 4 = 100 &times; 4 = 400</span>.' },
      { name: "Distributive Expansion", note: 'Break apart a multiplication: <span class="math">12 &times; 15 = 12 &times; 10 + 12 &times; 5 = 180</span>. Useful for mental math.' },
      { name: "Distributive Factoring", note: 'Pull out a common factor: <span class="math">47 &times; 8 + 53 &times; 8 = (47 + 53) &times; 8 = 800</span>.' },
      { name: "Arithmetic Word Problems", note: "Real-world problems use all these properties. Read carefully, identify the operation, and simplify." },
      // NEW topics (from extraChallenge)
      { name: "Order of Operations (PEMDAS)", note: '<b>PEMDAS</b>: Parentheses, Exponents, Multiplication/Division (left to right), Addition/Subtraction (left to right). Always follow this order! <span class="math">3 + 4 &times; 5 = 23</span>, not 35.' },
      { name: "Negative Numbers & Absolute Value", note: 'Negative numbers are less than zero. <b>Absolute value</b> |x| is the distance from zero: |&minus;5| = 5. Key rule: negative &times; negative = positive.' },
    ],
    1: [
      { name: "Evaluating Powers", note: 'An exponent tells you how many times to multiply the base by itself. <span class="math">2&#8309; = 2 &times; 2 &times; 2 &times; 2 &times; 2 = 32</span>.' },
      { name: "Perfect Squares", note: "A perfect square is a number times itself: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Knowing these by heart is a superpower." },
      { name: "Powers of 10", note: '<span class="math">10&#8319;</span> equals 1 followed by n zeros. <span class="math">10&sup3; = 1000</span>. Powers of 10 are the backbone of our number system.' },
      { name: "Zero & First Power", note: 'Any nonzero number to the power 0 equals 1: <span class="math">a&#8304; = 1</span>. Any number to the first power is itself: <span class="math">a&sup1; = a</span>.' },
      { name: "Exponent Terminology", note: 'In <span class="math">a&#8319;</span>, \'a\' is the <b>base</b> and \'n\' is the <b>exponent</b>. 5&sup2; is "five squared" and 2&sup3; is "two cubed."' },
      { name: "Product Rule", note: 'Multiplying powers with the same base: add exponents. <span class="math">a&#7504; &times; a&#8319; = a&#7504;&#8314;&#8319;</span>. Example: <span class="math">2&sup3; &times; 2&#8308; = 2&#8311; = 128</span>.' },
      { name: "Quotient Rule", note: 'Dividing powers with the same base: subtract exponents. <span class="math">a&#7504; &divide; a&#8319; = a&#7504;&#8315;&#8319;</span>.' },
      { name: "Power of a Power", note: 'Raising a power to another power: multiply exponents. <span class="math">(a&#7504;)&#8319; = a&#7504;&#8319;</span>. Example: <span class="math">(2&sup3;)&sup2; = 2&#8310; = 64</span>.' },
      { name: "Evaluating & Comparing", note: 'To compare <span class="math">3&#8308;</span> vs <span class="math">4&sup3;</span>, compute each: 81 vs 64. The rare equal case: <span class="math">2&#8308; = 4&sup2; = 16</span>.' },
      { name: "Finding Exponents", note: 'If <span class="math">2&#8319; = 64</span>, think: what power of 2 gives 64? <span class="math">2&#8310; = 64</span>, so n = 6.' },
      // NEW topic
      { name: "Perfect Cubes", note: 'A <b>perfect cube</b> is n&sup3; for some integer n. The first perfect cubes: 1, 8, 27, 64, 125, 216. <span class="math">3&sup3; = 27</span> because 3 &times; 3 &times; 3 = 27.' },
    ],
    2: [
      { name: "Prime Numbers", note: 'A <b>prime</b> has exactly two factors: 1 and itself. First primes: 2, 3, 5, 7, 11, 13. Note: 1 is NOT prime, and 2 is the only even prime.' },
      { name: "Identifying Composites", note: 'A <b>composite</b> has more than two factors. Example: 15 = 3 &times; 5. Every integer &gt; 1 is either prime or composite.' },
      { name: "Divisibility Rules", note: "By 3: digit sum divisible by 3. By 9: digit sum divisible by 9. By 2: last digit even. By 5: ends in 0 or 5." },
      { name: "Prime Factorization", note: 'Every integer &gt; 1 is a product of primes. <span class="math">72 = 2&sup3; &times; 3&sup2;</span>. Divide by the smallest prime repeatedly.' },
      { name: "Factors & Multiples", note: 'If <span class="math">n = p&#7491; &times; q&#7495;</span>, number of factors = <span class="math">(a+1)(b+1)</span>.' },
      { name: "Greatest Common Divisor", note: '<b>GCD</b>: largest number dividing both. Take min power of each shared prime. <span class="math">GCD(24, 36) = 12</span>.' },
      { name: "Least Common Multiple", note: '<b>LCM</b>: smallest number both divide into. Take max power of each prime. <span class="math">LCM(6, 8) = 24</span>.' },
      { name: "Counting Factors", note: '<span class="math">36 = 2&sup2; &times; 3&sup2;</span> has <span class="math">(2+1)(2+1) = 9</span> factors.' },
      { name: "Divisibility & Factorization", note: "Divisibility rules speed up prime factorization. If digit sum of 123 is 6 (div by 3), then 3 is a factor." },
      { name: "GCD-LCM Relationship", note: '<span class="math">GCD(a,b) &times; LCM(a,b) = a &times; b</span>. Consecutive integers have GCD = 1.' },
    ],
    3: [
      { name: "Equivalent Fractions", note: 'Multiply or divide both parts by the same number: <span class="math">1/2 = 2/4 = 3/6</span>.' },
      { name: "Simplifying Fractions", note: "Divide numerator and denominator by their GCD. Simplest form: GCD = 1." },
      { name: "Adding Fractions", note: 'Same denominator: add numerators. Different: find LCD first. <span class="math">1/4 + 1/4 = 2/4 = 1/2</span>.' },
      { name: "Mixed Numbers", note: '<span class="math">2&#8531;</span> = whole + fraction. Convert to improper: <span class="math">2&#8531; = 7/3</span>.' },
      { name: "Fractions & Multiplication", note: 'Multiply a fraction by a whole number: <span class="math">3/4 &times; 8 = 24/4 = 6</span>.' },
      { name: "Subtracting Fractions", note: 'Common denominator, then subtract numerators. <span class="math">3/4 &minus; 1/6</span>: LCD 12 &rarr; <span class="math">9/12 &minus; 2/12 = 7/12</span>.' },
      { name: "Multiplying Fractions", note: '<span class="math">(a/b) &times; (c/d) = ac/bd</span>. Cancel common factors first.' },
      { name: "Dividing Fractions", note: 'Multiply by the reciprocal: <span class="math">(a/b) &divide; (c/d) = (a/b) &times; (d/c)</span>.' },
      { name: "Comparing Fractions", note: 'Common denominator or cross-multiply: compare <span class="math">a&times;d</span> with <span class="math">b&times;c</span>.' },
      { name: "Fraction Word Problems", note: "Find parts, combine parts, or compare amounts. Set up the expression and simplify." },
    ],
    4: [
      { name: "Simplifying Expressions", note: 'Combine like terms: <span class="math">3a + 5a = 8a</span>. Evaluate by substituting values.' },
      { name: "One-Step Equations (+/\u2212)", note: 'Inverse operations. <span class="math">x + 5 = 12</span> &rarr; subtract 5: <span class="math">x = 7</span>.' },
      { name: "One-Step Equations (\u00d7/\u00f7)", note: '<span class="math">3x = 18</span> &rarr; divide by 3: <span class="math">x = 6</span>. <span class="math">x/4 = 9</span> &rarr; multiply by 4: <span class="math">x = 36</span>.' },
      { name: "Combining & Solving", note: 'Simplify first: <span class="math">x + x + x = 27</span> becomes <span class="math">3x = 27</span>, so <span class="math">x = 9</span>.' },
      { name: "Distributive Property", note: '<span class="math">a(b + c) = ab + ac</span>. Remove parentheses: <span class="math">4(x + 3) = 4x + 12</span>.' },
      { name: "Two-Step Equations", note: '<span class="math">2x + 7 = 19</span>: subtract 7 &rarr; <span class="math">2x = 12</span>, divide by 2 &rarr; <span class="math">x = 6</span>.' },
      { name: "Equations with Parentheses", note: '<span class="math">3(x + 2) = 21</span>: distribute &rarr; <span class="math">3x + 6 = 21</span>. Then solve.' },
      { name: "Variable on Both Sides", note: '<span class="math">5x &minus; 3 = 2x + 9</span> &rarr; <span class="math">3x = 12</span> &rarr; <span class="math">x = 4</span>.' },
      { name: "Writing Equations", note: "Translate words: 'Five more than twice a number is 31' &rarr; <span class=\"math\">2x + 5 = 31</span>." },
      { name: "Inequalities", note: 'Uses &lt;, &gt;, &le;, &ge;. Solve like equations, but flip the sign when multiplying/dividing by a negative.' },
    ],
    5: [
      { name: "Adding & Subtracting Decimals", note: "Line up decimal points, add trailing zeros, then add/subtract as whole numbers." },
      { name: "Comparing Decimals", note: 'Compare digit by digit from left. <span class="math">0.45 &gt; 0.405</span> because 450 &gt; 405 thousandths.' },
      { name: "Rounding & Multiplying", note: "Round: look at next digit (5+ rounds up). Multiply decimals: ignore points, multiply, count decimal places." },
      { name: "Fractions to Decimals", note: 'Divide numerator by denominator: <span class="math">3/4 = 0.75</span>. Some repeat: <span class="math">1/3 = 0.333...</span>' },
      { name: "Decimal \u2194 Fraction", note: '<span class="math">0.6 = 6/10 = 3/5</span>. For <span class="math">3/8</span>: <span class="math">3 &divide; 8 = 0.375</span>.' },
      { name: "Multiplying Decimals", note: '<span class="math">2.4 &times; 0.3</span>: 24 &times; 3 = 72, two decimal places &rarr; <span class="math">0.72</span>.' },
      { name: "Dividing Decimals", note: 'Make divisor whole: <span class="math">1.2 &divide; 0.4 = 12 &divide; 4 = 3</span>.' },
      { name: "Advanced Conversions", note: '<span class="math">7/8 = 0.875</span> by long division. <span class="math">0.36 = 36/100 = 9/25</span>.' },
      { name: "Repeating Decimals", note: 'Let <span class="math">x = 0.333...</span>, then <span class="math">10x = 3.333...</span>, so <span class="math">9x = 3</span> and <span class="math">x = 1/3</span>.' },
      { name: "Decimal Word Problems", note: "Money uses decimals. Add prices, compute change, split bills. Check decimal places." },
      // NEW topic
      { name: "Decimal Place Value", note: 'Each place after the decimal is a power of 10: <b>tenths</b> (0.1), <b>hundredths</b> (0.01), <b>thousandths</b> (0.001). In 3.572: 5 is tenths, 7 is hundredths, 2 is thousandths.' },
    ],
    6: [
      { name: "Writing Ratios", note: 'A ratio compares two quantities in order. "2 cups flour to 3 cups sugar" = <span class="math">2:3</span>.' },
      { name: "Simplifying Ratios", note: 'Divide both parts by GCD: <span class="math">12:8 = 3:2</span>.' },
      { name: "Unit Rates", note: 'Amount per one unit: <span class="math">$3 for 6 apples = $0.50/apple</span>.' },
      { name: "Unit Conversions", note: '<span class="math">4 feet &times; 12 in/ft = 48 inches</span>. Multiply for smaller units, divide for larger.' },
      { name: "Comparing Rates", note: "Convert to the same unit rate to compare. Find $/item for each deal." },
      { name: "Solving Proportions", note: '<span class="math">a/b = c/d</span>. Cross-multiply: <span class="math">a &times; d = b &times; c</span>.' },
      { name: "Ratio Word Problems", note: 'Ratio 3:5 with 15 boys: <span class="math">3/5 = 15/x</span> &rarr; 25 girls.' },
      { name: "Rate Problems", note: '<span class="math">distance = rate &times; time</span>. Know any two, find the third.' },
      { name: "Scale Factors", note: 'If <span class="math">1 cm = 5 km</span>, multiply map distance by 5 for real distance.' },
      { name: "Multi-step Conversions", note: 'Chain factors: <span class="math">2 yd &times; 3 ft/yd &times; 12 in/ft = 72 in</span>.' },
    ],
    7: [
      { name: "Percent Meaning", note: "Percent = 'per hundred.' 35% = 35 out of 100." },
      { name: "Percent \u2194 Fraction", note: '<span class="math">25% = 25/100 = 1/4</span>. Reverse: divide fraction, multiply by 100.' },
      { name: "Percent \u2194 Decimal", note: 'Percent to decimal: &divide; 100. Decimal to percent: &times; 100. <span class="math">0.25 = 25%</span>.' },
      { name: "Finding Percent of a Number", note: '<span class="math">25% of 60 = 0.25 &times; 60 = 15</span>. Shortcut: 10% = divide by 10.' },
      { name: "Finding the Percent", note: '<span class="math">15/50 &times; 100 = 30%</span>.' },
      { name: "Discount & Markup", note: 'Discount: <span class="math">sale = original &times; (1 &minus; rate)</span>. 30% off $80 = $56.' },
      { name: "Percent Increase & Decrease", note: 'Change = <span class="math">(diff &divide; original) &times; 100</span>. Always divide by the <em>original</em>.' },
      { name: "Tax, Tip & Commission", note: 'All "percent of a number." 8% tax on $50 = <span class="math">$50 &times; 0.08 = $4</span>.' },
      { name: "Finding the Whole", note: '<span class="math">40% of x = 28</span> &rarr; <span class="math">x = 70</span>.' },
      { name: "Successive Percent Changes", note: '10% up then 10% down = <span class="math">1.10 &times; 0.90 = 0.99</span> &mdash; a 1% loss!' },
    ],
    8: [
      { name: "Perfect Squares", note: "1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. Memorize up to 15&sup2;." },
      { name: "Basic Square Roots", note: '<span class="math">&radic;36 = 6</span> because <span class="math">6 &times; 6 = 36</span>.' },
      { name: "Recognizing Perfect Squares", note: 'Since <span class="math">6&sup2; = 36</span> and <span class="math">7&sup2; = 49</span>, 40 is NOT a perfect square.' },
      { name: "Larger Square Roots", note: '<span class="math">11&sup2; = 121</span>, <span class="math">12&sup2; = 144</span>, <span class="math">13&sup2; = 169</span>, <span class="math">14&sup2; = 196</span>, <span class="math">15&sup2; = 225</span>.' },
      { name: "Advanced Recognition", note: '<span class="math">&radic;144 = 12</span>, <span class="math">&radic;225 = 15</span>. 48 is not a perfect square (between 36 and 49).' },
      { name: "Estimating Square Roots", note: '<span class="math">25 &lt; 30 &lt; 36</span>, so <span class="math">&radic;30</span> is between 5 and 6.' },
      { name: "Simplifying Square Roots", note: '<span class="math">&radic;50 = &radic;(25 &times; 2) = 5&radic;2</span>. Factor out the largest perfect square.' },
      { name: "Square Root Properties", note: '<span class="math">&radic;a &times; &radic;a = a</span>. Product rule: <span class="math">&radic;a &times; &radic;b = &radic;(ab)</span>.' },
      { name: "Advanced Simplification", note: '<span class="math">&radic;75 = 5&radic;3</span>, <span class="math">&radic;98 = 7&radic;2</span>. Always extract the largest perfect square factor.' },
      { name: "Roots of Fractions & Products", note: '<span class="math">&radic;(a/b) = &radic;a/&radic;b</span>. So <span class="math">&radic;2 &times; &radic;8 = &radic;16 = 4</span>.' },
    ],
    9: [
      { name: "Types of Angles", note: '<b>Acute</b> &lt; 90&deg;, <b>right</b> = 90&deg;, <b>obtuse</b> 90&deg;&ndash;180&deg;, <b>straight</b> = 180&deg;.' },
      { name: "Measuring Angles", note: "Full rotation = 360&deg;. Straight line = 180&deg;. Supplementary angles add to 180&deg;." },
      { name: "Complementary Angles", note: 'Add to 90&deg;. Complement of 35&deg; is <span class="math">90 &minus; 35 = 55&deg;</span>.' },
      { name: "Vertical Angles", note: "Opposite angles at an intersection are equal. Adjacent angles are supplementary." },
      { name: "Angles in Triangles", note: "Interior angles sum to 180&deg;. Know two &rarr; find the third." },
      { name: "Polygon Angle Sums", note: '<span class="math">(n &minus; 2) &times; 180&deg;</span>. Pentagon: 540&deg;. Hexagon: 720&deg;.' },
      { name: "Regular Polygon Angles", note: 'Each angle = <span class="math">(n &minus; 2) &times; 180&deg; &divide; n</span>. Regular hexagon: 120&deg;.' },
      { name: "Parallel Lines & Transversals", note: "Alternate interior and corresponding angles are equal. Co-interior angles sum to 180&deg;." },
      { name: "Exterior Angles", note: 'Sum of exterior angles = 360&deg; always. Each exterior angle of regular n-gon = <span class="math">360&deg; &divide; n</span>.' },
      { name: "Isosceles Triangle Angles", note: 'Two equal base angles. Vertex 40&deg; &rarr; each base = <span class="math">(180 &minus; 40) &divide; 2 = 70&deg;</span>.' },
      // NEW topic
      { name: "Supplementary Angles", note: '<b>Supplementary angles</b> add to 180&deg;. They form a straight line. If one angle is 65&deg;, its supplement is <span class="math">180 &minus; 65 = 115&deg;</span>.' },
    ],
    10: [
      { name: "Rectangle Perimeter & Area", note: '<span class="math">P = 2(l + w)</span>. <span class="math">A = l &times; w</span>.' },
      { name: "Square Properties", note: '<span class="math">P = 4s</span>. <span class="math">A = s&sup2;</span>. Perimeter 20 &rarr; side 5 &rarr; area 25.' },
      { name: "Triangle Area", note: '<span class="math">A = &frac12; &times; base &times; height</span>. Height must be perpendicular to base.' },
      { name: "Circle Circumference & Area", note: '<span class="math">C = 2&pi;r</span>. <span class="math">A = &pi;r&sup2;</span>. <span class="math">&pi; &asymp; 3.14</span>.' },
      { name: "Formulas & Reverse", note: 'Rearrange: <span class="math">l = A &divide; w</span>. For circles: <span class="math">r = C &divide; (2&pi;)</span>.' },
      { name: "Parallelogram & Trapezoid", note: 'Parallelogram: <span class="math">A = bh</span>. Trapezoid: <span class="math">A = &frac12;(b&#8321; + b&#8322;)h</span>.' },
      { name: "Working Backward", note: 'Triangle area 72, base 16: <span class="math">h = 2 &times; 72 &divide; 16 = 9</span>.' },
      { name: "Circle Area (Advanced)", note: 'Square the radius first, then multiply by &pi;. If given diameter, halve it.' },
      { name: "Circle Reverse Problems", note: '<span class="math">r = &radic;(A/&pi;)</span> or <span class="math">r = C/(2&pi;)</span>.' },
      { name: "Composite Shapes", note: "Break into rectangles, triangles, circles. Add or subtract areas." },
    ],
    11: [
      { name: "Pythagorean Theorem", note: '<span class="math">a&sup2; + b&sup2; = c&sup2;</span>. c = hypotenuse. <span class="math">3&sup2; + 4&sup2; = 5&sup2;</span>.' },
      { name: "Pythagorean Practice", note: '<span class="math">5&sup2; + 12&sup2; = 169 = 13&sup2;</span>. Hypotenuse is always longest.' },
      { name: "Pythagorean Triples", note: "Common: 3-4-5, 5-12-13, 8-15-17, 7-24-25. Scale by multiplying all three." },
      { name: "Types of Quadrilaterals", note: "Trapezoid: 1 parallel pair. Parallelogram: 2. Rectangle: 4 right angles. Rhombus: 4 equal sides." },
      { name: "Quadrilateral Properties", note: "Angles sum to 360&deg;. Parallelogram: opposite sides equal. Rhombus: diagonals perpendicular." },
      { name: "Finding a Missing Leg", note: '<span class="math">b&sup2; = c&sup2; &minus; a&sup2;</span>. Example: <span class="math">10&sup2; &minus; 6&sup2; = 64</span>, <span class="math">b = 8</span>.' },
      { name: "Verifying Right Triangles", note: 'Test: does <span class="math">a&sup2; + b&sup2; = c&sup2;</span>? Use the two shorter sides for a,b.' },
      { name: "Word Problems", note: "Ladders, diagonals, ropes form right triangles. Identify legs and hypotenuse." },
      { name: "More Pythagorean Problems", note: '<span class="math">9&sup2; + 40&sup2; = 1681 = 41&sup2;</span>. Practice with scaled triples.' },
      { name: "Quadrilateral Diagonals", note: "Rhombus diagonals bisect at right angles, forming 4 right triangles." },
      // NEW topic
      { name: "Classifying Triangles (Converse)", note: 'The <b>converse</b> of the Pythagorean theorem classifies triangles: if <span class="math">a&sup2; + b&sup2; = c&sup2;</span> &rarr; right. If <span class="math">a&sup2; + b&sup2; &gt; c&sup2;</span> &rarr; acute. If <span class="math">a&sup2; + b&sup2; &lt; c&sup2;</span> &rarr; obtuse.' },
    ],
    12: [
      { name: "Mean (Average)", note: "Sum of values &divide; count. The 'fair share' if split equally." },
      { name: "Median", note: "Middle value when sorted. Even count: average the two middle values." },
      { name: "Mode & Range", note: "<b>Mode</b>: most frequent. <b>Range</b>: max &minus; min." },
      { name: "Reading Graphs", note: "Bar = categories. Line = trends. Pie = parts of whole. Read axes carefully." },
      { name: "Data Interpretation", note: '<span class="math">Total = Mean &times; Count</span>. Median resists outliers.' },
      { name: "Median & Mean Comparison", note: "Skewed data: mean gets pulled by extreme values, median stays put." },
      { name: "Finding Missing Values", note: '<span class="math">Total = Mean &times; Count</span>. Subtract known sum to find the missing value.' },
      { name: "Weighted Averages", note: 'Multiply each value by its weight. HW 40% (90) + Tests 60% (80) = <span class="math">84</span>.' },
      { name: "Outlier Effects", note: "Outlier pulls the mean strongly but barely affects median or mode." },
      { name: "Range & Transformations", note: "Adding a constant shifts mean, leaves range unchanged. Multiplying scales both." },
      // NEW topic
      { name: "Stem-and-Leaf Plots", note: 'A <b>stem-and-leaf plot</b> organizes data by splitting each number into a stem (leading digits) and leaf (last digit). It preserves all original data while showing the shape of the distribution. Easy to find median, mode, and range!' },
    ],
    13: [
      { name: "Multiplication Principle", note: 'm ways &times; n ways = m&times;n total outcomes.' },
      { name: "Sample Spaces", note: "Set of all outcomes. Die: {1-6}. Two coins: {HH,HT,TH,TT}." },
      { name: "Factorial & Arrangements", note: '<span class="math">n! = n &times; (n&minus;1) &times; ... &times; 1</span>. Counts ways to arrange n objects.' },
      { name: "Basic Probability", note: 'P = favorable &divide; total. Always between 0 and 1.' },
      { name: "Complementary Events", note: '<span class="math">P(not A) = 1 &minus; P(A)</span>.' },
      { name: "Combinations", note: 'Order doesn\'t matter: <span class="math">C(n,r) = n!/(r!(n&minus;r)!)</span>.' },
      { name: "Permutations", note: 'Order matters: <span class="math">P(n,r) = n!/(n&minus;r)!</span>.' },
      { name: "Large Counting Problems", note: '4-digit PIN with repeats: <span class="math">10&times;10&times;10&times;10 = 10,000</span>.' },
      { name: "Complement Strategy", note: 'P(at least 1 head in 2 flips) = <span class="math">1 &minus; 1/4 = 3/4</span>.' },
      { name: "Probability with Dice", note: 'Two dice: 36 outcomes. P(sum 7) = <span class="math">6/36 = 1/6</span>.' },
      // NEW topics
      { name: "Expected Value", note: '<b>Expected value</b> is the average outcome over many trials. <span class="math">E = &sum; (value &times; probability)</span>. For a fair die: <span class="math">(1+2+3+4+5+6)/6 = 3.5</span>.' },
      { name: "Casework Counting", note: '<b>Casework</b> means breaking a counting problem into non-overlapping cases, counting each separately, then adding. Organize by a key variable to avoid missing or double-counting.' },
    ],
    14: [
      { name: "Arithmetic & Geometric Patterns", note: 'Arithmetic: add same amount (2,5,8,11). Geometric: multiply (3,6,12,24).' },
      { name: "Special Number Patterns", note: "Perfect squares, triangular numbers (1,3,6,10...), Fibonacci (1,1,2,3,5,8...)." },
      { name: "Working Backwards", note: "Reverse each operation from the end. Undo + with &minus;, &times; with &divide;." },
      { name: "Gauss's Summation", note: '<span class="math">1+2+...+n = n(n+1)/2</span>. Pair first and last.' },
      { name: "Visual Counting", note: 'n&times;n grid total squares = <span class="math">n&sup2; + (n&minus;1)&sup2; + ... + 1</span>. 3&times;3 = 14.' },
      { name: "Units Digit Patterns", note: "Powers cycle through repeating units digits. Find cycle length, use mod." },
      { name: "Classic Logic Problems", note: "Snail problem: net daily gain d&minus;s, but final day reaches top before sliding." },
      { name: "Handshake Problem", note: '<span class="math">n(n&minus;1)/2</span> handshakes. Same for round-robin games.' },
      { name: "Counting Squares on Grids", note: 'k&times;k squares on n&times;n grid: <span class="math">(n&minus;k+1)&sup2;</span>. Sum all sizes.' },
      { name: "Summation & Fibonacci", note: 'Even sum: <span class="math">n(n+1)</span>. Odd sum: <span class="math">n&sup2;</span>. Fibonacci: each = sum of previous two.' },
      // NEW topic
      { name: "Pigeonhole Principle", note: 'If you put <b>n+1 items</b> into <b>n boxes</b>, at least one box has 2+ items. Example: 13 people, 12 months &rarr; at least 2 share a birth month. Simple but powerful!' },
    ],
    15: [
      { name: "Function Basics", note: 'A <b>function</b> is a rule that assigns exactly one output to each input. If <span class="math">f(x) = 2x + 1</span>, then <span class="math">f(3) = 7</span>.' },
      { name: "Evaluating Functions", note: 'Substitute the input and simplify: <span class="math">f(x) = 3x &minus; 4</span>, so <span class="math">f(5) = 15 &minus; 4 = 11</span>.' },
      { name: "Sequences", note: '<b>Arithmetic sequence</b>: add the same number each time. 2, 5, 8, 11 &rarr; common difference = 3. Next term = last + 3.' },
      { name: "Function Tables", note: 'Complete a table by substituting each x-value into the rule. For <span class="math">y = 2x + 1</span>: x=0&rarr;y=1, x=1&rarr;y=3, x=2&rarr;y=5.' },
      { name: "Plotting Points", note: 'An ordered pair <span class="math">(x, y)</span> locates a point on the coordinate plane. x goes right/left, y goes up/down.' },
      { name: "Rate of Change", note: 'Rate of change = <span class="math">(change in y) &divide; (change in x)</span>. It tells how fast the output changes per unit of input.' },
      { name: "Direct Variation", note: '<span class="math">y = kx</span> where k is the <b>constant of variation</b>. The graph passes through the origin. <span class="math">k = y &divide; x</span>.' },
      { name: "Slope", note: '<span class="math">slope = (y&sub2; &minus; y&sub1;) &divide; (x&sub2; &minus; x&sub1;)</span> = rise &divide; run. Positive slopes go up, negative go down, zero is flat.' },
      { name: "Slope-Intercept Form", note: '<span class="math">y = mx + b</span> where m = slope and b = y-intercept (where the line crosses the y-axis).' },
      { name: "Writing Linear Equations", note: 'Given slope m and y-intercept b, write <span class="math">y = mx + b</span>. Given two points, find m first, then b.' },
      // NEW topic
      { name: "Systems of Equations", note: 'A <b>system</b> is two equations with two unknowns. Solve by substitution: from one equation get y in terms of x, plug into the other.' },
    ],
    16: [
      { name: "3D Figure Names", note: '<b>Prism</b>: two identical parallel bases. <b>Pyramid</b>: one base, triangular faces meeting at a point. <b>Cylinder</b>: circular bases. <b>Cone</b>: circular base, point on top. <b>Sphere</b>: all points same distance from center.' },
      { name: "Volume of Rectangular Prisms", note: '<span class="math">V = l &times; w &times; h</span>. Length times width times height. Units are cubed (cm&sup3;, ft&sup3;).' },
      { name: "Volume of Triangular Prisms", note: '<span class="math">V = (&frac12; &times; b &times; h<sub>tri</sub>) &times; h<sub>prism</sub></span>. Find the triangular base area first, then multiply by the prism height.' },
      { name: "Volume of Cylinders", note: '<span class="math">V = &pi;r&sup2;h</span>. Find the circular base area (<span class="math">&pi;r&sup2;</span>), then multiply by height. Use <span class="math">&pi; &asymp; 3.14</span>.' },
      { name: "Volume of Pyramids", note: '<span class="math">V = &frac13; &times; B &times; h</span> where B = base area. A pyramid is one-third the volume of a prism with the same base and height.' },
      { name: "Volume of Cones & Spheres", note: 'Cone: <span class="math">V = &frac13;&pi;r&sup2;h</span>. Sphere: <span class="math">V = &frac43;&pi;r&sup3;</span>. A cone is one-third of its cylinder.' },
      { name: "Surface Area of Prisms", note: '<span class="math">SA = 2B + Ph</span> where B = base area, P = base perimeter, h = height. Think: two bases + the rectangular sides.' },
      { name: "Surface Area of Cylinders", note: '<span class="math">SA = 2&pi;r&sup2; + 2&pi;rh</span>. Two circular ends + the curved side (a rectangle when unrolled).' },
      { name: "SA of Pyramids & Cones", note: 'Pyramid: <span class="math">SA = B + &frac12;Pl</span> (l = slant height). Cone: <span class="math">SA = &pi;r&sup2; + &pi;rl</span>.' },
      { name: "Composite 3D Shapes", note: 'Break into simpler shapes, find each volume separately, then add. A silo = cylinder + half-sphere on top.' },
      // NEW topic
      { name: "Similar Solids", note: 'If two solids are similar with scale factor k, then surface areas scale by <span class="math">k&sup2;</span> and volumes scale by <span class="math">k&sup3;</span>. Double the size &rarr; 4&times; the surface area, 8&times; the volume!' },
    ],
  };

  // ── Apply reordering, merge extra questions, and attach topics ──

  for (var wid = 0; wid < WORLDS.length; wid++) {
    var w = WORLDS[wid];
    if (!w || !w.pool) continue;

    var r = R[wid];
    if (r) {
      // Reorder base tutorial (15 questions) by topic grouping
      if (w.pool.tutorial && w.pool.tutorial.length === 15 && r.t.length === 15) {
        w.pool.tutorial = reorder(w.pool.tutorial, r.t);
      }
      // Reorder base challenge (15 questions) by topic grouping
      if (w.pool.challenge && w.pool.challenge.length === 15 && r.c.length === 15) {
        w.pool.challenge = reorder(w.pool.challenge, r.c);
      }
    }

    // Merge extraChallenge into challenge (new topics go after the base 15)
    if (w.pool.extraChallenge && w.pool.extraChallenge.length > 0) {
      w.pool.challenge = w.pool.challenge.concat(w.pool.extraChallenge);
      delete w.pool.extraChallenge;
    }

    // Attach topic metadata and compute shrine count
    if (T[wid]) {
      w.topics = T[wid];
      w.shrineCount = T[wid].length; // variable per world
    }

    // ── Build topicPools: one array of questions per topic ──
    // Tutorial topics come from pool.tutorial (groups of 3)
    // Challenge topics come from pool.challenge (groups of 3)
    var topicPools = [];
    var tutTopics = Math.floor(w.pool.tutorial.length / 3);
    for (var ti = 0; ti < tutTopics; ti++) {
      topicPools.push(w.pool.tutorial.slice(ti * 3, ti * 3 + 3));
    }
    var chalTopics = Math.floor(w.pool.challenge.length / 3);
    for (var ci = 0; ci < chalTopics; ci++) {
      topicPools.push(w.pool.challenge.slice(ci * 3, ci * 3 + 3));
    }

    // Merge EXTRA_QUESTIONS if available (loaded from extra-q-*.js files)
    if (typeof EXTRA_QUESTIONS !== "undefined" && EXTRA_QUESTIONS[wid]) {
      var extras = EXTRA_QUESTIONS[wid];
      for (var ei = 0; ei < extras.length; ei++) {
        if (ei < topicPools.length) {
          // Append extra questions to existing topic pool
          topicPools[ei] = topicPools[ei].concat(extras[ei]);
        }
      }
    }

    w.pool.topicPools = topicPools;
  }

})();
