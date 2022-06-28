import React from "react";
import photoPull from "../assets/images/photoPull.png";

function Projects() {
  const myProjects = [
    {
      name: "photoPull",
      description: "Facebook API | ReactJS | Tailwind CSS",
      image: photoPull,
      url: "https://github.com/ldallalio/dallalioweb.dev",
    },
    {
      name: "Logan",
      description: "A website for a local business",
      image: photoPull,
      url: "https://www.logan.com/",
    },
    {
      name: "Logan",
      description: "A website for a local business",
      image: "https://i.imgur.com/XzcXZUq.jpg",
      url: "https://www.logan.com/",
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="projectsTitle">
        <h1>Projects</h1>
      </div>
      <div className="projectsContainer">
        {myProjects.map((project, index) => {
          return (
            <div className="project" key={index}>
              <div className="projectImage">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="projectInfo">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.url}>Visit Site</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;

// Language: javascript
// Path: src/pages/Projects.jsx
// Compare this snippet from src/pages/Home.jsx:
// /* eslint-disable react/no-unescaped-entities */
// import React from "react";
// import heroImage from "../assets/images/logan.jpg";
