'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  ChefHat,
  Heart,
  Star,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Leaf
} from 'lucide-react'

export default function StackDemo() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const technologies = [
    {
      name: 'Next.js',
      description: 'React framework for production',
      icon: Zap,
      color: 'text-blue-600'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      icon: Sparkles,
      color: 'text-cyan-600'
    },
    {
      name: 'shadcn/ui',
      description: 'Beautiful UI components',
      icon: Heart,
      color: 'text-pink-600'
    },
    {
      name: 'Framer Motion',
      description: 'Production-ready animations',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      name: 'Lucide Icons',
      description: 'Beautiful & consistent icons',
      icon: Leaf,
      color: 'text-green-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <motion.div
        className="relative overflow-hidden bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            className="text-center"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 260, damping: 20 }}
            >
              <ChefHat className="mx-auto h-16 w-16 text-orange-500 mb-6" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Recommended Stack
              <span className="block text-orange-500">Demo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Experience the power of Next.js, Tailwind CSS, shadcn/ui, Framer Motion, and Lucide Icons working together.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Technologies Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          variants={fadeInUp}
        >
          Technology Stack
        </motion.h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div key={tech.name} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 * index, type: "spring", stiffness: 260, damping: 20 }}
                    className={`mx-auto p-3 rounded-full bg-gray-50 mb-4 ${tech.color}`}
                  >
                    <tech.icon className="h-8 w-8" />
                  </motion.div>
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Demo */}
      <motion.div
        className="bg-white py-16"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Interactive Components Demo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Demo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    Form Components
                  </CardTitle>
                  <CardDescription>
                    Beautiful form inputs powered by shadcn/ui
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Enter your name" />
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Submit
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Animation Demo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5 text-yellow-500" />
                    Smooth Animations
                  </CardTitle>
                  <CardDescription>
                    Powered by Framer Motion
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    className="flex justify-center space-x-4"
                    initial="initial"
                    animate="animate"
                  >
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.2 * i,
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                        className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center"
                      >
                        <span className="text-white font-bold">{i}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-gray-600"
                  >
                    ✨ Hover effects and micro-interactions
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-orange-500 text-white py-16"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Ready to Build Amazing Landing Pages?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-orange-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            This stack provides everything you need for fast, beautiful, and performant landing pages.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-50">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
