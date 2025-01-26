const allBlocks = document.querySelectorAll("li.portfolio-content");
// let showBlocks = allBlocks;

// Web
const webCats = document.querySelectorAll(".web");
function webCatHide() {
  webCats.forEach((webCat) => {
    webCat.hidden = true;
  });
}
function webCatShow() {
  webCats.forEach((webCat) => {
    webCat.hidden = false;
  });
}
// App
const appCats = document.querySelectorAll(".app");

function appCatHide() {
  appCats.forEach((appCat) => {
    appCat.hidden = true;
  });
}
function appCatShow() {
  appCats.forEach((appCat) => {
    appCat.hidden = false;
  });
}
//Design
const designCats = document.querySelectorAll(".design");

function designCatHide() {
  designCats.forEach((designCat) => {
    designCat.hidden = true;
  });
}
function designCatShow() {
  designCats.forEach((designCat) => {
    designCat.hidden = false;
  });
}
// Market
const marketCats = document.querySelectorAll(".market");
function marketCatHide() {
  marketCats.forEach((marketCat) => {
    marketCat.hidden = true;
  });
}
function marketCatShow() {
  marketCats.forEach((marketCat) => {
    marketCat.hidden = false;
  });
}

document.getElementById("btnall").onclick = function () {
  webCatShow();
  marketCatShow();
  designCatShow();
  appCatShow();
};
document.getElementById("btnsite").onclick = function () {
  webCatShow();
  marketCatHide();
  designCatHide();
  appCatHide();
};
document.getElementById("btnapps").onclick = function () {
  webCatHide();
  marketCatHide();
  designCatHide();
  appCatShow();
};
document.getElementById("btndesign").onclick = function () {
  webCatHide();
  marketCatHide();
  designCatShow();
  appCatHide();
};
document.getElementById("btnmarketing").onclick = function () {
  webCatHide();
  marketCatShow();
  designCatHide();
  appCatHide();
};
