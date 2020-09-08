import PropTypes from 'prop-types';

export const MessageShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['text', 'image', 'location']),
    text: PropTypes.string,
    image: PropTypes.string,
    coordinate: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number,
    }),
});

let messageId = 0;

function getNextId() {
    messageId++;
    return messageId;
}

export function createTextMessage(text) {
    return {
        type:'text',
        id: getNextId(),
        text: text,
    }
}

export function createImageMessage(uri) {
    return {
        type : 'image',
        id : getNextId(),
        image : uri
    }
}

export function createLocationMessage(coordinate) {
    return {
        type : 'location',
        id: getNextId(),
        coordinate: coordinate,
    }
}