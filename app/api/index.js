async function returnMovies(intFilter, strQuery ){



    //if there is no intFilterFound
    if(!(intFilter)){
        return "No filter type selected"
    }

    //if no strQuery found
    if(!(strQuery)){
        return "No query selected"
    }

    //setting map of filter/sorting option for faster use later
    const filterOptions = new Map()

    filterOptions.set(1,'title')
    filterOptions.set(2,'year')
    filterOptions.set(3,'rating')
    filterOptions.set(4,'genre')

    
    //if the given intfilter is not in map, return this error
    if(!(filterOptions.has(intFilter))){
        return "filterType not found in map"
        
    }

    let strFilterKeyword = filteredMovies.get(filterOptions)

    //make sure the user input is lowercase to avoid case sensitive
    //TODO make sure filter also user .tolowercase when comparing
    let strSearchKey = strQuery.toLowerCase()







    

    


    
    const baseUrl = "http://localhost:3000"
    let moviesUrl = new URL("/data/movies.json",baseUrl)

    


    const movieList = await fetch(moviesUrl)

    const data = await movieList.json()

    
    const filteredMovies = data.filter(movie => movie.year )

    



    


    
}



filterMovies 

    set variable to filter type

    make variable and set it = value to some array 
     

    return the filter array

    if null we want to send a certain value to signify to the code





