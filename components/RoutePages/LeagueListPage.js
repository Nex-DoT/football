import { Input, Pagination } from '@nextui-org/react';
import { CgSearch } from 'react-icons/cg';
import React, { useState, useRef, useMemo, useTransition } from 'react';
import CardItems from '../models/tabelsPage/CardItems';

// Utility function kept outside of the component
const chunkArray = (array, size) =>
  Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size)
  );

const LeagueListPage = ({ info }) => {
    const contentDivRef = useRef(null);
    const [isPending, startTransition] = useTransition(); // Corrected spelling from 'isPeanding' to 'isPending'
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState(info.response);

    // Memorize chunked data to prevent re-calculating on every render
    const chunkedData = useMemo(() => chunkArray(filteredData, 35), [filteredData]);
    
    // Used for pagination
    const [currentPageData, setCurrentPageData] = useState(chunkedData[0]);

    const handleSearchChange = (e) => {
         // ... existing logic
         const { value } = e.target;
         setSearchText(value);
         startTransition(() => {
             const filtered = value
               ? info.response.filter((item) =>
                   item.league.name.toLowerCase().includes(value.toLowerCase())
                 )
               : info.response;
 
             setFilteredData(filtered);
             // Update the state with the first page of the newly filtered data
             // Use 'chunkArray' to re-chunk the filtered data to reflect changes
             setCurrentPageData(chunkArray(filtered, 35)[0]);
         });
    };

    const handlePaginationChange = (page) => {
        setCurrentPageData(chunkedData[page - 1]);
        contentDivRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // const handleClearSearch = () => {
    //     setSearchText('');
    //     setFilteredData(info.response);
    //     setCurrentPageData(chunkedData[0]);
    // };
    const handleClearSearch = () => {
        setSearchText('');
        setFilteredData(info.response); // Reset the filtered data back to the original data
        const newChunkedData = chunkArray(info.response, 35); // Re-chunk the original data
        setCurrentPageData(newChunkedData[0]); // Set the current page to the first chunk of the original data
        // Optionally, if you're keeping track of pagination page number, reset that state here as well
    };
    return (
        <div ref={contentDivRef}>
            <div className='flex items-center justify-center mt-6 mb-6'>
                <Input
                    clearable
                    onChange={handleSearchChange}
                    onClear={handleClearSearch}
                    value={searchText}
                    color="primary"
                    placeholder="Search by name..."
                    startContent={<CgSearch />}
                    width="100%"
                    className='max-w-xs'
                />
            </div>
            <div className='flex items-center justify-around flex-wrap m-auto w-2/3'>
                { currentPageData?.map((item) => (
                    <CardItems key={item.league.id} data={item} />
                ))}
            </div>
            <div className='flex items-center justify-center pt-4'>
                <Pagination
                    color='primary'
                    isCompact
                    showControls
                    total={chunkedData.length}
                    onChange={handlePaginationChange}
                />
            </div>
        </div>
    );
};

export default LeagueListPage;