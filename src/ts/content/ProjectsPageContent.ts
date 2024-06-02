import { tagDataMap } from "@content/TagContent"

export const projectContent = [
    {
        year: "2023",
        title: "User Forum App",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('django'), tagDataMap.get('djangoCrispyForms'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('css'),
            tagDataMap.get('postgres'), tagDataMap.get('heroku'), tagDataMap.get('css')
        ],
        links: [
            { type: "website", url: "https://django-user-post-a42f5d79d28f.herokuapp.com" },
            { type: "github", url: "https://github.com/fceja/user_post" }
        ],
        paragraph: "A forum-like app were Standard and Mod users can create and edit posts."
    },
    {
        year: "2023",
        title: "Emailer API",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('node'), tagDataMap.get('express'),
            tagDataMap.get('nodemailer'), tagDataMap.get('aws'),
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/emailer_api" },
        ],
        paragraph: "A NodeJS / ExpressJS API that provides an endpoint for email generation."
    },
    {
        year: "2023",
        title: "Profile App",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('redux'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('sass'),
            tagDataMap.get('aws')
        ],
        links: [
            { type: "website", url: "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com" },
            { type: "github", url: "https://github.com/fceja/profile_app" }
        ],
        paragraph: "A web app that can be used for a user/company profile."
    },
    {
        year: "2023",
        title: "Geolocation-IP App",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('googlemaps'),
            tagDataMap.get('bootstrap'), tagDataMap.get('reactBootstrap'), tagDataMap.get('html'),
            tagDataMap.get('sass'), tagDataMap.get('postgres'), tagDataMap.get('aws'), tagDataMap.get('webpack')
        ],
        links: [
            { type: "website", url: "https://fceja-proj.com/" },
            { type: "github", url: "https://github.com/fceja/login_form_geolocation_ip" }
        ],
        paragraph: "After logging in, clicking the 'Get My Location' button will retreive users\
        geo-coordinates and IP info."
    },
    {
        year: "2023",
        title: "Login JWT Auth API",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('node'), tagDataMap.get('express'),
            tagDataMap.get('postgres'), tagDataMap.get('jwt')
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/login_auth_jwt_session_api" }
        ],
        paragraph: "An API that provides endpoints for: creating, retrieving, and logging-in users. \
        Implemented with JWT authentication."
    },
    {
        year: "2023",
        title: "Economic Calendar - Automation",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('selenium'), tagDataMap.get('pytest')
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/econ_calendar_automation" }
        ],
        paragraph: "Uses Selenium and Pytest to parse economic calendar data from investing.com. Also outputs the data into a csv."
    },
    {
        year: "2023",
        title: "Google Maps App",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('googlemaps'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('sass'),
            tagDataMap.get('postgres'), tagDataMap.get('aws'), tagDataMap.get('webpack')
        ],
        links: [
            { type: "website", url: "http://dev.client.google-maps.s3-website-us-west-1.amazonaws.com/" },
            { type: "github", url: "https://github.com/fceja/google_maps_app" }
        ],
        paragraph: "After logging in, an interactive Google Map is populated."
    },
    {
        year: "2023",
        title: "Card Slider App",
        tags: [
            tagDataMap.get('javascript'), tagDataMap.get('react'), tagDataMap.get('html'),
            tagDataMap.get('css')
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/card_slider" }
        ],
        paragraph: "A container featuring scrollable cards."
    },
    {
        year: "2023",
        title: "User vs A.I. Agent",
        tags: [
            tagDataMap.get('c++'),
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/ai_agent_4_in_a_row" }
        ],
        paragraph: "A 4-in-a-row game implementation using alpha beta search with pruning."
    },
    {
        year: "2023",
        title: "Dice Game",
        tags: [
            tagDataMap.get('java'), tagDataMap.get('javaFX'), tagDataMap.get('maven'),
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/dice_game" }
        ],
        paragraph: "A poker style game with dice."
    },
    {
        year: "2023",
        title: "Login JWT Auth API",
        tags: [
            tagDataMap.get('golang'), tagDataMap.get('jwt'), tagDataMap.get('postgres'),
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/jwt_auth_api" }
        ],
        paragraph: "An API that provides endpoints for: creating, retrieving, and logging-in users. \
        Implemented with JWT authentication."
    },
    {
        year: "2023",
        title: "Bingo Card Game",
        tags: [
            tagDataMap.get('javascript'), tagDataMap.get('html'), tagDataMap.get('css'),
            tagDataMap.get('aws')
        ],
        links: [
            { type: "website", url: "http://dev.frontend.bingo.s3-website-us-west-1.amazonaws.com" },
            { type: "github", url: "https://github.com/fceja/bingo_game" }
        ],
        paragraph: "Imitation of card game, where the game is won when a pre-determined pattern is selected."
    },
    {
        year: "2023",
        title: "Chipotle Mock",
        tags: [
            tagDataMap.get('javascript'), tagDataMap.get('jquery'), tagDataMap.get('html'),
            tagDataMap.get('css')
        ],
        links: [
            { type: "github", url: "https://github.com/fceja/chipotle_mock" }
        ],
        paragraph: "Mock webpage for Chipotle."
    }
]

export const projectLinkSvgData = {
    github: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-4 29 457 457",
        height: "1em",
        /* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */
        path: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
    },
    website: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: "1em",
        /* Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.  */
        path: "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"
    }
}
