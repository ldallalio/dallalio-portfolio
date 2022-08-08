import React from "react";
import photoPull from "../assets/images/photoPull.png";
import Unfiltered from "../assets/images/unfiltered.png";
import UserLogin from "../assets/images/userLoginApp.png";
import BigJohns from "../assets/images/bigjohns.png";
import KleanKing from "../assets/images/kleanking.png";
import Bearded from "../assets/images/beardedtruth.png";

function Projects() {
  const myProjects = [
    {
      name: "Unfiltered with Kiran",
      description: "React Native | Wordpress API  Firebase | AWS",
      image: Unfiltered,
      url: "https://apps.apple.com/us/app/unfiltered-with-kiran/id1624502392",
      details:
        "This is a news application on Apple App store and Google Play. Using the Wordpress API this app allows users to conviently view the latest news stories provided by Unfiltered with Kiran.  This app also contains Google Analytics, Firebase and AWS services with push notifications.",
    },
    {
      name: "photoPull",
      description: "Facebook API | ReactJS  Tailwind CSS",
      image: photoPull,
      url: "https://photopull-app.vercel.app/",
      source: "https://github.com/ldallalio/photopull-app",
      details:
        "This is a Facebook API application that allows users to view their photos from Facebook wall and download them to their desktop. This app is built using ReactJS and Tailwind CSS.",
    },
    {
      name: "theBeardedTruth",
      description: "Wordpress",
      image: Bearded,
      url: "https://thebeardedtruth.com/",
      details:
        "Designed and developed a Wordpress website for a local company. This website was built using the WordPress CMS.",
    },
    {
      name: "BigJohnsBurgers",
      description: "Wordpress",
      image: BigJohns,
      url: "https://bigjohnsferriday.com",
      details:
        "Designed and developed a Wordpress website for a local company. This website was built using the WordPress CMS.",
    },
    {
      name: "KleanKingCarpet",
      description: "Wordpress",
      image: KleanKing,
      url: "https://kleankingcarpet.com",
      details:
        "Designed and developed a Wordpress website for a local company. This website was built using the WordPress CMS.",
    },
    {
      name: "UserLoginApp",
      description: "ReactJS | Firebase ",
      image: UserLogin,
      url: "https://loving-sinoussi-b1c103.netlify.app",
      source: "https://github.com/ldallalio/user-login",
      details:
        "This is a user login application that allows users to login to a Firebase database. This app is built using ReactJS and Firebase.",
    },
  ];
  return (
    <div className="projects" id="projects">
      <div className="projectsTitle">
        <h1>Development Projects</h1>
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
                <p>{project.details}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
