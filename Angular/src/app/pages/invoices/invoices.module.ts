import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvoicesComponent } from "./invoices.component";

@NgModule({
    declarations: [InvoicesComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class InvoicesModule {

}