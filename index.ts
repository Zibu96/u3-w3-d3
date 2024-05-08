let string: string;

string = "ciao";

// string= 645
// questo da errore avendo assegnato alla variabile string il type string
// non possiamo utilizzare un type diverso da quello assegnato

let array: string[];

array = ["ciao", "come", "stai"];

// array= [5, 6 , 7]
// lo stesso vale anche per altri type contenti più elementi come array e oggetti

let array2: (string | number)[];

array2 = ["ciao", "come", "stai", 6767, 43434];
// usando UNION possiamo far passare più type tra quelli selezionati
