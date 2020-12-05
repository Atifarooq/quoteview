import React from 'react';
import { Flex } from '../../components';

const Quote = ({ data, children }) => {

    return (
        <Flex className="flex--row">
            <Flex className="flex--row flex--wrap flex--grow pt-2">
                {data}
                {children}
            </Flex>
        </Flex>
    );
}

export default Quote;