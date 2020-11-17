const replace = (response, element) => {
  if (response.readyState === 4 && response.status === 200) {
    element.innerHTML = response.responseText;
  }
};

export function mainComponent(mainLayoutPath) {
  const origin = window.location.origin;
  const mainPath = `${ origin }/views/${ mainLayoutPath }.html`;
  const request = new XMLHttpRequest();
  request.onload = () => replace(request, document.getElementById('root'))
  request.open("GET", mainPath, true);
  request.send();
}

class MainComponent extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define('x-router', MainComponent, { extends: 'div' });
