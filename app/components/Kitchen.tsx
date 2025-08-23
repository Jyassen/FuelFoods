'use client'

import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    image: '/images/articles/creative-uses.jpg',
    date: 'January 15, 2024',
    title: 'Enhancing Visual Appeal: Creative Uses of Microgreens in Fine Dining',
    author: {
      name: 'Chef Michael Carter',
      avatar: '/images/chefs/michael-carter.jpg',
      title: 'Executive Chef, Michelin-starred NYC Restaurant'
    }
  },
  {
    image: '/images/articles/sustainable-sourcing.jpg',
    date: 'February 1, 2024',
    title: 'Sustainable Sourcing: The Impact of Local Microgreens on Your Menu',
    author: {
      name: 'Sarah Rogers',
      avatar: '/images/chefs/sarah-rogers.jpg',
      title: 'Sustainability Director, FuelFoods'
    }
  },
  {
    image: '/images/articles/nutritional-value.jpg',
    date: 'March 5, 2024',
    title: 'Maximizing Nutritional Value: A Guide to Microgreen Integration',
    author: {
      name: 'James Evans',
      avatar: '/images/chefs/james-evans.jpg',
      title: 'Culinary Innovation Specialist'
    }
  }
]

export default function Kitchen() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">
          Culinary Innovation Hub
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Discover innovative ways to incorporate our premium microgreens and edible flowers
          into your menu, with insights from leading NYC chefs and culinary experts.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-gray-100 rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <time className="text-sm text-gray-600">{article.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-4">
                  <Link href="#" className="hover:text-gray-700 transition-colors">
                    {article.title}
                  </Link>
                </h3>
                
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-black">{article.author.name}</span>
                    <span className="text-sm text-gray-600">{article.author.title}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
} 