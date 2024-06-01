export interface TagLinkI {
    name: string
    target: string
    url: string
}

export const tagDataMap: Map<string, TagLinkI> = new Map([
    // languages / libs / frameworks
    ["bootstrap", { name: "Bootsrap", target: "_blank", url: "https://getbootstrap.com/" }],
    ["css", { name: "CSS", target: "_blank", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }],
    ["django", { name: "DJango", target: "_blank", url: "https://www.djangoproject.com/" }],
    ["express", { name: "Express JS", target: "_blank", url: "https://expressjs.com/" }],
    ["graphql", { name: "GraphQL", target: "_blank", url: "https://graphql.org/" }],
    ["googlemaps", { name: "GoogleMaps", target: "_blank", url: "https://developers.google.com/maps" }],
    ["groovy", { name: "Groovy", target: "_blank", url: "https://groovy-lang.org/" }],
    ["html", { name: "HTML", target: "_blank", url: "https://html.spec.whatwg.org/multipage/" }],
    ["javascript", { name: "JavaScript", target: "_blank", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }],
    ["jest", { name: "Jest", target: "_blank", url: "https://jestjs.io/" }],
    ["jquery", { name: "JQuery", target: "_blank", url: "https://jquery.com/" }],
    ["node", { name: "Node JS", target: "_blank", url: "https://nodejs.org/en" }],
    ["nodemailer", { name: "Nodemailer", target: "_blank", url: "https://nodemailer.com/" }],
    ["npm", { name: "NPM", target: "_blank", url: "https://www.npmjs.com/" }],
    ["numpy", { name: "NumPy", target: "_blank", url: "https://numpy.org/" }],
    ["pandas", { name: "Pandas", target: "_blank", url: "https://pandas.pydata.org/" }],
    ["pip", { name: "PIP", target: "_blank", url: "https://pypi.org/" }],
    ["pytest", { name: "pytest", target: "_blank", url: "https://docs.pytest.org/en/" }],
    ["python", { name: "Python", target: "_blank", url: "https://www.python.org/" }],
    ["react", { name: "React JS", target: "_blank", url: "https://react.dev/" }],
    ["redux", { name: "Redux JS", target: "_blank", url: "https://redux.js.org/" }],
    ["sass", { name: "SASS", target: "_blank", url: "https://sass-lang.com/" }],
    ["selenium", { name: "Selenium", target: "_blank", url: "https://www.selenium.dev/" }],
    ["typescript", { name: "TypeScript", target: "_blank", url: "https://www.typescriptlang.org/" }],
    // database
    ["mysql", { name: "MySQL", target: "_blank", url: "https://www.mysql.com/" }],
    ["postgres", { name: "PostreSQL", target: "_blank", url: "https://www.postgresql.org/" }],
    ["sqlite", { name: "SQLite", target: "_blank", url: "https://www.sqlite.org/index.html" }],
    // cloud
    ["aws", { name: "AWS", target: "_blank", url: "https://aws.amazon.com/" }],
    ["heroku", { name: "Heroku", target: "_blank", url: "https://www.heroku.com/" }],
    // misc
    ["babel", { name: "Babel", target: "_blank", url: "https://babeljs.io/" }],
    ["docker", { name: "Docker", target: "_blank", url: "https://www.docker.com/" }],
    ["git", { name: "Git", target: "_blank", url: "https://git-scm.com/" }],
    ["jenkins", { name: "Jenkins", target: "_blank", url: "hhttps://www.jenkins.io" }],
    ["linux", { name: "Linux", target: "_blank", url: "https://www.linux.org/" }],
    ["postman", { name: "Postman", target: "_blank", url: "https://www.postman.com/" }],
    ["webpack", { name: "webpack", target: "_blank", url: "https://webpack.js.org" }],
])
