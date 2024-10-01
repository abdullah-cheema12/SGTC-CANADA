



const working_area = document.querySelector(".counter-area");
// console.log(working_area);
const work_observer = new IntersectionObserver(
    (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        // console.log(entry);
        const counter_num = document.querySelectorAll(".counter-numbers");
        // console.log(counter_num);
        const speed = 200;
        counter_num.forEach((curent_num) => {
            const update_num = () => {
                const target_num = parseInt(curent_num.dataset.number);
                // console.log(target_num);
                const initial_num = parseInt(curent_num.innerText);
                // console.log(initial_num);
                const increment_num = (target_num / speed);
                if (initial_num < target_num) {
                    curent_num.innerText = `${initial_num + increment_num}+`;
                    setTimeout(update_num, 10);
                }

            };

            update_num();
        });
        observer.unobserve(working_area);
    }, {
    root: null,
    threshold: 0,
})
work_observer.observe(working_area);