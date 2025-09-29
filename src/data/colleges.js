/*export const mockColleges = [

  {
    id: 'DL1',
    name: 'Indian Institute of Technology Delhi (IIT Delhi)',
    location: 'Delhi',
    type: 'Government',
    rating: 4.8,
    image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
    fees: '₹2,50,000/year',
    cutoff: [95, 92, 88, 85, 82],
    about: 'IIT Delhi is one of India\'s most prestigious engineering institutes, offering UG, PG, and PhD programs in engineering, science, and management.',
    courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
    examEligibility: {
      jee: true,
      mhtcet: false,
      direct: false
    },
    placements: {
      averagePackage: '₹18 LPA',
      highestPackage: '₹1.2 Crore',
      placementRate: '95%'
    }
  },
  {
        id: 'JK1',
        name: 'National Institute of Technology Srinagar (NIT Srinagar)',
        location: 'Srinagar, J&K',
        type: 'Government',
        rating: 4.6,
        image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
        fees: '₹1,80,000/year',
        cutoff: [92, 89, 85, 82, 80],
        about: 'NIT Srinagar is a premier engineering institute and one of the 31 NITs in India, offering top-quality technical education and research opportunities.',
        courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
        examEligibility: {
          jee: true,
          mhtcet: false,
          direct: false
        },
        placements: {
          averagePackage: '₹10 LPA',
          highestPackage: '₹50 LPA',
          placementRate: '90%'
        }
      },
      {
        id: 'JK2',
        name: 'Government Medical College Srinagar (GMC Srinagar)',
        location: 'Srinagar, J&K',
        type: 'Government',
        rating: 4.7,
        image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
        fees: '₹65,000/year',
        cutoff: [640, 630, 620, 610, 600], // NEET scores
        about: 'GMC Srinagar is one of the oldest and most reputed medical colleges in J&K, offering MBBS, MD, MS and allied health courses.',
        courses: ['MBBS', 'MD', 'MS', 'Nursing'],
        examEligibility: {
          jee: false,
          mhtcet: false,
          direct: false,
          neet: true
        },
        placements: {
          averagePackage: '₹12 LPA',
          highestPackage: '₹30 LPA',
          placementRate: '98%'
        }
      },
      {
        id: 'JK3',
        name: 'University of Kashmir',
        location: 'Hazratbal, Srinagar, J&K',
        type: 'Government',
        rating: 4.5,
        image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
        fees: '₹40,000/year',
        cutoff: [80, 75, 70, 68, 65],
        about: 'The University of Kashmir is a multidisciplinary public university offering arts, science, law, education, and social science programs.',
        courses: ['BA', 'B.Sc', 'B.Com', 'LLB', 'M.A', 'M.Sc'],
        examEligibility: {
          jee: false,
          mhtcet: false,
          direct: true
        },
        placements: {
          averagePackage: '₹5 LPA',
          highestPackage: '₹15 LPA',
          placementRate: '75%'
        }
      },
      {
        id: 'JK4',
        name: 'Sher-e-Kashmir University of Agricultural Sciences and Technology (SKUAST-K)',
        location: 'Shalimar, Srinagar, J&K',
        type: 'Government',
        rating: 4.4,
        image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
        fees: '₹55,000/year',
        cutoff: [78, 75, 72, 70, 68],
        about: 'SKUAST-K is a premier agricultural university focusing on agricultural research, education, and extension services in J&K.',
        courses: ['B.Sc Agriculture', 'B.V.Sc & AH', 'M.Sc Agriculture', 'Ph.D Agriculture'],
        examEligibility: {
          jee: false,
          mhtcet: false,
          direct: true,
          icar: true
        },
        placements: {
          averagePackage: '₹4.5 LPA',
          highestPackage: '₹12 LPA',
          placementRate: '70%'
        }
      },
      {
        id: 'JK5',
        name: 'Islamic University of Science and Technology (IUST)',
        location: 'Awantipora, Pulwama, J&K',
        type: 'Government',
        rating: 4.3,
        image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
        fees: '₹60,000/year',
        cutoff: [85, 82, 78, 75, 72],
        about: 'IUST is a growing technical and professional university offering programs in engineering, science, humanities, business, and social sciences.',
        courses: ['B.Tech', 'MBA', 'Journalism & Mass Communication', 'Computer Applications'],
        examEligibility: {
          jee: true,
          mhtcet: false,
          direct: true
        },
        placements: {
          averagePackage: '₹6 LPA',
          highestPackage: '₹20 LPA',
          placementRate: '80%'
        }
      },
      {
        id: 'JK6',
        name: 'Cluster University of Jammu',
        location: 'Jammu, J&K',
        type: 'Government',
        rating: 4.2,
        image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
        fees: '₹35,000/year',
        cutoff: [75, 72, 70, 68, 65],
        about: 'Cluster University of Jammu offers a range of UG and PG programs across humanities, sciences, commerce, education, and IT.',
        courses: ['B.Sc', 'B.Com', 'BBA', 'M.Sc', 'MCA'],
        examEligibility: {
          jee: false,
          mhtcet: false,
          direct: true
        },
        placements: {
          averagePackage: '₹4 LPA',
          highestPackage: '₹10 LPA',
          placementRate: '65%'
        }
      },
    {
      id: 'TS1',
      name: 'Indian Institute of Technology Hyderabad (IIT Hyderabad)',
      location: 'Telangana',
      type: 'Government',
      rating: 4.8,
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
      fees: '₹2,40,000/year',
      cutoff: [94, 91, 88, 85, 82],
      about: 'IIT Hyderabad is a premier engineering institute, known for innovation, research, and strong industry collaboration.',
      courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'AI & ML'],
      examEligibility: {
        jee: true,
        mhtcet: false,
        direct: false
      },
      placements: {
        averagePackage: '₹16 LPA',
        highestPackage: '₹63 LPA',
        placementRate: '94%'
      }
    },
    {
      id: 'TS2',
      name: 'National Institute of Technology Warangal (NIT Warangal)',
      location: 'Telangana',
      type: 'Government',
      rating: 4.7,
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
      fees: '₹1,80,000/year',
      cutoff: [92, 89, 86, 82, 78],
      about: 'NIT Warangal is one of India’s oldest NITs, recognized for excellence in engineering and technology.',
      courses: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Chemical Engineering'],
      examEligibility: {
        jee: true,
        mhtcet: false,
        direct: false
      },
      placements: {
        averagePackage: '₹12 LPA',
        highestPackage: '₹62 LPA',
        placementRate: '92%'
      }
    },
    {
      id: 'TS3',
      name: 'Osmania University',
      location: 'Hyderabad, Telangana',
      type: 'State University',
      rating: 4.4,
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
      fees: '₹70,000/year',
      cutoff: [85, 82, 79, 75, 70],
      about: 'Osmania University is a prestigious state university offering programs in engineering, law, management, and humanities.',
      courses: ['Law', 'MBA', 'Civil Engineering', 'Biotechnology', 'Computer Science'],
      examEligibility: {
        jee: true,
        mhtcet: false,
        direct: true
      },
      placements: {
        averagePackage: '₹6 LPA',
        highestPackage: '₹25 LPA',
        placementRate: '80%'
      }
    },
    {
      id: 'TS4',
      name: 'Jawaharlal Nehru Technological University Hyderabad (JNTUH)',
      location: 'Telangana',
      type: 'State University',
      rating: 4.5,
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
      fees: '₹1,20,000/year',
      cutoff: [88, 85, 82, 78, 74],
      about: 'JNTUH is one of the largest technological universities in India, offering UG and PG programs across engineering and management.',
      courses: ['CSE', 'IT', 'ECE', 'Mechanical', 'Pharmacy'],
      examEligibility: {
        jee: true,
        mhtcet: false,
        direct: true
      },
      placements: {
        averagePackage: '₹7 LPA',
        highestPackage: '₹30 LPA',
        placementRate: '85%'
      }
    },
    {
      id: 'TS5',
      name: 'Kakatiya Medical College',
      location: 'Warangal, Telangana',
      type: 'Government',
      rating: 4.6,
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
      fees: '₹1,10,000/year',
      cutoff: [96, 94, 92, 90, 88],
      about: 'Kakatiya Medical College is a renowned government medical institution providing MBBS and postgraduate programs.',
      courses: ['MBBS', 'MD', 'MS', 'Nursing'],
      examEligibility: {
        jee: false,
        mhtcet: false,
        direct: false
      },
      placements: {
        averagePackage: '₹12 LPA',
        highestPackage: '₹35 LPA',
        placementRate: '95%'
      }
    },
    {
      id: 'TS6',
      name: 'National Institute of Fashion Technology (NIFT Hyderabad)',
      location: 'Telangana',
      type: 'Government',
      rating: 4.3,
      image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
      fees: '₹2,80,000/year',
      cutoff: [82, 80, 78, 75, 70],
      about: 'NIFT Hyderabad is one of the leading institutes for fashion design, textile technology, and fashion management in India.',
      courses: ['Fashion Design', 'Textile Design', 'Fashion Tech', 'Communication Design'],
      examEligibility: {
        jee: false,
        mhtcet: false,
        direct: true
      },
      placements: {
        averagePackage: '₹5 LPA',
        highestPackage: '₹18 LPA',
        placementRate: '82%'
      }
    },
        {
          id: 'AP1',
          name: 'Indian Institute of Technology Tirupati (IIT Tirupati)',
          location: 'Andhra Pradesh',
          type: 'Government',
          rating: 4.7,
          image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
          fees: '₹2,40,000/year',
          cutoff: [93, 90, 87, 84, 80],
          about: 'IIT Tirupati is a centrally funded premier engineering institute, offering UG, PG, and doctoral programs in engineering and sciences.',
          courses: ['Computer Science', 'Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering'],
          examEligibility: {
            jee: true,
            mhtcet: false,
            direct: false
          },
          placements: {
            averagePackage: '₹15 LPA',
            highestPackage: '₹46 LPA',
            placementRate: '93%'
          }
        },
        {
          id: 'AP2',
          name: 'National Institute of Technology Andhra Pradesh (NIT AP)',
          location: 'Tadepalligudem, Andhra Pradesh',
          type: 'Government',
          rating: 4.5,
          image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
          fees: '₹1,80,000/year',
          cutoff: [91, 88, 85, 82, 78],
          about: 'NIT Andhra Pradesh is one of the newest NITs, providing quality education in core and modern engineering fields.',
          courses: ['CSE', 'ECE', 'Mechanical', 'Civil', 'EEE'],
          examEligibility: {
            jee: true,
            mhtcet: false,
            direct: false
          },
          placements: {
            averagePackage: '₹10 LPA',
            highestPackage: '₹44 LPA',
            placementRate: '88%'
          }
        },
        {
          id: 'AP3',
          name: 'Andhra University',
          location: 'Visakhapatnam, Andhra Pradesh',
          type: 'State University',
          rating: 4.4,
          image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
          fees: '₹85,000/year',
          cutoff: [84, 81, 78, 74, 70],
          about: 'Established in 1926, Andhra University is a prestigious state university offering programs in engineering, law, arts, and management.',
          courses: ['Law', 'MBA', 'Civil Engineering', 'Marine Engineering', 'Computer Science'],
          examEligibility: {
            jee: true,
            mhtcet: false,
            direct: true
          },
          placements: {
            averagePackage: '₹6 LPA',
            highestPackage: '₹22 LPA',
            placementRate: '78%'
          }
        },
        {
          id: 'AP4',
          name: 'Jawaharlal Nehru Technological University Kakinada (JNTUK)',
          location: 'Andhra Pradesh',
          type: 'State University',
          rating: 4.3,
          image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
          fees: '₹1,10,000/year',
          cutoff: [86, 83, 80, 77, 73],
          about: 'JNTUK is a leading technical university in Andhra Pradesh with strong engineering and research programs.',
          courses: ['CSE', 'IT', 'ECE', 'Mechanical', 'Pharmacy'],
          examEligibility: {
            jee: true,
            mhtcet: false,
            direct: true
          },
          placements: {
            averagePackage: '₹7 LPA',
            highestPackage: '₹26 LPA',
            placementRate: '82%'
          }
        },
        {
          id: 'AP5',
          name: 'Sri Venkateswara Medical College',
          location: 'Tirupati, Andhra Pradesh',
          type: 'Government',
          rating: 4.6,
          image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
          fees: '₹95,000/year',
          cutoff: [96, 94, 92, 90, 88],
          about: 'A top medical college in Andhra Pradesh, providing MBBS and postgraduate programs with strong clinical exposure.',
          courses: ['MBBS', 'MD', 'MS', 'Nursing'],
          examEligibility: {
            jee: false,
            mhtcet: false,
            direct: false
          },
          placements: {
            averagePackage: '₹10 LPA',
            highestPackage: '₹30 LPA',
            placementRate: '94%'
          }
        },
        {
          id: 'AP6',
          name: 'National Institute of Fashion Technology (NIFT Visakhapatnam)',
          location: 'Andhra Pradesh',
          type: 'Government',
          rating: 4.2,
          image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
          fees: '₹2,70,000/year',
          cutoff: [82, 79, 77, 74, 70],
          about: 'NIFT Visakhapatnam is a top design and fashion institute offering UG and PG programs in design and fashion management.',
          courses: ['Fashion Design', 'Textile Design', 'Fashion Tech', 'Fashion Management'],
          examEligibility: {
            jee: false,
            mhtcet: false,
            direct: true
          },
          placements: {
            averagePackage: '₹5.5 LPA',
            highestPackage: '₹18 LPA',
            placementRate: '80%'
          }
        },
        
            {
              id: 'KL1',
              name: 'Indian Institute of Technology Palakkad (IIT Palakkad)',
              location: 'Kerala',
              type: 'Government',
              rating: 4.6,
              image: 'https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=400',
              fees: '₹2,40,000/year',
              cutoff: [93, 90, 87, 84, 80],
              about: 'IIT Palakkad is one of the newer IITs, established in 2015, offering top-quality education in engineering, science, and research.',
              courses: ['Computer Science', 'Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering'],
              examEligibility: {
                jee: true,
                mhtcet: false,
                direct: false
              },
              placements: {
                averagePackage: '₹12 LPA',
                highestPackage: '₹46 LPA',
                placementRate: '88%'
              }
            },
            {
              id: 'KL2',
              name: 'National Institute of Technology Calicut (NIT Calicut)',
              location: 'Kerala',
              type: 'Government',
              rating: 4.7,
              image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
              fees: '₹2,00,000/year',
              cutoff: [92, 89, 85, 82, 78],
              about: 'NIT Calicut is one of India’s leading NITs, with strong engineering, architecture, and research programs.',
              courses: ['Computer Science', 'Architecture', 'Electronics Engineering', 'Chemical Engineering'],
              examEligibility: {
                jee: true,
                mhtcet: false,
                direct: false
              },
              placements: {
                averagePackage: '₹11 LPA',
                highestPackage: '₹50 LPA',
                placementRate: '90%'
              }
            },
            {
              id: 'KL3',
              name: 'Government Medical College, Thiruvananthapuram',
              location: 'Kerala',
              type: 'Government',
              rating: 4.8,
              image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
              fees: '₹1,00,000/year',
              cutoff: [98, 97, 95, 93, 90],
              about: 'Established in 1951, this is one of the premier government medical colleges in Kerala offering MBBS and super-speciality courses.',
              courses: ['MBBS', 'MD', 'MS', 'Nursing', 'Pharmacy'],
              examEligibility: {
                jee: false,
                mhtcet: false,
                direct: true
              },
              placements: {
                averagePackage: '₹15 LPA',
                highestPackage: '₹35 LPA',
                placementRate: '96%'
              }
            },
            {
              id: 'KL4',
              name: 'Cochin University of Science and Technology (CUSAT)',
              location: 'Kochi, Kerala',
              type: 'State University',
              rating: 4.4,
              image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
              fees: '₹1,20,000/year',
              cutoff: [87, 84, 80, 77, 73],
              about: 'CUSAT is a government-owned autonomous university in Kochi, offering programs in engineering, science, law, and management.',
              courses: ['Computer Science', 'Law', 'Marine Engineering', 'MBA'],
              examEligibility: {
                jee: true,
                mhtcet: false,
                direct: true
              },
              placements: {
                averagePackage: '₹6 LPA',
                highestPackage: '₹25 LPA',
                placementRate: '82%'
              }
            },
            {
              id: 'KL5',
              name: 'National University of Advanced Legal Studies (NUALS Kochi)',
              location: 'Kochi, Kerala',
              type: 'Government (Law University)',
              rating: 4.5,
              image: 'https://images.pexels.com/photos/442743/pexels-photo-442743.jpeg?auto=compress&cs=tinysrgb&w=400',
              fees: '₹1,80,000/year',
              cutoff: [90, 87, 83, 80, 75],
              about: 'NUALS Kochi is one of the premier National Law Universities in India, offering law degrees and research programs.',
              courses: ['BA LLB', 'LLM', 'PhD in Law'],
              examEligibility: {
                jee: false,
                mhtcet: false,
                direct: true
              },
              placements: {
                averagePackage: '₹8 LPA',
                highestPackage: '₹18 LPA',
                placementRate: '85%'
              }
            },
            {
              id: 'KL6',
              name: 'National Institute of Fashion Technology (NIFT Kannur)',
              location: 'Kerala',
              type: 'Government',
              rating: 4.2,
              image: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=College',
              fees: '₹2,80,000/year',
              cutoff: [82, 80, 77, 74, 70],
              about: 'NIFT Kannur is one of the top fashion and design institutes in India, offering programs in fashion technology and design management.',
              courses: ['Fashion Design', 'Textile Design', 'Accessory Design', 'Fashion Management'],
              examEligibility: {
                jee: false,
                mhtcet: false,
                direct: true
              },
              placements: {
                averagePackage: '₹5 LPA',
                highestPackage: '₹15 LPA',
                placementRate: '80%'
              }
            }
          
      
  
];
*/

