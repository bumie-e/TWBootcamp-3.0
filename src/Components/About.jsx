/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/twc-bg.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "The Technical Writing Bootcamp is a 4-week program designed to empower aspiring writers. Due to many of the participants from previous versions having non technical background, participants will engage in a Cloud Skills Challenge in the first week, covering topics like data analytics, machine learning, and cloud engineering. The following two weeks will consist of comprehensive classes and writing evaluations with experienced tutors. The final week is dedicated to portfolio building, feedback, and connections to technical writing agencies. With both in-person and virtual options available, this bootcamp offers flexibility and ensures a transformative learning experience. ";
const description2 = "Avaliable in-person at OAU and virtual on YouTube. Register now today to secure your spot!";
const description3 = "Sign up today to start learning!";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Learn a tech skill for free",
  "Learn how to write technical documentation",
  "Get connected to technical writing agencies",
];

const schedule = [
  "July 19th - Registration Deadline",
  "July 17th to July 23rd - Weeek 1 - Cloud Skills Challenge",
  "July 24th to 30th - Week 2 - Technical Writing Classes",
  "July 31st to August 6th - Week 3 - Technical Writing Classes",
  "August 7th to 13th - Week 4 - Portfolio Building and Feedback",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "70%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About the Bootcamp</h2>
        <p className="large">{description}</p>
        <hr />
        <h2>Highlights</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <h2>Schedule</h2>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {schedule.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <p style={{ padding: "1rem 3rem 0" }}>{description2}</p>
        <a href="https://www.eventbrite.com/e/technical-writing-bootcamp-30-tickets-665743746467">
          <button type="button">Register Now!</button>
          </a>
        <hr />
        <h2>Cloud Skills Challenge</h2>
        <p style={{ padding: "1rem 3rem 0" }}>{description3}</p>
        <a href="https://aka.ms/msbuild-lc-h192">
          <button type="button">Register Here</button>
          </a>
      </div>
    </section>
  );
};

export default About;
