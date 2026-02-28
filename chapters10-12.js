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
      }
    ]
  }
};
