import React, { useState, useEffect } from 'react';
import DeatailTabs from '../models/teamPage/DeatailTabs';
import HeaderOfTeam from '../models/teamPage/HeaderOfTeam';
import DeatailsForThisSeoson from '../models/teamPage/DeatailsForThisSeoson';
import { useColor } from 'color-thief-react';
import { Spinner } from '@nextui-org/react';
const TeamPage = ({ newdata }) => {
  const [logoUrl, setLogoUrl] = useState(newdata.team.logo);

  // useColor should be at the top level, not inside useEffect
  const { data: colors, loading, error } = useColor(logoUrl, 'hex', {
    crossOrigin: 'anonymous',
    quality: 10
  });

  useEffect(() => {
    if (newdata.team.logo) {
      setLogoUrl(newdata.team.logo);
    }
  }, [newdata.team.logo]);
  console.log(colors);
  // Handle loading state
  if (loading) return <div className='h-screen flex items-center justify-center'><Spinner size='lg'></Spinner>;</div>
  // Handle error state
  if (error) return <p>There was an error fetching the colors.</p>;

  // Render the component with the background style
  return (
    <div 
    className='shadow-xl'
      style={{
        background: `linear-gradient(to top left, ${colors ? colors : '#000000'}, #292c35 , #292c35 , #292c35 ,${colors ? colors : '#000000'})`,
      }}
    >
        <HeaderOfTeam data={newdata} />
        <DeatailsForThisSeoson data={newdata} />
        <DeatailTabs color={colors} data={newdata}/>
    </div>
  );
};

export default TeamPage;