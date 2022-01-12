import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Search Weather</h1>
          </Col>
        </Row>

        <Row>
          <Col xl={5}>
            <FormControl
              placeholder="Enter city name... For example &quot;San Francisco&quot;"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button className="btn btn-dark" onClick={() => onSearch(city)}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelector;