
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPagePage } from "./pages/landing-page/landing-page.page"; 
import { PokemonCataloguePage } from "./pages/pokemon-catalogue/pokemon-catalogue.page";
import { ProfilePage } from "./pages/profile/profile.page";

const routes: Routes = [
    {
        path: "", //When the path is empty....
        pathMatch: "full", //This checks if the path is an empty string. If it is empty then...
        redirectTo: "/login" //....redirect to /login (landingpage), so that the first thing the user meets is the login page...       
    },
    {
        path: "login",
        component: LandingPagePage
    },
    {
        path: "pokemons",
        component: PokemonCataloguePage
    },
    {
        path: "profile",
        component: ProfilePage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}