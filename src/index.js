import Router from './router';
import { inbox } from './components/inbox';

let routes = {
    "inbox": inbox,
};

document.addEventListener("DOMContentLoaded", () => {
    let content = document.querySelector(".content");
    let router = new Router(content, routes);
    router.start();

    let sidebar_nav = document.querySelector(".sidebar-nav");
    sidebar_nav.childNodes.forEach((node) => {
        node.addEventListener("click", (e) => {
            let target_el = e.target.textContent.toLowerCase();
            window.location.hash = target_el;
        })
    })
})