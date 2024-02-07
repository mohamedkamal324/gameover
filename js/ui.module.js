export class Ui {
    constructor(){}

    displayGames(data){
        let gamesBox =``;
        for(let i=0;i<data.length;i++){
            gamesBox+=`
            <div class="col-lg-3 col-md-4">
                <div data-id=${data[i].id} class="my-card p-3 pb-2">
                    <div class="card-photo">
                        <img src="${data[i].thumbnail}" class="w-100" alt="">
                    </div>
                    <div class="desc">
                        <div class="d-flex py-2 card-info justify-content-between">
                            <p class="game-name ">${data[i].title}</p>
                            <p class="game-price">free</p>
                        </div>
                        <p class="game-desc">${data[i].short_description.split(" ", 7)}</p>
                    </div>
                    <div class="d-flex card-footer justify-content-between">
                        <span class="category">${data[i].genre}</span>
                        <span class="platform ">${data[i].platform}</span>
                    </div>
                </div>
        </div>`
        }

        document.getElementById("gameData").innerHTML=gamesBox;
    }

    displayDetails(data){
        const detailsBox =`
        <div class="col-md-4">
            <div class="left-details mt-3 p-2">
                <img src="${data.thumbnail}" class="w-100 mt-4" alt="">
            </div>
        </div>
        <div class="col-md-8">
            <div class="details-info position-relative">
                <h3 class="text-capitalize title">title: <span>${data.title}</span></h3>
                <div class="py-2 detailed">
                    <p>category: <span class="highlighted" >${data.genre}</span></p>
                    <p>platform: <span class="highlighted">${data.platform}</span></p>
                    <p>satatus: <span class="highlighted">${data.status}</span></p>
                    <p class="details-desc">${data.description}</p>
                </div>
                
                <a class="show-game-btn text-decoration-none" target="_blank" href="${data.game_url}">Show Game</a>
            </div>
    </div>`;
        document.getElementById("detailsData").innerHTML=detailsBox;
    }
}
// for(let i =0;i<data.length;i++){
//     detailsBox+=`
    // <div class="col-md-4">
    //         <div class="left-details mt-3 p-2">
    //             <h3 class="text-capitalize">details game</h3>
    //             <img src="${data[i].thumbnail}" class="w-100 mt-4" alt="">
    //         </div>
    //     </div>
    //     <div class="col-md-8">
    //         <div class="details-info position-relative">
    //             <div class="close-details-btn">
    //                 <i id="closeDetails" class="fa-solid fa-x"> </i>
    //             </div>
                
    //             <h3 class="text-capitalize title">title: <span>${data[i].title}</span></h3>
    //             <div class="py-2 detailed">
    //                 <p>category: <span class="highlighted" >${data[i].genre}</span></p>
    //                 <p>platform: <span class="highlighted">${data[i].platform}</span></p>
    //                 <p>satatus: <span class="highlighted">${data[i].status}</span></p>
    //                 <p class="details-desc">${data[i].description}</p>
    //             </div>
                
    //             <a class="show-game-btn text-decoration-none" href="${data[i].game_url}">Show Game</a>
    //         </div>
    // </div>`
// 