export class VehiclesDto {
    public $key: string;
    public $value:string;
    public uid: string;
    public id: number;

    public icon: string;
    public name: string; 

    public base_fare: number;
    public price_min: number;
    public price: number;

    public minimum_price: number;
    public fee: number;
    
    public active: boolean;

    public data_cadastro: Date;
    public data_atualizacao: Date;

    constructor() {

        this.$key = "AIzaSyCYXDwRtUucrZnDfsCyNQZelvrbWQMi_bg";
        this.$value = "AIzaSyCYXDwRtUucrZnDfsCyNQZelvrbWQMi_bg";
        this.uid= "AIzaSyCYXDwRtUucrZnDfsCyNQZelvrbWQMi_bg";
        this.id= 0;
        this.icon= "";
        this.name= ""; 
        this.base_fare= 0;
        this.price_min= 0;
        this.price= 0;
        this.fee= 0;
        this.minimum_price= 0;
        this.active= true;
        this.data_cadastro= new Date();
        this.data_atualizacao= new Date();
    }

    // var vehicles = new Array();

// var vehicle = new VehiclesDto();
// vehicle.id = 1;
// vehicle.name = "Vip";
// vehicle.icon = "../../assets/icon/suv.svg";
// vehicle.base_fare=8.0;
// vehicle.minimum_price=15.00;
// vehicle.fee=0;
// vehicle.active=true;
// vehicles.push(vehicle);

// var vehicle = new VehiclesDto();
// vehicle.id = 2;
// vehicle.name = "Luxo"
// vehicle.icon = "../../assets/icon/suv.svg"
// vehicle.base_fare=5.0;
// vehicle.minimum_price=10.00;
// vehicle.fee=0;
// vehicle.active=true;
// vehicles.push(vehicle);

// var vehicle = new VehiclesDto();
// vehicle.id = 3;
// vehicle.name = "Social"
// vehicle.icon = "../../assets/icon/suv.svg"
// vehicle.base_fare=1.0;
// vehicle.minimum_price=5.50;
// vehicle.fee=0;
// vehicle.active=true;
// vehicles.push(vehicle);

// var vehicle = new VehiclesDto();
// vehicle.id = 4;
// vehicle.name = "Vans"
// vehicle.icon = "../../assets/icon/vans.svg"
// vehicle.base_fare=15.0;
// vehicle.minimum_price=20.00;
// vehicle.fee= 0;
// vehicle.active=true;
// vehicles.push(vehicle);


}


