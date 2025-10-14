// Team.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js"; // npm install crypto-js

const SECRET_KEY = "myVeryStrongSecretKey123!";

// --- CSS Styling (same as your version) ---
const teamCss = `
.team-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 32px 24px 48px 24px;
  background: #f7fafd;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(25,118,210,0.08);
}

.team-heading {
  font-size: 2.7rem;
  text-align: center;
  margin-bottom: 32px;
  color: #d21919ff;
  letter-spacing: 1px;
  font-weight: 700;
}

.team-nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 44px;
}

.team-nav-btn {
  background: #fff;
  color: #f32f38ff;
  border: 2px solid #fdbdc1ff;
  border-radius: 30px;
  padding: 12px 38px;
  font-size: 1.18rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s;
  outline: none;
  box-shadow: 0 2px 8px rgba(25,118,210,0.04);
}

.team-nav-btn:hover {
  background: #e93d54ff;
  color: #fff;
  border: 2px solid #d63737ff;
}

.team-nav-btn.active {
  background: #e93d54ff;
  color: #fff;
  border: 2px solid #d63737ff;
}

/* members list */
.members-list {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  margin-top: 8px;
}

/* member card */
.member-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(25,118,210,0.10);
  padding: 22px 22px 26px 22px;
  width: 260px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.15s, box-shadow 0.15s, background 0.15s;
  border: 2px solid transparent;
  position: relative;
}

.member-card:hover {
  transform: translateY(-6px) scale(1.035);
  box-shadow: 0 8px 32px rgba(25,118,210,0.13);
  background: #e3f2fd;
  border: 2px solid #e781a8ff;
}

.member-photo {
  width: 250px;
  height: 180px;
  border-radius: 0%;
  object-fit: cover;
  margin-bottom: 18px;
  border: 2px solid rgba(20, 105, 190, 0.05);
  background: #f7fafd;
}

.member-name {
  font-size: 1.18rem;
  font-weight: 700;
  color: #fcb4b4ff;
  margin-bottom: 4px;
}

.member-role {
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 2px;
  font-weight: 500;
}

.member-year {
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 2px;
}
  /* Default styling (desktop/laptop) */
.team-nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 44px;
}

.team-nav-btn {
  background: #fff;
  color: #f32f38ff;
  border: 2px solid #fdbdc1ff;
  border-radius: 30px;
  padding: 12px 38px;
  font-size: 1.18rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s;
  outline: none;
  box-shadow: 0 2px 8px rgba(25,118,210,0.04);
}

.team-nav-btn.active,
.team-nav-btn:hover {
  background: #e93d54ff;
  color: #fff;
  border: 2px solid #d63737ff;
}

/* Admin + button (desktop/laptop) */
.add-member-btn {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #d21919;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.add-member-btn:hover {
  background-color: #b71515;
  transform: scale(1.1);
}

/* --- Responsive styling for phones (max-width: 480px) --- */
@media (max-width: 480px) {
  .team-nav {
    flex-wrap: wrap; /* allow buttons to wrap */
    gap: 12px;       /* smaller gap */
  }

  .team-nav-btn {
    padding: 8px 16px;    /* smaller padding */
    font-size: 0.95rem;   /* smaller font */
         /* take full width on phone */
  }

  .add-member-btn {
    top: 16px;
    right: 16px;
    width: 38px;
    height: 38px;
    font-size: 1.4rem;
  }
}
  /* Default styling (desktop/laptop) */
.team-nav {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 44px;
}

.team-nav-btn {
  background: #fff;
  color: #f32f38ff;
  border: 2px solid #fdbdc1ff;
  border-radius: 30px;
  padding: 12px 38px;
  font-size: 1.18rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, border 0.18s;
  outline: none;
  box-shadow: 0 2px 8px rgba(25,118,210,0.04);
}

.team-nav-btn.active,
.team-nav-btn:hover {
  background: #e93d54ff;
  color: #fff;
  border: 2px solid #d63737ff;
}

/* Admin + button (desktop/laptop) */
.add-member-btn {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #d21919;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.add-member-btn:hover {
  background-color: #b71515;
  transform: scale(1.1);
}

/* --- Mobile view: stack buttons vertically --- */
@media (max-width: 480px) {
  .team-nav {
    display: flex;
    flex-direction: column; /* stack vertically */
    gap: 12px;              /* space between buttons */
    align-items: center;     /* center alignment */
  }

  .team-nav-btn {
    padding: 10px 24px;     /* smaller padding */
    font-size: 1rem;        /* smaller font */
    width: 80%;             /* almost full width */
    max-width: 300px;
  }

  .add-member-btn {
    top: 16px;
    right: 16px;
    width: 38px;
    height: 38px;
    font-size: 1.4rem;
  }
}
/* --- Admin + button (desktop) --- */
.add-member-btn {
  position: absolute;
  top: 32px;
  right: 32px;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #d21919;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

/* --- Mobile view adjustment --- */
@media (max-width: 480px) {
  .add-member-btn {
    top: 199x !important;    /* closer to top */
    right: 16px !important;  /* closer to right edge */
    width: 40px;  /* smaller button */
    height: 40px;
    font-size: 1.6rem;
  }
}


`;


