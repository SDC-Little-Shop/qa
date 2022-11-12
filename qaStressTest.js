import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '3m', target: 10000 },
    { duration: '3m', target: 10000 },
    { duration: '2m', target: 0},
  ],
};

export default function () {
  const BASE_URL = 'http://localhost:3001/qa'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/questions?product_id=${Math.floor(Math.random() * (1000011 - 900010) + 900010)}`],
    //['GET', `${BASE_URL}/public/crocodiles/2/`, null, { tags: { name: 'PublicCrocs' } }],
    //['GET', `${BASE_URL}/public/crocodiles/3/`, null, { tags: { name: 'PublicCrocs' } }],
    //['GET', `${BASE_URL}/public/crocodiles/4/`, null, { tags: { name: 'PublicCrocs' } }],
  ]);

  sleep(1);
}