export const mockColleges = [
  // --- Jammu & Kashmir (First) ---
  
    {
      id: 'DL2',
      name: 'All India Institute of Medical Sciences (AIIMS) Delhi',
      location: 'Delhi',
      localTown: 'New Delhi',
      type: 'Government',
      rating: 5.0,
      image: '/collage img/AIIMS delhi.webp',
      fees: '₹6,000/year',
      cutoff: [700, 695, 690, 685, 680],
      about: 'AIIMS Delhi is India\'s top medical institute providing MBBS, MD, MS and research programs.',
      courses: ['MBBS', 'B.Sc Nursing', 'MD/MS', 'PhD'],
      examEligibility: { 'neet_ug': true },
      placements: { averagePackage: '₹15 LPA', highestPackage: '₹40 LPA', placementRate: '99%' }
    },
    {
      id: 'JK1',
      name: 'National Institute of Technology Srinagar (NIT Srinagar)',
      location: 'Jammu & Kashmir',
      localTown: 'Srinagar',
      type: 'Government',
      rating: 4.6,
      image: '/collage img/NIT Srinagar.jpeg',
      fees: '₹1,80,000/year',
      cutoff: [92, 89, 85, 82, 80],
      about: 'NIT Srinagar is a premier engineering institute and one of the 31 NITs in India.',
      courses: ['Computer Science', 'Electrical', 'Mechanical', 'Civil'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹50 LPA', placementRate: '90%' }
    },
    {
      id: 'GJ4',
      name: 'Gujarat National Law University (GNLU)',
      location: 'Gujarat',
      localTown: 'Gandhinagar',
      type: 'Government',
      rating: 4.6,
      image: '/collage img/GNLU.jpeg',
      fees: '₹2,00,000/year',
      cutoff: [95, 92, 88, 85, 82],
      about: 'Top law school offering integrated LLB, LLM, and PhD programs.',
      courses: ['B.A. LLB', 'B.Com LLB', 'LLM'],
      examEligibility: { 'clat': true },
      placements: { averagePackage: '₹12 LPA', highestPackage: '₹25 LPA', placementRate: '95%' }
    },
    {
      id: 'OD2',
      name: 'AIIMS Bhubaneswar',
      location: 'Odisha',
      localTown: 'Bhubaneswar',
      type: 'Government',
      rating: 4.8,
      image: '/collage img/AIIMS Bhubaneswar.png',
      fees: '₹60,000/year',
      cutoff: [660, 650, 640, 630, 620],
      about: 'AIIMS Bhubaneswar is a top-tier medical institute offering MBBS and super-speciality programs.',
      courses: ['MBBS', 'MD', 'MS', 'Nursing'],
      examEligibility: { 'neet_ug': true },
      placements: { averagePackage: '₹14 LPA', highestPackage: '₹40 LPA', placementRate: '99%' }
    },
    
    {
      id: 'DL4',
      name: 'Delhi Technological University (DTU)',
      location: 'Delhi',
      localTown: 'Bawana Road',
      type: 'Government',
      rating: 4.7,
      image: '/collage img/DTU.jpeg',
      fees: '₹1,90,000/year',
      cutoff: [93, 90, 87, 84, 82],
      about: 'DTU is a leading government engineering university known for research and innovation.',
      courses: ['CSE', 'IT', 'ECE', 'Mechanical', 'Civil'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹13 LPA', highestPackage: '₹52 LPA', placementRate: '92%' }
    },
  
    // --- Maharashtra Colleges ---
    {
      id: 'MH1',
      name: 'Indian Institute of Technology Bombay (IIT Bombay)',
      location: 'Maharashtra',
      localTown: 'Powai, Mumbai',
      type: 'Government',
      rating: 4.9,
      image: '/collage img/IIT Bombay.jpeg',
      fees: '₹2,60,000/year',
      cutoff: [96, 94, 91, 88, 85],
      about: 'IIT Bombay is a world-renowned engineering institute with strong research and global recognition.',
      courses: ['CSE', 'Electrical', 'Mechanical', 'Aerospace'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹20 LPA', highestPackage: '₹3.7 Crore', placementRate: '98%' }
    },
  
    {
      id: 'MH3',
      name: 'Savitribai Phule Pune University (SPPU)',
      location: 'Maharashtra', // Updated to State only
      localTown: 'Pune', // Added specific town
      type: 'Government',
      rating: 4.6,
      image: '/collage img/SPPU.jpeg',
      fees: '₹30,000/year',
      cutoff: [85, 82, 80, 78, 75],
      about: 'SPPU offers a variety of courses in science, commerce, arts, and law.',
      courses: ['BA', 'B.Com', 'B.Sc', 'MBA'],
      // CUET is not in examCategories, keeping as is
      examEligibility: { 'cuet': true },
      placements: { averagePackage: '₹6 LPA', highestPackage: '₹18 LPA', placementRate: '78%' }
    },
    {
      id: 'MH4',
      name: 'College of Engineering Pune (COEP Tech University)',
      location: 'Maharashtra', // Updated to State only
      localTown: 'Pune', // Added specific town
      type: 'Government',
      rating: 4.7,
      image: '/collage img/COEP.jpeg',
      fees: '₹1,50,000/year',
      cutoff: [92, 89, 85, 82, 80],
      about: 'COEP is one of the oldest engineering colleges in India, known for its strong alumni network.',
      courses: ['Mechanical', 'Civil', 'IT', 'Production'],
      // Updated examEligibility using specific IDs
      examEligibility: { 'mhtcet': true, 'jee_main': true, 'jee_advanced': false }, 
      placements: { averagePackage: '₹8 LPA', highestPackage: '₹33 LPA', placementRate: '90%' }
    },
    {
      id: 'MH5',
      name: 'National Law University Mumbai (MNLU Mumbai)',
      location: 'Maharashtra', // Updated to State only
      localTown: 'Powai, Mumbai', // Added specific town
      type: 'Government',
      rating: 4.5,
      image: '/collage img/mnlu mubai.jpeg',
      fees: '₹1,60,000/year',
      cutoff: [98, 95, 93, 90, 88],
      about: 'MNLU Mumbai is a top law school offering BA LLB, LLM and PhD.',
      courses: ['BA LLB', 'LLM'],
      // Updated examEligibility using specific ID
      examEligibility: { 'clat': true },
      placements: { averagePackage: '₹8 LPA', highestPackage: '₹16 LPA', placementRate: '82%' }
    },
   
    {
      id: 'TS1',
      name: 'Indian Institute of Technology Hyderabad (IIT Hyderabad)',
      location: 'Telangana', // Updated to State only
      localTown: 'Sangareddy', // Added specific town
      type: 'Government',
      rating: 4.8,
      image: '/collage img/IIT Hyderabad.jpeg',
      fees: '₹2,40,000/year',
      cutoff: [94, 91, 88, 85, 82],
      about: 'Known for research and innovation, IIT Hyderabad is one of the fastest-growing IITs.',
      courses: ['CSE', 'AI & ML', 'Electrical', 'Mechanical', 'Civil'],
      // Updated examEligibility using specific IDs
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹16 LPA', highestPackage: '₹63 LPA', placementRate: '94%' }
    },
    
    {
      id: 'TS6',
      name: 'Indian School of Business (ISB)',
      location: 'Telangana', // Updated to State only
      localTown: 'Gachibowli, Hyderabad', // Added specific town
      type: 'Private',
      rating: 4.8,
      image: '/collage img/ISB.jpeg',
      fees: '₹30,00,000 (1-year PGPM)',
      cutoff: [700, 690, 680, 670, 660],
      about: 'ISB is a globally recognized B-school offering world-class management programs.',
      courses: ['PGP', 'PGPpro', 'Executive MBA'],
      // GMAT is not in examCategories, keeping as is
      examEligibility: { 'gmat': true },
      placements: { averagePackage: '₹28 LPA', highestPackage: '₹72 LPA', placementRate: '95%' }
    },
  
    // --- Kerala Colleges ---
    {
      id: 'KL1',
      name: 'Indian Institute of Management Kozhikode (IIM Kozhikode)',
      location: 'Kerala', // Updated to State only
      localTown: 'Kozhikode', // Added specific town
      type: 'Government',
      rating: 4.9,
      image: '/collage img/IIM Kozhikode.jpeg',
      fees: '₹21,00,000 (2 years)',
      cutoff: [98, 96, 94, 92, 90],
      about: 'IIM Kozhikode is a premier management institute and part of the IIM network.',
      courses: ['PGP', 'Executive MBA', 'FPM'],
      // Updated examEligibility using specific ID
      examEligibility: { 'cat': true },
      placements: { averagePackage: '₹27 LPA', highestPackage: '₹67 LPA', placementRate: '100%' }
    },
    {
      id: 'KL2',
      name: 'National Institute of Technology Calicut (NIT Calicut)',
      location: 'Kerala',
      localTown: 'Calicut',
      type: 'Government',
      rating: 4.7,
      image: '/collage img/NIT Cal.',
      fees: '₹1,80,000/year',
      cutoff: [92, 89, 85, 82, 80],
      about: 'NITC is a premier engineering and research institution in South India.',
      courses: ['CSE', 'ECE', 'EEE', 'Mechanical', 'Civil'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true }, // Updated
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹49 LPA', placementRate: '92%' }
    },
    {
      id: 'KL3',
      name: 'Government Medical College, Thiruvananthapuram',
      location: 'Kerala',
      localTown: 'Thiruvananthapuram',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/Medical_college_Gate_Thiruvananthapuram.jpg',
      fees: '₹50,000/year',
      cutoff: [660, 650, 640, 630, 620],
      about: 'One of the oldest and most reputed medical colleges in Kerala.',
      courses: ['MBBS', 'MD', 'MS', 'Nursing'],
      examEligibility: { 'neet_ug': true }, // Updated
      placements: { averagePackage: '₹9 LPA', highestPackage: '₹25 LPA', placementRate: '97%' }
    },
    {
      id: 'KL4',
      name: 'Cochin University of Science and Technology (CUSAT)',
      location: 'Kerala',
      localTown: 'Kochi',
      type: 'Government',
      rating: 4.5,
      image: 'collage img/cusat.png',
      fees: '₹80,000/year',
      cutoff: [85, 82, 78, 75, 72],
      about: 'CUSAT offers programs in engineering, science, management, and humanities.',
      courses: ['B.Tech', 'MBA', 'MCA', 'LLB'],
      examEligibility: { 'jee_main': true, 'cuet': true }, // Updated (assuming B.Tech takes JEE Main)
      placements: { averagePackage: '₹6 LPA', highestPackage: '₹18 LPA', placementRate: '82%' }
    },
    {
      id: 'KL5',
      name: 'Kerala Agricultural University (KAU)',
      location: 'Kerala',
      localTown: 'Thrissur',
      type: 'Government',
      rating: 4.4,
      image: 'collage img/kcaet.jpg',
      fees: '₹45,000/year',
      cutoff: [80, 78, 75, 72, 70],
      about: 'KAU is Kerala’s main agricultural research and education institution.',
      courses: ['B.Sc Agriculture', 'M.Sc Agriculture', 'PhD'],
      examEligibility: { 'icar': true }, // Kept as is (not in examCategories)
      placements: { averagePackage: '₹4.5 LPA', highestPackage: '₹11 LPA', placementRate: '70%' }
    },
    {
      id: 'KL6',
      name: 'National University of Advanced Legal Studies (NUALS)',
      location: 'Kerala',
      localTown: 'Kochi',
      type: 'Government',
      rating: 4.6,
      image: 'collage img/banner22.jpg',
      fees: '₹1,40,000/year',
      cutoff: [96, 94, 92, 90, 88],
      about: 'NUALS is a premier law university in Kerala offering BA LLB, LLM and PhD programs.',
      courses: ['BA LLB', 'LLM', 'PhD'],
      examEligibility: { 'clat': true }, // Updated
      placements: { averagePackage: '₹7 LPA', highestPackage: '₹16 LPA', placementRate: '80%' }
    },
    {
      id: 'OD1',
      name: 'National Institute of Technology Rourkela (NIT Rourkela)',
      location: 'Odisha',
      localTown: 'Rourkela',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/NIT Rourkela.jpeg',
      fees: '₹1,90,000/year',
      cutoff: [93, 90, 87, 84, 80],
      about: 'NIT Rourkela is one of India\'s top NITs offering engineering, science, and management programs.',
      courses: ['Computer Science', 'Electronics', 'Mechanical', 'Metallurgy'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true }, // Updated
      placements: { averagePackage: '₹11 LPA', highestPackage: '₹50 LPA', placementRate: '92%' }
    },
    {
      // NOTE: This college ID was already present in previous responses. 
      // Ensuring it is updated consistently.
      id: 'OD2',
      name: 'All India Institute of Medical Sciences (AIIMS Bhubaneswar)',
      location: 'Odisha',
      localTown: 'Bhubaneswar',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/AIIMS Bhubaneshwar.avif',
      fees: '₹60,000/year',
      cutoff: [660, 650, 640, 630, 620],
      about: 'AIIMS Bhubaneswar is a top-tier medical institute offering MBBS and super-speciality programs.',
      courses: ['MBBS', 'MD', 'MS', 'Nursing'],
      examEligibility: { 'neet_ug': true }, // Updated
      placements: { averagePackage: '₹14 LPA', highestPackage: '₹40 LPA', placementRate: '99%' }
    },
    {
      id: 'OD3',
      name: 'Utkal University',
      location: 'Odisha',
      localTown: 'Bhubaneswar',
      type: 'Government',
      rating: 4.4,
      image: 'collage img/Utkal University.avif',
      fees: '₹30,000/year',
      cutoff: [78, 75, 72, 70, 68],
      about: 'Oldest university in Odisha offering courses in humanities, commerce, science, and law.',
      courses: ['BA', 'B.Com', 'B.Sc', 'MA', 'LLB'],
      examEligibility: { 'direct': true }, // Kept as is (not in examCategories)
      placements: { averagePackage: '₹4 LPA', highestPackage: '₹12 LPA', placementRate: '70%' }
    },
    {
      id: 'OD4',
      name: 'Xavier Institute of Management (XIMB)',
      location: 'Odisha',
      localTown: 'Bhubaneswar',
      type: 'Private',
      rating: 4.6,
      image: 'collage img/XIMB.jpeg',
      fees: '₹6,50,000/year',
      cutoff: [95, 90, 88, 85, 82],
      about: 'Top-ranked B-School offering MBA, Executive MBA, and PhD in management.',
      courses: ['MBA-BM', 'MBA-HRM', 'Executive MBA'],
      examEligibility: { 'cat': true, 'xat': true }, // Updated with specific IDs
      placements: { averagePackage: '₹17 LPA', highestPackage: '₹71 LPA', placementRate: '98%' }
    },
    {
      id: 'OD5',
      name: 'Odisha University of Agriculture and Technology (OUAT)',
      location: 'Odisha',
      localTown: 'Bhubaneswar',
      type: 'Government',
      rating: 4.3,
      image: 'collage img/OUAT.jpeg',
      fees: '₹55,000/year',
      cutoff: [80, 78, 75, 72, 70],
      about: 'OUAT is the second oldest agricultural university in India focusing on agriculture, forestry, and fisheries.',
      courses: ['B.Sc Agriculture', 'B.V.Sc', 'M.Sc Agriculture'],
      examEligibility: { 'icar': true }, // Kept as is (not in examCategories)
      placements: { averagePackage: '₹4.2 LPA', highestPackage: '₹10 LPA', placementRate: '68%' }
    },
    {
      id: 'OD6',
      name: 'KIIT University',
      location: 'Odisha',
      localTown: 'Bhubaneswar',
      type: 'Private',
      rating: 4.5,
      image: 'collage img/KIIT University.jpg',
      fees: '₹3,50,000/year',
      cutoff: [80, 78, 75, 72, 70],
      about: 'Deemed university offering a wide range of professional programs including law, medicine, and engineering.',
      courses: ['B.Tech', 'MBBS', 'Law', 'MBA'],
      examEligibility: { 'jee_main': true, 'neet': true, 'direct': true }, // Updated with specific IDs
      placements: { averagePackage: '₹8 LPA', highestPackage: '₹50 LPA', placementRate: '90%' }
    },
    
    // --- Goa Colleges ---
    {
      id: 'GA1',
      name: 'Goa Engineering College (GEC)',
      location: 'Goa',
      localTown: 'Farmagudi',
      type: 'Government',
      rating: 4.4,
      image: 'collage img/GEC.jpeg',
      fees: '₹1,50,000/year',
      cutoff: [80, 77, 75, 72, 70],
      about: 'The oldest engineering college in Goa, offering B.Tech in multiple branches.',
      courses: ['Computer Science', 'Civil', 'Mechanical', 'Electrical'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false }, // Updated with specific ID
      placements: { averagePackage: '₹6.5 LPA', highestPackage: '₹18 LPA', placementRate: '80%' }
    },
    {
      id: 'GA2',
      name: 'Goa Medical College',
      location: 'Goa',
      localTown: 'Bambolim',
      type: 'Government',
      rating: 4.6,
      image: 'collage img/Goa medical college.jpg',
      fees: '₹75,000/year',
      cutoff: [630, 620, 610, 600, 590],
      about: 'Asia’s oldest medical college providing high-quality healthcare education.',
      courses: ['MBBS', 'MD', 'MS', 'Nursing'],
      examEligibility: { 'neet_ug': true }, // Updated with specific ID
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹25 LPA', placementRate: '97%' }
    },
    {
      id: 'GA3',
      name: 'BITS Pilani, Goa Campus',
      location: 'Goa',
      localTown: 'Zuarinagar',
      type: 'Private',
      rating: 4.8,
      image: 'collage img/BITS Goa Campus.jpg',
      fees: '₹4,00,000/year',
      cutoff: [92, 90, 88, 85, 82],
      about: 'Top private engineering and science institution with no reservations and a unique admission process.',
      courses: ['B.E', 'M.E', 'M.Sc', 'PhD'],
      examEligibility: { 'bitsat': true }, // Updated with specific ID
      placements: { averagePackage: '₹14 LPA', highestPackage: '₹45 LPA', placementRate: '95%' }
    },
    {
      id: 'GA4',
      name: 'Goa Institute of Management (GIM)',
      location: 'Goa',
      localTown: 'Sanquelim',
      type: 'Private',
      rating: 4.7,
      image: 'collage img/GIM college.webp',
      fees: '₹6,80,000/year',
      cutoff: [95, 92, 88, 85, 82],
      about: 'One of India’s premier B-Schools offering PGDM programs with global exposure.',
      courses: ['PGDM', 'PGDM-HCM', 'PGDM-BDA'],
      examEligibility: { 'cat': true, 'xat': true }, // Updated with specific IDs
      placements: { averagePackage: '₹12 LPA', highestPackage: '₹55 LPA', placementRate: '98%' }
    },
    {
      id: 'GA5',
      name: 'Goa University',
      location: 'Goa',
      localTown: 'Taleigao Plateau',
      type: 'Government',
      rating: 4.3,
      image: 'collage img/Goa University.jpg',
      fees: '₹25,000/year',
      cutoff: [75, 72, 70, 68, 65],
      about: 'Offers a variety of UG, PG, and research programs in arts, science, commerce, and social sciences.',
      courses: ['BA', 'B.Sc', 'M.Sc', 'M.A', 'PhD'],
      examEligibility: { 'direct': true }, // Kept as is
      placements: { averagePackage: '₹3.5 LPA', highestPackage: '₹8 LPA', placementRate: '60%' }
    },
    {
      id: 'GA6',
      name: 'Goa College of Pharmacy',
      location: 'Goa',
      localTown: 'Panaji',
      type: 'Government',
      rating: 4.2,
      image: 'collage img/Goa College of Pharmacy.jpeg',
      fees: '₹40,000/year',
      cutoff: [78, 75, 72, 70, 68],
      about: 'Leading pharmacy institute in Goa offering diploma, UG, and PG programs.',
      courses: ['B.Pharm', 'M.Pharm', 'Diploma Pharmacy'],
      examEligibility: { 'direct': true }, // Kept as is
      placements: { averagePackage: '₹4.5 LPA', highestPackage: '₹12 LPA', placementRate: '72%' }
    },
    
    // --- Gujarat Colleges ---
    {
      id: 'GJ1',
      name: 'Indian Institute of Technology Gandhinagar (IITGN)',
      location: 'Gujarat',
      localTown: 'Gandhinagar',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/IIT GN.jpg',
      fees: '₹2,40,000/year',
      cutoff: [94, 91, 88, 85, 82],
      about: 'Known for its student-centric policies and strong research focus.',
      courses: ['Computer Science', 'Mechanical', 'Electrical', 'Civil'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true }, // Updated with specific IDs
      placements: { averagePackage: '₹16 LPA', highestPackage: '₹56 LPA', placementRate: '94%' }
    },
    {
      id: 'GJ2',
      name: 'Sardar Vallabhbhai National Institute of Technology (SVNIT Surat)',
      location: 'Gujarat',
      localTown: 'Surat',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/SVNIT Surat.webp',
      fees: '₹1,80,000/year',
      cutoff: [92, 89, 85, 82, 80],
      about: 'One of the 31 NITs of India offering B.Tech, M.Tech, and PhD programs.',
      courses: ['CSE', 'ECE', 'Mechanical', 'Chemical'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true }, // Updated with specific IDs
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹44 LPA', placementRate: '90%' }
    },
    {
      id: 'GJ3',
      name: 'Institute of Management, Nirma University',
      location: 'Gujarat',
      localTown: 'Ahmedabad',
      type: 'Private',
      rating: 4.5,
      image: 'collage img/IM Nirma.webp',
      fees: '₹5,50,000/year',
      cutoff: [85, 82, 80, 78, 75],
      about: 'A reputed B-school offering MBA and Executive MBA programs.',
      courses: ['MBA', 'Executive MBA'],
      examEligibility: { 'cat': true, 'xat': true }, // Updated with specific IDs
      placements: { averagePackage: '₹8.5 LPA', highestPackage: '₹28 LPA', placementRate: '92%' }
    },
    {
      // NOTE: This college ID was already present in previous responses. 
      // Ensuring it is updated consistently.
      id: 'GJ4',
      name: 'Gujarat National Law University (GNLU)',
      location: 'Gujarat',
      localTown: 'Gandhinagar',
      type: 'Government',
      rating: 4.6,
      image: 'collage img/GNLU.jpg',
      fees: '₹2,00,000/year',
      cutoff: [95, 92, 88, 85, 82],
      about: 'Top law school offering integrated LLB, LLM, and PhD programs.',
      courses: ['B.A. LLB', 'B.Com LLB', 'LLM'],
      examEligibility: { 'clat': true }, // Updated with specific ID
      placements: { averagePackage: '₹12 LPA', highestPackage: '₹25 LPA', placementRate: '95%' }
    },
    {
      id: 'GJ5',
      name: 'M.S. University of Baroda',
      location: 'Gujarat',
      localTown: 'Vadodara',
      type: 'Government',
      rating: 4.3,
      image: 'collage img/MS University of baroda.jpg',
      fees: '₹35,000/year',
      cutoff: [75, 72, 70, 68, 65],
      about: 'Multi-faculty university with programs in arts, science, commerce, fine arts, and education.',
      courses: ['BA', 'B.Sc', 'B.Com', 'M.A', 'PhD'],
      examEligibility: { 'direct': true }, // Kept as is
      placements: { averagePackage: '₹3.8 LPA', highestPackage: '₹9 LPA', placementRate: '65%' }
    },
    {
      id: 'GJ6',
      name: 'Anand Agricultural University (AAU)',
      location: 'Gujarat',
      localTown: 'Anand',
      type: 'Government',
      rating: 4.4,
      image: 'collage img/AAU.jpg',
      fees: '₹45,000/year',
      cutoff: [78, 75, 72, 70, 68],
      about: 'AAU is known for its pioneering work in agriculture, veterinary, and dairy science.',
      courses: ['B.Sc Agriculture', 'Dairy Tech', 'Veterinary Science'],
      examEligibility: { 'icar': true }, // Kept as is (not in examCategories)
      placements: { averagePackage: '₹4.5 LPA', highestPackage: '₹12 LPA', placementRate: '70%' }
    },
    {
      id: 'CH1',
      name: 'Post Graduate Institute of Medical Education and Research (PGIMER)',
      location: 'Chandigarh',
      localTown: 'Chandigarh',
      type: 'Government',
      rating: 5.0,
      image: 'collage img/PGIMER.jpeg', // Placeholder
      fees: '₹6,000/year (approx)',
      cutoff: [700, 695, 690, 685, 680],
      about: 'One of the top medical research and education institutes in India, highly regarded for medical and super-speciality courses.',
      courses: ['MD', 'MS', 'M.Ch', 'MDS', 'DM'],
      examEligibility: { 'ini_cet': true }, // Using INI CET (primary exam)
      placements: { averagePackage: '₹18 LPA', highestPackage: '₹40 LPA', placementRate: '99%' }
    },
    
    // --- Assam (AS) ---
    {
      id: 'AS2',
      name: 'National Institute of Technology (NIT) Silchar',
      location: 'Assam',
      localTown: 'Silchar',
      type: 'Government',
      rating: 4.4,
      image: 'collage img/NIT-Silchar.webp', // Placeholder
      fees: '₹1,77,000/year',
      cutoff: [90, 87, 83, 80, 78],
      about: 'A leading regional NIT offering B.Tech and M.Tech in core engineering branches.',
      courses: ['B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech ECE', 'B.Tech Civil'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹40 LPA', placementRate: '92%' }
    },
  
    // --- Andhra Pradesh (AP) ---
    {
      id: 'AP3',
      name: 'Andhra University College of Engineering (AUCE)',
      location: 'Andhra Pradesh',
      localTown: 'Visakhapatnam',
      type: 'Government',
      rating: 4.0,
      image: 'collage img/AUCE.jpg', // Placeholder
      fees: '₹40,000/year',
      cutoff: [85, 82, 80, 78, 75],
      about: 'A historical and renowned engineering college in the state offering a wide range of B.E/B.Tech programs.',
      courses: ['B.E CSE', 'B.E ECE', 'B.E Civil', 'B.E Mechanical'],
      examEligibility: { 'jee_main': true, 'eamcet': true },
      placements: { averagePackage: '₹5 LPA', highestPackage: '₹30 LPA', placementRate: '85%' }
    },
    
    // --- Bihar (BR) ---
    {
      id: 'BR2',
      name: 'National Institute of Technology (NIT) Patna',
      location: 'Bihar',
      localTown: 'Patna',
      type: 'Government',
      rating: 4.0,
      image: 'collage img/NIT Patna.webp', // Placeholder
      fees: '₹1,50,000/year (approx)',
      cutoff: [92, 89, 85, 82, 80],
      about: 'One of the 31 NITs, offering B.Tech programs and a strong legacy in engineering education.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Civil', 'B.Tech Mechanical'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹9 LPA', highestPackage: '₹28 LPA', placementRate: '90%' }
    },
  
    // --- Chhattisgarh (CG) ---
    {
      id: 'CG3',
      name: 'All India Institute of Medical Sciences (AIIMS) Raipur',
      location: 'Chhattisgarh',
      localTown: 'Raipur',
      type: 'Government',
      rating: 4.2,
      image: 'collage img/AIIMS Raipur.jpeg', // Placeholder
      fees: '₹6,790/Total Fees',
      cutoff: [650, 640, 630, 620, 610],
      about: 'A prestigious medical institution established under the PMSSY, providing MBBS and advanced medical education.',
      courses: ['MBBS', 'MD', 'MS', 'B.Sc Nursing'],
      examEligibility: { 'neet_ug': true },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹25 LPA', placementRate: '98%' }
    },
  
    // --- Andhra Pradesh (AP) ---
    {
      id: 'AP1',
      name: 'Indian Institute of Technology (IIT) Tirupati',
      location: 'Andhra Pradesh',
      localTown: 'Tirupati',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/IIT Tirupati.jpeg', // Placeholder
      fees: '₹2,29,000/year',
      cutoff: [95, 92, 90, 88, 85],
      about: 'One of the fastest-growing third-generation IITs, known for its focus on technology and research.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'M.Tech'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹15.54 LPA', highestPackage: '₹69.45 LPA', placementRate: '90%' }
    },
    
    // --- Bihar (BR) ---
    {
      id: 'BR1',
      name: 'Indian Institute of Technology (IIT) Patna',
      location: 'Bihar',
      localTown: 'Patna',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/IIT Patna.jpeg', // Placeholder
      fees: '₹9,67,000/Total Fees (approx)',
      cutoff: [96, 94, 91, 88, 85],
      about: 'A key engineering institute offering B.Tech in CSE, Electrical, Mechanical, and Civil engineering.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'M.Tech'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹16 LPA', highestPackage: '₹40 LPA', placementRate: '95%' }
    },
  
    // --- Chandigarh (CH) ---
    {
      id: 'CH3',
      name: 'Panjab University (PU) Chandigarh',
      location: 'Chandigarh',
      localTown: 'Chandigarh',
      type: 'Government',
      rating: 4.3,
      image: 'collage img/PU Chandigarh.jpg', // Placeholder
      fees: '₹30,000/year (approx)',
      cutoff: [80, 78, 75, 72, 70],
      about: 'One of the oldest universities in India, offering a vast number of UG, PG, and PhD programs across various faculties.',
      courses: ['B.Sc', 'B.A', 'B.Com', 'B.E', 'M.B.A'],
      examEligibility: { 'pu_cet': true, 'jee_main': true, 'cat': true },
      placements: { averagePackage: '₹5 LPA', highestPackage: '₹15 LPA', placementRate: '80%' }
    },
  
    // --- Chhattisgarh (CG) ---
    {
      id: 'CG1',
      name: 'Indian Institute of Management (IIM) Raipur',
      location: 'Chhattisgarh',
      localTown: 'Raipur',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/IIM Raipur.jpg', // Placeholder
      fees: '₹13,00,000/Total Fees (PGP)',
      cutoff: [98, 96, 94, 92, 90],
      about: 'A premier management school, offering Post Graduate Programme (PGP) and Executive PGP.',
      courses: ['PGP in Management', 'Executive PGP', 'FPM'],
      examEligibility: { 'cat': true, 'gmat': true },
      placements: { averagePackage: '₹18.15 LPA', highestPackage: '₹42.29 LPA', placementRate: '100%' }
    },
  
    // --- Assam (AS) ---
    {
      id: 'AS1',
      name: 'Indian Institute of Technology (IIT) Guwahati',
      location: 'Assam',
      localTown: 'Guwahati',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/IIT Guwahati.jpg', // Placeholder
      fees: '₹2,30,000/year',
      cutoff: [96, 94, 91, 88, 85],
      about: 'A world-class technical institute known for its beautiful campus and strong academic programs.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'B.Des'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹20 LPA', highestPackage: '₹1.2 CPA', placementRate: '95%' }
    },
  
    // --- Andhra Pradesh (AP) ---
    {
      id: 'AP2',
      name: 'All India Institute of Medical Sciences (AIIMS) Mangalagiri',
      location: 'Andhra Pradesh',
      localTown: 'Mangalagiri, Guntur',
      type: 'Government',
      rating: 4.2,
      image: 'collage img/AIIMS Mangalagiri.jpg', // Placeholder
      fees: '₹5,860/Total Fees',
      cutoff: [660, 650, 640, 630, 620],
      about: 'A premier medical institute offering MBBS and PG programs in healthcare and medical education.',
      courses: ['MBBS', 'MD', 'MS', 'B.Sc Nursing'],
      examEligibility: { 'neet_ug': true },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹25 LPA', placementRate: '95%' }
    },
    
    // --- Bihar (BR) ---
    {
      id: 'BR3',
      name: 'All India Institute of Medical Sciences (AIIMS) Patna',
      location: 'Bihar',
      localTown: 'Patna',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/AIIMS Patna.png', // Placeholder
      fees: '₹6,790/Total Fees',
      cutoff: [680, 675, 670, 665, 660],
      about: 'A premier medical institute and hospital providing top-tier medical education (MBBS) and research.',
      courses: ['MBBS', 'MD', 'MS', 'B.Sc Nursing'],
      examEligibility: { 'neet_ug': true },
      placements: { averagePackage: '₹12 LPA', highestPackage: '₹30 LPA', placementRate: '98%' }
    },
  
    // --- Chhattisgarh (CG) ---
    {
      id: 'CG2',
      name: 'National Institute of Technology (NIT) Raipur',
      location: 'Chhattisgarh',
      localTown: 'Raipur',
      type: 'Government',
      rating: 4.5,
      image: 'collage img/NIT Raipur.jpg', // Placeholder
      fees: '₹1,80,000/year (approx)',
      cutoff: [91, 88, 85, 82, 79],
      about: 'A major engineering institute offering B.Tech, M.Tech, and PhD programs.',
      courses: ['B.Tech Mechanical', 'B.Tech Civil', 'B.Tech CSE', 'B.Tech ECE'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹44 LPA', placementRate: '90%' }
    },
  
    // --- Chandigarh (CH) ---
    {
      id: 'CH2',
      name: 'Punjab Engineering College (PEC) Deemed University',
      location: 'Chandigarh',
      localTown: 'Chandigarh',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/PEC University.jpeg', // Placeholder
      fees: '₹1,05,000/year (approx)',
      cutoff: [93, 90, 87, 84, 82],
      about: 'A prestigious engineering college with a long history and strong focus on engineering and technology research.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech Civil'],
      examEligibility: { 'jee_main': true, 'sat': true },
      placements: { averagePackage: '₹13 LPA', highestPackage: '₹40 LPA', placementRate: '92%' }
    },
  
    // --- Assam (AS) ---
    {
      id: 'AS3',
      name: 'Gauhati University (GU)',
      location: 'Assam',
      localTown: 'Guwahati',
      type: 'Government',
      rating: 4.0,
      image: 'collage img/GU.jpg', // Placeholder
      fees: '₹50,000/year (approx)',
      cutoff: [75, 72, 70, 68, 65],
      about: 'The oldest and largest university in Northeast India, offering a wide array of UG and PG courses.',
      courses: ['BA', 'B.Sc', 'B.Com', 'B.Tech', 'MBA'],
      examEligibility: { 'cuet': true },
      placements: { averagePackage: '₹4 LPA', highestPackage: '₹10 LPA', placementRate: '75%' }
    },
    {
      id: 'PB1',
      name: 'Indian Institute of Technology (IIT) Ropar',
      location: 'Punjab',
      localTown: 'Rupnagar',
      type: 'Government',
      rating: 4.6,
      image: 'collage img/IIT Ropar.jpeg', // Placeholder
      fees: '₹2,25,000/year (approx)',
      cutoff: [96, 94, 91, 88, 85],
      about: 'A prestigious engineering institute known for its strong research culture and excellent B.Tech and M.Tech programs.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'M.Sc', 'PhD'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹22.09 LPA', highestPackage: '₹55 LPA', placementRate: '80%' }
    },
  
    // --- Haryana (HR) ---
    {
      id: 'HR2',
      name: 'National Institute of Technology (NIT) Kurukshetra',
      location: 'Haryana',
      localTown: 'Kurukshetra',
      type: 'Government',
      rating: 4.1,
      image: 'collage img/NIT Kurukshetra.jpeg', // Placeholder
      fees: '₹1,67,000/year (approx)',
      cutoff: [92, 89, 85, 82, 80],
      about: 'A leading NIT with a high NIRF ranking, known for its strong B.Tech and M.Tech programs and robust placements in core branches.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Civil', 'B.Tech Mechanical'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹13.9 LPA', highestPackage: '₹40 LPA', placementRate: '90%' }
    },
    
    // --- Karnataka (KA) ---
    {
      id: 'KA1',
      name: 'National Institute of Technology Karnataka (NITK) Surathkal',
      location: 'Karnataka',
      localTown: 'Mangalore',
      type: 'Government',
      rating: 4.4,
      image: 'collage img/NIT Suratkal.jpg', // Placeholder
      fees: '₹1,67,000/year (approx)',
      cutoff: [93, 90, 87, 84, 82],
      about: 'One of the top NITs in the country, highly reputed for its engineering programs and situated on a beachside campus.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'M.Tech'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹14.21 LPA', highestPackage: '₹54 LPA', placementRate: '95%' }
    },
  
    // --- Uttar Pradesh (UP) ---
    {
      id: 'UP1',
      name: 'Indian Institute of Technology (IIT) Kanpur',
      location: 'Uttar Pradesh',
      localTown: 'Kanpur',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/IIT Kanpur.jpg', // Placeholder
      fees: '₹2,15,000/year (approx)',
      cutoff: [97, 95, 93, 90, 88],
      about: 'One of the five original IITs, renowned globally for its research, infrastructure, and tough engineering programs.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'M.Tech', 'PhD'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹26.90 LPA', highestPackage: '₹1.9 CPA', placementRate: '94%' }
    },
  
    // --- West Bengal (WB) ---
    {
      id: 'WB1',
      name: 'Indian Institute of Technology (IIT) Kharagpur',
      location: 'West Bengal',
      localTown: 'Kharagpur',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/IIT Kharagpur.jpg', // Placeholder
      fees: '₹2,20,000/year (approx)',
      cutoff: [97, 95, 93, 90, 88],
      about: 'The oldest and largest IIT, known for its multidisciplinary approach and high-impact research.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'MBA'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true, 'cat': true },
      placements: { averagePackage: '₹20 LPA', highestPackage: '₹2.4 CPA', placementRate: '95%' }
    },
    
    // --- Rajasthan (RJ) ---
    {
      id: 'RJ2',
      name: 'Malaviya National Institute of Technology (MNIT) Jaipur',
      location: 'Rajasthan',
      localTown: 'Jaipur',
      type: 'Government',
      rating: 4.2,
      image: 'collage img/MNIT Jaipur.webp', // Placeholder
      fees: '₹1,80,000/year (approx)',
      cutoff: [92, 89, 85, 82, 80],
      about: 'A premier NIT in Jaipur known for its strong engineering programs and contribution to technical education.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Civil', 'B.Tech Mechanical'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹64 LPA', placementRate: '90%' }
    },
  
    // --- Jharkhand (JH) ---
    {
      id: 'JH1',
      name: 'Xavier Labour Relations Institute (XLRI) Jamshedpur',
      location: 'Jharkhand',
      localTown: 'Jamshedpur',
      type: 'Private',
      rating: 4.6,
      image: 'collage img/XLRI Jamshedpur.jpg', // Placeholder
      fees: '₹15,30,000/year (approx)',
      cutoff: [99, 98, 97, 96, 95], // CAT/XAT percentile
      about: 'One of India\'s oldest and most prestigious private business schools, renowned for its HR and Business Management programs.',
      courses: ['PGDM (BM)', 'PGDM (HRM)', 'FPM'],
      examEligibility: { 'xat': true, 'gmat': true },
      placements: { averagePackage: '₹31.08 LPA', highestPackage: '₹75 LPA', placementRate: '100%' }
    },
    
    // --- Tamil Nadu (TN) ---
    {
      id: 'TN1',
      name: 'Indian Institute of Technology (IIT) Madras',
      location: 'Tamil Nadu',
      localTown: 'Chennai',
      type: 'Government',
      rating: 4.9,
      image: 'collage img/IIT Madras.jpeg', // Placeholder
      fees: '₹2,10,000/year (approx)',
      cutoff: [98, 96, 94, 92, 90],
      about: 'Ranked #1 in India for Engineering, known for its research park, innovation, and academic excellence.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'M.Tech'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹17.5 LPA', highestPackage: '₹2.1 CPA', placementRate: '95%' }
    },
  
    // --- Madhya Pradesh (MP) ---
    {
      id: 'MP1',
      name: 'Indian Institute of Technology (IIT) Indore',
      location: 'Madhya Pradesh',
      localTown: 'Indore',
      type: 'Government',
      rating: 4.2,
      image: 'collage img/IIT Indore.jpeg', // Placeholder
      fees: '₹2,00,000/year (approx)',
      cutoff: [94, 91, 88, 85, 82],
      about: 'Known for its focus on science, technology, and research, offering B.Tech and M.Tech programs in various specializations.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech Space'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹21.20 LPA', highestPackage: '₹56 LPA', placementRate: '90%' }
    },
  
    // --- Uttarakhand (UK) ---
    {
      id: 'UK2',
      name: 'All India Institute of Medical Sciences (AIIMS) Rishikesh',
      location: 'Uttarakhand',
      localTown: 'Rishikesh',
      type: 'Government',
      rating: 4.6,
      image: 'collage img/AIIMS Rishikesh.jpeg', // Placeholder
      fees: '₹6,000/Total Fees (approx)',
      cutoff: [680, 675, 670, 665, 660],
      about: 'A highly-rated medical institution providing MBBS, MD, and MS programs with advanced facilities.',
      courses: ['MBBS', 'MD', 'MS', 'B.Sc Nursing'],
      examEligibility: { 'neet_ug': true },
      placements: { averagePackage: '₹10 LPA', highestPackage: '₹25 LPA', placementRate: '98%' }
    },
  
    // --- Jammu and Kashmir (JK) ---
    {
      id: 'JK2',
      name: 'National Institute of Technology (NIT) Srinagar',
      location: 'Jammu and Kashmir',
      localTown: 'Srinagar',
      type: 'Government',
      rating: 4.1,
      image: 'collage img/NIT Srinagar.jpeg', // Placeholder
      fees: '₹1,57,000/year (approx)',
      cutoff: [88, 85, 82, 79, 76],
      about: 'One of the 31 NITs, offering engineering programs in a unique geographic location with strong government support.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech Civil'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹8 LPA', highestPackage: '₹25 LPA', placementRate: '85%' }
    },
  
    // --- Himachal Pradesh (HP) ---
    {
      id: 'HP1',
      name: 'Indian Institute of Technology (IIT) Mandi',
      location: 'Himachal Pradesh',
      localTown: 'Mandi',
      type: 'Government',
      rating: 4.3,
      image: 'collage img/IIT Mandi.jpg', // Placeholder
      fees: '₹2,00,000/year (approx)',
      cutoff: [94, 91, 88, 85, 82],
      about: 'An IIT known for its scenic campus and focus on interdisciplinary research and a unique B.Tech curriculum.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'M.Sc'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹18.50 LPA', highestPackage: '₹60 LPA', placementRate: '90%' }
    },
  
    // --- West Bengal (WB) ---
    {
      id: 'WB2',
      name: 'Indian Institute of Management (IIM) Calcutta',
      location: 'West Bengal',
      localTown: 'Kolkata',
      type: 'Government',
      rating: 4.9,
      image: 'collage img/indian-institute-of-management-calcutta-joka-kolkata-institutes-3ld3yam.avif', // Placeholder
      fees: '₹13,50,000/year (approx)',
      cutoff: [99, 98, 97, 96, 95], // CAT percentile
      about: 'One of the original and top IIMs, globally renowned for its Post Graduate Programme in Management (PGDM).',
      courses: ['PGDM', 'Executive PGDM', 'FPM'],
      examEligibility: { 'cat': true, 'gmat': true },
      placements: { averagePackage: '₹35 LPA', highestPackage: '₹80 LPA', placementRate: '100%' }
    },
  
    // --- Tamil Nadu (TN) ---
    {
      id: 'TN2',
      name: 'Vellore Institute of Technology (VIT) Vellore',
      location: 'Tamil Nadu',
      localTown: 'Vellore',
      type: 'Private',
      rating: 4.5,
      image: 'collage img/ VIT Vellore.png', // Placeholder
      fees: '₹1,98,000/year (approx)',
      cutoff: [85, 82, 80, 78, 75], // VITEEE Rank based
      about: 'One of the largest and most popular private universities in India, known for its engineering courses and extensive placement opportunities.',
      courses: ['B.Tech CSE', 'B.Tech ECE', 'B.Tech Mechanical', 'BBA', 'MBA'],
      examEligibility: { 'viteee': true },
      placements: { averagePackage: '₹9.0 LPA', highestPackage: '₹1.0 CPA', placementRate: '90%' }
    },
  
    // --- Uttar Pradesh (UP) ---
    {
      id: 'UP2',
      name: 'Indian Institute of Technology (BHU) Varanasi',
      location: 'Uttar Pradesh',
      localTown: 'Varanasi',
      type: 'Government',
      rating: 4.6,
      image: 'collage img/IIT BHU.jpeg', // Placeholder
      fees: '₹2,07,000/year (approx)',
      cutoff: [95, 93, 91, 88, 85],
      about: 'Part of the historic Banaras Hindu University, offering B.Tech, M.Tech, and research programs in various disciplines.',
      courses: ['B.Tech CSE', 'B.Tech Electrical', 'B.Tech Mechanical', 'B.Tech Mining'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹23 LPA', highestPackage: '₹1.1 CPA', placementRate: '95%' }
    },
    
    // --- Jharkhand (JH) ---
    {
      id: 'JH2',
      name: 'Indian Institute of Technology (IIT) Dhanbad (ISM)',
      location: 'Jharkhand',
      localTown: 'Dhanbad',
      type: 'Government',
      rating: 4.3,
      image: 'collage img/IIT Dhanbad.jpeg', // Placeholder
      fees: '₹2,10,000/year (approx)',
      cutoff: [94, 91, 88, 85, 82],
      about: 'Formerly Indian School of Mines, known for its strong programs in Mining, Petroleum, and core engineering branches.',
      courses: ['B.Tech Mining', 'B.Tech Petroleum', 'B.Tech CSE', 'M.Tech'],
      examEligibility: { 'jee-main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹17.01 LPA', highestPackage: '₹83 LPA', placementRate: '90%' }
    },
  
    // --- Haryana (HR) ---
    {
      id: 'HR1',
      name: 'Management Development Institute (MDI) Gurgaon',
      location: 'Haryana',
      localTown: 'Gurugram',
      type: 'Private',
      rating: 4.7,
      image: 'collage img/MDI.webp', // Placeholder
      fees: '₹12,47,000/year (approx)',
      cutoff: [99, 98, 97, 96, 95], // CAT percentile
      about: 'One of India\'s top private business schools, renowned for its flagship Post Graduate Programme in Management (PGPM).',
      courses: ['PGPM', 'PGP-HRM', 'FPM', 'Executive PGPM'],
      examEligibility: { 'cat': true, 'gmat': true },
      placements: { averagePackage: '₹27 LPA', highestPackage: '₹60 LPA', placementRate: '100%' }
    },
  
    // --- Uttarakhand (UK) ---
    {
      id: 'UK1',
      name: 'Indian Institute of Technology (IIT) Roorkee',
      location: 'Uttarakhand',
      localTown: 'Roorkee',
      type: 'Government',
      rating: 4.7,
      image: 'collage img/IIT Roorkee.png', // Placeholder
      fees: '₹2,23,000/year (approx)',
      cutoff: [97, 95, 93, 90, 88],
      about: 'One of the oldest technical institutes in Asia, known for its Civil, Mechanical, and Engineering Science programs.',
      courses: ['B.Tech Civil', 'B.Tech Mechanical', 'B.Tech CSE', 'B.Arch'],
      examEligibility: { 'jee_main': true, 'jee_advanced': true },
      placements: { averagePackage: '₹20 LPA', highestPackage: '₹1.5 CPA', placementRate: '95%' }
    },
  
    // --- Himachal Pradesh (HP) ---
    {
      id: 'HP2',
      name: 'National Institute of Technology (NIT) Hamirpur',
      location: 'Himachal Pradesh',
      localTown: 'Hamirpur',
      type: 'Government',
      rating: 4.1,
      image: 'collage img/NIT Hamirpur.webp', // Placeholder
      fees: '₹1,50,000/year (approx)',
      cutoff: [89, 86, 83, 80, 77],
      about: 'A major technical institute offering B.Tech, B.Arch, and M.Tech programs in various disciplines.',
      courses: ['B.Tech CSE', 'B.Tech Civil', 'B.Tech ECE', 'B.Arch'],
      examEligibility: { 'jee_main': true, 'jee_advanced': false },
      placements: { averagePackage: '₹10.05 LPA', highestPackage: '₹50 LPA', placementRate: '88%' }
    },
  
    // --- Madhya Pradesh (MP) ---
    {
      id: 'MP2',
      name: 'Indian Institute of Management (IIM) Indore',
      location: 'Madhya Pradesh',
      localTown: 'Indore',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/IIM Indore.jpg', // Placeholder
      fees: '₹22,12,000/Total Fees (PGP)',
      cutoff: [99, 98, 97, 96, 95], // CAT percentile
      about: 'A leading IIM known for its 5-year Integrated Programme in Management (IPM) and flagship PGP.',
      courses: ['PGP', 'IPM', 'FPM'],
      examEligibility: { 'cat': true, 'ipmat': true }, // Added IPMAT (Institute-specific test)
      placements: { averagePackage: '₹25.5 LPA', highestPackage: '₹65 LPA', placementRate: '100%' }
    },
  
    // --- Rajasthan (RJ) ---
    {
      id: 'RJ1',
      name: 'Birla Institute of Technology and Science (BITS) Pilani',
      location: 'Rajasthan',
      localTown: 'Pilani',
      type: 'Private',
      rating: 4.4,
      image: 'collage img/bits pilani.jpg', // Placeholder
      fees: '₹4,00,000/year (approx)',
      cutoff: [90, 88, 85, 82, 80], // BITSAT Score based
      about: 'A prestigious private institute known for its zero-reservation policy, dual degree scheme, and rigorous academics.',
      courses: ['B.E CSE', 'B.E EEE', 'B.E Mechanical', 'M.Sc'],
      examEligibility: { 'bitsat': true },
      placements: { averagePackage: '₹15 LPA', highestPackage: '₹45 LPA', placementRate: '95%' }
    },
  
    // --- Punjab (PB) ---
    {
      id: 'PB2',
      name: 'Thapar Institute of Engineering and Technology (TIET) Patiala',
      location: 'Punjab',
      localTown: 'Patiala',
      type: 'Private',
      rating: 4.3,
      image: 'collage img/TIET.jpeg', // Placeholder
      fees: '₹3,20,000/year (approx)',
      cutoff: [85, 82, 80, 78, 75],
      about: 'One of the oldest private institutes in India, known for its engineering, management, and research programs.',
      courses: ['B.E CSE', 'B.E ECE', 'B.E Mechanical', 'BBA', 'MBA'],
      examEligibility: { 'jee_main': true, 'cuet': true, 'cat': true },
      placements: { averagePackage: '₹12.5 LPA', highestPackage: '₹40 LPA', placementRate: '90%' }
    },
  
    // --- Karnataka (KA) ---
    {
      id: 'KA2',
      name: 'Indian Institute of Management (IIM) Bangalore',
      location: 'Karnataka',
      localTown: 'Bengaluru',
      type: 'Government',
      rating: 4.9,
      image: 'collage img/IIM Bangalore.jpg', // Placeholder
      fees: '₹11,00,000/year (approx)',
      cutoff: [99, 98, 97, 96, 95], // CAT percentile
      about: 'Consistently ranked among the top management schools globally, offering PGP, Executive PGP, and PhD programs.',
      courses: ['PGP', 'PGPPM', 'FPM', 'PhD'],
      examEligibility: { 'cat': true, 'gmat': true },
      placements: { averagePackage: '₹35 LPA', highestPackage: '₹1.0 CPA', placementRate: '100%' }
    },
    
    // --- Ladakh (LA) ---
    {
      id: 'LA1',
      name: 'University of Ladakh (UOL)',
      location: 'Ladakh',
      localTown: 'Leh',
      type: 'Government',
      rating: 3.5,
      image: 'collage img/University of Ladakh.jpeg', // Placeholder
      fees: '₹15,000/year (approx)',
      cutoff: [60, 55, 50, 45, 40],
      about: 'The first university in Ladakh, focused on regional education, culture, and vocational courses.',
      courses: ['BA', 'B.Sc', 'B.Com', 'MA', 'M.Sc'],
      examEligibility: { 'direct': true, 'cuet': false },
      placements: { averagePackage: '₹3 LPA', highestPackage: '₹6 LPA', placementRate: '60%' }
    },
    {
      id: 'DEF1',
      name: 'National Defence Academy (NDA)',
      location: 'Maharashtra',
      localTown: 'Khadakwasla, Pune',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/NDA.jpg',
      fees: 'Government subsidized',
      cutoff: 'UPSC written exam + SSB interview + medical',
      about: 'The joint services academy for cadets of the Indian Army, Navy, and Air Force.',
      courses: ['B.A.', 'B.Sc.', 'B.Tech.'],
      examEligibility: { 'upsc_nda': true },
      placements: { averagePackage: 'N/A', highestPackage: 'N/A', placementRate: '100% Commissioned' }
    },
    {
      id: 'DEF2',
      name: 'Indian Military Academy (IMA)',
      location: 'Uttarakhand',
      localTown: 'Dehradun',
      type: 'Government',
      rating: 4.9,
      image: 'collage img/IMA.jpeg',
      fees: 'Government subsidized',
      cutoff: 'NDA + UPSC CDSE/other schemes',
      about: 'The training academy for officers of the Indian Army.',
      courses: ['Training for Army Commission'],
      examEligibility: { 'nda': true, 'upsc_cdse': true, 'other_schemes': true },
      placements: { averagePackage: 'N/A', highestPackage: 'N/A', placementRate: '100% Commissioned' }
    },
    {
      id: 'DEF3',
      name: 'Indian Naval Academy (INA)',
      location: 'Kerala',
      localTown: 'Ezhimala, Kannur',
      type: 'Government',
      rating: 4.8,
      image: 'collage img/INA.jpeg',
      fees: 'Government subsidized',
      cutoff: 'NDA + UPSC CDSE/10+2 B.Tech entry',
      about: 'The training academy for officers of the Indian Navy and Indian Coast Guard.',
      courses: ['B.Tech. (Naval Architecture, ECE)'],
      examEligibility: { 'nda': true, 'upsc_cdse': true, '10+2_btech': true },
      placements: { averagePackage: 'N/A', highestPackage: 'N/A', placementRate: '100% Commissioned' }
    },
    {
      id: 'DEF4',
      name: 'Air Force Academy (AFA)',
      location: 'Telangana',
      localTown: 'Dundigal, Hyderabad',
      type: 'Government',
      rating: 4.9,
      image: 'collage img/AFA.jpg',
      fees: 'Government subsidized',
      cutoff: 'NDA + UPSC CDSE/AFCAT/NCC entry',
      about: 'The training academy for officers of the Indian Air Force.',
      courses: ['Flying Training', 'Ground Duty Training', 'Technical Training'],
      examEligibility: { 'nda': true, 'upsc_cdse': true, 'afcat': true, 'ncc_entry': true },
      placements: { averagePackage: 'N/A', highestPackage: 'N/A', placementRate: '100% Commissioned' }
    }
];