const getMarkers = ({ customMap }) => {
    const markers = customMap?.markers;
    console.log(markers);
    return markers;
};

const getUser = ({ customMap }) => customMap?.user;

export { getMarkers, getUser };
