RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.freestyle(25, 25)
basic.forever(function () {
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_3)) {
        RingbitCar.freestyle(10, 10)
        basic.pause(25)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_0)) {
        RingbitCar.freestyle(0, -10)
        basic.pause(25)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_1)) {
        RingbitCar.freestyle(0, 25)
        basic.pause(50)
    }
    if (RingbitCar.tracking(RingbitCar.TrackingStateType.Tracking_State_2)) {
        RingbitCar.freestyle(25, 0)
        basic.pause(50)
    }
})
