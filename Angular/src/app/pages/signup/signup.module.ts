import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SignupComponent } from "./signup.component";

@NgModule({
    declarations: [SignupComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SignupModule {}
