import React from 'react'
import HeroSection from '@/components/home/HeroSection'
import FeaturedCollections from '@/components/home/FeaturedCollections'
import BestSellersRow from '@/components/home/BestSellersRow'
import StyleRecommender from '@/components/home/StyleRecommender'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import JournalPreview from '@/components/home/JournalPreview'
import InstagramFeed from '@/components/home/InstagramFeed'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <BestSellersRow />
      <StyleRecommender />
      <TestimonialSlider />
      <JournalPreview />
      <InstagramFeed />
    </>
  )
}
