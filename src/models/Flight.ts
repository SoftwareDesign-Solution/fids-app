type Flight = {
    id: number;
    airline: string;
    flightNumber: string;
    from: string;
    to: string;
    plannedArrival: Date;
    realArrival: Date;
    estimatedArrival?: Date;
    status: string;
    terminal: string;
    gate: string;
    carousel: string;
    checkIn: string;
    checkInDesk: string;
    checkInTime: Date;
    baggageClaim: string;
    logo: string;
};

export type {
    Flight
};