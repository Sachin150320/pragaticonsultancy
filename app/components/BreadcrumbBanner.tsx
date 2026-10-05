import Link from 'next/link'

interface BreadcrumbBannerProps {
  title: string
  description?: string
  image?: string
  parent?: string
  parentHref?: string
}

export default function BreadcrumbBanner({
  title,
  description,
  image = '/images/Hero/banner-1.jpg',
  parent,
  parentHref = '/',
}: BreadcrumbBannerProps) {
  return (
    <section
      className="relative flex min-h-[400px] items-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/80">
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <span>/</span>

          {parent && (
            <>
              <Link
                href={parentHref}
                className="transition hover:text-white"
              >
                {parent}
              </Link>

              <span>/</span>
            </>
          )}

          <span className="text-white">{title}</span>
        </div>

        {/* Title */}
        <h1 className="max-w-4xl text-4xl font-bold text-white md:text-5xl lg:text-5xl">
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}