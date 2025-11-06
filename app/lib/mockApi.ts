// Mock API data for BuildAmbit Admin Platform

// Dashboard Overview Data
export const dashboardStats = {
  totalUsers: {
    value: 1245,
    change: "+12.5%",
    changeType: "increase" as const,
    period: "this month"
  },
  activeCourses: {
    value: 82,
    change: "+5 new",
    changeType: "increase" as const,
    period: "this month"
  },
  completedMasterclasses: {
    value: 310,
    change: "+8.2%",
    changeType: "increase" as const,
    period: "last week"
  },
  publishedBlogPosts: {
    value: 155,
    change: "-2",
    changeType: "decrease" as const,
    period: "this month"
  }
};

// Quick Actions Data
export const quickActions = [
  {
    id: "manage-users",
    title: "Manage Users",
    description: "View, add, edit, or delete user accounts and roles.",
    icon: "users",
    buttonText: "Go to Manage",
    href: "/users"
  },
  {
    id: "create-masterclass",
    title: "Create Masterclass",
    description: "Design and publish new masterclasses for your learners.",
    icon: "plus-square",
    buttonText: "Go to Create",
    href: "/masterclass/create"
  },
  {
    id: "manage-courses",
    title: "Manage Courses",
    description: "Organize and update course categories & individual courses.",
    icon: "grid",
    buttonText: "Manage Courses",
    href: "/courses"
  },
  {
    id: "transactions",
    title: "Transactions",
    description: "Access all Transactions activities with reports.",
    icon: "credit-card",
    buttonText: "Go to Manage",
    href: "/transactions"
  }
];

// Analytics Reports Data
export const analyticsReports = {
  activeUsers: {
    title: "Active Users",
    value: "Pie Chart",
    description: "(Placeholder for Active Users report)",
    type: "chart" as const
  },
  masterclassAttendance: {
    title: "Mandates",
    value: "65.6%",
    description: "Placeholder for Mandates report",
    subDescription: "(Placeholder for Attendance Rate report)",
    type: "percentage" as const
  }
};

// Masterclass Data
export const masterclassData = [
  {
    id: 1,
    title: "Concept to Construction: The Architectural Workflow",
    category: "Architects",
    instructor: "Shreya",
    status: "LIVE" as const,
    start: "2025-07-01",
    end: "2025-07-31",
    description: "Learn the complete architectural workflow from initial concept to construction completion.",
    tags: ["Architecture", "Workflow", "Construction"],
    enrollmentCount: 245,
    rating: 4.8,
    whoShouldAttendPoints: ["Architects", "Students", "BIM Managers"],
    prerequisites: ["Basic CAD knowledge", "Interest in architecture"],
    curriculumPoints: ["Concept design", "Construction documentation", "Site management"],
    learningOutcomes: ["Understand workflow", "Apply BIM tools"],
    resources: {
      demoCertificate: { url: "/certificates/demo1.png" },
      sessionNotesImage: { url: "/notes/note1.png" },
      sessionNotesPdf: { url: "/notes/note1.pdf" }
    },
    faqs: [
      { question: "Is prior experience required?", answer: "No, but basic CAD helps." },
      { question: "Will I get a certificate?", answer: "Yes, on completion." }
    ]
  },
  {
    id: 2,
    title: "Design Thinking for Urban Spaces",
    category: "Civil",
    instructor: "Shreya",
    status: "Draft" as const,
    start: "2025-07-01",
    end: "2025-09-15",
    description: "Explore innovative design thinking approaches for sustainable urban development.",
    tags: ["Urban Design", "Civil Engineering", "Sustainability"],
    enrollmentCount: 0,
    rating: 0
  },
  {
    id: 3,
    title: "Mastering Architectural Visualization",
    category: "BIM",
    instructor: "Shreya",
    status: "LIVE" as const,
    start: "2025-07-01",
    end: "2025-07-20",
    description: "Advanced techniques for creating stunning architectural visualizations and presentations.",
    tags: ["BIM", "Visualization", "3D Modeling"],
    enrollmentCount: 189,
    rating: 4.6
  },
  {
    id: 4,
    title: "Future of AEC: From BIM to Metaverse",
    category: "Computational Design",
    instructor: "Shreya",
    status: "Archived" as const,
    start: "2025-07-01",
    end: "2025-12-01",
    description: "Discover the future of Architecture, Engineering, and Construction in the digital age.",
    tags: ["AEC", "BIM", "Metaverse", "Future Tech"],
    enrollmentCount: 156,
    rating: 4.7
  },
  {
    id: 5,
    title: "3D Printing in Construction",
    category: "Interior",
    instructor: "Shreya",
    status: "LIVE" as const,
    start: "2025-07-01",
    end: "2025-09-30",
    description: "Revolutionary applications of 3D printing technology in modern construction.",
    tags: ["3D Printing", "Construction", "Innovation"],
    enrollmentCount: 203,
    rating: 4.5
  },
  {
    id: 6,
    title: "Robotics in Construction",
    category: "MEP",
    instructor: "Shreya",
    status: "Draft" as const,
    start: "2025-07-01",
    end: "2025-11-15",
    description: "Explore the integration of robotics and automation in construction processes.",
    tags: ["Robotics", "MEP", "Automation"],
    enrollmentCount: 0,
    rating: 0
  }
];

