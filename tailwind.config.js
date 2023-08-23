/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [],
    theme: {
        extend: {
            colors: {
                exeBlack: "#090b11",
                goldyPink: "#fb89ab",
                goldyCream: "#fbc689",
                goldyOrangy: {
                    DEFAULT: "#f5671b",
                    100: "#f5671b",
                    300: "#f57d3d",
                    800: "#f5be3d"
                },
                goldyGreen: "#d0f54c"
            },
            dropShadow: {
                'flicker': "0.06rem 0 0.06rem theme(colors.goldyPink), -0.125rem 0 0.06rem theme(colors.goldyOrangy.300);"
            }
        },

        fontFamily: {
            "hacked": ["Hacked-KerX"],
            "typewriter": ["atwriter"]
        },
        animation: {
            "flicker": "flicker 0.001s infinite alternate",
        },
        keyframes: {
            flicker: {
                "from" : {
                    textShadow: "1px 0 0 theme(colors.goldyPink), -2px 0 0 theme(colors.goldyOrangy.300);",
                },
                "to" : {
                    textShadow: "3px 1px 2px theme(colors.goldyPink), -1px -1px 2px theme(colors.goldyOrangy.300);",
                },
            }
        }
    }
}