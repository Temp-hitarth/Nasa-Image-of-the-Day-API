console.log("test");
// let selectedDate;

// Function to get today's date in YYYY-MM-DD format
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Initialize the selectedDate with today's date
let selectedDate = getTodayDate();
console.log(selectedDate);


async function getData() {
    try {

        // Foobar is just a variable name, can be anything you want
        // So don't loose your shit trying to make sense of "foobar"
        const apiKey = "kOYThyIatfTwUidJB3LIFeSxu14JNiMshk09RpGt";
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${selectedDate}&thumbs=true`;
        const foobar = await fetch(apiUrl);
        // console.log(foobar);

        
        // .json() method is used to parse data in Json format
        // x = data fetched from server
        // x is foobar.json();
        const x = await foobar.json();

        console.log(x);
        // console.log(x.date);

        const content = document.querySelector("#pic");
        
        // Apply fade-in effect
        content.classList.remove('visible');  // Remove 'visible' to reset the fade-in

        // Returning Dynamic HTML elements
        // x is the variable with json readable data
        content.innerHTML = `
            <a href="${x.url}"><div class="imgContainer"><img src="${x.url}"></div></a>
            <h2>${x.title}</h2>
            <p>${x.date}<p>
            <p>${x.explanation}</p>
        `;

        // Trigger reflow to restart the animation
        void content.offsetWidth; // This line forces the browser to reflow/repaint

        // Apply the fade-in effect
        content.classList.add('visible');

    // Catch error block
    } catch (error) {
        console.warn(`Nope: ${error}`);
        //console.warn 
    }
}

getData();


// Display date 
function changeDate() {
    const dateInput = document.getElementById('dateInput');
    dateInput.addEventListener('change', function() {
    selectedDate = dateInput.value;});
    console.log("Date changed to: ", selectedDate)
    // document.getElementById('display').innerHTML = `Selected date: ${selectedDate}`;
    getData();
}

changeDate(); 