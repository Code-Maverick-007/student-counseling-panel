export const courseCategories = [
  {
    category: '🎓 Engineering (B.Tech / B.E.)',
    subcategories: [
      {
        name: 'Core Fields',
        courses: [
          'Computer Science & Engineering (CSE)',
          'Electronics & Communication (ECE)',
          'Electrical Engineering (EE)',
          'Mechanical Engineering (ME)',
          'Civil Engineering',
        ]
      },
      {
        name: 'Specialized / Emerging Fields',
        courses: [
          'Artificial Intelligence & Machine Learning',
          'Data Science',
          'Cybersecurity',
          'Robotics',
          'Mechatronics',
          'Aerospace Engineering',
          'Chemical Engineering',
          'Biotechnology',
          'Biomedical Engineering',
          'Metallurgical Engineering',
          'Environmental Engineering',
          'Petroleum Engineering',
          'Marine / Ocean Engineering',
          'Automobile Engineering'
        ]
      }
    ]
  },
  {
    category: '🩺 Medical (MBBS & Allied Health)',
    subcategories: [
      {
        name: 'MBBS Specializations (after PG/MD/MS)',
        courses: [
          'General Medicine',
          'Pediatrics',
          'Dermatology',
          'Psychiatry',
          'Cardiology',
          'Neurology',
          'Orthopedics',
          'Ophthalmology',
          'ENT (Ear, Nose, Throat)',
          'Surgery (General / Plastic / Neuro / Cardio-thoracic)',
          'Radiology',
          'Oncology',
          'Anesthesiology'
        ]
      },
      {
        name: 'Other Medical & Allied Fields',
        courses: [
          'Dentistry (BDS, MDS)',
          'Pharmacy (B.Pharm, Pharm D)',
          'Nursing (B.Sc Nursing, M.Sc Nursing)',
          'Physiotherapy (BPT, MPT)',
          'AYUSH: Ayurveda, Yoga, Unani, Siddha, Homeopathy',
          'Paramedical Sciences: Medical Lab Tech, Radiology Tech, Optometry, etc.'
        ]
      }
    ]
  },
  {
    category: '💼 Management (MBA / PGDM)',
    subcategories: [
      {
        name: 'Popular MBA Specializations',
        courses: [
          'Marketing',
          'Finance',
          'Human Resource (HR)',
          'Operations Management',
          'Information Technology (IT)',
          'International Business',
          'Business Analytics',
          'Supply Chain & Logistics',
          'Entrepreneurship',
          'Healthcare & Hospital Management',
          'Rural & Agri-Business Management',
          'Retail Management',
          'Banking & Insurance',
          'Hospitality & Tourism'
        ]
      }
    ]
  },
  {
    category: '🎨 Design, Architecture & Arts',
    subcategories: [
      {
        name: 'Design & Architecture',
        courses: [
          'Fashion Design',
          'Textile Design',
          'Interior Design',
          'Graphic Design',
          'Animation & Multimedia',
          'Product Design',
          'Industrial Design',
          'Game Design',
          'Architecture (B.Arch)',
          'Urban Design',
          'Landscape Architecture',
          'Conservation Architecture'
        ]
      }
    ]
  },
  {
    category: '⚖️ Law (LLB / BA LLB)',
    subcategories: [
      {
        name: 'Law Specializations',
        courses: [
          'Criminal Law',
          'Corporate Law',
          'Constitutional Law',
          'Intellectual Property Rights (IPR)',
          'International Law',
          'Family Law',
          'Tax Law',
          'Cyber Law',
          'Environmental Law'
        ]
      }
    ]
  },
  {
    category: '🎖️ Defence / Armed Forces',
    subcategories: [
      {
        name: 'Defense Specializations',
        courses: [
          'Indian Army (Infantry, Armoured Corps, Engineers, Medical Corps, etc.)',
          'Indian Navy (Naval Architecture, Marine, Submarine, Aviation)',
          'Indian Air Force (Flying, Technical, Ground Duty branches)'
        ]
      }
    ]
  }
];

// Flattened list of all courses for search
export const allCourses = courseCategories.flatMap(category => 
  category.subcategories.flatMap(subcategory => 
    subcategory.courses.map(course => ({
      name: course,
      category: category.category,
      subcategory: subcategory.name
    }))
  )
);
