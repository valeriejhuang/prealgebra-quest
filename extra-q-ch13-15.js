// Extra questions for Worlds 12-14 (Chapters 13-15)
// Round 1: 3 questions per topic
var EXTRA_QUESTIONS = EXTRA_QUESTIONS || {};

// ============================================================
// WORLD 12 — Chapter 13: Data & Statistics (11 topics)
// ============================================================
EXTRA_QUESTIONS[12] = [

  // --- Topic 0: Mean (Average) --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the mean of the data set: 8, 12, 6, 14, 10.',
      answer: "10",
      hints: [
        "Add all the numbers together first.",
        "The sum is 8 + 12 + 6 + 14 + 10 = 50.",
        "Divide the sum by the count of numbers (5)."
      ],
      explanation: [
        "Sum = 8 + 12 + 6 + 14 + 10 = 50.",
        "Count = 5.",
        "Mean = 50 ÷ 5 = 10."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A student scored 85, 90, 78, and 95 on four tests. What is the mean score?',
      choices: ["86", "87", "87.5", "88"],
      answer: "87",
      hints: [
        "Add all four test scores together.",
        "85 + 90 + 78 + 95 = 348.",
        "Divide by 4."
      ],
      explanation: [
        "Sum = 85 + 90 + 78 + 95 = 348.",
        "Mean = 348 ÷ 4 = 87."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of 7 numbers is 15. What is the sum of all 7 numbers?',
      answer: "105",
      hints: [
        "Mean = Sum ÷ Count.",
        "Rearrange: Sum = Mean × Count.",
        "Multiply 15 × 7."
      ],
      explanation: [
        "We know Mean = Sum ÷ Count, so Sum = Mean × Count.",
        "Sum = 15 × 7 = 105."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'The ages of 4 friends are 9, 11, 13, and 7. What is their mean age?',
      choices: ["9", "10", "11", "12"],
      answer: "10",
      hints: [
        "Add all four ages together.",
        "9 + 11 + 13 + 7 = 40.",
        "Divide by 4."
      ],
      explanation: [
        "Sum = 9 + 11 + 13 + 7 = 40.",
        "Mean = 40 ÷ 4 = 10."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A baker sold 24, 30, 18, 36, and 42 loaves over five days. What is the mean number of loaves sold per day?',
      answer: "30",
      hints: [
        "Add all five daily totals.",
        "24 + 30 + 18 + 36 + 42 = 150.",
        "Divide by 5."
      ],
      explanation: [
        "Sum = 24 + 30 + 18 + 36 + 42 = 150.",
        "Mean = 150 ÷ 5 = 30."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'The temperatures on 6 days were 55, 60, 65, 70, 75, and 45 degrees. What is the mean temperature? (Round to the nearest hundredth.)',
      choices: ["60", "61.67", "62.5", "65"],
      answer: "61.67",
      hints: [
        "Add all six temperatures together.",
        "55 + 60 + 65 + 70 + 75 + 45 = 370.",
        "Divide by 6."
      ],
      explanation: [
        "Sum = 55 + 60 + 65 + 70 + 75 + 45 = 370.",
        "Mean = 370 ÷ 6 ≈ 61.67."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the mean of: 15, 25, 35.',
      answer: "25",
      hints: [
        "Add the three numbers together.",
        "15 + 25 + 35 = 75.",
        "Divide by 3."
      ],
      explanation: [
        "Sum = 15 + 25 + 35 = 75.",
        "Mean = 75 ÷ 3 = 25."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of 9 numbers is 20. What is the sum of all 9 numbers?',
      answer: "180",
      hints: [
        "Use the relationship: Sum = Mean × Count.",
        "Mean = 20, Count = 9.",
        "Multiply 20 × 9."
      ],
      explanation: [
        "Sum = Mean × Count = 20 × 9.",
        "Sum = 180."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'The weights of 3 puppies are 5 lb, 8 lb, and 11 lb. What is the mean weight?',
      choices: ["7", "8", "9", "10"],
      answer: "8",
      hints: [
        "Add all three weights together.",
        "5 + 8 + 11 = 24.",
        "Divide by 3."
      ],
      explanation: [
        "Sum = 5 + 8 + 11 = 24.",
        "Mean = 24 ÷ 3 = 8 lb."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A gardener planted 16, 22, 28, and 34 flowers in four beds. What is the mean number of flowers per bed?',
      answer: "25",
      hints: [
        "Add all four numbers.",
        "16 + 22 + 28 + 34 = 100.",
        "Divide by 4."
      ],
      explanation: [
        "Sum = 16 + 22 + 28 + 34 = 100.",
        "Mean = 100 ÷ 4 = 25."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of 11 numbers is 14. What is the sum of all 11 numbers?',
      answer: "154",
      hints: [
        "Use the formula: Sum = Mean × Count.",
        "Mean = 14, Count = 11.",
        "Multiply 14 × 11."
      ],
      explanation: [
        "Sum = Mean × Count = 14 × 11.",
        "Sum = 154."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'The heights of 5 plants are 6, 10, 14, 18, and 22 inches. What is the mean height?',
      choices: ["10", "12", "14", "16"],
      answer: "14",
      hints: [
        "Add all five heights together.",
        "6 + 10 + 14 + 18 + 22 = 70.",
        "Divide by 5."
      ],
      explanation: [
        "Sum = 6 + 10 + 14 + 18 + 22 = 70.",
        "Mean = 70 ÷ 5 = 14."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A cyclist rode 32, 28, 40, 36, and 44 miles over five days. What is the mean distance per day?',
      answer: "36",
      hints: [
        "Add all five distances.",
        "32 + 28 + 40 + 36 + 44 = 180.",
        "Divide by 5."
      ],
      explanation: [
        "Sum = 32 + 28 + 40 + 36 + 44 = 180.",
        "Mean = 180 ÷ 5 = 36."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The mean of 6 numbers is 18. What is the sum of all 6 numbers?',
      choices: ["96", "102", "108", "114"],
      answer: "108",
      hints: [
        "Use the formula: Sum = Mean × Count.",
        "Mean = 18, Count = 6.",
        "Multiply 18 × 6."
      ],
      explanation: [
        "Sum = Mean × Count = 18 × 6.",
        "Sum = 108."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the mean of: 20, 40, 60.',
      answer: "40",
      hints: [
        "Add all three numbers together.",
        "20 + 40 + 60 = 120.",
        "Divide by 3."
      ],
      explanation: [
        "Sum = 20 + 40 + 60 = 120.",
        "Mean = 120 ÷ 3 = 40."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A farmer collected 48, 56, 32, and 64 eggs over four days. What is the mean number of eggs per day?',
      choices: ["48", "50", "52", "56"],
      answer: "50",
      hints: [
        "Add all four daily totals.",
        "48 + 56 + 32 + 64 = 200.",
        "Divide by 4."
      ],
      explanation: [
        "Sum = 48 + 56 + 32 + 64 = 200.",
        "Mean = 200 ÷ 4 = 50."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of 8 numbers is 12. What is the sum of all 8 numbers?',
      answer: "96",
      hints: [
        "Use the formula: Sum = Mean × Count.",
        "Mean = 12, Count = 8.",
        "Multiply 12 × 8."
      ],
      explanation: [
        "Sum = Mean × Count = 12 × 8.",
        "Sum = 96."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'The scores on 5 quizzes are 12, 16, 20, 24, and 28. What is the mean score?',
      choices: ["18", "20", "22", "24"],
      answer: "20",
      hints: [
        'Add all five scores together.',
        '12 + 16 + 20 + 24 + 28 = 100.',
        'Divide by 5.'
      ],
      explanation: [
        'Sum = 12 + 16 + 20 + 24 + 28 = 100.',
        'Mean = 100 ÷ 5 = 20.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A swimmer completed 5 laps in 52, 48, 55, 45, and 50 seconds. What is the mean lap time?',
      answer: "50",
      hints: [
        'Add all five lap times.',
        '52 + 48 + 55 + 45 + 50 = 250.',
        'Divide by 5.'
      ],
      explanation: [
        'Sum = 52 + 48 + 55 + 45 + 50 = 250.',
        'Mean = 250 ÷ 5 = 50 seconds.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The mean of 10 numbers is 17. What is the sum of all 10 numbers?',
      choices: ["160", "165", "170", "175"],
      answer: "170",
      hints: [
        'Use the formula: Sum = Mean × Count.',
        'Mean = 17, Count = 10.',
        'Multiply 17 × 10.'
      ],
      explanation: [
        'Sum = Mean × Count = 17 × 10.',
        'Sum = 170.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the mean of: 15, 25, 35, 45, 30.',
      answer: "30",
      hints: [
        'Add all five numbers together.',
        '15 + 25 + 35 + 45 + 30 = 150.',
        'Divide the sum by 5.'
      ],
      explanation: [
        'Sum = 15 + 25 + 35 + 45 + 30 = 150.',
        'Count = 5.',
        'Mean = 150 ÷ 5 = 30.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A store sold 48, 52, 36, 64, and 50 items over five days. What is the mean number of items sold per day?',
      choices: ["48", "49", "50", "52"],
      answer: "50",
      hints: [
        'Add the five daily totals.',
        '48 + 52 + 36 + 64 + 50 = 250.',
        'Divide by 5.'
      ],
      explanation: [
        'Sum = 48 + 52 + 36 + 64 + 50 = 250.',
        'Mean = 250 ÷ 5 = 50.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of 8 numbers is 12.5. What is the sum of all 8 numbers?',
      answer: "100",
      hints: [
        'Recall that Mean = Sum ÷ Count.',
        'So Sum = Mean × Count.',
        'Multiply 12.5 × 8.'
      ],
      explanation: [
        'Sum = Mean × Count = 12.5 × 8.',
        'Sum = 100.'
      ]
    }
  ],

  // --- Topic 1: Median --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the median of: 3, 7, 1, 9, 5.',
      answer: "5",
      hints: [
        "First, sort the numbers from least to greatest.",
        "Sorted: 1, 3, 5, 7, 9.",
        "The middle number in a list of 5 is the 3rd one."
      ],
      explanation: [
        "Sorted order: 1, 3, 5, 7, 9.",
        "There are 5 numbers, so the median is the 3rd value.",
        "Median = 5."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the median of: 4, 8, 2, 10, 6, 12?',
      choices: ["6", "7", "8", "6.5"],
      answer: "7",
      hints: [
        "Sort the data: 2, 4, 6, 8, 10, 12.",
        "With an even number of values, average the two middle ones.",
        "The two middle values are the 3rd and 4th."
      ],
      explanation: [
        "Sorted: 2, 4, 6, 8, 10, 12.",
        "Middle values are 6 and 8.",
        "Median = (6 + 8) ÷ 2 = 7."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 22, 15, 30, 18, 25, 10, 28.',
      answer: "22",
      hints: [
        "Sort the list from smallest to largest.",
        "Sorted: 10, 15, 18, 22, 25, 28, 30.",
        "With 7 values, the median is the 4th one."
      ],
      explanation: [
        "Sorted: 10, 15, 18, 22, 25, 28, 30.",
        "The 4th value out of 7 is the median.",
        "Median = 22."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the median of: 10, 20, 30, 40, 50?',
      choices: ["20", "25", "30", "35"],
      answer: "30",
      hints: [
        "The list is already in order.",
        "There are 5 numbers, so the median is the 3rd one.",
        "Count to the 3rd value."
      ],
      explanation: [
        "Sorted: 10, 20, 30, 40, 50.",
        "The 3rd value is 30, so the median is 30."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 14, 8, 20, 6, 16, 10.',
      answer: "12",
      hints: [
        "Sort the numbers: 6, 8, 10, 14, 16, 20.",
        "There are 6 values (even count), so average the 3rd and 4th.",
        "The 3rd value is 10 and the 4th value is 14."
      ],
      explanation: [
        "Sorted: 6, 8, 10, 14, 16, 20.",
        "Median = (10 + 14) ÷ 2 = 24 ÷ 2 = 12."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the median of: 33, 17, 45, 29, 21, 38, 12?',
      choices: ["21", "29", "33", "38"],
      answer: "29",
      hints: [
        "Sort the data: 12, 17, 21, 29, 33, 38, 45.",
        "There are 7 values, so the median is the 4th.",
        "Count to the 4th value."
      ],
      explanation: [
        "Sorted: 12, 17, 21, 29, 33, 38, 45.",
        "The 4th value out of 7 is 29.",
        "Median = 29."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the median of: 5, 15, 25, 35, 45.',
      answer: "25",
      hints: [
        "The list is already in order.",
        "There are 5 values, so the median is the 3rd one.",
        "Count to the 3rd value."
      ],
      explanation: [
        "Sorted: 5, 15, 25, 35, 45.",
        "The 3rd value is 25.",
        "Median = 25."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 42, 36, 50, 28, 44, 30, 48, 32.',
      answer: "39",
      hints: [
        "Sort: 28, 30, 32, 36, 42, 44, 48, 50.",
        "There are 8 values (even), so average the 4th and 5th.",
        "4th = 36, 5th = 42."
      ],
      explanation: [
        "Sorted: 28, 30, 32, 36, 42, 44, 48, 50.",
        "Median = (36 + 42) ÷ 2 = 78 ÷ 2 = 39."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the median of: 11, 19, 7, 3, 15?',
      choices: ["7", "11", "15", "19"],
      answer: "11",
      hints: [
        "Sort the numbers from least to greatest.",
        "Sorted: 3, 7, 11, 15, 19.",
        "With 5 values, the median is the 3rd."
      ],
      explanation: [
        "Sorted: 3, 7, 11, 15, 19.",
        "The 3rd value is 11.",
        "Median = 11."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 55, 40, 65, 70, 50, 60.',
      answer: "57.5",
      hints: [
        "Sort the numbers: 40, 50, 55, 60, 65, 70.",
        "There are 6 values (even count), so average the 3rd and 4th.",
        "3rd = 55, 4th = 60."
      ],
      explanation: [
        "Sorted: 40, 50, 55, 60, 65, 70.",
        "Median = (55 + 60) ÷ 2 = 115 ÷ 2 = 57.5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 84, 76, 92, 68, 88, 72, 96.',
      answer: "84",
      hints: [
        "Sort the list: 68, 72, 76, 84, 88, 92, 96.",
        "There are 7 values, so the median is the 4th.",
        "Count to the 4th value."
      ],
      explanation: [
        "Sorted: 68, 72, 76, 84, 88, 92, 96.",
        "The 4th value out of 7 is 84.",
        "Median = 84."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the median of: 2, 8, 14, 20, 26?',
      choices: ["8", "12", "14", "20"],
      answer: "14",
      hints: [
        "The list is already in order.",
        "There are 5 values, so the median is the 3rd.",
        "Count to the 3rd value."
      ],
      explanation: [
        "Sorted: 2, 8, 14, 20, 26.",
        "The 3rd value is 14.",
        "Median = 14."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 63, 47, 55, 71, 39, 81.',
      answer: "59",
      hints: [
        "Sort the numbers: 39, 47, 55, 63, 71, 81.",
        "There are 6 values (even), so average the 3rd and 4th.",
        "3rd = 55, 4th = 63."
      ],
      explanation: [
        "Sorted: 39, 47, 55, 63, 71, 81.",
        "Median = (55 + 63) ÷ 2 = 118 ÷ 2 = 59."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 91, 78, 85, 64, 73, 88, 70.',
      answer: "78",
      hints: [
        "Sort the list: 64, 70, 73, 78, 85, 88, 91.",
        "There are 7 values, so the median is the 4th.",
        "Count to the 4th value."
      ],
      explanation: [
        "Sorted: 64, 70, 73, 78, 85, 88, 91.",
        "The 4th value out of 7 is 78.",
        "Median = 78."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the median of: 4, 12, 20, 28, 36?',
      choices: ["12", "16", "20", "28"],
      answer: "20",
      hints: [
        "The list is already in order.",
        "There are 5 values, so the median is the 3rd.",
        "Count to the 3rd value."
      ],
      explanation: [
        "Sorted: 4, 12, 20, 28, 36.",
        "The 3rd value is 20.",
        "Median = 20."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 37, 52, 19, 44, 28, 61.',
      answer: "40.5",
      hints: [
        "Sort the numbers: 19, 28, 37, 44, 52, 61.",
        "There are 6 values (even count), so average the 3rd and 4th.",
        "3rd = 37, 4th = 44."
      ],
      explanation: [
        "Sorted: 19, 28, 37, 44, 52, 61.",
        "Median = (37 + 44) ÷ 2 = 81 ÷ 2 = 40.5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 95, 80, 70, 85, 90, 75, 65.',
      answer: "80",
      hints: [
        "Sort the list: 65, 70, 75, 80, 85, 90, 95.",
        "There are 7 values, so the median is the 4th.",
        "Count to the 4th value."
      ],
      explanation: [
        "Sorted: 65, 70, 75, 80, 85, 90, 95.",
        "The 4th value out of 7 is 80.",
        "Median = 80."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 31, 47, 23, 56, 38, 42.',
      answer: "40",
      hints: [
        'Sort the numbers: 23, 31, 38, 42, 47, 56.',
        'There are 6 values (even count), so average the 3rd and 4th.',
        '3rd = 38, 4th = 42.'
      ],
      explanation: [
        'Sorted: 23, 31, 38, 42, 47, 56.',
        'Median = (38 + 42) ÷ 2 = 80 ÷ 2 = 40.'
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the median of: 15, 25, 35, 45, 55?',
      choices: ["25", "30", "35", "45"],
      answer: "35",
      hints: [
        'The list is already in order.',
        'There are 5 values, so the median is the 3rd one.',
        'Count to the 3rd value.'
      ],
      explanation: [
        'Sorted: 15, 25, 35, 45, 55.',
        'The 3rd value is 35.',
        'Median = 35.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the median of: 72, 58, 64, 89, 46, 81, 53.',
      answer: "64",
      hints: [
        'Sort the list: 46, 53, 58, 64, 72, 81, 89.',
        'There are 7 values, so the median is the 4th.',
        'Count to the 4th value.'
      ],
      explanation: [
        'Sorted: 46, 53, 58, 64, 72, 81, 89.',
        'The 4th value out of 7 is 64.',
        'Median = 64.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the median of: 22, 15, 30, 8, 19.',
      answer: "19",
      hints: [
        'First arrange the numbers in order.',
        'Ordered: 8, 15, 19, 22, 30.',
        'The middle (3rd) value is the median.'
      ],
      explanation: [
        'Sorted order: 8, 15, 19, 22, 30.',
        'With 5 values, the median is the 3rd value.',
        'Median = 19.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the median of: 14, 8, 22, 10, 18, 6?',
      choices: ["10", "11", "12", "14"],
      answer: "12",
      hints: [
        'Sort the six numbers: 6, 8, 10, 14, 18, 22.',
        'With an even count, average the two middle values.',
        'Average the 3rd and 4th values.'
      ],
      explanation: [
        'Sorted: 6, 8, 10, 14, 18, 22.',
        'Middle two values: 10 and 14.',
        'Median = (10 + 14) ÷ 2 = 12.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'Nine students scored 72, 85, 91, 68, 77, 83, 95, 60, 88 on a test. What is the median score?',
      answer: "83",
      hints: [
        'Sort all nine scores from lowest to highest.',
        '60, 68, 72, 77, 83, 85, 88, 91, 95.',
        'The 5th value (middle of 9) is the median.'
      ],
      explanation: [
        'Sorted: 60, 68, 72, 77, 83, 85, 88, 91, 95.',
        'With 9 values, the median is the 5th value.',
        'Median = 83.'
      ]
    }
  ],

  // --- Topic 2: Mode & Range --- difficulty 1-2
  [
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the mode of: 3, 5, 3, 7, 5, 3, 9?',
      choices: ["3", "5", "7", "9"],
      answer: "3",
      hints: [
        "The mode is the number that appears most often.",
        "Count each value: 3 appears 3 times, 5 appears 2 times.",
        "Which number has the highest frequency?"
      ],
      explanation: [
        "3 appears 3 times, 5 appears 2 times, 7 and 9 appear once each.",
        "The mode is 3 because it appears most frequently."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the range of the data set: 14, 27, 8, 33, 19.',
      answer: "25",
      hints: [
        "Range = maximum − minimum.",
        "The largest number is 33.",
        "The smallest number is 8."
      ],
      explanation: [
        "Maximum = 33, Minimum = 8.",
        "Range = 33 − 8 = 25."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A data set is: 6, 2, 8, 2, 5, 8, 8, 3. What is the mode and range?',
      choices: ["Mode = 8, Range = 6", "Mode = 2, Range = 6", "Mode = 8, Range = 8", "Mode = 5, Range = 6"],
      answer: "Mode = 8, Range = 6",
      hints: [
        "Count how often each number appears.",
        "8 appears 3 times, 2 appears 2 times, others once.",
        "Range = 8 − 2."
      ],
      explanation: [
        "8 appears 3 times (most frequent), so mode = 8.",
        "Max = 8, Min = 2, so range = 8 − 2 = 6."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the mode of: 4, 7, 4, 9, 4, 7, 2.',
      answer: "4",
      hints: [
        "Count each value: 4 appears 3 times, 7 appears 2 times.",
        "2 and 9 each appear once.",
        "The mode is the most frequent value."
      ],
      explanation: [
        "4 appears 3 times, which is more than any other value.",
        "Mode = 4."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The data set is: 11, 15, 20, 11, 20, 25. What is the range?',
      choices: ["9", "11", "14", "20"],
      answer: "14",
      hints: [
        "Range = maximum − minimum.",
        "Maximum = 25, Minimum = 11.",
        "25 − 11 = ?"
      ],
      explanation: [
        "Maximum = 25, Minimum = 11.",
        "Range = 25 − 11 = 14."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the range of: 50, 32, 47, 61, 28.',
      answer: "33",
      hints: [
        "Range = maximum − minimum.",
        "Maximum = 61.",
        "Minimum = 28."
      ],
      explanation: [
        "Maximum = 61, Minimum = 28.",
        "Range = 61 − 28 = 33."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The data set is: 10, 10, 15, 15, 15, 20. What is the mode?',
      choices: ["10", "15", "20", "No mode"],
      answer: "15",
      hints: [
        "Count each value: 10 appears 2 times, 15 appears 3 times, 20 appears 1 time.",
        "The mode is the value that appears most often.",
        "15 appears the most."
      ],
      explanation: [
        "10 appears 2 times, 15 appears 3 times, 20 appears 1 time.",
        "Mode = 15 (most frequent)."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data set: 7, 12, 7, 3, 12, 7, 18. What are the mode and range?',
      choices: ["Mode = 7, Range = 15", "Mode = 12, Range = 15", "Mode = 7, Range = 11", "Mode = 12, Range = 11"],
      answer: "Mode = 7, Range = 15",
      hints: [
        "Count each value: 7 appears 3 times, 12 appears 2 times.",
        "Mode is the most frequent value.",
        "Range = max − min = 18 − 3."
      ],
      explanation: [
        "7 appears 3 times (most), so mode = 7.",
        "Range = 18 − 3 = 15."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the range of the data set: 44, 19, 37, 56, 23.',
      answer: "37",
      hints: [
        "Range = maximum − minimum.",
        "Maximum = 56.",
        "Minimum = 19."
      ],
      explanation: [
        "Maximum = 56, Minimum = 19.",
        "Range = 56 − 19 = 37."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the mode of: 9, 5, 9, 2, 5, 9, 6?',
      choices: ["2", "5", "6", "9"],
      answer: "9",
      hints: [
        "Count each value: 9 appears 3 times, 5 appears 2 times.",
        "2 and 6 each appear once.",
        "The mode is the most frequent value."
      ],
      explanation: [
        "9 appears 3 times, which is more than any other value.",
        "Mode = 9."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data set: 14, 22, 14, 30, 22, 14, 8. What are the mode and range?',
      choices: ["Mode = 14, Range = 22", "Mode = 22, Range = 22", "Mode = 14, Range = 16", "Mode = 22, Range = 16"],
      answer: "Mode = 14, Range = 22",
      hints: [
        "Count each value: 14 appears 3 times, 22 appears 2 times.",
        "Mode is the most frequent value.",
        "Range = max − min = 30 − 8."
      ],
      explanation: [
        "14 appears 3 times (most), so mode = 14.",
        "Range = 30 − 8 = 22."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the mode of: 6, 3, 6, 8, 6, 3, 10.',
      answer: "6",
      hints: [
        "Count each value: 6 appears 3 times, 3 appears 2 times.",
        "8 and 10 each appear once.",
        "The mode is the most frequent value."
      ],
      explanation: [
        "6 appears 3 times, which is more than any other value.",
        "Mode = 6."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The data set is: 17, 23, 35, 17, 23, 17, 40. What are the mode and range?',
      choices: ["Mode = 17, Range = 23", "Mode = 23, Range = 23", "Mode = 17, Range = 18", "Mode = 23, Range = 18"],
      answer: "Mode = 17, Range = 23",
      hints: [
        "Count each value: 17 appears 3 times, 23 appears 2 times.",
        "Mode is the most frequent value.",
        "Range = max − min = 40 − 17."
      ],
      explanation: [
        "17 appears 3 times (most), so mode = 17.",
        "Range = 40 − 17 = 23."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the range of: 73, 41, 58, 89, 35.',
      answer: "54",
      hints: [
        "Range = maximum − minimum.",
        "Maximum = 89.",
        "Minimum = 35."
      ],
      explanation: [
        "Maximum = 89, Minimum = 35.",
        "Range = 89 − 35 = 54."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the mode of: 8, 3, 8, 5, 3, 8, 1?',
      choices: ["1", "3", "5", "8"],
      answer: "8",
      hints: [
        "Count each value: 8 appears 3 times, 3 appears 2 times.",
        "1 and 5 each appear once.",
        "The mode is the most frequent value."
      ],
      explanation: [
        "8 appears 3 times, which is more than any other value.",
        "Mode = 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the range of: 82, 45, 67, 93, 31.',
      answer: "62",
      hints: [
        "Range = maximum − minimum.",
        "Maximum = 93.",
        "Minimum = 31."
      ],
      explanation: [
        "Maximum = 93, Minimum = 31.",
        "Range = 93 − 31 = 62."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data set: 11, 16, 11, 22, 16, 11, 28. What are the mode and range?',
      choices: ["Mode = 11, Range = 17", "Mode = 16, Range = 17", "Mode = 11, Range = 12", "Mode = 16, Range = 12"],
      answer: "Mode = 11, Range = 17",
      hints: [
        "Count each value: 11 appears 3 times, 16 appears 2 times.",
        "Mode is the most frequent value.",
        "Range = max − min = 28 − 11."
      ],
      explanation: [
        "11 appears 3 times (most), so mode = 11.",
        "Range = 28 − 11 = 17."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the range of: 27, 63, 18, 45, 91.',
      answer: "73",
      hints: [
        'Range = maximum − minimum.',
        'Maximum = 91.',
        'Minimum = 18.'
      ],
      explanation: [
        'Maximum = 91, Minimum = 18.',
        'Range = 91 − 18 = 73.'
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the mode of: 12, 7, 12, 5, 7, 12, 3?',
      choices: ["3", "5", "7", "12"],
      answer: "12",
      hints: [
        'Count each value: 12 appears 3 times, 7 appears 2 times.',
        '3 and 5 each appear once.',
        'The mode is the most frequent value.'
      ],
      explanation: [
        '12 appears 3 times, which is more than any other value.',
        'Mode = 12.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data set: 19, 25, 19, 31, 25, 19, 37. What are the mode and range?',
      choices: ["Mode = 19, Range = 18", "Mode = 25, Range = 18", "Mode = 19, Range = 12", "Mode = 25, Range = 12"],
      answer: "Mode = 19, Range = 18",
      hints: [
        'Count each value: 19 appears 3 times, 25 appears 2 times.',
        'Mode is the most frequent value.',
        'Range = max − min = 37 − 19.'
      ],
      explanation: [
        '19 appears 3 times (most), so mode = 19.',
        'Range = 37 − 19 = 18.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the mode of the data set: 4, 7, 2, 7, 5, 3, 7, 9?',
      choices: ["2", "5", "7", "9"],
      answer: "7",
      hints: [
        'The mode is the value that appears most often.',
        'Count how many times each number appears.',
        '7 appears 3 times, more than any other.'
      ],
      explanation: [
        '4 appears once, 7 appears 3 times, 2 appears once, 5 appears once, 3 appears once, 9 appears once.',
        'The most frequent value is 7.',
        'Mode = 7.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'Find the range of the data set: 28, 15, 42, 33, 7, 51.',
      answer: "44",
      hints: [
        'Range = maximum value − minimum value.',
        'Find the largest and smallest numbers.',
        'Maximum = 51, Minimum = 7.'
      ],
      explanation: [
        'Maximum = 51, Minimum = 7.',
        'Range = 51 − 7 = 44.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A data set is: 11, 14, 11, 18, 14, 11, 20. What are the mode and range?',
      choices: ["Mode = 14, Range = 9", "Mode = 11, Range = 9", "Mode = 11, Range = 6", "Mode = 14, Range = 6"],
      answer: "Mode = 11, Range = 9",
      hints: [
        'Count how many times each value appears.',
        '11 appears 3 times, 14 appears 2 times.',
        'Range = 20 − 11.'
      ],
      explanation: [
        '11 appears 3 times (most frequent), so mode = 11.',
        'Maximum = 20, Minimum = 11.',
        'Range = 20 − 11 = 9.'
      ]
    }
  ],

  // --- Topic 3: Reading Graphs --- difficulty 1-2
  [
    {
      type: "mc",
      difficulty: 1,
      question: 'A bar graph shows ice cream sales: Monday = 20, Tuesday = 35, Wednesday = 25, Thursday = 40. Which day had the most sales?',
      choices: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      answer: "Thursday",
      hints: [
        "Compare the values for each day.",
        "Look for the largest number.",
        "40 is the greatest value."
      ],
      explanation: [
        "The sales were: Mon = 20, Tue = 35, Wed = 25, Thu = 40.",
        "Thursday had the highest sales at 40."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pie chart shows: Red = 25%, Blue = 30%, Green = 20%, Yellow = the rest. If the total is 200 items, how many items are Yellow?',
      answer: "50",
      hints: [
        "First find the percentage for Yellow.",
        "Yellow = 100% − 25% − 30% − 20% = 25%.",
        "25% of 200 = ?"
      ],
      explanation: [
        "Yellow percentage = 100% − 25% − 30% − 20% = 25%.",
        "Yellow items = 25% × 200 = 0.25 × 200 = 50."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A line graph shows temperatures: 6 AM = 50°F, 9 AM = 58°F, 12 PM = 65°F, 3 PM = 70°F, 6 PM = 62°F. During which 3-hour interval did the temperature increase the most?',
      choices: ["6 AM to 9 AM", "9 AM to 12 PM", "12 PM to 3 PM", "3 PM to 6 PM"],
      answer: "6 AM to 9 AM",
      hints: [
        "Calculate the change for each interval.",
        "6–9 AM: +8, 9–12: +7, 12–3 PM: +5, 3–6 PM: −8.",
        "Which increase is the largest?"
      ],
      explanation: [
        "6 to 9 AM: 58 − 50 = +8°F; 9 AM to 12 PM: 65 − 58 = +7°F.",
        "12 to 3 PM: 70 − 65 = +5°F; 3 to 6 PM: 62 − 70 = −8°F.",
        "The greatest increase is 8°F from 6 AM to 9 AM."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bar graph shows students in each grade: 6th = 45, 7th = 52, 8th = 38. How many students are there in total?',
      answer: "135",
      hints: [
        "Add the values for all three grades.",
        "45 + 52 = 97.",
        "97 + 38 = ?"
      ],
      explanation: [
        "Total = 45 + 52 + 38.",
        "= 135 students."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A pictograph uses one symbol to represent 5 books. A row shows 7 symbols. How many books does that row represent?',
      choices: ["7", "12", "25", "35"],
      answer: "35",
      hints: [
        "Each symbol stands for 5 books.",
        "Multiply the number of symbols by 5.",
        "7 × 5 = ?"
      ],
      explanation: [
        "Each symbol = 5 books.",
        "7 symbols = 7 × 5 = 35 books."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pie chart shows how 120 students get to school: Bus = 40%, Walk = 25%, Car = 20%, Bike = 15%. How many students walk?',
      answer: "30",
      hints: [
        "Walk = 25% of 120.",
        "25% = 0.25.",
        "0.25 × 120 = ?"
      ],
      explanation: [
        "Walk = 25% × 120.",
        "= 0.25 × 120 = 30 students."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bar chart shows library books checked out: Fiction = 48, Science = 32, History = 24. Which category had the fewest checkouts?',
      choices: ["Fiction", "Science", "History", "They are equal"],
      answer: "History",
      hints: [
        "Compare the three values.",
        "Fiction = 48, Science = 32, History = 24.",
        "Which is the smallest?"
      ],
      explanation: [
        "History had 24 checkouts, which is the fewest.",
        "Fiction = 48, Science = 32, History = 24."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A double bar graph shows test scores. Class A: Test 1 = 75, Test 2 = 82. Class B: Test 1 = 80, Test 2 = 78. What is the total of all four scores?',
      answer: "315",
      hints: [
        "Add all four values.",
        "75 + 82 + 80 + 78.",
        "= 157 + 158."
      ],
      explanation: [
        "Total = 75 + 82 + 80 + 78.",
        "= 315."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A pie chart shows: Sports = 35%, Music = 25%, Art = 15%, Reading = the rest. If 160 students were surveyed, how many chose Reading?',
      choices: ["25", "40", "48", "56"],
      answer: "40",
      hints: [
        "First find Reading percentage.",
        "Reading = 100% − 35% − 25% − 15% = 25%.",
        "25% of 160 = ?"
      ],
      explanation: [
        "Reading = 100% − 35% − 25% − 15% = 25%.",
        "Reading students = 25% × 160 = 0.25 × 160 = 40."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A pictograph uses one symbol to represent 8 pizzas. A row shows 6 symbols. How many pizzas does that row represent?',
      answer: "48",
      hints: [
        "Each symbol stands for 8 pizzas.",
        "Multiply the number of symbols by 8.",
        "6 × 8 = ?"
      ],
      explanation: [
        "Each symbol = 8 pizzas.",
        "6 symbols = 6 × 8 = 48 pizzas."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bar graph shows fruit sales: Apples = 36, Bananas = 44, Cherries = 28, Dates = 52. What is the mean number of fruits sold?',
      answer: "40",
      hints: [
        "Add all four values.",
        "36 + 44 + 28 + 52 = 160.",
        "Divide by 4."
      ],
      explanation: [
        "Total = 36 + 44 + 28 + 52 = 160.",
        "Mean = 160 ÷ 4 = 40."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bar graph shows zoo visitors: Monday = 150, Tuesday = 90, Wednesday = 120, Thursday = 180. Which day had the fewest visitors?',
      choices: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      answer: "Tuesday",
      hints: [
        "Compare the values for each day.",
        "Look for the smallest number.",
        "90 is the least."
      ],
      explanation: [
        "The visitors were: Mon = 150, Tue = 90, Wed = 120, Thu = 180.",
        "Tuesday had the fewest visitors at 90."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pie chart shows how 240 people travel: Bus = 35%, Train = 25%, Car = 30%, Bike = 10%. How many people take the train?',
      answer: "60",
      hints: [
        "Train = 25% of 240.",
        "25% = 0.25.",
        "0.25 × 240 = ?"
      ],
      explanation: [
        "Train = 25% × 240.",
        "= 0.25 × 240 = 60 people."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pictograph uses one symbol to represent 10 tickets. A row shows 9 symbols. How many tickets does that row represent?',
      answer: "90",
      hints: [
        "Each symbol stands for 10 tickets.",
        "Multiply the number of symbols by 10.",
        "9 × 10 = ?"
      ],
      explanation: [
        "Each symbol = 10 tickets.",
        "9 symbols = 9 × 10 = 90 tickets."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bar graph shows toy sales: Cars = 30, Dolls = 45, Puzzles = 15, Blocks = 60. Which toy sold the most?',
      choices: ["Cars", "Dolls", "Puzzles", "Blocks"],
      answer: "Blocks",
      hints: [
        "Compare the values for each toy.",
        "Look for the largest number.",
        "60 is the greatest value."
      ],
      explanation: [
        "The sales were: Cars = 30, Dolls = 45, Puzzles = 15, Blocks = 60.",
        "Blocks had the highest sales at 60."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pie chart shows how 300 students chose clubs: Drama = 20%, Chess = 15%, Art = 35%, Music = 30%. How many students chose Art?',
      answer: "105",
      hints: [
        "Art = 35% of 300.",
        "35% = 0.35.",
        "0.35 × 300 = ?"
      ],
      explanation: [
        "Art = 35% × 300.",
        "= 0.35 × 300 = 105 students."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pictograph uses one symbol to represent 4 apples. A row shows 11 symbols. How many apples does that row represent?',
      answer: "44",
      hints: [
        "Each symbol stands for 4 apples.",
        "Multiply the number of symbols by 4.",
        "11 × 4 = ?"
      ],
      explanation: [
        "Each symbol = 4 apples.",
        "11 symbols = 11 × 4 = 44 apples."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pie chart shows how 180 students chose sports: Soccer = 30%, Baseball = 25%, Tennis = 20%, Swimming = 25%. How many students chose soccer?',
      answer: "54",
      hints: [
        'Soccer = 30% of 180.',
        '30% = 0.30.',
        '0.30 × 180 = ?'
      ],
      explanation: [
        'Soccer = 30% × 180.',
        '= 0.30 × 180 = 54 students.'
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bar graph shows flower sales: Roses = 55, Tulips = 40, Daisies = 70, Lilies = 35. Which flower sold the fewest?',
      choices: ["Roses", "Tulips", "Daisies", "Lilies"],
      answer: "Lilies",
      hints: [
        'Compare the values for each flower.',
        'Look for the smallest number.',
        '35 is the least.'
      ],
      explanation: [
        'The sales were: Roses = 55, Tulips = 40, Daisies = 70, Lilies = 35.',
        'Lilies had the fewest sales at 35.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pictograph uses one symbol to represent 6 cups of lemonade. A row shows 8 symbols. How many cups does that row represent?',
      answer: "48",
      hints: [
        'Each symbol stands for 6 cups.',
        'Multiply the number of symbols by 6.',
        '8 × 6 = ?'
      ],
      explanation: [
        'Each symbol = 6 cups.',
        '8 symbols = 8 × 6 = 48 cups.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'A bar graph shows the number of books read by students: Amy = 8, Ben = 5, Cara = 10, Dan = 3. Who read the most books?',
      choices: ["Amy", "Ben", "Cara", "Dan"],
      answer: "Cara",
      hints: [
        'Compare the bar heights for each student.',
        'Look for the tallest bar.',
        'Cara has the highest value at 10.'
      ],
      explanation: [
        'Amy read 8, Ben read 5, Cara read 10, Dan read 3.',
        'The tallest bar belongs to Cara with 10 books.',
        'Cara read the most books.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pictograph shows fruit sales where each symbol = 5 fruits. Apples have 7 symbols, bananas have 4 symbols, and oranges have 6 symbols. How many total fruits were sold?',
      answer: "85",
      hints: [
        'Multiply the number of symbols by 5 for each fruit.',
        'Apples: 7 × 5 = 35, Bananas: 4 × 5 = 20, Oranges: 6 × 5 = 30.',
        'Add all three totals.'
      ],
      explanation: [
        'Apples = 7 × 5 = 35.',
        'Bananas = 4 × 5 = 20, Oranges = 6 × 5 = 30.',
        'Total = 35 + 20 + 30 = 85 fruits.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A bar graph shows monthly rainfall: Jan = 3 in, Feb = 2 in, Mar = 5 in, Apr = 7 in, May = 4 in. What is the difference in rainfall between the wettest and driest months?',
      choices: ["3 inches", "4 inches", "5 inches", "7 inches"],
      answer: "5 inches",
      hints: [
        'Identify the wettest month (tallest bar).',
        'April has 7 inches (most), February has 2 inches (least).',
        'Subtract: 7 − 2.'
      ],
      explanation: [
        'Wettest: April = 7 inches. Driest: February = 2 inches.',
        'Difference = 7 − 2 = 5 inches.'
      ]
    }
  ],

  // --- Topic 4: Data Interpretation --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'A class of 8 students has a mean test score of 82. What is the total of all their scores?',
      answer: "656",
      hints: [
        "Total = Mean × Count.",
        "Multiply 82 × 8.",
        "82 × 8 = ?"
      ],
      explanation: [
        "Total = Mean × Count = 82 × 8.",
        "82 × 8 = 656."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'In a survey of 50 students, 15 chose pizza, 20 chose burgers, and the rest chose tacos. What fraction chose tacos?',
      choices: ["<span class=\"math\">\\frac{3}{10}</span>", "<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{7}{10}</span>"],
      answer: "<span class=\"math\">\\frac{3}{10}</span>",
      hints: [
        "Find how many chose tacos: 50 − 15 − 20.",
        "That gives 15 students who chose tacos.",
        "Write as a fraction of 50 and simplify."
      ],
      explanation: [
        "Tacos = 50 − 15 − 20 = 15 students.",
        "Fraction = 15/50 = 3/10."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A store sold 12, 18, 15, and 9 shirts over four days. What is the total number of shirts sold?',
      answer: "54",
      hints: [
        "Add up all four daily totals.",
        "12 + 18 = 30, 15 + 9 = 24.",
        "30 + 24 = ?"
      ],
      explanation: [
        "Total = 12 + 18 + 15 + 9.",
        "= 30 + 24 = 54 shirts."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A survey shows: 40% like soccer, 25% like basketball, 20% like tennis, and 15% like swimming. If 200 students were surveyed, how many like basketball?',
      choices: ["25", "40", "50", "80"],
      answer: "50",
      hints: [
        "Basketball = 25% of 200.",
        "25% means 25/100 or 0.25.",
        "0.25 × 200 = ?"
      ],
      explanation: [
        "Basketball fans = 25% × 200.",
        "= 0.25 × 200 = 50 students."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A table shows points scored in 5 games: 14, 22, 18, 26, 10. What is the average points per game?',
      answer: "18",
      hints: [
        "Add all the points together.",
        "14 + 22 + 18 + 26 + 10 = 90.",
        "Divide by 5 games."
      ],
      explanation: [
        "Total = 14 + 22 + 18 + 26 + 10 = 90.",
        "Average = 90 ÷ 5 = 18 points per game."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A group of 10 students has a mean height of 62 inches. If the tallest student (70 inches) is removed, what is the sum of the remaining 9 students\' heights?',
      choices: ["540", "550", "558", "560"],
      answer: "550",
      hints: [
        "Total height = mean × count = 62 × 10.",
        "Total = 620.",
        "Remove the tallest: 620 − 70."
      ],
      explanation: [
        "Total = 62 × 10 = 620 inches.",
        "Remaining sum = 620 − 70 = 550 inches."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A tally chart shows: Apples = 8, Bananas = 12, Oranges = 5, Grapes = 15. How many total fruits were counted?',
      answer: "40",
      hints: [
        "Add all the tallies together.",
        "8 + 12 + 5 + 15.",
        "= 20 + 20."
      ],
      explanation: [
        "Total = 8 + 12 + 5 + 15.",
        "= 40 fruits."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'In a frequency table, the scores 70–79 have frequency 5, 80–89 have frequency 8, and 90–99 have frequency 3. What percentage of students scored 80–89? (Total = 16)',
      choices: ["25%", "31.25%", "50%", "62.5%"],
      answer: "50%",
      hints: [
        "Total students = 5 + 8 + 3 = 16.",
        "Percentage for 80–89 = (8 ÷ 16) × 100.",
        "= 0.5 × 100."
      ],
      explanation: [
        "Total = 16 students. Scored 80–89 = 8.",
        "Percentage = (8/16) × 100 = 50%."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A survey of 80 students found that 30% prefer soccer, 45% prefer basketball, and the rest prefer tennis. How many students prefer tennis?',
      answer: "20",
      hints: [
        "Tennis = 100% − 30% − 45% = 25%.",
        "25% of 80 students.",
        "0.25 × 80 = ?"
      ],
      explanation: [
        "Tennis percentage = 100% − 30% − 45% = 25%.",
        "Tennis students = 25% × 80 = 20."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A class of 12 students has a mean height of 54 inches. If the shortest student (46 inches) is removed, what is the sum of the remaining 11 students\' heights?',
      choices: ["594", "600", "602", "608"],
      answer: "602",
      hints: [
        "Total height = mean × count = 54 × 12.",
        "Total = 648.",
        "Remove the shortest: 648 − 46."
      ],
      explanation: [
        "Total = 54 × 12 = 648 inches.",
        "Remaining sum = 648 − 46 = 602 inches."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bookstore sold 20, 35, 28, 17, and 40 books over five days. What is the mean number of books sold per day?',
      answer: "28",
      hints: [
        "Add all five totals.",
        "20 + 35 + 28 + 17 + 40 = 140.",
        "Divide by 5."
      ],
      explanation: [
        "Total = 20 + 35 + 28 + 17 + 40 = 140.",
        "Mean = 140 ÷ 5 = 28."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A table shows cookies baked each day: Mon = 20, Tue = 35, Wed = 25, Thu = 40, Fri = 30. How many cookies total?',
      answer: "150",
      hints: [
        "Add all five daily totals.",
        "20 + 35 + 25 + 40 + 30.",
        "= 55 + 65 + 30."
      ],
      explanation: [
        "Total = 20 + 35 + 25 + 40 + 30.",
        "= 150 cookies."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A survey of 60 students found that 20% like reading, 35% like gaming, 25% like sports, and the rest like music. How many students like music?',
      choices: ["8", "10", "12", "15"],
      answer: "12",
      hints: [
        "Music = 100% − 20% − 35% − 25% = 20%.",
        "20% of 60 students.",
        "0.20 × 60 = ?"
      ],
      explanation: [
        "Music percentage = 100% − 20% − 35% − 25% = 20%.",
        "Music students = 20% × 60 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A group of 15 students has a mean score of 72. If the lowest scorer (48) leaves, what is the sum of the remaining 14 students\' scores?',
      choices: ["1008", "1032", "1048", "1080"],
      answer: "1032",
      hints: [
        "Total = mean × count = 72 × 15.",
        "Total = 1080.",
        "Remove the lowest: 1080 − 48."
      ],
      explanation: [
        "Total = 72 × 15 = 1080.",
        "Remaining sum = 1080 − 48 = 1032."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A frequency table shows: Cats = 14, Dogs = 18, Birds = 6, Fish = 12. How many total pets were counted?',
      answer: "50",
      hints: [
        "Add all the frequencies together.",
        "14 + 18 + 6 + 12.",
        "= 32 + 18."
      ],
      explanation: [
        "Total = 14 + 18 + 6 + 12.",
        "= 50 pets."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A survey of 90 students found that 40% prefer reading, 30% prefer art, and the rest prefer science. How many students prefer science?',
      choices: ["18", "24", "27", "36"],
      answer: "27",
      hints: [
        "Science = 100% − 40% − 30% = 30%.",
        "30% of 90 students.",
        "0.30 × 90 = ?"
      ],
      explanation: [
        "Science percentage = 100% − 40% − 30% = 30%.",
        "Science students = 30% × 90 = 27."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A class of 9 students has a mean test score of 76. What is the total of all their scores?',
      answer: "684",
      hints: [
        "Total = Mean × Count.",
        "Multiply 76 × 9.",
        "76 × 9 = ?"
      ],
      explanation: [
        "Total = Mean × Count = 76 × 9.",
        "76 × 9 = 684."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A table shows laps run each day: Mon = 6, Tue = 8, Wed = 5, Thu = 9, Fri = 7. How many laps total?',
      answer: "35",
      hints: [
        'Add all five daily totals.',
        '6 + 8 + 5 + 9 + 7.',
        '= 14 + 14 + 7.'
      ],
      explanation: [
        'Total = 6 + 8 + 5 + 9 + 7.',
        '= 35 laps.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A group of 14 students has a mean score of 78. If the highest scorer (98) leaves, what is the sum of the remaining 13 students\' scores?',
      choices: ["990", "994", "998", "1004"],
      answer: "994",
      hints: [
        'Total = mean × count = 78 × 14.',
        'Total = 1092.',
        'Remove the highest: 1092 − 98.'
      ],
      explanation: [
        'Total = 78 × 14 = 1092.',
        'Remaining sum = 1092 − 98 = 994.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A survey of 120 people found that 35% prefer tea, 40% prefer coffee, and the rest prefer juice. How many people prefer juice?',
      answer: "30",
      hints: [
        'Juice = 100% − 35% − 40% = 25%.',
        '25% of 120 people.',
        '0.25 × 120 = ?'
      ],
      explanation: [
        'Juice percentage = 100% − 35% − 40% = 25%.',
        'Juice fans = 25% × 120 = 30.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'A table shows test scores: Math = 92, Science = 88, English = 95, History = 80. In which subject did the student score the lowest?',
      choices: ["Math", "Science", "English", "History"],
      answer: "History",
      hints: [
        'Compare all four scores.',
        'Find the smallest value.',
        'History has the lowest score of 80.'
      ],
      explanation: [
        'Math = 92, Science = 88, English = 95, History = 80.',
        'The lowest score is 80 in History.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A survey shows that 35% of 200 students prefer soccer, 25% prefer basketball, and the rest prefer other sports. How many students prefer other sports?',
      answer: "80",
      hints: [
        'First find the percentage for other sports.',
        '100% − 35% − 25% = 40%.',
        'Calculate 40% of 200.'
      ],
      explanation: [
        'Other sports = 100% − 35% − 25% = 40%.',
        '40% of 200 = 0.40 × 200 = 80.',
        '80 students prefer other sports.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A table shows the number of pets owned: Dogs = 45, Cats = 38, Fish = 22, Birds = 15. What fraction of the total pets are cats? (Simplify.)',
      choices: ["19/60", "38/100", "19/50", "38/120"],
      answer: "19/60",
      hints: [
        'Find the total number of pets.',
        '45 + 38 + 22 + 15 = 120.',
        'Cats fraction = 38/120, then simplify by dividing by 2.'
      ],
      explanation: [
        'Total = 45 + 38 + 22 + 15 = 120.',
        'Cats fraction = 38/120.',
        'Simplify: 38/120 = 19/60.'
      ]
    }
  ],

  // --- Topic 5: Median & Mean Comparison --- difficulty 2-3
  [
    {
      type: "mc",
      difficulty: 2,
      question: 'The data set is: 10, 12, 11, 13, 54. Which is greater, the mean or the median?',
      choices: ["Mean", "Median", "They are equal", "Cannot determine"],
      answer: "Mean",
      hints: [
        "Find the median: sort and pick the middle value.",
        "Sorted: 10, 11, 12, 13, 54. Median = 12.",
        "Find the mean: (10 + 11 + 12 + 13 + 54) ÷ 5 = 20."
      ],
      explanation: [
        "Median = 12 (middle of sorted list).",
        "Mean = (10 + 11 + 12 + 13 + 54) ÷ 5 = 100 ÷ 5 = 20.",
        "Mean (20) > Median (12) because 54 pulls the mean up."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 5, 7, 8, 9, 11. Find the difference: mean − median.',
      answer: "0",
      hints: [
        "Mean = (5 + 7 + 8 + 9 + 11) ÷ 5.",
        "Mean = 40 ÷ 5 = 8.",
        "Median = 8 (middle of sorted list). Subtract."
      ],
      explanation: [
        "Mean = (5 + 7 + 8 + 9 + 11) ÷ 5 = 40 ÷ 5 = 8.",
        "Median = 8.",
        "Difference = 8 − 8 = 0."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A data set has values: 2, 3, 3, 4, 100. A large outlier is present. Which measure of center is more representative of the typical value?',
      choices: ["Mean", "Median", "Range", "Maximum"],
      answer: "Median",
      hints: [
        "An outlier greatly affects the mean but not the median.",
        "The median is 3 (middle value); the mean is 22.4.",
        "Which one better represents the typical value?"
      ],
      explanation: [
        "Mean = (2 + 3 + 3 + 4 + 100) ÷ 5 = 112 ÷ 5 = 22.4.",
        "Median = 3, which is much closer to most of the data.",
        "Median is more representative when outliers are present."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 6, 8, 10, 12, 14. Find the mean minus the median.',
      answer: "0",
      hints: [
        "Find the mean: (6 + 8 + 10 + 12 + 14) ÷ 5.",
        "Mean = 50 ÷ 5 = 10.",
        "Median = 10 (the middle value of the sorted list)."
      ],
      explanation: [
        "Mean = 50 ÷ 5 = 10. Median = 10.",
        "Difference = 10 − 10 = 0."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data set: 1, 1, 2, 2, 50. How much larger is the mean than the median?',
      choices: ["7.2", "9.2", "10", "8.2"],
      answer: "9.2",
      hints: [
        "Median = 2 (middle value of 5 numbers).",
        "Mean = (1 + 1 + 2 + 2 + 50) ÷ 5 = 56 ÷ 5.",
        "Mean = 11.2. Difference = 11.2 − 2."
      ],
      explanation: [
        "Median = 2. Mean = 56 ÷ 5 = 11.2.",
        "Difference = 11.2 − 2 = 9.2."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 4, 4, 5, 5, 200. Is the mean or median a better measure of center?',
      choices: ["Mean", "Median", "They are equally good", "Neither"],
      answer: "Median",
      hints: [
        "Mean = (4 + 4 + 5 + 5 + 200) ÷ 5 = 218 ÷ 5 = 43.6.",
        "Median = 5 (middle of sorted list).",
        "200 is a large outlier pulling the mean far from typical values."
      ],
      explanation: [
        "Mean = 43.6, Median = 5.",
        "The median (5) is much closer to the typical values (4 and 5).",
        "Median is better when outliers are present."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 20, 22, 24, 26, 28. Find the mean minus the median.',
      answer: "0",
      hints: [
        "Mean = (20 + 22 + 24 + 26 + 28) ÷ 5 = 120 ÷ 5 = 24.",
        "Median = 24 (middle of sorted list).",
        "Subtract: 24 − 24."
      ],
      explanation: [
        "Mean = 120 ÷ 5 = 24. Median = 24.",
        "Difference = 24 − 24 = 0.",
        "In a symmetric data set, mean equals median."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 3, 3, 4, 5, 85. By how much does the mean exceed the median?',
      answer: "16",
      hints: [
        "Median = 4 (middle of 5 sorted values).",
        "Mean = (3 + 3 + 4 + 5 + 85) ÷ 5 = 100 ÷ 5 = 20.",
        "Difference = 20 − 4."
      ],
      explanation: [
        "Median = 4. Mean = 100 ÷ 5 = 20.",
        "Mean − Median = 20 − 4 = 16."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 15, 18, 20, 22, 25. Which is true about the mean and median?',
      choices: ["Mean > Median", "Mean < Median", "Mean = Median", "Cannot determine"],
      answer: "Mean = Median",
      hints: [
        "Median = 20 (middle of 5 sorted values).",
        "Mean = (15 + 18 + 20 + 22 + 25) ÷ 5 = 100 ÷ 5 = 20.",
        "Compare 20 and 20."
      ],
      explanation: [
        "Mean = 100 ÷ 5 = 20. Median = 20.",
        "Mean = Median = 20.",
        "Symmetric data often has equal mean and median."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 2, 2, 3, 4, 75. By how much does the mean exceed the median?',
      answer: "14.2",
      hints: [
        "Median = 3 (middle of sorted list).",
        "Mean = (2 + 2 + 3 + 4 + 75) ÷ 5 = 86 ÷ 5.",
        "Mean = 17.2. Difference = 17.2 − 3."
      ],
      explanation: [
        "Median = 3. Mean = 86 ÷ 5 = 17.2.",
        "Mean − Median = 17.2 − 3 = 14.2."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data set: 10, 12, 11, 14, 150. Which measure better represents the typical value?',
      choices: ["Mean", "Median", "Range", "Maximum"],
      answer: "Median",
      hints: [
        "Mean = (10 + 11 + 12 + 14 + 150) ÷ 5 = 197 ÷ 5 = 39.4.",
        "Median = 12 (middle of sorted list).",
        "150 is a large outlier pulling the mean far from typical values."
      ],
      explanation: [
        "Mean = 39.4, Median = 12.",
        "The median (12) is much closer to the typical values.",
        "Median is more representative when outliers are present."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 7, 7, 8, 9, 120. By how much does the mean exceed the median?',
      answer: "22.2",
      hints: [
        "Median = 8 (middle of 5 sorted values).",
        "Mean = (7 + 7 + 8 + 9 + 120) ÷ 5 = 151 ÷ 5.",
        "Mean = 30.2. Difference = 30.2 − 8."
      ],
      explanation: [
        "Median = 8. Mean = 151 ÷ 5 = 30.2.",
        "Mean − Median = 30.2 − 8 = 22.2."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 30, 32, 34, 36, 38. Which is true about the mean and median?',
      choices: ["Mean > Median", "Mean < Median", "Mean = Median", "Cannot determine"],
      answer: "Mean = Median",
      hints: [
        "Median = 34 (middle of 5 sorted values).",
        "Mean = (30 + 32 + 34 + 36 + 38) ÷ 5 = 170 ÷ 5 = 34.",
        "Compare 34 and 34."
      ],
      explanation: [
        "Mean = 170 ÷ 5 = 34. Median = 34.",
        "Mean = Median = 34.",
        "A symmetric data set has equal mean and median."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 5, 5, 6, 7, 300. Which measure better represents typical values?',
      choices: ["Mean", "Median", "Range", "Sum"],
      answer: "Median",
      hints: [
        "Mean = (5 + 5 + 6 + 7 + 300) ÷ 5 = 323 ÷ 5 = 64.6.",
        "Median = 6 (middle of sorted list).",
        "300 is a large outlier pulling the mean far from typical values."
      ],
      explanation: [
        "Mean = 64.6, Median = 6.",
        "The median (6) is much closer to the typical values (5, 5, 6, 7).",
        "Median is better when outliers are present."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 40, 42, 44, 46, 48. Find the mean minus the median.',
      answer: "0",
      hints: [
        "Mean = (40 + 42 + 44 + 46 + 48) ÷ 5 = 220 ÷ 5 = 44.",
        "Median = 44 (middle of sorted list).",
        "Subtract: 44 − 44."
      ],
      explanation: [
        "Mean = 220 ÷ 5 = 44. Median = 44.",
        "Difference = 44 − 44 = 0.",
        "Symmetric data has equal mean and median."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 8, 8, 9, 10, 250. Which measure better represents typical values?',
      choices: ["Mean", "Median", "Range", "Sum"],
      answer: "Median",
      hints: [
        "Mean = (8 + 8 + 9 + 10 + 250) ÷ 5 = 285 ÷ 5 = 57.",
        "Median = 9 (middle of sorted list).",
        "250 is a large outlier pulling the mean far from typical values."
      ],
      explanation: [
        "Mean = 57, Median = 9.",
        "The median (9) is much closer to the typical values (8, 8, 9, 10).",
        "Median is better when outliers are present."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 6, 6, 7, 8, 90. By how much does the mean exceed the median?',
      answer: "16.4",
      hints: [
        "Median = 7 (middle of 5 sorted values).",
        "Mean = (6 + 6 + 7 + 8 + 90) ÷ 5 = 117 ÷ 5.",
        "Mean = 23.4. Difference = 23.4 − 7."
      ],
      explanation: [
        "Median = 7. Mean = 117 ÷ 5 = 23.4.",
        "Mean − Median = 23.4 − 7 = 16.4."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 4, 4, 5, 6, 95. By how much does the mean exceed the median?',
      answer: "17.8",
      hints: [
        'Median = 5 (middle of 5 sorted values).',
        'Mean = (4 + 4 + 5 + 6 + 95) ÷ 5 = 114 ÷ 5.',
        'Mean = 22.8. Difference = 22.8 − 5.'
      ],
      explanation: [
        'Median = 5. Mean = 114 ÷ 5 = 22.8.',
        'Mean − Median = 22.8 − 5 = 17.8.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 50, 52, 54, 56, 58. Which is true about the mean and median?',
      choices: ["Mean > Median", "Mean < Median", "Mean = Median", "Cannot determine"],
      answer: "Mean = Median",
      hints: [
        'Median = 54 (middle of 5 sorted values).',
        'Mean = (50 + 52 + 54 + 56 + 58) ÷ 5 = 270 ÷ 5 = 54.',
        'Compare 54 and 54.'
      ],
      explanation: [
        'Mean = 270 ÷ 5 = 54. Median = 54.',
        'Mean = Median = 54.',
        'Symmetric data has equal mean and median.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 9, 9, 10, 11, 175. Which measure better represents the typical value?',
      choices: ["Mean", "Median", "Range", "Sum"],
      answer: "Median",
      hints: [
        'Mean = (9 + 9 + 10 + 11 + 175) ÷ 5 = 214 ÷ 5 = 42.8.',
        'Median = 10 (middle of sorted list).',
        '175 is a large outlier pulling the mean far from typical values.'
      ],
      explanation: [
        'Mean = 42.8, Median = 10.',
        'The median (10) is much closer to the typical values (9, 9, 10, 11).',
        'Median is better when outliers are present.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'For the data set: 10, 12, 14, 15, 49, which is greater: the mean or the median?',
      choices: ["Mean", "Median", "They are equal", "Cannot determine"],
      answer: "Mean",
      hints: [
        'Calculate the median: the middle value of sorted data.',
        'Median = 14. Now calculate the mean.',
        'Mean = (10 + 12 + 14 + 15 + 49) ÷ 5 = 100 ÷ 5 = 20.'
      ],
      explanation: [
        'Sorted: 10, 12, 14, 15, 49. Median = 14.',
        'Mean = (10 + 12 + 14 + 15 + 49) ÷ 5 = 100 ÷ 5 = 20.',
        'Mean (20) > Median (14). The outlier 49 pulls the mean up.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'The data set is: 4, 6, 8, 10, 12, 14, 100. What is the mean? (Round to the nearest whole number.)',
      answer: "22",
      hints: [
        'Add all 7 values together.',
        'Sum = 4 + 6 + 8 + 10 + 12 + 14 + 100 = 154.',
        'Divide by 7: 154 ÷ 7 = 22.'
      ],
      explanation: [
        'Sum = 4 + 6 + 8 + 10 + 12 + 14 + 100 = 154.',
        'Mean = 154 ÷ 7 = 22.',
        'The median is 10 (middle value), showing how the outlier 100 pulls the mean much higher.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'Which measure of center is more affected by an extremely large value in a data set?',
      choices: ["Mean", "Median", "Mode", "Range"],
      answer: "Mean",
      hints: [
        'Think about how each measure is calculated.',
        'The mean uses every value in its calculation.',
        'The median only depends on the middle value(s).'
      ],
      explanation: [
        'The mean adds all values and divides by count, so an extreme value changes the sum significantly.',
        'The median is the middle value and is resistant to outliers.',
        'Therefore the mean is most affected by extreme values.'
      ]
    }
  ],

  // --- Topic 6: Finding Missing Values --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of five numbers is 18. Four of the numbers are 15, 20, 22, and 13. What is the fifth number?',
      answer: "20",
      hints: [
        "Total = Mean × Count = 18 × 5.",
        "Total = 90. Sum the four known numbers.",
        "15 + 20 + 22 + 13 = 70. Fifth = 90 − 70."
      ],
      explanation: [
        "Total needed = 18 × 5 = 90.",
        "Sum of known = 15 + 20 + 22 + 13 = 70.",
        "Missing number = 90 − 70 = 20."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'The mean of 6 numbers is 25. If five of them are 20, 28, 24, 30, and 18, what is the sixth number?',
      choices: ["28", "30", "32", "25"],
      answer: "30",
      hints: [
        "Total = 25 × 6 = 150.",
        "Sum the five known: 20 + 28 + 24 + 30 + 18 = 120.",
        "Sixth = 150 − 120."
      ],
      explanation: [
        "Total = 25 × 6 = 150.",
        "Known sum = 20 + 28 + 24 + 30 + 18 = 120.",
        "Missing = 150 − 120 = 30."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'After 4 tests, Maya\'s mean score is 88. What score does she need on the 5th test to raise her mean to 90?',
      answer: "98",
      hints: [
        "Current total = 88 × 4 = 352.",
        "She needs a new total of 90 × 5 = 450.",
        "Required score = 450 − 352."
      ],
      explanation: [
        "Current total = 88 × 4 = 352.",
        "Target total = 90 × 5 = 450.",
        "Needed score = 450 − 352 = 98."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The mean of four numbers is 20. Three of them are 18, 25, and 14. What is the fourth number?',
      choices: ["20", "21", "23", "25"],
      answer: "23",
      hints: [
        "Total = Mean × Count = 20 × 4 = 80.",
        "Sum of known values = 18 + 25 + 14 = 57.",
        "Fourth number = 80 − 57."
      ],
      explanation: [
        "Total needed = 20 × 4 = 80.",
        "Known sum = 18 + 25 + 14 = 57.",
        "Fourth number = 80 − 57 = 23."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A student has scores of 72, 85, and 90 on three quizzes. What score does she need on the 4th quiz so her mean is exactly 85?',
      answer: "93",
      hints: [
        "Target total = 85 × 4 = 340.",
        "Current sum = 72 + 85 + 90 = 247.",
        "Needed score = 340 − 247."
      ],
      explanation: [
        "Target total = 85 × 4 = 340.",
        "Current sum = 72 + 85 + 90 = 247.",
        "Needed = 340 − 247 = 93."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of three numbers is 30. Two of them are 25 and 32. What is the third?',
      answer: "33",
      hints: [
        "Total = Mean × Count = 30 × 3 = 90.",
        "Sum of known = 25 + 32 = 57.",
        "Missing = 90 − 57."
      ],
      explanation: [
        "Total needed = 30 × 3 = 90.",
        "Known sum = 25 + 32 = 57.",
        "Missing = 90 − 57 = 33."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A runner\'s mean time over 5 races is 52 seconds. His times for the first 4 races were 50, 55, 48, and 53. What was his 5th race time?',
      choices: ["52", "54", "56", "50"],
      answer: "54",
      hints: [
        "Total time needed = 52 × 5 = 260.",
        "Sum of first 4 = 50 + 55 + 48 + 53 = 206.",
        "5th time = 260 − 206."
      ],
      explanation: [
        "Total = 52 × 5 = 260 seconds.",
        "Known = 50 + 55 + 48 + 53 = 206.",
        "5th race = 260 − 206 = 54 seconds."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'After 3 quizzes, Liam\'s mean is 76. What score does he need on quiz 4 to raise his mean to 80?',
      answer: "92",
      hints: [
        "Current total = 76 × 3 = 228.",
        "Target total = 80 × 4 = 320.",
        "Needed = 320 − 228."
      ],
      explanation: [
        "Current total = 76 × 3 = 228.",
        "Target total = 80 × 4 = 320.",
        "Needed score = 320 − 228 = 92."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The mean of seven numbers is 12. Six of them are 10, 14, 8, 16, 11, and 9. What is the seventh number?',
      choices: ["14", "16", "18", "12"],
      answer: "16",
      hints: [
        "Total = Mean × Count = 12 × 7 = 84.",
        "Sum of known = 10 + 14 + 8 + 16 + 11 + 9 = 68.",
        "Seventh = 84 − 68."
      ],
      explanation: [
        "Total needed = 12 × 7 = 84.",
        "Known sum = 10 + 14 + 8 + 16 + 11 + 9 = 68.",
        "Missing = 84 − 68 = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'After 5 tests, Sarah\'s mean score is 82. What score does she need on the 6th test to raise her mean to 85?',
      answer: "100",
      hints: [
        "Current total = 82 × 5 = 410.",
        "Target total = 85 × 6 = 510.",
        "Needed score = 510 − 410."
      ],
      explanation: [
        "Current total = 82 × 5 = 410.",
        "Target total = 85 × 6 = 510.",
        "Needed score = 510 − 410 = 100."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'The mean of 8 numbers is 35. Seven of them are 40, 28, 32, 45, 30, 38, and 27. What is the eighth number?',
      answer: "40",
      hints: [
        "Total = Mean × Count = 35 × 8 = 280.",
        "Sum of known = 40 + 28 + 32 + 45 + 30 + 38 + 27 = 240.",
        "Eighth = 280 − 240."
      ],
      explanation: [
        "Total needed = 35 × 8 = 280.",
        "Known sum = 40 + 28 + 32 + 45 + 30 + 38 + 27 = 240.",
        "Missing = 280 − 240 = 40."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of four numbers is 15. Three of them are 12, 18, and 10. What is the fourth number?',
      answer: "20",
      hints: [
        "Total = Mean × Count = 15 × 4 = 60.",
        "Sum of known = 12 + 18 + 10 = 40.",
        "Fourth = 60 − 40."
      ],
      explanation: [
        "Total needed = 15 × 4 = 60.",
        "Known sum = 12 + 18 + 10 = 40.",
        "Fourth number = 60 − 40 = 20."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'After 4 quizzes, Emma\'s mean is 84. What score does she need on quiz 5 to raise her mean to 86?',
      choices: ["90", "92", "94", "96"],
      answer: "94",
      hints: [
        "Current total = 84 × 4 = 336.",
        "Target total = 86 × 5 = 430.",
        "Needed = 430 − 336."
      ],
      explanation: [
        "Current total = 84 × 4 = 336.",
        "Target total = 86 × 5 = 430.",
        "Needed score = 430 − 336 = 94."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'The mean of 6 numbers is 22. Five of them are 19, 25, 17, 28, and 21. What is the sixth number?',
      answer: "22",
      hints: [
        "Total = 22 × 6 = 132.",
        "Sum of known = 19 + 25 + 17 + 28 + 21 = 110.",
        "Sixth = 132 − 110."
      ],
      explanation: [
        "Total needed = 22 × 6 = 132.",
        "Known sum = 19 + 25 + 17 + 28 + 21 = 110.",
        "Missing = 132 − 110 = 22."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The mean of five numbers is 16. Four of them are 10, 14, 22, and 19. What is the fifth number?',
      choices: ["12", "15", "17", "20"],
      answer: "15",
      hints: [
        "Total = Mean × Count = 16 × 5 = 80.",
        "Sum of known values = 10 + 14 + 22 + 19 = 65.",
        "Fifth number = 80 − 65."
      ],
      explanation: [
        "Total needed = 16 × 5 = 80.",
        "Known sum = 10 + 14 + 22 + 19 = 65.",
        "Fifth number = 80 − 65 = 15."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'After 3 tests, Noah\'s mean score is 80. What score does he need on the 4th test to raise his mean to 84?',
      answer: "96",
      hints: [
        "Current total = 80 × 3 = 240.",
        "Target total = 84 × 4 = 336.",
        "Needed score = 336 − 240."
      ],
      explanation: [
        "Current total = 80 × 3 = 240.",
        "Target total = 84 × 4 = 336.",
        "Needed score = 336 − 240 = 96."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'The mean of 9 numbers is 40. Eight of them are 35, 42, 38, 50, 33, 44, 36, and 41. What is the ninth number?',
      answer: "41",
      hints: [
        "Total = 40 × 9 = 360.",
        "Sum of known = 35 + 42 + 38 + 50 + 33 + 44 + 36 + 41 = 319.",
        "Ninth = 360 − 319."
      ],
      explanation: [
        "Total needed = 40 × 9 = 360.",
        "Known sum = 35 + 42 + 38 + 50 + 33 + 44 + 36 + 41 = 319.",
        "Missing = 360 − 319 = 41."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The mean of six numbers is 19. Five of them are 15, 22, 17, 24, and 11. What is the sixth number?',
      answer: "25",
      hints: [
        'Total = Mean × Count = 19 × 6 = 114.',
        'Sum of known = 15 + 22 + 17 + 24 + 11 = 89.',
        'Sixth = 114 − 89.'
      ],
      explanation: [
        'Total needed = 19 × 6 = 114.',
        'Known sum = 15 + 22 + 17 + 24 + 11 = 89.',
        'Missing = 114 − 89 = 25.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'After 4 tests, Ryan\'s mean score is 78. What score does he need on the 5th test to raise his mean to 82?',
      choices: ["90", "94", "96", "98"],
      answer: "98",
      hints: [
        'Current total = 78 × 4 = 312.',
        'Target total = 82 × 5 = 410.',
        'Needed = 410 − 312.'
      ],
      explanation: [
        'Current total = 78 × 4 = 312.',
        'Target total = 82 × 5 = 410.',
        'Needed score = 410 − 312 = 98.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'The mean of 10 numbers is 45. Nine of them sum to 398. What is the tenth number?',
      answer: "52",
      hints: [
        'Total = Mean × Count = 45 × 10 = 450.',
        'Known sum = 398.',
        'Tenth = 450 − 398.'
      ],
      explanation: [
        'Total needed = 45 × 10 = 450.',
        'Known sum = 398.',
        'Missing = 450 − 398 = 52.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'Four test scores are 88, 76, 92, and <span class="math">x</span>. If the mean of all four scores is 85, what is <span class="math">x</span>?',
      answer: "84",
      hints: [
        'Mean = Sum ÷ Count, so Sum = Mean × Count.',
        'Sum must be 85 × 4 = 340.',
        '88 + 76 + 92 + x = 340. Solve for x.'
      ],
      explanation: [
        'Required sum = 85 × 4 = 340.',
        '88 + 76 + 92 = 256.',
        'x = 340 − 256 = 84.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'Five numbers are 14, 20, <span class="math">x</span>, 26, 30 (in ascending order). If the median is 22, what is <span class="math">x</span>?',
      choices: ["18", "20", "22", "24"],
      answer: "22",
      hints: [
        'With 5 numbers in order, the median is the 3rd value.',
        'The 3rd value in the sorted list is x.',
        'So x must equal the median.'
      ],
      explanation: [
        'For 5 sorted values, the median is the 3rd value.',
        'The values in order are: 14, 20, x, 26, 30.',
        'So x = median = 22.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'The mean of six numbers is 15. Five of the numbers are 12, 18, 10, 16, and 20. What is the sixth number?',
      answer: "14",
      hints: [
        'Sum of all six = Mean × 6 = 15 × 6 = 90.',
        'Add the five known numbers: 12 + 18 + 10 + 16 + 20 = 76.',
        'Sixth number = 90 − 76.'
      ],
      explanation: [
        'Required sum = 15 × 6 = 90.',
        'Sum of five known = 12 + 18 + 10 + 16 + 20 = 76.',
        'Sixth number = 90 − 76 = 14.'
      ]
    }
  ],

  // --- Topic 7: Weighted Averages --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'A student\'s grade is 80% homework (weight 30%) and 90% tests (weight 70%). What is the weighted average?',
      answer: "87",
      hints: [
        "Multiply each score by its weight.",
        "80 × 0.30 = 24; 90 × 0.70 = 63.",
        "Add the weighted parts together."
      ],
      explanation: [
        "Homework: 80 × 0.30 = 24.",
        "Tests: 90 × 0.70 = 63.",
        "Weighted average = 24 + 63 = 87."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Class A has 20 students with mean 75. Class B has 30 students with mean 85. What is the overall mean?',
      choices: ["80", "81", "82", "83"],
      answer: "81",
      hints: [
        "Total for A = 20 × 75 = 1500.",
        "Total for B = 30 × 85 = 2550.",
        "Overall mean = (1500 + 2550) ÷ 50."
      ],
      explanation: [
        "Total A = 20 × 75 = 1500; Total B = 30 × 85 = 2550.",
        "Combined total = 1500 + 2550 = 4050.",
        "Overall mean = 4050 ÷ 50 = 81."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A recipe calls for mixing 4 liters of juice at $2/liter with 6 liters of juice at $5/liter. What is the cost per liter of the mixture? Give your answer as a decimal.',
      answer: "3.8",
      hints: [
        "Total cost = (4 × 2) + (6 × 5).",
        "Total cost = 8 + 30 = 38.",
        "Cost per liter = 38 ÷ 10."
      ],
      explanation: [
        "Cost of first juice: 4 × $2 = $8.",
        "Cost of second juice: 6 × $5 = $30. Total = $38.",
        "Cost per liter = $38 ÷ 10 liters = $3.80."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A course grade is based on: Homework 40%, Exams 60%. A student gets 95 on homework and 80 on exams. What is the weighted average?',
      choices: ["85", "86", "87.5", "88"],
      answer: "86",
      hints: [
        "Multiply each score by its weight.",
        "95 × 0.40 = 38; 80 × 0.60 = 48.",
        "Add the results."
      ],
      explanation: [
        "Homework: 95 × 0.40 = 38.",
        "Exams: 80 × 0.60 = 48.",
        "Weighted average = 38 + 48 = 86."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Group X has 10 students with a mean score of 60. Group Y has 40 students with a mean score of 80. What is the combined mean score?',
      answer: "76",
      hints: [
        "Total for X = 10 × 60 = 600.",
        "Total for Y = 40 × 80 = 3200.",
        "Combined mean = (600 + 3200) ÷ 50."
      ],
      explanation: [
        "Total X = 600, Total Y = 3200.",
        "Combined = (600 + 3200) ÷ 50 = 3800 ÷ 50 = 76."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'Section A has 15 students with mean 70. Section B has 25 students with mean 90. What is the combined mean?',
      choices: ["78.75", "80", "82.5", "85"],
      answer: "82.5",
      hints: [
        "Total A = 15 × 70 = 1050.",
        "Total B = 25 × 90 = 2250.",
        "Combined = (1050 + 2250) ÷ 40."
      ],
      explanation: [
        "Total A = 1050, Total B = 2250.",
        "Combined = 3300 ÷ 40 = 82.5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A final grade is: Quizzes 25%, Midterm 35%, Final 40%. A student scores 80 on quizzes, 70 on the midterm, and 90 on the final. What is the weighted average?',
      answer: "80.5",
      hints: [
        "Quizzes: 80 × 0.25 = 20.",
        "Midterm: 70 × 0.35 = 24.5.",
        "Final: 90 × 0.40 = 36."
      ],
      explanation: [
        "Quizzes: 80 × 0.25 = 20. Midterm: 70 × 0.35 = 24.5.",
        "Final: 90 × 0.40 = 36.",
        "Weighted average = 20 + 24.5 + 36 = 80.5."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A store sells 3 kg of rice at $4/kg and 7 kg at $6/kg. What is the average price per kilogram? Give your answer as a decimal.',
      answer: "5.4",
      hints: [
        "Total cost = (3 × 4) + (7 × 6).",
        "= 12 + 42 = 54.",
        "Average price = 54 ÷ 10."
      ],
      explanation: [
        "Total cost = 12 + 42 = $54.",
        "Total weight = 3 + 7 = 10 kg.",
        "Average price = 54 ÷ 10 = $5.40."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A course grade is based on: Projects 50% and Tests 50%. A student gets 88 on projects and 76 on tests. What is the weighted average?',
      choices: ["80", "82", "84", "86"],
      answer: "82",
      hints: [
        "Multiply each score by its weight.",
        "88 × 0.50 = 44; 76 × 0.50 = 38.",
        "Add the results."
      ],
      explanation: [
        "Projects: 88 × 0.50 = 44.",
        "Tests: 76 × 0.50 = 38.",
        "Weighted average = 44 + 38 = 82."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Class P has 12 students with mean 65. Class Q has 18 students with mean 85. What is the combined mean?',
      answer: "77",
      hints: [
        "Total for P = 12 × 65 = 780.",
        "Total for Q = 18 × 85 = 1530.",
        "Combined mean = (780 + 1530) ÷ 30."
      ],
      explanation: [
        "Total P = 780, Total Q = 1530.",
        "Combined = (780 + 1530) ÷ 30 = 2310 ÷ 30 = 77."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A store sells 5 kg of apples at $3/kg and 15 kg of apples at $7/kg. What is the average price per kilogram? Give your answer as a decimal.',
      answer: "6",
      hints: [
        "Total cost = (5 × 3) + (15 × 7).",
        "= 15 + 105 = 120.",
        "Average price = 120 ÷ 20."
      ],
      explanation: [
        "Total cost = 15 + 105 = $120.",
        "Total weight = 5 + 15 = 20 kg.",
        "Average price = 120 ÷ 20 = $6.00."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Room A has 10 students with mean 80. Room B has 15 students with mean 60. What is the combined mean?',
      choices: ["68", "70", "72", "74"],
      answer: "68",
      hints: [
        "Total A = 10 × 80 = 800.",
        "Total B = 15 × 60 = 900.",
        "Combined = (800 + 900) ÷ 25."
      ],
      explanation: [
        "Total A = 800, Total B = 900.",
        "Combined = 1700 ÷ 25 = 68."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A grade is based on: Classwork 20%, Homework 30%, Tests 50%. A student gets 90 classwork, 80 homework, and 70 tests. What is the weighted average?',
      answer: "77",
      hints: [
        "Classwork: 90 × 0.20 = 18.",
        "Homework: 80 × 0.30 = 24.",
        "Tests: 70 × 0.50 = 35."
      ],
      explanation: [
        "Classwork: 90 × 0.20 = 18. Homework: 80 × 0.30 = 24.",
        "Tests: 70 × 0.50 = 35.",
        "Weighted average = 18 + 24 + 35 = 77."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A shop sells 8 kg of beans at $5/kg and 12 kg at $3/kg. What is the average price per kilogram? Give your answer as a decimal.',
      answer: "3.8",
      hints: [
        "Total cost = (8 × 5) + (12 × 3).",
        "= 40 + 36 = 76.",
        "Average price = 76 ÷ 20."
      ],
      explanation: [
        "Total cost = 40 + 36 = $76.",
        "Total weight = 8 + 12 = 20 kg.",
        "Average price = 76 ÷ 20 = $3.80."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Section X has 20 students with mean 72. Section Y has 30 students with mean 88. What is the combined mean?',
      choices: ["78.4", "80", "81.6", "84"],
      answer: "81.6",
      hints: [
        "Total X = 20 × 72 = 1440.",
        "Total Y = 30 × 88 = 2640.",
        "Combined = (1440 + 2640) ÷ 50."
      ],
      explanation: [
        "Total X = 1440, Total Y = 2640.",
        "Combined = 4080 ÷ 50 = 81.6."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A grade is based on: Labs 35%, Exams 65%. A student scores 92 on labs and 78 on exams. What is the weighted average? Give as a decimal.',
      answer: "82.9",
      hints: [
        "Labs: 92 × 0.35 = 32.2.",
        "Exams: 78 × 0.65 = 50.7.",
        "Add the results."
      ],
      explanation: [
        "Labs: 92 × 0.35 = 32.2.",
        "Exams: 78 × 0.65 = 50.7.",
        "Weighted average = 32.2 + 50.7 = 82.9."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A store sells 6 kg of tea at $8/kg and 14 kg at $3/kg. What is the average price per kilogram? Give your answer as a decimal.',
      answer: "4.5",
      hints: [
        "Total cost = (6 × 8) + (14 × 3).",
        "= 48 + 42 = 90.",
        "Average price = 90 ÷ 20."
      ],
      explanation: [
        "Total cost = 48 + 42 = $90.",
        "Total weight = 6 + 14 = 20 kg.",
        "Average price = 90 ÷ 20 = $4.50."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Team A has 8 players with mean 55. Team B has 12 players with mean 75. What is the combined mean?',
      choices: ["63", "65", "67", "69"],
      answer: "67",
      hints: [
        'Total A = 8 × 55 = 440.',
        'Total B = 12 × 75 = 900.',
        'Combined = (440 + 900) ÷ 20.'
      ],
      explanation: [
        'Total A = 440, Total B = 900.',
        'Combined = 1340 ÷ 20 = 67.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A grade is based on: Participation 15%, Homework 35%, Exams 50%. A student scores 100 on participation, 80 on homework, and 70 on exams. What is the weighted average?',
      answer: "78",
      hints: [
        'Participation: 100 × 0.15 = 15.',
        'Homework: 80 × 0.35 = 28.',
        'Exams: 70 × 0.50 = 35.'
      ],
      explanation: [
        'Participation: 100 × 0.15 = 15. Homework: 80 × 0.35 = 28.',
        'Exams: 70 × 0.50 = 35.',
        'Weighted average = 15 + 28 + 35 = 78.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A store sells 10 kg of sugar at $2/kg and 5 kg at $4/kg. What is the average price per kilogram? Give your answer as a decimal.',
      answer: "2.67",
      hints: [
        'Total cost = (10 × 2) + (5 × 4).',
        '= 20 + 20 = 40.',
        'Average price = 40 ÷ 15.'
      ],
      explanation: [
        'Total cost = 20 + 20 = $40.',
        'Total weight = 10 + 5 = 15 kg.',
        'Average price = 40 ÷ 15 ≈ $2.67.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A student\'s grade is based on homework (30%) and exams (70%). If the homework average is 90 and the exam average is 80, what is the overall grade?',
      answer: "83",
      hints: [
        'Weighted average = (weight₁ × value₁) + (weight₂ × value₂).',
        'Homework contribution: 0.30 × 90 = 27.',
        'Exam contribution: 0.70 × 80 = 56.'
      ],
      explanation: [
        'Homework: 0.30 × 90 = 27.',
        'Exams: 0.70 × 80 = 56.',
        'Overall = 27 + 56 = 83.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A class has 20 boys with a mean height of 60 inches and 30 girls with a mean height of 55 inches. What is the mean height of the entire class?',
      choices: ["56", "57", "57.5", "58"],
      answer: "57",
      hints: [
        'Find the total height for boys and girls separately.',
        'Boys total = 20 × 60 = 1200. Girls total = 30 × 55 = 1650.',
        'Overall mean = (1200 + 1650) ÷ (20 + 30).'
      ],
      explanation: [
        'Boys total = 20 × 60 = 1200 inches.',
        'Girls total = 30 × 55 = 1650 inches.',
        'Combined mean = (1200 + 1650) ÷ 50 = 2850 ÷ 50 = 57 inches.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A final grade is 40% midterm, 40% final exam, and 20% participation. A student scored 75 on the midterm, 85 on the final, and 95 on participation. What is the weighted average?',
      answer: "83",
      hints: [
        'Multiply each score by its weight.',
        'Midterm: 0.40 × 75 = 30. Final: 0.40 × 85 = 34. Participation: 0.20 × 95 = 19.',
        'Add all contributions.'
      ],
      explanation: [
        'Midterm: 0.40 × 75 = 30.',
        'Final: 0.40 × 85 = 34.',
        'Participation: 0.20 × 95 = 19. Total = 30 + 34 + 19 = 83.'
      ]
    }
  ],

  // --- Topic 8: Outlier Effects --- difficulty 2-3
  [
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 10, 12, 11, 13, 14. If we add 100 to the set, which statistic changes the most?',
      choices: ["Mean", "Median", "Mode", "All change equally"],
      answer: "Mean",
      hints: [
        "The median goes from 12 to 12.5 — a small change.",
        "The mean goes from 12 to 160 ÷ 6 ≈ 26.7 — a big jump.",
        "Outliers affect the mean most dramatically."
      ],
      explanation: [
        "Original mean = 60 ÷ 5 = 12. New mean = 160 ÷ 6 ≈ 26.7.",
        "Original median = 12. New median = (12 + 13)/2 = 12.5.",
        "The mean increased by about 14.7, while the median barely changed."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data set: 20, 22, 24, 26, 28. The mean is 24. If the value 28 is replaced with 88, what is the new mean?',
      answer: "36",
      hints: [
        "Original sum = 120. Remove 28 and add 88.",
        "New sum = 120 − 28 + 88 = 180.",
        "New mean = 180 ÷ 5."
      ],
      explanation: [
        "Original sum = 20 + 22 + 24 + 26 + 28 = 120.",
        "New sum = 120 − 28 + 88 = 180.",
        "New mean = 180 ÷ 5 = 36."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Scores: 70, 72, 75, 73, 71, 200. Which measure is NOT greatly affected by the outlier 200?',
      choices: ["Mean", "Median", "Sum", "Range"],
      answer: "Median",
      hints: [
        "Sort: 70, 71, 72, 73, 75, 200.",
        "The median = (72 + 73)/2 = 72.5, close to the typical values.",
        "The mean = 461/6 ≈ 76.8, pulled up by 200."
      ],
      explanation: [
        "Sorted: 70, 71, 72, 73, 75, 200.",
        "Median = (72 + 73)/2 = 72.5, barely affected by the outlier.",
        "The mean, sum, and range are all heavily influenced by 200."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 15, 18, 16, 17, 19. The mean is 17. If 19 is changed to 99, what is the new mean?',
      answer: "33",
      hints: [
        "Original sum = 15 + 18 + 16 + 17 + 19 = 85.",
        "New sum = 85 − 19 + 99 = 165.",
        "New mean = 165 ÷ 5."
      ],
      explanation: [
        "Original sum = 85. New sum = 85 − 19 + 99 = 165.",
        "New mean = 165 ÷ 5 = 33."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data set: 5, 6, 7, 8, 9. Adding an outlier of 50 changes the mean from 7 to what?',
      choices: ["12.5", "14.17", "15", "10.5"],
      answer: "14.17",
      hints: [
        "Original sum = 5 + 6 + 7 + 8 + 9 = 35.",
        "New sum = 35 + 50 = 85.",
        "New mean = 85 ÷ 6 ≈ 14.17."
      ],
      explanation: [
        "Original sum = 35, new sum = 85 with 6 values.",
        "New mean = 85 ÷ 6 ≈ 14.17."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 30, 32, 34, 36, 38. If 38 is changed to 138, by how much does the mean increase?',
      answer: "20",
      hints: [
        "Original mean = (30 + 32 + 34 + 36 + 38) ÷ 5 = 170 ÷ 5 = 34.",
        "New sum = 170 − 38 + 138 = 270. New mean = 270 ÷ 5 = 54.",
        "Increase = 54 − 34."
      ],
      explanation: [
        "Original mean = 34. New mean = 270 ÷ 5 = 54.",
        "Increase = 54 − 34 = 20."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 40, 42, 44, 46, 48. If you add 200 to the set, which changes more: the mean or the median?',
      choices: ["Mean", "Median", "Both change the same", "Neither changes"],
      answer: "Mean",
      hints: [
        "Original mean = 44. New mean = (220 + 200) ÷ 6 = 420 ÷ 6 = 70.",
        "Original median = 44. New median = (44 + 46)/2 = 45.",
        "Mean changed by 26, median changed by 1."
      ],
      explanation: [
        "Mean changed from 44 to 70 (increase of 26).",
        "Median changed from 44 to 45 (increase of 1).",
        "The mean is affected much more by the outlier."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Scores: 82, 85, 88, 84, 86. If a student scoring 150 is added, what is the new mean? (Round to the nearest whole number.)',
      answer: "96",
      hints: [
        "Original sum = 82 + 85 + 88 + 84 + 86 = 425.",
        "New sum = 425 + 150 = 575.",
        "New mean = 575 ÷ 6."
      ],
      explanation: [
        "New sum = 425 + 150 = 575. New count = 6.",
        "New mean = 575 ÷ 6 ≈ 95.83 ≈ 96."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 25, 27, 29, 31, 33. The mean is 29. If 25 is changed to 75, what is the new mean?',
      answer: "39",
      hints: [
        "Original sum = 25 + 27 + 29 + 31 + 33 = 145.",
        "New sum = 145 − 25 + 75 = 195.",
        "New mean = 195 ÷ 5."
      ],
      explanation: [
        "Original sum = 145. New sum = 145 − 25 + 75 = 195.",
        "New mean = 195 ÷ 5 = 39."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 50, 52, 54, 56, 58. If 300 is added to the set, which statistic is least affected?',
      choices: ["Mean", "Median", "Range", "Sum"],
      answer: "Median",
      hints: [
        "Original median = 54. With 300 added: 50, 52, 54, 56, 58, 300.",
        "New median = (54 + 56)/2 = 55.",
        "The mean changes much more: from 54 to (270 + 300)/6 = 95."
      ],
      explanation: [
        "Original median = 54, new median = 55 (change of 1).",
        "Original mean = 54, new mean = 95 (change of 41).",
        "The median is least affected by the outlier."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 60, 62, 64, 66, 68. If 68 is changed to 168, by how much does the mean increase?',
      choices: ["10", "15", "20", "25"],
      answer: "20",
      hints: [
        "Original mean = (60 + 62 + 64 + 66 + 68) ÷ 5 = 320 ÷ 5 = 64.",
        "New sum = 320 − 68 + 168 = 420. New mean = 420 ÷ 5 = 84.",
        "Increase = 84 − 64."
      ],
      explanation: [
        "Original mean = 64. New mean = 420 ÷ 5 = 84.",
        "Increase = 84 − 64 = 20."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 45, 47, 49, 51, 53. If 53 is replaced by 153, what is the new mean?',
      answer: "69",
      hints: [
        "Original sum = 45 + 47 + 49 + 51 + 53 = 245.",
        "New sum = 245 − 53 + 153 = 345.",
        "New mean = 345 ÷ 5."
      ],
      explanation: [
        "Original sum = 245. New sum = 245 − 53 + 153 = 345.",
        "New mean = 345 ÷ 5 = 69."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 20, 22, 24, 26, 28. If 500 is added to the set, which statistic is most affected?',
      choices: ["Mean", "Median", "Mode", "The changes are equal"],
      answer: "Mean",
      hints: [
        "Original mean = 24. New mean = (120 + 500) ÷ 6 ≈ 103.3.",
        "Original median = 24. New median = (24 + 26)/2 = 25.",
        "Mean changed by ~79, median changed by 1."
      ],
      explanation: [
        "Mean changed from 24 to about 103.3 (increase of ~79).",
        "Median changed from 24 to 25 (increase of 1).",
        "The mean is affected much more by the outlier."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 70, 72, 74, 76, 78. If 78 is changed to 228, by how much does the mean increase?',
      answer: "30",
      hints: [
        "Original mean = (70 + 72 + 74 + 76 + 78) ÷ 5 = 370 ÷ 5 = 74.",
        "New sum = 370 − 78 + 228 = 520. New mean = 520 ÷ 5 = 104.",
        "Increase = 104 − 74."
      ],
      explanation: [
        "Original mean = 74. New mean = 520 ÷ 5 = 104.",
        "Increase = 104 − 74 = 30."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 35, 37, 39, 41, 43. If 43 is replaced by 193, what is the new mean?',
      answer: "69",
      hints: [
        "Original sum = 35 + 37 + 39 + 41 + 43 = 195.",
        "New sum = 195 − 43 + 193 = 345.",
        "New mean = 345 ÷ 5."
      ],
      explanation: [
        "Original sum = 195. New sum = 195 − 43 + 193 = 345.",
        "New mean = 345 ÷ 5 = 69."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 80, 82, 84, 86, 88. If 400 is added to the set, which statistic is most affected?',
      choices: ["Mean", "Median", "Mode", "They all change equally"],
      answer: "Mean",
      hints: [
        "Original mean = 84. New mean = (420 + 400) ÷ 6 ≈ 136.7.",
        "Original median = 84. New median = (84 + 86)/2 = 85.",
        "Mean changed by ~52.7, median changed by 1."
      ],
      explanation: [
        "Mean changed from 84 to about 136.7 (increase of ~52.7).",
        "Median changed from 84 to 85 (increase of 1).",
        "The mean is affected much more by the outlier."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 55, 57, 59, 61, 63. If 63 is changed to 263, by how much does the mean increase?',
      answer: "40",
      hints: [
        "Original mean = (55 + 57 + 59 + 61 + 63) ÷ 5 = 295 ÷ 5 = 59.",
        "New sum = 295 − 63 + 263 = 495. New mean = 495 ÷ 5 = 99.",
        "Increase = 99 − 59."
      ],
      explanation: [
        "Original mean = 59. New mean = 495 ÷ 5 = 99.",
        "Increase = 99 − 59 = 40."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 10, 12, 14, 16, 18. If 18 is changed to 118, by how much does the mean increase?',
      answer: "20",
      hints: [
        'Original mean = (10 + 12 + 14 + 16 + 18) ÷ 5 = 70 ÷ 5 = 14.',
        'New sum = 70 − 18 + 118 = 170. New mean = 170 ÷ 5 = 34.',
        'Increase = 34 − 14.'
      ],
      explanation: [
        'Original mean = 14. New mean = 170 ÷ 5 = 34.',
        'Increase = 34 − 14 = 20.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 90, 92, 94, 96, 98. If you add 500 to the set, which statistic is most affected?',
      choices: ["Mean", "Median", "Mode", "They all change equally"],
      answer: "Mean",
      hints: [
        'Original mean = 94. New mean = (470 + 500) ÷ 6 ≈ 161.7.',
        'Original median = 94. New median = (94 + 96)/2 = 95.',
        'Mean changed by ~67.7, median changed by 1.'
      ],
      explanation: [
        'Mean changed from 94 to about 161.7 (increase of ~67.7).',
        'Median changed from 94 to 95 (increase of 1).',
        'The mean is affected much more by the outlier.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 60, 62, 64, 66, 68. If 68 is replaced by 168, what is the new mean?',
      answer: "84",
      hints: [
        'Original sum = 60 + 62 + 64 + 66 + 68 = 320.',
        'New sum = 320 − 68 + 168 = 420.',
        'New mean = 420 ÷ 5.'
      ],
      explanation: [
        'Original sum = 320. New sum = 320 − 68 + 168 = 420.',
        'New mean = 420 ÷ 5 = 84.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'The data set is: 20, 22, 25, 23, 21, 150. Which value is most likely an outlier?',
      choices: ["20", "23", "25", "150"],
      answer: "150",
      hints: [
        'An outlier is a value far from the rest of the data.',
        'Most values are between 20 and 25.',
        '150 is much larger than all other values.'
      ],
      explanation: [
        'Values 20, 21, 22, 23, 25 are all close together.',
        '150 is far from the cluster of other values.',
        '150 is the outlier.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A data set without an outlier is: 10, 12, 14, 16, 18 (mean = 14). If we add the value 60 to the set, what is the new mean? (Round to the nearest whole number.)',
      answer: "22",
      hints: [
        'Find the new sum by adding 60 to the old sum.',
        'Old sum = 70. New sum = 70 + 60 = 130.',
        'New count = 6. New mean = 130 ÷ 6.'
      ],
      explanation: [
        'Original sum = 10 + 12 + 14 + 16 + 18 = 70.',
        'New sum = 70 + 60 = 130. New count = 6.',
        'New mean = 130 ÷ 6 ≈ 21.67.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'If an outlier is removed from a data set, which measure typically changes the LEAST?',
      choices: ["Mean", "Range", "Median", "Sum"],
      answer: "Median",
      hints: [
        'Think about how each measure responds to extreme values.',
        'Range depends on the max and min, which an outlier affects directly.',
        'Median depends on the middle value, not extremes.'
      ],
      explanation: [
        'Removing an outlier greatly changes the range (max − min) and the mean.',
        'The sum decreases by the outlier value.',
        'The median depends on middle values and usually changes very little.'
      ]
    }
  ],

  // --- Topic 9: Range & Transformations --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 5, 9, 12, 7, 3. If you add 6 to every value, what is the new mean?',
      answer: "13.2",
      hints: [
        "Original mean = (5 + 9 + 12 + 7 + 3) ÷ 5.",
        "Original mean = 36 ÷ 5 = 7.2.",
        "Adding 6 to every value increases the mean by 6."
      ],
      explanation: [
        "Original mean = 36 ÷ 5 = 7.2.",
        "Adding 6 to each value shifts the mean up by 6.",
        "New mean = 7.2 + 6 = 13.2."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 4, 8, 12, 16. If you multiply every value by 3, what happens to the range?',
      choices: ["Range stays 12", "Range becomes 36", "Range becomes 48", "Range becomes 24"],
      answer: "Range becomes 36",
      hints: [
        "Original range = 16 − 4 = 12.",
        "New data: 12, 24, 36, 48.",
        "New range = 48 − 12."
      ],
      explanation: [
        "Original range = 16 − 4 = 12.",
        "Multiplying each value by 3: range also multiplies by 3.",
        "New range = 12 × 3 = 36."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'If you add 10 to every value in a data set, what happens to the range?',
      choices: ["It increases by 10", "It stays the same", "It doubles", "It decreases by 10"],
      answer: "It stays the same",
      hints: [
        "Range = Max − Min.",
        "Adding 10 to both max and min: (Max + 10) − (Min + 10).",
        "The 10s cancel out."
      ],
      explanation: [
        "Range = Max − Min.",
        "New range = (Max + 10) − (Min + 10) = Max − Min.",
        "Adding a constant to every value does not change the range."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 10, 20, 30, 40, 50. If every value is doubled, what is the new range?',
      answer: "80",
      hints: [
        "Original range = 50 − 10 = 40.",
        "When you multiply every value by 2, the range also multiplies by 2.",
        "New range = 40 × 2."
      ],
      explanation: [
        "Original range = 50 − 10 = 40.",
        "Doubling all values: new data is 20, 40, 60, 80, 100.",
        "New range = 100 − 20 = 80, or equivalently 40 × 2 = 80."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 3, 7, 11, 15. If 5 is subtracted from every value, what is the new median?',
      choices: ["2", "4", "6", "9"],
      answer: "4",
      hints: [
        "Original median = (7 + 11) ÷ 2 = 9.",
        "Subtracting 5 from every value shifts the median down by 5.",
        "New median = 9 − 5."
      ],
      explanation: [
        "Original median = (7 + 11) ÷ 2 = 9.",
        "Subtracting 5 from each value shifts the median by −5.",
        "New median = 9 − 5 = 4."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 8, 14, 20, 26. If you subtract 3 from every value, what is the new mean?',
      answer: "14",
      hints: [
        "Original mean = (8 + 14 + 20 + 26) ÷ 4 = 68 ÷ 4 = 17.",
        "Subtracting 3 from every value decreases the mean by 3.",
        "New mean = 17 − 3."
      ],
      explanation: [
        "Original mean = 68 ÷ 4 = 17.",
        "New mean = 17 − 3 = 14."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 6, 10, 14, 18. If every value is multiplied by 5, what is the new mean?',
      choices: ["12", "48", "60", "72"],
      answer: "60",
      hints: [
        "Original mean = (6 + 10 + 14 + 18) ÷ 4 = 48 ÷ 4 = 12.",
        "Multiplying every value by 5 multiplies the mean by 5.",
        "New mean = 12 × 5."
      ],
      explanation: [
        "Original mean = 12.",
        "New mean = 12 × 5 = 60."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 5, 15, 25, 35. If every value is multiplied by 4, what is the new range?',
      answer: "120",
      hints: [
        "Original range = 35 − 5 = 30.",
        "Multiplying all values by 4 multiplies the range by 4.",
        "New range = 30 × 4."
      ],
      explanation: [
        "Original range = 35 − 5 = 30.",
        "New range = 30 × 4 = 120."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 7, 13, 19, 25. If every value is multiplied by 2 and then 3 is added, what is the new mean?',
      choices: ["32", "35", "29", "22"],
      answer: "35",
      hints: [
        "Original mean = (7 + 13 + 19 + 25) ÷ 4 = 64 ÷ 4 = 16.",
        "Multiplying by 2 gives new mean = 16 × 2 = 32.",
        "Adding 3 to every value increases the mean by 3."
      ],
      explanation: [
        "Original mean = 16.",
        "After ×2: mean = 32. After +3: mean = 35.",
        "New mean = 35."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 10, 18, 26, 34. If you add 7 to every value, what is the new range?',
      answer: "24",
      hints: [
        "Original range = 34 − 10 = 24.",
        "Adding a constant to every value does not change the range.",
        "New range = 24."
      ],
      explanation: [
        "Original range = 34 − 10 = 24.",
        "Adding 7 to each value: new max = 41, new min = 17.",
        "New range = 41 − 17 = 24. The range stays the same."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 9, 15, 21, 27. If every value is tripled, what is the new median?',
      answer: "54",
      hints: [
        "Original median = (15 + 21) ÷ 2 = 18.",
        "Multiplying every value by 3 multiplies the median by 3.",
        "New median = 18 × 3."
      ],
      explanation: [
        "Original median = (15 + 21) ÷ 2 = 18.",
        "Tripled data: 27, 45, 63, 81.",
        "New median = (45 + 63) ÷ 2 = 54, or simply 18 × 3 = 54."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 12, 20, 28, 36. If every value is multiplied by 3 and then 2 is subtracted, what is the new mean?',
      answer: "70",
      hints: [
        "Original mean = (12 + 20 + 28 + 36) ÷ 4 = 96 ÷ 4 = 24.",
        "Multiplying by 3 gives new mean = 24 × 3 = 72.",
        "Subtracting 2 from every value decreases the mean by 2."
      ],
      explanation: [
        "Original mean = 24.",
        "After ×3: mean = 72. After −2: mean = 70.",
        "New mean = 70."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Data: 5, 11, 17, 23. If 4 is added to every value, what is the new range?',
      choices: ["14", "18", "22", "26"],
      answer: "18",
      hints: [
        "Original range = 23 − 5 = 18.",
        "Adding a constant to every value does not change the range.",
        "New range = 18."
      ],
      explanation: [
        "Original range = 23 − 5 = 18.",
        "Adding 4 to each: new max = 27, new min = 9.",
        "New range = 27 − 9 = 18. Range unchanged."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 8, 16, 24, 32. If every value is multiplied by 5, what is the new range?',
      choices: ["24", "80", "120", "160"],
      answer: "120",
      hints: [
        "Original range = 32 − 8 = 24.",
        "Multiplying by 5 also multiplies the range by 5.",
        "New range = 24 × 5."
      ],
      explanation: [
        "Original range = 32 − 8 = 24.",
        "New range = 24 × 5 = 120."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 11, 17, 23, 29. If you add 9 to every value, what is the new mean?',
      answer: "29",
      hints: [
        "Original mean = (11 + 17 + 23 + 29) ÷ 4 = 80 ÷ 4 = 20.",
        "Adding 9 to every value increases the mean by 9.",
        "New mean = 20 + 9."
      ],
      explanation: [
        "Original mean = 80 ÷ 4 = 20.",
        "New mean = 20 + 9 = 29."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 3, 9, 15, 21. If every value is multiplied by 4, what is the new range?',
      choices: ["18", "48", "72", "84"],
      answer: "72",
      hints: [
        "Original range = 21 − 3 = 18.",
        "Multiplying by 4 also multiplies the range by 4.",
        "New range = 18 × 4."
      ],
      explanation: [
        "Original range = 21 − 3 = 18.",
        "New range = 18 × 4 = 72."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 14, 22, 30, 38. If every value is multiplied by 2 and then 5 is subtracted, what is the new mean?',
      answer: "47",
      hints: [
        "Original mean = (14 + 22 + 30 + 38) ÷ 4 = 104 ÷ 4 = 26.",
        "Multiplying by 2 gives new mean = 26 × 2 = 52.",
        "Subtracting 5 from every value decreases the mean by 5."
      ],
      explanation: [
        "Original mean = 26.",
        "After ×2: mean = 52. After −5: mean = 47.",
        "New mean = 47."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Data: 15, 21, 27, 33. If you subtract 5 from every value, what is the new mean?',
      answer: "19",
      hints: [
        'Original mean = (15 + 21 + 27 + 33) ÷ 4 = 96 ÷ 4 = 24.',
        'Subtracting 5 from every value decreases the mean by 5.',
        'New mean = 24 − 5.'
      ],
      explanation: [
        'Original mean = 96 ÷ 4 = 24.',
        'New mean = 24 − 5 = 19.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Data: 4, 12, 20, 28. If every value is multiplied by 3, what is the new range?',
      choices: ["24", "48", "72", "84"],
      answer: "72",
      hints: [
        'Original range = 28 − 4 = 24.',
        'Multiplying by 3 also multiplies the range by 3.',
        'New range = 24 × 3.'
      ],
      explanation: [
        'Original range = 28 − 4 = 24.',
        'New range = 24 × 3 = 72.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Data: 6, 14, 22, 30. If every value is multiplied by 2 and then 10 is added, what is the new mean?',
      answer: "46",
      hints: [
        'Original mean = (6 + 14 + 22 + 30) ÷ 4 = 72 ÷ 4 = 18.',
        'Multiplying by 2 gives new mean = 18 × 2 = 36.',
        'Adding 10 to every value increases the mean by 10.'
      ],
      explanation: [
        'Original mean = 18.',
        'After ×2: mean = 36. After +10: mean = 46.',
        'New mean = 46.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A data set has a mean of 40 and range of 20. If you add 10 to every value, what are the new mean and range?',
      choices: ["Mean = 50, Range = 30", "Mean = 50, Range = 20", "Mean = 40, Range = 30", "Mean = 40, Range = 20"],
      answer: "Mean = 50, Range = 20",
      hints: [
        'Adding a constant shifts all values equally.',
        'The mean increases by the added constant.',
        'The range stays the same because max and min both increase by the same amount.'
      ],
      explanation: [
        'Adding 10 to every value: new mean = 40 + 10 = 50.',
        'Range = max − min. Both max and min increase by 10, so the difference is unchanged.',
        'New range = 20 (unchanged).'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A data set has values 5, 10, 15, 20, 25. If every value is multiplied by 3, what is the new range?',
      answer: "60",
      hints: [
        'Original range = 25 − 5 = 20.',
        'When you multiply all values by a constant, the range is also multiplied by that constant.',
        'New range = 20 × 3.'
      ],
      explanation: [
        'Original: min = 5, max = 25, range = 20.',
        'After multiplying by 3: min = 15, max = 75.',
        'New range = 75 − 15 = 60. (Equivalently, 20 × 3 = 60.)'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A data set has a mean of 30. Every value is doubled and then 5 is subtracted. What is the new mean?',
      choices: ["55", "60", "65", "35"],
      answer: "55",
      hints: [
        'Apply the transformation to the mean.',
        'Doubling the mean: 30 × 2 = 60.',
        'Subtracting 5: 60 − 5 = 55.'
      ],
      explanation: [
        'When all values are transformed by f(x) = 2x − 5, the mean transforms the same way.',
        'New mean = 2 × 30 − 5 = 60 − 5 = 55.'
      ]
    }
  ],

  // --- Topic 10: Stem-and-Leaf Plots --- difficulty 3-4
  [
    {
      type: "mc",
      difficulty: 3,
      question: 'In a stem-and-leaf plot, the stem is 4 and the leaves are 2, 5, 7. What values does this represent?',
      choices: ["42, 45, 47", "4.2, 4.5, 4.7", "24, 54, 74", "420, 450, 470"],
      answer: "42, 45, 47",
      hints: [
        "The stem represents the tens digit.",
        "Each leaf is the ones digit.",
        "Combine: 4|2 = 42, 4|5 = 45, 4|7 = 47."
      ],
      explanation: [
        "Stem = tens digit = 4 (meaning 40).",
        "Leaves are ones digits: 2, 5, 7.",
        "Values: 42, 45, 47."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 3 | 1 4 6 8 and 4 | 0 2 5. How many data values are there in total?',
      answer: "7",
      hints: [
        "Count the leaves in each row.",
        "Row 1 (stem 3): 4 leaves. Row 2 (stem 4): 3 leaves.",
        "Total = 4 + 3."
      ],
      explanation: [
        "Stem 3 has leaves: 1, 4, 6, 8 → 4 values.",
        "Stem 4 has leaves: 0, 2, 5 → 3 values.",
        "Total = 4 + 3 = 7 data values."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 2 | 3 5 7, 3 | 1 4 9, 4 | 0 6. What is the median of this data?',
      answer: "32.5",
      hints: [
        "List all values: 23, 25, 27, 31, 34, 39, 40, 46.",
        "There are 8 values, so the median is the average of the 4th and 5th.",
        "4th = 31, 5th = 34."
      ],
      explanation: [
        "All values: 23, 25, 27, 31, 34, 39, 40, 46.",
        "Median = average of 4th and 5th values = (31 + 34) ÷ 2.",
        "Median = 65 ÷ 2 = 32.5."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 5 | 0 3 8 and 6 | 2 4 7 9. What is the range of this data?',
      choices: ["17", "19", "21", "23"],
      answer: "19",
      hints: [
        "List the values: 50, 53, 58, 62, 64, 67, 69.",
        "Range = maximum − minimum.",
        "Max = 69, Min = 50."
      ],
      explanation: [
        "Values: 50, 53, 58, 62, 64, 67, 69.",
        "Range = 69 − 50 = 19."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 1 | 5, 2 | 0 5, 3 | 0 5. What is the mean of this data?',
      answer: "25",
      hints: [
        "List the values: 15, 20, 25, 30, 35.",
        "Find the sum: 15 + 20 + 25 + 30 + 35.",
        "Sum = 125. Divide by 5."
      ],
      explanation: [
        "Values: 15, 20, 25, 30, 35.",
        "Sum = 15 + 20 + 25 + 30 + 35 = 125.",
        "Mean = 125 ÷ 5 = 25."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 6 | 1 3 7 and 7 | 0 4 4 9. What is the mode?',
      choices: ["61", "63", "74", "79"],
      answer: "74",
      hints: [
        "List all values: 61, 63, 67, 70, 74, 74, 79.",
        "The mode is the value that appears most often.",
        "74 appears twice; all others appear once."
      ],
      explanation: [
        "Values: 61, 63, 67, 70, 74, 74, 79.",
        "74 appears 2 times (most frequent).",
        "Mode = 74."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 3 | 2 6, 4 | 1 5 8, 5 | 3 7. What is the mean of this data?',
      answer: "44.57",
      hints: [
        "List values: 32, 36, 41, 45, 48, 53, 57.",
        "Sum = 32 + 36 + 41 + 45 + 48 + 53 + 57 = 312.",
        "Mean = 312 ÷ 7 ≈ 44.57."
      ],
      explanation: [
        "Values: 32, 36, 41, 45, 48, 53, 57.",
        "Sum = 312. Count = 7.",
        "Mean = 312 ÷ 7 ≈ 44.57."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 8 | 0 2 5, 9 | 1 3 6 8. How many data values are greater than 90?',
      answer: "4",
      hints: [
        "Values from stem 9: 91, 93, 96, 98.",
        "All of these are greater than 90.",
        "Count them."
      ],
      explanation: [
        "Stem 9 values: 91, 93, 96, 98 → 4 values.",
        "All 4 values are greater than 90."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 1 | 2 8, 2 | 3 6 9, 3 | 4 7. What is the range of this data?',
      answer: "25",
      hints: [
        "List all values: 12, 18, 23, 26, 29, 34, 37.",
        "Range = maximum − minimum.",
        "Max = 37, Min = 12."
      ],
      explanation: [
        "Values: 12, 18, 23, 26, 29, 34, 37.",
        "Range = 37 − 12 = 25."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 4 | 3 5 5 9, 5 | 1 4 7, 6 | 2 8. What is the mode?',
      choices: ["43", "45", "51", "No mode"],
      answer: "45",
      hints: [
        "List all values: 43, 45, 45, 49, 51, 54, 57, 62, 68.",
        "The mode is the value that appears most often.",
        "45 appears twice; all others appear once."
      ],
      explanation: [
        "Values: 43, 45, 45, 49, 51, 54, 57, 62, 68.",
        "45 appears 2 times (most frequent).",
        "Mode = 45."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 7 | 1 4, 8 | 0 3 6 9, 9 | 2 5. What is the median?',
      answer: "84.5",
      hints: [
        "List all values: 71, 74, 80, 83, 86, 89, 92, 95.",
        "There are 8 values, so the median is the average of the 4th and 5th.",
        "4th = 83, 5th = 86."
      ],
      explanation: [
        "All values: 71, 74, 80, 83, 86, 89, 92, 95.",
        "Median = (83 + 86) ÷ 2 = 169 ÷ 2 = 84.5."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 5 | 2 4 9 and 6 | 1 3 7. What is the range of this data?',
      answer: "15",
      hints: [
        "List the values: 52, 54, 59, 61, 63, 67.",
        "Range = maximum − minimum.",
        "Max = 67, Min = 52."
      ],
      explanation: [
        "Values: 52, 54, 59, 61, 63, 67.",
        "Range = 67 − 52 = 15."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 2 | 1 5 5 8, 3 | 0 3 7. What is the mode?',
      choices: ["21", "25", "30", "No mode"],
      answer: "25",
      hints: [
        "List all values: 21, 25, 25, 28, 30, 33, 37.",
        "The mode is the value that appears most often.",
        "25 appears twice; all others appear once."
      ],
      explanation: [
        "Values: 21, 25, 25, 28, 30, 33, 37.",
        "25 appears 2 times (most frequent).",
        "Mode = 25."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 4 | 0 6, 5 | 2 5 8, 6 | 1 4. What is the median?',
      answer: "55",
      hints: [
        "List all values: 40, 46, 52, 55, 58, 61, 64.",
        "There are 7 values, so the median is the 4th.",
        "Count to the 4th value."
      ],
      explanation: [
        "All values: 40, 46, 52, 55, 58, 61, 64.",
        "The 4th value out of 7 is 55.",
        "Median = 55."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 3 | 0 4 4 7, 4 | 2 5 9. What is the mode?',
      choices: ["30", "34", "42", "No mode"],
      answer: "34",
      hints: [
        "List all values: 30, 34, 34, 37, 42, 45, 49.",
        "The mode is the value that appears most often.",
        "34 appears twice; all others appear once."
      ],
      explanation: [
        "Values: 30, 34, 34, 37, 42, 45, 49.",
        "34 appears 2 times (most frequent).",
        "Mode = 34."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 2 | 4 7, 3 | 1 5 8, 4 | 2 6. What is the mean of this data?',
      answer: "34.71",
      hints: [
        "List values: 24, 27, 31, 35, 38, 42, 46.",
        "Sum = 24 + 27 + 31 + 35 + 38 + 42 + 46 = 243.",
        "Mean = 243 ÷ 7 ≈ 34.71."
      ],
      explanation: [
        "Values: 24, 27, 31, 35, 38, 42, 46.",
        "Sum = 243. Count = 7.",
        "Mean = 243 ÷ 7 ≈ 34.71."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 6 | 3 8, 7 | 0 5 5 9, 8 | 1. What is the median?',
      answer: "75",
      hints: [
        "List all values: 63, 68, 70, 75, 75, 79, 81.",
        "There are 7 values, so the median is the 4th.",
        "Count to the 4th value."
      ],
      explanation: [
        "All values: 63, 68, 70, 75, 75, 79, 81.",
        "The 4th value out of 7 is 75.",
        "Median = 75."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 5 | 1 3 3 8 and 6 | 2 5 9. What is the mode?',
      choices: ["51", "53", "62", "No mode"],
      answer: "53",
      hints: [
        'List all values: 51, 53, 53, 58, 62, 65, 69.',
        'The mode is the value that appears most often.',
        '53 appears twice; all others appear once.'
      ],
      explanation: [
        'Values: 51, 53, 53, 58, 62, 65, 69.',
        '53 appears 2 times (most frequent).',
        'Mode = 53.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: 3 | 5 9, 4 | 2 6 8, 5 | 0 4. What is the mean of this data? (Round to the nearest hundredth.)',
      answer: "44.86",
      hints: [
        'List values: 35, 39, 42, 46, 48, 50, 54.',
        'Sum = 35 + 39 + 42 + 46 + 48 + 50 + 54 = 314.',
        'Mean = 314 ÷ 7 ≈ 44.86.'
      ],
      explanation: [
        'Values: 35, 39, 42, 46, 48, 50, 54.',
        'Sum = 314. Count = 7.',
        'Mean = 314 ÷ 7 ≈ 44.86.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: 7 | 0 3 6 and 8 | 2 5 8. What is the range of this data?',
      answer: "18",
      hints: [
        'List the values: 70, 73, 76, 82, 85, 88.',
        'Range = maximum − minimum.',
        'Max = 88, Min = 70.'
      ],
      explanation: [
        'Values: 70, 73, 76, 82, 85, 88.',
        'Range = 88 − 70 = 18.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: Stem 4 | Leaves: 2, 5, 7; Stem 5 | Leaves: 1, 3, 3, 8; Stem 6 | Leaves: 0, 4. What is the median of this data?',
      choices: ["51", "52", "53", "54"],
      answer: "53",
      hints: [
        'List all values: 42, 45, 47, 51, 53, 53, 58, 60, 64.',
        'There are 9 values, so the median is the 5th value.',
        'Count: 1st=42, 2nd=45, 3rd=47, 4th=51, 5th=53.'
      ],
      explanation: [
        'All values: 42, 45, 47, 51, 53, 53, 58, 60, 64. Count = 9.',
        'Median = 5th value = 53.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A stem-and-leaf plot shows: Stem 2 | Leaves: 1, 4, 6; Stem 3 | Leaves: 0, 3, 5, 7; Stem 4 | Leaves: 2, 8. How many data values are in the set?',
      answer: "9",
      hints: [
        'Count the total number of leaves.',
        'Stem 2 has 3 leaves, Stem 3 has 4 leaves, Stem 4 has 2 leaves.',
        'Total = 3 + 4 + 2.'
      ],
      explanation: [
        'Each leaf represents one data value.',
        'Stem 2: 3 leaves, Stem 3: 4 leaves, Stem 4: 2 leaves.',
        'Total = 3 + 4 + 2 = 9 data values.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 4,
      question: 'A stem-and-leaf plot shows: Stem 7 | Leaves: 0, 2, 5, 5, 8; Stem 8 | Leaves: 1, 3, 6; Stem 9 | Leaves: 0, 4. What is the range of the data?',
      choices: ["22", "24", "26", "28"],
      answer: "24",
      hints: [
        'The smallest value is the first leaf of the smallest stem.',
        'Smallest = 70. Largest = 94.',
        'Range = 94 − 70.'
      ],
      explanation: [
        'Smallest value: stem 7, leaf 0 → 70.',
        'Largest value: stem 9, leaf 4 → 94.',
        'Range = 94 − 70 = 24.'
      ]
    }
  ]
];

// ============================================================
// WORLD 13 — Chapter 14: Counting & Probability (12 topics)
// ============================================================
EXTRA_QUESTIONS[13] = [

  // --- Topic 0: Multiplication Principle --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'A deli offers 4 types of bread and 5 types of filling. How many different sandwiches can you make choosing one bread and one filling?',
      answer: "20",
      hints: [
        "Use the Multiplication Principle.",
        "Choices for bread × choices for filling.",
        "4 × 5 = ?"
      ],
      explanation: [
        "By the Multiplication Principle, total = bread choices × filling choices.",
        "Total sandwiches = 4 × 5 = 20."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'You have 3 shirts, 4 pants, and 2 pairs of shoes. How many outfits can you make?',
      choices: ["9", "12", "24", "36"],
      answer: "24",
      hints: [
        "Multiply the choices at each step.",
        "3 × 4 × 2.",
        "12 × 2 = ?"
      ],
      explanation: [
        "Outfits = shirts × pants × shoes.",
        "= 3 × 4 × 2 = 24."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A license plate has 2 letters (A–Z) followed by 3 digits (0–9). Letters and digits can repeat. How many plates are possible?',
      answer: "676000",
      hints: [
        "26 choices for each letter, 10 for each digit.",
        "Total = 26 × 26 × 10 × 10 × 10.",
        "= 676 × 1000."
      ],
      explanation: [
        "Letters: 26 × 26 = 676.",
        "Digits: 10 × 10 × 10 = 1000.",
        "Total = 676 × 1000 = 676,000."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A coin is flipped 3 times. How many total outcomes are possible?',
      choices: ["3", "6", "8", "16"],
      answer: "8",
      hints: [
        "Each flip has 2 outcomes (H or T).",
        "Use the multiplication principle: 2 × 2 × 2.",
        "= 8."
      ],
      explanation: [
        "Each of the 3 flips has 2 outcomes.",
        "Total = 2 × 2 × 2 = 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'An ice cream shop has 6 flavors and 3 types of cones. How many single-scoop combinations are possible?',
      answer: "18",
      hints: [
        "Choose one flavor and one cone type.",
        "Use the Multiplication Principle.",
        "6 × 3 = ?"
      ],
      explanation: [
        "Combinations = flavors × cone types.",
        "= 6 × 3 = 18."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A cafeteria offers 5 main dishes, 4 side dishes, and 3 drinks. How many different meal combinations are possible?',
      answer: "60",
      hints: [
        "Multiply the number of choices at each step.",
        "5 × 4 × 3.",
        "= 20 × 3."
      ],
      explanation: [
        "Meals = main × side × drink.",
        "= 5 × 4 × 3 = 60."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A die is rolled and a coin is flipped. How many outcomes are possible?',
      choices: ["6", "8", "10", "12"],
      answer: "12",
      hints: [
        "Die has 6 outcomes, coin has 2.",
        "Total = 6 × 2.",
        "= 12."
      ],
      explanation: [
        "Die: 6 outcomes. Coin: 2 outcomes.",
        "Total = 6 × 2 = 12."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A car comes in 7 colors and 3 engine types. How many different car configurations are available?',
      answer: "21",
      hints: [
        "Each color can pair with each engine type.",
        "Use the Multiplication Principle.",
        "7 × 3 = ?"
      ],
      explanation: [
        "Configurations = colors × engines.",
        "= 7 × 3 = 21."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A phone password is 2 digits (0–9) followed by 1 letter (A–Z). How many passwords are possible?',
      choices: ["260", "520", "2600", "6760"],
      answer: "2600",
      hints: [
        "First digit: 10 choices. Second digit: 10 choices.",
        "Letter: 26 choices.",
        "Total = 10 × 10 × 26."
      ],
      explanation: [
        "Passwords = 10 × 10 × 26.",
        "= 100 × 26 = 2600."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A restaurant offers 8 appetizers and 6 desserts. How many ways can you choose one appetizer and one dessert?',
      answer: "48",
      hints: [
        "Use the Multiplication Principle.",
        "8 appetizers × 6 desserts.",
        "8 × 6 = ?"
      ],
      explanation: [
        "Combinations = appetizers × desserts.",
        "= 8 × 6 = 48."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A coin is flipped 5 times. How many total outcomes are possible?',
      answer: "32",
      hints: [
        "Each flip has 2 outcomes (H or T).",
        "Total = 2 × 2 × 2 × 2 × 2.",
        "= 2⁵."
      ],
      explanation: [
        "Each of the 5 flips has 2 outcomes.",
        "Total = 2⁵ = 32."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bakery offers 5 types of muffins and 4 types of coffee. How many breakfast combos (one muffin, one coffee) are possible?',
      choices: ["9", "15", "20", "25"],
      answer: "20",
      hints: [
        "Use the Multiplication Principle.",
        "5 muffin choices × 4 coffee choices.",
        "5 × 4 = ?"
      ],
      explanation: [
        "Combos = muffins × coffees.",
        "= 5 × 4 = 20."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A 4-character code uses digits 0–9 for each character. How many codes are possible if repetition is allowed?',
      answer: "10000",
      hints: [
        "Each character has 10 choices.",
        "Total = 10 × 10 × 10 × 10.",
        "= 10⁴."
      ],
      explanation: [
        "Each of the 4 positions has 10 choices.",
        "Total = 10⁴ = 10,000."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'You have 6 hats and 3 scarves. How many hat-scarf combinations can you make?',
      choices: ["9", "12", "15", "18"],
      answer: "18",
      hints: [
        "Multiply the choices: 6 hats × 3 scarves.",
        "6 × 3 = 18.",
        "Each hat can pair with each scarf."
      ],
      explanation: [
        "Combinations = hats × scarves.",
        "= 6 × 3 = 18."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A pizza menu has 3 sizes and 8 toppings. How many single-topping pizzas can you order?',
      answer: "24",
      hints: [
        "Use the Multiplication Principle.",
        "3 sizes × 8 toppings.",
        "3 × 8 = ?"
      ],
      explanation: [
        "Pizzas = sizes × toppings.",
        "= 3 × 8 = 24."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A locker code has 2 digits (1–9) followed by 1 letter (A–Z). How many codes are possible?',
      choices: ["162", "234", "2106", "2106"],
      answer: "2106",
      hints: [
        "First digit: 9 choices. Second digit: 9 choices.",
        "Letter: 26 choices.",
        "Total = 9 × 9 × 26."
      ],
      explanation: [
        "Codes = 9 × 9 × 26.",
        "= 81 × 26 = 2106."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A coin is flipped 4 times. How many total outcomes are possible?',
      answer: "16",
      hints: [
        "Each flip has 2 outcomes (H or T).",
        "Total = 2 × 2 × 2 × 2.",
        "= 2⁴."
      ],
      explanation: [
        "Each of the 4 flips has 2 outcomes.",
        "Total = 2⁴ = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A toy store has 9 action figures and 5 playsets. How many ways can you choose one action figure and one playset?',
      answer: "45",
      hints: [
        'Use the Multiplication Principle.',
        '9 action figures × 5 playsets.',
        '9 × 5 = ?'
      ],
      explanation: [
        'Combinations = 9 × 5 = 45.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A coin is flipped 6 times. How many total outcomes are possible?',
      choices: ["12", "32", "36", "64"],
      answer: "64",
      hints: [
        'Each flip has 2 outcomes (H or T).',
        'Total = 2 × 2 × 2 × 2 × 2 × 2.',
        '= 2⁶.'
      ],
      explanation: [
        'Each of the 6 flips has 2 outcomes.',
        'Total = 2⁶ = 64.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A cafeteria offers 4 soups, 6 sandwiches, and 3 beverages. How many lunch combos (one of each) are possible?',
      answer: "72",
      hints: [
        'Multiply the number of choices at each step.',
        '4 × 6 × 3.',
        '= 24 × 3.'
      ],
      explanation: [
        'Combos = soup × sandwich × beverage.',
        '= 4 × 6 × 3 = 72.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'A pizza shop offers 4 types of crust and 6 types of topping. How many different one-topping pizzas can be made?',
      answer: "24",
      hints: [
        'Use the multiplication principle.',
        'Total choices = crust options × topping options.',
        '4 × 6 = ?'
      ],
      explanation: [
        'By the multiplication principle, total = 4 × 6.',
        'Total = 24 different pizzas.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A lock has 3 dials. The first dial has digits 0-9, the second has letters A-E, and the third has digits 0-9. How many different codes are possible?',
      choices: ["250", "500", "150", "1000"],
      answer: "500",
      hints: [
        'Count the choices for each dial.',
        'Dial 1: 10, Dial 2: 5, Dial 3: 10.',
        'Multiply: 10 × 5 × 10.'
      ],
      explanation: [
        'Dial 1: 10 choices (0-9).',
        'Dial 2: 5 choices (A-E).',
        'Dial 3: 10 choices (0-9). Total = 10 × 5 × 10 = 500.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A student can choose 1 of 3 math courses, 1 of 4 science courses, and 1 of 2 language courses. How many different schedules are possible?',
      answer: "24",
      hints: [
        'Use the multiplication principle for independent choices.',
        'Total = math × science × language.',
        '3 × 4 × 2 = ?'
      ],
      explanation: [
        'Math: 3 choices, Science: 4 choices, Language: 2 choices.',
        'Total schedules = 3 × 4 × 2 = 24.'
      ]
    }
  ],

  // --- Topic 1: Sample Spaces --- difficulty 1-2
  [
    {
      type: "mc",
      difficulty: 1,
      question: 'You flip a coin and roll a die. How many outcomes are in the sample space?',
      choices: ["6", "8", "10", "12"],
      answer: "12",
      hints: [
        "A coin has 2 outcomes: H, T.",
        "A die has 6 outcomes: 1, 2, 3, 4, 5, 6.",
        "Total = 2 × 6."
      ],
      explanation: [
        "Coin: 2 outcomes. Die: 6 outcomes.",
        "Sample space = 2 × 6 = 12 outcomes."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two spinners are spun. Spinner A has sections {1, 2, 3} and Spinner B has sections {A, B, C, D}. How many outcomes are in the sample space?',
      answer: "12",
      hints: [
        "Spinner A has 3 outcomes, Spinner B has 4.",
        "Total outcomes = 3 × 4.",
        "List a few to verify: (1,A), (1,B), ..."
      ],
      explanation: [
        "Spinner A: 3 outcomes. Spinner B: 4 outcomes.",
        "Sample space = 3 × 4 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'You draw one card from a set of 4 colored cards {Red, Blue, Green, Yellow} and flip a coin. How many outcomes are possible?',
      choices: ["4", "6", "8", "16"],
      answer: "8",
      hints: [
        "4 card choices and 2 coin outcomes.",
        "Total = 4 × 2.",
        "Examples: (Red, H), (Red, T), (Blue, H), ..."
      ],
      explanation: [
        "Cards: 4 choices. Coin: 2 choices.",
        "Total outcomes = 4 × 2 = 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'You roll a die and then flip a coin. How many total outcomes are in the sample space?',
      answer: "12",
      hints: [
        "A die has 6 outcomes.",
        "A coin has 2 outcomes.",
        "Total = 6 × 2."
      ],
      explanation: [
        "Die: 6 outcomes. Coin: 2 outcomes.",
        "Sample space = 6 × 2 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Three coins are flipped simultaneously. How many outcomes are in the sample space?',
      choices: ["3", "6", "8", "12"],
      answer: "8",
      hints: [
        "Each coin has 2 outcomes.",
        "Total = 2 × 2 × 2.",
        "Some outcomes: HHH, HHT, HTH, ..."
      ],
      explanation: [
        "Each of the 3 coins has 2 outcomes.",
        "Total outcomes = 2³ = 8."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag contains a red, blue, and green marble. You draw one marble and roll a die. How many outcomes are in the sample space?',
      answer: "18",
      hints: [
        "Marbles: 3 choices. Die: 6 outcomes.",
        "Total = 3 × 6.",
        "= 18."
      ],
      explanation: [
        "3 marbles × 6 die faces = 18 outcomes."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'Two dice are rolled. How many outcomes are in the sample space?',
      choices: ["6", "12", "24", "36"],
      answer: "36",
      hints: [
        "Each die has 6 outcomes.",
        "Total = 6 × 6.",
        "= 36."
      ],
      explanation: [
        "Die 1: 6 outcomes. Die 2: 6 outcomes.",
        "Sample space = 6 × 6 = 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has 5 equal sections (1–5) and a coin is flipped. How many outcomes are in the sample space?',
      answer: "10",
      hints: [
        "Spinner: 5 outcomes.",
        "Coin: 2 outcomes.",
        "Total = 5 × 2."
      ],
      explanation: [
        "5 spinner sections × 2 coin faces = 10 outcomes."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'You spin a spinner with 4 sections {A, B, C, D} and flip a coin. How many outcomes are in the sample space?',
      choices: ["4", "6", "8", "16"],
      answer: "8",
      hints: [
        "Spinner: 4 outcomes. Coin: 2 outcomes.",
        "Total = 4 × 2.",
        "= 8."
      ],
      explanation: [
        "4 spinner sections × 2 coin faces = 8 outcomes."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag contains 4 colored tokens {red, blue, green, yellow} and a die is rolled. How many outcomes are in the sample space?',
      answer: "24",
      hints: [
        "Tokens: 4 choices. Die: 6 outcomes.",
        "Total = 4 × 6.",
        "= 24."
      ],
      explanation: [
        "4 tokens × 6 die faces = 24 outcomes."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Four coins are flipped simultaneously. How many outcomes are in the sample space?',
      choices: ["4", "8", "12", "16"],
      answer: "16",
      hints: [
        "Each coin has 2 outcomes.",
        "Total = 2 × 2 × 2 × 2 = 2⁴.",
        "= 16."
      ],
      explanation: [
        "Each of the 4 coins has 2 outcomes.",
        "Total outcomes = 2⁴ = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A spinner has 3 sections {X, Y, Z} and a die is rolled. How many outcomes are in the sample space?',
      answer: "18",
      hints: [
        "Spinner: 3 outcomes. Die: 6 outcomes.",
        "Total = 3 × 6.",
        "= 18."
      ],
      explanation: [
        "3 spinner sections × 6 die faces = 18 outcomes."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Five coins are flipped simultaneously. How many outcomes are in the sample space?',
      choices: ["10", "16", "25", "32"],
      answer: "32",
      hints: [
        "Each coin has 2 outcomes.",
        "Total = 2 × 2 × 2 × 2 × 2 = 2⁵.",
        "= 32."
      ],
      explanation: [
        "Each of the 5 coins has 2 outcomes.",
        "Total outcomes = 2⁵ = 32."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag has 5 colored chips {red, blue, green, yellow, white} and a coin is flipped. How many outcomes are in the sample space?',
      answer: "10",
      hints: [
        "Chips: 5 choices. Coin: 2 outcomes.",
        "Total = 5 × 2.",
        "= 10."
      ],
      explanation: [
        "5 chips × 2 coin faces = 10 outcomes."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'You roll two dice. How many outcomes are in the sample space?',
      choices: ["12", "24", "30", "36"],
      answer: "36",
      hints: [
        "Each die has 6 outcomes.",
        "Total = 6 × 6.",
        "= 36."
      ],
      explanation: [
        "Die 1: 6 outcomes. Die 2: 6 outcomes.",
        "Sample space = 6 × 6 = 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag has 6 marbles (red, blue, green, yellow, white, black) and a coin is flipped. How many outcomes are in the sample space?',
      answer: "12",
      hints: [
        "Marbles: 6 choices. Coin: 2 outcomes.",
        "Total = 6 × 2.",
        "= 12."
      ],
      explanation: [
        "6 marbles × 2 coin faces = 12 outcomes."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has 8 equal sections (1–8) and a coin is flipped. How many outcomes are in the sample space?',
      answer: "16",
      hints: [
        "Spinner: 8 outcomes.",
        "Coin: 2 outcomes.",
        "Total = 8 × 2."
      ],
      explanation: [
        "8 spinner sections × 2 coin faces = 16 outcomes."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'You spin a spinner with 6 sections {1–6} and flip a coin. How many outcomes are in the sample space?',
      choices: ["6", "8", "10", "12"],
      answer: "12",
      hints: [
        'Spinner: 6 outcomes. Coin: 2 outcomes.',
        'Total = 6 × 2.',
        '= 12.'
      ],
      explanation: [
        '6 spinner sections × 2 coin faces = 12 outcomes.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag contains 7 different colored balls and a coin is flipped. How many outcomes are in the sample space?',
      answer: "14",
      hints: [
        'Balls: 7 choices. Coin: 2 outcomes.',
        'Total = 7 × 2.',
        '= 14.'
      ],
      explanation: [
        '7 balls × 2 coin faces = 14 outcomes.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Three dice are rolled. How many outcomes are in the sample space?',
      choices: ["18", "36", "108", "216"],
      answer: "216",
      hints: [
        'Each die has 6 outcomes.',
        'Total = 6 × 6 × 6 = 6³.',
        '= 216.'
      ],
      explanation: [
        'Each of the 3 dice has 6 outcomes.',
        'Total outcomes = 6³ = 216.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'A coin is flipped 3 times. How many outcomes are in the sample space?',
      answer: "8",
      hints: [
        'Each flip has 2 outcomes: Heads or Tails.',
        'For 3 flips, total outcomes = 2 × 2 × 2.',
        '2³ = ?'
      ],
      explanation: [
        'Each flip has 2 outcomes.',
        'Total outcomes = 2 × 2 × 2 = 2³ = 8.',
        'The sample space has 8 outcomes: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A spinner has 4 equal sections (Red, Blue, Green, Yellow) and a coin is flipped once. How many outcomes are in the sample space?',
      choices: ["4", "6", "8", "16"],
      answer: "8",
      hints: [
        'The spinner has 4 outcomes, the coin has 2.',
        'Total = spinner outcomes × coin outcomes.',
        '4 × 2 = ?'
      ],
      explanation: [
        'Spinner: 4 outcomes. Coin: 2 outcomes.',
        'Total = 4 × 2 = 8 outcomes.',
        'Examples: Red-H, Red-T, Blue-H, Blue-T, etc.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two six-sided dice are rolled. How many outcomes are in the sample space?',
      answer: "36",
      hints: [
        'Each die has 6 possible outcomes.',
        'The outcomes of the two dice are independent.',
        'Total = 6 × 6.'
      ],
      explanation: [
        'Die 1: 6 outcomes. Die 2: 6 outcomes.',
        'Total = 6 × 6 = 36 outcomes in the sample space.'
      ]
    }
  ],

  // --- Topic 2: Factorial & Arrangements --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'Calculate 5! (5 factorial).',
      answer: "120",
      hints: [
        "5! = 5 × 4 × 3 × 2 × 1.",
        "5 × 4 = 20, then 20 × 3 = 60.",
        "60 × 2 = 120, then 120 × 1 = 120."
      ],
      explanation: [
        "5! = 5 × 4 × 3 × 2 × 1.",
        "= 20 × 3 × 2 × 1 = 60 × 2 = 120."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'In how many ways can 4 books be arranged on a shelf?',
      choices: ["4", "12", "16", "24"],
      answer: "24",
      hints: [
        "Arranging 4 distinct objects uses 4!.",
        "4! = 4 × 3 × 2 × 1.",
        "= 24."
      ],
      explanation: [
        "The number of arrangements of 4 books = 4!.",
        "4! = 4 × 3 × 2 × 1 = 24."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can 6 runners finish a race (all different finish times)?',
      answer: "720",
      hints: [
        "This is the number of permutations of 6 items.",
        "6! = 6 × 5 × 4 × 3 × 2 × 1.",
        "Start: 6 × 5 = 30, then 30 × 4 = 120."
      ],
      explanation: [
        "Total arrangements = 6! = 6 × 5 × 4 × 3 × 2 × 1.",
        "= 720."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is 4! (4 factorial)?',
      choices: ["12", "16", "24", "48"],
      answer: "24",
      hints: [
        "4! means 4 × 3 × 2 × 1.",
        "4 × 3 = 12.",
        "12 × 2 × 1 = ?"
      ],
      explanation: [
        "4! = 4 × 3 × 2 × 1.",
        "= 12 × 2 = 24."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In how many ways can 5 students line up for a photo?',
      answer: "120",
      hints: [
        "Lining up 5 people uses 5!.",
        "5! = 5 × 4 × 3 × 2 × 1.",
        "= 120."
      ],
      explanation: [
        "Arrangements = 5! = 5 × 4 × 3 × 2 × 1.",
        "= 120."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'Calculate 3! (3 factorial).',
      answer: "6",
      hints: [
        "3! = 3 × 2 × 1.",
        "3 × 2 = 6.",
        "6 × 1 = 6."
      ],
      explanation: [
        "3! = 3 × 2 × 1 = 6."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many ways can 7 people sit in a row?',
      choices: ["720", "2520", "5040", "40320"],
      answer: "5040",
      hints: [
        "7 people in a row = 7!.",
        "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1.",
        "= 5040."
      ],
      explanation: [
        "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1.",
        "= 5040."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is 6! ÷ 4!?',
      answer: "30",
      hints: [
        "6! = 720 and 4! = 24.",
        "Or simplify: 6!/4! = 6 × 5 = 30.",
        "The 4 × 3 × 2 × 1 cancels out."
      ],
      explanation: [
        "6!/4! = (6 × 5 × 4!) / 4! = 6 × 5 = 30."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is 6! (6 factorial)?',
      choices: ["120", "360", "720", "5040"],
      answer: "720",
      hints: [
        "6! = 6 × 5 × 4 × 3 × 2 × 1.",
        "6 × 5 = 30, then 30 × 4 = 120.",
        "120 × 3 = 360, 360 × 2 = 720."
      ],
      explanation: [
        "6! = 6 × 5 × 4 × 3 × 2 × 1.",
        "= 720."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can 8 trophies be arranged in a row on a shelf?',
      answer: "40320",
      hints: [
        "Arranging 8 items = 8!.",
        "8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.",
        "= 40320."
      ],
      explanation: [
        "Arrangements = 8! = 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.",
        "= 40320."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is 7! ÷ 5!?',
      answer: "42",
      hints: [
        "7! = 5040 and 5! = 120.",
        "Or simplify: 7!/5! = 7 × 6.",
        "The 5 × 4 × 3 × 2 × 1 cancels out."
      ],
      explanation: [
        "7!/5! = (7 × 6 × 5!) / 5! = 7 × 6 = 42."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'In how many ways can 3 trophies be arranged on a shelf?',
      choices: ["3", "6", "9", "12"],
      answer: "6",
      hints: [
        "Arranging 3 items uses 3!.",
        "3! = 3 × 2 × 1.",
        "= 6."
      ],
      explanation: [
        "Arrangements = 3! = 3 × 2 × 1 = 6."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'Calculate 2! (2 factorial).',
      answer: "2",
      hints: [
        "2! = 2 × 1.",
        "= 2.",
        "This is the simplest factorial beyond 1!."
      ],
      explanation: [
        "2! = 2 × 1 = 2."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is 8! ÷ 6!?',
      answer: "56",
      hints: [
        "8! = 40320 and 6! = 720.",
        "Or simplify: 8!/6! = 8 × 7.",
        "The 6 × 5 × 4 × 3 × 2 × 1 cancels out."
      ],
      explanation: [
        "8!/6! = (8 × 7 × 6!) / 6! = 8 × 7 = 56."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is 7! (7 factorial)?',
      choices: ["720", "2520", "5040", "40320"],
      answer: "5040",
      hints: [
        "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1.",
        "7 × 6 = 42, then 42 × 5 = 210.",
        "210 × 4 = 840, 840 × 3 = 2520, 2520 × 2 = 5040."
      ],
      explanation: [
        "7! = 7 × 6 × 5 × 4 × 3 × 2 × 1.",
        "= 5040."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In how many ways can 4 students line up for a relay race?',
      answer: "24",
      hints: [
        "Lining up 4 people uses 4!.",
        "4! = 4 × 3 × 2 × 1.",
        "= 24."
      ],
      explanation: [
        "Arrangements = 4! = 4 × 3 × 2 × 1.",
        "= 24."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is 9! ÷ 7!?',
      answer: "72",
      hints: [
        "9! = 362880 and 7! = 5040.",
        "Or simplify: 9!/7! = 9 × 8.",
        "The 7 × 6 × ... × 1 cancels out."
      ],
      explanation: [
        "9!/7! = (9 × 8 × 7!) / 7! = 9 × 8 = 72."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many ways can 9 contestants line up for a talent show?',
      choices: ["5040", "40320", "362880", "3628800"],
      answer: "362880",
      hints: [
        'Lining up 9 people uses 9!.',
        '9! = 9 × 8 × 7 × 6 × 5 × 4 × 3 × 2 × 1.',
        '= 362880.'
      ],
      explanation: [
        'Arrangements = 9! = 362,880.'
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 1! (1 factorial)?',
      answer: "1",
      hints: [
        '1! = 1.',
        'By definition, 1 factorial equals 1.',
        'This is the base case of factorials.'
      ],
      explanation: [
        '1! = 1.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is 10! ÷ 8!?',
      answer: "90",
      hints: [
        '10! = 3628800 and 8! = 40320.',
        'Or simplify: 10!/8! = 10 × 9.',
        'The 8 × 7 × ... × 1 cancels out.'
      ],
      explanation: [
        '10!/8! = (10 × 9 × 8!) / 8! = 10 × 9 = 90.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 6! (6 factorial)?',
      answer: "720",
      hints: [
        '6! means 6 × 5 × 4 × 3 × 2 × 1.',
        'Start multiplying: 6 × 5 = 30, 30 × 4 = 120.',
        '120 × 3 = 360, 360 × 2 = 720, 720 × 1 = 720.'
      ],
      explanation: [
        '6! = 6 × 5 × 4 × 3 × 2 × 1.',
        '= 720.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'In how many ways can 5 books be arranged on a shelf?',
      choices: ["25", "60", "120", "720"],
      answer: "120",
      hints: [
        'Arranging n distinct items in a row is n!.',
        '5! = 5 × 4 × 3 × 2 × 1.',
        'Calculate step by step.'
      ],
      explanation: [
        'The number of arrangements of 5 books = 5!.',
        '5! = 5 × 4 × 3 × 2 × 1 = 120.',
        'There are 120 ways.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can a president, vice president, and secretary be chosen from a group of 8 people?',
      answer: "336",
      hints: [
        'Order matters here (different positions).',
        '8 choices for president, then 7 for VP, then 6 for secretary.',
        '8 × 7 × 6 = ?'
      ],
      explanation: [
        'President: 8 choices. VP: 7 remaining. Secretary: 6 remaining.',
        '8 × 7 × 6 = 336.',
        'This is P(8,3) = 336.'
      ]
    }
  ],

  // --- Topic 3: Basic Probability --- difficulty 1-2
  [
    {
      type: "mc",
      difficulty: 1,
      question: 'A bag has 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a blue marble?',
      choices: ["<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{3}{10}</span>", "<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{2}{5}</span>"],
      answer: "<span class=\"math\">\\frac{1}{2}</span>",
      hints: [
        "Total marbles = 3 + 5 + 2 = 10.",
        "Blue marbles = 5.",
        "P(blue) = 5/10 = ?"
      ],
      explanation: [
        "Total = 3 + 5 + 2 = 10 marbles.",
        "P(blue) = 5/10 = 1/2."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A standard die is rolled. What is the probability of rolling a number greater than 4? Give your answer as a fraction (e.g., 1/3).',
      answer: "1/3",
      hints: [
        "Numbers greater than 4 on a die: 5 and 6.",
        "That is 2 favorable outcomes out of 6.",
        "Simplify 2/6."
      ],
      explanation: [
        "Favorable outcomes: {5, 6} → 2 outcomes.",
        "Total outcomes: 6.",
        "P(>4) = 2/6 = 1/3."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A deck has cards numbered 1 through 20. What is the probability of drawing an even number?',
      choices: ["<span class=\"math\">\\frac{1}{4}</span>", "<span class=\"math\">\\frac{1}{3}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{2}{5}</span>"],
      answer: "<span class=\"math\">\\frac{1}{2}</span>",
      hints: [
        "Even numbers from 1–20: 2, 4, 6, ..., 20.",
        "Count: 10 even numbers.",
        "P(even) = 10/20."
      ],
      explanation: [
        "Even numbers: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 → 10 numbers.",
        "P(even) = 10/20 = 1/2."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A jar contains 4 red, 3 green, and 5 yellow marbles. What is the probability of picking a green marble? Give your answer as a fraction (e.g., 1/4).',
      answer: "1/4",
      hints: [
        "Total marbles = 4 + 3 + 5 = 12.",
        "Green marbles = 3.",
        "P(green) = 3/12. Simplify."
      ],
      explanation: [
        "Total = 12. Green = 3.",
        "P(green) = 3/12 = 1/4."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A number from 1 to 10 is chosen at random. What is the probability it is a multiple of 3?',
      choices: ["<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{3}{10}</span>", "<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{1}{10}</span>"],
      answer: "<span class=\"math\">\\frac{3}{10}</span>",
      hints: [
        "Multiples of 3 from 1 to 10: 3, 6, 9.",
        "That is 3 favorable outcomes.",
        "P = 3/10."
      ],
      explanation: [
        "Multiples of 3 in {1, 2, ..., 10}: 3, 6, 9 → 3 values.",
        "P(multiple of 3) = 3/10."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'A bag has 6 red and 4 white balls. What is the probability of drawing a red ball?',
      choices: ["<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{3}{5}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{3}{10}</span>"],
      answer: "<span class=\"math\">\\frac{3}{5}</span>",
      hints: [
        "Total balls = 6 + 4 = 10.",
        "Red balls = 6.",
        "P(red) = 6/10 = 3/5."
      ],
      explanation: [
        "Total = 10. Red = 6.",
        "P(red) = 6/10 = 3/5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has 8 equal sections numbered 1–8. What is the probability of landing on a number less than 3? Give as a fraction (e.g., 1/4).',
      answer: "1/4",
      hints: [
        "Numbers less than 3: 1 and 2.",
        "That is 2 favorable out of 8.",
        "2/8 = 1/4."
      ],
      explanation: [
        "Favorable: {1, 2} → 2 outcomes.",
        "P(< 3) = 2/8 = 1/4."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A standard deck of 52 cards has 4 aces. What is the probability of drawing an ace?',
      choices: ["<span class=\"math\">\\frac{1}{52}</span>", "<span class=\"math\">\\frac{1}{13}</span>", "<span class=\"math\">\\frac{1}{4}</span>", "<span class=\"math\">\\frac{4}{13}</span>"],
      answer: "<span class=\"math\">\\frac{1}{13}</span>",
      hints: [
        "Aces = 4, Total cards = 52.",
        "P(ace) = 4/52.",
        "Simplify: 4/52 = 1/13."
      ],
      explanation: [
        "P(ace) = 4/52 = 1/13."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A bag has 7 orange and 3 purple marbles. What is the probability of picking an orange marble? Give as a fraction (e.g., 7/10).',
      answer: "7/10",
      hints: [
        "Total marbles = 7 + 3 = 10.",
        "Orange marbles = 7.",
        "P(orange) = 7/10."
      ],
      explanation: [
        "Total = 10. Orange = 7.",
        "P(orange) = 7/10."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A box has cards numbered 1 to 15. What is the probability of drawing a number divisible by 5?',
      choices: ["<span class=\"math\">\\frac{1}{3}</span>", "<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{2}{15}</span>", "<span class=\"math\">\\frac{4}{15}</span>"],
      answer: "<span class=\"math\">\\frac{1}{5}</span>",
      hints: [
        "Numbers divisible by 5 from 1–15: 5, 10, 15.",
        "That is 3 favorable outcomes.",
        "P = 3/15. Simplify."
      ],
      explanation: [
        "Divisible by 5: {5, 10, 15} → 3 values.",
        "P = 3/15 = 1/5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A die is rolled. What is the probability of rolling an odd number? Give as a fraction (e.g., 1/2).',
      answer: "1/2",
      hints: [
        "Odd numbers on a die: 1, 3, 5.",
        "That is 3 favorable outcomes out of 6.",
        "Simplify 3/6."
      ],
      explanation: [
        "Favorable: {1, 3, 5} → 3 outcomes.",
        "P(odd) = 3/6 = 1/2."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A jar has 5 red and 5 blue marbles. What is the probability of picking a red marble?',
      choices: ["<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{3}{5}</span>"],
      answer: "<span class=\"math\">\\frac{1}{2}</span>",
      hints: [
        "Total marbles = 5 + 5 = 10.",
        "Red marbles = 5.",
        "P(red) = 5/10 = 1/2."
      ],
      explanation: [
        "Total = 10. Red = 5.",
        "P(red) = 5/10 = 1/2."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag has cards numbered 1 to 12. What is the probability of drawing a number greater than 9? Give as a fraction (e.g., 1/4).',
      answer: "1/4",
      hints: [
        "Numbers greater than 9: 10, 11, 12.",
        "That is 3 favorable out of 12.",
        "3/12 = 1/4."
      ],
      explanation: [
        "Favorable: {10, 11, 12} → 3 outcomes.",
        "P(>9) = 3/12 = 1/4."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A number from 1 to 20 is chosen at random. What is the probability it is a perfect square?',
      choices: ["<span class=\"math\">\\frac{1}{10}</span>", "<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{3}{20}</span>", "<span class=\"math\">\\frac{1}{4}</span>"],
      answer: "<span class=\"math\">\\frac{1}{5}</span>",
      hints: [
        "Perfect squares from 1 to 20: 1, 4, 9, 16.",
        "That is 4 favorable outcomes out of 20.",
        "4/20 = 1/5."
      ],
      explanation: [
        "Perfect squares in {1..20}: 1, 4, 9, 16 → 4 values.",
        "P(perfect square) = 4/20 = 1/5."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A bag has 8 yellow and 2 pink marbles. What is the probability of drawing a yellow marble? Give as a fraction (e.g., 4/5).',
      answer: "4/5",
      hints: [
        "Total marbles = 8 + 2 = 10.",
        "Yellow marbles = 8.",
        "P(yellow) = 8/10. Simplify."
      ],
      explanation: [
        "Total = 10. Yellow = 8.",
        "P(yellow) = 8/10 = 4/5."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A spinner has 12 equal sections numbered 1–12. What is the probability of landing on a prime number?',
      choices: ["<span class=\"math\">\\frac{1}{4}</span>", "<span class=\"math\">\\frac{5}{12}</span>", "<span class=\"math\">\\frac{1}{3}</span>", "<span class=\"math\">\\frac{1}{2}</span>"],
      answer: "<span class=\"math\">\\frac{5}{12}</span>",
      hints: [
        "Prime numbers from 1–12: 2, 3, 5, 7, 11.",
        "That is 5 favorable outcomes out of 12.",
        "P = 5/12."
      ],
      explanation: [
        "Primes in {1..12}: 2, 3, 5, 7, 11 → 5 values.",
        "P(prime) = 5/12."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A standard die is rolled. What is the probability of rolling a number less than 5? Give as a fraction (e.g., 2/3).',
      answer: "2/3",
      hints: [
        "Numbers less than 5 on a die: 1, 2, 3, 4.",
        "That is 4 favorable outcomes out of 6.",
        "Simplify 4/6."
      ],
      explanation: [
        "Favorable: {1, 2, 3, 4} → 4 outcomes.",
        "P(< 5) = 4/6 = 2/3."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A bag has 9 blue and 1 red marble. What is the probability of drawing a red marble? Give as a fraction (e.g., 1/10).',
      answer: "1/10",
      hints: [
        'Total marbles = 9 + 1 = 10.',
        'Red marbles = 1.',
        'P(red) = 1/10.'
      ],
      explanation: [
        'Total = 10. Red = 1.',
        'P(red) = 1/10.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A spinner has 10 equal sections numbered 1–10. What is the probability of landing on a multiple of 4?',
      choices: ["<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{3}{10}</span>", "<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{1}{10}</span>"],
      answer: "<span class=\"math\">\\frac{1}{5}</span>",
      hints: [
        'Multiples of 4 from 1 to 10: 4 and 8.',
        'That is 2 favorable outcomes.',
        'P = 2/10 = 1/5.'
      ],
      explanation: [
        'Multiples of 4 in {1..10}: 4, 8 → 2 values.',
        'P(multiple of 4) = 2/10 = 1/5.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A standard die is rolled. What is the probability of rolling a perfect square? Give as a fraction (e.g., 1/3).',
      answer: "1/3",
      hints: [
        'Perfect squares on a die: 1 and 4.',
        'That is 2 favorable outcomes out of 6.',
        'Simplify 2/6.'
      ],
      explanation: [
        'Favorable: {1, 4} → 2 outcomes.',
        'P(perfect square) = 2/6 = 1/3.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'A bag contains 3 red, 5 blue, and 2 green marbles. What is the probability of drawing a blue marble?',
      choices: ["1/5", "3/10", "1/2", "5/10"],
      answer: "1/2",
      hints: [
        'Total marbles = 3 + 5 + 2 = 10.',
        'P(blue) = blue marbles ÷ total marbles.',
        'P(blue) = 5/10. Simplify.'
      ],
      explanation: [
        'Total = 3 + 5 + 2 = 10 marbles.',
        'P(blue) = 5/10 = 1/2.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A standard deck has 52 cards. What is the probability of drawing a heart? Express your answer as a simplified fraction (e.g., 1/4).',
      answer: "1/4",
      hints: [
        'There are 13 hearts in a standard deck.',
        'P(heart) = 13/52.',
        'Simplify by dividing numerator and denominator by 13.'
      ],
      explanation: [
        'Hearts = 13 out of 52 total cards.',
        'P(heart) = 13/52 = 1/4.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A spinner has 8 equal sections numbered 1-8. What is the probability of landing on an even number?',
      choices: ["1/4", "3/8", "1/2", "5/8"],
      answer: "1/2",
      hints: [
        'Even numbers from 1-8: 2, 4, 6, 8.',
        'There are 4 even numbers.',
        'P(even) = 4/8. Simplify.'
      ],
      explanation: [
        'Even numbers: 2, 4, 6, 8 → 4 favorable outcomes.',
        'Total outcomes = 8.',
        'P(even) = 4/8 = 1/2.'
      ]
    }
  ],

  // --- Topic 4: Complementary Events --- difficulty 1-2
  [
    {
      type: "mc",
      difficulty: 2,
      question: 'The probability of rain tomorrow is 0.35. What is the probability it does NOT rain?',
      choices: ["0.35", "0.55", "0.65", "0.75"],
      answer: "0.65",
      hints: [
        "P(not A) = 1 − P(A).",
        "P(no rain) = 1 − 0.35.",
        "= 0.65."
      ],
      explanation: [
        "Complementary probability: P(no rain) = 1 − P(rain).",
        "P(no rain) = 1 − 0.35 = 0.65."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has P(landing on red) = 3/8. What is P(NOT landing on red)? Give your answer as a fraction.',
      answer: "5/8",
      hints: [
        "P(not red) = 1 − P(red).",
        "1 − 3/8 = 8/8 − 3/8.",
        "= 5/8."
      ],
      explanation: [
        "P(not red) = 1 − 3/8.",
        "= 8/8 − 3/8 = 5/8."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bag has 2 white and 8 black balls. What is the probability of NOT drawing a white ball?',
      choices: ["<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{3}{5}</span>", "<span class=\"math\">\\frac{4}{5}</span>"],
      answer: "<span class=\"math\">\\frac{4}{5}</span>",
      hints: [
        "P(white) = 2/10 = 1/5.",
        "P(not white) = 1 − 1/5.",
        "= 4/5."
      ],
      explanation: [
        "Total = 10. P(white) = 2/10 = 1/5.",
        "P(not white) = 1 − 1/5 = 4/5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The probability of picking a red card from a deck is <span class="math">\\frac{1}{2}</span>. What is the probability of NOT picking a red card? Give as a decimal.',
      answer: "0.5",
      hints: [
        "P(not red) = 1 − P(red).",
        "P(red) = 1/2 = 0.5.",
        "1 − 0.5 = ?"
      ],
      explanation: [
        "P(not red) = 1 − P(red).",
        "= 1 − 0.5 = 0.5."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A die is rolled. What is the probability of NOT rolling a 1?',
      choices: ["<span class=\"math\">\\frac{1}{6}</span>", "<span class=\"math\">\\frac{1}{3}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{5}{6}</span>"],
      answer: "<span class=\"math\">\\frac{5}{6}</span>",
      hints: [
        "P(rolling a 1) = 1/6.",
        "P(not a 1) = 1 − 1/6.",
        "= 5/6."
      ],
      explanation: [
        "P(1) = 1/6.",
        "P(not 1) = 1 − 1/6 = 5/6."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'The probability of snow is 0.2. What is the probability it does NOT snow?',
      answer: "0.8",
      hints: [
        "P(not snow) = 1 − P(snow).",
        "= 1 − 0.2.",
        "= 0.8."
      ],
      explanation: [
        "P(not snow) = 1 − 0.2 = 0.8."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bag has 3 red and 7 blue marbles. What is the probability of NOT drawing blue?',
      choices: ["<span class=\"math\">\\frac{3}{10}</span>", "<span class=\"math\">\\frac{7}{10}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{1}{3}</span>"],
      answer: "<span class=\"math\">\\frac{3}{10}</span>",
      hints: [
        "P(blue) = 7/10.",
        "P(not blue) = 1 − 7/10.",
        "= 3/10."
      ],
      explanation: [
        "P(blue) = 7/10.",
        "P(not blue) = 1 − 7/10 = 3/10."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has P(green) = 2/7. What is P(NOT green)? Give as a fraction.',
      answer: "5/7",
      hints: [
        "P(not green) = 1 − P(green).",
        "= 1 − 2/7 = 7/7 − 2/7.",
        "= 5/7."
      ],
      explanation: [
        "P(not green) = 1 − 2/7 = 5/7."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A jar has 5 black and 9 white marbles. What is the probability of NOT picking a black marble?',
      choices: ["<span class=\"math\">\\frac{5}{14}</span>", "<span class=\"math\">\\frac{9}{14}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{2}{7}</span>"],
      answer: "<span class=\"math\">\\frac{9}{14}</span>",
      hints: [
        "Total = 5 + 9 = 14. P(black) = 5/14.",
        "P(not black) = 1 − 5/14.",
        "= 9/14."
      ],
      explanation: [
        "P(black) = 5/14.",
        "P(not black) = 1 − 5/14 = 9/14."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'The probability of winning a game is 0.15. What is the probability of NOT winning?',
      answer: "0.85",
      hints: [
        "P(not winning) = 1 − P(winning).",
        "= 1 − 0.15.",
        "= 0.85."
      ],
      explanation: [
        "P(not winning) = 1 − 0.15 = 0.85."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has P(landing on yellow) = 4/11. What is P(NOT landing on yellow)? Give as a fraction.',
      answer: "7/11",
      hints: [
        "P(not yellow) = 1 − P(yellow).",
        "= 1 − 4/11 = 11/11 − 4/11.",
        "= 7/11."
      ],
      explanation: [
        "P(not yellow) = 1 − 4/11 = 7/11."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The probability of a flight being on time is 0.72. What is the probability the flight is NOT on time?',
      choices: ["0.18", "0.28", "0.38", "0.72"],
      answer: "0.28",
      hints: [
        "P(not on time) = 1 − P(on time).",
        "= 1 − 0.72.",
        "= 0.28."
      ],
      explanation: [
        "P(not on time) = 1 − 0.72 = 0.28."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A bag has 1 gold and 9 silver coins. What is the probability of NOT picking gold? Give as a decimal.',
      answer: "0.9",
      hints: [
        "P(gold) = 1/10 = 0.1.",
        "P(not gold) = 1 − 0.1.",
        "= 0.9."
      ],
      explanation: [
        "P(gold) = 1/10 = 0.1.",
        "P(not gold) = 1 − 0.1 = 0.9."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has P(blue) = 5/12. What is P(NOT blue)? Give as a fraction.',
      answer: "7/12",
      hints: [
        "P(not blue) = 1 − P(blue).",
        "= 1 − 5/12 = 12/12 − 5/12.",
        "= 7/12."
      ],
      explanation: [
        "P(not blue) = 1 − 5/12 = 7/12."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A bag has 4 red and 6 green marbles. What is the probability of NOT drawing green?',
      choices: ["<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{3}{5}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{3}{10}</span>"],
      answer: "<span class=\"math\">\\frac{2}{5}</span>",
      hints: [
        "P(green) = 6/10 = 3/5.",
        "P(not green) = 1 − 3/5.",
        "= 2/5."
      ],
      explanation: [
        "P(green) = 6/10 = 3/5.",
        "P(not green) = 1 − 3/5 = 2/5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The probability of it being sunny tomorrow is 0.62. What is the probability it is NOT sunny?',
      answer: "0.38",
      hints: [
        "P(not sunny) = 1 − P(sunny).",
        "= 1 − 0.62.",
        "= 0.38."
      ],
      explanation: [
        "P(not sunny) = 1 − 0.62 = 0.38."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has P(landing on orange) = 3/11. What is P(NOT landing on orange)? Give as a fraction.',
      answer: "8/11",
      hints: [
        "P(not orange) = 1 − P(orange).",
        "= 1 − 3/11 = 11/11 − 3/11.",
        "= 8/11."
      ],
      explanation: [
        "P(not orange) = 1 − 3/11 = 8/11."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A die is rolled. What is the probability of NOT rolling a 6?',
      choices: ["<span class=\"math\">\\frac{1}{6}</span>", "<span class=\"math\">\\frac{1}{3}</span>", "<span class=\"math\">\\frac{2}{3}</span>", "<span class=\"math\">\\frac{5}{6}</span>"],
      answer: "<span class=\"math\">\\frac{5}{6}</span>",
      hints: [
        'P(rolling a 6) = 1/6.',
        'P(not a 6) = 1 − 1/6.',
        '= 5/6.'
      ],
      explanation: [
        'P(6) = 1/6.',
        'P(not 6) = 1 − 1/6 = 5/6.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A spinner has P(red) = 7/15. What is P(NOT red)? Give as a fraction.',
      answer: "8/15",
      hints: [
        'P(not red) = 1 − P(red).',
        '= 1 − 7/15 = 15/15 − 7/15.',
        '= 8/15.'
      ],
      explanation: [
        'P(not red) = 1 − 7/15 = 8/15.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The probability of a bus being late is 0.18. What is the probability the bus is NOT late?',
      answer: "0.82",
      hints: [
        'P(not late) = 1 − P(late).',
        '= 1 − 0.18.',
        '= 0.82.'
      ],
      explanation: [
        'P(not late) = 1 − 0.18 = 0.82.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'The probability of rain tomorrow is 0.3. What is the probability it will NOT rain?',
      choices: ["0.3", "0.5", "0.7", "1.0"],
      answer: "0.7",
      hints: [
        'P(not A) = 1 − P(A).',
        'P(not rain) = 1 − 0.3.',
        '1 − 0.3 = 0.7.'
      ],
      explanation: [
        'Using the complement rule: P(not rain) = 1 − P(rain).',
        'P(not rain) = 1 − 0.3 = 0.7.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A bag has 12 marbles. The probability of NOT drawing a red marble is 3/4. How many red marbles are in the bag?',
      answer: "3",
      hints: [
        'P(not red) = 3/4, so P(red) = 1 − 3/4 = 1/4.',
        'P(red) = red marbles ÷ total marbles.',
        '1/4 = red/12. Solve for red.'
      ],
      explanation: [
        'P(red) = 1 − 3/4 = 1/4.',
        '1/4 = red marbles ÷ 12.',
        'Red marbles = 12 × (1/4) = 3.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A die is rolled. What is the probability of NOT rolling a 6?',
      choices: ["1/6", "1/3", "1/2", "5/6"],
      answer: "5/6",
      hints: [
        'P(rolling a 6) = 1/6.',
        'P(not rolling a 6) = 1 − P(rolling a 6).',
        '1 − 1/6 = 5/6.'
      ],
      explanation: [
        'P(6) = 1/6.',
        'P(not 6) = 1 − 1/6 = 5/6.'
      ]
    }
  ],

  // --- Topic 5: Combinations --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can you choose 2 students from a group of 6? Calculate C(6, 2).',
      answer: "15",
      hints: [
        "C(n, r) = n! / (r! × (n−r)!).",
        "C(6, 2) = 6! / (2! × 4!).",
        "= (6 × 5) / (2 × 1) = 30/2."
      ],
      explanation: [
        "C(6, 2) = 6! / (2! × 4!) = (6 × 5) / (2 × 1).",
        "= 30 / 2 = 15."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A pizza shop lets you choose 3 toppings from 8 available. How many combinations are possible?',
      choices: ["24", "56", "336", "120"],
      answer: "56",
      hints: [
        "Order doesn't matter, so use C(8, 3).",
        "C(8, 3) = 8! / (3! × 5!).",
        "= (8 × 7 × 6) / (3 × 2 × 1)."
      ],
      explanation: [
        "C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1).",
        "= 336 / 6 = 56."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Calculate C(10, 3).',
      answer: "120",
      hints: [
        "C(10, 3) = 10! / (3! × 7!).",
        "= (10 × 9 × 8) / (3 × 2 × 1).",
        "= 720 / 6."
      ],
      explanation: [
        "C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1).",
        "= 720 / 6 = 120."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many ways can you choose 2 fruits from {apple, banana, cherry, date}? (Order does not matter.)',
      choices: ["4", "6", "8", "12"],
      answer: "6",
      hints: [
        "Use C(4, 2) = 4! / (2! × 2!).",
        "= (4 × 3) / (2 × 1).",
        "= 12 / 2."
      ],
      explanation: [
        "C(4, 2) = (4 × 3) / (2 × 1) = 6.",
        "The 6 pairs are: {A,B}, {A,C}, {A,D}, {B,C}, {B,D}, {C,D}."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A committee of 4 is chosen from 9 volunteers. How many different committees are possible?',
      answer: "126",
      hints: [
        "Order doesn\'t matter, so use C(9, 4).",
        "C(9, 4) = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1).",
        "= 3024 / 24."
      ],
      explanation: [
        "C(9, 4) = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1).",
        "= 3024 / 24 = 126."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'How many ways can you choose 3 books from a shelf of 7?',
      choices: ["21", "35", "42", "210"],
      answer: "35",
      hints: [
        "Order doesn\u2019t matter, so use C(7, 3).",
        "C(7, 3) = (7 × 6 × 5) / (3 × 2 × 1).",
        "= 210 / 6."
      ],
      explanation: [
        "C(7, 3) = (7 × 6 × 5) / 6 = 35."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Calculate C(5, 3).',
      answer: "10",
      hints: [
        "C(5, 3) = 5! / (3! × 2!).",
        "= (5 × 4) / (2 × 1).",
        "= 20 / 2."
      ],
      explanation: [
        "C(5, 3) = (5 × 4) / (2 × 1) = 10."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A team of 5 is chosen from 12 players. How many teams are possible?',
      choices: ["60", "132", "792", "95040"],
      answer: "792",
      hints: [
        "C(12, 5) = (12 × 11 × 10 × 9 × 8) / (5 × 4 × 3 × 2 × 1).",
        "Numerator = 95040. Denominator = 120.",
        "95040 / 120 = ?"
      ],
      explanation: [
        "C(12, 5) = 95040 / 120 = 792."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Calculate C(8, 4).',
      answer: "70",
      hints: [
        "C(8, 4) = 8! / (4! × 4!).",
        "= (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1).",
        "= 1680 / 24."
      ],
      explanation: [
        "C(8, 4) = (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1).",
        "= 1680 / 24 = 70."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many ways can you choose 2 colors from {red, green, blue, yellow, purple}?',
      choices: ["5", "10", "20", "25"],
      answer: "10",
      hints: [
        "Order doesn\'t matter, so use C(5, 2).",
        "C(5, 2) = (5 × 4) / (2 × 1).",
        "= 20 / 2."
      ],
      explanation: [
        "C(5, 2) = (5 × 4) / (2 × 1) = 10."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A group of 11 friends must choose 3 to form a study team. How many teams are possible?',
      answer: "165",
      hints: [
        "Order doesn\'t matter, so use C(11, 3).",
        "C(11, 3) = (11 × 10 × 9) / (3 × 2 × 1).",
        "= 990 / 6."
      ],
      explanation: [
        "C(11, 3) = (11 × 10 × 9) / 6 = 990 / 6 = 165."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Calculate C(6, 4).',
      answer: "15",
      hints: [
        "C(6, 4) = C(6, 2) by symmetry.",
        "= (6 × 5) / (2 × 1).",
        "= 30 / 2."
      ],
      explanation: [
        "C(6, 4) = C(6, 2) = (6 × 5) / (2 × 1) = 15."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A club of 10 members must choose a committee of 3. How many committees are possible?',
      choices: ["30", "60", "120", "720"],
      answer: "120",
      hints: [
        "Order doesn\'t matter, so use C(10, 3).",
        "C(10, 3) = (10 × 9 × 8) / (3 × 2 × 1).",
        "= 720 / 6."
      ],
      explanation: [
        "C(10, 3) = (10 × 9 × 8) / 6 = 720 / 6 = 120."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can you choose 5 songs from a playlist of 9?',
      answer: "126",
      hints: [
        "Order doesn\'t matter, so use C(9, 5).",
        "C(9, 5) = C(9, 4) = (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1).",
        "= 3024 / 24."
      ],
      explanation: [
        "C(9, 5) = C(9, 4) = 3024 / 24 = 126."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Calculate C(7, 2).',
      answer: "21",
      hints: [
        "C(7, 2) = 7! / (2! × 5!).",
        "= (7 × 6) / (2 × 1).",
        "= 42 / 2."
      ],
      explanation: [
        "C(7, 2) = (7 × 6) / (2 × 1) = 21."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A teacher must choose 4 students from 8 for a quiz team. How many teams are possible?',
      choices: ["32", "56", "70", "1680"],
      answer: "70",
      hints: [
        "Order doesn\'t matter, so use C(8, 4).",
        "C(8, 4) = (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1).",
        "= 1680 / 24."
      ],
      explanation: [
        "C(8, 4) = (8 × 7 × 6 × 5) / 24 = 1680 / 24 = 70."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can you choose 6 cards from a hand of 10?',
      answer: "210",
      hints: [
        "Order doesn\'t matter, so use C(10, 6).",
        "C(10, 6) = C(10, 4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1).",
        "= 5040 / 24."
      ],
      explanation: [
        "C(10, 6) = C(10, 4) = 5040 / 24 = 210."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Calculate C(8, 2).',
      answer: "28",
      hints: [
        'C(8, 2) = 8! / (2! × 6!).',
        '= (8 × 7) / (2 × 1).',
        '= 56 / 2.'
      ],
      explanation: [
        'C(8, 2) = (8 × 7) / (2 × 1) = 28.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A group of 13 friends must choose 2 to co-lead a project. How many pairs are possible?',
      choices: ["26", "78", "156", "169"],
      answer: "78",
      hints: [
        'Order doesn\'t matter, so use C(13, 2).',
        'C(13, 2) = (13 × 12) / (2 × 1).',
        '= 156 / 2.'
      ],
      explanation: [
        'C(13, 2) = (13 × 12) / 2 = 78.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Calculate C(9, 3).',
      answer: "84",
      hints: [
        'C(9, 3) = 9! / (3! × 6!).',
        '= (9 × 8 × 7) / (3 × 2 × 1).',
        '= 504 / 6.'
      ],
      explanation: [
        'C(9, 3) = (9 × 8 × 7) / (3 × 2 × 1) = 504 / 6 = 84.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can you choose 3 students from a group of 7? (Order does not matter.)',
      answer: "35",
      hints: [
        'Use the combination formula: C(n,r) = n! / (r!(n−r)!).',
        'C(7,3) = 7! / (3! × 4!).',
        '= (7 × 6 × 5) / (3 × 2 × 1).'
      ],
      explanation: [
        'C(7,3) = 7! / (3! × 4!).',
        '= (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6.',
        '= 35.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A committee of 4 is to be formed from 9 people. How many different committees are possible?',
      choices: ["36", "84", "126", "3024"],
      answer: "126",
      hints: [
        'Order does not matter for a committee.',
        'C(9,4) = 9! / (4! × 5!).',
        '= (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1).'
      ],
      explanation: [
        'C(9,4) = 9! / (4! × 5!).',
        '= (9 × 8 × 7 × 6) / (4 × 3 × 2 × 1) = 3024 / 24.',
        '= 126 committees.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can you choose 2 toppings from 8 available pizza toppings?',
      answer: "28",
      hints: [
        'Order does not matter (choosing, not arranging).',
        'C(8,2) = 8! / (2! × 6!).',
        '= (8 × 7) / (2 × 1).'
      ],
      explanation: [
        'C(8,2) = 8! / (2! × 6!).',
        '= (8 × 7) / (2 × 1) = 56 / 2.',
        '= 28.'
      ]
    }
  ],

  // --- Topic 6: Permutations --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can you arrange 3 people in a row from a group of 7? Calculate P(7, 3).',
      answer: "210",
      hints: [
        "P(n, r) = n! / (n−r)!.",
        "P(7, 3) = 7! / 4! = 7 × 6 × 5.",
        "= 210."
      ],
      explanation: [
        "P(7, 3) = 7 × 6 × 5.",
        "= 42 × 5 = 210."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'In a race with 10 runners, how many ways can gold, silver, and bronze be awarded?',
      choices: ["30", "120", "720", "1000"],
      answer: "720",
      hints: [
        "This is P(10, 3) since order matters.",
        "10 × 9 × 8.",
        "= 720."
      ],
      explanation: [
        "Gold: 10 choices. Silver: 9 choices. Bronze: 8 choices.",
        "P(10, 3) = 10 × 9 × 8 = 720."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A club elects a President, Vice-President, and Secretary from 8 members. How many ways?',
      answer: "336",
      hints: [
        "Order matters (different positions), so use P(8, 3).",
        "8 × 7 × 6.",
        "= 336."
      ],
      explanation: [
        "P(8, 3) = 8 × 7 × 6.",
        "= 56 × 6 = 336."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many 2-letter "words" can be formed from the letters A, B, C, D, E with no repetition?',
      choices: ["10", "20", "25", "30"],
      answer: "20",
      hints: [
        "Order matters (AB ≠ BA), so use P(5, 2).",
        "P(5, 2) = 5 × 4.",
        "= 20."
      ],
      explanation: [
        "P(5, 2) = 5 × 4 = 20.",
        "There are 20 ordered pairs from 5 letters without repetition."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many different ways can 5 runners finish in 1st, 2nd, and 3rd place?',
      answer: "60",
      hints: [
        "This is P(5, 3) since order matters.",
        "5 choices for 1st, 4 for 2nd, 3 for 3rd.",
        "5 × 4 × 3 = ?"
      ],
      explanation: [
        "P(5, 3) = 5 × 4 × 3.",
        "= 60."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can 4 prizes (1st, 2nd, 3rd, 4th) be awarded to 9 contestants?',
      answer: "3024",
      hints: [
        "This is P(9, 4) = 9 × 8 × 7 × 6.",
        "9 × 8 = 72.",
        "72 × 7 × 6 = 72 × 42."
      ],
      explanation: [
        "P(9, 4) = 9 × 8 × 7 × 6.",
        "= 72 × 42 = 3024."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many 3-letter arrangements can be made from the letters {P, Q, R, S} with no repetition?',
      choices: ["4", "12", "24", "64"],
      answer: "24",
      hints: [
        "P(4, 3) = 4 × 3 × 2.",
        "= 24.",
        "Order matters since arrangements are different."
      ],
      explanation: [
        "P(4, 3) = 4 × 3 × 2 = 24."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In how many ways can a captain and a vice-captain be chosen from a team of 11 players?',
      answer: "110",
      hints: [
        "This is P(11, 2) since the positions are different.",
        "11 × 10 = ?",
        "= 110."
      ],
      explanation: [
        "P(11, 2) = 11 × 10 = 110."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many ways can 3 different medals (gold, silver, bronze) be awarded to 6 athletes?',
      choices: ["18", "20", "120", "216"],
      answer: "120",
      hints: [
        "This is P(6, 3) since order matters.",
        "6 × 5 × 4.",
        "= 120."
      ],
      explanation: [
        "P(6, 3) = 6 × 5 × 4 = 120."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many 2-digit numbers can be formed from {1, 2, 3, 4, 5, 6} with no repetition?',
      answer: "30",
      hints: [
        "Order matters (12 ≠ 21), so use P(6, 2).",
        "P(6, 2) = 6 × 5.",
        "= 30."
      ],
      explanation: [
        "P(6, 2) = 6 × 5 = 30."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can a president, secretary, and treasurer be chosen from a club of 12 members?',
      answer: "1320",
      hints: [
        "This is P(12, 3) since positions are different.",
        "12 × 11 × 10.",
        "= 1320."
      ],
      explanation: [
        "P(12, 3) = 12 × 11 × 10 = 1320."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many 2-letter arrangements can be made from {A, B, C, D, E, F, G} with no repetition?',
      choices: ["14", "21", "42", "49"],
      answer: "42",
      hints: [
        "Order matters, so use P(7, 2).",
        "P(7, 2) = 7 × 6.",
        "= 42."
      ],
      explanation: [
        "P(7, 2) = 7 × 6 = 42."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In how many ways can a chair, co-chair, and secretary be chosen from a group of 10 people?',
      answer: "720",
      hints: [
        "Order matters (positions are different), so use P(10, 3).",
        "10 × 9 × 8.",
        "= 720."
      ],
      explanation: [
        "P(10, 3) = 10 × 9 × 8 = 720."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can 5 different medals (1st through 5th) be awarded to 8 contestants?',
      answer: "6720",
      hints: [
        "This is P(8, 5) = 8 × 7 × 6 × 5 × 4.",
        "8 × 7 = 56. 56 × 6 = 336.",
        "336 × 5 = 1680. 1680 × 4 = 6720."
      ],
      explanation: [
        "P(8, 5) = 8 × 7 × 6 × 5 × 4 = 6720."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many 2-letter "words" can be formed from {M, N, O, P, Q, R} with no repetition?',
      choices: ["12", "15", "30", "36"],
      answer: "30",
      hints: [
        "Order matters, so use P(6, 2).",
        "P(6, 2) = 6 × 5.",
        "= 30."
      ],
      explanation: [
        "P(6, 2) = 6 × 5 = 30."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can a manager, assistant manager, and clerk be chosen from 9 employees?',
      answer: "504",
      hints: [
        "Order matters (different positions), so use P(9, 3).",
        "9 × 8 × 7.",
        "= 504."
      ],
      explanation: [
        "P(9, 3) = 9 × 8 × 7 = 504."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In how many ways can first, second, and third prizes be awarded to 15 contestants?',
      answer: "2730",
      hints: [
        "This is P(15, 3) since order matters.",
        "15 × 14 × 13.",
        "= 210 × 13."
      ],
      explanation: [
        "P(15, 3) = 15 × 14 × 13 = 2730."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many 3-letter arrangements can be made from {A, B, C, D, E, F, G, H} with no repetition?',
      choices: ["24", "56", "336", "512"],
      answer: "336",
      hints: [
        'Order matters, so use P(8, 3).',
        'P(8, 3) = 8 × 7 × 6.',
        '= 336.'
      ],
      explanation: [
        'P(8, 3) = 8 × 7 × 6 = 336.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In how many ways can a president, vice-president, secretary, and treasurer be chosen from a club of 14 members?',
      answer: "24024",
      hints: [
        'This is P(14, 4) since positions are different.',
        '14 × 13 × 12 × 11.',
        '= 182 × 132.'
      ],
      explanation: [
        'P(14, 4) = 14 × 13 × 12 × 11 = 24024.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many ways can 6 runners finish 1st, 2nd, and 3rd in a race?',
      answer: "120",
      hints: [
        'This is P(6, 3) since order matters.',
        '6 choices for 1st, 5 for 2nd, 4 for 3rd.',
        '6 × 5 × 4 = ?'
      ],
      explanation: [
        'P(6, 3) = 6 × 5 × 4 = 120.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many ways can 4 runners finish in 1st, 2nd, 3rd, and 4th place in a race of 10 runners?',
      answer: "5040",
      hints: [
        'Order matters (positions are different).',
        'P(10,4) = 10 × 9 × 8 × 7.',
        'Calculate step by step.'
      ],
      explanation: [
        'P(10,4) = 10!/(10−4)! = 10 × 9 × 8 × 7.',
        '= 5040.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'How many different 3-letter "words" can be formed from the letters A, B, C, D, E if no letter is repeated?',
      choices: ["10", "15", "60", "125"],
      answer: "60",
      hints: [
        'Order matters (ABC ≠ BAC).',
        'P(5,3) = 5 × 4 × 3.',
        'Calculate the product.'
      ],
      explanation: [
        'This is a permutation: P(5,3) = 5!/(5−3)!.',
        '= 5 × 4 × 3 = 60.',
        '60 different 3-letter words.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'In how many ways can the letters of the word MATH be arranged?',
      answer: "24",
      hints: [
        'MATH has 4 distinct letters.',
        'The number of arrangements of 4 distinct items is 4!.',
        '4! = 4 × 3 × 2 × 1.'
      ],
      explanation: [
        '4 distinct letters: M, A, T, H.',
        'Arrangements = 4! = 4 × 3 × 2 × 1 = 24.'
      ]
    }
  ],

  // --- Topic 7: Large Counting Problems --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'A 4-digit PIN uses digits 0–9 and allows repetition. How many PINs are possible?',
      answer: "10000",
      hints: [
        "Each digit has 10 choices (0–9).",
        "Total = 10 × 10 × 10 × 10.",
        "= 10,000."
      ],
      explanation: [
        "Each of the 4 positions has 10 choices.",
        "Total = 10⁴ = 10,000."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A 3-digit code uses digits 1–9 with NO repetition. How many codes are possible?',
      choices: ["504", "512", "729", "720"],
      answer: "504",
      hints: [
        "First digit: 9 choices (1–9).",
        "Second digit: 8 remaining. Third digit: 7.",
        "Total = 9 × 8 × 7."
      ],
      explanation: [
        "No repetition: 9 × 8 × 7.",
        "= 72 × 7 = 504."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 5-letter "words" can be made from the 26 letters if repetition is allowed?',
      answer: "11881376",
      hints: [
        "Each position has 26 choices.",
        "Total = 26⁵.",
        "26² = 676, 26³ = 17576, 26⁴ = 456976, 26⁵ = ?"
      ],
      explanation: [
        "Total = 26⁵ = 26 × 26 × 26 × 26 × 26.",
        "= 456976 × 26 = 11,881,376."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A password is 3 characters long. The first character is a letter (A–Z), and the next two are digits (0–9). Repetition is allowed. How many passwords are possible?',
      choices: ["260", "2600", "6760", "2060"],
      answer: "2600",
      hints: [
        "First character: 26 choices.",
        "Second character: 10 choices. Third character: 10 choices.",
        "Total = 26 × 10 × 10."
      ],
      explanation: [
        "Total = 26 × 10 × 10.",
        "= 26 × 100 = 2600."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many 3-digit numbers can be formed using digits 1–5 if repetition is allowed?',
      answer: "125",
      hints: [
        "Each digit position has 5 choices (1, 2, 3, 4, 5).",
        "Total = 5 × 5 × 5.",
        "= 125."
      ],
      explanation: [
        "Each of the 3 positions has 5 choices.",
        "Total = 5³ = 125."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A 5-digit zip code uses digits 0–9 with repetition. How many zip codes are possible?',
      choices: ["50000", "90000", "99999", "100000"],
      answer: "100000",
      hints: [
        "Each of the 5 positions has 10 choices.",
        "Total = 10 × 10 × 10 × 10 × 10.",
        "= 10⁵."
      ],
      explanation: [
        "Total = 10⁵ = 100,000."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A locker combination has 3 numbers, each from 0 to 39 (repetition allowed). How many combinations are possible?',
      answer: "64000",
      hints: [
        "Each position has 40 choices.",
        "Total = 40 × 40 × 40.",
        "= 40³."
      ],
      explanation: [
        "Total = 40³ = 40 × 40 × 40 = 64,000."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 2-digit numbers can be formed using digits 0–9 where the first digit is not 0 and no digits repeat?',
      answer: "81",
      hints: [
        "First digit: 9 choices (1–9, not 0).",
        "Second digit: 9 remaining choices (0–9 minus the first).",
        "Total = 9 × 9."
      ],
      explanation: [
        "First digit: 9 choices. Second digit: 9 remaining.",
        "Total = 9 × 9 = 81."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 4-letter "words" can be made from the 26 letters if repetition is allowed?',
      answer: "456976",
      hints: [
        "Each position has 26 choices.",
        "Total = 26⁴.",
        "26² = 676, 26⁴ = 676 × 676."
      ],
      explanation: [
        "Total = 26⁴ = 26 × 26 × 26 × 26.",
        "= 676 × 676 = 456,976."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A 3-digit PIN uses digits 0–9 with repetition allowed. How many PINs are possible?',
      choices: ["100", "720", "999", "1000"],
      answer: "1000",
      hints: [
        "Each digit has 10 choices.",
        "Total = 10 × 10 × 10.",
        "= 10³."
      ],
      explanation: [
        "Each of the 3 positions has 10 choices.",
        "Total = 10³ = 1,000."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A code has 2 letters (A–Z) followed by 2 digits (0–9), no repetition allowed. How many codes are possible?',
      answer: "58500",
      hints: [
        "Letters: 26 × 25 = 650 (no repeat).",
        "Digits: 10 × 9 = 90 (no repeat).",
        "Total = 650 × 90."
      ],
      explanation: [
        "Letters: 26 × 25 = 650.",
        "Digits: 10 × 9 = 90.",
        "Total = 650 × 90 = 58,500."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many 2-digit numbers can be formed using digits 0–9 where the first digit is not 0 and repetition is allowed?',
      answer: "90",
      hints: [
        "First digit: 9 choices (1–9).",
        "Second digit: 10 choices (0–9).",
        "Total = 9 × 10."
      ],
      explanation: [
        "First digit: 9 choices. Second digit: 10 choices.",
        "Total = 9 × 10 = 90."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A 6-digit PIN uses digits 0–9 with repetition allowed. How many PINs are possible?',
      choices: ["60000", "100000", "500000", "1000000"],
      answer: "1000000",
      hints: [
        "Each of the 6 positions has 10 choices.",
        "Total = 10 × 10 × 10 × 10 × 10 × 10.",
        "= 10⁶."
      ],
      explanation: [
        "Total = 10⁶ = 1,000,000."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 3-letter "words" can be made from the 26 letters if no letter repeats?',
      answer: "15600",
      hints: [
        "First letter: 26 choices.",
        "Second letter: 25 remaining. Third letter: 24.",
        "Total = 26 × 25 × 24."
      ],
      explanation: [
        "Total = 26 × 25 × 24.",
        "= 650 × 24 = 15,600."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A 2-digit PIN uses digits 0–9 with repetition. How many PINs are possible?',
      choices: ["20", "90", "100", "99"],
      answer: "100",
      hints: [
        "Each digit has 10 choices.",
        "Total = 10 × 10.",
        "= 10²."
      ],
      explanation: [
        "Each of the 2 positions has 10 choices.",
        "Total = 10² = 100."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A password has 1 letter (A–Z) followed by 3 digits (0–9), repetition allowed. How many passwords are possible?',
      answer: "26000",
      hints: [
        "Letter: 26 choices.",
        "Digits: 10 × 10 × 10 = 1000.",
        "Total = 26 × 1000."
      ],
      explanation: [
        "Letter: 26 choices. Digits: 10³ = 1000.",
        "Total = 26 × 1000 = 26,000."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 3-digit numbers can be formed using digits 1–8 if no digit repeats?',
      answer: "336",
      hints: [
        "First digit: 8 choices.",
        "Second digit: 7 remaining. Third digit: 6.",
        "Total = 8 × 7 × 6."
      ],
      explanation: [
        "No repetition: 8 × 7 × 6.",
        "= 56 × 6 = 336."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A 7-digit phone number uses digits 0–9. How many phone numbers are possible (first digit cannot be 0)?',
      choices: ["9000000", "10000000", "7000000", "4782969"],
      answer: "9000000",
      hints: [
        'First digit: 9 choices (1–9).',
        'Each of the remaining 6 digits: 10 choices.',
        'Total = 9 × 10⁶.'
      ],
      explanation: [
        'Total = 9 × 10 × 10 × 10 × 10 × 10 × 10.',
        '= 9 × 1,000,000 = 9,000,000.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many 3-digit numbers can be formed using digits 1–6 if repetition is allowed?',
      answer: "216",
      hints: [
        'Each digit position has 6 choices (1, 2, 3, 4, 5, 6).',
        'Total = 6 × 6 × 6.',
        '= 6³.'
      ],
      explanation: [
        'Each of the 3 positions has 6 choices.',
        'Total = 6³ = 216.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A code has 3 letters (A–Z) with no repetition. How many codes are possible?',
      answer: "15600",
      hints: [
        'First letter: 26 choices.',
        'Second letter: 25 remaining. Third letter: 24.',
        'Total = 26 × 25 × 24.'
      ],
      explanation: [
        'Total = 26 × 25 × 24.',
        '= 650 × 24 = 15,600.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many 3-digit even numbers can be formed using digits 1-9 (digits may repeat)?',
      answer: "324",
      hints: [
        'A 3-digit number: _ _ _. The last digit must be even.',
        'Even digits from 1-9: 2, 4, 6, 8 → 4 choices for last digit.',
        'First digit: 9 choices (1-9). Middle digit: 9 choices. Last digit: 4 choices.'
      ],
      explanation: [
        'First digit: 9 choices (1-9, any).',
        'Middle digit: 9 choices. Last digit: 4 choices (2, 4, 6, 8).',
        'Total = 9 × 9 × 4 = 324.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A license plate has 2 letters followed by 3 digits. How many plates are possible? (Letters: 26 choices each, digits: 10 choices each, repetition allowed.)',
      choices: ["67,600", "175,760", "676,000", "1,757,600"],
      answer: "676,000",
      hints: [
        'Letter 1: 26, Letter 2: 26, Digit 1: 10, Digit 2: 10, Digit 3: 10.',
        'Total = 26 × 26 × 10 × 10 × 10.',
        '26² × 10³.'
      ],
      explanation: [
        'Total = 26 × 26 × 10 × 10 × 10.',
        '= 676 × 1000.',
        '= 676,000 plates.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 4-digit numbers have all different digits? (First digit cannot be 0.)',
      answer: "4536",
      hints: [
        'First digit: 9 choices (1-9, not 0).',
        'Second digit: 9 choices (0-9 except first digit).',
        'Third: 8 choices. Fourth: 7 choices.'
      ],
      explanation: [
        'First digit: 9 choices (1-9).',
        'Second digit: 9 choices (0-9 minus the first digit).',
        'Third: 8 remaining. Fourth: 7 remaining.',
        'Total = 9 × 9 × 8 × 7 = 4536.'
      ]
    }
  ],

  // --- Topic 8: Complement Strategy --- difficulty 2-3
  [
    {
      type: "mc",
      difficulty: 3,
      question: 'A die is rolled 3 times. What is the probability of getting at least one 6? (Round to the nearest hundredth.)',
      choices: ["0.42", "0.50", "0.58", "0.33"],
      answer: "0.42",
      hints: [
        "P(at least one 6) = 1 − P(no 6 in 3 rolls).",
        "P(not 6 on one roll) = 5/6.",
        "P(no 6 in 3 rolls) = (5/6)³ = 125/216."
      ],
      explanation: [
        "P(no 6 on one roll) = 5/6.",
        "P(no 6 in 3 rolls) = (5/6)³ = 125/216 ≈ 0.5787.",
        "P(at least one 6) = 1 − 125/216 ≈ 0.42."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two cards are drawn from a standard 52-card deck (without replacement). What is the probability that at least one is a heart? Give as a fraction.',
      answer: "15/34",
      hints: [
        "Use complement: P(at least one heart) = 1 − P(no hearts).",
        "P(no hearts) = (39/52) × (38/51) = 1482/2652.",
        "Simplify and subtract from 1."
      ],
      explanation: [
        "P(no hearts) = 39/52 × 38/51 = 1482/2652 = 19/34.",
        "P(at least one heart) = 1 − 19/34 = 15/34."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A coin is flipped 4 times. What is the probability of getting at least one head?',
      choices: ["<span class=\"math\">\\frac{1}{16}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{15}{16}</span>", "<span class=\"math\">\\frac{3}{4}</span>"],
      answer: "<span class=\"math\">\\frac{15}{16}</span>",
      hints: [
        "P(at least one H) = 1 − P(all tails).",
        "P(all tails) = (1/2)⁴ = 1/16.",
        "1 − 1/16 = 15/16."
      ],
      explanation: [
        "P(all tails) = (1/2)⁴ = 1/16.",
        "P(at least one head) = 1 − 1/16 = 15/16."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A coin is flipped 5 times. What is the probability of getting at least one tail? Give as a fraction.',
      answer: "31/32",
      hints: [
        "P(at least one tail) = 1 − P(all heads).",
        "P(all heads) = (1/2)⁵ = 1/32.",
        "1 − 1/32 = 31/32."
      ],
      explanation: [
        "P(all heads) = (1/2)⁵ = 1/32.",
        "P(at least one tail) = 1 − 1/32 = 31/32."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A bag has 6 red and 4 blue balls. You draw one ball. What is the probability it is NOT red?',
      choices: ["<span class=\"math\">\\frac{1}{5}</span>", "<span class=\"math\">\\frac{2}{5}</span>", "<span class=\"math\">\\frac{3}{5}</span>", "<span class=\"math\">\\frac{4}{5}</span>"],
      answer: "<span class=\"math\">\\frac{2}{5}</span>",
      hints: [
        "Total = 6 + 4 = 10. P(red) = 6/10 = 3/5.",
        "P(not red) = 1 − 3/5.",
        "= 2/5."
      ],
      explanation: [
        "P(red) = 6/10 = 3/5.",
        "P(not red) = 1 − 3/5 = 2/5."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A die is rolled twice. What is the probability of getting at least one even number? Give as a fraction.',
      answer: "3/4",
      hints: [
        "P(at least one even) = 1 − P(both odd).",
        "P(odd on one roll) = 3/6 = 1/2.",
        "P(both odd) = (1/2)² = 1/4."
      ],
      explanation: [
        "P(both odd) = (1/2)(1/2) = 1/4.",
        "P(at least one even) = 1 − 1/4 = 3/4."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A coin is flipped 3 times. What is the probability of getting at least one head?',
      choices: ["<span class=\"math\">\\frac{1}{8}</span>", "<span class=\"math\">\\frac{3}{8}</span>", "<span class=\"math\">\\frac{1}{2}</span>", "<span class=\"math\">\\frac{7}{8}</span>"],
      answer: "<span class=\"math\">\\frac{7}{8}</span>",
      hints: [
        "P(all tails) = (1/2)³ = 1/8.",
        "P(at least one head) = 1 − 1/8.",
        "= 7/8."
      ],
      explanation: [
        "P(all tails) = 1/8.",
        "P(at least one head) = 1 − 1/8 = 7/8."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bag has 5 red and 5 blue marbles. Two are drawn without replacement. What is the probability that at least one is red? Give as a fraction.',
      answer: "7/9",
      hints: [
        "P(no red) = P(both blue) = (5/10)(4/9) = 20/90 = 2/9.",
        "P(at least one red) = 1 − 2/9.",
        "= 7/9."
      ],
      explanation: [
        "P(both blue) = (5/10)(4/9) = 20/90 = 2/9.",
        "P(at least one red) = 1 − 2/9 = 7/9."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A die is rolled 2 times. What is the probability of getting at least one 1? (Round to the nearest hundredth.)',
      choices: ["0.17", "0.28", "0.31", "0.33"],
      answer: "0.31",
      hints: [
        "P(at least one 1) = 1 − P(no 1 in 2 rolls).",
        "P(not 1 on one roll) = 5/6.",
        "P(no 1 in 2 rolls) = (5/6)² = 25/36."
      ],
      explanation: [
        "P(no 1 in 2 rolls) = (5/6)² = 25/36 ≈ 0.6944.",
        "P(at least one 1) = 1 − 25/36 = 11/36 ≈ 0.31."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A coin is flipped 6 times. What is the probability of getting at least one tail? Give as a fraction.',
      answer: "63/64",
      hints: [
        "P(at least one tail) = 1 − P(all heads).",
        "P(all heads) = (1/2)⁶ = 1/64.",
        "1 − 1/64 = 63/64."
      ],
      explanation: [
        "P(all heads) = (1/2)⁶ = 1/64.",
        "P(at least one tail) = 1 − 1/64 = 63/64."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A bag has 4 red and 6 green marbles. Two are drawn without replacement. What is the probability that at least one is green? Give as a fraction.',
      choices: ["<span class=\"math\">\\frac{2}{15}</span>", "<span class=\"math\">\\frac{7}{15}</span>", "<span class=\"math\">\\frac{13}{15}</span>", "<span class=\"math\">\\frac{14}{15}</span>"],
      answer: "<span class=\"math\">\\frac{13}{15}</span>",
      hints: [
        "P(no green) = P(both red) = (4/10)(3/9) = 12/90 = 2/15.",
        "P(at least one green) = 1 − 2/15.",
        "= 13/15."
      ],
      explanation: [
        "P(both red) = (4/10)(3/9) = 12/90 = 2/15.",
        "P(at least one green) = 1 − 2/15 = 13/15."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A die is rolled 4 times. What is the probability of getting at least one 6? (Round to the nearest hundredth.)',
      answer: "0.52",
      hints: [
        "P(at least one 6) = 1 − P(no 6 in 4 rolls).",
        "P(not 6 on one roll) = 5/6.",
        "P(no 6 in 4 rolls) = (5/6)⁴ = 625/1296."
      ],
      explanation: [
        "P(no 6 in 4 rolls) = (5/6)⁴ = 625/1296 ≈ 0.4823.",
        "P(at least one 6) = 1 − 625/1296 ≈ 0.52."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A coin is flipped 5 times. What is the probability of getting at least one head?',
      choices: ["<span class=\"math\">\\frac{1}{32}</span>", "<span class=\"math\">\\frac{15}{16}</span>", "<span class=\"math\">\\frac{31}{32}</span>", "<span class=\"math\">\\frac{1}{2}</span>"],
      answer: "<span class=\"math\">\\frac{31}{32}</span>",
      hints: [
        "P(at least one H) = 1 − P(all tails).",
        "P(all tails) = (1/2)⁵ = 1/32.",
        "1 − 1/32 = 31/32."
      ],
      explanation: [
        "P(all tails) = (1/2)⁵ = 1/32.",
        "P(at least one head) = 1 − 1/32 = 31/32."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bag has 3 red and 7 blue marbles. Two are drawn without replacement. What is the probability that at least one is blue? Give as a fraction.',
      answer: "14/15",
      hints: [
        "P(no blue) = P(both red) = (3/10)(2/9) = 6/90 = 1/15.",
        "P(at least one blue) = 1 − 1/15.",
        "= 14/15."
      ],
      explanation: [
        "P(both red) = (3/10)(2/9) = 6/90 = 1/15.",
        "P(at least one blue) = 1 − 1/15 = 14/15."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A coin is flipped 7 times. What is the probability of getting at least one head?',
      choices: ["<span class=\"math\">\\frac{1}{128}</span>", "<span class=\"math\">\\frac{63}{64}</span>", "<span class=\"math\">\\frac{127}{128}</span>", "<span class=\"math\">\\frac{1}{2}</span>"],
      answer: "<span class=\"math\">\\frac{127}{128}</span>",
      hints: [
        "P(at least one H) = 1 − P(all tails).",
        "P(all tails) = (1/2)⁷ = 1/128.",
        "1 − 1/128 = 127/128."
      ],
      explanation: [
        "P(all tails) = (1/2)⁷ = 1/128.",
        "P(at least one head) = 1 − 1/128 = 127/128."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bag has 6 red and 4 blue marbles. Two are drawn without replacement. What is the probability that at least one is red? Give as a fraction.',
      answer: "13/15",
      hints: [
        "P(no red) = P(both blue) = (4/10)(3/9) = 12/90 = 2/15.",
        "P(at least one red) = 1 − 2/15.",
        "= 13/15."
      ],
      explanation: [
        "P(both blue) = (4/10)(3/9) = 12/90 = 2/15.",
        "P(at least one red) = 1 − 2/15 = 13/15."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A die is rolled 3 times. What is the probability of getting at least one 1? (Round to the nearest hundredth.)',
      answer: "0.42",
      hints: [
        "P(at least one 1) = 1 − P(no 1 in 3 rolls).",
        "P(not 1 on one roll) = 5/6.",
        "P(no 1 in 3 rolls) = (5/6)³ = 125/216."
      ],
      explanation: [
        "P(no 1 in 3 rolls) = (5/6)³ = 125/216 ≈ 0.5787.",
        "P(at least one 1) = 1 − 125/216 = 91/216 ≈ 0.42."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A coin is flipped 8 times. What is the probability of getting at least one head?',
      choices: ["<span class=\"math\">\\frac{1}{256}</span>", "<span class=\"math\">\\frac{127}{128}</span>", "<span class=\"math\">\\frac{255}{256}</span>", "<span class=\"math\">\\frac{1}{2}</span>"],
      answer: "<span class=\"math\">\\frac{255}{256}</span>",
      hints: [
        'P(at least one H) = 1 − P(all tails).',
        'P(all tails) = (1/2)⁸ = 1/256.',
        '1 − 1/256 = 255/256.'
      ],
      explanation: [
        'P(all tails) = (1/2)⁸ = 1/256.',
        'P(at least one head) = 1 − 1/256 = 255/256.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bag has 8 red and 2 blue marbles. Two are drawn without replacement. What is the probability that at least one is blue? Give as a fraction.',
      answer: "17/45",
      hints: [
        'P(no blue) = P(both red) = (8/10)(7/9) = 56/90 = 28/45.',
        'P(at least one blue) = 1 − 28/45.',
        '= 17/45.'
      ],
      explanation: [
        'P(both red) = (8/10)(7/9) = 56/90 = 28/45.',
        'P(at least one blue) = 1 − 28/45 = 17/45.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A die is rolled 2 times. What is the probability of getting at least one 5? (Round to the nearest hundredth.)',
      answer: "0.31",
      hints: [
        'P(at least one 5) = 1 − P(no 5 in 2 rolls).',
        'P(not 5 on one roll) = 5/6.',
        'P(no 5 in 2 rolls) = (5/6)² = 25/36.'
      ],
      explanation: [
        'P(no 5 in 2 rolls) = (5/6)² = 25/36 ≈ 0.6944.',
        'P(at least one 5) = 1 − 25/36 = 11/36 ≈ 0.31.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many 3-digit numbers (100-999) are NOT multiples of 5?',
      answer: "720",
      hints: [
        'Total 3-digit numbers = 999 − 100 + 1 = 900.',
        'Count multiples of 5 from 100 to 999.',
        'Multiples of 5: first = 100, last = 995. Count = (995 − 100)/5 + 1 = 180.'
      ],
      explanation: [
        'Total 3-digit numbers = 900.',
        'Multiples of 5 from 100 to 995: (995 − 100)/5 + 1 = 180.',
        'Not multiples of 5 = 900 − 180 = 720.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A 4-digit PIN uses digits 0-9 (repetition allowed). How many PINs have at least one digit that is 7?',
      choices: ["2439", "3439", "3600", "3439"],
      answer: "3439",
      hints: [
        'Use complement: Total PINs − PINs with no 7.',
        'Total = 10⁴ = 10,000.',
        'PINs with no 7: each digit has 9 choices → 9⁴ = 6561.'
      ],
      explanation: [
        'Total PINs = 10⁴ = 10,000.',
        'PINs with no 7: 9⁴ = 6561.',
        'PINs with at least one 7 = 10,000 − 6561 = 3439.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'From numbers 1 to 100, how many are NOT divisible by 3 or 5?',
      answer: "53",
      hints: [
        'Use inclusion-exclusion: divisible by 3 OR 5 = (div by 3) + (div by 5) − (div by both).',
        'Div by 3: 33. Div by 5: 20. Div by 15 (both): 6.',
        'Div by 3 or 5 = 33 + 20 − 6 = 47.'
      ],
      explanation: [
        'Divisible by 3: floor(100/3) = 33.',
        'Divisible by 5: floor(100/5) = 20.',
        'Divisible by both (15): floor(100/15) = 6.',
        'By inclusion-exclusion: 33 + 20 − 6 = 47.',
        'Not divisible by 3 or 5: 100 − 47 = 53.'
      ]
    }
  ],

  // --- Topic 9: Probability with Dice --- difficulty 2-3
  [
    {
      type: "mc",
      difficulty: 2,
      question: 'Two dice are rolled. What is the probability of getting a sum of 7?',
      choices: ["<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{6}</span>", "<span class=\"math\">\\frac{5}{36}</span>", "<span class=\"math\">\\frac{7}{36}</span>"],
      answer: "<span class=\"math\">\\frac{1}{6}</span>",
      hints: [
        "Total outcomes for two dice = 36.",
        "Pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
        "That is 6 favorable outcomes."
      ],
      explanation: [
        "Favorable: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 outcomes.",
        "P(sum = 7) = 6/36 = 1/6."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. How many ways can you get a sum of 9?',
      answer: "4",
      hints: [
        "List pairs (a, b) where a + b = 9 and 1 ≤ a, b ≤ 6.",
        "(3,6), (4,5), (5,4), (6,3).",
        "Count them."
      ],
      explanation: [
        "Pairs summing to 9: (3,6), (4,5), (5,4), (6,3).",
        "There are 4 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability that the sum is at least 10?',
      choices: ["<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{6}</span>", "<span class=\"math\">\\frac{5}{36}</span>", "<span class=\"math\">\\frac{7}{36}</span>"],
      answer: "<span class=\"math\">\\frac{1}{6}</span>",
      hints: [
        "Sum ≥ 10 means sum = 10, 11, or 12.",
        "Sum 10: (4,6),(5,5),(6,4) → 3. Sum 11: (5,6),(6,5) → 2. Sum 12: (6,6) → 1.",
        "Total favorable = 3 + 2 + 1 = 6. Out of 36."
      ],
      explanation: [
        "Sum = 10: 3 ways. Sum = 11: 2 ways. Sum = 12: 1 way. Total = 6.",
        "P(sum ≥ 10) = 6/36 = 1/6."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two dice are rolled. How many ways can you get a sum of 5?',
      answer: "4",
      hints: [
        "List pairs (a, b) where a + b = 5 and 1 ≤ a, b ≤ 6.",
        "(1,4), (2,3), (3,2), (4,1).",
        "Count them."
      ],
      explanation: [
        "Pairs summing to 5: (1,4), (2,3), (3,2), (4,1).",
        "There are 4 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability of getting a sum of 2?',
      choices: ["<span class=\"math\">\\frac{1}{36}</span>", "<span class=\"math\">\\frac{1}{18}</span>", "<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{6}</span>"],
      answer: "<span class=\"math\">\\frac{1}{36}</span>",
      hints: [
        "The only way to get a sum of 2 is (1, 1).",
        "That is 1 favorable outcome out of 36.",
        "P(sum = 2) = 1/36."
      ],
      explanation: [
        "Only (1, 1) gives a sum of 2.",
        "P(sum = 2) = 1/36."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two dice are rolled. How many ways can you get a sum of 6?',
      answer: "5",
      hints: [
        "List pairs (a, b) where a + b = 6 and 1 ≤ a, b ≤ 6.",
        "(1,5), (2,4), (3,3), (4,2), (5,1).",
        "Count them."
      ],
      explanation: [
        "Pairs summing to 6: (1,5), (2,4), (3,3), (4,2), (5,1).",
        "There are 5 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is exactly 4?',
      choices: ["<span class=\"math\">\\frac{1}{36}</span>", "<span class=\"math\">\\frac{1}{18}</span>", "<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{9}</span>"],
      answer: "<span class=\"math\">\\frac{1}{12}</span>",
      hints: [
        "Pairs summing to 4: (1,3), (2,2), (3,1). That is 3 ways.",
        "Total outcomes = 36.",
        "P = 3/36 = 1/12."
      ],
      explanation: [
        "Favorable: (1,3), (2,2), (3,1) → 3 outcomes.",
        "P(sum = 4) = 3/36 = 1/12."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is less than 5? Give as a fraction (e.g., 1/6).',
      answer: "1/6",
      hints: [
        "Sums less than 5: sum = 2, 3, or 4.",
        "Sum 2: 1 way. Sum 3: 2 ways. Sum 4: 3 ways. Total = 6.",
        "P = 6/36."
      ],
      explanation: [
        "Sum 2: (1,1). Sum 3: (1,2),(2,1). Sum 4: (1,3),(2,2),(3,1).",
        "Total favorable = 1 + 2 + 3 = 6.",
        "P(sum < 5) = 6/36 = 1/6."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two dice are rolled. How many ways can you get a sum of 8?',
      answer: "5",
      hints: [
        "List pairs (a, b) where a + b = 8 and 1 ≤ a, b ≤ 6.",
        "(2,6), (3,5), (4,4), (5,3), (6,2).",
        "Count them."
      ],
      explanation: [
        "Pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2).",
        "There are 5 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is exactly 11?',
      choices: ["<span class=\"math\">\\frac{1}{36}</span>", "<span class=\"math\">\\frac{1}{18}</span>", "<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{9}</span>"],
      answer: "<span class=\"math\">\\frac{1}{18}</span>",
      hints: [
        "Pairs summing to 11: (5,6) and (6,5). That is 2 ways.",
        "Total outcomes = 36.",
        "P = 2/36 = 1/18."
      ],
      explanation: [
        "Favorable: (5,6), (6,5) → 2 outcomes.",
        "P(sum = 11) = 2/36 = 1/18."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is greater than 10?',
      choices: ["<span class=\"math\">\\frac{1}{36}</span>", "<span class=\"math\">\\frac{1}{18}</span>", "<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{6}</span>"],
      answer: "<span class=\"math\">\\frac{1}{12}</span>",
      hints: [
        "Sum > 10 means sum = 11 or 12.",
        "Sum 11: (5,6),(6,5) → 2. Sum 12: (6,6) → 1.",
        "Total favorable = 3. P = 3/36."
      ],
      explanation: [
        "Sum = 11: 2 ways. Sum = 12: 1 way. Total = 3.",
        "P(sum > 10) = 3/36 = 1/12."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two dice are rolled. How many ways can you get a sum of 10?',
      answer: "3",
      hints: [
        "List pairs (a, b) where a + b = 10 and 1 ≤ a, b ≤ 6.",
        "(4,6), (5,5), (6,4).",
        "Count them."
      ],
      explanation: [
        "Pairs summing to 10: (4,6), (5,5), (6,4).",
        "There are 3 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is exactly 3?',
      choices: ["<span class=\"math\">\\frac{1}{36}</span>", "<span class=\"math\">\\frac{1}{18}</span>", "<span class=\"math\">\\frac{1}{12}</span>", "<span class=\"math\">\\frac{1}{9}</span>"],
      answer: "<span class=\"math\">\\frac{1}{18}</span>",
      hints: [
        "Pairs summing to 3: (1,2) and (2,1). That is 2 ways.",
        "Total outcomes = 36.",
        "P = 2/36 = 1/18."
      ],
      explanation: [
        "Favorable: (1,2), (2,1) → 2 outcomes.",
        "P(sum = 3) = 2/36 = 1/18."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. How many ways can you get a sum of 12?',
      answer: "1",
      hints: [
        "The maximum on each die is 6.",
        "The only way to get 12 is 6 + 6.",
        "That is just 1 way: (6, 6)."
      ],
      explanation: [
        "Only (6, 6) gives a sum of 12.",
        "There is 1 way."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'Two dice are rolled. What is the probability the sum is exactly 6?',
      choices: ["<span class=\"math\">\\frac{1}{9}</span>", "<span class=\"math\">\\frac{5}{36}</span>", "<span class=\"math\">\\frac{1}{6}</span>", "<span class=\"math\">\\frac{7}{36}</span>"],
      answer: "<span class=\"math\">\\frac{5}{36}</span>",
      hints: [
        "Pairs summing to 6: (1,5), (2,4), (3,3), (4,2), (5,1).",
        "That is 5 ways out of 36.",
        "P = 5/36."
      ],
      explanation: [
        "Favorable: (1,5), (2,4), (3,3), (4,2), (5,1) → 5 outcomes.",
        "P(sum = 6) = 5/36."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. How many ways can you get a sum of 7?',
      answer: "6",
      hints: [
        "List pairs (a, b) where a + b = 7 and 1 ≤ a, b ≤ 6.",
        "(1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
        "Count them."
      ],
      explanation: [
        "Pairs summing to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
        "There are 6 ways."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is greater than 9? Give as a fraction (e.g., 1/6).',
      answer: "1/6",
      hints: [
        "Sum > 9 means sum = 10, 11, or 12.",
        "Sum 10: 3 ways. Sum 11: 2 ways. Sum 12: 1 way.",
        "Total favorable = 6. P = 6/36."
      ],
      explanation: [
        "Sum 10: (4,6),(5,5),(6,4) → 3. Sum 11: (5,6),(6,5) → 2. Sum 12: (6,6) → 1.",
        "Total = 6. P(sum > 9) = 6/36 = 1/6."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Two dice are rolled. How many ways can you get a sum of 4?',
      answer: "3",
      hints: [
        'List pairs (a, b) where a + b = 4 and 1 ≤ a, b ≤ 6.',
        '(1,3), (2,2), (3,1).',
        'Count them.'
      ],
      explanation: [
        'Pairs summing to 4: (1,3), (2,2), (3,1).',
        'There are 3 ways.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is exactly 8?',
      choices: ["<span class=\"math\">\\frac{1}{9}</span>", "<span class=\"math\">\\frac{5}{36}</span>", "<span class=\"math\">\\frac{1}{6}</span>", "<span class=\"math\">\\frac{7}{36}</span>"],
      answer: "<span class=\"math\">\\frac{5}{36}</span>",
      hints: [
        'Pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2).',
        'That is 5 ways out of 36.',
        'P = 5/36.'
      ],
      explanation: [
        'Favorable: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 outcomes.',
        'P(sum = 8) = 5/36.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability the sum is exactly 5? Give as a fraction (e.g., 1/9).',
      answer: "1/9",
      hints: [
        'Pairs summing to 5: (1,4), (2,3), (3,2), (4,1). That is 4 ways.',
        'Total outcomes = 36.',
        'P = 4/36 = 1/9.'
      ],
      explanation: [
        'Favorable: (1,4), (2,3), (3,2), (4,1) → 4 outcomes.',
        'P(sum = 5) = 4/36 = 1/9.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'Two fair dice are rolled. What is the probability that the sum is 7?',
      choices: ["1/12", "1/6", "5/36", "7/36"],
      answer: "1/6",
      hints: [
        'Total outcomes when rolling two dice = 36.',
        'Pairs that sum to 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1).',
        'Count = 6. P = 6/36.'
      ],
      explanation: [
        'Favorable outcomes: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6 outcomes.',
        'Total outcomes = 36.',
        'P(sum = 7) = 6/36 = 1/6.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'Two dice are rolled. How many outcomes have a sum greater than 9?',
      answer: "6",
      hints: [
        'Sum > 9 means sum is 10, 11, or 12.',
        'Sum = 10: (4,6),(5,5),(6,4) = 3.',
        'Sum = 11: (5,6),(6,5) = 2. Sum = 12: (6,6) = 1.'
      ],
      explanation: [
        'Sum = 10: (4,6),(5,5),(6,4) → 3 outcomes.',
        'Sum = 11: (5,6),(6,5) → 2 outcomes.',
        'Sum = 12: (6,6) → 1 outcome. Total = 3 + 2 + 1 = 6.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'Two dice are rolled. What is the probability that both show the same number (doubles)?',
      choices: ["1/36", "1/12", "1/6", "1/3"],
      answer: "1/6",
      hints: [
        'Doubles: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6).',
        'That is 6 favorable outcomes.',
        'P = 6/36.'
      ],
      explanation: [
        'Favorable: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) = 6 outcomes.',
        'Total = 36.',
        'P(doubles) = 6/36 = 1/6.'
      ]
    }
  ],

  // --- Topic 10: Expected Value --- difficulty 3-4
  [
    {
      type: "numeric",
      difficulty: 3,
      question: 'A game pays $10 if you roll a 6 on a die, and $0 otherwise. What is the expected value per roll? Round to the nearest cent.',
      answer: "1.67",
      hints: [
        "E = Σ(value × probability).",
        "P(6) = 1/6, payout = $10. P(not 6) = 5/6, payout = $0.",
        "E = 10 × (1/6) + 0 × (5/6)."
      ],
      explanation: [
        "E = $10 × (1/6) + $0 × (5/6).",
        "E = $10/6 ≈ $1.67."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A spinner has 3 equal sections: win $5, win $2, lose $4. What is the expected value?',
      choices: ["$1", "$3", "$2.33", "$0.33"],
      answer: "$1",
      hints: [
        "Each section has probability 1/3.",
        "E = (1/3)(5) + (1/3)(2) + (1/3)(−4).",
        "E = (5 + 2 − 4)/3."
      ],
      explanation: [
        "E = (1/3)(5) + (1/3)(2) + (1/3)(−4).",
        "E = (5 + 2 − 4)/3 = 3/3 = $1."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'You flip a fair coin. You win $3 for heads and lose $1 for tails. What is the expected value per flip?',
      answer: "1",
      hints: [
        "P(H) = 1/2, win $3. P(T) = 1/2, lose $1.",
        "E = (1/2)(3) + (1/2)(−1).",
        "= 1.5 − 0.5."
      ],
      explanation: [
        "E = (1/2)($3) + (1/2)(−$1).",
        "E = $1.50 − $0.50 = $1.00."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'A game costs $2 to play. You roll a die: if you get a 6, you win $12; otherwise you win nothing. What is the expected net gain per game?',
      choices: ["-$2", "-$1", "$0", "$1"],
      answer: "$0",
      hints: [
        "Expected winnings = (1/6)(12) + (5/6)(0) = 2.",
        "Net gain = winnings − cost.",
        "Net = $2 − $2."
      ],
      explanation: [
        "Expected winnings = (1/6)(12) + (5/6)(0) = $2.",
        "Net = $2 − $2 (cost) = $0."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A spinner has 4 equal sections labeled 1, 2, 3, and 4. What is the expected value of one spin? Give as a decimal.',
      answer: "2.5",
      hints: [
        "Each outcome has probability 1/4.",
        "E = (1/4)(1) + (1/4)(2) + (1/4)(3) + (1/4)(4).",
        "= (1 + 2 + 3 + 4)/4."
      ],
      explanation: [
        "E = (1 + 2 + 3 + 4) / 4 = 10/4.",
        "= 2.5."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 4,
      question: 'You roll a die. You win $2 for even numbers and lose $3 for odd numbers. What is the expected value?',
      choices: ["$0.50", "-$0.50", "$1", "-$1"],
      answer: "-$0.50",
      hints: [
        "P(even) = 1/2, win $2. P(odd) = 1/2, lose $3.",
        "E = (1/2)(2) + (1/2)(−3).",
        "= 1 − 1.5."
      ],
      explanation: [
        "E = (1/2)(2) + (1/2)(−3) = 1 − 1.5 = −$0.50.",
        "On average, you lose $0.50 per roll."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A raffle ticket costs $5. There is a 1/100 chance of winning $200. What is the expected net gain? Give as a decimal.',
      answer: "-3",
      hints: [
        "Expected winnings = (1/100)(200) + (99/100)(0) = 2.",
        "Net gain = winnings − cost.",
        "= 2 − 5."
      ],
      explanation: [
        "Expected winnings = $200 × (1/100) = $2.",
        "Net = $2 − $5 = −$3."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A spinner has 4 equal sections: win $10, win $5, lose $2, lose $8. What is the expected value? Give as a decimal.',
      answer: "1.25",
      hints: [
        "E = (1/4)(10) + (1/4)(5) + (1/4)(−2) + (1/4)(−8).",
        "= (10 + 5 − 2 − 8)/4.",
        "= 5/4."
      ],
      explanation: [
        "E = (10 + 5 − 2 − 8) / 4 = 5/4 = 1.25."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A game costs $3 to play. You flip a coin: heads wins $8, tails wins nothing. What is the expected net gain?',
      choices: ["$1", "$0.50", "$0", "-$0.50"],
      answer: "$1",
      hints: [
        "Expected winnings = (1/2)(8) + (1/2)(0) = 4.",
        "Net gain = winnings − cost.",
        "= 4 − 3."
      ],
      explanation: [
        "Expected winnings = (1/2)(8) + (1/2)(0) = $4.",
        "Net = $4 − $3 = $1."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A spinner has 5 equal sections labeled 2, 4, 6, 8, and 10. What is the expected value of one spin?',
      answer: "6",
      hints: [
        "Each outcome has probability 1/5.",
        "E = (1/5)(2) + (1/5)(4) + (1/5)(6) + (1/5)(8) + (1/5)(10).",
        "= (2 + 4 + 6 + 8 + 10)/5."
      ],
      explanation: [
        "E = (2 + 4 + 6 + 8 + 10) / 5 = 30/5.",
        "= 6."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A lottery ticket costs $1. There is a 1/50 chance of winning $30 and a 49/50 chance of winning nothing. What is the expected net gain? Give as a decimal.',
      answer: "-0.4",
      hints: [
        "Expected winnings = (1/50)(30) + (49/50)(0) = 0.6.",
        "Net gain = winnings − cost.",
        "= 0.6 − 1."
      ],
      explanation: [
        "Expected winnings = $30 × (1/50) = $0.60.",
        "Net = $0.60 − $1.00 = −$0.40."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A spinner has 3 equal sections: win $8, lose $2, lose $3. What is the expected value?',
      choices: ["-$1", "$0", "$1", "$2"],
      answer: "$1",
      hints: [
        "Each section has probability 1/3.",
        "E = (1/3)(8) + (1/3)(−2) + (1/3)(−3).",
        "= (8 − 2 − 3)/3."
      ],
      explanation: [
        "E = (8 − 2 − 3) / 3 = 3/3 = $1."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A game costs $4 to play. You roll a die: roll 5 or 6 wins $15, otherwise win nothing. What is the expected net gain? Give as a decimal.',
      answer: "1",
      hints: [
        "P(5 or 6) = 2/6 = 1/3.",
        "Expected winnings = (1/3)(15) + (2/3)(0) = 5.",
        "Net = 5 − 4."
      ],
      explanation: [
        "Expected winnings = (1/3)(15) = $5.",
        "Net = $5 − $4 = $1."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A spinner has 6 equal sections labeled 1 through 6. What is the expected value of one spin? Give as a decimal.',
      answer: "3.5",
      hints: [
        "Each outcome has probability 1/6.",
        "E = (1 + 2 + 3 + 4 + 5 + 6) / 6.",
        "= 21 / 6."
      ],
      explanation: [
        "E = (1 + 2 + 3 + 4 + 5 + 6) / 6 = 21 / 6.",
        "= 3.5."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'A game costs $5 to play. Roll a die: if you roll a 6, you win $24; otherwise you win nothing. What is the expected net gain?',
      choices: ["-$2", "-$1", "$0", "$1"],
      answer: "-$1",
      hints: [
        "Expected winnings = (1/6)(24) + (5/6)(0) = 4.",
        "Net gain = winnings − cost.",
        "= 4 − 5."
      ],
      explanation: [
        "Expected winnings = (1/6)(24) = $4.",
        "Net = $4 − $5 = −$1."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A spinner has 3 equal sections: win $12, lose $3, lose $6. What is the expected value?',
      answer: "1",
      hints: [
        "Each section has probability 1/3.",
        "E = (1/3)(12) + (1/3)(−3) + (1/3)(−6).",
        "= (12 − 3 − 6)/3."
      ],
      explanation: [
        "E = (12 − 3 − 6) / 3 = 3/3 = $1."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A spinner has 8 equal sections labeled 3, 6, 9, 12, 15, 18, 21, 24. What is the expected value of one spin? Give as a decimal.',
      answer: "13.5",
      hints: [
        "Each outcome has probability 1/8.",
        "E = (3 + 6 + 9 + 12 + 15 + 18 + 21 + 24) / 8.",
        "= 108 / 8."
      ],
      explanation: [
        "E = (3 + 6 + 9 + 12 + 15 + 18 + 21 + 24) / 8.",
        "= 108 / 8 = 13.5."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A spinner has 4 equal sections: win $6, win $3, lose $1, lose $4. What is the expected value?',
      choices: ["$0.50", "$1", "$1.50", "$2"],
      answer: "$1",
      hints: [
        'Each section has probability 1/4.',
        'E = (1/4)(6) + (1/4)(3) + (1/4)(−1) + (1/4)(−4).',
        '= (6 + 3 − 1 − 4)/4.'
      ],
      explanation: [
        'E = (6 + 3 − 1 − 4) / 4 = 4/4 = $1.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A game costs $2 to play. You flip a coin: heads wins $6, tails wins nothing. What is the expected net gain?',
      answer: "1",
      hints: [
        'Expected winnings = (1/2)(6) + (1/2)(0) = 3.',
        'Net gain = winnings − cost.',
        '= 3 − 2.'
      ],
      explanation: [
        'Expected winnings = (1/2)(6) = $3.',
        'Net = $3 − $2 = $1.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A spinner has 5 equal sections labeled 10, 20, 30, 40, and 50. What is the expected value of one spin?',
      answer: "30",
      hints: [
        'Each outcome has probability 1/5.',
        'E = (1/5)(10) + (1/5)(20) + (1/5)(30) + (1/5)(40) + (1/5)(50).',
        '= (10 + 20 + 30 + 40 + 50)/5.'
      ],
      explanation: [
        'E = (10 + 20 + 30 + 40 + 50) / 5 = 150/5.',
        '= 30.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A game costs $2 to play. You roll a die: if you get a 6, you win $10; otherwise you win nothing. What is the expected net gain per game?',
      choices: ["-$0.67", "-$0.33", "$0.33", "$0.67"],
      answer: "-$0.33",
      hints: [
        'E(net) = P(win) × net_win + P(lose) × net_lose.',
        'P(6) = 1/6, net if win = $10 − $2 = $8. P(not 6) = 5/6, net if lose = −$2.',
        'E = (1/6)(8) + (5/6)(−2).'
      ],
      explanation: [
        'E(net) = (1/6)(8) + (5/6)(−2).',
        '= 8/6 − 10/6 = −2/6 ≈ −$0.33.',
        'On average you lose about 33 cents per game.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 4,
      question: 'A spinner has sections: 50% chance of $0, 30% chance of $5, 20% chance of $15. What is the expected value?',
      choices: ["1.50", "3.00", "4.50", "6.00"],
      answer: "4.50",
      hints: [
        'E(X) = sum of (probability × value).',
        'E = 0.50 × 0 + 0.30 × 5 + 0.20 × 15.',
        'Calculate each term.'
      ],
      explanation: [
        'E = 0.50(0) + 0.30(5) + 0.20(15).',
        '= 0 + 1.50 + 3.00.',
        '= $4.50.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'You flip a coin. Heads wins $3, tails loses $1. What is the expected value per flip?',
      answer: "1",
      hints: [
        'P(heads) = 1/2, P(tails) = 1/2.',
        'E = (1/2)(3) + (1/2)(−1).',
        'Calculate.'
      ],
      explanation: [
        'E = (1/2)(3) + (1/2)(−1).',
        '= 1.5 − 0.5.',
        '= $1.00 expected gain per flip.'
      ]
    }
  ],

  // --- Topic 11: Casework Counting --- difficulty 3-4
  [
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 3-digit even numbers can be formed using the digits {1, 2, 3, 4} with no repetition?',
      answer: "12",
      hints: [
        "For a number to be even, the last digit must be even: 2 or 4.",
        "Case 1: last digit = 2 → first digit: 3 choices (1,3,4), middle: 2 choices.",
        "Case 2: last digit = 4 → first digit: 3 choices (1,2,3), middle: 2 choices."
      ],
      explanation: [
        "Case 1 (ends in 2): 3 × 2 = 6 numbers.",
        "Case 2 (ends in 4): 3 × 2 = 6 numbers.",
        "Total = 6 + 6 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'How many ways can you make change for 25 cents using only nickels and dimes?',
      choices: ["2", "3", "4", "5"],
      answer: "3",
      hints: [
        "Let n = number of nickels, d = number of dimes. Then 5n + 10d = 25.",
        "Try d = 0: 5n = 25 → n = 5. Try d = 1: 5n = 15 → n = 3.",
        "Try d = 2: 5n = 5 → n = 1. d = 3 would give 30 > 25."
      ],
      explanation: [
        "d = 0, n = 5: five nickels.",
        "d = 1, n = 3: one dime and three nickels.",
        "d = 2, n = 1: two dimes and one nickel. Total: 3 ways."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 2-digit numbers have digits that add up to 8? (First digit cannot be 0.)',
      answer: "8",
      hints: [
        "A 2-digit number has digits a and b where a + b = 8, with 1 ≤ a ≤ 9 and 0 ≤ b ≤ 9.",
        "List: a = 1,b = 7; a = 2,b = 6; ... up to a = 8,b = 0.",
        "Count all valid pairs."
      ],
      explanation: [
        "Valid pairs (a, b): (1,7), (2,6), (3,5), (4,4), (5,3), (6,2), (7,1), (8,0).",
        "That is 8 two-digit numbers: 17, 26, 35, 44, 53, 62, 71, 80."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many 3-digit numbers have all digits the same (like 111, 222, ...)?',
      choices: ["8", "9", "10", "27"],
      answer: "9",
      hints: [
        "The digit must be the same in all three positions.",
        "The hundreds digit cannot be 0 (otherwise it would not be a 3-digit number).",
        "Valid digits: 1, 2, 3, 4, 5, 6, 7, 8, 9."
      ],
      explanation: [
        "The digit can be 1 through 9 (not 0, since 000 is not a 3-digit number).",
        "Numbers: 111, 222, 333, 444, 555, 666, 777, 888, 999 → 9 numbers."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 3-digit numbers are there where the digits are strictly increasing (e.g., 135, 248)?',
      answer: "84",
      hints: [
        "Digits must satisfy a < b < c where a ≥ 1 and c ≤ 9.",
        "Choose 3 digits from {1, 2, ..., 9}; the order is determined (increasing).",
        "This equals C(9, 3)."
      ],
      explanation: [
        "Choose 3 distinct digits from {1, 2, ..., 9} and arrange them in increasing order.",
        "Number of ways = C(9, 3) = (9 × 8 × 7) / (3 × 2 × 1) = 84."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 4,
      question: 'How many ways can you make 30 cents using only nickels, dimes, and quarters?',
      choices: ["3", "4", "5", "6"],
      answer: "5",
      hints: [
        "Case by quarters: 0 quarters or 1 quarter.",
        "0 quarters: 5n + 10d = 30 → (6n,0d), (4n,1d), (2n,2d), (0n,3d) → 4 ways.",
        "1 quarter: 5¢ left → 1 nickel → 1 way. Total = 4 + 1."
      ],
      explanation: [
        "0 quarters: d=0,n=6; d=1,n=4; d=2,n=2; d=3,n=0 → 4 ways.",
        "1 quarter: remaining 5¢ = 1 nickel → 1 way.",
        "Total = 4 + 1 = 5 ways."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many 2-digit numbers have digits that sum to 10? (First digit cannot be 0.)',
      answer: "9",
      hints: [
        "Let the digits be a (tens) and b (ones), with a + b = 10.",
        "a ranges from 1 to 9, b = 10 − a ranges from 9 to 1.",
        "All pairs are valid since b stays between 0 and 9."
      ],
      explanation: [
        "Pairs (a,b): (1,9),(2,8),(3,7),(4,6),(5,5),(6,4),(7,3),(8,2),(9,1).",
        "That is 9 two-digit numbers: 19, 28, 37, 46, 55, 64, 73, 82, 91."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'How many 3-digit odd numbers can be formed from {2, 3, 5, 7} with no repetition?',
      choices: ["12", "18", "24", "36"],
      answer: "18",
      hints: [
        "For the number to be odd, the last digit must be odd: 3, 5, or 7.",
        "Case 1: last = 3 → first: 3 choices (2,5,7), middle: 2 choices → 6.",
        "Case 2: last = 5 → 6. Case 3: last = 7 → 6."
      ],
      explanation: [
        "3 cases for the last digit (3, 5, or 7).",
        "Each case: 3 × 2 = 6 numbers.",
        "Total = 3 × 6 = 18."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 3-digit numbers have digits that add up to 5? (First digit cannot be 0.)',
      answer: "15",
      hints: [
        "Let the digits be a, b, c where a + b + c = 5, a ≥ 1, b ≥ 0, c ≥ 0.",
        "Substitute a\' = a − 1, so a\' + b + c = 4 where a\' ≥ 0.",
        "Count non-negative integer solutions: C(4 + 2, 2) = C(6,2) = 15."
      ],
      explanation: [
        "Substituting a\' = a − 1, we need a\' + b + c = 4 with all ≥ 0.",
        "Number of solutions = C(6, 2) = 15.",
        "Examples: 500, 410, 401, 320, 311, 302, 230, 221, 212, 203, 140, 131, 122, 113, 104."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many 2-digit numbers have both digits even? (First digit cannot be 0.)',
      choices: ["16", "20", "25", "36"],
      answer: "20",
      hints: [
        "Even digits: 0, 2, 4, 6, 8.",
        "First digit (cannot be 0): 2, 4, 6, 8 → 4 choices.",
        "Second digit: 0, 2, 4, 6, 8 → 5 choices."
      ],
      explanation: [
        "First digit: 4 choices (2, 4, 6, 8).",
        "Second digit: 5 choices (0, 2, 4, 6, 8).",
        "Total = 4 × 5 = 20."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many ways can you make 15 cents using only nickels and dimes?',
      answer: "2",
      hints: [
        "Let n = nickels, d = dimes. Then 5n + 10d = 15.",
        "Try d = 0: n = 3. Try d = 1: 5n = 5 → n = 1.",
        "d = 2 gives 20 > 15, so only 2 ways."
      ],
      explanation: [
        "d = 0, n = 3: three nickels.",
        "d = 1, n = 1: one dime and one nickel.",
        "Total: 2 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many 3-digit numbers have all digits odd (using 1, 3, 5, 7, 9)?',
      choices: ["25", "60", "100", "125"],
      answer: "125",
      hints: [
        "Odd digits: 1, 3, 5, 7, 9 (5 choices each).",
        "Repetition is allowed since we just need all digits odd.",
        "Total = 5 × 5 × 5."
      ],
      explanation: [
        "Each of the 3 digit positions has 5 choices (1, 3, 5, 7, 9).",
        "Total = 5³ = 125."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 2-digit numbers have digits that sum to 12? (First digit cannot be 0.)',
      answer: "7",
      hints: [
        "Let the digits be a (tens) and b (ones), with a + b = 12.",
        "a ranges from 3 to 9, b = 12 − a ranges from 9 to 3.",
        "Check: a = 3 gives b = 9 ✓, ..., a = 9 gives b = 3 ✓."
      ],
      explanation: [
        "Pairs (a,b): (3,9),(4,8),(5,7),(6,6),(7,5),(8,4),(9,3).",
        "That is 7 two-digit numbers: 39, 48, 57, 66, 75, 84, 93."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 3-digit even numbers can be formed from {1, 3, 5, 6} with no repetition?',
      answer: "6",
      hints: [
        "Only one even digit available: 6. So last digit = 6.",
        "First digit: 3 choices (1, 3, 5).",
        "Middle digit: 2 remaining choices."
      ],
      explanation: [
        "Only one even digit available: 6. So last digit = 6.",
        "First digit: 3 choices, middle digit: 2 choices.",
        "Total = 3 × 2 × 1 = 6."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many 2-digit numbers have digits that sum to 7? (First digit cannot be 0.)',
      choices: ["6", "7", "8", "9"],
      answer: "7",
      hints: [
        "Let the digits be a (tens) and b (ones), with a + b = 7.",
        "a ranges from 1 to 7, b = 7 − a ranges from 6 to 0.",
        "Check: all b values are between 0 and 9."
      ],
      explanation: [
        "Pairs (a,b): (1,6),(2,5),(3,4),(4,3),(5,2),(6,1),(7,0).",
        "That is 7 two-digit numbers: 16, 25, 34, 43, 52, 61, 70."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 3-digit numbers can be formed from {2, 4, 6, 8} with no repetition where the number is less than 500?',
      answer: "12",
      hints: [
        "For a number less than 500, the first digit must be 2 or 4.",
        "Case 1: first digit = 2 → second: 3 choices, third: 2 choices → 6.",
        "Case 2: first digit = 4 → second: 3 choices, third: 2 choices → 6."
      ],
      explanation: [
        "First digit = 2: 3 × 2 = 6 numbers.",
        "First digit = 4: 3 × 2 = 6 numbers.",
        "Total = 6 + 6 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'How many ways can you make 20 cents using only nickels and dimes?',
      choices: ["2", "3", "4", "5"],
      answer: "3",
      hints: [
        "Let n = nickels, d = dimes. Then 5n + 10d = 20.",
        "Try d = 0: n = 4. Try d = 1: 5n = 10 → n = 2.",
        "Try d = 2: 5n = 0 → n = 0. d = 3 gives 30 > 20."
      ],
      explanation: [
        "d = 0, n = 4: four nickels.",
        "d = 1, n = 2: one dime and two nickels.",
        "d = 2, n = 0: two dimes. Total: 3 ways."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many 2-digit numbers have both digits odd? (First digit cannot be 0.)',
      choices: ["20", "25", "30", "36"],
      answer: "25",
      hints: [
        'Odd digits: 1, 3, 5, 7, 9.',
        'First digit (must be odd and nonzero): 5 choices.',
        'Second digit (must be odd): 5 choices.'
      ],
      explanation: [
        'First digit: 5 choices (1, 3, 5, 7, 9).',
        'Second digit: 5 choices (1, 3, 5, 7, 9).',
        'Total = 5 × 5 = 25.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 2-digit numbers have digits that sum to 9? (First digit cannot be 0.)',
      answer: "9",
      hints: [
        'Let the digits be a (tens) and b (ones), with a + b = 9.',
        'a ranges from 1 to 9, b = 9 − a ranges from 8 to 0.',
        'All pairs are valid since b stays between 0 and 9.'
      ],
      explanation: [
        'Pairs (a,b): (1,8),(2,7),(3,6),(4,5),(5,4),(6,3),(7,2),(8,1),(9,0).',
        'That is 9 two-digit numbers: 18, 27, 36, 45, 54, 63, 72, 81, 90.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many 3-digit even numbers can be formed from {1, 2, 4, 5} with no repetition?',
      answer: "12",
      hints: [
        'For the number to be even, the last digit must be even: 2 or 4.',
        'Case 1: last = 2 → first: 3 choices (1,4,5), middle: 2 choices → 6.',
        'Case 2: last = 4 → first: 3 choices (1,2,5), middle: 2 choices → 6.'
      ],
      explanation: [
        'Case 1 (ends in 2): 3 × 2 = 6 numbers.',
        'Case 2 (ends in 4): 3 × 2 = 6 numbers.',
        'Total = 6 + 6 = 12.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many two-digit numbers have digits that sum to 8?',
      answer: "8",
      hints: [
        'A two-digit number has tens digit 1-9 and units digit 0-9.',
        'List pairs (t, u) where t + u = 8 and 1 ≤ t ≤ 9, 0 ≤ u ≤ 9.',
        'Pairs: (1,7),(2,6),(3,5),(4,4),(5,3),(6,2),(7,1),(8,0).'
      ],
      explanation: [
        'Tens digit t ranges from 1 to 8 (since t + u = 8 and u ≥ 0 means t ≤ 8).',
        'For each valid t: u = 8 − t.',
        'Pairs: (1,7),(2,6),(3,5),(4,4),(5,3),(6,2),(7,1),(8,0) = 8 numbers.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 4,
      question: 'How many 3-digit numbers are palindromes (read the same forwards and backwards)?',
      choices: ["81", "90", "100", "180"],
      answer: "90",
      hints: [
        'A 3-digit palindrome has the form ABA where A = first and last digit, B = middle.',
        'A can be 1-9 (9 choices, since first digit ≠ 0).',
        'B can be 0-9 (10 choices). Total = 9 × 10.'
      ],
      explanation: [
        'Form: ABA. First digit A: 1-9 → 9 choices.',
        'Middle digit B: 0-9 → 10 choices.',
        'Last digit = A (determined). Total = 9 × 10 = 90.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 4,
      question: 'How many ways can you make 25 cents using only nickels (5¢) and dimes (10¢)?',
      answer: "3",
      hints: [
        'Let n = number of nickels, d = number of dimes.',
        '5n + 10d = 25. Simplify: n + 2d = 5.',
        'List non-negative integer solutions.'
      ],
      explanation: [
        'n + 2d = 5. d can be 0, 1, or 2.',
        'd = 0: n = 5. d = 1: n = 3. d = 2: n = 1.',
        '3 ways: (5 nickels), (3 nickels + 1 dime), (1 nickel + 2 dimes).'
      ]
    }
  ]
];

// ============================================================
// WORLD 14 — Chapter 15: Problem-Solving (11 topics)
// ============================================================
EXTRA_QUESTIONS[14] = [

  // --- Topic 0: Arithmetic & Geometric Patterns --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 5, 11, 17, 23, ___?',
      answer: "29",
      hints: [
        "Find the common difference: 11 − 5 = 6.",
        "Each term increases by 6.",
        "23 + 6 = ?"
      ],
      explanation: [
        "Common difference = 11 − 5 = 6.",
        "Next term = 23 + 6 = 29."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the next term in the geometric sequence: 3, 12, 48, 192, ___?',
      choices: ["384", "576", "768", "960"],
      answer: "768",
      hints: [
        "Find the common ratio: 12 ÷ 3 = 4.",
        "Each term is multiplied by 4.",
        "192 × 4 = ?"
      ],
      explanation: [
        "Common ratio = 12 ÷ 3 = 4.",
        "Next term = 192 × 4 = 768."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 7, 13, 19, 25, ..., what is the 10th term?',
      answer: "61",
      hints: [
        "Common difference d = 6. First term a₁ = 7.",
        "nth term = a₁ + (n − 1) × d.",
        "10th term = 7 + 9 × 6."
      ],
      explanation: [
        "a₁ = 7, d = 6.",
        "a₁₀ = 7 + (10 − 1) × 6 = 7 + 54 = 61."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the next term in the sequence: 2, 6, 18, 54, ___?',
      choices: ["72", "108", "162", "216"],
      answer: "162",
      hints: [
        "Find the pattern: 6 ÷ 2 = 3, 18 ÷ 6 = 3.",
        "This is a geometric sequence with ratio 3.",
        "54 × 3 = ?"
      ],
      explanation: [
        "Common ratio = 3.",
        "Next term = 54 × 3 = 162."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 4, 9, 14, 19, ..., what is the 8th term?',
      answer: "39",
      hints: [
        "Common difference d = 5. First term a₁ = 4.",
        "nth term = a₁ + (n − 1) × d.",
        "8th term = 4 + 7 × 5."
      ],
      explanation: [
        "a₁ = 4, d = 5.",
        "a₈ = 4 + (8 − 1) × 5 = 4 + 35 = 39."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 10, 17, 24, 31, ___?',
      choices: ["35", "37", "38", "41"],
      answer: "38",
      hints: [
        "Find the common difference: 17 − 10 = 7.",
        "Each term increases by 7.",
        "31 + 7 = ?"
      ],
      explanation: [
        "Common difference = 7.",
        "Next term = 31 + 7 = 38."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the next term in the geometric sequence: 5, 15, 45, 135, ___?',
      answer: "405",
      hints: [
        "Common ratio = 15 ÷ 5 = 3.",
        "Each term is multiplied by 3.",
        "135 × 3 = ?"
      ],
      explanation: [
        "Common ratio = 3.",
        "Next term = 135 × 3 = 405."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 8, 15, 22, 29, ..., what is the 12th term?',
      answer: "85",
      hints: [
        "Common difference d = 7. First term a₁ = 8.",
        "nth term = a₁ + (n − 1) × d.",
        "12th term = 8 + 11 × 7."
      ],
      explanation: [
        "a₁ = 8, d = 7.",
        "a₁₂ = 8 + (12 − 1) × 7 = 8 + 77 = 85."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the next term in the geometric sequence: 4, 20, 100, 500, ___?',
      choices: ["1000", "1500", "2000", "2500"],
      answer: "2500",
      hints: [
        "Find the common ratio: 20 ÷ 4 = 5.",
        "Each term is multiplied by 5.",
        "500 × 5 = ?"
      ],
      explanation: [
        "Common ratio = 20 ÷ 4 = 5.",
        "Next term = 500 × 5 = 2500."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 3, 8, 13, 18, ___?',
      answer: "23",
      hints: [
        "Find the common difference: 8 − 3 = 5.",
        "Each term increases by 5.",
        "18 + 5 = ?"
      ],
      explanation: [
        "Common difference = 5.",
        "Next term = 18 + 5 = 23."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 12, 19, 26, 33, ..., what is the 9th term?',
      answer: "68",
      hints: [
        "Common difference d = 7. First term a₁ = 12.",
        "nth term = a₁ + (n − 1) × d.",
        "9th term = 12 + 8 × 7."
      ],
      explanation: [
        "a₁ = 12, d = 7.",
        "a₉ = 12 + (9 − 1) × 7 = 12 + 56 = 68."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the next term in the geometric sequence: 2, 10, 50, 250, ___?',
      choices: ["500", "750", "1000", "1250"],
      answer: "1250",
      hints: [
        "Find the common ratio: 10 ÷ 2 = 5.",
        "Each term is multiplied by 5.",
        "250 × 5 = ?"
      ],
      explanation: [
        "Common ratio = 5.",
        "Next term = 250 × 5 = 1250."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 6, 13, 20, 27, ___?',
      answer: "34",
      hints: [
        "Find the common difference: 13 − 6 = 7.",
        "Each term increases by 7.",
        "27 + 7 = ?"
      ],
      explanation: [
        "Common difference = 7.",
        "Next term = 27 + 7 = 34."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 6, 11, 16, 21, ..., what is the 15th term?',
      answer: "76",
      hints: [
        "Common difference d = 5. First term a₁ = 6.",
        "nth term = a₁ + (n − 1) × d.",
        "15th term = 6 + 14 × 5."
      ],
      explanation: [
        "a₁ = 6, d = 5.",
        "a₁₅ = 6 + (15 − 1) × 5 = 6 + 70 = 76."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 9, 15, 21, 27, ___?',
      choices: ["30", "31", "33", "35"],
      answer: "33",
      hints: [
        "Find the common difference: 15 − 9 = 6.",
        "Each term increases by 6.",
        "27 + 6 = ?"
      ],
      explanation: [
        "Common difference = 6.",
        "Next term = 27 + 6 = 33."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the next term in the geometric sequence: 7, 21, 63, 189, ___?',
      answer: "567",
      hints: [
        "Common ratio = 21 ÷ 7 = 3.",
        "Each term is multiplied by 3.",
        "189 × 3 = ?"
      ],
      explanation: [
        "Common ratio = 3.",
        "Next term = 189 × 3 = 567."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 5, 12, 19, 26, ..., what is the 11th term?',
      answer: "75",
      hints: [
        "Common difference d = 7. First term a₁ = 5.",
        "nth term = a₁ + (n − 1) × d.",
        "11th term = 5 + 10 × 7."
      ],
      explanation: [
        "a₁ = 5, d = 7.",
        "a₁₁ = 5 + (11 − 1) × 7 = 5 + 70 = 75."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the next term in the geometric sequence: 6, 18, 54, 162, ___?',
      choices: ["324", "486", "648", "810"],
      answer: "486",
      hints: [
        'Find the common ratio: 18 ÷ 6 = 3.',
        'Each term is multiplied by 3.',
        '162 × 3 = ?'
      ],
      explanation: [
        'Common ratio = 3.',
        'Next term = 162 × 3 = 486.'
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 14, 22, 30, 38, ___?',
      answer: "46",
      hints: [
        'Find the common difference: 22 − 14 = 8.',
        'Each term increases by 8.',
        '38 + 8 = ?'
      ],
      explanation: [
        'Common difference = 8.',
        'Next term = 38 + 8 = 46.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 10, 16, 22, 28, ..., what is the 13th term?',
      answer: "82",
      hints: [
        'Common difference d = 6. First term a₁ = 10.',
        'nth term = a₁ + (n − 1) × d.',
        '13th term = 10 + 12 × 6.'
      ],
      explanation: [
        'a₁ = 10, d = 6.',
        'a₁₃ = 10 + (13 − 1) × 6 = 10 + 72 = 82.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the next term in the arithmetic sequence: 7, 13, 19, 25, ...?',
      answer: "31",
      hints: [
        'Find the common difference.',
        '13 − 7 = 6, so the common difference is 6.',
        'Next term = 25 + 6.'
      ],
      explanation: [
        'Common difference = 13 − 7 = 6.',
        'Next term = 25 + 6 = 31.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the 8th term of the geometric sequence: 2, 6, 18, 54, ...?',
      choices: ["2187", "4374", "6561", "13122"],
      answer: "4374",
      hints: [
        'Common ratio = 6/2 = 3.',
        'The nth term = first term × ratio^(n−1).',
        '8th term = 2 × 3⁷.'
      ],
      explanation: [
        'Common ratio r = 3. First term a = 2.',
        '8th term = 2 × 3⁷ = 2 × 2187.',
        '= 4374.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the arithmetic sequence 5, 12, 19, 26, ..., what is the 10th term?',
      answer: "68",
      hints: [
        'Common difference d = 12 − 5 = 7.',
        'nth term = a + (n−1)d where a = 5.',
        '10th term = 5 + 9 × 7.'
      ],
      explanation: [
        'a = 5, d = 7.',
        '10th term = 5 + (10−1)(7) = 5 + 63 = 68.'
      ]
    }
  ],

  // --- Topic 1: Special Number Patterns --- difficulty 1-2
  [
    {
      type: "mc",
      difficulty: 1,
      question: 'Which of these is a perfect square?',
      choices: ["48", "64", "72", "80"],
      answer: "64",
      hints: [
        "A perfect square is n² for some integer n.",
        "Try: 7² = 49, 8² = 64, 9² = 81.",
        "Which one matches a choice?"
      ],
      explanation: [
        "8² = 64.",
        "64 is the only perfect square among the choices."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The triangular numbers are 1, 3, 6, 10, 15, ... What is the 8th triangular number?',
      answer: "36",
      hints: [
        "The nth triangular number = n(n + 1)/2.",
        "For n = 8: 8 × 9 / 2.",
        "= 72 / 2."
      ],
      explanation: [
        "T₈ = 8 × 9 / 2 = 72 / 2 = 36.",
        "Or continue the pattern: 1, 3, 6, 10, 15, 21, 28, 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'The Fibonacci sequence starts: 1, 1, 2, 3, 5, 8, 13, ... What is the 10th Fibonacci number?',
      answer: "55",
      hints: [
        "Each term = sum of two previous terms.",
        "Continue: 1, 1, 2, 3, 5, 8, 13, 21, 34, ...",
        "What comes after 34?"
      ],
      explanation: [
        "Sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.",
        "The 10th Fibonacci number is 55."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The sum of two consecutive perfect squares is 85. What are they?',
      choices: ["36 and 49", "25 and 36", "16 and 25", "49 and 64"],
      answer: "36 and 49",
      hints: [
        "Try consecutive squares: 1,4,9,16,25,36,49,64,...",
        "Check: 36 + 49 = 85. ✓",
        "6² + 7² = 85."
      ],
      explanation: [
        "6² = 36 and 7² = 49.",
        "36 + 49 = 85. ✓"
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the 6th perfect square number?',
      answer: "36",
      hints: [
        "Perfect squares: 1², 2², 3², 4², 5², 6², ...",
        "That is: 1, 4, 9, 16, 25, ...",
        "6² = ?"
      ],
      explanation: [
        "The 6th perfect square = 6² = 36.",
        "Sequence: 1, 4, 9, 16, 25, 36."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'The sequence 1, 4, 9, 16, 25, 36, ... follows what pattern?',
      choices: ["Add 3 each time", "Perfect squares", "Prime numbers", "Triangular numbers"],
      answer: "Perfect squares",
      hints: [
        "1 = 1², 4 = 2², 9 = 3², 16 = 4².",
        "Each term is n² for n = 1, 2, 3, ...",
        "These are perfect squares."
      ],
      explanation: [
        "1, 4, 9, 16, 25, 36 = 1², 2², 3², 4², 5², 6².",
        "The pattern is perfect squares."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the 10th triangular number?',
      answer: "55",
      hints: [
        "The nth triangular number = n(n+1)/2.",
        "For n = 10: 10 × 11 / 2.",
        "= 110 / 2."
      ],
      explanation: [
        "T₁₀ = 10 × 11 / 2 = 55.",
        "Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'In the sequence 1, 1, 2, 3, 5, 8, 13, ..., what is the 9th term?',
      answer: "34",
      hints: [
        "This is the Fibonacci sequence: each term = sum of two previous.",
        "Continue: 1, 1, 2, 3, 5, 8, 13, 21, ...",
        "8th = 21, 9th = 13 + 21."
      ],
      explanation: [
        "Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34.",
        "The 9th term is 34."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the 7th perfect square number?',
      answer: "49",
      hints: [
        "Perfect squares: 1², 2², 3², ..., 7².",
        "That is: 1, 4, 9, 16, 25, 36, ...",
        "7² = ?"
      ],
      explanation: [
        "The 7th perfect square = 7² = 49.",
        "Sequence: 1, 4, 9, 16, 25, 36, 49."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The sum of two consecutive perfect squares is 113. What are they?',
      choices: ["25 and 36", "36 and 49", "49 and 64", "64 and 81"],
      answer: "49 and 64",
      hints: [
        "Try consecutive squares: 25+36=61, 36+49=85, 49+64=113.",
        "7² + 8² = 49 + 64 = 113. ✓",
        "Check: 113 matches."
      ],
      explanation: [
        "7² = 49 and 8² = 64.",
        "49 + 64 = 113. ✓"
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the 9th triangular number?',
      answer: "45",
      hints: [
        "The nth triangular number = n(n + 1)/2.",
        "For n = 9: 9 × 10 / 2.",
        "= 90 / 2."
      ],
      explanation: [
        "T₉ = 9 × 10 / 2 = 45.",
        "Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the 5th perfect square number?',
      answer: "25",
      hints: [
        "Perfect squares: 1², 2², 3², 4², 5².",
        "That is: 1, 4, 9, 16, ...",
        "5² = ?"
      ],
      explanation: [
        "The 5th perfect square = 5² = 25."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The sum of two consecutive perfect squares is 61. What are they?',
      choices: ["16 and 25", "25 and 36", "36 and 49", "9 and 16"],
      answer: "25 and 36",
      hints: [
        "Try consecutive squares: 9+16=25, 16+25=41, 25+36=61.",
        "5² + 6² = 25 + 36 = 61. ✓",
        "Check: 61 matches."
      ],
      explanation: [
        "5² = 25 and 6² = 36.",
        "25 + 36 = 61. ✓"
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, ..., what is the 11th term?',
      answer: "89",
      hints: [
        "Continue: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...",
        "F₁₀ = 55, F₁₁ = F₉ + F₁₀.",
        "F₉ = 34, so F₁₁ = 34 + 55."
      ],
      explanation: [
        "F₉ = 34, F₁₀ = 55.",
        "F₁₁ = 34 + 55 = 89."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'Which of these is a perfect square?',
      choices: ["50", "72", "81", "90"],
      answer: "81",
      hints: [
        "A perfect square is n² for some integer n.",
        "Try: 8² = 64, 9² = 81, 10² = 100.",
        "Which one matches a choice?"
      ],
      explanation: [
        "9² = 81.",
        "81 is the only perfect square among the choices."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the 12th triangular number?',
      answer: "78",
      hints: [
        "The nth triangular number = n(n + 1)/2.",
        "For n = 12: 12 × 13 / 2.",
        "= 156 / 2."
      ],
      explanation: [
        "T₁₂ = 12 × 13 / 2 = 156 / 2 = 78."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The sum of two consecutive perfect squares is 145. What are they?',
      choices: ["49 and 64", "64 and 81", "36 and 49", "81 and 100"],
      answer: "64 and 81",
      hints: [
        "Try consecutive squares: 49+64=113, 64+81=145.",
        "8² + 9² = 64 + 81 = 145. ✓",
        "Check: 145 matches."
      ],
      explanation: [
        "8² = 64 and 9² = 81.",
        "64 + 81 = 145. ✓"
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the 9th perfect square number?',
      answer: "81",
      hints: [
        'Perfect squares: 1², 2², 3², ..., 9².',
        'That is: 1, 4, 9, 16, 25, 36, 49, 64, ...',
        '9² = ?'
      ],
      explanation: [
        'The 9th perfect square = 9² = 81.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'The sum of two consecutive perfect squares is 181. What are they?',
      choices: ["64 and 81", "81 and 100", "100 and 121", "49 and 64"],
      answer: "81 and 100",
      hints: [
        'Try consecutive squares: 64+81=145, 81+100=181.',
        '9² + 10² = 81 + 100 = 181. ✓',
        'Check: 181 matches.'
      ],
      explanation: [
        '9² = 81 and 10² = 100.',
        '81 + 100 = 181. ✓'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the 11th triangular number?',
      answer: "66",
      hints: [
        'The nth triangular number = n(n + 1)/2.',
        'For n = 11: 11 × 12 / 2.',
        '= 132 / 2.'
      ],
      explanation: [
        'T₁₁ = 11 × 12 / 2 = 132 / 2 = 66.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the 7th triangular number?',
      answer: "28",
      hints: [
        'The nth triangular number = n(n+1)/2.',
        'For n = 7: 7 × 8 / 2.',
        '56 / 2 = 28.'
      ],
      explanation: [
        'T₇ = 7(7+1)/2 = 7 × 8 / 2.',
        '= 56/2 = 28.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 1,
      question: 'Which of the following is a perfect square?',
      choices: ["120", "144", "150", "160"],
      answer: "144",
      hints: [
        'A perfect square is n² for some integer n.',
        'Check: 12² = 144.',
        '144 is a perfect square.'
      ],
      explanation: [
        '12 × 12 = 144.',
        '144 is a perfect square (12²).',
        'The others are not perfect squares.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'The first five pentagonal numbers are 1, 5, 12, 22, 35. What is the 6th pentagonal number? (Hint: look at the differences between consecutive terms.)',
      answer: "51",
      hints: [
        'Differences: 5−1=4, 12−5=7, 22−12=10, 35−22=13.',
        'The differences increase by 3 each time: 4, 7, 10, 13, ...',
        'Next difference = 16. So 6th number = 35 + 16.'
      ],
      explanation: [
        'Differences: 4, 7, 10, 13. Each increases by 3.',
        'Next difference = 13 + 3 = 16.',
        '6th pentagonal number = 35 + 16 = 51.'
      ]
    }
  ],

  // --- Topic 2: Working Backwards --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'I think of a number, double it, add 7, and get 31. What was the number?',
      answer: "12",
      hints: [
        "Work backwards: start from 31.",
        "Undo 'add 7': 31 − 7 = 24.",
        "Undo 'double it': 24 ÷ 2 = ?"
      ],
      explanation: [
        "Start with 31.",
        "Undo +7: 31 − 7 = 24.",
        "Undo ×2: 24 ÷ 2 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'After tripling a number and subtracting 5, the result is 22. What was the original number?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "Work backwards from 22.",
        "Undo 'subtract 5': 22 + 5 = 27.",
        "Undo 'triple': 27 ÷ 3 = ?"
      ],
      explanation: [
        "Undo subtract 5: 22 + 5 = 27.",
        "Undo triple: 27 ÷ 3 = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A number is halved, then 10 is added, giving 19. What was the original number?',
      answer: "18",
      hints: [
        "Start from 19 and reverse each step.",
        "Undo 'add 10': 19 − 10 = 9.",
        "Undo 'halved': 9 × 2 = ?"
      ],
      explanation: [
        "Undo +10: 19 − 10 = 9.",
        "Undo ÷2: 9 × 2 = 18."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'I think of a number, multiply it by 5, subtract 3, and get 42. What was the number?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "Work backwards from 42.",
        "Undo subtract 3: 42 + 3 = 45.",
        "Undo multiply by 5: 45 ÷ 5 = ?"
      ],
      explanation: [
        "Undo −3: 42 + 3 = 45.",
        "Undo ×5: 45 ÷ 5 = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A number is tripled and then 4 is added, giving 25. What was the original number?',
      answer: "7",
      hints: [
        "Start from 25 and reverse the steps.",
        "Undo add 4: 25 − 4 = 21.",
        "Undo triple: 21 ÷ 3 = ?"
      ],
      explanation: [
        "Undo +4: 25 − 4 = 21.",
        "Undo ×3: 21 ÷ 3 = 7."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'I think of a number, multiply by 4, then subtract 10, and get 26. What was the number?',
      choices: ["4", "7", "9", "12"],
      answer: "9",
      hints: [
        "Work backwards from 26.",
        "Undo subtract 10: 26 + 10 = 36.",
        "Undo multiply by 4: 36 ÷ 4 = ?"
      ],
      explanation: [
        "Undo −10: 26 + 10 = 36.",
        "Undo ×4: 36 ÷ 4 = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A number is doubled, then 15 is subtracted, then the result is divided by 5, giving 3. What was the original number?',
      answer: "15",
      hints: [
        "Work backwards from 3.",
        "Undo divide by 5: 3 × 5 = 15.",
        "Undo subtract 15: 15 + 15 = 30. Undo double: 30 ÷ 2 = ?"
      ],
      explanation: [
        "Undo ÷5: 3 × 5 = 15.",
        "Undo −15: 15 + 15 = 30.",
        "Undo ×2: 30 ÷ 2 = 15."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A number is divided by 3, then 8 is added, giving 14. What was the original number?',
      answer: "18",
      hints: [
        "Work backwards from 14.",
        "Undo add 8: 14 − 8 = 6.",
        "Undo divide by 3: 6 × 3 = ?"
      ],
      explanation: [
        "Undo +8: 14 − 8 = 6.",
        "Undo ÷3: 6 × 3 = 18."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A number is quadrupled and then 6 is subtracted, giving 30. What was the number?',
      choices: ["6", "8", "9", "10"],
      answer: "9",
      hints: [
        "Work backwards from 30.",
        "Undo subtract 6: 30 + 6 = 36.",
        "Undo quadruple: 36 ÷ 4 = ?"
      ],
      explanation: [
        "Undo −6: 30 + 6 = 36.",
        "Undo ×4: 36 ÷ 4 = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'I think of a number, multiply it by 6, add 11, and get 83. What was the number?',
      answer: "12",
      hints: [
        "Work backwards from 83.",
        "Undo add 11: 83 − 11 = 72.",
        "Undo multiply by 6: 72 ÷ 6 = ?"
      ],
      explanation: [
        "Undo +11: 83 − 11 = 72.",
        "Undo ×6: 72 ÷ 6 = 12."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A number is tripled, then 20 is added, then divided by 7, giving 5. What was the original number?',
      answer: "5",
      hints: [
        "Work backwards from 5.",
        "Undo divide by 7: 5 × 7 = 35.",
        "Undo add 20: 35 − 20 = 15. Undo triple: 15 ÷ 3 = ?"
      ],
      explanation: [
        "Undo ÷7: 5 × 7 = 35.",
        "Undo +20: 35 − 20 = 15.",
        "Undo ×3: 15 ÷ 3 = 5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'I think of a number, multiply by 7, then subtract 9, and get 54. What was the number?',
      answer: "9",
      hints: [
        "Work backwards from 54.",
        "Undo subtract 9: 54 + 9 = 63.",
        "Undo multiply by 7: 63 ÷ 7 = ?"
      ],
      explanation: [
        "Undo −9: 54 + 9 = 63.",
        "Undo ×7: 63 ÷ 7 = 9."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A number is doubled, then 3 is subtracted, giving 17. What was the number?',
      choices: ["7", "8", "9", "10"],
      answer: "10",
      hints: [
        "Work backwards from 17.",
        "Undo subtract 3: 17 + 3 = 20.",
        "Undo double: 20 ÷ 2 = ?"
      ],
      explanation: [
        "Undo −3: 17 + 3 = 20.",
        "Undo ×2: 20 ÷ 2 = 10."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A number is halved, then multiplied by 5, then 4 is added, giving 24. What was the original number?',
      answer: "8",
      hints: [
        "Work backwards from 24.",
        "Undo add 4: 24 − 4 = 20.",
        "Undo multiply by 5: 20 ÷ 5 = 4. Undo halved: 4 × 2 = ?"
      ],
      explanation: [
        "Undo +4: 24 − 4 = 20.",
        "Undo ×5: 20 ÷ 5 = 4.",
        "Undo ÷2: 4 × 2 = 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A number is tripled and then 9 is subtracted, giving 27. What was the original number?',
      answer: "12",
      hints: [
        "Work backwards from 27.",
        "Undo subtract 9: 27 + 9 = 36.",
        "Undo triple: 36 ÷ 3 = ?"
      ],
      explanation: [
        "Undo −9: 27 + 9 = 36.",
        "Undo ×3: 36 ÷ 3 = 12."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'I think of a number, multiply it by 8, then subtract 14, and get 50. What was the number?',
      choices: ["6", "7", "8", "9"],
      answer: "8",
      hints: [
        "Work backwards from 50.",
        "Undo subtract 14: 50 + 14 = 64.",
        "Undo multiply by 8: 64 ÷ 8 = ?"
      ],
      explanation: [
        "Undo −14: 50 + 14 = 64.",
        "Undo ×8: 64 ÷ 8 = 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A number is doubled, then 7 is added, then divided by 3, giving 9. What was the original number?',
      answer: "10",
      hints: [
        "Work backwards from 9.",
        "Undo divide by 3: 9 × 3 = 27.",
        "Undo add 7: 27 − 7 = 20. Undo double: 20 ÷ 2 = ?"
      ],
      explanation: [
        "Undo ÷3: 9 × 3 = 27.",
        "Undo +7: 27 − 7 = 20.",
        "Undo ×2: 20 ÷ 2 = 10."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'I think of a number, multiply it by 9, subtract 17, and get 64. What was the number?',
      answer: "9",
      hints: [
        'Work backwards from 64.',
        'Undo subtract 17: 64 + 17 = 81.',
        'Undo multiply by 9: 81 ÷ 9 = ?'
      ],
      explanation: [
        'Undo −17: 64 + 17 = 81.',
        'Undo ×9: 81 ÷ 9 = 9.'
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A number is doubled and then 11 is added, giving 35. What was the number?',
      choices: ["10", "11", "12", "13"],
      answer: "12",
      hints: [
        'Work backwards from 35.',
        'Undo add 11: 35 − 11 = 24.',
        'Undo double: 24 ÷ 2 = ?'
      ],
      explanation: [
        'Undo +11: 35 − 11 = 24.',
        'Undo ×2: 24 ÷ 2 = 12.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A number is quadrupled, then 12 is subtracted, then divided by 4, giving 7. What was the original number?',
      answer: "10",
      hints: [
        'Work backwards from 7.',
        'Undo divide by 4: 7 × 4 = 28.',
        'Undo subtract 12: 28 + 12 = 40. Undo quadruple: 40 ÷ 4 = ?'
      ],
      explanation: [
        'Undo ÷4: 7 × 4 = 28.',
        'Undo −12: 28 + 12 = 40.',
        'Undo ×4: 40 ÷ 4 = 10.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'A number is tripled and then 7 is added to get 40. What was the original number?',
      answer: "11",
      hints: [
        'Work backwards: reverse the last operation first.',
        'Undo "add 7": 40 − 7 = 33.',
        'Undo "triple": 33 ÷ 3 = 11.'
      ],
      explanation: [
        'Start from 40.',
        'Undo adding 7: 40 − 7 = 33.',
        'Undo tripling: 33 ÷ 3 = 11.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'Maria had some stickers. She gave half to her friend, then bought 10 more, and now has 34. How many did she start with?',
      choices: ["24", "44", "48", "58"],
      answer: "48",
      hints: [
        'Work backwards from 34.',
        'Before buying 10: 34 − 10 = 24.',
        'Before giving half away: 24 was half, so original = 24 × 2.'
      ],
      explanation: [
        'End: 34. Before buying 10: 34 − 10 = 24.',
        '24 is what remained after giving half away.',
        'Original = 24 × 2 = 48 stickers.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'A number is doubled, then 5 is subtracted, then the result is divided by 3, giving 9. What was the original number?',
      answer: "16",
      hints: [
        'Work backwards from 9.',
        'Undo "divide by 3": 9 × 3 = 27.',
        'Undo "subtract 5": 27 + 5 = 32. Undo "double": 32 ÷ 2 = 16.'
      ],
      explanation: [
        'Start from 9. Undo ÷3: 9 × 3 = 27.',
        'Undo −5: 27 + 5 = 32.',
        'Undo ×2: 32 ÷ 2 = 16.'
      ]
    }
  ],

  // --- Topic 3: Gauss's Summation --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + ... + 20?',
      answer: "210",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "n = 20: 20 × 21 / 2.",
        "= 420 / 2."
      ],
      explanation: [
        "Sum = n(n + 1)/2 = 20 × 21 / 2.",
        "= 420 / 2 = 210."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the sum of the first 50 positive integers?',
      choices: ["1250", "1275", "1300", "2500"],
      answer: "1275",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "50 × 51 / 2.",
        "= 2550 / 2."
      ],
      explanation: [
        "Sum = 50 × 51 / 2.",
        "= 2550 / 2 = 1275."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the sum of all even numbers from 2 to 30.',
      answer: "240",
      hints: [
        "The even numbers are 2, 4, 6, ..., 30. That is 15 terms.",
        "Sum = 2 + 4 + ... + 30 = 2(1 + 2 + ... + 15).",
        "= 2 × 15 × 16 / 2 = 15 × 16."
      ],
      explanation: [
        "Factor out 2: sum = 2(1 + 2 + ... + 15) = 2 × (15 × 16 / 2).",
        "= 15 × 16 = 240."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of all odd numbers from 1 to 19?',
      answer: "100",
      hints: [
        "Odd numbers: 1, 3, 5, ..., 19. There are 10 terms.",
        "The sum of the first n odd numbers = n².",
        "n = 10, so sum = 10²."
      ],
      explanation: [
        "There are 10 odd numbers from 1 to 19.",
        "Sum of first 10 odd numbers = 10² = 100."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + ... + 10?',
      choices: ["45", "50", "55", "60"],
      answer: "55",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "n = 10: 10 × 11 / 2.",
        "= 110 / 2."
      ],
      explanation: [
        "Sum = 10 × 11 / 2.",
        "= 110 / 2 = 55."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is 1 + 2 + 3 + ... + 30?',
      answer: "465",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "n = 30: 30 × 31 / 2.",
        "= 930 / 2."
      ],
      explanation: [
        "Sum = 30 × 31 / 2 = 930 / 2 = 465."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8?',
      choices: ["28", "32", "36", "40"],
      answer: "36",
      hints: [
        "Use Gauss\'s formula: n(n+1)/2.",
        "n = 8: 8 × 9 / 2.",
        "= 72 / 2."
      ],
      explanation: [
        "Sum = 8 × 9 / 2 = 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the sum of all even numbers from 2 to 20.',
      answer: "110",
      hints: [
        "Even numbers: 2, 4, 6, ..., 20. That is 10 terms.",
        "Sum = 2(1 + 2 + ... + 10) = 2 × 55.",
        "= 110."
      ],
      explanation: [
        "Sum = 2 + 4 + ... + 20 = 2(1 + 2 + ... + 10).",
        "= 2 × (10 × 11 / 2) = 2 × 55 = 110."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + ... + 15?',
      answer: "120",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "n = 15: 15 × 16 / 2.",
        "= 240 / 2."
      ],
      explanation: [
        "Sum = 15 × 16 / 2.",
        "= 240 / 2 = 120."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the sum of the first 100 positive integers?',
      choices: ["4950", "5000", "5050", "5100"],
      answer: "5050",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "100 × 101 / 2.",
        "= 10100 / 2."
      ],
      explanation: [
        "Sum = 100 × 101 / 2.",
        "= 10100 / 2 = 5050."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the sum of all odd numbers from 1 to 29.',
      answer: "225",
      hints: [
        "Odd numbers: 1, 3, 5, ..., 29. There are 15 terms.",
        "The sum of the first n odd numbers = n².",
        "n = 15, so sum = 15²."
      ],
      explanation: [
        "There are 15 odd numbers from 1 to 29.",
        "Sum of first 15 odd numbers = 15² = 225."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + ... + 12?',
      answer: "78",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "n = 12: 12 × 13 / 2.",
        "= 156 / 2."
      ],
      explanation: [
        "Sum = 12 × 13 / 2.",
        "= 156 / 2 = 78."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the sum of all even numbers from 2 to 16?',
      choices: ["56", "64", "72", "80"],
      answer: "72",
      hints: [
        "Even numbers: 2, 4, 6, ..., 16. That is 8 terms.",
        "Sum = 2(1 + 2 + ... + 8) = 2 × 36.",
        "= 72."
      ],
      explanation: [
        "Sum = 2 + 4 + ... + 16 = 2(1 + 2 + ... + 8).",
        "= 2 × (8 × 9 / 2) = 2 × 36 = 72."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of all odd numbers from 1 to 15?',
      answer: "64",
      hints: [
        "Odd numbers: 1, 3, 5, ..., 15. There are 8 terms.",
        "The sum of the first n odd numbers = n².",
        "n = 8, so sum = 8²."
      ],
      explanation: [
        "There are 8 odd numbers from 1 to 15.",
        "Sum of first 8 odd numbers = 8² = 64."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + ... + 25?',
      answer: "325",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "n = 25: 25 × 26 / 2.",
        "= 650 / 2."
      ],
      explanation: [
        "Sum = 25 × 26 / 2.",
        "= 650 / 2 = 325."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the sum of the first 40 positive integers?',
      choices: ["780", "800", "820", "840"],
      answer: "820",
      hints: [
        "Use Gauss\'s formula: n(n + 1)/2.",
        "40 × 41 / 2.",
        "= 1640 / 2."
      ],
      explanation: [
        "Sum = 40 × 41 / 2.",
        "= 1640 / 2 = 820."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the sum of all even numbers from 2 to 24.',
      answer: "156",
      hints: [
        "Even numbers: 2, 4, 6, ..., 24. That is 12 terms.",
        "Sum = 2(1 + 2 + ... + 12) = 2 × 12 × 13 / 2.",
        "= 12 × 13."
      ],
      explanation: [
        "Sum = 2 + 4 + ... + 24 = 2(1 + 2 + ... + 12).",
        "= 2 × (12 × 13 / 2) = 12 × 13 = 156."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is 1 + 2 + 3 + ... + 18?',
      answer: "171",
      hints: [
        'Use Gauss\'s formula: n(n + 1)/2.',
        'n = 18: 18 × 19 / 2.',
        '= 342 / 2.'
      ],
      explanation: [
        'Sum = 18 × 19 / 2.',
        '= 342 / 2 = 171.'
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the sum of the first 60 positive integers?',
      choices: ["1770", "1800", "1830", "1860"],
      answer: "1830",
      hints: [
        'Use Gauss\'s formula: n(n + 1)/2.',
        '60 × 61 / 2.',
        '= 3660 / 2.'
      ],
      explanation: [
        'Sum = 60 × 61 / 2.',
        '= 3660 / 2 = 1830.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the sum of all odd numbers from 1 to 25.',
      answer: "169",
      hints: [
        'Odd numbers: 1, 3, 5, ..., 25. There are 13 terms.',
        'The sum of the first n odd numbers = n².',
        'n = 13, so sum = 13².'
      ],
      explanation: [
        'There are 13 odd numbers from 1 to 25.',
        'Sum of first 13 odd numbers = 13² = 169.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'What is the sum 1 + 2 + 3 + ... + 30?',
      answer: "465",
      hints: [
        'Use the Gauss formula: Sum = n(n+1)/2.',
        'n = 30.',
        '30 × 31 / 2.'
      ],
      explanation: [
        'Sum = n(n+1)/2 = 30 × 31 / 2.',
        '= 930 / 2 = 465.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the sum of all even numbers from 2 to 50?',
      choices: ["600", "625", "650", "1275"],
      answer: "650",
      hints: [
        'Even numbers: 2, 4, 6, ..., 50.',
        'Factor out 2: 2(1 + 2 + 3 + ... + 25).',
        'Use Gauss: 2 × 25 × 26 / 2.'
      ],
      explanation: [
        'Sum = 2 + 4 + ... + 50 = 2(1 + 2 + ... + 25).',
        '= 2 × (25 × 26 / 2) = 2 × 325.',
        '= 650.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'Find the sum: 5 + 10 + 15 + 20 + ... + 100.',
      answer: "1050",
      hints: [
        'This is 5(1 + 2 + 3 + ... + 20).',
        'Use Gauss: 5 × 20 × 21 / 2.',
        'Calculate step by step.'
      ],
      explanation: [
        'Sum = 5 + 10 + ... + 100 = 5(1 + 2 + ... + 20).',
        '= 5 × (20 × 21 / 2) = 5 × 210.',
        '= 1050.'
      ]
    }
  ],

  // --- Topic 4: Visual Counting --- difficulty 1-2
  [
    {
      type: "numeric",
      difficulty: 1,
      question: 'A 3×3 grid is made of unit squares. How many unit squares are in the grid?',
      answer: "9",
      hints: [
        "Count the small 1×1 squares.",
        "Each row has 3 squares, and there are 3 rows.",
        "3 × 3 = ?"
      ],
      explanation: [
        "A 3×3 grid has 3 rows and 3 columns of unit squares.",
        "Total unit squares = 3 × 3 = 9."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many rectangles (of any size) are in a 1×3 grid (1 row, 3 columns)?',
      choices: ["3", "4", "5", "6"],
      answer: "6",
      hints: [
        "Count 1×1: 3, 1×2: 2, 1×3: 1.",
        "Add them up.",
        "3 + 2 + 1 = ?"
      ],
      explanation: [
        "1×1 rectangles: 3. 1×2 rectangles: 2. 1×3 rectangles: 1.",
        "Total = 3 + 2 + 1 = 6."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many triangles are formed when you draw all diagonals from one vertex of a regular hexagon?',
      answer: "4",
      hints: [
        "A hexagon has 6 vertices.",
        "Drawing diagonals from one vertex splits it into triangles.",
        "From one vertex, you can draw 3 diagonals, creating 4 triangles."
      ],
      explanation: [
        "A hexagon can be divided into triangles by drawing diagonals from one vertex.",
        "From one vertex, 3 diagonals create 4 non-overlapping triangles."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A 4×4 grid of dots is arranged in a square. How many total dots are there?',
      choices: ["8", "12", "16", "20"],
      answer: "16",
      hints: [
        "A 4×4 grid means 4 rows and 4 columns.",
        "Each row has 4 dots.",
        "4 × 4 = ?"
      ],
      explanation: [
        "4 rows × 4 columns = 16 dots.",
        "Total dots = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'How many line segments can be drawn connecting any 2 of 4 dots (no three dots are collinear)?',
      answer: "6",
      hints: [
        "Choose 2 dots from 4 to form a segment.",
        "This is C(4, 2) = 4 × 3 / 2.",
        "= 6."
      ],
      explanation: [
        "Number of segments = C(4, 2) = (4 × 3) / (2 × 1).",
        "= 6."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'How many rectangles (of any size) are in a 2×2 grid?',
      choices: ["4", "8", "9", "12"],
      answer: "9",
      hints: [
        "Count by size: 1×1: 4, 1×2: 2, 2×1: 2, 2×2: 1.",
        "Total = 4 + 2 + 2 + 1.",
        "= 9."
      ],
      explanation: [
        "1×1: 4, 1×2: 2 (horizontal), 2×1: 2 (vertical), 2×2: 1.",
        "Total rectangles = 4 + 2 + 2 + 1 = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A 4×4 grid is made of unit squares. How many unit squares are in the grid?',
      answer: "16",
      hints: [
        "Count the small 1×1 squares.",
        "Each row has 4 squares, and there are 4 rows.",
        "4 × 4 = ?"
      ],
      explanation: [
        "A 4×4 grid has 4 rows and 4 columns.",
        "Total unit squares = 4 × 4 = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A pentagon has 5 vertices. How many diagonals does it have?',
      answer: "5",
      hints: [
        "Number of diagonals = n(n − 3)/2.",
        "n = 5: 5 × (5 − 3) / 2.",
        "= 5 × 2 / 2."
      ],
      explanation: [
        "Diagonals = n(n − 3)/2 = 5 × 2 / 2 = 5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many line segments can be drawn connecting any 2 of 6 dots (no three dots are collinear)?',
      answer: "15",
      hints: [
        "Choose 2 dots from 6 to form a segment.",
        "This is C(6, 2) = 6 × 5 / 2.",
        "= 15."
      ],
      explanation: [
        "Number of segments = C(6, 2) = (6 × 5) / (2 × 1).",
        "= 15."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A 5×5 grid is made of unit squares. How many unit squares are in the grid?',
      choices: ["20", "25", "30", "36"],
      answer: "25",
      hints: [
        "Count the small 1×1 squares.",
        "Each row has 5, and there are 5 rows.",
        "5 × 5 = ?"
      ],
      explanation: [
        "A 5×5 grid has 5 rows and 5 columns.",
        "Total unit squares = 5 × 5 = 25."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A hexagon has 6 vertices. How many diagonals does it have?',
      answer: "9",
      hints: [
        "Number of diagonals = n(n − 3)/2.",
        "n = 6: 6 × (6 − 3) / 2.",
        "= 6 × 3 / 2."
      ],
      explanation: [
        "Diagonals = n(n − 3)/2 = 6 × 3 / 2 = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 1,
      question: 'A 2×2 grid is made of unit squares. How many unit squares are in the grid?',
      answer: "4",
      hints: [
        "Count the small 1×1 squares.",
        "2 rows × 2 columns.",
        "2 × 2 = ?"
      ],
      explanation: [
        "A 2×2 grid has 2 rows and 2 columns.",
        "Total unit squares = 2 × 2 = 4."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'How many line segments can be drawn connecting any 2 of 5 dots (no three collinear)?',
      choices: ["5", "8", "10", "20"],
      answer: "10",
      hints: [
        "Choose 2 dots from 5 to form a segment.",
        "This is C(5, 2) = 5 × 4 / 2.",
        "= 10."
      ],
      explanation: [
        "Number of segments = C(5, 2) = (5 × 4) / 2 = 10."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'An octagon has 8 vertices. How many diagonals does it have?',
      answer: "20",
      hints: [
        "Number of diagonals = n(n − 3)/2.",
        "n = 8: 8 × (8 − 3) / 2.",
        "= 8 × 5 / 2."
      ],
      explanation: [
        "Diagonals = n(n − 3)/2 = 8 × 5 / 2 = 20."
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A 3×3 grid of dots has 3 rows and 3 columns. How many total dots are there?',
      choices: ["6", "8", "9", "12"],
      answer: "9",
      hints: [
        "A 3×3 grid means 3 rows and 3 columns.",
        "Each row has 3 dots.",
        "3 × 3 = ?"
      ],
      explanation: [
        "3 rows × 3 columns = 9 dots.",
        "Total dots = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A heptagon (7 sides) has 7 vertices. How many diagonals does it have?',
      answer: "14",
      hints: [
        "Number of diagonals = n(n − 3)/2.",
        "n = 7: 7 × (7 − 3) / 2.",
        "= 7 × 4 / 2."
      ],
      explanation: [
        "Diagonals = n(n − 3)/2 = 7 × 4 / 2 = 14."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many line segments can be drawn connecting any 2 of 8 dots (no three dots are collinear)?',
      answer: "28",
      hints: [
        "Choose 2 dots from 8 to form a segment.",
        "This is C(8, 2) = 8 × 7 / 2.",
        "= 28."
      ],
      explanation: [
        "Number of segments = C(8, 2) = (8 × 7) / (2 × 1).",
        "= 28."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A decagon (10 sides) has 10 vertices. How many diagonals does it have?',
      answer: "35",
      hints: [
        'Number of diagonals = n(n − 3)/2.',
        'n = 10: 10 × (10 − 3) / 2.',
        '= 10 × 7 / 2.'
      ],
      explanation: [
        'Diagonals = n(n − 3)/2 = 10 × 7 / 2 = 35.'
      ]
    },
    {
      type: "mc",
      difficulty: 1,
      question: 'A 6×6 grid is made of unit squares. How many unit squares are in the grid?',
      choices: ["24", "30", "36", "42"],
      answer: "36",
      hints: [
        'Count the small 1×1 squares.',
        'Each row has 6, and there are 6 rows.',
        '6 × 6 = ?'
      ],
      explanation: [
        'A 6×6 grid has 6 rows and 6 columns.',
        'Total unit squares = 6 × 6 = 36.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many line segments can be drawn connecting any 2 of 9 dots (no three dots are collinear)?',
      answer: "36",
      hints: [
        'Choose 2 dots from 9 to form a segment.',
        'This is C(9, 2) = 9 × 8 / 2.',
        '= 36.'
      ],
      explanation: [
        'Number of segments = C(9, 2) = (9 × 8) / (2 × 1).',
        '= 36.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 1,
      question: 'How many line segments can be drawn connecting pairs of 5 dots arranged in a line?',
      answer: "10",
      hints: [
        'Each pair of dots can be connected by one segment.',
        'Number of pairs = C(5,2) = 5×4/2.',
        '= 10.'
      ],
      explanation: [
        'Number of line segments = number of pairs of 5 points.',
        'C(5,2) = 5! / (2! × 3!) = 10.',
        '10 line segments.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A triangle is divided by drawing lines from each vertex to the midpoint of the opposite side. How many smaller triangles are formed inside?',
      choices: ["3", "4", "6", "9"],
      answer: "6",
      hints: [
        'Drawing all three medians of a triangle creates 6 smaller triangles.',
        'The medians intersect at the centroid.',
        'Each median divides the triangle, creating 6 regions.'
      ],
      explanation: [
        'The three medians of a triangle divide it into exactly 6 smaller triangles.',
        'All 6 triangles have equal area.',
        'Answer = 6.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many rectangles (including squares) are in a 2×3 grid?',
      answer: "18",
      hints: [
        'A 2×3 grid has 3 horizontal lines and 4 vertical lines.',
        'Choose 2 horizontal lines: C(3,2) = 3.',
        'Choose 2 vertical lines: C(4,2) = 6. Multiply.'
      ],
      explanation: [
        'Horizontal lines = 3. Choose 2: C(3,2) = 3.',
        'Vertical lines = 4. Choose 2: C(4,2) = 6.',
        'Total rectangles = 3 × 6 = 18.'
      ]
    }
  ],

  // --- Topic 5: Units Digit Patterns --- difficulty 2-3
  [
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the units digit of 7¹⁰?',
      choices: ["1", "3", "7", "9"],
      answer: "9",
      hints: [
        "Find the pattern of units digits: 7¹ = 7, 7² = 49, 7³ = 343, 7⁴ = 2401.",
        "Units digits cycle: 7, 9, 3, 1 (period 4).",
        "10 ÷ 4 = 2 remainder 2. The 2nd in the cycle is 9."
      ],
      explanation: [
        "Units digit cycle of powers of 7: 7, 9, 3, 1 (repeats every 4).",
        "10 mod 4 = 2, so the units digit matches 7² → 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of 3²⁰?',
      answer: "1",
      hints: [
        "Units digits of powers of 3: 3, 9, 7, 1, 3, 9, 7, 1, ...",
        "The cycle length is 4.",
        "20 ÷ 4 = 5 with remainder 0. Remainder 0 → last in cycle (1)."
      ],
      explanation: [
        "Cycle: 3, 9, 7, 1 (period 4).",
        "20 mod 4 = 0, which corresponds to the 4th position → 1."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of 2⁵³?',
      choices: ["2", "4", "6", "8"],
      answer: "2",
      hints: [
        "Powers of 2 have units digits: 2, 4, 8, 6, 2, 4, 8, 6, ...",
        "The cycle has length 4.",
        "53 mod 4 = 1. The 1st in the cycle is 2."
      ],
      explanation: [
        "Cycle: 2, 4, 8, 6 (period 4).",
        "53 mod 4 = 1, so the units digit is 2."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the units digit of <span class="math">4^{15}</span>?',
      answer: "4",
      hints: [
        "Powers of 4: 4¹ = 4, 4² = 16, 4³ = 64, 4⁴ = 256.",
        "Units digits cycle: 4, 6, 4, 6, ... (period 2).",
        "15 is odd, so the units digit matches 4¹."
      ],
      explanation: [
        "Cycle of units digits of 4ⁿ: 4, 6 (period 2).",
        "15 mod 2 = 1, so units digit = 4."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">9^{44}</span>?',
      choices: ["1", "3", "7", "9"],
      answer: "1",
      hints: [
        "Powers of 9: 9¹ = 9, 9² = 81, 9³ = 729, 9⁴ = 6561.",
        "Units digits cycle: 9, 1, 9, 1, ... (period 2).",
        "44 is even, so the units digit matches 9²."
      ],
      explanation: [
        "Cycle: 9, 1 (period 2).",
        "44 mod 2 = 0, which corresponds to the 2nd position → 1."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of 4⁴⁰?',
      answer: "6",
      hints: [
        "Powers of 4: 4¹ = 4, 4² = 16, 4³ = 64, 4⁴ = 256.",
        "Units digits cycle: 4, 6, 4, 6, ... (period 2).",
        "40 is even, so units digit matches 4² → 6."
      ],
      explanation: [
        "Cycle: 4, 6 (period 2). Even exponents give 6.",
        "40 is even, so units digit = 6."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the units digit of 9³³?',
      choices: ["1", "3", "7", "9"],
      answer: "9",
      hints: [
        "Powers of 9: 9¹ = 9, 9² = 81, 9³ = 729, 9⁴ = 6561.",
        "Units digits cycle: 9, 1, 9, 1, ... (period 2).",
        "33 is odd, so units digit = 9."
      ],
      explanation: [
        "Cycle: 9, 1 (period 2). Odd exponents give 9.",
        "33 is odd, so units digit = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of 6¹⁰⁰?',
      answer: "6",
      hints: [
        "6¹ = 6, 6² = 36, 6³ = 216.",
        "The units digit of any power of 6 is always 6.",
        "So 6¹⁰⁰ has units digit 6."
      ],
      explanation: [
        "Any positive power of 6 ends in 6.",
        "Units digit of 6¹⁰⁰ = 6."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the units digit of 8¹⁷?',
      choices: ["2", "4", "6", "8"],
      answer: "8",
      hints: [
        "Powers of 8: 8¹=8, 8²=64, 8³=512, 8⁴=4096.",
        "Units digits cycle: 8, 4, 2, 6 (period 4).",
        "17 mod 4 = 1. The 1st in the cycle is 8."
      ],
      explanation: [
        "Cycle: 8, 4, 2, 6 (period 4).",
        "17 mod 4 = 1, so the units digit is 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">3^{47}</span>?',
      answer: "7",
      hints: [
        "Units digits of powers of 3: 3, 9, 7, 1 (cycle of 4).",
        "47 mod 4 = 3.",
        "The 3rd in the cycle is 7."
      ],
      explanation: [
        "Cycle: 3, 9, 7, 1 (period 4).",
        "47 mod 4 = 3, which corresponds to the 3rd position → 7."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">7^{25}</span>?',
      choices: ["1", "3", "7", "9"],
      answer: "7",
      hints: [
        "Powers of 7 have units digits: 7, 9, 3, 1 (cycle of 4).",
        "25 mod 4 = 1.",
        "The 1st in the cycle is 7."
      ],
      explanation: [
        "Cycle: 7, 9, 3, 1 (period 4).",
        "25 mod 4 = 1, so the units digit is 7."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the units digit of <span class="math">2^{30}</span>?',
      answer: "4",
      hints: [
        "Powers of 2 cycle: 2, 4, 8, 6 (period 4).",
        "30 mod 4 = 2.",
        "The 2nd in the cycle is 4."
      ],
      explanation: [
        "Cycle: 2, 4, 8, 6 (period 4).",
        "30 mod 4 = 2, so units digit = 4."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">13^{50}</span>?',
      choices: ["1", "3", "7", "9"],
      answer: "9",
      hints: [
        "The units digit of powers of 13 depends only on powers of 3.",
        "Cycle of 3: 3, 9, 7, 1 (period 4).",
        "50 mod 4 = 2. The 2nd in the cycle is 9."
      ],
      explanation: [
        "Units digit of 13ⁿ follows the cycle of 3ⁿ: 3, 9, 7, 1.",
        "50 mod 4 = 2, so units digit = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">5^{99}</span>?',
      answer: "5",
      hints: [
        "5¹ = 5, 5² = 25, 5³ = 125.",
        "Any positive power of 5 ends in 5.",
        "So 5⁹⁹ ends in 5."
      ],
      explanation: [
        "Any positive power of 5 has units digit 5.",
        "Units digit of 5⁹⁹ = 5."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the units digit of <span class="math">2^{22}</span>?',
      choices: ["2", "4", "6", "8"],
      answer: "4",
      hints: [
        "Powers of 2 cycle: 2, 4, 8, 6 (period 4).",
        "22 mod 4 = 2.",
        "The 2nd in the cycle is 4."
      ],
      explanation: [
        "Cycle: 2, 4, 8, 6 (period 4).",
        "22 mod 4 = 2, so units digit = 4."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">8^{34}</span>?',
      answer: "4",
      hints: [
        "Powers of 8: 8¹=8, 8²=64, 8³=512, 8⁴=4096.",
        "Units digits cycle: 8, 4, 2, 6 (period 4).",
        "34 mod 4 = 2. The 2nd in the cycle is 4."
      ],
      explanation: [
        "Cycle: 8, 4, 2, 6 (period 4).",
        "34 mod 4 = 2, so units digit = 4."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">17^{63}</span>?',
      choices: ["1", "3", "7", "9"],
      answer: "3",
      hints: [
        "The units digit of 17ⁿ follows the cycle of 7ⁿ: 7, 9, 3, 1 (period 4).",
        "63 mod 4 = 3.",
        "The 3rd in the cycle is 3."
      ],
      explanation: [
        "Units digit of 17ⁿ follows the cycle of 7ⁿ: 7, 9, 3, 1.",
        "63 mod 4 = 3, so units digit = 3."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'What is the units digit of <span class="math">4^{28}</span>?',
      choices: ["2", "4", "6", "8"],
      answer: "6",
      hints: [
        'Powers of 4: 4¹ = 4, 4² = 16, 4³ = 64.',
        'Units digits cycle: 4, 6, 4, 6, ... (period 2).',
        '28 is even, so units digit = 6.'
      ],
      explanation: [
        'Cycle: 4, 6 (period 2). Even exponents give 6.',
        '28 is even, so units digit = 6.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">7^{38}</span>?',
      answer: "9",
      hints: [
        'Powers of 7 have units digits: 7, 9, 3, 1 (cycle of 4).',
        '38 mod 4 = 2.',
        'The 2nd in the cycle is 9.'
      ],
      explanation: [
        'Cycle: 7, 9, 3, 1 (period 4).',
        '38 mod 4 = 2, so the units digit is 9.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of <span class="math">3^{64}</span>?',
      choices: ["1", "3", "7", "9"],
      answer: "1",
      hints: [
        'Units digits of powers of 3: 3, 9, 7, 1 (cycle of 4).',
        '64 mod 4 = 0.',
        'Remainder 0 → last in cycle (1).'
      ],
      explanation: [
        'Cycle: 3, 9, 7, 1 (period 4).',
        '64 mod 4 = 0, which corresponds to the 4th position → 1.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the units digit of 7²⁰?',
      answer: "1",
      hints: [
        'Find the pattern of units digits: 7¹=7, 7²=9, 7³=3, 7⁴=1.',
        'The cycle repeats every 4 powers: 7, 9, 3, 1.',
        '20 ÷ 4 = 5 with remainder 0. Remainder 0 → last in cycle → 1.'
      ],
      explanation: [
        'Units digit cycle of 7: 7, 9, 3, 1 (period 4).',
        '20 mod 4 = 0, which corresponds to the 4th position in the cycle.',
        'Units digit = 1.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the units digit of 3⁵⁰ + 7⁵⁰?',
      choices: ["0", "2", "8", "6"],
      answer: "8",
      hints: [
        'Units digit cycle of 3: 3, 9, 7, 1 (period 4). 50 mod 4 = 2 → units digit 9.',
        'Units digit cycle of 7: 7, 9, 3, 1 (period 4). 50 mod 4 = 2 → units digit 9.',
        'Sum: 9 + 9 = 18. Units digit = 8.'
      ],
      explanation: [
        '3⁵⁰: 50 mod 4 = 2 → units digit = 9 (2nd in cycle 3,9,7,1).',
        '7⁵⁰: 50 mod 4 = 2 → units digit = 9 (2nd in cycle 7,9,3,1).',
        '9 + 9 = 18. Units digit = 8.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the units digit of 2¹⁰⁰?',
      answer: "6",
      hints: [
        'Units digit cycle of 2: 2, 4, 8, 6 (period 4).',
        '100 mod 4 = 0.',
        'Remainder 0 corresponds to the 4th position in the cycle.'
      ],
      explanation: [
        'Cycle of 2: 2, 4, 8, 6 (repeats every 4).',
        '100 ÷ 4 = 25 remainder 0 → 4th in cycle.',
        'Units digit = 6.'
      ]
    }
  ],

  // --- Topic 6: Classic Logic Problems --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'A snail climbs 5 feet up a wall during the day and slides back 3 feet at night. The wall is 22 feet tall. On which day does it reach the top?',
      answer: "10",
      hints: [
        "Net gain per day-night cycle = 5 − 3 = 2 feet.",
        "After n nights the snail is at 2n feet. It escapes on a day when 2n + 5 ≥ 22.",
        "Solve 2n ≥ 17 → n ≥ 9. After night 9 the snail is at 18 ft; day 10 it climbs to 23 ft."
      ],
      explanation: [
        "Each full day+night cycle nets 2 feet. After night n, position = 2n.",
        "After night 9: position = 18 feet. On day 10 it climbs 5 → 23 ≥ 22.",
        "The snail reaches the top on day 10."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A frog is at the bottom of a 16-foot well. Each day it climbs 4 feet and each night slides back 2 feet. On which day does it escape?',
      choices: ["6", "7", "8", "9"],
      answer: "7",
      hints: [
        "Net gain per cycle = 4 − 2 = 2 feet.",
        "The frog needs to be within 4 feet of the top to escape during the day.",
        "After n nights, position = 2n. It needs 2n + 4 ≥ 16 → 2n ≥ 12 → n ≥ 6."
      ],
      explanation: [
        "After each night, the frog is at 2n feet.",
        "After night 6: position = 12 feet.",
        "Day 7: climbs 4 → 16 feet. It reaches the top and escapes on day 7."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A clock chimes once at 1:00, twice at 2:00, and so on. How many total chimes from 1:00 through 12:00?',
      answer: "78",
      hints: [
        "Total = 1 + 2 + 3 + ... + 12.",
        "Use the formula: n(n+1)/2.",
        "12 × 13 / 2 = ?"
      ],
      explanation: [
        "Total chimes = 1 + 2 + 3 + ... + 12.",
        "= 12 × 13 / 2 = 78."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'A lily pad doubles in area each day. It covers the whole pond on day 30. On which day did it cover half the pond?',
      choices: ["Day 10", "Day 15", "Day 20", "Day 29"],
      answer: "Day 29",
      hints: [
        "If the pad doubles each day, then the day before it was full it was half-full.",
        "It is full on day 30.",
        "Half of full = one day before."
      ],
      explanation: [
        "Since the area doubles each day, on day 29 it was half the pond.",
        "It doubled from day 29 to day 30 to cover the whole pond."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'You break a chocolate bar on a 4×6 grid into individual squares. What is the minimum number of breaks needed?',
      answer: "23",
      hints: [
        "A 4×6 grid has 24 individual squares.",
        "Each break increases the number of pieces by exactly 1.",
        "You start with 1 piece and need 24 pieces."
      ],
      explanation: [
        "Starting with 1 piece, each break adds 1 piece.",
        "To get 24 pieces, you need 24 − 1 = 23 breaks."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'A caterpillar climbs 6 feet up a tree during the day and slides back 4 feet at night. The tree is 20 feet tall. On which day does it reach the top?',
      choices: ["8", "9", "10", "11"],
      answer: "8",
      hints: [
        "Net gain per day-night cycle = 6 − 4 = 2 feet.",
        "After n nights, position = 2n. It escapes when 2n + 6 ≥ 20.",
        "2n ≥ 14 → n ≥ 7. Day 8 it reaches 14 + 6 = 20."
      ],
      explanation: [
        "After night 7: position = 14 feet.",
        "Day 8: climbs 6 → 20 feet. Reaches the top on day 8."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'I square a number, then add 5, then divide by 2, and get 27. What was the original number?',
      answer: "7",
      hints: [
        "Work backwards from 27.",
        "Undo divide by 2: 27 × 2 = 54.",
        "Undo add 5: 54 − 5 = 49. Undo square: √49 = ?"
      ],
      explanation: [
        "Undo ÷2: 27 × 2 = 54.",
        "Undo +5: 54 − 5 = 49.",
        "Undo square: √49 = 7."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A lily pad doubles in area every day. It covers the whole pond on day 30. On what day did it cover half the pond?',
      choices: ["Day 15", "Day 20", "Day 25", "Day 29"],
      answer: "Day 29",
      hints: [
        "If it doubles each day and covers the whole pond on day 30...",
        "On day 29 it was half the size of day 30.",
        "So it covered half the pond on day 29."
      ],
      explanation: [
        "Since the area doubles daily, the pad was half its day-30 size on day 29.",
        "It covered half the pond on day 29."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bug climbs 7 feet up a pole during the day and slides back 5 feet at night. The pole is 25 feet tall. On which day does it reach the top?',
      answer: "10",
      hints: [
        "Net gain per day-night cycle = 7 − 5 = 2 feet.",
        "After n nights the bug is at 2n feet. It escapes when 2n + 7 ≥ 25.",
        "2n ≥ 18 → n ≥ 9. After night 9 the bug is at 18 ft; day 10 it climbs to 25."
      ],
      explanation: [
        "After night 9: position = 18 feet.",
        "Day 10: climbs 7 → 25 feet. Reaches the top on day 10."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'You break a chocolate bar on a 3×5 grid into individual squares. What is the minimum number of breaks needed?',
      choices: ["8", "14", "15", "7"],
      answer: "14",
      hints: [
        "A 3×5 grid has 15 individual squares.",
        "Each break increases the number of pieces by exactly 1.",
        "You start with 1 piece and need 15 pieces."
      ],
      explanation: [
        "Starting with 1 piece, each break adds 1 piece.",
        "To get 15 pieces: 15 − 1 = 14 breaks."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A clock chimes once at 1:00, twice at 2:00, and so on up to 6:00. How many total chimes from 1:00 through 6:00?',
      answer: "21",
      hints: [
        "Total = 1 + 2 + 3 + 4 + 5 + 6.",
        "Use the formula: n(n+1)/2.",
        "6 × 7 / 2 = ?"
      ],
      explanation: [
        "Total chimes = 1 + 2 + 3 + 4 + 5 + 6.",
        "= 6 × 7 / 2 = 21."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A worm climbs 8 feet during the day and slides back 6 feet at night. The wall is 30 feet tall. On which day does it reach the top?',
      choices: ["11", "12", "13", "15"],
      answer: "12",
      hints: [
        "Net gain per day-night cycle = 8 − 6 = 2 feet.",
        "After n nights, position = 2n. It escapes when 2n + 8 ≥ 30.",
        "2n ≥ 22 → n ≥ 11. Day 12 it climbs from 22 to 30."
      ],
      explanation: [
        "After night 11: position = 22 feet.",
        "Day 12: climbs 8 → 30 feet. Reaches the top on day 12."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'You break a chocolate bar on a 5×4 grid into individual squares. What is the minimum number of breaks needed?',
      answer: "19",
      hints: [
        "A 5×4 grid has 20 individual squares.",
        "Each break increases the number of pieces by exactly 1.",
        "You start with 1 piece and need 20 pieces."
      ],
      explanation: [
        "Starting with 1 piece, each break adds 1 piece.",
        "To get 20 pieces: 20 − 1 = 19 breaks."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bacteria colony doubles every hour. At 8:00 PM the dish is full. At what hour was it one-quarter full?',
      answer: "6",
      hints: [
        "If it doubles every hour and is full at 8:00 PM...",
        "At 7:00 PM it was half full.",
        "At 6:00 PM it was one-quarter full."
      ],
      explanation: [
        "Full at 8 PM. Half at 7 PM (one hour before).",
        "Quarter at 6 PM (two hours before).",
        "The dish was one-quarter full at 6:00 PM."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'A snail climbs 4 feet up a wall during the day and slides back 2 feet at night. The wall is 14 feet tall. On which day does it reach the top?',
      answer: "6",
      hints: [
        "Net gain per day-night cycle = 4 − 2 = 2 feet.",
        "After n nights the snail is at 2n feet. It escapes when 2n + 4 ≥ 14.",
        "2n ≥ 10 → n ≥ 5. After night 5 the snail is at 10 ft; day 6 it climbs to 14."
      ],
      explanation: [
        "After night 5: position = 10 feet.",
        "Day 6: climbs 4 → 14 feet. Reaches the top on day 6."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A clock chimes once at 1:00, twice at 2:00, and so on up to 8:00. How many total chimes from 1:00 through 8:00?',
      choices: ["28", "32", "36", "40"],
      answer: "36",
      hints: [
        "Total = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8.",
        "Use the formula: n(n+1)/2.",
        "8 × 9 / 2 = ?"
      ],
      explanation: [
        "Total chimes = 1 + 2 + 3 + ... + 8.",
        "= 8 × 9 / 2 = 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'You break a chocolate bar on a 6×3 grid into individual squares. What is the minimum number of breaks needed?',
      answer: "17",
      hints: [
        "A 6×3 grid has 18 individual squares.",
        "Each break increases the number of pieces by exactly 1.",
        "You start with 1 piece and need 18 pieces."
      ],
      explanation: [
        "Starting with 1 piece, each break adds 1 piece.",
        "To get 18 pieces: 18 − 1 = 17 breaks."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'You break a chocolate bar on a 7×3 grid into individual squares. What is the minimum number of breaks needed?',
      answer: "20",
      hints: [
        'A 7×3 grid has 21 individual squares.',
        'Each break increases the number of pieces by exactly 1.',
        'You start with 1 piece and need 21 pieces.'
      ],
      explanation: [
        'Starting with 1 piece, each break adds 1 piece.',
        'To get 21 pieces: 21 − 1 = 20 breaks.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A frog is at the bottom of a 24-foot well. Each day it climbs 5 feet and each night slides back 3 feet. On which day does it escape?',
      choices: ["10", "11", "12", "13"],
      answer: "11",
      hints: [
        'Net gain per cycle = 5 − 3 = 2 feet.',
        'After n nights, position = 2n. It escapes when 2n + 5 ≥ 24.',
        '2n ≥ 19 → n ≥ 10. Day 11 it climbs from 20 to 25.'
      ],
      explanation: [
        'After night 10: position = 20 feet.',
        'Day 11: climbs 5 → 25 ≥ 24. Reaches the top on day 11.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A clock chimes once at 1:00, twice at 2:00, and so on up to 10:00. How many total chimes from 1:00 through 10:00?',
      answer: "55",
      hints: [
        'Total = 1 + 2 + 3 + ... + 10.',
        'Use the formula: n(n+1)/2.',
        '10 × 11 / 2 = ?'
      ],
      explanation: [
        'Total chimes = 1 + 2 + 3 + ... + 10.',
        '= 10 × 11 / 2 = 55.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 2,
      question: 'In a room, every person shook hands with every other person exactly once. There were 15 handshakes total. How many people were in the room?',
      choices: ["4", "5", "6", "7"],
      answer: "6",
      hints: [
        'Handshakes = n(n−1)/2 where n = number of people.',
        'n(n−1)/2 = 15, so n(n−1) = 30.',
        'Try n = 6: 6 × 5 = 30. ✓'
      ],
      explanation: [
        'n(n−1)/2 = 15 → n(n−1) = 30.',
        '6 × 5 = 30. So n = 6.',
        'There were 6 people.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'Alice, Bob, and Carol each have a different pet (dog, cat, fish). Alice does not have the dog. Bob does not have the cat or the fish. How many possible assignments are there?',
      answer: "2",
      hints: [
        'Bob does not have cat or fish, so Bob must have the dog.',
        'Alice does not have the dog, so Alice has cat or fish.',
        'That leaves Carol with whichever pet Alice does not take. Count the options for Alice.'
      ],
      explanation: [
        'Bob must have the dog (only option for him).',
        'Alice can have the cat or the fish (2 choices).',
        'Carol gets whichever is left. Total = 2 possible assignments.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'A farmer has chickens and cows. He counts 20 heads and 56 legs. How many cows does he have?',
      choices: ["6", "8", "10", "12"],
      answer: "8",
      hints: [
        'Let c = cows and h = chickens.',
        'c + h = 20 (heads). 4c + 2h = 56 (legs).',
        'From the first equation: h = 20 − c. Substitute.'
      ],
      explanation: [
        'c + h = 20 and 4c + 2h = 56.',
        'Substitute h = 20 − c: 4c + 2(20 − c) = 56.',
        '4c + 40 − 2c = 56. 2c = 16. c = 8 cows.'
      ]
    }
  ],

  // --- Topic 7: Handshake Problem --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'If 8 people each shake hands with every other person exactly once, how many handshakes occur?',
      answer: "28",
      hints: [
        "Use the handshake formula: n(n−1)/2.",
        "n = 8: 8 × 7 / 2.",
        "= 56 / 2."
      ],
      explanation: [
        "Handshakes = n(n−1)/2 = 8 × 7 / 2.",
        "= 56 / 2 = 28."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'At a party, there were 45 handshakes and everyone shook hands with everyone else exactly once. How many people were at the party?',
      choices: ["8", "9", "10", "11"],
      answer: "10",
      hints: [
        "n(n−1)/2 = 45, so n(n−1) = 90.",
        "Try n = 10: 10 × 9 = 90. ✓",
        "So there were 10 people."
      ],
      explanation: [
        "n(n−1)/2 = 45 → n(n−1) = 90.",
        "10 × 9 = 90, so n = 10."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A round-robin tournament has 12 teams. Each team plays every other team once. How many total games are played?',
      answer: "66",
      hints: [
        "This is the same structure as handshakes.",
        "Games = C(12, 2) = 12 × 11 / 2.",
        "= 132 / 2."
      ],
      explanation: [
        "Total games = 12 × 11 / 2.",
        "= 132 / 2 = 66."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'At a meeting, 6 people each shake hands with everyone else once. How many handshakes occur?',
      choices: ["12", "15", "18", "30"],
      answer: "15",
      hints: [
        "Use the formula: n(n−1)/2.",
        "n = 6: 6 × 5 / 2.",
        "= 30 / 2."
      ],
      explanation: [
        "Handshakes = 6 × 5 / 2 = 30 / 2 = 15.",
        "Each pair of people shakes hands exactly once."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In a league with 15 teams, each team plays every other team once. How many total games are played?',
      answer: "105",
      hints: [
        "Games = C(15, 2) = 15 × 14 / 2.",
        "= 210 / 2.",
        "= 105."
      ],
      explanation: [
        "Total games = 15 × 14 / 2.",
        "= 210 / 2 = 105."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'If 6 people each shake hands with every other person exactly once, how many handshakes occur?',
      answer: "15",
      hints: [
        "Use the formula: n(n−1)/2.",
        "n = 6: 6 × 5 / 2.",
        "= 30 / 2."
      ],
      explanation: [
        "Handshakes = 6 × 5 / 2 = 15."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'In a league with 8 teams, each team plays every other team twice. How many total games are played?',
      choices: ["28", "48", "56", "64"],
      answer: "56",
      hints: [
        "First find single round-robin: C(8,2) = 28 games.",
        "Since each pair plays twice, multiply by 2.",
        "28 × 2 = ?"
      ],
      explanation: [
        "Single round-robin = 8 × 7 / 2 = 28.",
        "Double round-robin = 28 × 2 = 56 games."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'At a meeting, there were 21 handshakes total. Everyone shook hands with everyone else once. How many people attended?',
      answer: "7",
      hints: [
        "n(n−1)/2 = 21, so n(n−1) = 42.",
        "Try n = 7: 7 × 6 = 42. ✓",
        "So there were 7 people."
      ],
      explanation: [
        "n(n−1)/2 = 21 → n(n−1) = 42.",
        "7 × 6 = 42, so n = 7."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'If 10 people each shake hands with every other person exactly once, how many handshakes occur?',
      answer: "45",
      hints: [
        "Use the handshake formula: n(n−1)/2.",
        "n = 10: 10 × 9 / 2.",
        "= 90 / 2."
      ],
      explanation: [
        "Handshakes = 10 × 9 / 2 = 90 / 2 = 45."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A round-robin tournament has 9 teams. Each team plays every other team once. How many total games are played?',
      choices: ["18", "27", "36", "72"],
      answer: "36",
      hints: [
        "Games = C(9, 2) = 9 × 8 / 2.",
        "= 72 / 2.",
        "= 36."
      ],
      explanation: [
        "Total games = 9 × 8 / 2 = 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'At a meeting, there were 55 handshakes total. Everyone shook hands with everyone else once. How many people attended?',
      answer: "11",
      hints: [
        "n(n−1)/2 = 55, so n(n−1) = 110.",
        "Try n = 11: 11 × 10 = 110. ✓",
        "So there were 11 people."
      ],
      explanation: [
        "n(n−1)/2 = 55 → n(n−1) = 110.",
        "11 × 10 = 110, so n = 11."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'If 12 people each shake hands with every other person exactly once, how many handshakes occur?',
      answer: "66",
      hints: [
        "Use the handshake formula: n(n−1)/2.",
        "n = 12: 12 × 11 / 2.",
        "= 132 / 2."
      ],
      explanation: [
        "Handshakes = 12 × 11 / 2 = 66."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'At a gathering, 36 handshakes took place with everyone shaking hands once. How many people were there?',
      choices: ["7", "8", "9", "10"],
      answer: "9",
      hints: [
        "n(n−1)/2 = 36, so n(n−1) = 72.",
        "Try n = 9: 9 × 8 = 72. ✓",
        "So there were 9 people."
      ],
      explanation: [
        "n(n−1)/2 = 36 → n(n−1) = 72.",
        "9 × 8 = 72, so n = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In a league with 10 teams, each team plays every other team twice. How many total games are played?',
      answer: "90",
      hints: [
        "Single round-robin: C(10, 2) = 45.",
        "Double round-robin: 45 × 2.",
        "= 90."
      ],
      explanation: [
        "Single round-robin = 10 × 9 / 2 = 45.",
        "Double round-robin = 45 × 2 = 90 games."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'If 15 people each shake hands with every other person exactly once, how many handshakes occur?',
      answer: "105",
      hints: [
        "Use the handshake formula: n(n−1)/2.",
        "n = 15: 15 × 14 / 2.",
        "= 210 / 2."
      ],
      explanation: [
        "Handshakes = 15 × 14 / 2 = 210 / 2 = 105."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'At a gathering, there were 78 handshakes and everyone shook hands once. How many people were there?',
      choices: ["10", "11", "12", "13"],
      answer: "13",
      hints: [
        "n(n−1)/2 = 78, so n(n−1) = 156.",
        "Try n = 13: 13 × 12 = 156. ✓",
        "So there were 13 people."
      ],
      explanation: [
        "n(n−1)/2 = 78 → n(n−1) = 156.",
        "13 × 12 = 156, so n = 13."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In a league with 7 teams, each team plays every other team twice. How many total games are played?',
      answer: "42",
      hints: [
        "Single round-robin: C(7, 2) = 21 games.",
        "Since each pair plays twice, multiply by 2.",
        "21 × 2 = ?"
      ],
      explanation: [
        "Single round-robin = 7 × 6 / 2 = 21.",
        "Double round-robin = 21 × 2 = 42 games."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'If 20 people each shake hands with every other person exactly once, how many handshakes occur?',
      answer: "190",
      hints: [
        'Use the handshake formula: n(n−1)/2.',
        'n = 20: 20 × 19 / 2.',
        '= 380 / 2.'
      ],
      explanation: [
        'Handshakes = 20 × 19 / 2 = 380 / 2 = 190.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'At a gathering, there were 91 handshakes and everyone shook hands once. How many people were there?',
      choices: ["12", "13", "14", "15"],
      answer: "14",
      hints: [
        'n(n−1)/2 = 91, so n(n−1) = 182.',
        'Try n = 14: 14 × 13 = 182. ✓',
        'So there were 14 people.'
      ],
      explanation: [
        'n(n−1)/2 = 91 → n(n−1) = 182.',
        '14 × 13 = 182, so n = 14.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In a league with 6 teams, each team plays every other team twice. How many total games are played?',
      answer: "30",
      hints: [
        'Single round-robin: C(6, 2) = 15 games.',
        'Since each pair plays twice, multiply by 2.',
        '15 × 2 = ?'
      ],
      explanation: [
        'Single round-robin = 6 × 5 / 2 = 15.',
        'Double round-robin = 15 × 2 = 30 games.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'At a party with 12 people, everyone shakes hands with every other person exactly once. How many handshakes occur?',
      answer: "66",
      hints: [
        'Handshakes = n(n−1)/2.',
        'n = 12.',
        '12 × 11 / 2 = ?'
      ],
      explanation: [
        'Handshakes = 12(12−1)/2 = 12 × 11 / 2.',
        '= 132/2 = 66 handshakes.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'In a round-robin tournament, every team plays every other team once. With 8 teams, how many games are played?',
      choices: ["16", "24", "28", "56"],
      answer: "28",
      hints: [
        'Same as handshake problem: C(8,2).',
        '8 × 7 / 2.',
        '= 28.'
      ],
      explanation: [
        'Games = C(8,2) = 8!/(2! × 6!) = 8 × 7 / 2.',
        '= 56/2 = 28 games.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'At a meeting, 45 handshakes took place with each person shaking hands with every other person exactly once. How many people attended?',
      answer: "10",
      hints: [
        'n(n−1)/2 = 45.',
        'n(n−1) = 90.',
        'Try n = 10: 10 × 9 = 90. ✓'
      ],
      explanation: [
        'n(n−1)/2 = 45 → n(n−1) = 90.',
        'Testing: 10 × 9 = 90. ✓',
        'n = 10 people attended.'
      ]
    }
  ],

  // --- Topic 8: Counting Squares on Grids --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 3×3 grid?',
      answer: "14",
      hints: [
        "Count by size: 1×1, 2×2, 3×3.",
        "1×1: 9, 2×2: 4, 3×3: 1.",
        "Total = 9 + 4 + 1."
      ],
      explanation: [
        "1×1 squares: 3² = 9. 2×2 squares: 2² = 4. 3×3 squares: 1² = 1.",
        "Total = 9 + 4 + 1 = 14."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 4×4 grid?',
      choices: ["16", "20", "25", "30"],
      answer: "30",
      hints: [
        "Sum squares from 1×1 to 4×4.",
        "1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1.",
        "16 + 9 + 4 + 1 = ?"
      ],
      explanation: [
        "1×1: 4² = 16. 2×2: 3² = 9. 3×3: 2² = 4. 4×4: 1² = 1.",
        "Total = 16 + 9 + 4 + 1 = 30."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'On a 5×5 grid, how many 2×2 squares can you find?',
      answer: "16",
      hints: [
        "A k×k square on an n×n grid: count = (n − k + 1)².",
        "For 2×2 on 5×5: (5 − 2 + 1)² = 4².",
        "= 16."
      ],
      explanation: [
        "Use the formula: count of k×k squares on an n×n grid = (n − k + 1)².",
        "For k = 2, n = 5: (5 − 2 + 1)² = 4² = 16."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 2×2 grid?',
      choices: ["4", "5", "6", "8"],
      answer: "5",
      hints: [
        "Count by size: 1×1 and 2×2.",
        "1×1: 4 squares. 2×2: 1 square.",
        "Total = 4 + 1."
      ],
      explanation: [
        "1×1 squares: 2² = 4. 2×2 squares: 1² = 1.",
        "Total = 4 + 1 = 5."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'On a 6×6 grid, how many 1×1 unit squares are there?',
      answer: "36",
      hints: [
        "A 6×6 grid has 6 rows and 6 columns of unit squares.",
        "Count: 6 × 6.",
        "= 36."
      ],
      explanation: [
        "1×1 squares = 6 × 6 = 36.",
        "This is simply the total number of unit cells in the grid."
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 5×5 grid?',
      choices: ["25", "30", "50", "55"],
      answer: "55",
      hints: [
        "Count by size: 1×1: 25, 2×2: 16, 3×3: 9, 4×4: 4, 5×5: 1.",
        "Sum = 25 + 16 + 9 + 4 + 1.",
        "= 55."
      ],
      explanation: [
        "Sum of squares: 5² + 4² + 3² + 2² + 1² = 25 + 16 + 9 + 4 + 1 = 55."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'On a 6×6 grid, how many 3×3 squares can you find?',
      answer: "16",
      hints: [
        "Count of k×k squares on an n×n grid = (n − k + 1)².",
        "For 3×3 on 6×6: (6 − 3 + 1)² = 4².",
        "= 16."
      ],
      explanation: [
        "(6 − 3 + 1)² = 4² = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 2×2 grid?',
      answer: "5",
      hints: [
        "Count by size: 1×1: 4, 2×2: 1.",
        "Total = 4 + 1.",
        "= 5."
      ],
      explanation: [
        "1×1 squares: 2² = 4. 2×2 squares: 1² = 1.",
        "Total = 4 + 1 = 5."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'On a 7×7 grid, how many 4×4 squares can you find?',
      answer: "16",
      hints: [
        "Count of k×k squares on an n×n grid = (n − k + 1)².",
        "For 4×4 on 7×7: (7 − 4 + 1)² = 4².",
        "= 16."
      ],
      explanation: [
        "(7 − 4 + 1)² = 4² = 16."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 6×6 grid?',
      choices: ["36", "55", "91", "100"],
      answer: "91",
      hints: [
        "Sum = 6² + 5² + 4² + 3² + 2² + 1².",
        "= 36 + 25 + 16 + 9 + 4 + 1.",
        "= 91."
      ],
      explanation: [
        "Sum of squares: 36 + 25 + 16 + 9 + 4 + 1 = 91."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'On a 4×4 grid, how many 2×2 squares can you find?',
      answer: "9",
      hints: [
        "Count of k×k squares on an n×n grid = (n − k + 1)².",
        "For 2×2 on 4×4: (4 − 2 + 1)² = 3².",
        "= 9."
      ],
      explanation: [
        "(4 − 2 + 1)² = 3² = 9."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 3×3 grid?',
      choices: ["9", "10", "14", "16"],
      answer: "14",
      hints: [
        "Count by size: 1×1: 9, 2×2: 4, 3×3: 1.",
        "Total = 9 + 4 + 1.",
        "= 14."
      ],
      explanation: [
        "1×1: 3² = 9. 2×2: 2² = 4. 3×3: 1² = 1.",
        "Total = 9 + 4 + 1 = 14."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'On a 5×5 grid, how many 3×3 squares can you find?',
      answer: "9",
      hints: [
        "Count of k×k squares on an n×n grid = (n − k + 1)².",
        "For 3×3 on 5×5: (5 − 3 + 1)² = 3².",
        "= 9."
      ],
      explanation: [
        "(5 − 3 + 1)² = 3² = 9."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'On an 8×8 grid, how many 1×1 unit squares are there?',
      answer: "64",
      hints: [
        "An 8×8 grid has 8 rows and 8 columns.",
        "Count: 8 × 8.",
        "= 64."
      ],
      explanation: [
        "1×1 squares = 8 × 8 = 64."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 7×7 grid?',
      choices: ["91", "120", "140", "175"],
      answer: "140",
      hints: [
        "Sum = 7² + 6² + 5² + 4² + 3² + 2² + 1².",
        "= 49 + 36 + 25 + 16 + 9 + 4 + 1.",
        "= 140."
      ],
      explanation: [
        "Sum of squares: 49 + 36 + 25 + 16 + 9 + 4 + 1 = 140."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'On a 6×6 grid, how many 2×2 squares can you find?',
      answer: "25",
      hints: [
        "Count of k×k squares on an n×n grid = (n − k + 1)².",
        "For 2×2 on 6×6: (6 − 2 + 1)² = 5².",
        "= 25."
      ],
      explanation: [
        "(6 − 2 + 1)² = 5² = 25."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'On a 8×8 grid, how many 5×5 squares can you find?',
      answer: "16",
      hints: [
        "Count of k×k squares on an n×n grid = (n − k + 1)².",
        "For 5×5 on 8×8: (8 − 5 + 1)² = 4².",
        "= 16."
      ],
      explanation: [
        "(8 − 5 + 1)² = 4² = 16."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'On a 9×9 grid, how many 6×6 squares can you find?',
      answer: "16",
      hints: [
        'Count of k×k squares on an n×n grid = (n − k + 1)².',
        'For 6×6 on 9×9: (9 − 6 + 1)² = 4².',
        '= 16.'
      ],
      explanation: [
        '(9 − 6 + 1)² = 4² = 16.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on an 8×8 grid?',
      choices: ["64", "140", "204", "256"],
      answer: "204",
      hints: [
        'Sum = 8² + 7² + 6² + 5² + 4² + 3² + 2² + 1².',
        '= 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1.',
        '= 204.'
      ],
      explanation: [
        'Sum of squares: 64 + 49 + 36 + 25 + 16 + 9 + 4 + 1 = 204.'
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'On a 7×7 grid, how many 2×2 squares can you find?',
      answer: "36",
      hints: [
        'Count of k×k squares on an n×n grid = (n − k + 1)².',
        'For 2×2 on 7×7: (7 − 2 + 1)² = 6².',
        '= 36.'
      ],
      explanation: [
        '(7 − 2 + 1)² = 6² = 36.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'How many squares of all sizes are on a 3×3 grid?',
      answer: "14",
      hints: [
        'Count squares by size.',
        '1×1 squares: 9. 2×2 squares: 4. 3×3 squares: 1.',
        'Total = 9 + 4 + 1.'
      ],
      explanation: [
        '1×1: 3² = 9.',
        '2×2: 2² = 4.',
        '3×3: 1² = 1. Total = 9 + 4 + 1 = 14.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'How many squares of all sizes are on a 5×5 grid?',
      choices: ["25", "30", "50", "55"],
      answer: "55",
      hints: [
        'Sum of k² for k = 1 to 5.',
        '1² + 2² + 3² + 4² + 5² = 1 + 4 + 9 + 16 + 25.',
        '= 55.'
      ],
      explanation: [
        '1×1: 25, 2×2: 16, 3×3: 9, 4×4: 4, 5×5: 1.',
        'Total = 25 + 16 + 9 + 4 + 1 = 55.',
        'Formula: n(n+1)(2n+1)/6 = 5×6×11/6 = 55.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'How many rectangles (including squares) are in a 3×3 grid?',
      answer: "36",
      hints: [
        'A 3×3 grid has 4 horizontal lines and 4 vertical lines.',
        'Choose 2 horizontal: C(4,2) = 6. Choose 2 vertical: C(4,2) = 6.',
        'Total = 6 × 6.'
      ],
      explanation: [
        'Horizontal lines = 4. C(4,2) = 6.',
        'Vertical lines = 4. C(4,2) = 6.',
        'Total rectangles = 6 × 6 = 36.'
      ]
    }
  ],

  // --- Topic 9: Summation & Fibonacci --- difficulty 2-3
  [
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of the first 8 Fibonacci numbers? (1, 1, 2, 3, 5, 8, 13, 21)',
      answer: "54",
      hints: [
        "Add them up: 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21.",
        "Group: (1+1) + (2+3) + (5+8) + (13+21).",
        "= 2 + 5 + 13 + 34."
      ],
      explanation: [
        "Sum = 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21.",
        "= 54."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the sum of the first 6 odd numbers (1 + 3 + 5 + 7 + 9 + 11)?',
      choices: ["25", "30", "36", "42"],
      answer: "36",
      hints: [
        "The sum of the first n odd numbers = n².",
        "n = 6, so sum = 6².",
        "= 36."
      ],
      explanation: [
        "The sum of the first n odd numbers = n².",
        "Sum = 6² = 36."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'The Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ... What is the sum of the first 10 even-positioned Fibonacci numbers? (Positions 2, 4, 6, 8, 10)',
      answer: "88",
      hints: [
        "Even positions: F₂ = 1, F₄ = 3, F₆ = 8, F₈ = 21, F₁₀ = 55.",
        "Add: 1 + 3 + 8 + 21 + 55.",
        "= 4 + 8 + 21 + 55."
      ],
      explanation: [
        "F₂ = 1, F₄ = 3, F₆ = 8, F₈ = 21, F₁₀ = 55.",
        "Sum = 1 + 3 + 8 + 21 + 55 = 88."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the sum of the first 10 positive odd numbers? (1 + 3 + 5 + ... + 19)',
      answer: "100",
      hints: [
        "The sum of the first n odd numbers = n².",
        "n = 10.",
        "10² = ?"
      ],
      explanation: [
        "Sum of first n odd numbers = n².",
        "Sum = 10² = 100."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, ..., what is the 9th term?',
      choices: ["21", "34", "55", "89"],
      answer: "34",
      hints: [
        "Each term is the sum of the two before it.",
        "Continue: F₈ = 21, so F₉ = F₇ + F₈.",
        "F₇ = 13, so F₉ = 13 + 21."
      ],
      explanation: [
        "F₇ = 13, F₈ = 21.",
        "F₉ = 13 + 21 = 34."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of the first 10 positive integers?',
      answer: "55",
      hints: [
        "Use Gauss\'s formula: n(n+1)/2.",
        "10 × 11 / 2 = 110 / 2.",
        "= 55."
      ],
      explanation: [
        "Sum = 10 × 11 / 2 = 55."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the sum of the first 8 odd numbers (1 + 3 + 5 + ... + 15)?',
      choices: ["36", "49", "56", "64"],
      answer: "64",
      hints: [
        "The sum of the first n odd numbers = n².",
        "n = 8, so sum = 8².",
        "= 64."
      ],
      explanation: [
        "Sum of first 8 odd numbers = 8² = 64."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..., what is the 12th Fibonacci number?',
      answer: "144",
      hints: [
        "Continue from the 10th (55) and 11th (89).",
        "F₁₂ = F₁₁ + F₁₀ = 89 + 55.",
        "= 144."
      ],
      explanation: [
        "F₁₁ = 89, F₁₀ = 55.",
        "F₁₂ = 89 + 55 = 144."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the sum of the first 7 odd numbers (1 + 3 + 5 + 7 + 9 + 11 + 13)?',
      answer: "49",
      hints: [
        "The sum of the first n odd numbers = n².",
        "n = 7, so sum = 7².",
        "= 49."
      ],
      explanation: [
        "Sum of first 7 odd numbers = 7² = 49."
      ]
    },
    {
      type: "mc",
      difficulty: 2,
      question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..., what is the 11th term?',
      choices: ["55", "89", "144", "233"],
      answer: "89",
      hints: [
        "The sequence is: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...",
        "F₁₀ = 55, F₁₁ = F₉ + F₁₀.",
        "F₉ = 34, so F₁₁ = 34 + 55."
      ],
      explanation: [
        "F₉ = 34, F₁₀ = 55.",
        "F₁₁ = 34 + 55 = 89."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the sum of all even numbers from 2 to 40?',
      answer: "420",
      hints: [
        "Even numbers: 2, 4, 6, ..., 40. There are 20 terms.",
        "Sum = 2(1 + 2 + ... + 20) = 2 × 20 × 21 / 2.",
        "= 20 × 21."
      ],
      explanation: [
        "Sum = 2(1 + 2 + ... + 20) = 2 × (20 × 21 / 2).",
        "= 20 × 21 = 420."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of the first 12 Fibonacci numbers? (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144)',
      answer: "376",
      hints: [
        "Add them up: 1+1+2+3+5+8+13+21+34+55+89+144.",
        "Group: (1+1+2+3) + (5+8+13+21) + (34+55+89+144).",
        "= 7 + 47 + 322."
      ],
      explanation: [
        "Sum = 1+1+2+3+5+8+13+21+34+55+89+144.",
        "= 376."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the sum of the first 9 odd numbers (1 + 3 + 5 + ... + 17)?',
      choices: ["64", "72", "81", "100"],
      answer: "81",
      hints: [
        "The sum of the first n odd numbers = n².",
        "n = 9, so sum = 9².",
        "= 81."
      ],
      explanation: [
        "Sum of first 9 odd numbers = 9² = 81."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'What is the sum of all even numbers from 2 to 50?',
      answer: "650",
      hints: [
        "Even numbers: 2, 4, 6, ..., 50. There are 25 terms.",
        "Sum = 2(1 + 2 + ... + 25) = 2 × 25 × 26 / 2.",
        "= 25 × 26."
      ],
      explanation: [
        "Sum = 2(1 + 2 + ... + 25) = 2 × (25 × 26 / 2).",
        "= 25 × 26 = 650."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of the first 20 positive integers?',
      answer: "210",
      hints: [
        "Use Gauss\'s formula: n(n+1)/2.",
        "20 × 21 / 2.",
        "= 420 / 2."
      ],
      explanation: [
        "Sum = 20 × 21 / 2 = 210."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the sum of the first 12 odd numbers (1 + 3 + 5 + ... + 23)?',
      choices: ["100", "121", "132", "144"],
      answer: "144",
      hints: [
        "The sum of the first n odd numbers = n².",
        "n = 12, so sum = 12².",
        "= 144."
      ],
      explanation: [
        "Sum of first 12 odd numbers = 12² = 144."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ..., what is the 13th term?',
      answer: "233",
      hints: [
        "Continue from the 11th (89) and 12th (144).",
        "F₁₃ = F₁₂ + F₁₁ = 144 + 89.",
        "= 233."
      ],
      explanation: [
        "F₁₂ = 144, F₁₁ = 89.",
        "F₁₃ = 144 + 89 = 233."
      ]
    },
    {
      type: "numeric",
      difficulty: 2,
      question: 'What is the sum of the first 15 positive integers?',
      answer: "120",
      hints: [
        'Use Gauss\'s formula: n(n+1)/2.',
        '15 × 16 / 2.',
        '= 240 / 2.'
      ],
      explanation: [
        'Sum = 15 × 16 / 2 = 120.'
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the sum of the first 11 odd numbers (1 + 3 + 5 + ... + 21)?',
      choices: ["100", "110", "121", "132"],
      answer: "121",
      hints: [
        'The sum of the first n odd numbers = n².',
        'n = 11, so sum = 11².',
        '= 121.'
      ],
      explanation: [
        'Sum of first 11 odd numbers = 11² = 121.'
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ..., what is the 14th term?',
      answer: "377",
      hints: [
        'Continue from the 12th (144) and 13th (233).',
        'F₁₄ = F₁₃ + F₁₂ = 233 + 144.',
        '= 377.'
      ],
      explanation: [
        'F₁₃ = 233, F₁₂ = 144.',
        'F₁₄ = 233 + 144 = 377.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 2,
      question: 'The Fibonacci sequence starts 1, 1, 2, 3, 5, 8, 13, 21, ... What is the 10th Fibonacci number?',
      answer: "55",
      hints: [
        'Continue the sequence: each term = sum of previous two.',
        'F8=21, F9=13+21=34.',
        'F10=21+34=55.'
      ],
      explanation: [
        'F1=1, F2=1, F3=2, F4=3, F5=5, F6=8, F7=13, F8=21.',
        'F9 = 13 + 21 = 34.',
        'F10 = 21 + 34 = 55.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 3,
      question: 'What is the sum of the first 10 positive odd numbers: 1 + 3 + 5 + 7 + ... + 19?',
      choices: ["81", "90", "100", "110"],
      answer: "100",
      hints: [
        'The sum of the first n odd numbers = n².',
        'n = 10.',
        '10² = 100.'
      ],
      explanation: [
        'The sum of the first n odd numbers is n².',
        'Sum = 10² = 100.',
        'Alternatively: 1+3+5+7+9+11+13+15+17+19 = 100.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'Find the sum: 1² + 2² + 3² + 4² + 5² + 6².',
      answer: "91",
      hints: [
        'Calculate each square and add.',
        '1 + 4 + 9 + 16 + 25 + 36.',
        'Or use the formula n(n+1)(2n+1)/6 with n = 6.'
      ],
      explanation: [
        '1 + 4 + 9 + 16 + 25 + 36 = 91.',
        'Formula: 6 × 7 × 13 / 6 = 546/6 = 91.'
      ]
    }
  ],

  // --- Topic 10: Pigeonhole Principle --- difficulty 3-4
  [
    {
      type: "mc",
      difficulty: 3,
      question: 'A drawer has red, blue, and green socks. What is the minimum number of socks you must grab (without looking) to guarantee you have a matching pair?',
      choices: ["2", "3", "4", "6"],
      answer: "4",
      hints: [
        "There are 3 colors (pigeonholes).",
        "With 3 socks, you could have one of each color.",
        "The 4th sock must match one of the 3 colors."
      ],
      explanation: [
        "3 colors = 3 pigeonholes.",
        "With 3 socks, you might have all different colors.",
        "The 4th sock guarantees a matching pair by the Pigeonhole Principle."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'There are 30 students in a class. What is the minimum number of students that must share the same birth month? (12 months in a year)',
      answer: "3",
      hints: [
        "12 months are the pigeonholes, 30 students are the pigeons.",
        "If each month had at most 2 students, that accounts for only 24.",
        "30 ÷ 12 = 2.5, round up to 3."
      ],
      explanation: [
        "12 months = 12 pigeonholes, 30 students = 30 pigeons.",
        "By the Pigeonhole Principle, at least ⌈30/12⌉ = ⌈2.5⌉ = 3 students share a birth month."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'You pick 5 numbers from 1, 2, 3, 4, 5, 6, 7, 8. Must two of your numbers add up to 9?',
      choices: ["Yes, always", "No, not necessarily", "Only if all are odd", "Only if all are even"],
      answer: "Yes, always",
      hints: [
        "Pair numbers that sum to 9: {1,8}, {2,7}, {3,6}, {4,5}.",
        "That gives 4 pairs (pigeonholes).",
        "Picking 5 numbers from 4 pairs means at least one pair is complete."
      ],
      explanation: [
        "There are 4 pairs summing to 9: {1,8}, {2,7}, {3,6}, {4,5}.",
        "Choosing 5 numbers from these 4 pairs, by the Pigeonhole Principle, at least 2 must come from the same pair.",
        "Those two numbers sum to 9. So yes, always."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A bag contains 5 colors of marbles: red, blue, green, white, and black. What is the minimum number of marbles you must draw to guarantee at least 3 are the same color?',
      answer: "11",
      hints: [
        "There are 5 colors (pigeonholes).",
        "In the worst case, you could draw 2 of each color before getting a 3rd of any color.",
        "That is 2 × 5 = 10 marbles with no 3 of one color. The 11th guarantees it."
      ],
      explanation: [
        "Worst case: 2 of each of the 5 colors = 10 marbles.",
        "The 11th marble must match one color for a 3rd time.",
        "Minimum = 5 × 2 + 1 = 11."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'There are 7 days in a week. If 8 babies are born in a hospital, what can we guarantee?',
      choices: [
        "All were born on different days",
        "At least 2 share the same birthday weekday",
        "At least 3 share the same birthday weekday",
        "Exactly 2 share the same birthday weekday"
      ],
      answer: "At least 2 share the same birthday weekday",
      hints: [
        "There are 7 possible days of the week (pigeonholes).",
        "There are 8 babies (pigeons).",
        "Since 8 > 7, at least two must land in the same pigeonhole."
      ],
      explanation: [
        "7 days = 7 pigeonholes, 8 babies = 8 pigeons.",
        "By the Pigeonhole Principle, at least 2 babies must share the same day of the week."
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A drawer has red, blue, green, and yellow socks. What is the minimum number of socks you must grab to guarantee a matching pair?',
      answer: "5",
      hints: [
        "There are 4 colors (pigeonholes).",
        "With 4 socks, you could have one of each color.",
        "The 5th sock must match one of the 4 colors."
      ],
      explanation: [
        "4 colors = 4 pigeonholes.",
        "By the Pigeonhole Principle, grabbing 5 socks guarantees a matching pair."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'There are 50 students in a class. What is the minimum number of students that must share the same birth month?',
      choices: ["4", "5", "6", "12"],
      answer: "5",
      hints: [
        "12 months = 12 pigeonholes.",
        "50 ÷ 12 = 4.17.",
        "Round up: ⌈4.17⌉ = 5."
      ],
      explanation: [
        "By the Pigeonhole Principle, at least ⌈50/12⌉ = 5 students share a birth month."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'You pick 9 numbers from 1, 2, 3, ..., 16. Must two of them add up to 17?',
      choices: ["Yes, always", "No, not necessarily", "Only if all are odd", "Only if they are consecutive"],
      answer: "Yes, always",
      hints: [
        "Pair numbers that sum to 17: {1,16}, {2,15}, {3,14}, {4,13}, {5,12}, {6,11}, {7,10}, {8,9}.",
        "That gives 8 pairs (pigeonholes).",
        "Picking 9 numbers from 8 pairs means at least one pair is complete."
      ],
      explanation: [
        "There are 8 pairs summing to 17.",
        "Choosing 9 numbers means by the Pigeonhole Principle, at least 2 come from the same pair.",
        "Those two sum to 17. So yes, always."
      ]
    },
    {
      type: "numeric",
      difficulty: 3,
      question: 'A bag has 6 colors of marbles. What is the minimum number you must draw to guarantee at least 3 are the same color?',
      answer: "13",
      hints: [
        "There are 6 colors (pigeonholes).",
        "In the worst case, you draw 2 of each color before getting a 3rd match.",
        "2 × 6 = 12 marbles with no 3 of one color. The 13th guarantees it."
      ],
      explanation: [
        "Worst case: 2 of each of 6 colors = 12 marbles.",
        "The 13th marble must match one color for a 3rd time.",
        "Minimum = 6 × 2 + 1 = 13."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'There are 26 letters in the alphabet. If you pick 27 Scrabble tiles (each with a letter), what can you guarantee?',
      choices: [
        "All letters are different",
        "At least 2 tiles have the same letter",
        "At least 3 tiles have the same letter",
        "Nothing can be guaranteed"
      ],
      answer: "At least 2 tiles have the same letter",
      hints: [
        "26 letters = 26 pigeonholes.",
        "27 tiles = 27 pigeons.",
        "Since 27 > 26, at least two must share a letter."
      ],
      explanation: [
        "26 letters = 26 pigeonholes, 27 tiles = 27 pigeons.",
        "By the Pigeonhole Principle, at least 2 tiles must have the same letter."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'There are 365 days in a year. What is the minimum number of people needed to guarantee at least 2 share a birthday?',
      answer: "366",
      hints: [
        "365 days = 365 pigeonholes.",
        "With 365 people, each could have a unique birthday.",
        "The 366th person must share a birthday with someone."
      ],
      explanation: [
        "365 possible birthdays = 365 pigeonholes.",
        "By the Pigeonhole Principle, 366 people guarantees at least 2 share a birthday."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A drawer has red, blue, green, yellow, and white socks. What is the minimum you must grab to guarantee a matching pair?',
      choices: ["3", "4", "5", "6"],
      answer: "6",
      hints: [
        "There are 5 colors (pigeonholes).",
        "With 5 socks, you could have one of each color.",
        "The 6th sock must match one of the 5 colors."
      ],
      explanation: [
        "5 colors = 5 pigeonholes.",
        "By the Pigeonhole Principle, grabbing 6 socks guarantees a matching pair."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A bag has 4 colors of marbles. What is the minimum number you must draw to guarantee at least 4 are the same color?',
      answer: "13",
      hints: [
        "There are 4 colors (pigeonholes).",
        "In the worst case, you draw 3 of each color before getting a 4th match.",
        "3 × 4 = 12, then the 13th guarantees it."
      ],
      explanation: [
        "Worst case: 3 of each of 4 colors = 12 marbles.",
        "The 13th marble must match one color for a 4th time.",
        "Minimum = 4 × 3 + 1 = 13."
      ]
    },
    {
      type: "mc",
      difficulty: 4,
      question: 'You pick 6 numbers from {1, 2, 3, ..., 10}. Must two of your numbers add up to 11?',
      choices: ["Yes, always", "No, not necessarily", "Only if all are odd", "Only if all are even"],
      answer: "Yes, always",
      hints: [
        "Pair numbers that sum to 11: {1,10}, {2,9}, {3,8}, {4,7}, {5,6}.",
        "That gives 5 pairs (pigeonholes).",
        "Picking 6 numbers from 5 pairs means at least one pair is complete."
      ],
      explanation: [
        "There are 5 pairs summing to 11: {1,10}, {2,9}, {3,8}, {4,7}, {5,6}.",
        "Choosing 6 numbers means by the Pigeonhole Principle, at least 2 come from the same pair.",
        "Those two sum to 11. So yes, always."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A drawer has red, blue, green, yellow, white, and black socks. What is the minimum you must grab to guarantee a matching pair?',
      choices: ["4", "5", "6", "7"],
      answer: "7",
      hints: [
        "There are 6 colors (pigeonholes).",
        "With 6 socks, you could have one of each color.",
        "The 7th sock must match one of the 6 colors."
      ],
      explanation: [
        "6 colors = 6 pigeonholes.",
        "By the Pigeonhole Principle, grabbing 7 socks guarantees a matching pair."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'There are 40 students in a class. What is the minimum number of students that must share the same birth month?',
      answer: "4",
      hints: [
        "12 months = 12 pigeonholes.",
        "40 ÷ 12 = 3.33.",
        "Round up: ⌈3.33⌉ = 4."
      ],
      explanation: [
        "By the Pigeonhole Principle, at least ⌈40/12⌉ = 4 students share a birth month."
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A bag has 7 colors of marbles. What is the minimum number you must draw to guarantee at least 4 are the same color?',
      answer: "22",
      hints: [
        "There are 7 colors (pigeonholes).",
        "In the worst case, you draw 3 of each color before getting a 4th match.",
        "3 × 7 = 21 marbles with no 4 of one color. The 22nd guarantees it."
      ],
      explanation: [
        "Worst case: 3 of each of 7 colors = 21 marbles.",
        "The 22nd marble must match one color for a 4th time.",
        "Minimum = 7 × 3 + 1 = 22."
      ]
    },
    {
      type: "mc",
      difficulty: 3,
      question: 'A drawer has red, blue, green, yellow, white, black, and orange socks. What is the minimum you must grab to guarantee a matching pair?',
      choices: ["5", "6", "7", "8"],
      answer: "8",
      hints: [
        'There are 7 colors (pigeonholes).',
        'With 7 socks, you could have one of each color.',
        'The 8th sock must match one of the 7 colors.'
      ],
      explanation: [
        '7 colors = 7 pigeonholes.',
        'By the Pigeonhole Principle, grabbing 8 socks guarantees a matching pair.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'There are 60 students in a class. What is the minimum number of students that must share the same birth month?',
      answer: "5",
      hints: [
        '12 months = 12 pigeonholes.',
        '60 ÷ 12 = 5.',
        'At least 5 students must share the same month.'
      ],
      explanation: [
        'By the Pigeonhole Principle, at least ⌈60/12⌉ = 5 students share a birth month.'
      ]
    },
    {
      type: "numeric",
      difficulty: 4,
      question: 'A bag has 8 colors of marbles. What is the minimum number you must draw to guarantee at least 3 are the same color?',
      answer: "17",
      hints: [
        'There are 8 colors (pigeonholes).',
        'In the worst case, you draw 2 of each color before getting a 3rd match.',
        '2 × 8 = 16 marbles with no 3 of one color. The 17th guarantees it.'
      ],
      explanation: [
        'Worst case: 2 of each of 8 colors = 16 marbles.',
        'The 17th marble must match one color for a 3rd time.',
        'Minimum = 8 × 2 + 1 = 17.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 3,
      question: 'A drawer has red, blue, and green socks. What is the minimum number of socks you must pull out (in the dark) to guarantee a matching pair?',
      answer: "4",
      hints: [
        'Apply the pigeonhole principle.',
        'There are 3 colors (pigeonholes).',
        'After pulling 3 socks, you might have one of each color. The 4th must match.'
      ],
      explanation: [
        'With 3 colors, worst case: first 3 socks are all different colors.',
        'The 4th sock must match one of the 3 colors.',
        'Minimum = 3 + 1 = 4 socks.'
      ]
    }
  ,
    {
      type: "mc",
      difficulty: 4,
      question: 'In a class of 367 students, what is the minimum number of students guaranteed to share a birthday? (Assume 366 possible birthdays including Feb 29.)',
      choices: ["1", "2", "3", "367"],
      answer: "2",
      hints: [
        '367 students, 366 possible birthdays.',
        'By pigeonhole: 367 items into 366 boxes → at least one box has ≥ 2.',
        'So at least 2 students share a birthday.'
      ],
      explanation: [
        '367 students and 366 possible birthdays.',
        'By the pigeonhole principle, at least ⌈367/366⌉ = 2 students share a birthday.',
        'Minimum guaranteed = 2.'
      ]
    }
  ,
    {
      type: "numeric",
      difficulty: 4,
      question: 'A bag has 5 different colored marbles. How many marbles must you draw to guarantee at least 3 are the same color?',
      answer: "11",
      hints: [
        'Worst case: draw as many as possible without 3 of any color.',
        'Maximum without 3 of any color = 2 of each = 2 × 5 = 10.',
        'The 11th must give a 3rd of some color.'
      ],
      explanation: [
        'Worst case: 2 of each of 5 colors = 10 marbles, none with 3 of a kind.',
        'The 11th marble must match some color for a 3rd time.',
        'Minimum = 5 × 2 + 1 = 11.'
      ]
    }
  ]
];
