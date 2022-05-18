
const lang = 'en';
const ru = ('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
const en = ('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');

if (lang === 'ru') {
    console.log(ru);
} else if (lang === 'en') {
    console.log(en);
} else {
    console.log('');
}


switch (lang) {
    case 'ru':
        console.log(ru);
        break;
    case 'en':
        console.log(en);
        break;
    default:
        console.log('');
}


const langArr = [];
langArr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
langArr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(langArr[lang]);

const langArray = {
    ru: [langArr.ru],
    en: [langArr.en]
};
console.log(langArray[lang]);


const namePerson = prompt('Как ваше имя?');

console.log((namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Максим') ? 'преподаватель' :
    'студент');

