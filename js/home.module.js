import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";
export class Home{
    constructor (){
        document.querySelectorAll(".nav-link").forEach((link)=>{
            link.addEventListener("click",()=>{
                this.changeActiveLink(link)
                const category = link.dataset.category
                this.getGames(category);
                })
        })
        this.body = document.querySelector("body");
        this.loading = document.querySelector(".loading");
        this.getGames("mmorpg");
        this.ui = new Ui;
        this.details =document.getElementById("details");
        this.home =document.getElementById("home");
        // this.detailSection = new Details();
    }
    async changeActiveLink(link){
        document.querySelector(".navbar-nav .active").classList.remove("active")
        link.classList.add("active")
        
    }

    async getGames(cat){
        this.loading.classList.remove("d-none")
        const options ={
            method:"get",
            headers:{
                'X-RapidAPI-Key': 'df2fbc1dfamshc62c99a17a65187p16d888jsn27655c3812d2',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,options);
        const response = await api.json();
        this.loading.classList.add("d-none")
        this.body.style.overflow=("auto");
        console.log(response);
        this.ui.displayGames(response)
        document.querySelectorAll(".my-card").forEach((item)=>{
            item.addEventListener("click",()=>{
                this.details.classList.remove("d-none")
                this.home.classList.add("d-none")
                // const detailsSection=new Details();
                new Details(item.dataset.id);
                
            })
        })
        
    }
    
}