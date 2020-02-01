import React from 'react'
import { Link } from 'react-router-dom';

export const Item = React.memo(props => {
    console.log(props)
    const itemWrap = { width: '50%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    const itemContent = { width: '95%', height: '95%', padding: '2,5%', backgroundColor: '#f2f2f2', position: 'absolute' }
    const projectName = `Проект П-${props.area}`
    return (
        <div style={itemWrap} className={`item-wrapper `}>
            <Link to={`/${props.type}/${props.id}`} className="flex-c">
                <div style={itemContent} className="item-content">

                    <div style={{ backgroundImage: `url("./images/${props.type}/${props.defaultPhoto}")` }} className="item-image">
                        <div className="hover-effect"></div>
                    </div>
                    <div style={{ margin: '0px' }} className="item-title t-align-c">
                        <div className="hover-effect"></div>
                        <div>{projectName}</div>
                        <div className="flex-sb">
                            <span className="item-price">
                                {props.price}
            </span>
                            <span className="item-area">
                                {props.area}
                                <sup><small>2</small></sup>
                            </span>
                        </div>
                    </div>


                </div>
            </Link>
        </div>
    )
})