if (typeof document !== "undefined" && !document.getElementById("team-css")) {
  const style = document.createElement("style");
  style.id = "team-css";
  style.innerHTML = teamCss;
  document.head.appendChild(style);
}

// --- Main Component ---
export default function Team() {
  const [selectedTab, setSelectedTab] = useState("executive");
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.startsWith("/admin");

  // --- Decrypt text ---
  const decryptText = (encryptedHex, ivHex) => {
    if (!encryptedHex || !ivHex) return "";
    try {
      const key = CryptoJS.SHA256(SECRET_KEY);
      const iv = CryptoJS.enc.Hex.parse(ivHex);
      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: CryptoJS.enc.Hex.parse(encryptedHex) },
        key,
        { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
      );
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (err) {
      console.error("Text decryption failed:", err);
      return "";
    }
  };

  // --- Decrypt image ---
  const decryptImage = (encryptedBase64, ivHex) => {
    if (!encryptedBase64 || !ivHex) return "";
    try {
      const key = CryptoJS.SHA256(SECRET_KEY);
      const iv = CryptoJS.enc.Hex.parse(ivHex);
      const encryptedWords = CryptoJS.enc.Base64.parse(encryptedBase64);
      const decrypted = CryptoJS.AES.decrypt(
        { ciphertext: encryptedWords },
        key,
        { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
      );

      const typedArray = Uint8Array.from(decrypted.words.flatMap(w => [
        (w >> 24) & 0xFF,
        (w >> 16) & 0xFF,
        (w >> 8) & 0xFF,
        w & 0xFF,
      ])).slice(0, decrypted.sigBytes);

      let binary = "";
      typedArray.forEach((b) => binary += String.fromCharCode(b));
      return `data:image/jpeg;base64,${btoa(binary)}`;
    } catch (err) {
      console.error("Image decryption failed:", err);
      return "";
    }
  };

  // --- Fetch team members from backend ---
  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then(res => res.json())
      .then(data => {
        const decryptedMembers = data.map(m => ({
          id: m.id,
          category: m.category,
          name: decryptText(m.name, m.iv),
          role: m.role ? decryptText(m.role, m.iv) : "",
          year: m.year ? decryptText(m.year, m.iv) : "",
          photo: decryptImage(m.image, m.iv),
        }));
        setMembers(decryptedMembers);
      })
      .catch(err => console.error("Fetch failed:", err));
  }, []);

  const categorized = {
    executive: members.filter(m => m.category === "executive"),
    students: members.filter(m => m.category === "students"),
    web: members.filter(m => m.category === "web"),
  };

  const currentMembers = categorized[selectedTab] || [];

  const handleAddMember = () => navigate("/admin/add-member");

  return (
    <div className="team-container">
      <h1 className="team-heading">Our Team</h1>

      {isAdminPage && (
        <button
          onClick={handleAddMember}
          style={{
            position: "absolute",
            top: "236px",
            right: "115px",
            fontSize: "2rem",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "none",
            backgroundColor: "#d21919",
            color: "#fff",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          title="Add New Member"
          className="add-member-btn"
        >
          +
        </button>
      )}

      <div className="team-nav">
        <button
          className={`team-nav-btn${selectedTab === "executive" ? " active" : ""}`}
          onClick={() => setSelectedTab("executive")}
        >
          Executive Committee
        </button>
        <button
          className={`team-nav-btn${selectedTab === "students" ? " active" : ""}`}
          onClick={() => setSelectedTab("students")}
        >
          Students
        </button>
        <button
          className={`team-nav-btn${selectedTab === "web" ? " active" : ""}`}
          onClick={() => setSelectedTab("web")}
        >
          Web Team
        </button>
      </div>

      <div className="members-list">
        {currentMembers.map(member => (
          <div
            className="member-card"
            key={member.id}
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.photo} alt={member.name} className="member-photo" />
            <div className="member-name">{member.name}</div>
            {member.role && <div className="member-role">{member.role}</div>}
            {member.year && <div className="member-year">{member.year}</div>}
          </div>
        ))}
      </div>

      {selectedMember && (
        <div className="modal-backdrop" onClick={() => setSelectedMember(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedMember(null)}>
              &times;
            </button>
            <img src={selectedMember.photo} alt={selectedMember.name} className="modal-photo" />
            <div className="modal-name">{selectedMember.name}</div>
            {selectedMember.role && <div className="modal-role">{selectedMember.role}</div>}
            {selectedMember.year && <div className="modal-year">{selectedMember.year}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
