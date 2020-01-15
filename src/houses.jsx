import React from 'react'
import { Link } from 'react-router-dom';
import { ProjectsView } from './ProjectsView';
import data from './projects/houses.json';

export const HousesContainer = React.memo(() => {
    const [stateData, setData] = React.useState(false);
    React.useEffect(() => setData(data.filter(el => el.type === "HOUSE")), []);
    return (
        <ProjectsView type="house" data={stateData} />
    )
})