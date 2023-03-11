import { Card, CardHeader, CardTitle, CardBody, CardText } from "reactstrap";
import { useNavigate } from "react-router-dom"

function ToolCard(props) {

    const navigate = useNavigate();

    const handleClick = (path) => {
       navigate(path);
    }
    
    return(
        <Card
            className="my-2"
            color={props.tool.color}
            style={{
            width: '18rem'
            }}
            onClick={() => handleClick(props.tool.path)}
        >
            <CardBody>
            <CardTitle tag="h5">
                {props.tool.name}
            </CardTitle>
            <CardText>
                {props.tool.description}
            </CardText>
            </CardBody>
        </Card>
    );
}

export default ToolCard;