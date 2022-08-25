export class Car {
    make: string;
    model: string;
    v_Year: number;
    v_Class: string;
    combination_mpg: number;
    trans: string;

    constructor(make: string, model: string, v_Year: number, v_Class: string, 
        combination_mpg: number, trans: string) {
        this.make = make 
        this.model = model
        this.v_Year = v_Year
        this.v_Class = v_Class
        this.combination_mpg = combination_mpg
        this.trans = trans
      }
}