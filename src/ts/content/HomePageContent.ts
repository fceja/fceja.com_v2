import { TagLinkI, tagDataMap } from "@content/TagContent"

export type ExperienceCardEntryT = {
    year: string
    position: string
    company: string
    companyUrl: string
    paragraph: string
    tags?: TagLinkI[]
    clients?: ExperienceCardEntryT[]
}

export const experienceCardsContent: ExperienceCardEntryT[] = [
    {
        year: 'NOV 2019 - JAN 2023',
        position: "Contractor / Developer",
        company: "Value Stream Engineering",
        companyUrl: "https://valuestreamengineering.com/",
        paragraph: `Worked as a contractor for VSE. Undertook various projects for multiple clients.
        Responsibilities included: QA, automation, software development, product documentation, onboarding, and mentoring. (Remote)`,
        tags: [
            tagDataMap.get('python'), tagDataMap.get('typescript'), tagDataMap.get('javascript'),
            tagDataMap.get('selenium'), tagDataMap.get('jenkins'), tagDataMap.get('flask')
        ].filter(Boolean) as TagLinkI[],
        clients: [
            {
                year: 'MAY 2020 - JAN 2023',
                position: "QA / Automation Engineer / Developer",
                company: "Viking",
                companyUrl: "https://www.vikingcruises.com/",
                paragraph: `
                    Designed and implemented frontend and backend automation solutions for the Viking product ecosystem.
                    Developed frontend and backend internal tooling applications. Part of an Agile team. (Remote)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('javascript'), tagDataMap.get('selenium'), tagDataMap.get('testRail'),
                    tagDataMap.get('sauceLabs'), tagDataMap.get('aws'), tagDataMap.get('azure'), tagDataMap.get('jenkins'),
                    tagDataMap.get('microsoftServer'), tagDataMap.get('aem'), tagDataMap.get('magnolia'),
                    tagDataMap.get('figma'), tagDataMap.get('postman'), tagDataMap.get('agile'), tagDataMap.get('jira')
                ].filter(Boolean) as TagLinkI[],
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
                ].filter(Boolean) as TagLinkI[],
            },
            {
                year: 'AUG 2020 - SEP 2020',
                position: "Automation Engineer",
                company: "Allergan Aesthetics",
                companyUrl: "https://www.allerganaesthetics.com/",
                paragraph: `
                    A support role, where I joined to help team implement frontend automation using TypeScript. (Remote)
                `,
                tags: [
                    tagDataMap.get('typescript'), tagDataMap.get('javascript'), tagDataMap.get('selenium'),
                    tagDataMap.get('sauceLabs'),
                ].filter(Boolean) as TagLinkI[],
            },
            {
                year: 'NOV 2019 - FEB 2020',
                position: "Intern - QA / Automation Engineer",
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
                ].filter(Boolean) as TagLinkI[],
            }
        ]
    },
]

export const socialProfileLinksContent = [
    {
        name: "linked-in",
        href: "https://www.linkedin.com/in/f-ceja/",
        target: "_blank",
        ariaLabel: "LinkedIn profile link",
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
        ariaLabel: "GitHub profile link",
        svgData: {
            xmlns: `xmlns="http://www.w3.org/2000/svg"`,
            viewBox: "1 30 450 450",
            height: "100%",
            dPath: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
        }
    },
    {
        name: "codesandbox",
        href: "https://codesandbox.io/u/fceja",
        target: "_blank",
        ariaLabel: "CodeSandbox profile link",
        svgData: {
            xmlns: `xmlns="http://www.w3.org/2000/svg"`,
            viewBox: "0 0 512 512",
            height: "100%",
            dPath: "M464 48l0 416L48 464 48 48l416 0zM48 0L0 0 0 48 0 464l0 48 48 0 416 0 48 0 0-48 0-416 0-48L464 0 48 0z"
        }
    },
    {
        name: "dockerhub",
        href: "https://hub.docker.com/u/ciscoceja",
        target: "_blank",
        ariaLabel: "Docker Hub profile link",
        svgData: {
            xmlns: `xmlns="http://www.w3.org/2000/svg"`,
            viewBox: "0 0 640 512",
            dPath: "M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"
        }
    }
]