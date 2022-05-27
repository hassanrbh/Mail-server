class Router {
    constructor(node) {
        this.node = node;
    }

    start() {
        this.render();
        window.addEventListener("hashchange", () => {
            this.render();
        });
    }

    activeRoute() {
        return window.location.hash.substring(1);
    }

    render() {
        this.node.innerHTML = "";
        let component = this.activeRoute();
        let new_route = document.createElement("p");
        new_route.innerHTML = component;
        this.node.appendChild(new_route);
    }
}

module.exports = Router;