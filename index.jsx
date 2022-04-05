const textarea = document.getElementById("text-field");
const input = document.getElementById("title");
const input2 = document.getElementById("input2");
const save_btn = document.getElementById("submit");
const color_red = document.getElementById("red");
const color_blue = document.getElementById("blue");
const color_green = document.getElementById("green");
const color_purple = document.getElementById("purple");
const category1 = document.getElementById("s1");
const category2 = document.getElementById("s2");
const category3 = document.getElementById("s3");
const notepad = document.querySelector(".notepad");
const add_btn = document.getElementById("add_note");


let message_text = "Note saved sucessfully";
let appendNote = document.createElement("div");
notepad.appendChild(appendNote);

let cat1 = "Design";
let cat2 = "Networking";
let cat3 = "Student";
const date = new Date(); //getting todays date

const day = date.getDate(); //getting today's full date with getDate function
const month = date.getMonth() + 1; //getting today's month with getMonth function
const year = date.getFullYear();//getting current year in full with getFullYear function
console.log(day); //logging date to the console

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun",
  "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
]; //calling all the months
const d = new Date(); //getting todays date
let fullMonth = monthNames[d.getMonth()]
console.log(fullMonth + ' ' + year); //logging fullmonth and year to the console

var days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat']; //setting the days of the week in an array
var day2 = days[ date.getDay() ];
console.log(day2); //loggging the current day of the week to the console

window.onbeforeunload = function() {
    return true; //prevening page from loading
}
let tdoo = { "Header": textarea.value, "Body": input.value, "category": input2.value, "Dates": day2 + ' ' + fullMonth + ' ' + year} //getting full information from called properties

save_btn.addEventListener("click", () => { //save button onclick
    let tdoo = { "Header": textarea.value, "Body": input.value, "category": input2.value, "Dates": day2 + ' ' + fullMonth + ' ' + year} //getting full information from called properties
        let appendNote = document.createElement("div");
        notepad.appendChild(appendNote);
        console.log(message_text); //custom note message for saving
        setTimeout(() => {
            console.clear(); //clearing the console
        }, 1000);
        setTimeout(() => {
            localStorage.setItem("Storage", JSON.stringify(tdoo)); //setting localstorage and adding a "Storage" item, stringifying the called tdoo element
            var retrieveData = JSON.parse(localStorage.getItem("Storage")); //localstorage now is getting the setItem of tdoo and parsing to the set "Storage" Item of localStorage
            console.log(retrieveData);
            // console.error(tdoo.Body);
            // console.log(textarea.value);
            
            appendNote.innerHTML = `<div class="note-content">
            <div class="notes">
                <div class="note-title" id="ntx">${tdoo.Body}</div>
                <div class="note-pfx">
                    <p class="note-sub">${tdoo.Header}</p>
                </div>
                <div class="c5">
                    <div class="category">
                        <div class="cat" id="category">${tdoo.category}</div>
                    </div>
                    <div class="date-created">
                        <div class="date" id="date">${tdoo.Dates}</div>
                    </div>
                </div>
                <div class="tweet">
                <div class="tweet_content">
                    <a href="https://twitter.com/intent/tweet?url=${tdoo.Body + ' ' + tdoo.Header}" rel="noopener" class="tweet_btn">Tweet <i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            </div>
        </div>`
        }, 2000);
    });

    window.addEventListener("load", () => {
            textarea.value = tdoo.Header;
            input.value = tdoo.Body;
            input2.value = tdoo.category;
            appendNote.innerHTML = `<div class="note-content">
            <div class="notes">
                <div class="note-title" id="ntx">${tdoo.Body}</div>
                <div class="note-pfx">
                    <p class="note-sub">${tdoo.Header}</p>
                </div>
                <div class="c5">
                    <div class="category">
                        <div class="cat" id="category">${tdoo.category}</div>
                    </div>
                    <div class="date-created">
                        <div class="date" id="date">${tdoo.Dates}</div>
                    </div>
                </div>
                <div class="tweet">
                <div class="tweet_content">
                    <a href="https://twitter.com/intent/tweet?url=${tdoo.Body + ' ' + tdoo.Header}" rel="noopener" class="tweet_btn">Tweet <i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
            </div>
        </div>`
        });

const add_color = (cname) => {
  const colors = ["blue", "red", "green", "purple"];
  colors.filter(c => c !== cname).map(c => textarea.classList.remove(c));
  textarea.classList.add(cname);
};

color_red.addEventListener("click", function(event) {
    console.log(event.target);
    add_color("red");
})
color_blue.addEventListener("click", function(event) {
    console.log(event.target);
    add_color("blue");
})
color_green.addEventListener("click", function(event) {
    console.log(event.target);
    add_color("blue");
})
color_purple.addEventListener("click", function(event) {
    console.log(event.target);
    add_color("blue");
})
category1.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat1}`
    input2.value = `${cat1}`;
});
category2.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat2}`
    input2.value = `${cat2}`;
});
category3.addEventListener("click", (e) => {
    console.log(e.target);
    document.getElementById("category").innerHTML = `${cat3}`
    input2.value = `${cat3}`;
});
// categories button to change the note category


add_btn.addEventListener("click", (e) => {
    document.querySelector(".container").style.display = "block";
    document.querySelector(".wrapper").style.display = "none"; //linking to the write note page
});
document.getElementById("return").addEventListener("click", function(event) {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".wrapper").style.display = "block"; //returning back to the main note page
});
