import { Details } from "./details-module.js";
import { ui } from "./ui-module.js";
export class Games {
  constructor() {
    this.getGames("mmorpg");
    document.querySelectorAll(".menu a").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".menu .active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });
    this.ui = new ui();
  }
  async getGames(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "11ff96deb2msh276ca6c06ca687ap113f93jsn2fc607f7ca63",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api_1 = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response_1 = await api_1.json();
    this.ui.displayDataGame(response_1);
    this.start();
    loading.classList.add("d-none");
  }
  start() {
    document.querySelectorAll(".card").forEach((item) => {
      item.addEventListener("click", () => {
        const id = item.dataset.id;
        this.showDetails(id);
      });
    });
  }

  showDetails(idGame) {
    const details = new Details(idGame);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".details").classList.remove("d-none");
  }
}