// Mentor/Instructor Data
export const mentorData = [
  {
    id: 1,
    name: 'Shreya',
    titleRole: 'Senior Architect',
    email: 'shreya@example.com',
    expertise: ['Architecture', 'Sustainable Design', 'BIM Implementation'],
    experience: '10 years',
    shortBio: 'Experienced architect with over 10 years in the industry, specializing in sustainable design and BIM implementation.',
    headshot: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
    linkedinUrl: 'https://linkedin.com/in/shreya-architect',
    externalReferenceId: '',
    previousCompanies: [ 
      { name: 'EcoArch Ltd.', logoUrl: '/logos/ecoarch.svg' },
      { name: 'BuildSmart', logoUrl: '/logos/buildsmart.svg' },
    ],
    universities: [
      { name: 'IIT Roorkee', logoUrl: '/logos/iit-roorkee.svg' }
    ],
    status: 'Active'
  },
  {
    id: 2,
    name: 'Rohan Kapoor',
    titleRole: 'CEO, TechBuild Solutions',
    email: 'rohan@example.com',
    expertise: ['Construction Technology', '3D Printing', 'Robotics'],
    experience: '8 years',
    shortBio: 'Innovation leader in construction technology with expertise in 3D printing and robotics applications.',
    headshot: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
    linkedinUrl: 'https://linkedin.com/in/rohan-kapoor',
    externalReferenceId: '',
    previousCompanies: [
      { name: 'TechBuild Labs', logoUrl: '/logos/techbuild.svg' }
    ],
    universities: [
      { name: 'IIT Delhi', logoUrl: '/logos/iit-delhi.svg' },
      { name: 'Berkeley', logoUrl: '/logos/berkeley.svg' }
    ],
    status: 'Active'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    titleRole: 'Urban Planning Consultant',
    email: 'priya@example.com',
    expertise: ['Urban Planning', 'Smart Cities', 'Sustainable Development'],
    experience: '6 years',
    shortBio: 'Urban planning expert with focus on smart cities and sustainable development practices.',
    headshot: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
    linkedinUrl: 'https://linkedin.com/in/priya-sharma-urban',
    externalReferenceId: '',
    previousCompanies: [
      { name: 'PlanIt', logoUrl: '/logos/planit.svg' }
    ],
    universities: [
      { name: 'CEPT University', logoUrl: '/logos/cept.svg' }
    ],
    status: 'Pending'
  },
  {
    id: 4,
    name: 'Arjun Patel',
    titleRole: 'BIM Specialist',
    email: 'arjun@example.com',
    expertise: ['BIM Implementation', 'Large-Scale Construction', 'Construction Management'],
    experience: '5 years',
    shortBio: 'BIM implementation specialist with extensive experience in large-scale construction projects.',
    headshot: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
    linkedinUrl: 'https://linkedin.com/in/arjun-patel-bim',
    
    externalReferenceId: '',
    previousCompanies: [
      { name: 'Construct Inc.', logoUrl: '/logos/construct.svg' }
    ],
    universities: [
      { name: 'NIT Trichy', logoUrl: '/logos/nittrichy.svg' }
    ],
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Sneha Reddy',
    titleRole: 'Interior Design Director',
    email: 'sneha@example.com',
    expertise: ['Interior Design', 'Commercial Spaces', 'Residential Spaces'],
    experience: '4 years',
    shortBio: 'Award-winning interior designer with expertise in commercial and residential spaces.',
    headshot: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?20170328184010',
    linkedinUrl: 'https://linkedin.com/in/sneha-reddy-interior',
    externalReferenceId: '',
    previousCompanies: [
      { name: 'DesignPro', logoUrl: '/logos/designpro.svg' }
    ],
    universities: [
      { name: 'SPA Delhi', logoUrl: '/logos/spa.svg' }
    ],
    status: 'Active'
  },
];

