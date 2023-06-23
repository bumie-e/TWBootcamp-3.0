/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

import image1 from "../images/1649491372204.jpeg";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Bunmi Akinremi",
    description:"Machine Learning Engineer, Technical Writer, and Community Builder",
    images: image1,
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Tutor 1",
    description:
      "Contributed sketch note imagery to accompany each lesson. ",
      images: "https://avatars.githubusercontent.com/u/55904290?v=4",
      url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Tutor 2",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. ",
      images: "https://avatars.githubusercontent.com/u/55904290?v=4",
      url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Tutor 3",
    description:
      "How best to use each tool.",
      images: "https://avatars.githubusercontent.com/u/55904290?v=4",
      url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Tutors</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
        <h3> </h3>
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <img className="img" src={project.images} alt={project.title} />
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
