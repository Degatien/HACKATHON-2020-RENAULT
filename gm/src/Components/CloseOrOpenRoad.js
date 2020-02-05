import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField, Button, List, ListItem, ListItemText, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


function ListOfEdges(props) {
    const { listOfEdges } = props
    console.log(listOfEdges)
    return (
        <List style={{ maxHeight: '300', overflow: 'auto' }}>
            {listOfEdges.map(item => { return <ListItem><ListItemText primary={item.transport + ':' + item.edge + ':' + item.state} /></ListItem> })}
        </List>
    )
}
export default function OpenOrCloseSubway(props) {
    const classes = useStyles();
    const [openOrClose, setOpenOrClose] = React.useState('close');
    const [listOfEdges, setListOfEdges] = React.useState([]);
    const [edge, setEdge] = React.useState('');
    const [transport, setTransport] = React.useState('');



    const handleChangeEdge = event => {
        setEdge(event.target.value);
    };
    const handleChangeOpenOrClose = event => {
        setOpenOrClose(event.target.value);
    };
    const handleChangeTransport = event => {
        setTransport(event.target.value);
    };
    const handleAdd = () => {
        setListOfEdges([...listOfEdges, { 'transport': transport, 'edge': edge, 'state': openOrClose }])
    }


    return (

        <div style={{ width: 600, height: 'auto',  padding: '10px', marginTop:'15px', marginRight: 'auto', marginLeft:'auto', borderRadius: '3%', border: '1px solid grey', boxShadow: '10px 5px 5px grey' }}>
            <h3> Close or open roads</h3>
            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div style={{ display: 'flex', flexDirection: 'column' }}>

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Transport</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={transport}
                            onChange={handleChangeTransport}
                        >
                            <MenuItem value={'walk'}>Walk</MenuItem>
                            <MenuItem value={'bike'}>Bike</MenuItem>
                            <MenuItem value={'car'}>Car</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField label='Metro Edge' onChange={handleChangeEdge} />

                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">Open Or Close</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={openOrClose}
                            onChange={handleChangeOpenOrClose}
                        >
                            <MenuItem value={'open'}>Open</MenuItem>
                            <MenuItem value={'close'}>Close</MenuItem>
                        </Select>
                    </FormControl>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Button variant='contained' onClick={handleAdd}>Add</Button>
                        <Button variant='contained'>Validate</Button>
                    </div>
                </div>
                <div style={{ maxHeight: '300', overflow: 'auto' }}>
                    <ListOfEdges listOfEdges={listOfEdges} />
                </div>
            </div>
        </div>
    )
}