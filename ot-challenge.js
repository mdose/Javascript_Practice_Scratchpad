(function() {
  // all values are in minutes ( 10 * 60 = 600 or 10am )
  var inputShift = { start: 600, end: 900, interval: 15, tables: 2 };
  // changed variable name shift to inputShift to avoid confusion with shift in generateTimeSlots

  function generateTimeSlots(shift) {
    // starting at 600, keep adding 15 to it, and everytime you do, add {num: 2} to your dict
    var timeSlots = {}

    for(var t = shift.start; t <= shift.end; t += shift.interval) {
      timeSlots[t] = shift.tables
    }

    return timeSlots
  }

  // call the function to get our timeSlots object
  var inputTimeSlots = generateTimeSlots(inputShift);

  var inputReservations = [
    { scheduled: 600, turnTime: 90 },
    { scheduled: 675 , turnTime: 75 },
    { scheduled: 690 , turnTime: 90 }
  ];

  function calculateAvailability(timeSlots, reservations) {
    // for each time in timeSlots, look through reservations;
    // find any overlapping reservations.  Count how many overlapping, and subtract that
    // number from 2 (or the number stored in the timeSlots obj).  If it hits 0, it's not
    // availble, if it's above 0, it's available

    var availability = {}

    for(var time in timeSlots) {
      var tables = timeSlots[time]
      var numReserved = countReservedAt(reservations, time)
      var tablesLeft = tables - numReserved

      if(tables > 0) {
        availability[time] = true
      } else {
        availability[time] = false
      }
    }

    return availability
  }

  function countReservedAt(reservations, time) {
    // create a variable called num assigned to 0
    // create a variable called reservationStart assigned to reservation.scheduled
    // create a variable called reservationEnd assigned to reseveration.scheduled
    // + reservation.turnTime
    // for each reseveration obj in inputReservations (which is a list of objects),
    // determine if time >= reservationStart && time <= reservationEnd, if so,
    // num += 1, because one table is taken for that timeSlot
    // Return num as final result to be passed to numReserved in calculateAvailability

    var num = 0;
    var reservationStart = reservation.scheduled
    var reservationEnd = reservation.scheduled + reservation.turnTime

    for(var reservation in reservations) {
      if time >= reservationStart && time <= reservationEnd
        num += 1
    }

    return num
  }

  var availability = calculateAvailability(inputTimeSlots, inputReservations);
  // 600 - available/not
  // 615 - available/not
  // 630 - available/not
  // ...



  // unit tests
  // describe('availability engine', function() {
  //   it('should generate timeslots', function() {
  //     expect(timeSlots).toBe('??');
  //   });
  //   it('should calculate availability', function() {
  //     expect(availability).toBe('??');
  //   });
  // });
})();
