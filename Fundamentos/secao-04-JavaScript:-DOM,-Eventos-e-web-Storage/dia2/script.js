let section = document.getElementById('where-are-you')

if (section.innerHTML.includes('<h2>')) {

    let h2Element = section.querySelector('h2');
    section.removeChild(h2Element)

}