import React, { useState } from 'react';

// Example team data (replace with your real data and image paths)
const TEAM_DATA = [
    {
        category: 'Executive Committee',
        key: 'executive',
        members: [
            {
                id: 1,
                name: 'MR.A.Brahma Swamulu',
                role:'President',
                
              photo: '/images/BRAHMA.jpg',
                
            },
            {
                id: 2,
                name: 'R.J.Madhu',
                
                role: 'General Secretary',
                photo: '/images/.jpg',

            },
            {
                id: 3,
                name: 'Dr.L.Rajesh',
                
                role: 'Finance',
                photo: '/images/Rajesh Lankapally.jpg',

            },
            {
                id: 4,
                name: 'Dr.S.Chiranjeevi',
                
                role: 'Finance',
                photo: '/images/Chiranjeevi Sadu.jpg',

            },
            {
                id: 5,
                name: 'Dr.Seethapathi Rao',
                
                role: 'Internal Care',
                photo: '/images/Dr. Seethapathi Rao Jada.jpg',

            },
            {
                id: 6,
                name: 'Mr.B.Venkateswarulu',
                
                role: 'Health care',
                photo: '/images/Venkateswarlu Badisha.jpg',

            },
            {
                id: 7,
                name: 'Dr.D.Venu Gopal',
                
                role: 'Health care',
                photo: '/images/Venkata Venu Gopal Dasari.jpg',

            },
            {
                id: 8,
                name: 'Dr.Vijay Kumar Mishra',
                
                role: 'Web and Content',
                photo: '/images/VIJAY KUMAR MISHRA.jpg',

            },
            


        ],
    },
    {
        category: 'Students',
        key: 'students',
        members: [
            {
                id: 3,
                name: 'John Doe',
                year: '3rd Year',
                role: 'Student Coordinator',
                photo: '/images/team/johndoe.jpg',
                bio: 'Coordinates student activities and outreach.',
            },
            {
                id: 4,
                name: 'Jane Lee',
                year: '2nd Year',
                role: 'Member',
                photo: '/images/team/janelee.jpg',
                bio: 'Active member in student initiatives.',
            },
        ],
    },
    {
        category: 'Web Team',
        key: 'web',
        members: [
            {
                id: 5,
                name: 'Alex Kim',
                year: '4th Year',
                role: 'Web Lead',
                photo: '/images/team/alexkim.jpg',
                bio: 'Leads the web development team.',
            },
            {
                id: 6,
                name: 'Priya Singh',
                year: '2nd Year',
                role: 'Frontend Developer',
                photo: '/images/team/priyasingh.jpg',
                bio: 'Works on frontend features and UI.',
            },
        ],
    },
];

// Improved CSS styles for the team page
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
.team-nav-btn.active,
.team-nav-btn:hover {
  background: #e93d54ff;
  color: #fff;
  border: 2px solid #d63737ff;
}
.members-list {
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  margin-top: 8px;
}
.member-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(25,118,210,0.10);
  padding: 32px 22px 26px 22px;
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
  width: 140px;
  height: 140px;
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
.modal-backdrop {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.25);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-card {
  background: #fff;
  border-radius: 20px;
  padding: 44px 38px 32px 38px;
  box-shadow: 0 12px 48px rgba(25,118,210,0.18);
  min-width: 340px;
  max-width: 95vw;
  text-align: center;
  position: relative;
  animation: modalPop 0.18s;
}
@keyframes modalPop {
  0% { transform: scale(0.92); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
.modal-photo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 22px;
  border: 4px solid #1976d2;
  background: #f7fafd;
}
.modal-name {
  font-size: 1.45rem;
  font-weight: 700;
  color: #1976d2;
  margin-bottom: 6px;
}
.modal-role {
  font-size: 1.13rem;
  color: #444;
  margin-bottom: 6px;
  font-weight: 500;
}
.modal-year {
  font-size: 1.05rem;
  color: #888;
  margin-bottom: 12px;
}
.modal-bio {
  font-size: 1.05rem;
  color: #333;
  margin-bottom: 18px;
}
.close-modal-btn {
  position: absolute;
  top: 14px;
  right: 22px;
  background: none;
  border: none;
  font-size: 2.2rem;
  color: #1976d2;
  cursor: pointer;
  transition: color 0.2s;
  font-weight: 700;
  line-height: 1;
}
.close-modal-btn:hover {
  color: #d32f2f;
}
`;

// Inject CSS
if (typeof document !== 'undefined' && !document.getElementById('team-css')) {
    const style = document.createElement('style');
    style.id = 'team-css';
    style.innerHTML = teamCss;
    document.head.appendChild(style);
}

const Team = () => {
    const [selectedTab, setSelectedTab] = useState(TEAM_DATA[0].key);
    const [selectedMember, setSelectedMember] = useState(null);

    const currentCategory = TEAM_DATA.find((cat) => cat.key === selectedTab);

    return (
        <div className="team-container">
            <h1 className="team-heading">Our Team</h1>
            <div className="team-nav">
                {TEAM_DATA.map((cat) => (
                    <button
                        key={cat.key}
                        className={`team-nav-btn${selectedTab === cat.key ? ' active' : ''}`}
                        onClick={() => setSelectedTab(cat.key)}
                    >
                        {cat.category}
                    </button>
                ))}
            </div>
            <div className="members-list">
                {currentCategory.members.map((member) => (
                    <div
                        className="member-card"
                        key={member.id}
                        onClick={() => setSelectedMember(member)}
                    >
                    	<img
                            src={member.photo}
                            alt={member.name}
                            className="member-photo"
                        />
                        <div className="member-name">{member.name}</div>
                        <div className="member-role">{member.role}</div>
                        <div className="member-year">{member.year}</div>
                    </div>
                ))}
            </div>

            {/* Modal for member details */}
            {selectedMember && (
                <div
                    className="modal-backdrop"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="modal-card"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-modal-btn"
                            onClick={() => setSelectedMember(null)}
                        >
                            &times;
                        </button>
                        <img
                            src={selectedMember.photo}
                            alt={selectedMember.name}
                            className="modal-photo"
                        />
                        <div className="modal-name">{selectedMember.name}</div>
                        <div className="modal-role">{selectedMember.role}</div>
                        <div className="modal-year">{selectedMember.year}</div>
                        <div className="modal-bio">{selectedMember.bio}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Team;