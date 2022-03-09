export default class Order {
    public idOrder: string;

    public clientName: string;

    public pizzaName: string;

    public size: string;

    public ingredients: string[];

    public price: number;

    public soda: string;

    constructor(id: string, cliente: string, pizzaName: string, tamaño: string, ingredientes: string[], price: number, soda: string) {
        this.idOrder = id;
        this.clientName = cliente;
        this.pizzaName = pizzaName;
        this.size = tamaño;
        this.ingredients = ingredientes;
        this.price = price;
        this.soda = soda;
    }
}