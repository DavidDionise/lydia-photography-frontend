import React from 'react';
import { HomePageText } from 'components';
import './homepage-styles.scss';

const base_url = 'assets/images';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_img_idx: 0,
      dark_text: false
    }

    this.image_data = [
      { path: `${base_url}/marie-nate-cafe.jpg`, position: 'center' },
      { path: `${base_url}/marie-nate-walk.jpg`, position: 'right' },
      { path: `${base_url}/miles-solo.jpg`, position: 'center', dark_text: true },
      { path: `${base_url}/svea-solo.jpg`, position: 'center' },
      { path: `${base_url}/vj-lady.jpg`, position: 'left' }
    ];
    this.interval_id = null;
  }

  componentDidMount() {
    this.interval_id = setInterval(() => {
      const { current_img_idx } = this.state;
      const idx = current_img_idx == this.image_data.length - 1 ? 0 : current_img_idx + 1;
      this.setState({ current_img_idx: idx, dark_text: this.image_data[idx].dark_text });
    }, 4500);
  }

  render() {
    return (
      <div className='homepage-container animated fadeIn'>
        <HomePageText dark_text={this.state.dark_text} />
        {this.image_data.map((image, idx) => {
          return (
            <div className={`homepage-image-container ${image.position}`} key={image.path}>
              <img
                src={image.path}
                className={`homepage-image ${this.state.current_img_idx == idx ? 'show' : ''}`}
              />
          </div>
          );
        })}
      </div>
    );
  }
}

export default HomePage;
