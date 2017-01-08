import React from 'react';
import Carousel from 'nuka-carousel';

// const Reviews = () => {
function Reviews() {
  const decorators = [
    {
      component: class extends React.Component {
        getIndexes(count, inc) {
          const arr = [];
          for (let i = 0; i < count; i += inc) {
            arr.push(i);
          }
          return arr;
        }
        getListStyles() {
          return {
            position: 'relative',
            margin: 0,
            top: -10,
            padding: 0
          };
        }
        getListItemStyles() {
          return {
            listStyleType: 'none',
            display: 'inline-block'
          };
        }
        getButtonStyles(active) {
          return {
            border: 0,
            background: 'transparent',
            color: 'red',
            cursor: 'pointer',
            // Here is your padding.
            padding: 10,
            outline: 0,
            fontSize: 24,
            opacity: active ? 1 : 0.5
          };
        }

        render() {
          const self = this;
          const indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
          return (
            <ul style={self.getListStyles()}>
              {
                indexes.map(function(index) {
                  return (
                    // Here are the dots. You can see that they are <li> elements
                    // within a <ul> element. The <li>'s each have a button inside.
                    // Down below you'll find the getButtonStyles() function.
                    <li style={self.getListItemStyles()} key={index}>
                      <button
                        style={self.getButtonStyles(self.props.currentSlide === index)}
                        onClick={self.props.goToSlide.bind(null, index)}>
                        &bull;
                      </button>
                    </li>
                  );
                })
              }
            </ul>
          );
        }
      },
      position: 'BottomCenter'
    }
  ];
  return (
    <section id="reviews">
      <Carousel decorators={decorators}>
        <div className="single_review">
          <img src="images/review_01.jpg"/>
          <div>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</h6>
            <p>- Jenny McLane, Microsoft</p>
          </div>
        </div>

        <div className="single_review">
          <img src="images/review_02.jpg"/>
          <div>
            <h6>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</h6>
            <p>- Jahn Kovalsky, Apple</p>
          </div>
        </div>

        <div className="single_review">
          <img src="images/review_03.jpg"/>
          <div>
            <h6>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.</h6>
            <p>- Meggie Patterson, Google</p>
          </div>
        </div>

        <div className="single_review">
          <img src="images/review_04.jpg"/>
          <div>
            <h6> Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</h6>
            <p>- Billy McDillon </p>
          </div>
        </div>
      </Carousel>

    </section>
  );
}

export default Reviews;
