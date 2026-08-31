"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

export function ShinyText({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyTextProps) {
  const animationDuration = `${speed}s`

  return (
    <span
      className={cn(
        "inline-block bg-clip-text text-transparent transition-all pb-1.5 leading-normal",
        disabled
          ? "text-zinc-900 dark:text-zinc-100"
          : "bg-gradient-to-r from-zinc-700 via-zinc-200 to-zinc-700 dark:from-zinc-400 dark:via-zinc-100 dark:to-zinc-400 bg-[length:200%_auto] animate-[shine_linear_infinite]",
        className
      )}
      style={{
        animationDuration,
      }}
    >
      {text}
    </span>
  )
}
