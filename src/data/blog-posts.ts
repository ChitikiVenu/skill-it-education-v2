export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  sub: string;
  tag: string;
  readTime: string;
  body: BlogBlock[];
};

export const blogPosts: Record<string, BlogPost> = {
  "ai-automation-explained": {
    "slug": "ai-automation-explained",
    "title": "AI Automation Explained: Beyond the Buzzword",
    "sub": "What it actually means to automate work with AI.",
    "tag": "Generative AI",
    "readTime": "4 min read",
    "body": [
      {
        "type": "h2",
        "text": "It's not just 'add AI to everything'"
      },
      {
        "type": "p",
        "text": "Genuine AI automation identifies a specific, well-defined repetitive task and connects AI capability into the existing workflow around it — not a vague aspiration to 'use AI' broadly."
      },
      {
        "type": "h2",
        "text": "What makes automation reliable"
      },
      {
        "type": "p",
        "text": "Clear input/output boundaries, error handling, and monitoring — the same engineering discipline that makes any automation trustworthy, AI-powered or not."
      },
      {
        "type": "h2",
        "text": "Where it adds the most value"
      },
      {
        "type": "p",
        "text": "Tasks that are repetitive, well-defined, and currently done manually by people are the best candidates — not open-ended, judgment-heavy work."
      }
    ]
  },
  "ai-engineer-roadmap": {
    "slug": "ai-engineer-roadmap",
    "title": "AI Engineer Roadmap: Where to Begin",
    "sub": "A broader path into applied AI work, beyond just GenAI.",
    "tag": "Generative AI",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "Start with API integration, not model training"
      },
      {
        "type": "p",
        "text": "Most AI engineering work involves calling and integrating existing models via APIs — not training models from scratch, which is a different, more specialized skill set."
      },
      {
        "type": "h2",
        "text": "Learn to build automation around AI"
      },
      {
        "type": "p",
        "text": "Connecting AI capability into real workflows — triggered by events, integrated with existing systems — is often more valuable in practice than raw model capability alone."
      },
      {
        "type": "h2",
        "text": "Specialize once you have the base"
      },
      {
        "type": "p",
        "text": "From this foundation, you can move toward GenAI/LLM specialization, MLOps, or general AI product development depending on what genuinely interests you."
      }
    ]
  },
  "career-switch-to-data-science": {
    "slug": "career-switch-to-data-science",
    "title": "Switching Careers Into Data Science: An Honest Guide",
    "sub": "What actually matters when you're starting from a different field.",
    "tag": "Data Science",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Your existing domain knowledge is an asset"
      },
      {
        "type": "p",
        "text": "Someone switching from finance, healthcare, or operations brings context that's genuinely valuable — data science applied with domain understanding is often more useful than generic technical skill alone."
      },
      {
        "type": "h2",
        "text": "Start with fundamentals, not shortcuts"
      },
      {
        "type": "p",
        "text": "Python, SQL, and statistics still need to be built properly — there's no way to skip straight to advanced machine learning without that foundation holding up."
      },
      {
        "type": "h2",
        "text": "Build a portfolio that tells your story"
      },
      {
        "type": "p",
        "text": "A project that combines your previous domain expertise with new data skills — analyzing something from your old field — makes a more compelling case to employers than a generic tutorial project."
      }
    ]
  },
  "ceh-vs-oscp": {
    "slug": "ceh-vs-oscp",
    "title": "CEH vs. OSCP: How They Actually Differ",
    "sub": "One tests knowledge, the other tests hands-on capability.",
    "tag": "Cyber Security",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "CEH's format and focus"
      },
      {
        "type": "p",
        "text": "CEH is a knowledge-based, multiple-choice exam covering ethical hacking tools and methodology broadly."
      },
      {
        "type": "h2",
        "text": "OSCP's format and focus"
      },
      {
        "type": "p",
        "text": "OSCP requires actually compromising systems in a timed, hands-on exam — testing practical capability directly, not just recall."
      },
      {
        "type": "h2",
        "text": "Which is respected more, and why"
      },
      {
        "type": "p",
        "text": "OSCP's hands-on rigor gives it strong credibility specifically for penetration testing roles, though CEH remains valuable as a broader, more accessible entry point earlier in a career."
      }
    ]
  },
  "cyber-security-jobs-hyderabad": {
    "slug": "cyber-security-jobs-hyderabad",
    "title": "Cyber Security Jobs in Hyderabad: What to Know",
    "sub": "An honest look at the local job market for security roles.",
    "tag": "Cyber Security",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "Why Hyderabad specifically"
      },
      {
        "type": "p",
        "text": "Hyderabad's concentration of IT companies and GCCs (global capability centers) in areas like HITEC City and the Financial District has created consistent demand for security talent across SOC, cloud, and application security roles."
      },
      {
        "type": "h2",
        "text": "What employers actually look for"
      },
      {
        "type": "p",
        "text": "Beyond certifications, employers consistently look for practical lab experience and the ability to explain your reasoning during a technical interview — not just memorized definitions."
      },
      {
        "type": "h2",
        "text": "How to position yourself"
      },
      {
        "type": "p",
        "text": "A completed project — a documented incident investigation, a VAPT report — gives you something concrete to discuss in interviews, rather than relying on a certificate alone."
      }
    ]
  },
  "cyber-security-roadmap-2026": {
    "slug": "cyber-security-roadmap-2026",
    "title": "Cyber Security Roadmap 2026: Where to Start",
    "sub": "A practical, current starting point for a security career.",
    "tag": "Cyber Security",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Foundations still come first"
      },
      {
        "type": "p",
        "text": "Regardless of which specialization you eventually pursue, networking, Linux, and core security concepts remain the non-negotiable starting point."
      },
      {
        "type": "h2",
        "text": "Choose a direction once you have the base"
      },
      {
        "type": "p",
        "text": "SOC operations, offensive security, and cloud security have all grown, each with distinct day-to-day work — understanding what each role actually involves helps you choose deliberately rather than by title alone."
      },
      {
        "type": "h2",
        "text": "What's changed recently"
      },
      {
        "type": "p",
        "text": "Cloud security skills have become table stakes rather than a niche specialization, given how much infrastructure now runs on AWS, Azure, or GCP rather than on-premises."
      }
    ]
  },
  "data-analyst-vs-data-scientist": {
    "slug": "data-analyst-vs-data-scientist",
    "title": "Data Analyst vs. Data Scientist: Which Should You Start With?",
    "sub": "The honest difference between the two roles, and how to decide which one fits where you are today.",
    "tag": "Data Science · Careers",
    "readTime": "5 min read",
    "body": [
      {
        "type": "p",
        "text": "These two titles get used almost interchangeably in job postings, which makes choosing a starting point confusing. Here's the practical difference."
      },
      {
        "type": "h2",
        "text": "Data Analyst: answers questions with the data you already have"
      },
      {
        "type": "p",
        "text": "A data analyst's core job is turning existing data into an answer a business team can act on — \"why did signups drop last month,\" \"which region is underperforming.\" The core toolkit is SQL, spreadsheets or Python for analysis, and a dashboarding tool like Power BI or Tableau. The output is almost always a dashboard, a report, or a clear recommendation."
      },
      {
        "type": "h2",
        "text": "Data Scientist: builds something that predicts or automates a decision"
      },
      {
        "type": "p",
        "text": "A data scientist typically goes a layer deeper — building a model that predicts churn, forecasts demand, or automates a classification task. This requires everything a data analyst knows, plus statistics, machine learning, and model evaluation. The output is usually a model, not just a report."
      },
      {
        "type": "h2",
        "text": "The honest overlap"
      },
      {
        "type": "p",
        "text": "In smaller companies, one person often does both jobs. In larger companies, they're distinct roles with distinct interview processes — data scientist interviews lean harder on statistics and ML theory, data analyst interviews lean harder on SQL and business reasoning."
      },
      {
        "type": "h2",
        "text": "Which one should you start with?"
      },
      {
        "type": "p",
        "text": "If you're newer to programming or want to see results faster, start as a data analyst — the SQL-and-dashboards skill set is more immediately hireable and it's the foundation the data scientist role is built on anyway. If you already have a solid Python and statistics base, going straight for machine learning can make sense — but you'll still need the analyst fundamentals to explain your model's results to people who don't read code."
      }
    ]
  },
  "data-engineer-roadmap": {
    "slug": "data-engineer-roadmap",
    "title": "Data Engineer Roadmap: Building the Pipelines",
    "sub": "A distinct path from data analysis, with its own skill set.",
    "tag": "Data Science",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Programming fundamentals matter more here"
      },
      {
        "type": "p",
        "text": "Data engineering leans more heavily on software engineering practice than typical analyst work — code quality, testing, and reliability matter continuously."
      },
      {
        "type": "h2",
        "text": "ETL and pipeline design are core"
      },
      {
        "type": "p",
        "text": "Learning to reliably extract, transform, and load data — handling failures gracefully — is the central skill, more than any single tool."
      },
      {
        "type": "h2",
        "text": "Cloud platforms are now standard"
      },
      {
        "type": "p",
        "text": "Familiarity with cloud-based data services has become close to a baseline expectation, given how much modern data infrastructure runs in the cloud rather than on-premises."
      }
    ]
  },
  "data-science-roadmap-2026": {
    "slug": "data-science-roadmap-2026",
    "title": "Data Science Roadmap 2026: A Practical Starting Point",
    "sub": "Where to actually begin, given how the field has evolved.",
    "tag": "Data Science",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Start with analyst fundamentals, not ML"
      },
      {
        "type": "p",
        "text": "SQL, Python, and statistics remain the non-negotiable foundation — even for those ultimately aiming at machine learning roles."
      },
      {
        "type": "h2",
        "text": "Build real projects, not just tutorials"
      },
      {
        "type": "p",
        "text": "A project using a genuinely messy, real dataset demonstrates far more capability than another cleanly-packaged tutorial dataset everyone has already worked with."
      },
      {
        "type": "h2",
        "text": "What's shifted recently"
      },
      {
        "type": "p",
        "text": "Familiarity with basic AI/LLM tools has become increasingly relevant even in traditional data roles, as more analysis workflows incorporate AI-assisted components."
      }
    ]
  },
  "edr-vs-xdr": {
    "slug": "edr-vs-xdr",
    "title": "EDR vs. XDR: What's the Difference?",
    "sub": "Two related but distinct approaches to detection and response.",
    "tag": "Cyber Security",
    "readTime": "4 min read",
    "body": [
      {
        "type": "h2",
        "text": "What EDR covers"
      },
      {
        "type": "p",
        "text": "Endpoint Detection and Response focuses specifically on individual devices — laptops, servers — monitoring for malicious activity at that level."
      },
      {
        "type": "h2",
        "text": "What XDR adds"
      },
      {
        "type": "p",
        "text": "Extended Detection and Response broadens the scope beyond endpoints to include network, cloud, and email signals, correlating across all of them for a fuller picture."
      },
      {
        "type": "h2",
        "text": "Which matters more for your career"
      },
      {
        "type": "p",
        "text": "Understanding EDR deeply is the more common starting point — most SOC roles interact with EDR tools directly. XDR concepts build naturally on that foundation as you gain experience."
      }
    ]
  },
  "genai-engineer-roadmap": {
    "slug": "genai-engineer-roadmap",
    "title": "GenAI Engineer Roadmap: A Practical Path",
    "sub": "From Python basics to shipping a full RAG application.",
    "tag": "Generative AI",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Programming fundamentals first"
      },
      {
        "type": "p",
        "text": "Python fluency is the entry ticket — nearly all AI tooling, APIs, and frameworks are Python-first."
      },
      {
        "type": "h2",
        "text": "Understand LLMs before building with them"
      },
      {
        "type": "p",
        "text": "Knowing how language models actually generate text — and where they reliably fail — shapes every design decision that follows, from prompting to system architecture."
      },
      {
        "type": "h2",
        "text": "Build toward a real, shipped project"
      },
      {
        "type": "p",
        "text": "A working RAG application or AI agent, built end to end, demonstrates far more than a list of tools you've read about — it's the difference employers actually look for."
      }
    ]
  },
  "how-to-become-penetration-tester": {
    "slug": "how-to-become-penetration-tester",
    "title": "How to Become a Penetration Tester",
    "sub": "A practical path, not just a list of certifications.",
    "tag": "Cyber Security",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Start with the fundamentals, not the exploits"
      },
      {
        "type": "p",
        "text": "Solid networking and Linux knowledge comes first — every exploitation technique depends on understanding normal system behavior deeply enough to recognize what's abnormal or exploitable."
      },
      {
        "type": "h2",
        "text": "Practice in legal, structured environments"
      },
      {
        "type": "p",
        "text": "Lab platforms and CTF-style challenges let you practice real techniques without legal risk — this is where technique actually gets built, not from reading alone."
      },
      {
        "type": "h2",
        "text": "Build toward a portfolio, not just a resume"
      },
      {
        "type": "p",
        "text": "A documented VAPT engagement — scoping, testing, reporting — demonstrates capability in a way a certification alone can't. It's also simply more interesting to talk about in an interview."
      }
    ]
  },
  "llm-engineering-roadmap": {
    "slug": "llm-engineering-roadmap",
    "title": "LLM Engineering Roadmap: From Basics to Production",
    "sub": "The specific path toward building real LLM-powered applications.",
    "tag": "Generative AI",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Foundations: prompting and API basics"
      },
      {
        "type": "p",
        "text": "Before RAG or agents, get comfortable calling LLM APIs directly and understanding parameters like temperature and context window."
      },
      {
        "type": "h2",
        "text": "Core skill: retrieval-augmented generation"
      },
      {
        "type": "p",
        "text": "RAG is the technique that makes LLMs actually useful for your own data — chunking, embedding, and retrieval are core, non-optional skills."
      },
      {
        "type": "h2",
        "text": "Advanced: agents and production concerns"
      },
      {
        "type": "p",
        "text": "Once RAG is solid, agent design and production concerns — latency, cost, evaluation — become the differentiators between a demo and something people actually rely on."
      }
    ]
  },
  "power-bi-vs-tableau": {
    "slug": "power-bi-vs-tableau",
    "title": "Power BI vs. Tableau: Which Should You Learn?",
    "sub": "Both are strong tools — here's how they actually differ in practice.",
    "tag": "Data Science",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "Learning curve differences"
      },
      {
        "type": "p",
        "text": "Power BI is often considered more approachable for beginners, particularly those already familiar with Excel. Tableau has a steeper initial learning curve but offers strong visualization flexibility."
      },
      {
        "type": "h2",
        "text": "Where each is more commonly used"
      },
      {
        "type": "p",
        "text": "Power BI has strong adoption in organizations already using Microsoft's ecosystem. Tableau has strong adoption across a broader range of industries independent of any particular software stack."
      },
      {
        "type": "h2",
        "text": "The practical answer"
      },
      {
        "type": "p",
        "text": "If you're unsure, start with whichever your target employers or industry commonly uses — the underlying BI concepts transfer between tools far more than the specific interface does."
      }
    ]
  },
  "prompt-engineering-guide": {
    "slug": "prompt-engineering-guide",
    "title": "A Practical Guide to Prompt Engineering",
    "sub": "Getting reliable results from LLMs, systematically.",
    "tag": "Generative AI",
    "readTime": "6 min read",
    "body": [
      {
        "type": "h2",
        "text": "Specificity beats cleverness"
      },
      {
        "type": "p",
        "text": "A prompt that clearly states context, format, and constraints outperforms a cleverly worded but vague one almost every time."
      },
      {
        "type": "h2",
        "text": "Show, don't just tell"
      },
      {
        "type": "p",
        "text": "Including a concrete example of the desired output format dramatically improves consistency compared to describing the format in words alone."
      },
      {
        "type": "h2",
        "text": "Test systematically, not by feel"
      },
      {
        "type": "p",
        "text": "Run the same prompt against multiple realistic inputs before trusting it — a prompt that works once on your first try may not hold up across the range of real inputs it'll actually see."
      }
    ]
  },
  "soc-analyst-roadmap": {
    "slug": "soc-analyst-roadmap",
    "title": "SOC Analyst Roadmap: From Zero to Your First Alert",
    "sub": "What a SOC Analyst actually does day to day, and the order in which to learn the skills that matter.",
    "tag": "Cyber Security · Careers",
    "readTime": "7 min read",
    "body": [
      {
        "type": "p",
        "text": "Every SOC job description looks the same: \"monitor security alerts, investigate incidents, escalate as needed.\" What that actually means day to day is rarely explained — so here's the honest version, in the order you'd actually learn it."
      },
      {
        "type": "h2",
        "text": "1. Start with networking, not tools"
      },
      {
        "type": "p",
        "text": "Before you touch a SIEM dashboard, you need to understand what normal network traffic looks like. TCP/IP, DNS, common ports — this is the vocabulary every alert is written in. Skip this step and every tool you learn afterward becomes memorization instead of understanding."
      },
      {
        "type": "h2",
        "text": "2. Learn to read logs before you learn to query them"
      },
      {
        "type": "p",
        "text": "A SIEM is just a very fast way to search logs. If you can't manually read a raw auth log or firewall log and tell a story about what happened, the SIEM just becomes a black box that spits out numbers you don't trust."
      },
      {
        "type": "h2",
        "text": "3. Practice triage, not detection"
      },
      {
        "type": "p",
        "text": "New analysts assume the hard part is spotting the attack. In practice, most of the job is triage — deciding which of the 200 alerts today deserve five minutes of your attention and which are noise. This is a judgment skill, and it's built through repetition on real (or realistic) alert volume, not a single lecture on \"false positives.\""
      },
      {
        "type": "h2",
        "text": "4. Write the incident report before you're asked to"
      },
      {
        "type": "p",
        "text": "The skill that actually gets SOC analysts promoted isn't finding the incident — it's writing it up clearly enough that someone two levels above you can make a decision from your report alone. Practice this early, even on toy investigations."
      },
      {
        "type": "h2",
        "text": "5. Then, and only then, specialize"
      },
      {
        "type": "p",
        "text": "Once the fundamentals are solid, branching into threat hunting, incident response, or offensive security becomes far easier — you already speak the language."
      }
    ]
  },
  "sql-vs-nosql-analysts": {
    "slug": "sql-vs-nosql-analysts",
    "title": "SQL vs. NoSQL: What Analysts Actually Need to Know",
    "sub": "A practical, not academic, comparison.",
    "tag": "Data Science",
    "readTime": "4 min read",
    "body": [
      {
        "type": "h2",
        "text": "Why SQL remains essential"
      },
      {
        "type": "p",
        "text": "Most business and analytical data still lives in relational databases, and SQL remains the standard tool for querying it — this isn't likely to change soon."
      },
      {
        "type": "h2",
        "text": "Where NoSQL fits in"
      },
      {
        "type": "p",
        "text": "NoSQL databases handle less structured, rapidly changing data well — useful for certain applications, but less common as the primary tool in typical analyst work."
      },
      {
        "type": "h2",
        "text": "The practical takeaway"
      },
      {
        "type": "p",
        "text": "For a data analyst career, SQL fluency is non-negotiable. NoSQL familiarity is a useful addition, not a substitute."
      }
    ]
  },
  "statistics-every-analyst-needs": {
    "slug": "statistics-every-analyst-needs",
    "title": "Statistics Every Data Analyst Actually Needs",
    "sub": "Not a full statistics degree — just the practical foundation.",
    "tag": "Data Science",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "Descriptive statistics come first"
      },
      {
        "type": "p",
        "text": "Mean, median, standard deviation — understanding what a dataset actually looks like before drawing any conclusions from it."
      },
      {
        "type": "h2",
        "text": "Understanding correlation vs. causation"
      },
      {
        "type": "p",
        "text": "One of the most common analytical mistakes is treating a correlation as if it proves causation — a distinction that affects real business decisions."
      },
      {
        "type": "h2",
        "text": "Basic hypothesis testing"
      },
      {
        "type": "p",
        "text": "Knowing whether an observed difference is likely real or just random noise is essential for interpreting A/B tests and other common business experiments correctly."
      }
    ]
  },
  "vector-databases-explained": {
    "slug": "vector-databases-explained",
    "title": "Vector Databases Explained Simply",
    "sub": "The infrastructure behind semantic search and RAG.",
    "tag": "Generative AI",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "The problem they solve"
      },
      {
        "type": "p",
        "text": "Traditional databases match exact values. Vector databases match by meaning — finding content that's conceptually similar even without shared keywords."
      },
      {
        "type": "h2",
        "text": "How they actually work"
      },
      {
        "type": "p",
        "text": "Text gets converted into embeddings — vectors of numbers representing meaning — and the database finds vectors that are mathematically close to a query vector."
      },
      {
        "type": "h2",
        "text": "Why they matter for RAG"
      },
      {
        "type": "p",
        "text": "Every RAG system depends on fast, accurate similarity search across potentially millions of document chunks — vector databases are the infrastructure that makes this practical at scale."
      }
    ]
  },
  "what-are-ai-agents": {
    "slug": "what-are-ai-agents",
    "title": "What Are AI Agents? A Clear Explanation",
    "sub": "Beyond chatbots — AI systems that can actually take action.",
    "tag": "Generative AI",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "The key difference from a chatbot"
      },
      {
        "type": "p",
        "text": "A chatbot responds to messages in a conversational loop. An agent can plan multi-step tasks, decide which tools to use, and act — with meaningfully more autonomy."
      },
      {
        "type": "h2",
        "text": "How an agent actually works"
      },
      {
        "type": "p",
        "text": "Given a goal, an agent breaks it into steps, calls tools or APIs as needed, evaluates results, and adjusts — a loop of reasoning and action rather than a single response."
      },
      {
        "type": "h2",
        "text": "Where agents are genuinely useful today"
      },
      {
        "type": "p",
        "text": "Well-scoped, tool-assisted tasks — research, data lookup, structured automation — see the most reliable results. Fully autonomous, open-ended agents remain an active area of development, not a solved problem."
      }
    ]
  },
  "what-is-ab-testing": {
    "slug": "what-is-ab-testing",
    "title": "What Is A/B Testing? A Practical Explanation",
    "sub": "How data-driven decisions actually get validated.",
    "tag": "Data Science",
    "readTime": "4 min read",
    "body": [
      {
        "type": "h2",
        "text": "The basic idea"
      },
      {
        "type": "p",
        "text": "Show version A to one group and version B to another, then compare a specific metric to see which performs better — a controlled way to validate a change before rolling it out broadly."
      },
      {
        "type": "h2",
        "text": "Common mistakes to avoid"
      },
      {
        "type": "p",
        "text": "Ending a test too early before reaching statistical significance, or testing too many variables at once and losing the ability to attribute results to a specific change."
      },
      {
        "type": "h2",
        "text": "Why it matters for a data career"
      },
      {
        "type": "p",
        "text": "A/B testing shows up constantly in product, marketing, and growth-focused data roles — understanding the statistics behind it, not just the concept, is a practical differentiator."
      }
    ]
  },
  "what-is-fine-tuning": {
    "slug": "what-is-fine-tuning",
    "title": "What Is Fine-Tuning, and When Do You Need It?",
    "sub": "A common AI concept, explained without the hype.",
    "tag": "Generative AI",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "What fine-tuning actually does"
      },
      {
        "type": "p",
        "text": "It further trains a pre-trained model on your specific data, adjusting its internal weights to change how it behaves — distinct from prompting, which works within a model's existing, unchanged weights."
      },
      {
        "type": "h2",
        "text": "When it's genuinely worth it"
      },
      {
        "type": "p",
        "text": "When you need consistent behavior — a specific tone, a specialized reasoning pattern — that careful prompting alone can't reliably achieve across many interactions."
      },
      {
        "type": "h2",
        "text": "When it's probably not necessary"
      },
      {
        "type": "p",
        "text": "For most applications, well-designed prompting and RAG solve the problem more simply and cheaply than fine-tuning, which requires more data, compute, and ongoing maintenance."
      }
    ]
  },
  "what-is-mlops": {
    "slug": "what-is-mlops",
    "title": "What Is MLOps?",
    "sub": "The discipline of actually running machine learning in production.",
    "tag": "Data Science",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "The gap MLOps fills"
      },
      {
        "type": "p",
        "text": "Training an accurate model in a notebook is one thing. Reliably deploying, monitoring, and updating it in production — where real users depend on it — is a different, ongoing challenge."
      },
      {
        "type": "h2",
        "text": "What MLOps actually involves"
      },
      {
        "type": "p",
        "text": "Versioning models and data, automating retraining pipelines, monitoring for performance drift, and managing the infrastructure models run on."
      },
      {
        "type": "h2",
        "text": "Why it's increasingly a distinct specialization"
      },
      {
        "type": "p",
        "text": "As more organizations move from experimenting with ML to depending on it operationally, the gap between data science and production engineering has become its own career path."
      }
    ]
  },
  "what-is-rag": {
    "slug": "what-is-rag",
    "title": "What Is RAG, Actually? A Plain-English Breakdown",
    "sub": "Retrieval-augmented generation without the buzzwords — what it solves and when you actually need it.",
    "tag": "Generative AI · Concepts",
    "readTime": "6 min read",
    "body": [
      {
        "type": "p",
        "text": "\"RAG\" gets thrown around a lot in AI conversations, often as if saying it explains anything. Here's what it actually means, without the diagram full of arrows."
      },
      {
        "type": "h2",
        "text": "The problem RAG solves"
      },
      {
        "type": "p",
        "text": "A language model only knows what it was trained on, up to a cutoff date, and it doesn't know anything about your specific documents, product, or company. Ask it a question about your internal policy document and it will either say \"I don't know\" or — worse — confidently make something up."
      },
      {
        "type": "h2",
        "text": "The fix: give it the answer before it answers"
      },
      {
        "type": "p",
        "text": "RAG stands for retrieval-augmented generation. Instead of relying only on what the model memorized during training, you retrieve the relevant piece of your own data first, and hand it to the model along with the question. The model's job shifts from \"recall a fact\" to \"summarize what's right in front of you\" — a much easier and more reliable task."
      },
      {
        "type": "h2",
        "text": "How retrieval actually works"
      },
      {
        "type": "p",
        "text": "Your documents get split into chunks, each chunk is converted into a vector (a list of numbers representing its meaning) using an embedding model, and those vectors get stored in a vector database. When a question comes in, it's converted into a vector too, and the database returns the chunks whose vectors are closest in meaning — not just matching keywords."
      },
      {
        "type": "h2",
        "text": "Where it breaks"
      },
      {
        "type": "p",
        "text": "RAG isn't magic. Bad chunking (splitting a document in the wrong places) produces bad retrieval. Retrieving the wrong chunks produces a confidently wrong answer, just now with a fake source. Most of the actual engineering work in a RAG system is in getting the chunking and retrieval right — not in calling the LLM API, which is the easy part."
      },
      {
        "type": "h2",
        "text": "When you actually need it"
      },
      {
        "type": "p",
        "text": "If your use case is \"answer questions about our own documents, policies, or product,\" you probably need RAG. If it's \"write a poem\" or \"summarize this text I'm pasting in,\" you probably don't — you're already giving the model the context it needs directly."
      }
    ]
  },
  "what-is-siem": {
    "slug": "what-is-siem",
    "title": "What Is SIEM? A Practical Explanation",
    "sub": "Security Information and Event Management, explained without the jargon.",
    "tag": "Cyber Security",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "The problem SIEM solves"
      },
      {
        "type": "p",
        "text": "A mid-sized organization generates logs from dozens of systems — firewalls, servers, applications, cloud services. No analyst can manually check all of it. SIEM aggregates that data into one place and applies rules to surface what actually matters."
      },
      {
        "type": "h2",
        "text": "How it actually works day to day"
      },
      {
        "type": "p",
        "text": "Analysts write and refine queries against the aggregated log data, build detection rules, and investigate the alerts those rules generate. The SIEM doesn't replace judgment — it makes the raw material searchable enough for judgment to be possible."
      },
      {
        "type": "h2",
        "text": "Where it falls short"
      },
      {
        "type": "p",
        "text": "A SIEM is only as good as its configuration. Poorly tuned rules generate alert fatigue — so much noise that real threats get missed in the flood. Tuning a SIEM well is itself a significant skill."
      }
    ]
  },
  "what-is-soar": {
    "slug": "what-is-soar",
    "title": "What Is SOAR? Security Automation Explained",
    "sub": "How SOC teams automate the repetitive parts of security operations.",
    "tag": "Cyber Security",
    "readTime": "4 min read",
    "body": [
      {
        "type": "h2",
        "text": "The problem SOAR addresses"
      },
      {
        "type": "p",
        "text": "Many SOC tasks are repetitive — enriching an alert with threat intel, blocking a known-bad IP. Doing this manually, every time, wastes analyst time that could go toward judgment calls."
      },
      {
        "type": "h2",
        "text": "What SOAR actually automates"
      },
      {
        "type": "p",
        "text": "Playbooks define automated response sequences for common scenarios, freeing analysts to focus on genuinely ambiguous cases that need human judgment."
      },
      {
        "type": "h2",
        "text": "Why it's not a replacement for analysts"
      },
      {
        "type": "p",
        "text": "SOAR automates known, well-defined responses. Novel or ambiguous incidents still need a human — automation handles the routine so people can focus on what actually requires thinking."
      }
    ]
  },
  "what-is-zero-trust": {
    "slug": "what-is-zero-trust",
    "title": "What Is Zero Trust Security?",
    "sub": "Why 'never trust, always verify' became the dominant security model.",
    "tag": "Cyber Security",
    "readTime": "5 min read",
    "body": [
      {
        "type": "h2",
        "text": "The old assumption Zero Trust rejects"
      },
      {
        "type": "p",
        "text": "Traditional security treated the network perimeter like a castle wall — anything inside was trusted. Once attackers got past the wall, they often moved freely."
      },
      {
        "type": "h2",
        "text": "What Zero Trust actually requires"
      },
      {
        "type": "p",
        "text": "Every access request gets verified, regardless of where it originates — inside or outside the network. Identity, device health, and context all factor into each decision, continuously, not just at login."
      },
      {
        "type": "h2",
        "text": "Why it matters more now"
      },
      {
        "type": "p",
        "text": "Remote work, cloud services, and third-party integrations have dissolved the idea of a clean network perimeter. Zero Trust is less a specific product and more a design philosophy adapted to that reality."
      }
    ]
  }
};
