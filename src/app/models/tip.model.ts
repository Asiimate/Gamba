export interface Tip {
    _id?: string;
    username: string;
    dailynumber: number;
    numbers: number[];
    date?: Date;
    winningclass?: string;
    winningnumbers?: number[];
    winningdaily?: number;
}