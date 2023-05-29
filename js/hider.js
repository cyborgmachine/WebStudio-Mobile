// id= {webcat1 webcat2 designcat1 designcat2 appcat1 appcat2 appcat3 marketcat1  marketcat2  }
//  можно использовать style.display:

const allBlocks = document.querySelectorAll("li.portfolio-content");
// let showBlocks = allBlocks;

document.getElementById('btnall').onclick = function allBlocks() {
  document.getElementById('appcat1').hidden = false;
  document.getElementById('appcat2').hidden = false;
  document.getElementById('appcat3').hidden = false;
  document.getElementById('designcat1').hidden = false;
  document.getElementById('designcat2').hidden = false;
  document.getElementById('marketcat1').hidden = false;
  document.getElementById('marketcat2').hidden = false;
  document.getElementById('webcat1').hidden = false;
  document.getElementById('webcat2').hidden = false;
}


document.getElementById('btnsite').onclick = function webcat(web) {
  document.getElementById('webcat1').hidden = false;
  document.getElementById('webcat2').hidden = false;
  document.getElementById('appcat1').hidden = true;
  document.getElementById('appcat2').hidden = true;
  document.getElementById('appcat3').hidden = true;
  document.getElementById('designcat1').hidden = true;
  document.getElementById('designcat2').hidden = true;
  document.getElementById('marketcat1').hidden = true;
  document.getElementById('marketcat2').hidden = true;

}


document.getElementById('btnapps').onclick = function appcat(app) {
  document.getElementById('appcat1').hidden = false;
  document.getElementById('appcat2').hidden = false;
  document.getElementById('appcat3').hidden = false;
  document.getElementById('designcat1').hidden = true;
  document.getElementById('designcat2').hidden = true;
  document.getElementById('marketcat1').hidden = true;
  document.getElementById('marketcat2').hidden = true;
  document.getElementById('webcat1').hidden = true;
  document.getElementById('webcat2').hidden = true;

}


document.getElementById('btndesign').onclick = function designcat(design) {
  document.getElementById('designcat1').hidden = false;
  document.getElementById('designcat2').hidden = false;
  document.getElementById('appcat1').hidden = true;
  document.getElementById('appcat2').hidden = true;
  document.getElementById('appcat3').hidden = true;
  document.getElementById('marketcat1').hidden = true;
  document.getElementById('marketcat2').hidden = true;
  document.getElementById('webcat1').hidden = true;
  document.getElementById('webcat2').hidden = true;
}

document.getElementById('btnmarketing').onclick = function marketcat(market) {
  document.getElementById('marketcat1').hidden = false;
  document.getElementById('marketcat2').hidden = false;
  document.getElementById('appcat1').hidden = true;
  document.getElementById('appcat2').hidden = true;
  document.getElementById('appcat3').hidden = true;
  document.getElementById('webcat1').hidden = true;
  document.getElementById('webcat2').hidden = true;
  document.getElementById('designcat1').hidden = true;
  document.getElementById('designcat2').hidden = true;
}





