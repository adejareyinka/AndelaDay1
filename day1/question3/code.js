module.exports={
	Person: function(firstName, lastName, isMr){
		var prefix = isMr ? "Mr." : "Mrs." ;
		this.firstName = firstName;
		this.lastName = lastName;
		this.wage = 0;
		this.salary = salary;
		this.getFullName = function(){
	 		return prefix + " "  + firstName + " " + lastName + ".";
	 	}
		function salary(pay){
			with(this){
				wage = pay;
			}
		}		
	}
}