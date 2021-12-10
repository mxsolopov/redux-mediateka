import React, {useState} from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addMusicAction } from '../actions/actions';
import { nanoid } from 'nanoid';

const MusicForm = () => {
    const [musicData, setMusicData] = useState({name: '', performers: '', time: '', description: '', id: nanoid()});
    const dispatch = useDispatch();

    const addMusicToStore = (data) => {
        dispatch(addMusicAction(data));
    };
    return (
        <div className="position-fixed">
            <div className="my-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
                Добавить песню
            </div>
            <Form onSubmit={(e) => {
                    e.preventDefault();
                    addMusicToStore(musicData);
                    setMusicData({name: '', performers: '', time: '', description: '', id: nanoid()});
                }}>
                <FormGroup>
                    <Label for="name">
                        Название
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Rampampam"
                        type="text"
                        value={musicData.name}
                        onChange={e => {setMusicData({...musicData, name: e.target.value})}}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="artist">
                        Исполнитель
                    </Label>
                    <Input
                        id="performers"
                        name="performers"
                        placeholder="Minelli"
                        type="text"
                        value={musicData.performers}
                        onChange={e => {setMusicData({...musicData, performers: e.target.value})}}
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
                        placeholder="3мин 18сек"
                        type="text"
                        value={musicData.time}
                        onChange={e => {setMusicData({...musicData, time: e.target.value})}}
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
                        placeholder="Самая лучшая песня..."
                        type="textarea"
                        value={musicData.description}
                        onChange={e => {setMusicData({...musicData, description: e.target.value})}}
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
export default MusicForm;