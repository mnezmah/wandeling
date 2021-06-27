const getMarkers = ({ customMap }) => {
    const markers = customMap?.markers;
    return markers;
};

const getUser = ({ customMap }) => customMap?.user;

export { getMarkers, getUser };
