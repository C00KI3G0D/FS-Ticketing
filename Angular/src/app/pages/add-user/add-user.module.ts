import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddUserComponent } from "./add-user.component";

@NgModule({
    declarations: [AddUserComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class AddUserModule {}