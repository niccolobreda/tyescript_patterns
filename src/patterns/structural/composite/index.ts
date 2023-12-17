interface Component {
    operation();
}

class Leaf implements Component {
    operation() {
        console.log("operation");
    }
}

class Composite implements Component {
    private children: Map<string, Component> = new Map();

    add(id: string, component: Component): void {
        this.children.set(id, component);
    }

    remove(id: string, component: Component): void {
        this.children.delete(id);
    }

    getChild(id: string): Component {
        return this.children.get(id);
    }

    operation() {
        this.children.forEach((child) => child.operation());
    }
}
