"use client"

import React, { useEffect, useRef, useState } from "react"

interface CountUpProps {
  to: number
  from?: number
  direction?: "up" | "down"
  delay?: number
  duration?: number
  className?: string
  startWhen?: boolean
  separator?: string
  decimals?: number
  prefix?: string
  suffix?: string
}

export function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 1.6,
  className = "",
  startWhen = true,
  separator = ",",
  decimals = 0,
  prefix = "",
  suffix = "",
}: CountUpProps) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!startWhen) return

    let startTime: number | null = null
    let animationFrame: number

    const startVal = direction === "down" ? to : from
    const endVal = direction === "down" ? from : to

    const timeout = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
        // Ease out quint
        const easeOut = 1 - Math.pow(1 - progress, 5)
        const currentVal = startVal + (endVal - startVal) * easeOut

        setValue(currentVal)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        }
      }

      animationFrame = requestAnimationFrame(step)
    }, delay * 1000)

    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(animationFrame)
    }
  }, [to, from, direction, delay, duration, startWhen])

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals)
    const [intPart, decPart] = fixed.split(".")
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    return decPart !== undefined && decimals > 0
      ? `${formattedInt}.${decPart}`
      : formattedInt
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  )
}
