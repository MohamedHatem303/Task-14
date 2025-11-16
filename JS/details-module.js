import { ui } from "./ui-module.js";
export class Details {
  constructor(id) {
    this.id = id;
    this.ui = new ui();
    document.getElementById("btnClose").addEventListener("click", function () {
      document.querySelector(".games").classList.remove("d-none");
      document.querySelector(".details").classList.add("d-none");
    });
    this.getDetails(id);
  }
  async getDetails() {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");

    const options = 
    { method: "GET", headers: 
        {
        "x-rapidapi-key": "11ff96deb2msh276ca6c06ca687ap113f93jsn2fc607f7ca63",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        }
    };

   const api_2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.id}`, options)
   const response_2 = await api_2.json();
   this.ui.displayDetails(response_2)
   loading.classList.add("d-none");
  }
}
