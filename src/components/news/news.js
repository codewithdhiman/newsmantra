import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class News extends Component {

    render() {
        return (
            <Card.Group itemsPerRow={4}>
                {
                    this.props.data.map((item, index) => {
                        return (
                            <Card key={index}>
                                <Image src={item.urlToImage} wrapped ui={false} />
                                <Card.Content>
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Meta>{item.source.name}</Card.Meta>
                                    <Card.Description>
                                        {item.content}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                }
            </Card.Group>
        );
    }
}

export default News;