$(document).ready(function () {

  const fName = $('.first-name-input')
  const lName = $('.last-name-input')
  const userName = $('.user-name-input')
  const email = $('.email-address-input')
  const password = $('.password-input')

  const logName = $('.user-name')
  const logEmail = $('.email-address')
  const logPass = $('.password')

  const STORAGE = "STORAGE"
  const personList = []



  if (typeof (Storage) !== "undefined") {
    console.log("local storage available");
  } else {
    console.log("Oops. You data will gone after page reload");
  }

  function validtaionData(newAccount, valEmail, valPassword) {
    const getDataStorage = JSON.parse(localStorage.getItem(STORAGE))

    for (let index = 0; index < getDataStorage.length; index++) {
      const element = getDataStorage[index];
      if (element.email !== valEmail && element.password !== valPassword) {
        alert('successfully input')
        personList.unshift(newAccount)
        localStorage.setItem(STORAGE, JSON.stringify(personList))
        break
      } else {
        alert('Account already registered !')
        break
      }

    }

    // getDataStorage.forEach(result => {
    //   if (result.email !== valEmail && result.password !== valPassword) {
    //     alert('successfully input validasi')
    //     personList.unshift(newAccount)
    //     return localStorage.setItem(STORAGE, JSON.stringify(personList))
    //   } else {
    //     return alert('Account already registered !')
    //   }

    // });


  }


  function inputData() {

    const REGISTER = {
      firstName: fName.val(),
      lastName: lName.val(),
      userName: userName.val(),
      email: email.val(),
      password: password.val()
    }

    if (JSON.parse(localStorage.getItem(STORAGE)) === null) {
      if (fName.val() === '') {
        fName.css("border", "2px solid red")
        fName.attr("placeholder", "please fill in correctly")
      } else if (lName.val() === '') {
        lName.css("border", "2px solid red")
        lName.attr("placeholder", "please fill in correctly")
      } else if (userName.val() === '') {
        userName.css("border", "2px solid red")
        userName.attr("placeholder", "please fill in correctly")
      } else if (email.val() === '') {
        email.css("border", "2px solid red")
        email.attr("placeholder", "please fill in correctly")
      } else if (password.val() === '') {
        password.css("border", "2px solid red")
        password.attr("placeholder", "please fill in correctly")
      } else {

        personList.unshift(REGISTER)
        alert('successfully input')
        localStorage.setItem(STORAGE, JSON.stringify(personList))
      }
    }

    validtaionData(REGISTER, email.val(), password.val())


  }
  function checkLoginData() {
    const storageData = JSON.parse(localStorage.getItem(STORAGE))

    for (let range = 0; range <= storageData.length; range++) {
      const element = storageData[range];
      if (element.userName == logName.val() && element.email == logEmail.val() && element.password == logPass.val()) {
        alert("Silahkan Masuk")
        logName.val('')
        logEmail.val('')
        logPass.val('')
        break
      } else {
        continue
      }
    }
  }


  $('#register-form').submit(function (event) {
    event.preventDefault()
    inputData()
  })

  $('#login-form').submit(function (event) {
    event.preventDefault()
    checkLoginData()

  })

  const btnRegis = $('#btn-regis')
  const btnLogin = $('#btn-login')
  $('#register-form').css("display", "none")
  $('#login-form').css("display", "block")

  btnRegis.click(() => {
    $('#register-form').css("display", "block")
    $('#login-form').css("display", "none")
  })
  btnLogin.click(() => {
    $('#register-form').css("display", "none")
    $('#login-form').css("display", "block")
  })
})
