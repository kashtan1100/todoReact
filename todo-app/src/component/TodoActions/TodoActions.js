import React from "react";
import './TodoAction.css'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import ListIcon from '@material-ui/icons/List'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import CheckIcon from '@material-ui/icons/Check'

const TodoActions = ({tab, handleChangeTab}) => {
    return (
        <div className={'actions-wrapper'}>
            <Tabs value={tab} onChange={(e,tabValue) => handleChangeTab(tabValue)}
                  indicatorColor={'primary'} textColor={'primary'}>
                <Tab label={<ListIcon/>}/>
                <Tab label={<RadioButtonUnchecked/>}/>
                <Tab label={<CheckIcon/>}/>
            </Tabs>
        </div>
    )
}

export default TodoActions;