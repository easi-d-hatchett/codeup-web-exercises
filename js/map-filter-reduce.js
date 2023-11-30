const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

const emails = users.map(user => user.email);
console.log(emails);

const yearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
const averageExperience = yearsOfExperience/ users.length;
console.log(yearsOfExperience);
console.log(averageExperience);

const longestEmail = users.reduce((longEmail , user) => (longEmail.length > user.email.length)? longEmail : user.email, "" );
const longestEmailButIfElse = users.reduce((longEmail , user) => {
    if (longEmail.length > user.email.length) {
        return longEmail;
    } else {
        return user.email;
    }
}, "");
console.log(longestEmail);

const listOfInstructors = users.reduce((str , user , i) => (i === users.length - 1) ? `${str} ${user.name}.` : `${str} ${user.name},`, "Your instructors are:");
//const instructors = users.reduce((str , user)=> `${str} ${user.name},`," Your instructors are:");
console.log(listOfInstructors);
