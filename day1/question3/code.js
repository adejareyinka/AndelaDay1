module.exports={
	Person: function(firstName, lastName, age, isMr){
		var prefix = isMr ? "Mr." : "Mrs." ;
		this.firstName=firstName;
		this.lastName=lastName;
		this.age = function(age){
		if(age >= 0 && age <18){
			return 'You are below 18 years old';
		}else if(age <= 150){
			return 'You are an adult';
		}else 
			return 'you can not be over 150 years';
		}
	this.getFullName = function(){
	 	return prefix + " "  + firstName + " " + lastName + ". " + age;
	 }
	}

}