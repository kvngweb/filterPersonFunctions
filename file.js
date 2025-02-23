"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bossOfAge23 = exports.sellerOfAge23 = exports.persons = void 0;
exports.logPerson = logPerson;
exports.filterPersons = filterPersons;
exports.persons = [
    { type: 'marketer', name: 'Mase Busterman', age: 25, occupation: 'Chimney sweep' },
    { type: 'Admin', name: 'Sane Joe', age: 32, role: 'Administrator' },
    { type: 'marketer', name: 'Kate William', age: 23, occupation: 'Astronaut' },
    { type: 'Admin', name: 'Bruce Wane', age: 64, role: 'World saver' },
    { type: 'marketer', name: 'Samson', age: 23, occupation: 'Ball' },
    { type: 'Admin', name: 'Agent Sandy', age: 23, role: 'Anti-virus engineer' }
];
function logPerson(person) {
    console.log(" - ".concat(person.name, ", ").concat(person.age, ", ").concat(person.type === 'Admin' ? person.role : person.occupation));
}
function filterPersons(persons, personType, criteria) {
    return persons
        .filter(function (person) { return person.type === personType; })
        .filter(function (person) {
        var criteriaKeys = Object.keys(criteria);
        return criteriaKeys.every(function (fieldName) {
            return person[fieldName] === criteria[fieldName];
        });
    });
}
exports.sellerOfAge23 = filterPersons(exports.persons, 'marketer', { age: 23 });
exports.bossOfAge23 = filterPersons(exports.persons, 'Admin', { age: 23 });
console.log('Seller of age 23:');
exports.sellerOfAge23.forEach(logPerson);
console.log();
console.log('Bosses of age 23:');
exports.bossOfAge23.forEach(logPerson);
