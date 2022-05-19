export default function Error({ statusCode }: any) {
  return (
    <div className="mx-auto px-4 max-w-screen-lg">
      <div className="py-8">
        <p className="text-3xl">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  // eslint-disable-next-line no-nested-ternary
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
