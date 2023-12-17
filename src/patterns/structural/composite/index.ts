interface Component {
    operation(): string;
}

export class Leaf implements Component {
    operation(): string {
        return "Leaf";
    }
}

export class Composite implements Component {
    private children: Map<string, Component> = new Map();

    add(id: string, component: Component): Composite {
        this.children.set(id, component);
        return this;
    }

    remove(id: string, component: Component): Composite {
        this.children.delete(id);
        return this;
    }

    getChild(id: string): Component {
        return this.children.get(id);
    }

    operation(): string {
        let result = "\nBranch: ";
        this.children.forEach((child) => (result += child.operation()));
        return result;
    }
}
