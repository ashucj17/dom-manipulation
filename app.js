function addLanguage(langName) {
  const firstLang = document.createElement("li");
  firstLang.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(firstLang);
}
addLanguage("Python");

function addOptiLanguage(langName) {
  const secondLang = document.createElement("li");
  secondLang.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(secondLang);
}
addOptiLanguage("C#");
addOptiLanguage("Java");

// Edit

const thirdLang = document.querySelector("li:nth-child(2)");
console.log(thirdLang);
// thirdLang.innerHTML = ".Net"; /* NOt optimized way */
const newLi = document.createElement("li");
newLi.textContent = ".Net";
thirdLang.replaceWith(newLi);

// edit

const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = "<li>TypeScript</li>";

//remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
