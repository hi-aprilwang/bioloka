"use client"

import React, { useMemo } from "react"
import katex from "katex"
import "katex/dist/katex.min.css"

interface MathFormulaProps {
  math: string
  block?: boolean
  className?: string
}

export function MathFormula({ math, block = false, className = "" }: MathFormulaProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      })
    } catch {
      return math
    }
  }, [math, block])

  return (
    <span
      className={`inline-block ${block ? "w-full text-center py-2 overflow-x-auto" : ""} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
