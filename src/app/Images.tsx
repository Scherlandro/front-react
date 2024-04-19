import styles from "./pages/home/Home.module.css";

export const Images =
    [{
        id: 1,
        src: `require("../../public/image/boba_fett.png")`,
        f: styles.front
    },
        {
            id: 2,
            src: `require("../../public/image/clone4.png")`,
            f: styles.left
        },
        {
            id: 3,
            src: `require("../../public/image/obi_wan.png")`,
            f: styles.back
        },
        {
            id: 4,
            src: `require("../../public/image/r2_d2.png")`,
            f: styles.right
        }


    ]
