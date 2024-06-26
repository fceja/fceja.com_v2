import { tagDataMap } from "@content/TagContent"

export const experienceCardsContent = [
    {
        year: 'NOV 2019 - JAN 2023',
        position: "Contractor / Python Developer",
        company: "Value Stream Engineering",
        companyUrl: "https://valuestreamengineering.com/",
        paragraph: `Worked as a contractor for VSE. Undertook various projects for multiple clients.
        Responsibilities included: QA, automation, software development, product documentation, onboarding, and mentoring.
        Client details are listed below.`,
        tags: [],
        clients: [
            {
                year: 'MAY 2020 - JAN 2023',
                position: "QA / Automation Engineer",
                company: "Viking Cruises",
                companyUrl: "https://www.vikingcruises.com/",
                paragraph: `
                    Designed and implemented frontend and backend automation solutions for the Viking Cruises product ecosystem.
                    Developed frontend and backend internal tooling applications. Part of an Agile team.
                    Collaborated with Director of Engineering for special projects. (Remote)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('javascript'), tagDataMap.get('selenium'), tagDataMap.get('testRail'),
                    tagDataMap.get('sauceLabs'), tagDataMap.get('jenkins'), tagDataMap.get('flask'), tagDataMap.get('aws'), tagDataMap.get('azure'),
                    tagDataMap.get('microsoftServer'), tagDataMap.get('aem'), tagDataMap.get('magnolia'),
                    tagDataMap.get('figma'), tagDataMap.get('postman'), tagDataMap.get('agile'), tagDataMap.get('jira')
                ],
            },
            {
                year: 'AUG 2020 - SEP 2020',
                position: "Automation Engineer",
                company: "Allē",
                companyUrl: "https://alle.com/",
                paragraph: `
                    A support role, where I joined to help team implement frontend automation using TypeScript. (Remote)
                `,
                tags: [
                    tagDataMap.get('typescript'), tagDataMap.get('javascript'), tagDataMap.get('selenium'),
                    tagDataMap.get('sauceLabs'),
                ],
            },
            {
                year: 'MAR 2020 - DEC 2020',
                position: "Automation Engineer",
                company: "MNTN ",
                companyUrl: "https://mountain.com/",
                paragraph: `
                    Refined and optimized existing automation procedures.
                    Developed automation for primary frontend product,
                    GraphQL backend product, and validating analytics synchronization to The Trade Desk. (Remote)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('selenium'), tagDataMap.get('graphql'), tagDataMap.get('postman'),
                    tagDataMap.get('nose'), tagDataMap.get('pytest'), tagDataMap.get('theTradeDesk')
                ],
            },
            {
                year: 'NOV 2019 - FEB 2020',
                position: "QA Engineer (Internship)",
                company: "Hallmark Labs",
                companyUrl: "https://www.hallmarklabs.com/",
                paragraph: `
                    Part of an Agile team with daily stand ups, collaborating closely with project team members.
                    Performed frontend, mobile, and physical device testing, and used Jira for issue tracking. Worked on mobile automation
                    for Android builds using Selenium WebDriver and Appium. (Onsite)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('selenium'), tagDataMap.get('appium'),
                    tagDataMap.get('nose'), tagDataMap.get('agile'), tagDataMap.get('jira')
                ],
            }
        ]
    },
]

export const homeProjectContent = [
    {
        title: "Profile App",
        imageUrl: "/assets/thumbnails/user-profile.png",
        imageAlt: "user profile thumbnail image",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('redux'),
            tagDataMap.get('googlemaps'), tagDataMap.get('bootstrap'), tagDataMap.get('html'),
            tagDataMap.get('sass'), tagDataMap.get('aws:s3')
        ],
        links: [
            { type: "website", url: "http://dev.client.profile-app-v2.s3-website-us-west-1.amazonaws.com/" },
            { type: "github", url: "https://github.com/fceja/profile_app_V2" }
        ],
        projType: "Frontend",
        paragraph: `
            A web app that can be used for a company/user profile.
            It contains a home page, gallery page, and a contact page to submit contact information.
        `
    },
    {
        title: "Emailer API",
        imageUrl: "/assets/thumbnails/email.png",
        imageAlt: "email message thumbnail image",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('node'), tagDataMap.get('express'),
            tagDataMap.get('nodemailer'), tagDataMap.get('aws:apiGateway'), tagDataMap.get('aws:lambda')
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/emailer_api" },
        ],
        projType: "Backend",
        paragraph: `
            An API that provides an endpoint for email generation.
            Uses Node JS, Express JS and Nodemailer library.
            It is also setup in AWS through API Gateway and a Lambda function.
            Leveraged by the Profile App project.
        `
    },
    {
        title: "Forum Post App",
        imageUrl: "/assets/thumbnails/message-bubbles.png",
        imageAlt: "message bubbles thumbnail image",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('django'), tagDataMap.get('djangoCrispyForms'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('css'),
            tagDataMap.get('postgres'), tagDataMap.get('heroku')
        ],
        links: [
            { type: "website", url: "https://django-user-post-a42f5d79d28f.herokuapp.com/" },
            { type: "github", url: "https://github.com/fceja/user_post" }
        ],
        projType: "Full-stack",
        paragraph: `
            A forum-like app that allows users to create, modify or delete posts on a community home page.
            It handles account creation and login functionality.
            Moderator users have the capability of deleting other users' posts, as well as banning them.
        `,
        paragraphTwo: `
            Demo credentials — username: mary / password: LetMeIn2023$!%
        `
    },
    {
        title: "Geolocation / IP App",
        imageUrl: "/assets/thumbnails/world-magnifying-glass.png",
        imageAlt: "world with magnifying glass thumbnail image",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('googlemaps'),
            tagDataMap.get('bootstrap'), tagDataMap.get('reactBootstrap'), tagDataMap.get('html'),
            tagDataMap.get('sass'), tagDataMap.get('postgres'), tagDataMap.get('aws:apiGateway'),
            tagDataMap.get('aws:lambda'), tagDataMap.get('aws:rds'), tagDataMap.get('aws:cloudfront'),
            tagDataMap.get('aws:route53'), tagDataMap.get('webpack')
        ],
        links: [
            { type: "website", url: "https://fceja-proj.com/" },
            { type: "github", url: "https://github.com/fceja/login_form_geolocation_ip" }
        ],
        projType: "Full-stack",
        paragraph: `
            An app that uses the browser's API and a third-party service.
            After logging in, clicking the button will ask for user permission to retrieve geo-coordinates and IP info.
            The login was implemented to prevent overuse, since third-party endpoint is throttled.
        `,
        paragraphTwo: `
            Demo credentials — email: fc-geoip@email.com / password: letMeIn_geoip!
        `
    }
]

export const socialLinksContent = [
    {
        name: "linked-in",
        href: "https://www.linkedin.com/in/francisco-ceja-0837b158/",
        target: "_blank",
        svgData: {
            xmlns: `xmlns="http://www.w3.org/2000/svg"`,
            viewBox: "1 30 450 450",
            height: "100%",
            dPath: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        }
    },
    {
        name: "github",
        href: "https://github.com/fceja",
        target: "_blank",
        svgData: {
            xmlns: `xmlns="http://www.w3.org/2000/svg"`,
            viewBox: "1 30 450 450",
            height: "100%",
            dPath: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
        }
    }
]