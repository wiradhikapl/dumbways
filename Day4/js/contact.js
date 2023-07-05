/*
cara melihat/menggunakan
alert ("pop up")
Button ( Windows + . = Emot )

VAR -> versi lama -> Fuctional Scope (tidak recomend)
LET -> versi baru -> Block Scope
CONST ->  -> Block Scope

1 Example (data store)

deklarasi variable ( let ) macam-macam/terbatas
identifikasi ( name ) bisa random/diinginkan
penghubung ( = )
value/data  ( "Jhon doe" ) bisa random/diinginkan
Hasil         let name = "jhon doe"

2 Example

let name = "jhon doe"
let age = "30"

alert("my name is " + name + " and my age is " + age)
atau menggunakan template literal
alert('my name is ${name} and my age is ${age}')

3 Example (cara melihat = inspect -> console)

const x = 10

console.log(x)
*/

function submitData(event) {
    event.preventDefault()
    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    let objectData = {
        name:
        name,
        email,
        phone,
        subject,
        message
    }

    let arrayData = [name, email, phone, subject, message]

    console.log(objectData)

    if (name === "") {
        return alert('Name harus diisi!')
    } else if (email === "") {
        return alert('Email harus diisi!')
    } else if (phone === "") {
        return alert('Phone harus diisi!')
    } else if (subject === "") {
        return alert('Subject harus diisi!')
    } else if (message === "") {
        return alert('Message harus diisi!')
    }

    alert(`name : ${name}\nemail : ${email}\nphone : ${phone}\nsubject : ${subject}\nmessage: ${message}`)

//    let a = document.createElement('a')
//    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phone}`
//    a.click()

//    const emailReceiver = "noob@gmail.com"
}

