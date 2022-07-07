async function myFunction(){
    const url_person = `https://randomuser.me/api/`
    const first_response = await (await fetch(url_person)).json()
    const city = first_response.results[0].location.city
    const name = first_response.results[0].name.first

    const second_response = await (await fetch(`http://api.weatherapi.com/v1/current.json?key=1bf8ac30f5414ea1a9131935220707&q=${city}&aqi=no`)).json()
    const weather = second_response.current.temp_c
    $("#backdrop-left-h1").text(name + " " + first_response.results[0].name.last)
    $("#backdrop-left-p").text(`A ${first_response.results[0].gender} and a resident of ${city}, ${first_response.results[0].location.country} where temperature right now is ${weather} °C`)
    await $("#myimg").attr("src", first_response.results[0].picture.thumbnail);

    const third_response = await (await fetch(`https://api.genderize.io?name=${name}`)).json()
    let correct = ""
    if(first_response.results[0].gender == third_response.gender){
        correct = " This Gender was predicted successfully!"
    }
    else{
        correct = " This Gender was not predicted successfully!"
    }
    $("#card-gender").text(`The gender for the name ${name} predicted by the website is ${third_response.gender} with the probability of it being correct of ${third_response.probability} as ${third_response.count} rows were counted to calculate the response.${correct}`)

    const pokemons = ["charizard", "squirtle", "bulbasaur"]
    const rand = Math.floor(Math.random() * 3)
    const forth_response = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons[rand]}`)).json()
    $("#card-pokemon").text(`The Pokemon ${name} starts with is ${pokemons[rand]}. It's weight is ${forth_response.weight} and it's type is ${forth_response.types[0].type.name}. It starts with a base experience of ${forth_response.base_experience}.`)

    const fifth_response = await (await fetch(`https://api.agify.io/?name=${name}`)).json()
    $("#age-predictor").text(`The age for the name ${name} predicted by the website is ${fifth_response.name} with the age of ${fifth_response.age} as ${fifth_response.count} rows were counted to calculate the response. While the actual age of the person is ${first_response.results[0].dob.age}`)
  }
  myFunction();
  $.get(`https://www.boredapi.com/api/activity`, function(resp){
    $("#bored").text(`You should ${resp.activity} of type ${resp.type} to spend time doing something fun!`)
  })
  $.get(`https://api.kanye.rest`, function(resp){
    $("#kanyesays").text(`"${resp.quote}"`)
  })