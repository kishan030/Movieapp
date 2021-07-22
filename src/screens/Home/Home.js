import React from 'react'
import Header from '../../common/header/Header'
import UpcomingMovieList from '../../common/UpcomingMovieList/UpcomingMovieList'





const upcomingMoviesstyle = {
    backgroundColor: '#ff7f7f',
    padding: '5px',
    textAlign: 'center'

}



export default function Home() {
    return (
        <div>
            <Header></Header>
            <div style={upcomingMoviesstyle}>Upcoming Movies</div>
            <UpcomingMovieList></UpcomingMovieList>
        </div>
    )
}
