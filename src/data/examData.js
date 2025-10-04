export const examCategories = [
  {
    id: 'engineering',
    name: 'Engineering',
    exams: [
      // Central Government/National Exams
      { id: 'jee-main', name: 'JEE Main', fullForm: 'Joint Entrance Examination Main' },
      { id: 'jee-advanced', name: 'JEE Advanced', fullForm: 'Joint Entrance Examination Advanced' },
      { id: 'gate', name: 'GATE', fullForm: 'Graduate Aptitude Test in Engineering' }, // PG/Recruitment Exam
      { id: 'jam', name: 'IIT JAM', fullForm: 'Joint Admission Test for M.Sc.' }, // PG Science Admission

      // State Government CETs
      { id: 'mhtcet', name: 'MHT-CET', fullForm: 'Maharashtra Common Entrance Test' },
      { id: 'wbee', name: 'WBJEE', fullForm: 'West Bengal Joint Entrance Examination' },
      { id: 'kcet', name: 'KCET', fullForm: 'Karnataka Common Entrance Test' },
      { id: 'eamcet', name: 'AP/TG EAMCET', fullForm: 'Engineering, Agriculture, and Medical Common Entrance Test' },
      { id: 'ojee', name: 'OJEE', fullForm: 'Odisha Joint Entrance Examination' },
      { id: 'gujcet', name: 'GUJCET', fullForm: 'Gujarat Common Entrance Test' },
      { id: 'keam', name: 'KEAM', fullForm: 'Kerala Engineering Architecture Medical' },
      { id: 'upcet', name: 'UPCET', fullForm: 'Uttar Pradesh Common Entrance Test' } // General State Exam
    ]
  },
  {
    id: 'medical',
    name: 'Medical & Dental',
    exams: [
      // Central Government/National Exams
      { id: 'neet_ug', name: 'NEET-UG', fullForm: 'National Eligibility cum Entrance Test (Undergraduate)' },
      { id: 'neet_pg', name: 'NEET-PG', fullForm: 'National Eligibility cum Entrance Test (Postgraduate)' },
      { id: 'ini_cet', name: 'INI-CET', fullForm: 'Institutes of National Importance Combined Entrance Test' }, // For AIIMS, PGIMER, JIPMER, etc.
      { id: 'neet_mds', name: 'NEET-MDS', fullForm: 'National Eligibility cum Entrance Test (Master of Dental Surgery)' },
      { id: 'fmge', name: 'FMGE', fullForm: 'Foreign Medical Graduate Examination' }
    ]
  },
  {
    id: 'management',
    name: 'Management / Business',
    exams: [
      // Government/National Body Exams
      { id: 'cat', name: 'CAT', fullForm: 'Common Admission Test' }, // Conducted by IIMs (Govt. Institutes)
      { id: 'cmat', name: 'CMAT', fullForm: 'Common Management Admission Test' }, // Conducted by NTA
      { id: 'iift', name: 'IIFT Entrance', fullForm: 'Indian Institute of Foreign Trade Entrance Exam' }, // Govt. Deemed Univ.
      { id: 'mat', name: 'MAT', fullForm: 'Management Aptitude Test' }, // Widely accepted by Govt. colleges
      { id: 'tancet', name: 'TANCET', fullForm: 'Tamil Nadu Common Entrance Test' } // State-Level Exam
    ]
  },
  {
    id: 'law',
    name: 'Law',
    exams: [
      // National/Government-Affiliated Exams
      { id: 'clat', name: 'CLAT', fullForm: 'Common Law Admission Test' }, // For NLUs
      { id: 'ailet', name: 'AILET', fullForm: 'All India Law Entrance Test' }, // For NLU Delhi
      { id: 'mhcet_law', name: 'MH-CET Law', fullForm: 'Maharashtra Common Entrance Test for Law' }
    ]
  },
  {
    id: 'design_arch',
    name: 'Design, Fashion, Architecture',
    exams: [
      // Central Government/Govt Body Exams
      { id: 'nift', name: 'NIFT Entrance', fullForm: 'National Institute of Fashion Technology Entrance Exam' },
      { id: 'nid_dat', name: 'NID DAT', fullForm: 'National Institute of Design Design Aptitude Test' },
      { id: 'uceed', name: 'UCEED', fullForm: 'Undergraduate Common Entrance Examination for Design' }, // Conducted by IIT Bombay
      { id: 'ceed', name: 'CEED', fullForm: 'Common Entrance Examination for Design' }, // Conducted by IIT Bombay (PG)
      { id: 'nata', name: 'NATA', fullForm: 'National Aptitude Test in Architecture' } // Conducted by CoA (Govt. Body)
    ]
  },
  {
    id: 'general_govt',
    name: 'General / Recruitment',
    exams: [
      // Central Government/National Exams (Admission/Eligibility/Recruitment)
      { id: 'cuet', name: 'CUET', fullForm: 'Common University Entrance Test' },
      { id: 'icar', name: 'ICAR AIEEA', fullForm: 'Indian Council of Agricultural Research All India Entrance Examination' },
      { id: 'nchm', name: 'NCHM JEE', fullForm: 'National Council for Hotel Management Joint Entrance Examination' },
      { id: 'ctet', name: 'CTET', fullForm: 'Central Teacher Eligibility Test' },
      { id: 'ugc_net', name: 'UGC NET', fullForm: 'University Grants Commission National Eligibility Test' },

      // Defense/Recruitment Exams (re-added for completeness in this consolidated list)
      { id: 'nda', name: 'UPSC NDA', fullForm: 'National Defence Academy and Naval Academy Examination' },
      { id: 'cds', name: 'UPSC CDS', fullForm: 'Combined Defence Services Examination' },
      { id: 'upsc_cse', name: 'UPSC CSE', fullForm: 'Civil Services Examination' },
      { id: 'ssc_cgl', name: 'SSC CGL', fullForm: 'Staff Selection Commission Combined Graduate Level' },
      { id: 'sbi_po', name: 'SBI PO', fullForm: 'State Bank of India Probationary Officer' },
    ]
  }
];

export const allExams = examCategories.flatMap(category => 
  category.exams.map(exam => ({
    ...exam,
    category: category.name
  }))
);
