import Image from 'next/image'

export default function GridItem({
  item,
}: {
  item: { imageURL: string; name: string; color: string }
}) {
  return (
    <div
      className="relative h-40 overflow-hidden rounded-lg p-6"
      style={{ backgroundColor: item.color }}
    >
      <h2 className="text-2xl font-semibold text-white">{item.name}</h2>
      <div className="absolute bottom-0 right-[-20px] rotate-[30deg] transform">
        <Image
          src={item.imageURL}
          alt="Live Event"
          width={100}
          height={150}
          className="rounded-sm"
        />
      </div>
    </div>
  )
}
