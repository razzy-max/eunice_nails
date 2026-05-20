import React from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const shimmer = {
  initial: { opacity: 0.6 },
  animate: { opacity: 1 },
  transition: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' as const }
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <motion.div
        className="w-full aspect-[4/5] bg-cream rounded-[10px]"
        {...shimmer}
      />
      <motion.div
        className="h-4 bg-cream rounded w-3/4"
        {...shimmer}
      />
      <motion.div
        className="h-4 bg-cream rounded w-1/2"
        {...shimmer}
      />
    </div>
  )
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}

export function OrderListSkeleton({ count = 4 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-cream rounded-[10px] p-4 h-20"
          {...shimmer}
        />
      ))}
    </div>
  )
}

export function TextSkeleton({ width = 'w-3/4' }: { width?: string }) {
  return (
    <motion.div
      className={clsx('h-4 bg-cream rounded', width)}
      {...shimmer}
    />
  )
}

export function ImageSkeleton({ aspectRatio = 'aspect-[4/5]' }: { aspectRatio?: string }) {
  return (
    <motion.div
      className={clsx('w-full bg-cream rounded-[10px]', aspectRatio)}
      {...shimmer}
    />
  )
}
