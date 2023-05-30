import handlebars from 'vite-plugin-handlebars';
import data from "./data.json" assert {type: 'json'};


const basicContext = {
};

    export default {
      plugins: [handlebars({
        context : data
    })]
  };



    