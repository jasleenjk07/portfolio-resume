export const profile = {
  name: "Jasleen Kaur",
  title: "ML & AI Engineer",
  tagline:
    "ML engineer and Android developer — from gesture-controlled interfaces and campus platforms to transliteration pipelines, healthcare analytics, and BI dashboards.",
  email: "kaurjasleen6104@gmail.com",
  phone: "+91-6284580007",
  linkedin: "https://www.linkedin.com/in/jasleenkaur31",
  github: "https://github.com/jasleenjk07",
  location: "Punjab, India",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Python", "C", "Java", "Kotlin", "SQL"],
  },
  {
    title: "ML / AI",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Neural Networks",
      "NLP",
      "Clustering",
      "Model Evaluation",
    ],
  },
  {
    title: "Computer Vision",
    items: ["OpenCV", "MediaPipe", "Hand Tracking", "Gesture Recognition"],
  },
  {
    title: "Data & Visualization",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Plotly",
      "Streamlit",
    ],
  },
  {
    title: "ML & Backend Frameworks",
    items: [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "UMAP",
      "FastAPI",
      "statsmodels",
    ],
  },
  {
    title: "Mobile, Web & Infra",
    items: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Ktor",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Docker",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Jupyter Notebook",
      "VS Code",
      "Google Colab",
    ],
  },
  {
    title: "Soft Skills",
    items: [
      "Analytical Thinking",
      "Leadership",
      "Problem-Solving",
      "Communication",
      "Collaboration",
    ],
  },
];

export const projects = [
  {
    title: "IntenseOS Air Mouse",
    period: "May 2026 – Present",
    description:
      "Control the system pointer with hand gestures using your webcam — tracks your index finger to move the cursor, detects pinch gestures for clicks, and supports click-and-drag.",
    highlights: [
      "MediaPipe hand landmarks with a live preview window and real-time FPS overlay",
      "Index-finger position mapped to screen coordinates with edge padding and smoothing",
      "Quick pinch (thumb + index) triggers left click; pinch-and-hold enables click-and-drag",
      "Modular pipeline: camera capture, hand detection, cursor mapping, gesture detection, and pyautogui mouse control",
    ],
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "pyautogui",
      "NumPy",
      "Pandas",
    ],
    github: "https://github.com/jasleenjk07/intenseos-air-mouse",
    live: null,
  },
  {
    title: "Cravix Platform",
    period: "MVP · Active development",
    description:
      "Campus food pre-ordering platform helping university students skip long canteen queues by ordering ahead and picking up during lecture breaks.",
    highlights: [
      "Monorepo with Kotlin Multiplatform mobile app (Android & iOS) and FastAPI backend via Git submodules",
      "Students browse menus, cart checkout, select pickup time slots, and track order status",
      "Vendors manage menus, view upcoming orders by slot, and mark orders prepared before arrival",
      "Backend stack: PostgreSQL, Redis, Celery workers, and Docker Compose for local development",
    ],
    tech: [
      "Kotlin Multiplatform",
      "Compose Multiplatform",
      "Ktor",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
    ],
    github: "https://github.com/jasleenjk07/Cravix-platform",
    live: null,
  },
  {
    title: "Transliteration Consistency Pipeline",
    period: "Dec 2025 – Jan 2026",
    description:
      "Robust English–Hindi transliteration pipeline that filters noisy alignments, segments by confidence, canonicalizes variants, and scores stability — producing a high-quality canonical map for downstream NLP.",
    highlights: [
      "v2 pipeline on 122K+ IITB parallel pairs → 79.6K filtered (65.2% retention) with heuristic stopword, semantic, and structure checks",
      "Confidence tiers (high ≥0.85, mid, low) and 33,418 canonical entries — median consistency 0.909, 61.6% at ≥0.90",
      "Four-step flow: filter → segment → canonicalize → stability analysis (high/mid/low JSON outputs)",
      "Experimental P2G engine (g2p_en): phoneme-to-grapheme rules with schwa handling, nukta, and gemination post-processing",
    ],
    tech: [
      "Python",
      "g2p_en",
      "Pandas",
      "Jupyter",
      "JSON",
    ],
    github: "https://github.com/jasleenjk07/translit-consistency",
    live: null,
  },
  {
    title: "Patient Segmentation System",
    period: "Nov 2025 – Dec 2025",
    description:
      "Preventive healthcare recommendation system on NHANES (CDC) data — UMAP + KMeans segments patients into nine health profiles; a Q-learning policy recommends personalized lifestyle interventions per cluster.",
    highlights: [
      "NHANES cohort with demographic, examination, lab, diet, medication, and questionnaire features",
      "UMAP (2D) + KMeans (k=9) for named clusters; Q-learning maps each cluster to one of 30+ standardized interventions",
      "Deployed Streamlit dashboard: UMAP visuals, What-If simulator, batch CSV processing, and PDF medical reports",
      "Flask companion app with Chart.js radar/galaxy maps, live simulation API, and ReportLab report generation",
    ],
    tech: [
      "Python",
      "Streamlit",
      "Flask",
      "scikit-learn",
      "UMAP",
      "Pandas",
      "NumPy",
      "Plotly",
      "Chart.js",
      "Joblib",
      "ReportLab",
    ],
    github: "https://github.com/jasleenjk07/patient-segmentation-system",
    live: "https://patient-segmentation-system-vyx8p6xp4gymtfyf2euypv.streamlit.app/",
  },
  {
    title: "BlinkIt Analytics — BIOG",
    period: "Feb 2025 – Apr 2025",
    description:
      "Streamlit-based business intelligence dashboard for BlinkIt operational data — surfacing key metrics, customer and product insights, delivery and feedback analysis, and multi-model product demand forecasting.",
    highlights: [
      "Six dashboard sections: overview, customer insights, product analysis, delivery, feedback, and product predictions",
      "Analyzed 5,000+ orders and ₹11M+ revenue with segment, sentiment, and delivery-status breakdowns",
      "Demand forecasting with Random Forest, XGBoost, and ARIMA — 80/20 chronological split, lag and seasonal features",
      "Auto-selects best model per product by lowest RMSE (median 1.48 units/month across 244 SKUs)",
    ],
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "statsmodels",
      "Plotly",
      "Matplotlib",
      "Seaborn",
    ],
    github: "https://github.com/jasleenjk07/ML_Project",
    live: null,
  },
];

