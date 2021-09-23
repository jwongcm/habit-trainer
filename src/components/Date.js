const Date = ({type}) => {
    return (
        <>
            <div>
                <label htmlFor={`${type}_date`}>
                    <div>
                        {`${type.slice(0,1).toUpperCase() + type.slice(1)} date:`}
                    </div>
                </label>
                <input type='text' id={`${type}_date`} 
                    placeholder="..............................."/>
            </div>
        </>
    )
}

export default Date