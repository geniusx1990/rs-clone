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
