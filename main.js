console.log("test");
// var collectedDate;
//  function collectDate() {
//         // Get the value entered in the date input field
//         var enteredDate = document.getElementById('dateInput').value;
//         collectedDate = enteredDate;

//         // test
//         console.log("Collected Date:", collectedDate); 
//         event.preventDefault();
//         getData();
//  }


// console.log("Collected Date:", collectedDate);
// ${collectDate};
// async await
async function getData() {
    try {
        const foobar = await fetch("https://api.nasa.gov/planetary/apod?api_key=kOYThyIatfTwUidJB3LIFeSxu14JNiMshk09RpGt&thumbs=true");
        // console.log(foobar);

        // x = data fetched from server
        const x = await foobar.json();

        console.log(x);
        // console.log(x.date);

        const content = document.querySelector("#pic");
        content.innerHTML = `
            <a href="${x.url}"><img src="${x.thumbnail_url}"></a>
            <h2>${x.title}</h2>
            <p>${x.date}<p>
            <p>${x.explanation}</p>
        `;

    } catch (error) {
        console.warn(`Nope: ${error}`);
        //console.warn 
    }
}

getData();