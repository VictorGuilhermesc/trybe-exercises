const school = {
    lessons: [
    {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
    },
    {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
    },
    {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
    },
    {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
    },
]
};

const valor = (arrPosition) => {


    return school.lessons[arrPosition]


}

console.log(valor(3))


const somaEstudantes = () => {

    let soma = null

    for (let index = 0; index < school.lessons.length; index += 1){
        soma += school.lessons[index].students
    }

    return soma

}

console.log(somaEstudantes())


const verifivaChave = () => {
    for(let index = 0; index < school.lessons.length; index += 1){
        if (school.lessons[index].professor === undefined){
            return false
        }else{
    
            return true
        }

    }

}
console.log(verifivaChave())

function changeShift(database, courseName, newShift) {
    for (let i = 0; i < database.lessons.length; i+=1) {
        if (database.lessons[i].course === courseName) {
        database.lessons[i].shift = newShift
        break; // Encerra o loop assim que o curso é encontrado
    }
    }
    return database;
}

const updatedSchool = changeShift(school, 'Python', 'Noite')

console.log(updatedSchool)