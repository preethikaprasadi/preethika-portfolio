"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Award, BriefcaseBusiness, Check,
  Code2, ExternalLink, Github, GraduationCap, Linkedin, Mail, MapPin,
  Menu, Monitor, Phone, Sparkles, X, ChevronRight, Download, CalendarDays,
  Users, BookOpen, FileBadge, Layers3
} from "lucide-react";

const navItems = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Research", "#research"], ["Experience", "#experience"], ["Education", "#education"], ["Recognition", "#recognition"]
];

const skillGroups = [
  {title: "Programming Languages",icon: Code2,items: ["Python", "TypeScript", "JavaScript", "SQL", "C"]},
  {title: "AI & Generative AI",icon: Sparkles,items: ["Ollama", "Qwen3", "Sentence Transformers", "Local LLM Integration"]},
  {title: "Machine Learning & Deep Learning",icon: Layers3,items: ["Scikit-learn", "ConvNeXtV2", "PyTorch", "timm","Transfer Learning", "Feature Selection Attention", "Model Evaluation"]},
  {title: "Data Analytics",icon: BriefcaseBusiness,items: ["NumPy", "Data Cleaning", "Data Preprocessing","Exploratory Data Analysis", "Feature Engineering","Data Visualization"]},
  {title: "Frontend Engineering",icon: Monitor,items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"]},
  {title: "Backend & API Development",icon: Layers3,items: ["FastAPI", "Django", "Flask", "NestJS","REST APIs", "SQLAlchemy", "JWT Authentication"]},
  {title: "Databases",icon: BriefcaseBusiness,items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"]},
  {title: "Software Engineering & Cloud",icon: Award,items: ["Git", "GitHub", "Postman", "Testing & Debugging","Vercel", "Render", "Azure Blob Storage", "Figma"]}
];

const projects = [
  {
    number: "01", name: "HireAI", category: "AI & Full-stack", type: "Individual",
    description: "An AI-powered recruitment platform that automates resume analysis and candidate–job matching, helping recruiters identify suitable candidates more efficiently.",
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "SQLAlchemy", "Ollama", "Sentence Transformers"],
    href: "https://hire-ai-recruitment.vercel.app/", action: "Live application",
    featured: true, visual: "hire"
  },
  {
    number: "02", name: "Body Curve Analyzer", category: "AI & Machine Learning", type: "Individual",
    description: "An AI/ML-powered application for body shape classification, anthropometric analysis, personalized wellness guidance and progress tracking.",
    stack: ["Python", "Scikit-learn", "Next.js", "TypeScript", "PostgreSQL", "JWT", "Recharts"],
    href: "https://body-curve-analyzer.vercel.app/", action: "Live application",
    featured: true, visual: "body"
  },
  {
    number: "03", name: "Disaster Management System", category: "Mobile & Social Impact", type: "Group",
    description: "A provincial disaster management concept designed to support real-time alerts, resource management and community engagement for improved preparedness and response.",
    stack: ["React Native", "Firebase", "Expo"],
    href: "https://github.com/RadioCat01/Beacon-IS-Community", action: "View repository",
    featured: false, visual: "disaster"
  },
  {
    number: "04", name: "Guidely – IT Project Guidance Platform", category: "Full-stack", type: "Group",
    description: "A collaborative platform concept created to guide students through IT project planning and development.",
    stack: ["Web Development", "Backend Development"],
    href: "https://github.com/preethikaprasadi/capstone-mini-project-backend", action: "View repository",
    featured: false, visual: "guidely"
  },
  {
    number: "05", name: "Heart Disease Prediction", category: "Machine Learning", type: "Individual",
    description: "A machine learning project exploring clinical and demographic data through preprocessing, model training, evaluation and hyperparameter tuning.",
    stack: ["Python", "Machine Learning", "Data Analysis"],
    href: "https://github.com/preethikaprasadi/heart-disease-prediction", action: "View repository",
    featured: false, visual: "heart"
  },
  {
    number: "06", name: "Job Tracker", category: "Web Development", type: "Individual",
    description: "A web-based job application tracker that helps users organize applications and monitor progress through different application stages.",
    stack: ["Web Development", "JavaScript"],
    href: "https://github.com/preethikaprasadi/Job_Tracker", action: "View repository",
    featured: false, visual: "tracker"
  },
  {
    number: "07", name: "Customer Shopping Behavior Analysis", category: "Data Analytics", type: "Individual",
    description: "An exploratory data analysis project uncovering customer demographics, shopping patterns and revenue insights to support data-informed business decisions.",
    stack: ["Python", "Data Analysis", "Visualization"],
    href: "https://github.com/preethikaprasadi/Customer-Shopping-Behavior-Analysis-and-Revenue-Insights", action: "View repository",
    featured: false, visual: "analytics"
  },
];

const experiences = [
  {
    role: "Software Engineer Intern", company: "SLT-MOBITEL", place: "Head Office, Pettah, Sri Lanka",
    period: "Mar 2025 — Sep 2025", kind: "Internship",
    bullets: [
      "Developed responsive frontend components for the Sales Incentive Automation System (SIAS) using React.js, Vite and Tailwind CSS.",
      "Integrated REST APIs and contributed to backend development using Django and PostgreSQL.",
      "Collaborated with the software development team to implement application features, troubleshoot issues and maintain code using Git."
    ],
    tags: ["React.js", "Vite", "Tailwind CSS", "Django", "PostgreSQL", "Git"]
  },
  {
    role: "Software Engineer Intern", company: "Wave Catalyst", place: "Remote",
    period: "Jan 2026 — Sep 2026", kind: "Internship",
    bullets: [
      "Developed responsive websites with attention to layout consistency and cross-device compatibility.",
      "Deployed web projects and performed functional and responsive testing across different devices.",
      "Designed and developed professional HTML and CSS email signature templates for business use."
    ],
    tags: ["HTML", "CSS", "Responsive Design", "Web Deployment"]
  }
];

const certifications = [
  {
    title: "Microsoft Azure Fundamentals: Describe cloud fundamentals",
    issuer: "Microsoft Learn", year: "2026",
    href: "https://learn.microsoft.com/api/achievements/share/en-us/PreethikaPrasadi-9019/4L62JJ4K?sharingId=C5BF2F1AD5FE1D41"
  },
  {
    title: "Guided Project: Deploy a static website with Azure Blob Storage",
    issuer: "Microsoft Learn", year: "2026",
    href: "https://learn.microsoft.com/api/achievements/share/en-us/PreethikaPrasadi-9019/9ACQKF9U?sharingId=C5BF2F1AD5FE1D41"
  },
  {
    title: "Python for Beginners",
    issuer: "CODL · University of Moratuwa", year: "—",
    href: "https://drive.google.com/file/d/1GgqfQyJqoqWlst1L68_qB53iOaZ5YMhB/view?pli=1"
  }
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}<span className="heading-dot">.</span></h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "AI & ML", "Full-stack", "Web Development", "Data Analytics"];
  const filtered = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "AI & ML") return project.category.includes("AI") || project.category.includes("Machine Learning");
    return project.category.includes(activeFilter);
  });
  const visibleProjects = showAll ? filtered : filtered.slice(0, 4);

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="Preethika Prasadi home">
            <span className="brand-mark">P<span>.</span></span>
            <span>PREETHIKA PRASADI</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="availability">
            <span className="availability-dot" /> SOFTWARE ENGINEERING GRADUATE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, delay: .08 }}
          >
            Software Engineer
            <br />
            <span>AI/ML · Data</span>
            <br />
            Full-Stack Development<span className="heading-dot">.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6, delay: .18 }}
          >
            Building intelligent applications, developing machine learning
            solutions and engineering data-driven software systems.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .25 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href="mailto:preethikaprasadi@gmail.com">Get in touch <ArrowRight size={16} /></a>
          </motion.div>
          <div className="hero-meta">
            <span><MapPin size={15} /> Colombo, Sri Lanka</span>
            <span className="meta-divider" />
            <a href="https://www.linkedin.com/in/preethika-prasadi-663637318/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a>
            <a href="https://github.com/preethikaprasadi" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a>
          </div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .2 }}>
          <div className="portrait-frame">
            <div className="portrait-topline"><span>PROFILE / 001</span><span>2026</span></div>
            <div className="portrait-image"><Image src="/preethika.jpeg" alt="Portrait of Preethika Prasadi" fill priority sizes="(max-width: 800px) 80vw, 420px" /></div>
            <div className="portrait-caption"><span>PREETHIKA PRASADI</span><span>SOFTWARE ENGINEER</span></div>
          </div>
          <div className="orbit-note"><Sparkles size={15} /><span>Curious by nature.<br />Engineer by choice.</span></div>
          <div className="hero-index">01 / 06</div>
          <div className="hero-float-card"><span className="float-card-icon"><Code2 size={16} /></span><span><b>Building with purpose</b><small>Code · Create · Iterate</small></span></div>
        </motion.div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      </section>

      <div className="tech-ticker" aria-label="Technologies and interests">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="ticker-group" key={index} aria-hidden={index === 1}>
              <span>FULL-STACK DEVELOPMENT</span><i /> <span>ARTIFICIAL INTELLIGENCE</span><i />
              <span>MACHINE LEARNING</span><i /> <span>PRODUCT THINKING</span><i />
              <span>SOFTWARE ENGINEERING</span><i /> <span>CONTINUOUS LEARNING</span><i />
            </div>
          ))}
        </div>
      </div>

      <section id="about" className="section-wrap section-block about-section">
        <SectionHeading eyebrow="A LITTLE INTRODUCTION" title="About me" description="A curious builder with a passion for technology and meaningful problem-solving." />
        <div className="about-grid">
          <div className="about-lead">
            <p className="large-copy">I&apos;m a motivated and detail-oriented <strong>Software Engineering graduate</strong> with experience spanning full-stack development, Artificial Intelligence, Machine Learning and Data Analytics.</p>
            <p>My technical interests include building scalable web applications, developing AI-powered solutions, training machine learning models, analysing datasets and designing reliable backend systems.</p>
            <p>I also enjoy research and experimentation, particularly exploring deep learning, computer vision and how intelligent models generalize across different datasets.</p>
            <a className="text-link" href="mailto:preethikaprasadi@gmail.com">Let&apos;s connect <ArrowUpRight size={16} /></a>
          </div>
          <div className="about-facts">
            <div className="fact-card"><span className="fact-number">02</span><div><strong>Industry internships</strong><small>Software engineering experience</small></div></div>
            <div className="fact-card"><span className="fact-number">07</span><div><strong>Selected projects</strong><small>Individual and collaborative work</small></div></div>
            <div className="fact-card"><span className="fact-number">AI</span><div><strong>Areas of interest</strong><small>Applied AI, ML & full-stack systems</small></div></div>
            <div className="fact-quote"><span>MY APPROACH</span><p>Learn continuously. Build intentionally. Improve with every iteration.</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section-wrap section-block skills-section">
        <SectionHeading eyebrow="WHAT I WORK WITH" title="Technical toolkit" description="A practical mix of technologies for building across the stack." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return <motion.article className="skill-card" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .07 }}>
              <div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">0{index + 1}</span></div>
              <h3>{group.title}</h3>
              <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </motion.article>;
          })}
        </div>
      </section>

      <section id="projects" className="section-block projects-section">
        <SectionHeading eyebrow="SELECTED WORK / 2025—2026" title="Projects that solve problems" description="A selection of applications and experiments across AI, full-stack engineering and data." />
        <div className="project-intro-note"><span className="note-pulse" /> SELECT A CATEGORY TO EXPLORE · HOVER OVER A PROJECT TO PREVIEW</div>
        <div className="project-toolbar">
          <div className="filter-list" role="group" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => { setActiveFilter(filter); setShowAll(false); }}>{filter}</button>)}
          </div>
          <span className="project-count">{filtered.length.toString().padStart(2, "0")} PROJECTS</span>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <motion.article className={`project-card project-${project.visual}`} key={project.number} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -8, scale: 1.012 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .35, delay: index * .04 }}>
              <div className="project-art">
                <div className="project-art-top">
                  <span>{project.category.toUpperCase()}</span>
                  <div className="project-art-meta">
                    {project.featured && (
                      <span className="project-featured-label">FEATURED</span>
                    )}
                    <span>{project.number}</span>
                  </div>
                </div>
                <div className="project-art-content">
                  {project.visual === "hire" && <div className="mock-dashboard"><div className="mock-sidebar"><i /><i /><i /><i /></div><div className="mock-main"><div className="mock-heading" /><div className="mock-stat-row"><i /><i /><i /></div><div className="mock-table"><i /><i /><i /><i /></div></div></div>}
                  {project.visual === "body" && <div className="body-visual"><div className="body-ring ring-one" /><div className="body-ring ring-two" /><div className="body-center"><span>BODY</span><b>AI</b><span>INSIGHTS</span></div><i className="body-dot dot-one" /><i className="body-dot dot-two" /></div>}
                  {project.visual === "disaster" && <div className="disaster-visual"><div className="map-lines" /><div className="map-pin pin-a" /><div className="map-pin pin-b" /><div className="map-pin pin-c" /><div className="alert-chip">LIVE ALERT <span /></div></div>}
                  {project.visual === "guidely" && <div className="simple-visual"><BookOpen size={56} /><span>LEARN · PLAN · BUILD</span></div>}
                  {project.visual === "heart" && <div className="simple-visual"><span className="pulse-line">⌁</span><span>HEALTH DATA / ML</span></div>}
                  {project.visual === "tracker" && <div className="simple-visual"><Layers3 size={56} /><span>APPLICATION TRACKER</span></div>}
                  {project.visual === "analytics" && <div className="bars-visual"><i /><i /><i /><i /><i /><i /><i /></div>}
                </div>
              </div>
              
              <div className="project-info">
                <div className="project-type">{project.type} PROJECT</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.number === "01" && (
                  <details className="project-case-study">
                    <summary>
                      Technical overview
                      <ChevronRight size={16} />
                    </summary>

                    <div className="case-study-content">
                      <h4>Engineering contributions</h4>
                      <ul>
                        <li>
                          Developed a full-stack recruitment platform using
                          Next.js, TypeScript and FastAPI.
                        </li>
                        <li>
                          Implemented resume uploading, parsing and structured
                          resume analysis workflows.
                        </li>
                        <li>
                          Integrated local AI using Ollama and Qwen3 for
                          resume analysis.
                        </li>
                        <li>
                          Developed semantic candidate-job matching using
                          Sentence Transformers.
                        </li>
                        <li>
                          Implemented authentication, role-based access and
                          company administration features.
                        </li>
                      </ul>

                      <h4>Technical focus</h4>
                      <p>
                        Full-stack architecture · REST APIs · PostgreSQL ·
                        SQLAlchemy · Local LLM integration · Semantic matching
                      </p>
                    </div>
                  </details>
                )}

                {project.number === "02" && (
                  <details className="project-case-study">
                    <summary>
                      Technical overview
                      <ChevronRight size={16} />
                    </summary>

                    <div className="case-study-content">
                      <h4>Engineering contributions</h4>
                      <ul>
                        <li>
                          Developed an AI/ML-powered web application using
                          Next.js and TypeScript.
                        </li>
                        <li>
                          Implemented body-shape classification and
                          anthropometric analysis workflows.
                        </li>
                        <li>
                          Integrated machine learning functionality using
                          Python and Scikit-learn.
                        </li>
                        <li>
                          Developed personalized wellness guidance and
                          progress-tracking features.
                        </li>
                        <li>
                          Implemented backend data storage and JWT-based
                          authentication.
                        </li>
                      </ul>

                      <h4>Technical focus</h4>
                      <p>
                        Machine Learning · Python · Scikit-learn ·
                        Data Analysis · Next.js · PostgreSQL · JWT
                      </p>
                    </div>
                  </details>
                )}
                <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.action} <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>
          ))}
        </div>
        {filtered.length > 4 && <button className="button button-outline show-more" onClick={() => setShowAll(!showAll)}>{showAll ? "Show fewer projects" : "View all projects"} <ChevronRight size={16} className={showAll ? "rotate-up" : ""} /></button>}
      </section>

      <section id="research" className="section-wrap section-block research-section">

        <SectionHeading
          eyebrow="UNDERGRADUATE THESIS"
          title="Research & experimentation"
          description="Exploring deep learning, computer vision and cross-dataset generalization."
        />

        <motion.article
          className="research-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
        >

          <div className="research-content">

            <span className="research-label">
              <BookOpen size={16} />
              DEEP LEARNING · MEDICAL IMAGE CLASSIFICATION
            </span>

            <h3>
              MULTI CLASS SKIN CANCER EARLY DETECTION USING HYBRID DEEP LEARNING AND EXPLAINABLE AI
            </h3>

            <p>
              My undergraduate research investigates multi-class skin
              lesion classification using deep learning. It explores
              model performance and generalization across different
              dermatological image datasets.
            </p>

            <div className="research-tags">
              {[
                "ConvNeXtV2",
                "Feature Selection Attention",
                "Computer Vision",
                "Deep Learning",
                "ISIC 2019",
                "HAM10000"
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <a
              className="research-pdf-link"
              href="/research/Preethika_Prasadi_Thesis.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <BookOpen size={17} />
              Thesis (PDF)
              <ExternalLink size={15} />
            </a>

          </div>

          <div className="research-side">

            <span>RESEARCH APPROACH</span>

            <div>
              <strong>ISIC 2019 + HAM1000</strong>
              <small>Model training and internal evaluation</small>
            </div>

            <div>
              <strong>HAM10000</strong>
              <small>Held-out external evaluation dataset</small>
            </div>

            <div>
              <strong>8 Classes</strong>
              <small>Multi-class skin lesion classification</small>
            </div>

          </div>

        </motion.article>

      </section>

      <section id="experience" className="section-wrap section-block experience-section">
        <SectionHeading eyebrow="WHERE I'VE CONTRIBUTED" title="Experience" description="Learning through collaboration, delivery and hands-on engineering." />
        <div className="experience-list">
          {experiences.map((experience, index) => <motion.article className="experience-item" key={experience.company} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
            <div className="experience-date"><CalendarDays size={15} />{experience.period}</div>
            <div className="experience-main">
              <div className="experience-title-row"><div><span className="experience-kind">{experience.kind}</span><h3>{experience.role}</h3><h4>{experience.company}</h4></div><span className="experience-place"><MapPin size={14} />{experience.place}</span></div>
              <ul>{experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <div className="project-stack">{experience.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </motion.article>)}
        </div>
      </section>

      <section id="education" className="section-wrap section-block education-section">
        <SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Education" />
        <div className="education-card">
          <div className="education-icon"><GraduationCap size={27} /></div>
          <div className="education-content"><span className="experience-kind">UNDERGRADUATE DEGREE</span><h3>B.Sc. (Hons) in Computing and Information Systems</h3><p>Sabaragamuwa University of Sri Lanka</p><span className="education-note">Computing · Information Systems · Software Engineering</span></div>
        </div>
      </section>

      <section id="recognition" className="section-wrap section-block recognition-section">
        <SectionHeading eyebrow="CONTINUOUS LEARNING & COMMUNITY" title="Recognition & involvement" description="Certifications, learning milestones and contributions beyond the classroom." />
        <div className="recognition-grid">
          <div className="recognition-column">
            <div className="subsection-title"><FileBadge size={18} /><h3>Certifications & learning</h3></div>
            {certifications.map((item) => <a className="credential-row" key={item.title} href={item.href} target="_blank" rel="noreferrer"><span className="credential-icon"><Award size={18} /></span><span className="credential-copy"><strong>{item.title}</strong><small>{item.issuer} · {item.year}</small></span><ExternalLink size={16} /></a>)}
          </div>
          <div className="recognition-column">
            <div className="subsection-title"><Users size={18} /><h3>Leadership & activities</h3></div>
            <div className="activity-row"><span className="activity-year">2024–2025</span><div><strong>IEEE Student Branch</strong><small>Sabaragamuwa University of Sri Lanka</small></div></div>
            <div className="activity-row"><span className="activity-year">2022–2026</span><div><strong>Society of Computer Science (SOCS)</strong><small>Sabaragamuwa University of Sri Lanka</small></div></div>
            <div className="activity-row"><span className="activity-year">2024</span><div><strong>Organizing Committee Member – Decoration Team</strong><small>Aurelia v1.0 · IEEE WIE Student Branch Affinity Group, SUSL</small></div></div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-wrap contact-inner">
          <span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span>
          <h2>Let&apos;s build something<br /><span>meaningful</span> together.</h2>
          <p>I&apos;m open to software engineering opportunities, collaborations and conversations around AI/ML.</p>
          <a className="button button-light" href="mailto:preethikaprasadi@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
          <div className="contact-details">
            <a href="mailto:preethikaprasadi@gmail.com"><Mail size={16} />preethikaprasadi@gmail.com</a>
            <a href="tel:+94741070784"><Phone size={16} />+94 74 107 0784</a>
            <span><MapPin size={16} />Colombo, Sri Lanka</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner"><a className="brand" href="#home"><span className="brand-mark">P<span>.</span></span><span>PREETHIKA PRASADI</span></a><span>Designed & developed with intention · © 2026</span><div className="footer-socials"><a href="https://github.com/preethikaprasadi" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/preethika-prasadi-663637318/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="mailto:preethikaprasadi@gmail.com" aria-label="Email"><Mail size={18} /></a></div></div>
      </footer>
    </main>
  );
}
