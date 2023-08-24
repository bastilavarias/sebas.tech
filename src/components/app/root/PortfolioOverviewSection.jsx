'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Chip from '@mui/material/Chip';
import WorkExperienceTimeline from '@/components/app/root/WorkExperienceTimeline';

export default function PortfolioOverviewSection() {
    const [value, setValue] = React.useState(0);
    const tabs = ['Career', 'Projects'];
    const workExperiences = [
        {
            company: 'Chanz IT Business Solutions Inc.',
            duration: 'October 2022 - Now',
            role: 'Full-stack Web Developer',
            website: 'https://www.chanzglobal.com/',
        },
        {
            company: 'Vaskeappen',
            duration: 'Nov 2021 - Aug 2022',
            role: 'Outsourced Web Developer',
            website: 'https://vaskeappen.com/',
        },
        {
            company: 'Fourello',
            duration: 'Dec 2020 - Oct 2022',
            role: 'Full-stack Web Developer',
            website: 'https://www.fourello.com/',
        },
    ];
    const skills = [
        'HTML',
        'CSS',
        'JavaScript',
        'Sass',
        'Vue',
        'NodeJS',
        'PHP',
        'Laravel',
        'SQL',
        'Git',
        'AWS',
    ];
    const education = [
        {
            school: 'Universidad de Manila',
            level: 'BSIT',
            duration: '2023',
        },
        {
            school: 'Metropolitan Medical Center College of Arts Science & Technology',
            level: 'Senior High School',
            duration: '2018',
        },
        {
            school: 'Tondo High School',
            level: 'Junior High School',
            duration: '2016',
        },
        {
            school: 'Magat Salamat Elementary School',
            level: 'Elementary',
            duration: '2012',
        },
    ];
    const projects = [
        {
            name: 'Water Delivery Philippines',
            gig: 'Work Project',
            role: 'Lead Developer',
            technologies: 'PHP/Laravel, JavaScript/Vue 3, CapacitorJS',
            website: 'https://www.waterdelivery.ph/',
            description:
                'Water Delivery Philippines is an online platform and mobile application that facilitates the convenient ordering of top-notch drinking water from over 100+ reliable distributors located in the National Capital Region (NCR). I have been assigned the task of developing the 2.0 version of Water Delivery Philippines.',
        },
        {
            name: 'iMatch Realty Inc',
            gig: 'Work Project',
            role: 'Ful-stack Web Developer',
            technologies: 'PHP/Laravel, JavaScript/Vuejs',
            website: 'https://www.imatch.ph/',
            description:
                'iMatch Realty Inc., a real estate company based in BGC, Manila and Boracay. My responsibility involves maintaining and introducing new features to the website.',
        },
        {
            name: 'Inspire Church',
            gig: 'Work Project',
            role: 'Ful-stack Web Developer',
            technologies: 'PHP/Laravel, JavaScript/Vuejs',
            website: 'https://www.inspirechurch.live/',
            description:
                'Inspire App is designed to publish content and have the church members watch or listen to these contents. I was assigned to create and maintain the web portal part of the system.',
        },
        {
            name: 'Medgate',
            gig: 'Work Project',
            role: 'Ful-stack Web Developer',
            technologies: 'PHP/Laravel, JavaScript/Vuejs',
            website: 'https://medgate.ph/',
            description:
                'Get your hassle-free medical consultation. Our Filipino specialist doctors are just a phone call away to give you the care you deserve. Available 24/7 year-round, even on holidays. I was assigned to maintain the public website and create the  web portal part of the system.',
        },
        {
            name: 'ZWELL Philippines',
            gig: 'Work Project',
            role: 'Ful-stack Web Developer',
            technologies: 'PHP/Laravel, JavaScript/Vuejs',
            website: null,
            description:
                'ZWELL Philippine Realty Development Corp is a Philippine-based real-estate corporation. I was assigned to create and maintain ZWELL`s web portal.',
        },
        {
            name: 'MySQL Settings',
            gig: 'Mini Work Project',
            role: 'Ful-stack Web Developer',
            technologies: 'JavaScript/Vuejs, Nuxt',
            website: 'https://www.mysqlsettings.com/',
            description:
                'A mobile app that connects customers to self-employed cleaners with just a few taps of their fingers. I was assigned to create and maintain the public website and web portal part of the system.',
        },
        {
            name: 'Vaskeappen',
            gig: 'Freelance',
            role: 'Front-end Developer',
            technologies: 'JavaScript/Vuejs, AWS',
            website: 'https://vaskeappen.com/',
            description:
                'A mobile app that connects customers to self-employed cleaners with just a few taps of their fingers. I was assigned to create and maintain the public website and web portal part of the system.',
        },
    ];

    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const IntroductionTypography = () => (
        <Typography
            component="h6"
            variant="h6"
            sx={{ marginBottom: 8, textAlign: 'center' }}
        >
            I'm Sebastian Curtis T. Lavarias, and I invite you to explore my
            humble web portfolio where I demonstrate my abilities and share
            content related to both technology and Stoicism philosophy.
        </Typography>
    );
    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
                style={{ width: '100%' }}
            >
                {value === index && <Box sx={{ pl: 3 }}>{children}</Box>}
            </div>
        );
    };
    const ProjectCard = ({
        name,
        gig,
        role,
        technologies,
        website,
        description,
    }) => (
        <Card
            elevation={0}
            sx={{
                width: '100%',
                marginBottom: 1,
            }}
        >
            <CardContent>
                <Box display="flex">
                    {website ? (
                        <Link
                            href={website}
                            target="_blank"
                            variant="subtitle1"
                            sx={{
                                textDecoration: 'underline',
                                marginRight: 0.5,
                            }}
                        >
                            {name}
                        </Link>
                    ) : (
                        <Typography
                            variant="subtitle1"
                            sx={{
                                marginRight: 0.5,
                            }}
                        >
                            {name}
                        </Typography>
                    )}
                    <Chip
                        size="small"
                        label={gig}
                        sx={{ borderRadius: 0 }}
                    ></Chip>
                </Box>
                <Typography variant="subtitle1">Role: {role}</Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ marginBottom: 1.5 }}
                >
                    Technologies: {technologies}
                </Typography>
                <Typography variant="body2" color="gray">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );

    const TechSkillChip = ({ skill }) => (
        <Chip
            color="primary"
            label={
                <React.Fragment>
                    <Typography variant="subtitle1" component="p">
                        {skill}
                    </Typography>
                </React.Fragment>
            }
            sx={{ margin: 0.5, borderRadius: 0 }}
        />
    );

    const EducationCard = ({ school, duration, level }) => (
        <Card
            color="primary"
            elevation={0}
            sx={{
                width: '100%',
                marginBottom: 1,
                bgcolor: 'primary.secondary',
            }}
        >
            <CardContent>
                <Typography variant="subtitle1">{school}</Typography>
                <Typography color="text.secondary">{level}</Typography>
                <Typography variant="body2">{duration}</Typography>
            </CardContent>
        </Card>
    );

    return (
        <Box paddingY={2}>
            <IntroductionTypography />
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {tabs.map((tab, index) => (
                        <Tab label={tab} {...a11yProps(index)} key={index} />
                    ))}
                </Tabs>
                <TabPanel
                    value={value}
                    index={0}
                    sx={{ paddingLeft: 0, paddingTop: 0 }}
                >
                    <Grid container>
                        <Grid item xs={12} sx={{ marginBottom: 2 }}>
                            <Typography
                                variant="subtitle2"
                                component="h6"
                                sx={{ paddingBottom: 2 }}
                            >
                                Work Experiences
                            </Typography>
                            <WorkExperienceTimeline />
                        </Grid>
                        <Grid item xs={12} sx={{ marginBottom: 5 }}>
                            <Typography
                                variant="subtitle2"
                                component="h6"
                                sx={{ paddingBottom: 2 }}
                            >
                                Skills
                            </Typography>
                            {skills.map((skill, index) => (
                                <TechSkillChip key={index} skill={skill} />
                            ))}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="subtitle2"
                                component="h6"
                                sx={{ paddingBottom: 2 }}
                            >
                                Education
                            </Typography>
                            {education.map((item, index) => (
                                <EducationCard key={index} {...item} />
                            ))}
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel
                    value={value}
                    index={1}
                    sx={{ paddingLeft: 0, paddingTop: 0 }}
                >
                    <Grid container>
                        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
                            <Typography
                                variant="subtitle2"
                                component="h6"
                                sx={{ paddingBottom: 2 }}
                            >
                                Projects
                            </Typography>
                            {projects.map((project, index) => (
                                <ProjectCard key={index} {...project} />
                            ))}
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </Box>
    );
}
