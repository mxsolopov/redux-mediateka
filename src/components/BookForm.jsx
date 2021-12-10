import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../actions/actions';
import { nanoid } from 'nanoid';

const BookForm = () => {
    const [bookData, setBookData] = useState({name: '', author: '', description: '', id: nanoid()});
    const dispatch = useDispatch();

    const addBookToStore = (data) => {
        dispatch(addBookAction(data));
    };

    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить книгу
            </div>
            <Form onSubmit={(e) => {
                    e.preventDefault();
                    addBookToStore(bookData);
                    setBookData({name: '', author: '', description: '', id: nanoid()});
                }}>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Идиот"
                        type="text"
                        value={bookData.name}
                        onChange={e => {setBookData({...bookData, name: e.target.value})}}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="author">
                        Автор
                    </Label>
                    <Input
                        id="author"
                        name="author"
                        placeholder="Ф. Достоевский"
                        type="text"
                        value={bookData.author}
                        onChange={e => {setBookData({...bookData, author: e.target.value})}}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                        Описание
                    </Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Самая лучшая книга..."
                        type="textarea"
                        value={bookData.description}
                        onChange={e => {setBookData({...bookData, description: e.target.value})}}
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
export default BookForm;