import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Example from './components/video';
import firebase from './firebase/config';

SwiperCore.use([Navigation, Scrollbar, A11y]);

function App() {

  const [listOfImages, setListOfImages] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("images").get().then((collection) => {
      const img = collection.docs.map((image) => image.data());
      setListOfImages(img);
    })
  }, []);

  if (listOfImages.length === 0) {
    return <h1 className="center"><i>Loading...</i></h1>
  }

  return (
    <div>
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div className="property-image" style={{
                backgroundImage: `url(${listOfImages[0].url})`
              }}>
                <div className="property-image-title">
                </div>
              </div></a>
            <div className="property-description">
              <h5> {listOfImages[0].title} </h5>
              <p>{listOfImages[0].desc}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div className="property-image" style={{
                backgroundImage: `url(${listOfImages[1].url})`
              }}>
                <div className="property-image-title">
                </div>
              </div></a>
            <div className="property-description">
              <h5> {listOfImages[1].title} </h5>
              <p>{listOfImages[1].desc}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div className="property-image" style={{
                backgroundImage: `url(${listOfImages[2].url})`
              }}>
                <div className="property-image-title">
                </div>
              </div></a>
            <div className="property-description">
              <h5> {listOfImages[2].title} </h5>
              <p>{listOfImages[2].desc}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div className="property-image" style={{
                backgroundImage: `url(${listOfImages[3].url})`
              }}>
                <div className="property-image-title">
                </div>
              </div></a>
            <div className="property-description">
              <h5> {listOfImages[3].title} </h5>
              <p>{listOfImages[3].desc}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="center">
          <div className="property-card">
            <a href="#">
              <div className="property-image" style={{
                backgroundImage: `url(${listOfImages[4].url})`
              }}>
                <div className="property-image-title">
                </div>
              </div></a>
            <div className="property-description">
              <h5> {listOfImages[4].title} </h5>
              <p>{listOfImages[4].desc}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="center">
          <div className="property-card">
            <a href="myVideo">
              <div className="property-image" style={{
                backgroundImage: `url(${listOfImages[5].url})`
              }}>
                <div className="property-image-title">
                </div>
              </div></a>
            <div className="property-description">
              <h5> {listOfImages[5].title} </h5>
              <p>{listOfImages[5].desc}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <Router>
        <Route path="/myVideo" component={Example} />
      </Router>
</div>
  );
}

export default App;