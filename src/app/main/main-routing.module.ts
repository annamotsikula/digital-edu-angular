import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HomeComponent } from "../home/home.component";

const ROUTES: Route[] = [
    {
        path: 'home',
        component: HomeComponent,
    }
]
@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule]
  })
  export class MainRoutingModule { }
  