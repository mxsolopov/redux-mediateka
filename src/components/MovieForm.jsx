import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addMovieAction } from '../actions/actions';
import { nanoid } from 'nanoid';

const MovieForm = () => {
    const [movieData, setMovieData] = useState({name: '', performers: '', time: '', description: '', id: nanoid()});
    const dispatch = useDispatch();

    const addMovieToStore = (data) => {
        dispatch(addMovieAction(data));
    };
    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить фильм
            </div>
            <Form onSubmit={(e) => {
                    e.preventDefault();
                    addMovieToStore(movieData);
                    setMovieData({name: '', performers: '', time: '', description: '', id: nanoid()});
                }}>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Титаник"
                        type="text"
                        value={movieData.name}
                        onChange={e => {setMovieData({...movieData, name: e.target.value})}}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="performers">
                        Список актеров
                    </Label>
                    <Input
                        id="performers"
                        name="performers"
                        placeholder="Л. Ди Каприо, К. Уинслет"
                        type="text"
                        value={movieData.performers}
                        onChange={e => {setMovieData({...movieData, performers: e.target.value})}}
                        required
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
                        value={movieData.time}
                        onChange={e => {setMovieData({...movieData, time: e.target.value})}}
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
                        placeholder="Самый лучший фильм..."
                        type="textarea"
                        value={movieData.description}
                        onChange={e => {setMovieData({...movieData, description: e.target.value})}}
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
export default MovieForm;