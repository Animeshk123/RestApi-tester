
const tryNOw = document.querySelector(".button");
const Send = document.querySelector(".requerstBox");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const inputBox = document.querySelector(".apiBox");
const resultBox = document.querySelector(".results");
async function getData () {
    const data = await fetch("users.json");
    const res = await data.json();
    resultBox.innerHTML = "<textarea class='pretag' disabled>" + JSON.stringify(res)+ "</textarea>";
}

getData();


tryNOw.addEventListener("click", () => {
    header.classList.add("headeradd");
    setTimeout(() => {
        header.style.display = "none";
    }, 1000);
    setTimeout(() => {
        main.classList.add("mainadd");
    },1000);

});

Send.addEventListener("click",async () => {
    if(inputBox.value === "") {
      resultBox.innerHTML = `<h4>error invalid url</h4>`;
    }
    else {
      resultBox.innerHTML = "<textarea class='pretag' disabled>" +"loading please wait ..."+ "</textarea>";
      try{
      const data = await fetch(inputBox.value);
      const res = await data.json();
      resultBox.innerHTML = "<textarea class='pretag' disabled>" + JSON.stringify(res)+ "</textarea>";
      }
      catch(err) {
        resultBox.innerHTML = `<h4>error invalid url</h4>`;
      }
    }
})