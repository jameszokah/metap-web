import { useEffect, useState, use } from 'react';

export function Index() {
  const [data, setData] = useState(null);
  // async function getData() {
  //   const res = await fetch('https://jameszokah-expert-winner-rx4p4q6rxj2xqg5-4001.preview.app.github.dev/api', { cache: 'force-cache' })
  //   const jsonData = await res.json();
  //   console.log(jsonData)
  //   setData(jsonData);

  // }
  // useEffect(() => {
  //   getData()
  // }, [])


  return (
    <>
      <div className='bg-dark-primary'>
      <h1 className='text-4xl text-blue-300'>
        <span> Hello there, </span>
        Welcome metap-client 👋
      </h1>
      <h1 className='text-4xl text-blue-300'>
        <span> Hello there, </span>
        {data?.message}👋
      </h1>
      </div>
    </>
  );
}

export default Index;
