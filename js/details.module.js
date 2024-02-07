import { Ui } from "./ui.module.js";

export class Details{
    constructor(id){
        document.getElementById("closeDetails").addEventListener("click",()=>{
            document.getElementById("details").classList.add("d-none")
            document.getElementById("home").classList.remove("d-none")
        })
        this.getDetails(id);
        this.ui =new Ui();
        this.loading= document.querySelector(".loading");

    }
    
    async getDetails(id){
        document.querySelector(".loading").classList.remove("d-none");
        const options={
            method:"get",
            headers:{
                'X-RapidAPI-Key': 'df2fbc1dfamshc62c99a17a65187p16d888jsn27655c3812d2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        const response = await api.json();
        this.loading.classList.add("d-none")        
        this.ui.displayDetails(response)

    }
}