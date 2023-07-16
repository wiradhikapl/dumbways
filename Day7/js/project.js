const project = []

function addData(event) {
    event.preventDefault()
 
let projectName = document.getElementById("input-projectname").value
let startDate = document.getElementById("input-startdate").value
let endDate = document.getElementById("input-endDate").value
let description = document.getElementById("input-descripton").value

const projects = {
    projectName,
    startDate,
    endDate,
    description,
}

product.push(projects)
console.log(project)
}