import _partial from 'lodash/fp/partial';
import __ from 'lodash/fp/__';

const prettify = _partial(JSON.stringify, [__, null, 2]);

export default prettify;
