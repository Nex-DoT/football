import React from 'react';

const MessageCard = ({item}) => {
    const inputString = "2024-02-14T14:35:40.098Z";

// Create a Date object from the string
const date = new Date(item.createdAt);

// Extract the year, month, and day using getters
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-indexed, so add 1 for human-readable format
const day = date.getDate();
const hours = date.getHours().toString().padStart(2, '0'); // Pad with leading zero if needed
const minutes = date.getMinutes().toString().padStart(2, '0');

// Format the output string with desired separators
const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
    return (
        <div className=' w-64 rounded-md bg-white flex h-auto items-start justify-around flex-col mt-1 overflow-x-hidden'>
            <h2 className=' font-bold p-1'>{item.username}</h2>
            <h2 className=' text-sm p-2 w-16'>{item.message}</h2>
            <p className=' text-xs text-gray-300'>{formattedDateTime}</p>
        </div>
    );
};

export default MessageCard;