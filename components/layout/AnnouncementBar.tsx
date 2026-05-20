import React from 'react'

interface AnnouncementBarProps {
  text: string
}

export default function AnnouncementBar({ text }: AnnouncementBarProps) {
  return (
    <div className="bg-charcoal text-ivory text-xs py-2 text-center">
      {text}
    </div>
  )
}