// Categories Data
export const categories = [
  "Architects",
  "Civil",
  "BIM",
  "Computational Design",
  "Interior",
  "MEP",
  "Structural",
  "Landscape",
  "Urban Planning",
  "Construction Management"
];

// Category Management Data
export const categoryManagementData = [
  {
    id: 1,
    name: "BIM",
    status: "Active",
    image: "/category-bim.jpg",
    stats: {
      courses: 2,
      videos: 10,
      blogs: 12,  
      masterclass: 11
    }
  },
  {
    id: 2,
    name: "Architects",
    status: "Active",
    image: "/category-architects.jpg",
    stats: {
      courses: 5,
      videos: 25,
      blogs: 8,
      masterclass: 7
    }
  },
  {
    id: 3,
    name: "Civil",
    status: "Active",
    image: "/category-civil.jpg",
    stats: {
      courses: 3,
      videos: 15,
      blogs: 6,
      masterclass: 9
    }
  },
  {
    id: 4,
    name: "Interior",
    status: "Active",
    image: "/category-interior.jpg",
    stats: {
      courses: 4,
      videos: 18,
      blogs: 10,
      masterclass: 6
    }
  },
  {
    id: 5,
    name: "MEP",
    status: "Inactive",
    image: "/category-mep.jpg",
    stats: {
      courses: 1,
      videos: 5,
      blogs: 3,
      masterclass: 2
    }
  }
];

// Status Options
export const statusOptions = [
  { value: "LIVE", label: "Live", color: "bg-[#FDE7E9] text-[#CB222B]" },
  { value: "Draft", label: "Draft", color: "bg-[#FDF3E4] text-[#F99E21]" },
  { value: "Archived", label: "Archived", color: "bg-[#E9ECF1] text-[#616B7D]" }
];

// User Data
export const userData = {
  currentUser: {
    name: "Rishu S",
    role: "Super Admin",
    avatar: "/avatars/rishu.jpg",
    email: "rishu@buildambit.com",
    lastLogin: "2025-01-15T10:30:00Z"
  }
};

// User Data Type Definition
export interface UserData {
  // Basic Information
  id: number;
  name: string;
  email: string; // required; unique; validated (verify via OTP); indexed
  phone: string; // required; validated E.164; OTP-verified flag separate; indexed
  country_code: string;
  roles: string[]; // e.g., ["student"]
  permissions: Record<string, any>; // JSON; course phase enabled for specific timeline
  
  // Professional / AEC-specific Profile
  profession?: string; // enum/string; e.g., Architect, Structural Engineer, MEP, Interior Designer, BIM Coordinator; indexed
  specializations?: string[]; // tokenized taxonomy (e.g., Revit, MEP Coordination)
  years_experience?: number; // numeric years
  current_company?: string; // optional
  current_role_title?: string; // optional
  previous_companies?: Array<{
    company_name: string;
    role_title: string;
    start_date: string;
    end_date: string | null; // null if currently working there
  }>; // JSON array
  
