var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!
var coolPeople = people.filter(isCool)
console.log(coolPeople)
// Write code that uses the filter function, and the below isCool function to return a list of people who are cool.

function isCool(person) {
	return person.coolnessScore > 20;
}

// Example results:
//
// Bob is cool
// Isolde is cool
