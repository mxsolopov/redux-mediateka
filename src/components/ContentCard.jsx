import React, { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Input } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { removeItemAction, editItemAction } from '../actions/actions';

const ContentCard = ({ type, name, performers, time, description, id }) => {

    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();

    const editItem = (params) => {
        dispatch(editItemAction(params));
    };

    return (
        <Col>
            <div className={!isEdit ? '' : 'border border-primary rounded'}>
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
                                onChange={e => editItem({ id: id, prop: "name", value: e.target.value })}
                                required
                            />
                        }
                        {!isEdit ?
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                {performers}
                            </CardSubtitle> :
                            <Input
                                name="performers"
                                type="text"
                                value={performers}
                                onChange={e => editItem({ id: id, prop: "performers", value: e.target.value })}
                                required
                            />
                        }
                        {
                            type !== 'book' ?
                                !isEdit ?
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="div"
                                    >
                                        {time}
                                    </CardSubtitle> :
                                    <Input
                                        name="time"
                                        type="text"
                                        value={time}
                                        onChange={e => editItem({ id: id, prop: "time", value: e.target.value })}
                                        required
                                    /> : null
                        }
                        {!isEdit ?
                            <CardText>
                                {description}
                            </CardText> :
                            <Input
                                name="description"
                                type="textarea"
                                value={description}
                                onChange={e => editItem({ id: id, prop: "description", value: e.target.value })}
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
                                    onClick={() => dispatch(removeItemAction(id))}
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

export default ContentCard;