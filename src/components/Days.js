import { useState } from 'react'

import Day from './Day'

const Days = ({total_days}) => {
    let day_col = []
    let checked = new Array(parseInt(total_days)).fill(1)
    let [days_checked, set_days_checked] = useState(checked)

    console.log(days_checked)

    for (let i = total_days; i >= 1; i--) {
        day_col.push(<Day checked={days_checked[i]} current_day={i} />)
    }

    return (
        <div>
            {day_col} 
        </div>
    )
}

export default Days