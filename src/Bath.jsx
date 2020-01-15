import React from 'react';
import { ProjectsView } from './ProjectsView';
import data from './projects/projects.json';

export const BathesContainer = React.memo(() => {
    const [stateData, setData] = React.useState(false);
    React.useEffect(() => setData(data.filter(el => el.type === "BATH")), []);
    return (
        <ProjectsView type="bath" data={stateData} />
    )
})
