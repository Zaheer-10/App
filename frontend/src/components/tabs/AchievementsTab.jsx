import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Award, Star, Trophy, Certificate } from "lucide-react";
import mockData from "../../data/mockData";

const AchievementsTab = () => {
  return (
    <div className="achievements-tab">
      <h1 className="page-title">Achievements</h1>
      
      {/* Certifications Section */}
      <section className="achievements-section">
        <h2 className="section-title">Certifications</h2>
        <div className="achievements-grid">
          {mockData.achievements.filter(item => item.type === "certification").map((cert, index) => (
            <Card key={index} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon">
                  <Certificate size={24} />
                </div>
                <div className="achievement-info">
                  <h3 className="achievement-title">{cert.title}</h3>
                  <p className="achievement-issuer">{cert.issuer}</p>
                </div>
              </div>
              <div className="achievement-details">
                <p className="achievement-date">{cert.date}</p>
                <p className="achievement-description">{cert.description}</p>
                {cert.skills && (
                  <div className="achievement-skills">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="skill-badge">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="achievements-section">
        <h2 className="section-title">Awards & Recognition</h2>
        <div className="achievements-grid">
          {mockData.achievements.filter(item => item.type === "award" || item.type === "recognition").map((award, index) => (
            <Card key={index} className="achievement-card">
              <div className="achievement-header">
                <div className="achievement-icon">
                  {award.type === "award" ? <Award size={24} /> : <Star size={24} />}
                </div>
                <div className="achievement-info">
                  <h3 className="achievement-title">{award.title}</h3>
                  <p className="achievement-issuer">{award.issuer}</p>
                </div>
              </div>
              <div className="achievement-details">
                <p className="achievement-date">{award.date}</p>
                <p className="achievement-description">{award.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills & Endorsements */}
      <section className="achievements-section">
        <h2 className="section-title">Skills & Endorsements</h2>
        <div className="skills-container">
          {mockData.skills.map((skillCategory, index) => (
            <Card key={index} className="skills-card">
              <h3 className="skills-category">{skillCategory.category}</h3>
              <div className="skills-list">
                {skillCategory.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AchievementsTab;