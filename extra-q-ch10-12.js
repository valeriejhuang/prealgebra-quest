// Extra questions for Worlds 9-11 (Chapters 10-12)
// Round 1: 5 questions per topic
var EXTRA_QUESTIONS = EXTRA_QUESTIONS || {};

// ============================================================
// WORLD 9 — Chapter 10: Angles (11 topics, 5 questions each)
// ============================================================
EXTRA_QUESTIONS[9] = [

  // ---- Topic 0: Types of Angles (diff 1-2) ----
  [
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 47° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 47 less than 90?",
        "Yes — any angle between 0° and 90° is acute."
      ],
      explanation: [
        "An acute angle measures between 0° and 90°.",
        "Since 47° < 90°, this is an acute angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is an obtuse angle?',
      choices: ["85°", "90°", "135°", "180°"],
      answer: "135°",
      hints: [
        "Obtuse angles are greater than 90° but less than 180°.",
        "Check each choice against that range.",
        "135° is between 90° and 180°."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "85° is acute, 90° is right, 180° is straight.",
        "135° is the only obtuse angle listed."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A straight angle measures how many degrees?',
      answer: "180",
      hints: [
        "A straight angle forms a straight line.",
        "Think of half a full rotation.",
        "A full rotation is 360°, so half is …"
      ],
      explanation: [
        "A straight angle is a half-turn.",
        "360° ÷ 2 = 180°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 90° is called a:',
      choices: ["Straight angle", "Right angle", "Obtuse angle", "Reflex angle"],
      answer: "Right angle",
      hints: [
        "This is one of the most common angle types.",
        "It forms a perfect corner.",
        "It is exactly 90°."
      ],
      explanation: [
        "An angle of exactly 90° is called a right angle.",
        "It forms an L-shape or a perfect square corner."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 162° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Obtuse",
      hints: [
        "Is 162° less than 90°? No.",
        "Is it exactly 90° or 180°? No.",
        "It is between 90° and 180°."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 162° < 180°, this angle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle that measures 215° is classified as a:',
      choices: ["Obtuse angle", "Straight angle", "Reflex angle", "Right angle"],
      answer: "Reflex angle",
      hints: [
        "A reflex angle is greater than 180° but less than 360°.",
        "Is 215° greater than 180°?",
        "Yes — any angle between 180° and 360° is reflex."
      ],
      explanation: [
        "A reflex angle measures between 180° and 360°.",
        "Since 180° < 215° < 360°, this is a reflex angle."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right angle measures how many degrees?',
      answer: "90",
      hints: [
        "A right angle forms a perfect corner.",
        "Think of the corner of a square.",
        "It is exactly one-quarter of a full rotation: 360 ÷ 4."
      ],
      explanation: [
        "A right angle is exactly 90°.",
        "It is one-quarter of a full 360° rotation."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 11° is classified as:',
      choices: ["Right", "Acute", "Obtuse", "Reflex"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 11° less than 90°?",
        "Yes — so it is acute."
      ],
      explanation: [
        "An acute angle is any angle between 0° and 90°.",
        "Since 11° < 90°, it is acute."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 127° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Obtuse",
      hints: [
        "Is 127° less than 90°? No.",
        "Is it exactly 90° or 180°? No.",
        "It is between 90° and 180°."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 127° < 180°, this angle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A full rotation is 360°. How many degrees are in a reflex angle that is <span class="math">3/4</span> of a full rotation?',
      answer: "270",
      hints: [
        "A reflex angle is between 180° and 360°.",
        "3/4 of 360° = ?",
        "= 270°, which is indeed reflex."
      ],
      explanation: [
        "3/4 × 360° = 270°.",
        "Since 180° < 270° < 360°, it is a reflex angle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 305° is classified as:',
      choices: ["Obtuse", "Straight", "Reflex", "Right"],
      answer: "Reflex",
      hints: [
        "A reflex angle is greater than 180° but less than 360°.",
        "Is 305° between 180° and 360°?",
        "Yes — so it is reflex."
      ],
      explanation: [
        "A reflex angle measures between 180° and 360°.",
        "Since 180° < 305° < 360°, this is a reflex angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 73° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 73 less than 90?",
        "Yes — so it is acute."
      ],
      explanation: [
        "An acute angle measures between 0° and 90°.",
        "Since 73° < 90°, this is an acute angle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A reflex angle is 40° more than a straight angle. How many degrees is the reflex angle?',
      answer: "220",
      hints: [
        "A straight angle is 180°.",
        "Add 40° to a straight angle.",
        "180 + 40 = ?"
      ],
      explanation: [
        "A straight angle = 180°.",
        "180° + 40° = 220°, which is indeed reflex (between 180° and 360°)."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 154° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Obtuse",
      hints: [
        "Is 154° less than 90°? No.",
        "Is it exactly 90° or 180°? No.",
        "It is between 90° and 180°."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 154° < 180°, this angle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'An angle that measures 289° is classified as a reflex angle. How many degrees past 180° is it?',
      answer: "109",
      hints: [
        "A reflex angle is greater than 180°.",
        "Subtract 180 from 289.",
        "289 − 180 = ?"
      ],
      explanation: [
        "289° − 180° = 109°.",
        "So a 289° reflex angle is 109° past a straight angle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle that measures 89° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 89° less than 90°?",
        "Yes — just 1° short of a right angle."
      ],
      explanation: [
        "An acute angle measures between 0° and 90°.",
        "Since 89° < 90°, this is an acute angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle measuring exactly 180° is called a:',
      choices: ["Right angle", "Obtuse angle", "Straight angle", "Reflex angle"],
      answer: "Straight angle",
      hints: [
        "This angle forms a straight line.",
        "It is exactly half of a full rotation.",
        "It is called a straight angle."
      ],
      explanation: [
        "An angle of exactly 180° is a straight angle.",
        "It forms a straight line."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'An angle that measures 245° is how many degrees past a straight angle (180°)?',
      answer: "65",
      hints: [
        "A straight angle is 180°.",
        "Subtract 180 from 245.",
        "245 − 180 = ?"
      ],
      explanation: [
        "245° − 180° = 65°.",
        "So a 245° reflex angle is 65° past a straight angle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 91° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Obtuse",
      hints: [
        "Is 91° less than 90°? No.",
        "Is it exactly 90°? No.",
        "It is just 1° past a right angle, between 90° and 180°."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 91° < 180°, it is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle measuring 348° is classified as:',
      choices: ["Obtuse", "Straight", "Reflex", "Right"],
      answer: "Reflex",
      hints: [
        "A reflex angle is greater than 180° but less than 360°.",
        "Is 348° between 180° and 360°?",
        "Yes — so it is reflex."
      ],
      explanation: [
        "A reflex angle measures between 180° and 360°.",
        "Since 180° < 348° < 360°, this is a reflex angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 73° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Acute",
      hints: [
        "Acute angles measure less than 90°.",
        "Is 73 less than 90?",
        "Yes — so 73° is acute."
      ],
      explanation: [
        "An acute angle is between 0° and 90°.",
        "Since 73° < 90°, this angle is acute."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A reflex angle is 40° more than a straight angle. How many degrees is it?',
      answer: "220",
      hints: [
        "A straight angle is 180°.",
        "Add 40° to 180°.",
        "180 + 40 = ?"
      ],
      explanation: [
        "A straight angle = 180°.",
        "180° + 40° = 220°, which is a reflex angle (between 180° and 360°)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of these angles is obtuse?',
      choices: ["58°", "90°", "119°", "180°"],
      answer: "119°",
      hints: [
        "Obtuse means greater than 90° and less than 180°.",
        "58° is acute, 90° is right, 180° is straight.",
        "Which is left?"
      ],
      explanation: [
        "An obtuse angle is between 90° and 180°.",
        "119° is the only value in that range."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'An angle measures 179°. How many degrees short of a straight angle is it?',
      answer: "1",
      hints: [
        "A straight angle is 180°.",
        "Subtract 179 from 180.",
        "180 − 179 = ?"
      ],
      explanation: [
        "A straight angle = 180°.",
        "180° − 179° = 1°, so it is 1° short."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 260° is classified as:',
      choices: ["Obtuse", "Straight", "Right", "Reflex"],
      answer: "Reflex",
      hints: [
        "A reflex angle is between 180° and 360°.",
        "Is 260° in that range?",
        "Yes — so it is reflex."
      ],
      explanation: [
        "A reflex angle is between 180° and 360°.",
        "Since 180° < 260° < 360°, this is a reflex angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle measuring 53° is classified as:',
      choices: ["Right", "Obtuse", "Acute", "Straight"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 53 less than 90?",
        "Yes — so it is acute."
      ],
      explanation: [
        "An acute angle measures between 0° and 90°.",
        "Since 53° < 90°, this is an acute angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 36° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 36 less than 90?",
        "Yes — so 36° is acute."
      ],
      explanation: [
        "An acute angle is between 0° and 90°.",
        "Since 36° < 90°, this angle is acute."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A reflex angle is 55° more than a straight angle. How many degrees is the reflex angle?',
      answer: "235",
      hints: [
        "A straight angle is 180°.",
        "Add 55° to 180°.",
        "180 + 55 = ?"
      ],
      explanation: [
        "A straight angle = 180°.",
        "180° + 55° = 235°, which is reflex (between 180° and 360°)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 175° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Obtuse",
      hints: [
        "Is 175° between 90° and 180°?",
        "Yes — it is less than 180°.",
        "So it is obtuse."
      ],
      explanation: [
        "An obtuse angle is between 90° and 180°.",
        "Since 90° < 175° < 180°, this is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle measures 197°. How many degrees past a straight angle (180°) is it?',
      answer: "17",
      hints: [
        "A straight angle is 180°.",
        "Subtract 180 from 197.",
        "197 − 180 = ?"
      ],
      explanation: [
        "197° − 180° = 17°.",
        "So a 197° reflex angle is 17° past a straight angle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 64° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 64 less than 90?",
        "Yes — so it is acute."
      ],
      explanation: [
        "An acute angle measures between 0° and 90°.",
        "Since 64° < 90°, this is an acute angle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 143° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Obtuse",
      hints: [
        "Is 143° between 90° and 180°?",
        "Yes — it is greater than 90° but less than 180°.",
        "So it is obtuse."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 143° < 180°, this angle is obtuse."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'An angle measures 312°. How many degrees past a straight angle (180°) is it?',
      answer: "132",
      hints: [
        "A straight angle is 180°.",
        "Subtract 180 from 312.",
        "312 − 180 = ?"
      ],
      explanation: [
        "312° − 180° = 132°.",
        "So a 312° reflex angle is 132° past a straight angle."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'An angle measuring 179° is classified as:',
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Obtuse",
      hints: [
        "Obtuse angles are between 90° and 180°.",
        "Is 179° less than 180°?",
        "Yes — just 1° short of a straight angle."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 179° < 180°, this is obtuse.",
        "One more degree would make it a straight angle."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'An angle that measures 198° is classified as a:',
      choices: ["Obtuse angle", "Right angle", "Reflex angle", "Straight angle"],
      answer: "Reflex angle",
      hints: [
        "A reflex angle is greater than 180° but less than 360°.",
        "Is 198° greater than 180°?",
        "Yes — any angle between 180° and 360° is reflex."
      ],
      explanation: [
        "A reflex angle measures between 180° and 360°.",
        "Since 180° < 198° < 360°, this is a reflex angle.",
        "It is 18° past a straight angle."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A clock shows 4:00. What type of angle do the hour and minute hands form?',
      diagram: { type: "angle", angle: 120 },
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Obtuse",
      hints: [
        "Each hour on a clock represents 30°.",
        "From 12 to 4 is 4 hours, so 4 × 30° = 120°.",
        "An angle between 90° and 180° is obtuse."
      ],
      explanation: [
        "Each hour mark represents 30° (360° ÷ 12 = 30°).",
        "At 4:00 the hands span 4 hours: 4 × 30° = 120°.",
        "Since 90° < 120° < 180°, this is an obtuse angle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is classified as obtuse. It is 37° more than a right angle. How many degrees is it?',
      diagram: { type: "angle", angle: 127 },
      answer: "127",
      hints: [
        "A right angle is 90°.",
        "Add 37° to a right angle.",
        "90 + 37 = ?"
      ],
      explanation: [
        "A right angle = 90°.",
        "90° + 37° = 127°, which is obtuse (between 90° and 180°)."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of these angles is acute?',
      choices: ["92°", "78°", "180°", "145°"],
      answer: "78°",
      hints: [
        "Acute angles measure less than 90°.",
        "Check each choice: is it less than 90°?",
        "78° is the only value less than 90°."
      ],
      explanation: [
        "An acute angle is between 0° and 90°.",
        "78° < 90°, so it is the only acute angle listed."
      ]
    }

,
    {
      type: "mc", difficulty: 2,
      question: 'A spotlight rotates to form an angle of 135°. Classify this angle.',
      diagram: { type: "angle", angle: 135 },
      choices: ["Acute", "Right", "Obtuse", "Reflex"],
      answer: "Obtuse",
      hints: [
        "An obtuse angle is between 90° and 180°.",
        "Is 135° between 90° and 180°?",
        "Yes — so it is obtuse."
      ],
      explanation: [
        "An obtuse angle measures between 90° and 180°.",
        "Since 90° < 135° < 180°, this angle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An angle is classified as obtuse. It is exactly halfway between a right angle and a straight angle. How many degrees is it?',
      diagram: { type: "angle", angle: 135 },
      answer: "135",
      hints: [
        "A right angle is 90° and a straight angle is 180°.",
        "Halfway means the average of 90 and 180.",
        "(90 + 180) ÷ 2 = ?"
      ],
      explanation: [
        "The average of 90° and 180° is (90 + 180) ÷ 2 = 135°.",
        "Since 90° < 135° < 180°, it is indeed obtuse."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A skatepark ramp forms an angle of 28° with the ground. What type of angle is this?',
      diagram: { type: "angle", angle: 28 },
      choices: ["Acute", "Right", "Obtuse", "Straight"],
      answer: "Acute",
      hints: [
        "Acute angles are less than 90°.",
        "Is 28° less than 90°?",
        "Yes — so this is an acute angle."
      ],
      explanation: [
        "An acute angle measures between 0° and 90°.",
        "Since 28° < 90°, the ramp angle is acute."
      ]
    }
  ],

  // ---- Topic 1: Measuring Angles (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'A full rotation around a point equals how many degrees?',
      answer: "360",
      hints: [
        "Think of spinning all the way around.",
        "A half rotation is 180°.",
        "So a full rotation is twice that."
      ],
      explanation: [
        "A full rotation is 360°.",
        "This is the total degrees in a circle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">3/4</span> of a full rotation, how many degrees have you turned?',
      answer: "270",
      hints: [
        "A full rotation is 360°.",
        "Find 3/4 of 360°.",
        "360 × 3 ÷ 4 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "3/4 × 360° = 270°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many degrees are in a straight angle?',
      choices: ["90°", "180°", "270°", "360°"],
      answer: "180°",
      hints: [
        "A straight angle looks like a straight line.",
        "It is half of a full rotation.",
        "360° ÷ 2 = ?"
      ],
      explanation: [
        "A straight angle is exactly 180°.",
        "It is half of a full 360° rotation."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 245°. What is the other?',
      answer: "115",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 245 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 245° = 115°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'If you turn <span class="math">1/6</span> of a full rotation, how many degrees is that?',
      choices: ["30°", "45°", "60°", "72°"],
      answer: "60°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 6.",
        "360 ÷ 6 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/6 × 360° = 60°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If you make <span class="math">1/4</span> of a full rotation, how many degrees have you turned?',
      answer: "90",
      hints: [
        "A full rotation is 360°.",
        "Find 1/4 of 360°.",
        "360 ÷ 4 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/4 × 360° = 90°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'If you turn <span class="math">5/8</span> of a full rotation, how many degrees is that?',
      choices: ["200°", "225°", "240°", "250°"],
      answer: "225°",
      hints: [
        "A full rotation is 360°.",
        "Find 5/8 of 360°.",
        "360 × 5 ÷ 8 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "5/8 × 360° = 225°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 155°. What is the other?',
      answer: "205",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 155 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 155° = 205°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">2/3</span> of a full rotation, how many degrees have you turned?',
      answer: "240",
      hints: [
        "A full rotation is 360°.",
        "Find 2/3 of 360°.",
        "360 × 2 ÷ 3 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "2/3 × 360° = 240°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/2</span> of a full rotation, how many degrees is that?',
      choices: ["90°", "120°", "180°", "270°"],
      answer: "180°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 2.",
        "360 ÷ 2 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/2 × 360° = 180°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 198°. What is the other?',
      answer: "162",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 198 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 198° = 162°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'If you make <span class="math">1/3</span> of a full rotation, how many degrees have you turned?',
      answer: "120",
      hints: [
        "A full rotation is 360°.",
        "Find 1/3 of 360°.",
        "360 ÷ 3 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/3 × 360° = 120°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'If you turn <span class="math">7/12</span> of a full rotation, how many degrees is that?',
      choices: ["180°", "200°", "210°", "240°"],
      answer: "210°",
      hints: [
        "A full rotation is 360°.",
        "Find 7/12 of 360°.",
        "360 × 7 ÷ 12 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "7/12 × 360° = 210°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 87°. What is the other?',
      answer: "273",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 87 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 87° = 273°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">5/6</span> of a full rotation, how many degrees have you turned?',
      answer: "300",
      hints: [
        "A full rotation is 360°.",
        "Find 5/6 of 360°.",
        "360 × 5 ÷ 6 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "5/6 × 360° = 300°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/8</span> of a full rotation, how many degrees is that?',
      choices: ["30°", "40°", "45°", "60°"],
      answer: "45°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 8.",
        "360 ÷ 8 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/8 × 360° = 45°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 312°. What is the other?',
      answer: "48",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 312 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 312° = 48°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 275°. What is the other?',
      answer: "85",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 275 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 275° = 85°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/12</span> of a full rotation, how many degrees is that?',
      choices: ["15°", "24°", "30°", "36°"],
      answer: "30°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 12.",
        "360 ÷ 12 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/12 × 360° = 30°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 137°. What is the other?',
      answer: "223",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 137 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 137° = 223°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/10</span> of a full rotation, how many degrees is that?',
      choices: ["24°", "30°", "36°", "40°"],
      answer: "36°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 10.",
        "360 ÷ 10 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/10 × 360° = 36°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">4/9</span> of a full rotation, how many degrees have you turned?',
      answer: "160",
      hints: [
        "A full rotation is 360°.",
        "Find 4/9 of 360°.",
        "360 × 4 ÷ 9 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "4/9 × 360° = 160°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">7/8</span> of a full rotation, how many degrees have you turned?',
      answer: "315",
      hints: [
        "A full rotation is 360°.",
        "Find 7/8 of 360°.",
        "360 × 7 ÷ 8 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "7/8 × 360° = 315°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 137°. What is the other?',
      answer: "223",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 137 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 137° = 223°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/10</span> of a full rotation, how many degrees is that?',
      choices: ["24°", "30°", "36°", "40°"],
      answer: "36°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 10.",
        "360 ÷ 10 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/10 × 360° = 36°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">4/9</span> of a full rotation, how many degrees have you turned?',
      answer: "160",
      hints: [
        "A full rotation is 360°.",
        "Find 4/9 of 360°.",
        "360 × 4 ÷ 9 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "4/9 × 360° = 160°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 218°. What is the other?',
      choices: ["132°", "138°", "142°", "152°"],
      answer: "142°",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 218 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 218° = 142°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/5</span> of a full rotation, how many degrees is that?',
      choices: ["36°", "60°", "72°", "90°"],
      answer: "72°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 5.",
        "360 ÷ 5 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/5 × 360° = 72°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">5/12</span> of a full rotation, how many degrees have you turned?',
      answer: "150",
      hints: [
        "A full rotation is 360°.",
        "Find 5/12 of 360°.",
        "360 × 5 ÷ 12 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "5/12 × 360° = 150°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 173°. What is the other?',
      answer: "187",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 173 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 173° = 187°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/4</span> of a full rotation, how many degrees is that?',
      choices: ["45°", "60°", "90°", "120°"],
      answer: "90°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 4.",
        "360 ÷ 4 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/4 × 360° = 90°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">3/8</span> of a full rotation, how many degrees have you turned?',
      answer: "135",
      hints: [
        "A full rotation is 360°.",
        "Find 3/8 of 360°.",
        "360 × 3 ÷ 8 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "3/8 × 360° = 135°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles together form a full rotation. One is 191°. What is the other?',
      answer: "169",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 191 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 191° = 169°."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'If you turn <span class="math">1/9</span> of a full rotation, how many degrees is that?',
      choices: ["36°", "40°", "45°", "50°"],
      answer: "40°",
      hints: [
        "A full rotation is 360°.",
        "Divide 360 by 9.",
        "360 ÷ 9 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "1/9 × 360° = 40°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">7/10</span> of a full rotation, how many degrees have you turned?',
      answer: "252",
      hints: [
        "A full rotation is 360°.",
        "Find 7/10 of 360°.",
        "360 × 7 ÷ 10 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "7/10 × 360° = 252°.",
        "This is a reflex angle."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A Ferris wheel completes <span class="math">2/5</span> of a full rotation. How many degrees has it turned?',
      choices: ["120°", "135°", "144°", "150°"],
      answer: "144°",
      hints: [
        "A full rotation is 360°.",
        "Find 2/5 of 360°.",
        "360 × 2 ÷ 5 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "2/5 × 360° = 144°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles together form a full rotation. One is 93°. What is the other?',
      answer: "267",
      hints: [
        "A full rotation is 360°.",
        "Subtract the known angle from 360°.",
        "360 − 93 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "The missing angle = 360° − 93° = 267°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'If you make <span class="math">11/12</span> of a full rotation, how many degrees have you turned?',
      answer: "330",
      hints: [
        "A full rotation is 360°.",
        "Find 11/12 of 360°.",
        "360 × 11 ÷ 12 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "11/12 × 360° = 330°."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A skateboard wheel makes <span class="math">5/9</span> of a full rotation. How many degrees has it turned?',
      answer: "200",
      hints: [
        "A full rotation is 360°.",
        "Find 5/9 of 360°.",
        "360 × 5 ÷ 9 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "5/9 × 360° = 200°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A compass needle rotates <span class="math">3/10</span> of a full turn. How many degrees is that?',
      choices: ["100°", "108°", "120°", "130°"],
      answer: "108°",
      hints: [
        "A full rotation is 360°.",
        "Find 3/10 of 360°.",
        "360 × 3 ÷ 10 = ?"
      ],
      explanation: [
        "A full rotation = 360°.",
        "3/10 × 360° = 108°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles together form a full rotation. One angle is three times the other. What is the larger angle in degrees?',
      answer: "270",
      hints: [
        "Let the smaller angle be x. The larger is 3x.",
        "x + 3x = 360°.",
        "4x = 360 → x = 90, so 3x = ?"
      ],
      explanation: [
        "Let x = smaller angle. Then 3x = larger angle.",
        "x + 3x = 360° → 4x = 360° → x = 90°.",
        "The larger angle = 3 × 90° = 270°."
      ]
    }
  ],

  // ---- Topic 2: Complementary Angles (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 34°. What is the other?',
      answer: "56",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 34 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 34° = 56°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which pair of angles is complementary?',
      choices: ["25° and 65°", "40° and 60°", "50° and 50°", "70° and 30°"],
      answer: "25° and 65°",
      hints: [
        "Complementary angles add to 90°.",
        "Check: 25 + 65 = ?",
        "25 + 65 = 90. ✓"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "25° + 65° = 90°, so they are complementary.",
        "The other pairs sum to 100°, 100°, and 100° respectively."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 17° more than its complement. What is the larger angle?',
      answer: "53.5",
      hints: [
        "Let the smaller angle be x. Then the larger is x + 17.",
        "x + (x + 17) = 90.",
        "2x + 17 = 90 → 2x = 73 → x = 36.5."
      ],
      explanation: [
        "Let x = smaller angle, x + 17 = larger angle.",
        "x + x + 17 = 90 → 2x = 73 → x = 36.5.",
        "The larger angle = 36.5 + 17 = 53.5°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two complementary angles are in the ratio 2:3. What is the larger angle?',
      answer: "54",
      hints: [
        "Complementary angles add to 90°.",
        "The parts are 2 + 3 = 5 total parts.",
        "Each part = 90 ÷ 5 = 18. The larger = 3 × 18."
      ],
      explanation: [
        "Total parts = 2 + 3 = 5.",
        "Each part = 90° ÷ 5 = 18°.",
        "The larger angle = 3 × 18° = 54°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Complementary angles add up to:',
      choices: ["45°", "90°", "180°", "360°"],
      answer: "90°",
      hints: [
        "Think of the word 'corner'.",
        "A right angle is 90°.",
        "Complementary angles together form a right angle."
      ],
      explanation: [
        "By definition, complementary angles sum to 90°.",
        "This equals one right angle."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 58°. What is the other?',
      answer: "32",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 58 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 58° = 32°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 1:4. What is the smaller angle?',
      choices: ["15°", "18°", "20°", "22°"],
      answer: "18°",
      hints: [
        "Complementary angles add to 90°.",
        "Total parts = 1 + 4 = 5.",
        "Each part = 90 ÷ 5 = 18. The smaller = 1 × 18."
      ],
      explanation: [
        "Total parts = 1 + 4 = 5.",
        "Each part = 90° ÷ 5 = 18°.",
        "The smaller angle = 1 × 18° = 18°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 24° less than its complement. What is the angle?',
      answer: "33",
      hints: [
        "Let the angle be x. Its complement is 90 − x.",
        "x = (90 − x) − 24.",
        "x = 66 − x → 2x = 66."
      ],
      explanation: [
        "Let angle = x. Complement = 90 − x.",
        "x = (90 − x) − 24 → 2x = 66.",
        "x = 33°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 73°. What is the other?',
      answer: "17",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 73 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 73° = 17°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 3:7. What is the larger angle?',
      choices: ["54°", "63°", "72°", "81°"],
      answer: "63°",
      hints: [
        "Total parts = 3 + 7 = 10.",
        "Each part = 90 ÷ 10 = 9.",
        "Larger = 7 × 9 = ?"
      ],
      explanation: [
        "Total parts = 3 + 7 = 10.",
        "Each part = 90° ÷ 10 = 9°.",
        "Larger angle = 7 × 9° = 63°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 12° more than its complement. What is the larger angle?',
      answer: "51",
      hints: [
        "Let the smaller angle be x. Then the larger is x + 12.",
        "x + (x + 12) = 90.",
        "2x = 78 → x = 39, so the larger = 39 + 12 = ?"
      ],
      explanation: [
        "Let x = smaller angle, x + 12 = larger angle.",
        "2x + 12 = 90 → 2x = 78 → x = 39.",
        "The larger angle = 39 + 12 = 51°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 41°. What is the other?',
      answer: "49",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 41 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 41° = 49°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 4:5. What is the smaller angle?',
      choices: ["36°", "40°", "45°", "50°"],
      answer: "40°",
      hints: [
        "Total parts = 4 + 5 = 9.",
        "Each part = 90 ÷ 9 = 10.",
        "Smaller = 4 × 10 = ?"
      ],
      explanation: [
        "Total parts = 4 + 5 = 9.",
        "Each part = 90° ÷ 9 = 10°.",
        "Smaller angle = 4 × 10° = 40°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 30° less than its complement. What is the angle?',
      answer: "30",
      hints: [
        "Let the angle be x. Its complement is 90 − x.",
        "x = (90 − x) − 30.",
        "x = 60 − x → 2x = 60."
      ],
      explanation: [
        "Let angle = x. Complement = 90 − x.",
        "x = (90 − x) − 30 → 2x = 60.",
        "x = 30°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 19°. What is the other?',
      answer: "71",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 19 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 19° = 71°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 2:7. What is the larger angle?',
      choices: ["60°", "63°", "70°", "72°"],
      answer: "70°",
      hints: [
        "Total parts = 2 + 7 = 9.",
        "Each part = 90 ÷ 9 = 10.",
        "Larger = 7 × 10 = ?"
      ],
      explanation: [
        "Total parts = 2 + 7 = 9.",
        "Each part = 90° ÷ 9 = 10°.",
        "Larger angle = 7 × 10° = 70°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 16° more than its complement. What is the larger angle?',
      answer: "53",
      hints: [
        "Let the smaller angle be x. Then the larger is x + 16.",
        "x + (x + 16) = 90.",
        "2x = 74 → x = 37, so the larger = 37 + 16 = ?"
      ],
      explanation: [
        "Let x = smaller angle, x + 16 = larger angle.",
        "2x + 16 = 90 → 2x = 74 → x = 37.",
        "The larger angle = 37 + 16 = 53°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 47°. What is the other?',
      answer: "43",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 47 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 47° = 43°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 1:2. What is the larger angle?',
      choices: ["30°", "45°", "60°", "72°"],
      answer: "60°",
      hints: [
        "Total parts = 1 + 2 = 3.",
        "Each part = 90 ÷ 3 = 30.",
        "Larger = 2 × 30 = ?"
      ],
      explanation: [
        "Total parts = 1 + 2 = 3.",
        "Each part = 90° ÷ 3 = 30°.",
        "Larger angle = 2 × 30° = 60°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 10° less than its complement. What is the angle?',
      answer: "40",
      hints: [
        "Let the angle = x. Its complement = 90 − x.",
        "x = (90 − x) − 10.",
        "2x = 80 → x = ?"
      ],
      explanation: [
        "x = (90 − x) − 10 → 2x = 80.",
        "x = 40°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 62°. What is the other?',
      answer: "28",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 62 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 62° = 28°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 1:8. What is the larger angle?',
      choices: ["70°", "72°", "80°", "81°"],
      answer: "80°",
      hints: [
        "Total parts = 1 + 8 = 9.",
        "Each part = 90 ÷ 9 = 10.",
        "Larger = 8 × 10 = ?"
      ],
      explanation: [
        "Total parts = 1 + 8 = 9.",
        "Each part = 90° ÷ 9 = 10°.",
        "Larger angle = 8 × 10° = 80°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 22° more than its complement. What is the larger angle?',
      answer: "56",
      hints: [
        "Let the smaller angle be x. Then the larger is x + 22.",
        "x + (x + 22) = 90.",
        "2x = 68 → x = 34, so the larger = 34 + 22 = ?"
      ],
      explanation: [
        "Let x = smaller angle, x + 22 = larger angle.",
        "2x + 22 = 90 → 2x = 68 → x = 34.",
        "The larger angle = 34 + 22 = 56°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 47°. What is the other?',
      answer: "43",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 47 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 47° = 43°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 1:2. What is the larger angle?',
      choices: ["30°", "45°", "60°", "72°"],
      answer: "60°",
      hints: [
        "Total parts = 1 + 2 = 3.",
        "Each part = 90 ÷ 3 = 30.",
        "Larger = 2 × 30 = ?"
      ],
      explanation: [
        "Total parts = 1 + 2 = 3.",
        "Each part = 90° ÷ 3 = 30°.",
        "Larger angle = 2 × 30° = 60°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 10° less than its complement. What is the angle?',
      answer: "40",
      hints: [
        "Let the angle = x. Its complement = 90 − x.",
        "x = (90 − x) − 10.",
        "2x = 80 → x = ?"
      ],
      explanation: [
        "x = (90 − x) − 10 → 2x = 80.",
        "x = 40°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Two angles are complementary. One is 27°. What is the other?',
      choices: ["53°", "57°", "63°", "73°"],
      answer: "63°",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 27 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 27° = 63°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 3:2. What is the larger angle?',
      choices: ["36°", "45°", "54°", "60°"],
      answer: "54°",
      hints: [
        "Total parts = 3 + 2 = 5.",
        "Each part = 90 ÷ 5 = 18.",
        "Larger = 3 × 18 = ?"
      ],
      explanation: [
        "Total parts = 3 + 2 = 5.",
        "Each part = 90° ÷ 5 = 18°.",
        "Larger angle = 3 × 18° = 54°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 8° more than its complement. What is the larger angle?',
      answer: "49",
      hints: [
        "Let the smaller = x. The larger = x + 8.",
        "x + (x + 8) = 90.",
        "2x = 82 → x = 41, so the larger = 41 + 8 = ?"
      ],
      explanation: [
        "Let x = smaller angle, x + 8 = larger angle.",
        "2x + 8 = 90 → 2x = 82 → x = 41.",
        "The larger angle = 41 + 8 = 49°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 54°. What is the other?',
      answer: "36",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 54 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 54° = 36°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 1:5. What is the larger angle?',
      choices: ["60°", "65°", "72°", "75°"],
      answer: "75°",
      hints: [
        "Total parts = 1 + 5 = 6.",
        "Each part = 90 ÷ 6 = 15.",
        "Larger = 5 × 15 = ?"
      ],
      explanation: [
        "Total parts = 1 + 5 = 6.",
        "Each part = 90° ÷ 6 = 15°.",
        "Larger angle = 5 × 15° = 75°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 14° more than its complement. What is the larger angle?',
      answer: "52",
      hints: [
        "Let the smaller angle be x. Then the larger is x + 14.",
        "x + (x + 14) = 90.",
        "2x = 76 → x = 38, so the larger = 38 + 14 = ?"
      ],
      explanation: [
        "Let x = smaller angle, x + 14 = larger angle.",
        "2x + 14 = 90 → 2x = 76 → x = 38.",
        "The larger angle = 38 + 14 = 52°."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Two angles are complementary. One is 76°. What is the other?',
      answer: "14",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract the given angle from 90°.",
        "90 − 76 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 76° = 14°."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Two complementary angles are in the ratio 1:9. What is the smaller angle?',
      choices: ["7°", "8°", "9°", "10°"],
      answer: "9°",
      hints: [
        "Complementary angles add to 90°.",
        "Total parts = 1 + 9 = 10.",
        "Each part = 90 ÷ 10 = 9. The smaller = 1 × 9."
      ],
      explanation: [
        "Total parts = 1 + 9 = 10.",
        "Each part = 90° ÷ 10 = 9°.",
        "The smaller angle = 1 × 9° = 9°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 26° more than its complement. What is the larger angle?',
      answer: "58",
      hints: [
        "Let the smaller angle be x. Then the larger is x + 26.",
        "x + (x + 26) = 90.",
        "2x = 64 → x = 32, so the larger = 32 + 26 = ?"
      ],
      explanation: [
        "Let x = smaller angle, x + 26 = larger angle.",
        "2x + 26 = 90 → 2x = 64 → x = 32.",
        "The larger angle = 32 + 26 = 58°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "complementary", a: 27, b: 63 },
      question: 'Two angles are complementary. One measures <span class="math">(2x + 7)°</span> and the other measures <span class="math">(3x + 3)°</span>. Find <span class="math">x</span>.',
      answer: "16",
      hints: [
        "Complementary angles add to 90°.",
        "(2x + 7) + (3x + 3) = 90.",
        "5x + 10 = 90 → 5x = 80."
      ],
      explanation: [
        "(2x + 7) + (3x + 3) = 90.",
        "5x + 10 = 90 → 5x = 80 → x = 16.",
        "Check: 2(16) + 7 = 39° and 3(16) + 3 = 51°. 39 + 51 = 90°. ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      diagram: { type: "complementary", a: 38, b: 52 },
      question: 'Two angles are complementary. One is 38°. What is the other?',
      choices: ["42°", "48°", "52°", "142°"],
      answer: "52°",
      hints: [
        "Complementary angles add to 90°.",
        "90 − 38 = ?",
        "The complement is 52°."
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 38° = 52°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An angle is 36° less than its complement. What is the angle?',
      answer: "27",
      hints: [
        "Let the angle be x. Its complement is 90 − x.",
        "x = (90 − x) − 36.",
        "2x = 54 → x = ?"
      ],
      explanation: [
        "Let angle = x. Complement = 90 − x.",
        "x = (90 − x) − 36 → 2x = 54.",
        "x = 27°. Check: complement = 63°, and 63 − 27 = 36. ✓"
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'Two complementary angles are such that one angle is <span class="math">(2x + 5)°</span> and the other is <span class="math">(3x)°</span>. Find <span class="math">x</span>.',
      diagram: { type: "complementary", a: 39, b: 51 },
      answer: "17",
      hints: [
        "Complementary angles add to 90°.",
        "(2x + 5) + 3x = 90.",
        "5x + 5 = 90 → 5x = 85 → x = ?"
      ],
      explanation: [
        "(2x + 5) + 3x = 90.",
        "5x + 5 = 90 → 5x = 85 → x = 17.",
        "Check: 2(17) + 5 = 39° and 3(17) = 51°. 39 + 51 = 90°. ✓"
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A ramp makes a 38° angle with the ground. What is the complement of this angle?',
      diagram: { type: "complementary", a: 38, b: 52 },
      choices: ["42°", "48°", "52°", "142°"],
      answer: "52°",
      hints: [
        "Complementary angles add to 90°.",
        "Subtract 38 from 90.",
        "90 − 38 = ?"
      ],
      explanation: [
        "Complementary angles sum to 90°.",
        "90° − 38° = 52°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two complementary angles are in the ratio 5:4. What is the smaller angle?',
      answer: "40",
      hints: [
        "Complementary angles add to 90°.",
        "Total parts = 5 + 4 = 9.",
        "Each part = 90 ÷ 9 = 10. The smaller = 4 × 10."
      ],
      explanation: [
        "Total parts = 5 + 4 = 9.",
        "Each part = 90° ÷ 9 = 10°.",
        "The smaller angle = 4 × 10° = 40°."
      ]
    }
  ],

  // ---- Topic 3: Vertical Angles (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 72°. What is the angle directly opposite it?',
      answer: "72",
      hints: [
        "When two lines cross, they form vertical angles.",
        "Vertical angles are equal.",
        "The opposite angle = the given angle."
      ],
      explanation: [
        "Vertical angles are formed opposite each other when two lines intersect.",
        "They are always equal, so the opposite angle is 72°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect forming angles. If one angle is 118°, what is the angle adjacent to it?',
      choices: ["62°", "72°", "118°", "42°"],
      answer: "62°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 118 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection form a straight line.",
        "They are supplementary: 180° − 118° = 62°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(3x + 15)°</span> and the vertical angle is <span class="math">(5x − 9)°</span>. Find <span class="math">x</span>.',
      answer: "12",
      hints: [
        "Vertical angles are equal.",
        "Set 3x + 15 = 5x − 9.",
        "Solve: 15 + 9 = 5x − 3x → 24 = 2x."
      ],
      explanation: [
        "Vertical angles are equal: 3x + 15 = 5x − 9.",
        "24 = 2x → x = 12."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Vertical angles are:',
      choices: ["Always supplementary", "Always equal", "Always complementary", "Always adjacent"],
      answer: "Always equal",
      hints: [
        "When two lines cross, the opposite angles match.",
        "They are not next to each other — they are across.",
        "Opposite angles formed this way are equal."
      ],
      explanation: [
        "Vertical angles are formed by two intersecting lines.",
        "They are always equal to each other."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines cross. One angle is 53°. Find the sum of all four angles at the intersection.',
      answer: "360",
      hints: [
        "Four angles are formed around a point.",
        "All angles around a point sum to a full rotation.",
        "A full rotation is 360°."
      ],
      explanation: [
        "Angles around a point always sum to 360°.",
        "The four angles are 53°, 127°, 53°, 127° which total 360°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is 45°. What is the angle adjacent to it?',
      answer: "135",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 45 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 45° = 135°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(2x + 30)°</span> and the vertical angle is <span class="math">(4x − 10)°</span>. Find <span class="math">x</span>.',
      answer: "20",
      hints: [
        "Vertical angles are equal.",
        "Set 2x + 30 = 4x − 10.",
        "30 + 10 = 4x − 2x → 40 = 2x."
      ],
      explanation: [
        "Vertical angles are equal: 2x + 30 = 4x − 10.",
        "40 = 2x → x = 20."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Two lines cross. One angle formed is 95°. What is the angle directly opposite it?',
      choices: ["85°", "90°", "95°", "180°"],
      answer: "95°",
      hints: [
        "When two lines cross, opposite angles are called vertical angles.",
        "Vertical angles are always equal.",
        "So the opposite angle = 95°."
      ],
      explanation: [
        "Vertical angles are equal.",
        "The angle directly opposite 95° is also 95°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 38°. What is the angle directly opposite it?',
      answer: "38",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 38°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 38° is also 38°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 67°. What is the angle adjacent to it?',
      choices: ["67°", "90°", "113°", "123°"],
      answer: "113°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 67 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 67° = 113°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(5x + 10)°</span> and the vertical angle is <span class="math">(8x − 20)°</span>. Find <span class="math">x</span>.',
      answer: "10",
      hints: [
        "Vertical angles are equal.",
        "Set 5x + 10 = 8x − 20.",
        "30 = 3x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 5x + 10 = 8x − 20.",
        "30 = 3x → x = 10."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 146°. What is the angle directly opposite it?',
      answer: "146",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 146°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 146° is also 146°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 82°. What is the angle adjacent to it?',
      choices: ["82°", "88°", "98°", "108°"],
      answer: "98°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 82 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 82° = 98°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 84°. What is the angle directly opposite it?',
      answer: "84",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 84°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 84° is also 84°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 139°. What is the angle adjacent to it?',
      choices: ["41°", "51°", "139°", "49°"],
      answer: "41°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 139 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 139° = 41°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(8x + 1)°</span> and the vertical angle is <span class="math">(11x − 14)°</span>. Find <span class="math">x</span>.',
      answer: "5",
      hints: [
        "Vertical angles are equal.",
        "Set 8x + 1 = 11x − 14.",
        "15 = 3x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 8x + 1 = 11x − 14.",
        "15 = 3x → x = 5."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(6x + 4)°</span> and the vertical angle is <span class="math">(9x − 17)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Vertical angles are equal.",
        "Set 6x + 4 = 9x − 17.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 6x + 4 = 9x − 17.",
        "21 = 3x → x = 7."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 109°. What is the angle directly opposite it?',
      answer: "109",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 109°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 109° is also 109°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 54°. What is the angle adjacent to it?',
      choices: ["54°", "116°", "126°", "136°"],
      answer: "126°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 54 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 54° = 126°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(7x + 3)°</span> and the vertical angle is <span class="math">(10x − 18)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Vertical angles are equal.",
        "Set 7x + 3 = 10x − 18.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 7x + 3 = 10x − 18.",
        "21 = 3x → x = 7."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 163°. What is the angle directly opposite it?',
      answer: "163",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 163°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 163° is also 163°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 76°. What is the angle adjacent to it?',
      choices: ["76°", "94°", "104°", "114°"],
      answer: "104°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 76 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 76° = 104°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(4x + 7)°</span> and the vertical angle is <span class="math">(6x − 11)°</span>. Find <span class="math">x</span>.',
      answer: "9",
      hints: [
        "Vertical angles are equal.",
        "Set 4x + 7 = 6x − 11.",
        "18 = 2x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 4x + 7 = 6x − 11.",
        "18 = 2x → x = 9."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 84°. What is the angle directly opposite it?',
      answer: "84",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 84°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 84° is also 84°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 139°. What is the angle adjacent to it?',
      choices: ["41°", "51°", "139°", "49°"],
      answer: "41°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 139 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 139° = 41°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(8x + 1)°</span> and the vertical angle is <span class="math">(11x − 14)°</span>. Find <span class="math">x</span>.',
      answer: "5",
      hints: [
        "Vertical angles are equal.",
        "Set 8x + 1 = 11x − 14.",
        "15 = 3x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 8x + 1 = 11x − 14.",
        "15 = 3x → x = 5."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Two lines cross. One angle formed is 57°. What is the angle directly opposite it?',
      choices: ["33°", "57°", "123°", "180°"],
      answer: "57°",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 57°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 57° is also 57°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 149°. What is the angle adjacent to it?',
      choices: ["31°", "41°", "49°", "149°"],
      answer: "31°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 149 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 149° = 31°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(3x + 8)°</span> and the vertical angle is <span class="math">(5x − 16)°</span>. Find <span class="math">x</span>.',
      answer: "12",
      hints: [
        "Vertical angles are equal.",
        "Set 3x + 8 = 5x − 16.",
        "24 = 2x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 3x + 8 = 5x − 16.",
        "24 = 2x → x = 12."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 127°. What is the angle directly opposite it?',
      answer: "127",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 127°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 127° is also 127°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 43°. What is the angle adjacent to it?',
      choices: ["43°", "127°", "137°", "147°"],
      answer: "137°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 43 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 43° = 137°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(9x − 5)°</span> and the vertical angle is <span class="math">(7x + 11)°</span>. Find <span class="math">x</span>.',
      answer: "8",
      hints: [
        "Vertical angles are equal.",
        "Set 9x − 5 = 7x + 11.",
        "2x = 16 → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 9x − 5 = 7x + 11.",
        "2x = 16 → x = 8.",
        "The angles are each 67°."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'Two lines cross. One angle formed is 156°. What is the angle directly opposite it?',
      answer: "156",
      hints: [
        "Vertical angles are equal.",
        "The opposite angle equals the given angle.",
        "So the opposite angle = 156°."
      ],
      explanation: [
        "Vertical angles are always equal.",
        "The angle directly opposite 156° is also 156°."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Two lines intersect. One angle is 68°. What is the angle adjacent to it?',
      choices: ["68°", "102°", "112°", "122°"],
      answer: "112°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add to 180°.",
        "180 − 68 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 68° = 112°.",
        "The vertical angle to 68° would also be 68°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'Two lines intersect. One angle is <span class="math">(5x + 2)°</span> and the vertical angle is <span class="math">(7x − 16)°</span>. Find <span class="math">x</span>.',
      answer: "9",
      hints: [
        "Vertical angles are equal.",
        "Set 5x + 2 = 7x − 16.",
        "18 = 2x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 5x + 2 = 7x − 16.",
        "18 = 2x → x = 9.",
        "The angles are each 47°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "verticalAngles", a: 65 },
      question: 'Two lines intersect. One angle is <span class="math">(4x + 5)°</span> and the vertical angle is <span class="math">(6x − 25)°</span>. Find <span class="math">x</span>.',
      answer: "15",
      hints: [
        "Vertical angles are equal.",
        "Set 4x + 5 = 6x − 25.",
        "30 = 2x → x = ?"
      ],
      explanation: [
        "Vertical angles are equal: 4x + 5 = 6x − 25.",
        "30 = 2x → x = 15.",
        "Check: 4(15) + 5 = 65° and 6(15) − 25 = 65°. ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      diagram: { type: "verticalAngles", a: 83 },
      question: 'Two lines cross. One angle is 83°. What is the angle directly across from it?',
      choices: ["7°", "83°", "97°", "180°"],
      answer: "83°",
      hints: [
        "When two lines cross, opposite angles are called vertical angles.",
        "Vertical angles are always equal.",
        "The opposite angle equals the given angle."
      ],
      explanation: [
        "Vertical angles are equal.",
        "The angle directly across = 83°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "verticalAngles", a: 58 },
      question: 'Two lines intersect. One angle is 58°. What is the measure of an adjacent angle?',
      answer: "122",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "Supplementary angles add to 180°.",
        "180 − 58 = ?"
      ],
      explanation: [
        "Adjacent angles at an intersection are supplementary.",
        "180° − 58° = 122°."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'Two vertical angles are formed by intersecting lines. One angle measures <span class="math">(4x)°</span> and its vertical angle measures 60°. Find <span class="math">x</span>.',
      diagram: { type: "verticalAngles", a: 60 },
      answer: "15",
      hints: [
        "Vertical angles are equal.",
        "So 4x = 60.",
        "x = 60 ÷ 4 = ?"
      ],
      explanation: [
        "Vertical angles are equal, so 4x = 60.",
        "x = 60 ÷ 4 = 15."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Two intersecting lines form four angles. One angle is 72°. What is the angle adjacent to it?',
      diagram: { type: "verticalAngles", a: 72 },
      choices: ["72°", "108°", "18°", "288°"],
      answer: "108°",
      hints: [
        "Adjacent angles on a straight line are supplementary.",
        "They add up to 180°.",
        "180 − 72 = ?"
      ],
      explanation: [
        "Adjacent angles formed by intersecting lines are supplementary.",
        "180° − 72° = 108°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two vertical angles are <span class="math">(5x − 20)°</span> and <span class="math">(3x + 14)°</span>. Find the measure of each angle.',
      diagram: { type: "verticalAngles", a: 65 },
      answer: "65",
      hints: [
        "Vertical angles are equal.",
        "5x − 20 = 3x + 14.",
        "2x = 34 → x = 17. Substitute back."
      ],
      explanation: [
        "5x − 20 = 3x + 14 → 2x = 34 → x = 17.",
        "Each angle = 5(17) − 20 = 85 − 20 = 65°.",
        "Check: 3(17) + 14 = 51 + 14 = 65°. ✓"
      ]
    }
  ],

  // ---- Topic 4: Angles in Triangles (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 65° and 48°. What is the third angle?',
      answer: "67",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 65 + 48 = 113.",
        "Subtract from 180: 180 − 113 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "65° + 48° = 113°.",
        "Third angle = 180° − 113° = 67°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">x</span>, <span class="math">2x</span>, and <span class="math">3x</span>. What is <span class="math">x</span>?',
      choices: ["20°", "30°", "36°", "45°"],
      answer: "30°",
      hints: [
        "All three angles sum to 180°.",
        "x + 2x + 3x = 180 → 6x = 180.",
        "x = 180 ÷ 6 = ?"
      ],
      explanation: [
        "x + 2x + 3x = 6x = 180°.",
        "x = 30°.",
        "The angles are 30°, 60°, and 90°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 37°. What is the other acute angle?',
      answer: "53",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 37 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 37° = 127°.",
        "The other acute angle = 180° − 127° = 53°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The sum of the interior angles of any triangle is:',
      choices: ["90°", "180°", "270°", "360°"],
      answer: "180°",
      hints: [
        "This is a fundamental fact about all triangles.",
        "It is less than a full rotation (360°).",
        "It equals a straight angle."
      ],
      explanation: [
        "The interior angles of any triangle always sum to 180°.",
        "This works for all triangles — acute, right, or obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An equilateral triangle has all angles equal. What is each angle?',
      answer: "60",
      hints: [
        "All three angles are the same in an equilateral triangle.",
        "They must add to 180°.",
        "180 ÷ 3 = ?"
      ],
      explanation: [
        "All angles are equal in an equilateral triangle.",
        "3 × angle = 180° → each angle = 60°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has angles of 72° and 58°. What is the third angle?',
      answer: "50",
      hints: [
        "The angles in a triangle add to 180°.",
        "72 + 58 = 130.",
        "180 − 130 = ?"
      ],
      explanation: [
        "Sum of angles = 180°.",
        "72° + 58° = 130°.",
        "Third angle = 180° − 130° = 50°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has one acute angle of 28°. What is the other acute angle?',
      choices: ["52°", "62°", "72°", "82°"],
      answer: "62°",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 28 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 28° = 118°.",
        "The other acute angle = 180° − 118° = 62°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has two angles of 75° each. What is the third angle?',
      answer: "30",
      hints: [
        "Sum of angles = 180°.",
        "75 + 75 = 150.",
        "180 − 150 = ?"
      ],
      explanation: [
        "75° + 75° = 150°.",
        "Third angle = 180° − 150° = 30°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">2x</span>, <span class="math">3x</span>, and <span class="math">4x</span>. What is <span class="math">x</span>?',
      choices: ["15°", "18°", "20°", "24°"],
      answer: "20°",
      hints: [
        "All three angles sum to 180°.",
        "2x + 3x + 4x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "2x + 3x + 4x = 9x = 180°.",
        "x = 20°.",
        "The angles are 40°, 60°, and 80°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 90° and 35°. What is the third angle?',
      answer: "55",
      hints: [
        "The angles in a triangle add to 180°.",
        "90 + 35 = 125.",
        "180 − 125 = ?"
      ],
      explanation: [
        "Sum of angles = 180°.",
        "90° + 35° = 125°.",
        "Third angle = 180° − 125° = 55°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has two angles of 68° each. What is the third angle?',
      answer: "44",
      hints: [
        "Sum of angles = 180°.",
        "68 + 68 = 136.",
        "180 − 136 = ?"
      ],
      explanation: [
        "68° + 68° = 136°.",
        "Third angle = 180° − 136° = 44°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 46° and 79°. What is the third angle?',
      answer: "55",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 46 + 79 = 125.",
        "Subtract from 180: 180 − 125 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "46° + 79° = 125°.",
        "Third angle = 180° − 125° = 55°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">2x</span>, <span class="math">5x</span>, and <span class="math">2x</span>. What is <span class="math">x</span>?',
      choices: ["15°", "20°", "25°", "30°"],
      answer: "20°",
      hints: [
        "All three angles sum to 180°.",
        "2x + 5x + 2x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "2x + 5x + 2x = 9x = 180°.",
        "x = 20°.",
        "The angles are 40°, 100°, and 40°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 27°. What is the other acute angle?',
      answer: "63",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 27 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 27° = 117°.",
        "The other acute angle = 180° − 117° = 63°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 82° and 43°. What is the third angle?',
      answer: "55",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 82 + 43 = 125.",
        "Subtract from 180: 180 − 125 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "82° + 43° = 125°.",
        "Third angle = 180° − 125° = 55°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">x</span>, <span class="math">3x</span>, and <span class="math">5x</span>. What is <span class="math">x</span>?',
      choices: ["15°", "20°", "25°", "30°"],
      answer: "20°",
      hints: [
        "All three angles sum to 180°.",
        "x + 3x + 5x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "x + 3x + 5x = 9x = 180°.",
        "x = 20°.",
        "The angles are 20°, 60°, and 100°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 52°. What is the other acute angle?',
      answer: "38",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 52 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 52° = 142°.",
        "The other acute angle = 180° − 142° = 38°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 57° and 74°. What is the third angle?',
      answer: "49",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 57 + 74 = 131.",
        "Subtract from 180: 180 − 131 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "57° + 74° = 131°.",
        "Third angle = 180° − 131° = 49°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">x</span>, <span class="math">4x</span>, and <span class="math">7x</span>. What is <span class="math">x</span>?',
      choices: ["12°", "15°", "18°", "20°"],
      answer: "15°",
      hints: [
        "All three angles sum to 180°.",
        "x + 4x + 7x = 180 → 12x = 180.",
        "x = 180 ÷ 12 = ?"
      ],
      explanation: [
        "x + 4x + 7x = 12x = 180°.",
        "x = 15°.",
        "The angles are 15°, 60°, and 105°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has two angles of 54° each. What is the third angle?',
      answer: "72",
      hints: [
        "Sum of angles = 180°.",
        "54 + 54 = 108.",
        "180 − 108 = ?"
      ],
      explanation: [
        "54° + 54° = 108°.",
        "Third angle = 180° − 108° = 72°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 38° and 67°. What is the third angle?',
      answer: "75",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 38 + 67 = 105.",
        "Subtract from 180: 180 − 105 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "38° + 67° = 105°.",
        "Third angle = 180° − 105° = 75°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">x</span>, <span class="math">2x</span>, and <span class="math">6x</span>. What is <span class="math">x</span>?',
      choices: ["15°", "18°", "20°", "24°"],
      answer: "20°",
      hints: [
        "All three angles sum to 180°.",
        "x + 2x + 6x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "x + 2x + 6x = 9x = 180°.",
        "x = 20°.",
        "The angles are 20°, 40°, and 120°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 19°. What is the other acute angle?',
      answer: "71",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 19 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 19° = 109°.",
        "The other acute angle = 180° − 109° = 71°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 46° and 79°. What is the third angle?',
      answer: "55",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 46 + 79 = 125.",
        "Subtract from 180: 180 − 125 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "46° + 79° = 125°.",
        "Third angle = 180° − 125° = 55°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">2x</span>, <span class="math">5x</span>, and <span class="math">2x</span>. What is <span class="math">x</span>?',
      choices: ["15°", "20°", "25°", "30°"],
      answer: "20°",
      hints: [
        "All three angles sum to 180°.",
        "2x + 5x + 2x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "2x + 5x + 2x = 9x = 180°.",
        "x = 20°.",
        "The angles are 40°, 100°, and 40°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 27°. What is the other acute angle?',
      answer: "63",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 27 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 27° = 117°.",
        "The other acute angle = 180° − 117° = 63°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A triangle has angles of 71° and 54°. What is the third angle?',
      choices: ["45°", "50°", "55°", "65°"],
      answer: "55°",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 71 + 54 = 125.",
        "Subtract from 180: 180 − 125 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "71° + 54° = 125°.",
        "Third angle = 180° − 125° = 55°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">3x</span>, <span class="math">4x</span>, and <span class="math">5x</span>. What is <span class="math">x</span>?',
      choices: ["12°", "15°", "18°", "20°"],
      answer: "15°",
      hints: [
        "All three angles sum to 180°.",
        "3x + 4x + 5x = 180 → 12x = 180.",
        "x = 180 ÷ 12 = ?"
      ],
      explanation: [
        "3x + 4x + 5x = 12x = 180°.",
        "x = 15°.",
        "The angles are 45°, 60°, and 75°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 41°. What is the other acute angle?',
      answer: "49",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 41 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 41° = 131°.",
        "The other acute angle = 180° − 131° = 49°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 83° and 52°. What is the third angle?',
      answer: "45",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 83 + 52 = 135.",
        "Subtract from 180: 180 − 135 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "83° + 52° = 135°.",
        "Third angle = 180° − 135° = 45°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">x</span>, <span class="math">5x</span>, and <span class="math">6x</span>. What is <span class="math">x</span>?',
      choices: ["12°", "15°", "18°", "20°"],
      answer: "15°",
      hints: [
        "All three angles sum to 180°.",
        "x + 5x + 6x = 180 → 12x = 180.",
        "x = 180 ÷ 12 = ?"
      ],
      explanation: [
        "x + 5x + 6x = 12x = 180°.",
        "x = 15°.",
        "The angles are 15°, 75°, and 90°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 34°. What is the other acute angle?',
      answer: "56",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 34 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 34° = 124°.",
        "The other acute angle = 180° − 124° = 56°."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has angles of 29° and 86°. What is the third angle?',
      answer: "65",
      hints: [
        "The angles in a triangle add to 180°.",
        "Add the two known angles: 29 + 86 = 115.",
        "Subtract from 180: 180 − 115 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "29° + 86° = 115°.",
        "Third angle = 180° − 115° = 65°."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles <span class="math">x</span>, <span class="math">4x</span>, and <span class="math">4x</span>. What is <span class="math">x</span>?',
      choices: ["15°", "18°", "20°", "24°"],
      answer: "20°",
      hints: [
        "All three angles sum to 180°.",
        "x + 4x + 4x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "x + 4x + 4x = 9x = 180°.",
        "x = 20°.",
        "The angles are 20°, 80°, and 80°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has one acute angle of 18°. What is the other acute angle?',
      answer: "72",
      hints: [
        "A right triangle has a 90° angle.",
        "The three angles sum to 180°.",
        "180 − 90 − 18 = ?"
      ],
      explanation: [
        "The right angle is 90°.",
        "90° + 18° = 108°.",
        "The other acute angle = 180° − 108° = 72°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "triangle", sides: [0,0,0], angles: [55, 75, 50], labels: ["A","B","C"] },
      question: 'In triangle ABC, angle A = 55° and angle B = 75°. Find angle C.',
      answer: "50",
      hints: [
        "The angles of a triangle add up to 180°.",
        "55 + 75 = 130.",
        "180 − 130 = ?"
      ],
      explanation: [
        "Sum of angles in a triangle = 180°.",
        "Angle C = 180° − 55° − 75° = 50°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles measuring <span class="math">(2x + 10)°</span>, <span class="math">(3x − 5)°</span>, and <span class="math">55°</span>. What is <span class="math">x</span>?',
      choices: ["20", "24", "25", "30"],
      answer: "24",
      hints: [
        "All three angles must add to 180°.",
        "(2x + 10) + (3x − 5) + 55 = 180.",
        "5x + 60 = 180 → 5x = 120."
      ],
      explanation: [
        "(2x + 10) + (3x − 5) + 55 = 180.",
        "5x + 60 = 180 → 5x = 120 → x = 24.",
        "Check: 58° + 67° + 55° = 180°. ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A triangle has a right angle and a 35° angle. What is the third angle?',
      diagram: { type: "rightTriangle", a: 0, b: 0, c: 0, showUnknown: "c" },
      choices: ["45°", "55°", "65°", "90°"],
      answer: "55°",
      hints: [
        "A right angle is 90°.",
        "All angles in a triangle sum to 180°.",
        "180 − 90 − 35 = ?"
      ],
      explanation: [
        "Sum of angles = 180°.",
        "Third angle = 180° − 90° − 35° = 55°."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'Two angles of a triangle measure 45° and 65°. What is the third angle?',
      diagram: { type: "triangle", sides: [0,0,0], angles: [45, 65, 70], labels: ["A","B","C"] },
      answer: "70",
      hints: [
        "The angles of a triangle add to 180°.",
        "Add the two known angles: 45 + 65 = 110.",
        "Subtract from 180: 180 − 110 = ?"
      ],
      explanation: [
        "Triangle angle sum = 180°.",
        "Third angle = 180° − 45° − 65° = 70°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has angles measuring 30°, 60°, and 90°. What type of triangle is it?',
      diagram: { type: "triangle", sides: [0,0,0], angles: [30, 60, 90], labels: ["P","Q","R"] },
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Right",
      hints: [
        "Look at the angles: is any one exactly 90°?",
        "Yes — one angle is 90°.",
        "A triangle with a 90° angle is a right triangle."
      ],
      explanation: [
        "A triangle with one 90° angle is called a right triangle.",
        "The angles 30° + 60° + 90° = 180°, confirming a valid triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The angles of a triangle are <span class="math">(2x)°</span>, <span class="math">(3x)°</span>, and <span class="math">(4x)°</span>. Find the largest angle.',
      answer: "80",
      hints: [
        "The angles of a triangle sum to 180°.",
        "2x + 3x + 4x = 180.",
        "9x = 180 → x = 20. Largest = 4 × 20."
      ],
      explanation: [
        "2x + 3x + 4x = 180 → 9x = 180 → x = 20.",
        "The angles are 40°, 60°, and 80°.",
        "The largest angle is 4(20) = 80°."
      ]
    }
  ],

  // ---- Topic 5: Polygon Angle Sums (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a hexagon (6 sides)?',
      answer: "720",
      hints: [
        "Use the formula: (n − 2) × 180°.",
        "For a hexagon, n = 6.",
        "(6 − 2) × 180 = 4 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (n − 2) × 180°.",
        "(6 − 2) × 180° = 4 × 180° = 720°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is the sum of the interior angles of a pentagon (5 sides)?',
      choices: ["360°", "540°", "720°", "900°"],
      answer: "540°",
      hints: [
        "Use (n − 2) × 180° with n = 5.",
        "(5 − 2) = 3.",
        "3 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (n − 2) × 180°.",
        "(5 − 2) × 180° = 3 × 180° = 540°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A polygon has an interior angle sum of 1440°. How many sides does it have?',
      answer: "10",
      hints: [
        "Use (n − 2) × 180 = 1440.",
        "n − 2 = 1440 ÷ 180 = 8.",
        "n = 8 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 1440.",
        "n − 2 = 8.",
        "n = 10. It is a decagon."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which polygon has an interior angle sum of 1080°?',
      choices: ["Hexagon", "Heptagon", "Octagon", "Nonagon"],
      answer: "Octagon",
      hints: [
        "(n − 2) × 180 = 1080.",
        "n − 2 = 1080 ÷ 180 = 6.",
        "n = 8. What is an 8-sided polygon called?"
      ],
      explanation: [
        "(n − 2) × 180 = 1080 → n − 2 = 6 → n = 8.",
        "An 8-sided polygon is an octagon."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of interior angles of a quadrilateral (4 sides)?',
      answer: "360",
      hints: [
        "Use (n − 2) × 180° with n = 4.",
        "(4 − 2) = 2.",
        "2 × 180 = ?"
      ],
      explanation: [
        "(n − 2) × 180° = (4 − 2) × 180°.",
        "= 2 × 180° = 360°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a heptagon (7 sides)?',
      answer: "900",
      hints: [
        "Use (n − 2) × 180° with n = 7.",
        "(7 − 2) = 5.",
        "5 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (7 − 2) × 180°.",
        "= 5 × 180° = 900°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 1800°. How many sides does it have?',
      choices: ["10", "11", "12", "13"],
      answer: "12",
      hints: [
        "(n − 2) × 180 = 1800.",
        "n − 2 = 1800 ÷ 180 = 10.",
        "n = 10 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 1800.",
        "n − 2 = 10 → n = 12. It is a dodecagon."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a 17-sided polygon?',
      answer: "2700",
      hints: [
        "Use (n − 2) × 180° with n = 17.",
        "(17 − 2) = 15.",
        "15 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (17 − 2) × 180°.",
        "= 15 × 180° = 2700°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 2520°. How many sides does it have?',
      choices: ["14", "15", "16", "17"],
      answer: "16",
      hints: [
        "(n − 2) × 180 = 2520.",
        "n − 2 = 2520 ÷ 180 = 14.",
        "n = 14 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 2520.",
        "n − 2 = 14 → n = 16 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 19-sided polygon?',
      answer: "3060",
      hints: [
        "Use (n − 2) × 180° with n = 19.",
        "(19 − 2) = 17.",
        "17 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (19 − 2) × 180°.",
        "= 17 × 180° = 3060°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a nonagon (9 sides)?',
      answer: "1260",
      hints: [
        "Use (n − 2) × 180° with n = 9.",
        "(9 − 2) = 7.",
        "7 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (9 − 2) × 180°.",
        "= 7 × 180° = 1260°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a triangle (3 sides)?',
      answer: "180",
      hints: [
        "Use (n − 2) × 180° with n = 3.",
        "(3 − 2) = 1.",
        "1 × 180 = ?"
      ],
      explanation: [
        "(n − 2) × 180° = (3 − 2) × 180°.",
        "= 1 × 180° = 180°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 2160°. How many sides does it have?',
      choices: ["12", "13", "14", "15"],
      answer: "14",
      hints: [
        "(n − 2) × 180 = 2160.",
        "n − 2 = 2160 ÷ 180 = 12.",
        "n = 12 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 2160.",
        "n − 2 = 12 → n = 14 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of an 11-sided polygon?',
      answer: "1620",
      hints: [
        "Use (n − 2) × 180° with n = 11.",
        "(11 − 2) = 9.",
        "9 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (11 − 2) × 180°.",
        "= 9 × 180° = 1620°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of an octagon (8 sides)?',
      answer: "1080",
      hints: [
        "Use (n − 2) × 180° with n = 8.",
        "(8 − 2) = 6.",
        "6 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (8 − 2) × 180°.",
        "= 6 × 180° = 1080°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 900°. How many sides does it have?',
      choices: ["5", "6", "7", "8"],
      answer: "7",
      hints: [
        "(n − 2) × 180 = 900.",
        "n − 2 = 900 ÷ 180 = 5.",
        "n = 5 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 900.",
        "n − 2 = 5 → n = 7 sides (a heptagon)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 15-sided polygon?',
      answer: "2340",
      hints: [
        "Use (n − 2) × 180° with n = 15.",
        "(15 − 2) = 13.",
        "13 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (15 − 2) × 180°.",
        "= 13 × 180° = 2340°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a decagon (10 sides)?',
      answer: "1440",
      hints: [
        "Use (n − 2) × 180° with n = 10.",
        "(10 − 2) = 8.",
        "8 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (10 − 2) × 180°.",
        "= 8 × 180° = 1440°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 540°. How many sides does it have?',
      choices: ["4", "5", "6", "7"],
      answer: "5",
      hints: [
        "(n − 2) × 180 = 540.",
        "n − 2 = 540 ÷ 180 = 3.",
        "n = 3 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 540.",
        "n − 2 = 3 → n = 5 sides (a pentagon)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 13-sided polygon?',
      answer: "1980",
      hints: [
        "Use (n − 2) × 180° with n = 13.",
        "(13 − 2) = 11.",
        "11 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (13 − 2) × 180°.",
        "= 11 × 180° = 1980°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a 12-sided polygon?',
      answer: "1800",
      hints: [
        "Use (n − 2) × 180° with n = 12.",
        "(12 − 2) = 10.",
        "10 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (12 − 2) × 180°.",
        "= 10 × 180° = 1800°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 3240°. How many sides does it have?',
      choices: ["18", "19", "20", "21"],
      answer: "20",
      hints: [
        "(n − 2) × 180 = 3240.",
        "n − 2 = 3240 ÷ 180 = 18.",
        "n = 18 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 3240.",
        "n − 2 = 18 → n = 20 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 16-sided polygon?',
      answer: "2520",
      hints: [
        "Use (n − 2) × 180° with n = 16.",
        "(16 − 2) = 14.",
        "14 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (16 − 2) × 180°.",
        "= 14 × 180° = 2520°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a 17-sided polygon?',
      answer: "2700",
      hints: [
        "Use (n − 2) × 180° with n = 17.",
        "(17 − 2) = 15.",
        "15 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (17 − 2) × 180°.",
        "= 15 × 180° = 2700°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 2520°. How many sides does it have?',
      choices: ["14", "15", "16", "17"],
      answer: "16",
      hints: [
        "(n − 2) × 180 = 2520.",
        "n − 2 = 2520 ÷ 180 = 14.",
        "n = 14 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 2520.",
        "n − 2 = 14 → n = 16 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 19-sided polygon?',
      answer: "3060",
      hints: [
        "Use (n − 2) × 180° with n = 19.",
        "(19 − 2) = 17.",
        "17 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (19 − 2) × 180°.",
        "= 17 × 180° = 3060°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'What is the sum of the interior angles of a 14-sided polygon?',
      choices: ["1980°", "2160°", "2340°", "2520°"],
      answer: "2160°",
      hints: [
        "Use (n − 2) × 180° with n = 14.",
        "(14 − 2) = 12.",
        "12 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (14 − 2) × 180°.",
        "= 12 × 180° = 2160°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 1620°. How many sides does it have?',
      choices: ["9", "10", "11", "12"],
      answer: "11",
      hints: [
        "(n − 2) × 180 = 1620.",
        "n − 2 = 1620 ÷ 180 = 9.",
        "n = 9 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 1620.",
        "n − 2 = 9 → n = 11 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of an 18-sided polygon?',
      answer: "2880",
      hints: [
        "Use (n − 2) × 180° with n = 18.",
        "(18 − 2) = 16.",
        "16 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (18 − 2) × 180°.",
        "= 16 × 180° = 2880°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a 20-sided polygon?',
      answer: "3240",
      hints: [
        "Use the formula: (n − 2) × 180°.",
        "(20 − 2) = 18.",
        "18 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (20 − 2) × 180°.",
        "= 18 × 180° = 3240°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 1260°. How many sides does it have?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "(n − 2) × 180 = 1260.",
        "n − 2 = 1260 ÷ 180 = 7.",
        "n = 7 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 1260.",
        "n − 2 = 7 → n = 9 sides (a nonagon)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 22-sided polygon?',
      answer: "3600",
      hints: [
        "Use (n − 2) × 180° with n = 22.",
        "(22 − 2) = 20.",
        "20 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (22 − 2) × 180°.",
        "= 20 × 180° = 3600°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a 23-sided polygon?',
      answer: "3780",
      hints: [
        "Use the formula: (n − 2) × 180°.",
        "(23 − 2) = 21.",
        "21 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (n − 2) × 180°.",
        "(23 − 2) × 180° = 21 × 180° = 3780°."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 2340°. How many sides does it have?',
      choices: ["13", "14", "15", "16"],
      answer: "15",
      hints: [
        "(n − 2) × 180 = 2340.",
        "n − 2 = 2340 ÷ 180 = 13.",
        "n = 13 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 2340.",
        "n − 2 = 13 → n = 15 sides.",
        "A 15-sided polygon is called a pentadecagon."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of the interior angles of a 25-sided polygon?',
      answer: "4140",
      hints: [
        "Use (n − 2) × 180° with n = 25.",
        "(25 − 2) = 23.",
        "23 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (25 − 2) × 180°.",
        "= 23 × 180° = 4140°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "polygon", n: 6, angle: 120 },
      question: 'What is the sum of interior angles of a hexagon (6 sides)?',
      answer: "720",
      hints: [
        "Use the formula: (n − 2) × 180°.",
        "A hexagon has 6 sides, so n = 6.",
        "(6 − 2) × 180 = 4 × 180 = ?"
      ],
      explanation: [
        "Sum of interior angles = (n − 2) × 180°.",
        "(6 − 2) × 180° = 4 × 180° = 720°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A polygon has an interior angle sum of 1080°. How many sides does it have?',
      choices: ["6", "7", "8", "9"],
      answer: "8",
      hints: [
        "Use (n − 2) × 180 = 1080.",
        "n − 2 = 1080 ÷ 180 = 6.",
        "n = 6 + 2 = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 1080.",
        "n − 2 = 6, so n = 8.",
        "An octagon (8 sides) has angle sum 1080°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is the sum of interior angles of a 10-sided polygon (decagon)?',
      diagram: { type: "polygon", n: 10, angle: 144 },
      answer: "1440",
      hints: [
        "Use (n − 2) × 180°.",
        "n = 10, so (10 − 2) × 180.",
        "8 × 180 = ?"
      ],
      explanation: [
        "Sum = (n − 2) × 180° = (10 − 2) × 180°.",
        "= 8 × 180° = 1440°."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a hexagon (6 sides)?',
      diagram: { type: "polygon", n: 6, angle: 120 },
      answer: "720",
      hints: [
        "Use the formula: (n − 2) × 180°.",
        "For a hexagon, n = 6.",
        "(6 − 2) × 180 = 4 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (n − 2) × 180°.",
        "(6 − 2) × 180° = 4 × 180° = 720°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A polygon has an interior angle sum of 1080°. How many sides does it have?',
      choices: ["6", "7", "8", "9"],
      answer: "8",
      hints: [
        "Use (n − 2) × 180 = angle sum.",
        "(n − 2) × 180 = 1080.",
        "n − 2 = 1080 ÷ 180 = 6, so n = ?"
      ],
      explanation: [
        "(n − 2) × 180 = 1080.",
        "n − 2 = 6 → n = 8.",
        "An octagon has an interior angle sum of 1080°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the sum of the interior angles of a decagon (10 sides)?',
      diagram: { type: "polygon", n: 10, angle: 144 },
      answer: "1440",
      hints: [
        "Use the formula: (n − 2) × 180°.",
        "For a decagon, n = 10.",
        "(10 − 2) × 180 = 8 × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (n − 2) × 180°.",
        "(10 − 2) × 180° = 8 × 180° = 1440°."
      ]
    }
  ],

  // ---- Topic 6: Regular Polygon Angles (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular hexagon?',
      answer: "120",
      hints: [
        "Sum = (6 − 2) × 180 = 720°.",
        "A regular hexagon has 6 equal angles.",
        "720 ÷ 6 = ?"
      ],
      explanation: [
        "Interior angle sum = (6 − 2) × 180° = 720°.",
        "Each angle = 720° ÷ 6 = 120°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Each interior angle of a regular octagon is:',
      choices: ["120°", "128°", "135°", "144°"],
      answer: "135°",
      hints: [
        "Sum = (8 − 2) × 180 = 1080°.",
        "Divide by 8 sides.",
        "1080 ÷ 8 = ?"
      ],
      explanation: [
        "Sum = (8 − 2) × 180° = 1080°.",
        "Each angle = 1080° ÷ 8 = 135°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 140°. How many sides does it have?',
      answer: "9",
      hints: [
        "Each angle = (n − 2) × 180 ÷ n.",
        "140n = (n − 2) × 180 = 180n − 360.",
        "360 = 40n → n = ?"
      ],
      explanation: [
        "140n = 180n − 360.",
        "40n = 360.",
        "n = 9 sides (a regular nonagon)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Each interior angle of a regular pentagon is:',
      choices: ["100°", "108°", "120°", "128°"],
      answer: "108°",
      hints: [
        "Sum = (5 − 2) × 180 = 540°.",
        "Divide by 5 sides.",
        "540 ÷ 5 = ?"
      ],
      explanation: [
        "Sum = (5 − 2) × 180° = 540°.",
        "Each angle = 540° ÷ 5 = 108°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular 20-sided polygon?',
      answer: "162",
      hints: [
        "Sum = (20 − 2) × 180 = 3240°.",
        "A regular 20-gon has 20 equal angles.",
        "3240 ÷ 20 = ?"
      ],
      explanation: [
        "Interior angle sum = (20 − 2) × 180° = 3240°.",
        "Each angle = 3240° ÷ 20 = 162°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 168°. How many sides does it have?',
      choices: ["24", "28", "30", "36"],
      answer: "30",
      hints: [
        "Each exterior angle = 180 − 168 = 12°.",
        "n = 360 ÷ 12.",
        "= 30."
      ],
      explanation: [
        "Exterior angle = 180° − 168° = 12°.",
        "n = 360° ÷ 12° = 30 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 24-sided polygon?',
      answer: "15",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 24-gon has 24 equal exterior angles.",
        "360 ÷ 24 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 24 = 15°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular decagon (10 sides)?',
      answer: "36",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular decagon has 10 equal exterior angles.",
        "360 ÷ 10 = ?"
      ],
      explanation: [
        "Exterior angles always sum to 360°.",
        "Each exterior angle = 360° ÷ 10 = 36°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular triangle (equilateral)?',
      answer: "60",
      hints: [
        "Sum = (3 − 2) × 180 = 180°.",
        "A regular triangle has 3 equal angles.",
        "180 ÷ 3 = ?"
      ],
      explanation: [
        "Interior angle sum = 180°.",
        "Each angle = 180° ÷ 3 = 60°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 150°. How many sides does it have?',
      choices: ["10", "11", "12", "15"],
      answer: "12",
      hints: [
        "Each exterior angle = 180 − 150 = 30°.",
        "n = 360 ÷ 30.",
        "= 12."
      ],
      explanation: [
        "Exterior angle = 180° − 150° = 30°.",
        "n = 360° ÷ 30° = 12 sides (a regular dodecagon)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular pentagon?',
      answer: "72",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular pentagon has 5 equal exterior angles.",
        "360 ÷ 5 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 5 = 72°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular quadrilateral (square)?',
      answer: "90",
      hints: [
        "Sum = (4 − 2) × 180 = 360°.",
        "A regular quadrilateral has 4 equal angles.",
        "360 ÷ 4 = ?"
      ],
      explanation: [
        "Interior angle sum = 360°.",
        "Each angle = 360° ÷ 4 = 90°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 144°. How many sides does it have?',
      choices: ["8", "9", "10", "12"],
      answer: "10",
      hints: [
        "Each exterior angle = 180 − 144 = 36°.",
        "n = 360 ÷ 36.",
        "= 10."
      ],
      explanation: [
        "Exterior angle = 180° − 144° = 36°.",
        "n = 360° ÷ 36° = 10 sides (a regular decagon)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular octagon?',
      answer: "45",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular octagon has 8 equal exterior angles.",
        "360 ÷ 8 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 8 = 45°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular heptagon (7 sides)?',
      answer: "128.57",
      hints: [
        "Sum = (7 − 2) × 180 = 900°.",
        "A regular heptagon has 7 equal angles.",
        "900 ÷ 7 ≈ ?"
      ],
      explanation: [
        "Interior angle sum = (7 − 2) × 180° = 900°.",
        "Each angle = 900° ÷ 7 ≈ 128.57°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 160°. How many sides does it have?',
      choices: ["14", "16", "18", "20"],
      answer: "18",
      hints: [
        "Each exterior angle = 180 − 160 = 20°.",
        "n = 360 ÷ 20.",
        "= 18."
      ],
      explanation: [
        "Exterior angle = 180° − 160° = 20°.",
        "n = 360° ÷ 20° = 18 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular hexagon?',
      answer: "60",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular hexagon has 6 equal exterior angles.",
        "360 ÷ 6 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 6 = 60°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular nonagon (9 sides)?',
      answer: "140",
      hints: [
        "Sum = (9 − 2) × 180 = 1260°.",
        "A regular nonagon has 9 equal angles.",
        "1260 ÷ 9 = ?"
      ],
      explanation: [
        "Interior angle sum = (9 − 2) × 180° = 1260°.",
        "Each angle = 1260° ÷ 9 = 140°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 156°. How many sides does it have?',
      choices: ["12", "14", "15", "18"],
      answer: "15",
      hints: [
        "Each exterior angle = 180 − 156 = 24°.",
        "n = 360 ÷ 24.",
        "= 15."
      ],
      explanation: [
        "Exterior angle = 180° − 156° = 24°.",
        "n = 360° ÷ 24° = 15 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 12-sided polygon?',
      answer: "30",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 12-gon has 12 equal exterior angles.",
        "360 ÷ 12 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 12 = 30°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular decagon (10 sides)?',
      answer: "144",
      hints: [
        "Sum = (10 − 2) × 180 = 1440°.",
        "A regular decagon has 10 equal angles.",
        "1440 ÷ 10 = ?"
      ],
      explanation: [
        "Interior angle sum = (10 − 2) × 180° = 1440°.",
        "Each angle = 1440° ÷ 10 = 144°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 162°. How many sides does it have?',
      choices: ["16", "18", "20", "24"],
      answer: "20",
      hints: [
        "Each exterior angle = 180 − 162 = 18°.",
        "n = 360 ÷ 18.",
        "= 20."
      ],
      explanation: [
        "Exterior angle = 180° − 162° = 18°.",
        "n = 360° ÷ 18° = 20 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 15-sided polygon?',
      answer: "24",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 15-gon has 15 equal exterior angles.",
        "360 ÷ 15 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 15 = 24°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular 20-sided polygon?',
      answer: "162",
      hints: [
        "Sum = (20 − 2) × 180 = 3240°.",
        "A regular 20-gon has 20 equal angles.",
        "3240 ÷ 20 = ?"
      ],
      explanation: [
        "Interior angle sum = (20 − 2) × 180° = 3240°.",
        "Each angle = 3240° ÷ 20 = 162°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 168°. How many sides does it have?',
      choices: ["24", "28", "30", "36"],
      answer: "30",
      hints: [
        "Each exterior angle = 180 − 168 = 12°.",
        "n = 360 ÷ 12.",
        "= 30."
      ],
      explanation: [
        "Exterior angle = 180° − 168° = 12°.",
        "n = 360° ÷ 12° = 30 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 24-sided polygon?',
      answer: "15",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 24-gon has 24 equal exterior angles.",
        "360 ÷ 24 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 24 = 15°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular 12-sided polygon?',
      answer: "150",
      hints: [
        "Sum = (12 − 2) × 180 = 1800°.",
        "A regular 12-gon has 12 equal angles.",
        "1800 ÷ 12 = ?"
      ],
      explanation: [
        "Interior angle sum = (12 − 2) × 180° = 1800°.",
        "Each angle = 1800° ÷ 12 = 150°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 135°. How many sides does it have?',
      choices: ["6", "7", "8", "9"],
      answer: "8",
      hints: [
        "Each exterior angle = 180 − 135 = 45°.",
        "n = 360 ÷ 45.",
        "= 8."
      ],
      explanation: [
        "Exterior angle = 180° − 135° = 45°.",
        "n = 360° ÷ 45° = 8 sides (a regular octagon)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 18-sided polygon?',
      answer: "20",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 18-gon has 18 equal exterior angles.",
        "360 ÷ 18 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 18 = 20°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular 15-sided polygon?',
      answer: "156",
      hints: [
        "Sum = (15 − 2) × 180 = 2340°.",
        "A regular 15-gon has 15 equal angles.",
        "2340 ÷ 15 = ?"
      ],
      explanation: [
        "Interior angle sum = (15 − 2) × 180° = 2340°.",
        "Each angle = 2340° ÷ 15 = 156°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 165°. How many sides does it have?',
      choices: ["20", "22", "24", "30"],
      answer: "24",
      hints: [
        "Each exterior angle = 180 − 165 = 15°.",
        "n = 360 ÷ 15.",
        "= 24."
      ],
      explanation: [
        "Exterior angle = 180° − 165° = 15°.",
        "n = 360° ÷ 15° = 24 sides."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 20-sided polygon?',
      answer: "18",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 20-gon has 20 equal exterior angles.",
        "360 ÷ 20 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 20 = 18°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'What is each interior angle of a regular 16-sided polygon?',
      answer: "157.5",
      hints: [
        "Sum = (16 − 2) × 180 = 2520°.",
        "A regular 16-gon has 16 equal angles.",
        "2520 ÷ 16 = ?"
      ],
      explanation: [
        "Interior angle sum = (16 − 2) × 180° = 2520°.",
        "Each angle = 2520° ÷ 16 = 157.5°."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle equal to 120°. How many sides does it have?',
      choices: ["5", "6", "7", "8"],
      answer: "6",
      hints: [
        "Each exterior angle = 180 − 120 = 60°.",
        "n = 360 ÷ 60.",
        "= 6."
      ],
      explanation: [
        "Exterior angle = 180° − 120° = 60°.",
        "n = 360° ÷ 60° = 6 sides (a regular hexagon)."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'What is each exterior angle of a regular 36-sided polygon?',
      answer: "10",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular 36-gon has 36 equal exterior angles.",
        "360 ÷ 36 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each exterior angle = 360° ÷ 36 = 10°.",
        "The interior angle would be 180° − 10° = 170°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "polygon", n: 8, angle: 135 },
      question: 'Each interior angle of a regular octagon measures how many degrees?',
      answer: "135",
      hints: [
        "Sum of angles = (n − 2) × 180°.",
        "For n = 8: (8 − 2) × 180 = 1080°.",
        "Divide by 8: 1080 ÷ 8 = ?"
      ],
      explanation: [
        "Sum = (8 − 2) × 180° = 1080°.",
        "Each angle = 1080° ÷ 8 = 135°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle measuring 140°. How many sides does it have?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "Each angle = (n − 2) × 180 ÷ n.",
        "140n = (n − 2) × 180 = 180n − 360.",
        "360 = 40n → n = ?"
      ],
      explanation: [
        "140n = 180n − 360.",
        "40n = 360 → n = 9.",
        "A regular 9-sided polygon (nonagon) has 140° angles."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "polygon", n: 5, angle: 108 },
      question: 'What is the measure of each exterior angle of a regular pentagon?',
      answer: "72",
      hints: [
        "Exterior angles of any polygon sum to 360°.",
        "A regular pentagon has 5 equal exterior angles.",
        "360 ÷ 5 = ?"
      ],
      explanation: [
        "Sum of exterior angles = 360°.",
        "Each exterior angle = 360° ÷ 5 = 72°."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'What is the measure of each interior angle of a regular octagon?',
      diagram: { type: "polygon", n: 8, angle: 135 },
      answer: "135",
      hints: [
        "Interior angle sum = (n − 2) × 180°.",
        "For n = 8: (8 − 2) × 180 = 1080°.",
        "Each angle = 1080 ÷ 8 = ?"
      ],
      explanation: [
        "Angle sum = (8 − 2) × 180° = 1080°.",
        "Each angle = 1080° ÷ 8 = 135°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each interior angle measuring 140°. How many sides does it have?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "Each exterior angle = 180° − 140° = 40°.",
        "Number of sides = 360° ÷ exterior angle.",
        "360 ÷ 40 = ?"
      ],
      explanation: [
        "Exterior angle = 180° − 140° = 40°.",
        "Number of sides = 360° ÷ 40° = 9.",
        "It is a regular nonagon."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the measure of each exterior angle of a regular pentagon?',
      diagram: { type: "polygon", n: 5, angle: 108 },
      answer: "72",
      hints: [
        "The sum of exterior angles of any polygon is 360°.",
        "For a regular pentagon, divide equally.",
        "360 ÷ 5 = ?"
      ],
      explanation: [
        "Sum of exterior angles = 360°.",
        "Each exterior angle = 360° ÷ 5 = 72°."
      ]
    }
  ],

  // ---- Topic 7: Parallel Lines & Transversals (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 65°. What is its alternate interior angle?',
      answer: "65",
      hints: [
        "Alternate interior angles are on opposite sides of the transversal.",
        "When lines are parallel, alternate interior angles are equal.",
        "So the angle equals 65°."
      ],
      explanation: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = 65°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A transversal cuts two parallel lines. A corresponding angle to a 110° angle measures:',
      choices: ["70°", "80°", "110°", "180°"],
      answer: "110°",
      hints: [
        "Corresponding angles are in the same position at each intersection.",
        "When lines are parallel, corresponding angles are equal.",
        "So it equals the original angle."
      ],
      explanation: [
        "Corresponding angles are equal when lines are parallel.",
        "The corresponding angle = 110°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 107°. What is its corresponding angle?',
      answer: "107",
      hints: [
        "Corresponding angles are equal when lines are parallel.",
        "If one is 107° …",
        "The corresponding angle is also 107°."
      ],
      explanation: [
        "Corresponding angles are equal.",
        "The corresponding angle = 107°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 53°. What is the other co-interior angle?',
      choices: ["53°", "117°", "127°", "137°"],
      answer: "127°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 53 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 53° = 127°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(3x + 14)°</span> and its alternate interior angle is <span class="math">(6x − 7)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Alternate interior angles are equal.",
        "3x + 14 = 6x − 7.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 3x + 14 = 6x − 7.",
        "21 = 3x → x = 7.",
        "The angles are each 35°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A transversal crosses two parallel lines. One angle is 74°. What is the co-interior (same-side interior) angle?',
      answer: "106",
      hints: [
        "Co-interior angles are supplementary.",
        "They add to 180°.",
        "180 − 74 = ?"
      ],
      explanation: [
        "Co-interior (same-side interior) angles sum to 180°.",
        "180° − 74° = 106°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. Angle 1 = <span class="math">(4x + 8)°</span> and its alternate interior angle = <span class="math">(6x − 12)°</span>. What is <span class="math">x</span>?',
      choices: ["8", "10", "12", "14"],
      answer: "10",
      hints: [
        "Alternate interior angles are equal.",
        "4x + 8 = 6x − 12.",
        "20 = 2x → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 4x + 8 = 6x − 12.",
        "20 = 2x → x = 10.",
        "The angles are each 48°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Two parallel lines are cut by a transversal. One angle is 132°. What is the alternate exterior angle?',
      answer: "132",
      hints: [
        "Alternate exterior angles are on opposite sides, both outside the parallel lines.",
        "When lines are parallel, alternate exterior angles are equal.",
        "So the angle = 132°."
      ],
      explanation: [
        "Alternate exterior angles are equal with parallel lines.",
        "The alternate exterior angle = 132°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 48°. What is the corresponding angle?',
      answer: "48",
      hints: [
        "Corresponding angles are in the same position at each intersection.",
        "When lines are parallel, corresponding angles are equal.",
        "So the corresponding angle = 48°."
      ],
      explanation: [
        "Corresponding angles are equal when lines are parallel.",
        "The corresponding angle = 48°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 115°. What is the other co-interior angle?',
      choices: ["55°", "65°", "75°", "115°"],
      answer: "65°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 115 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 115° = 65°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(3x + 20)°</span> and its corresponding angle is <span class="math">(5x − 16)°</span>. Find <span class="math">x</span>.',
      answer: "18",
      hints: [
        "Corresponding angles are equal.",
        "3x + 20 = 5x − 16.",
        "36 = 2x → x = ?"
      ],
      explanation: [
        "Corresponding angles are equal: 3x + 20 = 5x − 16.",
        "36 = 2x → x = 18.",
        "The angles are each 74°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 57°. What is the co-interior (same-side interior) angle?',
      answer: "123",
      hints: [
        "Co-interior angles are supplementary.",
        "They add to 180°.",
        "180 − 57 = ?"
      ],
      explanation: [
        "Co-interior (same-side interior) angles sum to 180°.",
        "180° − 57° = 123°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. Angle 1 = <span class="math">(7x − 4)°</span> and its alternate interior angle = <span class="math">(5x + 18)°</span>. What is <span class="math">x</span>?',
      choices: ["9", "10", "11", "12"],
      answer: "11",
      hints: [
        "Alternate interior angles are equal.",
        "7x − 4 = 5x + 18.",
        "2x = 22 → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 7x − 4 = 5x + 18.",
        "2x = 22 → x = 11.",
        "The angles are each 73°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A transversal crosses two parallel lines. One angle is 142°. What is the alternate exterior angle?',
      answer: "142",
      hints: [
        "Alternate exterior angles are on opposite sides, both outside the parallel lines.",
        "When lines are parallel, alternate exterior angles are equal.",
        "So the angle = 142°."
      ],
      explanation: [
        "Alternate exterior angles are equal with parallel lines.",
        "The alternate exterior angle = 142°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 93°. What is the corresponding angle?',
      answer: "93",
      hints: [
        "Corresponding angles are in the same position at each intersection.",
        "When lines are parallel, corresponding angles are equal.",
        "So the corresponding angle = 93°."
      ],
      explanation: [
        "Corresponding angles are equal when lines are parallel.",
        "The corresponding angle = 93°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 62°. What is the other co-interior angle?',
      choices: ["62°", "108°", "118°", "128°"],
      answer: "118°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 62 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 62° = 118°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(4x + 5)°</span> and its alternate interior angle is <span class="math">(7x − 19)°</span>. Find <span class="math">x</span>.',
      answer: "8",
      hints: [
        "Alternate interior angles are equal.",
        "4x + 5 = 7x − 19.",
        "24 = 3x → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 4x + 5 = 7x − 19.",
        "24 = 3x → x = 8.",
        "The angles are each 37°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 83°. What is its alternate interior angle?',
      answer: "83",
      hints: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = the given angle.",
        "So it equals 83°."
      ],
      explanation: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = 83°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 78°. What is the other co-interior angle?',
      choices: ["78°", "92°", "102°", "112°"],
      answer: "102°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 78 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 78° = 102°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(6x + 7)°</span> and its corresponding angle is <span class="math">(9x − 14)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Corresponding angles are equal.",
        "6x + 7 = 9x − 14.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Corresponding angles are equal: 6x + 7 = 9x − 14.",
        "21 = 3x → x = 7.",
        "The angles are each 49°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 71°. What is its alternate interior angle?',
      answer: "71",
      hints: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = the given angle.",
        "So it equals 71°."
      ],
      explanation: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = 71°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 97°. What is the other co-interior angle?',
      choices: ["73°", "83°", "87°", "97°"],
      answer: "83°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 97 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 97° = 83°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(5x + 3)°</span> and its alternate interior angle is <span class="math">(8x − 21)°</span>. Find <span class="math">x</span>.',
      answer: "8",
      hints: [
        "Alternate interior angles are equal.",
        "5x + 3 = 8x − 21.",
        "24 = 3x → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 5x + 3 = 8x − 21.",
        "24 = 3x → x = 8.",
        "The angles are each 43°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 107°. What is its corresponding angle?',
      answer: "107",
      hints: [
        "Corresponding angles are equal when lines are parallel.",
        "If one is 107° …",
        "The corresponding angle is also 107°."
      ],
      explanation: [
        "Corresponding angles are equal.",
        "The corresponding angle = 107°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 53°. What is the other co-interior angle?',
      choices: ["53°", "117°", "127°", "137°"],
      answer: "127°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 53 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 53° = 127°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(3x + 14)°</span> and its alternate interior angle is <span class="math">(6x − 7)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Alternate interior angles are equal.",
        "3x + 14 = 6x − 7.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 3x + 14 = 6x − 7.",
        "21 = 3x → x = 7.",
        "The angles are each 35°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 119°. What is its corresponding angle?',
      answer: "119",
      hints: [
        "Corresponding angles are equal when lines are parallel.",
        "If one is 119° …",
        "The corresponding angle is also 119°."
      ],
      explanation: [
        "Corresponding angles are equal.",
        "The corresponding angle = 119°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 41°. What is the other co-interior angle?',
      choices: ["41°", "129°", "139°", "149°"],
      answer: "139°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 41 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 41° = 139°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(2x + 11)°</span> and its alternate interior angle is <span class="math">(4x − 13)°</span>. Find <span class="math">x</span>.',
      answer: "12",
      hints: [
        "Alternate interior angles are equal.",
        "2x + 11 = 4x − 13.",
        "24 = 2x → x = ?"
      ],
      explanation: [
        "Alternate interior angles are equal: 2x + 11 = 4x − 13.",
        "24 = 2x → x = 12.",
        "The angles are each 35°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 59°. What is its alternate interior angle?',
      answer: "59",
      hints: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = the given angle.",
        "So it equals 59°."
      ],
      explanation: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = 59°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 89°. What is the other co-interior angle?',
      choices: ["81°", "89°", "91°", "101°"],
      answer: "91°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 89 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 89° = 91°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(7x + 2)°</span> and its corresponding angle is <span class="math">(10x − 19)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Corresponding angles are equal.",
        "7x + 2 = 10x − 19.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Corresponding angles are equal: 7x + 2 = 10x − 19.",
        "21 = 3x → x = 7.",
        "The angles are each 51°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A transversal crosses two parallel lines. One angle is 124°. What is its alternate interior angle?',
      answer: "124",
      hints: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = the given angle.",
        "So it equals 124°."
      ],
      explanation: [
        "Alternate interior angles are equal when lines are parallel.",
        "The alternate interior angle = 124°."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. One co-interior angle is 71°. What is the other co-interior angle?',
      choices: ["71°", "99°", "109°", "119°"],
      answer: "109°",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add to 180°.",
        "180 − 71 = ?"
      ],
      explanation: [
        "Co-interior angles sum to 180°.",
        "180° − 71° = 109°.",
        "This applies whenever the lines are parallel."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. One angle is <span class="math">(9x + 1)°</span> and its corresponding angle is <span class="math">(12x − 20)°</span>. Find <span class="math">x</span>.',
      answer: "7",
      hints: [
        "Corresponding angles are equal.",
        "9x + 1 = 12x − 20.",
        "21 = 3x → x = ?"
      ],
      explanation: [
        "Corresponding angles are equal: 9x + 1 = 12x − 20.",
        "21 = 3x → x = 7.",
        "The angles are each 64°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "parallelLines", angle: 115, highlight: "alternate" },
      question: 'Two parallel lines are cut by a transversal. If <span class="math">m∠3 = 115°</span>, find <span class="math">m∠6</span> (the alternate interior angle).',
      answer: "115",
      hints: [
        "When parallel lines are cut by a transversal, alternate interior angles are equal.",
        "∠3 and ∠6 are alternate interior angles.",
        "So m∠6 = m∠3."
      ],
      explanation: [
        "Alternate interior angles are equal when formed by parallel lines and a transversal.",
        "m∠6 = m∠3 = 115°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "parallelLines", angle: 68, highlight: "corresponding" },
      question: 'Lines p and q are parallel, cut by transversal t. If <span class="math">m∠1 = 68°</span>, what is <span class="math">m∠5</span> (the corresponding angle)?',
      choices: ["22°", "68°", "112°", "180°"],
      answer: "68°",
      hints: [
        "Corresponding angles are in the same position at each intersection.",
        "When lines are parallel, corresponding angles are equal.",
        "∠1 and ∠5 are corresponding angles."
      ],
      explanation: [
        "Corresponding angles formed by parallel lines and a transversal are equal.",
        "m∠5 = m∠1 = 68°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "parallelLines", angle: 125, highlight: "co-interior" },
      question: 'Two parallel lines are cut by a transversal. If <span class="math">m∠4 = 125°</span>, find <span class="math">m∠5</span> (the co-interior angle on the same side).',
      answer: "55",
      hints: [
        "Co-interior (same-side interior) angles are supplementary.",
        "They add up to 180°.",
        "180 − 125 = ?"
      ],
      explanation: [
        "Co-interior angles between parallel lines sum to 180°.",
        "m∠5 = 180° − 125° = 55°."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'Two parallel lines are cut by a transversal. One alternate interior angle measures 55°. What is the other alternate interior angle?',
      diagram: { type: "parallelLines", angle: 55, highlight: "alternate" },
      answer: "55",
      hints: [
        "Alternate interior angles with parallel lines are equal.",
        "If one is 55°, the other is also …",
        "They are equal: 55°."
      ],
      explanation: [
        "When parallel lines are cut by a transversal, alternate interior angles are equal.",
        "The other angle is also 55°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Parallel lines are cut by a transversal. A co-interior (same-side interior) angle is 118°. What is the other co-interior angle?',
      diagram: { type: "parallelLines", angle: 118, highlight: "co-interior" },
      choices: ["52°", "62°", "72°", "118°"],
      answer: "62°",
      hints: [
        "Co-interior angles with parallel lines are supplementary.",
        "They add up to 180°.",
        "180 − 118 = ?"
      ],
      explanation: [
        "Co-interior angles are supplementary (sum to 180°).",
        "180° − 118° = 62°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two parallel lines are cut by a transversal. Corresponding angles are <span class="math">(3x + 10)°</span> and <span class="math">(5x − 24)°</span>. Find <span class="math">x</span>.',
      diagram: { type: "parallelLines", angle: 61, highlight: "corresponding" },
      answer: "17",
      hints: [
        "Corresponding angles with parallel lines are equal.",
        "3x + 10 = 5x − 24.",
        "34 = 2x → x = ?"
      ],
      explanation: [
        "Corresponding angles are equal: 3x + 10 = 5x − 24.",
        "10 + 24 = 5x − 3x → 34 = 2x → x = 17.",
        "Check: 3(17) + 10 = 61° and 5(17) − 24 = 61°. ✓"
      ]
    }
  ],

  // ---- Topic 8: Exterior Angles (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'The sum of the exterior angles of any convex polygon is how many degrees?',
      answer: "360",
      hints: [
        "This is a constant for all convex polygons.",
        "It does not depend on the number of sides.",
        "The sum is always 360°."
      ],
      explanation: [
        "The exterior angles of any convex polygon always sum to 360°.",
        "This is true regardless of how many sides the polygon has."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Each exterior angle of a regular hexagon is:',
      choices: ["30°", "45°", "60°", "72°"],
      answer: "60°",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular hexagon has 6 equal exterior angles.",
        "360 ÷ 6 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 6 = 60°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 24°. How many sides does it have?',
      answer: "15",
      hints: [
        "Exterior angles sum to 360°.",
        "Number of sides = 360 ÷ (each exterior angle).",
        "360 ÷ 24 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "n = 360° ÷ 24° = 15 sides."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An exterior angle of a triangle is 125°. What is the sum of the two non-adjacent interior angles?',
      choices: ["55°", "125°", "180°", "235°"],
      answer: "125°",
      hints: [
        "The exterior angle theorem relates an exterior angle to the remote interior angles.",
        "An exterior angle equals the sum of the two non-adjacent interior angles.",
        "So the sum = 125°."
      ],
      explanation: [
        "By the Exterior Angle Theorem, an exterior angle of a triangle equals the sum of the two remote interior angles.",
        "Therefore the sum = 125°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 50° and 70°. What is the exterior angle at the third vertex?',
      answer: "120",
      hints: [
        "The third interior angle = 180 − 50 − 70 = 60°.",
        "An exterior angle is supplementary to its adjacent interior angle.",
        "180 − 60 = ?"
      ],
      explanation: [
        "Third interior angle = 180° − 50° − 70° = 60°.",
        "Exterior angle = 180° − 60° = 120°.",
        "Or directly: 50° + 70° = 120° (Exterior Angle Theorem)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular octagon is how many degrees?',
      answer: "45",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular octagon has 8 equal exterior angles.",
        "360 ÷ 8 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 8 = 45°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 40°. How many sides does it have?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 40.",
        "= 9."
      ],
      explanation: [
        "n = 360° ÷ 40° = 9 sides.",
        "It is a regular nonagon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 35° and 85°. What is the exterior angle at the third vertex?',
      answer: "120",
      hints: [
        "Third interior angle = 180 − 35 − 85 = 60°.",
        "Exterior angle = 180 − 60.",
        "Or by the theorem: 35 + 85 = ?"
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 35° + 85° = 120°.",
        "Or: third interior = 60°, exterior = 180° − 60° = 120°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 30°. How many sides does it have?',
      answer: "12",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 30.",
        "= 12."
      ],
      explanation: [
        "n = 360° ÷ 30° = 12 sides.",
        "It is a regular dodecagon."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Each exterior angle of a regular pentagon is:',
      choices: ["60°", "72°", "80°", "90°"],
      answer: "72°",
      hints: [
        "Exterior angles sum to 360°.",
        "A pentagon has 5 sides.",
        "360 ÷ 5 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 5 = 72°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 42° and 73°. What is the exterior angle at the third vertex?',
      answer: "115",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "42 + 73 = ?",
        "= 115."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 42° + 73° = 115°.",
        "Or: third interior = 180° − 115° = 65°, exterior = 180° − 65° = 115°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular decagon (10 sides) is how many degrees?',
      answer: "36",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular decagon has 10 equal exterior angles.",
        "360 ÷ 10 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 10 = 36°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 20°. How many sides does it have?',
      choices: ["15", "16", "18", "20"],
      answer: "18",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 20.",
        "= 18."
      ],
      explanation: [
        "n = 360° ÷ 20° = 18 sides.",
        "It is a regular 18-gon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 58° and 67°. What is the exterior angle at the third vertex?',
      answer: "125",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "58 + 67 = ?",
        "= 125."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 58° + 67° = 125°.",
        "Or: third interior = 55°, exterior = 180° − 55° = 125°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular 9-sided polygon is how many degrees?',
      answer: "40",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular 9-gon has 9 equal exterior angles.",
        "360 ÷ 9 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 9 = 40°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 15°. How many sides does it have?',
      choices: ["20", "22", "24", "30"],
      answer: "24",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 15.",
        "= 24."
      ],
      explanation: [
        "n = 360° ÷ 15° = 24 sides.",
        "It is a regular 24-gon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 29° and 64°. What is the exterior angle at the third vertex?',
      answer: "93",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "29 + 64 = ?",
        "= 93."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 29° + 64° = 93°.",
        "Or: third interior = 87°, exterior = 180° − 87° = 93°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular 15-sided polygon is how many degrees?',
      answer: "24",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular 15-gon has 15 equal exterior angles.",
        "360 ÷ 15 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 15 = 24°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 12°. How many sides does it have?',
      choices: ["24", "28", "30", "36"],
      answer: "30",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 12.",
        "= 30."
      ],
      explanation: [
        "n = 360° ÷ 12° = 30 sides.",
        "It is a regular 30-gon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 46° and 81°. What is the exterior angle at the third vertex?',
      answer: "127",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "46 + 81 = ?",
        "= 127."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 46° + 81° = 127°.",
        "Or: third interior = 53°, exterior = 180° − 53° = 127°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has interior angles of 39° and 67°. What is the exterior angle at the third vertex?',
      answer: "106",
      hints: [
        "Exterior angle = sum of the two non-adjacent interior angles.",
        "39 + 67 = ?",
        "= 106."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 39° + 67° = 106°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 48°. What is each base angle?',
      answer: "66",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 48 = 132.",
        "Each base angle = 132 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 48° = 132°.",
        "Each base angle = 132° ÷ 2 = 66°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 28° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "Vertex angle = 180 − 28 − 28 = 124°.",
        "Is any angle greater than 90°?",
        "124° > 90°, so it is obtuse."
      ],
      explanation: [
        "Vertex angle = 180° − 56° = 124°.",
        "Since 124° > 90°, the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular 20-sided polygon is how many degrees?',
      answer: "18",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular 20-gon has 20 equal exterior angles.",
        "360 ÷ 20 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 20 = 18°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 10°. How many sides does it have?',
      choices: ["30", "32", "36", "40"],
      answer: "36",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 10.",
        "= 36."
      ],
      explanation: [
        "n = 360° ÷ 10° = 36 sides.",
        "It is a regular 36-gon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 55° and 78°. What is the exterior angle at the third vertex?',
      answer: "133",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "55 + 78 = ?",
        "= 133."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 55° + 78° = 133°.",
        "Or: third interior = 47°, exterior = 180° − 47° = 133°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular 12-sided polygon is how many degrees?',
      answer: "30",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular 12-gon has 12 equal exterior angles.",
        "360 ÷ 12 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 12 = 30°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 45°. How many sides does it have?',
      choices: ["6", "7", "8", "9"],
      answer: "8",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 45.",
        "= 8."
      ],
      explanation: [
        "n = 360° ÷ 45° = 8 sides.",
        "It is a regular octagon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 37° and 89°. What is the exterior angle at the third vertex?',
      answer: "126",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "37 + 89 = ?",
        "= 126."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 37° + 89° = 126°.",
        "Or: third interior = 54°, exterior = 180° − 54° = 126°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Each exterior angle of a regular 18-sided polygon is how many degrees?',
      answer: "20",
      hints: [
        "Exterior angles sum to 360°.",
        "A regular 18-gon has 18 equal exterior angles.",
        "360 ÷ 18 = ?"
      ],
      explanation: [
        "Exterior angles sum to 360°.",
        "Each = 360° ÷ 18 = 20°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A regular polygon has each exterior angle equal to 36°. How many sides does it have?',
      choices: ["8", "9", "10", "12"],
      answer: "10",
      hints: [
        "Exterior angles sum to 360°.",
        "n = 360 ÷ 36.",
        "= 10."
      ],
      explanation: [
        "n = 360° ÷ 36° = 10 sides.",
        "It is a regular decagon."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has interior angles of 44° and 63°. What is the exterior angle at the third vertex?',
      answer: "107",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "44 + 63 = ?",
        "= 107."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 44° + 63° = 107°.",
        "Or: third interior = 73°, exterior = 180° − 73° = 107°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has two interior angles of 39° and 58°. What is the exterior angle at the third vertex?',
      answer: "97",
      hints: [
        "The exterior angle equals the sum of the two non-adjacent interior angles.",
        "39 + 58 = ?",
        "= 97."
      ],
      explanation: [
        "By the Exterior Angle Theorem: exterior = 39° + 58° = 97°.",
        "Or: third interior = 83°, exterior = 180° − 83° = 97°."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has two interior angles of 47° and 65°. What is the exterior angle at the third vertex?',
      choices: ["68°", "102°", "112°", "122°"],
      answer: "112°",
      hints: [
        "The exterior angle equals the sum of the two remote interior angles.",
        "47 + 65 = ?",
        "= 112."
      ],
      explanation: [
        "Exterior Angle Theorem: exterior = 47° + 65° = 112°.",
        "The third interior angle is 68°.",
        "Exterior = 180° − 68° = 112°."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'An exterior angle of a triangle is 131°. One of the remote interior angles is 54°. What is the other remote interior angle?',
      answer: "77",
      hints: [
        "The exterior angle = sum of the two remote interior angles.",
        "131 = 54 + ?",
        "131 − 54 = ?"
      ],
      explanation: [
        "Exterior angle = sum of remote interior angles.",
        "131° = 54° + x → x = 131° − 54° = 77°.",
        "The third interior angle = 180° − 131° = 49°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "triangle", sides: [0,0,0], angles: [48, 67, 65], labels: ["P","Q","R"] },
      question: 'In triangle PQR, angle P = 48° and angle Q = 67°. What is the measure of the exterior angle at vertex R?',
      answer: "115",
      hints: [
        "An exterior angle of a triangle equals the sum of the two remote interior angles.",
        "Remote interior angles are P and Q.",
        "48 + 67 = ?"
      ],
      explanation: [
        "Exterior angle = sum of the two non-adjacent interior angles.",
        "Exterior angle at R = 48° + 67° = 115°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'The exterior angle of a triangle is 130°. One remote interior angle is 55°. What is the other remote interior angle?',
      choices: ["50°", "65°", "75°", "85°"],
      answer: "75°",
      hints: [
        "Exterior angle = sum of the two remote interior angles.",
        "130 = 55 + other.",
        "Other = 130 − 55 = ?"
      ],
      explanation: [
        "Exterior angle = sum of remote interior angles.",
        "Other angle = 130° − 55° = 75°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An exterior angle of a triangle is <span class="math">(5x + 10)°</span>. The two remote interior angles are <span class="math">(2x + 15)°</span> and <span class="math">(x + 31)°</span>. Find <span class="math">x</span>.',
      answer: "18",
      hints: [
        "Exterior angle = sum of remote interior angles.",
        "5x + 10 = (2x + 15) + (x + 31).",
        "5x + 10 = 3x + 46 → 2x = 36."
      ],
      explanation: [
        "5x + 10 = 2x + 15 + x + 31 = 3x + 46.",
        "2x = 36 → x = 18.",
        "Check: exterior = 100°, remote = 51° + 49° = 100°. ✓"
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'An exterior angle of a triangle measures 130°. One of the remote interior angles is 55°. What is the other remote interior angle?',
      diagram: { type: "triangle", sides: [0,0,0], angles: [55, 75, 50], labels: ["X","Y","Z"] },
      answer: "75",
      hints: [
        "An exterior angle equals the sum of the two remote interior angles.",
        "130 = 55 + other angle.",
        "Other = 130 − 55 = ?"
      ],
      explanation: [
        "Exterior angle = sum of remote interior angles.",
        "130° = 55° + other → other = 130° − 55° = 75°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An exterior angle of a triangle is <span class="math">(6x)°</span> and the two remote interior angles are <span class="math">(2x + 10)°</span> and <span class="math">(3x − 5)°</span>. Find <span class="math">x</span>.',
      choices: ["3", "5", "7", "10"],
      answer: "5",
      hints: [
        "Exterior angle = sum of remote interior angles.",
        "6x = (2x + 10) + (3x − 5).",
        "6x = 5x + 5 → x = ?"
      ],
      explanation: [
        "6x = (2x + 10) + (3x − 5) = 5x + 5.",
        "6x − 5x = 5 → x = 5.",
        "Check: exterior = 30°; remotes = 20° + 10° = 30°. ✓"
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has angles of 48° and 67°. What is the exterior angle adjacent to the third angle?',
      diagram: { type: "triangle", sides: [0,0,0], angles: [48, 67, 65], labels: ["A","B","C"] },
      answer: "115",
      hints: [
        "The exterior angle adjacent to the third angle equals the sum of the two non-adjacent interior angles.",
        "Exterior = 48° + 67°.",
        "= ?"
      ],
      explanation: [
        "Exterior angle = sum of the two remote interior angles.",
        "Exterior = 48° + 67° = 115°."
      ]
    }
  ],

  // ---- Topic 9: Isosceles Triangle Angles (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 40°. What is each base angle?',
      answer: "70",
      hints: [
        "The two base angles are equal.",
        "All angles sum to 180°.",
        "(180 − 40) ÷ 2 = ?"
      ],
      explanation: [
        "Base angles are equal in an isosceles triangle.",
        "Sum of base angles = 180° − 40° = 140°.",
        "Each base angle = 140° ÷ 2 = 70°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An isosceles triangle has base angles of 55° each. What is the vertex angle?',
      choices: ["55°", "60°", "70°", "80°"],
      answer: "70°",
      hints: [
        "Add the two base angles: 55 + 55 = 110.",
        "Subtract from 180°.",
        "180 − 110 = ?"
      ],
      explanation: [
        "Sum of base angles = 55° + 55° = 110°.",
        "Vertex angle = 180° − 110° = 70°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'In an isosceles triangle, one base angle is <span class="math">(2x + 5)°</span> and the vertex angle is <span class="math">(3x − 10)°</span>. Find <span class="math">x</span>.',
      answer: "25.71",
      hints: [
        "The two base angles are equal.",
        "2(2x + 5) + (3x − 10) = 180.",
        "4x + 10 + 3x − 10 = 180 → 7x = 180."
      ],
      explanation: [
        "Base angles equal: both are (2x + 5)°.",
        "2(2x + 5) + (3x − 10) = 180.",
        "7x = 180 → x ≈ 25.71."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has a vertex angle of 100°. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "An obtuse triangle has one angle greater than 90°.",
        "The vertex angle is 100°.",
        "Is 100° > 90°?"
      ],
      explanation: [
        "The vertex angle of 100° is greater than 90°.",
        "Therefore this is an obtuse isosceles triangle.",
        "The base angles are each (180 − 100)/2 = 40°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has one angle of 50°. If the 50° angle is a base angle, what is the vertex angle?',
      answer: "80",
      hints: [
        "Both base angles are equal in an isosceles triangle.",
        "If one base angle is 50°, the other is also 50°.",
        "Vertex angle = 180 − 50 − 50 = ?"
      ],
      explanation: [
        "Both base angles = 50°.",
        "Vertex angle = 180° − 50° − 50° = 80°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 76°. What is each base angle?',
      answer: "52",
      hints: [
        "The two base angles are equal.",
        "Sum = 180° → base angles = 180 − 76 = 104.",
        "Each base angle = 104 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 76° = 104°.",
        "Each base angle = 104° ÷ 2 = 52°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 70° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Acute",
      hints: [
        "Vertex angle = 180 − 70 − 70 = 40°.",
        "Are all angles less than 90°?",
        "70°, 70°, and 40° — all less than 90°."
      ],
      explanation: [
        "Vertex angle = 180° − 140° = 40°.",
        "All three angles (70°, 70°, 40°) are less than 90°, so it is acute."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has base angles of 45° each. What is the vertex angle?',
      answer: "90",
      hints: [
        "Sum of base angles = 45 + 45 = 90.",
        "Vertex angle = 180 − 90.",
        "= 90°."
      ],
      explanation: [
        "Vertex angle = 180° − 45° − 45° = 90°.",
        "This is an isosceles right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has a vertex angle of 34°. What is each base angle?',
      answer: "73",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 34 = 146.",
        "Each base angle = 146 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 34° = 146°.",
        "Each base angle = 146° ÷ 2 = 73°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An isosceles triangle has base angles of 62° each. What is the vertex angle?',
      choices: ["46°", "52°", "56°", "66°"],
      answer: "56°",
      hints: [
        "Add the two base angles: 62 + 62 = 124.",
        "Subtract from 180°.",
        "180 − 124 = ?"
      ],
      explanation: [
        "Sum of base angles = 62° + 62° = 124°.",
        "Vertex angle = 180° − 124° = 56°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has a vertex angle of 110°. What is each base angle?',
      answer: "35",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 110 = 70.",
        "Each base angle = 70 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 110° = 70°.",
        "Each base angle = 70° ÷ 2 = 35°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 54°. What is each base angle?',
      answer: "63",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 54 = 126.",
        "Each base angle = 126 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 54° = 126°.",
        "Each base angle = 126° ÷ 2 = 63°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 38° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "Vertex angle = 180 − 38 − 38 = 104°.",
        "Is any angle greater than 90°?",
        "104° > 90°, so it is obtuse."
      ],
      explanation: [
        "Vertex angle = 180° − 76° = 104°.",
        "Since 104° > 90°, the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has base angles of 72° each. What is the vertex angle?',
      answer: "36",
      hints: [
        "Sum of base angles = 72 + 72 = 144.",
        "Vertex angle = 180 − 144.",
        "= 36°."
      ],
      explanation: [
        "Vertex angle = 180° − 72° − 72° = 36°.",
        "All three angles are acute."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 88°. What is each base angle?',
      answer: "46",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 88 = 92.",
        "Each base angle = 92 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 88° = 92°.",
        "Each base angle = 92° ÷ 2 = 46°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 32° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "Vertex angle = 180 − 32 − 32 = 116°.",
        "Is any angle greater than 90°?",
        "116° > 90°, so it is obtuse."
      ],
      explanation: [
        "Vertex angle = 180° − 64° = 116°.",
        "Since 116° > 90°, the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has a vertex angle of 126°. What is each base angle?',
      answer: "27",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 126 = 54.",
        "Each base angle = 54 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 126° = 54°.",
        "Each base angle = 54° ÷ 2 = 27°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 64°. What is each base angle?',
      answer: "58",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 64 = 116.",
        "Each base angle = 116 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 64° = 116°.",
        "Each base angle = 116° ÷ 2 = 58°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 50° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Acute",
      hints: [
        "Vertex angle = 180 − 50 − 50 = 80°.",
        "Are all angles less than 90°?",
        "50°, 50°, and 80° — all less than 90°."
      ],
      explanation: [
        "Vertex angle = 180° − 100° = 80°.",
        "All three angles (50°, 50°, 80°) are less than 90°, so it is acute."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 73°. What is the other?',
      answer: "107",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 73 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 73° = 107°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 2:3. What is the larger angle?',
      choices: ["72°", "90°", "108°", "120°"],
      answer: "108°",
      hints: [
        "Total parts = 2 + 3 = 5.",
        "Each part = 180 ÷ 5 = 36.",
        "Larger angle = 3 × 36 = ?"
      ],
      explanation: [
        "Total parts = 2 + 3 = 5.",
        "Each part = 180° ÷ 5 = 36°.",
        "Larger angle = 3 × 36° = 108°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 8 times its supplement. What is the supplement?',
      answer: "20",
      hints: [
        "Let supplement = x. The angle = 8x.",
        "x + 8x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 8x.",
        "9x = 180 → x = 20°.",
        "The angle is 160° and the supplement is 20°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has a vertex angle of 142°. What is each base angle?',
      answer: "19",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 142 = 38.",
        "Each base angle = 38 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 142° = 38°.",
        "Each base angle = 38° ÷ 2 = 19°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 48°. What is each base angle?',
      answer: "66",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 48 = 132.",
        "Each base angle = 132 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 48° = 132°.",
        "Each base angle = 132° ÷ 2 = 66°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 28° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "Vertex angle = 180 − 28 − 28 = 124°.",
        "Is any angle greater than 90°?",
        "124° > 90°, so it is obtuse."
      ],
      explanation: [
        "Vertex angle = 180° − 56° = 124°.",
        "Since 124° > 90°, the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The vertex angle of an isosceles triangle is three times each base angle. What is the vertex angle?',
      answer: "108",
      hints: [
        "Let base angle = x. Vertex = 3x.",
        "x + x + 3x = 180 → 5x = 180.",
        "x = 36, vertex = 3 × 36 = ?"
      ],
      explanation: [
        "5x = 180 → x = 36°.",
        "Vertex angle = 3 × 36° = 108°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 96°. What is each base angle?',
      choices: ["38°", "42°", "44°", "48°"],
      answer: "42°",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 96 = 84.",
        "Each base angle = 84 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 96° = 84°.",
        "Each base angle = 84° ÷ 2 = 42°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 65° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Acute",
      hints: [
        "Vertex angle = 180 − 65 − 65 = 50°.",
        "Are all angles less than 90°?",
        "65°, 65°, and 50° — all less than 90°."
      ],
      explanation: [
        "Vertex angle = 180° − 130° = 50°.",
        "All three angles (65°, 65°, 50°) are less than 90°, so it is acute."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The vertex angle of an isosceles triangle is twice each base angle. What is the vertex angle?',
      answer: "90",
      hints: [
        "Let base angle = x. Vertex = 2x.",
        "x + x + 2x = 180 → 4x = 180.",
        "x = 45, vertex = 2 × 45 = ?"
      ],
      explanation: [
        "4x = 180 → x = 45°.",
        "Vertex angle = 2 × 45° = 90°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 58°. What is each base angle?',
      answer: "61",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 58 = 122.",
        "Each base angle = 122 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 58° = 122°.",
        "Each base angle = 122° ÷ 2 = 61°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 42° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "Vertex angle = 180 − 42 − 42 = 96°.",
        "Is any angle greater than 90°?",
        "96° > 90°, so it is obtuse."
      ],
      explanation: [
        "Vertex angle = 180° − 84° = 96°.",
        "Since 96° > 90°, the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The vertex angle of an isosceles triangle is four times each base angle. What is the vertex angle?',
      answer: "120",
      hints: [
        "Let base angle = x. Vertex = 4x.",
        "x + x + 4x = 180 → 6x = 180.",
        "x = 30, vertex = 4 × 30 = ?"
      ],
      explanation: [
        "6x = 180 → x = 30°.",
        "Vertex angle = 4 × 30° = 120°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'An isosceles triangle has a vertex angle of 74°. What is each base angle?',
      answer: "53",
      hints: [
        "The two base angles are equal.",
        "Sum of base angles = 180 − 74 = 106.",
        "Each base angle = 106 ÷ 2 = ?"
      ],
      explanation: [
        "Base angles sum = 180° − 74° = 106°.",
        "Each base angle = 106° ÷ 2 = 53°."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'An isosceles triangle has base angles of 57° each. What type of triangle is it?',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Acute",
      hints: [
        "Vertex angle = 180 − 57 − 57 = 66°.",
        "Are all angles less than 90°?",
        "57°, 57°, and 66° — all less than 90°."
      ],
      explanation: [
        "Vertex angle = 180° − 114° = 66°.",
        "All three angles (57°, 57°, 66°) are less than 90°.",
        "So it is an acute triangle."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'The vertex angle of an isosceles triangle is five times each base angle. What is the vertex angle?',
      answer: "128.57",
      hints: [
        "Let base angle = x. Vertex = 5x.",
        "x + x + 5x = 180 → 7x = 180.",
        "x ≈ 25.71, vertex = 5 × 25.71 ≈ ?"
      ],
      explanation: [
        "7x = 180 → x ≈ 25.71°.",
        "Vertex angle = 5 × 25.71° ≈ 128.57°.",
        "This is an obtuse isosceles triangle."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "isosceles", vertex: 50, base: 65 },
      question: 'An isosceles triangle has a vertex angle of 50°. What is the measure of each base angle?',
      answer: "65",
      hints: [
        "An isosceles triangle has two equal base angles.",
        "All three angles sum to 180°.",
        "(180 − 50) ÷ 2 = ?"
      ],
      explanation: [
        "Sum of angles = 180°.",
        "Base angles = (180° − 50°) ÷ 2 = 130° ÷ 2 = 65°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "isosceles", vertex: 80, base: 50 },
      question: 'An isosceles triangle has base angles of 50° each. What is the vertex angle?',
      choices: ["50°", "60°", "70°", "80°"],
      answer: "80°",
      hints: [
        "Two base angles are each 50°.",
        "Sum = 50 + 50 = 100.",
        "Vertex angle = 180 − 100."
      ],
      explanation: [
        "Base angles = 50° + 50° = 100°.",
        "Vertex angle = 180° − 100° = 80°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'In an isosceles triangle, the vertex angle is <span class="math">(3x + 10)°</span> and each base angle is <span class="math">(2x + 15)°</span>. Find <span class="math">x</span>.',
      answer: "20",
      hints: [
        "Vertex + 2 × base = 180.",
        "(3x + 10) + 2(2x + 15) = 180.",
        "7x + 40 = 180 → 7x = 140."
      ],
      explanation: [
        "(3x + 10) + 2(2x + 15) = 180.",
        "3x + 10 + 4x + 30 = 180 → 7x + 40 = 180.",
        "7x = 140 → x = 20. Check: vertex = 70°, bases = 55° each, total = 180°. ✓"
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'An angle bisector divides an 84° angle into two equal parts. What is the measure of each part?',
      diagram: { type: "angle", angle: 84 },
      answer: "42",
      hints: [
        "An angle bisector cuts an angle into two equal halves.",
        "Divide 84° by 2.",
        "84 ÷ 2 = ?"
      ],
      explanation: [
        "An angle bisector divides an angle into two equal parts.",
        "84° ÷ 2 = 42° each."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In an isosceles triangle, the two base angles each measure 70°. What is the vertex angle?',
      diagram: { type: "isosceles", vertex: 40, base: 70 },
      choices: ["30°", "40°", "50°", "60°"],
      answer: "40°",
      hints: [
        "Triangle angles sum to 180°.",
        "Base angles total: 70 + 70 = 140.",
        "Vertex = 180 − 140 = ?"
      ],
      explanation: [
        "Sum of all angles = 180°.",
        "Two base angles = 70° + 70° = 140°.",
        "Vertex angle = 180° − 140° = 40°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An isosceles triangle has a vertex angle of <span class="math">(2x + 10)°</span> and each base angle is <span class="math">(x + 25)°</span>. Find the vertex angle.',
      answer: "70",
      hints: [
        "Vertex + 2 × base = 180.",
        "(2x + 10) + 2(x + 25) = 180.",
        "4x + 60 = 180 → 4x = 120 → x = 30."
      ],
      explanation: [
        "(2x + 10) + 2(x + 25) = 180.",
        "2x + 10 + 2x + 50 = 180 → 4x + 60 = 180 → x = 30.",
        "Vertex angle = 2(30) + 10 = 70°. Check: 70 + 55 + 55 = 180°. ✓"
      ]
    }
  ],

  // ---- Topic 10: Supplementary Angles (diff 3-4) ----
  [
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 137°. What is the other?',
      answer: "43",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 137 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 137° = 43°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which pair of angles is supplementary?',
      choices: ["45° and 45°", "60° and 130°", "85° and 95°", "100° and 100°"],
      answer: "85° and 95°",
      hints: [
        "Supplementary angles sum to 180°.",
        "Check each pair: 45+45=90, 60+130=190, 85+95=?, 100+100=200.",
        "Which pair sums to 180?"
      ],
      explanation: [
        "85° + 95° = 180°.",
        "They are supplementary because they sum to exactly 180°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 5 times its supplement. What is the angle?',
      answer: "150",
      hints: [
        "Let the supplement be x. The angle is 5x.",
        "x + 5x = 180.",
        "6x = 180 → x = 30, so the angle = 5 × 30."
      ],
      explanation: [
        "Let supplement = x, angle = 5x.",
        "x + 5x = 180 → 6x = 180 → x = 30.",
        "The angle = 5 × 30 = 150°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 5:7. What is the smaller angle?',
      choices: ["65°", "70°", "75°", "80°"],
      answer: "75°",
      hints: [
        "Total parts = 5 + 7 = 12.",
        "Each part = 180 ÷ 12 = 15.",
        "Smaller angle = 5 × 15 = ?"
      ],
      explanation: [
        "Total parts = 5 + 7 = 12.",
        "Each part = 180° ÷ 12 = 15°.",
        "Smaller angle = 5 × 15° = 75°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An angle is 26° less than its supplement. What is the angle?',
      answer: "77",
      hints: [
        "Let the angle be x. Its supplement is 180 − x.",
        "x = (180 − x) − 26.",
        "x = 154 − x → 2x = 154."
      ],
      explanation: [
        "Let angle = x. Supplement = 180 − x.",
        "x = (180 − x) − 26 → 2x = 154.",
        "x = 77°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two supplementary angles are in the ratio 4:5. What is the larger angle?',
      answer: "100",
      hints: [
        "Total parts = 4 + 5 = 9.",
        "Each part = 180 ÷ 9 = 20.",
        "Larger angle = 5 × 20 = ?"
      ],
      explanation: [
        "Total parts = 9. Each part = 180° ÷ 9 = 20°.",
        "Larger angle = 5 × 20° = 100°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'An angle is 3 times its supplement. What is the supplement?',
      choices: ["30°", "45°", "60°", "90°"],
      answer: "45°",
      hints: [
        "Let supplement = x. The angle = 3x.",
        "x + 3x = 180.",
        "4x = 180 → x = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 3x.",
        "x + 3x = 180 → 4x = 180 → x = 45°.",
        "The supplement is 45° and the angle is 135°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 52° more than the other. What is the smaller angle?',
      answer: "64",
      hints: [
        "Let the smaller = x. The larger = x + 52.",
        "x + (x + 52) = 180.",
        "2x = 128 → x = ?"
      ],
      explanation: [
        "x + (x + 52) = 180 → 2x + 52 = 180.",
        "2x = 128 → x = 64°.",
        "The smaller angle is 64° and the larger is 116°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 2:7. What is the larger angle?',
      answer: "140",
      hints: [
        "Total parts = 2 + 7 = 9.",
        "Each part = 180 ÷ 9 = 20.",
        "Larger angle = 7 × 20 = ?"
      ],
      explanation: [
        "Total parts = 2 + 7 = 9.",
        "Each part = 180° ÷ 9 = 20°.",
        "Larger angle = 7 × 20° = 140°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two angles are supplementary. One is 41° more than the other. What is the larger angle?',
      choices: ["100.5°", "110.5°", "115°", "120.5°"],
      answer: "110.5°",
      hints: [
        "Let the smaller = x. The larger = x + 41.",
        "x + (x + 41) = 180 → 2x = 139.",
        "x = 69.5, so the larger = 69.5 + 41 = ?"
      ],
      explanation: [
        "x + (x + 41) = 180 → 2x + 41 = 180.",
        "2x = 139 → x = 69.5°.",
        "Larger angle = 69.5 + 41 = 110.5°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 7 times its supplement. What is the supplement?',
      answer: "22.5",
      hints: [
        "Let supplement = x. The angle = 7x.",
        "x + 7x = 180 → 8x = 180.",
        "x = 180 ÷ 8 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 7x.",
        "x + 7x = 180 → 8x = 180.",
        "x = 22.5°. The angle is 157.5°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 113°. What is the other?',
      answer: "67",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 113 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 113° = 67°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 3:5. What is the larger angle?',
      choices: ["90°", "100°", "112.5°", "120°"],
      answer: "112.5°",
      hints: [
        "Total parts = 3 + 5 = 8.",
        "Each part = 180 ÷ 8 = 22.5.",
        "Larger angle = 5 × 22.5 = ?"
      ],
      explanation: [
        "Total parts = 3 + 5 = 8.",
        "Each part = 180° ÷ 8 = 22.5°.",
        "Larger angle = 5 × 22.5° = 112.5°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 9 times its supplement. What is the angle?',
      answer: "162",
      hints: [
        "Let supplement = x. The angle = 9x.",
        "x + 9x = 180 → 10x = 180.",
        "x = 18, so the angle = 9 × 18 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 9x.",
        "10x = 180 → x = 18.",
        "The angle = 9 × 18 = 162°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 89°. What is the other?',
      answer: "91",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 89 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 89° = 91°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 1:5. What is the larger angle?',
      choices: ["120°", "135°", "144°", "150°"],
      answer: "150°",
      hints: [
        "Total parts = 1 + 5 = 6.",
        "Each part = 180 ÷ 6 = 30.",
        "Larger angle = 5 × 30 = ?"
      ],
      explanation: [
        "Total parts = 1 + 5 = 6.",
        "Each part = 180° ÷ 6 = 30°.",
        "Larger angle = 5 × 30° = 150°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 21 cm long and 8 cm wide. What is its area?',
      answer: "168",
      hints: [
        "Area = length × width.",
        "21 × 8 = ?",
        "= 168."
      ],
      explanation: [
        "A = l × w = 21 × 8.",
        "= 168 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 54 cm and a length of 16 cm. What is its width?',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "P = 2(l + w) → 54 = 2(16 + w).",
        "27 = 16 + w.",
        "w = 11."
      ],
      explanation: [
        "54 = 2(16 + w) → 27 = 16 + w.",
        "w = 11 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 16 cm long and 12 cm wide. What is its perimeter?',
      answer: "56",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (16 + 12) = 2 × 28.",
        "= 56."
      ],
      explanation: [
        "P = 2(l + w) = 2(16 + 12).",
        "= 2 × 28 = 56 cm."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 4 times its supplement. What is the supplement?',
      answer: "36",
      hints: [
        "Let supplement = x. The angle = 4x.",
        "x + 4x = 180 → 5x = 180.",
        "x = 180 ÷ 5 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 4x.",
        "x + 4x = 180 → 5x = 180.",
        "x = 36°. The angle is 144°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 148°. What is the other?',
      answer: "32",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 148 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 148° = 32°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 3:7. What is the larger angle?',
      choices: ["108°", "120°", "126°", "135°"],
      answer: "126°",
      hints: [
        "Total parts = 3 + 7 = 10.",
        "Each part = 180 ÷ 10 = 18.",
        "Larger angle = 7 × 18 = ?"
      ],
      explanation: [
        "Total parts = 3 + 7 = 10.",
        "Each part = 180° ÷ 10 = 18°.",
        "Larger angle = 7 × 18° = 126°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 6 times its supplement. What is the angle?',
      answer: "154.29",
      hints: [
        "Let supplement = x. The angle = 6x.",
        "x + 6x = 180 → 7x = 180.",
        "x ≈ 25.71, angle = 6 × 25.71 ≈ ?"
      ],
      explanation: [
        "Let supplement = x, angle = 6x.",
        "7x = 180 → x ≈ 25.71.",
        "The angle ≈ 6 × 25.71 ≈ 154.29°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 73°. What is the other?',
      answer: "107",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 73 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 73° = 107°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 2:3. What is the larger angle?',
      choices: ["72°", "90°", "108°", "120°"],
      answer: "108°",
      hints: [
        "Total parts = 2 + 3 = 5.",
        "Each part = 180 ÷ 5 = 36.",
        "Larger angle = 3 × 36 = ?"
      ],
      explanation: [
        "Total parts = 2 + 3 = 5.",
        "Each part = 180° ÷ 5 = 36°.",
        "Larger angle = 3 × 36° = 108°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 8 times its supplement. What is the supplement?',
      answer: "20",
      hints: [
        "Let supplement = x. The angle = 8x.",
        "x + 8x = 180 → 9x = 180.",
        "x = 180 ÷ 9 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 8x.",
        "9x = 180 → x = 20°.",
        "The angle is 160° and the supplement is 20°."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two angles are supplementary. One is 124°. What is the other?',
      choices: ["46°", "52°", "56°", "66°"],
      answer: "56°",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 124 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 124° = 56°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 4:11. What is the larger angle?',
      choices: ["120°", "128°", "132°", "140°"],
      answer: "132°",
      hints: [
        "Total parts = 4 + 11 = 15.",
        "Each part = 180 ÷ 15 = 12.",
        "Larger angle = 11 × 12 = ?"
      ],
      explanation: [
        "Total parts = 4 + 11 = 15.",
        "Each part = 180° ÷ 15 = 12°.",
        "Larger angle = 11 × 12° = 132°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 11 times its supplement. What is the supplement?',
      answer: "15",
      hints: [
        "Let supplement = x. The angle = 11x.",
        "x + 11x = 180 → 12x = 180.",
        "x = 180 ÷ 12 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 11x.",
        "12x = 180 → x = 15°.",
        "The angle is 165° and the supplement is 15°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 37° more than the other. What is the smaller angle?',
      answer: "71.5",
      hints: [
        "Let the smaller = x. The larger = x + 37.",
        "x + (x + 37) = 180.",
        "2x = 143 → x = ?"
      ],
      explanation: [
        "x + (x + 37) = 180 → 2x + 37 = 180.",
        "2x = 143 → x = 71.5°.",
        "The smaller angle is 71.5° and the larger is 108.5°."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 5:13. What is the larger angle?',
      choices: ["120°", "125°", "130°", "140°"],
      answer: "130°",
      hints: [
        "Total parts = 5 + 13 = 18.",
        "Each part = 180 ÷ 18 = 10.",
        "Larger angle = 13 × 10 = ?"
      ],
      explanation: [
        "Total parts = 5 + 13 = 18.",
        "Each part = 180° ÷ 18 = 10°.",
        "Larger angle = 13 × 10° = 130°."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 14 times its supplement. What is the supplement?',
      answer: "12",
      hints: [
        "Let supplement = x. The angle = 14x.",
        "x + 14x = 180 → 15x = 180.",
        "x = 180 ÷ 15 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 14x.",
        "15x = 180 → x = 12°.",
        "The angle is 168° and the supplement is 12°."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'Two angles are supplementary. One is 97°. What is the other?',
      answer: "83",
      hints: [
        "Supplementary angles add to 180°.",
        "Subtract the known angle from 180°.",
        "180 − 97 = ?"
      ],
      explanation: [
        "Supplementary angles sum to 180°.",
        "180° − 97° = 83°.",
        "Together they form a straight line."
      ]
    }
,
    {
      type: "mc", difficulty: 4,
      question: 'Two supplementary angles are in the ratio 5:7. What is the smaller angle?',
      choices: ["65°", "72°", "75°", "80°"],
      answer: "75°",
      hints: [
        "Total parts = 5 + 7 = 12.",
        "Each part = 180 ÷ 12 = 15.",
        "Smaller = 5 × 15 = ?"
      ],
      explanation: [
        "Total parts = 5 + 7 = 12.",
        "Each part = 180° ÷ 12 = 15°.",
        "Smaller angle = 5 × 15° = 75°."
      ]
    }
,
    {
      type: "numeric", difficulty: 4,
      question: 'An angle is 11 times its supplement. What is the supplement?',
      answer: "15",
      hints: [
        "Let supplement = x. The angle = 11x.",
        "x + 11x = 180 → 12x = 180.",
        "x = 180 ÷ 12 = ?"
      ],
      explanation: [
        "Let supplement = x, angle = 11x.",
        "12x = 180 → x = 15°.",
        "The angle is 165° and the supplement is 15°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two supplementary angles are such that one is <span class="math">(2x + 10)°</span> and the other is <span class="math">(3x − 5)°</span>. Find <span class="math">x</span>.',
      diagram: { type: "supplementary", a: 80, b: 100 },
      answer: "35",
      hints: [
        "Supplementary angles add to 180°.",
        "(2x + 10) + (3x − 5) = 180.",
        "5x + 5 = 180 → 5x = 175 → x = ?"
      ],
      explanation: [
        "(2x + 10) + (3x − 5) = 180.",
        "5x + 5 = 180 → 5x = 175 → x = 35.",
        "Check: 2(35) + 10 = 80° and 3(35) − 5 = 100°. 80 + 100 = 180°. ✓"
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two supplementary angles are in the ratio 5:7. What is the larger angle?',
      choices: ["75°", "84°", "100°", "105°"],
      answer: "105°",
      hints: [
        "Supplementary angles add to 180°.",
        "Total parts = 5 + 7 = 12.",
        "Each part = 180 ÷ 12 = 15. Larger = 7 × 15."
      ],
      explanation: [
        "Total parts = 5 + 7 = 12.",
        "Each part = 180° ÷ 12 = 15°.",
        "Larger angle = 7 × 15° = 105°."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An angle is 36° less than its supplement. What is the angle?',
      diagram: { type: "supplementary", a: 72, b: 108 },
      answer: "72",
      hints: [
        "Let the angle = x. Its supplement = 180 − x.",
        "x = (180 − x) − 36.",
        "2x = 144 → x = ?"
      ],
      explanation: [
        "x = (180 − x) − 36 → x = 144 − x.",
        "2x = 144 → x = 72°.",
        "Check: supplement = 180 − 72 = 108°. Difference = 108 − 72 = 36°. ✓"
      ]
    }
  ]

];

// ============================================================
// WORLD 10 — Chapter 11: Perimeter & Area (10 topics, 5 each)
// ============================================================
EXTRA_QUESTIONS[10] = [

  // ---- Topic 0: Rectangle Perimeter & Area (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 12 cm long and 5 cm wide. What is its perimeter?',
      answer: "34",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (12 + 5) = 2 × 17.",
        "= 34."
      ],
      explanation: [
        "P = 2(l + w) = 2(12 + 5).",
        "= 2 × 17 = 34 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has length 9 m and width 7 m. What is its area?',
      answer: "63",
      hints: [
        "Area = length × width.",
        "9 × 7 = ?",
        "= 63."
      ],
      explanation: [
        "A = l × w = 9 × 7.",
        "= 63 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 50 cm and a length of 15 cm. What is its width?',
      choices: ["8 cm", "10 cm", "12 cm", "20 cm"],
      answer: "10 cm",
      hints: [
        "P = 2(l + w) → 50 = 2(15 + w).",
        "25 = 15 + w.",
        "w = 10."
      ],
      explanation: [
        "50 = 2(15 + w) → 25 = 15 + w.",
        "w = 10 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which rectangle has the greatest area?',
      choices: ["3 × 14", "5 × 10", "6 × 9", "7 × 8"],
      answer: "7 × 8",
      hints: [
        "Calculate each area: 3×14=42, 5×10=50, 6×9=54, 7×8=56.",
        "Compare the four products.",
        "The largest is 56."
      ],
      explanation: [
        "3×14 = 42, 5×10 = 50, 6×9 = 54, 7×8 = 56.",
        "7 × 8 = 56 is the greatest area."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangular garden is 18 ft long and 11 ft wide. How much fencing is needed to surround it?',
      answer: "58",
      hints: [
        "Fencing = perimeter.",
        "P = 2(18 + 11).",
        "= 2 × 29 = ?"
      ],
      explanation: [
        "P = 2(l + w) = 2(18 + 11).",
        "= 2 × 29 = 58 ft."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 14 cm long and 8 cm wide. What is its area?',
      answer: "112",
      hints: [
        "Area = length × width.",
        "14 × 8 = ?",
        "= 112."
      ],
      explanation: [
        "A = l × w = 14 × 8.",
        "= 112 cm²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle has length 16 m and width 6 m. What is its perimeter?',
      choices: ["22 m", "44 m", "96 m", "88 m"],
      answer: "44 m",
      hints: [
        "P = 2(l + w).",
        "= 2(16 + 6) = 2 × 22.",
        "= 44."
      ],
      explanation: [
        "P = 2(l + w) = 2(16 + 6).",
        "= 2 × 22 = 44 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangular pool is 25 m long and 10 m wide. How many meters of tile are needed to go around the edge?',
      answer: "70",
      hints: [
        "Tile around the edge = perimeter.",
        "P = 2(25 + 10) = 2 × 35.",
        "= 70."
      ],
      explanation: [
        "P = 2(l + w) = 2(25 + 10).",
        "= 2 × 35 = 70 m."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 20 cm long and 4 cm wide. What is its area?',
      answer: "80",
      hints: [
        "Area = length × width.",
        "20 × 4 = ?",
        "= 80."
      ],
      explanation: [
        "A = l × w = 20 × 4.",
        "= 80 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 66 cm and a length of 19 cm. What is its width?',
      choices: ["12 cm", "13 cm", "14 cm", "15 cm"],
      answer: "14 cm",
      hints: [
        "P = 2(l + w) → 66 = 2(19 + w).",
        "33 = 19 + w.",
        "w = 14."
      ],
      explanation: [
        "66 = 2(19 + w) → 33 = 19 + w.",
        "w = 14 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangular field is 22 m long and 13 m wide. What is its perimeter?',
      answer: "70",
      hints: [
        "P = 2(l + w).",
        "= 2(22 + 13) = 2 × 35.",
        "= 70."
      ],
      explanation: [
        "P = 2(l + w) = 2(22 + 13).",
        "= 2 × 35 = 70 m."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 17 cm long and 9 cm wide. What is its area?',
      answer: "153",
      hints: [
        "Area = length × width.",
        "17 × 9 = ?",
        "= 153."
      ],
      explanation: [
        "A = l × w = 17 × 9.",
        "= 153 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 16 cm. What is its perimeter?',
      answer: "64",
      hints: [
        "A square has 4 equal sides.",
        "P = 4 × side.",
        "4 × 16 = ?"
      ],
      explanation: [
        "P = 4s = 4 × 16.",
        "= 64 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 400 m². What is its side length?',
      choices: ["18 m", "19 m", "20 m", "21 m"],
      answer: "20 m",
      hints: [
        "A = s² → s = √A.",
        "√400 = ?",
        "20 × 20 = 400. ✓"
      ],
      explanation: [
        "s = √A = √400.",
        "= 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 108 m. What is its area?',
      answer: "729",
      hints: [
        "s = P ÷ 4 = 108 ÷ 4 = 27.",
        "A = s² = 27².",
        "= 729."
      ],
      explanation: [
        "s = 108 ÷ 4 = 27 m.",
        "A = 27² = 729 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 58 cm and a length of 17 cm. What is its width?',
      choices: ["10 cm", "11 cm", "12 cm", "13 cm"],
      answer: "12 cm",
      hints: [
        "P = 2(l + w) → 58 = 2(17 + w).",
        "29 = 17 + w.",
        "w = 12."
      ],
      explanation: [
        "58 = 2(17 + w) → 29 = 17 + w.",
        "w = 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 11 cm long and 6 cm wide. What is its perimeter?',
      answer: "34",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (11 + 6) = 2 × 17.",
        "= 34."
      ],
      explanation: [
        "P = 2(l + w) = 2(11 + 6).",
        "= 2 × 17 = 34 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 15 cm long and 9 cm wide. What is its area?',
      answer: "135",
      hints: [
        "Area = length × width.",
        "15 × 9 = ?",
        "= 135."
      ],
      explanation: [
        "A = l × w = 15 × 9.",
        "= 135 cm²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle has a perimeter of 42 cm and a length of 13 cm. What is its width?',
      choices: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "8 cm",
      hints: [
        "P = 2(l + w) → 42 = 2(13 + w).",
        "21 = 13 + w.",
        "w = 8."
      ],
      explanation: [
        "42 = 2(13 + w) → 21 = 13 + w.",
        "w = 8 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 23 cm long and 7 cm wide. What is its perimeter?',
      answer: "60",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (23 + 7) = 2 × 30.",
        "= 60."
      ],
      explanation: [
        "P = 2(l + w) = 2(23 + 7).",
        "= 2 × 30 = 60 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 19 cm long and 3 cm wide. What is its perimeter?',
      answer: "44",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (19 + 3) = 2 × 22.",
        "= 44."
      ],
      explanation: [
        "P = 2(l + w) = 2(19 + 3).",
        "= 2 × 22 = 44 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 72 cm and a length of 22 cm. What is its width?',
      choices: ["12 cm", "13 cm", "14 cm", "15 cm"],
      answer: "14 cm",
      hints: [
        "P = 2(l + w) → 72 = 2(22 + w).",
        "36 = 22 + w.",
        "w = 14."
      ],
      explanation: [
        "72 = 2(22 + w) → 36 = 22 + w.",
        "w = 14 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 13 cm long and 11 cm wide. What is its area?',
      answer: "143",
      hints: [
        "Area = length × width.",
        "13 × 11 = ?",
        "= 143."
      ],
      explanation: [
        "A = l × w = 13 × 11.",
        "= 143 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 21 cm long and 8 cm wide. What is its area?',
      answer: "168",
      hints: [
        "Area = length × width.",
        "21 × 8 = ?",
        "= 168."
      ],
      explanation: [
        "A = l × w = 21 × 8.",
        "= 168 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 54 cm and a length of 16 cm. What is its width?',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "P = 2(l + w) → 54 = 2(16 + w).",
        "27 = 16 + w.",
        "w = 11."
      ],
      explanation: [
        "54 = 2(16 + w) → 27 = 16 + w.",
        "w = 11 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 16 cm long and 12 cm wide. What is its perimeter?',
      answer: "56",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (16 + 12) = 2 × 28.",
        "= 56."
      ],
      explanation: [
        "P = 2(l + w) = 2(16 + 12).",
        "= 2 × 28 = 56 cm."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle is 19 cm long and 6 cm wide. What is its perimeter?',
      choices: ["44 cm", "48 cm", "50 cm", "52 cm"],
      answer: "50 cm",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (19 + 6) = 2 × 25.",
        "= 50."
      ],
      explanation: [
        "P = 2(l + w) = 2(19 + 6).",
        "= 2 × 25 = 50 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 62 cm and a length of 19 cm. What is its width?',
      choices: ["10 cm", "11 cm", "12 cm", "13 cm"],
      answer: "12 cm",
      hints: [
        "P = 2(l + w) → 62 = 2(19 + w).",
        "31 = 19 + w.",
        "w = 12."
      ],
      explanation: [
        "62 = 2(19 + w) → 31 = 19 + w.",
        "w = 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 23 cm long and 7 cm wide. What is its area?',
      answer: "161",
      hints: [
        "Area = length × width.",
        "23 × 7 = ?",
        "= 161."
      ],
      explanation: [
        "A = l × w = 23 × 7.",
        "= 161 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 27 cm long and 4 cm wide. What is its perimeter?',
      answer: "62",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (27 + 4) = 2 × 31.",
        "= 62."
      ],
      explanation: [
        "P = 2(l + w) = 2(27 + 4).",
        "= 2 × 31 = 62 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a perimeter of 76 cm and a length of 23 cm. What is its width?',
      choices: ["13 cm", "14 cm", "15 cm", "16 cm"],
      answer: "15 cm",
      hints: [
        "P = 2(l + w) → 76 = 2(23 + w).",
        "38 = 23 + w.",
        "w = 15."
      ],
      explanation: [
        "76 = 2(23 + w) → 38 = 23 + w.",
        "w = 15 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 26 cm long and 9 cm wide. What is its area?',
      answer: "234",
      hints: [
        "Area = length × width.",
        "26 × 9 = ?",
        "= 234."
      ],
      explanation: [
        "A = l × w = 26 × 9.",
        "= 234 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle is 18 cm long and 7 cm wide. What is its perimeter?',
      answer: "50",
      hints: [
        "Perimeter of a rectangle = 2 × (length + width).",
        "2 × (18 + 7) = 2 × 25.",
        "= ?"
      ],
      explanation: [
        "P = 2 × (length + width).",
        "P = 2 × (18 + 7) = 2 × 25 = 50 cm."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has a length of 14 cm and a width of 9 cm. What is its area?',
      choices: ["46 cm²", "96 cm²", "126 cm²", "136 cm²"],
      answer: "126 cm²",
      hints: [
        "Area of a rectangle = length × width.",
        "14 × 9 = ?",
        "= 126."
      ],
      explanation: [
        "A = length × width.",
        "A = 14 × 9 = 126 cm².",
        "The perimeter would be 2 × (14 + 9) = 46 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has an area of 108 cm² and a length of 12 cm. What is its width?',
      answer: "9",
      hints: [
        "Area = length × width.",
        "108 = 12 × width.",
        "width = 108 ÷ 12 = ?"
      ],
      explanation: [
        "A = l × w → 108 = 12 × w.",
        "w = 108 ÷ 12 = 9 cm.",
        "The rectangle is 12 cm × 9 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rectangle", l: 30, w: 20 },
      question: 'A rectangular garden has a perimeter of 100 feet. If the length is 30 feet, what is the width?',
      answer: "20",
      hints: [
        "Perimeter = 2 × (length + width).",
        "100 = 2 × (30 + w).",
        "50 = 30 + w → w = ?"
      ],
      explanation: [
        "P = 2(l + w) → 100 = 2(30 + w).",
        "50 = 30 + w → w = 20 feet."
      ]
    },
    {
      type: "mc", difficulty: 1,
      diagram: { type: "rectangle", l: 14, w: 9 },
      question: 'A rectangle is 14 cm long and 9 cm wide. What is its area?',
      choices: ["46 cm²", "92 cm²", "126 cm²", "140 cm²"],
      answer: "126 cm²",
      hints: [
        "Area of a rectangle = length × width.",
        "14 × 9 = ?",
        "Multiply carefully."
      ],
      explanation: [
        "Area = length × width.",
        "Area = 14 × 9 = 126 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rectangle", l: 18, w: 7 },
      question: 'A picture frame is 18 inches long and 7 inches wide. What is its perimeter?',
      answer: "50",
      hints: [
        "Perimeter = 2 × (length + width).",
        "2 × (18 + 7) = ?",
        "2 × 25 = ?"
      ],
      explanation: [
        "P = 2(l + w) = 2(18 + 7).",
        "= 2 × 25 = 50 inches."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A garden is 24 ft long and 18 ft wide. What is its perimeter in feet?',
      diagram: { type: "rectangle", l: 24, w: 18 },
      answer: "84",
      hints: [
        "Perimeter of a rectangle = 2(l + w).",
        "= 2(24 + 18).",
        "= 2 × 42 = ?"
      ],
      explanation: [
        "P = 2(l + w) = 2(24 + 18) = 2(42) = 84 ft.",
        "The fence needed to go around the garden is 84 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A basketball court is 94 ft by 50 ft. What is the area?',
      diagram: { type: "rectangle", l: 94, w: 50 },
      choices: ["288 ft²", "4,700 ft²", "4,800 ft²", "9,400 ft²"],
      answer: "4,700 ft²",
      hints: [
        "Area of a rectangle = length × width.",
        "= 94 × 50.",
        "= ?"
      ],
      explanation: [
        "Area = l × w = 94 × 50 = 4,700 ft².",
        "The basketball court covers 4,700 square feet."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangular garden has a perimeter of 52 meters. If the length is 16 m, what is the width?',
      diagram: { type: "rectangle", l: 16, w: 10 },
      answer: "10",
      hints: [
        "Perimeter = 2(l + w).",
        "52 = 2(16 + w).",
        "26 = 16 + w → w = ?"
      ],
      explanation: [
        "52 = 2(16 + w) → 26 = 16 + w.",
        "w = 26 − 16 = 10 meters."
      ]
    }
  ],

  // ---- Topic 1: Square Properties (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 9 cm. What is its perimeter?',
      answer: "36",
      hints: [
        "A square has 4 equal sides.",
        "P = 4 × side.",
        "4 × 9 = ?"
      ],
      explanation: [
        "P = 4s = 4 × 9.",
        "= 36 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 11 m. What is its area?',
      answer: "121",
      hints: [
        "Area of a square = side × side.",
        "11 × 11 = ?",
        "= 121."
      ],
      explanation: [
        "A = s² = 11².",
        "= 121 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has a perimeter of 52 cm. What is its side length?',
      choices: ["11 cm", "12 cm", "13 cm", "14 cm"],
      answer: "13 cm",
      hints: [
        "P = 4s → s = P ÷ 4.",
        "52 ÷ 4 = ?",
        "= 13."
      ],
      explanation: [
        "s = P ÷ 4 = 52 ÷ 4.",
        "= 13 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has an area of 196 cm². What is its side length?',
      answer: "14",
      hints: [
        "A = s² → s = √A.",
        "√196 = ?",
        "14 × 14 = 196. ✓"
      ],
      explanation: [
        "s = √A = √196.",
        "= 14 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 64 ft². What is its perimeter?',
      choices: ["24 ft", "28 ft", "32 ft", "36 ft"],
      answer: "32 ft",
      hints: [
        "First find the side: s = √64 = 8.",
        "Then P = 4s = 4 × 8.",
        "= 32."
      ],
      explanation: [
        "s = √64 = 8 ft.",
        "P = 4 × 8 = 32 ft."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 15 cm. What is its perimeter?',
      answer: "60",
      hints: [
        "A square has 4 equal sides.",
        "P = 4 × side.",
        "4 × 15 = ?"
      ],
      explanation: [
        "P = 4s = 4 × 15.",
        "= 60 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 225 m². What is its side length?',
      choices: ["12 m", "13 m", "14 m", "15 m"],
      answer: "15 m",
      hints: [
        "A = s² → s = √A.",
        "√225 = ?",
        "15 × 15 = 225. ✓"
      ],
      explanation: [
        "s = √A = √225.",
        "= 15 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 48 m. What is its area?',
      answer: "144",
      hints: [
        "s = P ÷ 4 = 48 ÷ 4 = 12.",
        "A = s² = 12².",
        "= 144."
      ],
      explanation: [
        "s = 48 ÷ 4 = 12 m.",
        "A = 12² = 144 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has an area of 169 cm². What is its side length?',
      answer: "13",
      hints: [
        "A = s² → s = √A.",
        "√169 = ?",
        "13 × 13 = 169. ✓"
      ],
      explanation: [
        "s = √A = √169.",
        "= 13 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 26 cm and a height of 7 cm. What is its area?',
      answer: "91",
      hints: [
        "A = ½ × base × height.",
        "½ × 26 × 7 = ?",
        "= ½ × 182 = 91."
      ],
      explanation: [
        "A = ½bh = ½ × 26 × 7.",
        "= 91 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 110 cm² and height 11 cm. What is its base?',
      choices: ["16 cm", "18 cm", "20 cm", "22 cm"],
      answer: "20 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 110 ÷ 11.",
        "= 220 ÷ 11 = ?"
      ],
      explanation: [
        "b = 2A / h = 220 / 11.",
        "= 20 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 15 cm and 8 cm. What is its area?',
      answer: "60",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 15 × 8.",
        "= ½ × 120 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 15 × 8 = 60 cm²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A square has a side length of 7 m. What is its area?',
      choices: ["14 m²", "28 m²", "42 m²", "49 m²"],
      answer: "49 m²",
      hints: [
        "Area of a square = side × side.",
        "7 × 7 = ?",
        "= 49."
      ],
      explanation: [
        "A = s² = 7².",
        "= 49 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 76 cm. What is its side length?',
      answer: "19",
      hints: [
        "P = 4s → s = P ÷ 4.",
        "76 ÷ 4 = ?",
        "= 19."
      ],
      explanation: [
        "s = P ÷ 4 = 76 ÷ 4.",
        "= 19 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 18 m. What is its area?',
      answer: "324",
      hints: [
        "Area of a square = side × side.",
        "18 × 18 = ?",
        "= 324."
      ],
      explanation: [
        "A = s² = 18².",
        "= 324 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 256 cm². What is its perimeter?',
      choices: ["56 cm", "60 cm", "64 cm", "68 cm"],
      answer: "64 cm",
      hints: [
        "First find the side: s = √256 = 16.",
        "Then P = 4s = 4 × 16.",
        "= 64."
      ],
      explanation: [
        "s = √256 = 16 cm.",
        "P = 4 × 16 = 64 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 92 m. What is its side length?',
      answer: "23",
      hints: [
        "P = 4s → s = P ÷ 4.",
        "92 ÷ 4 = ?",
        "= 23."
      ],
      explanation: [
        "s = P ÷ 4 = 92 ÷ 4.",
        "= 23 m."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 12 cm. What is its area?',
      answer: "144",
      hints: [
        "Area of a square = side × side.",
        "12 × 12 = ?",
        "= 144."
      ],
      explanation: [
        "A = s² = 12².",
        "= 144 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 100 m². What is its perimeter?',
      choices: ["36 m", "40 m", "44 m", "48 m"],
      answer: "40 m",
      hints: [
        "First find the side: s = √100 = 10.",
        "Then P = 4s = 4 × 10.",
        "= 40."
      ],
      explanation: [
        "s = √100 = 10 m.",
        "P = 4 × 10 = 40 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 68 cm. What is its side length?',
      answer: "17",
      hints: [
        "P = 4s → s = P ÷ 4.",
        "68 ÷ 4 = ?",
        "= 17."
      ],
      explanation: [
        "s = P ÷ 4 = 68 ÷ 4.",
        "= 17 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 21 cm. What is its perimeter?',
      answer: "84",
      hints: [
        "A square has 4 equal sides.",
        "P = 4 × side.",
        "4 × 21 = ?"
      ],
      explanation: [
        "P = 4s = 4 × 21.",
        "= 84 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 289 cm². What is its side length?',
      choices: ["15 cm", "16 cm", "17 cm", "18 cm"],
      answer: "17 cm",
      hints: [
        "A = s² → s = √A.",
        "√289 = ?",
        "17 × 17 = 289. ✓"
      ],
      explanation: [
        "s = √A = √289.",
        "= 17 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 100 m. What is its area?',
      answer: "625",
      hints: [
        "s = P ÷ 4 = 100 ÷ 4 = 25.",
        "A = s² = 25².",
        "= 625."
      ],
      explanation: [
        "s = 100 ÷ 4 = 25 m.",
        "A = 25² = 625 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 16 cm. What is its perimeter?',
      answer: "64",
      hints: [
        "A square has 4 equal sides.",
        "P = 4 × side.",
        "4 × 16 = ?"
      ],
      explanation: [
        "P = 4s = 4 × 16.",
        "= 64 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 400 m². What is its side length?',
      choices: ["18 m", "19 m", "20 m", "21 m"],
      answer: "20 m",
      hints: [
        "A = s² → s = √A.",
        "√400 = ?",
        "20 × 20 = 400. ✓"
      ],
      explanation: [
        "s = √A = √400.",
        "= 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 108 m. What is its area?',
      answer: "729",
      hints: [
        "s = P ÷ 4 = 108 ÷ 4 = 27.",
        "A = s² = 27².",
        "= 729."
      ],
      explanation: [
        "s = 108 ÷ 4 = 27 m.",
        "A = 27² = 729 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 24 cm. What is its perimeter?',
      answer: "96",
      hints: [
        "A square has 4 equal sides.",
        "P = 4 × side.",
        "4 × 24 = ?"
      ],
      explanation: [
        "P = 4s = 4 × 24.",
        "= 96 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 361 cm². What is its side length?',
      choices: ["17 cm", "18 cm", "19 cm", "20 cm"],
      answer: "19 cm",
      hints: [
        "A = s² → s = √A.",
        "√361 = ?",
        "19 × 19 = 361. ✓"
      ],
      explanation: [
        "s = √A = √361.",
        "= 19 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 84 m. What is its area?',
      answer: "441",
      hints: [
        "s = P ÷ 4 = 84 ÷ 4 = 21.",
        "A = s² = 21².",
        "= 441."
      ],
      explanation: [
        "s = 84 ÷ 4 = 21 m.",
        "A = 21² = 441 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 22 cm. What is its area?',
      answer: "484",
      hints: [
        "Area of a square = side × side.",
        "22 × 22 = ?",
        "= 484."
      ],
      explanation: [
        "A = s² = 22².",
        "= 484 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has area 529 cm². What is its side length?',
      choices: ["21 cm", "22 cm", "23 cm", "24 cm"],
      answer: "23 cm",
      hints: [
        "A = s² → s = √A.",
        "√529 = ?",
        "23 × 23 = 529. ✓"
      ],
      explanation: [
        "s = √A = √529.",
        "= 23 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has a perimeter of 116 m. What is its side length?',
      answer: "29",
      hints: [
        "P = 4s → s = P ÷ 4.",
        "116 ÷ 4 = ?",
        "= 29."
      ],
      explanation: [
        "s = P ÷ 4 = 116 ÷ 4.",
        "= 29 m."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A square has a side length of 13 cm. What is its perimeter?',
      answer: "52",
      hints: [
        "Perimeter of a square = 4 × side.",
        "4 × 13 = ?",
        "= 52."
      ],
      explanation: [
        "P = 4 × side.",
        "P = 4 × 13 = 52 cm."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A square has a perimeter of 60 cm. What is its area?',
      choices: ["144 cm²", "196 cm²", "225 cm²", "256 cm²"],
      answer: "225 cm²",
      hints: [
        "Side = perimeter ÷ 4 = 60 ÷ 4 = 15 cm.",
        "Area = side × side.",
        "15 × 15 = ?"
      ],
      explanation: [
        "Side = 60 ÷ 4 = 15 cm.",
        "Area = 15² = 225 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A square has an area of 196 cm². What is its side length?',
      answer: "14",
      hints: [
        "Area = side × side.",
        "What number times itself equals 196?",
        "14 × 14 = 196."
      ],
      explanation: [
        "side = √196 = 14 cm.",
        "Check: 14 × 14 = 196 cm². ✓",
        "The perimeter would be 4 × 14 = 56 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      diagram: { type: "square", s: 11 },
      question: 'A square tile has a side length of 11 cm. What is its perimeter?',
      answer: "44",
      hints: [
        "A square has 4 equal sides.",
        "Perimeter = 4 × side.",
        "4 × 11 = ?"
      ],
      explanation: [
        "Perimeter = 4 × side = 4 × 11.",
        "= 44 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has an area of 196 square feet. What is its side length?',
      diagram: { type: "square", s: 14 },
      choices: ["12 ft", "13 ft", "14 ft", "15 ft"],
      answer: "14 ft",
      hints: [
        "Area of a square = side × side = side².",
        "What number squared equals 196?",
        "14 × 14 = 196. ✓"
      ],
      explanation: [
        "side² = 196.",
        "side = √196 = 14 ft."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "square", s: 13 },
      question: 'A square garden has a perimeter of 52 meters. What is its area?',
      answer: "169",
      hints: [
        "First find the side: Perimeter = 4 × side.",
        "52 ÷ 4 = 13 meters.",
        "Area = side² = 13 × 13 = ?"
      ],
      explanation: [
        "Side = 52 ÷ 4 = 13 m.",
        "Area = 13² = 169 m²."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A square tile has a side length of 9 inches. What is its area in square inches?',
      diagram: { type: "square", s: 9 },
      answer: "81",
      hints: [
        "Area of a square = side × side.",
        "= 9 × 9.",
        "= ?"
      ],
      explanation: [
        "Area = s² = 9² = 81 square inches.",
        "Each tile covers 81 sq in."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square garden has a perimeter of 60 feet. What is the length of each side?',
      diagram: { type: "square", s: 15 },
      choices: ["12 ft", "15 ft", "20 ft", "30 ft"],
      answer: "15 ft",
      hints: [
        "A square has 4 equal sides.",
        "Perimeter = 4 × side.",
        "60 ÷ 4 = ?"
      ],
      explanation: [
        "Perimeter = 4s → 60 = 4s → s = 15 ft.",
        "Each side of the square garden is 15 feet."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has an area of 196 cm². What is its perimeter in cm?',
      answer: "56",
      hints: [
        "Area = s², so s = √196.",
        "√196 = 14.",
        "Perimeter = 4 × 14 = ?"
      ],
      explanation: [
        "s = √196 = 14 cm.",
        "Perimeter = 4 × 14 = 56 cm."
      ]
    }
  ],

  // ---- Topic 2: Triangle Area (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 10 cm and a height of 6 cm. What is its area?',
      answer: "30",
      hints: [
        "A = ½ × base × height.",
        "½ × 10 × 6 = ?",
        "= 30."
      ],
      explanation: [
        "A = ½bh = ½ × 10 × 6.",
        "= 30 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 42 cm² and base 12 cm. What is its height?',
      choices: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "7 cm",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 42 ÷ 12.",
        "= 84 ÷ 12 = ?"
      ],
      explanation: [
        "h = 2A/b = 2(42)/12.",
        "= 84/12 = 7 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has a base of 15 in and a height of 8 in. What is its area?',
      answer: "60",
      hints: [
        "A = ½ × base × height.",
        "½ × 15 × 8 = ?",
        "= 60."
      ],
      explanation: [
        "A = ½ × 15 × 8.",
        "= ½ × 120 = 60 in²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The formula for the area of a triangle is:',
      choices: ["A = bh", "A = ½bh", "A = 2bh", "A = b + h"],
      answer: "A = ½bh",
      hints: [
        "It involves the base and height.",
        "It is half the area of a rectangle with the same base and height.",
        "A = ½ × base × height."
      ],
      explanation: [
        "The area of a triangle is half of base times height.",
        "A = ½bh."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 9 cm and 14 cm. What is its area?',
      answer: "63",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 9 × 14.",
        "= ½ × 126 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 9 × 14 = 63 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has a base of 18 cm and a height of 7 cm. What is its area?',
      answer: "63",
      hints: [
        "A = ½ × base × height.",
        "½ × 18 × 7 = ?",
        "= ½ × 126 = 63."
      ],
      explanation: [
        "A = ½bh = ½ × 18 × 7.",
        "= 63 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A circle has radius 14 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "87.92",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 14.",
        "= 87.92."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 14.",
        "= 87.92 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 22 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["34.54 cm", "49.08 cm", "69.08 cm", "138.16 cm"],
      answer: "69.08 cm",
      hints: [
        "C = πd.",
        "C = 3.14 × 22.",
        "= 69.08."
      ],
      explanation: [
        "C = πd = 3.14 × 22.",
        "= 69.08 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 13 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "530.66",
      hints: [
        "A = πr².",
        "A = 3.14 × 13² = 3.14 × 169.",
        "= 530.66."
      ],
      explanation: [
        "A = πr² = 3.14 × 169.",
        "= 530.66 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 60 cm² and height 10 cm. What is its base?',
      choices: ["6 cm", "10 cm", "12 cm", "15 cm"],
      answer: "12 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 60 ÷ 10.",
        "= 120 ÷ 10 = ?"
      ],
      explanation: [
        "b = 2A / h = 120 / 10.",
        "= 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 20 in and a height of 9 in. What is its area?',
      answer: "90",
      hints: [
        "A = ½ × base × height.",
        "½ × 20 × 9 = ?",
        "= ½ × 180 = 90."
      ],
      explanation: [
        "A = ½ × 20 × 9.",
        "= ½ × 180 = 90 in²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has a base of 24 cm and a height of 11 cm. What is its area?',
      answer: "132",
      hints: [
        "A = ½ × base × height.",
        "½ × 24 × 11 = ?",
        "= ½ × 264 = 132."
      ],
      explanation: [
        "A = ½bh = ½ × 24 × 11.",
        "= 132 cm²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has legs of 6 cm and 10 cm. What is its area?',
      choices: ["16 cm²", "30 cm²", "60 cm²", "120 cm²"],
      answer: "30 cm²",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 6 × 10.",
        "= ½ × 60 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 6 × 10 = 30 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has area 84 cm² and base 14 cm. What is its height?',
      answer: "12",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 84 ÷ 14.",
        "= 168 ÷ 14 = ?"
      ],
      explanation: [
        "h = 2A / b = 168 / 14.",
        "= 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 16 cm and a height of 5 cm. What is its area?',
      answer: "40",
      hints: [
        "A = ½ × base × height.",
        "½ × 16 × 5 = ?",
        "= ½ × 80 = 40."
      ],
      explanation: [
        "A = ½bh = ½ × 16 × 5.",
        "= 40 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 48 cm² and height 6 cm. What is its base?',
      choices: ["12 cm", "14 cm", "16 cm", "18 cm"],
      answer: "16 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 48 ÷ 6.",
        "= 96 ÷ 6 = ?"
      ],
      explanation: [
        "b = 2A / h = 96 / 6.",
        "= 16 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 cm and 8 cm. What is its area?',
      answer: "44",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 11 × 8.",
        "= ½ × 88 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 11 × 8 = 44 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 14 cm and a height of 10 cm. What is its area?',
      answer: "70",
      hints: [
        "A = ½ × base × height.",
        "½ × 14 × 10 = ?",
        "= ½ × 140 = 70."
      ],
      explanation: [
        "A = ½bh = ½ × 14 × 10.",
        "= 70 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 75 cm² and height 15 cm. What is its base?',
      choices: ["8 cm", "9 cm", "10 cm", "11 cm"],
      answer: "10 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 75 ÷ 15.",
        "= 150 ÷ 15 = ?"
      ],
      explanation: [
        "b = 2A / h = 150 / 15.",
        "= 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 7 cm and 12 cm. What is its area?',
      answer: "42",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 7 × 12.",
        "= ½ × 84 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 7 × 12 = 42 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 22 cm and a height of 8 cm. What is its area?',
      answer: "88",
      hints: [
        "A = ½ × base × height.",
        "½ × 22 × 8 = ?",
        "= ½ × 176 = 88."
      ],
      explanation: [
        "A = ½bh = ½ × 22 × 8.",
        "= 88 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 99 cm² and height 9 cm. What is its base?',
      choices: ["18 cm", "20 cm", "22 cm", "24 cm"],
      answer: "22 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 99 ÷ 9.",
        "= 198 ÷ 9 = ?"
      ],
      explanation: [
        "b = 2A / h = 198 / 9.",
        "= 22 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 13 cm and 10 cm. What is its area?',
      answer: "65",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 13 × 10.",
        "= ½ × 130 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 13 × 10 = 65 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 26 cm and a height of 7 cm. What is its area?',
      answer: "91",
      hints: [
        "A = ½ × base × height.",
        "½ × 26 × 7 = ?",
        "= ½ × 182 = 91."
      ],
      explanation: [
        "A = ½bh = ½ × 26 × 7.",
        "= 91 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 110 cm² and height 11 cm. What is its base?',
      choices: ["16 cm", "18 cm", "20 cm", "22 cm"],
      answer: "20 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 110 ÷ 11.",
        "= 220 ÷ 11 = ?"
      ],
      explanation: [
        "b = 2A / h = 220 / 11.",
        "= 20 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 15 cm and 8 cm. What is its area?',
      answer: "60",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 15 × 8.",
        "= ½ × 120 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 15 × 8 = 60 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 18 cm and a height of 11 cm. What is its area?',
      answer: "99",
      hints: [
        "A = ½ × base × height.",
        "½ × 18 × 11 = ?",
        "= ½ × 198 = 99."
      ],
      explanation: [
        "A = ½bh = ½ × 18 × 11.",
        "= 99 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 56 cm² and height 8 cm. What is its base?',
      choices: ["11 cm", "12 cm", "13 cm", "14 cm"],
      answer: "14 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 56 ÷ 8.",
        "= 112 ÷ 8 = ?"
      ],
      explanation: [
        "b = 2A / h = 112 / 8.",
        "= 14 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 9 cm and 16 cm. What is its area?',
      answer: "72",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 9 × 16.",
        "= ½ × 144 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 9 × 16 = 72 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 30 cm and a height of 7 cm. What is its area?',
      answer: "105",
      hints: [
        "A = ½ × base × height.",
        "½ × 30 × 7 = ?",
        "= ½ × 210 = 105."
      ],
      explanation: [
        "A = ½bh = ½ × 30 × 7.",
        "= 105 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 104 cm² and height 13 cm. What is its base?',
      choices: ["14 cm", "15 cm", "16 cm", "18 cm"],
      answer: "16 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 104 ÷ 13.",
        "= 208 ÷ 13 = ?"
      ],
      explanation: [
        "b = 2A / h = 208 / 13.",
        "= 16 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 cm and 14 cm. What is its area?',
      answer: "77",
      hints: [
        "In a right triangle, the two legs are the base and height.",
        "A = ½ × 11 × 14.",
        "= ½ × 154 = ?"
      ],
      explanation: [
        "For a right triangle, A = ½ × leg₁ × leg₂.",
        "= ½ × 11 × 14 = 77 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A triangle has a base of 16 cm and a height of 9 cm. What is its area?',
      answer: "72",
      hints: [
        "Area of a triangle = ½ × base × height.",
        "½ × 16 × 9 = ?",
        "= 72."
      ],
      explanation: [
        "A = ½ × base × height.",
        "A = ½ × 16 × 9 = 72 cm²."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has an area of 60 cm² and a base of 15 cm. What is its height?',
      choices: ["4 cm", "6 cm", "8 cm", "10 cm"],
      answer: "8 cm",
      hints: [
        "Area = ½ × base × height.",
        "60 = ½ × 15 × h → 60 = 7.5h.",
        "h = 60 ÷ 7.5 = ?"
      ],
      explanation: [
        "60 = ½ × 15 × h.",
        "60 = 7.5h → h = 8 cm.",
        "Check: ½ × 15 × 8 = 60 cm². ✓"
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has a base of 22 cm and a height of 11 cm. What is its area?',
      answer: "121",
      hints: [
        "Area of a triangle = ½ × base × height.",
        "½ × 22 × 11 = ?",
        "= 121."
      ],
      explanation: [
        "A = ½ × base × height.",
        "A = ½ × 22 × 11 = 121 cm².",
        "Notice this equals 11², a perfect square."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      diagram: { type: "triangleArea", base: 16, height: 9 },
      question: 'A triangular flag has a base of 16 inches and a height of 9 inches. What is its area?',
      answer: "72",
      hints: [
        "Area of a triangle = ½ × base × height.",
        "½ × 16 × 9 = ?",
        "8 × 9 = ?"
      ],
      explanation: [
        "Area = ½ × base × height.",
        "= ½ × 16 × 9 = 72 in²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "triangleArea", base: 20, height: 11 },
      question: 'A triangle has base 20 cm and height 11 cm. What is its area?',
      choices: ["100 cm²", "110 cm²", "120 cm²", "220 cm²"],
      answer: "110 cm²",
      hints: [
        "Area = ½ × base × height.",
        "½ × 20 × 11 = ?",
        "10 × 11 = ?"
      ],
      explanation: [
        "Area = ½ × base × height.",
        "= ½ × 20 × 11 = 110 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "triangleArea", base: 24, height: 7 },
      question: 'A triangular garden bed has an area of 84 ft². If its base is 24 ft, what is its height?',
      answer: "7",
      hints: [
        "Area = ½ × base × height.",
        "84 = ½ × 24 × h → 84 = 12h.",
        "h = 84 ÷ 12 = ?"
      ],
      explanation: [
        "84 = ½ × 24 × h → 84 = 12h.",
        "h = 7 ft."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A triangular sail has a base of 16 cm and a height of 9 cm. What is its area?',
      diagram: { type: "triangleArea", base: 16, height: 9 },
      answer: "72",
      hints: [
        "Area of a triangle = ½ × base × height.",
        "= ½ × 16 × 9.",
        "= ½ × 144 = ?"
      ],
      explanation: [
        "Area = ½ × b × h = ½ × 16 × 9 = 72 cm².",
        "The sail has an area of 72 square centimeters."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has an area of 60 m² and a base of 15 m. What is the height?',
      diagram: { type: "triangleArea", base: 15, height: 8 },
      choices: ["4 m", "6 m", "8 m", "10 m"],
      answer: "8 m",
      hints: [
        "Area = ½ × base × height.",
        "60 = ½ × 15 × h.",
        "60 = 7.5h → h = ?"
      ],
      explanation: [
        "60 = ½ × 15 × h → 60 = 7.5h.",
        "h = 60 ÷ 7.5 = 8 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangular garden has a base of 22 ft and a height of 14 ft. What is the area in square feet?',
      diagram: { type: "triangleArea", base: 22, height: 14 },
      answer: "154",
      hints: [
        "Area of a triangle = ½ × base × height.",
        "= ½ × 22 × 14.",
        "= ½ × 308 = ?"
      ],
      explanation: [
        "Area = ½ × 22 × 14 = ½ × 308 = 154 ft².",
        "The garden covers 154 square feet."
      ]
    }
  ],

  // ---- Topic 3: Circle Circumference & Area (diff 1-2) ----
  [
    {
      type: "mc", difficulty: 1,
      question: 'A circle has radius 7 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["21.98 cm", "43.96 cm", "153.86 cm", "87.92 cm"],
      answer: "43.96 cm",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 7.",
        "= 43.96."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 7.",
        "= 43.96 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 5 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "78.5",
      hints: [
        "A = πr².",
        "A = 3.14 × 5².",
        "= 3.14 × 25 = ?"
      ],
      explanation: [
        "A = πr² = 3.14 × 25.",
        "= 78.5 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 20 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["31.4 cm", "62.8 cm", "314 cm", "125.6 cm"],
      answer: "62.8 cm",
      hints: [
        "C = πd or C = 2πr.",
        "d = 20, so C = 3.14 × 20.",
        "= 62.8."
      ],
      explanation: [
        "C = πd = 3.14 × 20.",
        "= 62.8 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has area 126 m² and width 9 m. What is its length?',
      answer: "14",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 126 ÷ 9.",
        "= 14."
      ],
      explanation: [
        "l = A / w = 126 / 9.",
        "= 14 m."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A triangle has area 66 cm² and height 12 cm. What is its base?',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 66 ÷ 12.",
        "= 132 ÷ 12 = ?"
      ],
      explanation: [
        "b = 2A / h = 132 / 12.",
        "= 11 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has perimeter 48 cm and length 15 cm. What is its width?',
      answer: "9",
      hints: [
        "P = 2(l + w) → l + w = P/2.",
        "15 + w = 24.",
        "w = 24 − 15 = ?"
      ],
      explanation: [
        "P/2 = 24. Width = 24 − 15 = 9 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 10 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "314",
      hints: [
        "A = πr².",
        "A = 3.14 × 10² = 3.14 × 100.",
        "= 314."
      ],
      explanation: [
        "A = πr² = 3.14 × 100.",
        "= 314 m²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The formula for the circumference of a circle is:',
      choices: ["C = πr²", "C = 2πr", "C = πd²", "C = 4πr"],
      answer: "C = 2πr",
      hints: [
        "It involves π and the radius.",
        "It is NOT the area formula (which uses r²).",
        "C = 2 × π × r."
      ],
      explanation: [
        "C = 2πr (or equivalently C = πd).",
        "This gives the distance around the circle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 3 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "18.84",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 3.",
        "= 18.84."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 3.",
        "= 18.84 cm."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The formula for the area of a circle is:',
      choices: ["A = 2πr", "A = πd", "A = πr²", "A = 2πr²"],
      answer: "A = πr²",
      hints: [
        "It involves π and the radius.",
        "The radius is squared.",
        "A = π × r²."
      ],
      explanation: [
        "The area of a circle is A = πr².",
        "This uses π times the square of the radius."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 6 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "28.26",
      hints: [
        "r = 6 / 2 = 3.",
        "A = πr² = 3.14 × 9.",
        "= 28.26."
      ],
      explanation: [
        "r = 6 / 2 = 3 m.",
        "A = πr² = 3.14 × 9 = 28.26 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A circle has radius 9 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "56.52",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 9.",
        "= 56.52."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 9.",
        "= 56.52 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 14 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["43.96 cm²", "87.92 cm²", "153.86 cm²", "615.44 cm²"],
      answer: "153.86 cm²",
      hints: [
        "r = 14 / 2 = 7.",
        "A = πr² = 3.14 × 49.",
        "= 153.86."
      ],
      explanation: [
        "r = 14 / 2 = 7 cm.",
        "A = πr² = 3.14 × 49 = 153.86 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 8 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "200.96",
      hints: [
        "A = πr².",
        "A = 3.14 × 8² = 3.14 × 64.",
        "= 200.96."
      ],
      explanation: [
        "A = πr² = 3.14 × 64.",
        "= 200.96 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A circle has diameter 10 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "31.4",
      hints: [
        "C = πd.",
        "C = 3.14 × 10.",
        "= 31.4."
      ],
      explanation: [
        "C = πd = 3.14 × 10.",
        "= 31.4 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has radius 6 m. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["18.84 m", "28.26 m", "37.68 m", "113.04 m"],
      answer: "37.68 m",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 6.",
        "= 37.68."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 6.",
        "= 37.68 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 4 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "50.24",
      hints: [
        "A = πr².",
        "A = 3.14 × 4² = 3.14 × 16.",
        "= 50.24."
      ],
      explanation: [
        "A = πr² = 3.14 × 16.",
        "= 50.24 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 12 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "75.36",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 12.",
        "= 75.36."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 12.",
        "= 75.36 cm."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A circle has diameter 16 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["25.12 cm", "37.68 cm", "50.24 cm", "100.48 cm"],
      answer: "50.24 cm",
      hints: [
        "C = πd.",
        "C = 3.14 × 16.",
        "= 50.24."
      ],
      explanation: [
        "C = πd = 3.14 × 16.",
        "= 50.24 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 11 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "379.94",
      hints: [
        "A = πr².",
        "A = 3.14 × 11² = 3.14 × 121.",
        "= 379.94."
      ],
      explanation: [
        "A = πr² = 3.14 × 121.",
        "= 379.94 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A circle has radius 2 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "12.56",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 2.",
        "= 12.56."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 2.",
        "= 12.56 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 18 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["28.26 cm", "56.52 cm", "113.04 cm", "254.34 cm"],
      answer: "56.52 cm",
      hints: [
        "C = πd.",
        "C = 3.14 × 18.",
        "= 56.52."
      ],
      explanation: [
        "C = πd = 3.14 × 18.",
        "= 56.52 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 15 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "706.5",
      hints: [
        "A = πr².",
        "A = 3.14 × 15² = 3.14 × 225.",
        "= 706.5."
      ],
      explanation: [
        "A = πr² = 3.14 × 225.",
        "= 706.5 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A circle has radius 14 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "87.92",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 14.",
        "= 87.92."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 14.",
        "= 87.92 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 22 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["34.54 cm", "49.08 cm", "69.08 cm", "138.16 cm"],
      answer: "69.08 cm",
      hints: [
        "C = πd.",
        "C = 3.14 × 22.",
        "= 69.08."
      ],
      explanation: [
        "C = πd = 3.14 × 22.",
        "= 69.08 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 13 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "530.66",
      hints: [
        "A = πr².",
        "A = 3.14 × 13² = 3.14 × 169.",
        "= 530.66."
      ],
      explanation: [
        "A = πr² = 3.14 × 169.",
        "= 530.66 m²."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A circle has radius 9 cm. What is its circumference? (Use <span class="math">\pi \approx 3.14</span>)',
      choices: ["28.26 cm", "42.39 cm", "56.52 cm", "84.78 cm"],
      answer: "56.52 cm",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 9.",
        "= 56.52."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 9.",
        "= 56.52 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 16 cm. What is its area? (Use <span class="math">\pi \approx 3.14</span>)',
      choices: ["50.24 cm²", "100.48 cm²", "200.96 cm²", "803.84 cm²"],
      answer: "200.96 cm²",
      hints: [
        "First find radius: r = 16 ÷ 2 = 8.",
        "A = πr² = 3.14 × 64.",
        "= 200.96."
      ],
      explanation: [
        "r = d/2 = 8 cm.",
        "A = πr² = 3.14 × 64 = 200.96 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 11 m. What is its area? (Use <span class="math">\pi \approx 3.14</span>)',
      answer: "379.94",
      hints: [
        "A = πr².",
        "A = 3.14 × 11² = 3.14 × 121.",
        "= 379.94."
      ],
      explanation: [
        "A = πr² = 3.14 × 121.",
        "= 379.94 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A circle has radius 16 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "100.48",
      hints: [
        "C = 2πr.",
        "C = 2 × 3.14 × 16.",
        "= 100.48."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 16.",
        "= 100.48 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has diameter 24 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["37.68 cm", "50.24 cm", "75.36 cm", "150.72 cm"],
      answer: "75.36 cm",
      hints: [
        "C = πd.",
        "C = 3.14 × 24.",
        "= 75.36."
      ],
      explanation: [
        "C = πd = 3.14 × 24.",
        "= 75.36 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 7 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "153.86",
      hints: [
        "A = πr².",
        "A = 3.14 × 7² = 3.14 × 49.",
        "= 153.86."
      ],
      explanation: [
        "A = πr² = 3.14 × 49.",
        "= 153.86 m²."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'A circle has a radius of 7 cm. What is its circumference? Use <span class="math">\\pi \\approx 3.14</span>.',
      choices: ["21.98 cm", "38.46 cm", "43.96 cm", "49.84 cm"],
      answer: "43.96 cm",
      hints: [
        "Circumference = 2πr.",
        "2 × 3.14 × 7 = ?",
        "= 43.96."
      ],
      explanation: [
        "C = 2πr = 2 × 3.14 × 7.",
        "C = 43.96 cm.",
        "The diameter is 14 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has a diameter of 18 cm. What is its area? Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest whole number.',
      answer: "254",
      hints: [
        "Radius = diameter ÷ 2 = 18 ÷ 2 = 9 cm.",
        "Area = πr² = 3.14 × 9².",
        "= 3.14 × 81 = ?"
      ],
      explanation: [
        "r = 18 ÷ 2 = 9 cm.",
        "A = πr² = 3.14 × 81 = 254.34 ≈ 254 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has a radius of 5 cm. What is its area? Use <span class="math">\\pi \\approx 3.14</span>.',
      answer: "78.5",
      hints: [
        "Area = πr².",
        "3.14 × 5² = 3.14 × 25.",
        "= ?"
      ],
      explanation: [
        "A = πr² = 3.14 × 25 = 78.5 cm².",
        "The circumference would be 2 × 3.14 × 5 = 31.4 cm."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      diagram: { type: "circle", r: 10 },
      question: 'A circular pool has a diameter of 20 feet. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["31.4 ft", "62.8 ft", "125.6 ft", "314 ft"],
      answer: "62.8 ft",
      hints: [
        "Circumference = π × diameter.",
        "Diameter = 20 ft.",
        "3.14 × 20 = ?"
      ],
      explanation: [
        "C = πd = 3.14 × 20.",
        "= 62.8 ft."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "circle", r: 8 },
      question: 'A circular rug has a radius of 8 feet. What is its area? (Use <span class="math">π ≈ 3.14</span>) Round to the nearest hundredth.',
      answer: "200.96",
      hints: [
        "Area = π × r².",
        "r = 8, so r² = 64.",
        "3.14 × 64 = ?"
      ],
      explanation: [
        "A = πr² = 3.14 × 8².",
        "= 3.14 × 64 = 200.96 ft²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      diagram: { type: "circle", r: 5 },
      question: 'A pizza has a diameter of 10 inches. What is its radius?',
      answer: "5",
      hints: [
        "Radius is half of the diameter.",
        "Diameter = 10 inches.",
        "10 ÷ 2 = ?"
      ],
      explanation: [
        "Radius = diameter ÷ 2.",
        "= 10 ÷ 2 = 5 inches."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A circular track has a diameter of 400 m. What is its circumference? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 200 },
      answer: "1256",
      hints: [
        "Circumference = π × d.",
        "= 3.14 × 400.",
        "= ?"
      ],
      explanation: [
        "C = πd = 3.14 × 400 = 1,256 m.",
        "One lap around the track is 1,256 meters."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circular pizza has a radius of 7 inches. What is its area? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 7 },
      choices: ["43.96 in²", "153.86 in²", "307.72 in²", "615.44 in²"],
      answer: "153.86 in²",
      hints: [
        "Area = π × r².",
        "= 3.14 × 7².",
        "= 3.14 × 49 = ?"
      ],
      explanation: [
        "Area = πr² = 3.14 × 49 = 153.86 in².",
        "The pizza covers about 153.86 square inches."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circular fountain has a circumference of 31.4 meters. What is its radius? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 5 },
      answer: "5",
      hints: [
        "C = 2πr.",
        "31.4 = 2 × 3.14 × r.",
        "31.4 = 6.28r → r = ?"
      ],
      explanation: [
        "31.4 = 2(3.14)r = 6.28r.",
        "r = 31.4 ÷ 6.28 = 5 meters."
      ]
    }
  ],

  // ---- Topic 4: Formulas & Reverse (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has area 84 m² and width 7 m. What is its length?',
      answer: "12",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 84 ÷ 7.",
        "= 12."
      ],
      explanation: [
        "l = A / w = 84 / 7.",
        "= 12 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 56 cm² and height 8 cm. What is its base?',
      choices: ["7 cm", "12 cm", "14 cm", "16 cm"],
      answer: "14 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 56 ÷ 8.",
        "= 112 ÷ 8 = ?"
      ],
      explanation: [
        "b = 2A/h = 2(56)/8.",
        "= 112/8 = 14 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has perimeter 40 cm and length 13 cm. What is its width?',
      answer: "7",
      hints: [
        "P = 2(l + w) → l + w = P/2.",
        "l + w = 40/2 = 20.",
        "w = 20 − 13 = ?"
      ],
      explanation: [
        "l + w = 40 ÷ 2 = 20.",
        "w = 20 − 13 = 7 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has perimeter 60 m. What is its area?',
      choices: ["144 m²", "196 m²", "225 m²", "256 m²"],
      answer: "225 m²",
      hints: [
        "Side = P ÷ 4 = 60 ÷ 4 = 15.",
        "Area = s² = 15².",
        "= 225."
      ],
      explanation: [
        "s = 60 ÷ 4 = 15 m.",
        "A = 15² = 225 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has circumference <span class="math">31.4 cm</span>. What is the radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "5",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 31.4 ÷ (2 × 3.14).",
        "= 31.4 ÷ 6.28 = ?"
      ],
      explanation: [
        "r = C / (2π) = 31.4 / 6.28.",
        "= 5 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has area 150 m² and length 15 m. What is its width?',
      answer: "10",
      hints: [
        "A = l × w → w = A ÷ l.",
        "w = 150 ÷ 15.",
        "= 10."
      ],
      explanation: [
        "w = A / l = 150 / 15.",
        "= 10 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has circumference <span class="math">25.12 cm</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["4 cm", "6 cm", "8 cm", "10 cm"],
      answer: "8 cm",
      hints: [
        "C = πd → d = C / π.",
        "d = 25.12 / 3.14.",
        "= 8."
      ],
      explanation: [
        "d = C / π = 25.12 / 3.14.",
        "= 8 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 72 cm² and width 8 cm. What is its length?',
      answer: "9",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 72 ÷ 8.",
        "= 9."
      ],
      explanation: [
        "l = A / w = 72 / 8.",
        "= 9 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 36 cm² and base 9 cm. What is its height?',
      choices: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "8 cm",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 36 ÷ 9 = 72 ÷ 9.",
        "= 8."
      ],
      explanation: [
        "h = 2A / b = 72 / 9.",
        "= 8 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has perimeter 36 cm and length 11 cm. What is its width?',
      answer: "7",
      hints: [
        "P = 2(l + w) → l + w = P/2.",
        "l + w = 36/2 = 18.",
        "w = 18 − 11 = ?"
      ],
      explanation: [
        "l + w = 36 ÷ 2 = 18.",
        "w = 18 − 11 = 7 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">78.5 cm²</span>. What is the radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "5",
      hints: [
        "A = πr² → r² = A ÷ π.",
        "r² = 78.5 ÷ 3.14 = 25.",
        "r = √25 = ?"
      ],
      explanation: [
        "r² = A / π = 78.5 / 3.14 = 25.",
        "r = √25 = 5 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 96 cm² and width 6 cm. What is its length?',
      answer: "16",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 96 ÷ 6.",
        "= 16."
      ],
      explanation: [
        "l = A / w = 96 / 6.",
        "= 16 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has perimeter 84 m. What is its area?',
      choices: ["400 m²", "420 m²", "441 m²", "484 m²"],
      answer: "441 m²",
      hints: [
        "Side = P ÷ 4 = 84 ÷ 4 = 21.",
        "Area = s² = 21².",
        "= 441."
      ],
      explanation: [
        "s = 84 ÷ 4 = 21 m.",
        "A = 21² = 441 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has area 50 cm² and height 10 cm. What is its base?',
      answer: "10",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 50 ÷ 10.",
        "= 100 ÷ 10 = ?"
      ],
      explanation: [
        "b = 2A / h = 100 / 10.",
        "= 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 117 cm² and width 9 cm. What is its length?',
      answer: "13",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 117 ÷ 9.",
        "= 13."
      ],
      explanation: [
        "l = A / w = 117 / 9.",
        "= 13 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has circumference <span class="math">37.68 cm</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["6 cm", "10 cm", "12 cm", "14 cm"],
      answer: "12 cm",
      hints: [
        "C = πd → d = C / π.",
        "d = 37.68 / 3.14.",
        "= 12."
      ],
      explanation: [
        "d = C / π = 37.68 / 3.14.",
        "= 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has area 66 cm² and base 11 cm. What is its height?',
      answer: "12",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 66 ÷ 11.",
        "= 132 ÷ 11 = ?"
      ],
      explanation: [
        "h = 2A / b = 132 / 11.",
        "= 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 132 cm² and width 11 cm. What is its length?',
      answer: "12",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 132 ÷ 11.",
        "= 12."
      ],
      explanation: [
        "l = A / w = 132 / 11.",
        "= 12 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has perimeter 72 m. What is its area?',
      choices: ["289 m²", "324 m²", "361 m²", "400 m²"],
      answer: "324 m²",
      hints: [
        "Side = P ÷ 4 = 72 ÷ 4 = 18.",
        "Area = s² = 18².",
        "= 324."
      ],
      explanation: [
        "s = 72 ÷ 4 = 18 m.",
        "A = 18² = 324 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has area 78 cm² and base 13 cm. What is its height?',
      answer: "12",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 78 ÷ 13.",
        "= 156 ÷ 13 = ?"
      ],
      explanation: [
        "h = 2A / b = 156 / 13.",
        "= 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 96 m² and width 8 m. What is its length?',
      answer: "12",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 96 ÷ 8.",
        "= 12."
      ],
      explanation: [
        "l = 96 / 8 = 12 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has perimeter 52 m. What is its area?',
      choices: ["144 m²", "156 m²", "169 m²", "196 m²"],
      answer: "169 m²",
      hints: [
        "s = P ÷ 4 = 52 ÷ 4 = 13.",
        "A = s² = 13².",
        "= 169."
      ],
      explanation: [
        "s = 52 ÷ 4 = 13 m.",
        "A = 13² = 169 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has area 54 cm² and height 9 cm. What is its base?',
      answer: "12",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 54 ÷ 9 = 108 ÷ 9.",
        "= 12."
      ],
      explanation: [
        "b = 2A / h = 108 / 9 = 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has area 126 m² and width 9 m. What is its length?',
      answer: "14",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 126 ÷ 9.",
        "= 14."
      ],
      explanation: [
        "l = A / w = 126 / 9.",
        "= 14 m."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A triangle has area 66 cm² and height 12 cm. What is its base?',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "A = ½bh → b = 2A ÷ h.",
        "b = 2 × 66 ÷ 12.",
        "= 132 ÷ 12 = ?"
      ],
      explanation: [
        "b = 2A / h = 132 / 12.",
        "= 11 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has perimeter 48 cm and length 15 cm. What is its width?',
      answer: "9",
      hints: [
        "P = 2(l + w) → l + w = P/2.",
        "15 + w = 24.",
        "w = 24 − 15 = ?"
      ],
      explanation: [
        "P = 48, so l + w = 48 / 2 = 24.",
        "Width = 24 − 15 = 9 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 156 cm² and length 13 cm. What is its width?',
      answer: "12",
      hints: [
        "A = l × w → w = A ÷ l.",
        "156 ÷ 13 = ?",
        "= 12."
      ],
      explanation: [
        "w = A ÷ l = 156 ÷ 13.",
        "= 12 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 90 cm² and base 15 cm. What is its height?',
      choices: ["8 cm", "10 cm", "12 cm", "14 cm"],
      answer: "12 cm",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 90 ÷ 15.",
        "= 180 ÷ 15 = ?"
      ],
      explanation: [
        "h = 2A / b = 180 / 15.",
        "= 12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has an area of 529 cm². What is its side length?',
      answer: "23",
      hints: [
        "A = s² → s = √A.",
        "√529 = ?",
        "23 × 23 = 529. ✓"
      ],
      explanation: [
        "s = √A = √529.",
        "= 23 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has area 176 cm² and width 11 cm. What is its length?',
      answer: "16",
      hints: [
        "A = l × w → l = A ÷ w.",
        "l = 176 ÷ 11.",
        "= 16."
      ],
      explanation: [
        "l = A / w = 176 / 11.",
        "= 16 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square has perimeter 56 m. What is its area?',
      choices: ["169 m²", "184 m²", "196 m²", "225 m²"],
      answer: "196 m²",
      hints: [
        "Side = P ÷ 4 = 56 ÷ 4 = 14.",
        "Area = s² = 14².",
        "= 196."
      ],
      explanation: [
        "s = 56 ÷ 4 = 14 m.",
        "A = 14² = 196 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A triangle has area 91 cm² and base 13 cm. What is its height?',
      answer: "14",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 91 ÷ 13.",
        "= 182 ÷ 13 = ?"
      ],
      explanation: [
        "h = 2A / b = 182 / 13.",
        "= 14 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A rectangle has a perimeter of 54 cm and a length of 17 cm. What is its width?',
      answer: "10",
      hints: [
        "Perimeter = 2 × (length + width).",
        "54 = 2 × (17 + w) → 27 = 17 + w.",
        "w = 27 − 17 = ?"
      ],
      explanation: [
        "54 = 2(17 + w) → 27 = 17 + w.",
        "w = 10 cm.",
        "Check: 2 × (17 + 10) = 2 × 27 = 54 cm. ✓"
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has an area of 84 cm² and a height of 12 cm. What is its base?',
      choices: ["7 cm", "12 cm", "14 cm", "21 cm"],
      answer: "14 cm",
      hints: [
        "Area = ½ × base × height.",
        "84 = ½ × b × 12 → 84 = 6b.",
        "b = 84 ÷ 6 = ?"
      ],
      explanation: [
        "84 = ½ × b × 12 = 6b.",
        "b = 14 cm.",
        "Check: ½ × 14 × 12 = 84 cm². ✓"
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has an area of 156 cm² and a width of 12 cm. What is its length?',
      answer: "13",
      hints: [
        "Area = length × width.",
        "156 = length × 12.",
        "length = 156 ÷ 12 = ?"
      ],
      explanation: [
        "156 = l × 12.",
        "l = 156 ÷ 12 = 13 cm.",
        "The perimeter would be 2 × (13 + 12) = 50 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rectangle", l: 15, w: 8 },
      question: 'A rectangle has an area of 120 cm² and a length of 15 cm. What is its width?',
      answer: "8",
      hints: [
        "Area = length × width.",
        "120 = 15 × w.",
        "w = 120 ÷ 15 = ?"
      ],
      explanation: [
        "A = l × w → 120 = 15 × w.",
        "w = 120 ÷ 15 = 8 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has an area of 60 in² and a height of 12 in. What is its base?',
      diagram: { type: "triangleArea", base: 10, height: 12 },
      choices: ["5 in", "8 in", "10 in", "12 in"],
      answer: "10 in",
      hints: [
        "Area = ½ × base × height.",
        "60 = ½ × b × 12 → 60 = 6b.",
        "b = 60 ÷ 6 = ?"
      ],
      explanation: [
        "60 = ½ × b × 12 → 60 = 6b.",
        "b = 10 in."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rectangle", l: 22, w: 11 },
      question: 'A rectangle has a perimeter of 66 m and a width of 11 m. What is its length?',
      answer: "22",
      hints: [
        "P = 2(l + w).",
        "66 = 2(l + 11) → 33 = l + 11.",
        "l = 33 − 11 = ?"
      ],
      explanation: [
        "66 = 2(l + 11) → 33 = l + 11.",
        "l = 22 m."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has an area of 180 cm² and a length of 15 cm. What is the width?',
      diagram: { type: "rectangle", l: 15, w: 12 },
      answer: "12",
      hints: [
        "Area = length × width.",
        "180 = 15 × w.",
        "w = 180 ÷ 15 = ?"
      ],
      explanation: [
        "180 = 15w → w = 180 ÷ 15 = 12 cm.",
        "The rectangle is 15 cm by 12 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has an area of 84 cm² and a height of 12 cm. What is the base?',
      diagram: { type: "triangleArea", base: 14, height: 12 },
      choices: ["7 cm", "12 cm", "14 cm", "21 cm"],
      answer: "14 cm",
      hints: [
        "Area = ½ × base × height.",
        "84 = ½ × b × 12.",
        "84 = 6b → b = ?"
      ],
      explanation: [
        "84 = ½ × b × 12 → 84 = 6b.",
        "b = 84 ÷ 6 = 14 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has a perimeter of 78 m and a length of 23 m. What is the width?',
      diagram: { type: "rectangle", l: 23, w: 16 },
      answer: "16",
      hints: [
        "Perimeter = 2(l + w).",
        "78 = 2(23 + w).",
        "39 = 23 + w → w = ?"
      ],
      explanation: [
        "78 = 2(23 + w) → 39 = 23 + w.",
        "w = 39 − 23 = 16 m."
      ]
    }
  ],

  // ---- Topic 5: Parallelogram & Trapezoid (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 14 cm and height 9 cm. What is its area?',
      answer: "126",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 14 × 9.",
        "= 126."
      ],
      explanation: [
        "A = bh = 14 × 9.",
        "= 126 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A trapezoid has parallel sides of 8 cm and 14 cm, and height 6 cm. What is its area?',
      choices: ["48 cm²", "56 cm²", "66 cm²", "84 cm²"],
      answer: "66 cm²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "A = ½(8 + 14) × 6.",
        "= ½ × 22 × 6 = ?"
      ],
      explanation: [
        "A = ½(b₁ + b₂)h = ½(8 + 14)(6).",
        "= ½ × 22 × 6 = 66 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 195 cm² and height 13 cm. What is its base?',
      answer: "15",
      hints: [
        "A = bh → b = A ÷ h.",
        "b = 195 ÷ 13.",
        "= 15."
      ],
      explanation: [
        "b = A / h = 195 / 13.",
        "= 15 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has bases 10 m and 16 m, and height 7 m. What is its area?',
      choices: ["70 m²", "82 m²", "91 m²", "112 m²"],
      answer: "91 m²",
      hints: [
        "A = ½(b₁ + b₂)h.",
        "= ½(10 + 16)(7).",
        "= ½ × 26 × 7 = ?"
      ],
      explanation: [
        "A = ½(10 + 16)(7).",
        "= ½ × 26 × 7 = 91 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A trapezoid has area 100 cm², bases of 12 cm and 8 cm. What is its height?',
      answer: "10",
      hints: [
        "A = ½(b₁ + b₂)h → h = 2A ÷ (b₁ + b₂).",
        "h = 2 × 100 ÷ (12 + 8).",
        "= 200 ÷ 20 = ?"
      ],
      explanation: [
        "h = 2A / (b₁ + b₂) = 200 / 20.",
        "= 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 18 m and height 11 m. What is its area?',
      answer: "198",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 18 × 11.",
        "= 198."
      ],
      explanation: [
        "A = bh = 18 × 11.",
        "= 198 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides 9 cm and 15 cm, and height 8 cm. What is its area?',
      choices: ["72 cm²", "84 cm²", "96 cm²", "120 cm²"],
      answer: "96 cm²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "= ½(9 + 15) × 8.",
        "= ½ × 24 × 8 = ?"
      ],
      explanation: [
        "A = ½(9 + 15)(8) = ½ × 24 × 8.",
        "= 96 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A trapezoid has area 130 m², parallel sides of 11 m and 15 m. What is its height?',
      answer: "10",
      hints: [
        "A = ½(b₁ + b₂)h → h = 2A / (b₁ + b₂).",
        "h = 2 × 130 / (11 + 15) = 260 / 26.",
        "= 10."
      ],
      explanation: [
        "h = 2A / (b₁ + b₂) = 260 / 26.",
        "= 10 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 22 cm and height 7 cm. What is its area?',
      answer: "154",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 22 × 7.",
        "= 154."
      ],
      explanation: [
        "A = bh = 22 × 7.",
        "= 154 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides 6 m and 18 m, and height 5 m. What is its area?',
      choices: ["50 m²", "55 m²", "60 m²", "65 m²"],
      answer: "60 m²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "= ½(6 + 18) × 5.",
        "= ½ × 24 × 5 = ?"
      ],
      explanation: [
        "A = ½(6 + 18)(5) = ½ × 24 × 5.",
        "= 60 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 252 m² and height 14 m. What is its base?',
      answer: "18",
      hints: [
        "A = bh → b = A ÷ h.",
        "b = 252 ÷ 14.",
        "= 18."
      ],
      explanation: [
        "b = A / h = 252 / 14.",
        "= 18 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 16 cm and height 12 cm. What is its area?',
      answer: "192",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 16 × 12.",
        "= 192."
      ],
      explanation: [
        "A = bh = 16 × 12.",
        "= 192 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides 7 m and 13 m, and height 10 m. What is its area?',
      choices: ["80 m²", "90 m²", "100 m²", "110 m²"],
      answer: "100 m²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "= ½(7 + 13) × 10.",
        "= ½ × 20 × 10 = ?"
      ],
      explanation: [
        "A = ½(7 + 13)(10) = ½ × 20 × 10.",
        "= 100 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A trapezoid has area 117 cm², parallel sides of 9 cm and 17 cm. What is its height?',
      answer: "9",
      hints: [
        "A = ½(b₁ + b₂)h → h = 2A / (b₁ + b₂).",
        "h = 2 × 117 / (9 + 17) = 234 / 26.",
        "= 9."
      ],
      explanation: [
        "h = 2A / (b₁ + b₂) = 234 / 26.",
        "= 9 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 25 cm and height 8 cm. What is its area?',
      answer: "200",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 25 × 8.",
        "= 200."
      ],
      explanation: [
        "A = bh = 25 × 8.",
        "= 200 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides 11 cm and 19 cm, and height 6 cm. What is its area?',
      choices: ["80 cm²", "85 cm²", "90 cm²", "95 cm²"],
      answer: "90 cm²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "= ½(11 + 19) × 6.",
        "= ½ × 30 × 6 = ?"
      ],
      explanation: [
        "A = ½(11 + 19)(6) = ½ × 30 × 6.",
        "= 90 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 176 m² and height 11 m. What is its base?',
      answer: "16",
      hints: [
        "A = bh → b = A ÷ h.",
        "b = 176 ÷ 11.",
        "= 16."
      ],
      explanation: [
        "b = A / h = 176 / 11.",
        "= 16 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 20 cm and height 13 cm. What is its area?',
      answer: "260",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 20 × 13.",
        "= 260."
      ],
      explanation: [
        "A = bh = 20 × 13.",
        "= 260 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides 5 m and 13 m, and height 8 m. What is its area?',
      choices: ["60 m²", "68 m²", "72 m²", "80 m²"],
      answer: "72 m²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "= ½(5 + 13) × 8.",
        "= ½ × 18 × 8 = ?"
      ],
      explanation: [
        "A = ½(5 + 13)(8) = ½ × 18 × 8.",
        "= 72 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 312 m² and height 13 m. What is its base?',
      answer: "24",
      hints: [
        "A = bh → b = A ÷ h.",
        "b = 312 ÷ 13.",
        "= 24."
      ],
      explanation: [
        "b = A / h = 312 / 13.",
        "= 24 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 16 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "200.96",
      hints: [
        "Radius = diameter ÷ 2 = 8.",
        "A = πr² = 3.14 × 64.",
        "= 200.96."
      ],
      explanation: [
        "r = 16 / 2 = 8 cm.",
        "A = πr² = 3.14 × 64 = 200.96 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 20 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["78.5 cm²", "157 cm²", "314 cm²", "628 cm²"],
      answer: "157 cm²",
      hints: [
        "r = 20 / 2 = 10.",
        "Full circle area = 3.14 × 100 = 314.",
        "Semicircle = 314 ÷ 2 = ?"
      ],
      explanation: [
        "r = 10 cm. Full circle = πr² = 3.14 × 100 = 314 cm².",
        "Semicircle = 314 / 2 = 157 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A quarter-circle has radius 8 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "50.24",
      hints: [
        "Full circle area = πr² = 3.14 × 64 = 200.96.",
        "A quarter-circle is 1/4 of the full circle.",
        "200.96 ÷ 4 = ?"
      ],
      explanation: [
        "Full circle = 3.14 × 64 = 200.96 m².",
        "Quarter-circle = 200.96 / 4 = 50.24 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 18 cm and height 11 cm. What is its area?',
      answer: "198",
      hints: [
        "Area of a parallelogram = base × height.",
        "18 × 11 = ?",
        "= 198."
      ],
      explanation: [
        "A = bh = 18 × 11.",
        "= 198 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides of 9 cm and 15 cm, and height 8 cm. What is its area?',
      choices: ["72 cm²", "84 cm²", "96 cm²", "108 cm²"],
      answer: "96 cm²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "A = ½(9 + 15) × 8.",
        "= ½ × 24 × 8 = ?"
      ],
      explanation: [
        "A = ½(b₁ + b₂)h = ½(9 + 15)(8).",
        "= ½ × 24 × 8 = 96 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A trapezoid has parallel sides of 11 cm and 19 cm, and height 6 cm. What is its area?',
      answer: "90",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "A = ½(11 + 19) × 6.",
        "= ½ × 30 × 6 = ?"
      ],
      explanation: [
        "A = ½(11 + 19)(6).",
        "= ½ × 30 × 6 = 90 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 16 cm and height 9 cm. What is its area?',
      answer: "144",
      hints: [
        "Area of a parallelogram = base × height.",
        "16 × 9 = ?",
        "= 144."
      ],
      explanation: [
        "A = bh = 16 × 9.",
        "= 144 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides of 8 cm and 14 cm and height 6 cm. What is its area?',
      choices: ["48 cm²", "56 cm²", "66 cm²", "84 cm²"],
      answer: "66 cm²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "A = ½(8 + 14) × 6 = ½ × 22 × 6.",
        "= 66."
      ],
      explanation: [
        "A = ½(b₁ + b₂)h = ½(8 + 14)(6).",
        "= ½ × 22 × 6 = 66 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 195 cm² and height 13 cm. What is its base?',
      answer: "15",
      hints: [
        "A = bh → b = A ÷ h.",
        "195 ÷ 13 = ?",
        "= 15."
      ],
      explanation: [
        "b = A / h = 195 / 13.",
        "= 15 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has base 22 cm and height 7 cm. What is its area?',
      answer: "154",
      hints: [
        "Area of a parallelogram = base × height.",
        "A = 22 × 7.",
        "= 154."
      ],
      explanation: [
        "A = bh = 22 × 7.",
        "= 154 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides of 11 cm and 17 cm, and height 9 cm. What is its area?',
      choices: ["99 cm²", "108 cm²", "117 cm²", "126 cm²"],
      answer: "126 cm²",
      hints: [
        "A = ½(b₁ + b₂) × h.",
        "A = ½(11 + 17) × 9.",
        "= ½ × 28 × 9 = ?"
      ],
      explanation: [
        "A = ½(b₁ + b₂)h = ½(11 + 17)(9).",
        "= ½ × 28 × 9 = 126 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 234 cm² and height 13 cm. What is its base?',
      answer: "18",
      hints: [
        "A = bh → b = A ÷ h.",
        "b = 234 ÷ 13.",
        "= 18."
      ],
      explanation: [
        "b = A / h = 234 / 13.",
        "= 18 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has a base of 17 cm and a height of 8 cm. What is its area?',
      answer: "136",
      hints: [
        "Area of a parallelogram = base × height.",
        "17 × 8 = ?",
        "= 136."
      ],
      explanation: [
        "A = base × height.",
        "A = 17 × 8 = 136 cm²."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has parallel sides of 10 cm and 16 cm, and a height of 7 cm. What is its area?',
      choices: ["77 cm²", "84 cm²", "91 cm²", "112 cm²"],
      answer: "91 cm²",
      hints: [
        "Area = ½ × (b₁ + b₂) × h.",
        "½ × (10 + 16) × 7 = ½ × 26 × 7.",
        "= 13 × 7 = ?"
      ],
      explanation: [
        "A = ½ × (b₁ + b₂) × h.",
        "A = ½ × (10 + 16) × 7 = ½ × 26 × 7.",
        "A = 91 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has an area of 195 cm² and a height of 13 cm. What is its base?',
      answer: "15",
      hints: [
        "Area = base × height.",
        "195 = base × 13.",
        "base = 195 ÷ 13 = ?"
      ],
      explanation: [
        "195 = b × 13.",
        "b = 195 ÷ 13 = 15 cm.",
        "Check: 15 × 13 = 195 cm². ✓"
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "parallelogram", b: 15, h: 9 },
      question: 'A parallelogram-shaped tabletop has a base of 15 inches and a height of 9 inches. What is its area?',
      answer: "135",
      hints: [
        "Area of a parallelogram = base × height.",
        "15 × 9 = ?",
        "Multiply carefully."
      ],
      explanation: [
        "Area = base × height.",
        "= 15 × 9 = 135 in²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "trapezoid", b1: 8, b2: 14, h: 6 },
      question: 'A trapezoid has bases of 8 cm and 14 cm, and a height of 6 cm. What is its area?',
      choices: ["48 cm²", "66 cm²", "84 cm²", "132 cm²"],
      answer: "66 cm²",
      hints: [
        "Area = ½ × (base₁ + base₂) × height.",
        "½ × (8 + 14) × 6 = ?",
        "½ × 22 × 6 = 11 × 6 = ?"
      ],
      explanation: [
        "A = ½ × (b₁ + b₂) × h.",
        "= ½ × (8 + 14) × 6 = ½ × 22 × 6 = 66 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "parallelogram", b: 18, h: 7 },
      question: 'A parallelogram has an area of 126 cm². If its base is 18 cm, what is its height?',
      answer: "7",
      hints: [
        "Area = base × height.",
        "126 = 18 × h.",
        "h = 126 ÷ 18 = ?"
      ],
      explanation: [
        "A = b × h → 126 = 18 × h.",
        "h = 126 ÷ 18 = 7 cm."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has a base of 14 cm and a height of 8 cm. What is its area?',
      diagram: { type: "parallelogram", b: 14, h: 8 },
      answer: "112",
      hints: [
        "Area of a parallelogram = base × height.",
        "= 14 × 8.",
        "= ?"
      ],
      explanation: [
        "Area = b × h = 14 × 8 = 112 cm².",
        "The parallelogram has an area of 112 square centimeters."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A trapezoid has bases of 10 m and 16 m, and a height of 7 m. What is its area?',
      diagram: { type: "trapezoid", b1: 10, b2: 16, h: 7 },
      choices: ["70 m²", "91 m²", "112 m²", "182 m²"],
      answer: "91 m²",
      hints: [
        "Area of a trapezoid = ½(b₁ + b₂) × h.",
        "= ½(10 + 16) × 7.",
        "= ½ × 26 × 7 = ?"
      ],
      explanation: [
        "Area = ½(b₁ + b₂) × h = ½(10 + 16) × 7.",
        "= ½ × 26 × 7 = 13 × 7 = 91 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has an area of 126 cm² and a height of 9 cm. What is the base?',
      diagram: { type: "parallelogram", b: 14, h: 9 },
      answer: "14",
      hints: [
        "Area = base × height.",
        "126 = b × 9.",
        "b = 126 ÷ 9 = ?"
      ],
      explanation: [
        "126 = b × 9 → b = 126 ÷ 9 = 14 cm.",
        "The base of the parallelogram is 14 cm."
      ]
    }
  ],

  // ---- Topic 6: Working Backward (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has area 108 m² and length 12 m. What is its width?',
      answer: "9",
      hints: [
        "A = l × w → w = A ÷ l.",
        "w = 108 ÷ 12.",
        "= 9."
      ],
      explanation: [
        "w = A / l = 108 / 12.",
        "= 9 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 72 cm² and base 16 cm. What is the height?',
      choices: ["6 cm", "8 cm", "9 cm", "12 cm"],
      answer: "9 cm",
      hints: [
        "A = ½bh → h = 2A/b.",
        "h = 2(72)/16 = 144/16.",
        "= 9."
      ],
      explanation: [
        "h = 2A / b = 144 / 16.",
        "= 9 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has area 289 cm². What is its perimeter?',
      answer: "68",
      hints: [
        "s = √289 = 17.",
        "P = 4s = 4 × 17.",
        "= 68."
      ],
      explanation: [
        "s = √289 = 17 cm.",
        "P = 4 × 17 = 68 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A parallelogram has area 168 m² and base 14 m. What is the height?',
      choices: ["10 m", "11 m", "12 m", "13 m"],
      answer: "12 m",
      hints: [
        "A = bh → h = A/b.",
        "h = 168 / 14.",
        "= 12."
      ],
      explanation: [
        "h = A / b = 168 / 14.",
        "= 12 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has perimeter 62 cm and width 11 cm. What is its area?',
      answer: "220",
      hints: [
        "P = 2(l + w) → l + w = 31.",
        "l = 31 − 11 = 20.",
        "A = 20 × 11 = ?"
      ],
      explanation: [
        "l + w = 62 / 2 = 31 → l = 31 − 11 = 20.",
        "A = 20 × 11 = 220 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A trapezoid has area 84 m² and parallel sides of 10 m and 14 m. What is the height?',
      answer: "7",
      hints: [
        "A = ½(b₁ + b₂)h → h = 2A / (b₁ + b₂).",
        "h = 2 × 84 / (10 + 14) = 168 / 24.",
        "= 7."
      ],
      explanation: [
        "h = 2A / (b₁ + b₂) = 168 / 24.",
        "= 7 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangle has area 48 m² and width 6 m. What is its perimeter?',
      choices: ["20 m", "22 m", "26 m", "28 m"],
      answer: "28 m",
      hints: [
        "l = A / w = 48 / 6 = 8.",
        "P = 2(l + w) = 2(8 + 6).",
        "= 2 × 14 = ?"
      ],
      explanation: [
        "l = 48 / 6 = 8 m.",
        "P = 2(8 + 6) = 28 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has area <span class="math">314 cm²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "20",
      hints: [
        "r² = A / π = 314 / 3.14 = 100.",
        "r = 10.",
        "Diameter = 2 × 10 = ?"
      ],
      explanation: [
        "r² = 314 / 3.14 = 100 → r = 10 cm.",
        "Diameter = 2 × 10 = 20 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has area 150 m² and parallel sides of 14 m and 16 m. What is its height?',
      choices: ["8 m", "9 m", "10 m", "11 m"],
      answer: "10 m",
      hints: [
        "A = ½(b₁ + b₂)h → h = 2A / (b₁ + b₂).",
        "h = 2 × 150 / (14 + 16) = 300 / 30.",
        "= 10."
      ],
      explanation: [
        "h = 2A / (b₁ + b₂) = 300 / 30.",
        "= 10 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has area 400 cm². What is its perimeter?',
      answer: "80",
      hints: [
        "s = √400 = 20.",
        "P = 4s = 4 × 20.",
        "= 80."
      ],
      explanation: [
        "s = √400 = 20 cm.",
        "P = 4 × 20 = 80 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has area 91 cm² and base 14 cm. What is the height?',
      answer: "13",
      hints: [
        "A = ½bh → h = 2A / b.",
        "h = 2 × 91 / 14 = 182 / 14.",
        "= 13."
      ],
      explanation: [
        "h = 2A / b = 182 / 14.",
        "= 13 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A parallelogram has area 216 m² and base 18 m. What is the height?',
      choices: ["10 m", "11 m", "12 m", "13 m"],
      answer: "12 m",
      hints: [
        "A = bh → h = A/b.",
        "h = 216 / 18.",
        "= 12."
      ],
      explanation: [
        "h = A / b = 216 / 18.",
        "= 12 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has area 361 cm². What is its perimeter?',
      answer: "76",
      hints: [
        "s = √361 = 19.",
        "P = 4s = 4 × 19.",
        "= 76."
      ],
      explanation: [
        "s = √361 = 19 cm.",
        "P = 4 × 19 = 76 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has perimeter 54 cm and width 9 cm. What is its area?',
      answer: "162",
      hints: [
        "P = 2(l + w) → l + w = 27.",
        "l = 27 − 9 = 18.",
        "A = 18 × 9 = ?"
      ],
      explanation: [
        "l + w = 54 / 2 = 27 → l = 27 − 9 = 18.",
        "A = 18 × 9 = 162 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has area <span class="math">200.96 cm²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "16",
      hints: [
        "r² = A / π = 200.96 / 3.14 = 64.",
        "r = 8.",
        "Diameter = 2 × 8 = ?"
      ],
      explanation: [
        "r² = 200.96 / 3.14 = 64 → r = 8 cm.",
        "Diameter = 2 × 8 = 16 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has area 110 cm² and base 20 cm. What is the height?',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "A = ½bh → h = 2A / b.",
        "h = 2 × 110 / 20 = 220 / 20.",
        "= 11."
      ],
      explanation: [
        "h = 2A / b = 220 / 20.",
        "= 11 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has area 529 cm². What is its perimeter?',
      answer: "92",
      hints: [
        "s = √529 = 23.",
        "P = 4s = 4 × 23.",
        "= 92."
      ],
      explanation: [
        "s = √529 = 23 cm.",
        "P = 4 × 23 = 92 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A square has area 441 cm². What is its perimeter?',
      answer: "84",
      hints: [
        "s = √441 = 21.",
        "P = 4s = 4 × 21.",
        "= 84."
      ],
      explanation: [
        "s = √441 = 21 cm.",
        "P = 4 × 21 = 84 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">200.96 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "8",
      hints: [
        "A = πr² → r² = A ÷ π.",
        "r² = 200.96 ÷ 3.14 = 64.",
        "r = √64 = ?"
      ],
      explanation: [
        "r² = A / π = 200.96 / 3.14 = 64.",
        "r = √64 = 8 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has circumference <span class="math">62.8 cm</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["8 cm", "10 cm", "12 cm", "15 cm"],
      answer: "10 cm",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 62.8 ÷ 6.28.",
        "= 10."
      ],
      explanation: [
        "r = C / (2π) = 62.8 / 6.28.",
        "= 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has area <span class="math">706.5 m²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "30",
      hints: [
        "A = πr² → r² = 706.5 ÷ 3.14 = 225.",
        "r = √225 = 15.",
        "Diameter = 2 × 15 = ?"
      ],
      explanation: [
        "r² = 706.5 / 3.14 = 225.",
        "r = 15 m. Diameter = 2 × 15 = 30 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A parallelogram has area 234 m² and base 18 m. What is the height?',
      choices: ["11 m", "12 m", "13 m", "14 m"],
      answer: "13 m",
      hints: [
        "A = bh → h = A/b.",
        "h = 234 / 18.",
        "= 13."
      ],
      explanation: [
        "h = A / b = 234 / 18.",
        "= 13 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has perimeter 78 cm and width 13 cm. What is its area?',
      answer: "338",
      hints: [
        "P = 2(l + w) → l + w = 39.",
        "l = 39 − 13 = 26.",
        "A = 26 × 13 = ?"
      ],
      explanation: [
        "l + w = 78 / 2 = 39 → l = 39 − 13 = 26.",
        "A = 26 × 13 = 338 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has area 195 cm² and base 15 cm. What is its height?',
      answer: "13",
      hints: [
        "A = b × h → h = A ÷ b.",
        "h = 195 ÷ 15.",
        "= 13."
      ],
      explanation: [
        "h = A / b = 195 / 15.",
        "= 13 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A trapezoid has area 84 cm², parallel sides of 10 cm and 14 cm. What is its height?',
      choices: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "7 cm",
      hints: [
        "A = ½(b₁ + b₂)h → h = 2A ÷ (b₁ + b₂).",
        "h = 2 × 84 ÷ (10 + 14).",
        "= 168 ÷ 24 = ?"
      ],
      explanation: [
        "h = 2A / (b₁ + b₂) = 168 / 24.",
        "= 7 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A parallelogram has area 252 cm² and height 14 cm. What is its base?',
      answer: "18",
      hints: [
        "A = b × h → b = A ÷ h.",
        "b = 252 ÷ 14.",
        "= 18."
      ],
      explanation: [
        "b = A / h = 252 / 14.",
        "= 18 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has perimeter 74 cm and width 12 cm. What is its length?',
      answer: "25",
      hints: [
        "P = 2(l + w) → 74 = 2(l + 12).",
        "37 = l + 12.",
        "l = 37 − 12 = ?"
      ],
      explanation: [
        "74 = 2(l + 12) → 37 = l + 12.",
        "l = 25 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has area 143 cm² and base 22 cm. What is its height?',
      choices: ["11 cm", "12 cm", "13 cm", "14 cm"],
      answer: "13 cm",
      hints: [
        "A = ½bh → h = 2A ÷ b.",
        "h = 2 × 143 ÷ 22.",
        "= 286 ÷ 22 = ?"
      ],
      explanation: [
        "h = 2A / b = 286 / 22.",
        "= 13 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has perimeter 116 m. What is its area?',
      answer: "841",
      hints: [
        "s = P ÷ 4 = 116 ÷ 4 = 29.",
        "A = s² = 29².",
        "= 841."
      ],
      explanation: [
        "s = 116 ÷ 4 = 29 m.",
        "A = 29² = 841 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has area 189 m² and length 21 m. What is its width?',
      answer: "9",
      hints: [
        "A = l × w → w = A ÷ l.",
        "w = 189 ÷ 21.",
        "= 9."
      ],
      explanation: [
        "w = A / l = 189 / 21.",
        "= 9 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A parallelogram has area 207 m² and base 23 m. What is the height?',
      choices: ["7 m", "8 m", "9 m", "10 m"],
      answer: "9 m",
      hints: [
        "A = bh → h = A ÷ b.",
        "h = 207 ÷ 23.",
        "= 9."
      ],
      explanation: [
        "h = A / b = 207 / 23.",
        "= 9 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has area 576 cm². What is its perimeter?',
      answer: "96",
      hints: [
        "s = √576 = 24.",
        "P = 4s = 4 × 24.",
        "= 96."
      ],
      explanation: [
        "s = √576 = 24 cm.",
        "P = 4 × 24 = 96 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has a perimeter of 78 cm and a width of 14 cm. What is its length?',
      answer: "25",
      hints: [
        "P = 2(l + w) → 78 = 2(l + 14).",
        "39 = l + 14.",
        "l = 39 − 14 = ?"
      ],
      explanation: [
        "78 = 2(l + 14) → 39 = l + 14.",
        "l = 25 cm.",
        "Check: 2 × (25 + 14) = 2 × 39 = 78 cm. ✓"
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has an area of 99 cm² and a base of 18 cm. What is its height?',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "Area = ½ × base × height.",
        "99 = ½ × 18 × h → 99 = 9h.",
        "h = 99 ÷ 9 = ?"
      ],
      explanation: [
        "99 = ½ × 18 × h = 9h.",
        "h = 11 cm.",
        "Check: ½ × 18 × 11 = 99 cm². ✓"
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A square has a perimeter of 84 cm. What is its area?',
      answer: "441",
      hints: [
        "Side = perimeter ÷ 4 = 84 ÷ 4 = 21 cm.",
        "Area = side × side.",
        "21 × 21 = ?"
      ],
      explanation: [
        "Side = 84 ÷ 4 = 21 cm.",
        "Area = 21² = 441 cm².",
        "Check: 4 × 21 = 84 cm. ✓"
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'The area of a square is 225 ft². What is the length of one side?',
      diagram: { type: "square", s: 15 },
      answer: "15",
      hints: [
        "Area of a square = side².",
        "What number times itself equals 225?",
        "15 × 15 = 225."
      ],
      explanation: [
        "side² = 225.",
        "side = √225 = 15 ft."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has a circumference of 31.4 cm. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      diagram: { type: "circle", r: 5 },
      choices: ["5 cm", "8 cm", "10 cm", "15 cm"],
      answer: "10 cm",
      hints: [
        "C = π × d.",
        "31.4 = 3.14 × d.",
        "d = 31.4 ÷ 3.14 = ?"
      ],
      explanation: [
        "C = πd → 31.4 = 3.14 × d.",
        "d = 31.4 ÷ 3.14 = 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has an area of 91 in² and a base of 13 in. What is the height?',
      diagram: { type: "triangleArea", base: 13, height: 14 },
      answer: "14",
      hints: [
        "Area = ½ × base × height.",
        "91 = ½ × 13 × h → 91 = 6.5h.",
        "h = 91 ÷ 6.5 = ?"
      ],
      explanation: [
        "91 = ½ × 13 × h → 91 = 6.5h.",
        "h = 14 in."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has an area of 78.5 cm². What is its radius? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 5 },
      answer: "5",
      hints: [
        "Area = πr².",
        "78.5 = 3.14 × r².",
        "r² = 78.5 ÷ 3.14 = 25 → r = ?"
      ],
      explanation: [
        "78.5 = 3.14 × r² → r² = 25.",
        "r = √25 = 5 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A square has a perimeter of 48 ft. What is its area?',
      diagram: { type: "square", s: 12 },
      choices: ["96 ft²", "120 ft²", "144 ft²", "192 ft²"],
      answer: "144 ft²",
      hints: [
        "Perimeter = 4s → s = 48 ÷ 4 = 12.",
        "Area = s² = 12².",
        "= ?"
      ],
      explanation: [
        "s = 48 ÷ 4 = 12 ft.",
        "Area = 12² = 144 ft²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has an area of 204 m² and a width of 12 m. What is its perimeter?',
      diagram: { type: "rectangle", l: 17, w: 12 },
      answer: "58",
      hints: [
        "Area = l × w → l = 204 ÷ 12 = 17.",
        "Perimeter = 2(l + w).",
        "= 2(17 + 12) = ?"
      ],
      explanation: [
        "l = 204 ÷ 12 = 17 m.",
        "Perimeter = 2(17 + 12) = 2(29) = 58 m."
      ]
    }
  ],

  // ---- Topic 7: Circle Area Advanced (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 12 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "113.04",
      hints: [
        "Radius = diameter ÷ 2 = 6.",
        "A = πr² = 3.14 × 36.",
        "= 113.04."
      ],
      explanation: [
        "r = 12 / 2 = 6 cm.",
        "A = πr² = 3.14 × 36 = 113.04 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has diameter 16 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["50.24 m²", "100.48 m²", "200.96 m²", "803.84 m²"],
      answer: "200.96 m²",
      hints: [
        "r = 16 ÷ 2 = 8.",
        "A = πr² = 3.14 × 64.",
        "= 200.96."
      ],
      explanation: [
        "r = 16 / 2 = 8 m.",
        "A = 3.14 × 64 = 200.96 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A semicircle has diameter 10 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "39.25",
      hints: [
        "A semicircle is half a circle.",
        "r = 10/2 = 5. Full area = 3.14 × 25 = 78.5.",
        "Half = 78.5 ÷ 2 = ?"
      ],
      explanation: [
        "r = 5 cm. Full circle area = 3.14 × 25 = 78.5.",
        "Semicircle area = 78.5 / 2 = 39.25 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circular pizza has radius 14 inches. About how much bigger is it than a pizza with radius 10 inches? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["About 100 in² bigger", "About 200 in² bigger", "About 300 in² bigger", "About 400 in² bigger"],
      answer: "About 300 in² bigger",
      hints: [
        "A₁ = 3.14 × 14² = 3.14 × 196 = 615.44.",
        "A₂ = 3.14 × 10² = 3.14 × 100 = 314.",
        "Difference = 615.44 − 314 = ?"
      ],
      explanation: [
        "Large pizza: A = 3.14 × 196 = 615.44 in².",
        "Small pizza: A = 3.14 × 100 = 314 in².",
        "Difference ≈ 301.44 in² ≈ about 300 in² bigger."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 8 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "25.12",
      hints: [
        "C = πd.",
        "C = 3.14 × 8.",
        "= 25.12."
      ],
      explanation: [
        "C = πd = 3.14 × 8.",
        "= 25.12 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has radius 6 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "113.04",
      hints: [
        "A = πr².",
        "A = 3.14 × 6² = 3.14 × 36.",
        "= 113.04."
      ],
      explanation: [
        "A = πr² = 3.14 × 36.",
        "= 113.04 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A semicircle has a diameter of 14 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["38.465 m²", "76.93 m²", "153.86 m²", "307.72 m²"],
      answer: "76.93 m²",
      hints: [
        "r = 14/2 = 7. Full circle area = 3.14 × 49 = 153.86.",
        "A semicircle is half a circle.",
        "153.86 ÷ 2 = ?"
      ],
      explanation: [
        "r = 7 m. Full circle area = 3.14 × 49 = 153.86 m².",
        "Semicircle area = 153.86 / 2 = 76.93 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has diameter 18 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "254.34",
      hints: [
        "r = 18 / 2 = 9.",
        "A = πr² = 3.14 × 81.",
        "= 254.34."
      ],
      explanation: [
        "r = 18 / 2 = 9 cm.",
        "A = 3.14 × 9² = 3.14 × 81 = 254.34 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 4 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "50.24",
      hints: [
        "A = πr².",
        "A = 3.14 × 4² = 3.14 × 16.",
        "= 50.24."
      ],
      explanation: [
        "A = πr² = 3.14 × 16.",
        "= 50.24 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 20 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["78.5 cm²", "157 cm²", "314 cm²", "628 cm²"],
      answer: "157 cm²",
      hints: [
        "r = 20/2 = 10. Full area = 3.14 × 100 = 314.",
        "A semicircle is half a circle.",
        "314 ÷ 2 = ?"
      ],
      explanation: [
        "r = 10 cm. Full circle area = 3.14 × 100 = 314.",
        "Semicircle area = 314 / 2 = 157 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has diameter 24 m. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "75.36",
      hints: [
        "C = πd.",
        "C = 3.14 × 24.",
        "= 75.36."
      ],
      explanation: [
        "C = πd = 3.14 × 24.",
        "= 75.36 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has radius 11 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "379.94",
      hints: [
        "A = πr².",
        "A = 3.14 × 11² = 3.14 × 121.",
        "= 379.94."
      ],
      explanation: [
        "A = πr² = 3.14 × 121.",
        "= 379.94 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 16 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["50.24 cm²", "100.48 cm²", "200.96 cm²", "401.92 cm²"],
      answer: "100.48 cm²",
      hints: [
        "r = 16/2 = 8. Full area = 3.14 × 64 = 200.96.",
        "A semicircle is half a circle.",
        "200.96 ÷ 2 = ?"
      ],
      explanation: [
        "r = 8 cm. Full circle area = 3.14 × 64 = 200.96.",
        "Semicircle area = 200.96 / 2 = 100.48 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has diameter 22 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "379.94",
      hints: [
        "r = 22 / 2 = 11.",
        "A = πr² = 3.14 × 121.",
        "= 379.94."
      ],
      explanation: [
        "r = 22 / 2 = 11 m.",
        "A = 3.14 × 11² = 3.14 × 121 = 379.94 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 26 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "81.64",
      hints: [
        "C = πd.",
        "C = 3.14 × 26.",
        "= 81.64."
      ],
      explanation: [
        "C = πd = 3.14 × 26.",
        "= 81.64 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 12 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["28.26 cm²", "56.52 cm²", "113.04 cm²", "226.08 cm²"],
      answer: "56.52 cm²",
      hints: [
        "r = 12/2 = 6. Full area = 3.14 × 36 = 113.04.",
        "A semicircle is half a circle.",
        "113.04 ÷ 2 = ?"
      ],
      explanation: [
        "r = 6 cm. Full circle area = 3.14 × 36 = 113.04.",
        "Semicircle area = 113.04 / 2 = 56.52 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An L-shaped room is made of two rectangles: one 8 m × 5 m and one 12 m × 3 m. What is the total area?',
      answer: "76",
      hints: [
        "Find the area of each rectangle.",
        "8 × 5 = 40 and 12 × 3 = 36.",
        "Total = 40 + 36 = ?"
      ],
      explanation: [
        "Area 1 = 8 × 5 = 40 m².",
        "Area 2 = 12 × 3 = 36 m².",
        "Total = 40 + 36 = 76 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular yard is 20 m × 15 m with a square pond 4 m × 4 m removed. What is the remaining area?',
      choices: ["284 m²", "288 m²", "296 m²", "300 m²"],
      answer: "284 m²",
      hints: [
        "Yard area = 20 × 15 = 300.",
        "Pond area = 4 × 4 = 16.",
        "Remaining = 300 − 16 = ?"
      ],
      explanation: [
        "Yard = 20 × 15 = 300 m².",
        "Pond = 4² = 16 m².",
        "Remaining = 300 − 16 = 284 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A T-shaped figure is made of two rectangles: a top piece 14 m × 3 m and a bottom piece 4 m × 8 m. What is the total area?',
      answer: "74",
      hints: [
        "Find the area of each rectangle.",
        "14 × 3 = 42 and 4 × 8 = 32.",
        "Total = 42 + 32 = ?"
      ],
      explanation: [
        "Top = 14 × 3 = 42 m².",
        "Bottom = 4 × 8 = 32 m².",
        "Total = 42 + 32 = 74 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has radius 15 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "706.5",
      hints: [
        "A = πr².",
        "A = 3.14 × 15² = 3.14 × 225.",
        "= 706.5."
      ],
      explanation: [
        "A = πr² = 3.14 × 225.",
        "= 706.5 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 28 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "87.92",
      hints: [
        "C = πd.",
        "C = 3.14 × 28.",
        "= 87.92."
      ],
      explanation: [
        "C = πd = 3.14 × 28.",
        "= 87.92 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 8 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["12.56 cm²", "25.12 cm²", "50.24 cm²", "100.48 cm²"],
      answer: "25.12 cm²",
      hints: [
        "r = 8/2 = 4. Full area = 3.14 × 16 = 50.24.",
        "A semicircle is half a circle.",
        "50.24 ÷ 2 = ?"
      ],
      explanation: [
        "r = 4 cm. Full circle area = 3.14 × 16 = 50.24.",
        "Semicircle area = 50.24 / 2 = 25.12 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has radius 13 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "530.66",
      hints: [
        "A = πr².",
        "A = 3.14 × 13² = 3.14 × 169.",
        "= 530.66."
      ],
      explanation: [
        "A = πr² = 3.14 × 169.",
        "= 530.66 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 16 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "200.96",
      hints: [
        "Radius = diameter ÷ 2 = 8.",
        "A = πr² = 3.14 × 64.",
        "= 200.96."
      ],
      explanation: [
        "r = 16 / 2 = 8 cm.",
        "A = πr² = 3.14 × 64 = 200.96 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 20 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["78.5 cm²", "157 cm²", "314 cm²", "628 cm²"],
      answer: "157 cm²",
      hints: [
        "r = 20 / 2 = 10.",
        "Full circle area = 3.14 × 100 = 314.",
        "Semicircle = 314 ÷ 2 = ?"
      ],
      explanation: [
        "r = 10 cm. Full circle = πr² = 3.14 × 100 = 314 cm².",
        "Semicircle = 314 / 2 = 157 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A quarter-circle has radius 8 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "50.24",
      hints: [
        "Full circle area = πr² = 3.14 × 64 = 200.96.",
        "A quarter-circle is 1/4 of the full circle.",
        "200.96 ÷ 4 = ?"
      ],
      explanation: [
        "Full circle = 3.14 × 64 = 200.96 m².",
        "Quarter-circle = 200.96 / 4 = 50.24 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 18 cm. What is its area? (Use <span class="math">\pi \approx 3.14</span>)',
      answer: "254.34",
      hints: [
        "First find radius: r = 18 ÷ 2 = 9.",
        "A = πr² = 3.14 × 81.",
        "= 254.34."
      ],
      explanation: [
        "r = d/2 = 9 cm.",
        "A = πr² = 3.14 × 81 = 254.34 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has a diameter of 20 cm. What is the area of the semicircle? (Use <span class="math">\pi \approx 3.14</span>)',
      choices: ["125.6 cm²", "157 cm²", "314 cm²", "628 cm²"],
      answer: "157 cm²",
      hints: [
        "r = 20 ÷ 2 = 10.",
        "Full circle area = πr² = 3.14 × 100 = 314.",
        "Semicircle = 314 ÷ 2 = ?"
      ],
      explanation: [
        "r = 10 cm. Full circle area = 3.14 × 100 = 314 cm².",
        "Semicircle area = 314 ÷ 2 = 157 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has diameter 14 cm. What is its circumference? (Use <span class="math">\pi \approx 3.14</span>)',
      answer: "43.96",
      hints: [
        "C = πd.",
        "C = 3.14 × 14.",
        "= 43.96."
      ],
      explanation: [
        "C = πd = 3.14 × 14.",
        "= 43.96 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has diameter 18 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "254.34",
      hints: [
        "Radius = diameter ÷ 2 = 9.",
        "A = πr² = 3.14 × 81.",
        "= 254.34."
      ],
      explanation: [
        "r = 18 / 2 = 9 cm.",
        "A = πr² = 3.14 × 81 = 254.34 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has diameter 14 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["76.93 cm²", "82.45 cm²", "153.86 cm²", "307.72 cm²"],
      answer: "76.93 cm²",
      hints: [
        "A semicircle is half a circle.",
        "r = 14/2 = 7. Full area = 3.14 × 49 = 153.86.",
        "Half = 153.86 ÷ 2 = ?"
      ],
      explanation: [
        "r = 7 cm. Full circle area = 3.14 × 49 = 153.86.",
        "Semicircle area = 153.86 / 2 = 76.93 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A quarter-circle has radius 8 cm. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "50.24",
      hints: [
        "A quarter-circle is 1/4 of a full circle.",
        "Full area = 3.14 × 8² = 3.14 × 64 = 200.96.",
        "Quarter = 200.96 ÷ 4 = ?"
      ],
      explanation: [
        "Full circle area = πr² = 3.14 × 64 = 200.96 cm².",
        "Quarter-circle area = 200.96 / 4 = 50.24 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has a radius of 11 cm. What is its area? Use <span class="math">\\pi \\approx 3.14</span>. Round to the nearest whole number.',
      answer: "380",
      hints: [
        "Area = πr².",
        "3.14 × 11² = 3.14 × 121.",
        "= ?"
      ],
      explanation: [
        "A = πr² = 3.14 × 121 = 379.94.",
        "Rounded to the nearest whole number: 380 cm²."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A semicircle has a diameter of 20 cm. What is its area? Use <span class="math">\\pi \\approx 3.14</span>.',
      choices: ["125.6 cm²", "141.3 cm²", "157 cm²", "314 cm²"],
      answer: "157 cm²",
      hints: [
        "Radius = 20 ÷ 2 = 10 cm.",
        "Full circle area = 3.14 × 10² = 314 cm².",
        "Semicircle area = 314 ÷ 2 = ?"
      ],
      explanation: [
        "r = 10 cm. Full circle = π × 10² = 314 cm².",
        "Semicircle = 314 ÷ 2 = 157 cm².",
        "A semicircle is half a circle."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has a circumference of 62.8 cm. What is its radius? Use <span class="math">\\pi \\approx 3.14</span>.',
      answer: "10",
      hints: [
        "Circumference = 2πr.",
        "62.8 = 2 × 3.14 × r → 62.8 = 6.28r.",
        "r = 62.8 ÷ 6.28 = ?"
      ],
      explanation: [
        "C = 2πr → 62.8 = 6.28r.",
        "r = 62.8 ÷ 6.28 = 10 cm.",
        "Check: 2 × 3.14 × 10 = 62.8 cm. ✓"
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "circle", r: 6 },
      question: 'A circular garden has a diameter of 12 m. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "113.04",
      hints: [
        "First find the radius: r = 12 ÷ 2 = 6.",
        "Area = π × r² = 3.14 × 36.",
        "Multiply: 3.14 × 36 = ?"
      ],
      explanation: [
        "Radius = 12 ÷ 2 = 6 m.",
        "A = πr² = 3.14 × 36 = 113.04 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      diagram: { type: "circle", r: 9 },
      question: 'A sprinkler waters a circular area with radius 9 yards. What area does it cover? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["56.52 yd²", "113.04 yd²", "254.34 yd²", "508.68 yd²"],
      answer: "254.34 yd²",
      hints: [
        "Area = π × r².",
        "r = 9, so r² = 81.",
        "3.14 × 81 = ?"
      ],
      explanation: [
        "A = πr² = 3.14 × 81.",
        "= 254.34 yd²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "circle", r: 3 },
      question: 'A coin has a diameter of 6 cm. What is its circumference? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "18.84",
      hints: [
        "Circumference = π × diameter.",
        "C = 3.14 × 6.",
        "Multiply carefully."
      ],
      explanation: [
        "C = πd = 3.14 × 6.",
        "= 18.84 cm."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A semicircular window has a diameter of 12 ft. What is the area of the window? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 6 },
      answer: "56.52",
      hints: [
        "Radius = 12 ÷ 2 = 6 ft.",
        "Full circle area = πr² = 3.14 × 36 = 113.04.",
        "Semicircle = 113.04 ÷ 2 = ?"
      ],
      explanation: [
        "r = 6. Full circle area = 3.14 × 36 = 113.04 ft².",
        "Semicircle area = 113.04 ÷ 2 = 56.52 ft²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has a diameter of 20 cm. What is its area? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 10 },
      choices: ["62.8 cm²", "125.6 cm²", "254 cm²", "314 cm²"],
      answer: "314 cm²",
      hints: [
        "Radius = 20 ÷ 2 = 10 cm.",
        "Area = πr² = 3.14 × 10².",
        "= 3.14 × 100 = ?"
      ],
      explanation: [
        "r = 10 cm. Area = πr² = 3.14 × 100 = 314 cm².",
        "The circle covers 314 square centimeters."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A quarter-circle has a radius of 8 m. What is its area? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 8 },
      answer: "50.24",
      hints: [
        "Full circle area = πr² = 3.14 × 64 = 200.96.",
        "Quarter-circle = 200.96 ÷ 4.",
        "= ?"
      ],
      explanation: [
        "Full circle area = 3.14 × 64 = 200.96 m².",
        "Quarter-circle area = 200.96 ÷ 4 = 50.24 m²."
      ]
    }
  ],

  // ---- Topic 8: Circle Reverse Problems (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">153.86 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "7",
      hints: [
        "A = πr² → r² = A ÷ π.",
        "r² = 153.86 ÷ 3.14 = 49.",
        "r = √49 = ?"
      ],
      explanation: [
        "r² = A / π = 153.86 / 3.14 = 49.",
        "r = √49 = 7 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has area <span class="math">314 m²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["10 m", "15 m", "20 m", "25 m"],
      answer: "20 m",
      hints: [
        "r² = 314 / 3.14 = 100.",
        "r = 10.",
        "Diameter = 2r = ?"
      ],
      explanation: [
        "r² = 314 / 3.14 = 100 → r = 10 m.",
        "Diameter = 2 × 10 = 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">62.8 cm</span>. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "314",
      hints: [
        "C = 2πr → r = C/(2π) = 62.8/6.28 = 10.",
        "A = πr² = 3.14 × 100.",
        "= 314."
      ],
      explanation: [
        "r = C/(2π) = 62.8 / 6.28 = 10 cm.",
        "A = πr² = 3.14 × 100 = 314 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has area <span class="math">50.24 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["3 cm", "4 cm", "5 cm", "6 cm"],
      answer: "4 cm",
      hints: [
        "r² = A / π = 50.24 / 3.14.",
        "= 16.",
        "r = √16 = ?"
      ],
      explanation: [
        "r² = 50.24 / 3.14 = 16.",
        "r = √16 = 4 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">28.26 m²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "3",
      hints: [
        "r² = A/π = 28.26/3.14.",
        "= 9.",
        "r = √9 = ?"
      ],
      explanation: [
        "r² = 28.26 / 3.14 = 9.",
        "r = √9 = 3 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">43.96 cm</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "7",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 43.96 ÷ 6.28.",
        "= 7."
      ],
      explanation: [
        "r = C / (2π) = 43.96 / 6.28.",
        "= 7 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has area <span class="math">78.5 m²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["5 m", "8 m", "10 m", "12 m"],
      answer: "10 m",
      hints: [
        "r² = 78.5 / 3.14 = 25.",
        "r = 5.",
        "Diameter = 2 × 5 = ?"
      ],
      explanation: [
        "r² = 78.5 / 3.14 = 25 → r = 5 m.",
        "Diameter = 2 × 5 = 10 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has area <span class="math">200.96 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "8",
      hints: [
        "r² = A / π = 200.96 / 3.14.",
        "= 64.",
        "r = √64 = ?"
      ],
      explanation: [
        "r² = 200.96 / 3.14 = 64.",
        "r = √64 = 8 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">37.68 cm</span>. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "113.04",
      hints: [
        "C = 2πr → r = C/(2π) = 37.68/6.28 = 6.",
        "A = πr² = 3.14 × 36.",
        "= 113.04."
      ],
      explanation: [
        "r = C/(2π) = 37.68 / 6.28 = 6 cm.",
        "A = πr² = 3.14 × 36 = 113.04 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A circle has area <span class="math">706.5 m²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["12 m", "14 m", "15 m", "16 m"],
      answer: "15 m",
      hints: [
        "r² = A / π = 706.5 / 3.14.",
        "= 225.",
        "r = √225 = ?"
      ],
      explanation: [
        "r² = 706.5 / 3.14 = 225.",
        "r = √225 = 15 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has area <span class="math">452.16 cm²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "24",
      hints: [
        "r² = A / π = 452.16 / 3.14 = 144.",
        "r = √144 = 12.",
        "Diameter = 2 × 12 = ?"
      ],
      explanation: [
        "r² = 452.16 / 3.14 = 144 → r = 12 cm.",
        "Diameter = 2 × 12 = 24 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">113.04 m²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "6",
      hints: [
        "r² = A / π = 113.04 / 3.14.",
        "= 36.",
        "r = √36 = ?"
      ],
      explanation: [
        "r² = 113.04 / 3.14 = 36.",
        "r = √36 = 6 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has circumference <span class="math">50.24 cm</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "8 cm",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 50.24 ÷ 6.28.",
        "= 8."
      ],
      explanation: [
        "r = C / (2π) = 50.24 / 6.28.",
        "= 8 cm."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 6 and 8. What is the hypotenuse?',
      answer: "10",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = ?"
      ],
      explanation: [
        "a² + b² = 36 + 64 = 100.",
        "c = √100 = 10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 9 and 12. What is the hypotenuse?',
      choices: ["13", "14", "15", "16"],
      answer: "15",
      hints: [
        "a² + b² = c².",
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = ?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 5 and 12. What is the hypotenuse?',
      answer: "13",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = ?"
      ],
      explanation: [
        "a² + b² = 25 + 144 = 169.",
        "c = √169 = 13."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">56.52 cm</span>. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "254.34",
      hints: [
        "C = 2πr → r = C/(2π) = 56.52/6.28 = 9.",
        "A = πr² = 3.14 × 81.",
        "= 254.34."
      ],
      explanation: [
        "r = C/(2π) = 56.52 / 6.28 = 9 cm.",
        "A = πr² = 3.14 × 81 = 254.34 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">254.34 m²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "9",
      hints: [
        "r² = A / π = 254.34 / 3.14.",
        "= 81.",
        "r = √81 = ?"
      ],
      explanation: [
        "r² = 254.34 / 3.14 = 81.",
        "r = √81 = 9 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has area <span class="math">1256 cm²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["30 cm", "35 cm", "40 cm", "45 cm"],
      answer: "40 cm",
      hints: [
        "r² = 1256 / 3.14 = 400.",
        "r = 20.",
        "Diameter = 2 × 20 = ?"
      ],
      explanation: [
        "r² = 1256 / 3.14 = 400 → r = 20 cm.",
        "Diameter = 2 × 20 = 40 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">75.36 cm</span>. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "452.16",
      hints: [
        "C = 2πr → r = C/(2π) = 75.36/6.28 = 12.",
        "A = πr² = 3.14 × 144.",
        "= 452.16."
      ],
      explanation: [
        "r = C/(2π) = 75.36 / 6.28 = 12 cm.",
        "A = πr² = 3.14 × 144 = 452.16 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">615.44 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "14",
      hints: [
        "r² = A / π = 615.44 / 3.14.",
        "= 196.",
        "r = √196 = ?"
      ],
      explanation: [
        "r² = 615.44 / 3.14 = 196.",
        "r = √196 = 14 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has circumference <span class="math">69.08 cm</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["9 cm", "10 cm", "11 cm", "12 cm"],
      answer: "11 cm",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 69.08 ÷ 6.28.",
        "= 11."
      ],
      explanation: [
        "r = C / (2π) = 69.08 / 6.28.",
        "= 11 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">81.64 cm</span>. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "530.66",
      hints: [
        "C = 2πr → r = C/(2π) = 81.64/6.28 = 13.",
        "A = πr² = 3.14 × 169.",
        "= 530.66."
      ],
      explanation: [
        "r = C/(2π) = 81.64 / 6.28 = 13 cm.",
        "A = πr² = 3.14 × 169 = 530.66 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">200.96 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "8",
      hints: [
        "A = πr² → r² = A ÷ π.",
        "r² = 200.96 ÷ 3.14 = 64.",
        "r = √64 = ?"
      ],
      explanation: [
        "r² = A / π = 200.96 / 3.14 = 64.",
        "r = √64 = 8 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has circumference <span class="math">62.8 cm</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["8 cm", "10 cm", "12 cm", "15 cm"],
      answer: "10 cm",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 62.8 ÷ 6.28.",
        "= 10."
      ],
      explanation: [
        "r = C / (2π) = 62.8 / 6.28.",
        "= 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has area <span class="math">706.5 m²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "30",
      hints: [
        "A = πr² → r² = 706.5 ÷ 3.14 = 225.",
        "r = √225 = 15.",
        "Diameter = 2 × 15 = ?"
      ],
      explanation: [
        "r² = 706.5 / 3.14 = 225.",
        "r = 15 m. Diameter = 2 × 15 = 30 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has circumference 62.8 cm. What is its radius? (Use <span class="math">\pi \approx 3.14</span>)',
      answer: "10",
      hints: [
        "C = 2πr → r = C ÷ (2π).",
        "r = 62.8 ÷ 6.28.",
        "= 10."
      ],
      explanation: [
        "r = C / (2π) = 62.8 / 6.28.",
        "= 10 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has area 314 cm². What is its radius? (Use <span class="math">\pi \approx 3.14</span>)',
      choices: ["8 cm", "9 cm", "10 cm", "11 cm"],
      answer: "10 cm",
      hints: [
        "A = πr² → r² = A ÷ π.",
        "r² = 314 ÷ 3.14 = 100.",
        "r = √100 = ?"
      ],
      explanation: [
        "r² = A / π = 314 / 3.14 = 100.",
        "r = √100 = 10 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference 94.2 cm. What is its diameter? (Use <span class="math">\pi \approx 3.14</span>)',
      answer: "30",
      hints: [
        "C = πd → d = C ÷ π.",
        "d = 94.2 ÷ 3.14.",
        "= 30."
      ],
      explanation: [
        "d = C / π = 94.2 / 3.14.",
        "= 30 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has area <span class="math">200.96 cm²</span>. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "8",
      hints: [
        "A = πr² → r² = A ÷ π.",
        "r² = 200.96 ÷ 3.14 = 64.",
        "r = √64 = ?"
      ],
      explanation: [
        "r² = A / π = 200.96 / 3.14 = 64.",
        "r = √64 = 8 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has area <span class="math">706.5 m²</span>. What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["25 m", "28 m", "30 m", "32 m"],
      answer: "30 m",
      hints: [
        "r² = 706.5 / 3.14 = 225.",
        "r = 15.",
        "Diameter = 2r = ?"
      ],
      explanation: [
        "r² = 706.5 / 3.14 = 225 → r = 15 m.",
        "Diameter = 2 × 15 = 30 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has circumference <span class="math">75.36 cm</span>. What is its area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "452.16",
      hints: [
        "C = 2πr → r = C/(2π) = 75.36/6.28 = 12.",
        "A = πr² = 3.14 × 144.",
        "= 452.16."
      ],
      explanation: [
        "r = C/(2π) = 75.36 / 6.28 = 12 cm.",
        "A = πr² = 3.14 × 144 = 452.16 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has an area of 200.96 cm². What is its radius? Use <span class="math">\\pi \\approx 3.14</span>.',
      answer: "8",
      hints: [
        "Area = πr² → 200.96 = 3.14 × r².",
        "r² = 200.96 ÷ 3.14 = 64.",
        "r = √64 = ?"
      ],
      explanation: [
        "200.96 = 3.14 × r² → r² = 64.",
        "r = 8 cm.",
        "Check: 3.14 × 64 = 200.96 cm². ✓"
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A circle has a circumference of 94.2 cm. What is its diameter? Use <span class="math">\\pi \\approx 3.14</span>.',
      choices: ["15 cm", "20 cm", "25 cm", "30 cm"],
      answer: "30 cm",
      hints: [
        "Circumference = πd.",
        "94.2 = 3.14 × d.",
        "d = 94.2 ÷ 3.14 = ?"
      ],
      explanation: [
        "C = πd → 94.2 = 3.14 × d.",
        "d = 94.2 ÷ 3.14 = 30 cm.",
        "The radius would be 15 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has an area of 314 cm². What is its diameter? Use <span class="math">\\pi \\approx 3.14</span>.',
      answer: "20",
      hints: [
        "Area = πr² → 314 = 3.14 × r².",
        "r² = 314 ÷ 3.14 = 100.",
        "r = 10, so diameter = 2 × 10 = ?"
      ],
      explanation: [
        "314 = 3.14 × r² → r² = 100 → r = 10 cm.",
        "Diameter = 2 × 10 = 20 cm.",
        "Check: 3.14 × 100 = 314 cm². ✓"
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      diagram: { type: "circle", r: 4 },
      question: 'A circle has an area of 50.24 cm². What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["3 cm", "4 cm", "5 cm", "6 cm"],
      answer: "4 cm",
      hints: [
        "A = πr² → 50.24 = 3.14 × r².",
        "r² = 50.24 ÷ 3.14 = 16.",
        "r = √16 = ?"
      ],
      explanation: [
        "50.24 = 3.14 × r² → r² = 16.",
        "r = √16 = 4 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "circle", r: 7 },
      question: 'A circular table has a circumference of 43.96 inches. What is its radius? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "7",
      hints: [
        "C = 2πr.",
        "43.96 = 2 × 3.14 × r = 6.28r.",
        "r = 43.96 ÷ 6.28 = ?"
      ],
      explanation: [
        "43.96 = 2 × 3.14 × r → 43.96 = 6.28r.",
        "r = 7 inches."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "circle", r: 10 },
      question: 'A circle has an area of 314 cm². What is its diameter? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "20",
      hints: [
        "A = πr² → 314 = 3.14 × r².",
        "r² = 100 → r = 10.",
        "Diameter = 2 × radius = ?"
      ],
      explanation: [
        "314 = 3.14 × r² → r² = 100 → r = 10.",
        "Diameter = 2 × 10 = 20 cm."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A circle has an area of 200.96 cm². What is its diameter? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 8 },
      answer: "16",
      hints: [
        "Area = πr² → r² = 200.96 ÷ 3.14.",
        "r² = 64 → r = 8.",
        "Diameter = 2r = ?"
      ],
      explanation: [
        "r² = 200.96 ÷ 3.14 = 64 → r = 8 cm.",
        "Diameter = 2 × 8 = 16 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A circle has a circumference of 62.8 m. What is its area? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 10 },
      choices: ["254 m²", "314 m²", "628 m²", "1,256 m²"],
      answer: "314 m²",
      hints: [
        "C = 2πr → 62.8 = 6.28r → r = 10.",
        "Area = πr² = 3.14 × 100.",
        "= ?"
      ],
      explanation: [
        "r = 62.8 ÷ 6.28 = 10 m.",
        "Area = 3.14 × 100 = 314 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A circle has an area of 113.04 ft². What is its circumference? Use π ≈ 3.14.',
      diagram: { type: "circle", r: 6 },
      answer: "37.68",
      hints: [
        "Area = πr² → r² = 113.04 ÷ 3.14 = 36.",
        "r = 6.",
        "C = 2πr = 2 × 3.14 × 6 = ?"
      ],
      explanation: [
        "r² = 113.04 ÷ 3.14 = 36 → r = 6 ft.",
        "C = 2 × 3.14 × 6 = 37.68 ft."
      ]
    }
  ],

  // ---- Topic 9: Composite Shapes (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'An L-shaped room is made of two rectangles: one 10 m × 4 m and one 6 m × 3 m. What is the total area?',
      answer: "58",
      hints: [
        "Find the area of each rectangle.",
        "10 × 4 = 40 and 6 × 3 = 18.",
        "Total = 40 + 18 = ?"
      ],
      explanation: [
        "Rectangle 1: 10 × 4 = 40 m².",
        "Rectangle 2: 6 × 3 = 18 m².",
        "Total = 40 + 18 = 58 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangle 20 cm × 12 cm has a square of side 5 cm cut from it. What is the remaining area?',
      choices: ["200 cm²", "215 cm²", "225 cm²", "235 cm²"],
      answer: "215 cm²",
      hints: [
        "Rectangle area = 20 × 12 = 240.",
        "Square area = 5 × 5 = 25.",
        "Remaining = 240 − 25 = ?"
      ],
      explanation: [
        "Rectangle: 20 × 12 = 240 cm².",
        "Square cutout: 5² = 25 cm².",
        "Remaining = 240 − 25 = 215 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A shape is made of a rectangle 8 m × 5 m with a right triangle on top (base 8 m, height 3 m). What is the total area?',
      answer: "52",
      hints: [
        "Rectangle area = 8 × 5 = 40.",
        "Triangle area = ½ × 8 × 3 = 12.",
        "Total = 40 + 12 = ?"
      ],
      explanation: [
        "Rectangle: 8 × 5 = 40 m².",
        "Triangle: ½ × 8 × 3 = 12 m².",
        "Total = 40 + 12 = 52 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A square of side 10 cm has a circle of radius 3 cm cut from its center. What is the remaining area? (Use <span class="math">π ≈ 3.14</span>)',
      choices: ["71.74 cm²", "78.26 cm²", "82.14 cm²", "84.56 cm²"],
      answer: "71.74 cm²",
      hints: [
        "Square area = 10² = 100.",
        "Circle area = 3.14 × 9 = 28.26.",
        "Remaining = 100 − 28.26 = ?"
      ],
      explanation: [
        "Square: 10² = 100 cm².",
        "Circle: π × 3² = 3.14 × 9 = 28.26 cm².",
        "Remaining = 100 − 28.26 = 71.74 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A shape is made from two squares: one with side 7 cm and one with side 4 cm, placed side by side. What is the total area?',
      answer: "65",
      hints: [
        "Area of square 1 = 7² = 49.",
        "Area of square 2 = 4² = 16.",
        "Total = 49 + 16 = ?"
      ],
      explanation: [
        "Square 1: 7² = 49 cm².",
        "Square 2: 4² = 16 cm².",
        "Total = 49 + 16 = 65 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangular yard 15 m × 10 m has a circular fountain of radius 2 m in the center. What is the remaining area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "137.44",
      hints: [
        "Rectangle area = 15 × 10 = 150.",
        "Circle area = 3.14 × 4 = 12.56.",
        "Remaining = 150 − 12.56 = ?"
      ],
      explanation: [
        "Rectangle: 15 × 10 = 150 m².",
        "Circle: π × 2² = 3.14 × 4 = 12.56 m².",
        "Remaining = 150 − 12.56 = 137.44 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A shape is made of a rectangle 12 m × 8 m with a triangle on one end (base 8 m, height 5 m). What is the total area?',
      choices: ["106 m²", "116 m²", "126 m²", "136 m²"],
      answer: "116 m²",
      hints: [
        "Rectangle area = 12 × 8 = 96.",
        "Triangle area = ½ × 8 × 5 = 20.",
        "Total = 96 + 20 = ?"
      ],
      explanation: [
        "Rectangle: 12 × 8 = 96 m².",
        "Triangle: ½ × 8 × 5 = 20 m².",
        "Total = 96 + 20 = 116 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has side 12 cm. A smaller square with side 5 cm is cut from one corner. What is the remaining area?',
      answer: "119",
      hints: [
        "Large square area = 12² = 144.",
        "Small square area = 5² = 25.",
        "Remaining = 144 − 25 = ?"
      ],
      explanation: [
        "Large square: 12² = 144 cm².",
        "Cutout: 5² = 25 cm².",
        "Remaining = 144 − 25 = 119 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A shape is made of a rectangle 14 m × 9 m with a semicircle on one short side (diameter 9 m). What is the total area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "157.8225",
      hints: [
        "Rectangle area = 14 × 9 = 126.",
        "Semicircle: r = 4.5, area = ½ × 3.14 × 4.5² = ½ × 3.14 × 20.25.",
        "= 31.8225. Total = 126 + 31.8225 = ?"
      ],
      explanation: [
        "Rectangle: 14 × 9 = 126 m².",
        "Semicircle: r = 4.5, area = ½ × 3.14 × 20.25 = 31.8225 m².",
        "Total ≈ 157.8225 m²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An L-shaped room is made of two rectangles: one 8 m × 5 m and one 4 m × 6 m. What is the total area?',
      choices: ["54 m²", "58 m²", "62 m²", "64 m²"],
      answer: "64 m²",
      hints: [
        "Find the area of each rectangle.",
        "8 × 5 = 40 and 4 × 6 = 24.",
        "Total = 40 + 24 = ?"
      ],
      explanation: [
        "Rectangle 1: 8 × 5 = 40 m².",
        "Rectangle 2: 4 × 6 = 24 m².",
        "Total = 40 + 24 = 64 m²."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 8 and 15. What is the hypotenuse?',
      answer: "17",
      hints: [
        "Use a² + b² = c².",
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = ?"
      ],
      explanation: [
        "a² + b² = 64 + 225 = 289.",
        "c = √289 = 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 7 and 24. What is the hypotenuse?',
      choices: ["23", "24", "25", "26"],
      answer: "25",
      hints: [
        "a² + b² = c².",
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 20 and 21. What is the hypotenuse?',
      answer: "29",
      hints: [
        "Use a² + b² = c².",
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = ?"
      ],
      explanation: [
        "a² + b² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle 16 cm × 10 cm has a circle of radius 4 cm cut from its center. What is the remaining area? (Use <span class="math">π ≈ 3.14</span>)',
      answer: "109.76",
      hints: [
        "Rectangle area = 16 × 10 = 160.",
        "Circle area = 3.14 × 16 = 50.24.",
        "Remaining = 160 − 50.24 = ?"
      ],
      explanation: [
        "Rectangle: 16 × 10 = 160 cm².",
        "Circle: π × 4² = 3.14 × 16 = 50.24 cm².",
        "Remaining = 160 − 50.24 = 109.76 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A shape is made of two rectangles: one 9 m × 5 m and one 7 m × 3 m. What is the total area?',
      answer: "66",
      hints: [
        "Find the area of each rectangle.",
        "9 × 5 = 45 and 7 × 3 = 21.",
        "Total = 45 + 21 = ?"
      ],
      explanation: [
        "Rectangle 1: 9 × 5 = 45 m².",
        "Rectangle 2: 7 × 3 = 21 m².",
        "Total = 45 + 21 = 66 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangle 18 cm × 10 cm has a square of side 6 cm cut from a corner. What is the remaining area?',
      choices: ["134 cm²", "140 cm²", "144 cm²", "150 cm²"],
      answer: "144 cm²",
      hints: [
        "Rectangle area = 18 × 10 = 180.",
        "Square area = 6 × 6 = 36.",
        "Remaining = 180 − 36 = ?"
      ],
      explanation: [
        "Rectangle: 18 × 10 = 180 cm².",
        "Square cutout: 6² = 36 cm².",
        "Remaining = 180 − 36 = 144 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A shape is made of a rectangle 10 m × 6 m with a right triangle on top (base 10 m, height 4 m). What is the total area?',
      answer: "80",
      hints: [
        "Rectangle area = 10 × 6 = 60.",
        "Triangle area = ½ × 10 × 4 = 20.",
        "Total = 60 + 20 = ?"
      ],
      explanation: [
        "Rectangle: 10 × 6 = 60 m².",
        "Triangle: ½ × 10 × 4 = 20 m².",
        "Total = 60 + 20 = 80 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle 24 cm × 10 cm has a triangle (base 24 cm, height 10 cm) removed from one side. What is the remaining area?',
      answer: "120",
      hints: [
        "Rectangle area = 24 × 10 = 240.",
        "Triangle area = ½ × 24 × 10 = 120.",
        "Remaining = 240 − 120 = ?"
      ],
      explanation: [
        "Rectangle: 24 × 10 = 240 cm².",
        "Triangle: ½ × 24 × 10 = 120 cm².",
        "Remaining = 240 − 120 = 120 cm²."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A shape is made from two rectangles: one 11 m × 4 m and one 5 m × 7 m. What is the total area?',
      choices: ["69 m²", "73 m²", "79 m²", "85 m²"],
      answer: "79 m²",
      hints: [
        "Find the area of each rectangle.",
        "11 × 4 = 44 and 5 × 7 = 35.",
        "Total = 44 + 35 = ?"
      ],
      explanation: [
        "Rectangle 1: 11 × 4 = 44 m².",
        "Rectangle 2: 5 × 7 = 35 m².",
        "Total = 44 + 35 = 79 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has side 14 cm. A smaller square with side 6 cm is cut from one corner. What is the remaining area?',
      answer: "160",
      hints: [
        "Large square area = 14² = 196.",
        "Small square area = 6² = 36.",
        "Remaining = 196 − 36 = ?"
      ],
      explanation: [
        "Large square: 14² = 196 cm².",
        "Cutout: 6² = 36 cm².",
        "Remaining = 196 − 36 = 160 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A shape is made of two rectangles: one 13 m × 6 m and one 8 m × 5 m. What is the total area?',
      answer: "118",
      hints: [
        "Find the area of each rectangle.",
        "13 × 6 = 78 and 8 × 5 = 40.",
        "Total = 78 + 40 = ?"
      ],
      explanation: [
        "Rectangle 1: 13 × 6 = 78 m².",
        "Rectangle 2: 8 × 5 = 40 m².",
        "Total = 78 + 40 = 118 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangle 22 cm × 14 cm has a square of side 7 cm cut from a corner. What is the remaining area?',
      choices: ["245 cm²", "253 cm²", "259 cm²", "267 cm²"],
      answer: "259 cm²",
      hints: [
        "Rectangle area = 22 × 14 = 308.",
        "Square area = 7 × 7 = 49.",
        "Remaining = 308 − 49 = ?"
      ],
      explanation: [
        "Rectangle: 22 × 14 = 308 cm².",
        "Square cutout: 7² = 49 cm².",
        "Remaining = 308 − 49 = 259 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A shape is made of a rectangle 11 m × 7 m with a right triangle on top (base 11 m, height 6 m). What is the total area?',
      answer: "110",
      hints: [
        "Rectangle area = 11 × 7 = 77.",
        "Triangle area = ½ × 11 × 6 = 33.",
        "Total = 77 + 33 = ?"
      ],
      explanation: [
        "Rectangle: 11 × 7 = 77 m².",
        "Triangle: ½ × 11 × 6 = 33 m².",
        "Total = 77 + 33 = 110 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An L-shaped room is made of two rectangles: one 8 m × 5 m and one 12 m × 3 m. What is the total area?',
      answer: "76",
      hints: [
        "Find the area of each rectangle.",
        "8 × 5 = 40 and 12 × 3 = 36.",
        "Total = 40 + 36 = ?"
      ],
      explanation: [
        "Area 1 = 8 × 5 = 40 m².",
        "Area 2 = 12 × 3 = 36 m².",
        "Total = 40 + 36 = 76 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular yard is 20 m × 15 m with a square pond 4 m × 4 m removed. What is the remaining area?',
      choices: ["284 m²", "288 m²", "296 m²", "300 m²"],
      answer: "284 m²",
      hints: [
        "Yard area = 20 × 15 = 300.",
        "Pond area = 4 × 4 = 16.",
        "Remaining = 300 − 16 = ?"
      ],
      explanation: [
        "Yard = 20 × 15 = 300 m².",
        "Pond = 4² = 16 m².",
        "Remaining = 300 − 16 = 284 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A T-shaped figure is made of two rectangles: a top piece 14 m × 3 m and a bottom piece 4 m × 8 m. What is the total area?',
      answer: "74",
      hints: [
        "Find the area of each rectangle.",
        "14 × 3 = 42 and 4 × 8 = 32.",
        "Total = 42 + 32 = ?"
      ],
      explanation: [
        "Top = 14 × 3 = 42 m².",
        "Bottom = 4 × 8 = 32 m².",
        "Total = 42 + 32 = 74 m²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A shape is made of a 10 cm × 6 cm rectangle and a 4 cm × 3 cm rectangle joined together. What is the total area?',
      answer: "72",
      hints: [
        "Find each area separately.",
        "10 × 6 = 60 and 4 × 3 = 12.",
        "Total = 60 + 12 = ?"
      ],
      explanation: [
        "Area 1 = 10 × 6 = 60 cm².",
        "Area 2 = 4 × 3 = 12 cm².",
        "Total = 60 + 12 = 72 cm²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A 12 cm × 12 cm square has a 4 cm × 4 cm square cut from one corner. What is the remaining area?',
      choices: ["128 cm²", "136 cm²", "140 cm²", "148 cm²"],
      answer: "128 cm²",
      hints: [
        "Large square area = 12 × 12 = 144.",
        "Cut-out area = 4 × 4 = 16.",
        "Remaining = 144 − 16 = ?"
      ],
      explanation: [
        "Large area = 144 cm². Cut-out = 16 cm².",
        "Remaining = 144 − 16 = 128 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'An L-shaped figure is made from a 15 cm × 8 cm rectangle with a 5 cm × 3 cm rectangle removed from one corner. What is the area?',
      answer: "105",
      hints: [
        "Full rectangle area = 15 × 8 = 120.",
        "Removed area = 5 × 3 = 15.",
        "Remaining = 120 − 15 = ?"
      ],
      explanation: [
        "Full area = 15 × 8 = 120 cm².",
        "Removed = 5 × 3 = 15 cm².",
        "Area = 120 − 15 = 105 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'An L-shaped room is made of two rectangles: one 12 m × 5 m and one 7 m × 4 m. What is the total area?',
      answer: "88",
      hints: [
        "Find the area of each rectangle.",
        "12 × 5 = 60 and 7 × 4 = 28.",
        "Total = 60 + 28 = ?"
      ],
      explanation: [
        "Rectangle 1: 12 × 5 = 60 m².",
        "Rectangle 2: 7 × 4 = 28 m².",
        "Total = 60 + 28 = 88 m²."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangle 18 cm × 10 cm has a square of side 4 cm cut from it. What is the remaining area?',
      choices: ["148 cm²", "156 cm²", "164 cm²", "172 cm²"],
      answer: "164 cm²",
      hints: [
        "Rectangle area = 18 × 10 = 180.",
        "Square area = 4 × 4 = 16.",
        "Remaining = 180 − 16 = ?"
      ],
      explanation: [
        "Rectangle: 18 × 10 = 180 cm².",
        "Square cutout: 4² = 16 cm².",
        "Remaining = 180 − 16 = 164 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A shape is made of a rectangle 11 m × 6 m with a right triangle on top (base 11 m, height 4 m). What is the total area?',
      answer: "88",
      hints: [
        "Rectangle area = 11 × 6 = 66.",
        "Triangle area = ½ × 11 × 4 = 22.",
        "Total = 66 + 22 = ?"
      ],
      explanation: [
        "Rectangle: 11 × 6 = 66 m².",
        "Triangle: ½ × 11 × 4 = 22 m².",
        "Total = 66 + 22 = 88 m²."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'An L-shaped figure is made of two rectangles: one 10 cm × 4 cm and one 6 cm × 3 cm. What is the total area?',
      answer: "58",
      hints: [
        "Find the area of each rectangle separately.",
        "10 × 4 = 40 and 6 × 3 = 18.",
        "Total = 40 + 18 = ?"
      ],
      explanation: [
        "Rectangle 1: 10 × 4 = 40 cm².",
        "Rectangle 2: 6 × 3 = 18 cm².",
        "Total = 40 + 18 = 58 cm²."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A shape is a rectangle 12 cm × 8 cm with a triangle on top (base 12 cm, height 5 cm). What is the total area?',
      choices: ["116 cm²", "126 cm²", "136 cm²", "156 cm²"],
      answer: "126 cm²",
      hints: [
        "Rectangle area = 12 × 8 = 96 cm².",
        "Triangle area = ½ × 12 × 5 = 30 cm².",
        "Total = 96 + 30 = ?"
      ],
      explanation: [
        "Rectangle: 12 × 8 = 96 cm².",
        "Triangle: ½ × 12 × 5 = 30 cm².",
        "Total = 96 + 30 = 126 cm²."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A square of side 15 cm has a smaller square of side 5 cm cut from one corner. What is the remaining area?',
      answer: "200",
      hints: [
        "Large square area = 15 × 15 = 225 cm².",
        "Small square area = 5 × 5 = 25 cm².",
        "Remaining = 225 − 25 = ?"
      ],
      explanation: [
        "Large square: 15² = 225 cm².",
        "Cut-out square: 5² = 25 cm².",
        "Remaining area = 225 − 25 = 200 cm²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangular room is 15 ft × 12 ft. Carpet costs $4 per square foot. What is the total cost in dollars?',
      diagram: { type: "rectangle", l: 15, w: 12 },
      answer: "720",
      hints: [
        "First find the area: 15 × 12 = 180 ft².",
        "Then multiply by cost: 180 × $4.",
        "= ?"
      ],
      explanation: [
        "Area = 15 × 12 = 180 ft².",
        "Cost = 180 × $4 = $720."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangle 12 m × 8 m has a semicircle on one short end (diameter = 8 m). What is the total area? Use π ≈ 3.14.',
      diagram: { type: "compositeShape", l: 12, w: 8, extra: "semicircle" },
      choices: ["96 m²", "121.12 m²", "125.12 m²", "146.24 m²"],
      answer: "121.12 m²",
      hints: [
        "Rectangle area = 12 × 8 = 96 m².",
        "Semicircle: r = 4, area = ½ × 3.14 × 16 = 25.12.",
        "Total = 96 + 25.12 = ?"
      ],
      explanation: [
        "Rectangle = 12 × 8 = 96 m².",
        "Semicircle: r = 4, area = ½ × 3.14 × 16 = 25.12 m².",
        "Total = 96 + 25.12 = 121.12 m²."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangular yard is 20 m × 15 m. A circular pond with radius 4 m is in the center. What is the area of the yard excluding the pond? Use π ≈ 3.14.',
      diagram: { type: "compositeShape", l: 20, w: 15, extra: "circle" },
      answer: "249.76",
      hints: [
        "Yard area = 20 × 15 = 300 m².",
        "Pond area = π × r² = 3.14 × 16 = 50.24.",
        "Remaining = 300 − 50.24 = ?"
      ],
      explanation: [
        "Yard = 20 × 15 = 300 m².",
        "Pond = 3.14 × 16 = 50.24 m².",
        "Area excluding pond = 300 − 50.24 = 249.76 m²."
      ]
    }
  ]

];

// ============================================================
// WORLD 11 — Chapter 12: Right Triangles & Quadrilaterals (11 topics, 5 each)
// ============================================================
EXTRA_QUESTIONS[11] = [

  // ---- Topic 0: Pythagorean Theorem (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 3 and 4. What is the hypotenuse?',
      answer: "5",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "3² + 4² = 9 + 16 = 25.",
        "c = √25 = ?"
      ],
      explanation: [
        "a² + b² = c² → 9 + 16 = 25.",
        "c = √25 = 5."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 6 and 8. What is the hypotenuse?',
      choices: ["9", "10", "11", "12"],
      answer: "10",
      hints: [
        "6² + 8² = 36 + 64.",
        "= 100.",
        "√100 = ?"
      ],
      explanation: [
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 9 and 12. What is the hypotenuse?',
      answer: "15",
      hints: [
        "9² + 12² = 81 + 144.",
        "= 225.",
        "√225 = ?"
      ],
      explanation: [
        "a² + b² = 81 + 144 = 225.",
        "c = √225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'In the Pythagorean theorem <span class="math">a² + b² = c²</span>, what does <span class="math">c</span> represent?',
      choices: ["A leg", "The hypotenuse", "The perimeter", "The area"],
      answer: "The hypotenuse",
      hints: [
        "c is always the longest side.",
        "It is opposite the right angle.",
        "It is called the hypotenuse."
      ],
      explanation: [
        "In a² + b² = c², c is the hypotenuse.",
        "It is the longest side, opposite the right angle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 5 and 12. What is the hypotenuse?',
      answer: "13",
      hints: [
        "5² + 12² = 25 + 144.",
        "= 169.",
        "√169 = ?"
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = 13."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The Pythagorean theorem states:',
      choices: ["a + b = c", "a² + b² = c²", "a² − b² = c²", "2a + 2b = c"],
      answer: "a² + b² = c²",
      hints: [
        "It involves squares of the sides.",
        "The two shorter sides' squares are added.",
        "Their sum equals the square of the longest side."
      ],
      explanation: [
        "The Pythagorean theorem is a² + b² = c².",
        "where a and b are the legs and c is the hypotenuse."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of these is a Pythagorean triple?',
      choices: ["(4, 5, 6)", "(5, 12, 13)", "(7, 8, 10)", "(6, 7, 9)"],
      answer: "(5, 12, 13)",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Check: 5² + 12² = 25 + 144 = 169 = 13².",
        "Yes, so (5, 12, 13) works."
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169 = 13².",
        "So (5, 12, 13) is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple (3, 4, 5) is scaled by 4. What is the hypotenuse of the new triple?',
      answer: "20",
      hints: [
        "Multiply each side by 4.",
        "(3×4, 4×4, 5×4) = (12, 16, 20).",
        "The hypotenuse = 20."
      ],
      explanation: [
        "Scaling (3, 4, 5) by 4 gives (12, 16, 20).",
        "The hypotenuse = 20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'The triple (8, 15, 17) is a multiple of which basic triple?',
      choices: ["(3, 4, 5)", "(5, 12, 13)", "None — it is a primitive triple", "(7, 24, 25)"],
      answer: "None — it is a primitive triple",
      hints: [
        "Check if 8, 15, and 17 share a common factor.",
        "GCD(8, 15) = 1, so they share no common factor.",
        "It is a primitive Pythagorean triple."
      ],
      explanation: [
        "8, 15, and 17 have no common factor greater than 1.",
        "So (8, 15, 17) is a primitive Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 8 and 15. What is the hypotenuse?',
      answer: "17",
      hints: [
        "8² + 15² = 64 + 225.",
        "= 289.",
        "√289 = ?"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 7 and 24. What is the hypotenuse?',
      choices: ["24", "25", "26", "27"],
      answer: "25",
      hints: [
        "7² + 24² = 49 + 576.",
        "= 625.",
        "√625 = ?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 10 and 24. What is the hypotenuse?',
      answer: "26",
      hints: [
        "10² + 24² = 100 + 576.",
        "= 676.",
        "√676 = ?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = 26."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 20 and 21. What is the hypotenuse?',
      choices: ["27", "28", "29", "30"],
      answer: "29",
      hints: [
        "20² + 21² = 400 + 441.",
        "= 841.",
        "√841 = ?"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "11² + 60² = 121 + 3600.",
        "= 3721.",
        "√3721 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has legs 9 and 12. What is the hypotenuse?',
      choices: ["13", "14", "15", "16"],
      answer: "15",
      hints: [
        "9² + 12² = 81 + 144.",
        "= 225.",
        "√225 = ?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 16 and 12. What is the hypotenuse?',
      answer: "20",
      hints: [
        "16² + 12² = 256 + 144.",
        "= 400.",
        "√400 = ?"
      ],
      explanation: [
        "16² + 12² = 256 + 144 = 400.",
        "c = √400 = 20."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 6 and 8. What is the hypotenuse?',
      answer: "10",
      hints: [
        "6² + 8² = 36 + 64.",
        "= 100.",
        "√100 = ?"
      ],
      explanation: [
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 15 and 20. What is the hypotenuse?',
      answer: "25",
      hints: [
        "15² + 20² = 225 + 400.",
        "= 625.",
        "√625 = ?"
      ],
      explanation: [
        "15² + 20² = 225 + 400 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 12 and 16. What is the hypotenuse?',
      choices: ["18", "19", "20", "21"],
      answer: "20",
      hints: [
        "12² + 16² = 144 + 256.",
        "= 400.",
        "√400 = ?"
      ],
      explanation: [
        "12² + 16² = 144 + 256 = 400.",
        "c = √400 = 20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 24 and 7. What is the hypotenuse?',
      answer: "25",
      hints: [
        "24² + 7² = 576 + 49.",
        "= 625.",
        "√625 = ?"
      ],
      explanation: [
        "24² + 7² = 576 + 49 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 9 and 40. What is the hypotenuse?',
      answer: "41",
      hints: [
        "9² + 40² = 81 + 1600.",
        "= 1681.",
        "√1681 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 14 and 48. What is the hypotenuse?',
      choices: ["48", "49", "50", "52"],
      answer: "50",
      hints: [
        "14² + 48² = 196 + 2304.",
        "= 2500.",
        "√2500 = ?"
      ],
      explanation: [
        "14² + 48² = 196 + 2304 = 2500.",
        "c = √2500 = 50."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 12 and 35. What is the hypotenuse?',
      answer: "37",
      hints: [
        "12² + 35² = 144 + 1225.",
        "= 1369.",
        "√1369 = ?"
      ],
      explanation: [
        "12² + 35² = 144 + 1225 = 1369.",
        "c = √1369 = 37."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 6 and 8. What is the hypotenuse?',
      answer: "10",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = ?"
      ],
      explanation: [
        "a² + b² = 36 + 64 = 100.",
        "c = √100 = 10."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 9 and 12. What is the hypotenuse?',
      choices: ["13", "14", "15", "16"],
      answer: "15",
      hints: [
        "a² + b² = c².",
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = ?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 5 and 12. What is the hypotenuse?',
      answer: "13",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = ?"
      ],
      explanation: [
        "a² + b² = 25 + 144 = 169.",
        "c = √169 = 13."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has legs of 15 and 20. What is the hypotenuse?',
      choices: ["22", "23", "25", "27"],
      answer: "25",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "15² + 20² = 225 + 400 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "a² + b² = 225 + 400 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 10 and 24. What is the hypotenuse?',
      answer: "26",
      hints: [
        "a² + b² = c².",
        "100 + 576 = 676.",
        "c = √676 = ?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = 26."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 16 and 12. What is the hypotenuse?',
      answer: "20",
      hints: [
        "Use a² + b² = c².",
        "256 + 144 = 400.",
        "c = √400 = ?"
      ],
      explanation: [
        "16² + 12² = 256 + 144 = 400.",
        "c = √400 = 20."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 5 and 12. What is the hypotenuse?',
      answer: "13",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = ?"
      ],
      explanation: [
        "a² + b² = c² → 25 + 144 = 169.",
        "c = √169 = 13."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 15 and 20. What is the hypotenuse?',
      choices: ["24", "25", "26", "27"],
      answer: "25",
      hints: [
        "15² + 20² = 225 + 400.",
        "= 625.",
        "√625 = ?"
      ],
      explanation: [
        "15² + 20² = 225 + 400 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 8 and 15. What is the hypotenuse?',
      answer: "17",
      hints: [
        "8² + 15² = 64 + 225.",
        "= 289.",
        "√289 = ?"
      ],
      explanation: [
        "a² + b² = 64 + 225 = 289.",
        "c = √289 = 17."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 6 and 8. What is the hypotenuse?',
      answer: "10",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = ?"
      ],
      explanation: [
        "a² + b² = 6² + 8² = 36 + 64 = 100.",
        "c = √100 = 10."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 9 and 12. What is the hypotenuse?',
      choices: ["13", "14", "15", "16"],
      answer: "15",
      hints: [
        "a² + b² = c².",
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = ?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = 15.",
        "This is the 3-4-5 triple scaled by 3."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 5 and 12. What is the hypotenuse?',
      answer: "13",
      hints: [
        "a² + b² = c².",
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = ?"
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = 13.",
        "5-12-13 is a well-known Pythagorean triple."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "c" },
      question: 'A right triangle has legs of 5 cm and 12 cm. Find the hypotenuse.',
      answer: "13",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = ?"
      ],
      explanation: [
        "a² + b² = c² → 25 + 144 = 169.",
        "c = √169 = 13 cm."
      ]
    },
    {
      type: "mc", difficulty: 1,
      diagram: { type: "rightTriangle", a: 6, b: 8, c: 10, showUnknown: "c" },
      question: 'A right triangle has legs 6 and 8. What is the hypotenuse?',
      choices: ["9", "10", "12", "14"],
      answer: "10",
      hints: [
        "Use a² + b² = c².",
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = ?"
      ],
      explanation: [
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rightTriangle", a: 9, b: 12, c: 15, showUnknown: "c" },
      question: 'Find the hypotenuse of a right triangle with legs 9 and 12.',
      answer: "15",
      hints: [
        "a² + b² = c².",
        "81 + 144 = 225.",
        "c = √225 = ?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "c = √225 = 15."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 6 cm and 8 cm. Find the hypotenuse.',
      diagram: { type: "rightTriangle", a: 6, b: 8, c: 10, showUnknown: "c" },
      answer: "10",
      hints: [
        "Use the Pythagorean theorem: a² + b² = c².",
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = ?"
      ],
      explanation: [
        "a² + b² = c² → 36 + 64 = 100.",
        "c = √100 = 10 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 5 and 12. What is the hypotenuse?',
      diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "c" },
      choices: ["11", "13", "15", "17"],
      answer: "13",
      hints: [
        "a² + b² = c².",
        "25 + 144 = 169.",
        "c = √169 = ?"
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = 13."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs of 9 and 40. What is the hypotenuse?',
      diagram: { type: "rightTriangle", a: 9, b: 40, c: 41, showUnknown: "c" },
      answer: "41",
      hints: [
        "a² + b² = c².",
        "81 + 1600 = 1681.",
        "c = √1681 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    }
  ],

  // ---- Topic 1: Pythagorean Practice (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 15 and 20. What is the hypotenuse?',
      answer: "25",
      hints: [
        "15² + 20² = 225 + 400.",
        "= 625.",
        "√625 = ?"
      ],
      explanation: [
        "15² + 20² = 225 + 400 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 8 and 15. What is the hypotenuse?',
      choices: ["15", "16", "17", "18"],
      answer: "17",
      hints: [
        "8² + 15² = 64 + 225.",
        "= 289.",
        "√289 = ?"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = 17."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
      answer: "12",
      hints: [
        "a² + b² = c² → b² = c² − a².",
        "b² = 169 − 25 = 144.",
        "b = √144 = ?"
      ],
      explanation: [
        "b² = 13² − 5² = 169 − 25 = 144.",
        "b = √144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 7 and 24. What is the hypotenuse?',
      choices: ["23", "24", "25", "26"],
      answer: "25",
      hints: [
        "7² + 24² = 49 + 576.",
        "= 625.",
        "√625 = ?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 10 and 24. What is the hypotenuse?',
      answer: "26",
      hints: [
        "10² + 24² = 100 + 576.",
        "= 676.",
        "√676 = ?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = 26."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with exactly one pair of parallel sides is called a:',
      choices: ["Rectangle", "Parallelogram", "Trapezoid", "Rhombus"],
      answer: "Trapezoid",
      hints: [
        "A parallelogram has two pairs of parallel sides.",
        "A rectangle is a special parallelogram.",
        "Only one pair of parallel sides → trapezoid."
      ],
      explanation: [
        "A trapezoid has exactly one pair of parallel sides.",
        "Parallelograms have two pairs of parallel sides."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The four angles of a quadrilateral sum to how many degrees?',
      answer: "360",
      hints: [
        "Use the formula (n − 2) × 180 with n = 4.",
        "(4 − 2) × 180 = 2 × 180.",
        "= 360."
      ],
      explanation: [
        "Interior angles of a quadrilateral sum to (4 − 2) × 180° = 360°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral has all four sides equal and all four angles equal to 90°?',
      choices: ["Rhombus", "Rectangle", "Square", "Trapezoid"],
      answer: "Square",
      hints: [
        "A rhombus has equal sides but not necessarily 90° angles.",
        "A rectangle has 90° angles but not necessarily equal sides.",
        "Which has both?"
      ],
      explanation: [
        "A square has all sides equal AND all angles = 90°.",
        "It is both a rhombus and a rectangle."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 9 and 40. What is the hypotenuse?',
      answer: "41",
      hints: [
        "9² + 40² = 81 + 1600.",
        "= 1681.",
        "√1681 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has legs 3 and 4. The hypotenuse is:',
      choices: ["5", "6", "7", "8"],
      answer: "5",
      hints: [
        "3² + 4² = 9 + 16.",
        "= 25.",
        "√25 = ?"
      ],
      explanation: [
        "3² + 4² = 9 + 16 = 25.",
        "c = √25 = 5. This is the classic 3-4-5 triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 20 and 48. What is the hypotenuse?',
      answer: "52",
      hints: [
        "20² + 48² = 400 + 2304.",
        "= 2704.",
        "√2704 = ?"
      ],
      explanation: [
        "20² + 48² = 400 + 2304 = 2704.",
        "c = √2704 = 52 (a scaled 5-12-13 triple)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs 6 and 8. What is the hypotenuse?',
      answer: "10",
      hints: [
        "6² + 8² = 36 + 64.",
        "= 100.",
        "√100 = ?"
      ],
      explanation: [
        "6² + 8² = 36 + 64 = 100.",
        "c = √100 = 10 (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has hypotenuse 26 and one leg 24. What is the other leg?',
      choices: ["8", "10", "12", "14"],
      answer: "10",
      hints: [
        "b² = 26² − 24² = 676 − 576.",
        "= 100.",
        "b = √100 = ?"
      ],
      explanation: [
        "b² = 676 − 576 = 100.",
        "b = √100 = 10."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 12 and 35. What is the hypotenuse?',
      answer: "37",
      hints: [
        "12² + 35² = 144 + 1225.",
        "= 1369.",
        "√1369 = ?"
      ],
      explanation: [
        "12² + 35² = 144 + 1225 = 1369.",
        "c = √1369 = 37."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has hypotenuse 10 and one leg 8. What is the other leg?',
      answer: "6",
      hints: [
        "b² = c² − a² = 10² − 8².",
        "= 100 − 64 = 36.",
        "b = √36 = ?"
      ],
      explanation: [
        "b² = 100 − 64 = 36.",
        "b = √36 = 6."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 14 and 48. What is the hypotenuse?',
      choices: ["48", "50", "52", "54"],
      answer: "50",
      hints: [
        "14² + 48² = 196 + 2304.",
        "= 2500.",
        "√2500 = ?"
      ],
      explanation: [
        "14² + 48² = 196 + 2304 = 2500.",
        "c = √2500 = 50."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 18 and 24. What is the hypotenuse?',
      answer: "30",
      hints: [
        "18² + 24² = 324 + 576.",
        "= 900.",
        "√900 = ?"
      ],
      explanation: [
        "18² + 24² = 324 + 576 = 900.",
        "c = √900 = 30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 17 and one leg 15. What is the other leg?',
      answer: "8",
      hints: [
        "b² = c² − a² = 17² − 15².",
        "= 289 − 225 = 64.",
        "b = √64 = ?"
      ],
      explanation: [
        "b² = 289 − 225 = 64.",
        "b = √64 = 8."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has legs 5 and 12. The hypotenuse is:',
      choices: ["12", "13", "14", "15"],
      answer: "13",
      hints: [
        "5² + 12² = 25 + 144.",
        "= 169.",
        "√169 = ?"
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169.",
        "c = √169 = 13. This is a classic 5-12-13 triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 30 and 40. What is the hypotenuse?',
      answer: "50",
      hints: [
        "30² + 40² = 900 + 1600.",
        "= 2500.",
        "√2500 = ?"
      ],
      explanation: [
        "30² + 40² = 900 + 1600 = 2500.",
        "c = √2500 = 50 (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has hypotenuse 25 and one leg 7. What is the other leg?',
      answer: "24",
      hints: [
        "b² = c² − a² = 25² − 7².",
        "= 625 − 49 = 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 625 − 49 = 576.",
        "b = √576 = 24."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has hypotenuse 29 and one leg 20. What is the other leg?',
      choices: ["19", "20", "21", "22"],
      answer: "21",
      hints: [
        "b² = 29² − 20² = 841 − 400.",
        "= 441.",
        "b = √441 = ?"
      ],
      explanation: [
        "b² = 841 − 400 = 441.",
        "b = √441 = 21."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 21 and 28. What is the hypotenuse?',
      answer: "35",
      hints: [
        "21² + 28² = 441 + 784.",
        "= 1225.",
        "√1225 = ?"
      ],
      explanation: [
        "21² + 28² = 441 + 784 = 1225.",
        "c = √1225 = 35 (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 8 and 15. What is the hypotenuse?',
      answer: "17",
      hints: [
        "Use a² + b² = c².",
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = ?"
      ],
      explanation: [
        "a² + b² = 64 + 225 = 289.",
        "c = √289 = 17."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 7 and 24. What is the hypotenuse?',
      choices: ["23", "24", "25", "26"],
      answer: "25",
      hints: [
        "a² + b² = c².",
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 20 and 21. What is the hypotenuse?',
      answer: "29",
      hints: [
        "Use a² + b² = c².",
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = ?"
      ],
      explanation: [
        "a² + b² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A right triangle has legs of 12 and 16. What is the hypotenuse?',
      choices: ["18", "19", "20", "22"],
      answer: "20",
      hints: [
        "a² + b² = c².",
        "144 + 256 = 400.",
        "c = √400 = ?"
      ],
      explanation: [
        "12² + 16² = 144 + 256 = 400.",
        "c = √400 = 20."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "a² + b² = c².",
        "121 + 3600 = 3721.",
        "c = √3721 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 14 and 48. What is the hypotenuse?',
      answer: "50",
      hints: [
        "a² + b² = c².",
        "196 + 2304 = 2500.",
        "c = √2500 = ?"
      ],
      explanation: [
        "14² + 48² = 196 + 2304 = 2500.",
        "c = √2500 = 50."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 7 and 24. What is the hypotenuse?',
      answer: "25",
      hints: [
        "Use a² + b² = c².",
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "a² + b² = 49 + 576 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs 20 and 21. What is the hypotenuse?',
      choices: ["27", "28", "29", "30"],
      answer: "29",
      hints: [
        "20² + 21² = 400 + 441.",
        "= 841.",
        "√841 = ?"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 10 and 24. What is the hypotenuse?',
      answer: "26",
      hints: [
        "10² + 24² = 100 + 576.",
        "= 676.",
        "√676 = ?"
      ],
      explanation: [
        "a² + b² = 100 + 576 = 676.",
        "c = √676 = 26."
      ]
    }
,
    {
      type: "numeric", difficulty: 1,
      question: 'A right triangle has legs of 8 and 15. What is the hypotenuse?',
      answer: "17",
      hints: [
        "a² + b² = c².",
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = ?"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = 17.",
        "8-15-17 is a Pythagorean triple."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 20 and 21. What is the hypotenuse?',
      choices: ["27", "28", "29", "30"],
      answer: "29",
      hints: [
        "a² + b² = c².",
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = ?"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = 29.",
        "20-21-29 is a Pythagorean triple."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 10 and 24. What is the hypotenuse?',
      answer: "26",
      hints: [
        "a² + b² = c².",
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = ?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = 26.",
        "This is the 5-12-13 triple scaled by 2."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rightTriangle", a: 7, b: 24, c: 25, showUnknown: "c" },
      question: 'A right triangle has legs of 7 m and 24 m. What is the length of the hypotenuse?',
      answer: "25",
      hints: [
        "a² + b² = c².",
        "49 + 576 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = 25 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "rightTriangle", a: 8, b: 15, c: 17, showUnknown: "c" },
      question: 'A right triangle has legs 8 and 15. What is the hypotenuse?',
      choices: ["16", "17", "18", "19"],
      answer: "17",
      hints: [
        "a² + b² = c².",
        "64 + 225 = 289.",
        "c = √289 = ?"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "c = √289 = 17."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      diagram: { type: "rightTriangle", a: 3, b: 4, c: 5, showUnknown: "c" },
      question: 'The two shorter sides of a right triangle are 3 inches and 4 inches. Find the longest side.',
      answer: "5",
      hints: [
        "The longest side is the hypotenuse (c).",
        "a² + b² = c² → 9 + 16 = 25.",
        "c = √25 = ?"
      ],
      explanation: [
        "3² + 4² = 9 + 16 = 25.",
        "c = √25 = 5 inches."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 15 and 20. Find the hypotenuse.',
      diagram: { type: "rightTriangle", a: 15, b: 20, c: 25, showUnknown: "c" },
      answer: "25",
      hints: [
        "a² + b² = c².",
        "225 + 400 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "15² + 20² = 225 + 400 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has legs of 7 and 24. What is the hypotenuse?',
      diagram: { type: "rightTriangle", a: 7, b: 24, c: 25, showUnknown: "c" },
      choices: ["23", "25", "27", "31"],
      answer: "25",
      hints: [
        "a² + b² = c².",
        "49 + 576 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "c = √625 = 25."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs of 11 and 60. Find the hypotenuse.',
      diagram: { type: "rightTriangle", a: 11, b: 60, c: 61, showUnknown: "c" },
      answer: "61",
      hints: [
        "a² + b² = c².",
        "121 + 3600 = 3721.",
        "c = √3721 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    }
  ],

  // ---- Topic 2: Pythagorean Triples (diff 1-2) ----
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["2, 3, 4", "3, 4, 5", "4, 5, 6", "5, 6, 7"],
      answer: "3, 4, 5",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Check: 3² + 4² = 9 + 16 = 25 = 5².",
        "Yes — 3, 4, 5 works!"
      ],
      explanation: [
        "3² + 4² = 9 + 16 = 25 = 5².",
        "So 3, 4, 5 is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 3-4-5 is multiplied by 4. What is the hypotenuse of the new triple?',
      answer: "20",
      hints: [
        "Multiply each number by 4: 3×4, 4×4, 5×4.",
        "= 12, 16, 20.",
        "The hypotenuse = 20."
      ],
      explanation: [
        "Scaling 3-4-5 by 4 gives 12-16-20.",
        "The hypotenuse = 20."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle has:',
      choices: ["All sides equal", "Opposite sides equal and all angles 90°", "Only one pair of parallel sides", "No parallel sides"],
      answer: "Opposite sides equal and all angles 90°",
      hints: [
        "A rectangle is a parallelogram with right angles.",
        "Its opposite sides are equal.",
        "All four angles are 90°."
      ],
      explanation: [
        "A rectangle has opposite sides equal and parallel.",
        "All four angles are 90°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has two angles of 70° each. What is each of the other two angles?',
      answer: "110",
      hints: [
        "Opposite angles in a parallelogram are equal.",
        "Consecutive angles are supplementary (add to 180°).",
        "180 − 70 = ?"
      ],
      explanation: [
        "Consecutive angles are supplementary.",
        "Each of the other two angles = 180° − 70° = 110°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which property is true for ALL parallelograms?',
      choices: ["All angles are 90°", "All sides are equal", "Opposite sides are parallel", "Diagonals are equal"],
      answer: "Opposite sides are parallel",
      hints: [
        "A parallelogram is defined by its parallel sides.",
        "Not all parallelograms have 90° angles (only rectangles do).",
        "Not all have equal sides (only rhombi do)."
      ],
      explanation: [
        "By definition, a parallelogram has opposite sides parallel.",
        "The other properties are only for special types."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is a multiple of the 5-12-13 triple?',
      choices: ["10-24-25", "10-24-26", "15-36-38", "15-36-39"],
      answer: "10-24-26",
      hints: [
        "Multiply 5-12-13 by 2: 10-24-26.",
        "Check: 10² + 24² = 100 + 576 = 676 = 26².",
        "Yes!"
      ],
      explanation: [
        "5×2=10, 12×2=24, 13×2=26.",
        "10² + 24² = 676 = 26². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'In the triple 8-15-17, what is 8² + 15²?',
      answer: "289",
      hints: [
        "8² = 64, 15² = 225.",
        "64 + 225 = ?",
        "And check: 17² = 289."
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "17² = 289, confirming the triple."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The simplest Pythagorean triple with smallest side 3 is:',
      choices: ["3-4-5", "3-5-7", "3-6-9", "3-4-6"],
      answer: "3-4-5",
      hints: [
        "Test 3² + 4² = 9 + 16 = 25 = 5².",
        "It works!",
        "3-4-5 is the most basic Pythagorean triple."
      ],
      explanation: [
        "3² + 4² = 25 = 5².",
        "3-4-5 is the fundamental triple."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["9, 12, 14", "9, 12, 15", "9, 12, 16", "9, 12, 18"],
      answer: "9, 12, 15",
      hints: [
        "Check: 9² + 12² = 81 + 144 = 225.",
        "15² = 225.",
        "It matches! (It is 3-4-5 scaled by 3.)"
      ],
      explanation: [
        "9² + 12² = 225 = 15².",
        "9-12-15 is the triple 3-4-5 multiplied by 3."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 5-12-13 is multiplied by 5. What is the new hypotenuse?',
      answer: "65",
      hints: [
        "Multiply each by 5: 5×5, 12×5, 13×5.",
        "= 25, 60, 65.",
        "The hypotenuse = 65."
      ],
      explanation: [
        "Scaling 5-12-13 by 5 gives 25-60-65.",
        "25² + 60² = 625 + 3600 = 4225 = 65². ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'What is a Pythagorean triple?',
      choices: ["Any three numbers", "Three whole numbers where a² + b² = c²", "Three even numbers", "Three numbers that add to 180"],
      answer: "Three whole numbers where a² + b² = c²",
      hints: [
        "It relates to the Pythagorean theorem.",
        "All three numbers must be whole numbers (integers).",
        "They must satisfy a² + b² = c²."
      ],
      explanation: [
        "A Pythagorean triple is a set of three whole numbers a, b, c such that a² + b² = c².",
        "Examples: 3-4-5, 5-12-13, 8-15-17."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 3-4-5 is multiplied by 6. What is the hypotenuse of the new triple?',
      answer: "30",
      hints: [
        "Multiply each number by 6: 3×6, 4×6, 5×6.",
        "= 18, 24, 30.",
        "The hypotenuse = 30."
      ],
      explanation: [
        "Scaling 3-4-5 by 6 gives 18-24-30.",
        "The hypotenuse = 30."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["5, 12, 13", "6, 8, 11", "7, 9, 12", "4, 6, 8"],
      answer: "5, 12, 13",
      hints: [
        "Check: 5² + 12² = 25 + 144 = 169.",
        "13² = 169.",
        "It matches!"
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169 = 13².",
        "So 5, 12, 13 is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'In the triple 7-24-25, what is 7² + 24²?',
      answer: "625",
      hints: [
        "7² = 49, 24² = 576.",
        "49 + 576 = ?",
        "And check: 25² = 625."
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "25² = 625, confirming the triple."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["6, 8, 10", "7, 8, 9", "4, 5, 7", "3, 5, 6"],
      answer: "6, 8, 10",
      hints: [
        "Check: 6² + 8² = 36 + 64 = 100.",
        "10² = 100.",
        "It matches! (It is 3-4-5 scaled by 2.)"
      ],
      explanation: [
        "6² + 8² = 100 = 10².",
        "6-8-10 is the triple 3-4-5 multiplied by 2."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 8-15-17 is multiplied by 3. What is the new hypotenuse?',
      answer: "51",
      hints: [
        "Multiply each by 3: 8×3, 15×3, 17×3.",
        "= 24, 45, 51.",
        "The hypotenuse = 51."
      ],
      explanation: [
        "Scaling 8-15-17 by 3 gives 24-45-51.",
        "24² + 45² = 576 + 2025 = 2601 = 51². ✓"
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is a multiple of the 3-4-5 triple?',
      choices: ["6-8-11", "9-12-15", "12-15-18", "6-9-12"],
      answer: "9-12-15",
      hints: [
        "Multiply 3-4-5 by 3: 9-12-15.",
        "Check: 9² + 12² = 81 + 144 = 225.",
        "15² = 225. ✓"
      ],
      explanation: [
        "3×3=9, 4×3=12, 5×3=15.",
        "9² + 12² = 225 = 15². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 3-4-5 is multiplied by 10. What is the hypotenuse of the new triple?',
      answer: "50",
      hints: [
        "Multiply each by 10: 3×10, 4×10, 5×10.",
        "= 30, 40, 50.",
        "The hypotenuse = 50."
      ],
      explanation: [
        "Scaling 3-4-5 by 10 gives 30-40-50.",
        "The hypotenuse = 50."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["8, 15, 17", "9, 11, 14", "7, 10, 13", "5, 8, 10"],
      answer: "8, 15, 17",
      hints: [
        "Check: 8² + 15² = 64 + 225 = 289.",
        "17² = 289.",
        "It matches!"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289 = 17².",
        "So 8, 15, 17 is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 5-12-13 is multiplied by 3. What is the new hypotenuse?',
      answer: "39",
      hints: [
        "Multiply each by 3: 5×3, 12×3, 13×3.",
        "= 15, 36, 39.",
        "The hypotenuse = 39."
      ],
      explanation: [
        "Scaling 5-12-13 by 3 gives 15-36-39.",
        "15² + 36² = 225 + 1296 = 1521 = 39². ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["12, 16, 20", "10, 15, 18", "9, 11, 14", "7, 8, 11"],
      answer: "12, 16, 20",
      hints: [
        "Check: 12² + 16² = 144 + 256 = 400.",
        "20² = 400.",
        "It matches! (It is 3-4-5 scaled by 4.)"
      ],
      explanation: [
        "12² + 16² = 400 = 20².",
        "12-16-20 is the triple 3-4-5 multiplied by 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 7-24-25 is multiplied by 3. What is the new hypotenuse?',
      answer: "75",
      hints: [
        "Multiply each by 3: 7×3, 24×3, 25×3.",
        "= 21, 72, 75.",
        "The hypotenuse = 75."
      ],
      explanation: [
        "Scaling 7-24-25 by 3 gives 21-72-75.",
        "21² + 72² = 441 + 5184 = 5625 = 75². ✓"
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is a multiple of the 8-15-17 triple?',
      choices: ["16-30-32", "24-45-51", "16-30-35", "24-40-51"],
      answer: "24-45-51",
      hints: [
        "Multiply 8-15-17 by 3: 24-45-51.",
        "Check: 24² + 45² = 576 + 2025 = 2601.",
        "51² = 2601. ✓"
      ],
      explanation: [
        "8×3=24, 15×3=45, 17×3=51.",
        "24² + 45² = 2601 = 51². ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of these is a Pythagorean triple?',
      choices: ["(4, 5, 6)", "(5, 12, 13)", "(7, 8, 10)", "(6, 7, 9)"],
      answer: "(5, 12, 13)",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Check: 5² + 12² = 25 + 144 = 169 = 13².",
        "Yes, so (5, 12, 13) works."
      ],
      explanation: [
        "5² + 12² = 25 + 144 = 169 = 13².",
        "So (5, 12, 13) is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple (3, 4, 5) is scaled by 4. What is the hypotenuse of the new triple?',
      answer: "20",
      hints: [
        "Multiply each side by 4.",
        "(3×4, 4×4, 5×4) = (12, 16, 20).",
        "The hypotenuse = 20."
      ],
      explanation: [
        "Scaling (3, 4, 5) by 4 gives (12, 16, 20).",
        "The hypotenuse = 20."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'The triple (8, 15, 17) is a multiple of which basic triple?',
      choices: ["(3, 4, 5)", "(5, 12, 13)", "None — it is a primitive triple", "(7, 24, 25)"],
      answer: "None — it is a primitive triple",
      hints: [
        "Check if 8, 15, and 17 share a common factor.",
        "GCD(8, 15) = 1, so they share no common factor.",
        "It is a primitive Pythagorean triple."
      ],
      explanation: [
        "8, 15, and 17 have no common factor greater than 1.",
        "So (8, 15, 17) is a primitive Pythagorean triple."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["(2, 3, 4)", "(8, 15, 17)", "(6, 7, 9)", "(10, 11, 12)"],
      answer: "(8, 15, 17)",
      hints: [
        "Check: does a² + b² = c²?",
        "8² + 15² = 64 + 225 = 289.",
        "17² = 289. ✓"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289 = 17².",
        "So (8, 15, 17) is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple (5, 12, 13) is multiplied by 3. What is the hypotenuse of the new triple?',
      answer: "39",
      hints: [
        "Multiply each number by 3.",
        "5×3 = 15, 12×3 = 36, 13×3 = ?",
        "= 39."
      ],
      explanation: [
        "Scaling (5, 12, 13) by 3 gives (15, 36, 39).",
        "The hypotenuse = 39."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is a multiple of the Pythagorean triple (3, 4, 5)?',
      choices: ["(7, 14, 21)", "(9, 12, 15)", "(12, 15, 20)", "(5, 6, 7)"],
      answer: "(9, 12, 15)",
      hints: [
        "Multiply (3, 4, 5) by 3.",
        "3×3=9, 4×3=12, 5×3=15.",
        "Check: 9² + 12² = 81 + 144 = 225 = 15². ✓"
      ],
      explanation: [
        "(9, 12, 15) = 3 × (3, 4, 5).",
        "9² + 12² = 225 = 15². ✓"
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["6, 7, 8", "8, 15, 17", "9, 11, 14", "10, 12, 15"],
      answer: "8, 15, 17",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Check: 8² + 15² = 64 + 225 = 289.",
        "17² = 289. ✓"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289 = 17².",
        "So 8, 15, 17 is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple 5-12-13 is multiplied by 3. What is the hypotenuse of the new triple?',
      answer: "39",
      hints: [
        "Multiply each number by 3: 5×3, 12×3, 13×3.",
        "= 15, 36, 39.",
        "The hypotenuse = 39."
      ],
      explanation: [
        "Scaling 5-12-13 by 3 gives 15-36-39.",
        "The hypotenuse = 39."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'The triple 3-4-5 is multiplied by 6. What are the new sides?',
      choices: ["12-20-30", "18-24-30", "15-24-30", "18-20-30"],
      answer: "18-24-30",
      hints: [
        "Multiply each by 6: 3×6, 4×6, 5×6.",
        "= 18, 24, 30.",
        "Check: 18² + 24² = 324 + 576 = 900 = 30². ✓"
      ],
      explanation: [
        "3×6=18, 4×6=24, 5×6=30.",
        "18² + 24² = 324 + 576 = 900 = 30². ✓"
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["5, 11, 13", "7, 24, 25", "8, 14, 17", "9, 15, 18"],
      answer: "7, 24, 25",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Check: 7² + 24² = 49 + 576 = 625.",
        "25² = 625. ✓"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625 = 25².",
        "So 7, 24, 25 is a Pythagorean triple.",
        "The others do not satisfy a² + b² = c²."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'The Pythagorean triple 3-4-5 is scaled by 7. What is the hypotenuse?',
      answer: "35",
      hints: [
        "Scale each side by 7.",
        "3 × 7 = 21, 4 × 7 = 28, 5 × 7 = ?",
        "= 35."
      ],
      explanation: [
        "Scaling 3-4-5 by 7: 21, 28, 35.",
        "Hypotenuse = 5 × 7 = 35.",
        "Check: 21² + 28² = 441 + 784 = 1225 = 35²."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which triple is a multiple of the 5-12-13 triple?',
      choices: ["10, 20, 26", "15, 36, 39", "10, 24, 26", "20, 40, 50"],
      answer: "10, 24, 26",
      hints: [
        "Multiply 5-12-13 by some integer.",
        "5 × 2 = 10, 12 × 2 = 24, 13 × 2 = 26.",
        "Check: 10² + 24² = 100 + 576 = 676 = 26²."
      ],
      explanation: [
        "5-12-13 scaled by 2 gives 10-24-26.",
        "10² + 24² = 100 + 576 = 676 = 26². ✓",
        "The other options don't form valid triples."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is a Pythagorean triple?',
      choices: ["5, 11, 13", "9, 12, 15", "7, 10, 12", "4, 6, 8"],
      answer: "9, 12, 15",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Test 9, 12, 15: 81 + 144 = 225 and 15² = 225.",
        "They match!"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225 = 15².",
        "So 9, 12, 15 is a Pythagorean triple (it is 3 × the 3-4-5 triple)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The Pythagorean triple 3, 4, 5 is multiplied by 6. What is the new hypotenuse?',
      answer: "30",
      hints: [
        "Multiply each number in the triple by 6.",
        "3 × 6 = 18, 4 × 6 = 24, 5 × 6 = ?",
        "The hypotenuse is 5 × 6."
      ],
      explanation: [
        "Multiplying a Pythagorean triple by a constant gives another triple.",
        "5 × 6 = 30. Triple: 18, 24, 30."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'The triple 5, 12, 13 is multiplied by 3. What are the new side lengths?',
      choices: ["10, 24, 26", "15, 36, 39", "15, 24, 39", "20, 36, 39"],
      answer: "15, 36, 39",
      hints: [
        "Multiply each side by 3.",
        "5 × 3 = 15, 12 × 3 = 36, 13 × 3 = ?",
        "13 × 3 = 39."
      ],
      explanation: [
        "5 × 3 = 15, 12 × 3 = 36, 13 × 3 = 39.",
        "Check: 15² + 36² = 225 + 1296 = 1521 = 39². ✓"
      ]
    }

,
    {
      type: "mc", difficulty: 2,
      question: 'Which of these is a Pythagorean triple?',
      choices: ["5, 11, 12", "8, 15, 17", "7, 10, 13", "9, 11, 15"],
      answer: "8, 15, 17",
      hints: [
        "A Pythagorean triple satisfies a² + b² = c².",
        "Check: 8² + 15² = 64 + 225 = 289.",
        "17² = 289. ✓"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289 = 17².",
        "So (8, 15, 17) is a Pythagorean triple."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The triple (3, 4, 5) is multiplied by 4. What is the hypotenuse of the new triple?',
      diagram: { type: "rightTriangle", a: 12, b: 16, c: 20, showUnknown: "c" },
      answer: "20",
      hints: [
        "Multiply each side by 4.",
        "3 × 4 = 12, 4 × 4 = 16, 5 × 4 = ?",
        "= 20."
      ],
      explanation: [
        "Scaling a triple: (3×4, 4×4, 5×4) = (12, 16, 20).",
        "Check: 144 + 256 = 400 = 20². ✓"
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which is NOT a Pythagorean triple?',
      choices: ["3, 4, 5", "5, 12, 13", "6, 8, 11", "8, 15, 17"],
      answer: "6, 8, 11",
      hints: [
        "Check each: does a² + b² = c²?",
        "6² + 8² = 36 + 64 = 100. But 11² = 121.",
        "100 ≠ 121, so (6, 8, 11) is NOT a triple."
      ],
      explanation: [
        "6² + 8² = 100, but 11² = 121.",
        "Since 100 ≠ 121, (6, 8, 11) is not a Pythagorean triple.",
        "The correct triple for 6 and 8 would be (6, 8, 10)."
      ]
    }
  ],

  // ---- Topic 3: Types of Quadrilaterals (diff 1-2) ----
  [
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral has exactly one pair of parallel sides?',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Square"],
      answer: "Trapezoid",
      hints: [
        "A rectangle has two pairs of parallel sides.",
        "A rhombus also has two pairs.",
        "Which one has just one pair?"
      ],
      explanation: [
        "A trapezoid has exactly one pair of parallel sides.",
        "Rectangles, rhombi, and squares all have two pairs."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A parallelogram with four right angles is called a:',
      choices: ["Rhombus", "Trapezoid", "Rectangle", "Kite"],
      answer: "Rectangle",
      hints: [
        "All angles are 90°.",
        "Opposite sides are parallel and equal.",
        "This describes a rectangle."
      ],
      explanation: [
        "A parallelogram with four right angles is a rectangle.",
        "If it also has four equal sides, it is a square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with four equal sides but not necessarily right angles is a:',
      choices: ["Rectangle", "Square", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "All four sides are the same length.",
        "The angles are not required to be 90°.",
        "It looks like a tilted square."
      ],
      explanation: [
        "A rhombus has four equal sides.",
        "Its angles are not necessarily 90° (unlike a square)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which statement is true about all parallelograms?',
      choices: ["All angles are 90°", "Opposite sides are parallel and equal", "All sides are equal", "Diagonals are equal"],
      answer: "Opposite sides are parallel and equal",
      hints: [
        "Not all parallelograms have right angles (only rectangles do).",
        "Not all parallelograms have four equal sides (only rhombi do).",
        "The defining property is about opposite sides."
      ],
      explanation: [
        "By definition, a parallelogram has opposite sides that are parallel and equal.",
        "The other properties apply only to special parallelograms."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A square is a special case of all of the following EXCEPT:',
      choices: ["Rectangle", "Rhombus", "Parallelogram", "Trapezoid with no parallel sides"],
      answer: "Trapezoid with no parallel sides",
      hints: [
        "A square has all properties of rectangles, rhombi, and parallelograms.",
        "A square has TWO pairs of parallel sides.",
        "It cannot have no parallel sides."
      ],
      explanation: [
        "A square is a rectangle, rhombus, and parallelogram.",
        "It cannot be a shape with no parallel sides — it has two pairs."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral has all sides equal AND all angles equal to 90°?',
      choices: ["Rectangle", "Rhombus", "Square", "Parallelogram"],
      answer: "Square",
      hints: [
        "A rectangle has right angles but not necessarily equal sides.",
        "A rhombus has equal sides but not necessarily right angles.",
        "Which has BOTH?"
      ],
      explanation: [
        "A square has all four sides equal and all four angles equal to 90°.",
        "It is both a rectangle and a rhombus."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many pairs of parallel sides does a rectangle have?',
      choices: ["0", "1", "2", "4"],
      answer: "2",
      hints: [
        "A rectangle has opposite sides that are parallel.",
        "There are two pairs of opposite sides.",
        "So it has 2 pairs of parallel sides."
      ],
      explanation: [
        "A rectangle has 2 pairs of parallel sides.",
        "Top & bottom are parallel, and left & right are parallel."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which statement best describes a kite?',
      choices: ["All four sides are equal", "Two pairs of consecutive sides are equal", "Opposite sides are parallel", "All angles are right angles"],
      answer: "Two pairs of consecutive sides are equal",
      hints: [
        "A kite has two short sides and two long sides.",
        "The equal sides are next to each other, not opposite.",
        "Two pairs of adjacent (consecutive) sides are equal."
      ],
      explanation: [
        "A kite has two pairs of consecutive (adjacent) sides that are equal.",
        "Unlike a parallelogram, its equal sides are next to each other."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with two pairs of parallel sides is called a:',
      choices: ["Trapezoid", "Kite", "Parallelogram", "Pentagon"],
      answer: "Parallelogram",
      hints: [
        "A trapezoid has only one pair of parallel sides.",
        "A kite has no parallel sides.",
        "Two pairs of parallel sides defines a …"
      ],
      explanation: [
        "A parallelogram has two pairs of parallel sides.",
        "Rectangles, rhombi, and squares are all special types of parallelograms."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which of the following is NOT a parallelogram?',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Square"],
      answer: "Trapezoid",
      hints: [
        "A parallelogram has two pairs of parallel sides.",
        "A trapezoid has only one pair.",
        "So a trapezoid is NOT a parallelogram."
      ],
      explanation: [
        "A trapezoid has exactly one pair of parallel sides.",
        "It is not a parallelogram. Rectangles, rhombi, and squares are all parallelograms."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'An isosceles trapezoid has which property?',
      choices: ["All four sides are equal", "The non-parallel sides (legs) are equal", "Both pairs of sides are parallel", "All angles are 90°"],
      answer: "The non-parallel sides (legs) are equal",
      hints: [
        "It is a special trapezoid.",
        "\"Isosceles\" means two sides are equal.",
        "The equal sides are the non-parallel legs."
      ],
      explanation: [
        "An isosceles trapezoid has equal-length legs (the non-parallel sides).",
        "It also has equal base angles."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral has four equal sides and four right angles?',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Square"],
      answer: "Square",
      hints: [
        "Four equal sides AND four right angles.",
        "A rhombus has equal sides but not necessarily right angles.",
        "A rectangle has right angles but not necessarily equal sides."
      ],
      explanation: [
        "A square has all four sides equal and all four angles at 90°.",
        "It is both a special rectangle and a special rhombus."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral always has opposite sides that are parallel?',
      choices: ["Kite", "Trapezoid", "Parallelogram", "General quadrilateral"],
      answer: "Parallelogram",
      hints: [
        "A kite has no parallel sides.",
        "A trapezoid has only one pair of parallel sides.",
        "Which has two pairs of parallel sides?"
      ],
      explanation: [
        "A parallelogram always has both pairs of opposite sides parallel.",
        "Rectangles, rhombi, and squares are all types of parallelograms."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'How many sides does a quadrilateral have?',
      choices: ["3", "4", "5", "6"],
      answer: "4",
      hints: [
        "The prefix 'quad' means four.",
        "A triangle has 3 sides; a pentagon has 5.",
        "A quadrilateral is in between."
      ],
      explanation: [
        "A quadrilateral is a polygon with exactly 4 sides.",
        "Examples include squares, rectangles, trapezoids, and rhombi."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with exactly two pairs of consecutive equal sides (but not all four equal) is a:',
      choices: ["Rectangle", "Rhombus", "Kite", "Trapezoid"],
      answer: "Kite",
      hints: [
        "A rectangle has all right angles.",
        "A rhombus has all four sides equal.",
        "Which shape has two pairs of adjacent sides equal?"
      ],
      explanation: [
        "A kite has two pairs of consecutive (adjacent) sides that are equal.",
        "Unlike a rhombus, not all four sides are equal."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral always has diagonals that bisect each other?',
      choices: ["Trapezoid", "Kite", "Parallelogram", "General quadrilateral"],
      answer: "Parallelogram",
      hints: [
        "A trapezoid and a kite don't necessarily have this property.",
        "Think about the family of parallelograms.",
        "In a parallelogram, the diagonals always cut each other in half."
      ],
      explanation: [
        "In any parallelogram, the diagonals bisect each other.",
        "This includes rectangles, rhombi, and squares."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A parallelogram with four equal sides is called a:',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Kite"],
      answer: "Rhombus",
      hints: [
        "A rectangle has right angles but not necessarily equal sides.",
        "A parallelogram with all sides equal…",
        "This is the definition of a rhombus."
      ],
      explanation: [
        "A parallelogram with four equal sides is a rhombus.",
        "If the angles are also 90°, it would be a square."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle is a special type of:',
      choices: ["Trapezoid", "Kite", "Parallelogram", "Pentagon"],
      answer: "Parallelogram",
      hints: [
        "A rectangle has two pairs of parallel sides.",
        "All rectangles are parallelograms with right angles.",
        "So a rectangle is a special parallelogram."
      ],
      explanation: [
        "A rectangle is a parallelogram with four right angles.",
        "Every rectangle is a parallelogram, but not every parallelogram is a rectangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral has two pairs of consecutive equal sides and its diagonals are perpendicular?',
      choices: ["Rectangle", "Kite", "Trapezoid", "Parallelogram"],
      answer: "Kite",
      hints: [
        "A kite has two short sides and two long sides (pairs of adjacent equal sides).",
        "Its diagonals cross at right angles.",
        "This describes a kite."
      ],
      explanation: [
        "A kite has two pairs of consecutive equal sides.",
        "Its diagonals are perpendicular, but only one diagonal is bisected by the other."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral always has all four angles equal to 90°?',
      choices: ["Rhombus", "Trapezoid", "Rectangle", "Kite"],
      answer: "Rectangle",
      hints: [
        "A rhombus doesn't always have right angles.",
        "A trapezoid and kite generally don't either.",
        "Which shape always has four 90° corners?"
      ],
      explanation: [
        "A rectangle always has four right angles (90° each).",
        "A square is a special rectangle that also has all sides equal."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral has all four sides equal and all four angles equal to 90°?',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Square"],
      answer: "Square",
      hints: [
        "A rectangle has equal angles but not necessarily equal sides.",
        "A rhombus has equal sides but not necessarily right angles.",
        "Which shape has both?"
      ],
      explanation: [
        "A square has all four sides equal AND all four angles = 90°.",
        "It is both a rectangle and a rhombus."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 9, 12, and 15 a right triangle?',
      choices: ["Yes", "No", "Not enough information", "Only if it has a 90° angle"],
      answer: "Yes",
      hints: [
        "Check if a² + b² = c² with the longest side as c.",
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Equal!"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225 = 15².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 10, 24, and 26, compute <span class="math">a^2 + b^2</span> using the two shorter sides.',
      answer: "676",
      hints: [
        "The two shorter sides are 10 and 24.",
        "10² + 24² = 100 + 576.",
        "= 676."
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "Since 26² = 676 also, this is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with exactly one pair of parallel sides is called a:',
      choices: ["Rectangle", "Parallelogram", "Trapezoid", "Rhombus"],
      answer: "Trapezoid",
      hints: [
        "A parallelogram has two pairs of parallel sides.",
        "A rectangle is a special parallelogram.",
        "Only one pair of parallel sides → trapezoid."
      ],
      explanation: [
        "A trapezoid has exactly one pair of parallel sides.",
        "Parallelograms have two pairs of parallel sides."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'The four angles of a quadrilateral sum to how many degrees?',
      answer: "360",
      hints: [
        "Use the formula (n − 2) × 180 with n = 4.",
        "(4 − 2) × 180 = 2 × 180.",
        "= 360."
      ],
      explanation: [
        "Using the formula: (n − 2) × 180° with n = 4.",
        "Interior angles of a quadrilateral sum to (4 − 2) × 180° = 360°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral has all four sides equal and all four angles equal to 90°?',
      choices: ["Rhombus", "Rectangle", "Square", "Trapezoid"],
      answer: "Square",
      hints: [
        "A rhombus has equal sides but not necessarily 90° angles.",
        "A rectangle has 90° angles but not necessarily equal sides.",
        "Which has both?"
      ],
      explanation: [
        "A square has all sides equal AND all angles = 90°.",
        "It is both a rhombus and a rectangle."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with four right angles and four equal sides is a:',
      choices: ["Rectangle", "Rhombus", "Square", "Trapezoid"],
      answer: "Square",
      hints: [
        "Four right angles → rectangle.",
        "Four equal sides → rhombus.",
        "Both properties → square."
      ],
      explanation: [
        "A square has all four sides equal and all four angles 90°.",
        "It is both a rectangle and a rhombus."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral always has exactly one pair of parallel sides?',
      choices: ["Rectangle", "Parallelogram", "Trapezoid", "Rhombus"],
      answer: "Trapezoid",
      hints: [
        "Rectangles and parallelograms have two pairs of parallel sides.",
        "A trapezoid has exactly one pair.",
        "That is its defining property."
      ],
      explanation: [
        "A trapezoid is defined as having exactly one pair of parallel sides.",
        "Parallelograms, rectangles, and rhombi all have two pairs."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has length 17 cm and width 9 cm. What is its perimeter?',
      answer: "52",
      hints: [
        "P = 2(l + w).",
        "P = 2(17 + 9) = 2 × 26.",
        "= 52."
      ],
      explanation: [
        "P = 2(l + w) = 2(17 + 9).",
        "= 2 × 26 = 52 cm."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with four equal sides and four right angles is a:',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Square"],
      answer: "Square",
      hints: [
        "Four equal sides AND four right angles.",
        "A rhombus has four equal sides but not necessarily right angles.",
        "A square has both."
      ],
      explanation: [
        "A square has four equal sides and four 90° angles.",
        "It is both a rectangle and a rhombus."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral always has perpendicular diagonals?',
      choices: ["Rectangle", "Parallelogram", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "Think about which shape has diagonals that cross at 90°.",
        "A rectangle has equal diagonals but not perpendicular ones.",
        "A rhombus always has perpendicular diagonals."
      ],
      explanation: [
        "In a rhombus, the diagonals always bisect each other at right angles (90°).",
        "This is a defining property of rhombi."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'How many sides does a quadrilateral have?',
      answer: "4",
      hints: [
        "The prefix 'quad' means four.",
        "A quadrilateral is a four-sided polygon.",
        "So it has 4 sides."
      ],
      explanation: [
        "A quadrilateral is a polygon with exactly 4 sides.",
        "Examples include squares, rectangles, and trapezoids."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral with exactly one pair of parallel sides is called a:',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Parallelogram"],
      answer: "Trapezoid",
      hints: [
        "A parallelogram has two pairs of parallel sides.",
        "A trapezoid has only one pair.",
        "This is the key difference."
      ],
      explanation: [
        "A trapezoid has exactly one pair of parallel sides.",
        "A parallelogram (including rectangles and rhombuses) has two pairs."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Which quadrilateral has four equal sides but not necessarily right angles?',
      choices: ["Square", "Rectangle", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "A square has four equal sides AND right angles.",
        "A rhombus has four equal sides but angles can vary.",
        "So the answer is the more general shape."
      ],
      explanation: [
        "A rhombus has four equal sides.",
        "Its angles are not necessarily 90°.",
        "A square is a special rhombus where all angles are 90°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A quadrilateral has angles of 85°, 92°, and 103°. What is the fourth angle?',
      answer: "80",
      hints: [
        "The interior angles of a quadrilateral sum to 360°.",
        "85 + 92 + 103 = 280.",
        "360 − 280 = ?"
      ],
      explanation: [
        "Sum of interior angles = 360°.",
        "85° + 92° + 103° = 280°.",
        "Fourth angle = 360° − 280° = 80°."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'Which quadrilateral has exactly one pair of parallel sides?',
      choices: ["Rectangle", "Rhombus", "Trapezoid", "Square"],
      answer: "Trapezoid",
      hints: [
        "A rectangle has two pairs of parallel sides.",
        "A rhombus also has two pairs.",
        "Only one of these shapes has exactly one pair."
      ],
      explanation: [
        "A trapezoid has exactly one pair of parallel sides.",
        "Rectangles, rhombuses, and squares all have two pairs."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "quadrilateral", shape: "rhombus", diagonals: true },
      question: 'A quadrilateral has four equal sides but no right angles. What is it?',
      choices: ["Square", "Rectangle", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "A square has four equal sides AND right angles.",
        "A rectangle has right angles but not necessarily equal sides.",
        "This shape has equal sides but NO right angles."
      ],
      explanation: [
        "A rhombus has four equal sides.",
        "Unlike a square, its angles are not necessarily 90°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A quadrilateral has 4 right angles and opposite sides that are equal. What is it called?',
      choices: ["Rhombus", "Trapezoid", "Rectangle", "Pentagon"],
      answer: "Rectangle",
      hints: [
        "It has 4 right angles — so it could be a rectangle or square.",
        "Opposite sides are equal (but not all four).",
        "That describes a rectangle."
      ],
      explanation: [
        "A rectangle has 4 right angles and opposite sides equal.",
        "If all 4 sides were also equal, it would be a square."
      ]
    }

,
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has sides 5, 5, and 8. How is it classified by its sides?',
      diagram: { type: "triangle", sides: [5,5,8], angles: [null,null,null], labels: ["A","B","C"] },
      choices: ["Equilateral", "Isosceles", "Scalene", "Right"],
      answer: "Isosceles",
      hints: [
        "Equilateral: all sides equal. Isosceles: two sides equal. Scalene: no sides equal.",
        "Are any two sides equal?",
        "Yes — two sides are 5."
      ],
      explanation: [
        "Two sides are equal (5 = 5), and one is different (8).",
        "A triangle with exactly two equal sides is isosceles."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A quadrilateral has exactly one pair of parallel sides. What is it called?',
      choices: ["Rectangle", "Parallelogram", "Trapezoid", "Rhombus"],
      answer: "Trapezoid",
      hints: [
        "A trapezoid has exactly one pair of parallel sides.",
        "A parallelogram has two pairs.",
        "So one pair of parallel sides = trapezoid."
      ],
      explanation: [
        "A trapezoid is defined as a quadrilateral with exactly one pair of parallel sides.",
        "Parallelograms, rectangles, and rhombi all have two pairs."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A quadrilateral has four equal sides but its angles are not 90°. What is it?',
      diagram: { type: "quadrilateral", shape: "rhombus", diagonals: false },
      choices: ["Square", "Rectangle", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "All sides equal suggests square or rhombus.",
        "A square has 90° angles.",
        "Since the angles are NOT 90°, it must be a …"
      ],
      explanation: [
        "A rhombus has four equal sides but angles are not necessarily 90°.",
        "A square is a special rhombus where all angles are 90°."
      ]
    }
  ],

  // ---- Topic 4: Quadrilateral Properties (diff 1-2) ----
  [
    {
      type: "numeric", difficulty: 1,
      question: 'The sum of interior angles in any quadrilateral is how many degrees?',
      answer: "360",
      hints: [
        "Use (n − 2) × 180 with n = 4.",
        "(4 − 2) × 180 = 2 × 180.",
        "= 360."
      ],
      explanation: [
        "Sum = (n − 2) × 180° = (4 − 2) × 180°.",
        "= 360°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A quadrilateral has angles 85°, 95°, and 110°. What is the fourth angle?',
      choices: ["60°", "65°", "70°", "75°"],
      answer: "70°",
      hints: [
        "All four angles sum to 360°.",
        "85 + 95 + 110 = 290.",
        "360 − 290 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 290°.",
        "Fourth angle = 360° − 290° = 70°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has one angle of 90°. What is each of the other three angles?',
      answer: "90",
      hints: [
        "A rectangle has all right angles.",
        "Each angle is 90°.",
        "That is a key property of rectangles."
      ],
      explanation: [
        "All angles in a rectangle are 90°.",
        "Each of the other three angles = 90°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In a parallelogram, opposite angles are:',
      choices: ["Supplementary", "Complementary", "Equal", "Right angles"],
      answer: "Equal",
      hints: [
        "Think of the properties of a parallelogram.",
        "Opposite sides are equal and parallel.",
        "Opposite angles are also …"
      ],
      explanation: [
        "In a parallelogram, opposite angles are equal.",
        "Consecutive angles are supplementary (add to 180°)."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A parallelogram has one angle of 65°. What is the angle adjacent to it?',
      answer: "115",
      hints: [
        "In a parallelogram, consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 65 = ?"
      ],
      explanation: [
        "Consecutive angles in a parallelogram sum to 180°.",
        "Adjacent angle = 180° − 65° = 115°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A quadrilateral has angles 75°, 105°, and 80°. What is the fourth angle?',
      choices: ["90°", "95°", "100°", "105°"],
      answer: "100°",
      hints: [
        "All four angles sum to 360°.",
        "75 + 105 + 80 = 260.",
        "360 − 260 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 260°.",
        "Fourth angle = 360° − 260° = 100°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A parallelogram has one angle of 120°. What is the opposite angle?',
      answer: "120",
      hints: [
        "In a parallelogram, opposite angles are equal.",
        "If one angle is 120°, the opposite angle is also 120°.",
        "This is a key property of parallelograms."
      ],
      explanation: [
        "Opposite angles in a parallelogram are equal.",
        "The opposite angle = 120°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which property is true for ALL quadrilaterals?',
      choices: ["Opposite sides are parallel", "Interior angles sum to 360°", "All sides are equal", "Diagonals bisect each other"],
      answer: "Interior angles sum to 360°",
      hints: [
        "Only some quadrilaterals have parallel sides or equal sides.",
        "Only some have diagonals that bisect each other.",
        "But ALL quadrilaterals share one angle property."
      ],
      explanation: [
        "The interior angles of any quadrilateral sum to 360°.",
        "This is true by the formula (n − 2) × 180° with n = 4."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A quadrilateral has angles 92°, 88°, and 115°. What is the fourth angle?',
      answer: "65",
      hints: [
        "All four angles sum to 360°.",
        "92 + 88 + 115 = 295.",
        "360 − 295 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 295°.",
        "Fourth angle = 360° − 295° = 65°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A parallelogram has one angle of 50°. What is the angle adjacent to it?',
      choices: ["50°", "90°", "130°", "140°"],
      answer: "130°",
      hints: [
        "In a parallelogram, consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 50 = ?"
      ],
      explanation: [
        "Consecutive angles in a parallelogram sum to 180°.",
        "Adjacent angle = 180° − 50° = 130°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rhombus has one angle of 58°. What is the adjacent angle?',
      answer: "122",
      hints: [
        "A rhombus is a parallelogram, so consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 58 = ?"
      ],
      explanation: [
        "In a rhombus (parallelogram), consecutive angles sum to 180°.",
        "Adjacent angle = 180° − 58° = 122°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A quadrilateral has angles 90°, 90°, and 90°. What is the fourth angle?',
      answer: "90",
      hints: [
        "All four angles sum to 360°.",
        "90 + 90 + 90 = 270.",
        "360 − 270 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 270°.",
        "Fourth angle = 360° − 270° = 90°. (It's a rectangle!)"
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A quadrilateral has angles 110°, 70°, and 95°. What is the fourth angle?',
      choices: ["75°", "80°", "85°", "90°"],
      answer: "85°",
      hints: [
        "All four angles sum to 360°.",
        "110 + 70 + 95 = 275.",
        "360 − 275 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 275°.",
        "Fourth angle = 360° − 275° = 85°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has one angle of 74°. What is the adjacent angle?',
      answer: "106",
      hints: [
        "In a parallelogram, consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 74 = ?"
      ],
      explanation: [
        "Consecutive angles in a parallelogram sum to 180°.",
        "Adjacent angle = 180° − 74° = 106°."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A quadrilateral has angles 105°, 75°, and 100°. What is the fourth angle?',
      answer: "80",
      hints: [
        "All four angles sum to 360°.",
        "105 + 75 + 100 = 280.",
        "360 − 280 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 280°.",
        "Fourth angle = 360° − 280° = 80°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A parallelogram has one angle of 42°. What is the adjacent angle?',
      choices: ["42°", "128°", "138°", "148°"],
      answer: "138°",
      hints: [
        "In a parallelogram, consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 42 = ?"
      ],
      explanation: [
        "Consecutive angles in a parallelogram sum to 180°.",
        "Adjacent angle = 180° − 42° = 138°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rhombus has one angle of 112°. What is the adjacent angle?',
      answer: "68",
      hints: [
        "A rhombus is a parallelogram, so consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 112 = ?"
      ],
      explanation: [
        "In a rhombus (parallelogram), consecutive angles sum to 180°.",
        "Adjacent angle = 180° − 112° = 68°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A ladder leans against a wall. The ladder is 10 ft long, and its base is 6 ft from the wall. How high up the wall does it reach?',
      answer: "8",
      hints: [
        "The ladder, wall, and ground form a right triangle.",
        "h² = 10² − 6² = 100 − 36 = 64.",
        "h = √64 = ?"
      ],
      explanation: [
        "h² = 10² − 6² = 100 − 36 = 64.",
        "h = √64 = 8 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Link walks 9 m north then 40 m east. How far is he from his starting point?',
      choices: ["39 m", "40 m", "41 m", "42 m"],
      answer: "41 m",
      hints: [
        "The path forms a right triangle with legs 9 and 40.",
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = ?"
      ],
      explanation: [
        "d² = 81 + 1600 = 1681.",
        "d = √1681 = 41 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangular field is 16 m by 12 m. What is the length of its diagonal?',
      answer: "20",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = ?"
      ],
      explanation: [
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A quadrilateral has angles 115°, 65°, and 88°. What is the fourth angle?',
      answer: "92",
      hints: [
        "All four angles sum to 360°.",
        "115 + 65 + 88 = 268.",
        "360 − 268 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 268°.",
        "Fourth angle = 360° − 268° = 92°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A parallelogram has one angle of 37°. What is the adjacent angle?',
      choices: ["37°", "127°", "133°", "143°"],
      answer: "143°",
      hints: [
        "In a parallelogram, consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 37 = ?"
      ],
      explanation: [
        "Consecutive angles in a parallelogram sum to 180°.",
        "Adjacent angle = 180° − 37° = 143°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rhombus has one angle of 46°. What is the adjacent angle?',
      answer: "134",
      hints: [
        "A rhombus is a parallelogram, so consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 46 = ?"
      ],
      explanation: [
        "In a rhombus (parallelogram), consecutive angles sum to 180°.",
        "Adjacent angle = 180° − 46° = 134°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle has:',
      choices: ["All sides equal", "Opposite sides equal and all angles 90°", "Only one pair of parallel sides", "No parallel sides"],
      answer: "Opposite sides equal and all angles 90°",
      hints: [
        "A rectangle is a parallelogram with right angles.",
        "Its opposite sides are equal.",
        "All four angles are 90°."
      ],
      explanation: [
        "A rectangle has opposite sides equal and parallel.",
        "All four angles are 90°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has two angles of 70° each. What is each of the other two angles?',
      answer: "110",
      hints: [
        "Opposite angles in a parallelogram are equal.",
        "Consecutive angles are supplementary (add to 180°).",
        "180 − 70 = ?"
      ],
      explanation: [
        "Consecutive angles are supplementary.",
        "Each of the other two angles = 180° − 70° = 110°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which property is true for ALL parallelograms?',
      choices: ["All angles are 90°", "All sides are equal", "Opposite sides are parallel", "Diagonals are equal"],
      answer: "Opposite sides are parallel",
      hints: [
        "A parallelogram is defined by its parallel sides.",
        "Not all parallelograms have 90° angles (only rectangles do).",
        "Not all have equal sides (only rhombi do)."
      ],
      explanation: [
        "By definition, a parallelogram has opposite sides parallel.",
        "The other properties are only for special types."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'The sum of interior angles in any quadrilateral is:',
      choices: ["180°", "270°", "360°", "540°"],
      answer: "360°",
      hints: [
        "A quadrilateral has 4 sides.",
        "Use (n − 2) × 180 with n = 4.",
        "(4 − 2) × 180 = ?"
      ],
      explanation: [
        "Interior angle sum = (4 − 2) × 180° = 360°.",
        "This is true for all quadrilaterals."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A quadrilateral has angles of 85°, 110°, and 78°. What is the fourth angle?',
      answer: "87",
      hints: [
        "The angles in a quadrilateral sum to 360°.",
        "85 + 110 + 78 = 273.",
        "360 − 273 = ?"
      ],
      explanation: [
        "Sum = 360°.",
        "85° + 110° + 78° = 273°.",
        "Fourth angle = 360° − 273° = 87°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which property is true for all parallelograms?',
      choices: ["All sides are equal", "All angles are 90°", "Opposite sides are parallel", "Diagonals are equal"],
      answer: "Opposite sides are parallel",
      hints: [
        "A parallelogram is defined by its parallel sides.",
        "Not all parallelograms have equal sides or right angles.",
        "Opposite sides are always parallel."
      ],
      explanation: [
        "By definition, a parallelogram has two pairs of opposite sides that are parallel.",
        "Only special parallelograms (rhombus, rectangle) have the other properties."
      ]
    },
    {
      type: "numeric", difficulty: 1,
      question: 'A quadrilateral has angles 80°, 100°, and 75°. What is the fourth angle?',
      answer: "105",
      hints: [
        "All four angles sum to 360°.",
        "80 + 100 + 75 = 255.",
        "360 − 255 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 255°.",
        "Fourth angle = 360° − 255° = 105°."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A parallelogram has two angles of 65° each. What is each of the other two angles?',
      choices: ["105°", "110°", "115°", "120°"],
      answer: "115°",
      hints: [
        "Consecutive angles in a parallelogram are supplementary.",
        "180 − 65 = ?",
        "= 115."
      ],
      explanation: [
        "In a parallelogram, consecutive angles sum to 180°.",
        "Each other angle = 180° − 65° = 115°."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A quadrilateral has angles 92°, 88°, and 113°. What is the fourth angle?',
      answer: "67",
      hints: [
        "All four angles sum to 360°.",
        "92 + 88 + 113 = 293.",
        "360 − 293 = ?"
      ],
      explanation: [
        "Sum = 360°. Known angles total 293°.",
        "Fourth angle = 360° − 293° = 67°."
      ]
    }
,
    {
      type: "mc", difficulty: 1,
      question: 'The sum of the interior angles of any quadrilateral is:',
      choices: ["180°", "270°", "360°", "540°"],
      answer: "360°",
      hints: [
        "A quadrilateral has 4 sides.",
        "(n − 2) × 180 = (4 − 2) × 180.",
        "= 2 × 180 = ?"
      ],
      explanation: [
        "Sum = (4 − 2) × 180° = 2 × 180° = 360°.",
        "This applies to all quadrilaterals."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A parallelogram has one angle of 68°. What is the angle adjacent to it?',
      answer: "112",
      hints: [
        "In a parallelogram, consecutive angles are supplementary.",
        "They add to 180°.",
        "180 − 68 = ?"
      ],
      explanation: [
        "Consecutive angles in a parallelogram sum to 180°.",
        "180° − 68° = 112°.",
        "The opposite angle is also 68°."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'In a rectangle, opposite sides are:',
      choices: ["Perpendicular", "Equal and parallel", "Different lengths", "None of these"],
      answer: "Equal and parallel",
      hints: [
        "A rectangle is a parallelogram.",
        "In any parallelogram, opposite sides are equal and parallel.",
        "This is also true for rectangles."
      ],
      explanation: [
        "Opposite sides of a rectangle are equal and parallel.",
        "This is a property inherited from parallelograms.",
        "Additionally, all angles in a rectangle are 90°."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'The angles of a quadrilateral are 85°, 100°, 95°, and x°. Find x.',
      answer: "80",
      hints: [
        "Angles of a quadrilateral sum to 360°.",
        "85 + 100 + 95 = 280.",
        "x = 360 − 280 = ?"
      ],
      explanation: [
        "Sum = 360°.",
        "x = 360° − 85° − 100° − 95° = 80°."
      ]
    },
    {
      type: "mc", difficulty: 1,
      question: 'A rectangle has a length of 16 cm and a width of 9 cm. What is the length of the diagonal? (Hint: use the Pythagorean theorem.)',
      diagram: { type: "rectangle", l: 16, w: 9 },
      choices: ["18.4 cm", "18.9 cm", "20 cm", "25 cm"],
      answer: "18.4 cm",
      hints: [
        "The diagonal forms a right triangle with the length and width.",
        "d² = 16² + 9² = 256 + 81 = 337.",
        "d = √337 ≈ 18.4."
      ],
      explanation: [
        "d² = l² + w² = 256 + 81 = 337.",
        "d = √337 ≈ 18.4 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'Three angles of a quadrilateral are 72°, 108°, and 90°. What is the fourth angle?',
      answer: "90",
      hints: [
        "Quadrilateral angles sum to 360°.",
        "72 + 108 + 90 = 270.",
        "Fourth angle = 360 − 270 = ?"
      ],
      explanation: [
        "Sum of angles = 360°.",
        "Fourth angle = 360° − 270° = 90°."
      ]
    }

,
    {
      type: "mc", difficulty: 2,
      question: 'Can a triangle have sides of lengths 3, 5, and 9?',
      choices: ["Yes", "No, because 3 + 5 < 9", "No, because 3 + 9 < 5", "No, because 5 + 9 < 3"],
      answer: "No, because 3 + 5 < 9",
      hints: [
        "The triangle inequality says any two sides must sum to more than the third.",
        "Check: 3 + 5 = 8. Is 8 > 9?",
        "No — 8 < 9, so these cannot form a triangle."
      ],
      explanation: [
        "Triangle inequality: the sum of any two sides must exceed the third.",
        "3 + 5 = 8 < 9, so these lengths cannot form a triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Can a triangle have sides of lengths 7, 10, and 15?',
      choices: ["Yes", "No, because 7 + 10 < 15", "No, because 7 + 15 < 10", "No, because 10 + 15 < 7"],
      answer: "Yes",
      hints: [
        "Check all three pairs: 7 + 10 = 17 > 15? Yes.",
        "7 + 15 = 22 > 10? Yes.",
        "10 + 15 = 25 > 7? Yes. All pass."
      ],
      explanation: [
        "7 + 10 = 17 > 15 ✓, 7 + 15 = 22 > 10 ✓, 10 + 15 = 25 > 7 ✓.",
        "All pairs satisfy the triangle inequality, so yes."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'The sum of the interior angles of a quadrilateral is 360°. Three angles are 85°, 90°, and 110°. What is the fourth angle?',
      answer: "75",
      hints: [
        "Sum of all angles = 360°.",
        "Add the three known angles: 85 + 90 + 110 = 285.",
        "Fourth angle = 360 − 285 = ?"
      ],
      explanation: [
        "85 + 90 + 110 = 285°.",
        "Fourth angle = 360° − 285° = 75°."
      ]
    }
  ],

  // ---- Topic 5: Finding a Missing Leg (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 10 and one leg 6. What is the other leg?',
      answer: "8",
      hints: [
        "b² = c² − a² = 10² − 6².",
        "= 100 − 36 = 64.",
        "b = √64 = ?"
      ],
      explanation: [
        "b² = c² − a² = 100 − 36 = 64.",
        "b = √64 = 8."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has hypotenuse 17 and one leg 8. What is the other leg?',
      choices: ["13", "14", "15", "16"],
      answer: "15",
      hints: [
        "b² = 17² − 8² = 289 − 64.",
        "= 225.",
        "b = √225 = ?"
      ],
      explanation: [
        "b² = 289 − 64 = 225.",
        "b = √225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 25 and one leg 7. What is the other leg?',
      answer: "24",
      hints: [
        "b² = 25² − 7² = 625 − 49.",
        "= 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 625 − 49 = 576.",
        "b = √576 = 24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 26 and one leg 10. What is the other leg?',
      choices: ["20", "22", "24", "25"],
      answer: "24",
      hints: [
        "b² = 26² − 10² = 676 − 100.",
        "= 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 676 − 100 = 576.",
        "b = √576 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 13 and one leg 12. What is the other leg?',
      answer: "5",
      hints: [
        "b² = 13² − 12² = 169 − 144.",
        "= 25.",
        "b = √25 = ?"
      ],
      explanation: [
        "b² = 169 − 144 = 25.",
        "b = √25 = 5."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 20 and one leg 12. What is the other leg?',
      answer: "16",
      hints: [
        "b² = c² − a² = 20² − 12².",
        "= 400 − 144 = 256.",
        "b = √256 = ?"
      ],
      explanation: [
        "b² = 400 − 144 = 256.",
        "b = √256 = 16."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has hypotenuse 15 and one leg 9. What is the other leg?',
      choices: ["10", "11", "12", "13"],
      answer: "12",
      hints: [
        "b² = 15² − 9² = 225 − 81.",
        "= 144.",
        "b = √144 = ?"
      ],
      explanation: [
        "b² = 225 − 81 = 144.",
        "b = √144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 41 and one leg 40. What is the other leg?',
      answer: "9",
      hints: [
        "b² = 41² − 40² = 1681 − 1600.",
        "= 81.",
        "b = √81 = ?"
      ],
      explanation: [
        "b² = 1681 − 1600 = 81.",
        "b = √81 = 9."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 29 and one leg 21. What is the other leg?',
      answer: "20",
      hints: [
        "b² = 29² − 21² = 841 − 441.",
        "= 400.",
        "b = √400 = ?"
      ],
      explanation: [
        "b² = 841 − 441 = 400.",
        "b = √400 = 20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 34 and one leg 16. What is the other leg?',
      choices: ["28", "29", "30", "32"],
      answer: "30",
      hints: [
        "b² = 34² − 16² = 1156 − 256.",
        "= 900.",
        "b = √900 = ?"
      ],
      explanation: [
        "b² = 1156 − 256 = 900.",
        "b = √900 = 30."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 37 and one leg 35. What is the other leg?',
      answer: "12",
      hints: [
        "b² = 37² − 35² = 1369 − 1225.",
        "= 144.",
        "b = √144 = ?"
      ],
      explanation: [
        "b² = 1369 − 1225 = 144.",
        "b = √144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 50 and one leg 30. What is the other leg?',
      answer: "40",
      hints: [
        "b² = c² − a² = 50² − 30².",
        "= 2500 − 900 = 1600.",
        "b = √1600 = ?"
      ],
      explanation: [
        "b² = 2500 − 900 = 1600.",
        "b = √1600 = 40."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 61 and one leg 11. What is the other leg?',
      choices: ["56", "58", "60", "62"],
      answer: "60",
      hints: [
        "b² = 61² − 11² = 3721 − 121.",
        "= 3600.",
        "b = √3600 = ?"
      ],
      explanation: [
        "b² = 3721 − 121 = 3600.",
        "b = √3600 = 60."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 45 and one leg 27. What is the other leg?',
      answer: "36",
      hints: [
        "b² = 45² − 27² = 2025 − 729.",
        "= 1296.",
        "b = √1296 = ?"
      ],
      explanation: [
        "b² = 2025 − 729 = 1296.",
        "b = √1296 = 36."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "c² = a² + b² = 11² + 60².",
        "= 121 + 3600 = 3721.",
        "c = √3721 = ?"
      ],
      explanation: [
        "c² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 20 and one leg 12. What is the other leg?',
      choices: ["14", "15", "16", "17"],
      answer: "16",
      hints: [
        "b² = c² − a² = 20² − 12².",
        "= 400 − 144 = 256.",
        "b = √256 = ?"
      ],
      explanation: [
        "b² = 400 − 144 = 256.",
        "b = √256 = 16."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs of 9 and 40. What is the hypotenuse?',
      answer: "41",
      hints: [
        "c² = a² + b² = 9² + 40².",
        "= 81 + 1600 = 1681.",
        "c = √1681 = ?"
      ],
      explanation: [
        "c² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 25 and one leg 20. What is the other leg?',
      answer: "15",
      hints: [
        "b² = c² − a² = 25² − 20².",
        "= 625 − 400 = 225.",
        "b = √225 = ?"
      ],
      explanation: [
        "b² = 625 − 400 = 225.",
        "b = √225 = 15."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 65 and one leg 33. What is the other leg?',
      choices: ["52", "54", "56", "58"],
      answer: "56",
      hints: [
        "b² = 65² − 33² = 4225 − 1089.",
        "= 3136.",
        "b = √3136 = ?"
      ],
      explanation: [
        "b² = 4225 − 1089 = 3136.",
        "b = √3136 = 56."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 53 and one leg 28. What is the other leg?',
      answer: "45",
      hints: [
        "b² = 53² − 28² = 2809 − 784.",
        "= 2025.",
        "b = √2025 = ?"
      ],
      explanation: [
        "b² = 2809 − 784 = 2025.",
        "b = √2025 = 45."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 26 and one leg 24. What is the other leg?',
      answer: "10",
      hints: [
        "b² = c² − a² = 26² − 24².",
        "= 676 − 576 = 100.",
        "b = √100 = ?"
      ],
      explanation: [
        "b² = 676 − 576 = 100.",
        "b = √100 = 10."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 50 and one leg 14. What is the other leg?',
      choices: ["44", "46", "48", "50"],
      answer: "48",
      hints: [
        "b² = 50² − 14² = 2500 − 196.",
        "= 2304.",
        "b = √2304 = ?"
      ],
      explanation: [
        "b² = 2500 − 196 = 2304.",
        "b = √2304 = 48."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 58 and one leg 42. What is the other leg?',
      answer: "40",
      hints: [
        "b² = 58² − 42² = 3364 − 1764.",
        "= 1600.",
        "b = √1600 = ?"
      ],
      explanation: [
        "b² = 3364 − 1764 = 1600.",
        "b = √1600 = 40."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
      answer: "12",
      hints: [
        "Use a² + b² = c² → b² = c² − a².",
        "b² = 13² − 5² = 169 − 25 = 144.",
        "b = √144 = ?"
      ],
      explanation: [
        "b² = 169 − 25 = 144.",
        "b = √144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 17 and one leg 8. What is the other leg?',
      choices: ["12", "13", "14", "15"],
      answer: "15",
      hints: [
        "b² = c² − a² = 17² − 8².",
        "= 289 − 64 = 225.",
        "b = √225 = ?"
      ],
      explanation: [
        "b² = 289 − 64 = 225.",
        "b = √225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 25 and one leg 7. What is the other leg?',
      answer: "24",
      hints: [
        "b² = c² − a² = 25² − 7².",
        "= 625 − 49 = 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 625 − 49 = 576.",
        "b = √576 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 25 and one leg 7. What is the other leg?',
      answer: "24",
      hints: [
        "a² + b² = c² → b² = c² − a².",
        "b² = 625 − 49 = 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 25² − 7² = 625 − 49 = 576.",
        "b = √576 = 24."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 26 and one leg 10. What is the other leg?',
      choices: ["20", "22", "24", "26"],
      answer: "24",
      hints: [
        "b² = c² − a² = 676 − 100.",
        "b² = 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 26² − 10² = 676 − 100 = 576.",
        "b = √576 = 24."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 20 and one leg 12. What is the other leg?',
      answer: "16",
      hints: [
        "b² = c² − a² = 400 − 144.",
        "b² = 256.",
        "b = √256 = ?"
      ],
      explanation: [
        "b² = 20² − 12² = 400 − 144 = 256.",
        "b = √256 = 16."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
      answer: "12",
      hints: [
        "b² = c² − a² = 13² − 5².",
        "= 169 − 25 = 144.",
        "b = √144 = ?"
      ],
      explanation: [
        "b² = c² − a² = 169 − 25 = 144.",
        "b = √144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 20 and one leg 12. What is the other leg?',
      choices: ["14", "15", "16", "18"],
      answer: "16",
      hints: [
        "b² = 20² − 12² = 400 − 144.",
        "= 256.",
        "b = √256 = ?"
      ],
      explanation: [
        "b² = 400 − 144 = 256.",
        "b = √256 = 16."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 29 and one leg 20. What is the other leg?',
      answer: "21",
      hints: [
        "b² = 29² − 20² = 841 − 400.",
        "= 441.",
        "b = √441 = ?"
      ],
      explanation: [
        "b² = 841 − 400 = 441.",
        "b = √441 = 21."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has a hypotenuse of 25 and one leg of 7. What is the other leg?',
      answer: "24",
      hints: [
        "a² + b² = c² → a² = c² − b².",
        "a² = 25² − 7² = 625 − 49 = 576.",
        "a = √576 = ?"
      ],
      explanation: [
        "a² = 25² − 7² = 625 − 49 = 576.",
        "a = √576 = 24.",
        "This is the 7-24-25 Pythagorean triple."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has a hypotenuse of 20 and one leg of 12. What is the other leg?',
      choices: ["14", "15", "16", "18"],
      answer: "16",
      hints: [
        "a² = c² − b² = 20² − 12².",
        "= 400 − 144 = 256.",
        "a = √256 = ?"
      ],
      explanation: [
        "a² = 20² − 12² = 400 − 144 = 256.",
        "a = √256 = 16.",
        "This is the 3-4-5 triple scaled by 4: 12-16-20."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has a hypotenuse of 41 and one leg of 9. What is the other leg?',
      answer: "40",
      hints: [
        "a² = c² − b² = 41² − 9².",
        "= 1681 − 81 = 1600.",
        "a = √1600 = ?"
      ],
      explanation: [
        "a² = 41² − 9² = 1681 − 81 = 1600.",
        "a = √1600 = 40.",
        "9-40-41 is a Pythagorean triple."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rightTriangle", a: 0, b: 9, c: 15, showUnknown: "a" },
      question: 'A right triangle has a hypotenuse of 15 and one leg of 9. Find the other leg.',
      answer: "12",
      hints: [
        "a² + b² = c² → a² + 81 = 225.",
        "a² = 225 − 81 = 144.",
        "a = √144 = ?"
      ],
      explanation: [
        "a² = c² − b² = 225 − 81 = 144.",
        "a = √144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "rightTriangle", a: 0, b: 5, c: 13, showUnknown: "a" },
      question: 'A right triangle has hypotenuse 13 and one leg 5. What is the other leg?',
      choices: ["8", "10", "11", "12"],
      answer: "12",
      hints: [
        "a² + 25 = 169.",
        "a² = 169 − 25 = 144.",
        "a = √144 = ?"
      ],
      explanation: [
        "a² = 13² − 5² = 169 − 25 = 144.",
        "a = √144 = 12."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "rightTriangle", a: 0, b: 20, c: 25, showUnknown: "a" },
      question: 'A ladder reaches 20 feet up a wall. The base of the ladder is 15 feet from the wall. How long is the ladder?',
      answer: "25",
      hints: [
        "This forms a right triangle: wall = 20, ground = 15, ladder = ?",
        "c² = 20² + 15² = 400 + 225 = 625.",
        "c = √625 = ?"
      ],
      explanation: [
        "c² = 20² + 15² = 400 + 225 = 625.",
        "c = √625 = 25 feet."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has hypotenuse 13 and one leg 5. Find the other leg.',
      diagram: { type: "rightTriangle", a: 5, b: 12, c: 13, showUnknown: "b" },
      answer: "12",
      hints: [
        "a² + b² = c² → b² = c² − a².",
        "b² = 169 − 25 = 144.",
        "b = √144 = ?"
      ],
      explanation: [
        "b² = 13² − 5² = 169 − 25 = 144.",
        "b = √144 = 12."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A right triangle has hypotenuse 17 and one leg 8. What is the other leg?',
      diagram: { type: "rightTriangle", a: 8, b: 15, c: 17, showUnknown: "b" },
      choices: ["9", "12", "15", "16"],
      answer: "15",
      hints: [
        "b² = c² − a² = 289 − 64.",
        "b² = 225.",
        "b = √225 = ?"
      ],
      explanation: [
        "b² = 17² − 8² = 289 − 64 = 225.",
        "b = √225 = 15."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 26 and one leg 10. Find the other leg.',
      diagram: { type: "rightTriangle", a: 10, b: 24, c: 26, showUnknown: "b" },
      answer: "24",
      hints: [
        "b² = c² − a².",
        "b² = 676 − 100 = 576.",
        "b = √576 = ?"
      ],
      explanation: [
        "b² = 26² − 10² = 676 − 100 = 576.",
        "b = √576 = 24."
      ]
    }
  ],

  // ---- Topic 6: Verifying Right Triangles (diff 2-3) ----
  [
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 9, 12, and 15 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check if a² + b² = c².",
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Equal?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Since they are equal, it IS a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 7, 10, and 12 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: 7² + 10² = 49 + 100 = 149.",
        "12² = 144.",
        "149 ≠ 144."
      ],
      explanation: [
        "7² + 10² = 149 but 12² = 144.",
        "Since 149 ≠ 144, it is NOT a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 20, 21, and 29 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 20² + 21² = 400 + 441.",
        "= 841.",
        "29² = 841. Match?"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "29² = 841. Equal → it IS a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 11, 60, and 61, compute <span class="math">11² + 60²</span>.',
      answer: "3721",
      hints: [
        "11² = 121.",
        "60² = 3600.",
        "121 + 3600 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "Since 61² = 3721, this is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'To verify a right triangle, you check if:',
      choices: ["a + b = c", "a² + b² = c²", "a × b = c", "a² − b² = c²"],
      answer: "a² + b² = c²",
      hints: [
        "This is the Pythagorean theorem.",
        "It relates the squares of the sides.",
        "The sum of squares of the legs equals the square of the hypotenuse."
      ],
      explanation: [
        "The Pythagorean theorem states a² + b² = c².",
        "If this equation holds, the triangle is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 10, 24, and 26 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 10² + 24² = 100 + 576.",
        "= 676.",
        "26² = 676. Equal?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "26² = 676. Since they are equal, it IS a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 6, 9, and 12 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: 6² + 9² = 36 + 81 = 117.",
        "12² = 144.",
        "117 ≠ 144."
      ],
      explanation: [
        "6² + 9² = 117 but 12² = 144.",
        "Since 117 ≠ 144, it is NOT a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 15, 36, and 39, compute <span class="math">15² + 36²</span>.',
      answer: "1521",
      hints: [
        "15² = 225.",
        "36² = 1296.",
        "225 + 1296 = ?"
      ],
      explanation: [
        "15² + 36² = 225 + 1296 = 1521.",
        "Since 39² = 1521, this is a right triangle (a scaled 5-12-13 triple)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 16, 30, and 34 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 16² + 30² = 256 + 900.",
        "= 1156.",
        "34² = 1156. Equal?"
      ],
      explanation: [
        "16² + 30² = 256 + 900 = 1156.",
        "34² = 1156. Since they are equal, it IS a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 5, 8, and 10 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: 5² + 8² = 25 + 64 = 89.",
        "10² = 100.",
        "89 ≠ 100."
      ],
      explanation: [
        "5² + 8² = 89 but 10² = 100.",
        "Since 89 ≠ 100, it is NOT a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 28, 45, and 53, compute <span class="math">28² + 45²</span>.',
      answer: "2809",
      hints: [
        "28² = 784.",
        "45² = 2025.",
        "784 + 2025 = ?"
      ],
      explanation: [
        "28² + 45² = 784 + 2025 = 2809.",
        "Since 53² = 2809, this is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 8, 15, and 17 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 8² + 15² = 64 + 225 = 289.",
        "17² = 289.",
        "Equal?"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "17² = 289. Since they are equal, it IS a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In which quadrilateral do the diagonals always bisect each other at right angles?',
      choices: ["Rectangle", "Parallelogram", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "In a parallelogram, diagonals bisect each other but not necessarily at right angles.",
        "A rectangle has equal diagonals but they are not perpendicular.",
        "A rhombus has perpendicular bisecting diagonals."
      ],
      explanation: [
        "In a rhombus, diagonals bisect each other at right angles.",
        "This is a special property of rhombi (and squares)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has length 15 cm and width 8 cm. What is the length of its diagonal? (Give exact answer.)',
      answer: "17",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 15² + 8² = 225 + 64 = 289.",
        "d = √289 = ?"
      ],
      explanation: [
        "d² = 15² + 8² = 225 + 64 = 289.",
        "d = √289 = 17 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In which quadrilateral are the diagonals always equal in length?',
      choices: ["Rhombus", "Parallelogram", "Rectangle", "General quadrilateral"],
      answer: "Rectangle",
      hints: [
        "A parallelogram does not always have equal diagonals.",
        "A rhombus does not always have equal diagonals.",
        "A rectangle always does."
      ],
      explanation: [
        "In a rectangle, the diagonals are always equal in length.",
        "This follows from the Pythagorean theorem applied to the sides."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 11, 13, and 18 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: 11² + 13² = 121 + 169 = 290.",
        "18² = 324.",
        "290 ≠ 324."
      ],
      explanation: [
        "11² + 13² = 290 but 18² = 324.",
        "Since 290 ≠ 324, it is NOT a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 9, 40, and 41, compute <span class="math">9² + 40²</span>.',
      answer: "1681",
      hints: [
        "9² = 81.",
        "40² = 1600.",
        "81 + 1600 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "Since 41² = 1681, this is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 12, 16, and 20 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 12² + 16² = 144 + 256 = 400.",
        "20² = 400.",
        "Equal?"
      ],
      explanation: [
        "12² + 16² = 144 + 256 = 400.",
        "20² = 400. Since they are equal, it IS a right triangle (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 14, 18, and 23 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: 14² + 18² = 196 + 324 = 520.",
        "23² = 529.",
        "520 ≠ 529."
      ],
      explanation: [
        "14² + 18² = 520 but 23² = 529.",
        "Since 520 ≠ 529, it is NOT a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 24, 45, and 51, compute <span class="math">24² + 45²</span>.',
      answer: "2601",
      hints: [
        "24² = 576.",
        "45² = 2025.",
        "576 + 2025 = ?"
      ],
      explanation: [
        "24² + 45² = 576 + 2025 = 2601.",
        "Since 51² = 2601, this is a right triangle (a scaled 8-15-17 triple)."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 7, 24, and 25 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 7² + 24² = 49 + 576.",
        "= 625.",
        "25² = 625. Equal?"
      ],
      explanation: [
        "7² + 24² = 49 + 576 = 625.",
        "25² = 625. Since they are equal, it IS a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 20, 48, and 52, compute <span class="math">20² + 48²</span>.',
      answer: "2704",
      hints: [
        "20² = 400.",
        "48² = 2304.",
        "400 + 2304 = ?"
      ],
      explanation: [
        "20² + 48² = 400 + 2304 = 2704.",
        "Since 52² = 2704, this is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 10, 15, and 20 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: 10² + 15² = 100 + 225 = 325.",
        "20² = 400.",
        "325 ≠ 400."
      ],
      explanation: [
        "10² + 15² = 325 but 20² = 400.",
        "Since 325 ≠ 400, it is NOT a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 9, 12, and 15 a right triangle?',
      choices: ["Yes", "No", "Not enough information", "Only if it has a 90° angle"],
      answer: "Yes",
      hints: [
        "Check if a² + b² = c² with the longest side as c.",
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Equal!"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225 = 15².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 10, 24, and 26, compute <span class="math">a^2 + b^2</span> using the two shorter sides.',
      answer: "676",
      hints: [
        "The two shorter sides are 10 and 24.",
        "10² + 24² = 100 + 576.",
        "= 676."
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "Since 26² = 676 also, this is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 7, 10, and 12 a right triangle?',
      choices: ["Yes", "No", "Only if one angle is 90°", "Cannot determine"],
      answer: "No",
      hints: [
        "Check if a² + b² = c² with c = 12.",
        "7² + 10² = 49 + 100 = 149.",
        "12² = 144. Are they equal?"
      ],
      explanation: [
        "7² + 10² = 149 ≠ 144 = 12².",
        "Since a² + b² ≠ c², it is NOT a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 9, 12, and 15 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: does a² + b² = c²?",
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Do they match?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Since 225 = 225, it is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 11, 13, and 17 a right triangle?',
      choices: ["Yes", "No"],
      answer: "No",
      hints: [
        "Check: does a² + b² = c²?",
        "11² + 13² = 121 + 169 = 290.",
        "17² = 289. Do they match?"
      ],
      explanation: [
        "11² + 13² = 121 + 169 = 290.",
        "17² = 289. Since 290 ≠ 289, it is NOT a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has sides 10, 24, and <span class="math">c</span>. For it to be a right triangle, what must <span class="math">c</span> be?',
      answer: "26",
      hints: [
        "For a right triangle: a² + b² = c².",
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = ?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "c = √676 = 26."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 8, 15, and 17 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check if a² + b² = c².",
        "8² + 15² = 64 + 225 = 289.",
        "17² = 289. Equal?"
      ],
      explanation: [
        "8² + 15² = 64 + 225 = 289.",
        "17² = 289. Since they are equal, it IS a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 10, 24, and 26 a right triangle?',
      choices: ["Yes", "No"],
      answer: "Yes",
      hints: [
        "Check: 10² + 24² = 100 + 576.",
        "= 676.",
        "26² = 676. Match?"
      ],
      explanation: [
        "10² + 24² = 100 + 576 = 676.",
        "26² = 676. Equal → it IS a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'For a triangle with sides 9, 40, and 41, compute <span class="math">9² + 40²</span>.',
      answer: "1681",
      hints: [
        "9² = 81.",
        "40² = 1600.",
        "81 + 1600 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "41² = 1681 also, so this IS a right triangle."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 11, 60, and 61 a right triangle?',
      choices: ["Yes", "No", "Cannot be determined", "Only if isosceles"],
      answer: "Yes",
      hints: [
        "Check: does a² + b² = c²?",
        "11² + 60² = 121 + 3600 = 3721.",
        "61² = 3721. Equal? ✓"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "61² = 3721.",
        "Since a² + b² = c², this IS a right triangle."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 10, 15, and 20 a right triangle?',
      choices: ["Yes", "No", "Cannot be determined", "Only if equilateral"],
      answer: "No",
      hints: [
        "Check: does a² + b² = c²?",
        "10² + 15² = 100 + 225 = 325.",
        "20² = 400. Is 325 = 400?"
      ],
      explanation: [
        "10² + 15² = 100 + 225 = 325.",
        "20² = 400.",
        "Since 325 ≠ 400, this is NOT a right triangle."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A triangle has sides 9, 40, and 41. What is <span class="math">9^2 + 40^2</span>?',
      answer: "1681",
      hints: [
        "9² = 81.",
        "40² = 1600.",
        "81 + 1600 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "Since 41² = 1681 as well, this is a right triangle.",
        "9-40-41 is a Pythagorean triple."
      ]
    }
,
    {
      type: "mc", difficulty: 2,
      question: 'Is a triangle with sides 11, 60, and 61 a right triangle?',
      choices: ["Yes", "No", "Cannot determine", "Only if it has a right angle mark"],
      answer: "Yes",
      hints: [
        "Check if a² + b² = c² (use the two shorter sides as a, b).",
        "11² + 60² = 121 + 3600 = 3721.",
        "61² = 3721. Do they match?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "61² = 3721. Since they are equal, this IS a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has sides 9, 11, and 15. Is it a right triangle?',
      choices: ["Yes", "No", "Cannot determine", "It is obtuse"],
      answer: "No",
      hints: [
        "Check: 9² + 11² = 81 + 121 = 202.",
        "15² = 225.",
        "202 ≠ 225, so it is NOT a right triangle."
      ],
      explanation: [
        "9² + 11² = 81 + 121 = 202.",
        "15² = 225. Since 202 ≠ 225, this is NOT a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Is a triangle with sides 20, 21, and 29 a right triangle?',
      choices: ["Yes", "No", "Cannot determine", "It is acute"],
      answer: "Yes",
      hints: [
        "Check: 20² + 21² = 400 + 441 = ?",
        "= 841. And 29² = 841.",
        "They match!"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "29² = 841. Since they are equal, it IS a right triangle."
      ]
    }

,
    {
      type: "mc", difficulty: 2,
      question: 'Which property proves two triangles are congruent if all three pairs of corresponding sides are equal?',
      choices: ["SSS", "SAS", "ASA", "AAS"],
      answer: "SSS",
      hints: [
        "SSS stands for Side-Side-Side.",
        "If all three sides match, the triangles must be identical.",
        "This is the SSS congruence property."
      ],
      explanation: [
        "SSS (Side-Side-Side) states that if all three sides of one triangle equal three sides of another, the triangles are congruent.",
        "No angle measurement is needed."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Two triangles share a side, and each has a right angle at that shared side. The hypotenuses are equal. Which congruence rule applies?',
      choices: ["SSS", "SAS", "ASA", "HL (Hypotenuse-Leg)"],
      answer: "HL (Hypotenuse-Leg)",
      hints: [
        "Both are right triangles with equal hypotenuses and a shared leg.",
        "For right triangles, there is a special rule.",
        "HL means Hypotenuse-Leg."
      ],
      explanation: [
        "The HL (Hypotenuse-Leg) theorem states that if two right triangles have equal hypotenuses and one equal leg, they are congruent.",
        "This only works for right triangles."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A triangle has sides 9, 12, and 15. Is it a right triangle?',
      diagram: { type: "rightTriangle", a: 9, b: 12, c: 15, showUnknown: "c" },
      choices: ["Yes", "No", "Cannot be determined", "Only if it has a 90° angle"],
      answer: "Yes",
      hints: [
        "Check if a² + b² = c² (use the largest side as c).",
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Are they equal?"
      ],
      explanation: [
        "9² + 12² = 81 + 144 = 225.",
        "15² = 225. Since 225 = 225, it is a right triangle."
      ]
    }
  ],

  // ---- Topic 7: Word Problems (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A 13-foot ladder leans against a wall. The base is 5 feet from the wall. How high up the wall does it reach?',
      answer: "12",
      hints: [
        "The ladder is the hypotenuse (13 ft).",
        "The distance from the wall is one leg (5 ft).",
        "h² = 13² − 5² = 169 − 25 = 144."
      ],
      explanation: [
        "h² = 13² − 5² = 169 − 25 = 144.",
        "h = √144 = 12 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular field is 40 m long and 30 m wide. What is the diagonal distance?',
      choices: ["45 m", "50 m", "55 m", "60 m"],
      answer: "50 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = ?"
      ],
      explanation: [
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = 50 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A kite string is 65 m long. The kite is directly above a point 25 m from where you stand. How high is the kite?',
      answer: "60",
      hints: [
        "The string is the hypotenuse (65 m).",
        "The horizontal distance is 25 m.",
        "h² = 65² − 25² = 4225 − 625 = 3600."
      ],
      explanation: [
        "h² = 65² − 25² = 4225 − 625 = 3600.",
        "h = √3600 = 60 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A TV screen is 36 inches wide and 27 inches tall. What is the diagonal size?',
      choices: ["40 in", "42 in", "45 in", "48 in"],
      answer: "45 in",
      hints: [
        "d² = 36² + 27².",
        "= 1296 + 729 = 2025.",
        "d = √2025 = ?"
      ],
      explanation: [
        "d² = 36² + 27² = 1296 + 729 = 2025.",
        "d = √2025 = 45 inches."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A ship sails 24 km north and then 10 km east. How far is it from the starting point?',
      answer: "26",
      hints: [
        "The path forms a right triangle.",
        "d² = 24² + 10² = 576 + 100.",
        "= 676 → d = √676 = ?"
      ],
      explanation: [
        "d² = 24² + 10² = 576 + 100 = 676.",
        "d = √676 = 26 km."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rope is 20 ft long and is tied to the top of a pole 16 ft tall. How far from the base of the pole does the rope reach on the ground?',
      answer: "12",
      hints: [
        "The rope is the hypotenuse (20 ft), the pole is one leg (16 ft).",
        "d² = 20² − 16² = 400 − 256.",
        "= 144 → d = √144 = ?"
      ],
      explanation: [
        "d² = 20² − 16² = 400 − 256 = 144.",
        "d = √144 = 12 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A window is 15 feet above the ground. A ramp from the ground to the window is 17 feet long. How far is the base of the ramp from the building?',
      choices: ["6 ft", "7 ft", "8 ft", "9 ft"],
      answer: "8 ft",
      hints: [
        "The ramp is the hypotenuse (17), the height is one leg (15).",
        "d² = 17² − 15² = 289 − 225.",
        "= 64 → d = √64 = ?"
      ],
      explanation: [
        "d² = 17² − 15² = 289 − 225 = 64.",
        "d = √64 = 8 ft."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A 10-foot ladder leans against a wall. The base is 6 feet from the wall. How high up the wall does it reach?',
      answer: "8",
      hints: [
        "The ladder is the hypotenuse (10 ft).",
        "The distance from the wall is one leg (6 ft).",
        "h² = 10² − 6² = 100 − 36 = 64."
      ],
      explanation: [
        "h² = 10² − 6² = 100 − 36 = 64.",
        "h = √64 = 8 ft."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A baseball diamond is a square with sides of 90 feet. What is the distance from home plate to second base (the diagonal)?',
      answer: "127.28",
      hints: [
        "The diagonal of a square with side s is s√2.",
        "d = 90 × √2 ≈ 90 × 1.414.",
        "≈ 127.28."
      ],
      explanation: [
        "d² = 90² + 90² = 8100 + 8100 = 16200.",
        "d = √16200 ≈ 127.28 feet."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular park is 60 m long and 80 m wide. What is the diagonal walking path?',
      choices: ["90 m", "95 m", "100 m", "110 m"],
      answer: "100 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 60² + 80² = 3600 + 6400 = 10000.",
        "d = √10000 = ?"
      ],
      explanation: [
        "d² = 60² + 80² = 3600 + 6400 = 10000.",
        "d = √10000 = 100 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 5, 7, and 9. Since <span class="math">5^2 + 7^2 = 74</span> and <span class="math">9^2 = 81</span>, the triangle is:',
      choices: ["Right", "Acute", "Obtuse", "Cannot determine"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (longest side squared).",
        "74 < 81, so a² + b² < c².",
        "When a² + b² < c², the triangle is obtuse."
      ],
      explanation: [
        "5² + 7² = 25 + 49 = 74.",
        "9² = 81. Since 74 < 81, a² + b² < c².",
        "The triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'A triangle has sides 6, 8, and 11. Compute <span class="math">a^2 + b^2</span> for the two shorter sides.',
      answer: "100",
      hints: [
        "The two shorter sides are 6 and 8.",
        "6² + 8² = 36 + 64.",
        "= 100."
      ],
      explanation: [
        "6² + 8² = 36 + 64 = 100.",
        "Since 11² = 121 > 100, the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 7, 8, and 10. Since <span class="math">7^2 + 8^2 = 113</span> and <span class="math">10^2 = 100</span>, the triangle is:',
      choices: ["Right", "Acute", "Obtuse", "Cannot determine"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c².",
        "113 > 100, so a² + b² > c².",
        "When a² + b² > c², the triangle is acute."
      ],
      explanation: [
        "7² + 8² = 49 + 64 = 113.",
        "10² = 100. Since 113 > 100, a² + b² > c².",
        "The triangle is acute."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A zip line cable is 50 m long and is anchored 48 m from the base of the tower horizontally. How tall is the tower?',
      answer: "14",
      hints: [
        "The cable is the hypotenuse (50 m), the horizontal distance is one leg (48 m).",
        "h² = 50² − 48² = 2500 − 2304.",
        "= 196 → h = √196 = ?"
      ],
      explanation: [
        "h² = 50² − 48² = 2500 − 2304 = 196.",
        "h = √196 = 14 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A 15-foot ladder leans against a wall. The base is 9 feet from the wall. How high up the wall does it reach?',
      answer: "12",
      hints: [
        "The ladder is the hypotenuse (15 ft).",
        "The distance from the wall is one leg (9 ft).",
        "h² = 15² − 9² = 225 − 81 = 144."
      ],
      explanation: [
        "h² = 15² − 9² = 225 − 81 = 144.",
        "h = √144 = 12 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular garden is 16 m long and 12 m wide. What is the diagonal distance across it?',
      choices: ["18 m", "19 m", "20 m", "21 m"],
      answer: "20 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = ?"
      ],
      explanation: [
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A guy wire is 26 m long and is attached to a pole 24 m tall. How far from the base of the pole is the wire anchored?',
      answer: "10",
      hints: [
        "The wire is the hypotenuse (26 m), the pole is one leg (24 m).",
        "d² = 26² − 24² = 676 − 576.",
        "= 100 → d = √100 = ?"
      ],
      explanation: [
        "d² = 26² − 24² = 676 − 576 = 100.",
        "d = √100 = 10 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A tree casts a shadow 40 feet long. The distance from the tip of the shadow to the top of the tree is 41 feet. How tall is the tree?',
      answer: "9",
      hints: [
        "The tree height is one leg, the shadow is the other leg (40 ft), and the distance to the top is the hypotenuse (41 ft).",
        "h² = 41² − 40² = 1681 − 1600.",
        "= 81 → h = √81 = ?"
      ],
      explanation: [
        "h² = 41² − 40² = 1681 − 1600 = 81.",
        "h = √81 = 9 feet."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'A rectangular room is 9 m long and 12 m wide. What is the diagonal distance across the room?',
      choices: ["13 m", "14 m", "15 m", "16 m"],
      answer: "15 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 9² + 12² = 81 + 144 = 225.",
        "d = √225 = ?"
      ],
      explanation: [
        "d² = 9² + 12² = 81 + 144 = 225.",
        "d = √225 = 15 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A 25-foot ladder leans against a wall. The base is 7 feet from the wall. How high up the wall does it reach?',
      answer: "24",
      hints: [
        "The ladder is the hypotenuse (25 ft).",
        "The distance from the wall is one leg (7 ft).",
        "h² = 25² − 7² = 625 − 49 = 576."
      ],
      explanation: [
        "h² = 25² − 7² = 625 − 49 = 576.",
        "h = √576 = 24 ft."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A 17-foot ladder leans against a wall. The base is 8 feet from the wall. How high up the wall does it reach?',
      answer: "15",
      hints: [
        "The ladder is the hypotenuse (17 ft).",
        "The distance from the wall is one leg (8 ft).",
        "h² = 17² − 8² = 289 − 64 = 225."
      ],
      explanation: [
        "h² = 17² − 8² = 289 − 64 = 225.",
        "h = √225 = 15 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular field is 48 m long and 14 m wide. What is the diagonal distance?',
      choices: ["48 m", "49 m", "50 m", "52 m"],
      answer: "50 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 48² + 14² = 2304 + 196 = 2500.",
        "d = √2500 = ?"
      ],
      explanation: [
        "d² = 48² + 14² = 2304 + 196 = 2500.",
        "d = √2500 = 50 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A wire is 34 m long and is attached to the top of a pole 30 m tall. How far from the base of the pole is the wire anchored?',
      answer: "16",
      hints: [
        "The wire is the hypotenuse (34 m), the pole is one leg (30 m).",
        "d² = 34² − 30² = 1156 − 900.",
        "= 256 → d = √256 = ?"
      ],
      explanation: [
        "d² = 34² − 30² = 1156 − 900 = 256.",
        "d = √256 = 16 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A ladder leans against a wall. The ladder is 10 ft long, and its base is 6 ft from the wall. How high up the wall does it reach?',
      answer: "8",
      hints: [
        "The ladder, wall, and ground form a right triangle.",
        "h² = 10² − 6² = 100 − 36 = 64.",
        "h = √64 = ?"
      ],
      explanation: [
        "h² = 10² − 6² = 100 − 36 = 64.",
        "h = √64 = 8 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Link walks 9 m north then 40 m east. How far is he from his starting point?',
      choices: ["39 m", "40 m", "41 m", "42 m"],
      answer: "41 m",
      hints: [
        "The path forms a right triangle with legs 9 and 40.",
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = ?"
      ],
      explanation: [
        "d² = 81 + 1600 = 1681.",
        "d = √1681 = 41 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangular field is 16 m by 12 m. What is the length of its diagonal?',
      answer: "20",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = ?"
      ],
      explanation: [
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A 15-ft ladder leans against a wall. Its base is 9 ft from the wall. How high up the wall does it reach?',
      answer: "12",
      hints: [
        "The ladder forms a right triangle.",
        "h² + 9² = 15² → h² = 225 − 81 = 144.",
        "h = √144 = ?"
      ],
      explanation: [
        "h² = 15² − 9² = 225 − 81 = 144.",
        "h = √144 = 12 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular field is 40 m long and 30 m wide. What is the length of the diagonal?',
      choices: ["45 m", "50 m", "55 m", "60 m"],
      answer: "50 m",
      hints: [
        "The diagonal forms a right triangle with length and width.",
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = ?"
      ],
      explanation: [
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = 50 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two friends start at the same point. One walks 16 m north and the other walks 12 m east. How far apart are they?',
      answer: "20",
      hints: [
        "They form a right angle (north and east are perpendicular).",
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = ?"
      ],
      explanation: [
        "d² = 16² + 12² = 256 + 144 = 400.",
        "d = √400 = 20 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A 17-foot ladder leans against a wall. The base is 8 feet from the wall. How high up the wall does it reach?',
      answer: "15",
      hints: [
        "The ladder is the hypotenuse (17 ft).",
        "The distance from the wall is one leg (8 ft).",
        "h² = 17² − 8² = 289 − 64 = 225."
      ],
      explanation: [
        "h² = 17² − 8² = 289 − 64 = 225.",
        "h = √225 = 15 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular field is 48 m long and 14 m wide. What is the diagonal distance?',
      choices: ["48 m", "50 m", "52 m", "54 m"],
      answer: "50 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 48² + 14² = 2304 + 196 = 2500.",
        "d = √2500 = ?"
      ],
      explanation: [
        "d² = 48² + 14² = 2304 + 196 = 2500.",
        "d = √2500 = 50 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A guy wire is 41 m long and is attached to the top of a pole. The base of the wire is 9 m from the pole. How tall is the pole?',
      answer: "40",
      hints: [
        "The wire is the hypotenuse (41 m).",
        "The horizontal distance is 9 m.",
        "h² = 41² − 9² = 1681 − 81 = 1600."
      ],
      explanation: [
        "h² = 41² − 9² = 1681 − 81 = 1600.",
        "h = √1600 = 40 m."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A ladder leans against a wall. The base is 5 m from the wall and the ladder is 13 m long. How high up the wall does it reach?',
      answer: "12",
      hints: [
        "This forms a right triangle: base = 5, hypotenuse = 13.",
        "height² = 13² − 5² = 169 − 25 = 144.",
        "height = √144 = ?"
      ],
      explanation: [
        "height² = 13² − 5² = 169 − 25 = 144.",
        "height = √144 = 12 m.",
        "This is the 5-12-13 Pythagorean triple."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular field is 40 m long and 30 m wide. What is the length of its diagonal?',
      choices: ["45 m", "48 m", "50 m", "55 m"],
      answer: "50 m",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = ?"
      ],
      explanation: [
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = 50 m.",
        "This is the 3-4-5 triple scaled by 10."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A ship sails 24 km east and then 10 km north. How far is it from its starting point?',
      answer: "26",
      hints: [
        "The path forms a right triangle.",
        "d² = 24² + 10² = 576 + 100 = 676.",
        "d = √676 = ?"
      ],
      explanation: [
        "The straight-line distance is the hypotenuse.",
        "d² = 24² + 10² = 576 + 100 = 676.",
        "d = √676 = 26 km."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rightTriangle", a: 8, b: 15, c: 17, showUnknown: "c" },
      question: 'A kite string is attached to the ground. The kite is 15 meters above the ground and 8 meters horizontally away. How long is the string?',
      answer: "17",
      hints: [
        "This forms a right triangle: height = 15, horizontal = 8.",
        "c² = 15² + 8² = 225 + 64 = 289.",
        "c = √289 = ?"
      ],
      explanation: [
        "c² = 15² + 8² = 225 + 64 = 289.",
        "c = √289 = 17 meters."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "rightTriangle", a: 12, b: 16, c: 20, showUnknown: "c" },
      question: 'A ramp rises 12 feet over a horizontal distance of 16 feet. How long is the ramp?',
      choices: ["18 ft", "19 ft", "20 ft", "22 ft"],
      answer: "20 ft",
      hints: [
        "Right triangle: rise = 12, run = 16.",
        "c² = 144 + 256 = 400.",
        "c = √400 = ?"
      ],
      explanation: [
        "c² = 12² + 16² = 144 + 256 = 400.",
        "c = √400 = 20 ft."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "rightTriangle", a: 24, b: 10, c: 26, showUnknown: "c" },
      question: 'A 26-foot ladder leans against a building. The base is 10 feet from the building. How high up the wall does it reach?',
      answer: "24",
      hints: [
        "Ladder = hypotenuse = 26, base = 10.",
        "height² = 26² − 10² = 676 − 100 = 576.",
        "height = √576 = ?"
      ],
      explanation: [
        "h² = 26² − 10² = 676 − 100 = 576.",
        "h = √576 = 24 feet."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'A ladder 10 ft long leans against a wall. The base is 6 ft from the wall. How high up the wall does the ladder reach?',
      diagram: { type: "rightTriangle", a: 6, b: 8, c: 10, showUnknown: "b" },
      answer: "8",
      hints: [
        "The ladder, wall, and ground form a right triangle.",
        "b² = 10² − 6² = 100 − 36 = 64.",
        "b = √64 = ?"
      ],
      explanation: [
        "This is a right triangle: leg = 6, hypotenuse = 10.",
        "b² = 100 − 36 = 64 → b = 8 ft."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rectangular field is 40 m by 30 m. A diagonal path cuts across it. How long is the path?',
      diagram: { type: "rightTriangle", a: 30, b: 40, c: 50, showUnknown: "c" },
      choices: ["35 m", "45 m", "50 m", "70 m"],
      answer: "50 m",
      hints: [
        "The diagonal of a rectangle forms a right triangle with the sides.",
        "d² = 40² + 30² = 1600 + 900.",
        "d² = 2500 → d = ?"
      ],
      explanation: [
        "d² = 40² + 30² = 1600 + 900 = 2500.",
        "d = √2500 = 50 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'Two ships leave a dock. One sails 9 miles north and the other 12 miles east. How far apart are they?',
      diagram: { type: "rightTriangle", a: 9, b: 12, c: 15, showUnknown: "c" },
      answer: "15",
      hints: [
        "North and east are perpendicular, forming a right triangle.",
        "d² = 9² + 12² = 81 + 144 = 225.",
        "d = √225 = ?"
      ],
      explanation: [
        "The paths form a right triangle.",
        "d² = 81 + 144 = 225 → d = 15 miles."
      ]
    }
  ],

  // ---- Topic 8: More Pythagorean Problems (diff 2-3) ----
  [
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 12 and 16. What is the hypotenuse?',
      answer: "20",
      hints: [
        "12² + 16² = 144 + 256.",
        "= 400.",
        "√400 = ?"
      ],
      explanation: [
        "12² + 16² = 144 + 256 = 400.",
        "c = √400 = 20."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 3-4-5 scaled by 7 gives:',
      choices: ["14-21-28", "21-28-35", "18-24-30", "15-20-25"],
      answer: "21-28-35",
      hints: [
        "Multiply each by 7: 3×7, 4×7, 5×7.",
        "= 21, 28, 35.",
        "Check: 21² + 28² = 441 + 784 = 1225 = 35²."
      ],
      explanation: [
        "3×7=21, 4×7=28, 5×7=35.",
        "21² + 28² = 441 + 784 = 1225 = 35². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 15 and 36. What is the hypotenuse?',
      answer: "39",
      hints: [
        "15² + 36² = 225 + 1296.",
        "= 1521.",
        "√1521 = ?"
      ],
      explanation: [
        "15² + 36² = 225 + 1296 = 1521.",
        "c = √1521 = 39."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'Which is a scaled version of 5-12-13?',
      choices: ["15-36-39", "10-20-26", "20-48-50", "15-24-27"],
      answer: "15-36-39",
      hints: [
        "Multiply 5-12-13 by 3: 15-36-39.",
        "Check: 15² + 36² = 225 + 1296 = 1521.",
        "39² = 1521. ✓"
      ],
      explanation: [
        "5×3=15, 12×3=36, 13×3=39.",
        "15² + 36² = 1521 = 39². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 20 and 21. What is the hypotenuse?',
      answer: "29",
      hints: [
        "20² + 21² = 400 + 441.",
        "= 841.",
        "√841 = ?"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "11² + 60² = 121 + 3600.",
        "= 3721.",
        "√3721 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'The triple 5-12-13 scaled by 4 gives which hypotenuse?',
      choices: ["48", "50", "52", "56"],
      answer: "52",
      hints: [
        "Multiply each by 4: 5×4, 12×4, 13×4.",
        "= 20, 48, 52.",
        "The hypotenuse = 52."
      ],
      explanation: [
        "5×4=20, 12×4=48, 13×4=52.",
        "20² + 48² = 400 + 2304 = 2704 = 52². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 28 and 45. What is the hypotenuse?',
      answer: "53",
      hints: [
        "28² + 45² = 784 + 2025.",
        "= 2809.",
        "√2809 = ?"
      ],
      explanation: [
        "28² + 45² = 784 + 2025 = 2809.",
        "c = √2809 = 53."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 3-4-5 scaled by 8 gives:',
      choices: ["16-24-32", "24-32-40", "21-32-40", "24-36-40"],
      answer: "24-32-40",
      hints: [
        "Multiply each by 8: 3×8, 4×8, 5×8.",
        "= 24, 32, 40.",
        "Check: 24² + 32² = 576 + 1024 = 1600 = 40²."
      ],
      explanation: [
        "3×8=24, 4×8=32, 5×8=40.",
        "24² + 32² = 576 + 1024 = 1600 = 40². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 16 and 30. What is the hypotenuse?',
      answer: "34",
      hints: [
        "16² + 30² = 256 + 900.",
        "= 1156.",
        "√1156 = ?"
      ],
      explanation: [
        "16² + 30² = 256 + 900 = 1156.",
        "c = √1156 = 34."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 33 and 56. What is the hypotenuse?',
      answer: "65",
      hints: [
        "33² + 56² = 1089 + 3136.",
        "= 4225.",
        "√4225 = ?"
      ],
      explanation: [
        "33² + 56² = 1089 + 3136 = 4225.",
        "c = √4225 = 65."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 24 and 10. What is the hypotenuse?',
      answer: "26",
      hints: [
        "24² + 10² = 576 + 100.",
        "= 676.",
        "√676 = ?"
      ],
      explanation: [
        "24² + 10² = 576 + 100 = 676.",
        "c = √676 = 26."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 8-15-17 scaled by 2 gives:',
      choices: ["14-28-32", "16-28-34", "16-30-34", "12-30-34"],
      answer: "16-30-34",
      hints: [
        "Multiply each by 2: 8×2, 15×2, 17×2.",
        "= 16, 30, 34.",
        "Check: 16² + 30² = 256 + 900 = 1156 = 34²."
      ],
      explanation: [
        "8×2=16, 15×2=30, 17×2=34.",
        "16² + 30² = 256 + 900 = 1156 = 34². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 36 and 15. What is the hypotenuse?',
      answer: "39",
      hints: [
        "36² + 15² = 1296 + 225.",
        "= 1521.",
        "√1521 = ?"
      ],
      explanation: [
        "36² + 15² = 1296 + 225 = 1521.",
        "c = √1521 = 39 (a scaled 5-12-13 triple)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 24 and 32. What is the hypotenuse?',
      answer: "40",
      hints: [
        "24² + 32² = 576 + 1024.",
        "= 1600.",
        "√1600 = ?"
      ],
      explanation: [
        "24² + 32² = 576 + 1024 = 1600.",
        "c = √1600 = 40 (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 7-24-25 scaled by 2 gives:',
      choices: ["12-46-48", "14-48-50", "14-46-50", "12-48-50"],
      answer: "14-48-50",
      hints: [
        "Multiply each by 2: 7×2, 24×2, 25×2.",
        "= 14, 48, 50.",
        "Check: 14² + 48² = 196 + 2304 = 2500 = 50²."
      ],
      explanation: [
        "7×2=14, 24×2=48, 25×2=50.",
        "14² + 48² = 196 + 2304 = 2500 = 50². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 40 and 42. What is the hypotenuse? (Round to the nearest whole number.)',
      answer: "58",
      hints: [
        "40² + 42² = 1600 + 1764.",
        "= 3364.",
        "√3364 = 58 (since 58² = 3364)."
      ],
      explanation: [
        "40² + 42² = 1600 + 1764 = 3364.",
        "c = √3364 = 58."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 18 and 80. What is the hypotenuse?',
      answer: "82",
      hints: [
        "18² + 80² = 324 + 6400.",
        "= 6724.",
        "√6724 = ?"
      ],
      explanation: [
        "18² + 80² = 324 + 6400 = 6724.",
        "c = √6724 = 82."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 3-4-5 scaled by 9 gives:',
      choices: ["24-36-45", "27-36-45", "27-36-42", "21-36-45"],
      answer: "27-36-45",
      hints: [
        "Multiply each by 9: 3×9, 4×9, 5×9.",
        "= 27, 36, 45.",
        "Check: 27² + 36² = 729 + 1296 = 2025 = 45²."
      ],
      explanation: [
        "3×9=27, 4×9=36, 5×9=45.",
        "27² + 36² = 729 + 1296 = 2025 = 45². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 27 and 36. What is the hypotenuse?',
      answer: "45",
      hints: [
        "27² + 36² = 729 + 1296.",
        "= 2025.",
        "√2025 = ?"
      ],
      explanation: [
        "27² + 36² = 729 + 1296 = 2025.",
        "c = √2025 = 45 (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 15 and 36. What is the hypotenuse?',
      answer: "39",
      hints: [
        "15² + 36² = 225 + 1296.",
        "= 1521.",
        "√1521 = ?"
      ],
      explanation: [
        "15² + 36² = 225 + 1296 = 1521.",
        "c = √1521 = 39."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 5-12-13 scaled by 6 gives:',
      choices: ["25-60-65", "30-72-78", "30-60-78", "30-72-76"],
      answer: "30-72-78",
      hints: [
        "Multiply each by 6: 5×6, 12×6, 13×6.",
        "= 30, 72, 78.",
        "Check: 30² + 72² = 900 + 5184 = 6084 = 78²."
      ],
      explanation: [
        "5×6=30, 12×6=72, 13×6=78.",
        "30² + 72² = 6084 = 78². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 33 and 56. What is the hypotenuse?',
      answer: "65",
      hints: [
        "33² + 56² = 1089 + 3136.",
        "= 4225.",
        "√4225 = ?"
      ],
      explanation: [
        "33² + 56² = 1089 + 3136 = 4225.",
        "c = √4225 = 65."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "c² = a² + b² = 11² + 60².",
        "= 121 + 3600 = 3721.",
        "c = √3721 = ?"
      ],
      explanation: [
        "c² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has hypotenuse 20 and one leg 12. What is the other leg?',
      choices: ["14", "15", "16", "17"],
      answer: "16",
      hints: [
        "b² = c² − a² = 20² − 12².",
        "= 400 − 144 = 256.",
        "b = √256 = ?"
      ],
      explanation: [
        "b² = 400 − 144 = 256.",
        "b = √256 = 16."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs of 9 and 40. What is the hypotenuse?',
      answer: "41",
      hints: [
        "c² = a² + b² = 9² + 40².",
        "= 81 + 1600 = 1681.",
        "c = √1681 = ?"
      ],
      explanation: [
        "c² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 11 and <span class="math">b</span>, and hypotenuse 61. Find <span class="math">b</span>.',
      answer: "60",
      hints: [
        "b² = c² − a² = 61² − 11².",
        "b² = 3721 − 121 = 3600.",
        "b = √3600 = ?"
      ],
      explanation: [
        "b² = 61² − 11² = 3721 − 121 = 3600.",
        "b = √3600 = 60."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has legs 20 and 21. What is the hypotenuse?',
      choices: ["27", "28", "29", "30"],
      answer: "29",
      hints: [
        "c² = 20² + 21² = 400 + 441.",
        "c² = 841.",
        "c = √841 = ?"
      ],
      explanation: [
        "c² = 20² + 21² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has hypotenuse 34 and one leg 16. What is the other leg?',
      answer: "30",
      hints: [
        "b² = c² − a² = 34² − 16².",
        "b² = 1156 − 256 = 900.",
        "b = √900 = ?"
      ],
      explanation: [
        "b² = 34² − 16² = 1156 − 256 = 900.",
        "b = √900 = 30."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs 9 and 40. What is the hypotenuse?',
      answer: "41",
      hints: [
        "9² + 40² = 81 + 1600.",
        "= 1681.",
        "√1681 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'The triple 5-12-13 scaled by 4 gives:',
      choices: ["15-36-39", "20-48-52", "25-60-65", "10-24-26"],
      answer: "20-48-52",
      hints: [
        "Multiply each by 4: 5×4, 12×4, 13×4.",
        "= 20, 48, 52.",
        "Check: 20² + 48² = 400 + 2304 = 2704 = 52²."
      ],
      explanation: [
        "5×4=20, 12×4=48, 13×4=52.",
        "20² + 48² = 400 + 2304 = 2704 = 52². ✓"
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "11² + 60² = 121 + 3600.",
        "= 3721.",
        "√3721 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = 61."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A right triangle has legs of 14 and 48. What is the hypotenuse?',
      answer: "50",
      hints: [
        "a² + b² = c².",
        "14² + 48² = 196 + 2304 = 2500.",
        "c = √2500 = ?"
      ],
      explanation: [
        "14² + 48² = 196 + 2304 = 2500.",
        "c = √2500 = 50.",
        "This is the 7-24-25 triple scaled by 2."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A right triangle has a hypotenuse of 34 and one leg of 16. What is the other leg?',
      choices: ["28", "29", "30", "32"],
      answer: "30",
      hints: [
        "a² = c² − b² = 34² − 16².",
        "= 1156 − 256 = 900.",
        "a = √900 = ?"
      ],
      explanation: [
        "a² = 34² − 16² = 1156 − 256 = 900.",
        "a = √900 = 30.",
        "This is the 8-15-17 triple scaled by 2: 16-30-34."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs of 11 and 60. What is the hypotenuse?',
      answer: "61",
      hints: [
        "a² + b² = c².",
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = ?"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721.",
        "c = √3721 = 61.",
        "11-60-61 is a Pythagorean triple."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      diagram: { type: "rightTriangle", a: 10, b: 24, c: 26, showUnknown: "c" },
      question: 'A rectangular field is 24 m long and 10 m wide. How long is the diagonal path across it?',
      answer: "26",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 24² + 10² = 576 + 100 = 676.",
        "d = √676 = ?"
      ],
      explanation: [
        "d² = 24² + 10² = 576 + 100 = 676.",
        "d = √676 = 26 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A staircase goes up 6 feet and over 8 feet. What is the straight-line distance from bottom to top?',
      diagram: { type: "rightTriangle", a: 6, b: 8, c: 10, showUnknown: "c" },
      choices: ["9 ft", "10 ft", "11 ft", "12 ft"],
      answer: "10 ft",
      hints: [
        "Right triangle: 6 and 8 are the legs.",
        "c² = 36 + 64 = 100.",
        "c = √100 = ?"
      ],
      explanation: [
        "c² = 6² + 8² = 36 + 64 = 100.",
        "c = √100 = 10 ft."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      diagram: { type: "rightTriangle", a: 0, b: 40, c: 41, showUnknown: "a" },
      question: 'A telephone pole is supported by a 41-foot guy wire attached to the ground 40 feet from the base. How tall is the pole?',
      answer: "9",
      hints: [
        "Wire = hypotenuse = 41, ground = 40.",
        "pole² = 41² − 40² = 1681 − 1600.",
        "pole² = 81, so pole = ?"
      ],
      explanation: [
        "pole² = 41² − 40² = 1681 − 1600 = 81.",
        "pole = √81 = 9 feet."
      ]
    }

,
    {
      type: "numeric", difficulty: 2,
      question: 'Triangles with sides 3, 4, 5 and 6, 8, x are similar. Find x.',
      diagram: { type: "rightTriangle", a: 6, b: 8, c: 10, showUnknown: "c" },
      answer: "10",
      hints: [
        "If the triangles are similar, sides are in the same ratio.",
        "Scale factor: 6 ÷ 3 = 2.",
        "x = 5 × 2 = ?"
      ],
      explanation: [
        "The scale factor is 6/3 = 2 (or 8/4 = 2).",
        "x = 5 × 2 = 10."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A 45-45-90 triangle has each leg of length 7. What is the hypotenuse?',
      choices: ["7", "7√2", "14", "49"],
      answer: "7√2",
      hints: [
        "In a 45-45-90 triangle, hypotenuse = leg × √2.",
        "Each leg = 7.",
        "Hypotenuse = 7 × √2 = 7√2."
      ],
      explanation: [
        "In a 45-45-90 triangle, hypotenuse = leg × √2.",
        "Hypotenuse = 7√2 ≈ 9.90."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A right triangle has legs 20 and 21. Find the hypotenuse.',
      diagram: { type: "rightTriangle", a: 20, b: 21, c: 29, showUnknown: "c" },
      answer: "29",
      hints: [
        "a² + b² = c².",
        "400 + 441 = 841.",
        "c = √841 = ?"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841.",
        "c = √841 = 29."
      ]
    }
  ],

  // ---- Topic 9: Quadrilateral Diagonals (diff 2-3) ----
  [
    {
      type: "mc", difficulty: 2,
      question: 'In a rhombus, the diagonals:',
      choices: ["Are equal in length", "Bisect each other at right angles", "Are parallel", "Do not intersect"],
      answer: "Bisect each other at right angles",
      hints: [
        "Rhombus diagonals have a special property.",
        "They cross each other at 90°.",
        "They also bisect (cut in half) each other."
      ],
      explanation: [
        "In a rhombus, the diagonals bisect each other at right angles (90°).",
        "This is a key property that distinguishes a rhombus."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 6 cm and 8 cm. What is the length of each side?',
      answer: "5",
      hints: [
        "The diagonals bisect each other at 90°, creating four right triangles.",
        "Each triangle has legs of 3 and 4 (half-diagonals).",
        "Side = √(3² + 4²) = √25 = ?"
      ],
      explanation: [
        "Half-diagonals: 6/2 = 3 and 8/2 = 4.",
        "Side = √(3² + 4²) = √(9 + 16) = √25 = 5 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In a rectangle, the diagonals:',
      choices: ["Are perpendicular", "Are equal in length", "Are different lengths", "Do not bisect each other"],
      answer: "Are equal in length",
      hints: [
        "Think about the symmetry of a rectangle.",
        "Both diagonals connect opposite corners.",
        "They are the same length."
      ],
      explanation: [
        "In a rectangle, the diagonals are equal in length.",
        "They also bisect each other, but are not necessarily perpendicular."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle is 12 cm by 5 cm. What is the length of its diagonal?',
      answer: "13",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 12² + 5² = 144 + 25 = 169.",
        "d = √169 = ?"
      ],
      explanation: [
        "d² = 12² + 5² = 144 + 25 = 169.",
        "d = √169 = 13 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rhombus has diagonals of 10 cm and 24 cm. What is each side?',
      choices: ["11 cm", "12 cm", "13 cm", "14 cm"],
      answer: "13 cm",
      hints: [
        "Half-diagonals: 5 and 12.",
        "Side = √(5² + 12²) = √(25 + 144).",
        "= √169 = ?"
      ],
      explanation: [
        "Half-diagonals: 10/2 = 5 and 24/2 = 12.",
        "Side = √(25 + 144) = √169 = 13 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'Which quadrilateral always has diagonals that are perpendicular?',
      choices: ["Rectangle", "Parallelogram", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "Rectangles have equal diagonals but not necessarily perpendicular.",
        "A rhombus has a special diagonal property.",
        "Its diagonals always cross at 90°."
      ],
      explanation: [
        "In a rhombus, the diagonals are always perpendicular (meet at 90°).",
        "This is not generally true for rectangles, parallelograms, or trapezoids."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 16 cm and 30 cm. What is the length of each side?',
      answer: "17",
      hints: [
        "The diagonals bisect each other at 90°.",
        "Half-diagonals: 16/2 = 8 and 30/2 = 15.",
        "Side = √(8² + 15²) = √(64 + 225) = √289 = ?"
      ],
      explanation: [
        "Half-diagonals: 8 and 15.",
        "Side = √(64 + 225) = √289 = 17 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 9 m by 40 m. What is the length of its diagonal?',
      answer: "41",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = ?"
      ],
      explanation: [
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = 41 m."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 12 cm and 16 cm. What is the length of each side?',
      answer: "10",
      hints: [
        "Half-diagonals: 12/2 = 6 and 16/2 = 8.",
        "Side = √(6² + 8²) = √(36 + 64).",
        "= √100 = ?"
      ],
      explanation: [
        "Half-diagonals: 6 and 8.",
        "Side = √(36 + 64) = √100 = 10 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In a square, the diagonals:',
      choices: ["Are different lengths", "Are equal and perpendicular", "Are parallel", "Do not bisect each other"],
      answer: "Are equal and perpendicular",
      hints: [
        "A square is both a rectangle and a rhombus.",
        "Rectangle diagonals are equal; rhombus diagonals are perpendicular.",
        "A square has both properties."
      ],
      explanation: [
        "In a square, the diagonals are equal (rectangle property) and perpendicular (rhombus property).",
        "They also bisect each other."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle is 7 m by 24 m. What is the length of its diagonal?',
      answer: "25",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 7² + 24² = 49 + 576 = 625.",
        "d = √625 = ?"
      ],
      explanation: [
        "d² = 7² + 24² = 49 + 576 = 625.",
        "d = √625 = 25 m."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 8 m by 15 m. What is the length of its diagonal?',
      answer: "17",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 8² + 15² = 64 + 225 = 289.",
        "d = √289 = ?"
      ],
      explanation: [
        "d² = 8² + 15² = 64 + 225 = 289.",
        "d = √289 = 17 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rhombus has diagonals of 14 cm and 48 cm. What is each side?',
      choices: ["23 cm", "24 cm", "25 cm", "26 cm"],
      answer: "25 cm",
      hints: [
        "Half-diagonals: 7 and 24.",
        "Side = √(7² + 24²) = √(49 + 576).",
        "= √625 = ?"
      ],
      explanation: [
        "Half-diagonals: 14/2 = 7 and 48/2 = 24.",
        "Side = √(49 + 576) = √625 = 25 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 10 cm and 24 cm. What is the length of each side?',
      answer: "13",
      hints: [
        "Half-diagonals: 10/2 = 5 and 24/2 = 12.",
        "Side = √(5² + 12²) = √(25 + 144).",
        "= √169 = ?"
      ],
      explanation: [
        "Half-diagonals: 5 and 12.",
        "Side = √(25 + 144) = √169 = 13 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle is 20 m by 21 m. What is the length of its diagonal?',
      answer: "29",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 20² + 21² = 400 + 441 = 841.",
        "d = √841 = ?"
      ],
      explanation: [
        "d² = 20² + 21² = 400 + 441 = 841.",
        "d = √841 = 29 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In a parallelogram, the diagonals:',
      choices: ["Are always equal", "Bisect each other", "Are always perpendicular", "Never intersect"],
      answer: "Bisect each other",
      hints: [
        "Not all parallelograms have equal diagonals (only rectangles do).",
        "Not all parallelograms have perpendicular diagonals (only rhombi do).",
        "But all parallelogram diagonals share one property."
      ],
      explanation: [
        "In any parallelogram, the diagonals bisect each other (cut each other in half).",
        "Equal diagonals → rectangle. Perpendicular diagonals → rhombus."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 18 cm and 24 cm. What is the length of each side?',
      answer: "15",
      hints: [
        "The diagonals bisect each other at 90°.",
        "Half-diagonals: 18/2 = 9 and 24/2 = 12.",
        "Side = √(9² + 12²) = √(81 + 144) = √225 = ?"
      ],
      explanation: [
        "Half-diagonals: 9 and 12.",
        "Side = √(81 + 144) = √225 = 15 cm."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle is 11 m by 60 m. What is the length of its diagonal?',
      answer: "61",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 11² + 60² = 121 + 3600 = 3721.",
        "d = √3721 = ?"
      ],
      explanation: [
        "d² = 11² + 60² = 121 + 3600 = 3721.",
        "d = √3721 = 61 m."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A rhombus has diagonals of 20 cm and 48 cm. What is each side?',
      choices: ["24 cm", "25 cm", "26 cm", "28 cm"],
      answer: "26 cm",
      hints: [
        "Half-diagonals: 10 and 24.",
        "Side = √(10² + 24²) = √(100 + 576).",
        "= √676 = ?"
      ],
      explanation: [
        "Half-diagonals: 20/2 = 10 and 48/2 = 24.",
        "Side = √(100 + 576) = √676 = 26 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle is 16 m by 30 m. What is the length of its diagonal?',
      answer: "34",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 16² + 30² = 256 + 900 = 1156.",
        "d = √1156 = ?"
      ],
      explanation: [
        "d² = 16² + 30² = 256 + 900 = 1156.",
        "d = √1156 = 34 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In a rectangle, the diagonals:',
      choices: ["Are perpendicular", "Are equal and bisect each other", "Are unequal", "Do not bisect each other"],
      answer: "Are equal and bisect each other",
      hints: [
        "Rectangle diagonals have two key properties.",
        "They are equal in length.",
        "They also bisect each other (cut each other in half)."
      ],
      explanation: [
        "In a rectangle, diagonals are equal in length and bisect each other.",
        "They are NOT perpendicular (unlike in a rhombus)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 24 cm and 10 cm. What is each side?',
      answer: "13",
      hints: [
        "Half-diagonals: 12 and 5.",
        "Side = √(12² + 5²) = √(144 + 25).",
        "= √169 = ?"
      ],
      explanation: [
        "Half-diagonals: 24/2 = 12 and 10/2 = 5.",
        "Side = √(144 + 25) = √169 = 13 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle is 20 m by 21 m. What is the length of its diagonal?',
      answer: "29",
      hints: [
        "d² = 20² + 21² = 400 + 441.",
        "= 841.",
        "d = √841 = ?"
      ],
      explanation: [
        "d² = 400 + 441 = 841.",
        "d = √841 = 29 m."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In which quadrilateral do the diagonals always bisect each other at right angles?',
      choices: ["Rectangle", "Parallelogram", "Rhombus", "Trapezoid"],
      answer: "Rhombus",
      hints: [
        "In a parallelogram, diagonals bisect each other but not necessarily at right angles.",
        "A rectangle has equal diagonals but they are not perpendicular.",
        "A rhombus has perpendicular bisecting diagonals."
      ],
      explanation: [
        "In a rhombus, diagonals bisect each other at right angles.",
        "This is a special property of rhombi (and squares)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has length 15 cm and width 8 cm. What is the length of its diagonal?',
      answer: "17",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "d² = 15² + 8² = 225 + 64 = 289.",
        "d = √289 = ?"
      ],
      explanation: [
        "d² = 15² + 8² = 225 + 64 = 289.",
        "d = √289 = 17 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'In which quadrilateral are the diagonals always equal in length?',
      choices: ["Rhombus", "Parallelogram", "Rectangle", "General quadrilateral"],
      answer: "Rectangle",
      hints: [
        "A parallelogram does not always have equal diagonals.",
        "A rhombus does not always have equal diagonals.",
        "A rectangle always does."
      ],
      explanation: [
        "In a rectangle, the diagonals are always equal in length.",
        "This follows from the Pythagorean theorem applied to the sides."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has length 15 cm and width 8 cm. What is the length of its diagonal? (Round to the nearest whole number.)',
      answer: "17",
      hints: [
        "The diagonal of a rectangle uses the Pythagorean theorem.",
        "d² = 15² + 8² = 225 + 64 = 289.",
        "d = √289 = ?"
      ],
      explanation: [
        "d² = 15² + 8² = 225 + 64 = 289.",
        "d = √289 = 17 cm."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A square has a diagonal of 10 cm. What is the approximate side length? (Use <span class="math">\sqrt{2} \approx 1.414</span>)',
      choices: ["5.0 cm", "6.0 cm", "7.07 cm", "8.0 cm"],
      answer: "7.07 cm",
      hints: [
        "For a square, d = s√2 → s = d ÷ √2.",
        "s = 10 ÷ 1.414.",
        "≈ 7.07."
      ],
      explanation: [
        "s = d / √2 = 10 / 1.414.",
        "≈ 7.07 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has length 20 cm and width 21 cm. What is the length of its diagonal?',
      answer: "29",
      hints: [
        "d² = l² + w² = 400 + 441.",
        "d² = 841.",
        "d = √841 = ?"
      ],
      explanation: [
        "d² = 20² + 21² = 400 + 441 = 841.",
        "d = √841 = 29 cm."
      ]
    },
    {
      type: "mc", difficulty: 2,
      question: 'In a square, the diagonals:',
      choices: ["Are unequal", "Are equal and perpendicular", "Are parallel", "Do not bisect each other"],
      answer: "Are equal and perpendicular",
      hints: [
        "A square is both a rectangle and a rhombus.",
        "Rectangles have equal diagonals; rhombi have perpendicular diagonals.",
        "A square has both properties."
      ],
      explanation: [
        "In a square, the diagonals are equal in length (rectangle property).",
        "They are also perpendicular (rhombus property)."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rhombus has diagonals of 10 cm and 24 cm. What is the length of each side?',
      answer: "13",
      hints: [
        "The diagonals bisect each other at 90°, creating four right triangles.",
        "Each triangle has legs of 5 and 12 (half-diagonals).",
        "Side = √(5² + 12²) = √169 = ?"
      ],
      explanation: [
        "Half-diagonals: 10/2 = 5 and 24/2 = 12.",
        "Side = √(5² + 12²) = √(25 + 144) = √169 = 13 cm."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle is 9 cm by 40 cm. What is the length of its diagonal?',
      answer: "41",
      hints: [
        "Use the Pythagorean theorem.",
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = ?"
      ],
      explanation: [
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = 41 cm."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangle has sides of 9 cm and 40 cm. What is the length of its diagonal?',
      answer: "41",
      hints: [
        "The diagonal of a rectangle forms a right triangle.",
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = ?"
      ],
      explanation: [
        "d² = 9² + 40² = 81 + 1600 = 1681.",
        "d = √1681 = 41 cm.",
        "9-40-41 is a Pythagorean triple."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A square has a side of 7 cm. What is the approximate length of its diagonal? Round to the nearest tenth.',
      choices: ["9.5 cm", "9.9 cm", "10.2 cm", "10.6 cm"],
      answer: "9.9 cm",
      hints: [
        "Diagonal of a square = side × √2.",
        "7 × √2 ≈ 7 × 1.414.",
        "≈ ?"
      ],
      explanation: [
        "d = 7 × √2 ≈ 7 × 1.414 = 9.899.",
        "Rounded to the nearest tenth: 9.9 cm.",
        "Or: d² = 7² + 7² = 98, d = √98 ≈ 9.9."
      ]
    }
,
    {
      type: "numeric", difficulty: 3,
      question: 'A rectangle has a diagonal of 25 cm and one side of 15 cm. What is the other side?',
      answer: "20",
      hints: [
        "The diagonal forms a right triangle with the sides.",
        "side² = 25² − 15² = 625 − 225 = 400.",
        "side = √400 = ?"
      ],
      explanation: [
        "side² = 25² − 15² = 625 − 225 = 400.",
        "side = √400 = 20 cm.",
        "This is a 15-20-25 triangle (3-4-5 scaled by 5)."
      ]
    }
,
    {
      type: "numeric", difficulty: 2,
      question: 'A rectangular TV screen is 48 inches wide and 36 inches tall. What is the length of the diagonal (screen size)?',
      diagram: { type: "rectangle", l: 48, w: 36 },
      answer: "60",
      hints: [
        "The diagonal of a rectangle can be found using the Pythagorean theorem.",
        "d² = 48² + 36² = 2304 + 1296.",
        "d² = 3600, so d = ?"
      ],
      explanation: [
        "d² = 48² + 36² = 2304 + 1296 = 3600.",
        "d = √3600 = 60 inches."
      ]
    },
    {
      type: "mc", difficulty: 2,
      diagram: { type: "rectangle", l: 15, w: 20 },
      question: 'A door is 20 inches wide and 15 inches tall. What is the length of its diagonal?',
      choices: ["20 in", "25 in", "30 in", "35 in"],
      answer: "25 in",
      hints: [
        "Use the Pythagorean theorem.",
        "d² = 20² + 15² = 400 + 225 = 625.",
        "d = √625 = ?"
      ],
      explanation: [
        "d² = 20² + 15² = 400 + 225 = 625.",
        "d = √625 = 25 in."
      ]
    },
    {
      type: "numeric", difficulty: 3,
      question: 'A square has a side length of 7. What is the length of its diagonal? (Round to the nearest tenth.)',
      diagram: { type: "square", s: 7 },
      answer: "9.9",
      hints: [
        "The diagonal of a square forms a right triangle with two sides.",
        "d² = 7² + 7² = 49 + 49 = 98.",
        "d = √98 ≈ ?"
      ],
      explanation: [
        "d² = 7² + 7² = 98.",
        "d = √98 ≈ 9.9."
      ]
    }

,
    {
      type: "mc", difficulty: 2,
      question: 'What is the midpoint of the segment from (2, 8) to (10, 4)?',
      choices: ["(5, 5)", "(6, 6)", "(6, 5)", "(8, 6)"],
      answer: "(6, 6)",
      hints: [
        "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
        "x: (2 + 10)/2 = 6.",
        "y: (8 + 4)/2 = 6."
      ],
      explanation: [
        "Midpoint = ((2+10)/2, (8+4)/2) = (6, 6).",
        "The midpoint is (6, 6)."
      ]
    },
    {
      type: "numeric", difficulty: 2,
      question: 'What is the distance between the points (2, 3) and (6, 6)?',
      answer: "5",
      hints: [
        "Distance = √((x₂−x₁)² + (y₂−y₁)²).",
        "= √((6−2)² + (6−3)²).",
        "= √(16 + 9) = √25 = ?"
      ],
      explanation: [
        "d = √((6−2)² + (6−3)²) = √(16 + 9) = √25.",
        "d = 5 units."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'What is the midpoint of the segment from (−3, 7) to (5, 1)?',
      choices: ["(1, 4)", "(2, 3)", "(1, 3)", "(4, 4)"],
      answer: "(1, 4)",
      hints: [
        "Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).",
        "x: (−3 + 5)/2 = 1.",
        "y: (7 + 1)/2 = 4."
      ],
      explanation: [
        "Midpoint = ((−3+5)/2, (7+1)/2) = (2/2, 8/2) = (1, 4).",
        "The midpoint is (1, 4)."
      ]
    }
  ],

  // ---- Topic 10: Classifying Triangles by Converse (diff 3-4) ----
  [
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 5, 7, and 9. Is it acute, right, or obtuse?',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (where c is the longest side).",
        "5² + 7² = 25 + 49 = 74.",
        "9² = 81. Since 74 < 81, a² + b² < c²."
      ],
      explanation: [
        "5² + 7² = 74 and 9² = 81.",
        "Since 74 < 81 (a² + b² < c²), the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 7, 8, and 10. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c².",
        "7² + 8² = 49 + 64 = 113.",
        "10² = 100. Since 113 > 100, the triangle is …"
      ],
      explanation: [
        "7² + 8² = 113 and 10² = 100.",
        "Since a² + b² > c² (113 > 100), the triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 6, 8, and 11. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Check: 6² + 8² = 36 + 64 = 100.",
        "11² = 121.",
        "100 < 121, so a² + b² < c²."
      ],
      explanation: [
        "6² + 8² = 100 and 11² = 121.",
        "Since 100 < 121 (a² + b² < c²), it is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'If <span class="math">a² + b² > c²</span> (where c is the longest side), the triangle is:',
      choices: ["Right", "Acute", "Obtuse", "Not a triangle"],
      answer: "Acute",
      hints: [
        "The converse of the Pythagorean theorem classifies triangles.",
        "a² + b² = c² → right.",
        "a² + b² > c² → the largest angle is less than 90°."
      ],
      explanation: [
        "When a² + b² > c², all angles are less than 90°.",
        "The triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 9, 40, and 41. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 9² + 40² = 81 + 1600 = 1681.",
        "41² = 1681.",
        "Since they are equal …"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681 = 41².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 10, 15, and 18. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c² (c = 18).",
        "10² + 15² = 100 + 225 = 325.",
        "18² = 324. Since 325 > 324 …"
      ],
      explanation: [
        "10² + 15² = 325 and 18² = 324.",
        "Since 325 > 324 (a² + b² > c²), the triangle is acute (just barely)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 8, 12, and 15. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Check: 8² + 12² = 64 + 144 = 208.",
        "15² = 225.",
        "208 < 225, so a² + b² < c²."
      ],
      explanation: [
        "8² + 12² = 208 and 15² = 225.",
        "Since 208 < 225 (a² + b² < c²), the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 6, 8, and 10. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 6² + 8² = 36 + 64 = 100.",
        "10² = 100.",
        "Since a² + b² = c², the triangle is …"
      ],
      explanation: [
        "6² + 8² = 100 = 10².",
        "Since a² + b² = c², it is a right triangle (a scaled 3-4-5 triple)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 4, 6, and 9. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (c = 9).",
        "4² + 6² = 16 + 36 = 52.",
        "9² = 81. Since 52 < 81 …"
      ],
      explanation: [
        "4² + 6² = 52 and 9² = 81.",
        "Since 52 < 81 (a² + b² < c²), the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'If <span class="math">a² + b² < c²</span> (where c is the longest side), the triangle is:',
      choices: ["Right", "Acute", "Obtuse", "Equilateral"],
      answer: "Obtuse",
      hints: [
        "The converse of the Pythagorean theorem classifies triangles.",
        "a² + b² = c² → right.",
        "a² + b² < c² → the largest angle is more than 90°."
      ],
      explanation: [
        "When a² + b² < c², the angle opposite the longest side is greater than 90°.",
        "The triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 12, 35, and 37. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 12² + 35² = 144 + 1225 = 1369.",
        "37² = 1369.",
        "Since they are equal …"
      ],
      explanation: [
        "12² + 35² = 144 + 1225 = 1369 = 37².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 9, 10, and 12. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c² (c = 12).",
        "9² + 10² = 81 + 100 = 181.",
        "12² = 144. Since 181 > 144 …"
      ],
      explanation: [
        "9² + 10² = 181 and 12² = 144.",
        "Since 181 > 144 (a² + b² > c²), the triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 5, 9, and 11. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Check: 5² + 9² = 25 + 81 = 106.",
        "11² = 121.",
        "106 < 121, so a² + b² < c²."
      ],
      explanation: [
        "5² + 9² = 106 and 11² = 121.",
        "Since 106 < 121 (a² + b² < c²), the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 11, 60, and 61. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 11² + 60² = 121 + 3600 = 3721.",
        "61² = 3721.",
        "Since they are equal …"
      ],
      explanation: [
        "11² + 60² = 121 + 3600 = 3721 = 61².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 13, 14, and 15. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c² (c = 15).",
        "13² + 14² = 169 + 196 = 365.",
        "15² = 225. Since 365 > 225 …"
      ],
      explanation: [
        "13² + 14² = 365 and 15² = 225.",
        "Since 365 > 225 (a² + b² > c²), the triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 7, 10, and 14. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Check: 7² + 10² = 49 + 100 = 149.",
        "14² = 196.",
        "149 < 196, so a² + b² < c²."
      ],
      explanation: [
        "7² + 10² = 149 and 14² = 196.",
        "Since 149 < 196 (a² + b² < c²), it is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 16, 30, and 34. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 16² + 30² = 256 + 900 = 1156.",
        "34² = 1156.",
        "Since they are equal …"
      ],
      explanation: [
        "16² + 30² = 256 + 900 = 1156 = 34².",
        "Since a² + b² = c², it is a right triangle (a scaled 8-15-17 triple)."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 10, 11, and 14. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c² (c = 14).",
        "10² + 11² = 100 + 121 = 221.",
        "14² = 196. Since 221 > 196 …"
      ],
      explanation: [
        "10² + 11² = 221 and 14² = 196.",
        "Since 221 > 196 (a² + b² > c²), the triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 8, 9, and 13. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Check: 8² + 9² = 64 + 81 = 145.",
        "13² = 169.",
        "145 < 169, so a² + b² < c²."
      ],
      explanation: [
        "8² + 9² = 145 and 13² = 169.",
        "Since 145 < 169 (a² + b² < c²), the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 20, 21, and 29. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 20² + 21² = 400 + 441 = 841.",
        "29² = 841.",
        "Since they are equal …"
      ],
      explanation: [
        "20² + 21² = 400 + 441 = 841 = 29².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 7, 10, and 12. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Check: 7² + 10² = 49 + 100 = 149.",
        "12² = 144.",
        "Since 149 > 144, a² + b² > c²."
      ],
      explanation: [
        "7² + 10² = 149 and 12² = 144.",
        "Since 149 > 144 (a² + b² > c²), the triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 9, 40, and 41. Classify it.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Right",
      hints: [
        "Check: 9² + 40² = 81 + 1600 = 1681.",
        "41² = 1681.",
        "Since they are equal …"
      ],
      explanation: [
        "9² + 40² = 1681 = 41².",
        "Since a² + b² = c², it is a right triangle."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'A triangle has sides 6, 7, and 11. Compute <span class="math">6² + 7²</span> to help classify it.',
      answer: "85",
      hints: [
        "6² = 36.",
        "7² = 49.",
        "36 + 49 = ?"
      ],
      explanation: [
        "6² + 7² = 36 + 49 = 85.",
        "11² = 121. Since 85 < 121, the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 5, 7, and 9. Since <span class="math">5^2 + 7^2 = 74</span> and <span class="math">9^2 = 81</span>, the triangle is:',
      choices: ["Right", "Acute", "Obtuse", "Cannot determine"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (longest side squared).",
        "74 < 81, so a² + b² < c².",
        "When a² + b² < c², the triangle is obtuse."
      ],
      explanation: [
        "5² + 7² = 25 + 49 = 74.",
        "9² = 81. Since 74 < 81, a² + b² < c².",
        "The triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'A triangle has sides 6, 8, and 11. Compute <span class="math">a^2 + b^2</span> for the two shorter sides.',
      answer: "100",
      hints: [
        "The two shorter sides are 6 and 8.",
        "6² + 8² = 36 + 64.",
        "= 100."
      ],
      explanation: [
        "6² + 8² = 36 + 64 = 100.",
        "Since 11² = 121 > 100, the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 7, 8, and 10. Since <span class="math">7^2 + 8^2 = 113</span> and <span class="math">10^2 = 100</span>, the triangle is:',
      choices: ["Right", "Acute", "Obtuse", "Cannot determine"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c².",
        "113 > 100, so a² + b² > c².",
        "When a² + b² > c², the triangle is acute."
      ],
      explanation: [
        "7² + 8² = 49 + 64 = 113.",
        "10² = 100. Since 113 > 100, a² + b² > c².",
        "The triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 7, 10, and 12. Is it acute, right, or obtuse?',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Acute",
      hints: [
        "Compare c² with a² + b². Here c = 12.",
        "12² = 144. 7² + 10² = 49 + 100 = 149.",
        "Since 144 < 149 (c² < a² + b²), it is …"
      ],
      explanation: [
        "c² = 144, a² + b² = 149.",
        "Since c² < a² + b², the triangle is acute."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 6, 8, and 11. Is it acute, right, or obtuse?',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Compare c² with a² + b². Here c = 11.",
        "11² = 121. 6² + 8² = 36 + 64 = 100.",
        "Since 121 > 100 (c² > a² + b²), it is …"
      ],
      explanation: [
        "c² = 121, a² + b² = 100.",
        "Since c² > a² + b², the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'A triangle has sides 9, 40, and <span class="math">c</span>. What value of <span class="math">c</span> makes it a right triangle?',
      answer: "41",
      hints: [
        "For a right triangle: a² + b² = c².",
        "9² + 40² = 81 + 1600 = 1681.",
        "c = √1681 = ?"
      ],
      explanation: [
        "9² + 40² = 81 + 1600 = 1681.",
        "c = √1681 = 41."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 4, 6, and 9. Is it acute, right, or obtuse?',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (where c is the longest side).",
        "4² + 6² = 16 + 36 = 52.",
        "9² = 81. Since 52 < 81, a² + b² < c²."
      ],
      explanation: [
        "4² + 6² = 52 and 9² = 81.",
        "Since 52 < 81 (a² + b² < c²), the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 9, 12, and 16. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c².",
        "9² + 12² = 81 + 144 = 225.",
        "16² = 256. Since 225 < 256, a² + b² < c²."
      ],
      explanation: [
        "9² + 12² = 225 and 16² = 256.",
        "Since a² + b² < c² (225 < 256), the triangle is obtuse."
      ]
    },
    {
      type: "numeric", difficulty: 4,
      question: 'A triangle has sides 11, 13, and 17. Compute <span class="math">11² + 13²</span>.',
      answer: "290",
      hints: [
        "11² = 121.",
        "13² = 169.",
        "121 + 169 = ?"
      ],
      explanation: [
        "11² + 13² = 121 + 169 = 290.",
        "17² = 289. Since 290 > 289 (a² + b² > c²), this is an acute triangle."
      ]
    }
,
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 6, 8, and 11. Is it acute, right, or obtuse?',
      choices: ["Acute", "Right", "Obtuse", "Not a triangle"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (c is the longest side).",
        "6² + 8² = 36 + 64 = 100.",
        "11² = 121. Since 100 < 121, it is …"
      ],
      explanation: [
        "6² + 8² = 100, 11² = 121.",
        "Since a² + b² < c², the triangle is obtuse.",
        "The largest angle (opposite side 11) is greater than 90°."
      ]
    }
,
    {
      type: "mc", difficulty: 4,
      question: 'A triangle has sides 15, 20, and 25. Is it acute, right, or obtuse?',
      choices: ["Acute", "Right", "Obtuse", "Not a triangle"],
      answer: "Right",
      hints: [
        "Compare a² + b² with c².",
        "15² + 20² = 225 + 400 = 625.",
        "25² = 625. Equal?"
      ],
      explanation: [
        "15² + 20² = 225 + 400 = 625.",
        "25² = 625.",
        "Since a² + b² = c², this is a right triangle (3-4-5 scaled by 5)."
      ]
    }
,
    {
      type: "numeric", difficulty: 4,
      question: 'A triangle has sides 7, 10, and 12. Compute <span class="math">7^2 + 10^2</span>.',
      answer: "149",
      hints: [
        "7² = 49.",
        "10² = 100.",
        "49 + 100 = ?"
      ],
      explanation: [
        "7² + 10² = 49 + 100 = 149.",
        "12² = 144. Since 149 > 144 (a² + b² > c²), this is an acute triangle.",
        "When the sum of squares of the shorter sides exceeds the square of the longest, all angles are acute."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has vertices at (0, 0), (6, 0), and (3, 4). Two sides have equal length. Is it isosceles?',
      choices: ["Yes", "No", "Cannot tell", "Only if angles are equal"],
      answer: "Yes",
      hints: [
        "Find side lengths using the distance formula.",
        "From (0,0) to (3,4): √(9+16) = 5. From (6,0) to (3,4): √(9+16) = 5.",
        "Two sides are 5, so it is isosceles."
      ],
      explanation: [
        "Side from (0,0) to (3,4) = √(9+16) = 5.",
        "Side from (6,0) to (3,4) = √(9+16) = 5.",
        "Two equal sides → isosceles triangle."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 7, 9, and 12. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse", "Cannot be determined"],
      answer: "Obtuse",
      hints: [
        "Compare a² + b² with c² (longest side c = 12).",
        "7² + 9² = 49 + 81 = 130.",
        "12² = 144. Since 130 < 144, it is obtuse."
      ],
      explanation: [
        "7² + 9² = 130 and 12² = 144.",
        "Since a² + b² < c², the triangle is obtuse."
      ]
    },
    {
      type: "mc", difficulty: 3,
      question: 'A triangle has sides 6, 7, and 8. Classify it as acute, right, or obtuse.',
      choices: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "Acute",
      hints: [
        "Compare a² + b² with c² (c = 8).",
        "6² + 7² = 36 + 49 = 85.",
        "8² = 64. Since 85 > 64, it is acute."
      ],
      explanation: [
        "6² + 7² = 85 and 8² = 64.",
        "Since a² + b² > c², all angles are acute."
      ]
    }
  ]

];
