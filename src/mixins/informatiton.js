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
                    company: 'Fourello',
                    span: 'Dec 2020 - Present',
                    role: 'Web Developer',
                    type: 'Full-time',
                    gigs: [],
                    details: [
                        'Used Vue, Laravel, Node, and AWS Technologies.',
                        'Converted UI/UX designs to an interactive website.',
                        'Developed responsive and mobile-friendly web applications.',
                        'Implemented and made APIs according to the business requirements.',
                    ],
                },

                {
                    company: 'Freelance Web Developer',
                    span: 'Dec 2021 - Present',
                    role: null,
                    type: 'Part-time',
                    gigs: [
                        {
                            company: 'Vaskeappen',
                            span: null,
                            role: 'Web Developer',
                            type: null,
                            gigs: [],
                            details: [
                                'Used Vue, Google Cloud Platform, and AWS Technologies.',
                                'Developed the admin portal of the Vaskeappen App.',
                            ],
                        },
                    ],

                    details: [],
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
                    name: 'Static Websites Compilation',
                    description: 'Compilation of static websites I made.',
                    technologies: 'Vue, Tailwind.',
                    type: 'Side Project',
                    url: 'https://tailwind-websites.netlify.app/#/',
                    previews: [
                        require('@/assets/previews/tailwind-websites/1.png'),
                        require('@/assets/previews/tailwind-websites/2.png'),
                    ],
                },
                {
                    name: 'Tipid Gadgets',
                    description:
                        'A web based Buy and Sell Computers and Gadgets in the Philippines.',
                    technologies: 'Vue, Laravel, MySQL, and AWS Technologies.',
                    type: 'Side Project',
                    url: 'http://tipid-gadgets-production.s3-website-ap-southeast-1.amazonaws.com',
                    previews: [
                        require('@/assets/previews/tipid-gadgets/2.png'),
                        require('@/assets/previews/tipid-gadgets/1.png'),
                    ],
                },
                {
                    name: 'Safe Line',
                    technologies: 'Vue, Laravel, MySQL, and Netlify/Heroku.',
                    description:
                        'A web based telemedicine platform with clinic locator for identifying the nearest suitable clinic based on patient’s needs.',
                    type: 'Side Project',
                    url: 'https://safe-line-development.netlify.app',
                    previews: [
                        require('@/assets/previews/safe-line/1.png'),
                        require('@/assets/previews/safe-line/2.png'),
                        require('@/assets/previews/safe-line/3.png'),
                    ],
                },
                {
                    name: 'Lokal PH',
                    technologies: 'Vue, Node, PostgreSQL, and Netlify/Heroku.',
                    description:
                        'A web based E-commerce for  buying and selling of "Dope🔥" goods.',
                    type: 'Side Project',
                    url: 'https://lokalph-development.netlify.app',
                    previews: [
                        require('@/assets/previews/lokal-ph/1.png'),
                        require('@/assets/previews/lokal-ph/2.png'),
                        require('@/assets/previews/lokal-ph/3.png'),
                    ],
                },
            ],
        };
    },
};

export default informationMixin;
