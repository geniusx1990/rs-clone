import MainPage from '../../pages/main/main';
import ApplicationPage from '../../pages/application/application';
import Page from '../../components/templates/page';
import Header from '../../components/header/header';

const enum PageIds {
  MainPage = 'main-page',
  ApplicationPage = 'application-page'
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string = 'current-page';
  private initialPage: MainPage;
  // private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }

    let page: Page | null = null;
    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.ApplicationPage) {
      page = new ApplicationPage(idPage);
    }
    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);

        })
    }

  constructor() {
    this.initialPage = new MainPage('main-page');
    // this.header = new Header('header', 'header');
  }

  start() {
    //  App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRouteChange();

  }
}

export default App;
