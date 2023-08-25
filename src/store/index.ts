import { createStore } from 'vuex';
import axios from 'axios';

type CityName = 'Osaka' | 'Tokyo' | 'Okinawa' | 'Kyoto' | 'Yokohama';

const cities: CityName[] = ['Osaka', 'Tokyo', 'Okinawa', 'Kyoto', 'Yokohama'];

const coordinates = {
  Osaka: '34.6937, 135.5023',
  Tokyo: '35.6895, 139.6917',
  Okinawa: '26.5013, 127.9454',
  Kyoto: '35.0116, 135.7681',
  Yokohama: '35.4437, 139.6380'
};

type WeatherState = {
  weather: { [key: string]: object | null };
  foreCast: object | null;
  selectedCityWeather: object | null;
  loading: boolean;
  foreCastLoading: boolean;
  weatherCondition: String;
};

const state: WeatherState = {
  weather: Object.fromEntries(cities.map((city) => [city, null])),
  foreCast: null,
  selectedCityWeather: null,
  loading: false,
  foreCastLoading: false,
  weatherCondition: ''
};

export default createStore({
  state,
  mutations: {
    setWeather(state, { city, data }) {
      state.weather[city] = data;
    },
    setForeCast(state, data) {
      console.log('Data in set: ', data);
      state.foreCast = data;
    },
    setSelectedCityWeather(state, data) {
      state.selectedCityWeather = data;
    },
    setLoading(state, loading: boolean) {
      state.loading = loading; // Mutation to handle loading state
    },
    setForeCastLoading(state, loading: boolean) {
      state.foreCastLoading = loading; // Mutation to handle loading state
    },
    setWeatherCondition(state, condition: String) {
      state.weatherCondition = condition; // Mutation to handle loading state
    }
  },
  actions: {
    async fetchWeather({ commit, dispatch }) {
      for (const city of cities) {
        // console.log('Coordinates : ', Object.keys(coordinates));
        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: { q: coordinates[city] },
          headers: {
            'X-RapidAPI-Key': 'bb0a45746dmshb0dabbc8e376434p121283jsncc47c2647222',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };

        try {
          const response = await axios.request(options);
          commit('setWeather', { city, data: response.data });
        } catch (error) {
          console.error(error);
        }
      }
      // dispatch('fetchForeCast','Tokyo');
      dispatch('setSelectedCityWeather');
    },
    async fetchForeCast({ commit, state }, cityName: string = 'Tokyo') {
      console.log('Friking city name', cityName);
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: { q: cityName, days: '3' },
        headers: {
          'X-RapidAPI-Key': 'bb0a45746dmshb0dabbc8e376434p121283jsncc47c2647222',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        commit('setForeCast', response.data);
        commit('setForeCastLoading', true);
        console.log('Forecast : ', state.foreCast);
      } catch (error) {
        console.error(error);
      }
    },
    setSelectedCityWeather({ commit, state, dispatch }, cityName: string = 'Tokyo') {
      try {
        console.log('HERE in set');
        switch (cityName) {
          case 'Osaka-Shi':
            cityName = 'Osaka';
            break;
          case 'Nago':
            cityName = 'Okinawa';
            break;

          default:
            break;
        }
        const cityWeather = state.weather[cityName];
        console.log('Setting  in set', state.weather);
        commit('setSelectedCityWeather', cityWeather);
        commit('setWeatherCondition', (cityWeather as any).current.condition.text);
      } catch (error) {
        console.error('OLALA ERROR', error);
      }
      dispatch('fetchForeCast', cityName);
      commit('setLoading', true);
    }
  },
  getters: {
    weather: (state) => state.weather,
    weatherByCity: (state) => (cityName: string) => state.weather[cityName],
    // cityNames: (state) => state.weather ? state.weather.map(cityWeather => cityWeather.name) : []
    cityNames: (state) => {
      return Object.values(state.weather).map((cityWeather) =>
        cityWeather ? (cityWeather as any).location.name : null
      );
    },
    forecastTemps: (state) => {
      console.log(state.foreCast, 'dsfdfsdfdsf');
      const forecastRes = state.foreCast;
      const forecastData = (forecastRes as any).forecast;
      console.log('Forecast data in getters: ', forecastRes);

      const temperatures = forecastData.forecastday.map(
        (dayObject: { day: { avgtemp_c: any } }) => dayObject.day.avgtemp_c
      );
      temperatures.push(Math.floor(Math.random() * (34 - 20 + 1) + 20));
      const finalArr = temperatures.map((item: string) => parseInt(item));
      console.log('Temperatures in getters: ', finalArr);
      return finalArr;
    },
    weatherCondition: (state) => {
      const selectedCityWeather = state.selectedCityWeather;

      console.log('THE SELCETED getter', selectedCityWeather);
      if (selectedCityWeather) {
        console.log('wewfwefwefwef', (selectedCityWeather as any).current.condition.text);
        return (selectedCityWeather as any).current.condition.text;
      }
      return 'Lol sunny';
    }
  }
});
