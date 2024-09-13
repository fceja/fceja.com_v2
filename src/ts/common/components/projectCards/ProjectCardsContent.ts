import { tagDataMap } from "@common/components/tags/TagContent"

export const projectCardsContent = [
    {
        /* Inventory App */
        demoCreds: null,
        description: `
        An inventory app. It manages and organizes inventory items in a hierarchical folder structure, while
        providing analytics.
        `,
        description2: "* Latest project, under development. *",
        homePinned: true,
        id: "inventory-app",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/inventory_frontend",
                ariaLabel: "Inventory frontend app project GitHub link"
            },
        ],
        media: {
            type: ".mp4",
            mp4FilePath: "https://d2866cjnfd516.cloudfront.net/assets/videos/inventory_app.mp4",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/inventory_app_thumbnail.png",
        },
        projType: "Full-stack",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('redux'),
            tagDataMap.get('html'), tagDataMap.get('sass'), tagDataMap.get('node'),
            tagDataMap.get('express'), tagDataMap.get('postgres'), tagDataMap.get('knex'),
            tagDataMap.get('bootstrap'), tagDataMap.get('docker'), tagDataMap.get('vite'),
        ],
        title: "Inventory App",
        year: "2024"
    },
    {
        /* Kubernetes Kafka Sim */
        demoCreds: null,
        description: `
        A project that uses Kubernetes to simulate auto-scaling of a Kafka service with producers and consumers,
        implemented in Go and a few Bash scripts.
        `,
        description2: null,
        homePinned: false,
        id: "kubernetes-kafka-sim",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/kubernetes_kafka_sim",
                ariaLabel: "Kubernetes Kafka Sim project GitHub link"
            },
        ],
        media: {
            type: ".png",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/kubernetes_cluster_sim_thumbnail.png",
        },
        projType: "Backend",
        tags: [
            tagDataMap.get('golang'), tagDataMap.get('bash'), tagDataMap.get('docker'), tagDataMap.get('kubernetes')
        ],
        title: "Kubernetes Kafka Sim",
        year: "2024",
    },
    {
        /* Skills API */
        demoCreds: null,
        description: `
        A FastAPI Python project. Provides endpoints to add records and relations to database. Returns a user with linked technology skills.
        `,
        description2: null,
        homePinned: false,
        id: "skills-api",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/skills_api",
                ariaLabel: "Skill API project GitHub link"
            },
        ],
        media: {
            type: ".mp4",
            mp4FilePath: "https://d2866cjnfd516.cloudfront.net/assets/videos/skills_api.mp4",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/skills_api_thumbnail.png",

        },
        projType: "Backend",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('fastapi')
        ],
        title: "Skills API",
        year: "2024",
    },
    {
        /* Video Feed WebSocket */
        demoCreds: null,
        description: `
        A Go server captures and streams webcam video through a WebSocket endpoint,
        while a React and TypeScript frontend displays the live feed in the browser.
        `,
        description2: null,
        homePinned: false,
        id: "video-feed-websocket-app",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/video_feed_websocket",
                ariaLabel: "Video Feed WebSocket project GitHub link"
            }
        ],
        media: null,
        projType: "Full-stack",
        tags: [
            tagDataMap.get('golang'), tagDataMap.get('typescript'), tagDataMap.get('react'),
            tagDataMap.get('sass'), tagDataMap.get('HTML'), tagDataMap.get('vite')
        ],
        title: "Video Feed WebSocket",
        year: "2024",
    },
    {
        /* Profile App v2 */
        demoCreds: null,
        description: `
        Web app that contains a home, gallery and contact page.
        The contact page gathers user information for communication purposes.
        Version 2.
        `,
        description2: null,
        homePinned: true,
        id: "profile-app-v2",
        links: [
            {
                type: "website",
                label: "Website",
                url: "http://dev.client.profile-app-v2.s3-website-us-west-1.amazonaws.com/",
                ariaLabel: "Profile app v2 project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/profile_app_v2",
                ariaLabel: "Profile app v2 project GitHub link"
            }
        ],
        media: {
            type: ".mp4",
            mp4FilePath: "https://d2866cjnfd516.cloudfront.net/assets/videos/profile_app_v2.mp4",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/profile_app_v2_thumbnail.png",

        },
        projType: "Frontend",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('bootstrap'),
            tagDataMap.get('html'), tagDataMap.get('sass'), tagDataMap.get('aws'),
            tagDataMap.get('babel'), tagDataMap.get('vite'),
        ],
        title: "Profile App",
        year: "2024",
    },
    {
        /* fceja.com v2 */
        demoCreds: null,
        description: "fceja.com web app. Version 2.",
        description2: null,
        homePinned: false,
        id: "fceja.com-app-v2",
        links: [
            {
                type: "website",
                label: "Website",
                url: "http://fceja.com",
                ariaLabel: "fceja.com v2 project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/fceja.com_v2",
                ariaLabel: "fceja.com v2 project GitHub link"
            }
        ],
        media: null,
        projType: "Frontend",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('sass'),
            tagDataMap.get('html'), tagDataMap.get('aws'), tagDataMap.get('bootstrap'),
            tagDataMap.get('vite'),
        ],
        title: "fceja.com",
        year: "2024",
    },
    {
        /* Google Maps App */
        demoCreds: { email: "fc-gmaps@email.com", pass: "letMeIn_gmaps!" },
        description: `
        After logging-in, an interactive Google Map is populated.
        `,
        description2: null,
        homePinned: false,
        id: "google-maps-app",
        links: [
            {
                type: "website",
                label: "Website",
                url: "http://dev.client.google-maps.s3-website-us-west-1.amazonaws.com/",
                ariaLabel: "Google Maps app project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/google_maps_app",
                ariaLabel: "Google Maps app project GitHub link"
            }
        ],
        media: {
            type: ".mp4",
            mp4FilePath: "https://d2866cjnfd516.cloudfront.net/assets/videos/google_maps_app.mp4",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/google_maps_app_thumbnail.png",

        },
        projType: "Full-stack",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('googlemaps'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('sass'),
            tagDataMap.get('postgres'), tagDataMap.get('aws'), tagDataMap.get('webpack')
        ],
        title: "Google Maps App",
        year: "2023",
    },
    {
        /* Emailer API */
        demoCreds: null,
        description: `
        A Node JS / Express JS API that provides an endpoint for generating and sending an email.
        It is also setup in AWS, through API Gateway and a Lambda function.
        `,
        description2: null,
        homePinned: false,
        id: "emailer-api",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/emailer_api",
                ariaLabel: "Emailer API project GitHub link"
            },
        ],
        media: null,
        projType: "Backend",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('node'), tagDataMap.get('express'),
            tagDataMap.get('nodemailer'), tagDataMap.get('aws'),
        ],
        title: "Emailer API",
        year: "2023",
    },
    {
        /* Geolocation IP App */
        demoCreds: { email: "fc-geoip@email.com", pass: "letMeIn_geoip!" },
        description: `
        After logging-in, clicking a button will retrieve geo-coordinates and IP info.
        `,
        description2: null,
        homePinned: false,
        id: "geolocation-ip-app",
        links: [
            {
                type: "website",
                label: "Website",
                url: "https://fceja-proj.com/",
                ariaLabel: "Geolocation IP app project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/login_form_geolocation_ip",
                ariaLabel: "Geolocation IP app project GitHub link"
            }
        ],
        media: {
            type: ".mp4",
            mp4FilePath: "https://d2866cjnfd516.cloudfront.net/assets/videos/geolocation_ip_app.mp4",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/geolocation_ip_app_thumbnail.png",

        },
        projType: "Full-stack",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('googlemaps'),
            tagDataMap.get('bootstrap'), tagDataMap.get('reactBootstrap'), tagDataMap.get('html'),
            tagDataMap.get('sass'), tagDataMap.get('postgres'), tagDataMap.get('aws'), tagDataMap.get('webpack')
        ],
        title: "Geolocation-IP App",
        year: "2023",
    },
    {
        /* fceja.com Automation */
        demoCreds: null,
        description: "Automation tests for fceja.com. Implemented with Selenium and Jest.",
        description2: null,
        homePinned: false,
        id: "fceja.com-automation",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/fceja.com_automation/",
                ariaLabel: "fceja.com Automation app project GitHub link"
            }
        ],
        media: null,
        projType: "Automation",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('Selenium'), tagDataMap.get('jest'),
        ],
        title: "fceja.com",
        year: "2023",
    },
    {
        /* AWS Lambda Emailer */
        demoCreds: null,
        description: "AWS Lambda Function, for creating and sending email.",
        description2: null,
        homePinned: false,
        id: "aws-lambda-emailer",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/aws_lambda_emailer_func",
                ariaLabel: "AWS Lambda Emailer Func GitHub link"
            }
        ],
        media: null,
        projType: "AWS Lambda",
        tags: [
            tagDataMap.get('node'), tagDataMap.get('typescript'), tagDataMap.get('aws:lambda')
        ],
        title: "AWS Lambda Emailer",
        year: "2023",
    },
    {
        /* Image Classification */
        demoCreds: null,
        homePinned: false,
        description: "Simple neural network to classify handwritten digits from MNIST dataset.",
        description2: null,
        id: "image-classification",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/image_classification",
                ariaLabel: "Machine Learning project GitHub link"
            }
        ],
        media: null,
        projType: "Machine Learning",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('pytorch')
        ],
        title: "Image Classification",
        year: "2023",
    },
    {
        /* Forum Post App */
        demoCreds: { email: "maryFairy", pass: "fairyDust$!%" },
        description: `
        A forum-like app that allows users to create, modify or delete posts on a community home page.
        It handles account creation and login functionality.
        Moderators can delete other users' posts, as well as ban them.
        `,
        description2: null,
        homePinned: true,
        id: "forum-post-app",
        links: [
            {
                type: "website",
                label: "Website",
                url: "https://django-forum-post-660c391dbe52.herokuapp.com",
                ariaLabel: "Forum Post app project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/forum_post_app",
                ariaLabel: "Forum Post app project GitHub link"
            }
        ],
        media: {
            type: ".mp4",
            mp4FilePath: "https://d2866cjnfd516.cloudfront.net/assets/videos/forum_post_app.mp4",
            thumbnailPath: "https://d2866cjnfd516.cloudfront.net/assets/thumbnails/forum_post_app_thumbnail.png",

        },
        projType: "Full-stack",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('django'), tagDataMap.get('djangoCrispyForms'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('css'),
            tagDataMap.get('postgres'), tagDataMap.get('heroku'), tagDataMap.get('css')
        ],
        title: "Forum Post App",
        year: "2023",
    },
    {
        /* Login JWT Auth API */
        demoCreds: null,
        description: "An API that provides endpoints for creating, retrieving, and logging-in users. Implemented with Golang and JWT authentication.",
        description2: null,
        homePinned: false,
        id: "login-jwt-auth-api",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/login_jwt_auth_api",
                ariaLabel: "Login JWT Auth API app project GitHub link"
            }
        ],
        media: null,
        projType: "Backend",
        tags: [
            tagDataMap.get('golang'), tagDataMap.get('jwt'), tagDataMap.get('postgres'),
        ],
        title: "Login JWT Auth API",
        year: "2023",
    },
    {
        /* fceja.com v1 */
        demoCreds: null,
        description: "fceja.com web app. Version 1.",
        description2: null,
        homePinned: false,
        id: "fceja.com-app-v1",
        links: [
            {
                type: "website",
                label: "Website",
                url: "http://dev.client.fceja.s3-website-us-west-1.amazonaws.com/",
                ariaLabel: "fceja.com app project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/fceja.com_v1",
                ariaLabel: "fceja.com app project GitHub link"
            }
        ],
        media: null,
        projType: "Frontend",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('sass'),
            tagDataMap.get('html'), tagDataMap.get('aws'), tagDataMap.get('anime'),
            tagDataMap.get('jest'), tagDataMap.get('jenkins')
        ],
        title: "fceja.com",
        year: "2023",
    },
    {
        /* Profile App v1 */
        demoCreds: null,
        description: `
            Web app that contains a home, gallery and contact page.
            The contact page gathers user information for communication purposes.
            Version 1.
        `,
        description2: null,
        homePinned: false,
        id: "profile-app-v1",
        links: [
            {
                type: "website",
                label: "Website",
                url: "http://dev.client.profile-app.s3-website-us-west-1.amazonaws.com",
                ariaLabel: "Profile app project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/profile_app",
                ariaLabel: "Profile app project GitHub link"
            }
        ],
        media: null,
        projType: "Frontend",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('react'), tagDataMap.get('redux'),
            tagDataMap.get('bootstrap'), tagDataMap.get('html'), tagDataMap.get('sass'),
            tagDataMap.get('aws')
        ],
        title: "Profile App",
        year: "2023",
    },
    {
        /* Card Carousel App */
        demoCreds: null,
        description: "Features a scrollable carousel with cards.",
        description2: null,
        homePinned: false,
        id: "card-carousel-app",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/card_carousel",
                ariaLabel: "Card Carousel app project GitHub link"
            }
        ],
        media: null,
        projType: "Frontend",
        tags: [
            tagDataMap.get('javascript'), tagDataMap.get('react'), tagDataMap.get('html'),
            tagDataMap.get('css')
        ],
        title: "Card Carousel App",
        year: "2022",
    },
    {
        /* Login Auth Cookie Session API */
        demoCreds: null,
        description: "An API that provides endpoints for creating, retrieving, and logging-in users. Implemented with TypeScript and session cookie authentication.",
        description2: null,
        homePinned: false,
        id: "login-auth-cookie-session",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/login_session_cookie_auth_api",
                ariaLabel: "Login Session Cookie Auth API app project link"
            }
        ],
        media: null,
        projType: "Backend",
        tags: [
            tagDataMap.get('typescript'), tagDataMap.get('node'), tagDataMap.get('express'),
            tagDataMap.get('postgres'), tagDataMap.get('jwt')
        ],
        title: "Login Auth Cookie Session API",
        year: "2022",
    },
    {
        /* Economic Calender */
        demoCreds: null,
        description: "Parses economic calendar data from investing.com, and outputs data to a csv file.",
        description2: null,
        homePinned: false,
        id: "economic-calendar-automation",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/econ_calendar_automation",
                ariaLabel: "Economic Calender Automation project GitHub link"
            }
        ],
        media: null,
        projType: "Automation",
        tags: [
            tagDataMap.get('python'), tagDataMap.get('selenium')
        ],
        title: "Economic Calendar",
        year: "2022",
    },
    {
        /* Bingo Card Game */
        demoCreds: null,
        description: "Imitation of card game, where the game is won when a pre-determined pattern is selected.",
        description2: null,
        homePinned: false,
        id: "bingo-card-game",
        links: [
            {
                type: "website",
                label: "Website",
                url: "http://dev.frontend.bingo.s3-website-us-west-1.amazonaws.com",
                ariaLabel: "Bingo Card Game app project web link"
            },
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/bingo_game",
                ariaLabel: "Bingo Card Game app project GitHub link"
            }
        ],
        media: null,
        projType: "Frontend",
        tags: [
            tagDataMap.get('javascript'), tagDataMap.get('html'), tagDataMap.get('css'),
            tagDataMap.get('aws')
        ],
        title: "Bingo Card Game",
        year: "2018",
    },
    {
        /* AI Agent vs User */
        demoCreds: null,
        description: "A CLI implemented 4-in-a-row game, where players compete against an AI agent. Utilizes an alpha-beta pruning search algorithm.",
        description2: null,
        homePinned: false,
        id: "ai-agent-vs-user",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/ai_agent_4_in_a_row",
                ariaLabel: "User vs AI Agent project GitHub link"
            }
        ],
        media: null,
        projType: "Desktop",
        tags: [
            tagDataMap.get('c++'),
        ],
        title: "AI Agent vs User",
        year: "2020",
    },
    {
        /* Estimate Pi - Monte Carlo */
        demoCreds: null,
        description: "Estimate the value of PI using the Monte Carlo method. Uses multithreading to parallelize computation.",
        description2: null,
        homePinned: false,
        id: "estimate-pi-monte-carlo",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/estimate_pi_monte_carlo/blob/main/monte_thread.cpp",
                ariaLabel: "Estimate PI Monte Carlo project GitHub link"
            }
        ],
        media: null,
        projType: "Desktop",
        tags: [
            tagDataMap.get('c++'),
        ],
        title: "Estimate PI - Monte Carlo",
        year: "2020",
    },
    {
        /* Dice Game */
        demoCreds: null,
        description: "A poker style game with dice.",
        description2: null,
        homePinned: false,
        id: "dice-game",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/dice_game",
                ariaLabel: "Dice Game app project GitHub link"
            }
        ],
        media: null,
        projType: "Desktop",
        tags: [
            tagDataMap.get('java'), tagDataMap.get('javaFX'), tagDataMap.get('maven'),
        ],
        title: "Dice Game",
        year: "2019",
    },
    {
        /* Chipotle Mock */
        demoCreds: null,
        description: "Mock webpage for Chipotle.",
        description2: null,
        homePinned: false,
        id: "chipotle-mock",
        links: [
            {
                type: "github",
                label: "Code",
                url: "https://github.com/fceja/chipotle_mock",
                ariaLabel: "Chipotle Mock app project GitHub link"
            }
        ],
        media: null,
        projType: "Frontend",
        tags: [
            tagDataMap.get('javascript'), tagDataMap.get('jquery'), tagDataMap.get('html'),
            tagDataMap.get('css')
        ],
        title: "Chipotle Mock",
        year: "2019",
    },
]