import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItemAction } from '../actions/actions';
import { nanoid } from 'nanoid';

const ContentForm = () => {

    const type = useSelector(state => state.typeOfContent.typeOfContent);
    const [itemData, setItemData] = useState({name: '', performers: '', time: '', description: '', id: nanoid() });
    const dispatch = useDispatch();

    const addItemToStore = (data) => {
        dispatch(addItemAction(data));
    };

    let typeOfContent, performers;
    if (type === 'books') {
        typeOfContent = 'книгу';
        performers = 'Авторы';
    } else if (type === 'movies') {
        typeOfContent = 'фильм';
        performers = 'Актеры';
    } else if (type === 'music') {
        typeOfContent = 'песню';
        performers = 'Исполнитель';
    }

    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить {typeOfContent}
            </div>
            <Form onSubmit={(e) => {
                e.preventDefault();
                addItemToStore({...itemData, type: type});
                setItemData({ name: '', performers: '', time: '', description: '', id: nanoid() });
                console.log(type);
            }}>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        value={itemData.name}
                        onChange={e => { setItemData({ ...itemData, name: e.target.value }) }}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="performers">
                        {performers}
                    </Label>
                    <Input
                        id="performers"
                        name="performers"
                        type="text"
                        value={itemData.performers}
                        onChange={e => { setItemData({ ...itemData, performers: e.target.value }) }}
                        required
                    />
                </FormGroup>
                {
                    type !== 'books' ?
                        <FormGroup>
                            <Label for="time">
                                Длительность
                            </Label>
                            <Input
                                id="time"
                                name="time"
                                type="text"
                                value={itemData.time}
                                onChange={e => { setItemData({ ...itemData, time: e.target.value }) }}
                                required
                            />
                        </FormGroup> :
                        null
                }
                <FormGroup>
                    <Label for="description">
                        Описание
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        type="textarea"
                        value={itemData.description}
                        onChange={e => { setItemData({ ...itemData, description: e.target.value }) }}
                        required
                    />
                </FormGroup>
                <Button>
                    Добавить
                </Button>
            </Form>
        </div>
    );
};
export default ContentForm;