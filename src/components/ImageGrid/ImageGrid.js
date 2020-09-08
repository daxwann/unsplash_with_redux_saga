import React, { Component } from 'react';

import './styles.css';

import Button from '../Button';
import Stats from '../ImageStats';

class ImageGrid extends Component {
  componentDidMount() {
    const { loadImages } = this.props;
    loadImages();
  }

  render() {
    const { images, error, isLoading, loadImages, imageStats } = this.props;
    return (
      <div className="content">
        {images && (
          <section className="grid">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`item item-${Math.ceil(image.height / image.width)}`}
              >
                <Stats stats={imageStats[image.id]} />
                <img src={image.urls.small} alt={image.user.username} />
              </div>
            ))}
          </section>
        )}
        {error && <div className="error">{JSON.stringify(error)}</div>}
        <Button onClick={() => !isLoading && loadImages()} loading={isLoading}>
          <span>Load More</span>
        </Button>
      </div>
    );
  }
}

export default ImageGrid;
