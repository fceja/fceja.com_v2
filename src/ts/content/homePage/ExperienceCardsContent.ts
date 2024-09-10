import { TagLinkI, tagDataMap } from "@content/common/TagContent"

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