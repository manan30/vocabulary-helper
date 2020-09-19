import React from 'react';
import { useQuery } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import Svg from '../components/svg';
import getWordDetails from '../utils/api';

function WordResults() {
  const { word } = useParams();
  const history = useHistory();
  const { data, isError, isLoading } = useQuery(
    ['word-details', word],
    getWordDetails,
    {
      staleTime: 86400
    }
  );

  if (!data || (data && !data.entries.length)) {
    return (
      <div className='flex justify-center'>
        <div className='mt-12 h-48 w-48 sm:h-64 sm:w-64 md:h-c-24 md:w-c-24 lg:h-c-24 lg:w-c-24'>
          {!isLoading && !isError && !data && <Svg type='initial' />}
          {isLoading && <Svg type='loading' />}
          {(isError || (data && !data.entries.length)) && <Svg type='error' />}
        </div>
      </div>
    );
  }

  if (data && data.entries.length > 0) {
    return (
      <div className='flex justify-center w-full h-auto max-h-c-main'>
        <div className='rounded-lg shadow p-6 w-4/5 md:w-1/2 lg:w-1/2 mt-12 overflow-y-auto'>
          {data.entries.map(({ lexemes }, i) => {
            const idx = i;
            return (
              <div
                className={''.concat(
                  i !== data.entries.length - 1 ? 'mb-8' : ''
                )}
                key={idx}
              >
                {lexemes.map((lex, j) => {
                  const jdx = j;
                  return (
                    <div
                      className={'flex flex-col'.concat(
                        j !== lexemes.length - 1 ? ' mb-2' : ''
                      )}
                      key={jdx}
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
                          {lex.synonymSets[0].synonyms.map((s, k) => {
                            const kdx = k;
                            return (
                              <div
                                key={kdx}
                                className='rounded-lg bg-primary p-2 text-white font-medium text-c-xs mb-2 mr-2 cursor-pointer'
                                onClick={() => history.push(s)}
                                onKeyUp={() => history.push(s)}
                                role='button'
                                tabIndex={-1}
                              >
                                {s}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default WordResults;
