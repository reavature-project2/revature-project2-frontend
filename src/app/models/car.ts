export class Car {
    car_make: string;
    car_model: string;
    car_year: number;
    car_class: string;
    //combination_mpg: number;
    car_trans: string;

    constructor(make: string, model: string, v_Year: number, v_class: string, 
 trans: string) {
        this.car_make = make
        if(this.car_model === 'f150 pickup 2wd') {
          this.car_model = 'F150'
        } else {
          this.car_model = model
        }
        this.car_model = model
        this.car_year = v_Year
        this.car_class = v_class
        // this.combination_mpg = combination_mpg
        this.car_trans = trans
      }
}