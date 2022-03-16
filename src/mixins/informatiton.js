const informationMixin = {
    data() {
        return {
            age: 21,
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
                    company: 'Malabon LGU',
                    span: 'Dec 2021 - Present',
                    role: 'Web Developer',
                    type: 'Outsourced',
                    details: [],
                },

                {
                    company: 'Fourello',
                    span: 'Dec 2020 - Dec 2021',
                    role: 'Web Developer',
                    type: 'Full-time',
                    details: [
                        'Converted UI/UX designs to an interactive website.',
                        'Developed responsive and mobile-friendly web applications.',
                        'Implemented and made APIs according to the business requirements.',
                        'Led a team consisting of developers to implement features to a project.',
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
                    name: 'Safe Line',
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
                {
                    name: 'Malabon Barangay System',
                    description:
                        'A web based system for City of Malabon 21 barangays to manage inhabitants, clearance, business permits etc.',
                    type: 'Work Project',
                    url: 'http://barangay-development.s3-website-ap-southeast-1.amazonaws.com',
                    previews: [
                        require('@/assets/previews/malabon-barangay/1.png'),
                        require('@/assets/previews/malabon-barangay/2.png'),
                    ],
                },
            ],
        };
    },
};

export default informationMixin;
