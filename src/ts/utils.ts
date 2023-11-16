export function getElement<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: HTMLElement | Document = document
): T {
  const ELEMENT = parent.querySelector<T>(selector);

  if (ELEMENT === null) {
    throw new Error(`Element with selector '${selector}' is not found!`);
  }

  return ELEMENT;
}
