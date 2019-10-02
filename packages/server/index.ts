import prepareApp from './src/prepareApp';
import { createConn } from './src/util/createConn';

createConn().then(conn => {
  prepareApp(conn).listen(5000, () => {
    console.log('Example app listening on port 5000!');
  });
});
