import {Spacecraft, Containership} from './base-ship';

export class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number;

    constructor () {
        super('Hiperdiver');
        this.cargoContainers = 4;
    }

    jumpIntoHyperspace () {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace();
        } else {
            console.log('Failed to jump into hyperspace');
        }
    }
}
