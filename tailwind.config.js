const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
        sans: ["Cooper Hewitt", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
}
