import React from 'react';
import { Item } from './Item.jsx';

export const ProjectsView = React.memo(({data, type}) => {
    return (
        <div className="flex flex-w m-top-90 block-wrapper">
            {data ? data.map(el => <Item {...el} type={type} />) : null}
        </div>
    )
})