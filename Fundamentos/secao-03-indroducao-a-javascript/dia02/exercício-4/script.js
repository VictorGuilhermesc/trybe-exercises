let n = 5 

let index = 0

let line = []

for(index = 0; index < n; index += 1){

    line.push('*' * index)

}

line = line.join('')

for (index = 0; index < n; index +=1){

    console.log(line)

}
