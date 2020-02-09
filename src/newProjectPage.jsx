import React from 'react';
import { ImageSlider } from './ImageSlider';
import data from './projects/projects.json';
import houses from './projects/houses.json';
import { ReactSVG } from 'react-svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const NewProjectPage = React.memo((props) => {
    let project
    if (props.type === 'bath') {
        project = data.find(el => el.id === props.match.params.id)
    } else {
        project = houses.find(el => el.id === props.match.params.id)
    }
    const projectName = `Проект П-${project.area}`
    return (
        <section className="qwer">
            <div className="block-wrapper">
                <div className="q">
                    <h1>{projectName}</h1>
                </div>
                <div className="qq">
                    <div className="qqq">
                        <ImageSlider {...project} type={props.type} />
                    </div>
                    <div className="qqqq">
                        <div class="detail_area col-md-12">
                            {project.area}м<sup>2</sup>
                        </div>
                        <div className="flex-sb flex-w">
                            <div className='flex-c w-50 flex-r m-bot w-100-1'>
                                <div className="flex f-s-50">
                                    {project.rooms}
                                    <ReactSVG beforeInjection={svg => {
                                        svg.classList.add('svg-class-name')
                                        svg.setAttribute('style', 'width: 50px')
                                    }} src="/images/bedroom.svg" />
                                </div>
                                <span className="f-s-24">комнат</span>
                            </div>
                            <div className='flex-c w-50 flex-r m-bot w-100-1'>
                                <div className="flex f-s-50">
                                    {project.wc}
                                    <ReactSVG beforeInjection={svg => {
                                        svg.classList.add('svg-class-name')
                                        svg.setAttribute('style', 'width: 50px')
                                    }} src="/images/wc.svg" />
                                </div>
                                <span className="f-s-24">санузла</span>
                            </div>
                            {project.balcony ?
                                <div className='flex-c w-50 flex-r m-bot w-100-1'>
                                    <div className="flex f-s-50">
                                        {project.balcony}
                                        <ReactSVG beforeInjection={svg => {
                                            svg.classList.add('svg-class-name')
                                            svg.setAttribute('style', 'width: 50px')
                                        }} src="/images/balcony.svg" />
                                    </div>
                                    <span className="f-s-24">балкона</span>
                                </div>
                                : null
                            }
                            {project.terrace ?
                                <div className='flex-c w-50 flex-r m-bot w-100-1'>
                                    <div className="flex f-s-50">
                                        {project.terrace}
                                        <ReactSVG beforeInjection={svg => {
                                            svg.classList.add('svg-class-name')
                                            svg.setAttribute('style', 'width: 50px')
                                        }} src="/images/terrace.svg" />
                                    </div>
                                    <span className="f-s-24">терраса</span>
                                </div>
                                : null
                            }
                            <div class="detail_area col-md-12 m-t-100">
                                {project.price}
                            </div>

                            <a className="button">
                                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                            </a>
                        </div>
                    </div>


                    <Tabs className="w-100">
                        <TabList>
                            {project.plans && !!project.plans.length && <Tab>Планировка</Tab>}
                            {project.facades && !!project.facades.length && <Tab>Фасады</Tab>}
                            {project.realization && !!project.realization.length && <Tab>Реализация</Tab>}
                            {project.interier && !!project.interier.length && <Tab>Интерьер</Tab>}
                        </TabList>

                        <TabPanel>
                            {
                                project.plans && !!project.plans.length && project.plans.map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/${props.type}/${project.id}/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                project.facades && !!project.facades.length && project.facades.map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/${props.type}/${project.id}/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                project.realization && !!project.realization.length && project.realization.map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/${props.type}/${project.id}/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                project.interier && project.interier.map(el => {
                                    return (
                                        <div className="outline-no">
                                            <div className="q123" style={{
                                                backgroundImage: 'url(' + require(`./images/${props.type}/${project.id}/${el}`) + ')'
                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </TabPanel>
                    </Tabs>
                    <div className="description-block">
                        <h2 className="text-header">{projectName}</h2>
                        <div className="description-text">
                            Маленькие дома являются самыми привлекательными и уютными, и подтверждением данному факту следует выбрать этот проект. Относительно небольшое строение, которое обладает и изысканной архитектурой и продуманной внутренней планировкой пространства. Оптимальным вариантом является размещение данного строения на небольших земельных участках. Привлекательная фасадная группа имеет просторное крыльцо и массивные колонны с крышей, под которой так приятно наслаждаться свежим воздухом и приятным досугом. Внешняя отделка сочетает в себе элементы из натуральных древесных панелей и классической штукатурки в бежевых и серых тонах. В нижней части дома располагается открытая кухня, которая условно зонирована от пространства гостиной и столовой. Помимо этого там есть подсобное помещение – котельная, которая имеет отдельный выход на задний двор и зимний сад дома. В планировке используется общий дымоход для котельной и гостиной – дополнительное удобство в плане эксплуатации строения. Прихожая, которая располагается на первом этаже, соединена с ванной. Второй этаж является зоной отдыха, там есть две спальни поменьше и одна большая спальня с собственным гардеробом. Помимо этого на втором этаже имеется собственный гардероб и ванная. Данный проект отличается индивидуальностью, оригинальностью и уютом. В относительно небольшом пространстве сформированы оптимальные условия для частного проживания.
                        </div>
                    </div>

                    <section class="section"><div class="block-wrapper"><div class="Form-Container border"><div class="form"><div class="h2">ПОСТРОЙТЕ СВОЙ ДОМ ВМЕСТЕ С KLIDI</div><div class="desc">Наш менеджер свяжется с вами по почте или телефону</div><a class="button" data-fancybox="" data-type="ajax" data-src="/form/form_order.php" href="javascript:;">ОСТАВИТЬ ЗАЯВКУ</a></div></div></div></section>
                </div>
            </div>
        </section>
    )
})
