export default function navBarReducer(state= {
  icon: {
    src: "../../resources/images/logo_blue_bg_no_oc.png",
    alt: "nav bar icon"
  },
  home:{
    text: "Home",
    link: "/",
    selected: "selected_icon"
  },
  about:{
    text: "About Niall",
    link: "/about",
    selected: ""
  },
  portfolio:{
    text: "Portfolio",
    submenu: {
      igoalo: {
        text: "iGoalo",
        link: "/portfolio/igoalo",
        selected: ""
      },
      ocwebtech: {
        text: "OCWebTech",
        link: "/portfolio/ocwebtech",
        selected: ""
      },
      javascript: {
        text: "Javascript",
        link:"/portfolio/javascript",
        selected: ""
      },
      java: {
        text: "Java",
        link: "portfolio/java",
        selected: ""
      },
      php: {
        text: "PHP",
        link: "portfolio/php",
        selected: ""
      },
      other: {
        text: "Other",
        link: "portfolio/other",
        selected: ""
      },

    },
    existingClass: "dropbtn",
    selected: ""
  },
  languages:{
    text: "Languages",
    link: "/languages",
    selected: ""
  },
  resume:{
    text: "Resume",
    href: "../../resources/files/cv.pdf",
    selected: ""
  },
  thingsilike:{
    text: "Things I like",
    link: "/thingsilike",
    selected: ""
  },
  contact:{
    text: "Contact",
    selected: ""
  },
}, action){

  return state
}
