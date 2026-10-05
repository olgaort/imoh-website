import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="IMOH home">
            <span className="brand-mark">
              <img src="/images/imoh-logo.png" alt="" />
            </span>
            <span className="brand-name">International Medical<br />Observers of Houston</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav
            className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#programs" onClick={closeMenu}>Programs</a>
            <a href="#scholarship" onClick={closeMenu}>Scholarship</a>
            <a href="#specialties" onClick={closeMenu}>Specialties</a>
            <a href="#admissions" onClick={closeMenu}>Admissions</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">International Medical Observers of Houston</p>
              <h1 id="hero-title">International Medical Education in Houston</h1>
              <p className="hero-description">
                Advance your medical training through clinical experience, academic development,
                research, and international medical collaboration.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#programs">Explore Our Programs</a>
                <a className="button button-secondary" href="#about">Learn About IMOH</a>
              </div>
            </div>
            <div className="hero-visual">
              <img
                className="hero-image"
                src="/images/hero-houston.jpg"
                alt="Houston medical environment"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="hero-bottom-rule" />
        </section>

        <section className="editorial-about-section" id="about" aria-labelledby="about-title">
          <div className="editorial-about-inner">
            <div className="editorial-about-copy">
              <p className="section-kicker"><span>01</span> About IMOH</p>
              <h2 id="about-title">International medical education, shaped around the individual.</h2>
              <p className="editorial-about-text">
                International Medical Observers of Houston contributes to the training of
                international doctors by strengthening their clinical and theoretical knowledge
                across different medical specialties, while supporting the individual talents of
                students in research and medical practice.
              </p>
            </div>
            <img
              className="about-photo"
              src="/images/ipad.png"
              alt="International Medical Observers of Houston"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="mission-vision-section" id="mission" aria-labelledby="mission-vision-title">
          <div className="mission-vision-inner">
            <div className="section-heading">
              <p className="section-kicker"><span>02</span> Our Purpose</p>
              <h2 id="mission-vision-title">Mission &amp; Vision</h2>
            </div>
            <div className="mission-vision-grid">
              <article className="purpose-column">
                <p className="purpose-label">Mission</p>
                <p>
                  Contribute to the training of international doctors, strengthening their
                  clinical and theoretical knowledge of the different specialties in medicine.
                  Based on the natural affinity and individual talent of the student, in the
                  different modalities of research and medical practice.
                </p>
              </article>
              <article className="purpose-column">
                <p className="purpose-label">Vision</p>
                <p>
                  To promote a multidisciplinary and intercultural health care network that
                  enriches the quality of services in the medical field. Forging skilled doctors
                  with high ethical values and humanitarianism capable of confronting the
                  different clinical challenges that current medicine demands.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="values-section" id="values" aria-labelledby="values-title">
          <div className="values-inner">
            <div className="values-heading">
              <p className="section-kicker"><span>03</span> Principles</p>
              <h2 id="values-title">Our Values</h2>
            </div>
            <ol className="values-list">
              <li>Honesty</li>
              <li>Tolerance</li>
              <li>Respect</li>
              <li>Loyalty</li>
              <li>Commitment</li>
              <li>Discipline</li>
              <li>Responsibility</li>
              <li>Equality</li>
              <li>Inclusion</li>
              <li>Trust</li>
              <li>Solidarity</li>
              <li>Justice</li>
            </ol>
          </div>
        </section>

        <section className="history-section" id="history" aria-labelledby="history-title">
          <div className="history-inner">
            <div className="history-heading-layout">
              <div className="section-heading history-heading">
                <p className="section-kicker"><span>04</span> Our History</p>
                <h2 id="history-title">Our History</h2>
              </div>
              <img
                className="history-portrait"
                src="/images/mary.jpg"
                alt="Mary Tello"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ol className="history-timeline">
              <li className="timeline-entry">
                <p className="timeline-year">2004</p>
                <p>
                  During the summer of 2004, Dr. Díaz, a renowned pediatrician from Houston,
                  Texas, and former professor at St. Joseph's Hospital, had the vision of creating
                  a program that would support international students in their academic
                  aspirations, promoting interdisciplinary and intercultural medicine.
                </p>
              </li>
              <li className="timeline-entry">
                <p className="timeline-year">2006</p>
                <p>
                  Mary Tello supported and continued the principles of the program, expanding it
                  throughout Latin America.
                </p>
              </li>
              <li className="timeline-entry">
                <p className="timeline-year">2016</p>
                <p>
                  Dr. Arturo Sandoval joined the program as Medical Director, adopting its
                  philosophy and promoting student creativity in research and clinical sciences.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="programs-section" id="programs" aria-labelledby="programs-title">
          <div className="programs-inner">
            <div className="programs-heading">
              <div>
                <p className="section-kicker"><span>05</span> Educational Programs</p>
                <h2 id="programs-title">Programs</h2>
              </div>
              <a className="button button-primary programs-cta" href="#specialties">
                Explore Opportunities
              </a>
            </div>
            <div className="programs-content">
              <div className="program-list">
                <article className="program-entry">
                  <span className="program-number">01</span>
                  <h3>Clinical Observership</h3>
                  <p>
                    Provide international medical students and physicians with exposure to
                    clinical environments and medical practice in Houston.
                  </p>
                </article>
                <article className="program-entry">
                  <span className="program-number">02</span>
                  <h3>Academic Development</h3>
                  <p>
                    Support participants in strengthening their theoretical medical knowledge
                    through academic and educational experiences.
                  </p>
                </article>
                <article className="program-entry">
                  <span className="program-number">03</span>
                  <h3>Medical Research</h3>
                  <p>
                    Encourage participation in medical research and the development of research
                    skills under academic guidance.
                  </p>
                </article>
                <article className="program-entry">
                  <span className="program-number">04</span>
                  <h3>International Medical Collaboration</h3>
                  <p>
                    Promote multidisciplinary and intercultural collaboration among medical
                    professionals and students.
                  </p>
                </article>
              </div>
              <div className="programs-photo-placeholder">
                <img
                  src="/images/IMG_8270.JPG"
                  alt="IMOH medical students and program participants"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="scholarship-section" id="scholarship" aria-labelledby="scholarship-title">
          <div className="scholarship-inner">
            <div className="scholarship-intro">
              <div className="scholarship-intro-copy">
                <p className="section-kicker"><span>06</span> — USMLE STEP 1 SCHOLARSHIP</p>
                <h2 id="scholarship-title">Supporting the Next Step in the U.S. Medical Pathway</h2>
                <p>
                  The IMOH Step 1 Partial Scholarship Program is designed to support IMOH
                  students who are seriously committed to continuing their medical training
                  pathway in the United States. The program combines financial support with
                  academic and administrative mentorship.
                </p>
              </div>
              <img
                className="scholarship-logo"
                src="/images/usmle-logo.png"
                alt="USMLE Step 1"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="scholarship-overview">
              <article className="scholarship-block scholarship-financial">
                <p className="section-kicker"><span>01</span> Financial Support</p>
                <h3>What the Scholarship Covers</h3>
                <p className="scholarship-fee">
                  The scholarship provides financial support toward the USMLE Step 1 examination fee.
                </p>
                <p className="scholarship-note">
                  Additional expenses related to the USMLE process, including ECFMG-related fees,
                  notary services, study platforms, preparation resources, and other associated
                  expenses are the responsibility of the student.
                </p>
              </article>
              <article className="scholarship-block">
                <p className="section-kicker"><span>02</span> Eligibility</p>
                <h3>Who Can Apply</h3>
                <ul className="scholarship-list">
                  <li>IMOH members</li>
                  <li>Serious interest in the USMLE pathway</li>
                  <li>Availability to study and take Step 1 during the indicated period</li>
                  <li>Ideally suited for students who have already decided to begin Step 1 preparation</li>
                </ul>
                <p className="scholarship-note">
                  Average preparation time may range from 8–12 months depending on the student
                  and their individual study plan.
                </p>
              </article>
              <article className="scholarship-block">
                <p className="section-kicker"><span>03</span> Selection</p>
                <h3>How Candidates Are Selected</h3>
                <ul className="selection-list">
                  <li>Academic readiness</li>
                  <li>Commitment</li>
                  <li>Motivation</li>
                  <li>Interview</li>
                </ul>
                <p className="scholarship-note">
                  Selection process: Application → Review → Finalists → Interview → Scholarship recipient
                </p>
              </article>
            </div>

            <div className="scholarship-timeline-section">
              <h3>Program Timeline</h3>
              <ol className="scholarship-timeline">
                <li>
                  <p className="timeline-date">November 1–30, 2026</p>
                  <p>Applications open and documents received</p>
                </li>
                <li>
                  <p className="timeline-date">December 2026</p>
                  <p>Application review and interviews</p>
                </li>
                <li>
                  <p className="timeline-date">Late December 2026</p>
                  <p>Scholarship recipient announced</p>
                </li>
                <li>
                  <p className="timeline-date">January 2027</p>
                  <p>Scholarship and mentorship begin</p>
                </li>
                <li>
                  <p className="timeline-date">January–June 2027</p>
                  <p>USMLE Step 1 testing period</p>
                </li>
              </ol>
            </div>

            <a className="button button-primary scholarship-more" href="#scholarship-details">
              Learn More About the Scholarship
            </a>
          </div>
        </section>

        <section className="scholarship-details" id="scholarship-details" aria-labelledby="scholarship-details-title">
          <div className="scholarship-details-inner">
            <div className="scholarship-details-heading">
              <p className="section-kicker"><span>06</span> Application Details</p>
              <h2 id="scholarship-details-title">Application Requirements</h2>
            </div>
            <div className="scholarship-detail-columns">
              <div className="scholarship-requirements">
                <ul className="scholarship-list">
                  <li>Curriculum Vitae (Harvard style)</li>
                  <li>Statement of intent, 1–2 A4 pages</li>
                  <li>Evidence of preparation</li>
                  <li>NBME application form(s) or evidence of academic progress</li>
                  <li>Maintain satisfactory academic, clinical, and professional performance during internship, without justified formal reports</li>
                </ul>
              </div>
              <div className="scholarship-commitments">
                <h3>Scholarship Commitments</h3>
                <ul className="scholarship-list">
                  <li>Maintain constant communication</li>
                  <li>Follow the applicant's own study plan</li>
                  <li>Take Step 1 during the agreed testing period</li>
                  <li>Share the experience with future generations of IMOH students</li>
                </ul>
              </div>
            </div>
            <div className="scholarship-callout">
              <p>If you are interested in beginning your USMLE pathway, this scholarship can be your first step.</p>
              <a href="mailto:imoh.program@gmail.com">imoh.program@gmail.com</a>
            </div>
          </div>
        </section>

        <section className="specialties-section" id="specialties" aria-labelledby="specialties-title">
          <div className="specialties-inner">
            <div className="specialties-heading">
              <p className="section-kicker"><span>07</span> Areas of Study</p>
              <h2 id="specialties-title">Medical Specialties</h2>
              <p className="specialties-subtitle">
                Explore medical fields represented within the IMOH educational experience.
              </p>
            </div>
            <ul className="specialty-directory">
              <li>Gynecology</li>
              <li>Neurology</li>
              <li>Cardiology</li>
              <li>Internal Medicine</li>
              <li>Oncology</li>
              <li>Hematology</li>
              <li>Pulmonology</li>
              <li>Critical Care</li>
              <li>Pediatrics</li>
              <li>General Surgery</li>
              <li>Ophthalmological Surgery</li>
              <li>Plastic Surgery</li>
              <li>Urgent Care</li>
              <li>Neurosurgery</li>
              <li>Colorectal Surgery</li>
              <li>Endocrinology</li>
              <li>Dermatology</li>
            </ul>
            <p className="specialties-note">
              Specialty availability may vary according to program schedules and educational
              opportunities.
            </p>
          </div>
        </section>

        <section className="universities-section" aria-labelledby="universities-title">
          <div className="universities-inner">
            <div className="universities-heading">
              <p className="section-kicker"><span>07</span> — ACADEMIC NETWORK</p>
              <h2 id="universities-title">Associated Universities</h2>
              <p>
                IMOH has welcomed students from universities across Mexico, building an academic
                community centered on medical education, international experience, and
                professional development.
              </p>
            </div>
            <ol className="university-directory">
              <li>Universidad de Monterrey (UDEM)</li>
              <li>Universidad Autónoma de Baja California — Tijuana</li>
              <li>Universidad Autónoma de Baja California — Mexicali</li>
              <li>Universidad Xochicalco — Tijuana</li>
              <li>Universidad Xochicalco — Mexicali</li>
              <li>Universidad Popular Autónoma del Estado de Puebla (UPAEP)</li>
              <li>Universidad Autónoma de Durango</li>
              <li>Universidad Autónoma de Tamaulipas — Tampico</li>
              <li>Universidad Anáhuac México — Ciudad de México</li>
            </ol>
            <p className="universities-note">
              Our academic network continues to grow. Additional universities may be added as
              IMOH welcomes students from new institutions.
            </p>
          </div>
        </section>

        <section className="admissions-section" id="admissions" aria-labelledby="admissions-title">
          <div className="admissions-inner">
            <div className="admissions-intro-layout">
              <div className="admissions-introduction">
                <p className="section-kicker"><span>09</span> — ADMISSIONS</p>
                <h2 id="admissions-title">Begin Your IMOH Experience</h2>
                <p>
                  International Medical Observers of Houston welcomes qualified medical students
                  and graduates seeking to strengthen their clinical, academic, and research
                  experience in an international medical environment.
                </p>
              </div>
              <img
                className="academic-image"
                src="/images/visual.png"
                alt="Medical education at IMOH"
                loading="lazy"
                decoding="async"
              />
            </div>

            <section className="eligibility-section" aria-labelledby="eligibility-title">
              <div className="admissions-section-heading">
                <p className="section-kicker"><span>01</span> Eligibility</p>
                <h3 id="eligibility-title">Eligibility</h3>
              </div>
              <div className="eligibility-layout">
                <ul className="requirements-list eligibility-list">
                  <li>Active medical students who have completed at least 50% of the credits required for graduation.</li>
                  <li>Foreign medical graduates.</li>
                  <li>Strong fluency and understanding of the English language.</li>
                  <li>Personal values compatible with the principles of IMOH.</li>
                  <li>Ability to search, read, and analyze medical and scientific literature in English and Spanish.</li>
                  <li>Computer literacy.</li>
                  <li>Proper time management.</li>
                  <li>Strong academic performance in foundational medical sciences.</li>
                </ul>
                <div className="foundational-sciences">
                  <h4>Foundational Medical Sciences</h4>
                  <ul>
                    <li>Anatomy</li>
                    <li>Embryology</li>
                    <li>Cell Biology</li>
                    <li>Biochemistry</li>
                    <li>Physiology</li>
                    <li>Physiopathology</li>
                    <li>Pathology</li>
                    <li>Pharmacology</li>
                    <li>Microbiology</li>
                    <li>Immunology</li>
                    <li>Histology</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="application-requirements" aria-labelledby="application-requirements-title">
              <div className="admissions-section-heading">
                <p className="section-kicker"><span>02</span> Additional IMOH Requirements</p>
                <h3 id="application-requirements-title">Application Requirements</h3>
              </div>
              <ul className="requirements-list application-list">
                <li>Minimum academic average above 85.0.</li>
                <li>No history of academic dishonesty.</li>
                <li>TOEFL score greater than 550.</li>
                <li>Ability to communicate effectively in a clinical environment.</li>
                <li>Valid passport and visa.</li>
                <li>Completion of the required annual program payment.</li>
              </ul>
            </section>

            <section className="applicant-information" aria-labelledby="applicant-information-title">
              <div className="admissions-section-heading">
                <p className="section-kicker"><span>03</span> Applicant Details</p>
                <h3 id="applicant-information-title">Information Required from Applicants</h3>
              </div>
              <ul className="applicant-checklist">
                <li>Full Name</li>
                <li>Student ID / University Registration Number</li>
                <li>Phone Number</li>
                <li>Email Address</li>
              </ul>
            </section>

            <section className="application-process" aria-labelledby="application-process-title">
              <div className="admissions-section-heading">
                <p className="section-kicker"><span>04</span> Next Steps</p>
                <h3 id="application-process-title">Application Process</h3>
              </div>
              <ol className="process-list">
                <li>
                  <span className="process-number">01</span>
                  <h4>Submit Your Information</h4>
                  <p>Provide the required personal and academic information to IMOH.</p>
                </li>
                <li>
                  <span className="process-number">02</span>
                  <h4>Initial Review</h4>
                  <p>The IMOH team reviews the applicant's information and eligibility requirements.</p>
                </li>
                <li>
                  <span className="process-number">03</span>
                  <h4>Interview</h4>
                  <p>Qualified applicants are scheduled for a phone interview as part of the acceptance process.</p>
                </li>
                <li>
                  <span className="process-number">04</span>
                  <h4>Admission Decision</h4>
                  <p>Following the interview and review process, applicants are informed of their acceptance result.</p>
                </li>
              </ol>
            </section>

            <section className="program-modalities" aria-labelledby="program-modalities-title">
              <div className="admissions-section-heading">
                <p className="section-kicker"><span>05</span> Participation</p>
                <h3 id="program-modalities-title">Program Modalities</h3>
              </div>
              <ul className="modality-list">
                <li>Medical Internship</li>
                <li>Social Service</li>
                <li>Research Rotation</li>
                <li>Clinical Rotation</li>
              </ul>
            </section>
          </div>

          <div className="admissions-cta" id="admissions-cta">
            <div className="admissions-cta-inner">
              <div>
                <h3>Ready to Begin?</h3>
                <p>
                  If you would like additional information or have questions about the application
                  process, contact the IMOH team. Following the initial information exchange,
                  eligible applicants may be scheduled for a phone interview to begin the
                  acceptance process.
                </p>
              </div>
              <div className="admissions-cta-actions">
                <a className="button admissions-contact-button" href="#contact">Contact IMOH</a>
                <a href="mailto:imoh.program@gmail.com">imoh.program@gmail.com</a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <div className="contact-heading">
              <p className="section-kicker"><span>10</span> — CONTACT</p>
              <h2 id="contact-title">Connect With IMOH</h2>
            </div>
            <div className="contact-layout">
              <div className="contact-organization">
                <h3>International Medical Observers of Houston</h3>
                <a className="button button-primary" href="mailto:imoh.program@gmail.com">Email IMOH</a>
              </div>
              <dl className="contact-details">
                <div>
                  <dt>Program Email</dt>
                  <dd><a href="mailto:imoh.program@gmail.com">imoh.program@gmail.com</a></dd>
                </div>
                <div>
                  <dt>CEO</dt>
                  <dd>Mary Tello, CMA</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd><a href="tel:+18324887990">(832) 488-7990</a></dd>
                </div>
                <div>
                  <dt>Medical Director</dt>
                  <dd>Arturo Sandoval, M.D.</dd>
                </div>
                <div>
                  <dt>Medical Director Phone</dt>
                  <dd><a href="tel:+17136881800">(713) 688-1800</a></dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>1919 North Loop West<br />Houston, Texas</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#top">International Medical Observers of Houston</a>
            <p>Advancing international medical education through clinical experience, academic development, research, and collaboration.</p>
          </div>
          <div className="footer-links">
            <h2>Quick Links</h2>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#specialties">Specialties</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-contact">
            <h2>Contact</h2>
            <a href="mailto:imoh.program@gmail.com">imoh.program@gmail.com</a>
            <a href="tel:+18324887990">(832) 488-7990</a>
            <p>1919 North Loop West,<br />Houston, Texas</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© International Medical Observers of Houston. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
