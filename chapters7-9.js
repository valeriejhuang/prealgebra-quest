// ===== Chapters 7-9: Ratios, Percents, Square Roots =====
// Loaded after questions.js — patches WORLDS[6..8]

// ============================================================
// WORLD 6 — Ratio Rapids
// Chapter: Ratios, Conversions & Rates
// ============================================================
WORLDS[6] = {
  id: 6, name: "Ratio Rapids", icon: "🌊",
  chapter: "Ratios & Rates", color: "#00bcd4",
  bossName: "Ratiox, the Proportion Serpent",
  bossDesc: "A double-headed snake whose coils maintain perfect proportion",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'A recipe uses 2 cups of flour for every 3 cups of sugar. What is the ratio of flour to sugar?',
        choices: ["2:3", "3:2", "2:5", "5:3"],
        answer: "2:3",
        hints: [
          "A ratio compares two quantities in order.",
          "Flour is listed first, sugar second.",
          "2 cups flour to 3 cups sugar = 2:3."
        ],
        explanation: [
          "The ratio of flour to sugar is written flour : sugar.",
          "= <strong>2 : 3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Simplify the ratio <span class="math">12 : 8</span>. What is the first number in simplified form?',
        answer: "3",
        hints: [
          "Find the GCD of 12 and 8.",
          "GCD(12, 8) = 4.",
          "Divide both by 4: 12÷4 = 3, 8÷4 = 2."
        ],
        explanation: [
          "GCD(12, 8) = 4",
          "12 : 8 = (12÷4) : (8÷4) = 3 : 2",
          "The first number is <strong>3</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A store sells 6 apples for $3. What is the price per apple?',
        choices: ["$0.25", "$0.50", "$1.00", "$2.00"],
        answer: "$0.50",
        hints: [
          "Unit rate means price for one item.",
          "Divide total price by number of items.",
          "$3 ÷ 6 = $0.50."
        ],
        explanation: [
          "Price per apple = $3 ÷ 6",
          "= <strong>$0.50</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Convert 4 feet to inches. (1 foot = 12 inches)',
        answer: "48",
        hints: [
          "To convert feet to inches, multiply by 12.",
          "4 × 12 = ?",
          "4 × 12 = 48."
        ],
        explanation: [
          "4 feet × 12 inches/foot",
          "= <strong>48 inches</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which ratio is equivalent to <span class="math">3 : 5</span>?',
        choices: ["6:10", "5:3", "9:12", "3:8"],
        answer: "6:10",
        hints: [
          "Multiply both parts of the ratio by the same number.",
          "3×2 = 6, 5×2 = 10.",
          "3:5 = 6:10."
        ],
        explanation: [
          "3 : 5 = (3×2) : (5×2)",
          "= <strong>6 : 10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Simplify the ratio <span class="math">20 : 15</span>. What is the second number in simplified form?',
        answer: "3",
        hints: [
          "Find the GCD of 20 and 15.",
          "GCD(20, 15) = 5.",
          "20÷5 = 4, 15÷5 = 3."
        ],
        explanation: [
          "GCD(20, 15) = 5",
          "20 : 15 = 4 : 3",
          "The second number is <strong>3</strong>."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'If you drive 120 miles in 2 hours, what is your speed in miles per hour?',
        choices: ["40 mph", "60 mph", "80 mph", "120 mph"],
        answer: "60 mph",
        hints: [
          "Speed = distance ÷ time.",
          "120 miles ÷ 2 hours = ?",
          "= 60 miles per hour."
        ],
        explanation: [
          "Speed = distance ÷ time",
          "= 120 ÷ 2 = <strong>60 mph</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Convert 3 hours to minutes. (1 hour = 60 minutes)',
        answer: "180",
        hints: [
          "To convert hours to minutes, multiply by 60.",
          "3 × 60 = ?",
          "3 × 60 = 180."
        ],
        explanation: [
          "3 hours × 60 minutes/hour",
          "= <strong>180 minutes</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A car uses 4 gallons of gas to travel 100 miles. What is its gas mileage in miles per gallon?',
        choices: ["20 mpg", "25 mpg", "30 mpg", "40 mpg"],
        answer: "25 mpg",
        hints: [
          "Miles per gallon = miles ÷ gallons.",
          "100 ÷ 4 = ?",
          "100 ÷ 4 = 25."
        ],
        explanation: [
          "Miles per gallon = 100 ÷ 4",
          "= <strong>25 mpg</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert 5 meters to centimeters. (1 meter = 100 centimeters)',
        answer: "500",
        hints: [
          "Multiply the number of meters by 100.",
          "5 × 100 = ?",
          "= 500 centimeters."
        ],
        explanation: [
          "5 meters × 100 cm/meter",
          "= <strong>500 centimeters</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'In a class of 30 students, 18 are girls. What is the ratio of boys to girls in simplest form?',
        choices: ["2:3", "3:2", "12:18", "18:12"],
        answer: "2:3",
        hints: [
          "Boys = 30 − 18 = 12.",
          "Boys : Girls = 12 : 18.",
          "Simplify by dividing both by GCD(12,18) = 6: 2:3."
        ],
        explanation: [
          "Boys = 30 − 18 = 12",
          "12 : 18 = (12÷6) : (18÷6)",
          "= <strong>2 : 3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Simplify the ratio <span class="math">24 : 36</span>. What is the first number?',
        answer: "2",
        hints: [
          "Find the GCD of 24 and 36.",
          "GCD(24, 36) = 12.",
          "24 ÷ 12 = 2, 36 ÷ 12 = 3."
        ],
        explanation: [
          "GCD(24, 36) = 12",
          "24 : 36 = 2 : 3",
          "The first number is <strong>2</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Convert 2 yards to feet. (1 yard = 3 feet)',
        choices: ["5 feet", "6 feet", "8 feet", "9 feet"],
        answer: "6 feet",
        hints: [
          "1 yard = 3 feet.",
          "2 yards × 3 feet/yard = ?",
          "= 6 feet."
        ],
        explanation: [
          "2 yards × 3 feet/yard",
          "= <strong>6 feet</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Mia reads 150 words in 3 minutes. What is her reading rate in words per minute?',
        answer: "50",
        hints: [
          "Rate = total words ÷ total minutes.",
          "150 ÷ 3 = ?",
          "= 50 words per minute."
        ],
        explanation: [
          "Rate = 150 words ÷ 3 minutes",
          "= <strong>50 words per minute</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which is the better buy: $8 for 4 pens or $15 for 6 pens?',
        choices: ["$8 for 4 pens", "$15 for 6 pens", "They are the same price per pen"],
        answer: "$8 for 4 pens",
        hints: [
          "Find the unit price for each option.",
          "$8 ÷ 4 = $2 per pen. $15 ÷ 6 = $2.50 per pen.",
          "$2 < $2.50, so 4 pens for $8 is cheaper."
        ],
        explanation: [
          "$8 ÷ 4 = $2.00 per pen",
          "$15 ÷ 6 = $2.50 per pen",
          "<strong>$8 for 4 pens</strong> is the better buy."
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ─────────────
    challenge: [
      {
        type: "mc", difficulty: 2,
        question: 'Solve the proportion: <span class="math">4/6 = x/15</span>. What is x?',
        choices: ["8", "10", "9", "12"],
        answer: "10",
        hints: [
          "Cross-multiply: 4 × 15 = 6 × x.",
          "60 = 6x.",
          "x = 60 ÷ 6 = 10."
        ],
        explanation: [
          "Cross-multiply: 4 × 15 = 6 × x",
          "60 = 6x",
          "x = <strong>10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A map has a scale of 1 cm : 5 km. If two cities are 8 cm apart on the map, how many km apart are they?',
        answer: "40",
        hints: [
          "Each centimeter on the map equals 5 km in real life.",
          "8 cm × 5 km/cm = ?",
          "= 40 km."
        ],
        explanation: [
          "8 cm × 5 km/cm",
          "= <strong>40 km</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A train travels 180 miles in 3 hours. How far will it go in 5 hours at the same speed?',
        choices: ["250 miles", "300 miles", "280 miles", "350 miles"],
        answer: "300 miles",
        hints: [
          "First find the speed: 180 ÷ 3 = 60 mph.",
          "Then multiply: 60 × 5 = ?",
          "= 300 miles."
        ],
        explanation: [
          "Speed = 180 ÷ 3 = 60 mph",
          "Distance = 60 × 5 = <strong>300 miles</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert 3 kilometers to meters. (1 km = 1000 m)',
        answer: "3000",
        hints: [
          "Multiply kilometers by 1000.",
          "3 × 1000 = ?",
          "= 3000 meters."
        ],
        explanation: [
          "3 km × 1000 m/km",
          "= <strong>3000 meters</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'The ratio of boys to girls in a class is 3:5. If there are 15 boys, how many girls are there?',
        choices: ["20", "25", "30", "35"],
        answer: "25",
        hints: [
          "3 parts correspond to 15 boys.",
          "1 part = 15 ÷ 3 = 5.",
          "Girls = 5 parts = 5 × 5 = 25."
        ],
        explanation: [
          "1 part = 15 ÷ 3 = 5",
          "Girls = 5 × 5 = <strong>25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many inches are in 2 yards? (1 yard = 3 feet, 1 foot = 12 inches)',
        answer: "72",
        hints: [
          "First convert yards to feet: 2 × 3 = 6 feet.",
          "Then convert feet to inches: 6 × 12 = ?",
          "= 72 inches."
        ],
        explanation: [
          "2 yards × 3 feet/yard = 6 feet",
          "6 feet × 12 inches/foot = <strong>72 inches</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve the proportion: <span class="math">5/8 = 20/x</span>. What is x?',
        choices: ["24", "28", "32", "40"],
        answer: "32",
        hints: [
          "Cross-multiply: 5 × x = 8 × 20.",
          "5x = 160.",
          "x = 160 ÷ 5 = 32."
        ],
        explanation: [
          "5 × x = 8 × 20",
          "5x = 160",
          "x = <strong>32</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Store A sells 3 notebooks for $6. Store B sells 5 notebooks for $9. How much cheaper per notebook is Store B? (Answer in cents.)',
        answer: "20",
        hints: [
          "Store A: $6 ÷ 3 = $2.00 per notebook.",
          "Store B: $9 ÷ 5 = $1.80 per notebook.",
          "Difference: $2.00 − $1.80 = $0.20 = 20 cents."
        ],
        explanation: [
          "Store A: $6 ÷ 3 = $2.00 each",
          "Store B: $9 ÷ 5 = $1.80 each",
          "Difference = $0.20 = <strong>20 cents</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'On a map, 2 cm represents 50 km. What real distance does 7 cm represent?',
        choices: ["125 km", "150 km", "175 km", "200 km"],
        answer: "175 km",
        hints: [
          "Scale: 2 cm = 50 km, so 1 cm = 25 km.",
          "7 cm × 25 km/cm = ?",
          "= 175 km."
        ],
        explanation: [
          "1 cm = 50 ÷ 2 = 25 km",
          "7 × 25 = <strong>175 km</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Convert 150 minutes to hours and minutes. How many full hours is that?',
        answer: "2",
        hints: [
          "Divide 150 by 60.",
          "150 ÷ 60 = 2 remainder 30.",
          "That is 2 full hours (and 30 minutes)."
        ],
        explanation: [
          "150 ÷ 60 = 2 remainder 30",
          "150 minutes = <strong>2</strong> hours and 30 minutes"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A cyclist travels at 15 km per hour. How many minutes does it take to travel 10 km?',
        answer: "40",
        hints: [
          "Time = distance ÷ speed = 10 ÷ 15 hours.",
          "10/15 = 2/3 of an hour.",
          "2/3 × 60 = 40 minutes."
        ],
        explanation: [
          "Time = 10 ÷ 15 = 2/3 hour",
          "2/3 × 60 = <strong>40 minutes</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'In a bag of 40 marbles, the ratio of red to blue to green is 2:3:5. How many blue marbles are there?',
        choices: ["8", "10", "12", "15"],
        answer: "12",
        hints: [
          "Total parts = 2 + 3 + 5 = 10.",
          "Each part = 40 ÷ 10 = 4 marbles.",
          "Blue = 3 parts = 3 × 4 = 12."
        ],
        explanation: [
          "Total parts = 2 + 3 + 5 = 10",
          "Each part = 40 ÷ 10 = 4",
          "Blue = 3 × 4 = <strong>12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A recipe for 4 servings needs 6 cups of rice. How many cups are needed for 10 servings?',
        answer: "15",
        hints: [
          "Set up a proportion: 6/4 = x/10.",
          "Cross-multiply: 6 × 10 = 4 × x.",
          "60 = 4x, so x = 15."
        ],
        explanation: [
          "6/4 = x/10",
          "6 × 10 = 4x → 60 = 4x",
          "x = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two cars leave the same point going the same direction. Car A goes 50 mph and Car B goes 70 mph. After 3 hours, how many miles apart are they?',
        choices: ["40 miles", "50 miles", "60 miles", "80 miles"],
        answer: "60 miles",
        hints: [
          "Find how far each car travels in 3 hours.",
          "Car A: 50 × 3 = 150. Car B: 70 × 3 = 210.",
          "Difference: 210 − 150 = 60 miles."
        ],
        explanation: [
          "Car A: 50 × 3 = 150 miles",
          "Car B: 70 × 3 = 210 miles",
          "210 − 150 = <strong>60 miles</strong> apart"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A rectangle on a blueprint is 3 cm by 4 cm. If the scale factor is 1 cm : 5 m, what is the real area in square meters?',
        answer: "300",
        hints: [
          "Real length = 3 × 5 = 15 m. Real width = 4 × 5 = 20 m.",
          "Area = length × width.",
          "15 × 20 = 300."
        ],
        explanation: [
          "Real length = 3 × 5 = 15 m",
          "Real width = 4 × 5 = 20 m",
          "Area = 15 × 20 = <strong>300 square meters</strong>"
        ]
      }
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'If 3 workers can paint a fence in 12 hours, how many hours would it take 4 workers? (Assume the same rate per worker.)',
        answer: "9",
        hints: [
          "Total work = 3 workers × 12 hours = 36 worker-hours.",
          "With 4 workers: 36 ÷ 4 = ?",
          "= 9 hours."
        ],
        explanation: [
          "Total work = 3 × 12 = 36 worker-hours",
          "Time for 4 workers = 36 ÷ 4",
          "= <strong>9 hours</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Solve: <span class="math">3/8 = 9/x</span>. What is x?',
        choices: ["18", "24", "27", "12"],
        answer: "24",
        hints: [
          "Cross-multiply: 3 × x = 8 × 9.",
          "3x = 72.",
          "x = 72 ÷ 3 = 24."
        ],
        explanation: [
          "3x = 8 × 9 = 72",
          "x = 72 ÷ 3 = <strong>24</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A car travels 210 miles on 7 gallons of gas. How many gallons does it need to travel 450 miles?',
        answer: "15",
        hints: [
          "Rate = 210 ÷ 7 = 30 miles per gallon.",
          "Gallons = 450 ÷ 30.",
          "= 15 gallons."
        ],
        explanation: [
          "Rate = 210 ÷ 7 = 30 mpg",
          "Gallons = 450 ÷ 30 = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A recipe for 4 servings needs 2/3 cup of milk. How much milk is needed for 6 servings?',
        choices: ["1 cup", "3/4 cup", "1/2 cup", "5/6 cup"],
        answer: "1 cup",
        hints: [
          "Per serving = (2/3) ÷ 4 = 2/12 = 1/6 cup.",
          "6 servings = 6 × 1/6.",
          "= 1 cup."
        ],
        explanation: [
          "Per serving = (2/3) ÷ 4 = 1/6 cup",
          "6 servings = 6 × 1/6 = <strong>1 cup</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A bus travels from City A to City B at 30 mph and returns at 60 mph. The distance is 60 miles each way. What is the average speed for the whole trip in mph?',
        answer: "40",
        hints: [
          "Time going: 60 ÷ 30 = 2 hours. Time returning: 60 ÷ 60 = 1 hour.",
          "Total distance = 120 miles. Total time = 3 hours.",
          "Average speed = 120 ÷ 3 = 40."
        ],
        explanation: [
          "Time going = 60/30 = 2 hours",
          "Time returning = 60/60 = 1 hour",
          "Average speed = 120 ÷ 3 = <strong>40 mph</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A model car is built at a 1:24 scale. If the real car is 12 feet long, how many inches long is the model?',
        choices: ["6 inches", "8 inches", "10 inches", "12 inches"],
        answer: "6 inches",
        hints: [
          "12 feet = 144 inches.",
          "Scale is 1:24, so divide real size by 24.",
          "144 ÷ 24 = 6 inches."
        ],
        explanation: [
          "12 feet = 12 × 12 = 144 inches",
          "Model = 144 ÷ 24 = <strong>6 inches</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Pipe A fills a pool in 6 hours. Pipe B fills it in 12 hours. Working together, how many hours to fill the pool?',
        answer: "4",
        hints: [
          "Rate of A = 1/6 pool per hour. Rate of B = 1/12 pool per hour.",
          "Combined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4.",
          "Time = 1 ÷ (1/4) = 4 hours."
        ],
        explanation: [
          "Rate A = 1/6, Rate B = 1/12",
          "Combined = 1/6 + 1/12 = 3/12 = 1/4 per hour",
          "Time = 1 ÷ 1/4 = <strong>4 hours</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A train leaves Town A at 9:00 AM going 80 mph. Another train leaves Town B (240 miles away) at 9:00 AM going toward Town A at 40 mph. At what time do they meet?',
        choices: ["11:00 AM", "10:30 AM", "11:30 AM", "12:00 PM"],
        answer: "11:00 AM",
        hints: [
          "Combined speed = 80 + 40 = 120 mph (they approach each other).",
          "Time = distance ÷ combined speed = 240 ÷ 120 = 2 hours.",
          "9:00 AM + 2 hours = 11:00 AM."
        ],
        explanation: [
          "Combined speed = 80 + 40 = 120 mph",
          "Time = 240 ÷ 120 = 2 hours",
          "9:00 AM + 2 hours = <strong>11:00 AM</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Solve the proportion: <span class="math">7/12 = 35/x</span>. What is x?',
        answer: "60",
        hints: [
          "Cross-multiply: 7 × x = 12 × 35.",
          "7x = 420.",
          "x = 420 ÷ 7 = 60."
        ],
        explanation: [
          "7x = 12 × 35 = 420",
          "x = 420 ÷ 7 = <strong>60</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A factory produces 240 widgets in 8 hours with some machines. Each machine makes 10 widgets per hour. How many machines does the factory use?',
        choices: ["2", "3", "4", "6"],
        answer: "3",
        hints: [
          "Rate needed: 240 widgets ÷ 8 hours = 30 widgets per hour total.",
          "Each machine makes 10 per hour.",
          "Number of machines = 30 ÷ 10 = 3."
        ],
        explanation: [
          "Total rate = 240 ÷ 8 = 30 widgets/hour",
          "Each machine = 10 widgets/hour",
          "Machines = 30 ÷ 10 = <strong>3</strong>"
        ]
      }
    ]
  }
};

// ============================================================
// WORLD 7 — Percent Palace
// Chapter: Percents
// ============================================================
WORLDS[7] = {
  id: 7, name: "Percent Palace", icon: "🏛️",
  chapter: "Percents", color: "#e91e63",
  bossName: "Percenta, the Hundred Knight",
  bossDesc: "An armored knight whose shield displays ever-shifting percentages",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">50%</span> written as a fraction in simplest form?',
        choices: ["1/2", "5/10", "1/5", "2/5"],
        answer: "1/2",
        hints: [
          "50% means 50 out of 100.",
          "50/100 — simplify by dividing both by 50.",
          "= 1/2."
        ],
        explanation: [
          "50% = 50/100",
          "= <strong>1/2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">10% of 70</span>?',
        answer: "7",
        hints: [
          "10% means one-tenth.",
          "Divide 70 by 10.",
          "70 ÷ 10 = 7."
        ],
        explanation: [
          "10% of 70 = 70 × 0.10",
          "= <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Convert <span class="math">0.25</span> to a percent.',
        choices: ["2.5%", "25%", "250%", "0.25%"],
        answer: "25%",
        hints: [
          "To convert a decimal to a percent, multiply by 100.",
          "0.25 × 100 = 25.",
          "= 25%."
        ],
        explanation: [
          "0.25 × 100 = 25",
          "0.25 = <strong>25%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">50% of 80</span>?',
        answer: "40",
        hints: [
          "50% means half.",
          "80 ÷ 2 = ?",
          "= 40."
        ],
        explanation: [
          "50% of 80 = 80 × 0.50",
          "= <strong>40</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Convert <span class="math">0.6</span> to a percent.',
        choices: ["0.6%", "6%", "60%", "600%"],
        answer: "60%",
        hints: [
          "Multiply the decimal by 100.",
          "0.6 × 100 = 60.",
          "= 60%."
        ],
        explanation: [
          "0.6 × 100",
          "= <strong>60%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">25% of 60</span>?',
        answer: "15",
        hints: [
          "25% = 1/4.",
          "60 ÷ 4 = ?",
          "= 15."
        ],
        explanation: [
          "25% of 60 = 60 × 0.25",
          "= <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What percent of a 10×10 grid is shaded if 35 squares are shaded?',
        choices: ["25%", "30%", "35%", "40%"],
        answer: "35%",
        hints: [
          "A 10×10 grid has 100 squares total.",
          "35 out of 100 = 35/100.",
          "= 35%."
        ],
        explanation: [
          "35 shaded out of 100 total",
          "35/100 = <strong>35%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Convert <span class="math">3/4</span> to a percent.',
        answer: "75",
        hints: [
          "Divide: 3 ÷ 4 = 0.75.",
          "Multiply by 100: 0.75 × 100 = 75.",
          "= 75%."
        ],
        explanation: [
          "3/4 = 0.75",
          "0.75 × 100 = <strong>75%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">25%</span> written as a fraction? Give the denominator of the simplified fraction.',
        answer: "4",
        hints: [
          "25% = 25/100.",
          "Simplify by dividing both by 25.",
          "25/100 = 1/4. The denominator is 4."
        ],
        explanation: [
          "25% = 25/100 = 1/4",
          "The denominator is <strong>4</strong>."
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">10% of 250</span>?',
        choices: ["15", "25", "30", "50"],
        answer: "25",
        hints: [
          "10% means divide by 10.",
          "250 ÷ 10 = 25.",
          "= 25."
        ],
        explanation: [
          "10% of 250 = 250 × 0.10",
          "= <strong>25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert <span class="math">1/5</span> to a percent.',
        answer: "20",
        hints: [
          "Divide: 1 ÷ 5 = 0.2.",
          "Multiply by 100: 0.2 × 100 = 20.",
          "= 20%."
        ],
        explanation: [
          "1/5 = 0.2",
          "0.2 × 100 = <strong>20%</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What percent of 50 is 15?',
        choices: ["20%", "25%", "30%", "35%"],
        answer: "30%",
        hints: [
          "Percent = (part ÷ whole) × 100.",
          "15 ÷ 50 = 0.30.",
          "0.30 × 100 = 30%."
        ],
        explanation: [
          "15/50 = 0.30",
          "0.30 × 100 = <strong>30%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Convert the decimal <span class="math">0.4</span> to a percent.',
        answer: "40",
        hints: [
          "Multiply by 100.",
          "0.4 × 100 = 40.",
          "= 40%."
        ],
        explanation: [
          "0.4 × 100",
          "= <strong>40%</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What fraction does <span class="math">30%</span> equal? (Simplified)',
        choices: ["3/10", "1/3", "3/5", "30/10"],
        answer: "3/10",
        hints: [
          "30% = 30/100.",
          "GCD(30, 100) = 10.",
          "30/100 = 3/10."
        ],
        explanation: [
          "30% = 30/100",
          "30/100 = <strong>3/10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">20% of 45</span>?',
        answer: "9",
        hints: [
          "20% = 0.20.",
          "45 × 0.20 = ?",
          "= 9."
        ],
        explanation: [
          "20% of 45 = 45 × 0.20",
          "= <strong>9</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ─────────────
    challenge: [
      {
        type: "mc", difficulty: 2,
        question: 'A shirt costs $40 and is 20% off. What is the sale price?',
        choices: ["$30", "$32", "$34", "$36"],
        answer: "$32",
        hints: [
          "Discount = 20% of $40 = $8.",
          "Sale price = $40 − $8.",
          "= $32."
        ],
        explanation: [
          "Discount = 40 × 0.20 = $8",
          "Sale price = 40 − 8 = <strong>$32</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A population grew from 200 to 250. What is the percent increase?',
        answer: "25",
        hints: [
          "Increase = 250 − 200 = 50.",
          "Percent increase = (increase ÷ original) × 100.",
          "(50 ÷ 200) × 100 = 25%."
        ],
        explanation: [
          "Increase = 250 − 200 = 50",
          "50/200 × 100 = <strong>25%</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A $50 item has 8% sales tax. What is the total cost?',
        choices: ["$54", "$56", "$58", "$50.80"],
        answer: "$54",
        hints: [
          "Tax = 8% of $50 = 0.08 × 50 = $4.",
          "Total = $50 + $4.",
          "= $54."
        ],
        explanation: [
          "Tax = 50 × 0.08 = $4",
          "Total = 50 + 4 = <strong>$54</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A meal costs $30. You want to leave a 15% tip. How much is the tip?',
        answer: "4.5",
        hints: [
          "15% of $30 = 0.15 × 30.",
          "0.15 × 30 = 4.5.",
          "The tip is $4.50."
        ],
        explanation: [
          "15% of 30 = 0.15 × 30",
          "= <strong>$4.50</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A town\'s population dropped from 800 to 680. What is the percent decrease?',
        choices: ["10%", "12%", "15%", "20%"],
        answer: "15%",
        hints: [
          "Decrease = 800 − 680 = 120.",
          "Percent decrease = (120 ÷ 800) × 100.",
          "= 15%."
        ],
        explanation: [
          "Decrease = 800 − 680 = 120",
          "120/800 = 0.15 = <strong>15%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: '40% of a number is 28. What is the number?',
        answer: "70",
        hints: [
          "If 40% of x = 28, then x = 28 ÷ 0.40.",
          "28 ÷ 0.40 = ?",
          "= 70."
        ],
        explanation: [
          "0.40 × x = 28",
          "x = 28 ÷ 0.40 = <strong>70</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Shoes originally cost $80. They are 30% off. What is the sale price?',
        choices: ["$50", "$54", "$56", "$60"],
        answer: "$56",
        hints: [
          "Discount = 30% of $80 = $24.",
          "Sale price = $80 − $24.",
          "= $56."
        ],
        explanation: [
          "30% of 80 = 0.30 × 80 = $24",
          "Sale price = 80 − 24 = <strong>$56</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A school had 300 students last year and 345 this year. What is the percent increase?',
        answer: "15",
        hints: [
          "Increase = 345 − 300 = 45.",
          "Percent = (45 ÷ 300) × 100.",
          "= 15%."
        ],
        explanation: [
          "Increase = 345 − 300 = 45",
          "45/300 × 100 = <strong>15%</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A store buys a widget for $20 and marks it up 60%. What is the selling price?',
        choices: ["$28", "$30", "$32", "$36"],
        answer: "$32",
        hints: [
          "Markup = 60% of $20 = $12.",
          "Selling price = $20 + $12.",
          "= $32."
        ],
        explanation: [
          "60% of 20 = 0.60 × 20 = $12",
          "Selling price = 20 + 12 = <strong>$32</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'You scored 18 out of 24 on a test. What is your percent score?',
        answer: "75",
        hints: [
          "Divide: 18 ÷ 24 = 0.75.",
          "Multiply by 100.",
          "= 75%."
        ],
        explanation: [
          "18/24 = 3/4 = 0.75",
          "0.75 × 100 = <strong>75%</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is 5% of 5% of 10000?',
        choices: ["25", "50", "100", "500"],
        answer: "25",
        hints: [
          "First, 5% of 10000 = 500.",
          "Then, 5% of 500 = 25.",
          "= 25."
        ],
        explanation: [
          "5% of 10000 = 0.05 × 10000 = 500",
          "5% of 500 = 0.05 × 500 = <strong>25</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'After a 25% discount, a jacket costs $60. What was the original price?',
        answer: "80",
        hints: [
          "After 25% off, you pay 75% of the original.",
          "75% of original = $60.",
          "Original = 60 ÷ 0.75 = 80."
        ],
        explanation: [
          "75% of original = $60",
          "Original = 60 ÷ 0.75 = <strong>$80</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A city\'s population went from 40,000 to 36,000. What was the percent decrease?',
        choices: ["5%", "8%", "10%", "12%"],
        answer: "10%",
        hints: [
          "Decrease = 40000 − 36000 = 4000.",
          "Percent decrease = (4000 ÷ 40000) × 100.",
          "= 10%."
        ],
        explanation: [
          "Decrease = 4000",
          "4000/40000 × 100 = <strong>10%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A salesperson earns 6% commission. If they sell $1500 worth of goods, how much commission do they earn?',
        answer: "90",
        hints: [
          "Commission = 6% of $1500.",
          "0.06 × 1500 = ?",
          "= $90."
        ],
        explanation: [
          "6% of 1500 = 0.06 × 1500",
          "= <strong>$90</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A price increases by 10% and then decreases by 10%. Compared to the original, the final price is:',
        choices: ["The same", "1% less", "1% more", "10% less"],
        answer: "1% less",
        hints: [
          "Start with $100. Increase 10%: $100 → $110.",
          "Decrease 10% of $110: $110 − $11 = $99.",
          "$99 < $100, so 1% less."
        ],
        explanation: [
          "100 × 1.10 = 110",
          "110 × 0.90 = 99",
          "99 is <strong>1% less</strong> than 100."
        ]
      }
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'A $100 item is first increased by 20%, then the new price is decreased by 20%. What is the final price?',
        answer: "96",
        hints: [
          "After 20% increase: 100 × 1.20 = 120.",
          "After 20% decrease: 120 × 0.80 = ?",
          "= 96."
        ],
        explanation: [
          "100 × 1.20 = 120",
          "120 × 0.80 = <strong>96</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A price goes up 10% one year and then up 10% the next year. The total percent increase over the two years is:',
        choices: ["20%", "21%", "22%", "19%"],
        answer: "21%",
        hints: [
          "Start with $100. After first 10%: $110.",
          "After second 10%: 110 × 1.10 = $121.",
          "Increase = $21, which is 21%."
        ],
        explanation: [
          "100 × 1.10 = 110",
          "110 × 1.10 = 121",
          "Total increase = 21/100 = <strong>21%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A $60 item has 8% tax. What is the total cost? (No dollar sign needed)',
        answer: "64.8",
        hints: [
          "Tax = 8% of 60 = 0.08 × 60 = 4.80.",
          "Total = 60 + 4.80.",
          "= 64.80."
        ],
        explanation: [
          "Tax = 60 × 0.08 = $4.80",
          "Total = 60 + 4.80 = <strong>64.8</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'After a 40% markup, a store sells an item for $56. What did the store pay for it?',
        choices: ["$33.60", "$36", "$40", "$44"],
        answer: "$40",
        hints: [
          "Selling price = 140% of cost.",
          "1.40 × cost = $56.",
          "Cost = 56 ÷ 1.40 = $40."
        ],
        explanation: [
          "140% of cost = $56",
          "Cost = 56 ÷ 1.40 = <strong>$40</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A $200 item gets a 20% discount, then the reduced price gets another 10% discount. What is the final price?',
        answer: "144",
        hints: [
          "After 20% off: 200 × 0.80 = $160.",
          "After 10% off: 160 × 0.90 = ?",
          "= $144."
        ],
        explanation: [
          "200 × 0.80 = 160",
          "160 × 0.90 = <strong>144</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A meal costs $45. You add 8% tax first, then leave a 20% tip on the pre-tax amount. What is the total?',
        choices: ["$54", "$57.60", "$58.50", "$55.80"],
        answer: "$57.60",
        hints: [
          "Tax = 8% of $45 = $3.60.",
          "Tip = 20% of $45 = $9.00.",
          "Total = $45 + $3.60 + $9.00 = $57.60."
        ],
        explanation: [
          "Tax = 45 × 0.08 = $3.60",
          "Tip = 45 × 0.20 = $9.00",
          "Total = 45 + 3.60 + 9.00 = <strong>$57.60</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: '15% of a number equals 27. What is the number?',
        answer: "180",
        hints: [
          "0.15 × x = 27.",
          "x = 27 ÷ 0.15.",
          "= 180."
        ],
        explanation: [
          "0.15 × x = 27",
          "x = 27 ÷ 0.15 = <strong>180</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A stock drops 20% one day and gains 25% the next day. Compared to the original, the stock is:',
        choices: ["5% higher", "The same", "5% lower", "1% higher"],
        answer: "The same",
        hints: [
          "Start at $100. Drop 20%: $80.",
          "Gain 25% of $80: $80 × 1.25 = $100.",
          "Back to the original!"
        ],
        explanation: [
          "100 × 0.80 = 80",
          "80 × 1.25 = 100",
          "Final = original, so <strong>the same</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A TV is on sale for $540 after a 10% discount. What was the original price?',
        answer: "600",
        hints: [
          "90% of the original = $540.",
          "Original = 540 ÷ 0.90.",
          "= $600."
        ],
        explanation: [
          "90% of original = 540",
          "Original = 540 ÷ 0.90 = <strong>600</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A value decreases by 10% three times in a row. Starting at 1000, what is the final value?',
        choices: ["700", "729", "810", "750"],
        answer: "729",
        hints: [
          "Each 10% decrease multiplies by 0.90.",
          "After 3 decreases: 1000 × 0.90 × 0.90 × 0.90.",
          "1000 × 0.729 = 729."
        ],
        explanation: [
          "1000 × 0.90 = 900",
          "900 × 0.90 = 810",
          "810 × 0.90 = <strong>729</strong>"
        ]
      }
    ]
  }
};

// ============================================================
// WORLD 8 — Root Caverns
// Chapter: Square Roots
// ============================================================
WORLDS[8] = {
  id: 8, name: "Root Caverns", icon: "⛏️",
  chapter: "Square Roots", color: "#8d6e63",
  bossName: "Radikus, the Root Golem",
  bossDesc: "A stone golem emerging from the earth, crowned with the radical symbol",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">√36</span>?',
        answer: "6",
        hints: [
          "What number times itself equals 36?",
          "6 × 6 = 36.",
          "So √36 = 6."
        ],
        explanation: [
          "6 × 6 = 36",
          "√36 = <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which of these is a perfect square?',
        choices: ["14", "16", "18", "20"],
        answer: "16",
        hints: [
          "A perfect square is a whole number times itself.",
          "4 × 4 = 16.",
          "16 is a perfect square."
        ],
        explanation: [
          "4 × 4 = 16",
          "<strong>16</strong> is the perfect square."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">√81</span>?',
        answer: "9",
        hints: [
          "What number squared gives 81?",
          "9 × 9 = 81.",
          "√81 = 9."
        ],
        explanation: [
          "9 × 9 = 81",
          "√81 = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">√64</span>?',
        choices: ["6", "7", "8", "9"],
        answer: "8",
        hints: [
          "Try 8 × 8.",
          "8 × 8 = 64. Yes!",
          "√64 = 8."
        ],
        explanation: [
          "8 × 8 = 64",
          "√64 = <strong>8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">√4</span>?',
        answer: "2",
        hints: [
          "What number times itself equals 4?",
          "2 × 2 = 4.",
          "√4 = 2."
        ],
        explanation: [
          "2 × 2 = 4",
          "√4 = <strong>2</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which of these is a perfect square?',
        choices: ["42", "48", "49", "50"],
        answer: "49",
        hints: [
          "Check: 7 × 7 = 49.",
          "49 is a perfect square.",
          "None of the others are (no whole number squared gives 42, 48, or 50)."
        ],
        explanation: [
          "7 × 7 = 49",
          "<strong>49</strong> is the perfect square."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">√121</span>?',
        answer: "11",
        hints: [
          "Think of a number greater than 10 whose square is 121.",
          "11 × 11 = 121.",
          "√121 = 11."
        ],
        explanation: [
          "11 × 11 = 121",
          "√121 = <strong>11</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">√9</span>?',
        choices: ["2", "3", "4", "9"],
        answer: "3",
        hints: [
          "What number times itself equals 9?",
          "3 × 3 = 9.",
          "√9 = 3."
        ],
        explanation: [
          "3 × 3 = 9",
          "√9 = <strong>3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">√25</span>?',
        answer: "5",
        hints: [
          "5 × 5 = ?",
          "5 × 5 = 25.",
          "√25 = 5."
        ],
        explanation: [
          "5 × 5 = 25",
          "√25 = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What number squared equals 100?',
        choices: ["8", "9", "10", "11"],
        answer: "10",
        hints: [
          "We need n such that n² = 100.",
          "10 × 10 = 100.",
          "n = 10."
        ],
        explanation: [
          "10 × 10 = 100",
          "So <strong>10</strong> squared equals 100."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">√196</span>?',
        answer: "14",
        hints: [
          "14 × 14 = ?",
          "14 × 14 = 196.",
          "√196 = 14."
        ],
        explanation: [
          "14 × 14 = 196",
          "√196 = <strong>14</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which of these is NOT a perfect square?',
        choices: ["36", "48", "64", "100"],
        answer: "48",
        hints: [
          "6² = 36 ✓, 8² = 64 ✓, 10² = 100 ✓.",
          "What about 48? 6² = 36, 7² = 49.",
          "48 is between 36 and 49 — not a perfect square."
        ],
        explanation: [
          "36 = 6², 64 = 8², 100 = 10²",
          "<strong>48</strong> is not a perfect square (6² = 36, 7² = 49)."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">√144</span>?',
        answer: "12",
        hints: [
          "12 × 12 = ?",
          "12 × 12 = 144.",
          "√144 = 12."
        ],
        explanation: [
          "12 × 12 = 144",
          "√144 = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">√225</span>?',
        choices: ["13", "14", "15", "16"],
        answer: "15",
        hints: [
          "Try 15: 15 × 15 = 225.",
          "Yes! √225 = 15.",
          "You can verify: 14² = 196, 16² = 256."
        ],
        explanation: [
          "15 × 15 = 225",
          "√225 = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Is 40 a perfect square?',
        choices: ["Yes, because 8 × 5 = 40", "Yes, because 20 × 2 = 40", "No, because 6² = 36 and 7² = 49", "No, because 40 is even"],
        answer: "No, because 6² = 36 and 7² = 49",
        hints: [
          "A perfect square = n² for some integer n.",
          "6² = 36 and 7² = 49.",
          "40 is between 36 and 49, so it's not a perfect square."
        ],
        explanation: [
          "6² = 36 and 7² = 49",
          "36 < 40 < 49, so 40 is <strong>not a perfect square</strong>."
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ─────────────
    challenge: [
      {
        type: "mc", difficulty: 2,
        question: 'Between which two whole numbers is <span class="math">√30</span>?',
        choices: ["4 and 5", "5 and 6", "6 and 7", "7 and 8"],
        answer: "5 and 6",
        hints: [
          "5² = 25 and 6² = 36.",
          "25 < 30 < 36.",
          "So √30 is between 5 and 6."
        ],
        explanation: [
          "5² = 25, 6² = 36",
          "25 < 30 < 36",
          "√30 is between <strong>5 and 6</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Simplify <span class="math">√12</span>. If √12 = a√b (simplified), what is a?',
        answer: "2",
        hints: [
          "Factor 12: 12 = 4 × 3.",
          "√12 = √4 × √3 = 2√3.",
          "a = 2."
        ],
        explanation: [
          "12 = 4 × 3",
          "√12 = √4 × √3 = 2√3",
          "a = <strong>2</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is <span class="math">√3 × √3</span>?',
        choices: ["3", "6", "9", "√9"],
        answer: "3",
        hints: [
          "√a × √a = a for any positive number.",
          "√3 × √3 = 3.",
          "This is because (√3)² = 3."
        ],
        explanation: [
          "√3 × √3 = (√3)²",
          "= <strong>3</strong> (squaring undoes the square root)"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Simplify <span class="math">√50</span>. If √50 = a√b (simplified), what is a?',
        answer: "5",
        hints: [
          "Factor 50: 50 = 25 × 2.",
          "√50 = √25 × √2 = 5√2.",
          "a = 5."
        ],
        explanation: [
          "50 = 25 × 2",
          "√50 = √25 × √2 = 5√2",
          "a = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Between which two whole numbers is <span class="math">√70</span>?',
        choices: ["7 and 8", "8 and 9", "9 and 10", "6 and 7"],
        answer: "8 and 9",
        hints: [
          "8² = 64 and 9² = 81.",
          "64 < 70 < 81.",
          "So √70 is between 8 and 9."
        ],
        explanation: [
          "8² = 64, 9² = 81",
          "64 < 70 < 81",
          "√70 is between <strong>8 and 9</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">√45</span>. If √45 = a√b (simplified), what is a?',
        answer: "3",
        hints: [
          "Factor 45: 45 = 9 × 5.",
          "√45 = √9 × √5 = 3√5.",
          "a = 3."
        ],
        explanation: [
          "45 = 9 × 5",
          "√45 = √9 × √5 = 3√5",
          "a = <strong>3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">√16 × √4</span>?',
        choices: ["4", "8", "16", "20"],
        answer: "8",
        hints: [
          "√16 = 4 and √4 = 2.",
          "4 × 2 = 8.",
          "Or: √(16 × 4) = √64 = 8."
        ],
        explanation: [
          "√16 × √4 = 4 × 2 = <strong>8</strong>",
          "Or: √(16×4) = √64 = 8"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">√75</span>. If √75 = a√b (simplified), what is a?',
        answer: "5",
        hints: [
          "Factor 75: 75 = 25 × 3.",
          "√75 = √25 × √3 = 5√3.",
          "a = 5."
        ],
        explanation: [
          "75 = 25 × 3",
          "√75 = √25 × √3 = 5√3",
          "a = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">(√7)²</span>?',
        answer: "7",
        hints: [
          "Squaring a square root cancels it out.",
          "(√a)² = a.",
          "(√7)² = 7."
        ],
        explanation: [
          "(√7)² = 7",
          "The square and square root cancel: <strong>7</strong>."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Between which two whole numbers is <span class="math">√20</span>?',
        choices: ["3 and 4", "4 and 5", "5 and 6", "6 and 7"],
        answer: "4 and 5",
        hints: [
          "4² = 16 and 5² = 25.",
          "16 < 20 < 25.",
          "So √20 is between 4 and 5."
        ],
        explanation: [
          "4² = 16, 5² = 25",
          "16 < 20 < 25",
          "√20 is between <strong>4 and 5</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">√32</span>. If √32 = a√b (simplified), what is a?',
        answer: "4",
        hints: [
          "Factor 32: 32 = 16 × 2.",
          "√32 = √16 × √2 = 4√2.",
          "a = 4."
        ],
        explanation: [
          "32 = 16 × 2",
          "√32 = √16 × √2 = 4√2",
          "a = <strong>4</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">√(36/25)</span>?',
        choices: ["6/5", "36/25", "6/25", "36/5"],
        answer: "6/5",
        hints: [
          "Use the rule: √(a/b) = √a / √b.",
          "√36 = 6, √25 = 5.",
          "√(36/25) = 6/5."
        ],
        explanation: [
          "√(36/25) = √36 / √25",
          "= 6/5 = <strong>6/5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">√98</span>. If √98 = a√b (simplified), what is a?',
        answer: "7",
        hints: [
          "Factor 98: 98 = 49 × 2.",
          "√98 = √49 × √2 = 7√2.",
          "a = 7."
        ],
        explanation: [
          "98 = 49 × 2",
          "√98 = √49 × √2 = 7√2",
          "a = <strong>7</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">√2 × √8</span>? (Give a whole number.)',
        answer: "4",
        hints: [
          "Use the rule: √a × √b = √(a×b).",
          "√2 × √8 = √(2×8) = √16.",
          "√16 = 4."
        ],
        explanation: [
          "√2 × √8 = √(2 × 8) = √16",
          "= <strong>4</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Between which two whole numbers is <span class="math">√90</span>?',
        choices: ["8 and 9", "9 and 10", "10 and 11", "7 and 8"],
        answer: "9 and 10",
        hints: [
          "9² = 81 and 10² = 100.",
          "81 < 90 < 100.",
          "So √90 is between 9 and 10."
        ],
        explanation: [
          "9² = 81, 10² = 100",
          "81 < 90 < 100",
          "√90 is between <strong>9 and 10</strong>."
        ]
      }
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">√(49/9)</span>? Give your answer as a fraction (e.g., 7/3).',
        answer: "7/3",
        hints: [
          "√(a/b) = √a / √b.",
          "√49 = 7, √9 = 3.",
          "= 7/3."
        ],
        explanation: [
          "√(49/9) = √49 / √9",
          "= 7/3 = <strong>7/3</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Simplify <span class="math">√128</span>.',
        choices: ["8√2", "4√8", "2√32", "16√2"],
        answer: "8√2",
        hints: [
          "Factor 128: 128 = 64 × 2.",
          "√128 = √64 × √2.",
          "= 8√2."
        ],
        explanation: [
          "128 = 64 × 2",
          "√128 = √64 × √2 = <strong>8√2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'If <span class="math">x² = 144</span>, what is the positive value of x?',
        answer: "12",
        hints: [
          "Take the square root of both sides.",
          "x = √144.",
          "√144 = 12."
        ],
        explanation: [
          "x² = 144",
          "x = √144 = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">√3 × √12</span>?',
        choices: ["4", "6", "√15", "36"],
        answer: "6",
        hints: [
          "√3 × √12 = √(3 × 12) = √36.",
          "√36 = 6.",
          "Answer: 6."
        ],
        explanation: [
          "√3 × √12 = √(3 × 12) = √36",
          "= <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Simplify <span class="math">√200</span>. If √200 = a√b (simplified), what is a?',
        answer: "10",
        hints: [
          "Factor 200: 200 = 100 × 2.",
          "√200 = √100 × √2.",
          "= 10√2, so a = 10."
        ],
        explanation: [
          "200 = 100 × 2",
          "√200 = √100 × √2 = 10√2",
          "a = <strong>10</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'If <span class="math">x² = 225</span>, what is the positive value of x?',
        choices: ["12", "13", "14", "15"],
        answer: "15",
        hints: [
          "x = √225.",
          "15 × 15 = 225.",
          "x = 15."
        ],
        explanation: [
          "x² = 225",
          "x = √225 = <strong>15</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'What is <span class="math">√(81/4)</span>? Give your answer as a decimal.',
        answer: "4.5",
        hints: [
          "√(81/4) = √81 / √4.",
          "= 9 / 2.",
          "= 4.5."
        ],
        explanation: [
          "√(81/4) = √81 / √4 = 9/2",
          "= <strong>4.5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">√5 × √20</span>?',
        choices: ["10", "25", "√25", "5√4"],
        answer: "10",
        hints: [
          "√5 × √20 = √(5 × 20) = √100.",
          "√100 = 10.",
          "Answer: 10."
        ],
        explanation: [
          "√5 × √20 = √(5 × 20) = √100",
          "= <strong>10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Simplify <span class="math">2√18</span>. If the result is a√b (simplified), what is a?',
        answer: "6",
        hints: [
          "First simplify √18: 18 = 9 × 2, so √18 = 3√2.",
          "Then 2√18 = 2 × 3√2 = 6√2.",
          "a = 6."
        ],
        explanation: [
          "√18 = √9 × √2 = 3√2",
          "2√18 = 2 × 3√2 = 6√2",
          "a = <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Solve: <span class="math">x² + 5 = 30</span>. What is the positive value of x?',
        choices: ["4", "5", "6", "25"],
        answer: "5",
        hints: [
          "Subtract 5 from both sides: x² = 25.",
          "Take the square root: x = √25.",
          "x = 5."
        ],
        explanation: [
          "x² + 5 = 30 → x² = 25",
          "x = √25 = <strong>5</strong>"
        ]
      }
    ]
  }
};
