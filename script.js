document.addEventListener("DOMContentLoaded", () => {
  updateExperiences("wondertech");
});

const experienceList = document.querySelector("#exp-list");
const wonderTechBtn = document.querySelector("#exp-btn-wondertech");
const syslabBtn = document.querySelector("#exp-btn-syslab");
const artisticBtn = document.querySelector("#exp-btn-artistic");

const experiences = {
  wondertech: {
    title: "Sr. Full-Stack Developer & AR Developer",
    duration: "[1yr 6mon]",
    experiences: [
      "Designed and deployed interactive AR solutions for brands such as Pepsi, Tresemme, Mondelez and Bank Alfalah leading to a 40% uplift in user engagement. ",
      "Created a gamified training experience for SINDBAD DRIVING SCHOOL using Unity and Node.js, improving learner engagement with real-time interaction for 500+ users. ",
      "Worked on a variety of full-stack web and native applications, including EdTech platforms, AR game apps using Electron.js, and mobile apps built with Ionic — delivering solutions for brands such as Sindbad, OnderLand, and Tamyoz. ",
    ],
    technologies: [
      "React",
      "Node",
      "Express",
      "Sequelize",
      "MySql",
      "Electron",
      "MUI",
      "AntD",
      "Tailwind",
      "Electron",
      "Ionic",
      "Unity",
      "LensStudio",
      "Postman",
      "ApiDog",
    ],
  },
  syslab: {
    title: "MERN Stack Developer",
    duration: "[8mon]",
    experiences: [
      "Worked on 2 products as a full-stack developer while handling hosting and deployment ensuring seamless experience.",
      "Refactored a legacy MERN codebase, improving scalability, maintainability, and version control practices with Git.",
      "Enhanced UI/UX across key product views through iterative design updates based on feedback and usability testing in agile sprints.",
    ],
    technologies: [
      "React",
      "Node",
      "Express",
      "Sequelize",
      "MySql",
      "MUI",
      "Postman",
    ],
  },
  artistic: {
    title: "Software Engineer Intern",
    duration: "[2mon]",
    experiences: [
      "Supported the launch of an internal SCADA application for process automation in collaboration with senior engineers.",
      "Built foundational skills in software architecture and industrial-grade development environments during internship.",
    ],
    technologies: ["React", "HTML", "CSS", "JS"],
  },
};

wonderTechBtn.addEventListener("click", () => {
  updateExperiences("wondertech");
  wonderTechBtn.classList.add("exp-btn-selected");
  syslabBtn.classList.remove("exp-btn-selected");
  artisticBtn.classList.remove("exp-btn-selected");
});
syslabBtn.addEventListener("click", () => {
  updateExperiences("syslab");
  wonderTechBtn.classList.remove("exp-btn-selected");
  syslabBtn.classList.add("exp-btn-selected");
  artisticBtn.classList.remove("exp-btn-selected");
});
artisticBtn.addEventListener("click", () => {
  updateExperiences("artistic");
  wonderTechBtn.classList.remove("exp-btn-selected");
  syslabBtn.classList.remove("exp-btn-selected");
  artisticBtn.classList.add("exp-btn-selected");
});

document.querySelector("#resume").addEventListener("click", () => {
  window.open("./Images/UmairAbbasResume.pdf", "_blank");
})

function updateExperiences(expKey) {
  document.querySelector(
    "#exp-title"
  ).innerHTML = `${experiences[expKey].title} <span id="exp-duration" class="light">${experiences[expKey].duration}</span>`;
  document.querySelector("#exp-list").innerHTML = "";
  document.querySelector(".skill-btns").innerHTML = "";

  for (let i = 0; i < experiences[expKey].experiences.length; i++) {
    let li = document.createElement("li");
    li.classList.add("exp-list-item");
    li.textContent = experiences[expKey].experiences[i];
    document.querySelector("#exp-list").appendChild(li);
  }

  for (let i = 0; i < experiences[expKey].technologies.length; i++) {
    let div = document.createElement("div");
    div.classList.add("skill-btn");
    div.textContent = experiences[expKey].technologies[i];
    document.querySelector("#skill-btns").appendChild(div);
  }
}
