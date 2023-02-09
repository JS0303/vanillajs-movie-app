import { Component } from "../core/core";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie?id=tt4154796",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo"><span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /* html */ `
              <li>
                <a class="${isActive ? "active" : ""}" href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://item.kakaocdn.net/do/2697398bad5927125f3db2f8a248ca15113e2bd2b7407c8202a97d2241a96625" alt="User">
      </a>
    `;
  }
}
