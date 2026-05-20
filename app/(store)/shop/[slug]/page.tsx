import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { mockProducts } from '@/lib/mock-data/products'
import ProductDetailClient from '@/components/product/ProductDetailClient'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = mockProducts.find(item => item.slug === slug)

  if (!product) {
    return {
      title: 'Product not found | Eunice Nails'
    }
  }

  return {
    title: `${product.name} | Eunice Nails`,
    description: product.description
  }
}

export function generateStaticParams() {
  return mockProducts.map(product => ({ slug: product.slug }))
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = mockProducts.find(item => item.slug === slug)

  if (!product) {
    notFound()
  }

  const related = mockProducts.filter(item => item.id !== product.id).slice(0, 4)

  return (
    <main className="container py-10 lg:py-14 space-y-8">
      <div className="text-sm text-charcoal/60">
        <Link href="/shop" className="hover:text-rose-nude transition-colors">
          Shop
        </Link>{' '}
        / {product.name}
      </div>

      <ProductDetailClient product={product} related={related} />
    </main>
  )
}
