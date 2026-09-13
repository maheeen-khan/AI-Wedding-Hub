import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePreview.css";

export default function ProfilePreview() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/vendors/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.status === 404) {
          // no business registered yet — not a real error
          setProfile(null);
          return;
        }

        if (!res.ok) throw new Error("Failed to load profile");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleEditClick = () => {
    navigate("/register-business", { state: { profile } });
  };

  if (loading) {
    return <div className="table-card profile-card">Loading profile...</div>;
  }

  if (error) {
    return <div className="table-card profile-card">Error: {error}</div>;
  }

  if (!profile) {
    return (
      <div className="table-card profile-card">
        <div className="table-header">
          <h3>My Profile Preview</h3>
          <button className="btn btn-outline" onClick={handleEditClick}>
            Register Your Business
          </button>
        </div>
        <p style={{ padding: "16px 0", color: "#8a7a75" }}>
          You haven't registered a business profile yet.
        </p>
      </div>
    );
  }

  return (
    <div className="table-card profile-card">
      <div className="table-header">
        <h3>My Profile Preview</h3>
        <button className="btn btn-outline" onClick={handleEditClick}>
          Edit Profile
        </button>
      </div>
      <div className="profile-grid">
        <div className="profile-block">
          <h4>{profile.name}</h4>
          <p className="profile-sub">
            {profile.category} · {profile.location || profile.city}
          </p>
          <span className="vendor-tag">{profile.category?.toUpperCase()}</span>
        </div>
        <div className="profile-block">
          <h4>CONTACT</h4>
          <p>{profile.city}</p>
          <p>{profile.price_label} — PKR {profile.price_min} - {profile.price_max}</p>
        </div>
        <div className="profile-block">
          <h4>DESCRIPTION</h4>
          <p>{profile.about}</p>
        </div>
      </div>
    </div>
  );
}