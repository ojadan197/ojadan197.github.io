// Creating Menu Tab Elements Here

const tab = document.createElement("div");
tab.classList.add("tab-container__colorized");

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


// Environment Manipulation Here

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
  tab_6.append(content_1());
}

function clickTab2 () {
  console.log("tab 2 clicked");
  popTab6();
  tab_6.append(content_2());
}

function clickTab3 () {
  console.log("tab 3 clicked");
  popTab6();
  tab_6.append(content_3());
}

function clickTab4 () {
  console.log("tab 4 clicked");
  popTab6();
  tab_6.append(content_4());
}

function clickTab5 () {
  console.log("tab 5 clicked");
  popTab6();
  tab_6.append(content_5());
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



// ---------------------------------------------- //
// -------------- Tab Manipulation -------------- //
// ---------------------------------------------- //


// Populating the Main Menu of Tabs
function populate_tabs() {
    const menu_tabs = document.querySelector("#menu_tabs");
    menu_tabs.append(tab_1);
    menu_tabs.append(tab_2);
    menu_tabs.append(tab_3);
    menu_tabs.append(tab_4);
    menu_tabs.append(tab_5);
  }

  // Tab Content String Variables
  // Contents of Tab 6 after Tab 1 has been Clicked
  // content_1 contains the content displayed after 
  // tab_1 is clicked

  // About Me
  function content_1 () {
    const AboutMe = document.createElement('div');
    const paragraph = [];
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <3; i++){
      paragraph[i] = document.createElement('p');
    }

    // Mannually Populate Paragraph content here...
    paragraph[0].append(`This Paragraph 1 of the About Me section, currently under construction`)
    paragraph[1].append('Paragraph 2 is way better than paragraph 1 I could repeat it twice')
    paragraph[2].append('But Paragraph 3 is the best parargraph of all!!!!!!!')
    
    // Append paragraphs to container here.
    for (i in paragraph) {
      AboutMe.append(paragraph[i]);  
    }

    return AboutMe;

  }

  // Future Goals
  function content_2 () {
    const FutureGoals = document.createElement('div');
    const paragraph = [];
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <3; i++){
      paragraph[i] = document.createElement('p');
    }

    // Mannually Populate Paragraph content here...
    paragraph[0].append(`This Paragraph 1 of the Future Goals section, currently under construction`)
    paragraph[1].append('Paragraph 2 is way better than paragraph 1 I could repeat it twice')
    paragraph[2].append('But Paragraph 3 is the best parargraph of all!!!!!!!')
    
    // Append paragraphs to container here.
    for (i in paragraph) {
      FutureGoals.append(paragraph[i]);  
    }

    return FutureGoals;

  }
  
  // Past Experience
  function content_3  () {
    const PastExperience = document.createElement('div');
    const paragraph = [];
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <3; i++){
      paragraph[i] = document.createElement('p');
    }

    // Mannually Populate Paragraph content here...
    paragraph[0].append(`This Paragraph 1 of the Future Goals section, currently under construction`)
    paragraph[1].append('Paragraph 2 is way better than paragraph 1 I could repeat it twice')
    paragraph[2].append('But Paragraph 3 is the best parargraph of all!!!!!!!')
    
    // Append paragraphs to container here.
    for (i in paragraph) {
      PastExperience.append(paragraph[i]);  
    }

    return PastExperience;

  }

  // Katas And Treasures
  function content_4  () {
    const KatasAndTreasures = document.createElement('div');
    const Break = document.createElement('p');

    const paragraph = [];
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <4; i++){
      paragraph[i] = document.createElement('p');
      
    }

    // Mannually Populate Paragraph content here...
    paragraph[0].append(`Hey there! Thanks for coming to check out some cool stuff I've woked on! Coming very soon is:`);
    paragraph[1].append(`Black Jack - a very simple and light version that's mobile-friendly and easy to play on the go!`);
    paragraph[2].append(`Tic-Tack-Toe - Yep! The fun never ends here! Do you think you can beat the computer?`);
    paragraph[3].append(`Click anywhere to go back`);
    
    // Append paragraphs to container here.
    for (i in paragraph) {
      KatasAndTreasures.append(paragraph[i]);
    }

    return KatasAndTreasures;
  }
  
  // Sample Projects
  function content_5 () {
    const SampleProjects = document.createElement('div');
    const paragraph = [];
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <3; i++){
      paragraph[i] = document.createElement('p');
    }

    // Mannually Populate Paragraph content here...
    paragraph[0].append(`This Paragraph 1 of the Sample Projects section, currently under construction`)
    paragraph[1].append('Paragraph 2 is way better than paragraph 1 I could repeat it twice')
    paragraph[2].append('But Paragraph 3 is the best parargraph of all!!!!!!!')
    
    // Append paragraphs to container here.
    for (i in paragraph) {
      SampleProjects.append(paragraph[i]);  
    }

    return SampleProjects;
  }




