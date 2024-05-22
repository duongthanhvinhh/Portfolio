import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Foden",
    lastName: "Duong",
    // initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a QA Automation Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in VN'
        },
        {
            emoji: "💼",
            text: "Automation Tester at FPT Software"
        },
        {
            emoji: "📧",
            text: "vinhdtvt1999@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Foden. I'm a QA automation engineer for FPT Software. I studied Eletronic and Telecommunication at HCM University of Transport, My slogan is 'Life is short. Don't be lazy. ' ",
    skills:
        {
            proficientWith: ['java', 'selenium', 'rest-assured', 'github', 'gitlab/gitlab-ci', 'jenkins', 'html/css', 'sql db'],
            exposedTo: ['javascript', 'playwright']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'playing soccer',
            emoji: '🎭'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Selenium Java with TestNG",
            live: "https://github.com/duongthanhvinhh/SeleniumJavaTestNG", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/duongthanhvinhh/SeleniumJavaTestNG", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Playwright with Typescript",
            live: "https://github.com/duongthanhvinhh/PlaywrightTS",
            source: "https://github.com/duongthanhvinhh/PlaywrightTS",
            image: mock2
        },
        {
            title: "RestAssured API Automation",
            live: "https://github.com/duongthanhvinhh/CommonRestAPIAutomationFramework",
            source: "https://github.com/duongthanhvinhh/CommonRestAPIAutomationFramework",
            image: mock3
        }
    ]
}