import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Alert } from 'reactstrap';
import ContentForm from '../components/ContentForm';
import ContentCard from '../components/ContentCard';

const Page = () => {

    const typeOfContent = useSelector(state => state.typeOfContent.typeOfContent);
    const content = useSelector(state => state.content.content);

    let contentData;
    if (typeOfContent === "books") {
        const books = content.filter(item => item.type === "books");
        books.length === 0 ?
            contentData = <div className="w-100">
                <Alert
                    color="primary"
                >
                    Здесь пока ничего нет. Добавьте первую книгу.
                </Alert>
            </div> :
            contentData = books.map((book, index) => <ContentCard key={index} type="books" name={book.name} performers={book.performers} description={book.description} id={book.id} />);
    } else if (typeOfContent === "movies") {
        const movies = content.filter(item => item.type === "movies");
        movies.length === 0 ?
            contentData = <div className="w-100">
                <Alert
                    color="primary"
                >
                    Здесь пока ничего нет. Добавьте первый фильм.
                </Alert>
            </div> :
                contentData = movies.map((movie, index) => <ContentCard key={index} type="movies" name={movie.name} performers={movie.performers} time={movie.time} description={movie.description} id={movie.id} />);
    } else if (typeOfContent === "music") {
        const music = content.filter(item => item.type === "music");
        music.length === 0 ?
            contentData = <div className="w-100">
                    <Alert
                        color="primary"
                    >
                        Здесь пока ничего нет. Добавьте первую песню.
                    </Alert>
                </div> :
                    contentData = music.map((item, index) => <ContentCard key={index} type="music" name={item.name} performers={item.performers} time={item.time} description={item.description} id={item.id} />);
    }

    return (
        <div className="mt-3">
            <Row>
                <Col xl="9">
                    <Row className="row-cols-1 row-cols-md-3 g-4">
                        {contentData}
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