'use client';

import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

export default function WorkExperienceTimeline() {
    const theme = useTheme();

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

    const CustomTimelineItem = ({
        company,
        duration,
        role,
        website,
        position,
    }) => (
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color={position === 0 ? 'success' : 'secondary'} />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ px: 2, pt: 4 }}>
                <Link
                    href={website}
                    target="_blank"
                    variant="subtitle1"
                    sx={{ textDecoration: 'underline' }}
                >
                    {company}
                </Link>
                <Typography>{duration}</Typography>
                <Typography>Role: {role}</Typography>
            </TimelineContent>
        </TimelineItem>
    );

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
                paddingTop: 0,
            }}
        >
            {workExperiences.map((experience, index) => (
                <CustomTimelineItem
                    {...experience}
                    position={index}
                    key={index}
                />
            ))}
        </Timeline>
    );
}
