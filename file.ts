interface Seller {
    type: 'marketer';
    name: string;
    age: number;
    occupation: string;
}


interface Boss {
    type: 'Admin';
    name: string;
    age: number;
    role: string;
}


export type Person = Seller | Boss;


export const persons: Person[] = [
    { type: 'marketer', name: 'Mase Busterman', age: 25, occupation: 'Chimney sweep' },
    { type: 'Admin', name: 'Sane Joe', age: 32, role: 'Administrator' },
    { type: 'marketer', name: 'Kate William', age: 23, occupation: 'Astronaut' },
    { type: 'Admin', name: 'Bruce Wane', age: 64, role: 'World saver' },
    { type: 'marketer', name: 'Samson', age: 23, occupation: 'Ball' },
    { type: 'Admin', name: 'Agent Sandy', age: 23, role: 'Anti-virus engineer' }
];


export function logPerson(person: Person) {
    console.log(
        ` - ${person.name}, ${person.age}, ${person.type === 'Admin' ? person.role : person.occupation}`
    );
}


export function filterPersons<T extends Person>(
    persons: Person[],
    personType: Person['type'],
    criteria: Partial<T>
): T[] {
    return persons
        .filter((person): person is T => person.type === personType)
        .filter((person) => {
            let criteriaKeys = Object.keys(criteria) as (keyof T)[];
            return criteriaKeys.every((fieldName) => {
                return person[fieldName] === criteria[fieldName];
            });
        });
}


export const sellerOfAge23 = filterPersons<Seller>(persons, 'marketer', { age: 23 });
export const bossOfAge23 = filterPersons<Boss>(persons, 'Admin', { age: 23 });


console.log('Seller of age 23:');
sellerOfAge23.forEach(logPerson);


console.log();


console.log('Bosses of age 23:');
bossOfAge23.forEach(logPerson);