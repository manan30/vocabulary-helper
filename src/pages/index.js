import React, { useCallback, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import WordSearchInput from '../components/input';
import Svg from '../components/svg';
import getWordDetails from '../utils/api';

function Index() {
  const [searchWord, setSearchWord] = useState('');
  const { data, isError, isLoading, refetch } = useQuery(
    ['word-details', searchWord],
    getWordDetails,
    {
      enabled: false,
      staleTime: 86400
    }
  );

  const handleSearch = useCallback(() => {
    refetch();
  }, [refetch]);

  // useEffect(() => {
  //   console.log({ data, isError, isLoading });
  // }, [data, isError, isLoading]);

  // TODO: Handle error for submitting using enter
  // useEffect(() => {
  //   const enterKeyHandler = (e) => {
  //     if (e.keyCode !== 13) return;
  //     setReadyToSubmit(true);
  //     handleSearch();
  //     setReadyToSubmit(false);
  //   };
  //   document.addEventListener('keyup', enterKeyHandler);
  //   return () => {
  //     document.removeEventListener('keyup', enterKeyHandler);
  //   };
  // }, [handleSearch]);

  return (
    <div className='flex items-center flex-col h-full'>
      <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-8 text-primary'>
        Vocabulary Helper
      </div>
      <div className='flex w-4/5 md:w-1/2 lg:w-1/2 lg:mx-24'>
        <div className='flex-auto'>
          <WordSearchInput
            label='word-search'
            placeholder='Please enter a word to search'
            callback={setSearchWord}
            disabled={isLoading}
            required
          />
        </div>
        <button
          type='button'
          className={`ml-4 p-2 w-24 bg-primary rounded-lg text-white font-bold`.concat(
            isLoading ? ' cursor-not-allowed' : ''
          )}
          disabled={isLoading}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {(!data || (data && !data.entries.length)) && (
        <div className='mt-12 h-48 w-48 sm:h-64 sm:w-64 md:h-c-24 md:w-c-24 lg:h-c-24 lg:w-c-24'>
          {!isLoading && !isError && !data && <Svg type='initial' />}
          {isLoading && <Svg type='loading' />}
          {(isError || (data && !data.entries.length)) && <Svg type='error' />}
        </div>
      )}
      {data && data.entries.length > 0 && (
        <div className='rounded-lg shadow p-6 w-4/5 md:w-1/2 lg:w-1/2 mt-12 overflow-y-auto h-auto max-h-c-main'>
          {data.entries.map(({ lexemes }, i) => {
            return (
              <div
                className={''.concat(
                  i !== data.entries.length - 1 ? 'mb-8' : ''
                )}
              >
                {lexemes.map((lex, j) => {
                  return (
                    <div
                      className={'flex flex-col'.concat(
                        j !== lexemes.length - 1 ? ' mb-2' : ''
                      )}
                    >
                      <div className='flex items-baseline mb-2'>
                        <div className='text-3xl text-gray-600'>
                          {lex.lemma[0]
                            .toUpperCase()
                            .concat(lex.lemma.slice(1))}
                        </div>
                        <i className='ml-4 text-gray-500 font-thin'>
                          {lex.partOfSpeech}
                        </i>
                      </div>
                      <div className='text-sm text-gray-700'>
                        {lex.senses[0].definition}
                      </div>
                      {lex.synonymSets && (
                        <div className='mt-4 flex flex-wrap'>
                          {lex.synonymSets[0].synonyms.map((s) => (
                            <div className='rounded-lg bg-primary p-2 text-white font-medium text-c-xs mb-2 mr-2'>
                              {s}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Index;
