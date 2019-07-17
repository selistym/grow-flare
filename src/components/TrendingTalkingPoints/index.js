import React from 'react';
import {Card, Badge} from 'react-bootstrap';
const TrendingTalkingPoints = ({keywords}) => (
    <Card style={{ width: '100%', marginTop: 10, marginBottom: 10}}>
        <Card.Body>
            <Card.Title>Trending Talking Points</Card.Title>
            {keywords.map((keyword, index) => 
                <Badge key={index} variant="primary" style={{margin: 5}}>{keyword[0]}</Badge>        
            )}
            
        </Card.Body>
    </Card>
)

export default TrendingTalkingPoints;