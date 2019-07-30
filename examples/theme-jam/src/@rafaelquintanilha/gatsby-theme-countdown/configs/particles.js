import merge from "lodash.merge";
import params from "@rafaelquintanilha/gatsby-theme-countdown/src/configs/particles";
import Icon from './gatsby-icon.png';

export default merge({}, params, {
  particles: {
    number: {
      value: 5
    },
    size: {
      value: 50,
    },
    shape: {
      type: 'images',
      images: [
        {
          src: Icon, 
          width: 20, 
          height: 20
        },
      ]
    } 
  },
});