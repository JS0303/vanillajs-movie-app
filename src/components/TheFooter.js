import { Component } from "../core/core";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer",
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/JS0303/vanillajs-movie-app">Github Repository</a>
      </div>
      <div>
        <a href="https://js0303.github.io/">
          ${new Date().getFullYear()}
          JinSeok
        </a>
      </div>
    `;
  }
}
