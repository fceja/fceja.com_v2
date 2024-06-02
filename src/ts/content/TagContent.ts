export interface TagLinkI {
    name: string
    target: string
    url: string
}

export const tagDataMap: Map<string, TagLinkI> = new Map([
    // languages / libs / frameworks
    ["aem", { name: "Adobe Experience Manager", target: "_blank", url: "https://business.adobe.com/products/experience-manager/adobe-experience-manager.html" }],
    ["appium", { name: "Appium", target: "_blank", url: "https://appium.io/docs/en/latest/" }],
    ["bootstrap", { name: "Bootstrap", target: "_blank", url: "https://getbootstrap.com/" }],
    ["c++", { name: "C++", target: "_blank", url: "https://cplusplus.com/" }],
    ["css", { name: "CSS", target: "_blank", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" }],
    ["django", { name: "DJango", target: "_blank", url: "https://www.djangoproject.com/" }],
    ["djangoCrispyForms", { name: "DJango Crispy Forms", target: "_blank", url: "https://django-crispy-forms.readthedocs.io/en/latest/" }],
    ["express", { name: "Express JS", target: "_blank", url: "https://expressjs.com/" }],
    ["graphql", { name: "GraphQL", target: "_blank", url: "https://graphql.org/" }],
    ["golang", { name: "Go", target: "_blank", url: "https://go.dev/" }],
    ["googlemaps", { name: "GoogleMaps", target: "_blank", url: "https://developers.google.com/maps" }],
    ["groovy", { name: "Groovy", target: "_blank", url: "https://groovy-lang.org/" }],
    ["html", { name: "HTML", target: "_blank", url: "https://html.spec.whatwg.org/multipage/" }],
    ["java", { name: "Java", target: "_blank", url: "https://www.java.com/en/" }],
    ["javaFX", { name: "JavaFX", target: "_blank", url: "https://openjfx.io/" }],
    ["javascript", { name: "JavaScript", target: "_blank", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }],
    ["jest", { name: "Jest", target: "_blank", url: "https://jestjs.io/" }],
    ["jira", { name: "Jira", target: "_blank", url: "https://www.atlassian.com/software/jira" }],
    ["jquery", { name: "JQuery", target: "_blank", url: "https://jquery.com/" }],
    ["magnolia", { name: "Magnolia CMS", target: "_blank", url: "https://www.magnolia-cms.com/" }],
    ["maven", { name: "Maven", target: "_blank", url: "https://maven.apache.org/" }],
    ["node", { name: "Node JS", target: "_blank", url: "https://nodejs.org/en" }],
    ["nodemailer", { name: "Nodemailer", target: "_blank", url: "https://nodemailer.com/" }],
    ["npm", { name: "NPM", target: "_blank", url: "https://www.npmjs.com/" }],
    ["numpy", { name: "NumPy", target: "_blank", url: "https://numpy.org/" }],
    ["pandas", { name: "Pandas", target: "_blank", url: "https://pandas.pydata.org/" }],
    ["pip", { name: "PIP", target: "_blank", url: "https://pypi.org/" }],
    ["pytest", { name: "pytest", target: "_blank", url: "https://docs.pytest.org/en/" }],
    ["python", { name: "Python", target: "_blank", url: "https://www.python.org/" }],
    ["react", { name: "React JS", target: "_blank", url: "https://react.dev/" }],
    ["reactBootstrap", { name: "React Bootstrap", target: "_blank", url: "https://react-bootstrap.netlify.app/" }],
    ["redux", { name: "Redux JS", target: "_blank", url: "https://redux.js.org/" }],
    ["sass", { name: "SASS", target: "_blank", url: "https://sass-lang.com/" }],
    ["selenium", { name: "Selenium", target: "_blank", url: "https://www.selenium.dev/" }],
    ["typescript", { name: "TypeScript", target: "_blank", url: "https://www.typescriptlang.org/" }],
    ["theTradeDesk", { name: "The Trade Desk", target: "_blank", url: "https://www.thetradedesk.com/us" }],
    // database
    ["mysql", { name: "MySQL", target: "_blank", url: "https://www.mysql.com/" }],
    ["postgres", { name: "PostgreSQL", target: "_blank", url: "https://www.postgresql.org/" }],
    ["sqlite", { name: "SQLite", target: "_blank", url: "https://www.sqlite.org/index.html" }],
    // cloud
    ["aws", { name: "AWS", target: "_blank", url: "https://aws.amazon.com/" }],
    ["heroku", { name: "Heroku", target: "_blank", url: "https://www.heroku.com/" }],
    // misc
    ["babel", { name: "Babel", target: "_blank", url: "https://babeljs.io/" }],
    ["docker", { name: "Docker", target: "_blank", url: "https://www.docker.com/" }],
    ["git", { name: "Git", target: "_blank", url: "https://git-scm.com/" }],
    ["jenkins", { name: "Jenkins", target: "_blank", url: "hhttps://www.jenkins.io" }],
    ["jwt", { name: "JWT", target: "_blank", url: "https://jwt.io/" }],
    ["linux", { name: "Linux", target: "_blank", url: "https://www.linux.org/" }],
    ["postman", { name: "Postman", target: "_blank", url: "https://www.postman.com/" }],
    ["webpack", { name: "webpack", target: "_blank", url: "https://webpack.js.org" }],
])
