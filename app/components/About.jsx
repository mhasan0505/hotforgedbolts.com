"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Expert Team",
      description: "70+ experienced engineers and operators driving innovation in forging technology.",
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Committed to delivering exact specifications and superior quality in every project.",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Leading Turkey's hot forging industry with cutting-edge technology and expertise.",
    },
  ];

  return (
    <>
      {/* Inline CSS for hover effects */}
      <style jsx>{`
        .custom-button:hover {
          background-color: #7C3AED;
          color: #FFFFFF;
        }
        .custom-card:hover {
          background-color: rgba(124, 58, 237, 0.1);
        }
        .custom-button:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>

      <section id="about" style={{ padding: "5rem 0", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", alignItems: "center" }}>
            {/* Content Side */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "rgba(249, 115, 22, 0.1)",
                  border: "1px solid rgba(249, 115, 22, 0.2)",
                  borderRadius: "9999px",
                  padding: "0.5rem 1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Users style={{ width: "1rem", height: "1rem", color: "#F97316" }} />
                <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#F97316" }}>
                  About Our Company
                </span>
              </div>

              <h2
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  color: "#1F2937",
                  marginBottom: "1.5rem",
                }}
              >
                Leading Turkey&#39;s
                <span
                  style={{
                    display: "block",
                    backgroundImage: "linear-gradient(90deg, #F97316, #7C3AED)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Forging Industry
                </span>
              </h2>

              <p
                style={{
                  fontSize: "1.125rem",
                  color: "#6B7280",
                  marginBottom: "1.5rem",
                  lineHeight: "1.75",
                }}
              >
                Our experienced engineering and operator team of over 70 professionals, combined with
                our innovative human resources perspective, high production capacity, and continuously
                evolving technology, positions us as Turkey&#39;s leading hot forging product
                manufacturer.
              </p>

              <p style={{ color: "#6B7280", marginBottom: "2rem", lineHeight: "1.75" }}>
                We are advancing towards becoming the industry leader with our manufacturing
                center&#39;s experienced engineers and operators, innovative approach, and commitment
                to technological advancement that grows stronger each year.
              </p>

              <Button
                className="custom-button"
                style={{
                  backgroundColor: "#F97316",
                  color: "#FFFFFF",
                  padding: "0.75rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: "500",
                  borderRadius: "0.375rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "background-color 0.3s, color 0.3s",
                }}
              >
                Learn More About Us
                <ArrowRight
                  className="arrow-icon"
                  style={{ width: "1.25rem", height: "1.25rem", transition: "transform 0.3s" }}
                />
              </Button>
            </div>

            {/* Values Grid */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="custom-card"
                  style={{
                    border: "none",
                    backgroundColor: "rgba(243, 232, 255, 0.5)",
                    transition: "background-color 0.3s",
                  }}
                >
                  <CardContent style={{ padding: "1.5rem" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                      <div
                        style={{
                          width: "3rem",
                          height: "3rem",
                          backgroundImage: "linear-gradient(90deg, #F97316, #7C3AED)",
                          borderRadius: "0.5rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <value.icon style={{ width: "1.5rem", height: "1.5rem", color: "#FFFFFF" }} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: "1.25rem",
                            fontWeight: "700",
                            color: "#1F2937",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {value.title}
                        </h3>
                        <p style={{ color: "#6B7280", lineHeight: "1.75" }}>{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div
            style={{
              marginTop: "5rem",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  backgroundImage: "linear-gradient(90deg, #F97316, #7C3AED)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginBottom: "0.5rem",
                }}
              >
                25+
              </div>
              <div style={{ color: "#6B7280", fontWeight: "500" }}>Years of Excellence</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  backgroundImage: "linear-gradient(90deg, #F97316, #7C3AED)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginBottom: "0.5rem",
                }}
              >
                70+
              </div>
              <div style={{ color: "#6B7280", fontWeight: "500" }}>Expert Engineers</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  backgroundImage: "linear-gradient(90deg, #F97316, #7C3AED)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginBottom: "0.5rem",
                }}
              >
                1000+
              </div>
              <div style={{ color: "#6B7280", fontWeight: "500" }}>Projects Delivered</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.875rem",
                  fontWeight: "700",
                  backgroundImage: "linear-gradient(90deg, #F97316, #7C3AED)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  marginBottom: "0.5rem",
                }}
              >
                50+
              </div>
              <div style={{ color: "#6B7280", fontWeight: "500" }}>Industries Served</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;