import { tagDataMap } from "@common/components/tags/TagContent"
import { ITagLink } from "@common/components/tags/Tags"

export const experienceCardsContent = [
    {
        year: 'NOV 2019 - JAN 2023',
        position: "Contractor / Developer",
        company: "Value Stream Engineering",
        companyUrl: "https://valuestreamengineering.com/",
        paragraph: `As a contractor for VSE, I developed and maintained full-stack applications using Python, FastAPI,
         JavaScript, Node.js, and SQLite. I designed, implemented and maintained a proprietary automation framework using
         Python, TypeScript, Selenium, and Appium. I managed CI/CD workflows, integrated third-party APIs,
         and contributed to AWS cloud development. Additionally, I handled product documentation, onboarding,
         and mentoring. (Remote)`,
        tags: [
            tagDataMap.get('python'), tagDataMap.get('typescript'), tagDataMap.get('javascript'), tagDataMap.get('bash'), tagDataMap.get('linux'),
            tagDataMap.get('selenium'), tagDataMap.get('aws'), tagDataMap.get('jenkins'), tagDataMap.get('flask'), tagDataMap.get('git'),
            tagDataMap.get('appium'), tagDataMap.get('sql'), tagDataMap.get('sauceLabs'), tagDataMap.get('testRail'),
            tagDataMap.get('pytest'), tagDataMap.get('nose'), tagDataMap.get('mocha')
        ].filter(Boolean) as ITagLink[],
        clients: [
            {
                year: 'MAY 2020 - JAN 2023',
                position: "QA / Automation Engineer / Developer",
                company: "Viking",
                companyUrl: "https://www.vikingcruises.com/",
                paragraph: `
                    Developed frontend and backend internal tooling applications, designed and implemented frontend and backend automation solutions
                    for the Viking product ecosystem. Wrote custom scripts for performance testing, engaged in headless CMS migrations,
                    conducted A/B testing, and participated in Agile ceremonies and daily stand-ups using Jira for project management. (Remote)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('javascript'), tagDataMap.get('selenium'), tagDataMap.get('testRail'),
                    tagDataMap.get('sauceLabs'), tagDataMap.get('aws'), tagDataMap.get('azure'), tagDataMap.get('jenkins'),
                    tagDataMap.get('microsoftServer'), tagDataMap.get('aem'), tagDataMap.get('magnolia'),
                    tagDataMap.get('figma'), tagDataMap.get('postman'), tagDataMap.get('agile'), tagDataMap.get('jira')
                ].filter(Boolean) as ITagLink[],
            },
            {
                year: 'MAR 2020 - DEC 2020',
                position: "Automation Engineer",
                company: "MNTN ",
                companyUrl: "https://mountain.com/",
                paragraph: `
                    Developed custom scripts to validate database synchronization with The Trade Desk via API, automated frontend and GraphQL backend
                    products using Python and Selenium, and refined existing automation procedures to enhance efficiency. (Remote)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('selenium'), tagDataMap.get('graphql'), tagDataMap.get('postman'),
                    tagDataMap.get('nose'), tagDataMap.get('pytest'), tagDataMap.get('theTradeDesk')
                ].filter(Boolean) as ITagLink[],
            },
            {
                year: 'AUG 2020 - SEP 2020',
                position: "Automation Engineer",
                company: "Allergan Aesthetics",
                companyUrl: "https://www.allerganaesthetics.com/",
                paragraph: `
                    Supported the team in implementing frontend automation using TypeScript and Selenium. (Remote)
                `,
                tags: [
                    tagDataMap.get('typescript'), tagDataMap.get('javascript'), tagDataMap.get('selenium'),
                    tagDataMap.get('sauceLabs'), tagDataMap.get('mocha')
                ].filter(Boolean) as ITagLink[],
            },
            {
                year: 'NOV 2019 - FEB 2020',
                position: "Intern - QA / Automation Engineer",
                company: "Hallmark Labs",
                companyUrl: "https://www.hallmarklabs.com/",
                paragraph: `
                    As part of an Agile team, I conducted frontend, mobile, and device testing, automated Android builds using Python, Selenium,
                    and Appium, and used Jira for issue tracking while participating in daily stand-ups and Agile ceremonies. (Onsite)
                `,
                tags: [
                    tagDataMap.get('python'), tagDataMap.get('selenium'), tagDataMap.get('appium'),
                    tagDataMap.get('nose'), tagDataMap.get('agile'), tagDataMap.get('jira')
                ].filter(Boolean) as ITagLink[],
            }
        ]
    },
]