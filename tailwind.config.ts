/**
 * Tailwind CSS Configuration File
 * This file contains the theme configuration for Neural Growth Marketing.
 */

const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#00B4D8',
        deepBlue: '#0077B6',
        darkBackground: '#0A0A0F',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Menlo', 'Monaco', 'ui-monospace'],
      },
    },
  },
  variants: {},
  plugins: [],
};