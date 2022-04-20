import './Card.css';
const Card = (props) =>  {
    // Uses the default/bare minimum 'card' class and concatenates it with anything send via props
    const classes = 'card '+props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;