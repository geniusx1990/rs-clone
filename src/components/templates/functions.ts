export function createEl(
  el: string,
  classNames: string,
  parent: HTMLElement,
  content?: string
) {
  const element = document.createElement(el);
  if (!element) throw new Error("Error in element creating");
  if (classNames) {
    element.classList.add(...classNames.split(" "));
  }
  if (content !== undefined) {
    element.textContent = content;
  }
  if (parent) {
    parent.append(element);
  }
  return element;
}
export const activePage = async (page: string) => {

  const linkHelp = await document.querySelector('.nav-help') as HTMLElement;
  const linkMain = await document.querySelector('.nav-main') as HTMLElement;

  linkMain.classList.remove('active-link');
  linkHelp.classList.remove('active-link');
  if (page === 'main-page') {
    linkMain?.classList.add('active-link');
  } else if (page === 'help') {
    linkHelp?.classList.add('active-link');
  }
}
