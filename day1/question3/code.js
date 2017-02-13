module.exports = {
	Car: function(type,model){
		this.type = type;
    	this.model = model;
	}
}
// S}
 
// anti-pattern! keep reading...
// function getAppleInfo() {
//     return this.color + ' ' + this.type + ' ' + this.price + ' apple';
// }
var honda = new Car('honda');
honda.type = "honda";
var ap = new Car();
ap.color = 'General';
ap.model = 'GM';
//ap.price = 
// console.log(honda.type);
// console.log(typeof ap);



// module.exports = {
// 	Car: function(type, model){
// 		this.type = type;
// 		this.model = model;
// 		// if (this.type == undefined && this.model == undefined ){
// 		// gm.type = 'General';
// 		// gm.model = 'GM';
// 		// }

// 	}
// 	//var honda =  new Car('honda');
// 	// var gm = new Car();
	
// }
// var honda =  new Car('honda');
// 		honda.type = 'honda';
// 		var gm = new Car();
// 		gm.type = 'General';
// 		gm.model = 'GM';
// function Car(type, model){
// 	this.type = type;
// 	this.model = model;
// 	//this.name = name;
// }
// var honda =  new Car('honda');
// var gm = new Car();
// 	if (this.type == undefined && this.model == undefined ){
// 		gm.type = 'General';
// 		gm.model = 'GM';
// 	}
// console.log(typeof honda);
// console.log(honda instanceof Car);
// console.log(typeof Car);
// console.log(gm.type);
// console.log(gm.model);

// function Person(first, last, age, gender, interests) {
//   this.name = {
//     first,
//     last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   this.bio = function() {
//     return (this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//   };
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name.first + '.');
//   };
// }
// 	​function cars(){
//     type:"sedan",
//     wheels:4​
// }
// var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
//  console.log(typeof person1);
//  console.log(typeof Person); 
//  console.log(typeof cars);

























// module.exports = {
//     Car: function(name, model){
//         // this.name = name;
//         // this.model = model;
//     }
// // //var honda = new car('honda');

// }

//     // var gm = new car();
//     // gm.name('General');
//     // gm.model('GM');
// }
// function car(name, model) {
//     this.name = name;
//     this.model = model;
// }
//     var honda = new car('honda');
//     var gm = new car();
//     gm.name='General';
//     gm.model='GM';

//     var toyota = new car('toyota', 'corrolla');

// console.log(typeof honda);
// console.log(honda instanceof car);