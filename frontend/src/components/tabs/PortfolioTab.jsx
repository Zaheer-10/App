import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import mockData from "../../data/mockData";

const PortfolioTab = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", "ML Projects", "Web Development", "AI Apps", "Data Science"];
  
  const filteredProjects = selectedCategory === "All" 
    ? mockData.projects 
    : mockData.projects.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-tab">
      <h1 className="page-title">Portfolio</h1>
      
      {/* Category Filter */}
      <div className="filter-section">
        <div className="filter-header">
          <Filter size={20} />
          <h3>Filter by Category</h3>
        </div>
        <div className="category-filters">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="filter-button"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="portfolio-card">
            <div className="portfolio-image">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-thumbnail"
              />
              <div className="portfolio-overlay">
                <div className="overlay-buttons">
                  <Button size="sm" className="overlay-btn">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="overlay-btn">
                    <Github size={16} />
                    Code
                  </Button>
                </div>
              </div>
            </div>
            <div className="portfolio-content">
              <div className="portfolio-header">
                <h3 className="portfolio-title">{project.title}</h3>
                <Badge className="category-badge">{project.category}</Badge>
              </div>
              <p className="portfolio-description">{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="tech-tag">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioTab;