export class ui {
displayDataGame(date) {
    let cartona_1 = ``;
    for (let i = 0; i < date.length; i++) {
        cartona_1 += `
            <div class="col">
                <div data-id="${date[i].id}" class="card h-100 bg-transparent" role="button" >
                <div class="card-body">
                    <figure class="position-relative">
                        <img class="card-img-top object-fit-cover h-100" src="${date[i].thumbnail}" />
                    </figure>
                    <figcaption>
                        <div class="hstack justify-content-between">
                            <h3 class="h6 small">${date[i].title}</h3>
                            <span class="badge text-bg-primary p-2">Free</span>
                            </div>
                                <p class="card-text small text-center opacity-50">${date[i].short_description.split(" ", 8).join(" ")}
</p>
                    </figcaption>
                </div>
                    <footer class="card-footer small hstack justify-content-between">
                        <span class="badge badge-color">${date[i].genre}</span>
                        <span class="badge badge-color">${date[i].platform}</span>
                    </footer>
                </div>
        </div>`;
    }
    document.getElementById("gameData").innerHTML = cartona_1;
    }

displayDetails(date){
    const cartona_2 = `
    <div class="col-md-4">
        <img src="${date.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
        <h3>Title: ${date.title}</h3>
        <p>Category: <span class="badge text-bg-info"> ${date.genre}</span> </p>
        <p>Platform: <span class="badge text-bg-info"> ${date.platform}</span> </p>
        <p>Status: <span class="badge text-bg-info"> ${date.status}</span> </p>
        <p class="small">${date.description}</p>
        <a class="btn btn-outline-warning" target="_blank" href="${date.game_url}">Show Game</a>
    </div>
`
document.getElementById("detailsContent").innerHTML=cartona_2
}
}