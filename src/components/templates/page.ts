abstract class Page {
    protected container: HTMLElement;
    static TextObject = {};
    
    constructor(pageName: string) {
        this.container = document.createElement('div');
        this.container.className = pageName;     
    }

    protected createHeaderTitle(text: string) {
        const headerTitle = document.createElement('h1');
        headerTitle.textContent = text;
        return headerTitle;
    }

    render() {
        return this.container;
    }

}

export default Page;