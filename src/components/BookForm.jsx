import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const BookForm = () => {
    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить книгу
            </div>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Идиот"
                        type="text"
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