  // Other Links
  portfolio_url?: string; // optional; validate domain
  github_url?: string; // optional
  linkedin_url?: string; // optional; validated linkedin domain
  
  // Education & Credentials
  highest_qualification?: string; // e.g., B.Arch, M.Tech
  universities?: Array<{
    name: string;
    degree: string;
    year: string;
    logo_url?: string;
  }>; // JSON array
  certifications?: Array<{
    name: string;
    issuer: string;
    issued_date: string;
    expiry_date?: string | null;
    credential_url?: string;
  }>; // JSON array
  
  // Course & Product Interaction
  enrolled_courses?: Array<{
    course_id: number;
    enrollment_date: string;
    status: string; // e.g., "active", "completed", "paused"
    progress_pct: number;
    cohort_id?: number;
  }>; // JSON array
  percentage_of_completed_cours?: Array<{
    course_id: number;
    percent_completed: number;
    certificate_url?: string;
  }>; // JSON array (note: typo preserved as per user specification)
  wishlisted_course_ids?: number[]; // array of course IDs
  saved_resources?: Array<{
    resource_id: number;
    saved_at: string;
    access_level: string;
  }>; // JSON array
  masterclass_registrations?: Array<{
    masterclass_id: number;
    registered_at: string;
    attended_bool: boolean;
  }>; // JSON array
  
  // Profile Content & Media
  bio?: string; // text; long-form for profile pages
  headshot?: string; // Image (headshot) - 200 KB max
  
  // Legacy fields (for backward compatibility)
  role?: string;
  status?: "Active" | "Inactive";
  joinDate?: string;
  lastLogin?: string;
}

