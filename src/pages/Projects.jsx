import React from "react";
import photoPull from "../assets/images/photoPull.png";
import Unfiltered from "../assets/images/unfiltered.png";
import UserLogin from "../assets/images/userLoginApp.png";

function Projects() {
  const myProjects = [
    {
      name: "Unfiltered with Kiran",
      description: "React Native | Wordpress API  Firebase | AWS",
      image: Unfiltered,
      url: "https://apps.apple.com/us/app/unfiltered-with-kiran/id1624502392",
    },
    {
      name: "photoPull",
      description: "Facebook API | ReactJS  Tailwind CSS",
      image: photoPull,
      url: "https://photopull-app.vercel.app/",
      source: "https://github.com/ldallalio/photopull-app",
    },
    {
      name: "UserLoginApp",
      description: "ReactJS | Firebase ",
      image: UserLogin,
      url: "https://loving-sinoussi-b1c103.netlify.app",
      source: "https://github.com/ldallalio/user-login",
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
                <a href={project.url}>
                  <img src={project.image} alt={project.name} />
                </a>
              </div>
              <div className="projectInfo">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a href={project.url}>Visit Site</a>
                {project.source && <a href={project.source}>View Source</a>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
