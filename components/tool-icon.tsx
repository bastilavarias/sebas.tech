import { Figma, Waves, Zap, CuboidIcon as Cube, Box, Code, Wind, CreditCard, Triangle } from "lucide-react"

interface ToolIconProps {
    name: string
}

export default function ToolIcon({ name }: ToolIconProps) {
    const getIcon = () => {
        switch (name) {
            case "Figma":
                return <Figma size={20} />
            case "Rive":
                return <Waves size={20} />
            case "Zitter":
                return <Zap size={20} />
            case "Blender":
                return <Cube size={20} />
            case "ZBrush":
                return <Box size={20} />
            case "NEXT.JS":
                return <Code size={20} />
            case "Tailwind":
                return <Wind size={20} />
            case "Stripe.js":
                return <CreditCard size={20} />
            case "Vercel":
                return <Triangle size={20} />
            default:
                return <Box size={20} />
        }
    }

    return (
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg mb-2">
                {getIcon()}
            </div>
            <span className="text-xs">{name}</span>
        </div>
    )
}