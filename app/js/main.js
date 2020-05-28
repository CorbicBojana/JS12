const form = document.getElementById("form");
const formInput = document.getElementById("form_input");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
    e.preventDefault();
});

formInput.addEventListener("change", (e) => {
    console.log(e.target.value);
});

button.addEventListener("click", (e) => {
    formInput.value = "";
});

const data = [
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
    }
];

const row = document.getElementById("row");

const getData = data.map(index => {
    console.log(index)
    row.innerHTML = `
    <div class="col border_left">

      <img src=${index.imgSrc} alt="" />

      <div class="row">

        <div class="col_2">

          <h2>${index.company}
            <span>New!</span>
            <span class="span_bg">Featured</span>
          </h2>

          <h1>${index.position}</h1>

          <ul class="list border_bottom">
            ${index.positionDetails.map(item => `<li class="list_item">${item}</li>`)}
          </ul>

        </div> 
      
        <div class="col_2">

          <ul class="list primary_list">
            ${index.skills.map(item => `<li class="primary_list_item">${item}</li>`)}
          </ul>

        </div>

      </div>

    </div>`
});