const informationMixin = {
    data() {
        return {
            age: 22,
            email: 'sebastiancurtislavarias@gmail.com',
            mobileNumber: '09972217704',

            socials: [
                {
                    text: 'GitHub',
                    icon: 'mdi-github',
                    link: 'https://github.com/bastilavarias?tab=repositories',
                },
                {
                    text: 'LinkedIn',
                    icon: 'mdi-linkedin',
                    link: 'https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/',
                },
            ],

            skills: [
                {
                    text: 'HTML',
                    icon: 'mdi-language-html5',
                },
                {
                    text: 'CSS',
                    icon: 'mdi-language-css3',
                },
                {
                    text: 'JavaScript',
                    icon: 'mdi-language-javascript',
                },
                {
                    text: 'Sass',
                    icon: 'mdi-sass',
                },
                {
                    text: 'Vue',
                    icon: 'mdi-vuejs',
                },
                {
                    text: 'NodeJS',
                    icon: 'mdi-nodejs',
                },
                {
                    text: 'PHP',
                    icon: 'mdi-language-php',
                },
                {
                    text: 'Laravel',
                    icon: 'mdi-laravel',
                },
                {
                    text: 'SQL',
                    icon: 'mdi-database-search',
                },
                {
                    text: 'Git',
                    icon: 'mdi-git',
                },
                {
                    text: 'AWS',
                    icon: 'mdi-aws',
                },
            ],

            workExperiences: [
                {
                    company: 'ChanzIT',
                    span: 'Oct 2022 - Present',
                    role: 'Full-stack Web Developer',
                    type: 'Full-time',
                    url: 'https://www.chanzglobal.com/',
                    gigs: [],
                    details: [
                        'Used Vue, Laravel, and AWS Technologies.',
                        'Converted UI/UX designs to an interactive website.',
                        'Developed responsive and mobile-friendly web applications.',
                        'Implemented and made APIs according to the business requirements.',
                    ],
                },
                {
                    company: 'Outsourced Web Developer',
                    span: 'Nov 2021 - Aug 2022',
                    role: null,
                    type: 'Part-time',
                    gigs: [
                        {
                            company: 'Vaskeappen',
                            span: null,
                            role: 'Front-end Developer',
                            type: null,
                            url: 'https://vaskeappen.com/',
                            gigs: [],
                            details: [
                                'Used Vue, Google Cloud Platform, and AWS Technologies.',
                                'Developed the web portal of the Vaskeappen App.',
                            ],
                        },
                    ],

                    details: [],
                },

                {
                    company: 'Fourello',
                    span: 'Dec 2020 - Oct 2022',
                    role: 'Full-stack Web Developer',
                    type: 'Full-time',
                    url: 'https://fourello.com/',
                    gigs: [],
                    details: [
                        'Used Vue, Laravel, Node, and AWS Technologies.',
                        'Converted UI/UX designs to an interactive website.',
                        'Developed responsive and mobile-friendly web applications.',
                        'Implemented and made APIs according to the business requirements.',
                    ],
                },
            ],

            educationExperiences: [
                {
                    level: 'College',
                    school: 'Universidad de Manila',
                    course: 'BS Information Technology',
                    span: '2023',
                },

                {
                    level: null,
                    school: 'Metropolitan Medical Center College of Arts Science & Technology',
                    course: 'Senior High school',
                    span: '2018',
                },

                {
                    level: null,
                    school: 'Tondo High School',
                    course: 'Junior High school',
                    span: '2016',
                },

                {
                    level: null,
                    school: 'Magat Salamat Elementary School',
                    course: 'Elementary',
                    span: '2012',
                },
            ],

            projects: [
                {
                    name: 'Water Delivery Philippines',
                    description:
                        'Water Delivery Philippines is an online platform and mobile application that facilitates the convenient ordering of top-notch drinking water from over 100+ reliable distributors located in the National Capital Region (NCR).  I have been assigned the task of developing the 2.0 version of Water Delivery Philippines.',
                    technologies: 'PHP/Laravel, JavaScript/Vue 3, CapacitorJS',
                    type: 'Work Project',
                    url: 'https://www.waterdelivery.ph/',
                    role: 'Lead Full-stack Web/Mobile Developer',
                    previews: [],
                },
                {

                    name: 'IMATCH',
                    description:
                        'iMatch Realty Inc., a real estate company based in BGC, Manila and Boracay. My responsibility involves maintaining and introducing new features to the website.',
                    technologies: 'PHP/Laravel, JavaScript/Vuejs, AWS',
                    type: 'Work Project',
                    url: 'https://www.imatch.ph/',
                    role: 'Full-stack Web Developer',
                    previews: [],
                },
                {
                    name: 'Inspire Church',
                    description:
                        'Inspire App is designed to publish content and have the church members watch or listen to these contents. I was assigned to create and maintain the web portal part of the system.',
                    technologies: 'PHP/Laravel, JavaScript/Vuejs, AWS',
                    type: 'Work Project',
                    url: 'https://www.inspirechurch.live/',
                    role: 'Full-stack Web Developer',
                    previews: [],
                },

                {
                    name: 'ZWELL Philippines',
                    description:
                        'ZWELL Philippine Realty Development Corp is a Philippine-based real-estate corporation. I was assigned to create and maintain ZWELL`s web portal.',
                    technologies: 'PHP/Laravel, JavaScript/Vuejs, AWS',
                    type: 'Work Project',
                    url: null,
                    role: 'Full-stack Web Developer',
                    previews: [],
                },

                {
                    name: 'Vaskeappen',
                    description:
                        'A mobile app that connects customers to self-employed cleaners with just a few taps of their fingers.  I was assigned to create and maintain the public website and web portal part of the system.',
                    technologies: 'JavaScript/Vuejs, AWS',
                    type: 'Work Project',
                    url: 'https://vaskeappen.com/',
                    role: 'Front-end Developer',
                    previews: [],
                },

                {
                    name: 'MySQL Settings',
                    description:
                        'The MySQL memory calculator is aiming to make a system operator\'s life a bit easier. By using the form below, and copying the new values to your settings file, you can fine tune your server and avoid system errors due wrong memory settings for MySQL.',
                    technologies: 'JavaScript/Vuejs, Nuxt',
                    type: 'Mini Work Project',
                    url: 'https://www.mysqlsettings.com/',
                    role: 'Front-end Developer',
                    previews: [],
                },
            ],
        };
    },
};

export default informationMixin;
