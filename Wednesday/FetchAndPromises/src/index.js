import 'bootstrap/dist/css/bootstrap.css'
// import jokes from "./jokes";

// const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
// document.getElementById("jokes").innerHTML = allJokes.join("");

// const getJokeByIDElement = document.getElementById("joke_id");
// joke_by_id_button.addEventListener('click', (event) => {
//     event.preventDefault();
//     const newJokeByID = jokes.getJokeById(getJokeByIDElement.value)
//     document.getElementById("joke_id_text").innerHTML = newJokeByID
// }
// )

// const addJoke = document.getElementById("new_joke_id");
// new_joke_btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     if(addJoke !== undefined)
//     jokes.addJoke(addJoke);

// })
quote_button.addEventListener('click', (event) =>{
    event.preventDefault();
    document.getElementById("quote_div").innerHTML = fetch("https://studypoints.info/jokes/api/jokes/period/hour") .then(res => res.json())
    
})