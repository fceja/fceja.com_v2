import { useEffect, useRef, useState } from "react";

import "@scss/common/components/Headlines.scss";
import LoadingSquare from "@common/components/LoadingSquare";

type ResponseData = {
  statusCode: number;
  body: {
    data: [
      {
        title: string;
        source: string;
        url: string;
      },
    ];
  };
};

const Headlines = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [headlines, setHeadlines] = useState<{ source: string; url: string }[]>([]);
  const [responseData, setResponseData] = useState<ResponseData | null>(null);
  const isPlatformSupportedRef = useRef(false)

  const userAgent = navigator.userAgent;
  isPlatformSupportedRef.current = userAgent.includes('Chrome') || userAgent.includes('Firefox')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_APP_AWS_API_URL;
        const apiUrl = `${baseUrl}/news/top`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        setResponseData(data);

      } catch (error) {
        console.error(error);

      } finally {
        setIsLoading(false);
      }
    }

    fetchData()

  }, [])

  useEffect(() => {
    if (!responseData || responseData.statusCode != 200) return;
    responseData.body.data.forEach((article) => {
      setHeadlines((headlines) => [
        ...headlines,
        {
          source: `${article.title} - ${article.source}`,
          url: article.url,
        },
      ]);
    });
  }, [responseData]);


  return (
    <>
      {isLoading && <LoadingSquare className="headlines" />}
      {!isLoading && responseData && headlines &&
        <div className={`headlines-container${!isPlatformSupportedRef.current ? "-safari" : ""}`}>
          <ul className="headline-list d-flex align-items-center">
            {headlines.map((elem, index) => {
              return (
                <li key={index} className="headline-li">
                  <a className="headline-link" href={`${elem.url}`} target="_blank" rel="noreferrer">{`${elem.source}`}</a>
                </li>
              )
            })}
          </ul>
        </div>
      }
    </>
  );
};

export default Headlines;
