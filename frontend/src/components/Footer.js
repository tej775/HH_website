import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem("siteVisits");
    const newCount = storedVisits ? parseInt(storedVisits) + 1 : 1;
    localStorage.setItem("siteVisits", newCount);
    setVisits(newCount);
  }, []);

  return (
    <footer style={{ backgroundColor: "black", color: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "20px" }}>
          {/* Logo + Title + Description */}
          <div style={{ display: "flex", flex: "1 1 300px", marginBottom: "20px" }}>
            <img src="./images/hhlogo.png" alt="Logo" width={80} height={80} style={{ marginRight: "15px" }} />
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px", display: "block" }}>
                Helping Hands RGUKT Nuzvid
              </span>
              <p style={{ marginTop: "5px", lineHeight: "1.4" }}>
                Catering to the Educational Needs of Gifted Rural Youth of Andhra Pradesh
                <br />
                (Established by the Govt. of Andhra Pradesh and recognized as per Section 2(f), 12(B) of UGC Act, 1956)
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
            <h6 style={{ fontWeight: "bold", marginBottom: "8px" }}>Quick Links</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
        <a href="https://www.facebook.com/rgukthelpinghands" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaFacebookF size={20} />
        </a>
        <a href="https://x.com/HH_RguktN" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaTwitter size={20} />
        </a>
        <a href="https://www.instagram.com/helpinghands_rguktn/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaInstagram size={20} />
        </a>
        <a href="https://www.whatsapp.com/channel/0029VahYAYdEgGfNOxdJXH2u" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
          <FaWhatsapp size={20} />
        </a>
      </div>

      {/* Bottom Section */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#d3d3d3",
        color: "black"
      }}>
        {/* Centered copyright */}
        <div style={{ flex: "1 1 100%", textAlign: "center", marginBottom: "5px" }}>
          © 2025 RGUKT-AP. All Rights Reserved.
          <br />
          Designed, Developed & Maintained By RGUKT Webteam
        </div>

        {/* Site Visits */}
        <div style={{ flex: "1 1 100%", textAlign: "right" }}>
          👁️‍🗨️ <span >Site Visits:</span> {visits}
        </div>
      </div>
    </footer>
  );
}
