
//cara melihat/menggunakan
//alert ("pop up")
//Button ( Windows + . = Emot )

//VAR -> versi lama -> Fuctional Scope (tidak recomend)
//LET -> versi baru -> Block Scope
//CONST ->  -> Block Scope

//1 Example (data store)

//deklarasi variable ( let ) macam-macam/terbatas
//identifikasi ( name ) bisa random/diinginkan
//penghubung ( = )
//value/data  ( "Jhon doe" ) bisa random/diinginkan
//Hasil         let name = "jhon doe"

//2 Example

//let name = "jhon doe"
//let age = "30"

//alert("my name is " + name + " and my age is " + age)
//atau menggunakan template literal
//alert('my name is ${name} and my age is ${age}')

//3 Example (cara melihat = inspect -> console)

//const x = 10

//console.log(x)


function submitData(event) {
    event.preventDefault()
    
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    // contoh memanggil OBJECT dengan tanda { } kurung kurawal | bersamaan dengan nama object dan nilai 

    let objectData = {
        name:
        name,
        email,
        phone,
        subject,
        message
    }
    //  memanggil memanggil ARRAY dengan tanda [ ] kurung siku | hanya memanggil nilai saja | nama index {0,1,2,3,...}
    // let arrayData = [name, email, phone, subject, message]

    console.log(objectData)

    if (name === "") {
        return alert('Data cannot be empty!')
    } else if (email === "") {
        return alert('Data cannot be empty!')
    } else if (phone === "") {
        return alert('Data cannot be empty!')
    } else if (subject === "") {
        return alert('Data cannot be empty!')
    } else if (message === "") {
        return alert('Data cannot be empty!')
    }

    const emailReceiver = "google@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phone}`
    a.click()
    
    alert(`name : ${name}\nemail : ${email}\nphone : ${phone}\nsubject : ${subject}\nmessage: ${message}`)
    
}

