const A = require('./exp_cls');
let n = [
    {
        name: "antim",
        age: 22,
        getname() {
            return (this.name);
        }
    },
        {
        name: "songara",
        age: 43,
        getname() {
            return this.age;
        }
    }
];
let obj = new A(n);
let y=obj.getMyFun();
let t=y[0].getname();
console.log(t);