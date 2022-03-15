const informationMixin = {
    data() {
        return {
            age: 21,

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
                    text: 'AWS',
                    icon: 'mdi-aws',
                },
            ],

            workExperiences: [
                {
                    company: 'Malabon LGU',
                    span: 'Dec 2021 - Present',
                    role: 'Full-stack Developer',
                    type: 'Outsourced',
                    details: [],
                },

                {
                    company: 'Fourello',
                    span: 'Dec 2020 - Dec 2021',
                    role: 'Full-stack Developer',
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
        };
    },
};

export default informationMixin;
