export const interestQuizPart1 = [
  {
    id: 1,
    question: "Which activity do you enjoy the most?",
    options: [
      { text: "Solving puzzles, math problems", field: "Science" },
      { text: "Managing money or business ideas", field: "Commerce" },
      { text: "Drawing, writing, or designing", field: "Arts" },
      { text: "Helping people and understanding health", field: "Medicine" }
    ]
  },
  {
    id: 2,
    question: "Which school subject was your favorite?",
    options: [
      { text: "Physics, Chemistry, Mathematics", field: "Science" },
      { text: "Economics, Accounts", field: "Commerce" },
      { text: "History, Literature", field: "Arts" },
      { text: "Biology", field: "Medicine" }
    ]
  },
  {
    id: 3,
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Logically step by step", field: "Science" },
      { text: "By finding practical money-related solutions", field: "Commerce" },
      { text: "Using creativity and imagination", field: "Arts" },
      { text: "By thinking about people's well-being", field: "Medicine" }
    ]
  },
  {
    id: 4,
    question: "Which career sounds exciting to you?",
    options: [
      { text: "Engineer, Data Scientist, Researcher", field: "Science" },
      { text: "Business Analyst, Entrepreneur", field: "Commerce" },
      { text: "Writer, Designer, Filmmaker", field: "Arts" },
      { text: "Doctor, Nurse, Psychologist", field: "Medicine" }
    ]
  },
  {
    id: 5,
    question: "What kind of projects do you enjoy?",
    options: [
      { text: "Science experiments, coding, robotics", field: "Science" },
      { text: "Business plans, money management", field: "Commerce" },
      { text: "Art projects, theatre plays", field: "Arts" },
      { text: "Health awareness campaigns", field: "Medicine" }
    ]
  }
];

export const interestQuizPart2 = [
  {
    id: 6,
    question: "What motivates you most?",
    options: [
      { text: "Discovering new ideas or inventions", field: "Science" },
      { text: "Making profits or growing wealth", field: "Commerce" },
      { text: "Expressing myself creatively", field: "Arts" },
      { text: "Making a positive impact on others' health", field: "Medicine" }
    ]
  },
  {
    id: 7,
    question: "What do you do in free time?",
    options: [
      { text: "Read about technology or science facts", field: "Science" },
      { text: "Watch finance/business news", field: "Commerce" },
      { text: "Listen to music, draw, write", field: "Arts" },
      { text: "Watch health and lifestyle videos", field: "Medicine" }
    ]
  },
  {
    id: 8,
    question: "How do you make decisions?",
    options: [
      { text: "Using data and analysis", field: "Science" },
      { text: "Considering financial outcomes", field: "Commerce" },
      { text: "Following my heart/intuition", field: "Arts" },
      { text: "Thinking about what helps others most", field: "Medicine" }
    ]
  },
  {
    id: 9,
    question: "What kind of tasks do you like?",
    options: [
      { text: "Technical or logical tasks", field: "Science" },
      { text: "Negotiations, planning budgets", field: "Commerce" },
      { text: "Performing, storytelling, creating", field: "Arts" },
      { text: "Caring for others, research about health", field: "Medicine" }
    ]
  },
  {
    id: 10,
    question: "What excites you the most about the future?",
    options: [
      { text: "AI, space research, innovation", field: "Science" },
      { text: "Business growth, startups", field: "Commerce" },
      { text: "Art, fashion, culture", field: "Arts" },
      { text: "Medical breakthroughs, saving lives", field: "Medicine" }
    ]
  }
];

export const interestQuizPart3 = [
  {
    id: 11,
    question: "What type of work environment do you prefer?",
    options: [
      { text: "Labs, tech hubs, R&D centers", field: "Science" },
      { text: "Corporate offices or markets", field: "Commerce" },
      { text: "Studios, theatres, open creative spaces", field: "Arts" },
      { text: "Hospitals, clinics, wellness centers", field: "Medicine" }
    ]
  },
  {
    id: 12,
    question: "What type of books or media do you enjoy?",
    options: [
      { text: "Science fiction, tech magazines", field: "Science" },
      { text: "Business books, stock market blogs", field: "Commerce" },
      { text: "Novels, poetry, visual arts", field: "Arts" },
      { text: "Health tips, psychology, medicine", field: "Medicine" }
    ]
  },
  {
    id: 13,
    question: "What skill do you want to master?",
    options: [
      { text: "Programming, AI, engineering", field: "Science" },
      { text: "Marketing, finance, entrepreneurship", field: "Commerce" },
      { text: "Painting, filmmaking, music", field: "Arts" },
      { text: "Medical skills, human psychology", field: "Medicine" }
    ]
  },
  {
    id: 14,
    question: "Which global issue interests you most?",
    options: [
      { text: "Climate change, energy innovation", field: "Science" },
      { text: "Economic growth, poverty reduction", field: "Commerce" },
      { text: "Cultural preservation, freedom of expression", field: "Arts" },
      { text: "Public health, mental health", field: "Medicine" }
    ]
  },
  {
    id: 15,
    question: "If money was not a problem, what would you choose to do?",
    options: [
      { text: "Invent something revolutionary", field: "Science" },
      { text: "Build businesses to create jobs", field: "Commerce" },
      { text: "Create art, music, or content", field: "Arts" },
      { text: "Provide free health care", field: "Medicine" }
    ]
  }
];

