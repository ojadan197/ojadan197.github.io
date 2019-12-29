populate_tabs();

  tab_1.onclick = clickTab1;
  tab_2.onclick = clickTab2;
  tab_3.onclick = clickTab3;
  tab_4.onclick = clickTab4;
  tab_5.onclick = clickTab5;
  tab_6.onclick = clickTab6;



function clickTab1 () {
  console.log("tab 1 clicked");
  popTab6();
  tab_6.append(content_1);
}

function clickTab2 () {
  console.log("tab 2 clicked");
  popTab6();
  tab_6.append(content_2);
}

function clickTab3 () {
  console.log("tab 3 clicked");
  popTab6();
  tab_6.append(content_3);
}
function clickTab4 () {
  console.log("tab 4 clicked");
  popTab6();
  tab_6.append(content_4);
}

function clickTab5 () {
  console.log("tab 5 clicked");
  popTab6();
  tab_6.append(content_5);
}

function clickTab6 () {
  document.getElementById("tab_6").innerHTML = "";
  document.getElementById("menu_tabs").innerHTML = "";
  populate_tabs();
    
}

function popTab6 () {
  document.getElementById("menu_tabs").innerHTML = "";
  menu_tabs.append(tab_6)
}
