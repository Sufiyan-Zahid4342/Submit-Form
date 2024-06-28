// Filename - DisplayPage.js

import React from "react";

function DisplayPage({ formData, handleBack }) {
    const {
        firstName,
        lastName,
        email,
        contact,
        gender,
        subjects,
        resume,
        url,
        selectedOption,
        about
    } = formData;

    return (
        <div className="DisplayPage">
            <h1>Submitted Form Data</h1>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Contact:</strong> {contact}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Subjects:</strong></p>
            <ul>
                {Object.keys(subjects).map((sub) => (
                    <li key={sub}>{sub}: {subjects[sub] ? "Yes" : "No"}</li>
                ))}
            </ul>
            <p><strong>Resume:</strong> {resume ? resume.name : "No file uploaded"}</p>
            <p><strong>URL:</strong> {url}</p>
            <p><strong>Selected Option:</strong> {selectedOption}</p>
            <p><strong>About:</strong> {about}</p>
            <button onClick={handleBack}>Back to Form</button>
        </div>
    );
}

export default DisplayPage;
