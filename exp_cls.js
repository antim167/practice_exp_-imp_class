//class defintion

class MyClass{
    //1.property
    
     x=[];
    //2.constructo
      constructor(n){

        //the role of constructor is init. the property
            this.x=n;
          
      }

    //3.methods

    getMyFun(){
        console.log("hello good morning");
        return this.x;
        }
}
//object.property={};
//module.exports={};
module.exports=MyClass;