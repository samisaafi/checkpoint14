import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import Add from "./components/Add";
import DescriptionPage from "./components/DescriptionPage";
import l1 from './Photos/bm.jpeg';
import l2 from './Photos/gf.jpeg';
import l3 from './Photos/hp1.jpeg';
import l4 from './Photos/hp2.jpeg';
import l5 from './Photos/hp3.jpeg';
import l6 from './Photos/hp4.jpeg';
import l7 from './Photos/hp5.jpeg';
import l8 from './Photos/hp6.jpeg';
import l9 from './Photos/hp.7.jpeg';
import l10 from './Photos/hp8.jpeg';

function App() 
  const [Movies, setMovies] = useState([
    {
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      rating: 9.2,
      img: l2,
      trailerLink: "https://www.youtube.com/embed/trailer-link-1"
    },
    {
      title: 'The Dark Knight',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/29/MPW-14698',
      rating: 9.0,
      img: l1,
      trailerLink: "https://www.youtube.com/embed/trailer-link-2"
    },
    {
      title: 'Harry Potter and the Sorcerers Stone',
      description: 'It is a story about Harry Potter, an orphan brought up by his aunt and uncle because his parents were killed when he was a baby. Harry is unloved by his uncle and aunt but everything changes when he is invited to join Hogwarts School of Witchcraft and Wizardry and he finds out he is a wizard.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
      rating: 7.6,
      img: l3
    },
    {
      title: 'Harry Potter and the Chamber of Secrets',
      description: 'The story follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, where the Heir of Salazar Slytherin opens the Chamber of Secrets, unleashing a monster that petrifies the school"s students.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
      rating: 7.4,
      img: l4
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      description: 'Harry Potter & The Prisoner of Azkaban is about Harry"s 3rd year at Hogwarts. Along with friends Ron and Hermione, Harry investigates the case of Sirius Black, an escaped prisoner from Azkaban, the wizard prison.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
      rating: 7.9,
      img: l5
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      description: 'It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry"s name into the Triwizard Tournament, in which he is forced to compete.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
      rating: 7.7,
      img: l6
    },
    {
      title: 'Harry Potter and the Order of the Phoenix',
      description: 'The film stars Daniel Radcliffe as Harry Potter, alongside Rupert Grint and Emma Watson as Harry"s best friends Ron Weasley and Hermione Granger. Its story follows Harry"s fifth year at Hogwarts School of Witchcraft and Wizardry as the Ministry of Magic is in denial of Lord Voldemort\'s return.',
      posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
      rating: 7.5,
      img: l7
    },
  { title: 'Harry Potter and the Half-Blood Prince',
  description: 'In this book, Harry Potter learns a lot about Lord Voldemort"s past, and Harry Potter prepares for the final battle against his nemesis with the help of Headmaster Dumbledore. But in that time, Voldemort returns to power, and makes a plan to destroy Harry.',
  posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
  rating: 7.6,
  img:l8
  },
  { title: ' Harry Potter and the Deathly Hallows part 1 ',
  description: 'As Harry, Ron and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows.',
  posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
  rating: 7.7,
  img:l9
  },
  { title: 'harry potter and the deathly hallows part 2 ',
  description: 'Harry, Ron, and Hermione search for Voldemort"s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts. Harry, Ron, and Hermione search for Voldemort"s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.',
  posterURL: 'https://www.movieposter.com/posters/archive/main/4/A70-2494',
  rating: 8.1,
  img:l10
    },
  ]);


  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [showRate, setShowRate] = useState(false);
  const handleShowRate = () => {
    setSearchRate(0);
    setShowRate(!showRate);
  };

  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(5);

 
  const AddToMovie = (Movie) => {
    setMovies([...Movies, Movie]);
  };

  console.log(Movies);
  
  return (
    <Router>
      <div className="App">
        <button style={{ margin: "20px" }} onClick={handleShow}>
          {show ? "Close" : "Add New Movie"}
        </button>
        {show && <Add AddToMovie={AddToMovie} />}

<Search setSearchName={setSearchName} setSearchRate={setSearchRate} />
<button style={{ margin: "20px" }} onClick={handleShowRate}>
  {show ? "Clear" : "Search by Rate"}
</button>
{showRate && (
  <Search searchRate={searchRate} setSearchRate={setSearchRate} />
)}
        <Switch>
          <Route path="/" exact>
            <div className="App">
            
              <MovieList
                Movies={Movies}
                searchName={searchName}
                searchRate={searchRate}
              />
            </div>
          </Route>
          <Route path="/description/:index">
            <DescriptionPage Movies={Movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );


export default App;
