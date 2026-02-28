// ===== Chapters 13-15: Data & Statistics, Counting & Probability, Problem-Solving =====
// Pool format: tutorial (15), challenge (15), boss (10) per world

// ============================================================
// WORLD 12 — Data Dungeon
// Chapter: Data & Statistics
// ============================================================
WORLDS[12] = {
  id: 12, name: "Data Dungeon", icon: "📊",
  chapter: "Data & Statistics", color: "#607d8b",
  bossName: "Datavox, the Information Hydra",
  bossDesc: "A multi-headed hydra — each head a different chart type",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'Find the mean (average) of: <span class="math">4, 8, 6, 10, 12</span>',
        answer: "8",
        hints: [
          "Add all the values: 4 + 8 + 6 + 10 + 12.",
          "The sum is 40. Now divide by how many values there are.",
          "40 ÷ 5 = 8."
        ],
        explanation: [
          "Sum = 4 + 8 + 6 + 10 + 12 = 40",
          "Count = 5",
          "Mean = 40 ÷ 5 = <strong>8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Find the median of: <span class="math">3, 7, 1, 9, 5</span>',
        answer: "5",
        hints: [
          "First, sort the numbers from smallest to largest.",
          "Sorted: 1, 3, 5, 7, 9.",
          "The median is the middle value."
        ],
        explanation: [
          "Sorted: 1, 3, <strong>5</strong>, 7, 9",
          "The middle (3rd) value is <strong>5</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Find the mode of: <span class="math">2, 5, 3, 5, 8, 5, 1</span>',
        answer: "5",
        hints: [
          "The mode is the number that appears most often.",
          "Count each: 1→once, 2→once, 3→once, 5→three times, 8→once.",
          "5 appears the most."
        ],
        explanation: [
          "5 appears 3 times — more than any other value.",
          "Mode = <strong>5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is the range of: <span class="math">4, 11, 7, 2, 9</span>?',
        answer: "9",
        hints: [
          "Range = largest value − smallest value.",
          "Largest = 11, smallest = 2.",
          "11 − 2 = 9."
        ],
        explanation: [
          "Range = max − min = 11 − 2 = <strong>9</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A bar chart shows how many students like each subject: Math = 8, Science = 12, English = 6, Art = 10. Which subject is the most popular?',
        choices: ["Math", "Science", "English", "Art"],
        answer: "Science",
        hints: [
          "Look for the subject with the highest number.",
          "Compare: 8, 12, 6, 10.",
          "12 is the largest — that's Science."
        ],
        explanation: [
          "<strong>Science</strong> has the most students with 12.",
          "It would have the tallest bar on the chart."
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is the mean (average) of <span class="math">10, 20, 30</span>?',
        choices: ["10", "15", "20", "30"],
        answer: "20",
        hints: [
          "Add them up: 10 + 20 + 30 = 60.",
          "Divide by 3 (the number of values).",
          "60 ÷ 3 = 20."
        ],
        explanation: [
          "Sum = 60, count = 3.",
          "Mean = 60 ÷ 3 = <strong>20</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'Which measure of center finds the <em>middle value</em> when data is sorted?',
        choices: ["Mean", "Median", "Mode", "Range"],
        answer: "Median",
        hints: [
          "The mean is the average (add and divide).",
          "The mode is the most common value.",
          "The one that uses the middle position is..."
        ],
        explanation: [
          "The <strong>median</strong> is the middle value when data is arranged in order.",
          "Mean = average, Mode = most frequent, Range = spread."
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Find the mean of: <span class="math">3, 5, 7</span>',
        answer: "5",
        hints: [
          "Add all three: 3 + 5 + 7 = 15.",
          "Divide by 3.",
          "15 ÷ 3 = 5."
        ],
        explanation: [
          "Sum = 15, count = 3.",
          "Mean = 15 ÷ 3 = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A pie chart shows favorite foods for 40 students: Pizza = 50%, Pasta = 25%, Salad = 25%. How many students prefer pizza?',
        choices: ["10", "15", "20", "25"],
        answer: "20",
        hints: [
          "50% of the students prefer pizza.",
          "50% of 40 = ?",
          "0.50 × 40 = 20."
        ],
        explanation: [
          "50% of 40 students = 0.50 × 40 = <strong>20</strong> students."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Find the median of: <span class="math">10, 20, 30, 40</span> (four values)',
        answer: "25",
        hints: [
          "With an even number of values, find the two middle values.",
          "The two middle values are 20 and 30.",
          "Average them: (20 + 30) ÷ 2 = 25."
        ],
        explanation: [
          "Sorted: 10, <strong>20, 30</strong>, 40",
          "Median = (20 + 30) ÷ 2 = <strong>25</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A line graph shows temperatures over 5 days: Mon = 60°F, Tue = 65°F, Wed = 70°F, Thu = 68°F, Fri = 72°F. On which day was it warmest?',
        choices: ["Monday", "Wednesday", "Thursday", "Friday"],
        answer: "Friday",
        hints: [
          "Compare all the temperatures.",
          "60, 65, 70, 68, 72.",
          "72 is the highest, which is Friday."
        ],
        explanation: [
          "<strong>Friday</strong> had the highest temperature at 72°F."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A student took 6 tests and has an average score of 85. What is the total of all 6 test scores?',
        answer: "510",
        hints: [
          "Total = mean × number of items.",
          "Total = 85 × 6.",
          "85 × 6 = 510."
        ],
        explanation: [
          "Total = mean × count = 85 × 6 = <strong>510</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Which measure of center is <em>least</em> affected by an extreme outlier?',
        choices: ["Mean", "Median", "Sum", "Range"],
        answer: "Median",
        hints: [
          "An outlier pulls the mean toward it.",
          "The median just looks at the middle position.",
          "Changing an extreme value barely shifts the middle."
        ],
        explanation: [
          "The <strong>median</strong> is least affected by outliers.",
          "It only depends on the middle position, not the actual extreme values."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Find the mode of: <span class="math">4, 7, 7, 9, 2, 7, 3</span>',
        answer: "7",
        hints: [
          "Count how many times each number appears.",
          "7 appears 3 times; all others appear once.",
          "The most frequent value is 7."
        ],
        explanation: [
          "7 appears 3 times (more than any other).",
          "Mode = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A stem-and-leaf plot shows: <br>1 | 2 &nbsp; 5 &nbsp; 8<br>2 | 0 &nbsp; 3<br>This represents 12, 15, 18, 20, 23. What is the median?',
        choices: ["15", "18", "20", "17"],
        answer: "18",
        hints: [
          "The data values are 12, 15, 18, 20, 23 — already sorted.",
          "With 5 values, the median is the 3rd value.",
          "The 3rd value is 18."
        ],
        explanation: [
          "Data: 12, 15, <strong>18</strong>, 20, 23",
          "Median = 3rd value = <strong>18</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'Find the median of: <span class="math">3, 5, 8, 12, 15, 20</span> (six values)',
        answer: "10",
        hints: [
          "With 6 values, the median is the average of the 3rd and 4th values.",
          "3rd value = 8, 4th value = 12.",
          "(8 + 12) ÷ 2 = 10."
        ],
        explanation: [
          "Sorted: 3, 5, <strong>8, 12</strong>, 15, 20",
          "Median = (8 + 12) ÷ 2 = <strong>10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Three test scores are 70, 80, and 85. What must the fourth score be so the mean of all four is 75?',
        answer: "65",
        hints: [
          "Target sum = mean × count = 75 × 4 = 300.",
          "Current sum = 70 + 80 + 85 = 235.",
          "Missing score = 300 − 235 = 65."
        ],
        explanation: [
          "Needed sum = 75 × 4 = 300",
          "Known sum = 70 + 80 + 85 = 235",
          "Fourth score = 300 − 235 = <strong>65</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Data set: 5, 6, 7, 7, 8. If we add the value 100, which statistic changes the <em>most</em>?',
        choices: ["Mean", "Median", "Mode", "None change"],
        answer: "Mean",
        hints: [
          "The value 100 is an outlier — far from the other values.",
          "The mean uses every value in its calculation.",
          "The median and mode barely shift."
        ],
        explanation: [
          "Original mean = 33/5 = 6.6. New mean = 133/6 ≈ 22.2 — a huge jump!",
          "Median shifts only from 7 to 7. Mode stays 7.",
          "The <strong>mean</strong> changes the most."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A student\'s grade is calculated as: Homework 40%, Tests 60%. She scores 90 on homework and 80 on tests. What is her weighted average?',
        answer: "84",
        hints: [
          "Weighted average = (weight₁ × score₁) + (weight₂ × score₂).",
          "= 0.40 × 90 + 0.60 × 80.",
          "= 36 + 48 = 84."
        ],
        explanation: [
          "Homework: 0.40 × 90 = 36",
          "Tests: 0.60 × 80 = 48",
          "Weighted average = 36 + 48 = <strong>84</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Data: 5, 5, 5, 10, 100. The mean is 25 and the median is 5. What is true?',
        choices: [
          "The mean is much larger than the median",
          "The mean equals the median",
          "The median is larger than the mean",
          "The mode equals the mean"
        ],
        answer: "The mean is much larger than the median",
        hints: [
          "Mean = (5+5+5+10+100)/5 = 125/5 = 25.",
          "Median = middle value = 5.",
          "25 is much larger than 5."
        ],
        explanation: [
          "Mean = 25, Median = 5.",
          "The outlier (100) pulls the mean up but doesn't affect the median.",
          "<strong>The mean is much larger than the median</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'The mean of 6 numbers is 12. Five of them are 8, 10, 14, 16, and 11. What is the sixth number?',
        answer: "13",
        hints: [
          "Total sum = mean × count = 12 × 6 = 72.",
          "Sum of known five = 8 + 10 + 14 + 16 + 11 = 59.",
          "Sixth number = 72 − 59 = 13."
        ],
        explanation: [
          "Target sum = 12 × 6 = 72",
          "Known sum = 8 + 10 + 14 + 16 + 11 = 59",
          "Missing value = 72 − 59 = <strong>13</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A student has averaged 80 on 4 math tests. What score does she need on the 5th test to raise her average to 84?',
        answer: "100",
        hints: [
          "Current total = 80 × 4 = 320.",
          "Needed total for an 84 average on 5 tests = 84 × 5 = 420.",
          "Fifth test score = 420 − 320 = 100."
        ],
        explanation: [
          "Current sum = 80 × 4 = 320",
          "Needed sum = 84 × 5 = 420",
          "Fifth score = 420 − 320 = <strong>100</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A grade is calculated as: Quizzes 20% (score 95), Homework 30% (score 100), Exams 50% (score 82). What is the final weighted average?',
        answer: "90",
        hints: [
          "Multiply each score by its weight.",
          "0.20 × 95 = 19, 0.30 × 100 = 30, 0.50 × 82 = 41.",
          "Add them: 19 + 30 + 41 = 90."
        ],
        explanation: [
          "Quizzes: 0.20 × 95 = 19",
          "Homework: 0.30 × 100 = 30",
          "Exams: 0.50 × 82 = 41",
          "Weighted average = 19 + 30 + 41 = <strong>90</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Data: 12, 14, 15, 13, 14, 60. If we remove the outlier (60), what happens?',
        choices: [
          "The mean decreases",
          "The mean increases",
          "The median increases",
          "The mode changes"
        ],
        answer: "The mean decreases",
        hints: [
          "With 60: mean = 128/6 ≈ 21.3.",
          "Without 60: mean = 68/5 = 13.6.",
          "Removing the high outlier lowers the mean."
        ],
        explanation: [
          "Mean with outlier = (12+14+15+13+14+60)/6 = 128/6 ≈ 21.3",
          "Mean without outlier = (12+14+15+13+14)/5 = 68/5 = 13.6",
          "Removing 60 <strong>decreases the mean</strong> significantly."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'The data set is: 5, 8, 12, 3. The range is 9. If we add the value 15 to the set, what is the new range?',
        answer: "12",
        hints: [
          "Range = max − min.",
          "New set: 3, 5, 8, 12, 15. Max = 15, min = 3.",
          "15 − 3 = 12."
        ],
        explanation: [
          "New data: {3, 5, 8, 12, 15}",
          "Range = 15 − 3 = <strong>12</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the median of: <span class="math">2, 5, 7, 8, 10, 12</span>?',
        choices: ["7", "7.5", "8", "8.5"],
        answer: "7.5",
        hints: [
          "There are 6 values (even count).",
          "The middle two are the 3rd and 4th values: 7 and 8.",
          "(7 + 8) ÷ 2 = 7.5."
        ],
        explanation: [
          "Middle two values: 7 and 8",
          "Median = (7 + 8) ÷ 2 = <strong>7.5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Data: 2, 3, 3, 5, 12. What is the mean?',
        answer: "5",
        hints: [
          "Sum = 2 + 3 + 3 + 5 + 12 = 25.",
          "Count = 5.",
          "Mean = 25 ÷ 5 = 5."
        ],
        explanation: [
          "Sum = 2 + 3 + 3 + 5 + 12 = 25",
          "Mean = 25 ÷ 5 = <strong>5</strong>",
          "(Notice: mean = 5, median = 3, mode = 3 — they're all different!)"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A bar chart shows books read: Jan = 4, Feb = 6, Mar = 3, Apr = 7, May = 5. What is the total books read over all 5 months?',
        choices: ["20", "25", "30", "15"],
        answer: "25",
        hints: [
          "Add all the values: 4 + 6 + 3 + 7 + 5.",
          "= 10 + 3 + 7 + 5.",
          "= 25."
        ],
        explanation: [
          "Total = 4 + 6 + 3 + 7 + 5 = <strong>25</strong> books"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Class A has 5 students with test scores: 88, 92, 78, 90, 82. Class B has 5 students with scores: 95, 70, 85, 80, 90. How much higher is Class A\'s mean than Class B\'s mean?',
        answer: "2",
        hints: [
          "Class A total = 88 + 92 + 78 + 90 + 82 = 430. Mean = 86.",
          "Class B total = 95 + 70 + 85 + 80 + 90 = 420. Mean = 84.",
          "Difference = 86 − 84 = 2."
        ],
        explanation: [
          "Class A mean = 430 ÷ 5 = 86",
          "Class B mean = 420 ÷ 5 = 84",
          "Difference = 86 − 84 = <strong>2</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'If you add 10 to every value in a data set, what happens?',
        choices: [
          "Mean increases by 10, range stays the same",
          "Mean stays the same, range increases by 10",
          "Both mean and range increase by 10",
          "Both mean and range stay the same"
        ],
        answer: "Mean increases by 10, range stays the same",
        hints: [
          "Adding 10 to each value shifts every number up by 10.",
          "The mean goes up by 10 since it's an average of the shifted values.",
          "The range stays the same because max and min both shift by 10."
        ],
        explanation: [
          "Adding a constant to every value increases the mean by that constant.",
          "Range = max − min. Both shift equally, so the difference is unchanged.",
          "<strong>Mean increases by 10, range stays the same</strong>."
        ]
      }
    ],

    // ── Extra Challenge: Stem-and-Leaf Plots ──
    extraChallenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'A stem-and-leaf plot has stem 2 with leaves 3, 7 and stem 3 with leaves 1, 4, 8. What is the median of the data set?',
        answer: "31",
        hints: [
          "The data values are: 23, 27, 31, 34, 38.",
          "There are 5 values. The median is the middle (3rd) value.",
          "The 3rd value is 31."
        ],
        explanation: [
          "Data: 23, 27, 31, 34, 38 (5 values, already sorted)",
          "Median = middle value = 3rd value",
          "Median = <strong>31</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'In a stem-and-leaf plot, the stem "3" has leaves "2, 5, 5, 8". How many data values are in the 30s?',
        choices: ["3", "4", "5", "8"],
        answer: "4",
        hints: [
          "Each leaf represents one data value.",
          "Leaves 2, 5, 5, 8 give: 32, 35, 35, 38.",
          "That's 4 values."
        ],
        explanation: [
          "Each leaf is one data point: 32, 35, 35, 38.",
          "Count the leaves: <strong>4</strong> values in the 30s.",
          "A stem-and-leaf plot preserves the original data while organizing it."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A stem-and-leaf plot shows: stem 2 → leaves 4, 6; stem 3 → leaves 1, 5, 9; stem 4 → leaf 2. What is the range of this data set?',
        answer: "18",
        hints: [
          "The data is: 24, 26, 31, 35, 39, 42.",
          "Range = maximum − minimum.",
          "42 − 24 = 18."
        ],
        explanation: [
          "Data: 24, 26, 31, 35, 39, 42",
          "Range = max − min = 42 − 24 = <strong>18</strong>",
          "Stem-and-leaf plots make it easy to find the range — the first and last values."
        ]
      },
    ],

    // ── Boss (10 problems, difficulty 3-4) ──────────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'The mean of 6 numbers is 10. Five of them are 8, 12, 7, 11, and 14. What is the sixth number?',
        answer: "8",
        hints: [
          "Sum = mean × count = 10 × 6 = 60.",
          "Sum of five known = 8 + 12 + 7 + 11 + 14 = 52.",
          "Sixth = 60 − 52 = 8."
        ],
        explanation: [
          "Total sum = 10 × 6 = 60",
          "Known sum = 8 + 12 + 7 + 11 + 14 = 52",
          "Sixth number = 60 − 52 = <strong>8</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Data: 3, 3, 5, 7, 7, 7, 9. What is the mode?',
        choices: ["3", "5", "7", "9"],
        answer: "7",
        hints: [
          "Count each value: 3 appears twice, 5 once, 7 three times, 9 once.",
          "7 appears the most often.",
          "Mode = 7."
        ],
        explanation: [
          "7 appears 3 times — more than any other value.",
          "Mode = <strong>7</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'The five numbers <span class="math">7, 9, x, 15, 20</span> are in order. Their median is 11. What is <span class="math">x</span>?',
        answer: "11",
        hints: [
          "With 5 values in order, the median is the 3rd value.",
          "The 3rd value is x.",
          "So x = 11."
        ],
        explanation: [
          "For 5 sorted values, the median = 3rd value.",
          "The 3rd value is x, and the median is 11.",
          "Therefore x = <strong>11</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Find the mean of: <span class="math">85, 90, 78, 92, 88, 95</span>',
        answer: "88",
        hints: [
          "Sum = 85 + 90 + 78 + 92 + 88 + 95.",
          "= 528.",
          "Mean = 528 ÷ 6 = 88."
        ],
        explanation: [
          "Sum = 85 + 90 + 78 + 92 + 88 + 95 = 528",
          "Mean = 528 ÷ 6 = <strong>88</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A data set has mean = 20, median = 18, mode = 15. If we add the value 50 to the set, which statistic changes the most?',
        choices: ["The mean", "The median", "The mode", "All change equally"],
        answer: "The mean",
        hints: [
          "50 is an outlier (much larger than the others).",
          "It pulls the mean up significantly.",
          "Median shifts only slightly; mode stays at 15."
        ],
        explanation: [
          "50 is far above the current values, so it has the biggest impact on the <strong>mean</strong>.",
          "The median barely changes and the mode stays at 15."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Grade calculation: Test 1 (20%) = 80, Test 2 (30%) = 90, Final Exam (50%) = 76. What is the weighted average?',
        answer: "81",
        hints: [
          "Multiply each by its weight: 0.20 × 80, 0.30 × 90, 0.50 × 76.",
          "= 16 + 27 + 38.",
          "= 81."
        ],
        explanation: [
          "0.20 × 80 = 16",
          "0.30 × 90 = 27",
          "0.50 × 76 = 38",
          "Weighted average = 16 + 27 + 38 = <strong>81</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A stem-and-leaf plot shows:<br>2 | 1 &nbsp; 4 &nbsp; 7<br>3 | 0 &nbsp; 3 &nbsp; 5 &nbsp; 8<br>4 | 2<br>What is the median of this data set?',
        choices: ["30", "33", "31.5", "35"],
        answer: "31.5",
        hints: [
          "Data: 21, 24, 27, 30, 33, 35, 38, 42 — that's 8 values.",
          "Median of 8 values = average of 4th and 5th.",
          "4th = 30, 5th = 33. (30 + 33) ÷ 2 = 31.5."
        ],
        explanation: [
          "Data: 21, 24, 27, <strong>30, 33</strong>, 35, 38, 42",
          "Median = (30 + 33) ÷ 2 = <strong>31.5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'The mean of 8 numbers is 15. Six of them are 12, 18, 10, 20, 14, and 16. What is the sum of the other two numbers?',
        answer: "30",
        hints: [
          "Total = mean × count = 15 × 8 = 120.",
          "Sum of six known = 12 + 18 + 10 + 20 + 14 + 16 = 90.",
          "Sum of other two = 120 − 90 = 30."
        ],
        explanation: [
          "Total sum = 15 × 8 = 120",
          "Known sum = 12 + 18 + 10 + 20 + 14 + 16 = 90",
          "Sum of missing two = 120 − 90 = <strong>30</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A data set has values 10, 10, 15, 20, 20. The mean is 15 and the median is 15. Which statement is true?',
        choices: [
          "The data set has one mode",
          "The data set has two modes",
          "The mode is 15",
          "The data has no mode"
        ],
        answer: "The data set has two modes",
        hints: [
          "Count: 10 appears twice, 15 once, 20 twice.",
          "Both 10 and 20 appear the most (2 times each).",
          "So there are two modes."
        ],
        explanation: [
          "10 appears 2 times, 15 appears 1 time, 20 appears 2 times.",
          "Both 10 and 20 are modes (bimodal).",
          "<strong>The data set has two modes</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Group A has 5 students with an average score of 82. Group B has 3 students with an average score of 90. What is the overall average of all 8 students?',
        answer: "85",
        hints: [
          "Group A total = 82 × 5 = 410.",
          "Group B total = 90 × 3 = 270.",
          "Overall mean = (410 + 270) ÷ 8 = 680 ÷ 8 = 85."
        ],
        explanation: [
          "Group A sum = 82 × 5 = 410",
          "Group B sum = 90 × 3 = 270",
          "Overall mean = (410 + 270) ÷ 8 = 680 ÷ 8 = <strong>85</strong>"
        ]
      }
    ]

  }
};

// ============================================================
// WORLD 13 — Counting Cosmos
// Chapter: Counting & Probability
// ============================================================
WORLDS[13] = {
  id: 13, name: "Counting Cosmos", icon: "🌌",
  chapter: "Counting & Probability", color: "#7c4dff",
  bossName: "Combinus, the Counting Kraken",
  bossDesc: "A many-tentacled creature whose arms branch combinatorially",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'You have 3 shirts and 4 pairs of pants. How many different outfits can you make?',
        answer: "12",
        hints: [
          "Use the multiplication principle: choices₁ × choices₂.",
          "3 shirts × 4 pants.",
          "3 × 4 = 12."
        ],
        explanation: [
          "By the multiplication principle:",
          "3 × 4 = <strong>12</strong> outfits"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'How many ways can you arrange 3 books (A, B, C) on a shelf?',
        answer: "6",
        hints: [
          "First slot: 3 choices. Second: 2. Third: 1.",
          "3 × 2 × 1 = ?",
          "This is called 3 factorial (3!)."
        ],
        explanation: [
          "3! = 3 × 2 × 1 = <strong>6</strong> arrangements"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is <span class="math">4!</span> (4 factorial)?',
        choices: ["12", "16", "24", "44"],
        answer: "24",
        hints: [
          "4! means 4 × 3 × 2 × 1.",
          "4 × 3 = 12. Then 12 × 2 = 24.",
          "24 × 1 = 24."
        ],
        explanation: [
          "4! = 4 × 3 × 2 × 1 = <strong>24</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A fair coin is flipped. What is the probability of getting heads?',
        choices: ["1/2", "1/4", "1/3", "1"],
        answer: "1/2",
        hints: [
          "There are 2 equally likely outcomes: heads or tails.",
          "Favorable outcomes (heads) = 1.",
          "P(heads) = 1/2."
        ],
        explanation: [
          "P(heads) = favorable / total = 1/2 = <strong>1/2</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'A bag has 3 red and 2 blue marbles. What is the probability of drawing a red marble?',
        choices: ["3/5", "2/5", "3/2", "1/3"],
        answer: "3/5",
        hints: [
          "Total marbles = 3 + 2 = 5.",
          "Favorable (red) = 3.",
          "P(red) = 3/5."
        ],
        explanation: [
          "P(red) = 3/5 = <strong>3/5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'A standard die has faces 1 through 6. How many total outcomes are there when you roll one die?',
        answer: "6",
        hints: [
          "List the possibilities: 1, 2, 3, 4, 5, 6.",
          "Count them up.",
          "There are 6 outcomes."
        ],
        explanation: [
          "A standard die has 6 faces: {1, 2, 3, 4, 5, 6}.",
          "Total outcomes = <strong>6</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'An ice cream shop offers 3 flavors and 2 toppings. How many different single-scoop sundaes can you make (1 flavor + 1 topping)?',
        choices: ["5", "6", "8", "3"],
        answer: "6",
        hints: [
          "Use the multiplication principle.",
          "3 flavors × 2 toppings.",
          "3 × 2 = 6."
        ],
        explanation: [
          "Multiplication principle: 3 × 2 = <strong>6</strong> sundaes"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">5!</span> (5 factorial)?',
        answer: "120",
        hints: [
          "5! = 5 × 4 × 3 × 2 × 1.",
          "5 × 4 = 20. Then 20 × 3 = 60.",
          "60 × 2 = 120."
        ],
        explanation: [
          "5! = 5 × 4 × 3 × 2 × 1 = <strong>120</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'You roll a standard die. What is the probability of rolling an even number?',
        choices: ["1/2", "1/3", "1/6", "2/3"],
        answer: "1/2",
        hints: [
          "Even numbers on a die: 2, 4, 6.",
          "That's 3 favorable outcomes out of 6 total.",
          "P = 3/6 = 1/2."
        ],
        explanation: [
          "Even outcomes: {2, 4, 6} → 3 outcomes",
          "P(even) = 3/6 = <strong>1/2</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A coin is flipped twice. How many total outcomes are there? (List: HH, HT, TH, TT)',
        answer: "4",
        hints: [
          "First flip: 2 outcomes. Second flip: 2 outcomes.",
          "Total = 2 × 2 = 4.",
          "They are: HH, HT, TH, TT."
        ],
        explanation: [
          "Total outcomes = 2 × 2 = <strong>4</strong>",
          "(HH, HT, TH, TT)"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A bag has 5 red, 3 blue, and 2 green marbles. What is the probability of NOT drawing green?',
        choices: ["4/5", "2/10", "1/5", "3/10"],
        answer: "4/5",
        hints: [
          "Total = 5 + 3 + 2 = 10 marbles.",
          "Green = 2, so NOT green = 10 − 2 = 8.",
          "P(not green) = 8/10 = 4/5."
        ],
        explanation: [
          "Not green = 10 − 2 = 8",
          "P(not green) = 8/10 = <strong>4/5</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'A 2-digit code uses digits 1-5. Each digit can be used only once. How many codes are possible?',
        answer: "20",
        hints: [
          "First digit: 5 choices.",
          "Second digit: 4 choices (can't repeat).",
          "5 × 4 = 20."
        ],
        explanation: [
          "First digit: 5 choices, second: 4 choices",
          "Total = 5 × 4 = <strong>20</strong> codes"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'You roll a die. What is the probability of rolling a number greater than 4?',
        choices: ["1/6", "1/3", "1/2", "2/3"],
        answer: "1/3",
        hints: [
          "Numbers greater than 4: 5 and 6.",
          "That's 2 favorable outcomes out of 6.",
          "P = 2/6 = 1/3."
        ],
        explanation: [
          "Favorable: {5, 6} → 2 outcomes",
          "P(>4) = 2/6 = <strong>1/3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'You can choose a sandwich (3 types) and a drink (4 types) and a side (2 types). How many different meals can you make?',
        answer: "24",
        hints: [
          "Multiply all the choices together.",
          "3 × 4 × 2 = ?",
          "= 24."
        ],
        explanation: [
          "3 × 4 × 2 = <strong>24</strong> meals"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'A spinner has 8 equal sections numbered 1-8. What is the probability of landing on a prime number?',
        choices: ["3/8", "4/8", "5/8", "2/8"],
        answer: "4/8",
        hints: [
          "Prime numbers from 1-8: 2, 3, 5, 7.",
          "That's 4 primes out of 8 sections.",
          "P = 4/8."
        ],
        explanation: [
          "Primes in {1,2,3,4,5,6,7,8}: {2, 3, 5, 7} → 4 primes",
          "P(prime) = 4/8 = <strong>4/8</strong> (= 1/2)"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────
    challenge: [
      {
        type: "numeric", difficulty: 2,
        question: 'How many ways can you choose 2 students from a group of 5? (Order does not matter)',
        answer: "10",
        hints: [
          "This is a combination: C(5, 2).",
          "C(5,2) = 5! / (2! × 3!) = (5 × 4) / (2 × 1).",
          "= 20 / 2 = 10."
        ],
        explanation: [
          "C(5,2) = (5 × 4) / (2 × 1) = <strong>10</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'How many ways can 4 people line up in a row? (Order matters)',
        answer: "24",
        hints: [
          "This is a permutation of 4 items.",
          "4! = 4 × 3 × 2 × 1.",
          "= 24."
        ],
        explanation: [
          "4! = 4 × 3 × 2 × 1 = <strong>24</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Two dice are rolled. How many total outcomes are there?',
        choices: ["6", "12", "36", "24"],
        answer: "36",
        hints: [
          "First die: 6 outcomes. Second die: 6 outcomes.",
          "Total = 6 × 6.",
          "= 36."
        ],
        explanation: [
          "Total outcomes = 6 × 6 = <strong>36</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two dice are rolled. What is the probability that the sum is 7?',
        choices: ["1/6", "7/36", "1/12", "5/36"],
        answer: "1/6",
        hints: [
          "Pairs that sum to 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
          "That's 6 favorable outcomes out of 36 total.",
          "6/36 = 1/6."
        ],
        explanation: [
          "Favorable pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → 6 pairs",
          "P = 6/36 = <strong>1/6</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A license plate has 2 letters (A-Z) followed by 3 digits (0-9). Repeats allowed. How many plates are possible?',
        answer: "676000",
        hints: [
          "Letters: 26 choices each → 26 × 26 = 676.",
          "Digits: 10 choices each → 10 × 10 × 10 = 1000.",
          "Total = 676 × 1000 = 676,000."
        ],
        explanation: [
          "26 × 26 × 10 × 10 × 10 = 676 × 1000 = <strong>676,000</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'The probability of rain tomorrow is 0.3. What is the probability it does NOT rain?',
        choices: ["0.3", "0.7", "0.5", "1.3"],
        answer: "0.7",
        hints: [
          "P(event) + P(not event) = 1.",
          "P(not rain) = 1 − 0.3.",
          "= 0.7."
        ],
        explanation: [
          "P(not rain) = 1 − P(rain) = 1 − 0.3 = <strong>0.7</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many ways can you choose 3 students from a group of 7? (Order does not matter)',
        answer: "35",
        hints: [
          "C(7,3) = 7! / (3! × 4!).",
          "= (7 × 6 × 5) / (3 × 2 × 1).",
          "= 210 / 6 = 35."
        ],
        explanation: [
          "C(7,3) = (7 × 6 × 5) / (3 × 2 × 1) = 210 / 6 = <strong>35</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A coin is flipped 3 times. What is the probability of getting exactly 2 heads?',
        choices: ["3/8", "1/4", "1/2", "1/8"],
        answer: "3/8",
        hints: [
          "Total outcomes = 2³ = 8.",
          "Exactly 2 heads: HHT, HTH, THH — that's 3.",
          "P = 3/8."
        ],
        explanation: [
          "Favorable: {HHT, HTH, THH} = 3 outcomes",
          "Total = 8 outcomes",
          "P(exactly 2 heads) = <strong>3/8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A 4-digit PIN uses digits 0-9, and repeats are allowed. How many PINs are possible?',
        answer: "10000",
        hints: [
          "Each of the 4 positions has 10 choices (0-9).",
          "10 × 10 × 10 × 10.",
          "= 10,000."
        ],
        explanation: [
          "10⁴ = 10 × 10 × 10 × 10 = <strong>10,000</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two dice are rolled. What is the probability the sum is 2 (snake eyes)?',
        choices: ["1/36", "2/36", "1/6", "1/12"],
        answer: "1/36",
        hints: [
          "The only way to get sum 2 is (1, 1).",
          "That's 1 favorable outcome out of 36.",
          "P = 1/36."
        ],
        explanation: [
          "Only (1,1) gives sum 2.",
          "P = 1/36 = <strong>1/36</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many ways can you choose 2 toppings from 6 available toppings for a pizza?',
        answer: "15",
        hints: [
          "C(6,2) = 6! / (2! × 4!).",
          "= (6 × 5) / (2 × 1).",
          "= 30 / 2 = 15."
        ],
        explanation: [
          "C(6,2) = (6 × 5) / (2 × 1) = <strong>15</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A bag has 4 red, 3 blue, and 2 green marbles. What is P(not green)?',
        choices: ["7/9", "2/9", "5/9", "4/9"],
        answer: "7/9",
        hints: [
          "Total = 4 + 3 + 2 = 9.",
          "Not green = 9 − 2 = 7.",
          "P(not green) = 7/9."
        ],
        explanation: [
          "Total = 9. Not green = 9 − 2 = 7.",
          "P(not green) = <strong>7/9</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A 3-letter code is made from the letters A, B, C, D, E (no repeats). How many codes are possible?',
        answer: "60",
        hints: [
          "First letter: 5 choices. Second: 4. Third: 3.",
          "5 × 4 × 3 = ?",
          "= 60."
        ],
        explanation: [
          "P(5,3) = 5 × 4 × 3 = <strong>60</strong> codes"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'Two fair coins are flipped. What is the probability of getting at least one head?',
        choices: ["3/4", "1/2", "1/4", "2/3"],
        answer: "3/4",
        hints: [
          "Use the complement: P(at least 1 head) = 1 − P(no heads).",
          "P(no heads) = P(TT) = 1/4.",
          "1 − 1/4 = 3/4."
        ],
        explanation: [
          "P(no heads) = P(TT) = 1/4",
          "P(at least 1 head) = 1 − 1/4 = <strong>3/4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many ways can 5 runners finish in 1st, 2nd, and 3rd place?',
        answer: "60",
        hints: [
          "This is a permutation: P(5, 3).",
          "5 choices for 1st, 4 for 2nd, 3 for 3rd.",
          "5 × 4 × 3 = 60."
        ],
        explanation: [
          "P(5,3) = 5 × 4 × 3 = <strong>60</strong>"
        ]
      }
    ],

    // ── Extra Challenge: Expected Value & Casework Counting ──
    extraChallenge: [
      // Topic: Expected Value
      {
        type: "numeric", difficulty: 3,
        question: 'You roll a fair six-sided die and win the number of dollars shown. What is the expected value of your winnings? Give your answer as a decimal.',
        answer: "3.5",
        hints: [
          "Expected value = (1 + 2 + 3 + 4 + 5 + 6) / 6",
          "Sum = 21",
          "21 / 6 = 3.5"
        ],
        explanation: [
          "E = (1 + 2 + 3 + 4 + 5 + 6) / 6 = 21/6",
          "= <strong>3.5</strong>",
          "Expected value is the average outcome over many trials."
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A game costs $1 to play. You flip a coin: heads wins $3, tails wins $0. What is the expected profit per game?',
        choices: ["$1.50", "$0.50", "$0", "$1"],
        answer: "$0.50",
        hints: [
          "Expected winnings: ½ × $3 + ½ × $0 = $1.50.",
          "Subtract cost to play: $1.50 − $1.00.",
          "Expected profit = $0.50."
        ],
        explanation: [
          "Expected winnings = ½ × $3 + ½ × $0 = $1.50",
          "Profit = winnings − cost = $1.50 − $1.00",
          "Expected profit = <strong>$0.50</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A spinner has 3 equal sections: $2, $5, and $8. What is the expected value?',
        answer: "5",
        hints: [
          "Each section has probability 1/3.",
          "E = (1/3)(2) + (1/3)(5) + (1/3)(8)",
          "= (2 + 5 + 8)/3 = 15/3 = 5"
        ],
        explanation: [
          "E = (2 + 5 + 8) / 3 = 15/3",
          "= <strong>5</strong>",
          "When all outcomes are equally likely, expected value = average of the outcomes."
        ]
      },
      // Topic: Casework Counting
      {
        type: "numeric", difficulty: 3,
        question: 'How many two-digit numbers have digits that add up to 5?',
        answer: "5",
        hints: [
          "List by tens digit: 14, 23, 32, 41, 50.",
          "The tens digit can be 1-5 (must be at least 1 for two-digit).",
          "Tens 1→unit 4, tens 2→3, tens 3→2, tens 4→1, tens 5→0. That's 5."
        ],
        explanation: [
          "Casework by tens digit: 14, 23, 32, 41, 50",
          "Each has digit sum = 5",
          "Total: <strong>5</strong> two-digit numbers."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many ways can you make 25 cents using only nickels (5¢) and dimes (10¢)?',
        answer: "3",
        hints: [
          "Try casework on the number of dimes: 0, 1, or 2 dimes.",
          "0 dimes → 5 nickels ✓. 1 dime → 15¢ in nickels = 3 ✓. 2 dimes → 5¢ in nickels = 1 ✓.",
          "3 dimes = 30¢ > 25¢ ✗. So 3 ways."
        ],
        explanation: [
          "Case 1: 0 dimes + 5 nickels = 25¢ ✓",
          "Case 2: 1 dime + 3 nickels = 25¢ ✓",
          "Case 3: 2 dimes + 1 nickel = 25¢ ✓",
          "Total: <strong>3</strong> ways."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many three-digit numbers can be formed using the digits 1, 2, and 3 if repetition is allowed?',
        answer: "27",
        hints: [
          "Each digit position has 3 choices: 1, 2, or 3.",
          "Hundreds: 3 choices. Tens: 3 choices. Units: 3 choices.",
          "Total = 3 × 3 × 3 = 27."
        ],
        explanation: [
          "With repetition: 3 choices per position",
          "3 × 3 × 3 = <strong>27</strong>",
          "Casework: organize by hundreds digit → 9 numbers per case × 3 cases."
        ]
      },
    ],

    // ── Boss (10 problems, difficulty 3-4) ───────────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'A coin is flipped 4 times. How many total outcomes are there?',
        answer: "16",
        hints: [
          "Each flip has 2 outcomes.",
          "4 flips: 2 × 2 × 2 × 2.",
          "= 16."
        ],
        explanation: [
          "2⁴ = 2 × 2 × 2 × 2 = <strong>16</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'How many ways can you choose 3 books from a shelf of 8? (Order doesn\'t matter)',
        choices: ["56", "336", "24", "120"],
        answer: "56",
        hints: [
          "C(8,3) = (8 × 7 × 6) / (3 × 2 × 1).",
          "Numerator: 336. Denominator: 6.",
          "336 / 6 = 56."
        ],
        explanation: [
          "C(8,3) = (8 × 7 × 6) / (3!) = 336 / 6 = <strong>56</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'Two dice are rolled. What is the number of ways to get a sum of 8?',
        answer: "5",
        hints: [
          "List pairs: (2,6), (3,5), (4,4), (5,3), (6,2).",
          "Count them up.",
          "That's 5 ways."
        ],
        explanation: [
          "Pairs summing to 8: (2,6), (3,5), (4,4), (5,3), (6,2)",
          "Total = <strong>5</strong> ways"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A coin is flipped 3 times. What is the probability of getting ALL heads?',
        choices: ["1/8", "3/8", "1/2", "1/4"],
        answer: "1/8",
        hints: [
          "Total outcomes = 2³ = 8.",
          "Only 1 outcome is HHH.",
          "P = 1/8."
        ],
        explanation: [
          "Total outcomes = 8. Only HHH gives all heads.",
          "P(all heads) = <strong>1/8</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A committee of 3 is chosen from 10 people. How many possible committees are there?',
        answer: "120",
        hints: [
          "C(10,3) = (10 × 9 × 8) / (3 × 2 × 1).",
          "Numerator: 720. Denominator: 6.",
          "720 / 6 = 120."
        ],
        explanation: [
          "C(10,3) = (10 × 9 × 8) / (3!) = 720 / 6 = <strong>120</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A die is rolled twice. Both rolls are independent. What is the probability of rolling a 6 on the first roll AND a 6 on the second roll?',
        choices: ["1/36", "1/6", "2/6", "1/12"],
        answer: "1/36",
        hints: [
          "For independent events, multiply the probabilities.",
          "P(6 on first) = 1/6. P(6 on second) = 1/6.",
          "P(both) = 1/6 × 1/6 = 1/36."
        ],
        explanation: [
          "Independent events: P(A and B) = P(A) × P(B)",
          "P = (1/6) × (1/6) = <strong>1/36</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'You have 5 different colored flags. How many ways can you arrange ALL 5 flags in a row?',
        answer: "120",
        hints: [
          "This is 5! (5 factorial).",
          "5 × 4 × 3 × 2 × 1.",
          "= 120."
        ],
        explanation: [
          "5! = 5 × 4 × 3 × 2 × 1 = <strong>120</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A bag has 6 marbles: 2 red, 2 blue, 2 green. You draw one marble. What is the probability it is red OR blue?',
        choices: ["2/3", "1/3", "4/6", "1/6"],
        answer: "2/3",
        hints: [
          "Red = 2, Blue = 2, so red or blue = 4.",
          "Total = 6.",
          "P = 4/6 = 2/3."
        ],
        explanation: [
          "Favorable (red or blue) = 2 + 2 = 4",
          "P = 4/6 = <strong>2/3</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'A password uses 3 digits (0-9) followed by 2 letters (A-Z). Repeats are allowed. How many passwords are possible?',
        answer: "676000",
        hints: [
          "Digits part: 10 × 10 × 10 = 1000.",
          "Letters part: 26 × 26 = 676.",
          "Total = 1000 × 676 = 676,000."
        ],
        explanation: [
          "10³ × 26² = 1000 × 676 = <strong>676,000</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'There are 5 finalists. Gold, Silver, and Bronze medals are awarded (each to a different person). How many ways can medals be given?',
        choices: ["10", "60", "125", "15"],
        answer: "60",
        hints: [
          "Gold: 5 choices. Silver: 4 remaining. Bronze: 3 remaining.",
          "5 × 4 × 3 = ?",
          "= 60."
        ],
        explanation: [
          "P(5,3) = 5 × 4 × 3 = <strong>60</strong>",
          "This is a permutation because order (medal type) matters."
        ]
      }
    ]

  }
};

// ============================================================
// WORLD 14 — Strategy Summit
// Chapter: Problem-Solving
// ============================================================
WORLDS[14] = {
  id: 14, name: "Strategy Summit", icon: "⛰️",
  chapter: "Problem-Solving", color: "#ffd700",
  bossName: "The Void Lord",
  bossDesc: "The final boss — an amalgamation of all math concepts, a swirling dark vortex",
  pool: {

    // ── Tutorial (15 problems, difficulty 1-2) ──────────────
    tutorial: [
      {
        type: "numeric", difficulty: 1,
        question: 'Find the next number in the pattern: <span class="math">2, 5, 8, 11, ___</span>',
        answer: "14",
        hints: [
          "Look at the difference between consecutive numbers.",
          "5−2 = 3, 8−5 = 3, 11−8 = 3. The pattern adds 3 each time.",
          "11 + 3 = 14."
        ],
        explanation: [
          "Arithmetic sequence: add 3 each time.",
          "11 + 3 = <strong>14</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Find the next number: <span class="math">3, 6, 12, 24, ___</span>',
        answer: "48",
        hints: [
          "Each number is multiplied by something.",
          "6÷3 = 2, 12÷6 = 2, 24÷12 = 2.",
          "Multiply by 2: 24 × 2 = 48."
        ],
        explanation: [
          "Geometric sequence: multiply by 2 each time.",
          "24 × 2 = <strong>48</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'What is the next number in the pattern: 1, 4, 9, 16, 25, ___?',
        choices: ["30", "36", "35", "49"],
        answer: "36",
        hints: [
          "These are perfect squares: 1², 2², 3², 4², 5²...",
          "The next one is 6².",
          "6² = 36."
        ],
        explanation: [
          "Pattern: 1², 2², 3², 4², 5², 6²",
          "6² = <strong>36</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'Working backwards: I double a number and then add 6 to get 20. What is the original number?',
        answer: "7",
        hints: [
          "Reverse the steps starting from 20.",
          "Undo 'add 6': 20 − 6 = 14.",
          "Undo 'double': 14 ÷ 2 = 7."
        ],
        explanation: [
          "20 − 6 = 14",
          "14 ÷ 2 = <strong>7</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 1,
        question: 'What is <span class="math">1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10</span>?',
        answer: "55",
        hints: [
          "Use Gauss's trick: pair 1+10, 2+9, 3+8, 4+7, 5+6.",
          "Each pair sums to 11, and there are 5 pairs.",
          "5 × 11 = 55."
        ],
        explanation: [
          "Gauss formula: n(n+1)/2 = 10 × 11 / 2 = <strong>55</strong>"
        ]
      },
      {
        type: "mc", difficulty: 1,
        question: 'How many 1×1 squares are on a 3×3 grid?',
        choices: ["3", "6", "9", "12"],
        answer: "9",
        hints: [
          "Count the unit squares in each row.",
          "3 rows × 3 columns of small squares.",
          "= 9."
        ],
        explanation: [
          "A 3×3 grid has 3 × 3 = <strong>9</strong> unit squares."
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Working backwards: I take a number, multiply by 3, then subtract 5, and get 19. What was the original number?',
        answer: "8",
        hints: [
          "Start from 19 and reverse the operations.",
          "Undo 'subtract 5': 19 + 5 = 24.",
          "Undo 'multiply by 3': 24 ÷ 3 = 8."
        ],
        explanation: [
          "19 + 5 = 24",
          "24 ÷ 3 = <strong>8</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Find the next number: <span class="math">2, 6, 18, 54, ___</span>',
        choices: ["72", "108", "162", "216"],
        answer: "162",
        hints: [
          "6÷2 = 3, 18÷6 = 3, 54÷18 = 3.",
          "Each term is multiplied by 3.",
          "54 × 3 = 162."
        ],
        explanation: [
          "Geometric sequence: ×3 each time.",
          "54 × 3 = <strong>162</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'What is <span class="math">1 + 2 + 3 + ... + 20</span>?',
        answer: "210",
        hints: [
          "Use the formula: n(n + 1) / 2.",
          "n = 20, so 20 × 21 / 2.",
          "= 420 / 2 = 210."
        ],
        explanation: [
          "n(n+1)/2 = 20 × 21 / 2 = <strong>210</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'How many total squares (of all sizes) are on a 2×2 grid?',
        answer: "5",
        hints: [
          "Count 1×1 squares: 2 × 2 = 4.",
          "Count 2×2 squares: 1.",
          "Total = 4 + 1 = 5."
        ],
        explanation: [
          "1×1: 4 squares, 2×2: 1 square",
          "Total = 4 + 1 = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Find the pattern and pick the next term: 1, 3, 6, 10, 15, ___',
        choices: ["18", "20", "21", "25"],
        answer: "21",
        hints: [
          "Differences: 3−1=2, 6−3=3, 10−6=4, 15−10=5.",
          "The differences increase by 1 each time. Next difference is 6.",
          "15 + 6 = 21."
        ],
        explanation: [
          "These are triangular numbers. Differences increase: +2, +3, +4, +5, +6.",
          "15 + 6 = <strong>21</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Working backwards: After spending half my money and then $3 more, I have $7 left. How much did I start with?',
        answer: "20",
        hints: [
          "Start from $7 and reverse.",
          "Before spending $3: 7 + 3 = $10.",
          "Before spending half: $10 is the remaining half, so I started with $20."
        ],
        explanation: [
          "$7 + $3 = $10 (before the extra $3 spent)",
          "$10 was half → started with $10 × 2 = <strong>$20</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'What is the sum <span class="math">2 + 4 + 6 + 8 + 10</span>?',
        choices: ["20", "25", "30", "35"],
        answer: "30",
        hints: [
          "Pair: 2+10=12, 4+8=12, and 6 is left.",
          "12 + 12 + 6 = 30.",
          "Or: 2(1+2+3+4+5) = 2 × 15 = 30."
        ],
        explanation: [
          "2 + 4 + 6 + 8 + 10 = <strong>30</strong>",
          "Shortcut: 2(1+2+3+4+5) = 2 × 15 = 30"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'I think of a number. I add 8, then multiply by 2, and get 30. What is my number?',
        answer: "7",
        hints: [
          "Work backwards from 30.",
          "Undo multiply by 2: 30 ÷ 2 = 15.",
          "Undo add 8: 15 − 8 = 7."
        ],
        explanation: [
          "30 ÷ 2 = 15",
          "15 − 8 = <strong>7</strong>"
        ]
      },
      {
        type: "mc", difficulty: 2,
        question: 'Find the next number in: 1, 1, 2, 3, 5, 8, ___',
        choices: ["10", "11", "13", "15"],
        answer: "13",
        hints: [
          "Each number is the sum of the two before it.",
          "1+1=2, 1+2=3, 2+3=5, 3+5=8.",
          "5 + 8 = 13. This is the Fibonacci sequence!"
        ],
        explanation: [
          "Fibonacci sequence: each term = sum of two previous.",
          "5 + 8 = <strong>13</strong>"
        ]
      }
    ],

    // ── Challenge (15 problems, difficulty 2-3) ──────────────
    challenge: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is the units digit of <span class="math">7<sup>100</sup></span>?',
        answer: "1",
        hints: [
          "Find the pattern: 7¹=7, 7²=49, 7³=343, 7⁴=2401.",
          "Units digits cycle: 7, 9, 3, 1, 7, 9, 3, 1... (period 4).",
          "100 ÷ 4 = 25 remainder 0 → same as position 4 → units digit 1."
        ],
        explanation: [
          "Units digit cycle of 7ⁿ: 7, 9, 3, 1 (repeats every 4).",
          "100 mod 4 = 0 → same as 7⁴ → units digit = <strong>1</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'In the Fibonacci sequence 1, 1, 2, 3, 5, 8, 13, 21, 34, ... what is the 12th term?',
        answer: "144",
        hints: [
          "Continue: 1,1,2,3,5,8,13,21,34,55,89,144.",
          "Count: term 10 = 55, term 11 = 89.",
          "Term 12 = 55 + 89 = 144."
        ],
        explanation: [
          "Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144",
          "The 12th term is <strong>144</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'In a room of 8 people, everyone shakes hands with everyone else exactly once. How many handshakes occur?',
        choices: ["16", "28", "56", "64"],
        answer: "28",
        hints: [
          "Each of 8 people shakes with 7 others: 8 × 7 = 56.",
          "But each handshake involves 2 people, so divide by 2.",
          "56 ÷ 2 = 28."
        ],
        explanation: [
          "C(8,2) = (8 × 7) / 2 = <strong>28</strong> handshakes"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'A snail climbs 3 feet each day but slides back 2 feet each night. The wall is 10 feet tall. On what day does the snail reach the top?',
        answer: "8",
        hints: [
          "Net gain per full day (up then down): 1 foot.",
          "After 7 days: the snail is at 7 feet (hasn't reached top yet).",
          "Day 8: climbs 3 feet → 7 + 3 = 10. It reaches the top!"
        ],
        explanation: [
          "After day 7: net 7 feet.",
          "Day 8: climbs 3 → reaches 10 feet before sliding.",
          "The snail reaches the top on day <strong>8</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">1 + 2 + 3 + ... + 50</span>?',
        answer: "1275",
        hints: [
          "Use Gauss's formula: n(n + 1) / 2.",
          "n = 50: 50 × 51 / 2.",
          "= 2550 / 2 = 1275."
        ],
        explanation: [
          "n(n+1)/2 = 50 × 51 / 2 = <strong>1275</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'What is the units digit of <span class="math">3<sup>50</sup></span>?',
        choices: ["1", "3", "7", "9"],
        answer: "9",
        hints: [
          "Units digit cycle of 3ⁿ: 3, 9, 7, 1 (period 4).",
          "50 ÷ 4 = 12 remainder 2.",
          "Position 2 in the cycle → units digit = 9."
        ],
        explanation: [
          "Cycle: 3, 9, 7, 1 (repeats every 4).",
          "50 mod 4 = 2 → 2nd position → <strong>9</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'How many total squares (of any size) are on a 3×3 grid?',
        answer: "14",
        hints: [
          "Count by size: 1×1, 2×2, 3×3.",
          "1×1: 9 squares. 2×2: 4 squares. 3×3: 1 square.",
          "Total = 9 + 4 + 1 = 14."
        ],
        explanation: [
          "1×1: 9, 2×2: 4, 3×3: 1",
          "Total = 9 + 4 + 1 = <strong>14</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'A snail climbs 5 feet each day and slides back 3 feet each night. The wall is 20 feet. On what day does it reach the top?',
        choices: ["9", "10", "11", "18"],
        answer: "9",
        hints: [
          "Net gain per day: 5 − 3 = 2 feet.",
          "After 8 days: 16 feet. (Not at top yet since 16 < 20.)",
          "Day 9: climbs 5 → 16 + 5 = 21 ≥ 20. Reaches the top!"
        ],
        explanation: [
          "After 8 full days: 8 × 2 = 16 feet.",
          "Day 9: climbs 5 → 16 + 5 = 21 feet — past the top!",
          "Reaches top on day <strong>9</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">2 + 4 + 6 + ... + 20</span>? (Sum of even numbers from 2 to 20)',
        answer: "110",
        hints: [
          "Factor out 2: 2(1 + 2 + 3 + ... + 10).",
          "1+2+...+10 = 10 × 11 / 2 = 55.",
          "2 × 55 = 110."
        ],
        explanation: [
          "2(1 + 2 + ... + 10) = 2 × 55 = <strong>110</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'There are 10 people at a party. Everyone shakes hands with everyone else exactly once. How many handshakes?',
        choices: ["45", "50", "90", "100"],
        answer: "45",
        hints: [
          "C(10,2) = (10 × 9) / 2.",
          "= 90 / 2 = 45.",
          "Each handshake is between 2 people."
        ],
        explanation: [
          "C(10,2) = (10 × 9)/2 = <strong>45</strong> handshakes"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Find the next number: <span class="math">1, 4, 10, 20, 35, ___</span>',
        answer: "56",
        hints: [
          "Differences: 3, 6, 10, 15. Second differences: 3, 4, 5.",
          "Next second difference: 6. So next first difference: 15 + 6 = 21.",
          "35 + 21 = 56."
        ],
        explanation: [
          "Differences: 3, 6, 10, 15, 21. Second differences: 3, 4, 5, 6.",
          "35 + 21 = <strong>56</strong>",
          "(These are tetrahedral numbers!)"
        ]
      },
      {
        type: "numeric", difficulty: 2,
        question: 'Make a table to solve: I am thinking of two numbers. They add up to 15 and their difference is 3. What is the larger number?',
        answer: "9",
        hints: [
          "Call the numbers a and b, with a > b. Then a + b = 15 and a − b = 3.",
          "Add the equations: 2a = 18, so a = 9.",
          "Check: 9 + 6 = 15 ✓ and 9 − 6 = 3 ✓."
        ],
        explanation: [
          "a + b = 15 and a − b = 3.",
          "Adding: 2a = 18 → a = 9. Then b = 15 − 9 = 6.",
          "The larger number is <strong>9</strong>."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'What is the units digit of <span class="math">2<sup>2026</sup></span>?',
        answer: "4",
        hints: [
          "Units digit cycle of 2ⁿ: 2, 4, 8, 6 (period 4).",
          "2026 ÷ 4 = 506 remainder 2.",
          "Position 2 → units digit = 4."
        ],
        explanation: [
          "Cycle: 2, 4, 8, 6 (repeats every 4).",
          "2026 mod 4 = 2 → position 2 → <strong>4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'Working backwards: I take a number, square it, subtract 4, then divide by 3, and get 7. What is the original number?',
        answer: "5",
        hints: [
          "Reverse from 7: undo divide by 3 → 7 × 3 = 21.",
          "Undo subtract 4 → 21 + 4 = 25.",
          "Undo square → √25 = 5."
        ],
        explanation: [
          "7 × 3 = 21",
          "21 + 4 = 25",
          "√25 = <strong>5</strong>"
        ]
      },
      {
        type: "mc", difficulty: 3,
        question: 'How many total squares (of any size) are on a 4×4 grid?',
        choices: ["16", "20", "25", "30"],
        answer: "30",
        hints: [
          "Count by size: 1×1, 2×2, 3×3, 4×4.",
          "16 + 9 + 4 + 1 = 30.",
          "Formula: 1² + 2² + 3² + 4² = 30."
        ],
        explanation: [
          "1×1: 16, 2×2: 9, 3×3: 4, 4×4: 1",
          "Total = 16 + 9 + 4 + 1 = <strong>30</strong>"
        ]
      }
    ],

    // ── Extra Challenge: Pigeonhole Principle ──
    extraChallenge: [
      {
        type: "numeric", difficulty: 3,
        question: 'A drawer has red, blue, and green socks. What is the minimum number of socks you must grab (in the dark) to guarantee you have a matching pair?',
        answer: "4",
        hints: [
          "The Pigeonhole Principle: if you have more items than categories, at least two must be in the same category.",
          "There are 3 colors (pigeonholes). With 3 socks you might get one of each.",
          "With 4 socks, at least two must match!"
        ],
        explanation: [
          "3 colors = 3 pigeonholes.",
          "3 socks could be all different. The 4th must repeat a color.",
          "Minimum: <strong>4</strong> socks."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'In a class of 13 students, at least how many must share the same birth month?',
        answer: "2",
        hints: [
          "There are 12 months (pigeonholes) and 13 students (pigeons).",
          "If each month has at most 1 student, that's only 12.",
          "With 13, at least one month must have 2."
        ],
        explanation: [
          "12 months, 13 students.",
          "By the Pigeonhole Principle: ⌈13/12⌉ = 2",
          "At least <strong>2</strong> students must share a birth month."
        ]
      },
      {
        type: "numeric", difficulty: 3,
        question: 'You pick 5 numbers from the set {1, 2, 3, 4, 5, 6, 7, 8}. At least one pair of your numbers must add up to 9. How many complementary pairs that sum to 9 exist in this set?',
        answer: "4",
        hints: [
          "Pairs that sum to 9: (1,8), (2,7), (3,6), (4,5).",
          "That's 4 pairs. Each number belongs to exactly one pair.",
          "If you pick 5 numbers from 4 pairs, you must get both numbers from at least one pair."
        ],
        explanation: [
          "Pairs summing to 9: (1,8), (2,7), (3,6), (4,5).",
          "That's <strong>4</strong> complementary pairs.",
          "By pigeonhole: picking 5 from 4 pairs guarantees a complete pair!"
        ]
      },
    ],

    // ── Boss (10 problems, difficulty 3-5) ───────────────────
    boss: [
      {
        type: "numeric", difficulty: 3,
        question: 'What is <span class="math">1 + 2 + 3 + ... + 100</span>? (The Void Lord starts with Gauss\'s classic!)',
        answer: "5050",
        hints: [
          "Pair up: 1+100=101, 2+99=101, 3+98=101...",
          "There are 50 such pairs.",
          "50 × 101 = 5050."
        ],
        explanation: [
          "Gauss's formula: n(n+1)/2 = 100 × 101 / 2 = <strong>5050</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A clock shows 3:00. What is the angle between the hour and minute hands?',
        choices: ["60°", "90°", "120°", "180°"],
        answer: "90°",
        hints: [
          "At 3:00, the minute hand points to 12 and the hour hand to 3.",
          "That's 3 hours out of 12, or 3/12 of a full circle.",
          "3/12 × 360° = 90°."
        ],
        explanation: [
          "3/12 of 360° = <strong>90°</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'How many rectangles (of any size) are in a 2×3 grid of unit squares?',
        answer: "18",
        hints: [
          "A rectangle is formed by choosing 2 horizontal lines and 2 vertical lines.",
          "Horizontal lines: 3 (top, middle, bottom). Vertical lines: 4. C(3,2) = 3, C(4,2) = 6.",
          "Total rectangles = 3 × 6 = 18."
        ],
        explanation: [
          "Horizontal lines = 3 → C(3,2) = 3",
          "Vertical lines = 4 → C(4,2) = 6",
          "Total rectangles = 3 × 6 = <strong>18</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'Three friends split a pizza equally. Then each gives 1/4 of their share to a fourth friend. What fraction of the pizza does the fourth friend get?',
        choices: ["1/4", "3/4", "1/3", "1/12"],
        answer: "1/4",
        hints: [
          "Each friend starts with 1/3 of the pizza.",
          "Each gives 1/4 of 1/3 = 1/12.",
          "The fourth friend gets 3 × 1/12 = 3/12 = 1/4."
        ],
        explanation: [
          "Each share = 1/3. Each gives 1/4 × 1/3 = 1/12.",
          "Fourth friend: 3 × 1/12 = 3/12 = <strong>1/4</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 4,
        question: 'What is <span class="math">1² + 2² + 3² + 4² + 5² + 6² + 7² + 8² + 9² + 10²</span>?',
        answer: "385",
        hints: [
          "1+4+9+16+25+36+49+64+81+100.",
          "Group: (1+4+9+16+25) = 55, (36+49+64+81+100) = 330.",
          "55 + 330 = 385."
        ],
        explanation: [
          "1+4+9+16+25+36+49+64+81+100 = 385",
          "Formula: n(n+1)(2n+1)/6 = 10×11×21/6 = 2310/6 = <strong>385</strong>"
        ]
      },
      {
        type: "mc", difficulty: 4,
        question: 'A frog is at the bottom of a 30-foot well. Each day it jumps up 5 feet but slides back 3 feet at night. On what day does it escape?',
        choices: ["13", "14", "15", "28"],
        answer: "14",
        hints: [
          "Net gain per day: 5 − 3 = 2 feet.",
          "After 13 days: 13 × 2 = 26 feet.",
          "Day 14: jumps 5 → 26 + 5 = 31 ≥ 30. Escapes!"
        ],
        explanation: [
          "After 13 days: 26 feet.",
          "Day 14: 26 + 5 = 31 feet — it escapes before sliding!",
          "Answer: Day <strong>14</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 5,
        question: 'How many total rectangles (of any size, including squares) are on a 3×3 grid of unit squares?',
        answer: "36",
        hints: [
          "Choose 2 horizontal lines from 4: C(4,2) = 6.",
          "Choose 2 vertical lines from 4: C(4,2) = 6.",
          "Total = 6 × 6 = 36."
        ],
        explanation: [
          "A 3×3 grid has 4 horizontal and 4 vertical grid lines.",
          "C(4,2) × C(4,2) = 6 × 6 = <strong>36</strong>"
        ]
      },
      {
        type: "mc", difficulty: 5,
        question: 'What is the sum of all odd numbers from 1 to 99? That is, <span class="math">1 + 3 + 5 + ... + 99</span>.',
        choices: ["2000", "2500", "4950", "5000"],
        answer: "2500",
        hints: [
          "There are 50 odd numbers from 1 to 99.",
          "The sum of the first n odd numbers = n².",
          "50² = 2500."
        ],
        explanation: [
          "Count of odd numbers from 1 to 99: 50.",
          "Sum of first 50 odd numbers = 50² = <strong>2500</strong>"
        ]
      },
      {
        type: "numeric", difficulty: 5,
        question: 'The Void Lord\'s penultimate challenge: In a tournament, every team plays every other team exactly once. There are 12 teams. How many total games are played?',
        answer: "66",
        hints: [
          "This is the handshake problem with 12 teams.",
          "C(12, 2) = (12 × 11) / 2.",
          "= 132 / 2 = 66."
        ],
        explanation: [
          "C(12,2) = (12 × 11) / 2 = <strong>66</strong> games"
        ]
      },
      {
        type: "numeric", difficulty: 5,
        question: 'The Void Lord\'s final challenge: What is <span class="math">1 + 2 + 3 + ... + 99 + 100 + 99 + ... + 3 + 2 + 1</span>?',
        answer: "10000",
        hints: [
          "This is 1+2+...+100+99+...+1.",
          "Think of it as (1+2+...+100) + (1+2+...+99).",
          "= 5050 + 4950 = 10000. Or: each number 1 to 99 appears twice, and 100 once: 2×4950 + 100 = 10000."
        ],
        explanation: [
          "Split: (1+2+...+100) + (99+98+...+1) = 5050 + 4950",
          "= <strong>10,000</strong>",
          "Alternatively: this equals 100², because the sum 1+2+...+(n−1)+n+(n−1)+...+1 = n²."
        ]
      }
    ]

  }
};
