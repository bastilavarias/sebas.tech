import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
    return (
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 group relative">
            <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">{title}</h3>
                <ArrowUpRight size={16} className="text-gray-400 dark:text-gray-600" />
            </div>
            <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    )
}

