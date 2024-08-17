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

  /* safari had issues with animations applied via css, we apply with javascript instead */
  useEffect(() => {
    if (!headlines) return;

    const headlineList = document.querySelector('.headline-list') as HTMLElement;
    if (!headlineList) return;

    /* define pause animation */
    const pauseAnimation = () => {
      headlineList.style.animationPlayState = 'paused';
      headlineList.classList.remove('animation-running');
      headlineList.classList.add('animation-paused');
    };

    /* define start animation */
    const startAnimation = () => {
      headlineList.style.animationPlayState = 'running';
      headlineList.classList.remove('animation-paused');
      headlineList.classList.add('animation-running');
    };

    /* add animation styles and run */
    headlineList.style.animationName = 'scrollLeft';
    headlineList.style.animationDuration = '200s';
    headlineList.style.animationTimingFunction = 'linear';
    headlineList.style.animationIterationCount = 'infinite';
    headlineList.style.animationPlayState = 'running';
    headlineList.style.willChange = 'transform';
    headlineList.classList.add('animation-running');

    /* determine if touch or mouse device */
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      headlineList.addEventListener('touchstart', () => {
        pauseAnimation();

        setTimeout(() => {
          startAnimation();
        }, 2000);
      });
    } else {
      headlineList.addEventListener('mouseenter', pauseAnimation);
      headlineList.addEventListener('mouseleave', startAnimation);
    }

    /* cleanup event listeners */
    return () => {
      if (isTouchDevice) {
        headlineList.removeEventListener('touchstart', pauseAnimation);
        headlineList.removeEventListener('touchend', startAnimation);
      } else {
        headlineList.removeEventListener('mouseenter', pauseAnimation);
        headlineList.removeEventListener('mouseleave', startAnimation);
      }
    };
  }, [headlines]);

  return (
    <>
      {isLoading && <LoadingSquare className="headlines" />}
      {!isLoading && responseData && headlines &&
        <div className="headlines-container">
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
