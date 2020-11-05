/**
 * Created by Liu.Jun on 2020/10/30 17:11.
 */

import genSchema from '../genSchema.js';

const viewSchema = {
    title: 'Array',
    type: 'array',
    items: {
        type: 'object',
        properties: {}
    }
};

export default {
    viewSchema,
    propsSchema: genSchema({}, 'array')
};
