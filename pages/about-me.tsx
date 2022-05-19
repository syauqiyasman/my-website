import { NextSeo } from 'next-seo'

export default function AboutMePage() {
  return (
    <>
      <NextSeo
        title="About me"
        description="About myself"
      />
      <div className="mx-auto px-4 max-w-screen-md">
        <div className="py-12">
          <h1 className="mb-4 text-3xl font-semibold text-blue-500">Your Name</h1>
          <p>Hi, welcome to my website</p>
        </div>
      </div>
    </>
  )
}
