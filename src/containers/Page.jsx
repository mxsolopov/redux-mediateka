import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';
import ContentForm from '../components/ContentForm';
import ContentCard from '../components/ContentCard';

const Page = () => {

    const typeOfContent = useSelector(state => state.typeOfContent.typeOfContent);
    const content = useSelector(state => state.content.content);

    let contentData;
    if (typeOfContent === "books") {
        // content = books.map((book, index) => <BookCard key={index} name={book.name} author={book.author} description={book.description} id={book.id}/>);
    } else if (typeOfContent === "movies") {
        // content = movies.map((movie, index) => <MovieCard key={index} name={movie.name} performers={movie.performers} time={movie.time} description={movie.description} id={movie.id} />);
    } else if (typeOfContent === "music") {
        // content = music.map((music, index) => <MusicCard key={index} name={music.name} performers={music.performers} time={music.time} description={music.description} id={music.id} />);
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
                    <ContentForm />
                </Col>
            </Row>
        </div>
    );
};

export default Page;