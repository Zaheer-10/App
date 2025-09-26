import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { useToast } from "../../hooks/use-toast";
import { Code, Bot, Zap, Rocket, MapPin } from "lucide-react";
import mockData from "../../data/mockData";

const AboutTab = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b5bf6cfb-c443-45b9-848b-904578950dc6",
          ...formData
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceIcons = {
    "Python Backend": Code,
    "AI Model Building": Bot,
    "Gen-AI Apps": Zap,
    "Deployments": Rocket
  };

  return (
    <div className="about-tab">
      {/* About Me Section */}
      <section className="about-section">
        <h2 className="section-title">About Zaheer</h2>
        <div className="about-content">
          <p>
            Hey! I'm Zaheer, a Machine Learning Engineer from Coorg, Karnataka. 
            I work at Neutrinos, where I get to explore and build with Artificial Intelligence every day.
          </p>
          <p>
            I've always been curious about how technology can make our lives better, and AI, 
            in particular, excites me because of its ability to solve real-world problems in smart ways. 
            I enjoy learning new things and finding simple, meaningful solutions to complex challenges.
          </p>
        </div>
      </section>

      {/* What I'm Doing Section */}
      <section className="services-section">
        <h2 className="section-title">What I'm Doing</h2>
        <div className="services-grid">
          {mockData.services.map((service, index) => {
            const IconComponent = serviceIcons[service.title];
            return (
              <Card key={index} className="service-card">
                <div className="service-icon">
                  <IconComponent size={24} />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Coding Stats Section */}
      <section className="stats-section">
        <h2 className="section-title">Coding Stats</h2>
        <div className="stats-container">
          <div className="tech-stack">
            <h3 className="stats-subtitle">Stacks</h3>
            <div className="tech-icons">
              {mockData.techStack.map((tech, index) => (
                <div key={index} className="tech-icon" title={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                </div>
              ))}
            </div>
          </div>
          <div className="location-info">
            <div className="location-item">
              <MapPin className="location-icon" size={16} />
              <span>Bangalore, India (UTC +05:00)</span>
            </div>
            <div className="world-map">
              <img 
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=400&h=200&fit=crop" 
                alt="World Map" 
                className="map-image"
              />
              <div className="location-pin"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <h2 className="section-title">Talk To Zaheer</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <Input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="form-input"
            />
            <Input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>
          <Textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="form-textarea"
            rows={5}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </section>
    </div>
  );
};

export default AboutTab;