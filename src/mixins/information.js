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
                    company: 'Outsourced Web Developer',
                    span: 'Nov 2021 - Present',
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
                    span: 'Dec 2020 - Present',
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
                    span: '2018 - Present',
                },

                {
                    level: null,
                    school: 'Metropolitan Medical Center College of Arts Science & Technology',
                    course: 'Senior High school',
                    span: '2016 - 2018',
                },

                {
                    level: null,
                    school: 'Tondo High School',
                    course: 'Junior High school',
                    span: '2012 - 2016',
                },

                {
                    level: null,
                    school: 'Magat Salamat Elementary School',
                    course: 'Elementary',
                    span: '2006 - 2012',
                },
            ],

            projects: [
                {
                    name: 'Medgate',
                    description:
                        'Medgate is a teleconsultation mobile app that allows patients to talk to doctors regarding various illnesses as well as receive follow-up care and virtual prescription. I was assigned to create and maintain the public website, web portal, and CSR chats part of the system.',
                    technologies: 'PHP/Laravel, JavaScript/Vuejs, AWS',
                    type: 'Work Project',
                    url: 'https://medgate.ph/',
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
                    name: 'Lokal PH',
                    description:
                        'An e-commerce web platform for locally made products from the Philippines.',
                    technologies: 'JavaScript/Vuejs, NodeJS, Heroku',
                    type: 'Side Project',
                    url: 'https://lokalph-development.netlify.app/',
                    role: 'Full-stack Web Developer',
                    previews: [],
                },
            ],
        };
    },
};

export default informationMixin;
