import Link from 'next/link'

export default function Header() {
  return (
    <div className="border-b border-gray-200">
      <div className="h-16 px-4 lg:px-8 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center text-blue-500 focus:outline-none focus:underline">
            <span className="sr-only">Home</span>
            <div className="font-semibold">Your Name</div>
          </a>
        </Link>
        <div>
          <Link href="/about-me">
            <a className="flex items-center text-black hover:underline focus:outline-none focus:underline">
              About me
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
