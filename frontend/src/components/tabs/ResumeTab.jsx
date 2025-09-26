import React from "react";
import { Card } from "../ui/card";
import { MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react";
import mockData from "../../data/mockData";

const ResumeTab = () => {
  return (
    <div className="resume-tab">
      <h1 className="page-title">Zaheer's Resume</h1>
      
      {/* Education Section */}
      <section className="resume-section">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {mockData.education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <GraduationCap size={16} />
              </div>
              <Card className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{edu.institution}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                  </div>
                </div>
                <div className="timeline-details">
                  <p className="timeline-degree">{edu.degree}</p>
                  <p className="timeline-university">{edu.university}</p>
                  <div className="timeline-location">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="resume-section">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {mockData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={16} />
              </div>
              <Card className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.company}</h3>
                  <div className="timeline-meta">
                    <span className="timeline-date">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                  </div>
                </div>
                <div className="timeline-details">
                  <p className="timeline-position">{exp.position}</p>
                  <div className="timeline-location">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="achievements">
                    <h4>Key Achievements:</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="technologies">
                    <h4>Technologies:</h4>
                    <p>{exp.technologies}</p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="resume-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {mockData.featuredProjects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <div className="project-stack">
                  <strong>Stack:</strong> {project.stack}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ResumeTab;