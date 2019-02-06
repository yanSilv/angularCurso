import { NgModule, ModuleWithProviders } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

@NgModule({
    declarations: [
        InputComponent, 
        RadioComponent, 
        RatingComponent, 
        SnackbarComponent
    ],
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule
    ],
    exports: [
        InputComponent, 
        RadioComponent, 
        ReactiveFormsModule, 
        CommonModule, 
        FormsModule, 
        RatingComponent,
        SnackbarComponent
    ]
})
export class SharedModule {}