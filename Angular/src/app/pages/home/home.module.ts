import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class HomeModule {

}