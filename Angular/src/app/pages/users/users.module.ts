import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
})
export class UsersModule {}