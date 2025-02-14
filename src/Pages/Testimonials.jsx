import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with KaVaaVi has been a game-changer for our business. Their strategic approach to SEO, PPC, and social media marketing has helped us reach new audiences and drive measurable growth.",
      //image: "../assets/images/jane.png",
      name: "Emily Johnson",
      position: "Marketing Manager",
    },
    {
      text: "From the initial consultation to ongoing support and optimization, their team has been responsive, proactive, and a pleasure to work with.",
      //image: "../assets/images/Diksha.jpg",
      name: "Michael Brown",
      position: "Founder",
    },
    {
      text: "The results speak for themselves, and we're grateful for their continued support and guidance. Highly recommend KaVaaVi to any business looking to grow online!",
      //image: "../assets/images/john.png",
      name: "Sarah Davis",
      position: "Marketing Director",
    },
    {
      text: "KaVaaVi has been instrumental in helping us achieve our marketing goals. Their expertise, professionalism, and dedication to delivering results are unmatched.",
      //image: "../assets/images/jane.png",
      name: "David Smith",
      position: "CEO",
    },
    {
        text:"We have seen significant growth in our online presence andcustomer engagement since partnering with Zenith. Their tailoredstrategies and personalized support have made all the difference.",
        //image: ;
        name: "Linda Williams",
        position: "COO",
    },
    {
        text:"Zenith's innovative approach and thorough understanding ofdigital marketing have been invaluable to our success. We highly recommend their services to any company looking to improve theironline marketing efforts.",
        //image:
        name: "James Brown",
        position: "CTO",
    }
  ];

  return (
    <div style={styles.section}>
      <h3 style={styles.badge}>Testimonials</h3>
      <h2 style={styles.subtitle}>What our clients say about us</h2>
      <p style={styles.description}>Hear what our clients have to say about working with KaVaaVi</p>
      <div style={styles.space}></div>
      <div style={styles.wrapper}>
        <motion.div
          style={styles.carousel}
          animate={{
            x: ["100%", "0%", "-100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 30, // Adjust speed here
            ease: "linear",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.container}>
            <motion.div
              key={index}
              style={styles.card}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 1, duration: 1 }}
            >
              <p style={styles.text}>{testimonial.text}</p>
              <div style={styles.separator}></div>
              <div style={styles.clientInfo}>
                
                <div>
                  <h3 style={styles.name}>{testimonial.name}</h3>
                  <small style={styles.position}>{testimonial.position}</small>
                </div>
              </div>
            </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
    section: {
      textAlign: "center",
      padding: "30px 15px",
      backgroundColor: "#FFD8A9",
      overflow: "hidden",
    },
    badge: {
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#444",
        marginBottom: "10px",
    },
    subtitle: {
      fontSize: "50px",
      fontWeight: "bold",
      color: "#f97902",
      marginBottom: "15px",
    },
    description: {
        fontSize: "18px",
        color: "#444",
        marginBottom: "30px",
      },
      space: {
      height: "60px",
      },
    wrapper: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      width: "100%",
      overflow: "hidden",
    },
    carousel: {
      display: "flex",
      gap: "20px",
      width: "100%",
    },
    card: {
      backgroundColor: "#fff",
      padding: "20px", // Increased padding
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "400px", // Increased width
      height: "300px",
      
      textAlign: "justify",
      flexShrink: 0,
      fontFamily: "'Inter', sans-serif",
    },
    text: {
      fontSize: "18px", // Bigger text
      color: "#333",
      lineHeight: "1.6", // Better spacing
    },
    separator: {
      height: "1px",
      backgroundColor: "#ddd",
      margin: "15px 0",
      position: "relative",  
      bottom: "-10px",
    },
    clientInfo: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    image: {
      width: "60px", // Bigger image
      height: "60px",
      borderRadius: "50%",
    },
    name: {
      fontSize: "18px", // Bigger name text
      fontWeight: "bold",
      color: "#444",
    },
    position: {
      fontSize: "16px", // Bigger position text
      color: "#777",
    },
  };  

export default Testimonials;
