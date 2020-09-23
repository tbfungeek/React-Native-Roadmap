import React from 'react';
import Timer from './Timer';
import TimerForm from './TimerForm';
import PropTypes from 'prop-types'

export default class EditableTimer extends React.Component {

    state = {
        editFormOpen:false
    }

    static propTypes= {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        project: PropTypes.string.isRequired,
        elapsed: PropTypes.number.isRequired,
        isRunning: PropTypes.bool.isRequired,
        onUpdateTimer: PropTypes.func.isRequired,
        onRemoveTimer: PropTypes.func.isRequired,
        onStartTimer: PropTypes.func.isRequired,
        onStopTimer: PropTypes.func.isRequired,
    }

    handleEditPress = () => {
        this.openForm()
    }

    openForm = () => {
        this.setState({editFormOpen:true});
    }

    closeForm = () => {
        this.setState({editFormOpen: false})
    }

    handleSubmit = (timer) => {

        const {onUpdateTimer} = this.props;
        if (!onUpdateTimer) return;
        onUpdateTimer(timer);
        this.closeForm();

    }

    handleClose = () => {
        this.closeForm();
    }

    handleRemove = (timerId) => {
        const {onRemoveTimer} = this.props;
        if (!onRemoveTimer) return;
        onRemoveTimer(timerId);
        this.closeForm();
    }

    handleStartPress = (timerId) => {
        const {onStartTimer} = this.props;
        if (!onStartTimer) return;
        console.log("=======>handleStartPress")
        onStartTimer(timerId);
    }

    handleStopPress = (timerId) => {
        const {onStopTimer} = this.props;
        if (!onStopTimer) return;
        console.log("=======>handleStopPress")
        onStopTimer(timerId);
    }

    render() {
        
        const {editFormOpen} = this.state
        const {id,title,project,elapsed,isRunning} = this.props

        if (editFormOpen) {
                return (
                    <TimerForm
                        id={id}
                        title={title}
                        project={project}
                        onSubmitTimmer = {this.handleSubmit}
                        onCloseTimer = {this.handleClose}/>
                )     
            } else {
                return (
                    <Timer
                        id={id}
                        title={title}
                        project={project}
                        elapsed={elapsed}
                        onEditPress={this.handleEditPress}
                        onRemovePress={this.handleRemove}
                        onStartPress={this.handleStartPress}
                        onStopPress={this.handleStopPress}
                        isRunning={isRunning}/>
                )
            }
    }
}