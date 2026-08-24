export type CourseDetail = {
  slug: string;
  track: "cyber" | "ai" | "data";
  title: string;
  sub: string;
  duration: string;
  mode: string;
  level: string;
  modules: { title: string; desc: string }[];
  projectTitle: string;
  projectDesc: string;
  faqs: { q: string; a: string }[];
};

export const courseDetails: Record<string, CourseDetail> = {
  "soc-analyst": {
    "slug": "soc-analyst",
    "track": "cyber",
    "title": "SOC Analyst Training",
    "sub": "Learn to monitor, triage and investigate real security alerts — the exact workflow of a Tier-1 SOC.",
    "duration": "16 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner–Intermediate",
    "modules": [
      {
        "title": "Networking & Systems Foundations",
        "desc": "TCP/IP, DNS, Linux fundamentals — the vocabulary every alert is written in."
      },
      {
        "title": "SIEM & Log Analysis",
        "desc": "Ingesting, querying and correlating logs across multiple sources."
      },
      {
        "title": "Alert Triage & Investigation",
        "desc": "Separating signal from noise and tracing an attack path."
      },
      {
        "title": "Incident Response & Documentation",
        "desc": "Escalation criteria, containment steps, and writing a clear incident report."
      }
    ],
    "projectTitle": "Alert Investigation Dashboard",
    "projectDesc": "Triage simulated SIEM alerts, trace the attack path, and document an incident report.",
    "faqs": [
      {
        "q": "Do I need to know how to code?",
        "a": "No. SOC work relies more on pattern recognition, investigation and documentation than programming."
      },
      {
        "q": "What's the difference between this and the Ethical Hacking course?",
        "a": "SOC Analyst training focuses on defense — monitoring and responding to attacks. Ethical Hacking focuses on offense — finding vulnerabilities before attackers do. Many people take both."
      }
    ]
  },
  "ethical-hacking": {
    "slug": "ethical-hacking",
    "track": "cyber",
    "title": "Ethical Hacking",
    "sub": "Find and responsibly report vulnerabilities before real attackers do — in isolated, legal lab environments.",
    "duration": "14 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Reconnaissance & Scanning",
        "desc": "Mapping attack surfaces the way a real engagement starts."
      },
      {
        "title": "Web Application Exploitation",
        "desc": "Common vulnerability classes — injection, auth flaws, and more — in lab environments."
      },
      {
        "title": "Network & System Exploitation",
        "desc": "Exploiting misconfigurations and known vulnerabilities safely."
      },
      {
        "title": "Responsible Reporting",
        "desc": "Writing findings a client or employer can actually act on."
      }
    ],
    "projectTitle": "Full VAPT Engagement",
    "projectDesc": "Run a complete assessment against an isolated lab target and deliver a professional report.",
    "faqs": [
      {
        "q": "Is this legal to learn?",
        "a": "Yes — all exploitation is practiced against isolated lab environments built specifically for training. We do not condone or teach unauthorized access to real systems."
      },
      {
        "q": "Do I need a CEH certificate first?",
        "a": "No. This course teaches the practical skills the CEH exam covers, and can serve as strong preparation for it, but it isn't a prerequisite."
      }
    ]
  },
  "penetration-testing": {
    "slug": "penetration-testing",
    "track": "cyber",
    "title": "Penetration Testing / VAPT",
    "sub": "Vulnerability assessment and penetration testing across web, network and cloud targets — end to end.",
    "duration": "14 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Scoping & Rules of Engagement",
        "desc": "How real assessments are planned and bounded before testing begins."
      },
      {
        "title": "Vulnerability Assessment",
        "desc": "Systematic scanning and manual verification across web, network and cloud."
      },
      {
        "title": "Exploitation & Post-Exploitation",
        "desc": "Proving impact safely, without causing unnecessary damage."
      },
      {
        "title": "Reporting & Remediation Guidance",
        "desc": "Findings written for both technical and non-technical stakeholders."
      }
    ],
    "projectTitle": "Cloud Security Review",
    "projectDesc": "Audit a sample cloud environment for common misconfigurations and report findings.",
    "faqs": [
      {
        "q": "Is VAPT the same as Ethical Hacking?",
        "a": "They overlap significantly. VAPT is typically more structured and report-driven, following a formal engagement process — this course focuses on that structure."
      }
    ]
  },
  "cloud-security": {
    "slug": "cloud-security",
    "track": "cyber",
    "title": "Cloud Security",
    "sub": "Secure AWS/Azure workloads — identity, network controls and monitoring, hands-on.",
    "duration": "10 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Cloud Security Fundamentals",
        "desc": "Shared responsibility model and the ways cloud security differs from on-prem."
      },
      {
        "title": "Identity & Access Management",
        "desc": "Least-privilege access, roles and policies done right."
      },
      {
        "title": "Network Security Controls",
        "desc": "Security groups, VPCs and segmentation in cloud environments."
      },
      {
        "title": "Monitoring & Incident Response",
        "desc": "Detecting and responding to cloud-native threats."
      }
    ],
    "projectTitle": "Cloud Security Audit",
    "projectDesc": "Review a sample cloud environment for misconfigurations against a security baseline.",
    "faqs": [
      {
        "q": "Do I need AWS or Azure certification first?",
        "a": "No, but we recommend familiarity with the basics of at least one cloud platform before starting."
      }
    ]
  },
  "digital-forensics": {
    "slug": "digital-forensics",
    "track": "cyber",
    "title": "Digital Forensics & Incident Response",
    "sub": "Evidence handling, timeline reconstruction and structured incident response.",
    "duration": "10 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Evidence Handling & Chain of Custody",
        "desc": "Preserving evidence integrity from the first response onward."
      },
      {
        "title": "Disk & Memory Forensics",
        "desc": "Extracting and analyzing artifacts from compromised systems."
      },
      {
        "title": "Timeline Reconstruction",
        "desc": "Piecing together what happened, in what order."
      },
      {
        "title": "Incident Response Process",
        "desc": "Coordinating a response from detection through recovery."
      }
    ],
    "projectTitle": "Simulated Breach Investigation",
    "projectDesc": "Analyze a simulated compromised system and reconstruct the incident timeline.",
    "faqs": [
      {
        "q": "Is this relevant if I want to work in law enforcement?",
        "a": "The core forensic techniques overlap, though this course is focused on corporate/enterprise incident response rather than criminal investigation procedures."
      }
    ]
  },
  "network-security": {
    "slug": "network-security",
    "track": "cyber",
    "title": "Network Security Foundations",
    "sub": "Firewalls, segmentation and the networking fundamentals every security role needs.",
    "duration": "8 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "Networking Fundamentals",
        "desc": "TCP/IP, DNS, routing — the protocols that everything else depends on."
      },
      {
        "title": "Firewalls & Segmentation",
        "desc": "How network boundaries are actually enforced."
      },
      {
        "title": "Common Attack Vectors",
        "desc": "How networks get attacked, so you know what you're defending against."
      },
      {
        "title": "Security Monitoring Basics",
        "desc": "An introduction to the tools that watch network traffic."
      }
    ],
    "projectTitle": "Home Lab Network Build",
    "projectDesc": "Stand up an isolated lab network and harden a base host against common attacks.",
    "faqs": [
      {
        "q": "Should I start here even if I want to be a SOC Analyst?",
        "a": "If you're new to networking, yes — this gives you the foundation the SOC Analyst program builds on."
      }
    ]
  },
  "genai-llm-engineering": {
    "slug": "genai-llm-engineering",
    "track": "ai",
    "title": "GenAI & LLM Engineering",
    "sub": "Prompt engineering, RAG pipelines, vector databases and AI agents — built into a shipped project.",
    "duration": "12 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "AI & LLM Foundations",
        "desc": "How language models actually work, and where they break."
      },
      {
        "title": "Prompt Engineering",
        "desc": "Structured prompting, evaluation and reliable outputs."
      },
      {
        "title": "RAG Pipelines",
        "desc": "Chunking, embeddings and retrieval, grounding an LLM in your own data."
      },
      {
        "title": "AI Agents",
        "desc": "Tool-using agents and multi-step workflows."
      }
    ],
    "projectTitle": "RAG Knowledge Assistant",
    "projectDesc": "Chunk, embed and retrieve real documents, then ground an LLM's answers in your own data.",
    "faqs": [
      {
        "q": "Do I need a machine learning background?",
        "a": "No. This course focuses on building applications with existing LLMs via APIs, not training models from scratch."
      },
      {
        "q": "What's the difference between this and the RAG Systems course?",
        "a": "This is the full program covering prompting, RAG and agents. RAG Systems is a focused, shorter deep-dive on retrieval specifically."
      }
    ]
  },
  "ai-engineering": {
    "slug": "ai-engineering",
    "track": "ai",
    "title": "AI Engineering Foundations",
    "sub": "AI APIs, automation workflows and the fundamentals behind modern AI products.",
    "duration": "10 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "Python for AI",
        "desc": "The programming fundamentals every AI workflow depends on."
      },
      {
        "title": "Working with AI APIs",
        "desc": "Calling and integrating LLM and AI service APIs into applications."
      },
      {
        "title": "AI Automation Basics",
        "desc": "Connecting AI capability into real workflows."
      },
      {
        "title": "Responsible AI Use",
        "desc": "Ethical considerations and practical limitations of AI systems."
      }
    ],
    "projectTitle": "AI Content Assistant",
    "projectDesc": "Build a small tool that uses an LLM API to draft and refine content.",
    "faqs": [
      {
        "q": "Should I take this before GenAI & LLM Engineering?",
        "a": "If you're newer to programming or AI concepts, yes — this builds the foundation the LLM Engineering course goes deeper on."
      }
    ]
  },
  "rag": {
    "slug": "rag",
    "track": "ai",
    "title": "RAG Systems",
    "sub": "Chunking, embeddings and retrieval — grounding an LLM's answers in your own documents.",
    "duration": "8 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Embeddings & Vector Search",
        "desc": "Turning documents into something an LLM can retrieve and reason over."
      },
      {
        "title": "Chunking Strategies",
        "desc": "Splitting documents in ways that actually improve retrieval quality."
      },
      {
        "title": "Retrieval Pipeline Design",
        "desc": "Building the full retrieve-then-generate flow."
      },
      {
        "title": "RAG Evaluation",
        "desc": "Measuring whether your RAG system is actually working, not just running."
      }
    ],
    "projectTitle": "Document Q&A Tool",
    "projectDesc": "Build a working assistant that answers questions from a document set.",
    "faqs": [
      {
        "q": "How is this different from the full GenAI & LLM Engineering program?",
        "a": "This course goes deeper specifically on RAG. The full program covers RAG plus prompting and agents at a broader level."
      }
    ]
  },
  "ai-agents": {
    "slug": "ai-agents",
    "track": "ai",
    "title": "AI Agents",
    "sub": "Tool-using agents, orchestration and multi-step workflows with LLMs.",
    "duration": "8 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Agent Architecture",
        "desc": "How tool-using agents plan, act and recover from failure."
      },
      {
        "title": "Tool Calling & Function Integration",
        "desc": "Giving an LLM the ability to take real actions."
      },
      {
        "title": "Multi-Step Workflows",
        "desc": "Chaining tasks and tools into a working automation."
      },
      {
        "title": "Agent Evaluation & Safety",
        "desc": "Keeping agents reliable and within intended bounds."
      }
    ],
    "projectTitle": "Task Automation Agent",
    "projectDesc": "Build an agent that completes a multi-step task with minimal supervision.",
    "faqs": [
      {
        "q": "Is this the same as building a chatbot?",
        "a": "No — a chatbot responds to messages. An agent can take actions, call tools, and complete tasks across multiple steps on its own."
      }
    ]
  },
  "prompt-engineering": {
    "slug": "prompt-engineering",
    "track": "ai",
    "title": "Prompt Engineering",
    "sub": "Structured prompting, evaluation and reliable outputs from LLMs.",
    "duration": "4 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "Prompt Structure Fundamentals",
        "desc": "How LLMs interpret instructions, and how to write ones they follow well."
      },
      {
        "title": "Prompt Patterns",
        "desc": "Reusable techniques — few-shot examples, chain-of-thought, and more."
      },
      {
        "title": "Evaluating Outputs",
        "desc": "Systematically testing whether a prompt is actually reliable."
      },
      {
        "title": "Prompt Iteration Workflow",
        "desc": "A repeatable process for improving prompts over time."
      }
    ],
    "projectTitle": "Prompt Test Suite",
    "projectDesc": "Design and evaluate prompts against a set of real tasks.",
    "faqs": [
      {
        "q": "Do I need to know how to code?",
        "a": "No — this course is designed for both technical and non-technical learners."
      }
    ]
  },
  "ai-automation": {
    "slug": "ai-automation",
    "track": "ai",
    "title": "AI Automation",
    "sub": "Connecting AI APIs into real workflows and automations.",
    "duration": "6 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner–Intermediate",
    "modules": [
      {
        "title": "AI API Fundamentals",
        "desc": "Connecting to and calling AI services reliably."
      },
      {
        "title": "Workflow Automation Tools",
        "desc": "Chaining AI capability into existing business processes."
      },
      {
        "title": "Automation Design Patterns",
        "desc": "Where AI automation actually adds value, and where it doesn't."
      },
      {
        "title": "Monitoring & Reliability",
        "desc": "Keeping automated AI workflows dependable in production."
      }
    ],
    "projectTitle": "AI News Summarizer",
    "projectDesc": "Build an automated system that fetches content, summarizes it with AI, and sends personalized digests.",
    "faqs": [
      {
        "q": "Is this a coding-heavy course?",
        "a": "It can be done with or without code, depending on the tools you choose — we cover both paths."
      }
    ]
  },
  "data-analyst": {
    "slug": "data-analyst",
    "track": "data",
    "title": "Data Analyst Track",
    "sub": "Python, SQL and Power BI — joining and analyzing real business datasets end to end.",
    "duration": "12 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "Python for Data",
        "desc": "Pandas, NumPy and the day-to-day toolkit for working with data."
      },
      {
        "title": "SQL Fundamentals",
        "desc": "Querying and joining real multi-table datasets."
      },
      {
        "title": "Exploratory Data Analysis",
        "desc": "Finding the real story inside a messy dataset."
      },
      {
        "title": "Dashboards with Power BI/Tableau",
        "desc": "Turning analysis into something a stakeholder will use."
      }
    ],
    "projectTitle": "Sales Performance Dashboard",
    "projectDesc": "Build an interactive dashboard tracking key business metrics from a real dataset.",
    "faqs": [
      {
        "q": "Should I start here or with Machine Learning?",
        "a": "Start here. The analyst fundamentals — SQL, EDA, dashboards — are the base the Machine Learning Track builds on."
      }
    ]
  },
  "machine-learning": {
    "slug": "machine-learning",
    "track": "data",
    "title": "Machine Learning Track",
    "sub": "From a clean dataset to a deployed model, with evaluation and monitoring built in.",
    "duration": "16 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "Statistics for ML",
        "desc": "The statistical foundation every model depends on."
      },
      {
        "title": "Supervised Learning",
        "desc": "Regression and classification — training and evaluating real models."
      },
      {
        "title": "Model Evaluation",
        "desc": "Metrics that matter, and how to avoid fooling yourself with them."
      },
      {
        "title": "Basic Deployment",
        "desc": "Taking a model from a notebook to something usable."
      }
    ],
    "projectTitle": "Customer Churn Model",
    "projectDesc": "Clean a real dataset, train and evaluate a model, then explain the results in a dashboard.",
    "faqs": [
      {
        "q": "Do I need calculus and linear algebra?",
        "a": "A basic working understanding helps, but we build the intuition you need as part of the course rather than requiring it upfront."
      }
    ]
  },
  "data-analytics": {
    "slug": "data-analytics",
    "track": "data",
    "title": "Data Analytics with Power BI & Tableau",
    "sub": "Building dashboards that answer real business questions, not just charts.",
    "duration": "8 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "BI Tool Fundamentals",
        "desc": "Power BI and Tableau interfaces, data connections and modeling."
      },
      {
        "title": "Dashboard Design",
        "desc": "Building visuals that communicate clearly, not just accurately."
      },
      {
        "title": "Data Storytelling",
        "desc": "Presenting findings so a non-technical stakeholder understands the 'so what'."
      },
      {
        "title": "Advanced Visualizations",
        "desc": "Interactive filters, drill-downs and dashboard performance."
      }
    ],
    "projectTitle": "Sales Performance Dashboard",
    "projectDesc": "Build an interactive dashboard tracking key business metrics.",
    "faqs": [
      {
        "q": "Do I need to know SQL first?",
        "a": "It helps but isn't required — this course focuses on the BI tools themselves. Our Data Analyst Track covers SQL if you want it."
      }
    ]
  },
  "data-engineering": {
    "slug": "data-engineering",
    "track": "data",
    "title": "Data Engineering Foundations",
    "sub": "ETL pipelines, data warehousing and the fundamentals of moving data reliably.",
    "duration": "10 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Intermediate",
    "modules": [
      {
        "title": "ETL Fundamentals",
        "desc": "Extracting, transforming and loading data reliably."
      },
      {
        "title": "Data Warehousing Concepts",
        "desc": "How data is structured for analysis at scale."
      },
      {
        "title": "Pipeline Orchestration",
        "desc": "Automating and scheduling data workflows."
      },
      {
        "title": "Data Quality & Monitoring",
        "desc": "Catching pipeline failures before they become someone else's bad dashboard."
      }
    ],
    "projectTitle": "Data Pipeline Prototype",
    "projectDesc": "Automate moving and cleaning data from source to a usable destination.",
    "faqs": [
      {
        "q": "Is this the same as the Data Analyst Track?",
        "a": "No — data analysts work with data that's already accessible; data engineers build the pipelines that get it there in the first place."
      }
    ]
  },
  "statistics": {
    "slug": "statistics",
    "track": "data",
    "title": "Statistics for Data Science",
    "sub": "The statistical foundation every data role actually uses day to day.",
    "duration": "6 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "Descriptive Statistics",
        "desc": "Summarizing data in ways that reveal what's actually going on."
      },
      {
        "title": "Probability Fundamentals",
        "desc": "The building blocks behind every statistical model."
      },
      {
        "title": "Hypothesis Testing",
        "desc": "Determining whether a pattern in data is real or noise."
      },
      {
        "title": "Statistics for Machine Learning",
        "desc": "The specific concepts that carry directly into ML work."
      }
    ],
    "projectTitle": "Statistical Analysis Report",
    "projectDesc": "Apply hypothesis testing and descriptive statistics to a real dataset.",
    "faqs": [
      {
        "q": "Is this required before the Machine Learning Track?",
        "a": "It's strongly recommended if you haven't studied statistics formally — it's the foundation ML evaluation is built on."
      }
    ]
  },
  "sql": {
    "slug": "sql",
    "track": "data",
    "title": "SQL for Data Analysis",
    "sub": "Querying, joining and shaping data across real multi-table datasets.",
    "duration": "4 weeks",
    "mode": "Madhapur, Hyderabad · Live Online",
    "level": "Beginner",
    "modules": [
      {
        "title": "SQL Fundamentals",
        "desc": "SELECT, WHERE, and the basics of querying a database."
      },
      {
        "title": "Joins & Relationships",
        "desc": "Combining data across multiple tables correctly."
      },
      {
        "title": "Aggregation & Grouping",
        "desc": "Summarizing data to answer real business questions."
      },
      {
        "title": "Window Functions & Advanced Queries",
        "desc": "The techniques that separate basic SQL from analyst-level SQL."
      }
    ],
    "projectTitle": "SQL Business Queries",
    "projectDesc": "Answer real business questions by joining across multiple tables.",
    "faqs": [
      {
        "q": "Is this enough to get a Data Analyst job on its own?",
        "a": "SQL is essential but usually paired with a BI tool and Python — our full Data Analyst Track combines all three."
      }
    ]
  }
};
