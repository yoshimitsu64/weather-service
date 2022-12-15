import { forwardRef, ReactNode } from 'react';

import Carousel, { ReactElasticCarouselProps } from 'react-elastic-carousel';

const CustomCarousel = forwardRef<any, ReactElasticCarouselProps & { children: ReactNode[] }>(
  (props, ref) => <Carousel ref={ref} {...props} />,
);

export default CustomCarousel;
