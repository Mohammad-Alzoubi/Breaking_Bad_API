// console.log("Old fetch API");
// fetch("https://www.breakingbadapi.com/api/characters/1")
//     .then(function(response){
//       // console.log(response);
//       return response.json()
//     })
//     .then (function(data){
//       console.log(data)
//       return data
//     })

// console.log("New fetch API");
$api = "https://www.breakingbadapi.com/api/characters"


async function getData() {
  try{
    const respons = await fetch(`${$api}`)
    const data    = await respons.json()
    // console.log(data[0]);
    printData (data);
  }catch(e){
    console.log("Error: ",e.message);
  }
}

function printData(data){
  var content  = document.querySelector("#content")
  var actor    = document.querySelector("#actor")

  actor.innerHTML = `
    <select class="test" onchange = getCh(this.value)>
      <option selected>Select One …</option>
      ${
        data.map(x => `<option value = '${x.name}'>${x.name}</option>`)
      }
    </select>`
}


async function getCh(e){
  const respons = await fetch(`${$api}?name=${e}`)
  const data    = await respons.json()

  content.innerHTML  = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>Actor Name: ${data[0].portrayed}</h4>
    <img src= "${data[0].img}" width = "250"/>
    `
}
getData();


