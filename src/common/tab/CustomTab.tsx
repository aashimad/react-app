import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';

import './CustomTab.css';
import {TabDataType} from '../../types/productTypes';

interface CustomTabProps {
    data: TabDataType;
    defaultValue: string;
}

const CustomTab: React.FC<CustomTabProps> = ({ data, defaultValue }) => {
    const [value, setValue] = useState<string>(defaultValue);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="mds-tabs-container">
            <div className="mdc-tab-bar" role="tablist">
                <div className="mdc-tab-scroller">
                    <div className="mdc-tab-scroller__scroll-area">
                        <div className="mdc-tab-scroller__scroll-content"></div>
                        <Box sx={{ width: '100%' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <Tabs textColor='inherit' indicatorColor="secondary" value={value} onChange={handleChange} centered>
                                        {data.headers.map((header, index) => (
                                            <Tab key={`tabHeader${index}`} className='mdc-tab mdc-tab__text-label' label={header} value={index.toString()} />
                                        ))}
                                    </Tabs>
                                </Box>
                                {data.descriptions.map((desc, index) => (
                                    <TabPanel key={`tabSummary${index}`} value={index.toString()} className='mdc-tab-content'>{desc}</TabPanel>
                                ))}
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomTab;
