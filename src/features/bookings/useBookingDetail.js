import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getBooking } from '../../services/apiBookings';

function useBookingDetail() {
  const { bookingId } = useParams();

  const {
    isPending,
    data: booking,
    error,
  } = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });
  return { isPending, error, booking };
}

export default useBookingDetail;
