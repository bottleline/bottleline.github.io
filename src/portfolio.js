/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Bottleline's Portfolio",
    title: "Hi, I'm Kevin Park",
    subTitle: emoji(
        " iOS Development - 앱개발을 좋아하는 개발자 박병선입니다. 끝까지 맡은일을 해결해 내는 태도를 가지고 있습니다."
    ),
    resumeLink:
        "",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/bottleline",
    gmail: "kiser0427@gmail.com",
    gitlab: "https://gitlab.com/kiser37",

    // Instagram and Twitter are also supported in the links!
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "사용가능 언어",
    subTitle: "",
    skills: [
        emoji(
            "⚡ Swift - 중"
        ),
        emoji("⚡ JAVA - 중"),
        emoji(
            "⚡ C/C++ - 하"
        ),
        emoji(
            "⚡ Python - 중"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "Swift",
            fontAwesomeClassname: "fab fa-swift"
        },
        {
            skillName: "JAVA",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "C/C++",
            fontAwesomeClassname: "fab fa-cuttlefish"
        },
        {
            skillName: "Python3",
            fontAwesomeClassname: "fab fa-python"
        },

    ],
    display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [

        {
            schoolName: "Korea University (세종캠퍼스)",
            logo: require("./assets/images/korea.png"),
            subHeader: "컴퓨터융합소프트웨어학과 학사 졸업",
            duration: "September 2011 - June 2017",
            desc: "",
            descBullets: [

            ]
        },

        {
            schoolName: "KXCoding",
            logo: require("./assets/images/kx.png"),
            subHeader: "KXCoding - Mastering iOS 수강",
            duration: "November 2020 - ",
            desc: "",
            descBullets: [

            ]
        },

        {
            schoolName: "FastCampus",
            logo: require("./assets/images/fast.png"),
            subHeader: "FastCampus - 30개프로젝트로배우는iOS앱개발 수강",
            duration: "September 2021 - ",
            desc: "",
            descBullets: [

            ]
        },

    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "iOS 개발(Swift / Storyboard)", //Insert stack or technology you have experience in
            progressPercentage: "70%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Android 개발(JAVA)",
            progressPercentage: "40%"
        },
        {
            Stack: "C/C++ 프로그래밍",
            progressPercentage: "30%"
        },
        {
            Stack: "python 프로그래밍",
            progressPercentage: "30%"
        },
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "소프트웨어/하드웨어 엔지니어",
            company: "Hitech LnH",
            companylogo: require("./assets/images/null.png"),
            date: "July 2017 – Present",
            desc: "소프트웨어 및 어플리케이션 개발, 하드웨어 설계 제작, 3D 도면 설계, 3D 영상제작, 디자인/영업 등",
            descBullets: [
                "2019 기술특허 10-2052992 취득",
            ]
        },

    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "My Project",
    projects: [
        {
            image: require("./assets/images/derma.jpg"),
            projectName: "Derma Manager(iOS/Android)",
            projectDesc: "하드웨어와 블루투스통신이 가능한 피부관리 App",
            footerLink: [
                {
                    name: "Details",
                    url: "https://github.com/bottleline/DermaManager"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/yamaguchi.jpg"),
            projectName: "Yamaguchi Skintest(iOS/Android)",
            projectDesc: "하드웨어와 블루투스통신이 가능한 피부관리 App",
            footerLink: [
                {
                    name: "Details",
                    url: "https://github.com/bottleline/YamaguchiSkinTest"
                }
                //  you can add extra buttons here.
            ]
        },

        {
            image: require("./assets/images/endure.jpg"),
            projectName: "인내 타이머(iOS)",
            projectDesc: "금연, 금주 등의 날짜를 카운트 해주는 App, MQTT 채팅기능 지원",
            footerLink: [
                {
                    name: "Details",
                    url: "https://github.com/bottleline/EndureTimer.git"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/skinmore.jpg"),
            projectName: "스킨모어(iOS)",
            projectDesc: "얼굴의 모공,잡티,주름을 분석하여 매일매일 기록하는 App",
            footerLink: [
                {
                    name: "Details",
                    url: "https://github.com/bottleline/Skinmore.git"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/python2.png"),
            projectName: "Skin Analyzer Python",
            projectDesc: "Python으로 제작한 피부 분석 Flask Server",
            footerLink: [
                {
                    name: "Details",
                    url: "https://github.com/bottleline/SkinAnalyzer_Python.git"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/c.png"),
            projectName: "Skin Analyzer",
            projectDesc: "C++ 로 제작한 피부 분석 프로그램",
            footerLink: [
                {
                    name: "Details",
                    url: "https://github.com/bottleline/SkinAnalyzer.git"
                }
                //  you can add extra buttons here.
            ]
        },
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "2019 기술특허 10-2052992 취득",
            subtitle:
                "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            footerLink: [
                {
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },

    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "박병선",
    number: "010-3458-2367",
    email_address: "kiser37@naver.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