// Users List Data
export const usersData: UserData[] = [
  {
    id: 1,
    name: "Rishu S",
    email: "rishu@buildambit.com",
    phone: "+911234567890",
    country_code: "+91",
    roles: ["super_admin", "admin"],
    permissions: {
      courses: { phase1: true, phase2: true, phase3: true },
      masterclasses: { view: true, create: true, edit: true, delete: true }
    },
    profession: "Architect",
    specializations: ["BIM", "Sustainable Design", "Project Management"],
    years_experience: 12,
    current_company: "BuildAmbit",
    current_role_title: "Senior Architect",
    previous_companies: [
      {
        company_name: "Architectural Design Studio",
        role_title: "Junior Architect",
        start_date: "2012-06-01",
        end_date: "2016-03-31"
      },
      {
        company_name: "GreenBuild Consultants",
        role_title: "Architect",
        start_date: "2016-04-01",
        end_date: "2020-12-31"
      }
    ],
    portfolio_url: "https://rishu-architect.portfolio.com",
    github_url: "https://github.com/rishu-architect",
    linkedin_url: "https://linkedin.com/in/rishu-architect",
    highest_qualification: "M.Arch",
    universities: [
      {
        name: "IIT Roorkee",
        degree: "B.Arch",
        year: "2010",
        logo_url: "/logos/iit-roorkee.svg"
      },
      {
        name: "MIT",
        degree: "M.Arch",
        year: "2012",
        logo_url: "/logos/mit.svg"
      }
    ],
    certifications: [
      {
        name: "LEED AP",
        issuer: "USGBC",
        issued_date: "2015-05-15",
        expiry_date: "2025-05-15",
        credential_url: "https://usgbc.org/credentials/rishu"
      }
    ],
    enrolled_courses: [
      {
        course_id: 1,
        enrollment_date: "2024-06-01",
        status: "completed",
        progress_pct: 100,
        cohort_id: 101
      },
      {
        course_id: 2,
        enrollment_date: "2024-08-15",
        status: "active",
        progress_pct: 65,
        cohort_id: 102
      }
    ],
    percentage_of_completed_cours: [
      {
        course_id: 1,
        percent_completed: 100,
        certificate_url: "/certificates/rishu-course1.pdf"
      }
    ],
    wishlisted_course_ids: [5, 8, 12],
    saved_resources: [
      {
        resource_id: 101,
        saved_at: "2024-09-10T10:30:00Z",
        access_level: "full"
      }
    ],
    masterclass_registrations: [
      {
        masterclass_id: 1,
        registered_at: "2024-07-01T09:00:00Z",
        attended_bool: true
      }
    ],
    bio: "Experienced architect with over 12 years in sustainable design and BIM implementation. Passionate about creating innovative architectural solutions that blend traditional practices with modern technology.",
    headshot: "/avatars/rishu.jpg",
    role: "Super Admin",
    status: "Active",
    joinDate: "2024-01-15",
    lastLogin: "2025-01-15"
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    phone: "+919876543210",
    country_code: "+91",
    roles: ["student", "admin"],
    permissions: {
      courses: { phase1: true, phase2: true },
      masterclasses: { view: true, create: false, edit: false, delete: false }
    },
    profession: "Structural Engineer",
    specializations: ["Steel Structures", "Concrete Design", "Seismic Analysis"],
    years_experience: 8,
    current_company: "Structural Solutions Inc.",
    current_role_title: "Senior Structural Engineer",
    previous_companies: [
      {
        company_name: "Design Engineers",
        role_title: "Junior Engineer",
        start_date: "2016-07-01",
        end_date: "2020-05-31"
      }
    ],
    linkedin_url: "https://linkedin.com/in/priya-sharma-se",
    highest_qualification: "M.Tech (Structural Engineering)",
    universities: [
      {
        name: "IIT Delhi",
        degree: "B.Tech (Civil)",
        year: "2014",
        logo_url: "/logos/iit-delhi.svg"
      },
      {
        name: "IIT Delhi",
        degree: "M.Tech (Structural)",
        year: "2016",
        logo_url: "/logos/iit-delhi.svg"
      }
    ],
    certifications: [
      {
        name: "ETABS Certified Professional",
        issuer: "Computers and Structures Inc.",
        issued_date: "2018-03-10",
        expiry_date: null,
        credential_url: "https://csiamerica.com/cert/priya"
      }
    ],
    enrolled_courses: [
      {
        course_id: 3,
        enrollment_date: "2024-07-10",
        status: "active",
        progress_pct: 45,
        cohort_id: 103
      }
    ],
    percentage_of_completed_cours: [],
    wishlisted_course_ids: [2, 7],
    saved_resources: [],
    masterclass_registrations: [
      {
        masterclass_id: 2,
        registered_at: "2024-08-15T11:00:00Z",
        attended_bool: false
      }
    ],
    bio: "Structural engineer specializing in high-rise buildings and seismic-resistant structures. Passionate about sustainable construction practices.",
    headshot: "/avatars/priya.jpg",
    role: "Admin",
    status: "Active",
    joinDate: "2024-02-20",
    lastLogin: "2025-01-14"
  },
  {
    id: 3,
    name: "Arjun Patel",
    email: "arjun.patel@example.com",
    phone: "+918765432109",
    country_code: "+91",
    roles: ["student"],
    permissions: {
      courses: { phase1: true },
      masterclasses: { view: true }
    },
    profession: "MEP Engineer",
    specializations: ["HVAC Design", "Electrical Systems", "Plumbing"],
    years_experience: 5,
    current_company: "MEP Consultants Ltd.",
    current_role_title: "MEP Engineer",
    previous_companies: [],
    github_url: "https://github.com/arjun-mep",
    linkedin_url: "https://linkedin.com/in/arjun-patel-mep",
    highest_qualification: "B.Tech (Mechanical)",
    universities: [
      {
        name: "NIT Surathkal",
        degree: "B.Tech (Mechanical)",
        year: "2019",
        logo_url: "/logos/nit-surathkal.svg"
      }
    ],
    enrolled_courses: [
      {
        course_id: 4,
        enrollment_date: "2024-09-01",
        status: "active",
        progress_pct: 30,
        cohort_id: 104
      }
    ],
    percentage_of_completed_cours: [],
    wishlisted_course_ids: [1, 3, 6],
    saved_resources: [
      {
        resource_id: 102,
        saved_at: "2024-10-05T14:20:00Z",
        access_level: "basic"
      }
    ],
    masterclass_registrations: [],
    bio: "MEP engineer with expertise in HVAC and electrical systems design for commercial buildings.",
    headshot: "/avatars/arjun.jpg",
    role: "User",
    status: "Active",
    joinDate: "2024-03-10",
    lastLogin: "2025-01-13"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    email: "sneha.reddy@example.com",
    phone: "+917654321098",
    country_code: "+91",
    roles: ["student"],
    permissions: {
      courses: { phase1: true },
      masterclasses: { view: true }
    },
    profession: "Interior Designer",
    specializations: ["Residential Design", "Space Planning", "3D Visualization"],
    years_experience: 4,
    current_company: "Interior Design Studio",
    current_role_title: "Interior Designer",
    portfolio_url: "https://sneha-reddy-designs.portfolio.com",
    linkedin_url: "https://linkedin.com/in/sneha-reddy-interior",
    highest_qualification: "B.Des (Interior Design)",
    universities: [
      {
        name: "NID",
        degree: "B.Des (Interior Design)",
        year: "2020",
        logo_url: "/logos/nid.svg"
      }
    ],
    enrolled_courses: [],
    percentage_of_completed_cours: [],
    wishlisted_course_ids: [4, 9],
    saved_resources: [],
    masterclass_registrations: [],
    bio: "Creative interior designer with a passion for transforming spaces. Specialized in residential design and modern aesthetics.",
    headshot: "/avatars/sneha.jpg",
    role: "User",
    status: "Inactive",
    joinDate: "2024-04-05",
    lastLogin: "2024-12-20"
  },
  {
    id: 5,
    name: "Rohan Kapoor",
    email: "rohan.kapoor@example.com",
    phone: "+916543210987",
    country_code: "+91",
    roles: ["student"],
    permissions: {
      courses: { phase1: true },
      masterclasses: { view: true }
    },
    profession: "BIM Coordinator",
    specializations: ["Revit", "BIM Coordination", "Clash Detection", "Navisworks"],
    years_experience: 6,
    current_company: "TechBuild Solutions",
    current_role_title: "BIM Coordinator",
    previous_companies: [
      {
        company_name: "Digital Build",
        role_title: "BIM Modeler",
        start_date: "2018-06-01",
        end_date: "2021-12-31"
      }
    ],
    github_url: "https://github.com/rohan-bim",
    linkedin_url: "https://linkedin.com/in/rohan-kapoor-bim",
    highest_qualification: "B.Tech (Civil)",
    universities: [
      {
        name: "IIT Bombay",
        degree: "B.Tech (Civil)",
        year: "2016",
        logo_url: "/logos/iit-bombay.svg"
      }
    ],
    certifications: [
      {
        name: "Autodesk Revit Certified Professional",
        issuer: "Autodesk",
        issued_date: "2019-08-20",
        expiry_date: "2025-08-20",
        credential_url: "https://autodesk.com/cert/rohan"
      }
    ],
    enrolled_courses: [
      {
        course_id: 5,
        enrollment_date: "2024-05-15",
        status: "completed",
        progress_pct: 100,
        cohort_id: 105
      },
      {
        course_id: 6,
        enrollment_date: "2024-08-20",
        status: "active",
        progress_pct: 75,
        cohort_id: 106
      }
    ],
    percentage_of_completed_cours: [
      {
        course_id: 5,
        percent_completed: 100,
        certificate_url: "/certificates/rohan-course5.pdf"
      }
    ],
    wishlisted_course_ids: [10, 11],
    saved_resources: [
      {
        resource_id: 103,
        saved_at: "2024-09-15T16:45:00Z",
        access_level: "full"
      },
      {
        resource_id: 104,
        saved_at: "2024-10-20T10:15:00Z",
        access_level: "premium"
      }
    ],
    masterclass_registrations: [
      {
        masterclass_id: 1,
        registered_at: "2024-07-01T09:00:00Z",
        attended_bool: true
      },
      {
        masterclass_id: 3,
        registered_at: "2024-09-10T14:30:00Z",
        attended_bool: true
      }
    ],
    bio: "BIM coordinator with extensive experience in large-scale projects. Expert in Revit, Navisworks, and BIM coordination workflows.",
    headshot: "/avatars/rohan.jpg",
    role: "User",
    status: "Active",
    joinDate: "2024-05-12",
    lastLogin: "2025-01-12"
  },
  {
    id: 6,
    name: "Anjali Mehta",
    email: "anjali.mehta@example.com",
    phone: "+915432109876",
    country_code: "+91",
    roles: ["student", "admin"],
    permissions: {
      courses: { phase1: true, phase2: true },
      masterclasses: { view: true, create: true, edit: true }
    },
    profession: "Civil Engineer",
    specializations: ["Highway Design", "Bridge Engineering", "Construction Management"],
    years_experience: 10,
    current_company: "Infrastructure Development Corp",
    current_role_title: "Project Manager",
    previous_companies: [
      {
        company_name: "Road Builders Ltd.",
        role_title: "Site Engineer",
        start_date: "2014-07-01",
        end_date: "2018-03-31"
      },
      {
        company_name: "Bridge Consultants",
        role_title: "Design Engineer",
        start_date: "2018-04-01",
        end_date: "2022-06-30"
      }
    ],
    linkedin_url: "https://linkedin.com/in/anjali-mehta-civil",
    highest_qualification: "M.Tech (Transportation)",
    universities: [
      {
        name: "IIT Kanpur",
        degree: "B.Tech (Civil)",
        year: "2012",
        logo_url: "/logos/iit-kanpur.svg"
      },
      {
        name: "IIT Kanpur",
        degree: "M.Tech (Transportation)",
        year: "2014",
        logo_url: "/logos/iit-kanpur.svg"
      }
    ],
    enrolled_courses: [
      {
        course_id: 7,
        enrollment_date: "2024-06-20",
        status: "completed",
        progress_pct: 100,
        cohort_id: 107
      }
    ],
    percentage_of_completed_cours: [
      {
        course_id: 7,
        percent_completed: 100,
        certificate_url: "/certificates/anjali-course7.pdf"
      }
    ],
    wishlisted_course_ids: [3, 8],
    saved_resources: [],
    masterclass_registrations: [
      {
        masterclass_id: 2,
        registered_at: "2024-08-15T11:00:00Z",
        attended_bool: true
      }
    ],
    bio: "Experienced civil engineer specializing in highway and bridge design. Currently managing large-scale infrastructure projects.",
    headshot: "/avatars/anjali.jpg",
    role: "Admin",
    status: "Active",
    joinDate: "2024-06-18",
    lastLogin: "2025-01-15"
  },
  {
    id: 7,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+914321098765",
    country_code: "+91",
    roles: ["student"],
    permissions: {
      courses: { phase1: true },
      masterclasses: { view: true }
    },
    profession: "Urban Planner",
    specializations: ["Smart Cities", "Urban Design", "Transportation Planning"],
    years_experience: 7,
    current_company: "City Planning Authority",
    current_role_title: "Urban Planner",
    linkedin_url: "https://linkedin.com/in/vikram-singh-urban",
    highest_qualification: "M.Plan (Urban Planning)",
    universities: [
      {
        name: "SPA Delhi",
        degree: "B.Plan",
        year: "2015",
        logo_url: "/logos/spa.svg"
      },
      {
        name: "SPA Delhi",
        degree: "M.Plan (Urban Planning)",
        year: "2017",
        logo_url: "/logos/spa.svg"
      }
    ],
    enrolled_courses: [],
    percentage_of_completed_cours: [],
    wishlisted_course_ids: [5, 7],
    saved_resources: [],
    masterclass_registrations: [],
    bio: "Urban planner with expertise in smart city development and sustainable urban design.",
    headshot: "/avatars/vikram.jpg",
    role: "User",
    status: "Inactive",
    joinDate: "2024-07-22",
    lastLogin: "2024-11-15"
  },
  {
    id: 8,
    name: "Meera Iyer",
    email: "meera.iyer@example.com",
    phone: "+913210987654",
    country_code: "+91",
    roles: ["student"],
    permissions: {
      courses: { phase1: true },
      masterclasses: { view: true }
    },
    profession: "Landscape Architect",
    specializations: ["Sustainable Landscaping", "Ecological Design", "Site Planning"],
    years_experience: 3,
    current_company: "GreenScape Design",
    current_role_title: "Landscape Architect",
    portfolio_url: "https://meera-iyer-landscapes.portfolio.com",
    linkedin_url: "https://linkedin.com/in/meera-iyer-landscape",
    highest_qualification: "B.Arch",
    universities: [
      {
        name: "CEPT University",
        degree: "B.Arch",
        year: "2021",
        logo_url: "/logos/cept.svg"
      }
    ],
    enrolled_courses: [
      {
        course_id: 8,
        enrollment_date: "2024-10-01",
        status: "active",
        progress_pct: 20,
        cohort_id: 108
      }
    ],
    percentage_of_completed_cours: [],
    wishlisted_course_ids: [2, 4, 6],
    saved_resources: [
      {
        resource_id: 105,
        saved_at: "2024-11-10T12:00:00Z",
        access_level: "basic"
      }
    ],
    masterclass_registrations: [
      {
        masterclass_id: 4,
        registered_at: "2024-11-20T10:00:00Z",
        attended_bool: false
      }
    ],
    bio: "Landscape architect passionate about creating sustainable and ecologically sensitive outdoor spaces.",
    headshot: "/avatars/meera.jpg",
    role: "User",
    status: "Active",
    joinDate: "2024-08-30",
    lastLogin: "2025-01-14"
  }
];

