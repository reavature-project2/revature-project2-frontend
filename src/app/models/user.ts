export class User {
    id: number;
    fname: string;
    lname: string;
    email: string;
    age: number;
    dlnum: string;
    password: string;

    constructor(fname: string = "", lname: string = "", email: string = "", age: number = 0, dlnum: string = "", password: string = "", id?: number) {
        this.id = id || 0;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.age = age;
        this.dlnum = dlnum;
        this.password = password;
    }
}