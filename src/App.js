import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Navbar Section */}
      <header className="navbar">
        <nav>
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>Vishal Orsu</h1>
        <p>Data Engineer</p>
        <a 
          href={`${process.env.PUBLIC_URL}/Vishal Orsu Resume.pdf`} 
          className="cta-button" 
          download
        >
          Download Resume
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <img 
            src={`${process.env.PUBLIC_URL}/Photo.png`} 
            alt="Vishal Orsu" 
            className="profile-photo" 
          />
          <p>
            Hi, I’m Vishal Orsu — a results-driven data analyst passionate about leveraging data to uncover insights that propel business growth. With experience in data collection, analysis, and predictive modeling, I specialize in SQL, Python, R, Power BI, and Tableau to create impactful, data-driven solutions.
            <br /><br />
            My background spans both technical and analytical fields, giving me a unique perspective on problem-solving and business analysis. Currently, as I work toward building a robust portfolio, I’m focused on honing my skills in machine learning, data visualization, and business intelligence to deliver actionable insights that drive decision-making.
            <br /><br />
            In this portfolio, you’ll find projects that demonstrate my expertise in the full data analysis lifecycle, from data wrangling and model development to creating dashboards and presenting key findings. Each project reflects my commitment to providing measurable results, particularly in helping organizations achieve their strategic goals.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-box">
            <h3>GMU Center for Air Transportation Systems Research (CATSR)</h3>
            <p><strong>Data Analyst</strong> | August 2024 – December 2024</p>
            <ul>
              <li>Collaborated with stakeholders to gather requirements and translate them into actionable tasks.</li>
              <li>Developed a public-facing dashboard integrating financial and operational data.</li>
              <li>Built predictive models (ARIMA, LSTM) to analyze trends and forecast airline stock performance, achieving 85% accuracy.</li>
              <li>Documented business requirements and processes for model deployment and presentations.</li>
              <li>Leveraged Azure DevOps for task tracking and backlog grooming.</li>
            </ul>
          </div>

          <div className="experience-box">
            <h3>AVV Developers</h3>
            <p><strong>Business Data Analyst</strong> | May 2021 – December 2022</p>
            <ul>
              <li>Gathered and documented business requirements for construction projects.</li>
              <li>Developed Power BI and Tableau dashboards for actionable project insights.</li>
              <li>Optimized SQL queries, improving data retrieval times by 30%.</li>
              <li>Facilitated stakeholder discussions to refine requirements and resolve discrepancies.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>
        <div className="education-container">
          {/* Master's Degree */}
          <div className="education-entry">
            <div className="education-image">
              <img
                src="https://www.gmu.edu/sites/g/files/yyqcgq291/files/styles/large/public/2024-04/yt_profile_800x800-2x.jpg?itok=ozVskLRc"
                alt="George Mason University"
              />
            </div>
            <div className="education-details">
              <h3>George Mason University</h3>
              <p><strong>Degree:</strong> Master of Science in Data Analytics Engineering</p>
              <p><strong>Duration:</strong> 2023 - 2025</p>
              <p><strong>Description:</strong> Specialized in data analytics, big data, and machine learning applications, with hands-on experience in data visualization and dashboard development.</p>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="education-entry">
            <div className="education-image">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/2/29/Osmania_University_Logo.png"
                alt="Osmania University"
              />
            </div>
            <div className="education-details">
              <h3>Osmania University</h3>
              <p><strong>Degree:</strong> Bachelor of Engineering in Civil Engineering</p>
              <p><strong>Duration:</strong> August 2018 – June 2022</p>
              <p><strong>Relevant Courses:</strong> Geographic Information Systems, Geography, Geoinformatics</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <div>
          <h3>Credit Card Fraud Detection Enhancement</h3>
          <ul>
            <li>Integrated geospatial analysis, reducing false positives by 25%.</li>
            <li>Utilized Azure Databricks and PySpark for faster model training.</li>
            <li>Documented system requirements and test cases for stakeholder review.</li>
          </ul>
        </div>
        <div>
          <h3>SpaceX Falcon 9 First Stage Landing Prediction</h3>
          <ul>
            <li>Collaborated with a cross-functional Agile team to predict landing outcomes.</li>
            <li>Documented acceptance criteria, mockups, and system requirements.</li>
            <li>Performed validation analyses to ensure alignment with project goals.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-box">React JS</div>
          <div className="skill-box">Python</div>
          <div className="skill-box">R</div>
          <div className="skill-box">SQL</div>
          <div className="skill-box">Java</div>
          <div className="skill-box">PostgreSQL</div>
          <div className="skill-box">RDBMS</div>
          <div className="skill-box">Redshift</div>
          <div className="skill-box">MySQL</div>
          <div className="skill-box">Power BI</div>
          <div className="skill-box">Tableau</div>
          <div className="skill-box">Plotly</div>
          <div className="skill-box">Matplotlib</div>
          <div className="skill-box">TensorFlow</div>
          <div className="skill-box">Keras</div>
          <div className="skill-box">scikit-learn</div>
          <div className="skill-box">Pandas</div>
          <div className="skill-box">PySpark</div>
          <div className="skill-box">Databricks</div>
          <div className="skill-box">AWS S3</div>
          <div className="skill-box">Snowflake</div>
          <div className="skill-box">Azure DevOps</div>
          <div className="skill-box">Jira</div>
          <div className="skill-box">SharePoint</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact</h2>
        <form action="mailto:vishalorsu3@gmail.com" method="POST" enctype="multipart/form-data">
          <div className="form-group">
            <label htmlFor="name">Your Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email-phone">Email/Phone Number*</label>
            <input
              type="text"
              id="email-phone"
              name="email-phone"
              required
              placeholder="Enter your email or phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="cta-button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 Vishal Orsu</p>
      </footer>
    </div>
  );
};

export default App;
