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
            role: 'Full-stack Web Development',
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
    const WorkExperienceCard = ({ company, duration, role, website }) => (
        <Card variant="outlined" sx={{ width: '100%', marginBottom: 1 }}>
            <CardContent>
                <Link
                    href={website}
                    target="_blank"
                    variant="subtitle1"
                    sx={{ textDecoration: 'underline' }}
                >
                    {company}
                </Link>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {duration}
                </Typography>
                <Typography variant="body2">Role: {role}</Typography>
            </CardContent>
        </Card>
    );
    const ProjectCard = ({ company, duration, role, website }) => (
        <Card variant="outlined" sx={{ width: '100%', marginBottom: 1 }}>
            <CardContent>
                <Link
                    href={website}
                    target="_blank"
                    variant="subtitle1"
                    sx={{ textDecoration: 'underline' }}
                >
                    {company}
                </Link>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {duration}
                </Typography>
                <Typography variant="body2">Role: {role}</Typography>
            </CardContent>
        </Card>
    );

    const TechSkillChip = ({ skill }) => (
        <Chip
            color="primary"
            label={skill}
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
                                Selected Work Projects
                            </Typography>
                            {workExperiences.map((experience, index) => (
                                <ProjectCard key={index} {...experience} />
                            ))}
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </Box>
    );
}
