import { messageStore } from "../data/message_store"

export let inbox = {
    render: () => {
        let container = document.createElement('ul');
        container.className = "messages";
        debugger
        messageStore.getInboxMessage().forEach((message) => {
            container.appendChild(renderMessage(message));
        })
        return container;
    },
    renderMessage: (message) => {
        let node = document.createElement('li');
        console.log(node);
        node.className = "message";
        let renderto = this.renderTo(message);
        console.log(renderto);
        node.innerHTML = renderto;
        console.log(node)
        return node;
    },
    renderTo: (message) => {
        let span_1 = `<span class="from">${message.from}</span>`;
        let span_2 = `<span class="subject">${message.subject}</span>`;
        let span_3 = `<span class="body">${message.body}</span>`;

        return `${span_1} ${span_2} ${span_3}`
    }
}