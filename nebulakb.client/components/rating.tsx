import {cn} from "@/lib/utils"
import {Star} from "lucide-react"

interface RatingProps {
    rating: number
}

export function Rating({rating}: RatingProps) {
    return (
        <div className="flex items-center space-x-1">
            {Array.from({length: 5}).map((_, i) => (
                <Star
                    key={i}
                    className={cn(
                        "size-4",
                        rating >= i + 1 ? "text-yellow-500" : "text-muted-foreground"
                    )}
                    aria-hidden="true"
                />
            ))}
        </div>
    )
}