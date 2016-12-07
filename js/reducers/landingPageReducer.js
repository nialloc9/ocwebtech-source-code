export default function landingPage(state= {
  fifthblock: {
    images: {
      first: {
        link: "/portfolio/igoalo",
        src: "../../resources/images/projects/igoalo/home_page.png",
        alt: "link to igoalo project",
      },
      second: {
        link: "/portfolio/ocwebtech",
        src: "../../resources/images/projects/ocwebtech/about.png",
        alt: "link to ocwebtech project",
      },
      third: {
        link: "/portfolio/javascript",
        src: "../../resources/images/projects/ListMaker/addAnItem.png",
        alt: "link to javascript projects",
      },
      fourth: {
        link: "/portfolio/java",
        src: "../../resources/images/projects/JavaGame/newGame.png",
        alt: "link to java projects",
      },
      fifth: {
        link: "/portfolio/php",
        src: "../../resources/images/projects/captcha/checkBtnInputWrongNumber.png",
        alt: "link to php projects",
      },
      sixth: {
        link: "/portfolio/other",
        src: "../../resources/images/projects/fullScreenLanding/location.png",
        alt: "link to other projects",
      },
    }
  }
}, action){
  return state
}
