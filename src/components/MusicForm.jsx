import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const MusicForm = () => {
    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить песню
            </div>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Rampampam"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="artist">
                        Исполнитель
                    </Label>
                    <Input
                        id="artist"
                        name="artist"
                        placeholder="Minelli"
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
                        placeholder="3мин 18сек"
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
                        placeholder="Самая лучшая песня..."
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
export default MusicForm;