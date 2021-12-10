import React, { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeBookAction, editBookAction } from '../actions/actions';

const BookCard = ({ name, author, description, id }) => {

    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const editBookItem = (params) => {
        dispatch(editBookAction(params));
    };

    return (
        <Col>
            <div className={!isEdit ? '': 'border border-primary rounded'}>
                <Card className="h-100">
                    <CardBody>
                        {!isEdit ?
                            <CardTitle tag="h5">
                                {name}
                            </CardTitle> :
                            <Input
                                name="name"
                                type="text"
                                value={name}
                                onChange={e => editBookItem({ id: id, prop: "name", value: e.target.value })}
                                required
                            />
                        }
                        {!isEdit ?
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {author}
                            </CardSubtitle> :
                            <Input
                                name="author"
                                type="text"
                                value={author}
                                onChange={e => editBookItem({ id: id, prop: "author", value: e.target.value })}
                                required
                            />
                        }
                        {!isEdit ?
                            <CardText>
                                {description}
                            </CardText> :
                            <Input
                                name="description"
                                type="textarea"
                                value={description}
                                onChange={e => editBookItem({ id: id, prop: "description", value: e.target.value })}
                                required
                            />
                        }
                        <div className="d-flex mt-2">
                            <div>
                                <Button
                                    size="sm"
                                    onClick={() => setIsEdit(!isEdit)}
                                >
                                    {!isEdit ? 'Изменить' : 'Сохранить'}
                                </Button>
                            </div>
                            <div className="mx-2">
                                <Button
                                    size="sm"
                                    outline
                                    onClick={() => dispatch(removeBookAction(id))}
                                >
                                    Удалить
                                </Button>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </Col>
    );
};

export default BookCard;