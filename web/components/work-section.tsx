import type React from "react"
import { cn } from "@/lib/utils"

interface WorkItemProps {
    title: string
    period?: string
    description?: string
}

const WorkItem: React.FC<WorkItemProps> = ({ title, period, description }) => {
    return (
        <div className="border-t border-gray-800 dark:border-gray-800 py-4">
            <div className="flex flex-col sm:flex-row justify-between">
                <h3 className="text-sm font-medium">{title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center justify-end mt-1 sm:mt-0">
                    {description && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-right max-w-xs">{description}</p>
                    )}
                    {period && (
                        <p className={cn("text-sm text-gray-500 dark:text-gray-400 sm:text-right", description && "sm:ml-4")}>
                            {period}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

interface SectionProps {
    title: string
    children: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <div className="mb-12">
            <h2 className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">{title}</h2>
            <div>{children}</div>
        </div>
    )
}

export default function WorkSection() {
    return (
        <div className="space-y-12">
            <Section title="WORK">
                <WorkItem title="Product Hunt" period="2022 - 2023" />
                <WorkItem title="Catalog" period="2020 - 2022" />
                <WorkItem title="YOOBIC" period="2018 - 2020" />
            </Section>

            <Section title="SIDE PROJECTS">
                <WorkItem title="Design Resources" description="A collection of design resources" />
                <WorkItem title="Thumbnail Kit" description="A Figma plugin for generating file covers" />
            </Section>

            <Section title="POSTS">
                <WorkItem title="Reflecting on 2024" description="On personal and professional growth" period="2024" />
                <WorkItem
                    title="Advice to a young designer"
                    description="Build a fulfilling design career you love"
                    period="2024"
                />
                <WorkItem title="Reflecting on 2023" description="Reflections on growth and intentional living" period="2024" />
                <WorkItem
                    title="On being a mindful designer"
                    description="Balance creativity, connection, and gratitude"
                    period="2023"
                />
            </Section>

            <Section title="OTHER PROJECTS">
                <WorkItem title="Life Lessons" description="A collection of learnings" />
                <WorkItem title="Changelog" description="Where I go, what I do" />
                <WorkItem title="Bookmarks" description="Things I've collected from around" />
                <WorkItem title="Reading" description="What I read" />
            </Section>
        </div>
    )
}

