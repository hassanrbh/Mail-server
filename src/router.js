class Router {
    constructor(node, routes) {
        this.node = node;
        this.routes = routes;
    }

    start() {
        this.render();
        window.addEventListener("hashchange", () => {
            this.render();
        });
    }

    activeRoute() {
        let curr_route = window.location.hash.substring(1);
        let component = this.routes[curr_route]
        return component;
    }

    render() {
        this.node.innerHTML = "";
        let component = this.activeRoute();
        if (component) {
            this.node.appendChild(component.render());
        }
    }
}

module.exports = Router;