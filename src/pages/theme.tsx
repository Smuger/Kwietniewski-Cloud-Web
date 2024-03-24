import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "black",
                color: "white"
            },
            breakpoints: {
                sm: '280px',
            },
        },
    },
});

export default theme;