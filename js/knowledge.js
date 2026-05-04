/**
 * ============================================================
 * PRATEEK SINGH - KNOWLEDGE BASE
 * ============================================================
 * This file contains all structured data about Prateek Singh
 * used by the AI chatbot for intelligent responses.
 * ============================================================
 */

const PRATEEK_KNOWLEDGE = {
    // ========================================================
    // PERSONAL INFORMATION
    // ========================================================
    personal: {
        name: {
            full: "Prateek Singh",
            first: "Prateek",
            last: "Singh"
        },
        title: "AI/ML Engineer & Data Analyst",
        currentRole: "AI/ML Engineer",
        currentCompany: "Waters Corporation",
        location: {
            current: "Milford, MA, USA",
            hometown: "Lucknow, Uttar Pradesh, India"
        },
        contact: {
            email: "prateek.singh090493@gmail.com",
            linkedin: "https://www.linkedin.com/in/prateeksingh9493/",
            github: "https://github.com/SinghPrateek09"
        },
        birthYear: 1993,
        birthMonth: "April",
        birthPlace: "Lucknow, UP, India",
        languages: [
            { language: "English", proficiency: "Fluent" },
            { language: "Hindi", proficiency: "Native" },
            { language: "Marathi", proficiency: "Can understand (especially when someone is cursing!)" }
        ],
        interests: ["Cricket", "Table Tennis", "Spirituality", "Understanding life's purpose"],
        funFacts: [
            "Not a chai person! ☕❌",
            "Lived and worked across 3 countries and 8+ cities",
            "Active competitor in organized cricket tournaments — MiLC USA, MSCL USA, and LMS South Africa",
            "Can detect when someone is cursing in Marathi 😄"
        ],
        tagline: "Good things happen to those who build them",
        motto: "Accountability and Responsibility over Competition",
    },

    // ========================================================
    // PROFESSIONAL SUMMARY
    // ========================================================
    summary: {
        short: "AI/ML Engineer with 7+ years of experience building production-grade AI systems and data pipelines across USA, South Africa, and India.",
        medium: "AI/ML Engineer and Data Analyst with 7+ years of experience spanning enterprise AI development, data analytics, automation engineering, and system integration across global markets (USA, South Africa, India). Currently building production-grade Generative AI search platforms and enterprise automation systems at Waters Corporation.",
        long: "AI/ML Engineer and Data Analyst with 7+ years of experience spanning enterprise AI development, data analytics, automation engineering, and system integration across global markets (USA, South Africa, India). Currently building production-grade Generative AI search platforms and enterprise automation systems at Waters Corporation. Proven track record delivering measurable impact — including 80-85% reduction in manual SAP operations and architecting RAG-based AI search across 1M+ documents. Deep expertise in Python, AWS cloud-native architecture, LLM orchestration, database engineering, and end-to-end data pipelines. Adept at cross-functional collaboration, client-facing delivery, and translating complex business requirements into scalable technical solutions.",
        highlights: [
            "7+ years of experience across 3 countries",
            "Building production-grade Generative AI platforms",
            "80-85% reduction in manual SAP operations",
            "RAG-based AI search across 1M+ documents",
            "Expert in Python, AWS, LLM orchestration"
        ]
    },

    // ========================================================
    // WORK EXPERIENCE
    // ========================================================
    experience: [
        {
            id: "waters",
            company: "Waters Corporation",
            role: "AI/ML Engineer",
            type: "Full-time",
            location: "Milford, MA, USA",
            startDate: "November 2024",
            endDate: "Present",
            current: true,
            duration: "Present",
            description: "Building production-grade Generative AI platforms and enterprise automation systems.",
            projects: [
                {
                    name: "AI Search & Generative AI Platform",
                    description: "AI-powered search summarization enabling Gemini-like generative responses across 1M+ indexed documents",
                    highlights: [
                        "Built Python backend for AI-powered search summarization using AWS Bedrock, Claude LLMs, and RAG architecture with OpenSearch",
                        "Engineered AWS Lambda serverless LLM orchestration with real-time WebSocket streaming APIs for sub-second user experience",
                        "Implemented content guardrails, RAGAS evaluation framework, and synthetic test data generation for AI quality assurance",
                        "Created automated web crawling pipeline for continuous content ingestion into vector embeddings"
                    ],
                    technologies: ["Python", "AWS Bedrock", "Claude LLMs", "LangChain", "RAG", "OpenSearch", "AWS Lambda", "WebSocket APIs", "RAGAS"]
                },
                {
                    name: "SAP Hybris Automation Platform",
                    description: "End-to-end automation platform reducing manual SAP operations by 80-85%",
                    highlights: [
                        "Architected automation platform reducing manual SAP operations from 48-72 hrs to 12-15 hrs (~80-85% efficiency gain)",
                        "Developed 45+ automated tasks across Finance, Customer Master, and Data Transformation playbooks handling 1M+ B2B records",
                        "Built ImpEx generation engine, FlexibleSearch automation, MongoDB integration with PII masking, and encrypted session management"
                    ],
                    technologies: ["Python", "Streamlit", "SAP Hybris", "MongoDB", "ImpEx", "FlexibleSearch", "Groovy"]
                }
            ],
            achievements: [
                "80-85% reduction in manual SAP operations",
                "AI search across 1M+ indexed documents",
                "45+ automated tasks developed",
                "Sub-second response times with WebSocket streaming"
            ],
            technologies: ["Python", "AWS", "Bedrock", "Claude", "LangChain", "RAG", "OpenSearch", "Lambda", "Streamlit", "MongoDB", "SAP Hybris"]
        },
        {
            id: "massdot",
            company: "MassDOT (Massachusetts Department of Transportation)",
            role: "Data Analyst",
            type: "Contract (via KForce)",
            location: "Massachusetts, USA",
            startDate: "February 2024",
            endDate: "June 2024",
            current: false,
            duration: "4.5 months",
            description: "Built automated data pipelines and compliance dashboards for federal transportation data.",
            highlights: [
                "Built automated data pipelines using SQL and Python to extract and analyze CDLIS/SPEXS transaction data from ATLAS database, reducing manual processing by 50%",
                "Analyzed AAMVA CD31 response times and CDLIS error patterns, delivering prioritized remediation recommendations",
                "Built Tableau dashboards visualizing transaction volumes, error trends, and timeliness compliance against FMCSA standards, improving stakeholder decision-making by 35%",
                "Supported legacy-to-SPEXS migration — validated data integrity, developed reconciliation scripts",
                "Automated federal compliance reporting reducing manual effort by 40%"
            ],
            achievements: [
                "50% reduction in manual data processing",
                "35% improvement in stakeholder decision-making",
                "40% reduction in manual compliance reporting effort"
            ],
            technologies: ["Python", "SQL", "Tableau", "ATLAS Database", "CDLIS", "SPEXS", "Data Pipelines"],
            endReason: "Contract role concluded after the planned engagement"
        },
        {
            id: "lti",
            company: "Larsen & Toubro Infotech (LTI)",
            role: "Integration Consultant → Senior Data Engineer → Data Analyst",
            type: "Full-time",
            location: "India & Johannesburg, South Africa",
            startDate: "September 2016",
            endDate: "July 2021",
            current: false,
            duration: "4 years 10 months",
            description: "Progressive career growth from Integration Consultant to Senior Data Engineer to Data Analyst, working across multiple locations and clients.",
            subRoles: [
                {
                    title: "Integration Data Analyst",
                    location: "Johannesburg, South Africa",
                    client: "Liberty Insurance",
                    duration: "1.5 years",
                    period: "Nov 2019 - Jul 2021",
                    isPointOfContact: true,
                    highlights: [
                        "Served as Point of Contact for Liberty Insurance client",
                        "Built analytical dashboards boosting SLA turnaround time by 15%",
                        "Facilitated Scrum ceremonies with client and cross-functional teams, advancing team efficiency by 85%",
                        "Constructed and revamped 30+ SQL Jobs and Stored Procedures",
                        "Connected SQL databases with RStudio using knitr, DBI, and RSQLite libraries"
                    ]
                },
                {
                    title: "Senior Integration Data Engineer",
                    location: "Johannesburg, South Africa",
                    client: "Liberty Insurance",
                    period: "Part of SA tenure",
                    highlights: [
                        "Developed data mapping and migration scripts for 25+ applications, enhancing client operations by 30%",
                        "Implemented Azure DevOps CI/CD Pipeline, increasing team efficiency by 75%",
                        "Led BizTalk migration (2010 → 2016), increasing system functionality and productivity by 50%"
                    ]
                },
                {
                    title: "Integration Consultant",
                    location: "India (Chennai, Bangalore, Mumbai, Pune)",
                    client: "OKQ8",
                    period: "Sep 2016 - Nov 2019",
                    highlights: [
                        "Estimated migration scope for 850+ BizTalk applications, proposing design optimizations reducing cost by 18%",
                        "Analyzed business requirements and data mapping for 70+ interfaces, generating revenue exceeding $700,000",
                        "Automated Incident Management via ServiceNow, enhancing support turnaround by 90%",
                        "Trained 8 cross-functional team members and documented SOPs, improving support efficiency by 57%"
                    ]
                }
            ],
            achievements: [
                "Point of Contact for international client (Liberty Insurance)",
                "$700K+ revenue generated through interface analysis",
                "90% improvement in incident management turnaround",
                "Led BizTalk migration for 850+ applications",
                "75% team efficiency improvement via CI/CD implementation"
            ],
            technologies: ["SQL", "SQL Server", "Azure DevOps", "BizTalk", "R", "RStudio", "ServiceNow", "CI/CD"],
            locations: [
                { city: "Chennai", period: "Sep 2016 - Nov 2016", purpose: "Training" },
                { city: "Bangalore", period: "Dec 2016 - Jun 2017", purpose: "First Project" },
                { city: "Mumbai", period: "Jun 2017 - Nov 2017", purpose: "Project Transfer" },
                { city: "Pune", period: "Dec 2017 - Nov 2019", purpose: "Office Base" },
                { city: "Johannesburg", period: "Nov 2019 - Jul 2021", purpose: "Onsite Client Location" }
            ]
        }
    ],

    // ========================================================
    // EDUCATION
    // ========================================================
    education: [
        {
            degree: "Master of Science in Analytics",
            shortDegree: "M.S. Analytics",
            field: "Analytics",
            concentration: "Statistical Modeling & Mathematics",
            institution: "Northeastern University",
            location: "Boston, MA, USA",
            year: 2023,
            startYear: 2021,
            gpa: "3.97/4.0",
            highlights: [
                "Concentration in Statistical Modeling & Mathematics",
                "GPA: 3.97/4.0",
                "Graduate Teaching Assistant for Predictive & Business Analytics",
                "Conducted lab sessions in R and Python",
                "Tutored students and supported curriculum development"
            ],
            activities: ["Graduate Teaching Assistant"],
            courses: ["Predictive Analytics", "Business Analytics", "Statistical Modeling", "Machine Learning"]
        },
        {
            degree: "Bachelor of Technology",
            shortDegree: "B.Tech",
            field: "Electronics & Telecommunication Engineering",
            institution: "Bharati Vidyapeeth University College of Engineering",
            location: "Pune, India",
            year: 2016,
            startYear: 2012,
            highlights: [
                "Electronics & Telecommunication Engineering"
            ]
        }
    ],

    // ========================================================
    // TECHNICAL SKILLS
    // ========================================================
    skills: {
        categories: [
            {
                name: "AI/ML & GenAI",
                skills: [
                    "LangChain",
                    "RAG Architecture",
                    "Prompt Engineering",
                    "Claude LLMs (Anthropic)",
                    "Amazon Bedrock",
                    "Amazon Titan Embeddings",
                    "OpenSearch Vector DB",
                    "Vector Embeddings",
                    "RAGAS Evaluation",
                    "Synthetic Data Generation",
                    "Content Guardrails"
                ],
                proficiency: "Expert"
            },
            {
                name: "Cloud & Infrastructure",
                skills: [
                    "AWS Lambda",
                    "AWS S3",
                    "AWS Bedrock",
                    "AWS API Gateway",
                    "AWS CloudWatch",
                    "AWS SageMaker",
                    "AWS EC2",
                    "AWS IAM",
                    "Serverless Architecture",
                    "Boto3 (AWS SDK)",
                    "Azure DevOps",
                    "CI/CD Pipelines"
                ],
                proficiency: "Expert"
            },
            {
                name: "Programming Languages",
                skills: ["Python", "SQL (T-SQL, PL/pgSQL)", "R", "Groovy"],
                proficiency: "Expert",
                primary: "Python"
            },
            {
                name: "Data & Databases",
                skills: [
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                    "SQL Server",
                    "OpenSearch",
                    "Data Modeling",
                    "Data Warehousing",
                    "ETL/ELT Pipelines"
                ],
                proficiency: "Expert"
            },
            {
                name: "Frameworks & Tools",
                skills: [
                    "Streamlit",
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "TensorFlow",
                    "Matplotlib",
                    "BeautifulSoup",
                    "WebSocket APIs",
                    "REST APIs"
                ],
                proficiency: "Advanced"
            },
            {
                name: "SAP Technologies",
                skills: ["SAP Hybris Commerce", "HAC", "ImpEx", "FlexibleSearch"],
                proficiency: "Advanced"
            },
            {
                name: "Visualization",
                skills: ["Tableau", "Power BI"],
                proficiency: "Advanced"
            },
            {
                name: "Methodologies & Tools",
                skills: ["Agile/Scrum", "Git", "GitHub", "JIRA", "ServiceNow"],
                proficiency: "Expert"
            }
        ],
        favorites: ["Python", "Data Analysis", "GUI Development", "Vibe Coding", "AI/ML Engineering"],
        allSkills: [
            "Python", "SQL", "R", "Groovy", "LangChain", "RAG", "Prompt Engineering",
            "Claude", "AWS Bedrock", "AWS Lambda", "OpenSearch", "MongoDB", "PostgreSQL",
            "MySQL", "SQL Server", "Streamlit", "Pandas", "NumPy", "Scikit-learn",
            "TensorFlow", "Tableau", "Power BI", "SAP Hybris", "ImpEx", "FlexibleSearch",
            "Azure DevOps", "CI/CD", "Git", "JIRA", "ServiceNow", "Agile", "Scrum"
        ]
    },

    // ========================================================
    // PROJECTS
    // ========================================================
    projects: [
        {
            name: "AI Search Summarization Platform",
            company: "Waters Corporation",
            type: "Professional",
            description: "Production-ready generative AI search using RAG, LangChain, Claude LLMs, and AWS serverless architecture",
            highlights: [
                "Gemini-like generative responses on Waters website",
                "1M+ indexed documents",
                "Real-time WebSocket streaming",
                "Content guardrails and RAGAS evaluation"
            ],
            technologies: ["Python", "AWS Bedrock", "Claude", "LangChain", "RAG", "OpenSearch", "Lambda", "WebSocket"],
            impact: "Enabling intelligent product discovery across massive document corpus"
        },
        {
            name: "SAP Backoffice Automation Suite",
            company: "Waters Corporation",
            type: "Professional",
            description: "45+ automated tasks with ImpEx generation, MongoDB integration, delivering 80-85% effort reduction",
            highlights: [
                "80-85% reduction in manual operations",
                "45+ automated tasks",
                "Finance and Customer Master playbooks",
                "1M+ B2B records processed"
            ],
            technologies: ["Python", "Streamlit", "SAP Hybris", "MongoDB", "ImpEx", "FlexibleSearch"],
            impact: "Reduced manual effort from 48-72 hours to 12-15 hours"
        },
        {
            name: "KDI Store Segmentation",
            company: "Northeastern University",
            type: "Academic",
            description: "Engineered customer segmentation strategy by revenue and product assortment",
            highlights: [
                "Customer segmentation by revenue and product assortment",
                "Presented Tableau/QlikView dashboards to CEO & CTO"
            ],
            technologies: ["Tableau", "QlikView", "Data Analysis", "Customer Segmentation"],
            impact: "Strategic insights presented to executive leadership"
        },
        {
            name: "Predictive Analytics Models",
            company: "Northeastern University",
            type: "Academic",
            description: "Deployed multiple ML models for forecasting",
            highlights: [
                "Linear Regression",
                "Logistic Regression",
                "KNN",
                "SVM",
                "Decision Tree",
                "Random Forest",
                "Gradient Boost",
                "Neural Networks"
            ],
            technologies: ["Python", "Scikit-learn", "TensorFlow", "Machine Learning"],
            impact: "Comprehensive ML model deployment for forecasting"
        },
        {
            name: "Personal Portfolio Website",
            company: "Personal",
            type: "Side Project",
            description: "Interactive portfolio website with AI chatbot",
            highlights: [
                "Interactive life journey timeline",
                "AI-powered chatbot",
                "Dark theme design",
                "Fully responsive"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "AI Chatbot"],
            impact: "Showcasing professional journey and skills"
        },
        {
            name: "AI Agent Orchestration Engine",
            company: "Personal",
            type: "Side Project (In Progress)",
            description: "Building a harness orchestration engine to become a 10X Engineer with personal agents for different tasks",
            highlights: [
                "Multiple specialized agents (developer, tester, reviewer, architect)",
                "Parallel task execution",
                "10X Engineer productivity goal"
            ],
            technologies: ["Python", "AI Agents", "Orchestration"],
            status: "In Progress",
            impact: "Personal productivity enhancement through AI agents"
        }
    ],

    // ========================================================
    // CERTIFICATIONS & ACHIEVEMENTS
    // ========================================================
    certifications: [
        {
            name: "Learning Microsoft SQL Server 2019",
            issuer: "LinkedIn Learning",
            type: "Technical"
        },
        {
            name: "Querying Microsoft SQL Server 2019",
            issuer: "LinkedIn Learning",
            type: "Technical"
        },
        {
            name: "Data Analysis Industry Training",
            issuer: "Brainnest",
            type: "Technical"
        },
        {
            name: "Agile Project Management",
            issuer: "Various",
            type: "Methodology"
        }
    ],
    achievements: [
        {
            name: "Service Delivery Excellence Award",
            issuer: "LTI (Larsen & Toubro Infotech)",
            description: "Recognized for outstanding client interaction and relationship management",
            type: "Professional Award"
        },
        {
            name: "Graduate Teaching Assistant",
            issuer: "Northeastern University",
            description: "Predictive & Business Analytics — conducted lab sessions in R and Python, tutored students, supported curriculum development",
            type: "Academic"
        },
        {
            name: "Cricket Tournament Competitor",
            description: "Active competitor in organized cricket tournaments — MiLC USA, MSCL USA, and LMS South Africa",
            type: "Sports",
            tournaments: ["MiLC USA", "MSCL USA", "LMS South Africa"]
        }
    ],

    // ========================================================
    // LIFE JOURNEY / TIMELINE
    // ========================================================
    journey: [
        {
            year: 1993,
            age: 0,
            event: "Born",
            location: "Lucknow, UP, India",
            country: "India",
            emoji: "👶",
            description: "The beginning of the journey in the city of Nawabs"
        },
        {
            year: 2012,
            age: 19,
            event: "Moved for B.Tech",
            location: "Pune, Maharashtra, India",
            country: "India",
            emoji: "🎓",
            description: "Started B.Tech in Electronics & Telecommunication at Bharati Vidyapeeth University"
        },
        {
            year: 2016,
            age: 23,
            event: "Graduated B.Tech & Joined LTI",
            location: "Chennai, India",
            country: "India",
            emoji: "🎉",
            description: "Completed B.Tech, joined Larsen & Toubro Infotech. Training in Chennai (Sep-Nov)"
        },
        {
            year: "2016-17",
            age: 23,
            event: "First Project at LTI",
            location: "Bangalore, India",
            country: "India",
            emoji: "🚀",
            description: "First project/deputation in Bangalore (Dec 2016 - Jun 2017)"
        },
        {
            year: 2017,
            age: 24,
            event: "Mumbai & Back to Pune",
            location: "Mumbai → Pune, India",
            country: "India",
            emoji: "🔄",
            description: "Transferred to Mumbai for 6 months (Jun-Nov 2017), then back to Pune (Dec 2017 - Nov 2019)"
        },
        {
            year: 2019,
            age: 26,
            event: "Onsite Opportunity - South Africa",
            location: "Johannesburg, South Africa",
            country: "South Africa",
            emoji: "✈️",
            description: "International opportunity! Served as Point of Contact for Liberty Insurance for 1.5 years (Nov 2019 - Jul 2021)"
        },
        {
            year: 2021,
            age: 28,
            event: "Masters at Northeastern University",
            location: "Boston, MA, USA",
            country: "USA",
            emoji: "📚",
            description: "Admitted to M.S. Analytics program at Northeastern University"
        },
        {
            year: 2023,
            age: 30,
            event: "Graduated M.S. Analytics",
            location: "Boston, MA, USA",
            country: "USA",
            emoji: "🎓",
            description: "Completed Masters with GPA 3.97/4.0. Concentration in Statistical Modeling & Mathematics"
        },
        {
            year: "2023-24",
            age: 30,
            event: "Building & Job Searching",
            location: "Boston Area, MA, USA",
            country: "USA",
            emoji: "🔨",
            description: "Worked with consultancies to stay sharp and gain hands-on experience while searching for full-time opportunities"
        },
        {
            year: 2024,
            month: "February",
            age: 30,
            event: "Data Analyst at MassDOT",
            location: "Massachusetts, USA",
            country: "USA",
            emoji: "📊",
            description: "Joined Massachusetts DOT via KForce as a consultant"
        },
        {
            year: 2024,
            month: "June",
            age: 31,
            event: "5 Months of Faith",
            location: "Massachusetts, USA",
            country: "USA",
            emoji: "🙏",
            description: "Role concluded at MassDOT after 4.5 months of the planned engagement. Five months of focused job searching — landed the offer 3 days before grace period expired. God's plan!"
        },
        {
            year: 2024,
            month: "November",
            age: 31,
            event: "AI/ML Engineer at Waters Corporation",
            location: "Milford, MA, USA",
            country: "USA",
            emoji: "🌊",
            description: "Joined Waters Corporation! Building Generative AI platforms and enterprise automation. The journey continues..."
        }
    ],

    // ========================================================
    // STATISTICS
    // ========================================================
    stats: {
        yearsExperience: 7,
        countriesWorked: 3,
        citiesLived: 8,
        documentsIndexed: "1M+",
        automatedTasks: "45+",
        efficiencyGain: "80-85%",
        gpa: 3.97,
        revenueGenerated: "$700K+",
        applicationsAnalyzed: "70+",
        biztalkAppsMigrated: "850+"
    },

    // ========================================================
    // CHATBOT RESPONSES - COMMON QUESTIONS
    // ========================================================
    commonQuestions: {
        greeting: [
            "Hello! I'm Prateek's AI assistant. I can tell you about his experience, skills, projects, or journey. What would you like to know?",
            "Hi there! 👋 I'm here to help you learn about Prateek Singh. Ask me anything about his work, skills, or background!",
            "Hey! Welcome to Prateek's portfolio. I can answer questions about his professional experience, technical skills, education, or even his life journey. What interests you?"
        ],
        whoIsHe: [
            "Prateek Singh is an AI/ML Engineer and Data Analyst with 7+ years of experience. He's currently at Waters Corporation in Milford, MA, building production-grade Generative AI platforms. He's worked across 3 countries — India, South Africa, and the USA!",
            "Prateek is an AI/ML Engineer currently building cool stuff at Waters Corporation. With 7+ years of experience spanning three continents, he specializes in GenAI, RAG architecture, Python, and AWS. He's also a cricket enthusiast and believes that 'good things happen to those who build them'!"
        ],
        currentRole: [
            "Prateek is currently an AI/ML Engineer at Waters Corporation (since November 2024). He's building two major things: 1) An AI Search platform using RAG and Claude LLMs across 1M+ documents, and 2) A SAP Hybris Automation Platform that reduced manual operations by 80-85%!",
            "Right now, Prateek works as an AI/ML Engineer at Waters Corporation in Milford, MA. He's architecting Generative AI platforms and enterprise automation systems. Pretty exciting stuff with AWS Bedrock, LangChain, and Claude LLMs!"
        ],
        skills: [
            "Prateek's core skills include: Python (his favorite!), AI/ML & GenAI (LangChain, RAG, Claude, Bedrock), AWS cloud services, SQL databases (MongoDB, PostgreSQL, SQL Server), and data visualization (Tableau, Power BI). He also enjoys 'vibe coding' and building GUIs with Streamlit!",
            "Technical skills? Prateek's got plenty! He's expert in Python, AWS (Lambda, Bedrock, S3), LangChain & RAG architecture, various databases, and SAP Hybris. His favorites are Python, data analysis, and AI/ML engineering. He calls it 'vibe coding' 😄"
        ],
        education: [
            "Prateek has a Master's in Analytics from Northeastern University (2023) with an impressive 3.97 GPA, and a B.Tech in Electronics & Telecommunication from Bharati Vidyapeeth University in Pune (2016). At NEU, he was also a Graduate Teaching Assistant!",
            "Education-wise: M.S. Analytics from Northeastern University, Boston (2023, GPA 3.97/4.0) with concentration in Statistical Modeling. Before that, B.Tech in E&TC from BVP Pune (2016). He even served as a Graduate Teaching Assistant at NEU!"
        ],
        contact: [
            "You can reach Prateek at: 📧 prateek.singh090493@gmail.com | LinkedIn: linkedin.com/in/prateeksingh9493 | GitHub: github.com/SinghPrateek09",
            "Want to connect with Prateek? Here's how: Email: prateek.singh090493@gmail.com, or find him on LinkedIn and GitHub!"
        ],
        funFact: [
            "Fun fact: Prateek is NOT a chai person! ☕❌ Also, he landed his current job at Waters just 3 days before his unemployment grace period was about to expire. Talk about God's timing! 🙏",
            "Here's a fun one: Prateek can understand Marathi, especially when someone is cursing at him! 😄 Also, he's competed in cricket tournaments across three countries — MiLC USA, MSCL USA, and LMS South Africa!"
        ],
        journey: [
            "Prateek's journey: Born in Lucknow (1993) → B.Tech in Pune (2012-2016) → LTI across India (Chennai, Bangalore, Mumbai, Pune) → Onsite in Johannesburg, South Africa (2019-2021) → Masters at Northeastern, Boston (2021-2023) → MassDOT → Waters Corporation. 3 countries, 8+ cities!",
            "What a journey! From Lucknow to Pune for college, then LTI took him across India and to South Africa. Then Boston for his Masters at NEU, and now Milford, MA at Waters Corporation. He's lived in 8+ cities across 3 countries!"
        ],
        experience: [
            "Prateek has 7+ years of experience: Currently AI/ML Engineer at Waters Corporation (2024-present), Data Analyst at MassDOT (2024), and nearly 5 years at LTI (2016-2021) where he grew from Integration Consultant to Senior Data Engineer to Data Analyst, including 1.5 years onsite in South Africa!",
            "Work history: Waters Corporation (AI/ML Engineer, current), MassDOT (Data Analyst, 2024), and LTI (2016-2021) where he progressed through multiple roles and even worked onsite in Johannesburg for Liberty Insurance!"
        ],
        projects: [
            "Key projects: 1) AI Search Platform at Waters — RAG-based search across 1M+ docs with Claude LLMs, 2) SAP Hybris Automation — 45+ automated tasks, 80-85% efficiency gain, 3) He's also building an AI Agent Orchestration Engine as a personal project to become a 10X engineer!",
            "Prateek's notable projects include: The AI Search Summarization Platform at Waters (think Gemini-like search for enterprise), SAP Hybris Automation Suite (saved hundreds of hours), and he's currently experimenting with building his own AI agent harness for parallel task execution!"
        ],

        waters: [
            "At Waters Corporation (Nov 2024 - Present), Prateek is building: 1) An AI-powered search platform using AWS Bedrock, Claude LLMs, and RAG architecture across 1M+ documents, and 2) A SAP Hybris Automation Platform that reduced manual operations from 48-72 hours to just 12-15 hours!",
            "Waters Corporation is where Prateek currently works as an AI/ML Engineer. He's architecting GenAI platforms with LangChain, implementing content guardrails, building WebSocket streaming APIs, and automating SAP Hybris operations. The automation alone saved 80-85% of manual effort!"
        ],

        massdot: [
            "At MassDOT (Feb-Jun 2024), Prateek worked as a Data Analyst via KForce. He built automated data pipelines for CDLIS/SPEXS transaction data, created Tableau dashboards for federal compliance, and helped with the legacy-to-SPEXS database migration. In just 4.5 months, he reduced manual data processing by 50% and improved stakeholder decision-making by 35%.",
            "MassDOT was Prateek's first US role after his Masters. He analyzed AAMVA transaction data, built compliance dashboards, and automated federal reporting. The contract was a focused engagement where he delivered measurable impact — 50% reduction in manual processing and 40% reduction in compliance reporting effort!"
        ],

        lti: [
            "At LTI (Sep 2016 - Jul 2021), Prateek grew from Integration Consultant to Senior Data Engineer to Data Analyst. Highlights: Worked across Chennai, Bangalore, Mumbai, Pune, and Johannesburg. Served as Point of Contact for Liberty Insurance in South Africa for 1.5 years. Implemented Azure DevOps CI/CD, led BizTalk migrations, and generated $700K+ revenue through interface analysis!",
            "LTI (Larsen & Toubro Infotech) was where Prateek spent nearly 5 years. He started in Chennai for training, worked in Bangalore, Mumbai, and Pune, then got an international opportunity in Johannesburg, South Africa! He managed client relationships, built dashboards, and led major migration projects."
        ],

        southAfrica: [
            "Prateek lived in Johannesburg, South Africa from Nov 2019 to Jul 2021 — about 1.5 years! He worked onsite for Liberty Insurance as the Point of Contact from LTI. It was his first international experience, and he even played in the LMS South Africa cricket league!",
            "The South Africa chapter: Prateek was sent onsite to Johannesburg for Liberty Insurance (LTI's client). He served as Point of Contact, facilitated Scrum ceremonies, built analytical dashboards, and improved SLA turnaround by 15%. Plus, he played competitive cricket there in the LMS league!"
        ],

        northeastern: [
            "Prateek attended Northeastern University in Boston (2021-2023) for his M.S. in Analytics. He graduated with a stellar 3.97 GPA, concentrated in Statistical Modeling & Mathematics, and served as a Graduate Teaching Assistant for Predictive & Business Analytics courses!",
            "NEU was transformative for Prateek! He pursued M.S. Analytics with a 3.97 GPA, learned advanced statistical modeling, and even taught as a GTA — conducting lab sessions in R and Python. The program prepared him well for his AI/ML career in the US."
        ],

        hobbies: [
            "Beyond work, Prateek enjoys: 🏏 Cricket (plays in MiLC USA and MSCL USA leagues), 🏓 Table Tennis, and 🧘 Spirituality — he's interested in understanding life's deeper purpose and reality. He's competed in cricket across three countries!",
            "Prateek's interests: Cricket is his passion — he's played competitively in India, South Africa (LMS), and USA (MiLC, MSCL). He also plays table tennis and is into spirituality, exploring questions about life's purpose. Oh, and he's definitely NOT a chai person! ☕❌"
        ],

        philosophy: [
            "Prateek's philosophy: 'Good things happen to those who build them.' He believes in accountability and responsibility over pure competition — there's a fine line to balance. He's also spiritual, trying to understand the deeper reality and purpose of life.",
            "Prateek lives by: 'Good things happen to good people' and values accountability over competition. His journey — especially landing a job 3 days before his grace period expired — reinforced his belief in faith and persistence. He's also exploring spirituality and life's bigger questions."
        ],

        location: [
            "Prateek currently lives in Milford, MA, USA. He's originally from Lucknow, India, and has lived in Pune, Chennai, Bangalore, Mumbai (all in India), Johannesburg (South Africa), and Boston before settling in Milford for his role at Waters Corporation.",
            "Currently: Milford, MA, USA. But Prateek has quite the geographic history! Born in Lucknow, studied in Pune, worked across Chennai, Bangalore, Mumbai, Pune, then Johannesburg (South Africa), Boston for Masters, and now Milford. 8+ cities, 3 countries!"
        ],

        languages: [
            "Prateek speaks English and Hindi fluently. He can also understand Marathi — especially useful when someone is talking bad or cursing, as he jokes! 😄",
            "Languages: English (professional), Hindi (native), and Marathi (can understand, especially the colorful vocabulary! 😄). Working across India, South Africa, and USA has made him quite adaptable to different communication styles."
        ],

        certifications: [
            "Prateek's certifications and achievements: Service Delivery Excellence Award from LTI, Graduate Teaching Assistant at NEU, MS SQL Server 2019 certifications (Learning + Querying), Data Analysis Training from Brainnest, and Agile Project Management certification.",
            "Achievements include: Service Delivery Excellence Award at LTI for outstanding client relationships, GTA position at Northeastern University, and certifications in SQL Server 2019, Data Analysis (Brainnest), and Agile Project Management."
        ],

        cricket: [
            "Cricket is Prateek's passion! He's competed in organized tournaments across three countries: MiLC USA, MSCL USA (in America), and LMS South Africa. It's not just a hobby — it demonstrates his cross-cultural teamwork and competitive spirit!",
            "Prateek takes cricket seriously! He's played in leagues across three countries — LMS in South Africa during his Johannesburg stint, and MiLC and MSCL here in the USA. Cricket has been a constant through his journey across continents."
        ],

        aiProjects: [
            "Prateek's AI/GenAI work at Waters includes: Building RAG pipelines with LangChain and OpenSearch, implementing Claude LLMs via AWS Bedrock, creating WebSocket streaming APIs for real-time responses, developing content guardrails to prevent hallucinations, and building RAGAS evaluation frameworks for AI quality assurance.",
            "On the AI front, Prateek has built: 1) Production RAG architecture indexing 1M+ documents, 2) Serverless LLM orchestration with AWS Lambda, 3) Content guardrails for brand-safe AI responses, 4) Synthetic test data generation, 5) Automated web crawling for continuous vector embedding updates. All at Waters Corporation!"
        ],

        automation: [
            "Prateek's automation work at Waters: Built a SAP Hybris Automation Platform with 45+ automated tasks across Finance, Customer Master, and Data Transformation playbooks. It handles 1M+ B2B records and reduced manual effort from 48-72 hours to just 12-15 hours — a 80-85% efficiency gain!",
            "The SAP Hybris Automation Suite is Prateek's major automation achievement. It includes: ImpEx generation engine, FlexibleSearch automation, MongoDB integration with PII masking, encrypted session management, and comprehensive logging. Built with Python and Streamlit!"
        ],

        techStack: [
            "Prateek's favorite tech stack: Python (absolute favorite!), AWS services (Lambda, Bedrock, S3), LangChain for LLM orchestration, MongoDB and PostgreSQL for databases, Streamlit for GUIs, and he loves what he calls 'vibe coding' — building things that feel right!",
            "Tech Prateek loves working with: Python is #1, followed by AWS cloud services, LangChain/RAG for GenAI, SQL databases, and Streamlit for quick GUI development. He's also exploring AI agent orchestration as a personal project to become a '10X Engineer'!"
        ],

        tenXEngineer: [
            "Prateek is working on a personal project to build an AI Agent Orchestration Engine — his goal is to become a '10X Engineer' by having personal AI agents working in parallel for different tasks: developer, tester, reviewer, architect, etc. It's his vision for the future of software development!",
            "The 10X Engineer project: Prateek is building a harness orchestration engine where multiple AI agents work in parallel — one for development, one for testing, one for code review, one for architecture decisions. It's his personal R&D into the future of AI-assisted engineering!"
        ],

        resume: [
            "You can download Prateek's resume directly from this website! Just click the 'Download Resume' button in the hero section or contact section. It's a comprehensive PDF with all his experience, skills, and achievements.",
            "Want Prateek's resume? There's a download button right on this page! It includes his full professional experience, technical skills, education, projects, and certifications — all in a clean, professional format."
        ],

        hire: [
            "Interested in working with Prateek? He's currently employed at Waters Corporation but always open to interesting conversations! Reach out via email (prateek.singh090493@gmail.com) or connect on LinkedIn. He's particularly interested in AI/ML, GenAI, and data engineering roles.",
            "Looking to hire or collaborate? Prateek is currently at Waters Corporation but open to networking! Best way to reach him: Email prateek.singh090493@gmail.com or connect on LinkedIn. He's passionate about AI/ML engineering, GenAI platforms, and building impactful data solutions."
        ],

        thanks: [
            "You're welcome! 😊 Feel free to ask me anything else about Prateek's experience, skills, or journey. I'm here to help!",
            "Happy to help! If you have more questions about Prateek, just ask. Whether it's about his work, skills, or even his cricket adventures — I've got answers!",
            "No problem! Let me know if there's anything else you'd like to know about Prateek. I can tell you about his projects, journey, skills, or even fun facts!"
        ],

        goodbye: [
            "Thanks for chatting! Feel free to come back anytime you have questions about Prateek. Good luck with whatever you're working on! 👋",
            "Goodbye! Hope I was helpful. Don't forget to check out Prateek's resume if you're interested in his full background. Take care! 🙏",
            "See you later! If you want to connect with Prateek directly, his contact info is in the Contact section. Have a great day! ✨"
        ],

        unknown: [
            "Hmm, I'm not sure about that specific detail. I only have information about Prateek's professional background, skills, and journey. Try asking about his experience, projects, skills, or education!",
            "I don't have information on that topic. I'm Prateek's portfolio assistant, so I can help with questions about his work experience, technical skills, education, or life journey. What would you like to know?",
            "That's outside my knowledge base! I'm here to answer questions about Prateek Singh — his career, skills, projects, and journey. Feel free to ask about any of those topics!",
            "I want to be helpful, but I don't have details on that. I can tell you about Prateek's experience at Waters, MassDOT, or LTI, his technical skills, education at NEU, or his journey across three countries. What interests you?"
        ],

        offensive: [
            "I'd prefer to keep our conversation professional and friendly. Is there something about Prateek's work or background I can help you with?",
            "Let's keep things positive! I'm happy to answer questions about Prateek's professional experience, skills, or journey. What would you like to know?",
            "I'm here to provide helpful information about Prateek. How about we talk about his AI/ML work, his journey, or his technical skills instead?"
        ]
    },

    // ========================================================
    // KEYWORD MAPPINGS FOR INTENT DETECTION
    // ========================================================
    keywords: {
        greeting: ['hello', 'hi', 'hey', 'greetings', 'howdy', 'hola', 'namaste', 'sup', 'yo', 'good morning', 'good afternoon', 'good evening'],
        whoIsHe: ['who is', 'who are you', 'tell me about', 'about prateek', 'about him', 'who is prateek', 'introduce', 'introduction', 'who he is', 'about yourself'],
        currentRole: ['current role', 'current job', 'currently working', 'present job', 'what does he do', 'what do you do', 'working now', 'current position', 'waters role', 'job now'],
        skills: ['skills', 'technologies', 'tech stack', 'programming', 'languages', 'tools', 'expertise', 'proficient', 'know', 'capable', 'abilities', 'competencies'],
        education: ['education', 'degree', 'university', 'college', 'school', 'studied', 'masters', 'bachelors', 'northeastern', 'neu', 'bvp', 'bharati', 'gpa', 'academic'],
        contact: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'get in touch', 'hire', 'message'],
        funFact: ['fun fact', 'interesting', 'funny', 'quirky', 'random', 'trivia', 'something fun', 'fun thing', 'chai', 'tea'],
        journey: ['journey', 'life story', 'career path', 'timeline', 'history', 'background', 'where from', 'cities', 'countries', 'moved', 'traveled'],
        experience: ['experience', 'work history', 'career', 'jobs', 'worked', 'employment', 'professional', 'years of experience'],
        projects: ['projects', 'built', 'created', 'developed', 'portfolio', 'work samples', 'achievements', 'accomplishments', 'what have you built'],
        waters: ['waters', 'waters corporation', 'current company', 'milford', 'ai search', 'sap hybris', 'automation platform'],
        massdot: ['massdot', 'mass dot', 'massachusetts dot', 'department of transportation', 'kforce', 'cdlis', 'spexs', 'tableau dashboard'],
        lti: ['lti', 'larsen', 'toubro', 'infotech', 'liberty', 'insurance', 'biztalk', 'integration consultant'],
        southAfrica: ['south africa', 'johannesburg', 'joburg', 'africa', 'liberty insurance', 'onsite', 'international'],
        northeastern: ['northeastern', 'neu', 'boston university', 'masters', 'analytics', 'gta', 'teaching assistant'],
        hobbies: ['hobbies', 'interests', 'free time', 'outside work', 'personal', 'cricket', 'table tennis', 'sports', 'spirituality'],
        philosophy: ['philosophy', 'motto', 'believe', 'values', 'principles', 'mindset', 'approach', 'good things', 'accountability'],
        location: ['location', 'where', 'live', 'based', 'city', 'country', 'from', 'hometown', 'lucknow', 'pune', 'milford'],
        languages: ['languages', 'speak', 'hindi', 'english', 'marathi', 'fluent', 'native'],
        certifications: ['certifications', 'certificates', 'awards', 'achievements', 'recognition', 'certified'],
        cricket: ['cricket', 'milc', 'mscl', 'lms', 'sports', 'tournament', 'league', 'bat', 'bowl'],
        aiProjects: ['ai project', 'genai', 'generative ai', 'rag', 'llm', 'bedrock', 'claude', 'langchain', 'vector', 'embeddings', 'chatbot'],
        automation: ['automation', 'automate', 'sap', 'hybris', 'impex', 'flexiblesearch', 'streamlit', 'playbook'],
        techStack: ['favorite', 'prefer', 'love', 'enjoy', 'best', 'favorite tech', 'favorite tool', 'python', 'vibe coding'],
        tenXEngineer: ['10x', 'ten x', 'agent', 'orchestration', 'harness', 'parallel', 'personal project', 'side project'],
        resume: ['resume', 'cv', 'download', 'pdf', 'document'],
        hire: ['hire', 'hiring', 'job opportunity', 'recruit', 'open to', 'available', 'looking for'],
        thanks: ['thanks', 'thank you', 'appreciate', 'helpful', 'great', 'awesome', 'perfect', 'thx', 'ty'],
        goodbye: ['bye', 'goodbye', 'see you', 'later', 'take care', 'cya', 'farewell', 'exit', 'quit', 'close']
    },
};

// ========================================================
// EXPORT FOR USE IN CHATBOT.JS
// ========================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PRATEEK_KNOWLEDGE;
}
