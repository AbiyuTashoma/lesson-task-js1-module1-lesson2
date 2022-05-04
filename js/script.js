// Question 1

var headerH3 = document.querySelector("h3");
headerH3.innerHTML = "Hello";

// Question 2
var headerH4All = document.querySelectorAll("h4");
headerH4All.forEach(function(headerH4){
    headerH4.style.marginBottom = "-20px";
});

// Question 3
var headerH4Two = document.querySelector(".two");
headerH4Two.style.backgroundColor = "red";

// Question 4
var paragraphSectionOne = document.querySelector(".section.one");
paragraphSectionOne.style.fontSize ="24px";
paragraphSectionOne.style.color = "blue";

// Question 5
var paragraphSectionThree = document.querySelector(".section.three");
paragraphSectionThree.innerHTML = "<span>" + paragraphSectionThree.innerText + "</span>";

// Question 6
var paragraphContainer = document.querySelector(".content");
paragraphContainer.innerHTML += "<p>Third paragraph</p>";

// Question 7
const contentParagraph = document.querySelectorAll(".content p");
contentParagraph.forEach(function(paragraph){
    paragraph.className ="content-item";
});

// Question 8
const ulList = document.getElementById("services");
ulList.innerHTML = `<li>New list item</li>` + ulList.innerHTML;

// Question 9
ulList.className = "";

// Question 10
const hideElement = document.getElementById("hide");
hideElement.hidden = "true";