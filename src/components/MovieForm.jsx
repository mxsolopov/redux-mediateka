import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const MovieForm = () => {
    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить фильм
            </div>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Титаник"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="actors">
                        Список актеров
                    </Label>
                    <Input
                        id="actors"
                        name="actors"
                        placeholder="Л. Ди Каприо, К. Уинслет"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="time">
                        Длительность
                    </Label>
                    <Input
                        id="time"
                        name="time"
                        placeholder="3ч 14мин"
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
                        placeholder="Самый лучший фильм..."
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
export default MovieForm;