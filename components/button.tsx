import Link from 'next/link'

export default function Button({ href, children }: any) {
  return (
    <Link href={`/${href}`}>
      <a className="inline-block py-3 px-6 text-normal font-medium rounded text-blue-500 ring-1 ring-gray-200 hover:ring-blue-500 focus:outline-none focus:ring-blue-500">
        {children}
      </a>
    </Link>
  )
}
