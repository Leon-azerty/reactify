import { RecentsSearchesList } from '@/app/data'
import Image from 'next/image'

export default function RecentsSearches() {
  return (
    <section className="mt-10 flex h-full w-full flex-col">
      <h2 className="text-xl font-extrabold">Recents Searches</h2>
      <div className="flex space-x-2">
        {RecentsSearchesList.map((item) => (
          <div className="hover:bg-card" key={item.title}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={200}
              height={200}
            />
            <p className="text-white">{item.title}</p>
            <p className="text-subdued">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
