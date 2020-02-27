import { Button, Col, Row } from 'sveltestrap';

export default function App()
{
    <svelte-head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    </svelte-head>;

    <Row>
        <Col>
            <Button color="primary" outline>Hello World!</Button>
        </Col>
    </Row>
}