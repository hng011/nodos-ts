

const generateTaskID = (): string => {
    // random 7-character alphanumeric ID
    // toString(36): a-z + 0-9
    // substr(2,7) due to Math.random returns 0. in the beginning (i.e: 0.21...)
    return Math.random().toString(36).substr(2,7);
};


export default generateTaskID;
