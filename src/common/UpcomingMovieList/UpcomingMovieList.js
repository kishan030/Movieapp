import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    imageList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 * {
  "limit": 0,
  "movies": [
    {
      "artists": [
        {
          "first_name": "string",
          "id": "string",
          "last_name": "string",
          "profile_description": "string",
          "profile_url": "string",
          "role_type": "DIRECTOR",
          "wiki_url": "string"
        }
      ],
      "censor_board_rating": "U",
      "duration": 0,
      "genres": [
        "string"
      ],
      "id": "string",
      "poster_url": "string",
      "rating": 0,
      "release_date": "string",
      "status": "PUBLISHED",
      "storyline": "string",
      "title": "string",
      "trailer_url": "string",
      "wiki_url": "string"
    }
  ],
  "page": 0,
  "total_count": 0
}
 */


export default function SingleLineImageList() {
    const [Movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {

            const response = await fetch("http://localhost:8085/api/v1/movies", { method: 'GET' });
            const movies = await response.json();
            return movies;

        }
        fetchMovies().then(movies => {
            console.log(movies)
        })

    }, [])

    const classes = useStyles();


    return (
        <div className={classes.root}>
            {/* <ImageList className={classes.imageList} cols={2.5}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${item.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList> */}
            <h1>Movie list</h1>
        </div>
    );
}
