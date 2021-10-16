
















//API Key for books: AIzaSyC3OdAsJNJMjiPI8wnnt4zycydn4bTMCSY

//Standard format: https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

//max results: https://www.googleapis.com/books/v1/volumes?q=fantasy&maxResults=40

// API key for omdb: 36c4fe16

// OMDB API Site with API key already: `https://www.omdbapi.com/?apikey=36c4fe16&t=${userInput}`





console.log('the javascript file is connected!')


$(()=>{
  $('.search').on('click', (event) => {
    event.preventDefault()
    $('.display').empty()
    $('.modalarea').empty()
    const userInput = $('.inputbox').val()
    console.log('wow')


  $.ajax({
  url: `https://www.googleapis.com/books/v1/volumes?q=${userInput}&maxResults=40`
  // type: "GET"
  }).then(
  (data) => {
//////////////////for loop
    $('.card-button').css('visibility', 'visible')
    for (let i=0; i<data.items.length-1; i++){
      console.log(data.items[i].volumeInfo.title)

      const $containereach = $('<div>').addClass(`Cards favorite${i}`)
      $containereach.appendTo($('.display')) //each card container for the Books
////////////////////Covers
      //below is the code for the book covers adding to the card containers
      if (data.items[i].volumeInfo.imageLinks!=undefined){
        const $cover = $('<img>').attr('src',data.items[i].volumeInfo.imageLinks.thumbnail)
        $cover.attr('id', `cover${i}`)
        $cover.addClass(`openModal${i}`)
        $cover.appendTo($containereach)
      } else {
        const $cover = $('<h3>').text(data.items[i].volumeInfo.title)
        $cover.attr('id', `cover${i}`)
        $cover.addClass(`openModal${i}`)
        $cover.appendTo($containereach)
      }

      // const $modalbutton = $('<button>').text('Info')
      // $modalbutton.addClass(`openModal${i}`)
      // $modalbutton.appendTo($containereach) //creating modal button
///////////////////////modal
      // const openModal = () => {
        const $modal = $('<div>').attr('id', `modal${i}`).addClass('modal')
        $modal.appendTo($('.modalarea'))
        const $modaltextbox = $('<div>').addClass('modal-textbox')
        $modaltextbox.css({"font-family": "'Libre Baskerville', serif"})
        $modaltextbox.appendTo($modal)
        const $closetag = $('<button>').addClass(`close${i}`).text('Close').appendTo($modaltextbox)


///////////////Adding the book info below
        const $books =$('<div>').text(data.items[i].volumeInfo.title).addClass(`title value${i}`);
        $books.appendTo($modaltextbox);
        $books.css({'margin-bottom':'15px'})
          const $author = $('<a>').text(data.items[i].volumeInfo.authors)
          $author.appendTo($books)
          const $date = $('<a>').text(data.items[i].volumeInfo.publishedDate)
          $date.appendTo($books);
          const $description = $('<a>').text(data.items[i].volumeInfo.description)
          $description.appendTo($books);
          const $favoritetag = $('<button>').text('Favorites').attr('id', `favorite${i}`).appendTo($modaltextbox)
          const $favoritediv = $('<div>').addClass('favorite').appendTo($('.favarea'))
          // const $break = $('<br>').appendTo($books)
        // }

///////////////Grabbing Elements for Buttons
        $(`#modal${i}`).css('display', 'none')
        //setting the modal to not display until clicked
        const $openBtn = $(`.openModal${i}`);
        // const $modal = $('#modal'); grabbed earlier
        const $closeBtn = $(`.close${i}`);
        // grab the movie nextbutton
        const $favoriteBtn = $(`#favorite${i}`);

        //Event Handlers
        const openModal = () => {

          $(`#modal${i}`).css('display', 'block');
          // console.log(`#modal${i}`)
        }

        const closeModal = () => {
          $(`#modal${i}`).css('display', 'none');
          // console.log(`#modal${i}`)
        }
////////////Grabbing Movie
          const moveFavorite = (event) => {
            event.preventDefault()
            $('.my-button').css('visibility', 'visible')
            let favid = $(event.target).attr('id')
            $(`.${favid}`).appendTo($favoritediv)
          }

        //Event Listeners
        $openBtn.on('click', openModal);

        $closeBtn.on('click', closeModal);

        $favoriteBtn.on('click', moveFavorite);




// console.log(`.value${i}`)
  ///end of for loop
    }
  //end of for loop

  ////////////////////CAROUSEL
        // $closetag.on('click', openModal => {
        //   $modal.css('display', 'none');
        // })
        $('.Cards').css('display', 'none')
        $('.Cards:nth-child(-n+6)').css({'display':'flex'})
              let nextrange1 = 1
              let nextrange2 = 6
              // let prevrange1 = 45
              // let prevrange2 = 40
              const numofCards = $('.display').children().length
              console.log(numofCards)
              const resetnum1 = numofCards-5
              const resetnum2 = numofCards


              $('.next').on('click', () => {
                $('.Cards').css('display', 'none')
                    if(nextrange1<(numofCards-8) && nextrange2<(numofCards-5)) {
                  nextrange1+=5
                  nextrange2+=5
                 } else {
                  nextrange1 = 1
                  nextrange2 = 6
                 }
                 $(`.Cards:nth-child(n+${nextrange1}):nth-child(-n+${nextrange2})`).css('display', 'block')
              })



              $('.previous').on('click', () => {
                $('.Cards').css('display', 'none')
                if(nextrange1>=4 && nextrange2>=9) {
               nextrange1-=4
               nextrange2-=4
             } else {
               console.log(numofCards)
               nextrange1 = resetnum1
               nextrange2 = resetnum2
               console.log(nextrange1)
               console.log(nextrange2)
             }
             console.log(nextrange1)
             console.log(nextrange2)
             $(`.Cards:nth-child(n+${nextrange1}):nth-child(-n+${nextrange2})`).css('display', 'block')
            })




  // const $globooks = $('.title')
  // $globooks.css('display', 'none')
  // $globooks:first-of-type.css('display','block')


    // $('#title').html(data.Title)
    // $('#year').html(data.Year)
    // $('#rated').html(data.Rated)
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
