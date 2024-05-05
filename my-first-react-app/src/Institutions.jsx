function Institution(props)
{
    const institutionStyle =
    {
        backgroundColor: "pink",
        padding: "5px 20px",
        margin: "20px",
        border: "5px double purple"
    }

    return(<div style={institutionStyle}>
        <h3>{props.name}</h3>
        <h4>{props.attendance}</h4>
        <h4>{props.study}</h4>
        <p>{props.description}</p>
        </div>)
}

export default Institution;