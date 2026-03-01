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
      },
      // ── 20 additional boss questions ──────────────────────────
      {
        type: "numeric", difficulty: 3,
        question: 'Solve the proportion: <span class="math">\\frac{9}{15} = \\frac{x}{25}</span>. What is x?',
        answer: "15",
        hints: [
          "Cross-multiply: 9 × 25 = 15 × x.",
          "225 = 15x.",
          "x = 225 ÷ 15 = 15."
        ],
        explanation: [
          "Cross-multiply: 9 \\times 25 = 15 \\times x",
          "225 = 15x",
          "x = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A printer prints 24 pages in 4 minutes. At the same rate, how many pages does it print in 15 minutes?',
        choices: ["60", "72", "90", "96"],
        answer: "90",
        hints: [
          "Rate = 24 ÷ 4 = 6 pages per minute.",
          "In 15 minutes: 6 × 15 = ?",
          "= 90 pages."
        ],
        explanation: [
          "Rate = 24 ÷ 4 = 6 pages/min",
          "6 × 15 = <strong>90 pages</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A runner completes a 5-km race in 20 minutes. At the same pace, how many minutes would a 12-km race take?',
        answer: "48",
        hints: [
          "Rate = 5 km / 20 min, so 1 km takes 4 minutes.",
          "12 km × 4 min/km = ?",
          "= 48 minutes."
        ],
        explanation: [
          "Time per km = 20 ÷ 5 = 4 min/km",
          "12 × 4 = <strong>48 minutes</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two gears are meshed. Gear A has 20 teeth and Gear B has 50 teeth. If Gear A turns 10 times, how many times does Gear B turn?',
        choices: ["2", "4", "5", "25"],
        answer: "4",
        hints: [
          "The teeth ratio determines turns: 20 × 10 = 200 total teeth engaged.",
          "Gear B turns: 200 ÷ 50 = ?",
          "= 4 turns."
        ],
        explanation: [
          "Total teeth engaged = 20 × 10 = 200",
          "Gear B turns = 200 ÷ 50 = <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A recipe for 8 cookies uses <span class="math">\\frac{3}{4}</span> cup of butter. How many cups of butter are needed for 32 cookies? Give your answer as a whole number.',
        answer: "3",
        hints: [
          "Scale factor = 32 ÷ 8 = 4.",
          "Butter = (3/4) × 4 = ?",
          "= 3 cups."
        ],
        explanation: [
          "Scale factor = 32 ÷ 8 = 4",
          "(3/4) × 4 = 3",
          "Butter needed = <strong>3 cups</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Sam drives 150 miles in 2.5 hours, then 100 miles in 2 hours. What is his average speed for the whole trip?',
        choices: ["50 mph", "55.6 mph", "62.5 mph", "56 mph"],
        answer: "55.6 mph",
        hints: [
          "Total distance = 150 + 100 = 250 miles.",
          "Total time = 2.5 + 2 = 4.5 hours.",
          "Average speed = 250 ÷ 4.5 ≈ 55.6 mph."
        ],
        explanation: [
          "Total distance = 250 miles, total time = 4.5 hours",
          "Average speed = 250 ÷ 4.5",
          "≈ <strong>55.6 mph</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A map uses a scale of 1 inch : 8 miles. Two towns are 45 miles apart in real life. How many inches apart are they on the map? Give your answer as a decimal.',
        answer: "5.625",
        hints: [
          "Map distance = real distance ÷ scale factor.",
          "45 ÷ 8 = ?",
          "= 5.625 inches."
        ],
        explanation: [
          "Map distance = 45 ÷ 8",
          "= 5.625",
          "The towns are <strong>5.625 inches</strong> apart on the map."
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Pipe X fills a tank in 10 hours. Pipe Y drains it in 15 hours. If both are open, how many hours to fill the empty tank?',
        choices: ["25", "30", "6", "12"],
        answer: "30",
        hints: [
          "Fill rate = 1/10 per hour. Drain rate = 1/15 per hour.",
          "Net rate = 1/10 − 1/15 = 3/30 − 2/30 = 1/30 per hour.",
          "Time = 1 ÷ (1/30) = 30 hours."
        ],
        explanation: [
          "Net rate = 1/10 − 1/15 = 1/30 per hour",
          "Time = 1 ÷ (1/30)",
          "= <strong>30 hours</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Alice can mow a lawn in 3 hours. Bob can mow it in 6 hours. Charlie can mow it in 9 hours. Working together, how many hours does it take? Give your answer as a fraction (e.g., 18/11).',
        answer: "18/11",
        hints: [
          "Rates: Alice = 1/3, Bob = 1/6, Charlie = 1/9 per hour.",
          "Combined = 1/3 + 1/6 + 1/9 = 6/18 + 3/18 + 2/18 = 11/18.",
          "Time = 18/11 hours."
        ],
        explanation: [
          "Combined rate = 1/3 + 1/6 + 1/9 = 11/18 per hour",
          "Time = 1 ÷ (11/18) = 18/11",
          "= <strong>18/11 hours</strong> (about 1 hr 38 min)"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A boat travels 24 km upstream in 3 hours and 24 km downstream in 2 hours. What is the speed of the current?',
        choices: ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
        answer: "2 km/h",
        hints: [
          "Upstream speed = 24 ÷ 3 = 8 km/h. Downstream speed = 24 ÷ 2 = 12 km/h.",
          "Current = (downstream − upstream) ÷ 2.",
          "= (12 − 8) ÷ 2 = 2 km/h."
        ],
        explanation: [
          "Upstream = 8 km/h, Downstream = 12 km/h",
          "Current = (12 − 8) ÷ 2",
          "= <strong>2 km/h</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A school has boys and girls in the ratio 5:7. If there are 180 students total, how many more girls than boys are there?',
        answer: "30",
        hints: [
          "Total parts = 5 + 7 = 12. Each part = 180 ÷ 12 = 15.",
          "Boys = 5 × 15 = 75. Girls = 7 × 15 = 105.",
          "Difference = 105 − 75 = 30."
        ],
        explanation: [
          "Each part = 180 ÷ 12 = 15",
          "Boys = 75, Girls = 105",
          "Difference = <strong>30</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A photograph is 4 inches by 6 inches. It is enlarged so the longer side becomes 15 inches. What is the new shorter side?',
        choices: ["8 inches", "9 inches", "10 inches", "12 inches"],
        answer: "10 inches",
        hints: [
          "Scale factor = 15 ÷ 6 = 2.5.",
          "New shorter side = 4 × 2.5 = ?",
          "= 10 inches."
        ],
        explanation: [
          "Scale factor = 15 ÷ 6 = 2.5",
          "New shorter side = 4 × 2.5",
          "= <strong>10 inches</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Car A leaves at 8:00 AM going 55 mph. Car B leaves the same spot at 9:00 AM going 70 mph in the same direction. At what time does Car B catch Car A? Give the number of hours after 8:00 AM as a decimal (e.g., 4.5).',
        answer: "4.67",
        hints: [
          "At time t hours after 9 AM, Car A has traveled 55(t+1) miles, Car B has traveled 70t miles.",
          "Set equal: 55(t+1) = 70t → 55t + 55 = 70t → 55 = 15t → t = 55/15 ≈ 3.67 hours after 9 AM.",
          "That is about 4.67 hours after 8 AM (≈ 12:40 PM)."
        ],
        explanation: [
          "55(t+1) = 70t → 15t = 55 → t ≈ 3.67 hr after 9 AM",
          "= 4.67 hours after 8 AM",
          "Car B catches Car A about <strong>4.67</strong> hours after 8 AM."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A machine makes 360 parts in 6 hours. A second machine makes 280 parts in 8 hours. Which machine has the higher rate?',
        choices: ["First machine (60/hr)", "Second machine (35/hr)", "They are equal", "Cannot be determined"],
        answer: "First machine (60/hr)",
        hints: [
          "First machine: 360 ÷ 6 = 60 parts/hour.",
          "Second machine: 280 ÷ 8 = 35 parts/hour.",
          "60 > 35, so the first machine is faster."
        ],
        explanation: [
          "First: 360 ÷ 6 = 60 parts/hr",
          "Second: 280 ÷ 8 = 35 parts/hr",
          "<strong>First machine</strong> has the higher rate."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">\\frac{x}{4} = \\frac{21}{12}</span>. What is x?',
        answer: "7",
        hints: [
          "Cross-multiply: 12x = 4 × 21.",
          "12x = 84.",
          "x = 84 ÷ 12 = 7."
        ],
        explanation: [
          "12x = 4 × 21 = 84",
          "x = 84 ÷ 12",
          "x = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A 6-foot person casts an 8-foot shadow. A nearby tree casts a 32-foot shadow. How tall is the tree?',
        choices: ["18 feet", "20 feet", "24 feet", "28 feet"],
        answer: "24 feet",
        hints: [
          "Set up a proportion: person/shadow = tree/shadow.",
          "6/8 = x/32. Cross-multiply: 6 × 32 = 8x.",
          "192 = 8x → x = 24 feet."
        ],
        explanation: [
          "6/8 = x/32",
          "6 × 32 = 8x → 192 = 8x",
          "x = <strong>24 feet</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A mixture requires cement, sand, and gravel in the ratio 1:3:5. If you need 54 kg of the mixture total, how many kg of sand are needed?',
        answer: "18",
        hints: [
          "Total parts = 1 + 3 + 5 = 9.",
          "Each part = 54 ÷ 9 = 6 kg.",
          "Sand = 3 × 6 = 18 kg."
        ],
        explanation: [
          "Total parts = 9, each part = 54 ÷ 9 = 6 kg",
          "Sand = 3 × 6",
          "= <strong>18 kg</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A plane flies 600 miles with a tailwind in 2 hours and the return trip against the wind takes 3 hours. What is the wind speed?',
        choices: ["25 mph", "50 mph", "75 mph", "100 mph"],
        answer: "50 mph",
        hints: [
          "With wind: 600/2 = 300 mph. Against wind: 600/3 = 200 mph.",
          "Let plane speed = p, wind speed = w. Then p + w = 300 and p − w = 200.",
          "Subtract: 2w = 100, so w = 50 mph."
        ],
        explanation: [
          "With wind: 300 mph. Against wind: 200 mph.",
          "2w = 300 − 200 = 100",
          "w = <strong>50 mph</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'It takes 5 workers 8 days to build a wall. How many days would it take 10 workers to build the same wall?',
        answer: "4",
        hints: [
          "Total work = 5 × 8 = 40 worker-days.",
          "With 10 workers: 40 ÷ 10 = ?",
          "= 4 days."
        ],
        explanation: [
          "Total work = 5 × 8 = 40 worker-days",
          "Time for 10 workers = 40 ÷ 10",
          "= <strong>4 days</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A faucet fills a bathtub in 8 minutes. The drain empties it in 12 minutes. If both are open with the tub empty, how many minutes to fill the tub?',
        choices: ["16", "20", "24", "10"],
        answer: "24",
        hints: [
          "Fill rate = 1/8 per min. Drain rate = 1/12 per min.",
          "Net rate = 1/8 − 1/12 = 3/24 − 2/24 = 1/24 per min.",
          "Time = 1 ÷ (1/24) = 24 minutes."
        ],
        explanation: [
          "Net rate = 1/8 − 1/12 = 1/24 per minute",
          "Time = 1 ÷ (1/24)",
          "= <strong>24 minutes</strong>"
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
      },
      // ── 20 additional boss questions ──────────────────────────
      {
        type: "numeric", difficulty: 3,
        question: 'A jacket originally costs $80. It is marked down 25%, then that sale price is marked down another 20%. What is the final price?',
        answer: "48",
        hints: [
          "After 25% off: 80 × 0.75 = $60.",
          "After another 20% off: 60 × 0.80 = ?",
          "= $48."
        ],
        explanation: [
          "80 × 0.75 = 60",
          "60 × 0.80 = <strong>48</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A store raises a $50 item by 30%, then offers a 30% discount on the new price. What is the final price?',
        choices: ["$50.00", "$45.50", "$49.00", "$47.25"],
        answer: "$45.50",
        hints: [
          "After 30% increase: 50 × 1.30 = $65.",
          "After 30% discount: 65 × 0.70 = ?",
          "= $45.50. Note: raising and lowering by the same percent does NOT get you back to the original!"
        ],
        explanation: [
          "50 × 1.30 = 65",
          "65 × 0.70 = <strong>$45.50</strong>",
          "A 30% increase then 30% decrease is a 9% net decrease."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A shirt costs $35 before tax. After 6% sales tax, what is the total cost? (Give your answer as a decimal, no dollar sign.)',
        answer: "37.1",
        hints: [
          "Tax = 6% of 35 = 0.06 × 35 = $2.10.",
          "Total = 35 + 2.10 = ?",
          "= $37.10."
        ],
        explanation: [
          "Tax = 35 × 0.06 = $2.10",
          "Total = 35 + 2.10 = <strong>37.1</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'In a class of 40 students, 60% passed a test. Of those who passed, 75% scored above 80. How many students scored above 80?',
        choices: ["15", "18", "20", "24"],
        answer: "18",
        hints: [
          "Students who passed: 60% of 40 = 24.",
          "Of those, 75% scored above 80: 75% of 24 = ?",
          "= 18 students."
        ],
        explanation: [
          "Passed = 0.60 × 40 = 24",
          "Above 80 = 0.75 × 24 = <strong>18</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A population of 500 bacteria increases by 20% every hour. How many bacteria are there after 2 hours?',
        answer: "720",
        hints: [
          "After 1 hour: 500 × 1.20 = 600.",
          "After 2 hours: 600 × 1.20 = ?",
          "= 720."
        ],
        explanation: [
          "After 1 hour: 500 × 1.20 = 600",
          "After 2 hours: 600 × 1.20 = <strong>720</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A laptop was $800 last year. This year it costs $680. What is the percent decrease?',
        choices: ["12%", "15%", "18%", "20%"],
        answer: "15%",
        hints: [
          "Decrease = 800 − 680 = $120.",
          "Percent decrease = (120 ÷ 800) × 100.",
          "= 15%."
        ],
        explanation: [
          "Decrease = 800 − 680 = 120",
          "(120/800) × 100 = <strong>15%</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'After a 15% tip on a $24 meal and 7% tax on the meal, what is the total bill? (Give your answer as a decimal, no dollar sign.)',
        answer: "29.28",
        hints: [
          "Tip = 15% of 24 = $3.60. Tax = 7% of 24 = $1.68.",
          "Total = 24 + 3.60 + 1.68 = ?",
          "= $29.28."
        ],
        explanation: [
          "Tip = 0.15 × 24 = $3.60",
          "Tax = 0.07 × 24 = $1.68",
          "Total = 24 + 3.60 + 1.68 = <strong>29.28</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A car\'s value depreciates 15% per year. If it is worth $20,000 now, what will it be worth after 2 years?',
        choices: ["$14,000", "$14,450", "$17,000", "$15,200"],
        answer: "$14,450",
        hints: [
          "After year 1: 20000 × 0.85 = $17,000.",
          "After year 2: 17000 × 0.85 = ?",
          "= $14,450."
        ],
        explanation: [
          "Year 1: 20000 × 0.85 = 17000",
          "Year 2: 17000 × 0.85 = <strong>$14,450</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: '25% of a number equals 40% of 75. What is the number?',
        answer: "120",
        hints: [
          "First find 40% of 75: 0.40 × 75 = 30.",
          "So 25% of x = 30. That means 0.25x = 30.",
          "x = 30 ÷ 0.25 = 120."
        ],
        explanation: [
          "40% of 75 = 30",
          "0.25x = 30",
          "x = 30 ÷ 0.25 = <strong>120</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A shop buys an item for $25, marks it up by 80%, then offers a 25% discount. What is the sale price?',
        choices: ["$30", "$33.75", "$35", "$36.25"],
        answer: "$33.75",
        hints: [
          "Markup: 25 × 1.80 = $45.",
          "Discount: 45 × 0.75 = ?",
          "= $33.75."
        ],
        explanation: [
          "Marked up price = 25 × 1.80 = $45",
          "Sale price = 45 × 0.75 = <strong>$33.75</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A company has 250 employees. 40% are male. If 15 more males are hired (and no one else), what percent of the total workforce is now male? (Round to one decimal place.)',
        answer: "43.4",
        hints: [
          "Original males = 40% of 250 = 100.",
          "New total = 250 + 15 = 265, new males = 100 + 15 = 115.",
          "(115 ÷ 265) × 100 ≈ 43.4%."
        ],
        explanation: [
          "Original males = 100, new males = 115, new total = 265",
          "Percent = (115/265) × 100 ≈ 43.4%",
          "≈ <strong>43.4</strong>%"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A price increases by 50%, then decreases by 40%. Compared to the original, the final price is:',
        choices: ["10% less", "10% more", "The same", "5% less"],
        answer: "10% less",
        hints: [
          "Start with $100. Increase 50%: $150.",
          "Decrease 40%: 150 × 0.60 = $90.",
          "$90 is $10 less than $100, so 10% less."
        ],
        explanation: [
          "100 × 1.50 = 150",
          "150 × 0.60 = 90",
          "90 is <strong>10% less</strong> than 100."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'After an 18% discount, a bicycle costs $328. What was the original price?',
        answer: "400",
        hints: [
          "After 18% off, you pay 82% of the original.",
          "82% of original = $328.",
          "Original = 328 ÷ 0.82 = $400."
        ],
        explanation: [
          "82% of original = 328",
          "Original = 328 ÷ 0.82",
          "= <strong>400</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A salesperson earns a base salary of $400 per week plus 5% commission on sales. If they sell $3,200 worth of goods in a week, what is their total pay?',
        choices: ["$540", "$560", "$580", "$600"],
        answer: "$560",
        hints: [
          "Commission = 5% of $3,200 = $160.",
          "Total pay = $400 + $160.",
          "= $560."
        ],
        explanation: [
          "Commission = 0.05 × 3200 = $160",
          "Total = 400 + 160 = <strong>$560</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'An investment of $2,000 earns 8% simple interest per year. How much total money do you have after 3 years?',
        answer: "2480",
        hints: [
          "Interest per year = 8% of 2000 = $160.",
          "Total interest for 3 years = 160 × 3 = $480.",
          "Total money = 2000 + 480 = $2,480."
        ],
        explanation: [
          "Yearly interest = 0.08 × 2000 = $160",
          "3-year interest = 160 × 3 = $480",
          "Total = 2000 + 480 = <strong>2480</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A town\'s population increases by 5% one year and decreases by 5% the next year. If the initial population was 10,000, what is the population after both changes?',
        choices: ["10,000", "9,975", "9,950", "10,025"],
        answer: "9,975",
        hints: [
          "After 5% increase: 10,000 × 1.05 = 10,500.",
          "After 5% decrease: 10,500 × 0.95 = ?",
          "= 9,975."
        ],
        explanation: [
          "10,000 × 1.05 = 10,500",
          "10,500 × 0.95 = <strong>9,975</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A pair of shoes costs $120 before a 15% discount, then 9% tax is applied to the discounted price. What is the final price? (Give as a decimal.)',
        answer: "111.18",
        hints: [
          "After 15% discount: 120 × 0.85 = $102.",
          "Tax on $102: 102 × 0.09 = $9.18.",
          "Final = 102 + 9.18 = $111.18."
        ],
        explanation: [
          "Discounted = 120 × 0.85 = $102",
          "Tax = 102 × 0.09 = $9.18",
          "Final = 102 + 9.18 = <strong>111.18</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A tank is 30% full. After adding 35 liters, it is 65% full. What is the tank\'s total capacity?',
        choices: ["80 liters", "90 liters", "100 liters", "120 liters"],
        answer: "100 liters",
        hints: [
          "35 liters filled it from 30% to 65%, which is 35% of capacity.",
          "35% of capacity = 35 liters.",
          "Capacity = 35 ÷ 0.35 = 100 liters."
        ],
        explanation: [
          "65% − 30% = 35% of capacity = 35 liters",
          "Capacity = 35 ÷ 0.35",
          "= <strong>100 liters</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A store is having a "buy 2, get 1 free" sale on $12 items. What is the effective percent discount per item? (Round to one decimal place.)',
        answer: "33.3",
        hints: [
          "You pay for 2 items: 2 × $12 = $24 for 3 items.",
          "Normal cost for 3 items = 3 × $12 = $36.",
          "Discount = (36 − 24) / 36 × 100 = 33.3%."
        ],
        explanation: [
          "Pay $24 instead of $36 for 3 items",
          "Savings = $12 out of $36",
          "12/36 × 100 ≈ <strong>33.3%</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'If 8 is what percent of 32?',
        choices: ["20%", "25%", "30%", "40%"],
        answer: "25%",
        hints: [
          "Percent = (part ÷ whole) × 100.",
          "8 ÷ 32 = 0.25.",
          "0.25 × 100 = 25%."
        ],
        explanation: [
          "8/32 = 0.25",
          "0.25 × 100 = <strong>25%</strong>"
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
      },
      // ── 20 additional boss questions ──────────────────────────
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">√288</span>. If <span class="math">√288 = a√b</span> (simplified), what is a?',
        answer: "12",
        hints: [
          "Factor 288: 288 = 144 × 2.",
          "√288 = √144 × √2.",
          "= 12√2, so a = 12."
        ],
        explanation: [
          "288 = 144 × 2",
          "√288 = √144 × √2 = 12√2",
          "a = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">√7 × √7 × √7 × √7</span>?',
        choices: ["7", "14", "49", "√2401"],
        answer: "49",
        hints: [
          "√7 × √7 = 7.",
          "So (√7)⁴ = (√7 × √7) × (√7 × √7) = 7 × 7.",
          "= 49."
        ],
        explanation: [
          "(√7)² = 7",
          "(√7)⁴ = 7 × 7",
          "= <strong>49</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Solve: <span class="math">2x² = 72</span>. What is the positive value of x?',
        answer: "6",
        hints: [
          "Divide both sides by 2: x² = 36.",
          "Take the square root: x = √36.",
          "x = 6."
        ],
        explanation: [
          "2x² = 72 → x² = 36",
          "x = √36 = <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Which is larger: <span class="math">3√5</span> or <span class="math">2√12</span>?',
        choices: ["3√5 is larger", "2√12 is larger", "They are equal", "Cannot be determined"],
        answer: "2√12 is larger",
        hints: [
          "3√5: square it → 9 × 5 = 45.",
          "2√12: square it → 4 × 12 = 48.",
          "48 > 45, so 2√12 is larger."
        ],
        explanation: [
          "(3√5)² = 9 × 5 = 45",
          "(2√12)² = 4 × 12 = 48",
          "48 > 45, so <strong>2√12 is larger</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">3√8 + 2√2</span>. If the result is <span class="math">a√2</span>, what is a?',
        answer: "8",
        hints: [
          "First simplify √8: √8 = 2√2.",
          "3√8 = 3 × 2√2 = 6√2.",
          "6√2 + 2√2 = 8√2, so a = 8."
        ],
        explanation: [
          "√8 = 2√2, so 3√8 = 6√2",
          "6√2 + 2√2 = 8√2",
          "a = <strong>8</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is <span class="math">√(16 × 25)</span>?',
        choices: ["10", "15", "20", "400"],
        answer: "20",
        hints: [
          "√(16 × 25) = √16 × √25.",
          "= 4 × 5.",
          "= 20."
        ],
        explanation: [
          "√(16 × 25) = √16 × √25",
          "= 4 × 5 = <strong>20</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Simplify <span class="math">√(180)</span>. If <span class="math">√180 = a√b</span> (simplified), what is a?',
        answer: "6",
        hints: [
          "Factor 180: 180 = 36 × 5.",
          "√180 = √36 × √5 = 6√5.",
          "a = 6."
        ],
        explanation: [
          "180 = 36 × 5",
          "√180 = √36 × √5 = 6√5",
          "a = <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Solve: <span class="math">3x² − 7 = 41</span>. What is the positive value of x?',
        choices: ["3", "4", "5", "6"],
        answer: "4",
        hints: [
          "Add 7 to both sides: 3x² = 48.",
          "Divide by 3: x² = 16.",
          "x = √16 = 4."
        ],
        explanation: [
          "3x² − 7 = 41 → 3x² = 48 → x² = 16",
          "x = √16 = <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'What is <span class="math">√6 × √24</span>?',
        answer: "12",
        hints: [
          "√6 × √24 = √(6 × 24) = √144.",
          "√144 = 12.",
          "Answer: 12."
        ],
        explanation: [
          "√6 × √24 = √(6 × 24) = √144",
          "= <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Between which two consecutive integers is <span class="math">√150</span>?',
        choices: ["11 and 12", "12 and 13", "13 and 14", "14 and 15"],
        answer: "12 and 13",
        hints: [
          "12² = 144 and 13² = 169.",
          "144 < 150 < 169.",
          "So √150 is between 12 and 13."
        ],
        explanation: [
          "12² = 144, 13² = 169",
          "144 < 150 < 169",
          "√150 is between <strong>12 and 13</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Simplify <span class="math">5√12 − 2√27</span>. If the result is <span class="math">a√3</span>, what is a?',
        answer: "4",
        hints: [
          "√12 = 2√3, so 5√12 = 10√3.",
          "√27 = 3√3, so 2√27 = 6√3.",
          "10√3 − 6√3 = 4√3, so a = 4."
        ],
        explanation: [
          "5√12 = 5 × 2√3 = 10√3",
          "2√27 = 2 × 3√3 = 6√3",
          "10√3 − 6√3 = <strong>4</strong>√3"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">\\frac{√50}{√2}</span>?',
        choices: ["5", "√25", "25", "√48"],
        answer: "5",
        hints: [
          "√50 / √2 = √(50/2) = √25.",
          "√25 = 5.",
          "Answer: 5."
        ],
        explanation: [
          "√50 / √2 = √(50 ÷ 2) = √25",
          "= <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Solve: <span class="math">x² + x² = 50</span>. What is the positive value of x?',
        answer: "5",
        hints: [
          "Combine like terms: 2x² = 50.",
          "Divide by 2: x² = 25.",
          "x = √25 = 5."
        ],
        explanation: [
          "x² + x² = 2x² = 50",
          "x² = 25",
          "x = √25 = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Simplify <span class="math">√72</span>.',
        choices: ["6√2", "3√8", "4√3", "2√18"],
        answer: "6√2",
        hints: [
          "Factor 72: 72 = 36 × 2.",
          "√72 = √36 × √2 = 6√2.",
          "Check the other choices: 3√8 = 3 × 2√2 = 6√2, but 6√2 is in simplest form."
        ],
        explanation: [
          "72 = 36 × 2",
          "√72 = √36 × √2",
          "= <strong>6√2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A square has an area of 338 square cm. If the side length is <span class="math">a√b</span> cm (simplified), what is a?',
        answer: "13",
        hints: [
          "Side = √338.",
          "Factor 338: 338 = 169 × 2.",
          "√338 = √169 × √2 = 13√2, so a = 13."
        ],
        explanation: [
          "Side = √338",
          "338 = 169 × 2",
          "√338 = 13√2, so a = <strong>13</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">(2√3)²</span>?',
        choices: ["6", "12", "4√3", "36"],
        answer: "12",
        hints: [
          "(2√3)² = 2² × (√3)².",
          "= 4 × 3.",
          "= 12."
        ],
        explanation: [
          "(2√3)² = 2² × (√3)²",
          "= 4 × 3",
          "= <strong>12</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">\\frac{√(100)}{√(4)}</span>?',
        answer: "5",
        hints: [
          "√100 = 10, √4 = 2.",
          "10 ÷ 2 = 5.",
          "Or: √(100/4) = √25 = 5."
        ],
        explanation: [
          "√100 / √4 = 10 / 2",
          "= <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Solve: <span class="math">(x + 1)² = 49</span>. What is the positive value of x?',
        choices: ["5", "6", "7", "8"],
        answer: "6",
        hints: [
          "Take the square root of both sides: x + 1 = 7 (positive root).",
          "x = 7 − 1.",
          "x = 6."
        ],
        explanation: [
          "(x + 1)² = 49 → x + 1 = 7",
          "x = 7 − 1",
          "x = <strong>6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Simplify <span class="math">4√3 + 2√48</span>. If the result is <span class="math">a√3</span>, what is a?',
        answer: "12",
        hints: [
          "Simplify √48: 48 = 16 × 3, so √48 = 4√3.",
          "2√48 = 2 × 4√3 = 8√3.",
          "4√3 + 8√3 = 12√3, so a = 12."
        ],
        explanation: [
          "√48 = 4√3, so 2√48 = 8√3",
          "4√3 + 8√3 = 12√3",
          "a = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'What is <span class="math">\\frac{\\sqrt{72}}{\\sqrt{8}}</span>?',
        choices: ["3", "4", "6", "9"],
        answer: "3",
        hints: [
          "√72 / √8 = √(72/8) = √9.",
          "√9 = 3.",
          "Answer: 3."
        ],
        explanation: [
          "√72 / √8 = √(72 ÷ 8) = √9",
          "= <strong>3</strong>"
        ]
      }
    ]
  }
};
