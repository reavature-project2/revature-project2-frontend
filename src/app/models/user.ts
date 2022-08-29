export class User {
    id: number;
    f_name: string;
    l_name: string;
    email: string;
    age: number;
    dr_lic_number: string;
    pass: string;

    constructor(fname: string = "", lname: string = "", email: string = "", age: number = 0, dlnum: string = "", password: string = "", id?: number) {
        this.id = id || 0;
        this.f_name = fname;
        this.l_name = lname;
        this.email = email;
        this.age = age;
        this.dr_lic_number = dlnum;
        this.pass = password;
    }
}