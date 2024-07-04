import { browseList } from '@/app/const'
import GridItem from './grid-item'

export default function Browse() {
  return (
    <section className="flex h-full w-full flex-col">
      <h3 className="text-xl font-extrabold">Browse All</h3>
      <div className="grid grid-cols-5 gap-4">
        {browseList.map((item) => (
          <GridItem item={item} key={item.name} />
        ))}
      </div>
    </section>
  )
}
