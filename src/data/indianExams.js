export const examIndianCategories = [
  {
    category: 'Engineering & Technology',
    exams: [
      // Central Government/National Exams
      { id: 'jee_main', name: 'JEE Main' },
      { id: 'jee_advanced', name: 'JEE Advanced' },
      { id: 'gate', name: 'GATE (Grad. Aptitude Test in Eng.)' }, // For PG admission to IITs/NITs and PSU jobs
      { id: 'jam', name: 'IIT JAM (M.Sc. Admission)' }, // For M.Sc. admission to IITs/IISc

      // State Government CETs
      { id: 'wbee', name: 'WBJEE (West Bengal)' },
      { id: 'mhtcet', name: 'MHT-CET (Maharashtra)' },
      { id: 'kcet', name: 'KCET (Karnataka)' },
      { id: 'eamcet', name: 'AP/TG EAMCET (Andhra Pradesh/Telangana)' },
      { id: 'ojee', name: 'OJEE (Odisha)' },
      { id: 'gujcet', name: 'GUJCET (Gujarat)' },
      { id: 'keam', name: 'KEAM (Kerala)' }, // Added from search results
      { id: 'upsee', name: 'UPCET (Uttar Pradesh)' }, // Common name for state exams
    ]
  },
  {
    category: 'Medical & Dental',
    exams: [
      // Central Government/INI Exams
      { id: 'neet_ug', name: 'NEET-UG' },
      { id: 'neet_pg', name: 'NEET-PG' },
      { id: 'ini_cet', name: 'INI-CET (AIIMS/JIPMER/PGIMER/NIMHANS)' }, // Central Institutes PG
      { id: 'neet_mds', name: 'NEET-MDS' },
      { id: 'fmge', name: 'FMGE (Foreign Medical Graduate Exam)' }
    ]
  },
  {
    category: 'Management / Business',
    exams: [
      // Government-Affiliated/National Exams
      { id: 'cat', name: 'CAT (IIMs)' }, // Conducted by IIMs (Central Govt. Institutes)
      { id: 'cmat', name: 'CMAT' }, // Conducted by NTA (Central Govt. Agency)
      { id: 'mat', name: 'MAT' }, // Accepted by many Govt/State Universities
      { id: 'iift', name: 'IIFT Entrance' }, // For IIFT (Deemed University under Ministry of Commerce)
      { id: 'tancet', name: 'TANCET (Tamil Nadu State Exam)' } // Added from search results
    ]
  },
  {
    category: 'Law',
    exams: [
      // National Law University/Government Exams
      { id: 'clat', name: 'CLAT (National Law Universities)' },
      { id: 'nu_sat', name: 'AILET (NLU Delhi)' },
      { id: 'mhcet_law', name: 'MH-CET Law (Maharashtra State)' }
    ]
  },
  {
    category: 'Design, Fashion, Architecture',
    exams: [
      // Central Government/Govt Body Exams
      { id: 'nift', name: 'NIFT Entrance' }, // National Institute of Fashion Technology
      { id: 'nid_dat', name: 'NID DAT' }, // National Institute of Design
      { id: 'uceed', name: 'UCEED/CEED' }, // Conducted by IIT Bombay
      { id: 'nata', name: 'NATA (Architecture)' } // Conducted by CoA (Govt. Body)
    ]
  },
  {
    category: 'Defence & Armed Forces',
    exams: [
      // UPSC/Defence Ministry Exams
      { id: 'nda', name: 'NDA (UPSC)' },
      { id: 'cds', name: 'CDS (UPSC)' },
      { id: 'afcat', name: 'AFCAT' },
      { id: 'ssb', name: 'SSB Interview' },
      { id: 'capf', name: 'CAPF (UPSC)' }
    ]
  },
  {
    category: 'Civil Services & Government Jobs',
    exams: [
      // UPSC/SSC/RBI/Banking Exams
      { id: 'upsc', name: 'UPSC Civil Services' },
      { id: 'ese', name: 'UPSC ESE (Eng. Services)' },
      { id: 'ssc_cgl', name: 'SSC CGL' },
      { id: 'ssc_chsl', name: 'SSC CHSL' },
      { id: 'ibps_po', name: 'IBPS PO' },
      { id: 'ibps_clerk', name: 'IBPS Clerk' },
      { id: 'sbi_po', name: 'SBI PO' },
      { id: 'rbi_grade_b', name: 'RBI Grade B' },
      { id: 'ssc_mts', name: 'SSC MTS' } // Added from search results
    ]
  },
  {
    category: 'General & Other Fields',
    exams: [
      // Central/National Level Exams
      { id: 'cuet', name: 'CUET (Central University Entrance Test)' }, // Conducted by NTA
      { id: 'icar', name: 'ICAR AIEEA (Agriculture)' }, // Indian Council of Agricultural Research
      { id: 'tissnet', name: 'TISSNET' },
      { id: 'nchm', name: 'NCHM JEE (Hotel Management)' }, // National Council for Hotel Management
      { id: 'ctet', name: 'CTET (Teaching Eligibility)' },
      { id: 'ugc_net', name: 'UGC NET (Lectureship/JRF)' },
      { id: 'duet', name: 'DUET (Delhi University)' },
      { id: 'ignou', name: 'IGNOU OPENMAT' }
    ]
  }
];

// Flat array for quick lookup (Government Exams Only)
export const allGovtExams = examIndianCategories.flatMap(category => 
  category.exams.map(exam => ({
    id: exam.id,
    name: exam.name,
    category: category.category,
  }))
);