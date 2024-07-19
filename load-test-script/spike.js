import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 20 }, // Ramp-up to 20 users over 1 minute
    { duration: '10s', target: 100 }, // Spike to 100 users over 10 seconds
    { duration: '1m', target: 100 },  // Maintain 100 users for 1 minute
    { duration: '1m', target: 0 },   // Ramp-down to 0 users over 1 minute
  ],
};

export default function () {
  const url = 'http://a4a96605ed6e949498ed266f0450ac98-1545896748.us-east-1.elb.amazonaws.com/'; 
  const response = http.get(url);

  check(response, {
    'is status 200': (r) => r.status === 200,
  });

  sleep(1);
}
