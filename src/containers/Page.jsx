import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, CardBody, Button, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import BookForm from '../components/BookForm';
import MovieForm from '../components/MovieForm';
import MusicForm from '../components/MusicForm';

const Page = () => {

    const typeOfContent = useSelector(state => state.typeOfContent.typeOfContent);
    let form;
    if (typeOfContent === "books") {
        form = <BookForm />;
    } else if (typeOfContent === "movies") {
        form = <MovieForm />;
    } else if (typeOfContent === "music") {
        form = <MusicForm />;
    }

    return (
        <div className="mt-3">
            <Row>
                <Col xl="9">
                    <Row className="row-cols-1 row-cols-md-3 g-4">
                        <Col>
                            <Card className="h-100">
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Card title
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"
                                    >
                                        Card subtitle
                                    </CardSubtitle>
                                    <CardText>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </CardText>
                                    <Button>
                                        Button
                                    </Button>
                                </CardBody>
                            </Card>
                        </Col>
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