// Field recommendations based on quiz results
export const fieldRecommendations = {
  Science: {
    title: "Science & Technology",
    description: "You have a strong analytical mind and love solving complex problems through logical thinking.",
    careers: [
      "Software Engineer",
      "Data Scientist",
      "Research Scientist",
      "Mechanical Engineer",
      "Electrical Engineer",
      "Computer Scientist",
      "Biotechnologist",
      "Environmental Scientist"
    ],
    courses: [
      "Computer Science Engineering",
      "Information Technology",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Biotechnology",
      "Physics",
      "Mathematics",
      "Chemistry"
    ],
    skills: [
      "Programming",
      "Data Analysis",
      "Problem Solving",
      "Research",
      "Critical Thinking",
      "Mathematics",
      "Scientific Method"
    ],
    color: "#4F46E5"
  },
  Commerce: {
    title: "Commerce & Business",
    description: "You have excellent business acumen and enjoy working with financial concepts and entrepreneurial ideas.",
    careers: [
      "Business Analyst",
      "Financial Advisor",
      "Entrepreneur",
      "Investment Banker",
      "Marketing Manager",
      "Chartered Accountant",
      "Management Consultant",
      "Sales Manager"
    ],
    courses: [
      "Business Administration",
      "Commerce",
      "Economics",
      "Finance",
      "Accounting",
      "Marketing",
      "International Business",
      "Entrepreneurship"
    ],
    skills: [
      "Financial Analysis",
      "Business Strategy",
      "Leadership",
      "Communication",
      "Negotiation",
      "Market Research",
      "Project Management"
    ],
    color: "#059669"
  },
  Arts: {
    title: "Arts & Humanities",
    description: "You are creative, expressive, and have a deep appreciation for culture, literature, and artistic endeavors.",
    careers: [
      "Graphic Designer",
      "Writer/Author",
      "Filmmaker",
      "Art Director",
      "Journalist",
      "Interior Designer",
      "Fashion Designer",
      "Content Creator"
    ],
    courses: [
      "Fine Arts",
      "Literature",
      "Journalism",
      "Film Studies",
      "Graphic Design",
      "Fashion Design",
      "Psychology",
      "History"
    ],
    skills: [
      "Creativity",
      "Visual Design",
      "Writing",
      "Communication",
      "Cultural Awareness",
      "Storytelling",
      "Artistic Expression"
    ],
    color: "#DC2626"
  },
  Medicine: {
    title: "Medicine & Healthcare",
    description: "You have a strong desire to help others and are interested in health, wellness, and making a positive impact on people's lives.",
    careers: [
      "Doctor",
      "Nurse",
      "Psychologist",
      "Physiotherapist",
      "Pharmacist",
      "Medical Researcher",
      "Public Health Specialist",
      "Veterinarian"
    ],
    courses: [
      "MBBS",
      "Nursing",
      "Psychology",
      "Pharmacy",
      "Physiotherapy",
      "Public Health",
      "Veterinary Science",
      "Medical Technology"
    ],
    skills: [
      "Empathy",
      "Communication",
      "Medical Knowledge",
      "Patient Care",
      "Problem Solving",
      "Attention to Detail",
      "Stress Management"
    ],
    color: "#7C3AED"
  }
};

// Quiz scoring logic
export const calculateQuizResults = (answers) => {
  const fieldScores = {
    Science: 0,
    Commerce: 0,
    Arts: 0,
    Medicine: 0
  };

  // Count answers for each field
  answers.forEach(answer => {
    if (answer && answer.field) {
      fieldScores[answer.field]++;
    }
  });

  // Calculate percentages
  const totalAnswers = answers.length;
  const fieldPercentages = {};
  Object.keys(fieldScores).forEach(field => {
    fieldPercentages[field] = Math.round((fieldScores[field] / totalAnswers) * 100);
  });

  // Find primary and secondary interests
  const sortedFields = Object.entries(fieldPercentages)
    .sort(([,a], [,b]) => b - a)
    .map(([field, percentage]) => ({ field, percentage }));

  return {
    scores: fieldScores,
    percentages: fieldPercentages,
    primaryInterest: sortedFields[0],
    secondaryInterest: sortedFields[1],
    recommendations: fieldRecommendations[sortedFields[0].field],
    allResults: sortedFields
  };
};

// Get all quiz questions combined
export const getAllQuizQuestions = () => {
  return [...interestQuizPart1, ...interestQuizPart2, ...interestQuizPart3];
};
