import { Drawer, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
    name: string;
    header: string;
    path: string;
}

interface ISideBar {
    list: Item[];
    open: boolean;
    setCurrentHeader: React.Dispatch<React.SetStateAction<string>>;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    anchor: 'left' | 'right' | 'top' | 'bottom';
}

const SideBar: React.FC<ISideBar> = ({ list, open, setCurrentHeader, setOpen, anchor }) => {
    const navigate = useNavigate();

    const onItemClick = (item: Item) => {
        setCurrentHeader(item.header);
        navigate(item.path);
    };

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
            {list.map((item: Item, index: number) => (
                <ListItem button key={index}>
                    <ListItemText onClick={() => onItemClick(item)} primary={item.name} />
                </ListItem>
            ))}
        </div>
    );

    return (
        <Drawer open={open} anchor={anchor} onClose={() => setOpen(false)}>
            {getList()}
        </Drawer>
    );
};

export default SideBar;
