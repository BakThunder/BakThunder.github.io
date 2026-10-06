import type { ImgHTMLAttributes } from 'react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string | { src: string }
  fill?: boolean
  priority?: boolean
  quality?: number
  placeholder?: string
  blurDataURL?: string
}

export default function Image({
  src,
  alt = '',
  fill,
  priority,
  quality: _quality,
  placeholder: _placeholder,
  blurDataURL: _blurDataURL,
  className = '',
  ...rest
}: Props) {
  const url = typeof src === 'string' ? src : src.src

  return (
    <img
      src={url}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      className={fill ? `absolute inset-0 h-full w-full ${className}` : className}
      {...rest}
    />
  )
}