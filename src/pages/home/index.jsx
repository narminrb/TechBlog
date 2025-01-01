import React from 'react';
import CustomCard from '../../components/common/CustomCard';
import CustomImage from '../../components/common/CustomImage';
import CustomLoading from '../../components/common/CustomLoading';
import ApiDataHook from '../../hook/ApiDataHook';
import CustomTopics from '../../components/common/CustomTopics';
import CustomStories from '../../components/common/CustomStories';
import CustomStoryPagination from '../../components/CustomStoryPagination';
import CustomCardVideo from '../../components/common/CustomCardVideo';
import CustomVideo from '../../components/common/CustomVideo';
const HomePage = () => {
  const { data: dataCards, loading: loadingData, error: errorData } = ApiDataHook('/data');
  const { data: imageCards, loading: loadingImages, error: errorImages } = ApiDataHook('/imagedata');
  const { data: topicCards, loading: loadingTopics, error: errorTopics } = ApiDataHook('/topics');
  const { data: storiesCards, loading: loadingStories, error: errorStories } = ApiDataHook('/gadget');
  const { data: gadgetCards, loading: loadingGadget, error: errorGadget } = ApiDataHook('/gadgetimage');
  const { data: storyPagination, loading: loadingPagination, error: errorPagination } = ApiDataHook('/storypagination');
  const { data: videoData } = ApiDataHook('/videodata');
  if (loadingData || loadingImages || loadingTopics || loadingStories || loadingGadget || loadingPagination) {
    return <CustomLoading />;
  }
  if (errorData || errorImages || errorTopics || errorStories || errorGadget || errorPagination) {
    return (
      <div className="text-center mt-20">
        <button
          className="bg-red-100 text-red-800 px-4 py-2 rounded"
          onClick={() => window.location.reload()}
        >
          Error fetching data, click to retry
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="top">
  <div className="container mx-auto my-10 p-10">
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-2 md:col-span-1">
        {imageCards &&
          imageCards.map((card) => (
            <CustomImage
              key={card.id}
              image={card.img}
              name={card.name}
              desc={card.desc}
              url={`/imagedata/${card.id}`}
            />
          ))}
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="grid grid-cols-2 gap-4">
          {dataCards &&
            dataCards.map((card) => (
              <CustomCard
                key={card.id}
                image={card.img}
                name={card.name}
                desc={card.desc}
                url={`/data/${card.id}`} 
              />
            ))}
        </div>
      </div>
    </div>
    <div className='grid grid-cols-1 mt-28'>
    <div class="section-title font-bold text-[36px]"><h2 class="title">Trending Topics</h2></div>
    </div>
    <div className="grid grid-cols-6 gap-8 mt-10 mb-8" style={{ minHeight: '180px' }}>
    {topicCards &&
            topicCards.map((card) => (
              <CustomTopics
                key={card.id}
                image={card.img}
                name={card.name}
                desc={card.desc}
                url={`/topics/${card.id}`} 
              />
            ))}
    </div>
  </div>
</div>

{/* section2 */}


<div className="container mx-auto my-10 p-10">

<div className="grid grid-cols-1 p-4">
  <div className="section-title font-bold text-[36px]">
    <h2 className="title">Trending Topics</h2>
  </div>
</div>

<div className="grid grid-cols-10 gap-4 mt-4 mb-4">
  {storyPagination &&
    storyPagination.map((card) => (
      <div className="col-span-1">
        <CustomStoryPagination
          key={card.id}
          name={card.name}
          url={`/storypagination/${card.id}`}
        />
      </div>
    ))}
</div>

    



  <div className="grid grid-cols-12 gap-6"> 
    <div className="col-span-12 md:col-span-5"> 
      <div className="grid grid-cols-1 gap-1">
        {storiesCards &&
          storiesCards.map((card) => (
            <CustomStories
              key={card.id}
              image={card.img}
              name={card.name}
              desc={card.desc}
              url={`/data/${card.id}`}
            />
          ))}
      </div>
    </div>
    <div className="col-span-12 md:col-span-7"> 
      {gadgetCards &&
        gadgetCards.map((card) => (
          <CustomImage
            key={card.id}
            image={card.img}
            name={card.name}
            desc={card.desc}
            url={`/imagedata/${card.id}`}
          />
        ))}
    </div>
  </div>
</div>


{/* section3 */}

<div className='black'>
<div className="container mx-auto my-10 p-10">
    <div className="grid grid-cols-2 gap-4">
      <div className="col-span-2 md:col-span-1">
        {videoData &&
          videoData.map((card) => (
            <CustomVideo
              key={card.id}
              image={card.img}
              name={card.name}
              desc={card.desc}
              url={`/imagedata/${card.id}`}
            />
          ))}
      </div>

      <div className="col-span-2 md:col-span-1">
        <div className="grid grid-cols-2 gap-4">
          {dataCards &&
            dataCards.map((card) => (
              <CustomCardVideo
                key={card.id}
                image={card.img}
                name={card.name}
                desc={card.desc}
                url={`/data/${card.id}`} 
              />
            ))}
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default HomePage;
