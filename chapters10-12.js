// ===== Chapters 10-12: Angles, Perimeter & Area, Right Triangles =====
// Pool format: tutorial (15), challenge (15), boss (10) per world

// ============================================================
// WORLD 9 — Angle Academy
// Chapter: Angles
// ============================================================
WORLDS[9] = {
  id: 9, name: "Angle Academy", icon: "📐",
  chapter: "Angles", color: "#e74c3c",
  bossName: "Angulor, the Rotating Eye",
  bossDesc: "A giant eye that shoots beams at precise angles",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'A right angle measures how many degrees?',
        diagram: { type: "angle", angle: 90 },
        choices: ["45°", "90°", "180°", "360°"],
        answer: "90°",
        hints: [
          "Think of the corner of a book or a square.",
          "That corner is exactly one right angle.",
          "A right angle = 90°."
        ],
        explanation: [
          "A right angle forms an L-shape, like the corner of a square.",
          "It measures exactly <strong>90°</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'An angle measuring 60° is classified as:',
        diagram: { type: "angle", angle: 60 },
        choices: ["Acute", "Right", "Obtuse", "Straight"],
        answer: "Acute",
        hints: [
          "Acute angles are less than 90°.",
          "Right angles are exactly 90°.",
          "60° < 90°, so it is acute."
        ],
        explanation: [
          "An acute angle is any angle less than 90°.",
          "Since 60° < 90°, it is <strong>acute</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'An angle measuring 130° is classified as:',
        diagram: { type: "angle", angle: 130 },
        choices: ["Acute", "Right", "Obtuse", "Reflex"],
        answer: "Obtuse",
        hints: [
          "Obtuse angles are between 90° and 180°.",
          "130° is more than 90° but less than 180°.",
          "So it is obtuse."
        ],
        explanation: [
          "An obtuse angle is between 90° and 180°.",
          "Since 90° < 130° < 180°, it is <strong>obtuse</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A straight angle measures:',
        diagram: { type: "angle", angle: 180 },
        choices: ["90°", "180°", "270°", "360°"],
        answer: "180°",
        hints: [
          "A straight angle forms a straight line.",
          "That is half of a full rotation.",
          "Half of 360° = 180°."
        ],
        explanation: [
          "A straight angle makes a flat line.",
          "It measures exactly <strong>180°</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Two angles are complementary. One measures 35°. What is the other angle in degrees?',
        diagram: { type: "complementary", a: 35, b: 55 },
        answer: "55",
        hints: [
          "Complementary angles add up to 90°.",
          "90 − 35 = ?",
          "90 − 35 = 55."
        ],
        explanation: [
          "Complementary means the two angles sum to 90°.",
          "90 − 35 = <strong>55°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Two angles are supplementary. One measures 110°. What is the other angle in degrees?',
        diagram: { type: "supplementary", a: 110, b: 70 },
        answer: "70",
        hints: [
          "Supplementary angles add up to 180°.",
          "180 − 110 = ?",
          "180 − 110 = 70."
        ],
        explanation: [
          "Supplementary means the two angles sum to 180°.",
          "180 − 110 = <strong>70°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Two angles are complementary. One measures 48°. What is the other angle in degrees?',
        diagram: { type: "complementary", a: 48, b: 42 },
        answer: "42",
        hints: [
          "Complementary angles sum to 90°.",
          "90 − 48 = ?",
          "90 − 48 = 42."
        ],
        explanation: [
          "Complementary → sum = 90°.",
          "90 − 48 = <strong>42°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'An angle measuring 250° is classified as:',
        diagram: { type: "angle", angle: 250 },
        choices: ["Obtuse", "Straight", "Reflex", "Right"],
        answer: "Reflex",
        hints: [
          "A reflex angle is greater than 180° but less than 360°.",
          "250° is more than 180°.",
          "So it is a reflex angle."
        ],
        explanation: [
          "A reflex angle is between 180° and 360°.",
          "Since 180° < 250° < 360°, it is a <strong>reflex</strong> angle."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A triangle has angles of 50° and 60°. What is the third angle in degrees?',
        diagram: { type: "triangle", angles: [50, 60, 70], labels: ["A", "B", "C"] },
        answer: "70",
        hints: [
          "The three angles of any triangle add up to 180°.",
          "50 + 60 = 110. Now subtract from 180.",
          "180 − 110 = 70."
        ],
        explanation: [
          "Sum of angles in a triangle = 180°.",
          "50 + 60 = 110",
          "180 − 110 = <strong>70°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A triangle has angles of 90° and 35°. What is the third angle in degrees?',
        diagram: { type: "triangle", angles: [90, 35, 55], labels: ["A", "B", "C"] },
        answer: "55",
        hints: [
          "Triangle angles sum to 180°.",
          "90 + 35 = 125.",
          "180 − 125 = 55."
        ],
        explanation: [
          "90 + 35 = 125",
          "180 − 125 = <strong>55°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'When two straight lines cross, the opposite angles formed are called vertical angles. Vertical angles are always:',
        diagram: { type: "verticalAngles", a: 70 },
        choices: ["Equal", "Supplementary", "Complementary", "90°"],
        answer: "Equal",
        hints: [
          "When two lines cross, they form two pairs of opposite angles.",
          "Each pair of opposite (vertical) angles are the same size.",
          "So vertical angles are always equal."
        ],
        explanation: [
          "Vertical angles are the opposite angles formed when two lines cross.",
          "They are always <strong>equal</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Two lines cross. One of the angles formed is 72°. What is the angle directly opposite to it in degrees?',
        diagram: { type: "verticalAngles", a: 72 },
        answer: "72",
        hints: [
          "Opposite angles when two lines cross are called vertical angles.",
          "Vertical angles are always equal.",
          "So the opposite angle is also 72°."
        ],
        explanation: [
          "Vertical angles are equal.",
          "The opposite angle = <strong>72°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Two supplementary angles have a sum of:',
        diagram: { type: "supplementary", a: 120, b: 60 },
        choices: ["90°", "180°", "270°", "360°"],
        answer: "180°",
        hints: [
          "Complementary angles sum to 90°.",
          "Supplementary angles sum to a different number.",
          "Supplementary → sum = 180°."
        ],
        explanation: [
          "By definition, supplementary angles add up to <strong>180°</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Two lines cross. One of the angles formed is 65°. What is the angle next to it (not opposite) in degrees?',
        diagram: { type: "verticalAngles", a: 65 },
        answer: "115",
        hints: [
          "Adjacent angles on a straight line sum to 180°.",
          "180 − 65 = ?",
          "180 − 65 = 115."
        ],
        explanation: [
          "Adjacent angles formed by crossing lines are supplementary (sum = 180°).",
          "180 − 65 = <strong>115°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is the sum of all three angles in any triangle?',
        diagram: { type: "triangle", angles: [60, 60, 60], labels: ["A", "B", "C"] },
        choices: ["90°", "180°", "270°", "360°"],
        answer: "180°",
        hints: [
          "This is a fundamental rule about triangles.",
          "No matter the shape of the triangle, the angles always add up to the same number.",
          "That number is 180°."
        ],
        explanation: [
          "The angle sum of any triangle is always <strong>180°</strong>."
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'What is the sum of interior angles of a pentagon (5 sides)? Answer in degrees.',
        diagram: { type: "polygon", n: 5 },
        answer: "540",
        hints: [
          "Use the formula: (n − 2) × 180°.",
          "For a pentagon, n = 5.",
          "(5 − 2) × 180 = 3 × 180 = 540."
        ],
        explanation: [
          "Interior angle sum = (n − 2) × 180°",
          "(5 − 2) × 180 = 3 × 180 = <strong>540°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is the sum of interior angles of a hexagon (6 sides)? Answer in degrees.',
        diagram: { type: "polygon", n: 6 },
        answer: "720",
        hints: [
          "Formula: (n − 2) × 180°.",
          "(6 − 2) × 180 = 4 × 180.",
          "= 720."
        ],
        explanation: [
          "(6 − 2) × 180 = 4 × 180",
          "= <strong>720°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Each interior angle of a regular hexagon measures:',
        diagram: { type: "polygon", n: 6, angle: 120 },
        choices: ["100°", "108°", "120°", "135°"],
        answer: "120°",
        hints: [
          "Sum of interior angles of a hexagon = 720°.",
          "A regular hexagon has 6 equal angles.",
          "720 ÷ 6 = 120°."
        ],
        explanation: [
          "Sum = (6 − 2) × 180 = 720°",
          "Each angle = 720 ÷ 6 = <strong>120°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Two parallel lines are cut by a transversal. If one angle is 70°, what is the alternate interior angle?',
        diagram: { type: "parallelLines", angle: 70, highlight: "alternate" },
        choices: ["70°", "110°", "20°", "90°"],
        answer: "70°",
        hints: [
          "Alternate interior angles are on opposite sides of the transversal, between the parallel lines.",
          "When lines are parallel, alternate interior angles are equal.",
          "So the alternate interior angle is also 70°."
        ],
        explanation: [
          "With parallel lines, alternate interior angles are <strong>equal</strong>.",
          "The alternate interior angle = <strong>70°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Two parallel lines are cut by a transversal. One angle is 55°. What is the co-interior (same-side interior) angle in degrees?',
        diagram: { type: "parallelLines", angle: 55, highlight: "co-interior" },
        answer: "125",
        hints: [
          "Co-interior angles (same-side interior) with parallel lines are supplementary.",
          "That means they add up to 180°.",
          "180 − 55 = 125."
        ],
        explanation: [
          "Co-interior angles sum to 180° when lines are parallel.",
          "180 − 55 = <strong>125°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Two parallel lines are cut by a transversal. One angle is 80°. The corresponding angle on the other parallel line is:',
        diagram: { type: "parallelLines", angle: 80, highlight: "corresponding" },
        choices: ["80°", "100°", "180°", "10°"],
        answer: "80°",
        hints: [
          "Corresponding angles are in the same position at each intersection.",
          "With parallel lines, corresponding angles are equal.",
          "So the corresponding angle is 80°."
        ],
        explanation: [
          "Corresponding angles with parallel lines are <strong>equal</strong>.",
          "= <strong>80°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'An isosceles triangle has a vertex angle of 40°. What is each base angle in degrees?',
        diagram: { type: "isosceles", vertex: 40, base: 70 },
        answer: "70",
        hints: [
          "In an isosceles triangle, the two base angles are equal.",
          "40 + 2x = 180, where x is a base angle.",
          "2x = 140, so x = 70."
        ],
        explanation: [
          "The base angles are equal. Let each = x.",
          "40 + 2x = 180",
          "2x = 140, so x = <strong>70°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'The sum of exterior angles of any convex polygon is always how many degrees?',
        diagram: { type: "polygon", n: 5, exteriorAngle: 72 },
        answer: "360",
        hints: [
          "This is a special property of all convex polygons.",
          "No matter how many sides, the exterior angles always add to the same number.",
          "That number is 360°."
        ],
        explanation: [
          "The sum of exterior angles of any convex polygon = <strong>360°</strong>.",
          "This is true regardless of the number of sides."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Each exterior angle of a regular octagon (8 sides) measures how many degrees?',
        diagram: { type: "polygon", n: 8, exteriorAngle: 45 },
        answer: "45",
        hints: [
          "Exterior angles of any polygon sum to 360°.",
          "A regular octagon has 8 equal exterior angles.",
          "360 ÷ 8 = 45."
        ],
        explanation: [
          "Exterior angle sum = 360°.",
          "Each exterior angle = 360 ÷ 8 = <strong>45°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Each interior angle of a regular octagon measures:',
        diagram: { type: "polygon", n: 8, angle: 135 },
        choices: ["120°", "135°", "140°", "144°"],
        answer: "135°",
        hints: [
          "Sum of interior angles = (8 − 2) × 180 = 1080°.",
          "Each angle = 1080 ÷ 8.",
          "= 135°."
        ],
        explanation: [
          "Sum = (8 − 2) × 180 = 6 × 180 = 1080°",
          "Each angle = 1080 ÷ 8 = <strong>135°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'An isosceles triangle has equal base angles of 65° each. What is the vertex angle in degrees?',
        diagram: { type: "isosceles", vertex: 50, base: 65 },
        answer: "50",
        hints: [
          "All three angles of a triangle add to 180°.",
          "65 + 65 = 130.",
          "180 − 130 = 50."
        ],
        explanation: [
          "65 + 65 = 130",
          "Vertex angle = 180 − 130 = <strong>50°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two parallel lines are cut by a transversal making a 65° angle with one line. What is the co-interior angle on the same side?',
        diagram: { type: "parallelLines", angle: 65, highlight: "co-interior" },
        choices: ["65°", "90°", "115°", "125°"],
        answer: "115°",
        hints: [
          "Co-interior angles with parallel lines add up to 180°.",
          "180 − 65 = 115.",
          "The co-interior angle is 115°."
        ],
        explanation: [
          "Co-interior angles are supplementary when lines are parallel.",
          "180 − 65 = <strong>115°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is the sum of interior angles of a heptagon (7 sides)? Answer in degrees.',
        diagram: { type: "polygon", n: 7 },
        answer: "900",
        hints: [
          "Formula: (n − 2) × 180°.",
          "(7 − 2) × 180 = 5 × 180.",
          "= 900."
        ],
        explanation: [
          "(7 − 2) × 180 = 5 × 180",
          "= <strong>900°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'An exterior angle of a triangle equals 120°. If one of the non-adjacent interior angles is 50°, what is the other non-adjacent interior angle?',
        diagram: { type: "exteriorAngle", interior: [50, 70, 60], exterior: 120 },
        choices: ["60°", "70°", "80°", "130°"],
        answer: "70°",
        hints: [
          "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles.",
          "120 = 50 + x.",
          "x = 70."
        ],
        explanation: [
          "Exterior angle = sum of two remote interior angles.",
          "120 = 50 + x",
          "x = <strong>70°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Each interior angle of a regular pentagon measures how many degrees?',
        diagram: { type: "polygon", n: 5, angle: 108 },
        answer: "108",
        hints: [
          "Sum of interior angles = (5 − 2) × 180 = 540°.",
          "Regular means all 5 angles are equal.",
          "540 ÷ 5 = 108."
        ],
        explanation: [
          "Sum = (5 − 2) × 180 = 540°",
          "Each angle = 540 ÷ 5 = <strong>108°</strong>"
        ]
      }
    ],

    // ── Extra Challenge: Supplementary Angles ──
    extraChallenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'Two angles are supplementary. One measures 65°. What is the other angle in degrees?',
        diagram: { type: "supplementary", a: 65, b: 115 },
        answer: "115",
        hints: [
          "Supplementary angles add up to 180°.",
          "180 − 65 = ?",
          "= 115°"
        ],
        explanation: [
          "Supplementary angles sum to 180°.",
          "180 − 65 = <strong>115°</strong>",
          "Together they form a straight line."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'An angle and its supplement are in the ratio 2:7. What is the smaller angle in degrees?',
        diagram: { type: "supplementary", a: 40, b: 140 },
        answer: "40",
        hints: [
          "The two angles add to 180° and are in ratio 2:7.",
          "Total parts = 2 + 7 = 9.",
          "Smaller angle = (2/9) × 180 = 40°"
        ],
        explanation: [
          "2 + 7 = 9 parts total.",
          "Each part = 180 ÷ 9 = 20°",
          "Smaller angle = 2 × 20 = <strong>40°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'If two angles are supplementary and one is a right angle (90°), what type of angle is the other?',
        diagram: { type: "supplementary", a: 90, b: 90 },
        choices: ["Acute (< 90°)", "Right (= 90°)", "Obtuse (> 90°)", "Straight (180°)"],
        answer: "Right (= 90°)",
        hints: [
          "Supplementary means they add to 180°.",
          "If one is 90°, then the other is 180 − 90 = ?",
          "The other is also 90°."
        ],
        explanation: [
          "180° − 90° = 90°",
          "So the other angle is also a <strong>right angle (= 90°)</strong>.",
          "Two right angles are supplementary!"
        ]
      },
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is the sum of interior angles of an octagon (8 sides)? Answer in degrees.',
        diagram: { type: "polygon", n: 8 },
        answer: "1080",
        hints: [
          "Use the polygon angle sum formula: (n − 2) × 180°.",
          "(8 − 2) × 180 = 6 × 180.",
          "= 1080."
        ],
        explanation: [
          "(8 − 2) × 180 = 6 × 180",
          "= <strong>1080°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Each exterior angle of a regular 10-sided polygon (decagon) measures how many degrees?',
        diagram: { type: "polygon", n: 10, exteriorAngle: 36 },
        answer: "36",
        hints: [
          "Exterior angles of any polygon sum to 360°.",
          "A regular decagon has 10 equal exterior angles.",
          "360 ÷ 10 = 36."
        ],
        explanation: [
          "Exterior angle sum = 360°.",
          "Each = 360 ÷ 10 = <strong>36°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'In a triangle, the angles are in the ratio 1:2:3. What is the largest angle?',
        diagram: { type: "triangle", angles: [30, 60, 90], labels: ["A", "B", "C"] },
        choices: ["60°", "90°", "120°", "180°"],
        answer: "90°",
        hints: [
          "Let the angles be x, 2x, and 3x.",
          "x + 2x + 3x = 180, so 6x = 180, x = 30.",
          "Largest = 3x = 3 × 30 = 90°."
        ],
        explanation: [
          "x + 2x + 3x = 180 → 6x = 180 → x = 30",
          "Angles: 30°, 60°, 90°",
          "Largest = <strong>90°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'In a triangle, two angles are in the ratio 2:3 and the third angle is 50°. What is the largest of the three angles in degrees?',
        diagram: { type: "triangle", angles: [52, 78, 50], labels: ["A", "B", "C"] },
        answer: "78",
        hints: [
          "Let the two angles be 2x and 3x.",
          "2x + 3x + 50 = 180, so 5x = 130, x = 26.",
          "The three angles are 52°, 78°, and 50°. Largest = 78°."
        ],
        explanation: [
          "2x + 3x + 50 = 180",
          "5x = 130, x = 26",
          "Angles: 52°, 78°, 50°",
          "Largest = <strong>78°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Each interior angle of a regular 12-sided polygon (dodecagon) measures:',
        diagram: { type: "polygon", n: 12, angle: 150 },
        choices: ["144°", "150°", "156°", "160°"],
        answer: "150°",
        hints: [
          "Sum = (12 − 2) × 180 = 10 × 180 = 1800°.",
          "Each angle = 1800 ÷ 12.",
          "= 150°."
        ],
        explanation: [
          "Sum = (12 − 2) × 180 = 1800°",
          "Each = 1800 ÷ 12 = <strong>150°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Two parallel lines are cut by a transversal. One interior angle on the left is <span class="math">3x + 10</span> degrees and the co-interior angle on the right is <span class="math">2x + 20</span> degrees. Find <span class="math">x</span>.',
        diagram: { type: "parallelLines", angle: 100, highlight: "co-interior" },
        answer: "30",
        hints: [
          "Co-interior angles with parallel lines sum to 180°.",
          "(3x + 10) + (2x + 20) = 180.",
          "5x + 30 = 180, so 5x = 150, x = 30."
        ],
        explanation: [
          "Co-interior angles sum to 180°.",
          "(3x + 10) + (2x + 20) = 180",
          "5x + 30 = 180 → 5x = 150",
          "x = <strong>30</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A regular polygon has each interior angle equal to 144°. How many sides does it have?',
        diagram: { type: "polygon", n: 10, angle: 144 },
        choices: ["8", "9", "10", "12"],
        answer: "10",
        hints: [
          "Each exterior angle = 180 − 144 = 36°.",
          "Number of sides = 360 ÷ exterior angle.",
          "360 ÷ 36 = 10."
        ],
        explanation: [
          "Exterior angle = 180 − 144 = 36°",
          "n = 360 ÷ 36 = <strong>10</strong> sides"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'In a triangle, the angles are in the ratio 3:5:7. What is the smallest angle in degrees?',
        diagram: { type: "triangle", angles: [36, 60, 84], labels: ["A", "B", "C"] },
        answer: "36",
        hints: [
          "Let the angles be 3x, 5x, and 7x.",
          "3x + 5x + 7x = 180, so 15x = 180, x = 12.",
          "Smallest = 3x = 3 × 12 = 36°."
        ],
        explanation: [
          "3x + 5x + 7x = 180",
          "15x = 180, x = 12",
          "Angles: 36°, 60°, 84°",
          "Smallest = <strong>36°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'An equilateral triangle has each angle measuring:',
        diagram: { type: "triangle", angles: [60, 60, 60], labels: ["A", "B", "C"] },
        choices: ["45°", "60°", "90°", "120°"],
        answer: "60°",
        hints: [
          "All three angles of an equilateral triangle are equal.",
          "They must sum to 180°.",
          "180 ÷ 3 = 60°."
        ],
        explanation: [
          "Equilateral triangle: all angles equal.",
          "180 ÷ 3 = <strong>60°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'An exterior angle of a triangle is 130°. The two non-adjacent interior angles are equal. What is each of those angles in degrees?',
        diagram: { type: "exteriorAngle", interior: [65, 65, 50], exterior: 130 },
        answer: "65",
        hints: [
          "An exterior angle equals the sum of the two non-adjacent interior angles.",
          "If those two angles are equal, call each x.",
          "2x = 130, so x = 65."
        ],
        explanation: [
          "Exterior angle = sum of two remote interior angles.",
          "2x = 130",
          "x = <strong>65°</strong>"
        ]
      },
      // ── 20 additional boss questions ──
      {
        type: "numeric", difficulty: 3,
        question: 'What is the sum of interior angles of a nonagon (9 sides)? Answer in degrees.',
        diagram: { type: "polygon", n: 9 },
        answer: "1260",
        hints: [
          "Use the polygon angle sum formula: (n − 2) × 180°.",
          "(9 − 2) × 180 = 7 × 180.",
          "= 1260."
        ],
        explanation: [
          "(9 − 2) × 180 = 7 × 180",
          "= <strong>1260°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Each interior angle of a regular nonagon (9 sides) measures:',
        diagram: { type: "polygon", n: 9, angle: 140 },
        choices: ["120°", "135°", "140°", "144°"],
        answer: "140°",
        hints: [
          "Sum of interior angles = (9 − 2) × 180 = 1260°.",
          "A regular nonagon has 9 equal angles.",
          "1260 ÷ 9 = 140°."
        ],
        explanation: [
          "Sum = (9 − 2) × 180 = 1260°",
          "Each angle = 1260 ÷ 9 = <strong>140°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A regular polygon has each exterior angle equal to 24°. How many sides does it have?',
        diagram: { type: "polygon", n: 15, exteriorAngle: 24 },
        answer: "15",
        hints: [
          "The sum of exterior angles of any polygon is 360°.",
          "Number of sides = 360 ÷ exterior angle.",
          "360 ÷ 24 = 15."
        ],
        explanation: [
          "Exterior angles sum to 360°.",
          "n = 360 ÷ 24 = <strong>15</strong> sides"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A regular polygon has each interior angle equal to 156°. How many sides does it have?',
        diagram: { type: "polygon", n: 15, angle: 156 },
        choices: ["12", "15", "18", "20"],
        answer: "15",
        hints: [
          "Each exterior angle = 180 − 156 = 24°.",
          "Number of sides = 360 ÷ 24.",
          "= 15."
        ],
        explanation: [
          "Exterior angle = 180 − 156 = 24°",
          "n = 360 ÷ 24 = <strong>15</strong> sides"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Two parallel lines are cut by a transversal. One angle is <span class="math">4x − 5</span> degrees and its alternate interior angle is <span class="math">3x + 15</span> degrees. Find <span class="math">x</span>.',
        diagram: { type: "parallelLines", angle: 75, highlight: "alternate" },
        answer: "20",
        hints: [
          "Alternate interior angles with parallel lines are equal.",
          "4x − 5 = 3x + 15.",
          "x = 20."
        ],
        explanation: [
          "Alternate interior angles are equal when lines are parallel.",
          "4x − 5 = 3x + 15",
          "x = <strong>20</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Two parallel lines are cut by a transversal. The corresponding angles are <span class="math">5x + 10</span> and <span class="math">7x − 20</span>. What is the measure of each angle?',
        diagram: { type: "parallelLines", angle: 85, highlight: "corresponding" },
        choices: ["75°", "85°", "95°", "105°"],
        answer: "85°",
        hints: [
          "Corresponding angles with parallel lines are equal: 5x + 10 = 7x − 20.",
          "30 = 2x, so x = 15.",
          "Each angle = 5(15) + 10 = 85°."
        ],
        explanation: [
          "5x + 10 = 7x − 20 → 30 = 2x → x = 15",
          "Angle = 5(15) + 10 = 75 + 10",
          "= <strong>85°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'In a triangle, one angle is twice the smallest angle, and the third angle is three times the smallest. What is the largest angle in degrees?',
        diagram: { type: "triangle", angles: [30, 60, 90], labels: ["A", "B", "C"] },
        answer: "90",
        hints: [
          "Let the smallest angle = x. The others are 2x and 3x.",
          "x + 2x + 3x = 180 → 6x = 180 → x = 30.",
          "Largest = 3x = 90°."
        ],
        explanation: [
          "x + 2x + 3x = 180 → 6x = 180 → x = 30",
          "Angles: 30°, 60°, 90°",
          "Largest = <strong>90°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'The interior angles of a quadrilateral are <span class="math">x</span>, <span class="math">2x</span>, <span class="math">3x</span>, and <span class="math">4x</span>. What is the largest angle?',
        diagram: { type: "polygon", n: 4 },
        choices: ["36°", "72°", "108°", "144°"],
        answer: "144°",
        hints: [
          "The sum of interior angles of a quadrilateral is 360°.",
          "x + 2x + 3x + 4x = 360 → 10x = 360 → x = 36.",
          "Largest = 4x = 4 × 36 = 144°."
        ],
        explanation: [
          "x + 2x + 3x + 4x = 360 → 10x = 360 → x = 36",
          "Angles: 36°, 72°, 108°, 144°",
          "Largest = <strong>144°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Two parallel lines are cut by a transversal. One angle is <span class="math">2x + 30</span> degrees. The alternate exterior angle is <span class="math">4x − 10</span> degrees. Find the angle measure in degrees.',
        diagram: { type: "parallelLines", angle: 70, highlight: "alternate" },
        answer: "70",
        hints: [
          "Alternate exterior angles are equal when lines are parallel.",
          "2x + 30 = 4x − 10 → 40 = 2x → x = 20.",
          "Angle = 2(20) + 30 = 70°."
        ],
        explanation: [
          "Alternate exterior angles are equal: 2x + 30 = 4x − 10",
          "40 = 2x → x = 20",
          "Angle = 2(20) + 30 = <strong>70°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the sum of interior angles of a 15-sided polygon?',
        diagram: { type: "polygon", n: 15 },
        choices: ["2160°", "2340°", "2520°", "2700°"],
        answer: "2340°",
        hints: [
          "Formula: (n − 2) × 180°.",
          "(15 − 2) × 180 = 13 × 180.",
          "= 2340°."
        ],
        explanation: [
          "(15 − 2) × 180 = 13 × 180",
          "= <strong>2340°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'An isosceles triangle has a base angle of <span class="math">3x + 5</span> degrees and a vertex angle of <span class="math">2x + 10</span> degrees. What is the vertex angle in degrees?',
        diagram: { type: "isosceles", vertex: 50, base: 65 },
        answer: "50",
        hints: [
          "In an isosceles triangle, the two base angles are equal.",
          "2(3x + 5) + (2x + 10) = 180.",
          "6x + 10 + 2x + 10 = 180 → 8x + 20 = 180 → 8x = 160 → x = 20. Vertex = 2(20) + 10 = 50."
        ],
        explanation: [
          "2(3x + 5) + (2x + 10) = 180",
          "8x + 20 = 180 → 8x = 160 → x = 20",
          "Vertex angle = 2(20) + 10 = <strong>50°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Each exterior angle of a regular polygon is 20°. How many sides does it have?',
        diagram: { type: "polygon", n: 18, exteriorAngle: 20 },
        choices: ["12", "15", "18", "20"],
        answer: "18",
        hints: [
          "Exterior angles sum to 360°.",
          "n = 360 ÷ exterior angle.",
          "n = 360 ÷ 20 = 18."
        ],
        explanation: [
          "Sum of exterior angles = 360°",
          "n = 360 ÷ 20 = <strong>18</strong> sides"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'An exterior angle of a triangle is 140°. One of the two non-adjacent interior angles is 75°. What is the other non-adjacent interior angle in degrees?',
        diagram: { type: "exteriorAngle", interior: [75, 65, 40], exterior: 140 },
        answer: "65",
        hints: [
          "An exterior angle equals the sum of the two remote interior angles.",
          "140 = 75 + x.",
          "x = 65."
        ],
        explanation: [
          "Exterior angle = sum of two remote interior angles",
          "140 = 75 + x",
          "x = <strong>65°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'In a triangle, angle A is 20° more than angle B, and angle C is 20° more than angle A. What is angle C?',
        diagram: { type: "triangle", angles: [60, 40, 80], labels: ["A", "B", "C"] },
        choices: ["40°", "60°", "80°", "100°"],
        answer: "80°",
        hints: [
          "Let B = x. Then A = x + 20, C = x + 40.",
          "x + (x + 20) + (x + 40) = 180 → 3x + 60 = 180 → x = 40.",
          "C = 40 + 40 = 80°."
        ],
        explanation: [
          "B = x, A = x + 20, C = x + 40",
          "3x + 60 = 180 → x = 40",
          "C = 40 + 40 = <strong>80°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Each interior angle of a regular polygon is 160°. How many sides does it have?',
        diagram: { type: "polygon", n: 18, angle: 160 },
        answer: "18",
        hints: [
          "Each exterior angle = 180 − 160 = 20°.",
          "n = 360 ÷ 20.",
          "= 18."
        ],
        explanation: [
          "Exterior angle = 180 − 160 = 20°",
          "n = 360 ÷ 20 = <strong>18</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two parallel lines are cut by a transversal creating 8 angles. If one angle is 52°, how many of the 8 angles measure 52°?',
        diagram: { type: "parallelLines", angle: 52, highlight: "corresponding" },
        choices: ["2", "3", "4", "6"],
        answer: "4",
        hints: [
          "Corresponding angles are equal, and vertical angles are equal.",
          "So 4 of the 8 angles equal 52° and the other 4 equal 128°.",
          "Answer: 4."
        ],
        explanation: [
          "With parallel lines and a transversal, angles come in two groups.",
          "4 angles are 52° (vertical + corresponding pairs)",
          "4 angles are 180° − 52° = 128°. So <strong>4</strong> angles measure 52°."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'The angles of a pentagon are <span class="math">x</span>, <span class="math">x + 20</span>, <span class="math">x + 40</span>, <span class="math">x + 60</span>, and <span class="math">x + 80</span>. What is the largest angle in degrees?',
        diagram: { type: "polygon", n: 5 },
        answer: "148",
        hints: [
          "Sum of interior angles of a pentagon = 540°.",
          "x + (x+20) + (x+40) + (x+60) + (x+80) = 540.",
          "5x + 200 = 540 → 5x = 340 → x = 68. Largest = 68 + 80 = 148°."
        ],
        explanation: [
          "5x + 200 = 540 → 5x = 340 → x = 68",
          "Angles: 68°, 88°, 108°, 128°, 148°",
          "Largest = <strong>148°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A regular polygon has interior angles of 168°. How many sides does it have?',
        diagram: { type: "polygon", n: 30, angle: 168 },
        choices: ["20", "24", "30", "36"],
        answer: "30",
        hints: [
          "Each exterior angle = 180 − 168 = 12°.",
          "n = 360 ÷ 12.",
          "= 30."
        ],
        explanation: [
          "Exterior angle = 180 − 168 = 12°",
          "n = 360 ÷ 12 = <strong>30</strong> sides"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'In a parallelogram, one angle is 65°. What is the angle adjacent to it in degrees?',
        diagram: { type: "supplementary", a: 65, b: 115 },
        answer: "115",
        hints: [
          "In a parallelogram, consecutive angles are supplementary (sum to 180°).",
          "180 − 65 = 115.",
          "The adjacent angle is 115°."
        ],
        explanation: [
          "Consecutive angles in a parallelogram sum to 180°.",
          "180 − 65 = <strong>115°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'The three angles of a triangle are <span class="math">x + 5</span>, <span class="math">2x − 5</span>, and <span class="math">90</span>. What is the value of the largest non-right angle in degrees?',
        diagram: { type: "triangle", angles: [35, 55, 90], labels: ["A", "B", "C"] },
        choices: ["35°", "45°", "55°", "65°"],
        answer: "55°",
        hints: [
          "(x + 5) + (2x − 5) + 90 = 180.",
          "3x + 90 = 180 → 3x = 90 → x = 30.",
          "Angles: 35°, 55°, 90°. Largest non-right angle = 55°."
        ],
        explanation: [
          "3x + 90 = 180 → x = 30",
          "Angles: 30 + 5 = 35°, 2(30) − 5 = 55°, 90°",
          "Largest non-right angle = <strong>55°</strong>"
        ]
      }
    ]
  }
};

// ============================================================
// WORLD 10 — Perimeter Plains
// Chapter: Perimeter & Area
// ============================================================
WORLDS[10] = {
  id: 10, name: "Perimeter Plains", icon: "🌾",
  chapter: "Perimeter & Area", color: "#8bc34a",
  bossName: "Perimetus, the Boundary Beast",
  bossDesc: "A shape-shifting creature that morphs between squares, triangles, and circles",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'What is the perimeter of a rectangle with length 8 and width 5?',
        diagram: { type: "rectangle", l: 8, w: 5 },
        answer: "26",
        hints: [
          "Perimeter = 2 × (length + width).",
          "= 2 × (8 + 5) = 2 × 13.",
          "= 26."
        ],
        explanation: [
          "P = 2(l + w) = 2(8 + 5) = 2 × 13",
          "= <strong>26</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is the area of a rectangle with length 7 and width 4?',
        diagram: { type: "rectangle", l: 7, w: 4 },
        answer: "28",
        hints: [
          "Area of a rectangle = length × width.",
          "= 7 × 4.",
          "= 28."
        ],
        explanation: [
          "A = l × w = 7 × 4",
          "= <strong>28</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is the perimeter of a square with side length 6?',
        diagram: { type: "square", s: 6 },
        choices: ["12", "24", "36", "18"],
        answer: "24",
        hints: [
          "A square has 4 equal sides.",
          "Perimeter = 4 × side.",
          "= 4 × 6 = 24."
        ],
        explanation: [
          "P = 4 × s = 4 × 6",
          "= <strong>24</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'A square has side length 9. What is its area?',
        diagram: { type: "square", s: 9 },
        answer: "81",
        hints: [
          "Area of a square = side × side.",
          "= 9 × 9.",
          "= 81."
        ],
        explanation: [
          "A = s² = 9² = 9 × 9",
          "= <strong>81</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is the area of a triangle with base 10 and height 6?',
        diagram: { type: "triangleArea", base: 10, height: 6 },
        choices: ["60", "30", "16", "20"],
        answer: "30",
        hints: [
          "Area of a triangle = ½ × base × height.",
          "= ½ × 10 × 6 = ½ × 60.",
          "= 30."
        ],
        explanation: [
          "A = ½ × b × h = ½ × 10 × 6",
          "= <strong>30</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is the area of a triangle with base 12 and height 5?',
        diagram: { type: "triangleArea", base: 12, height: 5 },
        answer: "30",
        hints: [
          "Area = ½ × base × height.",
          "= ½ × 12 × 5 = ½ × 60.",
          "= 30."
        ],
        explanation: [
          "A = ½ × 12 × 5 = ½ × 60",
          "= <strong>30</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A square has a perimeter of 20. What is its side length?',
        diagram: { type: "square", s: 5 },
        choices: ["4", "5", "10", "20"],
        answer: "5",
        hints: [
          "Perimeter = 4 × side.",
          "20 = 4 × side.",
          "side = 20 ÷ 4 = 5."
        ],
        explanation: [
          "P = 4s → 20 = 4s",
          "s = 20 ÷ 4 = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is the perimeter of a rectangle with length 11 and width 3?',
        diagram: { type: "rectangle", l: 11, w: 3 },
        answer: "28",
        hints: [
          "P = 2(l + w).",
          "= 2(11 + 3) = 2 × 14.",
          "= 28."
        ],
        explanation: [
          "P = 2(11 + 3) = 2 × 14",
          "= <strong>28</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is the circumference of a circle with radius 7? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 7 },
        choices: ["22", "44", "88", "154"],
        answer: "44",
        hints: [
          "Circumference = 2 × π × r.",
          "= 2 × (22/7) × 7.",
          "= 2 × 22 = 44."
        ],
        explanation: [
          "C = 2πr = 2 × (22/7) × 7",
          "= 2 × 22 = <strong>44</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is the area of a circle with radius 7? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 7 },
        answer: "154",
        hints: [
          "Area = π × r².",
          "= (22/7) × 7² = (22/7) × 49.",
          "= 22 × 7 = 154."
        ],
        explanation: [
          "A = πr² = (22/7) × 49",
          "= 22 × 7 = <strong>154</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is the area of a circle with radius 5? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "circle", r: 5 },
        choices: ["31", "50", "79", "314"],
        answer: "79",
        hints: [
          "A = π × r² = 3.14 × 5².",
          "= 3.14 × 25 = 78.5.",
          "Rounded to the nearest whole number = 79."
        ],
        explanation: [
          "A = πr² = 3.14 × 25 = 78.5",
          "≈ <strong>79</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is the area of a rectangle with length 15 and width 8?',
        diagram: { type: "rectangle", l: 15, w: 8 },
        answer: "120",
        hints: [
          "Area = length × width.",
          "= 15 × 8.",
          "= 120."
        ],
        explanation: [
          "A = 15 × 8",
          "= <strong>120</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A triangle has base 14 and height 8. What is its area?',
        diagram: { type: "triangleArea", base: 14, height: 8 },
        choices: ["56", "112", "22", "44"],
        answer: "56",
        hints: [
          "Area = ½ × base × height.",
          "= ½ × 14 × 8 = ½ × 112.",
          "= 56."
        ],
        explanation: [
          "A = ½ × 14 × 8 = ½ × 112",
          "= <strong>56</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is the circumference of a circle with diameter 10? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "circle", r: 5, showDiameter: true },
        answer: "31",
        hints: [
          "Circumference = π × diameter.",
          "= 3.14 × 10.",
          "= 31.4 ≈ 31."
        ],
        explanation: [
          "C = πd = 3.14 × 10 = 31.4",
          "≈ <strong>31</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A rectangle has area 36 and width 4. What is its length?',
        diagram: { type: "rectangle", l: 9, w: 4 },
        choices: ["6", "8", "9", "12"],
        answer: "9",
        hints: [
          "Area = length × width.",
          "36 = length × 4.",
          "length = 36 ÷ 4 = 9."
        ],
        explanation: [
          "A = l × w → 36 = l × 4",
          "l = 36 ÷ 4 = <strong>9</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'What is the area of a parallelogram with base 12 and height 8?',
        diagram: { type: "parallelogram", b: 12, h: 8 },
        answer: "96",
        hints: [
          "Area of a parallelogram = base × height.",
          "= 12 × 8.",
          "= 96."
        ],
        explanation: [
          "A = b × h = 12 × 8",
          "= <strong>96</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is the area of a parallelogram with base 15 and height 7?',
        diagram: { type: "parallelogram", b: 15, h: 7 },
        choices: ["22", "44", "105", "210"],
        answer: "105",
        hints: [
          "Area of a parallelogram = base × height.",
          "= 15 × 7.",
          "= 105."
        ],
        explanation: [
          "A = b × h = 15 × 7",
          "= <strong>105</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A trapezoid has parallel sides of 8 and 12, and a height of 5. What is its area?',
        diagram: { type: "trapezoid", b1: 8, b2: 12, h: 5 },
        answer: "50",
        hints: [
          "Trapezoid area = ½ × (base₁ + base₂) × height.",
          "= ½ × (8 + 12) × 5 = ½ × 20 × 5.",
          "= ½ × 100 = 50."
        ],
        explanation: [
          "A = ½(b₁ + b₂) × h = ½(8 + 12) × 5",
          "= ½ × 20 × 5 = ½ × 100",
          "= <strong>50</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A trapezoid has parallel sides of 10 and 14, and height 6. What is its area?',
        diagram: { type: "trapezoid", b1: 10, b2: 14, h: 6 },
        choices: ["60", "72", "84", "144"],
        answer: "72",
        hints: [
          "A = ½(b₁ + b₂) × h.",
          "= ½(10 + 14) × 6 = ½ × 24 × 6.",
          "= ½ × 144 = 72."
        ],
        explanation: [
          "A = ½(10 + 14) × 6 = ½ × 24 × 6",
          "= ½ × 144 = <strong>72</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A rectangle has area 48 and width 6. What is its perimeter?',
        diagram: { type: "rectangle", l: 8, w: 6 },
        answer: "28",
        hints: [
          "First find the length: 48 ÷ 6 = 8.",
          "Perimeter = 2(length + width) = 2(8 + 6).",
          "= 2 × 14 = 28."
        ],
        explanation: [
          "Length = 48 ÷ 6 = 8",
          "P = 2(8 + 6) = 2 × 14 = <strong>28</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is the area of a circle with radius 10? (Use <span class="math">π ≈ 3.14</span>)',
        diagram: { type: "circle", r: 10 },
        answer: "314",
        hints: [
          "A = π × r².",
          "= 3.14 × 10² = 3.14 × 100.",
          "= 314."
        ],
        explanation: [
          "A = πr² = 3.14 × 100",
          "= <strong>314</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A circle has diameter 14. What is its area? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 7, showDiameter: true },
        choices: ["44", "88", "154", "616"],
        answer: "154",
        hints: [
          "Diameter = 14, so radius = 7.",
          "A = π × r² = (22/7) × 49.",
          "= 22 × 7 = 154."
        ],
        explanation: [
          "Radius = 14 ÷ 2 = 7",
          "A = (22/7) × 49 = 22 × 7 = <strong>154</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is the circumference of a circle with radius 14? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 14 },
        answer: "88",
        hints: [
          "C = 2 × π × r.",
          "= 2 × (22/7) × 14.",
          "= 2 × 22 × 2 = 88."
        ],
        explanation: [
          "C = 2πr = 2 × (22/7) × 14",
          "= 2 × 44 = <strong>88</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'An L-shaped figure is a 10×6 rectangle with a 3×2 rectangle cut from one corner. What is the area?',
        diagram: { type: "rectangle", l: 10, w: 6 },
        choices: ["48", "54", "56", "60"],
        answer: "54",
        hints: [
          "Full rectangle area = 10 × 6 = 60.",
          "Cut out area = 3 × 2 = 6.",
          "Remaining = 60 − 6 = 54."
        ],
        explanation: [
          "Full rectangle = 10 × 6 = 60",
          "Cut out = 3 × 2 = 6",
          "L-shape area = 60 − 6 = <strong>54</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A rectangular garden is 20 m long and 12 m wide. A 2 m wide path runs around the outside. What is the area of the path alone?',
        diagram: { type: "rectangle", l: 20, w: 12 },
        answer: "144",
        hints: [
          "Outer dimensions: (20+4) × (12+4) = 24 × 16 (add 2m on each side).",
          "Outer area = 24 × 16 = 384. Inner area = 20 × 12 = 240.",
          "Path area = 384 − 240 = 144."
        ],
        explanation: [
          "Outer: (20 + 2 + 2) × (12 + 2 + 2) = 24 × 16 = 384",
          "Inner: 20 × 12 = 240",
          "Path = 384 − 240 = <strong>144</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A triangle has base 16 and area 72. What is its height?',
        diagram: { type: "triangleArea", base: 16, height: 9 },
        answer: "9",
        hints: [
          "Area = ½ × base × height.",
          "72 = ½ × 16 × h → 72 = 8h.",
          "h = 72 ÷ 8 = 9."
        ],
        explanation: [
          "72 = ½ × 16 × h",
          "72 = 8h",
          "h = 72 ÷ 8 = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A square has area 64. What is its perimeter?',
        diagram: { type: "square", s: 8 },
        choices: ["16", "24", "32", "64"],
        answer: "32",
        hints: [
          "Area = s², so s² = 64, meaning s = 8.",
          "Perimeter = 4 × s = 4 × 8.",
          "= 32."
        ],
        explanation: [
          "s = √64 = 8",
          "P = 4 × 8 = <strong>32</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A circle has area <span class="math">154</span> square units. What is its radius? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 7 },
        answer: "7",
        hints: [
          "A = πr², so 154 = (22/7) × r².",
          "r² = 154 × (7/22) = 154 × 7 / 22.",
          "r² = 1078/22 = 49, so r = 7."
        ],
        explanation: [
          "154 = (22/7) × r²",
          "r² = 154 × 7/22 = 49",
          "r = √49 = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A circle has circumference <span class="math">31.4</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
        diagram: { type: "circle", r: 5 },
        choices: ["5", "10", "15", "3.14"],
        answer: "5",
        hints: [
          "C = 2πr, so 31.4 = 2 × 3.14 × r.",
          "31.4 = 6.28 × r.",
          "r = 31.4 ÷ 6.28 = 5."
        ],
        explanation: [
          "31.4 = 2 × 3.14 × r",
          "31.4 = 6.28r",
          "r = 31.4 ÷ 6.28 = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is the area of a circle with radius 4? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "circle", r: 4 },
        answer: "50",
        hints: [
          "A = πr² = 3.14 × 4².",
          "= 3.14 × 16 = 50.24.",
          "Rounded = 50."
        ],
        explanation: [
          "A = 3.14 × 16 = 50.24",
          "≈ <strong>50</strong>"
        ]
      }
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'A right triangle has legs 6 and 8. What is its area?',
        diagram: { type: "triangleArea", base: 8, height: 6 },
        answer: "24",
        hints: [
          "For a right triangle, the two legs serve as the base and height.",
          "A = ½ × 6 × 8 = ½ × 48.",
          "= 24."
        ],
        explanation: [
          "A = ½ × base × height = ½ × 6 × 8",
          "= ½ × 48 = <strong>24</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the area of a circle with diameter 10? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "circle", r: 5, showDiameter: true },
        choices: ["31", "50", "79", "314"],
        answer: "79",
        hints: [
          "Diameter = 10, so radius = 5.",
          "A = πr² = 3.14 × 25 = 78.5.",
          "Rounded = 79."
        ],
        explanation: [
          "Radius = 10 ÷ 2 = 5",
          "A = 3.14 × 25 = 78.5 ≈ <strong>79</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A semicircle has diameter 14. What is its area? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 7, showDiameter: true },
        answer: "77",
        hints: [
          "Radius = 14 ÷ 2 = 7.",
          "Full circle area = (22/7) × 49 = 154.",
          "Semicircle = 154 ÷ 2 = 77."
        ],
        explanation: [
          "Radius = 7",
          "Full circle area = (22/7) × 49 = 154",
          "Semicircle area = 154 ÷ 2 = <strong>77</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'An L-shaped room is a 10×8 rectangle with a 4×3 rectangle cut from one corner. What is the area?',
        diagram: { type: "rectangle", l: 10, w: 8 },
        choices: ["56", "60", "68", "80"],
        answer: "68",
        hints: [
          "Full rectangle = 10 × 8 = 80.",
          "Cut out = 4 × 3 = 12.",
          "Area = 80 − 12 = 68."
        ],
        explanation: [
          "Full rectangle = 10 × 8 = 80",
          "Cut out = 4 × 3 = 12",
          "L-shape = 80 − 12 = <strong>68</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A shape consists of a rectangle (length 10, width 6) with a semicircle added to one of the shorter ends. What is the total area? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "compositeShape", l: 10, w: 6, extra: "semicircle" },
        answer: "74",
        hints: [
          "Rectangle area = 10 × 6 = 60.",
          "The semicircle sits on the width (6), so its diameter = 6 and radius = 3.",
          "Semicircle area = ½ × 3.14 × 9 = 14.13. Total ≈ 60 + 14 = 74."
        ],
        explanation: [
          "Rectangle = 10 × 6 = 60",
          "Semicircle radius = 3, area = ½ × 3.14 × 9 = 14.13",
          "Total = 60 + 14.13 = 74.13 ≈ <strong>74</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rectangle has perimeter 30 and length 9. What is its area?',
        diagram: { type: "rectangle", l: 9, w: 6 },
        answer: "54",
        hints: [
          "P = 2(l + w) → 30 = 2(9 + w) → 15 = 9 + w → w = 6.",
          "Area = l × w = 9 × 6.",
          "= 54."
        ],
        explanation: [
          "30 = 2(9 + w) → 15 = 9 + w → w = 6",
          "A = 9 × 6 = <strong>54</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A circle has area 314 square units. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
        diagram: { type: "circle", r: 10, showDiameter: true },
        choices: ["5", "10", "20", "100"],
        answer: "20",
        hints: [
          "A = πr² → 314 = 3.14 × r².",
          "r² = 314 ÷ 3.14 = 100, so r = 10.",
          "Diameter = 2 × 10 = 20."
        ],
        explanation: [
          "314 = 3.14 × r² → r² = 100 → r = 10",
          "Diameter = 2 × 10 = <strong>20</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A trapezoid has area 60, height 6, and one parallel side of 8. What is the other parallel side?',
        diagram: { type: "trapezoid", b1: 8, b2: 12, h: 6 },
        answer: "12",
        hints: [
          "A = ½(b₁ + b₂) × h.",
          "60 = ½(8 + b₂) × 6 → 60 = 3(8 + b₂).",
          "20 = 8 + b₂ → b₂ = 12."
        ],
        explanation: [
          "60 = ½(8 + b₂) × 6",
          "60 = 3(8 + b₂) → 20 = 8 + b₂",
          "b₂ = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A figure is made of two identical semicircles placed on opposite sides of a 10×10 square (on the two sides of length 10). What is the total area? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "square", s: 10 },
        choices: ["139", "157", "179", "200"],
        answer: "179",
        hints: [
          "Square area = 10 × 10 = 100.",
          "Each semicircle has diameter 10, so radius = 5. Each area = ½ × 3.14 × 25 = 39.25.",
          "Total = 100 + 39.25 + 39.25 = 178.5 ≈ 179."
        ],
        explanation: [
          "Square = 100",
          "Each semicircle = ½ × 3.14 × 25 = 39.25",
          "Total = 100 + 39.25 + 39.25 = 178.5 ≈ <strong>179</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A parallelogram has area 84 and base 12. What is its height?',
        diagram: { type: "parallelogram", b: 12, h: 7 },
        answer: "7",
        hints: [
          "Area = base × height.",
          "84 = 12 × h.",
          "h = 84 ÷ 12 = 7."
        ],
        explanation: [
          "84 = 12 × h",
          "h = 84 ÷ 12 = <strong>7</strong>"
        ]
      },
      // ── 20 additional boss questions ──
      {
        type: "numeric", difficulty: 3,
        question: 'A rectangle is 14 cm long and 10 cm wide. A triangle with base 14 and height 10 is cut from it. What is the area of the remaining piece?',
        diagram: { type: "rectangle", l: 14, w: 10 },
        answer: "70",
        hints: [
          "Rectangle area = 14 × 10 = 140.",
          "Triangle area = ½ × 14 × 10 = 70.",
          "Remaining = 140 − 70 = 70."
        ],
        explanation: [
          "Rectangle = 14 × 10 = 140",
          "Triangle = ½ × 14 × 10 = 70",
          "Remaining = 140 − 70 = <strong>70</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A circular pizza has radius 7 inches. A square box perfectly fits around it. What is the area of the box? (Just the box, not the pizza.)',
        diagram: { type: "circle", r: 7 },
        choices: ["49 sq in", "98 sq in", "196 sq in", "154 sq in"],
        answer: "196 sq in",
        hints: [
          "The box side length equals the diameter of the pizza.",
          "Diameter = 2 × 7 = 14.",
          "Box area = 14 × 14 = 196."
        ],
        explanation: [
          "Diameter = 2 × 7 = 14",
          "Box side = 14",
          "Box area = 14² = <strong>196 sq in</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A square has the same perimeter as a rectangle with length 15 and width 9. What is the area of the square?',
        diagram: { type: "square", s: 12 },
        answer: "144",
        hints: [
          "Rectangle perimeter = 2(15 + 9) = 48.",
          "Square perimeter = 48, so side = 48 ÷ 4 = 12.",
          "Area = 12² = 144."
        ],
        explanation: [
          "Rectangle P = 2(15 + 9) = 48",
          "Square side = 48 ÷ 4 = 12",
          "Area = 12² = <strong>144</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A running track consists of a rectangle (100 m × 40 m) with a semicircle on each shorter end. What is the total perimeter of the track? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "compositeShape", l: 100, w: 40, extra: "semicircle" },
        choices: ["326 m", "406 m", "280 m", "226 m"],
        answer: "326 m",
        hints: [
          "The two straight sides = 2 × 100 = 200 m.",
          "The two semicircles form one full circle with diameter 40, so circumference = π × 40 = 3.14 × 40 = 125.6.",
          "Total = 200 + 125.6 = 325.6 ≈ 326 m."
        ],
        explanation: [
          "Straight sides: 2 × 100 = 200 m",
          "Circle (from two semicircles): π × 40 = 125.6 m",
          "Total = 200 + 125.6 ≈ <strong>326 m</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A triangle has sides 5, 12, and 13. What is its area? (Hint: check if it is a right triangle.)',
        diagram: { type: "triangleArea", base: 12, height: 5 },
        answer: "30",
        hints: [
          "Check: 5² + 12² = 25 + 144 = 169 = 13². It is a right triangle!",
          "The legs are 5 and 12.",
          "Area = ½ × 5 × 12 = 30."
        ],
        explanation: [
          "5² + 12² = 169 = 13² → right triangle",
          "Area = ½ × 5 × 12",
          "= <strong>30</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A square garden has area 225 m². A path 3 m wide runs all around the outside. What is the area of the path alone?',
        diagram: { type: "square", s: 15 },
        choices: ["96 m²", "108 m²", "126 m²", "216 m²"],
        answer: "216 m²",
        hints: [
          "Side of square = √225 = 15 m.",
          "Outer dimensions: 15 + 3 + 3 = 21 m on each side. Outer area = 21² = 441.",
          "Path area = 441 − 225 = 216."
        ],
        explanation: [
          "Side = √225 = 15. Outer side = 15 + 6 = 21",
          "Outer area = 21² = 441",
          "Path = 441 − 225 = <strong>216 m²</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A quarter-circle has radius 8. What is its area? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "circle", r: 8 },
        answer: "50",
        hints: [
          "Full circle area = π × r² = 3.14 × 64 = 200.96.",
          "Quarter-circle = 200.96 ÷ 4 = 50.24.",
          "Rounded = 50."
        ],
        explanation: [
          "Full circle = 3.14 × 64 = 200.96",
          "Quarter = 200.96 ÷ 4 = 50.24",
          "≈ <strong>50</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A rectangle has length <span class="math">2x + 3</span> and width <span class="math">x + 1</span>. Its perimeter is 38. What is its area?',
        diagram: { type: "rectangle", l: 13, w: 6 },
        choices: ["60", "72", "78", "90"],
        answer: "78",
        hints: [
          "P = 2(l + w) → 38 = 2((2x+3) + (x+1)) = 2(3x+4) = 6x+8.",
          "6x + 8 = 38 → 6x = 30 → x = 5.",
          "Length = 2(5)+3 = 13, width = 5+1 = 6. Area = 13 × 6 = 78."
        ],
        explanation: [
          "38 = 2(3x + 4) → 19 = 3x + 4 → x = 5",
          "Length = 2(5) + 3 = 13, Width = 5 + 1 = 6",
          "Area = 13 × 6 = <strong>78</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A circle is inscribed inside a square of side 10. What is the area of the shaded region between the square and circle? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "square", s: 10 },
        answer: "22",
        hints: [
          "Square area = 10 × 10 = 100.",
          "The inscribed circle has diameter 10, so radius = 5. Circle area = 3.14 × 25 = 78.5.",
          "Shaded region = 100 − 78.5 = 21.5 ≈ 22."
        ],
        explanation: [
          "Square = 100",
          "Circle = 3.14 × 25 = 78.5",
          "Shaded = 100 − 78.5 = 21.5 ≈ <strong>22</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A trapezoid has parallel sides of 15 and 9, and height 8. What is its area?',
        diagram: { type: "trapezoid", b1: 9, b2: 15, h: 8 },
        choices: ["72", "84", "96", "120"],
        answer: "96",
        hints: [
          "A = ½ × (b₁ + b₂) × h.",
          "= ½ × (15 + 9) × 8 = ½ × 24 × 8.",
          "= ½ × 192 = 96."
        ],
        explanation: [
          "A = ½(15 + 9) × 8 = ½ × 24 × 8",
          "= ½ × 192",
          "= <strong>96</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Two concentric circles have radii 10 and 6. What is the area of the ring (annulus) between them? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "circle", r: 10 },
        answer: "201",
        hints: [
          "Outer circle area = 3.14 × 10² = 314.",
          "Inner circle area = 3.14 × 6² = 113.04.",
          "Ring area = 314 − 113.04 = 200.96 ≈ 201."
        ],
        explanation: [
          "Outer = 3.14 × 100 = 314",
          "Inner = 3.14 × 36 = 113.04",
          "Ring = 314 − 113.04 ≈ <strong>201</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A right triangle has legs 9 and 12. What is its perimeter?',
        diagram: { type: "triangleArea", base: 12, height: 9 },
        choices: ["30", "36", "42", "54"],
        answer: "36",
        hints: [
          "First find the hypotenuse: 9² + 12² = 81 + 144 = 225. √225 = 15.",
          "Perimeter = 9 + 12 + 15.",
          "= 36."
        ],
        explanation: [
          "Hypotenuse = √(81 + 144) = √225 = 15",
          "Perimeter = 9 + 12 + 15",
          "= <strong>36</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rectangular field 30 m × 20 m has a circular pond of radius 5 m in the center. What is the area of the field excluding the pond? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "rectangle", l: 30, w: 20 },
        answer: "522",
        hints: [
          "Field area = 30 × 20 = 600.",
          "Pond area = 3.14 × 5² = 3.14 × 25 = 78.5.",
          "Remaining = 600 − 78.5 = 521.5 ≈ 522."
        ],
        explanation: [
          "Field = 30 × 20 = 600",
          "Pond = 3.14 × 25 = 78.5",
          "Remaining = 600 − 78.5 ≈ <strong>522</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A parallelogram has base 16 and a side of 10. The height corresponding to the base is 8. What is its area?',
        diagram: { type: "parallelogram", b: 16, h: 8 },
        choices: ["80", "128", "160", "96"],
        answer: "128",
        hints: [
          "Area of a parallelogram = base × height.",
          "= 16 × 8.",
          "= 128. (The side length 10 is not needed for area.)"
        ],
        explanation: [
          "A = base × height (not base × side!)",
          "A = 16 × 8",
          "= <strong>128</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A figure is made by removing a semicircle (diameter 8) from the top of a rectangle (8 × 12). What is the remaining area? (Use <span class="math">π ≈ 3.14</span>, round to nearest whole number)',
        diagram: { type: "compositeShape", l: 8, w: 12, extra: "semicircle" },
        answer: "71",
        hints: [
          "Rectangle area = 8 × 12 = 96.",
          "Semicircle radius = 4. Semicircle area = ½ × 3.14 × 16 = 25.12.",
          "Remaining = 96 − 25.12 = 70.88 ≈ 71."
        ],
        explanation: [
          "Rectangle = 8 × 12 = 96",
          "Semicircle = ½ × 3.14 × 16 = 25.12",
          "Remaining = 96 − 25.12 ≈ <strong>71</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A triangle has area 60 and its base is 15. A rectangle has the same height as the triangle and width 8. What is the rectangle\'s area?',
        diagram: { type: "triangleArea", base: 15, height: 8 },
        choices: ["48", "56", "64", "120"],
        answer: "64",
        hints: [
          "Triangle: 60 = ½ × 15 × h → h = 8.",
          "Rectangle area = width × height = 8 × 8.",
          "= 64."
        ],
        explanation: [
          "Triangle: 60 = ½ × 15 × h → h = 8",
          "Rectangle = 8 × 8",
          "= <strong>64</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A circle has circumference 44. What is its area? (Use <span class="math">π ≈ 22/7</span>)',
        diagram: { type: "circle", r: 7 },
        answer: "154",
        hints: [
          "C = 2πr → 44 = 2 × (22/7) × r → 44 = (44/7) × r → r = 7.",
          "A = πr² = (22/7) × 49.",
          "= 22 × 7 = 154."
        ],
        explanation: [
          "44 = 2 × (22/7) × r → r = 7",
          "A = (22/7) × 49 = 22 × 7",
          "= <strong>154</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'An equilateral triangle has side 6. What is its perimeter plus the perimeter of a square with the same side length?',
        diagram: { type: "square", s: 6 },
        choices: ["36", "42", "48", "54"],
        answer: "42",
        hints: [
          "Triangle perimeter = 3 × 6 = 18.",
          "Square perimeter = 4 × 6 = 24.",
          "Total = 18 + 24 = 42."
        ],
        explanation: [
          "Triangle P = 3 × 6 = 18",
          "Square P = 4 × 6 = 24",
          "Total = 18 + 24 = <strong>42</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A rectangle has perimeter 46 and width 8. What is its area?',
        diagram: { type: "rectangle", l: 15, w: 8 },
        answer: "120",
        hints: [
          "P = 2(l + w) → 46 = 2(l + 8) → 23 = l + 8 → l = 15.",
          "Area = 15 × 8.",
          "= 120."
        ],
        explanation: [
          "46 = 2(l + 8) → l = 15",
          "Area = 15 × 8",
          "= <strong>120</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A square and a circle have the same area of 100 square units. Which has a larger perimeter? (Use <span class="math">π ≈ 3.14</span>)',
        diagram: { type: "square", s: 10 },
        choices: ["The square", "The circle", "They are equal", "Cannot be determined"],
        answer: "The square",
        hints: [
          "Square: side = √100 = 10, perimeter = 4 × 10 = 40.",
          "Circle: πr² = 100 → r² ≈ 31.85 → r ≈ 5.64. Circumference = 2 × 3.14 × 5.64 ≈ 35.4.",
          "40 > 35.4, so the square has the larger perimeter."
        ],
        explanation: [
          "Square: side = 10, P = 40",
          "Circle: r = √(100/3.14) ≈ 5.64, C = 2π(5.64) ≈ 35.4",
          "The <strong>square</strong> has the larger perimeter (40 > 35.4)."
        ]
      }
    ]
  }
};

// ============================================================
// WORLD 11 — Triangle Towers
// Chapter: Right Triangles & Quadrilaterals
// ============================================================
WORLDS[11] = {
  id: 11, name: "Triangle Towers", icon: "🔺",
  chapter: "Right Triangles & Quads", color: "#3f51b5",
  bossName: "Pythagos, the Triangle Terror",
  bossDesc: "A three-sided flying creature with a glowing right angle",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'In a right triangle with legs 3 and 4, what is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 3, b: 4, c: 5, showUnknown: "c" },
        choices: ["5", "6", "7", "12"],
        answer: "5",
        hints: [
          "Use the Pythagorean theorem: a² + b² = c².",
          "3² + 4² = 9 + 16 = 25.",
          "c = √25 = 5."
        ],
        explanation: [
          "3² + 4² = 9 + 16 = 25",
          "c = √25 = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which of these is a Pythagorean triple?',
        diagram: { type: "rightTriangle", a: 3, b: 4, c: 5 },
        choices: ["3, 4, 5", "2, 3, 4", "4, 5, 6", "1, 2, 3"],
        answer: "3, 4, 5",
        hints: [
          "A Pythagorean triple satisfies a² + b² = c².",
          "Check 3, 4, 5: 9 + 16 = 25 = 5². Yes!",
          "Check 2, 3, 4: 4 + 9 = 13 ≠ 16. No."
        ],
        explanation: [
          "3² + 4² = 9 + 16 = 25 = 5² ✓",
          "<strong>3, 4, 5</strong> is a Pythagorean triple."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'A right triangle has legs 5 and 12. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "c" },
        answer: "13",
        hints: [
          "a² + b² = c².",
          "5² + 12² = 25 + 144 = 169.",
          "c = √169 = 13."
        ],
        explanation: [
          "5² + 12² = 25 + 144 = 169",
          "c = √169 = <strong>13</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'The Pythagorean theorem states that in a right triangle:',
        diagram: { type: "rightTriangle", a: 3, b: 4, c: 5 },
        choices: ["a + b = c", "a² + b² = c²", "a² − b² = c²", "2a + 2b = c"],
        answer: "a² + b² = c²",
        hints: [
          "The theorem relates the squares of the sides.",
          "The sum of the squares of the two legs equals the square of the hypotenuse.",
          "a² + b² = c²."
        ],
        explanation: [
          "The Pythagorean theorem: the sum of the squares of the two legs equals the square of the hypotenuse.",
          "<strong>a² + b² = c²</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'A right triangle has legs 8 and 15. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 8, b: 15, c: 17, showUnknown: "c" },
        answer: "17",
        hints: [
          "8² + 15² = 64 + 225 = 289.",
          "√289 = ?",
          "√289 = 17."
        ],
        explanation: [
          "8² + 15² = 64 + 225 = 289",
          "c = √289 = <strong>17</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is the sum of interior angles of any quadrilateral?',
        diagram: { type: "quadrilateral", shape: "parallelogram" },
        choices: ["180°", "270°", "360°", "540°"],
        answer: "360°",
        hints: [
          "A quadrilateral can be divided into 2 triangles.",
          "Each triangle has angles summing to 180°.",
          "2 × 180° = 360°."
        ],
        explanation: [
          "(4 − 2) × 180 = 2 × 180",
          "= <strong>360°</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A parallelogram has opposite sides that are:',
        diagram: { type: "quadrilateral", shape: "parallelogram", sides: [10, 6, 10, 6] },
        choices: ["Equal and parallel", "Perpendicular", "Different lengths", "All 90°"],
        answer: "Equal and parallel",
        hints: [
          "Think about what makes a parallelogram special.",
          "Its opposite sides never meet (parallel) and are the same length.",
          "So they are equal and parallel."
        ],
        explanation: [
          "In a parallelogram, opposite sides are <strong>equal and parallel</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which quadrilateral has all sides equal AND all angles equal to 90°?',
        diagram: { type: "quadrilateral", shape: "square", sides: [5, 5, 5, 5], angles: [90, 90, 90, 90] },
        choices: ["Rhombus", "Rectangle", "Square", "Trapezoid"],
        answer: "Square",
        hints: [
          "A rhombus has all sides equal but angles aren't necessarily 90°.",
          "A rectangle has all angles 90° but sides aren't necessarily equal.",
          "A square has both: all sides equal AND all angles 90°."
        ],
        explanation: [
          "A <strong>square</strong> has all sides equal and all angles = 90°.",
          "It is both a rhombus and a rectangle."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Is 6, 8, 10 a Pythagorean triple? If yes, what is <span class="math">6² + 8²</span>?',
        diagram: { type: "rightTriangle", a: 6, b: 8, c: 10 },
        answer: "100",
        hints: [
          "Compute 6² = 36 and 8² = 64.",
          "36 + 64 = 100.",
          "And 10² = 100, so yes it works!"
        ],
        explanation: [
          "6² + 8² = 36 + 64 = <strong>100</strong>",
          "Since 10² = 100, yes, 6-8-10 is a Pythagorean triple."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A rectangle has all angles equal to 90° and opposite sides equal. A rhombus has all sides equal. What shape is both a rectangle and a rhombus?',
        diagram: { type: "quadrilateral", shape: "square", sides: [5, 5, 5, 5], angles: [90, 90, 90, 90] },
        choices: ["Parallelogram", "Trapezoid", "Square", "Pentagon"],
        answer: "Square",
        hints: [
          "It needs all angles 90° (rectangle property).",
          "It needs all sides equal (rhombus property).",
          "A shape with all sides equal and all angles 90° is a square."
        ],
        explanation: [
          "A shape that is both a rectangle (all 90° angles) and a rhombus (all sides equal)",
          "is a <strong>square</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A right triangle has legs 9 and 12. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 9, b: 12, c: 15, showUnknown: "c" },
        answer: "15",
        hints: [
          "9² + 12² = 81 + 144 = 225.",
          "√225 = ?",
          "√225 = 15."
        ],
        explanation: [
          "9² + 12² = 81 + 144 = 225",
          "c = √225 = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A trapezoid has exactly how many pairs of parallel sides?',
        diagram: { type: "quadrilateral", shape: "trapezoid", sides: [6, 5, 10, 5] },
        choices: ["0", "1", "2", "4"],
        answer: "1",
        hints: [
          "A parallelogram has 2 pairs of parallel sides.",
          "A trapezoid has fewer.",
          "A trapezoid has exactly 1 pair of parallel sides."
        ],
        explanation: [
          "A trapezoid has exactly <strong>1</strong> pair of parallel sides."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">5² + 12²</span>?',
        diagram: { type: "rightTriangle", a: 5, b: 12, c: 13 },
        answer: "169",
        hints: [
          "5² = 25.",
          "12² = 144.",
          "25 + 144 = 169."
        ],
        explanation: [
          "5² + 12² = 25 + 144",
          "= <strong>169</strong> (and √169 = 13, giving the 5-12-13 triple)"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'The diagonals of a rectangle are:',
        diagram: { type: "quadrilateral", shape: "rectangle", sides: [8, 5, 8, 5], diagonals: true },
        choices: ["Perpendicular", "Equal in length", "Different lengths", "Parallel"],
        answer: "Equal in length",
        hints: [
          "In a rectangle, both diagonals stretch from corner to opposite corner.",
          "Because of the symmetry, they are the same length.",
          "The diagonals of a rectangle are equal."
        ],
        explanation: [
          "The diagonals of a rectangle are always <strong>equal in length</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A right triangle has legs 6 and 8. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 6, b: 8, c: 10, showUnknown: "c" },
        answer: "10",
        hints: [
          "6² + 8² = 36 + 64 = 100.",
          "√100 = ?",
          "√100 = 10."
        ],
        explanation: [
          "6² + 8² = 36 + 64 = 100",
          "c = √100 = <strong>10</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'A right triangle has hypotenuse 10 and one leg 6. What is the other leg?',
        diagram: { type: "rightTriangle", a: 6, b: 0, c: 10, showUnknown: "b" },
        answer: "8",
        hints: [
          "Use a² + b² = c².",
          "a² + 36 = 100.",
          "a² = 64, so a = 8."
        ],
        explanation: [
          "a² = 10² − 6² = 100 − 36 = 64",
          "a = √64 = <strong>8</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Is a triangle with sides 7, 24, 25 a right triangle?',
        diagram: { type: "rightTriangle", a: 7, b: 24, c: 25 },
        choices: ["Yes", "No"],
        answer: "Yes",
        hints: [
          "Check: 7² + 24² = 49 + 576 = 625.",
          "25² = 625.",
          "625 = 625 ✓ — yes!"
        ],
        explanation: [
          "7² + 24² = 49 + 576 = 625 = 25²",
          "<strong>Yes</strong>, it is a right triangle."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
        diagram: { type: "rightTriangle", a: 5, b: 0, c: 13, showUnknown: "b" },
        answer: "12",
        hints: [
          "a² + 5² = 13².",
          "a² + 25 = 169.",
          "a² = 144, so a = 12."
        ],
        explanation: [
          "a² = 13² − 5² = 169 − 25 = 144",
          "a = √144 = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'If 3-4-5 is a Pythagorean triple, which of these is also a Pythagorean triple (scaled)?',
        diagram: { type: "rightTriangle", a: 6, b: 8, c: 10 },
        choices: ["6, 8, 10", "4, 5, 6", "5, 6, 7", "3, 5, 7"],
        answer: "6, 8, 10",
        hints: [
          "You can scale a Pythagorean triple by multiplying all three numbers by the same factor.",
          "3×2=6, 4×2=8, 5×2=10.",
          "Check: 36 + 64 = 100 = 10² ✓"
        ],
        explanation: [
          "3×2=6, 4×2=8, 5×2=10",
          "6² + 8² = 36 + 64 = 100 = 10² ✓",
          "<strong>6, 8, 10</strong> is a scaled 3-4-5 triple."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A ladder 15 feet long leans against a wall. The base of the ladder is 9 feet from the wall. How high up the wall does the ladder reach (in feet)?',
        diagram: { type: "rightTriangle", a: 0, b: 9, c: 15, showUnknown: "a" },
        answer: "12",
        hints: [
          "The ladder, wall, and ground form a right triangle.",
          "h² + 9² = 15² → h² + 81 = 225.",
          "h² = 144, so h = 12."
        ],
        explanation: [
          "h² = 15² − 9² = 225 − 81 = 144",
          "h = √144 = <strong>12</strong> feet"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'The diagonal of a rectangle is 13 and one side is 5. What is the other side?',
        diagram: { type: "rightTriangle", a: 5, b: 0, c: 13, showUnknown: "b" },
        answer: "12",
        hints: [
          "The diagonal, length, and width form a right triangle.",
          "5² + x² = 13² → 25 + x² = 169.",
          "x² = 144, so x = 12."
        ],
        explanation: [
          "5² + x² = 13²",
          "x² = 169 − 25 = 144",
          "x = √144 = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A right triangle has hypotenuse 17 and one leg 8. What is the other leg?',
        diagram: { type: "rightTriangle", a: 8, b: 0, c: 17, showUnknown: "b" },
        choices: ["9", "12", "15", "13"],
        answer: "15",
        hints: [
          "a² + 8² = 17².",
          "a² + 64 = 289.",
          "a² = 225, so a = 15."
        ],
        explanation: [
          "a² = 17² − 8² = 289 − 64 = 225",
          "a = √225 = <strong>15</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'If 5, 12, 13 is a Pythagorean triple, what is the hypotenuse of the triple when each number is multiplied by 2?',
        diagram: { type: "rightTriangle", a: 10, b: 24, c: 26 },
        answer: "26",
        hints: [
          "Multiply each: 5×2=10, 12×2=24, 13×2=26.",
          "The hypotenuse is the largest value.",
          "Check: 100 + 576 = 676 = 26² ✓"
        ],
        explanation: [
          "Scaled triple: 10, 24, 26",
          "10² + 24² = 100 + 576 = 676 = 26²",
          "Hypotenuse = <strong>26</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A rhombus has all sides equal and its diagonals bisect each other at right angles. If the diagonals are 6 and 8, what is each side of the rhombus?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        choices: ["4", "5", "6", "7"],
        answer: "5",
        hints: [
          "The diagonals cut each other into halves: 3 and 4.",
          "Each half-diagonal and a side of the rhombus form a right triangle.",
          "3² + 4² = 9 + 16 = 25, so side = √25 = 5."
        ],
        explanation: [
          "Half-diagonals: 3 and 4",
          "Side² = 3² + 4² = 9 + 16 = 25",
          "Side = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Is a triangle with sides 5, 7, 9 a right triangle?',
        diagram: { type: "rightTriangle", a: 5, b: 7, c: 9 },
        choices: ["Yes", "No"],
        answer: "No",
        hints: [
          "Check: 5² + 7² = 25 + 49 = 74.",
          "9² = 81.",
          "74 ≠ 81, so no."
        ],
        explanation: [
          "5² + 7² = 25 + 49 = 74",
          "9² = 81",
          "74 ≠ 81, so <strong>No</strong>, it is not a right triangle."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A rectangular field is 40 m long and 30 m wide. What is the length of the diagonal in meters?',
        diagram: { type: "quadrilateral", shape: "rectangle", sides: [40, 30, 40, 30], diagonals: true },
        answer: "50",
        hints: [
          "The diagonal forms a right triangle with the sides.",
          "40² + 30² = 1600 + 900 = 2500.",
          "d = √2500 = 50."
        ],
        explanation: [
          "d² = 40² + 30² = 1600 + 900 = 2500",
          "d = √2500 = <strong>50</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A right triangle has hypotenuse 25 and one leg 7. What is the other leg?',
        diagram: { type: "rightTriangle", a: 7, b: 0, c: 25, showUnknown: "b" },
        answer: "24",
        hints: [
          "a² + 7² = 25².",
          "a² + 49 = 625.",
          "a² = 576, so a = 24."
        ],
        explanation: [
          "a² = 25² − 7² = 625 − 49 = 576",
          "a = √576 = <strong>24</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A 20-foot rope is stretched from the top of a 16-foot pole to the ground. How far is the bottom of the rope from the base of the pole?',
        diagram: { type: "rightTriangle", a: 0, b: 16, c: 20, showUnknown: "a" },
        choices: ["8 feet", "10 feet", "12 feet", "14 feet"],
        answer: "12 feet",
        hints: [
          "The pole, ground, and rope form a right triangle.",
          "d² + 16² = 20² → d² + 256 = 400.",
          "d² = 144, so d = 12."
        ],
        explanation: [
          "d² = 20² − 16² = 400 − 256 = 144",
          "d = √144 = <strong>12 feet</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A right triangle has legs 9 and 40. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 9, b: 40, c: 41, showUnknown: "c" },
        answer: "41",
        hints: [
          "9² + 40² = 81 + 1600 = 1681.",
          "√1681 = ?",
          "√1681 = 41."
        ],
        explanation: [
          "9² + 40² = 81 + 1600 = 1681",
          "c = √1681 = <strong>41</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'The diagonals of which quadrilateral are always perpendicular (meet at 90°)?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        choices: ["Rectangle", "Parallelogram", "Rhombus", "Trapezoid"],
        answer: "Rhombus",
        hints: [
          "A rectangle's diagonals are equal but not necessarily perpendicular.",
          "A parallelogram's diagonals bisect each other but aren't necessarily perpendicular.",
          "A rhombus has diagonals that are always perpendicular."
        ],
        explanation: [
          "The diagonals of a <strong>rhombus</strong> always meet at right angles (90°)."
        ]
      }
    ],

    // ── Extra Challenge: Classifying Triangles (Converse of Pythagorean Theorem) ──
    extraChallenge: [
      {
        type: "mc", difficulty: 3,
        question: 'A triangle has sides 5, 7, and 9. Is it acute, right, or obtuse?',
        diagram: { type: "triangle", sides: [5, 7, 9], angles: [0, 0, 0], labels: ["A", "B", "C"] },
        choices: ["Acute", "Right", "Obtuse"],
        answer: "Obtuse",
        hints: [
          "Compare a² + b² with c² using the two shorter sides as a, b and the longest as c.",
          "5² + 7² = 25 + 49 = 74. Compare to 9² = 81.",
          "Since 74 < 81 (a² + b² < c²), the triangle is obtuse."
        ],
        explanation: [
          "Longest side c = 9: c² = 81",
          "a² + b² = 5² + 7² = 25 + 49 = 74",
          "Since 74 < 81 (a²+b² < c²), this is an <strong>obtuse</strong> triangle."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A triangle has sides 6, 8, and 10. What type of triangle is it?',
        diagram: { type: "rightTriangle", a: 6, b: 8, c: 10 },
        choices: ["Acute", "Right", "Obtuse", "Isosceles"],
        answer: "Right",
        hints: [
          "Check: does a² + b² = c²?",
          "6² + 8² = 36 + 64 = 100. And 10² = 100.",
          "100 = 100, so it's a right triangle!"
        ],
        explanation: [
          "6² + 8² = 36 + 64 = 100",
          "10² = 100",
          "Since a² + b² = c², this is a <strong>right</strong> triangle (scaled 3-4-5 triple)."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A triangle has sides 7, 8, and 5. Is it acute, right, or obtuse?',
        diagram: { type: "triangle", sides: [5, 7, 8], angles: [0, 0, 0], labels: ["A", "B", "C"] },
        choices: ["Acute", "Right", "Obtuse"],
        answer: "Acute",
        hints: [
          "Longest side c = 8: c² = 64.",
          "a² + b² = 5² + 7² = 25 + 49 = 74.",
          "Since 74 > 64 (a²+b² > c²), the triangle is acute."
        ],
        explanation: [
          "Longest side c = 8: c² = 64",
          "a² + b² = 5² + 7² = 74",
          "Since 74 > 64 (a²+b² > c²), this is an <strong>acute</strong> triangle."
        ]
      },
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is the area of a right triangle with hypotenuse 10 and one leg 6?',
        diagram: { type: "rightTriangle", a: 6, b: 8, c: 10 },
        answer: "24",
        hints: [
          "First find the other leg: a² = 10² − 6² = 100 − 36 = 64, so a = 8.",
          "Area = ½ × leg × leg = ½ × 6 × 8.",
          "= 24."
        ],
        explanation: [
          "Other leg = √(100 − 36) = √64 = 8",
          "Area = ½ × 6 × 8 = <strong>24</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A 45-45-90 triangle has legs of length 1. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 1, b: 1, c: 0, showUnknown: "c" },
        choices: ["1", "√2", "√3", "2"],
        answer: "√2",
        hints: [
          "In a 45-45-90 triangle, the hypotenuse = leg × √2.",
          "1² + 1² = 1 + 1 = 2.",
          "c = √2."
        ],
        explanation: [
          "1² + 1² = 2",
          "c = √2",
          "In any 45-45-90 triangle, hypotenuse = leg × <strong>√2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'The diagonal of a square is 10. What is <span class="math">s²</span>, where <span class="math">s</span> is the side length?',
        diagram: { type: "quadrilateral", shape: "square", diagonals: true },
        answer: "50",
        hints: [
          "In a square, s² + s² = diagonal².",
          "2s² = 10² = 100.",
          "s² = 50."
        ],
        explanation: [
          "s² + s² = 10²",
          "2s² = 100",
          "s² = <strong>50</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'In a 30-60-90 triangle, the side opposite the 30° angle is 5. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 5, b: 0, c: 10, showUnknown: "c" },
        choices: ["5", "5√3", "10", "10√3"],
        answer: "10",
        hints: [
          "In a 30-60-90 triangle, the sides are in the ratio 1 : √3 : 2.",
          "The side opposite 30° is the shortest side (ratio 1).",
          "Hypotenuse = 2 × shortest side = 2 × 5 = 10."
        ],
        explanation: [
          "30-60-90 ratio: x : x√3 : 2x",
          "Shortest side (opposite 30°) = x = 5",
          "Hypotenuse = 2x = <strong>10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rectangle has sides 9 and 12. What is the length of its diagonal?',
        diagram: { type: "quadrilateral", shape: "rectangle", sides: [12, 9, 12, 9], diagonals: true },
        answer: "15",
        hints: [
          "The diagonal forms a right triangle with the sides.",
          "9² + 12² = 81 + 144 = 225.",
          "d = √225 = 15."
        ],
        explanation: [
          "d² = 9² + 12² = 81 + 144 = 225",
          "d = √225 = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A rhombus has diagonals of length 10 and 24. What is the area of the rhombus?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        choices: ["60", "120", "240", "34"],
        answer: "120",
        hints: [
          "Area of a rhombus = ½ × d₁ × d₂.",
          "= ½ × 10 × 24.",
          "= ½ × 240 = 120."
        ],
        explanation: [
          "Area = ½ × d₁ × d₂",
          "= ½ × 10 × 24 = ½ × 240",
          "= <strong>120</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A right triangle has area 30 and one leg is 5. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "c" },
        answer: "13",
        hints: [
          "Area = ½ × leg₁ × leg₂, so 30 = ½ × 5 × leg₂ → leg₂ = 12.",
          "Now use Pythagorean theorem: 5² + 12² = 25 + 144 = 169.",
          "Hypotenuse = √169 = 13."
        ],
        explanation: [
          "30 = ½ × 5 × leg₂ → leg₂ = 12",
          "c² = 5² + 12² = 25 + 144 = 169",
          "c = √169 = <strong>13</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rhombus has diagonals 16 and 12. What is the length of each side?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        answer: "10",
        hints: [
          "The diagonals of a rhombus bisect each other at right angles.",
          "Half-diagonals: 8 and 6. Each side forms a right triangle with these.",
          "Side² = 8² + 6² = 64 + 36 = 100, so side = 10."
        ],
        explanation: [
          "Half-diagonals: 8 and 6",
          "Side² = 8² + 6² = 64 + 36 = 100",
          "Side = √100 = <strong>10</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A right triangle has legs 15 and 20. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 15, b: 20, c: 25, showUnknown: "c" },
        choices: ["24", "25", "30", "35"],
        answer: "25",
        hints: [
          "15² + 20² = 225 + 400 = 625.",
          "√625 = ?",
          "√625 = 25."
        ],
        explanation: [
          "15² + 20² = 225 + 400 = 625",
          "c = √625 = <strong>25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Two buildings are 16 m apart. One is 21 m tall and the other is 9 m tall. A wire connects their rooftops. How long is the wire in meters?',
        diagram: { type: "rightTriangle", a: 16, b: 12, c: 20, showUnknown: "c" },
        answer: "20",
        hints: [
          "The height difference = 21 − 9 = 12 m.",
          "The wire, horizontal distance (16 m), and height difference (12 m) form a right triangle.",
          "Wire² = 16² + 12² = 256 + 144 = 400. Wire = √400 = 20."
        ],
        explanation: [
          "Height difference = 21 − 9 = 12 m",
          "Wire² = 16² + 12² = 256 + 144 = 400",
          "Wire = √400 = <strong>20 m</strong>"
        ]
      },
      // ── 20 additional boss questions ──
      {
        type: "numeric", difficulty: 3,
        question: 'A right triangle has hypotenuse 26 and one leg 10. What is the other leg?',
        diagram: { type: "rightTriangle", a: 10, b: 0, c: 26, showUnknown: "b" },
        answer: "24",
        hints: [
          "a² + 10² = 26².",
          "a² + 100 = 676.",
          "a² = 576, so a = √576 = 24."
        ],
        explanation: [
          "a² = 26² − 10² = 676 − 100 = 576",
          "a = √576 = <strong>24</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'In a 45-45-90 triangle, the hypotenuse is 10. What is each leg?',
        diagram: { type: "rightTriangle", a: 0, b: 0, c: 10, showUnknown: "a" },
        choices: ["5", "5√2", "10/√2", "Both B and C"],
        answer: "Both B and C",
        hints: [
          "In a 45-45-90 triangle, hypotenuse = leg × √2.",
          "So leg = hypotenuse ÷ √2 = 10/√2.",
          "Rationalizing: 10/√2 = 10√2/2 = 5√2. Both forms are correct."
        ],
        explanation: [
          "leg = 10 ÷ √2 = 10/√2 = 5√2",
          "Both 10/√2 and 5√2 are the same value.",
          "Each leg = <strong>5√2</strong> (or equivalently 10/√2)"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A 30-60-90 triangle has a hypotenuse of 14. What is the length of the side opposite the 60° angle? (Give the exact coefficient before √3, e.g., if the answer is 5√3, type 7.)',
        diagram: { type: "rightTriangle", a: 7, b: 0, c: 14, showUnknown: "b" },
        answer: "7",
        hints: [
          "In a 30-60-90 triangle, sides are in ratio x : x√3 : 2x.",
          "Hypotenuse = 2x = 14, so x = 7.",
          "Side opposite 60° = x√3 = 7√3. The coefficient is 7."
        ],
        explanation: [
          "2x = 14 → x = 7",
          "Side opposite 60° = 7√3",
          "Coefficient = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A rectangle has sides 7 and 24. What is the length of its diagonal?',
        diagram: { type: "quadrilateral", shape: "rectangle", sides: [24, 7, 24, 7], diagonals: true },
        choices: ["25", "26", "28", "31"],
        answer: "25",
        hints: [
          "d² = 7² + 24² = 49 + 576 = 625.",
          "d = √625.",
          "= 25."
        ],
        explanation: [
          "d² = 7² + 24² = 49 + 576 = 625",
          "d = √625 = <strong>25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A right triangle has area 84 and one leg is 7. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 7, b: 24, c: 25, showUnknown: "c" },
        answer: "25",
        hints: [
          "Area = ½ × leg₁ × leg₂ → 84 = ½ × 7 × leg₂ → leg₂ = 24.",
          "Hypotenuse² = 7² + 24² = 49 + 576 = 625.",
          "Hypotenuse = √625 = 25."
        ],
        explanation: [
          "84 = ½ × 7 × leg₂ → leg₂ = 24",
          "c² = 7² + 24² = 49 + 576 = 625",
          "c = √625 = <strong>25</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A square has area 144. What is the length of its diagonal?',
        diagram: { type: "quadrilateral", shape: "square", sides: [12, 12, 12, 12], diagonals: true },
        choices: ["12", "12√2", "24", "6√2"],
        answer: "12√2",
        hints: [
          "Side = √144 = 12.",
          "Diagonal of a square = side × √2.",
          "= 12√2."
        ],
        explanation: [
          "Side = √144 = 12",
          "Diagonal = 12 × √2",
          "= <strong>12√2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rhombus has diagonals 14 and 48. What is the length of each side?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        answer: "25",
        hints: [
          "Diagonals bisect each other at right angles. Half-diagonals: 7 and 24.",
          "Side² = 7² + 24² = 49 + 576 = 625.",
          "Side = √625 = 25."
        ],
        explanation: [
          "Half-diagonals: 7 and 24",
          "Side² = 7² + 24² = 49 + 576 = 625",
          "Side = √625 = <strong>25</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A ladder 20 feet long leans against a wall. Its base is 12 feet from the wall. How high up the wall does it reach?',
        diagram: { type: "rightTriangle", a: 0, b: 12, c: 20, showUnknown: "a" },
        choices: ["8 ft", "12 ft", "16 ft", "18 ft"],
        answer: "16 ft",
        hints: [
          "The ladder, wall, and ground form a right triangle.",
          "h² + 12² = 20² → h² + 144 = 400.",
          "h² = 256, h = √256 = 16."
        ],
        explanation: [
          "h² = 20² − 12² = 400 − 144 = 256",
          "h = √256 = <strong>16 ft</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Two ships leave a port. One sails 9 km east, the other sails 40 km north. How far apart are they in km?',
        diagram: { type: "rightTriangle", a: 9, b: 40, c: 41, showUnknown: "c" },
        answer: "41",
        hints: [
          "East and north are perpendicular, forming a right triangle.",
          "Distance² = 9² + 40² = 81 + 1600 = 1681.",
          "Distance = √1681 = 41."
        ],
        explanation: [
          "d² = 9² + 40² = 81 + 1600 = 1681",
          "d = √1681 = <strong>41 km</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A right triangle has legs <span class="math">a</span> and <span class="math">b</span> with <span class="math">a = 2b</span>. If the hypotenuse is <span class="math">\\sqrt{80}</span>, what is <span class="math">b</span>?',
        diagram: { type: "rightTriangle", a: 8, b: 4, c: 0, showUnknown: "b" },
        choices: ["2", "4", "6", "8"],
        answer: "4",
        hints: [
          "a² + b² = 80. Since a = 2b: (2b)² + b² = 80.",
          "4b² + b² = 80 → 5b² = 80.",
          "b² = 16, so b = 4."
        ],
        explanation: [
          "(2b)² + b² = 80 → 4b² + b² = 5b² = 80",
          "b² = 16",
          "b = <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A right triangle has perimeter 30 and legs 5 and 12. What is its hypotenuse?',
        diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "c" },
        answer: "13",
        hints: [
          "Perimeter = leg₁ + leg₂ + hypotenuse.",
          "30 = 5 + 12 + c → c = 30 − 17 = 13.",
          "Verify: 5² + 12² = 25 + 144 = 169 = 13² ✓"
        ],
        explanation: [
          "c = 30 − 5 − 12 = 13",
          "Check: 5² + 12² = 25 + 144 = 169 = 13²",
          "Hypotenuse = <strong>13</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A rhombus has side 13 and one diagonal of length 10. What is the length of the other diagonal?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        choices: ["20", "24", "26", "12"],
        answer: "24",
        hints: [
          "Half of the known diagonal = 5. Let half of the unknown diagonal = x.",
          "5² + x² = 13² → 25 + x² = 169 → x² = 144 → x = 12.",
          "Full diagonal = 2 × 12 = 24."
        ],
        explanation: [
          "Half-diagonals: 5 and x",
          "5² + x² = 13² → x² = 144 → x = 12",
          "Other diagonal = 2 × 12 = <strong>24</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A TV screen is advertised as 50 inches (diagonal). If the width is 40 inches, what is the height in inches?',
        diagram: { type: "rightTriangle", a: 40, b: 0, c: 50, showUnknown: "b" },
        answer: "30",
        hints: [
          "Width² + height² = diagonal².",
          "40² + h² = 50² → 1600 + h² = 2500.",
          "h² = 900, h = √900 = 30."
        ],
        explanation: [
          "h² = 50² − 40² = 2500 − 1600 = 900",
          "h = √900 = <strong>30</strong> inches"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'In a 30-60-90 triangle, the side opposite 60° is <span class="math">8\\sqrt{3}</span>. What is the hypotenuse?',
        diagram: { type: "rightTriangle", a: 8, b: 0, c: 16, showUnknown: "c" },
        choices: ["8", "12", "16", "8√3"],
        answer: "16",
        hints: [
          "In a 30-60-90 triangle, sides are x : x√3 : 2x.",
          "Side opposite 60° = x√3 = 8√3, so x = 8.",
          "Hypotenuse = 2x = 16."
        ],
        explanation: [
          "x√3 = 8√3 → x = 8",
          "Hypotenuse = 2x = 2 × 8",
          "= <strong>16</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A right triangle has hypotenuse 34 and one leg 16. What is the area of the triangle?',
        diagram: { type: "rightTriangle", a: 16, b: 30, c: 34 },
        answer: "240",
        hints: [
          "Other leg: a² = 34² − 16² = 1156 − 256 = 900. a = 30.",
          "Area = ½ × 16 × 30 = ½ × 480.",
          "= 240."
        ],
        explanation: [
          "Other leg = √(1156 − 256) = √900 = 30",
          "Area = ½ × 16 × 30 = ½ × 480",
          "= <strong>240</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'The diagonal of a rectangle is 17 and one side is 15. What is the perimeter of the rectangle?',
        diagram: { type: "quadrilateral", shape: "rectangle", sides: [15, 8, 15, 8], diagonals: true },
        choices: ["46", "50", "54", "64"],
        answer: "46",
        hints: [
          "Other side: x² = 17² − 15² = 289 − 225 = 64. x = 8.",
          "Perimeter = 2(15 + 8) = 2 × 23.",
          "= 46."
        ],
        explanation: [
          "Other side = √(289 − 225) = √64 = 8",
          "P = 2(15 + 8) = 2 × 23",
          "= <strong>46</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A rhombus has area 120 and one diagonal of length 10. What is the length of each side?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        answer: "13",
        hints: [
          "Area = ½ × d₁ × d₂ → 120 = ½ × 10 × d₂ → d₂ = 24.",
          "Half-diagonals: 5 and 12. Side² = 5² + 12² = 25 + 144 = 169.",
          "Side = √169 = 13."
        ],
        explanation: [
          "120 = ½ × 10 × d₂ → d₂ = 24",
          "Half-diagonals: 5 and 12",
          "Side = √(25 + 144) = √169 = <strong>13</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A rectangular box has a base of 3 × 4 and height 12. What is the length of the space diagonal (corner to opposite corner through the box)?',
        diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "c" },
        choices: ["5", "12", "13", "15"],
        answer: "13",
        hints: [
          "First find the base diagonal: √(3² + 4²) = √(9 + 16) = √25 = 5.",
          "Then the space diagonal: √(5² + 12²) = √(25 + 144) = √169.",
          "= 13."
        ],
        explanation: [
          "Base diagonal = √(9 + 16) = 5",
          "Space diagonal = √(25 + 144) = √169",
          "= <strong>13</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A kite has diagonals of 16 and 30. The diagonals intersect at right angles. What is the area of the kite?',
        diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
        answer: "240",
        hints: [
          "Area of a kite = ½ × d₁ × d₂ (same formula as a rhombus when diagonals are perpendicular).",
          "= ½ × 16 × 30 = ½ × 480.",
          "= 240."
        ],
        explanation: [
          "Area = ½ × d₁ × d₂",
          "= ½ × 16 × 30 = ½ × 480",
          "= <strong>240</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A right triangle has legs in the ratio 3:4 and a hypotenuse of 30. What is the area of the triangle?',
        diagram: { type: "rightTriangle", a: 18, b: 24, c: 30 },
        choices: ["108", "216", "270", "324"],
        answer: "216",
        hints: [
          "Legs are 3k and 4k. By Pythagorean theorem: (3k)² + (4k)² = 30².",
          "9k² + 16k² = 900 → 25k² = 900 → k² = 36 → k = 6.",
          "Legs: 18 and 24. Area = ½ × 18 × 24 = 216."
        ],
        explanation: [
          "25k² = 900 → k = 6",
          "Legs: 3(6) = 18, 4(6) = 24",
          "Area = ½ × 18 × 24 = <strong>216</strong>"
        ]
      }
    ]
  }
};
