const Day = ({checked, current_day, }) => {
    return (
        <div checked={checked}>
            {current_day}
        </div>
    )
}

export default Day