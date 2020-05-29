const form = document.getElementById("form");
const formInput = document.getElementById("form_input");
const button = document.getElementById("button");
const row = document.getElementById("row");

//import * as data from "./data.js";

const data = 
[
  {
      "id": 1,
      "company": "Photosnap",
      "position": "Senior Frontend Developer",
      "positionDetails": [
          "1d ago",
          "Full Time",
          "USA only"
      ],
      "skills": [
          "Frontend",
          "Senior",
          "HTML",
          "CSS",
          "JavaScript"
      ],
      "imgSrc": "./images/photosnap.svg"
  },
  {
      "id": 2,
      "company": "Manage",
      "position": "Fullstack Developer",
      "positionDetails": [
          "1d ago",
          "Part Time",
          "Remote"
      ],
      "skills": [
          "Fullstack",
          "Midweight",
          "Python",
          "React"
      ],
      "imgSrc": "./images/manage.svg"
  },
  {
      "id": 3,
      "company": "Account",
      "position": "Junior Frontend Developer",
      "positionDetails": [
          "2d ago",
          "Part Time",
          "USA only"
      ],
      "skills": [
          "Frontend",
          "Junior",
          "JavaScript",
          "React",
          "Sass"
      ],
      "imgSrc": "./images/account.svg"        
  },
  {
      "id": 4,
      "company": "MyHome",
      "position": "Junior Frontend Developer",
      "positionDetails": [
          "5d ago",
          "Contract",
          "USA only"
      ],
      "skills": [
          "Frontend",
          "Junior",
          "CSS",
          "JavaScript"
      ],
      "imgSrc": "./images/myhome.svg"
  },
  {
      "id": 5,
      "company": "Loop Studios",
      "position": "Software Engineer",
      "positionDetails": [
          "1w ago",
          "Full Time",
          "Worldwide"
      ],
      "skills": [
          "Fullstack",
          "Midweight",
          "JavaScript",
          "Ruby",
          "Sass"
      ],
      "imgSrc": "./images/loop-studios.svg"
  },
  {
      "id": 6,
      "company": "FaceIt",
      "position": "Junior Backend Developer",
      "positionDetails": [
          "2w ago",
          "Full Time",
          "UK only"
      ],
      "skills": [
          "Backend",
          "Junior",
          "Ruby",
          "RoR"
      ],
      "imgSrc": "./images/faceit.svg"
  },
  {
      "id": 7,
      "company": "Shortly",
      "position": "Junior Developer",
      "positionDetails": [
          "2w ago",
          "Full Time",
          "Worldwide"
      ],
      "skills": [
          "Frontend",
          "Junior",
          "HTML",
          "JavaScript",
          "Sass"
      ],
      "imgSrc": "./images/shortly.svg"
  },
  {
      "id": 8,
      "company": "Insure",
      "position": "Junior Frontend Developer",
      "positionDetails": [
          "2w ago",
          "Full Time",
          "USA only"
      ],
      "skills": [
          "Frontend",
          "Junior",
          "JavaScript",
          "Vue",
          "Sass"
      ],
      "imgSrc": "./images/insure.svg"
  },
  {
      "id": 9,
      "company": "Eyecam Co.",
      "position": "Full Stack Engineer",
      "positionDetails": [
          "3w ago",
          "Full Time",
          "Worldwide"
      ],
      "skills": [
          "Fullstack",
          "Midweight",
          "JavaScript",
          "Python",
          "Django"
      ],
      "imgSrc": "./images/eyecam-co.svg"
  },
  {
      "id": 10,
      "company": "The Air Filter Company",
      "position": "Front-end Dev",
      "positionDetails": [
          "1mo ago",
          "Part Time",
          "Worldwide"
      ],
      "skills": [
          "Frontend",
          "Junior",
          "JavaScript",
          "React",
          "Sass"
      ],
      "imgSrc": "./images/the-air-filter-company.svg"

  }
]

const getData = data.map(index => {
    row.innerHTML += `<div class="col border_left">

      <img src=${index.imgSrc} alt="" />

      <div class="row">

        <div class="col_2">

          <h2>${index.company}
            <span>New!</span>
            <span class="span_bg">Featured</span>
          </h2>

          <h1>${index.position}</h1>

          <ul class="list border_bottom">
            ${index.positionDetails.reduce((acc, curr) => 
              {
                return acc + `<li class="list_item">${curr}</li>`;
              }, "")}
          </ul>

        </div> 
      
        <div class="col_2">

          <ul class="list primary_list">
            ${index.skills.reduce((acc, curr) => 
              {
                return acc + `<li class="primary_list_item">${curr}</li>`;
              }, "")}
          </ul>

        </div>

      </div>

    </div>`;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

formInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});

button.addEventListener("click", (e) => {
  formInput.value = "";
});