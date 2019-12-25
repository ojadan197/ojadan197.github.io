document.getElementById("tab_1").onclick = clickTab1;
document.getElementById("tab_2").onclick = clickTab2;
document.getElementById("tab_3").onclick = clickTab3;
document.getElementById("tab_4").onclick = clickTab4;
document.getElementById("tab_5").onclick = clickTab5;
document.getElementById("tab_6").onclick = clickTab6;

function clickTab1 () {
  document.getElementById("menu-tabs").innerHTML = "";
  document.getElementById("tab_6").innerHTML = "The Page is still <br> under construction";
}

function clickTab2 () {
  document.getElementById("menu-tabs").innerHTML = "";
  document.getElementById("tab_6").innerHTML = "My Name is Omar";
}

function clickTab3 () {
  document.getElementById("menu-tabs").innerHTML = "";
  document.getElementById("tab_6").innerHTML = '<div color="red">Howdy</div>';
}
function clickTab4 () {
  document.getElementById("menu-tabs").innerHTML = "";
  document.getElementById("tab_6").innerHTML = Date();
}

function clickTab5 () {
  document.getElementById("menu-tabs").innerHTML = "";
  document.getElementById("tab_6").innerHTML = "Howdy";
}

function clickTab6 () {
  document.getElementById("result-tab").innerHTML = "";
  document.getElementById("menu-tabs").innerHTML = `<div class="tab-container__colorized" id='tab_1'>About <br> Me </div>
  <div class="tab-container__colorized" id='tab_2'>Future <br> Goals</div>
  <div class="tab-container__colorized" id='tab_3'>Past <br> Experience</div>
  <div class="tab-container__colorized" id='tab_4'>Katas and Treasures</div>
  <div class="tab-container__colorized" id='tab_5'>Sample <br> Projects</div>`;
}
