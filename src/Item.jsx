import React from 'react'
import { Link } from 'react-router-dom';

export const Item = React.memo(props => {
    console.log(props)
    const itemWrap = { width: '25%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }
    const itemContent = { width: '95%', height: '95%', padding: '2,5%', backgroundColor: '#f2f2f2', position: 'absolute' }
    return (
        <div style={itemWrap} className={`item-wrapper `}>
            <Link to={`/project/${props.id}`}>
                <div style={itemContent} className="item-content">

                    <div style={{ backgroundImage: 'url("./images/bath/bath-1-1.jpg")' }} className="item-image">
                        <div className="hover-effect"></div>
                    </div>
                    <div style={{ margin: '0px' }} className="item-title t-align-c">
                        <div className="hover-effect"></div>
                        <div>Имя проекта</div>
                        <div className="flex-sb">
                            <span className="item-price">
                                Цена
            </span>
                            <span className="item-area">
                                Площадь
            </span>
                        </div>
                    </div>


                </div>
            </Link>
        </div>
    )
})