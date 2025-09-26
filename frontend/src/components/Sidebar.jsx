import React from "react";
import { MapPin, Mail, Github, Linkedin, Twitter } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-card">
        <div className="profile-image-container">
          <img
            src="/images/profile.png"
            alt="Zaheer K Z Profile"
            className="profile-image"
          />
          <div className="profile-overlay">
            <div className="profile-text"></div>
          </div>
        </div>
        
        <div className="profile-info">
          <h1 className="profile-name">Zaheer K Z</h1>
          <p className="profile-title">ML Engineer</p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <MapPin className="contact-icon" size={16} />
            <span>Bangalore, India</span>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={16} />
            <span>zaheer.work24@gmail.com</span>
          </div>
          <div className="contact-item">
            <Github className="contact-icon" size={16} />
            <span>Zaheer-10</span>
          </div>
          <div className="contact-item">
            <Linkedin className="contact-icon" size={16} />
            <span>in/zaheer-k-z</span>
          </div>
        </div>

        <div className="social-links">
          <div className="social-icon">
            <Github size={20} />
          </div>
          <div className="social-icon">
            <Linkedin size={20} />
          </div>
          <div className="social-icon">
            <Twitter size={20} />
          </div>
          <div className="social-icon">
            <Mail size={20} />
          </div>
        </div>

        <div className="sidebar-footer">
          <p>© 2025 Zaheer</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;