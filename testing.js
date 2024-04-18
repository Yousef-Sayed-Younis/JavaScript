const user = {
  username: "Yousef",
  city: "Cairo",
  skills: {
    html: "80%",
    css: "85%",
    js: {
      one: "Vuejs",
      two: "Reactjs",
      three: "Angularjs"
    }
  }
};

const { username, city, skills: { html, css, js: { one, two, three } } } = user;

console.log(`My name is ${username}, and I Live in ${city}.
My Html Skills Progress is ${html}, and CSS is ${css}
I have knowledge in Js Framworks Like ${one}, ${two}, ${three}`)