export const achievements = [
  {
    title: "GirlScript Summer of Code (GSSoC) 2026",
    date: "2026",
    description:
      "Selected as an Open Source Contributor for GirlScript Summer of Code (GSSoC) 2026.",
  },
  {
    title: "LeetCode Contest Rating — 1653",
    date: "Present",
    description:
      "Achieved a contest rating of 1653 with 600+ problems solved across LeetCode and other platforms.",
  },
  {
    title: "Dean's List",
    date: "LPU",
    description:
      "Earned a place on the Dean's List while maintaining a CGPA of 8.78/10.",
  },
  {
    title: "SAP Student Coordinator",
    date: "Feb 2025",
    description:
      "Led student engagement, technical initiatives, and development events as an SAP Student Coordinator on campus.",
  },
];

export const education = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "B.Tech — Computer Science and Engineering",
    detail: "CGPA: 8.78",
    period: "Aug 2023 – Present",
  },
  {
    school: "Sri Guru Harkrishan Senior Secondary Public School",
    location: "Amritsar, Punjab",
    degree: "Intermediate",
    detail: "94.6%",
    period: "Apr 2021 – Mar 2023",
  },
  {
    school: "Sri Guru Harkrishan Senior Secondary Public School",
    location: "Amritsar, Punjab",
    degree: "Matriculation",
    detail: "95.8 %",
    period: "Apr 2020 – Mar 2021",
  },
];

export const certificates = [
  { name: "Prompt Design in Vertex AI", issuer: "Credly", date: "Aug 2025" },
  {
    name: "Fundamentals of Network Communications",
    issuer: "Coursera",
    date: "Sept 2024",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "Sept 2024",
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Coursera",
    date: "May 2023",
  },
  {
    name: "Ask Questions to Make Data-Driven Decisions",
    issuer: "Coursera",
    date: "May 2023",
  },
];