// Mock API Functions
export const mockApi = {
  // Dashboard
  getDashboardStats: () => Promise.resolve(dashboardStats),
  getQuickActions: () => Promise.resolve(quickActions),
  getAnalyticsReports: () => Promise.resolve(analyticsReports),
  
  // Masterclass
  getMasterclasses: () => Promise.resolve(masterclassData),
  getMasterclassById: (id: number) => Promise.resolve(masterclassData.find(m => m.id === id)),
  createMasterclass: (data: any) => Promise.resolve({
    id: Date.now(),
    ...data,
    whoShouldAttendPoints: data.whoShouldAttendPoints || [],
    prerequisites: data.prerequisites || [],
    curriculumPoints: data.curriculumPoints || [],
    learningOutcomes: data.learningOutcomes || [],
    resources: data.resources || {
      demoCertificate: { url: "" },
      sessionNotesImage: { url: "" },
      sessionNotesPdf: { url: "" }
    },
    faqs: data.faqs || []
  }),
  updateMasterclass: (id: number, data: any) => Promise.resolve({ id, ...data }),
  deleteMasterclass: (id: number) => Promise.resolve({ success: true }),
  
  // Mentors
  getMentors: () => Promise.resolve(mentorData),
  getMentorById: (id: number) => Promise.resolve(mentorData.find(m => m.id === id)),
  createMentor: (data: any) => Promise.resolve({ id: Date.now(), ...data }),
  updateMentor: (id: number, data: any) => Promise.resolve({ id, ...data }),
  
  // Categories
  getCategories: () => Promise.resolve(categories),
  
  // Status
  getStatusOptions: () => Promise.resolve(statusOptions),
  
  // User
  getCurrentUser: () => Promise.resolve(userData.currentUser),
  getUsers: () => Promise.resolve(usersData),
  getUserById: (id: number) => Promise.resolve(usersData.find(u => u.id === id)),
  updateUser: (id: number, data: any) => Promise.resolve({ id, ...data }),
  deleteUser: (id: number) => Promise.resolve({ success: true })
};

// All data is already exported above, no need for duplicate exports
