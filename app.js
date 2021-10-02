
//API Key: AIzaSyC3OdAsJNJMjiPI8wnnt4zycydn4bTMCSY

//Standard format: https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

//max results: https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=40





console.log('the javascript file is connected!')


$(()=>{
  $('.search').on('click', (event) => {
    event.preventDefault()

    const userInput = $('.inputbox').val()
    console.log('wow')


  $.ajax({
  url: `https://www.googleapis.com/books/v1/volumes?q=fantasy`
  // type: "GET"
  }).then(
  (data) => {
    alert("Retrieved the book " + data.length + " records from the dataset!");
    console.log(data.items[1].volumeInfo.title)
    // $('#title').html(data.Title)
    // $('#year').html(data.Year)
    // $('#rated').html(data.Rated)
  },
  ()=> {
    console.log('bad request')
  }

    );

  })

})

//intersting
///
//
// let x=null
//
// setTimeout(() => {
//   x ="retrieved"
// }, 500)
//
// console.log(x)
