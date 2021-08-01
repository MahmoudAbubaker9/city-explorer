import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          <Card className="text-center" >
            <Card.Img src="https://celinereads.files.wordpress.com/2016/03/free-watercolor-headers.png" alt="Card image" style={{ width: '1340px', height: '120px' }} />
            <Card.ImgOverlay>


              <Card.Title>City Explorer</Card.Title>
              <Card.Text>
                Made By Mahmoud Abubaker
              </Card.Text>

              <Card.Footer className="text-muted" >@ ASAC</Card.Footer>
            </Card.ImgOverlay>
          </Card>
        </footer>
      </div>
    );
  }
}

export default Footer;