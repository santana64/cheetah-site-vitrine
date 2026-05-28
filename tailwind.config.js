/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      colors: {
        cheetah: {
          green: '#56a45b',
          'green-mid': '#3f8f48',
          'green-deep': '#1a4a20',
          'green-dark': '#0e2714',
          'green-darkest': '#0d1f10',
          orange: '#f4a321',
          'orange-dark': '#d97706',
          'orange-deep': '#b45309',
          cream: '#F5F1E8',
          'cream-light': '#F8F5EE',
          'cream-warm': '#f4f0e6',
        },
      },
      animation: {
        'aurora-1': 'auroraDrift1 28s ease-in-out infinite',
        'aurora-2': 'auroraDrift2 35s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'count-pop': 'countPop 0.55s cubic-bezier(0.34,1.56,0.64,1) both',
        'blur-reveal': 'blurReveal 0.7s ease-out both',
        'slide-spring': 'slideSpring 0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradientX 5s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        auroraDrift1: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px,15px) scale(0.97)' },
        },
        auroraDrift2: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(-25px,20px) scale(0.97)' },
          '66%': { transform: 'translate(20px,-15px) scale(1.04)' },
        },
        glowPulse: {
          '0%,100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        countPop: {
          '0%': { opacity: '0', transform: 'scale(0.75) translateY(10px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        blurReveal: {
          '0%': { opacity: '0', filter: 'blur(10px)', transform: 'translateY(18px)' },
          '100%': { opacity: '1', filter: 'blur(0)', transform: 'translateY(0)' },
        },
        slideSpring: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundSize: {
        '200%': '200%',
        '300%': '300%',
      },
    },
  },
  plugins: [],
};
