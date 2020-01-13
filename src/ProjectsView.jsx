import React from 'react'
import data from './projects/projects.json';
import { Item } from './Item.jsx'

export const ProjectsView = React.memo(() => {
    return (
        <div className="flex flex-w m-top-90">
            {data ? data.filter(el => el.type === "BATH").map(el => <Item {...el} />) : null}
        </div>
    )
})