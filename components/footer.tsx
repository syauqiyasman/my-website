import Link from 'next/link'

export default function Footer() {
  return (
    <div className="pt-8 pb-16 px-4 mx-auto max-w-screen-md border-t border-gray-200">
      <div className="flex flex-col">
        <div className="mb-4">
          <Link href="/">
            <a className="hover:underline focus:outline-none focus:underline">
              Home
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about-me">
            <a className="hover:underline focus:outline-none focus:underline">
              About me
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
