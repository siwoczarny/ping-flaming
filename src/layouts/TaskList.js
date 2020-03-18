import React from 'react';
import Task from '../components/Task'
import '../styles/layouts/TaskList.scss';
//Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TaskList = (props) => {
    
    const toDo = props.tasks.filter(task => task.list === "to-do");
    const inProgress = props.tasks.filter(task => task.list === "in-progress");
    const done = props.tasks.filter(task => task.list === "done");
    const canceled = props.tasks.filter(task => task.list === "canceled");
    
    const toDoList = toDo.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);
    const inProgressList = inProgress.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);
    const doneList = done.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);
    const canceledList = canceled.map(task => <Task key={task.id} task={task} delete={props.delete} edit={props.edit} />);

    const responsive = {
        desktopLarge: {
            breakpoint: { max: 5000, min: 2100 },
            items: 4,
            partialVisibilityGutter: 40
        },
        desktop : {
            breakpoint: { max: 2099, min: 1200 },
            items: 4,
            partialVisibilityGutter: 40
        },
        tabletLarge: {
            breakpoint: { max: 1199, min: 992 },
            items: 3,
            partialVisibilityGutter: 40
        },
        tabletSmall: {
            breakpoint: { max: 991, min: 768 },
            items: 3,
            partialVisibilityGutter: 40
        },
        mobileLarge: {
            breakpoint: { max: 767, min: 576 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 575, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        },
    };

    return (
        <>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="list"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass="list_column"
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass="list_bar"
                slidesToSlide={1}
                swipeable
            >
                <div className="list_content">               
                    <h5 className="list_status">Do zrobienia</h5>
                    {toDoList}
                </div>
                <div className="list_content">               
                    <h5 className="list_status">W trakcie</h5>
                    {inProgressList}
                </div>
                <div className="list_content">               
                    <h5 className="list_status">Zrobione</h5>
                    {doneList}
                </div>
                <div className="list_content">               
                    <h5 className="list_status">Anulowane</h5>
                    {canceledList}
                </div>
            </Carousel>
        </>
    );
}
 
export default TaskList;