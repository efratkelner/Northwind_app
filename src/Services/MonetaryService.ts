class MonetaryService {
	
    public getVat(price: number, percent: number) { // VAT = Value Added Tax = מע"מ
        return price * percent / 100;
    }

}

export const monetaryService = new MonetaryService();
