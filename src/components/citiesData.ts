type CityInfo = {
  temperature: string;
  city: string;
  line1Length: number;
  line2Length: number;
  lineColor: string;
};

const cities: CityInfo[] = [
  {
    temperature: '20',
    city: 'Osaka',
    line1Length: 30,
    line2Length: 70,
    lineColor: 'rgb(255, 82, 14)'
  },
  {
    temperature: '25',
    city: 'Tokyo',
    line1Length: 40,
    line2Length: 50,
    lineColor: 'rgb(255, 184, 4)'
  },
  {
    temperature: '35',
    city: 'Yokohama',
    line1Length: 80,
    line2Length: 60,
    lineColor: 'rgb(104, 255, 192)'
  },
  {
    temperature: '30',
    city: 'Okinawa',
    line1Length: 40,
    line2Length: 60,
    lineColor: 'rgb(253, 255, 144)'
  },
  {
    temperature: '20',
    city: 'Osaka',
    line1Length: 30,
    line2Length: 70,
    lineColor: 'rgb(4, 201, 255)'
  }
];

export default cities;
