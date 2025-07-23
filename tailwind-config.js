tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'sanskrit-gold': '#C9A227',
          'sanskrit-sage': '#8A9A5B',
          'sanskrit-earth': '#7D5A3A',
          'sanskrit-cream': '#F8F3E6',
          'sanskrit-deep': '#2A363B'
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-in forwards',
          'slide-up': 'slideUp 0.5s ease-out forwards'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' }
          }
        }
      }
    }
  };
  