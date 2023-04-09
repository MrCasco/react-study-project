import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import '../App.css';

const Task = ({todo, index, eliminateTask}) => {

    const [isCompleted, setIsCompleted] = useState(false);
    return (
        <List style={{width: '30%', marginLeft: 'auto', marginRight: 'auto'}}>
            <ListItem
                secondaryAction={
                    <div>
                        <IconButton edge="end" aria-label="delete" onClick={() => eliminateTask(index)}>
                            <DeleteIcon/>
                        </IconButton>
                        <IconButton edge="end" aria-label="complete" onClick={() => setIsCompleted(!isCompleted)}>
                            <DoneIcon/>
                        </IconButton>
                    </div>
                }
            >
                <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText
                    style={{color:isCompleted ? 'green':'black'}}
                    primary={todo}
                />
            </ListItem>
        </List>
    );
}

export default Task;