
// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if (customer.isGold) {
//       getTopMovies((movies) => {
//         console.log('Top movies: ', movies);
//         sendEmail(customer.email, movies, () => {
//           console.log('Email sent...')
//         });
//       });
//     }
//   });

  async function emailCustomer(id){
      try{
            const customer = await getCustomer(1);  //get customer details
            console.log('Customer: ', customer);    //display details
            if(customer.isGold){                    // check if customer is a gold member
                const movies = await getTopMovies();// get movies
                console.log('Top movies: ', movies);
                const email = await sendEmail(customer.email, movies) // send to email from customer object and list of movies
                console.log('Email sent..');
            }
            
      }
      catch(err){
            console.log('Error', err.message);
      }
  }
  emailCustomer();
  
  function getCustomer(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 
              id: 1, 
              name: 'Mosh Hamedani', 
              isGold: true, 
              email: 'email' 
            });
          }, 4000);
      });   
  }
  
  function getTopMovies() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
          }, 4000); 
      });
  }
  
  function sendEmail(email, movies, ) {
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve();
          }, 4000);
      });
    
  }