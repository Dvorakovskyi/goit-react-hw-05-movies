const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTE3NmZjNDE2MzI4ZTk1ZGY5ZWFlMWE5MmExOTZkYSIsInN1YiI6IjY0NzQ5YmNmZGQ3MzFiMmQ3OGJhM2VhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yI8oxgZajMgWItmBQF3P_YhUKz9fcoHMEmZxHaInDx0'
  }
};;

export const fetchTrending = () => {
    return fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
        .then(response => {
            if (!response.ok) {
          throw new Error(response.status)
            }
            
            return response.json();
  })
}