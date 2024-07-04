'use client'

import { Badge } from '@/ui/badge'
import { useState } from 'react'
import { BadgeList } from '../../const'

export default function Filter() {
  const [filter, setFilter] = useState('All')

  return (
    <section className="flex space-x-2">
      {BadgeList.map((badge, index) => (
        <Badge
          variant={filter == badge ? 'default' : 'secondary'}
          className="h-7"
          onClick={() => setFilter(badge)}
          key={index}
        >
          {badge}
        </Badge>
      ))}
    </section>
  )
}
