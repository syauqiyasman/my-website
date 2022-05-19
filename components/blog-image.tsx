type ImageProps = {
  src: string
  alt: string
  // eslint-disable-next-line react/require-default-props
  className?: string
}

export default function BlogImage({ src, alt, className }: ImageProps) {
  return (
    <div>
      {src !== ''
        ? <img src={src} alt={alt} className={`rounded-md ${className}`} />
        : null}
    </div>
  )
}
