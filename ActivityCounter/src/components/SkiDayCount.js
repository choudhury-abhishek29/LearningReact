import '../stylesheets/ui.scss'
import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'
// var React = require('react');    this also works. saves from writing React.Component

const percentToDecimal = (decimal) =>
{
    return ((decimal*100)+'%')
}

const calcGoalProgress = (total, goal) =>
{
    return percentToDecimal(total/goal)
}

export const SkiDayCount = ({total, powder, backcountry, goal}) =>
(
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
            <Calendar />
            <span> days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
            <SnowFlake />
            <span> days</span>                    
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
            <Terrain />
            <span> hiking day</span>
        </div>
        <div><span>PROGRESS : {calcGoalProgress(total, goal)}</span></div>
    </div>
)

SkiDayCount.propTypes = {
    total: PropTypes.number,
    powder: PropTypes.number,
    backcountry: PropTypes.number
  }