import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Calendar, User, Search, ArrowRight } from "lucide-react";
import mockData from "../../data/mockData";

const BlogTab = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  
  const allTags = ["All", ...new Set(mockData.blogPosts.flatMap(post => post.tags))];
  
  const filteredPosts = mockData.blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="blog-tab">
      <h1 className="page-title">Blog</h1>
      
      {/* Search and Filter Section */}
      <div className="blog-controls">
        <div className="search-box">
          <Search size={20} className="search-icon" />
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="tag-filters">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className="tag-filter"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <Card key={index} className="blog-card">
            <div className="blog-image">
              <img 
                src={post.image} 
                alt={post.title}
                className="blog-thumbnail"
              />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <div className="blog-date">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                <div className="blog-author">
                  <User size={14} />
                  <span>Zaheer K Z</span>
                </div>
              </div>
              
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              
              <div className="blog-tags">
                {post.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="blog-tag">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <Button className="read-more-btn">
                Read More
                <ArrowRight size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      {/* See More Posts */}
      <div className="blog-footer">
        <Button variant="outline" size="lg" className="see-more-btn">
          See More Posts
        </Button>
      </div>
    </div>
  );
};

export default BlogTab;