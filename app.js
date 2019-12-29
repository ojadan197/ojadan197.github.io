//----- Master Version
// Creating Menu Tab Elements Here

const tab = document.createElement("div");
tab.classList.add("tab-container__colorized");
// tab.append("Hello World")

const tab_1  =  document.createElement("div");
tab_1.classList.add("tab-container__colorized");
tab_1.append("About \n Me");
tab_1.id = 'tab_1';

const tab_2  = document.createElement("div");
tab_2.classList.add("tab-container__colorized");
tab_2.append("Future Goals");
tab_2.id = 'tab_2';

const tab_3  = document.createElement("div");
tab_3.classList.add("tab-container__colorized");
tab_3.append("Past Experience");
tab_3.id = 'tab_3';

const tab_4  = document.createElement("div");
tab_4.classList.add("tab-container__colorized");
tab_4.append("Katas and Treasures");
tab_4.id = 'tab_4';

const tab_5  = document.createElement("div");
tab_5.classList.add("tab-container__colorized");
tab_5.append("Sample Projects");
tab_5.id = 'tab_5';

const tab_6 = document.createElement("div");
tab_6.classList.add("tab-container__colorized__result");
tab_6.id = 'tab_6';



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




// -------------- Master Version






// Tab Manipulation
// Populating the Main Menu of Tabs
function populate_tabs() {
    const menu_tabs = document.querySelector("#menu_tabs");
    menu_tabs.append(tab_1);
    menu_tabs.append(tab_2);
    menu_tabs.append(tab_3);
    menu_tabs.append(tab_4);
    menu_tabs.append(tab_5);
  }





  //Tab Content String Variables
  //Contents of Tab 6 after Tab 1 has been Clicked
  const content_1 = `This is the about me section,
   currently under construction`;
  
  const content_2 = `This is the content of Block 2 -- Future Goals`;
  const content_3 = `This is the content of Block 3 -- Past Experience`;
  const content_4 = `This is the content of Block 4 -- Katas and Treasures`;
  const content_5 = `This is the content of Block 5 -- Sample Projects`;




