import axios from 'axios'
async function temp (event=0, context=0){
    const response = await axios.get("https://randomuser.me/api/")
    const {results } = response.data
    let {first, last} = results[0].name
    console.log(`My name is ${first} ${last} `)
}

temp()