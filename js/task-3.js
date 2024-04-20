class StringBuilder {
    #value;

    constructor(value) {
        if(value) {
            this.#value = value;
            return;
        }
        this.#value = '';
    }

    getValue() {
        return this.#value;
    }
    padEnd(str) {
        if(str){
            this.#value = this.#value + str;
        }
    }
    padStart(str) {
        if(str){
            this.#value = str + this.#value;
        }
    }
    padBoth(str) {
        if(str){
            this.#value = str + this.#value + str;
        }
    }
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// My tests
let undef;
builder.padBoth(undef);
console.log(builder.getValue())