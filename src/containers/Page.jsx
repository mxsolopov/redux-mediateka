import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import BookForm from '../components/BookForm';
import MovieForm from '../components/MovieForm';
import MusicForm from '../components/MusicForm';
import BookCard from '../components/BookCard';
import MovieCard from '../components/MovieCard';
import MusicCard from '../components/MusicCard';

const Page = () => {

    const typeOfContent = useSelector(state => state.typeOfContent.typeOfContent);
    const books = useSelector(state => state.books.books);
    const movies = useSelector(state => state.movies.movies);
    const music = useSelector(state => state.music.music);


    let form, content;
    if (typeOfContent === "books") {
        form = <BookForm />;
        content = books.map((book, index) => <BookCard key={index} name={book.name} author={book.author} description={book.description} id={book.id}/>);
    } else if (typeOfContent === "movies") {
        form = <MovieForm />;
        content = movies.map((movie, index) => <MovieCard key={index} name={movie.name} performers={movie.performers} time={movie.time} description={movie.description} id={movie.id} />);
    } else if (typeOfContent === "music") {
        form = <MusicForm />;
        content = music.map((music, index) => <MusicCard key={index} name={music.name} performers={music.performers} time={music.time} description={music.description} id={music.id} />);
    }

    return (
        <div className="mt-3">
            <Row>
                <Col xl="9">
                    <Row className="row-cols-1 row-cols-md-3 g-4">
                        {content}
                    </Row>
                </Col>
                <Col xl="3">
                    {form}
                </Col>
            </Row>
        </div>
    );
};

export default Page;