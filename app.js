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

let message_p = `Main Menu`;
document.getElementById("display_message").innerHTML = `${message_p}`;


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
  message_p = `About Me`;
  document.getElementById("display_message").innerHTML = `${message_p}`;
  popTab6();
  tab_6.append(content_1());
}

function clickTab2 () {
  console.log("tab 2 clicked");
  message_p = `Future Goals`;
  document.getElementById("display_message").innerHTML = `${message_p}`;
  popTab6();
  tab_6.append(content_2());
}

function clickTab3 () {
  console.log("tab 3 clicked");
  message_p = `Past Experience`;
  document.getElementById("display_message").innerHTML = `${message_p}`;

  popTab6();
  tab_6.append(content_3());
}

function clickTab4 () {
  console.log("tab 4 clicked");
  message_p = `Katas and <br>Treasures`;
  document.getElementById("display_message").innerHTML = `${message_p}`;
  popTab6();
  tab_6.append(content_4());
}

function clickTab5 () {
  console.log("tab 5 clicked");
  message_p = `Past Projects`;
  document.getElementById("display_message").innerHTML = `${message_p}`;
  popTab6();
  tab_6.append(content_5());
}

function clickTab6 () {
  document.getElementById("tab_6").innerHTML = "";
  document.getElementById("menu_tabs").innerHTML = "";
  message_p = `Main Menu`;
  document.getElementById("display_message").innerHTML = `${message_p}`;
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

  // ------------------------------------------------------------------------------------------
  // Tab Content String Variables
  // Contents of Tab 6 after Tab 1 has been Clicked
  // content_1 contains the content displayed after 
  // tab_1 is clicked

  // About Me
  function content_1 () {
    const AboutMe = document.createElement('div');
    const paragraph = [];
    const italics = [];
    const myImage = document.createElement('img');
    const h3 = document.createElement('h3');
    myImage.classList.add('my_image');
    myImage.setAttribute("src", "css/images/Omar2.png");
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <7; i++){
      paragraph[i] = document.createElement('p');
    }

    for (i = 0; i <2; i++){
      italics[i] = document.createElement('i');
    }

    // Mannually Populate Paragraph content here...
    h3.append(`Hi there, thanks for visiting my page!`);
    paragraph[0].append(h3);
    paragraph[1].append(`I’m Omar, and I’d love to tell you about myself! I’m a trilingual CrossFit junkie who’s addicted to reading 19th and early 20th century literature! Ok, let me slow down…`);
    paragraph[2].append(`I am a fluent speaker of both Arabic and English, `);
    italics[0].append(`¡y estoy disfrutando mucho aprender y practicar español! Voy a muchos Meetups para converser más con hablantes nativos de español, ¡y quiero quedarme unos meses en Ciudad de México un día, y visitar Colombia y España tambien!`);
    paragraph[2].append(italics[0]);
    paragraph[3].append(`Yes, I have also been referred to as a “fitness freak” and a “health nerd,” but I don't mind being active and `);
    italics[1].append(`haters gonna hate anyway #amirite? `);
    paragraph[3].append(italics[1]);
    paragraph[3].append(`Aside from CrossFit, I also participate in weekly soccer meetups, and will soon be learning either Jiu Jitsu or Muay Thai, so don’t be surprised if I show up limping and bruised when we meet! `);
    paragraph[4].append(`I worked for almost 5½ years in Financial Compliance and Anti-Money Laundering Investigations (AML), but decided to make a career switch to become the one of the best Software Developers out there! I enrolled into the JavaScript Full Stack Software Engineering program at We Can Code IT in Columbus, OH and graduated in December of 2019. I’m excited to continue this journey!`);
    paragraph[5].append(`My portfolio is a mobile-friendly Full Stack Single-Page Application, so don’t hesitate to click around! The code is available on my GitHub page for everyone to check out as well!`);
    paragraph[6].append(`Click anywhere in this box to go back to the main menu.`)
    // Append paragraphs to container here.
    AboutMe.append(myImage)
    for (i in paragraph) {
      AboutMe.append(paragraph[i]);  
    }

    return AboutMe;

  }

  // Future Goals
  function content_2 () {
    const FutureGoals = document.createElement('div');
    const image = [];
    const paragraph = [];
    const bold = [];
    
    // Determine the number of paragraphs in this section here
    for (i = 0; i <8; i++){
      paragraph[i] = document.createElement('p');
    }

    // Words and links written in bold red font
    for (i = 0; i <5; i++){
      bold[i] = document.createElement('b');
    }

    for (i in bold){
      bold[i].classList.add('red_bold');
    }

    // Setting up images
    for (i = 0; i <4; i++){
      image[i] = document.createElement('img');
    }    
    for (i in image){
      image[i].classList.add('image');
    }

    image[0].setAttribute("src", "css/images/capm300x150.JPG");
    image[1].setAttribute("src", "css/images/NLT.jpg");
    image[2].setAttribute("src", "css/images/udemy.png");
    image[3].setAttribute("src", "css/images/WCCI.png");
    // for (i in image){
    //   image[i].append('br');
    // }

    bold[0].append(`We Can Code IT`);
    bold[0].setAttribute('href', 'https://wecancodeit.org');
    // bold[0].setAttribute('target', '_blank');
    // bold[0].onclick;
    bold[1].append(`Next Level Trainings`);
    bold[2].append(`CAPM`);
    bold[3].append(`Udemy.com`);
    bold[4].append(`WellBrained.org`);

    // Mannually Populate Paragraph content here...
    paragraph[0].append(`Hi again!`);
    paragraph[1].append(`I’m glad I still have your attention! As briefly touched on in the About Me section, I’m looking for a fresh start in Tech after having completed a Software Engineering bootcamp with `); 
    paragraph[1].append(bold[0]);
    paragraph[1].append(` and I’m especially glad that the startup scene is on fire here in sweet home Columbus, Ohio! The reason I switched to Tech is because opportunities are booming everywhere, with plenty of room to grow and develop in every way! `);
    paragraph[2].append(`My top career goal is to transition away from the dusty compliance back-offices and to get involved with growing businesses and startups. I seek a career where I can combine my intuitiveness and  creativity with my analytical background in order to build a wonderful, healthy and interconnected world.`);
    paragraph[3].append(`I am keen on personal development and have completed several online and live courses and seminars. I also look forward to finding and working with mentors so that I may pursue my ambitions wisely and healthily. Currently, I am involved with `); 
    paragraph[3].append(bold[1]);
    paragraph[3].append(`, which is helping develop Emotional Intelligence, as well as Leadership, Coaching, and Fundraising skills. Any involvement with `);
    paragraph[3].append(bold[1]);
    paragraph[3].append(` is something I do in my personal time and only serves to enhance my full-time career. I anticipate that completing my trainings will last through the end of April 2020; although, I may opt to volunteer as a coach through the end of 2020 and mentor new oncomers.`);
    paragraph[4].append(`I’m also working towards Project Management credentials, and plan on taking the `);
    paragraph[4].append(bold[2]);
    paragraph[4].append(` (Certified Associate in Project Management) exam around February 2020. I am currently viewing courses on `);
    paragraph[4].append(bold[3]);
    paragraph[4].append(` and studying for the exam, and I feel that it will fit perfectly well with all the Next Level Trainings in order to advance my career.`);
    paragraph[5].append(`During 2020, I look forward to launching my online nonprofit: `);
    paragraph[5].append(bold[4]);
    paragraph[5].append(`, which is intended to help homeschooling parents to tailor an education specifically for their children (based on their local or state requirements) and turn them into healthy, enthusiastic, and entrepreneurial adults who know their purpose in life.`);
    paragraph[6].append(`Finally, my personal and nonprofessional goals include growing my network in the Central Ohio area, move into an apartment in the bustling Riverside drive and E Bridge street area (in Dublin), read more books, and learn improvisational comedy!`);
    paragraph[7].append(`Thanks for your interest! Click anywhere in this box to cycle back to the main menu.`);

    // Append paragraphs to container here.
    // for (i in image) {
    //   FutureGoals.append(image[i]);  
    // }
    for (i in paragraph) {
      FutureGoals.append(paragraph[i]);  
    }

    return FutureGoals;

  }
  
  // Past Experience
  function content_3  () {
    const PastExperience = document.createElement('div');
    const position = [];
    const bold = [];
    const underline = [];
    const bold_underline = [];
    const italics = [];
    const h3 = [];
    const ul = [];
    const li = [];

    // Creating objects to hold positions  here
    for (i = 0; i <14; i++){
      position[i] = document.createElement('div');
      bold[i] = document.createElement('b');
      underline[i] = document.createElement('u');
      bold_underline[i] = document.createElement('a');
      bold_underline[i].append(bold[i]);
      italics[i] = document.createElement('i');
      h3[i] = document.createElement('h3');
      ul[i] = document.createElement('ul');
    }
    
    for (i = 0; i <37; i++){
      li[i] = document.createElement('li');
    }
    
    // Building Past Positions Here
    
    // We Can Code IT
    underline[0].append(`We Can Code IT:`);
    bold_underline[0].append(underline[0]);
    italics[0].append(` Full Stack Developer `);
    h3[0].append(bold_underline[0]);
    h3[0].append(italics[0]);
    h3[0].append(`(September 2019—December 2019)`);
    li[0].append(`Successfully graduated from a five-star Software Engineering boot camp after learning front-end and back-end JavaScript, HTML, CSS and other tools.`);
    li[1].append(`Operated under SCRUM and AGILE environments while utilizing project planning techniques such as Kanban Boards to meet code review deadlines.`);
    ul[0].append(li[0]);
    ul[0].append(li[1]);
    position[0].append(h3[0]);
    position[0].append(ul[0]);

    // Worldpay
    underline[1].append(`Worldpay:`);
    bold_underline[1].append(underline[1]);
    italics[1].append(` Policy and Procedures Consultant `);
    h3[1].append(bold_underline[1]);
    h3[1].append(italics[1]);
    h3[1].append(`(April 2019—August 2019)`);
    li[2].append(`Reviewed, drafted and escalated for approval policies and procedures pertaining to Regulatory Compliance process. `);
    li[3].append(`Connected with internal stakeholders to uncover undocumented internal processes and policies, and drafted Level 2 and Level 3 documentation which express the missing processes and policy in detail.`);
    li[4].append(`Communicated with project managers, team leads and senior analysts in order to draft a handbook intended as introductory training material for new hires within the Regulatory Compliance space.`);
    li[5].append(`Received and resolved outstanding internal audit issues pertaining to Regulatory Compliance, including the re-examination and update of AML transaction monitoring rules; drafting new KYC and CDD policy-related issues, as well as an update of the beneficial owner policy per new FinCEN rules.`);
    ul[1].append(li[2]);
    ul[1].append(li[3]);
    ul[1].append(li[4]);
    ul[1].append(li[5]);
    position[1].append(h3[1]);
    position[1].append(ul[1]);

    // Valley National Bank
    underline[2].append(`Valley National Bank:`);
    bold_underline[2].append(underline[2]);
    italics[2].append(` AML Project Lead—Consultant `);
    h3[2].append(bold_underline[2]);
    h3[2].append(italics[2]);
    h3[2].append(`(April 2018 — September 2018)`);
    li[6].append(`Led and streamlined AML reconciliation project by communicating with management, understanding requirements, identifying targets and deadlines, and acting to accomplish defined goals and objectives by said timeline.`);
    li[7].append(`Disseminated regular project updates to management explaining progress status while ensuring that analysts met expected goals and deadlines.`);
    li[8].append(`Assisted in the implementation and fine-tuning of Actimize to ensure functional operation and smooth transfer to full-time staff.`);
    li[9].append(`Trained and mentored analysts during the conversion and implementation of Actimize as Bank’s new system of AML risk management in replacement of SAS.`);
    li[10].append(`Assigned caseload to analysts, performed quality reviews to ensure timely and accurate completion of reviews.`);
    // li[11].append();
    ul[2].append(li[6]);
    ul[2].append(li[7]);
    ul[2].append(li[8]);
    ul[2].append(li[9]);
    ul[2].append(li[10]);
    position[2].append(h3[2]);
    position[2].append(ul[2]);

    // Standard Chartered Bank
    underline[3].append(`Standard Chartered Bank:`);
    bold_underline[3].append(underline[3]);
    italics[3].append(` Senior AML Quality Assurance Consultant `);
    h3[3].append(bold_underline[3]);
    h3[3].append(italics[3]);
    h3[3].append(`(May 2016 — January 31st, 2018)`);
    li[11].append(`Performed periodic testing on a wide variety of AML/KYC case types to assure that protocols and were followed and that EDD was conducted accurately.`);
    li[12].append(`The QA function encompassed SARs, CARs, Clear & Closed cases, KYC reviews, OFAC reviews, primarily in the correspondent banking sphere.`);
    li[13].append(`Performed quality test to ensure that customer EDD was accurately and securely retained.`);
    li[14].append(`Examined KYC and EDD processes to ensure compliance with guidelines.`);
    li[15].append(`Performed step-by-step audits of sampled AML cases and SARs to ensure compliance with procedures, as well as AML/BSA, OFAC, and FinCEN regulations.`);
    li[16].append(`Substituted as a team-lead of 6 analysts during a transitional period and served as point-of-contact with management to ensure that workflow and feedback were delivered efficiently.`);
    ul[3].append(li[11]);
    ul[3].append(li[12]);
    ul[3].append(li[13]);
    ul[3].append(li[14]);
    ul[3].append(li[15]);
    ul[3].append(li[16]);
    position[3].append(h3[3]);
    position[3].append(ul[3]);

    // K2 Intelligence
    underline[4].append(`K2 Intelligence:`);
    bold_underline[4].append(underline[4]);
    italics[4].append(` Enhanced Due Diligence Consultant `);
    h3[4].append(bold_underline[4]);
    h3[4].append(italics[4]);
    h3[4].append(`(October 2015 — May 2016)`);
    li[17].append(`Investigated and monitored high-risk customers with low-transparency accounts, such as prepaid, temporary, or disposable card accounts.`);
    li[18].append(`Analyzed risk levels and conducted KYC/EDD reviews in preparation for potential suspicious activity escalation.`);
    li[19].append(`Conducted extensive KYC and EDD on customers with minimal information on record.`);
    li[20].append(`Demonstrated an in-depth understanding of EDD risks across all business units through application of knowledge based analysis and decision making.`);
    ul[4].append(li[17]);
    ul[4].append(li[18]);
    ul[4].append(li[19]);
    ul[4].append(li[20]);
    position[4].append(h3[4]);
    position[4].append(ul[4]);

    // Discover Financial Services
    underline[5].append(`Discover Financial Services:`);
    bold_underline[5].append(underline[5]);
    italics[5].append(` Anti Money Laundering Investigator `);
    h3[5].append(bold_underline[5]);
    h3[5].append(italics[5]);
    h3[5].append(` (April 2015 — September 2015)`);
    li[21].append(`Documented and verified complete SARs investigations and narratives in accordance with strict regulatory requirements and deadlines.`);
    li[22].append(`Collaborated with Management to build AML, KYC, and EDD recordkeeping procedures while responding with feedback to patch defects.`);
    li[23].append(`Conducted Enhanced Due Diligence (EDD) and OFAC checks by independently researching high-risk customer’s using tools such as World Check/CLEAR and Lexis Nexis.`)
    ul[5].append(li[21]);
    ul[5].append(li[22]);
    ul[5].append(li[23]);
    position[5].append(h3[5]);
    position[5].append(ul[5]);

    // JPMorgan Chase
    underline[6].append(`JPMorgan Chase:`);
    bold_underline[6].append(underline[6]);
    italics[6].append(` Anti Money Laundering Investigator `);
    h3[6].append(bold_underline[6]);
    h3[6].append(italics[6]);
    h3[6].append(` (February 2014 — April 2015)`);
    li[24].append(`Conducted AML investigations in accordance with BSA and USA PATRIOT Act to assess risk across various LOBs with timely submission of SARs to FinCEN.`);
    li[25].append(`Trained incoming AML Investigators in risk assessment, AML typologies, investigative procedure, and OFAC standards.`);
    li[26].append(`Developed a strong understanding of AML typologies, such as Trade-Based Money Laundering, Grey Market Exports, and Currency Reporting Evasion Typologies.`);
    li[27].append(`Defined and implemented procedural controls to enhance SAR quality.`);
    li[28].append(`Conducted KYC/EDD case remediations to ensure accurate retention of customer information.`);
    ul[6].append(li[24]);
    ul[6].append(li[25]);
    ul[6].append(li[26]);
    ul[6].append(li[27]);
    ul[6].append(li[28]);
    position[6].append(h3[6]);
    position[6].append(ul[6]);

    //Earlier Experience
    underline[7].append(`Earlier Experience:`);
    bold_underline[7].append(underline[7]);
    italics[7].append(` Various Post-College Internships and Roles `);
    h3[7].append(bold_underline[7]);
    h3[7].append(italics[7]);
    h3[7].append(` (January 2012 — December 2013)`);
    li[29].append(`Alliance Data: Enterprise Risk Consultant (Oct 2013—Dec 2013)`);
    li[30].append(`Huntington Bank: Commercial Credit Analyst—Intern (Aug 2012—May 2013)`);
    li[31].append(`The Citizens League of Greater Cleveland: Accounting Internship (Jan 2012—Dec 2013)`);
    li[32].append(`Nelligan Sports Marketing: Customer Relations Intern (Jan 2012—May 2012)`);
    ul[7].append(li[29]);
    ul[7].append(li[30]);
    ul[7].append(li[31]);
    ul[7].append(li[32]);
    position[7].append(h3[7]);
    position[7].append(ul[7]);

    //Education
    underline[8].append(`Education:`);
    bold_underline[8].append(underline[8]);
    // italics[7].append(` Various Post-College Internships and Roles `);
    h3[8].append(bold_underline[8]);
    h3[8].append(italics[8]);
    // h3[7].append(` (January 2012 — December 2013)`);
    li[33].append(`We Can Code IT: Certificate of Software Engineering - Columbus, OH (Graduated: December 2019)`);
    li[34].append(`Cleveland State University Master’s Degree (MBA, Finance) Cleveland, OH (Graduated: August 2012 )`);
    li[35].append(`University of Jordan Bachelor’s Degree, Amman, Jordan (Graduated: June 2010)`);
    ul[8].append(li[33]);
    ul[8].append(li[34]);
    ul[8].append(li[35]);
    position[8].append(h3[8]);
    position[8].append(ul[8]);


    // Append paragraphs to container here.
    for (i in position) {
      PastExperience.append(position[i]);  
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
    const position = [];
    const bold = [];
    const underline = [];
    const bold_underline = [];
    const image = [];
    const extra_image = []
    const h4 = [];
    const ul = [];
    const li = [];
    const paragraph = [];

    // Creating objects to hold positions  here
    for (i = 0; i <2; i++){
      position[i] = document.createElement('div');
      bold[i] = document.createElement('b');
      underline[i] = document.createElement('u');
      bold_underline[i] = document.createElement('a');
      bold_underline[i].append(bold[i]);
      image[i] = document.createElement('img');
      extra_image[i] = document.createElement('img');
      image[i].setAttribute('src', 'css/images/image['+i+'].JPG');
      extra_image[i].setAttribute('src', 'css/images/extra_image['+i+'].JPG');
      image[i].classList.add('project_image');
      extra_image[i].classList.add('project_image');
      h4[i] = document.createElement('h3');
      ul[i] = document.createElement('ul');
      li[i] = document.createElement('li');
      paragraph[i] = document.createElement('p');
    }

    // Mannually Populate Paragraph content here...
    h4[0].append(`Bring It!`);
    h4[1].append(`Black Jack: AWSM`);

    paragraph[0].append(`The ultimate party planner! Bring It! lets you create and manage what you need for your party to be a blast. Make items and assign them to an attendee, all in one place! No more scrolling the comments section. It\'s your party and they can bring want they want too. Users can assign themselves unclaimed items or create their own self-assigned item. Never again will you have competing potato salads in your future parties because everything will be brought! `);
    paragraph[1].append(`My dear friends, Black Jack doesn\'t get any more A.W.S.M. than this! Redifining awesomeness is the Rambo Unicorn in top-right corner, as well as a fully functioning, single-player game of Black Jack! Although there is a version of Black Jack coming my Katas and Treasures section, A.W.S.M. is reserved for those who are keenly interested and ask nicely!`);
    
  


    for (i = 0; i <2; i++){
      // li[i].append(h4[i])
      // ul[i].append(li[i]);
      underline[i].append(h4[i]);
      bold_underline[i].append(underline[i]);
      // position[i].append(bold_underline[i]);
      SampleProjects.append(bold_underline[i]);
      SampleProjects.append(paragraph[i]);
      SampleProjects.append(image[i]);
      SampleProjects.append(extra_image[i]);
    }
    

    return SampleProjects;
  }




