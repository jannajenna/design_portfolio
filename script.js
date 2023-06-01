import { animate, stagger, inView, scroll } from "https://cdn.skypack.dev/motion";

animate(".animate_first", { opacity: [0, 1] }, { duration: 3, delay: stagger(1.5), });


inView("section", ({ target }) => {
    animate(
        target.querySelector(".animate"),
        {
            y: ["200px", "0"],
            opacity: [0, 1]
        },
        {
            delay: 0.2,
            duration: 2,
            easing: [0.17, 0.55, 0.55, 1]
        }
    )
})

document.querySelectorAll(".animate2").forEach((item) => {
    scroll(animate(item, { opacity: [0.2, 1, 1, 0.2] }), {
        target: item,
        offset: ["start end", "end end", "start start", "end start"]
    });
});





