import Component from "../templates/component";

class MainSection extends Component {
    constructor(tagName: string, clasName: string) {
        super(tagName, clasName);
    }


    testFunction() {
        let test = document.createElement('h1');
        test.className = 'test';
        test.textContent = 'TEST MAIN SECTION';


        return test
    }


    render() {
        const testElemtn = this.testFunction();

        this.container.append(testElemtn);


        return this.container;
    }
}

export default MainSection;