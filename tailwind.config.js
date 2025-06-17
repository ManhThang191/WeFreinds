module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg-color': 'var(--primary-bg-color)', // Màu nền đen từ biến CSS
        'primary-text-color': 'var(--primary-text-color)', // Màu chữ trắng từ biến CSS
        'hover-bg-color': 'var(--hover-bg-color)', // Màu nền khi hover
        'hover-text-color': 'var(--hover-text-color)', // Màu chữ khi hover
      },
    },
  },
  plugins: [],
};
