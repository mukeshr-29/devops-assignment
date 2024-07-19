import http from 'k6/http';
import { sleep, check } from 'k6';

// Define the load test configuration
export const options = {
  stages: [
    { duration: '1m', target: 150 }, // Ramp-up to 150 users over 1 minute
    { duration: '2m', target: 150 }, // Stay at 150 users for 2 minutes
    { duration: '1m', target: 0 },  // Ramp-down to 0 users over 1 minute
  ],
};

export default function () {
  const url = 'http://a4a96605ed6e949498ed266f0450ac98-1545896748.us-east-1.elb.amazonaws.com/'; 
  const response = http.get(url);

  // Check the response status
  check(response, {
    'is status 200': (r) => r.status === 200,
  });


  sleep(1);
}
