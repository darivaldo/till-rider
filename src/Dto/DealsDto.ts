export class DealsDto {
    public $key: string;
    public $value: string;

    public passengerId: String;
    public driverId: String;
    public tripId: String;

    public otp: number;
    public status: String;

    //public origin: OriginDto,
    //public destination: DestinationDto,

    public currency: String;
    public paymentMethod: String;
    public promocode: String;

    public distance: number;
    public fee: number;
    public note: number;
    public discount: number;

    public createdAt: Date;
    public updatedAt: Date;

}


