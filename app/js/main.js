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
      "new": true,
      "featured": true,
      "positionDetails": ["1d ago", "Full Time", "USA only"],
      "role": "Frontend",
      "level": "Senior",
      "languages": [
          "HTML",
          "CSS",
          "JavaScript"],
      "tools": [],
      "logo": "./images/photosnap.svg"
  },
  {
      "id": 2,
      "company": "Manage",
      "position": "Fullstack Developer",
      "new": true,
      "featured": true,
      "positionDetails": [
          "1d ago",
          "Part Time",
          "Remote"
      ],
      "role": "Fullstack",
      "level": "Midweight",
      "languages": ["Python"],
      "tools": ["React"],
      "logo": "./images/manage.svg"
  },
  {
      "id": 3,
      "company": "Account",
      "position": "Junior Frontend Developer",
      "new": true,
      "featured": false,
      "positionDetails": [
          "2d ago",
          "Part Time",
          "USA only"
      ],
      "role": "Frontend",
      "level": "Junior",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"],
      "logo": "./images/account.svg"        
  },
  {
      "id": 4,
      "company": "MyHome",
      "position": "Junior Frontend Developer",
      "new": false,
      "featured": false,
      "positionDetails": [
          "5d ago",
          "Contract",
          "USA only"
      ],
      "role": "Frontend",
      "level": "Junior",
      "languages": ["CSS", "JavaScript"],
      "tools": [],
      "logo": "./images/myhome.svg"
  },
  {
      "id": 5,
      "company": "Loop Studios",
      "position": "Software Engineer",
      "new": false,
      "featured": false,
      "positionDetails": [
          "1w ago",
          "Full Time",
          "Worldwide"
      ],
      "role": "FullStack",
      "level": "Midweight",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"],
      "logo": "./images/loop-studios.svg"
  },
  {
      "id": 6,
      "company": "FaceIt",
      "position": "Junior Backend Developer",
      "new": false,
      "featured": false,
      "positionDetails": [
          "2w ago",
          "Full Time",
          "UK only"
      ],
      "role": "Backend",
      "level": "Junior",
      "languages": ["Ruby"],
      "tools": ["RoR"],
      "logo": "./images/faceit.svg"
  },
  {
      "id": 7,
      "company": "Shortly",
      "position": "Junior Developer",
      "new": false,
      "featured": false,
      "positionDetails": [
          "2w ago",
          "Full Time",
          "Worldwide"
      ],
      "role": "Frontend",
      "level": "Junior",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"],
      "logo": "./images/shortly.svg"
  },
  {
      "id": 8,
      "company": "Insure",
      "position": "Junior Frontend Developer",
      "new": false,
      "featured": false,
      "positionDetails": [
          "2w ago",
          "Full Time",
          "USA only"
      ],
      "role": "Frontend",
      "level": "Junior",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"],
      "logo": "./images/insure.svg"
  },
  {
      "id": 9,
      "company": "Eyecam Co.",
      "position": "Full Stack Engineer",
      "new": false,
      "featured": false,
      "positionDetails": [
          "3w ago",
          "Full Time",
          "Worldwide"
      ],
      "role": "Fullstack",
      "level": "Midweight",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"],
      "logo": "./images/eyecam-co.svg"
  },
  {
      "id": 10,
      "company": "The Air Filter Company",
      "position": "Front-end Dev",
      "new": false,
      "featured": false,
      "positionDetails": [
          "1mo ago",
          "Part Time",
          "Worldwide"
      ],
      "role": "Frontend",
      "level": "Junior",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"],
      "logo": "./images/the-air-filter-company.svg"
  }
]

const getData = data.map(index => {
    row.innerHTML += `<div class="col border_left">

      <img src=${index.logo} alt="${index.company}" />

      <div class="row">

        <div class="col_2">

          <h2>${index.company}
              ${index.new ? `<span>New!</span>` : ``}
              ${index.featured ? `<span class="span_bg">Featured</span>` : ``}
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
              <li class="primary_list_item">${index.role}</li>
              <li class="primary_list_item">${index.level}</li>
              ${index.languages.reduce((acc, curr) => 
                {
                  return acc + `<li class="primary_list_item">${curr}</li>`;
                }, "")}
              ${index.tools.reduce((acc, curr) => 
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