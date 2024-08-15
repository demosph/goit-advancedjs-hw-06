let some: unknown;
some = 'Text';

let str: string;

// Необхідно зробити перевірку типу перед присвоєнням
if (typeof some === 'string') {
  str = some;
}

export {};