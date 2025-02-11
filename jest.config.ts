import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// Create Jest config from nextJest, passing the directory to load Next.js config
const createJestConfig = nextJest({
  dir: './', // Path to your Next.js project
})

// Add custom Jest config
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',

  // Add path aliases configuration here
  moduleNameMapper: {
    // This maps the @ alias to src folder
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

// Export the config created by nextJest and the custom settings
export default createJestConfig(config)
